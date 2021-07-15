// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48.b708b05b3b7c68afb2a6.js
// Retrieved at 7/15/2021, 10:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"], {
		"./src/reddit/actions/eventPosts/index.ts": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "fetchEventPostsPending", (function() {
				return O
			})), o.d(t, "fetchEventPostsSuccess", (function() {
				return _
			})), o.d(t, "fetchEventPostsFailure", (function() {
				return g
			})), o.d(t, "fetchMoreEventPostsSuccess", (function() {
				return k
			})), o.d(t, "eventPostsRequested", (function() {
				return E
			})), o.d(t, "startEventNowSuccess", (function() {
				return j
			})), o.d(t, "startEventNowRequested", (function() {
				return w
			})), o.d(t, "editEventTimeSuccess", (function() {
				return I
			})), o.d(t, "editEventTimeRequested", (function() {
				return y
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
				u = o("./src/reddit/constants/headers.ts");
			var m = (e, t, o, s, r) => Object(l.a)(Object(p.a)(e, [u.a]), {
				endpoint: `${e.apiUrl}/api/event_post_time.json`,
				method: n.hb.POST,
				data: {
					id: t,
					event_start: o,
					event_end: s,
					event_tz: r
				}
			});
			var b = (e, t) => Object(l.a)(Object(p.a)(e, [u.a]), {
					endpoint: `${e.apiUrl}/api/start_event_post.json`,
					method: n.hb.POST,
					data: {
						id: t
					}
				}),
				h = o("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts"),
				f = o("./src/reddit/models/Toast/index.ts"),
				x = o("./src/reddit/selectors/eventPosts.ts"),
				v = o("./src/reddit/selectors/posts.ts");
			const C = () => s.fbt._("Something went wrong. Just don't panic.", null, {
					hk: "4onxm1"
				}),
				O = Object(r.a)(i.e),
				_ = Object(r.a)(i.c),
				g = Object(r.a)(i.b),
				k = Object(r.a)(i.d),
				E = e => async (t, o, {
					gqlContext: s
				}) => {
					let n = o();
					const r = Object(x.d)(n, {
							subredditName: e
						}),
						i = Object(x.b)(n, {
							subredditName: e
						}),
						l = Object(x.c)(n, {
							subredditName: e
						}),
						p = Object(x.a)(n, {
							subredditName: e
						}),
						u = i && l;
					if (r) return;
					const m = {
						name: e,
						pageSize: 25,
						nonInclusiveCursor: null
					};
					if (u) m.nonInclusiveCursor = p;
					else if (i && !l) return;
					const b = Object(x.e)(n, {
						subredditName: e
					});
					t(O({
						key: b
					}));
					const v = await ((e, t) => Object(c.a)(e, {
						...d,
						variables: t
					}))(s(), m);
					if (v.ok) {
						const {
							subredditInfoByName: e
						} = v.body.data, {
							eventPosts: s
						} = e, r = Object(h.a)(s);
						let i = [],
							a = {};
						const c = s.pageInfo || {
							hasNextPage: !1,
							endCursor: null,
							hasPreviousPage: !1,
							startCursor: null
						};
						r.length > 0 && (i = r.map(e => e.id), a = r.reduce((e, t) => (e[t.id] = t, e), {})), n = o(), t((u ? k : _)({
							key: b,
							postIds: i,
							meta: n.meta,
							posts: a,
							pageInfo: c
						}))
					} else t(g({
						error: v.error,
						key: b
					})), t(Object(a.f)({
						kind: f.b.Error,
						text: C()
					}))
				}, j = Object(r.a)(i.f), w = e => async (t, o, {
					apiContext: n
				}) => {
					if ((await b(n(), e)).ok) {
						const n = () => s.fbt._("Following event has started successfully: {title}", [s.fbt._param("title", c)], {
							hk: "e9iz9"
						});
						t(j({
							postId: e
						}));
						const r = o(),
							i = Object(v.F)(r, {
								postId: e
							}),
							c = i && i.title || "";
						t(Object(a.f)({
							kind: f.b.SuccessMod,
							text: n()
						}))
					} else t(Object(a.f)({
						kind: f.b.Error,
						text: C()
					}))
				}, I = Object(r.a)(i.a), y = (e, t) => async (o, r, {
					apiContext: i
				}) => {
					const c = await m(i(), e, t.startDate, t.endDate, t.timezoneName);
					if (c.ok) {
						const t = c.body,
							i = 14400,
							d = Math.round(t.event_start / n.Nb);
						let l = t.event_end;
						const p = {
							eventStart: d,
							eventEnd: l = l && Math.round(l / n.Nb) || d + i,
							eventIsLive: t.event_is_live
						};
						o(I({
							postId: e,
							eventInfo: p
						}));
						const u = r(),
							m = Object(v.F)(u, {
								postId: e
							}),
							b = m && m.title || "",
							h = () => s.fbt._("Following event time is updated successfully: {title}", [s.fbt._param("title", b)], {
								hk: "1m1w1c"
							});
						o(Object(a.f)({
							kind: f.b.SuccessMod,
							text: h()
						}))
					} else o(Object(a.f)({
						kind: f.b.Error,
						text: C()
					}))
				}
		},
		"./src/reddit/actions/postCollection/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return M
			})), o.d(t, "e", (function() {
				return R
			})), o.d(t, "g", (function() {
				return L
			})), o.d(t, "a", (function() {
				return W
			})), o.d(t, "c", (function() {
				return U
			})), o.d(t, "h", (function() {
				return K
			})), o.d(t, "f", (function() {
				return Y
			})), o.d(t, "d", (function() {
				return se
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/react-router-redux/es/index.js"),
				r = o("./src/lib/filterQueryParams/index.ts"),
				i = o("./src/lib/makeActionCreator/index.ts"),
				a = o("./src/reddit/actions/postCollection/constants.ts"),
				c = o("./src/reddit/actions/toaster.ts"),
				d = o("./src/reddit/constants/history.ts"),
				l = o("./src/lib/constants/index.ts"),
				p = o("./src/lib/makeApiRequest/index.ts"),
				u = o("./src/lib/omitHeaders/index.ts"),
				m = o("./src/reddit/constants/headers.ts");
			var b = (e, t, o) => Object(p.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/add_post_to_collection.json`,
				method: l.hb.POST,
				data: {
					collection_id: t,
					link_fullname: o
				}
			});
			var h = (e, t, o) => Object(p.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/create_collection.json`,
				method: l.hb.POST,
				data: {
					title: t,
					sr_fullname: o
				}
			});
			var f = (e, t) => Object(p.a)(Object(u.a)(e, [m.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/delete_collection.json`,
					method: l.hb.POST,
					data: {
						collection_id: t
					}
				}),
				x = o("./src/config.ts");
			var v = (e, t) => Object(p.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${x.a.gatewayUrl}/desktopapi/v1/subreddit_collections/${t}`,
				method: l.hb.GET
			});
			var C = (e, t, o) => Object(p.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/remove_post_in_collection.json`,
				method: l.hb.POST,
				data: {
					collection_id: t,
					link_fullname: o
				}
			});
			var O = (e, t, o) => Object(p.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_title.json`,
				method: l.hb.POST,
				data: {
					collection_id: t,
					title: o
				}
			});
			var _ = (e, t, o) => Object(p.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/reorder_collection.json`,
				method: l.hb.POST,
				data: {
					collection_id: t,
					link_ids: o.join(",")
				}
			});
			var g = (e, t, o) => Object(p.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_description.json`,
				method: l.hb.POST,
				data: {
					collection_id: t,
					description: o
				}
			});
			var k = (e, t, o) => Object(p.a)(Object(u.a)(e, [m.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/update_collection_display_layout.json`,
					method: l.hb.POST,
					data: {
						collection_id: t,
						display_layout: o
					}
				}),
				E = o("./src/reddit/helpers/overlay/index.ts"),
				j = o("./src/reddit/helpers/path/index.ts"),
				w = o("./src/reddit/models/Toast/index.ts"),
				I = o("./src/reddit/selectors/postCollection.ts"),
				y = o("./src/reddit/selectors/posts.ts"),
				P = o("./src/reddit/selectors/subreddit.ts");
			const T = Object(i.a)(a.c),
				N = Object(i.a)(a.b),
				S = Object(i.a)(a.d),
				M = (e, t) => async (o, s, {
					apiContext: n
				}) => {
					o(T());
					const r = await h(n(), e, t);
					let i;
					if (r.ok) {
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
							}))(r.body);
						o(S({
							collection: t,
							meta: e
						})), i = t
					} else {
						const e = r.error;
						o(N(e))
					}
					return i
				}, F = Object(i.a)(a.f), R = e => async (t, o, {
					apiContext: n
				}) => {
					const r = o().postCollection.subredditToIds || {};
					if (Object.keys(r).length > 0) return;
					const i = await v(n(), e);
					i.ok ? t(F(i.body)) : t(Object(c.f)({
						kind: w.b.Error,
						text: s.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, A = Object(i.a)(a.g), L = (e, t, o) => async (n, r, {
					apiContext: i
				}) => {
					if ((await C(i(), e, t)).ok) {
						const i = r(),
							a = Object(y.F)(i, {
								postId: t
							}),
							d = a && a.title || "",
							l = Object(I.q)(i, {
								collectionId: e
							}),
							p = (l && l.postIds && l.postIds.indexOf(t) || -1) - 1;
						if (n(A({
								collectionId: e,
								postId: t
							})), o && p >= 0) {
							const t = r(),
								o = Object(I.q)(t, {
									collectionId: e
								}),
								s = o && o.postIds && o.postIds[p] || "",
								i = Object(y.F)(t, {
									postId: s
								});
							i && i.permalink && n(Object(E.a)(i.permalink))
						}
						n(Object(c.f)({
							kind: w.b.SuccessMod,
							text: s.fbt._("Following post removed from collection successfully: {postTitle}", [s.fbt._param("postTitle", d)], {
								hk: "8e1lV"
							}),
							buttonText: s.fbt._("UNDO", null, {
								hk: "3KPLib"
							}),
							buttonAction: W(e, t)
						}))
					} else n(Object(c.f)({
						kind: w.b.Error,
						text: s.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, D = Object(i.a)(a.a), B = Object(i.a)(a.t), W = (e, t) => async (o, n, {
					apiContext: r
				}) => {
					const i = n();
					if ((await b(r(), e, t)).ok) {
						o(D({
							collectionId: e,
							postId: t
						})), o(B({
							collectionId: e,
							postId: t
						}));
						const n = Object(y.F)(i, {
								postId: t
							}),
							r = Object(I.q)(i, {
								collectionId: e
							}),
							a = r && r.title || "";
						o(Object(c.f)({
							kind: w.b.SuccessMod,
							text: s.fbt._("Success! You added a post to the collection: {title}", [s.fbt._param("title", a)], {
								hk: "3KNJWi"
							}),
							buttonText: s.fbt._("VIEW", null, {
								hk: "1SSkgL"
							}),
							buttonAction: Object(E.a)(n.permalink)
						}))
					} else o(Object(c.f)({
						kind: w.b.Error,
						text: s.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, V = Object(i.a)(a.e), U = (e, t) => async (o, i, {
					apiContext: a
				}) => {
					const d = i();
					if ((await f(a(), e)).ok) {
						const {
							url: i
						} = d.platform.currentPage, a = Object(I.q)(d, {
							collectionId: e
						}), l = a && a.title || "", p = a && a.subredditId, u = p ? Object(P.c)(d, p) : "/";
						o(V({
							collectionId: e,
							collection: a
						})), o(t ? Object(n.c)(Object(r.a)(i, ["collection"])) : Object(n.b)(u)), o(Object(c.f)({
							kind: w.b.SuccessMod,
							text: s.fbt._("Collection deleted successfully: {title}", [s.fbt._param("title", l)], {
								hk: "4tcOKB"
							})
						}))
					} else o(Object(c.f)({
						kind: w.b.Error,
						text: s.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, G = Object(i.a)(a.r), H = Object(i.a)(a.n), q = Object(i.a)(a.s), K = (e, t) => async (o, n, {
					apiContext: r
				}) => {
					o(G());
					const i = await O(r(), e, t);
					let a = !1;
					if (i.ok) o(q({
						collectionId: e,
						newTitle: t
					})), o(Object(c.f)({
						kind: w.b.SuccessMod,
						text: s.fbt._("Collection title updated successfully", null, {
							hk: "2hKzKl"
						})
					})), a = !0;
					else {
						const e = i.error;
						o(H(e)), o(Object(c.f)({
							kind: w.b.Error,
							text: s.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))
					}
					return a
				}, J = Object(i.a)(a.l), z = Object(i.a)(a.m), Q = Object(i.a)(a.k), Y = e => async (t, o) => {
					const s = o().platform.currentPage.locationState;
					t(!(!s || !s[d.a.IsOverlay]) ? Object(E.a)(e.permalink) : Object(n.b)(Object(j.b)(e.permalink)))
				}, X = Object(i.a)(a.i), Z = Object(i.a)(a.j), $ = Object(i.a)(a.h), ee = Object(i.a)(a.p), te = Object(i.a)(a.o), oe = Object(i.a)(a.q), se = e => async t => {
					const o = [],
						{
							collectionId: n,
							description: r,
							displayLayout: i,
							postIds: a,
							title: d
						} = e;
					a && o.push(t(((e, t) => async (o, n, {
						apiContext: r
					}) => {
						o(X());
						const i = await _(r(), e, t);
						let a = !1;
						return i.ok ? (o(Z({
							collectionId: e,
							postIds: t
						})), o(Object(c.f)({
							kind: w.b.SuccessMod,
							text: s.fbt._("Collection order updated successfully", null, {
								hk: "4ccHEL"
							})
						})), a = !0) : (o($({
							error: i.error
						})), o(Object(c.f)({
							kind: w.b.Error,
							text: s.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))), a
					})(n, a))), d && o.push(t(K(n, d))), void 0 !== r && o.push(t(((e, t) => async (o, n, {
						apiContext: r
					}) => {
						o(J());
						const i = await g(r(), e, t);
						let a = !1;
						if (i.ok) o(z({
							collectionId: e,
							newDescription: t
						})), o(Object(c.f)({
							kind: w.b.SuccessMod,
							text: s.fbt._("Collection description updated successfully", null, {
								hk: "1rIDCC"
							})
						})), a = !0;
						else {
							const e = i.error;
							o(Q(e)), o(Object(c.f)({
								kind: w.b.Error,
								text: s.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return a
					})(n, r))), i && o.push(t(((e, t) => async (o, n, {
						apiContext: r
					}) => {
						o(ee());
						const i = await k(r(), e, t);
						let a = !1;
						if (i.ok) o(oe({
							collectionId: e,
							newLayout: t
						})), o(Object(c.f)({
							kind: w.b.SuccessMod,
							text: s.fbt._("Collection layout updated successfully", null, {
								hk: "1Rs19j"
							})
						})), a = !0;
						else {
							const e = i.error;
							o(te(e)), o(Object(c.f)({
								kind: w.b.Error,
								text: s.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return a
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
				return F
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
				u = o("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				m = o("./src/reddit/models/RichTextJson/addRTJParam.ts");
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
			var v = (e, t) => Object(c.a)(Object(d.a)(e, [l.a]), {
					endpoint: Object(m.a)(Object(p.a)(`${e.apiUrl}/api/editusertext`)),
					method: a.hb.POST,
					data: x(t)
				}).then(u.b),
				C = o("./src/reddit/helpers/overlay/index.ts"),
				O = o("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				_ = o("./src/reddit/helpers/trackers/lightbox.ts"),
				g = o("./src/reddit/helpers/trackers/post.ts"),
				k = o("./src/reddit/helpers/trackers/postComposer.ts"),
				E = o("./src/reddit/models/Media/index.ts"),
				j = o("./src/reddit/models/PostCreationForm/index.ts"),
				w = o("./src/reddit/models/Toast/index.ts"),
				I = o("./src/reddit/selectors/posts.ts"),
				y = o("./src/reddit/actions/postCreation/constants.ts"),
				P = o("./src/reddit/actions/postCreation/general.ts");
			const T = Object(n.a)(y.l),
				N = Object(n.a)(y.m),
				S = Object(n.a)(y.x),
				M = Object(n.a)(y.D),
				F = Object(n.a)(y.E),
				R = (e, t) => async (o, s, {
					apiContext: n
				}) => {
					const r = s(),
						i = Object(I.F)(r, {
							postId: e
						});
					t ? (o(Object(C.a)(i.permalink)), Object(_.e)(e, "edit")(r)) : Object(g.d)(e, "edit")(r);
					const {
						media: a
					} = i;
					if (!a) return;
					let c, d = j.h.RICH_TEXT,
						l = "";
					a.type === E.o.TEXT ? (d = j.h.MARKDOWN, l = a.content) : a.type === E.o.RTJSON && (l = (d = a.rteMode || j.h.RICH_TEXT) === j.h.MARKDOWN ? a.markdownContent : a.richtextContent, c = a.mediaMetadata || void 0), o(M({
						editorMode: d,
						mediaMetadata: c,
						postContent: l,
						postId: e
					}))
				}, A = e => async (t, o, {
					apiContext: n
				}) => {
					const {
						post: a
					} = e, c = !a.media || "rtjson" !== a.media.type && "text" !== a.media.type ? "" : a.media.rteMode;
					k.u(o(), Object(P.m)(c)), t(S(a.id));
					const d = await v(n(), e),
						l = !1 === d.body.success;
					if (t(T(a.id)), d.ok && !l) {
						t(Object(i.f)({
							kind: w.b.SuccessCommunity,
							text: s.fbt._("Post successfully edited", null, {
								hk: "xej5K"
							})
						})), t(F(a.id));
						const e = Object(O.a)(d.body);
						t(Object(r.T)({
							[a.id]: e
						}))
					} else t(N(d.error))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/streams.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return u
			})), o.d(t, "a", (function() {
				return C
			})), o.d(t, "b", (function() {
				return O
			})), o.d(t, "d", (function() {
				return _
			})), o.d(t, "e", (function() {
				return g
			})), o.d(t, "f", (function() {
				return E
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
				u = e => {
					const t = location && location.search || "",
						o = n.a.parse(t);
					p.has(e) && (o.related = e);
					const s = n.a.stringify(o);
					return s ? `?${s}` : ""
				},
				m = Object(r.a)(i.N),
				b = Object(r.a)(i.y),
				h = Object(r.a)(i.O),
				f = Object(r.a)(i.z),
				x = Object(r.a)(i.M),
				v = Object(r.a)(i.L),
				C = Object(r.a)(i.t),
				O = Object(r.a)(i.u),
				_ = e => async (t, o, {
					gqlContext: s
				}) => {
					const n = Object(c.g)(e),
						r = o();
					if (Object(d.d)(r, n)) return;
					t(m(n));
					const i = await Object(a.e)(s(), n),
						l = Date.now();
					if (i.ok && i.body && i.body.data) {
						const e = i.body.data;
						t(b({
							model: e,
							utcTimeStamp: l
						}))
					} else t(w({
						streamId: n,
						error: i.error,
						utcTimeStamp: l
					}))
				}, g = (e, t) => async (o, s) => o(k(e, t)), k = (e, t) => async (o, s, {
					gqlContext: n
				}) => {
					const r = s();
					if (Object(d.f)(r)) return;
					o(h());
					const i = await Object(a.f)(n(), e, t),
						c = Date.now();
					if (i.ok && i.body && i.body.data) {
						const t = i.body.data;
						o(f({
							listingName: e,
							models: t,
							utcTimeStamp: c
						}))
					} else o(I({
						error: i.error,
						utcTimeStamp: c
					}))
				}, E = (e, t) => async (o, s) => o(j(e, t)), j = (e, t) => async (o, s, {
					gqlContext: n
				}) => {
					const r = s();
					if (Object(d.f)(r)) return;
					o(h());
					const i = Date.now(),
						c = e.replace("r/", ""),
						p = Object(l.D)(r, c),
						u = await Object(a.b)(n(), {
							subredditId: p,
							options: t
						}),
						m = u.body;
					u.ok && m && m.data || o(I({
						error: u.error,
						utcTimeStamp: i
					}));
					const b = m.data.liveVideoFeed.posts.edges.map(e => (async (e, t) => {
							const o = await Object(a.e)(e, t),
								s = Date.now(),
								n = o.body;
							return n && n.data ? n.data : void w({
								streamId: t,
								error: o.error,
								utcTimeStamp: s
							})
						})(n(), e.node.id)),
						x = (await Promise.all(b)).filter(e => void 0 !== typeof e);
					o(f({
						listingName: e,
						models: x,
						utcTimeStamp: i
					}))
				}, w = e => async t => {
					t(x(e))
				}, I = e => async t => {
					t(v(e))
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
			const n = Object(s.a)(() => o.e("ReportFlow").then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				r = Object(s.a)(() => o.e("ReportFlow").then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(s.a)(() => o.e("ReportFlow").then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
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
			var s = o("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./node_modules/react/index.js"),
				i = o.n(r),
				a = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/reselect/es/index.js"),
				d = o("./src/lib/classNames/index.ts"),
				l = o("./src/reddit/selectors/chatPost.ts"),
				p = o("./src/reddit/components/CommentsChat/LiveIcon/index.m.less"),
				u = o.n(p);
			const m = .1,
				b = Object(c.c)({
					isChatPost: l.d
				}),
				h = Object(a.b)(b);
			class f extends i.a.Component {
				constructor(e) {
					super(e), this.onVisibilityChange = e => {
						e.isIntersecting && e.intersectionRatio >= m ? this.state.visible || this.setState({
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
					} = this.props, o = t && e;
					return t ? i.a.createElement(s.a, {
						rootMargin: "20px 0px 20px 0px",
						threshold: m,
						onChange: this.onVisibilityChange
					}, i.a.createElement("div", {
						className: Object(d.a)(u.a.Icon, this.props.className)
					}, i.a.createElement("span", {
						className: Object(d.a)(u.a.Animate, u.a.top, {
							[u.a.play]: o
						})
					}, i.a.createElement("span", {
						className: u.a.bigCircle
					}), i.a.createElement("span", {
						className: u.a.midCircle
					}), i.a.createElement("span", {
						className: u.a.smallCircle
					})), i.a.createElement("p", {
						className: u.a.IconText
					}, n.fbt._("Live Discussion", null, {
						hk: "2akFwx"
					})), i.a.createElement("span", {
						className: Object(d.a)(u.a.Animate, u.a.bottom, {
							[u.a.play]: o
						})
					}, i.a.createElement("span", {
						className: u.a.bigCircle
					}), i.a.createElement("span", {
						className: u.a.midCircle
					}), i.a.createElement("span", {
						className: u.a.smallCircle
					})))) : null
				}
			}
			t.a = h(f)
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
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/react/index.js"),
				r = o.n(n),
				i = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = o("./node_modules/reselect/es/index.js"),
				d = o("./src/lib/classNames/index.ts"),
				l = o("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = o("./src/lib/prettyPrintNumber/index.ts"),
				u = o("./src/realtime/GQLSubscription/async.tsx"),
				m = o("./src/reddit/actions/post.ts"),
				b = o("./src/reddit/components/CountAnimation/index.tsx"),
				h = o("./src/reddit/constants/componentTestIds.ts"),
				f = o("./src/reddit/constants/experiments.ts"),
				x = o("./src/reddit/constants/postLayout.ts"),
				v = o("./src/reddit/helpers/path/index.ts"),
				C = o("./src/reddit/helpers/trackers/post.ts"),
				O = o("./src/reddit/hooks/useClickSourceData.ts"),
				_ = o("./src/reddit/hooks/useExperimentVariant.ts"),
				g = o("./src/reddit/hooks/useTracking.ts"),
				k = o("./src/reddit/icons/fonts/Comment/index.tsx"),
				E = o("./src/reddit/selectors/chatPost.ts"),
				j = o("./src/reddit/selectors/experiments/postSeo.ts"),
				w = o("./src/reddit/selectors/posts.ts"),
				I = o("./src/reddit/selectors/user.ts"),
				y = o("./src/reddit/components/CommentsLink/index.m.less"),
				P = o.n(y);
			const T = () => 0,
				N = Object(i.b)(() => Object(c.c)({
					isChatPost: E.d,
					isPostSEOEligible: j.e,
					postPermalink: w.E,
					shouldOpenPostInNewTab: I.bb
				})),
				S = ({
					hasModPostPerms: e,
					isCountAnimShadowTestEnabled: t,
					isChatPost: o,
					isCommentCountAnimation: a,
					modModeEnabled: c,
					numComments: l,
					postId: h,
					shouldShowIcon: f,
					shouldShowText: v,
					text: O,
					type: _
				}) => {
					let E;
					E = O || (_ === x.g.Compact || o || c && e ? Object(p.b)(l) : s.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [s.fbt._plural(l, "number", Object(p.b)(l))], {
						hk: "1QeOde"
					}));
					const j = Object(i.d)(),
						w = Object(n.useCallback)(e => {
							const {
								commentCountChange: t
							} = e.subscribe.data;
							0 !== t && j(Object(m.J)({
								postId: h,
								delta: t
							}))
						}, [j, h]),
						I = Object(n.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "POST_COUNT_UPDATE",
									postID: h
								}
							}
						}),
						y = Object(g.a)(),
						N = Object(n.useCallback)(() => {
							y(Object(C.a)(h))
						}, [y, h]);
					return r.a.createElement(n.Fragment, null, f && r.a.createElement(k.a, {
						className: P.a.commentIcon,
						role: "presentation"
					}), v && r.a.createElement("span", {
						className: P.a.text
					}, a ? r.a.createElement(b.a, {
						initialDisplayCount: l,
						countToUpperBound: l,
						initialDelay: T,
						subsequentRecurringDelay: T,
						incrementDelta: T,
						shouldDisjointAnimation: !0,
						inViewPortAnimatingCallbackOnce: N
					}) : E, (a || t) && r.a.createElement(u.a, {
						variables: I.current,
						onData: a ? w : T,
						queryKey: "postCommentCount"
					})), v && (!c || !e) && a && r.a.createElement("span", {
						className: Object(d.a)(P.a.text, P.a.commentsText)
					}, s.fbt._("comments", null, {
						hk: "ZQ8MY"
					})))
				};
			t.a = N(e => {
				const {
					className: t,
					hasModPostPerms: o,
					forceOpenInNewTab: s,
					isChatPost: n,
					isCommentPermalink: i,
					isCommentsPage: c,
					isOverlay: p,
					isPostSEOEligible: u,
					modModeEnabled: m,
					numComments: b,
					onClick: x,
					postPermalink: C,
					shouldOpenPostInNewTab: g,
					shouldShowIcon: k = !0,
					shouldShowText: E = !0,
					text: j,
					type: w,
					postId: I,
					isCommentCountAnimation: y,
					isCountAnimShadowTestEnabled: T
				} = e, N = c && !i && !u, M = i && !p, F = Object(O.a)(), R = Object(_.a)(f.gc) === f.kc.Enabled, A = r.a.createElement(S, {
					hasModPostPerms: o,
					isCountAnimShadowTestEnabled: !!T,
					isChatPost: n,
					isCommentCountAnimation: !!y,
					modModeEnabled: m,
					numComments: b,
					postId: I,
					shouldShowIcon: k,
					shouldShowText: E,
					text: j,
					type: w
				});
				return N ? r.a.createElement("div", {
					className: Object(d.a)(P.a.commentsLink, P.a.defaultCursorWrapper, t),
					onClick: x
				}, A) : r.a.createElement(a.a, {
					rel: "nofollow",
					"data-click-id": "comments",
					"data-test-id": h.a,
					className: Object(d.a)(P.a.commentsLink, P.a.link, t),
					target: s || g ? "_blank" : void 0,
					to: M ? Object(v.b)(C) : R ? Object(l.a)(C, !0, F) : Object(l.a)(C),
					onClick: x
				}, A)
			})
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, o) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/react/index.js"),
				r = o.n(n),
				i = o("./src/higherOrderComponents/asModal/index.tsx"),
				a = o("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = o("./src/reddit/controls/TextButton/index.tsx"),
				d = o("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = o("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				p = o.n(l);
			const u = e => e.preventDefault();
			t.a = Object(i.a)(e => r.a.createElement(a.d, null, r.a.createElement(a.h, null, r.a.createElement(d.a, null, r.a.createElement(a.p, null, e.headerText || s.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(a.b, null)))), r.a.createElement(a.k, null, r.a.createElement(a.o, {
				className: p.a.ModalText
			}, e.modalText)), r.a.createElement(a.f, null, !e.hideCancelButton && r.a.createElement(a.a, {
				className: p.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || s.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(a.t, {
				className: p.a.buttonWidth,
				onMouseDown: u,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.actionText))))
		},
		"./src/reddit/components/ContentTooltip/index.m.less": function(e, t, o) {
			e.exports = {
				StyledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				styledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				fadeIn: "_2bkYZH_kJx5pIHW0Ts5P6e",
				caretOnBottom: "_1rF-A55THyDL-rQ9ZUDQ4_",
				caretOnTop: "_1MHCyMQAMeqRqf5DPWWeq3",
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
				c = o("./src/higherOrderComponents/asTooltip.tsx"),
				d = o("./src/lib/classNames/index.ts"),
				l = o("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = o("./src/lib/fastdom/index.ts"),
				u = o("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = o("./src/reddit/selectors/tooltip.ts"),
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
				C = Object(l.a)(e => {
					const {
						children: t,
						className: o,
						style: s,
						caretPosition: n,
						caretColor: i,
						onClick: a,
						...c
					} = e;
					return r.a.createElement("div", f({
						onClick: a,
						className: Object(d.a)(o, h.a.StyledTooltipContainer, {
							[h.a.caretOnTop]: "top" === n,
							[h.a.caretOnLeft]: "left" === n,
							[h.a.caretOnRight]: "right" === n,
							[h.a.caretOnBottom]: "bottom" === n
						}),
						style: {
							...s,
							"--contentTooltip-caretColor": i && i[n] ? i[n] : Object(u.a)(e).body
						}
					}, c), t)
				}),
				O = Object(a.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(m.b)(t)(e)
				}),
				_ = Object(c.a)(C, [s.a.Click, s.a.Keydown]),
				g = Object(i.b)(O);
			class k extends r.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = x
						} = this.props;
						p.a.read(() => {
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
						tooltipPosition: o,
						caretPosition: s
					} = this.getPositions(e);
					return r.a.createElement(_, f({}, this.props, {
						caretPosition: s,
						targetPosition: t,
						tooltipPosition: o
					}))
				}
			}
			t.a = g(k)
		},
		"./src/reddit/components/Flatlist/ResponsiveRow.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				a = o("./src/reddit/controls/Dropdown/Row.tsx"),
				c = o("./src/reddit/components/Flatlist/index.m.less"),
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
			t.a = ({
				flatlistItem: e,
				isLoggedIn: t,
				isUserOp: o,
				noBreakpoints: s,
				...c
			}) => n.a.createElement("div", {
				"data-ignore-click": !!c.searchIgnoreClick,
				className: d.a.rowContainer
			}, n.a.createElement(a.a, l({}, c, {
				className: s ? d.a.responsiveRow : Object(r.a)(d.a.responsiveRow, Object(i.b)({
					flatlistItem: e,
					isLoggedIn: t,
					isUserOp: o
				}))
			})))
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
					e.EditPost = "EDITPOST", e.EditFlair = "EDITFLAIR", e.Save = "SAVE", e.Gild = "GILD", e.Hide = "HIDE", e.PostOverflowMenu = "POST_OVERFLOW_MENU", e.Report = "REPORT", e.Share = "SHARE"
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
					[d.a.Share]: n.Second
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
		"./src/reddit/components/Flatlist/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return fe
			})), o.d(t, "a", (function() {
				return xe
			})), o.d(t, "d", (function() {
				return ge
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
				u = o("./src/lib/timezone/index.ts"),
				m = o("./src/reddit/actions/gold/modals.ts"),
				b = o("./src/reddit/actions/modal.ts"),
				h = o("./src/reddit/actions/post.ts"),
				f = o("./src/reddit/actions/postCreation/editing.ts"),
				x = o("./src/reddit/actions/postFlair.ts"),
				v = o("./src/reddit/actions/reportFlow/index.ts"),
				C = o("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				O = o("./src/reddit/components/CommentsLink/index.tsx"),
				_ = o("./src/reddit/hooks/useTracking.ts"),
				g = o("./src/reddit/helpers/trackers/freeAwardOffer.ts"),
				k = o("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				E = o("./src/reddit/components/ContentTooltip/index.tsx"),
				j = o("./src/reddit/components/GiveAwardTooltip/index.m.less"),
				w = o.n(j);
			const {
				fbt: I
			} = o("./node_modules/fbt/lib/FbtPublic.js");
			var y = e => {
					const {
						tooltipId: t
					} = e, o = Object(i.e)(k.b), s = Object(_.a)();
					return Object(n.useEffect)(() => {
						o && s(Object(g.c)())
					}, [o, s]), o ? r.a.createElement(E.a, {
						className: w.a.freeAwardTooltip,
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
						className: w.a.freeAwardContainer
					}, I._("Tap to give your {award name} Award", [I._param("award name", o.name)], {
						hk: "2EMqbP"
					}))) : null
				},
				P = o("./src/reddit/components/ModActionsMenu/index.tsx"),
				T = o("./src/reddit/components/ModModeReports/helpers.ts"),
				N = o("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				S = o("./src/reddit/components/PostFlairPicker/index.tsx"),
				M = o("./src/reddit/components/PostModModeDropdown/index.tsx"),
				F = o("./src/reddit/components/PostOverflowMenu/index.tsx"),
				R = o("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				A = o("./src/reddit/components/ShareMenu/index.tsx"),
				L = o("./src/reddit/components/TrackingHelper/index.tsx"),
				D = o("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				B = o("./src/reddit/constants/postLayout.ts"),
				W = o("./src/reddit/contexts/PageLayer/index.tsx"),
				V = o("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				U = o("./src/reddit/helpers/styles/smartTextColor.ts"),
				G = o("./src/reddit/selectors/user.ts"),
				H = o("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				q = o("./src/reddit/helpers/correlationIdTracker.ts"),
				K = o("./src/reddit/helpers/trackers/modTools.ts"),
				J = o("./src/reddit/helpers/trackers/post.ts"),
				z = o("./src/reddit/icons/fonts/index.tsx"),
				Q = o("./src/reddit/icons/fonts/ModActions/index.tsx"),
				Y = o("./src/reddit/icons/fonts/Share/index.tsx"),
				X = o("./src/reddit/models/Media/index.ts"),
				Z = o("./src/reddit/models/NewStructuredStyles/index.ts"),
				$ = o("./src/reddit/models/PostCreationForm/index.ts"),
				ee = o("./src/reddit/models/User/index.ts"),
				te = o("./src/reddit/components/Flatlist/constants.ts"),
				oe = o("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				se = o("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				ne = o("./src/reddit/actions/postCollection/index.ts"),
				re = o("./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx"),
				ie = o("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx"),
				ae = o("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				ce = o("./src/reddit/selectors/activeModalId.ts"),
				de = o("./src/reddit/components/Flatlist/index.m.less"),
				le = o.n(de);

			function pe() {
				return (pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			let ue, me;
			const be = p.a.button("ShareButton", le.a),
				he = p.a.wrapped(A.a, "ShareMenu", le.a),
				fe = Object(l.a)(({
					className: e,
					...t
				}) => r.a.createElement(Q.a, pe({}, t, {
					className: Object(c.a)(le.a.modActionsIcon, e),
					style: {
						color: Object(U.a)(Object(V.a)(t), Z.a.actionIcon, Z.b.actionIcon)
					}
				}))),
				xe = e => r.a.createElement("div", pe({}, e, {
					className: Object(c.a)(le.a.flatlistSeparator, e.className)
				})),
				ve = Object(W.t)({
					currentProfileName: W.h,
					isCommentPermalink: W.v,
					isCommentsPage: W.w,
					isProfilePostListing: W.I,
					pageLayer: e => e
				}),
				Ce = Object(a.c)({
					activeModalId: ce.a,
					claimedFreeAward: k.b,
					layout: W.O,
					userIsOp: G.pb,
					subreddit: W.q
				}),
				Oe = Object(i.b)(Ce, (e, {
					post: t,
					isOverlay: s,
					isCommentsPage: n
				}) => ({
					addPostToCollection: (t, o) => e(Object(ne.a)(t, o)),
					onToggleModal: t => e(Object(b.i)(t)),
					onToggleSave: () => e(Object(h.V)(t.postId)),
					onHide: o => e(Object(h.ab)(t.postId, !t.hidden, s, !0)),
					onReportClick: () => e(Object(v.c)(t.postId, s)),
					onEdit: () => {
						const o = !s && !n;
						e(Object(f.a)(t.postId, o))
					},
					onFlairPost: () => e(Object(b.i)(Object(S.b)(t.postId, s))),
					onGildClick: (o, s) => e(Object(m.d)({
						awardId: s,
						correlationId: o,
						thingId: t.postId
					})),
					onFlairChanged: ({
						selectedTemplateId: o,
						previewFlair: s
					}) => e(Object(x.h)({
						post: t,
						selectedTemplateId: o,
						previewFlair: s
					})),
					toggleEditStartTimeModal: async () => {
						ue && me || ([ue, me] = await Promise.all([o.e("schedulePickerModal").then(o.bind(null, "./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx")).then(e => e.default), Promise.resolve().then(o.bind(null, "./src/reddit/actions/eventPosts/index.ts")).then(e => e.editEventTimeRequested)])), e(Object(b.i)(Object($.r)(t.postId, s, $.j.POST_OVERFLOW_MENU)))
					},
					addEventStartTime: o => {
						me && e(me(t.id, o))
					}
				}));
			class _e extends r.a.Component {
				constructor() {
					super(...arguments), this.handleGild = async () => {
						var e;
						const {
							onGildClick: t,
							post: s,
							sendEvent: n
						} = this.props;
						t(Object(q.d)(q.a.GildingFlow, !0), null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: r
						} = await Promise.resolve().then(o.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						n(r(s.id))
					}, this.onToggleCurrentModal = () => {
						this.props.activeModalId && this.props.onToggleModal(this.props.activeModalId)
					}, this.onToggleCollectionListModal = () => {
						const {
							isOverlay: e,
							post: t
						} = this.props, o = Object($.s)(t.id, e);
						this.props.onToggleModal(o)
					}, this.addPostToCollection = e => {
						this.props.addPostToCollection(e.id, this.props.post.id).then(() => this.onToggleCurrentModal())
					}, this.sendEventWithName = (e, t) => {
						const {
							hostPostData: o,
							isOverlay: s,
							listingKey: n,
							post: r,
							sendEvent: i
						} = this.props;
						i(Object(J.h)(r.id, e, s ? "post_detail" : "post", n, o, void 0, null == t ? void 0 : t.referralId))
					}, this.onSaveClick = () => {
						this.props.onToggleSave(), this.sendEventWithName(this.props.post.saved ? "unsave" : "save")
					}, this.onHideClick = () => {
						this.props.onHide(!!this.props.post.hidden), this.sendEventWithName(this.props.post.hidden ? "unhide" : "hide")
					}, this.onReportClick = () => {
						this.props.onReportClick(), this.sendEventWithName("report")
					}
				}
				render() {
					const {
						activeModalId: e,
						addEventStartTime: t,
						className: o,
						currentProfileName: n,
						currentUser: i,
						forceOpenInNewTab: a,
						hasModFlairPerms: l,
						hasModFullPerms: p,
						hasModPostPerms: m,
						isCommentPermalink: b,
						isCommentsPage: h,
						isCountAnimShadowTestEnabled: f,
						isLargePost: x,
						isOverlay: v,
						isProfilePostListing: _,
						isSticky: g,
						layout: k,
						modModeEnabled: E,
						onFlairChanged: j,
						onIgnoreReports: w,
						onOpenReportsDropdown: I,
						pageLayer: A,
						post: L,
						sendEvent: W,
						showEditFlair: V,
						showEditPost: U,
						subreddit: G,
						toggleEditStartTimeModal: q,
						tooltipType: Q,
						userIsOp: Z,
						searchIgnoreClick: ne,
						isCommentCountAnimation: ae
					} = this.props, ce = !!i && Object(ee.e)(i) === L.author, de = Object(se.a)("View--Reports", L.id, Q), pe = Object(se.a)(d.ic, L.id, Q), me = Object(T.c)(L), xe = ge("-mod-actions-menu", L.id, v, g), ve = Object(T.a)(L), Ce = L.postId, Oe = k === B.g.Large, _e = !h && Oe || m && E, ke = !(v || h || b), Ee = i && L.isGildable, je = L.media && L.media.type === X.o.LIVEVIDEO;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(c.a)(le.a.flatlistContainer, o)
					}, r.a.createElement(O.a, {
						className: Object(c.a)(le.a.rowContainer, le.a.commentsLink),
						forceOpenInNewTab: a,
						hasModPostPerms: m,
						isCommentsPage: h,
						isCommentPermalink: b,
						isOverlay: v,
						postId: L.id,
						modModeEnabled: E,
						numComments: L.numComments,
						isCommentCountAnimation: ae,
						isCountAnimShadowTestEnabled: f
					}), Ee && r.a.createElement(r.a.Fragment, null, r.a.createElement(H.a, {
						displayText: s.fbt._("Award", null, {
							hk: "2fZCpE"
						}),
						textClassName: le.a.responsiveRowText,
						flatlistItem: te.a.Gild,
						isLoggedIn: !!i,
						isUserOp: Z,
						onClick: this.handleGild,
						searchIgnoreClick: ne,
						skipRoleAttr: !0
					}, r.a.createElement(z.a, {
						name: "award",
						className: le.a.awardIcon,
						id: pe
					})), r.a.createElement(y, {
						postOrComment: L,
						tooltipId: pe
					})), r.a.createElement(he, {
						className: Object(c.a)(le.a.rowContainer, Object(oe.b)({
							flatlistItem: te.a.Share,
							isLoggedIn: !!i,
							isUserOp: Z
						})),
						dropdownId: ge("-share-menu", L.id, v, g),
						permalink: L.permalink,
						post: L,
						sendEventWithName: this.sendEventWithName,
						subreddit: G
					}, r.a.createElement(be, {
						"data-click-id": "share"
					}, r.a.createElement(Y.a, {
						className: le.a.shareIcon
					}), r.a.createElement("span", {
						className: le.a.shareText
					}, s.fbt._("share", null, {
						hk: "1eAfZg"
					})))), U && !_e && r.a.createElement(H.a, {
						displayText: s.fbt._("Edit post", null, {
							hk: "Jq2Cr"
						}),
						textClassName: le.a.responsiveRowText,
						flatlistItem: te.a.EditPost,
						isLoggedIn: !!i,
						isUserOp: Z,
						onClick: this.props.onEdit,
						skipRoleAttr: !0
					}, r.a.createElement(z.a, {
						name: "edit"
					})), (!m || !E) && r.a.createElement(H.a, {
						displayText: L.saved ? s.fbt._("unsave", null, {
							hk: "4Dn4IT"
						}) : s.fbt._("save", null, {
							hk: "3NOMst"
						}),
						textClassName: le.a.responsiveRowText,
						flatlistItem: te.a.Save,
						isLoggedIn: !!i,
						isUserOp: Z,
						onClick: this.onSaveClick,
						searchIgnoreClick: ne,
						skipRoleAttr: !0
					}, r.a.createElement(z.a, {
						name: L.saved ? "saved" : "save",
						className: le.a.saveIcon
					})), !L.isSponsored && !_e && r.a.createElement(H.a, {
						displayText: L.hidden ? s.fbt._("unhide", null, {
							hk: "151XLs"
						}) : s.fbt._("hide", null, {
							hk: "4AnA6R"
						}),
						textClassName: le.a.responsiveRowText,
						flatlistItem: te.a.Hide,
						isLoggedIn: !!i,
						isUserOp: Z,
						onClick: this.onHideClick,
						searchIgnoreClick: ne,
						skipRoleAttr: !0
					}, r.a.createElement(z.a, {
						name: "hide",
						isFilled: L.hidden
					})), !ce && !L.isSponsored && !_e && r.a.createElement(H.a, {
						displayText: s.fbt._("report", null, {
							hk: "1phfns"
						}),
						textClassName: le.a.responsiveRowText,
						flatlistItem: te.a.Report,
						isLoggedIn: !!i,
						isUserOp: Z,
						onClick: this.onReportClick,
						searchIgnoreClick: ne,
						skipRoleAttr: !0
					}, r.a.createElement(z.a, {
						name: "report"
					})), r.a.createElement(N.a, {
						isOverlay: v,
						layout: k,
						modModeEnabled: E,
						post: L,
						sendEvent: W
					}), m && r.a.createElement(P.a, {
						dropdownId: xe,
						onClick: () => W(Object(J.h)(L.id, "post_mod_action_menu"))
					}, r.a.createElement(fe, null), r.a.createElement(M.a, {
						canEditFlair: l && !!V,
						hasModFullPerms: p,
						hasModPostPerms: m,
						isOverlay: !!v,
						isPostAuthor: ce,
						modModeEnabled: E,
						post: L,
						tooltipId: xe
					})), m && me && !E && r.a.createElement(R.c, {
						text: `${ve}`,
						onClick: () => {
							I(de), W(Object(J.h)(L.id, "post_report_menu"))
						},
						id: de
					}, r.a.createElement(D.a, {
						model: L,
						onIgnoreReports: () => {
							w(), W(Object(K.k)(L.ignoreReports ? "restore_reports" : "ignore_reports", L.id))
						},
						tooltipId: de
					}), r.a.createElement(z.a, {
						className: le.a.icon,
						name: L.ignoreReports ? "ignore_reports" : "report"
					})), !L.isSponsored && r.a.createElement("div", {
						className: le.a.overflowMenuContainer
					}, r.a.createElement(F.a, {
						currentProfileName: n,
						dropdownId: ge("-overflow-menu", L.id, v, g),
						isCommentsPage: h,
						isFixed: g,
						isOverlay: !!v,
						isProfilePostListing: _,
						layout: k,
						modModeWithPost: E && m,
						pageLayer: A,
						permalink: L.permalink,
						postId: Ce,
						sendEvent: W,
						showEditPost: !!U,
						showEditFlair: !!V,
						useFlatlistBreakpoints: this.props.useFlatlistBreakpoints,
						toggleAddEventStartTimeModal: q,
						toggleEditStartTimeModal: q
					})), e === Object($.s)(L.id, v) && r.a.createElement(re.a, {
						subredditId: L.belongsTo.id,
						onClose: this.onToggleCurrentModal,
						postId: L.id,
						onSelectCollection: this.addPostToCollection,
						titleText: s.fbt._("Add post to a collection", null, {
							hk: "38vSyF"
						}),
						onItemHoverActionText: s.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						isOverlay: v
					}), e === Object($.r)(L.id, v, $.j.POST_OVERFLOW_MENU) && ue && r.a.createElement(ue, {
						onChange: t,
						onClose: q,
						schedule: Object(u.c)(L),
						shouldShowDeleteButton: !1
					}), e === Object($.t)(L.id, v) && r.a.createElement(ie.a, {
						onCancel: this.onToggleCollectionListModal,
						onCollectionCreated: this.addPostToCollection,
						subredditId: L.belongsTo.id
					}), e === Object(S.b)(L.id, v) && r.a.createElement(S.a, {
						flairs: L.flair,
						subredditId: L.belongsTo.id,
						modalId: Object(S.b)(L.id, v),
						onFlairChanged: j
					}), r.a.createElement("div", {
						className: le.a.flexSpacer
					})), ke && !je && r.a.createElement(C.a, {
						className: Object(c.a)(le.a.liveDiscussionWrapper, {
							[le.a.large]: x
						}),
						isMod: m,
						postId: L.postId
					}))
				}
			}
			const ge = (e, t, o, s) => {
					let n = t;
					return o && (n += "-overlay"), s && (n += "-sticky"), n += e
				},
				ke = ve(Oe(Object(L.c)(_e)));
			t.c = r.a.memo((function(e) {
				const t = Object(ae.b)();
				return r.a.createElement(ke, pe({}, e, {
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
				u = o.n(p);
			const m = Object(i.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(l.b)(t)(e)
				}),
				b = Object(r.b)(m, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(a.h)({
						tooltipId: t
					}))
				})),
				h = () => null;
			t.a = b(e => n.a.createElement("div", {
				className: u.a.ModActionsMenu,
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
				u = o.n(p);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(s || (s = {})),
			function(e) {
				e.Approve = "ApproveGroup", e.Remove = "RemoveGroup", e.Spam = "SpamGroup", e.Flair = "FlairGroup"
			}(n || (n = {})),
			function(e) {
				e.Classic = "ClassicVariant", e.Compact = "CompactVariant", e.Default = "DefaultVariant"
			}(r || (r = {}));
			const m = {
					[a.a.Approve]: n.Approve,
					[a.a.Remove]: n.Remove,
					[a.a.Spam]: n.Spam,
					[a.a.Flair]: n.Flair
				},
				b = {
					[c.g.Classic]: r.Classic,
					[c.g.Compact]: r.Compact,
					[c.g.Large]: r.Default,
					[c.g.Medium]: r.Default
				},
				h = e => {
					const t = m[e.flatlistItem],
						o = e.postLayout && b[e.postLayout],
						s = l.a[e.breakpointType],
						n = l.a[t],
						a = o ? l.a[o] : l.a[r.Default];
					return Object(i.a)(s, n, a)
				},
				f = e => {
					const t = e && b[e],
						o = t ? l.a[t] : l.a[r.Default];
					return Object(i.a)(o, u.a.ButtonTextWrapper, l.a.ButtonTextWrapper)
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
				u = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = o("./src/reddit/components/JSAPIContainers/index.tsx"),
				b = o("./src/reddit/components/ModModeReports/helpers.ts"),
				h = o("./src/reddit/components/PostFlairPicker/index.tsx"),
				f = o("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				x = o("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				v = o("./src/reddit/helpers/trackers/post.ts"),
				C = o("./src/reddit/icons/fonts/Approve/index.tsx"),
				O = o("./src/reddit/icons/fonts/Spam/index.tsx"),
				_ = o("./src/reddit/icons/fonts/Tag/index.tsx"),
				g = o("./src/reddit/selectors/activeModalId.ts"),
				k = o("./src/reddit/selectors/moderatorPermissions.ts"),
				E = o("./src/reddit/selectors/postFlair.ts"),
				j = o("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				w = o("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				I = o("./src/lib/constants/index.ts"),
				y = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				P = o("./src/reddit/hooks/useTracking.ts"),
				T = o("./src/reddit/icons/fonts/Remove/index.tsx"),
				N = o("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				S = o.n(N);
			const M = (e, t) => e ? t === I.k ? s.fbt._("Confirm removal", null, {
					hk: "1t5tKM"
				}) : s.fbt._("removed", null, {
					hk: "35ZTch"
				}) : s.fbt._("remove", null, {
					hk: "3LWMcS"
				}),
				F = ({
					className: e,
					textClassName: t,
					isOverlay: o,
					iconOnly: n,
					post: a
				}) => {
					var c;
					const [d, m] = r.a.useState(!1), b = Object(P.a)(), h = Object(i.d)(), x = () => {
						m(!1), h(Object(l.U)(a.id, !1)), a.isRemoved && a.bannedBy === I.k ? b(Object(v.h)(a.id, "confirm_remove")) : b(Object(v.h)(a.id, "remove"))
					}, C = () => h(Object(p.h)({
						tooltipId: O
					})), O = R("Remove", a.id, o), _ = r.a.useMemo(() => {
						var e;
						const t = (null === (e = a.pollData) || void 0 === e ? void 0 : e.totalVoteCount) || 0;
						return 0 === t ? s.fbt._("WARNING: Removing this post will cancel prediction for all participating users.", null, {
							hk: "2eYiVW"
						}) : 1 === t ? s.fbt._("WARNING: Removing this post will cancel prediction for all participating users. One user will receive a cancellation message.", null, {
							hk: "33BxvZ"
						}) : s.fbt._("WARNING: Removing this post will cancel prediction for all participating users. All {votedUsersCount} users will receive a cancellation message.", [s.fbt._param("votedUsersCount", t.toString())], {
							hk: "3JiV7T"
						})
					}, [null === (c = a.pollData) || void 0 === c ? void 0 : c.totalVoteCount]);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(f.d, {
						className: e,
						textClassName: t,
						key: "removeButton",
						id: O,
						text: n ? void 0 : M(a.isRemoved, a.bannedBy),
						disabled: a.isRemoved && a.bannedBy !== I.k,
						onMouseEnter: C,
						onMouseLeave: C,
						onClick: () => {
							a.pollData && a.pollData.isPrediction ? m(!0) : x()
						}
					}, r.a.createElement(T.a, null), r.a.createElement(u.c, {
						className: S.a.tooltip,
						tooltipId: O,
						text: M(a.isRemoved, a.bannedBy)
					})), d && r.a.createElement(y.a, {
						modalText: _,
						actionText: s.fbt._("Yes, cancel Prediction", null, {
							hk: "4b05Ke"
						}),
						headerText: s.fbt._("Remove prediction post", null, {
							hk: "4CKO9a"
						}),
						onConfirm: x,
						toggleModal: () => m(!d)
					}))
				},
				R = (e, t, o = !1) => `ModToolsFlatlist-${e}${t}${o?"inOverlay":""}`,
				A = (e, t) => Object(w.b)({
					breakpointType: w.a.HideIfVWSmaller,
					flatlistItem: e,
					postLayout: t
				}),
				L = Object(i.b)(() => Object(a.c)({
					activeModalId: g.a,
					canEditFlair: (e, {
						post: t
					}) => Object(E.a)(e, {
						postId: t.id
					}),
					moderatorPermissions: (e, t) => Object(k.k)(e, {
						postId: t.post.id
					})
				}), (e, {
					post: t
				}) => ({
					onApprovePost: () => e(Object(l.s)(t.id)),
					onOpenPostModModeDropdown: t => e(Object(p.h)({
						tooltipId: t
					})),
					onSpamPost: () => e(Object(l.U)(t.id, !0)),
					onFlairPost: t => () => e(Object(d.i)(t))
				}));
			t.a = L(e => {
				const {
					canEditFlair: t,
					className: o,
					isOverlay: a,
					layout: d,
					moderatorPermissions: l,
					modModeEnabled: g,
					onApprovePost: k,
					onFlairPost: E,
					onSpamPost: I,
					post: y,
					sendEvent: P,
					showIconsOnly: T
				} = e, N = Object(i.d)(), M = Object(x.a)(l), L = Object(b.b)(y), D = !(!y.approvedBy || !L), B = Object(h.b)(y.id, a), W = M && g && !y.isSponsored, V = t && g;
				let U, G;
				const H = R("Approve", y.id, a),
					q = R("Spam", y.id, a),
					K = () => N(Object(p.h)({
						tooltipId: H
					})),
					J = () => N(Object(p.h)({
						tooltipId: q
					}));
				T || (U = ((e, t) => e ? s.fbt._("reapprove", null, {
					hk: "OJvB1"
				}) : t ? s.fbt._("approved", null, {
					hk: "2bWAFI"
				}) : s.fbt._("approve", null, {
					hk: "2DIHcM"
				}))(D, y.approvedBy), G = (e => e ? s.fbt._("spammed", null, {
					hk: "3GPrkZ"
				}) : s.fbt._("spam", null, {
					hk: "3ebJLg"
				}))(y.isSpam));
				const z = a ? void 0 : d;
				return r.a.createElement("div", {
					className: Object(c.a)(S.a.container, o)
				}, W && r.a.createElement(n.Fragment, null, r.a.createElement(f.b, {
					className: A(j.a.Approve, z),
					key: "approveButton",
					text: U,
					textClassName: Object(w.c)(z),
					disabled: !!y.approvedBy && !L,
					id: H,
					onMouseEnter: K,
					onMouseLeave: K,
					onClick: () => {
						k(), P(Object(v.h)(y.id, "approve"))
					}
				}, r.a.createElement(C.a, null), r.a.createElement(u.c, {
					className: S.a.tooltip,
					tooltipId: H,
					text: U
				})), r.a.createElement(F, {
					className: A(j.a.Remove, z),
					textClassName: Object(w.c)(z),
					isOverlay: a,
					iconOnly: T,
					post: y
				}), r.a.createElement(f.d, {
					className: A(j.a.Spam, z),
					key: "removeSpamButton",
					text: G,
					textClassName: Object(w.c)(z),
					disabled: y.isSpam,
					id: q,
					onMouseEnter: J,
					onMouseLeave: J,
					onClick: () => {
						I(), P(Object(v.h)(y.id, "spam"))
					}
				}, r.a.createElement(O.a, null), r.a.createElement(u.c, {
					className: S.a.tooltip,
					tooltipId: q,
					text: G
				}))), V && r.a.createElement(f.c, {
					className: A(j.a.Flair, z),
					key: "tagButton",
					onClick: () => {
						E(B)(), P(Object(v.h)(y.id, "post_flair_picker"))
					}
				}, r.a.createElement(_.a, null)), r.a.createElement(m.f, null))
			})
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
				u = o("./src/reddit/controls/Dropdown/index.tsx"),
				m = o("./src/reddit/controls/Dropdown/Row.tsx"),
				b = o("./src/reddit/icons/fonts/index.tsx"),
				h = o("./src/reddit/selectors/tooltip.ts"),
				f = o("./src/reddit/components/OverflowMenu/index.m.less"),
				x = o.n(f);
			const v = d.a.wrapped(u.a, "_Dropdown", x.a),
				C = Object(p.a)(v),
				O = d.a.button("MenuButton", x.a),
				_ = d.a.wrapped(m.b, "DropdownRow", x.a),
				g = Object(a.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(h.b)(t)(e)
				}),
				k = Object(i.b)(g, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				E = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = k(e => r.a.createElement(O, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": s.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[x.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: E(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : r.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: x.a.MenuIcon
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
				u = o("./src/reddit/components/TrackingHelper/index.tsx"),
				m = o("./src/reddit/constants/keycodes.ts"),
				b = o("./src/reddit/controls/Button/index.tsx"),
				h = o("./src/reddit/controls/Input/index.tsx"),
				f = o("./src/reddit/icons/svgs/Close/index.tsx"),
				x = o("./src/reddit/icons/svgs/Plus/index.tsx"),
				v = o("./src/reddit/icons/svgs/Search/index.tsx"),
				C = o("./src/reddit/layout/row/Inline/index.tsx"),
				O = o("./src/reddit/models/PostCreationForm/index.ts"),
				_ = o("./src/reddit/selectors/postCollection.ts"),
				g = o("./src/lib/timeAgo/index.ts"),
				k = o("./src/reddit/controls/MetaSeparator/index.tsx"),
				E = o("./src/reddit/helpers/name/index.ts"),
				j = o("./src/reddit/models/Subreddit/index.ts"),
				w = o("./src/reddit/models/User/index.ts"),
				I = o("./src/reddit/selectors/subreddit.ts"),
				y = o("./src/reddit/selectors/user.ts"),
				P = o("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),
				T = o.n(P),
				N = o("./src/lib/lessComponent.tsx");
			const {
				fbt: S
			} = o("./node_modules/fbt/lib/FbtPublic.js"), M = N.a.div("Container", T.a), F = N.a.h2("PostTitle", T.a), R = N.a.div("MetaLine", T.a), A = N.a.span("SubredditName", T.a), L = N.a.time("InfoSpan", T.a), D = Object(c.c)({
				subreddit: (e, {
					collection: {
						subredditId: t
					}
				}) => t ? Object(I.S)(e, {
					subredditId: t
				}) : void 0,
				user: y.j
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
					} = this.props, n = t && Object(j.h)(t) && o ? Object(E.d)(Object(w.e)(o)) : t ? t.displayText : "", r = e.postIds.length;
					return i.a.createElement(M, {
						onClick: this.onClick,
						className: T.a.container
					}, i.a.createElement(F, {
						"data-redditstyle": !0
					}, e.title), i.a.createElement(R, {
						"data-redditstyle": !0
					}, n && i.a.createElement(A, {
						"data-redditstyle": !0
					}, n), n && i.a.createElement(k.b, null), i.a.createElement(L, null, S._({
						"*": "{number of posts} posts",
						_1: "1 post"
					}, [S._plural(r, "number of posts")], {
						hk: "1Uy96U"
					})), i.a.createElement(k.b, null), i.a.createElement(L, null, S._("created {time}", [S._param("time", Object(g.d)(e.createdAtUTC))], {
						hk: "2cUc5m"
					}))), s && i.a.createElement("div", {
						className: T.a.onHoverActionText
					}, i.a.createElement("span", null, s)))
				}
			}
			var W = Object(a.b)(D)(B),
				V = o("./src/reddit/helpers/trackers/postCollection.ts"),
				U = o("./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less"),
				G = o.n(U);
			const H = `${s.a.assetPath}/img/snoo-drafts.png`,
				q = N.a.div("TopRow", G.a),
				K = N.a.div("TitleRow", G.a),
				J = N.a.div("DetailsContainer", G.a),
				z = N.a.wrapped(C.a, "ButtonRow", G.a),
				Q = N.a.div("CloseWrapper", G.a),
				Y = N.a.wrapped(f.a, "Close", G.a),
				X = N.a.div("Empty", G.a),
				Z = N.a.img("EmptyImage", G.a),
				$ = N.a.p("EmptyText", G.a),
				ee = N.a.div("FilterWrapper", G.a),
				te = N.a.wrapped(h.a, "FilterInput", G.a),
				oe = N.a.wrapped(v.a, "SearchIcon", G.a),
				se = N.a.wrapped(x.a, "PlusIcon", G.a),
				ne = N.a.wrapped(b.m, "CreateCollectionButton", G.a),
				re = Object(l.a)((e, t) => {
					const o = t.toLowerCase();
					return e.filter(e => e.title.toLowerCase().includes(o))
				}),
				ie = Object(c.c)({
					collections: _.v
				}),
				ae = Object(a.b)(ie, (e, {
					postId: t,
					isOverlay: o
				}) => ({
					onOpenCreateCollectionModal: () => {
						let s = O.b;
						t && (s = Object(O.t)(t, !!o)), e(Object(p.x)(s))
					}
				}));
			class ce extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						filterStr: ""
					}, this.close = () => {
						this.props.sendEvent(Object(V.c)()), this.props.onClose()
					}, this.handleEscapeKey = e => {
						e.keyCode === m.a.Escape && this.close()
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
					return i.a.createElement(X, null, i.a.createElement(Z, {
						src: H
					}), i.a.createElement($, null, n.fbt._("Your collections will live here", null, {
						hk: "FCxWg"
					})))
				}
				renderNoFilterMatches() {
					return i.a.createElement(X, null, i.a.createElement($, null, n.fbt._("No collection matching filter", null, {
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
						className: G.a.wrapper,
						"data-redditstyle": !0
					}, i.a.createElement(q, null, i.a.createElement(K, {
						"data-redditstyle": !0
					}, t || n.fbt._("My collections", null, {
						hk: "3yKovS"
					}), i.a.createElement(Q, {
						onClick: this.close
					}, i.a.createElement(Y, {
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
			const de = Object(d.a)(ae(Object(u.c)(ce)));
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
				u = o("./src/reddit/constants/postCreation.ts"),
				m = o("./src/reddit/controls/Button/index.tsx"),
				b = o("./src/reddit/controls/ErrorText/index.tsx"),
				h = o("./src/reddit/controls/Input/index.tsx"),
				f = o("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = o("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				v = o("./src/reddit/icons/svgs/Close/index.tsx"),
				C = o("./src/reddit/layout/row/Inline/index.tsx"),
				O = o("./src/reddit/selectors/postCollection.ts"),
				_ = o("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less"),
				g = o.n(_),
				k = o("./src/lib/lessComponent.tsx");
			const E = k.a.div("Container", g.a),
				j = k.a.div("Content", g.a),
				w = k.a.div("TitleRow", g.a),
				I = k.a.div("Details", g.a),
				y = k.a.wrapped(p.f, "Footer", g.a),
				P = k.a.wrapped(m.l, "CancelButton", g.a),
				T = k.a.div("CloseWrapper", g.a),
				N = k.a.wrapped(v.a, "CloseIcon", g.a),
				S = k.a.label("Label", g.a),
				M = k.a.wrapped(h.a, "TitleInput", g.a),
				F = k.a.wrapped(x.a, "AddCollectionIcon", g.a),
				R = k.a.wrapped(m.i, "PrimaryActionButton", g.a),
				A = k.a.wrapped(f.a, "LoadingIcon", g.a),
				L = k.a.wrapped(b.b, "ErrorText", g.a),
				D = Object(a.c)({
					collection: O.q,
					error: O.c,
					isPending: O.g
				}),
				B = Object(i.b)(D, (e, t) => ({
					onCreate: (t, o) => e(Object(l.b)(t, o)),
					onUpdate: o => e(Object(l.h)(t.collectionId, o))
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
						hk: "2Onrrv"
					});
					return r.a.createElement(E, null, r.a.createElement(T, {
						onClick: this.props.onCancel
					}, r.a.createElement(N, null)), r.a.createElement(j, null, n && r.a.createElement(r.a.Fragment, null, r.a.createElement(w, null, r.a.createElement(F, null), s.fbt._("Create a collection", null, {
						hk: "3ndxk5"
					})), r.a.createElement(I, null, s.fbt._("Group posts into one feed. Create a series of events or just a group of random things. Make something awesome!", null, {
						hk: "2eCAQw"
					}))), r.a.createElement(S, null, n ? s.fbt._("Give a title for your collection", null, {
						hk: "Uaqbe"
					}) : s.fbt._("Edit title", null, {
						hk: "1jzweg"
					}), r.a.createElement(M, {
						maxLength: u.e,
						onChange: this.onTitleChange,
						placeholder: s.fbt._("Enter title", null, {
							hk: "3B0iRI"
						}),
						value: this.state.collectionTitle
					}))), r.a.createElement(y, null, r.a.createElement(C.a, null, r.a.createElement(P, {
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
			t.a = Object(c.a)(B(W))
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
				u = o("./src/reddit/components/FlairPickerTitle/index.tsx"),
				m = o("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				b = o("./src/reddit/components/FlairPreview/index.tsx"),
				h = o("./src/reddit/components/FlairSearch/index.tsx"),
				f = o("./src/reddit/controls/Button/index.tsx"),
				x = o("./src/reddit/models/Flair/index.ts"),
				v = o("./src/reddit/selectors/moderatorPermissions.ts"),
				C = o("./src/reddit/selectors/postFlair.ts"),
				O = o("./src/reddit/selectors/subreddit.ts"),
				_ = o("./src/reddit/selectors/telemetry.ts"),
				g = o("./src/reddit/components/PostFlairPicker/helpers.ts"),
				k = o("./src/reddit/components/PostFlairPicker/index.m.less"),
				E = o.n(k);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(s || (s = {}));
			const j = (e, t = !1, o = s.UNSET) => `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${o}]`,
				w = Object(c.c)({
					flairData: C.d,
					subreddit: O.S,
					isMod: (e, t) => !!Object(v.l)(e, t)
				});
			class I extends i.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.onApply = () => {
						const {
							previewFlair: e
						} = this.state, t = e && e.templateId;
						this.props.onFlairChanged({
							previewFlair: e,
							selectedTemplateId: t
						}), this.props.closeModal && this.props.closeModal(), this.track(this.getTrackingNoun("flairadd_mod", "flairadd_user"))
					}, this.onClear = () => this.setSelectedFlair(null), this.setSelectedFlair = e => {
						this.setState({
							previewFlair: e
						})
					}, this.track = e => this.props.sendEvent(t => ({
						source: "post_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(_.subredditById)(t, this.props.subredditId)
					}));
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
					return i.a.createElement(m.a, {
						className: o
					}, i.a.createElement(u.a, {
						onClosePressed: e.closeModal,
						title: n.fbt._("Select {subredditName} flair", [n.fbt._param("subredditName", a)], {
							hk: "1lDMWS"
						})
					}), i.a.createElement(b.a, {
						flair: t,
						flairTemplateType: x.d.LinkFlair,
						placeholderText: n.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), i.a.createElement(h.a, {
						flair: t,
						flairTemplateType: x.d.LinkFlair,
						subredditId: r.id,
						templates: c,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), i.a.createElement("div", {
						className: E.a.buttonsRow
					}, i.a.createElement(f.i, {
						disabled: !l,
						onClick: this.onApply
					}, n.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), i.a.createElement(f.l, {
						className: E.a.clearButton,
						onClick: this.onClear
					}, n.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const y = Object(a.b)(w, (e, t) => ({
				closeModal: () => e(Object(p.i)(t.modalId))
			}))(I);
			t.a = Object(l.a)(Object(d.c)(y))
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
				icon: "_2V4nGS1AmzWhA62lzdCu4r",
				PostCheckboxMenuItem: "_3fGEO8uLSvUJEOP4lDX35p",
				postCheckboxMenuItem: "_3fGEO8uLSvUJEOP4lDX35p"
			}
		},
		"./src/reddit/components/PostOverflowMenu/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return pe
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
				u = o("./src/config.ts"),
				m = o("./src/lib/addQueryParams/index.ts"),
				b = o("./src/lib/classNames/index.ts"),
				h = o("./src/lib/lessComponent.tsx"),
				f = o("./src/reddit/actions/eventPosts/index.ts"),
				x = o("./src/reddit/actions/gold/modals.ts"),
				v = o("./src/reddit/actions/modal.ts"),
				C = o("./src/reddit/actions/pinnedPost.ts"),
				O = o("./src/reddit/actions/post.ts"),
				_ = o("./src/reddit/actions/postCreation/editing.ts"),
				g = o("./src/reddit/actions/reportFlow/index.ts"),
				k = o("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				E = o("./src/reddit/constants/parameters.ts"),
				j = o("./src/reddit/constants/posts.ts"),
				w = o("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				I = o("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				y = o("./src/reddit/icons/fonts/index.tsx"),
				P = o("./src/reddit/components/OverflowMenu/index.tsx"),
				T = o("./src/reddit/components/ReportFlow/index.tsx"),
				N = o("./src/reddit/contexts/PageLayer/index.tsx"),
				S = o("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				M = o("./src/reddit/controls/Dropdown/Row.tsx"),
				F = o("./src/reddit/components/Flatlist/constants.ts"),
				R = o("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				A = o("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				L = o("./src/reddit/constants/postLayout.ts"),
				D = o("./src/reddit/helpers/correlationIdTracker.ts"),
				B = o("./src/reddit/helpers/isCrosspost.ts"),
				W = o("./src/reddit/helpers/postEvent.ts"),
				V = o("./src/reddit/helpers/trackers/post.ts"),
				U = o("./src/reddit/models/Post/index.ts"),
				G = o("./src/reddit/models/Subreddit/index.ts"),
				H = o("./src/reddit/selectors/activeModalId.ts"),
				q = o("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				K = o("./src/reddit/selectors/posts.ts"),
				J = o("./src/reddit/selectors/subreddit.ts"),
				z = o("./src/reddit/selectors/user.ts"),
				Q = o("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				Y = o("./src/reddit/components/PostFlairPicker/index.tsx"),
				X = o("./src/reddit/components/ReportFlow/new.tsx"),
				Z = o("./src/reddit/actions/postCollection/index.ts"),
				$ = o("./src/reddit/contexts/Post/index.tsx"),
				ee = o("./src/reddit/helpers/trackers/postCollection.ts"),
				te = o("./src/reddit/models/PostCreationForm/index.ts"),
				oe = o("./src/reddit/selectors/postCollection.ts"),
				se = o("./node_modules/react-router/esm/react-router.js"),
				ne = o("./src/reddit/components/ConfirmUserActionModal/index.tsx");
			const re = Object(se.i)(({
				post: e,
				toggleConfirmDelete: t,
				handleDeletePost: o,
				location: n
			}) => {
				var r, a;
				const c = null === (r = e.pollData) || void 0 === r ? void 0 : r.isPrediction,
					d = c ? s.fbt._("Delete prediction post", null, {
						hk: "2kmUxK"
					}) : s.fbt._("Delete post?", null, {
						hk: "3g7QoX"
					}),
					l = i.a.useMemo(() => {
						var t;
						const o = (null === (t = e.pollData) || void 0 === t ? void 0 : t.totalVoteCount) || 0;
						return c ? 0 === o ? s.fbt._("WARNING: Deleting this post will cancel prediction for all participating users. You cannot restore posts that have been deleted.", null, {
							hk: "1oVYGJ"
						}) : 1 === o ? s.fbt._("WARNING: Deleting this post will cancel prediction for all participating users. One user will receive a cancellation message. You cannot restore posts that have been deleted.", null, {
							hk: "1gOZGC"
						}) : s.fbt._("WARNING: Deleting this post will cancel prediction for all participating users. All {votedUsersCount} users will receive a cancellation message. You cannot restore posts that have been deleted.", [s.fbt._param("votedUsersCount", o.toString())], {
							hk: "3ZyWW3"
						}) : s.fbt._("Are you sure you want to delete your post? You can't undo this.", null, {
							hk: "2eDKWP"
						})
					}, [c, null === (a = e.pollData) || void 0 === a ? void 0 : a.totalVoteCount]),
					p = c ? s.fbt._("Yes, cancel Prediction", null, {
						hk: "yhW82"
					}) : s.fbt._("Delete post", null, {
						hk: "28hc1p"
					});
				return i.a.createElement(ne.a, {
					toggleModal: t,
					onConfirm: () => o(n),
					actionText: p,
					headerText: d,
					modalText: l,
					withOverlay: !0
				})
			});
			var ie = o("./src/reddit/components/PostOverflowMenu/index.m.less"),
				ae = o.n(ie);
			const ce = h.a.wrapped(M.b, "DropdownRow", ae.a),
				de = h.a.wrapped(S.a, "PostCheckboxMenuItem", ae.a),
				le = p()(),
				pe = ({
					gild: e = !0,
					save: t = !0,
					share: o = !0,
					report: s = !0,
					editPost: n = !0,
					hide: r = !0
				}) => ({
					[F.a.Gild]: e,
					[F.a.Save]: t,
					[F.a.Share]: o,
					[F.a.Report]: s,
					[F.a.EditPost]: n,
					[F.a.Hide]: r
				}),
				ue = Object(a.b)(() => Object(c.c)({
					claimedFreeAward: q.b,
					isConfirmDeleteOpen: (e, {
						postId: t
					}) => Object(H.a)(e) === `POST_OVERFLOW_DELETE_CONFIRMATION_${t}`,
					isFutureEvent: oe.i,
					isPinned: K.p,
					subredditAboutInfo: K.G,
					reportFlowIsOpen: (e, {
						isOverlay: t,
						postId: o
					}) => {
						var s, n, r, i;
						return (null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === n ? void 0 : n.openedFromModalPage) === t && (null === (i = null === (r = e.features) || void 0 === r ? void 0 : r.reportFlow) || void 0 === i ? void 0 : i.postOrCommentId) === o
					},
					showPinAction: (e, {
						isProfilePostListing: t,
						userIsOp: o,
						post: s,
						pageLayer: n
					}) => Object(N.B)(e, {
						pageLayer: n
					}) && t && o && Object(z.nb)(e, {
						userName: s.author
					}),
					hasSubredditRules: J.i,
					isPostPartOfACollection: oe.k,
					shouldRenderCollectionEditButtons: (e, {
						post: t,
						subredditOrProfile: o
					}) => {
						if (t.isSponsored) return !1;
						if (!o) return !1;
						const s = o.type === G.f.User;
						return Object(oe.r)(e, o.name, s)
					},
					reportingRevampEnabled: Q.a,
					videoShareModalOpen: (e, {
						postId: t
					}) => Object(H.a)(e) === Object(A.a)(t)
				}), (e, {
					postId: t,
					isOverlay: o,
					isCommentsPage: s
				}) => ({
					onCopyLink: t => e(Object(O.D)(t)),
					onDelete: s => e(Object(O.O)(t, s, o)),
					onDistinguishPost: o => e(Object(O.v)(t, o)),
					onGildClick: (o, s) => e(Object(x.d)({
						awardId: s,
						correlationId: o,
						thingId: t
					})),
					onToggleSave: () => e(Object(O.V)(t)),
					onToggleNSFW: () => e(Object(O.I)(t)),
					onToggleOC: () => e(Object(O.L)(t)),
					onTogglePinned: () => e(Object(C.i)(t)),
					onToggleSpoiler: () => e(Object(O.Z)(t)),
					onHide: s => e(Object(O.ab)(t, !s, o, !0)),
					onReportClick: () => e(Object(g.c)(t, o)),
					onStartEventNow: () => {
						e((e, t) => Object(d.a)(Object(I.l)()(t()))), e(Object(f.startEventNowRequested)(t))
					},
					onEdit: () => {
						const n = !o && !s;
						e(Object(_.a)(t, n))
					},
					onFlairPost: () => e(Object(v.i)(Object(Y.b)(t, o))),
					onToggleSendReplies: () => e(Object(O.W)(t)),
					showCollectionsList: (t, s) => {
						e(Object(Z.e)(t)).then(() => {
							const t = Object(te.s)(s, o);
							e(v.i(t))
						})
					},
					toggleConfirmDelete: () => e(Object(v.i)(`POST_OVERFLOW_DELETE_CONFIRMATION_${t}`)),
					onToggleVideoShareModal: () => e(Object(v.i)(Object(A.a)(t)))
				}));
			class me extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.handlePostEvent = (e, t) => {
						const {
							isOverlay: o,
							post: s,
							sendEvent: n
						} = this.props;
						n(Object(V.h)(s.id, e, o ? "post_detail" : "post", void 0, void 0, void 0, null == t ? void 0 : t.referralId))
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
							clickGildEvent: s
						} = await Promise.resolve().then(o.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(s(this.props.postId))
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
						this.handlePostEvent(this.props.isPinned ? "unpin" : "pin"), this.props.isPinned ? this.props.sendEvent(Object(V.j)(this.props.post.id)) : this.props.sendEvent(Object(V.e)(this.props.post.id)), this.props.onTogglePinned()
					}, this.toggleSpoiler = () => {
						this.handlePostEvent(this.props.post.isSpoiler ? "unmark_spoiler" : "mark_spoiler"), this.props.onToggleSpoiler()
					}, this.toggleNSFW = () => {
						this.handlePostEvent(this.props.post.isNSFW ? "unmark_nsfw" : "mark_nsfw"), this.props.onToggleNSFW()
					}, this.getBreakpointClass = e => {
						const {
							props: t
						} = this;
						if (!t.ignoreBreakpoints && t.useFlatlistBreakpoints[e]) return Object(R.b)({
							breakpointType: R.a.HideIfVWLarger,
							flatlistItem: e,
							isLoggedIn: !!t.currentUser,
							isUserOp: t.userIsOp
						})
					}, this.handleAddToCollection = () => {
						const {
							isPostPartOfACollection: e,
							showCollectionsList: t,
							post: o,
							sendEvent: s
						} = this.props;
						e || (s(Object(ee.b)(o.id)), t(o.belongsTo.id, o.id))
					}, this.onCloseShareModal = e => {
						e && (this.handlePostEvent("copy_link", {
							referralId: le
						}), this.props.onCopyLink(e)), this.props.onToggleVideoShareModal()
					}, this.renderReportFlow = () => this.props.reportingRevampEnabled ? i.a.createElement(X.a, {
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
						props: e
					} = this, t = e.layout === L.g.Classic;
					if (!(e.ignoreBreakpoints || e.modModeWithPost || e.userIsOp || !e.isCommentsPage && !t)) return Object(R.b)({
						breakpointType: R.a.HideIfVWLarger,
						flatlistItem: F.a.PostOverflowMenu,
						isLoggedIn: !!e.currentUser,
						isUserOp: e.userIsOp
					})
				}
				renderDropdownIcons() {
					const {
						props: e
					} = this, {
						currentUser: t,
						isFutureEvent: o,
						isPinned: r,
						onStartEventNow: a,
						post: c,
						shouldRenderCollectionEditButtons: d,
						showEditFlair: l,
						showPinAction: p,
						toggleAddEventStartTimeModal: m,
						toggleEditStartTimeModal: b,
						userIsOp: h
					} = e, f = e.currentUser && e.currentUser.isEmployee, x = Object(B.a)(e.post), v = e.post.belongsTo.type === j.a.PROFILE || Object(G.g)(e.subredditAboutInfo), C = e.post.belongsTo.type === j.a.PROFILE || Object(G.i)(e.subredditAboutInfo), O = t && c.isGildable, _ = Object(W.a)(e.post);
					return i.a.createElement("div", null, O && i.a.createElement(ce, {
						className: this.getBreakpointClass(F.a.Gild),
						displayText: s.fbt._("Give Award", null, {
							hk: "3mYeGJ"
						}),
						onClick: this.handleGild
					}, i.a.createElement(y.a, {
						name: "award",
						className: ae.a.Icon
					})), i.a.createElement(ce, {
						className: this.getBreakpointClass(F.a.Share),
						displayText: s.fbt._("Copy link", null, {
							hk: "ETZxA"
						}),
						onClick: () => {
							const {
								permalink: t,
								post: o
							} = e;
							o && Object(U.o)(o) ? (e.onToggleVideoShareModal(), this.handlePostEvent("share")) : (this.handlePostEvent("share_copy"), e.onCopyLink(t))
						}
					}, i.a.createElement(y.a, {
						name: "link_post",
						className: ae.a.Icon
					})), i.a.createElement(ce, {
						className: this.getBreakpointClass(F.a.Share),
						displayText: s.fbt._("Embed", null, {
							hk: "3u0v6r"
						}),
						onClick: () => {
							this.handlePostEvent("share_embed"), window.open(`${u.a.rebedMediaUrl}/embed?url=${e.post.permalink}`, "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, i.a.createElement(y.a, {
						name: "embed",
						className: ae.a.Icon
					})), e.showEditPost && i.a.createElement(ce, {
						className: this.getBreakpointClass(F.a.EditPost),
						displayText: s.fbt._("Edit post", null, {
							hk: "3gVzz0"
						}),
						onClick: this.handleEdit,
						isSelected: e.post.hidden
					}, i.a.createElement(y.a, {
						name: "edit",
						className: ae.a.Icon
					})), l && i.a.createElement(ce, {
						displayText: s.fbt._("Edit flair", null, {
							hk: "qt3W7"
						}),
						onClick: e.onFlairPost,
						isSelected: e.post.hidden
					}, i.a.createElement(y.a, {
						name: "tag",
						className: ae.a.Icon
					})), i.a.createElement(ce, {
						className: this.getBreakpointClass(F.a.Save),
						displayText: e.post.saved ? s.fbt._("unsave", null, {
							hk: "HDDPm"
						}) : s.fbt._("save", null, {
							hk: "3bg2gs"
						}),
						onClick: this.toggleSave,
						isSelected: e.post.saved
					}, i.a.createElement(y.a, {
						name: e.post.saved ? "saved" : "save",
						className: ae.a.Icon
					})), p && i.a.createElement(ce, {
						displayText: r ? s.fbt._("Unpin Post from Profile", null, {
							hk: "6DYfk"
						}) : s.fbt._("Pin Post to Profile", null, {
							hk: "2RWbNF"
						}),
						onClick: this.togglePinned
					}, i.a.createElement(y.a, {
						name: "pin",
						className: ae.a.Icon,
						isFilled: this.props.isPinned
					})), !e.post.isSponsored && i.a.createElement(ce, {
						className: this.getBreakpointClass(F.a.Hide),
						displayText: e.post.hidden ? s.fbt._("unhide", null, {
							hk: "1P4IxC"
						}) : s.fbt._("hide", null, {
							hk: "48yKzW"
						}),
						onClick: this.toggleHide,
						isSelected: e.post.hidden
					}, i.a.createElement(y.a, {
						name: "hide",
						className: ae.a.HideIcon
					})), !e.post.isSponsored && !h && i.a.createElement(ce, {
						className: this.getBreakpointClass(F.a.Report),
						displayText: s.fbt._("report", null, {
							hk: "128RPn"
						}),
						onClick: this.handleReport
					}, i.a.createElement(y.a, {
						name: "report",
						className: ae.a.Icon
					})), d && o && a && i.a.createElement(ce, {
						onClick: a,
						displayText: s.fbt._("Start event now", null, {
							hk: "3VomTN"
						})
					}, i.a.createElement(y.a, {
						name: "live",
						className: ae.a.Icon
					})), d && o && b && i.a.createElement(ce, {
						onClick: b,
						displayText: s.fbt._("Edit start time", null, {
							hk: "2typ17"
						})
					}, i.a.createElement(y.a, {
						name: "scheduled",
						className: ae.a.Icon
					})), d && !_ && m && i.a.createElement(ce, {
						displayText: s.fbt._("Add event start time", null, {
							hk: "1XXqzu"
						}),
						onClick: m
					}, i.a.createElement(y.a, {
						name: "scheduled",
						className: ae.a.Icon
					})), d && i.a.createElement(ce, {
						className: this.props.isPostPartOfACollection ? ae.a.disabledRow : void 0,
						displayText: s.fbt._("Add to collection", null, {
							hk: "3UNHgN"
						}),
						onClick: this.handleAddToCollection,
						noHover: this.props.isPostPartOfACollection
					}, i.a.createElement(y.a, {
						name: "collection",
						className: ae.a.Icon
					})), h && i.a.createElement(ce, {
						displayText: s.fbt._("delete", null, {
							hk: "4kSfzC"
						}),
						onClick: this.props.toggleConfirmDelete
					}, i.a.createElement(y.a, {
						name: "delete",
						className: ae.a.Icon
					})), f && e.userIsOp && i.a.createElement(ce, {
						displayText: e.post.distinguishType === n.E.ADMIN ? s.fbt._("undistinguish", null, {
							hk: "2chGON"
						}) : s.fbt._("Distinguish as admin", null, {
							hk: "2xltiM"
						}),
						onClick: () => e.post.distinguishType === n.E.ADMIN ? e.onDistinguishPost(n.E.NONE) : e.onDistinguishPost(n.E.ADMIN)
					}, i.a.createElement(y.a, {
						name: "admin",
						className: ae.a.Icon
					})), h && v && !x && i.a.createElement(de, {
						text: s.fbt._("Mark as OC", null, {
							hk: "2vGyoC"
						}),
						onClick: this.toggleOC,
						isSelected: this.props.post.isOriginalContent
					}), h && C && i.a.createElement(de, {
						text: s.fbt._("Mark as Spoiler", null, {
							hk: "3PJk7A"
						}),
						onClick: this.toggleSpoiler,
						isSelected: this.props.post.isSpoiler
					}), h && i.a.createElement(de, {
						text: s.fbt._("Mark as NSFW", null, {
							hk: "4qK6JN"
						}),
						onClick: this.toggleNSFW,
						isSelected: this.props.post.isNSFW
					}), e.userIsOp && i.a.createElement(de, {
						text: s.fbt._("Send me reply notifications", null, {
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
					return i.a.createElement("div", null, i.a.createElement(P.b, {
						className: Object(b.a)(ae.a.overflowMenu, this.getOverflowMenuBreakpointClass(), e.className),
						dropdownId: e.dropdownId,
						isFixed: e.isFixed,
						layout: e.layout,
						onClick: this.handleClickMenuButton
					}, this.renderDropdownIcons()), e.reportFlowIsOpen && e.subredditOrProfile && e.hasSubredditRules && this.renderReportFlow(), this.props.isConfirmDeleteOpen && i.a.createElement(re, {
						post: this.props.post,
						toggleConfirmDelete: this.props.toggleConfirmDelete,
						handleDeletePost: this.handleDeletePost
					}), e.videoShareModalOpen && i.a.createElement(A.b, {
						className: ae.a.modalBody,
						onClose: this.onCloseShareModal,
						withOverlay: !1,
						url: Object(m.a)(Object(w.a)(e.postId), {
							[E.q]: le,
							utm_source: "share",
							utm_medium: "web2x",
							utm_content: "rpan_stream"
						})
					}))
				}
			}
			me.contextType = k.a;
			t.a = Object($.d)(ue(me))
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
				i = ({
					children: e
				}) => {
					const [t, o] = Object(s.useState)(0), [i, a] = Object(s.useState)(!1), [c, d] = Object(s.useState)(0), l = {
						currentTime: t,
						setCurrentTime: o,
						isLive: i,
						setIsLive: a,
						totalTime: c,
						setTotalTime: d
					};
					return n.a.createElement(r.Provider, {
						value: l
					}, e)
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
				backgroundColor: n.b.overlayReportFlow
			};
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "ReportFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => o.e("ReportFlow").then(o.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx")),
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
					backgroundColor: n.b.overlayReportFlow
				},
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ReportFlow",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!o.m[t]
					},
					importAsync: () => o.e("ReportFlow").then(o.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx")),
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
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return d
			})), o.d(t, "b", (function() {
				return l
			})), o.d(t, "d", (function() {
				return p
			})), o.d(t, "a", (function() {
				return u
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/lib/lessComponent.tsx"),
				a = o("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				c = o.n(a);
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
				p = i.a.wrapped(d, "RemoveButton", c.a),
				u = e => n.a.createElement("button", {
					className: Object(r.a)(c.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/ShareMenu/index.m.less": function(e, t, o) {
			e.exports = {
				dropdown: "PWY92ySDjTYrTAiutq4ty",
				dropdownRow: "_2snJGyyGyyH38duHobOUKE",
				linkIcon: "_1GObrri0j7y_9IWiGUfPjp",
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
				a = o("./node_modules/react-router/esm/react-router.js"),
				c = o("./node_modules/reselect/es/index.js"),
				d = o("./node_modules/uuid/v4.js"),
				l = o.n(d),
				p = o("./src/config.ts"),
				u = o("./src/lib/addQueryParams/index.ts"),
				m = o("./src/reddit/actions/modal.ts"),
				b = o("./src/reddit/actions/post.ts"),
				h = o("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				f = o("./src/reddit/actions/tooltip.ts"),
				x = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				v = o("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				C = o("./src/reddit/constants/parameters.ts"),
				O = o("./src/reddit/controls/Dropdown/index.tsx"),
				_ = o("./src/reddit/controls/Dropdown/Row.tsx"),
				g = o("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				k = o("./src/reddit/icons/fonts/index.tsx"),
				E = o("./src/reddit/models/Post/index.ts"),
				j = o("./src/reddit/models/Subreddit/index.ts"),
				w = o("./src/reddit/routes/postCreation/constants.ts"),
				I = o("./src/reddit/selectors/activeModalId.ts"),
				y = o("./src/reddit/selectors/tooltip.ts"),
				P = o("./src/reddit/components/ShareMenu/index.m.less"),
				T = o.n(P);
			const N = Object(x.a)(O.a),
				S = l()(),
				M = Object(c.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(y.b)(t)(e),
					videoShareModalOpen: (e, {
						dropdownId: t
					}) => Object(I.b)(Object(v.a)(t))(e)
				}),
				F = Object(i.b)(M, (e, {
					dropdownId: t,
					permalink: o,
					...s
				}) => ({
					toggleDropdown: () => {
						e(Object(f.h)({
							tooltipId: t
						}))
					},
					copyLink: t => e(Object(b.D)(t)),
					onToggleVideoShareModal: () => {
						s.post && e(Object(h.d)(s.post.id)), e(Object(m.i)(Object(v.a)(s.post.id)))
					}
				})),
				R = r.a.memo(e => {
					const t = !e.subreddit || e.subreddit && e.subreddit.type === j.f.Public,
						o = !!e.post && e.post.isCrosspostable && !e.post.isSponsored;
					return r.a.createElement("div", {
						className: e.className,
						onClick: e.toggleDropdown,
						id: e.dropdownId
					}, e.children, r.a.createElement(N, {
						className: T.a.dropdown,
						isOpen: e.dropdownIsOpen,
						tooltipId: e.dropdownId
					}, r.a.createElement(_.b, {
						className: T.a.dropdownRow,
						displayText: s.fbt._("Copy link", null, {
							hk: "1tCqox"
						}),
						onClick: () => {
							const {
								permalink: t,
								post: o
							} = e;
							if (o && Object(E.o)(o)) e.sendEventWithName("share_copy", {
								referralId: S
							}), e.onToggleVideoShareModal();
							else {
								const o = Object(u.a)(t, {
									utm_source: "share",
									utm_medium: "web2x",
									context: 3
								});
								e.sendEventWithName("share_copy"), e.copyLink(o)
							}
						}
					}, r.a.createElement(k.a, {
						name: "link_post",
						className: T.a.linkIcon
					})), o && r.a.createElement(_.b, {
						className: T.a.dropdownRow,
						displayText: s.fbt._("crosspost", null, {
							hk: "23zSN6"
						}),
						onClick: () => {
							e.sendEventWithName("share_crosspost"), e.post && window.open(`${w.b}?source_id=${e.post.id}`, "_blank")
						}
					}, r.a.createElement(k.a, {
						name: "crosspost",
						className: T.a.crosspostIcon
					})), t && r.a.createElement(_.b, {
						className: T.a.dropdownRow,
						displayText: s.fbt._("Embed", null, {
							hk: "2CcsuC"
						}),
						onClick: () => {
							e.sendEventWithName("share_embed"), window.open(`${p.a.rebedMediaUrl}/embed?url=${e.permalink}`, "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, r.a.createElement(k.a, {
						name: "embed",
						className: T.a.embedIcon
					}))), e.videoShareModalOpen && e.post && r.a.createElement(v.b, {
						className: T.a.modalBody,
						onClose: t => {
							t && (e.sendEventWithName("copy_link", {
								referralId: S
							}), e.copyLink(t)), e.onToggleVideoShareModal()
						},
						url: Object(u.a)(Object(g.a)(e.post.id), {
							[C.q]: S,
							utm_source: "share",
							utm_medium: "web2x",
							utm_content: "rpan_stream"
						})
					}))
				});
			t.a = F(Object(a.i)(R))
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
				return u
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
				u = ({
					className: e,
					...t
				}) => n.a.createElement(p, l({
					className: Object(r.a)(d.a.postCheckboxMenuItem, e)
				}, t));
			t.b = p
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
				return w
			})), o.d(t, "c", (function() {
				return I
			}));
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/lodash/uniqueId.js"),
				r = o.n(n),
				i = o("./node_modules/raf/index.js"),
				a = o.n(i),
				c = o("./node_modules/react/index.js"),
				d = o.n(c),
				l = o("./node_modules/react-redux/es/index.js"),
				p = o("./node_modules/reselect/es/index.js"),
				u = o("./src/lib/classNames/index.ts"),
				m = o("./src/reddit/actions/modal.ts"),
				b = o("./src/reddit/selectors/activeModalId.ts"),
				h = o("./src/higherOrderComponents/asModal/index.tsx"),
				f = o("./src/reddit/controls/Button/index.tsx"),
				x = o("./src/reddit/layout/row/Inline/index.tsx"),
				v = o("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				C = o.n(v);
			var O = Object(h.a)(e => {
					const {
						children: t,
						title: o
					} = e;
					return d.a.createElement("div", {
						className: C.a.wrapper
					}, d.a.createElement(x.a, {
						className: C.a.titleRow
					}, o), d.a.createElement("div", {
						className: C.a.detailsContainer
					}, t), d.a.createElement(x.a, {
						className: C.a.buttonRow
					}, d.a.createElement(f.i, {
						className: C.a.confirmButton,
						onClick: e.onConfirmed
					}, s.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				_ = o("./src/reddit/controls/ErrorText/index.m.less"),
				g = o.n(_);
			const k = Object(p.c)({
				activeModalId: b.a
			});
			class E extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${r()()}`
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
						activeModalId: t,
						className: o,
						errorModalBody: n,
						errorModalTitle: r = s.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: i = s.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: a,
						textHasOverflowed: c
					} = this.state;
					return d.a.createElement("div", {
						className: Object(u.a)(g.a.wrapper, o)
					}, d.a.createElement("span", {
						className: g.a.description,
						ref: this.spanRef
					}, e), c && d.a.createElement("span", {
						className: g.a.moreText,
						onClick: this.toggleModal
					}, i), t === a && d.a.createElement(O, {
						onConfirmed: this.toggleModal,
						title: r
					}, n || e))
				}
			}
			const j = Object(l.b)(k, e => ({
					toggleErrorTextModal: t => e(Object(m.i)(t))
				}))(E),
				w = e => {
					const {
						className: t,
						errorClassName: o,
						errorModalTitle: s,
						fallbackMessage: n,
						messages: r = []
					} = e, i = r.length ? r : n ? [n] : [];
					return i.length ? d.a.createElement("div", {
						className: t
					}, i.map((e, t) => d.a.createElement(j, {
						className: o,
						errorModalTitle: s,
						key: t
					}, e))) : null
				},
				I = e => d.a.createElement(w, {
					fallbackMessage: s.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = j
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
			t.a = ({
				center: e,
				className: t,
				sizePx: o = 10
			}) => n.a.createElement("div", {
				className: Object(r.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${o}px`
				}
			})
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
					...Object(n.g)(e, {
						offerContext: r.a.StorefrontFreeAward
					}),
					correlationId: Object(s.d)(s.a.GoldPayment, !1),
					profile: i.profile(e),
					subreddit: i.subreddit(e)
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
				return m
			})), o.d(t, "e", (function() {
				return b
			})), o.d(t, "n", (function() {
				return h
			})), o.d(t, "m", (function() {
				return f
			})), o.d(t, "b", (function() {
				return v
			})), o.d(t, "p", (function() {
				return C
			})), o.d(t, "c", (function() {
				return O
			})), o.d(t, "j", (function() {
				return _
			})), o.d(t, "q", (function() {
				return g
			})), o.d(t, "k", (function() {
				return k
			})), o.d(t, "l", (function() {
				return E
			})), o.d(t, "i", (function() {
				return j
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
					...u(t, e)
				}),
				l = ({
					postId: e,
					isFollowed: t
				}) => o => ({
					source: s.collection,
					noun: t ? n.unfollow : n.follow,
					...u(o, e)
				}),
				p = ({
					postId: e,
					isFollowed: t
				}) => o => ({
					source: i.a.postEvent,
					noun: t ? n.unfollow : n.follow,
					...u(o, e)
				}),
				u = (e, t) => {
					const o = {
						...c.defaults(e),
						action: r.c.CLICK,
						subreddit: c.subreddit(e)
					};
					return void 0 === t ? o : {
						...o,
						post: c.post(e, t),
						postCollection: c.postCollectionI13nSelector(e, {
							postId: t
						}),
						postEvent: c.postEventI13nSelector(e, {
							postId: t
						})
					}
				},
				m = e => ({
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
					...c.defaults(e),
					subreddit: c.subreddit(e),
					source: s.postComposer
				}),
				v = (e, t) => o => ({
					...u(o, e),
					source: t || s.postOverflowMenu,
					noun: n.collectionAddPost
				}),
				C = e => t => ({
					...u(t, e),
					source: s.collectionComposer,
					noun: n.collectionRemovePost
				}),
				O = () => e => ({
					...u(e),
					source: s.collectionComposer,
					noun: n.collectionCancel
				}),
				_ = () => e => {
					const t = Object(a.m)(e) || void 0;
					return {
						...u(e, t),
						source: s.collectionComposer,
						noun: n.collectionCreate
					}
				},
				g = () => e => ({
					...u(e),
					source: s.collectionComposer,
					noun: n.collectionSelect
				}),
				k = e => t => ({
					...c.defaults(t),
					subreddit: c.subreddit(t),
					source: s.collectionComposer,
					action: r.c.CLICK,
					noun: n.collectionDelete,
					postCollection: c.postCollectionI13nByCollectionIdSelector(t, {
						collectionId: e
					})
				}),
				E = e => t => ({
					...u(t),
					source: s.collectionComposer,
					noun: n.collectionEdit,
					postCollection: c.postCollectionI13nByCollectionIdSelector(t, {
						collectionId: e
					})
				}),
				j = e => t => ({
					...u(t, e),
					source: s.collectionComposer,
					noun: n.startEvent
				}),
				w = () => e => {
					const t = Object(a.m)(e) || void 0;
					return {
						...u(e, t),
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
				return v
			})), o.d(t, "d", (function() {
				return C
			}));
			var s, n = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/eventTools/index.ts"),
				i = o("./src/lib/timezone/index.ts"),
				a = o("./src/reddit/constants/tracking.ts"),
				c = o("./src/reddit/models/PostCreationForm/index.ts"),
				d = o("./src/reddit/selectors/platform.ts"),
				l = o("./src/reddit/selectors/postCreations.ts"),
				p = o("./src/reddit/selectors/telemetry.ts"),
				u = o("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(s || (s = {}));
			const m = e => p.actionInfo(e, {
					pageType: "event_submit"
				}),
				b = e => {
					Object(u.a)({
						...p.defaults(e),
						source: s.postComposer,
						action: a.c.CLICK,
						noun: "event_create",
						subreddit: p.subreddit(e)
					})
				},
				h = e => {
					Object(u.a)({
						...p.defaults(e),
						source: s.postComposer,
						action: a.c.CLICK,
						noun: "event_edit",
						subreddit: p.subreddit(e),
						postEvent: O(e),
						postComposer: _(e)
					})
				},
				f = () => e => ({
					source: s.eventComposer,
					action: a.c.VIEW,
					noun: a.b.SCREEN,
					actionInfo: m(e),
					postEvent: O(e)
				}),
				x = e => t => ({
					...E(t, Object(d.m)(t)),
					source: s.postComposer,
					noun: "apply",
					postComposer: g(e)
				}),
				v = () => e => ({
					...E(e, Object(d.m)(e)),
					noun: "cancel",
					actionInfo: m(e)
				}),
				C = e => t => ({
					...E(t, Object(d.m)(t)),
					noun: "delete",
					actionInfo: m(t),
					postComposer: _(t),
					postEvent: k(e)
				}),
				O = e => {
					const t = Object(l.p)(e);
					return t && k(t)
				},
				_ = e => g(Object(l.p)(e)),
				g = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === c.i.AtEventTime ? Object(i.f)(e.startDate).getTime() / n.Nb : void 0
					}
				},
				k = e => {
					const t = Object(i.f)(e.startDate).getTime() / n.Nb,
						o = Object(i.f)(e.endDate).getTime() / n.Nb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: o,
						eventState: Object(r.e)(t, o)
					}
				},
				E = (e, t) => {
					const o = {
						source: s.eventComposer,
						action: a.c.CLICK,
						subreddit: p.subreddit(e)
					};
					return t ? {
						...o,
						post: p.post(e, t),
						postEvent: p.postEventI13nSelector(e, {
							postId: t
						}),
						postCollection: p.postCollectionI13nSelector(e, {
							postId: t
						})
					} : o
				}
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, o) {
			"use strict";
			o.d(t, "i", (function() {
				return a
			})), o.d(t, "y", (function() {
				return c
			})), o.d(t, "m", (function() {
				return d
			})), o.d(t, "p", (function() {
				return l
			})), o.d(t, "q", (function() {
				return p
			})), o.d(t, "b", (function() {
				return u
			})), o.d(t, "c", (function() {
				return m
			})), o.d(t, "o", (function() {
				return b
			})), o.d(t, "r", (function() {
				return h
			})), o.d(t, "k", (function() {
				return f
			})), o.d(t, "f", (function() {
				return x
			})), o.d(t, "d", (function() {
				return v
			})), o.d(t, "n", (function() {
				return C
			})), o.d(t, "h", (function() {
				return O
			})), o.d(t, "g", (function() {
				return g
			})), o.d(t, "l", (function() {
				return k
			})), o.d(t, "t", (function() {
				return E
			})), o.d(t, "j", (function() {
				return j
			})), o.d(t, "e", (function() {
				return w
			})), o.d(t, "x", (function() {
				return I
			})), o.d(t, "u", (function() {
				return y
			})), o.d(t, "a", (function() {
				return P
			})), o.d(t, "s", (function() {
				return T
			})), o.d(t, "v", (function() {
				return N
			})), o.d(t, "w", (function() {
				return S
			}));
			var s = o("./src/reddit/models/ScheduledPost/index.ts"),
				n = o("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					...n.defaults(e),
					screen: n.screen(e),
					subreddit: n.subreddit(e),
					userSubreddit: n.userSubreddit(e)
				}),
				i = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(s.p)(e)
				}),
				a = () => e => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post",
					...r(e)
				}),
				c = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer",
					...r(e)
				}),
				d = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date",
					...r(e)
				}),
				l = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time",
					...r(e)
				}),
				p = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone",
					...r(e)
				}),
				u = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply",
					...r(e)
				}),
				m = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel",
					...r(e)
				}),
				b = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit",
					...r(t),
					scheduledPost: i(e)
				}),
				h = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...r(t),
					scheduledPost: i(e)
				}),
				f = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts",
					...r(e)
				}),
				x = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...r(e)
				}),
				v = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...r(e)
				}),
				C = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...r(e)
				}),
				O = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...r(t),
					actionInfo: n.actionInfo(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				_ = {
					[s.d.Hourly]: "hourly_frequency",
					[s.d.Daily]: "daily_frequency",
					[s.d.Weekly]: "weekly_frequency",
					[s.d.Monthly]: "monthly_frequency",
					[s.b]: "custom_frequency"
				},
				g = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : _[e],
					...r(t)
				}),
				k = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...r(e)
				}),
				E = (e, t, o) => i => ({
					source: "post",
					action: "click",
					noun: Object(s.l)(e),
					...r(i),
					actionInfo: n.actionInfo(i, {
						settingValue: t ? "true" : "false",
						pageType: o ? "recurring_posts" : "scheduled_posts"
					})
				}),
				j = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...r(e)
				}),
				w = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...r(e)
				}),
				I = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...r(e)
				}),
				y = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...r(e),
					scheduledPost: i(t)
				}),
				P = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...r(e)
				}),
				T = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...r(e),
					scheduledPost: i(t)
				}),
				N = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...r(e)
				}),
				S = () => (e, t) => {
					const o = r(e);
					return {
						source: "post",
						action: "view",
						noun: "error",
						...o,
						actionInfo: {
							...o.actionInfo,
							reason: "failed_post"
						},
						scheduledPost: i(t)
					}
				}
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/fonts/helpers.tsx"),
				a = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(i.a, null, e.desc))
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
			t.a = ({
				className: e,
				...t
			}) => n.a.createElement("i", d({
				className: Object(r.a)(Object(i.b)("comment", t.isFilled), c.a.commentIcon, e)
			}, t))
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
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/fonts/helpers.tsx"),
				a = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(i.a, null, e.desc))
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
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/fonts/helpers.tsx"),
				a = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(i.a, null, e.desc))
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
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, o) {},
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
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
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
			const r = (e, {
					subredditName: t
				}) => Object(s.a)("ModhubPage-EventPosts", "timeline", {
					subredditName: t
				}),
				i = (e, t) => {
					const o = r(e, t);
					return Object(n.L)(e, {
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
				experimentEligibilitySelector: i.J,
				experimentName: s.i
			}) === s.e.Enabled
		},
		"./src/redditGQL/operations/EventPostsBySubredditName.json": function(e) {
			e.exports = JSON.parse('{"id":"dbc0fa67c5a1"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48.b708b05b3b7c68afb2a6.js.map