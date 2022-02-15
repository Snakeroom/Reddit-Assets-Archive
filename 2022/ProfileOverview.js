// https://www.redditstatic.com/desktop2x/ProfileOverview.c6401d558aa8f3a5c8bb.js
// Retrieved at 2/15/2022, 1:20:04 PM by Reddit Dataminer v1.0.0
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
					const e = Object(m.a)(d.Zb.Bottom_cell),
						t = Object(m.a)(d.Zb.Bottom_cell_dismissible),
						s = Object(m.a)(d.Zb.Bottom_cell_dismissible_immediate_trigger),
						o = Object(m.a)(d.Zb.Bottom_cell_signup_upsell_copy),
						n = Object(m.a)(d.Zb.Bottom_cell_surprise_install_copy),
						r = Object(m.a)(d.Zb.Bottom_sheet);
					return e || o || n ? l.b.SignupUpsellCell : t || s ? l.b.SignupUpsellCellDismissible : r ? l.b.SignupUpsellBottomSheet : null
				},
				u = s("./src/reddit/hooks/promo/useIsPromoShown.ts");
			const b = 250,
				x = 1e3;

			function h() {
				return (h = Object.assign || function(e) {
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
					const s = function(e = b) {
						const {
							showPromo: t
						} = Object(c.a)(), s = p(), r = Object(u.a)(s), l = Object(m.a)(d.Zb.Bottom_cell_dismissible_immediate_trigger);
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
							maxWait: x
						}), [l, r, s, t, e])
					}();
					return o.createElement(e, h({
						showSignupUpsell: s
					}, t))
				}
				return s.displayName = `withShowSignupUpsell(${t})`, s
			}
		},
		"./src/reddit/actions/pages/profileOverview/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileOverviewConversationsPending", (function() {
				return je
			})), s.d(t, "profileOverviewConversationsLoaded", (function() {
				return Ee
			})), s.d(t, "profileOverviewConversationsFailed", (function() {
				return we
			})), s.d(t, "profileOverviewChronoPending", (function() {
				return Ne
			})), s.d(t, "profileOverviewChronoLoaded", (function() {
				return Ie
			})), s.d(t, "profileOverviewChronoFailed", (function() {
				return _e
			})), s.d(t, "profileOverviewConversationsRequested", (function() {
				return ke
			})), s.d(t, "profileOverviewRequested", (function() {
				return Se
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/lodash/pick.js"),
				n = s.n(o),
				r = s("./src/reddit/actions/moderatingSubreddits.ts"),
				i = s("./src/reddit/actions/pages/profileShared.ts"),
				a = s("./src/reddit/actions/subreddit.ts"),
				d = s("./src/config.ts"),
				c = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/makeApiRequest/index.ts"),
				p = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				b = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var x = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/constants/parameters.ts"),
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				P = s("./src/reddit/selectors/listings.ts"),
				v = s("./src/reddit/selectors/profile.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				O = s("./src/lib/makeActionCreator/index.ts"),
				C = s("./src/reddit/actions/changeUsername.ts"),
				g = s("./src/reddit/actions/contentGate.ts"),
				j = s("./src/reddit/actions/externalAccount.ts"),
				E = s("./src/reddit/actions/gold/powerups.ts"),
				w = s("./src/reddit/actions/pinnedPost.ts"),
				N = s("./src/reddit/actions/platform.ts"),
				I = s("./src/reddit/actions/profile/index.ts"),
				_ = s("./src/reddit/actions/trophyCase.ts"),
				k = s("./src/reddit/constants/errors.ts"),
				S = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				T = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				L = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				M = s("./src/lib/initializeClient/installReducer.ts"),
				F = s("./node_modules/redux/es/redux.js"),
				A = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const B = {};
			var R = (e = B, t) => {
				switch (t.type) {
					case L.c:
					case L.b:
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
					case L.a:
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
			var V = (e = W, t) => {
					switch (t.type) {
						case L.c:
						case A.c: {
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
				D = Object(F.c)({
					error: R,
					pending: V
				});
			const K = {};
			var U = (e = K, t) => {
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
			var q = (e = H, t) => {
					switch (t.type) {
						case L.b:
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
			const G = {};
			var J = (e = G, t) => {
					switch (t.type) {
						case L.b:
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
				X = Object(F.c)({
					api: D,
					fetchedTokens: U,
					ids: q,
					loadMore: J
				});
			const Z = {};
			var Q = (e = Z, t) => {
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
			const Y = {};
			var $ = (e = Y, t) => {
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
				ee = Object(F.c)({
					error: Q,
					pending: $
				}),
				te = s("./src/reddit/actions/profileConversations.ts");
			const se = {};
			var oe = (e = se, t) => {
				switch (t.type) {
					case te.c:
					case te.b: {
						const {
							extraCommentsId: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case te.a: {
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
			var re = (e = ne, t) => {
					switch (t.type) {
						case te.c: {
							const {
								extraCommentsId: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case te.b:
						case te.a: {
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
				ie = Object(F.c)({
					error: oe,
					pending: re
				});
			const ae = {};
			var de = (e = ae, t) => {
					switch (t.type) {
						case L.e:
						case te.b:
						case te.e:
							return {
								...e, ...t.payload.extraComments
							};
						default:
							return e
					}
				},
				ce = Object(F.c)({
					api: ie,
					models: de
				}),
				le = s("./node_modules/lodash/mapValues.js"),
				me = s.n(le),
				pe = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				ue = s("./src/reddit/constants/comments.ts");
			const be = {};

			function xe(e) {
				const t = e;
				return me()(t, ({
					depth: e,
					next: t,
					prev: s
				}) => ({
					depth: e,
					next: t,
					prev: s
				}))
			}
			const he = (e, t, s) => {
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
			var fe = (e = be, t) => {
				switch (t.type) {
					case L.e:
					case te.e: {
						const {
							comments: s,
							extraComments: o,
							postIds: n,
							profileName: r
						} = t.payload, i = he(n, s, o), a = {};
						for (const e of n) {
							a[Object(pe.a)(e, r)] = i.hasOwnProperty(e) ? xe(i[e]) : {}
						}
						return {
							...e,
							...a
						}
					}
					case te.b: {
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
							c = xe(he(i, s, n)[d]),
							l = Object(pe.a)(d, a),
							m = {
								...e[l]
							},
							p = m[r].prev,
							u = p && p.id || "",
							b = o[d].head,
							x = b && b.id || "",
							h = {
								id: x,
								type: ue.a.Comment
							},
							f = {
								...m,
								[u]: {
									...m[u],
									next: h
								},
								...c,
								[x]: {
									...c[x],
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
			var ve = (e = Pe, t) => {
				switch (t.type) {
					case L.e:
					case te.e: {
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
			const ye = {};
			var Oe = (e = ye, t) => {
					switch (t.type) {
						case L.e:
						case te.e: {
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
				Ce = Object(F.c)({
					api: ee,
					extraComments: ce,
					keyToCommentThreadLinkSets: fe,
					keyToHeadCommentId: ve,
					keyToPostId: Oe
				}),
				ge = Object(F.c)({
					chrono: X,
					conversations: Ce
				});
			Object(M.a)({
				pages: {
					profileOverview: ge
				}
			});
			const je = Object(O.a)(L.f),
				Ee = Object(O.a)(L.e),
				we = Object(O.a)(L.d),
				Ne = Object(O.a)(L.c),
				Ie = Object(O.a)(L.b),
				_e = Object(O.a)(L.a),
				ke = (e, t, s, o) => async (o, n, r) => {
					const i = n(),
						a = !!i.listings.postOrder.ids[e],
						x = !!Object(P.c)(i, {
							listingKey: e
						});
					if (!!Object(P.d)(i, {
							listingKey: e
						}) || a && !x) return;
					o(je({
						key: e
					}));
					const h = await Object(T.a)("profile", () => ((e, t, s) => Object(m.a)(e, {
							data: s,
							endpoint: Object(p.a)(Object(c.a)(Object(u.a)(Object(b.a)(`${d.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
							traceRequestName: "get_profile_conversations",
							method: l.jb.GET
						}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
							...e,
							body: {
								...e.body,
								pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
							}
						} : e))(r.apiContext(), t, s)),
						f = h.body,
						{
							pinned: y,
							postIds: O
						} = f;
					if (h.ok) {
						o(Ee({
							key: e,
							meta: i.meta,
							profileName: t,
							...f,
							postIds: O
						}));
						const s = Object(v.m)(n(), t);
						o(Object(w.h)({
							profileId: s,
							pinned: y
						}))
					} else o(we({
						account: h.body.data ? h.body.data.account : null,
						error: h.body.reason ? {
							type: h.body.reason
						} : h.error,
						key: e
					})), h.body.reason === k.a.DeletedProfile && o(Object(g.q)({
						profileName: t
					})), o(Object(N.n)(h.status))
				}, Se = e => async (t, s, o) => {
					const {
						queryParams: d,
						params: c
					} = e, {
						sort: m,
						t: p
					} = Object(i.a)(s(), d), {
						profileName: u
					} = c;
					let b = !1;
					const P = x.e[Object(f.R)(s(), {})],
						O = u.toLowerCase(),
						g = {
							...n()(e.queryParams, h.m),
							sort: m,
							layout: P,
							t: p
						},
						w = [t(I.d(O))],
						k = Object(S.a)(O, l.ub, m, e.queryParams);
					if (s().listings.postOrder.ids[k] && !s().listings.postOrder.api.error[k] ? b = !0 : w.push(t(ke(k, O, g, !0))), w.push(t(Object(r.b)())), await Promise.all(w), b) return;
					const T = s();
					if (!T.platform.currentPage) return;
					if (200 !== T.platform.currentPage.status) return;
					const L = Object(v.m)(s(), O),
						M = Object(y.sb)(T, {
							userName: u
						}).id;
					t(N.m({
						title: Te(s(), u)
					})), Object(y.M)(T) && Object(y.Q)(T, u) && t(Object(C.f)());
					const F = [t(Object(a.q)()), t(_.b(O, L)), t(I.b(O)), t(j.o(u)), t(I.g(u)), t(E.l(u, M))];
					await Promise.all(F)
				}, Te = (e, t) => Object(v.q)(e, {
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
				importAsync: () => Promise.all([s.e("EconHelperActions~index~reddit-components-Econ-Prediction"), s.e("index~reddit-components-Econ-Prediction"), s.e("index")]).then(s.bind(null, "./src/reddit/components/Econ/Audio/index.tsx")),
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
				importAsync: () => Promise.all([s.e("EconHelperActions~index~reddit-components-Econ-Prediction"), s.e("index~reddit-components-Econ-Prediction"), s.e("index")]).then(s.bind(null, "./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx")),
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
				return h
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = ({
				participantsCount: e
			}) => m._({
				"*": "· {total participated users} players",
				_1: "· {total participated users} player"
			}, [m._param("total participated users", Object(l.b)(e)), m._plural(e)], {
				hk: "1yrPLH"
			});
			var u = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				b = s.n(u);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = ({
				post: e
			}) => {
				const t = e.predictionTournament,
					s = t.status === d.a.Live,
					n = t.status === d.a.Closed,
					l = Object(i.e)(t => Object(c.U)(t, {
						postId: e.id
					}));
				return r.a.createElement("div", {
					className: b.a.container
				}, r.a.createElement("div", {
					className: b.a.label
				}, r.a.createElement("span", null, null == l ? void 0 : l.displayText), s && r.a.createElement("span", {
					className: Object(o.a)(b.a.badge, b.a.live)
				}, x._("Live", null, {
					hk: "1G2P1W"
				})), n && r.a.createElement("span", {
					className: Object(o.a)(b.a.badge, b.a.ended)
				}, x._("Ended", null, {
					hk: "4s3hco"
				})), void 0 !== t.totalParticipantsCount && r.a.createElement(p, {
					participantsCount: t.totalParticipantsCount
				}), r.a.createElement(a.a, {
					className: b.a.awards,
					thing: e
				})), r.a.createElement("h3", {
					className: b.a.title
				}, t.name))
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
				x = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				h = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				f = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				P = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				v = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Post/index.ts"),
				O = s("./src/reddit/models/Vote/index.ts"),
				C = s("./src/reddit/selectors/activeModalId.ts"),
				g = s("./src/reddit/selectors/experiments/cnc/index.ts"),
				j = s("./src/reddit/selectors/experiments/econ/index.ts"),
				E = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				w = s("./src/reddit/selectors/moderatorPermissions.ts"),
				N = s("./src/reddit/selectors/posts.ts"),
				I = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/lib/ads/index.ts"),
				k = s("./src/lib/classNames/index.ts"),
				S = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				T = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				L = s("./src/reddit/components/AwardBadges/index.tsx"),
				M = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				F = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				A = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				B = s("./src/reddit/components/Flatlist/index.tsx"),
				R = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				W = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				V = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				D = s("./src/reddit/components/ModModeReports/index.tsx"),
				K = s("./src/reddit/components/ModModeReports/helpers.ts"),
				U = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				H = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				q = s("./src/reddit/components/PostContainer/index.tsx"),
				z = s("./src/reddit/components/PostLeftRail/index.tsx"),
				G = s("./src/reddit/components/PostMedia/index.tsx"),
				J = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				X = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				Z = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				Q = s.n(Z);
			const {
				fbt: Y
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var $ = () => n.a.createElement("div", {
					className: Q.a.container
				}, n.a.createElement(X.a, {
					className: Q.a.pinnedIcon,
					isFilled: !0
				}), n.a.createElement("span", {
					className: Q.a.metaText
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
				ce = s("./src/reddit/helpers/postEvent.ts"),
				le = s("./src/reddit/models/Audio/index.ts"),
				me = s("./src/reddit/constants/experiments.ts"),
				pe = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ue = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const be = Object(a.a)(N.N, e => e.some(ue.c)),
				xe = Object(a.a)(be, e => e),
				he = (e, t) => Object(pe.c)(e, {
					experimentName: me.lc,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && xe(e, {
							listingKey: s
						})
					}
				});
			var fe = s("./src/reddit/selectors/postFlair.ts"),
				Pe = s("./src/reddit/selectors/showPromotedCTA.ts"),
				ve = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ye = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Oe = s.n(ye),
				Ce = s("./src/reddit/selectors/i18n/index.ts"),
				ge = s("./src/reddit/components/LargePost/index.m.less"),
				je = s.n(ge);
			const Ee = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(N.N)(e, {
						listingKey: s
					}) : void 0
				},
				we = Object(r.b)(() => Object(a.c)({
					autoplayPref: I.b,
					activeModalId: C.a,
					hideNSFWPref: I.C,
					flairStyleTemplate: ie.V,
					isCurrentUserProfilePost: N.l,
					isLoggedIn: I.K,
					isActive: N.j,
					showPromotedCTA: Pe.a,
					moderatorPermissions: w.l,
					modModeEnabled: ie.T,
					posts: Ee,
					postHeightVariant: he,
					shouldShowNsfwListingBelow: Ce.b,
					showEditFlair: fe.a,
					showAwardsPlaque: E.a,
					isAudioRoomPostEnabled: j.a,
					isRecordingEnabled: j.B,
					isInModNotesExperiment: (e, {
						subreddit: t
					}) => !!t && Object(g.a)(e, t.id)
				}), (e, {
					postId: t
				}) => ({
					handleVote: s => {
						const o = s === O.a.upvoted ? Object(p.jb)(t) : Object(p.w)(t);
						e(o)
					},
					onIgnoreReports: () => e(Object(p.fb)(t)),
					onOpenReportsDropdown: t => e(Object(u.h)({
						tooltipId: t
					}))
				})),
				Ne = n.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: r,
						currentUser: a,
						eventFactory: p,
						flairStyleTemplate: u,
						forceLoadMedia: O,
						hideNSFWPref: C,
						hostPostData: g,
						imageGalleryCurrentItem: j,
						inSubredditOrProfile: E = !1,
						isCommentsPage: w,
						isCurrentUserProfilePost: N,
						isFrontpage: I,
						isGalleryTileLayoutDefault: X,
						isInModNotesExperiment: Z,
						isLoggedIn: Q,
						isOverlay: Y,
						isTopicPage: re,
						isAudioRoomPostEnabled: ie,
						isCommentCountAnimationEnabled: ae,
						isVoteCountAnimationEnabled: pe,
						isCountAnimShadowTestEnabled: ue,
						isRecordingEnabled: be,
						listingIndex: xe,
						listingKey: he,
						moderatorPermissions: fe,
						modModeEnabled: Pe,
						onClickPost: ye,
						onIgnoreReports: Ce,
						onOpenReportsDropdown: ge,
						post: Ee,
						postHeightVariant: we,
						scrollerItemRef: Ne,
						shouldShowGalleryTileOption: Ie,
						shouldShowNsfwListingBelow: _e,
						showAwardsPlaque: ke,
						showEditFlair: Se,
						showPromotedCTA: Te,
						subredditOrProfile: Le,
						userIsOp: Me,
						postId: Fe,
						postIds: Ae,
						onceInViewport: Be
					} = e, Re = !!e.redditStyle || !!e["data-redditstyle"], We = Re ? void 0 : u, Ve = Object(l.a)(fe), De = Pe && Ve, Ke = Object(d.a)(fe), Ue = Object(c.a)(fe), He = Object(K.c)(Ee), qe = Object(V.d)(Ee), ze = !!Ee.media && Ee.media.type === v.o.RTJSON, Ge = Me && ze, Je = s ? s - z.a : void 0, Xe = !!Ee.recommendationContext, Ze = !(I && Q || re) || Xe && Q, Qe = (e => e === me.ve.OnlyTitles)(we) && !Object(de.a)(Ee), Ye = (e => e === me.ve.MediumHeight)(we) && !Object(de.a)(Ee), $e = (e => {
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
					})(e), et = !!(null == g ? void 0 : g.shouldShowLinkedPosts), tt = (!E || et || _e) && !Ee.isSponsored, st = Object(_.t)(Ee, j), {
						source: ot
					} = st, nt = Object(o.useRef)(null), rt = Object(o.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == Be || Be(xe))
						})
					}, [Be, xe]);
					return Object(P.a)(nt, rt), n.a.createElement(f.b, null, n.a.createElement(q.a, {
						className: Object(k.a)(je.a.container, r, Oe.a.largeAndMediumPostStyles, Oe.a.largeAndMediumActiveStyles, Object(m.a)(e), {
							[Oe.a.mUseRedditTheme]: Re,
							promotedvideolink: Ee.isSponsored && !(Ee.media && v.a.has(Ee.media.type)),
							[je.a.topCompactPost]: $e && $e.hasTopCompactPostStyles,
							[je.a.bottomCompactPost]: $e && $e.hasBottomCompactPostStyles
						}),
						isOverlay: Y,
						style: Object(m.b)(e.flairStyleTemplate),
						post: Ee,
						onClick: ye,
						eventFactory: p
					}, n.a.createElement("div", {
						ref: nt
					}), n.a.createElement(ee.a, {
						model: Ee,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: ue,
						isVoteCountAnimation: pe,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: We,
						redditStyle: Re,
						postId: Fe
					}), n.a.createElement(H.a, {
						className: Object(k.a)(je.a.backgroundWrapper, {
							[je.a.isEvent]: Object(ce.a)(Ee)
						}),
						"data-click-id": "background",
						flairStyleTemplate: We,
						post: Ee,
						redditStyle: Re
					}, n.a.createElement(A.a, {
						post: Ee
					}), $e && $e.showPinnnedHeader && n.a.createElement($, null), Object(i.c)(Ee) && n.a.createElement(n.a.Fragment, null, n.a.createElement(h.a, {
						post: Ee
					}), n.a.createElement(x.a, {
						post: Ee
					})), !Object(i.c)(Ee) && n.a.createElement(n.a.Fragment, null, !!Ee.recommendationContext && n.a.createElement(U.a, {
						content: Ee.recommendationContext.content,
						layout: ne.g.Large,
						post: Ee
					}), n.a.createElement(se.a, {
						className: je.a.postTopLine,
						hideAwards: ke,
						hideNSFWPref: C,
						hostPostData: g,
						iconClassName: je.a.postTopLineIcon,
						inSubredditOrProfile: E,
						isCommentsPage: !!w,
						isCompactPinnedPost: !!$e,
						isCurrentUserProfilePost: N,
						isInModNotesExperiment: Z,
						isOverlay: !!Y,
						isTopicPage: !!re,
						listingKey: he,
						post: Ee,
						shouldShowSubscribeButton: Ze,
						showSubreddit: tt,
						showSubredditIcon: !0,
						subredditOrProfile: Le
					}), n.a.createElement(te.c, {
						className: je.a.postTitle,
						post: Ee,
						redditStyle: Re,
						size: te.b.Large,
						titleColor: We && We.postTitleColor,
						isOverlay: Y
					}), Ee.source && !Ee.isSponsored && !(Ee.media && Object(v.H)(Ee.media)) && n.a.createElement(oe.a, {
						className: je.a.sourceLink,
						post: Ee
					})), n.a.createElement("div", {
						className: je.a.postMediaWrapper
					}, !$e && n.a.createElement(G.a, {
						isGalleryTileLayoutDefault: X,
						isListing: !0,
						isMediumHeight: Ye,
						isNotCardView: !!Y,
						isTitleOnly: Qe,
						showCentered: !0,
						flairStyleTemplate: We,
						post: Ee,
						availableWidth: Je,
						shouldLoad: O,
						scrollerItemRef: Ne,
						autoplayPref: t,
						shouldShowGalleryTileOption: Ie,
						showPromotedCTA: Te
					})), Te && ot && ot.url && n.a.createElement(S.a, {
						className: je.a.adLinkWrapper
					}, n.a.createElement(T.a, {
						post: Ee,
						adLinkContent: st
					})), Pe && Ve && qe && n.a.createElement("div", {
						className: je.a.modModeBannerWrapper
					}, n.a.createElement(W.a, {
						thing: Ee
					})), Pe && Ve && He && n.a.createElement("div", {
						className: je.a.modModeBannerWrapper
					}, n.a.createElement(D.a, {
						onIgnoreReports: Ce,
						reportable: Ee
					})), Object(le.b)(Ee) && ie && n.a.createElement(b.a, {
						post: Ee,
						isRecordingEnabled: be
					}), n.a.createElement(R.d, null), ke && n.a.createElement(L.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !1,
						thing: Ee,
						tooltipType: Y ? ve.c.Lightbox : void 0
					}), n.a.createElement("div", {
						className: je.a.flatListContainer
					}, n.a.createElement(F.a, {
						className: je.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: We,
						model: Ee,
						onVoteClick: e.handleVote
					}), n.a.createElement(B.c, {
						currentUser: a,
						hasModFlairPerms: Ke,
						hasModFullPerms: Ue,
						hasModPostPerms: Ve,
						hostPostData: g,
						isCommentCountAnimation: ae,
						isCountAnimShadowTestEnabled: ue,
						isLargePost: !0,
						isOverlay: !!Y,
						listingKey: he,
						modModeEnabled: Pe,
						onIgnoreReports: Ce,
						onOpenReportsDropdown: ge,
						post: Ee,
						showEditPost: Ge,
						showEditFlair: Se,
						useFlatlistBreakpoints: Object(J.b)({
							editPost: !1,
							save: !De,
							hide: !1,
							report: !1
						})
					}))), I && n.a.createElement(M.a, {
						post: Ee,
						postIds: null != Ae ? Ae : [],
						subredditId: null == Le ? void 0 : Le.id
					})))
				});
			Ne.displayName = "LargePostMemoized";
			t.default = Object(ae.b)(we(Object(re.b)(Ne)))
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
				x = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				P = s("./src/reddit/controls/OutboundLink/index.tsx"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				y = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				O = s("./src/reddit/models/Media/index.ts"),
				C = s("./src/reddit/models/Subreddit/index.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/PostTopLine/index.m.less"),
				E = s.n(j);
			t.a = ({
				className: e,
				flairStyleTemplate: t,
				forceOpenInNewTab: s,
				hideAwards: n,
				hideNSFWPref: j,
				hostPostData: w,
				iconClassName: N,
				inSubredditOrProfile: I,
				isCommentsPage: _,
				isCompactPinnedPost: k,
				isCurrentUserProfilePost: S,
				isInModNotesExperiment: T,
				isOverlay: L,
				isTopicPage: M,
				listingKey: F,
				post: A,
				shouldShowSubscribeButton: B,
				showCornerOutboundLink: R,
				showSubreddit: W,
				showSubredditIcon: V,
				subredditOrProfile: D,
				isFollowed: K,
				shouldShowFollowButton: U,
				onFollowPostClick: H
			}) => {
				const q = n || M,
					z = D && Object(C.h)(D),
					G = Object(i.e)(e => {
						if (!z) return !0;
						const t = Object(g.yb)(e, A.author || "");
						return !t || t.enableFollowers
					});
				return r.a.createElement("div", {
					className: Object(a.a)(E.a.container, e)
				}, W && D && r.a.createElement("div", {
					className: E.a.subredditIconWrapper
				}, r.a.createElement(b.a, {
					"data-click-id": "subreddit",
					to: D.url
				}, V && r.a.createElement(u.b, {
					className: Object(a.a)(E.a.subredditIcon, N),
					shouldHideNsfwIcon: j,
					subredditOrProfile: D
				}))), r.a.createElement("div", {
					className: E.a.everythingElseWrapper
				}, W && r.a.createElement(c.h, {
					type: A.belongsTo.type,
					id: A.belongsTo.id
				}), r.a.createElement(p.d, {
					className: E.a.postTopMeta,
					forceOpenInNewTab: s,
					flairStyleTemplate: t,
					isInModNotesExperiment: T,
					tooltipType: L ? p.c.Lightbox : void 0,
					post: A,
					showSub: W,
					subredditOrProfile: D
				}), r.a.createElement(m.a, {
					className: E.a.postBadges,
					displayText: D ? D.displayText : null,
					inSubredditOrProfile: I,
					isCompactPinnedPost: k,
					post: A,
					tooltipType: L ? p.c.Lightbox : void 0
				}), !q && r.a.createElement(d.a, {
					isPostDetail: _,
					thing: A,
					tooltipType: L ? p.c.Lightbox : void 0
				})), D && G && W && B && !S && r.a.createElement(x.a, {
					className: E.a.SubscribeButton,
					getEventFactory: e => Object(v.h)(A.id, e ? "unsubscribe" : "subscribe", "post", F, w),
					identifier: {
						name: D.name,
						type: z ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: A.id,
					size: f.d.XS
				}), R && r.a.createElement(P.b, {
					isSponsored: A.isSponsored,
					postId: A.id,
					href: Object(O.D)(A),
					source: A.source
				}, r.a.createElement(y.a, {
					className: E.a.outboundLinkIcon
				})), U && G && r.a.createElement(l.a, {
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
			const x = Object(o.b)(() => Object(n.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: u.d,
				crosspostSubredditOrProfile: u.e,
				flairStyleTemplate: c.V,
				hideNSFWPref: b.C,
				isActive: u.j,
				moderatorPermissions: m.l,
				modModeEnabled: c.T,
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
					const o = s === d.a.upvoted ? Object(r.jb)(t) : Object(r.w)(t);
					e(o)
				},
				onIgnoreReports: () => e(Object(r.fb)(t)),
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
			t.a = x
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
				m = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/promo/withShowSignupUpsell.tsx"),
				x = s("./src/reddit/actions/pages/profileOverview/index.ts"),
				h = s("./src/reddit/actions/pages/profileShared.ts"),
				f = s("./src/reddit/actions/profileConversations.ts"),
				P = s("./src/reddit/components/ContentGate/index.tsx"),
				v = s("./src/reddit/components/EmptyProfile/index.ts"),
				y = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				O = s("./src/reddit/components/JumpToContent/index.tsx"),
				C = s("./src/reddit/components/PostList/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				j = s("./src/lib/classNames/index.ts"),
				E = s("./src/lib/isPinnedAdminPost/index.ts"),
				w = s("./src/lib/lessComponent.tsx"),
				N = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				I = s("./node_modules/lodash/last.js"),
				_ = s.n(I);
			var k = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				S = s("./src/reddit/selectors/posts.ts"),
				T = s("./src/reddit/components/ClassicPost/index.tsx"),
				L = s("./src/reddit/components/LargePost/index.tsx"),
				M = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				F = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				A = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				B = s("./src/reddit/selectors/profile.ts"),
				R = s("./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less"),
				W = s.n(R);
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js"), D = w.a.div("ExtraCommentsItemWrapper", W.a), K = w.a.p("ExtraComments", W.a), U = w.a.wrapped(K, "ExtraCommentsInteractive", W.a);
			var H = Object(a.b)(() => Object(d.c)({
					extraCommentsItem: B.c,
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
				}) => i.a.createElement(D, null, s ? i.a.createElement(K, null, V._("Loading...", null, {
					hk: "47z90C"
				})) : i.a.createElement(A.a.Consumer, null, s => i.a.createElement(U, {
					onClick: s => {
						e(t), s.stopPropagation(), s.nativeEvent.stopImmediatePropagation()
					}
				}, V._("Load more comments", null, {
					hk: "1jXJxb"
				}))))),
				q = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				z = s("./src/reddit/contexts/Post/index.tsx"),
				G = s("./src/reddit/hooks/useTheme.ts"),
				J = s("./src/reddit/constants/postLayout.ts"),
				X = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Z = s.n(X),
				Q = s("./src/reddit/components/OverviewConversationsPost/index.m.less"),
				Y = s.n(Q);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = w.a.div("BackgroundWrapper", Y.a),
				te = w.a.wrapped(T.default, "ClassicPost", Y.a),
				se = w.a.wrapped(M.a, "OverviewCommentPost", Y.a),
				oe = Object(a.b)(() => Object(d.c)({
					commentThreadLinkSets: (e, {
						postId: t,
						currentProfileName: s
					}) => {
						const o = s ? s.toLowerCase() : "",
							n = Object(N.a)(t, o);
						return e.pages.profileOverview.conversations.keyToCommentThreadLinkSets[n]
					},
					headComment: (e, {
						postId: t,
						currentProfileName: s
					}) => {
						const o = s ? s.toLowerCase() : "",
							n = Object(N.a)(t, o);
						return e.pages.profileOverview.conversations.keyToHeadCommentId[n]
					},
					isInitiallyPinned: (e, {
						postId: t,
						currentProfileName: s
					}) => !!s && Object(S.p)(e, t, s),
					isPinned: (e, {
						postId: t,
						currentProfileName: s
					}) => !!s && Object(S.r)(e, t, s),
					profileName: (e, {
						currentProfileName: t
					}) => {
						if (t) return ((e, t) => {
							const {
								users: s
							} = e, o = t.toLowerCase(), n = s.models[o];
							return n ? n.username : void 0
						})(e, t)
					},
					layout: p.R
				})),
				ne = w.a.wrapped(L.default, "OverviewLargePost", Y.a),
				re = oe(e => {
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
						pageLayer: x,
						post: h,
						postId: f,
						profileName: P,
						scrollerItemRef: v
					} = e, y = {
						last: m,
						onClickPost: u,
						postId: f
					};
					if (!P) return null;
					const O = P === h.author,
						C = Object(E.a)(c, h.distinguishType);
					if (!O && !a && !C) return null;
					const g = a ? function(e) {
							const t = [],
								s = e.length;
							for (let o = 0; o < s; o++) {
								(0 === o || e[o - 1].depth !== e[o].depth - 1) && t.push([]), _()(t).push(e[o])
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
						w = g.length - 1;
					return i.a.createElement("div", {
						className: Object(j.a)(Z.a.largeAndMediumActiveStyles, Z.a.largeAndMediumPostStyles, Y.a.OverviewConversationsPost, s),
						style: {
							...Object(k.b)(),
							...Object(k.d)(e)
						}
					}, i.a.createElement(F.a, {
						isFirst: !0,
						isLast: w < 0,
						key: h.id
					}, !O && !!a && i.a.createElement(se, $({}, y, {
						commentId: a,
						key: h.id,
						profileName: P
					})), (O || C) && (p === J.g.Classic ? i.a.createElement(te, {
						availableWidth: t,
						eventFactory: n,
						inSubredditOrProfile: !1,
						isOverlay: !1,
						isScrolling: l,
						forceLoadMedia: r,
						last: m,
						onClickPost: u,
						onSizeChanged: b,
						pageLayer: x,
						postId: f,
						scrollerItemRef: v
					}) : i.a.createElement(ne, {
						availableWidth: t,
						eventFactory: n,
						isScrolling: l,
						isFrontpage: !1,
						forceLoadMedia: r,
						last: m,
						onClickPost: u,
						onSizeChanged: b,
						pageLayer: x,
						postId: f,
						scrollerItemRef: v
					}))), i.a.createElement(ee, {
						style: {
							background: Object(k.e)(e)
						}
					}, !d && g.map((e, t) => i.a.createElement(F.a, {
						isLast: t === w,
						key: `${t}-isLast[${t===w}]`
					}, e.map((t, s) => {
						const o = 0 === s,
							n = s === e.length - 1;
						return "comment" === t.type ? i.a.createElement(q.a, {
							commentId: t.id,
							depth: t.depth,
							isFirst: o,
							isLast: n,
							key: t.id,
							profileName: P,
							showModTools: !0
						}) : i.a.createElement(H, {
							extraCommentsId: t.id,
							key: t.id,
							profileName: P
						})
					})))))
				});
			var ie = Object(z.b)((function(e) {
					var t;
					const s = Object(G.a)(),
						o = Object(p.fb)();
					return i.a.createElement(re, $({
						theme: null !== (t = e.theme) && void 0 !== t ? t : s,
						currentProfileName: Object(p.i)(o),
						pageLayer: o
					}, e))
				})),
				ae = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				de = s("./src/reddit/helpers/trackers/post.ts"),
				ce = s("./src/reddit/selectors/tracking.ts"),
				le = s("./src/reddit/connectors/PostList/index.ts");
			const me = Object(d.c)({
					...le.d,
					postIds: S.O,
					viewportDataLoaded: ce.a
				}),
				pe = Object(le.c)(),
				ue = Object(a.b)(me, le.b, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(de.h)(e, t),
					postComponentForLayout: ({
						post: e
					}) => e.isBlank ? ae.a : ie
				}));
			var be = (e => Object(g.c)(pe(ue(e))))(C.a),
				xe = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				he = s("./node_modules/lodash/debounce.js"),
				fe = s.n(he),
				Pe = s("./src/reddit/actions/post.ts"),
				ve = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				ye = s("./src/lib/isUrl/index.ts"),
				Oe = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				Ce = s("./src/reddit/components/Media/index.tsx"),
				ge = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				je = s("./src/reddit/components/PostContainer/index.tsx"),
				Ee = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				we = s("./src/reddit/components/PostTitle/index.tsx"),
				Ne = s("./src/reddit/connectors/miniCardPost.ts"),
				Ie = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				_e = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				ke = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Se = s("./src/reddit/models/Media/index.ts"),
				Te = s("./node_modules/fbt/lib/FbtPublic.js"),
				Le = s("./src/reddit/components/CommentsLink/index.tsx"),
				Me = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				Fe = s("./src/reddit/components/Flatlist/index.tsx"),
				Ae = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				Be = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				Re = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				We = s("./src/reddit/components/ShareMenu/index.tsx"),
				Ve = s("./src/reddit/icons/fonts/Share/index.tsx"),
				De = s("./src/reddit/models/User/index.ts"),
				Ke = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				Ue = s.n(Ke);
			const He = "-MiniCardModMenu",
				qe = "-MiniCardOverflowMenu",
				ze = "-MiniCardShareMenu",
				Ge = w.a.wrapped(Me.a, "HorizontalVotes", Ue.a),
				Je = w.a.button("ShareButton", Ue.a),
				Xe = Object(p.u)({
					currentProfileName: p.i,
					isCommentPermalink: p.w,
					isCommentsPage: p.x,
					isProfilePostListing: p.L,
					pageLayer: e => e
				}),
				Ze = Object(d.c)({
					layout: p.R,
					subreddit: p.r
				});
			var Qe = Xe(Object(a.b)(Ze, {})(Object(g.c)(e => {
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
						modModeEnabled: x,
						onCommentsClick: h,
						post: f,
						sendEvent: P,
						showEditFlair: v,
						showEditPost: y,
						subreddit: O
					} = e, C = e => P(Object(de.h)(f.id, e)), g = f.postId, E = Object(Fe.d)(He, f.id, m, u), w = !!o && Object(De.e)(o) === f.author;
					return i.a.createElement("div", {
						className: Object(j.a)(Ue.a.flatlistContainer, s)
					}, i.a.createElement(Ge, {
						compact: !1,
						model: f,
						onVoteClick: n,
						scoreClassName: Ue.a.score
					}), i.a.createElement(Le.a, {
						hasModPostPerms: d,
						isCommentsPage: c,
						isCommentPermalink: l,
						isOverlay: m,
						postId: f.id,
						modModeEnabled: x,
						numComments: f.numComments,
						type: J.g.Compact,
						onClick: h
					}), i.a.createElement(We.a, {
						className: Ue.a.shareMenu,
						dropdownId: Object(Fe.d)(ze, f.id, m, u),
						permalink: f.permalink,
						post: f,
						sendEventWithName: C,
						subredditType: null == O ? void 0 : O.type
					}, i.a.createElement(Je, null, i.a.createElement(Ve.a, {
						className: Ue.a.shareIcon
					}), i.a.createElement("span", {
						className: Ue.a.shareText
					}, Te.fbt._("share", null, {
						hk: "mmJV5"
					})))), d && i.a.createElement(Ae.a, {
						dropdownId: E,
						onClick: () => C("post_mod_action_menu")
					}, i.a.createElement(Fe.b, {
						className: Ue.a.modActionsIcon
					}), i.a.createElement(Be.a, {
						canEditFlair: r && !!v,
						hasModPostPerms: d,
						hasModFullPerms: a,
						isOverlay: !!m,
						isPostAuthor: w,
						modModeEnabled: x,
						post: f,
						tooltipId: E
					})), i.a.createElement(Re.a, {
						currentProfileName: t,
						isCommentsPage: c,
						isOverlay: !!m,
						isProfilePostListing: p,
						layout: b,
						pageLayer: e.pageLayer,
						permalink: f.permalink,
						postId: g,
						dropdownId: Object(Fe.d)(qe, f.id, m, u),
						isFixed: u,
						sendEvent: P,
						showEditPost: !!y,
						showEditFlair: !!v,
						useFlatlistBreakpoints: Object(Re.b)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1
						})
					}))
				}))),
				Ye = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				$e = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				et = s("./src/reddit/components/MiniCardPost/index.m.less"),
				tt = s.n(et);
			var st = Object(p.u)()(Object(z.b)(Object(Ne.a)(Object(ve.a)(e => {
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
						post: x,
						scrollerItemRef: h,
						shouldPause: f,
						showMetaLine: P = !0,
						showEditFlair: v,
						subredditOrProfile: y,
						userIsOp: O
					} = e, {
						media: C
					} = n || x, g = C && C.type, E = Object(Ee.b)(x.id), w = g === Se.o.RTJSON, N = O && w, I = Object(ke.a)(p), _ = Object(Ie.a)(p), S = Object(_e.a)(p), T = C && g !== Se.o.RTJSON && g !== Se.o.TEXT, L = g === Se.o.VIDEO || g === Se.o.GIFVIDEO || g === Se.o.LIVEVIDEO, M = !C && !!x.source && Object(ye.a)(x.source.url), F = C && i.a.createElement(Ce.a, {
						autoplayPref: t,
						availableWidth: s,
						className: tt.a.media,
						imageBoxClassName: Object(j.a)(tt.a.mediaImageBox, {
							[tt.a.videoStyles]: L
						}),
						imageBoxContentImageClassName: tt.a.mediaImageBoxContentImage,
						forceAspectRatio: Se.c,
						isListing: !0,
						isMiniCard: !0,
						isNotCardView: !0,
						post: n || x,
						scrollerItemRef: h,
						shouldPause: f,
						shouldLoad: l,
						showCentered: !0,
						showFull: !1
					});
					return i.a.createElement(je.a, {
						className: Object(j.a)(tt.a.postContainer, Z.a.largeAndMediumActiveStyles, Z.a.largeAndMediumPostStyles, Object(k.a)(e), o),
						style: {
							...Object(k.b)(e.flairStyleTemplate),
							...Object(k.d)(e)
						},
						post: x,
						onClick: b,
						eventFactory: d
					}, i.a.createElement(ge.a, {
						className: tt.a.backgroundWrapper,
						flairStyleTemplate: c
					}, T && F, i.a.createElement("div", {
						className: tt.a.innerContainer
					}, M && i.a.createElement($e.a, {
						post: x,
						templatePlaceholderImage: c ? c.postPlaceholderImage : void 0
					}), i.a.createElement(we.c, {
						className: tt.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: x,
						size: we.b.Large,
						titleColor: c && c.postTitleColor
					}), P && y && i.a.createElement(Ye.a, {
						className: tt.a.metaLine,
						crosspostSubredditOrProfile: r,
						hideNSFWPref: m,
						post: x,
						subredditOrProfile: y
					}), !T && i.a.createElement("div", {
						className: tt.a.mediaWrapper
					}, F), i.a.createElement("div", {
						className: tt.a.flexSpacer
					}), i.a.createElement(Qe, {
						currentUser: a,
						handleVote: e.handleVote,
						hasModFlairPerms: _,
						hasModFullPerms: S,
						hasModPostPerms: I,
						modModeEnabled: u,
						post: x,
						showEditFlair: v,
						showEditPost: N
					}))), e.activeModalId === E && i.a.createElement(Ee.a, {
						flairs: x.flair,
						subredditId: x.belongsTo.id,
						modalId: E,
						onFlairChanged: e.onFlairChanged
					}), i.a.createElement(Oe.d, null))
				})))),
				ot = s("./src/reddit/helpers/getClickInfo.ts"),
				nt = s("./src/reddit/helpers/localStorage/index.ts"),
				rt = s("./src/reddit/selectors/user.ts"),
				it = s("./src/reddit/icons/fonts/index.tsx"),
				at = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less"),
				dt = s.n(at);
			const {
				fbt: ct
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var lt = e => i.a.createElement("div", {
					className: Object(j.a)(dt.a.container, e.className)
				}, i.a.createElement(it.a, {
					name: "pin",
					className: dt.a.pin
				}), i.a.createElement("div", {
					className: dt.a.title
				}, ct._("Show off that karma!", null, {
					hk: "2yqUT7"
				})), e.children),
				mt = s("./src/reddit/controls/TextButton/index.tsx"),
				pt = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less"),
				ut = s.n(pt);
			const {
				fbt: bt
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var xt = e => i.a.createElement(lt, {
					className: Object(j.a)(ut.a.container, e.className)
				}, i.a.createElement("div", {
					className: ut.a.description
				}, bt._('Pin a post from your feed using the "..." at the bottom of each post', null, {
					hk: "4lkJRB"
				})), i.a.createElement(mt.a, {
					className: ut.a.gotIt,
					onClick: e.onGotItClick
				}, bt._("OK, I got it", null, {
					hk: "1JMx7x"
				}))),
				ht = s("./src/reddit/components/ProfilePinnedPosts/index.m.less"),
				ft = s.n(ht);
			const {
				fbt: Pt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), vt = 320, yt = 300, Ot = Object(d.c)({
				arePinnedPostsLoaded: S.a,
				currentUser: rt.k,
				pinnedPostIds: S.P
			}), Ct = Object(a.b)(Ot, e => ({
				openPost: t => e(Object(Pe.L)(t))
			}));
			class gt extends i.a.Component {
				constructor() {
					super(...arguments), this.containerRef = null, this.state = {
						showEducation: !1,
						pauseMedia: !1
					}, this.setContainerRef = e => this.containerRef = e, this.handleScroll = fe()(() => {
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
						Object(nt.Pb)(), this.setState({
							showEducation: !1
						})
					}, this.onClickPost = (e, t) => {
						this.props.openPost({
							postOrComment: t,
							clickInfo: Object(ot.a)(e)
						})
					}, this.renderPost = e => i.a.createElement(st, {
						postId: e,
						key: e,
						availableWidth: vt,
						className: Object(j.a)(ft.a.item, ft.a.miniCardPost),
						forceLoadMedia: !this.state.pauseMedia,
						onClickPost: this.onClickPost,
						shouldPause: this.state.pauseMedia
					})
				}
				componentDidMount() {
					this.setState({
						showEducation: !Object(nt.M)()
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
						className: ft.a.title
					}, Pt._("Pinned posts", null, {
						hk: "3prRc3"
					})), r ? i.a.createElement(xt, {
						className: Object(j.a)(ft.a.item, ft.a.education),
						onGotItClick: this.onGotItClick
					}) : i.a.createElement("div", {
						ref: this.setContainerRef,
						className: ft.a.container
					}, t.map(this.renderPost), a && i.a.createElement(lt, {
						className: ft.a.item
					})), s)
				}
			}
			var jt = Object(p.u)()(Ct(gt)),
				Et = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				wt = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				Nt = s("./src/reddit/helpers/name/index.ts"),
				It = s("./src/reddit/helpers/trackers/screenview.ts"),
				_t = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				kt = s("./src/reddit/layout/page/Listing/index.tsx"),
				St = s("./src/reddit/models/ContentGate.ts"),
				Tt = s("./src/reddit/pages/ErrorPages/index.tsx"),
				Lt = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");

			function Mt() {
				return (Mt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Ft = (e, {
					location: t
				}) => n()([...Object(c.a)(t.search)]),
				At = Object(p.u)(),
				Bt = Object(d.a)(p.E, rt.eb, Ft, p.R, (e, {
					match: t
				}) => t.params.profileName, (e, {
					match: t
				}) => t.params.sort, (e, {
					match: t
				}) => Object(B.j)(e, {
					profileName: t.params.profileName
				}), (e, t) => Object(h.a)(e, Ft(0, t)), (e, {
					match: t
				}) => !Object(S.n)(e, {
					profileName: t.params.profileName
				}), rt.K, (e, {
					match: t
				}) => Object(rt.f)(e, u.jc + t.params.profileName), Lt.a, (e, t, s, o, n, r, i, {
					sort: a,
					t: d
				}, c, l, p, b) => {
					const x = u.ub,
						h = Object(m.a)(n, x, a, s),
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
						profileName: n,
						shouldShowPinnedPostsSection: c && !f,
						sort: a,
						timeSort: d,
						isEligibleForNsfwSignupUpsellTreatment: b
					}
				}),
				Rt = Object(a.b)(Bt, (e, t) => ({
					onLoadMoreConversationsItems: () => e(f.h({
						profileName: t.match.params.profileName,
						sort: t.match.params.sort
					})),
					onLayoutChange: () => e(Object(x.profileOverviewRequested)({
						...t.match,
						queryParams: n()([...Object(c.a)(t.location.search)])
					}))
				}));
			class Wt extends i.a.Component {
				constructor() {
					super(...arguments), this.renderNoPosts = () => i.a.createElement(v.c, {
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
						timeSort: b,
						isEligibleForNsfwSignupUpsellTreatment: x
					} = this.props;
					if (!a) return null;
					if (e && e.profileDeleted) return i.a.createElement(P.default, {
						contentGateType: St.a.ProfileDeleted,
						profileName: d
					});
					if (e && e.profileSuspended) return i.a.createElement(P.default, {
						contentGateType: St.a.ProfileSuspended,
						profileName: d
					});
					if (451 === a.status || e && e.profileBlockedForLegalReason) return i.a.createElement(P.default, {
						contentGateType: St.a.ProfileBlockedForLegalReason,
						profileName: d
					});
					if (403 === a.status) return i.a.createElement(Tt.a, null);
					if (404 === a.status) return i.a.createElement(P.default, {
						contentGateType: St.a.ProfileDoesNotExist,
						profileName: d
					});
					if (!d) return null;
					const h = d.toLowerCase(),
						f = `/user/${d}/`,
						v = {
							listingKey: n,
							listingName: h
						};
					if (o && !s && x) return i.a.createElement(wt.a, {
						contentTitle: Object(Nt.d)(d)
					});
					if (!t && o && !s) return i.a.createElement(P.default, {
						subredditName: d,
						contentGateType: St.a.Nsfw
					});
					const C = {
							inSubredditOrProfile: !Object(l.a)(d),
							listingKey: n,
							listingName: h,
							listingViewed: (e, t) => Object(It.q)(n, c, t, e, b),
							noPostsComponent: this.renderNoPosts,
							onScroll: p,
							onTryAgain: r
						},
						g = {
							sort: c,
							baseUrl: f,
							sortOptions: u.Ab,
							timeSort: b
						},
						j = i.a.createElement(i.a.Fragment, null, m && i.a.createElement(jt, {
							profileName: d
						}), i.a.createElement(y.a, g), i.a.createElement(be, Mt({}, C, {
							excludePinnedPosts: m,
							onLoadMore: this.props.onLoadMoreConversationsItems
						})));
					return i.a.createElement(kt.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(xe.a, {
							profileName: d
						})),
						content: i.a.createElement(i.a.Fragment, null, i.a.createElement(O.a, null), j),
						sidebar: i.a.createElement(Et.a, Mt({}, v, {
							profileName: d
						}))
					})
				}
			}
			t.default = At(Rt(Object(b.a)(Object(_t.d)(Wt))))
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
					experimentName: o.yc
				});
				return !(!t || Object(o.wf)(t))
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
				return x
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
						[n.Zb.Bottom_cell_dismissible]: e,
						[n.Zb.Bottom_cell_dismissible_immediate_trigger]: e,
						[n.Zb.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = c(n.pb, !0),
				m = c(n.qb, !0),
				p = c(n.rb, !0),
				u = c(n.pb, !1),
				b = c(n.qb, !1),
				x = c(n.rb, !1)
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
					return Boolean(t) && !Object(n.wf)(t)
				},
				d = Object(o.a)(a, r.d, (e, t) => e && !t)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileOverview.c6401d558aa8f3a5c8bb.js.map