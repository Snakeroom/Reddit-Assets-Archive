// https://www.redditstatic.com/desktop2x/ProfileFollowersPage.3fd818f88b205e07ed5d.js
// Retrieved at 2/16/2022, 4:20:05 PM by Reddit Dataminer v1.0.0
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
				return y
			})), r.d(t, "DEFAULT_VARIABLES", (function() {
				return _
			})), r.d(t, "followersPageRequested", (function() {
				return I
			})), r.d(t, "followersRequested", (function() {
				return E
			})), r.d(t, "followUserToggled", (function() {
				return O
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
				y = Object(a.a)(m.c),
				_ = {
					includeIdentity: !1,
					first: null,
					after: null,
					searchQuery: null
				},
				I = e => async (e, t, {
					gqlContext: r
				}) => {
					var n;
					const s = [];
					(null === (n = Object(f.a)(t())) || void 0 === n ? void 0 : n.length) || s.push(e(E(_))), await Promise.all(s)
				}, E = e => async (t, r, {
					gqlContext: n
				}) => {
					const s = !r().user.account,
						a = {
							..._,
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
						if (!n) return t(Object(o.d)()), void t(y());
						(null == e ? void 0 : e.searchQuery) ? t(h(n)): (null == e ? void 0 : e.after) ? t(v(n)) : (null == e ? void 0 : e.after) || (null == e ? void 0 : e.searchQuery) || t(x(n))
					}
					c.ok || (t(Object(o.d)()), t(y()))
				}, O = Object(a.a)(m.f), j = (e, t) => async (r, a, {
					apiContext: i
				}) => {
					var d, l;
					const m = null === (l = null === (d = a().pages) || void 0 === d ? void 0 : d.followers) || void 0 === l ? void 0 : l.models[e];
					if (!m) return;
					r(O({
						userId: e,
						isFollowed: t
					}));
					const p = m.name;
					if ((await Object(c.c)(i(), {
							subredditNames: [`${s.jc}${m.name}`],
							subscribe: t
						})).ok) {
						r(O({
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
						r(O({
							userId: e,
							isFollowed: !t
						})), r(Object(o.f)(Object(o.e)(s, u.b.Error)))
					}
				}
		},
		"./src/reddit/actions/pages/profileOverview/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "profileOverviewConversationsPending", (function() {
				return Oe
			})), r.d(t, "profileOverviewConversationsLoaded", (function() {
				return je
			})), r.d(t, "profileOverviewConversationsFailed", (function() {
				return Ce
			})), r.d(t, "profileOverviewChronoPending", (function() {
				return Ne
			})), r.d(t, "profileOverviewChronoLoaded", (function() {
				return we
			})), r.d(t, "profileOverviewChronoFailed", (function() {
				return Se
			})), r.d(t, "profileOverviewConversationsRequested", (function() {
				return Pe
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
				y = r("./src/reddit/selectors/user.ts"),
				_ = r("./src/lib/makeActionCreator/index.ts"),
				I = r("./src/reddit/actions/changeUsername.ts"),
				E = r("./src/reddit/actions/contentGate.ts"),
				O = r("./src/reddit/actions/externalAccount.ts"),
				j = r("./src/reddit/actions/gold/powerups.ts"),
				C = r("./src/reddit/actions/pinnedPost.ts"),
				N = r("./src/reddit/actions/platform.ts"),
				w = r("./src/reddit/actions/profile/index.ts"),
				S = r("./src/reddit/actions/trophyCase.ts"),
				P = r("./src/reddit/constants/errors.ts"),
				k = r("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				F = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				U = r("./src/reddit/actions/pages/profileOverview/constants.ts"),
				L = r("./src/lib/initializeClient/installReducer.ts"),
				B = r("./node_modules/redux/es/redux.js"),
				T = r("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const A = {};
			var M = (e = A, t) => {
				switch (t.type) {
					case U.c:
					case U.b:
					case T.c:
					case T.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case U.a:
					case T.a: {
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
						case U.c:
						case T.c: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case U.b:
						case U.a:
						case T.b:
						case T.a: {
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
				D = Object(B.c)({
					error: M,
					pending: H
				});
			const W = {};
			var z = (e = W, t) => {
				switch (t.type) {
					case U.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: {}
						}
					}
					case T.b: {
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
			const K = {};
			var q = (e = K, t) => {
					switch (t.type) {
						case U.b:
						case T.b: {
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
			var Y = (e = Q, t) => {
					switch (t.type) {
						case U.b:
						case T.b: {
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
				Z = Object(B.c)({
					api: D,
					fetchedTokens: z,
					ids: q,
					loadMore: Y
				});
			const X = {};
			var V = (e = X, t) => {
				switch (t.type) {
					case U.f:
					case U.e: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case U.d: {
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
						case U.f: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case U.e:
						case U.d: {
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
				ee = Object(B.c)({
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
				oe = Object(B.c)({
					error: ne,
					pending: ae
				});
			const ie = {};
			var de = (e = ie, t) => {
					switch (t.type) {
						case U.e:
						case te.b:
						case te.e:
							return {
								...e, ...t.payload.extraComments
							};
						default:
							return e
					}
				},
				ce = Object(B.c)({
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
					case U.e:
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
					case U.e:
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
			const ye = {};
			var _e = (e = ye, t) => {
					switch (t.type) {
						case U.e:
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
				Ie = Object(B.c)({
					api: ee,
					extraComments: ce,
					keyToCommentThreadLinkSets: ve,
					keyToHeadCommentId: ge,
					keyToPostId: _e
				}),
				Ee = Object(B.c)({
					chrono: Z,
					conversations: Ie
				});
			Object(L.a)({
				pages: {
					profileOverview: Ee
				}
			});
			const Oe = Object(_.a)(U.f),
				je = Object(_.a)(U.e),
				Ce = Object(_.a)(U.d),
				Ne = Object(_.a)(U.c),
				we = Object(_.a)(U.b),
				Se = Object(_.a)(U.a),
				Pe = (e, t, r, n) => async (n, s, a) => {
					const o = s(),
						i = !!o.listings.postOrder.ids[e],
						f = !!Object(h.c)(o, {
							listingKey: e
						});
					if (!!Object(h.d)(o, {
							listingKey: e
						}) || i && !f) return;
					n(Oe({
						key: e
					}));
					const x = await Object(F.a)("profile", () => ((e, t, r) => Object(u.a)(e, {
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
							pinned: y,
							postIds: _
						} = v;
					if (x.ok) {
						n(je({
							key: e,
							meta: o.meta,
							profileName: t,
							...v,
							postIds: _
						}));
						const r = Object(g.m)(s(), t);
						n(Object(C.h)({
							profileId: r,
							pinned: y
						}))
					} else n(Ce({
						account: x.body.data ? x.body.data.account : null,
						error: x.body.reason ? {
							type: x.body.reason
						} : x.error,
						key: e
					})), x.body.reason === P.a.DeletedProfile && n(Object(E.q)({
						profileName: t
					})), n(Object(N.n)(x.status))
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
						_ = p.toLowerCase(),
						E = {
							...s()(e.queryParams, x.m),
							sort: u,
							layout: h,
							t: m
						},
						C = [t(w.d(_))],
						P = Object(k.a)(_, l.ub, u, e.queryParams);
					if (r().listings.postOrder.ids[P] && !r().listings.postOrder.api.error[P] ? b = !0 : C.push(t(Pe(P, _, E, !0))), C.push(t(Object(a.b)())), await Promise.all(C), b) return;
					const F = r();
					if (!F.platform.currentPage) return;
					if (200 !== F.platform.currentPage.status) return;
					const U = Object(g.m)(r(), _),
						L = Object(y.sb)(F, {
							userName: p
						}).id;
					t(N.m({
						title: Fe(r(), p)
					})), Object(y.M)(F) && Object(y.Q)(F, p) && t(Object(I.f)());
					const B = [t(Object(i.q)()), t(S.b(_, U)), t(w.b(_)), t(O.o(p)), t(w.g(p)), t(j.l(p, L))];
					await Promise.all(B)
				}, Fe = (e, t) => Object(g.q)(e, {
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
				y = r("./src/reddit/models/SubredditModeration/index.ts"),
				_ = r("./src/reddit/models/Toast/index.ts"),
				I = r("./src/reddit/selectors/activeModalId.ts"),
				E = r("./src/reddit/selectors/bannedUser.ts"),
				O = r("./src/reddit/selectors/subreddit.ts"),
				j = r("./src/reddit/selectors/user.ts"),
				C = r("./src/reddit/actions/subredditModeration/constants.ts"),
				N = r("./src/lib/initializeClient/installReducer.ts"),
				w = r("./node_modules/redux/es/redux.js");
			var S = (e = null, t) => {
				switch (t.type) {
					case C.o:
					case C.n:
						return null;
					case C.m:
						return t.payload;
					default:
						return e
				}
			};
			const P = {};
			var k = (e = P, t) => {
					switch (t.type) {
						case C.o: {
							const {
								subredditId: r,
								fetchedToken: n
							} = t.payload, s = Object(y.e)(r, n);
							return {
								...e,
								[s]: !0
							}
						}
						case C.n:
						case C.m: {
							const {
								subredditId: r,
								fetchedToken: n
							} = t.payload, s = Object(y.e)(r, n);
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				F = Object(w.c)({
					error: S,
					pending: k
				});
			const U = {};
			var L = (e = U, t) => {
					switch (t.type) {
						case C.n: {
							const {
								fetchedToken: r,
								subredditId: n
							} = t.payload, s = Object(y.e)(n, r);
							return {
								...e,
								[s]: !0
							}
						}
						default:
							return e
					}
				},
				B = r("./src/reddit/actions/inContextModeration.ts");
			var T = (e = null, t) => {
				switch (t.type) {
					case B.a:
						return t.payload;
					default:
						return e
				}
			};
			const A = {};
			var M = (e = A, t) => {
					switch (t.type) {
						case C.n: {
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
					case C.l:
					case C.n: {
						const {
							subredditId: r,
							bannedUsers: n
						} = t.payload;
						return Object(R.merge)(e, {
							[r]: n
						})
					}
					case C.s: {
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
					case C.r:
					case C.q:
						return null;
					case C.p:
						return t.payload;
					default:
						return e
				}
			};
			var z = (e = !1, t) => {
					switch (t.type) {
						case C.r:
							return !0;
						case C.q:
						case C.p:
							return !1;
						default:
							return e
					}
				},
				K = Object(w.c)({
					error: W,
					pending: z
				});
			var q = (e = null, t) => {
					switch (t.type) {
						case C.r:
						case C.p:
							return null;
						case C.q: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				G = Object(w.c)({
					api: K,
					result: q
				});
			const Q = {};
			var Y = (e = Q, t) => {
					switch (t.type) {
						case C.n: {
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
						case C.s: {
							const {
								subredditId: r,
								userId: n
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== n)
							}
						}
						case C.l: {
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
				Z = Object(w.c)({
					api: F,
					fetchedTokens: L,
					inContext: T,
					loadMore: M,
					models: D,
					search: G,
					userOrder: Y
				});
			Object(N.a)({
				features: {
					banned: Z
				}
			});
			const X = Object(o.a)(C.o),
				V = Object(o.a)(C.n),
				J = Object(o.a)(C.m),
				$ = (e, t = {}) => async (r, n, {
					apiContext: s
				}) => {
					const a = n(),
						o = t.after || "",
						i = Object(y.e)(e, o),
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
				}, ee = Object(o.a)(C.r), te = Object(o.a)(C.q), re = Object(o.a)(C.p), ne = (e, t) => async (r, n, {
					apiContext: s
				}) => {
					const a = n().subreddits.models[e].name,
						o = {
							username: Object(g.a)(t)
						};
					r(ee());
					const i = await h(s(), a, o);
					i.ok ? r(te(i.body)) : r(re(i.error))
				}, se = Object(o.a)(C.l), ae = Object(o.a)(C.s), oe = (e, t, r) => async (s, o, {
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
							kind: _.b.SuccessMod,
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
							kind: _.b.Error,
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
						kind: _.b.SuccessMod,
						text: n.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = a()(d, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(l.f)({
							kind: _.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, de = (e, t) => async (r, n) => {
					const s = n();
					await Promise.all([(async () => {
						if (!Object(I.b)(u.a.BAN_USER)(s) && !Object(O.P)(s, {
								subredditId: e
							})) {
							const t = Object(O.S)(s, {
								subredditId: e
							});
							await r(Object(c.o)(t.name))
						}
					})(), (async () => {
						const n = Object(j.sb)(s, {
							userName: t
						});
						if (!n) return;
						const a = Object(E.h)(s, {
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
				children: x,
				style: v
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
					isFullWidth: m,
					style: v
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
				i = r("./src/reddit/actions/inContextModeration.ts"),
				d = r("./src/reddit/actions/snoovatarModal.ts"),
				c = r("./src/reddit/actions/subredditModeration/ban.ts"),
				l = r("./src/reddit/actions/tooltip.ts"),
				u = r("./src/reddit/helpers/isPost.ts"),
				m = r("./src/reddit/selectors/bannedUser.ts"),
				p = r("./src/reddit/selectors/commentSelector.ts"),
				b = r("./src/reddit/selectors/experiments/cnc/index.ts"),
				f = r("./src/reddit/selectors/gold/awardIcon.ts"),
				x = r("./src/reddit/selectors/moderatorPermissions.ts"),
				v = r("./src/reddit/selectors/modUserNotes.ts"),
				h = r("./src/reddit/selectors/posts.ts"),
				g = r("./src/reddit/selectors/profile.ts"),
				y = r("./src/reddit/selectors/structuredStyles.ts"),
				_ = r("./src/reddit/selectors/subreddit.ts"),
				I = r("./src/reddit/selectors/tooltip.ts"),
				E = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/selectors/userFlair.ts"),
				j = r("./src/reddit/selectors/userPrefs.ts"),
				C = r("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				N = r("./node_modules/fbt/lib/FbtPublic.js"),
				w = r("./src/config.ts"),
				S = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				P = r("./src/lib/lessComponent.tsx"),
				k = r("./src/lib/prettyPrintNumber/index.ts"),
				F = r("./src/reddit/components/ChatButton/index.tsx"),
				U = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				L = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				B = r("./src/reddit/components/SubscribeButton/index.tsx"),
				T = r("./src/reddit/components/UserIcon/index.tsx"),
				A = r("./src/reddit/endpoints/profile/info.ts"),
				M = r("./src/reddit/helpers/trackers/authorHovercard.ts"),
				R = r("./src/reddit/icons/fonts/Info/index.tsx"),
				H = r("./src/reddit/icons/svgs/Admin/index.tsx"),
				D = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				W = r("./src/reddit/models/Gold/Award.ts"),
				z = r("./src/reddit/models/User/index.ts"),
				K = r("./src/reddit/components/HumanDate/index.tsx"),
				q = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				G = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				Q = r("./src/reddit/actions/modal.ts"),
				Y = r("./src/reddit/constants/modals.ts"),
				Z = r("./src/reddit/components/Hovercards/helpers.ts"),
				X = r("./src/reddit/icons/fonts/index.tsx"),
				V = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				J = r("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				$ = r.n(J);
			const {
				fbt: ee
			} = r("./node_modules/fbt/lib/FbtPublic.js"), te = Object(o.c)({
				hasModMailPermissions: Object(x.b)(V.c.mail),
				isUserBanned: (e, t) => !!Object(m.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(E.sb)(e, {
					userName: t.username
				})
			});
			class re extends s.a.Component {
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
					}, n ? s.a.createElement(Z.a, {
						role: "button",
						onClick: () => {
							a(this.props.user.id), o(M.e(t))
						}
					}, s.a.createElement(X.a, {
						name: "ban",
						isFilled: !0,
						className: $.a.icon
					}), ee._("Unban User", null, {
						hk: "1aASyW"
					})) : s.a.createElement(Z.a, {
						role: "button",
						onClick: () => {
							i(), o(M.a(t))
						}
					}, s.a.createElement(X.a, {
						name: "ban",
						className: $.a.icon
					}), ee._("Ban User", null, {
						hk: "3OhuLx"
					})), r && s.a.createElement(Z.a, {
						role: "button",
						onClick: () => {
							d(), o(M.d(t))
						}
					}, s.a.createElement(X.a, {
						name: "mod_mute",
						className: $.a.icon
					}), ee._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var ne = Object(a.b)(te, (e, {
					username: t,
					subredditId: r,
					contextId: n
				}) => ({
					onUnbanUser: t => e(Object(c.e)(r, t)),
					requestUserBanInfo: () => e(Object(c.c)(r, {
						username: t
					})),
					toggleBanModal: () => {
						e(Object(i.c)({
							username: t,
							subredditId: r,
							contextId: n
						})), e(Object(c.a)(r, t))
					},
					toggleMuteModal: () => {
						e(Object(i.d)({
							username: t,
							subredditId: r,
							contextId: n
						})), e(Object(Q.i)(Y.a.MUTE_USER))
					}
				}))(re),
				se = r("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: ae
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var oe = Object(a.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(se.g)(t.subredditId, t.username))
				}))(e => s.a.createElement(Z.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(M.c(e.contextId))
					}
				}, s.a.createElement(X.a, {
					name: "tag",
					className: $.a.icon
				}), ae._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				ie = r("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				de = r.n(ie);

			function ce() {
				return (ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const le = P.a.wrapped(T.a, "UserIcon", de.a),
				ue = P.a.wrapped(B.a, "SubscribeButton", de.a),
				me = P.a.wrapped(F.b, "ChatButton", de.a),
				pe = P.a.wrapped(D.a, "PremiumIcon", de.a),
				be = P.a.wrapped(S.a, "UserNameLink", de.a),
				fe = P.a.div("UserNameMetaData", de.a),
				xe = P.a.div("MetaDataItem", de.a),
				ve = P.a.div("Bullet", de.a),
				he = P.a.div("UserNameContainer", de.a),
				ge = P.a.div("KarmaGrid", de.a),
				ye = P.a.div("GenericKarma", de.a),
				_e = P.a.a("InfoLink", de.a),
				Ie = P.a.div("KarmaCount", de.a),
				Ee = P.a.div("GenericKarmaLabel", de.a),
				Oe = P.a.div("BannerImage", de.a),
				je = P.a.div("UserContainer", de.a),
				Ce = P.a.div("BottomSpacer", de.a),
				Ne = P.a.div("Container", de.a),
				we = e => s.a.createElement("div", null, s.a.createElement("div", null, s.a.createElement(be, {
					to: `/user/${e.userName}/`
				}, e.title || e.userName), e.user.isEmployee && s.a.createElement(H.a, {
					className: de.a.adminIcon,
					title: N.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && s.a.createElement(S.a, {
					to: "/premium"
				}, s.a.createElement(pe, null))), s.a.createElement(fe, null, s.a.createElement(xe, null, `u/${e.userName}`, s.a.createElement(ve, null, "•")), s.a.createElement(xe, null, (e.user.createdUtc || e.user.created) && s.a.createElement(K.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				Se = e => {
					const {
						user: {
							karma: t
						}
					} = e, r = {
						...A.a,
						...t
					};
					return s.a.createElement(ge, null, s.a.createElement(ye, null, s.a.createElement(Ie, null, Object(k.b)(r.fromPosts)), s.a.createElement(Ee, null, N.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [N.fbt._plural(r.fromPosts)], {
						hk: "3K4oaH"
					}))), s.a.createElement(ye, null, s.a.createElement(Ie, null, Object(k.b)(r.fromComments)), s.a.createElement(Ee, null, N.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [N.fbt._plural(r.fromComments)], {
						hk: "3gKRx9"
					}))), s.a.createElement(ye, null, s.a.createElement(Ie, null, Object(k.b)(r.fromAwardsReceived)), s.a.createElement(Ee, null, N.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [N.fbt._plural(r.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), s.a.createElement(_e, {
						href: W.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(R.a, {
						className: de.a.infoIcon
					})))), s.a.createElement(ye, null, s.a.createElement(Ie, null, Object(k.b)(r.fromAwardsGiven)), s.a.createElement(Ee, null, N.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [N.fbt._plural(r.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), s.a.createElement(_e, {
						href: W.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(R.a, {
						className: de.a.infoIcon
					})))))
				},
				Pe = e => {
					var t, r;
					const {
						className: n,
						contextId: a,
						currentUser: o,
						hideNSFWPref: i,
						hoverId: d,
						isLoggedIn: c,
						onClickSnoovatar: l,
						moderatorPermissions: u,
						prefersReducedAnimations: m,
						profile: p,
						sendEvent: b,
						style: f,
						subredditId: x,
						topAwardIcon: v,
						userName: h,
						user: g,
						userFlair: y,
						isCurrentUserBanned: _,
						userProfileStyles: I,
						acceptChats: E,
						isCommentAuthorBlocked: O
					} = e;
					if (!g) return s.a.createElement(Ne, {
						style: f
					});
					const j = !!o && Object(z.e)(o) === h,
						C = !!(null == o ? void 0 : o.snoovatarFullBodyAsset),
						S = g.accountIcon || `${w.a.assetPath}/img/snoo_user_placeholder.png`,
						P = null == u ? void 0 : u.flair,
						k = null == u ? void 0 : u.access,
						F = (null == y ? void 0 : y.templateIds) && (null === (t = null == y ? void 0 : y.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						L = null === (r = null == y ? void 0 : y.displaySettings) || void 0 === r ? void 0 : r.isEnabled,
						{
							awardedLastMonth: B
						} = g,
						T = !!g.snoovatarFullBodyAsset,
						A = g.isNSFW && i;
					let R;
					return R = T ? !A && I && I.bannerBackgroundImage || void 0 : A ? `${w.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, s.a.createElement(Ne, {
						className: n,
						id: d,
						style: f
					}, !T && R && s.a.createElement(Oe, {
						style: {
							backgroundImage: `url('${R}')`
						}
					}), s.a.createElement(je, null, T ? s.a.createElement(G.a, {
						isHovercard: !0,
						bannerBackgroundImage: R,
						compact: !0,
						currentUserHasSnoovatar: C,
						isEmployee: g.isEmployee,
						isGold: g.isGold,
						isNSFW: g.isNSFW,
						isOwnProfile: j,
						onClickSnoovatar: () => l && l(),
						prefersReducedAnimations: !!m,
						snoovatarUrl: g.snoovatarFullBodyAsset,
						title: null == p ? void 0 : p.title,
						userCreated: g.created,
						username: h,
						url: `/user/${e.userName}/`
					}) : s.a.createElement(he, null, s.a.createElement(le, {
						iconUrl: S,
						isNSFW: g.isNSFW,
						userName: h
					}), s.a.createElement(we, {
						title: null == p ? void 0 : p.title,
						user: g,
						userName: h
					})), s.a.createElement(Se, {
						user: g
					}), B && s.a.createElement(q.a, {
						recentAwardings: B,
						topAwardIcon: v,
						username: h
					}), c && !j && !_ && E && !O && s.a.createElement(me, {
						contextId: a,
						userId: g.id,
						text: N.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), g.hasUserProfile && !_ && !O && !j && g.enableFollowers && s.a.createElement(ue, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(M.g)(e ? "unfollow" : "follow", a),
						isFullWidth: !0,
						small: !0
					})), k && a && !j && x && s.a.createElement(ne, {
						contextId: a,
						subredditId: x,
						sendEvent: b,
						username: h
					}), P && a && F && L && x && s.a.createElement(oe, {
						contextId: a,
						subredditId: x,
						sendEvent: b,
						username: h
					}), s.a.createElement(U.i, {
						contextId: a,
						subredditId: x,
						user: g
					}), !(k || c) && s.a.createElement(Ce, null))
				},
				ke = Object(L.a)(Pe),
				Fe = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return s.a.createElement(ke, ce({
						isOpen: t
					}, e))
				};
			Fe.WrappedComponent = Pe;
			var Ue = Fe;
			const Le = Object(o.c)({
					activeTooltipId: I.a,
					currentUser: E.k,
					isLoggedIn: E.K,
					hideNSFWPref: E.C,
					moderatorPermissions: (e, {
						subredditId: t
					}) => t ? Object(x.m)(e, {
						subredditId: t
					}) : void 0,
					prefersReducedAnimations: j.c,
					profile: (e, {
						userName: t
					}) => Object(g.j)(e, {
						profileName: t
					}),
					topAwardIcon: (e, {
						userName: t
					}) => Object(f.e)(e, {
						userName: t,
						minSize: 32
					}),
					user: E.sb,
					userFlair: (e, {
						subredditId: t
					}) => t ? Object(O.d)(e, {
						subredditId: t
					}) : void 0,
					isCurrentUserBanned: (e, t) => !!Object(_.l)(t) && Object(_.db)(e, t),
					userProfileStyles: (e, t) => Object(y.m)(e, Object(g.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const r = Object(g.h)(e, {
							profileName: t.userName
						});
						return !r || r.acceptChats
					},
					isInModNotesExperiment: (e, {
						subredditId: t
					}) => Object(b.b)(e, t),
					trophyCase: (e, t) => Object(g.r)(e, Object(g.m)(e, t.userName)),
					isNightMode: E.X,
					lastAuthorModNote: (e, t) => {
						if (!t.contextId) return;
						const r = Object(u.a)(t.contextId) ? Object(h.G)(e, {
							postId: t.contextId
						}) : Object(p.b)(e, {
							commentId: t.contextId
						});
						return Object(v.a)(e, null == r ? void 0 : r.authorId, t.subredditId)
					},
					userIsSubscriber: (e, {
						userName: t
					}) => Object(_.eb)(e, {
						identifier: {
							name: t,
							type: "profile"
						}
					}),
					isUserBanned: (e, {
						subredditId: t,
						userName: r
					}) => !!t && !!Object(m.b)(e, {
						subredditId: t,
						username: r
					}),
					totalModNoteCount: (e, t) => {
						if (!t.contextId) return;
						const r = Object(u.a)(t.contextId) ? Object(h.G)(e, {
							postId: t.contextId
						}) : Object(p.b)(e, {
							commentId: t.contextId
						});
						return Object(v.f)(e, null == r ? void 0 : r.authorId, t.subredditId)
					}
				}),
				Be = Object(a.b)(Le, (e, t) => ({
					onClickSnoovatar: () => e(Object(d.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onUnbanUser: r => t.subredditId && e(Object(c.e)(t.subredditId, r)),
					toggleBanModal: () => {
						t.subredditId && t.contextId && (e(Object(i.c)({
							username: t.userName,
							subredditId: t.subredditId,
							contextId: t.contextId
						})), e(Object(c.a)(t.subredditId, t.userName)))
					}
				}));
			t.a = Be(e => s.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: () => !e.isInModNotesExperiment && e.onHideTooltip && e.onHideTooltip()
			}, e.isInModNotesExperiment ? s.a.createElement(C.b, {
				activeTooltipId: e.activeTooltipId,
				contextId: e.contextId,
				currentUser: e.currentUser,
				isLoggedIn: e.isLoggedIn,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				moderatorPermissions: e.moderatorPermissions,
				prefersReducedAnimations: e.prefersReducedAnimations,
				profile: e.profile,
				sendEvent: e.sendEvent,
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
				userIsSubscriber: e.userIsSubscriber,
				isUserBanned: e.isUserBanned,
				toggleBanModal: e.toggleBanModal,
				onUnbanUser: e.onUnbanUser,
				totalModNoteCount: e.totalModNoteCount,
				onHideTooltip: e.onHideTooltip
			}) : s.a.createElement(Ue, {
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
					y = i && i.id,
					_ = i && i.voteState;
				let I = null;
				y || (I = e ? "user_hovercard" : "profile_overview");
				const E = Object(s.useCallback)(() => h(Object(m.g)(e ? "user_hovercard" : "profile_overview", t)), [e, h, t]);
				return a.a.createElement(u.t, {
					onClick: () => {
						r ? (h(m.h), y && _ === b.a.notVoted && g(Object(d.jb)(y))) : E();
						const e = r ? "postify" : "copy";
						g(Object(c.b)({
							clickSource: I,
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
				y = v("particleX", f.a),
				_ = v("particleFloat", f.a),
				I = () => {
					const e = h(y),
						t = h(_),
						r = h(g);
					return Object(o.a)(f.a.particle, e, t, r)
				};
			class E extends s.a.Component {
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
						className: `${I()}`
					})
				}
			}
			var O = E,
				j = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				C = r.n(j),
				N = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
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
				onClickSnoovatar: y,
				onDeleteBanner: _,
				prefersReducedAnimations: I,
				snoovatarUrl: E,
				title: j,
				userCreated: w,
				username: S,
				url: P,
				isHovercard: k
			}) => {
				const F = Object(a.e)(e => !g && !!E && Object(c.g)(e));
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(m.a, {
					bannerBackgroundImage: e,
					editMode: !!n,
					isNSFW: h,
					username: S,
					isDeletingBanner: !!b,
					onDeleteBanner: _
				}), s.a.createElement("div", {
					className: f.a.snoovatarContainer
				}, v && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: f.a.topGlow
				}), s.a.createElement("div", {
					className: f.a.bottomGlow
				}), !I && s.a.createElement(O, null)), s.a.createElement("img", {
					className: Object(o.a)(f.a.snoovatar, {
						[f.a.premiumGlow]: v
					}),
					src: E || void 0
				})), !n && g && s.a.createElement(i.a, {
					to: "/settings/profile",
					className: f.a.snoovatarSettingsLink
				}, s.a.createElement(d.a, {
					name: "settings",
					className: C.a.settingsIcon
				})), s.a.createElement(N.a, {
					isEmployee: x,
					isGold: v,
					isNSFW: h,
					title: j,
					username: S
				}), s.a.createElement(p.a, {
					className: f.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: S,
					userCreated: w,
					url: P
				}), (g || !r && !!E) && s.a.createElement(l.a, {
					compact: t,
					currentUserHasSnoovatar: r,
					isOwnProfile: g,
					onClick: y
				}), F && s.a.createElement(u.a, {
					username: S,
					isHovercard: !!k,
					share: {
						username: S
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
				} = e, [g, y] = Object(o.useState)(!1), _ = d.length > b || r, I = (!_ || g ? d : a()(d, b)).map(e => v({
					item: e
				})), E = () => {
					g || y(!0), g && !r && y(!1), r && f && f()
				};
				return i.a.createElement(c.a, {
					className: t,
					headerButton: s,
					title: h
				}, I, i.a.createElement(m.a, null, i.a.createElement(p.a, null, _ && (() => {
					const e = !g || r && f ? n.fbt._("View More", null, {
						hk: "1RK8uA"
					}) : n.fbt._("View Less", null, {
						hk: "1M72mK"
					});
					return i.a.createElement(l.r, {
						onClick: E
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
				y = r("./src/lib/opener/index.ts");
			const _ = Object(i.c)({
				trophyCase: (e, {
					profileName: t
				}) => Object(x.r)(e, Object(x.m)(e, t))
			}, f);
			t.a = Object(o.b)(_)(({
				trophyCase: e
			}) => 0 === e.length ? null : a.a.createElement(d.a, {
				title: n.fbt._("Trophy Case ({trophyCount})", [n.fbt._param("trophyCount", `${e.length}`)], {
					hk: "mzh3V"
				}),
				items: e,
				renderItem: N
			}));
			const I = g.a.wrapped(m.a, "TrophyItem", h.a),
				E = g.a.div("TrophyIcon", h.a),
				O = g.a.h5("TrophyName", h.a),
				j = g.a.div("TrophyContent", h.a),
				C = g.a.wrapped(c.c, "Description", h.a),
				N = ({
					item: e
				}) => {
					const t = Object(u.a)(),
						r = a.a.createElement("img", {
							src: e.icon,
							title: e.name
						});
					return a.a.createElement(I, {
						key: e.id
					}, a.a.createElement(E, null, e.url ? a.a.createElement("a", {
						target: y.d.BLANK,
						rel: y.c,
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
					}, r) : r), a.a.createElement(j, null, a.a.createElement(O, null, e.name), a.a.createElement(C, null, e.description)))
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
				return _
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
				y = o.a.span("Bold", b.a);

			function _(e) {
				if (e.searchPending) return null;
				const t = Object(c.a)(e.searchTerm);
				return e.noResultsFound ? a.a.createElement(x, null, a.a.createElement(f, null), a.a.createElement(i.b, null, n.fbt._("No results for {searchTerm}", [n.fbt._param("searchTerm", `u/${t}`)], {
					hk: "1nDAlG"
				})), a.a.createElement(d.r, {
					onClick: e.cancelSearch
				}, n.fbt._("See all", null, {
					hk: "3aLS8s"
				}))) : a.a.createElement(v, null, a.a.createElement(h, null, a.a.createElement(g, null, n.fbt._("1 search result for {=[searchTerm]}", [n.fbt._param("=[searchTerm]", a.a.createElement(y, {
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
				return C
			})), r.d(t, "a", (function() {
				return w
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
				y = r("./src/reddit/models/Flair/index.ts"),
				_ = r("./src/reddit/selectors/user.ts"),
				I = r("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				E = r("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				O = r.n(E);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const C = e => a.a.createElement(b.a, {
					className: Object(c.a)(O.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, a.a.createElement("div", {
					className: O.a.container
				}, e.isLoading ? a.a.createElement(v.a, {
					className: O.a.loadingIcon,
					sizePx: 32
				}) : a.a.createElement(a.a.Fragment, null, e.isError ? a.a.createElement("p", {
					className: O.a.errorMsg
				}, e.errorMsg || n.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : a.a.createElement(a.a.Fragment, null, e.communities.map(t => a.a.createElement(w, j({
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
					className: O.a.bottomButton,
					kind: x.b.Button,
					priority: x.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				N = Object(d.c)({
					hideNSFWPref: _.C,
					nightmode: _.X
				}),
				w = Object(o.b)(N)(e => a.a.createElement("div", {
					className: Object(c.a)(O.a.communityItemContainer, {
						[O.a.withBottomFlair]: e.isNSFW
					})
				}, a.a.createElement(g.a, {
					className: O.a.communityItemExpandCenter,
					widthRight: f.t
				}, a.a.createElement("div", {
					className: O.a.iconContainer
				}, e.communityIcon || e.iconUrl ? a.a.createElement("img", {
					className: O.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : a.a.createElement(h.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(c.a)(O.a.defaultCommunityIcon, {
						[O.a.mNightmode]: e.nightmode
					})
				})), a.a.createElement("div", {
					className: O.a.communityDescriptionContainer
				}, a.a.createElement(i.a, {
					className: O.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(I.b)(e.name, e.type),
					to: Object(I.a)(e.name, e.type)
				}, Object(I.b)(e.name, e.type)), a.a.createElement("div", {
					className: O.a.communityInfoContainer
				}, !!e.subscribers && a.a.createElement("p", {
					className: O.a.subscriberCount
				}, n.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [n.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && a.a.createElement(l.b, {
					className: O.a.nsfwFlair,
					flair: {
						type: y.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? a.a.createElement(v.a, {
					className: Object(c.a)(O.a.communityCta, O.a.smallLoadingIcon),
					sizePx: 12
				}) : a.a.createElement(x.t, {
					className: O.a.communityCta,
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
					className: O.a.communityDescription
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
				y = r("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				_ = r.n(y);
			var I = e => {
					const {
						account: t,
						clickEvent: r,
						provider: n
					} = e;
					let a, o = t.username,
						i = "";
					return n !== m.a.Twitter ? null : (a = s.a.createElement(h.a, {
						className: _.a.twitterLogo
					}), i = f.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), o = `@${t.username}`, s.a.createElement(g.a, null, s.a.createElement("span", {
						className: _.a.icon
					}, a), s.a.createElement(x.b, {
						className: _.a.link,
						href: t.link,
						onClick: r
					}, s.a.createElement("div", {
						className: _.a.linkTitle
					}, s.a.createElement("span", {
						className: _.a.name
					}, o), s.a.createElement(v.a, {
						className: _.a.linkIcon
					})), s.a.createElement("div", {
						className: _.a.linkDescription
					}, i))))
				},
				E = r("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				O = r.n(E);
			const {
				fbt: j
			} = r("./node_modules/fbt/lib/FbtPublic.js"), C = Object(o.c)({
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
			}), N = Object(a.b)(C, e => ({
				trackTwitterAccountClicked: t => e((e, r) => u.m(r(), t))
			}), (e, t, r) => ({
				...r,
				...e,
				...t,
				onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
			}));
			t.a = Object(d.c)(N(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: r
				} = e;
				return r ? s.a.createElement(i.a, null, s.a.createElement(c.b, null, s.a.createElement(c.a, null, j._("Connected accounts", null, {
					hk: "1ce9Jz"
				})), r && s.a.createElement("div", {
					className: O.a.account
				}, s.a.createElement(I, {
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
				y = r("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = r("./src/reddit/components/UserNameAndIcon/index.tsx"),
				I = r("./src/reddit/controls/Button/index.tsx"),
				E = r("./src/reddit/helpers/trackers/followers.ts"),
				O = r("./src/reddit/pages/Followers/index.m.less"),
				j = r.n(O);
			var C = e => {
				var t, r, i, c;
				const l = Object(o.d)(),
					u = Object(o.e)(t => Object(v.b)(t, e.userId)),
					m = Object(y.b)(),
					p = Object(s.useCallback)(() => {
						u && (l(Object(d.toggleFollowUser)(e.userId, !u.isFollowed)), m(Object(E.a)(!u.isFollowed)))
					}, [e.userId, l, m, u]);
				return u ? a.a.createElement("div", {
					className: j.a.userRow,
					key: u.id
				}, a.a.createElement(_.a, {
					username: u.name,
					tooltipId: `${u.id}-user-tooltip`,
					sendHoverCardEvent: () => {},
					userIcon: (null === (i = null === (r = null === (t = u.profile) || void 0 === t ? void 0 : t.styles) || void 0 === r ? void 0 : r.legacyIcon) || void 0 === i ? void 0 : i.url) || (null === (c = u.snoovatarIcon) || void 0 === c ? void 0 : c.url)
				}), u.isAcceptingFollowers && a.a.createElement(I.t, {
					className: Object(g.a)(j.a.followButton, {
						[j.a.followingButton]: u.isFollowed
					}),
					onClick: p,
					priority: u.isFollowed ? I.c.Plain : I.c.Tertiary
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
					y = Object(o.e)(v.c),
					_ = Object(o.e)(v.d),
					I = Object(p.fb)(),
					E = Object(o.e)(e => Object(p.E)(e, {
						pageLayer: I
					})),
					O = Object(o.e)(t => Object(h.j)(t, {
						profileName: e.match.params.profileName
					})),
					[N, w] = Object(s.useState)("");
				Object(s.useEffect)(() => {
					N && t(Object(d.followersRequested)({
						...d.DEFAULT_VARIABLES,
						searchQuery: N
					}))
				}, [N, t]);
				const S = Object(s.useCallback)(() => {
					(null == _ ? void 0 : _.hasNextPage) && (null == _ ? void 0 : _.endCursor) && t(Object(d.followersRequested)({
						...d.DEFAULT_VARIABLES,
						after: _.endCursor
					}))
				}, [_, t]);
				if (!E) return a.a.createElement(f.a, null);
				const P = null == O ? void 0 : O.name;
				if (!P) return a.a.createElement(f.b, null);
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
					if (N) {
						const t = g ? Object.values(g)[0] : void 0;
						e = a.a.createElement(u.a, {
							noResultsFound: !t,
							searchTerm: N,
							cancelSearch: () => w(""),
							searchPending: !!y
						}, t && a.a.createElement(C, {
							userId: t.id
						}))
					} else r && (e = a.a.createElement(l.b, {
						loadMoreToken: (null == _ ? void 0 : _.endCursor) || void 0,
						onLoadMore: S
					}, r.map(e => ({
						estHeight: 56,
						id: e,
						render: function() {
							return a.a.createElement(C, {
								userId: e
							})
						}
					}))));
					k = a.a.createElement(a.a.Fragment, null, a.a.createElement(m.b, {
						activeSearchQuery: N,
						onSearch: e => (e => {
							w(e)
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
						subredditOrProfile: O || void 0,
						pageName: n.fbt._("Followers", null, {
							hk: "3DwX8d"
						})
					}),
					content: k,
					sidebar: a.a.createElement(c.a, {
						className: j.a.followersListing,
						profileName: P
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileFollowersPage.3fd818f88b205e07ed5d.js.map