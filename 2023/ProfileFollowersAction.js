// https://www.redditstatic.com/desktop2x/ProfileFollowersAction.19b5ae53a2d4eff191b3.js
// Retrieved at 2/16/2023, 1:50:05 PM by Reddit Dataminer v1.0.0
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
				return y
			})), r.d(t, "moreProfileFollowersLoaded", (function() {
				return m
			})), r.d(t, "profileFollowersSearchLoaded", (function() {
				return O
			})), r.d(t, "profileFollowersRequestPending", (function() {
				return h
			})), r.d(t, "profileFollowersPageFailed", (function() {
				return w
			})), r.d(t, "DEFAULT_VARIABLES", (function() {
				return g
			})), r.d(t, "followersPageRequested", (function() {
				return j
			})), r.d(t, "followersRequested", (function() {
				return x
			})), r.d(t, "followUserToggled", (function() {
				return I
			})), r.d(t, "toggleFollowUser", (function() {
				return _
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				i = (r("./src/reddit/actions/pages/profileOverview/index.ts"), r("./src/reddit/actions/toaster.ts")),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/redditGQL/operations/ProfileFollowers.json");
			var c = r("./src/reddit/endpoints/subreddit/subscriptions.ts");
			var l = e => {
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
				u = r("./src/reddit/models/Toast/index.ts"),
				f = r("./src/reddit/actions/pages/followers/constants.ts"),
				p = r("./src/lib/initializeClient/installReducer.ts"),
				v = r("./src/reddit/reducers/pages/followers/index.ts"),
				b = r("./src/reddit/selectors/followers.ts");
			Object(p.a)({
				pages: {
					followers: v.a
				}
			});
			const y = Object(n.a)(f.b),
				m = Object(n.a)(f.a),
				O = Object(n.a)(f.e),
				h = Object(n.a)(f.d),
				w = Object(n.a)(f.c),
				g = {
					includeIdentity: !1,
					first: null,
					after: null,
					searchQuery: null
				},
				j = e => async (e, t, r) => {
					let {
						gqlContext: o
					} = r;
					var s;
					const n = [];
					(null === (s = Object(b.a)(t())) || void 0 === s ? void 0 : s.length) || n.push(e(x(g))), await Promise.all(n)
				}, x = e => async (t, r, o) => {
					let {
						gqlContext: s
					} = o;
					const n = !r().user.account,
						c = {
							...g,
							...e,
							includeIdentity: n
						};
					t(h());
					const u = await (async (e, t) => {
						return await Object(d.a)(e, {
							...a,
							variables: t
						})
					})(s(), c);
					if (u.ok && u.body) {
						const {
							data: r
						} = u.body, o = l(r);
						if (!o) return t(Object(i.d)()), void t(w());
						(null == e ? void 0 : e.searchQuery) ? t(O(o)): (null == e ? void 0 : e.after) ? t(m(o)) : (null == e ? void 0 : e.after) || (null == e ? void 0 : e.searchQuery) || t(y(o))
					}
					u.ok || (t(Object(i.d)()), t(w()))
				}, I = Object(n.a)(f.f), _ = (e, t) => async (r, n, d) => {
					let {
						apiContext: a
					} = d;
					var l, f;
					const p = null === (f = null === (l = n().pages) || void 0 === l ? void 0 : l.followers) || void 0 === f ? void 0 : f.models[e];
					if (!p) return;
					r(I({
						userId: e,
						isFollowed: t
					}));
					const v = p.name;
					if ((await Object(c.c)(a(), {
							subredditNames: [`${s.rc}${p.name}`],
							subscribe: t
						})).ok) {
						r(I({
							userId: e,
							isFollowed: t
						}));
						const s = o.fbt._("Successfully followed {userName}", [o.fbt._param("userName", v)], {
								hk: "nYw1y"
							}),
							n = o.fbt._("Successfully unfollowed {userName}", [o.fbt._param("userName", v)], {
								hk: "1ki3kp"
							});
						r(Object(i.f)({
							text: t ? s : n
						}))
					} else {
						const s = o.fbt._("Something went wrong", null, {
							hk: "3i6szH"
						});
						r(I({
							userId: e,
							isFollowed: !t
						})), r(Object(i.f)(Object(i.e)(s, u.b.Error)))
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
				return Ce
			})), r.d(t, "profileOverviewChronoPending", (function() {
				return Le
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
				h = r("./src/reddit/selectors/listings.ts"),
				w = r("./src/reddit/selectors/profile.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				j = r("./src/lib/makeActionCreator/index.ts"),
				x = r("./src/reddit/actions/changeUsername.ts"),
				I = r("./src/reddit/actions/contentGate.ts"),
				_ = r("./src/reddit/actions/externalAccount.ts"),
				C = r("./src/reddit/actions/pinnedPost.ts"),
				L = r("./src/reddit/actions/platform.ts"),
				k = r("./src/reddit/actions/profile/index.ts"),
				P = r("./src/reddit/actions/trophyCase.ts"),
				R = r("./src/reddit/constants/errors.ts"),
				E = r("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				F = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				A = r("./src/reddit/actions/pages/profileOverview/constants.ts"),
				S = r("./src/lib/initializeClient/installReducer.ts"),
				N = r("./node_modules/redux/es/redux.js"),
				q = r("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const U = {};
			var D = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			const T = {};
			var K = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
						t = arguments.length > 1 ? arguments[1] : void 0;
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
					error: D,
					pending: K
				});
			const G = {};
			var W = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G,
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
					case q.b: {
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
			const $ = {};
			var B = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A.b:
						case q.b: {
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
				H = r("./src/lib/omitKey/index.ts");
			const z = {};
			var J = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A.b:
						case q.b: {
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
							} : Object(H.a)(e, r)
						}
						default:
							return e
					}
				},
				M = Object(N.c)({
					api: Q,
					fetchedTokens: W,
					ids: B,
					loadMore: J
				});
			const V = {};
			var Y = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V,
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
			const X = {};
			var Z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : X,
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
				ee = Object(N.c)({
					error: Y,
					pending: Z
				}),
				te = r("./src/reddit/actions/profileConversations.ts");
			const re = {};
			var oe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : re,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			const se = {};
			var ne = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : se,
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				ie = Object(N.c)({
					error: oe,
					pending: ne
				});
			const de = {};
			var ae = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : de,
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				ce = Object(N.c)({
					api: ie,
					models: ae
				}),
				le = r("./node_modules/lodash/mapValues.js"),
				ue = r.n(le),
				fe = r("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				pe = r("./src/reddit/constants/comments.ts");
			const ve = {};

			function be(e) {
				const t = e;
				return ue()(t, e => {
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
			const ye = (e, t, r) => {
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
			var me = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ve,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case A.e:
					case te.e: {
						const {
							comments: r,
							extraComments: o,
							postIds: s,
							profileName: n
						} = t.payload, i = ye(s, r, o), d = {};
						for (const e of s) {
							d[Object(fe.a)(e, n)] = i.hasOwnProperty(e) ? be(i[e]) : {}
						}
						return {
							...e,
							...d
						}
					}
					case te.b: {
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
							c = be(ye(i, r, s)[a]),
							l = Object(fe.a)(a, d),
							u = {
								...e[l]
							},
							f = u[n].prev,
							p = f && f.id || "",
							v = o[a].head,
							b = v && v.id || "",
							y = {
								id: b,
								type: pe.a.Comment
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
			const Oe = {};
			var he = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case A.e:
					case te.e: {
						const {
							commentLists: r,
							postIds: o,
							profileName: s
						} = t.payload, n = {};
						for (const e of o) {
							n[Object(fe.a)(e, s)] = r[e] && r[e].head ? r[e].head.id : null
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
			const we = {};
			var ge = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : we,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A.e:
						case te.e: {
							const {
								postIds: r,
								profileName: o
							} = t.payload, s = {};
							for (const e of r) {
								s[Object(fe.a)(e, o)] = e
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
				je = Object(N.c)({
					api: ee,
					extraComments: ce,
					keyToCommentThreadLinkSets: me,
					keyToHeadCommentId: he,
					keyToPostId: ge
				}),
				xe = Object(N.c)({
					chrono: M,
					conversations: je
				});
			Object(S.a)({
				pages: {
					profileOverview: xe
				}
			});
			const Ie = Object(j.a)(A.f),
				_e = Object(j.a)(A.e),
				Ce = Object(j.a)(A.d),
				Le = Object(j.a)(A.c),
				ke = Object(j.a)(A.b),
				Pe = Object(j.a)(A.a),
				Re = (e, t, r, o) => async (o, s, i) => {
					const d = s(),
						a = !!d.listings.postOrder.ids[e],
						y = !!Object(h.c)(d, {
							listingKey: e
						});
					if (!!Object(h.d)(d, {
							listingKey: e
						}) || a && !y) return;
					o(Ie({
						key: e
					}));
					const m = await Object(F.a)("profile", () => ((e, t, r) => Object(u.a)(e, {
							data: r,
							endpoint: Object(f.a)(Object(l.a)(Object(p.a)(Object(v.a)(`${c.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
							traceRequestName: "get_profile_conversations",
							method: n.pb.GET
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
						pinned: g,
						postIds: j
					} = O;
					if (m.ok) {
						o(_e({
							key: e,
							meta: d.meta,
							profileName: t,
							...O,
							postIds: j
						}));
						const r = Object(w.o)(s(), t);
						o(Object(C.h)({
							profileId: r,
							pinned: g
						}))
					} else o(Ce({
						account: m.body.data ? m.body.data.account : null,
						error: m.body.reason ? {
							type: m.body.reason
						} : m.error,
						key: e
					})), m.body.reason === R.a.DeletedProfile && o(Object(I.v)({
						profileName: t
					})), o(Object(L.o)(m.status))
				}, Ee = e => async (t, r, o) => {
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
					const b = y.e[Object(O.U)(r(), {})],
						h = p.toLowerCase(),
						j = {
							...s()(e.queryParams, m.q),
							sort: u,
							layout: b,
							t: f
						},
						I = [t(k.d(h))],
						C = Object(E.a)(h, n.Ab, u, e.queryParams);
					if (t(L.n({
							title: Fe(r(), p)
						})), r().listings.postOrder.ids[C] && !r().listings.postOrder.api.error[C] ? v = !0 : I.push(t(Re(C, h, j, !0))), I.push(t(Object(i.b)())), await Promise.all(I), v) return;
					const R = r();
					if (!R.platform.currentPage) return;
					if (200 !== R.platform.currentPage.status) return;
					const F = Object(w.o)(r(), h);
					Object(g.U)(R) && Object(g.Y)(R, p) && t(Object(x.startChangeUsernameFlow)());
					const A = [t(Object(a.q)()), t(P.b(h, F)), t(k.b(h)), t(_.o(p)), t(k.i(p))];
					await Promise.all(A)
				}, Fe = (e, t) => Object(w.s)(e, {
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
			e.exports = JSON.parse('{"id":"5fc67bec507f"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileFollowersAction.19b5ae53a2d4eff191b3.js.map