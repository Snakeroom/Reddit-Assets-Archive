// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e.15d98a67e0e264e290ed.js
// Retrieved at 9/6/2022, 12:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"], {
		"./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return d
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = o("./src/reddit/selectors/experiments/devPlatform.ts");
			const c = Object(i.a)({
				resolved: {},
				chunkName: () => "devPlatform-components-ContextActions",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => Promise.all([o.e("vendors~devPlatform-components-AdminPanel-Utilities-DevPlatformConfig~devPlatform-components-ContextActions"), o.e("devPlatform-components-ContextActions")]).then(o.bind(null, "./src/devPlatform/components/ContextActions/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return o(t)
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
		"./src/devPlatform/singleton/constants.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return s
			})), o.d(t, "c", (function() {
				return n
			})), o.d(t, "d", (function() {
				return r
			})), o.d(t, "a", (function() {
				return i
			}));
			const s = "devvit-gateway-url",
				n = "devvit-mock-metadata",
				r = "devvit-debug-logging";
			var i;
			! function(e) {
				e[e.POST = 0] = "POST", e[e.COMMENT = 1] = "COMMENT", e[e.SUBREDDIT = 2] = "SUBREDDIT", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
			}(i || (i = {}))
		},
		"./src/reddit/actions/eventPosts/index.ts": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "fetchEventPostsPending", (function() {
				return v
			})), o.d(t, "fetchEventPostsSuccess", (function() {
				return g
			})), o.d(t, "fetchEventPostsFailure", (function() {
				return _
			})), o.d(t, "fetchMoreEventPostsSuccess", (function() {
				return k
			})), o.d(t, "eventPostsRequested", (function() {
				return j
			})), o.d(t, "startEventNowSuccess", (function() {
				return E
			})), o.d(t, "startEventNowRequested", (function() {
				return w
			})), o.d(t, "editEventTimeSuccess", (function() {
				return I
			})), o.d(t, "editEventTimeRequested", (function() {
				return P
			}));
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				i = o("./src/reddit/actions/eventPosts/constants.ts"),
				a = o("./src/reddit/actions/toaster.ts"),
				c = o("./src/lib/makeGqlRequest/index.ts"),
				d = o("./src/redditGQL/operations/EventPostsBySubredditName.json");
			var l = o("./src/lib/makeApiRequest/index.ts"),
				p = o("./src/lib/omitHeaders/index.ts"),
				m = o("./src/reddit/constants/headers.ts");
			var u = (e, t, o, s, r) => Object(l.a)(Object(p.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/api/event_post_time.json`,
				method: n.mb.POST,
				data: {
					id: t,
					event_start: o,
					event_end: s,
					event_tz: r
				}
			});
			var b = (e, t) => Object(l.a)(Object(p.a)(e, [m.a]), {
					endpoint: `${e.apiUrl}/api/start_event_post.json`,
					method: n.mb.POST,
					data: {
						id: t
					}
				}),
				h = o("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts"),
				f = o("./src/reddit/models/Toast/index.ts"),
				x = o("./src/reddit/selectors/eventPosts.ts"),
				C = o("./src/reddit/selectors/posts.ts");
			const O = () => s.fbt._("Something went wrong. Just don't panic.", null, {
					hk: "4onxm1"
				}),
				v = Object(r.a)(i.e),
				g = Object(r.a)(i.c),
				_ = Object(r.a)(i.b),
				k = Object(r.a)(i.d),
				j = e => async (t, o, s) => {
					let {
						gqlContext: n
					} = s, r = o();
					const i = Object(x.d)(r, {
							subredditName: e
						}),
						l = Object(x.b)(r, {
							subredditName: e
						}),
						p = Object(x.c)(r, {
							subredditName: e
						}),
						m = Object(x.a)(r, {
							subredditName: e
						}),
						u = l && p;
					if (i) return;
					const b = {
						name: e,
						pageSize: 25,
						nonInclusiveCursor: null
					};
					if (u) b.nonInclusiveCursor = m;
					else if (l && !p) return;
					const C = Object(x.e)(r, {
						subredditName: e
					});
					t(v({
						key: C
					}));
					const j = await ((e, t) => Object(c.a)(e, {
						...d,
						variables: t
					}))(n(), b);
					if (j.ok) {
						const {
							subredditInfoByName: e
						} = j.body.data, {
							eventPosts: s
						} = e, n = Object(h.a)(s);
						let i = [],
							a = {};
						const c = s.pageInfo || {
							hasNextPage: !1,
							endCursor: null,
							hasPreviousPage: !1,
							startCursor: null
						};
						n.length > 0 && (i = n.map(e => e.id), a = n.reduce((e, t) => (e[t.id] = t, e), {})), r = o(), t((u ? k : g)({
							key: C,
							postIds: i,
							meta: r.meta,
							posts: a,
							pageInfo: c
						}))
					} else t(_({
						error: j.error,
						key: C
					})), t(Object(a.f)({
						kind: f.b.Error,
						text: O()
					}))
				}, E = Object(r.a)(i.f), w = e => async (t, o, n) => {
					let {
						apiContext: r
					} = n;
					if ((await b(r(), e)).ok) {
						const n = () => s.fbt._("Following event has started successfully: {title}", [s.fbt._param("title", c)], {
							hk: "e9iz9"
						});
						t(E({
							postId: e
						}));
						const r = o(),
							i = Object(C.G)(r, {
								postId: e
							}),
							c = i && i.title || "";
						t(Object(a.f)({
							kind: f.b.SuccessMod,
							text: n()
						}))
					} else t(Object(a.f)({
						kind: f.b.Error,
						text: O()
					}))
				}, I = Object(r.a)(i.a), P = (e, t) => async (o, r, i) => {
					let {
						apiContext: c
					} = i;
					const d = await u(c(), e, t.startDate, t.endDate, t.timezoneName);
					if (d.ok) {
						const t = d.body,
							i = 14400,
							c = Math.round(t.event_start / n.Vb);
						let l = t.event_end;
						const p = {
							eventStart: c,
							eventEnd: l = l && Math.round(l / n.Vb) || c + i,
							eventIsLive: t.event_is_live
						};
						o(I({
							postId: e,
							eventInfo: p
						}));
						const m = r(),
							u = Object(C.G)(m, {
								postId: e
							}),
							b = u && u.title || "",
							h = () => s.fbt._("Following event time is updated successfully: {title}", [s.fbt._param("title", b)], {
								hk: "1m1w1c"
							});
						o(Object(a.f)({
							kind: f.b.SuccessMod,
							text: h()
						}))
					} else o(Object(a.f)({
						kind: f.b.Error,
						text: O()
					}))
				}
		},
		"./src/reddit/actions/postCollection/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return R
			})), o.d(t, "e", (function() {
				return L
			})), o.d(t, "g", (function() {
				return B
			})), o.d(t, "a", (function() {
				return G
			})), o.d(t, "c", (function() {
				return H
			})), o.d(t, "h", (function() {
				return z
			})), o.d(t, "f", (function() {
				return Z
			})), o.d(t, "d", (function() {
				return re
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/react-router-redux/es/index.js"),
				r = o("./src/lib/filterQueryParams/index.ts"),
				i = o("./src/lib/makeActionCreator/index.ts"),
				a = o("./src/reddit/actions/post.ts"),
				c = o("./src/reddit/actions/postCollection/constants.ts"),
				d = o("./src/reddit/actions/toaster.ts"),
				l = o("./src/reddit/constants/history.ts"),
				p = o("./src/lib/constants/index.ts"),
				m = o("./src/lib/makeApiRequest/index.ts"),
				u = o("./src/lib/omitHeaders/index.ts"),
				b = o("./src/reddit/constants/headers.ts");
			var h = (e, t, o) => Object(m.a)(Object(u.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/add_post_to_collection.json`,
				method: p.mb.POST,
				data: {
					collection_id: t,
					link_fullname: o
				}
			});
			var f = (e, t, o) => Object(m.a)(Object(u.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/create_collection.json`,
				method: p.mb.POST,
				data: {
					title: t,
					sr_fullname: o
				}
			});
			var x = (e, t) => Object(m.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/delete_collection.json`,
					method: p.mb.POST,
					data: {
						collection_id: t
					}
				}),
				C = o("./src/config.ts");
			var O = (e, t) => Object(m.a)(Object(u.a)(e, [b.a]), {
				endpoint: `${C.a.gatewayUrl}/desktopapi/v1/subreddit_collections/${t}`,
				method: p.mb.GET
			});
			var v = (e, t, o) => Object(m.a)(Object(u.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/remove_post_in_collection.json`,
				method: p.mb.POST,
				data: {
					collection_id: t,
					link_fullname: o
				}
			});
			var g = (e, t, o) => Object(m.a)(Object(u.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_title.json`,
				method: p.mb.POST,
				data: {
					collection_id: t,
					title: o
				}
			});
			var _ = (e, t, o) => Object(m.a)(Object(u.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/reorder_collection.json`,
				method: p.mb.POST,
				data: {
					collection_id: t,
					link_ids: o.join(",")
				}
			});
			var k = (e, t, o) => Object(m.a)(Object(u.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_description.json`,
				method: p.mb.POST,
				data: {
					collection_id: t,
					description: o
				}
			});
			var j = (e, t, o) => Object(m.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/update_collection_display_layout.json`,
					method: p.mb.POST,
					data: {
						collection_id: t,
						display_layout: o
					}
				}),
				E = o("./src/reddit/helpers/overlay/index.ts"),
				w = o("./src/reddit/helpers/path/index.ts"),
				I = o("./src/reddit/models/Toast/index.ts"),
				P = o("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				y = o("./src/reddit/selectors/postCollection.ts"),
				T = o("./src/reddit/selectors/posts.ts"),
				S = o("./src/reddit/selectors/subreddit.ts");
			const N = Object(i.a)(c.c),
				F = Object(i.a)(c.b),
				M = Object(i.a)(c.d),
				R = (e, t) => async (o, s, n) => {
					let {
						apiContext: r
					} = n;
					o(N());
					const i = await f(r(), e, t);
					let a;
					if (i.ok) {
						const e = s().meta,
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
						o(M({
							collection: t,
							meta: e
						})), a = t
					} else {
						const e = i.error;
						o(F(e))
					}
					return a
				}, A = Object(i.a)(c.f), L = e => async (t, o, n) => {
					let {
						apiContext: r
					} = n;
					const i = o().postCollection.subredditToIds || {};
					if (Object.keys(i).length > 0) return;
					const a = await O(r(), e);
					a.ok ? t(A(a.body)) : t(Object(d.f)({
						kind: I.b.Error,
						text: s.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, D = Object(i.a)(c.g), B = (e, t, o) => async (n, r, i) => {
					let {
						apiContext: a
					} = i;
					if ((await v(a(), e, t)).ok) {
						const i = r(),
							a = Object(T.G)(i, {
								postId: t
							}),
							c = a && a.title || "",
							l = Object(y.q)(i, {
								collectionId: e
							}),
							p = (l && l.postIds && l.postIds.indexOf(t) || -1) - 1;
						if (n(D({
								collectionId: e,
								postId: t
							})), o && p >= 0) {
							const t = r(),
								o = Object(y.q)(t, {
									collectionId: e
								}),
								s = o && o.postIds && o.postIds[p] || "",
								i = Object(T.G)(t, {
									postId: s
								});
							i && i.permalink && n(Object(E.a)(i.permalink))
						}
						n(Object(d.f)({
							kind: I.b.SuccessMod,
							text: s.fbt._("Following post removed from collection successfully: {postTitle}", [s.fbt._param("postTitle", c)], {
								hk: "8e1lV"
							}),
							buttonText: s.fbt._("UNDO", null, {
								hk: "3KPLib"
							}),
							buttonAction: G(e, t)
						}))
					} else n(Object(d.f)({
						kind: I.b.Error,
						text: s.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, V = Object(i.a)(c.a), W = Object(i.a)(c.t), G = (e, t) => async (o, n, r) => {
					let {
						apiContext: i
					} = r;
					const a = n();
					if ((await h(i(), e, t)).ok) {
						o(V({
							collectionId: e,
							postId: t
						})), o(W({
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
						o(Object(d.f)({
							kind: I.b.SuccessMod,
							text: s.fbt._("Success! You added a post to the collection: {title}", [s.fbt._param("title", i)], {
								hk: "3KNJWi"
							}),
							buttonText: s.fbt._("VIEW", null, {
								hk: "1SSkgL"
							}),
							buttonAction: Object(E.a)(n.permalink)
						}))
					} else o(Object(d.f)({
						kind: I.b.Error,
						text: s.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, U = Object(i.a)(c.e), H = (e, t) => async (o, i, a) => {
					let {
						apiContext: c
					} = a;
					const l = i();
					if ((await x(c(), e)).ok) {
						const {
							url: i
						} = l.platform.currentPage, a = Object(y.q)(l, {
							collectionId: e
						}), c = a && a.title || "", p = a && a.subredditId, m = p ? Object(S.c)(l, p) : "/";
						o(U({
							collectionId: e,
							collection: a
						})), o(t ? Object(n.c)(Object(r.a)(i, ["collection"])) : Object(n.b)(m)), o(Object(d.f)({
							kind: I.b.SuccessMod,
							text: s.fbt._("Collection deleted successfully: {title}", [s.fbt._param("title", c)], {
								hk: "4tcOKB"
							})
						}))
					} else o(Object(d.f)({
						kind: I.b.Error,
						text: s.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, q = Object(i.a)(c.r), K = Object(i.a)(c.n), J = Object(i.a)(c.s), z = (e, t) => async (o, n, r) => {
					let {
						apiContext: i
					} = r;
					o(q());
					const a = await g(i(), e, t);
					let c = !1;
					if (a.ok) o(J({
						collectionId: e,
						newTitle: t
					})), o(Object(d.f)({
						kind: I.b.SuccessMod,
						text: s.fbt._("Collection title updated successfully", null, {
							hk: "2hKzKl"
						})
					})), c = !0;
					else {
						const e = a.error;
						o(K(e)), o(Object(d.f)({
							kind: I.b.Error,
							text: s.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))
					}
					return c
				}, Q = Object(i.a)(c.l), X = Object(i.a)(c.m), Y = Object(i.a)(c.k), Z = e => async (t, o) => {
					const s = o();
					if (Object(P.b)(s) || Object(P.c)(s)) return void t(Object(a.bb)(Object(w.b)(e.permalink), e.id));
					const r = s.platform.currentPage.locationState;
					t(!(!r || !r[l.b.IsOverlay]) ? Object(E.a)(e.permalink) : Object(n.b)(Object(w.b)(e.permalink)))
				}, $ = Object(i.a)(c.i), ee = Object(i.a)(c.j), te = Object(i.a)(c.h), oe = Object(i.a)(c.p), se = Object(i.a)(c.o), ne = Object(i.a)(c.q), re = e => async t => {
					const o = [],
						{
							collectionId: n,
							description: r,
							displayLayout: i,
							postIds: a,
							title: c
						} = e;
					a && o.push(t(((e, t) => async (o, n, r) => {
						let {
							apiContext: i
						} = r;
						o($());
						const a = await _(i(), e, t);
						let c = !1;
						return a.ok ? (o(ee({
							collectionId: e,
							postIds: t
						})), o(Object(d.f)({
							kind: I.b.SuccessMod,
							text: s.fbt._("Collection order updated successfully", null, {
								hk: "4ccHEL"
							})
						})), c = !0) : (o(te({
							error: a.error
						})), o(Object(d.f)({
							kind: I.b.Error,
							text: s.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))), c
					})(n, a))), c && o.push(t(z(n, c))), void 0 !== r && o.push(t(((e, t) => async (o, n, r) => {
						let {
							apiContext: i
						} = r;
						o(Q());
						const a = await k(i(), e, t);
						let c = !1;
						if (a.ok) o(X({
							collectionId: e,
							newDescription: t
						})), o(Object(d.f)({
							kind: I.b.SuccessMod,
							text: s.fbt._("Collection description updated successfully", null, {
								hk: "1rIDCC"
							})
						})), c = !0;
						else {
							const e = a.error;
							o(Y(e)), o(Object(d.f)({
								kind: I.b.Error,
								text: s.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return c
					})(n, r))), i && o.push(t(((e, t) => async (o, n, r) => {
						let {
							apiContext: i
						} = r;
						o(oe());
						const a = await j(i(), e, t);
						let c = !1;
						if (a.ok) o(ne({
							collectionId: e,
							newLayout: t
						})), o(Object(d.f)({
							kind: I.b.SuccessMod,
							text: s.fbt._("Collection layout updated successfully", null, {
								hk: "1Rs19j"
							})
						})), c = !0;
						else {
							const e = a.error;
							o(se(e)), o(Object(d.f)({
								kind: I.b.Error,
								text: s.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return c
					})(n, i)));
					let l = !0;
					return await Promise.all(o).then(e => {
						e.forEach(e => {
							e || (l = !1)
						})
					}), l
				}
		},
		"./src/reddit/actions/postCreation/editing.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return M
			})), o.d(t, "a", (function() {
				return R
			})), o.d(t, "c", (function() {
				return A
			}));
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/reddit/actions/post.ts"),
				i = o("./src/reddit/actions/toaster.ts"),
				a = o("./src/lib/constants/index.ts"),
				c = o("./src/lib/makeApiRequest/index.ts"),
				d = o("./src/lib/omitHeaders/index.ts"),
				l = o("./src/reddit/constants/headers.ts"),
				p = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				m = o("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				u = o("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const b = e => !(!e.document || !e.document.length),
				h = e => ({
					text: null,
					richtext_json: JSON.stringify({
						document: e.document
					})
				}),
				f = e => ({
					text: e.markdown,
					return_rtjson: !0
				}),
				x = e => ({
					api_type: "json",
					show_error_list: !0,
					thing_id: e.post.id,
					validate_on_submit: !0,
					...b(e) ? h(e) : f(e)
				});
			var C = (e, t) => Object(c.a)(Object(d.a)(e, [l.a]), {
					endpoint: Object(u.a)(Object(p.a)(`${e.apiUrl}/api/editusertext`)),
					method: a.mb.POST,
					data: x(t)
				}).then(m.b),
				O = o("./src/reddit/helpers/overlay/index.ts"),
				v = o("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				g = o("./src/reddit/helpers/trackers/lightbox.ts"),
				_ = o("./src/reddit/helpers/trackers/post.ts"),
				k = o("./src/reddit/helpers/trackers/postComposer.ts"),
				j = o("./src/reddit/models/Media/index.ts"),
				E = o("./src/reddit/models/PostCreationForm/index.ts"),
				w = o("./src/reddit/models/Toast/index.ts"),
				I = o("./src/reddit/selectors/posts.ts"),
				P = o("./src/reddit/actions/postCreation/constants.ts"),
				y = o("./src/reddit/actions/postCreation/general.ts");
			const T = Object(n.a)(P.l),
				S = Object(n.a)(P.m),
				N = Object(n.a)(P.x),
				F = Object(n.a)(P.H),
				M = Object(n.a)(P.I),
				R = (e, t) => async (o, s, n) => {
					let {
						apiContext: r
					} = n;
					const i = s(),
						a = Object(I.G)(i, {
							postId: e
						});
					t ? (o(Object(O.a)(a.permalink)), Object(g.e)(e, "edit")(i)) : Object(_.e)(e, "edit")(i);
					const {
						media: c
					} = a;
					if (!c) return;
					let d, l = E.i.RICH_TEXT,
						p = "";
					c.type === j.o.TEXT ? (l = E.i.MARKDOWN, p = c.content) : c.type === j.o.RTJSON && (p = (l = c.rteMode || E.i.RICH_TEXT) === E.i.MARKDOWN ? c.markdownContent : c.richtextContent, d = c.mediaMetadata || void 0), o(F({
						editorMode: l,
						mediaMetadata: d,
						postContent: p,
						postId: e
					}))
				}, A = e => async (t, o, n) => {
					let {
						apiContext: a
					} = n;
					const {
						post: c
					} = e, d = !c.media || "rtjson" !== c.media.type && "text" !== c.media.type ? "" : c.media.rteMode;
					k.E(o(), Object(y.o)(d)), t(N(c.id));
					const l = await C(a(), e),
						p = !1 === l.body.success;
					if (t(T(c.id)), l.ok && !p) {
						t(Object(i.f)({
							kind: w.b.SuccessCommunity,
							text: s.fbt._("Post successfully edited", null, {
								hk: "xej5K"
							})
						})), t(M(c.id));
						const e = Object(v.a)(l.body);
						t(Object(r.S)({
							[c.id]: e
						}))
					} else t(S(l.error))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/streams.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return m
			})), o.d(t, "a", (function() {
				return O
			})), o.d(t, "b", (function() {
				return v
			})), o.d(t, "d", (function() {
				return g
			})), o.d(t, "e", (function() {
				return _
			})), o.d(t, "f", (function() {
				return j
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = o("./node_modules/query-string/index.js"),
				n = o.n(s),
				r = o("./src/lib/makeActionCreator/index.ts"),
				i = o("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = o("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				c = o("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				d = o("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				l = o("./src/reddit/selectors/subreddit.ts");
			const p = new Set(["home", "r/popular"]),
				m = e => {
					const t = location && location.search || "",
						o = n.a.parse(t);
					p.has(e) && (o.related = e);
					const s = n.a.stringify(o);
					return s ? `?${s}` : ""
				},
				u = Object(r.a)(i.N),
				b = Object(r.a)(i.y),
				h = Object(r.a)(i.O),
				f = Object(r.a)(i.z),
				x = Object(r.a)(i.M),
				C = Object(r.a)(i.L),
				O = Object(r.a)(i.t),
				v = Object(r.a)(i.u),
				g = e => async (t, o, s) => {
					let {
						gqlContext: n
					} = s;
					const r = Object(c.g)(e),
						i = o();
					if (Object(d.d)(i, r)) return;
					t(u(r));
					const l = await Object(a.e)(n(), r),
						p = Date.now();
					if (l.ok && l.body && l.body.data) {
						const e = l.body.data;
						t(b({
							model: e,
							utcTimeStamp: p
						}))
					} else t(w({
						streamId: r,
						error: l.error,
						utcTimeStamp: p
					}))
				}, _ = (e, t) => async (o, s) => o(k(e, t)), k = (e, t) => async (o, s, n) => {
					let {
						gqlContext: r
					} = n;
					const i = s();
					if (Object(d.f)(i)) return;
					o(h());
					const c = await Object(a.f)(r(), e, t),
						l = Date.now();
					if (c.ok && c.body && c.body.data) {
						const t = c.body.data;
						o(f({
							listingName: e,
							models: t,
							utcTimeStamp: l
						}))
					} else o(I({
						error: c.error,
						utcTimeStamp: l
					}))
				}, j = (e, t) => async (o, s) => o(E(e, t)), E = (e, t) => async (o, s, n) => {
					let {
						gqlContext: r
					} = n;
					const i = s();
					if (Object(d.f)(i)) return;
					o(h());
					const c = Date.now(),
						p = e.replace("r/", ""),
						m = Object(l.G)(i, p),
						u = await Object(a.b)(r(), {
							subredditId: m,
							options: t
						}),
						b = u.body;
					u.ok && b && b.data || o(I({
						error: u.error,
						utcTimeStamp: c
					}));
					const x = b.data.liveVideoFeed.posts.edges.map(e => (async (e, t) => {
							const o = await Object(a.e)(e, t),
								s = Date.now(),
								n = o.body;
							return n && n.data ? n.data : void w({
								streamId: t,
								error: o.error,
								utcTimeStamp: s
							})
						})(r(), e.node.id)),
						C = (await Promise.all(x)).filter(e => void 0 !== typeof e);
					o(f({
						listingName: e,
						models: C,
						utcTimeStamp: c
					}))
				}, w = e => async t => {
					t(x(e))
				}, I = e => async t => {
					t(C(e))
				}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			})), o.d(t, "c", (function() {
				return r
			})), o.d(t, "b", (function() {
				return i
			}));
			var s = o("./src/lib/loadableAction/index.ts");
			const n = Object(s.a)(() => Promise.all([o.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), o.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				r = Object(s.a)(() => Promise.all([o.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), o.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(s.a)(() => Promise.all([o.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), o.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx": function(e, t, o) {
			"use strict";
			var s = o("./src/lib/lessComponent.tsx"),
				n = o("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				r = o("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				i = o.n(r);
			const a = s.a.wrapped(n.c, "RestrictedButton", i.a);
			t.a = a
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less": function(e, t, o) {
			e.exports = {
				RestrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				restrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				Show: "YoaDbMbI8PpFFWQbD_Uwq",
				show: "YoaDbMbI8PpFFWQbD_Uwq",
				CommentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk",
				commentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk"
			}
		},
		"./src/reddit/components/CommentsChat/LiveIcon/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/CommentsChat/LiveIcon/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return m
			}));
			var s = o("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./node_modules/react/index.js"),
				i = o.n(r),
				a = o("./node_modules/react-redux/es/index.js"),
				c = o("./src/lib/classNames/index.ts"),
				d = o("./src/reddit/selectors/chatPost.ts"),
				l = o("./src/reddit/components/CommentsChat/LiveIcon/index.m.less"),
				p = o.n(l);
			const m = e => {
				let {
					className: t,
					postId: o
				} = e;
				const [r, l] = i.a.useState(!1), m = Object(a.e)(e => Object(d.d)(e, {
					postId: o
				})), u = m && r;
				return m ? i.a.createElement(s.a, {
					rootMargin: "20px 0px 20px 0px",
					threshold: .1,
					onChange: e => {
						e.isIntersecting && e.intersectionRatio >= .1 ? r || l(!0) : r && l(!1)
					}
				}, i.a.createElement("div", {
					className: Object(c.a)(p.a.Icon, t)
				}, i.a.createElement("span", {
					className: Object(c.a)(p.a.Animate, p.a.top, {
						[p.a.play]: u
					})
				}, i.a.createElement("span", {
					className: p.a.bigCircle
				}), i.a.createElement("span", {
					className: p.a.midCircle
				}), i.a.createElement("span", {
					className: p.a.smallCircle
				})), i.a.createElement("p", {
					className: p.a.IconText
				}, n.fbt._("Live Chat", null, {
					hk: "gyqAe"
				})), i.a.createElement("span", {
					className: Object(c.a)(p.a.Animate, p.a.bottom, {
						[p.a.play]: u
					})
				}, i.a.createElement("span", {
					className: p.a.bigCircle
				}), i.a.createElement("span", {
					className: p.a.midCircle
				}), i.a.createElement("span", {
					className: p.a.smallCircle
				})))) : null
			}
		},
		"./src/reddit/components/CommentsLink/index.m.less": function(e, t, o) {
			e.exports = {
				commentsLink: "_1UoeAeSRhOKSNdY_h3iS1O",
				commentIcon: "_3DVrpDrMM9NLT6TlsTUMxC",
				defaultCursorWrapper: "_3m17ICJgx45k_z-t82iVuO",
				link: "_1Hw7tY9pMr-T1F4P1C-xNU",
				text: "FHCV02u6Cp2zYL0fhQPsO",
				commentsText: "_25BV1fTi10_HqCnD195T85"
			}
		},
		"./src/reddit/components/CommentsLink/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = o("./node_modules/reselect/es/index.js"),
				c = o("./src/lib/classNames/index.ts"),
				d = o("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = o("./src/reddit/actions/post.ts"),
				p = o("./node_modules/fbt/lib/FbtPublic.js"),
				m = o("./src/lib/prettyPrintNumber/index.ts"),
				u = o("./src/reddit/components/CountAnimation/index.tsx"),
				b = o("./src/reddit/constants/postLayout.ts"),
				h = o("./src/reddit/icons/fonts/Comment/index.tsx"),
				f = o("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				x = o("./src/reddit/components/CommentsLink/index.m.less"),
				C = o.n(x);
			const O = () => 0,
				v = e => {
					let t, {
						hasModPostPerms: o,
						isCountAnimShadowTestEnabled: i,
						isChatPost: a,
						isCommentCountAnimation: d,
						modModeEnabled: x,
						numComments: v,
						postId: g,
						shouldShowIcon: _,
						shouldShowText: k,
						text: j,
						type: E
					} = e;
					const w = d && v < f.a,
						I = a ? p.fbt._({
							"*": "{number} messages",
							_1: "1 message"
						}, [p.fbt._plural(v, "number", Object(m.b)(v))], {
							hk: "2wEqSc"
						}) : p.fbt._({
							"*": "{number} comments",
							_1: "1 comment"
						}, [p.fbt._plural(v, "number", Object(m.b)(v))], {
							hk: "1QeOde"
						}),
						P = a ? p.fbt._({
							"*": "messages",
							_1: "message"
						}, [p.fbt._plural(v)], {
							hk: "1mMKLS"
						}) : p.fbt._({
							"*": "comments",
							_1: "comment"
						}, [p.fbt._plural(v)], {
							hk: "2fJpkn"
						});
					t = j || (E === b.g.Compact || x && o ? Object(m.b)(v) : I);
					const y = Object(r.d)(),
						T = Object(s.useCallback)(e => {
							const {
								commentCountChange: t
							} = e.subscribe.data;
							0 !== t && y(Object(l.H)({
								postId: g,
								delta: t
							}))
						}, [y, g]),
						S = Object(s.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "COMMENT_COUNT_UPDATE",
									postID: g
								}
							}
						});
					return n.a.createElement(n.a.Fragment, null, _ && n.a.createElement(h.a, {
						className: C.a.commentIcon,
						role: "presentation"
					}), k && n.a.createElement(n.a.Fragment, null, n.a.createElement("span", {
						className: C.a.text
					}, (w || i) && n.a.createElement(u.b, {
						countToUpperBound: v,
						incrementDelta: O,
						initialDelay: O,
						initialDisplayCount: v,
						postId: g,
						shouldDisjointAnimation: !0,
						subsequentRecurringDelay: O,
						featureName: u.a.Comment,
						queryKey: "postCommentCount",
						queryVariables: S.current,
						onDataCB: T,
						isLoadTestOnly: Boolean(i) && !w
					}), !w && t), (!x || !o) && w && n.a.createElement("span", {
						className: Object(c.a)(C.a.text, C.a.commentsText)
					}, P)))
				};
			var g = o("./src/reddit/constants/componentTestIds.ts"),
				_ = o("./src/reddit/helpers/path/index.ts"),
				k = o("./src/reddit/hooks/useClickSourceData.ts"),
				j = o("./src/reddit/selectors/chatPost.ts"),
				E = o("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				w = o("./src/reddit/selectors/experiments/postSeo.ts"),
				I = o("./src/reddit/selectors/posts.ts"),
				P = o("./src/reddit/selectors/user.ts"),
				y = o("./src/higherOrderComponents/withAdClickLocation/Locations.ts");
			const T = Object(r.b)(() => Object(a.c)({
				isChatPost: j.d,
				isPostSEOEligible: w.e,
				postPermalink: I.F,
				shouldOpenPostInNewTab: P.jb,
				isBlockingInterstitialEnabled: E.b,
				isBlockingInterstitialV2Enabled: E.c
			}));
			t.a = T(e => {
				let {
					className: t,
					hasModPostPerms: o,
					forceOpenInNewTab: s,
					isChatPost: a,
					isCommentPermalink: p,
					isCommentsPage: m,
					isOverlay: u,
					isPostSEOEligible: b,
					modModeEnabled: h,
					numComments: f,
					onClick: x,
					postPermalink: O,
					shouldOpenPostInNewTab: j,
					shouldShowIcon: E = !0,
					shouldShowText: w = !0,
					text: I,
					type: P,
					postId: T,
					isCommentCountAnimation: S,
					isCountAnimShadowTestEnabled: N,
					isBlockingInterstitialEnabled: F,
					isBlockingInterstitialV2Enabled: M
				} = e;
				const R = Object(r.d)(),
					A = m && !p && !b,
					L = p && !u,
					D = Object(k.a)(),
					B = n.a.createElement(v, {
						hasModPostPerms: o,
						isCountAnimShadowTestEnabled: !!N,
						isChatPost: a,
						isCommentCountAnimation: !!S,
						modModeEnabled: h,
						numComments: f,
						postId: T,
						shouldShowIcon: E,
						shouldShowText: w,
						text: I,
						type: P
					});
				return A ? n.a.createElement("div", {
					className: Object(c.a)(C.a.commentsLink, C.a.defaultCursorWrapper, t),
					onClick: x
				}, B) : n.a.createElement(i.a, {
					rel: "nofollow",
					"data-click-id": "comments",
					"data-adclicklocation": y.b.COMMENTS,
					"data-test-id": g.a,
					className: Object(c.a)(C.a.commentsLink, C.a.link, t),
					target: s || j ? "_blank" : void 0,
					to: L ? Object(_.b)(O) : Object(d.a)(O, !0, D),
					onClick: e => {
						(F || M) && (e.preventDefault(), R(Object(l.Z)(Object(_.b)(O), T))), x && x()
					}
				}, B)
			})
		},
		"./src/reddit/components/ContentTooltip/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/ContentTooltip/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./src/higherOrderComponents/addOverlayEvents.tsx"),
				n = o("./node_modules/react/index.js"),
				r = o.n(n),
				i = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				c = o("./src/lib/classNames/index.ts"),
				d = o("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = o("./src/lib/fastdom/index.ts"),
				p = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = o("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = o("./src/reddit/selectors/tooltip.ts"),
				b = o("./src/reddit/components/ContentTooltip/index.m.less"),
				h = o.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			const x = {
					height: 200,
					width: 200
				},
				C = e => {
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
						className: o,
						style: s,
						caretPosition: n,
						caretColor: i,
						onClick: a,
						hideCaret: d
					} = e;
					return r.a.createElement("div", {
						onClick: a,
						className: Object(c.a)(o, h.a.StyledTooltipContainer, {
							[h.a.caretOnTop]: "top" === n,
							[h.a.caretOnLeft]: "left" === n,
							[h.a.caretOnRight]: "right" === n,
							[h.a.caretOnBottom]: "bottom" === n,
							[h.a.hideCaret]: d
						}),
						style: {
							...s,
							"--contentTooltip-caretColor": i && i[n] ? i[n] : Object(m.a)(e).body
						}
					}, t)
				}),
				v = Object(a.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: o
						} = t;
						return Object(u.b)(o)(e)
					}
				}),
				g = Object(p.a)(O, [s.a.Click, s.a.Keydown]),
				_ = Object(i.b)(v);
			class k extends r.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = x
						} = this.props;
						l.a.read(() => {
							const o = document.getElementById(e);
							if (!o) return;
							const s = o.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let n = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									n = window.innerHeight - s.bottom > t.height;
									break;
								case "left":
									n = s.left > t.width;
									break;
								case "right":
									n = s.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									n = s.top > t.height
							}
							this.setState({
								position: n ? this.props.defaultTooltipPosition : C(this.props.defaultTooltipPosition)
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
						tooltipPosition: o,
						caretPosition: s
					} = this.getPositions(e);
					return r.a.createElement(g, f({}, this.props, {
						caretPosition: s,
						targetPosition: t,
						tooltipPosition: o
					}))
				}
			}
			t.a = _(k)
		},
		"./src/reddit/components/CreatorStats/Icon.m.less": function(e, t, o) {
			e.exports = {
				icon: "D7SJKwX8OlPkNjhgXO71s"
			}
		},
		"./src/reddit/components/CreatorStats/Icon.tsx": function(e, t, o) {
			"use strict";
			var s = o("./src/lib/constants/icons.ts"),
				n = o("./node_modules/react/index.js"),
				r = o.n(n),
				i = o("./node_modules/react-redux/es/index.js"),
				a = o("./src/reddit/icons/fonts/index.tsx"),
				c = o("./src/reddit/selectors/subreddit.ts"),
				d = o("./src/reddit/components/CreatorStats/helpers.ts"),
				l = o("./src/reddit/components/CreatorStats/Icon.m.less"),
				p = o.n(l);
			t.a = e => {
				let {
					postCreated: t,
					subredditId: o
				} = e;
				const l = Object(i.e)(e => o ? Object(c.V)(e, {
						subredditId: o
					}) : void 0),
					[m, u] = Object(n.useState)(!0);
				return Object(n.useEffect)(() => {
					let e = !0;
					if (void 0 !== t) {
						const o = Object(d.e)(t);
						e = e && !o
					}
					if (void 0 !== l) {
						const t = l.isQuarantined;
						e = e && !t
					}
					u(e)
				}, [t, l]), r.a.createElement(a.a, {
					name: s.a.statistics,
					className: m ? p.a.icon : void 0
				})
			}
		},
		"./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less": function(e, t, o) {
			e.exports = {
				img: "_2j4blQAaYrPKIhe5jBJ9c8"
			}
		},
		"./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./node_modules/react-redux/es/index.js"),
				i = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less"),
				c = o.n(a),
				d = o("./src/reddit/icons/fonts/Gift/index.tsx"),
				l = o("./src/reddit/selectors/gold/awardIcon.ts"),
				p = o("./src/reddit/selectors/gold/purchaseCatalog.ts");
			t.a = e => {
				const t = Object(r.e)(p.b),
					o = Object(r.e)(e => Object(l.a)(e, {
						award: t,
						minSize: 32
					}));
				return t && o ? n.a.createElement("img", {
					alt: t.name,
					className: Object(i.a)(c.a.img, e.className),
					id: e.id,
					src: o
				}) : n.a.createElement(d.a, e)
			}
		},
		"./src/reddit/components/Flatlist/ResponsiveRow.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				a = o("./src/reddit/controls/Dropdown/Row.tsx"),
				c = o("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				d = o("./src/reddit/components/Flatlist/index.m.less"),
				l = o.n(d);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					flatlistItem: t,
					isLoggedIn: o,
					isUserOp: s,
					noBreakpoints: d,
					...m
				} = e;
				return n.a.createElement("div", {
					"data-ignore-click": !!m.searchIgnoreClick,
					className: l.a.rowContainer,
					"data-adclicklocation": c.b.FLATLIST_GENERAL
				}, n.a.createElement(a.a, p({}, m, {
					className: d ? l.a.responsiveRow : Object(r.a)(l.a.responsiveRow, Object(i.b)({
						flatlistItem: t,
						isLoggedIn: o,
						isUserOp: s
					}))
				})))
			}
		},
		"./src/reddit/components/Flatlist/breakpoints.m.less": function(e, t, o) {
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
		"./src/reddit/components/Flatlist/constants.ts": function(e, t, o) {
			"use strict";
			var s;
			o.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.EditPost = "EDITPOST", e.EditFlair = "EDITFLAIR", e.Save = "SAVE", e.Gild = "GILD", e.Hide = "HIDE", e.PostOverflowMenu = "POST_OVERFLOW_MENU", e.Report = "REPORT", e.Share = "SHARE", e.ShowFewerLikeThis = "SHOW_FEWER_LIKE_THIS", e.ShowMoreLikeThis = "SHOW_MORE_LIKE_THIS", e.Insights = "INSIGHTS"
				}(s || (s = {}))
		},
		"./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return s
			})), o.d(t, "b", (function() {
				return p
			}));
			var s, n, r, i = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/components/Flatlist/breakpoints.m.less"),
				c = o.n(a),
				d = o("./src/reddit/components/Flatlist/constants.ts");
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(s || (s = {})),
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
					[d.a.Insights]: n.First
				},
				p = e => {
					return (e => {
						const t = c.a[e.type],
							o = c.a[e.group],
							s = c.a[e.groupVariant];
						return Object(i.a)(t, o, s)
					})({
						type: e.breakpointType || s.HideIfVWSmaller,
						group: l[e.flatlistItem],
						groupVariant: ((e, t) => e && t ? r.Op : e ? r.LoggedIn : r.LoggedOut)(e.isLoggedIn, e.isUserOp)
					})
				}
		},
		"./src/reddit/components/Flatlist/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/Flatlist/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return _e
			})), o.d(t, "a", (function() {
				return ke
			})), o.d(t, "d", (function() {
				return Pe
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/react/index.js"),
				r = o.n(n),
				i = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				c = o("./src/lib/classNames/index.ts"),
				d = o("./src/lib/constants/index.ts"),
				l = o("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = o("./src/lib/lessComponent.tsx"),
				m = o("./src/lib/ads/index.ts"),
				u = o("./src/lib/timezone/index.ts"),
				b = o("./src/reddit/actions/gold/modals.ts"),
				h = o("./src/reddit/actions/modal.ts"),
				f = o("./src/reddit/actions/post.ts"),
				x = o("./src/reddit/actions/postCreation/editing.ts"),
				C = o("./src/reddit/actions/postFlair.ts"),
				O = o("./src/reddit/actions/reportFlow/index.ts"),
				v = o("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				g = o("./src/reddit/components/CommentsLink/index.tsx"),
				_ = o("./src/reddit/components/CreatorStats/Icon.tsx"),
				k = o("./src/reddit/hooks/useTracking.ts"),
				j = o("./src/reddit/helpers/trackers/freeAwardOffer.ts"),
				E = o("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				w = o("./src/reddit/components/ContentTooltip/index.tsx"),
				I = o("./src/reddit/components/GiveAwardTooltip/index.m.less"),
				P = o.n(I);
			const {
				fbt: y
			} = o("./node_modules/fbt/lib/FbtPublic.js");
			var T = e => {
					const {
						tooltipId: t
					} = e, o = Object(i.e)(E.b), s = Object(k.a)();
					return Object(n.useEffect)(() => {
						o && s(Object(j.c)())
					}, [o, s]), o ? r.a.createElement(w.a, {
						className: P.a.freeAwardTooltip,
						caretColor: {
							bottom: "#F6481E"
						},
						tooltipSizeEstimate: {
							height: 48,
							width: 148
						},
						tooltipId: t,
						defaultTooltipPosition: "top"
					}, r.a.createElement("div", {
						className: P.a.freeAwardContainer
					}, y._("Tap to give your {award name} Award", [y._param("award name", o.name)], {
						hk: "2EMqbP"
					}))) : null
				},
				S = o("./src/reddit/components/ModActionsMenu/index.tsx"),
				N = o("./src/reddit/components/ModModeReports/helpers.ts"),
				F = o("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				M = o("./src/reddit/components/PostFlairPicker/index.tsx"),
				R = o("./src/reddit/components/PostModModeDropdown/index.tsx"),
				A = o("./src/reddit/components/PostOverflowMenu/index.tsx"),
				L = o("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				D = o("./src/reddit/components/ShareMenu/index.tsx"),
				B = o("./src/reddit/components/TrackingHelper/index.tsx"),
				V = o("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				W = o("./src/reddit/constants/postLayout.ts"),
				G = o("./src/reddit/contexts/PageLayer/index.tsx"),
				U = o("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				H = o("./src/reddit/helpers/styles/smartTextColor.ts"),
				q = o("./src/reddit/selectors/user.ts"),
				K = o("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				J = o("./src/reddit/helpers/correlationIdTracker.ts"),
				z = o("./src/reddit/helpers/trackers/modTools.ts"),
				Q = o("./src/reddit/helpers/trackers/post.ts"),
				X = o("./src/reddit/icons/fonts/index.tsx"),
				Y = o("./src/reddit/icons/fonts/ModActions/index.tsx"),
				Z = o("./src/reddit/icons/fonts/Share/index.tsx"),
				$ = o("./src/reddit/models/Media/index.ts"),
				ee = o("./src/reddit/models/NewStructuredStyles/index.ts"),
				te = o("./src/reddit/models/PostCreationForm/index.ts"),
				oe = o("./src/reddit/models/User/index.ts"),
				se = o("./src/reddit/components/Flatlist/constants.ts"),
				ne = o("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				re = o("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				ie = o("./src/reddit/actions/postCollection/index.ts"),
				ae = o("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx"),
				ce = o("./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx"),
				de = o("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx"),
				le = o("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				pe = o("./src/reddit/selectors/activeModalId.ts"),
				me = o("./src/reddit/selectors/experiments/antievil/index.tsx"),
				ue = o("./src/reddit/selectors/posts.ts"),
				be = o("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				he = o("./src/reddit/components/Flatlist/index.m.less"),
				fe = o.n(he);

			function xe() {
				return (xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			let Ce, Oe;
			const ve = p.a.button("ShareButton", fe.a),
				ge = p.a.wrapped(D.a, "ShareMenu", fe.a),
				_e = Object(l.a)(e => {
					let {
						className: t,
						...o
					} = e;
					return r.a.createElement(Y.a, xe({}, o, {
						className: Object(c.a)(fe.a.modActionsIcon, t),
						style: {
							color: Object(H.a)(Object(U.a)(o), ee.a.actionIcon, ee.b.actionIcon)
						}
					}))
				}),
				ke = e => r.a.createElement("div", xe({}, e, {
					className: Object(c.a)(fe.a.flatlistSeparator, e.className)
				})),
				je = Object(G.u)({
					currentProfileName: G.i,
					isCommentPermalink: G.w,
					isCommentsPage: G.x,
					isProfilePostListing: G.L,
					pageLayer: e => e
				}),
				Ee = Object(a.c)({
					activeModalId: pe.a,
					claimedFreeAward: E.b,
					layout: G.S,
					userIsOp: q.Db,
					subreddit: G.r,
					isBlockedUserBannerEnabled: (e, t) => {
						let {
							post: o
						} = t;
						return !!Object(ue.w)(e, {
							postId: o.postId
						}) && Object(me.a)(e)
					},
					isTrueblockPCBlockeeEnabled: me.e
				}),
				we = Object(i.b)(Ee, (e, t) => {
					let {
						post: s,
						isOverlay: n,
						isCommentsPage: r
					} = t;
					return {
						addPostToCollection: (t, o) => e(Object(ie.a)(t, o)),
						onToggleModal: t => e(Object(h.i)(t)),
						onToggleSave: () => e(Object(f.V)(s.postId)),
						onHide: t => e(Object(f.fb)(s.postId, !s.hidden, n, !0)),
						onReportClick: () => e(Object(O.c)(s.postId, n)),
						onEdit: () => {
							const t = !n && !r;
							e(Object(x.a)(s.postId, t))
						},
						onFlairPost: () => e(Object(h.i)(Object(M.b)(s.postId, n))),
						onGildClick: (t, o) => e(Object(b.d)({
							awardId: o,
							correlationId: t,
							thingId: s.postId
						})),
						onFlairChanged: t => {
							let {
								selectedTemplateId: o,
								previewFlair: n
							} = t;
							return e(Object(C.h)({
								post: s,
								selectedTemplateId: o,
								previewFlair: n
							}))
						},
						toggleEditStartTimeModal: async () => {
							Ce && Oe || ([Ce, Oe] = await Promise.all([o.e("schedulePickerModal").then(o.bind(null, "./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx")).then(e => e.default), Promise.resolve().then(o.bind(null, "./src/reddit/actions/eventPosts/index.ts")).then(e => e.editEventTimeRequested)])), e(Object(h.i)(Object(te.s)(s.postId, n, te.k.POST_OVERFLOW_MENU)))
						},
						addEventStartTime: t => {
							Oe && e(Oe(s.id, t))
						}
					}
				}),
				Ie = r.a.memo(e => {
					const {
						activeModalId: t,
						addEventStartTime: i,
						className: a,
						currentProfileName: l,
						currentUser: p,
						forceOpenInNewTab: b,
						hasModFlairPerms: h,
						hasModFullPerms: f,
						hasModPostPerms: x,
						isCommentPermalink: C,
						isCommentsPage: O,
						isCountAnimShadowTestEnabled: k,
						isLargePost: j,
						isOverlay: E,
						isProfilePostListing: w,
						isSticky: I,
						layout: P,
						modModeEnabled: y,
						onClickInsightsButton: D,
						onFlairChanged: B,
						onIgnoreReports: G,
						onOpenReportsDropdown: U,
						pageLayer: H,
						post: q,
						sendEvent: Y,
						showEditFlair: ee,
						showEditPost: ie,
						subreddit: le,
						toggleEditStartTimeModal: pe,
						tooltipType: me,
						userIsOp: ue,
						searchIgnoreClick: he,
						isCommentCountAnimation: xe,
						hostPostData: Oe,
						listingKey: ke,
						onGildClick: je,
						onToggleModal: Ee,
						claimedFreeAward: we,
						onToggleSave: Ie,
						onHide: ye,
						addPostToCollection: Te,
						onReportClick: Se,
						isBlockedUserBannerEnabled: Ne,
						shouldHideItems: Fe,
						shouldShowInsightsButton: Me,
						isTrueblockPCBlockeeEnabled: Re
					} = e, Ae = Object(n.useCallback)(async () => {
						const e = Object(J.d)(J.a.GildingFlow, !0);
						je(e, null == we ? void 0 : we.id);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(o.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						Y(t(q.id))
					}, [je, q, Y, we]), Le = Object(n.useCallback)(() => {
						t && Ee(t)
					}, [t, Ee]), De = Object(n.useCallback)(() => {
						const e = Object(te.t)(q.id, E);
						Ee(e)
					}, [Ee, E, q]), Be = Object(n.useCallback)(e => {
						Te(e.id, q.id).then(() => Le())
					}, [Te, Le, q]), Ve = Object(n.useCallback)((e, t) => {
						Y(Object(Q.k)(q.id, e, E ? "post_detail" : "post", ke, Oe, void 0, null == t ? void 0 : t.referralId))
					}, [Oe, E, Y, ke, q]), We = Object(n.useCallback)(() => {
						Ie(), Ve(q.saved ? "unsave" : "save")
					}, [Ie, q, Ve]), Ge = Object(n.useCallback)(() => {
						ye(!!q.hidden), Ve(q.hidden ? "unhide" : "hide")
					}, [ye, q, Ve]), Ue = Object(n.useCallback)(() => {
						Se(), Ve("report")
					}, [Se, Ve]), He = Object(n.useMemo)(() => r.a.createElement(ve, {
						"data-click-id": "share",
						"data-adclicklocation": be.b.FLATLIST_SHARE
					}, r.a.createElement(Z.a, {
						className: fe.a.shareIcon
					}), r.a.createElement("span", {
						className: fe.a.shareText
					}, s.fbt._("share", null, {
						hk: "1eAfZg"
					}))), []), qe = !!p && Object(oe.e)(p) === q.author, Ke = Object(re.a)("View--Reports", q.id, me), Je = Object(re.a)(d.tc, q.id, me), ze = Object(N.c)(q), Qe = Pe("-mod-actions-menu", q.id, E, I), Xe = Object(N.a)(q), Ye = q.postId, Ze = P === W.g.Large, $e = !O && Ze || x && y || Fe, et = !(E || O || C), tt = !(q.authorIsBlocked && Re) && p && q.isGildable && !(q.authorIsBlocked && Ne) && !(q.unrepliableReason && Re), ot = q.media && q.media.type === $.o.LIVEVIDEO, st = !!q.recommendationContext, nt = q.isSponsored || Object(m.u)(H);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(c.a)(fe.a.flatlistContainer, a)
					}, r.a.createElement(g.a, {
						className: Object(c.a)(fe.a.rowContainer, fe.a.commentsLink),
						forceOpenInNewTab: b,
						hasModPostPerms: x,
						isCommentsPage: O,
						isCommentPermalink: C,
						isOverlay: E,
						postId: q.id,
						modModeEnabled: y,
						numComments: q.numComments,
						isCommentCountAnimation: xe,
						isCountAnimShadowTestEnabled: k
					}), tt && r.a.createElement(r.a.Fragment, null, r.a.createElement(K.a, {
						displayText: s.fbt._("Award", null, {
							hk: "2fZCpE"
						}),
						textClassName: fe.a.responsiveRowText,
						flatlistItem: se.a.Gild,
						isLoggedIn: !!p,
						isUserOp: ue,
						onClick: Ae,
						searchIgnoreClick: he,
						"data-adclicklocation": be.b.FLATLIST_AWARD,
						skipRoleAttr: !0
					}, r.a.createElement(ae.a, {
						className: fe.a.awardIcon,
						id: Je
					})), r.a.createElement(T, {
						postOrComment: q,
						tooltipId: Je
					})), r.a.createElement(ge, {
						className: Object(c.a)(fe.a.rowContainer, Object(ne.b)({
							flatlistItem: se.a.Share,
							isLoggedIn: !!p,
							isUserOp: ue
						})),
						dropdownId: Pe("-share-menu", q.id, E, I),
						permalink: q.permalink,
						post: q,
						sendEventWithName: Ve,
						subredditType: null == le ? void 0 : le.type
					}, He), ie && !$e && r.a.createElement(K.a, {
						displayText: s.fbt._("Edit post", null, {
							hk: "Jq2Cr"
						}),
						textClassName: fe.a.responsiveRowText,
						flatlistItem: se.a.EditPost,
						isLoggedIn: !!p,
						isUserOp: ue,
						onClick: e.onEdit,
						skipRoleAttr: !0
					}, r.a.createElement(X.a, {
						name: "edit"
					})), (!x || !y) && r.a.createElement(K.a, {
						displayText: q.saved ? s.fbt._("unsave", null, {
							hk: "4Dn4IT"
						}) : s.fbt._("save", null, {
							hk: "3NOMst"
						}),
						textClassName: fe.a.responsiveRowText,
						flatlistItem: se.a.Save,
						isLoggedIn: !!p,
						isUserOp: ue,
						onClick: We,
						searchIgnoreClick: he,
						skipRoleAttr: !0,
						"data-adclicklocation": be.b.FLATLIST_SAVE
					}, r.a.createElement(X.a, {
						name: q.saved ? "saved" : "save",
						className: fe.a.saveIcon
					})), !nt && !$e && r.a.createElement(K.a, {
						displayText: q.hidden ? s.fbt._("unhide", null, {
							hk: "151XLs"
						}) : s.fbt._("hide", null, {
							hk: "4AnA6R"
						}),
						textClassName: fe.a.responsiveRowText,
						flatlistItem: se.a.Hide,
						isLoggedIn: !!p,
						isUserOp: ue,
						onClick: Ge,
						searchIgnoreClick: he,
						skipRoleAttr: !0
					}, r.a.createElement(X.a, {
						name: "hide",
						isFilled: q.hidden
					})), !qe && !nt && !$e && r.a.createElement(K.a, {
						displayText: s.fbt._("report", null, {
							hk: "1phfns"
						}),
						textClassName: fe.a.responsiveRowText,
						flatlistItem: se.a.Report,
						isLoggedIn: !!p,
						isUserOp: ue,
						onClick: Ue,
						searchIgnoreClick: he,
						skipRoleAttr: !0
					}, r.a.createElement(X.a, {
						name: "report"
					})), r.a.createElement(F.a, {
						isOverlay: E,
						layout: P,
						modModeEnabled: y,
						post: q,
						sendEvent: Y
					}), x && r.a.createElement(S.a, {
						dropdownId: Qe,
						onClick: () => Y(Object(Q.k)(q.id, "post_mod_action_menu"))
					}, r.a.createElement(_e, null), r.a.createElement(R.a, {
						canEditFlair: h && !!ee,
						hasModFullPerms: f,
						hasModPostPerms: x,
						isOverlay: !!E,
						isPostAuthor: qe,
						modModeEnabled: y,
						post: q,
						tooltipId: Qe
					})), x && ze && !y && r.a.createElement(L.c, {
						text: `${Xe}`,
						onClick: () => {
							U(Ke), Y(Object(Q.k)(q.id, "post_report_menu"))
						},
						id: Ke
					}, r.a.createElement(V.a, {
						model: q,
						onIgnoreReports: () => {
							G(), Y(Object(z.m)(q.ignoreReports ? "restore_reports" : "ignore_reports", q.id))
						},
						tooltipId: Ke
					}), r.a.createElement(X.a, {
						className: fe.a.icon,
						name: q.ignoreReports ? "ignore_reports" : "report"
					})), Me && r.a.createElement(K.a, {
						displayText: s.fbt._("Insights", null, {
							hk: "2IyDq5"
						}),
						textClassName: Object(c.a)(fe.a.responsiveRowText, fe.a.insightsButtonText),
						flatlistItem: se.a.Insights,
						isLoggedIn: !!p,
						isUserOp: ue,
						onClick: D,
						skipRoleAttr: !0
					}, r.a.createElement(_.a, {
						postCreated: q.created,
						subredditId: q.belongsTo.id
					})), !nt && r.a.createElement("div", {
						className: fe.a.overflowMenuContainer
					}, r.a.createElement(A.a, {
						currentProfileName: l,
						dropdownId: Pe("-overflow-menu", q.id, E, I),
						ignoreOverflowMenuBreakpoints: Fe,
						isCommentsPage: O,
						isFixed: I,
						isOverlay: !!E,
						isProfilePostListing: w,
						isRecommendationPost: st,
						layout: P,
						modModeWithPost: y && x,
						onClickInsightsButton: D,
						pageLayer: H,
						permalink: q.permalink,
						postId: Ye,
						sendEvent: Y,
						shouldShowInsightsButton: Me,
						showEditPost: !!ie,
						showEditFlair: !!ee,
						useFlatlistBreakpoints: e.useFlatlistBreakpoints,
						toggleAddEventStartTimeModal: pe,
						toggleEditStartTimeModal: pe
					})), t === Object(te.t)(q.id, E) && r.a.createElement(ce.a, {
						subredditId: q.belongsTo.id,
						onClose: Le,
						postId: q.id,
						onSelectCollection: Be,
						titleText: s.fbt._("Add post to a collection", null, {
							hk: "38vSyF"
						}),
						onItemHoverActionText: s.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						isOverlay: E
					}), t === Object(te.s)(q.id, E, te.k.POST_OVERFLOW_MENU) && Ce && r.a.createElement(Ce, {
						onChange: i,
						onClose: pe,
						schedule: Object(u.c)(q),
						shouldShowDeleteButton: !1
					}), t === Object(te.u)(q.id, E) && r.a.createElement(de.a, {
						onCancel: De,
						onCollectionCreated: Be,
						subredditId: q.belongsTo.id
					}), t === Object(M.b)(q.id, E) && r.a.createElement(M.a, {
						flairs: q.flair,
						subredditId: q.belongsTo.id,
						modalId: Object(M.b)(q.id, E),
						onFlairChanged: B
					}), r.a.createElement("div", {
						className: fe.a.flexSpacer
					})), et && !ot && r.a.createElement(v.a, {
						className: Object(c.a)(fe.a.liveDiscussionWrapper, {
							[fe.a.modLargePost]: j && x
						}),
						postId: q.postId
					}))
				});
			Ie.displayName = "Flatlist";
			const Pe = (e, t, o, s) => {
					let n = t;
					return o && (n += "-overlay"), s && (n += "-sticky"), n += e
				},
				ye = je(we(Object(B.c)(Ie)));
			t.c = r.a.memo((function(e) {
				const t = Object(le.a)();
				return r.a.createElement(ye, xe({}, e, {
					searchIgnoreClick: t
				}))
			}))
		},
		"./src/reddit/components/GiveAwardTooltip/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_17AlFvm1kWw8NYe0FZKlMB",
				newBadge: "_18TPfQgPhTmXJ8270Nc5nM",
				text: "_26N1OuVJykHlztxQkPEfqb",
				freeAwardTooltip: "_1C7AEhBd1Od4VDczirG0jB",
				freeAwardContainer: "P0AA_X8_E-4IwAxzn2uke"
			}
		},
		"./src/reddit/components/ModActionsMenu/index.m.less": function(e, t, o) {
			e.exports = {
				ModActionsMenu: "_28noJDp6DzFWESejYQdpcD",
				modActionsMenu: "_28noJDp6DzFWESejYQdpcD"
			}
		},
		"./src/reddit/components/ModActionsMenu/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				a = o("./src/reddit/actions/tooltip.ts"),
				c = o("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				d = o("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				l = o("./src/reddit/selectors/tooltip.ts"),
				p = o("./src/reddit/components/ModActionsMenu/index.m.less"),
				m = o.n(p);
			const u = Object(i.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: o
						} = t;
						return Object(l.b)(o)(e)
					}
				}),
				b = Object(r.b)(u, (e, t) => {
					let {
						dropdownId: o
					} = t;
					return {
						toggleDropdown: () => e(Object(a.h)({
							tooltipId: o
						}))
					}
				}),
				h = () => null;
			t.a = b(e => n.a.createElement("div", {
				className: m.a.ModActionsMenu,
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
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return s
			})), o.d(t, "a", (function() {
				return n
			})), o.d(t, "b", (function() {
				return r
			}));
			const s = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				n = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				r = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/ModToolsFlatlist/breakpoints.m.less": function(e, t, o) {
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
		"./src/reddit/components/ModToolsFlatlist/constants.ts": function(e, t, o) {
			"use strict";
			var s;
			o.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Flair = "FLAIR", e.Spam = "SPAM", e.Remove = "REMOVE", e.Approve = "APPROVE"
				}(s || (s = {}))
		},
		"./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return s
			})), o.d(t, "b", (function() {
				return h
			})), o.d(t, "c", (function() {
				return f
			}));
			var s, n, r, i = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				c = o("./src/reddit/constants/postLayout.ts"),
				d = o("./src/reddit/components/ModToolsFlatlist/breakpoints.m.less"),
				l = o.n(d),
				p = o("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				m = o.n(p);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(s || (s = {})),
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
						o = e.postLayout && b[e.postLayout],
						s = l.a[e.breakpointType],
						n = l.a[t],
						a = o ? l.a[o] : l.a[r.Default];
					return Object(i.a)(s, n, a)
				},
				f = e => {
					const t = e && b[e],
						o = t ? l.a[t] : l.a[r.Default];
					return Object(i.a)(o, m.a.ButtonTextWrapper, l.a.ButtonTextWrapper)
				}
		},
		"./src/reddit/components/ModToolsFlatlist/index.m.less": function(e, t, o) {
			e.exports = {
				container: "OccjSdFd6HkHhShRg6DOl",
				tooltip: "_2a9swcTo72vLia4mUm08Fk",
				ButtonTextWrapper: "_3kA8j4bWXyfQV-T-H2dkNq",
				buttonTextWrapper: "_3kA8j4bWXyfQV-T-H2dkNq"
			}
		},
		"./src/reddit/components/ModToolsFlatlist/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return R
			}));
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/react/index.js"),
				r = o.n(n),
				i = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				c = o("./src/lib/classNames/index.ts"),
				d = o("./src/reddit/actions/modal.ts"),
				l = o("./src/reddit/actions/post.ts"),
				p = o("./src/reddit/actions/tooltip.ts"),
				m = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = o("./src/reddit/components/JSAPIContainers/index.tsx"),
				b = o("./src/reddit/components/ModModeReports/helpers.ts"),
				h = o("./src/reddit/components/PostFlairPicker/index.tsx"),
				f = o("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				x = o("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				C = o("./src/reddit/helpers/trackers/post.ts"),
				O = o("./src/reddit/icons/fonts/Approve/index.tsx"),
				v = o("./src/reddit/icons/fonts/Spam/index.tsx"),
				g = o("./src/reddit/icons/fonts/Tag/index.tsx"),
				_ = o("./src/reddit/selectors/activeModalId.ts"),
				k = o("./src/reddit/selectors/moderatorPermissions.ts"),
				j = o("./src/reddit/selectors/postFlair.ts"),
				E = o("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				w = o("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				I = o("./src/lib/constants/index.ts"),
				P = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				y = o("./src/reddit/components/ModalStyledComponents/MessageBox.tsx"),
				T = o("./src/reddit/hooks/useTracking.ts"),
				S = o("./src/reddit/icons/fonts/Remove/index.tsx"),
				N = o("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				F = o.n(N);
			const M = e => {
					let {
						className: t,
						textClassName: o,
						isOverlay: n,
						iconOnly: a,
						post: c
					} = e;
					const [d, u] = r.a.useState(!1), [b, h] = r.a.useState(!1), x = Object(T.a)(), O = Object(i.d)(), {
						isPrediction: v,
						resolvedOptionId: g,
						totalVoteCount: _
					} = c.pollData || {}, k = () => {
						u(!1), O(Object(l.U)(c.id, !1)), c.isRemoved && c.bannedBy === I.l ? x(Object(C.k)(c.id, "confirm_remove")) : x(Object(C.k)(c.id, "remove"))
					}, j = ((e, t) => e ? t === I.l ? s.fbt._("Confirm removal", null, {
						hk: "1t5tKM"
					}) : s.fbt._("removed", null, {
						hk: "35ZTch"
					}) : s.fbt._("remove", null, {
						hk: "3LWMcS"
					}))(c.isRemoved, c.bannedBy), E = R("Remove", c.id, n), w = () => a && O(Object(p.h)({
						tooltipId: E
					})), N = r.a.useMemo(() => _ ? 1 === _ ? s.fbt._("Removing this post will cancel the 1 prediction that has already been made.", null, {
						hk: "hVYeT"
					}) : s.fbt._("Removing this post will cancel the {votedUsersCount} predictions that have already been made.", [s.fbt._param("votedUsersCount", _.toString())], {
						hk: "47oACN"
					}) : s.fbt._("Removing this post will cancel any predictions that have already been made.", null, {
						hk: "26cLeP"
					}), [_]);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(f.d, {
						className: t,
						textClassName: o,
						id: E,
						text: a ? void 0 : j,
						disabled: c.isRemoved && c.bannedBy !== I.l,
						onMouseEnter: w,
						onMouseLeave: w,
						onClick: () => {
							v ? g ? h(!0) : u(!0) : k()
						}
					}, r.a.createElement(S.a, {
						desc: a ? j : void 0
					}), a && r.a.createElement(m.c, {
						className: F.a.tooltip,
						tooltipId: E,
						text: j
					})), b && r.a.createElement(y.a, {
						title: s.fbt._("This post can't be removed", null, {
							hk: "2GbryD"
						}),
						body: s.fbt._("Sorry about that. Once a prediction has been resolved, you can't remove the post.", null, {
							hk: "3wgNhQ"
						}),
						onClose: () => h(!b)
					}), d && r.a.createElement(P.a, {
						withOverlay: !0,
						modalText: N,
						actionText: s.fbt._("Remove", null, {
							hk: "2DXJl4"
						}),
						headerText: s.fbt._("Are you sure?", null, {
							hk: "3CJLRE"
						}),
						onConfirm: k,
						onOverlayClick: () => u(!d),
						toggleModal: () => u(!d)
					}))
				},
				R = function(e, t) {
					let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return `ModToolsFlatlist-${e}${t}${o?"inOverlay":""}`
				},
				A = (e, t) => Object(w.b)({
					breakpointType: w.a.HideIfVWSmaller,
					flatlistItem: e,
					postLayout: t
				}),
				L = Object(i.b)(() => Object(a.c)({
					activeModalId: _.a,
					canEditFlair: (e, t) => {
						let {
							post: o
						} = t;
						return Object(j.a)(e, {
							postId: o.id
						})
					},
					moderatorPermissions: (e, t) => Object(k.m)(e, {
						postId: t.post.id
					})
				}), (e, t) => {
					let {
						post: o
					} = t;
					return {
						onApprovePost: () => e(Object(l.s)(o.id)),
						onOpenPostModModeDropdown: t => e(Object(p.h)({
							tooltipId: t
						})),
						onSpamPost: () => e(Object(l.U)(o.id, !0)),
						onFlairPost: t => () => e(Object(d.i)(t))
					}
				});
			t.a = L(e => {
				const {
					canEditFlair: t,
					className: o,
					isOverlay: a,
					layout: d,
					moderatorPermissions: l,
					modModeEnabled: _,
					onApprovePost: k,
					onFlairPost: j,
					onSpamPost: I,
					post: P,
					sendEvent: y,
					showIconsOnly: T
				} = e, S = Object(i.d)(), N = Object(x.a)(l), L = Object(b.b)(P), D = !(!P.approvedBy || !L), B = Object(h.b)(P.id, a), V = N && _ && !P.isSponsored, W = t && _, G = ((e, t) => e ? s.fbt._("reapprove", null, {
					hk: "OJvB1"
				}) : t ? s.fbt._("approved", null, {
					hk: "2bWAFI"
				}) : s.fbt._("approve", null, {
					hk: "2DIHcM"
				}))(D, P.approvedBy), U = (e => e ? s.fbt._("spammed", null, {
					hk: "3GPrkZ"
				}) : s.fbt._("spam", null, {
					hk: "3ebJLg"
				}))(P.isSpam), H = R("Approve", P.id, a), q = R("Spam", P.id, a), K = () => T && S(Object(p.h)({
					tooltipId: H
				})), J = () => T && S(Object(p.h)({
					tooltipId: q
				})), z = a ? void 0 : d;
				return r.a.createElement("div", {
					className: Object(c.a)(F.a.container, o)
				}, V && r.a.createElement(n.Fragment, null, r.a.createElement(f.b, {
					className: A(E.a.Approve, z),
					key: "approveButton",
					text: T ? void 0 : G,
					textClassName: Object(w.c)(z),
					disabled: !!P.approvedBy && !L,
					id: H,
					onMouseEnter: K,
					onMouseLeave: K,
					onClick: () => {
						k(), y(Object(C.k)(P.id, "approve"))
					}
				}, r.a.createElement(O.a, {
					desc: T ? G : void 0
				}), T && r.a.createElement(m.c, {
					className: F.a.tooltip,
					tooltipId: H,
					text: G
				})), r.a.createElement(M, {
					className: A(E.a.Remove, z),
					textClassName: Object(w.c)(z),
					isOverlay: a,
					iconOnly: T,
					post: P
				}), r.a.createElement(f.d, {
					className: A(E.a.Spam, z),
					key: "removeSpamButton",
					text: T ? void 0 : U,
					textClassName: Object(w.c)(z),
					disabled: P.isSpam,
					id: q,
					onMouseEnter: J,
					onMouseLeave: J,
					onClick: () => {
						I(), y(Object(C.k)(P.id, "spam"))
					}
				}, r.a.createElement(v.a, {
					desc: T ? U : void 0
				}), T && r.a.createElement(m.c, {
					className: F.a.tooltip,
					tooltipId: q,
					text: U
				}))), W && r.a.createElement(f.c, {
					className: A(E.a.Flair, z),
					key: "tagButton",
					onClick: () => {
						j(B)(), y(Object(C.k)(P.id, "post_flair_picker"))
					}
				}, r.a.createElement(g.a, null)), r.a.createElement(u.f, null))
			})
		},
		"./src/reddit/components/ModalStyledComponents/MessageBox.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return m
			}));
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/react/index.js"),
				r = o.n(n),
				i = o("./src/higherOrderComponents/asModal/index.tsx"),
				a = o("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = o("./src/reddit/controls/TextButton/index.tsx"),
				d = o("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = Object(i.a)(e => {
					let {
						title: t,
						body: o,
						actionText: n = s.fbt._("OK", null, {
							hk: "1eo6HO"
						}),
						onClose: i
					} = e;
					return r.a.createElement(a.e, null, r.a.createElement(a.i, null, r.a.createElement(d.a, null, r.a.createElement(a.q, null, t), r.a.createElement(c.a, {
						onClick: i
					}, r.a.createElement(a.b, null)))), r.a.createElement(a.l, null, r.a.createElement(a.p, null, o)), r.a.createElement(a.g, null, r.a.createElement(a.u, {
						"data-redditstyle": !0,
						onClick: i
					}, n)))
				}),
				m = e => r.a.createElement(p, l({
					withOverlay: !0,
					onOverlayClick: e.onClose
				}, e))
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return _
			}));
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/react/index.js"),
				r = o.n(n),
				i = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				c = o("./src/lib/classNames/index.ts"),
				d = o("./src/lib/lessComponent.tsx"),
				l = o("./src/reddit/actions/tooltip.ts"),
				p = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = o("./src/reddit/controls/Dropdown/index.tsx"),
				u = o("./src/reddit/controls/Dropdown/Row.tsx"),
				b = o("./src/reddit/icons/fonts/index.tsx"),
				h = o("./src/reddit/selectors/tooltip.ts"),
				f = o("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				x = o("./src/reddit/components/OverflowMenu/index.m.less"),
				C = o.n(x);
			const O = d.a.wrapped(m.a, "_Dropdown", C.a),
				v = Object(p.a)(O),
				g = d.a.button("MenuButton", C.a),
				_ = d.a.wrapped(u.b, "DropdownRow", C.a),
				k = Object(a.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: o
						} = t;
						return Object(h.b)(o)(e)
					}
				}),
				j = Object(i.b)(k, (e, t) => {
					let {
						dropdownId: o
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: o
						}))
					}
				}),
				E = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = j(e => r.a.createElement(g, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": s.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[C.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: E(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId,
				"data-adclicklocation": f.b.OVERFLOW_MENU
			}, e.icon ? e.icon : r.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: C.a.MenuIcon
			}), r.a.createElement(v, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./src/config.ts"),
				n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./node_modules/react/index.js"),
				i = o.n(r),
				a = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/reselect/es/index.js"),
				d = o("./src/higherOrderComponents/asModal/index.tsx"),
				l = o("./src/lib/memoizeByReference/index.ts"),
				p = o("./src/reddit/actions/postCreation/general.ts"),
				m = o("./src/reddit/components/TrackingHelper/index.tsx"),
				u = o("./src/reddit/constants/keycodes.ts"),
				b = o("./src/reddit/controls/Button/index.tsx"),
				h = o("./src/reddit/controls/Input/index.tsx"),
				f = o("./src/reddit/icons/svgs/Close/index.tsx"),
				x = o("./src/reddit/icons/svgs/Plus/index.tsx"),
				C = o("./src/reddit/icons/svgs/Search/index.tsx"),
				O = o("./src/reddit/layout/row/Inline/index.tsx"),
				v = o("./src/reddit/models/PostCreationForm/index.ts"),
				g = o("./src/reddit/selectors/postCollection.ts"),
				_ = o("./src/reddit/controls/MetaSeparator/index.tsx"),
				k = o("./src/reddit/components/HumanDate/index.tsx"),
				j = o("./src/reddit/helpers/name/index.ts"),
				E = o("./src/reddit/models/Subreddit/index.ts"),
				w = o("./src/reddit/models/User/index.ts"),
				I = o("./src/reddit/selectors/subreddit.ts"),
				P = o("./src/reddit/selectors/user.ts"),
				y = o("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),
				T = o.n(y),
				S = o("./src/lib/lessComponent.tsx");
			const {
				fbt: N
			} = o("./node_modules/fbt/lib/FbtPublic.js"), F = S.a.div("Container", T.a), M = S.a.h2("PostTitle", T.a), R = S.a.div("MetaLine", T.a), A = S.a.span("SubredditName", T.a), L = S.a.time("InfoSpan", T.a), D = Object(c.c)({
				subreddit: (e, t) => {
					let {
						collection: {
							subredditId: o
						}
					} = t;
					return o ? Object(I.V)(e, {
						subredditId: o
					}) : void 0
				},
				user: P.k
			});
			class B extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onClick = () => {
						this.props.onClick(this.props.collection.id)
					}
				}
				render() {
					const {
						collection: e,
						subreddit: t,
						user: o,
						onHoverActionText: s
					} = this.props, n = t && Object(E.h)(t) && o ? Object(j.d)(Object(w.e)(o)) : t ? t.displayText : "", r = e.postIds.length;
					return i.a.createElement(F, {
						onClick: this.onClick,
						className: T.a.container
					}, i.a.createElement(M, {
						"data-redditstyle": !0
					}, e.title), i.a.createElement(R, {
						"data-redditstyle": !0
					}, n && i.a.createElement(A, {
						"data-redditstyle": !0
					}, n), n && i.a.createElement(_.b, null), i.a.createElement(L, null, N._({
						"*": "{number of posts} posts",
						_1: "1 post"
					}, [N._plural(r, "number of posts")], {
						hk: "1Uy96U"
					})), i.a.createElement(_.b, null), i.a.createElement(L, null, N._("created {time}", [N._param("time", i.a.createElement(k.d, {
						seconds: e.createdAtUTC
					}))], {
						hk: "2cUc5m"
					}))), s && i.a.createElement("div", {
						className: T.a.onHoverActionText
					}, i.a.createElement("span", null, s)))
				}
			}
			var V = Object(a.b)(D)(B),
				W = o("./src/reddit/helpers/trackers/postCollection.ts"),
				G = o("./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less"),
				U = o.n(G);
			const H = `${s.a.assetPath}/img/snoo-drafts.png`,
				q = S.a.div("TopRow", U.a),
				K = S.a.div("TitleRow", U.a),
				J = S.a.div("DetailsContainer", U.a),
				z = S.a.wrapped(O.a, "ButtonRow", U.a),
				Q = S.a.div("CloseWrapper", U.a),
				X = S.a.wrapped(f.a, "Close", U.a),
				Y = S.a.div("Empty", U.a),
				Z = S.a.img("EmptyImage", U.a),
				$ = S.a.p("EmptyText", U.a),
				ee = S.a.div("FilterWrapper", U.a),
				te = S.a.wrapped(h.a, "FilterInput", U.a),
				oe = S.a.wrapped(C.a, "SearchIcon", U.a),
				se = S.a.wrapped(x.a, "PlusIcon", U.a),
				ne = S.a.wrapped(b.p, "CreateCollectionButton", U.a),
				re = Object(l.a)((e, t) => {
					const o = t.toLowerCase();
					return e.filter(e => e.title.toLowerCase().includes(o))
				}),
				ie = Object(c.c)({
					collections: g.v
				}),
				ae = Object(a.b)(ie, (e, t) => {
					let {
						postId: o,
						isOverlay: s
					} = t;
					return {
						onOpenCreateCollectionModal: () => {
							let t = v.b;
							o && (t = Object(v.u)(o, !!s)), e(Object(p.z)(t))
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
					}, this.renderItem = e => i.a.createElement(V, {
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
					let o;
					if (0 === e.length) o = this.renderNoCollections();
					else {
						const t = re(e, this.state.filterStr);
						o = 0 === t.length ? this.renderNoFilterMatches() : t.map(this.renderItem)
					}
					return i.a.createElement("div", {
						className: U.a.wrapper,
						"data-redditstyle": !0
					}, i.a.createElement(q, null, i.a.createElement(K, {
						"data-redditstyle": !0
					}, t || n.fbt._("My collections", null, {
						hk: "3yKovS"
					}), i.a.createElement(Q, {
						onClick: this.close
					}, i.a.createElement(X, {
						"data-redditstyle": !0
					}))), i.a.createElement(ee, null, i.a.createElement(oe, null), i.a.createElement(te, {
						placeholder: n.fbt._("Find a collection", null, {
							hk: "3DbFBU"
						}),
						value: this.state.filterStr,
						onChange: this.onFilterStringChange
					}))), i.a.createElement(J, null, o), i.a.createElement(z, null, i.a.createElement(ne, {
						onClick: this.handleCreateCollectionClicked
					}, i.a.createElement(se, null), n.fbt._("Create a collection", null, {
						hk: "37xJVm"
					}))))
				}
			}
			const de = Object(d.a)(ae(Object(m.c)(ce)));
			t.a = de
		},
		"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/react/index.js"),
				r = o.n(n),
				i = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				c = o("./src/higherOrderComponents/asModal/index.tsx"),
				d = o("./src/lib/formatApiError/index.ts"),
				l = o("./src/reddit/actions/postCollection/index.ts"),
				p = o("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = o("./src/reddit/constants/postCreation.ts"),
				u = o("./src/reddit/controls/Button/index.tsx"),
				b = o("./src/reddit/controls/ErrorText/index.tsx"),
				h = o("./src/reddit/controls/Input/index.tsx"),
				f = o("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = o("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				C = o("./src/reddit/icons/svgs/Close/index.tsx"),
				O = o("./src/reddit/layout/row/Inline/index.tsx"),
				v = o("./src/reddit/selectors/postCollection.ts"),
				g = o("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less"),
				_ = o.n(g),
				k = o("./src/lib/lessComponent.tsx");
			const j = k.a.div("Container", _.a),
				E = k.a.div("Content", _.a),
				w = k.a.div("TitleRow", _.a),
				I = k.a.div("Details", _.a),
				P = k.a.wrapped(p.g, "Footer", _.a),
				y = k.a.wrapped(u.o, "CancelButton", _.a),
				T = k.a.div("CloseWrapper", _.a),
				S = k.a.wrapped(C.a, "CloseIcon", _.a),
				N = k.a.label("Label", _.a),
				F = k.a.wrapped(h.a, "TitleInput", _.a),
				M = k.a.wrapped(x.a, "AddCollectionIcon", _.a),
				R = k.a.wrapped(u.l, "PrimaryActionButton", _.a),
				A = k.a.wrapped(f.a, "LoadingIcon", _.a),
				L = k.a.wrapped(b.b, "ErrorText", _.a),
				D = Object(a.c)({
					collection: v.q,
					error: v.c,
					isPending: v.g
				}),
				B = Object(i.b)(D, (e, t) => ({
					onCreate: (t, o) => e(Object(l.b)(t, o)),
					onUpdate: o => e(Object(l.h)(t.collectionId, o))
				}));
			class V extends r.a.PureComponent {
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
							collectionTitle: o
						} = this.state;
						if (e) {
							await this.props.onUpdate(o) && this.props.onCollectionUpdated && this.props.onCollectionUpdated()
						} else {
							const e = await this.props.onCreate(o, t);
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
						isPending: o
					} = this.props, n = !e, i = !!this.state.collectionTitle.trim(), a = n ? s.fbt._("Create", null, {
						hk: "Ijp7n"
					}) : s.fbt._("Save", null, {
						hk: "4yMsMq"
					});
					return r.a.createElement(j, null, r.a.createElement(T, {
						onClick: this.props.onCancel
					}, r.a.createElement(S, null)), r.a.createElement(E, null, n && r.a.createElement(r.a.Fragment, null, r.a.createElement(w, null, r.a.createElement(M, null), s.fbt._("Create a collection", null, {
						hk: "3ndxk5"
					})), r.a.createElement(I, null, s.fbt._("Group posts into one feed. Create a series of events or just a group of random things. Make something awesome!", null, {
						hk: "2eCAQw"
					}))), r.a.createElement(N, null, n ? s.fbt._("Give a title for your collection", null, {
						hk: "Uaqbe"
					}) : s.fbt._("Edit title", null, {
						hk: "1jzweg"
					}), r.a.createElement(F, {
						maxLength: m.e,
						onChange: this.onTitleChange,
						placeholder: s.fbt._("Enter title", null, {
							hk: "3B0iRI"
						}),
						value: this.state.collectionTitle
					}))), r.a.createElement(P, null, r.a.createElement(O.a, null, r.a.createElement(y, {
						onClick: this.props.onCancel
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(R, {
						onClick: this.onPrimaryButtonClick,
						disabled: o || !i
					}, o ? r.a.createElement(A, {
						sizePx: 10
					}) : a)), t && r.a.createElement(L, null, Object(d.a)(t))))
				}
			}
			t.a = Object(c.a)(B(V))
		},
		"./src/reddit/components/PostFlairPicker/index.m.less": function(e, t, o) {
			e.exports = {
				buttonsRow: "cF9DU_4WDAKS4gs43ct2_",
				clearButton: "_3vB6Y9PiwJ0YV6c9MGbDwT"
			}
		},
		"./src/reddit/components/PostFlairPicker/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return j
			}));
			var s, n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./node_modules/react/index.js"),
				i = o.n(r),
				a = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/reselect/es/index.js"),
				d = o("./src/reddit/components/TrackingHelper/index.tsx"),
				l = o("./src/higherOrderComponents/asModal/index.tsx"),
				p = o("./src/reddit/actions/modal.ts"),
				m = o("./src/reddit/components/FlairPickerTitle/index.tsx"),
				u = o("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				b = o("./src/reddit/components/FlairPreview/index.tsx"),
				h = o("./src/reddit/components/FlairSearch/index.tsx"),
				f = o("./src/reddit/controls/Button/index.tsx"),
				x = o("./src/reddit/helpers/trackers/postComposer.ts"),
				C = o("./src/reddit/models/Flair/index.ts"),
				O = o("./src/reddit/selectors/postFlair.ts"),
				v = o("./src/reddit/selectors/subreddit.ts"),
				g = o("./src/reddit/components/PostFlairPicker/helpers.ts"),
				_ = o("./src/reddit/components/PostFlairPicker/index.m.less"),
				k = o.n(_);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(s || (s = {}));
			const j = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.UNSET;
					return `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${o}]`
				},
				E = Object(c.c)({
					flairData: O.d,
					subreddit: v.V
				});
			class w extends i.a.Component {
				constructor(e) {
					super(e), this.trackEvent = () => {
						this.props.sendEvent(Object(x.F)(this.props.subredditId))
					}, this.onApply = () => {
						const {
							previewFlair: e
						} = this.state, t = e && e.templateId;
						this.props.onFlairChanged({
							previewFlair: e,
							selectedTemplateId: t
						}), this.props.closeModal && this.props.closeModal(), this.trackEvent()
					}, this.onClear = () => {
						this.props.sendEvent(Object(x.b)()), this.setSelectedFlair(null)
					}, this.setSelectedFlair = e => {
						this.setState({
							previewFlair: e
						})
					};
					const t = Object(g.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, o = Object(g.c)(this.props.flairs) || null;
					return Object(g.b)(e, t, o)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: o,
						flairData: s,
						subreddit: r
					} = e, a = r.displayText, {
						templates: c,
						templateIds: d
					} = s, {
						canSave: l
					} = this.canSave();
					return i.a.createElement(u.a, {
						className: o
					}, i.a.createElement(m.a, {
						onClosePressed: e.closeModal,
						title: n.fbt._("Select {subredditName} flair", [n.fbt._param("subredditName", a)], {
							hk: "1lDMWS"
						})
					}), i.a.createElement(b.a, {
						flair: t,
						flairTemplateType: C.d.LinkFlair,
						placeholderText: n.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), i.a.createElement(h.a, {
						flair: t,
						flairTemplateType: C.d.LinkFlair,
						subredditId: r.id,
						templates: c,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), i.a.createElement("div", {
						className: k.a.buttonsRow
					}, i.a.createElement(f.l, {
						disabled: !l,
						onClick: this.onApply
					}, n.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), i.a.createElement(f.o, {
						className: k.a.clearButton,
						onClick: this.onClear
					}, n.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const I = Object(a.b)(E, (e, t) => ({
				closeModal: () => e(Object(p.i)(t.modalId))
			}))(w);
			t.a = Object(l.a)(Object(d.c)(I))
		},
		"./src/reddit/components/PostModModeDropdown/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./src/higherOrderComponents/makeAsync.tsx"),
				n = o("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(s.a)({
				ErrorComponent: r,
				getComponent: () => Object(n.a)(() => o.e("ModerationDropdowns").then(o.bind(null, "./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/PostOverflowMenu/index.m.less": function(e, t, o) {
			e.exports = {
				overflowMenu: "_1EbinKu2t3KjaT2gR156Qp",
				DropdownRow: "_1muOrgIRB6t41qDocDiXul",
				dropdownRow: "_1muOrgIRB6t41qDocDiXul",
				disabledRow: "_2Odc33_zXVGMHX8Um_2eO7",
				HideIcon: "_3CksthIwbeJIolp7OYeQYv",
				hideIcon: "_3CksthIwbeJIolp7OYeQYv",
				Icon: "_2V4nGS1AmzWhA62lzdCu4r",
				icon: "_2V4nGS1AmzWhA62lzdCu4r"
			}
		},
		"./src/reddit/components/PostOverflowMenu/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return je
			}));
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./src/lib/constants/index.ts"),
				r = o("./node_modules/react/index.js"),
				i = o.n(r),
				a = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/reselect/es/index.js"),
				d = o("./src/telemetry/index.ts"),
				l = o("./node_modules/uuid/v4.js"),
				p = o.n(l),
				m = o("./src/config.ts"),
				u = o("./src/lib/addQueryParams/index.ts"),
				b = o("./src/lib/classNames/index.ts"),
				h = o("./src/lib/lessComponent.tsx"),
				f = o("./src/reddit/actions/eventPosts/index.ts"),
				x = o("./src/reddit/actions/gold/modals.ts"),
				C = o("./src/reddit/actions/modal.ts"),
				O = o("./src/reddit/actions/pinnedPost.ts"),
				v = o("./src/reddit/actions/post.ts"),
				g = o("./src/reddit/actions/postCreation/editing.ts"),
				_ = o("./src/reddit/actions/reportFlow/index.ts"),
				k = o("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				j = o("./src/reddit/constants/oneFeed.ts"),
				E = o("./src/reddit/constants/parameters.ts"),
				w = o("./src/reddit/constants/posts.ts"),
				I = o("./src/reddit/hooks/useRecommendationPostContext.ts");

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			var y = function(e) {
					function t(t) {
						const o = Object(I.a)();
						return r.createElement(e, P({}, t, {
							recommendationPostContext: o
						}))
					}
					const o = e.displayName || e.name || "Component";
					return t.displayName = `withRecommendationPostContext(${o})`, t
				},
				T = o("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				S = o("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				N = o("./src/reddit/icons/fonts/index.tsx"),
				F = o("./src/reddit/components/CreatorStats/Icon.tsx"),
				M = o("./src/reddit/components/OverflowMenu/index.tsx"),
				R = o("./src/reddit/components/ReportFlow/index.tsx"),
				A = o("./src/reddit/contexts/PageLayer/index.tsx"),
				L = o("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				D = o("./src/reddit/controls/Dropdown/Row.tsx"),
				B = o("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				V = o("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				W = o("./src/reddit/components/Flatlist/constants.ts"),
				G = o("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				U = o("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				H = o("./src/reddit/constants/postLayout.ts"),
				q = o("./src/reddit/helpers/correlationIdTracker.ts"),
				K = o("./src/reddit/helpers/isCrosspost.ts"),
				J = o("./src/reddit/helpers/media/index.ts"),
				z = o("./src/reddit/helpers/postEvent.ts"),
				Q = o("./src/reddit/helpers/trackers/post.ts"),
				X = o("./src/reddit/helpers/trackers/react.ts"),
				Y = o("./src/reddit/models/Post/index.ts"),
				Z = o("./src/reddit/models/Prediction/Tournament/index.ts"),
				$ = o("./src/reddit/models/Subreddit/index.ts"),
				ee = o("./src/reddit/selectors/activeModalId.ts"),
				te = o("./src/reddit/selectors/experiments/videoReactions.ts"),
				oe = o("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				se = o("./src/reddit/selectors/posts.ts"),
				ne = o("./src/reddit/selectors/subreddit.ts"),
				re = o("./src/reddit/selectors/user.ts"),
				ie = o("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				ae = o("./src/reddit/components/PostFlairPicker/index.tsx"),
				ce = o("./src/reddit/components/ReportFlow/new.tsx"),
				de = o("./src/reddit/actions/postCollection/index.ts"),
				le = o("./src/reddit/contexts/Post/index.tsx"),
				pe = o("./src/reddit/helpers/trackers/postCollection.ts"),
				me = o("./src/reddit/models/PostCreationForm/index.ts"),
				ue = o("./src/reddit/selectors/postCollection.ts"),
				be = o("./node_modules/react-router/esm/react-router.js"),
				he = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				fe = o("./src/reddit/components/ModalStyledComponents/MessageBox.tsx");
			const xe = Object(be.i)(e => {
				let {
					post: t,
					toggleConfirmDelete: o,
					handleDeletePost: n,
					location: r
				} = e;
				const {
					isPrediction: a,
					resolvedOptionId: c,
					totalVoteCount: d
				} = t.pollData || {}, l = a ? s.fbt._("Are you sure?", null, {
					hk: "2mIMwE"
				}) : s.fbt._("Delete post?", null, {
					hk: "3g7QoX"
				}), p = i.a.useMemo(() => {
					const e = d || 0;
					return a ? 0 === e ? s.fbt._("Deleting this post will cancel any predictions that have been made.", null, {
						hk: "1OCTd3"
					}) : 1 === e ? s.fbt._("Deleting this post will cancel the 1 prediction that have already been made.", null, {
						hk: "1MnrUP"
					}) : s.fbt._("Deleting this post will cancel the {votedUsersCount} predictions that have already been made.", [s.fbt._param("votedUsersCount", e.toString())], {
						hk: "1jBXxs"
					}) : s.fbt._("Are you sure you want to delete your post? You can't undo this.", null, {
						hk: "2eDKWP"
					})
				}, [a, d]), m = a ? s.fbt._("Delete", null, {
					hk: "3NNdm0"
				}) : s.fbt._("Delete post", null, {
					hk: "28hc1p"
				});
				return a && c ? i.a.createElement(fe.a, {
					title: s.fbt._("This post can't be deleted", null, {
						hk: "1sZ013"
					}),
					body: s.fbt._("Sorry about that. Once a prediction has been resolved, you can't delete the post.", null, {
						hk: "32l6dr"
					}),
					onClose: o
				}) : i.a.createElement(he.a, {
					withOverlay: !0,
					toggleModal: o,
					onConfirm: () => n(r),
					onOverlayClick: o,
					actionText: m,
					headerText: l,
					modalText: p
				})
			});
			var Ce = o("./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx"),
				Oe = o("./src/devPlatform/singleton/constants.ts"),
				ve = o("./src/reddit/components/PostOverflowMenu/index.m.less"),
				ge = o.n(ve);
			const _e = h.a.wrapped(D.b, "DropdownRow", ge.a),
				ke = p()(),
				je = e => {
					let {
						gild: t = !0,
						save: o = !0,
						share: s = !0,
						report: n = !0,
						editPost: r = !0,
						hide: i = !0,
						insights: a = !0
					} = e;
					return {
						[W.a.Gild]: t,
						[W.a.Save]: o,
						[W.a.Share]: s,
						[W.a.Report]: n,
						[W.a.EditPost]: r,
						[W.a.Hide]: i,
						[W.a.Insights]: a
					}
				},
				Ee = Object(a.b)(() => Object(c.c)({
					claimedFreeAward: oe.b,
					isFutureEvent: ue.i,
					isPinned: se.q,
					isAllowReactionsKillswitchEnabled: te.a,
					subredditAboutInfo: se.H,
					reportFlowIsOpen: (e, t) => {
						let {
							isOverlay: o,
							postId: s
						} = t;
						var n, r, i, a;
						return (null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.reportFlow) || void 0 === r ? void 0 : r.openedFromModalPage) === o && (null === (a = null === (i = e.features) || void 0 === i ? void 0 : i.reportFlow) || void 0 === a ? void 0 : a.postOrCommentId) === s
					},
					showPinAction: (e, t) => {
						let {
							isProfilePostListing: o,
							userIsOp: s,
							post: n,
							pageLayer: r
						} = t;
						return Object(A.E)(e, {
							pageLayer: r
						}) && o && s && Object(re.Bb)(e, {
							userName: n.author
						})
					},
					hasSubredditRules: ne.i,
					isPostPartOfACollection: ue.k,
					shouldRenderCollectionEditButtons: (e, t) => {
						let {
							post: o,
							subredditOrProfile: s
						} = t;
						if (o.isSponsored) return !1;
						if (!s) return !1;
						const n = s.type === $.f.User;
						return Object(ue.r)(e, s.name, n)
					},
					reportingRevampEnabled: ie.a,
					videoShareModalOpen: (e, t) => {
						let {
							postId: o
						} = t;
						return Object(ee.a)(e) === Object(U.a)(o)
					}
				}), (e, t) => {
					let {
						postId: o,
						isOverlay: s,
						isCommentsPage: n
					} = t;
					return {
						onCopyLink: t => e(Object(v.D)(t)),
						onDelete: t => e(Object(v.N)(o, t, s)),
						onDistinguishPost: t => e(Object(v.v)(o, t)),
						onGildClick: (t, s) => e(Object(x.d)({
							awardId: s,
							correlationId: t,
							thingId: o
						})),
						onToggleSave: () => e(Object(v.V)(o)),
						onToggleNSFW: () => e(Object(v.G)(o)),
						onToggleOC: () => e(Object(v.J)(o)),
						onTogglePinned: () => e(Object(O.i)(o)),
						onToggleSpoiler: () => e(Object(v.eb)(o)),
						onHide: t => e(Object(v.fb)(o, !t, s, !0)),
						onReportClick: () => e(Object(_.c)(o, s)),
						onStartEventNow: () => {
							e((e, t) => Object(d.a)(Object(S.l)()(t()))), e(Object(f.startEventNowRequested)(o))
						},
						onEdit: () => {
							const t = !s && !n;
							e(Object(g.a)(o, t))
						},
						onFlairPost: () => e(Object(C.i)(Object(ae.b)(o, s))),
						onToggleSendReplies: () => e(Object(v.W)(o)),
						onToggleReactAllowed: () => e(Object(v.T)(o)),
						showCollectionsList: (t, o) => {
							e(Object(de.e)(t)).then(() => {
								const t = Object(me.t)(o, s);
								e(C.i(t))
							})
						},
						onToggleVideoShareModal: () => e(Object(C.i)(Object(U.a)(o)))
					}
				});
			class we extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						isConfirmDeleteOpen: !1
					}, this.handlePostEvent = (e, t) => {
						const {
							isOverlay: o,
							post: s,
							sendEvent: n
						} = this.props;
						n(Object(Q.k)(s.id, e, o ? "post_detail" : "post", void 0, void 0, void 0, null == t ? void 0 : t.referralId))
					}, this.handleClickMenuButton = () => {
						this.handlePostEvent("post_overflow_menu")
					}, this.handleDeletePost = e => {
						e && (this.props.onDelete(e), this.handlePostEvent("delete"))
					}, this.handleEdit = () => {
						this.handlePostEvent("edit"), this.props.onEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(q.d)(q.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: s
						} = await Promise.resolve().then(o.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(s(this.props.postId))
					}, this.onShowFewerOfClick = () => {
						const {
							postId: e,
							recommendationPostContext: {
								setRecommendationFooterView: t
							},
							sendEvent: o
						} = this.props;
						o(Object(Q.n)(e)), t(j.a.SeeFewerPostsView)
					}, this.onShowMoreOfClick = () => {
						const {
							postId: e,
							recommendationPostContext: {
								setRecommendationFooterView: t
							},
							sendEvent: o
						} = this.props;
						o(Object(Q.o)(e)), t(j.a.ThankYouView)
					}, this.toggleHide = () => {
						const e = this.props.post.hidden ? "unhide" : "hide";
						this.handlePostEvent(e), this.props.onHide(!!this.props.post.hidden)
					}, this.toggleSave = () => {
						const e = this.props.post.saved ? "unsave" : "save";
						this.handlePostEvent(e), this.props.onToggleSave()
					}, this.handleReport = () => {
						this.handlePostEvent("report"), this.props.onReportClick()
					}, this.toggleOC = () => {
						this.handlePostEvent(this.props.post.isOriginalContent ? "unmark_original_content" : "mark_original_content"), this.props.onToggleOC()
					}, this.togglePinned = () => {
						this.handlePostEvent(this.props.isPinned ? "unpin" : "pin"), this.props.isPinned ? this.props.sendEvent(Object(Q.r)(this.props.post.id)) : this.props.sendEvent(Object(Q.h)(this.props.post.id)), this.props.onTogglePinned()
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
						if (!t.ignoreBreakpoints && t.useFlatlistBreakpoints[e]) return Object(G.b)({
							breakpointType: G.a.HideIfVWLarger,
							flatlistItem: e,
							isLoggedIn: !!t.currentUser,
							isUserOp: t.userIsOp
						})
					}, this.getBreakpointCx = (e, t) => Object(V.b)({
						breakpointType: G.a.HideIfVWLarger,
						flatlistItem: e,
						postLayout: t
					}), this.handleAddToCollection = () => {
						const {
							isPostPartOfACollection: e,
							showCollectionsList: t,
							post: o,
							sendEvent: s
						} = this.props;
						e || (s(Object(pe.b)(o.id)), t(o.belongsTo.id, o.id))
					}, this.onCloseShareModal = e => {
						e && (this.handlePostEvent("copy_link", {
							referralId: ke
						}), this.props.onCopyLink(e)), this.props.onToggleVideoShareModal()
					}, this.renderReportFlow = () => this.props.reportingRevampEnabled ? i.a.createElement(ce.a, {
						withOverlay: !0,
						overlayCustomStyles: R.b,
						postId: this.props.postId,
						timestamp: this.context.currentTime
					}) : i.a.createElement(R.a, {
						withOverlay: !0,
						overlayCustomStyles: R.b,
						postId: this.props.postId,
						timestamp: this.context.currentTime
					})
				}
				getOverflowMenuBreakpointClass() {
					const {
						currentUser: e,
						ignoreBreakpoints: t,
						ignoreOverflowMenuBreakpoints: o,
						isCommentsPage: s,
						isRecommendationPost: n,
						layout: r,
						modModeWithPost: i,
						recommendationPostContext: {
							hideRecommendationContext: a
						},
						userIsOp: c
					} = this.props, d = r === H.g.Classic;
					if (!(t || o || i || c || !s && !d || n && !a)) return Object(G.b)({
						breakpointType: G.a.HideIfVWLarger,
						flatlistItem: W.a.PostOverflowMenu,
						isLoggedIn: !!e,
						isUserOp: c
					})
				}
				renderDropdownIcons() {
					const {
						props: e
					} = this, {
						currentUser: t,
						isFutureEvent: o,
						isOverlay: r,
						isPinned: a,
						isRecommendationPost: c,
						layout: d,
						onClickInsightsButton: l,
						onStartEventNow: p,
						post: u,
						recommendationPostContext: {
							hideRecommendationContext: b
						},
						shouldRenderCollectionEditButtons: h,
						shouldShowInsightsButton: f,
						showEditFlair: x,
						showPinAction: C,
						toggleAddEventStartTimeModal: O,
						toggleEditStartTimeModal: v,
						userIsOp: g
					} = e, _ = e.currentUser && e.currentUser.isEmployee, k = Object(K.a)(e.post), j = e.post.belongsTo.type === w.a.PROFILE || Object($.g)(e.subredditAboutInfo), E = e.post.belongsTo.type === w.a.PROFILE || Object($.i)(e.subredditAboutInfo), I = t && u.isGildable, P = Object(z.a)(e.post), y = r ? void 0 : d;
					return i.a.createElement("div", null, f && i.a.createElement(_e, {
						className: this.getBreakpointClass(W.a.Insights),
						displayText: s.fbt._("Insights", null, {
							hk: "t7dpi"
						}),
						onClick: l
					}, i.a.createElement(F.a, {
						postCreated: u.created,
						subredditId: u.belongsTo.id
					})), I && i.a.createElement(_e, {
						className: this.getBreakpointClass(W.a.Gild),
						displayText: s.fbt._("Give Award", null, {
							hk: "3mYeGJ"
						}),
						onClick: this.handleGild
					}, i.a.createElement(N.a, {
						name: "award",
						className: ge.a.Icon
					})), c && !b && i.a.createElement(i.a.Fragment, null, i.a.createElement(_e, {
						className: this.getBreakpointClass(W.a.ShowMoreLikeThis),
						displayText: s.fbt._("Show more posts like this", null, {
							hk: "2t0WMg"
						}),
						onClick: this.onShowMoreOfClick
					}, i.a.createElement(N.a, {
						name: "checkmark",
						className: ge.a.Icon
					})), i.a.createElement(_e, {
						className: this.getBreakpointClass(W.a.ShowFewerLikeThis),
						displayText: s.fbt._("Show fewer posts like this", null, {
							hk: "k9sBL"
						}),
						onClick: this.onShowFewerOfClick
					}, i.a.createElement(N.a, {
						name: "hide",
						className: ge.a.Icon
					}))), i.a.createElement(_e, {
						className: this.getBreakpointClass(W.a.Share),
						displayText: s.fbt._("Copy link", null, {
							hk: "ETZxA"
						}),
						onClick: () => {
							const {
								permalink: t,
								post: o
							} = e;
							o && Object(Y.q)(o) ? (e.onToggleVideoShareModal(), this.handlePostEvent("share")) : (this.handlePostEvent("share_copy"), e.onCopyLink(t))
						}
					}, i.a.createElement(N.a, {
						name: "link_post",
						className: ge.a.Icon
					})), i.a.createElement(_e, {
						className: this.getBreakpointClass(W.a.Share),
						displayText: s.fbt._("Embed", null, {
							hk: "3u0v6r"
						}),
						onClick: () => {
							this.handlePostEvent("share_embed"), window.open(`${m.a.rebedMediaUrl}/embed?url=${e.post.permalink}`, "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, i.a.createElement(N.a, {
						name: "embed",
						className: ge.a.Icon
					})), e.showEditPost && !Object(Z.b)(this.props.post) && i.a.createElement(_e, {
						className: this.getBreakpointClass(W.a.EditPost),
						displayText: s.fbt._("Edit post", null, {
							hk: "3gVzz0"
						}),
						onClick: this.handleEdit,
						isSelected: e.post.hidden
					}, i.a.createElement(N.a, {
						name: "edit",
						className: ge.a.Icon
					})), x && i.a.createElement(_e, {
						className: this.getBreakpointCx(B.a.Flair, y),
						displayText: s.fbt._("Edit Post Flair", null, {
							hk: "1pGISD"
						}),
						onClick: e.onFlairPost,
						isSelected: e.post.hidden
					}, i.a.createElement(N.a, {
						name: "tag",
						className: ge.a.Icon
					})), i.a.createElement(_e, {
						className: this.getBreakpointClass(W.a.Save),
						displayText: e.post.saved ? s.fbt._("unsave", null, {
							hk: "HDDPm"
						}) : s.fbt._("save", null, {
							hk: "3bg2gs"
						}),
						onClick: this.toggleSave,
						isSelected: e.post.saved
					}, i.a.createElement(N.a, {
						name: e.post.saved ? "saved" : "save",
						className: ge.a.Icon
					})), C && i.a.createElement(_e, {
						displayText: a ? s.fbt._("Unpin Post from Profile", null, {
							hk: "6DYfk"
						}) : s.fbt._("Pin Post to Profile", null, {
							hk: "2RWbNF"
						}),
						onClick: this.togglePinned
					}, i.a.createElement(N.a, {
						name: "pin",
						className: ge.a.Icon,
						isFilled: this.props.isPinned
					})), !e.post.isSponsored && i.a.createElement(_e, {
						className: this.getBreakpointClass(W.a.Hide),
						displayText: e.post.hidden ? s.fbt._("unhide", null, {
							hk: "1P4IxC"
						}) : s.fbt._("hide", null, {
							hk: "48yKzW"
						}),
						onClick: this.toggleHide,
						isSelected: e.post.hidden
					}, i.a.createElement(N.a, {
						name: "hide",
						className: ge.a.HideIcon
					})), !e.post.isSponsored && !g && i.a.createElement(_e, {
						className: this.getBreakpointClass(W.a.Report),
						displayText: s.fbt._("report", null, {
							hk: "128RPn"
						}),
						onClick: this.handleReport
					}, i.a.createElement(N.a, {
						name: "report",
						className: ge.a.Icon
					})), h && o && p && i.a.createElement(_e, {
						onClick: p,
						displayText: s.fbt._("Start event now", null, {
							hk: "3VomTN"
						})
					}, i.a.createElement(N.a, {
						name: "live",
						className: ge.a.Icon
					})), h && o && v && i.a.createElement(_e, {
						onClick: v,
						displayText: s.fbt._("Edit start time", null, {
							hk: "2typ17"
						})
					}, i.a.createElement(N.a, {
						name: "scheduled",
						className: ge.a.Icon
					})), h && !P && O && i.a.createElement(_e, {
						displayText: s.fbt._("Add event start time", null, {
							hk: "1XXqzu"
						}),
						onClick: O
					}, i.a.createElement(N.a, {
						name: "scheduled",
						className: ge.a.Icon
					})), h && i.a.createElement(_e, {
						className: this.props.isPostPartOfACollection ? ge.a.disabledRow : void 0,
						displayText: s.fbt._("Add to collection", null, {
							hk: "3UNHgN"
						}),
						onClick: this.handleAddToCollection,
						noHover: this.props.isPostPartOfACollection
					}, i.a.createElement(N.a, {
						name: "collection",
						className: ge.a.Icon
					})), g && i.a.createElement(_e, {
						displayText: s.fbt._("delete", null, {
							hk: "4kSfzC"
						}),
						onClick: this.toggleDeleteConfirmation
					}, i.a.createElement(N.a, {
						name: "delete",
						className: ge.a.Icon
					})), _ && e.userIsOp && i.a.createElement(_e, {
						displayText: e.post.distinguishType === n.H.ADMIN ? s.fbt._("undistinguish", null, {
							hk: "2chGON"
						}) : s.fbt._("Distinguish as admin", null, {
							hk: "2xltiM"
						}),
						onClick: () => e.post.distinguishType === n.H.ADMIN ? e.onDistinguishPost(n.H.NONE) : e.onDistinguishPost(n.H.ADMIN)
					}, i.a.createElement(N.a, {
						name: "admin",
						className: ge.a.Icon
					})), g && j && !k && i.a.createElement(L.a, {
						text: s.fbt._("Mark as OC", null, {
							hk: "2vGyoC"
						}),
						onClick: this.toggleOC,
						isSelected: this.props.post.isOriginalContent
					}), g && E && i.a.createElement(L.a, {
						text: s.fbt._("Mark as Spoiler", null, {
							hk: "3PJk7A"
						}),
						onClick: this.toggleSpoiler,
						isSelected: this.props.post.isSpoiler
					}), g && i.a.createElement(L.a, {
						text: s.fbt._("Mark as NSFW", null, {
							hk: "4qK6JN"
						}),
						onClick: this.toggleNSFW,
						isSelected: this.props.post.isNSFW
					}), g && u.domain === J.a && !this.props.isAllowReactionsKillswitchEnabled && i.a.createElement(L.a, {
						text: s.fbt._("Allow video threads", null, {
							hk: "DJXlU"
						}),
						onClick: () => {
							var t;
							e.onToggleReactAllowed(), this.props.sendEvent(Object(X.a)({
								subredditId: null === (t = this.props.subredditOrProfile) || void 0 === t ? void 0 : t.id,
								postId: this.props.postId,
								reactionsEnabled: this.props.post.isReactAllowed
							}))
						},
						isSelected: this.props.post.isReactAllowed
					}), e.userIsOp && i.a.createElement(L.a, {
						text: s.fbt._("Send me reply notifications", null, {
							hk: "6AmTA"
						}),
						onClick: e.onToggleSendReplies,
						isSelected: this.props.post.sendReplies
					}), i.a.createElement(Ce.a, {
						contextType: Oe.a.POST,
						contextData: u
					}))
				}
				render() {
					const {
						props: e
					} = this;
					return i.a.createElement("div", null, i.a.createElement(M.b, {
						className: Object(b.a)(ge.a.overflowMenu, this.getOverflowMenuBreakpointClass(), e.className),
						dropdownId: e.dropdownId,
						isFixed: e.isFixed,
						layout: e.layout,
						onClick: this.handleClickMenuButton
					}, this.renderDropdownIcons()), e.reportFlowIsOpen && e.subredditOrProfile && e.hasSubredditRules && this.renderReportFlow(), this.state.isConfirmDeleteOpen && i.a.createElement(xe, {
						post: this.props.post,
						toggleConfirmDelete: this.toggleDeleteConfirmation,
						handleDeletePost: this.handleDeletePost
					}), e.videoShareModalOpen && i.a.createElement(U.b, {
						className: ge.a.modalBody,
						onClose: this.onCloseShareModal,
						withOverlay: !1,
						url: Object(u.a)(Object(T.a)(e.postId), {
							[E.q]: ke,
							utm_source: "share",
							utm_medium: "web2x",
							utm_content: "rpan_stream"
						})
					}))
				}
			}
			we.contextType = k.a;
			t.a = y(Object(le.e)(Ee(we)))
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			})), o.d(t, "b", (function() {
				return i
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);
			const r = Object(s.createContext)({
					currentTime: 0,
					setCurrentTime: () => {},
					isLive: !1,
					setIsLive: () => {},
					totalTime: 0,
					setTotalTime: () => {}
				}),
				i = e => {
					let {
						children: t
					} = e;
					const [o, i] = Object(s.useState)(0), [a, c] = Object(s.useState)(!1), [d, l] = Object(s.useState)(0), p = {
						currentTime: o,
						setCurrentTime: i,
						isLive: a,
						setIsLive: c,
						totalTime: d,
						setTotalTime: l
					};
					return n.a.createElement(r.Provider, {
						value: p
					}, t)
				}
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			}));
			var s = o("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = e => `PublicAccessNetwork--VideoShare--Modal-${e}`,
				r = Object(s.a)({
					resolved: {},
					chunkName: () => "VideoShareModal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!o.m[t]
					},
					importAsync: () => o.e("VideoShareModal").then(o.bind(null, "./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModal.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return o(t)
					},
					resolve() {
						return "./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModal.tsx"
					}
				}, {
					ssr: !1
				});
			t.b = r
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return r
			}));
			var s = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = o("./src/reddit/constants/colors.ts");
			const r = {
				backgroundColor: n.a.overlayReportFlow
			};
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "ReportFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => Promise.all([o.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), o.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return o(t)
				},
				resolve() {
					return "./src/reddit/components/ReportFlow/_ReportFlow.tsx"
				}
			})
		},
		"./src/reddit/components/ReportFlow/new.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return i
			}));
			var s = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = o("./src/reddit/constants/colors.ts");
			const r = {
					backgroundColor: n.a.overlayReportFlow
				},
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ReportFlow",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!o.m[t]
					},
					importAsync: () => Promise.all([o.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), o.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return o(t)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx"
					}
				}),
				a = Object(s.a)({
					resolved: {},
					chunkName: () => "ReportFlowNew",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!o.m[t]
					},
					importAsync: () => o.e("ReportFlowNew").then(o.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return o(t)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx"
					}
				});
			t.b = a
		},
		"./src/reddit/components/ShareMenu/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/ShareMenu/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/react/index.js"),
				r = o.n(n),
				i = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/uuid/v4.js"),
				c = o.n(a),
				d = o("./src/config.ts"),
				l = o("./src/lib/addQueryParams/index.ts"),
				p = o("./src/reddit/actions/chat/toggle.ts"),
				m = o("./src/reddit/actions/modal.ts"),
				u = o("./src/reddit/actions/post.ts"),
				b = o("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				h = o("./src/reddit/actions/tooltip.ts"),
				f = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				x = o("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				C = o("./src/reddit/constants/parameters.ts"),
				O = o("./src/reddit/controls/Dropdown/index.tsx"),
				v = o("./src/reddit/controls/Dropdown/Row.tsx"),
				g = o("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				_ = o("./src/reddit/helpers/trackers/shareToChat.ts"),
				k = o("./src/reddit/hooks/useTracking.ts"),
				j = o("./src/reddit/icons/fonts/index.tsx"),
				E = o("./src/reddit/models/Post/index.ts"),
				w = o("./src/reddit/models/Subreddit/index.ts"),
				I = o("./src/reddit/routes/postCreation/constants.ts"),
				P = o("./src/reddit/selectors/activeModalId.ts"),
				y = o("./src/reddit/selectors/tooltip.ts"),
				T = o("./src/reddit/components/ShareMenu/index.m.less"),
				S = o.n(T);
			const N = Object(f.a)(O.a),
				F = c()(),
				M = e => {
					let {
						permalink: t,
						onShare: o
					} = e;
					return r.a.createElement(v.b, {
						id: "shareToChat",
						className: S.a.dropdownRow,
						displayText: s.fbt._("share to chat", null, {
							hk: "3EuIWT"
						}),
						onClick: () => {
							const e = Object(l.a)(t, {
								utm_source: "share",
								utm_medium: "web2x",
								context: 3
							});
							o(e)
						}
					}, r.a.createElement(j.a, {
						name: "chat",
						className: S.a.chatIcon
					}))
				},
				R = e => {
					let {
						permalink: t,
						sendEventWithName: o
					} = e;
					return r.a.createElement(v.b, {
						className: S.a.dropdownRow,
						displayText: s.fbt._("Embed", null, {
							hk: "2CcsuC"
						}),
						onClick: () => {
							o("share_embed"), window.open(`${d.a.rebedMediaUrl}/embed?url=${t}`, "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, r.a.createElement(j.a, {
						name: "embed",
						className: S.a.embedIcon
					}))
				},
				A = e => {
					let {
						onCrosspost: t
					} = e;
					return r.a.createElement(v.b, {
						className: S.a.dropdownRow,
						displayText: s.fbt._("crosspost", null, {
							hk: "23zSN6"
						}),
						onClick: t
					}, r.a.createElement(j.a, {
						name: "crosspost",
						className: S.a.crosspostIcon
					}))
				},
				L = r.a.memo(e => {
					const t = Object(i.d)(),
						o = Object(k.a)(),
						a = Object(i.e)(t => Object(y.b)(e.dropdownId)(t)),
						c = Object(i.e)(t => Object(P.b)(Object(x.a)(e.dropdownId))(t)),
						d = Object(n.useCallback)(() => {
							t(Object(h.h)({
								tooltipId: e.dropdownId
							}))
						}, [t, e.dropdownId]),
						f = e => t(Object(u.D)(e)),
						O = Object(n.useCallback)(() => {
							e.post && (t(Object(b.d)(e.post.id)), t(Object(m.i)(Object(x.a)(e.post.id))))
						}, [t, e.post]),
						T = !e.subredditType || e.subredditType === w.f.Public,
						L = !!e.post && e.post.isCrosspostable && !e.post.isSponsored,
						D = Object(n.useCallback)(e => {
							t(Object(p.e)(e)), o(Object(_.a)())
						}, [t, o]);
					return r.a.createElement("div", {
						className: e.className,
						onClick: d,
						id: e.dropdownId
					}, e.children, r.a.createElement(N, {
						className: S.a.dropdown,
						isOpen: a,
						tooltipId: e.dropdownId
					}, r.a.createElement(v.b, {
						className: S.a.dropdownRow,
						displayText: s.fbt._("Copy link", null, {
							hk: "1tCqox"
						}),
						onClick: () => {
							const {
								permalink: t,
								post: o
							} = e;
							if (o && Object(E.q)(o)) e.sendEventWithName("share_copy", {
								referralId: F
							}), O();
							else {
								const o = Object(l.a)(t, {
									utm_source: "share",
									utm_medium: "web2x",
									context: 3
								});
								e.sendEventWithName("share_copy"), f(o)
							}
						}
					}, r.a.createElement(j.a, {
						name: "link_post",
						className: S.a.linkIcon
					})), L && r.a.createElement(A, {
						onCrosspost: () => {
							e.sendEventWithName("share_crosspost"), e.post && window.open(`${I.b}?source_id=${e.post.id}`, "_blank")
						}
					}), T && r.a.createElement(R, {
						permalink: e.permalink,
						sendEventWithName: e.sendEventWithName
					}), r.a.createElement(M, {
						permalink: e.permalink,
						onShare: D
					})), c && e.post && r.a.createElement(x.b, {
						className: S.a.modalBody,
						onClose: t => {
							t && (e.sendEventWithName("copy_link", {
								referralId: F
							}), f(t)), O()
						},
						url: Object(l.a)(Object(g.a)(e.post.id), {
							[C.q]: F,
							utm_source: "share",
							utm_medium: "web2x",
							utm_content: "rpan_stream"
						})
					}))
				});
			t.a = L
		},
		"./src/reddit/components/ViewReportsDropdown/Loader.ts": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-ViewReportsDropdown-index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => o.e("reddit-components-ViewReportsDropdown-index").then(o.bind(null, "./src/reddit/components/ViewReportsDropdown/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return o(t)
				},
				resolve() {
					return "./src/reddit/components/ViewReportsDropdown/index.tsx"
				}
			})
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return s
			})), o.d(t, "b", (function() {
				return n
			})), o.d(t, "c", (function() {
				return r
			})), o.d(t, "a", (function() {
				return i
			})), o.d(t, "e", (function() {
				return a
			}));
			const s = "comment",
				n = "comment-submission-form-markdown",
				r = "comment-submission-form-richtext",
				i = "comments-page-link-num-comments",
				a = "post-content"
		},
		"./src/reddit/constants/postCreation.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return s
			})), o.d(t, "b", (function() {
				return n
			})), o.d(t, "c", (function() {
				return r
			})), o.d(t, "d", (function() {
				return i
			})), o.d(t, "f", (function() {
				return a
			})), o.d(t, "e", (function() {
				return c
			})), o.d(t, "g", (function() {
				return d
			}));
			const s = "PostCreation-AddEventButton",
				n = 500,
				r = "PostCreation-CollectionEducationTooltip",
				i = "PostCreation-EventEducationTooltip",
				a = 300,
				c = a,
				d = "PostCreation-AddToCollectionButton"
		},
		"./src/reddit/controls/CheckboxMenuItem/index.m.less": function(e, t, o) {
			e.exports = {
				checkboxIcon: "_3Ebr0mkLD0A7HiowzExNW-",
				checkboxMenuItem: "_2eawLPCtwzvTZhWKtaUgZQ",
				expandRight: "_34Odk7t6y-rCPxPcYJa4Nw",
				postCheckboxMenuItem: "_3LyKu57c-QkPvlFvAgWop5"
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return m
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/fonts/index.tsx"),
				a = o("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				c = o("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				d = o.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = e => n.a.createElement("div", {
					className: Object(r.a)(d.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, n.a.createElement(a.a, {
					className: d.a.expandRight
				}, n.a.createElement(i.a, {
					name: "checkbox",
					isFilled: e.isSelected,
					className: d.a.checkboxIcon
				}), e.text)),
				m = e => {
					let {
						className: t,
						...o
					} = e;
					return n.a.createElement(p, l({
						className: Object(r.a)(d.a.postCheckboxMenuItem, t)
					}, o))
				}
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, o) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, o) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return v
			})), o.d(t, "c", (function() {
				return g
			}));
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/lodash/uniqueId.js"),
				r = o.n(n),
				i = o("./node_modules/raf/index.js"),
				a = o.n(i),
				c = o("./node_modules/react/index.js"),
				d = o.n(c),
				l = o("./src/lib/classNames/index.ts"),
				p = o("./src/higherOrderComponents/asModal/index.tsx"),
				m = o("./src/reddit/controls/Button/index.tsx"),
				u = o("./src/reddit/layout/row/Inline/index.tsx"),
				b = o("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				h = o.n(b);
			var f = Object(p.a)(e => {
					const {
						children: t,
						title: o
					} = e;
					return d.a.createElement("div", {
						className: h.a.wrapper
					}, d.a.createElement(u.a, {
						className: h.a.titleRow
					}, o), d.a.createElement("div", {
						className: h.a.detailsContainer
					}, t), d.a.createElement(u.a, {
						className: h.a.buttonRow
					}, d.a.createElement(m.l, {
						className: h.a.confirmButton,
						onClick: e.onConfirmed
					}, s.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				x = o("./src/reddit/controls/ErrorText/index.m.less"),
				C = o.n(x);
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
						errorModalBody: o,
						errorModalTitle: n = s.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: r = s.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: i,
						isModalOpen: a
					} = this.state;
					return d.a.createElement("div", {
						className: Object(l.a)(C.a.wrapper, t)
					}, d.a.createElement("span", {
						className: C.a.description,
						ref: this.spanRef
					}, e), i && d.a.createElement("span", {
						className: C.a.moreText,
						onClick: this.toggleModal
					}, r), a && d.a.createElement(f, {
						onConfirmed: this.toggleModal,
						title: n
					}, o || e))
				}
			}
			const v = e => {
					const {
						className: t,
						errorClassName: o,
						errorModalTitle: s,
						fallbackMessage: n,
						messages: r = []
					} = e, i = r.length ? r : n ? [n] : [];
					return i.length ? d.a.createElement("div", {
						className: t
					}, i.map((e, t) => d.a.createElement(O, {
						className: o,
						errorModalTitle: s,
						key: t
					}, e))) : null
				},
				g = e => d.a.createElement(v, {
					fallbackMessage: s.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = O
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./src/lib/lessComponent.tsx"),
				n = o("./src/reddit/controls/Input/index.m.less"),
				r = o.n(n);
			t.a = s.a.input("input", r.a)
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, o) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = o.n(i);
			t.a = e => {
				let {
					center: t,
					className: o,
					sizePx: s = 10
				} = e;
				return n.a.createElement("div", {
					className: Object(r.a)(a.a.loadingIcon, o, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${s}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/helpers/hasModPostPermissions/index.ts": function(e, t, o) {
			"use strict";
			t.a = e => !!e && !!e.posts
		},
		"./src/reddit/helpers/trackers/freeAwardOffer.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return c
			})), o.d(t, "a", (function() {
				return d
			})), o.d(t, "c", (function() {
				return l
			}));
			var s = o("./src/reddit/helpers/correlationIdTracker.ts"),
				n = o("./src/reddit/helpers/trackers/goldPayment.ts"),
				r = o("./src/reddit/models/Gold/ProductOffer.ts"),
				i = o("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					...Object(n.h)(e, {
						offerContext: r.a.StorefrontFreeAward
					}),
					correlationId: Object(s.d)(s.a.GoldPayment, !1),
					profile: i.S(e),
					subreddit: i.ib(e)
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
		"./src/reddit/helpers/trackers/postCollection.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return s
			})), o.d(t, "h", (function() {
				return d
			})), o.d(t, "g", (function() {
				return l
			})), o.d(t, "o", (function() {
				return p
			})), o.d(t, "f", (function() {
				return u
			})), o.d(t, "e", (function() {
				return b
			})), o.d(t, "n", (function() {
				return h
			})), o.d(t, "m", (function() {
				return f
			})), o.d(t, "b", (function() {
				return C
			})), o.d(t, "p", (function() {
				return O
			})), o.d(t, "c", (function() {
				return v
			})), o.d(t, "j", (function() {
				return g
			})), o.d(t, "q", (function() {
				return _
			})), o.d(t, "k", (function() {
				return k
			})), o.d(t, "l", (function() {
				return j
			})), o.d(t, "i", (function() {
				return E
			})), o.d(t, "d", (function() {
				return w
			}));
			var s, n, r = o("./src/reddit/constants/tracking.ts"),
				i = o("./src/reddit/helpers/trackers/postEvent.ts"),
				a = o("./src/reddit/selectors/platform.ts"),
				c = o("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(s || (s = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(n || (n = {}));
			const d = e => t => ({
					source: s.collection,
					noun: n.post,
					...m(t, e)
				}),
				l = e => {
					let {
						postId: t,
						isFollowed: o
					} = e;
					return e => ({
						source: s.collection,
						noun: o ? n.unfollow : n.follow,
						...m(e, t)
					})
				},
				p = e => {
					let {
						postId: t,
						isFollowed: o
					} = e;
					return e => ({
						source: i.a.postEvent,
						noun: o ? n.unfollow : n.follow,
						...m(e, t)
					})
				},
				m = (e, t) => {
					const o = {
						...c.n(e),
						action: r.c.CLICK,
						subreddit: c.ib(e)
					};
					return void 0 === t ? o : {
						...o,
						post: c.J(e, t),
						postCollection: c.L(e, {
							postId: t
						}),
						postEvent: c.M(e, {
							postId: t
						})
					}
				},
				u = e => ({
					...x(e),
					action: r.c.VIEW,
					noun: n.collectionEducation
				}),
				b = e => ({
					...x(e),
					action: r.c.CLICK,
					noun: n.collectionEducationGotIt
				}),
				h = e => ({
					...x(e),
					action: r.c.VIEW,
					noun: n.eventEducation
				}),
				f = e => ({
					...x(e),
					action: r.c.CLICK,
					noun: n.eventEducationGotIt
				}),
				x = e => ({
					...c.n(e),
					subreddit: c.ib(e),
					source: s.postComposer
				}),
				C = (e, t) => o => ({
					...m(o, e),
					source: t || s.postOverflowMenu,
					noun: n.collectionAddPost
				}),
				O = e => t => ({
					...m(t, e),
					source: s.collectionComposer,
					noun: n.collectionRemovePost
				}),
				v = () => e => ({
					...m(e),
					source: s.collectionComposer,
					noun: n.collectionCancel
				}),
				g = () => e => {
					const t = Object(a.o)(e) || void 0;
					return {
						...m(e, t),
						source: s.collectionComposer,
						noun: n.collectionCreate
					}
				},
				_ = () => e => ({
					...m(e),
					source: s.collectionComposer,
					noun: n.collectionSelect
				}),
				k = e => t => ({
					...c.n(t),
					subreddit: c.ib(t),
					source: s.collectionComposer,
					action: r.c.CLICK,
					noun: n.collectionDelete,
					postCollection: c.K(t, {
						collectionId: e
					})
				}),
				j = e => t => ({
					...m(t),
					source: s.collectionComposer,
					noun: n.collectionEdit,
					postCollection: c.K(t, {
						collectionId: e
					})
				}),
				E = e => t => ({
					...m(t, e),
					source: s.collectionComposer,
					noun: n.startEvent
				}),
				w = () => e => {
					const t = Object(a.o)(e) || void 0;
					return {
						...m(e, t),
						source: s.collectionComposer,
						action: r.c.VIEW,
						noun: n.screen
					}
				}
		},
		"./src/reddit/helpers/trackers/postEvent.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return s
			})), o.d(t, "f", (function() {
				return b
			})), o.d(t, "g", (function() {
				return h
			})), o.d(t, "e", (function() {
				return f
			})), o.d(t, "b", (function() {
				return x
			})), o.d(t, "c", (function() {
				return C
			})), o.d(t, "d", (function() {
				return O
			}));
			var s, n = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/eventTools/index.ts"),
				i = o("./src/lib/timezone/index.ts"),
				a = o("./src/reddit/constants/tracking.ts"),
				c = o("./src/reddit/models/PostCreationForm/index.ts"),
				d = o("./src/reddit/selectors/platform.ts"),
				l = o("./src/reddit/selectors/postCreations.ts"),
				p = o("./src/reddit/selectors/telemetry.ts"),
				m = o("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(s || (s = {}));
			const u = e => p.d(e, {
					pageType: "event_submit"
				}),
				b = e => {
					Object(m.a)({
						...p.n(e),
						source: s.postComposer,
						action: a.c.CLICK,
						noun: "event_create",
						subreddit: p.ib(e)
					})
				},
				h = e => {
					Object(m.a)({
						...p.n(e),
						source: s.postComposer,
						action: a.c.CLICK,
						noun: "event_edit",
						subreddit: p.ib(e),
						postEvent: v(e),
						postComposer: g(e)
					})
				},
				f = () => e => ({
					source: s.eventComposer,
					action: a.c.VIEW,
					noun: a.b.SCREEN,
					actionInfo: u(e),
					postEvent: v(e)
				}),
				x = e => t => ({
					...j(t, Object(d.o)(t)),
					source: s.postComposer,
					noun: "apply",
					postComposer: _(e)
				}),
				C = () => e => ({
					...j(e, Object(d.o)(e)),
					noun: "cancel",
					actionInfo: u(e)
				}),
				O = e => t => ({
					...j(t, Object(d.o)(t)),
					noun: "delete",
					actionInfo: u(t),
					postComposer: g(t),
					postEvent: k(e)
				}),
				v = e => {
					const t = Object(l.p)(e);
					return t && k(t)
				},
				g = e => _(Object(l.p)(e)),
				_ = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === c.j.AtEventTime ? Object(i.f)(e.startDate).getTime() / n.Vb : void 0
					}
				},
				k = e => {
					const t = Object(i.f)(e.startDate).getTime() / n.Vb,
						o = Object(i.f)(e.endDate).getTime() / n.Vb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: o,
						eventState: Object(r.e)(t, o)
					}
				},
				j = (e, t) => {
					const o = {
						source: s.eventComposer,
						action: a.c.CLICK,
						subreddit: p.ib(e)
					};
					return t ? {
						...o,
						post: p.J(e, t),
						postEvent: p.M(e, {
							postId: t
						}),
						postCollection: p.L(e, {
							postId: t
						})
					} : o
				}
		},
		"./src/reddit/helpers/trackers/shareToChat.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			}));
			var s = o("./src/reddit/constants/tracking.ts"),
				n = o("./src/reddit/selectors/telemetry.ts");
			const r = () => e => ({
				...Object(n.n)(e),
				source: "post",
				action: s.c.CLICK,
				noun: "share_chat",
				subreddit: Object(n.ib)(e)
			})
		},
		"./src/reddit/icons/fonts/Comment/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/fonts/helpers.tsx"),
				a = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					...o
				} = e;
				return n.a.createElement("i", d({
					className: Object(r.a)(Object(i.b)("comment", o.isFilled), c.a.commentIcon, t)
				}, o))
			}
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/fonts/helpers.tsx"),
				a = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("i", d({}, e, {
				className: Object(r.a)(Object(i.b)("mod", e.isFilled), c.a.modActions, e.className)
			}))
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/fonts/helpers.tsx"),
				a = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("share", e.isFilled), c.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(r.b)("tag",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/AddCollection/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);
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
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);
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
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, o) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				c = o.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: o,
					heightLeft: s,
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
						height: s,
						marginRight: a
					}
				}, Array.isArray(o) && o[0]), n.a.createElement("div", {
					className: c.a.right
				}, Array.isArray(o) && o[1]))
			}, 2)
		},
		"./src/reddit/selectors/eventPosts.ts": function(e, t, o) {
			"use strict";
			o.d(t, "e", (function() {
				return r
			})), o.d(t, "f", (function() {
				return i
			})), o.d(t, "d", (function() {
				return a
			})), o.d(t, "b", (function() {
				return c
			})), o.d(t, "c", (function() {
				return d
			})), o.d(t, "a", (function() {
				return l
			}));
			var s = o("./src/lib/makeListingKey/index.ts"),
				n = o("./src/reddit/selectors/posts.ts");
			const r = (e, t) => {
					let {
						subredditName: o
					} = t;
					return Object(s.a)("ModhubPage-EventPosts", "timeline", {
						subredditName: o
					})
				},
				i = (e, t) => {
					const o = r(e, t);
					return Object(n.N)(e, {
						listingKey: o
					}) || []
				},
				a = (e, t) => {
					const o = r(e, t);
					return !!e.listings.postOrder.api.pending[o]
				},
				c = (e, t) => {
					const o = r(e, t);
					return !!(e.listings.postOrder.ids[o] || []).length
				},
				d = (e, t) => {
					const o = r(e, t),
						s = e.listings.postOrder.pageInfo[o];
					return !(!s || !s.hasNextPage)
				},
				l = (e, t) => {
					const o = r(e, t),
						s = e.listings.postOrder.pageInfo[o];
					return s && s.endCursor || null
				}
		},
		"./src/reddit/selectors/experiments/reportingRevampDesktop.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
			}));
			var s = o("./src/reddit/constants/experiments.ts"),
				n = o("./src/reddit/helpers/chooseVariant/index.ts"),
				r = o("./src/reddit/selectors/runTimeEnvVars.ts"),
				i = o("./src/reddit/selectors/user.ts");
			const a = e => !!Object(r.b)(e) || Object(n.c)(e, {
				experimentEligibilitySelector: i.Q,
				experimentName: s.n
			}) === s.g.Enabled
		},
		"./src/redditGQL/operations/EventPostsBySubredditName.json": function(e) {
			e.exports = JSON.parse('{"id":"7ca71fafc9e0"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e.15d98a67e0e264e290ed.js.map