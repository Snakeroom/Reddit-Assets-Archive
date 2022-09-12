// https://www.redditstatic.com/desktop2x/ProfileOverview.da9a14fb8bd8224a3574.js
// Retrieved at 9/12/2022, 2:50:04 PM by Reddit Dataminer v1.0.0
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
				return f
			}));
			var o = s("./node_modules/react/index.js");

			function n() {
				return window
			}
			var r = s("./node_modules/lodash/debounce.js"),
				i = s.n(r),
				a = s("./src/reddit/constants/elementIds.ts"),
				d = s("./src/reddit/constants/experiments.ts"),
				c = s("./src/reddit/hooks/usePromoContext.ts"),
				l = s("./src/reddit/constants/promo.ts"),
				m = s("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts");
			var u = function() {
					const e = Object(m.a)(d.Nc.Bottom_cell),
						t = Object(m.a)(d.Nc.Bottom_cell_dismissible),
						s = Object(m.a)(d.Nc.Bottom_cell_dismissible_immediate_trigger),
						o = Object(m.a)(d.Nc.Bottom_cell_signup_upsell_copy),
						n = Object(m.a)(d.Nc.Bottom_cell_surprise_install_copy),
						r = Object(m.a)(d.Nc.Bottom_sheet);
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
						} = Object(c.a)(), s = u(), r = Object(p.a)(s), l = Object(m.a)(d.Nc.Bottom_cell_dismissible_immediate_trigger);
						return o.useMemo(() => i()(() => {
							if (!r && s) {
								const e = document.getElementById(a.e),
									o = e ? e.scrollTop : n().scrollY,
									r = n().innerHeight,
									i = r / 3,
									d = 2 * r;
								o >= (l ? i : d) && t(s)
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
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return P
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "b", (function() {
				return w
			}));
			var o, n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/performanceTimings/index.tsx"),
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
			const h = Object(n.a)(i.g),
				x = Object(n.a)(i.e),
				f = Object(n.a)(i.h),
				v = Object(n.a)(i.c),
				P = Object(n.a)(i.f),
				O = Object(n.a)(i.j),
				g = Object(n.a)(i.i),
				y = () => async (e, t, s) => {
					let {
						gqlContext: n
					} = s;
					const r = t(),
						i = Object(u.e)(r),
						c = Object(u.d)(r),
						p = Object(b.P)(r);
					if (i || !c) return;
					e(f());
					let P = !1;
					try {
						const t = p ? o.LoggedInGeo : o.LoggedOutGeo,
							s = await ((e, t, s) => Object(a.a)(e, {
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
							if (j(t)) {
								if (C(t)) {
									e(v({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), P = !0
								} else if (E(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: o,
											interactedSubreddit: n,
											category: r
										} = s.focusRecommendations[0],
										i = [o, n],
										a = Object(m.d)(i),
										d = Object(l.b)(i),
										c = Object(m.c)(o),
										u = {
											recommendedSubredditIds: [o.id],
											interactedSubredditIds: [n.id],
											subreddits: a,
											subredditsAboutInfo: d,
											subredditTopContent: c,
											category: r,
											lastLoadedEnv: "client"
										};
									e(h(u)), P = !0
								}
							} else P = !1
						}
					} catch (O) {
						P = !1
					}
					P || e(x({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, j = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, C = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, E = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						o = t && t.type;
					return !!(s && !C(e) && o === c.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, w = () => async (e, t, s) => {
					var o, n;
					const i = t(),
						a = Object(u.g)(i);
					if (Object(u.f)(i) || null === a || "client" === a) {
						const s = null === (n = null === (o = Object(p.b)(t())) || void 0 === o ? void 0 : o.routeMatch) || void 0 === n ? void 0 : n.route.chunk,
							a = Object(b.Q)(i);
						return Object(r.i)(() => e(y()), {
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
				return Ee
			})), s.d(t, "profileOverviewConversationsLoaded", (function() {
				return we
			})), s.d(t, "profileOverviewConversationsFailed", (function() {
				return Se
			})), s.d(t, "profileOverviewChronoPending", (function() {
				return ke
			})), s.d(t, "profileOverviewChronoLoaded", (function() {
				return Ne
			})), s.d(t, "profileOverviewChronoFailed", (function() {
				return Ie
			})), s.d(t, "profileOverviewConversationsRequested", (function() {
				return _e
			})), s.d(t, "profileOverviewRequested", (function() {
				return Le
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/lodash/pick.js"),
				n = s.n(o),
				r = s("./src/lib/constants/index.ts"),
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
				x = s("./src/reddit/constants/postLayout.ts"),
				f = s("./src/reddit/constants/parameters.ts"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				P = s("./src/reddit/selectors/listings.ts"),
				O = s("./src/reddit/selectors/profile.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				y = s("./src/lib/makeActionCreator/index.ts"),
				j = s("./src/reddit/actions/changeUsername.ts"),
				C = s("./src/reddit/actions/contentGate.ts"),
				E = s("./src/reddit/actions/externalAccount.ts"),
				w = s("./src/reddit/actions/gold/powerups.ts"),
				S = s("./src/reddit/actions/pinnedPost.ts"),
				k = s("./src/reddit/actions/platform.ts"),
				N = s("./src/reddit/actions/profile/index.ts"),
				I = s("./src/reddit/actions/trophyCase.ts"),
				_ = s("./src/reddit/constants/errors.ts"),
				L = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				T = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				M = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				F = s("./src/lib/initializeClient/installReducer.ts"),
				B = s("./node_modules/redux/es/redux.js"),
				A = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const V = {};
			var R = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V,
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
					error: R,
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
								token: n
							} = t.payload;
							return n ? {
								...e,
								[s]: {
									dist: o,
									token: n
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
			var ne = function() {
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
			const re = {};
			var ie = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : re,
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
					error: ne,
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

			function xe(e) {
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
			const fe = (e, t, s) => {
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
			var ve = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : he,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case M.e:
					case se.e: {
						const {
							comments: s,
							extraComments: o,
							postIds: n,
							profileName: r
						} = t.payload, i = fe(n, s, o), a = {};
						for (const e of n) {
							a[Object(pe.a)(e, r)] = i.hasOwnProperty(e) ? xe(i[e]) : {}
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
							extraComments: n,
							extraCommentsId: r,
							postIds: i,
							profileName: a
						} = t.payload;
						if (0 === i.length) {
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
						const d = i[0],
							c = xe(fe(i, s, n)[d]),
							l = Object(pe.a)(d, a),
							m = {
								...e[l]
							},
							u = m[r].prev,
							p = u && u.id || "",
							b = o[d].head,
							h = b && b.id || "",
							x = {
								id: h,
								type: be.a.Comment
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
							profileName: n
						} = t.payload, r = {};
						for (const e of o) {
							r[Object(pe.a)(e, n)] = s[e] && s[e].head ? s[e].head.id : null
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
			var ye = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ge,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case M.e:
						case se.e: {
							const {
								postIds: s,
								profileName: o
							} = t.payload, n = {};
							for (const e of s) {
								n[Object(pe.a)(e, o)] = e
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
				je = Object(B.c)({
					api: te,
					extraComments: le,
					keyToCommentThreadLinkSets: ve,
					keyToHeadCommentId: Oe,
					keyToPostId: ye
				}),
				Ce = Object(B.c)({
					chrono: X,
					conversations: je
				});
			Object(F.a)({
				pages: {
					profileOverview: Ce
				}
			});
			const Ee = Object(y.a)(M.f),
				we = Object(y.a)(M.e),
				Se = Object(y.a)(M.d),
				ke = Object(y.a)(M.c),
				Ne = Object(y.a)(M.b),
				Ie = Object(y.a)(M.a),
				_e = (e, t, s, o) => async (o, n, i) => {
					const a = n(),
						d = !!a.listings.postOrder.ids[e],
						x = !!Object(P.c)(a, {
							listingKey: e
						});
					if (!!Object(P.d)(a, {
							listingKey: e
						}) || d && !x) return;
					o(Ee({
						key: e
					}));
					const f = await Object(T.a)("profile", () => ((e, t, s) => Object(m.a)(e, {
							data: s,
							endpoint: Object(u.a)(Object(l.a)(Object(p.a)(Object(b.a)(`${c.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
							traceRequestName: "get_profile_conversations",
							method: r.mb.GET
						}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
							...e,
							body: {
								...e.body,
								pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
							}
						} : e))(i.apiContext(), t, s)),
						v = f.body;
					await Object(h.a)(i.gqlContext, v.posts).then(e => v.posts = e);
					const {
						pinned: g,
						postIds: y
					} = v;
					if (f.ok) {
						o(we({
							key: e,
							meta: a.meta,
							profileName: t,
							...v,
							postIds: y
						}));
						const s = Object(O.n)(n(), t);
						o(Object(S.h)({
							profileId: s,
							pinned: g
						}))
					} else o(Se({
						account: f.body.data ? f.body.data.account : null,
						error: f.body.reason ? {
							type: f.body.reason
						} : f.error,
						key: e
					})), f.body.reason === _.a.DeletedProfile && o(Object(C.u)({
						profileName: t
					})), o(Object(k.n)(f.status))
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
					const h = x.e[Object(v.S)(s(), {})],
						P = p.toLowerCase(),
						y = {
							...n()(e.queryParams, f.k),
							sort: m,
							layout: h,
							t: u
						},
						C = [t(N.d(P))],
						S = Object(L.a)(P, r.xb, m, e.queryParams);
					if (s().listings.postOrder.ids[S] && !s().listings.postOrder.api.error[S] ? b = !0 : C.push(t(_e(S, P, y, !0))), C.push(t(Object(i.b)())), await Promise.all(C), b) return;
					const _ = s();
					if (!_.platform.currentPage) return;
					if (200 !== _.platform.currentPage.status) return;
					const T = Object(O.n)(s(), P),
						M = Object(g.Ab)(_, {
							userName: p
						}).id;
					t(k.m({
						title: Te(s(), p)
					})), Object(g.S)(_) && Object(g.W)(_, p) && t(Object(j.startChangeUsernameFlow)());
					const F = [t(Object(d.q)()), t(I.b(P, T)), t(N.b(P)), t(E.o(p)), t(N.i(p)), t(w.i(p, M))];
					await Promise.all(F)
				}, Te = (e, t) => Object(O.r)(e, {
					profileName: t
				})
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
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/RichTextJson/index.tsx"),
				d = s("./src/reddit/selectors/experiments/supportingLinkAds.ts"),
				c = s("./src/reddit/components/PostTitle/index.tsx"),
				l = s("./src/reddit/components/AdSupplementaryText/index.m.less"),
				m = s.n(l);
			const u = e => {
				let t;
				switch (e) {
					case c.b.ExtraLarge:
						t = m.a.ExtraLarge;
						break;
					case c.b.Large:
						t = m.a.Large
				}
				return t
			};
			t.a = e => {
				let {
					post: t,
					size: s,
					className: o
				} = e;
				return Object(r.e)(d.a) && t.isSponsored && t.adSupplementaryText && "string" != typeof t.adSupplementaryText ? 0 === t.adSupplementaryText.document.length ? null : n.a.createElement("div", {
					className: Object(i.a)(o, m.a.AdSupplementaryText),
					"data-testid": `${t.id}-ad-supplementary-text`
				}, n.a.createElement(a.b, {
					className: Object(i.a)(m.a.Content, u(s)),
					content: t.adSupplementaryText,
					rtJsonElementProps: {
						renderingObjectInfo: void 0
					}
				})) : null
			}
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
				i = s("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const a = 5;

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
					p(e) && n - r >= a && !m.has(t) && (r = n, m.add(t), n === l && (u = !0))
				}
				return u ? n.a.createElement(i.a, {
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
		"./src/reddit/components/CreatorStats/EducationUnit.m.less": function(e, t, s) {
			e.exports = {
				container: "_2EuQaYC2G3KohzPtXm5hCL",
				innerContainer: "_2LsQAqUfogc1w9Ytlefh1M"
			}
		},
		"./src/reddit/components/CreatorStats/EducationUnit.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
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
				return n.a.createElement("div", {
					className: Object(r.a)(a.a.container, t)
				}, n.a.createElement("div", {
					className: a.a.innerContainer
				}, c._("NEW! Now you can get data and insights on your posts", null, {
					hk: "343rNh"
				}), n.a.createElement(d.a, null)))
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
				return x
			}));
			var o = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = e => {
				let {
					post: t
				} = e;
				const s = t.predictionTournament,
					n = s.status === d.a.Live,
					l = s.status === d.a.Closed,
					m = Object(i.e)(e => Object(c.V)(e, {
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
				}), r.a.createElement(a.a, {
					className: b.a.awards,
					thing: t
				})), r.a.createElement("h3", {
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
				adSupplementaryText: "DUmvFvjh1QvOsvx-YlMOO",
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
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
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
				x = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				f = s("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx"),
				v = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				P = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				O = s("./src/reddit/hooks/useTracking.ts"),
				g = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Post/index.ts"),
				j = s("./src/reddit/models/Vote/index.ts"),
				C = s("./src/reddit/selectors/activeModalId.ts"),
				E = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				w = s("./src/reddit/selectors/moderatorPermissions.ts"),
				S = s("./src/reddit/selectors/posts.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				N = s("./src/lib/ads/index.ts"),
				I = s("./src/lib/classNames/index.ts"),
				_ = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				L = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				T = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				M = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				F = s("./src/reddit/components/AdSupplementaryText/index.tsx"),
				B = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				A = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				V = s("./src/reddit/components/CreatorStats/loader.tsx"),
				R = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				U = s("./src/reddit/components/Flatlist/index.tsx"),
				W = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				D = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				K = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				G = s("./src/reddit/components/ModModeReports/index.tsx"),
				H = s("./src/reddit/components/ModModeReports/helpers.ts"),
				q = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				z = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				J = s("./src/reddit/components/PostContainer/index.tsx"),
				Q = s("./src/reddit/components/PostLeftRail/index.tsx"),
				X = s("./src/reddit/components/PostMedia/index.tsx"),
				Z = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Y = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				$ = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				ee = s.n($);
			const {
				fbt: te
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var se = () => n.a.createElement("div", {
					className: ee.a.container
				}, n.a.createElement(Y.a, {
					className: ee.a.pinnedIcon,
					isFilled: !0
				}), n.a.createElement("span", {
					className: ee.a.metaText
				}, te._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				oe = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ne = s("./src/reddit/components/PostTitle/index.tsx"),
				re = s("./src/reddit/components/PostTopLine/index.tsx"),
				ie = s("./src/reddit/components/SourceLink/index.tsx"),
				ae = s("./src/reddit/constants/postLayout.ts"),
				de = s("./src/reddit/contexts/InsideOverlay.tsx"),
				ce = s("./src/reddit/contexts/PageLayer/index.tsx"),
				le = s("./src/reddit/contexts/Post/index.tsx"),
				me = s("./src/reddit/helpers/isCrosspost.ts"),
				ue = s("./src/reddit/helpers/localStorage/index.ts"),
				pe = s("./src/reddit/helpers/path/index.ts"),
				be = s("./src/reddit/helpers/postEvent.ts"),
				he = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				xe = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				fe = s("./src/reddit/hooks/useClickSourceData.ts"),
				ve = s("./src/reddit/models/Audio/index.ts"),
				Pe = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				Oe = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				ge = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ye = s("./src/reddit/constants/experiments.ts"),
				je = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Ce = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const Ee = Object(a.a)(S.N, e => e.some(Ce.d)),
				we = Object(a.a)(Ee, e => e),
				Se = (e, t) => Object(je.c)(e, {
					experimentName: ye.Zc,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && we(e, {
							listingKey: s
						})
					}
				});
			var ke = s("./src/reddit/selectors/postFlair.ts"),
				Ne = s("./src/reddit/selectors/showPromotedCTA.ts"),
				Ie = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				_e = s.n(Ie),
				Le = s("./src/reddit/selectors/i18n/index.ts"),
				Te = s("./src/reddit/selectors/experiments/adblockAcceptableAdsMitigationExperiment.ts"),
				Me = s("./src/reddit/components/LargePost/index.m.less"),
				Fe = s.n(Me);

			function Be() {
				return (Be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Ae = e => {
					let {
						className: t,
						disableVisited: s,
						children: o,
						...r
					} = e;
					return n.a.createElement(L.a, Be({}, r, {
						className: Object(I.a)(t, Fe.a.styledLink, {
							[Fe.a.isVisitedEnabled]: !s
						})
					}), o)
				},
				Ve = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(S.N)(e, {
						listingKey: s
					}) : void 0
				},
				Re = Object(r.b)(() => Object(a.c)({
					autoplayPref: k.b,
					activeModalId: C.a,
					hideNSFWPref: k.F,
					flairStyleTemplate: ce.W,
					isBlurredPreview: ge.b,
					isCurrentUserProfilePost: S.l,
					isLoggedIn: k.Q,
					isActive: S.j,
					showPromotedCTA: Ne.a,
					moderatorPermissions: w.m,
					modModeEnabled: ce.U,
					posts: Ve,
					postHeightVariant: Se,
					shouldShowNsfwListingBelow: Le.b,
					showEditFlair: ke.a,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						return !!s && Object(w.i)(e, s.id)
					},
					isAdblockAAMitigationEnabled: Te.a,
					isOptionalTextEnabled: Pe.a,
					showCTAExperimentDesign: E.a
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const o = t === j.a.upvoted ? Object(u.kb)(s) : Object(u.w)(s);
							e(o)
						},
						onIgnoreReports: () => e(Object(u.gb)(s)),
						onOpenReportsDropdown: t => e(Object(p.h)({
							tooltipId: t
						}))
					}
				}),
				Ue = n.a.memo(e => {
					const {
						handlePostLinkClick: t,
						postPermalink: s,
						disableVisited: o,
						shouldOpenPostInNewTab: r,
						shouldStylePostAfterVisitLink: i,
						children: a
					} = e;
					return i ? n.a.createElement(Ae, {
						"data-click-id": "body",
						target: r ? "_blank" : void 0,
						disableVisited: o,
						to: s,
						onClick: t
					}, e.children) : n.a.createElement(n.a.Fragment, null, a)
				}),
				We = n.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: a,
						currentUser: p,
						eventFactory: j,
						flairStyleTemplate: C,
						forceLoadMedia: E,
						hideNSFWPref: w,
						hostPostData: S,
						imageGalleryCurrentItem: L,
						inSubredditOrProfile: Y = !1,
						isBlurredPreview: $,
						isCommentsPage: ee,
						isCurrentUserProfilePost: te,
						isFrontpage: de,
						isGalleryTileLayoutDefault: ce,
						isModWithUserNotesPermissions: le,
						isLoggedIn: Pe,
						isOverlay: ge,
						isTopicPage: je,
						isCommentCountAnimationEnabled: Ce,
						isVoteCountAnimationEnabled: Ee,
						isCountAnimShadowTestEnabled: we,
						listingIndex: Se,
						listingKey: ke,
						moderatorPermissions: Ne,
						modModeEnabled: Ie,
						onClickPost: Le,
						onIgnoreReports: Te,
						onOpenReportsDropdown: Me,
						post: Be,
						postHeightVariant: Ae,
						scrollerItemRef: Ve,
						shouldShowGalleryTileOption: Re,
						shouldShowInsightsButton: We,
						shouldShowNsfwListingBelow: De,
						showEditFlair: Ke,
						showPromotedCTA: Ge,
						subredditOrProfile: He,
						userIsOp: qe,
						postId: ze,
						postIds: Je,
						onceInViewport: Qe,
						isAdblockAAMitigationEnabled: Xe,
						isOptionalTextEnabled: Ze,
						showCTAExperimentDesign: Ye
					} = e, $e = Object(O.a)(), et = He, tt = !!e.redditStyle || !!e["data-redditstyle"], st = tt ? void 0 : C, ot = Object(l.a)(Ne), nt = Ie && ot, rt = Object(d.a)(Ne), it = Object(c.a)(Ne), at = Object(H.c)(Be), dt = Object(K.a)(Be), ct = !!Be.media && Be.media.type === g.o.RTJSON, lt = qe && ct, mt = s ? s - Q.a : void 0, ut = !!Be.recommendationContext, pt = !(de && Pe || je) || ut && Pe, bt = (e => e === ye.ff.OnlyTitles)(Ae) && !Object(me.a)(Be), ht = (e => e === ye.ff.MediumHeight)(Ae) && !Object(me.a)(Be), xt = (e => {
						var t;
						const {
							post: s,
							postIds: o,
							posts: n
						} = e;
						if (!Object(y.u)(s) || (null === (t = s.pollData) || void 0 === t ? void 0 : t.isPrediction)) return;
						const r = o && 0 === o.indexOf(s.id),
							i = o && 1 === o.indexOf(s.id),
							a = n && n[1] && Object(y.u)(n[1]);
						return {
							hasTopCompactPostStyles: r && a,
							hasBottomCompactPostStyles: i,
							showPinnnedHeader: r
						}
					})(e), ft = Object(r.d)(), vt = Object(r.e)(Oe.b), Pt = Object(r.e)(Oe.c), Ot = Object(r.e)(k.jb), gt = Object(fe.a)(), yt = Be.media && Object(g.H)(Be.media) ? Object(he.c)(Be.id, et.name) : Be.permalink, jt = e.isCommentPermalink ? Object(pe.b)(yt) : Object(_.a)(yt, void 0, gt), Ct = !!(null == S ? void 0 : S.shouldShowLinkedPosts), Et = (!Y || Ct || De) && !Be.isSponsored, wt = Object(N.t)(Be, L), {
						source: St
					} = wt, kt = Object(o.useRef)(null), Nt = Object(o.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == Qe || Qe(Se))
						})
					}, [Qe, Se]);
					Object(P.a)(kt, Nt);
					const [It, _t] = Object(o.useState)(!1), Lt = Object(o.useCallback)(() => {
						_t(!It), Object(ue.Pb)(), $e(Object(xe.d)(ze))
					}, [It, $e, ze]), Tt = Be.isSponsored && !(Be.media && g.a.has(Be.media.type)) && !Xe, Mt = !!($ && (null == He ? void 0 : He.isNSFW)), Ft = Object(o.useRef)({
						renderingObjectInfo: Be
					}), Bt = Object(o.useCallback)(e => {
						!vt && !Pt || Be.media && Object(g.H)(Be.media) || (e.preventDefault(), ft(Object(u.bb)(Object(pe.b)(Be.permalink), Be.id)))
					}, [ft, vt, Pt, Be.id, Be.media, Be.permalink]), At = Be && Be.media && (Be.media.type === g.o.TEXT || Be.media.type === g.o.RTJSON);
					return n.a.createElement(v.b, null, n.a.createElement(J.a, {
						className: Object(I.a)(Fe.a.container, a, _e.a.largeAndMediumPostStyles, _e.a.largeAndMediumActiveStyles, Object(m.a)(e), {
							[_e.a.mUseRedditTheme]: tt,
							promotedvideolink: Tt,
							[Fe.a.topCompactPost]: xt && xt.hasTopCompactPostStyles,
							[Fe.a.bottomCompactPost]: xt && xt.hasBottomCompactPostStyles,
							[Fe.a.shouldShowOverflow]: We
						}),
						isOverlay: ge,
						style: Object(m.b)(e.flairStyleTemplate),
						post: Be,
						onClick: Le,
						eventFactory: j
					}, n.a.createElement("div", {
						ref: kt
					}), n.a.createElement(oe.a, {
						model: Be,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: we,
						isVoteCountAnimation: Ee,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: st,
						redditStyle: tt,
						postId: ze
					}), n.a.createElement(z.a, {
						className: Object(I.a)(Fe.a.backgroundWrapper, {
							[Fe.a.isEvent]: Object(be.a)(Be),
							[Fe.a.shouldUseRoundedBorder]: We
						}),
						"data-click-id": "background",
						flairStyleTemplate: st,
						post: Be,
						redditStyle: tt
					}, n.a.createElement(R.a, {
						post: Be
					}), xt && xt.showPinnnedHeader && n.a.createElement(se, null), Object(i.c)(Be) && n.a.createElement(n.a.Fragment, null, n.a.createElement(x.a, {
						post: Be
					}), n.a.createElement(h.a, {
						post: Be
					})), !Object(i.c)(Be) && n.a.createElement(n.a.Fragment, null, !!Be.recommendationContext && n.a.createElement(q.a, {
						content: Be.recommendationContext.content,
						layout: ae.g.Large,
						post: Be
					}), n.a.createElement(re.a, {
						className: Fe.a.postTopLine,
						hideNSFWPref: w,
						hostPostData: S,
						iconClassName: Fe.a.postTopLineIcon,
						inSubredditOrProfile: Y,
						isCommentsPage: !!ee,
						isCompactPinnedPost: !!xt,
						isCurrentUserProfilePost: te,
						isModWithUserNotesPermissions: le,
						isOverlay: !!ge,
						isTopicPage: !!je,
						listingKey: ke,
						post: Be,
						shouldShowSubscribeButton: pt,
						showSubreddit: Et,
						showSubredditIcon: !0,
						subredditOrProfile: He
					}), n.a.createElement(ne.c, {
						className: Fe.a.postTitle,
						post: Be,
						redditStyle: tt,
						size: ne.b.Large,
						titleColor: st && st.postTitleColor,
						isOverlay: ge
					}), n.a.createElement(F.a, {
						className: Fe.a.adSupplementaryText,
						post: Be,
						size: ne.b.Large
					}), Be.source && !Be.isSponsored && !(Be.media && Object(g.H)(Be.media)) && !Mt && n.a.createElement(n.a.Fragment, null, n.a.createElement(ie.a, {
						className: Fe.a.sourceLink,
						post: Be
					}), Ze && Be.media && Be.media.type !== g.o.TEXT && Be.media.type !== g.o.IMAGE && Be.media.richtextContent && n.a.createElement(f.a, {
						content: Be.media.richtextContent,
						rtJsonElementProps: Ft.current
					}))), n.a.createElement("div", {
						className: Fe.a.postMediaWrapper
					}, !xt && n.a.createElement(Ue, {
						handlePostLinkClick: Bt,
						postPermalink: jt,
						disableVisited: e.disableVisited,
						shouldOpenPostInNewTab: Ot,
						shouldStylePostAfterVisitLink: At
					}, n.a.createElement(X.a, {
						isGalleryTileLayoutDefault: ce,
						isListing: !0,
						isMediumHeight: ht,
						isNotCardView: !!ge,
						isTitleOnly: bt,
						showCentered: !0,
						flairStyleTemplate: st,
						post: Be,
						availableWidth: mt,
						shouldLoad: E,
						scrollerItemRef: Ve,
						autoplayPref: t,
						shouldShowGalleryTileOption: Re,
						showPromotedCTA: Ge
					}))), Ge && St && St.url && !Be.isSurveyAd && n.a.createElement(T.a, {
						className: Fe.a.adLinkWrapper,
						ctaExperimentDesign: Ye && "card"
					}, n.a.createElement(M.a, {
						post: Be,
						adLinkContent: wt,
						ctaExperimentDesign: Ye && "card"
					})), Ie && ot && dt && n.a.createElement("div", {
						className: Fe.a.modModeBannerWrapper
					}, n.a.createElement(D.a, {
						thing: Be
					})), Ie && ot && at && n.a.createElement("div", {
						className: Fe.a.modModeBannerWrapper
					}, n.a.createElement(G.a, {
						onIgnoreReports: Te,
						reportable: Be
					})), Object(ve.c)(Be) && n.a.createElement(b.a, {
						post: Be
					}), n.a.createElement(W.d, null), n.a.createElement("div", {
						className: Fe.a.flatListContainer
					}, n.a.createElement(A.a, {
						className: Fe.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: st,
						model: Be,
						onVoteClick: e.handleVote
					}), !Be.isSurveyAd && n.a.createElement(U.c, {
						currentUser: p,
						hasModFlairPerms: rt,
						hasModFullPerms: it,
						hasModPostPerms: ot,
						hostPostData: S,
						isCommentCountAnimation: Ce,
						isCountAnimShadowTestEnabled: we,
						isLargePost: !0,
						isOverlay: !!ge,
						listingKey: ke,
						modModeEnabled: Ie,
						onClickInsightsButton: Lt,
						onIgnoreReports: Te,
						onOpenReportsDropdown: Me,
						post: Be,
						shouldShowInsightsButton: We,
						showEditPost: lt,
						showEditFlair: Ke,
						useFlatlistBreakpoints: Object(Z.b)({
							editPost: !1,
							save: !nt,
							hide: !1,
							report: !1
						})
					})), He && It && n.a.createElement(V.a, {
						className: Fe.a.creatorStatsContainer,
						post: Be,
						subreddit: He,
						isOwnProfileStats: !0
					})), de && n.a.createElement(B.a, {
						post: Be,
						postIds: null != Je ? Je : [],
						subredditId: null == He ? void 0 : He.id
					})))
				});
			We.displayName = "LargePostMemoized";
			t.default = Object(le.b)(Re(Object(de.b)(We)))
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
					hideNSFWPref: n,
					post: u,
					subredditOrProfile: b
				} = e;
				return r.a.createElement("div", {
					className: Object(i.a)(p.a.container, t)
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
						"aria-label": o.fbt._("Crossposted by{author}from{community}", [o.fbt._param("author", Object(l.d)(e)), o.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, r.a.createElement(m.a, {
						name: "crosspost",
						className: p.a.CrosspostIcon
					}))
				})(u.author, s), b && b.isQuarantined && r.a.createElement(a.a, null))
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
				i = s("./src/reddit/components/Thumbnail/index.tsx"),
				a = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				d = s.n(a);

			function c(e) {
				const {
					source: t
				} = e.post;
				return n.a.createElement("div", {
					className: Object(r.a)(d.a.container, e.className)
				}, n.a.createElement(i.a, {
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
				})), c && n.a.createElement(i.a, {
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
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
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
				return n.a.createElement("div", d({
					className: Object(r.a)(a.a.border, {
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
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
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
				P = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				O = s.n(P);
			const g = m.a.div("ProfileOwnerCommentWrapper", O.a),
				y = m.a.div("CommentContentWrapper", O.a),
				j = m.a.div("Wrapper", O.a),
				C = m.a.div("CommentSeparator", O.a),
				E = Object(a.b)(() => Object(d.c)({
					comment: (e, t) => Object(x.b)(e, t),
					isAwarded: (e, t) => {
						const s = Object(x.b)(e, t);
						return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
							const s = Object(f.a)(e, t);
							return s && s.coinPrice >= c.g
						})
					},
					isNightmodeOn: v.db
				}), e => ({
					openPost: t => e(Object(b.L)(t))
				}));
			class w extends i.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: s,
						openPost: o,
						isAwarded: r,
						isFirst: a,
						isLast: d,
						isNightmodeOn: c,
						profileName: m,
						showModTools: p
					} = this.props, b = m === e.author ? S : k;
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
					}, i.a.createElement(j, {
						className: Object(l.a)({
							[O.a.isFirst]: a,
							[O.a.isLast]: d,
							[O.a.isAwarded]: r,
							[O.a.isNightmodeOn]: c
						})
					}, n()(s + 1, e => i.a.createElement(C, {
						key: e
					})), i.a.createElement(y, null, b(t, m, p))))
				}
			}
			const S = (e, t, s) => i.a.createElement(g, null, k(e, t, s, !0, !0)),
				k = function(e, t, s) {
					let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						n = arguments.length > 4 ? arguments[4] : void 0;
					return i.a.createElement(p.a, {
						commentId: e,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: o,
						showModTools: s,
						isExpanded: !!n
					})
				};
			t.a = E(w)
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
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
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
				x = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/OutboundLink/index.tsx"),
				P = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				g = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Subreddit/index.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/PostTopLine/index.m.less"),
				E = s.n(C);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: n,
					hideNSFWPref: C,
					hostPostData: w,
					iconClassName: S,
					inSubredditOrProfile: k,
					isCommentsPage: N,
					isCompactPinnedPost: I,
					isCurrentUserProfilePost: _,
					isModWithUserNotesPermissions: L,
					isOverlay: T,
					isTopicPage: M,
					listingKey: F,
					post: B,
					shouldShowSubscribeButton: A,
					showCornerOutboundLink: V,
					showSubreddit: R,
					showSubredditIcon: U,
					subredditOrProfile: W,
					isFollowed: D,
					shouldShowFollowButton: K,
					onFollowPostClick: G
				} = e;
				const H = M,
					q = W && Object(y.h)(W),
					z = Object(i.e)(e => {
						if (!q) return !0;
						const t = Object(j.Gb)(e, B.author || "");
						return !t || t.enableFollowers
					});
				return r.a.createElement("div", {
					className: Object(a.a)(E.a.container, t)
				}, R && W && r.a.createElement("div", {
					className: E.a.subredditIconWrapper
				}, r.a.createElement(b.a, {
					"data-click-id": "subreddit",
					to: W.url
				}, U && r.a.createElement(p.b, {
					className: Object(a.a)(E.a.subredditIcon, S),
					shouldHideNsfwIcon: C,
					subredditOrProfile: W
				}))), r.a.createElement("div", {
					className: E.a.everythingElseWrapper
				}, R && r.a.createElement(c.h, {
					type: B.belongsTo.type,
					id: B.belongsTo.id
				}), r.a.createElement(u.d, {
					className: E.a.postTopMeta,
					forceOpenInNewTab: n,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: L,
					tooltipType: T ? u.c.Lightbox : void 0,
					post: B,
					showSub: R,
					subredditOrProfile: W
				}), r.a.createElement(m.a, {
					className: E.a.postBadges,
					displayText: W ? W.displayText : null,
					inSubredditOrProfile: k,
					isCompactPinnedPost: I,
					post: B,
					tooltipType: T ? u.c.Lightbox : void 0
				}), !H && r.a.createElement(d.a, {
					isPostDetail: N,
					thing: B,
					tooltipType: T ? u.c.Lightbox : void 0
				})), W && z && R && A && !_ && r.a.createElement(h.a, {
					className: E.a.SubscribeButton,
					getEventFactory: e => Object(P.k)(B.id, e ? "unsubscribe" : "subscribe", "post", F, w),
					identifier: {
						name: W.name,
						type: q ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: B.id,
					size: f.d.XS
				}), V && r.a.createElement(v.b, {
					isSponsored: B.isSponsored,
					postId: B.id,
					href: Object(g.D)(B),
					source: B.source
				}, r.a.createElement(O.a, {
					className: E.a.outboundLinkIcon
				})), K && z && r.a.createElement(l.a, {
					isFilled: !!D,
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
				n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
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
				x = s("./src/reddit/components/PostList/Placeholder.tsx"),
				f = s("./src/reddit/featureFlags/index.ts"),
				v = s("./src/reddit/selectors/experiments/survey.ts"),
				P = s("./src/reddit/selectors/listings.ts"),
				O = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/tracking.ts");

			function j() {
				return Object(p.u)({
					currentProfileName: p.i,
					isCommentPermalink: p.w,
					isCommentsPage: p.x,
					isFrontpage: p.A,
					isProfilePostListing: p.L,
					isTopicPage: p.R,
					pageLayer: e => e
				})
			}
			const C = j(),
				E = {
					apiError: P.c,
					apiPending: P.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.S)(e, t),
					loadMore: P.g,
					postsById: O.T,
					postIds: Object(r.a)((e, t) => {
						let {
							listingKey: s,
							listingName: o,
							inSubredditOrProfile: n
						} = t;
						return Object(O.D)(e, s, o, n)
					}),
					subredditsById: g.cb,
					viewportDataLoaded: y.a,
					pageReferrer: p.V,
					postListPlaceholderComponent: () => x.a,
					isNpsScrollSurveyEnabled: v.e
				},
				w = Object(n.c)(E),
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
					trackOnPostEnteredViewport: (t, s, o, n) => {
						e(c.O(t, o, n))
					},
					trackOnPostExitedViewport: (t, s, o, n) => {
						e(c.P(t, o, n))
					},
					showModalOnScroll: () => e(c.cb()),
					surveyTriggerScrollCounted: () => e(Object(m.l)())
				}),
				k = e => Object(b.b)({
					...e
				}),
				N = (e, t, s, o) => {
					const {
						listingKey: n,
						hostPostData: r,
						listingBelowVariant: i
					} = o;
					return Object(h.k)(e, t, "post", n, r, i, void 0)
				},
				I = Object(o.b)(w, S, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: k,
					postClickEventFactory: N
				}));
			t.a = e => Object(u.c)(C(I(e)))
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/postFlair.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				u = s("./src/reddit/selectors/postFlair.ts"),
				p = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(o.b)(() => Object(n.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: c.W,
				hideNSFWPref: b.F,
				isActive: p.j,
				moderatorPermissions: m.m,
				modModeEnabled: c.U,
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
						return e(Object(i.h)({
							post: s,
							previewFlair: o,
							selectedTemplateId: n
						}))
					},
					handleVote: t => {
						const o = t === d.a.upvoted ? Object(r.kb)(s) : Object(r.w)(s);
						e(o)
					},
					onIgnoreReports: () => e(Object(r.gb)(s)),
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
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = n.a.createContext(() => () => {})
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
		"./src/reddit/pages/ProfileOverview/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/lodash/fromPairs.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/isFakeSubreddit/index.ts"),
				m = s("./src/reddit/helpers/localStorage/index.ts"),
				u = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/promo/withShowSignupUpsell.tsx"),
				x = s("./src/reddit/actions/nsfwBlocking/async.tsx"),
				f = s("./src/reddit/actions/pages/profileOverview/index.ts"),
				v = s("./src/reddit/actions/pages/profileShared.ts"),
				P = s("./src/reddit/actions/profileConversations.ts"),
				O = s("./src/reddit/components/ContentGate/index.tsx"),
				g = s("./src/reddit/components/CreatorStats/EducationUnit.tsx"),
				y = s("./src/reddit/components/EmptyProfile/index.ts"),
				j = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				C = s("./src/reddit/components/JumpToContent/index.tsx"),
				E = s("./src/reddit/components/PostList/index.tsx"),
				w = s("./src/reddit/components/TrackingHelper/index.tsx"),
				S = s("./src/lib/classNames/index.ts"),
				k = s("./src/lib/isPinnedAdminPost/index.ts"),
				N = s("./src/lib/lessComponent.tsx"),
				I = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				_ = s("./node_modules/lodash/last.js"),
				L = s.n(_);
			var T = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				M = s("./src/reddit/selectors/posts.ts"),
				F = s("./src/reddit/components/ClassicPost/index.tsx"),
				B = s("./src/reddit/components/LargePost/index.tsx"),
				A = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				V = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				R = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				U = s("./src/reddit/selectors/profile.ts"),
				W = s("./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less"),
				D = s.n(W);
			const {
				fbt: K
			} = s("./node_modules/fbt/lib/FbtPublic.js"), G = N.a.div("ExtraCommentsItemWrapper", D.a), H = N.a.p("ExtraComments", D.a), q = N.a.wrapped(H, "ExtraCommentsInteractive", D.a);
			var z = Object(a.b)(() => Object(d.c)({
					extraCommentsItem: U.d,
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
						extraCommentsClicked: t => e(Object(P.g)(s, t.postId, t.id))
					}
				})(e => {
					let {
						extraCommentsClicked: t,
						extraCommentsItem: s,
						extraCommentsPending: o
					} = e;
					return i.a.createElement(G, null, o ? i.a.createElement(H, null, K._("Loading...", null, {
						hk: "47z90C"
					})) : i.a.createElement(R.a.Consumer, null, e => i.a.createElement(q, {
						onClick: e => {
							t(s), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, K._("Load more comments", null, {
						hk: "1jXJxb"
					}))))
				}),
				J = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				Q = s("./src/reddit/contexts/Post/index.tsx"),
				X = s("./src/reddit/hooks/useTheme.ts"),
				Z = s("./src/reddit/constants/postLayout.ts"),
				Y = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				$ = s.n(Y),
				ee = s("./src/reddit/components/OverviewConversationsPost/index.m.less"),
				te = s.n(ee);

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const oe = N.a.div("BackgroundWrapper", te.a),
				ne = N.a.wrapped(F.default, "ClassicPost", te.a),
				re = N.a.wrapped(A.a, "OverviewCommentPost", te.a),
				ie = Object(a.b)(() => Object(d.c)({
					commentThreadLinkSets: (e, t) => {
						let {
							postId: s,
							currentProfileName: o
						} = t;
						const n = o ? o.toLowerCase() : "",
							r = Object(I.a)(s, n);
						return e.pages.profileOverview.conversations.keyToCommentThreadLinkSets[r]
					},
					headComment: (e, t) => {
						let {
							postId: s,
							currentProfileName: o
						} = t;
						const n = o ? o.toLowerCase() : "",
							r = Object(I.a)(s, n);
						return e.pages.profileOverview.conversations.keyToHeadCommentId[r]
					},
					isInitiallyPinned: (e, t) => {
						let {
							postId: s,
							currentProfileName: o
						} = t;
						return !!o && Object(M.p)(e, s, o)
					},
					isPinned: (e, t) => {
						let {
							postId: s,
							currentProfileName: o
						} = t;
						return !!o && Object(M.r)(e, s, o)
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
					layout: p.S
				})),
				ae = N.a.wrapped(B.default, "OverviewLargePost", te.a),
				de = ie(e => {
					const {
						availableWidth: t,
						className: s,
						commentThreadLinkSets: o,
						eventFactory: n,
						forceLoadMedia: r,
						headComment: a,
						isInitiallyPinned: d,
						isPinned: c,
						isScrolling: l,
						last: m,
						layout: u,
						onClickPost: p,
						onSizeChanged: b,
						pageLayer: h,
						post: x,
						postId: f,
						profileName: v,
						scrollerItemRef: P,
						shouldShowInsightsButton: O
					} = e, g = {
						last: m,
						onClickPost: p,
						postId: f
					};
					if (!v) return null;
					const y = v === x.author,
						j = Object(k.a)(c, x.distinguishType);
					if (!y && !a && !j) return null;
					const C = a ? function(e) {
							const t = [],
								s = e.length;
							for (let o = 0; o < s; o++) {
								(0 === o || e[o - 1].depth !== e[o].depth - 1) && t.push([]), L()(t).push(e[o])
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
						}(o, a)) : [],
						E = C.length - 1;
					return i.a.createElement("div", {
						className: Object(S.a)($.a.largeAndMediumActiveStyles, $.a.largeAndMediumPostStyles, te.a.OverviewConversationsPost, s),
						style: {
							...Object(T.b)(),
							...Object(T.d)(e)
						}
					}, i.a.createElement(V.a, {
						className: O ? te.a.shouldShowOverflow : void 0,
						isFirst: !0,
						isLast: E < 0,
						key: x.id
					}, !y && !!a && i.a.createElement(re, se({}, g, {
						commentId: a,
						key: x.id,
						profileName: v
					})), (y || j) && (u === Z.g.Classic ? i.a.createElement(ne, {
						availableWidth: t,
						eventFactory: n,
						inSubredditOrProfile: !1,
						isOverlay: !1,
						isScrolling: l,
						forceLoadMedia: r,
						last: m,
						onClickPost: p,
						onSizeChanged: b,
						pageLayer: h,
						postId: f,
						scrollerItemRef: P
					}) : i.a.createElement(ae, {
						availableWidth: t,
						eventFactory: n,
						isScrolling: l,
						isFrontpage: !1,
						forceLoadMedia: r,
						last: m,
						onClickPost: p,
						onSizeChanged: b,
						pageLayer: h,
						postId: f,
						scrollerItemRef: P,
						shouldShowInsightsButton: O
					}))), i.a.createElement(oe, {
						style: {
							background: Object(T.e)(e)
						}
					}, !d && C.map((e, t) => i.a.createElement(V.a, {
						isLast: t === E,
						key: `${t}-isLast[${t===E}]`
					}, e.map((t, s) => {
						const o = 0 === s,
							n = s === e.length - 1;
						return "comment" === t.type ? i.a.createElement(J.a, {
							commentId: t.id,
							depth: t.depth,
							isFirst: o,
							isLast: n,
							key: t.id,
							profileName: v,
							showModTools: !0
						}) : i.a.createElement(z, {
							extraCommentsId: t.id,
							key: t.id,
							profileName: v
						})
					})))))
				});
			var ce = Object(Q.b)((function(e) {
					var t;
					const s = Object(X.a)(),
						o = Object(p.eb)();
					return i.a.createElement(de, se({
						theme: null !== (t = e.theme) && void 0 !== t ? t : s,
						currentProfileName: Object(p.i)(o),
						pageLayer: o
					}, e))
				})),
				le = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				me = s("./src/reddit/helpers/trackers/post.ts"),
				ue = s("./src/reddit/selectors/tracking.ts"),
				pe = s("./src/reddit/connectors/PostList/index.ts");
			const be = Object(d.c)({
					...pe.d,
					postIds: M.O,
					viewportDataLoaded: ue.a
				}),
				he = Object(pe.c)(),
				xe = Object(a.b)(be, pe.b, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(me.k)(e, t),
					postComponentForLayout: e => {
						let {
							post: t
						} = e;
						return t.isBlank ? le.a : ce
					}
				}));
			var fe = (e => Object(w.c)(he(xe(e))))(E.a),
				ve = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				Pe = s("./node_modules/lodash/debounce.js"),
				Oe = s.n(Pe),
				ge = s("./src/reddit/actions/post.ts"),
				ye = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				je = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				Ce = s("./src/reddit/components/Media/index.tsx"),
				Ee = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				we = s("./src/reddit/components/PostContainer/index.tsx"),
				Se = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				ke = s("./src/reddit/components/PostTitle/index.tsx"),
				Ne = s("./src/reddit/connectors/miniCardPost.ts"),
				Ie = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				_e = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Le = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Te = s("./src/reddit/models/Media/index.ts"),
				Me = s("./src/reddit/models/Post/index.ts"),
				Fe = s("./node_modules/fbt/lib/FbtPublic.js"),
				Be = s("./src/reddit/components/CommentsLink/index.tsx"),
				Ae = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				Ve = s("./src/reddit/components/Flatlist/index.tsx"),
				Re = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				Ue = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				We = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				De = s("./src/reddit/components/ShareMenu/index.tsx"),
				Ke = s("./src/reddit/icons/fonts/Share/index.tsx"),
				Ge = s("./src/reddit/models/User/index.ts"),
				He = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				qe = s.n(He);
			const ze = "-MiniCardModMenu",
				Je = "-MiniCardOverflowMenu",
				Qe = "-MiniCardShareMenu",
				Xe = N.a.wrapped(Ae.a, "HorizontalVotes", qe.a),
				Ze = N.a.button("ShareButton", qe.a),
				Ye = Object(p.u)({
					currentProfileName: p.i,
					isCommentPermalink: p.w,
					isCommentsPage: p.x,
					isProfilePostListing: p.L,
					pageLayer: e => e
				}),
				$e = Object(d.c)({
					layout: p.S,
					subreddit: p.r
				});
			var et = Ye(Object(a.b)($e, {})(Object(w.c)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: o,
						handleVote: n,
						hasModFlairPerms: r,
						hasModFullPerms: a,
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
						showEditFlair: P,
						showEditPost: O,
						subreddit: g
					} = e, y = e => v(Object(me.k)(f.id, e)), j = f.postId, C = Object(Ve.d)(ze, f.id, m, p), E = !!o && Object(Ge.e)(o) === f.author;
					return i.a.createElement("div", {
						className: Object(S.a)(qe.a.flatlistContainer, s)
					}, i.a.createElement(Xe, {
						compact: !1,
						model: f,
						onVoteClick: n,
						scoreClassName: qe.a.score
					}), i.a.createElement(Be.a, {
						hasModPostPerms: d,
						isCommentsPage: c,
						isCommentPermalink: l,
						isOverlay: m,
						postId: f.id,
						modModeEnabled: h,
						numComments: f.numComments,
						type: Z.g.Compact,
						onClick: x
					}), i.a.createElement(De.a, {
						className: qe.a.shareMenu,
						dropdownId: Object(Ve.d)(Qe, f.id, m, p),
						permalink: f.permalink,
						post: f,
						sendEventWithName: y,
						subredditType: null == g ? void 0 : g.type
					}, i.a.createElement(Ze, null, i.a.createElement(Ke.a, {
						className: qe.a.shareIcon
					}), i.a.createElement("span", {
						className: qe.a.shareText
					}, Fe.fbt._("share", null, {
						hk: "mmJV5"
					})))), d && i.a.createElement(Re.a, {
						dropdownId: C,
						onClick: () => y("post_mod_action_menu")
					}, i.a.createElement(Ve.b, {
						className: qe.a.modActionsIcon
					}), i.a.createElement(Ue.a, {
						canEditFlair: r && !!P,
						hasModPostPerms: d,
						hasModFullPerms: a,
						isOverlay: !!m,
						isPostAuthor: E,
						modModeEnabled: h,
						post: f,
						tooltipId: C
					})), i.a.createElement(We.a, {
						currentProfileName: t,
						isCommentsPage: c,
						isOverlay: !!m,
						isProfilePostListing: u,
						layout: b,
						pageLayer: e.pageLayer,
						permalink: f.permalink,
						postId: j,
						dropdownId: Object(Ve.d)(Je, f.id, m, p),
						isFixed: p,
						sendEvent: v,
						showEditPost: !!O,
						showEditFlair: !!P,
						useFlatlistBreakpoints: Object(We.b)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1
						})
					}))
				}))),
				tt = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				st = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				ot = s("./src/reddit/components/MiniCardPost/index.m.less"),
				nt = s.n(ot);
			var rt = Object(p.u)()(Object(Q.b)(Object(Ne.a)(Object(ye.a)(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: o,
						crosspostRoot: n,
						crosspostSubredditOrProfile: r,
						currentUser: a,
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
						showEditFlair: P,
						subredditOrProfile: O,
						userIsOp: g
					} = e, {
						media: y
					} = n || h, j = y && y.type, C = Object(Se.b)(h.id), E = j === Te.o.RTJSON, w = g && E, k = Object(Le.a)(u), N = Object(Ie.a)(u), I = Object(_e.a)(u), _ = y && j !== Te.o.RTJSON && j !== Te.o.TEXT, L = j === Te.o.VIDEO || j === Te.o.GIFVIDEO || j === Te.o.LIVEVIDEO, M = Object(Me.p)(h), F = y && i.a.createElement(Ce.a, {
						autoplayPref: t,
						availableWidth: s,
						className: nt.a.media,
						imageBoxClassName: Object(S.a)(nt.a.mediaImageBox, {
							[nt.a.videoStyles]: L
						}),
						imageBoxContentImageClassName: nt.a.mediaImageBoxContentImage,
						forceAspectRatio: Te.c,
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
					return i.a.createElement(we.a, {
						className: Object(S.a)(nt.a.postContainer, $.a.largeAndMediumActiveStyles, $.a.largeAndMediumPostStyles, Object(T.a)(e), o),
						style: {
							...Object(T.b)(e.flairStyleTemplate),
							...Object(T.d)(e)
						},
						post: h,
						onClick: b,
						eventFactory: d
					}, i.a.createElement(Ee.a, {
						className: nt.a.backgroundWrapper,
						flairStyleTemplate: c
					}, _ && F, i.a.createElement("div", {
						className: nt.a.innerContainer
					}, M && i.a.createElement(st.a, {
						post: h,
						templatePlaceholderImage: c ? c.postPlaceholderImage : void 0
					}), i.a.createElement(ke.c, {
						className: nt.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: h,
						size: ke.b.Large,
						titleColor: c && c.postTitleColor
					}), v && O && i.a.createElement(tt.a, {
						className: nt.a.metaLine,
						crosspostSubredditOrProfile: r,
						hideNSFWPref: m,
						post: h,
						subredditOrProfile: O
					}), !_ && i.a.createElement("div", {
						className: nt.a.mediaWrapper
					}, F), i.a.createElement("div", {
						className: nt.a.flexSpacer
					}), i.a.createElement(et, {
						currentUser: a,
						handleVote: e.handleVote,
						hasModFlairPerms: N,
						hasModFullPerms: I,
						hasModPostPerms: k,
						modModeEnabled: p,
						post: h,
						showEditFlair: P,
						showEditPost: w
					}))), e.activeModalId === C && i.a.createElement(Se.a, {
						flairs: h.flair,
						subredditId: h.belongsTo.id,
						modalId: C,
						onFlairChanged: e.onFlairChanged
					}), i.a.createElement(je.d, null))
				})))),
				it = s("./src/reddit/helpers/getClickInfo.ts"),
				at = s("./src/reddit/selectors/user.ts"),
				dt = s("./src/reddit/icons/fonts/index.tsx"),
				ct = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less"),
				lt = s.n(ct);
			const {
				fbt: mt
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var ut = e => i.a.createElement("div", {
					className: Object(S.a)(lt.a.container, e.className)
				}, i.a.createElement(dt.a, {
					name: "pin",
					className: lt.a.pin
				}), i.a.createElement("div", {
					className: lt.a.title
				}, mt._("Show off that karma!", null, {
					hk: "2yqUT7"
				})), e.children),
				pt = s("./src/reddit/controls/TextButton/index.tsx"),
				bt = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less"),
				ht = s.n(bt);
			const {
				fbt: xt
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var ft = e => i.a.createElement(ut, {
					className: Object(S.a)(ht.a.container, e.className)
				}, i.a.createElement("div", {
					className: ht.a.description
				}, xt._('Pin a post from your feed using the "..." at the bottom of each post', null, {
					hk: "4lkJRB"
				})), i.a.createElement(pt.a, {
					className: ht.a.gotIt,
					onClick: e.onGotItClick
				}, xt._("OK, I got it", null, {
					hk: "1JMx7x"
				}))),
				vt = s("./src/reddit/components/ProfilePinnedPosts/index.m.less"),
				Pt = s.n(vt);
			const {
				fbt: Ot
			} = s("./node_modules/fbt/lib/FbtPublic.js"), gt = 320, yt = 300, jt = Object(d.c)({
				arePinnedPostsLoaded: M.a,
				currentUser: at.k,
				pinnedPostIds: M.P
			}), Ct = Object(a.b)(jt, e => ({
				openPost: t => e(Object(ge.L)(t))
			}));
			class Et extends i.a.Component {
				constructor() {
					super(...arguments), this.containerRef = null, this.state = {
						showEducation: !1,
						pauseMedia: !1
					}, this.setContainerRef = e => this.containerRef = e, this.handleScroll = Oe()(() => {
						if (!this.containerRef) return;
						const e = this.containerRef.getBoundingClientRect();
						e.bottom < yt ? this.pauseMedia() : e.top > 0 && this.playMedia()
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
						Object(m.Qb)(), this.setState({
							showEducation: !1
						})
					}, this.onClickPost = (e, t) => {
						this.props.openPost({
							postOrComment: t,
							clickInfo: Object(it.a)(e)
						})
					}, this.renderPost = e => i.a.createElement(rt, {
						postId: e,
						key: e,
						availableWidth: gt,
						className: Object(S.a)(Pt.a.item, Pt.a.miniCardPost),
						forceLoadMedia: !this.state.pauseMedia,
						onClickPost: this.onClickPost,
						shouldPause: this.state.pauseMedia
					})
				}
				componentDidMount() {
					this.setState({
						showEducation: !Object(m.M)()
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
					const o = !!this.props.currentUser && this.props.profileName === Object(Ge.e)(this.props.currentUser),
						n = t.length > 0,
						r = !n && this.state.showEducation && o;
					if (!n && !r) return null;
					const a = o && this.props.pinnedPostIds.length % 2 != 0;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: Pt.a.title
					}, Ot._("Pinned posts", null, {
						hk: "3prRc3"
					})), r ? i.a.createElement(ft, {
						className: Object(S.a)(Pt.a.item, Pt.a.education),
						onGotItClick: this.onGotItClick
					}) : i.a.createElement("div", {
						ref: this.setContainerRef,
						className: Pt.a.container
					}, t.map(this.renderPost), a && i.a.createElement(ut, {
						className: Pt.a.item
					})), s)
				}
			}
			var wt = Object(p.u)()(Ct(Et)),
				St = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				kt = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				Nt = s("./src/reddit/helpers/name/index.ts"),
				It = s("./src/reddit/helpers/trackers/screenview.ts"),
				_t = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				Lt = s("./src/reddit/layout/page/Listing/index.tsx"),
				Tt = s("./src/reddit/models/ContentGate.ts"),
				Mt = s("./src/reddit/pages/ErrorPages/index.tsx"),
				Ft = s("./src/reddit/pages/ProfileBlockInterstitial/index.tsx"),
				Bt = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				At = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");

			function Vt() {
				return (Vt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Rt = (e, t) => {
					let {
						location: s
					} = t;
					return n()([...Object(c.a)(s.search)])
				},
				Ut = Object(p.u)(),
				Wt = Object(d.c)({
					isOwnProfile: p.E,
					over18Prefs: at.kb,
					layout: p.S
				}),
				Dt = Object(d.a)(Wt, Rt, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.profileName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(U.k)(e, {
						profileName: s.params.profileName
					})
				}, (e, t) => Object(v.a)(e, Rt(0, t)), (e, t) => {
					let {
						match: s
					} = t;
					return !Object(M.n)(e, {
						profileName: s.params.profileName
					})
				}, at.Q, (e, t) => {
					let {
						match: s
					} = t;
					return Object(at.f)(e, b.oc + s.params.profileName)
				}, (e, t) => {
					let {
						match: s
					} = t;
					return {
						isProfileBlockInterstitialEnabled: Object(Bt.d)(e),
						isBlocked: Object(at.L)(e, {
							profileName: s.params.profileName
						})
					}
				}, At.f, (e, t, s, o, n, r, i, a, d, c) => {
					let {
						sort: l,
						t: m
					} = n, {
						isProfileBlockInterstitialEnabled: p,
						isBlocked: h
					} = d;
					var x, f;
					const v = b.xb,
						P = Object(u.a)(s, v, l, t),
						{
							sort: O
						} = t;
					return {
						contentGateInfo: a,
						isLoggedIn: i,
						isProfileNSFW: !!o && o.isNSFW,
						listingKey: P,
						profileName: s,
						shouldShowPinnedPostsSection: r && !O,
						sort: l,
						timeSort: m,
						avatar: null === (x = null == o ? void 0 : o.icon) || void 0 === x ? void 0 : x.url,
						isProfileBlockInterstitialEnabled: p,
						isBlocked: h,
						profileId: null !== (f = null == o ? void 0 : o.id) && void 0 !== f ? f : "",
						...e,
						nsfwBlockingExperiment: c
					}
				}),
				Kt = Object(a.b)(Dt, (e, t) => ({
					onLoadMoreConversationsItems: () => e(P.h({
						profileName: t.match.params.profileName,
						sort: t.match.params.sort
					})),
					onLayoutChange: () => e(Object(f.profileOverviewRequested)({
						...t.match,
						queryParams: n()([...Object(c.a)(t.location.search)])
					})),
					openNsfwModal: () => e(Object(x.a)())
				}));
			class Gt extends i.a.Component {
				constructor(e) {
					super(e), this.onStorage = () => {
						this.setState({
							showPostStatsUnit: Object(m.L)() <= 2
						})
					}, this.renderNoPosts = () => i.a.createElement(y.c, {
						profileName: this.props.profileName,
						timeSort: this.props.timeSort
					}), this.getInjectChildren = () => {
						const e = {};
						return this.state.showPostStatsUnit && this.props.isOwnProfile && (e[0] = {
							estHeight: 76,
							id: "post-stats-info-overview",
							render: () => i.a.createElement(g.a, null)
						}), e
					}, this.state = {
						showPostStatsUnit: !1
					}
				}
				componentDidMount() {
					window.addEventListener("storage", this.onStorage), this.setState({
						showPostStatsUnit: Object(m.L)() <= 2
					}), this.props.isProfileNSFW && !this.props.isOwnProfile && this.props.nsfwBlockingExperiment === At.a.Blurred && this.props.openNsfwModal()
				}
				componentWillUnmount() {
					window.removeEventListener("storage", this.onStorage)
				}
				UNSAFE_componentWillUpdate(e) {
					this.props.layout !== e.layout && e.onLayoutChange()
				}
				render() {
					const {
						avatar: e,
						contentGateInfo: t,
						isBlocked: s,
						isOwnProfile: o,
						isProfileBlockInterstitialEnabled: n,
						isProfileNSFW: r,
						listingKey: a,
						nsfwBlockingExperiment: d,
						onLayoutChange: c,
						over18Prefs: m,
						pageLayer: u,
						profileId: p,
						profileName: h,
						shouldShowPinnedPostsSection: x,
						showSignupUpsell: f,
						sort: v,
						timeSort: P
					} = this.props;
					if (!u) return null;
					if (t && t.profileDeleted) return i.a.createElement(O.default, {
						contentGateType: Tt.a.ProfileDeleted,
						profileName: h
					});
					if (t && t.profileSuspended) return i.a.createElement(O.default, {
						contentGateType: Tt.a.ProfileSuspended,
						profileName: h
					});
					if (451 === u.status || t && t.profileBlockedForLegalReason) return i.a.createElement(O.default, {
						contentGateType: Tt.a.ProfileBlockedForLegalReason,
						profileName: h
					});
					const g = u.queryParams && "true" === u.queryParams.consent;
					if (403 === u.status || s && !g) return n ? i.a.createElement(Ft.a, {
						username: h,
						avatar: e,
						uid: p
					}) : i.a.createElement(Mt.a, null);
					if (404 === u.status) return i.a.createElement(O.default, {
						contentGateType: Tt.a.ProfileDoesNotExist,
						profileName: h
					});
					if (!h) return null;
					const y = h.toLowerCase(),
						E = `/user/${h}/`,
						w = {
							listingKey: a,
							listingName: y
						};
					if (r && !o && d === At.a.NoPreview) return i.a.createElement(kt.a, {
						contentTitle: Object(Nt.d)(h)
					});
					if (!m && r && !o && d !== At.a.Blurred) return i.a.createElement(O.default, {
						subredditName: h,
						contentGateType: Tt.a.Nsfw
					});
					const S = {
							inSubredditOrProfile: !Object(l.a)(h),
							listingKey: a,
							listingName: y,
							listingViewed: (e, t) => Object(It.q)(a, v, t, e, P),
							noPostsComponent: this.renderNoPosts,
							onScroll: f,
							onTryAgain: c
						},
						k = {
							sort: v,
							baseUrl: E,
							sortOptions: b.Db,
							timeSort: P
						},
						N = i.a.createElement(i.a.Fragment, null, x && i.a.createElement(wt, {
							profileName: h
						}), i.a.createElement(j.a, k), i.a.createElement(fe, Vt({}, S, {
							getInjectChildren: this.state.showPostStatsUnit && this.props.isOwnProfile ? this.getInjectChildren : void 0,
							excludePinnedPosts: x,
							onLoadMore: this.props.onLoadMoreConversationsItems,
							shouldShowInsightsButton: this.props.isOwnProfile
						})));
					return i.a.createElement(Lt.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(ve.a, {
							profileName: h,
							viewBlockedConsent: g
						})),
						content: i.a.createElement(i.a.Fragment, null, i.a.createElement(C.a, null), N),
						sidebar: i.a.createElement(St.a, Vt({}, w, {
							profileName: h
						}))
					})
				}
			}
			t.default = Ut(Kt(Object(h.a)(Object(_t.d)(Gt))))
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
				i = s("./src/reddit/selectors/meta.ts"),
				a = s("./src/reddit/selectors/experiments/index.ts");
			const d = Object(o.a)(i.h, i.d, a.e, (e, t, s) => !e && !t && !s);

			function c(e, t) {
				return s => Object(r.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: d,
					throttledVariants: {
						[n.Nc.Bottom_cell_dismissible]: e,
						[n.Nc.Bottom_cell_dismissible_immediate_trigger]: e,
						[n.Nc.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = c(n.Hb, !0),
				m = c(n.Ib, !0),
				u = c(n.Jb, !0),
				p = c(n.Hb, !1),
				b = c(n.Ib, !1),
				h = c(n.Jb, !1)
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
				return x
			})), s.d(t, "e", (function() {
				return f
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
				n = s("./src/reddit/featureFlags/index.ts"),
				r = s("./src/reddit/selectors/posts.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const d = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(i.V)(e, {
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
					const o = Object(i.Z)(e, {
						subredditName: s.name
					});
					return o && o.postIds && o.postIds.length ? o.postIds : m
				}),
				p = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(i.V)(e, {
						subredditId: s
					}) : null
				},
				b = (e, t, s, o, n) => {
					const i = n.find(e => e <= t) || -1,
						a = n.find(e => e > t) || 1 / 0;
					return t !== a && t !== i && (!(i + s > t) && (!(t + s > a) && !((e, t, s) => {
						const o = s[t - 1],
							n = s[t],
							i = n && Object(r.G)(e, {
								postId: o
							}) || null,
							a = n && Object(r.G)(e, {
								postId: n
							}) || null;
						return i && i.isSponsored || a && a.isSponsored
					})(e, t, o)))
				},
				h = [3],
				x = Object(o.a)((e, t) => {
					let {
						existingDUPositions: s,
						listingProps: o
					} = t;
					const n = s.slice().sort();
					let i = -1;
					const a = Object(r.z)(e, {
							listingKey: o.listingKey
						}),
						d = [];
					return h.forEach(t => {
						let s = i + t;
						if (!(s >= a.length)) {
							for (; s < a.length && !b(e, s, t, a, n);) s += 1;
							s < a.length && (d.push(s), i = s)
						}
					}), d
				}),
				f = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				v = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				P = e => e.focusedVerticals.category,
				O = e => e.focusedVerticals.lastLoadedEnv,
				g = e => {
					const t = Object(a.P)(e),
						s = n.d.geoSubredditRecommendationDULoggedIn(e),
						o = n.d.geoSubredditRecommendationDULoggedOut(e);
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
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/chatPost.ts"),
				i = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(n.ng)(t)
				},
				d = Object(o.a)(a, r.d, (e, t) => e && !t)
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"487b662c2260"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileOverview.da9a14fb8bd8224a3574.js.map