// https://www.redditstatic.com/desktop2x/ProfileOverview.ddc93a1362a5941b0116.js
// Retrieved at 4/6/2022, 5:10:04 PM by Reddit Dataminer v1.0.0
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
					const e = Object(m.a)(d.ec.Bottom_cell),
						t = Object(m.a)(d.ec.Bottom_cell_dismissible),
						s = Object(m.a)(d.ec.Bottom_cell_dismissible_immediate_trigger),
						o = Object(m.a)(d.ec.Bottom_cell_signup_upsell_copy),
						n = Object(m.a)(d.ec.Bottom_cell_surprise_install_copy),
						r = Object(m.a)(d.ec.Bottom_sheet);
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
						} = Object(c.a)(), s = p(), r = Object(u.a)(s), l = Object(m.a)(d.ec.Bottom_cell_dismissible_immediate_trigger);
						return o.useMemo(() => i()(() => {
							if (!r && s) {
								const e = document.getElementById(a.d),
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
				return _e
			})), s.d(t, "profileOverviewConversationsRequested", (function() {
				return ke
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
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				P = s("./src/reddit/selectors/listings.ts"),
				O = s("./src/reddit/selectors/profile.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				C = s("./src/lib/makeActionCreator/index.ts"),
				g = s("./src/reddit/actions/changeUsername.ts"),
				j = s("./src/reddit/actions/contentGate.ts"),
				w = s("./src/reddit/actions/externalAccount.ts"),
				E = s("./src/reddit/actions/gold/powerups.ts"),
				S = s("./src/reddit/actions/pinnedPost.ts"),
				I = s("./src/reddit/actions/platform.ts"),
				N = s("./src/reddit/actions/profile/index.ts"),
				_ = s("./src/reddit/actions/trophyCase.ts"),
				k = s("./src/reddit/constants/errors.ts"),
				T = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				L = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				M = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				F = s("./src/lib/initializeClient/installReducer.ts"),
				B = s("./node_modules/redux/es/redux.js"),
				A = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const R = {};
			var U = function() {
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
			const W = {};
			var V = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W,
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
				K = Object(B.c)({
					error: U,
					pending: V
				});
			const D = {};
			var H = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D,
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
			const q = {};
			var z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q,
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
				G = s("./src/lib/omitKey/index.ts");
			const J = {};
			var X = function() {
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
							} : Object(G.a)(e, s)
						}
						default:
							return e
					}
				},
				Z = Object(B.c)({
					api: K,
					fetchedTokens: H,
					ids: z,
					loadMore: X
				});
			const Q = {};
			var Y = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
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
					case M.e:
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
			const ye = {};
			var Ce = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ye,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case M.e:
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
				ge = Object(B.c)({
					api: te,
					extraComments: le,
					keyToCommentThreadLinkSets: ve,
					keyToHeadCommentId: Oe,
					keyToPostId: Ce
				}),
				je = Object(B.c)({
					chrono: Z,
					conversations: ge
				});
			Object(F.a)({
				pages: {
					profileOverview: je
				}
			});
			const we = Object(C.a)(M.f),
				Ee = Object(C.a)(M.e),
				Se = Object(C.a)(M.d),
				Ie = Object(C.a)(M.c),
				Ne = Object(C.a)(M.b),
				_e = Object(C.a)(M.a),
				ke = (e, t, s, o) => async (o, n, i) => {
					const a = n(),
						d = !!a.listings.postOrder.ids[e],
						x = !!Object(P.c)(a, {
							listingKey: e
						});
					if (!!Object(P.d)(a, {
							listingKey: e
						}) || d && !x) return;
					o(we({
						key: e
					}));
					const f = await Object(L.a)("profile", () => ((e, t, s) => Object(m.a)(e, {
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
						pinned: y,
						postIds: C
					} = v;
					if (f.ok) {
						o(Ee({
							key: e,
							meta: a.meta,
							profileName: t,
							...v,
							postIds: C
						}));
						const s = Object(O.m)(n(), t);
						o(Object(S.h)({
							profileId: s,
							pinned: y
						}))
					} else o(Se({
						account: f.body.data ? f.body.data.account : null,
						error: f.body.reason ? {
							type: f.body.reason
						} : f.error,
						key: e
					})), f.body.reason === k.a.DeletedProfile && o(Object(j.s)({
						profileName: t
					})), o(Object(I.n)(f.status))
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
					const h = x.e[Object(v.R)(s(), {})],
						P = u.toLowerCase(),
						C = {
							...n()(e.queryParams, f.n),
							sort: m,
							layout: h,
							t: p
						},
						j = [t(N.d(P))],
						S = Object(T.a)(P, r.ub, m, e.queryParams);
					if (s().listings.postOrder.ids[S] && !s().listings.postOrder.api.error[S] ? b = !0 : j.push(t(ke(S, P, C, !0))), j.push(t(Object(i.b)())), await Promise.all(j), b) return;
					const k = s();
					if (!k.platform.currentPage) return;
					if (200 !== k.platform.currentPage.status) return;
					const L = Object(O.m)(s(), P),
						M = Object(y.yb)(k, {
							userName: u
						}).id;
					t(I.m({
						title: Le(s(), u)
					})), Object(y.R)(k) && Object(y.V)(k, u) && t(Object(g.f)());
					const F = [t(Object(d.q)()), t(_.b(P, L)), t(N.b(P)), t(w.o(u)), t(N.g(u)), t(E.l(u, M))];
					await Promise.all(F)
				}, Le = (e, t) => Object(O.q)(e, {
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
				P = s("./src/reddit/hooks/useTracking.ts"),
				O = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Post/index.ts"),
				C = s("./src/reddit/models/Vote/index.ts"),
				g = s("./src/reddit/selectors/activeModalId.ts"),
				j = s("./src/reddit/selectors/experiments/cnc/index.ts"),
				w = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				E = s("./src/reddit/selectors/moderatorPermissions.ts"),
				S = s("./src/reddit/selectors/posts.ts"),
				I = s("./src/reddit/selectors/user.ts"),
				N = s("./src/lib/ads/index.ts"),
				_ = s("./src/lib/classNames/index.ts"),
				k = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				T = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				L = s("./src/reddit/components/AwardBadges/index.tsx"),
				M = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				F = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				B = s("./src/reddit/components/CreatorStats/loader.tsx"),
				A = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				R = s("./src/reddit/components/Flatlist/index.tsx"),
				U = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				W = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				V = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				K = s("./src/reddit/components/ModModeReports/index.tsx"),
				D = s("./src/reddit/components/ModModeReports/helpers.ts"),
				H = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				q = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				z = s("./src/reddit/components/PostContainer/index.tsx"),
				G = s("./src/reddit/components/PostLeftRail/index.tsx"),
				J = s("./src/reddit/components/PostMedia/index.tsx"),
				X = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Z = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				Q = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				Y = s.n(Q);
			const {
				fbt: $
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var ee = () => n.a.createElement("div", {
					className: Y.a.container
				}, n.a.createElement(Z.a, {
					className: Y.a.pinnedIcon,
					isFilled: !0
				}), n.a.createElement("span", {
					className: Y.a.metaText
				}, $._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				te = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				se = s("./src/reddit/components/PostTitle/index.tsx"),
				oe = s("./src/reddit/components/PostTopLine/index.tsx"),
				ne = s("./src/reddit/components/SourceLink/index.tsx"),
				re = s("./src/reddit/constants/postLayout.ts"),
				ie = s("./src/reddit/contexts/InsideOverlay.tsx"),
				ae = s("./src/reddit/contexts/PageLayer/index.tsx"),
				de = s("./src/reddit/contexts/Post/index.tsx"),
				ce = s("./src/reddit/helpers/isCrosspost.ts"),
				le = s("./src/reddit/helpers/localStorage/index.ts"),
				me = s("./src/reddit/helpers/postEvent.ts"),
				pe = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				ue = s("./src/reddit/models/Audio/index.ts"),
				be = s("./src/reddit/constants/experiments.ts"),
				he = s("./src/reddit/helpers/chooseVariant/index.ts"),
				xe = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const fe = Object(a.a)(S.N, e => e.some(xe.c)),
				ve = Object(a.a)(fe, e => e),
				Pe = (e, t) => Object(he.c)(e, {
					experimentName: be.qc,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && ve(e, {
							listingKey: s
						})
					}
				});
			var Oe = s("./src/reddit/selectors/postFlair.ts"),
				ye = s("./src/reddit/selectors/showPromotedCTA.ts"),
				Ce = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ge = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				je = s.n(ge),
				we = s("./src/reddit/selectors/i18n/index.ts"),
				Ee = s("./src/reddit/components/LargePost/index.m.less"),
				Se = s.n(Ee);
			const Ie = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(S.N)(e, {
						listingKey: s
					}) : void 0
				},
				Ne = Object(r.b)(() => Object(a.c)({
					autoplayPref: I.b,
					activeModalId: g.a,
					hideNSFWPref: I.F,
					flairStyleTemplate: ae.V,
					isCurrentUserProfilePost: S.l,
					isLoggedIn: I.P,
					isActive: S.j,
					showPromotedCTA: ye.a,
					moderatorPermissions: E.l,
					modModeEnabled: ae.T,
					posts: Ie,
					postHeightVariant: Pe,
					shouldShowNsfwListingBelow: we.b,
					showEditFlair: Oe.a,
					showAwardsPlaque: w.a,
					isInModNotesExperiment: (e, t) => {
						let {
							subreddit: s
						} = t;
						return !!s && Object(j.a)(e, s.id)
					}
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const o = t === C.a.upvoted ? Object(p.kb)(s) : Object(p.w)(s);
							e(o)
						},
						onIgnoreReports: () => e(Object(p.gb)(s)),
						onOpenReportsDropdown: t => e(Object(u.h)({
							tooltipId: t
						}))
					}
				}),
				_e = n.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: r,
						currentUser: a,
						eventFactory: p,
						flairStyleTemplate: u,
						forceLoadMedia: C,
						hideNSFWPref: g,
						hostPostData: j,
						imageGalleryCurrentItem: w,
						inSubredditOrProfile: E = !1,
						isCommentsPage: S,
						isCurrentUserProfilePost: I,
						isFrontpage: Z,
						isGalleryTileLayoutDefault: Q,
						isInModNotesExperiment: Y,
						isLoggedIn: $,
						isOverlay: ie,
						isTopicPage: ae,
						isCommentCountAnimationEnabled: de,
						isVoteCountAnimationEnabled: he,
						isCountAnimShadowTestEnabled: xe,
						listingIndex: fe,
						listingKey: ve,
						moderatorPermissions: Pe,
						modModeEnabled: Oe,
						onClickPost: ye,
						onIgnoreReports: ge,
						onOpenReportsDropdown: we,
						post: Ee,
						postHeightVariant: Ie,
						scrollerItemRef: Ne,
						shouldShowGalleryTileOption: _e,
						shouldShowInsightsButton: ke,
						shouldShowNsfwListingBelow: Te,
						showAwardsPlaque: Le,
						showEditFlair: Me,
						showPromotedCTA: Fe,
						subredditOrProfile: Be,
						userIsOp: Ae,
						postId: Re,
						postIds: Ue,
						onceInViewport: We
					} = e, Ve = Object(P.a)(), Ke = !!e.redditStyle || !!e["data-redditstyle"], De = Ke ? void 0 : u, He = Object(l.a)(Pe), qe = Oe && He, ze = Object(d.a)(Pe), Ge = Object(c.a)(Pe), Je = Object(D.c)(Ee), Xe = Object(V.d)(Ee), Ze = !!Ee.media && Ee.media.type === O.o.RTJSON, Qe = Ae && Ze, Ye = s ? s - G.a : void 0, $e = !!Ee.recommendationContext, et = !(Z && $ || ae) || $e && $, tt = (e => e === be.Be.OnlyTitles)(Ie) && !Object(ce.a)(Ee), st = (e => e === be.Be.MediumHeight)(Ie) && !Object(ce.a)(Ee), ot = (e => {
						var t;
						const {
							post: s,
							postIds: o,
							posts: n
						} = e;
						if (!Object(y.r)(s) || (null === (t = s.pollData) || void 0 === t ? void 0 : t.isPrediction)) return;
						const r = o && 0 === o.indexOf(s.id),
							i = o && 1 === o.indexOf(s.id),
							a = n && n[1] && Object(y.r)(n[1]);
						return {
							hasTopCompactPostStyles: r && a,
							hasBottomCompactPostStyles: i,
							showPinnnedHeader: r
						}
					})(e), nt = !!(null == j ? void 0 : j.shouldShowLinkedPosts), rt = (!E || nt || Te) && !Ee.isSponsored, it = Object(N.t)(Ee, w), {
						source: at
					} = it, dt = Object(o.useRef)(null), ct = Object(o.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == We || We(fe))
						})
					}, [We, fe]);
					Object(v.a)(dt, ct);
					const [lt, mt] = Object(o.useState)(!1), pt = Object(o.useCallback)(() => {
						mt(!lt), Object(le.Mb)(), Ve(Object(pe.d)(Re))
					}, [lt, Ve, Re]);
					return n.a.createElement(f.b, null, n.a.createElement(z.a, {
						className: Object(_.a)(Se.a.container, r, je.a.largeAndMediumPostStyles, je.a.largeAndMediumActiveStyles, Object(m.a)(e), {
							[je.a.mUseRedditTheme]: Ke,
							promotedvideolink: Ee.isSponsored && !(Ee.media && O.a.has(Ee.media.type)),
							[Se.a.topCompactPost]: ot && ot.hasTopCompactPostStyles,
							[Se.a.bottomCompactPost]: ot && ot.hasBottomCompactPostStyles,
							[Se.a.shouldShowOverflow]: ke
						}),
						isOverlay: ie,
						style: Object(m.b)(e.flairStyleTemplate),
						post: Ee,
						onClick: ye,
						eventFactory: p
					}, n.a.createElement("div", {
						ref: dt
					}), n.a.createElement(te.a, {
						model: Ee,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: xe,
						isVoteCountAnimation: he,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: De,
						redditStyle: Ke,
						postId: Re
					}), n.a.createElement(q.a, {
						className: Object(_.a)(Se.a.backgroundWrapper, {
							[Se.a.isEvent]: Object(me.a)(Ee),
							[Se.a.shouldUseRoundedBorder]: ke
						}),
						"data-click-id": "background",
						flairStyleTemplate: De,
						post: Ee,
						redditStyle: Ke
					}, n.a.createElement(A.a, {
						post: Ee
					}), ot && ot.showPinnnedHeader && n.a.createElement(ee, null), Object(i.c)(Ee) && n.a.createElement(n.a.Fragment, null, n.a.createElement(x.a, {
						post: Ee
					}), n.a.createElement(h.a, {
						post: Ee
					})), !Object(i.c)(Ee) && n.a.createElement(n.a.Fragment, null, !!Ee.recommendationContext && n.a.createElement(H.a, {
						content: Ee.recommendationContext.content,
						layout: re.g.Large,
						post: Ee
					}), n.a.createElement(oe.a, {
						className: Se.a.postTopLine,
						hideAwards: Le,
						hideNSFWPref: g,
						hostPostData: j,
						iconClassName: Se.a.postTopLineIcon,
						inSubredditOrProfile: E,
						isCommentsPage: !!S,
						isCompactPinnedPost: !!ot,
						isCurrentUserProfilePost: I,
						isInModNotesExperiment: Y,
						isOverlay: !!ie,
						isTopicPage: !!ae,
						listingKey: ve,
						post: Ee,
						shouldShowSubscribeButton: et,
						showSubreddit: rt,
						showSubredditIcon: !0,
						subredditOrProfile: Be
					}), n.a.createElement(se.c, {
						className: Se.a.postTitle,
						post: Ee,
						redditStyle: Ke,
						size: se.b.Large,
						titleColor: De && De.postTitleColor,
						isOverlay: ie
					}), Ee.source && !Ee.isSponsored && !(Ee.media && Object(O.H)(Ee.media)) && n.a.createElement(ne.a, {
						className: Se.a.sourceLink,
						post: Ee
					})), n.a.createElement("div", {
						className: Se.a.postMediaWrapper
					}, !ot && n.a.createElement(J.a, {
						isGalleryTileLayoutDefault: Q,
						isListing: !0,
						isMediumHeight: st,
						isNotCardView: !!ie,
						isTitleOnly: tt,
						showCentered: !0,
						flairStyleTemplate: De,
						post: Ee,
						availableWidth: Ye,
						shouldLoad: C,
						scrollerItemRef: Ne,
						autoplayPref: t,
						shouldShowGalleryTileOption: _e,
						showPromotedCTA: Fe
					})), Fe && at && at.url && !Ee.isSurveyAd && n.a.createElement(k.a, {
						className: Se.a.adLinkWrapper
					}, n.a.createElement(T.a, {
						post: Ee,
						adLinkContent: it
					})), Oe && He && Xe && n.a.createElement("div", {
						className: Se.a.modModeBannerWrapper
					}, n.a.createElement(W.a, {
						thing: Ee
					})), Oe && He && Je && n.a.createElement("div", {
						className: Se.a.modModeBannerWrapper
					}, n.a.createElement(K.a, {
						onIgnoreReports: ge,
						reportable: Ee
					})), Object(ue.b)(Ee) && n.a.createElement(b.a, {
						post: Ee
					}), n.a.createElement(U.d, null), Le && n.a.createElement(L.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !1,
						thing: Ee,
						tooltipType: ie ? Ce.c.Lightbox : void 0
					}), n.a.createElement("div", {
						className: Se.a.flatListContainer
					}, n.a.createElement(F.a, {
						className: Se.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: De,
						model: Ee,
						onVoteClick: e.handleVote
					}), !Ee.isSurveyAd && n.a.createElement(R.c, {
						currentUser: a,
						hasModFlairPerms: ze,
						hasModFullPerms: Ge,
						hasModPostPerms: He,
						hostPostData: j,
						isCommentCountAnimation: de,
						isCountAnimShadowTestEnabled: xe,
						isLargePost: !0,
						isOverlay: !!ie,
						listingKey: ve,
						modModeEnabled: Oe,
						onClickInsightsButton: pt,
						onIgnoreReports: ge,
						onOpenReportsDropdown: we,
						post: Ee,
						shouldShowInsightsButton: ke,
						showEditPost: Qe,
						showEditFlair: Me,
						useFlatlistBreakpoints: Object(X.b)({
							editPost: !1,
							save: !qe,
							hide: !1,
							report: !1
						})
					})), Be && lt && n.a.createElement(B.a, {
						className: Se.a.creatorStatsContainer,
						post: Ee,
						subreddit: Be,
						isProfileStats: !0
					})), Z && n.a.createElement(M.a, {
						post: Ee,
						postIds: null != Ue ? Ue : [],
						subredditId: null == Be ? void 0 : Be.id
					})))
				});
			_e.displayName = "LargePostMemoized";
			t.default = Object(de.b)(Ne(Object(ie.b)(_e)))
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
				P = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				O = s.n(P);
			const y = m.a.div("ProfileOwnerCommentWrapper", O.a),
				C = m.a.div("CommentContentWrapper", O.a),
				g = m.a.div("Wrapper", O.a),
				j = m.a.div("CommentSeparator", O.a),
				w = Object(a.b)(() => Object(d.c)({
					comment: (e, t) => Object(x.b)(e, t),
					isAwarded: (e, t) => {
						const s = Object(x.b)(e, t);
						return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
							const s = Object(f.a)(e, t);
							return s && s.coinPrice >= c.g
						})
					},
					isNightmodeOn: v.cb
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
						isAwarded: r,
						isFirst: a,
						isLast: d,
						isNightmodeOn: c,
						profileName: m,
						showModTools: u
					} = this.props, b = m === e.author ? S : I;
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
					}, i.a.createElement(g, {
						className: Object(l.a)({
							[O.a.isFirst]: a,
							[O.a.isLast]: d,
							[O.a.isAwarded]: r,
							[O.a.isNightmodeOn]: c
						})
					}, n()(s + 1, e => i.a.createElement(j, {
						key: e
					})), i.a.createElement(C, null, b(t, m, u))))
				}
			}
			const S = (e, t, s) => i.a.createElement(y, null, I(e, t, s, !0, !0)),
				I = function(e, t, s) {
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
				P = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				y = s("./src/reddit/models/Media/index.ts"),
				C = s("./src/reddit/models/Subreddit/index.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/PostTopLine/index.m.less"),
				w = s.n(j);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: n,
					hideAwards: j,
					hideNSFWPref: E,
					hostPostData: S,
					iconClassName: I,
					inSubredditOrProfile: N,
					isCommentsPage: _,
					isCompactPinnedPost: k,
					isCurrentUserProfilePost: T,
					isInModNotesExperiment: L,
					isOverlay: M,
					isTopicPage: F,
					listingKey: B,
					post: A,
					shouldShowSubscribeButton: R,
					showCornerOutboundLink: U,
					showSubreddit: W,
					showSubredditIcon: V,
					subredditOrProfile: K,
					isFollowed: D,
					shouldShowFollowButton: H,
					onFollowPostClick: q
				} = e;
				const z = j || F,
					G = K && Object(C.h)(K),
					J = Object(i.e)(e => {
						if (!G) return !0;
						const t = Object(g.Eb)(e, A.author || "");
						return !t || t.enableFollowers
					});
				return r.a.createElement("div", {
					className: Object(a.a)(w.a.container, t)
				}, W && K && r.a.createElement("div", {
					className: w.a.subredditIconWrapper
				}, r.a.createElement(b.a, {
					"data-click-id": "subreddit",
					to: K.url
				}, V && r.a.createElement(u.b, {
					className: Object(a.a)(w.a.subredditIcon, I),
					shouldHideNsfwIcon: E,
					subredditOrProfile: K
				}))), r.a.createElement("div", {
					className: w.a.everythingElseWrapper
				}, W && r.a.createElement(c.h, {
					type: A.belongsTo.type,
					id: A.belongsTo.id
				}), r.a.createElement(p.d, {
					className: w.a.postTopMeta,
					forceOpenInNewTab: n,
					flairStyleTemplate: s,
					isInModNotesExperiment: L,
					tooltipType: M ? p.c.Lightbox : void 0,
					post: A,
					showSub: W,
					subredditOrProfile: K
				}), r.a.createElement(m.a, {
					className: w.a.postBadges,
					displayText: K ? K.displayText : null,
					inSubredditOrProfile: N,
					isCompactPinnedPost: k,
					post: A,
					tooltipType: M ? p.c.Lightbox : void 0
				}), !z && r.a.createElement(d.a, {
					isPostDetail: _,
					thing: A,
					tooltipType: M ? p.c.Lightbox : void 0
				})), K && J && W && R && !T && r.a.createElement(h.a, {
					className: w.a.SubscribeButton,
					getEventFactory: e => Object(P.h)(A.id, e ? "unsubscribe" : "subscribe", "post", B, S),
					identifier: {
						name: K.name,
						type: G ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: A.id,
					size: f.d.XS
				}), U && r.a.createElement(v.b, {
					isSponsored: A.isSponsored,
					postId: A.id,
					href: Object(y.D)(A),
					source: A.source
				}, r.a.createElement(O.a, {
					className: w.a.outboundLinkIcon
				})), H && J && r.a.createElement(l.a, {
					isFilled: !!D,
					onClick: q,
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
				flairStyleTemplate: c.V,
				hideNSFWPref: b.F,
				isActive: u.j,
				moderatorPermissions: m.l,
				modModeEnabled: c.T,
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
				p = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/promo/withShowSignupUpsell.tsx"),
				x = s("./src/reddit/actions/pages/profileOverview/index.ts"),
				f = s("./src/reddit/actions/pages/profileShared.ts"),
				v = s("./src/reddit/actions/profileConversations.ts"),
				P = s("./src/reddit/components/ContentGate/index.tsx"),
				O = s("./src/reddit/components/CreatorStats/EducationUnit.tsx"),
				y = s("./src/reddit/components/EmptyProfile/index.ts"),
				C = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				g = s("./src/reddit/components/JumpToContent/index.tsx"),
				j = s("./src/reddit/components/PostList/index.tsx"),
				w = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/lib/classNames/index.ts"),
				S = s("./src/lib/isPinnedAdminPost/index.ts"),
				I = s("./src/lib/lessComponent.tsx"),
				N = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				_ = s("./node_modules/lodash/last.js"),
				k = s.n(_);
			var T = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				L = s("./src/reddit/selectors/posts.ts"),
				M = s("./src/reddit/components/ClassicPost/index.tsx"),
				F = s("./src/reddit/components/LargePost/index.tsx"),
				B = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				A = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				R = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				U = s("./src/reddit/selectors/profile.ts"),
				W = s("./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less"),
				V = s.n(W);
			const {
				fbt: K
			} = s("./node_modules/fbt/lib/FbtPublic.js"), D = I.a.div("ExtraCommentsItemWrapper", V.a), H = I.a.p("ExtraComments", V.a), q = I.a.wrapped(H, "ExtraCommentsInteractive", V.a);
			var z = Object(a.b)(() => Object(d.c)({
					extraCommentsItem: U.c,
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
					return i.a.createElement(D, null, o ? i.a.createElement(H, null, K._("Loading...", null, {
						hk: "47z90C"
					})) : i.a.createElement(R.a.Consumer, null, e => i.a.createElement(q, {
						onClick: e => {
							t(s), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, K._("Load more comments", null, {
						hk: "1jXJxb"
					}))))
				}),
				G = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				J = s("./src/reddit/contexts/Post/index.tsx"),
				X = s("./src/reddit/hooks/useTheme.ts"),
				Z = s("./src/reddit/constants/postLayout.ts"),
				Q = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Y = s.n(Q),
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
				ne = I.a.wrapped(B.a, "OverviewCommentPost", ee.a),
				re = Object(a.b)(() => Object(d.c)({
					commentThreadLinkSets: (e, t) => {
						let {
							postId: s,
							currentProfileName: o
						} = t;
						const n = o ? o.toLowerCase() : "",
							r = Object(N.a)(s, n);
						return e.pages.profileOverview.conversations.keyToCommentThreadLinkSets[r]
					},
					headComment: (e, t) => {
						let {
							postId: s,
							currentProfileName: o
						} = t;
						const n = o ? o.toLowerCase() : "",
							r = Object(N.a)(s, n);
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
					layout: u.R
				})),
				ie = I.a.wrapped(F.default, "OverviewLargePost", ee.a),
				ae = re(e => {
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
						profileName: P,
						scrollerItemRef: O,
						userIsOp: y
					} = e, C = {
						last: p,
						onClickPost: b,
						postId: v
					};
					if (!P) return null;
					const g = P === f.author,
						j = Object(S.a)(c, f.distinguishType);
					if (!g && !a && !j) return null;
					const w = a ? function(e) {
							const t = [],
								s = e.length;
							for (let o = 0; o < s; o++) {
								(0 === o || e[o - 1].depth !== e[o].depth - 1) && t.push([]), k()(t).push(e[o])
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
						I = w.length - 1,
						N = y && l;
					return i.a.createElement("div", {
						className: Object(E.a)(Y.a.largeAndMediumActiveStyles, Y.a.largeAndMediumPostStyles, ee.a.OverviewConversationsPost, s),
						style: {
							...Object(T.b)(),
							...Object(T.d)(e)
						}
					}, i.a.createElement(A.a, {
						className: N ? ee.a.shouldShowOverflow : void 0,
						isFirst: !0,
						isLast: I < 0,
						key: f.id
					}, !g && !!a && i.a.createElement(ne, te({}, C, {
						commentId: a,
						key: f.id,
						profileName: P
					})), (g || j) && (u === Z.g.Classic ? i.a.createElement(oe, {
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
						scrollerItemRef: O
					}) : i.a.createElement(ie, {
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
						scrollerItemRef: O,
						shouldShowInsightsButton: N
					}))), i.a.createElement(se, {
						style: {
							background: Object(T.e)(e)
						}
					}, !d && w.map((e, t) => i.a.createElement(A.a, {
						isLast: t === I,
						key: `${t}-isLast[${t===I}]`
					}, e.map((t, s) => {
						const o = 0 === s,
							n = s === e.length - 1;
						return "comment" === t.type ? i.a.createElement(G.a, {
							commentId: t.id,
							depth: t.depth,
							isFirst: o,
							isLast: n,
							key: t.id,
							profileName: P,
							showModTools: !0
						}) : i.a.createElement(z, {
							extraCommentsId: t.id,
							key: t.id,
							profileName: P
						})
					})))))
				});
			var de = Object(J.b)((function(e) {
					var t;
					const s = Object(X.a)(),
						o = Object(u.fb)();
					return i.a.createElement(ae, te({
						theme: null !== (t = e.theme) && void 0 !== t ? t : s,
						currentProfileName: Object(u.i)(o),
						pageLayer: o
					}, e))
				})),
				ce = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				le = s("./src/reddit/helpers/trackers/post.ts"),
				me = s("./src/reddit/selectors/tracking.ts"),
				pe = s("./src/reddit/connectors/PostList/index.ts");
			const ue = Object(d.c)({
					...pe.d,
					postIds: L.O,
					viewportDataLoaded: me.a
				}),
				be = Object(pe.c)(),
				he = Object(a.b)(ue, pe.b, (e, t, s) => ({
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
			var xe = (e => Object(w.c)(be(he(e))))(j.a),
				fe = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				ve = s("./node_modules/lodash/debounce.js"),
				Pe = s.n(ve),
				Oe = s("./src/reddit/actions/post.ts"),
				ye = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Ce = s("./src/lib/isUrl/index.ts"),
				ge = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				je = s("./src/reddit/components/Media/index.tsx"),
				we = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				Ee = s("./src/reddit/components/PostContainer/index.tsx"),
				Se = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				Ie = s("./src/reddit/components/PostTitle/index.tsx"),
				Ne = s("./src/reddit/connectors/miniCardPost.ts"),
				_e = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				ke = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Te = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Le = s("./src/reddit/models/Media/index.ts"),
				Me = s("./node_modules/fbt/lib/FbtPublic.js"),
				Fe = s("./src/reddit/components/CommentsLink/index.tsx"),
				Be = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				Ae = s("./src/reddit/components/Flatlist/index.tsx"),
				Re = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				Ue = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				We = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Ve = s("./src/reddit/components/ShareMenu/index.tsx"),
				Ke = s("./src/reddit/icons/fonts/Share/index.tsx"),
				De = s("./src/reddit/models/User/index.ts"),
				He = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				qe = s.n(He);
			const ze = "-MiniCardModMenu",
				Ge = "-MiniCardOverflowMenu",
				Je = "-MiniCardShareMenu",
				Xe = I.a.wrapped(Be.a, "HorizontalVotes", qe.a),
				Ze = I.a.button("ShareButton", qe.a),
				Qe = Object(u.u)({
					currentProfileName: u.i,
					isCommentPermalink: u.w,
					isCommentsPage: u.x,
					isProfilePostListing: u.L,
					pageLayer: e => e
				}),
				Ye = Object(d.c)({
					layout: u.R,
					subreddit: u.r
				});
			var $e = Qe(Object(a.b)(Ye, {})(Object(w.c)(e => {
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
						showEditFlair: P,
						showEditPost: O,
						subreddit: y
					} = e, C = e => v(Object(le.h)(f.id, e)), g = f.postId, j = Object(Ae.d)(ze, f.id, m, u), w = !!o && Object(De.e)(o) === f.author;
					return i.a.createElement("div", {
						className: Object(E.a)(qe.a.flatlistContainer, s)
					}, i.a.createElement(Xe, {
						compact: !1,
						model: f,
						onVoteClick: n,
						scoreClassName: qe.a.score
					}), i.a.createElement(Fe.a, {
						hasModPostPerms: d,
						isCommentsPage: c,
						isCommentPermalink: l,
						isOverlay: m,
						postId: f.id,
						modModeEnabled: h,
						numComments: f.numComments,
						type: Z.g.Compact,
						onClick: x
					}), i.a.createElement(Ve.a, {
						className: qe.a.shareMenu,
						dropdownId: Object(Ae.d)(Je, f.id, m, u),
						permalink: f.permalink,
						post: f,
						sendEventWithName: C,
						subredditType: null == y ? void 0 : y.type
					}, i.a.createElement(Ze, null, i.a.createElement(Ke.a, {
						className: qe.a.shareIcon
					}), i.a.createElement("span", {
						className: qe.a.shareText
					}, Me.fbt._("share", null, {
						hk: "mmJV5"
					})))), d && i.a.createElement(Re.a, {
						dropdownId: j,
						onClick: () => C("post_mod_action_menu")
					}, i.a.createElement(Ae.b, {
						className: qe.a.modActionsIcon
					}), i.a.createElement(Ue.a, {
						canEditFlair: r && !!P,
						hasModPostPerms: d,
						hasModFullPerms: a,
						isOverlay: !!m,
						isPostAuthor: w,
						modModeEnabled: h,
						post: f,
						tooltipId: j
					})), i.a.createElement(We.a, {
						currentProfileName: t,
						isCommentsPage: c,
						isOverlay: !!m,
						isProfilePostListing: p,
						layout: b,
						pageLayer: e.pageLayer,
						permalink: f.permalink,
						postId: g,
						dropdownId: Object(Ae.d)(Ge, f.id, m, u),
						isFixed: u,
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
				et = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				tt = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				st = s("./src/reddit/components/MiniCardPost/index.m.less"),
				ot = s.n(st);
			var nt = Object(u.u)()(Object(J.b)(Object(Ne.a)(Object(ye.a)(e => {
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
						showEditFlair: P,
						subredditOrProfile: O,
						userIsOp: y
					} = e, {
						media: C
					} = n || h, g = C && C.type, j = Object(Se.b)(h.id), w = g === Le.o.RTJSON, S = y && w, I = Object(Te.a)(p), N = Object(_e.a)(p), _ = Object(ke.a)(p), k = C && g !== Le.o.RTJSON && g !== Le.o.TEXT, L = g === Le.o.VIDEO || g === Le.o.GIFVIDEO || g === Le.o.LIVEVIDEO, M = !C && !!h.source && Object(Ce.a)(h.source.url), F = C && i.a.createElement(je.a, {
						autoplayPref: t,
						availableWidth: s,
						className: ot.a.media,
						imageBoxClassName: Object(E.a)(ot.a.mediaImageBox, {
							[ot.a.videoStyles]: L
						}),
						imageBoxContentImageClassName: ot.a.mediaImageBoxContentImage,
						forceAspectRatio: Le.c,
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
					return i.a.createElement(Ee.a, {
						className: Object(E.a)(ot.a.postContainer, Y.a.largeAndMediumActiveStyles, Y.a.largeAndMediumPostStyles, Object(T.a)(e), o),
						style: {
							...Object(T.b)(e.flairStyleTemplate),
							...Object(T.d)(e)
						},
						post: h,
						onClick: b,
						eventFactory: d
					}, i.a.createElement(we.a, {
						className: ot.a.backgroundWrapper,
						flairStyleTemplate: c
					}, k && F, i.a.createElement("div", {
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
						crosspostSubredditOrProfile: r,
						hideNSFWPref: m,
						post: h,
						subredditOrProfile: O
					}), !k && i.a.createElement("div", {
						className: ot.a.mediaWrapper
					}, F), i.a.createElement("div", {
						className: ot.a.flexSpacer
					}), i.a.createElement($e, {
						currentUser: a,
						handleVote: e.handleVote,
						hasModFlairPerms: N,
						hasModFullPerms: _,
						hasModPostPerms: I,
						modModeEnabled: u,
						post: h,
						showEditFlair: P,
						showEditPost: S
					}))), e.activeModalId === j && i.a.createElement(Se.a, {
						flairs: h.flair,
						subredditId: h.belongsTo.id,
						modalId: j,
						onFlairChanged: e.onFlairChanged
					}), i.a.createElement(ge.d, null))
				})))),
				rt = s("./src/reddit/helpers/getClickInfo.ts"),
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
				pt = s("./src/reddit/controls/TextButton/index.tsx"),
				ut = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less"),
				bt = s.n(ut);
			const {
				fbt: ht
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var xt = e => i.a.createElement(mt, {
					className: Object(E.a)(bt.a.container, e.className)
				}, i.a.createElement("div", {
					className: bt.a.description
				}, ht._('Pin a post from your feed using the "..." at the bottom of each post', null, {
					hk: "4lkJRB"
				})), i.a.createElement(pt.a, {
					className: bt.a.gotIt,
					onClick: e.onGotItClick
				}, ht._("OK, I got it", null, {
					hk: "1JMx7x"
				}))),
				ft = s("./src/reddit/components/ProfilePinnedPosts/index.m.less"),
				vt = s.n(ft);
			const {
				fbt: Pt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ot = 320, yt = 300, Ct = Object(d.c)({
				arePinnedPostsLoaded: L.a,
				currentUser: it.k,
				pinnedPostIds: L.P
			}), gt = Object(a.b)(Ct, e => ({
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
						Object(m.Nb)(), this.setState({
							showEducation: !1
						})
					}, this.onClickPost = (e, t) => {
						this.props.openPost({
							postOrComment: t,
							clickInfo: Object(rt.a)(e)
						})
					}, this.renderPost = e => i.a.createElement(nt, {
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
					const o = !!this.props.currentUser && this.props.profileName === Object(De.e)(this.props.currentUser),
						n = t.length > 0,
						r = !n && this.state.showEducation && o;
					if (!n && !r) return null;
					const a = o && this.props.pinnedPostIds.length % 2 != 0;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: vt.a.title
					}, Pt._("Pinned posts", null, {
						hk: "3prRc3"
					})), r ? i.a.createElement(xt, {
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
			var wt = Object(u.u)()(gt(jt)),
				Et = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				St = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				It = s("./src/reddit/helpers/name/index.ts"),
				Nt = s("./src/reddit/helpers/trackers/screenview.ts"),
				_t = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				kt = s("./src/reddit/layout/page/Listing/index.tsx"),
				Tt = s("./src/reddit/models/ContentGate.ts"),
				Lt = s("./src/reddit/pages/ErrorPages/index.tsx"),
				Mt = s("./src/reddit/selectors/experiments/creatorStats.ts"),
				Ft = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");

			function Bt() {
				return (Bt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const At = (e, t) => {
					let {
						location: s
					} = t;
					return n()([...Object(c.a)(s.search)])
				},
				Rt = Object(u.u)(),
				Ut = Object(d.c)({
					isProfileCreatorStatsEnabled: Mt.b,
					isOwnProfile: u.E,
					over18Prefs: it.jb,
					layout: u.R
				}),
				Wt = Object(d.a)(Ut, At, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.profileName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.sort
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(U.j)(e, {
						profileName: s.params.profileName
					})
				}, (e, t) => Object(f.a)(e, At(0, t)), (e, t) => {
					let {
						match: s
					} = t;
					return !Object(L.n)(e, {
						profileName: s.params.profileName
					})
				}, it.P, (e, t) => {
					let {
						match: s
					} = t;
					return Object(it.f)(e, b.jc + s.params.profileName)
				}, Ft.a, (e, t, s, o, n, r, i, a, d, c) => {
					let {
						sort: l,
						t: m
					} = r;
					const u = b.ub,
						h = Object(p.a)(s, u, l, t),
						{
							sort: x
						} = t;
					return {
						contentGateInfo: d,
						isLoggedIn: a,
						isProfileNSFW: !!n && n.isNSFW,
						listingKey: h,
						profileName: s,
						shouldShowPinnedPostsSection: i && !x,
						sort: l,
						timeSort: m,
						isEligibleForNsfwSignupUpsellTreatment: c,
						...e
					}
				}),
				Vt = Object(a.b)(Wt, (e, t) => ({
					onLoadMoreConversationsItems: () => e(v.h({
						profileName: t.match.params.profileName,
						sort: t.match.params.sort
					})),
					onLayoutChange: () => e(Object(x.profileOverviewRequested)({
						...t.match,
						queryParams: n()([...Object(c.a)(t.location.search)])
					}))
				}));
			class Kt extends i.a.Component {
				constructor(e) {
					super(e), this.onStorage = () => {
						this.setState({
							showPostStatsUnit: Object(m.K)() <= 2
						})
					}, this.renderNoPosts = () => i.a.createElement(y.c, {
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
						listingKey: n,
						onLayoutChange: r,
						pageLayer: a,
						profileName: d,
						sort: c,
						shouldShowPinnedPostsSection: m,
						showSignupUpsell: p,
						timeSort: u,
						isEligibleForNsfwSignupUpsellTreatment: h
					} = this.props;
					if (!a) return null;
					if (e && e.profileDeleted) return i.a.createElement(P.default, {
						contentGateType: Tt.a.ProfileDeleted,
						profileName: d
					});
					if (e && e.profileSuspended) return i.a.createElement(P.default, {
						contentGateType: Tt.a.ProfileSuspended,
						profileName: d
					});
					if (451 === a.status || e && e.profileBlockedForLegalReason) return i.a.createElement(P.default, {
						contentGateType: Tt.a.ProfileBlockedForLegalReason,
						profileName: d
					});
					if (403 === a.status) return i.a.createElement(Lt.a, null);
					if (404 === a.status) return i.a.createElement(P.default, {
						contentGateType: Tt.a.ProfileDoesNotExist,
						profileName: d
					});
					if (!d) return null;
					const x = d.toLowerCase(),
						f = `/user/${d}/`,
						v = {
							listingKey: n,
							listingName: x
						};
					if (o && !s && h) return i.a.createElement(St.a, {
						contentTitle: Object(It.d)(d)
					});
					if (!t && o && !s) return i.a.createElement(P.default, {
						subredditName: d,
						contentGateType: Tt.a.Nsfw
					});
					const O = {
							inSubredditOrProfile: !Object(l.a)(d),
							listingKey: n,
							listingName: x,
							listingViewed: (e, t) => Object(Nt.q)(n, c, t, e, u),
							noPostsComponent: this.renderNoPosts,
							onScroll: p,
							onTryAgain: r
						},
						y = {
							sort: c,
							baseUrl: f,
							sortOptions: b.Ab,
							timeSort: u
						},
						j = i.a.createElement(i.a.Fragment, null, m && i.a.createElement(wt, {
							profileName: d
						}), i.a.createElement(C.a, y), i.a.createElement(xe, Bt({}, O, {
							getInjectChildren: this.state.showPostStatsUnit && this.props.isOwnProfile && this.props.isProfileCreatorStatsEnabled ? this.getInjectChildren : void 0,
							excludePinnedPosts: m,
							onLoadMore: this.props.onLoadMoreConversationsItems,
							isProfileCreatorStatsEnabled: this.props.isProfileCreatorStatsEnabled && this.props.isOwnProfile
						})));
					return i.a.createElement(kt.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(fe.a, {
							profileName: d
						})),
						content: i.a.createElement(i.a.Fragment, null, i.a.createElement(g.a, null), j),
						sidebar: i.a.createElement(Et.a, Bt({}, v, {
							profileName: d
						}))
					})
				}
			}
			t.default = Rt(Vt(Object(h.a)(Object(_t.d)(Kt))))
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
					experimentName: o.Ac
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
						[n.ec.Bottom_cell_dismissible]: e,
						[n.ec.Bottom_cell_dismissible_immediate_trigger]: e,
						[n.ec.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = c(n.rb, !0),
				m = c(n.sb, !0),
				p = c(n.tb, !0),
				u = c(n.rb, !1),
				b = c(n.sb, !1),
				h = c(n.tb, !1)
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
					return Boolean(t) && !Object(n.Cf)(t)
				},
				d = Object(o.a)(a, r.d, (e, t) => e && !t)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileOverview.ddc93a1362a5941b0116.js.map