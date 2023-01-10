// https://www.redditstatic.com/desktop2x/ProfileFollowersAction.29f7fafb6591020bb538.js
// Retrieved at 1/10/2023, 3:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileFollowersAction"], {
		"./src/lib/makeOverviewConversationsItemKey/index.ts": function(e, t, o) {
			"use strict";
			t.a = (e, t) => {
				return `overviewConversations--[profile:'${t}']--[post:'${e}']`
			}
		},
		"./src/reddit/actions/pages/followers/constants.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return r
			})), o.d(t, "a", (function() {
				return s
			})), o.d(t, "e", (function() {
				return n
			})), o.d(t, "d", (function() {
				return i
			})), o.d(t, "c", (function() {
				return d
			})), o.d(t, "f", (function() {
				return a
			}));
			const r = "PROFILE_FOLLOWERS_PAGE_LOADED",
				s = "MORE_PROFILE_FOLLOWERS_LOADED",
				n = "PROFILE_FOLLOWERS_SEARCH_LOADED",
				i = "PROFILE_FOLLOWERS_REQUEST_PENDING",
				d = "PROFILE_FOLLOWERS_REQUEST_FAILED",
				a = "FOLLOW_USER_SUCCESS"
		},
		"./src/reddit/actions/pages/followers/index.ts": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "profileFollowersPageLoaded", (function() {
				return y
			})), o.d(t, "moreProfileFollowersLoaded", (function() {
				return m
			})), o.d(t, "profileFollowersSearchLoaded", (function() {
				return O
			})), o.d(t, "profileFollowersRequestPending", (function() {
				return w
			})), o.d(t, "profileFollowersPageFailed", (function() {
				return g
			})), o.d(t, "DEFAULT_VARIABLES", (function() {
				return h
			})), o.d(t, "followersPageRequested", (function() {
				return j
			})), o.d(t, "followersRequested", (function() {
				return x
			})), o.d(t, "followUserToggled", (function() {
				return I
			})), o.d(t, "toggleFollowUser", (function() {
				return _
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/constants/index.ts"),
				n = o("./src/lib/makeActionCreator/index.ts"),
				i = (o("./src/reddit/actions/pages/profileOverview/index.ts"), o("./src/reddit/actions/toaster.ts")),
				d = o("./src/lib/makeGqlRequest/index.ts"),
				a = o("./src/redditGQL/operations/ProfileFollowers.json");
			var c = o("./src/reddit/endpoints/subreddit/subscriptions.ts");
			var l = e => {
					var t, o;
					if (!e.identity || !e.identity.followedByRedditorsInfo) return;
					const r = {},
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
					r.pageInfo = {
						...a,
						endCursor: null !== (t = a.endCursor) && void 0 !== t ? t : null
					};
					const c = [],
						l = {};
					for (const u of d)
						if ("Redditor" === (null === (o = null == u ? void 0 : u.node) || void 0 === o ? void 0 : o.__typename)) {
							const {
								id: e
							} = u.node;
							c.push(e), l[e] = u.node
						} return r.followerUserIds = c, r.followers = l, r
				},
				u = o("./src/reddit/models/Toast/index.ts"),
				f = o("./src/reddit/actions/pages/followers/constants.ts"),
				p = o("./src/lib/initializeClient/installReducer.ts"),
				v = o("./src/reddit/reducers/pages/followers/index.ts"),
				b = o("./src/reddit/selectors/followers.ts");
			Object(p.a)({
				pages: {
					followers: v.a
				}
			});
			const y = Object(n.a)(f.b),
				m = Object(n.a)(f.a),
				O = Object(n.a)(f.e),
				w = Object(n.a)(f.d),
				g = Object(n.a)(f.c),
				h = {
					includeIdentity: !1,
					first: null,
					after: null,
					searchQuery: null
				},
				j = e => async (e, t, o) => {
					let {
						gqlContext: r
					} = o;
					var s;
					const n = [];
					(null === (s = Object(b.a)(t())) || void 0 === s ? void 0 : s.length) || n.push(e(x(h))), await Promise.all(n)
				}, x = e => async (t, o, r) => {
					let {
						gqlContext: s
					} = r;
					const n = !o().user.account,
						c = {
							...h,
							...e,
							includeIdentity: n
						};
					t(w());
					const u = await (async (e, t) => {
						return await Object(d.a)(e, {
							...a,
							variables: t
						})
					})(s(), c);
					if (u.ok && u.body) {
						const {
							data: o
						} = u.body, r = l(o);
						if (!r) return t(Object(i.d)()), void t(g());
						(null == e ? void 0 : e.searchQuery) ? t(O(r)): (null == e ? void 0 : e.after) ? t(m(r)) : (null == e ? void 0 : e.after) || (null == e ? void 0 : e.searchQuery) || t(y(r))
					}
					u.ok || (t(Object(i.d)()), t(g()))
				}, I = Object(n.a)(f.f), _ = (e, t) => async (o, n, d) => {
					let {
						apiContext: a
					} = d;
					var l, f;
					const p = null === (f = null === (l = n().pages) || void 0 === l ? void 0 : l.followers) || void 0 === f ? void 0 : f.models[e];
					if (!p) return;
					o(I({
						userId: e,
						isFollowed: t
					}));
					const v = p.name;
					if ((await Object(c.c)(a(), {
							subredditNames: [`${s.qc}${p.name}`],
							subscribe: t
						})).ok) {
						o(I({
							userId: e,
							isFollowed: t
						}));
						const s = r.fbt._("Successfully followed {userName}", [r.fbt._param("userName", v)], {
								hk: "nYw1y"
							}),
							n = r.fbt._("Successfully unfollowed {userName}", [r.fbt._param("userName", v)], {
								hk: "1ki3kp"
							});
						o(Object(i.f)({
							text: t ? s : n
						}))
					} else {
						const s = r.fbt._("Something went wrong", null, {
							hk: "3i6szH"
						});
						o(I({
							userId: e,
							isFollowed: !t
						})), o(Object(i.f)(Object(i.e)(s, u.b.Error)))
					}
				}
		},
		"./src/reddit/actions/pages/profileOverview/index.ts": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "profileOverviewConversationsPending", (function() {
				return _e
			})), o.d(t, "profileOverviewConversationsLoaded", (function() {
				return Ce
			})), o.d(t, "profileOverviewConversationsFailed", (function() {
				return Le
			})), o.d(t, "profileOverviewChronoPending", (function() {
				return ke
			})), o.d(t, "profileOverviewChronoLoaded", (function() {
				return Pe
			})), o.d(t, "profileOverviewChronoFailed", (function() {
				return Re
			})), o.d(t, "profileOverviewConversationsRequested", (function() {
				return Ee
			})), o.d(t, "profileOverviewRequested", (function() {
				return Fe
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = o("./node_modules/lodash/pick.js"),
				s = o.n(r),
				n = o("./src/lib/constants/index.ts"),
				i = o("./src/reddit/actions/moderatingSubreddits.ts"),
				d = o("./src/reddit/actions/pages/profileShared.ts"),
				a = o("./src/reddit/actions/subreddit.ts"),
				c = o("./src/config.ts"),
				l = o("./src/lib/addAllowQuarantinedParam/index.ts"),
				u = o("./src/lib/makeApiRequest/index.ts"),
				f = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = o("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				v = o("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var b = o("./src/reddit/helpers/post/index.ts"),
				y = o("./src/reddit/constants/postLayout.ts"),
				m = o("./src/reddit/constants/parameters.ts"),
				O = o("./src/reddit/contexts/PageLayer/index.tsx"),
				w = o("./src/reddit/selectors/listings.ts"),
				g = o("./src/reddit/selectors/profile.ts"),
				h = o("./src/reddit/selectors/user.ts"),
				j = o("./src/lib/makeActionCreator/index.ts"),
				x = o("./src/reddit/actions/changeUsername.ts"),
				I = o("./src/reddit/actions/contentGate.ts"),
				_ = o("./src/reddit/actions/externalAccount.ts"),
				C = o("./src/reddit/actions/gold/powerups.ts"),
				L = o("./src/reddit/actions/pinnedPost.ts"),
				k = o("./src/reddit/actions/platform.ts"),
				P = o("./src/reddit/actions/profile/index.ts"),
				R = o("./src/reddit/actions/trophyCase.ts"),
				E = o("./src/reddit/constants/errors.ts"),
				F = o("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				S = o("./src/reddit/helpers/timeApiRoute/index.ts"),
				A = o("./src/reddit/actions/pages/profileOverview/constants.ts"),
				N = o("./src/lib/initializeClient/installReducer.ts"),
				q = o("./node_modules/redux/es/redux.js"),
				U = o("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const D = {};
			var T = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case A.c:
					case A.b:
					case U.c:
					case U.b: {
						const {
							key: o
						} = t.payload;
						return {
							...e,
							[o]: null
						}
					}
					case A.a:
					case U.a: {
						const {
							key: o,
							error: r
						} = t.payload;
						return {
							...e,
							[o]: r
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
						case U.c: {
							const {
								key: o
							} = t.payload;
							return {
								...e,
								[o]: !0
							}
						}
						case A.b:
						case A.a:
						case U.b:
						case U.a: {
							const {
								key: o
							} = t.payload;
							return {
								...e,
								[o]: !1
							}
						}
						default:
							return e
					}
				},
				G = Object(q.c)({
					error: T,
					pending: Q
				});
			const W = {};
			var $ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case A.b: {
						const {
							key: o
						} = t.payload;
						return {
							...e,
							[o]: {}
						}
					}
					case U.b: {
						const {
							key: o,
							fetchedToken: r
						} = t.payload, s = e[o];
						return {
							...e,
							[o]: {
								...s,
								[r]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const z = {};
			var B = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A.b:
						case U.b: {
							const {
								key: o,
								overviewIds: r
							} = t.payload, s = e[o] || [];
							return {
								...e,
								[o]: [...s, ...r]
							}
						}
						default:
							return e
					}
				},
				H = o("./src/lib/omitKey/index.ts");
			const J = {};
			var M = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A.b:
						case U.b: {
							const {
								key: o,
								dist: r,
								token: s
							} = t.payload;
							return s ? {
								...e,
								[o]: {
									dist: r,
									token: s
								}
							} : Object(H.a)(e, o)
						}
						default:
							return e
					}
				},
				V = Object(q.c)({
					api: G,
					fetchedTokens: $,
					ids: B,
					loadMore: M
				});
			const Y = {};
			var X = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Y,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case A.f:
					case A.e: {
						const {
							key: o
						} = t.payload;
						return {
							...e,
							[o]: null
						}
					}
					case A.d: {
						const {
							key: o,
							error: r
						} = t.payload;
						return {
							...e,
							[o]: r || {}
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
								key: o
							} = t.payload;
							return {
								...e,
								[o]: !0
							}
						}
						case A.e:
						case A.d: {
							const {
								key: o
							} = t.payload;
							return {
								...e,
								[o]: !1
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
				oe = o("./src/reddit/actions/profileConversations.ts");
			const re = {};
			var se = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : re,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case oe.c:
					case oe.b: {
						const {
							extraCommentsId: o
						} = t.payload;
						return {
							...e,
							[o]: null
						}
					}
					case oe.a: {
						const {
							extraCommentsId: o,
							error: r
						} = t.payload;
						return {
							...e,
							[o]: r || {}
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
						case oe.c: {
							const {
								extraCommentsId: o
							} = t.payload;
							return {
								...e,
								[o]: !0
							}
						}
						case oe.b:
						case oe.a: {
							const {
								extraCommentsId: o
							} = t.payload;
							return {
								...e,
								[o]: !1
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
						case oe.b:
						case oe.e:
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
				ue = o("./node_modules/lodash/mapValues.js"),
				fe = o.n(ue),
				pe = o("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				ve = o("./src/reddit/constants/comments.ts");
			const be = {};

			function ye(e) {
				const t = e;
				return fe()(t, e => {
					let {
						depth: t,
						next: o,
						prev: r
					} = e;
					return {
						depth: t,
						next: o,
						prev: r
					}
				})
			}
			const me = (e, t, o) => {
				const r = {};
				for (const s in t) {
					const e = t[s],
						o = e.postId;
					r.hasOwnProperty(o) ? r[o] = {
						...r[o],
						[s]: e
					} : r[o] = {
						[s]: e
					}
				}
				for (const s in o) {
					const e = o[s],
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
			var Oe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : be,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case A.e:
					case oe.e: {
						const {
							comments: o,
							extraComments: r,
							postIds: s,
							profileName: n
						} = t.payload, i = me(s, o, r), d = {};
						for (const e of s) {
							d[Object(pe.a)(e, n)] = i.hasOwnProperty(e) ? ye(i[e]) : {}
						}
						return {
							...e,
							...d
						}
					}
					case oe.b: {
						const {
							comments: o,
							commentLists: r,
							extraComments: s,
							extraCommentsId: n,
							postIds: i,
							profileName: d
						} = t.payload;
						if (0 === i.length) {
							const t = Object.keys(e).find(t => void 0 !== e[t][n]);
							if (!t) return e;
							const o = {
									...e[t]
								} [n].prev,
								r = o && o.id || "";
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
						const a = i[0],
							c = ye(me(i, o, s)[a]),
							l = Object(pe.a)(a, d),
							u = {
								...e[l]
							},
							f = u[n].prev,
							p = f && f.id || "",
							v = r[a].head,
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
					case oe.e: {
						const {
							commentLists: o,
							postIds: r,
							profileName: s
						} = t.payload, n = {};
						for (const e of r) {
							n[Object(pe.a)(e, s)] = o[e] && o[e].head ? o[e].head.id : null
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
						case oe.e: {
							const {
								postIds: o,
								profileName: r
							} = t.payload, s = {};
							for (const e of o) {
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
				xe = Object(q.c)({
					api: te,
					extraComments: le,
					keyToCommentThreadLinkSets: Oe,
					keyToHeadCommentId: ge,
					keyToPostId: je
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
			const _e = Object(j.a)(A.f),
				Ce = Object(j.a)(A.e),
				Le = Object(j.a)(A.d),
				ke = Object(j.a)(A.c),
				Pe = Object(j.a)(A.b),
				Re = Object(j.a)(A.a),
				Ee = (e, t, o, r) => async (r, s, i) => {
					const d = s(),
						a = !!d.listings.postOrder.ids[e],
						y = !!Object(w.c)(d, {
							listingKey: e
						});
					if (!!Object(w.d)(d, {
							listingKey: e
						}) || a && !y) return;
					r(_e({
						key: e
					}));
					const m = await Object(S.a)("profile", () => ((e, t, o) => Object(u.a)(e, {
							data: o,
							endpoint: Object(f.a)(Object(l.a)(Object(p.a)(Object(v.a)(`${c.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
							traceRequestName: "get_profile_conversations",
							method: n.ob.GET
						}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
							...e,
							body: {
								...e.body,
								pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
							}
						} : e))(i.apiContext(), t, o)),
						O = m.body;
					await Object(b.a)(i.gqlContext, O.posts).then(e => O.posts = e);
					const {
						pinned: h,
						postIds: j
					} = O;
					if (m.ok) {
						r(Ce({
							key: e,
							meta: d.meta,
							profileName: t,
							...O,
							postIds: j
						}));
						const o = Object(g.o)(s(), t);
						r(Object(L.h)({
							profileId: o,
							pinned: h
						}))
					} else r(Le({
						account: m.body.data ? m.body.data.account : null,
						error: m.body.reason ? {
							type: m.body.reason
						} : m.error,
						key: e
					})), m.body.reason === E.a.DeletedProfile && r(Object(I.v)({
						profileName: t
					})), r(Object(k.o)(m.status))
				}, Fe = e => async (t, o, r) => {
					const {
						queryParams: c,
						params: l
					} = e, {
						sort: u,
						t: f
					} = Object(d.a)(o(), c), {
						profileName: p
					} = l;
					let v = !1;
					const b = y.e[Object(O.U)(o(), {})],
						w = p.toLowerCase(),
						j = {
							...s()(e.queryParams, m.p),
							sort: u,
							layout: b,
							t: f
						},
						I = [t(P.d(w))],
						L = Object(F.a)(w, n.zb, u, e.queryParams);
					if (o().listings.postOrder.ids[L] && !o().listings.postOrder.api.error[L] ? v = !0 : I.push(t(Ee(L, w, j, !0))), I.push(t(Object(i.b)())), await Promise.all(I), v) return;
					const E = o();
					if (!E.platform.currentPage) return;
					if (200 !== E.platform.currentPage.status) return;
					const S = Object(g.o)(o(), w),
						A = Object(h.Cb)(E, {
							userName: p
						}).id;
					t(k.n({
						title: Se(o(), p)
					})), Object(h.U)(E) && Object(h.Y)(E, p) && t(Object(x.startChangeUsernameFlow)());
					const N = [t(Object(a.q)()), t(R.b(w, S)), t(P.b(w)), t(_.o(p)), t(P.i(p)), t(C.d(p, A))];
					await Promise.all(N)
				}, Se = (e, t) => Object(g.s)(e, {
					profileName: t
				})
		},
		"./src/reddit/reducers/pages/followers/index.ts": function(e, t, o) {
			"use strict";
			var r = o("./node_modules/redux/es/redux.js"),
				s = o("./src/reddit/actions/pages/followers/constants.ts");
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
				i = Object(r.c)({
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
							followers: o
						} = t.payload;
						return {
							...e,
							...o
						}
					}
					case s.f: {
						const {
							userId: o,
							isFollowed: r
						} = t.payload;
						return {
							...e,
							[o]: {
								...e[o],
								isFollowed: r
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
							pageInfo: o
						} = t.payload;
						return o || e
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
							followers: o
						} = t.payload;
						return o || e
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
							followerUserIds: o
						} = t.payload;
						return o || e
					}
					case s.a: {
						const {
							followerUserIds: o
						} = t.payload;
						return o ? [...e, ...o] : e
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				api: i,
				models: a,
				pageInfo: c,
				search: u,
				userIds: p
			})
		},
		"./src/reddit/selectors/followers.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			})), o.d(t, "b", (function() {
				return i
			})), o.d(t, "e", (function() {
				return d
			})), o.d(t, "c", (function() {
				return a
			})), o.d(t, "d", (function() {
				return c
			}));
			var r = o("./src/lib/initializeClient/installReducer.ts"),
				s = o("./src/reddit/reducers/pages/followers/index.ts");
			Object(r.a)({
				pages: {
					followers: s.a
				}
			});
			const n = e => {
					var t, o;
					return null === (o = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === o ? void 0 : o.userIds
				},
				i = (e, t) => {
					var o;
					return null === (o = (e => {
						var t, o;
						return null === (o = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === o ? void 0 : o.models
					})(e)) || void 0 === o ? void 0 : o[t]
				},
				d = e => {
					var t, o;
					return null === (o = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === o ? void 0 : o.search
				},
				a = e => {
					var t, o;
					return null === (o = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === o ? void 0 : o.api.pending
				},
				c = e => {
					var t, o;
					return null === (o = null === (t = e.pages) || void 0 === t ? void 0 : t.followers) || void 0 === o ? void 0 : o.pageInfo
				}
		},
		"./src/redditGQL/operations/ProfileFollowers.json": function(e) {
			e.exports = JSON.parse('{"id":"5fc67bec507f"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileFollowersAction.29f7fafb6591020bb538.js.map