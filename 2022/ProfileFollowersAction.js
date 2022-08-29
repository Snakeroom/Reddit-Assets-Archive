// https://www.redditstatic.com/desktop2x/ProfileFollowersAction.ada9b604fa444a4095f1.js
// Retrieved at 8/29/2022, 11:20:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileFollowersAction"], {
		"./src/lib/makeOverviewConversationsItemKey/index.ts": function(e, t, r) {
			"use strict";
			t.a = (e, t) => {
				return `overviewConversations--[profile:'${t}']--[post:'${e}']`
			}
		},
		"./src/reddit/actions/pages/followers/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return s
			})), r.d(t, "e", (function() {
				return n
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "f", (function() {
				return a
			}));
			const o = "PROFILE_FOLLOWERS_PAGE_LOADED",
				s = "MORE_PROFILE_FOLLOWERS_LOADED",
				n = "PROFILE_FOLLOWERS_SEARCH_LOADED",
				i = "PROFILE_FOLLOWERS_REQUEST_PENDING",
				d = "PROFILE_FOLLOWERS_REQUEST_FAILED",
				a = "FOLLOW_USER_SUCCESS"
		},
		"./src/reddit/actions/pages/followers/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "profileFollowersPageLoaded", (function() {
				return O
			})), r.d(t, "moreProfileFollowersLoaded", (function() {
				return w
			})), r.d(t, "profileFollowersSearchLoaded", (function() {
				return g
			})), r.d(t, "profileFollowersRequestPending", (function() {
				return h
			})), r.d(t, "profileFollowersPageFailed", (function() {
				return j
			})), r.d(t, "DEFAULT_VARIABLES", (function() {
				return x
			})), r.d(t, "followersPageRequested", (function() {
				return I
			})), r.d(t, "followersRequested", (function() {
				return _
			})), r.d(t, "followUserToggled", (function() {
				return C
			})), r.d(t, "toggleFollowUser", (function() {
				return k
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/emailVerificationTooltip.ts"),
				d = (r("./src/reddit/actions/pages/profileOverview/index.ts"), r("./src/reddit/actions/toaster.ts")),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/redditGQL/operations/ProfileFollowers.json");
			var l = r("./src/reddit/endpoints/subreddit/subscriptions.ts");
			var u = e => {
					var t, r;
					if (!e.identity || !e.identity.followedByRedditorsInfo) return;
					const o = {},
						{
							followedByRedditorsInfo: s,
							redditor: n
						} = e.identity,
						{
							moderatedSubreddits: i
						} = n,
						{
							edges: d,
							pageInfo: a
						} = s;
					if (!d) return;
					o.pageInfo = {
						...a,
						endCursor: null !== (t = a.endCursor) && void 0 !== t ? t : null
					};
					const c = [],
						l = {};
					for (const u of d)
						if ("Redditor" === (null === (r = null == u ? void 0 : u.node) || void 0 === r ? void 0 : r.__typename)) {
							const {
								id: e
							} = u.node;
							c.push(e), l[e] = u.node
						} return o.followerUserIds = c, o.followers = l, o
				},
				f = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/selectors/experiments/emailEnablement.ts"),
				v = r("./src/reddit/actions/pages/followers/constants.ts"),
				b = r("./src/lib/initializeClient/installReducer.ts"),
				y = r("./src/reddit/reducers/pages/followers/index.ts"),
				m = r("./src/reddit/selectors/followers.ts");
			Object(b.a)({
				pages: {
					followers: y.a
				}
			});
			const O = Object(n.a)(v.b),
				w = Object(n.a)(v.a),
				g = Object(n.a)(v.e),
				h = Object(n.a)(v.d),
				j = Object(n.a)(v.c),
				x = {
					includeIdentity: !1,
					first: null,
					after: null,
					searchQuery: null
				},
				I = e => async (e, t, r) => {
					let {
						gqlContext: o
					} = r;
					var s;
					const n = [];
					(null === (s = Object(m.a)(t())) || void 0 === s ? void 0 : s.length) || n.push(e(_(x))), await Promise.all(n)
				}, _ = e => async (t, r, o) => {
					let {
						gqlContext: s
					} = o;
					const n = !r().user.account,
						i = {
							...x,
							...e,
							includeIdentity: n
						};
					t(h());
					const l = await (async (e, t) => {
						return await Object(a.a)(e, {
							...c,
							variables: t
						})
					})(s(), i);
					if (l.ok && l.body) {
						const {
							data: r
						} = l.body, o = u(r);
						if (!o) return t(Object(d.d)()), void t(j());
						(null == e ? void 0 : e.searchQuery) ? t(g(o)): (null == e ? void 0 : e.after) ? t(w(o)) : (null == e ? void 0 : e.after) || (null == e ? void 0 : e.searchQuery) || t(O(o))
					}
					l.ok || (t(Object(d.d)()), t(j()))
				}, C = Object(n.a)(v.f), k = (e, t) => async (r, n, a) => {
					let {
						apiContext: c
					} = a;
					var u, v;
					const b = n(),
						y = null === (v = null === (u = b.pages) || void 0 === u ? void 0 : u.followers) || void 0 === v ? void 0 : v.models[e];
					if (!y) return;
					r(C({
						userId: e,
						isFollowed: t
					}));
					const m = y.name;
					if ((await Object(l.c)(c(), {
							subredditNames: [`${s.nc}${y.name}`],
							subscribe: t
						})).ok) {
						r(C({
							userId: e,
							isFollowed: t
						}));
						const s = o.fbt._("Successfully followed {userName}", [o.fbt._param("userName", m)], {
								hk: "nYw1y"
							}),
							n = o.fbt._("Successfully unfollowed {userName}", [o.fbt._param("userName", m)], {
								hk: "1ki3kp"
							});
						r(Object(d.f)({
							text: t ? s : n
						})), Object(p.a)(b) && r(Object(i.c)("user_follow"))
					} else {
						const s = o.fbt._("Something went wrong", null, {
							hk: "3i6szH"
						});
						r(C({
							userId: e,
							isFollowed: !t
						})), r(Object(d.f)(Object(d.e)(s, f.b.Error)))
					}
				}
		},
		"./src/reddit/actions/pages/profileOverview/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "profileOverviewConversationsPending", (function() {
				return _e
			})), r.d(t, "profileOverviewConversationsLoaded", (function() {
				return Ce
			})), r.d(t, "profileOverviewConversationsFailed", (function() {
				return ke
			})), r.d(t, "profileOverviewChronoPending", (function() {
				return Le
			})), r.d(t, "profileOverviewChronoLoaded", (function() {
				return Pe
			})), r.d(t, "profileOverviewChronoFailed", (function() {
				return Re
			})), r.d(t, "profileOverviewConversationsRequested", (function() {
				return Ee
			})), r.d(t, "profileOverviewRequested", (function() {
				return Fe
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = r("./node_modules/lodash/pick.js"),
				s = r.n(o),
				n = r("./src/lib/constants/index.ts"),
				i = r("./src/reddit/actions/moderatingSubreddits.ts"),
				d = r("./src/reddit/actions/pages/profileShared.ts"),
				a = r("./src/reddit/actions/subreddit.ts"),
				c = r("./src/config.ts"),
				l = r("./src/lib/addAllowQuarantinedParam/index.ts"),
				u = r("./src/lib/makeApiRequest/index.ts"),
				f = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = r("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				v = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var b = r("./src/reddit/helpers/post/index.ts"),
				y = r("./src/reddit/constants/postLayout.ts"),
				m = r("./src/reddit/constants/parameters.ts"),
				O = r("./src/reddit/contexts/PageLayer/index.tsx"),
				w = r("./src/reddit/selectors/listings.ts"),
				g = r("./src/reddit/selectors/profile.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				j = r("./src/lib/makeActionCreator/index.ts"),
				x = r("./src/reddit/actions/changeUsername.ts"),
				I = r("./src/reddit/actions/contentGate.ts"),
				_ = r("./src/reddit/actions/externalAccount.ts"),
				C = r("./src/reddit/actions/gold/powerups.ts"),
				k = r("./src/reddit/actions/pinnedPost.ts"),
				L = r("./src/reddit/actions/platform.ts"),
				P = r("./src/reddit/actions/profile/index.ts"),
				R = r("./src/reddit/actions/trophyCase.ts"),
				E = r("./src/reddit/constants/errors.ts"),
				F = r("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				S = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				A = r("./src/reddit/actions/pages/profileOverview/constants.ts"),
				N = r("./src/lib/initializeClient/installReducer.ts"),
				q = r("./node_modules/redux/es/redux.js"),
				D = r("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const T = {};
			var U = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case A.c:
					case A.b:
					case D.c:
					case D.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case A.a:
					case D.a: {
						const {
							key: r,
							error: o
						} = t.payload;
						return {
							...e,
							[r]: o
						}
					}
					default:
						return e
				}
			};
			const K = {};
			var Q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A.c:
						case D.c: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case A.b:
						case A.a:
						case D.b:
						case D.a: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				G = Object(q.c)({
					error: U,
					pending: Q
				});
			const W = {};
			var $ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case A.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: {}
						}
					}
					case D.b: {
						const {
							key: r,
							fetchedToken: o
						} = t.payload, s = e[r];
						return {
							...e,
							[r]: {
								...s,
								[o]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const B = {};
			var H = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A.b:
						case D.b: {
							const {
								key: r,
								overviewIds: o
							} = t.payload, s = e[r] || [];
							return {
								...e,
								[r]: [...s, ...o]
							}
						}
						default:
							return e
					}
				},
				z = r("./src/lib/omitKey/index.ts");
			const J = {};
			var V = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A.b:
						case D.b: {
							const {
								key: r,
								dist: o,
								token: s
							} = t.payload;
							return s ? {
								...e,
								[r]: {
									dist: o,
									token: s
								}
							} : Object(z.a)(e, r)
						}
						default:
							return e
					}
				},
				M = Object(q.c)({
					api: G,
					fetchedTokens: $,
					ids: H,
					loadMore: V
				});
			const Y = {};
			var X = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Y,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case A.f:
					case A.e: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case A.d: {
						const {
							key: r,
							error: o
						} = t.payload;
						return {
							...e,
							[r]: o || {}
						}
					}
					default:
						return e
				}
			};
			const Z = {};
			var ee = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A.f: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case A.e:
						case A.d: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				te = Object(q.c)({
					error: X,
					pending: ee
				}),
				re = r("./src/reddit/actions/profileConversations.ts");
			const oe = {};
			var se = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case re.c:
					case re.b: {
						const {
							extraCommentsId: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case re.a: {
						const {
							extraCommentsId: r,
							error: o
						} = t.payload;
						return {
							...e,
							[r]: o || {}
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
						case re.c: {
							const {
								extraCommentsId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case re.b:
						case re.a: {
							const {
								extraCommentsId: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				de = Object(q.c)({
					error: se,
					pending: ie
				});
			const ae = {};
			var ce = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ae,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A.e:
						case re.b:
						case re.e:
							return {
								...e, ...t.payload.extraComments
							};
						default:
							return e
					}
				},
				le = Object(q.c)({
					api: de,
					models: ce
				}),
				ue = r("./node_modules/lodash/mapValues.js"),
				fe = r.n(ue),
				pe = r("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				ve = r("./src/reddit/constants/comments.ts");
			const be = {};

			function ye(e) {
				const t = e;
				return fe()(t, e => {
					let {
						depth: t,
						next: r,
						prev: o
					} = e;
					return {
						depth: t,
						next: r,
						prev: o
					}
				})
			}
			const me = (e, t, r) => {
				const o = {};
				for (const s in t) {
					const e = t[s],
						r = e.postId;
					o.hasOwnProperty(r) ? o[r] = {
						...o[r],
						[s]: e
					} : o[r] = {
						[s]: e
					}
				}
				for (const s in r) {
					const e = r[s],
						t = e.postId;
					o.hasOwnProperty(t) ? o[t] = {
						...o[t],
						[s]: e
					} : o[t] = {
						[t]: e
					}
				}
				return o
			};
			var Oe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : be,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case A.e:
					case re.e: {
						const {
							comments: r,
							extraComments: o,
							postIds: s,
							profileName: n
						} = t.payload, i = me(s, r, o), d = {};
						for (const e of s) {
							d[Object(pe.a)(e, n)] = i.hasOwnProperty(e) ? ye(i[e]) : {}
						}
						return {
							...e,
							...d
						}
					}
					case re.b: {
						const {
							comments: r,
							commentLists: o,
							extraComments: s,
							extraCommentsId: n,
							postIds: i,
							profileName: d
						} = t.payload;
						if (0 === i.length) {
							const t = Object.keys(e).find(t => void 0 !== e[t][n]);
							if (!t) return e;
							const r = {
									...e[t]
								} [n].prev,
								o = r && r.id || "";
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
						const a = i[0],
							c = ye(me(i, r, s)[a]),
							l = Object(pe.a)(a, d),
							u = {
								...e[l]
							},
							f = u[n].prev,
							p = f && f.id || "",
							v = o[a].head,
							b = v && v.id || "",
							y = {
								id: b,
								type: ve.a.Comment
							},
							m = {
								...u,
								[p]: {
									...u[p],
									next: y
								},
								...c,
								[b]: {
									...c[b],
									prev: f
								}
							};
						return {
							...e,
							[l]: m
						}
					}
					default:
						return e
				}
			};
			const we = {};
			var ge = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : we,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case A.e:
					case re.e: {
						const {
							commentLists: r,
							postIds: o,
							profileName: s
						} = t.payload, n = {};
						for (const e of o) {
							n[Object(pe.a)(e, s)] = r[e] && r[e].head ? r[e].head.id : null
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
			const he = {};
			var je = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : he,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A.e:
						case re.e: {
							const {
								postIds: r,
								profileName: o
							} = t.payload, s = {};
							for (const e of r) {
								s[Object(pe.a)(e, o)] = e
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
				xe = Object(q.c)({
					api: te,
					extraComments: le,
					keyToCommentThreadLinkSets: Oe,
					keyToHeadCommentId: ge,
					keyToPostId: je
				}),
				Ie = Object(q.c)({
					chrono: M,
					conversations: xe
				});
			Object(N.a)({
				pages: {
					profileOverview: Ie
				}
			});
			const _e = Object(j.a)(A.f),
				Ce = Object(j.a)(A.e),
				ke = Object(j.a)(A.d),
				Le = Object(j.a)(A.c),
				Pe = Object(j.a)(A.b),
				Re = Object(j.a)(A.a),
				Ee = (e, t, r, o) => async (o, s, i) => {
					const d = s(),
						a = !!d.listings.postOrder.ids[e],
						y = !!Object(w.c)(d, {
							listingKey: e
						});
					if (!!Object(w.d)(d, {
							listingKey: e
						}) || a && !y) return;
					o(_e({
						key: e
					}));
					const m = await Object(S.a)("profile", () => ((e, t, r) => Object(u.a)(e, {
							data: r,
							endpoint: Object(f.a)(Object(l.a)(Object(p.a)(Object(v.a)(`${c.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
							traceRequestName: "get_profile_conversations",
							method: n.mb.GET
						}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
							...e,
							body: {
								...e.body,
								pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
							}
						} : e))(i.apiContext(), t, r)),
						O = m.body;
					await Object(b.a)(i.gqlContext, O.posts).then(e => O.posts = e);
					const {
						pinned: h,
						postIds: j
					} = O;
					if (m.ok) {
						o(Ce({
							key: e,
							meta: d.meta,
							profileName: t,
							...O,
							postIds: j
						}));
						const r = Object(g.n)(s(), t);
						o(Object(k.h)({
							profileId: r,
							pinned: h
						}))
					} else o(ke({
						account: m.body.data ? m.body.data.account : null,
						error: m.body.reason ? {
							type: m.body.reason
						} : m.error,
						key: e
					})), m.body.reason === E.a.DeletedProfile && o(Object(I.s)({
						profileName: t
					})), o(Object(L.n)(m.status))
				}, Fe = e => async (t, r, o) => {
					const {
						queryParams: c,
						params: l
					} = e, {
						sort: u,
						t: f
					} = Object(d.a)(r(), c), {
						profileName: p
					} = l;
					let v = !1;
					const b = y.e[Object(O.S)(r(), {})],
						w = p.toLowerCase(),
						j = {
							...s()(e.queryParams, m.k),
							sort: u,
							layout: b,
							t: f
						},
						I = [t(P.d(w))],
						k = Object(F.a)(w, n.xb, u, e.queryParams);
					if (r().listings.postOrder.ids[k] && !r().listings.postOrder.api.error[k] ? v = !0 : I.push(t(Ee(k, w, j, !0))), I.push(t(Object(i.b)())), await Promise.all(I), v) return;
					const E = r();
					if (!E.platform.currentPage) return;
					if (200 !== E.platform.currentPage.status) return;
					const S = Object(g.n)(r(), w),
						A = Object(h.Ab)(E, {
							userName: p
						}).id;
					t(L.m({
						title: Se(r(), p)
					})), Object(h.S)(E) && Object(h.W)(E, p) && t(Object(x.startChangeUsernameFlow)());
					const N = [t(Object(a.q)()), t(R.b(w, S)), t(P.b(w)), t(_.o(p)), t(P.i(p)), t(C.i(p, A))];
					await Promise.all(N)
				}, Se = (e, t) => Object(g.r)(e, {
					profileName: t
				})
		},
		"./src/reddit/reducers/pages/followers/index.ts": function(e, t, r) {
			"use strict";
			var o = r("./node_modules/redux/es/redux.js"),
				s = r("./src/reddit/actions/pages/followers/constants.ts");
			var n = function() {
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
				i = Object(o.c)({
					pending: n
				});
			const d = {};
			var a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.b:
					case s.a:
					case s.e: {
						const {
							followers: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case s.f: {
						const {
							userId: r,
							isFollowed: o
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								isFollowed: o
							}
						}
					}
					default:
						return e
				}
			};
			var c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.a:
					case s.b: {
						const {
							pageInfo: r
						} = t.payload;
						return r || e
					}
					default:
						return e
				}
			};
			const l = {};
			var u = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.e: {
						const {
							followers: r
						} = t.payload;
						return r || e
					}
					default:
						return e
				}
			};
			const f = [];
			var p = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.b: {
						const {
							followerUserIds: r
						} = t.payload;
						return r || e
					}
					case s.a: {
						const {
							followerUserIds: r
						} = t.payload;
						return r ? [...e, ...r] : e
					}
					default:
						return e
				}
			};
			t.a = Object(o.c)({
				api: i,
				models: a,
				pageInfo: c,
				search: u,
				userIds: p
			})
		},
		"./src/reddit/selectors/followers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return c
			}));
			var o = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/pages/followers/index.ts");
			Object(o.a)({
				pages: {
					followers: s.a
				}
			});
			const n = e => {
					var t, r;
					return null === (r = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === r ? void 0 : r.userIds
				},
				i = (e, t) => {
					var r;
					return null === (r = (e => {
						var t, r;
						return null === (r = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === r ? void 0 : r.models
					})(e)) || void 0 === r ? void 0 : r[t]
				},
				d = e => {
					var t, r;
					return null === (r = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === r ? void 0 : r.search
				},
				a = e => {
					var t, r;
					return null === (r = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === r ? void 0 : r.api.pending
				},
				c = e => {
					var t, r;
					return null === (r = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === r ? void 0 : r.pageInfo
				}
		},
		"./src/redditGQL/operations/ProfileFollowers.json": function(e) {
			e.exports = JSON.parse('{"id":"a7a31038ca56"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileFollowersAction.ada9b604fa444a4095f1.js.map