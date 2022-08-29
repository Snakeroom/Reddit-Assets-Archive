// https://www.redditstatic.com/desktop2x/ProfileOverview.6e5c266065a854e45e97.js
// Retrieved at 8/29/2022, 11:40:04 AM by Reddit Dataminer v1.0.0
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
					const e = Object(m.a)(d.Rc.Bottom_cell),
						t = Object(m.a)(d.Rc.Bottom_cell_dismissible),
						s = Object(m.a)(d.Rc.Bottom_cell_dismissible_immediate_trigger),
						o = Object(m.a)(d.Rc.Bottom_cell_signup_upsell_copy),
						n = Object(m.a)(d.Rc.Bottom_cell_surprise_install_copy),
						r = Object(m.a)(d.Rc.Bottom_sheet);
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
						} = Object(c.a)(), s = p(), r = Object(u.a)(s), l = Object(m.a)(d.Rc.Bottom_cell_dismissible_immediate_trigger);
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
				return v
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "c", (function() {
				return P
			})), s.d(t, "b", (function() {
				return k
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
				O = Object(n.a)(i.c),
				v = Object(n.a)(i.f),
				g = Object(n.a)(i.j),
				P = Object(n.a)(i.i),
				C = () => async (e, t, s) => {
					let {
						gqlContext: n
					} = s;
					const r = t(),
						i = Object(p.e)(r),
						c = Object(p.d)(r),
						u = Object(b.P)(r);
					if (i || !c) return;
					e(f());
					let v = !1;
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
							if (j(t)) {
								if (y(t)) {
									e(O({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), v = !0
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
										p = {
											recommendedSubredditIds: [o.id],
											interactedSubredditIds: [n.id],
											subreddits: a,
											subredditsAboutInfo: d,
											subredditTopContent: c,
											category: r,
											lastLoadedEnv: "client"
										};
									e(h(p)), v = !0
								}
							} else v = !1
						}
					} catch (g) {
						v = !1
					}
					v || e(x({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, j = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, y = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, E = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						o = t && t.type;
					return !!(s && !y(e) && o === c.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, k = () => async (e, t, s) => {
					var o, n;
					const i = t(),
						a = Object(p.g)(i);
					if (Object(p.f)(i) || null === a || "client" === a) {
						const s = null === (n = null === (o = Object(u.b)(t())) || void 0 === o ? void 0 : o.routeMatch) || void 0 === n ? void 0 : n.route.chunk,
							a = Object(b.Q)(i);
						return Object(r.i)(() => e(C()), {
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
				return Ee
			})), s.d(t, "profileOverviewConversationsLoaded", (function() {
				return ke
			})), s.d(t, "profileOverviewConversationsFailed", (function() {
				return we
			})), s.d(t, "profileOverviewChronoPending", (function() {
				return _e
			})), s.d(t, "profileOverviewChronoLoaded", (function() {
				return Se
			})), s.d(t, "profileOverviewChronoFailed", (function() {
				return Ie
			})), s.d(t, "profileOverviewConversationsRequested", (function() {
				return Ne
			})), s.d(t, "profileOverviewRequested", (function() {
				return Te
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
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/selectors/listings.ts"),
				g = s("./src/reddit/selectors/profile.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				C = s("./src/lib/makeActionCreator/index.ts"),
				j = s("./src/reddit/actions/changeUsername.ts"),
				y = s("./src/reddit/actions/contentGate.ts"),
				E = s("./src/reddit/actions/externalAccount.ts"),
				k = s("./src/reddit/actions/gold/powerups.ts"),
				w = s("./src/reddit/actions/pinnedPost.ts"),
				_ = s("./src/reddit/actions/platform.ts"),
				S = s("./src/reddit/actions/profile/index.ts"),
				I = s("./src/reddit/actions/trophyCase.ts"),
				N = s("./src/reddit/constants/errors.ts"),
				T = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				M = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				L = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				F = s("./src/lib/initializeClient/installReducer.ts"),
				R = s("./node_modules/redux/es/redux.js"),
				B = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const A = {};
			var D = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case L.c:
					case L.b:
					case B.c:
					case B.b: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case L.a:
					case B.a: {
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
			const V = {};
			var W = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case L.c:
						case B.c: {
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
						case B.b:
						case B.a: {
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
				U = Object(R.c)({
					error: D,
					pending: W
				});
			const K = {};
			var G = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
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
					case B.b: {
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
			var J = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case L.b:
						case B.b: {
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
			const q = {};
			var Q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case L.b:
						case B.b: {
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
				Z = Object(R.c)({
					api: U,
					fetchedTokens: G,
					ids: J,
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
				te = Object(R.c)({
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
				ae = Object(R.c)({
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
				le = Object(R.c)({
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
			var Oe = function() {
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
			const ve = {};
			var ge = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ve,
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
			const Pe = {};
			var Ce = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pe,
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
				je = Object(R.c)({
					api: te,
					extraComments: le,
					keyToCommentThreadLinkSets: Oe,
					keyToHeadCommentId: ge,
					keyToPostId: Ce
				}),
				ye = Object(R.c)({
					chrono: Z,
					conversations: je
				});
			Object(F.a)({
				pages: {
					profileOverview: ye
				}
			});
			const Ee = Object(C.a)(L.f),
				ke = Object(C.a)(L.e),
				we = Object(C.a)(L.d),
				_e = Object(C.a)(L.c),
				Se = Object(C.a)(L.b),
				Ie = Object(C.a)(L.a),
				Ne = (e, t, s, o) => async (o, n, i) => {
					const a = n(),
						d = !!a.listings.postOrder.ids[e],
						x = !!Object(v.c)(a, {
							listingKey: e
						});
					if (!!Object(v.d)(a, {
							listingKey: e
						}) || d && !x) return;
					o(Ee({
						key: e
					}));
					const f = await Object(M.a)("profile", () => ((e, t, s) => Object(m.a)(e, {
							data: s,
							endpoint: Object(p.a)(Object(l.a)(Object(u.a)(Object(b.a)(`${c.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
							traceRequestName: "get_profile_conversations",
							method: r.mb.GET
						}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
							...e,
							body: {
								...e.body,
								pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
							}
						} : e))(i.apiContext(), t, s)),
						O = f.body;
					await Object(h.a)(i.gqlContext, O.posts).then(e => O.posts = e);
					const {
						pinned: P,
						postIds: C
					} = O;
					if (f.ok) {
						o(ke({
							key: e,
							meta: a.meta,
							profileName: t,
							...O,
							postIds: C
						}));
						const s = Object(g.n)(n(), t);
						o(Object(w.h)({
							profileId: s,
							pinned: P
						}))
					} else o(we({
						account: f.body.data ? f.body.data.account : null,
						error: f.body.reason ? {
							type: f.body.reason
						} : f.error,
						key: e
					})), f.body.reason === N.a.DeletedProfile && o(Object(y.s)({
						profileName: t
					})), o(Object(_.n)(f.status))
				}, Te = e => async (t, s, o) => {
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
					const h = x.e[Object(O.S)(s(), {})],
						v = u.toLowerCase(),
						C = {
							...n()(e.queryParams, f.k),
							sort: m,
							layout: h,
							t: p
						},
						y = [t(S.d(v))],
						w = Object(T.a)(v, r.xb, m, e.queryParams);
					if (s().listings.postOrder.ids[w] && !s().listings.postOrder.api.error[w] ? b = !0 : y.push(t(Ne(w, v, C, !0))), y.push(t(Object(i.b)())), await Promise.all(y), b) return;
					const N = s();
					if (!N.platform.currentPage) return;
					if (200 !== N.platform.currentPage.status) return;
					const M = Object(g.n)(s(), v),
						L = Object(P.Ab)(N, {
							userName: u
						}).id;
					t(_.m({
						title: Me(s(), u)
					})), Object(P.S)(N) && Object(P.W)(N, u) && t(Object(j.startChangeUsernameFlow)());
					const F = [t(Object(d.q)()), t(I.b(v, M)), t(S.b(v)), t(E.o(u)), t(S.i(u)), t(k.i(u, L))];
					await Promise.all(F)
				}, Me = (e, t) => Object(g.r)(e, {
					profileName: t
				})
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, s) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				ctaExperimentLink: "a3FqJA6bjuoLKqPBEp52R",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				ctaExperimentNoPadding: "_2pWpf_lwFeF9qkMKAgnF1j",
				ctaExperimentPadded: "_3xECPPLU5gHGEwtMV_um7R",
				productTitle: "_3IN2NbpghDp3ddkK_5fJX8",
				subcaption: "_20wkPJgadrJIAZtTeFXQXU",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/CallToActionButton/index.tsx"),
				d = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				m = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				p = s.n(m);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: n
				} = e, {
					source: m,
					callToAction: u,
					caption: b
				} = t;
				if (!m || !m.url) return null;
				let h = m.displayText;
				m.displayText.length >= 40 && (h = m.displayText.slice(0, 40 - "...".length) + "...");
				const x = Object(c.s)(s, m.displayText),
					f = Object(c.t)(s) ? h : b,
					O = Object(c.t)(s) ? s.subcaption : m.displayText,
					v = Object(i.a)(p.a.leftSideContent, {
						[p.a.ctaExperimentNoPadding]: e.ctaExperimentDesign && "card" !== e.ctaExperimentDesign,
						[p.a.ctaExperimentPadded]: "card" === e.ctaExperimentDesign
					}),
					g = Object(i.a)(p.a.displayUrl, {
						[p.a.ctaExperimentLink]: !!e.ctaExperimentDesign
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: v
				}, b && !n && !x && r.a.createElement("span", {
					className: p.a.caption,
					title: b,
					"data-adclicklocation": l.a.CTA_CAPTION
				}, b), !x && r.a.createElement(d.a, {
					href: m.url.replace(o.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: m,
					className: g,
					"data-adclicklocation": l.a.CTA_URL
				}, h), x && r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
					className: p.a.productTitle
				}, f), r.a.createElement("span", {
					className: p.a.subcaption
				}, O))), u && r.a.createElement(a.a, {
					className: p.a.callToAction,
					href: m.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: m,
					showCTAExperiment: !!e.ctaExperimentDesign,
					"data-adclicklocation": l.a.CTA_BUTTON
				}, u))
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
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/RichTextJson/index.tsx"),
				d = s("./src/reddit/constants/experiments.ts"),
				c = s("./src/reddit/helpers/chooseVariant/index.ts"),
				l = s("./node_modules/reselect/es/index.js");
			const m = Object(l.a)(e => Object(c.c)(e, {
				experimentEligibilitySelector: c.a,
				experimentName: d.Kc
			}), e => e === d.Pd);
			var p = s("./src/reddit/components/PostTitle/index.tsx"),
				u = s("./src/reddit/components/AdSupplementaryText/index.m.less"),
				b = s.n(u);
			const h = e => {
				let t;
				switch (e) {
					case p.b.ExtraLarge:
						t = b.a.ExtraLarge;
						break;
					case p.b.Large:
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
				return Object(r.e)(m) && t.isSponsored && t.adSupplementaryText ? 0 === t.adSupplementaryText.document.length ? null : n.a.createElement("div", {
					className: Object(i.a)(o, b.a.AdSupplementaryText),
					"data-testid": `${t.id}-ad-supplementary-text`
				}, n.a.createElement(a.b, {
					className: Object(i.a)(b.a.Content, h(s)),
					content: t.adSupplementaryText,
					rtJsonElementProps: {
						renderingObjectInfo: void 0
					}
				})) : null
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
				O = s("./src/reddit/components/Econ/Audio/index.m.less"),
				v = s.n(O),
				g = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				P = s("./src/reddit/components/Econ/Audio/SpeakerRings.tsx");
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var j = e => {
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
						className: v.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, n.a.createElement("div", {
						className: v.a.classicSpeaker
					}, d && n.a.createElement(P.a, {
						className: Object(i.a)(v.a.speakerRings, {
							[v.a.nightMode]: a
						})
					}), n.a.createElement("img", {
						key: `audioPostAvatar--${l}`,
						className: v.a.snoovatar,
						src: `${h.a.assetPath}/img/talk/avatars/${l}.png`,
						alt: C._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !d && n.a.createElement("div", {
						className: v.a.muteContainer
					}, n.a.createElement(g.a, {
						className: v.a.muteIcon
					})))) : n.a.createElement("div", {
						className: v.a.endedClassicContainer
					}, n.a.createElement(g.a, {
						className: v.a.muteIcon
					}))
				},
				y = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				E = s("./src/reddit/components/ExpandoButton/index.tsx"),
				k = s("./src/reddit/components/Flatlist/index.tsx"),
				w = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				_ = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				S = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				I = s("./src/reddit/components/ModModeReports/index.tsx"),
				N = s("./src/reddit/components/ModModeReports/helpers.ts"),
				T = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				M = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				L = s("./src/reddit/components/PostContainer/index.tsx"),
				F = s("./src/reddit/components/PostMeta/index.tsx"),
				R = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				B = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				A = s("./src/reddit/components/PostTitle/index.tsx"),
				D = s("./src/reddit/components/PostTopMeta/index.tsx"),
				V = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				W = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				U = s("./src/reddit/models/Audio/index.ts"),
				K = s("./src/reddit/models/Media/index.ts"),
				G = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				H = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				J = s("./src/reddit/constants/postLayout.ts"),
				z = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				q = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
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
					eventFactory: O,
					first: v,
					flairStyleTemplate: g,
					formatTitle: P,
					hostPostData: C,
					isCheckboxSelected: H,
					isCurrentUserProfilePost: ee,
					isFrontpage: se,
					isGalleryTileLayoutDefault: re,
					isLoggedIn: ie,
					isOverlay: ae,
					imageGalleryCurrentItem: de,
					moderatorPermissions: ce,
					modModeEnabled: le,
					onClickPost: me,
					onIgnoreReports: pe,
					onOpenReportsDropdown: ue,
					onSizeChanged: be,
					poll: he,
					post: xe,
					postId: fe,
					redditStyle: Oe,
					scrollerItemRef: ve,
					showBulkActionCheckbox: ge,
					showEditFlair: Pe,
					showMedia: Ce,
					shouldShowInsightsButton: je,
					subredditOrProfile: ye,
					toggleCheckbox: Ee,
					userIsOp: ke,
					shouldShowGalleryTileOption: we,
					showPromotedCTA: _e,
					showCTAExperimentDesign: Se
				} = e, Ie = Object(l.a)(), Ne = Object(c.a)(x);
				Object(o.useEffect)(() => {
					be && Ne !== x && be(xe.id)
				}, [x, be, xe.id, Ne]);
				const Te = Oe ? void 0 : g,
					Me = s || void 0,
					Le = Object(Q.a)(ce),
					Fe = Object(z.a)(ce),
					Re = Object(q.a)(ce),
					Be = le && Q.a,
					Ae = Object(S.a)(xe),
					De = Object(N.c)(xe),
					Ve = !!xe.media && xe.media.type === K.o.RTJSON,
					We = ke && Ve,
					Ue = f && !Ce,
					Ke = !!xe.media && Object(K.H)(xe.media),
					Ge = !!xe.recommendationContext,
					He = {
						flairStyleTemplate: Te,
						post: xe,
						inSubredditOrProfile: f,
						isCurrentUserProfilePost: ee,
						isOverlay: ae,
						shouldShowSubscribeButton: !(se && ie) || Ge && ie,
						subredditOrProfile: ye
					},
					Je = Object(r.t)(xe, de),
					{
						source: ze
					} = Je,
					[qe, Qe] = Object(o.useState)(!1),
					Ze = Object(o.useCallback)(() => {
						Qe(!qe), Object(Z.Pb)(), Ie(Object($.d)(fe))
					}, [qe, fe, Ie]);
				let Xe = n.a.createElement(G.a, {
					className: oe.a.classicThumbnail,
					crosspost: Me && xe,
					isMeta: xe.isMeta,
					post: Me || xe,
					redditStyle: Oe,
					templatePlaceholderImage: Te && Te.postPlaceholderImage,
					removeLink: Ke
				});
				Object(U.b)(xe) && (Xe = n.a.createElement(j, {
					post: xe
				}));
				const Ye = n.a.createElement(L.a, {
					className: Object(i.a)(te.a.classicPostStyles, oe.a.postContainer, Object(Y.a)(e), {
						[oe.a.mFirst]: v,
						[oe.a.shouldShowOverflow]: je
					}, t),
					isOverlay: ae,
					style: {
						...Object(Y.d)(e),
						...Object(Y.b)(Te)
					},
					post: xe,
					onClick: me,
					eventFactory: O
				}, n.a.createElement(B.a, {
					model: xe,
					handleVote: h,
					showBulkActionCheckbox: ge,
					isCheckboxSelected: H,
					toggleCheckbox: Ee,
					flairStyleTemplate: Te,
					redditStyle: Oe,
					postId: fe
				}), n.a.createElement(M.a, {
					className: je ? oe.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Te
				}, n.a.createElement(y.a, {
					className: oe.a.eventMeta,
					post: xe
				}), n.a.createElement("div", {
					className: oe.a.mainBody
				}, n.a.createElement("div", {
					className: Ue ? oe.a.expandoContainer : oe.a.thumbnailContainer
				}, !Ue && Xe, n.a.createElement(E.a, {
					crosspost: Me,
					className: oe.a.rightExpando,
					isExpanded: !!x,
					post: xe,
					useMediaIcons: !1
				})), n.a.createElement("div", {
					className: Object(i.a)(oe.a.content, {
						[oe.a.showBulkActionCheckbox]: ge
					}),
					"data-click-id": "body"
				}, !!xe.recommendationContext && n.a.createElement(T.a, {
					content: xe.recommendationContext.content,
					layout: J.g.Classic,
					post: xe
				}), n.a.createElement(A.c, {
					className: he ? oe.a.titleWithPoll : void 0,
					format: P,
					poll: he,
					post: xe,
					redditStyle: Oe,
					size: A.b.Medium,
					titleColor: Te && Te.postTitleColor,
					isOverlay: ae
				}, xe.source && !Me && !xe.isSurveyAd && n.a.createElement(W.a, {
					href: xe.source.url,
					isSponsored: xe.isSponsored,
					postId: xe.id,
					source: xe.source
				}, Object(d.a)(xe))), n.a.createElement(F.a, ne({
					key: "PostMeta"
				}, He)), le && Le && Ae && n.a.createElement(_.a, {
					thing: xe
				}), le && Le && De && n.a.createElement(I.a, {
					onIgnoreReports: pe,
					reportable: xe
				}), _e && ze && ze.url && !xe.isSurveyAd && n.a.createElement(m.a, {
					ctaExperimentDesign: Se && "classic",
					className: Object(i.a)(oe.a.adLinkWrapper, {
						[oe.a.ctaExperiment]: Se
					})
				}, n.a.createElement(p.a, {
					post: xe,
					adLinkContent: Je,
					ctaExperimentDesign: Se && "classic"
				})), n.a.createElement("div", {
					className: oe.a.flatlistContainer
				}, n.a.createElement(E.a, {
					className: oe.a.leftExpando,
					crosspost: Me,
					isExpanded: !!x,
					post: xe,
					useMediaIcons: !1
				}), n.a.createElement(u.a, {
					className: oe.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Te,
					model: xe,
					onVoteClick: h
				}), n.a.createElement(k.a, {
					className: oe.a.flatlistSeparator
				}), !xe.isSurveyAd && n.a.createElement(k.c, {
					className: oe.a.flatlist,
					currentUser: a,
					hasModFlairPerms: Fe,
					hasModPostPerms: Le,
					hasModFullPerms: Re,
					hostPostData: C,
					isOverlay: !!ae,
					modModeEnabled: le,
					onClickInsightsButton: Ze,
					onIgnoreReports: pe,
					onOpenReportsDropdown: ue,
					post: xe,
					shouldShowInsightsButton: je,
					showEditPost: We,
					showEditFlair: Pe,
					tooltipType: ae ? D.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(R.b)({
						editPost: !Be,
						hide: !Be,
						report: !Be
					})
				})), n.a.createElement(w.d, null))), Object(X.a)(xe, oe.a, ve, x, we, re), ye && qe && n.a.createElement(b.a, {
					className: oe.a.creatorStatsContainer,
					post: xe,
					subreddit: ye,
					isOwnProfileStats: !0
				})));
				return n.a.createElement(V.b, null, Ye)
			});
			t.default = Object(H.a)(re)
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = .75, f = 10 * d.L;
			class O extends n.a.Component {
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
			var v = O,
				g = s("./node_modules/fbt/lib/FbtPublic.js"),
				P = s("./node_modules/lodash/noop.js"),
				C = s.n(P),
				j = s("./src/lib/makeCommentsPageKey/index.ts"),
				y = s("./src/lib/makeDraftKey/index.ts"),
				E = s("./src/reddit/actions/comment/index.ts"),
				k = s("./src/reddit/actions/comment/authoring.ts"),
				w = s("./src/reddit/actions/comment/moderation.ts"),
				_ = s("./src/reddit/actions/gold/modals.ts"),
				S = s("./src/reddit/actions/modal.ts"),
				I = s("./src/reddit/actions/reportFlow/index.ts"),
				N = s("./src/reddit/actions/tooltip.ts"),
				T = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				M = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				L = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				F = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				R = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				B = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				A = s("./src/reddit/components/ModModeReports/helpers.ts"),
				D = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				V = s("./src/reddit/contexts/InsideOverlay.tsx"),
				W = s("./src/reddit/contexts/PageLayer/index.tsx"),
				U = s("./src/reddit/helpers/correlationIdTracker.ts"),
				K = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				G = s("./src/reddit/helpers/overlay/index.ts"),
				H = s("./src/reddit/helpers/trackers/lightbox.ts"),
				J = s("./src/reddit/models/PostDraft/index.ts"),
				z = s("./src/reddit/models/Comment/index.ts"),
				q = s("./src/reddit/selectors/activeModalId.ts"),
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
				Oe = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx");
			const ve = xe.a.wrapped(se.b, "OverflowMenu", be.a),
				ge = xe.a.wrapped(M.a, "ModToolsFlatlist", be.a),
				Pe = xe.a.wrapped(B.a, "ModActionsMenu", be.a),
				Ce = xe.a.wrapped(ae.b, "DropdownRow", be.a),
				je = xe.a.wrapped(ce.a, "Flatlist", be.a),
				ye = xe.a.button("Button", be.a),
				Ee = Object(W.u)(),
				ke = e => `Comment-${e}--Modal--DeleteComment`,
				we = e => `Distinguish--Dropdown--${e}`,
				_e = (e, t) => `${e}--${t}-overflow-menu`,
				Se = e => `View--Reports--${e}`,
				Ie = Object(i.c)({
					activeTooltipId: Y.a,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(q.a)(e) === ke(s.id)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.E)(e, {
							commentId: s.postId
						})
					},
					isLoggedIn: te.Q,
					moderatorPermissions: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Z.n)(e, {
							subredditId: s.subredditId
						})
					},
					currentUser: te.k,
					modModeEnabled: W.U,
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
					subreddit: W.r,
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(X.V)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: ee.a,
					isTrueblockPCBlockeeEnabled: $.e
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
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(de.c)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(H.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(de.b)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(de.f)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? n.a.createElement(ne.a, {
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
					} = this.props, i = Object(K.a)(s), a = !!t && t.displayText === e.author;
					if (r && i) return o ? n.a.createElement(ge, {
						comment: e,
						isCommentAuthor: a
					}) : n.a.createElement(Pe, {
						dropdownId: `${e.id}-profile-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, n.a.createElement(me.a, null), n.a.createElement(T.a, {
						comment: e,
						tooltipId: `${e.id}-profile-mod-actions-menu`
					}))
				}
				renderReportsDropdown() {
					const {
						comment: e,
						modModeEnabled: t,
						showModTools: s
					} = this.props, o = Object(A.a)(e);
					if (s && Object(A.c)(e) && !t) return n.a.createElement(L.a, {
						text: `${o}`,
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === Se(e.id),
						id: Se(e.id)
					}, n.a.createElement(D.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: Se(e.id)
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
					} = this.props, a = Object(K.a)(s), d = !!t && t.displayText === e.author, c = !!t && t.isEmployee;
					if (i && d && !e.bannedBy && (c || a && !o)) return n.a.createElement(L.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === we(e.id)
					}, n.a.createElement(Oe.a, null), n.a.createElement(R.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === we(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: c,
						isUserMod: a,
						onDistinguishComment: r,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: we(e.id)
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
					} = this.props, b = Object(K.a)(c), h = !!r && r.displayText === e.author, x = (!l && !e.isLocked || b && a) && !(Object(z.g)(e) && u), f = r && e.isGildable && !(Object(z.g)(e) && u);
					return n.a.createElement("div", {
						className: s
					}, n.a.createElement(je, null, x && n.a.createElement(ye, {
						onClick: this.handleReply,
						disabled: d
					}, g.fbt._("Reply", null, {
						hk: "1xBqIs"
					})), f && n.a.createElement(ye, {
						onClick: this.handleGild
					}, g.fbt._("Give Award", null, {
						hk: "pQJYk"
					})), n.a.createElement(re.a, {
						dropdownId: `${o}--${e.id}-comment-share-menu`,
						permalink: t,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == m ? void 0 : m.type
					}, n.a.createElement(ye, {
						onClick: this.sendCommentEventWithNameShare
					}, g.fbt._("share", null, {
						hk: "3YIXpa"
					}))), this.renderReportsDropdown(), n.a.createElement(ve, {
						dropdownId: _e(o, e.id),
						onClick: this.handleOverflowMenuClick
					}, !h && !d && n.a.createElement(Ce, {
						displayText: g.fbt._("report", null, {
							hk: "ad7CE"
						}),
						onClick: this.props.onReportClick
					}, n.a.createElement(fe.a, {
						name: he.a.report
					})), n.a.createElement(Ce, {
						displayText: e.isSaved ? g.fbt._("Unsave", null, {
							hk: "4kQcAP"
						}) : g.fbt._("Save", null, {
							hk: "4yMsMq"
						}),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? n.a.createElement(fe.a, {
						name: he.a.saved
					}) : n.a.createElement(fe.a, {
						name: he.a.save
					})), h && n.a.createElement(Ce, {
						displayText: g.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.handleEdit
					}, n.a.createElement(fe.a, {
						name: he.a.edit
					})), h && n.a.createElement(Ce, {
						displayText: g.fbt._("delete", null, {
							hk: "e8kvB"
						}),
						onClick: this.handleDelete
					}, n.a.createElement(fe.a, {
						name: he.a.delete
					}))), this.props.isConfirmModalOpen && n.a.createElement(F.a, {
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
						onConfirm: i,
						toggleModal: p,
						trackClick: C.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Te = Ee(Object(r.b)(Ie, (e, t) => {
					let {
						comment: s,
						commentsPageKey: o
					} = t;
					return {
						deleteComment: () => o && e(Object(k.i)(s.id, s.postId)),
						onDistinguishComment: (t, o) => e(Object(w.b)(s.id, t, o)),
						onIgnoreReports: () => e(Object(w.g)(s.id)),
						onGildClick: t => e(Object(_.d)({
							correlationId: t,
							thingId: s.id
						})),
						onReportClick: () => e(Object(I.c)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(N.h)({
							tooltipId: we(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(N.h)({
							tooltipId: Se(s.id)
						})),
						onToggleSave: () => e(Object(E.n)(s.id)),
						handleDelete: () => {
							e(Object(S.i)(ke(s.id))), e(Object(N.h)({
								tooltipId: _e(o, s.id)
							}))
						},
						handleEdit: t => {
							const o = Object(j.a)(s.postId, s.id, {}),
								n = {
									commentId: s.id,
									draftKey: Object(y.a)(J.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: o
								};
							e(Object(G.a)(t)), e(Object(k.g)(n))
						},
						handleReply: t => {
							const o = Object(j.a)(s.postId, s.id, {}),
								n = {
									parentCommentId: s.id,
									commentsPageKey: o
								};
							e(Object(G.a)(t)), e(Object(k.h)(n))
						},
						toggleDeleteCommentModal: () => e(Object(S.i)(ke(s.id)))
					}
				})(Object(ie.c)(Object(V.b)(Ne)))),
				Me = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Le = s("./src/reddit/components/RichTextJson/index.tsx"),
				Fe = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Re = s("./src/reddit/selectors/commentSelector.ts"),
				Be = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				Ae = s.n(Be);
			const De = xe.a.wrapped(Me.a, "TopMeta", Ae.a),
				Ve = xe.a.div("ProfileCommentWrapper", Ae.a),
				We = xe.a.div("CommentBody", Ae.a),
				Ue = Object(r.b)(() => Object(i.c)({
					comment: (e, t) => Object(Re.b)(e, t),
					flair: Q.e
				})),
				Ke = Object(c.b)(e => ({
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
				} = e, l = s => n.a.createElement(Le.b, {
					className: s,
					content: Object(Fe.a)(t),
					mediaMetadata: t.media && t.media.mediaMetadata,
					rtJsonElementProps: Ke(e),
					mediaProps: {
						alignLeft: !0,
						renderSmallMedia: !0
					}
				});
				return n.a.createElement(Ve, {
					className: Object(a.a)({
						[Ae.a.isRemoved]: !!t.bannedBy
					})
				}, n.a.createElement(De, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: o,
					renderedInOverlay: !1
				}), n.a.createElement("div", null, !t.isDeleted && n.a.createElement(We, null, r ? l() : n.a.createElement(v, {
					height: d.Xb,
					isExpanded: r
				}, l)), !t.isDeleted && i && n.a.createElement(Te, {
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
				return E
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				p = s("./src/reddit/components/PostMeta/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				h = s("./src/reddit/components/Thumbnail/index.tsx"),
				x = s("./src/lib/constants/index.ts"),
				f = s("./src/reddit/contexts/Post/index.tsx"),
				O = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/CrosspostBox/index.m.less"),
				P = s.n(g),
				C = s("./src/lib/lessComponent.tsx");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const y = 8,
				E = 1,
				k = C.a.div("Container", P.a),
				w = C.a.div("PostMetaWrapper", P.a),
				_ = C.a.wrapped(u.c, "PostTitle", P.a),
				S = C.a.div("FlatList", P.a),
				I = C.a.div("FlatItem", P.a),
				N = C.a.span("FlatListDotSpacer", P.a),
				T = C.a.wrapped(k, "LinkContainer", P.a),
				M = C.a.div("Content", P.a),
				L = C.a.div("ThumbnailContainer", P.a),
				F = Object(d.c)({
					isCurrentUserProfilePost: O.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== x.Qb.TOPIC),
					shouldOpenPostInNewTab: v.jb
				}),
				R = Object(i.b)(F);
			t.c = Object(f.b)(R(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: o,
					mediaProps: n,
					post: i,
					subredditOrProfile: a
				} = e;
				if (!i) return null;
				const d = {
						post: i,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: o,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						tooltipType: `CrosspostBox--${n.isListing}`
					},
					c = t;
				return i && !i.media ? r.a.createElement(T, {
					className: c
				}, r.a.createElement(M, null, r.a.createElement(w, null, r.a.createElement(p.a, d)), B(i), i.source && r.a.createElement(b.a, {
					post: i
				}), D(e)), W(e)) : r.a.createElement(k, {
					className: c
				}, r.a.createElement(w, null, r.a.createElement(p.a, d)), B(i), A(e), D(e))
			}));
			const B = e => r.a.createElement(_, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: u.b.Small
				}),
				A = e => {
					const {
						mediaProps: t,
						post: s
					} = e, o = {
						...t,
						post: s,
						crosspost: t.post
					};
					return r.a.createElement("div", null, r.a.createElement(m.a, j({}, o, {
						className: P.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				D = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(S, null, r.a.createElement(I, null, o.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [o.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(N, null), r.a.createElement(I, null, V(e)))
				},
				V = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: n
					} = t;
					return r.a.createElement(a.a, {
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
				W = e => r.a.createElement(L, null, r.a.createElement(h.a, {
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
				O = s("./src/telemetry/models/Outbound.ts"),
				v = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				g = s("./src/reddit/components/ExpandoButton/index.m.less"),
				P = s.n(g);
			const C = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.bb)(Object(p.b)(t.permalink), t.id))
				})),
				j = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const o = Object(d.a)(P.a.icon, P.a.hideOnHover);
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
					isExpanded: p,
					post: h,
					toggle: g,
					useMediaIcons: C
				} = e, y = s || h, E = Object(i.e)(f.b), k = Object(i.e)(f.c), w = t => {
					(E || k) && (t.preventDefault(), e.showModalOnPostLinkClick(y))
				}, _ = y.media, S = Object(x.p)(h), I = n && !!s;
				return _ && !S && !(("rtjson" === _.type || "text" === _.type || "liveaudio" === _.type) && !Object(u.a)(y)) || !!h.pollData ? r.a.createElement("button", {
					"aria-expanded": !!p,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, P.a.outer),
					"data-click-id": p ? "expando_close" : "expando_open",
					"data-adclicklocation": v.a.MEDIA,
					onClick: g
				}, p ? r.a.createElement(b.a, {
					name: "collapse",
					className: P.a.icon
				}) : C ? r.a.createElement(r.a.Fragment, null, j(y.media && y.media.type, I, h), r.a.createElement(b.a, {
					name: "expand",
					className: Object(d.a)(P.a.icon, P.a.showOnHover)
				})) : r.a.createElement(b.a, {
					name: "expand",
					className: P.a.icon
				})) : y.source && y.source.url ? r.a.createElement(m.b, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, P.a.outer),
					"data-click-id": "expando_open",
					href: y.source.url,
					isSponsored: h.isSponsored,
					postId: h.id,
					source: h.source,
					sourceElement: l ? O.SourceElement.PostImage : O.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(b.a, {
					name: "external_link",
					className: Object(d.a)(P.a.icon, P.a.outboundLinkIcon)
				})) : r.a.createElement(a.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, P.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(y.permalink),
					rel: "nofollow",
					onClick: w
				}, r.a.createElement(b.a, {
					name: "text_post",
					className: P.a.icon
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
				p = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/Econ/Audio/async.ts"),
				h = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				x = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				f = s("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx"),
				O = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				v = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				g = s("./src/reddit/hooks/useTracking.ts"),
				P = s("./src/reddit/models/Media/index.ts"),
				C = s("./src/reddit/models/Post/index.ts"),
				j = s("./src/reddit/models/Vote/index.ts"),
				y = s("./src/reddit/selectors/activeModalId.ts"),
				E = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				k = s("./src/reddit/selectors/moderatorPermissions.ts"),
				w = s("./src/reddit/selectors/posts.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				S = s("./src/lib/ads/index.ts"),
				I = s("./src/lib/classNames/index.ts"),
				N = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				T = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				M = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				L = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				F = s("./src/reddit/components/AdSupplementaryText/index.tsx"),
				R = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				B = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				A = s("./src/reddit/components/CreatorStats/loader.tsx"),
				D = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				V = s("./src/reddit/components/Flatlist/index.tsx"),
				W = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				U = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				K = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				G = s("./src/reddit/components/ModModeReports/index.tsx"),
				H = s("./src/reddit/components/ModModeReports/helpers.ts"),
				J = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				z = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				q = s("./src/reddit/components/PostContainer/index.tsx"),
				Q = s("./src/reddit/components/PostLeftRail/index.tsx"),
				Z = s("./src/reddit/components/PostMedia/index.tsx"),
				X = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
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
				pe = s("./src/reddit/helpers/localStorage/index.ts"),
				ue = s("./src/reddit/helpers/path/index.ts"),
				be = s("./src/reddit/helpers/postEvent.ts"),
				he = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				xe = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				fe = s("./src/reddit/hooks/useClickSourceData.ts"),
				Oe = s("./src/reddit/models/Audio/index.ts"),
				ve = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				ge = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Pe = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Ce = s("./src/reddit/constants/experiments.ts"),
				je = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ye = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const Ee = Object(a.a)(w.N, e => e.some(ye.d)),
				ke = Object(a.a)(Ee, e => e),
				we = (e, t) => Object(je.c)(e, {
					experimentName: Ce.ed,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && ke(e, {
							listingKey: s
						})
					}
				});
			var _e = s("./src/reddit/selectors/postFlair.ts"),
				Se = s("./src/reddit/selectors/showPromotedCTA.ts"),
				Ie = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Ne = s.n(Ie),
				Te = s("./src/reddit/selectors/i18n/index.ts"),
				Me = s("./src/reddit/selectors/experiments/adblockAcceptableAdsMitigationExperiment.ts"),
				Le = s("./src/reddit/components/LargePost/index.m.less"),
				Fe = s.n(Le);

			function Re() {
				return (Re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Be = e => {
					let {
						className: t,
						disableVisited: s,
						children: o,
						...r
					} = e;
					return n.a.createElement(T.a, Re({}, r, {
						className: Object(I.a)(t, Fe.a.styledLink, {
							[Fe.a.isVisitedEnabled]: !s
						})
					}), o)
				},
				Ae = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(w.N)(e, {
						listingKey: s
					}) : void 0
				},
				De = Object(r.b)(() => Object(a.c)({
					autoplayPref: _.b,
					activeModalId: y.a,
					hideNSFWPref: _.F,
					flairStyleTemplate: ce.W,
					isBlurredPreview: Pe.b,
					isCurrentUserProfilePost: w.l,
					isLoggedIn: _.Q,
					isActive: w.j,
					showPromotedCTA: Se.a,
					moderatorPermissions: k.m,
					modModeEnabled: ce.U,
					posts: Ae,
					postHeightVariant: we,
					shouldShowNsfwListingBelow: Te.b,
					showEditFlair: _e.a,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						return !!s && Object(k.i)(e, s.id)
					},
					isAdblockAAMitigationEnabled: Me.a,
					isOptionalTextEnabled: ve.a,
					showCTAExperimentDesign: E.a
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const o = t === j.a.upvoted ? Object(p.kb)(s) : Object(p.w)(s);
							e(o)
						},
						onIgnoreReports: () => e(Object(p.gb)(s)),
						onOpenReportsDropdown: t => e(Object(u.h)({
							tooltipId: t
						}))
					}
				}),
				Ve = n.a.memo(e => {
					const {
						handlePostLinkClick: t,
						postPermalink: s,
						disableVisited: o,
						shouldOpenPostInNewTab: r,
						shouldStylePostAfterVisitLink: i,
						children: a
					} = e;
					return i ? n.a.createElement(Be, {
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
						currentUser: u,
						eventFactory: j,
						flairStyleTemplate: y,
						forceLoadMedia: E,
						hideNSFWPref: k,
						hostPostData: w,
						imageGalleryCurrentItem: T,
						inSubredditOrProfile: Y = !1,
						isBlurredPreview: $,
						isCommentsPage: ee,
						isCurrentUserProfilePost: te,
						isFrontpage: de,
						isGalleryTileLayoutDefault: ce,
						isModWithUserNotesPermissions: le,
						isLoggedIn: ve,
						isOverlay: Pe,
						isTopicPage: je,
						isCommentCountAnimationEnabled: ye,
						isVoteCountAnimationEnabled: Ee,
						isCountAnimShadowTestEnabled: ke,
						listingIndex: we,
						listingKey: _e,
						moderatorPermissions: Se,
						modModeEnabled: Ie,
						onClickPost: Te,
						onIgnoreReports: Me,
						onOpenReportsDropdown: Le,
						post: Re,
						postHeightVariant: Be,
						scrollerItemRef: Ae,
						shouldShowGalleryTileOption: De,
						shouldShowInsightsButton: We,
						shouldShowNsfwListingBelow: Ue,
						showEditFlair: Ke,
						showPromotedCTA: Ge,
						subredditOrProfile: He,
						userIsOp: Je,
						postId: ze,
						postIds: qe,
						onceInViewport: Qe,
						isAdblockAAMitigationEnabled: Ze,
						isOptionalTextEnabled: Xe,
						showCTAExperimentDesign: Ye
					} = e, $e = Object(g.a)(), et = He, tt = !!e.redditStyle || !!e["data-redditstyle"], st = tt ? void 0 : y, ot = Object(l.a)(Se), nt = Ie && ot, rt = Object(d.a)(Se), it = Object(c.a)(Se), at = Object(H.c)(Re), dt = Object(K.a)(Re), ct = !!Re.media && Re.media.type === P.o.RTJSON, lt = Je && ct, mt = s ? s - Q.a : void 0, pt = !!Re.recommendationContext, ut = !(de && ve || je) || pt && ve, bt = (e => e === Ce.nf.OnlyTitles)(Be) && !Object(me.a)(Re), ht = (e => e === Ce.nf.MediumHeight)(Be) && !Object(me.a)(Re), xt = (e => {
						var t;
						const {
							post: s,
							postIds: o,
							posts: n
						} = e;
						if (!Object(C.u)(s) || (null === (t = s.pollData) || void 0 === t ? void 0 : t.isPrediction)) return;
						const r = o && 0 === o.indexOf(s.id),
							i = o && 1 === o.indexOf(s.id),
							a = n && n[1] && Object(C.u)(n[1]);
						return {
							hasTopCompactPostStyles: r && a,
							hasBottomCompactPostStyles: i,
							showPinnnedHeader: r
						}
					})(e), ft = Object(r.d)(), Ot = Object(r.e)(ge.b), vt = Object(r.e)(ge.c), gt = Object(r.e)(_.jb), Pt = Object(fe.a)(), Ct = Re.media && Object(P.H)(Re.media) ? Object(he.c)(Re.id, et.name) : Re.permalink, jt = e.isCommentPermalink ? Object(ue.b)(Ct) : Object(N.a)(Ct, void 0, Pt), yt = !!(null == w ? void 0 : w.shouldShowLinkedPosts), Et = (!Y || yt || Ue) && !Re.isSponsored, kt = Object(S.t)(Re, T), {
						source: wt
					} = kt, _t = Object(o.useRef)(null), St = Object(o.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == Qe || Qe(we))
						})
					}, [Qe, we]);
					Object(v.a)(_t, St);
					const [It, Nt] = Object(o.useState)(!1), Tt = Object(o.useCallback)(() => {
						Nt(!It), Object(pe.Pb)(), $e(Object(xe.d)(ze))
					}, [It, $e, ze]), Mt = Re.isSponsored && !(Re.media && P.a.has(Re.media.type)) && !Ze, Lt = !!($ && (null == He ? void 0 : He.isNSFW)), Ft = Object(o.useRef)({
						renderingObjectInfo: Re
					}), Rt = Object(o.useCallback)(e => {
						!Ot && !vt || Re.media && Object(P.H)(Re.media) || (e.preventDefault(), ft(Object(p.bb)(Object(ue.b)(Re.permalink), Re.id)))
					}, [ft, Ot, vt, Re.id, Re.media, Re.permalink]), Bt = Re && Re.media && (Re.media.type === P.o.TEXT || Re.media.type === P.o.RTJSON);
					return n.a.createElement(O.b, null, n.a.createElement(q.a, {
						className: Object(I.a)(Fe.a.container, a, Ne.a.largeAndMediumPostStyles, Ne.a.largeAndMediumActiveStyles, Object(m.a)(e), {
							[Ne.a.mUseRedditTheme]: tt,
							promotedvideolink: Mt,
							[Fe.a.topCompactPost]: xt && xt.hasTopCompactPostStyles,
							[Fe.a.bottomCompactPost]: xt && xt.hasBottomCompactPostStyles,
							[Fe.a.shouldShowOverflow]: We
						}),
						isOverlay: Pe,
						style: Object(m.b)(e.flairStyleTemplate),
						post: Re,
						onClick: Te,
						eventFactory: j
					}, n.a.createElement("div", {
						ref: _t
					}), n.a.createElement(oe.a, {
						model: Re,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: ke,
						isVoteCountAnimation: Ee,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: st,
						redditStyle: tt,
						postId: ze
					}), n.a.createElement(z.a, {
						className: Object(I.a)(Fe.a.backgroundWrapper, {
							[Fe.a.isEvent]: Object(be.a)(Re),
							[Fe.a.shouldUseRoundedBorder]: We
						}),
						"data-click-id": "background",
						flairStyleTemplate: st,
						post: Re,
						redditStyle: tt
					}, n.a.createElement(D.a, {
						post: Re
					}), xt && xt.showPinnnedHeader && n.a.createElement(se, null), Object(i.c)(Re) && n.a.createElement(n.a.Fragment, null, n.a.createElement(x.a, {
						post: Re
					}), n.a.createElement(h.a, {
						post: Re
					})), !Object(i.c)(Re) && n.a.createElement(n.a.Fragment, null, !!Re.recommendationContext && n.a.createElement(J.a, {
						content: Re.recommendationContext.content,
						layout: ae.g.Large,
						post: Re
					}), n.a.createElement(re.a, {
						className: Fe.a.postTopLine,
						hideNSFWPref: k,
						hostPostData: w,
						iconClassName: Fe.a.postTopLineIcon,
						inSubredditOrProfile: Y,
						isCommentsPage: !!ee,
						isCompactPinnedPost: !!xt,
						isCurrentUserProfilePost: te,
						isModWithUserNotesPermissions: le,
						isOverlay: !!Pe,
						isTopicPage: !!je,
						listingKey: _e,
						post: Re,
						shouldShowSubscribeButton: ut,
						showSubreddit: Et,
						showSubredditIcon: !0,
						subredditOrProfile: He
					}), n.a.createElement(ne.c, {
						className: Fe.a.postTitle,
						post: Re,
						redditStyle: tt,
						size: ne.b.Large,
						titleColor: st && st.postTitleColor,
						isOverlay: Pe
					}), n.a.createElement(F.a, {
						className: Fe.a.adSupplementaryText,
						post: Re,
						size: ne.b.Large
					}), Re.source && !Re.isSponsored && !(Re.media && Object(P.H)(Re.media)) && !Lt && n.a.createElement(n.a.Fragment, null, n.a.createElement(ie.a, {
						className: Fe.a.sourceLink,
						post: Re
					}), Xe && Re.media && Re.media.type !== P.o.TEXT && Re.media.type !== P.o.IMAGE && Re.media.richtextContent && n.a.createElement(f.a, {
						content: Re.media.richtextContent,
						rtJsonElementProps: Ft.current
					}))), n.a.createElement("div", {
						className: Fe.a.postMediaWrapper
					}, !xt && n.a.createElement(Ve, {
						handlePostLinkClick: Rt,
						postPermalink: jt,
						disableVisited: e.disableVisited,
						shouldOpenPostInNewTab: gt,
						shouldStylePostAfterVisitLink: Bt
					}, n.a.createElement(Z.a, {
						isGalleryTileLayoutDefault: ce,
						isListing: !0,
						isMediumHeight: ht,
						isNotCardView: !!Pe,
						isTitleOnly: bt,
						showCentered: !0,
						flairStyleTemplate: st,
						post: Re,
						availableWidth: mt,
						shouldLoad: E,
						scrollerItemRef: Ae,
						autoplayPref: t,
						shouldShowGalleryTileOption: De,
						showPromotedCTA: Ge
					}))), Ge && wt && wt.url && !Re.isSurveyAd && n.a.createElement(M.a, {
						className: Fe.a.adLinkWrapper,
						ctaExperimentDesign: Ye && "card"
					}, n.a.createElement(L.a, {
						post: Re,
						adLinkContent: kt,
						ctaExperimentDesign: Ye && "card"
					})), Ie && ot && dt && n.a.createElement("div", {
						className: Fe.a.modModeBannerWrapper
					}, n.a.createElement(U.a, {
						thing: Re
					})), Ie && ot && at && n.a.createElement("div", {
						className: Fe.a.modModeBannerWrapper
					}, n.a.createElement(G.a, {
						onIgnoreReports: Me,
						reportable: Re
					})), Object(Oe.b)(Re) && n.a.createElement(b.a, {
						post: Re
					}), n.a.createElement(W.d, null), n.a.createElement("div", {
						className: Fe.a.flatListContainer
					}, n.a.createElement(B.a, {
						className: Fe.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: st,
						model: Re,
						onVoteClick: e.handleVote
					}), !Re.isSurveyAd && n.a.createElement(V.c, {
						currentUser: u,
						hasModFlairPerms: rt,
						hasModFullPerms: it,
						hasModPostPerms: ot,
						hostPostData: w,
						isCommentCountAnimation: ye,
						isCountAnimShadowTestEnabled: ke,
						isLargePost: !0,
						isOverlay: !!Pe,
						listingKey: _e,
						modModeEnabled: Ie,
						onClickInsightsButton: Tt,
						onIgnoreReports: Me,
						onOpenReportsDropdown: Le,
						post: Re,
						shouldShowInsightsButton: We,
						showEditPost: lt,
						showEditFlair: Ke,
						useFlatlistBreakpoints: Object(X.b)({
							editPost: !1,
							save: !nt,
							hide: !1,
							report: !1
						})
					})), He && It && n.a.createElement(A.a, {
						className: Fe.a.creatorStatsContainer,
						post: Re,
						subreddit: He,
						isOwnProfileStats: !0
					})), de && n.a.createElement(R.a, {
						post: Re,
						postIds: null != qe ? qe : [],
						subredditId: null == He ? void 0 : He.id
					})))
				});
			We.displayName = "LargePostMemoized";
			t.default = Object(le.b)(De(Object(de.b)(We)))
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
				return Object(c.a)().hideRecommendationContext ? null : n.a.createElement(a.b, {
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
				O = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				v = s.n(O),
				g = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				P = s("./src/reddit/selectors/commentSelector.ts"),
				C = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				j = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				y = s.n(j);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = c.a.wrapped(x.default, "InternalLink", y.a), w = c.a.div("Wrapper", y.a), _ = c.a.div("Row", y.a), S = c.a.wrapped(g.a, "CommentIcon", y.a), I = c.a.div("TitleContainer", y.a), N = c.a.div("PostTitleContainer", y.a), T = c.a.wrapped(p.c, "PostTitle", y.a), M = c.a.wrapped(u.d, "PostTopMeta", y.a), L = c.a.wrapped(u.a, "MetaSeparator", y.a), F = Object(r.b)(() => Object(i.c)({
				comment: P.b,
				isBlockingInterstitialEnabled: C.b,
				isBlockingInterstitialV2Enabled: C.b
			}), e => ({
				showModalOnAuthorLinkClick: t => e(Object(l.db)(t))
			})), R = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = e;
				if (s) return n.a.createElement(o.Fragment, null, n.a.createElement(L, null), n.a.createElement(M, {
					metaSeparatorClassName: y.a.postTopMetaMetaSeparator,
					post: t,
					showSub: !0,
					showTimestamp: !1,
					subredditOrProfile: s
				}))
			}, B = e => {
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
				return n.a.createElement(k, {
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
					className: Object(a.a)(v.a.compactPostStyles, y.a.overviewCommentPost, {
						[y.a.banned]: !!e.post.bannedBy,
						[y.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: r,
					onClick: o,
					eventFactory: s
				}, n.a.createElement(w, {
					style: {
						background: Object(f.e)(e)
					}
				}, n.a.createElement(_, null, n.a.createElement(S, null), n.a.createElement(I, null, E._("{postAuthor} commented on {postTitle} {postMeta}", [E._param("postAuthor", B({
					...e
				})), E._param("postTitle", n.a.createElement(N, null, n.a.createElement(T, {
					outboundLinkClassName: y.a.postTitleOutboundLink,
					post: r,
					size: p.b.Small,
					titleClassName: y.a.postTitleTitle
				}))), E._param("postMeta", R(e))], {
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
				O = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				g = s.n(v);
			const P = m.a.div("ProfileOwnerCommentWrapper", g.a),
				C = m.a.div("CommentContentWrapper", g.a),
				j = m.a.div("Wrapper", g.a),
				y = m.a.div("CommentSeparator", g.a),
				E = Object(a.b)(() => Object(d.c)({
					comment: (e, t) => Object(x.b)(e, t),
					isAwarded: (e, t) => {
						const s = Object(x.b)(e, t);
						return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
							const s = Object(f.a)(e, t);
							return s && s.coinPrice >= c.g
						})
					},
					isNightmodeOn: O.db
				}), e => ({
					openPost: t => e(Object(b.L)(t))
				}));
			class k extends i.a.Component {
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
					} = this.props, b = m === e.author ? w : _;
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
					}, i.a.createElement(j, {
						className: Object(l.a)({
							[g.a.isFirst]: a,
							[g.a.isLast]: d,
							[g.a.isAwarded]: r,
							[g.a.isNightmodeOn]: c
						})
					}, n()(s + 1, e => i.a.createElement(y, {
						key: e
					})), i.a.createElement(C, null, b(t, m, u))))
				}
			}
			const w = (e, t, s) => i.a.createElement(P, null, _(e, t, s, !0, !0)),
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
			t.a = E(k)
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
				d = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				c = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				l = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				m = s.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(d.a)(Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: o,
					onClick: i,
					post: d,
					redditStyle: l,
					theme: u,
					...b
				} = e;
				return n.a.createElement("div", p({
					className: Object(r.a)(m.a.backgroundWrapper, s),
					style: Object(a.c)(o, e),
					onClick: i,
					"data-adclicklocation": c.a.BACKGROUND
				}, b), t)
			}))
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
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR",
				SubscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				subscribeButton: "_2r87gmhJ9n0MsylKHkgDcp"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/moderatorPermissions.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/PostBadges/index.tsx"),
				m = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				u = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				O = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/hooks/useClickSourceData.ts"),
				g = s("./src/reddit/models/Subreddit/index.ts"),
				P = s("./src/reddit/components/PostMeta/index.m.less"),
				C = s.n(P);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: o,
					isCurrentUserProfilePost: P,
					isOverlay: j,
					isTopicPage: y,
					post: E,
					shouldShowSubscribeButton: k,
					subredditOrProfile: w,
					tooltipType: _
				} = e, S = !!y, I = Object(v.a)(), N = Object(r.e)(e => !!w && Object(i.i)(e, w.id));
				return n.a.createElement("div", {
					className: C.a.metaContainer
				}, !o && !E.isSponsored && w && n.a.createElement(d.a, {
					postId: E.id,
					subredditName: w.name
				}, n.a.createElement(u.a, {
					className: C.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: w.url,
						state: I
					}
				}, w.displayText)), w && w.isQuarantined && n.a.createElement(p.a, null), !o && !E.isSponsored && w && k && !P && n.a.createElement(b.a, {
					className: C.a.SubscribeButton,
					getEventFactory: e => Object(O.k)(E.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: w.name,
						type: Object(g.h)(w) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: E.id,
					size: x.d.XXS,
					small: !0
				}), !o && !E.isSponsored && n.a.createElement(f.b, null), !o && !E.isSponsored && n.a.createElement(c.h, {
					type: E.belongsTo.type,
					id: E.belongsTo.id
				}), n.a.createElement(m.d, {
					className: C.a.postTopMeta,
					flairStyleTemplate: t,
					post: E,
					tooltipType: _,
					isModWithUserNotesPermissions: N
				}), n.a.createElement(l.a, {
					displayText: w ? w.displayText : null,
					inSubredditOrProfile: !!o,
					post: E,
					tooltipType: _
				}), !S && n.a.createElement(a.a, {
					hideCta: s,
					thing: E,
					tooltipType: j ? m.c.Lightbox : void 0
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
					isVoteCountAnimation: O,
					postId: v,
					shouldShowUpvoteRatioOnHover: g
				} = e, P = `upvote-button-${t.id}${f?"-overlay":""}`;
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
					upvoteTooltipId: P,
					isVoteCountAnimation: O,
					isCountAnimShadowTestEnabled: u,
					postId: v,
					scoreClassName: Object(r.a)(p.a.score, {
						[p.a.allowPointerEvents]: g
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
				O = s("./src/reddit/controls/OutboundLink/index.tsx"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				P = s("./src/reddit/models/Media/index.ts"),
				C = s("./src/reddit/models/Subreddit/index.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/components/PostTopLine/index.m.less"),
				E = s.n(y);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: n,
					hideNSFWPref: y,
					hostPostData: k,
					iconClassName: w,
					inSubredditOrProfile: _,
					isCommentsPage: S,
					isCompactPinnedPost: I,
					isCurrentUserProfilePost: N,
					isModWithUserNotesPermissions: T,
					isOverlay: M,
					isTopicPage: L,
					listingKey: F,
					post: R,
					shouldShowSubscribeButton: B,
					showCornerOutboundLink: A,
					showSubreddit: D,
					showSubredditIcon: V,
					subredditOrProfile: W,
					isFollowed: U,
					shouldShowFollowButton: K,
					onFollowPostClick: G
				} = e;
				const H = L,
					J = W && Object(C.h)(W),
					z = Object(i.e)(e => {
						if (!J) return !0;
						const t = Object(j.Gb)(e, R.author || "");
						return !t || t.enableFollowers
					});
				return r.a.createElement("div", {
					className: Object(a.a)(E.a.container, t)
				}, D && W && r.a.createElement("div", {
					className: E.a.subredditIconWrapper
				}, r.a.createElement(b.a, {
					"data-click-id": "subreddit",
					to: W.url
				}, V && r.a.createElement(u.b, {
					className: Object(a.a)(E.a.subredditIcon, w),
					shouldHideNsfwIcon: y,
					subredditOrProfile: W
				}))), r.a.createElement("div", {
					className: E.a.everythingElseWrapper
				}, D && r.a.createElement(c.h, {
					type: R.belongsTo.type,
					id: R.belongsTo.id
				}), r.a.createElement(p.d, {
					className: E.a.postTopMeta,
					forceOpenInNewTab: n,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: T,
					tooltipType: M ? p.c.Lightbox : void 0,
					post: R,
					showSub: D,
					subredditOrProfile: W
				}), r.a.createElement(m.a, {
					className: E.a.postBadges,
					displayText: W ? W.displayText : null,
					inSubredditOrProfile: _,
					isCompactPinnedPost: I,
					post: R,
					tooltipType: M ? p.c.Lightbox : void 0
				}), !H && r.a.createElement(d.a, {
					isPostDetail: S,
					thing: R,
					tooltipType: M ? p.c.Lightbox : void 0
				})), W && z && D && B && !N && r.a.createElement(h.a, {
					className: E.a.SubscribeButton,
					getEventFactory: e => Object(v.k)(R.id, e ? "unsubscribe" : "subscribe", "post", F, k),
					identifier: {
						name: W.name,
						type: J ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: R.id,
					size: f.d.XS
				}), A && r.a.createElement(O.b, {
					isSponsored: R.isSponsored,
					postId: R.id,
					href: Object(P.D)(R),
					source: R.source
				}, r.a.createElement(g.a, {
					className: E.a.outboundLinkIcon
				})), K && z && r.a.createElement(l.a, {
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
				u = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				b = s("./src/reddit/selectors/moderatorPermissions.ts"),
				h = s("./src/reddit/selectors/postFlair.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/showPromotedCTA.ts"),
				O = s("./src/reddit/selectors/user.ts");
			const v = {
					autoplayPref: O.b,
					activeModalId: m.a,
					crosspost: x.d,
					isActive: x.j,
					isChatPost: p.d,
					isCurrentUserProfilePost: x.l,
					isExpanded: x.m,
					isLoggedIn: O.Q,
					showPromotedCTA: f.a,
					moderatorPermissions: b.m,
					modModeEnabled: c.U,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: h.a,
					showMedia: c.s,
					flairStyleTemplate: c.W,
					showCTAExperimentDesign: u.a
				},
				g = Object(o.b)(() => Object(n.c)(v), (e, t) => {
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
			t.a = e => Object(l.b)(g(Object(d.b)(e)))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return j
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "b", (function() {
				return w
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
				O = s("./src/reddit/selectors/experiments/survey.ts"),
				v = s("./src/reddit/selectors/listings.ts"),
				g = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/selectors/tracking.ts");

			function j() {
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
			const y = j(),
				E = {
					apiError: v.c,
					apiPending: v.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(u.S)(e, t),
					loadMore: v.g,
					postsById: g.T,
					postIds: Object(r.a)((e, t) => {
						let {
							listingKey: s,
							listingName: o,
							inSubredditOrProfile: n
						} = t;
						return Object(g.D)(e, s, o, n)
					}),
					subredditsById: P.cb,
					viewportDataLoaded: C.a,
					pageReferrer: u.V,
					postListPlaceholderComponent: () => x.a,
					isNpsScrollSurveyEnabled: O.e
				},
				k = Object(n.c)(E),
				w = e => ({
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
				_ = e => Object(b.b)({
					...e
				}),
				S = (e, t, s, o) => {
					const {
						listingKey: n,
						hostPostData: r,
						listingBelowVariant: i
					} = o;
					return Object(h.k)(e, t, "post", n, r, i, void 0)
				},
				I = Object(o.b)(k, w, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: _,
					postClickEventFactory: S
				}));
			t.a = e => Object(p.c)(y(I(e)))
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
				moderatorPermissions: m.m,
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
					subreddit: Object(r.ib)(s),
					post: Object(r.J)(s, e),
					userSubreddit: Object(r.sb)(s),
					actionInfo: Object(r.d)(s, {
						reason: i(t)
					})
				}),
				d = (e, t) => s => ({
					...Object(r.n)(s),
					action: n.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(r.J)(s, t),
					subreddit: Object(r.ib)(s),
					userSubreddit: Object(r.sb)(s)
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
					post: Object(r.J)(t, e, void 0, 0),
					profile: Object(r.S)(t)
				}),
				m = (e, t, s) => o => ({
					...Object(r.n)(o),
					action: n.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(r.d)(o, {
						reason: c(t)
					}),
					post: Object(r.J)(o, e, void 0, s)
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
					post: Object(r.J)(d, e, void 0, a),
					subreddit: Object(r.ib)(d),
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
					post: Object(r.J)(o, e, void 0, s),
					subreddit: Object(r.ib)(o)
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
				O = s("./src/reddit/actions/pages/profileShared.ts"),
				v = s("./src/reddit/actions/profileConversations.ts"),
				g = s("./src/reddit/components/ContentGate/index.tsx"),
				P = s("./src/reddit/components/CreatorStats/EducationUnit.tsx"),
				C = s("./src/reddit/components/EmptyProfile/index.ts"),
				j = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				y = s("./src/reddit/components/JumpToContent/index.tsx"),
				E = s("./src/reddit/components/PostList/index.tsx"),
				k = s("./src/reddit/components/TrackingHelper/index.tsx"),
				w = s("./src/lib/classNames/index.ts"),
				_ = s("./src/lib/isPinnedAdminPost/index.ts"),
				S = s("./src/lib/lessComponent.tsx"),
				I = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				N = s("./node_modules/lodash/last.js"),
				T = s.n(N);
			var M = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				L = s("./src/reddit/selectors/posts.ts"),
				F = s("./src/reddit/components/ClassicPost/index.tsx"),
				R = s("./src/reddit/components/LargePost/index.tsx"),
				B = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				A = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				D = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				V = s("./src/reddit/selectors/profile.ts"),
				W = s("./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less"),
				U = s.n(W);
			const {
				fbt: K
			} = s("./node_modules/fbt/lib/FbtPublic.js"), G = S.a.div("ExtraCommentsItemWrapper", U.a), H = S.a.p("ExtraComments", U.a), J = S.a.wrapped(H, "ExtraCommentsInteractive", U.a);
			var z = Object(a.b)(() => Object(d.c)({
					extraCommentsItem: V.d,
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
					return i.a.createElement(G, null, o ? i.a.createElement(H, null, K._("Loading...", null, {
						hk: "47z90C"
					})) : i.a.createElement(D.a.Consumer, null, e => i.a.createElement(J, {
						onClick: e => {
							t(s), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, K._("Load more comments", null, {
						hk: "1jXJxb"
					}))))
				}),
				q = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
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
			const oe = S.a.div("BackgroundWrapper", te.a),
				ne = S.a.wrapped(F.default, "ClassicPost", te.a),
				re = S.a.wrapped(B.a, "OverviewCommentPost", te.a),
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
				ae = S.a.wrapped(R.default, "OverviewLargePost", te.a),
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
						layout: p,
						onClickPost: u,
						onSizeChanged: b,
						pageLayer: h,
						post: x,
						postId: f,
						profileName: O,
						scrollerItemRef: v,
						shouldShowInsightsButton: g
					} = e, P = {
						last: m,
						onClickPost: u,
						postId: f
					};
					if (!O) return null;
					const C = O === x.author,
						j = Object(_.a)(c, x.distinguishType);
					if (!C && !a && !j) return null;
					const y = a ? function(e) {
							const t = [],
								s = e.length;
							for (let o = 0; o < s; o++) {
								(0 === o || e[o - 1].depth !== e[o].depth - 1) && t.push([]), T()(t).push(e[o])
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
						E = y.length - 1;
					return i.a.createElement("div", {
						className: Object(w.a)($.a.largeAndMediumActiveStyles, $.a.largeAndMediumPostStyles, te.a.OverviewConversationsPost, s),
						style: {
							...Object(M.b)(),
							...Object(M.d)(e)
						}
					}, i.a.createElement(A.a, {
						className: g ? te.a.shouldShowOverflow : void 0,
						isFirst: !0,
						isLast: E < 0,
						key: x.id
					}, !C && !!a && i.a.createElement(re, se({}, P, {
						commentId: a,
						key: x.id,
						profileName: O
					})), (C || j) && (p === X.g.Classic ? i.a.createElement(ne, {
						availableWidth: t,
						eventFactory: n,
						inSubredditOrProfile: !1,
						isOverlay: !1,
						isScrolling: l,
						forceLoadMedia: r,
						last: m,
						onClickPost: u,
						onSizeChanged: b,
						pageLayer: h,
						postId: f,
						scrollerItemRef: v
					}) : i.a.createElement(ae, {
						availableWidth: t,
						eventFactory: n,
						isScrolling: l,
						isFrontpage: !1,
						forceLoadMedia: r,
						last: m,
						onClickPost: u,
						onSizeChanged: b,
						pageLayer: h,
						postId: f,
						scrollerItemRef: v,
						shouldShowInsightsButton: g
					}))), i.a.createElement(oe, {
						style: {
							background: Object(M.e)(e)
						}
					}, !d && y.map((e, t) => i.a.createElement(A.a, {
						isLast: t === E,
						key: `${t}-isLast[${t===E}]`
					}, e.map((t, s) => {
						const o = 0 === s,
							n = s === e.length - 1;
						return "comment" === t.type ? i.a.createElement(q.a, {
							commentId: t.id,
							depth: t.depth,
							isFirst: o,
							isLast: n,
							key: t.id,
							profileName: O,
							showModTools: !0
						}) : i.a.createElement(z, {
							extraCommentsId: t.id,
							key: t.id,
							profileName: O
						})
					})))))
				});
			var ce = Object(Q.b)((function(e) {
					var t;
					const s = Object(Z.a)(),
						o = Object(u.gb)();
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
			var fe = (e => Object(k.c)(he(xe(e))))(E.a),
				Oe = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				ve = s("./node_modules/lodash/debounce.js"),
				ge = s.n(ve),
				Pe = s("./src/reddit/actions/post.ts"),
				Ce = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				je = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				ye = s("./src/reddit/components/Media/index.tsx"),
				Ee = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				ke = s("./src/reddit/components/PostContainer/index.tsx"),
				we = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				_e = s("./src/reddit/components/PostTitle/index.tsx"),
				Se = s("./src/reddit/connectors/miniCardPost.ts"),
				Ie = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Ne = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Te = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Me = s("./src/reddit/models/Media/index.ts"),
				Le = s("./src/reddit/models/Post/index.ts"),
				Fe = s("./node_modules/fbt/lib/FbtPublic.js"),
				Re = s("./src/reddit/components/CommentsLink/index.tsx"),
				Be = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				Ae = s("./src/reddit/components/Flatlist/index.tsx"),
				De = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				Ve = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				We = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Ue = s("./src/reddit/components/ShareMenu/index.tsx"),
				Ke = s("./src/reddit/icons/fonts/Share/index.tsx"),
				Ge = s("./src/reddit/models/User/index.ts"),
				He = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				Je = s.n(He);
			const ze = "-MiniCardModMenu",
				qe = "-MiniCardOverflowMenu",
				Qe = "-MiniCardShareMenu",
				Ze = S.a.wrapped(Be.a, "HorizontalVotes", Je.a),
				Xe = S.a.button("ShareButton", Je.a),
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
			var et = Ye(Object(a.b)($e, {})(Object(k.c)(e => {
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
						sendEvent: O,
						showEditFlair: v,
						showEditPost: g,
						subreddit: P
					} = e, C = e => O(Object(me.k)(f.id, e)), j = f.postId, y = Object(Ae.d)(ze, f.id, m, u), E = !!o && Object(Ge.e)(o) === f.author;
					return i.a.createElement("div", {
						className: Object(w.a)(Je.a.flatlistContainer, s)
					}, i.a.createElement(Ze, {
						compact: !1,
						model: f,
						onVoteClick: n,
						scoreClassName: Je.a.score
					}), i.a.createElement(Re.a, {
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
						className: Je.a.shareMenu,
						dropdownId: Object(Ae.d)(Qe, f.id, m, u),
						permalink: f.permalink,
						post: f,
						sendEventWithName: C,
						subredditType: null == P ? void 0 : P.type
					}, i.a.createElement(Xe, null, i.a.createElement(Ke.a, {
						className: Je.a.shareIcon
					}), i.a.createElement("span", {
						className: Je.a.shareText
					}, Fe.fbt._("share", null, {
						hk: "mmJV5"
					})))), d && i.a.createElement(De.a, {
						dropdownId: y,
						onClick: () => C("post_mod_action_menu")
					}, i.a.createElement(Ae.b, {
						className: Je.a.modActionsIcon
					}), i.a.createElement(Ve.a, {
						canEditFlair: r && !!v,
						hasModPostPerms: d,
						hasModFullPerms: a,
						isOverlay: !!m,
						isPostAuthor: E,
						modModeEnabled: h,
						post: f,
						tooltipId: y
					})), i.a.createElement(We.a, {
						currentProfileName: t,
						isCommentsPage: c,
						isOverlay: !!m,
						isProfilePostListing: p,
						layout: b,
						pageLayer: e.pageLayer,
						permalink: f.permalink,
						postId: j,
						dropdownId: Object(Ae.d)(qe, f.id, m, u),
						isFixed: u,
						sendEvent: O,
						showEditPost: !!g,
						showEditFlair: !!v,
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
			var rt = Object(u.u)()(Object(Q.b)(Object(Se.a)(Object(Ce.a)(e => {
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
						showMetaLine: O = !0,
						showEditFlair: v,
						subredditOrProfile: g,
						userIsOp: P
					} = e, {
						media: C
					} = n || h, j = C && C.type, y = Object(we.b)(h.id), E = j === Me.o.RTJSON, k = P && E, _ = Object(Te.a)(p), S = Object(Ie.a)(p), I = Object(Ne.a)(p), N = C && j !== Me.o.RTJSON && j !== Me.o.TEXT, T = j === Me.o.VIDEO || j === Me.o.GIFVIDEO || j === Me.o.LIVEVIDEO, L = Object(Le.p)(h), F = C && i.a.createElement(ye.a, {
						autoplayPref: t,
						availableWidth: s,
						className: nt.a.media,
						imageBoxClassName: Object(w.a)(nt.a.mediaImageBox, {
							[nt.a.videoStyles]: T
						}),
						imageBoxContentImageClassName: nt.a.mediaImageBoxContentImage,
						forceAspectRatio: Me.c,
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
					return i.a.createElement(ke.a, {
						className: Object(w.a)(nt.a.postContainer, $.a.largeAndMediumActiveStyles, $.a.largeAndMediumPostStyles, Object(M.a)(e), o),
						style: {
							...Object(M.b)(e.flairStyleTemplate),
							...Object(M.d)(e)
						},
						post: h,
						onClick: b,
						eventFactory: d
					}, i.a.createElement(Ee.a, {
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
					}), O && g && i.a.createElement(tt.a, {
						className: nt.a.metaLine,
						crosspostSubredditOrProfile: r,
						hideNSFWPref: m,
						post: h,
						subredditOrProfile: g
					}), !N && i.a.createElement("div", {
						className: nt.a.mediaWrapper
					}, F), i.a.createElement("div", {
						className: nt.a.flexSpacer
					}), i.a.createElement(et, {
						currentUser: a,
						handleVote: e.handleVote,
						hasModFlairPerms: S,
						hasModFullPerms: I,
						hasModPostPerms: _,
						modModeEnabled: u,
						post: h,
						showEditFlair: v,
						showEditPost: k
					}))), e.activeModalId === y && i.a.createElement(we.a, {
						flairs: h.flair,
						subredditId: h.belongsTo.id,
						modalId: y,
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
			var pt = e => i.a.createElement("div", {
					className: Object(w.a)(lt.a.container, e.className)
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
					className: Object(w.a)(ht.a.container, e.className)
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
				Ot = s("./src/reddit/components/ProfilePinnedPosts/index.m.less"),
				vt = s.n(Ot);
			const {
				fbt: gt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Pt = 320, Ct = 300, jt = Object(d.c)({
				arePinnedPostsLoaded: L.a,
				currentUser: at.k,
				pinnedPostIds: L.P
			}), yt = Object(a.b)(jt, e => ({
				openPost: t => e(Object(Pe.L)(t))
			}));
			class Et extends i.a.Component {
				constructor() {
					super(...arguments), this.containerRef = null, this.state = {
						showEducation: !1,
						pauseMedia: !1
					}, this.setContainerRef = e => this.containerRef = e, this.handleScroll = ge()(() => {
						if (!this.containerRef) return;
						const e = this.containerRef.getBoundingClientRect();
						e.bottom < Ct ? this.pauseMedia() : e.top > 0 && this.playMedia()
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
						availableWidth: Pt,
						className: Object(w.a)(vt.a.item, vt.a.miniCardPost),
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
						className: vt.a.title
					}, gt._("Pinned posts", null, {
						hk: "3prRc3"
					})), r ? i.a.createElement(ft, {
						className: Object(w.a)(vt.a.item, vt.a.education),
						onGotItClick: this.onGotItClick
					}) : i.a.createElement("div", {
						ref: this.setContainerRef,
						className: vt.a.container
					}, t.map(this.renderPost), a && i.a.createElement(pt, {
						className: vt.a.item
					})), s)
				}
			}
			var kt = Object(u.u)()(yt(Et)),
				wt = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				_t = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				St = s("./src/reddit/helpers/name/index.ts"),
				It = s("./src/reddit/helpers/trackers/screenview.ts"),
				Nt = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				Tt = s("./src/reddit/layout/page/Listing/index.tsx"),
				Mt = s("./src/reddit/models/ContentGate.ts"),
				Lt = s("./src/reddit/pages/ErrorPages/index.tsx"),
				Ft = s("./src/reddit/pages/ProfileBlockInterstitial/index.tsx"),
				Rt = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				Bt = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");

			function At() {
				return (At = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Dt = (e, t) => {
					let {
						location: s
					} = t;
					return n()([...Object(c.a)(s.search)])
				},
				Vt = Object(u.u)(),
				Wt = Object(d.c)({
					isOwnProfile: u.E,
					over18Prefs: at.kb,
					layout: u.S
				}),
				Ut = Object(d.a)(Wt, Dt, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.profileName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(V.k)(e, {
						profileName: s.params.profileName
					})
				}, (e, t) => Object(O.a)(e, Dt(0, t)), (e, t) => {
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
					return Object(at.f)(e, b.nc + s.params.profileName)
				}, (e, t) => {
					let {
						match: s
					} = t;
					return {
						isProfileBlockInterstitialEnabled: Object(Rt.d)(e),
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
					const O = b.xb,
						v = Object(p.a)(s, O, l, t),
						{
							sort: g
						} = t;
					return {
						contentGateInfo: a,
						isLoggedIn: i,
						isProfileNSFW: !!o && o.isNSFW,
						listingKey: v,
						profileName: s,
						shouldShowPinnedPostsSection: r && !g,
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
				Kt = Object(a.b)(Ut, (e, t) => ({
					onLoadMoreConversationsItems: () => e(v.h({
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
					}, this.renderNoPosts = () => i.a.createElement(C.c, {
						profileName: this.props.profileName,
						timeSort: this.props.timeSort
					}), this.getInjectChildren = () => {
						const e = {};
						return this.state.showPostStatsUnit && this.props.isOwnProfile && (e[0] = {
							estHeight: 76,
							id: "post-stats-info-overview",
							render: () => i.a.createElement(P.a, null)
						}), e
					}, this.state = {
						showPostStatsUnit: !1
					}
				}
				componentDidMount() {
					window.addEventListener("storage", this.onStorage), this.setState({
						showPostStatsUnit: Object(m.L)() <= 2
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
						sort: O,
						timeSort: v
					} = this.props;
					if (!p) return null;
					if (t && t.profileDeleted) return i.a.createElement(g.default, {
						contentGateType: Mt.a.ProfileDeleted,
						profileName: h
					});
					if (t && t.profileSuspended) return i.a.createElement(g.default, {
						contentGateType: Mt.a.ProfileSuspended,
						profileName: h
					});
					if (451 === p.status || t && t.profileBlockedForLegalReason) return i.a.createElement(g.default, {
						contentGateType: Mt.a.ProfileBlockedForLegalReason,
						profileName: h
					});
					const P = p.queryParams && "true" === p.queryParams.consent;
					if (403 === p.status || s && !P) return n ? i.a.createElement(Ft.a, {
						username: h,
						avatar: e,
						uid: u
					}) : i.a.createElement(Lt.a, null);
					if (404 === p.status) return i.a.createElement(g.default, {
						contentGateType: Mt.a.ProfileDoesNotExist,
						profileName: h
					});
					if (!h) return null;
					const C = h.toLowerCase(),
						E = `/user/${h}/`,
						k = {
							listingKey: a,
							listingName: C
						};
					if (r && !o && d === Bt.a.NoPreview) return i.a.createElement(_t.a, {
						contentTitle: Object(St.d)(h)
					});
					if (!m && r && !o && d !== Bt.a.Blurred) return i.a.createElement(g.default, {
						subredditName: h,
						contentGateType: Mt.a.Nsfw
					});
					const w = {
							inSubredditOrProfile: !Object(l.a)(h),
							listingKey: a,
							listingName: C,
							listingViewed: (e, t) => Object(It.q)(a, O, t, e, v),
							noPostsComponent: this.renderNoPosts,
							onScroll: f,
							onTryAgain: c
						},
						_ = {
							sort: O,
							baseUrl: E,
							sortOptions: b.Db,
							timeSort: v
						},
						S = i.a.createElement(i.a.Fragment, null, x && i.a.createElement(kt, {
							profileName: h
						}), i.a.createElement(j.a, _), i.a.createElement(fe, At({}, w, {
							getInjectChildren: this.state.showPostStatsUnit && this.props.isOwnProfile ? this.getInjectChildren : void 0,
							excludePinnedPosts: x,
							onLoadMore: this.props.onLoadMoreConversationsItems,
							shouldShowInsightsButton: this.props.isOwnProfile
						})));
					return i.a.createElement(Tt.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(Oe.a, {
							profileName: h,
							viewBlockedConsent: P
						})),
						content: i.a.createElement(i.a.Fragment, null, i.a.createElement(y.a, null), S),
						sidebar: i.a.createElement(wt.a, At({}, k, {
							profileName: h
						}))
					})
				}
			}
			t.default = Vt(Kt(Object(h.a)(Object(Nt.d)(Gt))))
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
			const d = Object(o.a)(i.h, i.d, a.e, (e, t, s) => !e && !t && !s);

			function c(e, t) {
				return s => Object(r.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: d,
					throttledVariants: {
						[n.Rc.Bottom_cell_dismissible]: e,
						[n.Rc.Bottom_cell_dismissible_immediate_trigger]: e,
						[n.Rc.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = c(n.Jb, !0),
				m = c(n.Kb, !0),
				p = c(n.Lb, !0),
				u = c(n.Jb, !1),
				b = c(n.Kb, !1),
				h = c(n.Lb, !1)
		},
		"./src/reddit/selectors/experiments/web2x_cta.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const i = Object(o.a)(e => Object(r.c)(e, {
					experimentName: n.ig,
					experimentEligibilitySelector: r.a
				}), e => e),
				a = Object(o.a)(i, e => e === n.Zf)
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
				return O
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "d", (function() {
				return P
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
				p = Object(o.a)((e, t) => {
					const s = u(e, t);
					if (!s) return m;
					const o = Object(i.Z)(e, {
						subredditName: s.name
					});
					return o && o.postIds && o.postIds.length ? o.postIds : m
				}),
				u = (e, t) => {
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
				O = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				v = e => e.focusedVerticals.category,
				g = e => e.focusedVerticals.lastLoadedEnv,
				P = e => {
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
					return Boolean(t) && !Object(n.sg)(t)
				},
				d = Object(o.a)(a, r.d, (e, t) => e && !t)
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"487b662c2260"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileOverview.6e5c266065a854e45e97.js.map