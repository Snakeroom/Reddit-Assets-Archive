// https://www.redditstatic.com/desktop2x/ProfileOverview.d02903e2fc2ca317a81f.js
// Retrieved at 8/18/2021, 11:50:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileOverview"], {
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, s, o) {
				var r = s ? s.call(o, e, t) : void 0;
				if (void 0 !== r) return !!r;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var n = Object.keys(e),
					i = Object.keys(t);
				if (n.length !== i.length) return !1;
				for (var a = Object.prototype.hasOwnProperty.bind(t), d = 0; d < n.length; d++) {
					var c = n[d];
					if (!a(c)) return !1;
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
				return P
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "b", (function() {
				return E
			}));
			var o, r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/performanceTimings/index.tsx"),
				i = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
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
				x = Object(r.a)(i.h),
				g = Object(r.a)(i.c),
				P = Object(r.a)(i.f),
				y = Object(r.a)(i.j),
				v = Object(r.a)(i.i),
				O = () => async (e, t, {
					gqlContext: s
				}) => {
					const r = t(),
						n = Object(p.e)(r),
						i = Object(p.d)(r),
						c = Object(b.I)(r);
					if (n || !i) return;
					e(x());
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
									e(g({
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
					} catch (P) {
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
				}, E = () => async (e, t, s) => {
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
					if ("server" === a) return e(P({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/pages/profileOverview/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileOverviewConversationsPending", (function() {
				return ye
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
				x = s("./src/lib/makeActionCreator/index.ts"),
				g = s("./src/reddit/actions/changeUsername.ts"),
				P = s("./src/reddit/actions/contentGate.ts"),
				y = s("./src/reddit/actions/externalAccount.ts"),
				v = s("./src/reddit/actions/gold/powerups.ts"),
				O = s("./src/reddit/actions/pinnedPost.ts"),
				C = s("./src/reddit/actions/platform.ts"),
				j = s("./src/reddit/actions/profile/index.ts"),
				I = s("./src/reddit/actions/trophyCase.ts"),
				E = s("./src/reddit/constants/errors.ts"),
				w = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				S = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				k = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				L = s("./src/lib/initializeClient/installReducer.ts"),
				N = s("./node_modules/redux/es/redux.js"),
				T = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const _ = {};
			var M = (e = _, t) => {
				switch (t.type) {
					case k.c:
					case k.b:
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
					case k.a:
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
						case k.c:
						case T.c: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case k.b:
						case k.a:
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
					error: M,
					pending: R
				});
			const V = {};
			var B = (e = V, t) => {
				switch (t.type) {
					case k.b: {
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
			var D = (e = K, t) => {
					switch (t.type) {
						case k.b:
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
				W = s("./src/lib/omitKey/index.ts");
			const H = {};
			var U = (e = H, t) => {
					switch (t.type) {
						case k.b:
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
							} : Object(W.a)(e, s)
						}
						default:
							return e
					}
				},
				G = Object(N.c)({
					api: A,
					fetchedTokens: B,
					ids: D,
					loadMore: U
				});
			const q = {};
			var z = (e = q, t) => {
				switch (t.type) {
					case k.f:
					case k.e: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case k.d: {
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
			var Q = (e = J, t) => {
					switch (t.type) {
						case k.f: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case k.e:
						case k.d: {
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
				X = Object(N.c)({
					error: z,
					pending: Q
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
				se = Object(N.c)({
					error: Y,
					pending: te
				});
			const oe = {};
			var re = (e = oe, t) => {
					switch (t.type) {
						case k.e:
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
					case k.e:
					case Z.e: {
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
					case Z.b: {
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
							x = {
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
							[l]: x
						}
					}
					default:
						return e
				}
			};
			const be = {};
			var he = (e = be, t) => {
				switch (t.type) {
					case k.e:
					case Z.e: {
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
			var xe = (e = fe, t) => {
					switch (t.type) {
						case k.e:
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
				ge = Object(N.c)({
					api: X,
					extraComments: ne,
					keyToCommentThreadLinkSets: ue,
					keyToHeadCommentId: he,
					keyToPostId: xe
				}),
				Pe = Object(N.c)({
					chrono: G,
					conversations: ge
				});
			Object(L.a)({
				pages: {
					profileOverview: Pe
				}
			});
			const ye = Object(x.a)(k.f),
				ve = Object(x.a)(k.e),
				Oe = Object(x.a)(k.d),
				Ce = Object(x.a)(k.c),
				je = Object(x.a)(k.b),
				Ie = Object(x.a)(k.a),
				Ee = (e, t, s, o) => async (o, r, n) => {
					const i = r(),
						a = !!i.listings.postOrder.ids[e],
						c = !!Object(u.c)(i, {
							listingKey: e
						});
					if (!!Object(u.d)(i, {
							listingKey: e
						}) || a && !c) return;
					o(ye({
						key: e
					}));
					const l = await Object(S.a)("profile", () => Object(d.b)(n.apiContext(), t, s)),
						m = l.body,
						{
							pinned: p,
							postIds: h
						} = m;
					if (l.ok) {
						o(ve({
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
					})), l.body.reason === E.a.DeletedProfile && o(Object(P.p)({
						profileName: t
					})), o(Object(C.m)(l.status))
				}, we = (e, t, s, o) => async (o, r, n) => {
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
					})), l.body.reason === E.a.DeletedProfile && o(Object(P.p)({
						profileName: t
					})), o(Object(C.m)(l.status))
				}, Se = e => async (t, s, o) => {
					const {
						queryParams: d,
						params: u
					} = e, {
						sort: h,
						t: x
					} = Object(i.a)(s(), d), {
						profileName: P
					} = u;
					let O = !1;
					const E = l.e[Object(p.Q)(s(), {})],
						S = P.toLowerCase(),
						k = {
							...r()(e.queryParams, m.l),
							sort: h,
							layout: E,
							t: x
						},
						L = [t(j.d(S))];
					if (E === l.e[l.g.Compact]) {
						const o = Object(w.a)(S, c.rb, h, e.queryParams);
						s().pages.profileOverview.chrono.ids[o] ? O = !0 : L.push(t(we(o, S, k, !0)))
					} else {
						const o = Object(w.a)(S, c.sb, h, e.queryParams);
						s().listings.postOrder.ids[o] && !s().listings.postOrder.api.error[o] ? O = !0 : L.push(t(Ee(o, S, k, !0)))
					}
					if (L.push(t(Object(n.b)())), await Promise.all(L), O) return;
					const N = s();
					if (!N.platform.currentPage) return;
					if (200 !== N.platform.currentPage.status) return;
					const T = Object(b.m)(s(), S),
						_ = Object(f.nb)(N, {
							userName: P
						}).id;
					t(C.l({
						title: ke(s(), P)
					})), Object(f.L)(N) && Object(f.O)(N, P) && t(Object(g.f)());
					const M = [t(Object(a.q)()), t(I.b(S, T)), t(j.b(S)), t(y.o(P)), t(j.g(P)), t(v.k(P, _))];
					await Promise.all(M)
				}, ke = (e, t) => Object(b.q)(e, {
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
				n = s.n(r),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				a = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				d = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				c = s.n(d);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = ({
				post: e
			}) => {
				const t = e.predictionTournament,
					s = t.status === a.a.Live,
					r = t.status === a.a.Closed;
				return n.a.createElement("div", {
					className: c.a.container
				}, n.a.createElement("h3", {
					className: c.a.title
				}, t.name), n.a.createElement("div", {
					className: c.a.label
				}, l._("Predictions Tournament", null, {
					hk: "sZ4UO"
				}), s && n.a.createElement("span", {
					className: Object(o.a)(c.a.badge, c.a.live)
				}, l._("Live", null, {
					hk: "1G2P1W"
				})), r && n.a.createElement("span", {
					className: Object(o.a)(c.a.badge, c.a.ended)
				}, l._("Ended", null, {
					hk: "4s3hco"
				}))), n.a.createElement(i.a, {
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
				i = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				c = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				l = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				m = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				p = s("./src/reddit/actions/inFeedChaining.ts"),
				u = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/actions/tooltip.ts"),
				h = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				f = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				x = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				g = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				P = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Post/index.ts"),
				v = s("./src/reddit/models/Vote/index.ts"),
				O = s("./src/reddit/selectors/activeModalId.ts"),
				C = s("./src/reddit/selectors/experiments/econ/index.ts"),
				j = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				I = s("./src/reddit/selectors/inFeedChaining.ts"),
				E = s("./src/reddit/selectors/moderatorPermissions.ts"),
				w = s("./src/reddit/selectors/posts.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				k = s("./src/lib/ads/index.ts"),
				L = s("./src/lib/classNames/index.ts"),
				N = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				T = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				_ = s("./src/reddit/components/AwardBadges/index.tsx"),
				M = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				F = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				R = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				A = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				V = s("./src/reddit/components/Flatlist/index.tsx"),
				B = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				K = s("./src/reddit/components/ModModeReports/index.tsx"),
				D = s("./src/reddit/components/ModModeReports/helpers.ts"),
				W = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				H = s("./src/reddit/components/PostContainer/index.tsx"),
				U = s("./src/reddit/components/PostLeftRail/index.tsx"),
				G = s("./src/reddit/components/PostMedia/index.tsx"),
				q = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				z = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				J = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				Q = s.n(J);
			const {
				fbt: X
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Z = () => r.a.createElement("div", {
					className: Q.a.container
				}, r.a.createElement(z.a, {
					className: Q.a.pinnedIcon,
					isFilled: !0
				}), r.a.createElement("span", {
					className: Q.a.metaText
				}, X._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				$ = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				Y = s("./src/reddit/components/PostTitle/index.tsx"),
				ee = s("./src/reddit/components/PostTopLine/index.tsx"),
				te = s("./src/reddit/components/SourceLink/index.tsx"),
				se = s("./src/reddit/contexts/InsideOverlay.tsx"),
				oe = s("./src/reddit/contexts/PageLayer/index.tsx"),
				re = s("./src/reddit/contexts/Post/index.tsx"),
				ne = s("./src/reddit/helpers/isCrosspost.ts"),
				ie = s("./src/reddit/helpers/postEvent.ts"),
				ae = s("./src/reddit/constants/experiments.ts"),
				de = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ce = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const le = Object(a.a)(w.N, e => e.some(ce.c)),
				me = Object(a.a)(le, e => e),
				pe = (e, t) => Object(de.c)(e, {
					experimentName: ae.tb,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && me(e, {
							listingKey: s
						})
					}
				});
			var ue = s("./src/reddit/selectors/postFlair.ts"),
				be = s("./src/reddit/selectors/showPromotedCTA.ts"),
				he = s("./src/reddit/components/PostTopMeta/index.tsx"),
				fe = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				xe = s.n(fe),
				ge = s("./src/reddit/selectors/i18n/index.ts"),
				Pe = s("./src/reddit/components/LargePost/index.m.less"),
				ye = s.n(Pe);
			const ve = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(w.N)(e, {
						listingKey: s
					}) : void 0
				},
				Oe = Object(n.b)(() => Object(a.c)({
					autoplayPref: S.b,
					activeModalId: O.a,
					hideNSFWPref: S.B,
					flairStyleTemplate: oe.U,
					isCurrentUserProfilePost: w.l,
					isLoggedIn: S.J,
					isActive: w.j,
					isPostChainDismissed: I.c,
					isPostChained: I.d,
					showPromotedCTA: be.a,
					moderatorPermissions: E.k,
					modModeEnabled: oe.S,
					posts: ve,
					postHeightVariant: pe,
					shouldShowNsfwListingBelow: ge.b,
					showEditFlair: ue.a,
					showAwardsPlaque: j.a,
					isTournamentPost: (e, {
						post: t
					}) => Boolean(t.predictionTournament) && Object(C.t)(e)
				}), (e, {
					listingKey: t,
					listingName: s,
					postId: o
				}) => ({
					chainPost: () => {
						s && t && e(Object(p.d)({
							listingKey: t,
							listingName: s,
							postId: o
						}))
					},
					handleVote: t => {
						const s = t === v.a.upvoted ? Object(u.db)(o) : Object(u.w)(o);
						e(s)
					},
					onIgnoreReports: () => e(Object(u.Z)(o)),
					onOpenReportsDropdown: t => e(Object(b.h)({
						tooltipId: t
					}))
				})),
				Ce = r.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						chainPost: n,
						className: a,
						currentUser: p,
						eventFactory: u,
						flairStyleTemplate: b,
						forceLoadMedia: v,
						hideNSFWPref: O,
						hostPostData: C,
						imageGalleryCurrentItem: j,
						inSubredditOrProfile: I = !1,
						isCommentsPage: E,
						isCurrentUserProfilePost: w,
						isFrontpage: S,
						isGalleryTileLayoutDefault: z,
						isLoggedIn: J,
						isOverlay: Q,
						isPostChainDismissed: X,
						isPostChained: se,
						isTopicPage: oe,
						isTournamentPost: re,
						isCommentCountAnimationEnabled: de,
						isVoteCountAnimationEnabled: ce,
						isCountAnimShadowTestEnabled: le,
						listingIndex: me,
						listingKey: pe,
						listingName: ue,
						moderatorPermissions: be,
						modModeEnabled: fe,
						onClickPost: ge,
						onIgnoreReports: Pe,
						onOpenReportsDropdown: ve,
						post: Oe,
						postHeightVariant: Ce,
						scrollerItemRef: je,
						shouldShowGalleryTileOption: Ie,
						shouldShowNsfwListingBelow: Ee,
						showAwardsPlaque: we,
						showEditFlair: Se,
						subredditOrProfile: ke,
						userIsOp: Le,
						postId: Ne,
						postIds: Te,
						onceInViewport: _e,
						showPromotedCTA: Me
					} = e, Fe = !!e.redditStyle || !!e["data-redditstyle"], Re = Fe ? void 0 : b, Ae = Object(l.a)(be), Ve = fe && Ae, Be = Object(d.a)(be), Ke = Object(c.a)(be), De = Object(D.c)(Oe), We = !!Oe.media && Oe.media.type === P.o.RTJSON, He = Le && We, Ue = s ? s - U.a : void 0, Ge = !(S && J || oe), qe = (e => e === ae.ed.OnlyTitles)(Ce) && !Object(ne.a)(Oe), ze = (e => e === ae.ed.MediumHeight)(Ce) && !Object(ne.a)(Oe), Je = (e => {
						const {
							post: t,
							postIds: s,
							posts: o
						} = e;
						if (!Object(y.q)(t)) return;
						const r = s && 0 === s.indexOf(t.id),
							n = s && 1 === s.indexOf(t.id),
							i = o && o[1] && Object(y.q)(o[1]);
						return {
							hasTopCompactPostStyles: r && i,
							hasBottomCompactPostStyles: n,
							showPinnnedHeader: r
						}
					})(e), Qe = !!(null == C ? void 0 : C.shouldShowLinkedPosts), Xe = (!I || Qe || Ee) && !Oe.isSponsored, Ze = Object(k.t)(Oe, j), {
						source: $e
					} = Ze, Ye = Object(o.useRef)(null), et = Object(o.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == _e || _e(me))
						})
					}, [_e, me]);
					Object(g.a)(Ye, et);
					const tt = r.a.createElement(H.a, {
						className: Object(L.a)(ye.a.container, a, xe.a.largeAndMediumPostStyles, xe.a.largeAndMediumActiveStyles, Object(m.a)(e), {
							[xe.a.mUseRedditTheme]: Fe,
							promotedvideolink: Oe.isSponsored && !(Oe.media && P.a.has(Oe.media.type)),
							[ye.a.topCompactPost]: Je && Je.hasTopCompactPostStyles,
							[ye.a.bottomCompactPost]: Je && Je.hasBottomCompactPostStyles
						}),
						isOverlay: Q,
						style: Object(m.b)(e.flairStyleTemplate),
						post: Oe,
						onClick: ge,
						onPostContentClick: n,
						eventFactory: u
					}, r.a.createElement("div", {
						ref: Ye
					}), r.a.createElement($.a, {
						model: Oe,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: le,
						isVoteCountAnimation: ce,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: Re,
						redditStyle: Fe,
						postId: Ne
					}), r.a.createElement(W.a, {
						className: Object(L.a)(ye.a.backgroundWrapper, {
							[ye.a.isEvent]: Object(ie.a)(Oe)
						}),
						"data-click-id": "background",
						flairStyleTemplate: Re,
						post: Oe,
						redditStyle: Fe
					}, r.a.createElement(A.a, {
						post: Oe
					}), Je && Je.showPinnnedHeader && r.a.createElement(Z, null), re && Object(i.c)(Oe) && r.a.createElement(r.a.Fragment, null, r.a.createElement(f.a, {
						post: Oe
					}), r.a.createElement(h.a, {
						post: Oe
					})), !re && r.a.createElement(r.a.Fragment, null, r.a.createElement(ee.a, {
						className: ye.a.postTopLine,
						hideAwards: we,
						hideNSFWPref: O,
						hostPostData: C,
						iconClassName: ye.a.postTopLineIcon,
						inSubredditOrProfile: I,
						isCommentsPage: !!E,
						isCompactPinnedPost: !!Je,
						isCurrentUserProfilePost: w,
						isOverlay: !!Q,
						isTopicPage: !!oe,
						listingKey: pe,
						post: Oe,
						shouldShowSubscribeButton: Ge,
						showSubreddit: Xe,
						showSubredditIcon: !0,
						subredditOrProfile: ke
					}), r.a.createElement(Y.c, {
						className: ye.a.postTitle,
						post: Oe,
						redditStyle: Fe,
						size: Y.b.Large,
						titleColor: Re && Re.postTitleColor,
						isOverlay: Q
					}), Oe.source && !Oe.isSponsored && !(Oe.media && Object(P.G)(Oe.media)) && r.a.createElement(te.a, {
						className: ye.a.sourceLink,
						post: Oe
					})), r.a.createElement("div", {
						className: ye.a.postMediaWrapper
					}, !Je && r.a.createElement(G.a, {
						isGalleryTileLayoutDefault: z,
						isListing: !0,
						isMediumHeight: ze,
						isNotCardView: !!Q,
						isTitleOnly: qe,
						showCentered: !0,
						flairStyleTemplate: Re,
						post: Oe,
						availableWidth: Ue,
						shouldLoad: v,
						scrollerItemRef: je,
						autoplayPref: t,
						shouldShowGalleryTileOption: Ie
					})), Me && $e && $e.url && r.a.createElement(N.a, {
						className: ye.a.adLinkWrapper
					}, r.a.createElement(T.a, {
						post: Oe,
						adLinkContent: Ze
					})), fe && Ae && De && r.a.createElement(K.a, {
						onIgnoreReports: Pe,
						reportable: Oe
					}), r.a.createElement(B.d, null), we && r.a.createElement(_.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !1,
						thing: Oe,
						tooltipType: Q ? he.c.Lightbox : void 0
					}), r.a.createElement("div", {
						className: ye.a.flatListContainer
					}, r.a.createElement(F.a, {
						className: ye.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Re,
						model: Oe,
						onVoteClick: e.handleVote
					}), r.a.createElement(V.c, {
						currentUser: p,
						hasModFlairPerms: Be,
						hasModFullPerms: Ke,
						hasModPostPerms: Ae,
						hostPostData: C,
						isCommentCountAnimation: de,
						isCountAnimShadowTestEnabled: le,
						isLargePost: !0,
						isOverlay: !!Q,
						listingKey: pe,
						modModeEnabled: fe,
						onIgnoreReports: Pe,
						onOpenReportsDropdown: ve,
						post: Oe,
						showEditPost: He,
						showEditFlair: Se,
						useFlatlistBreakpoints: Object(q.b)({
							editPost: !1,
							save: !Ve,
							hide: !1,
							report: !1
						})
					}))), S && r.a.createElement(M.a, {
						post: Oe,
						postIds: null != Te ? Te : [],
						subredditId: null == ke ? void 0 : ke.id
					}));
					return r.a.createElement(x.b, null, tt, se && !X && r.a.createElement(R.a, {
						className: ye.a.chain,
						listingKey: pe,
						listingName: ue,
						postId: Oe.id
					}))
				});
			Ce.displayName = "LargePostMemoized";
			t.default = Object(re.b)(Oe(Object(se.b)(Ce)))
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
				m = s("./src/reddit/icons/fonts/index.tsx"),
				p = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				u = s.n(p);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: r,
					post: p,
					subredditOrProfile: b
				} = e;
				return n.a.createElement("div", {
					className: Object(i.a)(u.a.container, t)
				}, n.a.createElement(c.a, {
					className: u.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: b.url
				}, n.a.createElement(d.b, {
					className: u.a.subredditIcon,
					shouldHideNsfwIcon: r,
					subredditOrProfile: b
				}), n.a.createElement("span", null, b.displayText)), ((e, t) => {
					if (t) return n.a.createElement("div", {
						role: "img",
						"aria-label": o.fbt._("Crossposted by{author}from{community}", [o.fbt._param("author", Object(l.d)(e)), o.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, n.a.createElement(m.a, {
						name: "crosspost",
						className: u.a.CrosspostIcon
					}))
				})(p.author, s), b && b.isQuarantined && n.a.createElement(a.a, null))
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
				i = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
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
						tooltipText: m,
						className: p
					} = e;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
					className: Object(n.a)(l.a.notificationButton, p),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: o
				}, r.a.createElement(d.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": m
				})), c && r.a.createElement(i.a, {
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
				return Y
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
				p = s("./node_modules/shallowequal/index.js"),
				u = s.n(p),
				b = s("./src/lib/addQueryParams/index.ts"),
				h = s("./src/lib/ads/index.ts"),
				f = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/constants/index.ts"),
				g = s("./src/lib/fastdom/index.ts"),
				P = s("./src/lib/lessComponent.tsx"),
				y = s("./src/lib/opener/index.ts"),
				v = s("./src/lib/sentry/index.ts"),
				O = s("./src/reddit/components/PostList/LoadMore.tsx"),
				C = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				j = s("./src/reddit/components/Scroller/Simple.tsx"),
				I = s("./src/reddit/constants/adEvents.ts"),
				E = s("./src/reddit/constants/componentSizes.ts"),
				w = s("./src/reddit/constants/postLayout.ts"),
				S = s("./src/reddit/controls/InternalLink/index.tsx"),
				k = s("./src/reddit/controls/OutboundLink/index.tsx"),
				L = s("./src/reddit/helpers/getClickInfo.ts"),
				N = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				T = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				_ = s("./src/reddit/models/Media/index.ts"),
				M = s("./src/reddit/helpers/brandSafety/index.ts"),
				F = s("./src/reddit/helpers/trackers/ads.ts"),
				R = s("./src/lib/LRUCache/index.ts"),
				A = s("./src/telemetry/index.ts"),
				V = s("./src/telemetry/models/Timer.ts"),
				B = s("./src/reddit/components/PostList/index.m.less"),
				K = s.n(B);
			const {
				fbt: D
			} = s("./node_modules/fbt/lib/FbtPublic.js"), W = 500, H = new R.a(W), U = new R.a(W), G = new R.a(W), q = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5,
				SEARCH: 3
			}, z = P.a.div("SeeMore", K.a), J = P.a.wrapped(T.a, "ArrowRight", K.a), Q = (e, t, s, o, r, n, i, a, d) => {
				const c = `entered-${e}-${t}-${s?`last-${o}-${r}`:""}-${n}`;
				let l = H.get(c);
				return void 0 === l && (l = () => {
					s && i.onBottomViewed(o, r), i.trackOnPostEnteredViewport(e, t, a, d)
				}, H.set(c, l)), l
			}, X = (e, t, s, o, r) => {
				const n = `left-${e}-${t}`;
				let i = U.get(n);
				return void 0 === i && (i = n => {
					s.trackOnPostExitedViewport(e, t, n, o, r)
				}, U.set(n, i)), i
			}, Z = (e, t, s = !1) => {
				const o = `click-${e}`;
				let r = G.get(o);
				return void 0 === r && (r = (e, o, r, n, i) => {
					if (o.isSponsored) {
						t.fireAdPixelsOfType(o, I.a.Click);
						const {
							source: e
						} = Object(h.t)(o, n);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							r && (t = Object(k.a)(o.id, r, t).url), Object(F.a)(o, i), Object(y.d)(t, y.c.BLANK)
						}
					} else t.openPost({
						postOrComment: o,
						clickInfo: Object(L.a)(e),
						isFrontpage: s
					})
				}, G.set(o, r)), r
			}, $ = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class Y extends m.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new R.a(W), this.surveyTriggerCounted = !1, this.timerId = void 0, this.viewportHeight = null, this.updateScrollerRef = e => {
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
						this.props.adBrandSafetyStatusReceived(Object(M.a)(n, i))
					}, x.d, {
						leading: !0
					}), this.eventFactoryHandler = (e, t, s) => this.props.postClickEventFactory(e, t, s, this.props)
				}
				UNSAFE_componentWillMount() {
					void 0 !== this.timerId && A.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = A.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, void 0 !== this.timerId) {
						const e = A.c.end(this.timerId);
						setTimeout(() => Object(A.b)(x.l.Redesign, {
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
					if (g.a.read(() => this.checkAndSendScreenview()), this.timerId && A.c.has(this.timerId)) {
						const e = A.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(A.b)(x.l.Redesign, {
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
					if (!this.shouldSendScreenview()) return;
					const o = A.c.end(e);
					setTimeout(() => {
						s(t(o, V.TimerType.InApp))
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
					if (d.some(e => {
							let t = !1;
							return t = "function" == typeof o[e] || "object" == typeof o[e] ? !u()(o[e], i[e]) : o[e] !== i[e]
						})) return !0;
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
						hostPostData: n,
						isCommentPermalink: i,
						isCommentsPage: a,
						isFrontpage: d,
						isProfilePostListing: c,
						isTopicPage: l,
						isCommentCountAnimationEnabled: p,
						isVoteCountAnimationEnabled: u,
						isCountAnimShadowTestEnabled: b,
						listingBelowVariant: h,
						listingKey: f,
						listingName: g,
						pageLayer: P,
						pageReferrer: y,
						redditStyle: O,
						shouldHideFlair: C,
						triggerNewPostPill: j,
						postIds: I
					} = this.props, E = 0 === t, S = `post-${o}-${e}-${t}-${s?"last-index":""}-${g}-${f}-${y}`;
					let k;
					if (void 0 === (k = this.scrollChildCache.get(S))) {
						const {
							inSubredditOrProfile: L,
							postsById: T
						} = this.props, M = T[e], F = M.crosspostRootId && T[M.crosspostRootId] ? T[M.crosspostRootId] : M;
						M.crosspostRootId && !T[M.crosspostRootId] && v.c.withScope(e => {
							e.setExtra("errorType", x.r.API), e.setExtra("description", `Post ${M.id} is crosspost of ${M.crosspostRootId}, but ` + `${M.crosspostRootId} details are missing in the state`), v.c.captureMessage("Crosspost parent details are missing")
						});
						const R = this.props.postComponentForLayout({
							isCrosspost: !!M.crosspostRootId,
							isFirstPost: E,
							layout: o,
							post: F
						});
						let A = `post-list-item-[layout: ${o}]-[postId: ${e}]`;
						this.props.listingBelowVariant && f && (A += `--${f}`);
						const V = Q(e, o, s, f, g, y, this.props, t, this.props.hostPostData),
							B = X(e, o, this.props, t, P),
							K = Z(e, this.props, d),
							D = F.media && F.media.type === _.o.EMBED ? F.media.provider : null,
							W = p && !M.isSponsored,
							H = u && !M.isSponsored && !M.isScoreHidden;
						k = {
							estHeight: Object(N.c)(M, o),
							id: e,
							isFocusable: !(!F.media || !(o === w.g.Large || o === w.g.Classic && Object(_.G)(F.media))) && (_.d.has(F.media.type) && (!D || !_.s.has(D)) && !F.isSpoiler && !F.isNSFW),
							trackOnEnteredViewport: V,
							trackOnExitedViewport: B,
							render: ({
								className: o,
								height: p,
								width: u,
								remeasure: x,
								setScrollerChildRef: y,
								shouldLoadInitially: v
							}) => m.a.createElement(R, {
								className: o,
								currentProfileName: r,
								key: A,
								availableWidth: u,
								eventFactory: this.eventFactoryHandler,
								first: E,
								forceLoadMedia: v,
								hostPostData: n,
								inSubredditOrProfile: L,
								isCommentPermalink: i,
								isCommentsPage: a,
								isFrontpage: d,
								isProfilePostListing: c,
								isTopicPage: l,
								isCommentCountAnimationEnabled: W,
								isVoteCountAnimationEnabled: H,
								isCountAnimShadowTestEnabled: b,
								listingBelowVariant: h,
								listingIndex: t,
								listingKey: f,
								listingName: g,
								pageLayer: P,
								last: s,
								onClickPost: K,
								onSizeChanged: x,
								postId: e,
								postIds: I,
								redditStyle: O,
								sendEvent: this.props.sendEvent,
								scrollerItemRef: y,
								shouldHideFlair: C,
								onceInViewport: j
							})
						}, this.scrollChildCache.set(S, k)
					}
					return k
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
						className: K.a.placeholder
					}, m.a.createElement(i, {
						className: t,
						isLoading: !e,
						layout: o
					}), !!e && m.a.createElement(C.a, {
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
						className: K.a.placeholder
					}, m.a.createElement(O.a, {
						className: r,
						isLoading: !!t,
						layout: o,
						countOverride: q[o]
					}), !!e && m.a.createElement(C.a, {
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
						isSerpExperimentOverride: n,
						isTruncated: i,
						layout: a,
						location: d,
						loadMore: c,
						postIds: p,
						onLoadMore: u
					} = this.props;
					let h = p.map((e, t, s) => {
						const o = t === p.length - 1;
						return this.scrollChildForPost(e, t, o, a)
					});
					r && (h = $(h, r));
					const g = this.props.measureScrollFPS ? `post-listings-${a}` : void 0,
						P = d ? Object(o.e)(d) : null,
						y = P || i;
					return m.a.createElement(l.Fragment, null, m.a.createElement(j.b, {
						innerRef: this.updateScrollerRef,
						className: y ? K.a.truncatedPostList : Object(f.a)(K.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: c && c.token ? c.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: u,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: g,
						viewportTopPadding: E.f
					}, h), !n && P && m.a.createElement(z, {
						className: K.a.seeMoreButton
					}, m.a.createElement(S.a, {
						className: K.a.seeMorePostsText,
						to: Object(b.a)(P, {
							type: x.Wb.Posts
						})
					}, D._("See More Posts", null, {
						hk: "3o0CqI"
					}), m.a.createElement(J, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			Y.defaultProps = {
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
				x = s("./src/reddit/controls/OutboundLink/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				P = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				y = s("./src/reddit/models/Media/index.ts"),
				v = s("./src/reddit/models/Subreddit/index.ts"),
				O = s("./src/reddit/components/PostTopLine/index.m.less"),
				C = s.n(O);
			t.a = ({
				className: e,
				flairStyleTemplate: t,
				forceOpenInNewTab: s,
				hideAwards: r,
				hideNSFWPref: O,
				hostPostData: j,
				iconClassName: I,
				inSubredditOrProfile: E,
				isCommentsPage: w,
				isCompactPinnedPost: S,
				isCurrentUserProfilePost: k,
				isOverlay: L,
				isTopicPage: N,
				listingKey: T,
				post: _,
				shouldShowSubscribeButton: M,
				showCornerOutboundLink: F,
				showSubreddit: R,
				showSubredditIcon: A,
				subredditOrProfile: V,
				isFollowed: B,
				shouldShowFollowButton: K,
				onFollowPostClick: D
			}) => {
				const W = r || N;
				return n.a.createElement("div", {
					className: Object(i.a)(C.a.container, e)
				}, R && V && n.a.createElement("div", {
					className: C.a.subredditIconWrapper
				}, n.a.createElement(u.a, {
					"data-click-id": "subreddit",
					to: V.url
				}, A && n.a.createElement(p.b, {
					className: Object(i.a)(C.a.subredditIcon, I),
					shouldHideNsfwIcon: O,
					subredditOrProfile: V
				}))), n.a.createElement("div", {
					className: C.a.everythingElseWrapper
				}, R && n.a.createElement(d.h, {
					type: _.belongsTo.type,
					id: _.belongsTo.id
				}), n.a.createElement(m.d, {
					className: C.a.postTopMeta,
					forceOpenInNewTab: s,
					flairStyleTemplate: t,
					tooltipType: L ? m.c.Lightbox : void 0,
					post: _,
					showSub: R,
					subredditOrProfile: V
				}), n.a.createElement(l.a, {
					className: C.a.postBadges,
					displayText: V ? V.displayText : null,
					inSubredditOrProfile: E,
					isCompactPinnedPost: S,
					post: _,
					tooltipType: L ? m.c.Lightbox : void 0
				}), !W && n.a.createElement(a.a, {
					isPostDetail: w,
					thing: _,
					tooltipType: L ? m.c.Lightbox : void 0
				})), V && R && M && !k && n.a.createElement(b.a, {
					className: C.a.SubscribeButton,
					getEventFactory: e => Object(g.h)(_.id, e ? "unsubscribe" : "subscribe", "post", T, j),
					identifier: {
						name: V.name,
						type: Object(v.h)(V) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: _.id,
					size: f.c.XS
				}), F && n.a.createElement(x.b, {
					isSponsored: _.isSponsored,
					postId: _.id,
					href: Object(y.D)(_),
					source: _.source
				}, n.a.createElement(P.a, {
					className: C.a.outboundLinkIcon
				})), K && n.a.createElement(c.a, {
					isFilled: !!B,
					onClick: D,
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
				return g
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
				x = s("./src/reddit/selectors/user.ts");
			const g = (e, t) => (e, t, s) => Object(m.a)(e) ? 120 : 47,
				P = Object(l.u)(),
				y = {
					apiError: b.a,
					apiPending: b.b,
					currentUser: x.j,
					layout: l.Q,
					loadMore: b.d,
					subredditsById: h.ab,
					viewportDataLoaded: f.a,
					commentsById: b.g,
					itemIds: b.f,
					itemIdToPostId: b.e,
					postsById: b.h,
					estimateItemHeight: g
				},
				v = Object(i.c)(y),
				O = Object(n.b)(v, (e, t) => ({
					onBottomViewed: (t, s) => e(d.c(t, s)),
					openPost: t => {
						e(a.K(t))
					},
					trackOnPostEnteredViewport: (t, s) => {
						Object(p.a)(t) && e(a.N(t))
					},
					trackOnPostExitedViewport: (t, s, o) => {
						Object(p.a)(t) && e(a.O(t, o))
					},
					fireAdPixelsOfType: r.a
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(u.h)(e, t)
				}));
			t.a = e => Object(c.c)(P(O(e)))
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
				x = s("./src/reddit/featureFlags/index.ts"),
				g = s("./src/reddit/selectors/experiments/survey.ts"),
				P = s("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				y = s("./src/reddit/selectors/listings.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/selectors/tracking.ts");

			function j() {
				return Object(u.u)({
					currentProfileName: u.i,
					isCommentPermalink: u.w,
					isCommentsPage: u.x,
					isFrontpage: u.z,
					isPredictionsPage: u.N,
					isProfilePostListing: u.K,
					isTopicPage: u.P,
					pageLayer: e => e
				})
			}
			const I = j(),
				E = {
					apiError: y.c,
					apiPending: y.d,
					measureScrollFPS: x.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(u.Q)(e, t),
					loadMore: (e, t) => t.isPredictionsPage ? null : Object(y.g)(e, t),
					postsById: (e, t) => {
						if (t.isPredictionsPage) {
							const s = Object(O.E)(e, t.listingName);
							return Object(P.k)(e, {
								subredditId: s
							})
						}
						return Object(v.S)(e, {
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
							const t = Object(O.E)(e, s);
							return Object(P.l)(e, {
								subredditId: t
							})
						}
						return Object(v.E)(e, t, s, r)
					}),
					subredditsById: O.ab,
					viewportDataLoaded: C.a,
					pageReferrer: u.T,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: g.d
				},
				w = Object(r.c)(E),
				S = e => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(d.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
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
					trackOnPostExitedViewport: (t, s, o, r, n) => {
						e(c.O(t, o, r, n))
					},
					surveyTriggerScrollCounted: () => e(Object(m.h)())
				}),
				k = e => Object(b.b)({
					...e
				}),
				L = (e, t, s, o) => {
					const {
						listingKey: r,
						hostPostData: n,
						listingBelowVariant: i
					} = o;
					return Object(h.h)(e, t, "post", r, n, i, void 0)
				},
				N = Object(o.b)(w, S, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: k,
					postClickEventFactory: L
				}));
			t.a = e => Object(p.c)(I(N(e)))
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
				flairStyleTemplate: c.U,
				hideNSFWPref: b.B,
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
				}) => e(Object(i.h)({
					post: t,
					previewFlair: s,
					selectedTemplateId: o
				})),
				handleVote: s => {
					const o = s === d.a.upvoted ? Object(n.db)(t) : Object(n.w)(t);
					e(o)
				},
				onIgnoreReports: () => e(Object(n.Z)(t)),
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
				return l
			})), s.d(t, "a", (function() {
				return m
			}));
			var o = s("./src/config.ts"),
				r = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeApiRequest/index.ts"),
				a = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				c = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const l = (e, t, s) => Object(i.a)(e, {
					data: s,
					endpoint: Object(a.a)(Object(r.a)(Object(d.a)(Object(c.a)(`${o.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
					traceRequestName: "get_profile_conversations",
					method: n.hb.GET
				}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
					...e,
					body: {
						...e.body,
						pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
					}
				} : e),
				m = (e, t, s) => Object(i.a)(e, {
					data: s,
					endpoint: Object(a.a)(Object(r.a)(Object(c.a)(`${o.a.gatewayUrl}/desktopapi/v1/user/${t}/overview`))),
					method: n.hb.GET
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
				x = s("./node_modules/lodash/difference.js"),
				g = s.n(x),
				P = s("./node_modules/lodash/pick.js"),
				y = s.n(P),
				v = s("./src/lib/makeActionCreator/index.ts"),
				O = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				C = s("./src/reddit/constants/parameters.ts"),
				j = s("./src/reddit/endpoints/page/profileOverviewPage.ts"),
				I = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const E = Object(v.a)(I.c),
				w = Object(v.a)(I.b),
				S = Object(v.a)(I.a);
			var k = s("./src/reddit/components/ContentGate/index.tsx"),
				L = s("./src/reddit/components/EmptyProfile/index.ts"),
				N = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				T = s("./src/reddit/components/JumpToContent/index.tsx"),
				_ = s("./src/lib/classNames/index.ts"),
				M = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				F = s("./src/reddit/components/ProfileItemList/index.tsx"),
				R = s("./src/reddit/connectors/OverviewChronoList/index.ts"),
				A = s("./src/reddit/components/OverviewChronoList/index.m.less"),
				V = s.n(A),
				B = s("./src/lib/lessComponent.tsx");

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const D = Object(R.a)(B.a.wrapped(e => {
				const {
					className: t,
					itemIds: s
				} = e, o = s.length > 0;
				return i.a.createElement(F.a, K({
					className: Object(_.a)(t, {
						[V.a.ComponentHasItems]: o
					})
				}, e))
			}, "Component", V.a));
			var W = e => i.a.createElement(D, K({}, e, {
					itemComponent: M.a
				})),
				H = s("./src/reddit/components/PostList/index.tsx"),
				U = s("./src/reddit/components/TrackingHelper/index.tsx"),
				G = s("./src/lib/isPinnedAdminPost/index.ts"),
				q = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				z = s("./node_modules/lodash/last.js"),
				J = s.n(z);
			var Q = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				X = s("./src/reddit/selectors/posts.ts"),
				Z = s("./src/reddit/components/ClassicPost/index.tsx"),
				$ = s("./src/reddit/components/LargePost/index.tsx"),
				Y = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				ee = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				te = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				se = s("./src/reddit/selectors/profile.ts"),
				oe = s("./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less"),
				re = s.n(oe);
			const {
				fbt: ne
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ie = B.a.div("ExtraCommentsItemWrapper", re.a), ae = B.a.p("ExtraComments", re.a), de = B.a.wrapped(ae, "ExtraCommentsInteractive", re.a);
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
				xe = s.n(fe);

			function ge() {
				return (ge = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Pe = B.a.div("BackgroundWrapper", xe.a),
				ye = B.a.wrapped(Z.default, "ClassicPost", xe.a),
				ve = B.a.wrapped(Y.a, "OverviewCommentPost", xe.a),
				Oe = Object(a.b)(() => Object(d.c)({
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
					}) => !!s && Object(X.p)(e, t, s),
					isPinned: (e, {
						postId: t,
						currentProfileName: s
					}) => !!s && Object(X.r)(e, t, s),
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
				Ce = B.a.wrapped($.default, "OverviewLargePost", xe.a),
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
						postId: x,
						profileName: g,
						scrollerItemRef: P
					} = e, y = {
						last: m,
						onClickPost: u,
						postId: x
					};
					if (!g) return null;
					const v = g === f.author,
						O = Object(G.a)(c, f.distinguishType);
					if (!v && !a && !O) return null;
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
						className: Object(_.a)(he.a.largeAndMediumActiveStyles, he.a.largeAndMediumPostStyles, xe.a.OverviewConversationsPost, s),
						style: {
							...Object(Q.b)(),
							...Object(Q.d)(e)
						}
					}, i.a.createElement(ee.a, {
						isFirst: !0,
						isLast: j < 0,
						key: f.id
					}, !v && !!a && i.a.createElement(ve, ge({}, y, {
						commentId: a,
						key: f.id,
						profileName: g
					})), (v || O) && (p === ue.g.Classic ? i.a.createElement(ye, {
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
						postId: x,
						scrollerItemRef: P
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
						postId: x,
						scrollerItemRef: P
					}))), i.a.createElement(Pe, {
						style: {
							background: Object(Q.e)(e)
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
							profileName: g,
							showModTools: !0
						}) : i.a.createElement(ce, {
							extraCommentsId: t.id,
							key: t.id,
							profileName: g
						})
					})))))
				});
			var Ie = Object(me.b)((function(e) {
					var t;
					const s = Object(pe.a)(),
						o = Object(p.db)();
					return i.a.createElement(je, ge({
						theme: null !== (t = e.theme) && void 0 !== t ? t : s,
						currentProfileName: Object(p.i)(o),
						pageLayer: o
					}, e))
				})),
				Ee = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				we = s("./src/reddit/helpers/trackers/post.ts"),
				Se = s("./src/reddit/selectors/tracking.ts"),
				ke = s("./src/reddit/connectors/PostList/index.ts");
			const Le = Object(d.c)({
					...ke.d,
					postIds: X.O,
					viewportDataLoaded: Se.a
				}),
				Ne = Object(ke.c)(),
				Te = Object(a.b)(Le, ke.b, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(we.h)(e, t),
					postComponentForLayout: ({
						post: e
					}) => e.isBlank ? Ee.a : Ie
				}));
			var _e = (e => Object(U.c)(Ne(Te(e))))(H.a),
				Me = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				Fe = s("./node_modules/lodash/debounce.js"),
				Re = s.n(Fe),
				Ae = s("./src/reddit/actions/post.ts"),
				Ve = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Be = s("./src/lib/isUrl/index.ts"),
				Ke = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				De = s("./src/reddit/components/Media/index.tsx"),
				We = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				He = s("./src/reddit/components/PostContainer/index.tsx"),
				Ue = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				Ge = s("./src/reddit/components/PostTitle/index.tsx"),
				qe = s("./src/reddit/connectors/miniCardPost.ts"),
				ze = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Je = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Qe = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Xe = s("./src/reddit/models/Media/index.ts"),
				Ze = s("./node_modules/fbt/lib/FbtPublic.js"),
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
				pt = B.a.wrapped(Ye.a, "HorizontalVotes", dt.a),
				ut = B.a.button("ShareButton", dt.a),
				bt = Object(p.u)({
					currentProfileName: p.i,
					isCommentPermalink: p.w,
					isCommentsPage: p.x,
					isProfilePostListing: p.K,
					pageLayer: e => e
				}),
				ht = Object(d.c)({
					layout: p.Q,
					subreddit: p.r
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
						post: x,
						sendEvent: g,
						showEditFlair: P,
						showEditPost: y,
						subreddit: v
					} = e, O = e => g(Object(we.h)(x.id, e)), C = x.postId, j = Object(et.d)(ct, x.id, m, u), I = !!o && Object(it.e)(o) === x.author;
					return i.a.createElement("div", {
						className: Object(_.a)(dt.a.flatlistContainer, s)
					}, i.a.createElement(pt, {
						compact: !1,
						model: x,
						onVoteClick: r,
						scoreClassName: dt.a.score
					}), i.a.createElement($e.a, {
						hasModPostPerms: d,
						isCommentsPage: c,
						isCommentPermalink: l,
						isOverlay: m,
						postId: x.id,
						modModeEnabled: h,
						numComments: x.numComments,
						type: ue.g.Compact,
						onClick: f
					}), i.a.createElement(rt.a, {
						className: dt.a.shareMenu,
						dropdownId: Object(et.d)(mt, x.id, m, u),
						permalink: x.permalink,
						post: x,
						sendEventWithName: O,
						subredditType: null == v ? void 0 : v.type
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
						canEditFlair: n && !!P,
						hasModPostPerms: d,
						hasModFullPerms: a,
						isOverlay: !!m,
						isPostAuthor: I,
						modModeEnabled: h,
						post: x,
						tooltipId: j
					})), i.a.createElement(ot.a, {
						currentProfileName: t,
						isCommentsPage: c,
						isOverlay: !!m,
						isProfilePostListing: p,
						layout: b,
						pageLayer: e.pageLayer,
						permalink: x.permalink,
						postId: C,
						dropdownId: Object(et.d)(lt, x.id, m, u),
						isFixed: u,
						sendEvent: g,
						showEditPost: !!y,
						showEditFlair: !!P,
						useFlatlistBreakpoints: Object(ot.b)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1
						})
					}))
				}))),
				xt = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				gt = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				Pt = s("./src/reddit/components/MiniCardPost/index.m.less"),
				yt = s.n(Pt);
			var vt = Object(p.u)()(Object(me.b)(Object(qe.a)(Object(Ve.a)(e => {
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
						shouldPause: x,
						showMetaLine: g = !0,
						showEditFlair: P,
						subredditOrProfile: y,
						userIsOp: v
					} = e, {
						media: O
					} = r || h, C = O && O.type, j = Object(Ue.b)(h.id), I = C === Xe.o.RTJSON, E = v && I, w = Object(Qe.a)(p), S = Object(ze.a)(p), k = Object(Je.a)(p), L = O && C !== Xe.o.RTJSON && C !== Xe.o.TEXT, N = !O && !!h.source && Object(Be.a)(h.source.url), T = O && i.a.createElement(De.a, {
						autoplayPref: t,
						availableWidth: s,
						className: yt.a.media,
						imageBoxClassName: yt.a.mediaImageBox,
						imageBoxContentImageClassName: yt.a.mediaImageBoxContentImage,
						forceAspectRatio: Xe.c,
						isListing: !0,
						isMiniCard: !0,
						isNotCardView: !0,
						post: r || h,
						scrollerItemRef: f,
						shouldPause: x,
						shouldLoad: l,
						showCentered: !0,
						showFull: !1
					});
					return i.a.createElement(He.a, {
						className: Object(_.a)(yt.a.postContainer, he.a.largeAndMediumActiveStyles, he.a.largeAndMediumPostStyles, Object(Q.a)(e), o),
						style: {
							...Object(Q.b)(e.flairStyleTemplate),
							...Object(Q.d)(e)
						},
						post: h,
						onClick: b,
						eventFactory: d
					}, i.a.createElement(We.a, {
						className: yt.a.backgroundWrapper,
						flairStyleTemplate: c
					}, L && T, i.a.createElement("div", {
						className: yt.a.innerContainer
					}, N && i.a.createElement(gt.a, {
						post: h,
						templatePlaceholderImage: c ? c.postPlaceholderImage : void 0
					}), i.a.createElement(Ge.c, {
						className: yt.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: h,
						size: Ge.b.Large,
						titleColor: c && c.postTitleColor
					}), g && y && i.a.createElement(xt.a, {
						className: yt.a.metaLine,
						crosspostSubredditOrProfile: n,
						hideNSFWPref: m,
						post: h,
						subredditOrProfile: y
					}), !L && i.a.createElement("div", {
						className: yt.a.mediaWrapper
					}, T), i.a.createElement("div", {
						className: yt.a.flexSpacer
					}), i.a.createElement(ft, {
						currentUser: a,
						handleVote: e.handleVote,
						hasModFlairPerms: S,
						hasModFullPerms: k,
						hasModPostPerms: w,
						modModeEnabled: u,
						post: h,
						showEditFlair: P,
						showEditPost: E
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
				It = s("./src/reddit/icons/fonts/index.tsx"),
				Et = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less"),
				wt = s.n(Et);
			const {
				fbt: St
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var kt = e => i.a.createElement("div", {
					className: Object(_.a)(wt.a.container, e.className)
				}, i.a.createElement(It.a, {
					name: "pin",
					className: wt.a.pin
				}), i.a.createElement("div", {
					className: wt.a.title
				}, St._("Show off that karma!", null, {
					hk: "2yqUT7"
				})), e.children),
				Lt = s("./src/reddit/controls/TextButton/index.tsx"),
				Nt = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less"),
				Tt = s.n(Nt);
			const {
				fbt: _t
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Mt = e => i.a.createElement(kt, {
					className: Object(_.a)(Tt.a.container, e.className)
				}, i.a.createElement("div", {
					className: Tt.a.description
				}, _t._('Pin a post from your feed using the "..." at the bottom of each post', null, {
					hk: "4lkJRB"
				})), i.a.createElement(Lt.a, {
					className: Tt.a.gotIt,
					onClick: e.onGotItClick
				}, _t._("OK, I got it", null, {
					hk: "1JMx7x"
				}))),
				Ft = s("./src/reddit/components/ProfilePinnedPosts/index.m.less"),
				Rt = s.n(Ft);
			const {
				fbt: At
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Vt = 320, Bt = 300, Kt = Object(d.c)({
				arePinnedPostsLoaded: X.a,
				currentUser: jt.j,
				pinnedPostIds: X.P
			}), Dt = Object(a.b)(Kt, e => ({
				openPost: t => e(Object(Ae.K)(t))
			}));
			class Wt extends i.a.Component {
				constructor() {
					super(...arguments), this.containerRef = null, this.state = {
						showEducation: !1,
						pauseMedia: !1
					}, this.setContainerRef = e => this.containerRef = e, this.handleScroll = Re()(() => {
						if (!this.containerRef) return;
						const e = this.containerRef.getBoundingClientRect();
						e.bottom < Bt ? this.pauseMedia() : e.top > 0 && this.playMedia()
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
						Object(Ct.Ob)(), this.setState({
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
						availableWidth: Vt,
						className: Object(_.a)(Rt.a.item, Rt.a.miniCardPost),
						forceLoadMedia: !this.state.pauseMedia,
						onClickPost: this.onClickPost,
						shouldPause: this.state.pauseMedia
					})
				}
				componentDidMount() {
					this.setState({
						showEducation: !Object(Ct.K)()
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
					})), n ? i.a.createElement(Mt, {
						className: Object(_.a)(Rt.a.item, Rt.a.education),
						onGotItClick: this.onGotItClick
					}) : i.a.createElement("div", {
						ref: this.setContainerRef,
						className: Rt.a.container
					}, t.map(this.renderPost), a && i.a.createElement(kt, {
						className: Rt.a.item
					})), s)
				}
			}
			var Ht = Object(p.u)()(Dt(Wt)),
				Ut = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				Gt = s("./src/reddit/helpers/trackers/screenview.ts"),
				qt = s("./src/reddit/layout/page/Listing/index.tsx"),
				zt = s("./src/reddit/models/ContentGate.ts"),
				Jt = s("./src/reddit/pages/ErrorPages/index.tsx");

			function Qt() {
				return (Qt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Xt = (e, {
					location: t
				}) => r()([...Object(c.a)(t.search)]),
				Zt = Object(p.u)(),
				$t = Object(d.a)(p.D, jt.db, Xt, p.Q, (e, {
					match: t
				}) => t.params.profileName, (e, {
					match: t
				}) => t.params.sort, (e, {
					match: t
				}) => Object(se.j)(e, {
					profileName: t.params.profileName
				}), (e, t) => Object(h.a)(e, Xt(0, t)), (e, {
					match: t
				}) => !Object(X.n)(e, {
					profileName: t.params.profileName
				}), jt.J, (e, {
					match: t
				}) => Object(jt.e)(e, u.ec + t.params.profileName), (e, t, s, o, r, n, i, {
					sort: a,
					t: d
				}, c, l, p) => {
					const b = o === ue.g.Compact ? u.rb : u.sb,
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
						} = i, l = Object(m.a)(c, u.rb, a, n), p = Object(O.d)(o, {
							listingKey: l
						});
						if (!p) return;
						const b = Object(O.b)(o, {
								listingKey: l
							}),
							f = Object(O.c)(o, {
								listingKey: l
							}),
							x = f && f[p.token];
						if (b || x) return;
						e(E({
							key: l,
							fetchedToken: p.token
						}));
						const P = await Object(j.a)(s(), c, {
							after: p.token,
							dist: p.dist,
							sort: a,
							t: d,
							...y()(n, C.l)
						});
						if (P.ok) {
							const t = Object(O.f)(o, {
									listingKey: l
								}),
								s = {
									...P.body,
									overviewIds: g()(P.body.overviewIds, t)
								};
							e(w({
								fetchedToken: p.token,
								key: l,
								meta: o.meta,
								...s
							}))
						} else e(S({
							error: P.error,
							fetchedToken: p.token,
							key: l,
							account: P.body.data ? P.body.data.account : null
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
					super(...arguments), this.renderNoPosts = () => i.a.createElement(L.c, {
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
					if (e && e.profileDeleted) return i.a.createElement(k.default, {
						contentGateType: zt.a.ProfileDeleted,
						profileName: c
					});
					if (e && e.profileSuspended) return i.a.createElement(k.default, {
						contentGateType: zt.a.ProfileSuspended,
						profileName: c
					});
					if (451 === d.status || e && e.profileBlockedForLegalReason) return i.a.createElement(k.default, {
						contentGateType: zt.a.ProfileBlockedForLegalReason,
						profileName: c
					});
					if (403 === d.status) return i.a.createElement(Jt.a, null);
					if (404 === d.status) return i.a.createElement(k.default, {
						contentGateType: zt.a.ProfileDoesNotExist,
						profileName: c
					});
					if (!c) return null;
					const h = c.toLowerCase(),
						f = `/user/${c}/`,
						x = {
							listingKey: n,
							listingName: h
						};
					if (!s && r && !o) return i.a.createElement(k.default, {
						subredditName: c,
						contentGateType: zt.a.Nsfw
					});
					const g = {
							inSubredditOrProfile: !Object(l.a)(c),
							listingKey: n,
							listingName: h,
							listingViewed: (e, t) => Object(Gt.q)(n, m, t, e, b),
							noPostsComponent: this.renderNoPosts,
							onTryAgain: a
						},
						P = {
							sort: m,
							baseUrl: f,
							sortOptions: u.xb,
							timeSort: b
						};
					let y;
					return y = t === ue.g.Compact ? i.a.createElement(W, Qt({}, g, {
						onLoadMore: this.props.onLoadMoreChronoItems,
						onTryAgain: a
					})) : i.a.createElement(i.a.Fragment, null, p && i.a.createElement(Ht, {
						profileName: c
					}), i.a.createElement(N.a, P), i.a.createElement(_e, Qt({}, g, {
						excludePinnedPosts: p,
						onLoadMore: this.props.onLoadMoreConversationsItems
					}))), i.a.createElement(qt.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(Me.a, {
							profileName: c
						})),
						content: i.a.createElement(i.a.Fragment, null, i.a.createElement(T.a, null), y),
						sidebar: i.a.createElement(Ut.a, Qt({}, x, {
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
			var o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const n = e => {
				const t = Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: o.Cb
				});
				return !(!t || Object(o.fe)(t))
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
				return p
			})), s.d(t, "j", (function() {
				return u
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "c", (function() {
				return P
			})), s.d(t, "g", (function() {
				return y
			})), s.d(t, "d", (function() {
				return v
			}));
			var o = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/featureFlags/index.ts"),
				n = s("./src/reddit/selectors/posts.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const d = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(i.T)(e, {
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
					const o = Object(i.X)(e, {
						subredditName: s.name
					});
					return o && o.postIds && o.postIds.length ? o.postIds : m
				}),
				u = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(i.T)(e, {
						subredditId: s
					}) : null
				},
				b = (e, t, s, o, r) => {
					const i = r.find(e => e <= t) || -1,
						a = r.find(e => e > t) || 1 / 0;
					return t !== a && t !== i && (!(i + s > t) && (!(t + s > a) && !((e, t, s) => {
						const o = s[t - 1],
							r = s[t],
							i = r && Object(n.H)(e, {
								postId: o
							}) || null,
							a = r && Object(n.H)(e, {
								postId: r
							}) || null;
						return i && i.isSponsored || a && a.isSponsored
					})(e, t, o)))
				},
				h = [3],
				f = Object(o.a)((e, {
					existingDUPositions: t,
					listingProps: s
				}) => {
					const o = t.slice().sort();
					let r = -1;
					const i = Object(n.A)(e, {
							listingKey: s.listingKey
						}),
						a = [];
					return h.forEach(t => {
						let s = r + t;
						if (!(s >= i.length)) {
							for (; s < i.length && !b(e, s, t, i, o);) s += 1;
							s < i.length && (a.push(s), r = s)
						}
					}), a
				}),
				x = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				g = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				P = e => e.focusedVerticals.category,
				y = e => e.focusedVerticals.lastLoadedEnv,
				v = e => {
					const t = Object(a.I)(e),
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
				n = s("./src/reddit/selectors/chatPost.ts"),
				i = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(r.fe)(t)
				},
				d = Object(o.a)(a, n.d, (e, t) => e && !t)
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
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"b1787cdf2fd4"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileOverview.d02903e2fc2ca317a81f.js.map