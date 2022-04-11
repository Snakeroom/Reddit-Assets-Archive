// https://www.redditstatic.com/desktop2x/ProfileOverview.9d51759d2d3b76622252.js
// Retrieved at 4/11/2022, 2:20:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileOverview"], {
		"./src/lib/makeOverviewConversationsItemKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = (e, t) => {
				return `overviewConversations--[profile:'${t}']--[post:'${e}']`
			}
		},
		"./src/lib/promo/withShowSignupUpsell.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var o = s("./node_modules/react/index.js");

			function r() {
				return window
			}
			var n = s("./node_modules/lodash/debounce.js"),
				i = s.n(n),
				a = s("./src/reddit/constants/elementIds.ts"),
				d = s("./src/reddit/constants/experiments.ts"),
				c = s("./src/reddit/hooks/usePromoContext.ts"),
				l = s("./src/reddit/constants/promo.ts"),
				m = s("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts");
			var u = function() {
					const e = Object(m.a)(d.gc.Bottom_cell),
						t = Object(m.a)(d.gc.Bottom_cell_dismissible),
						s = Object(m.a)(d.gc.Bottom_cell_dismissible_immediate_trigger),
						o = Object(m.a)(d.gc.Bottom_cell_signup_upsell_copy),
						r = Object(m.a)(d.gc.Bottom_cell_surprise_install_copy),
						n = Object(m.a)(d.gc.Bottom_sheet);
					return e || o || r ? l.b.SignupUpsellCell : t || s ? l.b.SignupUpsellCellDismissible : n ? l.b.SignupUpsellBottomSheet : null
				},
				p = s("./src/reddit/hooks/promo/useIsPromoShown.ts");
			const b = 250,
				h = 1e3;

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}

			function x(e) {
				const t = e.displayName || e.name || "Component";

				function s(t) {
					const s = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b;
						const {
							showPromo: t
						} = Object(c.a)(), s = u(), n = Object(p.a)(s), l = Object(m.a)(d.gc.Bottom_cell_dismissible_immediate_trigger);
						return o.useMemo(() => i()(() => {
							if (!n && s) {
								const e = document.getElementById(a.d),
									o = e ? e.scrollTop : r().scrollY,
									n = r().innerHeight,
									i = n / 3,
									d = 2 * n;
								o >= (l ? i : d) && t(s)
							}
						}, e, {
							maxWait: h
						}), [l, n, s, t, e])
					}();
					return o.createElement(e, f({
						showSignupUpsell: s
					}, t))
				}
				return s.displayName = `withShowSignupUpsell(${t})`, s
			}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return P
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "c", (function() {
				return g
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
			var u = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = s("./src/reddit/selectors/platform.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(r.a)(i.g),
				f = Object(r.a)(i.e),
				x = Object(r.a)(i.h),
				v = Object(r.a)(i.c),
				P = Object(r.a)(i.f),
				O = Object(r.a)(i.j),
				g = Object(r.a)(i.i),
				y = () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const n = t(),
						i = Object(u.e)(n),
						c = Object(u.d)(n),
						p = Object(b.P)(n);
					if (i || !c) return;
					e(x());
					let P = !1;
					try {
						const t = p ? o.LoggedInGeo : o.LoggedOutGeo,
							s = await ((e, t, s) => Object(a.a)(e, {
								...d,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(r(), t);
						if (s.ok && s.body) {
							const {
								data: t
							} = s.body;
							if (C(t)) {
								if (j(t)) {
									e(v({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), P = !0
								} else if (w(t)) {
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
										u = {
											recommendedSubredditIds: [o.id],
											interactedSubredditIds: [r.id],
											subreddits: a,
											subredditsAboutInfo: d,
											subredditTopContent: c,
											category: n,
											lastLoadedEnv: "client"
										};
									e(h(u)), P = !0
								}
							} else P = !1
						}
					} catch (O) {
						P = !1
					}
					P || e(f({
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
				}, w = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						o = t && t.type;
					return !!(s && !j(e) && o === c.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, E = () => async (e, t, s) => {
					var o, r;
					const i = t(),
						a = Object(u.g)(i);
					if (Object(u.f)(i) || null === a || "client" === a) {
						const s = null === (r = null === (o = Object(p.b)(t())) || void 0 === o ? void 0 : o.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							a = Object(b.Q)(i);
						return Object(n.i)(() => e(y()), {
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
				return we
			})), s.d(t, "profileOverviewConversationsLoaded", (function() {
				return Ee
			})), s.d(t, "profileOverviewConversationsFailed", (function() {
				return Se
			})), s.d(t, "profileOverviewChronoPending", (function() {
				return Ie
			})), s.d(t, "profileOverviewChronoLoaded", (function() {
				return Ne
			})), s.d(t, "profileOverviewChronoFailed", (function() {
				return ke
			})), s.d(t, "profileOverviewConversationsRequested", (function() {
				return _e
			})), s.d(t, "profileOverviewRequested", (function() {
				return Le
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/lodash/pick.js"),
				r = s.n(o),
				n = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/actions/moderatingSubreddits.ts"),
				a = s("./src/reddit/actions/pages/profileShared.ts"),
				d = s("./src/reddit/actions/subreddit.ts"),
				c = s("./src/config.ts"),
				l = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				m = s("./src/lib/makeApiRequest/index.ts"),
				u = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				b = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var h = s("./src/reddit/helpers/post/index.ts"),
				f = s("./src/reddit/constants/postLayout.ts"),
				x = s("./src/reddit/constants/parameters.ts"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				P = s("./src/reddit/selectors/listings.ts"),
				O = s("./src/reddit/selectors/profile.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				y = s("./src/lib/makeActionCreator/index.ts"),
				C = s("./src/reddit/actions/changeUsername.ts"),
				j = s("./src/reddit/actions/contentGate.ts"),
				w = s("./src/reddit/actions/externalAccount.ts"),
				E = s("./src/reddit/actions/gold/powerups.ts"),
				S = s("./src/reddit/actions/pinnedPost.ts"),
				I = s("./src/reddit/actions/platform.ts"),
				N = s("./src/reddit/actions/profile/index.ts"),
				k = s("./src/reddit/actions/trophyCase.ts"),
				_ = s("./src/reddit/constants/errors.ts"),
				L = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				T = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				M = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				F = s("./src/lib/initializeClient/installReducer.ts"),
				B = s("./node_modules/redux/es/redux.js"),
				A = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const R = {};
			var V = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R,
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
			const U = {};
			var W = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U,
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
				D = Object(B.c)({
					error: V,
					pending: W
				});
			const K = {};
			var G = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
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
			const H = {};
			var q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case M.b:
						case A.b: {
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
				z = s("./src/lib/omitKey/index.ts");
			const J = {};
			var Q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case M.b:
						case A.b: {
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
							} : Object(z.a)(e, s)
						}
						default:
							return e
					}
				},
				X = Object(B.c)({
					api: D,
					fetchedTokens: G,
					ids: q,
					loadMore: Q
				});
			const Z = {};
			var Y = function() {
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
			const $ = {};
			var ee = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $,
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
				te = Object(B.c)({
					error: Y,
					pending: ee
				}),
				se = s("./src/reddit/actions/profileConversations.ts");
			const oe = {};
			var re = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case se.c:
					case se.b: {
						const {
							extraCommentsId: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case se.a: {
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
			var ie = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case se.c: {
							const {
								extraCommentsId: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case se.b:
						case se.a: {
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
				ae = Object(B.c)({
					error: re,
					pending: ie
				});
			const de = {};
			var ce = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : de,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case M.e:
						case se.b:
						case se.e:
							return {
								...e, ...t.payload.extraComments
							};
						default:
							return e
					}
				},
				le = Object(B.c)({
					api: ae,
					models: ce
				}),
				me = s("./node_modules/lodash/mapValues.js"),
				ue = s.n(me),
				pe = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				be = s("./src/reddit/constants/comments.ts");
			const he = {};

			function fe(e) {
				const t = e;
				return ue()(t, e => {
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
			var ve = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : he,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case M.e:
					case se.e: {
						const {
							comments: s,
							extraComments: o,
							postIds: r,
							profileName: n
						} = t.payload, i = xe(r, s, o), a = {};
						for (const e of r) {
							a[Object(pe.a)(e, n)] = i.hasOwnProperty(e) ? fe(i[e]) : {}
						}
						return {
							...e,
							...a
						}
					}
					case se.b: {
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
							c = fe(xe(i, s, r)[d]),
							l = Object(pe.a)(d, a),
							m = {
								...e[l]
							},
							u = m[n].prev,
							p = u && u.id || "",
							b = o[d].head,
							h = b && b.id || "",
							f = {
								id: h,
								type: be.a.Comment
							},
							x = {
								...m,
								[p]: {
									...m[p],
									next: f
								},
								...c,
								[h]: {
									...c[h],
									prev: u
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
			const Pe = {};
			var Oe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case M.e:
					case se.e: {
						const {
							commentLists: s,
							postIds: o,
							profileName: r
						} = t.payload, n = {};
						for (const e of o) {
							n[Object(pe.a)(e, r)] = s[e] && s[e].head ? s[e].head.id : null
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
			const ge = {};
			var ye = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ge,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case M.e:
						case se.e: {
							const {
								postIds: s,
								profileName: o
							} = t.payload, r = {};
							for (const e of s) {
								r[Object(pe.a)(e, o)] = e
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
				Ce = Object(B.c)({
					api: te,
					extraComments: le,
					keyToCommentThreadLinkSets: ve,
					keyToHeadCommentId: Oe,
					keyToPostId: ye
				}),
				je = Object(B.c)({
					chrono: X,
					conversations: Ce
				});
			Object(F.a)({
				pages: {
					profileOverview: je
				}
			});
			const we = Object(y.a)(M.f),
				Ee = Object(y.a)(M.e),
				Se = Object(y.a)(M.d),
				Ie = Object(y.a)(M.c),
				Ne = Object(y.a)(M.b),
				ke = Object(y.a)(M.a),
				_e = (e, t, s, o) => async (o, r, i) => {
					const a = r(),
						d = !!a.listings.postOrder.ids[e],
						f = !!Object(P.c)(a, {
							listingKey: e
						});
					if (!!Object(P.d)(a, {
							listingKey: e
						}) || d && !f) return;
					o(we({
						key: e
					}));
					const x = await Object(T.a)("profile", () => ((e, t, s) => Object(m.a)(e, {
							data: s,
							endpoint: Object(u.a)(Object(l.a)(Object(p.a)(Object(b.a)(`${c.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
							traceRequestName: "get_profile_conversations",
							method: n.jb.GET
						}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
							...e,
							body: {
								...e.body,
								pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
							}
						} : e))(i.apiContext(), t, s)),
						v = x.body;
					await Object(h.a)(i.gqlContext, v.posts).then(e => v.posts = e);
					const {
						pinned: g,
						postIds: y
					} = v;
					if (x.ok) {
						o(Ee({
							key: e,
							meta: a.meta,
							profileName: t,
							...v,
							postIds: y
						}));
						const s = Object(O.m)(r(), t);
						o(Object(S.h)({
							profileId: s,
							pinned: g
						}))
					} else o(Se({
						account: x.body.data ? x.body.data.account : null,
						error: x.body.reason ? {
							type: x.body.reason
						} : x.error,
						key: e
					})), x.body.reason === _.a.DeletedProfile && o(Object(j.s)({
						profileName: t
					})), o(Object(I.n)(x.status))
				}, Le = e => async (t, s, o) => {
					const {
						queryParams: c,
						params: l
					} = e, {
						sort: m,
						t: u
					} = Object(a.a)(s(), c), {
						profileName: p
					} = l;
					let b = !1;
					const h = f.e[Object(v.R)(s(), {})],
						P = p.toLowerCase(),
						y = {
							...r()(e.queryParams, x.n),
							sort: m,
							layout: h,
							t: u
						},
						j = [t(N.d(P))],
						S = Object(L.a)(P, n.ub, m, e.queryParams);
					if (s().listings.postOrder.ids[S] && !s().listings.postOrder.api.error[S] ? b = !0 : j.push(t(_e(S, P, y, !0))), j.push(t(Object(i.b)())), await Promise.all(j), b) return;
					const _ = s();
					if (!_.platform.currentPage) return;
					if (200 !== _.platform.currentPage.status) return;
					const T = Object(O.m)(s(), P),
						M = Object(g.Ab)(_, {
							userName: p
						}).id;
					t(I.m({
						title: Te(s(), p)
					})), Object(g.S)(_) && Object(g.W)(_, p) && t(Object(C.f)());
					const F = [t(Object(d.q)()), t(k.b(P, T)), t(N.b(P)), t(w.o(p)), t(N.g(p)), t(E.l(p, M))];
					await Promise.all(F)
				}, Te = (e, t) => Object(O.q)(e, {
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
				if (!p(t.id)) return null;
				const m = new Set;
				let u = !1;
				for (let r = 0, n = -999; r <= l; r += 1) {
					const e = s[r],
						t = c[e].belongsTo.id;
					p(e) && r - n >= a && !m.has(t) && (n = r, m.add(t), r === l && (u = !0))
				}
				return u ? r.a.createElement(i.a, {
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
		"./src/reddit/components/CreatorStats/EducationUnit.m.less": function(e, t, s) {
			e.exports = {
				container: "_2EuQaYC2G3KohzPtXm5hCL",
				innerContainer: "_2LsQAqUfogc1w9Ytlefh1M"
			}
		},
		"./src/reddit/components/CreatorStats/EducationUnit.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/CreatorStats/EducationUnit.m.less"),
				a = s.n(i),
				d = s("./src/reddit/components/CreatorStats/Icon.tsx");
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("div", {
					className: Object(n.a)(a.a.container, t)
				}, r.a.createElement("div", {
					className: a.a.innerContainer
				}, c._("NEW! Now you can get data and insights on your posts", null, {
					hk: "343rNh"
				}), r.a.createElement(d.a, null)))
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
				return f
			}));
			var o = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), f = e => {
				let {
					post: t
				} = e;
				const s = t.predictionTournament,
					r = s.status === d.a.Live,
					l = s.status === d.a.Closed,
					m = Object(i.e)(e => Object(c.U)(e, {
						postId: t.id
					}));
				return n.a.createElement("div", {
					className: b.a.container
				}, n.a.createElement("div", {
					className: b.a.label
				}, n.a.createElement("span", null, null == m ? void 0 : m.displayText), r && n.a.createElement("span", {
					className: Object(o.a)(b.a.badge, b.a.live)
				}, h._("Live", null, {
					hk: "1G2P1W"
				})), l && n.a.createElement("span", {
					className: Object(o.a)(b.a.badge, b.a.ended)
				}, h._("Ended", null, {
					hk: "4s3hco"
				})), void 0 !== s.totalParticipantsCount && n.a.createElement(u, {
					participantsCount: s.totalParticipantsCount
				}), n.a.createElement(a.a, {
					className: b.a.awards,
					thing: t
				})), n.a.createElement("h3", {
					className: b.a.title
				}, s.name))
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
				proposal: "_2dkCPUHQTdBWU2B0dYnkRb",
				mHasNotVoted: "_5iUKicC_Y0zWFXvBBtVQJ",
				mGAPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mGaPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mPollIsClosed: "_3sj79JhIvASSGVklMeKgTl",
				adLinkWrapper: "_115kZaIAhrTbhLHOXtz01X",
				adsGalleryDisplayLink: "_3g19_IiwClMjxmNOrShwZw",
				horizontalVotes: "uFwpR-OdmueYZxdY_rEDX",
				modModeBannerWrapper: "_2-DmB4WujtcouWxnfbaGXw"
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
				u = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/Econ/Audio/async.ts"),
				h = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				f = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				x = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				v = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				P = s("./src/reddit/hooks/useTracking.ts"),
				O = s("./src/reddit/models/Media/index.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				y = s("./src/reddit/models/Vote/index.ts"),
				C = s("./src/reddit/selectors/activeModalId.ts"),
				j = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				w = s("./src/reddit/selectors/moderatorPermissions.ts"),
				E = s("./src/reddit/selectors/posts.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				I = s("./src/lib/ads/index.ts"),
				N = s("./src/lib/classNames/index.ts"),
				k = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				_ = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				L = s("./src/reddit/components/AwardBadges/index.tsx"),
				T = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				M = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				F = s("./src/reddit/components/CreatorStats/loader.tsx"),
				B = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				A = s("./src/reddit/components/Flatlist/index.tsx"),
				R = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				V = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				U = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				W = s("./src/reddit/components/ModModeReports/index.tsx"),
				D = s("./src/reddit/components/ModModeReports/helpers.ts"),
				K = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				G = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				H = s("./src/reddit/components/PostContainer/index.tsx"),
				q = s("./src/reddit/components/PostLeftRail/index.tsx"),
				z = s("./src/reddit/components/PostMedia/index.tsx"),
				J = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Q = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				X = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				Z = s.n(X);
			const {
				fbt: Y
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var $ = () => r.a.createElement("div", {
					className: Z.a.container
				}, r.a.createElement(Q.a, {
					className: Z.a.pinnedIcon,
					isFilled: !0
				}), r.a.createElement("span", {
					className: Z.a.metaText
				}, Y._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				ee = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				te = s("./src/reddit/components/PostTitle/index.tsx"),
				se = s("./src/reddit/components/PostTopLine/index.tsx"),
				oe = s("./src/reddit/components/SourceLink/index.tsx"),
				re = s("./src/reddit/constants/postLayout.ts"),
				ne = s("./src/reddit/contexts/InsideOverlay.tsx"),
				ie = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ae = s("./src/reddit/contexts/Post/index.tsx"),
				de = s("./src/reddit/helpers/isCrosspost.ts"),
				ce = s("./src/reddit/helpers/localStorage/index.ts"),
				le = s("./src/reddit/helpers/postEvent.ts"),
				me = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				ue = s("./src/reddit/models/Audio/index.ts"),
				pe = s("./src/reddit/constants/experiments.ts"),
				be = s("./src/reddit/helpers/chooseVariant/index.ts"),
				he = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const fe = Object(a.a)(E.N, e => e.some(he.c)),
				xe = Object(a.a)(fe, e => e),
				ve = (e, t) => Object(be.c)(e, {
					experimentName: pe.sc,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && xe(e, {
							listingKey: s
						})
					}
				});
			var Pe = s("./src/reddit/selectors/postFlair.ts"),
				Oe = s("./src/reddit/selectors/showPromotedCTA.ts"),
				ge = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ye = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Ce = s.n(ye),
				je = s("./src/reddit/selectors/i18n/index.ts"),
				we = s("./src/reddit/components/LargePost/index.m.less"),
				Ee = s.n(we);
			const Se = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(E.N)(e, {
						listingKey: s
					}) : void 0
				},
				Ie = Object(n.b)(() => Object(a.c)({
					autoplayPref: S.b,
					activeModalId: C.a,
					hideNSFWPref: S.F,
					flairStyleTemplate: ie.V,
					isCurrentUserProfilePost: E.l,
					isLoggedIn: S.Q,
					isActive: E.j,
					showPromotedCTA: Oe.a,
					moderatorPermissions: w.m,
					modModeEnabled: ie.T,
					posts: Se,
					postHeightVariant: ve,
					shouldShowNsfwListingBelow: je.b,
					showEditFlair: Pe.a,
					showAwardsPlaque: j.a,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						return !!s && Object(w.i)(e, s.id)
					}
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const o = t === y.a.upvoted ? Object(u.kb)(s) : Object(u.w)(s);
							e(o)
						},
						onIgnoreReports: () => e(Object(u.gb)(s)),
						onOpenReportsDropdown: t => e(Object(p.h)({
							tooltipId: t
						}))
					}
				}),
				Ne = r.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: n,
						currentUser: a,
						eventFactory: u,
						flairStyleTemplate: p,
						forceLoadMedia: y,
						hideNSFWPref: C,
						hostPostData: j,
						imageGalleryCurrentItem: w,
						inSubredditOrProfile: E = !1,
						isCommentsPage: S,
						isCurrentUserProfilePost: Q,
						isFrontpage: X,
						isGalleryTileLayoutDefault: Z,
						isModWithUserNotesPermissions: Y,
						isLoggedIn: ne,
						isOverlay: ie,
						isTopicPage: ae,
						isCommentCountAnimationEnabled: be,
						isVoteCountAnimationEnabled: he,
						isCountAnimShadowTestEnabled: fe,
						listingIndex: xe,
						listingKey: ve,
						moderatorPermissions: Pe,
						modModeEnabled: Oe,
						onClickPost: ye,
						onIgnoreReports: je,
						onOpenReportsDropdown: we,
						post: Se,
						postHeightVariant: Ie,
						scrollerItemRef: Ne,
						shouldShowGalleryTileOption: ke,
						shouldShowInsightsButton: _e,
						shouldShowNsfwListingBelow: Le,
						showAwardsPlaque: Te,
						showEditFlair: Me,
						showPromotedCTA: Fe,
						subredditOrProfile: Be,
						userIsOp: Ae,
						postId: Re,
						postIds: Ve,
						onceInViewport: Ue
					} = e, We = Object(P.a)(), De = !!e.redditStyle || !!e["data-redditstyle"], Ke = De ? void 0 : p, Ge = Object(l.a)(Pe), He = Oe && Ge, qe = Object(d.a)(Pe), ze = Object(c.a)(Pe), Je = Object(D.c)(Se), Qe = Object(U.d)(Se), Xe = !!Se.media && Se.media.type === O.o.RTJSON, Ze = Ae && Xe, Ye = s ? s - q.a : void 0, $e = !!Se.recommendationContext, et = !(X && ne || ae) || $e && ne, tt = (e => e === pe.Be.OnlyTitles)(Ie) && !Object(de.a)(Se), st = (e => e === pe.Be.MediumHeight)(Ie) && !Object(de.a)(Se), ot = (e => {
						var t;
						const {
							post: s,
							postIds: o,
							posts: r
						} = e;
						if (!Object(g.r)(s) || (null === (t = s.pollData) || void 0 === t ? void 0 : t.isPrediction)) return;
						const n = o && 0 === o.indexOf(s.id),
							i = o && 1 === o.indexOf(s.id),
							a = r && r[1] && Object(g.r)(r[1]);
						return {
							hasTopCompactPostStyles: n && a,
							hasBottomCompactPostStyles: i,
							showPinnnedHeader: n
						}
					})(e), rt = !!(null == j ? void 0 : j.shouldShowLinkedPosts), nt = (!E || rt || Le) && !Se.isSponsored, it = Object(I.t)(Se, w), {
						source: at
					} = it, dt = Object(o.useRef)(null), ct = Object(o.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == Ue || Ue(xe))
						})
					}, [Ue, xe]);
					Object(v.a)(dt, ct);
					const [lt, mt] = Object(o.useState)(!1), ut = Object(o.useCallback)(() => {
						mt(!lt), Object(ce.Mb)(), We(Object(me.d)(Re))
					}, [lt, We, Re]);
					return r.a.createElement(x.b, null, r.a.createElement(H.a, {
						className: Object(N.a)(Ee.a.container, n, Ce.a.largeAndMediumPostStyles, Ce.a.largeAndMediumActiveStyles, Object(m.a)(e), {
							[Ce.a.mUseRedditTheme]: De,
							promotedvideolink: Se.isSponsored && !(Se.media && O.a.has(Se.media.type)),
							[Ee.a.topCompactPost]: ot && ot.hasTopCompactPostStyles,
							[Ee.a.bottomCompactPost]: ot && ot.hasBottomCompactPostStyles,
							[Ee.a.shouldShowOverflow]: _e
						}),
						isOverlay: ie,
						style: Object(m.b)(e.flairStyleTemplate),
						post: Se,
						onClick: ye,
						eventFactory: u
					}, r.a.createElement("div", {
						ref: dt
					}), r.a.createElement(ee.a, {
						model: Se,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: fe,
						isVoteCountAnimation: he,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: Ke,
						redditStyle: De,
						postId: Re
					}), r.a.createElement(G.a, {
						className: Object(N.a)(Ee.a.backgroundWrapper, {
							[Ee.a.isEvent]: Object(le.a)(Se),
							[Ee.a.shouldUseRoundedBorder]: _e
						}),
						"data-click-id": "background",
						flairStyleTemplate: Ke,
						post: Se,
						redditStyle: De
					}, r.a.createElement(B.a, {
						post: Se
					}), ot && ot.showPinnnedHeader && r.a.createElement($, null), Object(i.c)(Se) && r.a.createElement(r.a.Fragment, null, r.a.createElement(f.a, {
						post: Se
					}), r.a.createElement(h.a, {
						post: Se
					})), !Object(i.c)(Se) && r.a.createElement(r.a.Fragment, null, !!Se.recommendationContext && r.a.createElement(K.a, {
						content: Se.recommendationContext.content,
						layout: re.g.Large,
						post: Se
					}), r.a.createElement(se.a, {
						className: Ee.a.postTopLine,
						hideAwards: Te,
						hideNSFWPref: C,
						hostPostData: j,
						iconClassName: Ee.a.postTopLineIcon,
						inSubredditOrProfile: E,
						isCommentsPage: !!S,
						isCompactPinnedPost: !!ot,
						isCurrentUserProfilePost: Q,
						isModWithUserNotesPermissions: Y,
						isOverlay: !!ie,
						isTopicPage: !!ae,
						listingKey: ve,
						post: Se,
						shouldShowSubscribeButton: et,
						showSubreddit: nt,
						showSubredditIcon: !0,
						subredditOrProfile: Be
					}), r.a.createElement(te.c, {
						className: Ee.a.postTitle,
						post: Se,
						redditStyle: De,
						size: te.b.Large,
						titleColor: Ke && Ke.postTitleColor,
						isOverlay: ie
					}), Se.source && !Se.isSponsored && !(Se.media && Object(O.H)(Se.media)) && r.a.createElement(oe.a, {
						className: Ee.a.sourceLink,
						post: Se
					})), r.a.createElement("div", {
						className: Ee.a.postMediaWrapper
					}, !ot && r.a.createElement(z.a, {
						isGalleryTileLayoutDefault: Z,
						isListing: !0,
						isMediumHeight: st,
						isNotCardView: !!ie,
						isTitleOnly: tt,
						showCentered: !0,
						flairStyleTemplate: Ke,
						post: Se,
						availableWidth: Ye,
						shouldLoad: y,
						scrollerItemRef: Ne,
						autoplayPref: t,
						shouldShowGalleryTileOption: ke,
						showPromotedCTA: Fe
					})), Fe && at && at.url && !Se.isSurveyAd && r.a.createElement(k.a, {
						className: Ee.a.adLinkWrapper
					}, r.a.createElement(_.a, {
						post: Se,
						adLinkContent: it
					})), Oe && Ge && Qe && r.a.createElement("div", {
						className: Ee.a.modModeBannerWrapper
					}, r.a.createElement(V.a, {
						thing: Se
					})), Oe && Ge && Je && r.a.createElement("div", {
						className: Ee.a.modModeBannerWrapper
					}, r.a.createElement(W.a, {
						onIgnoreReports: je,
						reportable: Se
					})), Object(ue.b)(Se) && r.a.createElement(b.a, {
						post: Se
					}), r.a.createElement(R.d, null), Te && r.a.createElement(L.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !1,
						thing: Se,
						tooltipType: ie ? ge.c.Lightbox : void 0
					}), r.a.createElement("div", {
						className: Ee.a.flatListContainer
					}, r.a.createElement(M.a, {
						className: Ee.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Ke,
						model: Se,
						onVoteClick: e.handleVote
					}), !Se.isSurveyAd && r.a.createElement(A.c, {
						currentUser: a,
						hasModFlairPerms: qe,
						hasModFullPerms: ze,
						hasModPostPerms: Ge,
						hostPostData: j,
						isCommentCountAnimation: be,
						isCountAnimShadowTestEnabled: fe,
						isLargePost: !0,
						isOverlay: !!ie,
						listingKey: ve,
						modModeEnabled: Oe,
						onClickInsightsButton: ut,
						onIgnoreReports: je,
						onOpenReportsDropdown: we,
						post: Se,
						shouldShowInsightsButton: _e,
						showEditPost: Ze,
						showEditFlair: Me,
						useFlatlistBreakpoints: Object(J.b)({
							editPost: !1,
							save: !He,
							hide: !1,
							report: !1
						})
					})), Be && lt && r.a.createElement(F.a, {
						className: Ee.a.creatorStatsContainer,
						post: Se,
						subreddit: Be,
						isProfileStats: !0
					})), X && r.a.createElement(T.a, {
						post: Se,
						postIds: null != Ve ? Ve : [],
						subredditId: null == Be ? void 0 : Be.id
					})))
				});
			Ne.displayName = "LargePostMemoized";
			t.default = Object(ae.b)(Ie(Object(ne.b)(Ne)))
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
				u = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				p = s.n(u);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: r,
					post: u,
					subredditOrProfile: b
				} = e;
				return n.a.createElement("div", {
					className: Object(i.a)(p.a.container, t)
				}, n.a.createElement(c.a, {
					className: p.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: b.url
				}, n.a.createElement(d.b, {
					className: p.a.subredditIcon,
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
						className: p.a.CrosspostIcon
					}))
				})(u.author, s), b && b.isQuarantined && n.a.createElement(a.a, null))
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
				videoStyles: "LAwAnSnoexNeHoqZmXdLD",
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
						className: u
					} = e;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
					className: Object(n.a)(l.a.notificationButton, u),
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
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
				a = s.n(i);

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
					...i
				} = e;
				return r.a.createElement("div", d({
					className: Object(n.a)(a.a.border, {
						[a.a.isFirst]: s,
						[a.a.isLast]: o
					}, t)
				}, i))
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
				r = s.n(o),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/constants/gold.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/components/CommentContainer/index.tsx"),
				p = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				b = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				x = s("./src/reddit/selectors/communityAwards.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				O = s.n(P);
			const g = m.a.div("ProfileOwnerCommentWrapper", O.a),
				y = m.a.div("CommentContentWrapper", O.a),
				C = m.a.div("Wrapper", O.a),
				j = m.a.div("CommentSeparator", O.a),
				w = Object(a.b)(() => Object(d.c)({
					comment: (e, t) => Object(f.b)(e, t),
					isAwarded: (e, t) => {
						const s = Object(f.b)(e, t);
						return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
							const s = Object(x.a)(e, t);
							return s && s.coinPrice >= c.g
						})
					},
					isNightmodeOn: v.db
				}), e => ({
					openPost: t => e(Object(b.L)(t))
				}));
			class E extends i.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: s,
						openPost: o,
						isAwarded: n,
						isFirst: a,
						isLast: d,
						isNightmodeOn: c,
						profileName: m,
						showModTools: p
					} = this.props, b = m === e.author ? S : I;
					return i.a.createElement(u.a, {
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
					}, i.a.createElement(C, {
						className: Object(l.a)({
							[O.a.isFirst]: a,
							[O.a.isLast]: d,
							[O.a.isAwarded]: n,
							[O.a.isNightmodeOn]: c
						})
					}, r()(s + 1, e => i.a.createElement(j, {
						key: e
					})), i.a.createElement(y, null, b(t, m, p))))
				}
			}
			const S = (e, t, s) => i.a.createElement(g, null, I(e, t, s, !0, !0)),
				I = function(e, t, s) {
					let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						r = arguments.length > 4 ? arguments[4] : void 0;
					return i.a.createElement(p.a, {
						commentId: e,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: o,
						showModTools: s,
						isExpanded: !!r
					})
				};
			t.a = w(E)
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
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/NotificationButton/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/SubredditIcon/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				h = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				f = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/OutboundLink/index.tsx"),
				P = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				g = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Subreddit/index.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/PostTopLine/index.m.less"),
				w = s.n(j);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: r,
					hideAwards: j,
					hideNSFWPref: E,
					hostPostData: S,
					iconClassName: I,
					inSubredditOrProfile: N,
					isCommentsPage: k,
					isCompactPinnedPost: _,
					isCurrentUserProfilePost: L,
					isModWithUserNotesPermissions: T,
					isOverlay: M,
					isTopicPage: F,
					listingKey: B,
					post: A,
					shouldShowSubscribeButton: R,
					showCornerOutboundLink: V,
					showSubreddit: U,
					showSubredditIcon: W,
					subredditOrProfile: D,
					isFollowed: K,
					shouldShowFollowButton: G,
					onFollowPostClick: H
				} = e;
				const q = j || F,
					z = D && Object(y.h)(D),
					J = Object(i.e)(e => {
						if (!z) return !0;
						const t = Object(C.Gb)(e, A.author || "");
						return !t || t.enableFollowers
					});
				return n.a.createElement("div", {
					className: Object(a.a)(w.a.container, t)
				}, U && D && n.a.createElement("div", {
					className: w.a.subredditIconWrapper
				}, n.a.createElement(b.a, {
					"data-click-id": "subreddit",
					to: D.url
				}, W && n.a.createElement(p.b, {
					className: Object(a.a)(w.a.subredditIcon, I),
					shouldHideNsfwIcon: E,
					subredditOrProfile: D
				}))), n.a.createElement("div", {
					className: w.a.everythingElseWrapper
				}, U && n.a.createElement(c.h, {
					type: A.belongsTo.type,
					id: A.belongsTo.id
				}), n.a.createElement(u.d, {
					className: w.a.postTopMeta,
					forceOpenInNewTab: r,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: T,
					tooltipType: M ? u.c.Lightbox : void 0,
					post: A,
					showSub: U,
					subredditOrProfile: D
				}), n.a.createElement(m.a, {
					className: w.a.postBadges,
					displayText: D ? D.displayText : null,
					inSubredditOrProfile: N,
					isCompactPinnedPost: _,
					post: A,
					tooltipType: M ? u.c.Lightbox : void 0
				}), !q && n.a.createElement(d.a, {
					isPostDetail: k,
					thing: A,
					tooltipType: M ? u.c.Lightbox : void 0
				})), D && J && U && R && !L && n.a.createElement(h.a, {
					className: w.a.SubscribeButton,
					getEventFactory: e => Object(P.h)(A.id, e ? "unsubscribe" : "subscribe", "post", B, S),
					identifier: {
						name: D.name,
						type: z ? f.a.PROFILE : f.a.SUBREDDIT
					},
					postId: A.id,
					size: x.d.XS
				}), V && n.a.createElement(v.b, {
					isSponsored: A.isSponsored,
					postId: A.id,
					href: Object(g.D)(A),
					source: A.source
				}, n.a.createElement(O.a, {
					className: w.a.outboundLinkIcon
				})), G && J && n.a.createElement(l.a, {
					isFilled: !!K,
					onClick: H,
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
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return C
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
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/components/PostList/Placeholder.tsx"),
				x = s("./src/reddit/featureFlags/index.ts"),
				v = s("./src/reddit/selectors/experiments/survey.ts"),
				P = s("./src/reddit/selectors/listings.ts"),
				O = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/tracking.ts");

			function C() {
				return Object(p.u)({
					currentProfileName: p.i,
					isCommentPermalink: p.w,
					isCommentsPage: p.x,
					isFrontpage: p.A,
					isProfilePostListing: p.L,
					isTopicPage: p.Q,
					pageLayer: e => e
				})
			}
			const j = C(),
				w = {
					apiError: P.c,
					apiPending: P.d,
					measureScrollFPS: x.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.R)(e, t),
					loadMore: P.g,
					postsById: O.S,
					postIds: Object(n.a)((e, t) => {
						let {
							listingKey: s,
							listingName: o,
							inSubredditOrProfile: r
						} = t;
						return Object(O.D)(e, s, o, r)
					}),
					subredditsById: g.Z,
					viewportDataLoaded: y.a,
					pageReferrer: p.U,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: v.e
				},
				E = Object(r.c)(w),
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
						})), e(c.L(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(c.z(t, s))
					},
					trackOnPostEnteredViewport: (t, s, o, r) => {
						e(c.O(t, o, r))
					},
					trackOnPostExitedViewport: (t, s, o, r, n) => {
						e(c.P(t, o, r, n))
					},
					showModalOnScroll: () => e(c.cb()),
					surveyTriggerScrollCounted: () => e(Object(m.l)())
				}),
				I = e => Object(b.b)({
					...e
				}),
				N = (e, t, s, o) => {
					const {
						listingKey: r,
						hostPostData: n,
						listingBelowVariant: i
					} = o;
					return Object(h.h)(e, t, "post", r, n, i, void 0)
				},
				k = Object(o.b)(E, S, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: I,
					postClickEventFactory: N
				}));
			t.a = e => Object(u.c)(j(k(e)))
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
				u = s("./src/reddit/selectors/postFlair.ts"),
				p = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(o.b)(() => Object(r.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: c.V,
				hideNSFWPref: b.F,
				isActive: p.j,
				moderatorPermissions: m.m,
				modModeEnabled: c.T,
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
							selectedTemplateId: r
						} = t;
						return e(Object(i.h)({
							post: s,
							previewFlair: o,
							selectedTemplateId: r
						}))
					},
					handleVote: t => {
						const o = t === d.a.upvoted ? Object(n.kb)(s) : Object(n.w)(s);
						e(o)
					},
					onIgnoreReports: () => e(Object(n.gb)(s)),
					onOpenReportsDropdown: t => e(Object(a.h)({
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
						selectedTemplateId: r
					} = e;
					return t.dispatchFlairChanged({
						post: s.post,
						previewFlair: o,
						selectedTemplateId: r
					})
				}
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
		"./src/reddit/hooks/promo/useIsPromoShown.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./src/reddit/constants/promo.ts"),
				r = s("./src/reddit/hooks/usePromoContext.ts");

			function n(e) {
				const {
					promos: t
				} = Object(r.a)();
				return !!e && t.get(e) === o.a.Shown
			}
		},
		"./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");

			function n(e) {
				const t = Object(o.e)(r.a) === e,
					s = Object(o.e)(r.c) === e,
					n = Object(o.e)(r.e) === e;
				return t || s || n
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
				m = s("./src/reddit/helpers/localStorage/index.ts"),
				u = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/promo/withShowSignupUpsell.tsx"),
				f = s("./src/reddit/actions/pages/profileOverview/index.ts"),
				x = s("./src/reddit/actions/pages/profileShared.ts"),
				v = s("./src/reddit/actions/profileConversations.ts"),
				P = s("./src/reddit/components/ContentGate/index.tsx"),
				O = s("./src/reddit/components/CreatorStats/EducationUnit.tsx"),
				g = s("./src/reddit/components/EmptyProfile/index.ts"),
				y = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				C = s("./src/reddit/components/JumpToContent/index.tsx"),
				j = s("./src/reddit/components/PostList/index.tsx"),
				w = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/lib/classNames/index.ts"),
				S = s("./src/lib/isPinnedAdminPost/index.ts"),
				I = s("./src/lib/lessComponent.tsx"),
				N = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				k = s("./node_modules/lodash/last.js"),
				_ = s.n(k);
			var L = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				T = s("./src/reddit/selectors/posts.ts"),
				M = s("./src/reddit/components/ClassicPost/index.tsx"),
				F = s("./src/reddit/components/LargePost/index.tsx"),
				B = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				A = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				R = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				V = s("./src/reddit/selectors/profile.ts"),
				U = s("./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less"),
				W = s.n(U);
			const {
				fbt: D
			} = s("./node_modules/fbt/lib/FbtPublic.js"), K = I.a.div("ExtraCommentsItemWrapper", W.a), G = I.a.p("ExtraComments", W.a), H = I.a.wrapped(G, "ExtraCommentsInteractive", W.a);
			var q = Object(a.b)(() => Object(d.c)({
					extraCommentsItem: V.c,
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
						extraCommentsClicked: t => e(Object(v.g)(s, t.postId, t.id))
					}
				})(e => {
					let {
						extraCommentsClicked: t,
						extraCommentsItem: s,
						extraCommentsPending: o
					} = e;
					return i.a.createElement(K, null, o ? i.a.createElement(G, null, D._("Loading...", null, {
						hk: "47z90C"
					})) : i.a.createElement(R.a.Consumer, null, e => i.a.createElement(H, {
						onClick: e => {
							t(s), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, D._("Load more comments", null, {
						hk: "1jXJxb"
					}))))
				}),
				z = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				J = s("./src/reddit/contexts/Post/index.tsx"),
				Q = s("./src/reddit/hooks/useTheme.ts"),
				X = s("./src/reddit/constants/postLayout.ts"),
				Z = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Y = s.n(Z),
				$ = s("./src/reddit/components/OverviewConversationsPost/index.m.less"),
				ee = s.n($);

			function te() {
				return (te = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const se = I.a.div("BackgroundWrapper", ee.a),
				oe = I.a.wrapped(M.default, "ClassicPost", ee.a),
				re = I.a.wrapped(B.a, "OverviewCommentPost", ee.a),
				ne = Object(a.b)(() => Object(d.c)({
					commentThreadLinkSets: (e, t) => {
						let {
							postId: s,
							currentProfileName: o
						} = t;
						const r = o ? o.toLowerCase() : "",
							n = Object(N.a)(s, r);
						return e.pages.profileOverview.conversations.keyToCommentThreadLinkSets[n]
					},
					headComment: (e, t) => {
						let {
							postId: s,
							currentProfileName: o
						} = t;
						const r = o ? o.toLowerCase() : "",
							n = Object(N.a)(s, r);
						return e.pages.profileOverview.conversations.keyToHeadCommentId[n]
					},
					isInitiallyPinned: (e, t) => {
						let {
							postId: s,
							currentProfileName: o
						} = t;
						return !!o && Object(T.p)(e, s, o)
					},
					isPinned: (e, t) => {
						let {
							postId: s,
							currentProfileName: o
						} = t;
						return !!o && Object(T.r)(e, s, o)
					},
					profileName: (e, t) => {
						let {
							currentProfileName: s
						} = t;
						if (s) return ((e, t) => {
							const {
								users: s
							} = e, o = t.toLowerCase(), r = s.models[o];
							return r ? r.username : void 0
						})(e, s)
					},
					layout: p.R
				})),
				ie = I.a.wrapped(F.default, "OverviewLargePost", ee.a),
				ae = ne(e => {
					const {
						availableWidth: t,
						className: s,
						commentThreadLinkSets: o,
						eventFactory: r,
						forceLoadMedia: n,
						headComment: a,
						isInitiallyPinned: d,
						isPinned: c,
						isProfileCreatorStatsEnabled: l,
						isScrolling: m,
						last: u,
						layout: p,
						onClickPost: b,
						onSizeChanged: h,
						pageLayer: f,
						post: x,
						postId: v,
						profileName: P,
						scrollerItemRef: O,
						userIsOp: g
					} = e, y = {
						last: u,
						onClickPost: b,
						postId: v
					};
					if (!P) return null;
					const C = P === x.author,
						j = Object(S.a)(c, x.distinguishType);
					if (!C && !a && !j) return null;
					const w = a ? function(e) {
							const t = [],
								s = e.length;
							for (let o = 0; o < s; o++) {
								(0 === o || e[o - 1].depth !== e[o].depth - 1) && t.push([]), _()(t).push(e[o])
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
						I = w.length - 1,
						N = g && l;
					return i.a.createElement("div", {
						className: Object(E.a)(Y.a.largeAndMediumActiveStyles, Y.a.largeAndMediumPostStyles, ee.a.OverviewConversationsPost, s),
						style: {
							...Object(L.b)(),
							...Object(L.d)(e)
						}
					}, i.a.createElement(A.a, {
						className: N ? ee.a.shouldShowOverflow : void 0,
						isFirst: !0,
						isLast: I < 0,
						key: x.id
					}, !C && !!a && i.a.createElement(re, te({}, y, {
						commentId: a,
						key: x.id,
						profileName: P
					})), (C || j) && (p === X.g.Classic ? i.a.createElement(oe, {
						availableWidth: t,
						eventFactory: r,
						inSubredditOrProfile: !1,
						isOverlay: !1,
						isScrolling: m,
						forceLoadMedia: n,
						last: u,
						onClickPost: b,
						onSizeChanged: h,
						pageLayer: f,
						postId: v,
						scrollerItemRef: O
					}) : i.a.createElement(ie, {
						availableWidth: t,
						eventFactory: r,
						isScrolling: m,
						isFrontpage: !1,
						forceLoadMedia: n,
						last: u,
						onClickPost: b,
						onSizeChanged: h,
						pageLayer: f,
						postId: v,
						scrollerItemRef: O,
						shouldShowInsightsButton: N
					}))), i.a.createElement(se, {
						style: {
							background: Object(L.e)(e)
						}
					}, !d && w.map((e, t) => i.a.createElement(A.a, {
						isLast: t === I,
						key: `${t}-isLast[${t===I}]`
					}, e.map((t, s) => {
						const o = 0 === s,
							r = s === e.length - 1;
						return "comment" === t.type ? i.a.createElement(z.a, {
							commentId: t.id,
							depth: t.depth,
							isFirst: o,
							isLast: r,
							key: t.id,
							profileName: P,
							showModTools: !0
						}) : i.a.createElement(q, {
							extraCommentsId: t.id,
							key: t.id,
							profileName: P
						})
					})))))
				});
			var de = Object(J.b)((function(e) {
					var t;
					const s = Object(Q.a)(),
						o = Object(p.fb)();
					return i.a.createElement(ae, te({
						theme: null !== (t = e.theme) && void 0 !== t ? t : s,
						currentProfileName: Object(p.i)(o),
						pageLayer: o
					}, e))
				})),
				ce = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				le = s("./src/reddit/helpers/trackers/post.ts"),
				me = s("./src/reddit/selectors/tracking.ts"),
				ue = s("./src/reddit/connectors/PostList/index.ts");
			const pe = Object(d.c)({
					...ue.d,
					postIds: T.O,
					viewportDataLoaded: me.a
				}),
				be = Object(ue.c)(),
				he = Object(a.b)(pe, ue.b, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(le.h)(e, t),
					postComponentForLayout: e => {
						let {
							post: t
						} = e;
						return t.isBlank ? ce.a : de
					}
				}));
			var fe = (e => Object(w.c)(be(he(e))))(j.a),
				xe = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				ve = s("./node_modules/lodash/debounce.js"),
				Pe = s.n(ve),
				Oe = s("./src/reddit/actions/post.ts"),
				ge = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				ye = s("./src/lib/isUrl/index.ts"),
				Ce = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				je = s("./src/reddit/components/Media/index.tsx"),
				we = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				Ee = s("./src/reddit/components/PostContainer/index.tsx"),
				Se = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				Ie = s("./src/reddit/components/PostTitle/index.tsx"),
				Ne = s("./src/reddit/connectors/miniCardPost.ts"),
				ke = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				_e = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Le = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Te = s("./src/reddit/models/Media/index.ts"),
				Me = s("./node_modules/fbt/lib/FbtPublic.js"),
				Fe = s("./src/reddit/components/CommentsLink/index.tsx"),
				Be = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				Ae = s("./src/reddit/components/Flatlist/index.tsx"),
				Re = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				Ve = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				Ue = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				We = s("./src/reddit/components/ShareMenu/index.tsx"),
				De = s("./src/reddit/icons/fonts/Share/index.tsx"),
				Ke = s("./src/reddit/models/User/index.ts"),
				Ge = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				He = s.n(Ge);
			const qe = "-MiniCardModMenu",
				ze = "-MiniCardOverflowMenu",
				Je = "-MiniCardShareMenu",
				Qe = I.a.wrapped(Be.a, "HorizontalVotes", He.a),
				Xe = I.a.button("ShareButton", He.a),
				Ze = Object(p.u)({
					currentProfileName: p.i,
					isCommentPermalink: p.w,
					isCommentsPage: p.x,
					isProfilePostListing: p.L,
					pageLayer: e => e
				}),
				Ye = Object(d.c)({
					layout: p.R,
					subreddit: p.r
				});
			var $e = Ze(Object(a.b)(Ye, {})(Object(w.c)(e => {
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
						isProfilePostListing: u,
						isSticky: p,
						layout: b,
						modModeEnabled: h,
						onCommentsClick: f,
						post: x,
						sendEvent: v,
						showEditFlair: P,
						showEditPost: O,
						subreddit: g
					} = e, y = e => v(Object(le.h)(x.id, e)), C = x.postId, j = Object(Ae.d)(qe, x.id, m, p), w = !!o && Object(Ke.e)(o) === x.author;
					return i.a.createElement("div", {
						className: Object(E.a)(He.a.flatlistContainer, s)
					}, i.a.createElement(Qe, {
						compact: !1,
						model: x,
						onVoteClick: r,
						scoreClassName: He.a.score
					}), i.a.createElement(Fe.a, {
						hasModPostPerms: d,
						isCommentsPage: c,
						isCommentPermalink: l,
						isOverlay: m,
						postId: x.id,
						modModeEnabled: h,
						numComments: x.numComments,
						type: X.g.Compact,
						onClick: f
					}), i.a.createElement(We.a, {
						className: He.a.shareMenu,
						dropdownId: Object(Ae.d)(Je, x.id, m, p),
						permalink: x.permalink,
						post: x,
						sendEventWithName: y,
						subredditType: null == g ? void 0 : g.type
					}, i.a.createElement(Xe, null, i.a.createElement(De.a, {
						className: He.a.shareIcon
					}), i.a.createElement("span", {
						className: He.a.shareText
					}, Me.fbt._("share", null, {
						hk: "mmJV5"
					})))), d && i.a.createElement(Re.a, {
						dropdownId: j,
						onClick: () => y("post_mod_action_menu")
					}, i.a.createElement(Ae.b, {
						className: He.a.modActionsIcon
					}), i.a.createElement(Ve.a, {
						canEditFlair: n && !!P,
						hasModPostPerms: d,
						hasModFullPerms: a,
						isOverlay: !!m,
						isPostAuthor: w,
						modModeEnabled: h,
						post: x,
						tooltipId: j
					})), i.a.createElement(Ue.a, {
						currentProfileName: t,
						isCommentsPage: c,
						isOverlay: !!m,
						isProfilePostListing: u,
						layout: b,
						pageLayer: e.pageLayer,
						permalink: x.permalink,
						postId: C,
						dropdownId: Object(Ae.d)(ze, x.id, m, p),
						isFixed: p,
						sendEvent: v,
						showEditPost: !!O,
						showEditFlair: !!P,
						useFlatlistBreakpoints: Object(Ue.b)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1
						})
					}))
				}))),
				et = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				tt = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				st = s("./src/reddit/components/MiniCardPost/index.m.less"),
				ot = s.n(st);
			var rt = Object(p.u)()(Object(J.b)(Object(Ne.a)(Object(ge.a)(e => {
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
						moderatorPermissions: u,
						modModeEnabled: p,
						onClickPost: b,
						post: h,
						scrollerItemRef: f,
						shouldPause: x,
						showMetaLine: v = !0,
						showEditFlair: P,
						subredditOrProfile: O,
						userIsOp: g
					} = e, {
						media: y
					} = r || h, C = y && y.type, j = Object(Se.b)(h.id), w = C === Te.o.RTJSON, S = g && w, I = Object(Le.a)(u), N = Object(ke.a)(u), k = Object(_e.a)(u), _ = y && C !== Te.o.RTJSON && C !== Te.o.TEXT, T = C === Te.o.VIDEO || C === Te.o.GIFVIDEO || C === Te.o.LIVEVIDEO, M = !y && !!h.source && Object(ye.a)(h.source.url), F = y && i.a.createElement(je.a, {
						autoplayPref: t,
						availableWidth: s,
						className: ot.a.media,
						imageBoxClassName: Object(E.a)(ot.a.mediaImageBox, {
							[ot.a.videoStyles]: T
						}),
						imageBoxContentImageClassName: ot.a.mediaImageBoxContentImage,
						forceAspectRatio: Te.c,
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
					return i.a.createElement(Ee.a, {
						className: Object(E.a)(ot.a.postContainer, Y.a.largeAndMediumActiveStyles, Y.a.largeAndMediumPostStyles, Object(L.a)(e), o),
						style: {
							...Object(L.b)(e.flairStyleTemplate),
							...Object(L.d)(e)
						},
						post: h,
						onClick: b,
						eventFactory: d
					}, i.a.createElement(we.a, {
						className: ot.a.backgroundWrapper,
						flairStyleTemplate: c
					}, _ && F, i.a.createElement("div", {
						className: ot.a.innerContainer
					}, M && i.a.createElement(tt.a, {
						post: h,
						templatePlaceholderImage: c ? c.postPlaceholderImage : void 0
					}), i.a.createElement(Ie.c, {
						className: ot.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: h,
						size: Ie.b.Large,
						titleColor: c && c.postTitleColor
					}), v && O && i.a.createElement(et.a, {
						className: ot.a.metaLine,
						crosspostSubredditOrProfile: n,
						hideNSFWPref: m,
						post: h,
						subredditOrProfile: O
					}), !_ && i.a.createElement("div", {
						className: ot.a.mediaWrapper
					}, F), i.a.createElement("div", {
						className: ot.a.flexSpacer
					}), i.a.createElement($e, {
						currentUser: a,
						handleVote: e.handleVote,
						hasModFlairPerms: N,
						hasModFullPerms: k,
						hasModPostPerms: I,
						modModeEnabled: p,
						post: h,
						showEditFlair: P,
						showEditPost: S
					}))), e.activeModalId === j && i.a.createElement(Se.a, {
						flairs: h.flair,
						subredditId: h.belongsTo.id,
						modalId: j,
						onFlairChanged: e.onFlairChanged
					}), i.a.createElement(Ce.d, null))
				})))),
				nt = s("./src/reddit/helpers/getClickInfo.ts"),
				it = s("./src/reddit/selectors/user.ts"),
				at = s("./src/reddit/icons/fonts/index.tsx"),
				dt = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less"),
				ct = s.n(dt);
			const {
				fbt: lt
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var mt = e => i.a.createElement("div", {
					className: Object(E.a)(ct.a.container, e.className)
				}, i.a.createElement(at.a, {
					name: "pin",
					className: ct.a.pin
				}), i.a.createElement("div", {
					className: ct.a.title
				}, lt._("Show off that karma!", null, {
					hk: "2yqUT7"
				})), e.children),
				ut = s("./src/reddit/controls/TextButton/index.tsx"),
				pt = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less"),
				bt = s.n(pt);
			const {
				fbt: ht
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var ft = e => i.a.createElement(mt, {
					className: Object(E.a)(bt.a.container, e.className)
				}, i.a.createElement("div", {
					className: bt.a.description
				}, ht._('Pin a post from your feed using the "..." at the bottom of each post', null, {
					hk: "4lkJRB"
				})), i.a.createElement(ut.a, {
					className: bt.a.gotIt,
					onClick: e.onGotItClick
				}, ht._("OK, I got it", null, {
					hk: "1JMx7x"
				}))),
				xt = s("./src/reddit/components/ProfilePinnedPosts/index.m.less"),
				vt = s.n(xt);
			const {
				fbt: Pt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ot = 320, gt = 300, yt = Object(d.c)({
				arePinnedPostsLoaded: T.a,
				currentUser: it.k,
				pinnedPostIds: T.P
			}), Ct = Object(a.b)(yt, e => ({
				openPost: t => e(Object(Oe.L)(t))
			}));
			class jt extends i.a.Component {
				constructor() {
					super(...arguments), this.containerRef = null, this.state = {
						showEducation: !1,
						pauseMedia: !1
					}, this.setContainerRef = e => this.containerRef = e, this.handleScroll = Pe()(() => {
						if (!this.containerRef) return;
						const e = this.containerRef.getBoundingClientRect();
						e.bottom < gt ? this.pauseMedia() : e.top > 0 && this.playMedia()
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
						Object(m.Nb)(), this.setState({
							showEducation: !1
						})
					}, this.onClickPost = (e, t) => {
						this.props.openPost({
							postOrComment: t,
							clickInfo: Object(nt.a)(e)
						})
					}, this.renderPost = e => i.a.createElement(rt, {
						postId: e,
						key: e,
						availableWidth: Ot,
						className: Object(E.a)(vt.a.item, vt.a.miniCardPost),
						forceLoadMedia: !this.state.pauseMedia,
						onClickPost: this.onClickPost,
						shouldPause: this.state.pauseMedia
					})
				}
				componentDidMount() {
					this.setState({
						showEducation: !Object(m.L)()
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
					const o = !!this.props.currentUser && this.props.profileName === Object(Ke.e)(this.props.currentUser),
						r = t.length > 0,
						n = !r && this.state.showEducation && o;
					if (!r && !n) return null;
					const a = o && this.props.pinnedPostIds.length % 2 != 0;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: vt.a.title
					}, Pt._("Pinned posts", null, {
						hk: "3prRc3"
					})), n ? i.a.createElement(ft, {
						className: Object(E.a)(vt.a.item, vt.a.education),
						onGotItClick: this.onGotItClick
					}) : i.a.createElement("div", {
						ref: this.setContainerRef,
						className: vt.a.container
					}, t.map(this.renderPost), a && i.a.createElement(mt, {
						className: vt.a.item
					})), s)
				}
			}
			var wt = Object(p.u)()(Ct(jt)),
				Et = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				St = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				It = s("./src/reddit/helpers/name/index.ts"),
				Nt = s("./src/reddit/helpers/trackers/screenview.ts"),
				kt = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				_t = s("./src/reddit/layout/page/Listing/index.tsx"),
				Lt = s("./src/reddit/models/ContentGate.ts"),
				Tt = s("./src/reddit/pages/ErrorPages/index.tsx"),
				Mt = s("./src/reddit/pages/ProfileBlockInterstitial/index.tsx"),
				Ft = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				Bt = s("./src/reddit/selectors/experiments/creatorStats.ts"),
				At = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");

			function Rt() {
				return (Rt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Vt = (e, t) => {
					let {
						location: s
					} = t;
					return r()([...Object(c.a)(s.search)])
				},
				Ut = Object(p.u)(),
				Wt = Object(d.c)({
					isProfileCreatorStatsEnabled: Bt.b,
					isOwnProfile: p.E,
					over18Prefs: it.kb,
					layout: p.R
				}),
				Dt = Object(d.a)(Wt, Vt, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.profileName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(V.j)(e, {
						profileName: s.params.profileName
					})
				}, (e, t) => Object(x.a)(e, Vt(0, t)), (e, t) => {
					let {
						match: s
					} = t;
					return !Object(T.n)(e, {
						profileName: s.params.profileName
					})
				}, it.Q, (e, t) => {
					let {
						match: s
					} = t;
					return Object(it.f)(e, b.jc + s.params.profileName)
				}, At.a, (e, t) => {
					let {
						match: s
					} = t;
					return {
						isProfileBlockInterstitialEnabled: Object(Ft.b)(e),
						isBlocked: Object(it.L)(e, {
							profileName: s.params.profileName
						})
					}
				}, (e, t, s, o, r, n, i, a, d, c) => {
					let {
						sort: l,
						t: m
					} = r, {
						isProfileBlockInterstitialEnabled: p,
						isBlocked: h
					} = c;
					var f;
					const x = b.ub,
						v = Object(u.a)(s, x, l, t),
						{
							sort: P
						} = t;
					return {
						contentGateInfo: a,
						isLoggedIn: i,
						isProfileNSFW: !!o && o.isNSFW,
						listingKey: v,
						profileName: s,
						shouldShowPinnedPostsSection: n && !P,
						sort: l,
						timeSort: m,
						isEligibleForNsfwSignupUpsellTreatment: d,
						avatar: null === (f = null == o ? void 0 : o.icon) || void 0 === f ? void 0 : f.url,
						isProfileBlockInterstitialEnabled: p,
						isBlocked: h,
						...e
					}
				}),
				Kt = Object(a.b)(Dt, (e, t) => ({
					onLoadMoreConversationsItems: () => e(v.h({
						profileName: t.match.params.profileName,
						sort: t.match.params.sort
					})),
					onLayoutChange: () => e(Object(f.profileOverviewRequested)({
						...t.match,
						queryParams: r()([...Object(c.a)(t.location.search)])
					}))
				}));
			class Gt extends i.a.Component {
				constructor(e) {
					super(e), this.onStorage = () => {
						this.setState({
							showPostStatsUnit: Object(m.K)() <= 2
						})
					}, this.renderNoPosts = () => i.a.createElement(g.c, {
						profileName: this.props.profileName,
						timeSort: this.props.timeSort
					}), this.getInjectChildren = () => {
						const e = {};
						return this.state.showPostStatsUnit && this.props.isOwnProfile && this.props.isProfileCreatorStatsEnabled && (e[0] = {
							estHeight: 76,
							id: "post-stats-info-overview",
							render: () => i.a.createElement(O.a, null)
						}), e
					}, this.state = {
						showPostStatsUnit: !1
					}
				}
				componentDidMount() {
					window.addEventListener("storage", this.onStorage), this.setState({
						showPostStatsUnit: Object(m.K)() <= 2
					})
				}
				componentWillUnmount() {
					window.removeEventListener("storage", this.onStorage)
				}
				UNSAFE_componentWillUpdate(e) {
					this.props.layout !== e.layout && e.onLayoutChange()
				}
				render() {
					const {
						contentGateInfo: e,
						over18Prefs: t,
						isOwnProfile: s,
						isProfileNSFW: o,
						listingKey: r,
						onLayoutChange: n,
						pageLayer: a,
						profileName: d,
						sort: c,
						shouldShowPinnedPostsSection: m,
						showSignupUpsell: u,
						timeSort: p,
						isEligibleForNsfwSignupUpsellTreatment: h,
						avatar: f,
						isProfileBlockInterstitialEnabled: x,
						isBlocked: v
					} = this.props;
					if (!a) return null;
					if (e && e.profileDeleted) return i.a.createElement(P.default, {
						contentGateType: Lt.a.ProfileDeleted,
						profileName: d
					});
					if (e && e.profileSuspended) return i.a.createElement(P.default, {
						contentGateType: Lt.a.ProfileSuspended,
						profileName: d
					});
					if (451 === a.status || e && e.profileBlockedForLegalReason) return i.a.createElement(P.default, {
						contentGateType: Lt.a.ProfileBlockedForLegalReason,
						profileName: d
					});
					const O = a.queryParams && "true" === a.queryParams.consent;
					if (403 === a.status || v && !O) return x ? i.a.createElement(Mt.a, {
						username: d,
						avatar: f
					}) : i.a.createElement(Tt.a, null);
					if (404 === a.status) return i.a.createElement(P.default, {
						contentGateType: Lt.a.ProfileDoesNotExist,
						profileName: d
					});
					if (!d) return null;
					const g = d.toLowerCase(),
						j = `/user/${d}/`,
						w = {
							listingKey: r,
							listingName: g
						};
					if (o && !s && h) return i.a.createElement(St.a, {
						contentTitle: Object(It.d)(d)
					});
					if (!t && o && !s) return i.a.createElement(P.default, {
						subredditName: d,
						contentGateType: Lt.a.Nsfw
					});
					const E = {
							inSubredditOrProfile: !Object(l.a)(d),
							listingKey: r,
							listingName: g,
							listingViewed: (e, t) => Object(Nt.q)(r, c, t, e, p),
							noPostsComponent: this.renderNoPosts,
							onScroll: u,
							onTryAgain: n
						},
						S = {
							sort: c,
							baseUrl: j,
							sortOptions: b.Ab,
							timeSort: p
						},
						I = i.a.createElement(i.a.Fragment, null, m && i.a.createElement(wt, {
							profileName: d
						}), i.a.createElement(y.a, S), i.a.createElement(fe, Rt({}, E, {
							getInjectChildren: this.state.showPostStatsUnit && this.props.isOwnProfile && this.props.isProfileCreatorStatsEnabled ? this.getInjectChildren : void 0,
							excludePinnedPosts: m,
							onLoadMore: this.props.onLoadMoreConversationsItems,
							isProfileCreatorStatsEnabled: this.props.isProfileCreatorStatsEnabled && this.props.isOwnProfile
						})));
					return i.a.createElement(_t.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(xe.a, {
							profileName: d,
							viewBlockedConsent: O
						})),
						content: i.a.createElement(i.a.Fragment, null, i.a.createElement(C.a, null), I),
						sidebar: i.a.createElement(Et.a, Rt({}, w, {
							profileName: d
						}))
					})
				}
			}
			t.default = Ut(Kt(Object(h.a)(Object(kt.d)(Gt))))
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
					experimentName: o.Cc
				});
				return !(!t || Object(o.Cf)(t))
			}
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
				r = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/meta.ts"),
				a = s("./src/reddit/selectors/experiments/index.ts");
			const d = Object(o.a)(i.g, i.d, a.e, (e, t, s) => !e && !t && !s);

			function c(e, t) {
				return s => Object(n.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: d,
					throttledVariants: {
						[r.gc.Bottom_cell_dismissible]: e,
						[r.gc.Bottom_cell_dismissible_immediate_trigger]: e,
						[r.gc.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = c(r.sb, !0),
				m = c(r.tb, !0),
				u = c(r.ub, !0),
				p = c(r.sb, !1),
				b = c(r.tb, !1),
				h = c(r.ub, !1)
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
				return u
			})), s.d(t, "j", (function() {
				return p
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "c", (function() {
				return P
			})), s.d(t, "g", (function() {
				return O
			})), s.d(t, "d", (function() {
				return g
			}));
			var o = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/featureFlags/index.ts"),
				n = s("./src/reddit/selectors/posts.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const d = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(i.S)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				c = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				m = [],
				u = Object(o.a)((e, t) => {
					const s = p(e, t);
					if (!s) return m;
					const o = Object(i.W)(e, {
						subredditName: s.name
					});
					return o && o.postIds && o.postIds.length ? o.postIds : m
				}),
				p = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(i.S)(e, {
						subredditId: s
					}) : null
				},
				b = (e, t, s, o, r) => {
					const i = r.find(e => e <= t) || -1,
						a = r.find(e => e > t) || 1 / 0;
					return t !== a && t !== i && (!(i + s > t) && (!(t + s > a) && !((e, t, s) => {
						const o = s[t - 1],
							r = s[t],
							i = r && Object(n.G)(e, {
								postId: o
							}) || null,
							a = r && Object(n.G)(e, {
								postId: r
							}) || null;
						return i && i.isSponsored || a && a.isSponsored
					})(e, t, o)))
				},
				h = [3],
				f = Object(o.a)((e, t) => {
					let {
						existingDUPositions: s,
						listingProps: o
					} = t;
					const r = s.slice().sort();
					let i = -1;
					const a = Object(n.z)(e, {
							listingKey: o.listingKey
						}),
						d = [];
					return h.forEach(t => {
						let s = i + t;
						if (!(s >= a.length)) {
							for (; s < a.length && !b(e, s, t, a, r);) s += 1;
							s < a.length && (d.push(s), i = s)
						}
					}), d
				}),
				x = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				v = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				P = e => e.focusedVerticals.category,
				O = e => e.focusedVerticals.lastLoadedEnv,
				g = e => {
					const t = Object(a.P)(e),
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
					return Boolean(t) && !Object(r.Cf)(t)
				},
				d = Object(o.a)(a, n.d, (e, t) => e && !t)
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"9bf5e276ac63"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileOverview.9d51759d2d3b76622252.js.map