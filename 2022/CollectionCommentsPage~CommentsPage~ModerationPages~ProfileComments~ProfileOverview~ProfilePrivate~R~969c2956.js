// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956.6597bfc6f09ce62b4998.js
// Retrieved at 4/11/2022, 11:20:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var o = s("./node_modules/lodash/toString.js"),
				n = 0;
			e.exports = function(e) {
				var t = ++n;
				return o(e) + t
			}
		},
		"./src/reddit/actions/eventPosts/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "fetchEventPostsPending", (function() {
				return v
			})), s.d(t, "fetchEventPostsSuccess", (function() {
				return g
			})), s.d(t, "fetchEventPostsFailure", (function() {
				return _
			})), s.d(t, "fetchMoreEventPostsSuccess", (function() {
				return j
			})), s.d(t, "eventPostsRequested", (function() {
				return k
			})), s.d(t, "startEventNowSuccess", (function() {
				return E
			})), s.d(t, "startEventNowRequested", (function() {
				return w
			})), s.d(t, "editEventTimeSuccess", (function() {
				return I
			})), s.d(t, "editEventTimeRequested", (function() {
				return y
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/eventPosts/constants.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/lib/makeGqlRequest/index.ts"),
				l = s("./src/redditGQL/operations/EventPostsBySubredditName.json");
			var d = s("./src/lib/makeApiRequest/index.ts"),
				p = s("./src/lib/omitHeaders/index.ts"),
				m = s("./src/reddit/constants/headers.ts");
			var u = (e, t, s, o, r) => Object(d.a)(Object(p.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/api/event_post_time.json`,
				method: n.jb.POST,
				data: {
					id: t,
					event_start: s,
					event_end: o,
					event_tz: r
				}
			});
			var b = (e, t) => Object(d.a)(Object(p.a)(e, [m.a]), {
					endpoint: `${e.apiUrl}/api/start_event_post.json`,
					method: n.jb.POST,
					data: {
						id: t
					}
				}),
				h = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts"),
				x = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/selectors/eventPosts.ts"),
				C = s("./src/reddit/selectors/posts.ts");
			const O = () => o.fbt._("Something went wrong. Just don't panic.", null, {
					hk: "4onxm1"
				}),
				v = Object(r.a)(i.e),
				g = Object(r.a)(i.c),
				_ = Object(r.a)(i.b),
				j = Object(r.a)(i.d),
				k = e => async (t, s, o) => {
					let {
						gqlContext: n
					} = o, r = s();
					const i = Object(f.d)(r, {
							subredditName: e
						}),
						d = Object(f.b)(r, {
							subredditName: e
						}),
						p = Object(f.c)(r, {
							subredditName: e
						}),
						m = Object(f.a)(r, {
							subredditName: e
						}),
						u = d && p;
					if (i) return;
					const b = {
						name: e,
						pageSize: 25,
						nonInclusiveCursor: null
					};
					if (u) b.nonInclusiveCursor = m;
					else if (d && !p) return;
					const C = Object(f.e)(r, {
						subredditName: e
					});
					t(v({
						key: C
					}));
					const k = await ((e, t) => Object(c.a)(e, {
						...l,
						variables: t
					}))(n(), b);
					if (k.ok) {
						const {
							subredditInfoByName: e
						} = k.body.data, {
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
						n.length > 0 && (i = n.map(e => e.id), a = n.reduce((e, t) => (e[t.id] = t, e), {})), r = s(), t((u ? j : g)({
							key: C,
							postIds: i,
							meta: r.meta,
							posts: a,
							pageInfo: c
						}))
					} else t(_({
						error: k.error,
						key: C
					})), t(Object(a.f)({
						kind: x.b.Error,
						text: O()
					}))
				}, E = Object(r.a)(i.f), w = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					if ((await b(r(), e)).ok) {
						const n = () => o.fbt._("Following event has started successfully: {title}", [o.fbt._param("title", c)], {
							hk: "e9iz9"
						});
						t(E({
							postId: e
						}));
						const r = s(),
							i = Object(C.G)(r, {
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
				}, I = Object(r.a)(i.a), y = (e, t) => async (s, r, i) => {
					let {
						apiContext: c
					} = i;
					const l = await u(c(), e, t.startDate, t.endDate, t.timezoneName);
					if (l.ok) {
						const t = l.body,
							i = 14400,
							c = Math.round(t.event_start / n.Sb);
						let d = t.event_end;
						const p = {
							eventStart: c,
							eventEnd: d = d && Math.round(d / n.Sb) || c + i,
							eventIsLive: t.event_is_live
						};
						s(I({
							postId: e,
							eventInfo: p
						}));
						const m = r(),
							u = Object(C.G)(m, {
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
				return G
			})), s.d(t, "c", (function() {
				return H
			})), s.d(t, "h", (function() {
				return z
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
				l = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/constants/history.ts"),
				p = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/makeApiRequest/index.ts"),
				u = s("./src/lib/omitHeaders/index.ts"),
				b = s("./src/reddit/constants/headers.ts");
			var h = (e, t, s) => Object(m.a)(Object(u.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/add_post_to_collection.json`,
				method: p.jb.POST,
				data: {
					collection_id: t,
					link_fullname: s
				}
			});
			var x = (e, t, s) => Object(m.a)(Object(u.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/create_collection.json`,
				method: p.jb.POST,
				data: {
					title: t,
					sr_fullname: s
				}
			});
			var f = (e, t) => Object(m.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/delete_collection.json`,
					method: p.jb.POST,
					data: {
						collection_id: t
					}
				}),
				C = s("./src/config.ts");
			var O = (e, t) => Object(m.a)(Object(u.a)(e, [b.a]), {
				endpoint: `${C.a.gatewayUrl}/desktopapi/v1/subreddit_collections/${t}`,
				method: p.jb.GET
			});
			var v = (e, t, s) => Object(m.a)(Object(u.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/remove_post_in_collection.json`,
				method: p.jb.POST,
				data: {
					collection_id: t,
					link_fullname: s
				}
			});
			var g = (e, t, s) => Object(m.a)(Object(u.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_title.json`,
				method: p.jb.POST,
				data: {
					collection_id: t,
					title: s
				}
			});
			var _ = (e, t, s) => Object(m.a)(Object(u.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/reorder_collection.json`,
				method: p.jb.POST,
				data: {
					collection_id: t,
					link_ids: s.join(",")
				}
			});
			var j = (e, t, s) => Object(m.a)(Object(u.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_description.json`,
				method: p.jb.POST,
				data: {
					collection_id: t,
					description: s
				}
			});
			var k = (e, t, s) => Object(m.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/update_collection_display_layout.json`,
					method: p.jb.POST,
					data: {
						collection_id: t,
						display_layout: s
					}
				}),
				E = s("./src/reddit/helpers/overlay/index.ts"),
				w = s("./src/reddit/helpers/path/index.ts"),
				I = s("./src/reddit/models/Toast/index.ts"),
				y = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				P = s("./src/reddit/selectors/postCollection.ts"),
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
					a.ok ? t(A(a.body)) : t(Object(l.f)({
						kind: I.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, B = Object(i.a)(c.g), D = (e, t, s) => async (n, r, i) => {
					let {
						apiContext: a
					} = i;
					if ((await v(a(), e, t)).ok) {
						const i = r(),
							a = Object(T.G)(i, {
								postId: t
							}),
							c = a && a.title || "",
							d = Object(P.q)(i, {
								collectionId: e
							}),
							p = (d && d.postIds && d.postIds.indexOf(t) || -1) - 1;
						if (n(B({
								collectionId: e,
								postId: t
							})), s && p >= 0) {
							const t = r(),
								s = Object(P.q)(t, {
									collectionId: e
								}),
								o = s && s.postIds && s.postIds[p] || "",
								i = Object(T.G)(t, {
									postId: o
								});
							i && i.permalink && n(Object(E.a)(i.permalink))
						}
						n(Object(l.f)({
							kind: I.b.SuccessMod,
							text: o.fbt._("Following post removed from collection successfully: {postTitle}", [o.fbt._param("postTitle", c)], {
								hk: "8e1lV"
							}),
							buttonText: o.fbt._("UNDO", null, {
								hk: "3KPLib"
							}),
							buttonAction: G(e, t)
						}))
					} else n(Object(l.f)({
						kind: I.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, W = Object(i.a)(c.a), V = Object(i.a)(c.t), G = (e, t) => async (s, n, r) => {
					let {
						apiContext: i
					} = r;
					const a = n();
					if ((await h(i(), e, t)).ok) {
						s(W({
							collectionId: e,
							postId: t
						})), s(V({
							collectionId: e,
							postId: t
						}));
						const n = Object(T.G)(a, {
								postId: t
							}),
							r = Object(P.q)(a, {
								collectionId: e
							}),
							i = r && r.title || "";
						s(Object(l.f)({
							kind: I.b.SuccessMod,
							text: o.fbt._("Success! You added a post to the collection: {title}", [o.fbt._param("title", i)], {
								hk: "3KNJWi"
							}),
							buttonText: o.fbt._("VIEW", null, {
								hk: "1SSkgL"
							}),
							buttonAction: Object(E.a)(n.permalink)
						}))
					} else s(Object(l.f)({
						kind: I.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, U = Object(i.a)(c.e), H = (e, t) => async (s, i, a) => {
					let {
						apiContext: c
					} = a;
					const d = i();
					if ((await f(c(), e)).ok) {
						const {
							url: i
						} = d.platform.currentPage, a = Object(P.q)(d, {
							collectionId: e
						}), c = a && a.title || "", p = a && a.subredditId, m = p ? Object(S.c)(d, p) : "/";
						s(U({
							collectionId: e,
							collection: a
						})), s(t ? Object(n.c)(Object(r.a)(i, ["collection"])) : Object(n.b)(m)), s(Object(l.f)({
							kind: I.b.SuccessMod,
							text: o.fbt._("Collection deleted successfully: {title}", [o.fbt._param("title", c)], {
								hk: "4tcOKB"
							})
						}))
					} else s(Object(l.f)({
						kind: I.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, K = Object(i.a)(c.r), q = Object(i.a)(c.n), J = Object(i.a)(c.s), z = (e, t) => async (s, n, r) => {
					let {
						apiContext: i
					} = r;
					s(K());
					const a = await g(i(), e, t);
					let c = !1;
					if (a.ok) s(J({
						collectionId: e,
						newTitle: t
					})), s(Object(l.f)({
						kind: I.b.SuccessMod,
						text: o.fbt._("Collection title updated successfully", null, {
							hk: "2hKzKl"
						})
					})), c = !0;
					else {
						const e = a.error;
						s(q(e)), s(Object(l.f)({
							kind: I.b.Error,
							text: o.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))
					}
					return c
				}, Q = Object(i.a)(c.l), X = Object(i.a)(c.m), Y = Object(i.a)(c.k), Z = e => async (t, s) => {
					const o = s();
					if (Object(y.b)(o)) return void t(Object(a.bb)(Object(w.b)(e.permalink), e.id));
					const r = o.platform.currentPage.locationState;
					t(!(!r || !r[d.b.IsOverlay]) ? Object(E.a)(e.permalink) : Object(n.b)(Object(w.b)(e.permalink)))
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
						const a = await _(i(), e, t);
						let c = !1;
						return a.ok ? (s(ee({
							collectionId: e,
							postIds: t
						})), s(Object(l.f)({
							kind: I.b.SuccessMod,
							text: o.fbt._("Collection order updated successfully", null, {
								hk: "4ccHEL"
							})
						})), c = !0) : (s(te({
							error: a.error
						})), s(Object(l.f)({
							kind: I.b.Error,
							text: o.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))), c
					})(n, a))), c && s.push(t(z(n, c))), void 0 !== r && s.push(t(((e, t) => async (s, n, r) => {
						let {
							apiContext: i
						} = r;
						s(Q());
						const a = await j(i(), e, t);
						let c = !1;
						if (a.ok) s(X({
							collectionId: e,
							newDescription: t
						})), s(Object(l.f)({
							kind: I.b.SuccessMod,
							text: o.fbt._("Collection description updated successfully", null, {
								hk: "1rIDCC"
							})
						})), c = !0;
						else {
							const e = a.error;
							s(Y(e)), s(Object(l.f)({
								kind: I.b.Error,
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
						const a = await k(i(), e, t);
						let c = !1;
						if (a.ok) s(ne({
							collectionId: e,
							newLayout: t
						})), s(Object(l.f)({
							kind: I.b.SuccessMod,
							text: o.fbt._("Collection layout updated successfully", null, {
								hk: "1Rs19j"
							})
						})), c = !0;
						else {
							const e = a.error;
							s(oe(e)), s(Object(l.f)({
								kind: I.b.Error,
								text: o.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return c
					})(n, i)));
					let d = !0;
					return await Promise.all(s).then(e => {
						e.forEach(e => {
							e || (d = !1)
						})
					}), d
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
				l = s("./src/lib/omitHeaders/index.ts"),
				d = s("./src/reddit/constants/headers.ts"),
				p = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				m = s("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
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
			var C = (e, t) => Object(c.a)(Object(l.a)(e, [d.a]), {
					endpoint: Object(u.a)(Object(p.a)(`${e.apiUrl}/api/editusertext`)),
					method: a.jb.POST,
					data: f(t)
				}).then(m.b),
				O = s("./src/reddit/helpers/overlay/index.ts"),
				v = s("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				g = s("./src/reddit/helpers/trackers/lightbox.ts"),
				_ = s("./src/reddit/helpers/trackers/post.ts"),
				j = s("./src/reddit/helpers/trackers/postComposer.ts"),
				k = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/models/PostCreationForm/index.ts"),
				w = s("./src/reddit/models/Toast/index.ts"),
				I = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/actions/postCreation/constants.ts"),
				P = s("./src/reddit/actions/postCreation/general.ts");
			const T = Object(n.a)(y.l),
				S = Object(n.a)(y.m),
				N = Object(n.a)(y.x),
				M = Object(n.a)(y.H),
				F = Object(n.a)(y.I),
				R = (e, t) => async (s, o, n) => {
					let {
						apiContext: r
					} = n;
					const i = o(),
						a = Object(I.G)(i, {
							postId: e
						});
					t ? (s(Object(O.a)(a.permalink)), Object(g.e)(e, "edit")(i)) : Object(_.d)(e, "edit")(i);
					const {
						media: c
					} = a;
					if (!c) return;
					let l, d = E.i.RICH_TEXT,
						p = "";
					c.type === k.o.TEXT ? (d = E.i.MARKDOWN, p = c.content) : c.type === k.o.RTJSON && (p = (d = c.rteMode || E.i.RICH_TEXT) === E.i.MARKDOWN ? c.markdownContent : c.richtextContent, l = c.mediaMetadata || void 0), s(M({
						editorMode: d,
						mediaMetadata: l,
						postContent: p,
						postId: e
					}))
				}, A = e => async (t, s, n) => {
					let {
						apiContext: a
					} = n;
					const {
						post: c
					} = e, l = !c.media || "rtjson" !== c.media.type && "text" !== c.media.type ? "" : c.media.rteMode;
					j.E(s(), Object(P.o)(l)), t(N(c.id));
					const d = await C(a(), e),
						p = !1 === d.body.success;
					if (t(T(c.id)), d.ok && !p) {
						t(Object(i.f)({
							kind: w.b.SuccessCommunity,
							text: o.fbt._("Post successfully edited", null, {
								hk: "xej5K"
							})
						})), t(F(c.id));
						const e = Object(v.a)(d.body);
						t(Object(r.S)({
							[c.id]: e
						}))
					} else t(S(d.error))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return m
			})), s.d(t, "a", (function() {
				return O
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "e", (function() {
				return _
			})), s.d(t, "f", (function() {
				return k
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/query-string/index.js"),
				n = s.n(o),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				c = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				d = s("./src/reddit/selectors/subreddit.ts");
			const p = new Set(["home", "r/popular"]),
				m = e => {
					const t = location && location.search || "",
						s = n.a.parse(t);
					p.has(e) && (s.related = e);
					const o = n.a.stringify(s);
					return o ? `?${o}` : ""
				},
				u = Object(r.a)(i.N),
				b = Object(r.a)(i.y),
				h = Object(r.a)(i.O),
				x = Object(r.a)(i.z),
				f = Object(r.a)(i.M),
				C = Object(r.a)(i.L),
				O = Object(r.a)(i.t),
				v = Object(r.a)(i.u),
				g = e => async (t, s, o) => {
					let {
						gqlContext: n
					} = o;
					const r = Object(c.g)(e),
						i = s();
					if (Object(l.d)(i, r)) return;
					t(u(r));
					const d = await Object(a.e)(n(), r),
						p = Date.now();
					if (d.ok && d.body && d.body.data) {
						const e = d.body.data;
						t(b({
							model: e,
							utcTimeStamp: p
						}))
					} else t(w({
						streamId: r,
						error: d.error,
						utcTimeStamp: p
					}))
				}, _ = (e, t) => async (s, o) => s(j(e, t)), j = (e, t) => async (s, o, n) => {
					let {
						gqlContext: r
					} = n;
					const i = o();
					if (Object(l.f)(i)) return;
					s(h());
					const c = await Object(a.f)(r(), e, t),
						d = Date.now();
					if (c.ok && c.body && c.body.data) {
						const t = c.body.data;
						s(x({
							listingName: e,
							models: t,
							utcTimeStamp: d
						}))
					} else s(I({
						error: c.error,
						utcTimeStamp: d
					}))
				}, k = (e, t) => async (s, o) => s(E(e, t)), E = (e, t) => async (s, o, n) => {
					let {
						gqlContext: r
					} = n;
					const i = o();
					if (Object(l.f)(i)) return;
					s(h());
					const c = Date.now(),
						p = e.replace("r/", ""),
						m = Object(d.D)(i, p),
						u = await Object(a.b)(r(), {
							subredditId: m,
							options: t
						}),
						b = u.body;
					u.ok && b && b.data || s(I({
						error: u.error,
						utcTimeStamp: c
					}));
					const f = b.data.liveVideoFeed.posts.edges.map(e => (async (e, t) => {
							const s = await Object(a.e)(e, t),
								o = Date.now(),
								n = s.body;
							return n && n.data ? n.data : void w({
								streamId: t,
								error: s.error,
								utcTimeStamp: o
							})
						})(r(), e.node.id)),
						C = (await Promise.all(f)).filter(e => void 0 !== typeof e);
					s(x({
						listingName: e,
						models: C,
						utcTimeStamp: c
					}))
				}, w = e => async t => {
					t(f(e))
				}, I = e => async t => {
					t(C(e))
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
			const n = Object(o.a)(() => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				r = Object(o.a)(() => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(o.a)(() => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
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
			var o = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/selectors/chatPost.ts"),
				p = s("./src/reddit/components/CommentsChat/LiveIcon/index.m.less"),
				m = s.n(p);
			const u = .1,
				b = Object(c.c)({
					isChatPost: d.d
				}),
				h = Object(a.b)(b);
			class x extends i.a.Component {
				constructor(e) {
					super(e), this.onVisibilityChange = e => {
						e.isIntersecting && e.intersectionRatio >= u ? this.state.visible || this.setState({
							visible: !0
						}) : this.state.visible && this.setState({
							visible: !1
						})
					}, this.state = {
						visible: !1
					}
				}
				render() {
					const {
						visible: e
					} = this.state, {
						isChatPost: t
					} = this.props, s = t && e;
					return t ? i.a.createElement(o.a, {
						rootMargin: "20px 0px 20px 0px",
						threshold: u,
						onChange: this.onVisibilityChange
					}, i.a.createElement("div", {
						className: Object(l.a)(m.a.Icon, this.props.className)
					}, i.a.createElement("span", {
						className: Object(l.a)(m.a.Animate, m.a.top, {
							[m.a.play]: s
						})
					}, i.a.createElement("span", {
						className: m.a.bigCircle
					}), i.a.createElement("span", {
						className: m.a.midCircle
					}), i.a.createElement("span", {
						className: m.a.smallCircle
					})), i.a.createElement("p", {
						className: m.a.IconText
					}, n.fbt._("Live Discussion", null, {
						hk: "2akFwx"
					})), i.a.createElement("span", {
						className: Object(l.a)(m.a.Animate, m.a.bottom, {
							[m.a.play]: s
						})
					}, i.a.createElement("span", {
						className: m.a.bigCircle
					}), i.a.createElement("span", {
						className: m.a.midCircle
					}), i.a.createElement("span", {
						className: m.a.smallCircle
					})))) : null
				}
			}
			t.a = h(x)
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/components/CountAnimation/index.tsx"),
				b = s("./src/reddit/constants/componentTestIds.ts"),
				h = s("./src/reddit/constants/postLayout.ts"),
				x = s("./src/reddit/helpers/path/index.ts"),
				f = s("./src/reddit/hooks/useClickSourceData.ts"),
				C = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				O = s("./src/reddit/selectors/chatPost.ts"),
				v = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				g = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				_ = s("./src/reddit/selectors/experiments/postSeo.ts"),
				j = s("./src/reddit/selectors/posts.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/components/CommentsLink/index.m.less"),
				w = s.n(E);
			const I = () => 0,
				y = Object(i.b)(() => Object(c.c)({
					isChatPost: O.d,
					isPostSEOEligible: _.e,
					postPermalink: j.F,
					shouldOpenPostInNewTab: k.jb,
					isBlockingInterstitialEnabled: v.b
				})),
				P = e => {
					let t, {
						hasModPostPerms: s,
						isCountAnimShadowTestEnabled: a,
						isChatPost: c,
						isCommentCountAnimation: d,
						modModeEnabled: b,
						numComments: x,
						postId: f,
						shouldShowIcon: O,
						shouldShowText: v,
						text: _,
						type: j
					} = e;
					t = _ || (j === h.g.Compact || c || b && s ? Object(p.b)(x) : o.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [o.fbt._plural(x, "number", Object(p.b)(x))], {
						hk: "1QeOde"
					}));
					const k = Object(i.d)(),
						E = Object(n.useCallback)(e => {
							const {
								commentCountChange: t
							} = e.subscribe.data;
							0 !== t && k(Object(m.H)({
								postId: f,
								delta: t
							}))
						}, [k, f]),
						y = Object(n.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "COMMENT_COUNT_UPDATE",
									postID: f
								}
							}
						}),
						P = d && x < g.a;
					return r.a.createElement(n.Fragment, null, O && r.a.createElement(C.a, {
						className: w.a.commentIcon,
						role: "presentation"
					}), v && r.a.createElement("span", {
						className: w.a.text
					}, (P || a) && r.a.createElement(u.b, {
						countToUpperBound: x,
						incrementDelta: I,
						initialDelay: I,
						initialDisplayCount: x,
						postId: f,
						shouldDisjointAnimation: !0,
						subsequentRecurringDelay: I,
						featureName: u.a.Comment,
						queryKey: "postCommentCount",
						queryVariables: y.current,
						onDataCB: E,
						isLoadTestOnly: !!a && !P
					}), !P && t), v && (!b || !s) && P && r.a.createElement("span", {
						className: Object(l.a)(w.a.text, w.a.commentsText)
					}, o.fbt._({
						"*": "comments",
						_1: " comment"
					}, [o.fbt._plural(x)], {
						hk: "119Rxn"
					})))
				};
			t.a = y(e => {
				const {
					className: t,
					hasModPostPerms: s,
					forceOpenInNewTab: o,
					isChatPost: n,
					isCommentPermalink: c,
					isCommentsPage: p,
					isOverlay: u,
					isPostSEOEligible: h,
					modModeEnabled: C,
					numComments: O,
					onClick: v,
					postPermalink: g,
					shouldOpenPostInNewTab: _,
					shouldShowIcon: j = !0,
					shouldShowText: k = !0,
					text: E,
					type: I,
					postId: y,
					isCommentCountAnimation: T,
					isCountAnimShadowTestEnabled: S,
					isBlockingInterstitialEnabled: N
				} = e, M = Object(i.d)(), F = p && !c && !h, R = c && !u, A = Object(f.a)(), L = r.a.createElement(P, {
					hasModPostPerms: s,
					isCountAnimShadowTestEnabled: !!S,
					isChatPost: n,
					isCommentCountAnimation: !!T,
					modModeEnabled: C,
					numComments: O,
					postId: y,
					shouldShowIcon: j,
					shouldShowText: k,
					text: E,
					type: I
				});
				return F ? r.a.createElement("div", {
					className: Object(l.a)(w.a.commentsLink, w.a.defaultCursorWrapper, t),
					onClick: v
				}, L) : r.a.createElement(a.a, {
					rel: "nofollow",
					"data-click-id": "comments",
					"data-test-id": b.a,
					className: Object(l.a)(w.a.commentsLink, w.a.link, t),
					target: o || _ ? "_blank" : void 0,
					to: R ? Object(x.b)(g) : Object(d.a)(g, !0, A),
					onClick: e => {
						N && (e.preventDefault(), M(Object(m.Z)(Object(x.b)(g), y))), v && v()
					}
				}, L)
			})
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, s) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/higherOrderComponents/asModal/index.tsx"),
				a = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/controls/TextButton/index.tsx"),
				l = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				d = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				p = s.n(d);
			const m = e => e.preventDefault();
			t.a = Object(i.a)(e => r.a.createElement(a.e, null, r.a.createElement(a.i, null, r.a.createElement(l.a, null, r.a.createElement(a.q, null, e.headerText || o.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(a.b, null)))), r.a.createElement(a.l, null, r.a.createElement(a.p, {
				className: p.a.ModalText
			}, e.modalText)), r.a.createElement(a.g, null, !e.hideCancelButton && r.a.createElement(a.a, {
				className: p.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || o.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(a.u, {
				className: p.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
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
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/fastdom/index.ts"),
				p = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
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
				O = Object(l.a)(e => {
					const {
						children: t,
						className: s,
						style: o,
						caretPosition: n,
						caretColor: i,
						onClick: a,
						hideCaret: l
					} = e;
					return r.a.createElement("div", {
						onClick: a,
						className: Object(c.a)(s, h.a.StyledTooltipContainer, {
							[h.a.caretOnTop]: "top" === n,
							[h.a.caretOnLeft]: "left" === n,
							[h.a.caretOnRight]: "right" === n,
							[h.a.caretOnBottom]: "bottom" === n,
							[h.a.hideCaret]: l
						}),
						style: {
							...o,
							"--contentTooltip-caretColor": i && i[n] ? i[n] : Object(m.a)(e).body
						}
					}, t)
				}),
				v = Object(a.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(u.b)(s)(e)
					}
				}),
				g = Object(p.a)(O, [o.a.Click, o.a.Keydown]),
				_ = Object(i.b)(v);
			class j extends r.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = f
						} = this.props;
						d.a.read(() => {
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
						tooltipPosition: s,
						caretPosition: o
					} = this.getPositions(e);
					return r.a.createElement(g, x({}, this.props, {
						caretPosition: o,
						targetPosition: t,
						tooltipPosition: s
					}))
				}
			}
			t.a = _(j)
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
				l = s("./src/reddit/components/CreatorStats/helpers.ts"),
				d = s("./src/reddit/components/CreatorStats/Icon.m.less"),
				p = s.n(d);
			t.a = e => {
				let {
					postCreated: t,
					subredditId: s
				} = e;
				const d = Object(i.e)(e => s ? Object(c.S)(e, {
						subredditId: s
					}) : void 0),
					[m, u] = Object(n.useState)(!0);
				return Object(n.useEffect)(() => {
					let e = !0;
					if (void 0 !== t) {
						const s = Object(l.e)(t);
						e = e && !s
					}
					if (void 0 !== d) {
						const t = d.isQuarantined;
						e = e && !t
					}
					u(e)
				}, [t, d]), r.a.createElement(a.a, {
					name: o.a.statistics,
					className: m ? p.a.icon : void 0
				})
			}
		},
		"./src/reddit/components/Flatlist/ResponsiveRow.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				a = s("./src/reddit/controls/Dropdown/Row.tsx"),
				c = s("./src/reddit/components/Flatlist/index.m.less"),
				l = s.n(c);

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
					flatlistItem: t,
					isLoggedIn: s,
					isUserOp: o,
					noBreakpoints: c,
					...p
				} = e;
				return n.a.createElement("div", {
					"data-ignore-click": !!p.searchIgnoreClick,
					className: l.a.rowContainer
				}, n.a.createElement(a.a, d({}, p, {
					className: c ? l.a.responsiveRow : Object(r.a)(l.a.responsiveRow, Object(i.b)({
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
					e.EditPost = "EDITPOST", e.EditFlair = "EDITFLAIR", e.Save = "SAVE", e.Gild = "GILD", e.Hide = "HIDE", e.PostOverflowMenu = "POST_OVERFLOW_MENU", e.Report = "REPORT", e.Share = "SHARE", e.ShowFewerLikeThis = "SHOW_FEWER_LIKE_THIS", e.ShowMoreLikeThis = "SHOW_MORE_LIKE_THIS", e.Insights = "INSIGHTS"
				}(o || (o = {}))
		},
		"./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return p
			}));
			var o, n, r, i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Flatlist/breakpoints.m.less"),
				c = s.n(a),
				l = s("./src/reddit/components/Flatlist/constants.ts");
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(o || (o = {})),
			function(e) {
				e.First = "FirstGroup", e.Editing = "EditingGroup", e.Second = "SecondGroup", e.Awarding = "AwardingGroup"
			}(n || (n = {})),
			function(e) {
				e.LoggedIn = "LoggedInVariant", e.LoggedOut = "LoggedOutVariant", e.Op = "OpVariant"
			}(r || (r = {}));
			const d = {
					[l.a.EditFlair]: n.Editing,
					[l.a.EditPost]: n.Editing,
					[l.a.Gild]: n.Awarding,
					[l.a.Hide]: n.First,
					[l.a.PostOverflowMenu]: n.First,
					[l.a.Report]: n.First,
					[l.a.Save]: n.First,
					[l.a.Share]: n.Second,
					[l.a.ShowFewerLikeThis]: n.First,
					[l.a.ShowMoreLikeThis]: n.First,
					[l.a.Insights]: n.First
				},
				p = e => {
					return (e => {
						const t = c.a[e.type],
							s = c.a[e.group],
							o = c.a[e.groupVariant];
						return Object(i.a)(t, s, o)
					})({
						type: e.breakpointType || o.HideIfVWSmaller,
						group: d[e.flatlistItem],
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
				large: "_26YkhAfncIjLM3iT6Gbcvt",
				overflowMenuContainer: "_3MmwvEEt6fv5kQPFCVJizH",
				awardIcon: "_3yNNYT3e1avhAAWVHd0-92",
				saveIcon: "_1Xe01txJfRB9udUU85DNeR"
			}
		},
		"./src/reddit/components/Flatlist/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return ve
			})), s.d(t, "a", (function() {
				return ge
			})), s.d(t, "d", (function() {
				return we
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/lessComponent.tsx"),
				m = s("./src/lib/ads/index.ts"),
				u = s("./src/lib/timezone/index.ts"),
				b = s("./src/reddit/actions/gold/modals.ts"),
				h = s("./src/reddit/actions/modal.ts"),
				x = s("./src/reddit/actions/post.ts"),
				f = s("./src/reddit/actions/postCreation/editing.ts"),
				C = s("./src/reddit/actions/postFlair.ts"),
				O = s("./src/reddit/actions/reportFlow/index.ts"),
				v = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				g = s("./src/reddit/components/CommentsLink/index.tsx"),
				_ = s("./src/reddit/components/CreatorStats/Icon.tsx"),
				j = s("./src/reddit/hooks/useTracking.ts"),
				k = s("./src/reddit/helpers/trackers/freeAwardOffer.ts"),
				E = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				w = s("./src/reddit/components/ContentTooltip/index.tsx"),
				I = s("./src/reddit/components/GiveAwardTooltip/index.m.less"),
				y = s.n(I);
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var T = e => {
					const {
						tooltipId: t
					} = e, s = Object(i.e)(E.b), o = Object(j.a)();
					return Object(n.useEffect)(() => {
						s && o(Object(k.c)())
					}, [s, o]), s ? r.a.createElement(w.a, {
						className: y.a.freeAwardTooltip,
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
						className: y.a.freeAwardContainer
					}, P._("Tap to give your {award name} Award", [P._param("award name", s.name)], {
						hk: "2EMqbP"
					}))) : null
				},
				S = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				N = s("./src/reddit/components/ModModeReports/helpers.ts"),
				M = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				F = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				R = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				A = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				L = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				B = s("./src/reddit/components/ShareMenu/index.tsx"),
				D = s("./src/reddit/components/TrackingHelper/index.tsx"),
				W = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				V = s("./src/reddit/constants/postLayout.ts"),
				G = s("./src/reddit/contexts/PageLayer/index.tsx"),
				U = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				H = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				K = s("./src/reddit/selectors/user.ts"),
				q = s("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				J = s("./src/reddit/helpers/correlationIdTracker.ts"),
				z = s("./src/reddit/helpers/trackers/modTools.ts"),
				Q = s("./src/reddit/helpers/trackers/post.ts"),
				X = s("./src/reddit/icons/fonts/index.tsx"),
				Y = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				Z = s("./src/reddit/icons/fonts/Share/index.tsx"),
				$ = s("./src/reddit/models/Media/index.ts"),
				ee = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				te = s("./src/reddit/models/PostCreationForm/index.ts"),
				se = s("./src/reddit/models/User/index.ts"),
				oe = s("./src/reddit/components/Flatlist/constants.ts"),
				ne = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				re = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				ie = s("./src/reddit/actions/postCollection/index.ts"),
				ae = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx"),
				ce = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx"),
				le = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				de = s("./src/reddit/selectors/activeModalId.ts"),
				pe = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				me = s("./src/reddit/selectors/posts.ts"),
				ue = s("./src/reddit/components/Flatlist/index.m.less"),
				be = s.n(ue);

			function he() {
				return (he = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			let xe, fe;
			const Ce = p.a.button("ShareButton", be.a),
				Oe = p.a.wrapped(B.a, "ShareMenu", be.a),
				ve = Object(d.a)(e => {
					let {
						className: t,
						...s
					} = e;
					return r.a.createElement(Y.a, he({}, s, {
						className: Object(c.a)(be.a.modActionsIcon, t),
						style: {
							color: Object(H.a)(Object(U.a)(s), ee.a.actionIcon, ee.b.actionIcon)
						}
					}))
				}),
				ge = e => r.a.createElement("div", he({}, e, {
					className: Object(c.a)(be.a.flatlistSeparator, e.className)
				})),
				_e = Object(G.u)({
					currentProfileName: G.i,
					isCommentPermalink: G.w,
					isCommentsPage: G.x,
					isProfilePostListing: G.L,
					pageLayer: e => e
				}),
				je = Object(a.c)({
					activeModalId: de.a,
					claimedFreeAward: E.b,
					layout: G.R,
					userIsOp: K.Db,
					subreddit: G.r,
					isBlockedUserBannerEnabled: (e, t) => {
						let {
							post: s
						} = t;
						return !!Object(me.w)(e, {
							postId: s.postId
						}) && Object(pe.a)(e)
					},
					isTrueblockPCBlockeeEnabled: pe.c
				}),
				ke = Object(i.b)(je, (e, t) => {
					let {
						post: o,
						isOverlay: n,
						isCommentsPage: r
					} = t;
					return {
						addPostToCollection: (t, s) => e(Object(ie.a)(t, s)),
						onToggleModal: t => e(Object(h.i)(t)),
						onToggleSave: () => e(Object(x.V)(o.postId)),
						onHide: t => e(Object(x.fb)(o.postId, !o.hidden, n, !0)),
						onReportClick: () => e(Object(O.c)(o.postId, n)),
						onEdit: () => {
							const t = !n && !r;
							e(Object(f.a)(o.postId, t))
						},
						onFlairPost: () => e(Object(h.i)(Object(F.b)(o.postId, n))),
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
							return e(Object(C.h)({
								post: o,
								selectedTemplateId: s,
								previewFlair: n
							}))
						},
						toggleEditStartTimeModal: async () => {
							xe && fe || ([xe, fe] = await Promise.all([s.e("schedulePickerModal").then(s.bind(null, "./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx")).then(e => e.default), Promise.resolve().then(s.bind(null, "./src/reddit/actions/eventPosts/index.ts")).then(e => e.editEventTimeRequested)])), e(Object(h.i)(Object(te.s)(o.postId, n, te.k.POST_OVERFLOW_MENU)))
						},
						addEventStartTime: t => {
							fe && e(fe(o.id, t))
						}
					}
				}),
				Ee = r.a.memo(e => {
					const {
						activeModalId: t,
						addEventStartTime: i,
						className: a,
						currentProfileName: d,
						currentUser: p,
						forceOpenInNewTab: b,
						hasModFlairPerms: h,
						hasModFullPerms: x,
						hasModPostPerms: f,
						isCommentPermalink: C,
						isCommentsPage: O,
						isCountAnimShadowTestEnabled: j,
						isLargePost: k,
						isOverlay: E,
						isProfilePostListing: w,
						isSticky: I,
						layout: y,
						modModeEnabled: P,
						onClickInsightsButton: B,
						onFlairChanged: D,
						onIgnoreReports: G,
						onOpenReportsDropdown: U,
						pageLayer: H,
						post: K,
						sendEvent: Y,
						showEditFlair: ee,
						showEditPost: ie,
						subreddit: le,
						toggleEditStartTimeModal: de,
						tooltipType: pe,
						userIsOp: me,
						searchIgnoreClick: ue,
						isCommentCountAnimation: he,
						hostPostData: fe,
						listingKey: ge,
						onGildClick: _e,
						onToggleModal: je,
						claimedFreeAward: ke,
						onToggleSave: Ee,
						onHide: Ie,
						addPostToCollection: ye,
						onReportClick: Pe,
						isBlockedUserBannerEnabled: Te,
						shouldHideItems: Se,
						shouldShowInsightsButton: Ne,
						isTrueblockPCBlockeeEnabled: Me
					} = e, Fe = Object(n.useCallback)(async () => {
						const e = Object(J.e)(J.a.GildingFlow, !0);
						_e(e, null == ke ? void 0 : ke.id);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						Y(t(K.id))
					}, [_e, K, Y, ke]), Re = Object(n.useCallback)(() => {
						t && je(t)
					}, [t, je]), Ae = Object(n.useCallback)(() => {
						const e = Object(te.t)(K.id, E);
						je(e)
					}, [je, E, K]), Le = Object(n.useCallback)(e => {
						ye(e.id, K.id).then(() => Re())
					}, [ye, Re, K]), Be = Object(n.useCallback)((e, t) => {
						Y(Object(Q.h)(K.id, e, E ? "post_detail" : "post", ge, fe, void 0, null == t ? void 0 : t.referralId))
					}, [fe, E, Y, ge, K]), De = Object(n.useCallback)(() => {
						Ee(), Be(K.saved ? "unsave" : "save")
					}, [Ee, K, Be]), We = Object(n.useCallback)(() => {
						Ie(!!K.hidden), Be(K.hidden ? "unhide" : "hide")
					}, [Ie, K, Be]), Ve = Object(n.useCallback)(() => {
						Pe(), Be("report")
					}, [Pe, Be]), Ge = Object(n.useMemo)(() => r.a.createElement(Ce, {
						"data-click-id": "share"
					}, r.a.createElement(Z.a, {
						className: be.a.shareIcon
					}), r.a.createElement("span", {
						className: be.a.shareText
					}, o.fbt._("share", null, {
						hk: "1eAfZg"
					}))), []), Ue = !!p && Object(se.e)(p) === K.author, He = Object(re.a)("View--Reports", K.id, pe), Ke = Object(re.a)(l.pc, K.id, pe), qe = Object(N.c)(K), Je = we("-mod-actions-menu", K.id, E, I), ze = Object(N.a)(K), Qe = K.postId, Xe = y === V.g.Large, Ye = !O && Xe || f && P || Se, Ze = !(E || O || C), $e = !(K.authorIsBlocked && Me) && p && K.isGildable && !(K.authorIsBlocked && Te) && !(K.unrepliableReason && Me), et = K.media && K.media.type === $.o.LIVEVIDEO, tt = !!K.recommendationContext, st = K.isSponsored || Object(m.u)(H);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(c.a)(be.a.flatlistContainer, a)
					}, r.a.createElement(g.a, {
						className: Object(c.a)(be.a.rowContainer, be.a.commentsLink),
						forceOpenInNewTab: b,
						hasModPostPerms: f,
						isCommentsPage: O,
						isCommentPermalink: C,
						isOverlay: E,
						postId: K.id,
						modModeEnabled: P,
						numComments: K.numComments,
						isCommentCountAnimation: he,
						isCountAnimShadowTestEnabled: j
					}), $e && r.a.createElement(r.a.Fragment, null, r.a.createElement(q.a, {
						displayText: o.fbt._("Award", null, {
							hk: "2fZCpE"
						}),
						textClassName: be.a.responsiveRowText,
						flatlistItem: oe.a.Gild,
						isLoggedIn: !!p,
						isUserOp: me,
						onClick: Fe,
						searchIgnoreClick: ue,
						skipRoleAttr: !0
					}, r.a.createElement(X.a, {
						name: "award",
						className: be.a.awardIcon,
						id: Ke
					})), r.a.createElement(T, {
						postOrComment: K,
						tooltipId: Ke
					})), r.a.createElement(Oe, {
						className: Object(c.a)(be.a.rowContainer, Object(ne.b)({
							flatlistItem: oe.a.Share,
							isLoggedIn: !!p,
							isUserOp: me
						})),
						dropdownId: we("-share-menu", K.id, E, I),
						permalink: K.permalink,
						post: K,
						sendEventWithName: Be,
						subredditType: null == le ? void 0 : le.type
					}, Ge), ie && !Ye && r.a.createElement(q.a, {
						displayText: o.fbt._("Edit post", null, {
							hk: "Jq2Cr"
						}),
						textClassName: be.a.responsiveRowText,
						flatlistItem: oe.a.EditPost,
						isLoggedIn: !!p,
						isUserOp: me,
						onClick: e.onEdit,
						skipRoleAttr: !0
					}, r.a.createElement(X.a, {
						name: "edit"
					})), (!f || !P) && r.a.createElement(q.a, {
						displayText: K.saved ? o.fbt._("unsave", null, {
							hk: "4Dn4IT"
						}) : o.fbt._("save", null, {
							hk: "3NOMst"
						}),
						textClassName: be.a.responsiveRowText,
						flatlistItem: oe.a.Save,
						isLoggedIn: !!p,
						isUserOp: me,
						onClick: De,
						searchIgnoreClick: ue,
						skipRoleAttr: !0
					}, r.a.createElement(X.a, {
						name: K.saved ? "saved" : "save",
						className: be.a.saveIcon
					})), !st && !Ye && r.a.createElement(q.a, {
						displayText: K.hidden ? o.fbt._("unhide", null, {
							hk: "151XLs"
						}) : o.fbt._("hide", null, {
							hk: "4AnA6R"
						}),
						textClassName: be.a.responsiveRowText,
						flatlistItem: oe.a.Hide,
						isLoggedIn: !!p,
						isUserOp: me,
						onClick: We,
						searchIgnoreClick: ue,
						skipRoleAttr: !0
					}, r.a.createElement(X.a, {
						name: "hide",
						isFilled: K.hidden
					})), !Ue && !st && !Ye && r.a.createElement(q.a, {
						displayText: o.fbt._("report", null, {
							hk: "1phfns"
						}),
						textClassName: be.a.responsiveRowText,
						flatlistItem: oe.a.Report,
						isLoggedIn: !!p,
						isUserOp: me,
						onClick: Ve,
						searchIgnoreClick: ue,
						skipRoleAttr: !0
					}, r.a.createElement(X.a, {
						name: "report"
					})), r.a.createElement(M.a, {
						isOverlay: E,
						layout: y,
						modModeEnabled: P,
						post: K,
						sendEvent: Y
					}), f && r.a.createElement(S.a, {
						dropdownId: Je,
						onClick: () => Y(Object(Q.h)(K.id, "post_mod_action_menu"))
					}, r.a.createElement(ve, null), r.a.createElement(R.a, {
						canEditFlair: h && !!ee,
						hasModFullPerms: x,
						hasModPostPerms: f,
						isOverlay: !!E,
						isPostAuthor: Ue,
						modModeEnabled: P,
						post: K,
						tooltipId: Je
					})), f && qe && !P && r.a.createElement(L.c, {
						text: `${ze}`,
						onClick: () => {
							U(He), Y(Object(Q.h)(K.id, "post_report_menu"))
						},
						id: He
					}, r.a.createElement(W.a, {
						model: K,
						onIgnoreReports: () => {
							G(), Y(Object(z.k)(K.ignoreReports ? "restore_reports" : "ignore_reports", K.id))
						},
						tooltipId: He
					}), r.a.createElement(X.a, {
						className: be.a.icon,
						name: K.ignoreReports ? "ignore_reports" : "report"
					})), Ne && r.a.createElement(q.a, {
						displayText: o.fbt._("Insights", null, {
							hk: "2IyDq5"
						}),
						textClassName: Object(c.a)(be.a.responsiveRowText, be.a.insightsButtonText),
						flatlistItem: oe.a.Insights,
						isLoggedIn: !!p,
						isUserOp: me,
						onClick: B,
						skipRoleAttr: !0
					}, r.a.createElement(_.a, {
						postCreated: K.created,
						subredditId: K.belongsTo.id
					})), !st && r.a.createElement("div", {
						className: be.a.overflowMenuContainer
					}, r.a.createElement(A.a, {
						currentProfileName: d,
						dropdownId: we("-overflow-menu", K.id, E, I),
						ignoreOverflowMenuBreakpoints: Se,
						isCommentsPage: O,
						isFixed: I,
						isOverlay: !!E,
						isProfilePostListing: w,
						isRecommendationPost: tt,
						layout: y,
						modModeWithPost: P && f,
						onClickInsightsButton: B,
						pageLayer: H,
						permalink: K.permalink,
						postId: Qe,
						sendEvent: Y,
						shouldShowInsightsButton: Ne,
						showEditPost: !!ie,
						showEditFlair: !!ee,
						useFlatlistBreakpoints: e.useFlatlistBreakpoints,
						toggleAddEventStartTimeModal: de,
						toggleEditStartTimeModal: de
					})), t === Object(te.t)(K.id, E) && r.a.createElement(ae.a, {
						subredditId: K.belongsTo.id,
						onClose: Re,
						postId: K.id,
						onSelectCollection: Le,
						titleText: o.fbt._("Add post to a collection", null, {
							hk: "38vSyF"
						}),
						onItemHoverActionText: o.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						isOverlay: E
					}), t === Object(te.s)(K.id, E, te.k.POST_OVERFLOW_MENU) && xe && r.a.createElement(xe, {
						onChange: i,
						onClose: de,
						schedule: Object(u.c)(K),
						shouldShowDeleteButton: !1
					}), t === Object(te.u)(K.id, E) && r.a.createElement(ce.a, {
						onCancel: Ae,
						onCollectionCreated: Le,
						subredditId: K.belongsTo.id
					}), t === Object(F.b)(K.id, E) && r.a.createElement(F.a, {
						flairs: K.flair,
						subredditId: K.belongsTo.id,
						modalId: Object(F.b)(K.id, E),
						onFlairChanged: D
					}), r.a.createElement("div", {
						className: be.a.flexSpacer
					})), Ze && !et && r.a.createElement(v.a, {
						className: Object(c.a)(be.a.liveDiscussionWrapper, {
							[be.a.large]: k
						}),
						isMod: f,
						postId: K.postId
					}))
				});
			Ee.displayName = "Flatlist";
			const we = (e, t, s, o) => {
					let n = t;
					return s && (n += "-overlay"), o && (n += "-sticky"), n += e
				},
				Ie = _e(ke(Object(D.c)(Ee)));
			t.c = r.a.memo((function(e) {
				const t = Object(le.a)();
				return r.a.createElement(Ie, he({}, e, {
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
				l = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				d = s("./src/reddit/selectors/tooltip.ts"),
				p = s("./src/reddit/components/ModActionsMenu/index.m.less"),
				m = s.n(p);
			const u = Object(i.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(d.b)(s)(e)
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
				className: m.a.ModActionsMenu,
				id: e.dropdownId,
				onClick: e.dropdownIsOpen ? h : e.onClick
			}, e.inCommentFlatlist ? n.a.createElement(c.a, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children) : n.a.createElement(l.c, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children)))
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
				l = s("./src/reddit/components/ModToolsFlatlist/breakpoints.m.less"),
				d = s.n(l),
				p = s("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				m = s.n(p);
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
						o = d.a[e.breakpointType],
						n = d.a[t],
						a = s ? d.a[s] : d.a[r.Default];
					return Object(i.a)(o, n, a)
				},
				x = e => {
					const t = e && b[e],
						s = t ? d.a[t] : d.a[r.Default];
					return Object(i.a)(s, m.a.ButtonTextWrapper, d.a.ButtonTextWrapper)
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
				l = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				b = s("./src/reddit/components/ModModeReports/helpers.ts"),
				h = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				x = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				f = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				C = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				v = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				g = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				_ = s("./src/reddit/selectors/activeModalId.ts"),
				j = s("./src/reddit/selectors/moderatorPermissions.ts"),
				k = s("./src/reddit/selectors/postFlair.ts"),
				E = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				w = s("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				I = s("./src/lib/constants/index.ts"),
				y = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				P = s("./src/reddit/components/ModalStyledComponents/MessageBox.tsx"),
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
					const [l, u] = r.a.useState(!1), [b, h] = r.a.useState(!1), f = Object(T.a)(), O = Object(i.d)(), {
						isPrediction: v,
						resolvedOptionId: g,
						totalVoteCount: _
					} = c.pollData || {}, j = () => {
						u(!1), O(Object(d.U)(c.id, !1)), c.isRemoved && c.bannedBy === I.l ? f(Object(C.h)(c.id, "confirm_remove")) : f(Object(C.h)(c.id, "remove"))
					}, k = ((e, t) => e ? t === I.l ? o.fbt._("Confirm removal", null, {
						hk: "1t5tKM"
					}) : o.fbt._("removed", null, {
						hk: "35ZTch"
					}) : o.fbt._("remove", null, {
						hk: "3LWMcS"
					}))(c.isRemoved, c.bannedBy), E = R("Remove", c.id, n), w = () => a && O(Object(p.h)({
						tooltipId: E
					})), N = r.a.useMemo(() => _ ? 1 === _ ? o.fbt._("Removing this post will cancel the 1 prediction that has already been made.", null, {
						hk: "hVYeT"
					}) : o.fbt._("Removing this post will cancel the {votedUsersCount} predictions that have already been made.", [o.fbt._param("votedUsersCount", _.toString())], {
						hk: "47oACN"
					}) : o.fbt._("Removing this post will cancel any predictions that have already been made.", null, {
						hk: "26cLeP"
					}), [_]);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(x.d, {
						className: t,
						textClassName: s,
						id: E,
						text: a ? void 0 : k,
						disabled: c.isRemoved && c.bannedBy !== I.l,
						onMouseEnter: w,
						onMouseLeave: w,
						onClick: () => {
							v ? g ? h(!0) : u(!0) : j()
						}
					}, r.a.createElement(S.a, {
						desc: a ? k : void 0
					}), a && r.a.createElement(m.c, {
						className: M.a.tooltip,
						tooltipId: E,
						text: k
					})), b && r.a.createElement(P.a, {
						title: o.fbt._("This post can't be removed", null, {
							hk: "2GbryD"
						}),
						body: o.fbt._("Sorry about that. Once a prediction has been resolved, you can't remove the post.", null, {
							hk: "3wgNhQ"
						}),
						onClose: () => h(!b)
					}), l && r.a.createElement(y.a, {
						withOverlay: !0,
						modalText: N,
						actionText: o.fbt._("Remove", null, {
							hk: "2DXJl4"
						}),
						headerText: o.fbt._("Are you sure?", null, {
							hk: "3CJLRE"
						}),
						onConfirm: j,
						onOverlayClick: () => u(!l),
						toggleModal: () => u(!l)
					}))
				},
				R = function(e, t) {
					let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return `ModToolsFlatlist-${e}${t}${s?"inOverlay":""}`
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
							post: s
						} = t;
						return Object(k.a)(e, {
							postId: s.id
						})
					},
					moderatorPermissions: (e, t) => Object(j.m)(e, {
						postId: t.post.id
					})
				}), (e, t) => {
					let {
						post: s
					} = t;
					return {
						onApprovePost: () => e(Object(d.s)(s.id)),
						onOpenPostModModeDropdown: t => e(Object(p.h)({
							tooltipId: t
						})),
						onSpamPost: () => e(Object(d.U)(s.id, !0)),
						onFlairPost: t => () => e(Object(l.i)(t))
					}
				});
			t.a = L(e => {
				const {
					canEditFlair: t,
					className: s,
					isOverlay: a,
					layout: l,
					moderatorPermissions: d,
					modModeEnabled: _,
					onApprovePost: j,
					onFlairPost: k,
					onSpamPost: I,
					post: y,
					sendEvent: P,
					showIconsOnly: T
				} = e, S = Object(i.d)(), N = Object(f.a)(d), L = Object(b.b)(y), B = !(!y.approvedBy || !L), D = Object(h.b)(y.id, a), W = N && _ && !y.isSponsored, V = t && _, G = ((e, t) => e ? o.fbt._("reapprove", null, {
					hk: "OJvB1"
				}) : t ? o.fbt._("approved", null, {
					hk: "2bWAFI"
				}) : o.fbt._("approve", null, {
					hk: "2DIHcM"
				}))(B, y.approvedBy), U = (e => e ? o.fbt._("spammed", null, {
					hk: "3GPrkZ"
				}) : o.fbt._("spam", null, {
					hk: "3ebJLg"
				}))(y.isSpam), H = R("Approve", y.id, a), K = R("Spam", y.id, a), q = () => T && S(Object(p.h)({
					tooltipId: H
				})), J = () => T && S(Object(p.h)({
					tooltipId: K
				})), z = a ? void 0 : l;
				return r.a.createElement("div", {
					className: Object(c.a)(M.a.container, s)
				}, W && r.a.createElement(n.Fragment, null, r.a.createElement(x.b, {
					className: A(E.a.Approve, z),
					key: "approveButton",
					text: T ? void 0 : G,
					textClassName: Object(w.c)(z),
					disabled: !!y.approvedBy && !L,
					id: H,
					onMouseEnter: q,
					onMouseLeave: q,
					onClick: () => {
						j(), P(Object(C.h)(y.id, "approve"))
					}
				}, r.a.createElement(O.a, {
					desc: T ? G : void 0
				}), T && r.a.createElement(m.c, {
					className: M.a.tooltip,
					tooltipId: H,
					text: G
				})), r.a.createElement(F, {
					className: A(E.a.Remove, z),
					textClassName: Object(w.c)(z),
					isOverlay: a,
					iconOnly: T,
					post: y
				}), r.a.createElement(x.d, {
					className: A(E.a.Spam, z),
					key: "removeSpamButton",
					text: T ? void 0 : U,
					textClassName: Object(w.c)(z),
					disabled: y.isSpam,
					id: K,
					onMouseEnter: J,
					onMouseLeave: J,
					onClick: () => {
						I(), P(Object(C.h)(y.id, "spam"))
					}
				}, r.a.createElement(v.a, {
					desc: T ? U : void 0
				}), T && r.a.createElement(m.c, {
					className: M.a.tooltip,
					tooltipId: K,
					text: U
				}))), V && r.a.createElement(x.c, {
					className: A(E.a.Flair, z),
					key: "tagButton",
					onClick: () => {
						k(D)(), P(Object(C.h)(y.id, "post_flair_picker"))
					}
				}, r.a.createElement(g.a, null)), r.a.createElement(u.f, null))
			})
		},
		"./src/reddit/components/ModalStyledComponents/MessageBox.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/higherOrderComponents/asModal/index.tsx"),
				a = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/controls/TextButton/index.tsx"),
				l = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const p = Object(i.a)(e => {
					let {
						title: t,
						body: s,
						actionText: n = o.fbt._("OK", null, {
							hk: "1eo6HO"
						}),
						onClose: i
					} = e;
					return r.a.createElement(a.e, null, r.a.createElement(a.i, null, r.a.createElement(l.a, null, r.a.createElement(a.q, null, t), r.a.createElement(c.a, {
						onClick: i
					}, r.a.createElement(a.b, null)))), r.a.createElement(a.l, null, r.a.createElement(a.p, null, s)), r.a.createElement(a.g, null, r.a.createElement(a.u, {
						"data-redditstyle": !0,
						onClick: i
					}, n)))
				}),
				m = e => r.a.createElement(p, d({
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
				return g
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/Row.tsx"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/selectors/tooltip.ts"),
				x = s("./src/reddit/components/OverflowMenu/index.m.less"),
				f = s.n(x);
			const C = l.a.wrapped(m.a, "_Dropdown", f.a),
				O = Object(p.a)(C),
				v = l.a.button("MenuButton", f.a),
				g = l.a.wrapped(u.b, "DropdownRow", f.a),
				_ = Object(a.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(h.b)(s)(e)
					}
				}),
				j = Object(i.b)(_, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(d.h)({
							tooltipId: s
						}))
					}
				}),
				k = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = j(e => r.a.createElement(v, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": o.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[f.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: k(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : r.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: f.a.MenuIcon
			}), r.a.createElement(O, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
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
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/lib/memoizeByReference/index.ts"),
				p = s("./src/reddit/actions/postCreation/general.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/keycodes.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/Input/index.tsx"),
				x = s("./src/reddit/icons/svgs/Close/index.tsx"),
				f = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				C = s("./src/reddit/icons/svgs/Search/index.tsx"),
				O = s("./src/reddit/layout/row/Inline/index.tsx"),
				v = s("./src/reddit/models/PostCreationForm/index.ts"),
				g = s("./src/reddit/selectors/postCollection.ts"),
				_ = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				j = s("./src/reddit/components/HumanDate/index.tsx"),
				k = s("./src/reddit/helpers/name/index.ts"),
				E = s("./src/reddit/models/Subreddit/index.ts"),
				w = s("./src/reddit/models/User/index.ts"),
				I = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),
				T = s.n(P),
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
					return s ? Object(I.S)(e, {
						subredditId: s
					}) : void 0
				},
				user: y.k
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
					} = this.props, n = t && Object(E.h)(t) && s ? Object(k.d)(Object(w.e)(s)) : t ? t.displayText : "", r = e.postIds.length;
					return i.a.createElement(M, {
						onClick: this.onClick,
						className: T.a.container
					}, i.a.createElement(F, {
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
					})), i.a.createElement(_.b, null), i.a.createElement(L, null, N._("created {time}", [N._param("time", i.a.createElement(j.d, {
						seconds: e.createdAtUTC
					}))], {
						hk: "2cUc5m"
					}))), o && i.a.createElement("div", {
						className: T.a.onHoverActionText
					}, i.a.createElement("span", null, o)))
				}
			}
			var W = Object(a.b)(B)(D),
				V = s("./src/reddit/helpers/trackers/postCollection.ts"),
				G = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less"),
				U = s.n(G);
			const H = `${o.a.assetPath}/img/snoo-drafts.png`,
				K = S.a.div("TopRow", U.a),
				q = S.a.div("TitleRow", U.a),
				J = S.a.div("DetailsContainer", U.a),
				z = S.a.wrapped(O.a, "ButtonRow", U.a),
				Q = S.a.div("CloseWrapper", U.a),
				X = S.a.wrapped(x.a, "Close", U.a),
				Y = S.a.div("Empty", U.a),
				Z = S.a.img("EmptyImage", U.a),
				$ = S.a.p("EmptyText", U.a),
				ee = S.a.div("FilterWrapper", U.a),
				te = S.a.wrapped(h.a, "FilterInput", U.a),
				se = S.a.wrapped(C.a, "SearchIcon", U.a),
				oe = S.a.wrapped(f.a, "PlusIcon", U.a),
				ne = S.a.wrapped(b.p, "CreateCollectionButton", U.a),
				re = Object(d.a)((e, t) => {
					const s = t.toLowerCase();
					return e.filter(e => e.title.toLowerCase().includes(s))
				}),
				ie = Object(c.c)({
					collections: g.v
				}),
				ae = Object(a.b)(ie, (e, t) => {
					let {
						postId: s,
						isOverlay: o
					} = t;
					return {
						onOpenCreateCollectionModal: () => {
							let t = v.b;
							s && (t = Object(v.u)(s, !!o)), e(Object(p.z)(t))
						}
					}
				});
			class ce extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						filterStr: ""
					}, this.close = () => {
						this.props.sendEvent(Object(V.c)()), this.props.onClose()
					}, this.handleEscapeKey = e => {
						e.keyCode === u.a.Escape && this.close()
					}, this.handleCreateCollectionClicked = () => {
						this.props.onOpenCreateCollectionModal(), this.props.sendEvent(Object(V.j)())
					}, this.handleCollectionSelected = e => {
						this.props.onSelectCollection(e), this.props.sendEvent(Object(V.q)())
					}, this.onFilterStringChange = e => {
						this.setState({
							filterStr: e.target.value
						})
					}, this.renderItem = e => i.a.createElement(W, {
						key: e.id,
						collection: e,
						onClick: () => this.handleCollectionSelected(e),
						onHoverActionText: this.props.onItemHoverActionText
					})
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey), this.props.sendEvent(Object(V.d)())
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
						className: U.a.wrapper,
						"data-redditstyle": !0
					}, i.a.createElement(K, null, i.a.createElement(q, {
						"data-redditstyle": !0
					}, t || n.fbt._("My collections", null, {
						hk: "3yKovS"
					}), i.a.createElement(Q, {
						onClick: this.close
					}, i.a.createElement(X, {
						"data-redditstyle": !0
					}))), i.a.createElement(ee, null, i.a.createElement(se, null), i.a.createElement(te, {
						placeholder: n.fbt._("Find a collection", null, {
							hk: "3DbFBU"
						}),
						value: this.state.filterStr,
						onChange: this.onFilterStringChange
					}))), i.a.createElement(J, null, s), i.a.createElement(z, null, i.a.createElement(ne, {
						onClick: this.handleCreateCollectionClicked
					}, i.a.createElement(oe, null), n.fbt._("Create a collection", null, {
						hk: "37xJVm"
					}))))
				}
			}
			const le = Object(l.a)(ae(Object(m.c)(ce)));
			t.a = le
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
				l = s("./src/lib/formatApiError/index.ts"),
				d = s("./src/reddit/actions/postCollection/index.ts"),
				p = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = s("./src/reddit/constants/postCreation.ts"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/controls/ErrorText/index.tsx"),
				h = s("./src/reddit/controls/Input/index.tsx"),
				x = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = s("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				C = s("./src/reddit/icons/svgs/Close/index.tsx"),
				O = s("./src/reddit/layout/row/Inline/index.tsx"),
				v = s("./src/reddit/selectors/postCollection.ts"),
				g = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less"),
				_ = s.n(g),
				j = s("./src/lib/lessComponent.tsx");
			const k = j.a.div("Container", _.a),
				E = j.a.div("Content", _.a),
				w = j.a.div("TitleRow", _.a),
				I = j.a.div("Details", _.a),
				y = j.a.wrapped(p.g, "Footer", _.a),
				P = j.a.wrapped(u.o, "CancelButton", _.a),
				T = j.a.div("CloseWrapper", _.a),
				S = j.a.wrapped(C.a, "CloseIcon", _.a),
				N = j.a.label("Label", _.a),
				M = j.a.wrapped(h.a, "TitleInput", _.a),
				F = j.a.wrapped(f.a, "AddCollectionIcon", _.a),
				R = j.a.wrapped(u.l, "PrimaryActionButton", _.a),
				A = j.a.wrapped(x.a, "LoadingIcon", _.a),
				L = j.a.wrapped(b.b, "ErrorText", _.a),
				B = Object(a.c)({
					collection: v.q,
					error: v.c,
					isPending: v.g
				}),
				D = Object(i.b)(B, (e, t) => ({
					onCreate: (t, s) => e(Object(d.b)(t, s)),
					onUpdate: s => e(Object(d.h)(t.collectionId, s))
				}));
			class W extends r.a.PureComponent {
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
					return r.a.createElement(k, null, r.a.createElement(T, {
						onClick: this.props.onCancel
					}, r.a.createElement(S, null)), r.a.createElement(E, null, n && r.a.createElement(r.a.Fragment, null, r.a.createElement(w, null, r.a.createElement(F, null), o.fbt._("Create a collection", null, {
						hk: "3ndxk5"
					})), r.a.createElement(I, null, o.fbt._("Group posts into one feed. Create a series of events or just a group of random things. Make something awesome!", null, {
						hk: "2eCAQw"
					}))), r.a.createElement(N, null, n ? o.fbt._("Give a title for your collection", null, {
						hk: "Uaqbe"
					}) : o.fbt._("Edit title", null, {
						hk: "1jzweg"
					}), r.a.createElement(M, {
						maxLength: m.e,
						onChange: this.onTitleChange,
						placeholder: o.fbt._("Enter title", null, {
							hk: "3B0iRI"
						}),
						value: this.state.collectionTitle
					}))), r.a.createElement(y, null, r.a.createElement(O.a, null, r.a.createElement(P, {
						onClick: this.props.onCancel
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(R, {
						onClick: this.onPrimaryButtonClick,
						disabled: s || !i
					}, s ? r.a.createElement(A, {
						sizePx: 10
					}) : a)), t && r.a.createElement(L, null, Object(l.a)(t))))
				}
			}
			t.a = Object(c.a)(D(W))
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
				return k
			}));
			var o, n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/higherOrderComponents/asModal/index.tsx"),
				p = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				u = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				b = s("./src/reddit/components/FlairPreview/index.tsx"),
				h = s("./src/reddit/components/FlairSearch/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/helpers/trackers/postComposer.ts"),
				C = s("./src/reddit/models/Flair/index.ts"),
				O = s("./src/reddit/selectors/postFlair.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				_ = s("./src/reddit/components/PostFlairPicker/index.m.less"),
				j = s.n(_);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(o || (o = {}));
			const k = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.UNSET;
					return `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${s}]`
				},
				E = Object(c.c)({
					flairData: O.d,
					subreddit: v.S
				});
			class w extends i.a.Component {
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
					} = this.state, s = Object(g.c)(this.props.flairs) || null;
					return Object(g.b)(e, t, s)
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
						templateIds: l
					} = o, {
						canSave: d
					} = this.canSave();
					return i.a.createElement(u.a, {
						className: s
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
						templateIds: l,
						onChange: this.setSelectedFlair
					}), i.a.createElement("div", {
						className: j.a.buttonsRow
					}, i.a.createElement(x.l, {
						disabled: !d,
						onClick: this.onApply
					}, n.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), i.a.createElement(x.o, {
						className: j.a.clearButton,
						onClick: this.onClear
					}, n.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const I = Object(a.b)(E, (e, t) => ({
				closeModal: () => e(Object(p.i)(t.modalId))
			}))(w);
			t.a = Object(d.a)(Object(l.c)(I))
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
				HideIcon: "_3CksthIwbeJIolp7OYeQYv",
				hideIcon: "_3CksthIwbeJIolp7OYeQYv",
				Icon: "_2V4nGS1AmzWhA62lzdCu4r",
				icon: "_2V4nGS1AmzWhA62lzdCu4r"
			}
		},
		"./src/reddit/components/PostOverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return _e
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/telemetry/index.ts"),
				d = s("./node_modules/uuid/v4.js"),
				p = s.n(d),
				m = s("./src/config.ts"),
				u = s("./src/lib/addQueryParams/index.ts"),
				b = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/lessComponent.tsx"),
				x = s("./src/reddit/actions/eventPosts/index.ts"),
				f = s("./src/reddit/actions/gold/modals.ts"),
				C = s("./src/reddit/actions/modal.ts"),
				O = s("./src/reddit/actions/pinnedPost.ts"),
				v = s("./src/reddit/actions/post.ts"),
				g = s("./src/reddit/actions/postCreation/editing.ts"),
				_ = s("./src/reddit/actions/reportFlow/index.ts"),
				j = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				k = s("./src/reddit/constants/oneFeed.ts"),
				E = s("./src/reddit/constants/parameters.ts"),
				w = s("./src/reddit/constants/posts.ts"),
				I = s("./src/reddit/hooks/useRecommendationPostContext.ts");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var P = function(e) {
					function t(t) {
						const s = Object(I.a)();
						return r.createElement(e, y({}, t, {
							recommendationPostContext: s
						}))
					}
					const s = e.displayName || e.name || "Component";
					return t.displayName = `withRecommendationPostContext(${s})`, t
				},
				T = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				S = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				N = s("./src/reddit/icons/fonts/index.tsx"),
				M = s("./src/reddit/components/CreatorStats/Icon.tsx"),
				F = s("./src/reddit/components/OverflowMenu/index.tsx"),
				R = s("./src/reddit/components/ReportFlow/index.tsx"),
				A = s("./src/reddit/contexts/PageLayer/index.tsx"),
				L = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				B = s("./src/reddit/controls/Dropdown/Row.tsx"),
				D = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				W = s("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				V = s("./src/reddit/components/Flatlist/constants.ts"),
				G = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				U = s("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				H = s("./src/reddit/constants/postLayout.ts"),
				K = s("./src/reddit/helpers/correlationIdTracker.ts"),
				q = s("./src/reddit/helpers/isCrosspost.ts"),
				J = s("./src/reddit/helpers/media/index.ts"),
				z = s("./src/reddit/helpers/postEvent.ts"),
				Q = s("./src/reddit/helpers/trackers/post.ts"),
				X = s("./src/reddit/helpers/trackers/react.ts"),
				Y = s("./src/reddit/models/Post/index.ts"),
				Z = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				$ = s("./src/reddit/models/Subreddit/index.ts"),
				ee = s("./src/reddit/selectors/activeModalId.ts"),
				te = s("./src/reddit/selectors/experiments/videoReactions.ts"),
				se = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				oe = s("./src/reddit/selectors/posts.ts"),
				ne = s("./src/reddit/selectors/subreddit.ts"),
				re = s("./src/reddit/selectors/user.ts"),
				ie = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				ae = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				ce = s("./src/reddit/components/ReportFlow/new.tsx"),
				le = s("./src/reddit/actions/postCollection/index.ts"),
				de = s("./src/reddit/contexts/Post/index.tsx"),
				pe = s("./src/reddit/helpers/trackers/postCollection.ts"),
				me = s("./src/reddit/models/PostCreationForm/index.ts"),
				ue = s("./src/reddit/selectors/postCollection.ts"),
				be = s("./node_modules/react-router/esm/react-router.js"),
				he = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				xe = s("./src/reddit/components/ModalStyledComponents/MessageBox.tsx");
			const fe = Object(be.i)(e => {
				let {
					post: t,
					toggleConfirmDelete: s,
					handleDeletePost: n,
					location: r
				} = e;
				const {
					isPrediction: a,
					resolvedOptionId: c,
					totalVoteCount: l
				} = t.pollData || {}, d = a ? o.fbt._("Are you sure?", null, {
					hk: "2mIMwE"
				}) : o.fbt._("Delete post?", null, {
					hk: "3g7QoX"
				}), p = i.a.useMemo(() => {
					const e = l || 0;
					return a ? 0 === e ? o.fbt._("Deleting this post will cancel any predictions that have been made.", null, {
						hk: "1OCTd3"
					}) : 1 === e ? o.fbt._("Deleting this post will cancel the 1 prediction that have already been made.", null, {
						hk: "1MnrUP"
					}) : o.fbt._("Deleting this post will cancel the {votedUsersCount} predictions that have already been made.", [o.fbt._param("votedUsersCount", e.toString())], {
						hk: "1jBXxs"
					}) : o.fbt._("Are you sure you want to delete your post? You can't undo this.", null, {
						hk: "2eDKWP"
					})
				}, [a, l]), m = a ? o.fbt._("Delete", null, {
					hk: "3NNdm0"
				}) : o.fbt._("Delete post", null, {
					hk: "28hc1p"
				});
				return a && c ? i.a.createElement(xe.a, {
					title: o.fbt._("This post can't be deleted", null, {
						hk: "1sZ013"
					}),
					body: o.fbt._("Sorry about that. Once a prediction has been resolved, you can't delete the post.", null, {
						hk: "32l6dr"
					}),
					onClose: s
				}) : i.a.createElement(he.a, {
					withOverlay: !0,
					toggleModal: s,
					onConfirm: () => n(r),
					onOverlayClick: s,
					actionText: m,
					headerText: d,
					modalText: p
				})
			});
			var Ce = s("./src/reddit/components/PostOverflowMenu/index.m.less"),
				Oe = s.n(Ce);
			const ve = h.a.wrapped(B.b, "DropdownRow", Oe.a),
				ge = p()(),
				_e = e => {
					let {
						gild: t = !0,
						save: s = !0,
						share: o = !0,
						report: n = !0,
						editPost: r = !0,
						hide: i = !0,
						insights: a = !0
					} = e;
					return {
						[V.a.Gild]: t,
						[V.a.Save]: s,
						[V.a.Share]: o,
						[V.a.Report]: n,
						[V.a.EditPost]: r,
						[V.a.Hide]: i,
						[V.a.Insights]: a
					}
				},
				je = Object(a.b)(() => Object(c.c)({
					claimedFreeAward: se.b,
					isFutureEvent: ue.i,
					isPinned: oe.q,
					isAllowReactionsKillswitchEnabled: te.a,
					subredditAboutInfo: oe.H,
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
						return Object(A.E)(e, {
							pageLayer: r
						}) && s && o && Object(re.Bb)(e, {
							userName: n.author
						})
					},
					hasSubredditRules: ne.h,
					isPostPartOfACollection: ue.k,
					shouldRenderCollectionEditButtons: (e, t) => {
						let {
							post: s,
							subredditOrProfile: o
						} = t;
						if (s.isSponsored) return !1;
						if (!o) return !1;
						const n = o.type === $.f.User;
						return Object(ue.r)(e, o.name, n)
					},
					reportingRevampEnabled: ie.a,
					videoShareModalOpen: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(ee.a)(e) === Object(U.a)(s)
					}
				}), (e, t) => {
					let {
						postId: s,
						isOverlay: o,
						isCommentsPage: n
					} = t;
					return {
						onCopyLink: t => e(Object(v.D)(t)),
						onDelete: t => e(Object(v.N)(s, t, o)),
						onDistinguishPost: t => e(Object(v.v)(s, t)),
						onGildClick: (t, o) => e(Object(f.d)({
							awardId: o,
							correlationId: t,
							thingId: s
						})),
						onToggleSave: () => e(Object(v.V)(s)),
						onToggleNSFW: () => e(Object(v.G)(s)),
						onToggleOC: () => e(Object(v.J)(s)),
						onTogglePinned: () => e(Object(O.i)(s)),
						onToggleSpoiler: () => e(Object(v.eb)(s)),
						onHide: t => e(Object(v.fb)(s, !t, o, !0)),
						onReportClick: () => e(Object(_.c)(s, o)),
						onStartEventNow: () => {
							e((e, t) => Object(l.a)(Object(S.l)()(t()))), e(Object(x.startEventNowRequested)(s))
						},
						onEdit: () => {
							const t = !o && !n;
							e(Object(g.a)(s, t))
						},
						onFlairPost: () => e(Object(C.i)(Object(ae.b)(s, o))),
						onToggleSendReplies: () => e(Object(v.W)(s)),
						onToggleReactAllowed: () => e(Object(v.T)(s)),
						showCollectionsList: (t, s) => {
							e(Object(le.e)(t)).then(() => {
								const t = Object(me.t)(s, o);
								e(C.i(t))
							})
						},
						onToggleVideoShareModal: () => e(Object(C.i)(Object(U.a)(s)))
					}
				});
			class ke extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						isConfirmDeleteOpen: !1
					}, this.handlePostEvent = (e, t) => {
						const {
							isOverlay: s,
							post: o,
							sendEvent: n
						} = this.props;
						n(Object(Q.h)(o.id, e, s ? "post_detail" : "post", void 0, void 0, void 0, null == t ? void 0 : t.referralId))
					}, this.handleClickMenuButton = () => {
						this.handlePostEvent("post_overflow_menu")
					}, this.handleDeletePost = e => {
						e && (this.props.onDelete(e), this.handlePostEvent("delete"))
					}, this.handleEdit = () => {
						this.handlePostEvent("edit"), this.props.onEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(K.e)(K.a.GildingFlow, !0);
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
						s(Object(Q.k)(e)), t(k.a.SeeFewerPostsView)
					}, this.onShowMoreOfClick = () => {
						const {
							postId: e,
							recommendationPostContext: {
								setRecommendationFooterView: t
							},
							sendEvent: s
						} = this.props;
						s(Object(Q.l)(e)), t(k.a.ThankYouView)
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
						this.handlePostEvent(this.props.isPinned ? "unpin" : "pin"), this.props.isPinned ? this.props.sendEvent(Object(Q.o)(this.props.post.id)) : this.props.sendEvent(Object(Q.e)(this.props.post.id)), this.props.onTogglePinned()
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
					}, this.getBreakpointCx = (e, t) => Object(W.b)({
						breakpointType: G.a.HideIfVWLarger,
						flatlistItem: e,
						postLayout: t
					}), this.handleAddToCollection = () => {
						const {
							isPostPartOfACollection: e,
							showCollectionsList: t,
							post: s,
							sendEvent: o
						} = this.props;
						e || (o(Object(pe.b)(s.id)), t(s.belongsTo.id, s.id))
					}, this.onCloseShareModal = e => {
						e && (this.handlePostEvent("copy_link", {
							referralId: ge
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
						props: e
					} = this, t = e.layout === H.g.Classic;
					if (!(e.ignoreBreakpoints || e.ignoreOverflowMenuBreakpoints || e.modModeWithPost || e.userIsOp || !e.isCommentsPage && !t || e.isRecommendationPost)) return Object(G.b)({
						breakpointType: G.a.HideIfVWLarger,
						flatlistItem: V.a.PostOverflowMenu,
						isLoggedIn: !!e.currentUser,
						isUserOp: e.userIsOp
					})
				}
				renderDropdownIcons() {
					const {
						props: e
					} = this, {
						currentUser: t,
						isFutureEvent: s,
						isOverlay: r,
						isPinned: a,
						isRecommendationPost: c,
						layout: l,
						onClickInsightsButton: d,
						onStartEventNow: p,
						post: u,
						shouldRenderCollectionEditButtons: b,
						shouldShowInsightsButton: h,
						showEditFlair: x,
						showPinAction: f,
						toggleAddEventStartTimeModal: C,
						toggleEditStartTimeModal: O,
						userIsOp: v
					} = e, g = e.currentUser && e.currentUser.isEmployee, _ = Object(q.a)(e.post), j = e.post.belongsTo.type === w.a.PROFILE || Object($.g)(e.subredditAboutInfo), k = e.post.belongsTo.type === w.a.PROFILE || Object($.i)(e.subredditAboutInfo), E = t && u.isGildable, I = Object(z.a)(e.post), y = r ? void 0 : l;
					return i.a.createElement("div", null, h && i.a.createElement(ve, {
						className: this.getBreakpointClass(V.a.Insights),
						displayText: o.fbt._("Insights", null, {
							hk: "t7dpi"
						}),
						onClick: d
					}, i.a.createElement(M.a, {
						postCreated: u.created,
						subredditId: u.belongsTo.id
					})), E && i.a.createElement(ve, {
						className: this.getBreakpointClass(V.a.Gild),
						displayText: o.fbt._("Give Award", null, {
							hk: "3mYeGJ"
						}),
						onClick: this.handleGild
					}, i.a.createElement(N.a, {
						name: "award",
						className: Oe.a.Icon
					})), c && i.a.createElement(i.a.Fragment, null, i.a.createElement(ve, {
						className: this.getBreakpointClass(V.a.ShowMoreLikeThis),
						displayText: o.fbt._("Show more posts like this", null, {
							hk: "2t0WMg"
						}),
						onClick: this.onShowMoreOfClick
					}, i.a.createElement(N.a, {
						name: "checkmark",
						className: Oe.a.Icon
					})), i.a.createElement(ve, {
						className: this.getBreakpointClass(V.a.ShowFewerLikeThis),
						displayText: o.fbt._("Show fewer posts like this", null, {
							hk: "k9sBL"
						}),
						onClick: this.onShowFewerOfClick
					}, i.a.createElement(N.a, {
						name: "hide",
						className: Oe.a.Icon
					}))), i.a.createElement(ve, {
						className: this.getBreakpointClass(V.a.Share),
						displayText: o.fbt._("Copy link", null, {
							hk: "ETZxA"
						}),
						onClick: () => {
							const {
								permalink: t,
								post: s
							} = e;
							s && Object(Y.p)(s) ? (e.onToggleVideoShareModal(), this.handlePostEvent("share")) : (this.handlePostEvent("share_copy"), e.onCopyLink(t))
						}
					}, i.a.createElement(N.a, {
						name: "link_post",
						className: Oe.a.Icon
					})), i.a.createElement(ve, {
						className: this.getBreakpointClass(V.a.Share),
						displayText: o.fbt._("Embed", null, {
							hk: "3u0v6r"
						}),
						onClick: () => {
							this.handlePostEvent("share_embed"), window.open(`${m.a.rebedMediaUrl}/embed?url=${e.post.permalink}`, "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, i.a.createElement(N.a, {
						name: "embed",
						className: Oe.a.Icon
					})), e.showEditPost && !Object(Z.b)(this.props.post) && i.a.createElement(ve, {
						className: this.getBreakpointClass(V.a.EditPost),
						displayText: o.fbt._("Edit post", null, {
							hk: "3gVzz0"
						}),
						onClick: this.handleEdit,
						isSelected: e.post.hidden
					}, i.a.createElement(N.a, {
						name: "edit",
						className: Oe.a.Icon
					})), x && i.a.createElement(ve, {
						className: this.getBreakpointCx(D.a.Flair, y),
						displayText: o.fbt._("Edit Post Flair", null, {
							hk: "1pGISD"
						}),
						onClick: e.onFlairPost,
						isSelected: e.post.hidden
					}, i.a.createElement(N.a, {
						name: "tag",
						className: Oe.a.Icon
					})), i.a.createElement(ve, {
						className: this.getBreakpointClass(V.a.Save),
						displayText: e.post.saved ? o.fbt._("unsave", null, {
							hk: "HDDPm"
						}) : o.fbt._("save", null, {
							hk: "3bg2gs"
						}),
						onClick: this.toggleSave,
						isSelected: e.post.saved
					}, i.a.createElement(N.a, {
						name: e.post.saved ? "saved" : "save",
						className: Oe.a.Icon
					})), f && i.a.createElement(ve, {
						displayText: a ? o.fbt._("Unpin Post from Profile", null, {
							hk: "6DYfk"
						}) : o.fbt._("Pin Post to Profile", null, {
							hk: "2RWbNF"
						}),
						onClick: this.togglePinned
					}, i.a.createElement(N.a, {
						name: "pin",
						className: Oe.a.Icon,
						isFilled: this.props.isPinned
					})), !e.post.isSponsored && i.a.createElement(ve, {
						className: this.getBreakpointClass(V.a.Hide),
						displayText: e.post.hidden ? o.fbt._("unhide", null, {
							hk: "1P4IxC"
						}) : o.fbt._("hide", null, {
							hk: "48yKzW"
						}),
						onClick: this.toggleHide,
						isSelected: e.post.hidden
					}, i.a.createElement(N.a, {
						name: "hide",
						className: Oe.a.HideIcon
					})), !e.post.isSponsored && !v && i.a.createElement(ve, {
						className: this.getBreakpointClass(V.a.Report),
						displayText: o.fbt._("report", null, {
							hk: "128RPn"
						}),
						onClick: this.handleReport
					}, i.a.createElement(N.a, {
						name: "report",
						className: Oe.a.Icon
					})), b && s && p && i.a.createElement(ve, {
						onClick: p,
						displayText: o.fbt._("Start event now", null, {
							hk: "3VomTN"
						})
					}, i.a.createElement(N.a, {
						name: "live",
						className: Oe.a.Icon
					})), b && s && O && i.a.createElement(ve, {
						onClick: O,
						displayText: o.fbt._("Edit start time", null, {
							hk: "2typ17"
						})
					}, i.a.createElement(N.a, {
						name: "scheduled",
						className: Oe.a.Icon
					})), b && !I && C && i.a.createElement(ve, {
						displayText: o.fbt._("Add event start time", null, {
							hk: "1XXqzu"
						}),
						onClick: C
					}, i.a.createElement(N.a, {
						name: "scheduled",
						className: Oe.a.Icon
					})), b && i.a.createElement(ve, {
						className: this.props.isPostPartOfACollection ? Oe.a.disabledRow : void 0,
						displayText: o.fbt._("Add to collection", null, {
							hk: "3UNHgN"
						}),
						onClick: this.handleAddToCollection,
						noHover: this.props.isPostPartOfACollection
					}, i.a.createElement(N.a, {
						name: "collection",
						className: Oe.a.Icon
					})), v && i.a.createElement(ve, {
						displayText: o.fbt._("delete", null, {
							hk: "4kSfzC"
						}),
						onClick: this.toggleDeleteConfirmation
					}, i.a.createElement(N.a, {
						name: "delete",
						className: Oe.a.Icon
					})), g && e.userIsOp && i.a.createElement(ve, {
						displayText: e.post.distinguishType === n.G.ADMIN ? o.fbt._("undistinguish", null, {
							hk: "2chGON"
						}) : o.fbt._("Distinguish as admin", null, {
							hk: "2xltiM"
						}),
						onClick: () => e.post.distinguishType === n.G.ADMIN ? e.onDistinguishPost(n.G.NONE) : e.onDistinguishPost(n.G.ADMIN)
					}, i.a.createElement(N.a, {
						name: "admin",
						className: Oe.a.Icon
					})), v && j && !_ && i.a.createElement(L.a, {
						text: o.fbt._("Mark as OC", null, {
							hk: "2vGyoC"
						}),
						onClick: this.toggleOC,
						isSelected: this.props.post.isOriginalContent
					}), v && k && i.a.createElement(L.a, {
						text: o.fbt._("Mark as Spoiler", null, {
							hk: "3PJk7A"
						}),
						onClick: this.toggleSpoiler,
						isSelected: this.props.post.isSpoiler
					}), v && i.a.createElement(L.a, {
						text: o.fbt._("Mark as NSFW", null, {
							hk: "4qK6JN"
						}),
						onClick: this.toggleNSFW,
						isSelected: this.props.post.isNSFW
					}), v && u.domain === J.a && !this.props.isAllowReactionsKillswitchEnabled && i.a.createElement(L.a, {
						text: o.fbt._("Allow video threads", null, {
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
						text: o.fbt._("Send me reply notifications", null, {
							hk: "6AmTA"
						}),
						onClick: e.onToggleSendReplies,
						isSelected: this.props.post.sendReplies
					}))
				}
				render() {
					const {
						props: e
					} = this;
					return i.a.createElement("div", null, i.a.createElement(F.b, {
						className: Object(b.a)(Oe.a.overflowMenu, this.getOverflowMenuBreakpointClass(), e.className),
						dropdownId: e.dropdownId,
						isFixed: e.isFixed,
						layout: e.layout,
						onClick: this.handleClickMenuButton
					}, this.renderDropdownIcons()), e.reportFlowIsOpen && e.subredditOrProfile && e.hasSubredditRules && this.renderReportFlow(), this.state.isConfirmDeleteOpen && i.a.createElement(fe, {
						post: this.props.post,
						toggleConfirmDelete: this.toggleDeleteConfirmation,
						handleDeletePost: this.handleDeletePost
					}), e.videoShareModalOpen && i.a.createElement(U.b, {
						className: Oe.a.modalBody,
						onClose: this.onCloseShareModal,
						withOverlay: !1,
						url: Object(u.a)(Object(T.a)(e.postId), {
							[E.s]: ge,
							utm_source: "share",
							utm_medium: "web2x",
							utm_content: "rpan_stream"
						})
					}))
				}
			}
			ke.contextType = j.a;
			t.a = P(Object(de.e)(je(ke)))
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			const r = Object(o.createContext)({
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
					const [s, i] = Object(o.useState)(0), [a, c] = Object(o.useState)(!1), [l, d] = Object(o.useState)(0), p = {
						currentTime: s,
						setCurrentTime: i,
						isLive: a,
						setIsLive: c,
						totalTime: l,
						setTotalTime: d
					};
					return n.a.createElement(r.Provider, {
						value: p
					}, t)
				}
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = e => `PublicAccessNetwork--VideoShare--Modal-${e}`,
				r = Object(o.a)({
					resolved: {},
					chunkName: () => "VideoShareModal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("VideoShareModal").then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModal.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModal.tsx"
					}
				}, {
					ssr: !1
				});
			t.b = r
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
				importAsync: () => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx")),
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
					importAsync: () => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx")),
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
				return l
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "a", (function() {
				return m
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				c = s.n(a);
			const l = e => n.a.createElement("button", {
					className: Object(r.a)(c.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, e.children, e.text && n.a.createElement("span", {
					className: Object(r.a)(c.a.TextWrapper, e.textClassName)
				}, e.text, " ")),
				d = i.a.wrapped(l, "ApproveButton", c.a),
				p = i.a.wrapped(l, "RemoveButton", c.a),
				m = e => n.a.createElement("button", {
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
				a = s("./node_modules/uuid/v4.js"),
				c = s.n(a),
				l = s("./src/config.ts"),
				d = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/reddit/actions/chat/toggle.ts"),
				m = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				h = s("./src/reddit/actions/tooltip.ts"),
				x = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				f = s("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				C = s("./src/reddit/constants/parameters.ts"),
				O = s("./src/reddit/controls/Dropdown/index.tsx"),
				v = s("./src/reddit/controls/Dropdown/Row.tsx"),
				g = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				_ = s("./src/reddit/helpers/trackers/shareToChat.ts"),
				j = s("./src/reddit/hooks/useTracking.ts"),
				k = s("./src/reddit/icons/fonts/index.tsx"),
				E = s("./src/reddit/models/Post/index.ts"),
				w = s("./src/reddit/models/Subreddit/index.ts"),
				I = s("./src/reddit/routes/postCreation/constants.ts"),
				y = s("./src/reddit/selectors/activeModalId.ts"),
				P = s("./src/reddit/selectors/experiments/shareToChatButton.ts"),
				T = s("./src/reddit/selectors/tooltip.ts"),
				S = s("./src/reddit/components/ShareMenu/index.m.less"),
				N = s.n(S);
			const M = Object(x.a)(O.a),
				F = c()(),
				R = r.a.memo(e => {
					const t = Object(i.d)(),
						s = Object(j.a)(),
						a = Object(i.e)(P.a),
						c = Object(i.e)(t => Object(T.b)(e.dropdownId)(t)),
						x = Object(i.e)(t => Object(y.b)(Object(f.a)(e.dropdownId))(t)),
						O = Object(n.useCallback)(() => {
							t(Object(h.h)({
								tooltipId: e.dropdownId
							}))
						}, [t, e.dropdownId]),
						S = e => t(Object(u.D)(e)),
						R = Object(n.useCallback)(() => {
							e.post && (t(Object(b.d)(e.post.id)), t(Object(m.i)(Object(f.a)(e.post.id))))
						}, [t, e.post]),
						A = !e.subredditType || e.subredditType === w.f.Public,
						L = !!e.post && e.post.isCrosspostable && !e.post.isSponsored,
						B = Object(n.useCallback)(e => {
							t(Object(p.e)(e)), s(Object(_.a)())
						}, [t, s]);
					return r.a.createElement("div", {
						className: e.className,
						onClick: O,
						id: e.dropdownId
					}, e.children, r.a.createElement(M, {
						className: N.a.dropdown,
						isOpen: c,
						tooltipId: e.dropdownId
					}, r.a.createElement(v.b, {
						className: N.a.dropdownRow,
						displayText: o.fbt._("Copy link", null, {
							hk: "1tCqox"
						}),
						onClick: () => {
							const {
								permalink: t,
								post: s
							} = e;
							if (s && Object(E.p)(s)) e.sendEventWithName("share_copy", {
								referralId: F
							}), R();
							else {
								const s = Object(d.a)(t, {
									utm_source: "share",
									utm_medium: "web2x",
									context: 3
								});
								e.sendEventWithName("share_copy"), S(s)
							}
						}
					}, r.a.createElement(k.a, {
						name: "link_post",
						className: N.a.linkIcon
					})), L && r.a.createElement(v.b, {
						className: N.a.dropdownRow,
						displayText: o.fbt._("crosspost", null, {
							hk: "23zSN6"
						}),
						onClick: () => {
							e.sendEventWithName("share_crosspost"), e.post && window.open(`${I.b}?source_id=${e.post.id}`, "_blank")
						}
					}, r.a.createElement(k.a, {
						name: "crosspost",
						className: N.a.crosspostIcon
					})), A && r.a.createElement(v.b, {
						className: N.a.dropdownRow,
						displayText: o.fbt._("Embed", null, {
							hk: "2CcsuC"
						}),
						onClick: () => {
							e.sendEventWithName("share_embed"), window.open(`${l.a.rebedMediaUrl}/embed?url=${e.permalink}`, "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, r.a.createElement(k.a, {
						name: "embed",
						className: N.a.embedIcon
					})), a && r.a.createElement(v.b, {
						className: N.a.dropdownRow,
						displayText: o.fbt._("share to chat", null, {
							hk: "3EuIWT"
						}),
						onClick: () => {
							const {
								permalink: t
							} = e, s = Object(d.a)(t, {
								utm_source: "share",
								utm_medium: "web2x",
								context: 3
							});
							B(s)
						}
					}, r.a.createElement(k.a, {
						name: "chat",
						className: N.a.chatIcon
					}))), x && e.post && r.a.createElement(f.b, {
						className: N.a.modalBody,
						onClose: t => {
							t && (e.sendEventWithName("copy_link", {
								referralId: F
							}), S(t)), R()
						},
						url: Object(d.a)(Object(g.a)(e.post.id), {
							[C.s]: F,
							utm_source: "share",
							utm_medium: "web2x",
							utm_content: "rpan_stream"
						})
					}))
				});
			t.a = R
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
			}));
			const o = "comment",
				n = "comment-submission-form-markdown",
				r = "comment-submission-form-richtext",
				i = "comments-page-link-num-comments",
				a = "post-content"
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
				return l
			}));
			const o = "PostCreation-AddEventButton",
				n = 500,
				r = "PostCreation-CollectionEducationTooltip",
				i = "PostCreation-EventEducationTooltip",
				a = 300,
				c = a,
				l = "PostCreation-AddToCollectionButton"
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
				return m
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				c = s("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				l = s.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const p = e => n.a.createElement("div", {
					className: Object(r.a)(l.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, n.a.createElement(a.a, {
					className: l.a.expandRight
				}, n.a.createElement(i.a, {
					name: "checkbox",
					isFilled: e.isSelected,
					className: l.a.checkboxIcon
				}), e.text)),
				m = e => {
					let {
						className: t,
						...s
					} = e;
					return n.a.createElement(p, d({
						className: Object(r.a)(l.a.postCheckboxMenuItem, t)
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
				return v
			})), s.d(t, "c", (function() {
				return g
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/uniqueId.js"),
				r = s.n(n),
				i = s("./node_modules/raf/index.js"),
				a = s.n(i),
				c = s("./node_modules/react/index.js"),
				l = s.n(c),
				d = s("./src/lib/classNames/index.ts"),
				p = s("./src/higherOrderComponents/asModal/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/layout/row/Inline/index.tsx"),
				b = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				h = s.n(b);
			var x = Object(p.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return l.a.createElement("div", {
						className: h.a.wrapper
					}, l.a.createElement(u.a, {
						className: h.a.titleRow
					}, s), l.a.createElement("div", {
						className: h.a.detailsContainer
					}, t), l.a.createElement(u.a, {
						className: h.a.buttonRow
					}, l.a.createElement(m.l, {
						className: h.a.confirmButton,
						onClick: e.onConfirmed
					}, o.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				f = s("./src/reddit/controls/ErrorText/index.m.less"),
				C = s.n(f);
			class O extends l.a.Component {
				constructor(e) {
					super(e), this.spanRef = l.a.createRef(), this.toggleModal = () => {
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
					return l.a.createElement("div", {
						className: Object(d.a)(C.a.wrapper, t)
					}, l.a.createElement("span", {
						className: C.a.description,
						ref: this.spanRef
					}, e), i && l.a.createElement("span", {
						className: C.a.moreText,
						onClick: this.toggleModal
					}, r), a && l.a.createElement(x, {
						onConfirmed: this.toggleModal,
						title: n
					}, s || e))
				}
			}
			const v = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: o,
						fallbackMessage: n,
						messages: r = []
					} = e, i = r.length ? r : n ? [n] : [];
					return i.length ? l.a.createElement("div", {
						className: t
					}, i.map((e, t) => l.a.createElement(O, {
						className: s,
						errorModalTitle: o,
						key: t
					}, e))) : null
				},
				g = e => l.a.createElement(v, {
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
		"./src/reddit/helpers/hasModPostPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.posts
		},
		"./src/reddit/helpers/trackers/freeAwardOffer.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return d
			}));
			var o = s("./src/reddit/helpers/correlationIdTracker.ts"),
				n = s("./src/reddit/helpers/trackers/goldPayment.ts"),
				r = s("./src/reddit/models/Gold/ProductOffer.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					...Object(n.h)(e, {
						offerContext: r.a.StorefrontFreeAward
					}),
					correlationId: Object(o.e)(o.a.GoldPayment, !1),
					profile: i.Q(e),
					subreddit: i.gb(e)
				}),
				c = () => e => ({
					source: "free_award_offer",
					action: "view",
					noun: "page",
					...a(e)
				}),
				l = e => t => ({
					source: "free_award_offer",
					action: "click",
					noun: e,
					...a(t)
				}),
				d = () => e => ({
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
				return l
			})), s.d(t, "g", (function() {
				return d
			})), s.d(t, "o", (function() {
				return p
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "n", (function() {
				return h
			})), s.d(t, "m", (function() {
				return x
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "p", (function() {
				return O
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "j", (function() {
				return g
			})), s.d(t, "q", (function() {
				return _
			})), s.d(t, "k", (function() {
				return j
			})), s.d(t, "l", (function() {
				return k
			})), s.d(t, "i", (function() {
				return E
			})), s.d(t, "d", (function() {
				return w
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
			const l = e => t => ({
					source: o.collection,
					noun: n.post,
					...m(t, e)
				}),
				d = e => {
					let {
						postId: t,
						isFollowed: s
					} = e;
					return e => ({
						source: o.collection,
						noun: s ? n.unfollow : n.follow,
						...m(e, t)
					})
				},
				p = e => {
					let {
						postId: t,
						isFollowed: s
					} = e;
					return e => ({
						source: i.a.postEvent,
						noun: s ? n.unfollow : n.follow,
						...m(e, t)
					})
				},
				m = (e, t) => {
					const s = {
						...c.n(e),
						action: r.c.CLICK,
						subreddit: c.gb(e)
					};
					return void 0 === t ? s : {
						...s,
						post: c.H(e, t),
						postCollection: c.J(e, {
							postId: t
						}),
						postEvent: c.K(e, {
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
					...c.n(e),
					subreddit: c.gb(e),
					source: o.postComposer
				}),
				C = (e, t) => s => ({
					...m(s, e),
					source: t || o.postOverflowMenu,
					noun: n.collectionAddPost
				}),
				O = e => t => ({
					...m(t, e),
					source: o.collectionComposer,
					noun: n.collectionRemovePost
				}),
				v = () => e => ({
					...m(e),
					source: o.collectionComposer,
					noun: n.collectionCancel
				}),
				g = () => e => {
					const t = Object(a.o)(e) || void 0;
					return {
						...m(e, t),
						source: o.collectionComposer,
						noun: n.collectionCreate
					}
				},
				_ = () => e => ({
					...m(e),
					source: o.collectionComposer,
					noun: n.collectionSelect
				}),
				j = e => t => ({
					...c.n(t),
					subreddit: c.gb(t),
					source: o.collectionComposer,
					action: r.c.CLICK,
					noun: n.collectionDelete,
					postCollection: c.I(t, {
						collectionId: e
					})
				}),
				k = e => t => ({
					...m(t),
					source: o.collectionComposer,
					noun: n.collectionEdit,
					postCollection: c.I(t, {
						collectionId: e
					})
				}),
				E = e => t => ({
					...m(t, e),
					source: o.collectionComposer,
					noun: n.startEvent
				}),
				w = () => e => {
					const t = Object(a.o)(e) || void 0;
					return {
						...m(e, t),
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
				return C
			})), s.d(t, "d", (function() {
				return O
			}));
			var o, n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/eventTools/index.ts"),
				i = s("./src/lib/timezone/index.ts"),
				a = s("./src/reddit/constants/tracking.ts"),
				c = s("./src/reddit/models/PostCreationForm/index.ts"),
				l = s("./src/reddit/selectors/platform.ts"),
				d = s("./src/reddit/selectors/postCreations.ts"),
				p = s("./src/reddit/selectors/telemetry.ts"),
				m = s("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(o || (o = {}));
			const u = e => p.d(e, {
					pageType: "event_submit"
				}),
				b = e => {
					Object(m.a)({
						...p.n(e),
						source: o.postComposer,
						action: a.c.CLICK,
						noun: "event_create",
						subreddit: p.gb(e)
					})
				},
				h = e => {
					Object(m.a)({
						...p.n(e),
						source: o.postComposer,
						action: a.c.CLICK,
						noun: "event_edit",
						subreddit: p.gb(e),
						postEvent: v(e),
						postComposer: g(e)
					})
				},
				x = () => e => ({
					source: o.eventComposer,
					action: a.c.VIEW,
					noun: a.b.SCREEN,
					actionInfo: u(e),
					postEvent: v(e)
				}),
				f = e => t => ({
					...k(t, Object(l.o)(t)),
					source: o.postComposer,
					noun: "apply",
					postComposer: _(e)
				}),
				C = () => e => ({
					...k(e, Object(l.o)(e)),
					noun: "cancel",
					actionInfo: u(e)
				}),
				O = e => t => ({
					...k(t, Object(l.o)(t)),
					noun: "delete",
					actionInfo: u(t),
					postComposer: g(t),
					postEvent: j(e)
				}),
				v = e => {
					const t = Object(d.p)(e);
					return t && j(t)
				},
				g = e => _(Object(d.p)(e)),
				_ = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === c.j.AtEventTime ? Object(i.f)(e.startDate).getTime() / n.Sb : void 0
					}
				},
				j = e => {
					const t = Object(i.f)(e.startDate).getTime() / n.Sb,
						s = Object(i.f)(e.endDate).getTime() / n.Sb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: s,
						eventState: Object(r.e)(t, s)
					}
				},
				k = (e, t) => {
					const s = {
						source: o.eventComposer,
						action: a.c.CLICK,
						subreddit: p.gb(e)
					};
					return t ? {
						...s,
						post: p.H(e, t),
						postEvent: p.K(e, {
							postId: t
						}),
						postCollection: p.J(e, {
							postId: t
						})
					} : s
				}
		},
		"./src/reddit/helpers/trackers/shareToChat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/constants/tracking.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const r = () => e => ({
				...Object(n.n)(e),
				source: "post",
				action: o.c.CLICK,
				noun: "share_chat",
				subreddit: Object(n.gb)(e)
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
		"./src/reddit/icons/fonts/Comment/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);

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
					...s
				} = e;
				return n.a.createElement("i", l({
					className: Object(r.a)(Object(i.b)("comment", s.isFilled), c.a.commentIcon, t)
				}, s))
			}
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("i", l({}, e, {
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
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(r.b)("tag",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {},
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
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), n.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
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

			function l() {
				return (l = Object.assign || function(e) {
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
					...d
				} = e;
				return n.a.createElement("div", l({
					className: Object(i.a)(c.a.expandRightContainer, t)
				}, d), n.a.createElement("div", {
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
				return l
			})), s.d(t, "a", (function() {
				return d
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
				l = (e, t) => {
					const s = r(e, t),
						o = e.listings.postOrder.pageInfo[s];
					return !(!o || !o.hasNextPage)
				},
				d = (e, t) => {
					const s = r(e, t),
						o = e.listings.postOrder.pageInfo[s];
					return o && o.endCursor || null
				}
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
				experimentEligibilitySelector: i.Q,
				experimentName: o.l
			}) === o.f.Enabled
		},
		"./src/reddit/selectors/experiments/shareToChatButton.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = Object(o.a)(e => Object(r.c)(e, {
				experimentEligibilitySelector: i.Q,
				experimentName: n.bc
			}), e => e === n.id)
		},
		"./src/redditGQL/operations/EventPostsBySubredditName.json": function(e) {
			e.exports = JSON.parse('{"id":"5ee520f9aa60"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956.6597bfc6f09ce62b4998.js.map