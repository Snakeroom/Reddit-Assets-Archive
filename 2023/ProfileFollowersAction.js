// https://www.redditstatic.com/desktop2x/ProfileFollowersAction.7905e4349336df546f3c.js
// Retrieved at 6/6/2023, 10:10:04 PM by Reddit Dataminer v1.0.0
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
				return h
			})), o.d(t, "profileFollowersPageFailed", (function() {
				return w
			})), o.d(t, "DEFAULT_VARIABLES", (function() {
				return g
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
				h = Object(n.a)(f.d),
				w = Object(n.a)(f.c),
				g = {
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
					(null === (s = Object(b.a)(t())) || void 0 === s ? void 0 : s.length) || n.push(e(x(g))), await Promise.all(n)
				}, x = e => async (t, o, r) => {
					let {
						gqlContext: s
					} = r;
					const n = !o().user.account,
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
							data: o
						} = u.body, r = l(o);
						if (!r) return t(Object(i.d)()), void t(w());
						(null == e ? void 0 : e.searchQuery) ? t(O(r)): (null == e ? void 0 : e.after) ? t(m(r)) : (null == e ? void 0 : e.after) || (null == e ? void 0 : e.searchQuery) || t(y(r))
					}
					u.ok || (t(Object(i.d)()), t(w()))
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
				return Ie
			})), o.d(t, "profileOverviewConversationsLoaded", (function() {
				return _e
			})), o.d(t, "profileOverviewConversationsFailed", (function() {
				return Ce
			})), o.d(t, "profileOverviewChronoPending", (function() {
				return Le
			})), o.d(t, "profileOverviewChronoLoaded", (function() {
				return ke
			})), o.d(t, "profileOverviewChronoFailed", (function() {
				return Pe
			})), o.d(t, "profileOverviewConversationsRequested", (function() {
				return Re
			})), o.d(t, "profileOverviewRequested", (function() {
				return Ee
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
				h = o("./src/reddit/selectors/listings.ts"),
				w = o("./src/reddit/selectors/profile.ts"),
				g = o("./src/reddit/selectors/user.ts"),
				j = o("./src/lib/makeActionCreator/index.ts"),
				x = o("./src/reddit/actions/changeUsername.ts"),
				I = o("./src/reddit/actions/contentGate.ts"),
				_ = o("./src/reddit/actions/externalAccount.ts"),
				C = o("./src/reddit/actions/pinnedPost.ts"),
				L = o("./src/reddit/actions/platform.ts"),
				k = o("./src/reddit/actions/profile/index.ts"),
				P = o("./src/reddit/actions/trophyCase.ts"),
				R = o("./src/reddit/constants/errors.ts"),
				E = o("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				F = o("./src/reddit/helpers/timeApiRoute/index.ts"),
				A = o("./src/reddit/actions/pages/profileOverview/constants.ts"),
				S = o("./src/lib/initializeClient/installReducer.ts"),
				N = o("./node_modules/redux/es/redux.js"),
				q = o("./src/reddit/actions/profileOverviewChrono/constants.ts");
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
							key: o
						} = t.payload;
						return {
							...e,
							[o]: null
						}
					}
					case A.a:
					case q.a: {
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
			const T = {};
			var K = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A.c:
						case q.c: {
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
						case q.b:
						case q.a: {
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
							key: o
						} = t.payload;
						return {
							...e,
							[o]: {}
						}
					}
					case q.b: {
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
			const $ = {};
			var B = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A.b:
						case q.b: {
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
			const z = {};
			var J = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A.b:
						case q.b: {
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
			const X = {};
			var Z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : X,
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
				ee = Object(N.c)({
					error: Y,
					pending: Z
				}),
				te = o("./src/reddit/actions/profileConversations.ts");
			const oe = {};
			var re = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case te.c:
					case te.b: {
						const {
							extraCommentsId: o
						} = t.payload;
						return {
							...e,
							[o]: null
						}
					}
					case te.a: {
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
			const se = {};
			var ne = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : se,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case te.c: {
							const {
								extraCommentsId: o
							} = t.payload;
							return {
								...e,
								[o]: !0
							}
						}
						case te.b:
						case te.a: {
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
				ie = Object(N.c)({
					error: re,
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
				le = o("./node_modules/lodash/mapValues.js"),
				ue = o.n(le),
				fe = o("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				pe = o("./src/reddit/constants/comments.ts");
			const ve = {};

			function be(e) {
				const t = e;
				return ue()(t, e => {
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
			const ye = (e, t, o) => {
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
			var me = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ve,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case A.e:
					case te.e: {
						const {
							comments: o,
							extraComments: r,
							postIds: s,
							profileName: n
						} = t.payload, i = ye(s, o, r), d = {};
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
							c = be(ye(i, o, s)[a]),
							l = Object(fe.a)(a, d),
							u = {
								...e[l]
							},
							f = u[n].prev,
							p = f && f.id || "",
							v = r[a].head,
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
							commentLists: o,
							postIds: r,
							profileName: s
						} = t.payload, n = {};
						for (const e of r) {
							n[Object(fe.a)(e, s)] = o[e] && o[e].head ? o[e].head.id : null
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
								postIds: o,
								profileName: r
							} = t.payload, s = {};
							for (const e of o) {
								s[Object(fe.a)(e, r)] = e
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
				Re = (e, t, o, r) => async (r, s, i) => {
					const d = s(),
						a = !!d.listings.postOrder.ids[e],
						y = !!Object(h.c)(d, {
							listingKey: e
						});
					if (!!Object(h.d)(d, {
							listingKey: e
						}) || a && !y) return;
					r(Ie({
						key: e
					}));
					const m = await Object(F.a)("profile", () => ((e, t, o) => Object(u.a)(e, {
							data: o,
							endpoint: Object(f.a)(Object(l.a)(Object(p.a)(Object(v.a)(`${c.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
							traceRequestName: "get_profile_conversations",
							method: n.pb.GET
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
						pinned: g,
						postIds: j
					} = O;
					if (m.ok) {
						r(_e({
							key: e,
							meta: d.meta,
							profileName: t,
							...O,
							postIds: j
						}));
						const o = Object(w.o)(s(), t);
						r(Object(C.h)({
							profileId: o,
							pinned: g
						}))
					} else r(Ce({
						account: m.body.data ? m.body.data.account : null,
						error: m.body.reason ? {
							type: m.body.reason
						} : m.error,
						key: e
					})), m.body.reason === R.a.DeletedProfile && r(Object(I.v)({
						profileName: t
					})), r(Object(L.o)(m.status))
				}, Ee = e => async (t, o, r) => {
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
						h = p.toLowerCase(),
						j = {
							...s()(e.queryParams, m.p),
							sort: u,
							layout: b,
							t: f
						},
						I = [t(k.d(h))],
						C = Object(E.a)(h, n.Ab, u, e.queryParams);
					if (t(L.n({
							title: Fe(o(), p)
						})), o().listings.postOrder.ids[C] && !o().listings.postOrder.api.error[C] ? v = !0 : I.push(t(Re(C, h, j, !0))), I.push(t(Object(i.b)())), await Promise.all(I), v) return;
					const R = o();
					if (!R.platform.currentPage) return;
					if (200 !== R.platform.currentPage.status) return;
					const F = Object(w.o)(o(), h);
					Object(g.U)(R) && Object(g.Y)(R, p) && t(Object(x.startChangeUsernameFlow)());
					const A = [t(Object(a.q)()), t(P.b(h, F)), t(k.b(h)), t(_.o(p)), t(k.i(p))];
					await Promise.all(A)
				}, Fe = (e, t) => Object(w.s)(e, {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileFollowersAction.7905e4349336df546f3c.js.map