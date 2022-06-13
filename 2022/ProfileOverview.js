// https://www.redditstatic.com/desktop2x/ProfileOverview.1ade6e852c4c1bcad622.js
// Retrieved at 6/13/2022, 9:30:03 AM by Reddit Dataminer v1.0.0
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
			var p = function() {
					const e = Object(m.a)(d.vc.Bottom_cell),
						t = Object(m.a)(d.vc.Bottom_cell_dismissible),
						s = Object(m.a)(d.vc.Bottom_cell_dismissible_immediate_trigger),
						o = Object(m.a)(d.vc.Bottom_cell_signup_upsell_copy),
						n = Object(m.a)(d.vc.Bottom_cell_surprise_install_copy),
						r = Object(m.a)(d.vc.Bottom_sheet);
					return e || o || n ? l.b.SignupUpsellCell : t || s ? l.b.SignupUpsellCellDismissible : r ? l.b.SignupUpsellBottomSheet : null
				},
				u = s("./src/reddit/hooks/promo/useIsPromoShown.ts");
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
						} = Object(c.a)(), s = p(), r = Object(u.a)(s), l = Object(m.a)(d.vc.Bottom_cell_dismissible_immediate_trigger);
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
				return O
			})), s.d(t, "d", (function() {
				return C
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
			var p = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				u = s("./src/reddit/selectors/platform.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(n.a)(i.g),
				x = Object(n.a)(i.e),
				f = Object(n.a)(i.h),
				v = Object(n.a)(i.c),
				O = Object(n.a)(i.f),
				C = Object(n.a)(i.j),
				g = Object(n.a)(i.i),
				P = () => async (e, t, s) => {
					let {
						gqlContext: n
					} = s;
					const r = t(),
						i = Object(p.e)(r),
						c = Object(p.d)(r),
						u = Object(b.P)(r);
					if (i || !c) return;
					e(f());
					let O = !1;
					try {
						const t = u ? o.LoggedInGeo : o.LoggedOutGeo,
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
							if (E(t)) {
								if (j(t)) {
									e(v({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), O = !0
								} else if (y(t)) {
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
										p = {
											recommendedSubredditIds: [o.id],
											interactedSubredditIds: [n.id],
											subreddits: a,
											subredditsAboutInfo: d,
											subredditTopContent: c,
											category: r,
											lastLoadedEnv: "client"
										};
									e(h(p)), O = !0
								}
							} else O = !1
						}
					} catch (C) {
						O = !1
					}
					O || e(x({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, E = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, j = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, y = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						o = t && t.type;
					return !!(s && !j(e) && o === c.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, w = () => async (e, t, s) => {
					var o, n;
					const i = t(),
						a = Object(p.g)(i);
					if (Object(p.f)(i) || null === a || "client" === a) {
						const s = null === (n = null === (o = Object(u.b)(t())) || void 0 === o ? void 0 : o.routeMatch) || void 0 === n ? void 0 : n.route.chunk,
							a = Object(b.Q)(i);
						return Object(r.i)(() => e(P()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(O({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/pages/profileOverview/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileOverviewConversationsPending", (function() {
				return ye
			})), s.d(t, "profileOverviewConversationsLoaded", (function() {
				return we
			})), s.d(t, "profileOverviewConversationsFailed", (function() {
				return ke
			})), s.d(t, "profileOverviewChronoPending", (function() {
				return _e
			})), s.d(t, "profileOverviewChronoLoaded", (function() {
				return Ie
			})), s.d(t, "profileOverviewChronoFailed", (function() {
				return Se
			})), s.d(t, "profileOverviewConversationsRequested", (function() {
				return Ne
			})), s.d(t, "profileOverviewRequested", (function() {
				return Me
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
				p = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				b = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var h = s("./src/reddit/helpers/post/index.ts"),
				x = s("./src/reddit/constants/postLayout.ts"),
				f = s("./src/reddit/constants/parameters.ts"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/selectors/listings.ts"),
				C = s("./src/reddit/selectors/profile.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				P = s("./src/lib/makeActionCreator/index.ts"),
				E = s("./src/reddit/actions/changeUsername.ts"),
				j = s("./src/reddit/actions/contentGate.ts"),
				y = s("./src/reddit/actions/externalAccount.ts"),
				w = s("./src/reddit/actions/gold/powerups.ts"),
				k = s("./src/reddit/actions/pinnedPost.ts"),
				_ = s("./src/reddit/actions/platform.ts"),
				I = s("./src/reddit/actions/profile/index.ts"),
				S = s("./src/reddit/actions/trophyCase.ts"),
				N = s("./src/reddit/constants/errors.ts"),
				M = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				T = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				L = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				F = s("./src/lib/initializeClient/installReducer.ts"),
				A = s("./node_modules/redux/es/redux.js"),
				R = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const B = {};
			var D = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case L.c:
					case L.b:
					case R.c:
					case R.b: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case L.a:
					case R.a: {
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
			const W = {};
			var V = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case L.c:
						case R.c: {
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
						case R.b:
						case R.a: {
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
				U = Object(A.c)({
					error: D,
					pending: V
				});
			const H = {};
			var G = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
					case R.b: {
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
			const K = {};
			var z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case L.b:
						case R.b: {
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
				q = s("./src/lib/omitKey/index.ts");
			const J = {};
			var Q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case L.b:
						case R.b: {
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
							} : Object(q.a)(e, s)
						}
						default:
							return e
					}
				},
				Z = Object(A.c)({
					api: U,
					fetchedTokens: G,
					ids: z,
					loadMore: Q
				});
			const X = {};
			var Y = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : X,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			const $ = {};
			var ee = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $,
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				te = Object(A.c)({
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
				ae = Object(A.c)({
					error: ne,
					pending: ie
				});
			const de = {};
			var ce = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : de,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case L.e:
						case se.b:
						case se.e:
							return {
								...e, ...t.payload.extraComments
							};
						default:
							return e
					}
				},
				le = Object(A.c)({
					api: ae,
					models: ce
				}),
				me = s("./node_modules/lodash/mapValues.js"),
				pe = s.n(me),
				ue = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				be = s("./src/reddit/constants/comments.ts");
			const he = {};

			function xe(e) {
				const t = e;
				return pe()(t, e => {
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
					case L.e:
					case se.e: {
						const {
							comments: s,
							extraComments: o,
							postIds: n,
							profileName: r
						} = t.payload, i = fe(n, s, o), a = {};
						for (const e of n) {
							a[Object(ue.a)(e, r)] = i.hasOwnProperty(e) ? xe(i[e]) : {}
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
							l = Object(ue.a)(d, a),
							m = {
								...e[l]
							},
							p = m[r].prev,
							u = p && p.id || "",
							b = o[d].head,
							h = b && b.id || "",
							x = {
								id: h,
								type: be.a.Comment
							},
							f = {
								...m,
								[u]: {
									...m[u],
									next: x
								},
								...c,
								[h]: {
									...c[h],
									prev: p
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
			const Oe = {};
			var Ce = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case L.e:
					case se.e: {
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
			var Pe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ge,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case L.e:
						case se.e: {
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
				Ee = Object(A.c)({
					api: te,
					extraComments: le,
					keyToCommentThreadLinkSets: ve,
					keyToHeadCommentId: Ce,
					keyToPostId: Pe
				}),
				je = Object(A.c)({
					chrono: Z,
					conversations: Ee
				});
			Object(F.a)({
				pages: {
					profileOverview: je
				}
			});
			const ye = Object(P.a)(L.f),
				we = Object(P.a)(L.e),
				ke = Object(P.a)(L.d),
				_e = Object(P.a)(L.c),
				Ie = Object(P.a)(L.b),
				Se = Object(P.a)(L.a),
				Ne = (e, t, s, o) => async (o, n, i) => {
					const a = n(),
						d = !!a.listings.postOrder.ids[e],
						x = !!Object(O.c)(a, {
							listingKey: e
						});
					if (!!Object(O.d)(a, {
							listingKey: e
						}) || d && !x) return;
					o(ye({
						key: e
					}));
					const f = await Object(T.a)("profile", () => ((e, t, s) => Object(m.a)(e, {
							data: s,
							endpoint: Object(p.a)(Object(l.a)(Object(u.a)(Object(b.a)(`${c.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
							traceRequestName: "get_profile_conversations",
							method: r.jb.GET
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
						postIds: P
					} = v;
					if (f.ok) {
						o(we({
							key: e,
							meta: a.meta,
							profileName: t,
							...v,
							postIds: P
						}));
						const s = Object(C.m)(n(), t);
						o(Object(k.h)({
							profileId: s,
							pinned: g
						}))
					} else o(ke({
						account: f.body.data ? f.body.data.account : null,
						error: f.body.reason ? {
							type: f.body.reason
						} : f.error,
						key: e
					})), f.body.reason === N.a.DeletedProfile && o(Object(j.s)({
						profileName: t
					})), o(Object(_.n)(f.status))
				}, Me = e => async (t, s, o) => {
					const {
						queryParams: c,
						params: l
					} = e, {
						sort: m,
						t: p
					} = Object(a.a)(s(), c), {
						profileName: u
					} = l;
					let b = !1;
					const h = x.e[Object(v.S)(s(), {})],
						O = u.toLowerCase(),
						P = {
							...n()(e.queryParams, f.l),
							sort: m,
							layout: h,
							t: p
						},
						j = [t(I.d(O))],
						k = Object(M.a)(O, r.ub, m, e.queryParams);
					if (s().listings.postOrder.ids[k] && !s().listings.postOrder.api.error[k] ? b = !0 : j.push(t(Ne(k, O, P, !0))), j.push(t(Object(i.b)())), await Promise.all(j), b) return;
					const N = s();
					if (!N.platform.currentPage) return;
					if (200 !== N.platform.currentPage.status) return;
					const T = Object(C.m)(s(), O),
						L = Object(g.Ab)(N, {
							userName: u
						}).id;
					t(_.m({
						title: Te(s(), u)
					})), Object(g.S)(N) && Object(g.W)(N, u) && t(Object(E.f)());
					const F = [t(Object(d.q)()), t(S.b(O, T)), t(I.b(O)), t(y.o(u)), t(I.i(u)), t(w.l(u, L))];
					await Promise.all(F)
				}, Te = (e, t) => Object(C.q)(e, {
					profileName: t
				})
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				n = s.n(o);
			const r = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", n.a);
			t.a = r
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, s) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/components/CallToActionButton/index.tsx"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				c = s.n(d);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: n
				} = e, {
					source: d,
					callToAction: l,
					caption: m
				} = t;
				if (!d || !d.url) return null;
				let p = d.displayText;
				return d.displayText.length >= 40 && (p = d.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: c.a.leftSideContent
				}, m && !n && r.a.createElement("span", {
					className: c.a.caption,
					title: m
				}, m), r.a.createElement(a.a, {
					href: d.url.replace(o.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: d,
					className: c.a.displayUrl
				}, p)), l && r.a.createElement(i.a, {
					className: c.a.callToAction,
					href: d.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: d
				}, l))
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				Icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				isLeft: "p8bIdnQ5pQUQRETAyCoa5",
				isRight: "_36ucS75syCWwJ_ee7IieXZ",
				active: "NPw0Z_HL-yJPXnZ3mpWEA",
				redditStyle: "OGOshepc50ul-kJHrocIO",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				a = s("./src/reddit/components/CallToActionButton/index.m.less"),
				d = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
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
					...s
				} = e;
				return n.a.createElement(i.b, c({
					className: Object(r.a)(d.a.CallToActionButton, t, {
						[d.a.mNotCardView]: s.isNotCardView
					})
				}, s))
			}
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/ads/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/getShortenedLink.ts"),
				c = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				p = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				u = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = s("./src/reddit/components/CreatorStats/loader.tsx"),
				h = s("./src/config.ts"),
				x = s("./node_modules/react-redux/es/index.js"),
				f = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/Econ/Audio/index.m.less"),
				O = s.n(v),
				C = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				g = s("./src/reddit/components/Econ/Audio/SpeakerRings.tsx");
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var E = e => {
					let {
						post: t
					} = e;
					const {
						audioRoom: s
					} = t, r = () => Math.floor(10 * Math.random() + 1), a = Object(x.e)(f.db), [d, c] = Object(o.useState)(!1), [l, m] = Object(o.useState)(r());
					return Object(o.useEffect)(() => {
						const e = setInterval(() => {
							c(!0), setTimeout(() => c(!1), 3500), m(r())
						}, 6e3);
						return () => clearInterval(e)
					}, []), (null == s ? void 0 : s.isLive) ? n.a.createElement("a", {
						href: `https://www.reddit.com/talk/${s.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: O.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, n.a.createElement("div", {
						className: O.a.classicSpeaker
					}, d && n.a.createElement(g.a, {
						className: Object(i.a)(O.a.speakerRings, {
							[O.a.nightMode]: a
						})
					}), n.a.createElement("img", {
						key: `audioPostAvatar--${l}`,
						className: O.a.snoovatar,
						src: `${h.a.assetPath}/img/talk/avatars/${l}.png`,
						alt: P._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !d && n.a.createElement("div", {
						className: O.a.muteContainer
					}, n.a.createElement(C.a, {
						className: O.a.muteIcon
					})))) : n.a.createElement("div", {
						className: O.a.endedClassicContainer
					}, n.a.createElement(C.a, {
						className: O.a.muteIcon
					}))
				},
				j = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				y = s("./src/reddit/components/ExpandoButton/index.tsx"),
				w = s("./src/reddit/components/Flatlist/index.tsx"),
				k = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				_ = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				I = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				S = s("./src/reddit/components/ModModeReports/index.tsx"),
				N = s("./src/reddit/components/ModModeReports/helpers.ts"),
				M = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				T = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				L = s("./src/reddit/components/PostContainer/index.tsx"),
				F = s("./src/reddit/components/PostMeta/index.tsx"),
				A = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				R = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				B = s("./src/reddit/components/PostTitle/index.tsx"),
				D = s("./src/reddit/components/PostTopMeta/index.tsx"),
				W = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				V = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				U = s("./src/reddit/models/Audio/index.ts"),
				H = s("./src/reddit/models/Media/index.ts"),
				G = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				K = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				z = s("./src/reddit/constants/postLayout.ts"),
				q = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				J = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Q = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Z = s("./src/reddit/helpers/localStorage/index.ts"),
				X = s("./src/reddit/helpers/search/renderMedia.tsx"),
				Y = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				$ = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				ee = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				te = s.n(ee),
				se = s("./src/reddit/components/ClassicPost/index.m.less"),
				oe = s.n(se);

			function ne() {
				return (ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const re = Object(a.a)(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: a,
					handleVote: h,
					isExpanded: x,
					inSubredditOrProfile: f,
					eventFactory: v,
					first: O,
					flairStyleTemplate: C,
					formatTitle: g,
					hostPostData: P,
					isCheckboxSelected: K,
					isCurrentUserProfilePost: ee,
					isFrontpage: se,
					isGalleryTileLayoutDefault: re,
					isLoggedIn: ie,
					isOverlay: ae,
					isProfileCreatorStatsEnabled: de,
					imageGalleryCurrentItem: ce,
					moderatorPermissions: le,
					modModeEnabled: me,
					onClickPost: pe,
					onIgnoreReports: ue,
					onOpenReportsDropdown: be,
					onSizeChanged: he,
					poll: xe,
					post: fe,
					postId: ve,
					redditStyle: Oe,
					scrollerItemRef: Ce,
					showBulkActionCheckbox: ge,
					showEditFlair: Pe,
					showMedia: Ee,
					subredditOrProfile: je,
					toggleCheckbox: ye,
					userIsOp: we,
					shouldShowGalleryTileOption: ke,
					showPromotedCTA: _e
				} = e, Ie = Object(l.a)(), Se = we && de, Ne = Object(c.a)(x);
				Object(o.useEffect)(() => {
					he && Ne !== x && he(fe.id)
				}, [x, he, fe.id, Ne]);
				const Me = Oe ? void 0 : C,
					Te = s || void 0,
					Le = Object(Q.a)(le),
					Fe = Object(q.a)(le),
					Ae = Object(J.a)(le),
					Re = me && Q.a,
					Be = Object(I.a)(fe),
					De = Object(N.c)(fe),
					We = !!fe.media && fe.media.type === H.o.RTJSON,
					Ve = we && We,
					Ue = f && !Ee,
					He = !!fe.media && Object(H.H)(fe.media),
					Ge = !!fe.recommendationContext,
					Ke = {
						flairStyleTemplate: Me,
						post: fe,
						inSubredditOrProfile: f,
						isCurrentUserProfilePost: ee,
						isOverlay: ae,
						shouldShowSubscribeButton: !(se && ie) || Ge && ie,
						subredditOrProfile: je
					},
					ze = Object(r.t)(fe, ce),
					{
						source: qe
					} = ze,
					[Je, Qe] = Object(o.useState)(!1),
					Ze = Object(o.useCallback)(() => {
						Qe(!Je), Object(Z.Kb)(), Ie(Object($.d)(ve))
					}, [Je, ve, Ie]);
				let Xe = n.a.createElement(G.a, {
					className: oe.a.classicThumbnail,
					crosspost: Te && fe,
					isMeta: fe.isMeta,
					post: Te || fe,
					redditStyle: Oe,
					templatePlaceholderImage: Me && Me.postPlaceholderImage,
					removeLink: He
				});
				Object(U.b)(fe) && (Xe = n.a.createElement(E, {
					post: fe
				}));
				const Ye = n.a.createElement(L.a, {
					className: Object(i.a)(te.a.classicPostStyles, oe.a.postContainer, Object(Y.a)(e), {
						[oe.a.mFirst]: O,
						[oe.a.shouldShowOverflow]: Se
					}, t),
					isOverlay: ae,
					style: {
						...Object(Y.d)(e),
						...Object(Y.b)(Me)
					},
					post: fe,
					onClick: pe,
					eventFactory: v
				}, n.a.createElement(R.a, {
					model: fe,
					handleVote: h,
					showBulkActionCheckbox: ge,
					isCheckboxSelected: K,
					toggleCheckbox: ye,
					flairStyleTemplate: Me,
					redditStyle: Oe,
					postId: ve
				}), n.a.createElement(T.a, {
					className: Se ? oe.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Me
				}, n.a.createElement(j.a, {
					className: oe.a.eventMeta,
					post: fe
				}), n.a.createElement("div", {
					className: oe.a.mainBody
				}, n.a.createElement("div", {
					className: Ue ? oe.a.expandoContainer : oe.a.thumbnailContainer
				}, !Ue && Xe, n.a.createElement(y.a, {
					crosspost: Te,
					className: oe.a.rightExpando,
					isExpanded: !!x,
					post: fe,
					useMediaIcons: !1
				})), n.a.createElement("div", {
					className: Object(i.a)(oe.a.content, {
						[oe.a.showBulkActionCheckbox]: ge
					}),
					"data-click-id": "body"
				}, !!fe.recommendationContext && n.a.createElement(M.a, {
					content: fe.recommendationContext.content,
					layout: z.g.Classic,
					post: fe
				}), n.a.createElement(B.c, {
					className: xe ? oe.a.titleWithPoll : void 0,
					format: g,
					poll: xe,
					post: fe,
					redditStyle: Oe,
					size: B.b.Medium,
					titleColor: Me && Me.postTitleColor,
					isOverlay: ae
				}, fe.source && !Te && !fe.isSurveyAd && n.a.createElement(V.a, {
					href: fe.source.url,
					isSponsored: fe.isSponsored,
					postId: fe.id,
					source: fe.source
				}, Object(d.a)(fe))), n.a.createElement(F.a, ne({
					key: "PostMeta"
				}, Ke)), me && Le && Be && n.a.createElement(_.a, {
					thing: fe
				}), me && Le && De && n.a.createElement(S.a, {
					onIgnoreReports: ue,
					reportable: fe
				}), _e && qe && qe.url && !fe.isSurveyAd && n.a.createElement(m.a, {
					className: oe.a.adLinkWrapper
				}, n.a.createElement(p.a, {
					post: fe,
					adLinkContent: ze
				})), n.a.createElement("div", {
					className: oe.a.flatlistContainer
				}, n.a.createElement(y.a, {
					className: oe.a.leftExpando,
					crosspost: Te,
					isExpanded: !!x,
					post: fe,
					useMediaIcons: !1
				}), n.a.createElement(u.a, {
					className: oe.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Me,
					model: fe,
					onVoteClick: h
				}), n.a.createElement(w.a, {
					className: oe.a.flatlistSeparator
				}), !fe.isSurveyAd && n.a.createElement(w.c, {
					className: oe.a.flatlist,
					currentUser: a,
					hasModFlairPerms: Fe,
					hasModPostPerms: Le,
					hasModFullPerms: Ae,
					hostPostData: P,
					isOverlay: !!ae,
					modModeEnabled: me,
					onClickInsightsButton: Ze,
					onIgnoreReports: ue,
					onOpenReportsDropdown: be,
					post: fe,
					shouldShowInsightsButton: Se,
					showEditPost: Ve,
					showEditFlair: Pe,
					tooltipType: ae ? D.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(A.b)({
						editPost: !Re,
						hide: !Re,
						report: !Re
					})
				})), n.a.createElement(k.d, null))), Object(X.a)(fe, oe.a, Ce, x, ke, re), je && Je && n.a.createElement(b.a, {
					className: oe.a.creatorStatsContainer,
					post: fe,
					subreddit: je,
					isOwnProfileStats: !0
				})));
				return n.a.createElement(W.b, null, Ye)
			});
			t.default = Object(K.a)(re)
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
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/higherOrderComponents/withClickTracking/index.tsx");
			const c = Object(i.c)({
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
						style: i
					} = this.props;
					return n.a.createElement("div", {
						className: Object(a.a)(s, `Comment ${o.id}`),
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && e(() => r && r(t, o))(t)
						},
						style: i
					}, t)
				}
			}
			t.a = l(Object(d.a)(m))
		},
		"./src/reddit/components/CommentModModeDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				StyledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				styledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				Show: "BmpGQCO3oZBeUMzSaC5yX",
				show: "BmpGQCO3oZBeUMzSaC5yX"
			}
		},
		"./src/reddit/components/CommentModModeDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/comment/moderation.ts"),
				d = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/helpers/trackers/modTools.ts"),
				p = s("./src/reddit/selectors/tooltip.ts"),
				u = s("./node_modules/fbt/lib/FbtPublic.js"),
				b = s("./src/lib/lessComponent.tsx"),
				h = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				x = s("./src/reddit/icons/svgs/Show/index.tsx"),
				f = s("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				v = s.n(f);
			const O = b.a.wrapped(x.a, "Show", v.a);
			var C = e => n.a.createElement(h.g, null, !e.comment.isApproved && n.a.createElement(h.e, {
				displayText: e.comment.approvedBy ? u.fbt._("Approved", null, {
					hk: "3BGaEK"
				}) : u.fbt._("Approve", null, {
					hk: "7CwFx"
				}),
				onClick: e.onApproveComment
			}, n.a.createElement(h.a, null)), !e.comment.bannedBy && n.a.createElement(n.a.Fragment, null, n.a.createElement(h.e, {
				displayText: e.comment.isRemoved ? u.fbt._("Removed", null, {
					hk: "17pv2n"
				}) : u.fbt._("Remove", null, {
					hk: "3tYl0U"
				}),
				onClick: e.onRemoveComment
			}, n.a.createElement(h.i, null)), n.a.createElement(h.e, {
				displayText: e.comment.isSpam ? u.fbt._("Removed as spam", null, {
					hk: "2Kv9DF"
				}) : u.fbt._("Remove as spam", null, {
					hk: "OOps6"
				}),
				onClick: e.onSpamComment
			}, n.a.createElement(h.j, null)), n.a.createElement(h.e, {
				displayText: e.comment.isLocked ? u.fbt._("Unlock comment", null, {
					hk: "1canPl"
				}) : u.fbt._("Lock comment", null, {
					hk: "Qp5a0"
				}),
				onClick: e.onLockComment
			}, n.a.createElement(h.h, null))), e.comment.collapsedBecauseCrowdControl && n.a.createElement(h.e, {
				displayText: u.fbt._("Show comment", null, {
					hk: "9SB86"
				}),
				onClick: e.onShowComment
			}, n.a.createElement(O, null)));
			const g = b.a.wrapped(l.a, "StyledDropdown", v.a),
				P = Object(i.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(p.b)(s)(e)
					}
				}),
				E = Object(r.b)(P, (e, t) => {
					let {
						comment: s
					} = t;
					return {
						onApproveComment: () => e(Object(a.a)(s.id)),
						onLockComment: () => e(Object(a.c)(s.id)),
						onRemoveComment: () => e(Object(a.e)(s.id, !1)),
						onSpamComment: () => e(Object(a.e)(s.id, !0)),
						onShowComment: () => e(Object(a.d)(s.id))
					}
				}),
				j = Object(d.a)(g),
				y = E(Object(c.c)(e => {
					const {
						comment: t,
						isDropdownOpen: s,
						onApproveComment: o,
						onLockComment: r,
						onRemoveComment: i,
						onSpamComment: a,
						onShowComment: d,
						sendEvent: c,
						tooltipId: l
					} = e;
					return n.a.createElement(j, {
						isOpen: s,
						tooltipId: l
					}, n.a.createElement(C, {
						onApproveComment: () => {
							o(), c(Object(m.d)("approve", t.id))
						},
						onRemoveComment: () => {
							i(), c(Object(m.d)("remove", t.id))
						},
						onSpamComment: () => {
							a(), c(Object(m.d)("spam", t.id))
						},
						onLockComment: () => {
							r(), c(Object(m.d)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							d(), c(Object(m.d)("showComment", t.id))
						},
						comment: t
					}))
				}));
			t.a = y
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
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/objectSelector/index.ts"),
				l = s("./node_modules/lodash/throttle.js"),
				m = s.n(l),
				p = s("./src/lib/fastdom/index.ts"),
				u = s("./src/reddit/components/CommentBodyExpander/index.m.less"),
				b = s.n(u);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = .75, f = 10 * d.K;
			class v extends n.a.Component {
				constructor(e) {
					super(e), this.commentElement = null, this.handleResize = m()(() => {
						if (this.state.expandToggled) return null;
						p.a.read(() => {
							(this.commentElement ? this.commentElement.offsetHeight : 0) <= this.props.height * (x + 1) && p.a.write(() => {
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
				C = s("./node_modules/fbt/lib/FbtPublic.js"),
				g = s("./node_modules/lodash/noop.js"),
				P = s.n(g),
				E = s("./src/lib/makeCommentsPageKey/index.ts"),
				j = s("./src/lib/makeDraftKey/index.ts"),
				y = s("./src/reddit/actions/comment/index.ts"),
				w = s("./src/reddit/actions/comment/authoring.ts"),
				k = s("./src/reddit/actions/comment/moderation.ts"),
				_ = s("./src/reddit/actions/gold/modals.ts"),
				I = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/actions/reportFlow/index.ts"),
				N = s("./src/reddit/actions/tooltip.ts"),
				M = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				T = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				L = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				F = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				A = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				R = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				B = s("./src/reddit/components/ModModeReports/helpers.ts"),
				D = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				W = s("./src/reddit/contexts/InsideOverlay.tsx"),
				V = s("./src/reddit/contexts/PageLayer/index.tsx"),
				U = s("./src/reddit/helpers/correlationIdTracker.ts"),
				H = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				G = s("./src/reddit/helpers/overlay/index.ts"),
				K = s("./src/reddit/helpers/trackers/lightbox.ts"),
				z = s("./src/reddit/models/PostDraft/index.ts"),
				q = s("./src/reddit/models/Comment/index.ts"),
				J = s("./src/reddit/selectors/activeModalId.ts"),
				Q = s("./src/reddit/selectors/comments.ts"),
				Z = s("./src/reddit/selectors/moderatorPermissions.ts"),
				X = s("./src/reddit/selectors/posts.ts"),
				Y = s("./src/reddit/selectors/tooltip.ts"),
				$ = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				ee = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				te = s("./src/reddit/selectors/user.ts"),
				se = s("./src/reddit/components/OverflowMenu/index.tsx"),
				oe = s("./src/reddit/components/ReportFlow/index.tsx"),
				ne = s("./src/reddit/components/ReportFlow/new.tsx"),
				re = s("./src/reddit/components/ShareMenu/index.tsx"),
				ie = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ae = s("./src/reddit/controls/Dropdown/Row.tsx"),
				de = s("./src/reddit/helpers/trackers/modTools.ts"),
				ce = s("./src/reddit/layout/row/Inline/index.tsx"),
				le = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				me = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				pe = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ue = s("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				be = s.n(ue),
				he = s("./src/lib/constants/icons.ts"),
				xe = s("./src/lib/lessComponent.tsx"),
				fe = s("./src/reddit/icons/fonts/index.tsx"),
				ve = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx");
			const Oe = xe.a.wrapped(se.b, "OverflowMenu", be.a),
				Ce = xe.a.wrapped(T.a, "ModToolsFlatlist", be.a),
				ge = xe.a.wrapped(R.a, "ModActionsMenu", be.a),
				Pe = xe.a.wrapped(ae.b, "DropdownRow", be.a),
				Ee = xe.a.wrapped(ce.a, "Flatlist", be.a),
				je = xe.a.button("Button", be.a),
				ye = Object(V.u)(),
				we = e => `Comment-${e}--Modal--DeleteComment`,
				ke = e => `Distinguish--Dropdown--${e}`,
				_e = (e, t) => `${e}--${t}-overflow-menu`,
				Ie = e => `View--Reports--${e}`,
				Se = Object(i.c)({
					activeTooltipId: Y.a,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(J.a)(e) === we(s.id)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.D)(e, {
							commentId: s.postId
						})
					},
					isLoggedIn: te.Q,
					moderatorPermissions: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Z.o)(e, {
							subredditId: s.subredditId
						})
					},
					currentUser: te.k,
					modModeEnabled: V.U,
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(X.B)(e, {
							postId: s.postId
						})
					},
					commentPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.m)(e, {
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
					subreddit: V.r,
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(X.U)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: ee.a,
					isTrueblockPCBlockeeEnabled: $.d
				});
			class Ne extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(de.b)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => this.props.handleEdit(this.props.commentPermalink), this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						const e = Object(U.d)(U.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(de.b)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(de.b)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.commentPermalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(de.b)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(de.b)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(de.c)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(K.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(de.b)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(de.f)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? n.a.createElement(ne.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: oe.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : n.a.createElement(oe.a, {
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
						modModeEnabled: o,
						showModTools: r
					} = this.props, i = Object(H.a)(s), a = !!t && t.displayText === e.author;
					if (r && i) return o ? n.a.createElement(Ce, {
						comment: e,
						isCommentAuthor: a
					}) : n.a.createElement(ge, {
						dropdownId: `${e.id}-profile-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, n.a.createElement(me.a, null), n.a.createElement(M.a, {
						comment: e,
						tooltipId: `${e.id}-profile-mod-actions-menu`
					}))
				}
				renderReportsDropdown() {
					const {
						comment: e,
						modModeEnabled: t,
						showModTools: s
					} = this.props, o = Object(B.a)(e);
					if (s && Object(B.c)(e) && !t) return n.a.createElement(L.a, {
						text: `${o}`,
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === Ie(e.id),
						id: Ie(e.id)
					}, n.a.createElement(D.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: Ie(e.id)
					}), e.ignoreReports ? n.a.createElement(le.a, null) : n.a.createElement(pe.a, null))
				}
				renderDistinguishDropdown() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: o,
						onDistinguishComment: r,
						showModTools: i
					} = this.props, a = Object(H.a)(s), d = !!t && t.displayText === e.author, c = !!t && t.isEmployee;
					if (i && d && !e.bannedBy && (c || a && !o)) return n.a.createElement(L.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === ke(e.id)
					}, n.a.createElement(ve.a, null), n.a.createElement(A.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === ke(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: c,
						isUserMod: a,
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
						deleteComment: i,
						isLoggedIn: a,
						isPendingDeletion: d,
						moderatorPermissions: c,
						postIsLocked: l,
						subreddit: m,
						toggleDeleteCommentModal: p,
						isTrueblockPCBlockeeEnabled: u
					} = this.props, b = Object(H.a)(c), h = !!r && r.displayText === e.author, x = (!l && !e.isLocked || b && a) && !(Object(q.g)(e) && u), f = r && e.isGildable && !(Object(q.g)(e) && u);
					return n.a.createElement("div", {
						className: s
					}, n.a.createElement(Ee, null, x && n.a.createElement(je, {
						onClick: this.handleReply,
						disabled: d
					}, C.fbt._("Reply", null, {
						hk: "1xBqIs"
					})), f && n.a.createElement(je, {
						onClick: this.handleGild
					}, C.fbt._("Give Award", null, {
						hk: "pQJYk"
					})), n.a.createElement(re.a, {
						dropdownId: `${o}--${e.id}-comment-share-menu`,
						permalink: t,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == m ? void 0 : m.type
					}, n.a.createElement(je, {
						onClick: this.sendCommentEventWithNameShare
					}, C.fbt._("share", null, {
						hk: "3YIXpa"
					}))), this.renderReportsDropdown(), n.a.createElement(Oe, {
						dropdownId: _e(o, e.id),
						onClick: this.handleOverflowMenuClick
					}, !h && !d && n.a.createElement(Pe, {
						displayText: C.fbt._("report", null, {
							hk: "ad7CE"
						}),
						onClick: this.props.onReportClick
					}, n.a.createElement(fe.a, {
						name: he.a.report
					})), n.a.createElement(Pe, {
						displayText: e.isSaved ? C.fbt._("Unsave", null, {
							hk: "4kQcAP"
						}) : C.fbt._("Save", null, {
							hk: "4yMsMq"
						}),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? n.a.createElement(fe.a, {
						name: he.a.saved
					}) : n.a.createElement(fe.a, {
						name: he.a.save
					})), h && n.a.createElement(Pe, {
						displayText: C.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.handleEdit
					}, n.a.createElement(fe.a, {
						name: he.a.edit
					})), h && n.a.createElement(Pe, {
						displayText: C.fbt._("delete", null, {
							hk: "e8kvB"
						}),
						onClick: this.handleDelete
					}, n.a.createElement(fe.a, {
						name: he.a.delete
					}))), this.props.isConfirmModalOpen && n.a.createElement(F.a, {
						actionText: C.fbt._("Delete", null, {
							hk: "3hQAl"
						}),
						cancelActionText: C.fbt._("Keep", null, {
							hk: "3vWZkQ"
						}),
						headerText: C.fbt._("Delete comment", null, {
							hk: "2ErmbC"
						}),
						modalText: C.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "21h9zY"
						}),
						onConfirm: i,
						toggleModal: p,
						trackClick: P.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Me = ye(Object(r.b)(Se, (e, t) => {
					let {
						comment: s,
						commentsPageKey: o
					} = t;
					return {
						deleteComment: () => o && e(Object(w.j)(s.id, s.postId)),
						onDistinguishComment: (t, o) => e(Object(k.b)(s.id, t, o)),
						onIgnoreReports: () => e(Object(k.g)(s.id)),
						onGildClick: t => e(Object(_.d)({
							correlationId: t,
							thingId: s.id
						})),
						onReportClick: () => e(Object(S.c)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(N.h)({
							tooltipId: ke(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(N.h)({
							tooltipId: Ie(s.id)
						})),
						onToggleSave: () => e(Object(y.m)(s.id)),
						handleDelete: () => {
							e(Object(I.i)(we(s.id))), e(Object(N.h)({
								tooltipId: _e(o, s.id)
							}))
						},
						handleEdit: t => {
							const o = Object(E.a)(s.postId, s.id, {}),
								n = {
									commentId: s.id,
									draftKey: Object(j.a)(z.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: o
								};
							e(Object(G.a)(t)), e(Object(w.g)(n))
						},
						handleReply: t => {
							const o = Object(E.a)(s.postId, s.id, {}),
								n = {
									parentCommentId: s.id,
									commentsPageKey: o
								};
							e(Object(G.a)(t)), e(Object(w.h)(n))
						},
						toggleDeleteCommentModal: () => e(Object(I.i)(we(s.id)))
					}
				})(Object(ie.c)(Object(W.b)(Ne)))),
				Te = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Le = s("./src/reddit/components/RichTextJson/index.tsx"),
				Fe = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Ae = s("./src/reddit/selectors/commentSelector.ts"),
				Re = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				Be = s.n(Re);
			const De = xe.a.wrapped(Te.a, "TopMeta", Be.a),
				We = xe.a.div("ProfileCommentWrapper", Be.a),
				Ve = xe.a.div("CommentBody", Be.a),
				Ue = Object(r.b)(() => Object(i.c)({
					comment: (e, t) => Object(Ae.b)(e, t),
					flair: Q.e
				})),
				He = Object(c.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = Ue(e => {
				const {
					comment: t,
					commentsPageKey: s,
					flair: o,
					isExpanded: r,
					showFlatlist: i,
					showModTools: c
				} = e, l = s => n.a.createElement(Le.a, {
					className: s,
					content: Object(Fe.a)(t),
					mediaMetadata: t.media && t.media.mediaMetadata,
					rtJsonElementProps: He(e)
				});
				return n.a.createElement(We, {
					className: Object(a.a)({
						[Be.a.isRemoved]: !!t.bannedBy
					})
				}, n.a.createElement(De, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: o,
					renderedInOverlay: !1
				}), n.a.createElement("div", null, !t.isDeleted && n.a.createElement(Ve, null, r ? l() : n.a.createElement(O, {
					height: d.Ub,
					isExpanded: r
				}, l)), !t.isDeleted && i && n.a.createElement(Me, {
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
				if (!u(t.id)) return null;
				const m = new Set;
				let p = !1;
				for (let n = 0, r = -999; n <= l; n += 1) {
					const e = s[n],
						t = c[e].belongsTo.id;
					u(e) && n - r >= a && !m.has(t) && (r = n, m.add(t), n === l && (p = !0))
				}
				return p ? n.a.createElement(i.a, {
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
		"./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less": function(e, t, s) {
			e.exports = {
				DistinguishWrapper: "_3aVdI6Y8gye7mgZBvUx5X-",
				distinguishWrapper: "_3aVdI6Y8gye7mgZBvUx5X-",
				Inline: "_2fiLaXOPdMYold0b-FKdVN",
				inline: "_2fiLaXOPdMYold0b-FKdVN",
				RadioOff: "_1kl3eXeS_cuuM03T3_G8G1",
				radioOff: "_1kl3eXeS_cuuM03T3_G8G1",
				RadioOn: "_1EcSEYj-g98-QR-5idlQZr",
				radioOn: "_1EcSEYj-g98-QR-5idlQZr",
				DistinguishOptions: "_1uVj4QJ6tIy-PC9lK3eOYO",
				distinguishOptions: "_1uVj4QJ6tIy-PC9lK3eOYO"
			}
		},
		"./src/reddit/components/DistinguishCommentDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/constants/index.ts"),
				i = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				m = s("./src/reddit/layout/row/Inline/index.tsx"),
				p = s("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				u = s.n(p);
			const b = a.a.div("DistinguishWrapper", u.a),
				h = a.a.wrapped(m.a, "Inline", u.a),
				x = a.a.wrapped(c.a, "RadioOff", u.a),
				f = a.a.wrapped(l.a, "RadioOn", u.a),
				v = e => n.a.createElement(h, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? n.a.createElement(f, null) : n.a.createElement(x, null), e.text),
				O = a.a.wrapped(e => {
					const {
						className: t,
						style: s,
						isAdminDistinguished: o,
						isUserEmployee: a,
						isUserMod: d,
						isModDistinguished: c,
						isStickied: l,
						isTopLevelComment: m,
						onDistinguishComment: p
					} = e;
					return n.a.createElement(b, {
						className: t,
						style: s
					}, n.a.createElement(v, {
						onClick: () => p(r.G.NONE, null),
						selected: !c && !o,
						text: i.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), d && n.a.createElement(v, {
						onClick: () => p(r.G.MODERATOR, null),
						selected: c && !l,
						text: i.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), m && d && n.a.createElement(v, {
						onClick: () => p(r.G.MODERATOR, !0),
						selected: c && l,
						text: i.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), a && n.a.createElement(v, {
						onClick: () => p(r.G.ADMIN, null),
						selected: o && !l,
						text: i.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), a && d && m && n.a.createElement(v, {
						onClick: () => p(r.G.ADMIN, !0),
						selected: o && l,
						text: i.fbt._("Distinguish as Admin and Sticky", null, {
							hk: "3x8QWN"
						})
					}))
				}, "DistinguishOptions", u.a);
			var C = Object(d.a)(O);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: s,
					isUserEmployee: o,
					isUserMod: i,
					isModDistinguished: a,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: l,
					sendEventWithName: m,
					tooltipId: p
				} = e;
				return n.a.createElement("div", {
					className: t,
					id: p
				}, n.a.createElement(C, {
					isAdminDistinguished: s,
					isUserEmployee: o,
					isUserMod: i,
					isModDistinguished: a,
					isOpen: e.isDropdownOpen,
					tooltipId: p,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: (e, t) => {
						l(e, t), e === r.G.MODERATOR ? m(!d && t ? "distinguish_sticky" : "distinguish") : e === r.G.ADMIN ? m("admin_distinguish") : a && e !== r.G.MODERATOR ? m("undistinguish") : s && e !== r.G.ADMIN && m("admin_undistinguish"), d && !t && m("unsticky")
					}
				}))
			}
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
		"./src/reddit/components/Econ/Audio/SpeakerRings.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => {
				let {
					className: t
				} = e;
				return n.a.createElement("svg", {
					className: t,
					width: "226",
					height: "226",
					viewBox: "0 0 226 226",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("g", {
					opacity: "0.8"
				}, n.a.createElement("rect", {
					opacity: "0.8",
					x: "36.7704",
					y: "36.7703",
					width: "152.462",
					height: "152.462",
					rx: "76.2308",
					stroke: "url(#paint0_linear)",
					strokeWidth: "4"
				}), n.a.createElement("rect", {
					opacity: "0.5",
					x: "18.8851",
					y: "18.8822",
					width: "188.231",
					height: "188.231",
					rx: "94.1153",
					stroke: "url(#paint1_linear)",
					strokeWidth: "3"
				}), n.a.createElement("rect", {
					opacity: "0.3",
					x: "1.25",
					y: "1.25",
					width: "223.5",
					height: "223.5",
					rx: "111.75",
					stroke: "url(#paint2_linear)",
					strokeWidth: "2.5"
				})), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
					id: "paint0_linear",
					x1: "17.886",
					y1: "34.7703",
					x2: "213.283",
					y2: "40.3684",
					gradientUnits: "userSpaceOnUse"
				}, n.a.createElement("stop", {
					stopColor: "#FF538C"
				}), n.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				})), n.a.createElement("linearGradient", {
					id: "paint1_linear",
					x1: "-3.25127",
					y1: "17.3822",
					x2: "235.567",
					y2: "24.2243",
					gradientUnits: "userSpaceOnUse"
				}, n.a.createElement("stop", {
					stopColor: "#FF538C"
				}), n.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				})), n.a.createElement("linearGradient", {
					id: "paint2_linear",
					x1: "-24.3885",
					y1: "2.87774e-05",
					x2: "257.851",
					y2: "8.08615",
					gradientUnits: "userSpaceOnUse"
				}, n.a.createElement("stop", {
					stopColor: "#FF538C"
				}), n.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
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
			var u = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				b = s.n(u);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = e => {
				let {
					post: t
				} = e;
				const s = t.predictionTournament,
					n = s.status === d.a.Live,
					l = s.status === d.a.Closed,
					m = Object(i.e)(e => Object(c.U)(e, {
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
				})), void 0 !== s.totalParticipantsCount && r.a.createElement(p, {
					participantsCount: s.totalParticipantsCount
				}), r.a.createElement(a.a, {
					className: b.a.awards,
					thing: t
				})), r.a.createElement("h3", {
					className: b.a.title
				}, s.name))
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/eventTools/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				c = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				m = s("./src/reddit/helpers/postEvent.ts"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				u = s.n(p);
			const b = a.a.div("EventMetaWrapper", u.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					post: o
				} = e;
				if (!Object(m.a)(o)) return null;
				const a = o && o.eventInfo,
					p = Object(l.a)(o),
					h = a && Object(i.c)(a.eventStart, a.eventEnd);
				return n.a.createElement("div", {
					className: Object(r.a)(u.a.container, t, {
						[u.a.isCompact]: !!s
					})
				}, n.a.createElement(b, {
					className: u.a.eventMetaWrapper
				}, n.a.createElement(d.a, {
					post: o
				}), !p && h && n.a.createElement(c.a, {
					className: u.a.eventFollowButton,
					post: o,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/eventTools/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = s.n(c);
			var m = e => n.a.createElement("i", {
				className: Object(a.a)(Object(d.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var p = e => n.a.createElement("i", {
					className: Object(a.a)(Object(d.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				u = s("./src/reddit/components/HumanDate/index.tsx"),
				b = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				h = s.n(b),
				x = s("./src/lib/lessComponent.tsx");
			const f = x.a.span("PostEventFutureText", h.a),
				v = x.a.span("PostEventPastText", h.a),
				O = x.a.span("PostEventNowText", h.a),
				C = x.a.span("Container", h.a),
				g = x.a.wrapped(m, "CalendarIcon", h.a),
				P = x.a.wrapped(p, "LiveIcon", h.a),
				E = x.a.div("LoadingState", h.a);
			class j extends o.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						post: t
					} = this.props, {
						eventInfo: s
					} = t;
					if (!s) return null;
					const {
						eventEnd: o,
						eventIsLive: a,
						eventStart: d
					} = s, c = Object(r.e)(d, o);
					let l, m;
					if (this.state.mounted || c === r.a.Live) l = n.a.createElement(u.c, {
						startTime: d,
						endTime: o,
						isLive: a
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						l = n.a.createElement(E, {
							className: e
						})
					}
					if (a) m = n.a.createElement(O, null, n.a.createElement(P, null), l);
					else if (c === r.a.Future) m = n.a.createElement(f, null, n.a.createElement(g, null), l);
					else {
						if (c !== r.a.Past) return null;
						m = n.a.createElement(v, null, n.a.createElement(g, null), l)
					}
					return n.a.createElement(C, {
						className: e
					}, m)
				}
			}
			t.a = j
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
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				p = s("./src/reddit/helpers/path/index.ts"),
				u = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/models/Post/index.ts"),
				f = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				v = s("./src/telemetry/models/Outbound.ts"),
				O = s("./src/reddit/components/ExpandoButton/index.m.less"),
				C = s.n(O);
			const g = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.bb)(Object(p.b)(t.permalink), t.id))
				})),
				P = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const o = Object(d.a)(C.a.icon, C.a.hideOnHover);
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
			t.a = g(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: n,
					isCommentsPage: l,
					isExpanded: p,
					post: h,
					toggle: O,
					useMediaIcons: g
				} = e, E = s || h, j = Object(i.e)(f.b), y = Object(i.e)(f.c), w = t => {
					(j || y) && (t.preventDefault(), e.showModalOnPostLinkClick(E))
				}, k = E.media, _ = Object(x.p)(h), I = n && !!s;
				return k && !_ && !(("rtjson" === k.type || "text" === k.type || "liveaudio" === k.type) && !Object(u.a)(E)) || !!h.pollData ? r.a.createElement("button", {
					"aria-expanded": !!p,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, C.a.outer),
					"data-click-id": p ? "expando_close" : "expando_open",
					onClick: O
				}, p ? r.a.createElement(b.a, {
					name: "collapse",
					className: C.a.icon
				}) : g ? r.a.createElement(r.a.Fragment, null, P(E.media && E.media.type, I, h), r.a.createElement(b.a, {
					name: "expand",
					className: Object(d.a)(C.a.icon, C.a.showOnHover)
				})) : r.a.createElement(b.a, {
					name: "expand",
					className: C.a.icon
				})) : E.source && E.source.url ? r.a.createElement(m.b, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, C.a.outer),
					"data-click-id": "expando_open",
					href: E.source.url,
					isSponsored: h.isSponsored,
					postId: h.id,
					source: h.source,
					sourceElement: l ? v.SourceElement.PostImage : v.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(b.a, {
					name: "external_link",
					className: Object(d.a)(C.a.icon, C.a.outboundLinkIcon)
				})) : r.a.createElement(a.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, C.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(E.permalink),
					rel: "nofollow",
					onClick: w
				}, r.a.createElement(b.a, {
					name: "text_post",
					className: C.a.icon
				}))
			})
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
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				c = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				l = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				m = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				p = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/Econ/Audio/async.ts"),
				h = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				x = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				f = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				v = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				O = s("./src/reddit/hooks/useTracking.ts"),
				C = s("./src/reddit/models/Media/index.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				P = s("./src/reddit/models/Vote/index.ts"),
				E = s("./src/reddit/selectors/activeModalId.ts"),
				j = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				y = s("./src/reddit/selectors/moderatorPermissions.ts"),
				w = s("./src/reddit/selectors/posts.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/lib/ads/index.ts"),
				I = s("./src/lib/classNames/index.ts"),
				S = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				N = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				M = s("./src/reddit/components/AwardBadges/index.tsx"),
				T = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				L = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				F = s("./src/reddit/components/CreatorStats/loader.tsx"),
				A = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				R = s("./src/reddit/components/Flatlist/index.tsx"),
				B = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				D = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				W = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				V = s("./src/reddit/components/ModModeReports/index.tsx"),
				U = s("./src/reddit/components/ModModeReports/helpers.ts"),
				H = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				G = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				K = s("./src/reddit/components/PostContainer/index.tsx"),
				z = s("./src/reddit/components/PostLeftRail/index.tsx"),
				q = s("./src/reddit/components/PostMedia/index.tsx"),
				J = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Q = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				Z = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				X = s.n(Z);
			const {
				fbt: Y
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var $ = () => n.a.createElement("div", {
					className: X.a.container
				}, n.a.createElement(Q.a, {
					className: X.a.pinnedIcon,
					isFilled: !0
				}), n.a.createElement("span", {
					className: X.a.metaText
				}, Y._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				ee = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				te = s("./src/reddit/components/PostTitle/index.tsx"),
				se = s("./src/reddit/components/PostTopLine/index.tsx"),
				oe = s("./src/reddit/components/SourceLink/index.tsx"),
				ne = s("./src/reddit/constants/postLayout.ts"),
				re = s("./src/reddit/contexts/InsideOverlay.tsx"),
				ie = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ae = s("./src/reddit/contexts/Post/index.tsx"),
				de = s("./src/reddit/helpers/isCrosspost.ts"),
				ce = s("./src/reddit/helpers/localStorage/index.ts"),
				le = s("./src/reddit/helpers/postEvent.ts"),
				me = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				pe = s("./src/reddit/models/Audio/index.ts"),
				ue = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				be = s("./src/reddit/constants/experiments.ts"),
				he = s("./src/reddit/helpers/chooseVariant/index.ts"),
				xe = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const fe = Object(a.a)(w.N, e => e.some(xe.c)),
				ve = Object(a.a)(fe, e => e),
				Oe = (e, t) => Object(he.c)(e, {
					experimentName: be.Ic,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && ve(e, {
							listingKey: s
						})
					}
				});
			var Ce = s("./src/reddit/selectors/postFlair.ts"),
				ge = s("./src/reddit/selectors/showPromotedCTA.ts"),
				Pe = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Ee = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				je = s.n(Ee),
				ye = s("./src/reddit/selectors/i18n/index.ts"),
				we = s("./src/reddit/selectors/experiments/adblockAcceptableAdsMitigationExperiment.ts"),
				ke = s("./src/reddit/components/LargePost/index.m.less"),
				_e = s.n(ke);
			const Ie = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(w.N)(e, {
						listingKey: s
					}) : void 0
				},
				Se = Object(r.b)(() => Object(a.c)({
					autoplayPref: k.b,
					activeModalId: E.a,
					hideNSFWPref: k.F,
					flairStyleTemplate: ie.W,
					isBlurredPreview: ue.b,
					isCurrentUserProfilePost: w.l,
					isLoggedIn: k.Q,
					isActive: w.j,
					showPromotedCTA: ge.a,
					moderatorPermissions: y.n,
					modModeEnabled: ie.U,
					posts: Ie,
					postHeightVariant: Oe,
					shouldShowNsfwListingBelow: ye.b,
					showEditFlair: Ce.a,
					showAwardsPlaque: j.a,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						return !!s && Object(y.j)(e, s.id)
					},
					isAdblockAAMitigationEnabled: we.a
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const o = t === P.a.upvoted ? Object(p.kb)(s) : Object(p.w)(s);
							e(o)
						},
						onIgnoreReports: () => e(Object(p.gb)(s)),
						onOpenReportsDropdown: t => e(Object(u.h)({
							tooltipId: t
						}))
					}
				}),
				Ne = n.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: r,
						currentUser: a,
						eventFactory: p,
						flairStyleTemplate: u,
						forceLoadMedia: P,
						hideNSFWPref: E,
						hostPostData: j,
						imageGalleryCurrentItem: y,
						inSubredditOrProfile: w = !1,
						isBlurredPreview: k,
						isCommentsPage: Q,
						isCurrentUserProfilePost: Z,
						isFrontpage: X,
						isGalleryTileLayoutDefault: Y,
						isModWithUserNotesPermissions: re,
						isLoggedIn: ie,
						isOverlay: ae,
						isTopicPage: ue,
						isCommentCountAnimationEnabled: he,
						isVoteCountAnimationEnabled: xe,
						isCountAnimShadowTestEnabled: fe,
						listingIndex: ve,
						listingKey: Oe,
						moderatorPermissions: Ce,
						modModeEnabled: ge,
						onClickPost: Ee,
						onIgnoreReports: ye,
						onOpenReportsDropdown: we,
						post: ke,
						postHeightVariant: Ie,
						scrollerItemRef: Se,
						shouldShowGalleryTileOption: Ne,
						shouldShowInsightsButton: Me,
						shouldShowNsfwListingBelow: Te,
						showAwardsPlaque: Le,
						showEditFlair: Fe,
						showPromotedCTA: Ae,
						subredditOrProfile: Re,
						userIsOp: Be,
						postId: De,
						postIds: We,
						onceInViewport: Ve,
						isAdblockAAMitigationEnabled: Ue
					} = e, He = Object(O.a)(), Ge = !!e.redditStyle || !!e["data-redditstyle"], Ke = Ge ? void 0 : u, ze = Object(l.a)(Ce), qe = ge && ze, Je = Object(d.a)(Ce), Qe = Object(c.a)(Ce), Ze = Object(U.c)(ke), Xe = Object(W.a)(ke), Ye = !!ke.media && ke.media.type === C.o.RTJSON, $e = Be && Ye, et = s ? s - z.a : void 0, tt = !!ke.recommendationContext, st = !(X && ie || ue) || tt && ie, ot = (e => e === be.Pe.OnlyTitles)(Ie) && !Object(de.a)(ke), nt = (e => e === be.Pe.MediumHeight)(Ie) && !Object(de.a)(ke), rt = (e => {
						var t;
						const {
							post: s,
							postIds: o,
							posts: n
						} = e;
						if (!Object(g.s)(s) || (null === (t = s.pollData) || void 0 === t ? void 0 : t.isPrediction)) return;
						const r = o && 0 === o.indexOf(s.id),
							i = o && 1 === o.indexOf(s.id),
							a = n && n[1] && Object(g.s)(n[1]);
						return {
							hasTopCompactPostStyles: r && a,
							hasBottomCompactPostStyles: i,
							showPinnnedHeader: r
						}
					})(e), it = !!(null == j ? void 0 : j.shouldShowLinkedPosts), at = (!w || it || Te) && !ke.isSponsored, dt = Object(_.t)(ke, y), {
						source: ct
					} = dt, lt = Object(o.useRef)(null), mt = Object(o.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == Ve || Ve(ve))
						})
					}, [Ve, ve]);
					Object(v.a)(lt, mt);
					const [pt, ut] = Object(o.useState)(!1), bt = Object(o.useCallback)(() => {
						ut(!pt), Object(ce.Kb)(), He(Object(me.d)(De))
					}, [pt, He, De]), ht = ke.isSponsored && !(ke.media && C.a.has(ke.media.type)) && !Ue, xt = !!(k && (null == Re ? void 0 : Re.isNSFW));
					return n.a.createElement(f.b, null, n.a.createElement(K.a, {
						className: Object(I.a)(_e.a.container, r, je.a.largeAndMediumPostStyles, je.a.largeAndMediumActiveStyles, Object(m.a)(e), {
							[je.a.mUseRedditTheme]: Ge,
							promotedvideolink: ht,
							[_e.a.topCompactPost]: rt && rt.hasTopCompactPostStyles,
							[_e.a.bottomCompactPost]: rt && rt.hasBottomCompactPostStyles,
							[_e.a.shouldShowOverflow]: Me
						}),
						isOverlay: ae,
						style: Object(m.b)(e.flairStyleTemplate),
						post: ke,
						onClick: Ee,
						eventFactory: p
					}, n.a.createElement("div", {
						ref: lt
					}), n.a.createElement(ee.a, {
						model: ke,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: fe,
						isVoteCountAnimation: xe,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: Ke,
						redditStyle: Ge,
						postId: De
					}), n.a.createElement(G.a, {
						className: Object(I.a)(_e.a.backgroundWrapper, {
							[_e.a.isEvent]: Object(le.a)(ke),
							[_e.a.shouldUseRoundedBorder]: Me
						}),
						"data-click-id": "background",
						flairStyleTemplate: Ke,
						post: ke,
						redditStyle: Ge
					}, n.a.createElement(A.a, {
						post: ke
					}), rt && rt.showPinnnedHeader && n.a.createElement($, null), Object(i.c)(ke) && n.a.createElement(n.a.Fragment, null, n.a.createElement(x.a, {
						post: ke
					}), n.a.createElement(h.a, {
						post: ke
					})), !Object(i.c)(ke) && n.a.createElement(n.a.Fragment, null, !!ke.recommendationContext && n.a.createElement(H.a, {
						content: ke.recommendationContext.content,
						layout: ne.g.Large,
						post: ke
					}), n.a.createElement(se.a, {
						className: _e.a.postTopLine,
						hideAwards: Le,
						hideNSFWPref: E,
						hostPostData: j,
						iconClassName: _e.a.postTopLineIcon,
						inSubredditOrProfile: w,
						isCommentsPage: !!Q,
						isCompactPinnedPost: !!rt,
						isCurrentUserProfilePost: Z,
						isModWithUserNotesPermissions: re,
						isOverlay: !!ae,
						isTopicPage: !!ue,
						listingKey: Oe,
						post: ke,
						shouldShowSubscribeButton: st,
						showSubreddit: at,
						showSubredditIcon: !0,
						subredditOrProfile: Re
					}), n.a.createElement(te.c, {
						className: _e.a.postTitle,
						post: ke,
						redditStyle: Ge,
						size: te.b.Large,
						titleColor: Ke && Ke.postTitleColor,
						isOverlay: ae
					}), ke.source && !ke.isSponsored && !(ke.media && Object(C.H)(ke.media)) && !xt && n.a.createElement(oe.a, {
						className: _e.a.sourceLink,
						post: ke
					})), n.a.createElement("div", {
						className: _e.a.postMediaWrapper
					}, !rt && n.a.createElement(q.a, {
						isGalleryTileLayoutDefault: Y,
						isListing: !0,
						isMediumHeight: nt,
						isNotCardView: !!ae,
						isTitleOnly: ot,
						showCentered: !0,
						flairStyleTemplate: Ke,
						post: ke,
						availableWidth: et,
						shouldLoad: P,
						scrollerItemRef: Se,
						autoplayPref: t,
						shouldShowGalleryTileOption: Ne,
						showPromotedCTA: Ae
					})), Ae && ct && ct.url && !ke.isSurveyAd && n.a.createElement(S.a, {
						className: _e.a.adLinkWrapper
					}, n.a.createElement(N.a, {
						post: ke,
						adLinkContent: dt
					})), ge && ze && Xe && n.a.createElement("div", {
						className: _e.a.modModeBannerWrapper
					}, n.a.createElement(D.a, {
						thing: ke
					})), ge && ze && Ze && n.a.createElement("div", {
						className: _e.a.modModeBannerWrapper
					}, n.a.createElement(V.a, {
						onIgnoreReports: ye,
						reportable: ke
					})), Object(pe.b)(ke) && n.a.createElement(b.a, {
						post: ke
					}), n.a.createElement(B.d, null), Le && n.a.createElement(M.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !1,
						thing: ke,
						tooltipType: ae ? Pe.c.Lightbox : void 0
					}), n.a.createElement("div", {
						className: _e.a.flatListContainer
					}, n.a.createElement(L.a, {
						className: _e.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Ke,
						model: ke,
						onVoteClick: e.handleVote
					}), !ke.isSurveyAd && n.a.createElement(R.c, {
						currentUser: a,
						hasModFlairPerms: Je,
						hasModFullPerms: Qe,
						hasModPostPerms: ze,
						hostPostData: j,
						isCommentCountAnimation: he,
						isCountAnimShadowTestEnabled: fe,
						isLargePost: !0,
						isOverlay: !!ae,
						listingKey: Oe,
						modModeEnabled: ge,
						onClickInsightsButton: bt,
						onIgnoreReports: ye,
						onOpenReportsDropdown: we,
						post: ke,
						shouldShowInsightsButton: Me,
						showEditPost: $e,
						showEditFlair: Fe,
						useFlatlistBreakpoints: Object(J.b)({
							editPost: !1,
							save: !qe,
							hide: !1,
							report: !1
						})
					})), Re && pt && n.a.createElement(F.a, {
						className: _e.a.creatorStatsContainer,
						post: ke,
						subreddit: Re,
						isOwnProfileStats: !0
					})), X && n.a.createElement(T.a, {
						post: ke,
						postIds: null != We ? We : [],
						subredditId: null == Re ? void 0 : Re.id
					})))
				});
			Ne.displayName = "LargePostMemoized";
			t.default = Object(ae.b)(Se(Object(re.b)(Ne)))
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
				p = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				u = s.n(p);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: n,
					post: p,
					subredditOrProfile: b
				} = e;
				return r.a.createElement("div", {
					className: Object(i.a)(u.a.container, t)
				}, r.a.createElement(c.a, {
					className: u.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: b.url
				}, r.a.createElement(d.b, {
					className: u.a.subredditIcon,
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
						className: u.a.CrosspostIcon
					}))
				})(p.author, s), b && b.isQuarantined && r.a.createElement(a.a, null))
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
						className: p
					} = e;
				return n.a.createElement(n.a.Fragment, null, n.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, p),
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
				i = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/components/RichTextJson/index.tsx"),
				d = s("./src/reddit/constants/postLayout.ts"),
				c = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				m = s.n(l);
			const p = Object(i.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: s,
					post: o
				} = e;
				return Object(c.a)().hideRecommendationContext ? null : n.a.createElement(a.a, {
					className: Object(r.a)(m.a.RecommendationContextStyles, {
						[m.a.classicLayout]: s === d.g.Classic,
						[m.a.compactLayout]: s === d.g.Compact,
						[m.a.largeLayout]: s === d.g.Large
					}),
					content: t,
					rtJsonElementProps: p(o),
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
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/components/PostContainer/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/contexts/Post/index.tsx"),
				x = s("./src/reddit/controls/InternalLink/index.tsx"),
				f = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				v = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				O = s.n(v),
				C = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				g = s("./src/reddit/selectors/commentSelector.ts"),
				P = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				E = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				j = s.n(E);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), w = c.a.wrapped(x.default, "InternalLink", j.a), k = c.a.div("Wrapper", j.a), _ = c.a.div("Row", j.a), I = c.a.wrapped(C.a, "CommentIcon", j.a), S = c.a.div("TitleContainer", j.a), N = c.a.div("PostTitleContainer", j.a), M = c.a.wrapped(p.c, "PostTitle", j.a), T = c.a.wrapped(u.d, "PostTopMeta", j.a), L = c.a.wrapped(u.a, "MetaSeparator", j.a), F = Object(r.b)(() => Object(i.c)({
				comment: g.b,
				isBlockingInterstitialEnabled: P.b,
				isBlockingInterstitialV2Enabled: P.b
			}), e => ({
				showModalOnAuthorLinkClick: t => e(Object(l.db)(t))
			})), A = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = e;
				if (s) return n.a.createElement(o.Fragment, null, n.a.createElement(L, null), n.a.createElement(T, {
					metaSeparatorClassName: j.a.postTopMetaMetaSeparator,
					post: t,
					showSub: !0,
					showTimestamp: !1,
					subredditOrProfile: s
				}))
			}, R = e => {
				const {
					comment: t,
					profileName: s,
					isBlockingInterstitialEnabled: o,
					isBlockingInterstitialV2Enabled: r,
					showModalOnAuthorLinkClick: i
				} = e;
				if (!t) return null;
				const a = s || t.author,
					d = `/user/${a}/`;
				return n.a.createElement(w, {
					"data-click-id": "user",
					to: d,
					onClick: e => {
						(o || r) && (e.preventDefault(), i(d))
					}
				}, a)
			};
			t.a = Object(d.a)(Object(h.b)(F(Object(b.c)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: o,
					post: r
				} = e;
				return n.a.createElement(m.a, {
					className: Object(a.a)(O.a.compactPostStyles, j.a.overviewCommentPost, {
						[j.a.banned]: !!e.post.bannedBy,
						[j.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: r,
					onClick: o,
					eventFactory: s
				}, n.a.createElement(k, {
					style: {
						background: Object(f.e)(e)
					}
				}, n.a.createElement(_, null, n.a.createElement(I, null), n.a.createElement(S, null, y._("{postAuthor} commented on {postTitle} {postMeta}", [y._param("postAuthor", R({
					...e
				})), y._param("postTitle", n.a.createElement(N, null, n.a.createElement(M, {
					outboundLinkClassName: j.a.postTitleOutboundLink,
					post: r,
					size: p.b.Small,
					titleClassName: j.a.postTitleTitle
				}))), y._param("postMeta", A(e))], {
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
				p = s("./src/reddit/components/CommentContainer/index.tsx"),
				u = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				b = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				x = s("./src/reddit/selectors/commentSelector.ts"),
				f = s("./src/reddit/selectors/communityAwards.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				C = s.n(O);
			const g = m.a.div("ProfileOwnerCommentWrapper", C.a),
				P = m.a.div("CommentContentWrapper", C.a),
				E = m.a.div("Wrapper", C.a),
				j = m.a.div("CommentSeparator", C.a),
				y = Object(a.b)(() => Object(d.c)({
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
						showModTools: u
					} = this.props, b = m === e.author ? k : _;
					return i.a.createElement(p.a, {
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
					}, i.a.createElement(E, {
						className: Object(l.a)({
							[C.a.isFirst]: a,
							[C.a.isLast]: d,
							[C.a.isAwarded]: r,
							[C.a.isNightmodeOn]: c
						})
					}, n()(s + 1, e => i.a.createElement(j, {
						key: e
					})), i.a.createElement(P, null, b(t, m, u))))
				}
			}
			const k = (e, t, s) => i.a.createElement(g, null, _(e, t, s, !0, !0)),
				_ = function(e, t, s) {
					let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						n = arguments.length > 4 ? arguments[4] : void 0;
					return i.a.createElement(u.a, {
						commentId: e,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: o,
						showModTools: s,
						isExpanded: !!n
					})
				};
			t.a = y(w)
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
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				d = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				c = s.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: o,
					onClick: i,
					post: d,
					redditStyle: m,
					theme: p,
					...u
				} = e;
				return n.a.createElement("div", l({
					className: Object(r.a)(c.a.backgroundWrapper, s),
					style: Object(a.c)(o, e),
					onClick: i
				}, u), t)
			})
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/ads/index.ts"),
				a = s("./src/reddit/components/AdViewability/index.tsx"),
				d = s("./src/reddit/helpers/trackers/gallery.ts"),
				c = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var m = n.a.memo(e => {
					const t = Object(o.useRef)(null),
						s = Object(l.a)(),
						r = Object(o.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: o
								} = t;
								o >= .5 && s(d.d(e.postId))
							})
						}, [s, e.postId]),
						i = Object(o.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(c.a)(t, r, i), n.a.createElement("div", {
						role: "presentation"
					}, n.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/telemetry.ts"),
				f = s("./src/lib/classNames/index.ts"),
				v = s("./src/lib/objectSelector/index.ts"),
				O = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				C = s("./src/reddit/components/PostContainer/index.m.less"),
				g = s.n(C);
			const P = Object(u.a)(() => Object(r.c)({
					basePixelMetadata: Object(v.a)((e, t) => {
						let {
							post: s
						} = t;
						return Object(h.b)(e, s.id)
					}),
					clickTrackingId: (e, t) => {
						let {
							post: s
						} = t;
						return s.id
					},
					imageGalleryCurrentItem: (e, t) => {
						let {
							post: s
						} = t;
						return Object(h.i)(e, {
							postId: s.id
						})
					},
					pageType: e => Object(x.d)(e).pageType
				})),
				E = "post-container";
			class j extends n.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: o,
						imageGalleryCurrentItem: r,
						makePostContainerId: c,
						post: l,
						onClick: p,
						pageType: u,
						sendEvent: h,
						style: x,
						ref: v,
						shouldAddGalleryViewability: O = !0
					} = this.props, C = n.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: x,
						ref: v,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => p && p(s, l, t, r, u))(s), l.id && r) {
								const {
									source: e
								} = Object(i.t)(l, r);
								e && e.outboundUrl && h(Object(d.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(f.a)(g.a.WrappedPost, o, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": E,
						id: c ? c(l.id) : l.id,
						tabIndex: -1
					}, s), P = !!l.media && l.media.type === b.o.VIDEO;
					return (e => l.media && Object(b.E)(l.media) && O ? n.a.createElement(m, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || P ? n.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(C))
				}
			}
			t.a = P(Object(O.a)(Object(p.c)(j)))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, s) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/helpers/trackers/postCollection.ts"),
				p = s("./src/reddit/components/PostFollow/index.m.less"),
				u = s.n(p);
			class b extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: o
							},
							sendEvent: n
						} = this.props, r = !!o;
						n(e ? Object(m.o)({
							postId: s,
							isFollowed: r
						}) : Object(m.g)({
							postId: s,
							isFollowed: r
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: s
					} = this.props, n = this.state.isHovered, i = s.isFollowed;
					let a = i ? o.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : o.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && n && (a = o.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(d.a)(u.a.collectionFollow, {
							[u.a.isFollowed]: !!s.isFollowed,
							[u.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, a)
				}
			}
			const h = Object(i.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(c.A)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(l.c)(b))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				i = s("./src/reddit/components/Media/index.tsx");

			function a(e) {
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
				}) : n.a.createElement(i.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less": function(e, t, s) {
			e.exports = {
				ListContainer: "VHCAEHBEuD8bln8MDFl35",
				listContainer: "VHCAEHBEuD8bln8MDFl35",
				Icon: "_3WbGqnEpw_ds1P508Qawma",
				icon: "_3WbGqnEpw_ds1P508Qawma",
				DropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				dropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				text: "_1llB9GXV3OPp_55xrtgYNh",
				svgIcon: "_2mkCGM7pDFARBtuKmKCBf0"
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "i", (function() {
				return C
			})), s.d(t, "j", (function() {
				return g
			})), s.d(t, "k", (function() {
				return P
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "e", (function() {
				return w
			})), s.d(t, "g", (function() {
				return k
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/Dropdown/Row.tsx"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				c = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				l = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				m = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				p = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				u = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				b = s("./src/reddit/icons/svgs/CircleCheckLight/index.tsx"),
				h = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				x = s.n(h);
			const f = r.a.wrapped(d.a, "Icon", x.a),
				v = r.a.wrapped(c.a, "Icon", x.a),
				O = r.a.wrapped(l.a, "Icon", x.a),
				C = r.a.wrapped(m.a, "Icon", x.a),
				g = r.a.wrapped(p.a, "Icon", x.a),
				P = r.a.wrapped(u.a, "Icon", x.a),
				E = () => n.a.createElement(a.a, {
					name: "mod_mute",
					className: x.a.Icon
				}),
				j = () => n.a.createElement(a.a, {
					name: "calendar",
					className: x.a.Icon
				}),
				y = () => n.a.createElement(b.a, {
					className: x.a.svgIcon
				}),
				w = r.a.wrapped(i.b, "DropdownRow", x.a),
				k = r.a.div("ListContainer", x.a)
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
				i = s("./src/reddit/components/PostLeftRail/index.tsx"),
				a = s("./src/reddit/components/VerticalVotes/index.tsx"),
				d = s("./src/reddit/controls/Checkbox/index.tsx"),
				c = s("./src/reddit/helpers/isPost.ts"),
				l = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				p = s.n(m);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: o = !1,
					isCheckboxSelected: m = !1,
					isCountAnimShadowTestEnabled: u,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: x,
					isOverlay: f,
					isVoteCountAnimation: v,
					postId: O,
					shouldShowUpvoteRatioOnHover: C
				} = e, g = `upvote-button-${t.id}${f?"-overlay":""}`;
				return n.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: x
				}, o && n.a.createElement(d.a, {
					className: p.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), n.a.createElement(a.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: s,
					redditStyle: x,
					upvoteTooltipId: g,
					isVoteCountAnimation: v,
					isCountAnimShadowTestEnabled: u,
					postId: O,
					scoreClassName: Object(r.a)(p.a.score, {
						[p.a.allowPointerEvents]: C
					}),
					shouldShowUpvoteRatioOnHover: C
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
				p = s("./src/reddit/components/PostTopMeta/index.tsx"),
				u = s("./src/reddit/components/SubredditIcon/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				h = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/OutboundLink/index.tsx"),
				O = s("./src/reddit/helpers/trackers/post.ts"),
				C = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				g = s("./src/reddit/models/Media/index.ts"),
				P = s("./src/reddit/models/Subreddit/index.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/PostTopLine/index.m.less"),
				y = s.n(j);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: n,
					hideAwards: j,
					hideNSFWPref: w,
					hostPostData: k,
					iconClassName: _,
					inSubredditOrProfile: I,
					isCommentsPage: S,
					isCompactPinnedPost: N,
					isCurrentUserProfilePost: M,
					isModWithUserNotesPermissions: T,
					isOverlay: L,
					isTopicPage: F,
					listingKey: A,
					post: R,
					shouldShowSubscribeButton: B,
					showCornerOutboundLink: D,
					showSubreddit: W,
					showSubredditIcon: V,
					subredditOrProfile: U,
					isFollowed: H,
					shouldShowFollowButton: G,
					onFollowPostClick: K
				} = e;
				const z = j || F,
					q = U && Object(P.i)(U),
					J = Object(i.e)(e => {
						if (!q) return !0;
						const t = Object(E.Gb)(e, R.author || "");
						return !t || t.enableFollowers
					});
				return r.a.createElement("div", {
					className: Object(a.a)(y.a.container, t)
				}, W && U && r.a.createElement("div", {
					className: y.a.subredditIconWrapper
				}, r.a.createElement(b.a, {
					"data-click-id": "subreddit",
					to: U.url
				}, V && r.a.createElement(u.b, {
					className: Object(a.a)(y.a.subredditIcon, _),
					shouldHideNsfwIcon: w,
					subredditOrProfile: U
				}))), r.a.createElement("div", {
					className: y.a.everythingElseWrapper
				}, W && r.a.createElement(c.h, {
					type: R.belongsTo.type,
					id: R.belongsTo.id
				}), r.a.createElement(p.d, {
					className: y.a.postTopMeta,
					forceOpenInNewTab: n,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: T,
					tooltipType: L ? p.c.Lightbox : void 0,
					post: R,
					showSub: W,
					subredditOrProfile: U
				}), r.a.createElement(m.a, {
					className: y.a.postBadges,
					displayText: U ? U.displayText : null,
					inSubredditOrProfile: I,
					isCompactPinnedPost: N,
					post: R,
					tooltipType: L ? p.c.Lightbox : void 0
				}), !z && r.a.createElement(d.a, {
					isPostDetail: S,
					thing: R,
					tooltipType: L ? p.c.Lightbox : void 0
				})), U && J && W && B && !M && r.a.createElement(h.a, {
					className: y.a.SubscribeButton,
					getEventFactory: e => Object(O.k)(R.id, e ? "unsubscribe" : "subscribe", "post", A, k),
					identifier: {
						name: U.name,
						type: q ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: R.id,
					size: f.d.XS
				}), D && r.a.createElement(v.b, {
					isSponsored: R.isSponsored,
					postId: R.id,
					href: Object(g.D)(R),
					source: R.source
				}, r.a.createElement(C.a, {
					className: y.a.outboundLinkIcon
				})), G && J && r.a.createElement(l.a, {
					isFilled: !!H,
					onClick: K,
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
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/tooltip.ts"),
				a = s("./src/reddit/models/Vote/index.ts"),
				d = s("./src/reddit/contexts/InsideOverlay.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/Post/index.tsx"),
				m = s("./src/reddit/selectors/activeModalId.ts"),
				p = s("./src/reddit/selectors/chatPost.ts"),
				u = s("./src/reddit/selectors/moderatorPermissions.ts"),
				b = s("./src/reddit/selectors/postFlair.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/showPromotedCTA.ts"),
				f = s("./src/reddit/selectors/user.ts");
			const v = {
					autoplayPref: f.b,
					activeModalId: m.a,
					crosspost: h.d,
					isActive: h.j,
					isChatPost: p.d,
					isCurrentUserProfilePost: h.l,
					isExpanded: h.m,
					isLoggedIn: f.Q,
					showPromotedCTA: x.a,
					moderatorPermissions: u.n,
					modModeEnabled: c.U,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: b.a,
					showMedia: c.s,
					flairStyleTemplate: c.W
				},
				O = Object(o.b)(() => Object(n.c)(v), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const o = t === a.a.upvoted ? Object(r.kb)(s) : Object(r.w)(s);
							e(o)
						},
						onIgnoreReports: () => e(Object(r.gb)(s)),
						onOpenReportsDropdown: t => e(Object(i.h)({
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
				return E
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "b", (function() {
				return k
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
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/components/PostList/Placeholder.tsx"),
				f = s("./src/reddit/featureFlags/index.ts"),
				v = s("./src/reddit/selectors/experiments/survey.ts"),
				O = s("./src/reddit/selectors/listings.ts"),
				C = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/selectors/tracking.ts");

			function E() {
				return Object(u.u)({
					currentProfileName: u.i,
					isCommentPermalink: u.w,
					isCommentsPage: u.x,
					isFrontpage: u.A,
					isProfilePostListing: u.L,
					isTopicPage: u.R,
					pageLayer: e => e
				})
			}
			const j = E(),
				y = {
					apiError: O.c,
					apiPending: O.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(u.S)(e, t),
					loadMore: O.g,
					postsById: C.S,
					postIds: Object(r.a)((e, t) => {
						let {
							listingKey: s,
							listingName: o,
							inSubredditOrProfile: n
						} = t;
						return Object(C.D)(e, s, o, n)
					}),
					subredditsById: g.bb,
					viewportDataLoaded: P.a,
					pageReferrer: u.V,
					postListPlaceholderComponent: () => x.a,
					isNpsScrollSurveyEnabled: v.e
				},
				w = Object(n.c)(y),
				k = e => ({
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
					trackOnPostExitedViewport: (t, s, o, n, r) => {
						e(c.P(t, o, n, r))
					},
					showModalOnScroll: () => e(c.cb()),
					surveyTriggerScrollCounted: () => e(Object(m.l)())
				}),
				_ = e => Object(b.b)({
					...e
				}),
				I = (e, t, s, o) => {
					const {
						listingKey: n,
						hostPostData: r,
						listingBelowVariant: i
					} = o;
					return Object(h.k)(e, t, "post", n, r, i, void 0)
				},
				S = Object(o.b)(w, k, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: _,
					postClickEventFactory: I
				}));
			t.a = e => Object(p.c)(j(S(e)))
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
				p = s("./src/reddit/selectors/postFlair.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(o.b)(() => Object(n.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: u.d,
				crosspostSubredditOrProfile: u.e,
				flairStyleTemplate: c.W,
				hideNSFWPref: b.F,
				isActive: u.j,
				moderatorPermissions: m.n,
				modModeEnabled: c.U,
				showEditFlair: p.a
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
		"./src/reddit/constants/gold.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "f", (function() {
				return a
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
				i = 4,
				a = 1e4,
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
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/controls/Checkbox/index.m.less"),
				d = s.n(a);
			t.a = e => n.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, n.a.createElement(i.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const n = e => {
				let {
					edges: t
				} = e;
				const s = [];
				for (const {
						node: n
					} of t) s.push(Object(o.f)(n));
				return s
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/PostMedia/index.tsx");
			const i = (e, t, s, o, r, i) => o ? e.crosspostRootId ? n.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, a(e, s, r, i)) : a(e, s, r, i) : null,
				a = (e, t, s, o) => n.a.createElement(r.a, {
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
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "d", (function() {
				return f
			}));
			var o = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = s("./src/reddit/models/Theme/index.ts"),
				d = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(c);
			const m = {},
				p = e => Object(a.g)(Object(d.a)(e).post, Object(d.a)(e).backgroundImage, Object(d.a)(e).backgroundImagePosition),
				u = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(d.a)(t).post, e.postBackgroundImage, Object(d.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: p(t)
					}
				},
				b = e => Object(o.k)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : m,
				x = e => e.isActive ? l.a.mIsActive : void 0,
				f = e => {
					const t = Object(r.a)(Object(n.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/creatorStats.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			}));
			var o = s("./src/reddit/components/CreatorStats/helpers.ts"),
				n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const i = e => {
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
				a = (e, t) => s => ({
					...Object(r.n)(s),
					action: n.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(r.gb)(s),
					post: Object(r.H)(s, e),
					userSubreddit: Object(r.qb)(s),
					actionInfo: Object(r.d)(s, {
						reason: i(t)
					})
				}),
				d = (e, t) => s => ({
					...Object(r.n)(s),
					action: n.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(r.H)(s, t),
					subreddit: Object(r.gb)(s),
					userSubreddit: Object(r.qb)(s)
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
					...Object(r.n)(t),
					action: n.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(r.d)(t, {
						pageType: "profile"
					}),
					post: Object(r.H)(t, e, void 0, 0),
					profile: Object(r.Q)(t)
				}),
				m = (e, t, s) => o => ({
					...Object(r.n)(o),
					action: n.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(r.d)(o, {
						reason: c(t)
					}),
					post: Object(r.H)(o, e, void 0, s)
				}),
				p = (e, t, s, o, i, a) => d => ({
					...Object(r.n)(d),
					action: n.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(r.d)(d, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(r.H)(d, e, void 0, a),
					subreddit: Object(r.gb)(d),
					outbound: {
						postId: s,
						url: t,
						subredditId: o,
						subredditName: i
					}
				}),
				u = (e, t, s) => o => ({
					...Object(r.n)(o),
					action: n.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(r.d)(o, {
						pageType: "post_stats",
						reason: c(t)
					}),
					post: Object(r.H)(o, e, void 0, s),
					subreddit: Object(r.gb)(o)
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
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("distinguish", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(r.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(r.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/CircleCheckLight/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			const r = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M18.04 7.67457C18.5905 9.55741 18.4654 11.5734 17.6865 13.3738C16.9076 15.1742 15.5238 16.6457 13.7746 17.5336C12.0254 18.4215 10.0209 18.67 8.1078 18.2362C6.19473 17.8023 4.49351 16.7133 3.29851 15.1576C2.10351 13.602 1.48992 11.6775 1.5639 9.71728C1.63788 7.75702 2.39478 5.88429 3.70364 4.42313C5.01249 2.96197 6.79095 2.00431 8.73128 1.71586C10.6716 1.42742 12.6517 1.82633 14.329 2.84357L15.189 1.90557C13.2556 0.658893 10.9412 0.141738 8.661 0.446834C6.38077 0.75193 4.2838 1.85932 2.74608 3.57044C1.20837 5.28156 0.330485 7.4845 0.269845 9.78425C0.209205 12.084 0.969774 14.3301 2.41518 16.1199C3.86058 17.9097 5.89628 19.1261 8.15726 19.5509C10.4182 19.9757 12.7566 19.5813 14.7531 18.4382C16.7496 17.2952 18.2736 15.4783 19.0519 13.3134C19.8301 11.1485 19.8118 8.77715 19 6.62457L18.04 7.67457Z",
				fill: "inherit"
			}), n.a.createElement("path", {
				d: "M9.99503 12.6426C9.91293 12.6427 9.83162 12.6266 9.75577 12.5952C9.67991 12.5638 9.61101 12.5177 9.55303 12.4596L5.54703 8.45257L6.43203 7.56957L9.97603 11.1146L19.013 1.24657L19.935 2.08957L10.456 12.4396C10.3989 12.5013 10.3298 12.5509 10.253 12.5852C10.1762 12.6196 10.0932 12.6381 10.009 12.6396L9.99503 12.6426Z",
				fill: "inherit"
			}))
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
				p = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/promo/withShowSignupUpsell.tsx"),
				x = s("./src/reddit/actions/nsfwBlocking/async.tsx"),
				f = s("./src/reddit/actions/pages/profileOverview/index.ts"),
				v = s("./src/reddit/actions/pages/profileShared.ts"),
				O = s("./src/reddit/actions/profileConversations.ts"),
				C = s("./src/reddit/components/ContentGate/index.tsx"),
				g = s("./src/reddit/components/CreatorStats/EducationUnit.tsx"),
				P = s("./src/reddit/components/EmptyProfile/index.ts"),
				E = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				j = s("./src/reddit/components/JumpToContent/index.tsx"),
				y = s("./src/reddit/components/PostList/index.tsx"),
				w = s("./src/reddit/components/TrackingHelper/index.tsx"),
				k = s("./src/lib/classNames/index.ts"),
				_ = s("./src/lib/isPinnedAdminPost/index.ts"),
				I = s("./src/lib/lessComponent.tsx"),
				S = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				N = s("./node_modules/lodash/last.js"),
				M = s.n(N);
			var T = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				L = s("./src/reddit/selectors/posts.ts"),
				F = s("./src/reddit/components/ClassicPost/index.tsx"),
				A = s("./src/reddit/components/LargePost/index.tsx"),
				R = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				B = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				D = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				W = s("./src/reddit/selectors/profile.ts"),
				V = s("./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less"),
				U = s.n(V);
			const {
				fbt: H
			} = s("./node_modules/fbt/lib/FbtPublic.js"), G = I.a.div("ExtraCommentsItemWrapper", U.a), K = I.a.p("ExtraComments", U.a), z = I.a.wrapped(K, "ExtraCommentsInteractive", U.a);
			var q = Object(a.b)(() => Object(d.c)({
					extraCommentsItem: W.c,
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
						extraCommentsClicked: t => e(Object(O.g)(s, t.postId, t.id))
					}
				})(e => {
					let {
						extraCommentsClicked: t,
						extraCommentsItem: s,
						extraCommentsPending: o
					} = e;
					return i.a.createElement(G, null, o ? i.a.createElement(K, null, H._("Loading...", null, {
						hk: "47z90C"
					})) : i.a.createElement(D.a.Consumer, null, e => i.a.createElement(z, {
						onClick: e => {
							t(s), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, H._("Load more comments", null, {
						hk: "1jXJxb"
					}))))
				}),
				J = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				Q = s("./src/reddit/contexts/Post/index.tsx"),
				Z = s("./src/reddit/hooks/useTheme.ts"),
				X = s("./src/reddit/constants/postLayout.ts"),
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
			const oe = I.a.div("BackgroundWrapper", te.a),
				ne = I.a.wrapped(F.default, "ClassicPost", te.a),
				re = I.a.wrapped(R.a, "OverviewCommentPost", te.a),
				ie = Object(a.b)(() => Object(d.c)({
					commentThreadLinkSets: (e, t) => {
						let {
							postId: s,
							currentProfileName: o
						} = t;
						const n = o ? o.toLowerCase() : "",
							r = Object(S.a)(s, n);
						return e.pages.profileOverview.conversations.keyToCommentThreadLinkSets[r]
					},
					headComment: (e, t) => {
						let {
							postId: s,
							currentProfileName: o
						} = t;
						const n = o ? o.toLowerCase() : "",
							r = Object(S.a)(s, n);
						return e.pages.profileOverview.conversations.keyToHeadCommentId[r]
					},
					isInitiallyPinned: (e, t) => {
						let {
							postId: s,
							currentProfileName: o
						} = t;
						return !!o && Object(L.p)(e, s, o)
					},
					isPinned: (e, t) => {
						let {
							postId: s,
							currentProfileName: o
						} = t;
						return !!o && Object(L.r)(e, s, o)
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
					layout: u.S
				})),
				ae = I.a.wrapped(A.default, "OverviewLargePost", te.a),
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
						isProfileCreatorStatsEnabled: l,
						isScrolling: m,
						last: p,
						layout: u,
						onClickPost: b,
						onSizeChanged: h,
						pageLayer: x,
						post: f,
						postId: v,
						profileName: O,
						scrollerItemRef: C,
						userIsOp: g
					} = e, P = {
						last: p,
						onClickPost: b,
						postId: v
					};
					if (!O) return null;
					const E = O === f.author,
						j = Object(_.a)(c, f.distinguishType);
					if (!E && !a && !j) return null;
					const y = a ? function(e) {
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
						}(o, a)) : [],
						w = y.length - 1,
						I = g && l;
					return i.a.createElement("div", {
						className: Object(k.a)($.a.largeAndMediumActiveStyles, $.a.largeAndMediumPostStyles, te.a.OverviewConversationsPost, s),
						style: {
							...Object(T.b)(),
							...Object(T.d)(e)
						}
					}, i.a.createElement(B.a, {
						className: I ? te.a.shouldShowOverflow : void 0,
						isFirst: !0,
						isLast: w < 0,
						key: f.id
					}, !E && !!a && i.a.createElement(re, se({}, P, {
						commentId: a,
						key: f.id,
						profileName: O
					})), (E || j) && (u === X.g.Classic ? i.a.createElement(ne, {
						availableWidth: t,
						eventFactory: n,
						inSubredditOrProfile: !1,
						isOverlay: !1,
						isScrolling: m,
						forceLoadMedia: r,
						last: p,
						onClickPost: b,
						onSizeChanged: h,
						pageLayer: x,
						postId: v,
						scrollerItemRef: C
					}) : i.a.createElement(ae, {
						availableWidth: t,
						eventFactory: n,
						isScrolling: m,
						isFrontpage: !1,
						forceLoadMedia: r,
						last: p,
						onClickPost: b,
						onSizeChanged: h,
						pageLayer: x,
						postId: v,
						scrollerItemRef: C,
						shouldShowInsightsButton: I
					}))), i.a.createElement(oe, {
						style: {
							background: Object(T.e)(e)
						}
					}, !d && y.map((e, t) => i.a.createElement(B.a, {
						isLast: t === w,
						key: `${t}-isLast[${t===w}]`
					}, e.map((t, s) => {
						const o = 0 === s,
							n = s === e.length - 1;
						return "comment" === t.type ? i.a.createElement(J.a, {
							commentId: t.id,
							depth: t.depth,
							isFirst: o,
							isLast: n,
							key: t.id,
							profileName: O,
							showModTools: !0
						}) : i.a.createElement(q, {
							extraCommentsId: t.id,
							key: t.id,
							profileName: O
						})
					})))))
				});
			var ce = Object(Q.b)((function(e) {
					var t;
					const s = Object(Z.a)(),
						o = Object(u.fb)();
					return i.a.createElement(de, se({
						theme: null !== (t = e.theme) && void 0 !== t ? t : s,
						currentProfileName: Object(u.i)(o),
						pageLayer: o
					}, e))
				})),
				le = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				me = s("./src/reddit/helpers/trackers/post.ts"),
				pe = s("./src/reddit/selectors/tracking.ts"),
				ue = s("./src/reddit/connectors/PostList/index.ts");
			const be = Object(d.c)({
					...ue.d,
					postIds: L.O,
					viewportDataLoaded: pe.a
				}),
				he = Object(ue.c)(),
				xe = Object(a.b)(be, ue.b, (e, t, s) => ({
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
			var fe = (e => Object(w.c)(he(xe(e))))(y.a),
				ve = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				Oe = s("./node_modules/lodash/debounce.js"),
				Ce = s.n(Oe),
				ge = s("./src/reddit/actions/post.ts"),
				Pe = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Ee = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				je = s("./src/reddit/components/Media/index.tsx"),
				ye = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				we = s("./src/reddit/components/PostContainer/index.tsx"),
				ke = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				_e = s("./src/reddit/components/PostTitle/index.tsx"),
				Ie = s("./src/reddit/connectors/miniCardPost.ts"),
				Se = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Ne = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Me = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Te = s("./src/reddit/models/Media/index.ts"),
				Le = s("./src/reddit/models/Post/index.ts"),
				Fe = s("./node_modules/fbt/lib/FbtPublic.js"),
				Ae = s("./src/reddit/components/CommentsLink/index.tsx"),
				Re = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				Be = s("./src/reddit/components/Flatlist/index.tsx"),
				De = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				We = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				Ve = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Ue = s("./src/reddit/components/ShareMenu/index.tsx"),
				He = s("./src/reddit/icons/fonts/Share/index.tsx"),
				Ge = s("./src/reddit/models/User/index.ts"),
				Ke = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				ze = s.n(Ke);
			const qe = "-MiniCardModMenu",
				Je = "-MiniCardOverflowMenu",
				Qe = "-MiniCardShareMenu",
				Ze = I.a.wrapped(Re.a, "HorizontalVotes", ze.a),
				Xe = I.a.button("ShareButton", ze.a),
				Ye = Object(u.u)({
					currentProfileName: u.i,
					isCommentPermalink: u.w,
					isCommentsPage: u.x,
					isProfilePostListing: u.L,
					pageLayer: e => e
				}),
				$e = Object(d.c)({
					layout: u.S,
					subreddit: u.r
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
						isProfilePostListing: p,
						isSticky: u,
						layout: b,
						modModeEnabled: h,
						onCommentsClick: x,
						post: f,
						sendEvent: v,
						showEditFlair: O,
						showEditPost: C,
						subreddit: g
					} = e, P = e => v(Object(me.k)(f.id, e)), E = f.postId, j = Object(Be.d)(qe, f.id, m, u), y = !!o && Object(Ge.e)(o) === f.author;
					return i.a.createElement("div", {
						className: Object(k.a)(ze.a.flatlistContainer, s)
					}, i.a.createElement(Ze, {
						compact: !1,
						model: f,
						onVoteClick: n,
						scoreClassName: ze.a.score
					}), i.a.createElement(Ae.a, {
						hasModPostPerms: d,
						isCommentsPage: c,
						isCommentPermalink: l,
						isOverlay: m,
						postId: f.id,
						modModeEnabled: h,
						numComments: f.numComments,
						type: X.g.Compact,
						onClick: x
					}), i.a.createElement(Ue.a, {
						className: ze.a.shareMenu,
						dropdownId: Object(Be.d)(Qe, f.id, m, u),
						permalink: f.permalink,
						post: f,
						sendEventWithName: P,
						subredditType: null == g ? void 0 : g.type
					}, i.a.createElement(Xe, null, i.a.createElement(He.a, {
						className: ze.a.shareIcon
					}), i.a.createElement("span", {
						className: ze.a.shareText
					}, Fe.fbt._("share", null, {
						hk: "mmJV5"
					})))), d && i.a.createElement(De.a, {
						dropdownId: j,
						onClick: () => P("post_mod_action_menu")
					}, i.a.createElement(Be.b, {
						className: ze.a.modActionsIcon
					}), i.a.createElement(We.a, {
						canEditFlair: r && !!O,
						hasModPostPerms: d,
						hasModFullPerms: a,
						isOverlay: !!m,
						isPostAuthor: y,
						modModeEnabled: h,
						post: f,
						tooltipId: j
					})), i.a.createElement(Ve.a, {
						currentProfileName: t,
						isCommentsPage: c,
						isOverlay: !!m,
						isProfilePostListing: p,
						layout: b,
						pageLayer: e.pageLayer,
						permalink: f.permalink,
						postId: E,
						dropdownId: Object(Be.d)(Je, f.id, m, u),
						isFixed: u,
						sendEvent: v,
						showEditPost: !!C,
						showEditFlair: !!O,
						useFlatlistBreakpoints: Object(Ve.b)({
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
			var rt = Object(u.u)()(Object(Q.b)(Object(Ie.a)(Object(Pe.a)(e => {
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
						moderatorPermissions: p,
						modModeEnabled: u,
						onClickPost: b,
						post: h,
						scrollerItemRef: x,
						shouldPause: f,
						showMetaLine: v = !0,
						showEditFlair: O,
						subredditOrProfile: C,
						userIsOp: g
					} = e, {
						media: P
					} = n || h, E = P && P.type, j = Object(ke.b)(h.id), y = E === Te.o.RTJSON, w = g && y, _ = Object(Me.a)(p), I = Object(Se.a)(p), S = Object(Ne.a)(p), N = P && E !== Te.o.RTJSON && E !== Te.o.TEXT, M = E === Te.o.VIDEO || E === Te.o.GIFVIDEO || E === Te.o.LIVEVIDEO, L = Object(Le.p)(h), F = P && i.a.createElement(je.a, {
						autoplayPref: t,
						availableWidth: s,
						className: nt.a.media,
						imageBoxClassName: Object(k.a)(nt.a.mediaImageBox, {
							[nt.a.videoStyles]: M
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
						className: Object(k.a)(nt.a.postContainer, $.a.largeAndMediumActiveStyles, $.a.largeAndMediumPostStyles, Object(T.a)(e), o),
						style: {
							...Object(T.b)(e.flairStyleTemplate),
							...Object(T.d)(e)
						},
						post: h,
						onClick: b,
						eventFactory: d
					}, i.a.createElement(ye.a, {
						className: nt.a.backgroundWrapper,
						flairStyleTemplate: c
					}, N && F, i.a.createElement("div", {
						className: nt.a.innerContainer
					}, L && i.a.createElement(st.a, {
						post: h,
						templatePlaceholderImage: c ? c.postPlaceholderImage : void 0
					}), i.a.createElement(_e.c, {
						className: nt.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: h,
						size: _e.b.Large,
						titleColor: c && c.postTitleColor
					}), v && C && i.a.createElement(tt.a, {
						className: nt.a.metaLine,
						crosspostSubredditOrProfile: r,
						hideNSFWPref: m,
						post: h,
						subredditOrProfile: C
					}), !N && i.a.createElement("div", {
						className: nt.a.mediaWrapper
					}, F), i.a.createElement("div", {
						className: nt.a.flexSpacer
					}), i.a.createElement(et, {
						currentUser: a,
						handleVote: e.handleVote,
						hasModFlairPerms: I,
						hasModFullPerms: S,
						hasModPostPerms: _,
						modModeEnabled: u,
						post: h,
						showEditFlair: O,
						showEditPost: w
					}))), e.activeModalId === j && i.a.createElement(ke.a, {
						flairs: h.flair,
						subredditId: h.belongsTo.id,
						modalId: j,
						onFlairChanged: e.onFlairChanged
					}), i.a.createElement(Ee.d, null))
				})))),
				it = s("./src/reddit/helpers/getClickInfo.ts"),
				at = s("./src/reddit/selectors/user.ts"),
				dt = s("./src/reddit/icons/fonts/index.tsx"),
				ct = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less"),
				lt = s.n(ct);
			const {
				fbt: mt
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var pt = e => i.a.createElement("div", {
					className: Object(k.a)(lt.a.container, e.className)
				}, i.a.createElement(dt.a, {
					name: "pin",
					className: lt.a.pin
				}), i.a.createElement("div", {
					className: lt.a.title
				}, mt._("Show off that karma!", null, {
					hk: "2yqUT7"
				})), e.children),
				ut = s("./src/reddit/controls/TextButton/index.tsx"),
				bt = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less"),
				ht = s.n(bt);
			const {
				fbt: xt
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var ft = e => i.a.createElement(pt, {
					className: Object(k.a)(ht.a.container, e.className)
				}, i.a.createElement("div", {
					className: ht.a.description
				}, xt._('Pin a post from your feed using the "..." at the bottom of each post', null, {
					hk: "4lkJRB"
				})), i.a.createElement(ut.a, {
					className: ht.a.gotIt,
					onClick: e.onGotItClick
				}, xt._("OK, I got it", null, {
					hk: "1JMx7x"
				}))),
				vt = s("./src/reddit/components/ProfilePinnedPosts/index.m.less"),
				Ot = s.n(vt);
			const {
				fbt: Ct
			} = s("./node_modules/fbt/lib/FbtPublic.js"), gt = 320, Pt = 300, Et = Object(d.c)({
				arePinnedPostsLoaded: L.a,
				currentUser: at.k,
				pinnedPostIds: L.P
			}), jt = Object(a.b)(Et, e => ({
				openPost: t => e(Object(ge.L)(t))
			}));
			class yt extends i.a.Component {
				constructor() {
					super(...arguments), this.containerRef = null, this.state = {
						showEducation: !1,
						pauseMedia: !1
					}, this.setContainerRef = e => this.containerRef = e, this.handleScroll = Ce()(() => {
						if (!this.containerRef) return;
						const e = this.containerRef.getBoundingClientRect();
						e.bottom < Pt ? this.pauseMedia() : e.top > 0 && this.playMedia()
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
						Object(m.Lb)(), this.setState({
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
						className: Object(k.a)(Ot.a.item, Ot.a.miniCardPost),
						forceLoadMedia: !this.state.pauseMedia,
						onClickPost: this.onClickPost,
						shouldPause: this.state.pauseMedia
					})
				}
				componentDidMount() {
					this.setState({
						showEducation: !Object(m.K)()
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
						className: Ot.a.title
					}, Ct._("Pinned posts", null, {
						hk: "3prRc3"
					})), r ? i.a.createElement(ft, {
						className: Object(k.a)(Ot.a.item, Ot.a.education),
						onGotItClick: this.onGotItClick
					}) : i.a.createElement("div", {
						ref: this.setContainerRef,
						className: Ot.a.container
					}, t.map(this.renderPost), a && i.a.createElement(pt, {
						className: Ot.a.item
					})), s)
				}
			}
			var wt = Object(u.u)()(jt(yt)),
				kt = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				_t = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				It = s("./src/reddit/helpers/name/index.ts"),
				St = s("./src/reddit/helpers/trackers/screenview.ts"),
				Nt = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				Mt = s("./src/reddit/layout/page/Listing/index.tsx"),
				Tt = s("./src/reddit/models/ContentGate.ts"),
				Lt = s("./src/reddit/pages/ErrorPages/index.tsx"),
				Ft = s("./src/reddit/pages/ProfileBlockInterstitial/index.tsx"),
				At = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				Rt = s("./src/reddit/selectors/experiments/creatorStats.ts"),
				Bt = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");

			function Dt() {
				return (Dt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Wt = (e, t) => {
					let {
						location: s
					} = t;
					return n()([...Object(c.a)(s.search)])
				},
				Vt = Object(u.u)(),
				Ut = Object(d.c)({
					isProfileCreatorStatsEnabled: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(u.E)(e, {
							pageLayer: s
						}) && Object(Rt.b)(e)
					},
					isOwnProfile: u.E,
					over18Prefs: at.kb,
					layout: u.S
				}),
				Ht = Object(d.a)(Ut, Wt, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.profileName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(W.j)(e, {
						profileName: s.params.profileName
					})
				}, (e, t) => Object(v.a)(e, Wt(0, t)), (e, t) => {
					let {
						match: s
					} = t;
					return !Object(L.n)(e, {
						profileName: s.params.profileName
					})
				}, at.Q, (e, t) => {
					let {
						match: s
					} = t;
					return Object(at.f)(e, b.kc + s.params.profileName)
				}, (e, t) => {
					let {
						match: s
					} = t;
					return {
						isProfileBlockInterstitialEnabled: Object(At.c)(e),
						isBlocked: Object(at.L)(e, {
							profileName: s.params.profileName
						})
					}
				}, Bt.f, (e, t, s, o, n, r, i, a, d, c) => {
					let {
						sort: l,
						t: m
					} = n, {
						isProfileBlockInterstitialEnabled: u,
						isBlocked: h
					} = d;
					var x, f;
					const v = b.ub,
						O = Object(p.a)(s, v, l, t),
						{
							sort: C
						} = t;
					return {
						contentGateInfo: a,
						isLoggedIn: i,
						isProfileNSFW: !!o && o.isNSFW,
						listingKey: O,
						profileName: s,
						shouldShowPinnedPostsSection: r && !C,
						sort: l,
						timeSort: m,
						avatar: null === (x = null == o ? void 0 : o.icon) || void 0 === x ? void 0 : x.url,
						isProfileBlockInterstitialEnabled: u,
						isBlocked: h,
						profileId: null !== (f = null == o ? void 0 : o.id) && void 0 !== f ? f : "",
						...e,
						nsfwBlockingExperiment: c
					}
				}),
				Gt = Object(a.b)(Ht, (e, t) => ({
					onLoadMoreConversationsItems: () => e(O.h({
						profileName: t.match.params.profileName,
						sort: t.match.params.sort
					})),
					onLayoutChange: () => e(Object(f.profileOverviewRequested)({
						...t.match,
						queryParams: n()([...Object(c.a)(t.location.search)])
					})),
					openNsfwModal: () => e(Object(x.a)())
				}));
			class Kt extends i.a.Component {
				constructor(e) {
					super(e), this.onStorage = () => {
						this.setState({
							showPostStatsUnit: Object(m.J)() <= 2
						})
					}, this.renderNoPosts = () => i.a.createElement(P.c, {
						profileName: this.props.profileName,
						timeSort: this.props.timeSort
					}), this.getInjectChildren = () => {
						const e = {};
						return this.state.showPostStatsUnit && this.props.isOwnProfile && this.props.isProfileCreatorStatsEnabled && (e[0] = {
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
						showPostStatsUnit: Object(m.J)() <= 2
					}), this.props.isProfileNSFW && !this.props.isOwnProfile && this.props.nsfwBlockingExperiment === Bt.a.Blurred && this.props.openNsfwModal()
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
						pageLayer: p,
						profileId: u,
						profileName: h,
						shouldShowPinnedPostsSection: x,
						showSignupUpsell: f,
						sort: v,
						timeSort: O
					} = this.props;
					if (!p) return null;
					if (t && t.profileDeleted) return i.a.createElement(C.default, {
						contentGateType: Tt.a.ProfileDeleted,
						profileName: h
					});
					if (t && t.profileSuspended) return i.a.createElement(C.default, {
						contentGateType: Tt.a.ProfileSuspended,
						profileName: h
					});
					if (451 === p.status || t && t.profileBlockedForLegalReason) return i.a.createElement(C.default, {
						contentGateType: Tt.a.ProfileBlockedForLegalReason,
						profileName: h
					});
					const g = p.queryParams && "true" === p.queryParams.consent;
					if (403 === p.status || s && !g) return n ? i.a.createElement(Ft.a, {
						username: h,
						avatar: e,
						uid: u
					}) : i.a.createElement(Lt.a, null);
					if (404 === p.status) return i.a.createElement(C.default, {
						contentGateType: Tt.a.ProfileDoesNotExist,
						profileName: h
					});
					if (!h) return null;
					const P = h.toLowerCase(),
						y = `/user/${h}/`,
						w = {
							listingKey: a,
							listingName: P
						};
					if (r && !o && d === Bt.a.NoPreview) return i.a.createElement(_t.a, {
						contentTitle: Object(It.d)(h)
					});
					if (!m && r && !o && d !== Bt.a.Blurred) return i.a.createElement(C.default, {
						subredditName: h,
						contentGateType: Tt.a.Nsfw
					});
					const k = {
							inSubredditOrProfile: !Object(l.a)(h),
							listingKey: a,
							listingName: P,
							listingViewed: (e, t) => Object(St.q)(a, v, t, e, O),
							noPostsComponent: this.renderNoPosts,
							onScroll: f,
							onTryAgain: c
						},
						_ = {
							sort: v,
							baseUrl: y,
							sortOptions: b.Ab,
							timeSort: O
						},
						I = i.a.createElement(i.a.Fragment, null, x && i.a.createElement(wt, {
							profileName: h
						}), i.a.createElement(E.a, _), i.a.createElement(fe, Dt({}, k, {
							getInjectChildren: this.state.showPostStatsUnit && this.props.isOwnProfile && this.props.isProfileCreatorStatsEnabled ? this.getInjectChildren : void 0,
							excludePinnedPosts: x,
							onLoadMore: this.props.onLoadMoreConversationsItems,
							isProfileCreatorStatsEnabled: this.props.isProfileCreatorStatsEnabled && this.props.isOwnProfile
						})));
					return i.a.createElement(Mt.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(ve.a, {
							profileName: h,
							viewBlockedConsent: g
						})),
						content: i.a.createElement(i.a.Fragment, null, i.a.createElement(j.a, null), I),
						sidebar: i.a.createElement(kt.a, Dt({}, w, {
							profileName: h
						}))
					})
				}
			}
			t.default = Vt(Gt(Object(h.a)(Object(Nt.d)(Kt))))
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: o.Tc
				});
				return !(!t || Object(o.Vf)(t))
			}
		},
		"./src/reddit/selectors/experiments/signupUpsellExperiment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "b", (function() {
				return u
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
			const d = Object(o.a)(i.g, i.d, a.e, (e, t, s) => !e && !t && !s);

			function c(e, t) {
				return s => Object(r.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: d,
					throttledVariants: {
						[n.vc.Bottom_cell_dismissible]: e,
						[n.vc.Bottom_cell_dismissible_immediate_trigger]: e,
						[n.vc.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = c(n.Cb, !0),
				m = c(n.Db, !0),
				p = c(n.Eb, !0),
				u = c(n.Cb, !1),
				b = c(n.Db, !1),
				h = c(n.Eb, !1)
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
				return x
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "g", (function() {
				return C
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
						const t = Object(i.U)(e, {
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
					const o = Object(i.Y)(e, {
						subredditName: s.name
					});
					return o && o.postIds && o.postIds.length ? o.postIds : m
				}),
				u = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(i.U)(e, {
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
				O = e => e.focusedVerticals.category,
				C = e => e.focusedVerticals.lastLoadedEnv,
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
					return Boolean(t) && !Object(n.Vf)(t)
				},
				d = Object(o.a)(a, r.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/posts.ts");
			const a = e => Object(r.c)(e, {
					experimentName: n.Me,
					experimentEligibilitySelector: r.a
				}),
				d = (e, t) => t === n.Ue.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				c = Object(o.a)(i.G, a, (e, t) => d(e, t));
			Object(o.a)((e, t) => t, a, (e, t) => d(e, t))
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"c10a566d5f55"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileOverview.1ade6e852c4c1bcad622.js.map