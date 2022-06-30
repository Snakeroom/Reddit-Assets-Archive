// https://www.redditstatic.com/desktop2x/ProfileFollowersPage.9c7942a118329b40acf9.js
// Retrieved at 6/30/2022, 12:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileFollowersPage", "ProfileFollowersAction"], {
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
				return n
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "f", (function() {
				return d
			}));
			const s = "PROFILE_FOLLOWERS_PAGE_LOADED",
				n = "MORE_PROFILE_FOLLOWERS_LOADED",
				o = "PROFILE_FOLLOWERS_SEARCH_LOADED",
				i = "PROFILE_FOLLOWERS_REQUEST_PENDING",
				a = "PROFILE_FOLLOWERS_REQUEST_FAILED",
				d = "FOLLOW_USER_SUCCESS"
		},
		"./src/reddit/actions/pages/followers/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "profileFollowersPageLoaded", (function() {
				return g
			})), r.d(t, "moreProfileFollowersLoaded", (function() {
				return x
			})), r.d(t, "profileFollowersSearchLoaded", (function() {
				return I
			})), r.d(t, "profileFollowersRequestPending", (function() {
				return C
			})), r.d(t, "profileFollowersPageFailed", (function() {
				return O
			})), r.d(t, "DEFAULT_VARIABLES", (function() {
				return y
			})), r.d(t, "followersPageRequested", (function() {
				return w
			})), r.d(t, "followersRequested", (function() {
				return j
			})), r.d(t, "followUserToggled", (function() {
				return _
			})), r.d(t, "toggleFollowUser", (function() {
				return E
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/emailVerificationTooltip.ts"),
				a = (r("./src/reddit/actions/pages/profileOverview/index.ts"), r("./src/reddit/actions/toaster.ts")),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				l = r("./src/redditGQL/operations/ProfileFollowers.json");
			var c = r("./src/reddit/endpoints/subreddit/subscriptions.ts");
			var u = e => {
					var t, r;
					if (!e.identity || !e.identity.followedByRedditorsInfo) return;
					const s = {},
						{
							followedByRedditorsInfo: n,
							redditor: o
						} = e.identity,
						{
							moderatedSubreddits: i
						} = o,
						{
							edges: a,
							pageInfo: d
						} = n;
					if (!a) return;
					s.pageInfo = {
						...d,
						endCursor: null !== (t = d.endCursor) && void 0 !== t ? t : null
					};
					const l = [],
						c = {};
					for (const u of a)
						if ("Redditor" === (null === (r = null == u ? void 0 : u.node) || void 0 === r ? void 0 : r.__typename)) {
							const {
								id: e
							} = u.node;
							l.push(e), c[e] = u.node
						} return s.followerUserIds = l, s.followers = c, s
				},
				m = r("./src/reddit/models/Toast/index.ts"),
				h = r("./src/reddit/selectors/experiments/emailEnablement.ts"),
				p = r("./src/reddit/actions/pages/followers/constants.ts"),
				b = r("./src/lib/initializeClient/installReducer.ts"),
				f = r("./src/reddit/reducers/pages/followers/index.ts"),
				v = r("./src/reddit/selectors/followers.ts");
			Object(b.a)({
				pages: {
					followers: f.a
				}
			});
			const g = Object(o.a)(p.b),
				x = Object(o.a)(p.a),
				I = Object(o.a)(p.e),
				C = Object(o.a)(p.d),
				O = Object(o.a)(p.c),
				y = {
					includeIdentity: !1,
					first: null,
					after: null,
					searchQuery: null
				},
				w = e => async (e, t, r) => {
					let {
						gqlContext: s
					} = r;
					var n;
					const o = [];
					(null === (n = Object(v.a)(t())) || void 0 === n ? void 0 : n.length) || o.push(e(j(y))), await Promise.all(o)
				}, j = e => async (t, r, s) => {
					let {
						gqlContext: n
					} = s;
					const o = !r().user.account,
						i = {
							...y,
							...e,
							includeIdentity: o
						};
					t(C());
					const c = await (async (e, t) => {
						return await Object(d.a)(e, {
							...l,
							variables: t
						})
					})(n(), i);
					if (c.ok && c.body) {
						const {
							data: r
						} = c.body, s = u(r);
						if (!s) return t(Object(a.d)()), void t(O());
						(null == e ? void 0 : e.searchQuery) ? t(I(s)): (null == e ? void 0 : e.after) ? t(x(s)) : (null == e ? void 0 : e.after) || (null == e ? void 0 : e.searchQuery) || t(g(s))
					}
					c.ok || (t(Object(a.d)()), t(O()))
				}, _ = Object(o.a)(p.f), E = (e, t) => async (r, o, d) => {
					let {
						apiContext: l
					} = d;
					var u, p;
					const b = o(),
						f = null === (p = null === (u = b.pages) || void 0 === u ? void 0 : u.followers) || void 0 === p ? void 0 : p.models[e];
					if (!f) return;
					r(_({
						userId: e,
						isFollowed: t
					}));
					const v = f.name;
					if ((await Object(c.c)(l(), {
							subredditNames: [`${n.kc}${f.name}`],
							subscribe: t
						})).ok) {
						r(_({
							userId: e,
							isFollowed: t
						}));
						const n = s.fbt._("Successfully followed {userName}", [s.fbt._param("userName", v)], {
								hk: "nYw1y"
							}),
							o = s.fbt._("Successfully unfollowed {userName}", [s.fbt._param("userName", v)], {
								hk: "1ki3kp"
							});
						r(Object(a.f)({
							text: t ? n : o
						})), Object(h.a)(b) && r(Object(i.c)("user_follow"))
					} else {
						const n = s.fbt._("Something went wrong", null, {
							hk: "3i6szH"
						});
						r(_({
							userId: e,
							isFollowed: !t
						})), r(Object(a.f)(Object(a.e)(n, m.b.Error)))
					}
				}
		},
		"./src/reddit/actions/pages/profileOverview/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "profileOverviewConversationsPending", (function() {
				return je
			})), r.d(t, "profileOverviewConversationsLoaded", (function() {
				return _e
			})), r.d(t, "profileOverviewConversationsFailed", (function() {
				return Ee
			})), r.d(t, "profileOverviewChronoPending", (function() {
				return Pe
			})), r.d(t, "profileOverviewChronoLoaded", (function() {
				return Se
			})), r.d(t, "profileOverviewChronoFailed", (function() {
				return Ne
			})), r.d(t, "profileOverviewConversationsRequested", (function() {
				return ke
			})), r.d(t, "profileOverviewRequested", (function() {
				return Te
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/pick.js"),
				n = r.n(s),
				o = r("./src/lib/constants/index.ts"),
				i = r("./src/reddit/actions/moderatingSubreddits.ts"),
				a = r("./src/reddit/actions/pages/profileShared.ts"),
				d = r("./src/reddit/actions/subreddit.ts"),
				l = r("./src/config.ts"),
				c = r("./src/lib/addAllowQuarantinedParam/index.ts"),
				u = r("./src/lib/makeApiRequest/index.ts"),
				m = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				h = r("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				p = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var b = r("./src/reddit/helpers/post/index.ts"),
				f = r("./src/reddit/constants/postLayout.ts"),
				v = r("./src/reddit/constants/parameters.ts"),
				g = r("./src/reddit/contexts/PageLayer/index.tsx"),
				x = r("./src/reddit/selectors/listings.ts"),
				I = r("./src/reddit/selectors/profile.ts"),
				C = r("./src/reddit/selectors/user.ts"),
				O = r("./src/lib/makeActionCreator/index.ts"),
				y = r("./src/reddit/actions/changeUsername.ts"),
				w = r("./src/reddit/actions/contentGate.ts"),
				j = r("./src/reddit/actions/externalAccount.ts"),
				_ = r("./src/reddit/actions/gold/powerups.ts"),
				E = r("./src/reddit/actions/pinnedPost.ts"),
				P = r("./src/reddit/actions/platform.ts"),
				S = r("./src/reddit/actions/profile/index.ts"),
				N = r("./src/reddit/actions/trophyCase.ts"),
				k = r("./src/reddit/constants/errors.ts"),
				T = r("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				R = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				U = r("./src/reddit/actions/pages/profileOverview/constants.ts"),
				F = r("./src/lib/initializeClient/installReducer.ts"),
				H = r("./node_modules/redux/es/redux.js"),
				A = r("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const M = {};
			var L = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case U.c:
					case U.b:
					case A.c:
					case A.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case U.a:
					case A.a: {
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
			const B = {};
			var W = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case U.c:
						case A.c: {
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
						case A.b:
						case A.a: {
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
				V = Object(H.c)({
					error: L,
					pending: W
				});
			const D = {};
			var z = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
					case A.b: {
						const {
							key: r,
							fetchedToken: s
						} = t.payload, n = e[r];
						return {
							...e,
							[r]: {
								...n,
								[s]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const K = {};
			var q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case U.b:
						case A.b: {
							const {
								key: r,
								overviewIds: s
							} = t.payload, n = e[r] || [];
							return {
								...e,
								[r]: [...n, ...s]
							}
						}
						default:
							return e
					}
				},
				G = r("./src/lib/omitKey/index.ts");
			const Q = {};
			var Y = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case U.b:
						case A.b: {
							const {
								key: r,
								dist: s,
								token: n
							} = t.payload;
							return n ? {
								...e,
								[r]: {
									dist: s,
									token: n
								}
							} : Object(G.a)(e, r)
						}
						default:
							return e
					}
				},
				Z = Object(H.c)({
					api: V,
					fetchedTokens: z,
					ids: q,
					loadMore: Y
				});
			const X = {};
			var J = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : X,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			const $ = {};
			var ee = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $,
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				te = Object(H.c)({
					error: J,
					pending: ee
				}),
				re = r("./src/reddit/actions/profileConversations.ts");
			const se = {};
			var ne = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : se,
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
			var ie = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oe,
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
				ae = Object(H.c)({
					error: ne,
					pending: ie
				});
			const de = {};
			var le = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : de,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case U.e:
						case re.b:
						case re.e:
							return {
								...e, ...t.payload.extraComments
							};
						default:
							return e
					}
				},
				ce = Object(H.c)({
					api: ae,
					models: le
				}),
				ue = r("./node_modules/lodash/mapValues.js"),
				me = r.n(ue),
				he = r("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				pe = r("./src/reddit/constants/comments.ts");
			const be = {};

			function fe(e) {
				const t = e;
				return me()(t, e => {
					let {
						depth: t,
						next: r,
						prev: s
					} = e;
					return {
						depth: t,
						next: r,
						prev: s
					}
				})
			}
			const ve = (e, t, r) => {
				const s = {};
				for (const n in t) {
					const e = t[n],
						r = e.postId;
					s.hasOwnProperty(r) ? s[r] = {
						...s[r],
						[n]: e
					} : s[r] = {
						[n]: e
					}
				}
				for (const n in r) {
					const e = r[n],
						t = e.postId;
					s.hasOwnProperty(t) ? s[t] = {
						...s[t],
						[n]: e
					} : s[t] = {
						[t]: e
					}
				}
				return s
			};
			var ge = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : be,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case U.e:
					case re.e: {
						const {
							comments: r,
							extraComments: s,
							postIds: n,
							profileName: o
						} = t.payload, i = ve(n, r, s), a = {};
						for (const e of n) {
							a[Object(he.a)(e, o)] = i.hasOwnProperty(e) ? fe(i[e]) : {}
						}
						return {
							...e,
							...a
						}
					}
					case re.b: {
						const {
							comments: r,
							commentLists: s,
							extraComments: n,
							extraCommentsId: o,
							postIds: i,
							profileName: a
						} = t.payload;
						if (0 === i.length) {
							const t = Object.keys(e).find(t => void 0 !== e[t][o]);
							if (!t) return e;
							const r = {
									...e[t]
								} [o].prev,
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
						const d = i[0],
							l = fe(ve(i, r, n)[d]),
							c = Object(he.a)(d, a),
							u = {
								...e[c]
							},
							m = u[o].prev,
							h = m && m.id || "",
							p = s[d].head,
							b = p && p.id || "",
							f = {
								id: b,
								type: pe.a.Comment
							},
							v = {
								...u,
								[h]: {
									...u[h],
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
			var Ie = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case U.e:
					case re.e: {
						const {
							commentLists: r,
							postIds: s,
							profileName: n
						} = t.payload, o = {};
						for (const e of s) {
							o[Object(he.a)(e, n)] = r[e] && r[e].head ? r[e].head.id : null
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
			const Ce = {};
			var Oe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ce,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case U.e:
						case re.e: {
							const {
								postIds: r,
								profileName: s
							} = t.payload, n = {};
							for (const e of r) {
								n[Object(he.a)(e, s)] = e
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
				ye = Object(H.c)({
					api: te,
					extraComments: ce,
					keyToCommentThreadLinkSets: ge,
					keyToHeadCommentId: Ie,
					keyToPostId: Oe
				}),
				we = Object(H.c)({
					chrono: Z,
					conversations: ye
				});
			Object(F.a)({
				pages: {
					profileOverview: we
				}
			});
			const je = Object(O.a)(U.f),
				_e = Object(O.a)(U.e),
				Ee = Object(O.a)(U.d),
				Pe = Object(O.a)(U.c),
				Se = Object(O.a)(U.b),
				Ne = Object(O.a)(U.a),
				ke = (e, t, r, s) => async (s, n, i) => {
					const a = n(),
						d = !!a.listings.postOrder.ids[e],
						f = !!Object(x.c)(a, {
							listingKey: e
						});
					if (!!Object(x.d)(a, {
							listingKey: e
						}) || d && !f) return;
					s(je({
						key: e
					}));
					const v = await Object(R.a)("profile", () => ((e, t, r) => Object(u.a)(e, {
							data: r,
							endpoint: Object(m.a)(Object(c.a)(Object(h.a)(Object(p.a)(`${l.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
							traceRequestName: "get_profile_conversations",
							method: o.jb.GET
						}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
							...e,
							body: {
								...e.body,
								pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
							}
						} : e))(i.apiContext(), t, r)),
						g = v.body;
					await Object(b.a)(i.gqlContext, g.posts).then(e => g.posts = e);
					const {
						pinned: C,
						postIds: O
					} = g;
					if (v.ok) {
						s(_e({
							key: e,
							meta: a.meta,
							profileName: t,
							...g,
							postIds: O
						}));
						const r = Object(I.m)(n(), t);
						s(Object(E.h)({
							profileId: r,
							pinned: C
						}))
					} else s(Ee({
						account: v.body.data ? v.body.data.account : null,
						error: v.body.reason ? {
							type: v.body.reason
						} : v.error,
						key: e
					})), v.body.reason === k.a.DeletedProfile && s(Object(w.s)({
						profileName: t
					})), s(Object(P.n)(v.status))
				}, Te = e => async (t, r, s) => {
					const {
						queryParams: l,
						params: c
					} = e, {
						sort: u,
						t: m
					} = Object(a.a)(r(), l), {
						profileName: h
					} = c;
					let p = !1;
					const b = f.e[Object(g.S)(r(), {})],
						x = h.toLowerCase(),
						O = {
							...n()(e.queryParams, v.k),
							sort: u,
							layout: b,
							t: m
						},
						w = [t(S.d(x))],
						E = Object(T.a)(x, o.ub, u, e.queryParams);
					if (r().listings.postOrder.ids[E] && !r().listings.postOrder.api.error[E] ? p = !0 : w.push(t(ke(E, x, O, !0))), w.push(t(Object(i.b)())), await Promise.all(w), p) return;
					const k = r();
					if (!k.platform.currentPage) return;
					if (200 !== k.platform.currentPage.status) return;
					const R = Object(I.m)(r(), x),
						U = Object(C.Ab)(k, {
							userName: h
						}).id;
					t(P.m({
						title: Re(r(), h)
					})), Object(C.S)(k) && Object(C.W)(k, h) && t(Object(y.f)());
					const F = [t(Object(d.q)()), t(N.b(x, R)), t(S.b(x)), t(j.o(h)), t(S.i(h)), t(_.j(h, U))];
					await Promise.all(F)
				}, Re = (e, t) => Object(I.q)(e, {
					profileName: t
				})
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return $
			})), r.d(t, "d", (function() {
				return se
			})), r.d(t, "b", (function() {
				return ie
			})), r.d(t, "e", (function() {
				return ae
			})), r.d(t, "a", (function() {
				return de
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/get.js"),
				o = r.n(n),
				i = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/apiRequestState.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/actions/subreddit.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/constants/modals.ts"),
				m = r("./src/lib/constants/index.ts"),
				h = r("./src/lib/makeApiRequest/index.ts"),
				p = r("./src/lib/omitHeaders/index.ts"),
				b = r("./src/reddit/constants/headers.ts"),
				f = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				v = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const g = (e, t, r) => Object(h.a)(Object(p.a)(e, [b.a]), {
				endpoint: Object(f.a)(Object(v.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: m.jb.GET,
				data: r
			});
			var x = r("./src/reddit/helpers/normalizeUsername/index.tsx"),
				I = r("./src/reddit/models/SubredditModeration/index.ts"),
				C = r("./src/reddit/models/Toast/index.ts"),
				O = r("./src/reddit/selectors/activeModalId.ts"),
				y = r("./src/reddit/selectors/bannedUser.ts"),
				w = r("./src/reddit/selectors/subreddit.ts"),
				j = r("./src/reddit/selectors/user.ts"),
				_ = r("./src/reddit/actions/subredditModeration/constants.ts"),
				E = r("./src/lib/initializeClient/installReducer.ts"),
				P = r("./node_modules/redux/es/redux.js");
			var S = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _.s:
					case _.r:
						return null;
					case _.q:
						return t.payload;
					default:
						return e
				}
			};
			const N = {};
			var k = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _.s: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, n = Object(I.e)(r, s);
							return {
								...e,
								[n]: !0
							}
						}
						case _.r:
						case _.q: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, n = Object(I.e)(r, s);
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				T = Object(P.c)({
					error: S,
					pending: k
				});
			const R = {};
			var U = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _.r: {
							const {
								fetchedToken: r,
								subredditId: s
							} = t.payload, n = Object(I.e)(s, r);
							return {
								...e,
								[n]: !0
							}
						}
						default:
							return e
					}
				},
				F = r("./src/reddit/actions/inContextModeration.ts");
			var H = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case F.a:
						return t.payload;
					default:
						return e
				}
			};
			const A = {};
			var M = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _.r: {
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
				L = r("./node_modules/icepick/icepick.js");
			const B = {};
			var W = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _.p:
					case _.r: {
						const {
							subredditId: r,
							bannedUsers: s
						} = t.payload;
						return Object(L.merge)(e, {
							[r]: s
						})
					}
					case _.w: {
						const {
							subredditId: r,
							userId: s
						} = t.payload;
						return Object(L.unsetIn)(e, [r, s])
					}
					default:
						return e
				}
			};
			var V = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _.v:
					case _.u:
						return null;
					case _.t:
						return t.payload;
					default:
						return e
				}
			};
			var D = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _.v:
							return !0;
						case _.u:
						case _.t:
							return !1;
						default:
							return e
					}
				},
				z = Object(P.c)({
					error: V,
					pending: D
				});
			var K = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _.v:
						case _.t:
							return null;
						case _.u: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				q = Object(P.c)({
					api: z,
					result: K
				});
			const G = {};
			var Q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _.r: {
							const {
								subredditId: r,
								bannedUserIds: s
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: [...e[r], ...s]
							} : {
								...e,
								[r]: s
							}
						}
						case _.w: {
							const {
								subredditId: r,
								userId: s
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== s)
							}
						}
						case _.p: {
							const {
								subredditId: r,
								bannedUserIds: s
							} = t.payload, n = s[0];
							return n && e[r] && -1 === e[r].indexOf(n) ? {
								[r]: [n, ...e[r]]
							} : e
						}
						default:
							return e
					}
				},
				Y = Object(P.c)({
					api: T,
					fetchedTokens: U,
					inContext: H,
					loadMore: M,
					models: W,
					search: q,
					userOrder: Q
				});
			Object(E.a)({
				features: {
					banned: Y
				}
			});
			const Z = Object(i.a)(_.s),
				X = Object(i.a)(_.r),
				J = Object(i.a)(_.q),
				$ = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (r, s, n) => {
						let {
							apiContext: o
						} = n;
						const i = s(),
							a = t.after || "",
							d = Object(I.e)(e, a),
							l = i.features.banned.fetchedTokens[d];
						if (i.features.banned.api.pending[d] || l) return;
						r(Z({
							subredditId: e,
							fetchedToken: a
						}));
						const c = i.subreddits.models[e].name,
							u = await g(o(), c, t);
						u.ok ? r(X({
							...u.body,
							fetchedToken: a
						})) : r(J({
							subredditId: e,
							fetchedToken: a
						}))
					}
				},
				ee = Object(i.a)(_.v),
				te = Object(i.a)(_.u),
				re = Object(i.a)(_.t),
				se = (e, t) => async (r, s, n) => {
					let {
						apiContext: o
					} = n;
					const i = s().subreddits.models[e].name,
						a = {
							username: Object(x.a)(t)
						};
					r(ee());
					const d = await g(o(), i, a);
					d.ok ? r(te(d.body)) : r(re(d.error))
				}, ne = Object(i.a)(_.p), oe = Object(i.a)(_.w), ie = (e, t, r) => async (n, i, d) => {
					let {
						apiContext: l
					} = d;
					const u = i(),
						f = u.subreddits.models[e].url,
						v = u.subreddits.models[e].name;
					t.username = Object(x.a)(t.username), n(Object(a.h)(r));
					const I = await ((e, t, r) => Object(h.a)(Object(p.a)(e, [b.a]), {
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
					}))(l(), f, t);
					if (I.ok) {
						n(Object(a.e)(r));
						const e = {
							username: t.username
						};
						n(Object(c.f)({
							kind: C.b.SuccessMod,
							text: s.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const o = await g(l(), v, e);
						o.ok && n(ne(o.body))
					} else {
						n(Object(a.f)(r, I.error));
						const e = o()(I, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(c.f)({
							kind: C.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ae = (e, t) => async (r, n, i) => {
					let {
						apiContext: a
					} = i;
					const d = n().subreddits.models[e].url,
						l = await ((e, t, r) => Object(h.a)(Object(p.a)(e, [b.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: m.jb.POST,
							data: {
								api_type: "json",
								id: r,
								type: "banned"
							}
						}))(a(), d, t);
					if (l.ok) r(oe({
						subredditId: e,
						userId: t
					})), r(Object(c.f)({
						kind: C.b.SuccessMod,
						text: s.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = o()(l, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(c.f)({
							kind: C.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, de = (e, t) => async (r, s) => {
					const n = s();
					await Promise.all([(async () => {
						if (!Object(O.b)(u.a.BAN_USER)(n) && !Object(w.R)(n, {
								subredditId: e
							})) {
							const t = Object(w.U)(n, {
								subredditId: e
							});
							await r(Object(l.o)(t.name))
						}
					})(), (async () => {
						const s = Object(j.Ab)(n, {
							userName: t
						});
						if (!s) return;
						const o = Object(y.h)(n, {
							subredditId: e
						});
						o && o[s.id] || await r($(e, {
							username: t
						}))
					})()]), r(Object(d.i)(u.a.BAN_USER))
				}
		},
		"./src/reddit/components/Admin/index.m.less": function(e, t, r) {
			e.exports = {
				admin: "_2xNNl6uDn-la14kNSY-HlG",
				adminIcon: "_39nUIeq_tsYlKJUODkYXBu"
			}
		},
		"./src/reddit/components/Admin/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/components/Admin/index.m.less"),
				d = r.n(a),
				l = r("./src/lib/constants/icons.ts"),
				c = r("./src/reddit/icons/fonts/index.tsx"),
				u = r("./src/reddit/constants/experiments.ts"),
				m = r("./src/reddit/helpers/chooseVariant/index.ts");
			const h = e => Object(m.c)(e, {
				experimentEligibilitySelector: m.a,
				experimentName: u.a
			});
			t.a = () => {
				return Object(i.e)(h) ? o.a.createElement("span", {
					className: d.a.admin
				}, s.fbt._("Admin", null, {
					hk: "3MyAnD"
				})) : o.a.createElement(c.a, {
					name: l.a.admin,
					isFilled: !0,
					className: d.a.adminIcon,
					title: s.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				})
			}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var s, n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/actions/chat/toggle.ts"),
				d = r("./src/reddit/components/TrackingHelper/index.tsx"),
				l = r("./src/reddit/controls/Button/index.tsx"),
				c = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(s || (s = {}));
			const u = e => {
				let {
					onStartChat: t,
					text: r,
					className: n,
					sendEvent: i,
					contextId: a,
					priority: d,
					Icon: u,
					redditStyle: m,
					isFullWidth: h,
					eventSource: p,
					onClick: b,
					onAddUserToQuickReplyList: f,
					children: v,
					style: g
				} = e;
				return o.a.createElement(l.t, {
					onClick: e => {
						if (b && b(e), t(), p === s.awardNotification) return f();
						i(Object(c.b)(a))
					},
					className: n,
					text: r,
					priority: d,
					Icon: u,
					redditStyle: m,
					isFullWidth: h,
					style: g
				}, v)
			};
			u.displayName = "ChatButton";
			const m = Object(i.b)(null, (e, t) => {
				let {
					contextId: r,
					userId: s
				} = t;
				return {
					onStartChat: () => {
						e(Object(a.b)(s, r))
					},
					onAddUserToQuickReplyList: () => {
						e(Object(a.a)(s))
					}
				}
			});
			t.b = m(Object(d.c)(u))
		},
		"./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(s.a)({
				resolved: {},
				chunkName: () => "NftProfileUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => Promise.all([r.e(1), r.e("NftProfileUnit")]).then(r.bind(null, "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = n
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
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/controls/ImageInput/index.tsx"),
				d = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = r("./src/reddit/icons/fonts/index.tsx"),
				c = r("./src/reddit/models/ApiRequestState/index.ts"),
				u = r("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				m = r("./src/reddit/components/EditableImage/index.m.less"),
				h = r.n(m);
			const {
				fbt: p
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					altText: t,
					children: r,
					className: s,
					isProfileCard: m,
					isLoading: p,
					imageUrl: b,
					onFileSelected: f
				} = e;
				const v = Object(o.e)(u.a);
				return n.a.createElement("div", {
					className: Object(i.a)(h.a.Container, s)
				}, n.a.createElement("label", {
					className: h.a.HitBox
				}, n.a.createElement("span", {
					className: h.a.ImageContainer,
					role: "presentation"
				}, b ? n.a.createElement("img", {
					alt: t,
					className: h.a.Image,
					src: b
				}) : r), n.a.createElement(a.a, {
					className: h.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(c.b)();
						f(e, t)
					},
					isPending: v ? p : void 0
				}), !p && n.a.createElement("div", {
					className: Object(i.a)(h.a.EditButton, {
						[h.a.profileCard]: m
					})
				}, n.a.createElement(l.a, {
					name: "add_media",
					className: h.a.EditIcon
				}))), p && n.a.createElement(d.a, {
					className: h.a.LoadingIcon,
					sizePx: 80
				}))
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/actions/snoovatarModal.ts"),
				d = r("./src/reddit/actions/tooltip.ts"),
				l = r("./src/reddit/helpers/isPost.ts"),
				c = r("./src/reddit/selectors/commentSelector.ts"),
				u = r("./src/reddit/selectors/gold/awardIcon.ts"),
				m = r("./src/reddit/selectors/moderatorPermissions.ts"),
				h = r("./src/reddit/selectors/modUserNotes.ts"),
				p = r("./src/reddit/selectors/posts.ts"),
				b = r("./src/reddit/selectors/profile.ts"),
				f = r("./src/reddit/selectors/structuredStyles.ts"),
				v = r("./src/reddit/selectors/subreddit.ts"),
				g = r("./src/reddit/selectors/tooltip.ts"),
				x = r("./src/reddit/selectors/user.ts"),
				I = r("./src/reddit/selectors/userFlair.ts"),
				C = r("./src/reddit/selectors/userPrefs.ts"),
				O = r("./src/reddit/selectors/platform.ts"),
				y = r("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				w = r("./node_modules/fbt/lib/FbtPublic.js"),
				j = r("./src/config.ts"),
				_ = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				E = r("./src/lib/lessComponent.tsx"),
				P = r("./src/lib/prettyPrintNumber/index.ts"),
				S = r("./src/reddit/components/Admin/index.tsx"),
				N = r("./src/reddit/components/ChatButton/index.tsx"),
				k = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				T = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				R = r("./src/reddit/components/SubscribeButton/index.tsx"),
				U = r("./src/reddit/components/UserIcon/index.tsx"),
				F = r("./src/reddit/controls/Button/index.tsx"),
				H = r("./src/reddit/endpoints/profile/info.ts"),
				A = r("./src/reddit/helpers/trackers/authorHovercard.ts"),
				M = r("./src/reddit/icons/fonts/Info/index.tsx"),
				L = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				B = r("./src/reddit/models/Gold/Award.ts"),
				W = r("./src/reddit/models/User/index.ts"),
				V = r("./src/reddit/components/HumanDate/index.tsx"),
				D = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				z = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				K = r("./src/reddit/actions/inContextModeration.ts"),
				q = r("./src/reddit/actions/modal.ts"),
				G = r("./src/reddit/actions/subredditModeration/ban.ts"),
				Q = r("./src/reddit/constants/modals.ts"),
				Y = r("./src/reddit/components/Hovercards/helpers.ts"),
				Z = r("./src/reddit/icons/fonts/index.tsx"),
				X = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				J = r("./src/reddit/selectors/bannedUser.ts"),
				$ = r("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				ee = r.n($);
			const {
				fbt: te
			} = r("./node_modules/fbt/lib/FbtPublic.js"), re = Object(i.c)({
				hasModMailPermissions: Object(m.b)(X.c.mail),
				isUserBanned: (e, t) => !!Object(J.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(x.Ab)(e, {
					userName: t.username
				})
			});
			class se extends n.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: r,
						isUserBanned: s,
						onUnbanUser: o,
						sendEvent: i,
						toggleBanModal: a,
						toggleMuteModal: d
					} = this.props;
					return n.a.createElement("div", {
						className: e
					}, s ? n.a.createElement(Y.a, {
						role: "button",
						onClick: () => {
							o(this.props.user.id), i(A.e(t))
						}
					}, n.a.createElement(Z.a, {
						name: "ban",
						isFilled: !0,
						className: ee.a.icon
					}), te._("Unban User", null, {
						hk: "1aASyW"
					})) : n.a.createElement(Y.a, {
						role: "button",
						onClick: () => {
							a(), i(A.a(t))
						}
					}, n.a.createElement(Z.a, {
						name: "ban",
						className: ee.a.icon
					}), te._("Ban User", null, {
						hk: "3OhuLx"
					})), r && n.a.createElement(Y.a, {
						role: "button",
						onClick: () => {
							d(), i(A.d(t))
						}
					}, n.a.createElement(Z.a, {
						name: "mod_mute",
						className: ee.a.icon
					}), te._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var ne = Object(o.b)(re, (e, t) => {
					let {
						username: r,
						subredditId: s,
						contextId: n
					} = t;
					return {
						onUnbanUser: t => e(Object(G.e)(s, t)),
						requestUserBanInfo: () => e(Object(G.c)(s, {
							username: r
						})),
						toggleBanModal: () => {
							e(Object(K.c)({
								username: r,
								subredditId: s,
								contextId: n
							})), e(Object(G.a)(s, r))
						},
						toggleMuteModal: () => {
							e(Object(K.d)({
								username: r,
								subredditId: s,
								contextId: n
							})), e(Object(q.i)(Q.a.MUTE_USER))
						}
					}
				})(se),
				oe = r("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: ie
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var ae = Object(o.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(oe.g)(t.subredditId, t.username))
				}))(e => n.a.createElement(Y.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(A.c(e.contextId))
					}
				}, n.a.createElement(Z.a, {
					name: "tag",
					className: ee.a.icon
				}), ie._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				de = r("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				le = r.n(de);

			function ce() {
				return (ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ue = E.a.wrapped(U.a, "UserIcon", le.a),
				me = E.a.wrapped(R.a, "SubscribeButton", le.a),
				he = E.a.wrapped(N.b, "ChatButton", le.a),
				pe = E.a.wrapped(L.a, "PremiumIcon", le.a),
				be = E.a.wrapped(_.a, "UserNameLink", le.a),
				fe = E.a.div("UserNameMetaData", le.a),
				ve = E.a.div("MetaDataItem", le.a),
				ge = E.a.div("Bullet", le.a),
				xe = E.a.div("UserNameContainer", le.a),
				Ie = E.a.div("KarmaGrid", le.a),
				Ce = E.a.div("GenericKarma", le.a),
				Oe = E.a.a("InfoLink", le.a),
				ye = E.a.div("KarmaCount", le.a),
				we = E.a.div("GenericKarmaLabel", le.a),
				je = E.a.div("BannerImage", le.a),
				_e = E.a.div("UserContainer", le.a),
				Ee = E.a.div("BottomSpacer", le.a),
				Pe = E.a.div("Container", le.a),
				Se = e => n.a.createElement("div", null, n.a.createElement("div", null, n.a.createElement(be, {
					to: `/user/${e.userName}/`
				}, e.title || e.userName), e.user.isGold && n.a.createElement(_.a, {
					to: "/premium"
				}, n.a.createElement(pe, null)), e.user.isEmployee && n.a.createElement(S.a, null)), n.a.createElement(fe, null, n.a.createElement(ve, null, `u/${e.userName}`, n.a.createElement(ge, null, "•")), n.a.createElement(ve, null, (e.user.createdUtc || e.user.created) && n.a.createElement(V.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				Ne = e => {
					const {
						user: {
							karma: t
						}
					} = e, r = {
						...H.a,
						...t
					};
					return n.a.createElement(Ie, null, n.a.createElement(Ce, null, n.a.createElement(ye, null, Object(P.b)(r.fromPosts)), n.a.createElement(we, null, w.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [w.fbt._plural(r.fromPosts)], {
						hk: "3K4oaH"
					}))), n.a.createElement(Ce, null, n.a.createElement(ye, null, Object(P.b)(r.fromComments)), n.a.createElement(we, null, w.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [w.fbt._plural(r.fromComments)], {
						hk: "3gKRx9"
					}))), n.a.createElement(Ce, null, n.a.createElement(ye, null, Object(P.b)(r.fromAwardsReceived)), n.a.createElement(we, null, w.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [w.fbt._plural(r.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), n.a.createElement(Oe, {
						href: B.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.a.createElement(M.a, {
						className: le.a.infoIcon
					})))), n.a.createElement(Ce, null, n.a.createElement(ye, null, Object(P.b)(r.fromAwardsGiven)), n.a.createElement(we, null, w.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [w.fbt._plural(r.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), n.a.createElement(Oe, {
						href: B.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.a.createElement(M.a, {
						className: le.a.infoIcon
					})))))
				},
				ke = e => {
					var t, r;
					const {
						className: s,
						contextId: o,
						currentUser: i,
						hideNSFWPref: a,
						hoverId: d,
						isLoggedIn: l,
						onClickSnoovatar: c,
						moderatorPermissions: u,
						prefersReducedAnimations: m,
						profile: h,
						sendEvent: p,
						style: b,
						subredditId: f,
						topAwardIcon: v,
						userName: g,
						user: x,
						userFlair: I,
						isCurrentUserBanned: C,
						userProfileStyles: O,
						acceptChats: y,
						isCommentAuthorBlocked: _
					} = e;
					if (!x) return n.a.createElement(Pe, {
						style: b
					});
					const E = !!i && Object(W.e)(i) === g,
						P = !!(null == i ? void 0 : i.snoovatarFullBodyAsset),
						S = x.accountIcon || `${j.a.assetPath}/img/snoo_user_placeholder.png`,
						N = null == u ? void 0 : u.flair,
						T = null == u ? void 0 : u.access,
						R = (null == I ? void 0 : I.templateIds) && (null === (t = null == I ? void 0 : I.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						U = null === (r = null == I ? void 0 : I.displaySettings) || void 0 === r ? void 0 : r.isEnabled,
						{
							awardedLastMonth: H
						} = x,
						M = !!x.snoovatarFullBodyAsset,
						L = x.isNSFW && a;
					let B;
					return B = M ? !L && O && O.bannerBackgroundImage || void 0 : L ? `${j.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, n.a.createElement(Pe, {
						className: s,
						id: d,
						style: b
					}, !M && B && n.a.createElement(je, {
						style: {
							backgroundImage: `url('${B}')`
						}
					}), n.a.createElement(_e, null, M ? n.a.createElement(z.a, {
						isHovercard: !0,
						bannerBackgroundImage: B,
						compact: !0,
						currentUserHasSnoovatar: P,
						isEmployee: x.isEmployee,
						isGold: x.isGold,
						isNSFW: x.isNSFW,
						isOwnProfile: E,
						onClickSnoovatar: () => c && c(),
						prefersReducedAnimations: !!m,
						snoovatarUrl: x.snoovatarFullBodyAsset,
						title: null == h ? void 0 : h.title,
						userCreated: x.created,
						username: g,
						url: `/user/${e.userName}/`
					}) : n.a.createElement(xe, null, n.a.createElement(ue, {
						iconUrl: S,
						isNSFW: x.isNSFW,
						userName: g
					}), n.a.createElement(Se, {
						title: null == h ? void 0 : h.title,
						user: x,
						userName: g
					})), n.a.createElement(Ne, {
						user: x
					}), H && n.a.createElement(D.a, {
						recentAwardings: H,
						topAwardIcon: v,
						username: g
					}), l && !E && !C && y && !_ && n.a.createElement(he, {
						contextId: o,
						priority: F.c.Secondary,
						userId: x.id,
						text: w.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), x.hasUserProfile && !C && !_ && !E && x.enableFollowers && n.a.createElement(me, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(A.h)(e ? "unfollow" : "follow", o),
						isFullWidth: !0,
						small: !0
					})), T && o && !E && f && n.a.createElement(ne, {
						contextId: o,
						subredditId: f,
						sendEvent: p,
						username: g
					}), N && o && R && U && f && n.a.createElement(ae, {
						contextId: o,
						subredditId: f,
						sendEvent: p,
						username: g
					}), n.a.createElement(k.i, {
						contextId: o,
						subredditId: f,
						user: x
					}), !(T || l) && n.a.createElement(Ee, null))
				},
				Te = Object(T.a)(ke),
				Re = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return n.a.createElement(Te, ce({
						isOpen: t
					}, e))
				};
			Re.WrappedComponent = ke;
			var Ue = Re;
			const Fe = Object(i.c)({
					activeTooltipId: g.a,
					currentUser: x.k,
					isLoggedIn: x.Q,
					hideNSFWPref: x.F,
					moderatorPermissions: (e, t) => {
						let {
							subredditId: r
						} = t;
						return r ? Object(m.n)(e, {
							subredditId: r
						}) : void 0
					},
					prefersReducedAnimations: C.c,
					profile: (e, t) => {
						let {
							userName: r
						} = t;
						return Object(b.j)(e, {
							profileName: r
						})
					},
					topAwardIcon: (e, t) => {
						let {
							userName: r
						} = t;
						return Object(u.e)(e, {
							userName: r,
							minSize: 32
						})
					},
					user: x.Ab,
					userFlair: (e, t) => {
						let {
							subredditId: r
						} = t;
						return r ? Object(I.d)(e, {
							subredditId: r
						}) : void 0
					},
					isCurrentUserBanned: (e, t) => !!Object(v.n)(t) && Object(v.fb)(e, t),
					userProfileStyles: (e, t) => Object(f.m)(e, Object(b.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const r = Object(b.h)(e, {
							profileName: t.userName
						});
						return !r || r.acceptChats
					},
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subredditId: r
						} = t;
						const s = Object(O.e)(e),
							n = r || s && Object(v.F)(e, s.name);
						return !!n && Object(m.i)(e, n)
					},
					trophyCase: (e, t) => Object(b.r)(e, Object(b.m)(e, t.userName)),
					isNightMode: x.db,
					lastAuthorModNote: (e, t) => {
						if (!t.contextId) return;
						const r = Object(l.a)(t.contextId) ? Object(p.G)(e, {
							postId: t.contextId
						}) : Object(c.b)(e, {
							commentId: t.contextId
						});
						return Object(h.b)(e, null == r ? void 0 : r.authorId, t.subredditId)
					},
					userIsSubscriber: (e, t) => {
						let {
							userName: r
						} = t;
						return Object(v.gb)(e, {
							identifier: {
								name: r,
								type: "profile"
							}
						})
					}
				}),
				He = Object(o.b)(Fe, (e, t) => ({
					onClickSnoovatar: () => e(Object(a.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(d.i)())
				}));
			t.a = He(e => e.isModWithUserNotesPermissions ? n.a.createElement(y.b, {
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
			}) : n.a.createElement(Ue, {
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
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less": function(e, t, r) {
			e.exports = {
				icon: "xd9vrdS8_V6IVus6-mHAM"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var s = r("./src/higherOrderComponents/makeAsync.tsx"),
				n = r("./src/lib/loadWithRetries/index.ts");
			const o = "UserInfoTooltip";
			t.b = Object(s.a)({
				ErrorComponent: () => null,
				getComponent: () => Object(n.a)(() => Promise.all([r.e("AuthorHovercard~Reddit"), r.e("AuthorHovercard")]).then(r.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.tsx"))).then(e => e.default),
				LoadingComponent: () => null
			})
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				i = r("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				a = r("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(a.c)(e => {
				const t = `${e.tooltipId}-hover-id`;
				return n.a.createElement(o.a, {
					className: e.wrapperClassName,
					hoverId: t,
					sendHoverEvent: e.sendHoverCardEvent,
					tooltipId: e.tooltipId,
					authorOrSubredditName: e.user
				}, e.children, n.a.createElement(i.a, {
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
				container: "_1sbZnfdaxhCOFVUCJ3Z75m"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, r) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return g
			})), r.d(t, "a", (function() {
				return x
			})), r.d(t, "c", (function() {
				return I
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/actions/profile/index.ts"),
				l = r("./src/reddit/actions/tooltip.ts"),
				c = r("./src/reddit/selectors/tooltip.ts");
			const u = Object(a.c)({
				dropdownIsOpen: (e, t) => Object(c.b)(t.tooltipId)(e)
			});
			var m = Object(i.b)(u, (e, t) => ({
					onCloseUserDropdown: () => e(Object(l.i)()),
					onOpenUserDropdown: async () => {
						e(Object(l.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && (await e(Object(d.d)(t.authorOrSubredditName)), t.sendHoverEvent(), t.onHover && t.onHover())
					}
				})),
				h = r("./src/reddit/actions/subreddit.ts");
			const p = Object(a.c)({
				dropdownIsOpen: (e, t) => Object(c.b)(t.tooltipId)(e)
			});
			var b = Object(i.b)(p, (e, t) => ({
					onCloseUserDropdown: () => e(Object(l.i)()),
					onOpenUserDropdown: async () => {
						var r;
						e(Object(l.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(h.u)(t.authorOrSubredditName)), null === (r = t.onShow) || void 0 === r || r.call(t)
					}
				})),
				f = r("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				v = r.n(f);
			class g extends n.a.Component {
				constructor() {
					super(...arguments), this.closeHovercardTimeoutId = 0, this.openHovercardTimeoutId = 0, this.isHovering = !1, this.hoverEl = void 0, this.onHoverElMouseEnter = () => {
						this.isHovering = !0
					}, this.onHoverElMouseLeave = () => {
						this.isHovering = !1
					}, this.onMouseEnter = () => {
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
					return n.a.createElement("div", {
						className: Object(o.a)(v.a.HoverDiv, t),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onClick: this.onClick
					}, e)
				}
			}
			const x = m(g),
				I = b(g)
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
				return a
			})), r.d(t, "b", (function() {
				return d
			}));
			var s = r("./src/lib/lessComponent.tsx"),
				n = r("./src/reddit/layout/row/Inline/index.tsx"),
				o = r("./src/reddit/components/Hovercards/helpers.m.less"),
				i = r.n(o);
			const a = s.a.wrapped(n.a, "UserActionItem", i.a),
				d = e => {
					const {
						author: t,
						itemId: r,
						subredditName: s,
						tooltipIdPrefix: n,
						tooltipType: o
					} = e;
					let i = n;
					return r && (i = `${i}--${r}`), o && (i = `${i}--${o}`), t && (i = `${i}--${t}`), s && (i = `${i}--${s}`), i
				}
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return g
			})), r.d(t, "b", (function() {
				return I
			})), r.d(t, "c", (function() {
				return C
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "e", (function() {
				return w
			})), r.d(t, "f", (function() {
				return j
			})), r.d(t, "g", (function() {
				return _
			})), r.d(t, "h", (function() {
				return E
			})), r.d(t, "i", (function() {
				return P
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				a = r("./node_modules/lodash/isNil.js"),
				d = r.n(a),
				l = r("./src/reddit/constants/jsapiEvents.ts");
			var c = r("./src/reddit/singleton/EventSystem.ts");
			const u = Object(i.c)({
				consumers: e => e.jsApi
			});
			class m extends s.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: r,
								...s
							}
						} = this;
						c.a.publish(l.a, s, e)
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
					return e.consumers.length ? n.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && n.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var h = Object(o.b)(u, {})(m),
				p = r("./src/reddit/selectors/comments.ts"),
				b = r("./src/reddit/selectors/commentSelector.ts"),
				f = r("./src/reddit/selectors/subreddit.ts");
			const v = (e, t) => {
				const r = Object(b.b)(e, t),
					s = Object(f.J)(e, t);
				return {
					comment: r,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var g = Object(o.b)(() => Object(i.a)(v, p.j, (e, t) => ({
				...e,
				depth: t
			})))(e => n.a.createElement(h, {
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
				const r = Object(b.b)(e, t),
					s = Object(f.J)(e, t);
				return {
					comment: r,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var I = Object(o.b)(() => Object(i.a)(x, e => e))(e => n.a.createElement(h, {
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
			var C = Object(o.b)(() => Object(i.c)({
					subreddit: f.U
				}))(e => n.a.createElement(h, {
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
				O = r("./src/reddit/hooks/usePostContext.ts");
			var y = e => {
				const t = Object(O.a)(),
					r = Object(s.useMemo)(() => ({
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
				return t ? n.a.createElement(h, {
					className: e.className,
					type: "post",
					data: r
				}) : null
			};
			var w = e => {
				const t = Object(O.a)(),
					r = Object(s.useMemo)(() => ({
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
				return t ? n.a.createElement(h, {
					className: e.className,
					type: "postAuthor",
					data: r
				}) : null
			};
			var j = e => {
				const t = Object(O.a)(),
					r = Object(s.useMemo)(() => ({
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
				return t ? n.a.createElement(h, {
					className: e.className,
					type: "postModTools",
					data: r
				}) : null
			};
			var _ = Object(o.b)(() => Object(i.c)({
				subreddit: f.U
			}))(e => n.a.createElement(h, {
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
			var E = Object(o.b)(() => Object(i.c)({
				subredditOrProfile: (e, t) => Object(f.M)(e, {
					identifier: t
				})
			}))(e => n.a.createElement(h, {
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
			var P = Object(o.b)(() => Object(i.c)({
				subreddit: (e, t) => {
					let {
						subredditId: r
					} = t;
					return r ? Object(f.U)(e, {
						subredditId: r
					}) : null
				}
			}))(e => n.a.createElement(h, {
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
				return l
			})), r.d(t, "c", (function() {
				return c
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/lib/lessComponent.tsx"),
				i = r("./src/reddit/components/ModerationPagesEmptyList/index.m.less"),
				a = r.n(i);
			const d = o.a.div("NoResultsContainer", a.a),
				l = o.a.div("NoResultsText", a.a);

			function c(e) {
				const {
					childrenPosition: t = "top"
				} = e;
				return n.a.createElement(d, {
					className: e.className
				}, "top" === t && e.children, n.a.createElement(l, null, e.text), "bottom" === t && e.children)
			}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/config.ts"),
				i = r("./src/lib/prettyPrintNumber/index.ts"),
				a = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				d = r.n(a);
			const {
				fbt: l
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class c extends n.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: r
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: s,
						totalCount: a
					} = t, c = s.description ? s.description : s.name;
					return n.a.createElement("a", {
						className: d.a.AwardedLastMonth,
						href: `${o.a.oldRedditUrl}/user/${r}/gilded`
					}, n.a.createElement("div", {
						className: d.a.iconColumn
					}, n.a.createElement("img", {
						alt: c,
						className: d.a.icon,
						src: e
					}), a > 1 && n.a.createElement("span", {
						className: d.a.count
					}, `+${Object(i.b)(a-1)}`)), n.a.createElement("div", {
						className: d.a.textColumn
					}, l._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [l._param("award-name", s.name), l._plural(a)], {
						hk: "16MJHe"
					})))
				}
			}
			t.a = c
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less": function(e, t, r) {
			e.exports = {
				Banner: "_2ZyL7luKQghNeMnczY3gqW",
				banner: "_2ZyL7luKQghNeMnczY3gqW"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./src/reddit/models/Image/index.tsx"),
				a = r("./src/reddit/components/EditableImage/index.tsx"),
				d = r("./src/reddit/models/User/index.ts"),
				l = r("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				c = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				u = r.n(c);
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const r = await Object(i.e)(e);
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
						hideNSFWPref: n,
						isNSFW: i,
						userName: l
					} = this.props, {
						isUpdating: c
					} = this.state, m = e ? o.a.createElement("div", {
						className: u.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return r && Object(d.e)(r) === l ? o.a.createElement(a.a, {
						altText: s.fbt._("{userName} banner image", [s.fbt._param("userName", l)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: c,
						onFileSelected: this.updateProfileIcon
					}, m) : i && n ? null : m
				}
			}
			t.a = Object(l.a)(m)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react-redux/es/index.js"),
				n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/actions/preferences.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const a = Object(n.c)({
					currentUser: i.k,
					hideNSFWPref: i.F
				}),
				d = Object(s.b)(a, e => ({
					imageUpdateRequested: (t, r) => e(Object(o.C)(t, r))
				}));
			t.a = d
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/classNames/index.ts"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/react-router/esm/react-router.js"),
				d = r("./src/reddit/actions/post.ts"),
				l = r("./src/reddit/actions/snoovatarModal.ts"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				u = r("./src/reddit/controls/Button/index.tsx"),
				m = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				h = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				p = r("./src/reddit/models/Vote/index.ts"),
				b = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				f = r.n(b);
			const {
				fbt: v
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(a.i)(e => {
				let {
					isHovercard: t,
					username: r,
					isAvatarPost: a,
					post: b,
					share: g
				} = e;
				const x = Object(c.b)(),
					I = Object(i.d)(),
					C = b && b.id,
					O = b && b.voteState;
				let y = null;
				C || (y = t ? "user_hovercard" : "profile_overview");
				const w = Object(n.useCallback)(() => x(Object(m.h)(t ? "user_hovercard" : "profile_overview", r)), [t, x, r]);
				return o.a.createElement(u.t, {
					onClick: () => {
						a ? (x(m.i), C && O === p.a.notVoted && I(Object(d.kb)(C))) : w();
						const e = a ? "postify" : "copy";
						I(Object(l.b)({
							clickSource: y,
							share: g,
							source: e
						}))
					},
					className: Object(s.a)(f.a.snoovatarButton, f.a.snoovatarExtraPadding, f.a.compactButtonLayout, {
						[f.a.avatarPostifyButton]: a
					}),
					isFullWidth: !0
				}, o.a.createElement(h.a, {
					className: Object(s.a)({
						[f.a.shirtIcon]: !a,
						[f.a.avatarPostButtonShirtIcon]: a
					})
				}), v._("Try this Look", null, {
					hk: "dOuPb"
				}), o.a.createElement("div", {
					className: f.a.chevronIcon
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
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/controls/Button/index.tsx"),
				a = r("./src/reddit/icons/fonts/index.tsx"),
				d = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				l = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				c = r.n(l);
			const {
				fbt: u
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function(e) {
				let {
					compact: t,
					currentUserHasSnoovatar: r,
					className: s,
					isOwnProfile: l,
					onClick: m
				} = e;
				return n.a.createElement(i.t, {
					onClick: m,
					isFullWidth: !0,
					className: Object(o.a)(c.a.snoovatarButton, {
						[c.a.snoovatarExtraPadding]: !r && l,
						[c.a.compactButtonLayout]: t
					}, s)
				}, r ? n.a.createElement(d.a, {
					className: c.a.shirtIcon
				}) : n.a.createElement("div", {
					className: c.a.shirtIcon
				}), r ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : l ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), r ? n.a.createElement("div", {
					className: c.a.chevronIcon
				}) : n.a.createElement(a.a, {
					name: "caret_right",
					className: c.a.chevronIcon
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
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				i = r("./src/reddit/icons/svgs/Close/index.tsx"),
				a = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				d = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				l = r.n(d),
				c = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				u = r.n(c);
			t.a = function(e) {
				let {
					bannerBackgroundImage: t,
					isNSFW: r,
					username: s,
					editMode: d,
					isDeletingBanner: c,
					onDeleteBanner: m
				} = e;
				return n.a.createElement("div", {
					className: l.a.bannerWrapper
				}, n.a.createElement(a.a, {
					bannerUrl: t,
					isNSFW: r,
					userName: s
				}), d && t && (c ? n.a.createElement(o.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : n.a.createElement(i.a, {
					className: u.a.closeIcon,
					onClick: m
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/reddit/controls/InternalLink/index.tsx"),
				i = r("./src/reddit/components/HumanDate/index.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function(e) {
				let {
					className: t,
					shouldDisplaySnoovatar: r,
					url: s,
					userCreated: d,
					username: l,
					...c
				} = e;
				const u = r ? n.a.createElement(n.a.Fragment, null, "u/", l, " · ", n.a.createElement(i.d, {
					seconds: d,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${l}`;
				return s ? n.a.createElement(o.default, a({}, c, {
					className: t,
					to: s
				}), u) : n.a.createElement("span", a({}, c, {
					className: t
				}), u)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/AvatarImage.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return y
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/classNames/index.ts"),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				a = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts"),
				l = r("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				c = r("./src/reddit/helpers/userSnoovatar/index.ts"),
				u = r("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				m = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				h = r.n(m);
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			const p = 25;

			function b(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function f(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const v = b("particleDelay", h.a),
				g = b("particleX", h.a),
				x = b("particleFloat", h.a),
				I = () => {
					const e = f(g),
						t = f(x),
						r = f(v);
					return Object(n.a)(h.a.particle, e, t, r)
				};
			class C extends i.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < p; t++) e.push(this.createParticle(t));
					return i.a.createElement("div", {
						role: "presentation",
						className: h.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return i.a.createElement("div", {
						key: e,
						className: `${I()}`
					})
				}
			}
			var O = C;
			const y = e => {
				let {
					className: t,
					isGold: r,
					snoovatarUrl: o,
					prefersReducedAnimations: m,
					origin: p
				} = e;
				const b = Object(a.e)(u.b),
					f = o && Object(c.d)(o) && b,
					v = p === l.a.Profile,
					g = p === l.a.Hovercard;
				return f ? i.a.createElement("div", {
					className: Object(n.a)({
						[h.a.profileTreatment]: v,
						[h.a.hovercardTreatment]: g
					})
				}, i.a.createElement("div", {
					className: h.a.nftProfileUnitContainer
				}, i.a.createElement(d.a, {
					className: h.a.nftProfileUnit,
					imageUrl: o,
					origin: p
				}))) : i.a.createElement("div", {
					className: Object(n.a)(h.a.snoovatarContainer, t)
				}, r && i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: h.a.topGlow
				}), i.a.createElement("div", {
					className: h.a.bottomGlow
				}), !m && i.a.createElement(O, null)), i.a.createElement("img", {
					className: Object(n.a)(h.a.snoovatar, {
						[h.a.premiumGlow]: r
					}),
					src: o,
					alt: s.fbt._("User Avatar", null, {
						hk: "3aQoRV"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/config.ts"),
				n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				a = r("./src/reddit/components/Admin/index.tsx"),
				d = r("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				l = r("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				c = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				u = r.n(c);
			t.a = e => {
				let {
					title: t,
					username: r,
					isEmployee: o,
					isGold: c,
					isNSFW: m
				} = e;
				return i.a.createElement("h1", {
					className: u.a.snoovatarUserTitle
				}, t || r, c && i.a.createElement("a", {
					title: n.fbt._("{username} has Reddit Premium", [n.fbt._param("username", r)], {
						hk: "3Fylv"
					}),
					href: `${s.a.redditUrl}/premium`
				}, i.a.createElement(l.a, {
					className: u.a.snoovatarPremiumIcon
				})), o && i.a.createElement(a.a, null), m && i.a.createElement(d.a, {
					className: u.a.snoovatarNsfwIcon,
					title: n.fbt._("NSFW - Adult Content", null, {
						hk: "2Iw7mN"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, r) {
			e.exports = {
				snoovatarContainer: "_34XIqvI8-YT1wukR_W8vj6",
				profileTreatment: "_2xpFvOlDs0HF8bwR0pDmqt",
				hovercardTreatment: "_34eH8NsQ_ay5kowUWt9-6E",
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
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/controls/InternalLink/index.tsx"),
				a = r("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				d = r("./src/reddit/icons/fonts/index.tsx"),
				l = r("./src/reddit/selectors/experiments/econ/index.ts"),
				c = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				h = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				p = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				b = r.n(p),
				f = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				v = r.n(f),
				g = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/AvatarImage.tsx"),
				x = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = e => {
				let {
					bannerBackgroundImage: t,
					compact: r,
					currentUserHasSnoovatar: s,
					editMode: p,
					isDeletingBanner: f,
					isEmployee: I,
					isGold: C,
					isNSFW: O,
					isOwnProfile: y,
					onClickSnoovatar: w,
					onDeleteBanner: j,
					prefersReducedAnimations: _,
					snoovatarUrl: E,
					title: P,
					userCreated: S,
					username: N,
					url: k,
					isHovercard: T
				} = e;
				const R = Object(o.e)(e => !y && !!E && Object(l.f)(e));
				return n.a.createElement(n.a.Fragment, null, n.a.createElement(m.a, {
					bannerBackgroundImage: t,
					editMode: !!p,
					isNSFW: O,
					username: N,
					isDeletingBanner: !!f,
					onDeleteBanner: j
				}), !p && y && n.a.createElement(i.default, {
					to: "/settings/profile",
					className: b.a.snoovatarSettingsLink
				}, n.a.createElement(d.a, {
					name: "settings",
					className: v.a.settingsIcon
				})), n.a.createElement(g.a, {
					isGold: C,
					snoovatarUrl: E,
					prefersReducedAnimations: _,
					origin: T ? a.a.Hovercard : a.a.Profile
				}), n.a.createElement(x.a, {
					isEmployee: I,
					isGold: C,
					isNSFW: O,
					title: P,
					username: N
				}), n.a.createElement(h.a, {
					className: b.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: N,
					userCreated: S,
					url: k
				}), (y || !s && !!E) && n.a.createElement(c.a, {
					compact: r,
					currentUserHasSnoovatar: s,
					isOwnProfile: y,
					onClick: w
				}), R && n.a.createElement(u.a, {
					username: N,
					isHovercard: !!T,
					share: {
						username: N
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
		"./src/reddit/components/Scroller/Simple.m.less": function(e, t, r) {
			e.exports = {
				Hidden: "wwHbgRV0ZXGp5CHHlpo5u",
				hidden: "wwHbgRV0ZXGp5CHHlpo5u"
			}
		},
		"./src/reddit/components/Scroller/Simple.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return Q
			}));
			var s = r("./node_modules/lodash/debounce.js"),
				n = r.n(s),
				o = r("./node_modules/lodash/isNil.js"),
				i = r.n(o),
				a = r("./node_modules/react/index.js"),
				d = r.n(a),
				l = r("./node_modules/react-dom/index.js"),
				c = r("./node_modules/react-redux/es/index.js"),
				u = r("./node_modules/request-idle-callback/index.js"),
				m = r("./node_modules/reselect/es/index.js"),
				h = r("./src/lib/constants/index.ts"),
				p = r("./src/lib/fastdom/index.ts"),
				b = r("./node_modules/lodash/throttle.js"),
				f = r.n(b);
			const v = 500,
				g = 1e3,
				x = 40;
			var I;
			! function(e) {
				e.Max10 = "0-10", e.Max20 = "11-20", e.Max30 = "21-30", e.Max40 = "31-40", e.Max50 = "41-50", e.Max60 = "51-60"
			}(I || (I = {}));
			const C = () => ({
					[I.Max10]: 0,
					[I.Max20]: 0,
					[I.Max30]: 0,
					[I.Max40]: 0,
					[I.Max50]: 0,
					[I.Max60]: 0
				}),
				O = [I.Max10, I.Max20, I.Max30, I.Max40, I.Max50, I.Max60],
				y = e => ({
					eventHandler: e
				});

			function w(e) {
				let {
					fn: t,
					subscriber: r,
					timeout: s
				} = e;
				const n = [];
				let o, i, a;
				const d = () => {
						if (n.length < x) return;
						const e = C(),
							t = Math.min(g, n.length),
							s = n.splice(0, t);
						n.splice(0, n.length);
						const o = s[t - 1] - s[0];
						for (let r = s.shift(); s.length > 0; r = s.shift()) {
							const t = s[0] - r,
								n = Math.min(60, Math.ceil(1e3 / t));
							e[n <= 10 ? I.Max10 : 60 === n ? I.Max60 : O[Math.ceil(n / 10) - 1]] += t
						}
						const i = C();
						for (const r in e) i[r] = e[r] / o;
						r(i)
					},
					l = () => {
						void 0 !== a && (window.clearTimeout(a), a = void 0)
					},
					c = () => {
						void 0 !== o && (cancelAnimationFrame(o), o = void 0), void 0 !== i && (window.clearInterval(i), i = void 0), l(), d()
					},
					u = () => {
						o = requestAnimationFrame(() => {
							n.push(performance.now()), u()
						})
					},
					m = f()(() => {
						l(), a = window.setTimeout(c, s)
					}, h.K);
				return {
					cleanup: c,
					eventHandler: e => {
						void 0 === i ? (u(), m(), i = window.setInterval(d, v)) : m(), t(e)
					}
				}
			}
			var j = r("./src/lib/scheduler/index.ts"),
				_ = r("./src/lib/domUtils/index.ts"),
				E = r("./src/lib/LinkedListMap/index.ts");
			const P = (e, t) => e < 0 ? t + e : e % t;
			class S {
				constructor(e) {
					this.head = 0, this.size = 0, this.maxSize = e, this.items = new Array(e)
				}
				push(e) {
					return this.items[this.head] = e, this.head = P(this.head + 1, this.maxSize), this.size < this.maxSize && this.size++, this
				}
				pop() {
					if (this.size > 0) {
						const e = P(this.head - 1, this.maxSize),
							t = this.items[e];
						return this.items[e] = void 0, this.head = e, this.size--, t
					}
				}
				forEach(e) {
					let t = this.size < this.maxSize ? P(this.head - this.size, this.maxSize) : this.head;
					for (let r = 0; r < this.size; r++) e(this.items[t], r, this.size), t = (t + 1) % this.maxSize
				}
				map(e) {
					const t = new Array(this.size);
					return this.forEach((r, s, n) => {
						t[s] = e(r, s, n)
					}), t
				}
				getEntries() {
					const e = new Array(this.size);
					return this.forEach((t, r) => {
						e[r] = t
					}), e
				}
				clear() {
					const e = this.size;
					for (let t = 0; t < e; t++) this.pop()
				}
			}
			var N = r("./src/reddit/components/Scroller/getDocumentTop.ts");
			class k {
				constructor(e) {
					let {
						top: t,
						height: r,
						heightWithSuffix: s
					} = e;
					this.height = r, this.heightWithSuffix = s, this.top = t, this.bottom = this.top + this.height
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
				const r = i()(e) ? 1e3 : e;
				if ("undefined" != typeof window && t) {
					const e = t === document ? Object(N.a)() : t.scrollTop;
					return new k({
						top: e,
						height: window.innerHeight
					})
				}
				return new k({
					top: 0,
					height: r
				})
			};
			var R = r("./src/reddit/components/ResizeSensor/index.tsx"),
				U = r("./src/reddit/constants/componentSizes.ts"),
				F = r("./src/reddit/constants/elementClassNames.ts"),
				H = r("./src/reddit/contexts/InsideOverlay.tsx"),
				A = r("./src/reddit/selectors/platform.ts"),
				M = r("./src/telemetry/helpers/sendEvent.ts"),
				L = r("./src/telemetry/helpers/sendTiming.ts"),
				B = r("./src/reddit/components/Scroller/Simple.m.less"),
				W = r.n(B);
			const V = U.g,
				D = 5 * h.K,
				z = 3,
				K = Object(m.c)({
					isOverlayOpen: A.i
				}),
				q = Object(c.b)(K),
				G = {};

			function Q(e) {
				return e === document
			}

			function Y(e) {
				let t = 0;
				do {
					t += e.offsetTop || 0, e = e.offsetParent
				} while (e);
				return t
			}
			const Z = 10,
				X = .9,
				J = .9,
				$ = 1.8,
				ee = 5,
				te = 1500,
				re = 2 * h.K,
				se = 400,
				ne = 8,
				oe = 5 * h.K,
				ie = 30,
				ae = "object" == typeof performance && "function" == typeof performance.now,
				de = () => ae ? performance.now() : Date.now();

			function le(e, t) {
				return E.a.fromArray(e.children.map((e, r) => {
					const s = t && t.get(e.id);
					return s ? (s.isFocusable = !!e.isFocusable, s.trackOnEnteredViewport = e.trackOnEnteredViewport, s.trackOnExitedViewport = e.trackOnExitedViewport, s) : {
						el: null,
						id: e.id,
						index: r,
						isFocusable: !!e.isFocusable,
						itemRef: void 0,
						focused: !1,
						loaded: !t && r < ee,
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
						M.b.enqueue(new j.a({
							args: [e, t],
							cb: (e, t) => Object(L.a)(h.m.Redesign, {
								data: e,
								meta: t,
								type: "scrollfps"
							})
						}))
					}, this.getVisibleChildren = () => {
						let e = 0;
						const t = te + (this.props.viewportTopPadding ? this.props.viewportTopPadding : 0),
							r = [];
						let s = this.nextVisibleChildrenIndex;
						for (; e < t && s < this.props.children.length;) {
							const t = this.props.children[s];
							r.push(t), e += t.estHeight, s++
						}
						return this.visibleChildrenCount = r.length, r
					}, this.setRenderableChildrenIndexIncrement = () => {
						if (this.props.children[0]) {
							const e = this.props.children[0].estHeight;
							this.renderableChildrenIndexIncrement = Math.min(Math.ceil(se / e), ne)
						} else this.renderableChildrenIndexIncrement = ne
					}, this.updateRenderableChildrenWhenIdle = () => {
						this.cancelPopulateRenderableChildrenWhenIdle(), this.hasScrolledWithinThreshold() || (this.timeoutForUpdateIdleCallback = oe, Object(u.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle), this.requestUpdateWhenIdleCallbackHandle = Object(u.requestIdleCallback)(() => {
							const e = Math.ceil(this.renderableChildrenIndexIncrement / 2);
							this.populateRenderableChildrenFromProps(!1, e)
						})), this.state.renderableChildren.length < this.props.children.length && this.schedulePopulateRenderableChildrenWhenIdle()
					}, this.hasScrolledWithinThreshold = () => !!this.lastScrollTime && de() - this.lastScrollTime < re, this.populateRenderableChildrenFromProps = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
							r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.renderableChildrenIndexIncrement,
							s = arguments.length > 2 ? arguments[2] : void 0;
						const n = s || t.props.children;
						if (t.state.renderableChildren.length < n.length || e)
							if (t.hasScrolledWithinThreshold()) p.a.read(() => {
								clearTimeout(t.updateRenderableChildrenHandle), t.updateRenderableChildrenHandle = setTimeout(() => {
									t.populateRenderableChildrenFromProps(e, t.renderableChildrenIndexIncrement, s ? n : void 0)
								}, re)
							});
							else {
								t.nextVisibleChildrenIndex + r <= n.length ? t.nextVisibleChildrenIndex += r : t.nextVisibleChildrenIndex = n.length;
								const e = n.slice(0, t.nextVisibleChildrenIndex);
								e.length && (t.lastVisibleElId = e[e.length - 1].id), p.a.write(() => {
									t.setState({
										renderableChildren: e
									})
								}), t.isRenderableChildrenStateChangePending = !0
							}
					}, this.lastElementIsAboutToBeVisible = () => {
						if (this.lastVisibleEl) {
							if (this.lastVisibleEl.getBoundingClientRect().top < window.innerHeight + se) return !0
						}
						return !1
					}, this.getRenderableChildrenIndexIncrement = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ie,
							r = 0,
							s = t.state.renderableChildren.length;
						for (; r < e && s < t.props.children.length;) r += t.props.children[s].estHeight, s++;
						const n = s - t.state.renderableChildren.length;
						return Math.max(t.renderableChildrenIndexIncrement, n)
					}, this.schedulePopulateRenderableChildrenWhenIdle = () => {
						!this.props.isOverlayOpen || this.props.isOverlay ? this.updateRenderableChildrenWhenIdleHandle = setTimeout(() => {
							this.updateRenderableChildrenWhenIdle()
						}, this.timeoutForUpdateIdleCallback) : this.cancelPopulateRenderableChildrenWhenIdle()
					}, this.cancelPopulateRenderableChildrenWhenIdle = () => {
						clearTimeout(this.updateRenderableChildrenWhenIdleHandle), Object(u.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle)
					}, this.callOnScrollForItemsChanged = n()(() => {
						this.handleScroll()
					}, h.K), this.pauseAllElements = () => {
						const e = this.getItemsInViewportWithFilter(this.loadedChildRefFilter),
							t = [];
						e.forEach(e => {
							const {
								itemRef: r
							} = e;
							r && (e.focused = !1, t.push(r.pauseContent))
						}), p.a.write(() => {
							t.forEach(e => e())
						})
					}, this.elementIsVisible = e => !!this.viewport && this.viewport.intersects(e), this.getItemsInViewportWithFilter = e => {
						this.updateViewportInfo();
						const t = new E.a("id");
						return this.state.renderableChildren.forEach(r => {
							const s = this.childMap.get(r.id);
							s && e(s) && t.push(s)
						}), t
					}, this.visibleChildRefFilter = e => {
						const t = this.getChildRectangle(e);
						return t && this.elementIsVisible(t) || !1
					}, this.loadedChildRefFilter = e => e.loaded, this.resetScrollFramerateAndFocus = () => {
						this.scrollContainer && (this.pixelsPerMSRing.clear(), this.lastScrollTime = -1, this.needsToPauseViewportItems = !0, null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(u.requestIdleCallback)(this.unmountItemsWhileIdle)), setTimeout(this.handleScroll, h.K))
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
							const r = (null == e ? void 0 : e.getBoundingClientRect().top) || 0;
							this.distanceToTop = r + this.getScrollTop()
						}
						const r = t.offsetTop + this.parentOffsetTop,
							s = t.getBoundingClientRect().height,
							n = new k({
								top: r,
								height: s,
								heightWithSuffix: `${s}px`
							});
						return e.rectangle = n, n
					}, this.handleResize = e => {
						this.fpsMeter && this.fpsMeter.eventHandler(e);
						for (const t in this.hiddenChildren) this.remeasureWhenShown[t] = !0;
						this.measurementsInvalid = !0, this.callOnScrollForItemsChanged()
					}, this.getTotalOffsetTop = () => this.containerRef ? Y(this.containerRef) : 0, this.handleContentContainerResize = n()(() => {
						this.pendingResizeHandlerRead || (this.pendingResizeHandlerRead = p.a.read(() => {
							const e = this.getTotalOffsetTop();
							e !== this.containerOffsetTop && (this.containerOffsetTop = e, this.handleResize()), this.pendingResizeHandlerRead = null
						}))
					}, h.K), this.handleScroll = () => {
						this.pendingScollHandlerRead || (this.pendingScollHandlerRead = p.a.read(() => {
							if (clearTimeout(this.resetCanFocusTimer), this.cancelPopulateRenderableChildrenWhenIdle(), Object(_.b)() || !this.scrollContainer) return void(this.pendingScollHandlerRead = null);
							this.updateScrollMetrics();
							const e = this.getAveragePixelsPerMilliSecond(),
								t = e < X,
								r = e < J,
								s = e < $;
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
							const n = new E.a("id");
							let o, i;
							const a = [];
							this.state.renderableChildren.forEach(e => {
								const d = this.childMap.get(e.id);
								let l;
								if (d && d.el) {
									if (!(l = this.getChildRectangle(d))) return;
									const {
										id: e
									} = d;
									this.elementIsHideable(l) ? void 0 === this.hiddenChildren[e] && (this.childrenToHide[e] = `${l.height+10}px`) : void 0 !== this.hiddenChildren[e] && (this.childrenToShow[e] = !0)
								}
								if (!d || !d.el || !d.rectangle) return void(this.measurementsInvalid && d && this.getChildRectangle(d));
								const {
									id: c,
									itemRef: u,
									trackOnEnteredViewport: m
								} = d, h = !!this.itemsInViewport.get(c);
								if (this.elementIsUnmountable(l)) u && h && d.loaded && d.isFocusable && a.push(u.pauseContent);
								else if (u && this.loadItemIfPossible(d, u, t, r, s, a), this.elementIsVisible(l)) {
									n.push(d), !h && m && M.b.enqueue(new j.a({
										cb: m,
										args: void 0
									}));
									const e = this.elementIsFocused(l);
									e && !i && (i = d.id), t && d.isFocusable && !o && e ? (o = d.id, d.focused || (d.focused = !0, u && a.push(u.focusContent))) : d.loaded && d.isFocusable && (d.focused || this.needsToPauseViewportItems) && (d.focused = !1, u && a.push(u.pauseContent))
								} else h && d.loaded && d.isFocusable && (d.focused = !1, u && a.push(u.stopContent))
							}), p.a.write(() => {
								a.forEach(e => e()), this.props.enableElementHiding && this.hideOrShowChildren()
							}), this.itemsInViewport.forEach(e => {
								let {
									id: t,
									trackOnExitedViewport: r
								} = e;
								r && !n.has(t) && M.b.enqueue(new j.a({
									cb: r,
									args: [!1]
								}))
							}), this.itemsInViewport = n, this.canFocusItems = t, this.focusedChild = o, this.primaryChild = i, this.measurementsInvalid = !1, this.needsToPauseViewportItems = !1, t ? null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(u.requestIdleCallback)(this.unmountItemsWhileIdle)) : (this.resetCanFocusTimer = setTimeout(this.resetScrollFramerateAndFocus, D), null !== this.unmountItemsIdleId && (Object(u.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)), this.props.onScroll && this.props.onScroll({
								getVisibleItemsInViewport: () => this.getItemsInViewportWithFilter(this.visibleChildRefFilter),
								primaryChild: this.primaryChild ? this.childMap.get(this.primaryChild) : void 0
							}), this.timeoutForUpdateIdleCallback = 4 * oe, this.schedulePopulateRenderableChildrenWhenIdle(), this.pendingScollHandlerRead = null
						}))
					}, this.unmountItemsWhileIdle = e => {
						if (!this.scrollContainer) return;
						const t = [];
						if (this.state.renderableChildren.forEach(e => {
								const r = this.childMap.get(e.id);
								if (!r || !r.el || !r.itemRef) return;
								const s = this.getChildRectangle(r);
								s && this.elementIsUnmountable(s) && r.loaded && t.push(r)
							}), !t.length) return;
						const r = Math.min(Math.ceil(e.timeRemaining() / z), t.length),
							s = [];
						for (let n = 0; n < r; n++) {
							const e = t[n];
							s.push(e.itemRef.unmountContent), e.loaded = !1, e.focused = !1
						}
						Object(l.unstable_batchedUpdates)(() => {
							this.scrollContainer && s.forEach(e => e())
						}), r < t.length ? this.unmountItemsIdleId = Object(u.requestIdleCallback)(this.unmountItemsWhileIdle) : this.unmountItemsIdleId = null
					}, this.hideOrShowChildren = n()(() => {
						for (const e in this.childrenToHide) {
							const t = this.childrenToHide[e];
							void 0 !== t && (this.hideChild(e, t), this.childrenToHide[e] = void 0)
						}
						for (const e in this.childrenToShow) void 0 !== this.childrenToShow[e] && (this.showChild(e), this.childrenToShow[e] = void 0)
					}, h.K), this.hideChild = (e, t) => {
						const r = this.childMap.get(e);
						if (!r || !r.el) return;
						const s = r.el.firstChild;
						s && (t !== r.el.style.height && (r.el.style.height = t), s.classList.add(W.a.Hidden), this.hiddenChildren[e] = t, r.loaded && p.a.write(() => {
							r.itemRef && (r.loaded = !1, r.focused = !1, r.itemRef.unmountContent())
						}))
					}, this.showChild = e => {
						const t = this.childMap.get(e);
						if (!t || !t.el) return;
						const r = t.el.firstChild;
						r && (this.remeasureWhenShown[t.id] && (this.measurementsInvalid = !0, this.remeasureWhenShown[t.id] = void 0), t.el.style.height = "", r.classList.remove(W.a.Hidden), void 0 !== this.hiddenChildren[e] && (this.hiddenChildren[e] = void 0))
					}, this.getStylesForOuterWrapper = e => {
						if (void 0 !== this.hiddenChildren[e]) return {
							height: this.hiddenChildren[e]
						}
					}, this.remeasureChild = e => {
						this.measurementsInvalid = !0
					}, this.scrollToChild = (e, t) => {
						this.measurementsInvalid = !0, p.a.read(() => {
							const r = this.childMap.get(e);
							if (r && r.el && this.scrollContainer) {
								if (r.rectangle = void 0, t && this.isScrollChildTopVisible(e)) return;
								const s = this.getScrollTop() + r.el.getBoundingClientRect().top - (this.props.scrollToChildPadding || 0) - (this.props.viewportTopPadding || 0);
								setTimeout(() => {
									this.scrollContainer && (Object(_.c)(this.scrollContainer, s), this.callOnScrollForItemsChanged())
								}, h.K)
							}
						})
					}, this.isScrollChildTopVisible = e => {
						const t = this.childMap.get(e);
						if (t && t.el && this.scrollContainer) {
							const {
								scrollToChildPadding: e = 0,
								viewportTopPadding: r = 0
							} = this.props, s = window.innerHeight - r, {
								top: n
							} = t.el.getBoundingClientRect();
							return n >= r + e && n < s
						}
						return !1
					}, this.childMap = le(e), this.containerRef = null, this.itemsInViewport = new E.a("id"), this.loadMoreFired = !1, this.pixelsPerMSRing = new S(Z), this.wrapperRefFNs = {}, this.childRefFns = {}, this.childrenToHide = {}, this.childrenToShow = {}, this.canFocusItems = !0, this.focusedChild = void 0, this.hiddenChildren = {}, this.nextVisibleChildrenIndex = 0, this.lastVisibleEl = null, this.lastVisibleElId = null, this.remeasureWhenShown = {}, this.timeoutForUpdateIdleCallback = oe;
					const r = this.getVisibleChildren();
					r.length && (this.lastVisibleElId = r[r.length - 1].id), this.nextVisibleChildrenIndex = r.length, this.updateRenderableChildrenHandle = null, this.state = {
						renderableChildren: r
					}, this.setRenderableChildrenIndexIncrement(), this.validateScrollPreservationProps(e), this.validateLoadMoreProps(e)
				}
				hasRenderedAllChildren() {
					return !(this.state.renderableChildren.length < this.props.children.length) && (this.props.onAllChildrenRendered && this.props.onAllChildrenRendered(), !0)
				}
				populateRenderableChildrenIfLastChildIsVisible() {
					this.isRenderableChildrenStateChangePending || this.hasRenderedAllChildren() || p.a.read(() => {
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
						timeout: D
					}) : y(this.handleScroll), this.scrollContainer && this.scrollContainer.addEventListener("scroll", this.fpsMeter.eventHandler), window.addEventListener("resize", this.handleResize)
				}
				cleanupScrollHandler() {
					this.fpsMeter && ("function" == typeof this.fpsMeter.cleanup && this.fpsMeter.cleanup(), this.scrollContainer && this.scrollContainer.removeEventListener("scroll", this.fpsMeter.eventHandler), window.removeEventListener("resize", this.handleResize), this.pendingScollHandlerRead && (p.a.clear(this.pendingScollHandlerRead), this.pendingScollHandlerRead = null), this.pendingResizeHandlerRead && (p.a.clear(this.pendingResizeHandlerRead), this.pendingResizeHandlerRead = null))
				}
				componentDidMount() {
					this.props.getContainer ? this.scrollContainer = this.props.getContainer() || document : this.scrollContainer = document, this.props.onScroll && this.props.onScroll({
						getVisibleItemsInViewport: () => this.getItemsInViewportWithFilter(this.visibleChildRefFilter),
						primaryChild: void 0
					}), this.props.disableScrollCache && !this.props.preventScrollOnMount && Object(_.c)(this.scrollContainer, 0), this.setupScrollHandler(), p.a.write(() => {
						if (!this.props.disableScrollCache) {
							const e = this.getCacheKey(),
								t = G[e];
							i()(t) || (G[e] = void 0, this.scrollContainer && Object(_.c)(this.scrollContainer, t))
						}
						this.callOnScrollForItemsChanged(), this.props.onLastVisibleChildRendered && this.props.onLastVisibleChildRendered()
					}), p.a.read(() => {
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
					this.validateScrollPreservationProps(e) && this.validateLoadMoreProps(e) && this.didLayoutAloneChange(this.props, e) && this.hasBeenScrolled() && this.handleScroll(), e.loadMoreToken !== this.props.loadMoreToken && (this.loadMoreFired = !1, this.loadMoreEl = null), e.isOverlayOpen !== this.props.isOverlayOpen && e.isOverlayOpen && !this.props.isOverlay && p.a.read(this.pauseAllElements), e.isOverlayOpen === this.props.isOverlayOpen || e.isOverlayOpen || this.props.isOverlay || this.resetScrollFramerateAndFocus(), this.childMap = le(e, this.childMap);
					const t = e.children.length < this.props.children.length,
						r = e.children.length === this.props.children.length && e.children.some((e, t) => e.id !== this.props.children[t].id);
					this.populateRenderableChildrenFromProps(t || r, this.renderableChildrenIndexIncrement, e.children), this.schedulePopulateRenderableChildrenWhenIdle()
				}
				componentWillUnmount() {
					if (this.callExitedViewportForUnmount(), this.cleanupScrollHandler(), clearTimeout(this.updateRenderableChildrenHandle), this.cancelPopulateRenderableChildrenWhenIdle(), this.scrollContainer && !this.props.disableScrollCache) {
						const e = this.getCacheKey();
						G[e] = this.lastRenderPosition
					}
					this.childMap = new E.a("id"), this.itemsInViewport = new E.a("id"), this.wrapperRefFNs = {}, this.childRefFns = {}, this.containerRef = null, this.loadMoreEl = void 0, this.scrollContainer = void 0, this.unmountItemsIdleId && (Object(u.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)
				}
				didLayoutAloneChange(e, t) {
					return "string" == typeof e.layoutKey && "string" == typeof t.layoutKey && e.layoutKey !== t.layoutKey && "string" == typeof e.dataKey && "string" == typeof t.layoutKey && e.dataKey === t.dataKey
				}
				elementIsFocused(e) {
					if (!this.viewport) return !1;
					const t = this.distanceToTop ? this.distanceToTop : 0,
						r = this.parentOffsetTop ? this.parentOffsetTop : 0,
						s = e.bottom + t - r,
						n = e.top + t - r,
						o = Math.min(this.viewport.bottom, s) - Math.max(this.viewport.top, n),
						i = o / e.height,
						a = o / this.viewport.height;
					return i > .75 || a > .9
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
					return this.scrollContainer ? Q(this.scrollContainer) ? Object(N.a)() : this.scrollContainer.scrollTop : 0
				}
				updateViewportInfo() {
					if (this.scrollContainer) {
						this.viewport = T({
							buffer: 0,
							container: this.scrollContainer
						});
						const {
							viewportTopPadding: e = 0
						} = this.props, t = window.innerHeight - e, r = 2 * t;
						this.mountableViewport = new k({
							top: this.viewport.top - r,
							height: this.viewport.height + 2 * r
						});
						const s = 4 * t;
						this.renderableViewport = new k({
							top: this.viewport.top - s,
							height: this.viewport.height + 2 * s
						})
					}
				}
				updateScrollMetrics() {
					this.updateViewportInfo();
					const e = de(),
						t = this.getScrollTop(),
						r = Math.abs(this.lastRenderPosition - t),
						s = e - this.lastScrollTime,
						n = this.lastScrollTime > -1;
					this.lastScrollTime = e, this.lastRenderPosition = t, n ? this.pixelsPerMSRing.push(r / s) : this.lastScrollTime = e
				}
				getAveragePixelsPerMilliSecond() {
					if (this.pixelsPerMSRing.size > 1) {
						let e = 0;
						return this.pixelsPerMSRing.forEach(t => e += t), e / this.pixelsPerMSRing.size
					}
					return 0
				}
				_wrapperRefFN(e, t) {
					const r = this.childMap.get(e);
					r && (r.el = t), this.lastVisibleElId === e && (this.lastVisibleEl = t)
				}
				getWrapperRefFN(e) {
					let t = this.wrapperRefFNs[e];
					return t || (t = t => {
						this._wrapperRefFN(e, t)
					}, this.wrapperRefFNs[e] = t), t
				}
				_childRefFn(e, t, r) {
					const s = this.childMap.get(e);
					s && (s.itemRef = t, s.loaded = !!t && (void 0 !== r ? r : s.loaded), this.callOnScrollForItemsChanged())
				}
				getChildRefFn(e) {
					let t = this.childRefFns[e];
					return t || (t = (t, r) => {
						this._childRefFn(e, t, r)
					}, this.childRefFns[e] = t), t
				}
				loadItemIfPossible(e, t, r, s, n, o) {
					if (t.contentIsHeavyToMount() ? s : n) {
						const s = !e.isFocusable || r;
						!e.loaded && s && (e.loaded = !0, o.push(t.loadContent))
					}
				}
				callExitedViewportForUnmount() {
					this.itemsInViewport.forEach(e => {
						let {
							id: t,
							trackOnExitedViewport: r
						} = e;
						r && M.b.enqueue(new j.a({
							cb: r,
							args: [!0]
						}))
					})
				}
				hasBeenScrolled() {
					if (!this.containerRef) return !1;
					const {
						viewportTopPadding: e = 0
					} = this.props, t = Y(this.containerRef);
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
						width: V
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
			t.b = q(Object(H.b)(ce))
		},
		"./src/reddit/components/Scroller/getDocumentTop.ts": function(e, t, r) {
			"use strict";
			t.a = () => document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || 0
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
				return C
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./src/lib/lessComponent.tsx"),
				a = r("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				d = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/helpers/normalizeUsername/index.tsx"),
				c = r("./src/reddit/layout/row/Inline/index.tsx"),
				u = r("./src/reddit/layout/row/RightAlign/index.tsx"),
				m = r("./src/reddit/icons/svgs/Search/index.tsx"),
				h = r("./src/reddit/components/SubredditModerationSearch/index.m.less"),
				p = r.n(h);
			const b = i.a.wrapped(m.a, "SearchIcon", p.a),
				f = i.a.wrapped(a.a, "NoResultsContainer", p.a),
				v = i.a.div("Container", p.a),
				g = i.a.wrapped(c.a, "SearchStatusBar", p.a),
				x = i.a.div("SearchStatus", p.a),
				I = i.a.span("Bold", p.a);

			function C(e) {
				if (e.searchPending) return null;
				const t = Object(l.a)(e.searchTerm);
				return e.noResultsFound ? o.a.createElement(f, null, o.a.createElement(b, null), o.a.createElement(a.b, null, s.fbt._("No results for {searchTerm}", [s.fbt._param("searchTerm", `u/${t}`)], {
					hk: "1nDAlG"
				})), o.a.createElement(d.r, {
					onClick: e.cancelSearch
				}, s.fbt._("See all", null, {
					hk: "3aLS8s"
				}))) : o.a.createElement(v, null, o.a.createElement(g, null, o.a.createElement(x, null, s.fbt._("1 search result for {=[searchTerm]}", [s.fbt._param("=[searchTerm]", o.a.createElement(I, {
					"data-redditstyle": !0
				}, s.fbt._("{searchTerm}", [s.fbt._param("searchTerm", `'${t}':`)], {
					hk: "1B9ZWG"
				})))], {
					hk: "iAcV5"
				})), o.a.createElement(u.a, null, o.a.createElement(d.r, {
					onClick: e.cancelSearch
				}, s.fbt._("See all", null, {
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
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./src/lib/lessComponent.tsx"),
				a = r("./src/reddit/helpers/normalizeUsername/index.tsx"),
				d = r("./src/reddit/icons/svgs/Search/index.tsx"),
				l = r("./src/reddit/components/SubredditModerationTopBar/index.m.less"),
				c = r.n(l);
			const u = i.a.div("topBarRow", c.a);
			class m extends o.a.Component {
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
					return o.a.createElement("div", {
						className: c.a.topBarRow
					}, e.positionSearchRight && e.children, o.a.createElement("div", {
						className: c.a.searchBar
					}, o.a.createElement("input", {
						className: c.a.searchInput,
						onChange: this.onSearchChange,
						onKeyPress: this.onKeyPress,
						placeholder: s.fbt._("Search for a user", null, {
							hk: "1yTo6e"
						}),
						type: "text",
						value: t.searchInputText
					}), o.a.createElement("button", {
						className: c.a.searchButton,
						onClick: this.onSearch
					}, o.a.createElement(d.a, {
						className: c.a.searchIcon
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
			var s = r("./src/config.ts"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./src/lib/lessComponent.tsx"),
				a = r("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				d = r("./src/reddit/components/UserIcon/index.tsx"),
				l = r("./src/reddit/controls/InternalLink/index.tsx"),
				c = r("./src/reddit/components/UserNameAndIcon/index.m.less"),
				u = r.n(c);
			const m = i.a.span("UserIconContainer", u.a),
				h = i.a.wrapped(d.a, "UserIcon", u.a),
				p = i.a.wrapped(l.default, "UserLink", u.a);
			t.a = e => o.a.createElement(p, {
				className: e.className,
				to: `${s.a.redditUrl}/user/${e.username}`
			}, o.a.createElement(a.a, {
				user: e.username,
				sendHoverCardEvent: e.sendHoverCardEvent,
				subredditId: e.subredditId,
				tooltipId: e.tooltipId
			}, o.a.createElement(m, {
				style: {
					height: e.iconSize || "32px",
					width: e.iconSize || "32px"
				}
			}, o.a.createElement(h, {
				iconUrl: e.userIcon,
				isNSFW: !1,
				userName: e.username
			})), e.username))
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			class o extends n.a.Component {
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
					} = this, r = "string" == typeof t.value ? t.value : "", s = "object" == typeof t.value ? t.value : null, o = r || s;
					return n.a.createElement("div", {
						className: e.className
					}, r && n.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: r,
						tabIndex: e.tabIndex
					}), (!o || e.multiple || void 0 !== e.isPending && !e.isPending) && n.a.createElement("input", {
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
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = r.n(i);
			t.a = e => {
				let {
					center: t,
					className: r,
					sizePx: s = 10
				} = e;
				return n.a.createElement("div", {
					className: Object(o.a)(a.a.loadingIcon, r, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${s}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/helpers/trackers/followers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			}));
			var s = r("./src/reddit/constants/tracking.ts"),
				n = r("./src/reddit/selectors/telemetry.ts");
			const o = e => t => ({
					...Object(n.n)(t),
					action: s.c.CLICK,
					noun: `follower_list_page_${e?"follow":"unfollow"}`,
					source: "profile"
				}),
				i = () => e => ({
					...Object(n.n)(e),
					action: s.c.CLICK,
					noun: "follower_list_cta",
					source: "profile"
				})
		},
		"./src/reddit/helpers/trackers/marketplace/claims.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "e", (function() {
				return d
			}));
			var s = r("./src/reddit/selectors/telemetry.ts");
			const n = () => e => ({
					...Object(s.n)(e),
					source: "marketplace",
					action: "view",
					noun: "claim_post_unit"
				}),
				o = () => e => ({
					...Object(s.n)(e),
					source: "marketplace",
					action: "click",
					noun: "claim_post_unit"
				}),
				i = () => e => ({
					...Object(s.n)(e),
					source: "marketplace",
					action: "close",
					noun: "claim_post_unit"
				});
			var a;
			! function(e) {
				e.Profile = "profile", e.Hovercard = "hovercard"
			}(a || (a = {}));
			const d = e => t => {
				const r = Object(s.n)(t);
				return {
					...r,
					source: "marketplace",
					action: "view",
					noun: "product_detail_page",
					actionInfo: {
						...r.actionInfo,
						reason: e,
						pageType: "product_detail_page"
					}
				}
			}
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(o.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && n.a.createElement("title", null, e.title), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), n.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("rect", {
				width: "20",
				height: "20",
				rx: "10",
				fill: "url(#gradient)"
			}), n.a.createElement("path", {
				d: "M12.121 13.471c-1.007.146-1.73.445-2.121.643v-3.068a1.2 1.2 0 00-1.2-1.2H6.53c.027-.292.046-.61.046-.978 0-1.015-.294-1.78-.53-2.233l.834-.834H10v2.845a1.2 1.2 0 001.2 1.2h2.27c.036.402.086.749.132 1.045.058.38.109.706.109 1.047 0 .627-.497 1.375-1.59 1.533zm3.017-7.35l-1.345-1.345a.6.6 0 00-.425-.175H6.632a.6.6 0 00-.425.175L4.862 6.122a.6.6 0 00-.042.802c.006.006.556.72.556 1.944 0 .783-.087 1.344-.164 1.84-.064.41-.124.797-.124 1.23 0 1.163.9 2.471 2.619 2.72 1.251.183 1.952.638 1.956.64a.61.61 0 00.67.002c.007-.004.709-.46 1.96-.642 1.719-.249 2.618-1.557 2.618-2.72 0-.433-.06-.82-.124-1.23a11.026 11.026 0 01-.163-1.84c0-1.22.536-1.919.556-1.944a.6.6 0 00-.042-.802z",
				fill: "#fff"
			}), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
				id: "gradient",
				x1: "0",
				y1: "20",
				x2: "20.021",
				y2: "19.979",
				gradientUnits: "userSpaceOnUse"
			}, n.a.createElement("stop", {
				stopColor: "#EC0623"
			}), n.a.createElement("stop", {
				offset: "1",
				stopColor: "#FF8717"
			}))))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = function(e) {
				let {
					className: t
				} = e;
				return n.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("g", {
					fill: "inherit"
				}, n.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
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
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				d = r.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(o.a)(e => {
				const {
					className: t,
					children: r,
					heightLeft: s,
					widthLeft: o,
					gutter: a,
					...c
				} = e;
				return n.a.createElement("div", l({
					className: Object(i.a)(d.a.expandRightContainer, t)
				}, c), n.a.createElement("div", {
					className: d.a.left,
					style: {
						flexBasis: o,
						height: s,
						marginRight: a
					}
				}, Array.isArray(r) && r[0]), n.a.createElement("div", {
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
				return l
			})), r.d(t, "a", (function() {
				return c
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./src/reddit/controls/Button/index.tsx"),
				a = r("./src/reddit/pages/ErrorPages/index.m.less"),
				d = r.n(a);
			const l = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: d.a.container
					}, o.a.createElement("h3", {
						className: d.a.title
					}, t || s.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), o.a.createElement(i.n, {
						className: d.a.primaryRouterLink,
						to: "/"
					}, s.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				},
				c = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: d.a.container
					}, o.a.createElement("h3", {
						className: d.a.title
					}, t || s.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), o.a.createElement(i.n, {
						className: d.a.primaryRouterLink,
						to: "/"
					}, s.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				}
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
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/config.ts"),
				d = r("./src/reddit/actions/pages/followers/index.ts"),
				l = r("./src/reddit/components/ProfileSidebar/index.tsx"),
				c = r("./src/reddit/components/Scroller/Simple.tsx"),
				u = r("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				m = r("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				h = r("./src/reddit/contexts/PageLayer/index.tsx"),
				p = r("./src/reddit/layout/page/Listing/index.tsx"),
				b = r("./src/reddit/pages/ErrorPages/index.tsx"),
				f = r("./src/reddit/pages/ModHub/Header.tsx"),
				v = r("./src/reddit/selectors/followers.ts"),
				g = r("./src/reddit/selectors/profile.ts"),
				x = r("./src/lib/classNames/index.ts"),
				I = r("./src/reddit/components/TrackingHelper/index.tsx"),
				C = r("./src/reddit/components/UserNameAndIcon/index.tsx"),
				O = r("./src/reddit/controls/Button/index.tsx"),
				y = r("./src/reddit/helpers/trackers/followers.ts"),
				w = r("./src/reddit/pages/Followers/index.m.less"),
				j = r.n(w);
			var _ = e => {
				var t, r, a, l;
				const c = Object(i.d)(),
					u = Object(i.e)(t => Object(v.b)(t, e.userId)),
					m = Object(I.b)(),
					h = Object(n.useCallback)(() => {
						u && (c(Object(d.toggleFollowUser)(e.userId, !u.isFollowed)), m(Object(y.a)(!u.isFollowed)))
					}, [e.userId, c, m, u]);
				return u ? o.a.createElement("div", {
					className: j.a.userRow,
					key: u.id
				}, o.a.createElement(C.a, {
					username: u.name,
					tooltipId: `${u.id}-user-tooltip`,
					sendHoverCardEvent: () => {},
					userIcon: (null === (a = null === (r = null === (t = u.profile) || void 0 === t ? void 0 : t.styles) || void 0 === r ? void 0 : r.legacyIcon) || void 0 === a ? void 0 : a.url) || (null === (l = u.snoovatarIcon) || void 0 === l ? void 0 : l.url)
				}), u.isAcceptingFollowers && o.a.createElement(O.t, {
					className: Object(x.a)(j.a.followButton, {
						[j.a.followingButton]: u.isFollowed
					}),
					onClick: h,
					priority: u.isFollowed ? O.c.Plain : O.c.Tertiary
				}, u.isFollowed ? s.fbt._("Following", null, {
					hk: "3vqzzk"
				}) : s.fbt._("Follow", null, {
					hk: "3v1Euu"
				}))) : null
			};
			t.default = e => {
				const t = Object(i.d)(),
					r = Object(i.e)(v.a),
					x = Object(i.e)(v.e),
					I = Object(i.e)(v.c),
					C = Object(i.e)(v.d),
					O = Object(h.fb)(),
					y = Object(i.e)(e => Object(h.E)(e, {
						pageLayer: O
					})),
					w = Object(i.e)(t => Object(g.j)(t, {
						profileName: e.match.params.profileName
					})),
					[E, P] = Object(n.useState)("");
				Object(n.useEffect)(() => {
					E && t(Object(d.followersRequested)({
						...d.DEFAULT_VARIABLES,
						searchQuery: E
					}))
				}, [E, t]);
				const S = Object(n.useCallback)(() => {
					(null == C ? void 0 : C.hasNextPage) && (null == C ? void 0 : C.endCursor) && t(Object(d.followersRequested)({
						...d.DEFAULT_VARIABLES,
						after: C.endCursor
					}))
				}, [C, t]);
				if (!y) return o.a.createElement(b.a, null);
				const N = null == w ? void 0 : w.name;
				if (!N) return o.a.createElement(b.b, null);
				let k;
				if (0 === (null == r ? void 0 : r.length)) k = o.a.createElement("div", {
					className: j.a.emptyState
				}, o.a.createElement("img", {
					className: j.a.snooSmile,
					src: `${a.a.assetPath}/img/snoomoji/snoo.png`
				}), o.a.createElement("div", {
					className: j.a.emptyStateTitle
				}, s.fbt._("Followers", null, {
					hk: "4scwa7"
				})), o.a.createElement("div", {
					className: j.a.emptyStateDescription
				}, s.fbt._("You don't have any followers yet, but when someone follows you, you'll see them here.", null, {
					hk: "1WWMuR"
				})));
				else {
					let e;
					if (E) {
						const t = x ? Object.values(x)[0] : void 0;
						e = o.a.createElement(u.a, {
							noResultsFound: !t,
							searchTerm: E,
							cancelSearch: () => P(""),
							searchPending: !!I
						}, t && o.a.createElement(_, {
							userId: t.id
						}))
					} else r && (e = o.a.createElement(c.b, {
						loadMoreToken: (null == C ? void 0 : C.endCursor) || void 0,
						onLoadMore: S
					}, r.map(e => ({
						estHeight: 56,
						id: e,
						render: function() {
							return o.a.createElement(_, {
								userId: e
							})
						}
					}))));
					k = o.a.createElement(o.a.Fragment, null, o.a.createElement(m.b, {
						activeSearchQuery: E,
						onSearch: e => (e => {
							P(e)
						})(e),
						positionSearchRight: !0
					}, o.a.createElement("div", {
						className: j.a.topBar
					}, o.a.createElement("div", {
						className: j.a.topBarTitleText
					}, s.fbt._("Followers", null, {
						hk: "4ah1S2"
					})), o.a.createElement("div", {
						className: j.a.topBarDescriptionText
					}, s.fbt._("This list is only visible to you. The most recent follows are shown first.", null, {
						hk: "BYist"
					})))), e)
				}
				return o.a.createElement(p.a, {
					contentClassName: j.a.followersListing,
					disableFullscreen: !0,
					fitPageToContent: !0,
					contentNavBar: o.a.createElement(f.a, {
						subredditOrProfile: w || void 0,
						pageName: s.fbt._("Followers", null, {
							hk: "3DwX8d"
						})
					}),
					content: k,
					sidebar: o.a.createElement(l.a, {
						className: j.a.followersListing,
						profileName: N
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
				bodyFontH6Small: "_1AyCUR1VQn-opitbpGpNcf",
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
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/reddit/pages/ModHub/Header.m.less"),
				i = r.n(o),
				a = r("./src/reddit/components/SubredditIcon/index.tsx"),
				d = r("./src/reddit/controls/InternalLink/index.tsx");
			t.a = e => {
				var t, r;
				return n.a.createElement("div", {
					className: i.a.header
				}, n.a.createElement(a.b, {
					className: i.a.subredditIcon,
					subredditOrProfile: e.subredditOrProfile
				}), n.a.createElement(d.default, {
					className: i.a.subredditLink,
					to: (null === (t = e.subredditOrProfile) || void 0 === t ? void 0 : t.url) || "",
					onClick: e.onClick
				}, null === (r = e.subredditOrProfile) || void 0 === r ? void 0 : r.displayText), e.pageName && `/ ${e.pageName}`)
			}
		},
		"./src/reddit/reducers/pages/followers/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/redux/es/redux.js"),
				n = r("./src/reddit/actions/pages/followers/constants.ts");
			var o = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case n.b:
						case n.e:
						case n.a:
						case n.c:
							return !1;
						case n.d:
							return !0;
						default:
							return e
					}
				},
				i = Object(s.c)({
					pending: o
				});
			const a = {};
			var d = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case n.b:
					case n.a:
					case n.e: {
						const {
							followers: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case n.f: {
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
			var l = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case n.a:
					case n.b: {
						const {
							pageInfo: r
						} = t.payload;
						return r || e
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
					case n.e: {
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
			var h = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case n.b: {
						const {
							followerUserIds: r
						} = t.payload;
						return r || e
					}
					case n.a: {
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
				api: i,
				models: d,
				pageInfo: l,
				search: u,
				userIds: h
			})
		},
		"./src/reddit/selectors/experiments/econ/marketplace.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
					return !(Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: s.ee
					}) === s.yd)
				},
				i = e => Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.fe
				}) === s.yd
		},
		"./src/reddit/selectors/followers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			}));
			var s = r("./src/lib/initializeClient/installReducer.ts"),
				n = r("./src/reddit/reducers/pages/followers/index.ts");
			Object(s.a)({
				pages: {
					followers: n.a
				}
			});
			const o = e => {
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
				a = e => {
					var t, r;
					return null === (r = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === r ? void 0 : r.search
				},
				d = e => {
					var t, r;
					return null === (r = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === r ? void 0 : r.api.pending
				},
				l = e => {
					var t, r;
					return null === (r = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === r ? void 0 : r.pageInfo
				}
		},
		"./src/redditGQL/operations/ProfileFollowers.json": function(e) {
			e.exports = JSON.parse('{"id":"a7a31038ca56"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileFollowersPage.9c7942a118329b40acf9.js.map