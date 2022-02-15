// https://www.redditstatic.com/desktop2x/ProfileFollowersPage.c151cc1df115a89311d7.js
// Retrieved at 2/15/2022, 12:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileFollowersPage", "ProfileFollowersAction"], {
		"./node_modules/lodash/take.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseSlice.js"),
				s = r("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, r) {
				return e && e.length ? (t = r || void 0 === t ? 1 : s(t), n(e, 0, t < 0 ? 0 : t)) : []
			}
		},
		"./src/lib/makeOverviewConversationsItemKey/index.ts": function(e, t, r) {
			"use strict";
			t.a = (e, t) => {
				return `overviewConversations--[profile:'${t}']--[post:'${e}']`
			}
		},
		"./src/reddit/actions/inContextModeration.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return i
			}));
			var n = r("./src/lib/makeActionCreator/index.ts");
			const s = "INCONTEXT__BANNED",
				a = "INCONTEXT__MUTED",
				o = Object(n.a)(s),
				i = Object(n.a)(a)
		},
		"./src/reddit/actions/pages/followers/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "f", (function() {
				return d
			}));
			const n = "PROFILE_FOLLOWERS_PAGE_LOADED",
				s = "MORE_PROFILE_FOLLOWERS_LOADED",
				a = "PROFILE_FOLLOWERS_SEARCH_LOADED",
				o = "PROFILE_FOLLOWERS_REQUEST_PENDING",
				i = "PROFILE_FOLLOWERS_REQUEST_FAILED",
				d = "FOLLOW_USER_SUCCESS"
		},
		"./src/reddit/actions/pages/followers/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "profileFollowersPageLoaded", (function() {
				return x
			})), r.d(t, "moreProfileFollowersLoaded", (function() {
				return v
			})), r.d(t, "profileFollowersSearchLoaded", (function() {
				return h
			})), r.d(t, "profileFollowersRequestPending", (function() {
				return g
			})), r.d(t, "profileFollowersPageFailed", (function() {
				return _
			})), r.d(t, "DEFAULT_VARIABLES", (function() {
				return y
			})), r.d(t, "followersPageRequested", (function() {
				return E
			})), r.d(t, "followersRequested", (function() {
				return I
			})), r.d(t, "followUserToggled", (function() {
				return C
			})), r.d(t, "toggleFollowUser", (function() {
				return j
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				o = (r("./src/reddit/actions/pages/profileOverview/index.ts"), r("./src/reddit/actions/toaster.ts")),
				i = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/redditGQL/operations/ProfileFollowers.json");
			var c = r("./src/reddit/endpoints/subreddit/subscriptions.ts");
			var l = e => {
					var t, r;
					if (!e.identity || !e.identity.followedByRedditorsInfo) return;
					const n = {},
						{
							followedByRedditorsInfo: s,
							redditor: a
						} = e.identity,
						{
							moderatedSubreddits: o
						} = a,
						{
							edges: i,
							pageInfo: d
						} = s;
					if (!i) return;
					n.pageInfo = {
						...d,
						endCursor: null !== (t = d.endCursor) && void 0 !== t ? t : null
					};
					const c = [],
						l = {};
					for (const u of i)
						if ("Redditor" === (null === (r = null == u ? void 0 : u.node) || void 0 === r ? void 0 : r.__typename)) {
							const {
								id: e
							} = u.node;
							c.push(e), l[e] = u.node
						} return n.followerUserIds = c, n.followers = l, n
				},
				u = r("./src/reddit/models/Toast/index.ts"),
				m = r("./src/reddit/actions/pages/followers/constants.ts"),
				p = r("./src/lib/initializeClient/installReducer.ts"),
				b = r("./src/reddit/reducers/pages/followers/index.ts"),
				f = r("./src/reddit/selectors/followers.ts");
			Object(p.a)({
				pages: {
					followers: b.a
				}
			});
			const x = Object(a.a)(m.b),
				v = Object(a.a)(m.a),
				h = Object(a.a)(m.e),
				g = Object(a.a)(m.d),
				_ = Object(a.a)(m.c),
				y = {
					includeIdentity: !1,
					first: null,
					after: null,
					searchQuery: null
				},
				E = e => async (e, t, {
					gqlContext: r
				}) => {
					var n;
					const s = [];
					(null === (n = Object(f.a)(t())) || void 0 === n ? void 0 : n.length) || s.push(e(I(y))), await Promise.all(s)
				}, I = e => async (t, r, {
					gqlContext: n
				}) => {
					const s = !r().user.account,
						a = {
							...y,
							...e,
							includeIdentity: s
						};
					t(g());
					const c = await (async (e, t) => {
						return await Object(i.a)(e, {
							...d,
							variables: t
						})
					})(n(), a);
					if (c.ok && c.body) {
						const {
							data: r
						} = c.body, n = l(r);
						if (!n) return t(Object(o.d)()), void t(_());
						(null == e ? void 0 : e.searchQuery) ? t(h(n)): (null == e ? void 0 : e.after) ? t(v(n)) : (null == e ? void 0 : e.after) || (null == e ? void 0 : e.searchQuery) || t(x(n))
					}
					c.ok || (t(Object(o.d)()), t(_()))
				}, C = Object(a.a)(m.f), j = (e, t) => async (r, a, {
					apiContext: i
				}) => {
					var d, l;
					const m = null === (l = null === (d = a().pages) || void 0 === d ? void 0 : d.followers) || void 0 === l ? void 0 : l.models[e];
					if (!m) return;
					r(C({
						userId: e,
						isFollowed: t
					}));
					const p = m.name;
					if ((await Object(c.c)(i(), {
							subredditNames: [`${s.jc}${m.name}`],
							subscribe: t
						})).ok) {
						r(C({
							userId: e,
							isFollowed: t
						}));
						const s = n.fbt._("Sucсessfully followed {userName}", [n.fbt._param("userName", p)], {
								hk: "1AYBqL"
							}),
							a = n.fbt._("Sucсessfully unfollowed {userName}", [n.fbt._param("userName", p)], {
								hk: "4F2yCK"
							});
						r(Object(o.f)({
							text: t ? s : a
						}))
					} else {
						const s = n.fbt._("Something went wrong", null, {
							hk: "3i6szH"
						});
						r(C({
							userId: e,
							isFollowed: !t
						})), r(Object(o.f)(Object(o.e)(s, u.b.Error)))
					}
				}
		},
		"./src/reddit/actions/pages/profileOverview/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "profileOverviewConversationsPending", (function() {
				return Ce
			})), r.d(t, "profileOverviewConversationsLoaded", (function() {
				return je
			})), r.d(t, "profileOverviewConversationsFailed", (function() {
				return Oe
			})), r.d(t, "profileOverviewChronoPending", (function() {
				return we
			})), r.d(t, "profileOverviewChronoLoaded", (function() {
				return Ne
			})), r.d(t, "profileOverviewChronoFailed", (function() {
				return Pe
			})), r.d(t, "profileOverviewConversationsRequested", (function() {
				return Se
			})), r.d(t, "profileOverviewRequested", (function() {
				return ke
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/pick.js"),
				s = r.n(n),
				a = r("./src/reddit/actions/moderatingSubreddits.ts"),
				o = r("./src/reddit/actions/pages/profileShared.ts"),
				i = r("./src/reddit/actions/subreddit.ts"),
				d = r("./src/config.ts"),
				c = r("./src/lib/addAllowQuarantinedParam/index.ts"),
				l = r("./src/lib/constants/index.ts"),
				u = r("./src/lib/makeApiRequest/index.ts"),
				m = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = r("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				b = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var f = r("./src/reddit/constants/postLayout.ts"),
				x = r("./src/reddit/constants/parameters.ts"),
				v = r("./src/reddit/contexts/PageLayer/index.tsx"),
				h = r("./src/reddit/selectors/listings.ts"),
				g = r("./src/reddit/selectors/profile.ts"),
				_ = r("./src/reddit/selectors/user.ts"),
				y = r("./src/lib/makeActionCreator/index.ts"),
				E = r("./src/reddit/actions/changeUsername.ts"),
				I = r("./src/reddit/actions/contentGate.ts"),
				C = r("./src/reddit/actions/externalAccount.ts"),
				j = r("./src/reddit/actions/gold/powerups.ts"),
				O = r("./src/reddit/actions/pinnedPost.ts"),
				w = r("./src/reddit/actions/platform.ts"),
				N = r("./src/reddit/actions/profile/index.ts"),
				P = r("./src/reddit/actions/trophyCase.ts"),
				S = r("./src/reddit/constants/errors.ts"),
				k = r("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				L = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				F = r("./src/reddit/actions/pages/profileOverview/constants.ts"),
				T = r("./src/lib/initializeClient/installReducer.ts"),
				U = r("./node_modules/redux/es/redux.js"),
				B = r("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const A = {};
			var M = (e = A, t) => {
				switch (t.type) {
					case F.c:
					case F.b:
					case B.c:
					case B.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case F.a:
					case B.a: {
						const {
							key: r,
							error: n
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			const R = {};
			var H = (e = R, t) => {
					switch (t.type) {
						case F.c:
						case B.c: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case F.b:
						case F.a:
						case B.b:
						case B.a: {
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
				D = Object(U.c)({
					error: M,
					pending: H
				});
			const W = {};
			var K = (e = W, t) => {
				switch (t.type) {
					case F.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: {}
						}
					}
					case B.b: {
						const {
							key: r,
							fetchedToken: n
						} = t.payload, s = e[r];
						return {
							...e,
							[r]: {
								...s,
								[n]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const z = {};
			var q = (e = z, t) => {
					switch (t.type) {
						case F.b:
						case B.b: {
							const {
								key: r,
								overviewIds: n
							} = t.payload, s = e[r] || [];
							return {
								...e,
								[r]: [...s, ...n]
							}
						}
						default:
							return e
					}
				},
				G = r("./src/lib/omitKey/index.ts");
			const Q = {};
			var Z = (e = Q, t) => {
					switch (t.type) {
						case F.b:
						case B.b: {
							const {
								key: r,
								dist: n,
								token: s
							} = t.payload;
							return s ? {
								...e,
								[r]: {
									dist: n,
									token: s
								}
							} : Object(G.a)(e, r)
						}
						default:
							return e
					}
				},
				Y = Object(U.c)({
					api: D,
					fetchedTokens: K,
					ids: q,
					loadMore: Z
				});
			const X = {};
			var V = (e = X, t) => {
				switch (t.type) {
					case F.f:
					case F.e: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case F.d: {
						const {
							key: r,
							error: n
						} = t.payload;
						return {
							...e,
							[r]: n || {}
						}
					}
					default:
						return e
				}
			};
			const J = {};
			var $ = (e = J, t) => {
					switch (t.type) {
						case F.f: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case F.e:
						case F.d: {
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
				ee = Object(U.c)({
					error: V,
					pending: $
				}),
				te = r("./src/reddit/actions/profileConversations.ts");
			const re = {};
			var ne = (e = re, t) => {
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
							error: n
						} = t.payload;
						return {
							...e,
							[r]: n || {}
						}
					}
					default:
						return e
				}
			};
			const se = {};
			var ae = (e = se, t) => {
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
				oe = Object(U.c)({
					error: ne,
					pending: ae
				});
			const ie = {};
			var de = (e = ie, t) => {
					switch (t.type) {
						case F.e:
						case te.b:
						case te.e:
							return {
								...e, ...t.payload.extraComments
							};
						default:
							return e
					}
				},
				ce = Object(U.c)({
					api: oe,
					models: de
				}),
				le = r("./node_modules/lodash/mapValues.js"),
				ue = r.n(le),
				me = r("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				pe = r("./src/reddit/constants/comments.ts");
			const be = {};

			function fe(e) {
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
			const xe = (e, t, r) => {
				const n = {};
				for (const s in t) {
					const e = t[s],
						r = e.postId;
					n.hasOwnProperty(r) ? n[r] = {
						...n[r],
						[s]: e
					} : n[r] = {
						[s]: e
					}
				}
				for (const s in r) {
					const e = r[s],
						t = e.postId;
					n.hasOwnProperty(t) ? n[t] = {
						...n[t],
						[s]: e
					} : n[t] = {
						[t]: e
					}
				}
				return n
			};
			var ve = (e = be, t) => {
				switch (t.type) {
					case F.e:
					case te.e: {
						const {
							comments: r,
							extraComments: n,
							postIds: s,
							profileName: a
						} = t.payload, o = xe(s, r, n), i = {};
						for (const e of s) {
							i[Object(me.a)(e, a)] = o.hasOwnProperty(e) ? fe(o[e]) : {}
						}
						return {
							...e,
							...i
						}
					}
					case te.b: {
						const {
							comments: r,
							commentLists: n,
							extraComments: s,
							extraCommentsId: a,
							postIds: o,
							profileName: i
						} = t.payload;
						if (0 === o.length) {
							const t = Object.keys(e).find(t => void 0 !== e[t][a]);
							if (!t) return e;
							const r = {
									...e[t]
								} [a].prev,
								n = r && r.id || "";
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
						const d = o[0],
							c = fe(xe(o, r, s)[d]),
							l = Object(me.a)(d, i),
							u = {
								...e[l]
							},
							m = u[a].prev,
							p = m && m.id || "",
							b = n[d].head,
							f = b && b.id || "",
							x = {
								id: f,
								type: pe.a.Comment
							},
							v = {
								...u,
								[p]: {
									...u[p],
									next: x
								},
								...c,
								[f]: {
									...c[f],
									prev: m
								}
							};
						return {
							...e,
							[l]: v
						}
					}
					default:
						return e
				}
			};
			const he = {};
			var ge = (e = he, t) => {
				switch (t.type) {
					case F.e:
					case te.e: {
						const {
							commentLists: r,
							postIds: n,
							profileName: s
						} = t.payload, a = {};
						for (const e of n) {
							a[Object(me.a)(e, s)] = r[e] && r[e].head ? r[e].head.id : null
						}
						return {
							...e,
							...a
						}
					}
					default:
						return e
				}
			};
			const _e = {};
			var ye = (e = _e, t) => {
					switch (t.type) {
						case F.e:
						case te.e: {
							const {
								postIds: r,
								profileName: n
							} = t.payload, s = {};
							for (const e of r) {
								s[Object(me.a)(e, n)] = e
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
				Ee = Object(U.c)({
					api: ee,
					extraComments: ce,
					keyToCommentThreadLinkSets: ve,
					keyToHeadCommentId: ge,
					keyToPostId: ye
				}),
				Ie = Object(U.c)({
					chrono: Y,
					conversations: Ee
				});
			Object(T.a)({
				pages: {
					profileOverview: Ie
				}
			});
			const Ce = Object(y.a)(F.f),
				je = Object(y.a)(F.e),
				Oe = Object(y.a)(F.d),
				we = Object(y.a)(F.c),
				Ne = Object(y.a)(F.b),
				Pe = Object(y.a)(F.a),
				Se = (e, t, r, n) => async (n, s, a) => {
					const o = s(),
						i = !!o.listings.postOrder.ids[e],
						f = !!Object(h.c)(o, {
							listingKey: e
						});
					if (!!Object(h.d)(o, {
							listingKey: e
						}) || i && !f) return;
					n(Ce({
						key: e
					}));
					const x = await Object(L.a)("profile", () => ((e, t, r) => Object(u.a)(e, {
							data: r,
							endpoint: Object(m.a)(Object(c.a)(Object(p.a)(Object(b.a)(`${d.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
							traceRequestName: "get_profile_conversations",
							method: l.jb.GET
						}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
							...e,
							body: {
								...e.body,
								pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
							}
						} : e))(a.apiContext(), t, r)),
						v = x.body,
						{
							pinned: _,
							postIds: y
						} = v;
					if (x.ok) {
						n(je({
							key: e,
							meta: o.meta,
							profileName: t,
							...v,
							postIds: y
						}));
						const r = Object(g.m)(s(), t);
						n(Object(O.h)({
							profileId: r,
							pinned: _
						}))
					} else n(Oe({
						account: x.body.data ? x.body.data.account : null,
						error: x.body.reason ? {
							type: x.body.reason
						} : x.error,
						key: e
					})), x.body.reason === S.a.DeletedProfile && n(Object(I.q)({
						profileName: t
					})), n(Object(w.n)(x.status))
				}, ke = e => async (t, r, n) => {
					const {
						queryParams: d,
						params: c
					} = e, {
						sort: u,
						t: m
					} = Object(o.a)(r(), d), {
						profileName: p
					} = c;
					let b = !1;
					const h = f.e[Object(v.R)(r(), {})],
						y = p.toLowerCase(),
						I = {
							...s()(e.queryParams, x.m),
							sort: u,
							layout: h,
							t: m
						},
						O = [t(N.d(y))],
						S = Object(k.a)(y, l.ub, u, e.queryParams);
					if (r().listings.postOrder.ids[S] && !r().listings.postOrder.api.error[S] ? b = !0 : O.push(t(Se(S, y, I, !0))), O.push(t(Object(a.b)())), await Promise.all(O), b) return;
					const L = r();
					if (!L.platform.currentPage) return;
					if (200 !== L.platform.currentPage.status) return;
					const F = Object(g.m)(r(), y),
						T = Object(_.sb)(L, {
							userName: p
						}).id;
					t(w.m({
						title: Le(r(), p)
					})), Object(_.M)(L) && Object(_.Q)(L, p) && t(Object(E.f)());
					const U = [t(Object(i.q)()), t(P.b(y, F)), t(N.b(y)), t(C.o(p)), t(N.g(p)), t(j.l(p, T))];
					await Promise.all(U)
				}, Le = (e, t) => Object(g.q)(e, {
					profileName: t
				})
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return $
			})), r.d(t, "d", (function() {
				return ne
			})), r.d(t, "b", (function() {
				return oe
			})), r.d(t, "e", (function() {
				return ie
			})), r.d(t, "a", (function() {
				return de
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/get.js"),
				a = r.n(s),
				o = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/apiRequestState.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/actions/subreddit.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/constants/modals.ts"),
				m = r("./src/lib/constants/index.ts"),
				p = r("./src/lib/makeApiRequest/index.ts"),
				b = r("./src/lib/omitHeaders/index.ts"),
				f = r("./src/reddit/constants/headers.ts"),
				x = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				v = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const h = (e, t, r) => Object(p.a)(Object(b.a)(e, [f.a]), {
				endpoint: Object(x.a)(Object(v.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: m.jb.GET,
				data: r
			});
			var g = r("./src/reddit/helpers/normalizeUsername/index.tsx"),
				_ = r("./src/reddit/models/SubredditModeration/index.ts"),
				y = r("./src/reddit/models/Toast/index.ts"),
				E = r("./src/reddit/selectors/activeModalId.ts"),
				I = r("./src/reddit/selectors/bannedUser.ts"),
				C = r("./src/reddit/selectors/subreddit.ts"),
				j = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/actions/subredditModeration/constants.ts"),
				w = r("./src/lib/initializeClient/installReducer.ts"),
				N = r("./node_modules/redux/es/redux.js");
			var P = (e = null, t) => {
				switch (t.type) {
					case O.o:
					case O.n:
						return null;
					case O.m:
						return t.payload;
					default:
						return e
				}
			};
			const S = {};
			var k = (e = S, t) => {
					switch (t.type) {
						case O.o: {
							const {
								subredditId: r,
								fetchedToken: n
							} = t.payload, s = Object(_.e)(r, n);
							return {
								...e,
								[s]: !0
							}
						}
						case O.n:
						case O.m: {
							const {
								subredditId: r,
								fetchedToken: n
							} = t.payload, s = Object(_.e)(r, n);
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				L = Object(N.c)({
					error: P,
					pending: k
				});
			const F = {};
			var T = (e = F, t) => {
					switch (t.type) {
						case O.n: {
							const {
								fetchedToken: r,
								subredditId: n
							} = t.payload, s = Object(_.e)(n, r);
							return {
								...e,
								[s]: !0
							}
						}
						default:
							return e
					}
				},
				U = r("./src/reddit/actions/inContextModeration.ts");
			var B = (e = null, t) => {
				switch (t.type) {
					case U.a:
						return t.payload;
					default:
						return e
				}
			};
			const A = {};
			var M = (e = A, t) => {
					switch (t.type) {
						case O.n: {
							const {
								subredditId: e,
								after: r
							} = t.payload;
							return {
								[e]: r
							}
						}
						default:
							return e
					}
				},
				R = r("./node_modules/icepick/icepick.js");
			const H = {};
			var D = (e = H, t) => {
				switch (t.type) {
					case O.l:
					case O.n: {
						const {
							subredditId: r,
							bannedUsers: n
						} = t.payload;
						return Object(R.merge)(e, {
							[r]: n
						})
					}
					case O.s: {
						const {
							subredditId: r,
							userId: n
						} = t.payload;
						return Object(R.unsetIn)(e, [r, n])
					}
					default:
						return e
				}
			};
			var W = (e = null, t) => {
				switch (t.type) {
					case O.r:
					case O.q:
						return null;
					case O.p:
						return t.payload;
					default:
						return e
				}
			};
			var K = (e = !1, t) => {
					switch (t.type) {
						case O.r:
							return !0;
						case O.q:
						case O.p:
							return !1;
						default:
							return e
					}
				},
				z = Object(N.c)({
					error: W,
					pending: K
				});
			var q = (e = null, t) => {
					switch (t.type) {
						case O.r:
						case O.p:
							return null;
						case O.q: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				G = Object(N.c)({
					api: z,
					result: q
				});
			const Q = {};
			var Z = (e = Q, t) => {
					switch (t.type) {
						case O.n: {
							const {
								subredditId: r,
								bannedUserIds: n
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: [...e[r], ...n]
							} : {
								...e,
								[r]: n
							}
						}
						case O.s: {
							const {
								subredditId: r,
								userId: n
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== n)
							}
						}
						case O.l: {
							const {
								subredditId: r,
								bannedUserIds: n
							} = t.payload, s = n[0];
							return s && e[r] && -1 === e[r].indexOf(s) ? {
								[r]: [s, ...e[r]]
							} : e
						}
						default:
							return e
					}
				},
				Y = Object(N.c)({
					api: L,
					fetchedTokens: T,
					inContext: B,
					loadMore: M,
					models: D,
					search: G,
					userOrder: Z
				});
			Object(w.a)({
				features: {
					banned: Y
				}
			});
			const X = Object(o.a)(O.o),
				V = Object(o.a)(O.n),
				J = Object(o.a)(O.m),
				$ = (e, t = {}) => async (r, n, {
					apiContext: s
				}) => {
					const a = n(),
						o = t.after || "",
						i = Object(_.e)(e, o),
						d = a.features.banned.fetchedTokens[i];
					if (a.features.banned.api.pending[i] || d) return;
					r(X({
						subredditId: e,
						fetchedToken: o
					}));
					const c = a.subreddits.models[e].name,
						l = await h(s(), c, t);
					l.ok ? r(V({
						...l.body,
						fetchedToken: o
					})) : r(J({
						subredditId: e,
						fetchedToken: o
					}))
				}, ee = Object(o.a)(O.r), te = Object(o.a)(O.q), re = Object(o.a)(O.p), ne = (e, t) => async (r, n, {
					apiContext: s
				}) => {
					const a = n().subreddits.models[e].name,
						o = {
							username: Object(g.a)(t)
						};
					r(ee());
					const i = await h(s(), a, o);
					i.ok ? r(te(i.body)) : r(re(i.error))
				}, se = Object(o.a)(O.l), ae = Object(o.a)(O.s), oe = (e, t, r) => async (s, o, {
					apiContext: d
				}) => {
					const c = o(),
						u = c.subreddits.models[e].url,
						x = c.subreddits.models[e].name;
					t.username = Object(g.a)(t.username), s(Object(i.h)(r));
					const v = await ((e, t, r) => Object(p.a)(Object(b.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: m.jb.POST,
						data: {
							api_type: "json",
							ban_reason: r.reason,
							ban_message: r.banMessage,
							duration: r.duration,
							name: r.username,
							note: r.modNote,
							ban_context: r.contextId,
							type: "banned"
						}
					}))(d(), u, t);
					if (v.ok) {
						s(Object(i.e)(r));
						const e = {
							username: t.username
						};
						s(Object(l.f)({
							kind: y.b.SuccessMod,
							text: n.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const a = await h(d(), x, e);
						a.ok && s(se(a.body))
					} else {
						s(Object(i.f)(r, v.error));
						const e = a()(v, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						s(Object(l.f)({
							kind: y.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ie = (e, t) => async (r, s, {
					apiContext: o
				}) => {
					const i = s().subreddits.models[e].url,
						d = await ((e, t, r) => Object(p.a)(Object(b.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: m.jb.POST,
							data: {
								api_type: "json",
								id: r,
								type: "banned"
							}
						}))(o(), i, t);
					if (d.ok) r(ae({
						subredditId: e,
						userId: t
					})), r(Object(l.f)({
						kind: y.b.SuccessMod,
						text: n.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = a()(d, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(l.f)({
							kind: y.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, de = (e, t) => async (r, n) => {
					const s = n();
					await Promise.all([(async () => {
						if (!Object(E.b)(u.a.BAN_USER)(s) && !Object(C.O)(s, {
								subredditId: e
							})) {
							const t = Object(C.R)(s, {
								subredditId: e
							});
							await r(Object(c.o)(t.name))
						}
					})(), (async () => {
						const n = Object(j.sb)(s, {
							userName: t
						});
						if (!n) return;
						const a = Object(I.h)(s, {
							subredditId: e
						});
						a && a[n.id] || await r($(e, {
							username: t
						}))
					})()]), r(Object(d.i)(u.a.BAN_USER))
				}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var n, s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/actions/chat/toggle.ts"),
				d = r("./src/reddit/components/TrackingHelper/index.tsx"),
				c = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(n || (n = {}));
			const u = ({
				onStartChat: e,
				text: t,
				className: r,
				sendEvent: s,
				contextId: o,
				priority: i,
				Icon: d,
				redditStyle: u,
				isFullWidth: m,
				eventSource: p,
				onClick: b,
				onAddUserToQuickReplyList: f,
				children: x
			}) => {
				return a.a.createElement(c.t, {
					onClick: t => {
						if (b && b(t), e(), p === n.awardNotification) return f();
						s(Object(l.b)(o))
					},
					className: r,
					text: t,
					priority: i,
					Icon: d,
					redditStyle: u,
					isFullWidth: m
				}, x)
			};
			u.displayName = "ChatButton";
			const m = Object(o.b)(null, (e, {
				contextId: t,
				userId: r
			}) => ({
				onStartChat: () => {
					e(Object(i.b)(r, t))
				},
				onAddUserToQuickReplyList: () => {
					e(Object(i.a)(r))
				}
			}));
			t.b = m(Object(d.c)(u))
		},
		"./src/reddit/components/EditableImage/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/EditableImage/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/controls/ImageInput/index.tsx"),
				d = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = r("./src/reddit/icons/fonts/index.tsx"),
				l = r("./src/reddit/models/ApiRequestState/index.ts"),
				u = r("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				m = r("./src/reddit/components/EditableImage/index.m.less"),
				p = r.n(m);
			const {
				fbt: b
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				altText: e,
				children: t,
				className: r,
				isProfileCard: n,
				isLoading: m,
				imageUrl: b,
				onFileSelected: f
			}) => {
				const x = Object(a.e)(u.a);
				return s.a.createElement("div", {
					className: Object(o.a)(p.a.Container, r)
				}, s.a.createElement("label", {
					className: p.a.HitBox
				}, s.a.createElement("span", {
					className: p.a.ImageContainer,
					role: "presentation"
				}, b ? s.a.createElement("img", {
					alt: e,
					className: p.a.Image,
					src: b
				}) : t), s.a.createElement(i.a, {
					className: p.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(l.b)();
						f(e, t)
					},
					isPending: x ? m : void 0
				}), !m && s.a.createElement("div", {
					className: Object(o.a)(p.a.EditButton, {
						[p.a.profileCard]: n
					})
				}, s.a.createElement(c.a, {
					name: "add_media",
					className: p.a.EditIcon
				}))), m && s.a.createElement(d.a, {
					className: p.a.LoadingIcon,
					sizePx: 80
				}))
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/actions/snoovatarModal.ts"),
				d = r("./src/reddit/actions/tooltip.ts"),
				c = r("./src/reddit/selectors/gold/awardIcon.ts"),
				l = r("./src/reddit/selectors/meta.ts"),
				u = r("./src/reddit/selectors/moderatorPermissions.ts"),
				m = r("./src/reddit/selectors/profile.ts"),
				p = r("./src/reddit/selectors/structuredStyles.ts"),
				b = r("./src/reddit/selectors/subreddit.ts"),
				f = r("./src/reddit/selectors/tooltip.ts"),
				x = r("./src/reddit/selectors/user.ts"),
				v = r("./src/reddit/selectors/userFlair.ts"),
				h = r("./src/reddit/selectors/userPrefs.ts"),
				g = r("./node_modules/fbt/lib/FbtPublic.js"),
				_ = r("./src/config.ts"),
				y = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				E = r("./src/lib/lessComponent.tsx"),
				I = r("./src/lib/prettyPrintNumber/index.ts"),
				C = r("./src/reddit/components/ChatButton/index.tsx"),
				j = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				O = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				w = r("./src/reddit/components/SubscribeButton/index.tsx"),
				N = r("./src/reddit/components/UserIcon/index.tsx"),
				P = r("./src/reddit/endpoints/profile/info.ts"),
				S = r("./src/reddit/helpers/trackers/authorHovercard.ts"),
				k = r("./src/reddit/icons/fonts/Info/index.tsx"),
				L = r("./src/reddit/icons/svgs/Admin/index.tsx");
			var F = e => s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("g", null, s.a.createElement("path", {
					d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
				}))),
				T = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				U = r("./src/reddit/models/Gold/Award.ts"),
				B = r("./src/reddit/models/User/index.ts"),
				A = r("./src/reddit/components/HumanDate/index.tsx"),
				M = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				R = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				H = r("./src/reddit/actions/inContextModeration.ts"),
				D = r("./src/reddit/actions/modal.ts"),
				W = r("./src/reddit/actions/subredditModeration/ban.ts"),
				K = r("./src/reddit/constants/modals.ts"),
				z = r("./src/reddit/components/Hovercards/helpers.ts"),
				q = r("./src/reddit/icons/fonts/index.tsx"),
				G = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Q = r("./src/reddit/selectors/bannedUser.ts"),
				Z = r("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				Y = r.n(Z);
			const {
				fbt: X
			} = r("./node_modules/fbt/lib/FbtPublic.js"), V = Object(o.c)({
				hasModMailPermissions: Object(u.b)(G.c.mail),
				isUserBanned: (e, t) => !!Object(Q.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(x.sb)(e, {
					userName: t.username
				})
			});
			class J extends s.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: r,
						isUserBanned: n,
						onUnbanUser: a,
						sendEvent: o,
						toggleBanModal: i,
						toggleMuteModal: d
					} = this.props;
					return s.a.createElement("div", {
						className: e
					}, n ? s.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							a(this.props.user.id), o(S.e(t))
						}
					}, s.a.createElement(q.a, {
						name: "ban",
						isFilled: !0,
						className: Y.a.icon
					}), X._("Unban User", null, {
						hk: "1aASyW"
					})) : s.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							i(), o(S.a(t))
						}
					}, s.a.createElement(q.a, {
						name: "ban",
						className: Y.a.icon
					}), X._("Ban User", null, {
						hk: "3OhuLx"
					})), r && s.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							d(), o(S.d(t))
						}
					}, s.a.createElement(q.a, {
						name: "mod_mute",
						className: Y.a.icon
					}), X._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var $ = Object(a.b)(V, (e, {
					username: t,
					subredditId: r,
					contextId: n
				}) => ({
					onUnbanUser: t => e(Object(W.e)(r, t)),
					requestUserBanInfo: () => e(Object(W.c)(r, {
						username: t
					})),
					toggleBanModal: () => {
						e(Object(H.c)({
							username: t,
							subredditId: r,
							contextId: n
						})), e(Object(W.a)(r, t))
					},
					toggleMuteModal: () => {
						e(Object(H.d)({
							username: t,
							subredditId: r,
							contextId: n
						})), e(Object(D.i)(K.a.MUTE_USER))
					}
				}))(J),
				ee = r("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: te
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var re = Object(a.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(ee.g)(t.subredditId, t.username))
				}))(e => s.a.createElement(z.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(S.c(e.contextId))
					}
				}, s.a.createElement(q.a, {
					name: "tag",
					className: Y.a.icon
				}), te._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				ne = r("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				se = r.n(ne);

			function ae() {
				return (ae = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const oe = E.a.wrapped(N.a, "UserIcon", se.a),
				ie = E.a.wrapped(w.a, "SubscribeButton", se.a),
				de = E.a.wrapped(C.b, "ChatButton", se.a),
				ce = E.a.wrapped(F, "KarmaIcon", se.a),
				le = E.a.wrapped(T.a, "PremiumIcon", se.a),
				ue = E.a.wrapped(y.a, "UserNameLink", se.a),
				me = E.a.div("UserNameMetaData", se.a),
				pe = E.a.div("MetaDataItem", se.a),
				be = E.a.div("Bullet", se.a),
				fe = E.a.div("UserNameContainer", se.a),
				xe = E.a.div("UserInfoContainer", se.a),
				ve = E.a.div("PostKarma", se.a),
				he = E.a.div("CommentKarma", se.a),
				ge = E.a.div("KarmaGrid", se.a),
				_e = E.a.div("GenericKarma", se.a),
				ye = E.a.a("InfoLink", se.a),
				Ee = E.a.div("KarmaCount", se.a),
				Ie = E.a.div("KarmaLabel", se.a),
				Ce = E.a.div("GenericKarmaLabel", se.a),
				je = E.a.div("BannerImage", se.a),
				Oe = E.a.div("UserContainer", se.a),
				we = E.a.div("BottomSpacer", se.a),
				Ne = E.a.div("Container", se.a),
				Pe = e => s.a.createElement("div", null, s.a.createElement("div", null, s.a.createElement(ue, {
					to: `/user/${e.userName}/`
				}, e.title || e.userName), e.user.isEmployee && s.a.createElement(L.a, {
					className: se.a.adminIcon,
					title: g.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && s.a.createElement(y.a, {
					to: "/premium"
				}, s.a.createElement(le, null))), s.a.createElement(me, null, s.a.createElement(pe, null, `u/${e.userName}`, s.a.createElement(be, null, "•")), s.a.createElement(pe, null, (e.user.createdUtc || e.user.created) && s.a.createElement(A.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				Se = e => {
					const {
						showAwardKarma: t,
						user: {
							karma: r
						}
					} = e, n = {
						...P.a,
						...r
					};
					return t ? s.a.createElement(ge, null, s.a.createElement(_e, null, s.a.createElement(Ee, null, Object(I.b)(n.fromPosts)), s.a.createElement(Ce, null, g.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [g.fbt._plural(n.fromPosts)], {
						hk: "3K4oaH"
					}))), s.a.createElement(_e, null, s.a.createElement(Ee, null, Object(I.b)(n.fromComments)), s.a.createElement(Ce, null, g.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [g.fbt._plural(n.fromComments)], {
						hk: "3gKRx9"
					}))), s.a.createElement(_e, null, s.a.createElement(Ee, null, Object(I.b)(n.fromAwardsReceived)), s.a.createElement(Ce, null, g.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [g.fbt._plural(n.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), s.a.createElement(ye, {
						href: U.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(k.a, {
						className: se.a.infoIcon
					})))), s.a.createElement(_e, null, s.a.createElement(Ee, null, Object(I.b)(n.fromAwardsGiven)), s.a.createElement(Ce, null, g.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [g.fbt._plural(n.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), s.a.createElement(ye, {
						href: U.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(k.a, {
						className: se.a.infoIcon
					}))))) : s.a.createElement(xe, null, s.a.createElement(ce, null), s.a.createElement(ve, null, s.a.createElement(Ee, null, Object(I.b)(n.fromPosts)), s.a.createElement(Ie, null, g.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [g.fbt._plural(n.fromPosts)], {
						hk: "3K4oaH"
					}))), s.a.createElement(he, null, s.a.createElement(Ee, null, Object(I.b)(n.fromComments)), s.a.createElement(Ie, null, g.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [g.fbt._plural(n.fromComments)], {
						hk: "3gKRx9"
					}))))
				},
				ke = e => {
					const {
						className: t,
						contextId: r,
						currentUser: n,
						hideNSFWPref: a,
						hoverId: o,
						isLoggedIn: i,
						onClickSnoovatar: d,
						origin: c,
						moderatorPermissions: l,
						prefersReducedAnimations: u,
						profile: m,
						sendEvent: p,
						showAwardKarma: b,
						style: f,
						subredditId: x,
						topAwardIcon: v,
						userName: h,
						user: y,
						userFlair: E,
						userIsBanned: I,
						userProfileStyles: C,
						acceptChats: O,
						isCommentAuthorBlocked: w
					} = e;
					if (!y) return s.a.createElement(Ne, {
						style: f
					});
					const N = !!n && Object(B.e)(n) === h,
						P = !!(null == n ? void 0 : n.snoovatarFullBodyAsset),
						k = y.accountIcon || `${_.a.assetPath}/img/snoo_user_placeholder.png`,
						L = l && l.flair,
						F = l && l.access,
						T = E && E.templateIds && E.templateIds.length > 0,
						U = E && E.displaySettings && E.displaySettings.isEnabled,
						{
							awardedLastMonth: A
						} = y,
						H = !!y.snoovatarFullBodyAsset,
						D = y.isNSFW && a;
					let W;
					return W = H ? !D && C && C.bannerBackgroundImage || void 0 : D ? `${_.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, s.a.createElement(Ne, {
						className: t,
						id: o,
						style: f
					}, !H && W && s.a.createElement(je, {
						style: {
							backgroundImage: `url('${W}')`
						}
					}), s.a.createElement(Oe, null, H ? s.a.createElement(R.a, {
						isHovercard: !0,
						bannerBackgroundImage: W,
						compact: !0,
						currentUserHasSnoovatar: P,
						isEmployee: y.isEmployee,
						isGold: y.isGold,
						isNSFW: y.isNSFW,
						isOwnProfile: N,
						onClickSnoovatar: d,
						prefersReducedAnimations: !!u,
						snoovatarUrl: y.snoovatarFullBodyAsset,
						title: null == m ? void 0 : m.title,
						userCreated: y.created,
						username: h,
						url: `/user/${e.userName}/`
					}) : s.a.createElement(fe, null, s.a.createElement(oe, {
						iconUrl: k,
						isNSFW: y.isNSFW,
						userName: h
					}), s.a.createElement(Pe, {
						origin: c,
						title: null == m ? void 0 : m.title,
						user: y,
						userName: h
					})), s.a.createElement(Se, {
						showAwardKarma: b,
						user: y
					}), A && s.a.createElement(M.a, {
						recentAwardings: A,
						topAwardIcon: v,
						username: h
					}), i && !N && !I && O && !w && s.a.createElement(de, {
						contextId: r,
						userId: y.id,
						text: g.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), y.hasUserProfile && !I && !w && !N && y.enableFollowers && s.a.createElement(ie, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(S.g)(e ? "unfollow" : "follow", r),
						isFullWidth: !0,
						small: !0
					})), F && r && !N && x && s.a.createElement($, {
						contextId: r,
						subredditId: x,
						sendEvent: p,
						username: h
					}), L && r && T && U && x && s.a.createElement(re, {
						contextId: r,
						subredditId: x,
						sendEvent: p,
						username: h
					}), s.a.createElement(j.i, {
						contextId: r,
						subredditId: x,
						user: y
					}), !(F || i) && s.a.createElement(we, null))
				},
				Le = Object(O.a)(ke),
				Fe = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return s.a.createElement(Le, ae({
						isOpen: t
					}, e))
				};
			Fe.WrappedComponent = ke;
			var Te = Fe;
			const Ue = Object(o.c)({
					activeTooltipId: f.a,
					currentUser: x.k,
					isLoggedIn: x.K,
					hideNSFWPref: x.C,
					moderatorPermissions: (e, {
						subredditId: t
					}) => t ? Object(u.m)(e, {
						subredditId: t
					}) : void 0,
					origin: l.j,
					prefersReducedAnimations: h.c,
					profile: (e, {
						userName: t
					}) => Object(m.j)(e, {
						profileName: t
					}),
					showAwardKarma: (e, t) => {
						return Object(f.a)(e) === t.tooltipId
					},
					topAwardIcon: (e, {
						userName: t
					}) => Object(c.e)(e, {
						userName: t,
						minSize: 32
					}),
					user: x.sb,
					userFlair: (e, {
						subredditId: t
					}) => t ? Object(v.d)(e, {
						subredditId: t
					}) : void 0,
					userIsBanned: (e, t) => !!Object(b.l)(t) && Object(b.cb)(e, t),
					userProfileStyles: (e, t) => Object(p.m)(e, Object(m.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const r = Object(m.h)(e, {
							profileName: t.userName
						});
						return !r || r.acceptChats
					}
				}),
				Be = Object(a.b)(Ue, (e, t) => ({
					onClickSnoovatar: () => e(Object(i.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(d.i)())
				}));
			t.a = Be(e => s.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, s.a.createElement(Te, {
				activeTooltipId: e.activeTooltipId,
				contextId: e.contextId,
				currentUser: e.currentUser,
				isLoggedIn: e.isLoggedIn,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				moderatorPermissions: e.moderatorPermissions,
				onClickSnoovatar: e.onClickSnoovatar,
				onHideTooltip: e.onHideTooltip,
				origin: e.origin,
				prefersReducedAnimations: e.prefersReducedAnimations,
				profile: e.profile,
				sendEvent: e.sendEvent,
				showAwardKarma: e.showAwardKarma,
				subredditId: e.subredditId,
				topAwardIcon: e.topAwardIcon,
				tooltipId: e.tooltipId,
				tooltipType: e.tooltipType,
				user: e.user,
				userFlair: e.userFlair,
				userIsBanned: e.userIsBanned,
				userName: e.userName,
				userProfileStyles: e.userProfileStyles,
				acceptChats: e.acceptChats,
				isCommentAuthorBlocked: e.isCommentAuthorBlocked,
				collapsed: e.collapsed
			})))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less": function(e, t, r) {
			e.exports = {
				icon: "xd9vrdS8_V6IVus6-mHAM"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				o = r("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				i = r("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(i.c)(e => {
				const t = `${e.tooltipId}-hover-id`;
				return s.a.createElement(a.a, {
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
		"./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less": function(e, t, r) {
			e.exports = {
				ChatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				chatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				UserIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				userIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				SubscribeButton: "yFByQg8RzENoqoOt0ysAk",
				subscribeButton: "yFByQg8RzENoqoOt0ysAk",
				KarmaIcon: "_2XmHHGriP3EYLhv_9BG6OT",
				karmaIcon: "_2XmHHGriP3EYLhv_9BG6OT",
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
				UserInfoContainer: "_3l7ptRjFJYo-fcXXajRpqn",
				userInfoContainer: "_3l7ptRjFJYo-fcXXajRpqn",
				PostKarma: "_2T3kavHwxOaL76xfa9id7",
				postKarma: "_2T3kavHwxOaL76xfa9id7",
				CommentKarma: "_1rFYsN1yoSDrDTRfqagI5r",
				commentKarma: "_1rFYsN1yoSDrDTRfqagI5r",
				KarmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				karmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				GenericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				genericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				KarmaCount: "_18aX_pAQub_mu1suz4-i8j",
				karmaCount: "_18aX_pAQub_mu1suz4-i8j",
				KarmaLabel: "_1b2tgHrvjFKgTLyFIQ9B6T",
				karmaLabel: "_1b2tgHrvjFKgTLyFIQ9B6T",
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
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, r) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/layout/row/Inline/index.tsx"),
				a = r("./src/reddit/components/Hovercards/helpers.m.less"),
				o = r.n(a);
			const i = n.a.wrapped(s.a, "UserActionItem", o.a),
				d = e => {
					const {
						author: t,
						itemId: r,
						subredditName: n,
						tooltipIdPrefix: s,
						tooltipType: a
					} = e;
					let o = s;
					return r && (o = `${o}--${r}`), a && (o = `${o}--${a}`), t && (o = `${o}--${t}`), n && (o = `${o}--${n}`), o
				}
		},
		"./src/reddit/components/ModerationPagesEmptyList/index.m.less": function(e, t, r) {
			e.exports = {
				NoResultsContainer: "FIy4e_7DNe0P9cdi_1jVn",
				noResultsContainer: "FIy4e_7DNe0P9cdi_1jVn",
				NoResultsText: "_3V0T64xptTp5xLaY-1nsaz",
				noResultsText: "_3V0T64xptTp5xLaY-1nsaz"
			}
		},
		"./src/reddit/components/ModerationPagesEmptyList/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return l
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/components/ModerationPagesEmptyList/index.m.less"),
				i = r.n(o);
			const d = a.a.div("NoResultsContainer", i.a),
				c = a.a.div("NoResultsText", i.a);

			function l(e) {
				const {
					childrenPosition: t = "top"
				} = e;
				return s.a.createElement(d, {
					className: e.className
				}, "top" === t && e.children, s.a.createElement(c, null, e.text), "bottom" === t && e.children)
			}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/config.ts"),
				o = r("./src/lib/prettyPrintNumber/index.ts"),
				i = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				d = r.n(i);
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class l extends s.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: r
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: n,
						totalCount: i
					} = t, l = n.description ? n.description : n.name;
					return s.a.createElement("a", {
						className: d.a.AwardedLastMonth,
						href: `${a.a.oldRedditUrl}/user/${r}/gilded`
					}, s.a.createElement("div", {
						className: d.a.iconColumn
					}, s.a.createElement("img", {
						alt: l,
						className: d.a.icon,
						src: e
					}), i > 1 && s.a.createElement("span", {
						className: d.a.count
					}, `+${Object(o.b)(i-1)}`)), s.a.createElement("div", {
						className: d.a.textColumn
					}, c._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [c._param("award-name", n.name), c._plural(i)], {
						hk: "16MJHe"
					})))
				}
			}
			t.a = l
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less": function(e, t, r) {
			e.exports = {
				Banner: "_2ZyL7luKQghNeMnczY3gqW",
				banner: "_2ZyL7luKQghNeMnczY3gqW"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./src/reddit/models/Image/index.tsx"),
				i = r("./src/reddit/components/EditableImage/index.tsx"),
				d = r("./src/reddit/models/User/index.ts"),
				c = r("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				u = r.n(l);
			class m extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const r = await Object(o.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(r, "profileBanner"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						bannerUrl: e,
						className: t,
						currentUser: r,
						hideNSFWPref: s,
						isNSFW: o,
						userName: c
					} = this.props, {
						isUpdating: l
					} = this.state, m = e ? a.a.createElement("div", {
						className: u.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return r && Object(d.e)(r) === c ? a.a.createElement(i.a, {
						altText: n.fbt._("{userName} banner image", [n.fbt._param("userName", c)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, m) : o && s ? null : m
				}
			}
			t.a = Object(c.a)(m)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/actions/preferences.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const i = Object(s.c)({
					currentUser: o.k,
					hideNSFWPref: o.C
				}),
				d = Object(n.b)(i, e => ({
					imageUpdateRequested: (t, r) => e(Object(a.C)(t, r))
				}));
			t.a = d
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/react-router/esm/react-router.js"),
				d = r("./src/reddit/actions/post.ts"),
				c = r("./src/reddit/actions/snoovatarModal.ts"),
				l = r("./src/reddit/components/TrackingHelper/index.tsx"),
				u = r("./src/reddit/controls/Button/index.tsx"),
				m = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				b = r("./src/reddit/models/Vote/index.ts"),
				f = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				x = r.n(f);
			const {
				fbt: v
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(i.i)(({
				isHovercard: e,
				username: t,
				isAvatarPost: r,
				post: i,
				share: f
			}) => {
				const h = Object(l.b)(),
					g = Object(o.d)(),
					_ = i && i.id,
					y = i && i.voteState;
				let E = null;
				_ || (E = e ? "user_hovercard" : "profile_overview");
				const I = Object(s.useCallback)(() => h(Object(m.g)(e ? "user_hovercard" : "profile_overview", t)), [e, h, t]);
				return a.a.createElement(u.t, {
					onClick: () => {
						r ? (h(m.h), _ && y === b.a.notVoted && g(Object(d.jb)(_))) : I();
						const e = r ? "postify" : "copy";
						g(Object(c.b)({
							clickSource: E,
							share: f,
							source: e
						}))
					},
					className: Object(n.a)(x.a.snoovatarButton, x.a.snoovatarExtraPadding, x.a.compactButtonLayout, {
						[x.a.avatarPostifyButton]: r
					}),
					isFullWidth: !0
				}, a.a.createElement(p.a, {
					className: Object(n.a)({
						[x.a.shirtIcon]: !r,
						[x.a.avatarPostButtonShirtIcon]: r
					})
				}), v._("Try this Look", null, {
					hk: "dOuPb"
				}), a.a.createElement("div", {
					className: x.a.chevronIcon
				}))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/Button/index.tsx"),
				i = r("./src/reddit/icons/fonts/index.tsx"),
				d = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				c = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				l = r.n(c);
			const {
				fbt: u
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				compact: e,
				currentUserHasSnoovatar: t,
				className: r,
				isOwnProfile: n,
				onClick: c
			}) {
				return s.a.createElement(o.t, {
					onClick: c,
					isFullWidth: !0,
					className: Object(a.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !t && n,
						[l.a.compactButtonLayout]: e
					}, r)
				}, t ? s.a.createElement(d.a, {
					className: l.a.shirtIcon
				}) : s.a.createElement("div", {
					className: l.a.shirtIcon
				}), t ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : n ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), t ? s.a.createElement("div", {
					className: l.a.chevronIcon
				}) : s.a.createElement(i.a, {
					name: "caret_right",
					className: l.a.chevronIcon
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less": function(e, t, r) {
			e.exports = {
				BannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				bannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				BannerImage: "_1IvROQ79nAJZ87_JkTFsLO",
				bannerImage: "_1IvROQ79nAJZ87_JkTFsLO"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				o = r("./src/reddit/icons/svgs/Close/index.tsx"),
				i = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				d = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				c = r.n(d),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				u = r.n(l);
			t.a = function({
				bannerBackgroundImage: e,
				isNSFW: t,
				username: r,
				editMode: n,
				isDeletingBanner: d,
				onDeleteBanner: l
			}) {
				return s.a.createElement("div", {
					className: c.a.bannerWrapper
				}, s.a.createElement(i.a, {
					bannerUrl: e,
					isNSFW: t,
					userName: r
				}), n && e && (d ? s.a.createElement(a.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : s.a.createElement(o.a, {
					className: u.a.closeIcon,
					onClick: l
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/controls/InternalLink/index.tsx"),
				o = r("./src/reddit/components/HumanDate/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				className: e,
				shouldDisplaySnoovatar: t,
				url: r,
				userCreated: n,
				username: d,
				...c
			}) {
				const l = t ? s.a.createElement(s.a.Fragment, null, "u/", d, " · ", s.a.createElement(o.d, {
					seconds: n,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${d}`;
				return r ? s.a.createElement(a.a, i({}, c, {
					className: e,
					to: r
				}), l) : s.a.createElement("span", i({}, c, {
					className: e
				}), l)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				i = r("./src/reddit/icons/svgs/Admin/index.tsx"),
				d = r("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				c = r("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				u = r.n(l);
			t.a = ({
				title: e,
				username: t,
				isEmployee: r,
				isGold: a,
				isNSFW: l
			}) => o.a.createElement("h1", {
				className: u.a.snoovatarUserTitle
			}, e || t, r && o.a.createElement(i.a, {
				className: u.a.snoovatarAdminIcon,
				title: s.fbt._("Reddit admin", null, {
					hk: "goUUb"
				})
			}), a && o.a.createElement("a", {
				title: s.fbt._("{username} has Reddit Premium", [s.fbt._param("username", t)], {
					hk: "3Fylv"
				}),
				href: `${n.a.redditUrl}/premium`
			}, o.a.createElement(c.a, {
				className: u.a.snoovatarPremiumIcon
			})), l && o.a.createElement(d.a, {
				className: u.a.snoovatarNsfwIcon,
				title: s.fbt._("NSFW - Adult Content", null, {
					hk: "2Iw7mN"
				})
			}))
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, r) {
			e.exports = {
				snoovatarContainer: "_34XIqvI8-YT1wukR_W8vj6",
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
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/controls/InternalLink/index.tsx"),
				d = r("./src/reddit/icons/fonts/index.tsx"),
				c = r("./src/reddit/selectors/experiments/econ/index.ts"),
				l = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				p = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				b = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				f = r.n(b);
			const x = 25;

			function v(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function h(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const g = v("particleDelay", f.a),
				_ = v("particleX", f.a),
				y = v("particleFloat", f.a),
				E = () => {
					const e = h(_),
						t = h(y),
						r = h(g);
					return Object(o.a)(f.a.particle, e, t, r)
				};
			class I extends s.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < x; t++) e.push(this.createParticle(t));
					return s.a.createElement("div", {
						role: "presentation",
						className: f.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return s.a.createElement("div", {
						key: e,
						className: `${E()}`
					})
				}
			}
			var C = I,
				j = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				O = r.n(j),
				w = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: r,
				editMode: n,
				isDeletingBanner: b,
				isEmployee: x,
				isGold: v,
				isNSFW: h,
				isOwnProfile: g,
				onClickSnoovatar: _,
				onDeleteBanner: y,
				prefersReducedAnimations: E,
				snoovatarUrl: I,
				title: j,
				userCreated: N,
				username: P,
				url: S,
				isHovercard: k
			}) => {
				const L = Object(a.e)(e => !g && !!I && Object(c.g)(e));
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(m.a, {
					bannerBackgroundImage: e,
					editMode: !!n,
					isNSFW: h,
					username: P,
					isDeletingBanner: !!b,
					onDeleteBanner: y
				}), s.a.createElement("div", {
					className: f.a.snoovatarContainer
				}, v && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: f.a.topGlow
				}), s.a.createElement("div", {
					className: f.a.bottomGlow
				}), !E && s.a.createElement(C, null)), s.a.createElement("img", {
					className: Object(o.a)(f.a.snoovatar, {
						[f.a.premiumGlow]: v
					}),
					src: I || void 0
				})), !n && g && s.a.createElement(i.a, {
					to: "/settings/profile",
					className: f.a.snoovatarSettingsLink
				}, s.a.createElement(d.a, {
					name: "settings",
					className: O.a.settingsIcon
				})), s.a.createElement(w.a, {
					isEmployee: x,
					isGold: v,
					isNSFW: h,
					title: j,
					username: P
				}), s.a.createElement(p.a, {
					className: f.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: P,
					userCreated: N,
					url: S
				}), (g || !r && !!I) && s.a.createElement(l.a, {
					compact: t,
					currentUserHasSnoovatar: r,
					isOwnProfile: g,
					onClick: _
				}), L && s.a.createElement(u.a, {
					username: P,
					isHovercard: !!k,
					share: {
						username: P
					}
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/components/SidebarContainer/index.tsx"),
				d = r("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				c = r("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				l = r("./src/reddit/components/SidebarProfilePowerupContributions/index.tsx"),
				u = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				m = r("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				p = r("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				b = r("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				f = r("./src/reddit/constants/posts.ts"),
				x = r("./src/reddit/selectors/experiments/econ/index.ts");
			const v = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => r.e("reddit-components-ProfileIdCard").then(r.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				h = e => {
					const t = Object(o.e)(e => Object(x.l)(e));
					return a.a.createElement(i.a, {
						className: e.className
					}, a.a.createElement(v, {
						profileName: e.profileName,
						isOverlay: e.isOverlay
					}), a.a.createElement(b.a, {
						subredditOrProfile: {
							name: e.profileName,
							type: f.a.PROFILE
						}
					}), a.a.createElement(d.a, {
						profileName: e.profileName
					}), a.a.createElement(c.a, {
						profileName: e.profileName
					}), !t && a.a.createElement(u.a, null, a.a.createElement(l.a, {
						profileName: e.profileName
					})), a.a.createElement(u.a, null, a.a.createElement(p.a, {
						profileName: e.profileName
					})), a.a.createElement(m.a, {
						hideBackToTop: e.hideBackToTop
					}))
				};
			h.defaultProps = {
				isOverlay: !1
			}, t.a = h
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/take.js"),
				a = r.n(s),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				d = r("./src/lib/constants/index.ts"),
				c = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = r("./src/reddit/controls/Button/index.tsx"),
				u = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = r("./src/reddit/layout/row/Inline/index.tsx"),
				p = r("./src/reddit/layout/row/RightAlign/index.tsx");
			const b = e => {
				const {
					className: t,
					hasMoreItems: r,
					headerButton: s,
					items: d,
					minimizedLength: b,
					onLoadMore: f,
					pending: x,
					renderItem: v,
					title: h
				} = e, [g, _] = Object(o.useState)(!1), y = d.length > b || r, E = (!y || g ? d : a()(d, b)).map(e => v({
					item: e
				})), I = () => {
					g || _(!0), g && !r && _(!1), r && f && f()
				};
				return i.a.createElement(c.a, {
					className: t,
					headerButton: s,
					title: h
				}, E, i.a.createElement(m.a, null, i.a.createElement(p.a, null, y && (() => {
					const e = !g || r && f ? n.fbt._("View More", null, {
						hk: "1RK8uA"
					}) : n.fbt._("View Less", null, {
						hk: "1M72mK"
					});
					return i.a.createElement(l.r, {
						onClick: I
					}, x ? i.a.createElement(u.a, {
						sizePx: 10
					}) : e)
				})())))
			};
			b.defaultProps = {
				minimizedLength: d.Tb
			}, t.a = b
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_3thndRe559UZy14xE1gZ_"
			}
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/actions/profile/index.ts"),
				c = r("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = r("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				u = r("./src/reddit/models/User/index.ts"),
				m = r("./src/reddit/selectors/profile.ts"),
				p = r("./src/reddit/selectors/subscriptions.ts"),
				b = r("./src/reddit/selectors/user.ts"),
				f = r("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				x = r.n(f);
			const v = Object(i.c)({
					currentUser: b.k,
					moderated: m.n,
					subscriptions: p.e,
					hasMoreModerated: m.d,
					loadMorePending: m.a
				}),
				h = Object(o.b)(v, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(d.c)(t.profileName))
				}), (e, t, r) => ({
					...r,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				g = ({
					item: e
				}) => a.a.createElement(l.a, {
					id: e.id,
					iconUrl: e.iconUrl,
					isNSFW: e.isNSFW,
					key: `${e.type}-${e.name}`,
					name: e.name,
					subscribers: e.subscribers,
					isSubscribed: e.isSubscribed,
					widget: void 0,
					sendEvent: () => void 0,
					type: e.type
				});
			t.a = h(e => {
				const {
					currentUser: t,
					moderated: r,
					profileName: s,
					subscriptions: o,
					hasMoreModerated: i,
					onLoadMore: d,
					loadMorePending: l
				} = e;
				if (0 === r.length) return null;
				const m = t && Object(u.e)(t).toLowerCase() === s.toLowerCase() ? n.fbt._("You're a moderator of these communities", null, {
						hk: "2YoCxy"
					}) : n.fbt._("Moderator of these communities", null, {
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
					}(r, new Set(o));
				return a.a.createElement(c.a, {
					className: x.a.container,
					title: m,
					items: p,
					renderItem: g,
					hasMoreItems: i,
					onLoadMore: d,
					pending: l
				})
			})
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.m.less": function(e, t, r) {
			e.exports = {
				listItem: "_3lbnTBPV5H4wHdRz5ATVc9",
				icon: "Vm0_pCIi1Z6JWa0EVf6jK",
				description: "_2xcc4c-4TOL7KOsJidXtl",
				name: "_3nt8_GidTIn88UciXx27E7",
				meta: "_3iC0Hyv57ON8dAtU94HFE_"
			}
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/actions/profile/index.ts"),
				l = r("./src/reddit/components/SidebarExpandableList/index.tsx"),
				u = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				m = r("./src/reddit/selectors/profile.ts"),
				p = r("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				b = r.n(p);
			const f = Object(d.c)({
					hasMoreMultireddits: m.e,
					loadMorePending: m.b,
					multireddits: m.o
				}),
				x = Object(o.b)(f, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(c.g)(t.profileName, !0))
				}), (e, t, r) => ({
					...r,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreMultireddits && t.onLoadMoreMultireddits()
					}
				})),
				v = ({
					item: e
				}) => a.a.createElement("div", {
					className: b.a.listItem,
					key: e.url
				}, a.a.createElement("img", {
					className: b.a.icon,
					src: e.icon
				}), a.a.createElement("div", {
					className: b.a.description
				}, a.a.createElement(i.a, {
					className: b.a.name,
					to: e.url
				}, e.displayText), a.a.createElement("div", {
					className: b.a.meta
				}, n.fbt._({
					"*": "{communities} communities",
					_1: "1 community"
				}, [n.fbt._plural(e.subredditCount, "communities")], {
					hk: "1eyxrS"
				}))));
			t.a = x(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: r,
					multireddits: s,
					onLoadMore: o,
					profileName: i
				} = e;
				return s && s.length ? a.a.createElement(u.a, null, a.a.createElement(l.a, {
					hasMoreItems: t,
					items: s,
					onLoadMore: o,
					pending: r,
					renderItem: v,
					title: n.fbt._("Public custom feeds by u/{profileName}", [n.fbt._param("profileName", i)], {
						hk: "16Oicc"
					})
				})) : null
			})
		},
		"./src/reddit/components/SidebarProfilePowerupContributions/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = r("./src/reddit/components/SidebarExpandableList/index.tsx"),
				c = r("./src/reddit/components/SubredditIcon/index.tsx"),
				l = r("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				u = r("./src/reddit/selectors/gold/powerups/index.ts"),
				m = r("./src/reddit/selectors/user.ts"),
				p = r("./node_modules/reselect/es/index.js"),
				b = r("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				f = r.n(b);
			const x = Object(p.c)({
				subreddits: function(e, {
					profileName: t
				}) {
					const r = Object(m.sb)(e, {
							userName: t
						}),
						n = Object(u.f)(e);
					return (r && n ? n[r.id] : null) || []
				}
			});

			function v({
				item: e
			}) {
				const t = e.subredditInfo,
					r = a.a.createElement(c.b, {
						iconUrl: t.styles.icon,
						className: f.a.subredditIcon
					});
				return a.a.createElement(l.a, {
					className: f.a.communityItemContainer,
					key: t.id
				}, a.a.createElement("div", {
					className: f.a.iconContainer
				}, a.a.createElement(i.a, {
					to: t.path
				}, r)), a.a.createElement("div", {
					className: f.a.communityDescription
				}, a.a.createElement("div", {
					className: f.a.communityName
				}, a.a.createElement(i.a, {
					to: t.path
				}, t.prefixedName)), a.a.createElement("div", {
					className: f.a.subscriberCount
				}, n.fbt._({
					"*": "{number} Powerups",
					_1: "1 Powerup"
				}, [n.fbt._plural(e.powerups, "number")], {
					hk: "3fbcDy"
				}))))
			}
			t.a = Object(o.b)(x)(({
				subreddits: e
			}) => ! function(e) {
				return e.length > 0 && e.every(e => e.subredditInfo)
			}(e) ? null : a.a.createElement(d.a, {
				title: n.fbt._("Supports Communities", null, {
					hk: "1vCNdZ"
				}),
				items: e,
				renderItem: v
			}))
		},
		"./src/reddit/components/SidebarTrophyCase/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/SidebarTrophyCase/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/components/SidebarExpandableList/index.tsx"),
				c = r("./src/reddit/controls/Typography/index.tsx"),
				l = r("./src/reddit/selectors/telemetry.ts");
			var u = r("./src/reddit/hooks/useTracking.ts"),
				m = r("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				p = r("./node_modules/lodash/isEqual.js"),
				b = r.n(p);
			const f = Object(i.b)(i.d, b.a);
			var x = r("./src/reddit/selectors/profile.ts"),
				v = r("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				h = r.n(v),
				g = r("./src/lib/lessComponent.tsx"),
				_ = r("./src/lib/opener/index.ts");
			const y = Object(i.c)({
				trophyCase: (e, {
					profileName: t
				}) => Object(x.r)(e, Object(x.m)(e, t))
			}, f);
			t.a = Object(o.b)(y)(({
				trophyCase: e
			}) => 0 === e.length ? null : a.a.createElement(d.a, {
				title: n.fbt._("Trophy Case ({trophyCount})", [n.fbt._param("trophyCount", `${e.length}`)], {
					hk: "mzh3V"
				}),
				items: e,
				renderItem: w
			}));
			const E = g.a.wrapped(m.a, "TrophyItem", h.a),
				I = g.a.div("TrophyIcon", h.a),
				C = g.a.h5("TrophyName", h.a),
				j = g.a.div("TrophyContent", h.a),
				O = g.a.wrapped(c.c, "Description", h.a),
				w = ({
					item: e
				}) => {
					const t = Object(u.a)(),
						r = a.a.createElement("img", {
							src: e.icon,
							title: e.name
						});
					return a.a.createElement(E, {
						key: e.id
					}, a.a.createElement(I, null, e.url ? a.a.createElement("a", {
						target: _.d.BLANK,
						rel: _.c,
						href: e.url,
						onClick: () => t((e => t => ({
							source: "trophy",
							action: "click",
							noun: "trophy",
							...l.o(t),
							actionInfo: Object(l.d)(t, {
								paneName: "profile_about"
							}),
							profile: l.S(t),
							trophy: e
						}))({
							id: e.id,
							name: e.name
						}))
					}, r) : r), a.a.createElement(j, null, a.a.createElement(C, null, e.name), a.a.createElement(O, null, e.description)))
				}
		},
		"./src/reddit/components/SubredditModerationSearch/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/SubredditModerationSearch/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return y
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./src/lib/lessComponent.tsx"),
				i = r("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				d = r("./src/reddit/controls/Button/index.tsx"),
				c = r("./src/reddit/helpers/normalizeUsername/index.tsx"),
				l = r("./src/reddit/layout/row/Inline/index.tsx"),
				u = r("./src/reddit/layout/row/RightAlign/index.tsx"),
				m = r("./src/reddit/icons/svgs/Search/index.tsx"),
				p = r("./src/reddit/components/SubredditModerationSearch/index.m.less"),
				b = r.n(p);
			const f = o.a.wrapped(m.a, "SearchIcon", b.a),
				x = o.a.wrapped(i.a, "NoResultsContainer", b.a),
				v = o.a.div("Container", b.a),
				h = o.a.wrapped(l.a, "SearchStatusBar", b.a),
				g = o.a.div("SearchStatus", b.a),
				_ = o.a.span("Bold", b.a);

			function y(e) {
				if (e.searchPending) return null;
				const t = Object(c.a)(e.searchTerm);
				return e.noResultsFound ? a.a.createElement(x, null, a.a.createElement(f, null), a.a.createElement(i.b, null, n.fbt._("No results for {searchTerm}", [n.fbt._param("searchTerm", `u/${t}`)], {
					hk: "1nDAlG"
				})), a.a.createElement(d.r, {
					onClick: e.cancelSearch
				}, n.fbt._("See all", null, {
					hk: "3aLS8s"
				}))) : a.a.createElement(v, null, a.a.createElement(h, null, a.a.createElement(g, null, n.fbt._("1 search result for {=[searchTerm]}", [n.fbt._param("=[searchTerm]", a.a.createElement(_, {
					"data-redditstyle": !0
				}, n.fbt._("{searchTerm}", [n.fbt._param("searchTerm", `'${t}':`)], {
					hk: "1B9ZWG"
				})))], {
					hk: "iAcV5"
				})), a.a.createElement(u.a, null, a.a.createElement(d.r, {
					onClick: e.cancelSearch
				}, n.fbt._("See all", null, {
					hk: "3aLS8s"
				})))), e.children)
			}
		},
		"./src/reddit/components/SubredditModerationTopBar/index.m.less": function(e, t, r) {
			e.exports = {
				topBarRow: "_3H6HwkSZ2zUC1pwaIMv-EY",
				searchBar: "_2LvB93iPopVPdhNBxBnfAH",
				searchIcon: "_1lo1uHsqx3-EkgYDL4xKEB",
				searchInput: "_1ox94KT4YX0mmZgLO51PG_",
				searchButton: "_3-3xbjG4pcuzlB7SzgBvzg"
			}
		},
		"./src/reddit/components/SubredditModerationTopBar/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./src/lib/lessComponent.tsx"),
				i = r("./src/reddit/helpers/normalizeUsername/index.tsx"),
				d = r("./src/reddit/icons/svgs/Search/index.tsx"),
				c = r("./src/reddit/components/SubredditModerationTopBar/index.m.less"),
				l = r.n(c);
			const u = o.a.div("topBarRow", l.a);
			class m extends a.a.Component {
				constructor(e) {
					super(e), this.onSearchChange = e => {
						Object(i.a)(e.currentTarget.value).length < 21 && this.setState({
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
					return a.a.createElement("div", {
						className: l.a.topBarRow
					}, e.positionSearchRight && e.children, a.a.createElement("div", {
						className: l.a.searchBar
					}, a.a.createElement("input", {
						className: l.a.searchInput,
						onChange: this.onSearchChange,
						onKeyPress: this.onKeyPress,
						placeholder: n.fbt._("Search for a user", null, {
							hk: "1yTo6e"
						}),
						type: "text",
						value: t.searchInputText
					}), a.a.createElement("button", {
						className: l.a.searchButton,
						onClick: this.onSearch
					}, a.a.createElement(d.a, {
						className: l.a.searchIcon
					}))), !e.positionSearchRight && e.children)
				}
			}
		},
		"./src/reddit/components/UserNameAndIcon/index.m.less": function(e, t, r) {
			e.exports = {
				UserIconContainer: "_3gyThPd4NTS21qtNdizCxE",
				userIconContainer: "_3gyThPd4NTS21qtNdizCxE",
				UserIcon: "_1utZNH6IItbNzgdnUBW-Bp",
				userIcon: "_1utZNH6IItbNzgdnUBW-Bp",
				UserLink: "_2Q3rLIRb_ij54AEsabVm9L",
				userLink: "_2Q3rLIRb_ij54AEsabVm9L"
			}
		},
		"./src/reddit/components/UserNameAndIcon/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./src/lib/lessComponent.tsx"),
				i = r("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				d = r("./src/reddit/components/UserIcon/index.tsx"),
				c = r("./src/reddit/controls/InternalLink/index.tsx"),
				l = r("./src/reddit/components/UserNameAndIcon/index.m.less"),
				u = r.n(l);
			const m = o.a.span("UserIconContainer", u.a),
				p = o.a.wrapped(d.a, "UserIcon", u.a),
				b = o.a.wrapped(c.a, "UserLink", u.a);
			t.a = e => a.a.createElement(b, {
				className: e.className,
				to: `${n.a.redditUrl}/user/${e.username}`
			}, a.a.createElement(i.a, {
				user: e.username,
				sendHoverCardEvent: e.sendHoverCardEvent,
				subredditId: e.subredditId,
				tooltipId: e.tooltipId
			}, a.a.createElement(m, {
				style: {
					height: e.iconSize || "32px",
					width: e.iconSize || "32px"
				}
			}, a.a.createElement(p, {
				iconUrl: e.userIcon,
				isNSFW: !1,
				userName: e.username
			})), e.username))
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, r) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/components/SEOTitle/index.tsx"),
				i = r("./src/reddit/components/Widgets/Base/index.m.less"),
				d = r.n(i);
			const c = a.a.div("WidgetBackground", d.a),
				l = a.a.wrapped(({
					children: e,
					...t
				}) => s.a.createElement("div", t, s.a.createElement(o.b, {
					type: o.a.Widget
				}, e)), "WidgetHeader", d.a);
			t.b = e => s.a.createElement("div", {
				className: e.className
			}, s.a.createElement(c, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return O
			})), r.d(t, "a", (function() {
				return N
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/components/Flair/index.tsx"),
				u = r("./src/reddit/components/SubscribeButton/index.tsx"),
				m = r("./src/reddit/actions/subscription/index.ts");
			var p = Object(o.b)(null, (e, t) => {
					const r = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, r)),
						onSubscriptionsRequested: () => e(m.e()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, r))
					}
				})(r("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				f = r("./src/reddit/constants/componentSizes.ts"),
				x = r("./src/reddit/controls/Button/index.tsx"),
				v = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				h = r("./src/reddit/icons/fonts/index.tsx"),
				g = r("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				_ = r("./src/reddit/models/Flair/index.ts"),
				y = r("./src/reddit/selectors/user.ts"),
				E = r("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				I = r("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				C = r.n(I);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const O = e => a.a.createElement(b.a, {
					className: Object(c.a)(C.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, a.a.createElement("div", {
					className: C.a.container
				}, e.isLoading ? a.a.createElement(v.a, {
					className: C.a.loadingIcon,
					sizePx: 32
				}) : a.a.createElement(a.a.Fragment, null, e.isError ? a.a.createElement("p", {
					className: C.a.errorMsg
				}, e.errorMsg || n.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : a.a.createElement(a.a.Fragment, null, e.communities.map(t => a.a.createElement(N, j({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && a.a.createElement(x.t, {
					className: C.a.bottomButton,
					kind: x.b.Button,
					priority: x.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				w = Object(d.c)({
					hideNSFWPref: y.C,
					nightmode: y.X
				}),
				N = Object(o.b)(w)(e => a.a.createElement("div", {
					className: Object(c.a)(C.a.communityItemContainer, {
						[C.a.withBottomFlair]: e.isNSFW
					})
				}, a.a.createElement(g.a, {
					className: C.a.communityItemExpandCenter,
					widthRight: f.t
				}, a.a.createElement("div", {
					className: C.a.iconContainer
				}, e.communityIcon || e.iconUrl ? a.a.createElement("img", {
					className: C.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : a.a.createElement(h.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(c.a)(C.a.defaultCommunityIcon, {
						[C.a.mNightmode]: e.nightmode
					})
				})), a.a.createElement("div", {
					className: C.a.communityDescriptionContainer
				}, a.a.createElement(i.a, {
					className: C.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(E.b)(e.name, e.type),
					to: Object(E.a)(e.name, e.type)
				}, Object(E.b)(e.name, e.type)), a.a.createElement("div", {
					className: C.a.communityInfoContainer
				}, !!e.subscribers && a.a.createElement("p", {
					className: C.a.subscriberCount
				}, n.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [n.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && a.a.createElement(l.b, {
					className: C.a.nsfwFlair,
					flair: {
						type: _.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? a.a.createElement(v.a, {
					className: Object(c.a)(C.a.communityCta, C.a.smallLoadingIcon),
					sizePx: 12
				}) : a.a.createElement(x.t, {
					className: C.a.communityCta,
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? a.a.createElement(p, {
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
				}) : a.a.createElement(u.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && a.a.createElement("p", {
					title: e.description,
					className: C.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/posts.ts"),
				s = r("./src/reddit/helpers/name/index.ts");

			function a(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function o(e, t) {
				return t === n.a.PROFILE ? Object(s.d)(e) : Object(s.c)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/Widgets/ConnectedAccounts/index.m.less": function(e, t, r) {
			e.exports = {
				account: "_25M-5tlJjQOChCI8sg84QU"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				d = r("./src/reddit/components/TrackingHelper/index.tsx"),
				c = r("./src/reddit/components/Widgets/Base/index.tsx"),
				l = r("./src/reddit/constants/posts.ts"),
				u = r("./src/reddit/helpers/trackers/profileSettings.ts"),
				m = r("./src/reddit/models/ExternalAccount/index.ts"),
				p = r("./src/reddit/selectors/externalAccount.ts"),
				b = r("./src/reddit/selectors/user.ts"),
				f = r("./node_modules/fbt/lib/FbtPublic.js"),
				x = r("./src/reddit/controls/OutboundLink/index.tsx"),
				v = r("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				h = r("./src/reddit/icons/svgs/Twitter/index.tsx"),
				g = r("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				_ = r("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				y = r.n(_);
			var E = e => {
					const {
						account: t,
						clickEvent: r,
						provider: n
					} = e;
					let a, o = t.username,
						i = "";
					return n !== m.a.Twitter ? null : (a = s.a.createElement(h.a, {
						className: y.a.twitterLogo
					}), i = f.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), o = `@${t.username}`, s.a.createElement(g.a, null, s.a.createElement("span", {
						className: y.a.icon
					}, a), s.a.createElement(x.b, {
						className: y.a.link,
						href: t.link,
						onClick: r
					}, s.a.createElement("div", {
						className: y.a.linkTitle
					}, s.a.createElement("span", {
						className: y.a.name
					}, o), s.a.createElement(v.a, {
						className: y.a.linkIcon
					})), s.a.createElement("div", {
						className: y.a.linkDescription
					}, i))))
				},
				I = r("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				C = r.n(I);
			const {
				fbt: j
			} = r("./node_modules/fbt/lib/FbtPublic.js"), O = Object(o.c)({
				twitterAccount: (e, {
					subredditOrProfile: t
				}) => t.type === l.a.PROFILE ? Object(p.c)(e, {
					profileName: t.name
				}) : null,
				user: (e, {
					subredditOrProfile: t
				}) => t.type === l.a.PROFILE ? Object(b.sb)(e, {
					userName: t.name
				}) : null
			}), w = Object(a.b)(O, e => ({
				trackTwitterAccountClicked: t => e((e, r) => u.m(r(), t))
			}), (e, t, r) => ({
				...r,
				...e,
				...t,
				onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
			}));
			t.a = Object(d.c)(w(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: r
				} = e;
				return r ? s.a.createElement(i.a, null, s.a.createElement(c.b, null, s.a.createElement(c.a, null, j._("Connected accounts", null, {
					hk: "1ce9Jz"
				})), r && s.a.createElement("div", {
					className: C.a.account
				}, s.a.createElement(E, {
					provider: m.a.Twitter,
					account: r,
					clickEvent: t
				})))) : null
			}))
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			class a extends s.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							r = this.props.multiple ? [...t] : t[0];
						this.props.onChange(r), this.setState(() => ({
							value: r
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
					} = this, r = "string" == typeof t.value ? t.value : "", n = "object" == typeof t.value ? t.value : null, a = r || n;
					return s.a.createElement("div", {
						className: e.className
					}, r && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: r,
						tabIndex: e.tabIndex
					}), (!a || e.multiple || void 0 !== e.isPending && !e.isPending) && s.a.createElement("input", {
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
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = r.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => s.a.createElement("div", {
				className: Object(a.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/helpers/trackers/followers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/tracking.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const a = e => t => ({
					...Object(s.o)(t),
					action: n.c.CLICK,
					noun: `follower_list_page_${e?"follow":"unfollow"}`,
					source: "profile"
				}),
				o = () => e => ({
					...Object(s.o)(e),
					action: n.c.CLICK,
					noun: "follower_list_cta",
					source: "profile"
				})
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(a.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, r) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = r.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
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
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
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
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
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
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = function({
				className: e
			}) {
				return s.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, s.a.createElement("g", {
					fill: "inherit"
				}, s.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function a(e) {
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
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, r) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/layout/row/RightAlign/index.m.less"),
				a = r.n(s);
			t.a = n.a.div("rightAligned", a.a)
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, r) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = r.n(i);
			t.a = Object(a.a)(e => s.a.createElement("div", {
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
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, r) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				d = r.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(a.a)(e => {
				const {
					className: t,
					children: r,
					heightLeft: n,
					widthLeft: a,
					gutter: i,
					...l
				} = e;
				return s.a.createElement("div", c({
					className: Object(o.a)(d.a.expandRightContainer, t)
				}, l), s.a.createElement("div", {
					className: d.a.left,
					style: {
						flexBasis: a,
						height: n,
						marginRight: i
					}
				}, Array.isArray(r) && r[0]), s.a.createElement("div", {
					className: d.a.right
				}, Array.isArray(r) && r[1]))
			}, 2)
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, r) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return l
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./src/reddit/controls/Button/index.tsx"),
				i = r("./src/reddit/pages/ErrorPages/index.m.less"),
				d = r.n(i);
			const c = ({
					message: e
				}) => a.a.createElement("div", {
					className: d.a.container
				}, a.a.createElement("h3", {
					className: d.a.title
				}, e || n.fbt._("Sorry, there doesn't seem to be anything here.", null, {
					hk: "3VvHek"
				})), a.a.createElement(o.n, {
					className: d.a.primaryRouterLink,
					to: "/"
				}, n.fbt._("Go Home", null, {
					hk: "3E9E1g"
				}))),
				l = ({
					message: e
				}) => a.a.createElement("div", {
					className: d.a.container
				}, a.a.createElement("h3", {
					className: d.a.title
				}, e || n.fbt._("Sorry, You do not have permission to view this page.", null, {
					hk: "4lRbHD"
				})), a.a.createElement(o.n, {
					className: d.a.primaryRouterLink,
					to: "/"
				}, n.fbt._("Go Home", null, {
					hk: "3E9E1g"
				})))
		},
		"./src/reddit/pages/Followers/index.m.less": function(e, t, r) {
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
		"./src/reddit/pages/Followers/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/config.ts"),
				d = r("./src/reddit/actions/pages/followers/index.ts"),
				c = r("./src/reddit/components/ProfileSidebar/index.tsx"),
				l = r("./src/reddit/components/Scroller/Simple.tsx"),
				u = r("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				m = r("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				p = r("./src/reddit/contexts/PageLayer/index.tsx"),
				b = r("./src/reddit/layout/page/Listing/index.tsx"),
				f = r("./src/reddit/pages/ErrorPages/index.tsx"),
				x = r("./src/reddit/pages/ModHub/Header.tsx"),
				v = r("./src/reddit/selectors/followers.ts"),
				h = r("./src/reddit/selectors/profile.ts"),
				g = r("./src/lib/classNames/index.ts"),
				_ = r("./src/reddit/components/TrackingHelper/index.tsx"),
				y = r("./src/reddit/components/UserNameAndIcon/index.tsx"),
				E = r("./src/reddit/controls/Button/index.tsx"),
				I = r("./src/reddit/helpers/trackers/followers.ts"),
				C = r("./src/reddit/pages/Followers/index.m.less"),
				j = r.n(C);
			var O = e => {
				var t, r, i, c;
				const l = Object(o.d)(),
					u = Object(o.e)(t => Object(v.b)(t, e.userId)),
					m = Object(_.b)(),
					p = Object(s.useCallback)(() => {
						u && (l(Object(d.toggleFollowUser)(e.userId, !u.isFollowed)), m(Object(I.a)(!u.isFollowed)))
					}, [e.userId, l, m, u]);
				return u ? a.a.createElement("div", {
					className: j.a.userRow,
					key: u.id
				}, a.a.createElement(y.a, {
					username: u.name,
					tooltipId: `${u.id}-user-tooltip`,
					sendHoverCardEvent: () => {},
					userIcon: (null === (i = null === (r = null === (t = u.profile) || void 0 === t ? void 0 : t.styles) || void 0 === r ? void 0 : r.legacyIcon) || void 0 === i ? void 0 : i.url) || (null === (c = u.snoovatarIcon) || void 0 === c ? void 0 : c.url)
				}), u.isAcceptingFollowers && a.a.createElement(E.t, {
					className: Object(g.a)(j.a.followButton, {
						[j.a.followingButton]: u.isFollowed
					}),
					onClick: p,
					priority: u.isFollowed ? E.c.Plain : E.c.Tertiary
				}, u.isFollowed ? n.fbt._("Following", null, {
					hk: "3vqzzk"
				}) : n.fbt._("Follow", null, {
					hk: "3v1Euu"
				}))) : null
			};
			t.default = e => {
				const t = Object(o.d)(),
					r = Object(o.e)(v.a),
					g = Object(o.e)(v.e),
					_ = Object(o.e)(v.c),
					y = Object(o.e)(v.d),
					E = Object(p.fb)(),
					I = Object(o.e)(e => Object(p.E)(e, {
						pageLayer: E
					})),
					C = Object(o.e)(t => Object(h.j)(t, {
						profileName: e.match.params.profileName
					})),
					[w, N] = Object(s.useState)("");
				Object(s.useEffect)(() => {
					w && t(Object(d.followersRequested)({
						...d.DEFAULT_VARIABLES,
						searchQuery: w
					}))
				}, [w, t]);
				const P = Object(s.useCallback)(() => {
					(null == y ? void 0 : y.hasNextPage) && (null == y ? void 0 : y.endCursor) && t(Object(d.followersRequested)({
						...d.DEFAULT_VARIABLES,
						after: y.endCursor
					}))
				}, [y, t]);
				if (!I) return a.a.createElement(f.a, null);
				const S = null == C ? void 0 : C.name;
				if (!S) return a.a.createElement(f.b, null);
				let k;
				if (0 === (null == r ? void 0 : r.length)) k = a.a.createElement("div", {
					className: j.a.emptyState
				}, a.a.createElement("img", {
					className: j.a.snooSmile,
					src: `${i.a.assetPath}/img/snoomoji/snoo.png`
				}), a.a.createElement("div", {
					className: j.a.emptyStateTitle
				}, n.fbt._("Followers", null, {
					hk: "4scwa7"
				})), a.a.createElement("div", {
					className: j.a.emptyStateDescription
				}, n.fbt._("You don't have any followers yet, but when someone follows you, you'll see them here.", null, {
					hk: "1WWMuR"
				})));
				else {
					let e;
					if (w) {
						const t = g ? Object.values(g)[0] : void 0;
						e = a.a.createElement(u.a, {
							noResultsFound: !t,
							searchTerm: w,
							cancelSearch: () => N(""),
							searchPending: !!_
						}, t && a.a.createElement(O, {
							userId: t.id
						}))
					} else r && (e = a.a.createElement(l.b, {
						loadMoreToken: (null == y ? void 0 : y.endCursor) || void 0,
						onLoadMore: P
					}, r.map(e => ({
						estHeight: 56,
						id: e,
						render: function() {
							return a.a.createElement(O, {
								userId: e
							})
						}
					}))));
					k = a.a.createElement(a.a.Fragment, null, a.a.createElement(m.b, {
						activeSearchQuery: w,
						onSearch: e => (e => {
							N(e)
						})(e),
						positionSearchRight: !0
					}, a.a.createElement("div", {
						className: j.a.topBar
					}, a.a.createElement("div", {
						className: j.a.topBarTitleText
					}, n.fbt._("Followers", null, {
						hk: "4ah1S2"
					})), a.a.createElement("div", {
						className: j.a.topBarDescriptionText
					}, n.fbt._("This list is only visible to you. The most recent follows are shown first.", null, {
						hk: "BYist"
					})))), e)
				}
				return a.a.createElement(b.a, {
					contentClassName: j.a.followersListing,
					disableFullscreen: !0,
					fitPageToContent: !0,
					contentNavBar: a.a.createElement(x.a, {
						subredditOrProfile: C || void 0,
						pageName: n.fbt._("Followers", null, {
							hk: "3DwX8d"
						})
					}),
					content: k,
					sidebar: a.a.createElement(c.a, {
						className: j.a.followersListing,
						profileName: S
					})
				})
			}
		},
		"./src/reddit/pages/ModHub/Header.m.less": function(e, t, r) {
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
				bodyFont: "_1RI3wkzuynRc_Bqno__Uom",
				bodyFontSmall: "_2MlCobLFb0alel2wzuIFVK",
				bodyFontMono: "_3RdMKJzgzPT9lgXHEf0XZB",
				header: "_3u9on6H92JkZNRumczPd67",
				subredditLink: "_3EIUrhztcaaHcqMILEsnBq",
				subredditIcon: "_3uA1he5X3WeG6mpoUWdcXy"
			}
		},
		"./src/reddit/pages/ModHub/Header.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/pages/ModHub/Header.m.less"),
				o = r.n(a),
				i = r("./src/reddit/components/SubredditIcon/index.tsx"),
				d = r("./src/reddit/controls/InternalLink/index.tsx");
			t.a = e => {
				var t, r;
				return s.a.createElement("div", {
					className: o.a.header
				}, s.a.createElement(i.b, {
					className: o.a.subredditIcon,
					subredditOrProfile: e.subredditOrProfile
				}), s.a.createElement(d.a, {
					className: o.a.subredditLink,
					to: (null === (t = e.subredditOrProfile) || void 0 === t ? void 0 : t.url) || "",
					onClick: e.onClick
				}, null === (r = e.subredditOrProfile) || void 0 === r ? void 0 : r.displayText), e.pageName && `/ ${e.pageName}`)
			}
		},
		"./src/reddit/reducers/pages/followers/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				s = r("./src/reddit/actions/pages/followers/constants.ts");
			var a = (e = !1, t) => {
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
				o = Object(n.c)({
					pending: a
				});
			const i = {};
			var d = (e = i, t) => {
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
							isFollowed: n
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								isFollowed: n
							}
						}
					}
					default:
						return e
				}
			};
			var c = (e = null, t) => {
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
			var u = (e = l, t) => {
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
			const m = [];
			var p = (e = m, t) => {
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
			t.a = Object(n.c)({
				api: o,
				models: d,
				pageInfo: c,
				search: u,
				userIds: p
			})
		},
		"./src/reddit/selectors/followers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return c
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/pages/followers/index.ts");
			Object(n.a)({
				pages: {
					followers: s.a
				}
			});
			const a = e => {
					var t, r;
					return null === (r = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === r ? void 0 : r.userIds
				},
				o = (e, t) => {
					var r;
					return null === (r = (e => {
						var t, r;
						return null === (r = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === r ? void 0 : r.models
					})(e)) || void 0 === r ? void 0 : r[t]
				},
				i = e => {
					var t, r;
					return null === (r = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === r ? void 0 : r.search
				},
				d = e => {
					var t, r;
					return null === (r = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === r ? void 0 : r.api.pending
				},
				c = e => {
					var t, r;
					return null === (r = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === r ? void 0 : r.pageInfo
				}
		},
		"./src/redditGQL/operations/ProfileFollowers.json": function(e) {
			e.exports = JSON.parse('{"id":"fe780a440dbd"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileFollowersPage.c151cc1df115a89311d7.js.map