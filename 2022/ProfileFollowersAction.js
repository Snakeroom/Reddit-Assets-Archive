// https://www.redditstatic.com/desktop2x/ProfileFollowersAction.66d03ce0781522b41dd2.js
// Retrieved at 3/21/2022, 12:30:04 PM by Reddit Dataminer v1.0.0
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
				return _e
			})), r.d(t, "profileOverviewConversationsLoaded", (function() {
				return Ce
			})), r.d(t, "profileOverviewConversationsFailed", (function() {
				return Le
			})), r.d(t, "profileOverviewChronoPending", (function() {
				return ke
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
			var s = r("./node_modules/lodash/pick.js"),
				o = r.n(s),
				n = r("./src/lib/constants/index.ts"),
				a = r("./src/reddit/actions/moderatingSubreddits.ts"),
				d = r("./src/reddit/actions/pages/profileShared.ts"),
				c = r("./src/reddit/actions/subreddit.ts"),
				i = r("./src/config.ts"),
				l = r("./src/lib/addAllowQuarantinedParam/index.ts"),
				u = r("./src/lib/makeApiRequest/index.ts"),
				f = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = r("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				b = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var v = r("./src/reddit/helpers/post/index.ts"),
				y = r("./src/reddit/constants/postLayout.ts"),
				m = r("./src/reddit/constants/parameters.ts"),
				O = r("./src/reddit/contexts/PageLayer/index.tsx"),
				w = r("./src/reddit/selectors/listings.ts"),
				j = r("./src/reddit/selectors/profile.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				h = r("./src/lib/makeActionCreator/index.ts"),
				x = r("./src/reddit/actions/changeUsername.ts"),
				I = r("./src/reddit/actions/contentGate.ts"),
				_ = r("./src/reddit/actions/externalAccount.ts"),
				C = r("./src/reddit/actions/gold/powerups.ts"),
				L = r("./src/reddit/actions/pinnedPost.ts"),
				k = r("./src/reddit/actions/platform.ts"),
				P = r("./src/reddit/actions/profile/index.ts"),
				R = r("./src/reddit/actions/trophyCase.ts"),
				E = r("./src/reddit/constants/errors.ts"),
				F = r("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				A = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				S = r("./src/reddit/actions/pages/profileOverview/constants.ts"),
				N = r("./src/lib/initializeClient/installReducer.ts"),
				q = r("./node_modules/redux/es/redux.js"),
				D = r("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const T = {};
			var U = (e = T, t) => {
				switch (t.type) {
					case S.c:
					case S.b:
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
					case S.a:
					case D.a: {
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
			const K = {};
			var Q = (e = K, t) => {
					switch (t.type) {
						case S.c:
						case D.c: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case S.b:
						case S.a:
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
			const B = {};
			var W = (e = B, t) => {
				switch (t.type) {
					case S.b: {
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
			const $ = {};
			var H = (e = $, t) => {
					switch (t.type) {
						case S.b:
						case D.b: {
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
				z = r("./src/lib/omitKey/index.ts");
			const J = {};
			var M = (e = J, t) => {
					switch (t.type) {
						case S.b:
						case D.b: {
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
							} : Object(z.a)(e, r)
						}
						default:
							return e
					}
				},
				V = Object(q.c)({
					api: G,
					fetchedTokens: W,
					ids: H,
					loadMore: M
				});
			const Y = {};
			var X = (e = Y, t) => {
				switch (t.type) {
					case S.f:
					case S.e: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case S.d: {
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
			const Z = {};
			var ee = (e = Z, t) => {
					switch (t.type) {
						case S.f: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case S.e:
						case S.d: {
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
			const se = {};
			var oe = (e = se, t) => {
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
			const ne = {};
			var ae = (e = ne, t) => {
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
					error: oe,
					pending: ae
				});
			const ce = {};
			var ie = (e = ce, t) => {
					switch (t.type) {
						case S.e:
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
					models: ie
				}),
				ue = r("./node_modules/lodash/mapValues.js"),
				fe = r.n(ue),
				pe = r("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				be = r("./src/reddit/constants/comments.ts");
			const ve = {};

			function ye(e) {
				const t = e;
				return fe()(t, ({
					depth: e,
					next: t,
					prev: r
				}) => ({
					depth: e,
					next: t,
					prev: r
				}))
			}
			const me = (e, t, r) => {
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
			var Oe = (e = ve, t) => {
				switch (t.type) {
					case S.e:
					case re.e: {
						const {
							comments: r,
							extraComments: s,
							postIds: o,
							profileName: n
						} = t.payload, a = me(o, r, s), d = {};
						for (const e of o) {
							d[Object(pe.a)(e, n)] = a.hasOwnProperty(e) ? ye(a[e]) : {}
						}
						return {
							...e,
							...d
						}
					}
					case re.b: {
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
							i = ye(me(a, r, o)[c]),
							l = Object(pe.a)(c, d),
							u = {
								...e[l]
							},
							f = u[n].prev,
							p = f && f.id || "",
							b = s[c].head,
							v = b && b.id || "",
							y = {
								id: v,
								type: be.a.Comment
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
			const we = {};
			var je = (e = we, t) => {
				switch (t.type) {
					case S.e:
					case re.e: {
						const {
							commentLists: r,
							postIds: s,
							profileName: o
						} = t.payload, n = {};
						for (const e of s) {
							n[Object(pe.a)(e, o)] = r[e] && r[e].head ? r[e].head.id : null
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
			var he = (e = ge, t) => {
					switch (t.type) {
						case S.e:
						case re.e: {
							const {
								postIds: r,
								profileName: s
							} = t.payload, o = {};
							for (const e of r) {
								o[Object(pe.a)(e, s)] = e
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
				xe = Object(q.c)({
					api: te,
					extraComments: le,
					keyToCommentThreadLinkSets: Oe,
					keyToHeadCommentId: je,
					keyToPostId: he
				}),
				Ie = Object(q.c)({
					chrono: V,
					conversations: xe
				});
			Object(N.a)({
				pages: {
					profileOverview: Ie
				}
			});
			const _e = Object(h.a)(S.f),
				Ce = Object(h.a)(S.e),
				Le = Object(h.a)(S.d),
				ke = Object(h.a)(S.c),
				Pe = Object(h.a)(S.b),
				Re = Object(h.a)(S.a),
				Ee = (e, t, r, s) => async (s, o, a) => {
					const d = o(),
						c = !!d.listings.postOrder.ids[e],
						y = !!Object(w.c)(d, {
							listingKey: e
						});
					if (!!Object(w.d)(d, {
							listingKey: e
						}) || c && !y) return;
					s(_e({
						key: e
					}));
					const m = await Object(A.a)("profile", () => ((e, t, r) => Object(u.a)(e, {
							data: r,
							endpoint: Object(f.a)(Object(l.a)(Object(p.a)(Object(b.a)(`${i.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
							traceRequestName: "get_profile_conversations",
							method: n.jb.GET
						}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
							...e,
							body: {
								...e.body,
								pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
							}
						} : e))(a.apiContext(), t, r)),
						O = m.body;
					await Object(v.a)(a.gqlContext, O.posts).then(e => O.posts = e);
					const {
						pinned: g,
						postIds: h
					} = O;
					if (m.ok) {
						s(Ce({
							key: e,
							meta: d.meta,
							profileName: t,
							...O,
							postIds: h
						}));
						const r = Object(j.m)(o(), t);
						s(Object(L.h)({
							profileId: r,
							pinned: g
						}))
					} else s(Le({
						account: m.body.data ? m.body.data.account : null,
						error: m.body.reason ? {
							type: m.body.reason
						} : m.error,
						key: e
					})), m.body.reason === E.a.DeletedProfile && s(Object(I.q)({
						profileName: t
					})), s(Object(k.n)(m.status))
				}, Fe = e => async (t, r, s) => {
					const {
						queryParams: i,
						params: l
					} = e, {
						sort: u,
						t: f
					} = Object(d.a)(r(), i), {
						profileName: p
					} = l;
					let b = !1;
					const v = y.e[Object(O.R)(r(), {})],
						w = p.toLowerCase(),
						h = {
							...o()(e.queryParams, m.m),
							sort: u,
							layout: v,
							t: f
						},
						I = [t(P.d(w))],
						L = Object(F.a)(w, n.ub, u, e.queryParams);
					if (r().listings.postOrder.ids[L] && !r().listings.postOrder.api.error[L] ? b = !0 : I.push(t(Ee(L, w, h, !0))), I.push(t(Object(a.b)())), await Promise.all(I), b) return;
					const E = r();
					if (!E.platform.currentPage) return;
					if (200 !== E.platform.currentPage.status) return;
					const A = Object(j.m)(r(), w),
						S = Object(g.wb)(E, {
							userName: p
						}).id;
					t(k.m({
						title: Ae(r(), p)
					})), Object(g.Q)(E) && Object(g.U)(E, p) && t(Object(x.f)());
					const N = [t(Object(c.q)()), t(R.b(w, A)), t(P.b(w)), t(_.o(p)), t(P.g(p)), t(C.l(p, S))];
					await Promise.all(N)
				}, Ae = (e, t) => Object(j.q)(e, {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileFollowersAction.66d03ce0781522b41dd2.js.map