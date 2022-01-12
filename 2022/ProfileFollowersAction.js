// https://www.redditstatic.com/desktop2x/ProfileFollowersAction.5024552423e3b26b7ca0.js
// Retrieved at 1/12/2022, 2:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileFollowersAction"], {
		"./src/lib/makeOverviewConversationsItemKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = (e, t) => {
				return `overviewConversations--[profile:'${t}']--[post:'${e}']`
			}
		},
		"./src/reddit/actions/pages/followers/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "e", (function() {
				return r
			})), s.d(t, "d", (function() {
				return n
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "f", (function() {
				return l
			}));
			const o = "PROFILE_FOLLOWERS_PAGE_LOADED",
				i = "MORE_PROFILE_FOLLOWERS_LOADED",
				r = "PROFILE_FOLLOWERS_SEARCH_LOADED",
				n = "PROFILE_FOLLOWERS_REQUEST_PENDING",
				d = "PROFILE_FOLLOWERS_REQUEST_FAILED",
				l = "FOLLOW_USER_SUCCESS"
		},
		"./src/reddit/actions/pages/followers/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileFollowersPageLoaded", (function() {
				return f
			})), s.d(t, "moreProfileFollowersLoaded", (function() {
				return v
			})), s.d(t, "profileFollowersSearchLoaded", (function() {
				return h
			})), s.d(t, "profileFollowersRequestPending", (function() {
				return g
			})), s.d(t, "profileFollowersPageFailed", (function() {
				return w
			})), s.d(t, "DEFAULT_VARIABLES", (function() {
				return O
			})), s.d(t, "followersPageRequested", (function() {
				return C
			})), s.d(t, "followersRequested", (function() {
				return j
			})), s.d(t, "followUserToggled", (function() {
				return k
			})), s.d(t, "toggleFollowUser", (function() {
				return I
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				n = (s("./src/reddit/actions/pages/profileOverview/index.ts"), s("./src/reddit/actions/toaster.ts")),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				l = s("./src/redditGQL/operations/ProfileFollowers.json");
			var a = s("./src/reddit/endpoints/subreddit/subscriptions.ts");
			var c = e => {
					var t, s;
					if (!e.identity || !e.identity.followedByRedditorsInfo) return;
					const o = {},
						{
							followedByRedditorsInfo: i,
							redditor: r
						} = e.identity,
						{
							moderatedSubreddits: n
						} = r,
						{
							edges: d,
							pageInfo: l
						} = i;
					if (!d) return;
					o.pageInfo = {
						...l,
						endCursor: null !== (t = l.endCursor) && void 0 !== t ? t : null
					};
					const a = [],
						c = {};
					for (const u of d)
						if ("Redditor" === (null === (s = null == u ? void 0 : u.node) || void 0 === s ? void 0 : s.__typename)) {
							const {
								id: e
							} = u.node;
							a.push(e), c[e] = u.node
						} return o.followerUserIds = a, o.followers = c, o
				},
				u = s("./src/reddit/models/Toast/index.ts"),
				p = s("./src/reddit/actions/pages/followers/constants.ts"),
				m = s("./src/lib/initializeClient/installReducer.ts"),
				b = s("./src/reddit/reducers/pages/followers/index.ts"),
				y = s("./src/reddit/selectors/followers.ts");
			Object(m.a)({
				pages: {
					followers: b.a
				}
			});
			const f = Object(r.a)(p.b),
				v = Object(r.a)(p.a),
				h = Object(r.a)(p.e),
				g = Object(r.a)(p.d),
				w = Object(r.a)(p.c),
				O = {
					includeIdentity: !1,
					first: null,
					after: null,
					searchQuery: null
				},
				C = e => async (e, t, {
					gqlContext: s
				}) => {
					var o;
					const i = [];
					(null === (o = Object(y.a)(t())) || void 0 === o ? void 0 : o.length) || i.push(e(j(O))), await Promise.all(i)
				}, j = e => async (t, s, {
					gqlContext: o
				}) => {
					const i = !s().user.account,
						r = {
							...O,
							...e,
							includeIdentity: i
						};
					t(g());
					const a = await (async (e, t) => {
						return await Object(d.a)(e, {
							...l,
							variables: t
						})
					})(o(), r);
					if (a.ok && a.body) {
						const {
							data: s
						} = a.body, o = c(s);
						if (!o) return t(Object(n.d)()), void t(w());
						(null == e ? void 0 : e.searchQuery) ? t(h(o)): (null == e ? void 0 : e.after) ? t(v(o)) : (null == e ? void 0 : e.after) || (null == e ? void 0 : e.searchQuery) || t(f(o))
					}
					a.ok || (t(Object(n.d)()), t(w()))
				}, k = Object(r.a)(p.f), I = (e, t) => async (s, r, {
					apiContext: d
				}) => {
					var l, c;
					const p = null === (c = null === (l = r().pages) || void 0 === l ? void 0 : l.followers) || void 0 === c ? void 0 : c.models[e];
					if (!p) return;
					s(k({
						userId: e,
						isFollowed: t
					}));
					const m = p.name;
					if ((await Object(a.c)(d(), {
							subredditNames: [`${i.ic}${p.name}`],
							subscribe: t
						})).ok) {
						s(k({
							userId: e,
							isFollowed: t
						}));
						const i = o.fbt._("Sucсessfully followed {userName}", [o.fbt._param("userName", m)], {
								hk: "1AYBqL"
							}),
							r = o.fbt._("Sucсessfully unfollowed {userName}", [o.fbt._param("userName", m)], {
								hk: "4F2yCK"
							});
						s(Object(n.f)({
							text: t ? i : r
						}))
					} else {
						const i = o.fbt._("Something went wrong", null, {
							hk: "3i6szH"
						});
						s(k({
							userId: e,
							isFollowed: !t
						})), s(Object(n.f)(Object(n.e)(i, u.b.Error)))
					}
				}
		},
		"./src/reddit/actions/pages/profileOverview/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileOverviewConversationsPending", (function() {
				return we
			})), s.d(t, "profileOverviewConversationsLoaded", (function() {
				return Oe
			})), s.d(t, "profileOverviewConversationsFailed", (function() {
				return Ce
			})), s.d(t, "profileOverviewChronoPending", (function() {
				return je
			})), s.d(t, "profileOverviewChronoLoaded", (function() {
				return ke
			})), s.d(t, "profileOverviewChronoFailed", (function() {
				return Ie
			})), s.d(t, "profileOverviewConversationsRequested", (function() {
				return _e
			})), s.d(t, "profileOverviewChronoRequested", (function() {
				return Se
			})), s.d(t, "profileOverviewRequested", (function() {
				return Re
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/lodash/pick.js"),
				i = s.n(o),
				r = s("./src/reddit/actions/moderatingSubreddits.ts"),
				n = s("./src/reddit/actions/pages/profileShared.ts"),
				d = s("./src/reddit/actions/subreddit.ts"),
				l = s("./src/reddit/endpoints/page/profileOverviewPage.ts"),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/constants/parameters.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/selectors/listings.ts"),
				b = s("./src/reddit/selectors/profile.ts"),
				y = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				v = s("./src/lib/makeActionCreator/index.ts"),
				h = s("./src/reddit/actions/changeUsername.ts"),
				g = s("./src/reddit/actions/contentGate.ts"),
				w = s("./src/reddit/actions/externalAccount.ts"),
				O = s("./src/reddit/actions/gold/powerups.ts"),
				C = s("./src/reddit/actions/pinnedPost.ts"),
				j = s("./src/reddit/actions/platform.ts"),
				k = s("./src/reddit/actions/profile/index.ts"),
				I = s("./src/reddit/actions/trophyCase.ts"),
				_ = s("./src/reddit/constants/errors.ts"),
				S = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				R = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				T = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				x = s("./src/lib/initializeClient/installReducer.ts"),
				A = s("./node_modules/redux/es/redux.js"),
				F = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const P = {};
			var L = (e = P, t) => {
				switch (t.type) {
					case T.c:
					case T.b:
					case F.c:
					case F.b: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case T.a:
					case F.a: {
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
			const B = {};
			var E = (e = B, t) => {
					switch (t.type) {
						case T.c:
						case F.c: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case T.b:
						case T.a:
						case F.b:
						case F.a: {
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
				N = Object(A.c)({
					error: L,
					pending: E
				});
			const U = {};
			var K = (e = U, t) => {
				switch (t.type) {
					case T.b: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: {}
						}
					}
					case F.b: {
						const {
							key: s,
							fetchedToken: o
						} = t.payload, i = e[s];
						return {
							...e,
							[s]: {
								...i,
								[o]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const G = {};
			var M = (e = G, t) => {
					switch (t.type) {
						case T.b:
						case F.b: {
							const {
								key: s,
								overviewIds: o
							} = t.payload, i = e[s] || [];
							return {
								...e,
								[s]: [...i, ...o]
							}
						}
						default:
							return e
					}
				},
				W = s("./src/lib/omitKey/index.ts");
			const q = {};
			var D = (e = q, t) => {
					switch (t.type) {
						case T.b:
						case F.b: {
							const {
								key: s,
								dist: o,
								token: i
							} = t.payload;
							return i ? {
								...e,
								[s]: {
									dist: o,
									token: i
								}
							} : Object(W.a)(e, s)
						}
						default:
							return e
					}
				},
				X = Object(A.c)({
					api: N,
					fetchedTokens: K,
					ids: M,
					loadMore: D
				});
			const H = {};
			var Q = (e = H, t) => {
				switch (t.type) {
					case T.f:
					case T.e: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case T.d: {
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
			const z = {};
			var V = (e = z, t) => {
					switch (t.type) {
						case T.f: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case T.e:
						case T.d: {
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
				Y = Object(A.c)({
					error: Q,
					pending: V
				}),
				$ = s("./src/reddit/actions/profileConversations.ts");
			const Z = {};
			var J = (e = Z, t) => {
				switch (t.type) {
					case $.c:
					case $.b: {
						const {
							extraCommentsId: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case $.a: {
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
			const ee = {};
			var te = (e = ee, t) => {
					switch (t.type) {
						case $.c: {
							const {
								extraCommentsId: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case $.b:
						case $.a: {
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
				se = Object(A.c)({
					error: J,
					pending: te
				});
			const oe = {};
			var ie = (e = oe, t) => {
					switch (t.type) {
						case T.e:
						case $.b:
						case $.e:
							return {
								...e, ...t.payload.extraComments
							};
						default:
							return e
					}
				},
				re = Object(A.c)({
					api: se,
					models: ie
				}),
				ne = s("./node_modules/lodash/mapValues.js"),
				de = s.n(ne),
				le = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				ae = s("./src/reddit/constants/comments.ts");
			const ce = {};

			function ue(e) {
				const t = e;
				return de()(t, ({
					depth: e,
					next: t,
					prev: s
				}) => ({
					depth: e,
					next: t,
					prev: s
				}))
			}
			const pe = (e, t, s) => {
				const o = {};
				for (const i in t) {
					const e = t[i],
						s = e.postId;
					o.hasOwnProperty(s) ? o[s] = {
						...o[s],
						[i]: e
					} : o[s] = {
						[i]: e
					}
				}
				for (const i in s) {
					const e = s[i],
						t = e.postId;
					o.hasOwnProperty(t) ? o[t] = {
						...o[t],
						[i]: e
					} : o[t] = {
						[t]: e
					}
				}
				return o
			};
			var me = (e = ce, t) => {
				switch (t.type) {
					case T.e:
					case $.e: {
						const {
							comments: s,
							extraComments: o,
							postIds: i,
							profileName: r
						} = t.payload, n = pe(i, s, o), d = {};
						for (const e of i) {
							d[Object(le.a)(e, r)] = n.hasOwnProperty(e) ? ue(n[e]) : {}
						}
						return {
							...e,
							...d
						}
					}
					case $.b: {
						const {
							comments: s,
							commentLists: o,
							extraComments: i,
							extraCommentsId: r,
							postIds: n,
							profileName: d
						} = t.payload;
						if (0 === n.length) {
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
						const l = n[0],
							a = ue(pe(n, s, i)[l]),
							c = Object(le.a)(l, d),
							u = {
								...e[c]
							},
							p = u[r].prev,
							m = p && p.id || "",
							b = o[l].head,
							y = b && b.id || "",
							f = {
								id: y,
								type: ae.a.Comment
							},
							v = {
								...u,
								[m]: {
									...u[m],
									next: f
								},
								...a,
								[y]: {
									...a[y],
									prev: p
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
			const be = {};
			var ye = (e = be, t) => {
				switch (t.type) {
					case T.e:
					case $.e: {
						const {
							commentLists: s,
							postIds: o,
							profileName: i
						} = t.payload, r = {};
						for (const e of o) {
							r[Object(le.a)(e, i)] = s[e] && s[e].head ? s[e].head.id : null
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
			const fe = {};
			var ve = (e = fe, t) => {
					switch (t.type) {
						case T.e:
						case $.e: {
							const {
								postIds: s,
								profileName: o
							} = t.payload, i = {};
							for (const e of s) {
								i[Object(le.a)(e, o)] = e
							}
							return {
								...e,
								...i
							}
						}
						default:
							return e
					}
				},
				he = Object(A.c)({
					api: Y,
					extraComments: re,
					keyToCommentThreadLinkSets: me,
					keyToHeadCommentId: ye,
					keyToPostId: ve
				}),
				ge = Object(A.c)({
					chrono: X,
					conversations: he
				});
			Object(x.a)({
				pages: {
					profileOverview: ge
				}
			});
			const we = Object(v.a)(T.f),
				Oe = Object(v.a)(T.e),
				Ce = Object(v.a)(T.d),
				je = Object(v.a)(T.c),
				ke = Object(v.a)(T.b),
				Ie = Object(v.a)(T.a),
				_e = (e, t, s, o) => async (o, i, r) => {
					const n = i(),
						d = !!n.listings.postOrder.ids[e],
						a = !!Object(m.c)(n, {
							listingKey: e
						});
					if (!!Object(m.d)(n, {
							listingKey: e
						}) || d && !a) return;
					o(we({
						key: e
					}));
					const c = await Object(R.a)("profile", () => Object(l.b)(r.apiContext(), t, s)),
						u = c.body,
						{
							pinned: p,
							postIds: y
						} = u;
					if (c.ok) {
						o(Oe({
							key: e,
							meta: n.meta,
							profileName: t,
							...u,
							postIds: y
						}));
						const s = Object(b.m)(i(), t);
						o(Object(C.h)({
							profileId: s,
							pinned: p
						}))
					} else o(Ce({
						account: c.body.data ? c.body.data.account : null,
						error: c.body.reason ? {
							type: c.body.reason
						} : c.error,
						key: e
					})), c.body.reason === _.a.DeletedProfile && o(Object(g.q)({
						profileName: t
					})), o(Object(j.n)(c.status))
				}, Se = (e, t, s, o) => async (o, i, r) => {
					const n = i(),
						d = !!Object(y.f)(n, {
							listingKey: e
						}).length,
						a = !!Object(y.a)(n, {
							listingKey: e
						});
					if (!!Object(y.b)(n, {
							listingKey: e
						}) || d && !a) return;
					o(je({
						key: e
					}));
					const c = await Object(R.a)("profile", () => Object(l.a)(r.apiContext(), t, s)),
						u = c.body,
						{
							pinned: p
						} = u;
					if (c.ok) {
						o(ke({
							key: e,
							meta: n.meta,
							...u
						}));
						const s = Object(b.m)(i(), t);
						o(Object(C.h)({
							profileId: s,
							pinned: p
						}))
					} else o(Ie({
						account: c.body.data ? c.body.data.account : null,
						error: c.body.reason ? {
							type: c.body.reason
						} : c.error,
						key: e
					})), c.body.reason === _.a.DeletedProfile && o(Object(g.q)({
						profileName: t
					})), o(Object(j.n)(c.status))
				}, Re = e => async (t, s, o) => {
					const {
						queryParams: l,
						params: m
					} = e, {
						sort: y,
						t: v
					} = Object(n.a)(s(), l), {
						profileName: g
					} = m;
					let C = !1;
					const _ = c.e[Object(p.R)(s(), {})],
						R = g.toLowerCase(),
						T = {
							...i()(e.queryParams, u.m),
							sort: y,
							layout: _,
							t: v
						},
						x = [t(k.d(R))];
					if (_ === c.e[c.g.Compact]) {
						const o = Object(S.a)(R, a.tb, y, e.queryParams);
						s().pages.profileOverview.chrono.ids[o] ? C = !0 : x.push(t(Se(o, R, T, !0)))
					} else {
						const o = Object(S.a)(R, a.ub, y, e.queryParams);
						s().listings.postOrder.ids[o] && !s().listings.postOrder.api.error[o] ? C = !0 : x.push(t(_e(o, R, T, !0)))
					}
					if (x.push(t(Object(r.b)())), await Promise.all(x), C) return;
					const A = s();
					if (!A.platform.currentPage) return;
					if (200 !== A.platform.currentPage.status) return;
					const F = Object(b.m)(s(), R),
						P = Object(f.mb)(A, {
							userName: g
						}).id;
					t(j.m({
						title: Te(s(), g)
					})), Object(f.L)(A) && Object(f.P)(A, g) && t(Object(h.f)());
					const L = [t(Object(d.q)()), t(I.b(R, F)), t(k.b(R)), t(w.o(g)), t(k.g(g)), t(O.l(g, P))];
					await Promise.all(L)
				}, Te = (e, t) => Object(b.q)(e, {
					profileName: t
				})
		},
		"./src/reddit/endpoints/page/profileOverviewPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return u
			}));
			var o = s("./src/config.ts"),
				i = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				r = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				l = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				a = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const c = (e, t, s) => Object(n.a)(e, {
					data: s,
					endpoint: Object(d.a)(Object(i.a)(Object(l.a)(Object(a.a)(`${o.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
					traceRequestName: "get_profile_conversations",
					method: r.jb.GET
				}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
					...e,
					body: {
						...e.body,
						pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
					}
				} : e),
				u = (e, t, s) => Object(n.a)(e, {
					data: s,
					endpoint: Object(d.a)(Object(i.a)(Object(a.a)(`${o.a.gatewayUrl}/desktopapi/v1/user/${t}/overview`))),
					method: r.jb.GET
				}).then(e => "pinned" in e.body ? e : "overviewIds" in e.body ? {
					...e,
					body: {
						...e.body,
						pinned: e.body.overviewIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
					}
				} : e)
		},
		"./src/reddit/reducers/pages/followers/index.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/redux/es/redux.js"),
				i = s("./src/reddit/actions/pages/followers/constants.ts");
			var r = (e = !1, t) => {
					switch (t.type) {
						case i.b:
						case i.e:
						case i.a:
						case i.c:
							return !1;
						case i.d:
							return !0;
						default:
							return e
					}
				},
				n = Object(o.c)({
					pending: r
				});
			const d = {};
			var l = (e = d, t) => {
				switch (t.type) {
					case i.b:
					case i.a:
					case i.e: {
						const {
							followers: s
						} = t.payload;
						return {
							...e,
							...s
						}
					}
					case i.f: {
						const {
							userId: s,
							isFollowed: o
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								isFollowed: o
							}
						}
					}
					default:
						return e
				}
			};
			var a = (e = null, t) => {
				switch (t.type) {
					case i.a:
					case i.b: {
						const {
							pageInfo: s
						} = t.payload;
						return s || e
					}
					default:
						return e
				}
			};
			const c = {};
			var u = (e = c, t) => {
				switch (t.type) {
					case i.e: {
						const {
							followers: s
						} = t.payload;
						return s || e
					}
					default:
						return e
				}
			};
			const p = [];
			var m = (e = p, t) => {
				switch (t.type) {
					case i.b: {
						const {
							followerUserIds: s
						} = t.payload;
						return s || e
					}
					case i.a: {
						const {
							followerUserIds: s
						} = t.payload;
						return s ? [...e, ...s] : e
					}
					default:
						return e
				}
			};
			t.a = Object(o.c)({
				api: n,
				models: l,
				pageInfo: a,
				search: u,
				userIds: m
			})
		},
		"./src/reddit/selectors/followers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return a
			}));
			var o = s("./src/lib/initializeClient/installReducer.ts"),
				i = s("./src/reddit/reducers/pages/followers/index.ts");
			Object(o.a)({
				pages: {
					followers: i.a
				}
			});
			const r = e => {
					var t, s;
					return null === (s = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === s ? void 0 : s.userIds
				},
				n = (e, t) => {
					var s;
					return null === (s = (e => {
						var t, s;
						return null === (s = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === s ? void 0 : s.models
					})(e)) || void 0 === s ? void 0 : s[t]
				},
				d = e => {
					var t, s;
					return null === (s = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === s ? void 0 : s.search
				},
				l = e => {
					var t, s;
					return null === (s = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === s ? void 0 : s.api.pending
				},
				a = e => {
					var t, s;
					return null === (s = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === s ? void 0 : s.pageInfo
				}
		},
		"./src/reddit/selectors/profileOverviewChronoItems.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return c
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "h", (function() {
				return b
			})), s.d(t, "g", (function() {
				return y
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "c", (function() {
				return g
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/models/Flair/index.ts"),
				r = s("./src/reddit/models/PostCreationForm/index.ts"),
				n = s("./src/reddit/models/Vote/index.ts");
			const d = {
				t3_1: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "that_one_guy",
					authorId: "t2_1234",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_1",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_1",
						type: "subreddit"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "i.redd.it",
					events: [],
					flair: [],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isStickied: !1,
					liveCommentsWebsocket: "wss://reddit.com/live/1",
					media: {
						type: "image",
						content: "https://i.redd.it/iap6jbwjlosy.jpg",
						width: 100,
						height: 100,
						obfuscated: null,
						resolutions: []
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_1",
					removedBy: null,
					removedByCategory: null,
					score: 23,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "A plain post",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 0
				},
				t3_2: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "that_other_chick",
					authorId: "t2_1235",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_2",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_100",
						type: "profile"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "i.redd.it",
					events: [],
					flair: [],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isStickied: !1,
					liveCommentsWebsocket: "wss://reddit.com/live/2",
					media: {
						content: "https://i.redd.it/d43skac7fqsy.jpg",
						type: "image",
						width: 100,
						height: 100,
						obfuscated: null,
						resolutions: []
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_2",
					removedBy: null,
					removedByCategory: null,
					score: 23,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "Another not so plain post here.",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 1
				},
				t3_3: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "person_number_three",
					authorId: "t2_1236",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_3",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_1",
						type: "subreddit"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "i.redd.it",
					events: [],
					flair: [],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isStickied: !1,
					liveCommentsWebsocket: "wss://reddit.com/live/3",
					media: {
						content: "https://i.redd.it/d43skac7fqsy.jpg",
						type: "image",
						width: 100,
						height: 100,
						obfuscated: null,
						resolutions: []
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_3",
					removedBy: null,
					removedByCategory: null,
					score: 23,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "Another plain post here.",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 1
				},
				t3_4: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "this_user_is_the_best",
					authorId: "t2_1237",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_4",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_100",
						type: "profile"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "i.redditmedia.com",
					events: [],
					flair: [{
						type: i.f.Text,
						text: "hello world"
					}, {
						type: i.f.Spoiler,
						text: "spoiler"
					}],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isStickied: !1,
					liveCommentsWebsocket: "wss://reddit.com/live/4",
					media: null,
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_4",
					removedBy: null,
					removedByCategory: null,
					score: 300,
					isScoreHidden: !1,
					sendReplies: !1,
					source: {
						displayText: "foobar.com",
						url: "http://foobar.com",
						outboundUrl: "http://foobar.com/foobar"
					},
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "Hello world one two three four five six seven eight. See? I can count!",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 0
				},
				t3_5: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "yet_another_cool_dude",
					authorId: "t2_1238",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_5",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_1",
						type: "subreddit"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "self.listentothis",
					events: [],
					flair: [{
						type: i.f.Text,
						text: "hello world"
					}, {
						type: i.f.Spoiler,
						text: "spoiler"
					}],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isStickied: !1,
					liveCommentsWebsocket: "wss://reddit.com/live/5",
					media: {
						type: "text",
						rteMode: r.i.RICH_TEXT,
						markdownContent: "",
						content: "",
						obfuscated: null
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_5",
					removedBy: null,
					removedByCategory: null,
					score: 300,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "This is an interesting post title",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 0
				},
				t3_6: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "spez",
					authorId: "t2_1239",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_6",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_100",
						type: "profile"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "self.listentothis",
					events: [],
					flair: [{
						type: i.f.Text,
						text: "hello world"
					}, {
						type: i.f.Spoiler,
						text: "spoiler"
					}],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isStickied: !1,
					liveCommentsWebsocket: "wss://reddit.com/live/6",
					media: {
						type: "text",
						rteMode: r.i.RICH_TEXT,
						markdownContent: "",
						content: "",
						obfuscated: null
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_6",
					removedBy: null,
					removedByCategory: null,
					score: 300,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "This is an extremely interesting post title",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 0
				},
				abc12345: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "spez",
					authorId: "t2_1240",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_6",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_100",
						type: "profile"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "i.redditmedia.com",
					events: [{
						type: 1,
						url: "https://www.reddit.com/i.gif"
					}],
					flair: [{
						type: i.f.Text,
						text: "hello world"
					}, {
						type: i.f.Spoiler,
						text: "spoiler"
					}],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !0,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isStickied: !1,
					liveCommentsWebsocket: "wss://reddit.com/live/6",
					media: {
						type: "text",
						rteMode: r.i.RICH_TEXT,
						markdownContent: "",
						content: "",
						obfuscated: null
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_3",
					removedBy: null,
					removedByCategory: null,
					score: 300,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "This is an extremely interesting post title",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 0
				}
			};
			l = {
				authorIsBlocked: !0,
				media: {
					type: "text",
					rteMode: r.i.RICH_TEXT,
					markdownContent: "",
					content: "This is content in a post.",
					obfuscated: null
				}
			}, n.a.notVoted;
			var l;
			var a = s("./src/reddit/helpers/isComment.ts");
			const c = Object(o.a)((e, {
					listingKey: t
				}) => {
					const s = e.posts.models;
					return u(e, {
						listingKey: t
					}).filter(e => {
						if (Object(a.a)(e)) return !0; {
							const t = s[e];
							return t && !t.hidden
						}
					})
				}),
				u = Object(o.a)((e, {
					listingKey: t
				}) => {
					const s = e.pages.profileOverview.chrono.ids[t];
					return s ? [...s] : []
				}),
				p = Object(o.a)((e, {
					listingKey: t
				}) => {
					return c(e, {
						listingKey: t
					}).reduce((t, s) => {
						const o = Object(a.a)(s) ? e.features.comments.models[s].postId : s;
						return t[s] = o, t
					}, {})
				}),
				m = (Object(o.a)((e, {
					listingKey: t
				}) => {
					const s = e.posts.models;
					return m(e, {
						listingKey: t
					}).filter(e => {
						const t = s[e];
						return t && !t.hidden
					})
				}), Object(o.a)((e, {
					listingKey: t
				}) => {
					return c(e, {
						listingKey: t
					}).map(t => Object(a.a)(t) ? e.features.comments.models[t].postId : t)
				})),
				b = Object(o.a)((e, {
					listingKey: t
				}) => {
					const s = e.posts.models,
						o = m(e, {
							listingKey: t
						}),
						i = {};
					return o.forEach(e => i[e] = s[e]), i
				}),
				y = Object(o.a)((e, {
					listingKey: t
				}) => {
					const s = e.features.comments.models,
						o = c(e, {
							listingKey: t
						}),
						i = {};
					return o.forEach(e => !!Object(a.a)(e) && (i[e] = s[e])), i
				}),
				f = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.api.error[t],
				v = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.api.pending[t],
				h = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.loadMore[t],
				g = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.fetchedTokens[t]
		},
		"./src/redditGQL/operations/ProfileFollowers.json": function(e) {
			e.exports = JSON.parse('{"id":"fe780a440dbd"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileFollowersAction.5024552423e3b26b7ca0.js.map