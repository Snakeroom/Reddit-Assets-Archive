// https://www.redditstatic.com/desktop2x/ProfileFollowersAction.77700861e2a5f4059d58.js
// Retrieved at 2/15/2022, 12:40:04 PM by Reddit Dataminer v1.0.0
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
				return s
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "e", (function() {
				return n
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "f", (function() {
				return c
			}));
			const s = "PROFILE_FOLLOWERS_PAGE_LOADED",
				o = "MORE_PROFILE_FOLLOWERS_LOADED",
				n = "PROFILE_FOLLOWERS_SEARCH_LOADED",
				a = "PROFILE_FOLLOWERS_REQUEST_PENDING",
				d = "PROFILE_FOLLOWERS_REQUEST_FAILED",
				c = "FOLLOW_USER_SUCCESS"
		},
		"./src/reddit/actions/pages/followers/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "profileFollowersPageLoaded", (function() {
				return y
			})), r.d(t, "moreProfileFollowersLoaded", (function() {
				return m
			})), r.d(t, "profileFollowersSearchLoaded", (function() {
				return O
			})), r.d(t, "profileFollowersRequestPending", (function() {
				return w
			})), r.d(t, "profileFollowersPageFailed", (function() {
				return j
			})), r.d(t, "DEFAULT_VARIABLES", (function() {
				return g
			})), r.d(t, "followersPageRequested", (function() {
				return h
			})), r.d(t, "followersRequested", (function() {
				return x
			})), r.d(t, "followUserToggled", (function() {
				return I
			})), r.d(t, "toggleFollowUser", (function() {
				return _
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = (r("./src/reddit/actions/pages/profileOverview/index.ts"), r("./src/reddit/actions/toaster.ts")),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/redditGQL/operations/ProfileFollowers.json");
			var i = r("./src/reddit/endpoints/subreddit/subscriptions.ts");
			var l = e => {
					var t, r;
					if (!e.identity || !e.identity.followedByRedditorsInfo) return;
					const s = {},
						{
							followedByRedditorsInfo: o,
							redditor: n
						} = e.identity,
						{
							moderatedSubreddits: a
						} = n,
						{
							edges: d,
							pageInfo: c
						} = o;
					if (!d) return;
					s.pageInfo = {
						...c,
						endCursor: null !== (t = c.endCursor) && void 0 !== t ? t : null
					};
					const i = [],
						l = {};
					for (const u of d)
						if ("Redditor" === (null === (r = null == u ? void 0 : u.node) || void 0 === r ? void 0 : r.__typename)) {
							const {
								id: e
							} = u.node;
							i.push(e), l[e] = u.node
						} return s.followerUserIds = i, s.followers = l, s
				},
				u = r("./src/reddit/models/Toast/index.ts"),
				f = r("./src/reddit/actions/pages/followers/constants.ts"),
				p = r("./src/lib/initializeClient/installReducer.ts"),
				b = r("./src/reddit/reducers/pages/followers/index.ts"),
				v = r("./src/reddit/selectors/followers.ts");
			Object(p.a)({
				pages: {
					followers: b.a
				}
			});
			const y = Object(n.a)(f.b),
				m = Object(n.a)(f.a),
				O = Object(n.a)(f.e),
				w = Object(n.a)(f.d),
				j = Object(n.a)(f.c),
				g = {
					includeIdentity: !1,
					first: null,
					after: null,
					searchQuery: null
				},
				h = e => async (e, t, {
					gqlContext: r
				}) => {
					var s;
					const o = [];
					(null === (s = Object(v.a)(t())) || void 0 === s ? void 0 : s.length) || o.push(e(x(g))), await Promise.all(o)
				}, x = e => async (t, r, {
					gqlContext: s
				}) => {
					const o = !r().user.account,
						n = {
							...g,
							...e,
							includeIdentity: o
						};
					t(w());
					const i = await (async (e, t) => {
						return await Object(d.a)(e, {
							...c,
							variables: t
						})
					})(s(), n);
					if (i.ok && i.body) {
						const {
							data: r
						} = i.body, s = l(r);
						if (!s) return t(Object(a.d)()), void t(j());
						(null == e ? void 0 : e.searchQuery) ? t(O(s)): (null == e ? void 0 : e.after) ? t(m(s)) : (null == e ? void 0 : e.after) || (null == e ? void 0 : e.searchQuery) || t(y(s))
					}
					i.ok || (t(Object(a.d)()), t(j()))
				}, I = Object(n.a)(f.f), _ = (e, t) => async (r, n, {
					apiContext: d
				}) => {
					var c, l;
					const f = null === (l = null === (c = n().pages) || void 0 === c ? void 0 : c.followers) || void 0 === l ? void 0 : l.models[e];
					if (!f) return;
					r(I({
						userId: e,
						isFollowed: t
					}));
					const p = f.name;
					if ((await Object(i.c)(d(), {
							subredditNames: [`${o.jc}${f.name}`],
							subscribe: t
						})).ok) {
						r(I({
							userId: e,
							isFollowed: t
						}));
						const o = s.fbt._("Sucсessfully followed {userName}", [s.fbt._param("userName", p)], {
								hk: "1AYBqL"
							}),
							n = s.fbt._("Sucсessfully unfollowed {userName}", [s.fbt._param("userName", p)], {
								hk: "4F2yCK"
							});
						r(Object(a.f)({
							text: t ? o : n
						}))
					} else {
						const o = s.fbt._("Something went wrong", null, {
							hk: "3i6szH"
						});
						r(I({
							userId: e,
							isFollowed: !t
						})), r(Object(a.f)(Object(a.e)(o, u.b.Error)))
					}
				}
		},
		"./src/reddit/actions/pages/profileOverview/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "profileOverviewConversationsPending", (function() {
				return Ie
			})), r.d(t, "profileOverviewConversationsLoaded", (function() {
				return _e
			})), r.d(t, "profileOverviewConversationsFailed", (function() {
				return Le
			})), r.d(t, "profileOverviewChronoPending", (function() {
				return Ce
			})), r.d(t, "profileOverviewChronoLoaded", (function() {
				return ke
			})), r.d(t, "profileOverviewChronoFailed", (function() {
				return Pe
			})), r.d(t, "profileOverviewConversationsRequested", (function() {
				return Re
			})), r.d(t, "profileOverviewRequested", (function() {
				return Ee
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/pick.js"),
				o = r.n(s),
				n = r("./src/reddit/actions/moderatingSubreddits.ts"),
				a = r("./src/reddit/actions/pages/profileShared.ts"),
				d = r("./src/reddit/actions/subreddit.ts"),
				c = r("./src/config.ts"),
				i = r("./src/lib/addAllowQuarantinedParam/index.ts"),
				l = r("./src/lib/constants/index.ts"),
				u = r("./src/lib/makeApiRequest/index.ts"),
				f = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = r("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				b = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var v = r("./src/reddit/constants/postLayout.ts"),
				y = r("./src/reddit/constants/parameters.ts"),
				m = r("./src/reddit/contexts/PageLayer/index.tsx"),
				O = r("./src/reddit/selectors/listings.ts"),
				w = r("./src/reddit/selectors/profile.ts"),
				j = r("./src/reddit/selectors/user.ts"),
				g = r("./src/lib/makeActionCreator/index.ts"),
				h = r("./src/reddit/actions/changeUsername.ts"),
				x = r("./src/reddit/actions/contentGate.ts"),
				I = r("./src/reddit/actions/externalAccount.ts"),
				_ = r("./src/reddit/actions/gold/powerups.ts"),
				L = r("./src/reddit/actions/pinnedPost.ts"),
				C = r("./src/reddit/actions/platform.ts"),
				k = r("./src/reddit/actions/profile/index.ts"),
				P = r("./src/reddit/actions/trophyCase.ts"),
				R = r("./src/reddit/constants/errors.ts"),
				E = r("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				F = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				A = r("./src/reddit/actions/pages/profileOverview/constants.ts"),
				S = r("./src/lib/initializeClient/installReducer.ts"),
				N = r("./node_modules/redux/es/redux.js"),
				q = r("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const D = {};
			var T = (e = D, t) => {
				switch (t.type) {
					case A.c:
					case A.b:
					case q.c:
					case q.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case A.a:
					case q.a: {
						const {
							key: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const U = {};
			var K = (e = U, t) => {
					switch (t.type) {
						case A.c:
						case q.c: {
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
						case q.b:
						case q.a: {
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
				Q = Object(N.c)({
					error: T,
					pending: K
				});
			const G = {};
			var B = (e = G, t) => {
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
					case q.b: {
						const {
							key: r,
							fetchedToken: s
						} = t.payload, o = e[r];
						return {
							...e,
							[r]: {
								...o,
								[s]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const W = {};
			var $ = (e = W, t) => {
					switch (t.type) {
						case A.b:
						case q.b: {
							const {
								key: r,
								overviewIds: s
							} = t.payload, o = e[r] || [];
							return {
								...e,
								[r]: [...o, ...s]
							}
						}
						default:
							return e
					}
				},
				H = r("./src/lib/omitKey/index.ts");
			const z = {};
			var J = (e = z, t) => {
					switch (t.type) {
						case A.b:
						case q.b: {
							const {
								key: r,
								dist: s,
								token: o
							} = t.payload;
							return o ? {
								...e,
								[r]: {
									dist: s,
									token: o
								}
							} : Object(H.a)(e, r)
						}
						default:
							return e
					}
				},
				M = Object(N.c)({
					api: Q,
					fetchedTokens: B,
					ids: $,
					loadMore: J
				});
			const V = {};
			var Y = (e = V, t) => {
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
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s || {}
						}
					}
					default:
						return e
				}
			};
			const X = {};
			var Z = (e = X, t) => {
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
				ee = Object(N.c)({
					error: Y,
					pending: Z
				}),
				te = r("./src/reddit/actions/profileConversations.ts");
			const re = {};
			var se = (e = re, t) => {
				switch (t.type) {
					case te.c:
					case te.b: {
						const {
							extraCommentsId: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case te.a: {
						const {
							extraCommentsId: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s || {}
						}
					}
					default:
						return e
				}
			};
			const oe = {};
			var ne = (e = oe, t) => {
					switch (t.type) {
						case te.c: {
							const {
								extraCommentsId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case te.b:
						case te.a: {
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
				ae = Object(N.c)({
					error: se,
					pending: ne
				});
			const de = {};
			var ce = (e = de, t) => {
					switch (t.type) {
						case A.e:
						case te.b:
						case te.e:
							return {
								...e, ...t.payload.extraComments
							};
						default:
							return e
					}
				},
				ie = Object(N.c)({
					api: ae,
					models: ce
				}),
				le = r("./node_modules/lodash/mapValues.js"),
				ue = r.n(le),
				fe = r("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				pe = r("./src/reddit/constants/comments.ts");
			const be = {};

			function ve(e) {
				const t = e;
				return ue()(t, ({
					depth: e,
					next: t,
					prev: r
				}) => ({
					depth: e,
					next: t,
					prev: r
				}))
			}
			const ye = (e, t, r) => {
				const s = {};
				for (const o in t) {
					const e = t[o],
						r = e.postId;
					s.hasOwnProperty(r) ? s[r] = {
						...s[r],
						[o]: e
					} : s[r] = {
						[o]: e
					}
				}
				for (const o in r) {
					const e = r[o],
						t = e.postId;
					s.hasOwnProperty(t) ? s[t] = {
						...s[t],
						[o]: e
					} : s[t] = {
						[t]: e
					}
				}
				return s
			};
			var me = (e = be, t) => {
				switch (t.type) {
					case A.e:
					case te.e: {
						const {
							comments: r,
							extraComments: s,
							postIds: o,
							profileName: n
						} = t.payload, a = ye(o, r, s), d = {};
						for (const e of o) {
							d[Object(fe.a)(e, n)] = a.hasOwnProperty(e) ? ve(a[e]) : {}
						}
						return {
							...e,
							...d
						}
					}
					case te.b: {
						const {
							comments: r,
							commentLists: s,
							extraComments: o,
							extraCommentsId: n,
							postIds: a,
							profileName: d
						} = t.payload;
						if (0 === a.length) {
							const t = Object.keys(e).find(t => void 0 !== e[t][n]);
							if (!t) return e;
							const r = {
									...e[t]
								} [n].prev,
								s = r && r.id || "";
							return {
								...e,
								[t]: {
									...e[t],
									[s]: {
										...e[t][s],
										next: null
									}
								}
							}
						}
						const c = a[0],
							i = ve(ye(a, r, o)[c]),
							l = Object(fe.a)(c, d),
							u = {
								...e[l]
							},
							f = u[n].prev,
							p = f && f.id || "",
							b = s[c].head,
							v = b && b.id || "",
							y = {
								id: v,
								type: pe.a.Comment
							},
							m = {
								...u,
								[p]: {
									...u[p],
									next: y
								},
								...i,
								[v]: {
									...i[v],
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
			const Oe = {};
			var we = (e = Oe, t) => {
				switch (t.type) {
					case A.e:
					case te.e: {
						const {
							commentLists: r,
							postIds: s,
							profileName: o
						} = t.payload, n = {};
						for (const e of s) {
							n[Object(fe.a)(e, o)] = r[e] && r[e].head ? r[e].head.id : null
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
			const je = {};
			var ge = (e = je, t) => {
					switch (t.type) {
						case A.e:
						case te.e: {
							const {
								postIds: r,
								profileName: s
							} = t.payload, o = {};
							for (const e of r) {
								o[Object(fe.a)(e, s)] = e
							}
							return {
								...e,
								...o
							}
						}
						default:
							return e
					}
				},
				he = Object(N.c)({
					api: ee,
					extraComments: ie,
					keyToCommentThreadLinkSets: me,
					keyToHeadCommentId: we,
					keyToPostId: ge
				}),
				xe = Object(N.c)({
					chrono: M,
					conversations: he
				});
			Object(S.a)({
				pages: {
					profileOverview: xe
				}
			});
			const Ie = Object(g.a)(A.f),
				_e = Object(g.a)(A.e),
				Le = Object(g.a)(A.d),
				Ce = Object(g.a)(A.c),
				ke = Object(g.a)(A.b),
				Pe = Object(g.a)(A.a),
				Re = (e, t, r, s) => async (s, o, n) => {
					const a = o(),
						d = !!a.listings.postOrder.ids[e],
						v = !!Object(O.c)(a, {
							listingKey: e
						});
					if (!!Object(O.d)(a, {
							listingKey: e
						}) || d && !v) return;
					s(Ie({
						key: e
					}));
					const y = await Object(F.a)("profile", () => ((e, t, r) => Object(u.a)(e, {
							data: r,
							endpoint: Object(f.a)(Object(i.a)(Object(p.a)(Object(b.a)(`${c.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
							traceRequestName: "get_profile_conversations",
							method: l.jb.GET
						}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
							...e,
							body: {
								...e.body,
								pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
							}
						} : e))(n.apiContext(), t, r)),
						m = y.body,
						{
							pinned: j,
							postIds: g
						} = m;
					if (y.ok) {
						s(_e({
							key: e,
							meta: a.meta,
							profileName: t,
							...m,
							postIds: g
						}));
						const r = Object(w.m)(o(), t);
						s(Object(L.h)({
							profileId: r,
							pinned: j
						}))
					} else s(Le({
						account: y.body.data ? y.body.data.account : null,
						error: y.body.reason ? {
							type: y.body.reason
						} : y.error,
						key: e
					})), y.body.reason === R.a.DeletedProfile && s(Object(x.q)({
						profileName: t
					})), s(Object(C.n)(y.status))
				}, Ee = e => async (t, r, s) => {
					const {
						queryParams: c,
						params: i
					} = e, {
						sort: u,
						t: f
					} = Object(a.a)(r(), c), {
						profileName: p
					} = i;
					let b = !1;
					const O = v.e[Object(m.R)(r(), {})],
						g = p.toLowerCase(),
						x = {
							...o()(e.queryParams, y.m),
							sort: u,
							layout: O,
							t: f
						},
						L = [t(k.d(g))],
						R = Object(E.a)(g, l.ub, u, e.queryParams);
					if (r().listings.postOrder.ids[R] && !r().listings.postOrder.api.error[R] ? b = !0 : L.push(t(Re(R, g, x, !0))), L.push(t(Object(n.b)())), await Promise.all(L), b) return;
					const F = r();
					if (!F.platform.currentPage) return;
					if (200 !== F.platform.currentPage.status) return;
					const A = Object(w.m)(r(), g),
						S = Object(j.sb)(F, {
							userName: p
						}).id;
					t(C.m({
						title: Fe(r(), p)
					})), Object(j.M)(F) && Object(j.Q)(F, p) && t(Object(h.f)());
					const N = [t(Object(d.q)()), t(P.b(g, A)), t(k.b(g)), t(I.o(p)), t(k.g(p)), t(_.l(p, S))];
					await Promise.all(N)
				}, Fe = (e, t) => Object(w.q)(e, {
					profileName: t
				})
		},
		"./src/reddit/reducers/pages/followers/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/redux/es/redux.js"),
				o = r("./src/reddit/actions/pages/followers/constants.ts");
			var n = (e = !1, t) => {
					switch (t.type) {
						case o.b:
						case o.e:
						case o.a:
						case o.c:
							return !1;
						case o.d:
							return !0;
						default:
							return e
					}
				},
				a = Object(s.c)({
					pending: n
				});
			const d = {};
			var c = (e = d, t) => {
				switch (t.type) {
					case o.b:
					case o.a:
					case o.e: {
						const {
							followers: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case o.f: {
						const {
							userId: r,
							isFollowed: s
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								isFollowed: s
							}
						}
					}
					default:
						return e
				}
			};
			var i = (e = null, t) => {
				switch (t.type) {
					case o.a:
					case o.b: {
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
			var u = (e = l, t) => {
				switch (t.type) {
					case o.e: {
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
			var p = (e = f, t) => {
				switch (t.type) {
					case o.b: {
						const {
							followerUserIds: r
						} = t.payload;
						return r || e
					}
					case o.a: {
						const {
							followerUserIds: r
						} = t.payload;
						return r ? [...e, ...r] : e
					}
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				api: a,
				models: c,
				pageInfo: i,
				search: u,
				userIds: p
			})
		},
		"./src/reddit/selectors/followers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return i
			}));
			var s = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/pages/followers/index.ts");
			Object(s.a)({
				pages: {
					followers: o.a
				}
			});
			const n = e => {
					var t, r;
					return null === (r = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === r ? void 0 : r.userIds
				},
				a = (e, t) => {
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
				c = e => {
					var t, r;
					return null === (r = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === r ? void 0 : r.api.pending
				},
				i = e => {
					var t, r;
					return null === (r = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === r ? void 0 : r.pageInfo
				}
		},
		"./src/redditGQL/operations/ProfileFollowers.json": function(e) {
			e.exports = JSON.parse('{"id":"fe780a440dbd"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileFollowersAction.77700861e2a5f4059d58.js.map