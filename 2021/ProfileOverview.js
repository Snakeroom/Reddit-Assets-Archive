// https://www.redditstatic.com/desktop2x/ProfileOverview.2fab28805537e98f5d1c.js
// Retrieved at 3/24/2021, 7:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileOverview"], {
		"./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"34f3ef97014d"}')
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
				return y
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "b", (function() {
				return E
			}));
			var r, o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/performanceTimings/index.tsx"),
				i = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(r || (r = {}));
			var c, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(c || (c = {}));
			var p = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				u = s("./src/reddit/selectors/platform.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const b = Object(o.a)(i.g),
				f = Object(o.a)(i.e),
				g = Object(o.a)(i.h),
				x = Object(o.a)(i.c),
				y = Object(o.a)(i.f),
				P = Object(o.a)(i.j),
				v = Object(o.a)(i.i),
				O = () => async (e, t, {
					gqlContext: s
				}) => {
					const o = t(),
						n = Object(p.e)(o),
						i = Object(p.d)(o),
						c = Object(h.I)(o);
					if (n || !i) return;
					e(g());
					let u = !1;
					try {
						const t = c ? r.LoggedInGeo : r.LoggedOutGeo,
							o = await ((e, t, s) => Object(a.a)(e, {
								...d,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(s(), t);
						if (o.ok && o.body) {
							const {
								data: t
							} = o.body;
							if (C(t)) {
								if (j(t)) {
									e(x({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), u = !0
								} else if (I(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: r,
											interactedSubreddit: o,
											category: n
										} = s.focusRecommendations[0],
										i = [r, o],
										a = Object(m.d)(i),
										d = Object(l.b)(i),
										c = Object(m.c)(r),
										p = {
											recommendedSubredditIds: [r.id],
											interactedSubredditIds: [o.id],
											subreddits: a,
											subredditsAboutInfo: d,
											subredditTopContent: c,
											category: n,
											lastLoadedEnv: "client"
										};
									e(b(p)), u = !0
								}
							} else u = !1
						}
					} catch (y) {
						u = !1
					}
					u || e(f({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, C = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, j = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, I = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						r = t && t.type;
					return !!(s && !j(e) && r === c.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, E = () => async (e, t, s) => {
					var r, o;
					const i = t(),
						a = Object(p.g)(i);
					if (Object(p.f)(i) || null === a || "client" === a) {
						const s = null === (o = null === (r = Object(u.b)(t())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === o ? void 0 : o.route.chunk,
							a = Object(h.J)(i);
						return Object(n.i)(() => e(O()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(y({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/pages/profileOverview/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileOverviewConversationsPending", (function() {
				return Pe
			})), s.d(t, "profileOverviewConversationsLoaded", (function() {
				return ve
			})), s.d(t, "profileOverviewConversationsFailed", (function() {
				return Oe
			})), s.d(t, "profileOverviewChronoPending", (function() {
				return Ce
			})), s.d(t, "profileOverviewChronoLoaded", (function() {
				return je
			})), s.d(t, "profileOverviewChronoFailed", (function() {
				return Ie
			})), s.d(t, "profileOverviewConversationsRequested", (function() {
				return Ee
			})), s.d(t, "profileOverviewChronoRequested", (function() {
				return we
			})), s.d(t, "profileOverviewRequested", (function() {
				return Se
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/pick.js"),
				o = s.n(r),
				n = s("./src/reddit/actions/moderatingSubreddits.ts"),
				i = s("./src/reddit/actions/pages/profileShared.ts"),
				a = s("./src/reddit/actions/subreddit.ts"),
				d = s("./src/reddit/endpoints/page/profileOverviewPage.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/constants/postLayout.ts"),
				m = s("./src/reddit/constants/parameters.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/selectors/listings.ts"),
				h = s("./src/reddit/selectors/profile.ts"),
				b = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				g = s("./src/lib/makeActionCreator/index.ts"),
				x = s("./src/reddit/actions/changeUsername.ts"),
				y = s("./src/reddit/actions/contentGate.ts"),
				P = s("./src/reddit/actions/externalAccount.ts"),
				v = s("./src/reddit/actions/gold/powerups.ts"),
				O = s("./src/reddit/actions/pinnedPost.ts"),
				C = s("./src/reddit/actions/platform.ts"),
				j = s("./src/reddit/actions/profile/index.ts"),
				I = s("./src/reddit/actions/trophyCase.ts"),
				E = s("./src/reddit/constants/errors.ts"),
				w = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				S = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				L = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				k = s("./src/lib/initializeClient/installReducer.ts"),
				N = s("./node_modules/redux/es/redux.js"),
				T = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const M = {};
			var _ = (e = M, t) => {
				switch (t.type) {
					case L.c:
					case L.b:
					case T.c:
					case T.b: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case L.a:
					case T.a: {
						const {
							key: s,
							error: r
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					default:
						return e
				}
			};
			const F = {};
			var R = (e = F, t) => {
					switch (t.type) {
						case L.c:
						case T.c: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case L.b:
						case L.a:
						case T.b:
						case T.a: {
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
				A = Object(N.c)({
					error: _,
					pending: R
				});
			const B = {};
			var V = (e = B, t) => {
				switch (t.type) {
					case L.b: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: {}
						}
					}
					case T.b: {
						const {
							key: s,
							fetchedToken: r
						} = t.payload, o = e[s];
						return {
							...e,
							[s]: {
								...o,
								[r]: !0
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
						case L.b:
						case T.b: {
							const {
								key: s,
								overviewIds: r
							} = t.payload, o = e[s] || [];
							return {
								...e,
								[s]: [...o, ...r]
							}
						}
						default:
							return e
					}
				},
				D = s("./src/lib/omitKey/index.ts");
			const H = {};
			var U = (e = H, t) => {
					switch (t.type) {
						case L.b:
						case T.b: {
							const {
								key: s,
								dist: r,
								token: o
							} = t.payload;
							return o ? {
								...e,
								[s]: {
									dist: r,
									token: o
								}
							} : Object(D.a)(e, s)
						}
						default:
							return e
					}
				},
				G = Object(N.c)({
					api: A,
					fetchedTokens: V,
					ids: W,
					loadMore: U
				});
			const q = {};
			var z = (e = q, t) => {
				switch (t.type) {
					case L.f:
					case L.e: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case L.d: {
						const {
							key: s,
							error: r
						} = t.payload;
						return {
							...e,
							[s]: r || {}
						}
					}
					default:
						return e
				}
			};
			const J = {};
			var X = (e = J, t) => {
					switch (t.type) {
						case L.f: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case L.e:
						case L.d: {
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
				Q = Object(N.c)({
					error: z,
					pending: X
				}),
				Z = s("./src/reddit/actions/profileConversations.ts");
			const $ = {};
			var Y = (e = $, t) => {
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
							error: r
						} = t.payload;
						return {
							...e,
							[s]: r || {}
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
				se = Object(N.c)({
					error: Y,
					pending: te
				});
			const re = {};
			var oe = (e = re, t) => {
					switch (t.type) {
						case L.e:
						case Z.b:
						case Z.e:
							return {
								...e, ...t.payload.extraComments
							};
						default:
							return e
					}
				},
				ne = Object(N.c)({
					api: se,
					models: oe
				}),
				ie = s("./node_modules/lodash/mapValues.js"),
				ae = s.n(ie),
				de = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				ce = s("./src/reddit/constants/comments.ts");
			const le = {};

			function me(e) {
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
			const pe = (e, t, s) => {
				const r = {};
				for (const o in t) {
					const e = t[o],
						s = e.postId;
					r.hasOwnProperty(s) ? r[s] = {
						...r[s],
						[o]: e
					} : r[s] = {
						[o]: e
					}
				}
				for (const o in s) {
					const e = s[o],
						t = e.postId;
					r.hasOwnProperty(t) ? r[t] = {
						...r[t],
						[o]: e
					} : r[t] = {
						[t]: e
					}
				}
				return r
			};
			var ue = (e = le, t) => {
				switch (t.type) {
					case L.e:
					case Z.e: {
						const {
							comments: s,
							extraComments: r,
							postIds: o,
							profileName: n
						} = t.payload, i = pe(o, s, r), a = {};
						for (const e of o) {
							a[Object(de.a)(e, n)] = i.hasOwnProperty(e) ? me(i[e]) : {}
						}
						return {
							...e,
							...a
						}
					}
					case Z.b: {
						const {
							comments: s,
							commentLists: r,
							extraComments: o,
							extraCommentsId: n,
							postIds: i,
							profileName: a
						} = t.payload;
						if (0 === i.length) {
							const t = Object.keys(e).find(t => void 0 !== e[t][n]);
							if (!t) return e;
							const s = {
									...e[t]
								} [n].prev,
								r = s && s.id || "";
							return {
								...e,
								[t]: {
									...e[t],
									[r]: {
										...e[t][r],
										next: null
									}
								}
							}
						}
						const d = i[0],
							c = me(pe(i, s, o)[d]),
							l = Object(de.a)(d, a),
							m = {
								...e[l]
							},
							p = m[n].prev,
							u = p && p.id || "",
							h = r[d].head,
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
					case L.e:
					case Z.e: {
						const {
							commentLists: s,
							postIds: r,
							profileName: o
						} = t.payload, n = {};
						for (const e of r) {
							n[Object(de.a)(e, o)] = s[e] && s[e].head ? s[e].head.id : null
						}
						return {
							...e,
							...n
						}
					}
					default:
						return e
				}
			};
			const fe = {};
			var ge = (e = fe, t) => {
					switch (t.type) {
						case L.e:
						case Z.e: {
							const {
								postIds: s,
								profileName: r
							} = t.payload, o = {};
							for (const e of s) {
								o[Object(de.a)(e, r)] = e
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
				xe = Object(N.c)({
					api: Q,
					extraComments: ne,
					keyToCommentThreadLinkSets: ue,
					keyToHeadCommentId: be,
					keyToPostId: ge
				}),
				ye = Object(N.c)({
					chrono: G,
					conversations: xe
				});
			Object(k.a)({
				pages: {
					profileOverview: ye
				}
			});
			const Pe = Object(g.a)(L.f),
				ve = Object(g.a)(L.e),
				Oe = Object(g.a)(L.d),
				Ce = Object(g.a)(L.c),
				je = Object(g.a)(L.b),
				Ie = Object(g.a)(L.a),
				Ee = (e, t, s, r) => async (r, o, n) => {
					const i = o(),
						a = !!i.listings.postOrder.ids[e],
						c = !!Object(u.c)(i, {
							listingKey: e
						});
					if (!!Object(u.d)(i, {
							listingKey: e
						}) || a && !c) return;
					r(Pe({
						key: e
					}));
					const l = await Object(S.a)("profile", () => Object(d.b)(n.apiContext(), t, s)),
						m = l.body,
						{
							pinned: p,
							postIds: b
						} = m;
					if (l.ok) {
						r(ve({
							key: e,
							meta: i.meta,
							profileName: t,
							...m,
							postIds: b
						}));
						const s = Object(h.m)(o(), t);
						r(Object(O.h)({
							profileId: s,
							pinned: p
						}))
					} else r(Oe({
						account: l.body.data ? l.body.data.account : null,
						error: l.body.reason ? {
							type: l.body.reason
						} : l.error,
						key: e
					})), l.body.reason === E.a.DeletedProfile && r(Object(y.p)({
						profileName: t
					})), r(Object(C.m)(l.status))
				}, we = (e, t, s, r) => async (r, o, n) => {
					const i = o(),
						a = !!Object(b.f)(i, {
							listingKey: e
						}).length,
						c = !!Object(b.a)(i, {
							listingKey: e
						});
					if (!!Object(b.b)(i, {
							listingKey: e
						}) || a && !c) return;
					r(Ce({
						key: e
					}));
					const l = await Object(S.a)("profile", () => Object(d.a)(n.apiContext(), t, s)),
						m = l.body,
						{
							pinned: p
						} = m;
					if (l.ok) {
						r(je({
							key: e,
							meta: i.meta,
							...m
						}));
						const s = Object(h.m)(o(), t);
						r(Object(O.h)({
							profileId: s,
							pinned: p
						}))
					} else r(Ie({
						account: l.body.data ? l.body.data.account : null,
						error: l.body.reason ? {
							type: l.body.reason
						} : l.error,
						key: e
					})), l.body.reason === E.a.DeletedProfile && r(Object(y.p)({
						profileName: t
					})), r(Object(C.m)(l.status))
				}, Se = e => async (t, s, r) => {
					const {
						queryParams: d,
						params: u
					} = e, {
						sort: b,
						t: g
					} = Object(i.a)(s(), d), {
						profileName: y
					} = u;
					let O = !1;
					const E = l.e[Object(p.O)(s(), {})],
						S = y.toLowerCase(),
						L = {
							...o()(e.queryParams, m.l),
							sort: b,
							layout: E,
							t: g
						},
						k = [t(j.d(S))];
					if (E === l.e[l.g.Compact]) {
						const r = Object(w.a)(S, c.lb, b, e.queryParams);
						s().pages.profileOverview.chrono.ids[r] ? O = !0 : k.push(t(we(r, S, L, !0)))
					} else {
						const r = Object(w.a)(S, c.mb, b, e.queryParams);
						s().listings.postOrder.ids[r] && !s().listings.postOrder.api.error[r] ? O = !0 : k.push(t(Ee(r, S, L, !0)))
					}
					if (k.push(t(Object(n.b)())), await Promise.all(k), O) return;
					const N = s();
					if (!N.platform.currentPage) return;
					if (200 !== N.platform.currentPage.status) return;
					const T = Object(h.m)(s(), S),
						M = Object(f.mb)(N, {
							userName: y
						}).id;
					t(C.l({
						title: Le(s(), y)
					})), Object(f.L)(N) && Object(f.N)(N, y) && t(Object(x.f)());
					const _ = [t(Object(a.q)()), t(I.b(S, T)), t(j.b(S)), t(P.o(y)), t(j.g(y)), t(v.e(y, M))];
					await Promise.all(_)
				}, Le = (e, t) => Object(h.q)(e, {
					profileName: t
				})
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const a = 5;

			function d(e) {
				const {
					post: t,
					postIds: s,
					subredditId: r
				} = e, d = Object(n.e)(e => e.subreddits.questions), c = Object(n.e)(e => e.posts.models);
				if (!s) return null;
				const l = s.indexOf(t.id);
				if (l < 0) return null;
				if (!u(t.id)) return null;
				const m = new Set;
				let p = !1;
				for (let o = 0, n = -999; o <= l; o += 1) {
					const e = s[o],
						t = c[e].belongsTo.id;
					u(e) && o - n >= a && !m.has(t) && (n = o, m.add(t), o === l && (p = !0))
				}
				return p ? o.a.createElement(i.a, {
					subredditId: r,
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
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(r.a)({
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
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				n = s.n(o);
			const i = Object(r.a)({
				resolved: {},
				chunkName: () => "InFeedChaining",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), s.e("InFeedChaining")]).then(s.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx"
				}
			}, {
				fallback: n.a.createElement("div", null),
				ssr: !1
			});
			t.a = i
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
				chain: "_39yVNiqPz4VPgNZTlpA5fx",
				adLinkWrapper: "_115kZaIAhrTbhLHOXtz01X",
				adsGalleryDisplayLink: "_3g19_IiwClMjxmNOrShwZw",
				horizontalVotes: "uFwpR-OdmueYZxdY_rEDX"
			}
		},
		"./src/reddit/components/LargePost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				d = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				c = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				l = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				m = s("./src/reddit/actions/inFeedChaining.ts"),
				p = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				h = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				b = s("./src/reddit/models/Media/index.ts"),
				f = s("./src/reddit/models/Post/index.ts"),
				g = s("./src/reddit/models/Vote/index.ts"),
				x = s("./src/reddit/selectors/activeModalId.ts"),
				y = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				P = s("./src/reddit/selectors/inFeedChaining.ts"),
				v = s("./src/reddit/selectors/moderatorPermissions.ts"),
				O = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				j = s("./src/lib/ads/index.ts"),
				I = s("./src/lib/classNames/index.ts"),
				E = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				w = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				S = s("./src/reddit/components/AwardBadges/index.tsx"),
				L = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				k = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				N = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				T = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				M = s("./src/reddit/components/Flatlist/index.tsx"),
				_ = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				F = s("./src/reddit/components/ModModeReports/index.tsx"),
				R = s("./src/reddit/components/ModModeReports/helpers.ts"),
				A = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				B = s("./src/reddit/components/PostContainer/index.tsx"),
				V = s("./src/reddit/components/PostLeftRail/index.tsx"),
				K = s("./src/reddit/components/PostMedia/index.tsx"),
				W = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				D = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				H = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				U = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				G = s.n(U);
			const {
				fbt: q
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var z = () => {
					const e = Object(D.a)();
					return o.a.createElement("div", {
						className: G.a.container
					}, o.a.createElement(H.a, {
						className: G.a.pinnedIcon,
						isFilled: e
					}), o.a.createElement("span", {
						className: G.a.metaText
					}, q._("pinned by moderators", null, {
						hk: "1qU8t4"
					})))
				},
				J = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				X = s("./src/reddit/components/PostTitle/index.tsx"),
				Q = s("./src/reddit/components/PostTopLine/index.tsx"),
				Z = s("./src/reddit/components/SourceLink/index.tsx"),
				$ = s("./src/reddit/constants/experiments.ts"),
				Y = s("./src/reddit/contexts/InsideOverlay.tsx"),
				ee = s("./src/reddit/contexts/PageLayer/index.tsx"),
				te = s("./src/reddit/contexts/Post/index.tsx"),
				se = s("./src/reddit/helpers/isCrosspost.ts"),
				re = s("./src/reddit/helpers/postEvent.ts"),
				oe = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				ne = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ie = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const ae = Object(i.a)(O.J, e => e.some(ie.c)),
				de = Object(i.a)(ae, e => e),
				ce = (e, t) => Object(ne.c)(e, {
					experimentName: $.mb,
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
				me = s("./src/reddit/components/PostTopMeta/index.tsx"),
				pe = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ue = s.n(pe),
				he = s("./src/reddit/components/LargePost/index.m.less"),
				be = s.n(he);
			const fe = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(O.J)(e, {
						listingKey: s
					}) : void 0
				},
				ge = Object(n.b)(() => Object(i.c)({
					autoplayPref: C.b,
					activeModalId: x.a,
					hideNSFWPref: C.B,
					flairStyleTemplate: ee.S,
					isCurrentUserProfilePost: O.k,
					isLoggedIn: C.J,
					isActive: O.j,
					isPostChainDismissed: P.c,
					isPostChained: P.d,
					listingBelowVariant: oe.b,
					moderatorPermissions: v.j,
					modModeEnabled: ee.Q,
					posts: fe,
					postHeightVariant: ce,
					showEditFlair: le.a,
					showAwardsPlaque: y.a
				}), (e, {
					listingKey: t,
					listingName: s,
					postId: r
				}) => ({
					chainPost: () => {
						s && t && e(Object(m.d)({
							listingKey: t,
							listingName: s,
							postId: r
						}))
					},
					handleVote: t => {
						const s = t === g.a.upvoted ? Object(p.U)(r) : Object(p.r)(r);
						e(s)
					},
					onIgnoreReports: () => e(Object(p.S)(r)),
					onOpenReportsDropdown: t => e(Object(u.h)({
						tooltipId: t
					}))
				})),
				xe = o.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						chainPost: r,
						className: n,
						currentUser: i,
						eventFactory: m,
						flairStyleTemplate: p,
						forceLoadMedia: u,
						hideNSFWPref: g,
						hostPostId: x,
						imageGalleryCurrentItem: y,
						inSubredditOrProfile: P = !1,
						isCommentsPage: v,
						isCurrentUserProfilePost: O,
						isFrontpage: C,
						isGalleryTileLayoutDefault: D,
						isLoggedIn: H,
						isOverlay: U,
						isPostChainDismissed: G,
						isPostChained: q,
						isTopicPage: Y,
						listingBelowVariant: ee,
						listingKey: te,
						listingName: oe,
						moderatorPermissions: ne,
						modModeEnabled: ie,
						onClickPost: ae,
						onIgnoreReports: de,
						onOpenReportsDropdown: ce,
						post: le,
						postHeightVariant: pe,
						scrollerItemRef: he,
						shouldShowGalleryTileOption: fe,
						showAwardsPlaque: ge,
						showEditFlair: xe,
						subredditOrProfile: ye,
						userIsOp: Pe,
						isActionBarAnimationEnabled: ve,
						postId: Oe,
						postIds: Ce
					} = e, je = !!e.redditStyle || !!e["data-redditstyle"], Ie = je ? void 0 : p, Ee = Object(c.a)(ne), we = ie && Ee, Se = Object(a.a)(ne), Le = Object(d.a)(ne), ke = Object(R.c)(le), Ne = !!le.media && le.media.type === b.o.RTJSON, Te = Pe && Ne, Me = s ? s - V.a : void 0, _e = !(C && H || Y), Fe = (e => e === $.Dc.OnlyTitles)(pe) && !Object(se.a)(le), Re = (e => e === $.Dc.MediumHeight)(pe) && !Object(se.a)(le), Ae = (e => {
						const {
							post: t,
							postIds: s,
							posts: r
						} = e;
						if (!Object(f.p)(t)) return;
						const o = s && 0 === s.indexOf(t.id),
							n = s && 1 === s.indexOf(t.id),
							i = r && r[1] && Object(f.p)(r[1]);
						return {
							hasTopCompactPostStyles: o && i,
							hasBottomCompactPostStyles: n,
							showPinnnedHeader: o
						}
					})(e), Be = !!ee && !Object($.Fd)(ee), Ve = (!P || Be) && !le.isSponsored, Ke = Object(j.t)(le, y), {
						source: We
					} = Ke, De = o.a.createElement(o.a.Fragment, null, o.a.createElement(B.a, {
						className: Object(I.a)(be.a.container, n, ue.a.largeAndMediumPostStyles, ue.a.largeAndMediumActiveStyles, Object(l.a)(e), {
							[ue.a.mUseRedditTheme]: je,
							promotedvideolink: le.isSponsored && !(le.media && b.a.has(le.media.type)),
							[be.a.topCompactPost]: Ae && Ae.hasTopCompactPostStyles,
							[be.a.bottomCompactPost]: Ae && Ae.hasBottomCompactPostStyles
						}),
						isOverlay: U,
						style: Object(l.b)(e.flairStyleTemplate),
						post: le,
						onClick: ae,
						onPostContentClick: r,
						eventFactory: m
					}, o.a.createElement(J.a, {
						model: le,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: Ie,
						redditStyle: je,
						subreddit: ye,
						isActionBarAnimationEnabled: ve,
						postId: Oe
					}), o.a.createElement(A.a, {
						className: Object(I.a)(be.a.backgroundWrapper, {
							[be.a.isEvent]: Object(re.a)(le)
						}),
						"data-click-id": "background",
						flairStyleTemplate: Ie,
						post: le,
						redditStyle: je
					}, o.a.createElement(T.a, {
						post: le
					}), Ae && Ae.showPinnnedHeader && o.a.createElement(z, null), o.a.createElement(Q.a, {
						className: be.a.postTopLine,
						hideAwards: ge,
						hideNSFWPref: g,
						hostPostId: x,
						iconClassName: be.a.postTopLineIcon,
						inSubredditOrProfile: P,
						isCommentsPage: !!v,
						isCompactPinnedPost: !!Ae,
						isCurrentUserProfilePost: O,
						isOverlay: !!U,
						isTopicPage: !!Y,
						listingKey: te,
						post: le,
						shouldShowSubscribeButton: _e,
						showSubreddit: Ve,
						showSubredditIcon: !0,
						subredditOrProfile: ye
					}), o.a.createElement(X.c, {
						className: be.a.postTitle,
						post: le,
						redditStyle: je,
						size: X.b.Large,
						titleColor: Ie && Ie.postTitleColor,
						isOverlay: U
					}), le.source && !le.isSponsored && !(le.media && Object(b.G)(le.media)) && o.a.createElement(Z.a, {
						className: be.a.sourceLink,
						post: le
					}), o.a.createElement("div", {
						className: be.a.postMediaWrapper
					}, !Ae && o.a.createElement(K.a, {
						isGalleryTileLayoutDefault: D,
						isListing: !0,
						isMediumHeight: Re,
						isNotCardView: !!U,
						isTitleOnly: Fe,
						showCentered: !0,
						flairStyleTemplate: Ie,
						post: le,
						availableWidth: Me,
						shouldLoad: u,
						scrollerItemRef: he,
						autoplayPref: t,
						shouldShowGalleryTileOption: fe
					})), le.isSponsored && We && We.url && o.a.createElement(E.a, {
						className: be.a.adLinkWrapper
					}, o.a.createElement(w.a, {
						post: le,
						adLinkContent: Ke
					})), ie && Ee && ke && o.a.createElement(F.a, {
						onIgnoreReports: de,
						reportable: le
					}), o.a.createElement(_.d, null), ge && o.a.createElement(S.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !1,
						thing: le,
						tooltipType: U ? me.c.Lightbox : void 0
					}), o.a.createElement("div", {
						className: be.a.flatListContainer
					}, o.a.createElement(k.a, {
						className: be.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Ie,
						model: le,
						onVoteClick: e.handleVote
					}), o.a.createElement(M.c, {
						currentUser: i,
						hasModFlairPerms: Se,
						hasModFullPerms: Le,
						hasModPostPerms: Ee,
						hostPostId: x,
						isActionBarAnimationEnabled: ve,
						isLargePost: !0,
						isOverlay: !!U,
						listingKey: te,
						modModeEnabled: ie,
						onIgnoreReports: de,
						onOpenReportsDropdown: ce,
						post: le,
						showEditPost: Te,
						showEditFlair: xe,
						useFlatlistBreakpoints: Object(W.h)({
							editPost: !1,
							save: !we,
							hide: !1,
							report: !1
						})
					}))), C && o.a.createElement(L.a, {
						post: le,
						postIds: null != Ce ? Ce : [],
						subredditId: null == ye ? void 0 : ye.id
					})));
					return o.a.createElement(h.b, null, De, q && !G && o.a.createElement(N.a, {
						className: be.a.chain,
						listingKey: te,
						listingName: oe,
						postId: le.id
					}))
				});
			xe.displayName = "LargePostMemoized";
			t.default = Object(te.b)(ge(Object(Y.b)(xe)))
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
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				d = s("./src/reddit/components/SubredditIcon/index.tsx"),
				c = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				l = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				p = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				u = s.n(p);
			const h = s("./src/lib/lessComponent.tsx").a.wrapped(m.a, "CrosspostIcon", u.a);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: o,
					post: m,
					subredditOrProfile: p
				} = e;
				return n.a.createElement("div", {
					className: Object(i.a)(u.a.container, t)
				}, n.a.createElement(c.a, {
					className: u.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: p.url
				}, n.a.createElement(d.b, {
					className: u.a.subredditIcon,
					shouldHideNsfwIcon: o,
					subredditOrProfile: p
				}), n.a.createElement("span", null, p.displayText)), ((e, t) => {
					if (t) return n.a.createElement("div", {
						role: "img",
						"aria-label": r.fbt._("Crossposted by{author}from{community}", [r.fbt._param("author", Object(l.d)(e)), r.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, n.a.createElement(h, null))
				})(m.author, s), p && p.isQuarantined && n.a.createElement(a.a, null))
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
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Thumbnail/index.tsx"),
				a = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				d = s.n(a);

			function c(e) {
				const {
					source: t
				} = e.post;
				return o.a.createElement("div", {
					className: Object(n.a)(d.a.container, e.className)
				}, o.a.createElement(i.a, {
					className: Object(n.a)(d.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(n.a)(d.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(n.a)(d.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
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
				return J
			})), s.d(t, "a", (function() {
				return Q
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/history/esm/history.js"),
				o = s("./node_modules/lodash/debounce.js"),
				n = s.n(o),
				i = s("./node_modules/lodash/last.js"),
				a = s.n(i),
				d = s("./node_modules/lodash/throttle.js"),
				c = s.n(d),
				l = s("./node_modules/react/index.js"),
				m = s.n(l),
				p = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/lib/ads/index.ts"),
				h = s("./src/lib/classNames/index.ts"),
				b = s("./src/lib/constants/index.ts"),
				f = s("./src/lib/fastdom/index.ts"),
				g = s("./src/lib/lessComponent.tsx"),
				x = s("./src/lib/opener/index.ts"),
				y = s("./src/lib/sentry/index.ts"),
				P = s("./src/reddit/components/PostList/LoadMore.tsx"),
				v = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				O = s("./src/reddit/components/Scroller/Simple.tsx"),
				C = s("./src/reddit/constants/adEvents.ts"),
				j = s("./src/reddit/constants/componentSizes.ts"),
				I = s("./src/reddit/constants/postLayout.ts"),
				E = s("./src/reddit/controls/InternalLink/index.tsx"),
				w = s("./src/reddit/controls/OutboundLink/index.tsx"),
				S = s("./src/reddit/helpers/getClickInfo.ts"),
				L = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				k = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				N = s("./src/reddit/models/Media/index.ts"),
				T = s("./src/reddit/helpers/brandSafety/index.ts"),
				M = s("./src/lib/LRUCache/index.ts"),
				_ = s("./src/telemetry/index.ts"),
				F = s("./src/telemetry/models/Timer.ts"),
				R = s("./src/reddit/components/PostList/index.m.less"),
				A = s.n(R);
			const {
				fbt: B
			} = s("./node_modules/fbt/lib/FbtPublic.js"), V = 500, K = new M.a(V), W = new M.a(V), D = new M.a(V), H = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5
			}, U = g.a.div("SeeMore", A.a), G = g.a.wrapped(k.a, "ArrowRight", A.a), q = (e, t, s, r, o, n, i, a) => {
				const d = `entered-${e}-${t}-${s?`last-${r}-${o}`:""}-${n}`;
				let c = K.get(d);
				return void 0 === c && (c = () => {
					s && i.onBottomViewed(r, o), i.trackOnPostEnteredViewport(e, t, a)
				}, K.set(d, c)), c
			}, z = (e, t, s, r, o) => {
				const n = `left-${e}-${t}`;
				let i = W.get(n);
				return void 0 === i && (i = n => {
					s.trackOnPostExitedViewport(e, t, n, r, o)
				}, W.set(n, i)), i
			}, J = (e, t) => {
				const s = `click-${e}`;
				let r = D.get(s);
				return void 0 === r && (r = (e, s, r, o) => {
					if (s.isSponsored) {
						t.fireAdPixelsOfType(s, C.a.Click);
						const {
							source: e
						} = Object(u.t)(s, o);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							r && (t = Object(w.a)(s.id, r, t).url), Object(x.d)(t, x.c.BLANK)
						}
					} else t.openPost({
						postOrComment: s,
						clickInfo: Object(S.a)(e)
					})
				}, D.set(s, r)), r
			}, X = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class Q extends m.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new M.a(V), this.surveyTriggerCounted = !1, this.viewportHeight = null, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e), this.props.isNpsScrollSurveyEnabled && this.props.surveyTriggerScrollCounted && !this.surveyTriggerCounted && this.surveyTriggerListener(e)
					}, this.surveyTriggerListener = c()(({
						primaryChild: e
					}) => {
						this.viewportHeight && e && e.rectangle && e.rectangle.top > this.viewportHeight && (this.props.surveyTriggerScrollCounted && this.props.surveyTriggerScrollCounted(), this.surveyTriggerCounted = !0)
					}, 500), this.dispatchBrandSafety = n()(({
						getVisibleItemsInViewport: e
					}) => {
						const {
							postsById: t,
							subredditsById: s
						} = this.props, r = e(), o = [];
						r.forEach(e => o.push(e.id));
						const n = o.map(e => t[e]).filter(Boolean),
							i = n.map(e => s[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(T.a)(n, i))
					}, b.d, {
						leading: !0
					})
				}
				UNSAFE_componentWillMount() {
					this.timerId && _.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = _.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, this.timerId) {
						const e = _.c.end(this.timerId);
						setTimeout(() => Object(_.b)(b.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && _.c.cancel(this.timerId), e.postIds.length && (this.timerId = _.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, s;
					if (f.a.read(() => this.checkAndSendScreenview()), this.timerId && _.c.has(this.timerId)) {
						const e = _.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(_.b)(b.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
					this.props.listingKey !== e.listingKey && (this.surveyTriggerCounted = !1);
					const r = null === (t = this.props.postIds) || void 0 === t ? void 0 : t[0];
					r && r !== (null === (s = e.postIds) || void 0 === s ? void 0 : s[0]) && this.props.onFirstPostChanged(r)
				}
				componentWillUnmount() {
					this.timerId && _.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
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
					return _.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const r = _.c.end(e);
					setTimeout(() => {
						s(t(r, F.TimerType.InApp))
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
						...s
					} = this.props, {
						postsById: r,
						...o
					} = e, n = Object.keys(s), i = Object.keys(o);
					if (i.length !== n.length) return !0;
					if (i.some(e => s[e] !== o[e])) return !0;
					if (t === r) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: s
						} = this.props;
						return this.props.postIds.some((o, n) => {
							const i = 0 === n;
							return s({
								isFirstPost: i,
								layout: e,
								post: t[o]
							}) !== s({
								isFirstPost: i,
								layout: e,
								post: r[o]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, r) {
					const {
						currentProfileName: o,
						hostPostId: n,
						isCommentPermalink: i,
						isCommentsPage: a,
						isFrontpage: d,
						isProfilePostListing: c,
						isTopicPage: l,
						listingKey: p,
						listingName: u,
						pageLayer: h,
						pageReferrer: f,
						postClickEventFactory: g,
						redditStyle: x,
						shouldHideFlair: P,
						isActionBarAnimationEnabled: v,
						postIds: O
					} = this.props, C = 0 === t, j = `post-${r}-${e}-${t}-${s?"last-index":""}-${u}-${p}-${f}`;
					let E;
					if (void 0 === (E = this.scrollChildCache.get(j))) {
						const {
							inSubredditOrProfile: w,
							postsById: S
						} = this.props, k = S[e], T = k.crosspostRootId && S[k.crosspostRootId] ? S[k.crosspostRootId] : k;
						k.crosspostRootId && !S[k.crosspostRootId] && y.c.withScope(e => {
							e.setExtra("errorType", b.q.API), e.setExtra("description", `Post ${k.id} is crosspost of ${k.crosspostRootId}, but ` + `${k.crosspostRootId} details are missing in the state`), y.c.captureMessage("Crosspost parent details are missing")
						});
						const M = this.props.postComponentForLayout({
								isCrosspost: !!k.crosspostRootId,
								isFirstPost: C,
								layout: r,
								post: T
							}),
							_ = `post-list-item-[layout: ${r}]-[postId: ${e}]`,
							F = q(e, r, s, p, u, f, this.props, t),
							R = z(e, r, this.props, t, h),
							A = J(e, this.props),
							B = T.media && T.media.type === N.o.EMBED ? T.media.provider : null;
						E = {
							estHeight: Object(L.c)(k, r),
							id: e,
							isFocusable: !(!T.media || !(r === I.g.Large || r === I.g.Classic && Object(N.G)(T.media))) && (N.d.has(T.media.type) && (!B || !N.s.has(B)) && !T.isSpoiler && !T.isNSFW),
							trackOnEnteredViewport: F,
							trackOnExitedViewport: R,
							render: ({
								className: t,
								height: r,
								width: b,
								remeasure: f,
								setScrollerChildRef: y,
								shouldLoadInitially: j
							}) => m.a.createElement(M, {
								className: t,
								currentProfileName: o,
								key: _,
								availableWidth: b,
								eventFactory: g,
								first: C,
								forceLoadMedia: j,
								hostPostId: n,
								inSubredditOrProfile: w,
								isActionBarAnimationEnabled: v,
								isCommentPermalink: i,
								isCommentsPage: a,
								isFrontpage: d,
								isProfilePostListing: c,
								isTopicPage: l,
								listingKey: p,
								listingName: u,
								pageLayer: h,
								last: s,
								onClickPost: A,
								onSizeChanged: f,
								postId: e,
								postIds: O,
								redditStyle: x,
								sendEvent: this.props.sendEvent,
								scrollerItemRef: y,
								shouldHideFlair: P
							})
						}, this.scrollChildCache.set(j, E)
					}
					return E
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
						layout: r,
						onTryAgain: o,
						postListPlaceholderComponent: n
					} = this.props;
					if (s) return;
					const i = n;
					return m.a.createElement("div", {
						className: A.a.placeholder
					}, m.a.createElement(i, {
						className: t,
						isLoading: !e,
						layout: r
					}), !!e && m.a.createElement(v.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: r,
						loadMoreClassName: o,
						onLoadMore: n
					} = this.props;
					if (!s) return m.a.createElement("div", {
						className: A.a.placeholder
					}, m.a.createElement(P.a, {
						className: o,
						isLoading: !!t,
						layout: r,
						countOverride: H[r]
					}), !!e && m.a.createElement(v.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: o,
						isTruncated: n,
						layout: i,
						location: a,
						loadMore: d,
						postIds: c,
						onLoadMore: u
					} = this.props;
					let f = c.map((e, t, s) => {
						const r = t === c.length - 1;
						return this.scrollChildForPost(e, t, r, i)
					});
					o && (f = X(f, o));
					const g = this.props.measureScrollFPS ? `post-listings-${i}` : void 0,
						x = a ? Object(r.e)(a) : null,
						y = x || n;
					return m.a.createElement(l.Fragment, null, m.a.createElement(O.b, {
						innerRef: this.updateScrollerRef,
						className: y ? A.a.truncatedPostList : Object(h.a)(A.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: d && d.token ? d.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: u,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: g,
						viewportTopPadding: j.f
					}, f), x && m.a.createElement(U, {
						className: A.a.seeMoreButton
					}, m.a.createElement(E.a, {
						className: A.a.seeMorePostsText,
						to: Object(p.a)(x, {
							type: b.Pb.Posts
						})
					}, B._("See More Posts", null, {
						hk: "3o0CqI"
					}), m.a.createElement(G, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			Q.defaultProps = {
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
				eventMeta: "_28_NUs_O8Nh1DCErsNLCHk",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				Container: "BiNC74axuTz66dlnEgicY",
				container: "BiNC74axuTz66dlnEgicY",
				PostOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				postOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				bulkActionCheckbox: "_3X709ZHnDjH0Rwz3pMTv40",
				SubscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				a = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostBadges/index.tsx"),
				c = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				u = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				x = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Subreddit/index.ts"),
				P = s("./src/reddit/components/PostTopLine/index.m.less"),
				v = s.n(P);
			const O = s("./src/lib/lessComponent.tsx").a.div("Container", v.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					hideAwards: r,
					hideNSFWPref: P,
					hostPostId: C,
					iconClassName: j,
					inSubredditOrProfile: I,
					isCommentsPage: E,
					isCompactPinnedPost: w,
					isCurrentUserProfilePost: S,
					isOverlay: L,
					isTopicPage: k,
					listingKey: N,
					post: T,
					shouldShowSubscribeButton: M,
					showCornerOutboundLink: _,
					showSubreddit: F,
					showSubredditIcon: R,
					subredditOrProfile: A
				} = e, B = r || k;
				return o.a.createElement(O, {
					className: t
				}, F && A && o.a.createElement("div", {
					className: v.a.subredditIconWrapper
				}, o.a.createElement(m.a, {
					"data-click-id": "subreddit",
					to: A.url
				}, R && o.a.createElement(l.b, {
					className: Object(n.a)(v.a.subredditIcon, j),
					shouldHideNsfwIcon: P,
					subredditOrProfile: A
				}))), o.a.createElement("div", {
					className: v.a.everythingElseWrapper
				}, F && o.a.createElement(a.h, {
					type: T.belongsTo.type,
					id: T.belongsTo.id
				}), o.a.createElement(c.d, {
					className: v.a.postTopMeta,
					flairStyleTemplate: s,
					tooltipType: L ? c.c.Lightbox : void 0,
					post: T,
					showSub: F,
					subredditOrProfile: A
				}), o.a.createElement(d.a, {
					className: v.a.postBadges,
					displayText: A ? A.displayText : null,
					inSubredditOrProfile: I,
					isCompactPinnedPost: w,
					post: T,
					tooltipType: L ? c.c.Lightbox : void 0
				}), !B && o.a.createElement(i.a, {
					isPostDetail: E,
					thing: T,
					tooltipType: L ? c.c.Lightbox : void 0
				})), A && F && M && !S && o.a.createElement(p.a, {
					className: v.a.SubscribeButton,
					getEventFactory: e => Object(f.f)(T.id, e ? "unsubscribe" : "subscribe", "post", N, C),
					identifier: {
						name: A.name,
						type: Object(y.g)(A) ? u.a.PROFILE : u.a.SUBREDDIT
					},
					postId: T.id,
					size: h.c.XS
				}), _ && o.a.createElement(b.b, {
					className: v.a.OutboundLink,
					isSponsored: T.isSponsored,
					postId: T.id,
					href: Object(x.D)(e.post),
					source: T.source
				}, o.a.createElement(g.a, {
					className: v.a.outboundLinkIcon
				})))
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
				miniCardPost: "ieyMhI0VqyYOPt1Za-FW5",
				item: "fuCmx3adjKY3tXA4Zfx2p",
				education: "_1h3IXJoJFpHbyec1FkB4MV",
				title: "jY9rAXGpPzcDUv1AnLGAD"
			}
		},
		"./src/reddit/connectors/OverviewChronoList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return x
			}));
			var r = s("./node_modules/lodash/noop.js"),
				o = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/postList.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/isComment.ts"),
				p = s("./src/reddit/helpers/isPost.ts"),
				u = s("./src/reddit/helpers/trackers/post.ts"),
				h = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				b = s("./src/reddit/selectors/subreddit.ts"),
				f = s("./src/reddit/selectors/tracking.ts"),
				g = s("./src/reddit/selectors/user.ts");
			const x = (e, t) => (e, t, s) => Object(m.a)(e) ? 120 : 47,
				y = Object(l.t)(),
				P = {
					apiError: h.a,
					apiPending: h.b,
					currentUser: g.i,
					layout: l.O,
					loadMore: h.d,
					subredditsById: b.ab,
					viewportDataLoaded: f.a,
					commentsById: h.g,
					itemIds: h.f,
					itemIdToPostId: h.e,
					postsById: h.h,
					estimateItemHeight: x
				},
				v = Object(i.c)(P),
				O = Object(n.b)(v, (e, t) => ({
					onBottomViewed: (t, s) => e(d.c(t, s)),
					openPost: t => {
						e(a.E(t))
					},
					trackOnPostEnteredViewport: (t, s) => {
						Object(p.a)(t) && e(a.H(t))
					},
					trackOnPostExitedViewport: (t, s, r) => {
						Object(p.a)(t) && e(a.I(t, r))
					},
					fireAdPixelsOfType: o.a
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(u.f)(e, t)
				}));
			t.a = e => Object(c.c)(y(O(e)))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return j
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "b", (function() {
				return S
			}));
			var r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				d = s("./src/reddit/actions/gold/tooltips.ts"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				m = s("./src/reddit/actions/survey/index.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				b = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/components/PostList/Placeholder.tsx"),
				g = s("./src/reddit/featureFlags/index.ts"),
				x = s("./src/reddit/selectors/experiments/survey.ts"),
				y = s("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				P = s("./src/reddit/selectors/listings.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/selectors/tracking.ts");

			function j() {
				return Object(u.t)({
					currentProfileName: u.h,
					isCommentPermalink: u.v,
					isCommentsPage: u.w,
					isFrontpage: u.y,
					isPredictionsPage: u.L,
					isProfilePostListing: u.I,
					isTopicPage: u.N,
					pageLayer: e => e
				})
			}
			const I = j(),
				E = {
					apiError: P.c,
					apiPending: P.d,
					measureScrollFPS: g.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(u.O)(e, t),
					loadMore: (e, t) => t.isPredictionsPage && !Object(y.a)(e, t.listingKey) ? null : Object(P.g)(e, t),
					postsById: (e, t) => Object(v.N)(e, {
						...t
					}),
					postIds: Object(n.a)((e, {
						listingKey: t,
						listingName: s,
						isPredictionsPage: r,
						inSubredditOrProfile: o
					}) => {
						if (r) {
							const r = Object(O.F)(e, s);
							return Object(y.l)(e, {
								subredditId: r,
								listingKey: t
							})
						}
						return Object(v.A)(e, t, s, o)
					}),
					subredditsById: O.ab,
					viewportDataLoaded: C.a,
					pageReferrer: u.R,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: x.d
				},
				w = Object(o.c)(E),
				S = (e, {
					isFrontpage: t
				}) => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(d.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
							isViewSafe: t
						}))
					},
					openPost: s => {
						t && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(c.E(s))
					},
					fireAdPixelsOfType: (t, s) => {
						e(c.u(t, s))
					},
					trackOnPostEnteredViewport: (t, s, r) => {
						e(c.H(t, r))
					},
					trackOnPostExitedViewport: (t, s, r, o, n) => {
						e(c.I(t, r, o, n))
					},
					surveyTriggerScrollCounted: () => e(Object(m.h)())
				}),
				L = Object(r.b)(w, S, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(b.f)(e, t, "post", s.listingKey, s.hostPostId, s.listingBelowVariant, void 0, s.listingBelowMonthlyVariant),
					postComponentForLayout: e => Object(h.b)({
						...e
					})
				}));
			t.a = e => Object(p.c)(I(L(e)))
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/postFlair.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				p = s("./src/reddit/selectors/postFlair.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const b = Object(r.b)(() => Object(o.c)({
				activeModalId: l.a,
				autoplayPref: h.b,
				crosspostRoot: u.d,
				crosspostSubredditOrProfile: u.e,
				flairStyleTemplate: c.S,
				hideNSFWPref: h.B,
				isActive: u.j,
				moderatorPermissions: m.j,
				modModeEnabled: c.Q,
				showEditFlair: p.a
			}), (e, {
				postId: t
			}) => ({
				dispatchFlairChanged: ({
					post: t,
					previewFlair: s,
					selectedTemplateId: r
				}) => e(Object(i.h)({
					post: t,
					previewFlair: s,
					selectedTemplateId: r
				})),
				handleVote: s => {
					const r = s === d.a.upvoted ? Object(n.U)(t) : Object(n.r)(t);
					e(r)
				},
				onIgnoreReports: () => e(Object(n.S)(t)),
				onOpenReportsDropdown: t => e(Object(a.h)({
					tooltipId: t
				}))
			}), (e, t, s) => ({
				...s,
				...e,
				...t,
				onFlairChanged: ({
					previewFlair: e,
					selectedTemplateId: r
				}) => t.dispatchFlairChanged({
					post: s.post,
					previewFlair: e,
					selectedTemplateId: r
				})
			}), {
				forwardRef: !0
			});
			t.a = b
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				o = s.n(r);
			t.a = o.a.createContext(() => () => {})
		},
		"./src/reddit/endpoints/page/profileOverviewPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return c
			}));
			var r = s("./src/config.ts"),
				o = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeApiRequest/index.ts"),
				a = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const d = (e, t, s) => Object(i.a)(e, {
					data: s,
					endpoint: Object(o.a)(Object(a.a)(`${r.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)),
					traceRequestName: "get_profile_conversations",
					method: n.cb.GET
				}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
					...e,
					body: {
						...e.body,
						pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
					}
				} : e),
				c = (e, t, s) => Object(i.a)(e, {
					data: s,
					endpoint: Object(o.a)(Object(a.a)(`${r.a.gatewayUrl}/desktopapi/v1/user/${t}/overview`)),
					method: n.cb.GET
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
				return o
			}));
			var r = s("./src/reddit/models/WhitelistStatus/index.ts");
			const o = (e, t) => {
				const s = e.some(e => e.isNSFW),
					o = t.some(e => e.wls === r.b.NO_ADS);
				return !s && !o
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				o = s.n(r);

			function n() {
				return (n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", n({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Pin/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				o = s.n(r);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M18.71,7.75,17.24,6.29,13.71,2.76,12.25,1.29a1,1,0,0,0-1.41,0L10,2.15a1,1,0,0,0-.26,1l.46,1.78L6.89,8.17,5.11,7.71a1,1,0,0,0-1,.26l-.86.86a1,1,0,0,0,0,1.41l1.47,1.47.62.62L.6,18.7a.5.5,0,0,0,.7.7l6.37-4.78.62.62,1.47,1.47a1,1,0,0,0,1.41,0l.86-.86a1,1,0,0,0,.26-1l-.46-1.78,3.28-3.28,1.78.46a1,1,0,0,0,.25,0,1,1,0,0,0,.71-.29l.86-.86A1,1,0,0,0,18.71,7.75Z"
			})))
		},
		"./src/reddit/pages/ProfileOverview/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/lodash/fromPairs.js"),
				o = s.n(r),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/isFakeSubreddit/index.ts"),
				m = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/lib/constants/index.ts"),
				h = s("./src/reddit/actions/pages/profileOverview/index.ts"),
				b = s("./src/reddit/actions/pages/profileShared.ts"),
				f = s("./src/reddit/actions/profileConversations.ts"),
				g = s("./node_modules/lodash/difference.js"),
				x = s.n(g),
				y = s("./node_modules/lodash/pick.js"),
				P = s.n(y),
				v = s("./src/lib/makeActionCreator/index.ts"),
				O = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				C = s("./src/reddit/constants/parameters.ts"),
				j = s("./src/reddit/endpoints/page/profileOverviewPage.ts"),
				I = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const E = Object(v.a)(I.c),
				w = Object(v.a)(I.b),
				S = Object(v.a)(I.a);
			var L = s("./src/reddit/components/ContentGate/index.tsx"),
				k = s("./src/reddit/components/EmptyProfile/index.ts"),
				N = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				T = s("./src/reddit/components/JumpToContent/index.tsx"),
				M = s("./src/lib/classNames/index.ts"),
				_ = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				F = s("./src/reddit/components/ProfileItemList/index.tsx"),
				R = s("./src/reddit/connectors/OverviewChronoList/index.ts"),
				A = s("./src/reddit/components/OverviewChronoList/index.m.less"),
				B = s.n(A),
				V = s("./src/lib/lessComponent.tsx");

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const W = Object(R.a)(V.a.wrapped(e => {
				const {
					className: t,
					itemIds: s
				} = e, r = s.length > 0;
				return i.a.createElement(F.a, K({
					className: Object(M.a)(t, {
						[B.a.ComponentHasItems]: r
					})
				}, e))
			}, "Component", B.a));
			var D = e => i.a.createElement(W, K({}, e, {
					itemComponent: _.a
				})),
				H = s("./src/reddit/components/PostList/index.tsx"),
				U = s("./src/reddit/components/TrackingHelper/index.tsx"),
				G = s("./src/lib/isPinnedAdminPost/index.ts"),
				q = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				z = s("./node_modules/lodash/last.js"),
				J = s.n(z);
			var X = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				Q = s("./src/reddit/selectors/posts.ts"),
				Z = s("./src/reddit/components/ClassicPost/index.tsx"),
				$ = s("./src/reddit/components/LargePost/index.tsx"),
				Y = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				ee = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				te = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				se = s("./src/reddit/selectors/profile.ts"),
				re = s("./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less"),
				oe = s.n(re);
			const {
				fbt: ne
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ie = V.a.div("ExtraCommentsItemWrapper", oe.a), ae = V.a.p("ExtraComments", oe.a), de = V.a.wrapped(ae, "ExtraCommentsInteractive", oe.a);
			var ce = Object(a.b)(() => Object(d.c)({
					extraCommentsItem: se.c,
					extraCommentsPending: (e, t) => {
						const {
							extraCommentsId: s
						} = t, {
							extraComments: r
						} = e.pages.profileOverview.conversations;
						return !!r.api.pending[s]
					}
				}), (e, {
					profileName: t
				}) => ({
					extraCommentsClicked: s => e(Object(f.g)(t, s.postId, s.id))
				}))(({
					extraCommentsClicked: e,
					extraCommentsItem: t,
					extraCommentsPending: s
				}) => i.a.createElement(ie, null, s ? i.a.createElement(ae, null, ne._("Loading...", null, {
					hk: "47z90C"
				})) : i.a.createElement(te.a.Consumer, null, s => i.a.createElement(de, {
					onClick: s => {
						e(t), s.stopPropagation(), s.nativeEvent.stopImmediatePropagation()
					}
				}, ne._("Load more comments", null, {
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

			function xe() {
				return (xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ye = V.a.div("BackgroundWrapper", ge.a),
				Pe = V.a.wrapped(Z.default, "ClassicPost", ge.a),
				ve = V.a.wrapped(Y.a, "OverviewCommentPost", ge.a),
				Oe = Object(a.b)(() => Object(d.c)({
					commentThreadLinkSets: (e, {
						postId: t,
						currentProfileName: s
					}) => {
						const r = s ? s.toLowerCase() : "",
							o = Object(q.a)(t, r);
						return e.pages.profileOverview.conversations.keyToCommentThreadLinkSets[o]
					},
					headComment: (e, {
						postId: t,
						currentProfileName: s
					}) => {
						const r = s ? s.toLowerCase() : "",
							o = Object(q.a)(t, r);
						return e.pages.profileOverview.conversations.keyToHeadCommentId[o]
					},
					isInitiallyPinned: (e, {
						postId: t,
						currentProfileName: s
					}) => !!s && Object(Q.n)(e, t, s),
					isPinned: (e, {
						postId: t,
						currentProfileName: s
					}) => !!s && Object(Q.p)(e, t, s),
					profileName: (e, {
						currentProfileName: t
					}) => {
						if (t) return ((e, t) => {
							const {
								users: s
							} = e, r = t.toLowerCase(), o = s.models[r];
							return o ? o.username : void 0
						})(e, t)
					},
					layout: p.O
				})),
				Ce = V.a.wrapped($.default, "OverviewLargePost", ge.a),
				je = Oe(e => {
					const {
						availableWidth: t,
						className: s,
						commentThreadLinkSets: r,
						eventFactory: o,
						forceLoadMedia: n,
						headComment: a,
						isInitiallyPinned: d,
						isPinned: c,
						isScrolling: l,
						last: m,
						layout: p,
						onClickPost: u,
						onSizeChanged: h,
						pageLayer: b,
						post: f,
						postId: g,
						profileName: x,
						scrollerItemRef: y
					} = e, P = {
						last: m,
						onClickPost: u,
						postId: g
					};
					if (!x) return null;
					const v = x === f.author,
						O = Object(G.a)(c, f.distinguishType);
					if (!v && !a && !O) return null;
					const C = a ? function(e) {
							const t = [],
								s = e.length;
							for (let r = 0; r < s; r++) {
								(0 === r || e[r - 1].depth !== e[r].depth - 1) && t.push([]), J()(t).push(e[r])
							}
							return t
						}(function(e, t) {
							const s = [];
							let r = t,
								o = "comment";
							for (; r;) {
								const t = e[r];
								s.push({
									id: r,
									depth: t.depth,
									type: o
								}), t.next ? (r = t.next.id, o = t.next.type) : r = void 0
							}
							return s
						}(r, a)) : [],
						j = C.length - 1;
					return i.a.createElement("div", {
						className: Object(M.a)(be.a.largeAndMediumActiveStyles, be.a.largeAndMediumPostStyles, ge.a.OverviewConversationsPost, s),
						style: {
							...Object(X.b)(),
							...Object(X.d)(e)
						}
					}, i.a.createElement(ee.a, {
						isFirst: !0,
						isLast: j < 0,
						key: f.id
					}, !v && !!a && i.a.createElement(ve, xe({}, P, {
						commentId: a,
						key: f.id,
						profileName: x
					})), (v || O) && (p === ue.g.Classic ? i.a.createElement(Pe, {
						availableWidth: t,
						eventFactory: o,
						inSubredditOrProfile: !1,
						isOverlay: !1,
						isScrolling: l,
						forceLoadMedia: n,
						last: m,
						onClickPost: u,
						onSizeChanged: h,
						pageLayer: b,
						postId: g,
						scrollerItemRef: y
					}) : i.a.createElement(Ce, {
						availableWidth: t,
						eventFactory: o,
						isScrolling: l,
						isFrontpage: !1,
						forceLoadMedia: n,
						last: m,
						onClickPost: u,
						onSizeChanged: h,
						pageLayer: b,
						postId: g,
						scrollerItemRef: y
					}))), i.a.createElement(ye, {
						style: {
							background: Object(X.e)(e)
						}
					}, !d && C.map((e, t) => i.a.createElement(ee.a, {
						isLast: t === j,
						key: `${t}-isLast[${t===j}]`
					}, e.map((t, s) => {
						const r = 0 === s,
							o = s === e.length - 1;
						return "comment" === t.type ? i.a.createElement(le.a, {
							commentId: t.id,
							depth: t.depth,
							isFirst: r,
							isLast: o,
							key: t.id,
							profileName: x,
							showModTools: !0
						}) : i.a.createElement(ce, {
							extraCommentsId: t.id,
							key: t.id,
							profileName: x
						})
					})))))
				});
			var Ie = Object(me.b)((function(e) {
					var t;
					const s = Object(pe.a)(),
						r = Object(p.Z)();
					return i.a.createElement(je, xe({
						theme: null !== (t = e.theme) && void 0 !== t ? t : s,
						currentProfileName: Object(p.h)(r),
						pageLayer: r
					}, e))
				})),
				Ee = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				we = s("./src/reddit/helpers/trackers/post.ts"),
				Se = s("./src/reddit/selectors/tracking.ts"),
				Le = s("./src/reddit/connectors/PostList/index.ts");
			const ke = Object(d.c)({
					...Le.d,
					postIds: Q.K,
					viewportDataLoaded: Se.a
				}),
				Ne = Object(Le.c)(),
				Te = Object(a.b)(ke, Le.b, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(we.f)(e, t),
					postComponentForLayout: ({
						post: e
					}) => e.isBlank ? Ee.a : Ie
				}));
			var Me = (e => Object(U.c)(Ne(Te(e))))(H.a),
				_e = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				Fe = s("./node_modules/lodash/debounce.js"),
				Re = s.n(Fe),
				Ae = s("./src/reddit/actions/post.ts"),
				Be = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Ve = s("./src/lib/isUrl/index.ts"),
				Ke = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				We = s("./src/reddit/components/Media/index.tsx"),
				De = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				He = s("./src/reddit/components/PostContainer/index.tsx"),
				Ue = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				Ge = s("./src/reddit/components/PostTitle/index.tsx"),
				qe = s("./src/reddit/connectors/miniCardPost.ts"),
				ze = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Je = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Xe = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Qe = s("./src/reddit/models/Media/index.ts"),
				Ze = s("./node_modules/fbt/lib/FbtPublic.js"),
				$e = s("./src/reddit/components/CommentsLink/index.tsx"),
				Ye = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				et = s("./src/reddit/components/Flatlist/index.tsx"),
				tt = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				st = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				rt = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				ot = s("./src/reddit/components/ShareMenu/index.tsx"),
				nt = s("./src/reddit/icons/fonts/Share/index.tsx"),
				it = s("./src/reddit/models/User/index.ts"),
				at = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				dt = s.n(at);
			const ct = "-MiniCardModMenu",
				lt = "-MiniCardOverflowMenu",
				mt = "-MiniCardShareMenu",
				pt = V.a.wrapped(Ye.a, "HorizontalVotes", dt.a),
				ut = V.a.button("ShareButton", dt.a),
				ht = Object(p.t)({
					currentProfileName: p.h,
					isCommentPermalink: p.v,
					isCommentsPage: p.w,
					isProfilePostListing: p.I,
					pageLayer: e => e
				}),
				bt = Object(d.c)({
					layout: p.O,
					subreddit: p.q
				});
			var ft = ht(Object(a.b)(bt, {})(Object(U.c)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: r,
						handleVote: o,
						hasModFlairPerms: n,
						hasModFullPerms: a,
						hasModPostPerms: d,
						isCommentsPage: c,
						isCommentPermalink: l,
						isOverlay: m,
						isProfilePostListing: p,
						isSticky: u,
						layout: h,
						modModeEnabled: b,
						onCommentsClick: f,
						post: g,
						sendEvent: x,
						showEditFlair: y,
						showEditPost: P,
						subreddit: v
					} = e, O = e => x(Object(we.f)(g.id, e)), C = g.postId, j = Object(et.d)(ct, g.id, m, u), I = !!r && Object(it.e)(r) === g.author;
					return i.a.createElement("div", {
						className: Object(M.a)(dt.a.flatlistContainer, s)
					}, i.a.createElement(pt, {
						compact: !1,
						model: g,
						onVoteClick: o,
						scoreClassName: dt.a.score
					}), i.a.createElement($e.a, {
						hasModPostPerms: d,
						isCommentsPage: c,
						isCommentPermalink: l,
						isOverlay: m,
						postId: g.id,
						modModeEnabled: b,
						numComments: g.numComments,
						type: ue.g.Compact,
						onClick: f
					}), i.a.createElement(ot.a, {
						className: dt.a.shareMenu,
						dropdownId: Object(et.d)(mt, g.id, m, u),
						permalink: g.permalink,
						post: g,
						sendEventWithName: O,
						subreddit: v
					}, i.a.createElement(ut, null, i.a.createElement(nt.a, {
						className: dt.a.shareIcon
					}), i.a.createElement("span", {
						className: dt.a.shareText
					}, Ze.fbt._("share", null, {
						hk: "mmJV5"
					})))), d && i.a.createElement(tt.a, {
						dropdownId: j,
						onClick: () => O("post_mod_action_menu")
					}, i.a.createElement(et.b, {
						className: dt.a.modActionsIcon
					}), i.a.createElement(st.a, {
						canEditFlair: n && !!y,
						hasModPostPerms: d,
						hasModFullPerms: a,
						isOverlay: !!m,
						isPostAuthor: I,
						modModeEnabled: b,
						post: g,
						tooltipId: j
					})), i.a.createElement(rt.g, {
						currentProfileName: t,
						isCommentsPage: c,
						isOverlay: !!m,
						isProfilePostListing: p,
						layout: h,
						pageLayer: e.pageLayer,
						permalink: g.permalink,
						postId: C,
						dropdownId: Object(et.d)(lt, g.id, m, u),
						isFixed: u,
						sendEvent: x,
						showEditPost: !!P,
						showEditFlair: !!y,
						useFlatlistBreakpoints: Object(rt.h)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1
						})
					}))
				}))),
				gt = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				xt = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				yt = s("./src/reddit/components/MiniCardPost/index.m.less"),
				Pt = s.n(yt);
			var vt = Object(p.t)()(Object(me.b)(Object(qe.a)(Object(Be.a)(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: r,
						crosspostRoot: o,
						crosspostSubredditOrProfile: n,
						currentUser: a,
						eventFactory: d,
						flairStyleTemplate: c,
						forceLoadMedia: l,
						hideNSFWPref: m,
						moderatorPermissions: p,
						modModeEnabled: u,
						onClickPost: h,
						post: b,
						scrollerItemRef: f,
						shouldPause: g,
						showMetaLine: x = !0,
						showEditFlair: y,
						subredditOrProfile: P,
						userIsOp: v
					} = e, {
						media: O
					} = o || b, C = O && O.type, j = Object(Ue.b)(b.id), I = C === Qe.o.RTJSON, E = v && I, w = Object(Xe.a)(p), S = Object(ze.a)(p), L = Object(Je.a)(p), k = O && C !== Qe.o.RTJSON && C !== Qe.o.TEXT, N = !O && !!b.source && Object(Ve.a)(b.source.url), T = O && i.a.createElement(We.a, {
						autoplayPref: t,
						availableWidth: s,
						className: Pt.a.media,
						imageBoxClassName: Pt.a.mediaImageBox,
						imageBoxContentImageClassName: Pt.a.mediaImageBoxContentImage,
						forceAspectRatio: Qe.c,
						isListing: !0,
						isMiniCard: !0,
						isNotCardView: !0,
						post: o || b,
						scrollerItemRef: f,
						shouldPause: g,
						shouldLoad: l,
						showCentered: !0,
						showFull: !1
					});
					return i.a.createElement(He.a, {
						className: Object(M.a)(Pt.a.postContainer, be.a.largeAndMediumActiveStyles, be.a.largeAndMediumPostStyles, Object(X.a)(e), r),
						style: {
							...Object(X.b)(e.flairStyleTemplate),
							...Object(X.d)(e)
						},
						post: b,
						onClick: h,
						eventFactory: d
					}, i.a.createElement(De.a, {
						className: Pt.a.backgroundWrapper,
						flairStyleTemplate: c
					}, k && T, i.a.createElement("div", {
						className: Pt.a.innerContainer
					}, N && i.a.createElement(xt.a, {
						post: b,
						templatePlaceholderImage: c ? c.postPlaceholderImage : void 0
					}), i.a.createElement(Ge.c, {
						className: Pt.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: b,
						size: Ge.b.Large,
						titleColor: c && c.postTitleColor
					}), x && P && i.a.createElement(gt.a, {
						className: Pt.a.metaLine,
						crosspostSubredditOrProfile: n,
						hideNSFWPref: m,
						post: b,
						subredditOrProfile: P
					}), !k && i.a.createElement("div", {
						className: Pt.a.mediaWrapper
					}, T), i.a.createElement("div", {
						className: Pt.a.flexSpacer
					}), i.a.createElement(ft, {
						currentUser: a,
						handleVote: e.handleVote,
						hasModFlairPerms: S,
						hasModFullPerms: L,
						hasModPostPerms: w,
						modModeEnabled: u,
						post: b,
						showEditFlair: y,
						showEditPost: E
					}))), e.activeModalId === j && i.a.createElement(Ue.a, {
						flairs: b.flair,
						subredditId: b.belongsTo.id,
						modalId: j,
						onFlairChanged: e.onFlairChanged
					}), i.a.createElement(Ke.d, null))
				})))),
				Ot = s("./src/reddit/helpers/getClickInfo.ts"),
				Ct = s("./src/reddit/helpers/localStorage/index.ts"),
				jt = s("./src/reddit/selectors/user.ts"),
				It = s("./src/reddit/icons/svgs/Pin/index.tsx"),
				Et = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less"),
				wt = s.n(Et);
			const {
				fbt: St
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Lt = e => i.a.createElement("div", {
					className: Object(M.a)(wt.a.container, e.className)
				}, i.a.createElement(It.a, {
					className: wt.a.pin
				}), i.a.createElement("div", {
					className: wt.a.title
				}, St._("Show off that karma!", null, {
					hk: "2yqUT7"
				})), e.children),
				kt = s("./src/reddit/controls/TextButton/index.tsx"),
				Nt = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less"),
				Tt = s.n(Nt);
			const {
				fbt: Mt
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var _t = e => i.a.createElement(Lt, {
					className: Object(M.a)(Tt.a.container, e.className)
				}, i.a.createElement("div", {
					className: Tt.a.description
				}, Mt._('Pin a post from your feed using the "..." at the bottom of each post', null, {
					hk: "4lkJRB"
				})), i.a.createElement(kt.a, {
					className: Tt.a.gotIt,
					onClick: e.onGotItClick
				}, Mt._("OK, I got it", null, {
					hk: "1JMx7x"
				}))),
				Ft = s("./src/reddit/components/ProfilePinnedPosts/index.m.less"),
				Rt = s.n(Ft);
			const {
				fbt: At
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Bt = 320, Vt = 300, Kt = Object(d.c)({
				arePinnedPostsLoaded: Q.a,
				currentUser: jt.i,
				pinnedPostIds: Q.L
			}), Wt = Object(a.b)(Kt, e => ({
				openPost: t => e(Object(Ae.E)(t))
			}));
			class Dt extends i.a.Component {
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
						Object(Ct.sb)(), this.setState({
							showEducation: !1
						})
					}, this.onClickPost = (e, t) => {
						this.props.openPost({
							postOrComment: t,
							clickInfo: Object(Ot.a)(e)
						})
					}, this.renderPost = e => i.a.createElement(vt, {
						postId: e,
						key: e,
						availableWidth: Bt,
						className: Object(M.a)(Rt.a.item, Rt.a.miniCardPost),
						forceLoadMedia: !this.state.pauseMedia,
						onClickPost: this.onClickPost,
						shouldPause: this.state.pauseMedia
					})
				}
				componentDidMount() {
					this.setState({
						showEducation: !Object(Ct.B)()
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
					const r = !!this.props.currentUser && this.props.profileName === Object(it.e)(this.props.currentUser),
						o = t.length > 0,
						n = !o && this.state.showEducation && r;
					if (!o && !n) return null;
					const a = r && this.props.pinnedPostIds.length % 2 != 0;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: Rt.a.title
					}, At._("Pinned posts", null, {
						hk: "3prRc3"
					})), n ? i.a.createElement(_t, {
						className: Object(M.a)(Rt.a.item, Rt.a.education),
						onGotItClick: this.onGotItClick
					}) : i.a.createElement("div", {
						ref: this.setContainerRef,
						className: Rt.a.container
					}, t.map(this.renderPost), a && i.a.createElement(Lt, {
						className: Rt.a.item
					})), s)
				}
			}
			var Ht = Object(p.t)()(Wt(Dt)),
				Ut = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				Gt = s("./src/reddit/helpers/trackers/screenview.ts"),
				qt = s("./src/reddit/layout/page/Listing/index.tsx"),
				zt = s("./src/reddit/models/ContentGate.ts"),
				Jt = s("./src/reddit/pages/ErrorPages/index.tsx");

			function Xt() {
				return (Xt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Qt = (e, {
					location: t
				}) => o()([...Object(c.a)(t.search)]),
				Zt = Object(p.t)(),
				$t = Object(d.a)(p.B, jt.cb, Qt, p.O, (e, {
					match: t
				}) => t.params.profileName, (e, {
					match: t
				}) => t.params.sort, (e, {
					match: t
				}) => Object(se.j)(e, {
					profileName: t.params.profileName
				}), (e, t) => Object(b.a)(e, Qt(0, t)), (e, {
					match: t
				}) => !Object(Q.m)(e, {
					profileName: t.params.profileName
				}), jt.J, (e, {
					match: t
				}) => Object(jt.e)(e, u.Wb + t.params.profileName), (e, t, s, r, o, n, i, {
					sort: a,
					t: d
				}, c, l, p) => {
					const h = r === ue.g.Compact ? u.lb : u.mb,
						b = Object(m.a)(o, h, a, s),
						{
							sort: f
						} = s;
					return {
						contentGateInfo: p,
						over18Prefs: t,
						isLoggedIn: l,
						isOwnProfile: e,
						isProfileNSFW: !!i && i.isNSFW,
						layout: r,
						listingKey: b,
						profileName: o,
						shouldShowPinnedPostsSection: c && !f,
						sort: a,
						timeSort: d
					}
				}),
				Yt = Object(a.b)($t, (e, t) => ({
					onLoadMoreChronoItems: () => e((() => async (e, t, {
						apiContext: s
					}) => {
						const r = t(),
							{
								currentPage: o
							} = r.platform;
						if (!o || !o.routeMatch) return;
						const {
							queryParams: n,
							params: i
						} = o.routeMatch.match, {
							sort: a,
							t: d
						} = Object(b.a)(r, n), {
							profileName: c
						} = i, l = Object(m.a)(c, u.lb, a, n), p = Object(O.d)(r, {
							listingKey: l
						});
						if (!p) return;
						const h = Object(O.b)(r, {
								listingKey: l
							}),
							f = Object(O.c)(r, {
								listingKey: l
							}),
							g = f && f[p.token];
						if (h || g) return;
						e(E({
							key: l,
							fetchedToken: p.token
						}));
						const y = await Object(j.a)(s(), c, {
							after: p.token,
							dist: p.dist,
							sort: a,
							t: d,
							...P()(n, C.l)
						});
						if (y.ok) {
							const t = Object(O.f)(r, {
									listingKey: l
								}),
								s = {
									...y.body,
									overviewIds: x()(y.body.overviewIds, t)
								};
							e(w({
								fetchedToken: p.token,
								key: l,
								meta: r.meta,
								...s
							}))
						} else e(S({
							error: y.error,
							fetchedToken: p.token,
							key: l,
							account: y.body.data ? y.body.data.account : null
						}))
					})((t.match.params.profileName, t.match.params.sort))),
					onLoadMoreConversationsItems: () => e(f.h({
						profileName: t.match.params.profileName,
						sort: t.match.params.sort
					})),
					onLayoutChange: () => e(Object(h.profileOverviewRequested)({
						...t.match,
						queryParams: o()([...Object(c.a)(t.location.search)])
					}))
				}));
			class es extends i.a.Component {
				constructor() {
					super(...arguments), this.renderNoPosts = () => i.a.createElement(k.c, {
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
						isOwnProfile: r,
						isProfileNSFW: o,
						listingKey: n,
						onLayoutChange: a,
						pageLayer: d,
						profileName: c,
						sort: m,
						shouldShowPinnedPostsSection: p,
						timeSort: h
					} = this.props;
					if (!d) return null;
					if (e && e.profileDeleted) return i.a.createElement(L.default, {
						contentGateType: zt.a.ProfileDeleted,
						profileName: c
					});
					if (e && e.profileSuspended) return i.a.createElement(L.default, {
						contentGateType: zt.a.ProfileSuspended,
						profileName: c
					});
					if (451 === d.status || e && e.profileBlockedForLegalReason) return i.a.createElement(L.default, {
						contentGateType: zt.a.ProfileBlockedForLegalReason,
						profileName: c
					});
					if (403 === d.status) return i.a.createElement(Jt.a, null);
					if (404 === d.status) return i.a.createElement(L.default, {
						contentGateType: zt.a.ProfileDoesNotExist,
						profileName: c
					});
					if (!c) return null;
					const b = c.toLowerCase(),
						f = `/user/${c}/`,
						g = {
							listingKey: n,
							listingName: b
						};
					if (!s && o && !r) return i.a.createElement(L.default, {
						subredditName: c,
						contentGateType: zt.a.Nsfw
					});
					const x = {
							inSubredditOrProfile: !Object(l.a)(c),
							listingKey: n,
							listingName: b,
							listingViewed: (e, t) => Object(Gt.q)(n, m, t, e, h),
							noPostsComponent: this.renderNoPosts,
							onTryAgain: a
						},
						y = {
							sort: m,
							baseUrl: f,
							sortOptions: u.rb,
							timeSort: h
						};
					let P;
					return P = t === ue.g.Compact ? i.a.createElement(D, Xt({}, x, {
						onLoadMore: this.props.onLoadMoreChronoItems,
						onTryAgain: a
					})) : i.a.createElement(i.a.Fragment, null, p && i.a.createElement(Ht, {
						profileName: c
					}), i.a.createElement(N.a, y), i.a.createElement(Me, Xt({}, x, {
						excludePinnedPosts: p,
						onLoadMore: this.props.onLoadMoreConversationsItems
					}))), i.a.createElement(qt.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(_e.a, {
							profileName: c
						})),
						content: i.a.createElement(i.a.Fragment, null, i.a.createElement(T.a, null), P),
						sidebar: i.a.createElement(Ut.a, Xt({}, g, {
							profileName: c
						}))
					})
				}
			}
			t.default = Zt(Yt(es))
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const n = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: r.sb
				});
				return !(!t || Object(r.Fd)(t))
			}
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return a
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "j", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "g", (function() {
				return y
			})), s.d(t, "d", (function() {
				return P
			}));
			var r = s("./src/reddit/featureFlags/index.ts"),
				o = s("./src/reddit/selectors/posts.ts"),
				n = s("./src/reddit/selectors/subreddit.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(n.T)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				d = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				c = e => e.focusedVerticals.components.dismissed,
				l = [],
				m = (e, t) => {
					const s = p(e, t);
					if (!s) return l;
					const r = Object(n.X)(e, {
						subredditName: s.name
					});
					return r && r.postIds && r.postIds.length ? r.postIds : l
				},
				p = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(n.T)(e, {
						subredditId: s
					}) : null
				},
				u = (e, t, s, r, n) => {
					const i = n.find(e => e <= t) || -1,
						a = n.find(e => e > t) || 1 / 0;
					return t !== a && t !== i && (!(i + s > t) && (!(t + s > a) && !((e, t, s) => {
						const r = s[t - 1],
							n = s[t],
							i = n && Object(o.D)(e, {
								postId: r
							}) || null,
							a = n && Object(o.D)(e, {
								postId: n
							}) || null;
						return i && i.isSponsored || a && a.isSponsored
					})(e, t, r)))
				},
				h = [3],
				b = (e, t, {
					listingKey: s
				}) => {
					const r = t.slice().sort();
					let n = -1;
					const i = Object(o.w)(e, {
							listingKey: s
						}),
						a = [];
					return h.forEach(t => {
						let s = n + t;
						if (!(s >= i.length)) {
							for (; s < i.length && !u(e, s, t, i, r);) s += 1;
							s < i.length && (a.push(s), n = s)
						}
					}), a
				},
				f = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				g = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				x = e => e.focusedVerticals.category,
				y = e => e.focusedVerticals.lastLoadedEnv,
				P = e => {
					const t = Object(i.I)(e),
						s = r.d.geoSubredditRecommendationDULoggedIn(e),
						o = r.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && o
				}
		},
		"./src/reddit/selectors/profileOverviewChronoItems.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return a
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "h", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "c", (function() {
				return f
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./src/lib/objectSelector/index.ts"),
				o = s("./src/reddit/models/Flair/index.ts"),
				n = s("./src/reddit/models/PostCreationForm/index.ts");
			o.f.Text, o.f.Spoiler, o.f.Text, o.f.Spoiler, n.h.RICH_TEXT, o.f.Text, o.f.Spoiler, n.h.RICH_TEXT, o.f.Text, o.f.Spoiler, n.h.RICH_TEXT;
			var i = s("./src/reddit/helpers/isComment.ts");
			const a = Object(r.a)((e, {
					listingKey: t
				}) => {
					const s = e.posts.models;
					return d(e, {
						listingKey: t
					}).filter(e => {
						if (Object(i.a)(e)) return !0; {
							const t = s[e];
							return t && !t.hidden
						}
					})
				}),
				d = Object(r.a)((e, {
					listingKey: t
				}) => {
					const s = e.pages.profileOverview.chrono.ids[t];
					return s ? [...s] : []
				}),
				c = Object(r.a)((e, {
					listingKey: t
				}) => {
					return a(e, {
						listingKey: t
					}).reduce((t, s) => {
						const r = Object(i.a)(s) ? e.features.comments.models[s].postId : s;
						return t[s] = r, t
					}, {})
				}),
				l = (Object(r.a)((e, {
					listingKey: t
				}) => {
					const s = e.posts.models;
					return l(e, {
						listingKey: t
					}).filter(e => {
						const t = s[e];
						return t && !t.hidden
					})
				}), Object(r.a)((e, {
					listingKey: t
				}) => {
					return a(e, {
						listingKey: t
					}).map(t => Object(i.a)(t) ? e.features.comments.models[t].postId : t)
				})),
				m = Object(r.a)((e, {
					listingKey: t
				}) => {
					const s = e.posts.models,
						r = l(e, {
							listingKey: t
						}),
						o = {};
					return r.forEach(e => o[e] = s[e]), o
				}),
				p = Object(r.a)((e, {
					listingKey: t
				}) => {
					const s = e.features.comments.models,
						r = a(e, {
							listingKey: t
						}),
						o = {};
					return r.forEach(e => !!Object(i.a)(e) && (o[e] = s[e])), o
				}),
				u = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.api.error[t],
				h = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.api.pending[t],
				b = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.loadMore[t],
				f = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.fetchedTokens[t]
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileOverview.2fab28805537e98f5d1c.js.map