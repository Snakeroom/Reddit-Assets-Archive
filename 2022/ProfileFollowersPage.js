// https://www.redditstatic.com/desktop2x/ProfileFollowersPage.b93bd0d527dbda1cf043.js
// Retrieved at 4/25/2022, 12:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileFollowersPage", "ProfileFollowersAction"], {
		"./node_modules/lodash/take.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseSlice.js"),
				n = s("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, s) {
				return e && e.length ? (t = s || void 0 === t ? 1 : n(t), r(e, 0, t < 0 ? 0 : t)) : []
			}
		},
		"./src/lib/makeOverviewConversationsItemKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = (e, t) => {
				return `overviewConversations--[profile:'${t}']--[post:'${e}']`
			}
		},
		"./src/reddit/actions/pages/followers/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return n
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "f", (function() {
				return d
			}));
			const r = "PROFILE_FOLLOWERS_PAGE_LOADED",
				n = "MORE_PROFILE_FOLLOWERS_LOADED",
				i = "PROFILE_FOLLOWERS_SEARCH_LOADED",
				o = "PROFILE_FOLLOWERS_REQUEST_PENDING",
				a = "PROFILE_FOLLOWERS_REQUEST_FAILED",
				d = "FOLLOW_USER_SUCCESS"
		},
		"./src/reddit/actions/pages/followers/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileFollowersPageLoaded", (function() {
				return f
			})), s.d(t, "moreProfileFollowersLoaded", (function() {
				return v
			})), s.d(t, "profileFollowersSearchLoaded", (function() {
				return x
			})), s.d(t, "profileFollowersRequestPending", (function() {
				return g
			})), s.d(t, "profileFollowersPageFailed", (function() {
				return y
			})), s.d(t, "DEFAULT_VARIABLES", (function() {
				return C
			})), s.d(t, "followersPageRequested", (function() {
				return I
			})), s.d(t, "followersRequested", (function() {
				return w
			})), s.d(t, "followUserToggled", (function() {
				return O
			})), s.d(t, "toggleFollowUser", (function() {
				return E
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = (s("./src/reddit/actions/pages/profileOverview/index.ts"), s("./src/reddit/actions/toaster.ts")),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/redditGQL/operations/ProfileFollowers.json");
			var l = s("./src/reddit/endpoints/subreddit/subscriptions.ts");
			var c = e => {
					var t, s;
					if (!e.identity || !e.identity.followedByRedditorsInfo) return;
					const r = {},
						{
							followedByRedditorsInfo: n,
							redditor: i
						} = e.identity,
						{
							moderatedSubreddits: o
						} = i,
						{
							edges: a,
							pageInfo: d
						} = n;
					if (!a) return;
					r.pageInfo = {
						...d,
						endCursor: null !== (t = d.endCursor) && void 0 !== t ? t : null
					};
					const l = [],
						c = {};
					for (const u of a)
						if ("Redditor" === (null === (s = null == u ? void 0 : u.node) || void 0 === s ? void 0 : s.__typename)) {
							const {
								id: e
							} = u.node;
							l.push(e), c[e] = u.node
						} return r.followerUserIds = l, r.followers = c, r
				},
				u = s("./src/reddit/models/Toast/index.ts"),
				m = s("./src/reddit/actions/pages/followers/constants.ts"),
				p = s("./src/lib/initializeClient/installReducer.ts"),
				h = s("./src/reddit/reducers/pages/followers/index.ts"),
				b = s("./src/reddit/selectors/followers.ts");
			Object(p.a)({
				pages: {
					followers: h.a
				}
			});
			const f = Object(i.a)(m.b),
				v = Object(i.a)(m.a),
				x = Object(i.a)(m.e),
				g = Object(i.a)(m.d),
				y = Object(i.a)(m.c),
				C = {
					includeIdentity: !1,
					first: null,
					after: null,
					searchQuery: null
				},
				I = e => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					var n;
					const i = [];
					(null === (n = Object(b.a)(t())) || void 0 === n ? void 0 : n.length) || i.push(e(w(C))), await Promise.all(i)
				}, w = e => async (t, s, r) => {
					let {
						gqlContext: n
					} = r;
					const i = !s().user.account,
						l = {
							...C,
							...e,
							includeIdentity: i
						};
					t(g());
					const u = await (async (e, t) => {
						return await Object(a.a)(e, {
							...d,
							variables: t
						})
					})(n(), l);
					if (u.ok && u.body) {
						const {
							data: s
						} = u.body, r = c(s);
						if (!r) return t(Object(o.d)()), void t(y());
						(null == e ? void 0 : e.searchQuery) ? t(x(r)): (null == e ? void 0 : e.after) ? t(v(r)) : (null == e ? void 0 : e.after) || (null == e ? void 0 : e.searchQuery) || t(f(r))
					}
					u.ok || (t(Object(o.d)()), t(y()))
				}, O = Object(i.a)(m.f), E = (e, t) => async (s, i, a) => {
					let {
						apiContext: d
					} = a;
					var c, m;
					const p = null === (m = null === (c = i().pages) || void 0 === c ? void 0 : c.followers) || void 0 === m ? void 0 : m.models[e];
					if (!p) return;
					s(O({
						userId: e,
						isFollowed: t
					}));
					const h = p.name;
					if ((await Object(l.c)(d(), {
							subredditNames: [`${n.lc}${p.name}`],
							subscribe: t
						})).ok) {
						s(O({
							userId: e,
							isFollowed: t
						}));
						const n = r.fbt._("Sucсessfully followed {userName}", [r.fbt._param("userName", h)], {
								hk: "1AYBqL"
							}),
							i = r.fbt._("Sucсessfully unfollowed {userName}", [r.fbt._param("userName", h)], {
								hk: "4F2yCK"
							});
						s(Object(o.f)({
							text: t ? n : i
						}))
					} else {
						const n = r.fbt._("Something went wrong", null, {
							hk: "3i6szH"
						});
						s(O({
							userId: e,
							isFollowed: !t
						})), s(Object(o.f)(Object(o.e)(n, u.b.Error)))
					}
				}
		},
		"./src/reddit/actions/pages/profileOverview/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileOverviewConversationsPending", (function() {
				return Ee
			})), s.d(t, "profileOverviewConversationsLoaded", (function() {
				return _e
			})), s.d(t, "profileOverviewConversationsFailed", (function() {
				return Se
			})), s.d(t, "profileOverviewChronoPending", (function() {
				return je
			})), s.d(t, "profileOverviewChronoLoaded", (function() {
				return Ne
			})), s.d(t, "profileOverviewChronoFailed", (function() {
				return ke
			})), s.d(t, "profileOverviewConversationsRequested", (function() {
				return Pe
			})), s.d(t, "profileOverviewRequested", (function() {
				return Te
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/pick.js"),
				n = s.n(r),
				i = s("./src/lib/constants/index.ts"),
				o = s("./src/reddit/actions/moderatingSubreddits.ts"),
				a = s("./src/reddit/actions/pages/profileShared.ts"),
				d = s("./src/reddit/actions/subreddit.ts"),
				l = s("./src/config.ts"),
				c = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				u = s("./src/lib/makeApiRequest/index.ts"),
				m = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				h = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var b = s("./src/reddit/helpers/post/index.ts"),
				f = s("./src/reddit/constants/postLayout.ts"),
				v = s("./src/reddit/constants/parameters.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/selectors/listings.ts"),
				y = s("./src/reddit/selectors/profile.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				I = s("./src/lib/makeActionCreator/index.ts"),
				w = s("./src/reddit/actions/changeUsername.ts"),
				O = s("./src/reddit/actions/contentGate.ts"),
				E = s("./src/reddit/actions/externalAccount.ts"),
				_ = s("./src/reddit/actions/gold/powerups.ts"),
				S = s("./src/reddit/actions/pinnedPost.ts"),
				j = s("./src/reddit/actions/platform.ts"),
				N = s("./src/reddit/actions/profile/index.ts"),
				k = s("./src/reddit/actions/trophyCase.ts"),
				P = s("./src/reddit/constants/errors.ts"),
				T = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				R = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				F = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				M = s("./src/lib/initializeClient/installReducer.ts"),
				L = s("./node_modules/redux/es/redux.js"),
				U = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
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
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case F.a:
					case U.a: {
						const {
							key: s,
							error: r
						} = t.payload;
						return {
							...e,
							[s]: r
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
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case F.b:
						case F.a:
						case U.b:
						case U.a: {
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
				D = Object(L.c)({
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
							key: s
						} = t.payload;
						return {
							...e,
							[s]: {}
						}
					}
					case U.b: {
						const {
							key: s,
							fetchedToken: r
						} = t.payload, n = e[s];
						return {
							...e,
							[s]: {
								...n,
								[r]: !0
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
						case F.b:
						case U.b: {
							const {
								key: s,
								overviewIds: r
							} = t.payload, n = e[s] || [];
							return {
								...e,
								[s]: [...n, ...r]
							}
						}
						default:
							return e
					}
				},
				G = s("./src/lib/omitKey/index.ts");
			const Q = {};
			var Z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case F.b:
						case U.b: {
							const {
								key: s,
								dist: r,
								token: n
							} = t.payload;
							return n ? {
								...e,
								[s]: {
									dist: r,
									token: n
								}
							} : Object(G.a)(e, s)
						}
						default:
							return e
					}
				},
				Y = Object(L.c)({
					api: D,
					fetchedTokens: V,
					ids: q,
					loadMore: Z
				});
			const J = {};
			var X = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case F.f:
					case F.e: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case F.d: {
						const {
							key: s,
							error: r
						} = t.payload;
						return {
							...e,
							[s]: r || {}
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
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case F.e:
						case F.d: {
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
				te = Object(L.c)({
					error: X,
					pending: ee
				}),
				se = s("./src/reddit/actions/profileConversations.ts");
			const re = {};
			var ne = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : re,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case se.c:
					case se.b: {
						const {
							extraCommentsId: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case se.a: {
						const {
							extraCommentsId: s,
							error: r
						} = t.payload;
						return {
							...e,
							[s]: r || {}
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
						case se.c: {
							const {
								extraCommentsId: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case se.b:
						case se.a: {
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
				ae = Object(L.c)({
					error: ne,
					pending: oe
				});
			const de = {};
			var le = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : de,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case F.e:
						case se.b:
						case se.e:
							return {
								...e, ...t.payload.extraComments
							};
						default:
							return e
					}
				},
				ce = Object(L.c)({
					api: ae,
					models: le
				}),
				ue = s("./node_modules/lodash/mapValues.js"),
				me = s.n(ue),
				pe = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				he = s("./src/reddit/constants/comments.ts");
			const be = {};

			function fe(e) {
				const t = e;
				return me()(t, e => {
					let {
						depth: t,
						next: s,
						prev: r
					} = e;
					return {
						depth: t,
						next: s,
						prev: r
					}
				})
			}
			const ve = (e, t, s) => {
				const r = {};
				for (const n in t) {
					const e = t[n],
						s = e.postId;
					r.hasOwnProperty(s) ? r[s] = {
						...r[s],
						[n]: e
					} : r[s] = {
						[n]: e
					}
				}
				for (const n in s) {
					const e = s[n],
						t = e.postId;
					r.hasOwnProperty(t) ? r[t] = {
						...r[t],
						[n]: e
					} : r[t] = {
						[t]: e
					}
				}
				return r
			};
			var xe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : be,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case F.e:
					case se.e: {
						const {
							comments: s,
							extraComments: r,
							postIds: n,
							profileName: i
						} = t.payload, o = ve(n, s, r), a = {};
						for (const e of n) {
							a[Object(pe.a)(e, i)] = o.hasOwnProperty(e) ? fe(o[e]) : {}
						}
						return {
							...e,
							...a
						}
					}
					case se.b: {
						const {
							comments: s,
							commentLists: r,
							extraComments: n,
							extraCommentsId: i,
							postIds: o,
							profileName: a
						} = t.payload;
						if (0 === o.length) {
							const t = Object.keys(e).find(t => void 0 !== e[t][i]);
							if (!t) return e;
							const s = {
									...e[t]
								} [i].prev,
								r = s && s.id || "";
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
							l = fe(ve(o, s, n)[d]),
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
			const ge = {};
			var ye = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ge,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case F.e:
					case se.e: {
						const {
							commentLists: s,
							postIds: r,
							profileName: n
						} = t.payload, i = {};
						for (const e of r) {
							i[Object(pe.a)(e, n)] = s[e] && s[e].head ? s[e].head.id : null
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
			var Ie = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ce,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case F.e:
						case se.e: {
							const {
								postIds: s,
								profileName: r
							} = t.payload, n = {};
							for (const e of s) {
								n[Object(pe.a)(e, r)] = e
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
				we = Object(L.c)({
					api: te,
					extraComments: ce,
					keyToCommentThreadLinkSets: xe,
					keyToHeadCommentId: ye,
					keyToPostId: Ie
				}),
				Oe = Object(L.c)({
					chrono: Y,
					conversations: we
				});
			Object(M.a)({
				pages: {
					profileOverview: Oe
				}
			});
			const Ee = Object(I.a)(F.f),
				_e = Object(I.a)(F.e),
				Se = Object(I.a)(F.d),
				je = Object(I.a)(F.c),
				Ne = Object(I.a)(F.b),
				ke = Object(I.a)(F.a),
				Pe = (e, t, s, r) => async (r, n, o) => {
					const a = n(),
						d = !!a.listings.postOrder.ids[e],
						f = !!Object(g.c)(a, {
							listingKey: e
						});
					if (!!Object(g.d)(a, {
							listingKey: e
						}) || d && !f) return;
					r(Ee({
						key: e
					}));
					const v = await Object(R.a)("profile", () => ((e, t, s) => Object(u.a)(e, {
							data: s,
							endpoint: Object(m.a)(Object(c.a)(Object(p.a)(Object(h.a)(`${l.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
							traceRequestName: "get_profile_conversations",
							method: i.kb.GET
						}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
							...e,
							body: {
								...e.body,
								pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
							}
						} : e))(o.apiContext(), t, s)),
						x = v.body;
					await Object(b.a)(o.gqlContext, x.posts).then(e => x.posts = e);
					const {
						pinned: C,
						postIds: I
					} = x;
					if (v.ok) {
						r(_e({
							key: e,
							meta: a.meta,
							profileName: t,
							...x,
							postIds: I
						}));
						const s = Object(y.m)(n(), t);
						r(Object(S.h)({
							profileId: s,
							pinned: C
						}))
					} else r(Se({
						account: v.body.data ? v.body.data.account : null,
						error: v.body.reason ? {
							type: v.body.reason
						} : v.error,
						key: e
					})), v.body.reason === P.a.DeletedProfile && r(Object(O.s)({
						profileName: t
					})), r(Object(j.n)(v.status))
				}, Te = e => async (t, s, r) => {
					const {
						queryParams: l,
						params: c
					} = e, {
						sort: u,
						t: m
					} = Object(a.a)(s(), l), {
						profileName: p
					} = c;
					let h = !1;
					const b = f.e[Object(x.R)(s(), {})],
						g = p.toLowerCase(),
						I = {
							...n()(e.queryParams, v.n),
							sort: u,
							layout: b,
							t: m
						},
						O = [t(N.d(g))],
						S = Object(T.a)(g, i.vb, u, e.queryParams);
					if (s().listings.postOrder.ids[S] && !s().listings.postOrder.api.error[S] ? h = !0 : O.push(t(Pe(S, g, I, !0))), O.push(t(Object(o.b)())), await Promise.all(O), h) return;
					const P = s();
					if (!P.platform.currentPage) return;
					if (200 !== P.platform.currentPage.status) return;
					const R = Object(y.m)(s(), g),
						F = Object(C.Bb)(P, {
							userName: p
						}).id;
					t(j.m({
						title: Re(s(), p)
					})), Object(C.T)(P) && Object(C.X)(P, p) && t(Object(w.f)());
					const M = [t(Object(d.q)()), t(k.b(g, R)), t(N.b(g)), t(E.o(p)), t(N.g(p)), t(_.l(p, F))];
					await Promise.all(M)
				}, Re = (e, t) => Object(y.q)(e, {
					profileName: t
				})
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return $
			})), s.d(t, "d", (function() {
				return re
			})), s.d(t, "b", (function() {
				return oe
			})), s.d(t, "e", (function() {
				return ae
			})), s.d(t, "a", (function() {
				return de
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/get.js"),
				i = s.n(n),
				o = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/apiRequestState.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/subreddit.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/reddit/constants/modals.ts"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/makeApiRequest/index.ts"),
				h = s("./src/lib/omitHeaders/index.ts"),
				b = s("./src/reddit/constants/headers.ts"),
				f = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				v = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const x = (e, t, s) => Object(p.a)(Object(h.a)(e, [b.a]), {
				endpoint: Object(f.a)(Object(v.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: m.kb.GET,
				data: s
			});
			var g = s("./src/reddit/helpers/normalizeUsername/index.tsx"),
				y = s("./src/reddit/models/SubredditModeration/index.ts"),
				C = s("./src/reddit/models/Toast/index.ts"),
				I = s("./src/reddit/selectors/activeModalId.ts"),
				w = s("./src/reddit/selectors/bannedUser.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/actions/subredditModeration/constants.ts"),
				S = s("./src/lib/initializeClient/installReducer.ts"),
				j = s("./node_modules/redux/es/redux.js");
			var N = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _.r:
					case _.q:
						return null;
					case _.p:
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
						case _.r: {
							const {
								subredditId: s,
								fetchedToken: r
							} = t.payload, n = Object(y.e)(s, r);
							return {
								...e,
								[n]: !0
							}
						}
						case _.q:
						case _.p: {
							const {
								subredditId: s,
								fetchedToken: r
							} = t.payload, n = Object(y.e)(s, r);
							return {
								...e,
								[n]: !1
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
			var F = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _.q: {
							const {
								fetchedToken: s,
								subredditId: r
							} = t.payload, n = Object(y.e)(r, s);
							return {
								...e,
								[n]: !0
							}
						}
						default:
							return e
					}
				},
				M = s("./src/reddit/actions/inContextModeration.ts");
			var L = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case M.a:
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
						case _.q: {
							const {
								subredditId: e,
								after: s
							} = t.payload;
							return {
								[e]: s
							}
						}
						default:
							return e
					}
				},
				H = s("./node_modules/icepick/icepick.js");
			const B = {};
			var W = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _.o:
					case _.q: {
						const {
							subredditId: s,
							bannedUsers: r
						} = t.payload;
						return Object(H.merge)(e, {
							[s]: r
						})
					}
					case _.v: {
						const {
							subredditId: s,
							userId: r
						} = t.payload;
						return Object(H.unsetIn)(e, [s, r])
					}
					default:
						return e
				}
			};
			var D = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _.u:
					case _.t:
						return null;
					case _.s:
						return t.payload;
					default:
						return e
				}
			};
			var z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _.u:
							return !0;
						case _.t:
						case _.s:
							return !1;
						default:
							return e
					}
				},
				V = Object(j.c)({
					error: D,
					pending: z
				});
			var K = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _.u:
						case _.s:
							return null;
						case _.t: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				q = Object(j.c)({
					api: V,
					result: K
				});
			const G = {};
			var Q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _.q: {
							const {
								subredditId: s,
								bannedUserIds: r
							} = t.payload;
							return e[s] ? {
								...e,
								[s]: [...e[s], ...r]
							} : {
								...e,
								[s]: r
							}
						}
						case _.v: {
							const {
								subredditId: s,
								userId: r
							} = t.payload;
							return {
								[s]: e[s].filter(e => e !== r)
							}
						}
						case _.o: {
							const {
								subredditId: s,
								bannedUserIds: r
							} = t.payload, n = r[0];
							return n && e[s] && -1 === e[s].indexOf(n) ? {
								[s]: [n, ...e[s]]
							} : e
						}
						default:
							return e
					}
				},
				Z = Object(j.c)({
					api: T,
					fetchedTokens: F,
					inContext: L,
					loadMore: A,
					models: W,
					search: q,
					userOrder: Q
				});
			Object(S.a)({
				features: {
					banned: Z
				}
			});
			const Y = Object(o.a)(_.r),
				J = Object(o.a)(_.q),
				X = Object(o.a)(_.p),
				$ = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (s, r, n) => {
						let {
							apiContext: i
						} = n;
						const o = r(),
							a = t.after || "",
							d = Object(y.e)(e, a),
							l = o.features.banned.fetchedTokens[d];
						if (o.features.banned.api.pending[d] || l) return;
						s(Y({
							subredditId: e,
							fetchedToken: a
						}));
						const c = o.subreddits.models[e].name,
							u = await x(i(), c, t);
						u.ok ? s(J({
							...u.body,
							fetchedToken: a
						})) : s(X({
							subredditId: e,
							fetchedToken: a
						}))
					}
				},
				ee = Object(o.a)(_.u),
				te = Object(o.a)(_.t),
				se = Object(o.a)(_.s),
				re = (e, t) => async (s, r, n) => {
					let {
						apiContext: i
					} = n;
					const o = r().subreddits.models[e].name,
						a = {
							username: Object(g.a)(t)
						};
					s(ee());
					const d = await x(i(), o, a);
					d.ok ? s(te(d.body)) : s(se(d.error))
				}, ne = Object(o.a)(_.o), ie = Object(o.a)(_.v), oe = (e, t, s) => async (n, o, d) => {
					let {
						apiContext: l
					} = d;
					const u = o(),
						f = u.subreddits.models[e].url,
						v = u.subreddits.models[e].name;
					t.username = Object(g.a)(t.username), n(Object(a.h)(s));
					const y = await ((e, t, s) => Object(p.a)(Object(h.a)(e, [b.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: m.kb.POST,
						data: {
							api_type: "json",
							ban_reason: s.reason,
							ban_message: s.banMessage,
							duration: s.duration,
							name: s.username,
							note: s.modNote,
							ban_context: s.contextId,
							type: "banned"
						}
					}))(l(), f, t);
					if (y.ok) {
						n(Object(a.e)(s));
						const e = {
							username: t.username
						};
						n(Object(c.f)({
							kind: C.b.SuccessMod,
							text: r.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const i = await x(l(), v, e);
						i.ok && n(ne(i.body))
					} else {
						n(Object(a.f)(s, y.error));
						const e = i()(y, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(c.f)({
							kind: C.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ae = (e, t) => async (s, n, o) => {
					let {
						apiContext: a
					} = o;
					const d = n().subreddits.models[e].url,
						l = await ((e, t, s) => Object(p.a)(Object(h.a)(e, [b.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: m.kb.POST,
							data: {
								api_type: "json",
								id: s,
								type: "banned"
							}
						}))(a(), d, t);
					if (l.ok) s(ie({
						subredditId: e,
						userId: t
					})), s(Object(c.f)({
						kind: C.b.SuccessMod,
						text: r.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = i()(l, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						s(Object(c.f)({
							kind: C.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, de = (e, t) => async (s, r) => {
					const n = r();
					await Promise.all([(async () => {
						if (!Object(I.b)(u.a.BAN_USER)(n) && !Object(O.R)(n, {
								subredditId: e
							})) {
							const t = Object(O.U)(n, {
								subredditId: e
							});
							await s(Object(l.o)(t.name))
						}
					})(), (async () => {
						const r = Object(E.Bb)(n, {
							userName: t
						});
						if (!r) return;
						const i = Object(w.h)(n, {
							subredditId: e
						});
						i && i[r.id] || await s($(e, {
							username: t
						}))
					})()]), s(Object(d.i)(u.a.BAN_USER))
				}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var r, n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/actions/chat/toggle.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(r || (r = {}));
			const u = e => {
				let {
					onStartChat: t,
					text: s,
					className: n,
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
						if (b && b(e), t(), h === r.awardNotification) return f();
						o(Object(c.b)(a))
					},
					className: n,
					text: s,
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
					contextId: s,
					userId: r
				} = t;
				return {
					onStartChat: () => {
						e(Object(a.b)(r, s))
					},
					onAddUserToQuickReplyList: () => {
						e(Object(a.a)(r))
					}
				}
			});
			t.b = m(Object(d.c)(u))
		},
		"./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(r.a)({
				resolved: {},
				chunkName: () => "NftProfileUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("vendors~NftProfileUnit"), s.e("NftProfileUnit")]).then(s.bind(null, "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = n
		},
		"./src/reddit/components/EditableImage/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/EditableImage/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/controls/ImageInput/index.tsx"),
				d = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/models/ApiRequestState/index.ts"),
				u = s("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				m = s("./src/reddit/components/EditableImage/index.m.less"),
				p = s.n(m);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					altText: t,
					children: s,
					className: r,
					isProfileCard: m,
					isLoading: h,
					imageUrl: b,
					onFileSelected: f
				} = e;
				const v = Object(i.e)(u.a);
				return n.a.createElement("div", {
					className: Object(o.a)(p.a.Container, r)
				}, n.a.createElement("label", {
					className: p.a.HitBox
				}, n.a.createElement("span", {
					className: p.a.ImageContainer,
					role: "presentation"
				}, b ? n.a.createElement("img", {
					alt: t,
					className: p.a.Image,
					src: b
				}) : s), n.a.createElement(a.a, {
					className: p.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(c.b)();
						f(e, t)
					},
					isPending: v ? h : void 0
				}), !h && n.a.createElement("div", {
					className: Object(o.a)(p.a.EditButton, {
						[p.a.profileCard]: m
					})
				}, n.a.createElement(l.a, {
					name: "add_media",
					className: p.a.EditIcon
				}))), h && n.a.createElement(d.a, {
					className: p.a.LoadingIcon,
					sizePx: 80
				}))
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/snoovatarModal.ts"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/helpers/isPost.ts"),
				c = s("./src/reddit/selectors/commentSelector.ts"),
				u = s("./src/reddit/selectors/gold/awardIcon.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				p = s("./src/reddit/selectors/modUserNotes.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/profile.ts"),
				f = s("./src/reddit/selectors/structuredStyles.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/selectors/tooltip.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/selectors/userFlair.ts"),
				C = s("./src/reddit/selectors/userPrefs.ts"),
				I = s("./src/reddit/selectors/platform.ts"),
				w = s("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				O = s("./node_modules/fbt/lib/FbtPublic.js"),
				E = s("./src/config.ts"),
				_ = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				S = s("./src/lib/lessComponent.tsx"),
				j = s("./src/lib/prettyPrintNumber/index.ts"),
				N = s("./src/reddit/components/ChatButton/index.tsx"),
				k = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				P = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				T = s("./src/reddit/components/SubscribeButton/index.tsx"),
				R = s("./src/reddit/components/UserIcon/index.tsx"),
				F = s("./src/reddit/controls/Button/index.tsx"),
				M = s("./src/reddit/endpoints/profile/info.ts"),
				L = s("./src/reddit/helpers/trackers/authorHovercard.ts"),
				U = s("./src/reddit/icons/fonts/Info/index.tsx"),
				A = s("./src/reddit/icons/svgs/Admin/index.tsx"),
				H = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				B = s("./src/reddit/models/Gold/Award.ts"),
				W = s("./src/reddit/models/User/index.ts"),
				D = s("./src/reddit/components/HumanDate/index.tsx"),
				z = s("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				V = s("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				K = s("./src/reddit/actions/inContextModeration.ts"),
				q = s("./src/reddit/actions/modal.ts"),
				G = s("./src/reddit/actions/subredditModeration/ban.ts"),
				Q = s("./src/reddit/constants/modals.ts"),
				Z = s("./src/reddit/components/Hovercards/helpers.ts"),
				Y = s("./src/reddit/icons/fonts/index.tsx"),
				J = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				X = s("./src/reddit/selectors/bannedUser.ts"),
				$ = s("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				ee = s.n($);
			const {
				fbt: te
			} = s("./node_modules/fbt/lib/FbtPublic.js"), se = Object(o.c)({
				hasModMailPermissions: Object(m.b)(J.c.mail),
				isUserBanned: (e, t) => !!Object(X.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(g.Bb)(e, {
					userName: t.username
				})
			});
			class re extends n.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: s,
						isUserBanned: r,
						onUnbanUser: i,
						sendEvent: o,
						toggleBanModal: a,
						toggleMuteModal: d
					} = this.props;
					return n.a.createElement("div", {
						className: e
					}, r ? n.a.createElement(Z.a, {
						role: "button",
						onClick: () => {
							i(this.props.user.id), o(L.e(t))
						}
					}, n.a.createElement(Y.a, {
						name: "ban",
						isFilled: !0,
						className: ee.a.icon
					}), te._("Unban User", null, {
						hk: "1aASyW"
					})) : n.a.createElement(Z.a, {
						role: "button",
						onClick: () => {
							a(), o(L.a(t))
						}
					}, n.a.createElement(Y.a, {
						name: "ban",
						className: ee.a.icon
					}), te._("Ban User", null, {
						hk: "3OhuLx"
					})), s && n.a.createElement(Z.a, {
						role: "button",
						onClick: () => {
							d(), o(L.d(t))
						}
					}, n.a.createElement(Y.a, {
						name: "mod_mute",
						className: ee.a.icon
					}), te._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var ne = Object(i.b)(se, (e, t) => {
					let {
						username: s,
						subredditId: r,
						contextId: n
					} = t;
					return {
						onUnbanUser: t => e(Object(G.e)(r, t)),
						requestUserBanInfo: () => e(Object(G.c)(r, {
							username: s
						})),
						toggleBanModal: () => {
							e(Object(K.c)({
								username: s,
								subredditId: r,
								contextId: n
							})), e(Object(G.a)(r, s))
						},
						toggleMuteModal: () => {
							e(Object(K.d)({
								username: s,
								subredditId: r,
								contextId: n
							})), e(Object(q.i)(Q.a.MUTE_USER))
						}
					}
				})(re),
				ie = s("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: oe
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var ae = Object(i.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(ie.g)(t.subredditId, t.username))
				}))(e => n.a.createElement(Z.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(L.c(e.contextId))
					}
				}, n.a.createElement(Y.a, {
					name: "tag",
					className: ee.a.icon
				}), oe._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				de = s("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				le = s.n(de);

			function ce() {
				return (ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ue = S.a.wrapped(R.a, "UserIcon", le.a),
				me = S.a.wrapped(T.a, "SubscribeButton", le.a),
				pe = S.a.wrapped(N.b, "ChatButton", le.a),
				he = S.a.wrapped(H.a, "PremiumIcon", le.a),
				be = S.a.wrapped(_.a, "UserNameLink", le.a),
				fe = S.a.div("UserNameMetaData", le.a),
				ve = S.a.div("MetaDataItem", le.a),
				xe = S.a.div("Bullet", le.a),
				ge = S.a.div("UserNameContainer", le.a),
				ye = S.a.div("KarmaGrid", le.a),
				Ce = S.a.div("GenericKarma", le.a),
				Ie = S.a.a("InfoLink", le.a),
				we = S.a.div("KarmaCount", le.a),
				Oe = S.a.div("GenericKarmaLabel", le.a),
				Ee = S.a.div("BannerImage", le.a),
				_e = S.a.div("UserContainer", le.a),
				Se = S.a.div("BottomSpacer", le.a),
				je = S.a.div("Container", le.a),
				Ne = e => n.a.createElement("div", null, n.a.createElement("div", null, n.a.createElement(be, {
					to: `/user/${e.userName}/`
				}, e.title || e.userName), e.user.isEmployee && n.a.createElement(A.a, {
					className: le.a.adminIcon,
					title: O.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && n.a.createElement(_.a, {
					to: "/premium"
				}, n.a.createElement(he, null))), n.a.createElement(fe, null, n.a.createElement(ve, null, `u/${e.userName}`, n.a.createElement(xe, null, "•")), n.a.createElement(ve, null, (e.user.createdUtc || e.user.created) && n.a.createElement(D.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				ke = e => {
					const {
						user: {
							karma: t
						}
					} = e, s = {
						...M.a,
						...t
					};
					return n.a.createElement(ye, null, n.a.createElement(Ce, null, n.a.createElement(we, null, Object(j.b)(s.fromPosts)), n.a.createElement(Oe, null, O.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [O.fbt._plural(s.fromPosts)], {
						hk: "3K4oaH"
					}))), n.a.createElement(Ce, null, n.a.createElement(we, null, Object(j.b)(s.fromComments)), n.a.createElement(Oe, null, O.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [O.fbt._plural(s.fromComments)], {
						hk: "3gKRx9"
					}))), n.a.createElement(Ce, null, n.a.createElement(we, null, Object(j.b)(s.fromAwardsReceived)), n.a.createElement(Oe, null, O.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [O.fbt._plural(s.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), n.a.createElement(Ie, {
						href: B.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.a.createElement(U.a, {
						className: le.a.infoIcon
					})))), n.a.createElement(Ce, null, n.a.createElement(we, null, Object(j.b)(s.fromAwardsGiven)), n.a.createElement(Oe, null, O.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [O.fbt._plural(s.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), n.a.createElement(Ie, {
						href: B.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.a.createElement(U.a, {
						className: le.a.infoIcon
					})))))
				},
				Pe = e => {
					var t, s;
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
						userName: x,
						user: g,
						userFlair: y,
						isCurrentUserBanned: C,
						userProfileStyles: I,
						acceptChats: w,
						isCommentAuthorBlocked: _
					} = e;
					if (!g) return n.a.createElement(je, {
						style: b
					});
					const S = !!o && Object(W.e)(o) === x,
						j = !!(null == o ? void 0 : o.snoovatarFullBodyAsset),
						N = g.accountIcon || `${E.a.assetPath}/img/snoo_user_placeholder.png`,
						P = null == u ? void 0 : u.flair,
						T = null == u ? void 0 : u.access,
						R = (null == y ? void 0 : y.templateIds) && (null === (t = null == y ? void 0 : y.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						M = null === (s = null == y ? void 0 : y.displaySettings) || void 0 === s ? void 0 : s.isEnabled,
						{
							awardedLastMonth: U
						} = g,
						A = !!g.snoovatarFullBodyAsset,
						H = g.isNSFW && a;
					let B;
					return B = A ? !H && I && I.bannerBackgroundImage || void 0 : H ? `${E.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, n.a.createElement(je, {
						className: r,
						id: d,
						style: b
					}, !A && B && n.a.createElement(Ee, {
						style: {
							backgroundImage: `url('${B}')`
						}
					}), n.a.createElement(_e, null, A ? n.a.createElement(V.a, {
						isHovercard: !0,
						bannerBackgroundImage: B,
						compact: !0,
						currentUserHasSnoovatar: j,
						isEmployee: g.isEmployee,
						isGold: g.isGold,
						isNSFW: g.isNSFW,
						isOwnProfile: S,
						onClickSnoovatar: () => c && c(),
						prefersReducedAnimations: !!m,
						snoovatarUrl: g.snoovatarFullBodyAsset,
						title: null == p ? void 0 : p.title,
						userCreated: g.created,
						username: x,
						url: `/user/${e.userName}/`
					}) : n.a.createElement(ge, null, n.a.createElement(ue, {
						iconUrl: N,
						isNSFW: g.isNSFW,
						userName: x
					}), n.a.createElement(Ne, {
						title: null == p ? void 0 : p.title,
						user: g,
						userName: x
					})), n.a.createElement(ke, {
						user: g
					}), U && n.a.createElement(z.a, {
						recentAwardings: U,
						topAwardIcon: v,
						username: x
					}), l && !S && !C && w && !_ && n.a.createElement(pe, {
						contextId: i,
						priority: F.c.Secondary,
						userId: g.id,
						text: O.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), g.hasUserProfile && !C && !_ && !S && g.enableFollowers && n.a.createElement(me, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(L.h)(e ? "unfollow" : "follow", i),
						isFullWidth: !0,
						small: !0
					})), T && i && !S && f && n.a.createElement(ne, {
						contextId: i,
						subredditId: f,
						sendEvent: h,
						username: x
					}), P && i && R && M && f && n.a.createElement(ae, {
						contextId: i,
						subredditId: f,
						sendEvent: h,
						username: x
					}), n.a.createElement(k.i, {
						contextId: i,
						subredditId: f,
						user: g
					}), !(T || l) && n.a.createElement(Se, null))
				},
				Te = Object(P.a)(Pe),
				Re = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return n.a.createElement(Te, ce({
						isOpen: t
					}, e))
				};
			Re.WrappedComponent = Pe;
			var Fe = Re;
			const Me = Object(o.c)({
					activeTooltipId: x.a,
					currentUser: g.l,
					isLoggedIn: g.R,
					hideNSFWPref: g.G,
					moderatorPermissions: (e, t) => {
						let {
							subredditId: s
						} = t;
						return s ? Object(m.n)(e, {
							subredditId: s
						}) : void 0
					},
					prefersReducedAnimations: C.c,
					profile: (e, t) => {
						let {
							userName: s
						} = t;
						return Object(b.j)(e, {
							profileName: s
						})
					},
					topAwardIcon: (e, t) => {
						let {
							userName: s
						} = t;
						return Object(u.e)(e, {
							userName: s,
							minSize: 32
						})
					},
					user: g.Bb,
					userFlair: (e, t) => {
						let {
							subredditId: s
						} = t;
						return s ? Object(y.d)(e, {
							subredditId: s
						}) : void 0
					},
					isCurrentUserBanned: (e, t) => !!Object(v.n)(t) && Object(v.fb)(e, t),
					userProfileStyles: (e, t) => Object(f.m)(e, Object(b.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const s = Object(b.h)(e, {
							profileName: t.userName
						});
						return !s || s.acceptChats
					},
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subredditId: s
						} = t;
						const r = Object(I.e)(e),
							n = s || r && Object(v.F)(e, r.name);
						return !!n && Object(m.i)(e, n)
					},
					trophyCase: (e, t) => Object(b.r)(e, Object(b.m)(e, t.userName)),
					isNightMode: g.eb,
					lastAuthorModNote: (e, t) => {
						if (!t.contextId) return;
						const s = Object(l.a)(t.contextId) ? Object(h.G)(e, {
							postId: t.contextId
						}) : Object(c.b)(e, {
							commentId: t.contextId
						});
						return Object(p.a)(e, null == s ? void 0 : s.authorId, t.subredditId)
					},
					userIsSubscriber: (e, t) => {
						let {
							userName: s
						} = t;
						return Object(v.gb)(e, {
							identifier: {
								name: s,
								type: "profile"
							}
						})
					}
				}),
				Le = Object(i.b)(Me, (e, t) => ({
					onClickSnoovatar: () => e(Object(a.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(d.i)())
				}));
			t.a = Le(e => e.isModWithUserNotesPermissions ? n.a.createElement(w.b, {
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
			}) : n.a.createElement(Fe, {
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
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less": function(e, t, s) {
			e.exports = {
				icon: "xd9vrdS8_V6IVus6-mHAM"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const i = "UserInfoTooltip";
			t.b = Object(r.a)({
				ErrorComponent: () => null,
				getComponent: () => Object(n.a)(() => Promise.all([s.e("AuthorHovercard~Reddit"), s.e("AuthorHovercard")]).then(s.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.tsx"))).then(e => e.default),
				LoadingComponent: () => null
			})
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				o = s("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(a.c)(e => {
				const t = `${e.tooltipId}-hover-id`;
				return n.a.createElement(i.a, {
					className: e.wrapperClassName,
					hoverId: t,
					sendHoverEvent: e.sendHoverCardEvent,
					tooltipId: e.tooltipId,
					authorOrSubredditName: e.user
				}, e.children, n.a.createElement(o.a, {
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
		"./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less": function(e, t, s) {
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
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, s) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			})), s.d(t, "b", (function() {
				return C
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/lessComponent.tsx"),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/profile/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/selectors/tooltip.ts");
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
				p = s("./src/reddit/actions/subreddit.ts");
			const h = Object(a.c)({
				dropdownIsOpen: (e, t) => Object(c.b)(t.tooltipId)(e)
			});
			var b = Object(o.b)(h, (e, t) => ({
					onCloseUserDropdown: () => e(Object(l.i)()),
					onOpenUserDropdown: async () => {
						var s;
						e(Object(l.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.u)(t.authorOrSubredditName)), null === (s = t.onShow) || void 0 === s || s.call(t)
					}
				})),
				f = s("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				v = s.n(f);
			class x extends n.a.Component {
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
					return n.a.createElement("div", {
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
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, s) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			}));
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/layout/row/Inline/index.tsx"),
				i = s("./src/reddit/components/Hovercards/helpers.m.less"),
				o = s.n(i);
			const a = r.a.wrapped(n.a, "UserActionItem", o.a),
				d = e => {
					const {
						author: t,
						itemId: s,
						subredditName: r,
						tooltipIdPrefix: n,
						tooltipType: i
					} = e;
					let o = n;
					return s && (o = `${o}--${s}`), i && (o = `${o}--${i}`), t && (o = `${o}--${t}`), r && (o = `${o}--${r}`), o
				}
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "e", (function() {
				return O
			})), s.d(t, "f", (function() {
				return E
			})), s.d(t, "g", (function() {
				return _
			})), s.d(t, "h", (function() {
				return S
			})), s.d(t, "i", (function() {
				return j
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./node_modules/lodash/isNil.js"),
				d = s.n(a),
				l = s("./src/reddit/constants/jsapiEvents.ts");
			var c = s("./src/reddit/singleton/EventSystem.ts");
			const u = Object(o.c)({
				consumers: e => e.jsApi
			});
			class m extends r.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: s,
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
					return e.consumers.length ? n.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && n.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var p = Object(i.b)(u, {})(m),
				h = s("./src/reddit/selectors/comments.ts"),
				b = s("./src/reddit/selectors/commentSelector.ts"),
				f = s("./src/reddit/selectors/subreddit.ts");
			const v = (e, t) => {
				const s = Object(b.b)(e, t),
					r = Object(f.J)(e, t);
				return {
					comment: s,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var x = Object(i.b)(() => Object(o.a)(v, h.j, (e, t) => ({
				...e,
				depth: t
			})))(e => n.a.createElement(p, {
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
				const s = Object(b.b)(e, t),
					r = Object(f.J)(e, t);
				return {
					comment: s,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var y = Object(i.b)(() => Object(o.a)(g, e => e))(e => n.a.createElement(p, {
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
				}))(e => n.a.createElement(p, {
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
				I = s("./src/reddit/hooks/usePostContext.ts");
			var w = e => {
				const t = Object(I.a)(),
					s = Object(r.useMemo)(() => ({
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
				return t ? n.a.createElement(p, {
					className: e.className,
					type: "post",
					data: s
				}) : null
			};
			var O = e => {
				const t = Object(I.a)(),
					s = Object(r.useMemo)(() => ({
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
				return t ? n.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: s
				}) : null
			};
			var E = e => {
				const t = Object(I.a)(),
					s = Object(r.useMemo)(() => ({
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
				return t ? n.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: s
				}) : null
			};
			var _ = Object(i.b)(() => Object(o.c)({
				subreddit: f.U
			}))(e => n.a.createElement(p, {
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
			var S = Object(i.b)(() => Object(o.c)({
				subredditOrProfile: (e, t) => Object(f.M)(e, {
					identifier: t
				})
			}))(e => n.a.createElement(p, {
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
						subredditId: s
					} = t;
					return s ? Object(f.U)(e, {
						subredditId: s
					}) : null
				}
			}))(e => n.a.createElement(p, {
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
		"./src/reddit/components/ModerationPagesEmptyList/index.m.less": function(e, t, s) {
			e.exports = {
				NoResultsContainer: "FIy4e_7DNe0P9cdi_1jVn",
				noResultsContainer: "FIy4e_7DNe0P9cdi_1jVn",
				NoResultsText: "_3V0T64xptTp5xLaY-1nsaz",
				noResultsText: "_3V0T64xptTp5xLaY-1nsaz"
			}
		},
		"./src/reddit/components/ModerationPagesEmptyList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return c
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/ModerationPagesEmptyList/index.m.less"),
				a = s.n(o);
			const d = i.a.div("NoResultsContainer", a.a),
				l = i.a.div("NoResultsText", a.a);

			function c(e) {
				const {
					childrenPosition: t = "top"
				} = e;
				return n.a.createElement(d, {
					className: e.className
				}, "top" === t && e.children, n.a.createElement(l, null, e.text), "bottom" === t && e.children)
			}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/config.ts"),
				o = s("./src/lib/prettyPrintNumber/index.ts"),
				a = s("./src/reddit/components/ProfileIdCard/index.m.less"),
				d = s.n(a);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class c extends n.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: s
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: r,
						totalCount: a
					} = t, c = r.description ? r.description : r.name;
					return n.a.createElement("a", {
						className: d.a.AwardedLastMonth,
						href: `${i.a.oldRedditUrl}/user/${s}/gilded`
					}, n.a.createElement("div", {
						className: d.a.iconColumn
					}, n.a.createElement("img", {
						alt: c,
						className: d.a.icon,
						src: e
					}), a > 1 && n.a.createElement("span", {
						className: d.a.count
					}, `+${Object(o.b)(a-1)}`)), n.a.createElement("div", {
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
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less": function(e, t, s) {
			e.exports = {
				Banner: "_2ZyL7luKQghNeMnczY3gqW",
				banner: "_2ZyL7luKQghNeMnczY3gqW"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/reddit/models/Image/index.tsx"),
				a = s("./src/reddit/components/EditableImage/index.tsx"),
				d = s("./src/reddit/models/User/index.ts"),
				l = s("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				c = s("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				u = s.n(c);
			class m extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const s = await Object(o.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(s, "profileBanner"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						bannerUrl: e,
						className: t,
						currentUser: s,
						hideNSFWPref: n,
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
					return s && Object(d.e)(s) === l ? i.a.createElement(a.a, {
						altText: r.fbt._("{userName} banner image", [r.fbt._param("userName", l)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: c,
						onFileSelected: this.updateProfileIcon
					}, m) : o && n ? null : m
				}
			}
			t.a = Object(l.a)(m)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/preferences.ts"),
				o = s("./src/reddit/selectors/user.ts");
			const a = Object(n.c)({
					currentUser: o.l,
					hideNSFWPref: o.G
				}),
				d = Object(r.b)(a, e => ({
					imageUpdateRequested: (t, s) => e(Object(i.C)(t, s))
				}));
			t.a = d
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router/esm/react-router.js"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/snoovatarModal.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = s("./src/reddit/icons/svgs/Shirt/index.tsx"),
				h = s("./src/reddit/models/Vote/index.ts"),
				b = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				f = s.n(b);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(a.i)(e => {
				let {
					isHovercard: t,
					username: s,
					isAvatarPost: a,
					post: b,
					share: x
				} = e;
				const g = Object(c.b)(),
					y = Object(o.d)(),
					C = b && b.id,
					I = b && b.voteState;
				let w = null;
				C || (w = t ? "user_hovercard" : "profile_overview");
				const O = Object(n.useCallback)(() => g(Object(m.g)(t ? "user_hovercard" : "profile_overview", s)), [t, g, s]);
				return i.a.createElement(u.t, {
					onClick: () => {
						a ? (g(m.h), C && I === h.a.notVoted && y(Object(d.kb)(C))) : O();
						const e = a ? "postify" : "copy";
						y(Object(l.b)({
							clickSource: w,
							share: x,
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
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/icons/svgs/Shirt/index.tsx"),
				l = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				c = s.n(l);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function(e) {
				let {
					compact: t,
					currentUserHasSnoovatar: s,
					className: r,
					isOwnProfile: l,
					onClick: m
				} = e;
				return n.a.createElement(o.t, {
					onClick: m,
					isFullWidth: !0,
					className: Object(i.a)(c.a.snoovatarButton, {
						[c.a.snoovatarExtraPadding]: !s && l,
						[c.a.compactButtonLayout]: t
					}, r)
				}, s ? n.a.createElement(d.a, {
					className: c.a.shirtIcon
				}) : n.a.createElement("div", {
					className: c.a.shirtIcon
				}), s ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : l ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), s ? n.a.createElement("div", {
					className: c.a.chevronIcon
				}) : n.a.createElement(a.a, {
					name: "caret_right",
					className: c.a.chevronIcon
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less": function(e, t, s) {
			e.exports = {
				BannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				bannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				BannerImage: "_1IvROQ79nAJZ87_JkTFsLO",
				bannerImage: "_1IvROQ79nAJZ87_JkTFsLO"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				o = s("./src/reddit/icons/svgs/Close/index.tsx"),
				a = s("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				d = s("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				l = s.n(d),
				c = s("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				u = s.n(c);
			t.a = function(e) {
				let {
					bannerBackgroundImage: t,
					isNSFW: s,
					username: r,
					editMode: d,
					isDeletingBanner: c,
					onDeleteBanner: m
				} = e;
				return n.a.createElement("div", {
					className: l.a.bannerWrapper
				}, n.a.createElement(a.a, {
					bannerUrl: t,
					isNSFW: s,
					userName: r
				}), d && t && (c ? n.a.createElement(i.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : n.a.createElement(o.a, {
					className: u.a.closeIcon,
					onClick: m
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/reddit/controls/InternalLink/index.tsx"),
				o = s("./src/reddit/components/HumanDate/index.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function(e) {
				let {
					className: t,
					shouldDisplaySnoovatar: s,
					url: r,
					userCreated: d,
					username: l,
					...c
				} = e;
				const u = s ? n.a.createElement(n.a.Fragment, null, "u/", l, " · ", n.a.createElement(o.d, {
					seconds: d,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${l}`;
				return r ? n.a.createElement(i.a, a({}, c, {
					className: t,
					to: r
				}), u) : n.a.createElement("span", a({}, c, {
					className: t
				}), u)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, s) {
			e.exports = {
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/config.ts"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./src/reddit/icons/svgs/Admin/index.tsx"),
				d = s("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				l = s("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				c = s("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				u = s.n(c);
			t.a = e => {
				let {
					title: t,
					username: s,
					isEmployee: i,
					isGold: c,
					isNSFW: m
				} = e;
				return o.a.createElement("h1", {
					className: u.a.snoovatarUserTitle
				}, t || s, i && o.a.createElement(a.a, {
					className: u.a.snoovatarAdminIcon,
					title: n.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				}), c && o.a.createElement("a", {
					title: n.fbt._("{username} has Reddit Premium", [n.fbt._param("username", s)], {
						hk: "3Fylv"
					}),
					href: `${r.a.redditUrl}/premium`
				}, o.a.createElement(l.a, {
					className: u.a.snoovatarPremiumIcon
				})), m && o.a.createElement(d.a, {
					className: u.a.snoovatarNsfwIcon,
					title: n.fbt._("NSFW - Adult Content", null, {
						hk: "2Iw7mN"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts"),
				d = s("./src/reddit/controls/InternalLink/index.tsx"),
				l = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				c = s("./src/reddit/icons/fonts/index.tsx"),
				u = s("./src/reddit/selectors/experiments/econ/index.ts"),
				m = s("./src/reddit/selectors/experiments/econ/avatarNfts.ts"),
				p = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				h = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				b = s("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				f = s("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				v = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				x = s.n(v);
			const g = 25;

			function y(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function C(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const I = y("particleDelay", x.a),
				w = y("particleX", x.a),
				O = y("particleFloat", x.a),
				E = () => {
					const e = C(w),
						t = C(O),
						s = C(I);
					return Object(o.a)(x.a.particle, e, t, s)
				};
			class _ extends n.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < g; t++) e.push(this.createParticle(t));
					return n.a.createElement("div", {
						role: "presentation",
						className: x.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return n.a.createElement("div", {
						key: e,
						className: `${E()}`
					})
				}
			}
			var S = _,
				j = s("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				N = s.n(j),
				k = s("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = e => {
				let {
					bannerBackgroundImage: t,
					compact: s,
					currentUserHasSnoovatar: r,
					editMode: v,
					isDeletingBanner: g,
					isEmployee: y,
					isGold: C,
					isNSFW: I,
					isOwnProfile: w,
					onClickSnoovatar: O,
					onDeleteBanner: E,
					prefersReducedAnimations: _,
					snoovatarUrl: j,
					title: P,
					userCreated: T,
					username: R,
					url: F,
					isHovercard: M
				} = e;
				const L = Object(i.e)(e => !w && !!j && Object(u.g)(e)),
					U = Object(i.e)(m.b),
					A = j && Object(l.e)(j) && U;
				return n.a.createElement(n.a.Fragment, null, n.a.createElement(b.a, {
					bannerBackgroundImage: t,
					editMode: !!v,
					isNSFW: I,
					username: R,
					isDeletingBanner: !!g,
					onDeleteBanner: E
				}), A ? n.a.createElement("div", {
					className: x.a.nftProfileUnitContainer
				}, n.a.createElement(a.a, {
					className: x.a.nftProfileUnit,
					imageUrl: j
				})) : n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: x.a.snoovatarContainer
				}, C && n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: x.a.topGlow
				}), n.a.createElement("div", {
					className: x.a.bottomGlow
				}), !_ && n.a.createElement(S, null)), n.a.createElement("img", {
					className: Object(o.a)(x.a.snoovatar, {
						[x.a.premiumGlow]: C
					}),
					src: j || void 0
				})), !v && w && n.a.createElement(d.a, {
					to: "/settings/profile",
					className: x.a.snoovatarSettingsLink
				}, n.a.createElement(c.a, {
					name: "settings",
					className: N.a.settingsIcon
				}))), n.a.createElement(k.a, {
					isEmployee: y,
					isGold: C,
					isNSFW: I,
					title: P,
					username: R
				}), n.a.createElement(f.a, {
					className: x.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: R,
					userCreated: T,
					url: F
				}), (w || !r && !!j) && n.a.createElement(p.a, {
					compact: s,
					currentUserHasSnoovatar: r,
					isOwnProfile: w,
					onClick: O
				}), L && n.a.createElement(h.a, {
					username: R,
					isHovercard: !!M,
					share: {
						username: R
					}
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/SidebarContainer/index.tsx"),
				d = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				l = s("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				c = s("./src/reddit/components/SidebarProfilePowerupContributions/index.tsx"),
				u = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				m = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				p = s("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				h = s("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/selectors/experiments/econ/index.ts");
			const v = Object(r.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ProfileIdCard").then(s.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				x = e => {
					const t = Object(o.e)(e => Object(f.k)(e));
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
			x.defaultProps = {
				isOverlay: !1
			}, t.a = x
		},
		"./src/reddit/components/Scroller/Simple.m.less": function(e, t, s) {
			e.exports = {
				Hidden: "wwHbgRV0ZXGp5CHHlpo5u",
				hidden: "wwHbgRV0ZXGp5CHHlpo5u"
			}
		},
		"./src/reddit/components/Scroller/Simple.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Q
			}));
			var r = s("./node_modules/lodash/debounce.js"),
				n = s.n(r),
				i = s("./node_modules/lodash/isNil.js"),
				o = s.n(i),
				a = s("./node_modules/react/index.js"),
				d = s.n(a),
				l = s("./node_modules/react-dom/index.js"),
				c = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/request-idle-callback/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				p = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/fastdom/index.ts"),
				b = s("./node_modules/lodash/throttle.js"),
				f = s.n(b);
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
				I = [y.Max10, y.Max20, y.Max30, y.Max40, y.Max50, y.Max60],
				w = e => ({
					eventHandler: e
				});

			function O(e) {
				let {
					fn: t,
					subscriber: s,
					timeout: r
				} = e;
				const n = [];
				let i, o, a;
				const d = () => {
						if (n.length < g) return;
						const e = C(),
							t = Math.min(x, n.length),
							r = n.splice(0, t);
						n.splice(0, n.length);
						const i = r[t - 1] - r[0];
						for (let s = r.shift(); r.length > 0; s = r.shift()) {
							const t = r[0] - s,
								n = Math.min(60, Math.ceil(1e3 / t));
							e[n <= 10 ? y.Max10 : 60 === n ? y.Max60 : I[Math.ceil(n / 10) - 1]] += t
						}
						const o = C();
						for (const s in e) o[s] = e[s] / i;
						s(o)
					},
					l = () => {
						void 0 !== a && (window.clearTimeout(a), a = void 0)
					},
					c = () => {
						void 0 !== i && (cancelAnimationFrame(i), i = void 0), void 0 !== o && (window.clearInterval(o), o = void 0), l(), d()
					},
					u = () => {
						i = requestAnimationFrame(() => {
							n.push(performance.now()), u()
						})
					},
					m = f()(() => {
						l(), a = window.setTimeout(c, r)
					}, p.L);
				return {
					cleanup: c,
					eventHandler: e => {
						void 0 === o ? (u(), m(), o = window.setInterval(d, v)) : m(), t(e)
					}
				}
			}
			var E = s("./src/lib/scheduler/index.ts"),
				_ = s("./src/lib/domUtils/index.ts"),
				S = s("./src/lib/LinkedListMap/index.ts");
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
					for (let s = 0; s < this.size; s++) e(this.items[t], s, this.size), t = (t + 1) % this.maxSize
				}
				map(e) {
					const t = new Array(this.size);
					return this.forEach((s, r, n) => {
						t[r] = e(s, r, n)
					}), t
				}
				getEntries() {
					const e = new Array(this.size);
					return this.forEach((t, s) => {
						e[s] = t
					}), e
				}
				clear() {
					const e = this.size;
					for (let t = 0; t < e; t++) this.pop()
				}
			}
			var k = s("./src/reddit/components/Scroller/getDocumentTop.ts");
			class P {
				constructor(e) {
					let {
						top: t,
						height: s,
						heightWithSuffix: r
					} = e;
					this.height = s, this.heightWithSuffix = r, this.top = t, this.bottom = this.top + this.height
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
				const s = o()(e) ? 1e3 : e;
				if ("undefined" != typeof window && t) {
					const e = t === document ? Object(k.a)() : t.scrollTop;
					return new P({
						top: e,
						height: window.innerHeight
					})
				}
				return new P({
					top: 0,
					height: s
				})
			};
			var R = s("./src/reddit/components/ResizeSensor/index.tsx"),
				F = s("./src/reddit/constants/componentSizes.ts"),
				M = s("./src/reddit/constants/elementClassNames.ts"),
				L = s("./src/reddit/contexts/InsideOverlay.tsx"),
				U = s("./src/reddit/selectors/platform.ts"),
				A = s("./src/telemetry/helpers/sendEvent.ts"),
				H = s("./src/telemetry/helpers/sendTiming.ts"),
				B = s("./src/reddit/components/Scroller/Simple.m.less"),
				W = s.n(B);
			const D = F.g,
				z = 5 * p.L,
				V = 3,
				K = Object(m.c)({
					isOverlayOpen: U.i
				}),
				q = Object(c.b)(K),
				G = {};

			function Q(e) {
				return e === document
			}

			function Z(e) {
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
				se = 2 * p.L,
				re = 400,
				ne = 8,
				ie = 5 * p.L,
				oe = 30,
				ae = "object" == typeof performance && "function" == typeof performance.now,
				de = () => ae ? performance.now() : Date.now();

			function le(e, t) {
				return S.a.fromArray(e.children.map((e, s) => {
					const r = t && t.get(e.id);
					return r ? (r.isFocusable = !!e.isFocusable, r.trackOnEnteredViewport = e.trackOnEnteredViewport, r.trackOnExitedViewport = e.trackOnExitedViewport, r) : {
						el: null,
						id: e.id,
						index: s,
						isFocusable: !!e.isFocusable,
						itemRef: void 0,
						focused: !1,
						loaded: !t && s < ee,
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
						A.b.enqueue(new E.a({
							args: [e, t],
							cb: (e, t) => Object(H.a)(p.n.Redesign, {
								data: e,
								meta: t,
								type: "scrollfps"
							})
						}))
					}, this.getVisibleChildren = () => {
						let e = 0;
						const t = te + (this.props.viewportTopPadding ? this.props.viewportTopPadding : 0),
							s = [];
						let r = this.nextVisibleChildrenIndex;
						for (; e < t && r < this.props.children.length;) {
							const t = this.props.children[r];
							s.push(t), e += t.estHeight, r++
						}
						return this.visibleChildrenCount = s.length, s
					}, this.setRenderableChildrenIndexIncrement = () => {
						if (this.props.children[0]) {
							const e = this.props.children[0].estHeight;
							this.renderableChildrenIndexIncrement = Math.min(Math.ceil(re / e), ne)
						} else this.renderableChildrenIndexIncrement = ne
					}, this.updateRenderableChildrenWhenIdle = () => {
						this.cancelPopulateRenderableChildrenWhenIdle(), this.hasScrolledWithinThreshold() || (this.timeoutForUpdateIdleCallback = ie, Object(u.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle), this.requestUpdateWhenIdleCallbackHandle = Object(u.requestIdleCallback)(() => {
							const e = Math.ceil(this.renderableChildrenIndexIncrement / 2);
							this.populateRenderableChildrenFromProps(!1, e)
						})), this.state.renderableChildren.length < this.props.children.length && this.schedulePopulateRenderableChildrenWhenIdle()
					}, this.hasScrolledWithinThreshold = () => !!this.lastScrollTime && de() - this.lastScrollTime < se, this.populateRenderableChildrenFromProps = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
							s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.renderableChildrenIndexIncrement,
							r = arguments.length > 2 ? arguments[2] : void 0;
						const n = r || t.props.children;
						if (t.state.renderableChildren.length < n.length || e)
							if (t.hasScrolledWithinThreshold()) h.a.read(() => {
								clearTimeout(t.updateRenderableChildrenHandle), t.updateRenderableChildrenHandle = setTimeout(() => {
									t.populateRenderableChildrenFromProps(e, t.renderableChildrenIndexIncrement, r ? n : void 0)
								}, se)
							});
							else {
								t.nextVisibleChildrenIndex + s <= n.length ? t.nextVisibleChildrenIndex += s : t.nextVisibleChildrenIndex = n.length;
								const e = n.slice(0, t.nextVisibleChildrenIndex);
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
							s = 0,
							r = t.state.renderableChildren.length;
						for (; s < e && r < t.props.children.length;) s += t.props.children[r].estHeight, r++;
						const n = r - t.state.renderableChildren.length;
						return Math.max(t.renderableChildrenIndexIncrement, n)
					}, this.schedulePopulateRenderableChildrenWhenIdle = () => {
						!this.props.isOverlayOpen || this.props.isOverlay ? this.updateRenderableChildrenWhenIdleHandle = setTimeout(() => {
							this.updateRenderableChildrenWhenIdle()
						}, this.timeoutForUpdateIdleCallback) : this.cancelPopulateRenderableChildrenWhenIdle()
					}, this.cancelPopulateRenderableChildrenWhenIdle = () => {
						clearTimeout(this.updateRenderableChildrenWhenIdleHandle), Object(u.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle)
					}, this.callOnScrollForItemsChanged = n()(() => {
						this.handleScroll()
					}, p.L), this.pauseAllElements = () => {
						const e = this.getItemsInViewportWithFilter(this.loadedChildRefFilter),
							t = [];
						e.forEach(e => {
							const {
								itemRef: s
							} = e;
							s && (e.focused = !1, t.push(s.pauseContent))
						}), h.a.write(() => {
							t.forEach(e => e())
						})
					}, this.elementIsVisible = e => !!this.viewport && this.viewport.intersects(e), this.getItemsInViewportWithFilter = e => {
						this.updateViewportInfo();
						const t = new S.a("id");
						return this.state.renderableChildren.forEach(s => {
							const r = this.childMap.get(s.id);
							r && e(r) && t.push(r)
						}), t
					}, this.visibleChildRefFilter = e => {
						const t = this.getChildRectangle(e);
						return t && this.elementIsVisible(t) || !1
					}, this.loadedChildRefFilter = e => e.loaded, this.resetScrollFramerateAndFocus = () => {
						this.scrollContainer && (this.pixelsPerMSRing.clear(), this.lastScrollTime = -1, this.needsToPauseViewportItems = !0, null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(u.requestIdleCallback)(this.unmountItemsWhileIdle)), setTimeout(this.handleScroll, p.L))
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
							const s = (null == e ? void 0 : e.getBoundingClientRect().top) || 0;
							this.distanceToTop = s + this.getScrollTop()
						}
						const s = t.offsetTop + this.parentOffsetTop,
							r = t.getBoundingClientRect().height,
							n = new P({
								top: s,
								height: r,
								heightWithSuffix: `${r}px`
							});
						return e.rectangle = n, n
					}, this.handleResize = e => {
						this.fpsMeter && this.fpsMeter.eventHandler(e);
						for (const t in this.hiddenChildren) this.remeasureWhenShown[t] = !0;
						this.measurementsInvalid = !0, this.callOnScrollForItemsChanged()
					}, this.getTotalOffsetTop = () => this.containerRef ? Z(this.containerRef) : 0, this.handleContentContainerResize = n()(() => {
						this.pendingResizeHandlerRead || (this.pendingResizeHandlerRead = h.a.read(() => {
							const e = this.getTotalOffsetTop();
							e !== this.containerOffsetTop && (this.containerOffsetTop = e, this.handleResize()), this.pendingResizeHandlerRead = null
						}))
					}, p.L), this.handleScroll = () => {
						this.pendingScollHandlerRead || (this.pendingScollHandlerRead = h.a.read(() => {
							if (clearTimeout(this.resetCanFocusTimer), this.cancelPopulateRenderableChildrenWhenIdle(), Object(_.b)() || !this.scrollContainer) return void(this.pendingScollHandlerRead = null);
							this.updateScrollMetrics();
							const e = this.getAveragePixelsPerMilliSecond(),
								t = e < J,
								s = e < X,
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
							const n = new S.a("id");
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
								else if (u && this.loadItemIfPossible(d, u, t, s, r, a), this.elementIsVisible(l)) {
									n.push(d), !p && m && A.b.enqueue(new E.a({
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
									trackOnExitedViewport: s
								} = e;
								s && !n.has(t) && A.b.enqueue(new E.a({
									cb: s,
									args: [!1]
								}))
							}), this.itemsInViewport = n, this.canFocusItems = t, this.focusedChild = i, this.primaryChild = o, this.measurementsInvalid = !1, this.needsToPauseViewportItems = !1, t ? null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(u.requestIdleCallback)(this.unmountItemsWhileIdle)) : (this.resetCanFocusTimer = setTimeout(this.resetScrollFramerateAndFocus, z), null !== this.unmountItemsIdleId && (Object(u.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)), this.props.onScroll && this.props.onScroll({
								getVisibleItemsInViewport: () => this.getItemsInViewportWithFilter(this.visibleChildRefFilter),
								primaryChild: this.primaryChild ? this.childMap.get(this.primaryChild) : void 0
							}), this.timeoutForUpdateIdleCallback = 4 * ie, this.schedulePopulateRenderableChildrenWhenIdle(), this.pendingScollHandlerRead = null
						}))
					}, this.unmountItemsWhileIdle = e => {
						if (!this.scrollContainer) return;
						const t = [];
						if (this.state.renderableChildren.forEach(e => {
								const s = this.childMap.get(e.id);
								if (!s || !s.el || !s.itemRef) return;
								const r = this.getChildRectangle(s);
								r && this.elementIsUnmountable(r) && s.loaded && t.push(s)
							}), !t.length) return;
						const s = Math.min(Math.ceil(e.timeRemaining() / V), t.length),
							r = [];
						for (let n = 0; n < s; n++) {
							const e = t[n];
							r.push(e.itemRef.unmountContent), e.loaded = !1, e.focused = !1
						}
						Object(l.unstable_batchedUpdates)(() => {
							this.scrollContainer && r.forEach(e => e())
						}), s < t.length ? this.unmountItemsIdleId = Object(u.requestIdleCallback)(this.unmountItemsWhileIdle) : this.unmountItemsIdleId = null
					}, this.hideOrShowChildren = n()(() => {
						for (const e in this.childrenToHide) {
							const t = this.childrenToHide[e];
							void 0 !== t && (this.hideChild(e, t), this.childrenToHide[e] = void 0)
						}
						for (const e in this.childrenToShow) void 0 !== this.childrenToShow[e] && (this.showChild(e), this.childrenToShow[e] = void 0)
					}, p.L), this.hideChild = (e, t) => {
						const s = this.childMap.get(e);
						if (!s || !s.el) return;
						const r = s.el.firstChild;
						r && (t !== s.el.style.height && (s.el.style.height = t), r.classList.add(W.a.Hidden), this.hiddenChildren[e] = t, s.loaded && h.a.write(() => {
							s.itemRef && (s.loaded = !1, s.focused = !1, s.itemRef.unmountContent())
						}))
					}, this.showChild = e => {
						const t = this.childMap.get(e);
						if (!t || !t.el) return;
						const s = t.el.firstChild;
						s && (this.remeasureWhenShown[t.id] && (this.measurementsInvalid = !0, this.remeasureWhenShown[t.id] = void 0), t.el.style.height = "", s.classList.remove(W.a.Hidden), void 0 !== this.hiddenChildren[e] && (this.hiddenChildren[e] = void 0))
					}, this.getStylesForOuterWrapper = e => {
						if (void 0 !== this.hiddenChildren[e]) return {
							height: this.hiddenChildren[e]
						}
					}, this.remeasureChild = e => {
						this.measurementsInvalid = !0
					}, this.scrollToChild = (e, t) => {
						this.measurementsInvalid = !0, h.a.read(() => {
							const s = this.childMap.get(e);
							if (s && s.el && this.scrollContainer) {
								if (s.rectangle = void 0, t && this.isScrollChildTopVisible(e)) return;
								const r = this.getScrollTop() + s.el.getBoundingClientRect().top - (this.props.scrollToChildPadding || 0) - (this.props.viewportTopPadding || 0);
								setTimeout(() => {
									this.scrollContainer && (Object(_.c)(this.scrollContainer, r), this.callOnScrollForItemsChanged())
								}, p.L)
							}
						})
					}, this.isScrollChildTopVisible = e => {
						const t = this.childMap.get(e);
						if (t && t.el && this.scrollContainer) {
							const {
								scrollToChildPadding: e = 0,
								viewportTopPadding: s = 0
							} = this.props, r = window.innerHeight - s, {
								top: n
							} = t.el.getBoundingClientRect();
							return n >= s + e && n < r
						}
						return !1
					}, this.childMap = le(e), this.containerRef = null, this.itemsInViewport = new S.a("id"), this.loadMoreFired = !1, this.pixelsPerMSRing = new N(Y), this.wrapperRefFNs = {}, this.childRefFns = {}, this.childrenToHide = {}, this.childrenToShow = {}, this.canFocusItems = !0, this.focusedChild = void 0, this.hiddenChildren = {}, this.nextVisibleChildrenIndex = 0, this.lastVisibleEl = null, this.lastVisibleElId = null, this.remeasureWhenShown = {}, this.timeoutForUpdateIdleCallback = ie;
					const s = this.getVisibleChildren();
					s.length && (this.lastVisibleElId = s[s.length - 1].id), this.nextVisibleChildrenIndex = s.length, this.updateRenderableChildrenHandle = null, this.state = {
						renderableChildren: s
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
					}) : w(this.handleScroll), this.scrollContainer && this.scrollContainer.addEventListener("scroll", this.fpsMeter.eventHandler), window.addEventListener("resize", this.handleResize)
				}
				cleanupScrollHandler() {
					this.fpsMeter && ("function" == typeof this.fpsMeter.cleanup && this.fpsMeter.cleanup(), this.scrollContainer && this.scrollContainer.removeEventListener("scroll", this.fpsMeter.eventHandler), window.removeEventListener("resize", this.handleResize), this.pendingScollHandlerRead && (h.a.clear(this.pendingScollHandlerRead), this.pendingScollHandlerRead = null), this.pendingResizeHandlerRead && (h.a.clear(this.pendingResizeHandlerRead), this.pendingResizeHandlerRead = null))
				}
				componentDidMount() {
					this.props.getContainer ? this.scrollContainer = this.props.getContainer() || document : this.scrollContainer = document, this.props.onScroll && this.props.onScroll({
						getVisibleItemsInViewport: () => this.getItemsInViewportWithFilter(this.visibleChildRefFilter),
						primaryChild: void 0
					}), this.props.disableScrollCache && !this.props.preventScrollOnMount && Object(_.c)(this.scrollContainer, 0), this.setupScrollHandler(), h.a.write(() => {
						if (!this.props.disableScrollCache) {
							const e = this.getCacheKey(),
								t = G[e];
							o()(t) || (G[e] = void 0, this.scrollContainer && Object(_.c)(this.scrollContainer, t))
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
						s = e.children.length === this.props.children.length && e.children.some((e, t) => e.id !== this.props.children[t].id);
					this.populateRenderableChildrenFromProps(t || s, this.renderableChildrenIndexIncrement, e.children), this.schedulePopulateRenderableChildrenWhenIdle()
				}
				componentWillUnmount() {
					if (this.callExitedViewportForUnmount(), this.cleanupScrollHandler(), clearTimeout(this.updateRenderableChildrenHandle), this.cancelPopulateRenderableChildrenWhenIdle(), this.scrollContainer && !this.props.disableScrollCache) {
						const e = this.getCacheKey();
						G[e] = this.lastRenderPosition
					}
					this.childMap = new S.a("id"), this.itemsInViewport = new S.a("id"), this.wrapperRefFNs = {}, this.childRefFns = {}, this.containerRef = null, this.loadMoreEl = void 0, this.scrollContainer = void 0, this.unmountItemsIdleId && (Object(u.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)
				}
				didLayoutAloneChange(e, t) {
					return "string" == typeof e.layoutKey && "string" == typeof t.layoutKey && e.layoutKey !== t.layoutKey && "string" == typeof e.dataKey && "string" == typeof t.layoutKey && e.dataKey === t.dataKey
				}
				elementIsFocused(e) {
					if (!this.viewport) return !1;
					const t = this.distanceToTop ? this.distanceToTop : 0,
						s = this.parentOffsetTop ? this.parentOffsetTop : 0,
						r = e.bottom + t - s,
						n = e.top + t - s,
						i = Math.min(this.viewport.bottom, r) - Math.max(this.viewport.top, n),
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
					return this.scrollContainer ? Q(this.scrollContainer) ? Object(k.a)() : this.scrollContainer.scrollTop : 0
				}
				updateViewportInfo() {
					if (this.scrollContainer) {
						this.viewport = T({
							buffer: 0,
							container: this.scrollContainer
						});
						const {
							viewportTopPadding: e = 0
						} = this.props, t = window.innerHeight - e, s = 2 * t;
						this.mountableViewport = new P({
							top: this.viewport.top - s,
							height: this.viewport.height + 2 * s
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
						s = Math.abs(this.lastRenderPosition - t),
						r = e - this.lastScrollTime,
						n = this.lastScrollTime > -1;
					this.lastScrollTime = e, this.lastRenderPosition = t, n ? this.pixelsPerMSRing.push(s / r) : this.lastScrollTime = e
				}
				getAveragePixelsPerMilliSecond() {
					if (this.pixelsPerMSRing.size > 1) {
						let e = 0;
						return this.pixelsPerMSRing.forEach(t => e += t), e / this.pixelsPerMSRing.size
					}
					return 0
				}
				_wrapperRefFN(e, t) {
					const s = this.childMap.get(e);
					s && (s.el = t), this.lastVisibleElId === e && (this.lastVisibleEl = t)
				}
				getWrapperRefFN(e) {
					let t = this.wrapperRefFNs[e];
					return t || (t = t => {
						this._wrapperRefFN(e, t)
					}, this.wrapperRefFNs[e] = t), t
				}
				_childRefFn(e, t, s) {
					const r = this.childMap.get(e);
					r && (r.itemRef = t, r.loaded = !!t && (void 0 !== s ? s : r.loaded), this.callOnScrollForItemsChanged())
				}
				getChildRefFn(e) {
					let t = this.childRefFns[e];
					return t || (t = (t, s) => {
						this._childRefFn(e, t, s)
					}, this.childRefFns[e] = t), t
				}
				loadItemIfPossible(e, t, s, r, n, i) {
					if (t.contentIsHeavyToMount() ? r : n) {
						const r = !e.isFocusable || s;
						!e.loaded && r && (e.loaded = !0, i.push(t.loadContent))
					}
				}
				callExitedViewportForUnmount() {
					this.itemsInViewport.forEach(e => {
						let {
							id: t,
							trackOnExitedViewport: s
						} = e;
						s && A.b.enqueue(new E.a({
							cb: s,
							args: [!0]
						}))
					})
				}
				hasBeenScrolled() {
					if (!this.containerRef) return !1;
					const {
						viewportTopPadding: e = 0
					} = this.props, t = Z(this.containerRef);
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
						className: M.k,
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
			t.b = q(Object(L.b)(ce))
		},
		"./src/reddit/components/Scroller/getDocumentTop.ts": function(e, t, s) {
			"use strict";
			t.a = () => document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || 0
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/SidebarContainer/index.m.less"),
				i = s.n(n);
			t.a = r.a.div("container", i.a)
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/take.js"),
				i = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = s("./src/reddit/layout/row/Inline/index.tsx"),
				p = s("./src/reddit/layout/row/RightAlign/index.tsx");
			const h = e => {
				const {
					className: t,
					hasMoreItems: s,
					headerButton: n,
					items: d,
					minimizedLength: h,
					onLoadMore: b,
					pending: f,
					renderItem: v,
					title: x
				} = e, [g, y] = Object(o.useState)(!1), C = d.length > h || s, I = (!C || g ? d : i()(d, h)).map(e => v({
					item: e
				})), w = () => {
					g || y(!0), g && !s && y(!1), s && b && b()
				};
				return a.a.createElement(l.a, {
					className: t,
					headerButton: n,
					title: x
				}, I, a.a.createElement(m.a, null, a.a.createElement(p.a, null, C && (() => {
					const e = !g || s && b ? r.fbt._("View More", null, {
						hk: "1RK8uA"
					}) : r.fbt._("View Less", null, {
						hk: "1M72mK"
					});
					return a.a.createElement(c.r, {
						onClick: w
					}, f ? a.a.createElement(u.a, {
						sizePx: 10
					}) : e)
				})())))
			};
			h.defaultProps = {
				minimizedLength: d.Ub
			}, t.a = h
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = s("./src/reddit/constants/location.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/helpers/getReredditLinkWithYear/index.ts"),
				h = s("./src/reddit/helpers/trackers/navigation.ts"),
				b = s("./src/reddit/selectors/experiments/countrySites.ts"),
				f = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				v = s("./src/reddit/selectors/meta.ts"),
				x = s("./src/reddit/components/SidebarFooter/index.m.less"),
				g = s.n(x);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = d.a.a("Link", g.a), I = Object(o.c)({
				isCountrySitesEnabled: b.b,
				isNavbarLikeMwebEnabled: f.a,
				countryCode: v.b
			}), w = Object(i.b)(I), O = Object(m.u)({
				isFrontpage: m.A,
				isCountrySitePage: m.y
			});
			t.a = O(w(Object(l.c)(e => {
				const t = Object(i.f)().getState(),
					s = Object(b.a)(t, Object(a.c)());
				if (e.isNavbarLikeMwebEnabled) return e.isFrontpage ? n.a.createElement(c.a, {
					className: g.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, n.a.createElement("div", {
					className: g.a.LinkContainer
				}, n.a.createElement("div", {
					className: g.a.Column
				}, n.a.createElement(C, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, y._("User Agreement", null, {
					hk: "2RA6JL"
				})), n.a.createElement(C, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, y._("Privacy policy", null, {
					hk: "10K04G"
				}))), n.a.createElement("div", {
					className: g.a.Column
				}, n.a.createElement(C, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, y._("Content policy", null, {
					hk: "1DyxZS"
				})), n.a.createElement(C, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, y._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), n.a.createElement("div", {
					className: g.a.Copyright
				}, y._("© {year} Reddit, Inc. All rights reserved.", [y._param("year", (new Date).getFullYear().toString())], {
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
					return s.includes(t) || "en" === t ? n.a.createElement(C, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(h.a)(t))
					}, r[t]) : null
				};
				return n.a.createElement(c.a, {
					className: g.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, n.a.createElement("div", {
					className: g.a.LinkContainer
				}, n.a.createElement("div", {
					className: g.a.Column
				}, n.a.createElement(C, {
					href: "https://www.reddithelp.com"
				}, y._("help", null, {
					hk: "4lyYaD"
				})), n.a.createElement(C, {
					href: "https://www.reddit.com/coins"
				}, y._("Reddit coins", null, {
					hk: "32iMaN"
				})), n.a.createElement(C, {
					href: "https://www.reddit.com/premium"
				}, y._("Reddit premium", null, {
					hk: "RuO3A"
				})), e.isFrontpage && n.a.createElement(n.a.Fragment, null, n.a.createElement(C, {
					href: "https://www.reddit.com/subreddits/a-1/"
				}, y._("Communities", null, {
					hk: "3CJu37"
				})), n.a.createElement(C, {
					href: `https://www.reddit.com${Object(p.a)()}`
				}, y._("Rereddit", null, {
					hk: "1z3k7C"
				})), n.a.createElement(C, {
					href: "https://www.reddit.com/topics/a-1/"
				}, y._("Topics", null, {
					hk: "349RFt"
				}))), !!u.c[e.countryCode] && n.a.createElement(n.a.Fragment, null, n.a.createElement(C, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, y._("Impressum", null, {
					hk: "4cKXSI"
				})), n.a.createElement(C, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, y._("Transparency report", null, {
					hk: "3CgBdG"
				})), n.a.createElement(C, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: g.a.NoneCapitalizeLink
				}, y._("Report NetzDG Content", null, {
					hk: "1nszCF"
				})))), n.a.createElement("div", {
					className: g.a.Column
				}, n.a.createElement(C, {
					href: "https://www.redditinc.com/"
				}, y._("about", null, {
					hk: "1sqJKs"
				})), n.a.createElement(C, {
					href: "https://www.redditinc.com/careers"
				}, y._("careers", null, {
					hk: "26ABvc"
				})), n.a.createElement(C, {
					href: "https://www.redditinc.com/press"
				}, y._("press", null, {
					hk: "2Qmgdz"
				})), n.a.createElement(C, {
					href: "https://www.redditinc.com/advertising"
				}, y._("advertise", null, {
					hk: "Mt40U"
				})), n.a.createElement(C, {
					href: "http://www.redditblog.com/"
				}, y._("blog", null, {
					hk: "46IQJw"
				})), n.a.createElement(C, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, y._("Terms", null, {
					hk: "4qRzfE"
				})), n.a.createElement(C, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, y._("Content policy", null, {
					hk: "1DyxZS"
				})), n.a.createElement(C, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, y._("Privacy policy", null, {
					hk: "10K04G"
				})), n.a.createElement(C, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, y._("Mod policy", null, {
					hk: "2gYc2T"
				})))), (e.isCountrySitePage || e.isFrontpage && e.isCountrySitesEnabled) && n.a.createElement("div", {
					className: g.a.CountryLinkContainer
				}, n.a.createElement("div", {
					className: g.a.Column
				}, r("en"), r("fr"), r("it")), n.a.createElement("div", {
					className: g.a.Column
				}, r("de"), r("es"))), n.a.createElement("div", {
					className: g.a.Copyright
				}, y._("Reddit Inc © {year}. All rights reserved", [y._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3thndRe559UZy14xE1gZ_"
			}
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/profile/index.ts"),
				l = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				c = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				u = s("./src/reddit/models/User/index.ts"),
				m = s("./src/reddit/selectors/profile.ts"),
				p = s("./src/reddit/selectors/subscriptions.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				b = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				f = s.n(b);
			const v = Object(a.c)({
					currentUser: h.l,
					moderated: m.n,
					subscriptions: p.e,
					hasMoreModerated: m.d,
					loadMorePending: m.a
				}),
				x = Object(o.b)(v, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(d.c)(t.profileName))
				}), (e, t, s) => ({
					...s,
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
					moderated: s,
					profileName: n,
					subscriptions: o,
					hasMoreModerated: a,
					onLoadMore: d,
					loadMorePending: c
				} = e;
				if (0 === s.length) return null;
				const m = t && Object(u.e)(t).toLowerCase() === n.toLowerCase() ? r.fbt._("You're a moderator of these communities", null, {
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
					}(s, new Set(o));
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
		"./src/reddit/components/SidebarProfileMultireddits/index.m.less": function(e, t, s) {
			e.exports = {
				listItem: "_3lbnTBPV5H4wHdRz5ATVc9",
				icon: "Vm0_pCIi1Z6JWa0EVf6jK",
				description: "_2xcc4c-4TOL7KOsJidXtl",
				name: "_3nt8_GidTIn88UciXx27E7",
				meta: "_3iC0Hyv57ON8dAtU94HFE_"
			}
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				u = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				m = s("./src/reddit/selectors/profile.ts"),
				p = s("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				h = s.n(p);
			const b = Object(d.c)({
					hasMoreMultireddits: m.e,
					loadMorePending: m.b,
					multireddits: m.o
				}),
				f = Object(o.b)(b, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(l.g)(t.profileName, !0))
				}), (e, t, s) => ({
					...s,
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
					loadMorePending: s,
					multireddits: n,
					onLoadMore: o,
					profileName: a
				} = e;
				return n && n.length ? i.a.createElement(u.a, null, i.a.createElement(c.a, {
					hasMoreItems: t,
					items: n,
					onLoadMore: o,
					pending: s,
					renderItem: v,
					title: r.fbt._("Public custom feeds by u/{profileName}", [r.fbt._param("profileName", a)], {
						hk: "16Oicc"
					})
				})) : null
			})
		},
		"./src/reddit/components/SidebarProfilePowerupContributions/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				u = s("./src/reddit/selectors/gold/powerups/index.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				p = s("./node_modules/reselect/es/index.js"),
				h = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				b = s.n(h);
			const f = Object(p.c)({
				subreddits: function(e, t) {
					let {
						profileName: s
					} = t;
					const r = Object(m.Bb)(e, {
							userName: s
						}),
						n = Object(u.f)(e);
					return (r && n ? n[r.id] : null) || []
				}
			});

			function v(e) {
				let {
					item: t
				} = e;
				const s = t.subredditInfo,
					n = i.a.createElement(l.b, {
						iconUrl: s.styles.icon,
						className: b.a.subredditIcon
					});
				return i.a.createElement(c.a, {
					className: b.a.communityItemContainer,
					key: s.id
				}, i.a.createElement("div", {
					className: b.a.iconContainer
				}, i.a.createElement(a.a, {
					to: s.path
				}, n)), i.a.createElement("div", {
					className: b.a.communityDescription
				}, i.a.createElement("div", {
					className: b.a.communityName
				}, i.a.createElement(a.a, {
					to: s.path
				}, s.prefixedName)), i.a.createElement("div", {
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
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				n = s.n(r),
				i = s("./src/lib/lessComponent.tsx");
			t.a = i.a.div("Component", n.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/lodash/throttle.js"),
				i = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/constants/elementIds.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/components/BackToTop/index.m.less"),
				m = s.n(u);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = e => {
				if (e) {
					const e = document.getElementById(l.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var b = e => {
					let {
						className: t,
						isOverlay: s,
						style: n
					} = e;
					return a.a.createElement("div", {
						className: Object(r.a)(t, m.a.container),
						style: n
					}, a.a.createElement(c.l, {
						className: m.a.button,
						onClick: () => h(s)
					}, p._("Back to Top", null, {
						hk: "YjBtV"
					})))
				},
				f = s("./src/reddit/components/SidebarFooter/index.tsx"),
				v = s("./src/reddit/constants/componentSizes.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				y = s.n(g),
				C = s("./src/lib/lessComponent.tsx");

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const w = d.e[1] + 24,
				O = v.f + 8,
				E = O + 152 + 16,
				_ = E + w + 8,
				S = C.a.div("Container", y.a),
				j = C.a.wrapped(e => {
					let {
						className: t,
						isOverlay: s,
						...r
					} = e;
					return a.a.createElement(b, I({
						className: t,
						isOverlay: s,
						style: {
							top: `calc(100vh - ${s?O:8}px)`
						}
					}, r))
				}, "BackToTop", y.a),
				N = e => {
					let {
						children: t,
						className: s,
						isFakeOverlay: n,
						isSticky: i
					} = e;
					return a.a.createElement("div", {
						className: Object(r.a)(s, {
							[y.a.StickyStyles]: i && !n,
							[y.a.StickyStylesFakeOverlay]: !!n
						})
					}, t)
				};
			class k extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > _,
						shouldFooterSticky: this.windowHeight > E
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
					}, d.L), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
							adComponentOnFakeOverlay: s,
							children: r,
							className: n,
							hideFooter: i,
							pageLayer: o
						}
					} = this, d = this.state.isAdSticky && !(!t && !r);
					return a.a.createElement(S, {
						className: n,
						innerRef: this.setWrapperRef
					}, a.a.createElement(N, {
						isFakeOverlay: s,
						isSticky: d
					}, t, r, !i && a.a.createElement(f.a, null)), !this.props.hideBackToTop && a.a.createElement(j, {
						isOverlay: !!(null === (e = null == o ? void 0 : o.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const P = Object(x.u)();
			t.a = P(k)
		},
		"./src/reddit/components/SidebarTrophyCase/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarTrophyCase/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = s("./src/reddit/controls/Typography/index.tsx"),
				c = s("./src/reddit/selectors/telemetry.ts");
			var u = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				p = s("./node_modules/lodash/isEqual.js"),
				h = s.n(p);
			const b = Object(a.b)(a.d, h.a);
			var f = s("./src/reddit/selectors/profile.ts"),
				v = s("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				x = s.n(v),
				g = s("./src/lib/lessComponent.tsx"),
				y = s("./src/lib/opener/index.ts");
			const C = Object(a.c)({
				trophyCase: (e, t) => {
					let {
						profileName: s
					} = t;
					return Object(f.r)(e, Object(f.m)(e, s))
				}
			}, b);
			t.a = Object(o.b)(C)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : i.a.createElement(d.a, {
					title: r.fbt._("Trophy Case ({trophyCount})", [r.fbt._param("trophyCount", `${t.length}`)], {
						hk: "mzh3V"
					}),
					items: t,
					renderItem: S
				})
			});
			const I = g.a.wrapped(m.a, "TrophyItem", x.a),
				w = g.a.div("TrophyIcon", x.a),
				O = g.a.h5("TrophyName", x.a),
				E = g.a.div("TrophyContent", x.a),
				_ = g.a.wrapped(l.c, "Description", x.a),
				S = e => {
					let {
						item: t
					} = e;
					const s = Object(u.a)(),
						r = i.a.createElement("img", {
							src: t.icon,
							title: t.name
						});
					return i.a.createElement(I, {
						key: t.id
					}, i.a.createElement(w, null, t.url ? i.a.createElement("a", {
						target: y.d.BLANK,
						rel: y.c,
						href: t.url,
						onClick: () => s((e => t => ({
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
					}, r) : r), i.a.createElement(E, null, i.a.createElement(O, null, t.name), i.a.createElement(_, null, t.description)))
				}
		},
		"./src/reddit/components/SubredditModerationSearch/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SubredditModerationSearch/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/helpers/normalizeUsername/index.tsx"),
				c = s("./src/reddit/layout/row/Inline/index.tsx"),
				u = s("./src/reddit/layout/row/RightAlign/index.tsx"),
				m = s("./src/reddit/icons/svgs/Search/index.tsx"),
				p = s("./src/reddit/components/SubredditModerationSearch/index.m.less"),
				h = s.n(p);
			const b = o.a.wrapped(m.a, "SearchIcon", h.a),
				f = o.a.wrapped(a.a, "NoResultsContainer", h.a),
				v = o.a.div("Container", h.a),
				x = o.a.wrapped(c.a, "SearchStatusBar", h.a),
				g = o.a.div("SearchStatus", h.a),
				y = o.a.span("Bold", h.a);

			function C(e) {
				if (e.searchPending) return null;
				const t = Object(l.a)(e.searchTerm);
				return e.noResultsFound ? i.a.createElement(f, null, i.a.createElement(b, null), i.a.createElement(a.b, null, r.fbt._("No results for {searchTerm}", [r.fbt._param("searchTerm", `u/${t}`)], {
					hk: "1nDAlG"
				})), i.a.createElement(d.r, {
					onClick: e.cancelSearch
				}, r.fbt._("See all", null, {
					hk: "3aLS8s"
				}))) : i.a.createElement(v, null, i.a.createElement(x, null, i.a.createElement(g, null, r.fbt._("1 search result for {=[searchTerm]}", [r.fbt._param("=[searchTerm]", i.a.createElement(y, {
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
		"./src/reddit/components/SubredditModerationTopBar/index.m.less": function(e, t, s) {
			e.exports = {
				topBarRow: "_3H6HwkSZ2zUC1pwaIMv-EY",
				searchBar: "_2LvB93iPopVPdhNBxBnfAH",
				searchIcon: "_1lo1uHsqx3-EkgYDL4xKEB",
				searchInput: "_1ox94KT4YX0mmZgLO51PG_",
				searchButton: "_3-3xbjG4pcuzlB7SzgBvzg"
			}
		},
		"./src/reddit/components/SubredditModerationTopBar/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/helpers/normalizeUsername/index.tsx"),
				d = s("./src/reddit/icons/svgs/Search/index.tsx"),
				l = s("./src/reddit/components/SubredditModerationTopBar/index.m.less"),
				c = s.n(l);
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
		"./src/reddit/components/UserNameAndIcon/index.m.less": function(e, t, s) {
			e.exports = {
				UserIconContainer: "_3gyThPd4NTS21qtNdizCxE",
				userIconContainer: "_3gyThPd4NTS21qtNdizCxE",
				UserIcon: "_1utZNH6IItbNzgdnUBW-Bp",
				userIcon: "_1utZNH6IItbNzgdnUBW-Bp",
				UserLink: "_2Q3rLIRb_ij54AEsabVm9L",
				userLink: "_2Q3rLIRb_ij54AEsabVm9L"
			}
		},
		"./src/reddit/components/UserNameAndIcon/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				d = s("./src/reddit/components/UserIcon/index.tsx"),
				l = s("./src/reddit/controls/InternalLink/index.tsx"),
				c = s("./src/reddit/components/UserNameAndIcon/index.m.less"),
				u = s.n(c);
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
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/SEOTitle/index.tsx"),
				a = s("./src/reddit/components/Widgets/Base/index.m.less"),
				d = s.n(a);
			const l = i.a.div("WidgetBackground", d.a),
				c = i.a.wrapped(e => {
					let {
						children: t,
						...s
					} = e;
					return n.a.createElement("div", s, n.a.createElement(o.b, {
						type: o.a.Widget
					}, t))
				}, "WidgetHeader", d.a);
			t.b = e => n.a.createElement("div", {
				className: e.className
			}, n.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return _
			})), s.d(t, "a", (function() {
				return j
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/Flair/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/index.tsx"),
				m = s("./src/reddit/actions/subscription/index.ts");
			var p = Object(o.b)(null, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(m.f()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				h = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = s("./src/reddit/icons/fonts/index.tsx"),
				g = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				y = s("./src/reddit/models/Flair/index.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				I = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				w = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				O = s.n(w);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = e => i.a.createElement(h.a, {
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
				}, e.errorMsg || r.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : i.a.createElement(i.a.Fragment, null, e.communities.map(t => i.a.createElement(j, E({
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
				S = Object(d.c)({
					hideNSFWPref: C.G,
					nightmode: C.eb
				}),
				j = Object(o.b)(S)(e => i.a.createElement("div", {
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
					title: Object(I.b)(e.name, e.type),
					to: Object(I.a)(e.name, e.type)
				}, Object(I.b)(e.name, e.type)), i.a.createElement("div", {
					className: O.a.communityInfoContainer
				}, !!e.subscribers && i.a.createElement("p", {
					className: O.a.subscriberCount
				}, r.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [r.fbt._plural(e.subscribers, "number")], {
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
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return o
			}));
			var r = s("./src/reddit/constants/posts.ts"),
				n = s("./src/reddit/helpers/name/index.ts");

			function i(e, t) {
				return (t === r.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function o(e, t) {
				return t === r.a.PROFILE ? Object(n.d)(e) : Object(n.c)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Widgets/ConnectedAccounts/index.m.less": function(e, t, s) {
			e.exports = {
				account: "_25M-5tlJjQOChCI8sg84QU"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Widgets/Base/index.tsx"),
				c = s("./src/reddit/constants/posts.ts"),
				u = s("./src/reddit/helpers/trackers/profileSettings.ts"),
				m = s("./src/reddit/models/ExternalAccount/index.ts"),
				p = s("./src/reddit/selectors/externalAccount.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				b = s("./node_modules/fbt/lib/FbtPublic.js"),
				f = s("./src/reddit/controls/OutboundLink/index.tsx"),
				v = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				x = s("./src/reddit/icons/svgs/Twitter/index.tsx"),
				g = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				y = s("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				C = s.n(y);
			var I = e => {
					const {
						account: t,
						clickEvent: s,
						provider: r
					} = e;
					let i, o = t.username,
						a = "";
					return r !== m.a.Twitter ? null : (i = n.a.createElement(x.a, {
						className: C.a.twitterLogo
					}), a = b.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), o = `@${t.username}`, n.a.createElement(g.a, null, n.a.createElement("span", {
						className: C.a.icon
					}, i), n.a.createElement(f.b, {
						className: C.a.link,
						href: t.link,
						onClick: s
					}, n.a.createElement("div", {
						className: C.a.linkTitle
					}, n.a.createElement("span", {
						className: C.a.name
					}, o), n.a.createElement(v.a, {
						className: C.a.linkIcon
					})), n.a.createElement("div", {
						className: C.a.linkDescription
					}, a))))
				},
				w = s("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				O = s.n(w);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _ = Object(o.c)({
				twitterAccount: (e, t) => {
					let {
						subredditOrProfile: s
					} = t;
					return s.type === c.a.PROFILE ? Object(p.c)(e, {
						profileName: s.name
					}) : null
				},
				user: (e, t) => {
					let {
						subredditOrProfile: s
					} = t;
					return s.type === c.a.PROFILE ? Object(h.Bb)(e, {
						userName: s.name
					}) : null
				}
			}), S = Object(i.b)(_, e => ({
				trackTwitterAccountClicked: t => e((e, s) => u.m(s(), t))
			}), (e, t, s) => ({
				...s,
				...e,
				...t,
				onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
			}));
			t.a = Object(d.c)(S(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: s
				} = e;
				return s ? n.a.createElement(a.a, null, n.a.createElement(l.b, null, n.a.createElement(l.a, null, E._("Connected accounts", null, {
					hk: "1ce9Jz"
				})), s && n.a.createElement("div", {
					className: O.a.account
				}, n.a.createElement(I, {
					provider: m.a.Twitter,
					account: s,
					clickEvent: t
				})))) : null
			}))
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/components/SEOTitle/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/trackers/widgets.ts"),
				h = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				b = s("./src/reddit/selectors/experiments/topPosts.ts"),
				f = s("./src/reddit/selectors/structuredStyles.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/models/Theme/index.ts"),
				g = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const y = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(g.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				C = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(g.a)(e).widgetColors.sidebarWidgetHeaderColor,
				I = e => {
					const t = y(e);
					return Object(x.f)(t)
				},
				w = e => {
					const t = C(e);
					return Object(x.f)(t)
				};
			var O = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				E = s.n(O);
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = Object(u.u)(), j = Object(i.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(u.n)(e, t) || void 0,
						r = t.redditStyle || Object(f.l)(e, {
							subredditId: s
						}),
						n = Object(v.eb)(e);
					return r || n
				},
				nigtmode: v.eb,
				subredditId: u.n,
				topPostVariant: b.d
			}));
			class N extends n.a.Component {
				constructor() {
					super(...arguments), this.contentRef = n.a.createRef(), this.state = {
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
					return e.backgroundColor = y(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = I(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = C(this.props), e.color = e.fill = w(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: r,
						headerButton: i,
						id: o,
						onClick: d,
						onHeaderClick: c,
						title: u,
						titleClassName: p,
						truncateThreshold: h
					} = this.props, b = s ? E.a.widgetContentOnly : E.a.widgetContent, f = !r && this.props.styles, v = f ? this.getWidgetBackgroundStyles() : {}, x = f ? this.getWidgetHeaderStyles() : {};
					return n.a.createElement("div", {
						className: Object(a.a)(t, E.a.widgetBackground, {
							[E.a.redditStyle]: r,
							[E.a.clickable]: !!d,
							[E.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": r,
						onClick: d,
						style: v
					}, u && n.a.createElement("div", {
						className: Object(a.a)(E.a.widgetHeader, {
							[E.a.clickable]: !!c
						}),
						id: o,
						style: x,
						onClick: c
					}, n.a.createElement("div", {
						className: Object(a.a)(E.a.widgetTitle, p)
					}, n.a.createElement(l.b, {
						type: l.a.Widget
					}, u)), i), n.a.createElement("div", {
						className: Object(a.a)(b, {
							[E.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? h : "none"
						}
					}, e), this.state.isTruncated && n.a.createElement(m.r, {
						className: E.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, _._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = S(j(Object(d.a)(Object(c.c)(N))))
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			class i extends n.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							s = this.props.multiple ? [...t] : t[0];
						this.props.onChange(s), this.setState(() => ({
							value: s
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
					} = this, s = "string" == typeof t.value ? t.value : "", r = "object" == typeof t.value ? t.value : null, i = s || r;
					return n.a.createElement("div", {
						className: e.className
					}, s && n.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: s,
						tabIndex: e.tabIndex
					}), (!i || e.multiple || void 0 !== e.isPending && !e.isPending) && n.a.createElement("input", {
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
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, s) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = s.n(o);
			t.a = e => {
				let {
					center: t,
					className: s,
					sizePx: r = 10
				} = e;
				return n.a.createElement("div", {
					className: Object(i.a)(a.a.loadingIcon, s, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${r}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/helpers/trackers/followers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return o
			}));
			var r = s("./src/reddit/constants/tracking.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const i = e => t => ({
					...Object(n.n)(t),
					action: r.c.CLICK,
					noun: `follower_list_page_${e?"follow":"unfollow"}`,
					source: "profile"
				}),
				o = () => e => ({
					...Object(n.n)(e),
					action: r.c.CLICK,
					noun: "follower_list_cta",
					source: "profile"
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "c", (function() {
				return c
			}));
			var r, n, i = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {}));
			const a = (e, t) => s => ({
					source: n.COMMUNITY_WIDGETS,
					action: i.c.CLICK,
					noun: r.SEE_MORE,
					widget: Object(o.ub)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...o.n
				}),
				d = (e, t) => s => ({
					source: n.POST,
					action: i.c.CLICK,
					noun: r.REREDDIT_PROMO,
					post: o.H(s, e),
					subreddit: o.gb(s),
					...t && {
						banner: {
							buttonText: t,
							id: r.REREDDIT_PROMO
						}
					},
					...o.n(s)
				}),
				l = () => e => ({
					source: n.SIDEBAR,
					action: i.c.VIEW,
					noun: r.TOPICS_WIDGET,
					...o.n(e)
				}),
				c = e => t => ({
					source: n.TOPICS_WIDGET,
					action: i.c.CLICK,
					noun: r.TOPIC,
					...o.n(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(i.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, s) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Admin/index.m.less"),
				a = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(i.a)(e.className, a.a.admin, {
					[a.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && n.a.createElement("title", null, e.title), e.desc && n.a.createElement("desc", null, e.desc), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), n.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, n.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), n.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
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
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
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
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
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
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
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
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function i(e) {
				return n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					fill: "inherit",
					d: "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
				}))
			}
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, s) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/layout/row/RightAlign/index.m.less"),
				i = s.n(n);
			t.a = r.a.div("rightAligned", i.a)
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, s) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = s.n(a);
			t.a = Object(i.a)(e => n.a.createElement("div", {
				className: Object(o.a)(d.a.expandedCenterContainer, e.className)
			}, n.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), n.a.createElement("div", {
				className: d.a.center
			}, Array.isArray(e.children) && e.children[1]), n.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, s) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				d = s.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(i.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: r,
					widthLeft: i,
					gutter: a,
					...c
				} = e;
				return n.a.createElement("div", l({
					className: Object(o.a)(d.a.expandRightContainer, t)
				}, c), n.a.createElement("div", {
					className: d.a.left,
					style: {
						flexBasis: i,
						height: r,
						marginRight: a
					}
				}, Array.isArray(s) && s[0]), n.a.createElement("div", {
					className: d.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, s) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return c
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/pages/ErrorPages/index.m.less"),
				d = s.n(a);
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
		"./src/reddit/pages/Followers/index.m.less": function(e, t, s) {
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
		"./src/reddit/pages/Followers/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/config.ts"),
				d = s("./src/reddit/actions/pages/followers/index.ts"),
				l = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				c = s("./src/reddit/components/Scroller/Simple.tsx"),
				u = s("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				m = s("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/layout/page/Listing/index.tsx"),
				b = s("./src/reddit/pages/ErrorPages/index.tsx"),
				f = s("./src/reddit/pages/ModHub/Header.tsx"),
				v = s("./src/reddit/selectors/followers.ts"),
				x = s("./src/reddit/selectors/profile.ts"),
				g = s("./src/lib/classNames/index.ts"),
				y = s("./src/reddit/components/TrackingHelper/index.tsx"),
				C = s("./src/reddit/components/UserNameAndIcon/index.tsx"),
				I = s("./src/reddit/controls/Button/index.tsx"),
				w = s("./src/reddit/helpers/trackers/followers.ts"),
				O = s("./src/reddit/pages/Followers/index.m.less"),
				E = s.n(O);
			var _ = e => {
				var t, s, a, l;
				const c = Object(o.d)(),
					u = Object(o.e)(t => Object(v.b)(t, e.userId)),
					m = Object(y.b)(),
					p = Object(n.useCallback)(() => {
						u && (c(Object(d.toggleFollowUser)(e.userId, !u.isFollowed)), m(Object(w.a)(!u.isFollowed)))
					}, [e.userId, c, m, u]);
				return u ? i.a.createElement("div", {
					className: E.a.userRow,
					key: u.id
				}, i.a.createElement(C.a, {
					username: u.name,
					tooltipId: `${u.id}-user-tooltip`,
					sendHoverCardEvent: () => {},
					userIcon: (null === (a = null === (s = null === (t = u.profile) || void 0 === t ? void 0 : t.styles) || void 0 === s ? void 0 : s.legacyIcon) || void 0 === a ? void 0 : a.url) || (null === (l = u.snoovatarIcon) || void 0 === l ? void 0 : l.url)
				}), u.isAcceptingFollowers && i.a.createElement(I.t, {
					className: Object(g.a)(E.a.followButton, {
						[E.a.followingButton]: u.isFollowed
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
					s = Object(o.e)(v.a),
					g = Object(o.e)(v.e),
					y = Object(o.e)(v.c),
					C = Object(o.e)(v.d),
					I = Object(p.eb)(),
					w = Object(o.e)(e => Object(p.E)(e, {
						pageLayer: I
					})),
					O = Object(o.e)(t => Object(x.j)(t, {
						profileName: e.match.params.profileName
					})),
					[S, j] = Object(n.useState)("");
				Object(n.useEffect)(() => {
					S && t(Object(d.followersRequested)({
						...d.DEFAULT_VARIABLES,
						searchQuery: S
					}))
				}, [S, t]);
				const N = Object(n.useCallback)(() => {
					(null == C ? void 0 : C.hasNextPage) && (null == C ? void 0 : C.endCursor) && t(Object(d.followersRequested)({
						...d.DEFAULT_VARIABLES,
						after: C.endCursor
					}))
				}, [C, t]);
				if (!w) return i.a.createElement(b.a, null);
				const k = null == O ? void 0 : O.name;
				if (!k) return i.a.createElement(b.b, null);
				let P;
				if (0 === (null == s ? void 0 : s.length)) P = i.a.createElement("div", {
					className: E.a.emptyState
				}, i.a.createElement("img", {
					className: E.a.snooSmile,
					src: `${a.a.assetPath}/img/snoomoji/snoo.png`
				}), i.a.createElement("div", {
					className: E.a.emptyStateTitle
				}, r.fbt._("Followers", null, {
					hk: "4scwa7"
				})), i.a.createElement("div", {
					className: E.a.emptyStateDescription
				}, r.fbt._("You don't have any followers yet, but when someone follows you, you'll see them here.", null, {
					hk: "1WWMuR"
				})));
				else {
					let e;
					if (S) {
						const t = g ? Object.values(g)[0] : void 0;
						e = i.a.createElement(u.a, {
							noResultsFound: !t,
							searchTerm: S,
							cancelSearch: () => j(""),
							searchPending: !!y
						}, t && i.a.createElement(_, {
							userId: t.id
						}))
					} else s && (e = i.a.createElement(c.b, {
						loadMoreToken: (null == C ? void 0 : C.endCursor) || void 0,
						onLoadMore: N
					}, s.map(e => ({
						estHeight: 56,
						id: e,
						render: function() {
							return i.a.createElement(_, {
								userId: e
							})
						}
					}))));
					P = i.a.createElement(i.a.Fragment, null, i.a.createElement(m.b, {
						activeSearchQuery: S,
						onSearch: e => (e => {
							j(e)
						})(e),
						positionSearchRight: !0
					}, i.a.createElement("div", {
						className: E.a.topBar
					}, i.a.createElement("div", {
						className: E.a.topBarTitleText
					}, r.fbt._("Followers", null, {
						hk: "4ah1S2"
					})), i.a.createElement("div", {
						className: E.a.topBarDescriptionText
					}, r.fbt._("This list is only visible to you. The most recent follows are shown first.", null, {
						hk: "BYist"
					})))), e)
				}
				return i.a.createElement(h.a, {
					contentClassName: E.a.followersListing,
					disableFullscreen: !0,
					fitPageToContent: !0,
					contentNavBar: i.a.createElement(f.a, {
						subredditOrProfile: O || void 0,
						pageName: r.fbt._("Followers", null, {
							hk: "3DwX8d"
						})
					}),
					content: P,
					sidebar: i.a.createElement(l.a, {
						className: E.a.followersListing,
						profileName: k
					})
				})
			}
		},
		"./src/reddit/pages/ModHub/Header.m.less": function(e, t, s) {
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
		"./src/reddit/pages/ModHub/Header.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/reddit/pages/ModHub/Header.m.less"),
				o = s.n(i),
				a = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/controls/InternalLink/index.tsx");
			t.a = e => {
				var t, s;
				return n.a.createElement("div", {
					className: o.a.header
				}, n.a.createElement(a.b, {
					className: o.a.subredditIcon,
					subredditOrProfile: e.subredditOrProfile
				}), n.a.createElement(d.a, {
					className: o.a.subredditLink,
					to: (null === (t = e.subredditOrProfile) || void 0 === t ? void 0 : t.url) || "",
					onClick: e.onClick
				}, null === (s = e.subredditOrProfile) || void 0 === s ? void 0 : s.displayText), e.pageName && `/ ${e.pageName}`)
			}
		},
		"./src/reddit/reducers/pages/followers/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/redux/es/redux.js"),
				n = s("./src/reddit/actions/pages/followers/constants.ts");
			var i = function() {
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
				o = Object(r.c)({
					pending: i
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
							followers: s
						} = t.payload;
						return {
							...e,
							...s
						}
					}
					case n.f: {
						const {
							userId: s,
							isFollowed: r
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
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
					case n.a:
					case n.b: {
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
			var u = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case n.e: {
						const {
							followers: s
						} = t.payload;
						return s || e
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
					case n.b: {
						const {
							followerUserIds: s
						} = t.payload;
						return s || e
					}
					case n.a: {
						const {
							followerUserIds: s
						} = t.payload;
						return s ? [...e, ...s] : e
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
		"./src/reddit/selectors/experiments/econ/avatarNfts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return o
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: r.v
				}) === r.y.Enabled,
				o = e => Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: r.Sc
				}) === r.td
		},
		"./src/reddit/selectors/followers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			}));
			var r = s("./src/lib/initializeClient/installReducer.ts"),
				n = s("./src/reddit/reducers/pages/followers/index.ts");
			Object(r.a)({
				pages: {
					followers: n.a
				}
			});
			const i = e => {
					var t, s;
					return null === (s = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === s ? void 0 : s.userIds
				},
				o = (e, t) => {
					var s;
					return null === (s = (e => {
						var t, s;
						return null === (s = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === s ? void 0 : s.models
					})(e)) || void 0 === s ? void 0 : s[t]
				},
				a = e => {
					var t, s;
					return null === (s = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === s ? void 0 : s.search
				},
				d = e => {
					var t, s;
					return null === (s = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === s ? void 0 : s.api.pending
				},
				l = e => {
					var t, s;
					return null === (s = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === s ? void 0 : s.pageInfo
				}
		},
		"./src/redditGQL/operations/ProfileFollowers.json": function(e) {
			e.exports = JSON.parse('{"id":"a7a31038ca56"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileFollowersPage.b93bd0d527dbda1cf043.js.map