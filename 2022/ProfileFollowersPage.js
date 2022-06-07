// https://www.redditstatic.com/desktop2x/ProfileFollowersPage.b6ec4990fa530f60293f.js
// Retrieved at 6/7/2022, 11:00:05 AM by Reddit Dataminer v1.0.0
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
		"./src/reddit/actions/pages/followers/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "f", (function() {
				return d
			}));
			const n = "PROFILE_FOLLOWERS_PAGE_LOADED",
				s = "MORE_PROFILE_FOLLOWERS_LOADED",
				i = "PROFILE_FOLLOWERS_SEARCH_LOADED",
				o = "PROFILE_FOLLOWERS_REQUEST_PENDING",
				a = "PROFILE_FOLLOWERS_REQUEST_FAILED",
				d = "FOLLOW_USER_SUCCESS"
		},
		"./src/reddit/actions/pages/followers/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "profileFollowersPageLoaded", (function() {
				return x
			})), r.d(t, "moreProfileFollowersLoaded", (function() {
				return g
			})), r.d(t, "profileFollowersSearchLoaded", (function() {
				return y
			})), r.d(t, "profileFollowersRequestPending", (function() {
				return C
			})), r.d(t, "profileFollowersPageFailed", (function() {
				return w
			})), r.d(t, "DEFAULT_VARIABLES", (function() {
				return I
			})), r.d(t, "followersPageRequested", (function() {
				return O
			})), r.d(t, "followersRequested", (function() {
				return _
			})), r.d(t, "followUserToggled", (function() {
				return E
			})), r.d(t, "toggleFollowUser", (function() {
				return k
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/emailVerificationTooltip.ts"),
				a = (r("./src/reddit/actions/pages/profileOverview/index.ts"), r("./src/reddit/actions/toaster.ts")),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				l = r("./src/redditGQL/operations/ProfileFollowers.json");
			var c = r("./src/reddit/endpoints/subreddit/subscriptions.ts");
			var u = e => {
					var t, r;
					if (!e.identity || !e.identity.followedByRedditorsInfo) return;
					const n = {},
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
					n.pageInfo = {
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
						} return n.followerUserIds = l, n.followers = c, n
				},
				m = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/selectors/experiments/emailEnablement.ts"),
				h = r("./src/reddit/actions/pages/followers/constants.ts"),
				b = r("./src/lib/initializeClient/installReducer.ts"),
				f = r("./src/reddit/reducers/pages/followers/index.ts"),
				v = r("./src/reddit/selectors/followers.ts");
			Object(b.a)({
				pages: {
					followers: f.a
				}
			});
			const x = Object(i.a)(h.b),
				g = Object(i.a)(h.a),
				y = Object(i.a)(h.e),
				C = Object(i.a)(h.d),
				w = Object(i.a)(h.c),
				I = {
					includeIdentity: !1,
					first: null,
					after: null,
					searchQuery: null
				},
				O = e => async (e, t, r) => {
					let {
						gqlContext: n
					} = r;
					var s;
					const i = [];
					(null === (s = Object(v.a)(t())) || void 0 === s ? void 0 : s.length) || i.push(e(_(I))), await Promise.all(i)
				}, _ = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = !r().user.account,
						o = {
							...I,
							...e,
							includeIdentity: i
						};
					t(C());
					const c = await (async (e, t) => {
						return await Object(d.a)(e, {
							...l,
							variables: t
						})
					})(s(), o);
					if (c.ok && c.body) {
						const {
							data: r
						} = c.body, n = u(r);
						if (!n) return t(Object(a.d)()), void t(w());
						(null == e ? void 0 : e.searchQuery) ? t(y(n)): (null == e ? void 0 : e.after) ? t(g(n)) : (null == e ? void 0 : e.after) || (null == e ? void 0 : e.searchQuery) || t(x(n))
					}
					c.ok || (t(Object(a.d)()), t(w()))
				}, E = Object(i.a)(h.f), k = (e, t) => async (r, i, d) => {
					let {
						apiContext: l
					} = d;
					var u, h;
					const b = i(),
						f = null === (h = null === (u = b.pages) || void 0 === u ? void 0 : u.followers) || void 0 === h ? void 0 : h.models[e];
					if (!f) return;
					r(E({
						userId: e,
						isFollowed: t
					}));
					const v = f.name;
					if ((await Object(c.c)(l(), {
							subredditNames: [`${s.kc}${f.name}`],
							subscribe: t
						})).ok) {
						r(E({
							userId: e,
							isFollowed: t
						}));
						const s = n.fbt._("Successfully followed {userName}", [n.fbt._param("userName", v)], {
								hk: "nYw1y"
							}),
							i = n.fbt._("Successfully unfollowed {userName}", [n.fbt._param("userName", v)], {
								hk: "1ki3kp"
							});
						r(Object(a.f)({
							text: t ? s : i
						})), Object(p.a)(b) && r(Object(o.c)("user_follow"))
					} else {
						const s = n.fbt._("Something went wrong", null, {
							hk: "3i6szH"
						});
						r(E({
							userId: e,
							isFollowed: !t
						})), r(Object(a.f)(Object(a.e)(s, m.b.Error)))
					}
				}
		},
		"./src/reddit/actions/pages/profileOverview/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "profileOverviewConversationsPending", (function() {
				return _e
			})), r.d(t, "profileOverviewConversationsLoaded", (function() {
				return Ee
			})), r.d(t, "profileOverviewConversationsFailed", (function() {
				return ke
			})), r.d(t, "profileOverviewChronoPending", (function() {
				return Se
			})), r.d(t, "profileOverviewChronoLoaded", (function() {
				return je
			})), r.d(t, "profileOverviewChronoFailed", (function() {
				return Ne
			})), r.d(t, "profileOverviewConversationsRequested", (function() {
				return Pe
			})), r.d(t, "profileOverviewRequested", (function() {
				return Te
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/pick.js"),
				s = r.n(n),
				i = r("./src/lib/constants/index.ts"),
				o = r("./src/reddit/actions/moderatingSubreddits.ts"),
				a = r("./src/reddit/actions/pages/profileShared.ts"),
				d = r("./src/reddit/actions/subreddit.ts"),
				l = r("./src/config.ts"),
				c = r("./src/lib/addAllowQuarantinedParam/index.ts"),
				u = r("./src/lib/makeApiRequest/index.ts"),
				m = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = r("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				h = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var b = r("./src/reddit/helpers/post/index.ts"),
				f = r("./src/reddit/constants/postLayout.ts"),
				v = r("./src/reddit/constants/parameters.ts"),
				x = r("./src/reddit/contexts/PageLayer/index.tsx"),
				g = r("./src/reddit/selectors/listings.ts"),
				y = r("./src/reddit/selectors/profile.ts"),
				C = r("./src/reddit/selectors/user.ts"),
				w = r("./src/lib/makeActionCreator/index.ts"),
				I = r("./src/reddit/actions/changeUsername.ts"),
				O = r("./src/reddit/actions/contentGate.ts"),
				_ = r("./src/reddit/actions/externalAccount.ts"),
				E = r("./src/reddit/actions/gold/powerups.ts"),
				k = r("./src/reddit/actions/pinnedPost.ts"),
				S = r("./src/reddit/actions/platform.ts"),
				j = r("./src/reddit/actions/profile/index.ts"),
				N = r("./src/reddit/actions/trophyCase.ts"),
				P = r("./src/reddit/constants/errors.ts"),
				T = r("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				R = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				F = r("./src/reddit/actions/pages/profileOverview/constants.ts"),
				L = r("./src/lib/initializeClient/installReducer.ts"),
				M = r("./node_modules/redux/es/redux.js"),
				U = r("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const A = {};
			var H = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case F.c:
					case F.b:
					case U.c:
					case U.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case F.a:
					case U.a: {
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
			const B = {};
			var W = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case F.c:
						case U.c: {
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
						case U.b:
						case U.a: {
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
				D = Object(M.c)({
					error: H,
					pending: W
				});
			const z = {};
			var V = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
					case U.b: {
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
			var G = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case F.b:
						case U.b: {
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
				q = r("./src/lib/omitKey/index.ts");
			const Q = {};
			var Y = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case F.b:
						case U.b: {
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
							} : Object(q.a)(e, r)
						}
						default:
							return e
					}
				},
				Z = Object(M.c)({
					api: D,
					fetchedTokens: V,
					ids: G,
					loadMore: Y
				});
			const J = {};
			var X = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			const $ = {};
			var ee = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $,
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				te = Object(M.c)({
					error: X,
					pending: ee
				}),
				re = r("./src/reddit/actions/profileConversations.ts");
			const ne = {};
			var se = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne,
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
			const ie = {};
			var oe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ie,
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
				ae = Object(M.c)({
					error: se,
					pending: oe
				});
			const de = {};
			var le = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : de,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case F.e:
						case re.b:
						case re.e:
							return {
								...e, ...t.payload.extraComments
							};
						default:
							return e
					}
				},
				ce = Object(M.c)({
					api: ae,
					models: le
				}),
				ue = r("./node_modules/lodash/mapValues.js"),
				me = r.n(ue),
				pe = r("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				he = r("./src/reddit/constants/comments.ts");
			const be = {};

			function fe(e) {
				const t = e;
				return me()(t, e => {
					let {
						depth: t,
						next: r,
						prev: n
					} = e;
					return {
						depth: t,
						next: r,
						prev: n
					}
				})
			}
			const ve = (e, t, r) => {
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
			var xe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : be,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case F.e:
					case re.e: {
						const {
							comments: r,
							extraComments: n,
							postIds: s,
							profileName: i
						} = t.payload, o = ve(s, r, n), a = {};
						for (const e of s) {
							a[Object(pe.a)(e, i)] = o.hasOwnProperty(e) ? fe(o[e]) : {}
						}
						return {
							...e,
							...a
						}
					}
					case re.b: {
						const {
							comments: r,
							commentLists: n,
							extraComments: s,
							extraCommentsId: i,
							postIds: o,
							profileName: a
						} = t.payload;
						if (0 === o.length) {
							const t = Object.keys(e).find(t => void 0 !== e[t][i]);
							if (!t) return e;
							const r = {
									...e[t]
								} [i].prev,
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
							l = fe(ve(o, r, s)[d]),
							c = Object(pe.a)(d, a),
							u = {
								...e[c]
							},
							m = u[i].prev,
							p = m && m.id || "",
							h = n[d].head,
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
			const ge = {};
			var ye = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ge,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case F.e:
					case re.e: {
						const {
							commentLists: r,
							postIds: n,
							profileName: s
						} = t.payload, i = {};
						for (const e of n) {
							i[Object(pe.a)(e, s)] = r[e] && r[e].head ? r[e].head.id : null
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
			const Ce = {};
			var we = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ce,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case F.e:
						case re.e: {
							const {
								postIds: r,
								profileName: n
							} = t.payload, s = {};
							for (const e of r) {
								s[Object(pe.a)(e, n)] = e
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
				Ie = Object(M.c)({
					api: te,
					extraComments: ce,
					keyToCommentThreadLinkSets: xe,
					keyToHeadCommentId: ye,
					keyToPostId: we
				}),
				Oe = Object(M.c)({
					chrono: Z,
					conversations: Ie
				});
			Object(L.a)({
				pages: {
					profileOverview: Oe
				}
			});
			const _e = Object(w.a)(F.f),
				Ee = Object(w.a)(F.e),
				ke = Object(w.a)(F.d),
				Se = Object(w.a)(F.c),
				je = Object(w.a)(F.b),
				Ne = Object(w.a)(F.a),
				Pe = (e, t, r, n) => async (n, s, o) => {
					const a = s(),
						d = !!a.listings.postOrder.ids[e],
						f = !!Object(g.c)(a, {
							listingKey: e
						});
					if (!!Object(g.d)(a, {
							listingKey: e
						}) || d && !f) return;
					n(_e({
						key: e
					}));
					const v = await Object(R.a)("profile", () => ((e, t, r) => Object(u.a)(e, {
							data: r,
							endpoint: Object(m.a)(Object(c.a)(Object(p.a)(Object(h.a)(`${l.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
							traceRequestName: "get_profile_conversations",
							method: i.jb.GET
						}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
							...e,
							body: {
								...e.body,
								pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
							}
						} : e))(o.apiContext(), t, r)),
						x = v.body;
					await Object(b.a)(o.gqlContext, x.posts).then(e => x.posts = e);
					const {
						pinned: C,
						postIds: w
					} = x;
					if (v.ok) {
						n(Ee({
							key: e,
							meta: a.meta,
							profileName: t,
							...x,
							postIds: w
						}));
						const r = Object(y.m)(s(), t);
						n(Object(k.h)({
							profileId: r,
							pinned: C
						}))
					} else n(ke({
						account: v.body.data ? v.body.data.account : null,
						error: v.body.reason ? {
							type: v.body.reason
						} : v.error,
						key: e
					})), v.body.reason === P.a.DeletedProfile && n(Object(O.s)({
						profileName: t
					})), n(Object(S.n)(v.status))
				}, Te = e => async (t, r, n) => {
					const {
						queryParams: l,
						params: c
					} = e, {
						sort: u,
						t: m
					} = Object(a.a)(r(), l), {
						profileName: p
					} = c;
					let h = !1;
					const b = f.e[Object(x.S)(r(), {})],
						g = p.toLowerCase(),
						w = {
							...s()(e.queryParams, v.l),
							sort: u,
							layout: b,
							t: m
						},
						O = [t(j.d(g))],
						k = Object(T.a)(g, i.ub, u, e.queryParams);
					if (r().listings.postOrder.ids[k] && !r().listings.postOrder.api.error[k] ? h = !0 : O.push(t(Pe(k, g, w, !0))), O.push(t(Object(o.b)())), await Promise.all(O), h) return;
					const P = r();
					if (!P.platform.currentPage) return;
					if (200 !== P.platform.currentPage.status) return;
					const R = Object(y.m)(r(), g),
						F = Object(C.Ab)(P, {
							userName: p
						}).id;
					t(S.m({
						title: Re(r(), p)
					})), Object(C.S)(P) && Object(C.W)(P, p) && t(Object(I.f)());
					const L = [t(Object(d.q)()), t(N.b(g, R)), t(j.b(g)), t(_.o(p)), t(j.g(p)), t(E.l(p, F))];
					await Promise.all(L)
				}, Re = (e, t) => Object(y.q)(e, {
					profileName: t
				})
		},
		"./src/reddit/actions/socialLinks/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return I
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "b", (function() {
				return E
			})), r.d(t, "d", (function() {
				return k
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/components/SocialLinks/constants.ts"),
				i = r("./src/reddit/components/SocialLinks/helpers.ts"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/redditGQL/operations/DeleteSocialLinks.json"),
				d = r("./src/redditGQL/operations/SetSocialLinks.json"),
				l = r("./src/redditGQL/operations/SocialLinks.json"),
				c = r("./src/redditGQL/operations/UpdateSocialLinks.json");
			var u = r("./src/reddit/helpers/name/index.ts"),
				m = r("./src/reddit/helpers/structuredStyles/validators.ts"),
				p = r("./src/reddit/selectors/socialLinks.ts"),
				h = r("./src/redditGQL/types.ts"),
				b = r("./src/reddit/actions/socialLinks/constants.ts"),
				f = r("./src/lib/initializeClient/installReducer.ts"),
				v = r("./src/reddit/reducers/features/socialLinks/index.ts");
			Object(f.a)({
				features: {
					socialLinks: v.a
				}
			});
			const x = Object(n.a)(b.a),
				g = Object(n.a)(b.b),
				y = Object(n.a)(b.c),
				C = Object(n.a)(b.d),
				w = Object(n.a)(b.e),
				I = e => {
					let {
						username: t
					} = e;
					return async (e, r, n) => {
						let {
							gqlContext: s
						} = n;
						const i = r();
						if (!!Object(p.c)(i, t)) return;
						e(g());
						const a = await (async (e, t) => {
							return await Object(o.a)(e, {
								...l,
								variables: t
							})
						})(s(), {
							username: t
						});
						if (a.ok && a.body) {
							const {
								data: r
							} = a.body, n = ((e, t) => {
								var r;
								const n = {},
									{
										redditorInfoByName: s
									} = t;
								if ("Redditor" !== (null == s ? void 0 : s.__typename)) return;
								const i = e.toLowerCase(),
									o = (null === (r = s.profile) || void 0 === r ? void 0 : r.socialLinks) || [];
								return n[i] = o, n
							})(t, r);
							n && e(x(n))
						}
					}
				},
				O = e => {
					let t, r, n, {
						socialLinkOption: i,
						rawHandle: o,
						rawTitle: a,
						url: d
					} = e;
					if (i.placeholderUrl) {
						const e = null == d ? void 0 : d.trim();
						if (!(e && Object(m.g)(e) === m.d.Valid)) throw new Error(s.f);
						t = e, r = null == a ? void 0 : a.trim()
					} else if (i.socialLinkType === h.x.Reddit) {
						const e = null == o ? void 0 : o.trim();
						if (!(e && Object(u.e)(e) && e && e.length >= s.h && !/\s/.test(e))) throw new Error(s.e);
						n = e
					} else n = null == o ? void 0 : o.trim();
					return {
						outboundUrl: t,
						title: r,
						handle: n,
						type: i.socialLinkType
					}
				},
				_ = (e, t) => async (r, n, a) => {
					let {
						gqlContext: l
					} = a;
					const c = n(),
						{
							socialLinkOption: u,
							rawHandle: m,
							rawTitle: h,
							url: b
						} = t;
					if (!Object(p.a)(c, e)) return;
					const f = O({
							socialLinkOption: u,
							rawHandle: m,
							rawTitle: h,
							url: b
						}),
						v = await (async (e, t) => {
							return await Object(o.a)(e, {
								...d,
								variables: t
							})
						})(l(), {
							input: {
								socialLinks: [f]
							}
						});
					if (v.ok && v.body) {
						const {
							data: t
						} = v.body, {
							errors: n,
							ok: o,
							socialLinks: a
						} = t.setSocialLinks;
						if (o && !n) {
							const t = ((e, t) => {
								if (0 === e.length) return;
								return {
									username: t.toLowerCase(),
									addedSocialLink: e[e.length - 1]
								}
							})(a, e);
							if (!t) throw new Error(s.b);
							r(y(t))
						} else Object(i.f)(n)
					} else {
						const {
							errors: e
						} = v.body;
						Object(i.f)(e)
					}
				}, E = (e, t) => async (r, n, s) => {
					let {
						gqlContext: i
					} = s;
					const d = n();
					if (!Object(p.a)(d, t)) return;
					const l = await (async (e, t) => {
						return await Object(o.a)(e, {
							...a,
							variables: t
						})
					})(i(), {
						input: {
							socialLinkIds: [e]
						}
					});
					if (l.ok && l.body) {
						const n = ((e, t) => {
							return {
								username: e.toLowerCase(),
								removedSocialLinkId: t
							}
						})(t, e);
						r(C(n))
					}
				}, k = (e, t, r) => async (n, a, d) => {
					let {
						gqlContext: l
					} = d;
					const u = a(),
						{
							socialLinkOption: m,
							rawHandle: h,
							rawTitle: b,
							url: f
						} = r;
					if (!Object(p.a)(u, t)) return;
					const v = {
							...O({
								socialLinkOption: m,
								rawHandle: h,
								rawTitle: b,
								url: f
							}),
							id: e
						},
						x = await (async (e, t) => {
							return await Object(o.a)(e, {
								...c,
								variables: t
							})
						})(l(), {
							input: {
								socialLinks: [v]
							}
						});
					if (x.ok && x.body) {
						const {
							data: r
						} = x.body, {
							errors: o,
							ok: a,
							socialLinks: d
						} = r.updateSocialLinks;
						if (a && !o) {
							const r = ((e, t, r) => {
								const n = t.find(t => t.id === e);
								if (n) return {
									username: r.toLowerCase(),
									updatedSocialLink: n
								}
							})(e, d, t);
							if (!r) throw new Error(s.b);
							n(w(r))
						} else Object(i.f)(o)
					} else {
						const {
							errors: e
						} = x.body;
						Object(i.f)(e)
					}
				}
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
				return ae
			})), r.d(t, "a", (function() {
				return de
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/get.js"),
				i = r.n(s),
				o = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/apiRequestState.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/actions/subreddit.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/constants/modals.ts"),
				m = r("./src/lib/constants/index.ts"),
				p = r("./src/lib/makeApiRequest/index.ts"),
				h = r("./src/lib/omitHeaders/index.ts"),
				b = r("./src/reddit/constants/headers.ts"),
				f = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				v = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const x = (e, t, r) => Object(p.a)(Object(h.a)(e, [b.a]), {
				endpoint: Object(f.a)(Object(v.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: m.jb.GET,
				data: r
			});
			var g = r("./src/reddit/helpers/normalizeUsername/index.tsx"),
				y = r("./src/reddit/models/SubredditModeration/index.ts"),
				C = r("./src/reddit/models/Toast/index.ts"),
				w = r("./src/reddit/selectors/activeModalId.ts"),
				I = r("./src/reddit/selectors/bannedUser.ts"),
				O = r("./src/reddit/selectors/subreddit.ts"),
				_ = r("./src/reddit/selectors/user.ts"),
				E = r("./src/reddit/actions/subredditModeration/constants.ts"),
				k = r("./src/lib/initializeClient/installReducer.ts"),
				S = r("./node_modules/redux/es/redux.js");
			var j = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case E.s:
					case E.r:
						return null;
					case E.q:
						return t.payload;
					default:
						return e
				}
			};
			const N = {};
			var P = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.s: {
							const {
								subredditId: r,
								fetchedToken: n
							} = t.payload, s = Object(y.e)(r, n);
							return {
								...e,
								[s]: !0
							}
						}
						case E.r:
						case E.q: {
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
				T = Object(S.c)({
					error: j,
					pending: P
				});
			const R = {};
			var F = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.r: {
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
				L = r("./src/reddit/actions/inContextModeration.ts");
			var M = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case L.a:
						return t.payload;
					default:
						return e
				}
			};
			const U = {};
			var A = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.r: {
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
				H = r("./node_modules/icepick/icepick.js");
			const B = {};
			var W = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case E.p:
					case E.r: {
						const {
							subredditId: r,
							bannedUsers: n
						} = t.payload;
						return Object(H.merge)(e, {
							[r]: n
						})
					}
					case E.w: {
						const {
							subredditId: r,
							userId: n
						} = t.payload;
						return Object(H.unsetIn)(e, [r, n])
					}
					default:
						return e
				}
			};
			var D = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case E.v:
					case E.u:
						return null;
					case E.t:
						return t.payload;
					default:
						return e
				}
			};
			var z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.v:
							return !0;
						case E.u:
						case E.t:
							return !1;
						default:
							return e
					}
				},
				V = Object(S.c)({
					error: D,
					pending: z
				});
			var K = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.v:
						case E.t:
							return null;
						case E.u: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				G = Object(S.c)({
					api: V,
					result: K
				});
			const q = {};
			var Q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.r: {
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
						case E.w: {
							const {
								subredditId: r,
								userId: n
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== n)
							}
						}
						case E.p: {
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
				Y = Object(S.c)({
					api: T,
					fetchedTokens: F,
					inContext: M,
					loadMore: A,
					models: W,
					search: G,
					userOrder: Q
				});
			Object(k.a)({
				features: {
					banned: Y
				}
			});
			const Z = Object(o.a)(E.s),
				J = Object(o.a)(E.r),
				X = Object(o.a)(E.q),
				$ = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (r, n, s) => {
						let {
							apiContext: i
						} = s;
						const o = n(),
							a = t.after || "",
							d = Object(y.e)(e, a),
							l = o.features.banned.fetchedTokens[d];
						if (o.features.banned.api.pending[d] || l) return;
						r(Z({
							subredditId: e,
							fetchedToken: a
						}));
						const c = o.subreddits.models[e].name,
							u = await x(i(), c, t);
						u.ok ? r(J({
							...u.body,
							fetchedToken: a
						})) : r(X({
							subredditId: e,
							fetchedToken: a
						}))
					}
				},
				ee = Object(o.a)(E.v),
				te = Object(o.a)(E.u),
				re = Object(o.a)(E.t),
				ne = (e, t) => async (r, n, s) => {
					let {
						apiContext: i
					} = s;
					const o = n().subreddits.models[e].name,
						a = {
							username: Object(g.a)(t)
						};
					r(ee());
					const d = await x(i(), o, a);
					d.ok ? r(te(d.body)) : r(re(d.error))
				}, se = Object(o.a)(E.p), ie = Object(o.a)(E.w), oe = (e, t, r) => async (s, o, d) => {
					let {
						apiContext: l
					} = d;
					const u = o(),
						f = u.subreddits.models[e].url,
						v = u.subreddits.models[e].name;
					t.username = Object(g.a)(t.username), s(Object(a.h)(r));
					const y = await ((e, t, r) => Object(p.a)(Object(h.a)(e, [b.a]), {
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
					if (y.ok) {
						s(Object(a.e)(r));
						const e = {
							username: t.username
						};
						s(Object(c.f)({
							kind: C.b.SuccessMod,
							text: n.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const i = await x(l(), v, e);
						i.ok && s(se(i.body))
					} else {
						s(Object(a.f)(r, y.error));
						const e = i()(y, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						s(Object(c.f)({
							kind: C.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ae = (e, t) => async (r, s, o) => {
					let {
						apiContext: a
					} = o;
					const d = s().subreddits.models[e].url,
						l = await ((e, t, r) => Object(p.a)(Object(h.a)(e, [b.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: m.jb.POST,
							data: {
								api_type: "json",
								id: r,
								type: "banned"
							}
						}))(a(), d, t);
					if (l.ok) r(ie({
						subredditId: e,
						userId: t
					})), r(Object(c.f)({
						kind: C.b.SuccessMod,
						text: n.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = i()(l, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(c.f)({
							kind: C.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, de = (e, t) => async (r, n) => {
					const s = n();
					await Promise.all([(async () => {
						if (!Object(w.b)(u.a.BAN_USER)(s) && !Object(O.R)(s, {
								subredditId: e
							})) {
							const t = Object(O.U)(s, {
								subredditId: e
							});
							await r(Object(l.o)(t.name))
						}
					})(), (async () => {
						const n = Object(_.Ab)(s, {
							userName: t
						});
						if (!n) return;
						const i = Object(I.h)(s, {
							subredditId: e
						});
						i && i[n.id] || await r($(e, {
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
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/components/Admin/index.m.less"),
				d = r.n(a),
				l = r("./src/lib/constants/icons.ts"),
				c = r("./src/reddit/icons/fonts/index.tsx"),
				u = r("./src/reddit/constants/experiments.ts"),
				m = r("./src/reddit/helpers/chooseVariant/index.ts");
			const p = e => Object(m.c)(e, {
				experimentEligibilitySelector: m.a,
				experimentName: u.a
			});
			t.a = () => {
				return Object(o.e)(p) ? i.a.createElement("span", {
					className: d.a.admin
				}, n.fbt._("Admin", null, {
					hk: "3MyAnD"
				})) : i.a.createElement(c.a, {
					name: l.a.admin,
					isFilled: !0,
					className: d.a.adminIcon,
					title: n.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				})
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var n, s = r("./node_modules/react/index.js"),
				i = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/actions/chat/toggle.ts"),
				d = r("./src/reddit/components/TrackingHelper/index.tsx"),
				l = r("./src/reddit/controls/Button/index.tsx"),
				c = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(n || (n = {}));
			const u = e => {
				let {
					onStartChat: t,
					text: r,
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
					style: x
				} = e;
				return i.a.createElement(l.t, {
					onClick: e => {
						if (b && b(e), t(), h === n.awardNotification) return f();
						o(Object(c.b)(a))
					},
					className: s,
					text: r,
					priority: d,
					Icon: u,
					redditStyle: m,
					isFullWidth: p,
					style: x
				}, v)
			};
			u.displayName = "ChatButton";
			const m = Object(o.b)(null, (e, t) => {
				let {
					contextId: r,
					userId: n
				} = t;
				return {
					onStartChat: () => {
						e(Object(a.b)(n, r))
					},
					onAddUserToQuickReplyList: () => {
						e(Object(a.a)(n))
					}
				}
			});
			t.b = m(Object(d.c)(u))
		},
		"./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(n.a)({
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
			t.a = s
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
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/controls/ImageInput/index.tsx"),
				d = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = r("./src/reddit/icons/fonts/index.tsx"),
				c = r("./src/reddit/models/ApiRequestState/index.ts"),
				u = r("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				m = r("./src/reddit/components/EditableImage/index.m.less"),
				p = r.n(m);
			const {
				fbt: h
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					altText: t,
					children: r,
					className: n,
					isProfileCard: m,
					isLoading: h,
					imageUrl: b,
					onFileSelected: f
				} = e;
				const v = Object(i.e)(u.a);
				return s.a.createElement("div", {
					className: Object(o.a)(p.a.Container, n)
				}, s.a.createElement("label", {
					className: p.a.HitBox
				}, s.a.createElement("span", {
					className: p.a.ImageContainer,
					role: "presentation"
				}, b ? s.a.createElement("img", {
					alt: t,
					className: p.a.Image,
					src: b
				}) : r), s.a.createElement(a.a, {
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
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/actions/snoovatarModal.ts"),
				d = r("./src/reddit/actions/tooltip.ts"),
				l = r("./src/reddit/helpers/isPost.ts"),
				c = r("./src/reddit/selectors/commentSelector.ts"),
				u = r("./src/reddit/selectors/gold/awardIcon.ts"),
				m = r("./src/reddit/selectors/moderatorPermissions.ts"),
				p = r("./src/reddit/selectors/modUserNotes.ts"),
				h = r("./src/reddit/selectors/posts.ts"),
				b = r("./src/reddit/selectors/profile.ts"),
				f = r("./src/reddit/selectors/structuredStyles.ts"),
				v = r("./src/reddit/selectors/subreddit.ts"),
				x = r("./src/reddit/selectors/tooltip.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				y = r("./src/reddit/selectors/userFlair.ts"),
				C = r("./src/reddit/selectors/userPrefs.ts"),
				w = r("./src/reddit/selectors/platform.ts"),
				I = r("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				O = r("./node_modules/fbt/lib/FbtPublic.js"),
				_ = r("./src/config.ts"),
				E = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				k = r("./src/lib/lessComponent.tsx"),
				S = r("./src/lib/prettyPrintNumber/index.ts"),
				j = r("./src/reddit/components/Admin/index.tsx"),
				N = r("./src/reddit/components/ChatButton/index.tsx"),
				P = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				T = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				R = r("./src/reddit/components/SubscribeButton/index.tsx"),
				F = r("./src/reddit/components/UserIcon/index.tsx"),
				L = r("./src/reddit/controls/Button/index.tsx"),
				M = r("./src/reddit/endpoints/profile/info.ts"),
				U = r("./src/reddit/helpers/trackers/authorHovercard.ts"),
				A = r("./src/reddit/icons/fonts/Info/index.tsx"),
				H = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				B = r("./src/reddit/models/Gold/Award.ts"),
				W = r("./src/reddit/models/User/index.ts"),
				D = r("./src/reddit/components/HumanDate/index.tsx"),
				z = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				V = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				K = r("./src/reddit/actions/inContextModeration.ts"),
				G = r("./src/reddit/actions/modal.ts"),
				q = r("./src/reddit/actions/subredditModeration/ban.ts"),
				Q = r("./src/reddit/constants/modals.ts"),
				Y = r("./src/reddit/components/Hovercards/helpers.ts"),
				Z = r("./src/reddit/icons/fonts/index.tsx"),
				J = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				X = r("./src/reddit/selectors/bannedUser.ts"),
				$ = r("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				ee = r.n($);
			const {
				fbt: te
			} = r("./node_modules/fbt/lib/FbtPublic.js"), re = Object(o.c)({
				hasModMailPermissions: Object(m.b)(J.c.mail),
				isUserBanned: (e, t) => !!Object(X.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(g.Ab)(e, {
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
						hasModMailPermissions: r,
						isUserBanned: n,
						onUnbanUser: i,
						sendEvent: o,
						toggleBanModal: a,
						toggleMuteModal: d
					} = this.props;
					return s.a.createElement("div", {
						className: e
					}, n ? s.a.createElement(Y.a, {
						role: "button",
						onClick: () => {
							i(this.props.user.id), o(U.e(t))
						}
					}, s.a.createElement(Z.a, {
						name: "ban",
						isFilled: !0,
						className: ee.a.icon
					}), te._("Unban User", null, {
						hk: "1aASyW"
					})) : s.a.createElement(Y.a, {
						role: "button",
						onClick: () => {
							a(), o(U.a(t))
						}
					}, s.a.createElement(Z.a, {
						name: "ban",
						className: ee.a.icon
					}), te._("Ban User", null, {
						hk: "3OhuLx"
					})), r && s.a.createElement(Y.a, {
						role: "button",
						onClick: () => {
							d(), o(U.d(t))
						}
					}, s.a.createElement(Z.a, {
						name: "mod_mute",
						className: ee.a.icon
					}), te._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var se = Object(i.b)(re, (e, t) => {
					let {
						username: r,
						subredditId: n,
						contextId: s
					} = t;
					return {
						onUnbanUser: t => e(Object(q.e)(n, t)),
						requestUserBanInfo: () => e(Object(q.c)(n, {
							username: r
						})),
						toggleBanModal: () => {
							e(Object(K.c)({
								username: r,
								subredditId: n,
								contextId: s
							})), e(Object(q.a)(n, r))
						},
						toggleMuteModal: () => {
							e(Object(K.d)({
								username: r,
								subredditId: n,
								contextId: s
							})), e(Object(G.i)(Q.a.MUTE_USER))
						}
					}
				})(ne),
				ie = r("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: oe
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var ae = Object(i.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(ie.g)(t.subredditId, t.username))
				}))(e => s.a.createElement(Y.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(U.c(e.contextId))
					}
				}, s.a.createElement(Z.a, {
					name: "tag",
					className: ee.a.icon
				}), oe._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				de = r("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				le = r.n(de);

			function ce() {
				return (ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ue = k.a.wrapped(F.a, "UserIcon", le.a),
				me = k.a.wrapped(R.a, "SubscribeButton", le.a),
				pe = k.a.wrapped(N.b, "ChatButton", le.a),
				he = k.a.wrapped(H.a, "PremiumIcon", le.a),
				be = k.a.wrapped(E.a, "UserNameLink", le.a),
				fe = k.a.div("UserNameMetaData", le.a),
				ve = k.a.div("MetaDataItem", le.a),
				xe = k.a.div("Bullet", le.a),
				ge = k.a.div("UserNameContainer", le.a),
				ye = k.a.div("KarmaGrid", le.a),
				Ce = k.a.div("GenericKarma", le.a),
				we = k.a.a("InfoLink", le.a),
				Ie = k.a.div("KarmaCount", le.a),
				Oe = k.a.div("GenericKarmaLabel", le.a),
				_e = k.a.div("BannerImage", le.a),
				Ee = k.a.div("UserContainer", le.a),
				ke = k.a.div("BottomSpacer", le.a),
				Se = k.a.div("Container", le.a),
				je = e => s.a.createElement("div", null, s.a.createElement("div", null, s.a.createElement(be, {
					to: `/user/${e.userName}/`
				}, e.title || e.userName), e.user.isGold && s.a.createElement(E.a, {
					to: "/premium"
				}, s.a.createElement(he, null)), e.user.isEmployee && s.a.createElement(j.a, null)), s.a.createElement(fe, null, s.a.createElement(ve, null, `u/${e.userName}`, s.a.createElement(xe, null, "•")), s.a.createElement(ve, null, (e.user.createdUtc || e.user.created) && s.a.createElement(D.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				Ne = e => {
					const {
						user: {
							karma: t
						}
					} = e, r = {
						...M.a,
						...t
					};
					return s.a.createElement(ye, null, s.a.createElement(Ce, null, s.a.createElement(Ie, null, Object(S.b)(r.fromPosts)), s.a.createElement(Oe, null, O.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [O.fbt._plural(r.fromPosts)], {
						hk: "3K4oaH"
					}))), s.a.createElement(Ce, null, s.a.createElement(Ie, null, Object(S.b)(r.fromComments)), s.a.createElement(Oe, null, O.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [O.fbt._plural(r.fromComments)], {
						hk: "3gKRx9"
					}))), s.a.createElement(Ce, null, s.a.createElement(Ie, null, Object(S.b)(r.fromAwardsReceived)), s.a.createElement(Oe, null, O.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [O.fbt._plural(r.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), s.a.createElement(we, {
						href: B.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(A.a, {
						className: le.a.infoIcon
					})))), s.a.createElement(Ce, null, s.a.createElement(Ie, null, Object(S.b)(r.fromAwardsGiven)), s.a.createElement(Oe, null, O.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [O.fbt._plural(r.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), s.a.createElement(we, {
						href: B.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(A.a, {
						className: le.a.infoIcon
					})))))
				},
				Pe = e => {
					var t, r;
					const {
						className: n,
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
						userName: x,
						user: g,
						userFlair: y,
						isCurrentUserBanned: C,
						userProfileStyles: w,
						acceptChats: I,
						isCommentAuthorBlocked: E
					} = e;
					if (!g) return s.a.createElement(Se, {
						style: b
					});
					const k = !!o && Object(W.e)(o) === x,
						S = !!(null == o ? void 0 : o.snoovatarFullBodyAsset),
						j = g.accountIcon || `${_.a.assetPath}/img/snoo_user_placeholder.png`,
						N = null == u ? void 0 : u.flair,
						T = null == u ? void 0 : u.access,
						R = (null == y ? void 0 : y.templateIds) && (null === (t = null == y ? void 0 : y.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						F = null === (r = null == y ? void 0 : y.displaySettings) || void 0 === r ? void 0 : r.isEnabled,
						{
							awardedLastMonth: M
						} = g,
						A = !!g.snoovatarFullBodyAsset,
						H = g.isNSFW && a;
					let B;
					return B = A ? !H && w && w.bannerBackgroundImage || void 0 : H ? `${_.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, s.a.createElement(Se, {
						className: n,
						id: d,
						style: b
					}, !A && B && s.a.createElement(_e, {
						style: {
							backgroundImage: `url('${B}')`
						}
					}), s.a.createElement(Ee, null, A ? s.a.createElement(V.a, {
						isHovercard: !0,
						bannerBackgroundImage: B,
						compact: !0,
						currentUserHasSnoovatar: S,
						isEmployee: g.isEmployee,
						isGold: g.isGold,
						isNSFW: g.isNSFW,
						isOwnProfile: k,
						onClickSnoovatar: () => c && c(),
						prefersReducedAnimations: !!m,
						snoovatarUrl: g.snoovatarFullBodyAsset,
						title: null == p ? void 0 : p.title,
						userCreated: g.created,
						username: x,
						url: `/user/${e.userName}/`
					}) : s.a.createElement(ge, null, s.a.createElement(ue, {
						iconUrl: j,
						isNSFW: g.isNSFW,
						userName: x
					}), s.a.createElement(je, {
						title: null == p ? void 0 : p.title,
						user: g,
						userName: x
					})), s.a.createElement(Ne, {
						user: g
					}), M && s.a.createElement(z.a, {
						recentAwardings: M,
						topAwardIcon: v,
						username: x
					}), l && !k && !C && I && !E && s.a.createElement(pe, {
						contextId: i,
						priority: L.c.Secondary,
						userId: g.id,
						text: O.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), g.hasUserProfile && !C && !E && !k && g.enableFollowers && s.a.createElement(me, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(U.h)(e ? "unfollow" : "follow", i),
						isFullWidth: !0,
						small: !0
					})), T && i && !k && f && s.a.createElement(se, {
						contextId: i,
						subredditId: f,
						sendEvent: h,
						username: x
					}), N && i && R && F && f && s.a.createElement(ae, {
						contextId: i,
						subredditId: f,
						sendEvent: h,
						username: x
					}), s.a.createElement(P.i, {
						contextId: i,
						subredditId: f,
						user: g
					}), !(T || l) && s.a.createElement(ke, null))
				},
				Te = Object(T.a)(Pe),
				Re = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return s.a.createElement(Te, ce({
						isOpen: t
					}, e))
				};
			Re.WrappedComponent = Pe;
			var Fe = Re;
			const Le = Object(o.c)({
					activeTooltipId: x.a,
					currentUser: g.k,
					isLoggedIn: g.Q,
					hideNSFWPref: g.F,
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
					user: g.Ab,
					userFlair: (e, t) => {
						let {
							subredditId: r
						} = t;
						return r ? Object(y.d)(e, {
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
						const n = Object(w.e)(e),
							s = r || n && Object(v.F)(e, n.name);
						return !!s && Object(m.i)(e, s)
					},
					trophyCase: (e, t) => Object(b.r)(e, Object(b.m)(e, t.userName)),
					isNightMode: g.db,
					lastAuthorModNote: (e, t) => {
						if (!t.contextId) return;
						const r = Object(l.a)(t.contextId) ? Object(h.G)(e, {
							postId: t.contextId
						}) : Object(c.b)(e, {
							commentId: t.contextId
						});
						return Object(p.b)(e, null == r ? void 0 : r.authorId, t.subredditId)
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
				Me = Object(i.b)(Le, (e, t) => ({
					onClickSnoovatar: () => e(Object(a.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(d.i)())
				}));
			t.a = Me(e => e.isModWithUserNotesPermissions ? s.a.createElement(I.b, {
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
			}) : s.a.createElement(Fe, {
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
				return i
			}));
			var n = r("./src/higherOrderComponents/makeAsync.tsx"),
				s = r("./src/lib/loadWithRetries/index.ts");
			const i = "UserInfoTooltip";
			t.b = Object(n.a)({
				ErrorComponent: () => null,
				getComponent: () => Object(s.a)(() => Promise.all([r.e("AuthorHovercard~Reddit"), r.e("AuthorHovercard")]).then(r.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.tsx"))).then(e => e.default),
				LoadingComponent: () => null
			})
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				o = r("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				a = r("./src/reddit/components/TrackingHelper/index.tsx");
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
			r.d(t, "a", (function() {
				return y
			})), r.d(t, "b", (function() {
				return C
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/lib/lessComponent.tsx"),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/actions/profile/index.ts"),
				l = r("./src/reddit/actions/tooltip.ts"),
				c = r("./src/reddit/selectors/tooltip.ts");
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
				p = r("./src/reddit/actions/subreddit.ts");
			const h = Object(a.c)({
				dropdownIsOpen: (e, t) => Object(c.b)(t.tooltipId)(e)
			});
			var b = Object(o.b)(h, (e, t) => ({
					onCloseUserDropdown: () => e(Object(l.i)()),
					onOpenUserDropdown: async () => {
						var r;
						e(Object(l.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.u)(t.authorOrSubredditName)), null === (r = t.onShow) || void 0 === r || r.call(t)
					}
				})),
				f = r("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				v = r.n(f);
			class x extends s.a.Component {
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
			const g = i.a.wrapped(x, "HoverDiv", v.a),
				y = m(g),
				C = b(g)
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
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/layout/row/Inline/index.tsx"),
				i = r("./src/reddit/components/Hovercards/helpers.m.less"),
				o = r.n(i);
			const a = n.a.wrapped(s.a, "UserActionItem", o.a),
				d = e => {
					const {
						author: t,
						itemId: r,
						subredditName: n,
						tooltipIdPrefix: s,
						tooltipType: i
					} = e;
					let o = s;
					return r && (o = `${o}--${r}`), i && (o = `${o}--${i}`), t && (o = `${o}--${t}`), n && (o = `${o}--${n}`), o
				}
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return x
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "c", (function() {
				return C
			})), r.d(t, "d", (function() {
				return I
			})), r.d(t, "e", (function() {
				return O
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "g", (function() {
				return E
			})), r.d(t, "h", (function() {
				return k
			})), r.d(t, "i", (function() {
				return S
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				a = r("./node_modules/lodash/isNil.js"),
				d = r.n(a),
				l = r("./src/reddit/constants/jsapiEvents.ts");
			var c = r("./src/reddit/singleton/EventSystem.ts");
			const u = Object(o.c)({
				consumers: e => e.jsApi
			});
			class m extends n.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: r,
								...n
							}
						} = this;
						c.a.publish(l.a, n, e)
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
				h = r("./src/reddit/selectors/comments.ts"),
				b = r("./src/reddit/selectors/commentSelector.ts"),
				f = r("./src/reddit/selectors/subreddit.ts");
			const v = (e, t) => {
				const r = Object(b.b)(e, t),
					n = Object(f.J)(e, t);
				return {
					comment: r,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var x = Object(i.b)(() => Object(o.a)(v, h.j, (e, t) => ({
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
			const g = (e, t) => {
				const r = Object(b.b)(e, t),
					n = Object(f.J)(e, t);
				return {
					comment: r,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var y = Object(i.b)(() => Object(o.a)(g, e => e))(e => s.a.createElement(p, {
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
			var C = Object(i.b)(() => Object(o.c)({
					subreddit: f.U
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
				w = r("./src/reddit/hooks/usePostContext.ts");
			var I = e => {
				const t = Object(w.a)(),
					r = Object(n.useMemo)(() => ({
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
					data: r
				}) : null
			};
			var O = e => {
				const t = Object(w.a)(),
					r = Object(n.useMemo)(() => ({
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
					data: r
				}) : null
			};
			var _ = e => {
				const t = Object(w.a)(),
					r = Object(n.useMemo)(() => ({
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
					data: r
				}) : null
			};
			var E = Object(i.b)(() => Object(o.c)({
				subreddit: f.U
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
			var k = Object(i.b)(() => Object(o.c)({
				subredditOrProfile: (e, t) => Object(f.M)(e, {
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
			var S = Object(i.b)(() => Object(o.c)({
				subreddit: (e, t) => {
					let {
						subredditId: r
					} = t;
					return r ? Object(f.U)(e, {
						subredditId: r
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/components/ModerationPagesEmptyList/index.m.less"),
				a = r.n(o);
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
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/config.ts"),
				o = r("./src/lib/prettyPrintNumber/index.ts"),
				a = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				d = r.n(a);
			const {
				fbt: l
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class c extends s.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: r
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: n,
						totalCount: a
					} = t, c = n.description ? n.description : n.name;
					return s.a.createElement("a", {
						className: d.a.AwardedLastMonth,
						href: `${i.a.oldRedditUrl}/user/${r}/gilded`
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
					}, [l._param("award-name", n.name), l._plural(a)], {
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
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				o = r("./src/reddit/models/Image/index.tsx"),
				a = r("./src/reddit/components/EditableImage/index.tsx"),
				d = r("./src/reddit/models/User/index.ts"),
				l = r("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				c = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				u = r.n(c);
			class m extends i.a.Component {
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
						userName: l
					} = this.props, {
						isUpdating: c
					} = this.state, m = e ? i.a.createElement("div", {
						className: u.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return r && Object(d.e)(r) === l ? i.a.createElement(a.a, {
						altText: n.fbt._("{userName} banner image", [n.fbt._param("userName", l)], {
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
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/actions/preferences.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const a = Object(s.c)({
					currentUser: o.k,
					hideNSFWPref: o.F
				}),
				d = Object(n.b)(a, e => ({
					imageUpdateRequested: (t, r) => e(Object(i.C)(t, r))
				}));
			t.a = d
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/react-router/esm/react-router.js"),
				d = r("./src/reddit/actions/post.ts"),
				l = r("./src/reddit/actions/snoovatarModal.ts"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				u = r("./src/reddit/controls/Button/index.tsx"),
				m = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				h = r("./src/reddit/models/Vote/index.ts"),
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
					share: x
				} = e;
				const g = Object(c.b)(),
					y = Object(o.d)(),
					C = b && b.id,
					w = b && b.voteState;
				let I = null;
				C || (I = t ? "user_hovercard" : "profile_overview");
				const O = Object(s.useCallback)(() => g(Object(m.h)(t ? "user_hovercard" : "profile_overview", r)), [t, g, r]);
				return i.a.createElement(u.t, {
					onClick: () => {
						a ? (g(m.i), C && w === h.a.notVoted && y(Object(d.kb)(C))) : O();
						const e = a ? "postify" : "copy";
						y(Object(l.b)({
							clickSource: I,
							share: x,
							source: e
						}))
					},
					className: Object(n.a)(f.a.snoovatarButton, f.a.snoovatarExtraPadding, f.a.compactButtonLayout, {
						[f.a.avatarPostifyButton]: a
					}),
					isFullWidth: !0
				}, i.a.createElement(p.a, {
					className: Object(n.a)({
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
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/Button/index.tsx"),
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
					className: n,
					isOwnProfile: l,
					onClick: m
				} = e;
				return s.a.createElement(o.t, {
					onClick: m,
					isFullWidth: !0,
					className: Object(i.a)(c.a.snoovatarButton, {
						[c.a.snoovatarExtraPadding]: !r && l,
						[c.a.compactButtonLayout]: t
					}, n)
				}, r ? s.a.createElement(d.a, {
					className: c.a.shirtIcon
				}) : s.a.createElement("div", {
					className: c.a.shirtIcon
				}), r ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : l ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), r ? s.a.createElement("div", {
					className: c.a.chevronIcon
				}) : s.a.createElement(a.a, {
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				o = r("./src/reddit/icons/svgs/Close/index.tsx"),
				a = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				d = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				l = r.n(d),
				c = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				u = r.n(c);
			t.a = function(e) {
				let {
					bannerBackgroundImage: t,
					isNSFW: r,
					username: n,
					editMode: d,
					isDeletingBanner: c,
					onDeleteBanner: m
				} = e;
				return s.a.createElement("div", {
					className: l.a.bannerWrapper
				}, s.a.createElement(a.a, {
					bannerUrl: t,
					isNSFW: r,
					userName: n
				}), d && t && (c ? s.a.createElement(i.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : s.a.createElement(o.a, {
					className: u.a.closeIcon,
					onClick: m
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/reddit/controls/InternalLink/index.tsx"),
				o = r("./src/reddit/components/HumanDate/index.tsx");

			function a() {
				return (a = Object.assign || function(e) {
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
			t.a = function(e) {
				let {
					className: t,
					shouldDisplaySnoovatar: r,
					url: n,
					userCreated: d,
					username: l,
					...c
				} = e;
				const u = r ? s.a.createElement(s.a.Fragment, null, "u/", l, " · ", s.a.createElement(o.d, {
					seconds: d,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${l}`;
				return n ? s.a.createElement(i.default, a({}, c, {
					className: t,
					to: n
				}), u) : s.a.createElement("span", a({}, c, {
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
				return w
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts"),
				l = r("./src/reddit/helpers/userSnoovatar/index.ts"),
				c = r("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				u = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				m = r.n(u);
			const p = 25;

			function h(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function b(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const f = h("particleDelay", m.a),
				v = h("particleX", m.a),
				x = h("particleFloat", m.a),
				g = () => {
					const e = b(v),
						t = b(x),
						r = b(f);
					return Object(a.a)(m.a.particle, e, t, r)
				};
			class y extends i.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < p; t++) e.push(this.createParticle(t));
					return i.a.createElement("div", {
						role: "presentation",
						className: m.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return i.a.createElement("div", {
						key: e,
						className: `${g()}`
					})
				}
			}
			var C = y;
			const w = e => {
				let {
					className: t,
					isGold: r,
					snoovatarUrl: s,
					prefersReducedAnimations: u,
					origin: p
				} = e;
				const h = Object(o.e)(c.b);
				return s && Object(l.d)(s) && h ? i.a.createElement("div", {
					className: m.a.nftProfileUnitContainer
				}, i.a.createElement(d.a, {
					className: m.a.nftProfileUnit,
					imageUrl: s,
					origin: p
				})) : i.a.createElement("div", {
					className: Object(a.a)(m.a.snoovatarContainer, t)
				}, r && i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: m.a.topGlow
				}), i.a.createElement("div", {
					className: m.a.bottomGlow
				}), !u && i.a.createElement(C, null)), i.a.createElement("img", {
					className: Object(a.a)(m.a.snoovatar, {
						[m.a.premiumGlow]: r
					}),
					src: s,
					alt: n.fbt._("User Avatar", null, {
						hk: "3aQoRV"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./node_modules/react/index.js"),
				o = r.n(i),
				a = r("./src/reddit/components/Admin/index.tsx"),
				d = r("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				l = r("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				c = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				u = r.n(c);
			t.a = e => {
				let {
					title: t,
					username: r,
					isEmployee: i,
					isGold: c,
					isNSFW: m
				} = e;
				return o.a.createElement("h1", {
					className: u.a.snoovatarUserTitle
				}, t || r, c && o.a.createElement("a", {
					title: s.fbt._("{username} has Reddit Premium", [s.fbt._param("username", r)], {
						hk: "3Fylv"
					}),
					href: `${n.a.redditUrl}/premium`
				}, o.a.createElement(l.a, {
					className: u.a.snoovatarPremiumIcon
				})), i && o.a.createElement(a.a, null), m && o.a.createElement(d.a, {
					className: u.a.snoovatarNsfwIcon,
					title: s.fbt._("NSFW - Adult Content", null, {
						hk: "2Iw7mN"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/controls/InternalLink/index.tsx"),
				a = r("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				d = r("./src/reddit/icons/fonts/index.tsx"),
				l = r("./src/reddit/selectors/experiments/econ/index.ts"),
				c = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				p = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				h = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				b = r.n(h),
				f = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				v = r.n(f),
				x = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/AvatarImage.tsx"),
				g = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = e => {
				let {
					bannerBackgroundImage: t,
					compact: r,
					currentUserHasSnoovatar: n,
					editMode: h,
					isDeletingBanner: f,
					isEmployee: y,
					isGold: C,
					isNSFW: w,
					isOwnProfile: I,
					onClickSnoovatar: O,
					onDeleteBanner: _,
					prefersReducedAnimations: E,
					snoovatarUrl: k,
					title: S,
					userCreated: j,
					username: N,
					url: P,
					isHovercard: T
				} = e;
				const R = Object(i.e)(e => !I && !!k && Object(l.f)(e));
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(m.a, {
					bannerBackgroundImage: t,
					editMode: !!h,
					isNSFW: w,
					username: N,
					isDeletingBanner: !!f,
					onDeleteBanner: _
				}), !h && I && s.a.createElement(o.default, {
					to: "/settings/profile",
					className: b.a.snoovatarSettingsLink
				}, s.a.createElement(d.a, {
					name: "settings",
					className: v.a.settingsIcon
				})), s.a.createElement(x.a, {
					isGold: C,
					snoovatarUrl: k,
					prefersReducedAnimations: E,
					origin: T ? a.a.Hovercard : a.a.Profile
				}), s.a.createElement(g.a, {
					isEmployee: y,
					isGold: C,
					isNSFW: w,
					title: S,
					username: N
				}), s.a.createElement(p.a, {
					className: b.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: N,
					userCreated: j,
					url: P
				}), (I || !n && !!k) && s.a.createElement(c.a, {
					compact: r,
					currentUserHasSnoovatar: n,
					isOwnProfile: I,
					onClick: O
				}), R && s.a.createElement(u.a, {
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
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/actions/socialLinks/index.ts"),
				d = r("./src/reddit/components/SidebarContainer/index.tsx"),
				l = r("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				c = r("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				u = r("./src/reddit/components/SidebarProfilePowerupContributions/index.tsx"),
				m = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = r("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				h = r("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				b = r("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				f = r("./src/reddit/constants/posts.ts"),
				v = r("./src/reddit/selectors/experiments/econ/index.ts");
			const x = Object(n.a)({
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
				g = e => {
					const t = Object(o.e)(e => Object(v.j)(e)),
						r = Object(o.d)();
					return Object(s.useEffect)(() => {
						r(Object(a.c)({
							username: e.profileName
						}))
					}, [r, e.profileName]), i.a.createElement(d.a, {
						className: e.className
					}, i.a.createElement(x, {
						profileName: e.profileName,
						isOverlay: e.isOverlay
					}), i.a.createElement(b.a, {
						subredditOrProfile: {
							name: e.profileName,
							type: f.a.PROFILE
						}
					}), i.a.createElement(l.a, {
						profileName: e.profileName
					}), i.a.createElement(c.a, {
						profileName: e.profileName
					}), !t && i.a.createElement(m.a, null, i.a.createElement(u.a, {
						profileName: e.profileName
					})), i.a.createElement(m.a, null, i.a.createElement(h.a, {
						profileName: e.profileName
					})), i.a.createElement(p.a, {
						hideBackToTop: e.hideBackToTop
					}))
				};
			g.defaultProps = {
				isOverlay: !1
			}, t.a = g
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
			var n = r("./node_modules/lodash/debounce.js"),
				s = r.n(n),
				i = r("./node_modules/lodash/isNil.js"),
				o = r.n(i),
				a = r("./node_modules/react/index.js"),
				d = r.n(a),
				l = r("./node_modules/react-dom/index.js"),
				c = r("./node_modules/react-redux/es/index.js"),
				u = r("./node_modules/request-idle-callback/index.js"),
				m = r("./node_modules/reselect/es/index.js"),
				p = r("./src/lib/constants/index.ts"),
				h = r("./src/lib/fastdom/index.ts"),
				b = r("./node_modules/lodash/throttle.js"),
				f = r.n(b);
			const v = 500,
				x = 1e3,
				g = 40;
			var y;
			! function(e) {
				e.Max10 = "0-10", e.Max20 = "11-20", e.Max30 = "21-30", e.Max40 = "31-40", e.Max50 = "41-50", e.Max60 = "51-60"
			}(y || (y = {}));
			const C = () => ({
					[y.Max10]: 0,
					[y.Max20]: 0,
					[y.Max30]: 0,
					[y.Max40]: 0,
					[y.Max50]: 0,
					[y.Max60]: 0
				}),
				w = [y.Max10, y.Max20, y.Max30, y.Max40, y.Max50, y.Max60],
				I = e => ({
					eventHandler: e
				});

			function O(e) {
				let {
					fn: t,
					subscriber: r,
					timeout: n
				} = e;
				const s = [];
				let i, o, a;
				const d = () => {
						if (s.length < g) return;
						const e = C(),
							t = Math.min(x, s.length),
							n = s.splice(0, t);
						s.splice(0, s.length);
						const i = n[t - 1] - n[0];
						for (let r = n.shift(); n.length > 0; r = n.shift()) {
							const t = n[0] - r,
								s = Math.min(60, Math.ceil(1e3 / t));
							e[s <= 10 ? y.Max10 : 60 === s ? y.Max60 : w[Math.ceil(s / 10) - 1]] += t
						}
						const o = C();
						for (const r in e) o[r] = e[r] / i;
						r(o)
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
						l(), a = window.setTimeout(c, n)
					}, p.K);
				return {
					cleanup: c,
					eventHandler: e => {
						void 0 === o ? (u(), m(), o = window.setInterval(d, v)) : m(), t(e)
					}
				}
			}
			var _ = r("./src/lib/scheduler/index.ts"),
				E = r("./src/lib/domUtils/index.ts"),
				k = r("./src/lib/LinkedListMap/index.ts");
			const S = (e, t) => e < 0 ? t + e : e % t;
			class j {
				constructor(e) {
					this.head = 0, this.size = 0, this.maxSize = e, this.items = new Array(e)
				}
				push(e) {
					return this.items[this.head] = e, this.head = S(this.head + 1, this.maxSize), this.size < this.maxSize && this.size++, this
				}
				pop() {
					if (this.size > 0) {
						const e = S(this.head - 1, this.maxSize),
							t = this.items[e];
						return this.items[e] = void 0, this.head = e, this.size--, t
					}
				}
				forEach(e) {
					let t = this.size < this.maxSize ? S(this.head - this.size, this.maxSize) : this.head;
					for (let r = 0; r < this.size; r++) e(this.items[t], r, this.size), t = (t + 1) % this.maxSize
				}
				map(e) {
					const t = new Array(this.size);
					return this.forEach((r, n, s) => {
						t[n] = e(r, n, s)
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
			class P {
				constructor(e) {
					let {
						top: t,
						height: r,
						heightWithSuffix: n
					} = e;
					this.height = r, this.heightWithSuffix = n, this.top = t, this.bottom = this.top + this.height
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
				const r = o()(e) ? 1e3 : e;
				if ("undefined" != typeof window && t) {
					const e = t === document ? Object(N.a)() : t.scrollTop;
					return new P({
						top: e,
						height: window.innerHeight
					})
				}
				return new P({
					top: 0,
					height: r
				})
			};
			var R = r("./src/reddit/components/ResizeSensor/index.tsx"),
				F = r("./src/reddit/constants/componentSizes.ts"),
				L = r("./src/reddit/constants/elementClassNames.ts"),
				M = r("./src/reddit/contexts/InsideOverlay.tsx"),
				U = r("./src/reddit/selectors/platform.ts"),
				A = r("./src/telemetry/helpers/sendEvent.ts"),
				H = r("./src/telemetry/helpers/sendTiming.ts"),
				B = r("./src/reddit/components/Scroller/Simple.m.less"),
				W = r.n(B);
			const D = F.g,
				z = 5 * p.K,
				V = 3,
				K = Object(m.c)({
					isOverlayOpen: U.i
				}),
				G = Object(c.b)(K),
				q = {};

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
				J = .9,
				X = .9,
				$ = 1.8,
				ee = 5,
				te = 1500,
				re = 2 * p.K,
				ne = 400,
				se = 8,
				ie = 5 * p.K,
				oe = 30,
				ae = "object" == typeof performance && "function" == typeof performance.now,
				de = () => ae ? performance.now() : Date.now();

			function le(e, t) {
				return k.a.fromArray(e.children.map((e, r) => {
					const n = t && t.get(e.id);
					return n ? (n.isFocusable = !!e.isFocusable, n.trackOnEnteredViewport = e.trackOnEnteredViewport, n.trackOnExitedViewport = e.trackOnExitedViewport, n) : {
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
						A.b.enqueue(new _.a({
							args: [e, t],
							cb: (e, t) => Object(H.a)(p.m.Redesign, {
								data: e,
								meta: t,
								type: "scrollfps"
							})
						}))
					}, this.getVisibleChildren = () => {
						let e = 0;
						const t = te + (this.props.viewportTopPadding ? this.props.viewportTopPadding : 0),
							r = [];
						let n = this.nextVisibleChildrenIndex;
						for (; e < t && n < this.props.children.length;) {
							const t = this.props.children[n];
							r.push(t), e += t.estHeight, n++
						}
						return this.visibleChildrenCount = r.length, r
					}, this.setRenderableChildrenIndexIncrement = () => {
						if (this.props.children[0]) {
							const e = this.props.children[0].estHeight;
							this.renderableChildrenIndexIncrement = Math.min(Math.ceil(ne / e), se)
						} else this.renderableChildrenIndexIncrement = se
					}, this.updateRenderableChildrenWhenIdle = () => {
						this.cancelPopulateRenderableChildrenWhenIdle(), this.hasScrolledWithinThreshold() || (this.timeoutForUpdateIdleCallback = ie, Object(u.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle), this.requestUpdateWhenIdleCallbackHandle = Object(u.requestIdleCallback)(() => {
							const e = Math.ceil(this.renderableChildrenIndexIncrement / 2);
							this.populateRenderableChildrenFromProps(!1, e)
						})), this.state.renderableChildren.length < this.props.children.length && this.schedulePopulateRenderableChildrenWhenIdle()
					}, this.hasScrolledWithinThreshold = () => !!this.lastScrollTime && de() - this.lastScrollTime < re, this.populateRenderableChildrenFromProps = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
							r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.renderableChildrenIndexIncrement,
							n = arguments.length > 2 ? arguments[2] : void 0;
						const s = n || t.props.children;
						if (t.state.renderableChildren.length < s.length || e)
							if (t.hasScrolledWithinThreshold()) h.a.read(() => {
								clearTimeout(t.updateRenderableChildrenHandle), t.updateRenderableChildrenHandle = setTimeout(() => {
									t.populateRenderableChildrenFromProps(e, t.renderableChildrenIndexIncrement, n ? s : void 0)
								}, re)
							});
							else {
								t.nextVisibleChildrenIndex + r <= s.length ? t.nextVisibleChildrenIndex += r : t.nextVisibleChildrenIndex = s.length;
								const e = s.slice(0, t.nextVisibleChildrenIndex);
								e.length && (t.lastVisibleElId = e[e.length - 1].id), h.a.write(() => {
									t.setState({
										renderableChildren: e
									})
								}), t.isRenderableChildrenStateChangePending = !0
							}
					}, this.lastElementIsAboutToBeVisible = () => {
						if (this.lastVisibleEl) {
							if (this.lastVisibleEl.getBoundingClientRect().top < window.innerHeight + ne) return !0
						}
						return !1
					}, this.getRenderableChildrenIndexIncrement = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oe,
							r = 0,
							n = t.state.renderableChildren.length;
						for (; r < e && n < t.props.children.length;) r += t.props.children[n].estHeight, n++;
						const s = n - t.state.renderableChildren.length;
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
								itemRef: r
							} = e;
							r && (e.focused = !1, t.push(r.pauseContent))
						}), h.a.write(() => {
							t.forEach(e => e())
						})
					}, this.elementIsVisible = e => !!this.viewport && this.viewport.intersects(e), this.getItemsInViewportWithFilter = e => {
						this.updateViewportInfo();
						const t = new k.a("id");
						return this.state.renderableChildren.forEach(r => {
							const n = this.childMap.get(r.id);
							n && e(n) && t.push(n)
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
							const r = (null == e ? void 0 : e.getBoundingClientRect().top) || 0;
							this.distanceToTop = r + this.getScrollTop()
						}
						const r = t.offsetTop + this.parentOffsetTop,
							n = t.getBoundingClientRect().height,
							s = new P({
								top: r,
								height: n,
								heightWithSuffix: `${n}px`
							});
						return e.rectangle = s, s
					}, this.handleResize = e => {
						this.fpsMeter && this.fpsMeter.eventHandler(e);
						for (const t in this.hiddenChildren) this.remeasureWhenShown[t] = !0;
						this.measurementsInvalid = !0, this.callOnScrollForItemsChanged()
					}, this.getTotalOffsetTop = () => this.containerRef ? Y(this.containerRef) : 0, this.handleContentContainerResize = s()(() => {
						this.pendingResizeHandlerRead || (this.pendingResizeHandlerRead = h.a.read(() => {
							const e = this.getTotalOffsetTop();
							e !== this.containerOffsetTop && (this.containerOffsetTop = e, this.handleResize()), this.pendingResizeHandlerRead = null
						}))
					}, p.K), this.handleScroll = () => {
						this.pendingScollHandlerRead || (this.pendingScollHandlerRead = h.a.read(() => {
							if (clearTimeout(this.resetCanFocusTimer), this.cancelPopulateRenderableChildrenWhenIdle(), Object(E.b)() || !this.scrollContainer) return void(this.pendingScollHandlerRead = null);
							this.updateScrollMetrics();
							const e = this.getAveragePixelsPerMilliSecond(),
								t = e < J,
								r = e < X,
								n = e < $;
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
							const s = new k.a("id");
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
									this.elementIsHideable(l) ? void 0 === this.hiddenChildren[e] && (this.childrenToHide[e] = `${l.height+10}px`) : void 0 !== this.hiddenChildren[e] && (this.childrenToShow[e] = !0)
								}
								if (!d || !d.el || !d.rectangle) return void(this.measurementsInvalid && d && this.getChildRectangle(d));
								const {
									id: c,
									itemRef: u,
									trackOnEnteredViewport: m
								} = d, p = !!this.itemsInViewport.get(c);
								if (this.elementIsUnmountable(l)) u && p && d.loaded && d.isFocusable && a.push(u.pauseContent);
								else if (u && this.loadItemIfPossible(d, u, t, r, n, a), this.elementIsVisible(l)) {
									s.push(d), !p && m && A.b.enqueue(new _.a({
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
									trackOnExitedViewport: r
								} = e;
								r && !s.has(t) && A.b.enqueue(new _.a({
									cb: r,
									args: [!1]
								}))
							}), this.itemsInViewport = s, this.canFocusItems = t, this.focusedChild = i, this.primaryChild = o, this.measurementsInvalid = !1, this.needsToPauseViewportItems = !1, t ? null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(u.requestIdleCallback)(this.unmountItemsWhileIdle)) : (this.resetCanFocusTimer = setTimeout(this.resetScrollFramerateAndFocus, z), null !== this.unmountItemsIdleId && (Object(u.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)), this.props.onScroll && this.props.onScroll({
								getVisibleItemsInViewport: () => this.getItemsInViewportWithFilter(this.visibleChildRefFilter),
								primaryChild: this.primaryChild ? this.childMap.get(this.primaryChild) : void 0
							}), this.timeoutForUpdateIdleCallback = 4 * ie, this.schedulePopulateRenderableChildrenWhenIdle(), this.pendingScollHandlerRead = null
						}))
					}, this.unmountItemsWhileIdle = e => {
						if (!this.scrollContainer) return;
						const t = [];
						if (this.state.renderableChildren.forEach(e => {
								const r = this.childMap.get(e.id);
								if (!r || !r.el || !r.itemRef) return;
								const n = this.getChildRectangle(r);
								n && this.elementIsUnmountable(n) && r.loaded && t.push(r)
							}), !t.length) return;
						const r = Math.min(Math.ceil(e.timeRemaining() / V), t.length),
							n = [];
						for (let s = 0; s < r; s++) {
							const e = t[s];
							n.push(e.itemRef.unmountContent), e.loaded = !1, e.focused = !1
						}
						Object(l.unstable_batchedUpdates)(() => {
							this.scrollContainer && n.forEach(e => e())
						}), r < t.length ? this.unmountItemsIdleId = Object(u.requestIdleCallback)(this.unmountItemsWhileIdle) : this.unmountItemsIdleId = null
					}, this.hideOrShowChildren = s()(() => {
						for (const e in this.childrenToHide) {
							const t = this.childrenToHide[e];
							void 0 !== t && (this.hideChild(e, t), this.childrenToHide[e] = void 0)
						}
						for (const e in this.childrenToShow) void 0 !== this.childrenToShow[e] && (this.showChild(e), this.childrenToShow[e] = void 0)
					}, p.K), this.hideChild = (e, t) => {
						const r = this.childMap.get(e);
						if (!r || !r.el) return;
						const n = r.el.firstChild;
						n && (t !== r.el.style.height && (r.el.style.height = t), n.classList.add(W.a.Hidden), this.hiddenChildren[e] = t, r.loaded && h.a.write(() => {
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
						this.measurementsInvalid = !0, h.a.read(() => {
							const r = this.childMap.get(e);
							if (r && r.el && this.scrollContainer) {
								if (r.rectangle = void 0, t && this.isScrollChildTopVisible(e)) return;
								const n = this.getScrollTop() + r.el.getBoundingClientRect().top - (this.props.scrollToChildPadding || 0) - (this.props.viewportTopPadding || 0);
								setTimeout(() => {
									this.scrollContainer && (Object(E.c)(this.scrollContainer, n), this.callOnScrollForItemsChanged())
								}, p.K)
							}
						})
					}, this.isScrollChildTopVisible = e => {
						const t = this.childMap.get(e);
						if (t && t.el && this.scrollContainer) {
							const {
								scrollToChildPadding: e = 0,
								viewportTopPadding: r = 0
							} = this.props, n = window.innerHeight - r, {
								top: s
							} = t.el.getBoundingClientRect();
							return s >= r + e && s < n
						}
						return !1
					}, this.childMap = le(e), this.containerRef = null, this.itemsInViewport = new k.a("id"), this.loadMoreFired = !1, this.pixelsPerMSRing = new j(Z), this.wrapperRefFNs = {}, this.childRefFns = {}, this.childrenToHide = {}, this.childrenToShow = {}, this.canFocusItems = !0, this.focusedChild = void 0, this.hiddenChildren = {}, this.nextVisibleChildrenIndex = 0, this.lastVisibleEl = null, this.lastVisibleElId = null, this.remeasureWhenShown = {}, this.timeoutForUpdateIdleCallback = ie;
					const r = this.getVisibleChildren();
					r.length && (this.lastVisibleElId = r[r.length - 1].id), this.nextVisibleChildrenIndex = r.length, this.updateRenderableChildrenHandle = null, this.state = {
						renderableChildren: r
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
					this.fpsMeter = this.props.trackingName ? O({
						fn: this.handleScroll,
						subscriber: this.sendFPSData,
						timeout: z
					}) : I(this.handleScroll), this.scrollContainer && this.scrollContainer.addEventListener("scroll", this.fpsMeter.eventHandler), window.addEventListener("resize", this.handleResize)
				}
				cleanupScrollHandler() {
					this.fpsMeter && ("function" == typeof this.fpsMeter.cleanup && this.fpsMeter.cleanup(), this.scrollContainer && this.scrollContainer.removeEventListener("scroll", this.fpsMeter.eventHandler), window.removeEventListener("resize", this.handleResize), this.pendingScollHandlerRead && (h.a.clear(this.pendingScollHandlerRead), this.pendingScollHandlerRead = null), this.pendingResizeHandlerRead && (h.a.clear(this.pendingResizeHandlerRead), this.pendingResizeHandlerRead = null))
				}
				componentDidMount() {
					this.props.getContainer ? this.scrollContainer = this.props.getContainer() || document : this.scrollContainer = document, this.props.onScroll && this.props.onScroll({
						getVisibleItemsInViewport: () => this.getItemsInViewportWithFilter(this.visibleChildRefFilter),
						primaryChild: void 0
					}), this.props.disableScrollCache && !this.props.preventScrollOnMount && Object(E.c)(this.scrollContainer, 0), this.setupScrollHandler(), h.a.write(() => {
						if (!this.props.disableScrollCache) {
							const e = this.getCacheKey(),
								t = q[e];
							o()(t) || (q[e] = void 0, this.scrollContainer && Object(E.c)(this.scrollContainer, t))
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
						r = e.children.length === this.props.children.length && e.children.some((e, t) => e.id !== this.props.children[t].id);
					this.populateRenderableChildrenFromProps(t || r, this.renderableChildrenIndexIncrement, e.children), this.schedulePopulateRenderableChildrenWhenIdle()
				}
				componentWillUnmount() {
					if (this.callExitedViewportForUnmount(), this.cleanupScrollHandler(), clearTimeout(this.updateRenderableChildrenHandle), this.cancelPopulateRenderableChildrenWhenIdle(), this.scrollContainer && !this.props.disableScrollCache) {
						const e = this.getCacheKey();
						q[e] = this.lastRenderPosition
					}
					this.childMap = new k.a("id"), this.itemsInViewport = new k.a("id"), this.wrapperRefFNs = {}, this.childRefFns = {}, this.containerRef = null, this.loadMoreEl = void 0, this.scrollContainer = void 0, this.unmountItemsIdleId && (Object(u.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)
				}
				didLayoutAloneChange(e, t) {
					return "string" == typeof e.layoutKey && "string" == typeof t.layoutKey && e.layoutKey !== t.layoutKey && "string" == typeof e.dataKey && "string" == typeof t.layoutKey && e.dataKey === t.dataKey
				}
				elementIsFocused(e) {
					if (!this.viewport) return !1;
					const t = this.distanceToTop ? this.distanceToTop : 0,
						r = this.parentOffsetTop ? this.parentOffsetTop : 0,
						n = e.bottom + t - r,
						s = e.top + t - r,
						i = Math.min(this.viewport.bottom, n) - Math.max(this.viewport.top, s),
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
						this.mountableViewport = new P({
							top: this.viewport.top - r,
							height: this.viewport.height + 2 * r
						});
						const n = 4 * t;
						this.renderableViewport = new P({
							top: this.viewport.top - n,
							height: this.viewport.height + 2 * n
						})
					}
				}
				updateScrollMetrics() {
					this.updateViewportInfo();
					const e = de(),
						t = this.getScrollTop(),
						r = Math.abs(this.lastRenderPosition - t),
						n = e - this.lastScrollTime,
						s = this.lastScrollTime > -1;
					this.lastScrollTime = e, this.lastRenderPosition = t, s ? this.pixelsPerMSRing.push(r / n) : this.lastScrollTime = e
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
					const n = this.childMap.get(e);
					n && (n.itemRef = t, n.loaded = !!t && (void 0 !== r ? r : n.loaded), this.callOnScrollForItemsChanged())
				}
				getChildRefFn(e) {
					let t = this.childRefFns[e];
					return t || (t = (t, r) => {
						this._childRefFn(e, t, r)
					}, this.childRefFns[e] = t), t
				}
				loadItemIfPossible(e, t, r, n, s, i) {
					if (t.contentIsHeavyToMount() ? n : s) {
						const n = !e.isFocusable || r;
						!e.loaded && n && (e.loaded = !0, i.push(t.loadContent))
					}
				}
				callExitedViewportForUnmount() {
					this.itemsInViewport.forEach(e => {
						let {
							id: t,
							trackOnExitedViewport: r
						} = e;
						r && A.b.enqueue(new _.a({
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
						className: L.k,
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
			t.b = G(Object(M.b)(ce))
		},
		"./src/reddit/components/Scroller/getDocumentTop.ts": function(e, t, r) {
			"use strict";
			t.a = () => document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || 0
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/components/SidebarContainer/index.m.less"),
				i = r.n(s);
			t.a = n.a.div("container", i.a)
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/take.js"),
				i = r.n(s),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				d = r("./src/lib/constants/index.ts"),
				l = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = r("./src/reddit/controls/Button/index.tsx"),
				u = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = r("./src/reddit/layout/row/Inline/index.tsx"),
				p = r("./src/reddit/layout/row/RightAlign/index.tsx");
			const h = e => {
				const {
					className: t,
					hasMoreItems: r,
					headerButton: s,
					items: d,
					minimizedLength: h,
					onLoadMore: b,
					pending: f,
					renderItem: v,
					title: x
				} = e, [g, y] = Object(o.useState)(!1), C = d.length > h || r, w = (!C || g ? d : i()(d, h)).map(e => v({
					item: e
				})), I = () => {
					g || y(!0), g && !r && y(!1), r && b && b()
				};
				return a.a.createElement(l.a, {
					className: t,
					headerButton: s,
					title: x
				}, w, a.a.createElement(m.a, null, a.a.createElement(p.a, null, C && (() => {
					const e = !g || r && b ? n.fbt._("View More", null, {
						hk: "1RK8uA"
					}) : n.fbt._("View Less", null, {
						hk: "1M72mK"
					});
					return a.a.createElement(c.r, {
						onClick: I
					}, f ? a.a.createElement(u.a, {
						sizePx: 10
					}) : e)
				})())))
			};
			h.defaultProps = {
				minimizedLength: d.Tb
			}, t.a = h
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, r) {
			e.exports = {
				GreyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				greyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
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
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				a = r("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				d = r("./src/lib/lessComponent.tsx"),
				l = r("./src/reddit/components/TrackingHelper/index.tsx"),
				c = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = r("./src/reddit/constants/experiments.ts"),
				m = r("./src/reddit/constants/location.ts"),
				p = r("./src/reddit/contexts/PageLayer/index.tsx"),
				h = r("./src/reddit/helpers/getReredditLinkWithYear/index.ts"),
				b = r("./src/reddit/helpers/trackers/navigation.ts"),
				f = r("./src/reddit/selectors/experiments/countrySites.ts"),
				v = r("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				x = r("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				g = r("./src/reddit/selectors/meta.ts"),
				y = r("./src/reddit/components/SidebarFooter/index.m.less"),
				C = r.n(y);
			const {
				fbt: w
			} = r("./node_modules/fbt/lib/FbtPublic.js"), I = d.a.a("Link", C.a), O = Object(o.c)({
				countryCode: g.b,
				d2xPdpSideRailRecsVariant: v.a,
				isCountrySitesEnabled: f.b,
				isD2xPdpSideRailRecsEnabled: v.b,
				isNavbarLikeMwebEnabled: x.a
			}), _ = Object(i.b)(O), E = Object(p.u)({
				isFrontpage: p.A,
				isCountrySitePage: p.y
			}), k = e => {
				let {
					countryCode: t,
					reredditContent: r
				} = e;
				return s.a.createElement("div", {
					className: C.a.GreyRereddit
				}, r, s.a.createElement(I, {
					href: "https://www.reddithelp.com"
				}, w._("help", null, {
					hk: "4lyYaD"
				})), s.a.createElement(I, {
					href: "https://www.reddit.com/coins"
				}, w._("Reddit coins", null, {
					hk: "32iMaN"
				})), s.a.createElement(I, {
					href: "https://www.reddit.com/premium"
				}, w._("Reddit premium", null, {
					hk: "RuO3A"
				})), !!m.c[t] && s.a.createElement(s.a.Fragment, null, s.a.createElement(I, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, w._("Impressum", null, {
					hk: "4cKXSI"
				})), s.a.createElement(I, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, w._("Transparency report", null, {
					hk: "3CgBdG"
				})), s.a.createElement(I, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: C.a.NoneCapitalizeLink
				}, w._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), s.a.createElement(I, {
					href: "https://www.redditinc.com/"
				}, w._("about", null, {
					hk: "1sqJKs"
				})), s.a.createElement(I, {
					href: "https://www.redditinc.com/careers"
				}, w._("careers", null, {
					hk: "26ABvc"
				})), s.a.createElement(I, {
					href: "https://www.redditinc.com/press"
				}, w._("press", null, {
					hk: "2Qmgdz"
				})), s.a.createElement(I, {
					href: "https://www.redditinc.com/advertising"
				}, w._("advertise", null, {
					hk: "Mt40U"
				})), s.a.createElement(I, {
					href: "http://www.redditblog.com/"
				}, w._("blog", null, {
					hk: "46IQJw"
				})), s.a.createElement(I, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, w._("Terms", null, {
					hk: "4qRzfE"
				})), s.a.createElement(I, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, w._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(I, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, w._("Privacy policy", null, {
					hk: "10K04G"
				})), s.a.createElement(I, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, w._("Mod policy", null, {
					hk: "2gYc2T"
				})), s.a.createElement("div", {
					className: C.a.Copyright
				}, w._("Reddit Inc © {year}. All rights reserved", [w._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = E(_(Object(l.c)(e => {
				const t = Object(i.f)().getState(),
					r = Object(f.a)(t, Object(a.c)());
				if (e.isNavbarLikeMwebEnabled) return e.isFrontpage ? s.a.createElement(c.a, {
					className: C.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, s.a.createElement("div", {
					className: C.a.LinkContainer
				}, s.a.createElement("div", {
					className: C.a.Column
				}, s.a.createElement(I, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, w._("User Agreement", null, {
					hk: "2RA6JL"
				})), s.a.createElement(I, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, w._("Privacy policy", null, {
					hk: "10K04G"
				}))), s.a.createElement("div", {
					className: C.a.Column
				}, s.a.createElement(I, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, w._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(I, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, w._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), s.a.createElement("div", {
					className: C.a.Copyright
				}, w._("© {year} Reddit, Inc. All rights reserved.", [w._param("year", (new Date).getFullYear().toString())], {
					hk: "sR7zP"
				}))) : null;
				const n = t => {
					const n = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "USA/Global",
						it: "Italiano"
					};
					return r.includes(t) || "en" === t ? s.a.createElement(I, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(b.a)(t))
					}, n[t]) : null
				};
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.Ac.GreyRereddit ? e.reredditButtons : [];
					return s.a.createElement(k, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				return s.a.createElement(c.a, {
					className: C.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, s.a.createElement("div", {
					className: C.a.LinkContainer
				}, s.a.createElement("div", {
					className: C.a.Column
				}, s.a.createElement(I, {
					href: "https://www.reddithelp.com"
				}, w._("help", null, {
					hk: "4lyYaD"
				})), s.a.createElement(I, {
					href: "https://www.reddit.com/coins"
				}, w._("Reddit coins", null, {
					hk: "32iMaN"
				})), s.a.createElement(I, {
					href: "https://www.reddit.com/premium"
				}, w._("Reddit premium", null, {
					hk: "RuO3A"
				})), e.isFrontpage && s.a.createElement(s.a.Fragment, null, s.a.createElement(I, {
					href: "https://www.reddit.com/subreddits/a-1/"
				}, w._("Communities", null, {
					hk: "3CJu37"
				})), s.a.createElement(I, {
					href: `https://www.reddit.com${Object(h.a)()}`
				}, w._("Rereddit", null, {
					hk: "1z3k7C"
				})), s.a.createElement(I, {
					href: "https://www.reddit.com/topics/a-1/"
				}, w._("Topics", null, {
					hk: "349RFt"
				}))), !!m.c[e.countryCode] && s.a.createElement(s.a.Fragment, null, s.a.createElement(I, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, w._("Impressum", null, {
					hk: "4cKXSI"
				})), s.a.createElement(I, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, w._("Transparency report", null, {
					hk: "3CgBdG"
				})), s.a.createElement(I, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: C.a.NoneCapitalizeLink
				}, w._("Report NetzDG Content", null, {
					hk: "1nszCF"
				})))), s.a.createElement("div", {
					className: C.a.Column
				}, s.a.createElement(I, {
					href: "https://www.redditinc.com/"
				}, w._("about", null, {
					hk: "1sqJKs"
				})), s.a.createElement(I, {
					href: "https://www.redditinc.com/careers"
				}, w._("careers", null, {
					hk: "26ABvc"
				})), s.a.createElement(I, {
					href: "https://www.redditinc.com/press"
				}, w._("press", null, {
					hk: "2Qmgdz"
				})), s.a.createElement(I, {
					href: "https://www.redditinc.com/advertising"
				}, w._("advertise", null, {
					hk: "Mt40U"
				})), s.a.createElement(I, {
					href: "http://www.redditblog.com/"
				}, w._("blog", null, {
					hk: "46IQJw"
				})), s.a.createElement(I, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, w._("Terms", null, {
					hk: "4qRzfE"
				})), s.a.createElement(I, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, w._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(I, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, w._("Privacy policy", null, {
					hk: "10K04G"
				})), s.a.createElement(I, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, w._("Mod policy", null, {
					hk: "2gYc2T"
				})))), (e.isCountrySitePage || e.isFrontpage && e.isCountrySitesEnabled) && s.a.createElement("div", {
					className: C.a.CountryLinkContainer
				}, s.a.createElement("div", {
					className: C.a.Column
				}, n("en"), n("fr"), n("it")), s.a.createElement("div", {
					className: C.a.Column
				}, n("de"), n("es"))), s.a.createElement("div", {
					className: C.a.Copyright
				}, w._("Reddit Inc © {year}. All rights reserved", [w._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
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
				i = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/actions/profile/index.ts"),
				l = r("./src/reddit/components/SidebarExpandableList/index.tsx"),
				c = r("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				u = r("./src/reddit/models/User/index.ts"),
				m = r("./src/reddit/selectors/profile.ts"),
				p = r("./src/reddit/selectors/subscriptions.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				b = r("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				f = r.n(b);
			const v = Object(a.c)({
					currentUser: h.k,
					moderated: m.n,
					subscriptions: p.e,
					hasMoreModerated: m.d,
					loadMorePending: m.a
				}),
				x = Object(o.b)(v, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(d.c)(t.profileName))
				}), (e, t, r) => ({
					...r,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				g = e => {
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
			t.a = x(e => {
				const {
					currentUser: t,
					moderated: r,
					profileName: s,
					subscriptions: o,
					hasMoreModerated: a,
					onLoadMore: d,
					loadMorePending: c
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
				return i.a.createElement(l.a, {
					className: f.a.container,
					title: m,
					items: p,
					renderItem: g,
					hasMoreItems: a,
					onLoadMore: d,
					pending: c
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
				i = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = r("./node_modules/reselect/es/index.js"),
				l = r("./src/reddit/actions/profile/index.ts"),
				c = r("./src/reddit/components/SidebarExpandableList/index.tsx"),
				u = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				m = r("./src/reddit/selectors/profile.ts"),
				p = r("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				h = r.n(p);
			const b = Object(d.c)({
					hasMoreMultireddits: m.e,
					loadMorePending: m.b,
					multireddits: m.o
				}),
				f = Object(o.b)(b, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(l.g)(t.profileName, !0))
				}), (e, t, r) => ({
					...r,
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
					}, n.fbt._({
						"*": "{communities} communities",
						_1: "1 community"
					}, [n.fbt._plural(t.subredditCount, "communities")], {
						hk: "1eyxrS"
					}))))
				};
			t.a = f(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: r,
					multireddits: s,
					onLoadMore: o,
					profileName: a
				} = e;
				return s && s.length ? i.a.createElement(u.a, null, i.a.createElement(c.a, {
					hasMoreItems: t,
					items: s,
					onLoadMore: o,
					pending: r,
					renderItem: v,
					title: n.fbt._("Public custom feeds by u/{profileName}", [n.fbt._param("profileName", a)], {
						hk: "16Oicc"
					})
				})) : null
			})
		},
		"./src/reddit/components/SidebarProfilePowerupContributions/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = r("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = r("./src/reddit/components/SubredditIcon/index.tsx"),
				c = r("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				u = r("./src/reddit/selectors/gold/powerups/index.ts"),
				m = r("./src/reddit/selectors/user.ts"),
				p = r("./node_modules/reselect/es/index.js"),
				h = r("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				b = r.n(h);
			const f = Object(p.c)({
				subreddits: function(e, t) {
					let {
						profileName: r
					} = t;
					const n = Object(m.Ab)(e, {
							userName: r
						}),
						s = Object(u.f)(e);
					return (n && s ? s[n.id] : null) || []
				}
			});

			function v(e) {
				let {
					item: t
				} = e;
				const r = t.subredditInfo,
					s = i.a.createElement(l.b, {
						iconUrl: r.styles.icon,
						className: b.a.subredditIcon
					});
				return i.a.createElement(c.a, {
					className: b.a.communityItemContainer,
					key: r.id
				}, i.a.createElement("div", {
					className: b.a.iconContainer
				}, i.a.createElement(a.a, {
					to: r.path
				}, s)), i.a.createElement("div", {
					className: b.a.communityDescription
				}, i.a.createElement("div", {
					className: b.a.communityName
				}, i.a.createElement(a.a, {
					to: r.path
				}, r.prefixedName)), i.a.createElement("div", {
					className: b.a.subscriberCount
				}, n.fbt._({
					"*": "{number} Powerups",
					_1: "1 Powerup"
				}, [n.fbt._plural(t.powerups, "number")], {
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
					title: n.fbt._("Supports Communities", null, {
						hk: "1vCNdZ"
					}),
					items: t,
					renderItem: v
				}) : null
			})
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, r) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/components/SidebarSpacer/index.m.less"),
				s = r.n(n),
				i = r("./src/lib/lessComponent.tsx");
			t.a = i.a.div("Component", s.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				BottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				bottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/lodash/throttle.js"),
				i = r.n(s),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				d = r("./src/lib/constants/index.ts"),
				l = r("./src/reddit/constants/elementIds.ts"),
				c = r("./src/reddit/controls/Button/index.tsx"),
				u = r("./src/reddit/components/BackToTop/index.m.less"),
				m = r.n(u);
			const {
				fbt: p
			} = r("./node_modules/fbt/lib/FbtPublic.js"), h = e => {
				if (e) {
					const e = document.getElementById(l.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var b = e => {
					let {
						className: t,
						isOverlay: r,
						style: s
					} = e;
					return a.a.createElement("div", {
						className: Object(n.a)(t, m.a.container),
						style: s
					}, a.a.createElement(c.l, {
						className: m.a.button,
						onClick: () => h(r)
					}, p._("Back to Top", null, {
						hk: "YjBtV"
					})))
				},
				f = r("./src/reddit/components/SidebarFooter/index.tsx"),
				v = r("./src/reddit/constants/componentSizes.ts"),
				x = r("./src/reddit/contexts/PageLayer/index.tsx"),
				g = r("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				y = r.n(g),
				C = r("./src/lib/lessComponent.tsx");

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const I = d.e[1] + 24,
				O = v.f + 8,
				_ = O + 152 + 16,
				E = _ + I + 8,
				k = C.a.div("Container", y.a),
				S = C.a.wrapped(e => {
					let {
						className: t,
						isOverlay: r,
						...n
					} = e;
					return a.a.createElement(b, w({
						className: t,
						isOverlay: r,
						style: {
							top: `calc(100vh - ${r?O:8}px)`
						}
					}, n))
				}, "BackToTop", y.a),
				j = e => {
					let {
						children: t,
						className: r,
						isFakeOverlay: s,
						isSticky: i,
						shouldStickToBottom: o
					} = e;
					return a.a.createElement("div", {
						className: Object(n.a)(r, {
							[y.a.BottomStickyStyles]: o,
							[y.a.StickyStyles]: !o && i && !s,
							[y.a.StickyStylesFakeOverlay]: !o && !!s
						})
					}, t)
				};
			class N extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > E,
						shouldFooterSticky: this.windowHeight > _
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
						isBottomSticky: !1,
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
							adComponentOnFakeOverlay: r,
							children: n,
							className: s,
							hideFooter: i,
							pageLayer: o,
							recommendationsComponent: d,
							reredditButtons: l
						}
					} = this, c = this.state.isAdSticky && !(!t && !n), u = this.state.isBottomSticky;
					return a.a.createElement(k, {
						className: s,
						innerRef: this.setWrapperRef
					}, a.a.createElement(j, {
						isFakeOverlay: r,
						isSticky: c,
						shouldStickToBottom: u
					}, t, n, d, !i && a.a.createElement(f.a, {
						reredditButtons: l
					})), !d && !this.props.hideBackToTop && a.a.createElement(S, {
						isOverlay: !!(null === (e = null == o ? void 0 : o.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const P = Object(x.u)();
			t.a = P(N)
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
				i = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = r("./src/reddit/controls/Typography/index.tsx"),
				c = r("./src/reddit/selectors/telemetry.ts");
			var u = r("./src/reddit/hooks/useTracking.ts"),
				m = r("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				p = r("./node_modules/lodash/isEqual.js"),
				h = r.n(p);
			const b = Object(a.b)(a.d, h.a);
			var f = r("./src/reddit/selectors/profile.ts"),
				v = r("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				x = r.n(v),
				g = r("./src/lib/lessComponent.tsx"),
				y = r("./src/lib/opener/index.ts");
			const C = Object(a.c)({
				trophyCase: (e, t) => {
					let {
						profileName: r
					} = t;
					return Object(f.r)(e, Object(f.m)(e, r))
				}
			}, b);
			t.a = Object(o.b)(C)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : i.a.createElement(d.a, {
					title: n.fbt._("Trophy Case ({trophyCount})", [n.fbt._param("trophyCount", `${t.length}`)], {
						hk: "mzh3V"
					}),
					items: t,
					renderItem: k
				})
			});
			const w = g.a.wrapped(m.a, "TrophyItem", x.a),
				I = g.a.div("TrophyIcon", x.a),
				O = g.a.h5("TrophyName", x.a),
				_ = g.a.div("TrophyContent", x.a),
				E = g.a.wrapped(l.c, "Description", x.a),
				k = e => {
					let {
						item: t
					} = e;
					const r = Object(u.a)(),
						n = i.a.createElement("img", {
							src: t.icon,
							title: t.name
						});
					return i.a.createElement(w, {
						key: t.id
					}, i.a.createElement(I, null, t.url ? i.a.createElement("a", {
						target: y.d.BLANK,
						rel: y.c,
						href: t.url,
						onClick: () => r((e => t => ({
							source: "trophy",
							action: "click",
							noun: "trophy",
							...c.n(t),
							actionInfo: Object(c.d)(t, {
								paneName: "profile_about"
							}),
							profile: c.Q(t),
							trophy: e
						}))({
							id: t.id,
							name: t.name
						}))
					}, n) : n), i.a.createElement(_, null, i.a.createElement(O, null, t.name), i.a.createElement(E, null, t.description)))
				}
		},
		"./src/reddit/components/SocialLinks/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return i
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "i", (function() {
				return d
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "h", (function() {
				return p
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/config.ts");
			const i = 5,
				o = "add_social_link_modal_id",
				a = `${s.a.assetPath}/img/social-links/`,
				d = n.fbt._("@username", null, {
					hk: "3HC3Kd"
				}),
				l = n.fbt._("Display text", null, {
					hk: "1SlS6x"
				}),
				c = n.fbt._("Looks like this isn’t a valid URL. Double-check your spelling.", null, {
					hk: "1vKDvL"
				}),
				u = n.fbt._("This community or user doesn’t exist. Double-check your spelling.", null, {
					hk: "tKrv9"
				}),
				m = n.fbt._("There was a problem updating your account. Please try again.", null, {
					hk: "1i5tn1"
				}),
				p = 5
		},
		"./src/reddit/components/SocialLinks/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return o
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "e", (function() {
				return u
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/redditGQL/types.ts"),
				s = r("./src/reddit/components/SocialLinks/constants.ts");
			const {
				fbt: i
			} = r("./node_modules/fbt/lib/FbtPublic.js"), o = (e, t) => {
				let r, o = i._("{name of social link type}", [i._param("name of social link type", e)], {
						hk: "2ivfx8"
					}),
					a = s.i;
				switch (t) {
					case n.x.BuyMeACoffee:
						o = i._("Buy Me a Coffee", null, {
							hk: "ZTbP7"
						});
						break;
					case n.x.CashApp:
						o = i._("Cash App", null, {
							hk: "1aorWN"
						});
						break;
					case n.x.Custom:
						o = i._("Custom URL", null, {
							hk: "2gveOb"
						}), a = s.c, r = i._("https://website.com", null, {
							hk: "1Kp5fF"
						});
						break;
					case n.x.Reddit:
						a = i._("r/community, u/user", null, {
							hk: "45oRo"
						});
						break;
					case n.x.Discord:
						a = s.c, r = i._("https://discord.com", null, {
							hk: "6gcLP"
						});
						break;
					case n.x.Facebook:
						a = s.c, r = i._("https://facebook.com", null, {
							hk: "2v99jB"
						});
						break;
					case n.x.Kickstarter:
						a = s.c, r = i._("https://kickstarter.com", null, {
							hk: "132LC7"
						});
						break;
					case n.x.Shopify:
						a = s.c, r = i._("https://shopify.com", null, {
							hk: "2X1G4f"
						});
						break;
					case n.x.Spotify:
						a = s.c, r = i._("https://spotify.com", null, {
							hk: "3dZORp"
						});
						break;
					case n.x.Substack:
						a = s.c, r = i._("https://substack.com", null, {
							hk: "1zQgL1"
						});
						break;
					case n.x.Youtube:
						o = i._("YouTube", null, {
							hk: "12AQG6"
						}), a = s.c, r = i._("https://youtube.com", null, {
							hk: "4FZQ2O"
						});
						break;
					case n.x.Onlyfans:
						o = i._("OnlyFans", null, {
							hk: "1JRN4C"
						});
						break;
					case n.x.Paypal:
						o = i._("PayPal", null, {
							hk: "3n7Il"
						});
						break;
					case n.x.Soundcloud:
						o = i._("SoundCloud", null, {
							hk: "34Xo4u"
						});
						break;
					case n.x.Tiktok:
						o = i._("TikTok", null, {
							hk: "tajib"
						})
				}
				return {
					name: o,
					placeholderDisplayText: a,
					placeholderUrl: r,
					socialLinkType: t
				}
			}, a = () => {
				return Object.keys(n.x).map(e => {
					const t = n.x[e];
					return o(e, t)
				}).filter(e => e.socialLinkType !== n.x.Indiegogo)
			}, d = e => {
				const t = e.toLowerCase();
				return `${s.d}${t}.png`
			}, l = e => {
				for (const t in n.x)
					if (n.x[t] === e) return t;
				return ""
			}, c = e => {
				let t = s.b;
				throw e && e.length > 0 && (t = e[0].message), new Error(t)
			}, u = e => e && e.startsWith("@") ? e.slice(1) : e
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
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				o = r("./src/lib/lessComponent.tsx"),
				a = r("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				d = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/helpers/normalizeUsername/index.tsx"),
				c = r("./src/reddit/layout/row/Inline/index.tsx"),
				u = r("./src/reddit/layout/row/RightAlign/index.tsx"),
				m = r("./src/reddit/icons/svgs/Search/index.tsx"),
				p = r("./src/reddit/components/SubredditModerationSearch/index.m.less"),
				h = r.n(p);
			const b = o.a.wrapped(m.a, "SearchIcon", h.a),
				f = o.a.wrapped(a.a, "NoResultsContainer", h.a),
				v = o.a.div("Container", h.a),
				x = o.a.wrapped(c.a, "SearchStatusBar", h.a),
				g = o.a.div("SearchStatus", h.a),
				y = o.a.span("Bold", h.a);

			function C(e) {
				if (e.searchPending) return null;
				const t = Object(l.a)(e.searchTerm);
				return e.noResultsFound ? i.a.createElement(f, null, i.a.createElement(b, null), i.a.createElement(a.b, null, n.fbt._("No results for {searchTerm}", [n.fbt._param("searchTerm", `u/${t}`)], {
					hk: "1nDAlG"
				})), i.a.createElement(d.r, {
					onClick: e.cancelSearch
				}, n.fbt._("See all", null, {
					hk: "3aLS8s"
				}))) : i.a.createElement(v, null, i.a.createElement(x, null, i.a.createElement(g, null, n.fbt._("1 search result for {=[searchTerm]}", [n.fbt._param("=[searchTerm]", i.a.createElement(y, {
					"data-redditstyle": !0
				}, n.fbt._("{searchTerm}", [n.fbt._param("searchTerm", `'${t}':`)], {
					hk: "1B9ZWG"
				})))], {
					hk: "iAcV5"
				})), i.a.createElement(u.a, null, i.a.createElement(d.r, {
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
				i = r.n(s),
				o = r("./src/lib/lessComponent.tsx"),
				a = r("./src/reddit/helpers/normalizeUsername/index.tsx"),
				d = r("./src/reddit/icons/svgs/Search/index.tsx"),
				l = r("./src/reddit/components/SubredditModerationTopBar/index.m.less"),
				c = r.n(l);
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
						placeholder: n.fbt._("Search for a user", null, {
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
				i = r.n(s),
				o = r("./src/lib/lessComponent.tsx"),
				a = r("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				d = r("./src/reddit/components/UserIcon/index.tsx"),
				l = r("./src/reddit/controls/InternalLink/index.tsx"),
				c = r("./src/reddit/components/UserNameAndIcon/index.m.less"),
				u = r.n(c);
			const m = o.a.span("UserIconContainer", u.a),
				p = o.a.wrapped(d.a, "UserIcon", u.a),
				h = o.a.wrapped(l.default, "UserLink", u.a);
			t.a = e => i.a.createElement(h, {
				className: e.className,
				to: `${n.a.redditUrl}/user/${e.username}`
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
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/components/SEOTitle/index.tsx"),
				a = r("./src/reddit/components/Widgets/Base/index.m.less"),
				d = r.n(a);
			const l = i.a.div("WidgetBackground", d.a),
				c = i.a.wrapped(e => {
					let {
						children: t,
						...r
					} = e;
					return s.a.createElement("div", r, s.a.createElement(o.b, {
						type: o.a.Widget
					}, t))
				}, "WidgetHeader", d.a);
			t.b = e => s.a.createElement("div", {
				className: e.className
			}, s.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return E
			})), r.d(t, "a", (function() {
				return S
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = r("./node_modules/reselect/es/index.js"),
				l = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/Flair/index.tsx"),
				u = r("./src/reddit/components/SubscribeButton/index.tsx"),
				m = r("./src/reddit/actions/subscription/index.ts");
			var p = Object(o.b)(null, (e, t) => {
					const r = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, r)),
						onSubscriptionsRequested: () => e(m.f()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, r))
					}
				})(r("./src/reddit/components/SubscribeButton/Base.tsx").a),
				h = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = r("./src/reddit/constants/componentSizes.ts"),
				f = r("./src/reddit/controls/Button/index.tsx"),
				v = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = r("./src/reddit/icons/fonts/index.tsx"),
				g = r("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				y = r("./src/reddit/models/Flair/index.ts"),
				C = r("./src/reddit/selectors/user.ts"),
				w = r("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				I = r("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				O = r.n(I);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = e => i.a.createElement(h.a, {
					className: Object(l.a)(O.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, i.a.createElement("div", {
					className: O.a.container
				}, e.isLoading ? i.a.createElement(v.a, {
					className: O.a.loadingIcon,
					sizePx: 32
				}) : i.a.createElement(i.a.Fragment, null, e.isError ? i.a.createElement("p", {
					className: O.a.errorMsg
				}, e.errorMsg || n.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : i.a.createElement(i.a.Fragment, null, e.communities.map(t => i.a.createElement(S, _({
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
					className: O.a.bottomButton,
					kind: f.b.Button,
					priority: f.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				k = Object(d.c)({
					hideNSFWPref: C.F,
					nightmode: C.db
				}),
				S = Object(o.b)(k)(e => i.a.createElement("div", {
					className: Object(l.a)(O.a.communityItemContainer, {
						[O.a.withBottomFlair]: e.isNSFW
					})
				}, i.a.createElement(g.a, {
					className: O.a.communityItemExpandCenter,
					widthRight: b.t
				}, i.a.createElement("div", {
					className: O.a.iconContainer
				}, e.communityIcon || e.iconUrl ? i.a.createElement("img", {
					className: O.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : i.a.createElement(x.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(l.a)(O.a.defaultCommunityIcon, {
						[O.a.mNightmode]: e.nightmode
					})
				})), i.a.createElement("div", {
					className: O.a.communityDescriptionContainer
				}, i.a.createElement(a.a, {
					className: O.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(w.b)(e.name, e.type),
					to: Object(w.a)(e.name, e.type)
				}, Object(w.b)(e.name, e.type)), i.a.createElement("div", {
					className: O.a.communityInfoContainer
				}, !!e.subscribers && i.a.createElement("p", {
					className: O.a.subscriberCount
				}, n.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [n.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && i.a.createElement(c.b, {
					className: O.a.nsfwFlair,
					flair: {
						type: y.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? i.a.createElement(v.a, {
					className: Object(l.a)(O.a.communityCta, O.a.smallLoadingIcon),
					sizePx: 12
				}) : i.a.createElement(f.t, {
					className: O.a.communityCta,
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
					className: O.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/posts.ts"),
				s = r("./src/reddit/helpers/name/index.ts");

			function i(e, t) {
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
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				d = r("./src/reddit/components/TrackingHelper/index.tsx"),
				l = r("./src/reddit/components/Widgets/Base/index.tsx"),
				c = r("./src/reddit/constants/posts.ts"),
				u = r("./src/reddit/helpers/trackers/profileSettings.ts"),
				m = r("./src/reddit/models/ExternalAccount/index.ts"),
				p = r("./src/reddit/selectors/externalAccount.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				b = r("./node_modules/fbt/lib/FbtPublic.js"),
				f = r("./src/reddit/controls/OutboundLink/index.tsx"),
				v = r("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				x = r("./src/reddit/icons/svgs/Twitter/index.tsx"),
				g = r("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				y = r("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				C = r.n(y);
			var w = e => {
					const {
						account: t,
						clickEvent: r,
						provider: n
					} = e;
					let i, o = t.username,
						a = "";
					return n !== m.a.Twitter ? null : (i = s.a.createElement(x.a, {
						className: C.a.twitterLogo
					}), a = b.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), o = `@${t.username}`, s.a.createElement(g.a, null, s.a.createElement("span", {
						className: C.a.icon
					}, i), s.a.createElement(f.b, {
						className: C.a.link,
						href: t.link,
						onClick: r
					}, s.a.createElement("div", {
						className: C.a.linkTitle
					}, s.a.createElement("span", {
						className: C.a.name
					}, o), s.a.createElement(v.a, {
						className: C.a.linkIcon
					})), s.a.createElement("div", {
						className: C.a.linkDescription
					}, a))))
				},
				I = r("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				O = r.n(I);
			const {
				fbt: _
			} = r("./node_modules/fbt/lib/FbtPublic.js"), E = Object(o.c)({
				twitterAccount: (e, t) => {
					let {
						subredditOrProfile: r
					} = t;
					return r.type === c.a.PROFILE ? Object(p.c)(e, {
						profileName: r.name
					}) : null
				},
				user: (e, t) => {
					let {
						subredditOrProfile: r
					} = t;
					return r.type === c.a.PROFILE ? Object(h.Ab)(e, {
						userName: r.name
					}) : null
				}
			}), k = Object(i.b)(E, e => ({
				trackTwitterAccountClicked: t => e((e, r) => u.m(r(), t))
			}), (e, t, r) => ({
				...r,
				...e,
				...t,
				onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
			}));
			t.a = Object(d.c)(k(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: r
				} = e;
				return r ? s.a.createElement(a.a, null, s.a.createElement(l.b, null, s.a.createElement(l.a, null, _._("Connected accounts", null, {
					hk: "1ce9Jz"
				})), r && s.a.createElement("div", {
					className: O.a.account
				}, s.a.createElement(w, {
					provider: m.a.Twitter,
					account: r,
					clickEvent: t
				})))) : null
			}))
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = r("./src/reddit/components/SEOTitle/index.tsx"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				u = r("./src/reddit/contexts/PageLayer/index.tsx"),
				m = r("./src/reddit/controls/Button/index.tsx"),
				p = r("./src/reddit/helpers/trackers/widgets.ts"),
				h = r("./src/reddit/models/NewStructuredStyles/index.ts"),
				b = r("./src/reddit/selectors/experiments/topPosts.ts"),
				f = r("./src/reddit/selectors/structuredStyles.ts"),
				v = r("./src/reddit/selectors/user.ts"),
				x = r("./src/reddit/models/Theme/index.ts"),
				g = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const y = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(g.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				C = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(g.a)(e).widgetColors.sidebarWidgetHeaderColor,
				w = e => {
					const t = y(e);
					return Object(x.f)(t)
				},
				I = e => {
					const t = C(e);
					return Object(x.f)(t)
				};
			var O = r("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				_ = r.n(O);
			const {
				fbt: E
			} = r("./node_modules/fbt/lib/FbtPublic.js"), k = Object(u.u)(), S = Object(i.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const r = Object(u.n)(e, t) || void 0,
						n = t.redditStyle || Object(f.l)(e, {
							subredditId: r
						}),
						s = Object(v.db)(e);
					return n || s
				},
				nigtmode: v.db,
				subredditId: u.n,
				topPostVariant: b.d
			}));
			class j extends s.a.Component {
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
					return e.backgroundColor = y(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = w(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = C(this.props), e.color = e.fill = I(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: r,
						forceRedditStyle: n,
						headerButton: i,
						id: o,
						onClick: d,
						onHeaderClick: c,
						title: u,
						titleClassName: p,
						truncateThreshold: h
					} = this.props, b = r ? _.a.widgetContentOnly : _.a.widgetContent, f = !n && this.props.styles, v = f ? this.getWidgetBackgroundStyles() : {}, x = f ? this.getWidgetHeaderStyles() : {};
					return s.a.createElement("div", {
						className: Object(a.a)(t, _.a.widgetBackground, {
							[_.a.redditStyle]: n,
							[_.a.clickable]: !!d,
							[_.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: d,
						style: v
					}, u && s.a.createElement("div", {
						className: Object(a.a)(_.a.widgetHeader, {
							[_.a.clickable]: !!c
						}),
						id: o,
						style: x,
						onClick: c
					}, s.a.createElement("div", {
						className: Object(a.a)(_.a.widgetTitle, p)
					}, s.a.createElement(l.b, {
						type: l.a.Widget
					}, u)), i), s.a.createElement("div", {
						className: Object(a.a)(b, {
							[_.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? h : "none"
						}
					}, e), this.state.isTruncated && s.a.createElement(m.r, {
						className: _.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, E._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = k(S(Object(d.a)(Object(c.c)(j))))
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			class i extends s.a.Component {
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
					} = this, r = "string" == typeof t.value ? t.value : "", n = "object" == typeof t.value ? t.value : null, i = r || n;
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
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = r.n(o);
			t.a = e => {
				let {
					center: t,
					className: r,
					sizePx: n = 10
				} = e;
				return s.a.createElement("div", {
					className: Object(i.a)(a.a.loadingIcon, r, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${n}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/helpers/structuredStyles/validators.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "g", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "e", (function() {
				return c
			}));
			var n = r("./src/lib/linkMatchers/index.ts");
			var s;
			! function(e) {
				e[e.Valid = 0] = "Valid", e[e.NoUrl = 1] = "NoUrl", e[e.TooShort = 2] = "TooShort", e[e.Invalid = 3] = "Invalid"
			}(s || (s = {}));
			const i = e => {
					if (!e) return s.NoUrl;
					if (e.length < 4) return s.TooShort;
					const t = Object(n.h)(n.f, e);
					return t ? "ftp:" === t.schema ? s.Invalid : "mailto:" === t.schema ? s.Invalid : s.Valid : s.Invalid
				},
				o = 20;
			var a;
			! function(e) {
				e[e.Valid = 0] = "Valid", e[e.TooShort = 1] = "TooShort", e[e.TooLong = 2] = "TooLong"
			}(a || (a = {}));
			const d = e => e ? e.length > o ? a.TooLong : a.Valid : a.TooShort;
			var l;
			! function(e) {
				e[e.Valid = 0] = "Valid", e[e.TooShort = 1] = "TooShort"
			}(l || (l = {}));
			const c = e => e.length ? l.Valid : l.TooShort
		},
		"./src/reddit/helpers/trackers/followers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/tracking.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const i = e => t => ({
					...Object(s.n)(t),
					action: n.c.CLICK,
					noun: `follower_list_page_${e?"follow":"unfollow"}`,
					source: "profile"
				}),
				o = () => e => ({
					...Object(s.n)(e),
					action: n.c.CLICK,
					noun: "follower_list_cta",
					source: "profile"
				})
		},
		"./src/reddit/helpers/trackers/marketplace/claims.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "e", (function() {
				return d
			}));
			var n = r("./src/reddit/selectors/telemetry.ts");
			const s = () => e => ({
					...Object(n.n)(e),
					source: "marketplace",
					action: "view",
					noun: "claim_post_unit"
				}),
				i = () => e => ({
					...Object(n.n)(e),
					source: "marketplace",
					action: "click",
					noun: "claim_post_unit"
				}),
				o = () => e => ({
					...Object(n.n)(e),
					source: "marketplace",
					action: "close",
					noun: "claim_post_unit"
				});
			var a;
			! function(e) {
				e.Profile = "profile", e.Hovercard = "hovercard"
			}(a || (a = {}));
			const d = e => t => {
				const r = Object(n.n)(t);
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
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "c", (function() {
				return c
			}));
			var n, s, i = r("./src/reddit/constants/tracking.ts"),
				o = r("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {}));
			const a = (e, t) => r => ({
					source: s.COMMUNITY_WIDGETS,
					action: i.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(o.ub)(r, {
						subredditId: e,
						widgetKind: t
					}),
					...o.n
				}),
				d = (e, t) => r => ({
					source: s.POST,
					action: i.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: o.H(r, e),
					subreddit: o.gb(r),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...o.n(r)
				}),
				l = () => e => ({
					source: s.SIDEBAR,
					action: i.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...o.n(e)
				}),
				c = e => t => ({
					source: s.TOPICS_WIDGET,
					action: i.c.CLICK,
					noun: n.TOPIC,
					...o.n(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(i.b)("info",e.isFilled)} ${e.className}`
			})
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
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
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
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

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
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, r) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/layout/row/RightAlign/index.m.less"),
				i = r.n(s);
			t.a = n.a.div("rightAligned", i.a)
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
				i = r("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = r.n(a);
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
				i = r("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				d = r.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(i.a)(e => {
				const {
					className: t,
					children: r,
					heightLeft: n,
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
						height: n,
						marginRight: a
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
				return l
			})), r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				o = r("./src/reddit/controls/Button/index.tsx"),
				a = r("./src/reddit/pages/ErrorPages/index.m.less"),
				d = r.n(a);
			const l = e => {
					let {
						message: t
					} = e;
					return i.a.createElement("div", {
						className: d.a.container
					}, i.a.createElement("h3", {
						className: d.a.title
					}, t || n.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), i.a.createElement(o.n, {
						className: d.a.primaryRouterLink,
						to: "/"
					}, n.fbt._("Go Home", null, {
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
					}, t || n.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), i.a.createElement(o.n, {
						className: d.a.primaryRouterLink,
						to: "/"
					}, n.fbt._("Go Home", null, {
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
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/config.ts"),
				d = r("./src/reddit/actions/pages/followers/index.ts"),
				l = r("./src/reddit/components/ProfileSidebar/index.tsx"),
				c = r("./src/reddit/components/Scroller/Simple.tsx"),
				u = r("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				m = r("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				p = r("./src/reddit/contexts/PageLayer/index.tsx"),
				h = r("./src/reddit/layout/page/Listing/index.tsx"),
				b = r("./src/reddit/pages/ErrorPages/index.tsx"),
				f = r("./src/reddit/pages/ModHub/Header.tsx"),
				v = r("./src/reddit/selectors/followers.ts"),
				x = r("./src/reddit/selectors/profile.ts"),
				g = r("./src/lib/classNames/index.ts"),
				y = r("./src/reddit/components/TrackingHelper/index.tsx"),
				C = r("./src/reddit/components/UserNameAndIcon/index.tsx"),
				w = r("./src/reddit/controls/Button/index.tsx"),
				I = r("./src/reddit/helpers/trackers/followers.ts"),
				O = r("./src/reddit/pages/Followers/index.m.less"),
				_ = r.n(O);
			var E = e => {
				var t, r, a, l;
				const c = Object(o.d)(),
					u = Object(o.e)(t => Object(v.b)(t, e.userId)),
					m = Object(y.b)(),
					p = Object(s.useCallback)(() => {
						u && (c(Object(d.toggleFollowUser)(e.userId, !u.isFollowed)), m(Object(I.a)(!u.isFollowed)))
					}, [e.userId, c, m, u]);
				return u ? i.a.createElement("div", {
					className: _.a.userRow,
					key: u.id
				}, i.a.createElement(C.a, {
					username: u.name,
					tooltipId: `${u.id}-user-tooltip`,
					sendHoverCardEvent: () => {},
					userIcon: (null === (a = null === (r = null === (t = u.profile) || void 0 === t ? void 0 : t.styles) || void 0 === r ? void 0 : r.legacyIcon) || void 0 === a ? void 0 : a.url) || (null === (l = u.snoovatarIcon) || void 0 === l ? void 0 : l.url)
				}), u.isAcceptingFollowers && i.a.createElement(w.t, {
					className: Object(g.a)(_.a.followButton, {
						[_.a.followingButton]: u.isFollowed
					}),
					onClick: p,
					priority: u.isFollowed ? w.c.Plain : w.c.Tertiary
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
					C = Object(o.e)(v.d),
					w = Object(p.fb)(),
					I = Object(o.e)(e => Object(p.E)(e, {
						pageLayer: w
					})),
					O = Object(o.e)(t => Object(x.j)(t, {
						profileName: e.match.params.profileName
					})),
					[k, S] = Object(s.useState)("");
				Object(s.useEffect)(() => {
					k && t(Object(d.followersRequested)({
						...d.DEFAULT_VARIABLES,
						searchQuery: k
					}))
				}, [k, t]);
				const j = Object(s.useCallback)(() => {
					(null == C ? void 0 : C.hasNextPage) && (null == C ? void 0 : C.endCursor) && t(Object(d.followersRequested)({
						...d.DEFAULT_VARIABLES,
						after: C.endCursor
					}))
				}, [C, t]);
				if (!I) return i.a.createElement(b.a, null);
				const N = null == O ? void 0 : O.name;
				if (!N) return i.a.createElement(b.b, null);
				let P;
				if (0 === (null == r ? void 0 : r.length)) P = i.a.createElement("div", {
					className: _.a.emptyState
				}, i.a.createElement("img", {
					className: _.a.snooSmile,
					src: `${a.a.assetPath}/img/snoomoji/snoo.png`
				}), i.a.createElement("div", {
					className: _.a.emptyStateTitle
				}, n.fbt._("Followers", null, {
					hk: "4scwa7"
				})), i.a.createElement("div", {
					className: _.a.emptyStateDescription
				}, n.fbt._("You don't have any followers yet, but when someone follows you, you'll see them here.", null, {
					hk: "1WWMuR"
				})));
				else {
					let e;
					if (k) {
						const t = g ? Object.values(g)[0] : void 0;
						e = i.a.createElement(u.a, {
							noResultsFound: !t,
							searchTerm: k,
							cancelSearch: () => S(""),
							searchPending: !!y
						}, t && i.a.createElement(E, {
							userId: t.id
						}))
					} else r && (e = i.a.createElement(c.b, {
						loadMoreToken: (null == C ? void 0 : C.endCursor) || void 0,
						onLoadMore: j
					}, r.map(e => ({
						estHeight: 56,
						id: e,
						render: function() {
							return i.a.createElement(E, {
								userId: e
							})
						}
					}))));
					P = i.a.createElement(i.a.Fragment, null, i.a.createElement(m.b, {
						activeSearchQuery: k,
						onSearch: e => (e => {
							S(e)
						})(e),
						positionSearchRight: !0
					}, i.a.createElement("div", {
						className: _.a.topBar
					}, i.a.createElement("div", {
						className: _.a.topBarTitleText
					}, n.fbt._("Followers", null, {
						hk: "4ah1S2"
					})), i.a.createElement("div", {
						className: _.a.topBarDescriptionText
					}, n.fbt._("This list is only visible to you. The most recent follows are shown first.", null, {
						hk: "BYist"
					})))), e)
				}
				return i.a.createElement(h.a, {
					contentClassName: _.a.followersListing,
					disableFullscreen: !0,
					fitPageToContent: !0,
					contentNavBar: i.a.createElement(f.a, {
						subredditOrProfile: O || void 0,
						pageName: n.fbt._("Followers", null, {
							hk: "3DwX8d"
						})
					}),
					content: P,
					sidebar: i.a.createElement(l.a, {
						className: _.a.followersListing,
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/reddit/pages/ModHub/Header.m.less"),
				o = r.n(i),
				a = r("./src/reddit/components/SubredditIcon/index.tsx"),
				d = r("./src/reddit/controls/InternalLink/index.tsx");
			t.a = e => {
				var t, r;
				return s.a.createElement("div", {
					className: o.a.header
				}, s.a.createElement(a.b, {
					className: o.a.subredditIcon,
					subredditOrProfile: e.subredditOrProfile
				}), s.a.createElement(d.default, {
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
				o = Object(n.c)({
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
			var l = function() {
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
			const c = {};
			var u = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
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
			const m = [];
			var p = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
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
			t.a = Object(n.c)({
				api: o,
				models: d,
				pageInfo: l,
				search: u,
				userIds: p
			})
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./src/reddit/selectors/experiments/index.ts"),
				o = r("./src/reddit/selectors/experiments/utils.ts"),
				a = r("./src/reddit/selectors/meta.ts"),
				d = r("./node_modules/reselect/es/index.js");
			const l = Object(d.a)(e => Object(s.c)(e, {
					experimentEligibilitySelector: e => Object(a.g)(e) && Object(i.f)(e),
					experimentName: n.fc
				}), o.a),
				c = Object(d.a)(e => Object(s.c)(e, {
					experimentEligibilitySelector: e => !Object(a.g)(e) && Object(i.f)(e),
					experimentName: n.ec
				}), o.a),
				u = Object(d.a)(l, c, (e, t) => e || t),
				m = Object(d.a)(l, c, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/experiments/econ/marketplace.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => {
					return !(Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.Xd
					}) === n.qd)
				},
				o = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.Yd
				}) === n.qd
		},
		"./src/reddit/selectors/followers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/pages/followers/index.ts");
			Object(n.a)({
				pages: {
					followers: s.a
				}
			});
			const i = e => {
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
		"./src/redditGQL/operations/DeleteSocialLinks.json": function(e) {
			e.exports = JSON.parse('{"id":"7eb2600cd927"}')
		},
		"./src/redditGQL/operations/ProfileFollowers.json": function(e) {
			e.exports = JSON.parse('{"id":"a7a31038ca56"}')
		},
		"./src/redditGQL/operations/SetSocialLinks.json": function(e) {
			e.exports = JSON.parse('{"id":"5064afb1fbe2"}')
		},
		"./src/redditGQL/operations/SocialLinks.json": function(e) {
			e.exports = JSON.parse('{"id":"11a239b07f86"}')
		},
		"./src/redditGQL/operations/UpdateSocialLinks.json": function(e) {
			e.exports = JSON.parse('{"id":"c558e604581f"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileFollowersPage.b6ec4990fa530f60293f.js.map