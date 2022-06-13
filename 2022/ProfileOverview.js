// https://www.redditstatic.com/desktop2x/ProfileOverview.9ff4875217bf24dac2be.js
// Retrieved at 6/13/2022, 1:00:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileOverview", "reddit-components-ContentGate"], {
		"./src/chat/controls/Svg/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/chat/controls/Svg/index.m.less"),
				c = s.n(i);
			t.a = a.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: s,
						active: n,
						hover: a
					} = e;
				return r.a.createElement("svg", {
					className: Object(o.a)(e.className, {
						[c.a.disable]: s,
						[c.a.active]: n,
						[c.a.hover]: !!a
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", c.a)
		},
		"./src/lib/loginHref/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				r = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const o = Object(r.e)(e),
					a = encodeURIComponent(`${t}${o}`);
				return `${n.a.accountManagerOrigin}${s||"/login"}?dest=${a}`
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
				return x
			}));
			var n = s("./node_modules/react/index.js");

			function r() {
				return window
			}
			var o = s("./node_modules/lodash/debounce.js"),
				a = s.n(o),
				i = s("./src/reddit/constants/elementIds.ts"),
				c = s("./src/reddit/constants/experiments.ts"),
				d = s("./src/reddit/hooks/usePromoContext.ts"),
				l = s("./src/reddit/constants/promo.ts"),
				m = s("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts");
			var u = function() {
					const e = Object(m.a)(c.vc.Bottom_cell),
						t = Object(m.a)(c.vc.Bottom_cell_dismissible),
						s = Object(m.a)(c.vc.Bottom_cell_dismissible_immediate_trigger),
						n = Object(m.a)(c.vc.Bottom_cell_signup_upsell_copy),
						r = Object(m.a)(c.vc.Bottom_cell_surprise_install_copy),
						o = Object(m.a)(c.vc.Bottom_sheet);
					return e || n || r ? l.b.SignupUpsellCell : t || s ? l.b.SignupUpsellCellDismissible : o ? l.b.SignupUpsellBottomSheet : null
				},
				p = s("./src/reddit/hooks/promo/useIsPromoShown.ts");
			const b = 250,
				h = 1e3;

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
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
						} = Object(d.a)(), s = u(), o = Object(p.a)(s), l = Object(m.a)(c.vc.Bottom_cell_dismissible_immediate_trigger);
						return n.useMemo(() => a()(() => {
							if (!o && s) {
								const e = document.getElementById(i.e),
									n = e ? e.scrollTop : r().scrollY,
									o = r().innerHeight,
									a = o / 3,
									c = 2 * o;
								n >= (l ? a : c) && t(s)
							}
						}, e, {
							maxWait: h
						}), [l, o, s, t, e])
					}();
					return n.createElement(e, f({
						showSignupUpsell: s
					}, t))
				}
				return s.displayName = `withShowSignupUpsell(${t})`, s
			}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "b", (function() {
				return k
			}));
			var n, r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/performanceTimings/index.tsx"),
				a = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(n || (n = {}));
			var d, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var u = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = s("./src/reddit/selectors/platform.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(r.a)(a.g),
				f = Object(r.a)(a.e),
				x = Object(r.a)(a.h),
				v = Object(r.a)(a.c),
				g = Object(r.a)(a.f),
				C = Object(r.a)(a.j),
				y = Object(r.a)(a.i),
				O = () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const o = t(),
						a = Object(u.e)(o),
						d = Object(u.d)(o),
						p = Object(b.P)(o);
					if (a || !d) return;
					e(x());
					let g = !1;
					try {
						const t = p ? n.LoggedInGeo : n.LoggedOutGeo,
							s = await ((e, t, s) => Object(i.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(r(), t);
						if (s.ok && s.body) {
							const {
								data: t
							} = s.body;
							if (w(t)) {
								if (_(t)) {
									e(v({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), g = !0
								} else if (P(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: n,
											interactedSubreddit: r,
											category: o
										} = s.focusRecommendations[0],
										a = [n, r],
										i = Object(m.d)(a),
										c = Object(l.b)(a),
										d = Object(m.c)(n),
										u = {
											recommendedSubredditIds: [n.id],
											interactedSubredditIds: [r.id],
											subreddits: i,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: o,
											lastLoadedEnv: "client"
										};
									e(h(u)), g = !0
								}
							} else g = !1
						}
					} catch (C) {
						g = !1
					}
					g || e(f({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, w = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, _ = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, P = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						n = t && t.type;
					return !!(s && !_(e) && n === d.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, k = () => async (e, t, s) => {
					var n, r;
					const a = t(),
						i = Object(u.g)(a);
					if (Object(u.f)(a) || null === i || "client" === i) {
						const s = null === (r = null === (n = Object(p.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							i = Object(b.Q)(a);
						return Object(o.i)(() => e(O()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: i
						})
					}
					if ("server" === i) return e(g({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/pages/profileOverview/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileOverviewConversationsPending", (function() {
				return Pe
			})), s.d(t, "profileOverviewConversationsLoaded", (function() {
				return ke
			})), s.d(t, "profileOverviewConversationsFailed", (function() {
				return Se
			})), s.d(t, "profileOverviewChronoPending", (function() {
				return Ee
			})), s.d(t, "profileOverviewChronoLoaded", (function() {
				return je
			})), s.d(t, "profileOverviewChronoFailed", (function() {
				return Ne
			})), s.d(t, "profileOverviewConversationsRequested", (function() {
				return Ie
			})), s.d(t, "profileOverviewRequested", (function() {
				return Le
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/pick.js"),
				r = s.n(n),
				o = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/actions/moderatingSubreddits.ts"),
				i = s("./src/reddit/actions/pages/profileShared.ts"),
				c = s("./src/reddit/actions/subreddit.ts"),
				d = s("./src/config.ts"),
				l = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				m = s("./src/lib/makeApiRequest/index.ts"),
				u = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				b = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var h = s("./src/reddit/helpers/post/index.ts"),
				f = s("./src/reddit/constants/postLayout.ts"),
				x = s("./src/reddit/constants/parameters.ts"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/selectors/listings.ts"),
				C = s("./src/reddit/selectors/profile.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				O = s("./src/lib/makeActionCreator/index.ts"),
				w = s("./src/reddit/actions/changeUsername.ts"),
				_ = s("./src/reddit/actions/contentGate.ts"),
				P = s("./src/reddit/actions/externalAccount.ts"),
				k = s("./src/reddit/actions/gold/powerups.ts"),
				S = s("./src/reddit/actions/pinnedPost.ts"),
				E = s("./src/reddit/actions/platform.ts"),
				j = s("./src/reddit/actions/profile/index.ts"),
				N = s("./src/reddit/actions/trophyCase.ts"),
				I = s("./src/reddit/constants/errors.ts"),
				L = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				T = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				B = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				F = s("./src/lib/initializeClient/installReducer.ts"),
				M = s("./node_modules/redux/es/redux.js"),
				D = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const R = {};
			var A = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case B.c:
					case B.b:
					case D.c:
					case D.b: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case B.a:
					case D.a: {
						const {
							key: s,
							error: n
						} = t.payload;
						return {
							...e,
							[s]: n
						}
					}
					default:
						return e
				}
			};
			const W = {};
			var U = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case B.c:
						case D.c: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case B.b:
						case B.a:
						case D.b:
						case D.a: {
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
				H = Object(M.c)({
					error: A,
					pending: U
				});
			const z = {};
			var q = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case B.b: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: {}
						}
					}
					case D.b: {
						const {
							key: s,
							fetchedToken: n
						} = t.payload, r = e[s];
						return {
							...e,
							[s]: {
								...r,
								[n]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const V = {};
			var G = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case B.b:
						case D.b: {
							const {
								key: s,
								overviewIds: n
							} = t.payload, r = e[s] || [];
							return {
								...e,
								[s]: [...r, ...n]
							}
						}
						default:
							return e
					}
				},
				K = s("./src/lib/omitKey/index.ts");
			const Z = {};
			var Y = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case B.b:
						case D.b: {
							const {
								key: s,
								dist: n,
								token: r
							} = t.payload;
							return r ? {
								...e,
								[s]: {
									dist: n,
									token: r
								}
							} : Object(K.a)(e, s)
						}
						default:
							return e
					}
				},
				J = Object(M.c)({
					api: H,
					fetchedTokens: q,
					ids: G,
					loadMore: Y
				});
			const Q = {};
			var X = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case B.f:
					case B.e: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case B.d: {
						const {
							key: s,
							error: n
						} = t.payload;
						return {
							...e,
							[s]: n || {}
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
						case B.f: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case B.e:
						case B.d: {
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
				te = Object(M.c)({
					error: X,
					pending: ee
				}),
				se = s("./src/reddit/actions/profileConversations.ts");
			const ne = {};
			var re = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne,
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
							error: n
						} = t.payload;
						return {
							...e,
							[s]: n || {}
						}
					}
					default:
						return e
				}
			};
			const oe = {};
			var ae = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oe,
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
				ie = Object(M.c)({
					error: re,
					pending: ae
				});
			const ce = {};
			var de = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ce,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case B.e:
						case se.b:
						case se.e:
							return {
								...e, ...t.payload.extraComments
							};
						default:
							return e
					}
				},
				le = Object(M.c)({
					api: ie,
					models: de
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
						prev: n
					} = e;
					return {
						depth: t,
						next: s,
						prev: n
					}
				})
			}
			const xe = (e, t, s) => {
				const n = {};
				for (const r in t) {
					const e = t[r],
						s = e.postId;
					n.hasOwnProperty(s) ? n[s] = {
						...n[s],
						[r]: e
					} : n[s] = {
						[r]: e
					}
				}
				for (const r in s) {
					const e = s[r],
						t = e.postId;
					n.hasOwnProperty(t) ? n[t] = {
						...n[t],
						[r]: e
					} : n[t] = {
						[t]: e
					}
				}
				return n
			};
			var ve = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : he,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case B.e:
					case se.e: {
						const {
							comments: s,
							extraComments: n,
							postIds: r,
							profileName: o
						} = t.payload, a = xe(r, s, n), i = {};
						for (const e of r) {
							i[Object(pe.a)(e, o)] = a.hasOwnProperty(e) ? fe(a[e]) : {}
						}
						return {
							...e,
							...i
						}
					}
					case se.b: {
						const {
							comments: s,
							commentLists: n,
							extraComments: r,
							extraCommentsId: o,
							postIds: a,
							profileName: i
						} = t.payload;
						if (0 === a.length) {
							const t = Object.keys(e).find(t => void 0 !== e[t][o]);
							if (!t) return e;
							const s = {
									...e[t]
								} [o].prev,
								n = s && s.id || "";
							return {
								...e,
								[t]: {
									...e[t],
									[n]: {
										...e[t][n],
										next: null
									}
								}
							}
						}
						const c = a[0],
							d = fe(xe(a, s, r)[c]),
							l = Object(pe.a)(c, i),
							m = {
								...e[l]
							},
							u = m[o].prev,
							p = u && u.id || "",
							b = n[c].head,
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
								...d,
								[h]: {
									...d[h],
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
			const ge = {};
			var Ce = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ge,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case B.e:
					case se.e: {
						const {
							commentLists: s,
							postIds: n,
							profileName: r
						} = t.payload, o = {};
						for (const e of n) {
							o[Object(pe.a)(e, r)] = s[e] && s[e].head ? s[e].head.id : null
						}
						return {
							...e,
							...o
						}
					}
					default:
						return e
				}
			};
			const ye = {};
			var Oe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ye,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case B.e:
						case se.e: {
							const {
								postIds: s,
								profileName: n
							} = t.payload, r = {};
							for (const e of s) {
								r[Object(pe.a)(e, n)] = e
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
				we = Object(M.c)({
					api: te,
					extraComments: le,
					keyToCommentThreadLinkSets: ve,
					keyToHeadCommentId: Ce,
					keyToPostId: Oe
				}),
				_e = Object(M.c)({
					chrono: J,
					conversations: we
				});
			Object(F.a)({
				pages: {
					profileOverview: _e
				}
			});
			const Pe = Object(O.a)(B.f),
				ke = Object(O.a)(B.e),
				Se = Object(O.a)(B.d),
				Ee = Object(O.a)(B.c),
				je = Object(O.a)(B.b),
				Ne = Object(O.a)(B.a),
				Ie = (e, t, s, n) => async (n, r, a) => {
					const i = r(),
						c = !!i.listings.postOrder.ids[e],
						f = !!Object(g.c)(i, {
							listingKey: e
						});
					if (!!Object(g.d)(i, {
							listingKey: e
						}) || c && !f) return;
					n(Pe({
						key: e
					}));
					const x = await Object(T.a)("profile", () => ((e, t, s) => Object(m.a)(e, {
							data: s,
							endpoint: Object(u.a)(Object(l.a)(Object(p.a)(Object(b.a)(`${d.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
							traceRequestName: "get_profile_conversations",
							method: o.jb.GET
						}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
							...e,
							body: {
								...e.body,
								pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
							}
						} : e))(a.apiContext(), t, s)),
						v = x.body;
					await Object(h.a)(a.gqlContext, v.posts).then(e => v.posts = e);
					const {
						pinned: y,
						postIds: O
					} = v;
					if (x.ok) {
						n(ke({
							key: e,
							meta: i.meta,
							profileName: t,
							...v,
							postIds: O
						}));
						const s = Object(C.m)(r(), t);
						n(Object(S.h)({
							profileId: s,
							pinned: y
						}))
					} else n(Se({
						account: x.body.data ? x.body.data.account : null,
						error: x.body.reason ? {
							type: x.body.reason
						} : x.error,
						key: e
					})), x.body.reason === I.a.DeletedProfile && n(Object(_.s)({
						profileName: t
					})), n(Object(E.n)(x.status))
				}, Le = e => async (t, s, n) => {
					const {
						queryParams: d,
						params: l
					} = e, {
						sort: m,
						t: u
					} = Object(i.a)(s(), d), {
						profileName: p
					} = l;
					let b = !1;
					const h = f.e[Object(v.S)(s(), {})],
						g = p.toLowerCase(),
						O = {
							...r()(e.queryParams, x.l),
							sort: m,
							layout: h,
							t: u
						},
						_ = [t(j.d(g))],
						S = Object(L.a)(g, o.ub, m, e.queryParams);
					if (s().listings.postOrder.ids[S] && !s().listings.postOrder.api.error[S] ? b = !0 : _.push(t(Ie(S, g, O, !0))), _.push(t(Object(a.b)())), await Promise.all(_), b) return;
					const I = s();
					if (!I.platform.currentPage) return;
					if (200 !== I.platform.currentPage.status) return;
					const T = Object(C.m)(s(), g),
						B = Object(y.Ab)(I, {
							userName: p
						}).id;
					t(E.m({
						title: Te(s(), p)
					})), Object(y.S)(I) && Object(y.W)(I, p) && t(Object(w.f)());
					const F = [t(Object(c.q)()), t(N.b(g, T)), t(j.b(g)), t(P.o(p)), t(j.i(p)), t(k.l(p, B))];
					await Promise.all(F)
				}, Te = (e, t) => Object(C.q)(e, {
					profileName: t
				})
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const i = 5;

			function c(e) {
				const {
					post: t,
					postIds: s,
					subredditId: n
				} = e, c = Object(o.e)(e => e.subreddits.questions), d = Object(o.e)(e => e.posts.models);
				if (!s) return null;
				const l = s.indexOf(t.id);
				if (l < 0) return null;
				if (!p(t.id)) return null;
				const m = new Set;
				let u = !1;
				for (let r = 0, o = -999; r <= l; r += 1) {
					const e = s[r],
						t = d[e].belongsTo.id;
					p(e) && r - o >= i && !m.has(t) && (o = r, m.add(t), r === l && (u = !0))
				}
				return u ? r.a.createElement(a.a, {
					subredditId: n,
					inFeed: !0
				}) : null;

				function p(e) {
					var t;
					return (null === (t = c[d[e].belongsTo.id]) || void 0 === t ? void 0 : t.length) > 0
				}
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(n.a)({
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
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, s) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
				ContainerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
				containerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
				Description: "_3VTI5BOpJO70xoBKSqz3O9",
				description: "_3VTI5BOpJO70xoBKSqz3O9",
				PrivateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				privateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				PrivateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				privateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				PrivateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				privateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				Link: "o4oSRcSrppMzf__hxJKxn",
				link: "o4oSRcSrppMzf__hxJKxn",
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				SecondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				secondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				SecondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				secondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				CreateCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				createCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				GoHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				goHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				PrivateKey: "kwHMAzQCDA69TaL3eHZLa",
				privateKey: "kwHMAzQCDA69TaL3eHZLa",
				Image: "_1jefpljVGT-eHObg40F8Dm",
				image: "_1jefpljVGT-eHObg40F8Dm",
				ImagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				imagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				LeftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				leftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				LeftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				leftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				SecondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				secondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				SecondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				secondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				InterstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				interstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				ContributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz",
				contributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./src/reddit/contexts/NavbarExp.ts"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/lib/loginHref/index.ts"),
				u = s("./src/reddit/actions/contentGate.ts"),
				p = s("./src/reddit/actions/preferences.ts"),
				b = s("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				h = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				f = s("./src/reddit/components/Footer/index.tsx"),
				x = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				v = s("./src/reddit/components/RichTextJson/index.tsx"),
				g = s("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				C = s("./src/reddit/components/TextWithLinks/index.tsx"),
				y = s("./src/reddit/constants/parameters.ts"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				w = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/chat/controls/Svg/index.tsx");

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var k = e => o.a.createElement(_.a, P({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				S = s("./src/reddit/models/ContentGate.ts"),
				E = s("./src/lib/constants/index.ts"),
				j = s("./src/reddit/selectors/platform.ts"),
				N = s("./src/reddit/selectors/user.ts");
			var I = s("./src/reddit/selectors/meta.ts"),
				L = s("./src/reddit/components/ContentGate/index.m.less"),
				T = s.n(L);
			const {
				fbt: B
			} = s("./node_modules/fbt/lib/FbtPublic.js"), F = l.a.wrapped(k, "PrivateKey", T.a), M = l.a.div("ButtonsContainer", T.a), D = l.a.div("Container", T.a), R = l.a.div("ContainerExp", T.a), A = l.a.div("Description", T.a), W = l.a.div("PrivateSubredditDetails", T.a), U = l.a.div("PrivateSubredditDescription", T.a), H = l.a.h3("PrivateSubredditName", T.a), z = l.a.a("Link", T.a), q = l.a.wrapped(w.n, "LinkRouterButton", T.a), V = l.a.wrapped(w.m, "LinkButton", T.a), G = l.a.wrapped(w.q, "SecondaryLinkRouterButton", T.a), K = l.a.wrapped(w.p, "SecondaryLinkButton", T.a), Z = l.a.wrapped(q, "GoHomeLinkButton", T.a), Y = l.a.wrapped(h.a, "CreateCommunityButton", T.a), J = l.a.img("Image", T.a), Q = l.a.img("ImagePlaceholder", T.a), X = l.a.wrapped(q, "LeftLinkRouterButton", T.a), $ = l.a.wrapped(V, "LeftLinkButton", T.a), ee = l.a.wrapped(K, "SecondaryLeftLinkButton", T.a), te = l.a.wrapped(G, "SecondaryLeftLinkRouterButton", T.a), se = l.a.h3("Title", T.a), ne = l.a.div("PageBody", T.a), re = l.a.div("InterstitialMessageWrapper", T.a), oe = Object(d.c)({
				isLoggedIn: N.P,
				origin: I.j,
				user: N.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(N.Q)(e)) return !1;
					const t = Object(j.d)(e);
					if (!t) return !1;
					const s = Object(N.f)(e, t);
					if (!s) return !1;
					if (!s.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: n
					} = s;
					if (!n) return !1;
					const r = 30 * E.B;
					return n > Date.now() - r
				})(e),
				isSeo: I.g
			}), ae = Object(O.u)(), ie = Object(a.b)(oe, (e, t) => {
				let {
					subredditName: s
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(p.D(s)), window.location.reload()
					},
					continueToGatedSubreddit: async () => {
						await e(p.v(s)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(u.o)())
					}
				}
			}), ce = e => {
				const {
					banMessage: t,
					contentGateType: s,
					continueToQuarantinedSubreddit: r,
					continueToGatedSubreddit: a,
					isLoggedIn: i,
					isContributorRequestsDisabled: c,
					isPrivateSubredditContributorRequestPending: d,
					isSeo: l,
					location: p,
					origin: h,
					pageLayer: f,
					quarantineRequiresEmail: O,
					quarantineMessage: w,
					quarantineMessageHtml: _,
					quarantineMessageRTJson: P,
					interstitialWarningMessage: k,
					interstitialWarningMessageHtml: E,
					interstitialWarningMessageRTJson: j,
					setNSFWPreference: N,
					subredditDescription: I,
					subredditName: L,
					user: D
				} = e, R = async () => {
					if (i ? await N() : await Object(u.n)(), l) {
						const e = new URL(window.location.href);
						e.searchParams.set(y.g, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (s) {
					case S.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${n.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(se, null, B._("r/{community name} is a Reddit Premium community", [B._param("community name", L)], {
							hk: "2lyDwB"
						})), o.a.createElement(A, null, B._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(M, null, D ? o.a.createElement(ee, {
							href: `${n.a.redditUrl}/premium`,
							redditStyle: !0
						}, B._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement($, {
							href: Object(m.a)(p, h),
							redditStyle: !0
						}, B._("Sign Up", null, {
							hk: "rvpjy"
						})), D ? o.a.createElement(q, {
							to: "/",
							redditStyle: !0
						}, B._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(K, {
							href: Object(m.a)(p, h),
							redditStyle: !0
						}, B._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case S.a.Nsfw:
					case S.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${n.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(se, null, s === S.a.Nsfw ? B._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : B._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(A, null, B._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(M, null, o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, B._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(K, {
							onClick: R,
							redditStyle: !0
						}, B._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case S.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(F, null), o.a.createElement(se, null, "r/", L, " ", B._("is a private community", null, {
							hk: "7zZmq"
						})), I && I.length && o.a.createElement(W, null, o.a.createElement(H, null, "r/", L), o.a.createElement(U, null, o.a.createElement("div", null, I))), o.a.createElement(A, null, B._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", L, " ", B._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), B._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(M, null, D ? o.a.createElement(o.a.Fragment, null, !c && o.a.createElement(b.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: T.a.ContributorRequestButton,
							isContributorRequestPending: d
						}), o.a.createElement(ee, {
							href: `${n.a.redditUrl}/message/compose?to=/r/${L}`,
							redditStyle: !0
						}, B._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(ee, {
							href: Object(m.a)(p, h),
							redditStyle: !0
						}, B._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(q, {
							to: "/",
							redditStyle: !0
						}, B._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), L && o.a.createElement(g.a, {
							subredditName: L
						}));
					case S.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${n.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(se, null, B._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(A, null, B._("This community is {=quarantined}", [B._param("=quarantined", o.a.createElement(z, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, B._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(re, null, P ? o.a.createElement(v.b, {
							content: P,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : _ ? o.a.createElement(x.a, {
							html: _
						}) : w || B._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), B._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(M, null, ((e, t, s) => {
							return !(e && e.hasVerifiedEmail) && s ? o.a.createElement(M, null, o.a.createElement(te, {
								to: "/",
								redditStyle: !0
							}, B._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(V, {
								href: `${n.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, B._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(M, null, o.a.createElement(X, {
								to: "/",
								redditStyle: !0
							}, B._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(K, {
								onClick: t,
								redditStyle: !0
							}, B._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(D, r, O)));
					case S.a.GatedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(se, null, B._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), o.a.createElement(A, null, o.a.createElement(re, null, j ? o.a.createElement(v.b, {
							content: j,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : E ? o.a.createElement(x.a, {
							html: E
						}) : k), B._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), o.a.createElement(M, null, o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, B._("No Thank You", null, {
							hk: "4B26AR"
						})), o.a.createElement(K, {
							onClick: a,
							redditStyle: !0
						}, B._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case S.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${n.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(se, null, B._("r/{community name} has been banned from Reddit", [B._param("community name", L)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(A, null, e ? o.a.createElement(C.a, {
							linkClassName: T.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : B._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(M, null, o.a.createElement(q, {
							to: "/",
							redditStyle: !0
						}, B._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case S.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(se, null, B._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(M, null, o.a.createElement(q, {
							to: "/",
							redditStyle: !0
						}, B._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case S.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(Q, null), o.a.createElement(se, null, B._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(A, null, B._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(M, null, D && o.a.createElement(Y, {
							eventSource: "content_gate"
						}), o.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, B._("Go Home", null, {
							hk: "49p4or"
						}))));
					case S.a.ProfileDoesNotExist:
					case S.a.ProfileDeleted:
					case S.a.ProfileSuspended:
					case S.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(se, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case S.a.ProfileBlockedForLegalReason:
									return B._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case S.a.ProfileDeleted:
									return B._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case S.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, B._("This account has been {=suspended} .", [B._param("=suspended", o.a.createElement(z, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, B._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case S.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(se, null, B._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(A, null, B._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(M, null, o.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, B._("Go Home", null, {
							hk: "49p4or"
						}))));
					case S.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(se, null, B._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(M, null, o.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, B._("Go Home", null, {
							hk: "49p4or"
						}))));
					case S.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(se, null, B._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(M, null, o.a.createElement(q, {
							to: "/",
							redditStyle: !0
						}, B._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = ae(ie(Object(i.i)(e => {
				const t = Object(r.useContext)(c.a) ? R : D;
				return o.a.createElement(t, null, o.a.createElement("div", {
					"data-testid": "content-gate"
				}, o.a.createElement(ne, null, ce(e))), o.a.createElement(f.b, null))
			})))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(n.a)({
				resolved: {},
				chunkName: () => "ContributorRequestButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ContributorRequestButton").then(s.bind(null, "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, s) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, s) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/modals.ts"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/CreateCommunityButton/index.m.less"),
				x = s.n(f),
				v = s("./src/lib/lessComponent.tsx");
			const g = "create-community-button",
				C = v.a.wrapped(l.c, "StyledTooltip", x.a),
				y = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.pb)(e),
					userIsSuspended: h.X
				});
			t.a = Object(a.b)(y, (e, t) => {
				let {
					eventSource: s
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(b.c)(s)), e(Object(c.h)(u.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(d.f)({
						tooltipId: g
					})),
					onHideTooltip: () => e(Object(d.i)())
				}
			})(Object(m.c)(e => {
				let {
					className: t,
					eventSource: s,
					onShowTooltip: r,
					onHideTooltip: a,
					openCommunityCreation: i,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: d,
					userIsSuspended: l,
					onClick: m
				} = e;
				return o.a.createElement(p.t, {
					className: t,
					disabled: l || d,
					onClick: e => {
						m && m(e), i(c)
					},
					onMouseEnter: r,
					onMouseLeave: a,
					priority: p.c.Secondary,
					id: g,
					isFullWidth: !0
				}, n.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), d ? o.a.createElement(C, {
					caretOnTop: !0,
					tooltipId: g,
					text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? o.a.createElement(C, {
					caretOnTop: !0,
					tooltipId: g,
					text: n.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/CreatorStats/EducationUnit.m.less": function(e, t, s) {
			e.exports = {
				container: "_2EuQaYC2G3KohzPtXm5hCL",
				innerContainer: "_2LsQAqUfogc1w9Ytlefh1M"
			}
		},
		"./src/reddit/components/CreatorStats/EducationUnit.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/CreatorStats/EducationUnit.m.less"),
				i = s.n(a),
				c = s("./src/reddit/components/CreatorStats/Icon.tsx");
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(i.a.container, t)
				}, r.a.createElement("div", {
					className: i.a.innerContainer
				}, d._("NEW! Now you can get data and insights on your posts", null, {
					hk: "343rNh"
				}), r.a.createElement(c.a, null)))
			}
		},
		"./src/reddit/components/Econ/Audio/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
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
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
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
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				d = s("./src/reddit/selectors/posts.ts"),
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
					r = s.status === c.a.Live,
					l = s.status === c.a.Closed,
					m = Object(a.e)(e => Object(d.U)(e, {
						postId: t.id
					}));
				return o.a.createElement("div", {
					className: b.a.container
				}, o.a.createElement("div", {
					className: b.a.label
				}, o.a.createElement("span", null, null == m ? void 0 : m.displayText), r && o.a.createElement("span", {
					className: Object(n.a)(b.a.badge, b.a.live)
				}, h._("Live", null, {
					hk: "1G2P1W"
				})), l && o.a.createElement("span", {
					className: Object(n.a)(b.a.badge, b.a.ended)
				}, h._("Ended", null, {
					hk: "4s3hco"
				})), void 0 !== s.totalParticipantsCount && o.a.createElement(u, {
					participantsCount: s.totalParticipantsCount
				}), o.a.createElement(i.a, {
					className: b.a.awards,
					thing: t
				})), o.a.createElement("h3", {
					className: b.a.title
				}, s.name))
			}
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, s) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				mIsWhite: "_3TyrvwTfHlJHEevBoOKkDJ",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				mIsGrey: "_2g4mHpbVF30jxvk8ZPbqBe"
			}
		},
		"./src/reddit/components/Footer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/config.ts"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/Footer/index.m.less"),
				d = s.n(c);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = i.a.div("UserAgreement", d.a), u = i.a.a("UserAgreementLink", d.a), p = i.a.a("PrivacyLink", d.a);
			var b;
			! function(e) {
				e.Grey = "grey", e.White = "white"
			}(b || (b = {}));
			t.b = e => r.a.createElement("div", {
				className: Object(a.a)(d.a.FooterContainer, {
					[d.a.mIsGrey]: e.textColor === b.Grey,
					[d.a.mIsWhite]: e.textColor === b.White
				})
			}, r.a.createElement(m, null, l._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy.} ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [l._param("=User Agreement", r.a.createElement(u, {
				href: `${o.a.redditUrl}/help/useragreement`
			}, l._("User Agreement", null, {
				hk: "YviZP"
			}))), l._param("=Privacy Policy.", r.a.createElement(p, {
				href: `${o.a.redditUrl}/help/privacypolicy`
			}, l._("Privacy Policy.", null, {
				hk: "1fsgYq"
			}))), l._param("year", (new Date).getFullYear())], {
				hk: "3wzgp7"
			})))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				Title: "_6Sb8zEFmf-xF6UJ5SowYB",
				title: "_6Sb8zEFmf-xF6UJ5SowYB",
				DropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				dropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				LayoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				layoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				LayoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				layoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				LayoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				layoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				Dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				selected: "_1fiOgAxLiYfEU41C1NOX9B",
				DropdownButton: "_3EHmSVytc7PNTijH2qfAan",
				dropdownButton: "_3EHmSVytc7PNTijH2qfAan",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/preferences.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/contexts/Tooltip.ts"),
				x = s("./src/reddit/controls/Dropdown/index.tsx"),
				v = s("./src/reddit/controls/Dropdown/Row.tsx"),
				g = s("./src/reddit/icons/fonts/index.tsx"),
				C = s("./src/reddit/selectors/telemetry.ts"),
				y = s("./src/reddit/selectors/tooltip.ts"),
				O = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				w = s.n(O);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const P = "view--layout--FUE",
				k = "LayoutSwitch--picker",
				S = Object(c.a)(x.a),
				E = {
					[b.d.Card]: function(e) {
						return o.a.createElement(g.a, _({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return o.a.createElement(g.a, _({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return o.a.createElement(g.a, _({}, e, {
							name: "view_compact"
						}))
					}
				},
				j = {
					[b.d.Card]: () => n.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[b.d.Classic]: () => n.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[b.d.Compact]: () => n.fbt._("compact", null, {
						hk: "1N7pcz"
					}),
					[b.d.Search]: () => n.fbt._("search", null, {
						hk: "49uLRt"
					})
				},
				N = Object(h.u)(),
				I = Object(i.c)({
					dropdownIsOpen: Object(y.b)(k),
					postLayout: h.S,
					redditStyle: h.D
				}),
				L = Object(a.b)(I, e => ({
					onListingLayoutChange: (t, s) => e(Object(m.y)(t, s)),
					openDropdown: () => e(Object(u.h)({
						tooltipId: k
					}))
				}));
			class T extends o.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: s,
							sendEvent: n,
							subredditId: r
						} = this.props;
						t ? t(e) : (s(e, r), n(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(C.Y)(t),
							subreddit: Object(C.gb)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: n,
							postLayout: r
						} = this.props, a = s || b.e[r], i = e === a, c = E[e], l = j[e];
						return o.a.createElement(v.b, _({}, t, {
							className: Object(d.a)(w.a.LayoutItem, {
								[w.a.selected]: i,
								[w.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: l(),
							iconWrapperClassName: w.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: w.a.LayoutItemTextClassName
						}), o.a.createElement(c, {
							className: w.a.LayoutIcon,
							onClick: i ? void 0 : n,
							isFilled: i && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return o.a.createElement(S, _({}, e, {
							className: w.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: w.a.DropdownRow,
							rowIconClassName: w.a.DropdownRowIcon,
							rowSelectedClassName: w.a.DropdownRowSelected,
							tooltipId: k
						}), this.renderItem(b.d.Card), this.renderItem(b.d.Classic), this.renderItem(b.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: n
					} = this.props, r = t || b.e[n];
					return o.a.createElement("div", {
						className: Object(d.a)(w.a.Container, e),
						id: P
					}, o.a.createElement("div", {
						className: w.a.DropdownContainer,
						onClick: s
					}, this.renderItem(r, {
						id: k,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), o.a.createElement(f.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = N(L(Object(p.c)(Object(l.a)(T))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, s) {
			e.exports = {
				SortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				sortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				SortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				sortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				SortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				sortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				SortLink: "M2Hk_S2yvXpsNPfZMBMur",
				sortLink: "M2Hk_S2yvXpsNPfZMBMur",
				active: "_2VxDgoEy96XoqXUPsQooJk",
				selected: "_1s79QnBguPbckxiiPvFXGP",
				SortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				sortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				CountrySort: "VatfkH4hd3AcIOCT15Zai",
				countrySort: "VatfkH4hd3AcIOCT15Zai",
				StateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				stateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				TimeSort: "GzkzdrqG-NjAYH7eKJan4",
				timeSort: "GzkzdrqG-NjAYH7eKJan4",
				DropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				dropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				Dropdown: "Sgi9lgQUrox4tW9Q75iif",
				dropdown: "Sgi9lgQUrox4tW9Q75iif",
				DropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				dropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				DropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				dropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				DropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				dropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				DropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT",
				dropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/listingSort/index.ts"),
				c = s("./src/reddit/actions/preferences.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				u = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				p = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/addQueryParams/index.ts")),
				b = s("./src/lib/constants/index.ts"),
				h = s("./node_modules/react-router-redux/es/index.js"),
				f = s("./node_modules/reselect/es/index.js"),
				x = s("./src/reddit/actions/tooltip.ts"),
				v = s("./node_modules/fbt/lib/FbtPublic.js"),
				g = s("./src/higherOrderComponents/asTooltip.tsx"),
				C = s("./src/reddit/constants/history.ts"),
				y = s("./src/reddit/constants/listingSorts.ts"),
				O = s("./src/reddit/contexts/Tooltip.ts"),
				w = s("./src/reddit/controls/Dropdown/index.tsx"),
				_ = s("./src/reddit/controls/Dropdown/Row.tsx"),
				P = s("./src/reddit/helpers/path/index.ts"),
				k = s("./src/reddit/helpers/trackers/navigation.ts"),
				S = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				E = s("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				j = s("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				N = s("./src/reddit/selectors/tooltip.ts"),
				I = s("./src/reddit/selectors/user.ts"),
				L = s("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				T = s("./src/reddit/components/ListingSort/index.m.less"),
				B = s.n(T),
				F = s("./src/lib/lessComponent.tsx");

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const D = "ListingSort--SortPicker",
				R = Object(g.a)(F.a.wrapped(w.a, "Dropdown", B.a)),
				A = F.a.wrapped(L.a, "ListingSortIcon", B.a),
				W = (F.a.wrapped(S.b, "DropdownTriangle", B.a), F.a.div("Title", B.a)),
				U = F.a.wrapped(e => r.a.createElement(_.b, M({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", B.a),
				H = e => {
					let {
						disabled: t,
						...s
					} = e;
					return r.a.createElement("div", M({}, s, {
						className: Object(a.a)(B.a.SortWrapper, s.className, {
							[B.a.isDisabled]: t
						})
					}))
				},
				z = F.a.div("DropdownRowDisabled", B.a),
				q = Object(l.u)({
					isFrontpage: l.A,
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				V = Object(f.c)({
					isAwardListingExperimentEnabled: j.a,
					isBestSortPopularEnabled: E.a,
					user: I.k,
					dropdownIsOpen: (e, t) => Object(N.b)(t.dropdownId || D)(e),
					isPopularPage: l.F
				}),
				G = Object(o.b)(V, (e, t) => {
					let {
						dropdownId: s,
						pageLayer: n
					} = t;
					return {
						onOpenDropdown: () => e(Object(x.h)({
							tooltipId: s || D
						}))
					}
				});
			var K = F.a.wrapped(q(G(Object(d.c)(e => r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && r.a.createElement(W, null, v.fbt._("Sort", null, {
					hk: "2BfINq"
				})), r.a.createElement(H, {
					disabled: e.disabled
				}, e.children || r.a.createElement(U, {
					className: e.buttonClassName,
					displayText: Object(y.a)(e.sort),
					id: e.dropdownId || D,
					showDropdownTriangle: !0
				}, r.a.createElement(A, {
					sort: e.sort
				}))), r.a.createElement(O.a.Consumer, null, t => r.a.createElement(R, M({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || D
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? r.a.createElement(z, null, v.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, s, n, r) => {
					const o = [b.W.HOT, b.W.NEW, b.W.TOP, b.W.RISING];
					return (e && (s || n) || t && n) && o.unshift(b.W.BEST), t && r && o.splice(3, 0, b.W.AWARDED), o
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => {
					const s = e.isProfilePage ? Object(p.a)(e.baseUrl, {
							sort: t
						}) : Object(P.a)(e.baseUrl, `${t}/`),
						n = s.split("?")[0],
						o = e.isProfilePage ? s.replace(n + "?", "") : void 0;
					return r.a.createElement(_.b, {
						className: Object(a.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
						displayText: Object(y.a)(t),
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(k.b)(t))
						},
						href: {
							pathname: n,
							state: {
								[C.b.FeedLoadReason]: C.a.SortChange
							},
							search: o
						},
						isSelected: e.sort === t,
						key: t
					}, r.a.createElement(A, {
						className: e.rowIconClassName,
						sort: t
					}))
				}))))))), "ListingSort", B.a),
				Z = s("./src/reddit/constants/parameters.ts");
			const Y = e => {
					const t = J[e];
					return t && t() || ""
				},
				J = {
					[b.fc.AllStates]: () => v.fbt._("All", null, {
						hk: "3FfdRL"
					}),
					[b.fc.Alaska]: () => v.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[b.fc.Alabama]: () => v.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[b.fc.Arkansas]: () => v.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[b.fc.Arizona]: () => v.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[b.fc.California]: () => v.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[b.fc.Colorado]: () => v.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[b.fc.Connecticut]: () => v.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[b.fc.DistrictOfColumbia]: () => v.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[b.fc.Delaware]: () => v.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[b.fc.Florida]: () => v.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[b.fc.Georgia]: () => v.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[b.fc.Hawaii]: () => v.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[b.fc.Iowa]: () => v.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[b.fc.Idaho]: () => v.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[b.fc.Illinois]: () => v.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[b.fc.Indiana]: () => v.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[b.fc.Kansas]: () => v.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[b.fc.Kentucky]: () => v.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[b.fc.Louisiana]: () => v.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[b.fc.Massachusetts]: () => v.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[b.fc.Maryland]: () => v.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[b.fc.Maine]: () => v.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[b.fc.Michigan]: () => v.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[b.fc.Minnesota]: () => v.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[b.fc.Missouri]: () => v.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[b.fc.Mississippi]: () => v.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[b.fc.Montana]: () => v.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[b.fc.NorthCarolina]: () => v.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[b.fc.NorthDakota]: () => v.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[b.fc.Nebraska]: () => v.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[b.fc.NewHampshire]: () => v.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[b.fc.NewJersey]: () => v.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[b.fc.NewMexico]: () => v.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[b.fc.Nevada]: () => v.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[b.fc.NewYork]: () => v.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[b.fc.Ohio]: () => v.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[b.fc.Oklahoma]: () => v.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[b.fc.Oregon]: () => v.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[b.fc.Pennsylvania]: () => v.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[b.fc.RhodeIsland]: () => v.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[b.fc.SouthCarolina]: () => v.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[b.fc.SouthDakota]: () => v.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[b.fc.Tennessee]: () => v.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[b.fc.Texas]: () => v.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[b.fc.Utah]: () => v.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[b.fc.Virginia]: () => v.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[b.fc.Vermont]: () => v.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[b.fc.Washington]: () => v.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[b.fc.Wisconsin]: () => v.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[b.fc.WestVirginia]: () => v.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[b.fc.Wyoming]: () => v.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var Q = s("./src/reddit/components/StateSort/index.m.less"),
				X = s.n(Q);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = F.a.wrapped(w.a, "_Dropdown", X.a),
				te = Object(g.a)(ee),
				se = e => {
					return e.indexOf("_") > 0 && re(e) === b.z.UnitedStates
				},
				ne = e => {
					if (se(e)) {
						return e.split("_")[1]
					}
					return b.fc.AllStates
				},
				re = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				oe = e => {
					const t = re(e),
						s = ne(e);
					return se(e) ? `${t}_${s}` : t
				},
				ae = Object(l.u)(),
				ie = Object(f.c)({
					dropdownIsOpen: Object(N.b)("StateSort--StateSortPicker")
				}),
				ce = Object(o.b)(ie, e => ({
					onOpenDropdown: () => e(Object(x.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, s) => {
						e(Object(h.b)(t)), e(Object(c.w)(b.z.UnitedStates + "_" + s))
					}
				}));
			var de = F.a.wrapped(ae(ce(e => {
				const t = `${e.baseUrl}?${Z.h}=${b.z.UnitedStates}`;
				return r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, r.a.createElement(U, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : Y(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(O.a.Consumer, null, s => r.a.createElement(te, $({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, s, {
					renderContentsHidden: !0
				}), Object.keys(b.fc).map(s => {
					const n = b.fc[s];
					return r.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === b.fc.AllStates ? t : `${t}_${e}`)(n), oe(n))
					}, r.a.createElement(_.b, {
						className: Object(a.a)(e.rowClassName, e.sort === n ? e.rowSelectedClassName : void 0),
						displayText: Y(n),
						isSelected: e.sort === n
					}))
				}))))
			})), "Component", X.a);
			const le = {
				[b.z.Everywhere]: () => v.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[b.z.UnitedStates]: () => v.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[b.z.Argentina]: () => v.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[b.z.Australia]: () => v.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[b.z.Bulgaria]: () => v.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[b.z.Canada]: () => v.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[b.z.Chile]: () => v.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[b.z.Colombia]: () => v.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[b.z.Croatia]: () => v.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[b.z.CzechRepublic]: () => v.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[b.z.Finland]: () => v.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[b.z.France]: () => v.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[b.z.Germany]: () => v.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[b.z.Greece]: () => v.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[b.z.Hungary]: () => v.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[b.z.Iceland]: () => v.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[b.z.India]: () => v.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[b.z.Ireland]: () => v.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[b.z.Italy]: () => v.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[b.z.Japan]: () => v.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[b.z.Malaysia]: () => v.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[b.z.Mexico]: () => v.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[b.z.NewZealand]: () => v.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[b.z.Philippines]: () => v.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[b.z.Poland]: () => v.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[b.z.Portugal]: () => v.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[b.z.PuertoRico]: () => v.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[b.z.Romania]: () => v.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[b.z.Serbia]: () => v.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[b.z.Singapore]: () => v.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[b.z.Spain]: () => v.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[b.z.Sweden]: () => v.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[b.z.Taiwan]: () => v.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[b.z.Thailand]: () => v.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[b.z.Turkey]: () => v.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[b.z.UnitedKingdom]: () => v.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var me = s("./src/reddit/components/CountrySort/index.m.less"),
				ue = s.n(me);

			function pe() {
				return (pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const be = "CountrySort--CountrySortPicker",
				he = Object(l.u)(),
				fe = Object(f.c)({
					dropdownIsOpen: Object(N.b)(be)
				});
			var xe = he(Object(o.b)(fe, e => ({
					onCloseDropdown: t => e(Object(x.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(x.g)({
						tooltipId: t
					})),
					onClickLink: (t, s) => {
						e(Object(h.b)(t, {
							[C.b.FeedLoadReason]: C.a.GeoModeChange
						})), e(Object(c.w)(s))
					}
				}))(e => {
					const t = re(e.sort),
						s = ne(e.sort),
						n = `${e.baseUrl}?${Z.h}=`;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(a.a)(ue.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(be) : e.onOpenDropdown(be)
					}, r.a.createElement(H, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, r.a.createElement(U, {
						className: e.buttonClassName,
						displayText: (() => t in le ? le[t]() : le[b.z.Everywhere]())(),
						id: be,
						showDropdownTriangle: !0
					})), r.a.createElement(O.a.Consumer, null, s => r.a.createElement(te, pe({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: be
					}, s, {
						renderContentsHidden: !0
					}), Object.keys(b.z).map(s => {
						const o = b.z[s];
						return r.a.createElement("div", {
							key: o,
							onClick: () => e.onClickLink(`${n}${oe(o)}`, o)
						}, r.a.createElement(_.b, {
							className: Object(a.a)(e.rowClassName, t === o ? e.rowSelectedClassName : void 0),
							displayText: le[o](),
							isSelected: t === o
						}))
					})))), t === b.z.UnitedStates && r.a.createElement(de, {
						baseUrl: e.baseUrl,
						buttonClassName: e.buttonClassName,
						className: e.stateSortClassName,
						disabled: e.disabled,
						dropdownClassName: e.dropdownClassName,
						rowClassName: e.rowClassName,
						rowSelectedClassName: e.rowSelectedClassName,
						showStateAbbreviations: e.showStateAbbreviations,
						sort: s,
						wrapperClassName: e.wrapperClassName
					}))
				})),
				ve = s("./node_modules/path-browserify/index.js"),
				ge = s.n(ve),
				Ce = s("./src/reddit/components/TimeSort/index.m.less"),
				ye = s.n(Ce);

			function Oe() {
				return (Oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const we = Object(g.a)(w.a),
				_e = F.a.div("ListingSortContainer", ye.a),
				Pe = Object(l.u)(),
				ke = Object(f.c)({
					dropdownIsOpen: Object(N.b)("TimeSort--SortPicker")
				});
			var Se = Pe(Object(o.b)(ke, e => ({
					onOpenDropdown: () => e(Object(x.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(d.c)(e => r.a.createElement(_e, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: !1
				}, r.a.createElement(U, {
					className: e.buttonClassName,
					displayText: Object(y.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(O.a.Consumer, null, t => r.a.createElement(we, Oe({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [b.ic.HOUR, b.ic.DAY, b.ic.WEEK, b.ic.MONTH, b.ic.YEAR, b.ic.ALL].map(t => {
					const s = ((e, t) => {
							let s = e.url;
							return e.urlParams.sort || Object(l.J)(e) || (s = ge.a.join(s, t)), s
						})(e.pageLayer, e.listingSort),
						n = Object(p.a)(s, {
							[Z.C]: t
						}),
						o = n.split("?")[0],
						i = `${n.replace(o+"?","")}`;
					return r.a.createElement(_.b, {
						className: Object(a.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
						key: `time_sort_${t}`,
						displayText: Object(y.b)(t),
						href: {
							pathname: o,
							state: {
								[C.b.FeedLoadReason]: C.a.SortChange
							},
							search: i
						},
						isSelected: e.timeSort === t,
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(k.d)(t))
						}
					})
				}))))))),
				Ee = s("./src/reddit/constants/listings.ts"),
				je = s("./src/reddit/controls/Button/index.tsx"),
				Ne = s("./src/reddit/icons/fonts/index.tsx"),
				Ie = s("./src/reddit/selectors/meta.ts"),
				Le = s("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Te = s.n(Le);

			function Be() {
				return (Be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Fe = new Set([b.W.CONTROVERSIAL, b.W.TOP]),
				Me = new Set([b.W.CONTROVERSIAL, b.W.RISING]),
				De = new Set([b.W.CONTROVERSIAL]),
				Re = "ListingSort--Overflow",
				Ae = Object(l.u)({
					isFrontpage: l.A,
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				We = Object(f.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, E.a, I.k, l.F, j.a, Ie.i, (e, t, s, n, r, o, a) => {
					if (e) return {
						isPopularPage: r,
						sortOptions: e,
						locale: a
					};
					const i = [b.W.HOT, b.W.NEW, b.W.TOP, b.W.RISING];
					return (t && (n || s) || r && s) && i.unshift(b.W.BEST), r && o && i.splice(3, 0, b.W.AWARDED), {
						isPopularPage: r,
						sortOptions: i,
						locale: a
					}
				});
			class Ue extends r.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(k.b)(e))
					}, this.renderSortButton = e => {
						const {
							sort: t,
							baseUrl: s,
							isProfilePage: n
						} = this.props, o = n ? Object(p.a)(s, {
							sort: e
						}) : Object(P.a)(s, `${e}/`), i = o.split("?")[0], c = n ? o.replace(i + "?", "") : void 0;
						return r.a.createElement(je.t, {
							className: Object(a.a)(Te.a.SortLink, e === t && Te.a.selected),
							kind: je.b.InternalLink,
							priority: je.c.Plain,
							Icon: s => r.a.createElement(A, Be({}, s, {
								className: Object(a.a)(Te.a.SortIcon, s.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(y.a)(e),
							onClick: () => this.changeSort(e),
							to: {
								pathname: i,
								state: {
									[C.b.FeedLoadReason]: C.a.SortChange
								},
								search: c
							},
							key: e
						})
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: s,
							isPopularPage: n,
							sort: o
						} = this.props, a = n && !!s && e === b.W.HOT && o === b.W.HOT;
						return r.a.createElement(r.a.Fragment, {
							key: e
						}, this.renderSortButton(e), a && r.a.createElement(xe, {
							baseUrl: Ee.c[Ee.b.Popular],
							buttonClassName: Te.a.DropdownButton,
							className: Te.a.CountrySort,
							disabled: t,
							dropdownClassName: Te.a.Dropdown,
							rowClassName: Te.a.DropdownRow,
							rowSelectedClassName: Te.a.DropdownRowSelected,
							wrapperClassName: Te.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: s,
							stateSortClassName: Te.a.StateSort
						}))
					}
				}
				isLocaleDependentOverflowSort(e) {
					const {
						sort: t,
						isPopularPage: s,
						locale: n
					} = this.props;
					return !n.startsWith("en") && (s ? e === b.W.AWARDED && (t === b.W.HOT || t === b.W.TOP) : e === b.W.BEST && t === b.W.TOP)
				}
				isWideSortCurrentSelected(e) {
					const {
						sort: t
					} = this.props, s = new Set([b.W.TOP, b.W.NEW]);
					return De.has(t) && s.has(e)
				}
				isOverflowSort(e) {
					return Me.has(e) || this.isLocaleDependentOverflowSort(e) || this.isWideSortCurrentSelected(e)
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: s,
						sort: n,
						sortOptions: o,
						timeSort: i
					} = this.props, c = !t && Fe.has(n), d = Me.has(n), l = o.filter(e => !this.isOverflowSort(e)), m = o.filter(e => this.isOverflowSort(e) && e !== n);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(K, Be({}, this.props, {
						buttonClassName: Te.a.DropdownButton,
						className: Object(a.a)(Te.a.SortDropdown, e),
						rowClassName: Te.a.DropdownRow,
						rowIconClassName: Te.a.DropdownRowIcon,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						showTitle: !1
					})), r.a.createElement("div", {
						className: Object(a.a)(Te.a.SortButtons, e)
					}, l.map(this.renderSort)), d && this.renderSort(n), c && r.a.createElement(Se, {
						buttonClassName: Te.a.DropdownButton,
						className: Te.a.TimeSort,
						dropdownClassName: Te.a.Dropdown,
						listingSort: n,
						onChange: s,
						rowClassName: Te.a.DropdownRow,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						timeSort: i || b.jc,
						wrapperClassName: Te.a.DropdownSortWrapper
					}), m.length > 0 && r.a.createElement(K, Be({}, this.props, {
						className: Object(a.a)(Te.a.SortOverflow, e),
						dropdownClassName: Te.a.Dropdown,
						dropdownId: Re,
						rowClassName: Te.a.DropdownRow,
						rowIconClassName: Te.a.DropdownRowIcon,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: m
					}), r.a.createElement("button", {
						className: Te.a.SortOverflowButton,
						id: Re
					}, r.a.createElement(Ne.a, {
						name: "overflow_horizontal"
					}))))
				}
			}
			var He = Ae(Object(o.b)(We)(Object(d.c)(Ue))),
				ze = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				qe = s.n(ze);
			const Ve = Object(l.u)({
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				Ge = Object(o.b)(null, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						updateSortPreference: (t, n) => {
							if (s) {
								const r = Object(i.c)({
									sort: t,
									timeSort: n
								});
								e(Object(c.J)(s, r))
							}
						}
					}
				});
			class Ke extends r.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						m.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						m.a.setState({
							isListingFocused: !0
						})
					}, this.updateTimeSort = e => {
						this.props.updateSortPreference(this.props.sort, e)
					}
				}
				render() {
					const {
						baseUrl: e,
						className: t,
						countrySort: s,
						disabled: n = !1,
						isProfilePage: o,
						sort: i,
						sortOptions: c,
						subredditId: d,
						timeSort: l,
						updateSortPreference: m
					} = this.props;
					return r.a.createElement("div", {
						className: Object(a.a)(qe.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, r.a.createElement(He, {
						baseUrl: e,
						disabled: n,
						geopopularSort: s,
						onChange: m,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: c,
						timeSort: l
					}), !o && r.a.createElement(u.a, {
						className: qe.a.LayoutSwitch,
						subredditId: d
					}))
				}
			}
			t.a = Ve(Ge(Object(d.c)(Ke)))
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				d = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				l = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				m = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				u = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/Econ/Audio/async.ts"),
				h = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				f = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				x = s("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx"),
				v = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				g = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				C = s("./src/reddit/hooks/useTracking.ts"),
				y = s("./src/reddit/models/Media/index.ts"),
				O = s("./src/reddit/models/Post/index.ts"),
				w = s("./src/reddit/models/Vote/index.ts"),
				_ = s("./src/reddit/selectors/activeModalId.ts"),
				P = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				k = s("./src/reddit/selectors/moderatorPermissions.ts"),
				S = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				j = s("./src/lib/ads/index.ts"),
				N = s("./src/lib/classNames/index.ts"),
				I = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				L = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				T = s("./src/reddit/components/AwardBadges/index.tsx"),
				B = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				F = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				M = s("./src/reddit/components/CreatorStats/loader.tsx"),
				D = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				R = s("./src/reddit/components/Flatlist/index.tsx"),
				A = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				W = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				U = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				H = s("./src/reddit/components/ModModeReports/index.tsx"),
				z = s("./src/reddit/components/ModModeReports/helpers.ts"),
				q = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				V = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				G = s("./src/reddit/components/PostContainer/index.tsx"),
				K = s("./src/reddit/components/PostLeftRail/index.tsx"),
				Z = s("./src/reddit/components/PostMedia/index.tsx"),
				Y = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				J = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				Q = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				X = s.n(Q);
			const {
				fbt: $
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var ee = () => r.a.createElement("div", {
					className: X.a.container
				}, r.a.createElement(J.a, {
					className: X.a.pinnedIcon,
					isFilled: !0
				}), r.a.createElement("span", {
					className: X.a.metaText
				}, $._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				te = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				se = s("./src/reddit/components/PostTitle/index.tsx"),
				ne = s("./src/reddit/components/PostTopLine/index.tsx"),
				re = s("./src/reddit/components/SourceLink/index.tsx"),
				oe = s("./src/reddit/constants/postLayout.ts"),
				ae = s("./src/reddit/contexts/InsideOverlay.tsx"),
				ie = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ce = s("./src/reddit/contexts/Post/index.tsx"),
				de = s("./src/reddit/helpers/isCrosspost.ts"),
				le = s("./src/reddit/helpers/localStorage/index.ts"),
				me = s("./src/reddit/helpers/postEvent.ts"),
				ue = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				pe = s("./src/reddit/models/Audio/index.ts"),
				be = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				he = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				fe = s("./src/reddit/constants/experiments.ts"),
				xe = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ve = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const ge = Object(i.a)(S.N, e => e.some(ve.c)),
				Ce = Object(i.a)(ge, e => e),
				ye = (e, t) => Object(xe.c)(e, {
					experimentName: fe.Ic,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && Ce(e, {
							listingKey: s
						})
					}
				});
			var Oe = s("./src/reddit/selectors/postFlair.ts"),
				we = s("./src/reddit/selectors/showPromotedCTA.ts"),
				_e = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Pe = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ke = s.n(Pe),
				Se = s("./src/reddit/selectors/i18n/index.ts"),
				Ee = s("./src/reddit/selectors/experiments/adblockAcceptableAdsMitigationExperiment.ts"),
				je = s("./src/reddit/components/LargePost/index.m.less"),
				Ne = s.n(je);
			const Ie = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(S.N)(e, {
						listingKey: s
					}) : void 0
				},
				Le = Object(o.b)(() => Object(i.c)({
					autoplayPref: E.b,
					activeModalId: _.a,
					hideNSFWPref: E.F,
					flairStyleTemplate: ie.W,
					isBlurredPreview: he.b,
					isCurrentUserProfilePost: S.l,
					isLoggedIn: E.Q,
					isActive: S.j,
					showPromotedCTA: we.a,
					moderatorPermissions: k.n,
					modModeEnabled: ie.U,
					posts: Ie,
					postHeightVariant: ye,
					shouldShowNsfwListingBelow: Se.b,
					showEditFlair: Oe.a,
					showAwardsPlaque: P.a,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						return !!s && Object(k.j)(e, s.id)
					},
					isAdblockAAMitigationEnabled: Ee.a,
					isOptionalTextEnabled: be.a
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const n = t === w.a.upvoted ? Object(u.kb)(s) : Object(u.w)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(u.gb)(s)),
						onOpenReportsDropdown: t => e(Object(p.h)({
							tooltipId: t
						}))
					}
				}),
				Te = r.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: o,
						currentUser: i,
						eventFactory: u,
						flairStyleTemplate: p,
						forceLoadMedia: w,
						hideNSFWPref: _,
						hostPostData: P,
						imageGalleryCurrentItem: k,
						inSubredditOrProfile: S = !1,
						isBlurredPreview: E,
						isCommentsPage: J,
						isCurrentUserProfilePost: Q,
						isFrontpage: X,
						isGalleryTileLayoutDefault: $,
						isModWithUserNotesPermissions: ae,
						isLoggedIn: ie,
						isOverlay: ce,
						isTopicPage: be,
						isCommentCountAnimationEnabled: he,
						isVoteCountAnimationEnabled: xe,
						isCountAnimShadowTestEnabled: ve,
						listingIndex: ge,
						listingKey: Ce,
						moderatorPermissions: ye,
						modModeEnabled: Oe,
						onClickPost: we,
						onIgnoreReports: Pe,
						onOpenReportsDropdown: Se,
						post: Ee,
						postHeightVariant: je,
						scrollerItemRef: Ie,
						shouldShowGalleryTileOption: Le,
						shouldShowInsightsButton: Te,
						shouldShowNsfwListingBelow: Be,
						showAwardsPlaque: Fe,
						showEditFlair: Me,
						showPromotedCTA: De,
						subredditOrProfile: Re,
						userIsOp: Ae,
						postId: We,
						postIds: Ue,
						onceInViewport: He,
						isAdblockAAMitigationEnabled: ze,
						isOptionalTextEnabled: qe
					} = e, Ve = Object(C.a)(), Ge = !!e.redditStyle || !!e["data-redditstyle"], Ke = Ge ? void 0 : p, Ze = Object(l.a)(ye), Ye = Oe && Ze, Je = Object(c.a)(ye), Qe = Object(d.a)(ye), Xe = Object(z.c)(Ee), $e = Object(U.a)(Ee), et = !!Ee.media && Ee.media.type === y.o.RTJSON, tt = Ae && et, st = s ? s - K.a : void 0, nt = !!Ee.recommendationContext, rt = !(X && ie || be) || nt && ie, ot = (e => e === fe.Oe.OnlyTitles)(je) && !Object(de.a)(Ee), at = (e => e === fe.Oe.MediumHeight)(je) && !Object(de.a)(Ee), it = (e => {
						var t;
						const {
							post: s,
							postIds: n,
							posts: r
						} = e;
						if (!Object(O.s)(s) || (null === (t = s.pollData) || void 0 === t ? void 0 : t.isPrediction)) return;
						const o = n && 0 === n.indexOf(s.id),
							a = n && 1 === n.indexOf(s.id),
							i = r && r[1] && Object(O.s)(r[1]);
						return {
							hasTopCompactPostStyles: o && i,
							hasBottomCompactPostStyles: a,
							showPinnnedHeader: o
						}
					})(e), ct = !!(null == P ? void 0 : P.shouldShowLinkedPosts), dt = (!S || ct || Be) && !Ee.isSponsored, lt = Object(j.t)(Ee, k), {
						source: mt
					} = lt, ut = Object(n.useRef)(null), pt = Object(n.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == He || He(ge))
						})
					}, [He, ge]);
					Object(g.a)(ut, pt);
					const [bt, ht] = Object(n.useState)(!1), ft = Object(n.useCallback)(() => {
						ht(!bt), Object(le.Kb)(), Ve(Object(ue.d)(We))
					}, [bt, Ve, We]), xt = Ee.isSponsored && !(Ee.media && y.a.has(Ee.media.type)) && !ze, vt = !!(E && (null == Re ? void 0 : Re.isNSFW)), gt = Object(n.useRef)({
						renderingObjectInfo: Ee
					});
					return r.a.createElement(v.b, null, r.a.createElement(G.a, {
						className: Object(N.a)(Ne.a.container, o, ke.a.largeAndMediumPostStyles, ke.a.largeAndMediumActiveStyles, Object(m.a)(e), {
							[ke.a.mUseRedditTheme]: Ge,
							promotedvideolink: xt,
							[Ne.a.topCompactPost]: it && it.hasTopCompactPostStyles,
							[Ne.a.bottomCompactPost]: it && it.hasBottomCompactPostStyles,
							[Ne.a.shouldShowOverflow]: Te
						}),
						isOverlay: ce,
						style: Object(m.b)(e.flairStyleTemplate),
						post: Ee,
						onClick: we,
						eventFactory: u
					}, r.a.createElement("div", {
						ref: ut
					}), r.a.createElement(te.a, {
						model: Ee,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: ve,
						isVoteCountAnimation: xe,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: Ke,
						redditStyle: Ge,
						postId: We
					}), r.a.createElement(V.a, {
						className: Object(N.a)(Ne.a.backgroundWrapper, {
							[Ne.a.isEvent]: Object(me.a)(Ee),
							[Ne.a.shouldUseRoundedBorder]: Te
						}),
						"data-click-id": "background",
						flairStyleTemplate: Ke,
						post: Ee,
						redditStyle: Ge
					}, r.a.createElement(D.a, {
						post: Ee
					}), it && it.showPinnnedHeader && r.a.createElement(ee, null), Object(a.c)(Ee) && r.a.createElement(r.a.Fragment, null, r.a.createElement(f.a, {
						post: Ee
					}), r.a.createElement(h.a, {
						post: Ee
					})), !Object(a.c)(Ee) && r.a.createElement(r.a.Fragment, null, !!Ee.recommendationContext && r.a.createElement(q.a, {
						content: Ee.recommendationContext.content,
						layout: oe.g.Large,
						post: Ee
					}), r.a.createElement(ne.a, {
						className: Ne.a.postTopLine,
						hideAwards: Fe,
						hideNSFWPref: _,
						hostPostData: P,
						iconClassName: Ne.a.postTopLineIcon,
						inSubredditOrProfile: S,
						isCommentsPage: !!J,
						isCompactPinnedPost: !!it,
						isCurrentUserProfilePost: Q,
						isModWithUserNotesPermissions: ae,
						isOverlay: !!ce,
						isTopicPage: !!be,
						listingKey: Ce,
						post: Ee,
						shouldShowSubscribeButton: rt,
						showSubreddit: dt,
						showSubredditIcon: !0,
						subredditOrProfile: Re
					}), r.a.createElement(se.c, {
						className: Ne.a.postTitle,
						post: Ee,
						redditStyle: Ge,
						size: se.b.Large,
						titleColor: Ke && Ke.postTitleColor,
						isOverlay: ce
					}), Ee.source && !Ee.isSponsored && !(Ee.media && Object(y.H)(Ee.media)) && !vt && r.a.createElement(r.a.Fragment, null, r.a.createElement(re.a, {
						className: Ne.a.sourceLink,
						post: Ee
					}), qe && Ee.media && Ee.media.type !== y.o.TEXT && Ee.media.type !== y.o.IMAGE && Ee.media.richtextContent && r.a.createElement(x.a, {
						content: Ee.media.richtextContent,
						rtJsonElementProps: gt.current
					}))), r.a.createElement("div", {
						className: Ne.a.postMediaWrapper
					}, !it && r.a.createElement(Z.a, {
						isGalleryTileLayoutDefault: $,
						isListing: !0,
						isMediumHeight: at,
						isNotCardView: !!ce,
						isTitleOnly: ot,
						showCentered: !0,
						flairStyleTemplate: Ke,
						post: Ee,
						availableWidth: st,
						shouldLoad: w,
						scrollerItemRef: Ie,
						autoplayPref: t,
						shouldShowGalleryTileOption: Le,
						showPromotedCTA: De
					})), De && mt && mt.url && !Ee.isSurveyAd && r.a.createElement(I.a, {
						className: Ne.a.adLinkWrapper
					}, r.a.createElement(L.a, {
						post: Ee,
						adLinkContent: lt
					})), Oe && Ze && $e && r.a.createElement("div", {
						className: Ne.a.modModeBannerWrapper
					}, r.a.createElement(W.a, {
						thing: Ee
					})), Oe && Ze && Xe && r.a.createElement("div", {
						className: Ne.a.modModeBannerWrapper
					}, r.a.createElement(H.a, {
						onIgnoreReports: Pe,
						reportable: Ee
					})), Object(pe.b)(Ee) && r.a.createElement(b.a, {
						post: Ee
					}), r.a.createElement(A.d, null), Fe && r.a.createElement(T.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !1,
						thing: Ee,
						tooltipType: ce ? _e.c.Lightbox : void 0
					}), r.a.createElement("div", {
						className: Ne.a.flatListContainer
					}, r.a.createElement(F.a, {
						className: Ne.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Ke,
						model: Ee,
						onVoteClick: e.handleVote
					}), !Ee.isSurveyAd && r.a.createElement(R.c, {
						currentUser: i,
						hasModFlairPerms: Je,
						hasModFullPerms: Qe,
						hasModPostPerms: Ze,
						hostPostData: P,
						isCommentCountAnimation: he,
						isCountAnimShadowTestEnabled: ve,
						isLargePost: !0,
						isOverlay: !!ce,
						listingKey: Ce,
						modModeEnabled: Oe,
						onClickInsightsButton: ft,
						onIgnoreReports: Pe,
						onOpenReportsDropdown: Se,
						post: Ee,
						shouldShowInsightsButton: Te,
						showEditPost: tt,
						showEditFlair: Me,
						useFlatlistBreakpoints: Object(Y.b)({
							editPost: !1,
							save: !Ye,
							hide: !1,
							report: !1
						})
					})), Re && bt && r.a.createElement(M.a, {
						className: Ne.a.creatorStatsContainer,
						post: Ee,
						subreddit: Re,
						isOwnProfileStats: !0
					})), X && r.a.createElement(B.a, {
						post: Ee,
						postIds: null != Ue ? Ue : [],
						subredditId: null == Re ? void 0 : Re.id
					})))
				});
			Te.displayName = "LargePostMemoized";
			t.default = Object(ce.b)(Le(Object(ae.b)(Te)))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/controls/Dropdown/index.m.less"),
				d = s.n(c);
			const l = {
				[a.W.BEST]: "best",
				[a.W.HOT]: "hot",
				[a.W.NEW]: "new",
				[a.W.CONTROVERSIAL]: "controversial",
				[a.W.TOP]: "top",
				[a.W.RISING]: "rising",
				[a.W.AWARDED]: "award"
			};

			function m(e) {
				let {
					className: t,
					isFilled: s,
					sort: n
				} = e;
				return l[n] ? r.a.createElement(i.a, {
					name: l[n],
					isFilled: s,
					className: Object(o.a)(t, d.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, s) {
			e.exports = {
				Dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				DropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				dropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				Title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				Row: "_1gYorLdXyKMUS-i9loCkHd",
				row: "_1gYorLdXyKMUS-i9loCkHd",
				SortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				sortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				isDisabled: "_1BlN3qzijbBTtkKxs6CX-N",
				DropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				dropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				ListingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				listingSort: "_1oAH8WzvQU6SeYEsM1msMu"
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/SubredditNameLink/index.tsx"),
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
				return o.a.createElement("div", {
					className: Object(a.a)(p.a.container, t)
				}, o.a.createElement(d.a, {
					className: p.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: b.url
				}, o.a.createElement(c.b, {
					className: p.a.subredditIcon,
					shouldHideNsfwIcon: r,
					subredditOrProfile: b
				}), o.a.createElement("span", null, b.displayText)), ((e, t) => {
					if (t) return o.a.createElement("div", {
						role: "img",
						"aria-label": n.fbt._("Crossposted by{author}from{community}", [n.fbt._param("author", Object(l.d)(e)), n.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, o.a.createElement(m.a, {
						name: "crosspost",
						className: p.a.CrosspostIcon
					}))
				})(u.author, s), b && b.isQuarantined && o.a.createElement(i.a, null))
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
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				c = s.n(i);

			function d(e) {
				const {
					source: t
				} = e.post;
				return r.a.createElement("div", {
					className: Object(o.a)(c.a.container, e.className)
				}, r.a.createElement(a.a, {
					className: Object(o.a)(c.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(o.a)(c.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(o.a)(c.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
					linkTextClassName: c.a.thumbnailLinkText,
					outboundLinkIconClassName: c.a.thumbnailOutboundLinkIcon,
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				i = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				c = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/components/NotificationButton/index.m.less"),
				l = s.n(d);
			t.a = e => {
				const t = Object(i.a)(),
					{
						isFilled: s,
						onClick: n,
						hasTooltip: d,
						tooltipText: m,
						className: u
					} = e;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
					className: Object(o.a)(l.a.notificationButton, u),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: n
				}, r.a.createElement(c.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": m
				})), d && r.a.createElement(a.a, {
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
				i = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					isFirst: s,
					isLast: n,
					...a
				} = e;
				return r.a.createElement("div", c({
					className: Object(o.a)(i.a.border, {
						[i.a.isFirst]: s,
						[i.a.isLast]: n
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
			var n = s("./node_modules/lodash/times.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/constants/gold.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/components/CommentContainer/index.tsx"),
				p = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				b = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				x = s("./src/reddit/selectors/communityAwards.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				C = s.n(g);
			const y = m.a.div("ProfileOwnerCommentWrapper", C.a),
				O = m.a.div("CommentContentWrapper", C.a),
				w = m.a.div("Wrapper", C.a),
				_ = m.a.div("CommentSeparator", C.a),
				P = Object(i.b)(() => Object(c.c)({
					comment: (e, t) => Object(f.b)(e, t),
					isAwarded: (e, t) => {
						const s = Object(f.b)(e, t);
						return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
							const s = Object(x.a)(e, t);
							return s && s.coinPrice >= d.g
						})
					},
					isNightmodeOn: v.db
				}), e => ({
					openPost: t => e(Object(b.L)(t))
				}));
			class k extends a.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: s,
						openPost: n,
						isAwarded: o,
						isFirst: i,
						isLast: c,
						isNightmodeOn: d,
						profileName: m,
						showModTools: p
					} = this.props, b = m === e.author ? S : E;
					return a.a.createElement(u.a, {
						comment: e,
						onClick: (e, t) => {
							n({
								postOrComment: t,
								clickInfo: Object(h.a)(e),
								queryParams: {
									context: 3
								}
							}), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, a.a.createElement(w, {
						className: Object(l.a)({
							[C.a.isFirst]: i,
							[C.a.isLast]: c,
							[C.a.isAwarded]: o,
							[C.a.isNightmodeOn]: d
						})
					}, r()(s + 1, e => a.a.createElement(_, {
						key: e
					})), a.a.createElement(O, null, b(t, m, p))))
				}
			}
			const S = (e, t, s) => a.a.createElement(y, null, E(e, t, s, !0, !0)),
				E = function(e, t, s) {
					let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						r = arguments.length > 4 ? arguments[4] : void 0;
					return a.a.createElement(p.a, {
						commentId: e,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: n,
						showModTools: s,
						isExpanded: !!r
					})
				};
			t.a = P(k)
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/NotificationButton/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/SubredditIcon/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				h = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				f = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/OutboundLink/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				C = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				y = s("./src/reddit/models/Media/index.ts"),
				O = s("./src/reddit/models/Subreddit/index.ts"),
				w = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/PostTopLine/index.m.less"),
				P = s.n(_);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: r,
					hideAwards: _,
					hideNSFWPref: k,
					hostPostData: S,
					iconClassName: E,
					inSubredditOrProfile: j,
					isCommentsPage: N,
					isCompactPinnedPost: I,
					isCurrentUserProfilePost: L,
					isModWithUserNotesPermissions: T,
					isOverlay: B,
					isTopicPage: F,
					listingKey: M,
					post: D,
					shouldShowSubscribeButton: R,
					showCornerOutboundLink: A,
					showSubreddit: W,
					showSubredditIcon: U,
					subredditOrProfile: H,
					isFollowed: z,
					shouldShowFollowButton: q,
					onFollowPostClick: V
				} = e;
				const G = _ || F,
					K = H && Object(O.i)(H),
					Z = Object(a.e)(e => {
						if (!K) return !0;
						const t = Object(w.Gb)(e, D.author || "");
						return !t || t.enableFollowers
					});
				return o.a.createElement("div", {
					className: Object(i.a)(P.a.container, t)
				}, W && H && o.a.createElement("div", {
					className: P.a.subredditIconWrapper
				}, o.a.createElement(b.a, {
					"data-click-id": "subreddit",
					to: H.url
				}, U && o.a.createElement(p.b, {
					className: Object(i.a)(P.a.subredditIcon, E),
					shouldHideNsfwIcon: k,
					subredditOrProfile: H
				}))), o.a.createElement("div", {
					className: P.a.everythingElseWrapper
				}, W && o.a.createElement(d.h, {
					type: D.belongsTo.type,
					id: D.belongsTo.id
				}), o.a.createElement(u.d, {
					className: P.a.postTopMeta,
					forceOpenInNewTab: r,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: T,
					tooltipType: B ? u.c.Lightbox : void 0,
					post: D,
					showSub: W,
					subredditOrProfile: H
				}), o.a.createElement(m.a, {
					className: P.a.postBadges,
					displayText: H ? H.displayText : null,
					inSubredditOrProfile: j,
					isCompactPinnedPost: I,
					post: D,
					tooltipType: B ? u.c.Lightbox : void 0
				}), !G && o.a.createElement(c.a, {
					isPostDetail: N,
					thing: D,
					tooltipType: B ? u.c.Lightbox : void 0
				})), H && Z && W && R && !L && o.a.createElement(h.a, {
					className: P.a.SubscribeButton,
					getEventFactory: e => Object(g.k)(D.id, e ? "unsubscribe" : "subscribe", "post", M, S),
					identifier: {
						name: H.name,
						type: K ? f.a.PROFILE : f.a.SUBREDDIT
					},
					postId: D.id,
					size: x.d.XS
				}), A && o.a.createElement(v.b, {
					isSponsored: D.isSponsored,
					postId: D.id,
					href: Object(y.D)(D),
					source: D.source
				}, o.a.createElement(C.a, {
					className: P.a.outboundLinkIcon
				})), q && Z && o.a.createElement(l.a, {
					isFilled: !!z,
					onClick: V,
					hasTooltip: !0,
					tooltipText: n.fbt._("Follow post to stay updated", null, {
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
		"./src/reddit/components/StateSort/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/SubredditSearchCarousel/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const c = Object(n.a)({
					resolved: {},
					chunkName: () => "SubredditSearchCarousel",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("SubredditSearchCarousel").then(s.bind(null, "./src/reddit/components/SubredditSearchCarousel/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/SubredditSearchCarousel/index.tsx"
					}
				}),
				d = e => {
					const t = Object(a.e)(i.e),
						s = Object(a.e)(i.a);
					return t || s ? o.a.createElement(c, e) : null
				}
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, s) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.m.less": function(e, t, s) {
			e.exports = {
				overlay: "_2Gv5G082cUjYdQRyoGXyAo",
				modal: "_1_2jhTQc4DA7TtWS6g9BMN",
				cta: "_2GSkrIFkojWV3L0GzQPQ78",
				container: "g5yPbEIdjTE_wRlUoB82A",
				mainCta: "_2apx5_qKmY03WoZFb8YVu1",
				contentTitle: "_3eTqEK57FN9xurcrP9z4",
				warning: "_3jyZ6ZfaXFxWYcy9cal-xq",
				cancel: "Dkz3nRKFsS5yIm6e4o93l",
				logIn: "_2k4QV3liMMQG8PMmBZdd_g",
				footerWrapper: "_1pjB5spDy43eUJW4x-wgvf",
				qrCodeOuter: "_2d-IWyIU0ITjihi9gW-H",
				qrCodeInner: "_2j_QTfhxnvmU-5PbhFmkfw",
				qrCode: "_2jh657b-F4yvqS49IkMjU8",
				sneakySnoo: "_3ybMuGXl2IGX8TdC6DdPZL",
				copyLine1: "_1SEuCrIhIH261lEivbj87_",
				copyLine2: "_2qkRHAALu7ZMIjqb5wD8uk"
			}
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			}));
			var n = s("./src/config.ts"),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-redux/es/index.js"),
				d = s("./src/higherOrderComponents/asModal/helpers.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/reddit/actions/login.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				b = s("./src/reddit/components/Footer/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/constants/experiments.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/helpers/counters/nsfwblocking.ts"),
				g = s("./src/reddit/selectors/telemetry.ts");
			const C = "nsfw_dialog";
			var y = e => a.a.createElement("svg", {
					className: e.className,
					fill: "none",
					height: "60",
					viewBox: "0 0 60 60",
					xmlns: "http://www.w3.org/2000/svg",
					width: "60"
				}, a.a.createElement("path", {
					d: "M34.87 27.6302C35.4007 27.9589 36.0158 28.1257 36.64 28.1102C37.2902 28.1403 37.9354 27.9841 38.5 27.6602C38.9989 27.4003 39.4148 27.0052 39.7 26.5202C40.004 26.0401 40.1654 25.4835 40.1654 24.9152C40.1654 24.3469 40.004 23.7903 39.7 23.3102C39.4148 22.8252 38.9989 22.4302 38.5 22.1702C37.9681 21.8768 37.3671 21.7318 36.76 21.7502C36.1864 21.7434 35.6198 21.8773 35.11 22.1402C34.6039 22.3874 34.1776 22.7721 33.88 23.2502C33.5564 23.7276 33.3887 24.2936 33.4 24.8702C33.3891 25.429 33.5346 25.9797 33.82 26.4602C34.0597 26.9366 34.4222 27.3405 34.87 27.6302Z",
					fill: "#FF585B"
				}), a.a.createElement("path", {
					d: "M38.68 33.0002C38.0443 32.6933 37.3457 32.5392 36.64 32.5502C35.9438 32.5394 35.255 32.6936 34.63 33.0002C34.05 33.278 33.5609 33.715 33.22 34.2602C32.8649 34.7654 32.6744 35.3678 32.6744 35.9852C32.6744 36.6026 32.8649 37.205 33.22 37.7102C33.5748 38.2212 34.0623 38.6257 34.63 38.8802C35.2562 39.1836 35.9442 39.3376 36.64 39.3302C37.3454 39.3379 38.0432 39.184 38.68 38.8802C39.2591 38.6169 39.7565 38.2023 40.12 37.6802C40.4537 37.1836 40.6313 36.5985 40.63 36.0002C40.6324 35.383 40.4552 34.7784 40.12 34.2602C39.7602 33.7199 39.2632 33.2851 38.68 33.0002Z",
					fill: "#FF585B"
				}), a.a.createElement("path", {
					d: "M54.52 20.1902L39.31 4.9802C38.0246 3.68674 36.4962 2.66024 34.8126 1.95977C33.129 1.25929 31.3235 0.898682 29.5 0.898682C27.6765 0.898682 25.871 1.25929 24.1874 1.95977C22.5038 2.66024 20.9753 3.68674 19.69 4.9802L4.47996 20.1902C3.1865 21.4756 2.16 23.004 1.45952 24.6876C0.75905 26.3712 0.398438 28.1767 0.398438 30.0002C0.398438 31.8237 0.75905 33.6292 1.45952 35.3128C2.16 36.9964 3.1865 38.5249 4.47996 39.8102L19.69 55.0202C20.9753 56.3137 22.5038 57.3402 24.1874 58.0406C25.871 58.7411 27.6765 59.1017 29.5 59.1017C31.3235 59.1017 33.129 58.7411 34.8126 58.0406C36.4962 57.3402 38.0246 56.3137 39.31 55.0202L54.52 39.8102C55.8134 38.5249 56.8399 36.9964 57.5404 35.3128C58.2409 33.6292 58.6015 31.8237 58.6015 30.0002C58.6015 28.1767 58.2409 26.3712 57.5404 24.6876C56.8399 23.004 55.8134 21.4756 54.52 20.1902ZM23.92 43.5002H18.19V24.8402L13.27 27.0002V21.6602L22.27 17.5802H23.95L23.92 43.5002ZM44.92 40.1102C44.0432 41.3133 42.8485 42.2483 41.47 42.8102C39.9566 43.453 38.3292 43.7843 36.685 43.7843C35.0407 43.7843 33.4133 43.453 31.9 42.8102C30.5371 42.2355 29.3552 41.3025 28.48 40.1102C27.651 38.9798 27.2091 37.612 27.22 36.2102C27.2015 34.9552 27.5565 33.723 28.24 32.6702C28.9308 31.5703 29.8778 30.6542 31 30.0002C30.1811 29.3345 29.5237 28.4921 29.0768 27.5361C28.63 26.5801 28.4054 25.5354 28.42 24.4802C28.3942 23.1593 28.7708 21.8619 29.5 20.7602C30.2375 19.6425 31.2781 18.758 32.5 18.2102C33.8234 17.6075 35.2607 17.2956 36.715 17.2956C38.1692 17.2956 39.6065 17.6075 40.93 18.2102C42.1475 18.765 43.1863 19.648 43.93 20.7602C44.6492 21.8441 45.0255 23.1195 45.01 24.4202C45.0008 25.4585 44.7654 26.4823 44.32 27.4202C43.8573 28.3643 43.2034 29.202 42.4 29.8802C43.5275 30.5247 44.4842 31.43 45.19 32.5202C45.8864 33.5797 46.2519 34.8224 46.24 36.0902C46.2595 37.5496 45.7717 38.9705 44.86 40.1102H44.92Z",
					fill: "#FF585B"
				})),
				O = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				w = s("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				_ = s.n(w);
			const P = {
					d2x_nsfw_signup_blocking_de_v1: `${n.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${n.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				k = e => {
					const t = Object(i.d)(),
						s = Object(h.b)(),
						n = Object(i.e)(O.f),
						m = Object(o.useCallback)(() => {
							n === O.a.Blurred && t(Object(p.k)({
								actionSource: p.a.NsfwBlockingModal
							}))
						}, [t, n]),
						b = (e => e ? a.a.createElement("div", {
							className: _.a.cta
						}, r.fbt._("To show mature content,", null, {
							hk: "5xfDy"
						}), a.a.createElement("br", null), r.fbt._("log in to confirm you're over 18", null, {
							hk: "29imoi"
						})) : a.a.createElement("div", {
							className: _.a.cta
						}, r.fbt._("Log in to confirm you're over 18", null, {
							hk: "RUR2Z"
						})))(n === O.a.Blurred);
					return Object(o.useEffect)(() => {
						Object(v.c)(n)
					}, [n]), a.a.createElement("div", {
						className: Object(l.a)(_.a.mainCta)
					}, a.a.createElement(y, null), b, a.a.createElement("div", {
						className: _.a.contentTitle
					}, e.contentTitle), a.a.createElement("div", {
						className: _.a.warning
					}, (() => r.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), a.a.createElement("div", {
						className: _.a.buttonContainer
					}, a.a.createElement(x.j, {
						className: Object(l.a)(_.a.logIn),
						onClick: () => {
							s((() => e => ({
								...Object(g.n)(e),
								source: "xpromo",
								action: "click",
								noun: C
							}))()), m(), Object(v.b)(v.a.Login), t(Object(u.i)())
						}
					}, (() => r.fbt._("Log In", null, {
						hk: "4BITk"
					}))()), a.a.createElement(x.j, {
						className: _.a.cancel,
						onClick: () => {
							Object(d.b)(), s((() => e => ({
								...Object(g.n)(e),
								source: "xpromo",
								action: "dismiss",
								noun: C
							}))()), Object(v.b)(v.a.Dismiss), t(Object(c.b)("/"))
						}
					}, (() => r.fbt._("I'm not over 18", null, {
						hk: "11UX9Q"
					}))())))
				},
				S = Object(m.a)(e => {
					const t = `${n.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`;
					return a.a.createElement("div", {
						className: _.a.qrCodeOuter
					}, a.a.createElement("div", {
						className: _.a.qrCodeInner
					}, a.a.createElement("img", {
						className: _.a.qrCode,
						alt: r.fbt._("QR Code to get the Reddit app", null, {
							hk: "2uYhIL"
						}),
						src: e.qrCodeAsset
					}), a.a.createElement("div", {
						className: _.a.copyLine1
					}, (() => r.fbt._("Download the app to use", null, {
						hk: "4i9ZxV"
					}))()), a.a.createElement("div", {
						className: _.a.copyLine2
					}, (() => r.fbt._("Anonymous Browsing", null, {
						hk: "rTJ9j"
					}))()), a.a.createElement("img", {
						className: _.a.sneakySnoo,
						src: t
					})))
				}),
				E = e => {
					const t = Object(h.b)();
					a.a.useEffect(() => {
						t((() => e => ({
							...Object(g.n)(e),
							source: "xpromo",
							action: "view",
							noun: C
						}))())
					}, [t]);
					const {
						contentTitle: s
					} = e, n = Object(i.e)(O.g), r = Object(i.e)(O.h), o = Object(i.e)(O.f), c = o === O.a.Blurred ? b.a.White : o === O.a.NoPreview ? b.a.Grey : void 0;
					return a.a.createElement("div", {
						className: _.a.container
					}, a.a.createElement(k, {
						contentTitle: s
					}), a.a.createElement("div", {
						className: Object(l.a)(_.a.footerWrapper, {
							[_.a.mIsModal]: o === O.a.Blurred
						})
					}, a.a.createElement(b.b, {
						textColor: c
					})), a.a.createElement(S, {
						qrCodeAsset: (() => n === f.yc.Enabled || r === f.pb.BlurredPreview || r === f.pb.NoPreview ? P.d2x_nsfw_signup_blocking_de_v1 : P.d2x_nsfw_signup_blocking_non_us_v1)()
					}))
				}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return w
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "b", (function() {
				return S
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/actions/ads/index.ts"),
				i = s("./src/reddit/actions/focusedVerticals/index.ts"),
				c = s("./src/reddit/actions/gold/tooltips.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				m = s("./src/reddit/actions/survey/index.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/components/PostList/Placeholder.tsx"),
				x = s("./src/reddit/featureFlags/index.ts"),
				v = s("./src/reddit/selectors/experiments/survey.ts"),
				g = s("./src/reddit/selectors/listings.ts"),
				C = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/selectors/tracking.ts");

			function w() {
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
			const _ = w(),
				P = {
					apiError: g.c,
					apiPending: g.d,
					measureScrollFPS: x.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.S)(e, t),
					loadMore: g.g,
					postsById: C.S,
					postIds: Object(o.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: r
						} = t;
						return Object(C.D)(e, s, n, r)
					}),
					subredditsById: y.bb,
					viewportDataLoaded: O.a,
					pageReferrer: p.V,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: v.e
				},
				k = Object(r.c)(P),
				S = e => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(a.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(i.a)({
							lastLoadedEnv: "server"
						})), e(d.L(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(d.z(t, s))
					},
					trackOnPostEnteredViewport: (t, s, n, r) => {
						e(d.O(t, n, r))
					},
					trackOnPostExitedViewport: (t, s, n, r, o) => {
						e(d.P(t, n, r, o))
					},
					showModalOnScroll: () => e(d.cb()),
					surveyTriggerScrollCounted: () => e(Object(m.l)())
				}),
				E = e => Object(b.b)({
					...e
				}),
				j = (e, t, s, n) => {
					const {
						listingKey: r,
						hostPostData: o,
						listingBelowVariant: a
					} = n;
					return Object(h.k)(e, t, "post", r, o, a, void 0)
				},
				N = Object(n.b)(k, S, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: E,
					postClickEventFactory: j
				}));
			t.a = e => Object(u.c)(_(N(e)))
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/postFlair.ts"),
				i = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/models/Vote/index.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				u = s("./src/reddit/selectors/postFlair.ts"),
				p = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(n.b)(() => Object(r.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: d.W,
				hideNSFWPref: b.F,
				isActive: p.j,
				moderatorPermissions: m.n,
				modModeEnabled: d.U,
				showEditFlair: u.a
			}), (e, t) => {
				let {
					postId: s
				} = t;
				return {
					dispatchFlairChanged: t => {
						let {
							post: s,
							previewFlair: n,
							selectedTemplateId: r
						} = t;
						return e(Object(a.h)({
							post: s,
							previewFlair: n,
							selectedTemplateId: r
						}))
					},
					handleVote: t => {
						const n = t === c.a.upvoted ? Object(o.kb)(s) : Object(o.w)(s);
						e(n)
					},
					onIgnoreReports: () => e(Object(o.gb)(s)),
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
						previewFlair: n,
						selectedTemplateId: r
					} = e;
					return t.dispatchFlairChanged({
						post: s.post,
						previewFlair: n,
						selectedTemplateId: r
					})
				}
			}), {
				forwardRef: !0
			});
			t.a = h
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts");
			const o = {
					[r.W.BEST]: () => n.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[r.W.HOT]: () => n.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[r.W.NEW]: () => n.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[r.W.CONTROVERSIAL]: () => n.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[r.W.RISING]: () => n.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[r.W.TOP]: () => n.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[r.W.AWARDED]: () => n.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				a = e => {
					const t = o[e];
					return t && t() || ""
				},
				i = {
					[r.ic.HOUR]: () => n.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[r.ic.DAY]: () => n.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[r.ic.WEEK]: () => n.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[r.ic.MONTH]: () => n.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[r.ic.YEAR]: () => n.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[r.ic.ALL]: () => n.fbt._("All Time", null, {
						hk: "3qt6Ct"
					})
				},
				c = e => {
					const t = i[e];
					return t && t() || ""
				}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = r.a.createContext({})
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = r.a.createContext(() => () => {})
		},
		"./src/reddit/hooks/promo/useIsPromoShown.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/promo.ts"),
				r = s("./src/reddit/hooks/usePromoContext.ts");

			function o(e) {
				const {
					promos: t
				} = Object(r.a)();
				return !!e && t.get(e) === n.a.Shown
			}
		},
		"./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");

			function o(e) {
				const t = Object(n.e)(r.a) === e,
					s = Object(n.e)(r.c) === e,
					o = Object(n.e)(r.e) === e;
				return t || s || o
			}
		},
		"./src/reddit/hooks/usePromoContext.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s("./src/reddit/contexts/Promo/index.ts");
			t.a = function() {
				return Object(n.useContext)(r.a)
			}
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, s) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/pages/ErrorPages/index.m.less"),
				c = s.n(i);
			const d = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: c.a.container
					}, o.a.createElement("h3", {
						className: c.a.title
					}, t || n.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), o.a.createElement(a.n, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, n.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				},
				l = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: c.a.container
					}, o.a.createElement("h3", {
						className: c.a.title
					}, t || n.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), o.a.createElement(a.n, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, n.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				}
		},
		"./src/reddit/pages/ProfileBlockInterstitial/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1tjWF-96KbJjdBGufYe6Lu",
				accent: "_1IHNP4dWxy7U5QgxQxi5If",
				title: "KY1h4po8s5PdqDHk-wjpB",
				subtitle: "_2hJJe3AbHRX6HhK43NwbWS",
				avatarContainer: "CE8h3MaaAIApJVVopVtob",
				avatar: "_3irN5APGI7MZ0SaDRl6MqN",
				avatarBlockIcon: "_9vWkG7-BD-CXaW0ZmaAYA",
				avatarIconContainer: "_26b11ZsQwO7zJjCuPAI89x",
				btnContainer: "_3uDT2KC9eHKU_3y6ZKXSZ-",
				btn: "_1yQHj4iPQKoswy8UZ3MADy"
			}
		},
		"./src/reddit/pages/ProfileBlockInterstitial/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-router/esm/react-router.js"),
				a = s("./src/reddit/selectors/telemetry.ts"),
				i = s("./src/telemetry/models/Event.ts");
			var c = s("./src/reddit/hooks/useTracking.ts"),
				d = s("./src/reddit/icons/fonts/index.tsx");
			var l = e => r.a.createElement("svg", {
					className: e.className,
					width: "1821",
					height: "283",
					viewBox: "0 0 1821 283",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", {
					clipPath: "url(#clip0_2660_632712)"
				}, r.a.createElement("path", {
					d: "M3025.95 118.337C3266.52 166.378 3558.75 170.416 3737.36 10.3669C3915.98 -149.683 3977.84 -352.145 3977.84 -352.145L-1003.56 -3153.19L-2982.2 -644.204C-2793.39 -416.675 -2314.26 -0.0620003 -1908.19 -153.832C-1400.6 -346.044 -1285.84 -181.163 -1113.53 -60.7893C-941.226 59.5848 -682.031 74.0078 -382.757 -66.3239C-83.4834 -206.656 520.033 475.612 1135.3 216.276C1557.45 38.3353 1689.92 -190.512 1953.87 -188.296C2217.81 -186.081 2725.23 58.2852 3025.95 118.337Z",
					fill: "#FF9999"
				}), r.a.createElement("path", {
					opacity: "0.7",
					d: "M3242.16 164.238C3492.92 218.39 3737.98 115.535 3829.16 57.338C3920.35 -0.858859 4078.81 -186.192 4078.81 -186.192L-1031.4 -3253.8L-3007.16 -743.085C-2804.71 -507.363 -2295.74 -72.8347 -1879.48 -220.494C-1359.17 -405.068 -1235.32 -234.732 -1053.16 -108.442C-871 17.8472 -601.951 38.186 -295.98 -98.1257C9.99124 -234.437 655.794 473.214 1285.7 222.665C1717.9 50.7538 1848.36 -179.298 2121.97 -171.282C2395.57 -163.266 2928.73 96.5485 3242.16 164.238Z",
					fill: "#FB133A"
				})), r.a.createElement("defs", null, r.a.createElement("clipPath", {
					id: "clip0_2660_632712"
				}, r.a.createElement("rect", {
					width: "1821",
					height: "283",
					fill: "white"
				})))),
				m = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/pages/ProfileBlockInterstitial/index.m.less"),
				p = s.n(u);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(o.i)(e => {
				let {
					username: t,
					uid: s,
					avatar: o,
					history: u,
					location: h
				} = e;
				const f = Object(c.a)();
				return Object(n.useEffect)(() => {
					f((e => t => ({
						source: i.f.BlockedProfileInterstitial,
						action: i.d.View,
						noun: i.e.BlockedProfileInterstitial,
						blockedUser: {
							id: e
						},
						...a.n(t)
					}))(s))
				}, [f, s]), r.a.createElement("div", {
					className: p.a.container
				}, r.a.createElement(l, {
					className: p.a.accent
				}), r.a.createElement("div", {
					className: p.a.avatarContainer
				}, r.a.createElement("img", {
					className: p.a.avatar,
					src: null != o ? o : "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png",
					alt: b._("Blocked user avatar", null, {
						hk: "V2K4Y"
					})
				}), r.a.createElement("div", {
					className: p.a.avatarIconContainer
				}, r.a.createElement(d.a, {
					name: "kick_fill",
					className: p.a.avatarBlockIcon,
					isFilled: !0
				}))), r.a.createElement("h3", {
					className: p.a.title
				}, b._("u/{name} is blocked", [b._param("name", t)], {
					hk: "18rExM"
				})), r.a.createElement("p", {
					className: p.a.subtitle
				}, b._("Are you sure you want to continue to their profile?", null, {
					hk: "1UmYAf"
				})), r.a.createElement("div", {
					className: p.a.btnContainer
				}, r.a.createElement(m.t, {
					className: p.a.btn,
					to: `${h.pathname}?consent=true`,
					kind: m.b.InternalLink,
					priority: m.c.Primary,
					size: m.d.L,
					onClick: () => f((e => t => ({
						source: i.f.BlockedProfileInterstitial,
						action: i.d.Accept,
						noun: i.e.BlockedProfileInterstitial,
						blockedUser: {
							id: e
						},
						...a.n(t)
					}))(s)),
					isFullWidth: !0,
					isSquare: !0
				}, b._("Continue", null, {
					hk: "3eqDZf"
				})), r.a.createElement(m.t, {
					className: p.a.btn,
					to: "#",
					kind: m.b.InternalLink,
					priority: m.c.Secondary,
					size: m.d.L,
					onClick: () => {
						f((e => t => ({
							source: i.f.BlockedProfileInterstitial,
							action: i.d.Deny,
							noun: i.e.BlockedProfileInterstitial,
							blockedUser: {
								id: e
							},
							...a.n(t)
						}))(s)), u.goBack()
					},
					isFullWidth: !0,
					isSquare: !0
				}, b._("Go Back", null, {
					hk: "2uq6mz"
				}))))
			})
		},
		"./src/reddit/pages/ProfileOverview/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/lodash/fromPairs.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/isFakeSubreddit/index.ts"),
				m = s("./src/reddit/helpers/localStorage/index.ts"),
				u = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/promo/withShowSignupUpsell.tsx"),
				f = s("./src/reddit/actions/nsfwBlocking/async.tsx"),
				x = s("./src/reddit/actions/pages/profileOverview/index.ts"),
				v = s("./src/reddit/actions/pages/profileShared.ts"),
				g = s("./src/reddit/actions/profileConversations.ts"),
				C = s("./src/reddit/components/ContentGate/index.tsx"),
				y = s("./src/reddit/components/CreatorStats/EducationUnit.tsx"),
				O = s("./src/reddit/components/EmptyProfile/index.ts"),
				w = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				_ = s("./src/reddit/components/JumpToContent/index.tsx"),
				P = s("./src/reddit/components/PostList/index.tsx"),
				k = s("./src/reddit/components/TrackingHelper/index.tsx"),
				S = s("./src/lib/classNames/index.ts"),
				E = s("./src/lib/isPinnedAdminPost/index.ts"),
				j = s("./src/lib/lessComponent.tsx"),
				N = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				I = s("./node_modules/lodash/last.js"),
				L = s.n(I);
			var T = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				B = s("./src/reddit/selectors/posts.ts"),
				F = s("./src/reddit/components/ClassicPost/index.tsx"),
				M = s("./src/reddit/components/LargePost/index.tsx"),
				D = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				R = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				A = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				W = s("./src/reddit/selectors/profile.ts"),
				U = s("./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less"),
				H = s.n(U);
			const {
				fbt: z
			} = s("./node_modules/fbt/lib/FbtPublic.js"), q = j.a.div("ExtraCommentsItemWrapper", H.a), V = j.a.p("ExtraComments", H.a), G = j.a.wrapped(V, "ExtraCommentsInteractive", H.a);
			var K = Object(i.b)(() => Object(c.c)({
					extraCommentsItem: W.c,
					extraCommentsPending: (e, t) => {
						const {
							extraCommentsId: s
						} = t, {
							extraComments: n
						} = e.pages.profileOverview.conversations;
						return !!n.api.pending[s]
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
						extraCommentsPending: n
					} = e;
					return a.a.createElement(q, null, n ? a.a.createElement(V, null, z._("Loading...", null, {
						hk: "47z90C"
					})) : a.a.createElement(A.a.Consumer, null, e => a.a.createElement(G, {
						onClick: e => {
							t(s), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, z._("Load more comments", null, {
						hk: "1jXJxb"
					}))))
				}),
				Z = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				Y = s("./src/reddit/contexts/Post/index.tsx"),
				J = s("./src/reddit/hooks/useTheme.ts"),
				Q = s("./src/reddit/constants/postLayout.ts"),
				X = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				$ = s.n(X),
				ee = s("./src/reddit/components/OverviewConversationsPost/index.m.less"),
				te = s.n(ee);

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ne = j.a.div("BackgroundWrapper", te.a),
				re = j.a.wrapped(F.default, "ClassicPost", te.a),
				oe = j.a.wrapped(D.a, "OverviewCommentPost", te.a),
				ae = Object(i.b)(() => Object(c.c)({
					commentThreadLinkSets: (e, t) => {
						let {
							postId: s,
							currentProfileName: n
						} = t;
						const r = n ? n.toLowerCase() : "",
							o = Object(N.a)(s, r);
						return e.pages.profileOverview.conversations.keyToCommentThreadLinkSets[o]
					},
					headComment: (e, t) => {
						let {
							postId: s,
							currentProfileName: n
						} = t;
						const r = n ? n.toLowerCase() : "",
							o = Object(N.a)(s, r);
						return e.pages.profileOverview.conversations.keyToHeadCommentId[o]
					},
					isInitiallyPinned: (e, t) => {
						let {
							postId: s,
							currentProfileName: n
						} = t;
						return !!n && Object(B.p)(e, s, n)
					},
					isPinned: (e, t) => {
						let {
							postId: s,
							currentProfileName: n
						} = t;
						return !!n && Object(B.r)(e, s, n)
					},
					profileName: (e, t) => {
						let {
							currentProfileName: s
						} = t;
						if (s) return ((e, t) => {
							const {
								users: s
							} = e, n = t.toLowerCase(), r = s.models[n];
							return r ? r.username : void 0
						})(e, s)
					},
					layout: p.S
				})),
				ie = j.a.wrapped(M.default, "OverviewLargePost", te.a),
				ce = ae(e => {
					const {
						availableWidth: t,
						className: s,
						commentThreadLinkSets: n,
						eventFactory: r,
						forceLoadMedia: o,
						headComment: i,
						isInitiallyPinned: c,
						isPinned: d,
						isProfileCreatorStatsEnabled: l,
						isScrolling: m,
						last: u,
						layout: p,
						onClickPost: b,
						onSizeChanged: h,
						pageLayer: f,
						post: x,
						postId: v,
						profileName: g,
						scrollerItemRef: C,
						userIsOp: y
					} = e, O = {
						last: u,
						onClickPost: b,
						postId: v
					};
					if (!g) return null;
					const w = g === x.author,
						_ = Object(E.a)(d, x.distinguishType);
					if (!w && !i && !_) return null;
					const P = i ? function(e) {
							const t = [],
								s = e.length;
							for (let n = 0; n < s; n++) {
								(0 === n || e[n - 1].depth !== e[n].depth - 1) && t.push([]), L()(t).push(e[n])
							}
							return t
						}(function(e, t) {
							const s = [];
							let n = t,
								r = "comment";
							for (; n;) {
								const t = e[n];
								s.push({
									id: n,
									depth: t.depth,
									type: r
								}), t.next ? (n = t.next.id, r = t.next.type) : n = void 0
							}
							return s
						}(n, i)) : [],
						k = P.length - 1,
						j = y && l;
					return a.a.createElement("div", {
						className: Object(S.a)($.a.largeAndMediumActiveStyles, $.a.largeAndMediumPostStyles, te.a.OverviewConversationsPost, s),
						style: {
							...Object(T.b)(),
							...Object(T.d)(e)
						}
					}, a.a.createElement(R.a, {
						className: j ? te.a.shouldShowOverflow : void 0,
						isFirst: !0,
						isLast: k < 0,
						key: x.id
					}, !w && !!i && a.a.createElement(oe, se({}, O, {
						commentId: i,
						key: x.id,
						profileName: g
					})), (w || _) && (p === Q.g.Classic ? a.a.createElement(re, {
						availableWidth: t,
						eventFactory: r,
						inSubredditOrProfile: !1,
						isOverlay: !1,
						isScrolling: m,
						forceLoadMedia: o,
						last: u,
						onClickPost: b,
						onSizeChanged: h,
						pageLayer: f,
						postId: v,
						scrollerItemRef: C
					}) : a.a.createElement(ie, {
						availableWidth: t,
						eventFactory: r,
						isScrolling: m,
						isFrontpage: !1,
						forceLoadMedia: o,
						last: u,
						onClickPost: b,
						onSizeChanged: h,
						pageLayer: f,
						postId: v,
						scrollerItemRef: C,
						shouldShowInsightsButton: j
					}))), a.a.createElement(ne, {
						style: {
							background: Object(T.e)(e)
						}
					}, !c && P.map((e, t) => a.a.createElement(R.a, {
						isLast: t === k,
						key: `${t}-isLast[${t===k}]`
					}, e.map((t, s) => {
						const n = 0 === s,
							r = s === e.length - 1;
						return "comment" === t.type ? a.a.createElement(Z.a, {
							commentId: t.id,
							depth: t.depth,
							isFirst: n,
							isLast: r,
							key: t.id,
							profileName: g,
							showModTools: !0
						}) : a.a.createElement(K, {
							extraCommentsId: t.id,
							key: t.id,
							profileName: g
						})
					})))))
				});
			var de = Object(Y.b)((function(e) {
					var t;
					const s = Object(J.a)(),
						n = Object(p.fb)();
					return a.a.createElement(ce, se({
						theme: null !== (t = e.theme) && void 0 !== t ? t : s,
						currentProfileName: Object(p.i)(n),
						pageLayer: n
					}, e))
				})),
				le = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				me = s("./src/reddit/helpers/trackers/post.ts"),
				ue = s("./src/reddit/selectors/tracking.ts"),
				pe = s("./src/reddit/connectors/PostList/index.ts");
			const be = Object(c.c)({
					...pe.d,
					postIds: B.O,
					viewportDataLoaded: ue.a
				}),
				he = Object(pe.c)(),
				fe = Object(i.b)(be, pe.b, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(me.k)(e, t),
					postComponentForLayout: e => {
						let {
							post: t
						} = e;
						return t.isBlank ? le.a : de
					}
				}));
			var xe = (e => Object(k.c)(he(fe(e))))(P.a),
				ve = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				ge = s("./node_modules/lodash/debounce.js"),
				Ce = s.n(ge),
				ye = s("./src/reddit/actions/post.ts"),
				Oe = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				we = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				_e = s("./src/reddit/components/Media/index.tsx"),
				Pe = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				ke = s("./src/reddit/components/PostContainer/index.tsx"),
				Se = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				Ee = s("./src/reddit/components/PostTitle/index.tsx"),
				je = s("./src/reddit/connectors/miniCardPost.ts"),
				Ne = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Ie = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Le = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Te = s("./src/reddit/models/Media/index.ts"),
				Be = s("./src/reddit/models/Post/index.ts"),
				Fe = s("./node_modules/fbt/lib/FbtPublic.js"),
				Me = s("./src/reddit/components/CommentsLink/index.tsx"),
				De = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				Re = s("./src/reddit/components/Flatlist/index.tsx"),
				Ae = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				We = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				Ue = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				He = s("./src/reddit/components/ShareMenu/index.tsx"),
				ze = s("./src/reddit/icons/fonts/Share/index.tsx"),
				qe = s("./src/reddit/models/User/index.ts"),
				Ve = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				Ge = s.n(Ve);
			const Ke = "-MiniCardModMenu",
				Ze = "-MiniCardOverflowMenu",
				Ye = "-MiniCardShareMenu",
				Je = j.a.wrapped(De.a, "HorizontalVotes", Ge.a),
				Qe = j.a.button("ShareButton", Ge.a),
				Xe = Object(p.u)({
					currentProfileName: p.i,
					isCommentPermalink: p.w,
					isCommentsPage: p.x,
					isProfilePostListing: p.L,
					pageLayer: e => e
				}),
				$e = Object(c.c)({
					layout: p.S,
					subreddit: p.r
				});
			var et = Xe(Object(i.b)($e, {})(Object(k.c)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: n,
						handleVote: r,
						hasModFlairPerms: o,
						hasModFullPerms: i,
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: m,
						isProfilePostListing: u,
						isSticky: p,
						layout: b,
						modModeEnabled: h,
						onCommentsClick: f,
						post: x,
						sendEvent: v,
						showEditFlair: g,
						showEditPost: C,
						subreddit: y
					} = e, O = e => v(Object(me.k)(x.id, e)), w = x.postId, _ = Object(Re.d)(Ke, x.id, m, p), P = !!n && Object(qe.e)(n) === x.author;
					return a.a.createElement("div", {
						className: Object(S.a)(Ge.a.flatlistContainer, s)
					}, a.a.createElement(Je, {
						compact: !1,
						model: x,
						onVoteClick: r,
						scoreClassName: Ge.a.score
					}), a.a.createElement(Me.a, {
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: m,
						postId: x.id,
						modModeEnabled: h,
						numComments: x.numComments,
						type: Q.g.Compact,
						onClick: f
					}), a.a.createElement(He.a, {
						className: Ge.a.shareMenu,
						dropdownId: Object(Re.d)(Ye, x.id, m, p),
						permalink: x.permalink,
						post: x,
						sendEventWithName: O,
						subredditType: null == y ? void 0 : y.type
					}, a.a.createElement(Qe, null, a.a.createElement(ze.a, {
						className: Ge.a.shareIcon
					}), a.a.createElement("span", {
						className: Ge.a.shareText
					}, Fe.fbt._("share", null, {
						hk: "mmJV5"
					})))), c && a.a.createElement(Ae.a, {
						dropdownId: _,
						onClick: () => O("post_mod_action_menu")
					}, a.a.createElement(Re.b, {
						className: Ge.a.modActionsIcon
					}), a.a.createElement(We.a, {
						canEditFlair: o && !!g,
						hasModPostPerms: c,
						hasModFullPerms: i,
						isOverlay: !!m,
						isPostAuthor: P,
						modModeEnabled: h,
						post: x,
						tooltipId: _
					})), a.a.createElement(Ue.a, {
						currentProfileName: t,
						isCommentsPage: d,
						isOverlay: !!m,
						isProfilePostListing: u,
						layout: b,
						pageLayer: e.pageLayer,
						permalink: x.permalink,
						postId: w,
						dropdownId: Object(Re.d)(Ze, x.id, m, p),
						isFixed: p,
						sendEvent: v,
						showEditPost: !!C,
						showEditFlair: !!g,
						useFlatlistBreakpoints: Object(Ue.b)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1
						})
					}))
				}))),
				tt = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				st = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				nt = s("./src/reddit/components/MiniCardPost/index.m.less"),
				rt = s.n(nt);
			var ot = Object(p.u)()(Object(Y.b)(Object(je.a)(Object(Oe.a)(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: n,
						crosspostRoot: r,
						crosspostSubredditOrProfile: o,
						currentUser: i,
						eventFactory: c,
						flairStyleTemplate: d,
						forceLoadMedia: l,
						hideNSFWPref: m,
						moderatorPermissions: u,
						modModeEnabled: p,
						onClickPost: b,
						post: h,
						scrollerItemRef: f,
						shouldPause: x,
						showMetaLine: v = !0,
						showEditFlair: g,
						subredditOrProfile: C,
						userIsOp: y
					} = e, {
						media: O
					} = r || h, w = O && O.type, _ = Object(Se.b)(h.id), P = w === Te.o.RTJSON, k = y && P, E = Object(Le.a)(u), j = Object(Ne.a)(u), N = Object(Ie.a)(u), I = O && w !== Te.o.RTJSON && w !== Te.o.TEXT, L = w === Te.o.VIDEO || w === Te.o.GIFVIDEO || w === Te.o.LIVEVIDEO, B = Object(Be.p)(h), F = O && a.a.createElement(_e.a, {
						autoplayPref: t,
						availableWidth: s,
						className: rt.a.media,
						imageBoxClassName: Object(S.a)(rt.a.mediaImageBox, {
							[rt.a.videoStyles]: L
						}),
						imageBoxContentImageClassName: rt.a.mediaImageBoxContentImage,
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
					return a.a.createElement(ke.a, {
						className: Object(S.a)(rt.a.postContainer, $.a.largeAndMediumActiveStyles, $.a.largeAndMediumPostStyles, Object(T.a)(e), n),
						style: {
							...Object(T.b)(e.flairStyleTemplate),
							...Object(T.d)(e)
						},
						post: h,
						onClick: b,
						eventFactory: c
					}, a.a.createElement(Pe.a, {
						className: rt.a.backgroundWrapper,
						flairStyleTemplate: d
					}, I && F, a.a.createElement("div", {
						className: rt.a.innerContainer
					}, B && a.a.createElement(st.a, {
						post: h,
						templatePlaceholderImage: d ? d.postPlaceholderImage : void 0
					}), a.a.createElement(Ee.c, {
						className: rt.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: h,
						size: Ee.b.Large,
						titleColor: d && d.postTitleColor
					}), v && C && a.a.createElement(tt.a, {
						className: rt.a.metaLine,
						crosspostSubredditOrProfile: o,
						hideNSFWPref: m,
						post: h,
						subredditOrProfile: C
					}), !I && a.a.createElement("div", {
						className: rt.a.mediaWrapper
					}, F), a.a.createElement("div", {
						className: rt.a.flexSpacer
					}), a.a.createElement(et, {
						currentUser: i,
						handleVote: e.handleVote,
						hasModFlairPerms: j,
						hasModFullPerms: N,
						hasModPostPerms: E,
						modModeEnabled: p,
						post: h,
						showEditFlair: g,
						showEditPost: k
					}))), e.activeModalId === _ && a.a.createElement(Se.a, {
						flairs: h.flair,
						subredditId: h.belongsTo.id,
						modalId: _,
						onFlairChanged: e.onFlairChanged
					}), a.a.createElement(we.d, null))
				})))),
				at = s("./src/reddit/helpers/getClickInfo.ts"),
				it = s("./src/reddit/selectors/user.ts"),
				ct = s("./src/reddit/icons/fonts/index.tsx"),
				dt = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less"),
				lt = s.n(dt);
			const {
				fbt: mt
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var ut = e => a.a.createElement("div", {
					className: Object(S.a)(lt.a.container, e.className)
				}, a.a.createElement(ct.a, {
					name: "pin",
					className: lt.a.pin
				}), a.a.createElement("div", {
					className: lt.a.title
				}, mt._("Show off that karma!", null, {
					hk: "2yqUT7"
				})), e.children),
				pt = s("./src/reddit/controls/TextButton/index.tsx"),
				bt = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less"),
				ht = s.n(bt);
			const {
				fbt: ft
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var xt = e => a.a.createElement(ut, {
					className: Object(S.a)(ht.a.container, e.className)
				}, a.a.createElement("div", {
					className: ht.a.description
				}, ft._('Pin a post from your feed using the "..." at the bottom of each post', null, {
					hk: "4lkJRB"
				})), a.a.createElement(pt.a, {
					className: ht.a.gotIt,
					onClick: e.onGotItClick
				}, ft._("OK, I got it", null, {
					hk: "1JMx7x"
				}))),
				vt = s("./src/reddit/components/ProfilePinnedPosts/index.m.less"),
				gt = s.n(vt);
			const {
				fbt: Ct
			} = s("./node_modules/fbt/lib/FbtPublic.js"), yt = 320, Ot = 300, wt = Object(c.c)({
				arePinnedPostsLoaded: B.a,
				currentUser: it.k,
				pinnedPostIds: B.P
			}), _t = Object(i.b)(wt, e => ({
				openPost: t => e(Object(ye.L)(t))
			}));
			class Pt extends a.a.Component {
				constructor() {
					super(...arguments), this.containerRef = null, this.state = {
						showEducation: !1,
						pauseMedia: !1
					}, this.setContainerRef = e => this.containerRef = e, this.handleScroll = Ce()(() => {
						if (!this.containerRef) return;
						const e = this.containerRef.getBoundingClientRect();
						e.bottom < Ot ? this.pauseMedia() : e.top > 0 && this.playMedia()
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
							clickInfo: Object(at.a)(e)
						})
					}, this.renderPost = e => a.a.createElement(ot, {
						postId: e,
						key: e,
						availableWidth: yt,
						className: Object(S.a)(gt.a.item, gt.a.miniCardPost),
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
					const n = !!this.props.currentUser && this.props.profileName === Object(qe.e)(this.props.currentUser),
						r = t.length > 0,
						o = !r && this.state.showEducation && n;
					if (!r && !o) return null;
					const i = n && this.props.pinnedPostIds.length % 2 != 0;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: gt.a.title
					}, Ct._("Pinned posts", null, {
						hk: "3prRc3"
					})), o ? a.a.createElement(xt, {
						className: Object(S.a)(gt.a.item, gt.a.education),
						onGotItClick: this.onGotItClick
					}) : a.a.createElement("div", {
						ref: this.setContainerRef,
						className: gt.a.container
					}, t.map(this.renderPost), i && a.a.createElement(ut, {
						className: gt.a.item
					})), s)
				}
			}
			var kt = Object(p.u)()(_t(Pt)),
				St = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				Et = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				jt = s("./src/reddit/helpers/name/index.ts"),
				Nt = s("./src/reddit/helpers/trackers/screenview.ts"),
				It = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				Lt = s("./src/reddit/layout/page/Listing/index.tsx"),
				Tt = s("./src/reddit/models/ContentGate.ts"),
				Bt = s("./src/reddit/pages/ErrorPages/index.tsx"),
				Ft = s("./src/reddit/pages/ProfileBlockInterstitial/index.tsx"),
				Mt = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				Dt = s("./src/reddit/selectors/experiments/creatorStats.ts"),
				Rt = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");

			function At() {
				return (At = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Wt = (e, t) => {
					let {
						location: s
					} = t;
					return r()([...Object(d.a)(s.search)])
				},
				Ut = Object(p.u)(),
				Ht = Object(c.c)({
					isProfileCreatorStatsEnabled: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(p.E)(e, {
							pageLayer: s
						}) && Object(Dt.b)(e)
					},
					isOwnProfile: p.E,
					over18Prefs: it.kb,
					layout: p.S
				}),
				zt = Object(c.a)(Ht, Wt, (e, t) => {
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
					return !Object(B.n)(e, {
						profileName: s.params.profileName
					})
				}, it.Q, (e, t) => {
					let {
						match: s
					} = t;
					return Object(it.f)(e, b.kc + s.params.profileName)
				}, (e, t) => {
					let {
						match: s
					} = t;
					return {
						isProfileBlockInterstitialEnabled: Object(Mt.c)(e),
						isBlocked: Object(it.L)(e, {
							profileName: s.params.profileName
						})
					}
				}, Rt.f, (e, t, s, n, r, o, a, i, c, d) => {
					let {
						sort: l,
						t: m
					} = r, {
						isProfileBlockInterstitialEnabled: p,
						isBlocked: h
					} = c;
					var f, x;
					const v = b.ub,
						g = Object(u.a)(s, v, l, t),
						{
							sort: C
						} = t;
					return {
						contentGateInfo: i,
						isLoggedIn: a,
						isProfileNSFW: !!n && n.isNSFW,
						listingKey: g,
						profileName: s,
						shouldShowPinnedPostsSection: o && !C,
						sort: l,
						timeSort: m,
						avatar: null === (f = null == n ? void 0 : n.icon) || void 0 === f ? void 0 : f.url,
						isProfileBlockInterstitialEnabled: p,
						isBlocked: h,
						profileId: null !== (x = null == n ? void 0 : n.id) && void 0 !== x ? x : "",
						...e,
						nsfwBlockingExperiment: d
					}
				}),
				qt = Object(i.b)(zt, (e, t) => ({
					onLoadMoreConversationsItems: () => e(g.h({
						profileName: t.match.params.profileName,
						sort: t.match.params.sort
					})),
					onLayoutChange: () => e(Object(x.profileOverviewRequested)({
						...t.match,
						queryParams: r()([...Object(d.a)(t.location.search)])
					})),
					openNsfwModal: () => e(Object(f.a)())
				}));
			class Vt extends a.a.Component {
				constructor(e) {
					super(e), this.onStorage = () => {
						this.setState({
							showPostStatsUnit: Object(m.J)() <= 2
						})
					}, this.renderNoPosts = () => a.a.createElement(O.c, {
						profileName: this.props.profileName,
						timeSort: this.props.timeSort
					}), this.getInjectChildren = () => {
						const e = {};
						return this.state.showPostStatsUnit && this.props.isOwnProfile && this.props.isProfileCreatorStatsEnabled && (e[0] = {
							estHeight: 76,
							id: "post-stats-info-overview",
							render: () => a.a.createElement(y.a, null)
						}), e
					}, this.state = {
						showPostStatsUnit: !1
					}
				}
				componentDidMount() {
					window.addEventListener("storage", this.onStorage), this.setState({
						showPostStatsUnit: Object(m.J)() <= 2
					}), this.props.isProfileNSFW && !this.props.isOwnProfile && this.props.nsfwBlockingExperiment === Rt.a.Blurred && this.props.openNsfwModal()
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
						isOwnProfile: n,
						isProfileBlockInterstitialEnabled: r,
						isProfileNSFW: o,
						listingKey: i,
						nsfwBlockingExperiment: c,
						onLayoutChange: d,
						over18Prefs: m,
						pageLayer: u,
						profileId: p,
						profileName: h,
						shouldShowPinnedPostsSection: f,
						showSignupUpsell: x,
						sort: v,
						timeSort: g
					} = this.props;
					if (!u) return null;
					if (t && t.profileDeleted) return a.a.createElement(C.default, {
						contentGateType: Tt.a.ProfileDeleted,
						profileName: h
					});
					if (t && t.profileSuspended) return a.a.createElement(C.default, {
						contentGateType: Tt.a.ProfileSuspended,
						profileName: h
					});
					if (451 === u.status || t && t.profileBlockedForLegalReason) return a.a.createElement(C.default, {
						contentGateType: Tt.a.ProfileBlockedForLegalReason,
						profileName: h
					});
					const y = u.queryParams && "true" === u.queryParams.consent;
					if (403 === u.status || s && !y) return r ? a.a.createElement(Ft.a, {
						username: h,
						avatar: e,
						uid: p
					}) : a.a.createElement(Bt.a, null);
					if (404 === u.status) return a.a.createElement(C.default, {
						contentGateType: Tt.a.ProfileDoesNotExist,
						profileName: h
					});
					if (!h) return null;
					const O = h.toLowerCase(),
						P = `/user/${h}/`,
						k = {
							listingKey: i,
							listingName: O
						};
					if (o && !n && c === Rt.a.NoPreview) return a.a.createElement(Et.a, {
						contentTitle: Object(jt.d)(h)
					});
					if (!m && o && !n && c !== Rt.a.Blurred) return a.a.createElement(C.default, {
						subredditName: h,
						contentGateType: Tt.a.Nsfw
					});
					const S = {
							inSubredditOrProfile: !Object(l.a)(h),
							listingKey: i,
							listingName: O,
							listingViewed: (e, t) => Object(Nt.q)(i, v, t, e, g),
							noPostsComponent: this.renderNoPosts,
							onScroll: x,
							onTryAgain: d
						},
						E = {
							sort: v,
							baseUrl: P,
							sortOptions: b.Ab,
							timeSort: g
						},
						j = a.a.createElement(a.a.Fragment, null, f && a.a.createElement(kt, {
							profileName: h
						}), a.a.createElement(w.a, E), a.a.createElement(xe, At({}, S, {
							getInjectChildren: this.state.showPostStatsUnit && this.props.isOwnProfile && this.props.isProfileCreatorStatsEnabled ? this.getInjectChildren : void 0,
							excludePinnedPosts: f,
							onLoadMore: this.props.onLoadMoreConversationsItems,
							isProfileCreatorStatsEnabled: this.props.isProfileCreatorStatsEnabled && this.props.isOwnProfile
						})));
					return a.a.createElement(Lt.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(ve.a, {
							profileName: h,
							viewBlockedConsent: y
						})),
						content: a.a.createElement(a.a.Fragment, null, a.a.createElement(_.a, null), j),
						sidebar: a.a.createElement(St.a, At({}, k, {
							profileName: h
						}))
					})
				}
			}
			t.default = Ut(qt(Object(h.a)(Object(It.d)(Vt))))
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				const t = Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: n.Tc
				});
				return !(!t || Object(n.Uf)(t))
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
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				a = s("./src/reddit/selectors/meta.ts"),
				i = s("./src/reddit/selectors/experiments/index.ts");
			const c = Object(n.a)(a.g, a.d, i.e, (e, t, s) => !e && !t && !s);

			function d(e, t) {
				return s => Object(o.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: c,
					throttledVariants: {
						[r.vc.Bottom_cell_dismissible]: e,
						[r.vc.Bottom_cell_dismissible_immediate_trigger]: e,
						[r.vc.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = d(r.Cb, !0),
				m = d(r.Db, !0),
				u = d(r.Eb, !0),
				p = d(r.Cb, !1),
				b = d(r.Db, !1),
				h = d(r.Eb, !1)
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return c
			})), s.d(t, "h", (function() {
				return d
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
				return g
			})), s.d(t, "g", (function() {
				return C
			})), s.d(t, "d", (function() {
				return y
			}));
			var n = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/featureFlags/index.ts"),
				o = s("./src/reddit/selectors/posts.ts"),
				a = s("./src/reddit/selectors/subreddit.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(a.U)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				d = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				m = [],
				u = Object(n.a)((e, t) => {
					const s = p(e, t);
					if (!s) return m;
					const n = Object(a.Y)(e, {
						subredditName: s.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : m
				}),
				p = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(a.U)(e, {
						subredditId: s
					}) : null
				},
				b = (e, t, s, n, r) => {
					const a = r.find(e => e <= t) || -1,
						i = r.find(e => e > t) || 1 / 0;
					return t !== i && t !== a && (!(a + s > t) && (!(t + s > i) && !((e, t, s) => {
						const n = s[t - 1],
							r = s[t],
							a = r && Object(o.G)(e, {
								postId: n
							}) || null,
							i = r && Object(o.G)(e, {
								postId: r
							}) || null;
						return a && a.isSponsored || i && i.isSponsored
					})(e, t, n)))
				},
				h = [3],
				f = Object(n.a)((e, t) => {
					let {
						existingDUPositions: s,
						listingProps: n
					} = t;
					const r = s.slice().sort();
					let a = -1;
					const i = Object(o.z)(e, {
							listingKey: n.listingKey
						}),
						c = [];
					return h.forEach(t => {
						let s = a + t;
						if (!(s >= i.length)) {
							for (; s < i.length && !b(e, s, t, i, r);) s += 1;
							s < i.length && (c.push(s), a = s)
						}
					}), c
				}),
				x = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				v = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				g = e => e.focusedVerticals.category,
				C = e => e.focusedVerticals.lastLoadedEnv,
				y = e => {
					const t = Object(i.P)(e),
						s = r.d.geoSubredditRecommendationDULoggedIn(e),
						n = r.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && n
				}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/selectors/chatPost.ts"),
				a = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const i = e => {
					const t = Object(a.a)(e);
					return Boolean(t) && !Object(r.Uf)(t)
				},
				c = Object(n.a)(i, o.d, (e, t) => e && !t)
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"c10a566d5f55"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileOverview.9ff4875217bf24dac2be.js.map