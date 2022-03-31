// https://www.redditstatic.com/desktop2x/ProfileFollowersPage.6a144bcad32dce72b77b.js
// Retrieved at 3/31/2022, 4:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileFollowersPage", "ProfileFollowersAction"], {
		"./node_modules/lodash/take.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseSlice.js"),
				s = n("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, n) {
				return e && e.length ? (t = n || void 0 === t ? 1 : s(t), r(e, 0, t < 0 ? 0 : t)) : []
			}
		},
		"./src/lib/makeOverviewConversationsItemKey/index.ts": function(e, t, n) {
			"use strict";
			t.a = (e, t) => {
				return `overviewConversations--[profile:'${t}']--[post:'${e}']`
			}
		},
		"./src/reddit/actions/pages/followers/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "f", (function() {
				return d
			}));
			const r = "PROFILE_FOLLOWERS_PAGE_LOADED",
				s = "MORE_PROFILE_FOLLOWERS_LOADED",
				i = "PROFILE_FOLLOWERS_SEARCH_LOADED",
				o = "PROFILE_FOLLOWERS_REQUEST_PENDING",
				a = "PROFILE_FOLLOWERS_REQUEST_FAILED",
				d = "FOLLOW_USER_SUCCESS"
		},
		"./src/reddit/actions/pages/followers/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "profileFollowersPageLoaded", (function() {
				return f
			})), n.d(t, "moreProfileFollowersLoaded", (function() {
				return v
			})), n.d(t, "profileFollowersSearchLoaded", (function() {
				return g
			})), n.d(t, "profileFollowersRequestPending", (function() {
				return x
			})), n.d(t, "profileFollowersPageFailed", (function() {
				return C
			})), n.d(t, "DEFAULT_VARIABLES", (function() {
				return y
			})), n.d(t, "followersPageRequested", (function() {
				return I
			})), n.d(t, "followersRequested", (function() {
				return E
			})), n.d(t, "followUserToggled", (function() {
				return w
			})), n.d(t, "toggleFollowUser", (function() {
				return O
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				o = (n("./src/reddit/actions/pages/profileOverview/index.ts"), n("./src/reddit/actions/toaster.ts")),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/redditGQL/operations/ProfileFollowers.json");
			var l = n("./src/reddit/endpoints/subreddit/subscriptions.ts");
			var c = e => {
					var t, n;
					if (!e.identity || !e.identity.followedByRedditorsInfo) return;
					const r = {},
						{
							followedByRedditorsInfo: s,
							redditor: i
						} = e.identity,
						{
							moderatedSubreddits: o
						} = i,
						{
							edges: a,
							pageInfo: d
						} = s;
					if (!a) return;
					r.pageInfo = {
						...d,
						endCursor: null !== (t = d.endCursor) && void 0 !== t ? t : null
					};
					const l = [],
						c = {};
					for (const u of a)
						if ("Redditor" === (null === (n = null == u ? void 0 : u.node) || void 0 === n ? void 0 : n.__typename)) {
							const {
								id: e
							} = u.node;
							l.push(e), c[e] = u.node
						} return r.followerUserIds = l, r.followers = c, r
				},
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/actions/pages/followers/constants.ts"),
				p = n("./src/lib/initializeClient/installReducer.ts"),
				h = n("./src/reddit/reducers/pages/followers/index.ts"),
				b = n("./src/reddit/selectors/followers.ts");
			Object(p.a)({
				pages: {
					followers: h.a
				}
			});
			const f = Object(i.a)(m.b),
				v = Object(i.a)(m.a),
				g = Object(i.a)(m.e),
				x = Object(i.a)(m.d),
				C = Object(i.a)(m.c),
				y = {
					includeIdentity: !1,
					first: null,
					after: null,
					searchQuery: null
				},
				I = e => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					var s;
					const i = [];
					(null === (s = Object(b.a)(t())) || void 0 === s ? void 0 : s.length) || i.push(e(E(y))), await Promise.all(i)
				}, E = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					const i = !n().user.account,
						l = {
							...y,
							...e,
							includeIdentity: i
						};
					t(x());
					const u = await (async (e, t) => {
						return await Object(a.a)(e, {
							...d,
							variables: t
						})
					})(s(), l);
					if (u.ok && u.body) {
						const {
							data: n
						} = u.body, r = c(n);
						if (!r) return t(Object(o.d)()), void t(C());
						(null == e ? void 0 : e.searchQuery) ? t(g(r)): (null == e ? void 0 : e.after) ? t(v(r)) : (null == e ? void 0 : e.after) || (null == e ? void 0 : e.searchQuery) || t(f(r))
					}
					u.ok || (t(Object(o.d)()), t(C()))
				}, w = Object(i.a)(m.f), O = (e, t) => async (n, i, a) => {
					let {
						apiContext: d
					} = a;
					var c, m;
					const p = null === (m = null === (c = i().pages) || void 0 === c ? void 0 : c.followers) || void 0 === m ? void 0 : m.models[e];
					if (!p) return;
					n(w({
						userId: e,
						isFollowed: t
					}));
					const h = p.name;
					if ((await Object(l.c)(d(), {
							subredditNames: [`${s.jc}${p.name}`],
							subscribe: t
						})).ok) {
						n(w({
							userId: e,
							isFollowed: t
						}));
						const s = r.fbt._("Sucсessfully followed {userName}", [r.fbt._param("userName", h)], {
								hk: "1AYBqL"
							}),
							i = r.fbt._("Sucсessfully unfollowed {userName}", [r.fbt._param("userName", h)], {
								hk: "4F2yCK"
							});
						n(Object(o.f)({
							text: t ? s : i
						}))
					} else {
						const s = r.fbt._("Something went wrong", null, {
							hk: "3i6szH"
						});
						n(w({
							userId: e,
							isFollowed: !t
						})), n(Object(o.f)(Object(o.e)(s, u.b.Error)))
					}
				}
		},
		"./src/reddit/actions/pages/profileOverview/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "profileOverviewConversationsPending", (function() {
				return Oe
			})), n.d(t, "profileOverviewConversationsLoaded", (function() {
				return Se
			})), n.d(t, "profileOverviewConversationsFailed", (function() {
				return _e
			})), n.d(t, "profileOverviewChronoPending", (function() {
				return je
			})), n.d(t, "profileOverviewChronoLoaded", (function() {
				return Ne
			})), n.d(t, "profileOverviewChronoFailed", (function() {
				return ke
			})), n.d(t, "profileOverviewConversationsRequested", (function() {
				return Pe
			})), n.d(t, "profileOverviewRequested", (function() {
				return Te
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/pick.js"),
				s = n.n(r),
				i = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/moderatingSubreddits.ts"),
				a = n("./src/reddit/actions/pages/profileShared.ts"),
				d = n("./src/reddit/actions/subreddit.ts"),
				l = n("./src/config.ts"),
				c = n("./src/lib/addAllowQuarantinedParam/index.ts"),
				u = n("./src/lib/makeApiRequest/index.ts"),
				m = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				h = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var b = n("./src/reddit/helpers/post/index.ts"),
				f = n("./src/reddit/constants/postLayout.ts"),
				v = n("./src/reddit/constants/parameters.ts"),
				g = n("./src/reddit/contexts/PageLayer/index.tsx"),
				x = n("./src/reddit/selectors/listings.ts"),
				C = n("./src/reddit/selectors/profile.ts"),
				y = n("./src/reddit/selectors/user.ts"),
				I = n("./src/lib/makeActionCreator/index.ts"),
				E = n("./src/reddit/actions/changeUsername.ts"),
				w = n("./src/reddit/actions/contentGate.ts"),
				O = n("./src/reddit/actions/externalAccount.ts"),
				S = n("./src/reddit/actions/gold/powerups.ts"),
				_ = n("./src/reddit/actions/pinnedPost.ts"),
				j = n("./src/reddit/actions/platform.ts"),
				N = n("./src/reddit/actions/profile/index.ts"),
				k = n("./src/reddit/actions/trophyCase.ts"),
				P = n("./src/reddit/constants/errors.ts"),
				T = n("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				R = n("./src/reddit/helpers/timeApiRoute/index.ts"),
				M = n("./src/reddit/actions/pages/profileOverview/constants.ts"),
				F = n("./src/lib/initializeClient/installReducer.ts"),
				A = n("./node_modules/redux/es/redux.js"),
				L = n("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const B = {};
			var U = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case M.c:
					case M.b:
					case L.c:
					case L.b: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case M.a:
					case L.a: {
						const {
							key: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const H = {};
			var W = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case M.c:
						case L.c: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case M.b:
						case M.a:
						case L.b:
						case L.a: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				D = Object(A.c)({
					error: U,
					pending: W
				});
			const V = {};
			var z = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case M.b: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: {}
						}
					}
					case L.b: {
						const {
							key: n,
							fetchedToken: r
						} = t.payload, s = e[n];
						return {
							...e,
							[n]: {
								...s,
								[r]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const K = {};
			var G = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case M.b:
						case L.b: {
							const {
								key: n,
								overviewIds: r
							} = t.payload, s = e[n] || [];
							return {
								...e,
								[n]: [...s, ...r]
							}
						}
						default:
							return e
					}
				},
				q = n("./src/lib/omitKey/index.ts");
			const Z = {};
			var Q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case M.b:
						case L.b: {
							const {
								key: n,
								dist: r,
								token: s
							} = t.payload;
							return s ? {
								...e,
								[n]: {
									dist: r,
									token: s
								}
							} : Object(q.a)(e, n)
						}
						default:
							return e
					}
				},
				Y = Object(A.c)({
					api: D,
					fetchedTokens: z,
					ids: G,
					loadMore: Q
				});
			const J = {};
			var X = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case M.f:
					case M.e: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case M.d: {
						const {
							key: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r || {}
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
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case M.e:
						case M.d: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				te = Object(A.c)({
					error: X,
					pending: ee
				}),
				ne = n("./src/reddit/actions/profileConversations.ts");
			const re = {};
			var se = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : re,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.c:
					case ne.b: {
						const {
							extraCommentsId: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case ne.a: {
						const {
							extraCommentsId: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r || {}
						}
					}
					default:
						return e
				}
			};
			const ie = {};
			var oe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ie,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ne.c: {
							const {
								extraCommentsId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case ne.b:
						case ne.a: {
							const {
								extraCommentsId: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				ae = Object(A.c)({
					error: se,
					pending: oe
				});
			const de = {};
			var le = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : de,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case M.e:
						case ne.b:
						case ne.e:
							return {
								...e, ...t.payload.extraComments
							};
						default:
							return e
					}
				},
				ce = Object(A.c)({
					api: ae,
					models: le
				}),
				ue = n("./node_modules/lodash/mapValues.js"),
				me = n.n(ue),
				pe = n("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				he = n("./src/reddit/constants/comments.ts");
			const be = {};

			function fe(e) {
				const t = e;
				return me()(t, e => {
					let {
						depth: t,
						next: n,
						prev: r
					} = e;
					return {
						depth: t,
						next: n,
						prev: r
					}
				})
			}
			const ve = (e, t, n) => {
				const r = {};
				for (const s in t) {
					const e = t[s],
						n = e.postId;
					r.hasOwnProperty(n) ? r[n] = {
						...r[n],
						[s]: e
					} : r[n] = {
						[s]: e
					}
				}
				for (const s in n) {
					const e = n[s],
						t = e.postId;
					r.hasOwnProperty(t) ? r[t] = {
						...r[t],
						[s]: e
					} : r[t] = {
						[t]: e
					}
				}
				return r
			};
			var ge = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : be,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case M.e:
					case ne.e: {
						const {
							comments: n,
							extraComments: r,
							postIds: s,
							profileName: i
						} = t.payload, o = ve(s, n, r), a = {};
						for (const e of s) {
							a[Object(pe.a)(e, i)] = o.hasOwnProperty(e) ? fe(o[e]) : {}
						}
						return {
							...e,
							...a
						}
					}
					case ne.b: {
						const {
							comments: n,
							commentLists: r,
							extraComments: s,
							extraCommentsId: i,
							postIds: o,
							profileName: a
						} = t.payload;
						if (0 === o.length) {
							const t = Object.keys(e).find(t => void 0 !== e[t][i]);
							if (!t) return e;
							const n = {
									...e[t]
								} [i].prev,
								r = n && n.id || "";
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
						const d = o[0],
							l = fe(ve(o, n, s)[d]),
							c = Object(pe.a)(d, a),
							u = {
								...e[c]
							},
							m = u[i].prev,
							p = m && m.id || "",
							h = r[d].head,
							b = h && h.id || "",
							f = {
								id: b,
								type: he.a.Comment
							},
							v = {
								...u,
								[p]: {
									...u[p],
									next: f
								},
								...l,
								[b]: {
									...l[b],
									prev: m
								}
							};
						return {
							...e,
							[c]: v
						}
					}
					default:
						return e
				}
			};
			const xe = {};
			var Ce = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case M.e:
					case ne.e: {
						const {
							commentLists: n,
							postIds: r,
							profileName: s
						} = t.payload, i = {};
						for (const e of r) {
							i[Object(pe.a)(e, s)] = n[e] && n[e].head ? n[e].head.id : null
						}
						return {
							...e,
							...i
						}
					}
					default:
						return e
				}
			};
			const ye = {};
			var Ie = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ye,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case M.e:
						case ne.e: {
							const {
								postIds: n,
								profileName: r
							} = t.payload, s = {};
							for (const e of n) {
								s[Object(pe.a)(e, r)] = e
							}
							return {
								...e,
								...s
							}
						}
						default:
							return e
					}
				},
				Ee = Object(A.c)({
					api: te,
					extraComments: ce,
					keyToCommentThreadLinkSets: ge,
					keyToHeadCommentId: Ce,
					keyToPostId: Ie
				}),
				we = Object(A.c)({
					chrono: Y,
					conversations: Ee
				});
			Object(F.a)({
				pages: {
					profileOverview: we
				}
			});
			const Oe = Object(I.a)(M.f),
				Se = Object(I.a)(M.e),
				_e = Object(I.a)(M.d),
				je = Object(I.a)(M.c),
				Ne = Object(I.a)(M.b),
				ke = Object(I.a)(M.a),
				Pe = (e, t, n, r) => async (r, s, o) => {
					const a = s(),
						d = !!a.listings.postOrder.ids[e],
						f = !!Object(x.c)(a, {
							listingKey: e
						});
					if (!!Object(x.d)(a, {
							listingKey: e
						}) || d && !f) return;
					r(Oe({
						key: e
					}));
					const v = await Object(R.a)("profile", () => ((e, t, n) => Object(u.a)(e, {
							data: n,
							endpoint: Object(m.a)(Object(c.a)(Object(p.a)(Object(h.a)(`${l.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
							traceRequestName: "get_profile_conversations",
							method: i.jb.GET
						}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
							...e,
							body: {
								...e.body,
								pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
							}
						} : e))(o.apiContext(), t, n)),
						g = v.body;
					await Object(b.a)(o.gqlContext, g.posts).then(e => g.posts = e);
					const {
						pinned: y,
						postIds: I
					} = g;
					if (v.ok) {
						r(Se({
							key: e,
							meta: a.meta,
							profileName: t,
							...g,
							postIds: I
						}));
						const n = Object(C.m)(s(), t);
						r(Object(_.h)({
							profileId: n,
							pinned: y
						}))
					} else r(_e({
						account: v.body.data ? v.body.data.account : null,
						error: v.body.reason ? {
							type: v.body.reason
						} : v.error,
						key: e
					})), v.body.reason === P.a.DeletedProfile && r(Object(w.s)({
						profileName: t
					})), r(Object(j.n)(v.status))
				}, Te = e => async (t, n, r) => {
					const {
						queryParams: l,
						params: c
					} = e, {
						sort: u,
						t: m
					} = Object(a.a)(n(), l), {
						profileName: p
					} = c;
					let h = !1;
					const b = f.e[Object(g.R)(n(), {})],
						x = p.toLowerCase(),
						I = {
							...s()(e.queryParams, v.m),
							sort: u,
							layout: b,
							t: m
						},
						w = [t(N.d(x))],
						_ = Object(T.a)(x, i.ub, u, e.queryParams);
					if (n().listings.postOrder.ids[_] && !n().listings.postOrder.api.error[_] ? h = !0 : w.push(t(Pe(_, x, I, !0))), w.push(t(Object(o.b)())), await Promise.all(w), h) return;
					const P = n();
					if (!P.platform.currentPage) return;
					if (200 !== P.platform.currentPage.status) return;
					const R = Object(C.m)(n(), x),
						M = Object(y.yb)(P, {
							userName: p
						}).id;
					t(j.m({
						title: Re(n(), p)
					})), Object(y.R)(P) && Object(y.V)(P, p) && t(Object(E.f)());
					const F = [t(Object(d.q)()), t(k.b(x, R)), t(N.b(x)), t(O.o(p)), t(N.g(p)), t(S.l(p, M))];
					await Promise.all(F)
				}, Re = (e, t) => Object(C.q)(e, {
					profileName: t
				})
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return $
			})), n.d(t, "d", (function() {
				return re
			})), n.d(t, "b", (function() {
				return oe
			})), n.d(t, "e", (function() {
				return ae
			})), n.d(t, "a", (function() {
				return de
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/get.js"),
				i = n.n(s),
				o = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/apiRequestState.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/subreddit.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/modals.ts"),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				h = n("./src/lib/omitHeaders/index.ts"),
				b = n("./src/reddit/constants/headers.ts"),
				f = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				v = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const g = (e, t, n) => Object(p.a)(Object(h.a)(e, [b.a]), {
				endpoint: Object(f.a)(Object(v.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: m.jb.GET,
				data: n
			});
			var x = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				C = n("./src/reddit/models/SubredditModeration/index.ts"),
				y = n("./src/reddit/models/Toast/index.ts"),
				I = n("./src/reddit/selectors/activeModalId.ts"),
				E = n("./src/reddit/selectors/bannedUser.ts"),
				w = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				S = n("./src/reddit/actions/subredditModeration/constants.ts"),
				_ = n("./src/lib/initializeClient/installReducer.ts"),
				j = n("./node_modules/redux/es/redux.js");
			var N = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case S.o:
					case S.n:
						return null;
					case S.m:
						return t.payload;
					default:
						return e
				}
			};
			const k = {};
			var P = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case S.o: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(C.e)(n, r);
							return {
								...e,
								[s]: !0
							}
						}
						case S.n:
						case S.m: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(C.e)(n, r);
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				T = Object(j.c)({
					error: N,
					pending: P
				});
			const R = {};
			var M = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case S.n: {
							const {
								fetchedToken: n,
								subredditId: r
							} = t.payload, s = Object(C.e)(r, n);
							return {
								...e,
								[s]: !0
							}
						}
						default:
							return e
					}
				},
				F = n("./src/reddit/actions/inContextModeration.ts");
			var A = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case F.a:
						return t.payload;
					default:
						return e
				}
			};
			const L = {};
			var B = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case S.n: {
							const {
								subredditId: e,
								after: n
							} = t.payload;
							return {
								[e]: n
							}
						}
						default:
							return e
					}
				},
				U = n("./node_modules/icepick/icepick.js");
			const H = {};
			var W = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case S.l:
					case S.n: {
						const {
							subredditId: n,
							bannedUsers: r
						} = t.payload;
						return Object(U.merge)(e, {
							[n]: r
						})
					}
					case S.s: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(U.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			var D = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case S.r:
					case S.q:
						return null;
					case S.p:
						return t.payload;
					default:
						return e
				}
			};
			var V = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case S.r:
							return !0;
						case S.q:
						case S.p:
							return !1;
						default:
							return e
					}
				},
				z = Object(j.c)({
					error: D,
					pending: V
				});
			var K = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case S.r:
						case S.p:
							return null;
						case S.q: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				G = Object(j.c)({
					api: z,
					result: K
				});
			const q = {};
			var Z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case S.n: {
							const {
								subredditId: n,
								bannedUserIds: r
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...r]
							} : {
								...e,
								[n]: r
							}
						}
						case S.s: {
							const {
								subredditId: n,
								userId: r
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== r)
							}
						}
						case S.l: {
							const {
								subredditId: n,
								bannedUserIds: r
							} = t.payload, s = r[0];
							return s && e[n] && -1 === e[n].indexOf(s) ? {
								[n]: [s, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				Q = Object(j.c)({
					api: T,
					fetchedTokens: M,
					inContext: A,
					loadMore: B,
					models: W,
					search: G,
					userOrder: Z
				});
			Object(_.a)({
				features: {
					banned: Q
				}
			});
			const Y = Object(o.a)(S.o),
				J = Object(o.a)(S.n),
				X = Object(o.a)(S.m),
				$ = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (n, r, s) => {
						let {
							apiContext: i
						} = s;
						const o = r(),
							a = t.after || "",
							d = Object(C.e)(e, a),
							l = o.features.banned.fetchedTokens[d];
						if (o.features.banned.api.pending[d] || l) return;
						n(Y({
							subredditId: e,
							fetchedToken: a
						}));
						const c = o.subreddits.models[e].name,
							u = await g(i(), c, t);
						u.ok ? n(J({
							...u.body,
							fetchedToken: a
						})) : n(X({
							subredditId: e,
							fetchedToken: a
						}))
					}
				},
				ee = Object(o.a)(S.r),
				te = Object(o.a)(S.q),
				ne = Object(o.a)(S.p),
				re = (e, t) => async (n, r, s) => {
					let {
						apiContext: i
					} = s;
					const o = r().subreddits.models[e].name,
						a = {
							username: Object(x.a)(t)
						};
					n(ee());
					const d = await g(i(), o, a);
					d.ok ? n(te(d.body)) : n(ne(d.error))
				}, se = Object(o.a)(S.l), ie = Object(o.a)(S.s), oe = (e, t, n) => async (s, o, d) => {
					let {
						apiContext: l
					} = d;
					const u = o(),
						f = u.subreddits.models[e].url,
						v = u.subreddits.models[e].name;
					t.username = Object(x.a)(t.username), s(Object(a.h)(n));
					const C = await ((e, t, n) => Object(p.a)(Object(h.a)(e, [b.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: m.jb.POST,
						data: {
							api_type: "json",
							ban_reason: n.reason,
							ban_message: n.banMessage,
							duration: n.duration,
							name: n.username,
							note: n.modNote,
							ban_context: n.contextId,
							type: "banned"
						}
					}))(l(), f, t);
					if (C.ok) {
						s(Object(a.e)(n));
						const e = {
							username: t.username
						};
						s(Object(c.f)({
							kind: y.b.SuccessMod,
							text: r.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const i = await g(l(), v, e);
						i.ok && s(se(i.body))
					} else {
						s(Object(a.f)(n, C.error));
						const e = i()(C, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						s(Object(c.f)({
							kind: y.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ae = (e, t) => async (n, s, o) => {
					let {
						apiContext: a
					} = o;
					const d = s().subreddits.models[e].url,
						l = await ((e, t, n) => Object(p.a)(Object(h.a)(e, [b.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: m.jb.POST,
							data: {
								api_type: "json",
								id: n,
								type: "banned"
							}
						}))(a(), d, t);
					if (l.ok) n(ie({
						subredditId: e,
						userId: t
					})), n(Object(c.f)({
						kind: y.b.SuccessMod,
						text: r.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = i()(l, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(c.f)({
							kind: y.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, de = (e, t) => async (n, r) => {
					const s = r();
					await Promise.all([(async () => {
						if (!Object(I.b)(u.a.BAN_USER)(s) && !Object(w.P)(s, {
								subredditId: e
							})) {
							const t = Object(w.S)(s, {
								subredditId: e
							});
							await n(Object(l.o)(t.name))
						}
					})(), (async () => {
						const r = Object(O.yb)(s, {
							userName: t
						});
						if (!r) return;
						const i = Object(E.h)(s, {
							subredditId: e
						});
						i && i[r.id] || await n($(e, {
							username: t
						}))
					})()]), n(Object(d.i)(u.a.BAN_USER))
				}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r, s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/actions/chat/toggle.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(r || (r = {}));
			const u = e => {
				let {
					onStartChat: t,
					text: n,
					className: s,
					sendEvent: o,
					contextId: a,
					priority: d,
					Icon: u,
					redditStyle: m,
					isFullWidth: p,
					eventSource: h,
					onClick: b,
					onAddUserToQuickReplyList: f,
					children: v,
					style: g
				} = e;
				return i.a.createElement(l.t, {
					onClick: e => {
						if (b && b(e), t(), h === r.awardNotification) return f();
						o(Object(c.b)(a))
					},
					className: s,
					text: n,
					priority: d,
					Icon: u,
					redditStyle: m,
					isFullWidth: p,
					style: g
				}, v)
			};
			u.displayName = "ChatButton";
			const m = Object(o.b)(null, (e, t) => {
				let {
					contextId: n,
					userId: r
				} = t;
				return {
					onStartChat: () => {
						e(Object(a.b)(r, n))
					},
					onAddUserToQuickReplyList: () => {
						e(Object(a.a)(r))
					}
				}
			});
			t.b = m(Object(d.c)(u))
		},
		"./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(r.a)({
				resolved: {},
				chunkName: () => "NftProfileUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~NftProfileUnit"), n.e("NftProfileUnit")]).then(n.bind(null, "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = s
		},
		"./src/reddit/components/EditableImage/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_27zThB3Syksyv8gLdDJqep",
				container: "_27zThB3Syksyv8gLdDJqep",
				HitBox: "_1RlGOQJAoxE66cPOVTH0s",
				hitBox: "_1RlGOQJAoxE66cPOVTH0s",
				Image: "_1te2cn6lvn-YtGSv-hrM7g",
				image: "_1te2cn6lvn-YtGSv-hrM7g",
				ImageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				imageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				ImageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				imageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				LoadingIcon: "_3syvcMeczod-NOIewWIb8n",
				loadingIcon: "_3syvcMeczod-NOIewWIb8n",
				EditButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				editButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				profileCard: "eHsnwmpOgtfnBAgrWXQKq",
				EditIcon: "_3X4DuB4IpAlTY0XMdSI5q6",
				editIcon: "_3X4DuB4IpAlTY0XMdSI5q6"
			}
		},
		"./src/reddit/components/EditableImage/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/ImageInput/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/models/ApiRequestState/index.ts"),
				u = n("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				m = n("./src/reddit/components/EditableImage/index.m.less"),
				p = n.n(m);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					altText: t,
					children: n,
					className: r,
					isProfileCard: m,
					isLoading: h,
					imageUrl: b,
					onFileSelected: f
				} = e;
				const v = Object(i.e)(u.a);
				return s.a.createElement("div", {
					className: Object(o.a)(p.a.Container, r)
				}, s.a.createElement("label", {
					className: p.a.HitBox
				}, s.a.createElement("span", {
					className: p.a.ImageContainer,
					role: "presentation"
				}, b ? s.a.createElement("img", {
					alt: t,
					className: p.a.Image,
					src: b
				}) : n), s.a.createElement(a.a, {
					className: p.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(c.b)();
						f(e, t)
					},
					isPending: v ? h : void 0
				}), !h && s.a.createElement("div", {
					className: Object(o.a)(p.a.EditButton, {
						[p.a.profileCard]: m
					})
				}, s.a.createElement(l.a, {
					name: "add_media",
					className: p.a.EditIcon
				}))), h && s.a.createElement(d.a, {
					className: p.a.LoadingIcon,
					sizePx: 80
				}))
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/snoovatarModal.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/selectors/commentSelector.ts"),
				u = n("./src/reddit/selectors/experiments/cnc/index.ts"),
				m = n("./src/reddit/selectors/gold/awardIcon.ts"),
				p = n("./src/reddit/selectors/moderatorPermissions.ts"),
				h = n("./src/reddit/selectors/modUserNotes.ts"),
				b = n("./src/reddit/selectors/posts.ts"),
				f = n("./src/reddit/selectors/profile.ts"),
				v = n("./src/reddit/selectors/structuredStyles.ts"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				x = n("./src/reddit/selectors/tooltip.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/selectors/userFlair.ts"),
				I = n("./src/reddit/selectors/userPrefs.ts"),
				E = n("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				w = n("./node_modules/fbt/lib/FbtPublic.js"),
				O = n("./src/config.ts"),
				S = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				_ = n("./src/lib/lessComponent.tsx"),
				j = n("./src/lib/prettyPrintNumber/index.ts"),
				N = n("./src/reddit/components/ChatButton/index.tsx"),
				k = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				P = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				T = n("./src/reddit/components/SubscribeButton/index.tsx"),
				R = n("./src/reddit/components/UserIcon/index.tsx"),
				M = n("./src/reddit/endpoints/profile/info.ts"),
				F = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				A = n("./src/reddit/icons/fonts/Info/index.tsx"),
				L = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				B = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				U = n("./src/reddit/models/Gold/Award.ts"),
				H = n("./src/reddit/models/User/index.ts"),
				W = n("./src/reddit/components/HumanDate/index.tsx"),
				D = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				V = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				z = n("./src/reddit/actions/inContextModeration.ts"),
				K = n("./src/reddit/actions/modal.ts"),
				G = n("./src/reddit/actions/subredditModeration/ban.ts"),
				q = n("./src/reddit/constants/modals.ts"),
				Z = n("./src/reddit/components/Hovercards/helpers.ts"),
				Q = n("./src/reddit/icons/fonts/index.tsx"),
				Y = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				J = n("./src/reddit/selectors/bannedUser.ts"),
				X = n("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				$ = n.n(X);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), te = Object(o.c)({
				hasModMailPermissions: Object(p.b)(Y.c.mail),
				isUserBanned: (e, t) => !!Object(J.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(C.yb)(e, {
					userName: t.username
				})
			});
			class ne extends s.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: n,
						isUserBanned: r,
						onUnbanUser: i,
						sendEvent: o,
						toggleBanModal: a,
						toggleMuteModal: d
					} = this.props;
					return s.a.createElement("div", {
						className: e
					}, r ? s.a.createElement(Z.a, {
						role: "button",
						onClick: () => {
							i(this.props.user.id), o(F.e(t))
						}
					}, s.a.createElement(Q.a, {
						name: "ban",
						isFilled: !0,
						className: $.a.icon
					}), ee._("Unban User", null, {
						hk: "1aASyW"
					})) : s.a.createElement(Z.a, {
						role: "button",
						onClick: () => {
							a(), o(F.a(t))
						}
					}, s.a.createElement(Q.a, {
						name: "ban",
						className: $.a.icon
					}), ee._("Ban User", null, {
						hk: "3OhuLx"
					})), n && s.a.createElement(Z.a, {
						role: "button",
						onClick: () => {
							d(), o(F.d(t))
						}
					}, s.a.createElement(Q.a, {
						name: "mod_mute",
						className: $.a.icon
					}), ee._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var re = Object(i.b)(te, (e, t) => {
					let {
						username: n,
						subredditId: r,
						contextId: s
					} = t;
					return {
						onUnbanUser: t => e(Object(G.e)(r, t)),
						requestUserBanInfo: () => e(Object(G.c)(r, {
							username: n
						})),
						toggleBanModal: () => {
							e(Object(z.c)({
								username: n,
								subredditId: r,
								contextId: s
							})), e(Object(G.a)(r, n))
						},
						toggleMuteModal: () => {
							e(Object(z.d)({
								username: n,
								subredditId: r,
								contextId: s
							})), e(Object(K.i)(q.a.MUTE_USER))
						}
					}
				})(ne),
				se = n("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: ie
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var oe = Object(i.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(se.g)(t.subredditId, t.username))
				}))(e => s.a.createElement(Z.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(F.c(e.contextId))
					}
				}, s.a.createElement(Q.a, {
					name: "tag",
					className: $.a.icon
				}), ie._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				ae = n("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				de = n.n(ae);

			function le() {
				return (le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ce = _.a.wrapped(R.a, "UserIcon", de.a),
				ue = _.a.wrapped(T.a, "SubscribeButton", de.a),
				me = _.a.wrapped(N.b, "ChatButton", de.a),
				pe = _.a.wrapped(B.a, "PremiumIcon", de.a),
				he = _.a.wrapped(S.a, "UserNameLink", de.a),
				be = _.a.div("UserNameMetaData", de.a),
				fe = _.a.div("MetaDataItem", de.a),
				ve = _.a.div("Bullet", de.a),
				ge = _.a.div("UserNameContainer", de.a),
				xe = _.a.div("KarmaGrid", de.a),
				Ce = _.a.div("GenericKarma", de.a),
				ye = _.a.a("InfoLink", de.a),
				Ie = _.a.div("KarmaCount", de.a),
				Ee = _.a.div("GenericKarmaLabel", de.a),
				we = _.a.div("BannerImage", de.a),
				Oe = _.a.div("UserContainer", de.a),
				Se = _.a.div("BottomSpacer", de.a),
				_e = _.a.div("Container", de.a),
				je = e => s.a.createElement("div", null, s.a.createElement("div", null, s.a.createElement(he, {
					to: `/user/${e.userName}/`
				}, e.title || e.userName), e.user.isEmployee && s.a.createElement(L.a, {
					className: de.a.adminIcon,
					title: w.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && s.a.createElement(S.a, {
					to: "/premium"
				}, s.a.createElement(pe, null))), s.a.createElement(be, null, s.a.createElement(fe, null, `u/${e.userName}`, s.a.createElement(ve, null, "•")), s.a.createElement(fe, null, (e.user.createdUtc || e.user.created) && s.a.createElement(W.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				Ne = e => {
					const {
						user: {
							karma: t
						}
					} = e, n = {
						...M.a,
						...t
					};
					return s.a.createElement(xe, null, s.a.createElement(Ce, null, s.a.createElement(Ie, null, Object(j.b)(n.fromPosts)), s.a.createElement(Ee, null, w.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [w.fbt._plural(n.fromPosts)], {
						hk: "3K4oaH"
					}))), s.a.createElement(Ce, null, s.a.createElement(Ie, null, Object(j.b)(n.fromComments)), s.a.createElement(Ee, null, w.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [w.fbt._plural(n.fromComments)], {
						hk: "3gKRx9"
					}))), s.a.createElement(Ce, null, s.a.createElement(Ie, null, Object(j.b)(n.fromAwardsReceived)), s.a.createElement(Ee, null, w.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [w.fbt._plural(n.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), s.a.createElement(ye, {
						href: U.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(A.a, {
						className: de.a.infoIcon
					})))), s.a.createElement(Ce, null, s.a.createElement(Ie, null, Object(j.b)(n.fromAwardsGiven)), s.a.createElement(Ee, null, w.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [w.fbt._plural(n.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), s.a.createElement(ye, {
						href: U.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(A.a, {
						className: de.a.infoIcon
					})))))
				},
				ke = e => {
					var t, n;
					const {
						className: r,
						contextId: i,
						currentUser: o,
						hideNSFWPref: a,
						hoverId: d,
						isLoggedIn: l,
						onClickSnoovatar: c,
						moderatorPermissions: u,
						prefersReducedAnimations: m,
						profile: p,
						sendEvent: h,
						style: b,
						subredditId: f,
						topAwardIcon: v,
						userName: g,
						user: x,
						userFlair: C,
						isCurrentUserBanned: y,
						userProfileStyles: I,
						acceptChats: E,
						isCommentAuthorBlocked: S
					} = e;
					if (!x) return s.a.createElement(_e, {
						style: b
					});
					const _ = !!o && Object(H.e)(o) === g,
						j = !!(null == o ? void 0 : o.snoovatarFullBodyAsset),
						N = x.accountIcon || `${O.a.assetPath}/img/snoo_user_placeholder.png`,
						P = null == u ? void 0 : u.flair,
						T = null == u ? void 0 : u.access,
						R = (null == C ? void 0 : C.templateIds) && (null === (t = null == C ? void 0 : C.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						M = null === (n = null == C ? void 0 : C.displaySettings) || void 0 === n ? void 0 : n.isEnabled,
						{
							awardedLastMonth: A
						} = x,
						L = !!x.snoovatarFullBodyAsset,
						B = x.isNSFW && a;
					let U;
					return U = L ? !B && I && I.bannerBackgroundImage || void 0 : B ? `${O.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, s.a.createElement(_e, {
						className: r,
						id: d,
						style: b
					}, !L && U && s.a.createElement(we, {
						style: {
							backgroundImage: `url('${U}')`
						}
					}), s.a.createElement(Oe, null, L ? s.a.createElement(V.a, {
						isHovercard: !0,
						bannerBackgroundImage: U,
						compact: !0,
						currentUserHasSnoovatar: j,
						isEmployee: x.isEmployee,
						isGold: x.isGold,
						isNSFW: x.isNSFW,
						isOwnProfile: _,
						onClickSnoovatar: () => c && c(),
						prefersReducedAnimations: !!m,
						snoovatarUrl: x.snoovatarFullBodyAsset,
						title: null == p ? void 0 : p.title,
						userCreated: x.created,
						username: g,
						url: `/user/${e.userName}/`
					}) : s.a.createElement(ge, null, s.a.createElement(ce, {
						iconUrl: N,
						isNSFW: x.isNSFW,
						userName: g
					}), s.a.createElement(je, {
						title: null == p ? void 0 : p.title,
						user: x,
						userName: g
					})), s.a.createElement(Ne, {
						user: x
					}), A && s.a.createElement(D.a, {
						recentAwardings: A,
						topAwardIcon: v,
						username: g
					}), l && !_ && !y && E && !S && s.a.createElement(me, {
						contextId: i,
						userId: x.id,
						text: w.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), x.hasUserProfile && !y && !S && !_ && x.enableFollowers && s.a.createElement(ue, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(F.g)(e ? "unfollow" : "follow", i),
						isFullWidth: !0,
						small: !0
					})), T && i && !_ && f && s.a.createElement(re, {
						contextId: i,
						subredditId: f,
						sendEvent: h,
						username: g
					}), P && i && R && M && f && s.a.createElement(oe, {
						contextId: i,
						subredditId: f,
						sendEvent: h,
						username: g
					}), s.a.createElement(k.i, {
						contextId: i,
						subredditId: f,
						user: x
					}), !(T || l) && s.a.createElement(Se, null))
				},
				Pe = Object(P.a)(ke),
				Te = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return s.a.createElement(Pe, le({
						isOpen: t
					}, e))
				};
			Te.WrappedComponent = ke;
			var Re = Te;
			const Me = Object(o.c)({
					activeTooltipId: x.a,
					currentUser: C.k,
					isLoggedIn: C.P,
					hideNSFWPref: C.F,
					moderatorPermissions: (e, t) => {
						let {
							subredditId: n
						} = t;
						return n ? Object(p.m)(e, {
							subredditId: n
						}) : void 0
					},
					prefersReducedAnimations: I.c,
					profile: (e, t) => {
						let {
							userName: n
						} = t;
						return Object(f.j)(e, {
							profileName: n
						})
					},
					topAwardIcon: (e, t) => {
						let {
							userName: n
						} = t;
						return Object(m.e)(e, {
							userName: n,
							minSize: 32
						})
					},
					user: C.yb,
					userFlair: (e, t) => {
						let {
							subredditId: n
						} = t;
						return n ? Object(y.d)(e, {
							subredditId: n
						}) : void 0
					},
					isCurrentUserBanned: (e, t) => !!Object(g.l)(t) && Object(g.db)(e, t),
					userProfileStyles: (e, t) => Object(v.m)(e, Object(f.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const n = Object(f.h)(e, {
							profileName: t.userName
						});
						return !n || n.acceptChats
					},
					isInModNotesExperiment: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(u.a)(e, n)
					},
					trophyCase: (e, t) => Object(f.r)(e, Object(f.m)(e, t.userName)),
					isNightMode: C.cb,
					lastAuthorModNote: (e, t) => {
						if (!t.contextId) return;
						const n = Object(l.a)(t.contextId) ? Object(b.G)(e, {
							postId: t.contextId
						}) : Object(c.b)(e, {
							commentId: t.contextId
						});
						return Object(h.a)(e, null == n ? void 0 : n.authorId, t.subredditId)
					},
					userIsSubscriber: (e, t) => {
						let {
							userName: n
						} = t;
						return Object(g.eb)(e, {
							identifier: {
								name: n,
								type: "profile"
							}
						})
					}
				}),
				Fe = Object(i.b)(Me, (e, t) => ({
					onClickSnoovatar: () => e(Object(a.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(d.i)())
				}));
			t.a = Fe(e => e.isInModNotesExperiment ? s.a.createElement(E.b, {
				activeTooltipId: e.activeTooltipId,
				contextId: e.contextId,
				currentUser: e.currentUser,
				isLoggedIn: e.isLoggedIn,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				moderatorPermissions: e.moderatorPermissions,
				prefersReducedAnimations: e.prefersReducedAnimations,
				profile: e.profile,
				subredditId: e.subredditId,
				tooltipId: e.tooltipId,
				user: e.user,
				isCurrentUserBanned: e.isCurrentUserBanned,
				userName: e.userName,
				userProfileStyles: e.userProfileStyles,
				acceptChats: e.acceptChats,
				isCommentAuthorBlocked: e.isCommentAuthorBlocked,
				collapsed: e.collapsed,
				trophyCase: e.trophyCase,
				isNightMode: e.isNightMode,
				lastAuthorModNote: e.lastAuthorModNote,
				userIsSubscriber: e.userIsSubscriber
			}) : s.a.createElement(Re, {
				activeTooltipId: e.activeTooltipId,
				contextId: e.contextId,
				currentUser: e.currentUser,
				isLoggedIn: e.isLoggedIn,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				moderatorPermissions: e.moderatorPermissions,
				onClickSnoovatar: e.onClickSnoovatar,
				prefersReducedAnimations: e.prefersReducedAnimations,
				profile: e.profile,
				sendEvent: e.sendEvent,
				subredditId: e.subredditId,
				topAwardIcon: e.topAwardIcon,
				tooltipId: e.tooltipId,
				tooltipType: e.tooltipType,
				user: e.user,
				userFlair: e.userFlair,
				isCurrentUserBanned: e.isCurrentUserBanned,
				userName: e.userName,
				userProfileStyles: e.userProfileStyles,
				acceptChats: e.acceptChats,
				isCommentAuthorBlocked: e.isCommentAuthorBlocked,
				collapsed: e.collapsed
			}))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less": function(e, t, n) {
			e.exports = {
				icon: "xd9vrdS8_V6IVus6-mHAM"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/higherOrderComponents/makeAsync.tsx"),
				s = n("./src/lib/loadWithRetries/index.ts");
			const i = "UserInfoTooltip";
			t.b = Object(r.a)({
				ErrorComponent: () => null,
				getComponent: () => Object(s.a)(() => Promise.all([n.e("AuthorHovercard~Reddit"), n.e("AuthorHovercard")]).then(n.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.tsx"))).then(e => e.default),
				LoadingComponent: () => null
			})
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				o = n("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				a = n("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(a.c)(e => {
				const t = `${e.tooltipId}-hover-id`;
				return s.a.createElement(i.a, {
					className: e.wrapperClassName,
					hoverId: t,
					sendHoverEvent: e.sendHoverCardEvent,
					tooltipId: e.tooltipId,
					authorOrSubredditName: e.user
				}, e.children, s.a.createElement(o.a, {
					className: e.className,
					hoverId: t,
					sendEvent: e.sendEvent,
					subredditId: e.subredditId,
					tooltipId: e.tooltipId,
					tooltipType: e.tooltipType,
					userName: e.user
				}))
			})
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less": function(e, t, n) {
			e.exports = {
				ChatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				chatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				UserIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				userIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				SubscribeButton: "yFByQg8RzENoqoOt0ysAk",
				subscribeButton: "yFByQg8RzENoqoOt0ysAk",
				PremiumIcon: "_3YJqiyvx8zFvv30tmg36S-",
				premiumIcon: "_3YJqiyvx8zFvv30tmg36S-",
				Token: "_2U0P3n4v75sHsDvQmSKNz3",
				token: "_2U0P3n4v75sHsDvQmSKNz3",
				UserNameLink: "_1oT4pd8QlZQZ1wGOk9VAaQ",
				userNameLink: "_1oT4pd8QlZQZ1wGOk9VAaQ",
				UserNameMetaData: "_1wu7a98opA-mU9WUQpJIuF",
				userNameMetaData: "_1wu7a98opA-mU9WUQpJIuF",
				GildedLastMonthDisplay: "_19NlUDUSw7ra6wC0luJwKV",
				gildedLastMonthDisplay: "_19NlUDUSw7ra6wC0luJwKV",
				Bullet: "_2dfF2p_dwLpL5C-8pAvdbL",
				bullet: "_2dfF2p_dwLpL5C-8pAvdbL",
				MetaDataItem: "RcL4UXH2ABHT3YpYzu3ms",
				metaDataItem: "RcL4UXH2ABHT3YpYzu3ms",
				UserNameContainer: "J9OjkO5NR8gsgJUQrk2Ft",
				userNameContainer: "J9OjkO5NR8gsgJUQrk2Ft",
				KarmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				karmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				GenericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				genericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				KarmaCount: "_18aX_pAQub_mu1suz4-i8j",
				karmaCount: "_18aX_pAQub_mu1suz4-i8j",
				GenericKarmaLabel: "EtlFWXCmzvjyd92eABb-5",
				genericKarmaLabel: "EtlFWXCmzvjyd92eABb-5",
				InfoLink: "_2qjqkYRKCjuqB4VRr2duCK",
				infoLink: "_2qjqkYRKCjuqB4VRr2duCK",
				BannerImage: "_1l9DXI5VaWcxjbz23v5b6X",
				bannerImage: "_1l9DXI5VaWcxjbz23v5b6X",
				UserContainer: "_m7PpFuKATP9fZF4xKf9R",
				userContainer: "_m7PpFuKATP9fZF4xKf9R",
				BottomSpacer: "_2D-HmwsbsNkTnIiPO4zcqb",
				bottomSpacer: "_2D-HmwsbsNkTnIiPO4zcqb",
				UserActionLink: "_1Sy8bDpK6p4JRHy1yB1Xyk",
				userActionLink: "_1Sy8bDpK6p4JRHy1yB1Xyk",
				Container: "_1sbZnfdaxhCOFVUCJ3Z75m",
				container: "_1sbZnfdaxhCOFVUCJ3Z75m",
				adminIcon: "_2aJuBKF3mo4YJS4YFkeU9a"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, n) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			})), n.d(t, "b", (function() {
				return y
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/lessComponent.tsx"),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/profile/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/selectors/tooltip.ts");
			const u = Object(a.c)({
				dropdownIsOpen: (e, t) => Object(c.b)(t.tooltipId)(e)
			});
			var m = Object(o.b)(u, (e, t) => ({
					onCloseUserDropdown: () => e(Object(l.i)()),
					onOpenUserDropdown: async () => {
						e(Object(l.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && (await e(Object(d.d)(t.authorOrSubredditName)), t.sendHoverEvent(), t.onHover && t.onHover())
					}
				})),
				p = n("./src/reddit/actions/subreddit.ts");
			const h = Object(a.c)({
				dropdownIsOpen: (e, t) => Object(c.b)(t.tooltipId)(e)
			});
			var b = Object(o.b)(h, (e, t) => ({
					onCloseUserDropdown: () => e(Object(l.i)()),
					onOpenUserDropdown: async () => {
						var n;
						e(Object(l.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.u)(t.authorOrSubredditName)), null === (n = t.onShow) || void 0 === n || n.call(t)
					}
				})),
				f = n("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				v = n.n(f);
			class g extends s.a.Component {
				constructor() {
					super(...arguments), this.closeHovercardTimeoutId = 0, this.openHovercardTimeoutId = 0, this.isHovering = !1, this.hoverEl = void 0, this.onHoverElMouseEnter = () => {
						this.isHovering = !0
					}, this.onHoverElMouseLeave = () => {
						this.isHovering = !1
					}, this.onMouseEnter = e => {
						this.closeHovercardTimeoutId && clearTimeout(this.closeHovercardTimeoutId), this.openHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.dropdownIsOpen || this.props.onOpenUserDropdown()
						}, 500)
					}, this.onMouseLeave = () => {
						this.props.onClick || (this.openHovercardTimeoutId && clearTimeout(this.openHovercardTimeoutId), this.closeHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.onCloseUserDropdown()
						}, 300))
					}, this.onClick = e => {
						this.props.onlyLeaveOnClick && (this.isHovering ? clearTimeout(this.openHovercardTimeoutId) : clearTimeout(this.closeHovercardTimeoutId)), this.props.onClick && this.props.onClick(e)
					}
				}
				componentDidMount() {
					const e = document.getElementById(this.props.hoverId);
					e && (this.hoverEl = e, this.addHoverListeners(this.hoverEl))
				}
				componentWillUnmount() {
					this.hoverEl && this.removeHoverListeners(this.hoverEl), this.hoverEl = void 0, this.openHovercardTimeoutId && window.clearTimeout(this.openHovercardTimeoutId)
				}
				addHoverListeners(e) {
					e.addEventListener("mouseenter", this.onHoverElMouseEnter), this.props.onlyLeaveOnClick || e.addEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				removeHoverListeners(e) {
					e.removeEventListener("mouseenter", this.onHoverElMouseEnter), this.props.onlyLeaveOnClick || e.removeEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				render() {
					const {
						children: e,
						className: t
					} = this.props;
					return s.a.createElement("div", {
						className: t,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onClick: this.onClick
					}, e)
				}
			}
			const x = i.a.wrapped(g, "HoverDiv", v.a),
				C = m(x),
				y = b(x)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, n) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/Inline/index.tsx"),
				i = n("./src/reddit/components/Hovercards/helpers.m.less"),
				o = n.n(i);
			const a = r.a.wrapped(s.a, "UserActionItem", o.a),
				d = e => {
					const {
						author: t,
						itemId: n,
						subredditName: r,
						tooltipIdPrefix: s,
						tooltipType: i
					} = e;
					let o = s;
					return n && (o = `${o}--${n}`), i && (o = `${o}--${i}`), t && (o = `${o}--${t}`), r && (o = `${o}--${r}`), o
				}
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "g", (function() {
				return S
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "i", (function() {
				return j
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./node_modules/lodash/isNil.js"),
				d = n.n(a),
				l = n("./src/reddit/constants/jsapiEvents.ts");
			var c = n("./src/reddit/singleton/EventSystem.ts");
			const u = Object(o.c)({
				consumers: e => e.jsApi
			});
			class m extends r.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: n,
								...r
							}
						} = this;
						c.a.publish(l.a, r, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					d()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					d()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? s.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && s.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var p = Object(i.b)(u, {})(m),
				h = n("./src/reddit/selectors/comments.ts"),
				b = n("./src/reddit/selectors/commentSelector.ts"),
				f = n("./src/reddit/selectors/subreddit.ts");
			const v = (e, t) => {
				const n = Object(b.b)(e, t),
					r = Object(f.H)(e, t);
				return {
					comment: n,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var g = Object(i.b)(() => Object(o.a)(v, h.j, (e, t) => ({
				...e,
				depth: t
			})))(e => s.a.createElement(p, {
				type: "comment",
				data: {
					author: e.comment.author,
					approvedAtUTC: e.comment.approvedAtUTC,
					approvedBy: e.comment.approvedBy,
					bannedAtUTC: e.comment.bannedAtUTC,
					body: e.comment.body,
					created: e.comment.created,
					distinguishType: e.comment.distinguishType,
					id: e.comment.id,
					isApproved: e.comment.isApproved,
					isRemoved: e.comment.isRemoved,
					isSpam: e.comment.isSpam,
					isStickied: e.comment.isStickied,
					isTopLevel: 0 === e.depth,
					post: {
						id: e.comment.postId
					},
					removedBy: e.comment.bannedBy,
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			const x = (e, t) => {
				const n = Object(b.b)(e, t),
					r = Object(f.H)(e, t);
				return {
					comment: n,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var C = Object(i.b)(() => Object(o.a)(x, e => e))(e => s.a.createElement(p, {
				type: "commentAuthor",
				data: {
					author: e.comment.author,
					comment: {
						id: e.commentId
					},
					isModerator: e.isModerator,
					post: {
						id: e.comment.postId
					},
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			var y = Object(i.b)(() => Object(o.c)({
					subreddit: f.S
				}))(e => s.a.createElement(p, {
					className: e.className,
					type: "communityTools",
					data: {
						sectionName: e.sectionName,
						subreddit: e.subreddit ? {
							id: e.subreddit.id,
							name: e.subreddit.name,
							type: e.subreddit.type
						} : {}
					}
				})),
				I = n("./src/reddit/hooks/usePostContext.ts");
			var E = e => {
				const t = Object(I.a)(),
					n = Object(r.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						created: null == t ? void 0 : t.post.created,
						numComments: null == t ? void 0 : t.post.numComments,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						domain: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.displayText),
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						sourceUrl: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.url),
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? s.a.createElement(p, {
					className: e.className,
					type: "post",
					data: n
				}) : null
			};
			var w = e => {
				const t = Object(I.a)(),
					n = Object(r.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						isModerator: null == t ? void 0 : t.isModerator,
						post: {
							id: null == t ? void 0 : t.post.id
						},
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {}
					}), [t]);
				return t ? s.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: n
				}) : null
			};
			var O = e => {
				const t = Object(I.a)(),
					n = Object(r.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						numComments: null == t ? void 0 : t.post.numComments,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? s.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: n
				}) : null
			};
			var S = Object(i.b)(() => Object(o.c)({
				subreddit: f.S
			}))(e => s.a.createElement(p, {
				className: e.className,
				type: "sidebar",
				data: {
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}));
			var _ = Object(i.b)(() => Object(o.c)({
				subredditOrProfile: (e, t) => Object(f.K)(e, {
					identifier: t
				})
			}))(e => s.a.createElement(p, {
				className: e.className,
				type: "subreddit",
				data: {
					id: e.subredditOrProfile.id,
					displayText: e.subredditOrProfile.displayText,
					name: e.subredditOrProfile.name,
					title: e.subredditOrProfile.title,
					url: e.subredditOrProfile.title
				}
			}));
			var j = Object(i.b)(() => Object(o.c)({
				subreddit: (e, t) => {
					let {
						subredditId: n
					} = t;
					return n ? Object(f.S)(e, {
						subredditId: n
					}) : null
				}
			}))(e => s.a.createElement(p, {
				className: e.className,
				type: "userHovercard",
				data: {
					user: e.user,
					contextId: e.contextId,
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}))
		},
		"./src/reddit/components/ModerationPagesEmptyList/index.m.less": function(e, t, n) {
			e.exports = {
				NoResultsContainer: "FIy4e_7DNe0P9cdi_1jVn",
				noResultsContainer: "FIy4e_7DNe0P9cdi_1jVn",
				NoResultsText: "_3V0T64xptTp5xLaY-1nsaz",
				noResultsText: "_3V0T64xptTp5xLaY-1nsaz"
			}
		},
		"./src/reddit/components/ModerationPagesEmptyList/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/ModerationPagesEmptyList/index.m.less"),
				a = n.n(o);
			const d = i.a.div("NoResultsContainer", a.a),
				l = i.a.div("NoResultsText", a.a);

			function c(e) {
				const {
					childrenPosition: t = "top"
				} = e;
				return s.a.createElement(d, {
					className: e.className
				}, "top" === t && e.children, s.a.createElement(l, null, e.text), "bottom" === t && e.children)
			}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/config.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				a = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				d = n.n(a);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class c extends s.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: n
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: r,
						totalCount: a
					} = t, c = r.description ? r.description : r.name;
					return s.a.createElement("a", {
						className: d.a.AwardedLastMonth,
						href: `${i.a.oldRedditUrl}/user/${n}/gilded`
					}, s.a.createElement("div", {
						className: d.a.iconColumn
					}, s.a.createElement("img", {
						alt: c,
						className: d.a.icon,
						src: e
					}), a > 1 && s.a.createElement("span", {
						className: d.a.count
					}, `+${Object(o.b)(a-1)}`)), s.a.createElement("div", {
						className: d.a.textColumn
					}, l._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [l._param("award-name", r.name), l._plural(a)], {
						hk: "16MJHe"
					})))
				}
			}
			t.a = c
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less": function(e, t, n) {
			e.exports = {
				Banner: "_2ZyL7luKQghNeMnczY3gqW",
				banner: "_2ZyL7luKQghNeMnczY3gqW"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./src/reddit/models/Image/index.tsx"),
				a = n("./src/reddit/components/EditableImage/index.tsx"),
				d = n("./src/reddit/models/User/index.ts"),
				l = n("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				c = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				u = n.n(c);
			class m extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const n = await Object(o.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(n, "profileBanner"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						bannerUrl: e,
						className: t,
						currentUser: n,
						hideNSFWPref: s,
						isNSFW: o,
						userName: l
					} = this.props, {
						isUpdating: c
					} = this.state, m = e ? i.a.createElement("div", {
						className: u.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return n && Object(d.e)(n) === l ? i.a.createElement(a.a, {
						altText: r.fbt._("{userName} banner image", [r.fbt._param("userName", l)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: c,
						onFileSelected: this.updateProfileIcon
					}, m) : o && s ? null : m
				}
			}
			t.a = Object(l.a)(m)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/preferences.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const a = Object(s.c)({
					currentUser: o.k,
					hideNSFWPref: o.F
				}),
				d = Object(r.b)(a, e => ({
					imageUpdateRequested: (t, n) => e(Object(i.C)(t, n))
				}));
			t.a = d
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/snoovatarModal.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				h = n("./src/reddit/models/Vote/index.ts"),
				b = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				f = n.n(b);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(a.i)(e => {
				let {
					isHovercard: t,
					username: n,
					isAvatarPost: a,
					post: b,
					share: g
				} = e;
				const x = Object(c.b)(),
					C = Object(o.d)(),
					y = b && b.id,
					I = b && b.voteState;
				let E = null;
				y || (E = t ? "user_hovercard" : "profile_overview");
				const w = Object(s.useCallback)(() => x(Object(m.g)(t ? "user_hovercard" : "profile_overview", n)), [t, x, n]);
				return i.a.createElement(u.t, {
					onClick: () => {
						a ? (x(m.h), y && I === h.a.notVoted && C(Object(d.kb)(y))) : w();
						const e = a ? "postify" : "copy";
						C(Object(l.b)({
							clickSource: E,
							share: g,
							source: e
						}))
					},
					className: Object(r.a)(f.a.snoovatarButton, f.a.snoovatarExtraPadding, f.a.compactButtonLayout, {
						[f.a.avatarPostifyButton]: a
					}),
					isFullWidth: !0
				}, i.a.createElement(p.a, {
					className: Object(r.a)({
						[f.a.shirtIcon]: !a,
						[f.a.avatarPostButtonShirtIcon]: a
					})
				}), v._("Try this Look", null, {
					hk: "dOuPb"
				}), i.a.createElement("div", {
					className: f.a.chevronIcon
				}))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, n) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				avatarPostifyButton: "_2Viile0fcrruho_hQqpnUx",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				avatarPostButtonShirtIcon: "ARFP2bx6U967JwMoJ2Xr5",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				l = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				c = n.n(l);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function(e) {
				let {
					compact: t,
					currentUserHasSnoovatar: n,
					className: r,
					isOwnProfile: l,
					onClick: m
				} = e;
				return s.a.createElement(o.t, {
					onClick: m,
					isFullWidth: !0,
					className: Object(i.a)(c.a.snoovatarButton, {
						[c.a.snoovatarExtraPadding]: !n && l,
						[c.a.compactButtonLayout]: t
					}, r)
				}, n ? s.a.createElement(d.a, {
					className: c.a.shirtIcon
				}) : s.a.createElement("div", {
					className: c.a.shirtIcon
				}), n ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : l ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), n ? s.a.createElement("div", {
					className: c.a.chevronIcon
				}) : s.a.createElement(a.a, {
					name: "caret_right",
					className: c.a.chevronIcon
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less": function(e, t, n) {
			e.exports = {
				BannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				bannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				BannerImage: "_1IvROQ79nAJZ87_JkTFsLO",
				bannerImage: "_1IvROQ79nAJZ87_JkTFsLO"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				o = n("./src/reddit/icons/svgs/Close/index.tsx"),
				a = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				d = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				l = n.n(d),
				c = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				u = n.n(c);
			t.a = function(e) {
				let {
					bannerBackgroundImage: t,
					isNSFW: n,
					username: r,
					editMode: d,
					isDeletingBanner: c,
					onDeleteBanner: m
				} = e;
				return s.a.createElement("div", {
					className: l.a.bannerWrapper
				}, s.a.createElement(a.a, {
					bannerUrl: t,
					isNSFW: n,
					userName: r
				}), d && t && (c ? s.a.createElement(i.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : s.a.createElement(o.a, {
					className: u.a.closeIcon,
					onClick: m
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/controls/InternalLink/index.tsx"),
				o = n("./src/reddit/components/HumanDate/index.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function(e) {
				let {
					className: t,
					shouldDisplaySnoovatar: n,
					url: r,
					userCreated: d,
					username: l,
					...c
				} = e;
				const u = n ? s.a.createElement(s.a.Fragment, null, "u/", l, " · ", s.a.createElement(o.d, {
					seconds: d,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${l}`;
				return r ? s.a.createElement(i.a, a({}, c, {
					className: t,
					to: r
				}), u) : s.a.createElement("span", a({}, c, {
					className: t
				}), u)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				d = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				l = n("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				c = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				u = n.n(c);
			t.a = e => {
				let {
					title: t,
					username: n,
					isEmployee: i,
					isGold: c,
					isNSFW: m
				} = e;
				return o.a.createElement("h1", {
					className: u.a.snoovatarUserTitle
				}, t || n, i && o.a.createElement(a.a, {
					className: u.a.snoovatarAdminIcon,
					title: s.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				}), c && o.a.createElement("a", {
					title: s.fbt._("{username} has Reddit Premium", [s.fbt._param("username", n)], {
						hk: "3Fylv"
					}),
					href: `${r.a.redditUrl}/premium`
				}, o.a.createElement(l.a, {
					className: u.a.snoovatarPremiumIcon
				})), m && o.a.createElement(d.a, {
					className: u.a.snoovatarNsfwIcon,
					title: s.fbt._("NSFW - Adult Content", null, {
						hk: "2Iw7mN"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, n) {
			e.exports = {
				snoovatarContainer: "_34XIqvI8-YT1wukR_W8vj6",
				nftProfileUnitContainer: "OfvB_Czxn5wwXiBN6RVlG",
				nftProfileUnit: "n5OW4wkmX5R3yYizuJXw1",
				bottomGlow: "_18b8M-cZftX_frkYRy3DN1",
				topGlow: "_1-PwjX8ETMrfCu2hAkAHFd",
				snoovatar: "_2bLCGrtCCJIMNCZgmAMZFM",
				premiumGlow: "_18BjSGkpIVVfS1xJXL1eoW",
				snoovatarUserName: "_28nEhn86_R1ENZ59eAru8S",
				snoovatarUserTitle: "_3LM4tRaExed4x1wBfK1pmg",
				snoovatarSettingsLink: "PNl4tAYE2TRxhOc34iqcY",
				snoovatarAdminIcon: "kOKnXvA8jebkfk2wVIb9R",
				snoovatarNsfwIcon: "Wb4wBt474lETdwG0YpWID",
				snoovatarPremiumIcon: "_3NZUKOdsA_2X9TrZGSNQyP",
				particleWrapper: "_3sckwXGpSWEBLgH7dBHDSI",
				particle: "R8JC02qFTBSKsWVEamnnh",
				particleX0: "_2FHPkirHUUZZ53WuQRt_ku",
				particleX20: "DeM4CXWl9dmFhzxbChV3v",
				particleX40: "_2jQr36LfrhyZudo0c4r5qb",
				particleX60: "_2ThlCGLfserHkMW64od-w_",
				particleX80: "_2PoCUl_D7HnNn8GhlmyNMn",
				particleX100: "_3xLPb9tG5DMGKH5Qmq0lMn",
				particleFloat1: "_2Tlu1OsBOwuxXIF1MLT2k",
				floatUp1: "_1-74-z_0KhbvP-MLUh63RF",
				particleFloat2: "BW4L6Zj7IYZtY4carTDWz",
				floatUp2: "BhXouEsciSb0lIayg329d",
				particleFloat3: "UjQ0lRcZlylUigyKGCSrO",
				floatUp3: "_2cAI3EiKyyG1hMFOLbG7ka",
				particleFloat4: "_2_ke4gf08pfYrY6lP-aPZ_",
				floatUp1Left: "_2D7to5Dk7q0ZyKN3MMQfuJ",
				particleFloat5: "_2wM6_vp4fY0ziLkOrGaobV",
				floatUp2Left: "_3BR2d3YbOQLeA3LmAmwBJL",
				particleFloat6: "_23n0biPU5CQf96pEUSFupJ",
				floatUp3Left: "_3FnzyfIl1wHuAYA54rlkJH",
				particleDelay1: "_3meTYeYw1F3UdYO0v-gAYr",
				particleDelay2: "_3d8_fd8LwWsj0tyZWIeQdt",
				particleDelay3: "_2PLSBdnBk3jcotYknlKud1",
				particleDelay4: "_2pnTv5ZAxpIbkx38PkPJPg",
				particleDelay5: "_3j1NzwW_t2Ufnx4ed9QabN",
				particleDelay6: "_1hddWHnQ8DFnwilLlN9GEO",
				particleDelay7: "_3eRR1I_MwXC19q9sr8mKaR",
				particleDelay8: "_1sCUpg4sdajNDXrcNTP0qW",
				particleDelay9: "_3J5h1MCyY_xUf2QP7PDSHY",
				particleDelay10: "_2RqcLn9onSZQmKQgvKmSF7"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts"),
				d = n("./src/reddit/controls/InternalLink/index.tsx"),
				l = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				u = n("./src/reddit/selectors/experiments/econ/index.ts"),
				m = n("./src/reddit/selectors/experiments/econ/avatarNfts.ts"),
				p = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				h = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				b = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				f = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				v = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				g = n.n(v);
			const x = 25;

			function C(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function y(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const I = C("particleDelay", g.a),
				E = C("particleX", g.a),
				w = C("particleFloat", g.a),
				O = () => {
					const e = y(E),
						t = y(w),
						n = y(I);
					return Object(o.a)(g.a.particle, e, t, n)
				};
			class S extends s.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < x; t++) e.push(this.createParticle(t));
					return s.a.createElement("div", {
						role: "presentation",
						className: g.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return s.a.createElement("div", {
						key: e,
						className: `${O()}`
					})
				}
			}
			var _ = S,
				j = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				N = n.n(j),
				k = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = e => {
				let {
					bannerBackgroundImage: t,
					compact: n,
					currentUserHasSnoovatar: r,
					editMode: v,
					isDeletingBanner: x,
					isEmployee: C,
					isGold: y,
					isNSFW: I,
					isOwnProfile: E,
					onClickSnoovatar: w,
					onDeleteBanner: O,
					prefersReducedAnimations: S,
					snoovatarUrl: j,
					title: P,
					userCreated: T,
					username: R,
					url: M,
					isHovercard: F
				} = e;
				const A = Object(i.e)(e => !E && !!j && Object(u.g)(e)),
					L = Object(i.e)(m.b),
					B = j && Object(l.e)(j) && L;
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(b.a, {
					bannerBackgroundImage: t,
					editMode: !!v,
					isNSFW: I,
					username: R,
					isDeletingBanner: !!x,
					onDeleteBanner: O
				}), B ? s.a.createElement("div", {
					className: g.a.nftProfileUnitContainer
				}, s.a.createElement(a.a, {
					className: g.a.nftProfileUnit,
					imageUrl: j
				})) : s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: g.a.snoovatarContainer
				}, y && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: g.a.topGlow
				}), s.a.createElement("div", {
					className: g.a.bottomGlow
				}), !S && s.a.createElement(_, null)), s.a.createElement("img", {
					className: Object(o.a)(g.a.snoovatar, {
						[g.a.premiumGlow]: y
					}),
					src: j || void 0
				})), !v && E && s.a.createElement(d.a, {
					to: "/settings/profile",
					className: g.a.snoovatarSettingsLink
				}, s.a.createElement(c.a, {
					name: "settings",
					className: N.a.settingsIcon
				}))), s.a.createElement(k.a, {
					isEmployee: C,
					isGold: y,
					isNSFW: I,
					title: P,
					username: R
				}), s.a.createElement(f.a, {
					className: g.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: R,
					userCreated: T,
					url: M
				}), (E || !r && !!j) && s.a.createElement(p.a, {
					compact: n,
					currentUserHasSnoovatar: r,
					isOwnProfile: E,
					onClick: w
				}), A && s.a.createElement(h.a, {
					username: R,
					isHovercard: !!F,
					share: {
						username: R
					}
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, n) {
			e.exports = {
				actionItem: "_1l7CTV4NjDjmzX8DiiSgTL",
				AwardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				awardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				textColumn: "_wi1DtT7oN7k_x5oIV8zm",
				iconColumn: "_32tzMaZn7x3dfQC5MXndJn",
				icon: "_12jN4wdttUosp76WHzuieI",
				count: "_6xPPP5HdELF-SZJL8layH",
				awardIcon: "_2Eq8z6UD7I0ul3wnZ-YT80",
				adminIcon: "_1sNQxemH_0rq1jtZAMyAZd",
				snoovatarAdminIcon: "_1rf3zLc4sH59mO7_BEXyze",
				snoovatarPremiumIcon: "_3QQFENUs15G6BHI5pjsswJ",
				button: "_2q1wcTx60QKM_bQ1Maev7b"
			}
		},
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/SidebarContainer/index.tsx"),
				d = n("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				l = n("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				c = n("./src/reddit/components/SidebarProfilePowerupContributions/index.tsx"),
				u = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				m = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				p = n("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				h = n("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				b = n("./src/reddit/constants/posts.ts"),
				f = n("./src/reddit/selectors/experiments/econ/index.ts");
			const v = Object(r.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-ProfileIdCard").then(n.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				g = e => {
					const t = Object(o.e)(e => Object(f.l)(e));
					return i.a.createElement(a.a, {
						className: e.className
					}, i.a.createElement(v, {
						profileName: e.profileName,
						isOverlay: e.isOverlay
					}), i.a.createElement(h.a, {
						subredditOrProfile: {
							name: e.profileName,
							type: b.a.PROFILE
						}
					}), i.a.createElement(d.a, {
						profileName: e.profileName
					}), i.a.createElement(l.a, {
						profileName: e.profileName
					}), !t && i.a.createElement(u.a, null, i.a.createElement(c.a, {
						profileName: e.profileName
					})), i.a.createElement(u.a, null, i.a.createElement(p.a, {
						profileName: e.profileName
					})), i.a.createElement(m.a, {
						hideBackToTop: e.hideBackToTop
					}))
				};
			g.defaultProps = {
				isOverlay: !1
			}, t.a = g
		},
		"./src/reddit/components/Scroller/Simple.m.less": function(e, t, n) {
			e.exports = {
				Hidden: "wwHbgRV0ZXGp5CHHlpo5u",
				hidden: "wwHbgRV0ZXGp5CHHlpo5u"
			}
		},
		"./src/reddit/components/Scroller/Simple.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Z
			}));
			var r = n("./node_modules/lodash/debounce.js"),
				s = n.n(r),
				i = n("./node_modules/lodash/isNil.js"),
				o = n.n(i),
				a = n("./node_modules/react/index.js"),
				d = n.n(a),
				l = n("./node_modules/react-dom/index.js"),
				c = n("./node_modules/react-redux/es/index.js"),
				u = n("./node_modules/request-idle-callback/index.js"),
				m = n("./node_modules/reselect/es/index.js"),
				p = n("./src/lib/constants/index.ts"),
				h = n("./src/lib/fastdom/index.ts"),
				b = n("./node_modules/lodash/throttle.js"),
				f = n.n(b);
			const v = 500,
				g = 1e3,
				x = 40;
			var C;
			! function(e) {
				e.Max10 = "0-10", e.Max20 = "11-20", e.Max30 = "21-30", e.Max40 = "31-40", e.Max50 = "41-50", e.Max60 = "51-60"
			}(C || (C = {}));
			const y = () => ({
					[C.Max10]: 0,
					[C.Max20]: 0,
					[C.Max30]: 0,
					[C.Max40]: 0,
					[C.Max50]: 0,
					[C.Max60]: 0
				}),
				I = [C.Max10, C.Max20, C.Max30, C.Max40, C.Max50, C.Max60],
				E = e => ({
					eventHandler: e
				});

			function w(e) {
				let {
					fn: t,
					subscriber: n,
					timeout: r
				} = e;
				const s = [];
				let i, o, a;
				const d = () => {
						if (s.length < x) return;
						const e = y(),
							t = Math.min(g, s.length),
							r = s.splice(0, t);
						s.splice(0, s.length);
						const i = r[t - 1] - r[0];
						for (let n = r.shift(); r.length > 0; n = r.shift()) {
							const t = r[0] - n,
								s = Math.min(60, Math.ceil(1e3 / t));
							e[s <= 10 ? C.Max10 : 60 === s ? C.Max60 : I[Math.ceil(s / 10) - 1]] += t
						}
						const o = y();
						for (const n in e) o[n] = e[n] / i;
						n(o)
					},
					l = () => {
						void 0 !== a && (window.clearTimeout(a), a = void 0)
					},
					c = () => {
						void 0 !== i && (cancelAnimationFrame(i), i = void 0), void 0 !== o && (window.clearInterval(o), o = void 0), l(), d()
					},
					u = () => {
						i = requestAnimationFrame(() => {
							s.push(performance.now()), u()
						})
					},
					m = f()(() => {
						l(), a = window.setTimeout(c, r)
					}, p.K);
				return {
					cleanup: c,
					eventHandler: e => {
						void 0 === o ? (u(), m(), o = window.setInterval(d, v)) : m(), t(e)
					}
				}
			}
			var O = n("./src/lib/scheduler/index.ts"),
				S = n("./src/lib/domUtils/index.ts"),
				_ = n("./src/lib/LinkedListMap/index.ts");
			const j = (e, t) => e < 0 ? t + e : e % t;
			class N {
				constructor(e) {
					this.head = 0, this.size = 0, this.maxSize = e, this.items = new Array(e)
				}
				push(e) {
					return this.items[this.head] = e, this.head = j(this.head + 1, this.maxSize), this.size < this.maxSize && this.size++, this
				}
				pop() {
					if (this.size > 0) {
						const e = j(this.head - 1, this.maxSize),
							t = this.items[e];
						return this.items[e] = void 0, this.head = e, this.size--, t
					}
				}
				forEach(e) {
					let t = this.size < this.maxSize ? j(this.head - this.size, this.maxSize) : this.head;
					for (let n = 0; n < this.size; n++) e(this.items[t], n, this.size), t = (t + 1) % this.maxSize
				}
				map(e) {
					const t = new Array(this.size);
					return this.forEach((n, r, s) => {
						t[r] = e(n, r, s)
					}), t
				}
				getEntries() {
					const e = new Array(this.size);
					return this.forEach((t, n) => {
						e[n] = t
					}), e
				}
				clear() {
					const e = this.size;
					for (let t = 0; t < e; t++) this.pop()
				}
			}
			var k = n("./src/reddit/components/Scroller/getDocumentTop.ts");
			class P {
				constructor(e) {
					let {
						top: t,
						height: n,
						heightWithSuffix: r
					} = e;
					this.height = n, this.heightWithSuffix = r, this.top = t, this.bottom = this.top + this.height
				}
				contains(e) {
					return !(e.top <= this.top || e.bottom >= this.bottom)
				}
				intersects(e) {
					return !(e.bottom <= this.top || e.top >= this.bottom)
				}
				intersectsBorder(e) {
					return e.top <= this.top && e.bottom >= this.top || e.bottom >= this.bottom && e.top <= this.bottom
				}
				containsTop(e) {
					return !(e.top < this.top || e.top > this.bottom)
				}
				isAbove(e) {
					return e.top > this.bottom
				}
				isBelow(e) {
					return e.bottom < this.top
				}
			}
			const T = function() {
				let {
					buffer: e,
					container: t
				} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				const n = o()(e) ? 1e3 : e;
				if ("undefined" != typeof window && t) {
					const e = t === document ? Object(k.a)() : t.scrollTop;
					return new P({
						top: e,
						height: window.innerHeight
					})
				}
				return new P({
					top: 0,
					height: n
				})
			};
			var R = n("./src/reddit/components/ResizeSensor/index.tsx"),
				M = n("./src/reddit/constants/componentSizes.ts"),
				F = n("./src/reddit/constants/elementClassNames.ts"),
				A = n("./src/reddit/contexts/InsideOverlay.tsx"),
				L = n("./src/reddit/selectors/platform.ts"),
				B = n("./src/telemetry/helpers/sendEvent.ts"),
				U = n("./src/telemetry/helpers/sendTiming.ts"),
				H = n("./src/reddit/components/Scroller/Simple.m.less"),
				W = n.n(H);
			const D = M.g,
				V = 5 * p.K,
				z = 3,
				K = Object(m.c)({
					isOverlayOpen: L.i
				}),
				G = Object(c.b)(K),
				q = {};

			function Z(e) {
				return e === document
			}

			function Q(e) {
				let t = 0;
				do {
					t += e.offsetTop || 0, e = e.offsetParent
				} while (e);
				return t
			}
			const Y = 10,
				J = .9,
				X = .9,
				$ = 1.8,
				ee = 5,
				te = 1500,
				ne = 2 * p.K,
				re = 400,
				se = 8,
				ie = 5 * p.K,
				oe = 30,
				ae = "object" == typeof performance && "function" == typeof performance.now,
				de = () => ae ? performance.now() : Date.now();

			function le(e, t) {
				return _.a.fromArray(e.children.map((e, n) => {
					const r = t && t.get(e.id);
					return r ? (r.isFocusable = !!e.isFocusable, r.trackOnEnteredViewport = e.trackOnEnteredViewport, r.trackOnExitedViewport = e.trackOnExitedViewport, r) : {
						el: null,
						id: e.id,
						index: n,
						isFocusable: !!e.isFocusable,
						itemRef: void 0,
						focused: !1,
						loaded: !t && n < ee,
						rectangle: void 0,
						trackOnEnteredViewport: e.trackOnEnteredViewport,
						trackOnExitedViewport: e.trackOnExitedViewport
					}
				}), "id")
			}
			class ce extends d.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.lastRenderPosition = 0, this.lastScrollTime = -1, this.resetCanFocusTimer = -1, this.unmountItemsIdleId = null, this.scrollingQuickly = !1, this.visibleChildrenCount = 0, this.isRenderableChildrenStateChangePending = !1, this.parentOffsetTop = void 0, this.containerOffsetTop = void 0, this.distanceToTop = void 0, this.measurementsInvalid = !1, this.viewport = void 0, this.mountableViewport = void 0, this.needsToPauseViewportItems = !0, this.updateRenderableChildrenWhenIdleHandle = null, this.requestUpdateWhenIdleCallbackHandle = null, this.pendingScollHandlerRead = null, this.pendingResizeHandlerRead = null, this.renderableViewport = void 0, this.sendFPSData = e => {
						const t = {
							name: this.props.trackingName
						};
						B.b.enqueue(new O.a({
							args: [e, t],
							cb: (e, t) => Object(U.a)(p.n.Redesign, {
								data: e,
								meta: t,
								type: "scrollfps"
							})
						}))
					}, this.getVisibleChildren = () => {
						let e = 0;
						const t = te + (this.props.viewportTopPadding ? this.props.viewportTopPadding : 0),
							n = [];
						let r = this.nextVisibleChildrenIndex;
						for (; e < t && r < this.props.children.length;) {
							const t = this.props.children[r];
							n.push(t), e += t.estHeight, r++
						}
						return this.visibleChildrenCount = n.length, n
					}, this.setRenderableChildrenIndexIncrement = () => {
						if (this.props.children[0]) {
							const e = this.props.children[0].estHeight;
							this.renderableChildrenIndexIncrement = Math.min(Math.ceil(re / e), se)
						} else this.renderableChildrenIndexIncrement = se
					}, this.updateRenderableChildrenWhenIdle = () => {
						this.cancelPopulateRenderableChildrenWhenIdle(), this.hasScrolledWithinThreshold() || (this.timeoutForUpdateIdleCallback = ie, Object(u.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle), this.requestUpdateWhenIdleCallbackHandle = Object(u.requestIdleCallback)(() => {
							const e = Math.ceil(this.renderableChildrenIndexIncrement / 2);
							this.populateRenderableChildrenFromProps(!1, e)
						})), this.state.renderableChildren.length < this.props.children.length && this.schedulePopulateRenderableChildrenWhenIdle()
					}, this.hasScrolledWithinThreshold = () => !!this.lastScrollTime && de() - this.lastScrollTime < ne, this.populateRenderableChildrenFromProps = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
							n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.renderableChildrenIndexIncrement,
							r = arguments.length > 2 ? arguments[2] : void 0;
						const s = r || t.props.children;
						if (t.state.renderableChildren.length < s.length || e)
							if (t.hasScrolledWithinThreshold()) h.a.read(() => {
								clearTimeout(t.updateRenderableChildrenHandle), t.updateRenderableChildrenHandle = setTimeout(() => {
									t.populateRenderableChildrenFromProps(e, t.renderableChildrenIndexIncrement, r ? s : void 0)
								}, ne)
							});
							else {
								t.nextVisibleChildrenIndex + n <= s.length ? t.nextVisibleChildrenIndex += n : t.nextVisibleChildrenIndex = s.length;
								const e = s.slice(0, t.nextVisibleChildrenIndex);
								e.length && (t.lastVisibleElId = e[e.length - 1].id), h.a.write(() => {
									t.setState({
										renderableChildren: e
									})
								}), t.isRenderableChildrenStateChangePending = !0
							}
					}, this.lastElementIsAboutToBeVisible = () => {
						if (this.lastVisibleEl) {
							if (this.lastVisibleEl.getBoundingClientRect().top < window.innerHeight + re) return !0
						}
						return !1
					}, this.getRenderableChildrenIndexIncrement = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oe,
							n = 0,
							r = t.state.renderableChildren.length;
						for (; n < e && r < t.props.children.length;) n += t.props.children[r].estHeight, r++;
						const s = r - t.state.renderableChildren.length;
						return Math.max(t.renderableChildrenIndexIncrement, s)
					}, this.schedulePopulateRenderableChildrenWhenIdle = () => {
						!this.props.isOverlayOpen || this.props.isOverlay ? this.updateRenderableChildrenWhenIdleHandle = setTimeout(() => {
							this.updateRenderableChildrenWhenIdle()
						}, this.timeoutForUpdateIdleCallback) : this.cancelPopulateRenderableChildrenWhenIdle()
					}, this.cancelPopulateRenderableChildrenWhenIdle = () => {
						clearTimeout(this.updateRenderableChildrenWhenIdleHandle), Object(u.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle)
					}, this.callOnScrollForItemsChanged = s()(() => {
						this.handleScroll()
					}, p.K), this.pauseAllElements = () => {
						const e = this.getItemsInViewportWithFilter(this.loadedChildRefFilter),
							t = [];
						e.forEach(e => {
							const {
								itemRef: n
							} = e;
							n && (e.focused = !1, t.push(n.pauseContent))
						}), h.a.write(() => {
							t.forEach(e => e())
						})
					}, this.elementIsVisible = e => !!this.viewport && this.viewport.intersects(e), this.getItemsInViewportWithFilter = e => {
						this.updateViewportInfo();
						const t = new _.a("id");
						return this.state.renderableChildren.forEach(n => {
							const r = this.childMap.get(n.id);
							r && e(r) && t.push(r)
						}), t
					}, this.visibleChildRefFilter = e => {
						const t = this.getChildRectangle(e);
						return t && this.elementIsVisible(t) || !1
					}, this.loadedChildRefFilter = e => e.loaded, this.resetScrollFramerateAndFocus = () => {
						this.scrollContainer && (this.pixelsPerMSRing.clear(), this.lastScrollTime = -1, this.needsToPauseViewportItems = !0, null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(u.requestIdleCallback)(this.unmountItemsWhileIdle)), setTimeout(this.handleScroll, p.K))
					}, this.setContainerRef = e => {
						this.containerRef = e, this.props.innerRef && this.props.innerRef(e)
					}, this.getChildRectangle = e => {
						const {
							el: t
						} = e;
						if (!t) return;
						if (e.rectangle && !this.measurementsInvalid) return e.rectangle;
						if (void 0 === this.parentOffsetTop) {
							const e = t.offsetParent;
							this.parentOffsetTop = (null == e ? void 0 : e.offsetTop) || 0;
							const n = (null == e ? void 0 : e.getBoundingClientRect().top) || 0;
							this.distanceToTop = n + this.getScrollTop()
						}
						const n = t.offsetTop + this.parentOffsetTop,
							r = t.getBoundingClientRect().height,
							s = new P({
								top: n,
								height: r,
								heightWithSuffix: `${r}px`
							});
						return e.rectangle = s, s
					}, this.handleResize = e => {
						this.fpsMeter && this.fpsMeter.eventHandler(e);
						for (const t in this.hiddenChildren) this.remeasureWhenShown[t] = !0;
						this.measurementsInvalid = !0, this.callOnScrollForItemsChanged()
					}, this.getTotalOffsetTop = () => this.containerRef ? Q(this.containerRef) : 0, this.handleContentContainerResize = s()(() => {
						this.pendingResizeHandlerRead || (this.pendingResizeHandlerRead = h.a.read(() => {
							const e = this.getTotalOffsetTop();
							e !== this.containerOffsetTop && (this.containerOffsetTop = e, this.handleResize()), this.pendingResizeHandlerRead = null
						}))
					}, p.K), this.handleScroll = () => {
						this.pendingScollHandlerRead || (this.pendingScollHandlerRead = h.a.read(() => {
							if (clearTimeout(this.resetCanFocusTimer), this.cancelPopulateRenderableChildrenWhenIdle(), Object(S.b)() || !this.scrollContainer) return void(this.pendingScollHandlerRead = null);
							this.updateScrollMetrics();
							const e = this.getAveragePixelsPerMilliSecond(),
								t = e < J,
								n = e < X,
								r = e < $;
							if (this.scrollContainer && !this.loadMoreFired && this.props.onLoadMore) {
								let e = !1;
								if (void 0 !== this.props.loadMoreToken && void 0 !== this.viewport && this.nextVisibleChildrenIndex >= this.props.children.length) {
									const t = this.getTotalOffsetTop();
									e = !!this.containerRef && this.containerRef.offsetHeight + t - this.viewport.bottom <= this.viewport.height
								}
								if (e) {
									const {
										onLoadMore: e
									} = this.props;
									setTimeout(e), this.loadMoreFired = !0
								}
							}
							this.populateRenderableChildrenIfLastChildIsVisible();
							const s = new _.a("id");
							let i, o;
							const a = [];
							this.state.renderableChildren.forEach(e => {
								const d = this.childMap.get(e.id);
								let l;
								if (d && d.el) {
									if (!(l = this.getChildRectangle(d))) return;
									const {
										id: e
									} = d;
									this.elementIsHideable(l) ? void 0 === this.hiddenChildren[e] && (this.childrenToHide[e] = l.heightWithSuffix) : void 0 !== this.hiddenChildren[e] && (this.childrenToShow[e] = !0)
								}
								if (!d || !d.el || !d.rectangle) return void(this.measurementsInvalid && d && this.getChildRectangle(d));
								const {
									id: c,
									itemRef: u,
									trackOnEnteredViewport: m
								} = d, p = !!this.itemsInViewport.get(c);
								if (this.elementIsUnmountable(l)) u && p && d.loaded && d.isFocusable && a.push(u.pauseContent);
								else if (u && this.loadItemIfPossible(d, u, t, n, r, a), this.elementIsVisible(l)) {
									s.push(d), !p && m && B.b.enqueue(new O.a({
										cb: m,
										args: void 0
									}));
									const e = this.elementIsFocused(l);
									e && !o && (o = d.id), t && d.isFocusable && !i && e ? (i = d.id, d.focused || (d.focused = !0, u && a.push(u.focusContent))) : d.loaded && d.isFocusable && (d.focused || this.needsToPauseViewportItems) && (d.focused = !1, u && a.push(u.pauseContent))
								} else p && d.loaded && d.isFocusable && (d.focused = !1, u && a.push(u.stopContent))
							}), h.a.write(() => {
								a.forEach(e => e()), this.props.enableElementHiding && this.hideOrShowChildren()
							}), this.itemsInViewport.forEach(e => {
								let {
									id: t,
									trackOnExitedViewport: n
								} = e;
								n && !s.has(t) && B.b.enqueue(new O.a({
									cb: n,
									args: [!1]
								}))
							}), this.itemsInViewport = s, this.canFocusItems = t, this.focusedChild = i, this.primaryChild = o, this.measurementsInvalid = !1, this.needsToPauseViewportItems = !1, t ? null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(u.requestIdleCallback)(this.unmountItemsWhileIdle)) : (this.resetCanFocusTimer = setTimeout(this.resetScrollFramerateAndFocus, V), null !== this.unmountItemsIdleId && (Object(u.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)), this.props.onScroll && this.props.onScroll({
								getVisibleItemsInViewport: () => this.getItemsInViewportWithFilter(this.visibleChildRefFilter),
								primaryChild: this.primaryChild ? this.childMap.get(this.primaryChild) : void 0
							}), this.timeoutForUpdateIdleCallback = 4 * ie, this.schedulePopulateRenderableChildrenWhenIdle(), this.pendingScollHandlerRead = null
						}))
					}, this.unmountItemsWhileIdle = e => {
						if (!this.scrollContainer) return;
						const t = [];
						if (this.state.renderableChildren.forEach(e => {
								const n = this.childMap.get(e.id);
								if (!n || !n.el || !n.itemRef) return;
								const r = this.getChildRectangle(n);
								r && this.elementIsUnmountable(r) && n.loaded && t.push(n)
							}), !t.length) return;
						const n = Math.min(Math.ceil(e.timeRemaining() / z), t.length),
							r = [];
						for (let s = 0; s < n; s++) {
							const e = t[s];
							r.push(e.itemRef.unmountContent), e.loaded = !1, e.focused = !1
						}
						Object(l.unstable_batchedUpdates)(() => {
							this.scrollContainer && r.forEach(e => e())
						}), n < t.length ? this.unmountItemsIdleId = Object(u.requestIdleCallback)(this.unmountItemsWhileIdle) : this.unmountItemsIdleId = null
					}, this.hideOrShowChildren = s()(() => {
						for (const e in this.childrenToHide) {
							const t = this.childrenToHide[e];
							void 0 !== t && (this.hideChild(e, t), this.childrenToHide[e] = void 0)
						}
						for (const e in this.childrenToShow) void 0 !== this.childrenToShow[e] && (this.showChild(e), this.childrenToShow[e] = void 0)
					}, p.K), this.hideChild = (e, t) => {
						const n = this.childMap.get(e);
						if (!n || !n.el) return;
						const r = n.el.firstChild;
						r && (t !== n.el.style.height && (n.el.style.height = t), r.classList.add(W.a.Hidden), this.hiddenChildren[e] = t, n.loaded && h.a.write(() => {
							n.itemRef && (n.loaded = !1, n.focused = !1, n.itemRef.unmountContent())
						}))
					}, this.showChild = e => {
						const t = this.childMap.get(e);
						if (!t || !t.el) return;
						const n = t.el.firstChild;
						n && (this.remeasureWhenShown[t.id] && (this.measurementsInvalid = !0, this.remeasureWhenShown[t.id] = void 0), t.el.style.height = "", n.classList.remove(W.a.Hidden), void 0 !== this.hiddenChildren[e] && (this.hiddenChildren[e] = void 0))
					}, this.getStylesForOuterWrapper = e => {
						if (void 0 !== this.hiddenChildren[e]) return {
							height: this.hiddenChildren[e]
						}
					}, this.remeasureChild = e => {
						this.measurementsInvalid = !0
					}, this.scrollToChild = (e, t) => {
						this.measurementsInvalid = !0, h.a.read(() => {
							const n = this.childMap.get(e);
							if (n && n.el && this.scrollContainer) {
								if (n.rectangle = void 0, t && this.isScrollChildTopVisible(e)) return;
								const r = this.getScrollTop() + n.el.getBoundingClientRect().top - (this.props.scrollToChildPadding || 0) - (this.props.viewportTopPadding || 0);
								setTimeout(() => {
									this.scrollContainer && (Object(S.c)(this.scrollContainer, r), this.callOnScrollForItemsChanged())
								}, p.K)
							}
						})
					}, this.isScrollChildTopVisible = e => {
						const t = this.childMap.get(e);
						if (t && t.el && this.scrollContainer) {
							const {
								scrollToChildPadding: e = 0,
								viewportTopPadding: n = 0
							} = this.props, r = window.innerHeight - n, {
								top: s
							} = t.el.getBoundingClientRect();
							return s >= n + e && s < r
						}
						return !1
					}, this.childMap = le(e), this.containerRef = null, this.itemsInViewport = new _.a("id"), this.loadMoreFired = !1, this.pixelsPerMSRing = new N(Y), this.wrapperRefFNs = {}, this.childRefFns = {}, this.childrenToHide = {}, this.childrenToShow = {}, this.canFocusItems = !0, this.focusedChild = void 0, this.hiddenChildren = {}, this.nextVisibleChildrenIndex = 0, this.lastVisibleEl = null, this.lastVisibleElId = null, this.remeasureWhenShown = {}, this.timeoutForUpdateIdleCallback = ie;
					const n = this.getVisibleChildren();
					n.length && (this.lastVisibleElId = n[n.length - 1].id), this.nextVisibleChildrenIndex = n.length, this.updateRenderableChildrenHandle = null, this.state = {
						renderableChildren: n
					}, this.setRenderableChildrenIndexIncrement(), this.validateScrollPreservationProps(e), this.validateLoadMoreProps(e)
				}
				hasRenderedAllChildren() {
					return !(this.state.renderableChildren.length < this.props.children.length) && (this.props.onAllChildrenRendered && this.props.onAllChildrenRendered(), !0)
				}
				populateRenderableChildrenIfLastChildIsVisible() {
					this.isRenderableChildrenStateChangePending || this.hasRenderedAllChildren() || h.a.read(() => {
						if (!this.isRenderableChildrenStateChangePending && this.lastElementIsAboutToBeVisible()) {
							const e = this.getRenderableChildrenIndexIncrement();
							this.populateRenderableChildrenFromProps(!1, e)
						}
					})
				}
				setupScrollHandler() {
					this.fpsMeter = this.props.trackingName ? w({
						fn: this.handleScroll,
						subscriber: this.sendFPSData,
						timeout: V
					}) : E(this.handleScroll), this.scrollContainer && this.scrollContainer.addEventListener("scroll", this.fpsMeter.eventHandler), window.addEventListener("resize", this.handleResize)
				}
				cleanupScrollHandler() {
					this.fpsMeter && ("function" == typeof this.fpsMeter.cleanup && this.fpsMeter.cleanup(), this.scrollContainer && this.scrollContainer.removeEventListener("scroll", this.fpsMeter.eventHandler), window.removeEventListener("resize", this.handleResize), this.pendingScollHandlerRead && (h.a.clear(this.pendingScollHandlerRead), this.pendingScollHandlerRead = null), this.pendingResizeHandlerRead && (h.a.clear(this.pendingResizeHandlerRead), this.pendingResizeHandlerRead = null))
				}
				componentDidMount() {
					this.props.getContainer ? this.scrollContainer = this.props.getContainer() || document : this.scrollContainer = document, this.props.onScroll && this.props.onScroll({
						getVisibleItemsInViewport: () => this.getItemsInViewportWithFilter(this.visibleChildRefFilter),
						primaryChild: void 0
					}), this.props.disableScrollCache && !this.props.preventScrollOnMount && Object(S.c)(this.scrollContainer, 0), this.setupScrollHandler(), h.a.write(() => {
						if (!this.props.disableScrollCache) {
							const e = this.getCacheKey(),
								t = q[e];
							o()(t) || (q[e] = void 0, this.scrollContainer && Object(S.c)(this.scrollContainer, t))
						}
						this.callOnScrollForItemsChanged(), this.props.onLastVisibleChildRendered && this.props.onLastVisibleChildRendered()
					}), h.a.read(() => {
						this.containerOffsetTop = this.getTotalOffsetTop()
					}), this.schedulePopulateRenderableChildrenWhenIdle()
				}
				componentDidUpdate(e) {
					if (this.isRenderableChildrenStateChangePending = !1, this.measurementsInvalid = !0, this.scrollTargetId && (this.scrollToChild(this.scrollTargetId, !1), this.scrollTargetId = void 0), this.didLayoutAloneChange(e, this.props)) {
						this.callExitedViewportForUnmount(), this.focusedChild = void 0, this.childrenToShow = {}, this.childrenToHide = {}, this.hiddenChildren = {}, this.childMap.forEach(e => {
							e.loaded = !1, e.focused = !1
						}), this.setRenderableChildrenIndexIncrement(), this.populateRenderableChildrenFromProps(!0), this.callOnScrollForItemsChanged();
						const e = this.getVisibleChildren();
						this.visibleChildrenCount = e.length, this.schedulePopulateRenderableChildrenWhenIdle()
					}
					this.populateRenderableChildrenIfLastChildIsVisible(), e.trackingName !== this.props.trackingName && (this.cleanupScrollHandler(), this.setupScrollHandler())
				}
				shouldComponentUpdate(e) {
					return e.isOverlayOpen === this.props.isOverlayOpen
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.validateScrollPreservationProps(e) && this.validateLoadMoreProps(e) && this.didLayoutAloneChange(this.props, e) && this.hasBeenScrolled() && this.handleScroll(), e.loadMoreToken !== this.props.loadMoreToken && (this.loadMoreFired = !1, this.loadMoreEl = null), e.isOverlayOpen !== this.props.isOverlayOpen && e.isOverlayOpen && !this.props.isOverlay && h.a.read(this.pauseAllElements), e.isOverlayOpen === this.props.isOverlayOpen || e.isOverlayOpen || this.props.isOverlay || this.resetScrollFramerateAndFocus(), this.childMap = le(e, this.childMap);
					const t = e.children.length < this.props.children.length,
						n = e.children.length === this.props.children.length && e.children.some((e, t) => e.id !== this.props.children[t].id);
					this.populateRenderableChildrenFromProps(t || n, this.renderableChildrenIndexIncrement, e.children), this.schedulePopulateRenderableChildrenWhenIdle()
				}
				componentWillUnmount() {
					if (this.callExitedViewportForUnmount(), this.cleanupScrollHandler(), clearTimeout(this.updateRenderableChildrenHandle), this.cancelPopulateRenderableChildrenWhenIdle(), this.scrollContainer && !this.props.disableScrollCache) {
						const e = this.getCacheKey();
						q[e] = this.lastRenderPosition
					}
					this.childMap = new _.a("id"), this.itemsInViewport = new _.a("id"), this.wrapperRefFNs = {}, this.childRefFns = {}, this.containerRef = null, this.loadMoreEl = void 0, this.scrollContainer = void 0, this.unmountItemsIdleId && (Object(u.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)
				}
				didLayoutAloneChange(e, t) {
					return "string" == typeof e.layoutKey && "string" == typeof t.layoutKey && e.layoutKey !== t.layoutKey && "string" == typeof e.dataKey && "string" == typeof t.layoutKey && e.dataKey === t.dataKey
				}
				elementIsFocused(e) {
					if (!this.viewport) return !1;
					const t = this.distanceToTop ? this.distanceToTop : 0,
						n = this.parentOffsetTop ? this.parentOffsetTop : 0,
						r = e.bottom + t - n,
						s = e.top + t - n,
						i = Math.min(this.viewport.bottom, r) - Math.max(this.viewport.top, s),
						o = i / e.height,
						a = i / this.viewport.height;
					return o > .75 || a > .9
				}
				getFirstItemInViewport() {
					for (const {
							id: e
						} of this.props.children) {
						const t = this.childMap.get(e);
						if (t) {
							const e = this.getChildRectangle(t);
							if (e && this.elementIsVisible(e)) return t
						}
					}
				}
				elementIsUnmountable(e) {
					return !!this.mountableViewport && !this.mountableViewport.intersects(e)
				}
				elementIsHideable(e) {
					return !!this.renderableViewport && !this.renderableViewport.intersects(e)
				}
				getCacheKey() {
					return this.props.children.map(e => e.id).join("-")
				}
				getScrollTop() {
					return this.scrollContainer ? Z(this.scrollContainer) ? Object(k.a)() : this.scrollContainer.scrollTop : 0
				}
				updateViewportInfo() {
					if (this.scrollContainer) {
						this.viewport = T({
							buffer: 0,
							container: this.scrollContainer
						});
						const {
							viewportTopPadding: e = 0
						} = this.props, t = window.innerHeight - e, n = 2 * t;
						this.mountableViewport = new P({
							top: this.viewport.top - n,
							height: this.viewport.height + 2 * n
						});
						const r = 4 * t;
						this.renderableViewport = new P({
							top: this.viewport.top - r,
							height: this.viewport.height + 2 * r
						})
					}
				}
				updateScrollMetrics() {
					this.updateViewportInfo();
					const e = de(),
						t = this.getScrollTop(),
						n = Math.abs(this.lastRenderPosition - t),
						r = e - this.lastScrollTime,
						s = this.lastScrollTime > -1;
					this.lastScrollTime = e, this.lastRenderPosition = t, s ? this.pixelsPerMSRing.push(n / r) : this.lastScrollTime = e
				}
				getAveragePixelsPerMilliSecond() {
					if (this.pixelsPerMSRing.size > 1) {
						let e = 0;
						return this.pixelsPerMSRing.forEach(t => e += t), e / this.pixelsPerMSRing.size
					}
					return 0
				}
				_wrapperRefFN(e, t) {
					const n = this.childMap.get(e);
					n && (n.el = t), this.lastVisibleElId === e && (this.lastVisibleEl = t)
				}
				getWrapperRefFN(e) {
					let t = this.wrapperRefFNs[e];
					return t || (t = t => {
						this._wrapperRefFN(e, t)
					}, this.wrapperRefFNs[e] = t), t
				}
				_childRefFn(e, t, n) {
					const r = this.childMap.get(e);
					r && (r.itemRef = t, r.loaded = !!t && (void 0 !== n ? n : r.loaded), this.callOnScrollForItemsChanged())
				}
				getChildRefFn(e) {
					let t = this.childRefFns[e];
					return t || (t = (t, n) => {
						this._childRefFn(e, t, n)
					}, this.childRefFns[e] = t), t
				}
				loadItemIfPossible(e, t, n, r, s, i) {
					if (t.contentIsHeavyToMount() ? r : s) {
						const r = !e.isFocusable || n;
						!e.loaded && r && (e.loaded = !0, i.push(t.loadContent))
					}
				}
				callExitedViewportForUnmount() {
					this.itemsInViewport.forEach(e => {
						let {
							id: t,
							trackOnExitedViewport: n
						} = e;
						n && B.b.enqueue(new O.a({
							cb: n,
							args: [!0]
						}))
					})
				}
				hasBeenScrolled() {
					if (!this.containerRef) return !1;
					const {
						viewportTopPadding: e = 0
					} = this.props, t = Q(this.containerRef);
					return this.getScrollTop() + e - t > 0
				}
				render() {
					const {
						contentContainerRef: e
					} = this.props;
					return d.a.createElement("div", {
						className: this.props.className,
						ref: this.setContainerRef
					}, this.state.renderableChildren.map((e, t) => d.a.createElement("div", {
						key: `scroller-${e.id}`,
						ref: this.getWrapperRefFN(e.id),
						style: this.getStylesForOuterWrapper(e.id)
					}, d.a.createElement("div", {
						className: this.hiddenChildren[e.id] ? W.a.Hidden : void 0
					}, e.render({
						className: F.k,
						height: e.estHeight,
						placeholderRecommended: !1,
						remeasure: this.remeasureChild,
						scrollToAndRemeasure: this.scrollToChild,
						setScrollerChildRef: this.getChildRefFn(e.id),
						shouldLoadInitially: t < ee,
						width: D
					})))), !!e && d.a.createElement(R.a, {
						containerRef: e,
						onResize: this.handleContentContainerResize
					}))
				}
				validateScrollPreservationProps(e) {
					return "string" != typeof e.layoutKey || void 0 !== e.dataKey
				}
				validateLoadMoreProps(e) {
					return void 0 === e.onLoadMore || "loadMoreToken" in e
				}
			}
			t.b = G(Object(A.b)(ce))
		},
		"./src/reddit/components/Scroller/getDocumentTop.ts": function(e, t, n) {
			"use strict";
			t.a = () => document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || 0
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/SidebarContainer/index.m.less"),
				i = n.n(s);
			t.a = r.a.div("container", i.a)
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/take.js"),
				i = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = n("./src/reddit/layout/row/Inline/index.tsx"),
				p = n("./src/reddit/layout/row/RightAlign/index.tsx");
			const h = e => {
				const {
					className: t,
					hasMoreItems: n,
					headerButton: s,
					items: d,
					minimizedLength: h,
					onLoadMore: b,
					pending: f,
					renderItem: v,
					title: g
				} = e, [x, C] = Object(o.useState)(!1), y = d.length > h || n, I = (!y || x ? d : i()(d, h)).map(e => v({
					item: e
				})), E = () => {
					x || C(!0), x && !n && C(!1), n && b && b()
				};
				return a.a.createElement(l.a, {
					className: t,
					headerButton: s,
					title: g
				}, I, a.a.createElement(m.a, null, a.a.createElement(p.a, null, y && (() => {
					const e = !x || n && b ? r.fbt._("View More", null, {
						hk: "1RK8uA"
					}) : r.fbt._("View Less", null, {
						hk: "1M72mK"
					});
					return a.a.createElement(c.r, {
						onClick: E
					}, f ? a.a.createElement(u.a, {
						sizePx: 10
					}) : e)
				})())))
			};
			h.defaultProps = {
				minimizedLength: d.Tb
			}, t.a = h
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, n) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				NoneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				noneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				CountryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR",
				countryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = n("./src/reddit/constants/location.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/helpers/getReredditLinkWithYear/index.ts"),
				h = n("./src/reddit/helpers/trackers/navigation.ts"),
				b = n("./src/reddit/selectors/experiments/countrySites.ts"),
				f = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				v = n("./src/reddit/selectors/meta.ts"),
				g = n("./src/reddit/components/SidebarFooter/index.m.less"),
				x = n.n(g);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), y = d.a.a("Link", x.a), I = Object(o.c)({
				isCountrySitesEnabled: b.b,
				isNavbarLikeMwebEnabled: f.a,
				countryCode: v.b
			}), E = Object(i.b)(I), w = Object(m.u)({
				isFrontpage: m.A,
				isCountrySitePage: m.y
			});
			t.a = w(E(Object(l.c)(e => {
				const t = Object(i.f)().getState(),
					n = Object(b.a)(t, Object(a.c)());
				if (e.isNavbarLikeMwebEnabled) return e.isFrontpage ? s.a.createElement(c.a, {
					className: x.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, s.a.createElement("div", {
					className: x.a.LinkContainer
				}, s.a.createElement("div", {
					className: x.a.Column
				}, s.a.createElement(y, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, C._("User Agreement", null, {
					hk: "2RA6JL"
				})), s.a.createElement(y, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, C._("Privacy policy", null, {
					hk: "10K04G"
				}))), s.a.createElement("div", {
					className: x.a.Column
				}, s.a.createElement(y, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, C._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(y, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, C._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), s.a.createElement("div", {
					className: x.a.Copyright
				}, C._("© {year} Reddit, Inc. All rights reserved.", [C._param("year", (new Date).getFullYear().toString())], {
					hk: "sR7zP"
				}))) : null;
				const r = t => {
					const r = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "USA/Global",
						it: "Italiano"
					};
					return n.includes(t) || "en" === t ? s.a.createElement(y, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(h.a)(t))
					}, r[t]) : null
				};
				return s.a.createElement(c.a, {
					className: x.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, s.a.createElement("div", {
					className: x.a.LinkContainer
				}, s.a.createElement("div", {
					className: x.a.Column
				}, s.a.createElement(y, {
					href: "https://www.reddithelp.com"
				}, C._("help", null, {
					hk: "4lyYaD"
				})), s.a.createElement(y, {
					href: "https://www.reddit.com/coins"
				}, C._("Reddit coins", null, {
					hk: "32iMaN"
				})), s.a.createElement(y, {
					href: "https://www.reddit.com/premium"
				}, C._("Reddit premium", null, {
					hk: "RuO3A"
				})), e.isFrontpage && s.a.createElement(s.a.Fragment, null, s.a.createElement(y, {
					href: "https://www.reddit.com/subreddits/a-1/"
				}, C._("Communities", null, {
					hk: "3CJu37"
				})), s.a.createElement(y, {
					href: `https://www.reddit.com${Object(p.a)()}`
				}, C._("Rereddit", null, {
					hk: "1z3k7C"
				})), s.a.createElement(y, {
					href: "https://www.reddit.com/topics/a-1/"
				}, C._("Topics", null, {
					hk: "349RFt"
				}))), !!u.b[e.countryCode] && s.a.createElement(s.a.Fragment, null, s.a.createElement(y, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, C._("Impressum", null, {
					hk: "4cKXSI"
				})), s.a.createElement(y, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, C._("Transparency report", null, {
					hk: "3CgBdG"
				})), s.a.createElement(y, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: x.a.NoneCapitalizeLink
				}, C._("Report NetzDG Content", null, {
					hk: "1nszCF"
				})))), s.a.createElement("div", {
					className: x.a.Column
				}, s.a.createElement(y, {
					href: "https://www.redditinc.com/"
				}, C._("about", null, {
					hk: "1sqJKs"
				})), s.a.createElement(y, {
					href: "https://www.redditinc.com/careers"
				}, C._("careers", null, {
					hk: "26ABvc"
				})), s.a.createElement(y, {
					href: "https://www.redditinc.com/press"
				}, C._("press", null, {
					hk: "2Qmgdz"
				})), s.a.createElement(y, {
					href: "https://www.redditinc.com/advertising"
				}, C._("advertise", null, {
					hk: "Mt40U"
				})), s.a.createElement(y, {
					href: "http://www.redditblog.com/"
				}, C._("blog", null, {
					hk: "46IQJw"
				})), s.a.createElement(y, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, C._("Terms", null, {
					hk: "4qRzfE"
				})), s.a.createElement(y, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, C._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(y, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, C._("Privacy policy", null, {
					hk: "10K04G"
				})), s.a.createElement(y, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, C._("Mod policy", null, {
					hk: "2gYc2T"
				})))), (e.isCountrySitePage || e.isFrontpage && e.isCountrySitesEnabled) && s.a.createElement("div", {
					className: x.a.CountryLinkContainer
				}, s.a.createElement("div", {
					className: x.a.Column
				}, r("en"), r("fr"), r("it")), s.a.createElement("div", {
					className: x.a.Column
				}, r("de"), r("es"))), s.a.createElement("div", {
					className: x.a.Copyright
				}, C._("Reddit Inc © {year}. All rights reserved", [C._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3thndRe559UZy14xE1gZ_"
			}
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/profile/index.ts"),
				l = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				c = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				u = n("./src/reddit/models/User/index.ts"),
				m = n("./src/reddit/selectors/profile.ts"),
				p = n("./src/reddit/selectors/subscriptions.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				f = n.n(b);
			const v = Object(a.c)({
					currentUser: h.k,
					moderated: m.n,
					subscriptions: p.e,
					hasMoreModerated: m.d,
					loadMorePending: m.a
				}),
				g = Object(o.b)(v, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(d.c)(t.profileName))
				}), (e, t, n) => ({
					...n,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				x = e => {
					let {
						item: t
					} = e;
					return i.a.createElement(c.a, {
						id: t.id,
						iconUrl: t.iconUrl,
						isNSFW: t.isNSFW,
						key: `${t.type}-${t.name}`,
						name: t.name,
						subscribers: t.subscribers,
						isSubscribed: t.isSubscribed,
						widget: void 0,
						sendEvent: () => void 0,
						type: t.type
					})
				};
			t.a = g(e => {
				const {
					currentUser: t,
					moderated: n,
					profileName: s,
					subscriptions: o,
					hasMoreModerated: a,
					onLoadMore: d,
					loadMorePending: c
				} = e;
				if (0 === n.length) return null;
				const m = t && Object(u.e)(t).toLowerCase() === s.toLowerCase() ? r.fbt._("You're a moderator of these communities", null, {
						hk: "2YoCxy"
					}) : r.fbt._("Moderator of these communities", null, {
						hk: "msvzk"
					}),
					p = function(e, t) {
						return e.map(e => ({
							name: e.name,
							subscribers: e.subscribers,
							iconUrl: e.icon.url,
							isNSFW: e.isNSFW,
							isSubscribed: t.has(e.id),
							type: "user" === e.type ? "profile" : "subreddit",
							sendEvent: () => void 0
						}))
					}(n, new Set(o));
				return i.a.createElement(l.a, {
					className: f.a.container,
					title: m,
					items: p,
					renderItem: x,
					hasMoreItems: a,
					onLoadMore: d,
					pending: c
				})
			})
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.m.less": function(e, t, n) {
			e.exports = {
				listItem: "_3lbnTBPV5H4wHdRz5ATVc9",
				icon: "Vm0_pCIi1Z6JWa0EVf6jK",
				description: "_2xcc4c-4TOL7KOsJidXtl",
				name: "_3nt8_GidTIn88UciXx27E7",
				meta: "_3iC0Hyv57ON8dAtU94HFE_"
			}
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/actions/profile/index.ts"),
				c = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				u = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				m = n("./src/reddit/selectors/profile.ts"),
				p = n("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				h = n.n(p);
			const b = Object(d.c)({
					hasMoreMultireddits: m.e,
					loadMorePending: m.b,
					multireddits: m.o
				}),
				f = Object(o.b)(b, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(l.g)(t.profileName, !0))
				}), (e, t, n) => ({
					...n,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreMultireddits && t.onLoadMoreMultireddits()
					}
				})),
				v = e => {
					let {
						item: t
					} = e;
					return i.a.createElement("div", {
						className: h.a.listItem,
						key: t.url
					}, i.a.createElement("img", {
						className: h.a.icon,
						src: t.icon
					}), i.a.createElement("div", {
						className: h.a.description
					}, i.a.createElement(a.a, {
						className: h.a.name,
						to: t.url
					}, t.displayText), i.a.createElement("div", {
						className: h.a.meta
					}, r.fbt._({
						"*": "{communities} communities",
						_1: "1 community"
					}, [r.fbt._plural(t.subredditCount, "communities")], {
						hk: "1eyxrS"
					}))))
				};
			t.a = f(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: n,
					multireddits: s,
					onLoadMore: o,
					profileName: a
				} = e;
				return s && s.length ? i.a.createElement(u.a, null, i.a.createElement(c.a, {
					hasMoreItems: t,
					items: s,
					onLoadMore: o,
					pending: n,
					renderItem: v,
					title: r.fbt._("Public custom feeds by u/{profileName}", [r.fbt._param("profileName", a)], {
						hk: "16Oicc"
					})
				})) : null
			})
		},
		"./src/reddit/components/SidebarProfilePowerupContributions/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				c = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				u = n("./src/reddit/selectors/gold/powerups/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./node_modules/reselect/es/index.js"),
				h = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				b = n.n(h);
			const f = Object(p.c)({
				subreddits: function(e, t) {
					let {
						profileName: n
					} = t;
					const r = Object(m.yb)(e, {
							userName: n
						}),
						s = Object(u.f)(e);
					return (r && s ? s[r.id] : null) || []
				}
			});

			function v(e) {
				let {
					item: t
				} = e;
				const n = t.subredditInfo,
					s = i.a.createElement(l.b, {
						iconUrl: n.styles.icon,
						className: b.a.subredditIcon
					});
				return i.a.createElement(c.a, {
					className: b.a.communityItemContainer,
					key: n.id
				}, i.a.createElement("div", {
					className: b.a.iconContainer
				}, i.a.createElement(a.a, {
					to: n.path
				}, s)), i.a.createElement("div", {
					className: b.a.communityDescription
				}, i.a.createElement("div", {
					className: b.a.communityName
				}, i.a.createElement(a.a, {
					to: n.path
				}, n.prefixedName)), i.a.createElement("div", {
					className: b.a.subscriberCount
				}, r.fbt._({
					"*": "{number} Powerups",
					_1: "1 Powerup"
				}, [r.fbt._plural(t.powerups, "number")], {
					hk: "3fbcDy"
				}))))
			}
			t.a = Object(o.b)(f)(e => {
				let {
					subreddits: t
				} = e;
				return function(e) {
					return e.length > 0 && e.every(e => e.subredditInfo)
				}(t) ? i.a.createElement(d.a, {
					title: r.fbt._("Supports Communities", null, {
						hk: "1vCNdZ"
					}),
					items: t,
					renderItem: v
				}) : null
			})
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				s = n.n(r),
				i = n("./src/lib/lessComponent.tsx");
			t.a = i.a.div("Component", s.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/lodash/throttle.js"),
				i = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/constants/elementIds.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/components/BackToTop/index.m.less"),
				m = n.n(u);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), h = e => {
				if (e) {
					const e = document.getElementById(l.d);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var b = e => {
					let {
						className: t,
						isOverlay: n,
						style: s
					} = e;
					return a.a.createElement("div", {
						className: Object(r.a)(t, m.a.container),
						style: s
					}, a.a.createElement(c.l, {
						className: m.a.button,
						onClick: () => h(n)
					}, p._("Back to Top", null, {
						hk: "YjBtV"
					})))
				},
				f = n("./src/reddit/components/SidebarFooter/index.tsx"),
				v = n("./src/reddit/constants/componentSizes.ts"),
				g = n("./src/reddit/contexts/PageLayer/index.tsx"),
				x = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				C = n.n(x),
				y = n("./src/lib/lessComponent.tsx");

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const E = d.e[1] + 24,
				w = v.f + 8,
				O = w + 152 + 16,
				S = O + E + 8,
				_ = y.a.div("Container", C.a),
				j = y.a.wrapped(e => {
					let {
						className: t,
						isOverlay: n,
						...r
					} = e;
					return a.a.createElement(b, I({
						className: t,
						isOverlay: n,
						style: {
							top: `calc(100vh - ${n?w:8}px)`
						}
					}, r))
				}, "BackToTop", C.a),
				N = e => {
					let {
						children: t,
						className: n,
						isFakeOverlay: s,
						isSticky: i
					} = e;
					return a.a.createElement("div", {
						className: Object(r.a)(n, {
							[C.a.StickyStyles]: i && !s,
							[C.a.StickyStylesFakeOverlay]: !!s
						})
					}, t)
				};
			class k extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > S,
						shouldFooterSticky: this.windowHeight > O
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = i()(() => {
						this.updateMeasurements(), this.updateState()
					}, d.K), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					var e;
					const {
						props: {
							adComponent: t,
							adComponentOnFakeOverlay: n,
							children: r,
							className: s,
							hideFooter: i,
							pageLayer: o
						}
					} = this, d = this.state.isAdSticky && !(!t && !r);
					return a.a.createElement(_, {
						className: s,
						innerRef: this.setWrapperRef
					}, a.a.createElement(N, {
						isFakeOverlay: n,
						isSticky: d
					}, t, r, !i && a.a.createElement(f.a, null)), !this.props.hideBackToTop && a.a.createElement(j, {
						isOverlay: !!(null === (e = null == o ? void 0 : o.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const P = Object(g.u)();
			t.a = P(k)
		},
		"./src/reddit/components/SidebarTrophyCase/index.m.less": function(e, t, n) {
			e.exports = {
				TrophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				trophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				TrophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				trophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				TrophyItem: "QY_PhyoOHbRd-_92ivr-m",
				trophyItem: "QY_PhyoOHbRd-_92ivr-m",
				TrophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				trophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				Description: "_3n5-aYyk15dtyt-boqlDrq",
				description: "_3n5-aYyk15dtyt-boqlDrq"
			}
		},
		"./src/reddit/components/SidebarTrophyCase/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = n("./src/reddit/controls/Typography/index.tsx"),
				c = n("./src/reddit/selectors/telemetry.ts");
			var u = n("./src/reddit/hooks/useTracking.ts"),
				m = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				p = n("./node_modules/lodash/isEqual.js"),
				h = n.n(p);
			const b = Object(a.b)(a.d, h.a);
			var f = n("./src/reddit/selectors/profile.ts"),
				v = n("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				g = n.n(v),
				x = n("./src/lib/lessComponent.tsx"),
				C = n("./src/lib/opener/index.ts");
			const y = Object(a.c)({
				trophyCase: (e, t) => {
					let {
						profileName: n
					} = t;
					return Object(f.r)(e, Object(f.m)(e, n))
				}
			}, b);
			t.a = Object(o.b)(y)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : i.a.createElement(d.a, {
					title: r.fbt._("Trophy Case ({trophyCount})", [r.fbt._param("trophyCount", `${t.length}`)], {
						hk: "mzh3V"
					}),
					items: t,
					renderItem: _
				})
			});
			const I = x.a.wrapped(m.a, "TrophyItem", g.a),
				E = x.a.div("TrophyIcon", g.a),
				w = x.a.h5("TrophyName", g.a),
				O = x.a.div("TrophyContent", g.a),
				S = x.a.wrapped(l.c, "Description", g.a),
				_ = e => {
					let {
						item: t
					} = e;
					const n = Object(u.a)(),
						r = i.a.createElement("img", {
							src: t.icon,
							title: t.name
						});
					return i.a.createElement(I, {
						key: t.id
					}, i.a.createElement(E, null, t.url ? i.a.createElement("a", {
						target: C.d.BLANK,
						rel: C.c,
						href: t.url,
						onClick: () => n((e => t => ({
							source: "trophy",
							action: "click",
							noun: "trophy",
							...c.o(t),
							actionInfo: Object(c.d)(t, {
								paneName: "profile_about"
							}),
							profile: c.R(t),
							trophy: e
						}))({
							id: t.id,
							name: t.name
						}))
					}, r) : r), i.a.createElement(O, null, i.a.createElement(w, null, t.name), i.a.createElement(S, null, t.description)))
				}
		},
		"./src/reddit/components/SubredditModerationSearch/index.m.less": function(e, t, n) {
			e.exports = {
				SearchIcon: "_2LL7WLn2-4Pv8zCUsmDPv9",
				searchIcon: "_2LL7WLn2-4Pv8zCUsmDPv9",
				NoResultsContainer: "_38zxhEjlOjKTVFYaSwtDTL",
				noResultsContainer: "_38zxhEjlOjKTVFYaSwtDTL",
				Container: "_3RNapyf_4ZQOEfoJhVRMEO",
				container: "_3RNapyf_4ZQOEfoJhVRMEO",
				SearchStatusBar: "_3yWFGY3HrViWVFFUCsTUjv",
				searchStatusBar: "_3yWFGY3HrViWVFFUCsTUjv",
				SearchStatus: "uTK2QKUebu8hg0gYZWTI7",
				searchStatus: "uTK2QKUebu8hg0gYZWTI7",
				Bold: "_2u65S50DJfsU-z8bR0G2DQ",
				bold: "_2u65S50DJfsU-z8bR0G2DQ"
			}
		},
		"./src/reddit/components/SubredditModerationSearch/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				c = n("./src/reddit/layout/row/Inline/index.tsx"),
				u = n("./src/reddit/layout/row/RightAlign/index.tsx"),
				m = n("./src/reddit/icons/svgs/Search/index.tsx"),
				p = n("./src/reddit/components/SubredditModerationSearch/index.m.less"),
				h = n.n(p);
			const b = o.a.wrapped(m.a, "SearchIcon", h.a),
				f = o.a.wrapped(a.a, "NoResultsContainer", h.a),
				v = o.a.div("Container", h.a),
				g = o.a.wrapped(c.a, "SearchStatusBar", h.a),
				x = o.a.div("SearchStatus", h.a),
				C = o.a.span("Bold", h.a);

			function y(e) {
				if (e.searchPending) return null;
				const t = Object(l.a)(e.searchTerm);
				return e.noResultsFound ? i.a.createElement(f, null, i.a.createElement(b, null), i.a.createElement(a.b, null, r.fbt._("No results for {searchTerm}", [r.fbt._param("searchTerm", `u/${t}`)], {
					hk: "1nDAlG"
				})), i.a.createElement(d.r, {
					onClick: e.cancelSearch
				}, r.fbt._("See all", null, {
					hk: "3aLS8s"
				}))) : i.a.createElement(v, null, i.a.createElement(g, null, i.a.createElement(x, null, r.fbt._("1 search result for {=[searchTerm]}", [r.fbt._param("=[searchTerm]", i.a.createElement(C, {
					"data-redditstyle": !0
				}, r.fbt._("{searchTerm}", [r.fbt._param("searchTerm", `'${t}':`)], {
					hk: "1B9ZWG"
				})))], {
					hk: "iAcV5"
				})), i.a.createElement(u.a, null, i.a.createElement(d.r, {
					onClick: e.cancelSearch
				}, r.fbt._("See all", null, {
					hk: "3aLS8s"
				})))), e.children)
			}
		},
		"./src/reddit/components/SubredditModerationTopBar/index.m.less": function(e, t, n) {
			e.exports = {
				topBarRow: "_3H6HwkSZ2zUC1pwaIMv-EY",
				searchBar: "_2LvB93iPopVPdhNBxBnfAH",
				searchIcon: "_1lo1uHsqx3-EkgYDL4xKEB",
				searchInput: "_1ox94KT4YX0mmZgLO51PG_",
				searchButton: "_3-3xbjG4pcuzlB7SzgBvzg"
			}
		},
		"./src/reddit/components/SubredditModerationTopBar/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				d = n("./src/reddit/icons/svgs/Search/index.tsx"),
				l = n("./src/reddit/components/SubredditModerationTopBar/index.m.less"),
				c = n.n(l);
			const u = o.a.div("topBarRow", c.a);
			class m extends i.a.Component {
				constructor(e) {
					super(e), this.onSearchChange = e => {
						Object(a.a)(e.currentTarget.value).length < 21 && this.setState({
							searchInputText: e.currentTarget.value
						})
					}, this.onKeyPress = e => {
						"Enter" === e.key && this.onSearch()
					}, this.onSearch = () => {
						this.props.onSearch(this.state.searchInputText)
					}, this.state = {
						searchInputText: ""
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.activeSearchQuery && null === e.activeSearchQuery && this.setState({
						searchInputText: ""
					})
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return i.a.createElement("div", {
						className: c.a.topBarRow
					}, e.positionSearchRight && e.children, i.a.createElement("div", {
						className: c.a.searchBar
					}, i.a.createElement("input", {
						className: c.a.searchInput,
						onChange: this.onSearchChange,
						onKeyPress: this.onKeyPress,
						placeholder: r.fbt._("Search for a user", null, {
							hk: "1yTo6e"
						}),
						type: "text",
						value: t.searchInputText
					}), i.a.createElement("button", {
						className: c.a.searchButton,
						onClick: this.onSearch
					}, i.a.createElement(d.a, {
						className: c.a.searchIcon
					}))), !e.positionSearchRight && e.children)
				}
			}
		},
		"./src/reddit/components/UserNameAndIcon/index.m.less": function(e, t, n) {
			e.exports = {
				UserIconContainer: "_3gyThPd4NTS21qtNdizCxE",
				userIconContainer: "_3gyThPd4NTS21qtNdizCxE",
				UserIcon: "_1utZNH6IItbNzgdnUBW-Bp",
				userIcon: "_1utZNH6IItbNzgdnUBW-Bp",
				UserLink: "_2Q3rLIRb_ij54AEsabVm9L",
				userLink: "_2Q3rLIRb_ij54AEsabVm9L"
			}
		},
		"./src/reddit/components/UserNameAndIcon/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				d = n("./src/reddit/components/UserIcon/index.tsx"),
				l = n("./src/reddit/controls/InternalLink/index.tsx"),
				c = n("./src/reddit/components/UserNameAndIcon/index.m.less"),
				u = n.n(c);
			const m = o.a.span("UserIconContainer", u.a),
				p = o.a.wrapped(d.a, "UserIcon", u.a),
				h = o.a.wrapped(l.a, "UserLink", u.a);
			t.a = e => i.a.createElement(h, {
				className: e.className,
				to: `${r.a.redditUrl}/user/${e.username}`
			}, i.a.createElement(a.a, {
				user: e.username,
				sendHoverCardEvent: e.sendHoverCardEvent,
				subredditId: e.subredditId,
				tooltipId: e.tooltipId
			}, i.a.createElement(m, {
				style: {
					height: e.iconSize || "32px",
					width: e.iconSize || "32px"
				}
			}, i.a.createElement(p, {
				iconUrl: e.userIcon,
				isNSFW: !1,
				userName: e.username
			})), e.username))
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SEOTitle/index.tsx"),
				a = n("./src/reddit/components/Widgets/Base/index.m.less"),
				d = n.n(a);
			const l = i.a.div("WidgetBackground", d.a),
				c = i.a.wrapped(e => {
					let {
						children: t,
						...n
					} = e;
					return s.a.createElement("div", n, s.a.createElement(o.b, {
						type: o.a.Widget
					}, t))
				}, "WidgetHeader", d.a);
			t.b = e => s.a.createElement("div", {
				className: e.className
			}, s.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return S
			})), n.d(t, "a", (function() {
				return j
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/Flair/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/index.tsx"),
				m = n("./src/reddit/actions/subscription/index.ts");
			var p = Object(o.b)(null, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(m.e()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				h = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = n("./src/reddit/constants/componentSizes.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				C = n("./src/reddit/models/Flair/index.ts"),
				y = n("./src/reddit/selectors/user.ts"),
				I = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				E = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				w = n.n(E);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const S = e => i.a.createElement(h.a, {
					className: Object(l.a)(w.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, i.a.createElement("div", {
					className: w.a.container
				}, e.isLoading ? i.a.createElement(v.a, {
					className: w.a.loadingIcon,
					sizePx: 32
				}) : i.a.createElement(i.a.Fragment, null, e.isError ? i.a.createElement("p", {
					className: w.a.errorMsg
				}, e.errorMsg || r.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : i.a.createElement(i.a.Fragment, null, e.communities.map(t => i.a.createElement(j, O({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && i.a.createElement(f.t, {
					className: w.a.bottomButton,
					kind: f.b.Button,
					priority: f.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				_ = Object(d.c)({
					hideNSFWPref: y.F,
					nightmode: y.cb
				}),
				j = Object(o.b)(_)(e => i.a.createElement("div", {
					className: Object(l.a)(w.a.communityItemContainer, {
						[w.a.withBottomFlair]: e.isNSFW
					})
				}, i.a.createElement(x.a, {
					className: w.a.communityItemExpandCenter,
					widthRight: b.t
				}, i.a.createElement("div", {
					className: w.a.iconContainer
				}, e.communityIcon || e.iconUrl ? i.a.createElement("img", {
					className: w.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : i.a.createElement(g.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(l.a)(w.a.defaultCommunityIcon, {
						[w.a.mNightmode]: e.nightmode
					})
				})), i.a.createElement("div", {
					className: w.a.communityDescriptionContainer
				}, i.a.createElement(a.a, {
					className: w.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(I.b)(e.name, e.type),
					to: Object(I.a)(e.name, e.type)
				}, Object(I.b)(e.name, e.type)), i.a.createElement("div", {
					className: w.a.communityInfoContainer
				}, !!e.subscribers && i.a.createElement("p", {
					className: w.a.subscriberCount
				}, r.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [r.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && i.a.createElement(c.b, {
					className: w.a.nsfwFlair,
					flair: {
						type: C.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? i.a.createElement(v.a, {
					className: Object(l.a)(w.a.communityCta, w.a.smallLoadingIcon),
					sizePx: 12
				}) : i.a.createElement(f.t, {
					className: w.a.communityCta,
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? i.a.createElement(p, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					sendEvent: e.sendEvent,
					small: !0,
					userIsSubscriber: !!e.isSubscribed,
					widget: e.widget
				}) : i.a.createElement(u.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && i.a.createElement("p", {
					title: e.description,
					className: w.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/posts.ts"),
				s = n("./src/reddit/helpers/name/index.ts");

			function i(e, t) {
				return (t === r.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function o(e, t) {
				return t === r.a.PROFILE ? Object(s.d)(e) : Object(s.c)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, n) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				communityItemExpandCenter: "oP8RhN61VEXVL8e6SIxK_",
				communityDescriptionContainer: "_3jEbHrUmHtMsZcfN-z_GpD",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				withBottomFlair: "_14n0HZvxiP1OqS51zI7Sy3",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				nsfwFlair: "_3wQmfxeBovEB3M5pcwt-pv",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6",
				defaultCommunityIcon: "_1yiD4Wxo0icHUUftoUrBiM",
				mNightmode: "_1yugRWTZEox55lEcLyzzAo"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1zLylbOLqdzG2C4JhdkEVQ",
				twitterLogo: "_1N1dJvzR-m3nNoVl8cxHul",
				link: "JqNsQRTEcAPCq8_G0O5mO",
				linkDescription: "_2Y1Xv08xrWbsDZuEvIuRKo",
				name: "_28fbIV1TS_oSVjfzjWnM0f",
				linkTitle: "elMVR2YfkbHdFTihhlUK4",
				linkIcon: "oi2L0mBSRAULcOPEtjXSh",
				description: "KKNu_jB7N6A-PuBrW0WoR",
				visitButton: "NBL39n3gjYvG4c9qlXJIk"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.m.less": function(e, t, n) {
			e.exports = {
				account: "_25M-5tlJjQOChCI8sg84QU"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/components/Widgets/Base/index.tsx"),
				c = n("./src/reddit/constants/posts.ts"),
				u = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				m = n("./src/reddit/models/ExternalAccount/index.ts"),
				p = n("./src/reddit/selectors/externalAccount.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				b = n("./node_modules/fbt/lib/FbtPublic.js"),
				f = n("./src/reddit/controls/OutboundLink/index.tsx"),
				v = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				g = n("./src/reddit/icons/svgs/Twitter/index.tsx"),
				x = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				C = n("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				y = n.n(C);
			var I = e => {
					const {
						account: t,
						clickEvent: n,
						provider: r
					} = e;
					let i, o = t.username,
						a = "";
					return r !== m.a.Twitter ? null : (i = s.a.createElement(g.a, {
						className: y.a.twitterLogo
					}), a = b.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), o = `@${t.username}`, s.a.createElement(x.a, null, s.a.createElement("span", {
						className: y.a.icon
					}, i), s.a.createElement(f.b, {
						className: y.a.link,
						href: t.link,
						onClick: n
					}, s.a.createElement("div", {
						className: y.a.linkTitle
					}, s.a.createElement("span", {
						className: y.a.name
					}, o), s.a.createElement(v.a, {
						className: y.a.linkIcon
					})), s.a.createElement("div", {
						className: y.a.linkDescription
					}, a))))
				},
				E = n("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				w = n.n(E);
			const {
				fbt: O
			} = n("./node_modules/fbt/lib/FbtPublic.js"), S = Object(o.c)({
				twitterAccount: (e, t) => {
					let {
						subredditOrProfile: n
					} = t;
					return n.type === c.a.PROFILE ? Object(p.c)(e, {
						profileName: n.name
					}) : null
				},
				user: (e, t) => {
					let {
						subredditOrProfile: n
					} = t;
					return n.type === c.a.PROFILE ? Object(h.yb)(e, {
						userName: n.name
					}) : null
				}
			}), _ = Object(i.b)(S, e => ({
				trackTwitterAccountClicked: t => e((e, n) => u.m(n(), t))
			}), (e, t, n) => ({
				...n,
				...e,
				...t,
				onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
			}));
			t.a = Object(d.c)(_(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: n
				} = e;
				return n ? s.a.createElement(a.a, null, s.a.createElement(l.b, null, s.a.createElement(l.a, null, O._("Connected accounts", null, {
					hk: "1ce9Jz"
				})), n && s.a.createElement("div", {
					className: w.a.account
				}, s.a.createElement(I, {
					provider: m.a.Twitter,
					account: n,
					clickEvent: t
				})))) : null
			}))
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, n) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/reddit/components/SEOTitle/index.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/widgets.ts"),
				h = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				b = n("./src/reddit/selectors/experiments/topPosts.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				v = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/models/Theme/index.ts"),
				x = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const C = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(x.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				y = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(x.a)(e).widgetColors.sidebarWidgetHeaderColor,
				I = e => {
					const t = C(e);
					return Object(g.f)(t)
				},
				E = e => {
					const t = y(e);
					return Object(g.f)(t)
				};
			var w = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				O = n.n(w);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = Object(u.u)(), j = Object(i.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.n)(e, t) || void 0,
						r = t.redditStyle || Object(f.l)(e, {
							subredditId: n
						}),
						s = Object(v.cb)(e);
					return r || s
				},
				nigtmode: v.cb,
				subredditId: u.n,
				topPostVariant: b.d
			}));
			class N extends s.a.Component {
				constructor() {
					super(...arguments), this.contentRef = s.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(p.b)(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = C(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = I(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = y(this.props), e.color = e.fill = E(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: r,
						headerButton: i,
						id: o,
						onClick: d,
						onHeaderClick: c,
						title: u,
						titleClassName: p,
						truncateThreshold: h
					} = this.props, b = n ? O.a.widgetContentOnly : O.a.widgetContent, f = !r && this.props.styles, v = f ? this.getWidgetBackgroundStyles() : {}, g = f ? this.getWidgetHeaderStyles() : {};
					return s.a.createElement("div", {
						className: Object(a.a)(t, O.a.widgetBackground, {
							[O.a.redditStyle]: r,
							[O.a.clickable]: !!d,
							[O.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": r,
						onClick: d,
						style: v
					}, u && s.a.createElement("div", {
						className: Object(a.a)(O.a.widgetHeader, {
							[O.a.clickable]: !!c
						}),
						id: o,
						style: g,
						onClick: c
					}, s.a.createElement("div", {
						className: Object(a.a)(O.a.widgetTitle, p)
					}, s.a.createElement(l.b, {
						type: l.a.Widget
					}, u)), i), s.a.createElement("div", {
						className: Object(a.a)(b, {
							[O.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? h : "none"
						}
					}, e), this.state.isTruncated && s.a.createElement(m.r, {
						className: O.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, S._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = _(j(Object(d.a)(Object(c.c)(N))))
		},
		"./src/reddit/constants/location.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/redditGQL/types.ts");
			const s = {
					ZZ: "No country identified",
					XZ: "No country identified",
					AF: "Afghanistan",
					AX: "Aland Islands",
					AL: "Albania",
					DZ: "Algeria",
					AS: "American Samoa",
					AD: "Andorra",
					AO: "Angola",
					AI: "Anguilla",
					AQ: "Antarctica",
					AG: "Antigua and Barbuda",
					AR: "Argentina",
					AM: "Armenia",
					AW: "Aruba",
					AU: "Australia",
					AT: "Austria",
					AZ: "Azerbaijan",
					BS: "Bahamas",
					BH: "Bahrain",
					BD: "Bangladesh",
					BB: "Barbados",
					BY: "Belarus",
					BE: "Belgium",
					BZ: "Belize",
					BJ: "Benin",
					BM: "Bermuda",
					BT: "Bhutan",
					BO: "Bolivia",
					BQ: "Bonaire, Sint Eustatius and Saba",
					BA: "Bosnia and Herzegovina",
					BW: "Botswana",
					BV: "Bouvet Island",
					BR: "Brazil",
					IO: "British Indian Ocean Territory",
					BN: "Brunei Darussalam",
					BG: "Bulgaria",
					BF: "Burkina Faso",
					BI: "Burundi",
					KH: "Cambodia",
					CM: "Cameroon",
					CA: "Canada",
					CV: "Cape Verde",
					KY: "Cayman Islands",
					CF: "Central African Republic",
					TD: "Chad",
					CL: "Chile",
					CX: "Christmas Island",
					CC: "Cocos (Keeling) Islands",
					CO: "Colombia",
					KM: "Comoros",
					CG: "Congo, Republic of the",
					CD: "Congo, The Democratic Republic of the",
					CK: "Cook Islands",
					CR: "Costa Rica",
					CI: "Cote d'Ivoire",
					HR: "Croatia",
					CU: "Cuba",
					CW: "Curacao",
					CY: "Cyprus",
					CZ: "Czech Republic",
					DK: "Denmark",
					DJ: "Djibouti",
					DM: "Dominica",
					DO: "Dominican Republic",
					EC: "Ecuador",
					EG: "Egypt",
					SV: "El Salvador",
					GQ: "Equatorial Guinea",
					ER: "Eritrea",
					EE: "Estonia",
					SZ: "Eswatini",
					ET: "Ethiopia",
					FK: "Falkland Islands (Malvinas)",
					FO: "Faroe Islands",
					FJ: "Fiji",
					FI: "Finland",
					FR: "France",
					GF: "French Guiana",
					PF: "French Polynesia",
					TF: "French Southern Territories",
					GA: "Gabon",
					GM: "Gambia",
					GE: "Georgia",
					DE: "Germany",
					GH: "Ghana",
					GI: "Gibraltar",
					GR: "Greece",
					GL: "Greenland",
					GD: "Grenada",
					GP: "Guadeloupe",
					GU: "Guam",
					GT: "Guatemala",
					GG: "Guernsey",
					GN: "Guinea",
					GW: "Guinea-Bissau",
					GY: "Guyana",
					HT: "Haiti",
					HM: "Heard Island and McDonald Islands",
					HN: "Honduras",
					HK: "Hong Kong",
					HU: "Hungary",
					IS: "Iceland",
					IN: "India",
					ID: "Indonesia",
					IR: "Iran",
					IQ: "Iraq",
					IE: "Ireland",
					IM: "Isle of Man",
					IL: "Israel",
					IT: "Italy",
					JM: "Jamaica",
					JP: "Japan",
					JE: "Jersey",
					JO: "Jordan",
					KZ: "Kazakhstan",
					KE: "Kenya",
					KI: "Kiribati",
					XK: "Kosovo",
					KW: "Kuwait",
					KG: "Kyrgyzstan",
					LA: "Laos",
					LV: "Latvia",
					LB: "Lebanon",
					LS: "Lesotho",
					LR: "Liberia",
					LY: "Libya",
					LI: "Liechtenstein",
					LT: "Lithuania",
					LU: "Luxembourg",
					MO: "Macao",
					MK: "Macedonia",
					MG: "Madagascar",
					MW: "Malawi",
					MY: "Malaysia",
					MV: "Maldives",
					ML: "Mali",
					MT: "Malta",
					MH: "Marshall Islands",
					MQ: "Martinique",
					MR: "Mauritania",
					MU: "Mauritius",
					YT: "Mayotte",
					MX: "Mexico",
					FM: "Micronesia",
					MD: "Moldova",
					MC: "Monaco",
					MN: "Mongolia",
					ME: "Montenegro",
					MS: "Montserrat",
					MA: "Morocco",
					MZ: "Mozambique",
					MM: "Myanmar",
					NA: "Namibia",
					NR: "Nauru",
					NP: "Nepal",
					NL: "Netherlands",
					NC: "New Caledonia",
					NZ: "New Zealand",
					NI: "Nicaragua",
					NE: "Niger",
					NG: "Nigeria",
					NU: "Niue",
					NF: "Norfolk Island",
					MP: "Northern Mariana Islands",
					NO: "Norway",
					OM: "Oman",
					PK: "Pakistan",
					PW: "Palau",
					PS: "Palestinian Territory",
					PA: "Panama",
					PG: "Papua New Guinea",
					PY: "Paraguay",
					PE: "Peru",
					PH: "Philippines",
					PN: "Pitcairn",
					PL: "Poland",
					PT: "Portugal",
					PR: "Puerto Rico",
					QA: "Qatar",
					RE: "Reunion",
					RO: "Romania",
					RU: "Russia",
					RW: "Rwanda",
					BL: "Saint Barthelemey",
					SH: "Saint Helena",
					KN: "Saint Kitts and Nevis",
					LC: "Saint Lucia",
					MF: "Saint Martin",
					PM: "Saint Pierre and Miquelon",
					VC: "Saint Vincent and the Grenadines",
					WS: "Samoa",
					SM: "San Marino",
					ST: "Sao Tome and Principe",
					SA: "Saudi Arabia",
					SN: "Senegal",
					RS: "Serbia",
					SC: "Seychelles",
					SL: "Sierra Leone",
					SG: "Singapore",
					SX: "Sint Maarten",
					SK: "Slovakia",
					SI: "Slovenia",
					SB: "Solomon Islands",
					SO: "Somalia",
					ZA: "South Africa",
					GS: "South Georgia and the South Sandwich Islands",
					KR: "South Korea",
					SS: "South Sudan",
					ES: "Spain",
					LK: "Sri Lanka",
					SD: "Sudan",
					SR: "Suriname",
					SJ: "Svalbard and Jan Mayen",
					SE: "Sweden",
					CH: "Switzerland",
					SY: "Syria",
					TW: "Taiwan",
					TJ: "Tajikistan",
					TZ: "Tanzania",
					TH: "Thailand",
					TL: "Timor-Leste",
					TG: "Togo",
					TK: "Tokelau",
					TO: "Tonga",
					TT: "Trinidad and Tobago",
					TN: "Tunisia",
					TR: "Turkey",
					TM: "Turkmenistan",
					TC: "Turks and Caicos Islands",
					TV: "Tuvalu",
					UG: "Uganda",
					UA: "Ukraine",
					AE: "United Arab Emirates",
					GB: "United Kingdom",
					US: "United States",
					UM: "United States Minor Outlying Islands",
					UY: "Uruguay",
					UZ: "Uzbekistan",
					VU: "Vanuatu",
					VA: "Vatican City (Holy See)",
					VE: "Venezuela",
					VN: "Vietnam",
					VG: "Virgin Islands, British",
					VI: "Virgin Islands, U.S.",
					WF: "Wallis and Futuna",
					EH: "Western Sahara",
					YE: "Yemen",
					ZM: "Zambia",
					ZW: "Zimbabwe",
					XX: "Other country"
				},
				i = {
					[r.e.De]: s[r.e.De],
					[r.e.At]: s[r.e.At]
				}
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			class i extends s.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							n = this.props.multiple ? [...t] : t[0];
						this.props.onChange(n), this.setState(() => ({
							value: n
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = "string" == typeof t.value ? t.value : "", r = "object" == typeof t.value ? t.value : null, i = n || r;
					return s.a.createElement("div", {
						className: e.className
					}, n && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), (!i || e.multiple || void 0 !== e.isPending && !e.isPending) && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(o);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: r = 10
				} = e;
				return s.a.createElement("div", {
					className: Object(i.a)(a.a.loadingIcon, n, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${r}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/helpers/trackers/followers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const i = e => t => ({
					...Object(s.o)(t),
					action: r.c.CLICK,
					noun: `follower_list_page_${e?"follow":"unfollow"}`,
					source: "profile"
				}),
				o = () => e => ({
					...Object(s.o)(e),
					action: r.c.CLICK,
					noun: "follower_list_cta",
					source: "profile"
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return c
			}));
			var r, s, i = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {}));
			const a = (e, t) => n => ({
					source: s.COMMUNITY_WIDGETS,
					action: i.c.CLICK,
					noun: r.SEE_MORE,
					widget: Object(o.vb)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...o.o
				}),
				d = (e, t) => n => ({
					source: s.POST,
					action: i.c.CLICK,
					noun: r.REREDDIT_PROMO,
					post: o.I(n, e),
					subreddit: o.hb(n),
					...t && {
						banner: {
							buttonText: t,
							id: r.REREDDIT_PROMO
						}
					},
					...o.o(n)
				}),
				l = () => e => ({
					source: s.SIDEBAR,
					action: i.c.VIEW,
					noun: r.TOPICS_WIDGET,
					...o.o(e)
				}),
				c = e => t => ({
					source: s.TOPICS_WIDGET,
					action: i.c.CLICK,
					noun: r.TOPIC,
					...o.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(i.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, n) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Admin/index.m.less"),
				a = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(i.a)(e.className, a.a.admin, {
					[a.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), s.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, s.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), s.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("rect", {
				width: "20",
				height: "20",
				rx: "10",
				fill: "url(#gradient)"
			}), s.a.createElement("path", {
				d: "M12.121 13.471c-1.007.146-1.73.445-2.121.643v-3.068a1.2 1.2 0 00-1.2-1.2H6.53c.027-.292.046-.61.046-.978 0-1.015-.294-1.78-.53-2.233l.834-.834H10v2.845a1.2 1.2 0 001.2 1.2h2.27c.036.402.086.749.132 1.045.058.38.109.706.109 1.047 0 .627-.497 1.375-1.59 1.533zm3.017-7.35l-1.345-1.345a.6.6 0 00-.425-.175H6.632a.6.6 0 00-.425.175L4.862 6.122a.6.6 0 00-.042.802c.006.006.556.72.556 1.944 0 .783-.087 1.344-.164 1.84-.064.41-.124.797-.124 1.23 0 1.163.9 2.471 2.619 2.72 1.251.183 1.952.638 1.956.64a.61.61 0 00.67.002c.007-.004.709-.46 1.96-.642 1.719-.249 2.618-1.557 2.618-2.72 0-.433-.06-.82-.124-1.23a11.026 11.026 0 01-.163-1.84c0-1.22.536-1.919.556-1.944a.6.6 0 00-.042-.802z",
				fill: "#fff"
			}), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
				id: "gradient",
				x1: "0",
				y1: "20",
				x2: "20.021",
				y2: "19.979",
				gradientUnits: "userSpaceOnUse"
			}, s.a.createElement("stop", {
				stopColor: "#EC0623"
			}), s.a.createElement("stop", {
				offset: "1",
				stopColor: "#FF8717"
			}))))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = function(e) {
				let {
					className: t
				} = e;
				return s.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, s.a.createElement("g", {
					fill: "inherit"
				}, s.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function i(e) {
				return s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
					fill: "inherit",
					d: "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
				}))
			}
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, n) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/RightAlign/index.m.less"),
				i = n.n(s);
			t.a = r.a.div("rightAligned", i.a)
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, n) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = n.n(a);
			t.a = Object(i.a)(e => s.a.createElement("div", {
				className: Object(o.a)(d.a.expandedCenterContainer, e.className)
			}, s.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: d.a.center
			}, Array.isArray(e.children) && e.children[1]), s.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				d = n.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(i.a)(e => {
				const {
					className: t,
					children: n,
					heightLeft: r,
					widthLeft: i,
					gutter: a,
					...c
				} = e;
				return s.a.createElement("div", l({
					className: Object(o.a)(d.a.expandRightContainer, t)
				}, c), s.a.createElement("div", {
					className: d.a.left,
					style: {
						flexBasis: i,
						height: r,
						marginRight: a
					}
				}, Array.isArray(n) && n[0]), s.a.createElement("div", {
					className: d.a.right
				}, Array.isArray(n) && n[1]))
			}, 2)
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, n) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/pages/ErrorPages/index.m.less"),
				d = n.n(a);
			const l = e => {
					let {
						message: t
					} = e;
					return i.a.createElement("div", {
						className: d.a.container
					}, i.a.createElement("h3", {
						className: d.a.title
					}, t || r.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), i.a.createElement(o.n, {
						className: d.a.primaryRouterLink,
						to: "/"
					}, r.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				},
				c = e => {
					let {
						message: t
					} = e;
					return i.a.createElement("div", {
						className: d.a.container
					}, i.a.createElement("h3", {
						className: d.a.title
					}, t || r.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), i.a.createElement(o.n, {
						className: d.a.primaryRouterLink,
						to: "/"
					}, r.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				}
		},
		"./src/reddit/pages/Followers/index.m.less": function(e, t, n) {
			e.exports = {
				followersListing: "_3t5lRkSOLY5j4nFhtbpL7i",
				topBar: "_2TOnu0dkeIs7Yt2Hx2X6xa",
				topBarTitleText: "_1MxpW_Jw6LuP05OhFVONrX",
				topBarDescriptionText: "_1NSWl49x3LarQmyrllKo1p",
				userRow: "_3DCb-rQllZsJgcnkZU0y98",
				followButton: "_11wvnSYPxzoOR6ja2dBHjV",
				followingButton: "kHnx6ah-Fx7znhJt-MPC7",
				active: "NacCRxhyutwHbwpeIICBc",
				emptyState: "_20oBIbKmeWpUAL80H8je5c",
				snooSmile: "c1I7prfvtCyKI59R5Bo-2",
				emptyStateTitle: "_2sNc1T3Z7AmytaOyHMAGQu",
				emptyStateDescription: "_3QgKjYeitiFeNwm_kA4W9m"
			}
		},
		"./src/reddit/pages/Followers/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/config.ts"),
				d = n("./src/reddit/actions/pages/followers/index.ts"),
				l = n("./src/reddit/components/ProfileSidebar/index.tsx"),
				c = n("./src/reddit/components/Scroller/Simple.tsx"),
				u = n("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				m = n("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/layout/page/Listing/index.tsx"),
				b = n("./src/reddit/pages/ErrorPages/index.tsx"),
				f = n("./src/reddit/pages/ModHub/Header.tsx"),
				v = n("./src/reddit/selectors/followers.ts"),
				g = n("./src/reddit/selectors/profile.ts"),
				x = n("./src/lib/classNames/index.ts"),
				C = n("./src/reddit/components/TrackingHelper/index.tsx"),
				y = n("./src/reddit/components/UserNameAndIcon/index.tsx"),
				I = n("./src/reddit/controls/Button/index.tsx"),
				E = n("./src/reddit/helpers/trackers/followers.ts"),
				w = n("./src/reddit/pages/Followers/index.m.less"),
				O = n.n(w);
			var S = e => {
				var t, n, a, l;
				const c = Object(o.d)(),
					u = Object(o.e)(t => Object(v.b)(t, e.userId)),
					m = Object(C.b)(),
					p = Object(s.useCallback)(() => {
						u && (c(Object(d.toggleFollowUser)(e.userId, !u.isFollowed)), m(Object(E.a)(!u.isFollowed)))
					}, [e.userId, c, m, u]);
				return u ? i.a.createElement("div", {
					className: O.a.userRow,
					key: u.id
				}, i.a.createElement(y.a, {
					username: u.name,
					tooltipId: `${u.id}-user-tooltip`,
					sendHoverCardEvent: () => {},
					userIcon: (null === (a = null === (n = null === (t = u.profile) || void 0 === t ? void 0 : t.styles) || void 0 === n ? void 0 : n.legacyIcon) || void 0 === a ? void 0 : a.url) || (null === (l = u.snoovatarIcon) || void 0 === l ? void 0 : l.url)
				}), u.isAcceptingFollowers && i.a.createElement(I.t, {
					className: Object(x.a)(O.a.followButton, {
						[O.a.followingButton]: u.isFollowed
					}),
					onClick: p,
					priority: u.isFollowed ? I.c.Plain : I.c.Tertiary
				}, u.isFollowed ? r.fbt._("Following", null, {
					hk: "3vqzzk"
				}) : r.fbt._("Follow", null, {
					hk: "3v1Euu"
				}))) : null
			};
			t.default = e => {
				const t = Object(o.d)(),
					n = Object(o.e)(v.a),
					x = Object(o.e)(v.e),
					C = Object(o.e)(v.c),
					y = Object(o.e)(v.d),
					I = Object(p.fb)(),
					E = Object(o.e)(e => Object(p.E)(e, {
						pageLayer: I
					})),
					w = Object(o.e)(t => Object(g.j)(t, {
						profileName: e.match.params.profileName
					})),
					[_, j] = Object(s.useState)("");
				Object(s.useEffect)(() => {
					_ && t(Object(d.followersRequested)({
						...d.DEFAULT_VARIABLES,
						searchQuery: _
					}))
				}, [_, t]);
				const N = Object(s.useCallback)(() => {
					(null == y ? void 0 : y.hasNextPage) && (null == y ? void 0 : y.endCursor) && t(Object(d.followersRequested)({
						...d.DEFAULT_VARIABLES,
						after: y.endCursor
					}))
				}, [y, t]);
				if (!E) return i.a.createElement(b.a, null);
				const k = null == w ? void 0 : w.name;
				if (!k) return i.a.createElement(b.b, null);
				let P;
				if (0 === (null == n ? void 0 : n.length)) P = i.a.createElement("div", {
					className: O.a.emptyState
				}, i.a.createElement("img", {
					className: O.a.snooSmile,
					src: `${a.a.assetPath}/img/snoomoji/snoo.png`
				}), i.a.createElement("div", {
					className: O.a.emptyStateTitle
				}, r.fbt._("Followers", null, {
					hk: "4scwa7"
				})), i.a.createElement("div", {
					className: O.a.emptyStateDescription
				}, r.fbt._("You don't have any followers yet, but when someone follows you, you'll see them here.", null, {
					hk: "1WWMuR"
				})));
				else {
					let e;
					if (_) {
						const t = x ? Object.values(x)[0] : void 0;
						e = i.a.createElement(u.a, {
							noResultsFound: !t,
							searchTerm: _,
							cancelSearch: () => j(""),
							searchPending: !!C
						}, t && i.a.createElement(S, {
							userId: t.id
						}))
					} else n && (e = i.a.createElement(c.b, {
						loadMoreToken: (null == y ? void 0 : y.endCursor) || void 0,
						onLoadMore: N
					}, n.map(e => ({
						estHeight: 56,
						id: e,
						render: function() {
							return i.a.createElement(S, {
								userId: e
							})
						}
					}))));
					P = i.a.createElement(i.a.Fragment, null, i.a.createElement(m.b, {
						activeSearchQuery: _,
						onSearch: e => (e => {
							j(e)
						})(e),
						positionSearchRight: !0
					}, i.a.createElement("div", {
						className: O.a.topBar
					}, i.a.createElement("div", {
						className: O.a.topBarTitleText
					}, r.fbt._("Followers", null, {
						hk: "4ah1S2"
					})), i.a.createElement("div", {
						className: O.a.topBarDescriptionText
					}, r.fbt._("This list is only visible to you. The most recent follows are shown first.", null, {
						hk: "BYist"
					})))), e)
				}
				return i.a.createElement(h.a, {
					contentClassName: O.a.followersListing,
					disableFullscreen: !0,
					fitPageToContent: !0,
					contentNavBar: i.a.createElement(f.a, {
						subredditOrProfile: w || void 0,
						pageName: r.fbt._("Followers", null, {
							hk: "3DwX8d"
						})
					}),
					content: P,
					sidebar: i.a.createElement(l.a, {
						className: O.a.followersListing,
						profileName: k
					})
				})
			}
		},
		"./src/reddit/pages/ModHub/Header.m.less": function(e, t, n) {
			e.exports = {
				titleFontH1: "_3moWGMnbR8K4S0yEul07nr",
				titleFontH2: "_2oI68wVKNMPkDrFs5iv-mT",
				titleFontH3: "_2SjfolwDVVvPkTR19n53-N",
				titleFontH4: "_2PCswqdAkej43QrI3i2XD6",
				titleFontH5: "_2ClzPN9iMLeouYjBczMuak",
				titleFontH6: "-Ys2BgGuQrEY2uMl3yymz",
				metadataFont: "_13D6uHC3HmU2n303ICkc2Z",
				flairFont: "jd22g-ATlzm80vQJWeapy",
				labelsFont: "_1UxIO379jfzGXKK-UTji0l",
				actionFont: "_33izYXQ9DA6aVnhOiSApGv",
				smallButtonFont: "_3gTmhpwBqqacn2Fbh1nFPi",
				largeButtonFont: "_18NraFj-4C_LqHvfoVPar1",
				strongTextFont: "_3tRumE3gvvS_0BYlnDtcIA",
				tabFont: "_1DLPo8qhiBT00GYX1ng3ad",
				buttonFontXS: "_1jy5yDpKOT5-Cv2QAMnE8Z",
				buttonFontXs: "_1jy5yDpKOT5-Cv2QAMnE8Z",
				buttonFontS: "_3DmXGTGm5YD5IApa9MyBNq",
				buttonFontM: "_32Yvll-0lWSj_SZKU0TKRR",
				buttonFontL: "_1wDiG7XcGSvunA559KlfGG",
				buttonFontXL: "xpxpmGAZ5HYQvDSsMNvp8",
				buttonFontXl: "xpxpmGAZ5HYQvDSsMNvp8",
				bodyFontH1: "_1ygLn4-Vtd31oQv6zylo5z",
				bodyFontH2: "_1btDxE6K9AP_wtfakdg11l",
				bodyFontH3: "cMjXJNdI0iac3nSCHtBrq",
				bodyFontH4: "_3ZsC5lxE3Dnw9-duolQiN3",
				bodyFontH5: "_3gWD0dGAav6VxMQZ2iY4qc",
				bodyFontH6: "_2yKCC1d-C1qheMkCr5CedW",
				bodyFontH6Small: "_1AyCUR1VQn-opitbpGpNcf",
				bodyFont: "_1RI3wkzuynRc_Bqno__Uom",
				bodyFontSmall: "_2MlCobLFb0alel2wzuIFVK",
				bodyFontMono: "_3RdMKJzgzPT9lgXHEf0XZB",
				header: "_3u9on6H92JkZNRumczPd67",
				subredditLink: "_3EIUrhztcaaHcqMILEsnBq",
				subredditIcon: "_3uA1he5X3WeG6mpoUWdcXy"
			}
		},
		"./src/reddit/pages/ModHub/Header.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/pages/ModHub/Header.m.less"),
				o = n.n(i),
				a = n("./src/reddit/components/SubredditIcon/index.tsx"),
				d = n("./src/reddit/controls/InternalLink/index.tsx");
			t.a = e => {
				var t, n;
				return s.a.createElement("div", {
					className: o.a.header
				}, s.a.createElement(a.b, {
					className: o.a.subredditIcon,
					subredditOrProfile: e.subredditOrProfile
				}), s.a.createElement(d.a, {
					className: o.a.subredditLink,
					to: (null === (t = e.subredditOrProfile) || void 0 === t ? void 0 : t.url) || "",
					onClick: e.onClick
				}, null === (n = e.subredditOrProfile) || void 0 === n ? void 0 : n.displayText), e.pageName && `/ ${e.pageName}`)
			}
		},
		"./src/reddit/reducers/pages/followers/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/pages/followers/constants.ts");
			var i = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.b:
						case s.e:
						case s.a:
						case s.c:
							return !1;
						case s.d:
							return !0;
						default:
							return e
					}
				},
				o = Object(r.c)({
					pending: i
				});
			const a = {};
			var d = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.b:
					case s.a:
					case s.e: {
						const {
							followers: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case s.f: {
						const {
							userId: n,
							isFollowed: r
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								isFollowed: r
							}
						}
					}
					default:
						return e
				}
			};
			var l = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.a:
					case s.b: {
						const {
							pageInfo: n
						} = t.payload;
						return n || e
					}
					default:
						return e
				}
			};
			const c = {};
			var u = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.e: {
						const {
							followers: n
						} = t.payload;
						return n || e
					}
					default:
						return e
				}
			};
			const m = [];
			var p = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.b: {
						const {
							followerUserIds: n
						} = t.payload;
						return n || e
					}
					case s.a: {
						const {
							followerUserIds: n
						} = t.payload;
						return n ? [...e, ...n] : e
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				api: o,
				models: d,
				pageInfo: l,
				search: u,
				userIds: p
			})
		},
		"./src/reddit/selectors/experiments/econ/avatarNfts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: r.t
				}) === r.w.Enabled,
				o = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: r.Ec
				}) === r.ed
		},
		"./src/reddit/selectors/followers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/pages/followers/index.ts");
			Object(r.a)({
				pages: {
					followers: s.a
				}
			});
			const i = e => {
					var t, n;
					return null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === n ? void 0 : n.userIds
				},
				o = (e, t) => {
					var n;
					return null === (n = (e => {
						var t, n;
						return null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === n ? void 0 : n.models
					})(e)) || void 0 === n ? void 0 : n[t]
				},
				a = e => {
					var t, n;
					return null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === n ? void 0 : n.search
				},
				d = e => {
					var t, n;
					return null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === n ? void 0 : n.api.pending
				},
				l = e => {
					var t, n;
					return null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === n ? void 0 : n.pageInfo
				}
		},
		"./src/redditGQL/operations/ProfileFollowers.json": function(e) {
			e.exports = JSON.parse('{"id":"fe780a440dbd"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileFollowersPage.6a144bcad32dce72b77b.js.map