// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPag~0596d05c.32b2e42f400ee938c2f1.js
// Retrieved at 3/27/2023, 5:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPag~0596d05c"], {
		"./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/reddit/selectors/experiments/devPlatform.ts");
			const c = Object(i.a)({
				resolved: {},
				chunkName: () => "devPlatform-components-ContextActions",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("vendors~devPlatform-components-AdminPanel-Utilities-DevPlatformConfig~devPlatform-components-ContextActions"), s.e("devPlatform-components-ContextActions")]).then(s.bind(null, "./src/devPlatform/components/ContextActions/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/devPlatform/components/ContextActions/index.tsx"
				}
			}, {
				ssr: !1
			});

			function d(e) {
				return Object(r.e)(e => Object(a.a)(e)) ? n.a.createElement(c, {
					contextType: e.contextType,
					contextData: e.contextData,
					moderator: e.moderator
				}) : null
			}
		},
		"./src/devPlatform/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			}));
			const o = "devvit-gateway-url",
				n = "devvit-mock-metadata",
				r = "devvit-debug-logging",
				i = "DEV_PLAT__OPEN_USER_INPUT_MODAL";
			var a;
			! function(e) {
				e[e.POST = 0] = "POST", e[e.COMMENT = 1] = "COMMENT", e[e.SUBREDDIT = 2] = "SUBREDDIT", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
			}(a || (a = {}))
		},
		"./src/higherOrderComponents/withAdClickLocation/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const a = e => (e, t, s) => ({
				...i.o(e),
				source: "post",
				action: "click",
				noun: "ad",
				adClick: {
					location: t
				},
				actionInfo: i.d(e),
				adblock: i.e(e),
				app: i.f(e),
				feed: i.r(e),
				geo: i.t(e),
				platform: i.I(e),
				referrer: i.Z(e),
				request: i.ab(e),
				screen: i.cb(e),
				session: i.hb(e),
				user: i.sb(e),
				media: s ? i.C(e, s) : null,
				post: s ? i.K(e, s) : null
			});
			var c = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				d = s("./src/telemetry/index.ts");
			const l = new Set;

			function m(e) {
				function t(t) {
					const s = Object(r.f)().getState(),
						{
							post: o
						} = {
							...t
						};
					return o && o.isSponsored ? n.a.createElement("div", {
						onClickCapture: function(e, o) {
							var n, r;
							if (l.has(e.timeStamp)) return;
							l.add(e.timeStamp);
							const i = function(e) {
								if (e.dataset.adclicklocation) return e.dataset.adclicklocation;
								const t = e.closest(".PostContainer, [data-adclicklocation]");
								return t ? t.dataset.adclicklocation : c.a.UNKNOWN
							}(e.target);
							i && (! function(e, t) {
								return Object.values(t).some(t => t === e)
							}(i, c.b) ? Object(d.a)(a(o)(s, i, null === (r = t.post) || void 0 === r ? void 0 : r.postId)) : Object(d.a)(a(o)(s, c.a.UNKNOWN, null === (n = t.post) || void 0 === n ? void 0 : n.postId)))
						}
					}, n.a.createElement(e, t)) : n.a.createElement(e, t)
				}
				const s = e.name || e.displayName;
				return t.displayName = `WithAdClickLocation(${s})`, t
			}
		},
		"./src/reddit/actions/eventPosts/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "fetchEventPostsPending", (function() {
				return C
			})), s.d(t, "fetchEventPostsSuccess", (function() {
				return _
			})), s.d(t, "fetchEventPostsFailure", (function() {
				return E
			})), s.d(t, "fetchMoreEventPostsSuccess", (function() {
				return g
			})), s.d(t, "eventPostsRequested", (function() {
				return j
			})), s.d(t, "startEventNowSuccess", (function() {
				return k
			})), s.d(t, "startEventNowRequested", (function() {
				return I
			})), s.d(t, "editEventTimeSuccess", (function() {
				return w
			})), s.d(t, "editEventTimeRequested", (function() {
				return P
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/eventPosts/constants.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/redditGQL/operations/EventPostsBySubredditName.json");
			var l = s("./src/lib/makeApiRequest/index.ts"),
				m = s("./src/lib/omitHeaders/index.ts"),
				p = s("./src/reddit/constants/headers.ts");
			var u = (e, t, s, o, r) => Object(l.a)(Object(m.a)(e, [p.a]), {
				endpoint: `${e.apiUrl}/api/event_post_time.json`,
				method: n.pb.POST,
				data: {
					id: t,
					event_start: s,
					event_end: o,
					event_tz: r
				}
			});
			var b = (e, t) => Object(l.a)(Object(m.a)(e, [p.a]), {
					endpoint: `${e.apiUrl}/api/start_event_post.json`,
					method: n.pb.POST,
					data: {
						id: t
					}
				}),
				h = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts"),
				x = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/selectors/eventPosts.ts"),
				v = s("./src/reddit/selectors/posts.ts");
			const O = () => o.fbt._("Something went wrong. Just don't panic.", null, {
					hk: "4onxm1"
				}),
				C = Object(r.a)(i.e),
				_ = Object(r.a)(i.c),
				E = Object(r.a)(i.b),
				g = Object(r.a)(i.d),
				j = e => async (t, s, o) => {
					let {
						gqlContext: n
					} = o, r = s();
					const i = Object(f.d)(r, {
							subredditName: e
						}),
						l = Object(f.b)(r, {
							subredditName: e
						}),
						m = Object(f.c)(r, {
							subredditName: e
						}),
						p = Object(f.a)(r, {
							subredditName: e
						}),
						u = l && m;
					if (i) return;
					const b = {
						name: e,
						pageSize: 25,
						nonInclusiveCursor: null
					};
					if (u) b.nonInclusiveCursor = p;
					else if (l && !m) return;
					const v = Object(f.e)(r, {
						subredditName: e
					});
					t(C({
						key: v
					}));
					const j = await ((e, t) => Object(c.a)(e, {
						...d,
						variables: t
					}))(n(), b);
					if (j.ok) {
						const {
							subredditInfoByName: e
						} = j.body.data, {
							eventPosts: o
						} = e, n = Object(h.a)(o);
						let i = [],
							a = {};
						const c = o.pageInfo || {
							hasNextPage: !1,
							endCursor: null,
							hasPreviousPage: !1,
							startCursor: null
						};
						n.length > 0 && (i = n.map(e => e.id), a = n.reduce((e, t) => (e[t.id] = t, e), {})), r = s(), t((u ? g : _)({
							key: v,
							postIds: i,
							meta: r.meta,
							posts: a,
							pageInfo: c
						}))
					} else t(E({
						error: j.error,
						key: v
					})), t(Object(a.f)({
						kind: x.b.Error,
						text: O()
					}))
				}, k = Object(r.a)(i.f), I = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					if ((await b(r(), e)).ok) {
						const n = () => o.fbt._("Following event has started successfully: {title}", [o.fbt._param("title", c)], {
							hk: "e9iz9"
						});
						t(k({
							postId: e
						}));
						const r = s(),
							i = Object(v.G)(r, {
								postId: e
							}),
							c = i && i.title || "";
						t(Object(a.f)({
							kind: x.b.SuccessMod,
							text: n()
						}))
					} else t(Object(a.f)({
						kind: x.b.Error,
						text: O()
					}))
				}, w = Object(r.a)(i.a), P = (e, t) => async (s, r, i) => {
					let {
						apiContext: c
					} = i;
					const d = await u(c(), e, t.startDate, t.endDate, t.timezoneName);
					if (d.ok) {
						const t = d.body,
							i = 14400,
							c = Math.round(t.event_start / n.Yb);
						let l = t.event_end;
						const m = {
							eventStart: c,
							eventEnd: l = l && Math.round(l / n.Yb) || c + i,
							eventIsLive: t.event_is_live
						};
						s(w({
							postId: e,
							eventInfo: m
						}));
						const p = r(),
							u = Object(v.G)(p, {
								postId: e
							}),
							b = u && u.title || "",
							h = () => o.fbt._("Following event time is updated successfully: {title}", [o.fbt._param("title", b)], {
								hk: "1m1w1c"
							});
						s(Object(a.f)({
							kind: x.b.SuccessMod,
							text: h()
						}))
					} else s(Object(a.f)({
						kind: x.b.Error,
						text: O()
					}))
				}
		},
		"./src/reddit/actions/postCollection/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return R
			})), s.d(t, "e", (function() {
				return L
			})), s.d(t, "g", (function() {
				return D
			})), s.d(t, "a", (function() {
				return V
			})), s.d(t, "c", (function() {
				return H
			})), s.d(t, "h", (function() {
				return Q
			})), s.d(t, "f", (function() {
				return Z
			})), s.d(t, "d", (function() {
				return re
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react-router-redux/es/index.js"),
				r = s("./src/lib/filterQueryParams/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/actions/postCollection/constants.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/constants/history.ts"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/makeApiRequest/index.ts"),
				u = s("./src/lib/omitHeaders/index.ts"),
				b = s("./src/reddit/constants/headers.ts");
			var h = (e, t, s) => Object(p.a)(Object(u.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/add_post_to_collection.json`,
				method: m.pb.POST,
				data: {
					collection_id: t,
					link_fullname: s
				}
			});
			var x = (e, t, s) => Object(p.a)(Object(u.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/create_collection.json`,
				method: m.pb.POST,
				data: {
					title: t,
					sr_fullname: s
				}
			});
			var f = (e, t) => Object(p.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/delete_collection.json`,
					method: m.pb.POST,
					data: {
						collection_id: t
					}
				}),
				v = s("./src/config.ts");
			var O = (e, t) => Object(p.a)(Object(u.a)(e, [b.a]), {
				endpoint: `${v.a.gatewayUrl}/desktopapi/v1/subreddit_collections/${t}`,
				method: m.pb.GET
			});
			var C = (e, t, s) => Object(p.a)(Object(u.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/remove_post_in_collection.json`,
				method: m.pb.POST,
				data: {
					collection_id: t,
					link_fullname: s
				}
			});
			var _ = (e, t, s) => Object(p.a)(Object(u.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_title.json`,
				method: m.pb.POST,
				data: {
					collection_id: t,
					title: s
				}
			});
			var E = (e, t, s) => Object(p.a)(Object(u.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/reorder_collection.json`,
				method: m.pb.POST,
				data: {
					collection_id: t,
					link_ids: s.join(",")
				}
			});
			var g = (e, t, s) => Object(p.a)(Object(u.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_description.json`,
				method: m.pb.POST,
				data: {
					collection_id: t,
					description: s
				}
			});
			var j = (e, t, s) => Object(p.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/update_collection_display_layout.json`,
					method: m.pb.POST,
					data: {
						collection_id: t,
						display_layout: s
					}
				}),
				k = s("./src/reddit/helpers/overlay/index.ts"),
				I = s("./src/reddit/helpers/path/index.ts"),
				w = s("./src/reddit/models/Toast/index.ts"),
				P = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				y = s("./src/reddit/selectors/postCollection.ts"),
				T = s("./src/reddit/selectors/posts.ts"),
				S = s("./src/reddit/selectors/subreddit.ts");
			const N = Object(i.a)(c.c),
				M = Object(i.a)(c.b),
				F = Object(i.a)(c.d),
				R = (e, t) => async (s, o, n) => {
					let {
						apiContext: r
					} = n;
					s(N());
					const i = await x(r(), e, t);
					let a;
					if (i.ok) {
						const e = o().meta,
							t = (e => ({
								author: e.author_name || void 0,
								createdAtUTC: e.created_at_utc,
								description: e.description,
								displayLayout: e.display_layout,
								id: e.collection_id,
								lastUpdateUTC: e.last_update_utc,
								permalink: e.permalink,
								postIds: e.link_ids,
								primaryPostId: e.primary_link_id || void 0,
								subredditId: e.subreddit_id,
								title: e.title
							}))(i.body);
						s(F({
							collection: t,
							meta: e
						})), a = t
					} else {
						const e = i.error;
						s(M(e))
					}
					return a
				}, A = Object(i.a)(c.f), L = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					const i = s().postCollection.subredditToIds || {};
					if (Object.keys(i).length > 0) return;
					const a = await O(r(), e);
					a.ok ? t(A(a.body)) : t(Object(d.f)({
						kind: w.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, B = Object(i.a)(c.g), D = (e, t, s) => async (n, r, i) => {
					let {
						apiContext: a
					} = i;
					if ((await C(a(), e, t)).ok) {
						const i = r(),
							a = Object(T.G)(i, {
								postId: t
							}),
							c = a && a.title || "",
							l = Object(y.q)(i, {
								collectionId: e
							}),
							m = (l && l.postIds && l.postIds.indexOf(t) || -1) - 1;
						if (n(B({
								collectionId: e,
								postId: t
							})), s && m >= 0) {
							const t = r(),
								s = Object(y.q)(t, {
									collectionId: e
								}),
								o = s && s.postIds && s.postIds[m] || "",
								i = Object(T.G)(t, {
									postId: o
								});
							i && i.permalink && n(Object(k.a)(i.permalink))
						}
						n(Object(d.f)({
							kind: w.b.SuccessMod,
							text: o.fbt._("Following post removed from collection successfully: {postTitle}", [o.fbt._param("postTitle", c)], {
								hk: "8e1lV"
							}),
							buttonText: o.fbt._("UNDO", null, {
								hk: "3KPLib"
							}),
							buttonAction: V(e, t)
						}))
					} else n(Object(d.f)({
						kind: w.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, U = Object(i.a)(c.a), W = Object(i.a)(c.t), V = (e, t) => async (s, n, r) => {
					let {
						apiContext: i
					} = r;
					const a = n();
					if ((await h(i(), e, t)).ok) {
						s(U({
							collectionId: e,
							postId: t
						})), s(W({
							collectionId: e,
							postId: t
						}));
						const n = Object(T.G)(a, {
								postId: t
							}),
							r = Object(y.q)(a, {
								collectionId: e
							}),
							i = r && r.title || "";
						s(Object(d.f)({
							kind: w.b.SuccessMod,
							text: o.fbt._("Success! You added a post to the collection: {title}", [o.fbt._param("title", i)], {
								hk: "3KNJWi"
							}),
							buttonText: o.fbt._("VIEW", null, {
								hk: "1SSkgL"
							}),
							buttonAction: Object(k.a)(n.permalink)
						}))
					} else s(Object(d.f)({
						kind: w.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, G = Object(i.a)(c.e), H = (e, t) => async (s, i, a) => {
					let {
						apiContext: c
					} = a;
					const l = i();
					if ((await f(c(), e)).ok) {
						const {
							url: i
						} = l.platform.currentPage, a = Object(y.q)(l, {
							collectionId: e
						}), c = a && a.title || "", m = a && a.subredditId, p = m ? Object(S.c)(l, m) : "/";
						s(G({
							collectionId: e,
							collection: a
						})), s(t ? Object(n.c)(Object(r.a)(i, ["collection"])) : Object(n.b)(p)), s(Object(d.f)({
							kind: w.b.SuccessMod,
							text: o.fbt._("Collection deleted successfully: {title}", [o.fbt._param("title", c)], {
								hk: "4tcOKB"
							})
						}))
					} else s(Object(d.f)({
						kind: w.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, q = Object(i.a)(c.r), J = Object(i.a)(c.n), K = Object(i.a)(c.s), Q = (e, t) => async (s, n, r) => {
					let {
						apiContext: i
					} = r;
					s(q());
					const a = await _(i(), e, t);
					let c = !1;
					if (a.ok) s(K({
						collectionId: e,
						newTitle: t
					})), s(Object(d.f)({
						kind: w.b.SuccessMod,
						text: o.fbt._("Collection title updated successfully", null, {
							hk: "2hKzKl"
						})
					})), c = !0;
					else {
						const e = a.error;
						s(J(e)), s(Object(d.f)({
							kind: w.b.Error,
							text: o.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))
					}
					return c
				}, z = Object(i.a)(c.l), X = Object(i.a)(c.m), Y = Object(i.a)(c.k), Z = e => async (t, s) => {
					const o = s();
					if (Object(P.b)(o) || Object(P.c)(o)) return void t(Object(a.Z)(Object(I.b)(e.permalink), e.id));
					const r = o.platform.currentPage.locationState;
					t(!(!r || !r[l.b.IsOverlay]) ? Object(k.a)(e.permalink) : Object(n.b)(Object(I.b)(e.permalink)))
				}, $ = Object(i.a)(c.i), ee = Object(i.a)(c.j), te = Object(i.a)(c.h), se = Object(i.a)(c.p), oe = Object(i.a)(c.o), ne = Object(i.a)(c.q), re = e => async t => {
					const s = [],
						{
							collectionId: n,
							description: r,
							displayLayout: i,
							postIds: a,
							title: c
						} = e;
					a && s.push(t(((e, t) => async (s, n, r) => {
						let {
							apiContext: i
						} = r;
						s($());
						const a = await E(i(), e, t);
						let c = !1;
						return a.ok ? (s(ee({
							collectionId: e,
							postIds: t
						})), s(Object(d.f)({
							kind: w.b.SuccessMod,
							text: o.fbt._("Collection order updated successfully", null, {
								hk: "4ccHEL"
							})
						})), c = !0) : (s(te({
							error: a.error
						})), s(Object(d.f)({
							kind: w.b.Error,
							text: o.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))), c
					})(n, a))), c && s.push(t(Q(n, c))), void 0 !== r && s.push(t(((e, t) => async (s, n, r) => {
						let {
							apiContext: i
						} = r;
						s(z());
						const a = await g(i(), e, t);
						let c = !1;
						if (a.ok) s(X({
							collectionId: e,
							newDescription: t
						})), s(Object(d.f)({
							kind: w.b.SuccessMod,
							text: o.fbt._("Collection description updated successfully", null, {
								hk: "1rIDCC"
							})
						})), c = !0;
						else {
							const e = a.error;
							s(Y(e)), s(Object(d.f)({
								kind: w.b.Error,
								text: o.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return c
					})(n, r))), i && s.push(t(((e, t) => async (s, n, r) => {
						let {
							apiContext: i
						} = r;
						s(se());
						const a = await j(i(), e, t);
						let c = !1;
						if (a.ok) s(ne({
							collectionId: e,
							newLayout: t
						})), s(Object(d.f)({
							kind: w.b.SuccessMod,
							text: o.fbt._("Collection layout updated successfully", null, {
								hk: "1Rs19j"
							})
						})), c = !0;
						else {
							const e = a.error;
							s(oe(e)), s(Object(d.f)({
								kind: w.b.Error,
								text: o.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return c
					})(n, i)));
					let l = !0;
					return await Promise.all(s).then(e => {
						e.forEach(e => {
							e || (l = !1)
						})
					}), l
				}
		},
		"./src/reddit/actions/postCreation/editing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return F
			})), s.d(t, "a", (function() {
				return R
			})), s.d(t, "c", (function() {
				return A
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				m = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = s("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				u = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const b = e => !(!e.document || !e.document.length),
				h = e => ({
					text: null,
					richtext_json: JSON.stringify({
						document: e.document
					})
				}),
				x = e => ({
					text: e.markdown,
					return_rtjson: !0
				}),
				f = e => ({
					api_type: "json",
					show_error_list: !0,
					thing_id: e.post.id,
					validate_on_submit: !0,
					...b(e) ? h(e) : x(e)
				});
			var v = (e, t) => Object(c.a)(Object(d.a)(e, [l.a]), {
					endpoint: Object(u.a)(Object(m.a)(`${e.apiUrl}/api/editusertext`)),
					method: a.pb.POST,
					data: f(t)
				}).then(p.b),
				O = s("./src/reddit/helpers/overlay/index.ts"),
				C = s("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				_ = s("./src/reddit/helpers/trackers/lightbox.ts"),
				E = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/helpers/trackers/postComposer.ts"),
				j = s("./src/reddit/models/Media/index.ts"),
				k = s("./src/reddit/models/PostCreationForm/index.ts"),
				I = s("./src/reddit/models/Toast/index.ts"),
				w = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/actions/postCreation/constants.ts"),
				y = s("./src/reddit/actions/postCreation/general.ts");
			const T = Object(n.a)(P.l),
				S = Object(n.a)(P.m),
				N = Object(n.a)(P.x),
				M = Object(n.a)(P.H),
				F = Object(n.a)(P.I),
				R = (e, t) => async (s, o, n) => {
					let {
						apiContext: r
					} = n;
					const i = o(),
						a = Object(w.G)(i, {
							postId: e
						});
					t ? (s(Object(O.a)(a.permalink)), Object(_.e)(e, "edit")(i)) : Object(E.h)(e, "edit")(i);
					const {
						media: c
					} = a;
					if (!c) return;
					let d, l = k.i.RICH_TEXT,
						m = "";
					c.type === j.o.TEXT ? (l = k.i.MARKDOWN, m = c.content) : c.type === j.o.RTJSON && (m = (l = c.rteMode || k.i.RICH_TEXT) === k.i.MARKDOWN ? c.markdownContent : c.richtextContent, d = c.mediaMetadata || void 0), s(M({
						editorMode: l,
						mediaMetadata: d,
						postContent: m,
						postId: e
					}))
				}, A = e => async (t, s, n) => {
					let {
						apiContext: a
					} = n;
					const {
						post: c
					} = e, d = !c.media || "rtjson" !== c.media.type && "text" !== c.media.type ? "" : c.media.rteMode;
					g.E(s(), Object(y.o)(d)), t(N(c.id));
					const l = await v(a(), e),
						m = !1 === l.body.success;
					if (t(T(c.id)), l.ok && !m) {
						t(Object(i.f)({
							kind: I.b.SuccessCommunity,
							text: o.fbt._("Post successfully edited", null, {
								hk: "xej5K"
							})
						})), t(F(c.id));
						const e = Object(C.a)(l.body);
						t(Object(r.Q)({
							[c.id]: e
						}))
					} else t(S(l.error))
				}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var o = s("./src/lib/loadableAction/index.ts");
			const n = Object(o.a)(() => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				r = Object(o.a)(() => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(o.a)(() => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				ctaExperiment: "_3JgLF82C_0NM3uN8pOyJTu",
				borders: "_3LUqJuEsn44ivYFDMegLQG",
				borderTop: "_2n1stnecLcYB2e1RjBwSq_",
				borderBottom: "_2EVJbBkxJortsXpkuVWaPA"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				a = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = function(e) {
				const {
					className: t,
					ctaExperimentDesign: s,
					children: o,
					...a
				} = e, l = Object(r.a)(c.a.adLinkWrapper, t, {
					[c.a.ctaExperiment]: !!s,
					[c.a.borders]: "classic" === s,
					[c.a.borderTop]: "compact" === s || "conversation" === s,
					[c.a.borderBottom]: "card" === s
				});
				return n.a.createElement("div", d({
					className: l,
					"data-adclicklocation": i.a.CTA_WHITESPACE
				}, a), o)
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, s) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				ctaExperimentLink: "a3FqJA6bjuoLKqPBEp52R",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				ctaExperimentNoPadding: "_2pWpf_lwFeF9qkMKAgnF1j",
				ctaExperimentPadded: "_3xECPPLU5gHGEwtMV_um7R",
				productTitle: "_3IN2NbpghDp3ddkK_5fJX8",
				subcaption: "_20wkPJgadrJIAZtTeFXQXU",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/CallToActionButton/index.tsx"),
				c = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				m = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				p = s.n(m);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: n
				} = e, {
					source: m,
					callToAction: u,
					caption: b
				} = t;
				if (!m || !m.url) return null;
				let h = m.displayText;
				m.displayText.length >= 40 && (h = m.displayText.slice(0, 40 - "...".length) + "...");
				const x = Object(d.t)(s, m.displayText),
					f = Object(d.u)(s) ? h : b,
					v = Object(d.u)(s) ? s.subcaption : m.displayText,
					O = Object(i.a)(p.a.leftSideContent, {
						[p.a.ctaExperimentNoPadding]: e.ctaExperimentDesign && "card" !== e.ctaExperimentDesign,
						[p.a.ctaExperimentPadded]: "card" === e.ctaExperimentDesign
					}),
					C = Object(i.a)(p.a.displayUrl, {
						[p.a.ctaExperimentLink]: !!e.ctaExperimentDesign
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: O
				}, b && !n && !x && r.a.createElement("span", {
					className: p.a.caption,
					title: b,
					"data-adclicklocation": l.a.CTA_CAPTION
				}, b), !x && r.a.createElement(c.a, {
					href: m.url.replace(o.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: m,
					className: C,
					"data-adclicklocation": l.a.CTA_URL
				}, h), x && r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
					className: p.a.productTitle
				}, f), r.a.createElement("span", {
					className: p.a.subcaption
				}, v))), u && r.a.createElement(a.a, {
					className: p.a.callToAction,
					href: m.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: m,
					showCTAExperiment: !!e.ctaExperimentDesign,
					"data-adclicklocation": l.a.CTA_BUTTON
				}, u))
			}
		},
		"./src/reddit/components/AvatarPost/index.m.less": function(e, t, s) {
			e.exports = {
				avatarPostContainer: "_2nck8non0VYnkIkyUpuvpw",
				avatarPostImage: "_2yQLdTnHA0y3hZ3I588oUM"
			}
		},
		"./src/reddit/components/BoostPost/BoostPostBanner.m.less": function(e, t, s) {
			e.exports = {
				root: "_1bFyAea2u1QxOQ1F5B4GkN",
				boostPost: "_2HRj2_i58dkRRJQoLcPYos",
				nightRoot: "_1gHnZ35aZq6j7V6-yJI8Ex",
				boostPostIcon: "_3-103Q5oLObJuUD_Kw30cF",
				boostPostTitle: "_1DC_jVf8m3dNMZizsj84j1",
				boostPostSubtitle: "_142PYc7s46KPZKVON3XAN8",
				boostPostText: "_1bYeQt_TV5_-qyJ0ou4R4g",
				boostPostButton: "pSzvw13UmARlu2u6QGtsR",
				boostPostButtonText: "_38B5eqRnC0dTpzLkC_7APC",
				boostPostCloseButton: "_3k7l59W74Y3dHDNBrT9oce",
				boostPostClose: "_9PWeID-JtyhyViXeQFfuq"
			}
		},
		"./src/reddit/components/BoostPost/BoostPostIconButton.m.less": function(e, t, s) {
			e.exports = {
				boostPostIconButton: "_3DV09faePsSW4n6z5V2kj1",
				boostPostIconButtonIconOnly: "ITg0gjNXOhVKsSbURGUvp",
				boostPostTooltipText: "_2q9Jd9uoQVrgF0qTQz8xC1"
			}
		},
		"./src/reddit/components/BoostPost/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return T
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "c", (function() {
				return W
			})), s.d(t, "d", (function() {
				return w
			}));
			var o = s("./src/config.ts"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/icons.ts"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/localStorage/index.ts"),
				p = s("./src/reddit/helpers/trackers/post.ts"),
				u = s("./src/reddit/hooks/useTracking.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/BoostPost/BoostPostBanner.m.less"),
				f = s.n(x),
				v = s("./src/reddit/contexts/PageLayer/index.tsx");
			const O = Object(r.createContext)({
					isEligibleOnPostId: e => !1,
					setVisibleOnPostId: e => {}
				}),
				C = e => {
					let {
						children: t
					} = e;
					const [s, o] = Object(r.useState)(Object(m.h)()), n = Object(r.useRef)(), a = Object(v.ib)(), c = Object(r.useCallback)(e => {
						void 0 === n.current && (n.current = e)
					}, []), d = Object(r.useCallback)(e => !s && (void 0 === n.current || n.current === e), [s]);
					return Object(r.useEffect)(() => {
						const e = () => {
							o(Object(m.h)())
						};
						return window.addEventListener("storage", e), () => {
							window.removeEventListener("storage", e)
						}
					}, []), Object(r.useEffect)(() => {
						(null == a ? void 0 : a.queryParams) && (n.current = void 0)
					}, [a]), i.a.createElement(O.Provider, {
						value: {
							isEligibleOnPostId: d,
							setVisibleOnPostId: c
						}
					}, t)
				};
			var _ = s("./src/reddit/constants/experiments.ts"),
				E = s("./src/reddit/helpers/isCrosspost.ts"),
				g = s("./src/reddit/hooks/useExperimentVariant.ts"),
				j = s("./src/reddit/models/Post/index.ts"),
				k = s("./src/reddit/selectors/posts.ts"),
				I = s("./src/reddit/selectors/profile.ts");
			const w = (e, t) => !(!e || !t || e.authorId !== t.id || e.isNSFW || e.pollData || e.predictionTournament || e.discussionType),
				P = (e, t) => !(!(t && t.hasVerifiedEmail && e) || e.isNSFW || e.isQuarantined),
				y = e => {
					let {
						postId: t,
						user: s,
						hideOverride: o
					} = e;
					var n;
					const i = Object(v.ib)(),
						c = null !== (n = null == i ? void 0 : i.urlParams.profileName) && void 0 !== n ? n : "",
						d = Object(a.e)(e => Object(I.k)(e, {
							profileName: c
						})),
						l = Object(a.e)(e => Object(v.G)(e, {
							pageLayer: i
						})),
						m = Object(a.e)(e => Object(k.G)(e, {
							postId: t
						})),
						p = Object(r.useCallback)(() => !(o || !l || Object(E.a)(m) || !Object(j.s)(m) || !w(m, s) || !P(d, s)), [o, l, m, d, s]),
						u = Object(r.useCallback)(() => !(o || !w(m, s) || !P(d, s)), [o, m, d, s]),
						b = Object(g.a)(_.s, p),
						h = Object(g.a)(_.r, p),
						x = Object(g.a)(_.t, u),
						f = Object(g.a)(_.u, u);
					return {
						canBoostPost: b === _.Qd || h === _.Qd || x === _.Qd || f === _.Qd
					}
				},
				T = e => {
					let {
						postId: t,
						user: s
					} = e;
					const {
						isEligibleOnPostId: o
					} = Object(r.useContext)(O);
					return i.a.createElement(S, {
						postId: t,
						user: s,
						hideOverride: !o(t)
					})
				},
				S = Object(r.memo)(e => {
					let {
						postId: t,
						user: s,
						hideOverride: x
					} = e;
					const {
						setVisibleOnPostId: v
					} = Object(r.useContext)(O), C = Object(u.a)(), _ = Object(a.e)(h.fb), {
						canBoostPost: E
					} = y({
						postId: t,
						user: s,
						hideOverride: x
					});
					Object(r.useEffect)(() => (E && v(t), () => {
						v(void 0)
					}), [E, t, v]), Object(r.useEffect)(() => {
						E && C(Object(p.w)(t))
					}, [E, C, t]);
					const g = Object(r.useCallback)(() => {
							Object(m.mb)(), C(Object(p.a)(t))
						}, [C, t]),
						j = Object(r.useCallback)(e => {
							e.stopPropagation(), Object(m.mb)(), C(Object(p.c)(t))
						}, [C, t]);
					return E ? i.a.createElement("div", {
						className: Object(c.a)(f.a.root, {
							[f.a.nightRoot]: _
						})
					}, i.a.createElement("div", {
						className: f.a.boostPost
					}, i.a.createElement(b.a, {
						name: d.a.promote_snoo,
						className: f.a.boostPostIcon,
						style: {
							fontSize: 24,
							height: 24,
							width: 24
						}
					}), i.a.createElement("div", {
						className: f.a.boostPostText
					}, i.a.createElement("h6", {
						className: f.a.boostPostTitle
					}, n.fbt._("Reach more redditors!", null, {
						hk: "1kAZ0D"
					})), i.a.createElement("p", {
						className: f.a.boostPostSubtitle
					}, n.fbt._("Promote your post with Reddit Ads to reach more people and drive engagement.", null, {
						hk: "22s2iC"
					}))), i.a.createElement(l.t, {
						className: f.a.boostPostButton,
						kind: l.b.ExternalLink,
						priority: l.c.Secondary,
						onClick: g,
						href: `${o.a.adsUiOrigin}/boostPost?postId=${t}&utm_source=d2x_consumer&utm_name=boost_post_banner`,
						target: "_blank",
						Icon: Object(b.b)("external_link_fill", {
							style: {
								fontSize: 16,
								paddingRight: 4
							}
						}),
						text: i.a.createElement("p", {
							className: f.a.boostPostButtonText
						}, n.fbt._("Promote", null, {
							hk: "4fj8yW"
						}))
					}), i.a.createElement("button", {
						className: f.a.boostPostCloseButton,
						onClick: j,
						"aria-label": n.fbt._("Hide", null, {
							hk: "2qpeBI"
						})
					}, i.a.createElement(b.a, {
						className: f.a.boostPostClose,
						name: d.a.close_fill,
						onClick: j,
						style: {
							fontSize: 12,
							lineHeight: "12px",
							height: 12,
							width: 12
						}
					})))) : null
				});
			var N = s("./node_modules/classnames/index.js"),
				M = s.n(N),
				F = s("./src/reddit/components/Flatlist/constants.ts"),
				R = s("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				A = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				L = s("./src/reddit/components/TrackingHelper/index.tsx"),
				B = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				D = s("./src/reddit/components/BoostPost/BoostPostIconButton.m.less"),
				U = s.n(D);
			const W = Object(r.memo)(e => {
				let {
					postId: t,
					user: s,
					userIsOp: a,
					showIconOnly: c
				} = e;
				const l = Object(B.a)(),
					{
						canBoostPost: m
					} = y({
						postId: t,
						user: s
					}),
					u = Object(L.b)();
				Object(r.useEffect)(() => {
					m && u(Object(p.x)(t))
				}, [m, u, t]);
				const h = Object(r.useCallback)(() => {
					u(Object(p.b)(t)), window.open(`${o.a.adsUiOrigin}/boostPost?postId=${t}&utm_source=d2x_consumer&utm_name=boost_post_icon_button`, "_blank")
				}, [u, t]);
				return m ? i.a.createElement("span", {
					onMouseEnter: l.show,
					onMouseLeave: l.hide,
					ref: l.target.ref
				}, i.a.createElement(R.a, {
					iconWrapperClassName: M()(U.a.boostPostIconButton, {
						[U.a.boostPostIconButtonIconOnly]: c
					}),
					displayText: c ? void 0 : n.fbt._("Promote", null, {
						hk: "K797d"
					}),
					flatlistItem: F.a.PromotePost,
					isLoggedIn: !!s,
					isUserOp: a,
					onClick: h
				}, i.a.createElement(b.a, {
					name: d.a.promote_snoo
				})), i.a.createElement(A.a, {
					arrowProps: l.arrowProps,
					popperProps: {
						...l.popperProps,
						style: {
							...l.popperProps.style,
							width: "250px"
						}
					},
					visible: l.visible
				}, n.fbt._("Promote your post with Reddit Ads to reach more people and drive engagement", null, {
					hk: "38gIbE"
				}))) : null
			});
			W.displayName = "BoostPostIconButton"
		},
		"./src/reddit/components/CCM/AddModNoteCTA/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/hooks/useTracking.ts"),
				c = s("./src/reddit/helpers/trackers/modTools.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				u = s("./src/reddit/components/Hovercards/helpers.ts"),
				b = s("./src/reddit/components/PostTopMeta/index.tsx"),
				h = s("./src/reddit/hooks/useIsOverlay.ts"),
				x = s("./src/reddit/models/Post/index.ts"),
				f = s("./src/redditGQL/types.ts");
			const v = Object(l.v)();
			t.a = v(e => {
				let {
					pageLayer: t,
					postOrComment: s,
					className: l
				} = e;
				var v;
				const O = Object(h.a)(),
					C = Object(i.d)(),
					_ = Object(a.a)(),
					E = (null === (v = null == t ? void 0 : t.urlParams) || void 0 === v ? void 0 : v.pageName) === d.xb.Modqueue,
					g = Object(n.useCallback)(() => {
						const e = Object(u.b)({
							itemId: s.id,
							tooltipIdPrefix: p.a,
							tooltipType: O ? b.f.Lightbox : void 0
						});
						C(Object(m.h)({
							tooltipId: e,
							args: {
								isModNotesView: !0,
								modNotesFilter: f.A.Note
							}
						})), _(Object(c.a)(s.id, s.authorId))
					}, [s, C, O, _]);
				return !E || Object(x.p)(s.author) ? null : r.a.createElement("button", {
					className: l,
					onClick: g
				}, o.fbt._("Add a note", null, {
					hk: "1dmmma"
				}))
			})
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				ctaExperiment: "O3tUaKrd54EXILNilEqF_",
				Icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				isLeft: "p8bIdnQ5pQUQRETAyCoa5",
				isRight: "_36ucS75syCWwJ_ee7IieXZ",
				active: "NPw0Z_HL-yJPXnZ3mpWEA",
				redditStyle: "OGOshepc50ul-kJHrocIO",
				rplStyle: "_2sQjgE-zw2MQovQiJwdvVD",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				a = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				c = s("./src/reddit/components/CallToActionButton/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					showCTAExperiment: s,
					...o
				} = e;
				return n.a.createElement(i.b, l({
					className: Object(r.a)(d.a.CallToActionButton, t, {
						[d.a.mNotCardView]: o.isNotCardView,
						[d.a.ctaExperiment]: !!s
					}),
					"data-adclicklocation": a.a.CTA_BUTTON
				}, o))
			}
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				r = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				i = s.n(r);
			const a = o.a.wrapped(n.c, "RestrictedButton", i.a);
			t.a = a
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				RestrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				restrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				Show: "YoaDbMbI8PpFFWQbD_Uwq",
				show: "YoaDbMbI8PpFFWQbD_Uwq",
				CommentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk",
				commentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk"
			}
		},
		"./src/reddit/components/CommentsChat/LiveIcon/index.m.less": function(e, t, s) {
			e.exports = {
				Icon: "_1BLJJHA9oAzG1Rqmf4pcYW",
				icon: "_1BLJJHA9oAzG1Rqmf4pcYW",
				IconText: "_6cNM5NdF82ASM5hiBVNN5",
				iconText: "_6cNM5NdF82ASM5hiBVNN5",
				Animate: "_3j98tX1WZapEArV-4rmJe5",
				animate: "_3j98tX1WZapEArV-4rmJe5",
				top: "_3Dr1MoYY5Yv4YhbQFFcks0",
				bottom: "_1GRYNQhMsR-00cWDJcE3UJ",
				bigCircle: "_85rqvRijdIsn3s0j-gUaw",
				midCircle: "RS1g6Gd_W67wwWKSteEB1",
				smallCircle: "lRlGcfTzZ7njZnIUyvhGH",
				play: "_3Kxa8oHGuT_QpP4zIN5jrV",
				blinker: "_20WvB_9deo7bJVi4af1dSS"
			}
		},
		"./src/reddit/components/CommentsChat/LiveIcon/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var o = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/selectors/chatPost.ts"),
				l = s("./src/reddit/components/CommentsChat/LiveIcon/index.m.less"),
				m = s.n(l);
			const p = e => {
				let {
					className: t,
					postId: s
				} = e;
				const [r, l] = i.a.useState(!1), p = Object(a.e)(e => Object(d.d)(e, {
					postId: s
				})), u = p && r;
				return p ? i.a.createElement(o.a, {
					rootMargin: "20px 0px 20px 0px",
					threshold: .1,
					onChange: e => {
						e.isIntersecting && e.intersectionRatio >= .1 ? r || l(!0) : r && l(!1)
					}
				}, i.a.createElement("div", {
					className: Object(c.a)(m.a.Icon, t)
				}, i.a.createElement("span", {
					className: Object(c.a)(m.a.Animate, m.a.top, {
						[m.a.play]: u
					})
				}, i.a.createElement("span", {
					className: m.a.bigCircle
				}), i.a.createElement("span", {
					className: m.a.midCircle
				}), i.a.createElement("span", {
					className: m.a.smallCircle
				})), i.a.createElement("p", {
					className: m.a.IconText
				}, n.fbt._("Live Chat", null, {
					hk: "gyqAe"
				})), i.a.createElement("span", {
					className: Object(c.a)(m.a.Animate, m.a.bottom, {
						[m.a.play]: u
					})
				}, i.a.createElement("span", {
					className: m.a.bigCircle
				}), i.a.createElement("span", {
					className: m.a.midCircle
				}), i.a.createElement("span", {
					className: m.a.smallCircle
				})))) : null
			}
		},
		"./src/reddit/components/CommentsLink/index.m.less": function(e, t, s) {
			e.exports = {
				commentsLink: "_1UoeAeSRhOKSNdY_h3iS1O",
				commentIcon: "_3DVrpDrMM9NLT6TlsTUMxC",
				defaultCursorWrapper: "_3m17ICJgx45k_z-t82iVuO",
				link: "_1Hw7tY9pMr-T1F4P1C-xNU",
				text: "FHCV02u6Cp2zYL0fhQPsO",
				commentsText: "_25BV1fTi10_HqCnD195T85"
			}
		},
		"./src/reddit/components/CommentsLink/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./node_modules/fbt/lib/FbtPublic.js"),
				p = s("./src/lib/prettyPrintNumber/index.ts"),
				u = s("./src/reddit/components/CountAnimation/index.tsx"),
				b = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				x = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				f = s("./src/reddit/components/CommentsLink/index.m.less"),
				v = s.n(f);
			const O = () => 0,
				C = e => {
					let t, {
						hasModPostPerms: s,
						isCountAnimShadowTestEnabled: i,
						isChatPost: a,
						isCommentCountAnimation: d,
						modModeEnabled: f,
						numComments: C,
						postId: _,
						shouldShowIcon: E,
						shouldShowText: g,
						text: j,
						type: k
					} = e;
					const I = d && C < x.a,
						w = a ? m.fbt._({
							"*": "{number} messages",
							_1: "1 message"
						}, [m.fbt._plural(C, "number", Object(p.b)(C))], {
							hk: "2wEqSc"
						}) : m.fbt._({
							"*": "{number} comments",
							_1: "1 comment"
						}, [m.fbt._plural(C, "number", Object(p.b)(C))], {
							hk: "1QeOde"
						}),
						P = a ? m.fbt._({
							"*": "messages",
							_1: "message"
						}, [m.fbt._plural(C)], {
							hk: "1mMKLS"
						}) : m.fbt._({
							"*": "comments",
							_1: "comment"
						}, [m.fbt._plural(C)], {
							hk: "2fJpkn"
						});
					t = j || (k === b.g.Compact || f && s ? Object(p.b)(C) : w);
					const y = Object(r.d)(),
						T = Object(o.useCallback)(e => {
							const {
								commentCountChange: t
							} = e.subscribe.data;
							0 !== t && y(Object(l.G)({
								postId: _,
								delta: t
							}))
						}, [y, _]),
						S = Object(o.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "COMMENT_COUNT_UPDATE",
									postID: _
								}
							}
						});
					return n.a.createElement(n.a.Fragment, null, E && n.a.createElement(h.a, {
						className: v.a.commentIcon,
						role: "presentation"
					}), g && n.a.createElement(n.a.Fragment, null, n.a.createElement("span", {
						className: v.a.text
					}, (I || i) && n.a.createElement(u.b, {
						countToUpperBound: C,
						incrementDelta: O,
						initialDelay: O,
						initialDisplayCount: C,
						postId: _,
						shouldDisjointAnimation: !0,
						subsequentRecurringDelay: O,
						featureName: u.a.Comment,
						queryKey: "postCommentCount",
						queryVariables: S.current,
						onDataCB: T,
						isLoadTestOnly: Boolean(i) && !I
					}), !I && t), (!f || !s) && I && n.a.createElement("span", {
						className: Object(c.a)(v.a.text, v.a.commentsText)
					}, P)))
				};
			var _ = s("./src/reddit/constants/componentTestIds.ts"),
				E = s("./src/reddit/helpers/path/index.ts"),
				g = s("./src/reddit/hooks/useClickSourceData.ts"),
				j = s("./src/reddit/selectors/chatPost.ts"),
				k = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				I = s("./src/reddit/selectors/experiments/postSeo.ts"),
				w = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				y = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts");
			const T = Object(r.b)(() => Object(a.c)({
				isChatPost: j.d,
				isPostSEOEligible: I.e,
				postPermalink: w.F,
				shouldOpenPostInNewTab: P.lb,
				isBlockingInterstitialEnabled: k.b,
				isBlockingInterstitialV2Enabled: k.c
			}));
			t.a = T(e => {
				let {
					className: t,
					hasModPostPerms: s,
					forceOpenInNewTab: o,
					isChatPost: a,
					isCommentPermalink: m,
					isCommentsPage: p,
					isOverlay: u,
					isPostSEOEligible: b,
					modModeEnabled: h,
					numComments: x,
					onClick: f,
					postPermalink: O,
					shouldOpenPostInNewTab: j,
					shouldShowIcon: k = !0,
					shouldShowText: I = !0,
					text: w,
					type: P,
					postId: T,
					isCommentCountAnimation: S,
					isCountAnimShadowTestEnabled: N,
					isBlockingInterstitialEnabled: M,
					isBlockingInterstitialV2Enabled: F
				} = e;
				const R = Object(r.d)(),
					A = p && !m && !b,
					L = m && !u,
					B = Object(g.a)(),
					D = n.a.createElement(C, {
						hasModPostPerms: s,
						isCountAnimShadowTestEnabled: !!N,
						isChatPost: a,
						isCommentCountAnimation: !!S,
						modModeEnabled: h,
						numComments: x,
						postId: T,
						shouldShowIcon: k,
						shouldShowText: I,
						text: w,
						type: P
					});
				return A ? n.a.createElement("div", {
					className: Object(c.a)(v.a.commentsLink, v.a.defaultCursorWrapper, t),
					onClick: f
				}, D) : n.a.createElement(i.a, {
					rel: "nofollow",
					"data-click-id": "comments",
					"data-adclicklocation": y.b.COMMENTS,
					"data-test-id": _.a,
					className: Object(c.a)(v.a.commentsLink, v.a.link, t),
					target: o || j ? "_blank" : void 0,
					to: L ? Object(E.b)(O) : Object(d.a)(O, !0, B),
					onClick: e => {
						(M || F) && (e.preventDefault(), R(Object(l.X)(Object(E.b)(O), T))), f && f()
					}
				}, D)
			})
		},
		"./src/reddit/components/ContentTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				StyledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				styledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				fadeIn: "_2bkYZH_kJx5pIHW0Ts5P6e",
				caretOnBottom: "_1rF-A55THyDL-rQ9ZUDQ4_",
				caretOnTop: "_1MHCyMQAMeqRqf5DPWWeq3",
				hideCaret: "dExJJiXRwxVrKsDJRWSQl",
				caretOnLeft: "nVD-oexLbZI_4QjhrkLFz",
				caretOnRight: "KRVDnoE1RIC5qyqQLXxGG"
			}
		},
		"./src/reddit/components/ContentTooltip/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/fastdom/index.ts"),
				m = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/selectors/tooltip.ts"),
				b = s("./src/reddit/components/ContentTooltip/index.m.less"),
				h = s.n(b);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const f = {
					height: 200,
					width: 200
				},
				v = e => {
					switch (e) {
						case "top":
							return "bottom";
						case "right":
							return "left";
						case "left":
							return "right";
						case "bottom":
						default:
							return "top"
					}
				},
				O = Object(d.a)(e => {
					const {
						children: t,
						className: s,
						style: o,
						caretPosition: n,
						caretColor: i,
						onClick: a,
						hideCaret: d
					} = e;
					return r.a.createElement("div", {
						onClick: a,
						className: Object(c.a)(s, h.a.StyledTooltipContainer, {
							[h.a.caretOnTop]: "top" === n,
							[h.a.caretOnLeft]: "left" === n,
							[h.a.caretOnRight]: "right" === n,
							[h.a.caretOnBottom]: "bottom" === n,
							[h.a.hideCaret]: d
						}),
						style: {
							...o,
							"--contentTooltip-caretColor": i && i[n] ? i[n] : Object(p.a)(e).body
						}
					}, t)
				}),
				C = Object(a.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(u.b)(s)(e)
					}
				}),
				_ = Object(m.a)(O, [o.a.Click, o.a.Keydown]),
				E = Object(i.b)(C);
			class g extends r.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = f
						} = this.props;
						l.a.read(() => {
							const s = document.getElementById(e);
							if (!s) return;
							const o = s.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let n = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									n = window.innerHeight - o.bottom > t.height;
									break;
								case "left":
									n = o.left > t.width;
									break;
								case "right":
									n = o.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									n = o.top > t.height
							}
							this.setState({
								position: n ? this.props.defaultTooltipPosition : v(this.props.defaultTooltipPosition)
							})
						})
					}, this.state = {
						position: null
					}
				}
				componentDidUpdate(e) {
					!e.isOpen && this.props.isOpen && this.checkAndSetPosition(), e.isOpen && !this.props.isOpen && this.setState({
						position: null
					})
				}
				getPositions(e) {
					switch (e || this.props.defaultTooltipPosition) {
						case "bottom":
							return {
								tooltipPosition: ["center", "top"], targetPosition: ["center", "bottom"], caretPosition: "top"
							};
						case "left":
							return {
								tooltipPosition: ["right", "center"], targetPosition: ["left", "center"], caretPosition: "right"
							};
						case "right":
							return {
								tooltipPosition: ["left", "center"], targetPosition: ["right", "center"], caretPosition: "left"
							};
						case "top":
						default:
							return {
								tooltipPosition: ["center", "bottom"], targetPosition: ["center", "top"], caretPosition: "bottom"
							}
					}
				}
				render() {
					const {
						position: e
					} = this.state, {
						targetPosition: t,
						tooltipPosition: s,
						caretPosition: o
					} = this.getPositions(e);
					return r.a.createElement(_, x({}, this.props, {
						caretPosition: o,
						targetPosition: t,
						tooltipPosition: s
					}))
				}
			}
			t.a = E(g)
		},
		"./src/reddit/components/CreatorStats/Icon.m.less": function(e, t, s) {
			e.exports = {
				icon: "D7SJKwX8OlPkNjhgXO71s"
			}
		},
		"./src/reddit/components/CreatorStats/Icon.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/constants/icons.ts"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/selectors/subreddit.ts"),
				d = s("./src/reddit/components/CreatorStats/helpers.ts"),
				l = s("./src/reddit/components/CreatorStats/Icon.m.less"),
				m = s.n(l);
			t.a = e => {
				let {
					postCreated: t,
					subredditId: s
				} = e;
				const l = Object(i.e)(e => s ? Object(c.X)(e, {
						subredditId: s
					}) : void 0),
					[p, u] = Object(n.useState)(!0);
				return Object(n.useEffect)(() => {
					let e = !0;
					if (void 0 !== t) {
						const s = Object(d.e)(t);
						e = e && !s
					}
					if (void 0 !== l) {
						const t = l.isQuarantined;
						e = e && !t
					}
					u(e)
				}, [t, l]), r.a.createElement(a.a, {
					name: o.a.statistics,
					className: p ? m.a.icon : void 0
				})
			}
		},
		"./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less": function(e, t, s) {
			e.exports = {
				img: "_2j4blQAaYrPKIhe5jBJ9c8"
			}
		},
		"./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less"),
				c = s.n(a),
				d = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				l = s("./src/reddit/selectors/gold/awardIcon.ts"),
				m = s("./src/reddit/selectors/gold/purchaseCatalog.ts");
			t.a = e => {
				const t = Object(r.e)(m.b),
					s = Object(r.e)(e => Object(l.a)(e, {
						award: t,
						minSize: 32
					}));
				return t && s ? n.a.createElement("img", {
					alt: t.name,
					className: Object(i.a)(c.a.img, e.className),
					id: e.id,
					src: s
				}) : n.a.createElement(d.a, e)
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/eventTools/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				m = s("./src/reddit/helpers/postEvent.ts"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				u = s.n(p);
			const b = a.a.div("EventMetaWrapper", u.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					post: o
				} = e;
				if (!Object(m.a)(o)) return null;
				const a = o && o.eventInfo,
					p = Object(l.a)(o),
					h = a && Object(i.c)(a.eventStart, a.eventEnd);
				return n.a.createElement("div", {
					className: Object(r.a)(u.a.container, t, {
						[u.a.isCompact]: !!s
					})
				}, n.a.createElement(b, {
					className: u.a.eventMetaWrapper
				}, n.a.createElement(c.a, {
					post: o
				}), !p && h && n.a.createElement(d.a, {
					className: u.a.eventFollowButton,
					post: o,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/eventTools/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				c = s("./src/reddit/icons/fonts/Live/index.tsx"),
				d = s("./src/reddit/components/HumanDate/index.tsx"),
				l = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				m = s.n(l),
				p = s("./src/lib/lessComponent.tsx");
			const u = p.a.span("PostEventFutureText", m.a),
				b = p.a.span("PostEventPastText", m.a),
				h = p.a.span("PostEventNowText", m.a),
				x = p.a.span("Container", m.a),
				f = p.a.wrapped(a.a, "CalendarIcon", m.a),
				v = p.a.wrapped(c.a, "LiveIcon", m.a),
				O = p.a.div("LoadingState", m.a);
			class C extends o.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						post: t
					} = this.props, {
						eventInfo: s
					} = t;
					if (!s) return null;
					const {
						eventEnd: o,
						eventIsLive: a,
						eventStart: c
					} = s, l = Object(r.e)(c, o);
					let m, p;
					if (this.state.mounted || l === r.a.Live) m = n.a.createElement(d.c, {
						startTime: c,
						endTime: o,
						isLive: a
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						m = n.a.createElement(O, {
							className: e
						})
					}
					if (a) p = n.a.createElement(h, null, n.a.createElement(v, null), m);
					else if (l === r.a.Future) p = n.a.createElement(u, null, n.a.createElement(f, null), m);
					else {
						if (l !== r.a.Past) return null;
						p = n.a.createElement(b, null, n.a.createElement(f, null), m)
					}
					return n.a.createElement(x, {
						className: e
					}, p)
				}
			}
			t.a = C
		},
		"./src/reddit/components/Flatlist/ResponsiveRow.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				a = s("./src/reddit/controls/Dropdown/Row.tsx"),
				c = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				d = s("./src/reddit/components/Flatlist/index.m.less"),
				l = s.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					flatlistItem: t,
					isLoggedIn: s,
					isUserOp: o,
					noBreakpoints: d,
					...p
				} = e;
				return n.a.createElement("div", {
					"data-ignore-click": !!p.searchIgnoreClick,
					className: l.a.rowContainer,
					"data-adclicklocation": c.b.FLATLIST_GENERAL
				}, n.a.createElement(a.a, m({}, p, {
					className: d ? l.a.responsiveRow : Object(r.a)(l.a.responsiveRow, Object(i.b)({
						flatlistItem: t,
						isLoggedIn: s,
						isUserOp: o
					}))
				})))
			}
		},
		"./src/reddit/components/Flatlist/breakpoints.m.less": function(e, t, s) {
			e.exports = {
				HideIfVWSmaller: "_3yh2bniLq7bYr4BaiXowdO",
				hideIfVwSmaller: "_3yh2bniLq7bYr4BaiXowdO",
				FirstGroup: "_2sAFaB0tx4Hd5KxVkdUcAx",
				firstGroup: "_2sAFaB0tx4Hd5KxVkdUcAx",
				LoggedOutVariant: "_3sUJGnemgtNczijwoT8PGg",
				loggedOutVariant: "_3sUJGnemgtNczijwoT8PGg",
				LoggedInVariant: "_28vEaVlLWeas1CDiLuTCap",
				loggedInVariant: "_28vEaVlLWeas1CDiLuTCap",
				OpVariant: "Z-VR19FVnE3nOS0_BU4Wy",
				opVariant: "Z-VR19FVnE3nOS0_BU4Wy",
				EditingGroup: "_1EKOhBHXAW9y8Bgn93c9f3",
				editingGroup: "_1EKOhBHXAW9y8Bgn93c9f3",
				SecondGroup: "_1pShbCnOaF7EGWTq6IvZux",
				secondGroup: "_1pShbCnOaF7EGWTq6IvZux",
				AwardingGroup: "_1EWxiIupuIjiExPQeK4Kud",
				awardingGroup: "_1EWxiIupuIjiExPQeK4Kud",
				HideIfVWLarger: "_1k3nXWGGz2NdPr8dg49Tbs",
				hideIfVwLarger: "_1k3nXWGGz2NdPr8dg49Tbs"
			}
		},
		"./src/reddit/components/Flatlist/constants.ts": function(e, t, s) {
			"use strict";
			var o;
			s.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.EditPost = "EDITPOST", e.EditFlair = "EDITFLAIR", e.Save = "SAVE", e.Gild = "GILD", e.Hide = "HIDE", e.PostOverflowMenu = "POST_OVERFLOW_MENU", e.Report = "REPORT", e.Share = "SHARE", e.ShowFewerLikeThis = "SHOW_FEWER_LIKE_THIS", e.ShowMoreLikeThis = "SHOW_MORE_LIKE_THIS", e.Insights = "INSIGHTS", e.Mute = "MUTE", e.PromotePost = "PROMOTE_POST"
				}(o || (o = {}))
		},
		"./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return m
			}));
			var o, n, r, i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Flatlist/breakpoints.m.less"),
				c = s.n(a),
				d = s("./src/reddit/components/Flatlist/constants.ts");
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(o || (o = {})),
			function(e) {
				e.First = "FirstGroup", e.Editing = "EditingGroup", e.Second = "SecondGroup", e.Awarding = "AwardingGroup"
			}(n || (n = {})),
			function(e) {
				e.LoggedIn = "LoggedInVariant", e.LoggedOut = "LoggedOutVariant", e.Op = "OpVariant"
			}(r || (r = {}));
			const l = {
					[d.a.EditFlair]: n.Editing,
					[d.a.EditPost]: n.Editing,
					[d.a.Gild]: n.Awarding,
					[d.a.Hide]: n.First,
					[d.a.PostOverflowMenu]: n.First,
					[d.a.Report]: n.First,
					[d.a.Save]: n.First,
					[d.a.Share]: n.Second,
					[d.a.ShowFewerLikeThis]: n.First,
					[d.a.ShowMoreLikeThis]: n.First,
					[d.a.Insights]: n.First,
					[d.a.Mute]: n.First,
					[d.a.PromotePost]: n.Second
				},
				m = e => {
					return (e => {
						const t = c.a[e.type],
							s = c.a[e.group],
							o = c.a[e.groupVariant];
						return Object(i.a)(t, s, o)
					})({
						type: e.breakpointType || o.HideIfVWSmaller,
						group: l[e.flatlistItem],
						groupVariant: ((e, t) => e && t ? r.Op : e ? r.LoggedIn : r.LoggedOut)(e.isLoggedIn, e.isUserOp)
					})
				}
		},
		"./src/reddit/components/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				flatlistContainer: "_3-miAEojrCvx_4FQ8x3P-s",
				responsiveRow: "YszYBnnIoNY8pZ6UwCivd",
				rowContainer: "_3U_7i38RDPV5eBv7m4M-9J",
				responsiveRowText: "_70940WUuFmpHbhKlj8EjZ",
				insightsButtonText: "WH45FmM2j_4Snucem7pcm",
				flatlistSeparator: "x7sinePdvDKj7bf-cdm4Z",
				flexSpacer: "_21pmAV9gWG6F_UKVe7YIE0",
				modActionsIcon: "_15c1hqseW25EvRu0WP2Dq5",
				shareText: "_6_44iTtZoeY6_XChKt5b0",
				commentsLink: "_2qww3J5KKzsD7e5DO0BvvU",
				supportButton: "_3NIVQWStkLT7RXnwKpKNuT",
				text: "YCL-CnLJKXzXbwuLZEyh1",
				ShareButton: "kU8ebCMnbXfjCWfqn0WPb",
				shareButton: "kU8ebCMnbXfjCWfqn0WPb",
				shareIcon: "_1GQDWqbF-wkYWbrpmOvjqJ",
				ShareMenu: "_JRBNstMcGxbZUxrrIKXe",
				shareMenu: "_JRBNstMcGxbZUxrrIKXe",
				liveDiscussionWrapper: "_3rnnBQZL1OOttG3tFn629n",
				modLargePost: "_1rz4qmtk19qk1KbsKVMbAq",
				overflowMenuContainer: "_3MmwvEEt6fv5kQPFCVJizH",
				awardIcon: "_3yNNYT3e1avhAAWVHd0-92",
				saveIcon: "_1Xe01txJfRB9udUU85DNeR"
			}
		},
		"./src/reddit/components/Flatlist/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return xe
			})), s.d(t, "a", (function() {
				return fe
			})), s.d(t, "d", (function() {
				return Ee
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/lib/lessComponent.tsx"),
				p = s("./src/lib/ads/index.ts"),
				u = s("./src/lib/timezone/index.ts"),
				b = s("./src/reddit/actions/gold/modals.ts"),
				h = s("./src/reddit/actions/modal.ts"),
				x = s("./src/reddit/actions/post.ts"),
				f = s("./src/reddit/actions/postCreation/editing.ts"),
				v = s("./src/reddit/actions/postFlair.ts"),
				O = s("./src/reddit/actions/reportFlow/index.ts"),
				C = s("./src/reddit/components/BoostPost/index.ts"),
				_ = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				E = s("./src/reddit/components/CommentsLink/index.tsx"),
				g = s("./src/reddit/components/CreatorStats/Icon.tsx"),
				j = s("./src/reddit/components/GiveAwardTooltip/index.tsx"),
				k = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				I = s("./src/reddit/components/ModModeReports/helpers.ts"),
				w = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				P = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				y = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				T = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				S = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				N = s("./src/reddit/components/ShareMenu/index.tsx"),
				M = s("./src/reddit/components/TrackingHelper/index.tsx"),
				F = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				R = s("./src/reddit/constants/postLayout.ts"),
				A = s("./src/reddit/contexts/PageLayer/index.tsx"),
				L = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				B = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				D = s("./src/reddit/selectors/experiments/reportAd.ts"),
				U = s("./src/reddit/selectors/user.ts"),
				W = s("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				V = s("./src/reddit/helpers/correlationIdTracker.ts"),
				G = s("./src/reddit/helpers/trackers/modTools.ts"),
				H = s("./src/reddit/helpers/trackers/post.ts"),
				q = s("./src/reddit/icons/fonts/index.tsx"),
				J = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				K = s("./src/reddit/icons/fonts/Share/index.tsx"),
				Q = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				z = s("./src/reddit/models/PostCreationForm/index.ts"),
				X = s("./src/reddit/models/User/index.ts"),
				Y = s("./src/reddit/components/Flatlist/constants.ts"),
				Z = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				$ = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				ee = s("./src/reddit/actions/postCollection/index.ts"),
				te = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx"),
				se = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx"),
				oe = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx"),
				ne = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				re = s("./src/reddit/selectors/activeModalId.ts"),
				ie = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				ae = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				ce = s("./src/reddit/selectors/experiments/chat.ts"),
				de = s("./src/reddit/components/Flatlist/index.m.less"),
				le = s.n(de);

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			let pe, ue;
			const be = m.a.button("ShareButton", le.a),
				he = m.a.wrapped(N.a, "ShareMenu", le.a),
				xe = Object(l.a)(e => {
					let {
						className: t,
						...s
					} = e;
					return r.a.createElement(J.a, me({}, s, {
						className: Object(c.a)(le.a.modActionsIcon, t),
						style: {
							color: Object(B.a)(Object(L.a)(s), Q.a.actionIcon, Q.b.actionIcon)
						}
					}))
				}),
				fe = e => r.a.createElement("div", me({}, e, {
					className: Object(c.a)(le.a.flatlistSeparator, e.className)
				})),
				ve = Object(A.v)({
					currentProfileName: A.j,
					isCommentPermalink: A.x,
					isCommentsPage: A.y,
					isProfilePostListing: A.N,
					pageLayer: e => e
				}),
				Oe = Object(a.c)({
					activeModalId: re.a,
					claimedFreeAward: ie.b,
					layout: A.U,
					userIsOp: U.Fb,
					subreddit: A.s,
					isReportAnAdEnabled: D.a
				}),
				Ce = Object(i.b)(Oe, (e, t) => {
					let {
						post: o,
						isOverlay: n,
						isCommentsPage: r
					} = t;
					return {
						addPostToCollection: (t, s) => e(Object(ee.a)(t, s)),
						onToggleModal: t => e(Object(h.i)(t)),
						onToggleSave: () => e(Object(x.T)(o.postId)),
						onHide: t => e(Object(x.db)(o.postId, !o.hidden, n, !0)),
						onReportClick: () => e(Object(O.c)(o.postId, n)),
						onEdit: () => {
							const t = !n && !r;
							e(Object(f.a)(o.postId, t))
						},
						onFlairPost: () => e(Object(h.i)(Object(P.b)(o.postId, n))),
						onGildClick: (t, s) => e(Object(b.d)({
							awardId: s,
							correlationId: t,
							thingId: o.postId
						})),
						onFlairChanged: t => {
							let {
								selectedTemplateId: s,
								previewFlair: n
							} = t;
							return e(Object(v.h)({
								post: o,
								selectedTemplateId: s,
								previewFlair: n
							}))
						},
						toggleEditStartTimeModal: async () => {
							pe && ue || ([pe, ue] = await Promise.all([s.e("schedulePickerModal").then(s.bind(null, "./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx")).then(e => e.default), Promise.resolve().then(s.bind(null, "./src/reddit/actions/eventPosts/index.ts")).then(e => e.editEventTimeRequested)])), e(Object(h.i)(Object(z.s)(o.postId, n, z.k.POST_OVERFLOW_MENU)))
						},
						addEventStartTime: t => {
							ue && e(ue(o.id, t))
						}
					}
				}),
				_e = r.a.memo(e => {
					const {
						activeModalId: t,
						addEventStartTime: a,
						className: l,
						currentProfileName: m,
						currentUser: b,
						forceOpenInNewTab: h,
						hasModFlairPerms: x,
						hasModFullPerms: f,
						hasModPostPerms: v,
						isCommentPermalink: O,
						isCommentsPage: N,
						isCountAnimShadowTestEnabled: M,
						isLargePost: A,
						isOverlay: L,
						isProfilePostListing: B,
						isSticky: D,
						layout: U,
						modModeEnabled: J,
						onClickInsightsButton: Q,
						onFlairChanged: ee,
						onIgnoreReports: ne,
						onOpenReportsDropdown: re,
						pageLayer: ie,
						post: de,
						sendEvent: me,
						showEditFlair: ue,
						showEditPost: fe,
						subreddit: ve,
						toggleEditStartTimeModal: Oe,
						tooltipType: Ce,
						userIsOp: _e,
						searchIgnoreClick: ge,
						isCommentCountAnimation: je,
						hostPostData: ke,
						listingKey: Ie,
						onGildClick: we,
						onToggleModal: Pe,
						claimedFreeAward: ye,
						onToggleSave: Te,
						onHide: Se,
						addPostToCollection: Ne,
						onReportClick: Me,
						shouldHideItems: Fe,
						shouldShowInsightsButton: Re,
						isReportAnAdEnabled: Ae
					} = e, Le = Object(i.e)(ce.e), Be = Object(n.useCallback)(async () => {
						const e = Object(V.d)(V.a.GildingFlow, !0);
						we(e, null == ye ? void 0 : ye.id);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						me(t(de.id))
					}, [we, de, me, ye]), De = Object(n.useCallback)(() => {
						t && Pe(t)
					}, [t, Pe]), Ue = Object(n.useCallback)(() => {
						const e = Object(z.t)(de.id, L);
						Pe(e)
					}, [Pe, L, de]), We = Object(n.useCallback)(e => {
						Ne(e.id, de.id).then(() => De())
					}, [Ne, De, de]), Ve = Object(n.useCallback)((e, t) => {
						me(Object(H.n)(de.id, e, L ? "post_detail" : "post", Ie, ke, void 0, null == t ? void 0 : t.referralId))
					}, [ke, L, me, Ie, de]), Ge = Object(n.useCallback)(() => {
						Te(), Ve(de.saved ? "unsave" : "save")
					}, [Te, de, Ve]), He = Object(n.useCallback)(() => {
						Se(!!de.hidden), Ve(de.hidden ? "unhide" : "hide")
					}, [Se, de, Ve]), qe = Object(n.useCallback)(() => {
						Me(), Ve("report")
					}, [Me, Ve]), Je = Object(n.useMemo)(() => r.a.createElement(be, {
						"data-click-id": "share",
						"data-adclicklocation": ae.b.FLATLIST_SHARE
					}, r.a.createElement(K.a, {
						className: le.a.shareIcon
					}), r.a.createElement("span", {
						className: le.a.shareText
					}, o.fbt._("share", null, {
						hk: "1eAfZg"
					}))), []), Ke = !!b && Object(X.e)(b) === de.author, Qe = Object($.a)("View--Reports", de.id, Ce), ze = Object($.a)(d.xc, de.id, Ce), Xe = Object(I.c)(de), Ye = Ee("-mod-actions-menu", de.id, L, D), Ze = Object(I.a)(de), $e = de.postId, et = U === R.g.Large, tt = !N && et || v && J || Fe, st = !(L || N || O), ot = !de.authorIsBlocked && b && de.isGildable && !de.authorIsBlocked && !de.unrepliableReason, nt = !!de.recommendationContext, rt = de.isSponsored || Object(p.u)(ie);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(c.a)(le.a.flatlistContainer, l)
					}, r.a.createElement(E.a, {
						className: Object(c.a)(le.a.rowContainer, le.a.commentsLink),
						forceOpenInNewTab: h,
						hasModPostPerms: v,
						isCommentsPage: N,
						isCommentPermalink: O,
						isOverlay: L,
						postId: de.id,
						modModeEnabled: J,
						numComments: de.numComments,
						isCommentCountAnimation: je,
						isCountAnimShadowTestEnabled: M
					}), ot && r.a.createElement(r.a.Fragment, null, r.a.createElement(W.a, {
						displayText: o.fbt._("Award", null, {
							hk: "2fZCpE"
						}),
						textClassName: le.a.responsiveRowText,
						flatlistItem: Y.a.Gild,
						isLoggedIn: !!b,
						isUserOp: _e,
						onClick: Be,
						searchIgnoreClick: ge,
						"data-adclicklocation": ae.b.FLATLIST_AWARD,
						skipRoleAttr: !0
					}, r.a.createElement(te.a, {
						className: le.a.awardIcon,
						id: ze
					})), r.a.createElement(j.a, {
						postOrComment: de,
						tooltipId: ze
					})), r.a.createElement(he, {
						className: Object(c.a)(le.a.rowContainer, Object(Z.b)({
							flatlistItem: Y.a.Share,
							isLoggedIn: !!b,
							isUserOp: _e
						})),
						dropdownId: Ee("-share-menu", de.id, L, D),
						permalink: de.permalink,
						post: de,
						sendEventWithName: Ve,
						subredditType: null == ve ? void 0 : ve.type
					}, Je), fe && !tt && r.a.createElement(W.a, {
						displayText: o.fbt._("Edit post", null, {
							hk: "Jq2Cr"
						}),
						textClassName: le.a.responsiveRowText,
						flatlistItem: Y.a.EditPost,
						isLoggedIn: !!b,
						isUserOp: _e,
						onClick: e.onEdit,
						skipRoleAttr: !0
					}, r.a.createElement(q.a, {
						name: "edit"
					})), (!v || !J) && r.a.createElement(W.a, {
						displayText: de.saved ? o.fbt._("unsave", null, {
							hk: "4Dn4IT"
						}) : o.fbt._("save", null, {
							hk: "3NOMst"
						}),
						textClassName: le.a.responsiveRowText,
						flatlistItem: Y.a.Save,
						isLoggedIn: !!b,
						isUserOp: _e,
						onClick: Ge,
						searchIgnoreClick: ge,
						skipRoleAttr: !0,
						"data-adclicklocation": ae.b.FLATLIST_SAVE
					}, r.a.createElement(q.a, {
						name: de.saved ? "saved" : "save",
						className: le.a.saveIcon
					})), !rt && !tt && r.a.createElement(W.a, {
						displayText: de.hidden ? o.fbt._("unhide", null, {
							hk: "151XLs"
						}) : o.fbt._("hide", null, {
							hk: "4AnA6R"
						}),
						textClassName: le.a.responsiveRowText,
						flatlistItem: Y.a.Hide,
						isLoggedIn: !!b,
						isUserOp: _e,
						onClick: He,
						searchIgnoreClick: ge,
						skipRoleAttr: !0
					}, r.a.createElement(q.a, {
						name: "hide",
						isFilled: de.hidden
					})), !Ke && (!rt || Ae) && !tt && r.a.createElement(W.a, {
						displayText: o.fbt._("report", null, {
							hk: "1phfns"
						}),
						textClassName: le.a.responsiveRowText,
						flatlistItem: Y.a.Report,
						isLoggedIn: !!b,
						isUserOp: _e,
						onClick: qe,
						searchIgnoreClick: ge,
						skipRoleAttr: !0
					}, r.a.createElement(q.a, {
						name: "report"
					})), r.a.createElement(w.a, {
						isOverlay: L,
						layout: U,
						modModeEnabled: J,
						post: de,
						sendEvent: me
					}), v && r.a.createElement(k.a, {
						dropdownId: Ye,
						onClick: () => me(Object(H.n)(de.id, "post_mod_action_menu"))
					}, r.a.createElement(xe, null), r.a.createElement(y.a, {
						canEditFlair: x && !!ue,
						hasModFullPerms: f,
						hasModPostPerms: v,
						isOverlay: !!L,
						isPostAuthor: Ke,
						modModeEnabled: J,
						post: de,
						tooltipId: Ye
					})), v && Xe && !J && r.a.createElement(S.c, {
						text: `${Ze}`,
						onClick: () => {
							re(Qe), me(Object(H.n)(de.id, "post_report_menu"))
						},
						id: Qe
					}, r.a.createElement(F.a, {
						model: de,
						onIgnoreReports: () => {
							ne(), me(Object(G.o)(de.ignoreReports ? "restore_reports" : "ignore_reports", de.id))
						},
						tooltipId: Qe
					}), r.a.createElement(q.a, {
						className: le.a.icon,
						name: de.ignoreReports ? "ignore_reports" : "report"
					})), Re && r.a.createElement(W.a, {
						displayText: o.fbt._("Insights", null, {
							hk: "2IyDq5"
						}),
						textClassName: Object(c.a)(le.a.responsiveRowText, le.a.insightsButtonText),
						flatlistItem: Y.a.Insights,
						isLoggedIn: !!b,
						isUserOp: _e,
						onClick: Q,
						skipRoleAttr: !0
					}, r.a.createElement(g.a, {
						postCreated: de.created,
						subredditId: de.belongsTo.id
					})), A && Object(C.d)(de, b) && r.a.createElement(C.c, {
						postId: de.id,
						user: b,
						userIsOp: _e,
						showIconOnly: v && J
					}), (!rt || Ae) && r.a.createElement("div", {
						className: le.a.overflowMenuContainer
					}, r.a.createElement(T.a, {
						currentProfileName: m,
						dropdownId: Ee("-overflow-menu", de.id, L, D),
						ignoreOverflowMenuBreakpoints: Fe,
						isCommentsPage: N,
						isFixed: D,
						isOverlay: !!L,
						isProfilePostListing: B,
						isRecommendationPost: nt,
						layout: U,
						modModeWithPost: J && v,
						onClickInsightsButton: Q,
						pageLayer: ie,
						permalink: de.permalink,
						postId: $e,
						sendEvent: me,
						shouldShowInsightsButton: Re,
						showEditPost: !!fe,
						showEditFlair: !!ue,
						useFlatlistBreakpoints: e.useFlatlistBreakpoints,
						toggleAddEventStartTimeModal: Oe,
						toggleEditStartTimeModal: Oe
					})), t === Object(z.t)(de.id, L) && r.a.createElement(se.a, {
						subredditId: de.belongsTo.id,
						onClose: De,
						postId: de.id,
						onSelectCollection: We,
						titleText: o.fbt._("Add post to a collection", null, {
							hk: "38vSyF"
						}),
						onItemHoverActionText: o.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						isOverlay: L
					}), t === Object(z.s)(de.id, L, z.k.POST_OVERFLOW_MENU) && pe && r.a.createElement(pe, {
						onChange: a,
						onClose: Oe,
						schedule: Object(u.c)(de),
						shouldShowDeleteButton: !1
					}), t === Object(z.u)(de.id, L) && r.a.createElement(oe.a, {
						onCancel: Ue,
						onCollectionCreated: We,
						subredditId: de.belongsTo.id
					}), t === Object(P.b)(de.id, L) && r.a.createElement(P.a, {
						flairs: de.flair,
						subredditId: de.belongsTo.id,
						modalId: Object(P.b)(de.id, L),
						onFlairChanged: ee
					}), r.a.createElement("div", {
						className: le.a.flexSpacer
					})), st && !Le && r.a.createElement(_.a, {
						className: Object(c.a)(le.a.liveDiscussionWrapper, {
							[le.a.modLargePost]: A && v
						}),
						postId: de.postId
					}))
				});
			_e.displayName = "Flatlist";
			const Ee = (e, t, s, o) => {
					let n = t;
					return s && (n += "-overlay"), o && (n += "-sticky"), n += e
				},
				ge = ve(Ce(Object(M.c)(_e)));
			t.c = r.a.memo((function(e) {
				const t = Object(ne.a)();
				return r.a.createElement(ge, me({}, e, {
					searchIgnoreClick: t
				}))
			}))
		},
		"./src/reddit/components/GiveAwardTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_17AlFvm1kWw8NYe0FZKlMB",
				newBadge: "_18TPfQgPhTmXJ8270Nc5nM",
				text: "_26N1OuVJykHlztxQkPEfqb",
				freeAwardTooltip: "_1C7AEhBd1Od4VDczirG0jB",
				freeAwardContainer: "P0AA_X8_E-4IwAxzn2uke"
			}
		},
		"./src/reddit/components/GiveAwardTooltip/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/hooks/useTracking.ts"),
				a = s("./src/reddit/helpers/trackers/freeAwardOffer.ts"),
				c = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				d = s("./src/reddit/components/ContentTooltip/index.tsx"),
				l = s("./src/reddit/components/GiveAwardTooltip/index.m.less"),
				m = s.n(l);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				const {
					tooltipId: t
				} = e, s = Object(r.e)(c.b), l = Object(i.a)();
				return Object(o.useEffect)(() => {
					s && l(Object(a.c)())
				}, [s, l]), s ? n.a.createElement(d.a, {
					className: m.a.freeAwardTooltip,
					caretColor: {
						bottom: "#F6481E"
					},
					tooltipSizeEstimate: {
						height: 48,
						width: 148
					},
					tooltipId: t,
					defaultTooltipPosition: "top"
				}, n.a.createElement("div", {
					className: m.a.freeAwardContainer
				}, p._("Tap to give your {award name} Award", [p._param("award name", s.name)], {
					hk: "2EMqbP"
				}))) : null
			}
		},
		"./src/reddit/components/ModActionsMenu/index.m.less": function(e, t, s) {
			e.exports = {
				ModActionsMenu: "_28noJDp6DzFWESejYQdpcD",
				modActionsMenu: "_28noJDp6DzFWESejYQdpcD"
			}
		},
		"./src/reddit/components/ModActionsMenu/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				d = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				l = s("./src/reddit/selectors/tooltip.ts"),
				m = s("./src/reddit/components/ModActionsMenu/index.m.less"),
				p = s.n(m);
			const u = Object(i.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(l.b)(s)(e)
					}
				}),
				b = Object(r.b)(u, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(a.h)({
							tooltipId: s
						}))
					}
				}),
				h = () => null;
			t.a = b(e => n.a.createElement("div", {
				className: p.a.ModActionsMenu,
				id: e.dropdownId,
				onClick: e.dropdownIsOpen ? h : e.onClick
			}, e.inCommentFlatlist ? n.a.createElement(c.a, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children) : n.a.createElement(d.c, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children)))
		},
		"./src/reddit/components/ModModeBanners/index.m.less": function(e, t, s) {
			e.exports = {
				banner: "_3FJq-cq7boH_EAWZsUPWY0",
				icon: "_1QOFlf2Sv2RU3pPqUKD6UD",
				staticBanner: "_14wV0QXuPq6IJL_pdl8sQs"
			}
		},
		"./src/reddit/components/ModModeFilteredReason/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./src/reddit/models/ModQueueTrigger/index.ts");
			const n = e => (e => !e.isApproved && !!Object(o.b)(e, o.a.AUTOMOD))(e) || (e => !e.isApproved && !!Object(o.b)(e, o.a.BAN_EVASION))(e) || (e => !e.isApproved && !!Object(o.b)(e, o.a.CROWD_CONTROL))(e) || (e => !e.isApproved && !!Object(o.b)(e, o.a.HATEFUL_CONTENT))(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/components/ModModeBanners/index.m.less"),
				c = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(n.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), m = Object(o.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModModeBanners").then(s.bind(null, "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx"
				}
			}, {
				fallback: i.a.createElement(l, null),
				ssr: !1
			});
			t.a = m
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			const o = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				n = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				r = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/components/ModModeBanners/index.m.less"),
				c = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(n.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading reports…", null, {
				hk: "4gwdQw"
			})), m = Object(o.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModModeBanners").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeReports/_ModModeReports.tsx"
				}
			}, {
				fallback: i.a.createElement(l, null),
				ssr: !1
			});
			t.a = m
		},
		"./src/reddit/components/ModToolsFlatlist/breakpoints.m.less": function(e, t, s) {
			e.exports = {
				HideIfVWSmaller: "_3_rOJpfw54EqNa6daNkKzY",
				hideIfVwSmaller: "_3_rOJpfw54EqNa6daNkKzY",
				ApproveGroup: "LoIAKSBD5_isA5qtrC3Kt",
				approveGroup: "LoIAKSBD5_isA5qtrC3Kt",
				DefaultVariant: "_1LDTBaBSnv4jL7lV98ayQL",
				defaultVariant: "_1LDTBaBSnv4jL7lV98ayQL",
				CompactVariant: "_2SLG9GIeu2AqBhz2XpW8ow",
				compactVariant: "_2SLG9GIeu2AqBhz2XpW8ow",
				ClassicVariant: "_1u3Z1cqZ8_083AStFVo71a",
				classicVariant: "_1u3Z1cqZ8_083AStFVo71a",
				RemoveGroup: "_3LzZxt89CjBbx__WYlCPCh",
				removeGroup: "_3LzZxt89CjBbx__WYlCPCh",
				SpamGroup: "_2WaHNFliLea9SKyF3nlBx8",
				spamGroup: "_2WaHNFliLea9SKyF3nlBx8",
				FlairGroup: "_129dedXMiIcel_grUelwoG",
				flairGroup: "_129dedXMiIcel_grUelwoG",
				HideIfVWLarger: "_1RO0TIeDG89QPdOWgZwUvR",
				hideIfVwLarger: "_1RO0TIeDG89QPdOWgZwUvR",
				ButtonTextWrapper: "_2xZQ73fYkUDMcVkB0PnaU9",
				buttonTextWrapper: "_2xZQ73fYkUDMcVkB0PnaU9"
			}
		},
		"./src/reddit/components/ModToolsFlatlist/constants.ts": function(e, t, s) {
			"use strict";
			var o;
			s.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.Flair = "FLAIR", e.Spam = "SPAM", e.Remove = "REMOVE", e.Approve = "APPROVE"
				}(o || (o = {}))
		},
		"./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "c", (function() {
				return x
			}));
			var o, n, r, i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				c = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/components/ModToolsFlatlist/breakpoints.m.less"),
				l = s.n(d),
				m = s("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				p = s.n(m);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(o || (o = {})),
			function(e) {
				e.Approve = "ApproveGroup", e.Remove = "RemoveGroup", e.Spam = "SpamGroup", e.Flair = "FlairGroup"
			}(n || (n = {})),
			function(e) {
				e.Classic = "ClassicVariant", e.Compact = "CompactVariant", e.Default = "DefaultVariant"
			}(r || (r = {}));
			const u = {
					[a.a.Approve]: n.Approve,
					[a.a.Remove]: n.Remove,
					[a.a.Spam]: n.Spam,
					[a.a.Flair]: n.Flair
				},
				b = {
					[c.g.Classic]: r.Classic,
					[c.g.Compact]: r.Compact,
					[c.g.Large]: r.Default,
					[c.g.Medium]: r.Default,
					[c.g.Search]: r.Default
				},
				h = e => {
					const t = u[e.flatlistItem],
						s = e.postLayout && b[e.postLayout],
						o = l.a[e.breakpointType],
						n = l.a[t],
						a = s ? l.a[s] : l.a[r.Default];
					return Object(i.a)(o, n, a)
				},
				x = e => {
					const t = e && b[e],
						s = t ? l.a[t] : l.a[r.Default];
					return Object(i.a)(s, p.a.ButtonTextWrapper, l.a.ButtonTextWrapper)
				}
		},
		"./src/reddit/components/ModToolsFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				container: "OccjSdFd6HkHhShRg6DOl",
				tooltip: "_2a9swcTo72vLia4mUm08Fk",
				ButtonTextWrapper: "_3kA8j4bWXyfQV-T-H2dkNq",
				buttonTextWrapper: "_3kA8j4bWXyfQV-T-H2dkNq"
			}
		},
		"./src/reddit/components/ModToolsFlatlist/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return R
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				b = s("./src/reddit/components/ModModeReports/helpers.ts"),
				h = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				x = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				f = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				C = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				E = s("./src/reddit/selectors/activeModalId.ts"),
				g = s("./src/reddit/selectors/moderatorPermissions.ts"),
				j = s("./src/reddit/selectors/postFlair.ts"),
				k = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				I = s("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				w = s("./src/lib/constants/index.ts"),
				P = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				y = s("./src/reddit/components/ModalStyledComponents/MessageBox.tsx"),
				T = s("./src/reddit/hooks/useTracking.ts"),
				S = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				N = s("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				M = s.n(N);
			const F = e => {
					let {
						className: t,
						textClassName: s,
						isOverlay: n,
						iconOnly: a,
						post: c
					} = e;
					const [d, u] = r.a.useState(!1), [b, h] = r.a.useState(!1), f = Object(T.a)(), O = Object(i.d)(), {
						isPrediction: C,
						resolvedOptionId: _,
						totalVoteCount: E
					} = c.pollData || {}, g = () => {
						u(!1), O(Object(l.S)(c.id, !1)), c.isRemoved && c.bannedBy === w.m ? f(Object(v.n)(c.id, "confirm_remove")) : f(Object(v.n)(c.id, "remove"))
					}, j = ((e, t) => e ? t === w.m ? o.fbt._("Confirm removal", null, {
						hk: "1t5tKM"
					}) : o.fbt._("removed", null, {
						hk: "35ZTch"
					}) : o.fbt._("remove", null, {
						hk: "3LWMcS"
					}))(c.isRemoved, c.bannedBy), k = R("Remove", c.id, n), I = () => a && O(Object(m.h)({
						tooltipId: k
					})), N = r.a.useMemo(() => E ? 1 === E ? o.fbt._("Removing this post will cancel the 1 prediction that has already been made.", null, {
						hk: "hVYeT"
					}) : o.fbt._("Removing this post will cancel the {votedUsersCount} predictions that have already been made.", [o.fbt._param("votedUsersCount", E.toString())], {
						hk: "47oACN"
					}) : o.fbt._("Removing this post will cancel any predictions that have already been made.", null, {
						hk: "26cLeP"
					}), [E]);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(x.d, {
						className: t,
						textClassName: s,
						id: k,
						text: a ? void 0 : j,
						disabled: c.isRemoved && c.bannedBy !== w.m,
						onMouseEnter: I,
						onMouseLeave: I,
						onClick: () => {
							C ? _ ? h(!0) : u(!0) : g()
						}
					}, r.a.createElement(S.a, {
						desc: a ? j : void 0
					}), a && r.a.createElement(p.c, {
						className: M.a.tooltip,
						tooltipId: k,
						text: j
					})), b && r.a.createElement(y.a, {
						title: o.fbt._("This post can't be removed", null, {
							hk: "2GbryD"
						}),
						body: o.fbt._("Sorry about that. Once a prediction has been resolved, you can't remove the post.", null, {
							hk: "3wgNhQ"
						}),
						onClose: () => h(!b)
					}), d && r.a.createElement(P.a, {
						withOverlay: !0,
						modalText: N,
						actionText: o.fbt._("Remove", null, {
							hk: "2DXJl4"
						}),
						headerText: o.fbt._("Are you sure?", null, {
							hk: "3CJLRE"
						}),
						onConfirm: g,
						onOverlayClick: () => u(!d),
						toggleModal: () => u(!d)
					}))
				},
				R = function(e, t) {
					let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return `ModToolsFlatlist-${e}${t}${s?"inOverlay":""}`
				},
				A = (e, t) => Object(I.b)({
					breakpointType: I.a.HideIfVWSmaller,
					flatlistItem: e,
					postLayout: t
				}),
				L = Object(i.b)(() => Object(a.c)({
					activeModalId: E.a,
					canEditFlair: (e, t) => {
						let {
							post: s
						} = t;
						return Object(j.a)(e, {
							postId: s.id
						})
					},
					moderatorPermissions: (e, t) => Object(g.m)(e, {
						postId: t.post.id
					})
				}), (e, t) => {
					let {
						post: s
					} = t;
					return {
						onApprovePost: () => e(Object(l.r)(s.id)),
						onOpenPostModModeDropdown: t => e(Object(m.h)({
							tooltipId: t
						})),
						onSpamPost: () => e(Object(l.S)(s.id, !0)),
						onFlairPost: t => () => e(Object(d.i)(t))
					}
				});
			t.a = L(e => {
				const {
					canEditFlair: t,
					className: s,
					isOverlay: a,
					layout: d,
					moderatorPermissions: l,
					modModeEnabled: E,
					onApprovePost: g,
					onFlairPost: j,
					onSpamPost: w,
					post: P,
					sendEvent: y,
					showIconsOnly: T
				} = e, S = Object(i.d)(), N = Object(f.a)(l), L = Object(b.b)(P), B = !(!P.approvedBy || !L), D = Object(h.b)(P.id, a), U = N && E && !P.isSponsored, W = t && E, V = ((e, t) => e ? o.fbt._("reapprove", null, {
					hk: "OJvB1"
				}) : t ? o.fbt._("approved", null, {
					hk: "2bWAFI"
				}) : o.fbt._("approve", null, {
					hk: "2DIHcM"
				}))(B, P.approvedBy), G = (e => e ? o.fbt._("spammed", null, {
					hk: "3GPrkZ"
				}) : o.fbt._("spam", null, {
					hk: "3ebJLg"
				}))(P.isSpam), H = R("Approve", P.id, a), q = R("Spam", P.id, a), J = () => T && S(Object(m.h)({
					tooltipId: H
				})), K = () => T && S(Object(m.h)({
					tooltipId: q
				})), Q = a ? void 0 : d;
				return r.a.createElement("div", {
					className: Object(c.a)(M.a.container, s)
				}, U && r.a.createElement(n.Fragment, null, r.a.createElement(x.b, {
					className: A(k.a.Approve, Q),
					key: "approveButton",
					text: T ? void 0 : V,
					textClassName: Object(I.c)(Q),
					disabled: !!P.approvedBy && !L,
					id: H,
					onMouseEnter: J,
					onMouseLeave: J,
					onClick: () => {
						g(), y(Object(v.n)(P.id, "approve"))
					}
				}, r.a.createElement(O.a, {
					desc: T ? V : void 0
				}), T && r.a.createElement(p.c, {
					className: M.a.tooltip,
					tooltipId: H,
					text: V
				})), r.a.createElement(F, {
					className: A(k.a.Remove, Q),
					textClassName: Object(I.c)(Q),
					isOverlay: a,
					iconOnly: T,
					post: P
				}), r.a.createElement(x.d, {
					className: A(k.a.Spam, Q),
					key: "removeSpamButton",
					text: T ? void 0 : G,
					textClassName: Object(I.c)(Q),
					disabled: P.isSpam,
					id: q,
					onMouseEnter: K,
					onMouseLeave: K,
					onClick: () => {
						w(), y(Object(v.n)(P.id, "spam"))
					}
				}, r.a.createElement(C.a, {
					desc: T ? G : void 0
				}), T && r.a.createElement(p.c, {
					className: M.a.tooltip,
					tooltipId: q,
					text: G
				}))), W && r.a.createElement(x.c, {
					className: A(k.a.Flair, Q),
					key: "tagButton",
					onClick: () => {
						j(D)(), y(Object(v.n)(P.id, "post_flair_picker"))
					}
				}, r.a.createElement(_.a, null)), r.a.createElement(u.f, null))
			})
		},
		"./src/reddit/components/ModalStyledComponents/MessageBox.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/higherOrderComponents/asModal/index.tsx"),
				a = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/controls/TextButton/index.tsx"),
				d = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(i.a)(e => {
					let {
						title: t,
						body: s,
						actionText: n = o.fbt._("OK", null, {
							hk: "1eo6HO"
						}),
						onClose: i
					} = e;
					return r.a.createElement(a.e, null, r.a.createElement(a.i, null, r.a.createElement(d.a, null, r.a.createElement(a.q, null, t), r.a.createElement(c.a, {
						onClick: i
					}, r.a.createElement(a.b, null)))), r.a.createElement(a.l, null, r.a.createElement(a.p, null, s)), r.a.createElement(a.g, null, r.a.createElement(a.u, {
						"data-redditstyle": !0,
						onClick: i
					}, n)))
				}),
				p = e => r.a.createElement(m, l({
					withOverlay: !0,
					onOverlayClick: e.onClose
				}, e))
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/Row.tsx"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/selectors/tooltip.ts"),
				x = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				f = s("./src/reddit/components/OverflowMenu/index.m.less"),
				v = s.n(f);
			const O = d.a.wrapped(p.a, "_Dropdown", v.a),
				C = Object(m.a)(O),
				_ = d.a.button("MenuButton", v.a),
				E = d.a.wrapped(u.b, "DropdownRow", v.a),
				g = Object(a.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(h.b)(s)(e)
					}
				}),
				j = Object(i.b)(g, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: s
						}))
					}
				}),
				k = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = j(e => r.a.createElement(_, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": o.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[v.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: k(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId,
				"data-adclicklocation": x.b.OVERFLOW_MENU
			}, e.icon ? e.icon : r.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: v.a.MenuIcon
			}), r.a.createElement(C, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, s) {
			e.exports = {
				adminIcon: "_1cje4rrmwL0yZgCOlGyBJ-",
				approveIcon: "_1knR9NIIXdSFC9IeFN11JL",
				automoderator: "_2etEb_0bRB9axAqF3uX28S",
				icon: "_3vju76MdF2FaGmELBeiJ_r",
				lockIcon: "_3wTfn3Meg1rXJ-qd2jUWMt",
				modIcon: "_SMl46gACTEszA_4A0Qfs",
				removeIcon: "_3yuF1RnBRJL4OS_STsoXcC",
				reportIcon: "_3guZWUAROueft8TPPGDZ-R",
				spamIcon: "_2BWw37nLL0rX6n7xcXciyD",
				stickyIcon: "NI8uZ-19oHf9gPO8jOvFu",
				addRemovalReason: "COGitU-ItwLZG_fP5rsdE",
				isRemoved: "_27iLVqax1FuPWTymkSkKAq",
				archivedIcon: "_2WSiH2JwZq4bXuvrDn-cgU",
				removalReason: "_16Ih3bzeELRlI6AWeW-nFy"
			}
		},
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				p = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				u = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/helpers/isRemoved.ts"),
				f = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				v = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				O = s("./src/reddit/icons/fonts/index.tsx"),
				C = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				E = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				g = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				j = s("./src/reddit/icons/fonts/Report/index.tsx"),
				k = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				I = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				w = s("./src/reddit/models/Post/index.ts"),
				P = s("./src/reddit/selectors/modQueue.ts"),
				y = s("./src/reddit/selectors/posts.ts"),
				T = s("./src/reddit/components/PostBadges/index.m.less"),
				S = s.n(T);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const M = e => r.a.createElement("span", N({
					className: S.a.removalReason
				}, e), e.children),
				F = () => o.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				R = () => o.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				A = e => o.fbt._("Moderator of {community name}", [o.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				L = () => o.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				B = () => o.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				D = (e, t, s) => {
					const o = `PostBadges--${e}--${t}`;
					return s ? `${o}--${s}` : o
				},
				U = Object(h.v)({
					isProfilePostListing: h.N,
					isSubreddit: h.Q
				}),
				W = Object(a.c)({
					isModQueueDisplayEnabled: e => {
						const t = u.e[Object(h.U)(e, {})] === u.d.Card;
						return Object(P.b)(e, t)
					},
					isPinned: (e, t) => {
						let {
							post: s
						} = t;
						return Object(y.q)(e, {
							postId: s.id
						})
					},
					modModeEnabled: h.W
				}),
				V = Object(i.b)(W, (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenRemovalReasonModal: () => {
						Promise.all([s.e("Reddit~RichTextEditor~reddit-components-MediumPost~reddit-components-NotificationUnit-Button~removal~87f825ba"), s.e("removalReasonActions")]).then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(l.f)({
						tooltipId: t
					}))
				}));
			t.a = U(V(e => {
				let {
					className: t,
					displayText: s,
					isSubreddit: i,
					inSubredditOrProfile: a,
					isCompactPinnedPost: l,
					isPinned: u,
					isProfilePostListing: h,
					modModeEnabled: P,
					onHideTooltip: y,
					onOpenRemovalReasonModal: T,
					onShowTooltip: U,
					post: W,
					tooltipType: V,
					isModQueueDisplayEnabled: G
				} = e;
				const H = {
						caretOnTop: !1
					},
					q = W.isRemoved && !W.modRemovalReason && !W.modNote && W.belongsTo.type === b.a.SUBREDDIT,
					J = D("Approve", W.id, V),
					K = D("Archived", W.id, V),
					Q = D("Lock", W.id, V),
					z = D("Mod", W.id, V),
					X = D("Remove", W.id, V),
					Y = D("Report", W.id, V),
					Z = D("Spam", W.id, V),
					$ = D("Sticky", W.id, V),
					ee = D("Pinned", W.id, V);
				return r.a.createElement("div", {
					className: t
				}, a && s && W.distinguishType === d.J.MODERATOR && r.a.createElement(n.Fragment, null, r.a.createElement(O.a, {
					name: "mod",
					isFilled: !0,
					className: Object(c.a)(S.a.icon, S.a.modIcon)
				}), r.a.createElement(m.c, N({
					tooltipId: z,
					text: A(s)
				}, H))), W.isArchived && r.a.createElement(n.Fragment, null, r.a.createElement(_.a, {
					isFilled: !0,
					className: Object(c.a)(S.a.icon, S.a.archivedIcon),
					desc: F(),
					id: K,
					onMouseEnter: U(K),
					onMouseLeave: y
				}), r.a.createElement(m.c, N({
					tooltipId: K,
					text: F()
				}, H))), W.isLocked && !W.isSponsored && r.a.createElement(n.Fragment, null, r.a.createElement(E.a, {
					isFilled: !0,
					className: Object(c.a)(S.a.icon, S.a.lockIcon),
					desc: R(),
					id: Q,
					onMouseEnter: U(Q),
					onMouseLeave: y
				}), r.a.createElement(m.c, N({
					tooltipId: Q,
					text: R()
				}, H))), i && Object(w.v)(W) && !l && r.a.createElement(n.Fragment, null, r.a.createElement(I.a, {
					isFilled: !0,
					className: Object(c.a)(S.a.icon, S.a.stickyIcon),
					desc: L(),
					id: $,
					onMouseEnter: U($),
					onMouseLeave: y
				}), r.a.createElement(m.c, N({
					tooltipId: $,
					text: L()
				}, H))), h && u && r.a.createElement(n.Fragment, null, r.a.createElement(I.a, {
					isFilled: !0,
					className: Object(c.a)(S.a.icon, S.a.stickyIcon),
					desc: B(),
					id: ee,
					onMouseEnter: U(ee),
					onMouseLeave: y
				}), r.a.createElement(m.c, N({
					tooltipId: ee,
					text: B()
				}, H))), !G && r.a.createElement(r.a.Fragment, null, (W.isApproved || W.approvedBy) && r.a.createElement(n.Fragment, null, r.a.createElement(C.a, {
					isFilled: !0,
					className: Object(c.a)(S.a.icon, S.a.approveIcon),
					desc: Object(f.a)(W),
					id: J,
					onMouseEnter: U(J),
					onMouseLeave: y
				}), r.a.createElement(m.c, N({
					tooltipId: J,
					text: Object(f.a)(W)
				}, H))), Object(x.a)(W) && r.a.createElement(n.Fragment, null, r.a.createElement(g.a, {
					isFilled: !0,
					className: Object(c.a)(S.a.icon, S.a.removeIcon),
					desc: Object(f.b)(W),
					id: X,
					onMouseEnter: U(X),
					onMouseLeave: y
				}), q && r.a.createElement(p.a, {
					className: S.a.addRemovalReason,
					onClick: T,
					text: o.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (W.modRemovalReason || W.modNote) && r.a.createElement(M, {
					onMouseEnter: U(X),
					onMouseLeave: y
				}, o.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), r.a.createElement(m.c, N({
					tooltipId: X,
					text: Object(f.b)(W)
				}, H))), W.bannedBy && W.isSpam && r.a.createElement(n.Fragment, null, r.a.createElement(k.a, {
					isFilled: !0,
					className: Object(c.a)(S.a.icon, S.a.spamIcon),
					desc: Object(f.d)(W),
					id: Z,
					onMouseEnter: U(Z),
					onMouseLeave: y
				}), r.a.createElement(m.c, N({
					tooltipId: Z,
					text: Object(f.d)(W)
				}, H)))), Object(v.a)(W) && !P && !G && r.a.createElement(n.Fragment, null, r.a.createElement(j.a, {
					isFilled: !0,
					className: Object(c.a)(S.a.icon, S.a.reportIcon),
					desc: Object(f.c)(W.numReports),
					id: Y,
					onMouseEnter: U(Y),
					onMouseLeave: y
				}), r.a.createElement(m.c, N({
					tooltipId: Y,
					text: Object(f.c)(W.numReports)
				}, H))))
			}))
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return k
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/ads/index.ts"),
				a = s("./src/reddit/components/AdViewability/index.tsx"),
				c = s("./src/reddit/helpers/trackers/gallery.ts"),
				d = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var m = n.a.memo(e => {
					const t = Object(o.useRef)(null),
						s = Object(l.a)(),
						r = Object(o.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: o
								} = t;
								o >= .5 && s(c.d(e.postId))
							})
						}, [s, e.postId]),
						i = Object(o.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, r, i), n.a.createElement("div", {
						role: "presentation"
					}, n.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/telemetry.ts"),
				f = s("./src/lib/classNames/index.ts"),
				v = s("./src/lib/objectSelector/index.ts"),
				O = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				C = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				_ = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				E = s("./src/reddit/components/PostContainer/index.m.less"),
				g = s.n(E);
			const j = Object(u.a)(() => Object(r.c)({
					basePixelMetadata: Object(v.a)((e, t) => {
						let {
							post: s
						} = t;
						return Object(h.b)(e, s.id)
					}),
					clickTrackingId: (e, t) => {
						let {
							post: s
						} = t;
						return s.id
					},
					imageGalleryCurrentItem: (e, t) => {
						let {
							post: s
						} = t;
						return Object(h.i)(e, {
							postId: s.id
						})
					},
					pageType: e => Object(x.d)(e).pageType
				})),
				k = "post-container";
			class I extends n.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: o,
						imageGalleryCurrentItem: r,
						makePostContainerId: d,
						post: l,
						onClick: p,
						pageType: u,
						sendEvent: h,
						style: x,
						ref: v,
						shouldAddGalleryViewability: O = !0
					} = this.props, C = n.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: x,
						ref: v,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => p && p(s, l, t, r, u))(s), l.id && r) {
								const {
									source: e
								} = Object(i.t)(l, r);
								e && e.outboundUrl && h(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(f.a)(g.a.WrappedPost, o, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": k,
						id: d ? d(l.id) : l.id,
						tabIndex: -1,
						"data-adclicklocation": _.a.BACKGROUND
					}, s), E = !!l.media && l.media.type === b.o.VIDEO;
					return (e => l.media && Object(b.G)(l.media) && O ? n.a.createElement(m, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || E ? n.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(C))
				}
			}
			t.b = j(Object(C.a)(Object(O.a)(Object(p.c)(I))))
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1IZotn_IQQ1fgtUjaFYbkd",
				onHoverActionText: "_1Zlk1VrZ8puYZy5lJOfz--",
				Container: "_1IZotn_IQQ1fgtUjaFYbkd",
				PostTitle: "_1hzDym_NpIlizkTDXc_rQj",
				postTitle: "_1hzDym_NpIlizkTDXc_rQj",
				MetaLine: "_67JuJTdFwIJPLPDkyPX-f",
				metaLine: "_67JuJTdFwIJPLPDkyPX-f",
				SubredditName: "_88OYON0K3w_tpnmCSWlUX",
				subredditName: "_88OYON0K3w_tpnmCSWlUX",
				InfoSpan: "_3DFfW-OG-MvCLiiEN18mpq",
				infoSpan: "_3DFfW-OG-MvCLiiEN18mpq"
			}
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_1QvpnsvD_e--dvDTEcz7_w",
				wrapper: "_1QvpnsvD_e--dvDTEcz7_w",
				TopRow: "vuQEtla32r0kemmh11Hov",
				topRow: "vuQEtla32r0kemmh11Hov",
				TitleRow: "_1eSyFPTFSsfyp8BVxs83PB",
				titleRow: "_1eSyFPTFSsfyp8BVxs83PB",
				DetailsContainer: "_87UrrqUro4oVpXFAElZUX",
				detailsContainer: "_87UrrqUro4oVpXFAElZUX",
				ButtonRow: "_1CUOht5hsM0AF9T3Ox1yos",
				buttonRow: "_1CUOht5hsM0AF9T3Ox1yos",
				CloseWrapper: "_3OsXrjEdHgK1wJBfPX6IhR",
				closeWrapper: "_3OsXrjEdHgK1wJBfPX6IhR",
				Close: "_1TaKYhB80ExuTPoLaQZMRE",
				close: "_1TaKYhB80ExuTPoLaQZMRE",
				Empty: "_20K7F6rAgXGH5z83v7Ifiv",
				empty: "_20K7F6rAgXGH5z83v7Ifiv",
				EmptyImage: "_2eLeResic3Gc77W_edgNGt",
				emptyImage: "_2eLeResic3Gc77W_edgNGt",
				EmptyText: "_3t6VBoBsR8CGQvaPLHPjmW",
				emptyText: "_3t6VBoBsR8CGQvaPLHPjmW",
				FilterWrapper: "pKfhphFBuya82DYP2Q90X",
				filterWrapper: "pKfhphFBuya82DYP2Q90X",
				FilterInput: "_3W5cary86KmYWrVgEpGKPb",
				filterInput: "_3W5cary86KmYWrVgEpGKPb",
				SearchIcon: "_9T_dguVcd795c_vOyl9s4",
				searchIcon: "_9T_dguVcd795c_vOyl9s4",
				PlusIcon: "hfmgzmXCLe3hvSyZad9WP",
				plusIcon: "hfmgzmXCLe3hvSyZad9WP",
				CreateCollectionButton: "_34_h0zRV3AgFr_0sh99pKz",
				createCollectionButton: "_34_h0zRV3AgFr_0sh99pKz"
			}
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/config.ts"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/asModal/index.tsx"),
				l = s("./src/lib/memoizeByReference/index.ts"),
				m = s("./src/reddit/actions/postCreation/general.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/keycodes.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/Input/index.tsx"),
				x = s("./src/reddit/icons/svgs/Close/index.tsx"),
				f = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				v = s("./src/reddit/icons/svgs/Search/index.tsx"),
				O = s("./src/reddit/layout/row/Inline/index.tsx"),
				C = s("./src/reddit/models/PostCreationForm/index.ts"),
				_ = s("./src/reddit/selectors/postCollection.ts"),
				E = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				g = s("./src/reddit/components/HumanDate/index.tsx"),
				j = s("./src/reddit/helpers/name/index.ts"),
				k = s("./src/reddit/models/Subreddit/index.ts"),
				I = s("./src/reddit/models/User/index.ts"),
				w = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),
				T = s.n(y),
				S = s("./src/lib/lessComponent.tsx");
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js"), M = S.a.div("Container", T.a), F = S.a.h2("PostTitle", T.a), R = S.a.div("MetaLine", T.a), A = S.a.span("SubredditName", T.a), L = S.a.time("InfoSpan", T.a), B = Object(c.c)({
				subreddit: (e, t) => {
					let {
						collection: {
							subredditId: s
						}
					} = t;
					return s ? Object(w.X)(e, {
						subredditId: s
					}) : void 0
				},
				user: P.m
			});
			class D extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onClick = () => {
						this.props.onClick(this.props.collection.id)
					}
				}
				render() {
					const {
						collection: e,
						subreddit: t,
						user: s,
						onHoverActionText: o
					} = this.props, n = t && Object(k.i)(t) && s ? Object(j.e)(Object(I.e)(s)) : t ? t.displayText : "", r = e.postIds.length;
					return i.a.createElement(M, {
						onClick: this.onClick,
						className: T.a.container
					}, i.a.createElement(F, {
						"data-redditstyle": !0
					}, e.title), i.a.createElement(R, {
						"data-redditstyle": !0
					}, n && i.a.createElement(A, {
						"data-redditstyle": !0
					}, n), n && i.a.createElement(E.b, null), i.a.createElement(L, null, N._({
						"*": "{number of posts} posts",
						_1: "1 post"
					}, [N._plural(r, "number of posts")], {
						hk: "1Uy96U"
					})), i.a.createElement(E.b, null), i.a.createElement(L, null, N._("created {time}", [N._param("time", i.a.createElement(g.d, {
						seconds: e.createdAtUTC
					}))], {
						hk: "2cUc5m"
					}))), o && i.a.createElement("div", {
						className: T.a.onHoverActionText
					}, i.a.createElement("span", null, o)))
				}
			}
			var U = Object(a.b)(B)(D),
				W = s("./src/reddit/helpers/trackers/postCollection.ts"),
				V = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less"),
				G = s.n(V);
			const H = `${o.a.assetPath}/img/snoo-drafts.png`,
				q = S.a.div("TopRow", G.a),
				J = S.a.div("TitleRow", G.a),
				K = S.a.div("DetailsContainer", G.a),
				Q = S.a.wrapped(O.a, "ButtonRow", G.a),
				z = S.a.div("CloseWrapper", G.a),
				X = S.a.wrapped(x.a, "Close", G.a),
				Y = S.a.div("Empty", G.a),
				Z = S.a.img("EmptyImage", G.a),
				$ = S.a.p("EmptyText", G.a),
				ee = S.a.div("FilterWrapper", G.a),
				te = S.a.wrapped(h.a, "FilterInput", G.a),
				se = S.a.wrapped(v.a, "SearchIcon", G.a),
				oe = S.a.wrapped(f.a, "PlusIcon", G.a),
				ne = S.a.wrapped(b.p, "CreateCollectionButton", G.a),
				re = Object(l.a)((e, t) => {
					const s = t.toLowerCase();
					return e.filter(e => e.title.toLowerCase().includes(s))
				}),
				ie = Object(c.c)({
					collections: _.v
				}),
				ae = Object(a.b)(ie, (e, t) => {
					let {
						postId: s,
						isOverlay: o
					} = t;
					return {
						onOpenCreateCollectionModal: () => {
							let t = C.b;
							s && (t = Object(C.u)(s, !!o)), e(Object(m.z)(t))
						}
					}
				});
			class ce extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						filterStr: ""
					}, this.close = () => {
						this.props.sendEvent(Object(W.c)()), this.props.onClose()
					}, this.handleEscapeKey = e => {
						e.keyCode === u.a.Escape && this.close()
					}, this.handleCreateCollectionClicked = () => {
						this.props.onOpenCreateCollectionModal(), this.props.sendEvent(Object(W.j)())
					}, this.handleCollectionSelected = e => {
						this.props.onSelectCollection(e), this.props.sendEvent(Object(W.q)())
					}, this.onFilterStringChange = e => {
						this.setState({
							filterStr: e.target.value
						})
					}, this.renderItem = e => i.a.createElement(U, {
						key: e.id,
						collection: e,
						onClick: () => this.handleCollectionSelected(e),
						onHoverActionText: this.props.onItemHoverActionText
					})
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey), this.props.sendEvent(Object(W.d)())
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				renderNoCollections() {
					return i.a.createElement(Y, null, i.a.createElement(Z, {
						src: H
					}), i.a.createElement($, null, n.fbt._("Your collections will live here", null, {
						hk: "FCxWg"
					})))
				}
				renderNoFilterMatches() {
					return i.a.createElement(Y, null, i.a.createElement($, null, n.fbt._("No collection matching filter", null, {
						hk: "2vawdK"
					}), ";"))
				}
				render() {
					const {
						collections: e,
						titleText: t
					} = this.props;
					let s;
					if (0 === e.length) s = this.renderNoCollections();
					else {
						const t = re(e, this.state.filterStr);
						s = 0 === t.length ? this.renderNoFilterMatches() : t.map(this.renderItem)
					}
					return i.a.createElement("div", {
						className: G.a.wrapper,
						"data-redditstyle": !0
					}, i.a.createElement(q, null, i.a.createElement(J, {
						"data-redditstyle": !0
					}, t || n.fbt._("My collections", null, {
						hk: "3yKovS"
					}), i.a.createElement(z, {
						onClick: this.close
					}, i.a.createElement(X, {
						"data-redditstyle": !0
					}))), i.a.createElement(ee, null, i.a.createElement(se, null), i.a.createElement(te, {
						placeholder: n.fbt._("Find a collection", null, {
							hk: "3DbFBU"
						}),
						value: this.state.filterStr,
						onChange: this.onFilterStringChange
					}))), i.a.createElement(K, null, s), i.a.createElement(Q, null, i.a.createElement(ne, {
						onClick: this.handleCreateCollectionClicked
					}, i.a.createElement(oe, null), n.fbt._("Create a collection", null, {
						hk: "37xJVm"
					}))))
				}
			}
			const de = Object(d.a)(ae(Object(p.c)(ce)));
			t.a = de
		},
		"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_3vV_tKesULQ5WMGh38lX4b",
				container: "_3vV_tKesULQ5WMGh38lX4b",
				Content: "_11JSvybbRhcX_cfoagpne_",
				content: "_11JSvybbRhcX_cfoagpne_",
				TitleRow: "_3Ev4JRxdS9-3GTBR5M1yCP",
				titleRow: "_3Ev4JRxdS9-3GTBR5M1yCP",
				Details: "_3Uw02TWwSQhLfCJkPsihqr",
				details: "_3Uw02TWwSQhLfCJkPsihqr",
				Footer: "_25MDqXgOCWDBjtAEBi2cmy",
				footer: "_25MDqXgOCWDBjtAEBi2cmy",
				CancelButton: "_2tLOIj2nClBaVRuMBIJE8X",
				cancelButton: "_2tLOIj2nClBaVRuMBIJE8X",
				CloseWrapper: "_GVnqGyX40oKfgIS56Q-k",
				closeWrapper: "_GVnqGyX40oKfgIS56Q-k",
				CloseIcon: "_1GgoANMMbLQJ-gSefDJZuZ",
				closeIcon: "_1GgoANMMbLQJ-gSefDJZuZ",
				Label: "_3QPFKpxsmu6j_gbiAuVgfW",
				label: "_3QPFKpxsmu6j_gbiAuVgfW",
				TitleInput: "ZEfw7a99aHsmkl4fx38l5",
				titleInput: "ZEfw7a99aHsmkl4fx38l5",
				AddCollectionIcon: "_30BNMMyQPTPvHEoL3-LXrM",
				addCollectionIcon: "_30BNMMyQPTPvHEoL3-LXrM",
				PrimaryActionButton: "_22f_S1XUre_FujBgOgEHJe",
				primaryActionButton: "_22f_S1XUre_FujBgOgEHJe",
				LoadingIcon: "_3cD2qECfUUTwega16qDhBc",
				loadingIcon: "_3cD2qECfUUTwega16qDhBc",
				ErrorText: "GIQ2YnBHQtY1QM1yPEhCR",
				errorText: "GIQ2YnBHQtY1QM1yPEhCR"
			}
		},
		"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/lib/formatApiError/index.ts"),
				l = s("./src/reddit/actions/postCollection/index.ts"),
				m = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = s("./src/reddit/constants/postCreation.ts"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/controls/ErrorText/index.tsx"),
				h = s("./src/reddit/controls/Input/index.tsx"),
				x = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = s("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				v = s("./src/reddit/icons/svgs/Close/index.tsx"),
				O = s("./src/reddit/layout/row/Inline/index.tsx"),
				C = s("./src/reddit/selectors/postCollection.ts"),
				_ = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less"),
				E = s.n(_),
				g = s("./src/lib/lessComponent.tsx");
			const j = g.a.div("Container", E.a),
				k = g.a.div("Content", E.a),
				I = g.a.div("TitleRow", E.a),
				w = g.a.div("Details", E.a),
				P = g.a.wrapped(m.g, "Footer", E.a),
				y = g.a.wrapped(u.o, "CancelButton", E.a),
				T = g.a.div("CloseWrapper", E.a),
				S = g.a.wrapped(v.a, "CloseIcon", E.a),
				N = g.a.label("Label", E.a),
				M = g.a.wrapped(h.a, "TitleInput", E.a),
				F = g.a.wrapped(f.a, "AddCollectionIcon", E.a),
				R = g.a.wrapped(u.l, "PrimaryActionButton", E.a),
				A = g.a.wrapped(x.a, "LoadingIcon", E.a),
				L = g.a.wrapped(b.b, "ErrorText", E.a),
				B = Object(a.c)({
					collection: C.q,
					error: C.c,
					isPending: C.g
				}),
				D = Object(i.b)(B, (e, t) => ({
					onCreate: (t, s) => e(Object(l.b)(t, s)),
					onUpdate: s => e(Object(l.h)(t.collectionId, s))
				}));
			class U extends r.a.PureComponent {
				constructor(e) {
					super(e), this.onTitleChange = e => {
						this.setState({
							collectionTitle: e.target.value
						})
					}, this.onPrimaryButtonClick = async () => {
						const {
							collectionId: e,
							subredditId: t
						} = this.props, {
							collectionTitle: s
						} = this.state;
						if (e) {
							await this.props.onUpdate(s) && this.props.onCollectionUpdated && this.props.onCollectionUpdated()
						} else {
							const e = await this.props.onCreate(s, t);
							e && this.props.onCollectionCreated && this.props.onCollectionCreated(e)
						}
					}, this.onClose = () => {
						this.props.onCancel()
					};
					const {
						collection: t
					} = e;
					this.state = {
						collectionTitle: t ? t.title : ""
					}
				}
				render() {
					const {
						collectionId: e,
						error: t,
						isPending: s
					} = this.props, n = !e, i = !!this.state.collectionTitle.trim(), a = n ? o.fbt._("Create", null, {
						hk: "Ijp7n"
					}) : o.fbt._("Save", null, {
						hk: "4yMsMq"
					});
					return r.a.createElement(j, null, r.a.createElement(T, {
						onClick: this.props.onCancel
					}, r.a.createElement(S, null)), r.a.createElement(k, null, n && r.a.createElement(r.a.Fragment, null, r.a.createElement(I, null, r.a.createElement(F, null), o.fbt._("Create a collection", null, {
						hk: "3ndxk5"
					})), r.a.createElement(w, null, o.fbt._("Group posts into one feed. Create a series of events or just a group of random things. Make something awesome!", null, {
						hk: "2eCAQw"
					}))), r.a.createElement(N, null, n ? o.fbt._("Give a title for your collection", null, {
						hk: "Uaqbe"
					}) : o.fbt._("Edit title", null, {
						hk: "1jzweg"
					}), r.a.createElement(M, {
						maxLength: p.e,
						onChange: this.onTitleChange,
						placeholder: o.fbt._("Enter title", null, {
							hk: "3B0iRI"
						}),
						value: this.state.collectionTitle
					}))), r.a.createElement(P, null, r.a.createElement(O.a, null, r.a.createElement(y, {
						onClick: this.props.onCancel
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(R, {
						onClick: this.onPrimaryButtonClick,
						disabled: s || !i
					}, s ? r.a.createElement(A, {
						sizePx: 10
					}) : a)), t && r.a.createElement(L, null, Object(d.a)(t))))
				}
			}
			t.a = Object(c.a)(D(U))
		},
		"./src/reddit/components/PostFlairPicker/index.m.less": function(e, t, s) {
			e.exports = {
				buttonsRow: "cF9DU_4WDAKS4gs43ct2_",
				clearButton: "_3vB6Y9PiwJ0YV6c9MGbDwT"
			}
		},
		"./src/reddit/components/PostFlairPicker/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return j
			}));
			var o, n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				m = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				u = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				b = s("./src/reddit/components/FlairPreview/index.tsx"),
				h = s("./src/reddit/components/FlairSearch/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/helpers/trackers/postComposer.ts"),
				v = s("./src/reddit/models/Flair/index.ts"),
				O = s("./src/reddit/selectors/postFlair.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				E = s("./src/reddit/components/PostFlairPicker/index.m.less"),
				g = s.n(E);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(o || (o = {}));
			const j = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.UNSET;
					return `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${s}]`
				},
				k = Object(c.c)({
					flairData: O.d,
					subreddit: C.X
				});
			class I extends i.a.Component {
				constructor(e) {
					super(e), this.trackEvent = () => {
						this.props.sendEvent(Object(f.F)(this.props.subredditId))
					}, this.onApply = () => {
						const {
							previewFlair: e
						} = this.state, t = e && e.templateId;
						this.props.onFlairChanged({
							previewFlair: e,
							selectedTemplateId: t
						}), this.props.closeModal && this.props.closeModal(), this.trackEvent()
					}, this.onClear = () => {
						this.props.sendEvent(Object(f.b)()), this.setSelectedFlair(null)
					}, this.setSelectedFlair = e => {
						this.setState({
							previewFlair: e
						})
					};
					const t = Object(_.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, s = Object(_.c)(this.props.flairs) || null;
					return Object(_.b)(e, t, s)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: s,
						flairData: o,
						subreddit: r
					} = e, a = r.displayText, {
						templates: c,
						templateIds: d
					} = o, {
						canSave: l
					} = this.canSave();
					return i.a.createElement(u.a, {
						className: s
					}, i.a.createElement(p.a, {
						onClosePressed: e.closeModal,
						title: n.fbt._("Select {subredditName} flair", [n.fbt._param("subredditName", a)], {
							hk: "1lDMWS"
						})
					}), i.a.createElement(b.a, {
						flair: t,
						flairTemplateType: v.d.LinkFlair,
						placeholderText: n.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), i.a.createElement(h.a, {
						flair: t,
						flairTemplateType: v.d.LinkFlair,
						subredditId: r.id,
						templates: c,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), i.a.createElement("div", {
						className: g.a.buttonsRow
					}, i.a.createElement(x.l, {
						disabled: !l,
						onClick: this.onApply
					}, n.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), i.a.createElement(x.o, {
						className: g.a.clearButton,
						onClick: this.onClear
					}, n.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const w = Object(a.b)(k, (e, t) => ({
				closeModal: () => e(Object(m.i)(t.modalId))
			}))(I);
			t.a = Object(l.a)(Object(d.c)(w))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, s) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/helpers/trackers/postCollection.ts"),
				p = s("./src/reddit/components/PostFollow/index.m.less"),
				u = s.n(p);
			class b extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: o
							},
							sendEvent: n
						} = this.props, r = !!o;
						n(e ? Object(m.o)({
							postId: s,
							isFollowed: r
						}) : Object(m.g)({
							postId: s,
							isFollowed: r
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: s
					} = this.props, n = this.state.isHovered, i = s.isFollowed;
					let a = i ? o.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : o.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && n && (a = o.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(c.a)(u.a.collectionFollow, {
							[u.a.isFollowed]: !!s.isFollowed,
							[u.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, a)
				}
			}
			const h = Object(i.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(d.z)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(l.c)(b))
		},
		"./src/reddit/components/PostModModeDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(o.a)({
				ErrorComponent: r,
				getComponent: () => Object(n.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/PostOverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				overflowMenu: "_1EbinKu2t3KjaT2gR156Qp",
				DropdownRow: "_1muOrgIRB6t41qDocDiXul",
				dropdownRow: "_1muOrgIRB6t41qDocDiXul",
				disabledRow: "_2Odc33_zXVGMHX8Um_2eO7",
				muteSubreddit: "_2Y6YEgvUcx5Ic2juj3VU95",
				HideIcon: "_3CksthIwbeJIolp7OYeQYv",
				hideIcon: "_3CksthIwbeJIolp7OYeQYv",
				Icon: "_2V4nGS1AmzWhA62lzdCu4r",
				icon: "_2V4nGS1AmzWhA62lzdCu4r"
			}
		},
		"./src/reddit/components/PostOverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return Ee
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/telemetry/index.ts"),
				l = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				m = s("./src/config.ts"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/actions/eventPosts/index.ts"),
				h = s("./src/reddit/actions/gold/modals.ts"),
				x = s("./src/reddit/actions/modal.ts"),
				f = s("./src/reddit/actions/pinnedPost.ts"),
				v = s("./src/reddit/actions/post.ts"),
				O = s("./src/reddit/actions/postCreation/editing.ts"),
				C = s("./src/reddit/actions/reportFlow/index.ts"),
				_ = s("./src/reddit/constants/oneFeed.ts"),
				E = s("./src/reddit/constants/posts.ts"),
				g = s("./src/reddit/hooks/useRecommendationPostContext.ts");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var k = function(e) {
					function t(t) {
						const s = Object(g.a)();
						return r.createElement(e, j({}, t, {
							recommendationPostContext: s
						}))
					}
					const s = e.displayName || e.name || "Component";
					return t.displayName = `withRecommendationPostContext(${s})`, t
				},
				I = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				w = s("./src/reddit/icons/fonts/index.tsx"),
				P = s("./src/reddit/components/CreatorStats/Icon.tsx"),
				y = s("./src/reddit/components/OverflowMenu/index.tsx"),
				T = s("./src/reddit/components/ReportFlow/index.tsx"),
				S = s("./src/reddit/contexts/PageLayer/index.tsx"),
				N = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				M = s("./src/reddit/controls/Dropdown/Row.tsx"),
				F = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				R = s("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				A = s("./src/reddit/components/Flatlist/constants.ts"),
				L = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				B = s("./src/reddit/constants/postLayout.ts"),
				D = s("./src/reddit/helpers/correlationIdTracker.ts"),
				U = s("./src/reddit/helpers/isCrosspost.ts"),
				W = s("./src/reddit/helpers/media/index.ts"),
				V = s("./src/reddit/helpers/postEvent.ts"),
				G = s("./src/reddit/helpers/trackers/post.ts"),
				H = s("./src/reddit/helpers/trackers/react.ts"),
				q = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				J = s("./src/reddit/models/Subreddit/index.ts"),
				K = s("./src/reddit/selectors/experiments/videoReactions.ts"),
				Q = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				z = s("./src/reddit/selectors/posts.ts"),
				X = s("./src/reddit/selectors/subreddit.ts"),
				Y = s("./src/reddit/selectors/user.ts"),
				Z = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				$ = s("./src/reddit/components/ModalStyledComponents/Modal.tsx"),
				ee = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				te = s("./src/reddit/components/ReportFlow/new.tsx"),
				se = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				oe = s("./src/reddit/selectors/experiments/reportAd.ts"),
				ne = s("./src/reddit/actions/postCollection/index.ts"),
				re = s("./src/reddit/contexts/Post/index.tsx"),
				ie = s("./src/reddit/helpers/trackers/postCollection.ts"),
				ae = s("./src/reddit/models/PostCreationForm/index.ts"),
				ce = s("./src/reddit/selectors/postCollection.ts"),
				de = s("./node_modules/react-router/esm/react-router.js"),
				le = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				me = s("./src/reddit/components/ModalStyledComponents/MessageBox.tsx");
			const pe = Object(de.i)(e => {
				let {
					post: t,
					toggleConfirmDelete: s,
					handleDeletePost: n,
					location: r
				} = e;
				const {
					isPrediction: a,
					resolvedOptionId: c,
					totalVoteCount: d
				} = t.pollData || {}, l = a ? o.fbt._("Are you sure?", null, {
					hk: "2mIMwE"
				}) : o.fbt._("Delete post?", null, {
					hk: "3g7QoX"
				}), m = i.a.useMemo(() => {
					const e = d || 0;
					return a ? 0 === e ? o.fbt._("Deleting this post will cancel any predictions that have been made.", null, {
						hk: "1OCTd3"
					}) : 1 === e ? o.fbt._("Deleting this post will cancel the 1 prediction that have already been made.", null, {
						hk: "1MnrUP"
					}) : o.fbt._("Deleting this post will cancel the {votedUsersCount} predictions that have already been made.", [o.fbt._param("votedUsersCount", e.toString())], {
						hk: "1jBXxs"
					}) : o.fbt._("Are you sure you want to delete your post? You can't undo this.", null, {
						hk: "2eDKWP"
					})
				}, [a, d]), p = a ? o.fbt._("Delete", null, {
					hk: "3NNdm0"
				}) : o.fbt._("Delete post", null, {
					hk: "28hc1p"
				});
				return a && c ? i.a.createElement(me.a, {
					title: o.fbt._("This post can't be deleted", null, {
						hk: "1sZ013"
					}),
					body: o.fbt._("Sorry about that. Once a prediction has been resolved, you can't delete the post.", null, {
						hk: "32l6dr"
					}),
					onClose: s
				}) : i.a.createElement(le.a, {
					withOverlay: !0,
					toggleModal: s,
					onConfirm: () => n(r),
					onOverlayClick: s,
					actionText: p,
					headerText: l,
					modalText: m
				})
			});
			var ue = s("./src/reddit/actions/subreddit/muting.ts"),
				be = s("./src/reddit/helpers/trackers/subredditMuting.ts"),
				he = s("./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx"),
				xe = s("./src/devPlatform/constants.ts"),
				fe = s("./src/reddit/selectors/experiments/eventPosts.ts"),
				ve = s("./src/reddit/components/PostOverflowMenu/index.m.less"),
				Oe = s.n(ve);
			const Ce = u.a.wrapped(M.b, "DropdownRow", Oe.a),
				_e = Object(l.a)(),
				Ee = e => {
					let {
						gild: t = !0,
						save: s = !0,
						share: o = !0,
						report: n = !0,
						editPost: r = !0,
						hide: i = !0,
						insights: a = !0,
						mute: c = !0
					} = e;
					return {
						[A.a.Gild]: t,
						[A.a.Save]: s,
						[A.a.Share]: o,
						[A.a.Report]: n,
						[A.a.EditPost]: r,
						[A.a.Hide]: i,
						[A.a.Insights]: a,
						[A.a.Mute]: c
					}
				},
				ge = Object(a.b)(() => Object(c.c)({
					claimedFreeAward: Q.b,
					isFutureEvent: ce.i,
					isPinned: z.q,
					isAllowReactionsKillswitchEnabled: K.a,
					subredditAboutInfo: z.H,
					reportFlowIsOpen: (e, t) => {
						let {
							isOverlay: s,
							postId: o
						} = t;
						var n, r, i, a;
						return (null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.reportFlow) || void 0 === r ? void 0 : r.openedFromModalPage) === s && (null === (a = null === (i = e.features) || void 0 === i ? void 0 : i.reportFlow) || void 0 === a ? void 0 : a.postOrCommentId) === o
					},
					showPinAction: (e, t) => {
						let {
							isProfilePostListing: s,
							userIsOp: o,
							post: n,
							pageLayer: r
						} = t;
						return Object(S.G)(e, {
							pageLayer: r
						}) && s && o && Object(Y.Db)(e, {
							userName: n.author
						})
					},
					hasSubredditRules: X.j,
					isPostPartOfACollection: ce.k,
					shouldRenderCollectionEditButtons: (e, t) => {
						let {
							post: s,
							subredditOrProfile: o
						} = t;
						if (s.isSponsored) return !1;
						if (!o) return !1;
						const n = o.type === J.g.User;
						return Object(ce.r)(e, o.name, n)
					},
					reportingRevampEnabled: Z.a,
					subredditName: (e, t) => {
						let {
							post: s
						} = t;
						return Object(X.i)(e, s)
					},
					isCommunityMutingEnabled: se.b,
					isReportAnAdEnabled: oe.a,
					isEventPostUiHidden: fe.a
				}), (e, t) => {
					let {
						postId: s,
						isOverlay: o,
						isCommentsPage: n
					} = t;
					return {
						onCopyLink: t => e(Object(v.C)(t)),
						onDelete: t => e(Object(v.L)(s, t, o)),
						onDistinguishPost: t => e(Object(v.u)(s, t)),
						onGildClick: (t, o) => e(Object(h.d)({
							awardId: o,
							correlationId: t,
							thingId: s
						})),
						onToggleSave: () => e(Object(v.T)(s)),
						onToggleNSFW: () => e(Object(v.F)(s)),
						onToggleOC: () => e(Object(v.I)(s)),
						onTogglePinned: () => e(Object(f.i)(s)),
						onToggleSpoiler: () => e(Object(v.cb)(s)),
						onHide: (t, n) => e(Object(v.db)(s, !t, o, !n)),
						onReportClick: () => e(Object(C.c)(s, o)),
						onStartEventNow: () => {
							e((e, t) => Object(d.a)(Object(I.l)()(t()))), e(Object(b.startEventNowRequested)(s))
						},
						onEdit: () => {
							const t = !o && !n;
							e(Object(O.a)(s, t))
						},
						onFlairPost: () => e(Object(x.i)(Object(ee.b)(s, o))),
						onToggleSendReplies: () => e(Object(v.U)(s)),
						onToggleReactAllowed: () => e(Object(v.R)(s)),
						showCollectionsList: (t, s) => {
							e(Object(ne.e)(t)).then(() => {
								const t = Object(ae.t)(s, o);
								e(x.i(t))
							})
						},
						onMuteClick: (t, s) => e(Object(ue.c)({
							subredditId: t,
							subredditName: s
						}))
					}
				});
			class je extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						isConfirmDeleteOpen: !1,
						showMuteSubredditModal: !1
					}, this.handlePostEvent = (e, t) => {
						const {
							isOverlay: s,
							post: o,
							sendEvent: n
						} = this.props;
						n(Object(G.n)(o.id, e, s ? "post_detail" : "post", void 0, void 0, void 0, null == t ? void 0 : t.referralId))
					}, this.handleClickMenuButton = () => {
						this.handlePostEvent("post_overflow_menu")
					}, this.handleDeletePost = e => {
						e && (this.props.onDelete(e), this.handlePostEvent("delete"))
					}, this.handleEdit = () => {
						this.handlePostEvent("edit"), this.props.onEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(D.d)(D.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: o
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(o(this.props.postId))
					}, this.onShowFewerOfClick = () => {
						const {
							postId: e,
							recommendationPostContext: {
								setRecommendationFooterView: t
							},
							sendEvent: s
						} = this.props;
						s(Object(G.q)(e)), t(_.a.SeeFewerPostsView)
					}, this.onShowMoreOfClick = () => {
						const {
							postId: e,
							recommendationPostContext: {
								setRecommendationFooterView: t
							},
							sendEvent: s
						} = this.props;
						s(Object(G.r)(e)), t(_.a.ThankYouView)
					}, this.handleMuteModal = () => {
						this.setState(e => ({
							showMuteSubredditModal: !e.showMuteSubredditModal
						}))
					}, this.toggleHide = () => {
						const e = this.props.post.hidden ? "unhide" : "hide";
						this.props.isCommunityMutingEnabled || this.handlePostEvent(e), this.props.onHide(!!this.props.post.hidden, this.props.isCommunityMutingEnabled)
					}, this.toggleSave = () => {
						const e = this.props.post.saved ? "unsave" : "save";
						this.handlePostEvent(e), this.props.onToggleSave()
					}, this.handleReport = () => {
						this.handlePostEvent("report"), this.props.onReportClick()
					}, this.toggleOC = () => {
						this.handlePostEvent(this.props.post.isOriginalContent ? "unmark_original_content" : "mark_original_content"), this.props.onToggleOC()
					}, this.togglePinned = () => {
						this.handlePostEvent(this.props.isPinned ? "unpin" : "pin"), this.props.isPinned ? this.props.sendEvent(Object(G.u)(this.props.post.id)) : this.props.sendEvent(Object(G.k)(this.props.post.id)), this.props.onTogglePinned()
					}, this.toggleSpoiler = () => {
						this.handlePostEvent(this.props.post.isSpoiler ? "unmark_spoiler" : "mark_spoiler"), this.props.onToggleSpoiler()
					}, this.toggleNSFW = () => {
						this.handlePostEvent(this.props.post.isNSFW ? "unmark_nsfw" : "mark_nsfw"), this.props.onToggleNSFW()
					}, this.toggleDeleteConfirmation = () => {
						this.setState({
							isConfirmDeleteOpen: !this.state.isConfirmDeleteOpen
						})
					}, this.getBreakpointClass = e => {
						const {
							props: t
						} = this;
						if (!t.ignoreBreakpoints && t.useFlatlistBreakpoints[e]) return Object(L.b)({
							breakpointType: L.a.HideIfVWLarger,
							flatlistItem: e,
							isLoggedIn: !!t.currentUser,
							isUserOp: t.userIsOp
						})
					}, this.getBreakpointCx = (e, t) => Object(R.b)({
						breakpointType: L.a.HideIfVWLarger,
						flatlistItem: e,
						postLayout: t
					}), this.handleAddToCollection = () => {
						const {
							isPostPartOfACollection: e,
							showCollectionsList: t,
							post: s,
							sendEvent: o
						} = this.props;
						e || (o(Object(ie.b)(s.id)), t(s.belongsTo.id, s.id))
					}, this.onCloseShareModal = e => {
						e && (this.handlePostEvent("copy_link", {
							referralId: _e
						}), this.props.onCopyLink(e))
					}, this.renderReportFlow = () => this.props.reportingRevampEnabled ? i.a.createElement(te.a, {
						withOverlay: !0,
						overlayCustomStyles: T.b,
						postId: this.props.postId,
						timestamp: this.context.currentTime
					}) : i.a.createElement(T.a, {
						withOverlay: !0,
						overlayCustomStyles: T.b,
						postId: this.props.postId,
						timestamp: this.context.currentTime
					})
				}
				getOverflowMenuBreakpointClass() {
					const {
						currentUser: e,
						ignoreBreakpoints: t,
						ignoreOverflowMenuBreakpoints: s,
						isCommentsPage: o,
						isRecommendationPost: n,
						layout: r,
						modModeWithPost: i,
						recommendationPostContext: {
							hideRecommendationContext: a
						},
						userIsOp: c
					} = this.props, d = r === B.g.Classic;
					if (!(t || s || i || c || !o && !d || n && !a)) return Object(L.b)({
						breakpointType: L.a.HideIfVWLarger,
						flatlistItem: A.a.PostOverflowMenu,
						isLoggedIn: !!e,
						isUserOp: c
					})
				}
				renderDropdownIcons() {
					var e;
					const {
						props: t
					} = this, {
						currentUser: s,
						isFutureEvent: r,
						isOverlay: a,
						isPinned: c,
						isRecommendationPost: d,
						layout: l,
						onClickInsightsButton: u,
						onStartEventNow: b,
						post: h,
						recommendationPostContext: {
							hideRecommendationContext: x
						},
						shouldRenderCollectionEditButtons: f,
						shouldShowInsightsButton: v,
						showEditFlair: O,
						showPinAction: C,
						toggleAddEventStartTimeModal: _,
						toggleEditStartTimeModal: g,
						userIsOp: j,
						isCommunityMutingEnabled: k,
						subredditName: I,
						pageLayer: y,
						isReportAnAdEnabled: T,
						isEventPostUiHidden: S
					} = t, M = t.currentUser && t.currentUser.isEmployee, R = Object(U.a)(t.post), L = t.post.belongsTo.type === E.a.PROFILE || Object(J.h)(t.subredditAboutInfo), B = t.post.belongsTo.type === E.a.PROFILE || Object(J.j)(t.subredditAboutInfo), D = s && h.isGildable, G = Object(V.a)(t.post), K = a ? void 0 : l, Q = "popular" === (null == y ? void 0 : y.urlParams.subredditName), z = "Frontpage" === (null === (e = null == y ? void 0 : y.routeMatch) || void 0 === e ? void 0 : e.route.chunk), X = k && !d && I && (Q || z);
					return i.a.createElement("div", null, v && i.a.createElement(Ce, {
						className: this.getBreakpointClass(A.a.Insights),
						displayText: o.fbt._("Insights", null, {
							hk: "t7dpi"
						}),
						onClick: u
					}, i.a.createElement(P.a, {
						postCreated: h.created,
						subredditId: h.belongsTo.id
					})), D && i.a.createElement(Ce, {
						className: this.getBreakpointClass(A.a.Gild),
						displayText: o.fbt._("Give Award", null, {
							hk: "3mYeGJ"
						}),
						onClick: this.handleGild
					}, i.a.createElement(w.a, {
						name: "award",
						className: Oe.a.Icon
					})), d && !x && i.a.createElement(i.a.Fragment, null, i.a.createElement(Ce, {
						className: this.getBreakpointClass(A.a.ShowMoreLikeThis),
						displayText: o.fbt._("Show more posts like this", null, {
							hk: "2t0WMg"
						}),
						onClick: this.onShowMoreOfClick
					}, i.a.createElement(w.a, {
						name: "checkmark",
						className: Oe.a.Icon
					})), i.a.createElement(Ce, {
						className: this.getBreakpointClass(A.a.ShowFewerLikeThis),
						displayText: o.fbt._("Show fewer posts like this", null, {
							hk: "k9sBL"
						}),
						onClick: this.onShowFewerOfClick
					}, i.a.createElement(w.a, {
						name: "hide",
						className: Oe.a.Icon
					}))), i.a.createElement(Ce, {
						className: this.getBreakpointClass(A.a.Share),
						displayText: o.fbt._("Copy link", null, {
							hk: "ETZxA"
						}),
						onClick: () => {
							const {
								permalink: e
							} = t;
							this.handlePostEvent("share_copy"), t.onCopyLink(e)
						}
					}, i.a.createElement(w.a, {
						name: "link_post",
						className: Oe.a.Icon
					})), i.a.createElement(Ce, {
						className: this.getBreakpointClass(A.a.Share),
						displayText: o.fbt._("Embed", null, {
							hk: "3u0v6r"
						}),
						onClick: () => {
							this.handlePostEvent("share_embed"), window.open(`${m.a.rebedMediaUrl}/embed?url=${t.post.permalink}`, "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, i.a.createElement(w.a, {
						name: "embed",
						className: Oe.a.Icon
					})), t.showEditPost && !Object(q.b)(this.props.post) && i.a.createElement(Ce, {
						className: this.getBreakpointClass(A.a.EditPost),
						displayText: o.fbt._("Edit post", null, {
							hk: "3gVzz0"
						}),
						onClick: this.handleEdit,
						isSelected: t.post.hidden
					}, i.a.createElement(w.a, {
						name: "edit",
						className: Oe.a.Icon
					})), O && i.a.createElement(Ce, {
						className: this.getBreakpointCx(F.a.Flair, K),
						displayText: o.fbt._("Edit Post Flair", null, {
							hk: "1pGISD"
						}),
						onClick: t.onFlairPost,
						isSelected: t.post.hidden
					}, i.a.createElement(w.a, {
						name: "tag",
						className: Oe.a.Icon
					})), i.a.createElement(Ce, {
						className: this.getBreakpointClass(A.a.Save),
						displayText: t.post.saved ? o.fbt._("unsave", null, {
							hk: "HDDPm"
						}) : o.fbt._("save", null, {
							hk: "3bg2gs"
						}),
						onClick: this.toggleSave,
						isSelected: t.post.saved
					}, i.a.createElement(w.a, {
						name: t.post.saved ? "saved" : "save",
						className: Oe.a.Icon
					})), C && i.a.createElement(Ce, {
						displayText: c ? o.fbt._("Unpin Post from Profile", null, {
							hk: "6DYfk"
						}) : o.fbt._("Pin Post to Profile", null, {
							hk: "2RWbNF"
						}),
						onClick: this.togglePinned
					}, i.a.createElement(w.a, {
						name: "pin",
						className: Oe.a.Icon,
						isFilled: this.props.isPinned
					})), X && i.a.createElement(Ce, {
						className: Object(p.a)(Oe.a.muteSubreddit, this.getBreakpointClass(A.a.Mute)),
						displayText: o.fbt._("Mute {name of subreddit to mute}", [o.fbt._param("name of subreddit to mute", `r/${I}`)], {
							hk: "1Jw2VW"
						}),
						onClick: this.handleMuteModal
					}, i.a.createElement(w.a, {
						name: "volume_mute",
						className: Oe.a.Icon
					})), !t.post.isSponsored && i.a.createElement(Ce, {
						className: this.getBreakpointClass(A.a.Hide),
						displayText: t.post.hidden ? o.fbt._("unhide", null, {
							hk: "1P4IxC"
						}) : o.fbt._("hide", null, {
							hk: "48yKzW"
						}),
						onClick: this.toggleHide,
						isSelected: t.post.hidden
					}, i.a.createElement(w.a, {
						name: "hide",
						className: Oe.a.HideIcon
					})), (!t.post.isSponsored || T) && !j && i.a.createElement(Ce, {
						className: this.getBreakpointClass(A.a.Report),
						displayText: o.fbt._("report", null, {
							hk: "128RPn"
						}),
						onClick: this.handleReport
					}, i.a.createElement(w.a, {
						name: "report",
						className: Oe.a.Icon
					})), f && r && b && !S && i.a.createElement(Ce, {
						onClick: b,
						displayText: o.fbt._("Start event now", null, {
							hk: "3VomTN"
						})
					}, i.a.createElement(w.a, {
						name: "live",
						className: Oe.a.Icon
					})), f && r && g && !S && i.a.createElement(Ce, {
						onClick: g,
						displayText: o.fbt._("Edit start time", null, {
							hk: "2typ17"
						})
					}, i.a.createElement(w.a, {
						name: "scheduled",
						className: Oe.a.Icon
					})), f && !G && _ && !S && i.a.createElement(Ce, {
						displayText: o.fbt._("Add event start time", null, {
							hk: "1XXqzu"
						}),
						onClick: _
					}, i.a.createElement(w.a, {
						name: "scheduled",
						className: Oe.a.Icon
					})), f && i.a.createElement(Ce, {
						className: this.props.isPostPartOfACollection ? Oe.a.disabledRow : void 0,
						displayText: o.fbt._("Add to collection", null, {
							hk: "3UNHgN"
						}),
						onClick: this.handleAddToCollection,
						noHover: this.props.isPostPartOfACollection
					}, i.a.createElement(w.a, {
						name: "collection",
						className: Oe.a.Icon
					})), j && i.a.createElement(Ce, {
						displayText: o.fbt._("delete", null, {
							hk: "4kSfzC"
						}),
						onClick: this.toggleDeleteConfirmation
					}, i.a.createElement(w.a, {
						name: "delete",
						className: Oe.a.Icon
					})), M && t.userIsOp && i.a.createElement(Ce, {
						displayText: t.post.distinguishType === n.J.ADMIN ? o.fbt._("undistinguish", null, {
							hk: "2chGON"
						}) : o.fbt._("Distinguish as admin", null, {
							hk: "2xltiM"
						}),
						onClick: () => t.post.distinguishType === n.J.ADMIN ? t.onDistinguishPost(n.J.NONE) : t.onDistinguishPost(n.J.ADMIN)
					}, i.a.createElement(w.a, {
						name: "admin",
						className: Oe.a.Icon
					})), j && L && !R && i.a.createElement(N.a, {
						text: o.fbt._("Mark as OC", null, {
							hk: "2vGyoC"
						}),
						onClick: this.toggleOC,
						isSelected: this.props.post.isOriginalContent
					}), j && B && i.a.createElement(N.a, {
						text: o.fbt._("Mark as Spoiler", null, {
							hk: "3PJk7A"
						}),
						onClick: this.toggleSpoiler,
						isSelected: this.props.post.isSpoiler
					}), j && i.a.createElement(N.a, {
						text: o.fbt._("Mark as NSFW", null, {
							hk: "4qK6JN"
						}),
						onClick: this.toggleNSFW,
						isSelected: this.props.post.isNSFW
					}), j && h.domain === W.a && !this.props.isAllowReactionsKillswitchEnabled && i.a.createElement(N.a, {
						text: o.fbt._("Allow video threads", null, {
							hk: "DJXlU"
						}),
						onClick: () => {
							var e;
							t.onToggleReactAllowed(), this.props.sendEvent(Object(H.a)({
								subredditId: null === (e = this.props.subredditOrProfile) || void 0 === e ? void 0 : e.id,
								postId: this.props.postId,
								reactionsEnabled: this.props.post.isReactAllowed
							}))
						},
						isSelected: this.props.post.isReactAllowed
					}), t.userIsOp && i.a.createElement(N.a, {
						text: o.fbt._("Send me reply notifications", null, {
							hk: "6AmTA"
						}),
						onClick: t.onToggleSendReplies,
						isSelected: this.props.post.sendReplies
					}), i.a.createElement(he.a, {
						contextType: xe.a.POST,
						contextData: h
					}))
				}
				render() {
					const {
						props: e
					} = this, {
						subredditName: t,
						post: s
					} = e, n = s.belongsTo.id;
					return i.a.createElement("div", null, i.a.createElement(y.b, {
						className: Object(p.a)(Oe.a.overflowMenu, this.getOverflowMenuBreakpointClass(), e.className),
						dropdownId: e.dropdownId,
						isFixed: e.isFixed,
						layout: e.layout,
						onClick: this.handleClickMenuButton
					}, this.renderDropdownIcons()), e.reportFlowIsOpen && e.subredditOrProfile && e.hasSubredditRules && this.renderReportFlow(), this.state.isConfirmDeleteOpen && i.a.createElement(pe, {
						post: this.props.post,
						toggleConfirmDelete: this.toggleDeleteConfirmation,
						handleDeletePost: this.handleDeletePost
					}), this.state.showMuteSubredditModal && i.a.createElement($.a, {
						headerText: o.fbt._("Mute {name of subreddit to mute}", [o.fbt._param("name of subreddit to mute", `r/${t}`)], {
							hk: "4eAU3R"
						}),
						modalBody: o.fbt._("You won't see posts from {name of subreddit to mute} in your feeds or recommmendations anymore.", [o.fbt._param("name of subreddit to mute", `r/${t}`)], {
							hk: "1JNA6G"
						}),
						toggleModal: this.handleMuteModal,
						actionText: o.fbt._("YES, MUTE", null, {
							hk: "1eAO8C"
						}),
						cancelActionText: o.fbt._("CANCEL", null, {
							hk: "If1yt"
						}),
						onConfirm: () => {
							this.handleMuteModal(), e.onMuteClick(n, t), this.toggleHide(), this.props.sendEvent(Object(be.a)({
								subredditId: n,
								postId: s.id
							}))
						},
						withOverlay: !0
					}))
				}
			}
			t.a = k(Object(re.e)(ge(je)))
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/snoovatarModal.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/trackers/snoovatar.ts"),
				u = s("./src/reddit/icons/svgs/Shirt/index.tsx"),
				b = s("./src/reddit/models/Vote/index.ts"),
				h = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				x = s.n(h);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(a.i)(e => {
				let {
					isHovercard: t,
					username: s,
					isAvatarPost: a,
					post: h,
					share: v
				} = e;
				const O = Object(l.b)(),
					C = Object(i.d)(),
					_ = h && h.id,
					E = h && h.voteState;
				let g = null;
				_ || (g = t ? "user_hovercard" : "profile_overview");
				const j = Object(n.useCallback)(() => O(Object(p.h)(t ? "user_hovercard" : "profile_overview", s)), [t, O, s]);
				return r.a.createElement(m.t, {
					onClick: () => {
						a ? (O(p.i), _ && E === b.a.notVoted && C(Object(c.ib)(_))) : j();
						const e = a ? "postify" : "copy";
						C(Object(d.b)({
							clickSource: g,
							share: v,
							source: e
						}))
					},
					className: Object(o.a)(x.a.snoovatarButton, x.a.snoovatarExtraPadding, x.a.compactButtonLayout, {
						[x.a.avatarPostifyButton]: a
					}),
					isFullWidth: !0
				}, r.a.createElement(u.a, {
					className: Object(o.a)({
						[x.a.shirtIcon]: !a,
						[x.a.avatarPostButtonShirtIcon]: a
					})
				}), f._("Try this Look", null, {
					hk: "dOuPb"
				}), r.a.createElement("div", {
					className: x.a.chevronIcon
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
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/reddit/constants/colors.ts");
			const r = {
				backgroundColor: n.a.overlayReportFlow
			};
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "ReportFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ReportFlow/_ReportFlow.tsx"
				}
			})
		},
		"./src/reddit/components/ReportFlow/new.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/reddit/constants/colors.ts");
			const r = {
					backgroundColor: n.a.overlayReportFlow
				},
				i = Object(o.a)({
					resolved: {},
					chunkName: () => "ReportFlow",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx"
					}
				}),
				a = Object(o.a)({
					resolved: {},
					chunkName: () => "ReportFlowNew",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("ReportFlowNew").then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx"
					}
				});
			t.b = a
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, s) {
			e.exports = {
				removalReasonButton: "_3IEDcFIIs_TeXsZtKZGzUd",
				TextWrapper: "smOzqVIOoNqmSJcyBX2N6",
				textWrapper: "smOzqVIOoNqmSJcyBX2N6",
				Button: "_1rNBkuuOkN2SorEXyRkYjB",
				button: "_1rNBkuuOkN2SorEXyRkYjB",
				ApproveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				approveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				RemoveButton: "_2OvUr_pd3kddsNP_f35S28",
				removeButton: "_2OvUr_pd3kddsNP_f35S28"
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				c = s.n(a);
			const d = e => n.a.createElement("button", {
					className: Object(r.a)(c.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, e.children, e.text && n.a.createElement("span", {
					className: Object(r.a)(c.a.TextWrapper, e.textClassName)
				}, e.text, " ")),
				l = i.a.wrapped(d, "ApproveButton", c.a),
				m = i.a.wrapped(d, "RemoveButton", c.a),
				p = e => n.a.createElement("button", {
					className: Object(r.a)(c.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/ShareMenu/index.m.less": function(e, t, s) {
			e.exports = {
				dropdown: "PWY92ySDjTYrTAiutq4ty",
				dropdownRow: "_2snJGyyGyyH38duHobOUKE",
				linkIcon: "_1GObrri0j7y_9IWiGUfPjp",
				chatIcon: "_1PhtucoKocd-ADJ-JDEoiC",
				crosspostIcon: "_1m76BHzDzRsM1te7HBxUqd",
				embedIcon: "_3MSdPVJwGxrpakz-e1MQhO",
				modalBody: "T4VmKX-IOkP4UG-B4jUR-"
			}
		},
		"./src/reddit/components/ShareMenu/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/config.ts"),
				c = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/reddit/actions/chat/toggle.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/Row.tsx"),
				h = s("./src/reddit/constants/tracking.ts"),
				x = s("./src/reddit/helpers/trackers/chat.ts"),
				f = s("./src/reddit/selectors/telemetry.ts");
			var v = s("./src/reddit/hooks/useTracking.ts"),
				O = s("./src/reddit/icons/fonts/index.tsx"),
				C = s("./src/reddit/models/Subreddit/index.ts"),
				_ = s("./src/reddit/routes/postCreation/constants.ts"),
				E = s("./src/reddit/selectors/experiments/chat.ts"),
				g = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/components/ShareMenu/index.m.less"),
				k = s.n(j);
			const I = Object(p.a)(u.a),
				w = e => {
					let {
						permalink: t,
						onShare: s
					} = e;
					return r.a.createElement(b.b, {
						id: "shareToChat",
						className: k.a.dropdownRow,
						displayText: o.fbt._("share to chat", null, {
							hk: "3EuIWT"
						}),
						onClick: () => {
							const e = Object(c.a)(t, {
								utm_source: "share",
								utm_medium: "web2x",
								context: 3
							});
							s(e)
						}
					}, r.a.createElement(O.a, {
						name: "chat",
						className: k.a.chatIcon
					}))
				},
				P = e => {
					let {
						permalink: t,
						sendEventWithName: s
					} = e;
					return r.a.createElement(b.b, {
						className: k.a.dropdownRow,
						displayText: o.fbt._("Embed", null, {
							hk: "2CcsuC"
						}),
						onClick: () => {
							s("share_embed"), window.open(`${a.a.rebedMediaUrl}/embed?url=${t}`, "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, r.a.createElement(O.a, {
						name: "embed",
						className: k.a.embedIcon
					}))
				},
				y = e => {
					let {
						onCrosspost: t
					} = e;
					return r.a.createElement(b.b, {
						className: k.a.dropdownRow,
						displayText: o.fbt._("crosspost", null, {
							hk: "23zSN6"
						}),
						onClick: t
					}, r.a.createElement(O.a, {
						name: "crosspost",
						className: k.a.crosspostIcon
					}))
				},
				T = r.a.memo(e => {
					const t = Object(i.d)(),
						s = Object(v.a)(),
						a = Object(i.e)(t => Object(g.b)(e.dropdownId)(t)),
						p = Object(i.e)(E.i),
						u = Object(n.useCallback)(() => {
							t(Object(m.h)({
								tooltipId: e.dropdownId
							}))
						}, [t, e.dropdownId]),
						j = !e.subredditType || e.subredditType === C.g.Public,
						T = !!e.post && e.post.isCrosspostable && !e.post.isSponsored,
						S = !p,
						N = Object(n.useCallback)(o => {
							t(Object(d.e)(o)), s((() => e => ({
								...Object(f.o)(e),
								source: "post",
								action: h.c.CLICK,
								noun: "share_chat",
								subreddit: Object(f.lb)(e)
							}))()), s((e => t => Object(x.a)({
								...Object(f.o)(t),
								source: "post",
								action: h.c.CLICK,
								noun: "share_chat",
								post: e ? {
									id: e.id,
									createdTimestamp: e.created,
									title: e.title,
									authorId: e.authorId,
									nsfw: e.isNSFW,
									promoted: e.isSponsored,
									numberComments: e.numComments,
									upvoteRatio: e.upvoteRatio || void 0
								} : void 0
							}))(e.post))
						}, [t, e.post, s]);
					return r.a.createElement("div", {
						className: e.className,
						onClick: u,
						id: e.dropdownId
					}, e.children, r.a.createElement(I, {
						className: k.a.dropdown,
						isOpen: a,
						tooltipId: e.dropdownId
					}, r.a.createElement(b.b, {
						className: k.a.dropdownRow,
						displayText: o.fbt._("Copy link", null, {
							hk: "1tCqox"
						}),
						onClick: () => {
							const {
								permalink: s
							} = e, o = Object(c.a)(s, {
								utm_source: "share",
								utm_medium: "web2x",
								context: 3
							});
							e.sendEventWithName("share_copy"), (e => t(Object(l.C)(e)))(o)
						}
					}, r.a.createElement(O.a, {
						name: "link_post",
						className: k.a.linkIcon
					})), T && r.a.createElement(y, {
						onCrosspost: () => {
							e.sendEventWithName("share_crosspost"), e.post && window.open(`${_.b}?source_id=${e.post.id}`, "_blank")
						}
					}), j && r.a.createElement(P, {
						permalink: e.permalink,
						sendEventWithName: e.sendEventWithName
					}), S && r.a.createElement(w, {
						permalink: e.permalink,
						onShare: N
					})))
				});
			t.a = T
		},
		"./src/reddit/components/SourceLink/index.m.less": function(e, t, s) {
			e.exports = {
				OutboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				outboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				SourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				sourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				"m-comment": "_1-PD0_zreH-KVwpFoCLvQF",
				mComment: "_1-PD0_zreH-KVwpFoCLvQF"
			}
		},
		"./src/reddit/components/SourceLink/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return j
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/ads/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/getShortenedLink.ts"),
				c = s("./node_modules/fbt/lib/FbtPublic.js"),
				d = s("./src/lib/avatarShareImages.ts"),
				l = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				m = s("./src/reddit/components/AvatarPost/index.m.less"),
				p = s.n(m);
			var u = e => {
					let {
						sourceUrl: t,
						username: s,
						post: o
					} = e;
					const [r, i] = new URL(t).pathname.split("/").slice(2), a = Object(d.a)(i);
					return n.a.createElement("div", {
						className: p.a.avatarPostContainer
					}, n.a.createElement("img", {
						className: p.a.avatarPostImage,
						src: a,
						alt: c.fbt._("User Shared Avatar", null, {
							hk: "FDRaA"
						})
					}), n.a.createElement(l.a, {
						isHovercard: !1,
						username: s,
						isAvatarPost: !0,
						post: o,
						share: {
							username: r,
							avatarId: i
						}
					}))
				},
				b = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				h = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				x = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				f = s("./src/reddit/components/SourceLink/index.m.less"),
				v = s.n(f),
				O = s("./src/lib/lessComponent.tsx"),
				C = s("./src/telemetry/models/Outbound.ts"),
				_ = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts");
			const E = O.a.wrapped(x.a, "OutboundLinkIcon", v.a),
				g = O.a.div("SourceLinkWrapper", v.a);

			function j(e) {
				const {
					className: t,
					post: s,
					isCommentsPage: o,
					pageLayer: c
				} = e, d = o ? C.SourceElement.PostLink : C.SourceElement.ListingPostLink, {
					source: l
				} = s, m = s.isSponsored || Object(r.u)(c), p = Object(h.a)(s), x = Object(_.a)();
				return !l || x ? null : p ? n.a.createElement(u, {
					sourceUrl: l.url,
					username: s.author,
					post: s
				}) : n.a.createElement(g, {
					className: Object(i.a)({
						[v.a["m-comment"]]: o
					}, t)
				}, n.a.createElement(b.a, {
					href: l.url,
					isSponsored: m,
					postId: s.id,
					source: l,
					sourceElement: d
				}, Object(a.a)({
					...s,
					isSponsored: m
				}), n.a.createElement(E, {
					isFilled: !0
				})))
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, s) {
			e.exports = {
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				l = s.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const p = s("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", l.a);
			class u extends n.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.renderUnsubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: o,
							postId: r,
							sendEvent: i,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: p,
							getEventFactory: u,
							onSubscriptionsRequested: b,
							priority: h,
							isShredditParityEnabled: x,
							...f
						} = this.props, v = this.state.isHovered, O = Object(c.a)({
							type: t.type,
							key: v ? "unsubscribe" : "subscribed"
						}), C = f.shouldReverseColor ? a.c.Secondary : a.c.Primary;
						return n.a.createElement(a.t, m({
							className: e,
							priority: h || C,
							rplStyle: x,
							text: O,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: a.d.XSP
						}, f))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: o,
							postId: r,
							sendEvent: i,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: p,
							getEventFactory: u,
							onSubscriptionsRequested: b,
							priority: h,
							isShredditParityEnabled: x,
							...f
						} = this.props, v = Object(c.a)({
							type: t.type,
							key: "subscribe"
						}), O = f.shouldReverseColor ? a.c.Secondary : a.c.Primary;
						return n.a.createElement(a.t, m({
							className: e,
							priority: h || O,
							size: a.d.XSP,
							rplStyle: x,
							text: v,
							onClick: this.onClick
						}, f, {
							id: `subscribe-button-${r}`,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}))
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						small: e = !1,
						userIsSubscriber: t,
						doNotHideOtherSubscribeButtons: s
					} = this.props;
					return t ? this.state.hasJustSubscribed || s ? this.renderUnsubscribeButton() : e ? null : n.a.createElement(p, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(i.a)(Object(r.c)(u))
		},
		"./src/reddit/components/ViewReportsDropdown/Loader.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "reddit-components-ViewReportsDropdown-index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-ViewReportsDropdown-index").then(s.bind(null, "./src/reddit/components/ViewReportsDropdown/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ViewReportsDropdown/index.tsx"
				}
			})
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return o
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "f", (function() {
				return c
			}));
			const o = "comment",
				n = "comment-submission-form-markdown",
				r = "comment-submission-form-richtext",
				i = "comments-page-link-num-comments",
				a = "language-prompt-close",
				c = "post-content"
		},
		"./src/reddit/constants/postCreation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "g", (function() {
				return d
			}));
			const o = "PostCreation-AddEventButton",
				n = 500,
				r = "PostCreation-CollectionEducationTooltip",
				i = "PostCreation-EventEducationTooltip",
				a = 300,
				c = a,
				d = "PostCreation-AddToCollectionButton"
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/controls/Checkbox/index.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, n.a.createElement(i.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/CheckboxMenuItem/index.m.less": function(e, t, s) {
			e.exports = {
				checkboxIcon: "_3Ebr0mkLD0A7HiowzExNW-",
				checkboxMenuItem: "_2eawLPCtwzvTZhWKtaUgZQ",
				expandRight: "_34Odk7t6y-rCPxPcYJa4Nw",
				postCheckboxMenuItem: "_3LyKu57c-QkPvlFvAgWop5"
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				c = s("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const m = e => n.a.createElement("div", {
					className: Object(r.a)(d.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, n.a.createElement(a.a, {
					className: d.a.expandRight
				}, n.a.createElement(i.a, {
					name: "checkbox",
					isFilled: e.isSelected,
					className: d.a.checkboxIcon
				}), e.text)),
				p = e => {
					let {
						className: t,
						...s
					} = e;
					return n.a.createElement(m, l({
						className: Object(r.a)(d.a.postCheckboxMenuItem, t)
					}, s))
				}
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			})), s.d(t, "c", (function() {
				return _
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/uniqueId.js"),
				r = s.n(n),
				i = s("./node_modules/raf/index.js"),
				a = s.n(i),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/higherOrderComponents/asModal/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/layout/row/Inline/index.tsx"),
				b = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				h = s.n(b);
			var x = Object(m.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return d.a.createElement("div", {
						className: h.a.wrapper
					}, d.a.createElement(u.a, {
						className: h.a.titleRow
					}, s), d.a.createElement("div", {
						className: h.a.detailsContainer
					}, t), d.a.createElement(u.a, {
						className: h.a.buttonRow
					}, d.a.createElement(p.l, {
						className: h.a.confirmButton,
						onClick: e.onConfirmed
					}, o.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				f = s("./src/reddit/controls/ErrorText/index.m.less"),
				v = s.n(f);
			class O extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${r()()}`,
						isModalOpen: !1
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					a()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						className: t,
						errorModalBody: s,
						errorModalTitle: n = o.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: r = o.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: i,
						isModalOpen: a
					} = this.state;
					return d.a.createElement("div", {
						className: Object(l.a)(v.a.wrapper, t)
					}, d.a.createElement("span", {
						className: v.a.description,
						ref: this.spanRef
					}, e), i && d.a.createElement("span", {
						className: v.a.moreText,
						onClick: this.toggleModal
					}, r), a && d.a.createElement(x, {
						onConfirmed: this.toggleModal,
						title: n
					}, s || e))
				}
			}
			const C = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: o,
						fallbackMessage: n,
						messages: r = []
					} = e, i = r.length ? r : n ? [n] : [];
					return i.length ? d.a.createElement("div", {
						className: t
					}, i.map((e, t) => d.a.createElement(O, {
						className: s,
						errorModalTitle: o,
						key: t
					}, e))) : null
				},
				_ = e => d.a.createElement(C, {
					fallbackMessage: o.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = O
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/controls/Input/index.m.less"),
				r = s.n(n);
			t.a = o.a.input("input", r.a)
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = s.n(i);
			t.a = e => {
				let {
					center: t,
					className: s,
					sizePx: o = 10
				} = e;
				return n.a.createElement("div", {
					className: Object(r.a)(a.a.loadingIcon, s, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${o}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/featureFlags/index.ts");

			function c(e, t, s) {
				const o = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(r.b)(o)(e => {
					const {
						featureEnabled: o,
						...r
					} = e, i = r;
					return o ? n.a.createElement(t, i) : void 0 !== s ? n.a.createElement(s, i) : null
				})
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/hasModPostPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.posts
		},
		"./src/reddit/helpers/isRemoved.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/humanizeUTCDate/index.tsx");
			const r = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? o.fbt._("Approved by {username} at {time}", [o.fbt._param("username", e.approvedBy), o.fbt._param("time", Object(n.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : o.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				i = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? o.fbt._("Removed by {username} at {time}", [o.fbt._param("username", e.bannedBy), o.fbt._param("time", Object(n.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : o.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + o.fbt._("Reason by {username}:", [o.fbt._param("username", `u/${e.bannedBy}`)], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + o.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				a = e => o.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [o.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				c = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? o.fbt._("Removed as spam by {username} at {time}", [o.fbt._param("username", e.bannedBy), o.fbt._param("time", Object(n.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : o.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/helpers/trackers/freeAwardOffer.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			}));
			var o = s("./src/reddit/helpers/correlationIdTracker.ts"),
				n = s("./src/reddit/helpers/trackers/goldPayment.ts"),
				r = s("./src/reddit/models/Gold/ProductOffer.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					...Object(n.h)(e, {
						offerContext: r.a.StorefrontFreeAward
					}),
					correlationId: Object(o.d)(o.a.GoldPayment, !1),
					profile: i.T(e),
					subreddit: i.lb(e)
				}),
				c = () => e => ({
					source: "free_award_offer",
					action: "view",
					noun: "page",
					...a(e)
				}),
				d = e => t => ({
					source: "free_award_offer",
					action: "click",
					noun: e,
					...a(t)
				}),
				l = () => e => ({
					source: "tooltip",
					action: "view",
					noun: "try_free_award",
					...a(e)
				})
		},
		"./src/reddit/helpers/trackers/postCollection.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "o", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "n", (function() {
				return h
			})), s.d(t, "m", (function() {
				return x
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "p", (function() {
				return O
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "j", (function() {
				return _
			})), s.d(t, "q", (function() {
				return E
			})), s.d(t, "k", (function() {
				return g
			})), s.d(t, "l", (function() {
				return j
			})), s.d(t, "i", (function() {
				return k
			})), s.d(t, "d", (function() {
				return I
			}));
			var o, n, r = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/helpers/trackers/postEvent.ts"),
				a = s("./src/reddit/selectors/platform.ts"),
				c = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(o || (o = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(n || (n = {}));
			const d = e => t => ({
					source: o.collection,
					noun: n.post,
					...p(t, e)
				}),
				l = e => {
					let {
						postId: t,
						isFollowed: s
					} = e;
					return e => ({
						source: o.collection,
						noun: s ? n.unfollow : n.follow,
						...p(e, t)
					})
				},
				m = e => {
					let {
						postId: t,
						isFollowed: s
					} = e;
					return e => ({
						source: i.a.postEvent,
						noun: s ? n.unfollow : n.follow,
						...p(e, t)
					})
				},
				p = (e, t) => {
					const s = {
						...c.o(e),
						action: r.c.CLICK,
						subreddit: c.lb(e)
					};
					return void 0 === t ? s : {
						...s,
						post: c.K(e, t),
						postCollection: c.M(e, {
							postId: t
						}),
						postEvent: c.N(e, {
							postId: t
						})
					}
				},
				u = e => ({
					...f(e),
					action: r.c.VIEW,
					noun: n.collectionEducation
				}),
				b = e => ({
					...f(e),
					action: r.c.CLICK,
					noun: n.collectionEducationGotIt
				}),
				h = e => ({
					...f(e),
					action: r.c.VIEW,
					noun: n.eventEducation
				}),
				x = e => ({
					...f(e),
					action: r.c.CLICK,
					noun: n.eventEducationGotIt
				}),
				f = e => ({
					...c.o(e),
					subreddit: c.lb(e),
					source: o.postComposer
				}),
				v = (e, t) => s => ({
					...p(s, e),
					source: t || o.postOverflowMenu,
					noun: n.collectionAddPost
				}),
				O = e => t => ({
					...p(t, e),
					source: o.collectionComposer,
					noun: n.collectionRemovePost
				}),
				C = () => e => ({
					...p(e),
					source: o.collectionComposer,
					noun: n.collectionCancel
				}),
				_ = () => e => {
					const t = Object(a.o)(e) || void 0;
					return {
						...p(e, t),
						source: o.collectionComposer,
						noun: n.collectionCreate
					}
				},
				E = () => e => ({
					...p(e),
					source: o.collectionComposer,
					noun: n.collectionSelect
				}),
				g = e => t => ({
					...c.o(t),
					subreddit: c.lb(t),
					source: o.collectionComposer,
					action: r.c.CLICK,
					noun: n.collectionDelete,
					postCollection: c.L(t, {
						collectionId: e
					})
				}),
				j = e => t => ({
					...p(t),
					source: o.collectionComposer,
					noun: n.collectionEdit,
					postCollection: c.L(t, {
						collectionId: e
					})
				}),
				k = e => t => ({
					...p(t, e),
					source: o.collectionComposer,
					noun: n.startEvent
				}),
				I = () => e => {
					const t = Object(a.o)(e) || void 0;
					return {
						...p(e, t),
						source: o.collectionComposer,
						action: r.c.VIEW,
						noun: n.screen
					}
				}
		},
		"./src/reddit/helpers/trackers/postEvent.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "f", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "d", (function() {
				return O
			}));
			var o, n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/eventTools/index.ts"),
				i = s("./src/lib/timezone/index.ts"),
				a = s("./src/reddit/constants/tracking.ts"),
				c = s("./src/reddit/models/PostCreationForm/index.ts"),
				d = s("./src/reddit/selectors/platform.ts"),
				l = s("./src/reddit/selectors/postCreations.ts"),
				m = s("./src/reddit/selectors/telemetry.ts"),
				p = s("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(o || (o = {}));
			const u = e => m.d(e, {
					pageType: "event_submit"
				}),
				b = e => {
					Object(p.a)({
						...m.o(e),
						source: o.postComposer,
						action: a.c.CLICK,
						noun: "event_create",
						subreddit: m.lb(e)
					})
				},
				h = e => {
					Object(p.a)({
						...m.o(e),
						source: o.postComposer,
						action: a.c.CLICK,
						noun: "event_edit",
						subreddit: m.lb(e),
						postEvent: C(e),
						postComposer: _(e)
					})
				},
				x = () => e => ({
					source: o.eventComposer,
					action: a.c.VIEW,
					noun: a.b.SCREEN,
					actionInfo: u(e),
					postEvent: C(e)
				}),
				f = e => t => ({
					...j(t, Object(d.o)(t)),
					source: o.postComposer,
					noun: "apply",
					postComposer: E(e)
				}),
				v = () => e => ({
					...j(e, Object(d.o)(e)),
					noun: "cancel",
					actionInfo: u(e)
				}),
				O = e => t => ({
					...j(t, Object(d.o)(t)),
					noun: "delete",
					actionInfo: u(t),
					postComposer: _(t),
					postEvent: g(e)
				}),
				C = e => {
					const t = Object(l.p)(e);
					return t && g(t)
				},
				_ = e => E(Object(l.p)(e)),
				E = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === c.j.AtEventTime ? Object(i.f)(e.startDate).getTime() / n.Yb : void 0
					}
				},
				g = e => {
					const t = Object(i.f)(e.startDate).getTime() / n.Yb,
						s = Object(i.f)(e.endDate).getTime() / n.Yb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: s,
						eventState: Object(r.e)(t, s)
					}
				},
				j = (e, t) => {
					const s = {
						source: o.eventComposer,
						action: a.c.CLICK,
						subreddit: m.lb(e)
					};
					return t ? {
						...s,
						post: m.K(e, t),
						postEvent: m.N(e, {
							postId: t
						}),
						postCollection: m.M(e, {
							postId: t
						})
					} : s
				}
		},
		"./src/reddit/hooks/useExperimentVariant.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");

			function r(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.a;
				return Object(o.e)(s => Object(n.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: t
				}))
			}
		},
		"./src/reddit/hooks/useIsAvatarPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var o = s("./node_modules/react-redux/es/index.js");
			const n = ["t2_83axfjo9", "t2_5ybo8iyi", "t2_7yef0w0w", "t2_fvlxukt", "t2_16060o", "t2_364me452", "t2_46dwatoq", "t2_86xzqcqi", "t2_97lsdz5t", "t2_8394tzuq ", "t2_b46ms2wj", "t2_btxoz0zb"],
				r = ["t5_q0gj4", "t5_2rjli"],
				i = new RegExp(/https:\/\/(www\.)?reddit.com\/avatar\/.*\/\d+$/);
			var a = s("./src/reddit/selectors/experiments/econ/index.ts");
			const c = e => Object(o.e)(t => {
				return !!(e => {
					let {
						adminId: t,
						subredditId: s,
						avatarShareUrl: o
					} = e;
					const a = i.test(o.trim()),
						c = n.includes(t),
						d = r.includes(s);
					return a && c && d
				})({
					adminId: e.authorId,
					subredditId: e.belongsTo.id,
					avatarShareUrl: e.source ? e.source.url : ""
				}) && Object(a.a)(t)
			})
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("archived", e.isFilled), c.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("scheduled", e.isFilled), c.a.calendarIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Comment/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					...s
				} = e;
				return n.a.createElement("i", d({
					className: Object(r.a)(Object(i.b)("comment", s.isFilled), c.a.commentIcon, t)
				}, s))
			}
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("live", e.isFilled), c.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("i", d({}, e, {
				className: Object(r.a)(Object(i.b)("mod", e.isFilled), c.a.modActions, e.className)
			}))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("share", e.isFilled), c.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("pin", e.isFilled), c.a.stickyIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(r.b)("tag",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/AddCollection/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, n.a.createElement("defs", null, n.a.createElement("path", {
				id: "svg-add-collection",
				d: "M19.2 2.4a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V4.8a2.4 2.4 0 0 1 2.4-2.4h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V8.4A2.4 2.4 0 0 1 4.8 6h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4V12a2.4 2.4 0 0 1 2.4-2.4h14.4zm-3.806 5.1H12.9v-2.494a.9.9 0 1 0-1.8 0V14.7H8.607a.9.9 0 1 0 0 1.8H11.1v2.494a.9.9 0 1 0 1.8 0V16.5h2.494a.9.9 0 0 0 0-1.8z"
			})), n.a.createElement("use", {
				fill: "inherit",
				xlinkHref: "#svg-add-collection",
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, n.a.createElement("g", {
				stroke: "none"
			}, n.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
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
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, s) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: o,
					widthLeft: r,
					gutter: a,
					...l
				} = e;
				return n.a.createElement("div", d({
					className: Object(i.a)(c.a.expandRightContainer, t)
				}, l), n.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: r,
						height: o,
						marginRight: a
					}
				}, Array.isArray(s) && s[0]), n.a.createElement("div", {
					className: c.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		},
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, s) {
			"use strict";
			var o;

			function n(e, t) {
				var s;
				return null === (s = e.modQueueTriggers) || void 0 === s ? void 0 : s.find(e => e.type === t)
			}
			s.d(t, "a", (function() {
					return o
				})), s.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT", e.CROWD_CONTROL = "CROWD_CONTROL", e.BAN_EVASION = "BAN_EVASION"
				}(o || (o = {}))
		},
		"./src/reddit/selectors/eventPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return r
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			}));
			var o = s("./src/lib/makeListingKey/index.ts"),
				n = s("./src/reddit/selectors/posts.ts");
			const r = (e, t) => {
					let {
						subredditName: s
					} = t;
					return Object(o.a)("ModhubPage-EventPosts", "timeline", {
						subredditName: s
					})
				},
				i = (e, t) => {
					const s = r(e, t);
					return Object(n.N)(e, {
						listingKey: s
					}) || []
				},
				a = (e, t) => {
					const s = r(e, t);
					return !!e.listings.postOrder.api.pending[s]
				},
				c = (e, t) => {
					const s = r(e, t);
					return !!(e.listings.postOrder.ids[s] || []).length
				},
				d = (e, t) => {
					const s = r(e, t),
						o = e.listings.postOrder.pageInfo[s];
					return !(!o || !o.hasNextPage)
				},
				l = (e, t) => {
					const s = r(e, t),
						o = e.listings.postOrder.pageInfo[s];
					return o && o.endCursor || null
				}
		},
		"./src/reddit/selectors/experiments/reportAd.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const i = Object(o.a)(e => Object(r.c)(e, {
					experimentName: n.Kc,
					experimentEligibilitySelector: r.a
				}), e => e),
				a = Object(o.a)(i, e => e === n.Qd)
		},
		"./src/reddit/selectors/experiments/reportingRevampDesktop.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/runTimeEnvVars.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = e => !!Object(r.b)(e) || Object(n.c)(e, {
				experimentEligibilitySelector: i.S,
				experimentName: o.e
			}) === o.c.Enabled
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/models/Post/index.ts"),
				a = s("./src/reddit/selectors/posts.ts");
			const c = e => Object(r.c)(e, {
					experimentName: n.if,
					experimentEligibilitySelector: r.a
				}),
				d = (e, t) => (t === n.pf.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored)) && !Object(i.A)(e),
				l = Object(o.a)(a.G, c, (e, t) => d(e, t));
			Object(o.a)((e, t) => t, c, (e, t) => d(e, t))
		},
		"./src/redditGQL/operations/EventPostsBySubredditName.json": function(e) {
			e.exports = JSON.parse('{"id":"d9609c5e1876"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPag~0596d05c.32b2e42f400ee938c2f1.js.map