// https://www.redditstatic.com/desktop2x/ProfileOverview.8b1ec1c39a39c806e9d4.js
// Retrieved at 5/11/2021, 1:30:07 PM by Reddit Dataminer v1.0.0
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
				return v
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "b", (function() {
				return w
			}));
			var o, r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/performanceTimings/index.tsx"),
				i = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json");
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
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(r.a)(i.g),
				f = Object(r.a)(i.e),
				g = Object(r.a)(i.h),
				x = Object(r.a)(i.c),
				v = Object(r.a)(i.f),
				P = Object(r.a)(i.j),
				y = Object(r.a)(i.i),
				O = () => async (e, t, {
					gqlContext: s
				}) => {
					const r = t(),
						n = Object(p.e)(r),
						i = Object(p.d)(r),
						c = Object(b.I)(r);
					if (n || !i) return;
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
											recommendedSubreddit: o,
											interactedSubreddit: r,
											category: n
										} = s.focusRecommendations[0],
										i = [o, r],
										a = Object(m.d)(i),
										d = Object(l.b)(i),
										c = Object(m.c)(o),
										p = {
											recommendedSubredditIds: [o.id],
											interactedSubredditIds: [r.id],
											subreddits: a,
											subredditsAboutInfo: d,
											subredditTopContent: c,
											category: n,
											lastLoadedEnv: "client"
										};
									e(h(p)), u = !0
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
						o = t && t.type;
					return !!(s && !j(e) && o === c.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, w = () => async (e, t, s) => {
					var o, r;
					const i = t(),
						a = Object(p.g)(i);
					if (Object(p.f)(i) || null === a || "client" === a) {
						const s = null === (r = null === (o = Object(u.b)(t())) || void 0 === o ? void 0 : o.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							a = Object(b.J)(i);
						return Object(n.i)(() => e(O()), {
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
				return Pe
			})), s.d(t, "profileOverviewConversationsLoaded", (function() {
				return ye
			})), s.d(t, "profileOverviewConversationsFailed", (function() {
				return Oe
			})), s.d(t, "profileOverviewChronoPending", (function() {
				return Ce
			})), s.d(t, "profileOverviewChronoLoaded", (function() {
				return je
			})), s.d(t, "profileOverviewChronoFailed", (function() {
				return Ie
			})), s.d(t, "profileOverviewConversationsRequested", (function() {
				return we
			})), s.d(t, "profileOverviewChronoRequested", (function() {
				return Ee
			})), s.d(t, "profileOverviewRequested", (function() {
				return Se
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/lodash/pick.js"),
				r = s.n(o),
				n = s("./src/reddit/actions/moderatingSubreddits.ts"),
				i = s("./src/reddit/actions/pages/profileShared.ts"),
				a = s("./src/reddit/actions/subreddit.ts"),
				d = s("./src/reddit/endpoints/page/profileOverviewPage.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/constants/postLayout.ts"),
				m = s("./src/reddit/constants/parameters.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/selectors/listings.ts"),
				b = s("./src/reddit/selectors/profile.ts"),
				h = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				g = s("./src/lib/makeActionCreator/index.ts"),
				x = s("./src/reddit/actions/changeUsername.ts"),
				v = s("./src/reddit/actions/contentGate.ts"),
				P = s("./src/reddit/actions/externalAccount.ts"),
				y = s("./src/reddit/actions/gold/powerups.ts"),
				O = s("./src/reddit/actions/pinnedPost.ts"),
				C = s("./src/reddit/actions/platform.ts"),
				j = s("./src/reddit/actions/profile/index.ts"),
				I = s("./src/reddit/actions/trophyCase.ts"),
				w = s("./src/reddit/constants/errors.ts"),
				E = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
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
			var H = (e = K, t) => {
					switch (t.type) {
						case L.b:
						case T.b: {
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
				D = s("./src/lib/omitKey/index.ts");
			const W = {};
			var U = (e = W, t) => {
					switch (t.type) {
						case L.b:
						case T.b: {
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
							} : Object(D.a)(e, s)
						}
						default:
							return e
					}
				},
				q = Object(N.c)({
					api: A,
					fetchedTokens: V,
					ids: H,
					loadMore: U
				});
			const G = {};
			var z = (e = G, t) => {
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
				Z = Object(N.c)({
					error: z,
					pending: X
				}),
				Q = s("./src/reddit/actions/profileConversations.ts");
			const $ = {};
			var Y = (e = $, t) => {
				switch (t.type) {
					case Q.c:
					case Q.b: {
						const {
							extraCommentsId: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case Q.a: {
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
						case Q.c: {
							const {
								extraCommentsId: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case Q.b:
						case Q.a: {
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
			const oe = {};
			var re = (e = oe, t) => {
					switch (t.type) {
						case L.e:
						case Q.b:
						case Q.e:
							return {
								...e, ...t.payload.extraComments
							};
						default:
							return e
					}
				},
				ne = Object(N.c)({
					api: se,
					models: re
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
					case L.e:
					case Q.e: {
						const {
							comments: s,
							extraComments: o,
							postIds: r,
							profileName: n
						} = t.payload, i = pe(r, s, o), a = {};
						for (const e of r) {
							a[Object(de.a)(e, n)] = i.hasOwnProperty(e) ? me(i[e]) : {}
						}
						return {
							...e,
							...a
						}
					}
					case Q.b: {
						const {
							comments: s,
							commentLists: o,
							extraComments: r,
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
						const d = i[0],
							c = me(pe(i, s, r)[d]),
							l = Object(de.a)(d, a),
							m = {
								...e[l]
							},
							p = m[n].prev,
							u = p && p.id || "",
							b = o[d].head,
							h = b && b.id || "",
							f = {
								id: h,
								type: ce.a.Comment
							},
							g = {
								...m,
								[u]: {
									...m[u],
									next: f
								},
								...c,
								[h]: {
									...c[h],
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
			const be = {};
			var he = (e = be, t) => {
				switch (t.type) {
					case L.e:
					case Q.e: {
						const {
							commentLists: s,
							postIds: o,
							profileName: r
						} = t.payload, n = {};
						for (const e of o) {
							n[Object(de.a)(e, r)] = s[e] && s[e].head ? s[e].head.id : null
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
						case Q.e: {
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
				xe = Object(N.c)({
					api: Z,
					extraComments: ne,
					keyToCommentThreadLinkSets: ue,
					keyToHeadCommentId: he,
					keyToPostId: ge
				}),
				ve = Object(N.c)({
					chrono: q,
					conversations: xe
				});
			Object(k.a)({
				pages: {
					profileOverview: ve
				}
			});
			const Pe = Object(g.a)(L.f),
				ye = Object(g.a)(L.e),
				Oe = Object(g.a)(L.d),
				Ce = Object(g.a)(L.c),
				je = Object(g.a)(L.b),
				Ie = Object(g.a)(L.a),
				we = (e, t, s, o) => async (o, r, n) => {
					const i = r(),
						a = !!i.listings.postOrder.ids[e],
						c = !!Object(u.c)(i, {
							listingKey: e
						});
					if (!!Object(u.d)(i, {
							listingKey: e
						}) || a && !c) return;
					o(Pe({
						key: e
					}));
					const l = await Object(S.a)("profile", () => Object(d.b)(n.apiContext(), t, s)),
						m = l.body,
						{
							pinned: p,
							postIds: h
						} = m;
					if (l.ok) {
						o(ye({
							key: e,
							meta: i.meta,
							profileName: t,
							...m,
							postIds: h
						}));
						const s = Object(b.m)(r(), t);
						o(Object(O.h)({
							profileId: s,
							pinned: p
						}))
					} else o(Oe({
						account: l.body.data ? l.body.data.account : null,
						error: l.body.reason ? {
							type: l.body.reason
						} : l.error,
						key: e
					})), l.body.reason === w.a.DeletedProfile && o(Object(v.p)({
						profileName: t
					})), o(Object(C.m)(l.status))
				}, Ee = (e, t, s, o) => async (o, r, n) => {
					const i = r(),
						a = !!Object(h.f)(i, {
							listingKey: e
						}).length,
						c = !!Object(h.a)(i, {
							listingKey: e
						});
					if (!!Object(h.b)(i, {
							listingKey: e
						}) || a && !c) return;
					o(Ce({
						key: e
					}));
					const l = await Object(S.a)("profile", () => Object(d.a)(n.apiContext(), t, s)),
						m = l.body,
						{
							pinned: p
						} = m;
					if (l.ok) {
						o(je({
							key: e,
							meta: i.meta,
							...m
						}));
						const s = Object(b.m)(r(), t);
						o(Object(O.h)({
							profileId: s,
							pinned: p
						}))
					} else o(Ie({
						account: l.body.data ? l.body.data.account : null,
						error: l.body.reason ? {
							type: l.body.reason
						} : l.error,
						key: e
					})), l.body.reason === w.a.DeletedProfile && o(Object(v.p)({
						profileName: t
					})), o(Object(C.m)(l.status))
				}, Se = e => async (t, s, o) => {
					const {
						queryParams: d,
						params: u
					} = e, {
						sort: h,
						t: g
					} = Object(i.a)(s(), d), {
						profileName: v
					} = u;
					let O = !1;
					const w = l.e[Object(p.O)(s(), {})],
						S = v.toLowerCase(),
						L = {
							...r()(e.queryParams, m.l),
							sort: h,
							layout: w,
							t: g
						},
						k = [t(j.d(S))];
					if (w === l.e[l.g.Compact]) {
						const o = Object(E.a)(S, c.ob, h, e.queryParams);
						s().pages.profileOverview.chrono.ids[o] ? O = !0 : k.push(t(Ee(o, S, L, !0)))
					} else {
						const o = Object(E.a)(S, c.pb, h, e.queryParams);
						s().listings.postOrder.ids[o] && !s().listings.postOrder.api.error[o] ? O = !0 : k.push(t(we(o, S, L, !0)))
					}
					if (k.push(t(Object(n.b)())), await Promise.all(k), O) return;
					const N = s();
					if (!N.platform.currentPage) return;
					if (200 !== N.platform.currentPage.status) return;
					const T = Object(b.m)(s(), S),
						M = Object(f.mb)(N, {
							userName: v
						}).id;
					t(C.l({
						title: Le(s(), v)
					})), Object(f.L)(N) && Object(f.N)(N, v) && t(Object(x.f)());
					const _ = [t(Object(a.q)()), t(I.b(S, T)), t(j.b(S)), t(P.o(v)), t(j.g(v)), t(y.g(v, M))];
					await Promise.all(_)
				}, Le = (e, t) => Object(b.q)(e, {
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
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const a = 5;

			function d(e) {
				const {
					post: t,
					postIds: s,
					subredditId: o
				} = e, d = Object(n.e)(e => e.subreddits.questions), c = Object(n.e)(e => e.posts.models);
				if (!s) return null;
				const l = s.indexOf(t.id);
				if (l < 0) return null;
				if (!u(t.id)) return null;
				const m = new Set;
				let p = !1;
				for (let r = 0, n = -999; r <= l; r += 1) {
					const e = s[r],
						t = c[e].belongsTo.id;
					u(e) && r - n >= a && !m.has(t) && (n = r, m.add(t), r === l && (p = !0))
				}
				return p ? r.a.createElement(i.a, {
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
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r);
			const i = Object(o.a)({
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
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				d = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				c = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				l = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				m = s("./src/reddit/actions/inFeedChaining.ts"),
				p = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				h = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				f = s("./src/reddit/models/Media/index.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/reddit/models/Vote/index.ts"),
				v = s("./src/reddit/selectors/activeModalId.ts"),
				P = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				y = s("./src/reddit/selectors/inFeedChaining.ts"),
				O = s("./src/reddit/selectors/moderatorPermissions.ts"),
				C = s("./src/reddit/selectors/posts.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				I = s("./src/lib/ads/index.ts"),
				w = s("./src/lib/classNames/index.ts"),
				E = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				S = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				L = s("./src/reddit/components/AwardBadges/index.tsx"),
				k = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				N = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				T = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				M = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				_ = s("./src/reddit/components/Flatlist/index.tsx"),
				F = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				R = s("./src/reddit/components/ModModeReports/index.tsx"),
				A = s("./src/reddit/components/ModModeReports/helpers.ts"),
				B = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				V = s("./src/reddit/components/PostContainer/index.tsx"),
				K = s("./src/reddit/components/PostLeftRail/index.tsx"),
				H = s("./src/reddit/components/PostMedia/index.tsx"),
				D = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				W = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				U = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				q = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				G = s.n(q);
			const {
				fbt: z
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var J = () => {
					const e = Object(W.a)();
					return r.a.createElement("div", {
						className: G.a.container
					}, r.a.createElement(U.a, {
						className: G.a.pinnedIcon,
						isFilled: e
					}), r.a.createElement("span", {
						className: G.a.metaText
					}, z._("pinned by moderators", null, {
						hk: "1qU8t4"
					})))
				},
				X = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				Z = s("./src/reddit/components/PostTitle/index.tsx"),
				Q = s("./src/reddit/components/PostTopLine/index.tsx"),
				$ = s("./src/reddit/components/SourceLink/index.tsx"),
				Y = s("./src/reddit/constants/experiments.ts"),
				ee = s("./src/reddit/contexts/InsideOverlay.tsx"),
				te = s("./src/reddit/contexts/PageLayer/index.tsx"),
				se = s("./src/reddit/contexts/Post/index.tsx"),
				oe = s("./src/reddit/helpers/isCrosspost.ts"),
				re = s("./src/reddit/helpers/postEvent.ts"),
				ne = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				ie = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ae = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const de = Object(i.a)(C.L, e => e.some(ae.c)),
				ce = Object(i.a)(de, e => e),
				le = (e, t) => Object(ie.c)(e, {
					experimentName: Y.lb,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && ce(e, {
							listingKey: s
						})
					}
				});
			var me = s("./src/reddit/selectors/postFlair.ts"),
				pe = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ue = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				be = s.n(ue),
				he = s("./src/reddit/components/LargePost/index.m.less"),
				fe = s.n(he);
			const ge = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(C.L)(e, {
						listingKey: s
					}) : void 0
				},
				xe = Object(n.b)(() => Object(i.c)({
					autoplayPref: j.b,
					activeModalId: v.a,
					hideNSFWPref: j.B,
					flairStyleTemplate: te.S,
					isCurrentUserProfilePost: C.k,
					isLoggedIn: j.J,
					isActive: C.j,
					isPostChainDismissed: y.c,
					isPostChained: y.d,
					listingBelowVariant: ne.b,
					moderatorPermissions: O.j,
					modModeEnabled: te.Q,
					posts: ge,
					postHeightVariant: le,
					showEditFlair: me.a,
					showAwardsPlaque: P.a
				}), (e, {
					listingKey: t,
					listingName: s,
					postId: o
				}) => ({
					chainPost: () => {
						s && t && e(Object(m.d)({
							listingKey: t,
							listingName: s,
							postId: o
						}))
					},
					handleVote: t => {
						const s = t === x.a.upvoted ? Object(p.bb)(o) : Object(p.u)(o);
						e(s)
					},
					onIgnoreReports: () => e(Object(p.X)(o)),
					onOpenReportsDropdown: t => e(Object(u.h)({
						tooltipId: t
					}))
				})),
				ve = r.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						chainPost: n,
						className: i,
						currentUser: m,
						eventFactory: p,
						flairStyleTemplate: u,
						forceLoadMedia: x,
						hideNSFWPref: v,
						hostPostId: P,
						imageGalleryCurrentItem: y,
						inSubredditOrProfile: O = !1,
						isCommentsPage: C,
						isCurrentUserProfilePost: j,
						isFrontpage: W,
						isGalleryTileLayoutDefault: U,
						isLoggedIn: q,
						isOverlay: G,
						isPostChainDismissed: z,
						isPostChained: ee,
						isTopicPage: te,
						listingBelowVariant: se,
						listingKey: ne,
						listingName: ie,
						moderatorPermissions: ae,
						modModeEnabled: de,
						onClickPost: ce,
						onIgnoreReports: le,
						onOpenReportsDropdown: me,
						post: ue,
						postHeightVariant: he,
						scrollerItemRef: ge,
						shouldShowGalleryTileOption: xe,
						showAwardsPlaque: ve,
						showEditFlair: Pe,
						subredditOrProfile: ye,
						userIsOp: Oe,
						isActionBarAnimationEnabled: Ce,
						postId: je,
						postIds: Ie,
						onceInViewport: we
					} = e, Ee = !!e.redditStyle || !!e["data-redditstyle"], Se = Ee ? void 0 : u, Le = Object(c.a)(ae), ke = de && Le, Ne = Object(a.a)(ae), Te = Object(d.a)(ae), Me = Object(A.c)(ue), _e = !!ue.media && ue.media.type === f.o.RTJSON, Fe = Oe && _e, Re = s ? s - K.a : void 0, Ae = !(W && q || te), Be = (e => e === Y.Lc.OnlyTitles)(he) && !Object(oe.a)(ue), Ve = (e => e === Y.Lc.MediumHeight)(he) && !Object(oe.a)(ue), Ke = (e => {
						const {
							post: t,
							postIds: s,
							posts: o
						} = e;
						if (!Object(g.q)(t)) return;
						const r = s && 0 === s.indexOf(t.id),
							n = s && 1 === s.indexOf(t.id),
							i = o && o[1] && Object(g.q)(o[1]);
						return {
							hasTopCompactPostStyles: r && i,
							hasBottomCompactPostStyles: n,
							showPinnnedHeader: r
						}
					})(e), He = !!se && !Object(Y.Hd)(se), De = (!O || He) && !ue.isSponsored, We = Object(I.t)(ue, y), {
						source: Ue
					} = We, qe = Object(o.useRef)(null), Ge = Object(o.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == we || we())
						})
					}, [we]);
					Object(h.a)(qe, Ge);
					const ze = r.a.createElement(r.a.Fragment, null, r.a.createElement(V.a, {
						className: Object(w.a)(fe.a.container, i, be.a.largeAndMediumPostStyles, be.a.largeAndMediumActiveStyles, Object(l.a)(e), {
							[be.a.mUseRedditTheme]: Ee,
							promotedvideolink: ue.isSponsored && !(ue.media && f.a.has(ue.media.type)),
							[fe.a.topCompactPost]: Ke && Ke.hasTopCompactPostStyles,
							[fe.a.bottomCompactPost]: Ke && Ke.hasBottomCompactPostStyles
						}),
						isOverlay: G,
						style: Object(l.b)(e.flairStyleTemplate),
						post: ue,
						onClick: ce,
						onPostContentClick: n,
						eventFactory: p
					}, r.a.createElement("div", {
						ref: qe
					}), r.a.createElement(X.a, {
						model: ue,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: Se,
						redditStyle: Ee,
						subreddit: ye,
						isActionBarAnimationEnabled: Ce,
						postId: je
					}), r.a.createElement(B.a, {
						className: Object(w.a)(fe.a.backgroundWrapper, {
							[fe.a.isEvent]: Object(re.a)(ue)
						}),
						"data-click-id": "background",
						flairStyleTemplate: Se,
						post: ue,
						redditStyle: Ee
					}, r.a.createElement(M.a, {
						post: ue
					}), Ke && Ke.showPinnnedHeader && r.a.createElement(J, null), r.a.createElement(Q.a, {
						className: fe.a.postTopLine,
						hideAwards: ve,
						hideNSFWPref: v,
						hostPostId: P,
						iconClassName: fe.a.postTopLineIcon,
						inSubredditOrProfile: O,
						isCommentsPage: !!C,
						isCompactPinnedPost: !!Ke,
						isCurrentUserProfilePost: j,
						isOverlay: !!G,
						isTopicPage: !!te,
						listingKey: ne,
						post: ue,
						shouldShowSubscribeButton: Ae,
						showSubreddit: De,
						showSubredditIcon: !0,
						subredditOrProfile: ye
					}), r.a.createElement(Z.c, {
						className: fe.a.postTitle,
						post: ue,
						redditStyle: Ee,
						size: Z.b.Large,
						titleColor: Se && Se.postTitleColor,
						isOverlay: G
					}), ue.source && !ue.isSponsored && !(ue.media && Object(f.G)(ue.media)) && r.a.createElement($.a, {
						className: fe.a.sourceLink,
						post: ue
					}), r.a.createElement("div", {
						className: fe.a.postMediaWrapper
					}, !Ke && r.a.createElement(H.a, {
						isGalleryTileLayoutDefault: U,
						isListing: !0,
						isMediumHeight: Ve,
						isNotCardView: !!G,
						isTitleOnly: Be,
						showCentered: !0,
						flairStyleTemplate: Se,
						post: ue,
						availableWidth: Re,
						shouldLoad: x,
						scrollerItemRef: ge,
						autoplayPref: t,
						shouldShowGalleryTileOption: xe
					})), ue.isSponsored && Ue && Ue.url && r.a.createElement(E.a, {
						className: fe.a.adLinkWrapper
					}, r.a.createElement(S.a, {
						post: ue,
						adLinkContent: We
					})), de && Le && Me && r.a.createElement(R.a, {
						onIgnoreReports: le,
						reportable: ue
					}), r.a.createElement(F.d, null), ve && r.a.createElement(L.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !1,
						thing: ue,
						tooltipType: G ? pe.c.Lightbox : void 0
					}), r.a.createElement("div", {
						className: fe.a.flatListContainer
					}, r.a.createElement(N.a, {
						className: fe.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Se,
						model: ue,
						onVoteClick: e.handleVote
					}), r.a.createElement(_.c, {
						currentUser: m,
						hasModFlairPerms: Ne,
						hasModFullPerms: Te,
						hasModPostPerms: Le,
						hostPostId: P,
						isActionBarAnimationEnabled: Ce,
						isLargePost: !0,
						isOverlay: !!G,
						listingKey: ne,
						modModeEnabled: de,
						onIgnoreReports: le,
						onOpenReportsDropdown: me,
						post: ue,
						showEditPost: Fe,
						showEditFlair: Pe,
						useFlatlistBreakpoints: Object(D.h)({
							editPost: !1,
							save: !ke,
							hide: !1,
							report: !1
						})
					}))), W && r.a.createElement(k.a, {
						post: ue,
						postIds: null != Ie ? Ie : [],
						subredditId: null == ye ? void 0 : ye.id
					})));
					return r.a.createElement(b.b, null, ze, ee && !z && r.a.createElement(T.a, {
						className: fe.a.chain,
						listingKey: ne,
						listingName: ie,
						postId: ue.id
					}))
				});
			ve.displayName = "LargePostMemoized";
			t.default = Object(se.b)(xe(Object(ee.b)(ve)))
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
				n = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				d = s("./src/reddit/components/SubredditIcon/index.tsx"),
				c = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				l = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				p = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				u = s.n(p);
			const b = s("./src/lib/lessComponent.tsx").a.wrapped(m.a, "CrosspostIcon", u.a);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: r,
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
					shouldHideNsfwIcon: r,
					subredditOrProfile: p
				}), n.a.createElement("span", null, p.displayText)), ((e, t) => {
					if (t) return n.a.createElement("div", {
						role: "img",
						"aria-label": o.fbt._("Crossposted by{author}from{community}", [o.fbt._param("author", Object(l.d)(e)), o.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, n.a.createElement(b, null))
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
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Thumbnail/index.tsx"),
				a = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				d = s.n(a);

			function c(e) {
				const {
					source: t
				} = e.post;
				return r.a.createElement("div", {
					className: Object(n.a)(d.a.container, e.className)
				}, r.a.createElement(i.a, {
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
				n = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				d = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				l = s("./src/reddit/icons/fonts/index.tsx"),
				m = s("./src/reddit/icons/svgs/Notification/index.tsx"),
				p = s("./src/reddit/icons/svgs/NotificationFilled/index.tsx"),
				u = s("./src/reddit/components/NotificationButton/index.m.less"),
				b = s.n(u);
			const h = i.a.wrapped(m.a, "NotificationIcon", b.a),
				f = i.a.wrapped(p.a, "NotificationIconFilled", b.a);
			t.a = e => {
				const t = Object(d.a)(),
					s = Object(c.a)(),
					{
						isFilled: o,
						onClick: i,
						hasTooltip: m,
						tooltipText: p,
						className: u
					} = e;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
					className: Object(n.a)(b.a.notificationButton, u),
					ref: s.target.ref,
					onMouseEnter: s.show,
					onMouseLeave: s.hide,
					onClick: i
				}, t ? r.a.createElement(l.a, {
					name: "notification",
					isFilled: o,
					className: b.a.icon,
					"aria-label": p
				}) : o ? r.a.createElement(f, {
					"aria-label": p
				}) : r.a.createElement(h, {
					"aria-label": p
				})), m && r.a.createElement(a.a, {
					popperProps: s.popperProps,
					arrowProps: s.arrowProps,
					visible: s.visible
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
				return J
			})), s.d(t, "a", (function() {
				return Z
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/history/esm/history.js"),
				r = s("./node_modules/lodash/debounce.js"),
				n = s.n(r),
				i = s("./node_modules/lodash/last.js"),
				a = s.n(i),
				d = s("./node_modules/lodash/throttle.js"),
				c = s.n(d),
				l = s("./node_modules/react/index.js"),
				m = s.n(l),
				p = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/lib/ads/index.ts"),
				b = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/constants/index.ts"),
				f = s("./src/lib/fastdom/index.ts"),
				g = s("./src/lib/lessComponent.tsx"),
				x = s("./src/lib/opener/index.ts"),
				v = s("./src/lib/sentry/index.ts"),
				P = s("./src/reddit/components/PostList/LoadMore.tsx"),
				y = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				O = s("./src/reddit/components/Scroller/Simple.tsx"),
				C = s("./src/reddit/constants/adEvents.ts"),
				j = s("./src/reddit/constants/componentSizes.ts"),
				I = s("./src/reddit/constants/postLayout.ts"),
				w = s("./src/reddit/controls/InternalLink/index.tsx"),
				E = s("./src/reddit/controls/OutboundLink/index.tsx"),
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), V = 500, K = new M.a(V), H = new M.a(V), D = new M.a(V), W = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5
			}, U = g.a.div("SeeMore", A.a), q = g.a.wrapped(k.a, "ArrowRight", A.a), G = (e, t, s, o, r, n, i, a) => {
				const d = `entered-${e}-${t}-${s?`last-${o}-${r}`:""}-${n}`;
				let c = K.get(d);
				return void 0 === c && (c = () => {
					s && i.onBottomViewed(o, r), i.trackOnPostEnteredViewport(e, t, a)
				}, K.set(d, c)), c
			}, z = (e, t, s, o, r) => {
				const n = `left-${e}-${t}`;
				let i = H.get(n);
				return void 0 === i && (i = n => {
					s.trackOnPostExitedViewport(e, t, n, o, r)
				}, H.set(n, i)), i
			}, J = (e, t) => {
				const s = `click-${e}`;
				let o = D.get(s);
				return void 0 === o && (o = (e, s, o, r) => {
					if (s.isSponsored) {
						t.fireAdPixelsOfType(s, C.a.Click);
						const {
							source: e
						} = Object(u.t)(s, r);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							o && (t = Object(E.a)(s.id, o, t).url), Object(x.d)(t, x.c.BLANK)
						}
					} else t.openPost({
						postOrComment: s,
						clickInfo: Object(S.a)(e)
					})
				}, D.set(s, o)), o
			}, X = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class Z extends m.a.Component {
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
						} = this.props, o = e(), r = [];
						o.forEach(e => r.push(e.id));
						const n = r.map(e => t[e]).filter(Boolean),
							i = n.map(e => s[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(T.a)(n, i))
					}, h.d, {
						leading: !0
					})
				}
				UNSAFE_componentWillMount() {
					this.timerId && _.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = _.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, this.timerId) {
						const e = _.c.end(this.timerId);
						setTimeout(() => Object(_.b)(h.l.Redesign, {
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
						setTimeout(() => Object(_.b)(h.l.Redesign, {
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
					const o = _.c.end(e);
					setTimeout(() => {
						s(t(o, F.TimerType.InApp))
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
						triggerNewPostPill: n,
						...i
					} = e, a = Object.keys(o), d = Object.keys(i);
					if (d.length !== a.length) return !0;
					if (d.some(e => o[e] !== i[e])) return !0;
					if (t === r) return !1;
					if (s !== n) return !0;
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
				scrollChildForPost(e, t, s, o) {
					const {
						currentProfileName: r,
						hostPostId: n,
						isCommentPermalink: i,
						isCommentsPage: a,
						isFrontpage: d,
						isProfilePostListing: c,
						isTopicPage: l,
						listingKey: p,
						listingName: u,
						pageLayer: b,
						pageReferrer: f,
						postClickEventFactory: g,
						redditStyle: x,
						shouldHideFlair: P,
						isActionBarAnimationEnabled: y,
						triggerNewPostPill: O,
						postIds: C
					} = this.props, j = 0 === t, w = `post-${o}-${e}-${t}-${s?"last-index":""}-${u}-${p}-${f}`;
					let E;
					if (void 0 === (E = this.scrollChildCache.get(w))) {
						const {
							inSubredditOrProfile: S,
							postsById: k
						} = this.props, T = k[e], M = T.crosspostRootId && k[T.crosspostRootId] ? k[T.crosspostRootId] : T;
						T.crosspostRootId && !k[T.crosspostRootId] && v.c.withScope(e => {
							e.setExtra("errorType", h.q.API), e.setExtra("description", `Post ${T.id} is crosspost of ${T.crosspostRootId}, but ` + `${T.crosspostRootId} details are missing in the state`), v.c.captureMessage("Crosspost parent details are missing")
						});
						const _ = this.props.postComponentForLayout({
								isCrosspost: !!T.crosspostRootId,
								isFirstPost: j,
								layout: o,
								post: M
							}),
							F = `post-list-item-[layout: ${o}]-[postId: ${e}]`,
							R = G(e, o, s, p, u, f, this.props, t),
							A = z(e, o, this.props, t, b),
							B = J(e, this.props),
							V = M.media && M.media.type === N.o.EMBED ? M.media.provider : null;
						E = {
							estHeight: Object(L.c)(T, o),
							id: e,
							isFocusable: !(!M.media || !(o === I.g.Large || o === I.g.Classic && Object(N.G)(M.media))) && (N.d.has(M.media.type) && (!V || !N.s.has(V)) && !M.isSpoiler && !M.isNSFW),
							trackOnEnteredViewport: R,
							trackOnExitedViewport: A,
							render: ({
								className: o,
								height: h,
								width: f,
								remeasure: v,
								setScrollerChildRef: I,
								shouldLoadInitially: w
							}) => m.a.createElement(_, {
								className: o,
								currentProfileName: r,
								key: F,
								availableWidth: f,
								eventFactory: g,
								first: j,
								forceLoadMedia: w,
								hostPostId: n,
								inSubredditOrProfile: S,
								isActionBarAnimationEnabled: y,
								isCommentPermalink: i,
								isCommentsPage: a,
								isFrontpage: d,
								isProfilePostListing: c,
								isTopicPage: l,
								listingKey: p,
								listingName: u,
								pageLayer: b,
								last: s,
								onClickPost: B,
								onSizeChanged: v,
								postId: e,
								postIds: C,
								redditStyle: x,
								sendEvent: this.props.sendEvent,
								scrollerItemRef: I,
								shouldHideFlair: P,
								onceInViewport: () => {
									null == O || O(t)
								}
							})
						}, this.scrollChildCache.set(w, E)
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
						layout: o,
						onTryAgain: r,
						postListPlaceholderComponent: n
					} = this.props;
					if (s) return;
					const i = n;
					return m.a.createElement("div", {
						className: A.a.placeholder
					}, m.a.createElement(i, {
						className: t,
						isLoading: !e,
						layout: o
					}), !!e && m.a.createElement(y.a, {
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
						onLoadMore: n
					} = this.props;
					if (!s) return m.a.createElement("div", {
						className: A.a.placeholder
					}, m.a.createElement(P.a, {
						className: r,
						isLoading: !!t,
						layout: o,
						countOverride: W[o]
					}), !!e && m.a.createElement(y.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: r,
						isTruncated: n,
						layout: i,
						location: a,
						loadMore: d,
						postIds: c,
						onLoadMore: u
					} = this.props;
					let f = c.map((e, t, s) => {
						const o = t === c.length - 1;
						return this.scrollChildForPost(e, t, o, i)
					});
					r && (f = X(f, r));
					const g = this.props.measureScrollFPS ? `post-listings-${i}` : void 0,
						x = a ? Object(o.e)(a) : null,
						v = x || n;
					return m.a.createElement(l.Fragment, null, m.a.createElement(O.b, {
						innerRef: this.updateScrollerRef,
						className: v ? A.a.truncatedPostList : Object(b.a)(A.a.postList, this.props.className),
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
					}, m.a.createElement(w.a, {
						className: A.a.seeMorePostsText,
						to: Object(p.a)(x, {
							type: h.Sb.Posts
						})
					}, B._("See More Posts", null, {
						hk: "3o0CqI"
					}), m.a.createElement(q, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			Z.defaultProps = {
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/NotificationButton/index.tsx"),
				l = s("./src/reddit/components/PostBadges/index.tsx"),
				m = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/SubredditIcon/index.tsx"),
				u = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/controls/OutboundLink/index.tsx"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				P = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Subreddit/index.ts"),
				O = s("./src/reddit/components/PostTopLine/index.m.less"),
				C = s.n(O);
			const j = s("./src/lib/lessComponent.tsx").a.div("Container", C.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: r,
					hideAwards: O,
					hideNSFWPref: I,
					hostPostId: w,
					iconClassName: E,
					inSubredditOrProfile: S,
					isCommentsPage: L,
					isCompactPinnedPost: k,
					isCurrentUserProfilePost: N,
					isOverlay: T,
					isTopicPage: M,
					listingKey: _,
					post: F,
					shouldShowSubscribeButton: R,
					showCornerOutboundLink: A,
					showSubreddit: B,
					showSubredditIcon: V,
					subredditOrProfile: K,
					isFollowed: H,
					shouldShowFollowButton: D,
					onFollowPostClick: W
				} = e, U = O || M;
				return n.a.createElement(j, {
					className: t
				}, B && K && n.a.createElement("div", {
					className: C.a.subredditIconWrapper
				}, n.a.createElement(u.a, {
					"data-click-id": "subreddit",
					to: K.url
				}, V && n.a.createElement(p.b, {
					className: Object(i.a)(C.a.subredditIcon, E),
					shouldHideNsfwIcon: I,
					subredditOrProfile: K
				}))), n.a.createElement("div", {
					className: C.a.everythingElseWrapper
				}, B && n.a.createElement(d.h, {
					type: F.belongsTo.type,
					id: F.belongsTo.id
				}), n.a.createElement(m.d, {
					className: C.a.postTopMeta,
					forceOpenInNewTab: r,
					flairStyleTemplate: s,
					tooltipType: T ? m.c.Lightbox : void 0,
					post: F,
					showSub: B,
					subredditOrProfile: K
				}), n.a.createElement(l.a, {
					className: C.a.postBadges,
					displayText: K ? K.displayText : null,
					inSubredditOrProfile: S,
					isCompactPinnedPost: k,
					post: F,
					tooltipType: T ? m.c.Lightbox : void 0
				}), !U && n.a.createElement(a.a, {
					isPostDetail: L,
					thing: F,
					tooltipType: T ? m.c.Lightbox : void 0
				})), K && B && R && !N && n.a.createElement(b.a, {
					className: C.a.SubscribeButton,
					getEventFactory: e => Object(x.g)(F.id, e ? "unsubscribe" : "subscribe", "post", _, w),
					identifier: {
						name: K.name,
						type: Object(y.h)(K) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: F.id,
					size: f.c.XS
				}), A && n.a.createElement(g.b, {
					className: C.a.OutboundLink,
					isSponsored: F.isSponsored,
					postId: F.id,
					href: Object(P.D)(e.post),
					source: F.source
				}, n.a.createElement(v.a, {
					className: C.a.outboundLinkIcon
				})), D && n.a.createElement(c.a, {
					isFilled: !!H,
					onClick: W,
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
			var o = s("./node_modules/lodash/noop.js"),
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/postList.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/isComment.ts"),
				p = s("./src/reddit/helpers/isPost.ts"),
				u = s("./src/reddit/helpers/trackers/post.ts"),
				b = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				f = s("./src/reddit/selectors/tracking.ts"),
				g = s("./src/reddit/selectors/user.ts");
			const x = (e, t) => (e, t, s) => Object(m.a)(e) ? 120 : 47,
				v = Object(l.t)(),
				P = {
					apiError: b.a,
					apiPending: b.b,
					currentUser: g.i,
					layout: l.O,
					loadMore: b.d,
					subredditsById: h.ab,
					viewportDataLoaded: f.a,
					commentsById: b.g,
					itemIds: b.f,
					itemIdToPostId: b.e,
					postsById: b.h,
					estimateItemHeight: x
				},
				y = Object(i.c)(P),
				O = Object(n.b)(y, (e, t) => ({
					onBottomViewed: (t, s) => e(d.c(t, s)),
					openPost: t => {
						e(a.I(t))
					},
					trackOnPostEnteredViewport: (t, s) => {
						Object(p.a)(t) && e(a.L(t))
					},
					trackOnPostExitedViewport: (t, s, o) => {
						Object(p.a)(t) && e(a.M(t, o))
					},
					fireAdPixelsOfType: r.a
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(u.g)(e, t)
				}));
			t.a = e => Object(c.c)(v(O(e)))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return j
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "b", (function() {
				return S
			}));
			var o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				d = s("./src/reddit/actions/gold/tooltips.ts"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				m = s("./src/reddit/actions/survey/index.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/components/PostList/Placeholder.tsx"),
				g = s("./src/reddit/featureFlags/index.ts"),
				x = s("./src/reddit/selectors/experiments/survey.ts"),
				v = s("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				P = s("./src/reddit/selectors/listings.ts"),
				y = s("./src/reddit/selectors/posts.ts"),
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
				w = {
					apiError: P.c,
					apiPending: P.d,
					measureScrollFPS: g.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(u.O)(e, t),
					loadMore: (e, t) => t.isPredictionsPage ? null : Object(P.g)(e, t),
					postsById: (e, t) => {
						if (t.isPredictionsPage) {
							const s = Object(O.F)(e, t.listingName);
							return Object(v.j)(e, {
								subredditId: s
							})
						}
						return Object(y.P)(e, {
							...t
						})
					},
					postIds: Object(n.a)((e, {
						listingKey: t,
						listingName: s,
						isPredictionsPage: o,
						inSubredditOrProfile: r
					}) => {
						if (o) {
							const t = Object(O.F)(e, s);
							return Object(v.k)(e, {
								subredditId: t
							})
						}
						return Object(y.C)(e, t, s, r)
					}),
					subredditsById: O.ab,
					viewportDataLoaded: C.a,
					pageReferrer: u.R,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: x.d
				},
				E = Object(r.c)(w),
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
						})), e(c.I(s))
					},
					fireAdPixelsOfType: (t, s) => {
						e(c.x(t, s))
					},
					trackOnPostEnteredViewport: (t, s, o) => {
						e(c.L(t, o))
					},
					trackOnPostExitedViewport: (t, s, o, r, n) => {
						e(c.M(t, o, r, n))
					},
					surveyTriggerScrollCounted: () => e(Object(m.h)())
				}),
				L = Object(o.b)(E, S, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(h.g)(e, t, "post", s.listingKey, s.hostPostId, s.listingBelowVariant, void 0),
					postComponentForLayout: e => Object(b.b)({
						...e
					})
				}));
			t.a = e => Object(p.c)(I(L(e)))
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/postFlair.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				p = s("./src/reddit/selectors/postFlair.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(o.b)(() => Object(r.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: u.d,
				crosspostSubredditOrProfile: u.e,
				flairStyleTemplate: c.S,
				hideNSFWPref: b.B,
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
					selectedTemplateId: o
				}) => e(Object(i.h)({
					post: t,
					previewFlair: s,
					selectedTemplateId: o
				})),
				handleVote: s => {
					const o = s === d.a.upvoted ? Object(n.bb)(t) : Object(n.u)(t);
					e(o)
				},
				onIgnoreReports: () => e(Object(n.X)(t)),
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
			t.a = h
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
				return c
			})), s.d(t, "a", (function() {
				return l
			}));
			var o = s("./src/config.ts"),
				r = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeApiRequest/index.ts"),
				a = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				d = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const c = (e, t, s) => Object(i.a)(e, {
					data: s,
					endpoint: Object(r.a)(Object(a.a)(Object(d.a)(`${o.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`))),
					traceRequestName: "get_profile_conversations",
					method: n.eb.GET
				}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
					...e,
					body: {
						...e.body,
						pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
					}
				} : e),
				l = (e, t, s) => Object(i.a)(e, {
					data: s,
					endpoint: Object(r.a)(Object(d.a)(`${o.a.gatewayUrl}/desktopapi/v1/user/${t}/overview`)),
					method: n.eb.GET
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

			function n() {
				return (n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", n({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Notification/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M9,18H8a2,2,0,0,0,4,0H9Z"
			}), r.a.createElement("path", {
				d: "M17.364,10.98a2.738,2.738,0,0,1-1.209-2.267L16.15,7.084a6.15,6.15,0,0,0-12.3,0l0,1.632A2.737,2.737,0,0,1,2.636,10.98,3.988,3.988,0,0,0,.875,14.291v.681A1.127,1.127,0,0,0,2,16.1H18a1.127,1.127,0,0,0,1.125-1.125v-.681A3.988,3.988,0,0,0,17.364,10.98Zm.511,3.867H2.125v-.556a2.739,2.739,0,0,1,1.21-2.275,3.988,3.988,0,0,0,1.76-3.3l0-1.633a4.9,4.9,0,1,1,9.8,0l0,1.631a3.988,3.988,0,0,0,1.76,3.3,2.739,2.739,0,0,1,1.21,2.275Z"
			}))
		},
		"./src/reddit/icons/svgs/NotificationFilled/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
			t.a = e => r.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				className: e.className
			}, r.a.createElement("path", {
				d: "M9,18H8a2,2,0,0,0,4,0H9Z M17.364,10.98a2.738,2.738,0,0,1-1.209-2.267L16.15,7.084a6.15,6.15,0,0,0-12.3,0l0,1.632A2.737,2.737,0,0,1,2.636,10.98,3.988,3.988,0,0,0,.875,14.291v.681A1.127,1.127,0,0,0,2,16.1H18a1.127,1.127,0,0,0,1.125-1.125v-.681A3.988,3.988,0,0,0,17.364,10.98Z"
			}), r.a.createElement("path", {
				d: "M9,18H8a2,2,0,0,0,4,0H9Z M17.364,10.98a2.738,2.738,0,0,1-1.209-2.267L16.15,7.084a6.15,6.15,0,0,0-12.3,0l0,1.632A2.737,2.737,0,0,1,2.636,10.98,3.988,3.988,0,0,0,.875,14.291v.681A1.127,1.127,0,0,0,2,16.1H18a1.127,1.127,0,0,0,1.125-1.125v-.681A3.988,3.988,0,0,0,17.364,10.98Z"
			}), r.a.createElement("path", {
				d: "M9,18H8a2,2,0,0,0,4,0H9Z M17.364,10.98a2.738,2.738,0,0,1-1.209-2.267L16.15,7.084a6.15,6.15,0,0,0-12.3,0l0,1.632A2.737,2.737,0,0,1,2.636,10.98,3.988,3.988,0,0,0,.875,14.291v.681A1.127,1.127,0,0,0,2,16.1H18a1.127,1.127,0,0,0,1.125-1.125v-.681A3.988,3.988,0,0,0,17.364,10.98Z"
			}))
		},
		"./src/reddit/icons/svgs/Pin/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M18.71,7.75,17.24,6.29,13.71,2.76,12.25,1.29a1,1,0,0,0-1.41,0L10,2.15a1,1,0,0,0-.26,1l.46,1.78L6.89,8.17,5.11,7.71a1,1,0,0,0-1,.26l-.86.86a1,1,0,0,0,0,1.41l1.47,1.47.62.62L.6,18.7a.5.5,0,0,0,.7.7l6.37-4.78.62.62,1.47,1.47a1,1,0,0,0,1.41,0l.86-.86a1,1,0,0,0,.26-1l-.46-1.78,3.28-3.28,1.78.46a1,1,0,0,0,.25,0,1,1,0,0,0,.71-.29l.86-.86A1,1,0,0,0,18.71,7.75Z"
			})))
		},
		"./src/reddit/pages/ProfileOverview/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/lodash/fromPairs.js"),
				r = s.n(o),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/isFakeSubreddit/index.ts"),
				m = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/lib/constants/index.ts"),
				b = s("./src/reddit/actions/pages/profileOverview/index.ts"),
				h = s("./src/reddit/actions/pages/profileShared.ts"),
				f = s("./src/reddit/actions/profileConversations.ts"),
				g = s("./node_modules/lodash/difference.js"),
				x = s.n(g),
				v = s("./node_modules/lodash/pick.js"),
				P = s.n(v),
				y = s("./src/lib/makeActionCreator/index.ts"),
				O = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				C = s("./src/reddit/constants/parameters.ts"),
				j = s("./src/reddit/endpoints/page/profileOverviewPage.ts"),
				I = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const w = Object(y.a)(I.c),
				E = Object(y.a)(I.b),
				S = Object(y.a)(I.a);
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
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const H = Object(R.a)(V.a.wrapped(e => {
				const {
					className: t,
					itemIds: s
				} = e, o = s.length > 0;
				return i.a.createElement(F.a, K({
					className: Object(M.a)(t, {
						[B.a.ComponentHasItems]: o
					})
				}, e))
			}, "Component", B.a));
			var D = e => i.a.createElement(H, K({}, e, {
					itemComponent: _.a
				})),
				W = s("./src/reddit/components/PostList/index.tsx"),
				U = s("./src/reddit/components/TrackingHelper/index.tsx"),
				q = s("./src/lib/isPinnedAdminPost/index.ts"),
				G = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				z = s("./node_modules/lodash/last.js"),
				J = s.n(z);
			var X = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				Z = s("./src/reddit/selectors/posts.ts"),
				Q = s("./src/reddit/components/ClassicPost/index.tsx"),
				$ = s("./src/reddit/components/LargePost/index.tsx"),
				Y = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				ee = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				te = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				se = s("./src/reddit/selectors/profile.ts"),
				oe = s("./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less"),
				re = s.n(oe);
			const {
				fbt: ne
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ie = V.a.div("ExtraCommentsItemWrapper", re.a), ae = V.a.p("ExtraComments", re.a), de = V.a.wrapped(ae, "ExtraCommentsInteractive", re.a);
			var ce = Object(a.b)(() => Object(d.c)({
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
				be = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				he = s.n(be),
				fe = s("./src/reddit/components/OverviewConversationsPost/index.m.less"),
				ge = s.n(fe);

			function xe() {
				return (xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const ve = V.a.div("BackgroundWrapper", ge.a),
				Pe = V.a.wrapped(Q.default, "ClassicPost", ge.a),
				ye = V.a.wrapped(Y.a, "OverviewCommentPost", ge.a),
				Oe = Object(a.b)(() => Object(d.c)({
					commentThreadLinkSets: (e, {
						postId: t,
						currentProfileName: s
					}) => {
						const o = s ? s.toLowerCase() : "",
							r = Object(G.a)(t, o);
						return e.pages.profileOverview.conversations.keyToCommentThreadLinkSets[r]
					},
					headComment: (e, {
						postId: t,
						currentProfileName: s
					}) => {
						const o = s ? s.toLowerCase() : "",
							r = Object(G.a)(t, o);
						return e.pages.profileOverview.conversations.keyToHeadCommentId[r]
					},
					isInitiallyPinned: (e, {
						postId: t,
						currentProfileName: s
					}) => !!s && Object(Z.o)(e, t, s),
					isPinned: (e, {
						postId: t,
						currentProfileName: s
					}) => !!s && Object(Z.q)(e, t, s),
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
					layout: p.O
				})),
				Ce = V.a.wrapped($.default, "OverviewLargePost", ge.a),
				je = Oe(e => {
					const {
						availableWidth: t,
						className: s,
						commentThreadLinkSets: o,
						eventFactory: r,
						forceLoadMedia: n,
						headComment: a,
						isInitiallyPinned: d,
						isPinned: c,
						isScrolling: l,
						last: m,
						layout: p,
						onClickPost: u,
						onSizeChanged: b,
						pageLayer: h,
						post: f,
						postId: g,
						profileName: x,
						scrollerItemRef: v
					} = e, P = {
						last: m,
						onClickPost: u,
						postId: g
					};
					if (!x) return null;
					const y = x === f.author,
						O = Object(q.a)(c, f.distinguishType);
					if (!y && !a && !O) return null;
					const C = a ? function(e) {
							const t = [],
								s = e.length;
							for (let o = 0; o < s; o++) {
								(0 === o || e[o - 1].depth !== e[o].depth - 1) && t.push([]), J()(t).push(e[o])
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
						j = C.length - 1;
					return i.a.createElement("div", {
						className: Object(M.a)(he.a.largeAndMediumActiveStyles, he.a.largeAndMediumPostStyles, ge.a.OverviewConversationsPost, s),
						style: {
							...Object(X.b)(),
							...Object(X.d)(e)
						}
					}, i.a.createElement(ee.a, {
						isFirst: !0,
						isLast: j < 0,
						key: f.id
					}, !y && !!a && i.a.createElement(ye, xe({}, P, {
						commentId: a,
						key: f.id,
						profileName: x
					})), (y || O) && (p === ue.g.Classic ? i.a.createElement(Pe, {
						availableWidth: t,
						eventFactory: r,
						inSubredditOrProfile: !1,
						isOverlay: !1,
						isScrolling: l,
						forceLoadMedia: n,
						last: m,
						onClickPost: u,
						onSizeChanged: b,
						pageLayer: h,
						postId: g,
						scrollerItemRef: v
					}) : i.a.createElement(Ce, {
						availableWidth: t,
						eventFactory: r,
						isScrolling: l,
						isFrontpage: !1,
						forceLoadMedia: n,
						last: m,
						onClickPost: u,
						onSizeChanged: b,
						pageLayer: h,
						postId: g,
						scrollerItemRef: v
					}))), i.a.createElement(ve, {
						style: {
							background: Object(X.e)(e)
						}
					}, !d && C.map((e, t) => i.a.createElement(ee.a, {
						isLast: t === j,
						key: `${t}-isLast[${t===j}]`
					}, e.map((t, s) => {
						const o = 0 === s,
							r = s === e.length - 1;
						return "comment" === t.type ? i.a.createElement(le.a, {
							commentId: t.id,
							depth: t.depth,
							isFirst: o,
							isLast: r,
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
						o = Object(p.Z)();
					return i.a.createElement(je, xe({
						theme: null !== (t = e.theme) && void 0 !== t ? t : s,
						currentProfileName: Object(p.h)(o),
						pageLayer: o
					}, e))
				})),
				we = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				Ee = s("./src/reddit/helpers/trackers/post.ts"),
				Se = s("./src/reddit/selectors/tracking.ts"),
				Le = s("./src/reddit/connectors/PostList/index.ts");
			const ke = Object(d.c)({
					...Le.d,
					postIds: Z.M,
					viewportDataLoaded: Se.a
				}),
				Ne = Object(Le.c)(),
				Te = Object(a.b)(ke, Le.b, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(Ee.g)(e, t),
					postComponentForLayout: ({
						post: e
					}) => e.isBlank ? we.a : Ie
				}));
			var Me = (e => Object(U.c)(Ne(Te(e))))(W.a),
				_e = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				Fe = s("./node_modules/lodash/debounce.js"),
				Re = s.n(Fe),
				Ae = s("./src/reddit/actions/post.ts"),
				Be = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Ve = s("./src/lib/isUrl/index.ts"),
				Ke = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				He = s("./src/reddit/components/Media/index.tsx"),
				De = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				We = s("./src/reddit/components/PostContainer/index.tsx"),
				Ue = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				qe = s("./src/reddit/components/PostTitle/index.tsx"),
				Ge = s("./src/reddit/connectors/miniCardPost.ts"),
				ze = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Je = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Xe = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Ze = s("./src/reddit/models/Media/index.ts"),
				Qe = s("./node_modules/fbt/lib/FbtPublic.js"),
				$e = s("./src/reddit/components/CommentsLink/index.tsx"),
				Ye = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				et = s("./src/reddit/components/Flatlist/index.tsx"),
				tt = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				st = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				ot = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				rt = s("./src/reddit/components/ShareMenu/index.tsx"),
				nt = s("./src/reddit/icons/fonts/Share/index.tsx"),
				it = s("./src/reddit/models/User/index.ts"),
				at = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				dt = s.n(at);
			const ct = "-MiniCardModMenu",
				lt = "-MiniCardOverflowMenu",
				mt = "-MiniCardShareMenu",
				pt = V.a.wrapped(Ye.a, "HorizontalVotes", dt.a),
				ut = V.a.button("ShareButton", dt.a),
				bt = Object(p.t)({
					currentProfileName: p.h,
					isCommentPermalink: p.v,
					isCommentsPage: p.w,
					isProfilePostListing: p.I,
					pageLayer: e => e
				}),
				ht = Object(d.c)({
					layout: p.O,
					subreddit: p.q
				});
			var ft = bt(Object(a.b)(ht, {})(Object(U.c)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: o,
						handleVote: r,
						hasModFlairPerms: n,
						hasModFullPerms: a,
						hasModPostPerms: d,
						isCommentsPage: c,
						isCommentPermalink: l,
						isOverlay: m,
						isProfilePostListing: p,
						isSticky: u,
						layout: b,
						modModeEnabled: h,
						onCommentsClick: f,
						post: g,
						sendEvent: x,
						showEditFlair: v,
						showEditPost: P,
						subreddit: y
					} = e, O = e => x(Object(Ee.g)(g.id, e)), C = g.postId, j = Object(et.d)(ct, g.id, m, u), I = !!o && Object(it.e)(o) === g.author;
					return i.a.createElement("div", {
						className: Object(M.a)(dt.a.flatlistContainer, s)
					}, i.a.createElement(pt, {
						compact: !1,
						model: g,
						onVoteClick: r,
						scoreClassName: dt.a.score
					}), i.a.createElement($e.a, {
						hasModPostPerms: d,
						isCommentsPage: c,
						isCommentPermalink: l,
						isOverlay: m,
						postId: g.id,
						modModeEnabled: h,
						numComments: g.numComments,
						type: ue.g.Compact,
						onClick: f
					}), i.a.createElement(rt.a, {
						className: dt.a.shareMenu,
						dropdownId: Object(et.d)(mt, g.id, m, u),
						permalink: g.permalink,
						post: g,
						sendEventWithName: O,
						subreddit: y
					}, i.a.createElement(ut, null, i.a.createElement(nt.a, {
						className: dt.a.shareIcon
					}), i.a.createElement("span", {
						className: dt.a.shareText
					}, Qe.fbt._("share", null, {
						hk: "mmJV5"
					})))), d && i.a.createElement(tt.a, {
						dropdownId: j,
						onClick: () => O("post_mod_action_menu")
					}, i.a.createElement(et.b, {
						className: dt.a.modActionsIcon
					}), i.a.createElement(st.a, {
						canEditFlair: n && !!v,
						hasModPostPerms: d,
						hasModFullPerms: a,
						isOverlay: !!m,
						isPostAuthor: I,
						modModeEnabled: h,
						post: g,
						tooltipId: j
					})), i.a.createElement(ot.g, {
						currentProfileName: t,
						isCommentsPage: c,
						isOverlay: !!m,
						isProfilePostListing: p,
						layout: b,
						pageLayer: e.pageLayer,
						permalink: g.permalink,
						postId: C,
						dropdownId: Object(et.d)(lt, g.id, m, u),
						isFixed: u,
						sendEvent: x,
						showEditPost: !!P,
						showEditFlair: !!v,
						useFlatlistBreakpoints: Object(ot.h)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1
						})
					}))
				}))),
				gt = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				xt = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				vt = s("./src/reddit/components/MiniCardPost/index.m.less"),
				Pt = s.n(vt);
			var yt = Object(p.t)()(Object(me.b)(Object(Ge.a)(Object(Be.a)(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: o,
						crosspostRoot: r,
						crosspostSubredditOrProfile: n,
						currentUser: a,
						eventFactory: d,
						flairStyleTemplate: c,
						forceLoadMedia: l,
						hideNSFWPref: m,
						moderatorPermissions: p,
						modModeEnabled: u,
						onClickPost: b,
						post: h,
						scrollerItemRef: f,
						shouldPause: g,
						showMetaLine: x = !0,
						showEditFlair: v,
						subredditOrProfile: P,
						userIsOp: y
					} = e, {
						media: O
					} = r || h, C = O && O.type, j = Object(Ue.b)(h.id), I = C === Ze.o.RTJSON, w = y && I, E = Object(Xe.a)(p), S = Object(ze.a)(p), L = Object(Je.a)(p), k = O && C !== Ze.o.RTJSON && C !== Ze.o.TEXT, N = !O && !!h.source && Object(Ve.a)(h.source.url), T = O && i.a.createElement(He.a, {
						autoplayPref: t,
						availableWidth: s,
						className: Pt.a.media,
						imageBoxClassName: Pt.a.mediaImageBox,
						imageBoxContentImageClassName: Pt.a.mediaImageBoxContentImage,
						forceAspectRatio: Ze.c,
						isListing: !0,
						isMiniCard: !0,
						isNotCardView: !0,
						post: r || h,
						scrollerItemRef: f,
						shouldPause: g,
						shouldLoad: l,
						showCentered: !0,
						showFull: !1
					});
					return i.a.createElement(We.a, {
						className: Object(M.a)(Pt.a.postContainer, he.a.largeAndMediumActiveStyles, he.a.largeAndMediumPostStyles, Object(X.a)(e), o),
						style: {
							...Object(X.b)(e.flairStyleTemplate),
							...Object(X.d)(e)
						},
						post: h,
						onClick: b,
						eventFactory: d
					}, i.a.createElement(De.a, {
						className: Pt.a.backgroundWrapper,
						flairStyleTemplate: c
					}, k && T, i.a.createElement("div", {
						className: Pt.a.innerContainer
					}, N && i.a.createElement(xt.a, {
						post: h,
						templatePlaceholderImage: c ? c.postPlaceholderImage : void 0
					}), i.a.createElement(qe.c, {
						className: Pt.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: h,
						size: qe.b.Large,
						titleColor: c && c.postTitleColor
					}), x && P && i.a.createElement(gt.a, {
						className: Pt.a.metaLine,
						crosspostSubredditOrProfile: n,
						hideNSFWPref: m,
						post: h,
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
						hasModPostPerms: E,
						modModeEnabled: u,
						post: h,
						showEditFlair: v,
						showEditPost: w
					}))), e.activeModalId === j && i.a.createElement(Ue.a, {
						flairs: h.flair,
						subredditId: h.belongsTo.id,
						modalId: j,
						onFlairChanged: e.onFlairChanged
					}), i.a.createElement(Ke.d, null))
				})))),
				Ot = s("./src/reddit/helpers/getClickInfo.ts"),
				Ct = s("./src/reddit/helpers/localStorage/index.ts"),
				jt = s("./src/reddit/selectors/user.ts"),
				It = s("./src/reddit/icons/svgs/Pin/index.tsx"),
				wt = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less"),
				Et = s.n(wt);
			const {
				fbt: St
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Lt = e => i.a.createElement("div", {
					className: Object(M.a)(Et.a.container, e.className)
				}, i.a.createElement(It.a, {
					className: Et.a.pin
				}), i.a.createElement("div", {
					className: Et.a.title
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
				arePinnedPostsLoaded: Z.a,
				currentUser: jt.i,
				pinnedPostIds: Z.N
			}), Ht = Object(a.b)(Kt, e => ({
				openPost: t => e(Object(Ae.I)(t))
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
						Object(Ct.Ab)(), this.setState({
							showEducation: !1
						})
					}, this.onClickPost = (e, t) => {
						this.props.openPost({
							postOrComment: t,
							clickInfo: Object(Ot.a)(e)
						})
					}, this.renderPost = e => i.a.createElement(yt, {
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
						showEducation: !Object(Ct.F)()
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
					const o = !!this.props.currentUser && this.props.profileName === Object(it.e)(this.props.currentUser),
						r = t.length > 0,
						n = !r && this.state.showEducation && o;
					if (!r && !n) return null;
					const a = o && this.props.pinnedPostIds.length % 2 != 0;
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
			var Wt = Object(p.t)()(Ht(Dt)),
				Ut = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				qt = s("./src/reddit/helpers/trackers/screenview.ts"),
				Gt = s("./src/reddit/layout/page/Listing/index.tsx"),
				zt = s("./src/reddit/models/ContentGate.ts"),
				Jt = s("./src/reddit/pages/ErrorPages/index.tsx");

			function Xt() {
				return (Xt = Object.assign || function(e) {
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
				Qt = Object(p.t)(),
				$t = Object(d.a)(p.B, jt.cb, Zt, p.O, (e, {
					match: t
				}) => t.params.profileName, (e, {
					match: t
				}) => t.params.sort, (e, {
					match: t
				}) => Object(se.j)(e, {
					profileName: t.params.profileName
				}), (e, t) => Object(h.a)(e, Zt(0, t)), (e, {
					match: t
				}) => !Object(Z.m)(e, {
					profileName: t.params.profileName
				}), jt.J, (e, {
					match: t
				}) => Object(jt.e)(e, u.ac + t.params.profileName), (e, t, s, o, r, n, i, {
					sort: a,
					t: d
				}, c, l, p) => {
					const b = o === ue.g.Compact ? u.ob : u.pb,
						h = Object(m.a)(r, b, a, s),
						{
							sort: f
						} = s;
					return {
						contentGateInfo: p,
						over18Prefs: t,
						isLoggedIn: l,
						isOwnProfile: e,
						isProfileNSFW: !!i && i.isNSFW,
						layout: o,
						listingKey: h,
						profileName: r,
						shouldShowPinnedPostsSection: c && !f,
						sort: a,
						timeSort: d
					}
				}),
				Yt = Object(a.b)($t, (e, t) => ({
					onLoadMoreChronoItems: () => e((() => async (e, t, {
						apiContext: s
					}) => {
						const o = t(),
							{
								currentPage: r
							} = o.platform;
						if (!r || !r.routeMatch) return;
						const {
							queryParams: n,
							params: i
						} = r.routeMatch.match, {
							sort: a,
							t: d
						} = Object(h.a)(o, n), {
							profileName: c
						} = i, l = Object(m.a)(c, u.ob, a, n), p = Object(O.d)(o, {
							listingKey: l
						});
						if (!p) return;
						const b = Object(O.b)(o, {
								listingKey: l
							}),
							f = Object(O.c)(o, {
								listingKey: l
							}),
							g = f && f[p.token];
						if (b || g) return;
						e(w({
							key: l,
							fetchedToken: p.token
						}));
						const v = await Object(j.a)(s(), c, {
							after: p.token,
							dist: p.dist,
							sort: a,
							t: d,
							...P()(n, C.l)
						});
						if (v.ok) {
							const t = Object(O.f)(o, {
									listingKey: l
								}),
								s = {
									...v.body,
									overviewIds: x()(v.body.overviewIds, t)
								};
							e(E({
								fetchedToken: p.token,
								key: l,
								meta: o.meta,
								...s
							}))
						} else e(S({
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
					onLayoutChange: () => e(Object(b.profileOverviewRequested)({
						...t.match,
						queryParams: r()([...Object(c.a)(t.location.search)])
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
						isOwnProfile: o,
						isProfileNSFW: r,
						listingKey: n,
						onLayoutChange: a,
						pageLayer: d,
						profileName: c,
						sort: m,
						shouldShowPinnedPostsSection: p,
						timeSort: b
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
					const h = c.toLowerCase(),
						f = `/user/${c}/`,
						g = {
							listingKey: n,
							listingName: h
						};
					if (!s && r && !o) return i.a.createElement(L.default, {
						subredditName: c,
						contentGateType: zt.a.Nsfw
					});
					const x = {
							inSubredditOrProfile: !Object(l.a)(c),
							listingKey: n,
							listingName: h,
							listingViewed: (e, t) => Object(qt.q)(n, m, t, e, b),
							noPostsComponent: this.renderNoPosts,
							onTryAgain: a
						},
						v = {
							sort: m,
							baseUrl: f,
							sortOptions: u.ub,
							timeSort: b
						};
					let P;
					return P = t === ue.g.Compact ? i.a.createElement(D, Xt({}, x, {
						onLoadMore: this.props.onLoadMoreChronoItems,
						onTryAgain: a
					})) : i.a.createElement(i.a.Fragment, null, p && i.a.createElement(Wt, {
						profileName: c
					}), i.a.createElement(N.a, v), i.a.createElement(Me, Xt({}, x, {
						excludePinnedPosts: p,
						onLoadMore: this.props.onLoadMoreConversationsItems
					}))), i.a.createElement(Gt.a, {
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
			t.default = Qt(Yt(es))
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const n = e => {
				const t = Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: o.rb
				});
				return !(!t || Object(o.Hd)(t))
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
				return h
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "g", (function() {
				return v
			})), s.d(t, "d", (function() {
				return P
			}));
			var o = s("./src/reddit/featureFlags/index.ts"),
				r = s("./src/reddit/selectors/posts.ts"),
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
					const o = Object(n.X)(e, {
						subredditName: s.name
					});
					return o && o.postIds && o.postIds.length ? o.postIds : l
				},
				p = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(n.T)(e, {
						subredditId: s
					}) : null
				},
				u = (e, t, s, o, n) => {
					const i = n.find(e => e <= t) || -1,
						a = n.find(e => e > t) || 1 / 0;
					return t !== a && t !== i && (!(i + s > t) && (!(t + s > a) && !((e, t, s) => {
						const o = s[t - 1],
							n = s[t],
							i = n && Object(r.F)(e, {
								postId: o
							}) || null,
							a = n && Object(r.F)(e, {
								postId: n
							}) || null;
						return i && i.isSponsored || a && a.isSponsored
					})(e, t, o)))
				},
				b = [3],
				h = (e, t, {
					listingKey: s
				}) => {
					const o = t.slice().sort();
					let n = -1;
					const i = Object(r.y)(e, {
							listingKey: s
						}),
						a = [];
					return b.forEach(t => {
						let s = n + t;
						if (!(s >= i.length)) {
							for (; s < i.length && !u(e, s, t, i, o);) s += 1;
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
				v = e => e.focusedVerticals.lastLoadedEnv,
				P = e => {
					const t = Object(i.I)(e),
						s = o.d.geoSubredditRecommendationDULoggedIn(e),
						r = o.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && r
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
				return b
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "c", (function() {
				return f
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/models/Flair/index.ts"),
				n = s("./src/reddit/models/PostCreationForm/index.ts");
			r.f.Text, r.f.Spoiler, r.f.Text, r.f.Spoiler, n.h.RICH_TEXT, r.f.Text, r.f.Spoiler, n.h.RICH_TEXT, r.f.Text, r.f.Spoiler, n.h.RICH_TEXT;
			var i = s("./src/reddit/helpers/isComment.ts");
			const a = Object(o.a)((e, {
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
				d = Object(o.a)((e, {
					listingKey: t
				}) => {
					const s = e.pages.profileOverview.chrono.ids[t];
					return s ? [...s] : []
				}),
				c = Object(o.a)((e, {
					listingKey: t
				}) => {
					return a(e, {
						listingKey: t
					}).reduce((t, s) => {
						const o = Object(i.a)(s) ? e.features.comments.models[s].postId : s;
						return t[s] = o, t
					}, {})
				}),
				l = (Object(o.a)((e, {
					listingKey: t
				}) => {
					const s = e.posts.models;
					return l(e, {
						listingKey: t
					}).filter(e => {
						const t = s[e];
						return t && !t.hidden
					})
				}), Object(o.a)((e, {
					listingKey: t
				}) => {
					return a(e, {
						listingKey: t
					}).map(t => Object(i.a)(t) ? e.features.comments.models[t].postId : t)
				})),
				m = Object(o.a)((e, {
					listingKey: t
				}) => {
					const s = e.posts.models,
						o = l(e, {
							listingKey: t
						}),
						r = {};
					return o.forEach(e => r[e] = s[e]), r
				}),
				p = Object(o.a)((e, {
					listingKey: t
				}) => {
					const s = e.features.comments.models,
						o = a(e, {
							listingKey: t
						}),
						r = {};
					return o.forEach(e => !!Object(i.a)(e) && (r[e] = s[e])), r
				}),
				u = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.api.error[t],
				b = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.api.pending[t],
				h = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.loadMore[t],
				f = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.fetchedTokens[t]
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileOverview.8b1ec1c39a39c806e9d4.js.map