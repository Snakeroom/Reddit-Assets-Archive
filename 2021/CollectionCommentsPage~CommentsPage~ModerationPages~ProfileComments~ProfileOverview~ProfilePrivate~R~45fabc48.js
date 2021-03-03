// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48.4ec79e40bb1c8beaf501.js
// Retrieved at 3/3/2021, 6:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"], {
		"./src/graphql/operations/EventPostsBySubredditName.json": function(e) {
			e.exports = JSON.parse('{"id":"b830350ba297"}')
		},
		"./src/reddit/actions/eventPosts/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "fetchEventPostsPending", (function() {
				return O
			})), s.d(t, "fetchEventPostsSuccess", (function() {
				return C
			})), s.d(t, "fetchEventPostsFailure", (function() {
				return g
			})), s.d(t, "fetchMoreEventPostsSuccess", (function() {
				return j
			})), s.d(t, "eventPostsRequested", (function() {
				return E
			})), s.d(t, "startEventNowSuccess", (function() {
				return k
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
				c = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/graphql/operations/EventPostsBySubredditName.json"),
				d = s("./src/lib/makeGqlRequest/index.ts");
			var l = s("./src/lib/makeApiRequest/index.ts"),
				p = s("./src/lib/omitHeaders/index.ts"),
				u = s("./src/reddit/constants/headers.ts");
			var m = (e, t, s, o, r) => Object(l.a)(Object(p.a)(e, [u.a]), {
				endpoint: `${e.apiUrl}/api/event_post_time.json`,
				method: n.cb.POST,
				data: {
					id: t,
					event_start: s,
					event_end: o,
					event_tz: r
				}
			});
			var b = (e, t) => Object(l.a)(Object(p.a)(e, [u.a]), {
					endpoint: `${e.apiUrl}/api/start_event_post.json`,
					method: n.cb.POST,
					data: {
						id: t
					}
				}),
				h = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts"),
				x = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/selectors/eventPosts.ts"),
				v = s("./src/reddit/selectors/posts.ts");
			const _ = () => o.fbt._("Something went wrong. Just don't panic.", null, {
					hk: "4onxm1"
				}),
				O = Object(r.a)(i.e),
				C = Object(r.a)(i.c),
				g = Object(r.a)(i.b),
				j = Object(r.a)(i.d),
				E = e => async (t, s, {
					gqlContext: o
				}) => {
					let n = s();
					const r = Object(f.d)(n, {
							subredditName: e
						}),
						i = Object(f.b)(n, {
							subredditName: e
						}),
						l = Object(f.c)(n, {
							subredditName: e
						}),
						p = Object(f.a)(n, {
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
					const b = Object(f.e)(n, {
						subredditName: e
					});
					t(O({
						key: b
					}));
					const v = await ((e, t) => Object(d.a)(e, {
						...a,
						variables: t
					}))(o(), m);
					if (v.ok) {
						const {
							subredditInfoByName: e
						} = v.body.data, {
							eventPosts: o
						} = e, r = Object(h.a)(o);
						let i = [],
							c = {};
						const a = o.pageInfo || {
							hasNextPage: !1,
							endCursor: null,
							hasPreviousPage: !1,
							startCursor: null
						};
						r.length > 0 && (i = r.map(e => e.id), c = r.reduce((e, t) => (e[t.id] = t, e), {})), n = s(), t((u ? j : C)({
							key: b,
							postIds: i,
							meta: n.meta,
							posts: c,
							pageInfo: a
						}))
					} else t(g({
						error: v.error,
						key: b
					})), t(Object(c.e)({
						kind: x.b.Error,
						text: _()
					}))
				}, k = Object(r.a)(i.f), w = e => async (t, s, {
					apiContext: n
				}) => {
					if ((await b(n(), e)).ok) {
						const n = () => o.fbt._("Following event has started successfully: {title}", [o.fbt._param("title", a)], {
							hk: "e9iz9"
						});
						t(k({
							postId: e
						}));
						const r = s(),
							i = Object(v.I)(r, {
								postId: e
							}),
							a = i && i.title || "";
						t(Object(c.e)({
							kind: x.b.SuccessMod,
							text: n()
						}))
					} else t(Object(c.e)({
						kind: x.b.Error,
						text: _()
					}))
				}, I = Object(r.a)(i.a), y = (e, t) => async (s, r, {
					apiContext: i
				}) => {
					const a = await m(i(), e, t.startDate, t.endDate, t.timezoneName);
					if (a.ok) {
						const t = a.body,
							i = 14400,
							d = Math.round(t.event_start / n.Hb);
						let l = t.event_end;
						const p = {
							eventStart: d,
							eventEnd: l = l && Math.round(l / n.Hb) || d + i,
							eventIsLive: t.event_is_live
						};
						s(I({
							postId: e,
							eventInfo: p
						}));
						const u = r(),
							m = Object(v.I)(u, {
								postId: e
							}),
							b = m && m.title || "",
							h = () => o.fbt._("Following event time is updated successfully: {title}", [o.fbt._param("title", b)], {
								hk: "1m1w1c"
							});
						s(Object(c.e)({
							kind: x.b.SuccessMod,
							text: h()
						}))
					} else s(Object(c.e)({
						kind: x.b.Error,
						text: _()
					}))
				}
		},
		"./src/reddit/actions/postCollection/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return N
			})), s.d(t, "e", (function() {
				return R
			})), s.d(t, "g", (function() {
				return L
			})), s.d(t, "a", (function() {
				return W
			})), s.d(t, "c", (function() {
				return V
			})), s.d(t, "h", (function() {
				return q
			})), s.d(t, "f", (function() {
				return Q
			})), s.d(t, "d", (function() {
				return oe
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react-router-redux/es/index.js"),
				r = s("./src/lib/filterQueryParams/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/reddit/actions/postCollection/constants.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/constants/history.ts"),
				l = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/makeApiRequest/index.ts"),
				u = s("./src/lib/omitHeaders/index.ts"),
				m = s("./src/reddit/constants/headers.ts");
			var b = (e, t, s) => Object(p.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/add_post_to_collection.json`,
				method: l.cb.POST,
				data: {
					collection_id: t,
					link_fullname: s
				}
			});
			var h = (e, t, s) => Object(p.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/create_collection.json`,
				method: l.cb.POST,
				data: {
					title: t,
					sr_fullname: s
				}
			});
			var x = (e, t) => Object(p.a)(Object(u.a)(e, [m.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/delete_collection.json`,
					method: l.cb.POST,
					data: {
						collection_id: t
					}
				}),
				f = s("./src/config.ts");
			var v = (e, t) => Object(p.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${f.a.gatewayUrl}/desktopapi/v1/subreddit_collections/${t}`,
				method: l.cb.GET
			});
			var _ = (e, t, s) => Object(p.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/remove_post_in_collection.json`,
				method: l.cb.POST,
				data: {
					collection_id: t,
					link_fullname: s
				}
			});
			var O = (e, t, s) => Object(p.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_title.json`,
				method: l.cb.POST,
				data: {
					collection_id: t,
					title: s
				}
			});
			var C = (e, t, s) => Object(p.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/reorder_collection.json`,
				method: l.cb.POST,
				data: {
					collection_id: t,
					link_ids: s.join(",")
				}
			});
			var g = (e, t, s) => Object(p.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_description.json`,
				method: l.cb.POST,
				data: {
					collection_id: t,
					description: s
				}
			});
			var j = (e, t, s) => Object(p.a)(Object(u.a)(e, [m.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/update_collection_display_layout.json`,
					method: l.cb.POST,
					data: {
						collection_id: t,
						display_layout: s
					}
				}),
				E = s("./src/reddit/helpers/overlay/index.ts"),
				k = s("./src/reddit/helpers/path/index.ts"),
				w = s("./src/reddit/models/Toast/index.ts"),
				I = s("./src/reddit/selectors/postCollection.ts"),
				y = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/selectors/subreddit.ts");
			const S = Object(i.a)(c.c),
				T = Object(i.a)(c.b),
				M = Object(i.a)(c.d),
				N = (e, t) => async (s, o, {
					apiContext: n
				}) => {
					s(S());
					const r = await h(n(), e, t);
					let i;
					if (r.ok) {
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
							}))(r.body);
						s(M({
							collection: t,
							meta: e
						})), i = t
					} else {
						const e = r.error;
						s(T(e))
					}
					return i
				}, F = Object(i.a)(c.f), R = e => async (t, s, {
					apiContext: n
				}) => {
					const r = s().postCollection.subredditToIds || {};
					if (Object.keys(r).length > 0) return;
					const i = await v(n(), e);
					i.ok ? t(F(i.body)) : t(Object(a.e)({
						kind: w.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, A = Object(i.a)(c.g), L = (e, t, s) => async (n, r, {
					apiContext: i
				}) => {
					if ((await _(i(), e, t)).ok) {
						const i = r(),
							c = Object(y.I)(i, {
								postId: t
							}),
							d = c && c.title || "",
							l = Object(I.q)(i, {
								collectionId: e
							}),
							p = (l && l.postIds && l.postIds.indexOf(t) || -1) - 1;
						if (n(A({
								collectionId: e,
								postId: t
							})), s && p >= 0) {
							const t = r(),
								s = Object(I.q)(t, {
									collectionId: e
								}),
								o = s && s.postIds && s.postIds[p] || "",
								i = Object(y.I)(t, {
									postId: o
								});
							i && i.permalink && n(Object(E.a)(i.permalink))
						}
						n(Object(a.e)({
							kind: w.b.SuccessMod,
							text: o.fbt._("Following post removed from collection successfully: {postTitle}", [o.fbt._param("postTitle", d)], {
								hk: "8e1lV"
							}),
							buttonText: o.fbt._("UNDO", null, {
								hk: "3KPLib"
							}),
							buttonAction: W(e, t)
						}))
					} else n(Object(a.e)({
						kind: w.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, D = Object(i.a)(c.a), B = Object(i.a)(c.t), W = (e, t) => async (s, n, {
					apiContext: r
				}) => {
					const i = n();
					if ((await b(r(), e, t)).ok) {
						s(D({
							collectionId: e,
							postId: t
						})), s(B({
							collectionId: e,
							postId: t
						}));
						const n = Object(y.I)(i, {
								postId: t
							}),
							r = Object(I.q)(i, {
								collectionId: e
							}),
							c = r && r.title || "";
						s(Object(a.e)({
							kind: w.b.SuccessMod,
							text: o.fbt._("Success! You added a post to the collection: {title}", [o.fbt._param("title", c)], {
								hk: "3KNJWi"
							}),
							buttonText: o.fbt._("VIEW", null, {
								hk: "1SSkgL"
							}),
							buttonAction: Object(E.a)(n.permalink)
						}))
					} else s(Object(a.e)({
						kind: w.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, G = Object(i.a)(c.e), V = (e, t) => async (s, i, {
					apiContext: c
				}) => {
					const d = i();
					if ((await x(c(), e)).ok) {
						const {
							url: i
						} = d.platform.currentPage, c = Object(I.q)(d, {
							collectionId: e
						}), l = c && c.title || "", p = c && c.subredditId, u = p ? Object(P.c)(d, p) : "/";
						s(G({
							collectionId: e,
							collection: c
						})), s(t ? Object(n.c)(Object(r.a)(i, ["collection"])) : Object(n.b)(u)), s(Object(a.e)({
							kind: w.b.SuccessMod,
							text: o.fbt._("Collection deleted successfully: {title}", [o.fbt._param("title", l)], {
								hk: "4tcOKB"
							})
						}))
					} else s(Object(a.e)({
						kind: w.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, U = Object(i.a)(c.r), H = Object(i.a)(c.n), K = Object(i.a)(c.s), q = (e, t) => async (s, n, {
					apiContext: r
				}) => {
					s(U());
					const i = await O(r(), e, t);
					let c = !1;
					if (i.ok) s(K({
						collectionId: e,
						newTitle: t
					})), s(Object(a.e)({
						kind: w.b.SuccessMod,
						text: o.fbt._("Collection title updated successfully", null, {
							hk: "2hKzKl"
						})
					})), c = !0;
					else {
						const e = i.error;
						s(H(e)), s(Object(a.e)({
							kind: w.b.Error,
							text: o.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))
					}
					return c
				}, J = Object(i.a)(c.l), z = Object(i.a)(c.m), X = Object(i.a)(c.k), Q = e => async (t, s) => {
					const o = s().platform.currentPage.locationState;
					t(!(!o || !o[d.a.IsOverlay]) ? Object(E.a)(e.permalink) : Object(n.b)(Object(k.b)(e.permalink)))
				}, Y = Object(i.a)(c.i), Z = Object(i.a)(c.j), $ = Object(i.a)(c.h), ee = Object(i.a)(c.p), te = Object(i.a)(c.o), se = Object(i.a)(c.q), oe = e => async t => {
					const s = [],
						{
							collectionId: n,
							description: r,
							displayLayout: i,
							postIds: c,
							title: d
						} = e;
					c && s.push(t(((e, t) => async (s, n, {
						apiContext: r
					}) => {
						s(Y());
						const i = await C(r(), e, t);
						let c = !1;
						return i.ok ? (s(Z({
							collectionId: e,
							postIds: t
						})), s(Object(a.e)({
							kind: w.b.SuccessMod,
							text: o.fbt._("Collection order updated successfully", null, {
								hk: "4ccHEL"
							})
						})), c = !0) : (s($({
							error: i.error
						})), s(Object(a.e)({
							kind: w.b.Error,
							text: o.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))), c
					})(n, c))), d && s.push(t(q(n, d))), void 0 !== r && s.push(t(((e, t) => async (s, n, {
						apiContext: r
					}) => {
						s(J());
						const i = await g(r(), e, t);
						let c = !1;
						if (i.ok) s(z({
							collectionId: e,
							newDescription: t
						})), s(Object(a.e)({
							kind: w.b.SuccessMod,
							text: o.fbt._("Collection description updated successfully", null, {
								hk: "1rIDCC"
							})
						})), c = !0;
						else {
							const e = i.error;
							s(X(e)), s(Object(a.e)({
								kind: w.b.Error,
								text: o.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return c
					})(n, r))), i && s.push(t(((e, t) => async (s, n, {
						apiContext: r
					}) => {
						s(ee());
						const i = await j(r(), e, t);
						let c = !1;
						if (i.ok) s(se({
							collectionId: e,
							newLayout: t
						})), s(Object(a.e)({
							kind: w.b.SuccessMod,
							text: o.fbt._("Collection layout updated successfully", null, {
								hk: "1Rs19j"
							})
						})), c = !0;
						else {
							const e = i.error;
							s(te(e)), s(Object(a.e)({
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
				c = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				p = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = s("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				m = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
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
			var v = (e, t) => Object(a.a)(Object(d.a)(e, [l.a]), {
					endpoint: Object(m.a)(Object(p.a)(`${e.apiUrl}/api/editusertext`)),
					method: c.cb.POST,
					data: f(t)
				}).then(u.b),
				_ = s("./src/reddit/helpers/overlay/index.ts"),
				O = s("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				C = s("./src/reddit/helpers/trackers/lightbox.ts"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				j = s("./src/reddit/helpers/trackers/postComposer.ts"),
				E = s("./src/reddit/models/Media/index.ts"),
				k = s("./src/reddit/models/PostCreationForm/index.ts"),
				w = s("./src/reddit/models/Toast/index.ts"),
				I = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/actions/postCreation/constants.ts"),
				P = s("./src/reddit/actions/postCreation/general.ts");
			const S = Object(n.a)(y.l),
				T = Object(n.a)(y.m),
				M = Object(n.a)(y.x),
				N = Object(n.a)(y.D),
				F = Object(n.a)(y.E),
				R = (e, t) => async (s, o, {
					apiContext: n
				}) => {
					const r = o(),
						i = Object(I.I)(r, {
							postId: e
						});
					t ? (s(Object(_.a)(i.permalink)), Object(C.e)(e, "edit")(r)) : Object(g.b)(e, "edit")(r);
					const {
						media: c
					} = i;
					if (!c) return;
					let a, d = k.h.RICH_TEXT,
						l = "";
					c.type === E.o.TEXT ? (d = k.h.MARKDOWN, l = c.content) : c.type === E.o.RTJSON && (l = (d = c.rteMode || k.h.RICH_TEXT) === k.h.MARKDOWN ? c.markdownContent : c.richtextContent, a = c.mediaMetadata || void 0), s(N({
						editorMode: d,
						mediaMetadata: a,
						postContent: l,
						postId: e
					}))
				}, A = e => async (t, s, {
					apiContext: n
				}) => {
					const {
						post: c
					} = e, a = !c.media || "rtjson" !== c.media.type && "text" !== c.media.type ? "" : c.media.rteMode;
					j.u(s(), Object(P.m)(a)), t(M(c.id));
					const d = await v(n(), e),
						l = !1 === d.body.success;
					if (t(S(c.id)), d.ok && !l) {
						t(Object(i.e)({
							kind: w.b.SuccessCommunity,
							text: o.fbt._("Post successfully edited", null, {
								hk: "xej5K"
							})
						})), t(F(c.id));
						const e = Object(O.a)(d.body);
						t(Object(r.L)({
							[c.id]: e
						}))
					} else t(T(d.error))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return u
			})), s.d(t, "a", (function() {
				return _
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "f", (function() {
				return E
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/query-string/index.js"),
				n = s.n(o),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				c = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				a = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				l = s("./src/reddit/selectors/subreddit.ts");
			const p = new Set(["home", "r/popular"]),
				u = e => {
					const t = location && location.search || "",
						s = n.a.parse(t);
					p.has(e) && (s.related = e);
					const o = n.a.stringify(s);
					return o ? `?${o}` : ""
				},
				m = Object(r.a)(i.N),
				b = Object(r.a)(i.y),
				h = Object(r.a)(i.O),
				x = Object(r.a)(i.z),
				f = Object(r.a)(i.M),
				v = Object(r.a)(i.L),
				_ = Object(r.a)(i.t),
				O = Object(r.a)(i.u),
				C = e => async (t, s, {
					gqlContext: o
				}) => {
					const n = Object(a.g)(e),
						r = s();
					if (Object(d.d)(r, n)) return;
					t(m(n));
					const i = await Object(c.e)(o(), n),
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
				}, g = (e, t) => async (s, o) => s(j(e, t)), j = (e, t) => async (s, o, {
					gqlContext: n
				}) => {
					const r = o();
					if (Object(d.f)(r)) return;
					s(h());
					const i = await Object(c.f)(n(), e, t),
						a = Date.now();
					if (i.ok && i.body && i.body.data) {
						const t = i.body.data;
						s(x({
							listingName: e,
							models: t,
							utcTimeStamp: a
						}))
					} else s(I({
						error: i.error,
						utcTimeStamp: a
					}))
				}, E = (e, t) => async (s, o) => s(k(e, t)), k = (e, t) => async (s, o, {
					gqlContext: n
				}) => {
					const r = o();
					if (Object(d.f)(r)) return;
					s(h());
					const i = Date.now(),
						a = e.replace("r/", ""),
						p = Object(l.F)(r, a),
						u = await Object(c.b)(n(), {
							subredditId: p,
							options: t
						}),
						m = u.body;
					u.ok && m && m.data || s(I({
						error: u.error,
						utcTimeStamp: i
					}));
					const b = m.data.liveVideoFeed.posts.edges.map(e => (async (e, t) => {
							const s = await Object(c.e)(e, t),
								o = Date.now(),
								n = s.body;
							return n && n.data ? n.data : void w({
								streamId: t,
								error: s.error,
								utcTimeStamp: o
							})
						})(n(), e.node.id)),
						f = (await Promise.all(b)).filter(e => void 0 !== typeof e);
					s(x({
						listingName: e,
						models: f,
						utcTimeStamp: i
					}))
				}, w = e => async t => {
					t(f(e))
				}, I = e => async t => {
					t(v(e))
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
			const n = Object(o.a)(() => s.e("ReportFlow").then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				r = Object(o.a)(() => s.e("ReportFlow").then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(o.a)(() => s.e("ReportFlow").then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				r = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				i = s.n(r);
			const c = o.a.wrapped(n.c, "RestrictedButton", i.a);
			t.a = c
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
				c = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/selectors/chatPost.ts"),
				p = s("./src/reddit/components/CommentsChat/LiveIcon/index.m.less"),
				u = s.n(p);
			const m = .1,
				b = Object(a.c)({
					isChatPost: l.d
				}),
				h = Object(c.b)(b);
			class x extends i.a.Component {
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
					} = this.props, s = t && e;
					return t ? i.a.createElement(o.a, {
						rootMargin: "20px 0px 20px 0px",
						threshold: m,
						onChange: this.onVisibilityChange
					}, i.a.createElement("div", {
						className: Object(d.a)(u.a.Icon, this.props.className)
					}, i.a.createElement("span", {
						className: Object(d.a)(u.a.Animate, u.a.top, {
							[u.a.play]: s
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
							[u.a.play]: s
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
				n = s("./node_modules/lodash/random.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = s("./node_modules/reselect/es/index.js"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				m = s("./src/lib/prettyPrintNumber/index.ts"),
				b = s("./src/reddit/components/CountAnimation/index.tsx"),
				h = s("./src/reddit/components/CountAnimation/config.ts"),
				x = s("./src/reddit/components/CountAnimation/helpers.ts"),
				f = s("./src/reddit/constants/componentTestIds.ts"),
				v = s("./src/reddit/constants/postLayout.ts"),
				_ = s("./src/reddit/helpers/path/index.ts"),
				O = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				C = s("./src/reddit/selectors/chatPost.ts"),
				g = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				j = s("./src/reddit/selectors/experiments/postSeo.ts"),
				E = s("./src/reddit/selectors/posts.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				w = s("./src/reddit/components/CommentsLink/index.m.less"),
				I = s.n(w);
			const y = Object(a.b)(() => Object(l.c)({
					isChatPost: C.d,
					isPostSEOEligible: j.e,
					postPermalink: E.H,
					shouldOpenPostInNewTab: k.ab,
					totalDiscount: g.a,
					variantAnimationConfig: g.e
				})),
				{
					commentCount: {
						inititalDelayRange: {
							lower: P,
							upper: S
						},
						subsequentRecurringDelayRange: {
							lower: T,
							upper: M
						},
						incrementRangeRelativeToTotalDiscount: {
							lower: N,
							upper: F
						}
					}
				} = h.b,
				R = () => r()(P, S),
				A = () => r()(T, M),
				L = ({
					type: e,
					numComments: t,
					isChatPost: s,
					modModeEnabled: n,
					hasModPostPerms: a,
					shouldShowIcon: d,
					shouldShowText: l,
					text: u,
					totalDiscount: h,
					shouldDisjointAnimation: f,
					shouldShowPageTransPersistence: _,
					postId: C
				}) => {
					let g;
					g = u || (e === v.g.Compact || s || n && a ? Object(m.b)(t) : o.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [o.fbt._plural(t, "number", Object(m.b)(t))], {
						hk: "1QeOde"
					}));
					const j = Object(i.useCallback)(() => r()(Math.ceil((h || 0) * N), Math.ceil((h || 0) * F)), [h]),
						E = Object(i.useRef)(Object(x.k)(C, x.a.Comment)),
						k = Object(i.useRef)(_ && void 0 !== h && Object(x.e)(E.current));
					return c.a.createElement(i.Fragment, null, d && c.a.createElement(O.a, {
						className: I.a.commentIcon,
						role: "presentation"
					}), l && c.a.createElement("span", {
						className: I.a.text
					}, void 0 !== h ? c.a.createElement(b.a, {
						initialDisplayCount: k.current || t - h,
						countToUpperBound: t,
						initialDelay: R,
						subsequentRecurringDelay: A,
						incrementDelta: j,
						shouldDisjointAnimation: f,
						id: E.current
					}) : g), l && (!n || !a) && void 0 !== h && c.a.createElement("span", {
						className: Object(p.a)(I.a.text, I.a.commentsText)
					}, o.fbt._("comments", null, {
						hk: "ZQ8MY"
					})))
				};
			t.a = y(e => {
				const {
					className: t,
					hasModPostPerms: s,
					isChatPost: o,
					isCommentPermalink: n,
					isCommentsPage: r,
					isOverlay: i,
					isPostSEOEligible: a,
					modModeEnabled: l,
					numComments: m,
					onClick: b,
					postPermalink: h,
					shouldOpenPostInNewTab: x,
					shouldShowIcon: v = !0,
					shouldShowText: O = !0,
					text: C,
					type: g,
					totalDiscount: j,
					variantAnimationConfig: E,
					postId: k
				} = e, w = r && !n && !a, y = n && !i, P = c.a.createElement(L, {
					type: g,
					numComments: m,
					isChatPost: o,
					totalDiscount: j,
					modModeEnabled: l,
					hasModPostPerms: s,
					shouldDisjointAnimation: null == E ? void 0 : E.shouldDisjointAnimation,
					shouldShowPageTransPersistence: null == E ? void 0 : E.shouldShowPageTransPersistence,
					shouldShowIcon: v,
					shouldShowText: O,
					text: C,
					postId: k
				});
				return w ? c.a.createElement("div", {
					className: Object(p.a)(I.a.commentsLink, I.a.defaultCursorWrapper, t),
					onClick: b
				}, P) : c.a.createElement(d.a, {
					rel: "nofollow",
					"data-click-id": "comments",
					"data-test-id": f.a,
					className: Object(p.a)(I.a.commentsLink, I.a.link, t),
					target: x ? "_blank" : void 0,
					to: y ? Object(_.b)(h) : Object(u.a)(h, !0),
					onClick: b
				}, P)
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
				c = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = s("./src/reddit/controls/TextButton/index.tsx"),
				d = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				p = s.n(l);
			const u = e => e.preventDefault();
			t.a = Object(i.a)(e => r.a.createElement(c.d, null, r.a.createElement(c.h, null, r.a.createElement(d.a, null, r.a.createElement(c.p, null, e.headerText || o.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(a.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(c.b, null)))), r.a.createElement(c.k, null, r.a.createElement(c.o, {
				className: p.a.ModalText
			}, e.modalText)), r.a.createElement(c.f, null, !e.hideCancelButton && r.a.createElement(c.a, {
				className: p.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || o.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(c.t, {
				className: p.a.buttonWidth,
				onMouseDown: u,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.actionText))))
		},
		"./src/reddit/components/ContentTooltip/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/ContentTooltip/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				a = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/fastdom/index.ts"),
				u = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/selectors/tooltip.ts"),
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
				_ = Object(l.a)(e => {
					const {
						children: t,
						className: s,
						style: o,
						caretPosition: n,
						caretColor: i,
						onClick: c,
						...a
					} = e;
					return r.a.createElement("div", x({
						onClick: c,
						className: Object(d.a)(s, h.a.StyledTooltipContainer, {
							[h.a.caretOnTop]: "top" === n,
							[h.a.caretOnLeft]: "left" === n,
							[h.a.caretOnRight]: "right" === n,
							[h.a.caretOnBottom]: "bottom" === n
						}),
						style: {
							...o,
							"--contentTooltip-caretColor": i && i[n] ? i[n] : Object(u.a)(e).body
						}
					}, a), t)
				}),
				O = Object(c.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(m.b)(t)(e)
				}),
				C = Object(a.a)(_, [o.a.Click, o.a.Keydown]),
				g = Object(i.b)(O);
			class j extends r.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = f
						} = this.props;
						p.a.read(() => {
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
					return r.a.createElement(C, x({}, this.props, {
						caretPosition: o,
						targetPosition: t,
						tooltipPosition: s
					}))
				}
			}
			t.a = g(j)
		},
		"./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/fonts/Gift/index.m.less"),
				a = s.n(c),
				d = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				l = s("./src/reddit/selectors/gold/awardIcon.ts"),
				p = s("./src/reddit/selectors/gold/purchaseCatalog.ts");
			t.a = e => {
				const t = Object(r.e)(p.b),
					s = Object(r.e)(e => t && Object(l.a)(e, {
						award: t,
						minSize: 32
					}));
				return s ? n.a.createElement("img", {
					className: Object(i.a)(a.a.GildIcon, e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave,
					src: s
				}) : n.a.createElement(d.a, e)
			}
		},
		"./src/reddit/components/Flatlist/ResponsiveRow.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				c = s("./src/reddit/controls/Dropdown/Row.tsx"),
				a = s("./src/reddit/components/Flatlist/index.m.less"),
				d = s.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				flatlistItem: e,
				isLoggedIn: t,
				isUserOp: s,
				noBreakpoints: o,
				...a
			}) => n.a.createElement("div", {
				"data-ignore-click": !!a.searchIgnoreClick,
				className: d.a.rowContainer
			}, n.a.createElement(c.a, l({}, a, {
				className: o ? d.a.responsiveRow : Object(r.a)(d.a.responsiveRow, Object(i.b)({
					flatlistItem: e,
					isLoggedIn: t,
					isUserOp: s
				}))
			})))
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
					e.EditPost = "EDITPOST", e.EditFlair = "EDITFLAIR", e.Save = "SAVE", e.Gild = "GILD", e.Hide = "HIDE", e.PostOverflowMenu = "POST_OVERFLOW_MENU", e.Report = "REPORT", e.Share = "SHARE"
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
				c = s("./src/reddit/components/Flatlist/breakpoints.m.less"),
				a = s.n(c),
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
					[d.a.Share]: n.Second
				},
				p = e => {
					return (e => {
						const t = a.a[e.type],
							s = a.a[e.group],
							o = a.a[e.groupVariant];
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
				flatlistSeparator: "x7sinePdvDKj7bf-cdm4Z",
				flexSpacer: "_21pmAV9gWG6F_UKVe7YIE0",
				modActionsIcon: "_15c1hqseW25EvRu0WP2Dq5",
				shareText: "_6_44iTtZoeY6_XChKt5b0",
				commentsLink: "_2qww3J5KKzsD7e5DO0BvvU",
				supportButton: "_3NIVQWStkLT7RXnwKpKNuT",
				ShareButton: "kU8ebCMnbXfjCWfqn0WPb",
				shareButton: "kU8ebCMnbXfjCWfqn0WPb",
				shareIcon: "_1GQDWqbF-wkYWbrpmOvjqJ",
				ShareMenu: "_JRBNstMcGxbZUxrrIKXe",
				shareMenu: "_JRBNstMcGxbZUxrrIKXe",
				liveDiscussionWrapper: "_3rnnBQZL1OOttG3tFn629n",
				large: "_26YkhAfncIjLM3iT6Gbcvt",
				giftIcon: "_28cxffDHYgGoObQw25vIs8"
			}
		},
		"./src/reddit/components/Flatlist/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return ve
			})), s.d(t, "a", (function() {
				return _e
			})), s.d(t, "d", (function() {
				return Ee
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/timezone/index.ts"),
				m = s("./src/reddit/actions/gold/modals.ts"),
				b = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/actions/post.ts"),
				x = s("./src/reddit/actions/postCreation/editing.ts"),
				f = s("./src/reddit/actions/postFlair.ts"),
				v = s("./src/reddit/actions/reportFlow/index.ts"),
				_ = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				O = s("./src/reddit/components/CommentsLink/index.tsx"),
				C = s("./src/reddit/hooks/useTracking.ts"),
				g = s("./src/reddit/helpers/trackers/freeAwardOffer.ts"),
				j = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				E = s("./src/reddit/components/ContentTooltip/index.tsx"),
				k = s("./src/reddit/components/GiveAwardTooltip/index.m.less"),
				w = s.n(k);
			const {
				fbt: I
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var y = e => {
					const {
						tooltipId: t
					} = e, s = Object(i.e)(j.b), o = Object(C.a)();
					return Object(n.useEffect)(() => {
						s && o(Object(g.c)())
					}, [s, o]), s ? r.a.createElement(E.a, {
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
					}, I._("Tap to give your {award name} Award", [I._param("award name", s.name)], {
						hk: "2EMqbP"
					}))) : null
				},
				P = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				S = s("./src/reddit/components/ModModeReports/helpers.ts"),
				T = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				M = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				N = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				F = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				R = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				A = s("./src/reddit/components/ShareMenu/index.tsx"),
				L = s("./src/reddit/components/TrackingHelper/index.tsx"),
				D = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				B = s("./src/reddit/constants/postLayout.ts"),
				W = s("./src/reddit/contexts/PageLayer/index.tsx"),
				G = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				V = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				U = s("./src/reddit/selectors/user.ts"),
				H = s("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				K = s("./src/reddit/helpers/correlationIdTracker.ts"),
				q = s("./src/reddit/helpers/trackers/modTools.ts"),
				J = s("./src/reddit/helpers/trackers/post.ts"),
				z = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				X = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				Q = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Y = s("./src/reddit/icons/fonts/Share/index.tsx"),
				Z = s("./src/reddit/models/Media/index.ts"),
				$ = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				ee = s("./src/reddit/models/PostCreationForm/index.ts"),
				te = s("./src/reddit/models/User/index.ts"),
				se = s("./src/reddit/components/Flatlist/constants.ts"),
				oe = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				ne = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				re = s("./src/reddit/actions/postCollection/index.ts"),
				ie = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx"),
				ce = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx"),
				ae = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				de = s("./src/reddit/selectors/activeModalId.ts"),
				le = s("./src/reddit/selectors/experiments/coreStyles.ts"),
				pe = s("./src/reddit/components/Flatlist/index.m.less"),
				ue = s.n(pe);

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			let be, he;
			const xe = p.a.button("ShareButton", ue.a),
				fe = p.a.wrapped(A.a, "ShareMenu", ue.a),
				ve = Object(l.a)(({
					className: e,
					...t
				}) => r.a.createElement(X.a, me({}, t, {
					className: Object(a.a)(ue.a.modActionsIcon, e),
					style: {
						color: Object(V.a)(Object(G.a)(t), $.a.actionIcon, $.b.actionIcon)
					}
				}))),
				_e = e => r.a.createElement("div", me({}, e, {
					className: Object(a.a)(ue.a.flatlistSeparator, e.className)
				})),
				Oe = Object(W.t)({
					currentProfileName: W.h,
					isCommentPermalink: W.v,
					isCommentsPage: W.w,
					isProfilePostListing: W.I,
					pageLayer: e => e
				}),
				Ce = Object(c.c)({
					activeModalId: de.a,
					claimedFreeAward: j.b,
					isInIcons2020: le.b,
					layout: W.N,
					userIsOp: U.ob,
					subreddit: W.q
				}),
				ge = Object(i.b)(Ce, (e, {
					post: t,
					isOverlay: o,
					isCommentsPage: n
				}) => ({
					addPostToCollection: (t, s) => e(Object(re.a)(t, s)),
					onToggleModal: t => e(Object(b.i)(t)),
					onToggleSave: () => e(Object(h.N)(t.postId)),
					onHide: s => e(Object(h.R)(t.postId, !t.hidden, o, !0)),
					onReportClick: () => e(Object(v.c)(t.postId, o)),
					onEdit: () => {
						const s = !o && !n;
						e(Object(x.a)(t.postId, s))
					},
					onFlairPost: () => e(Object(b.i)(Object(M.b)(t.postId, o))),
					onGildClick: (s, o) => e(Object(m.d)({
						awardId: o,
						correlationId: s,
						thingId: t.postId
					})),
					onFlairChanged: ({
						selectedTemplateId: s,
						previewFlair: o
					}) => e(Object(f.h)({
						post: t,
						selectedTemplateId: s,
						previewFlair: o
					})),
					toggleEditStartTimeModal: async () => {
						be && he || ([be, he] = await Promise.all([s.e("schedulePickerModal").then(s.bind(null, "./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx")).then(e => e.default), Promise.resolve().then(s.bind(null, "./src/reddit/actions/eventPosts/index.ts")).then(e => e.editEventTimeRequested)])), e(Object(b.i)(Object(ee.r)(t.postId, o, ee.j.POST_OVERFLOW_MENU)))
					},
					addEventStartTime: s => {
						he && e(he(t.id, s))
					}
				}));
			class je extends r.a.Component {
				constructor() {
					super(...arguments), this.handleGild = async () => {
						var e;
						const {
							onGildClick: t,
							post: o,
							sendEvent: n
						} = this.props;
						t(Object(K.d)(K.a.GildingFlow, !0), null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: r
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						n(r(o.id))
					}, this.onToggleCurrentModal = () => {
						this.props.activeModalId && this.props.onToggleModal(this.props.activeModalId)
					}, this.onToggleCollectionListModal = () => {
						const {
							isOverlay: e,
							post: t
						} = this.props, s = Object(ee.s)(t.id, e);
						this.props.onToggleModal(s)
					}, this.addPostToCollection = e => {
						this.props.addPostToCollection(e.id, this.props.post.id).then(() => this.onToggleCurrentModal())
					}, this.sendEventWithName = (e, t) => {
						const {
							hostPostId: s,
							isOverlay: o,
							listingKey: n,
							post: r,
							sendEvent: i
						} = this.props;
						i(Object(J.f)(r.id, e, o ? "post_detail" : "post", n, s, void 0, null == t ? void 0 : t.referralId))
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
						className: s,
						currentProfileName: n,
						currentUser: i,
						hasModFlairPerms: c,
						hasModFullPerms: l,
						hasModPostPerms: p,
						isCommentPermalink: m,
						isCommentsPage: b,
						isInIcons2020: h,
						isLargePost: x,
						isOverlay: f,
						isProfilePostListing: v,
						isSticky: C,
						layout: g,
						modModeEnabled: j,
						onFlairChanged: E,
						onIgnoreReports: k,
						onOpenReportsDropdown: w,
						pageLayer: I,
						post: A,
						sendEvent: L,
						showEditFlair: W,
						showEditPost: G,
						subreddit: V,
						toggleEditStartTimeModal: U,
						tooltipType: K,
						userIsOp: X,
						searchIgnoreClick: $,
						isActionBarAnimationEnabled: re,
						isForceSelected: ae
					} = this.props, de = !!i && Object(te.e)(i) === A.author, le = Object(ne.a)("View--Reports", A.id, K), pe = Object(ne.a)(d.bc, A.id, K), me = Object(S.c)(A), he = Ee("-mod-actions-menu", A.id, f, C), _e = Object(S.a)(A), Oe = A.postId, Ce = g === B.g.Large, ge = !b && Ce || p && j, je = !(f || b || m), ke = i && A.isGildable, we = A.media && A.media.type === Z.o.LIVEVIDEO;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(a.a)(ue.a.flatlistContainer, s)
					}, r.a.createElement(O.a, {
						className: Object(a.a)(ue.a.rowContainer, ue.a.commentsLink),
						hasModPostPerms: p,
						isCommentsPage: b,
						isCommentPermalink: m,
						isOverlay: f,
						postId: A.id,
						modModeEnabled: j,
						numComments: A.numComments,
						isActionBarAnimationEnabled: re,
						isForceSelected: ae
					}), ke && r.a.createElement(r.a.Fragment, null, r.a.createElement(H.a, {
						displayText: o.fbt._("Give Award", null, {
							hk: "NIFUn"
						}),
						flatlistItem: se.a.Gild,
						isLoggedIn: !!i,
						isUserOp: X,
						onClick: this.handleGild,
						searchIgnoreClick: $,
						skipRoleAttr: !0
					}, r.a.createElement(F.a, {
						className: ue.a.giftIcon,
						id: pe
					})), r.a.createElement(y, {
						postOrComment: A,
						tooltipId: pe
					})), r.a.createElement(fe, {
						className: Object(a.a)(ue.a.rowContainer, Object(oe.b)({
							flatlistItem: se.a.Share,
							isLoggedIn: !!i,
							isUserOp: X
						})),
						dropdownId: Ee("-share-menu", A.id, f, C),
						permalink: A.permalink,
						post: A,
						sendEventWithName: this.sendEventWithName,
						subreddit: V
					}, r.a.createElement(xe, {
						"data-click-id": "share"
					}, r.a.createElement(Y.a, {
						className: ue.a.shareIcon
					}), r.a.createElement("span", {
						className: ue.a.shareText
					}, o.fbt._("share", null, {
						hk: "1eAfZg"
					})))), G && !ge && r.a.createElement(H.a, {
						displayText: o.fbt._("Edit post", null, {
							hk: "Jq2Cr"
						}),
						flatlistItem: se.a.EditPost,
						isLoggedIn: !!i,
						isUserOp: X,
						onClick: this.props.onEdit,
						skipRoleAttr: !0
					}, r.a.createElement(F.c, null)), (!p || !j) && r.a.createElement(H.a, {
						displayText: A.saved ? o.fbt._("unsave", null, {
							hk: "4Dn4IT"
						}) : o.fbt._("save", null, {
							hk: "3NOMst"
						}),
						flatlistItem: se.a.Save,
						isLoggedIn: !!i,
						isUserOp: X,
						onClick: this.onSaveClick,
						searchIgnoreClick: $,
						skipRoleAttr: !0
					}, A.saved ? r.a.createElement(F.f, null) : r.a.createElement(F.e, null)), !A.isSponsored && !ge && r.a.createElement(H.a, {
						displayText: A.hidden ? o.fbt._("unhide", null, {
							hk: "151XLs"
						}) : o.fbt._("hide", null, {
							hk: "4AnA6R"
						}),
						flatlistItem: se.a.Hide,
						isLoggedIn: !!i,
						isUserOp: X,
						onClick: this.onHideClick,
						searchIgnoreClick: $,
						skipRoleAttr: !0
					}, r.a.createElement(F.b, {
						isFilled: h && A.hidden
					})), !de && !A.isSponsored && !ge && r.a.createElement(H.a, {
						displayText: o.fbt._("report", null, {
							hk: "1phfns"
						}),
						flatlistItem: se.a.Report,
						isLoggedIn: !!i,
						isUserOp: X,
						onClick: this.onReportClick,
						searchIgnoreClick: $,
						skipRoleAttr: !0
					}, r.a.createElement(F.d, null)), r.a.createElement(T.a, {
						isOverlay: f,
						layout: g,
						modModeEnabled: j,
						post: A,
						sendEvent: L
					}), p && r.a.createElement(P.a, {
						dropdownId: he,
						onClick: () => L(Object(J.f)(A.id, "post_mod_action_menu"))
					}, r.a.createElement(ve, null), r.a.createElement(N.a, {
						canEditFlair: c && !!W,
						hasModFullPerms: l,
						hasModPostPerms: p,
						isOverlay: !!f,
						isPostAuthor: de,
						modModeEnabled: j,
						post: A,
						tooltipId: he
					})), p && me && !j && r.a.createElement(R.c, {
						text: `${_e}`,
						onClick: () => {
							w(le), L(Object(J.f)(A.id, "post_report_menu"))
						},
						id: le
					}, r.a.createElement(D.a, {
						model: A,
						onIgnoreReports: () => {
							k(), L(Object(q.j)(A.ignoreReports ? "restore_reports" : "ignore_reports", A.id))
						},
						tooltipId: le
					}), A.ignoreReports ? r.a.createElement(z.a, null) : r.a.createElement(Q.a, null)), !A.isSponsored && r.a.createElement(F.g, {
						currentProfileName: n,
						dropdownId: Ee("-overflow-menu", A.id, f, C),
						isCommentsPage: b,
						isFixed: C,
						isOverlay: !!f,
						isProfilePostListing: v,
						layout: g,
						modModeWithPost: j && p,
						pageLayer: I,
						permalink: A.permalink,
						postId: Oe,
						sendEvent: L,
						showEditPost: !!G,
						showEditFlair: !!W,
						useFlatlistBreakpoints: this.props.useFlatlistBreakpoints,
						toggleAddEventStartTimeModal: U,
						toggleEditStartTimeModal: U
					}), e === Object(ee.s)(A.id, f) && r.a.createElement(ie.a, {
						subredditId: A.belongsTo.id,
						onClose: this.onToggleCurrentModal,
						postId: A.id,
						onSelectCollection: this.addPostToCollection,
						titleText: o.fbt._("Add post to a collection", null, {
							hk: "38vSyF"
						}),
						onItemHoverActionText: o.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						isOverlay: f
					}), e === Object(ee.r)(A.id, f, ee.j.POST_OVERFLOW_MENU) && be && r.a.createElement(be, {
						onChange: t,
						onClose: U,
						schedule: Object(u.c)(A),
						shouldShowDeleteButton: !1
					}), e === Object(ee.t)(A.id, f) && r.a.createElement(ce.a, {
						onCancel: this.onToggleCollectionListModal,
						onCollectionCreated: this.addPostToCollection,
						subredditId: A.belongsTo.id
					}), e === Object(M.b)(A.id, f) && r.a.createElement(M.a, {
						flairs: A.flair,
						subredditId: A.belongsTo.id,
						modalId: Object(M.b)(A.id, f),
						onFlairChanged: E
					}), r.a.createElement("div", {
						className: ue.a.flexSpacer
					})), je && !we && r.a.createElement(_.a, {
						className: Object(a.a)(ue.a.liveDiscussionWrapper, {
							[ue.a.large]: x
						}),
						isMod: p,
						postId: A.postId
					}))
				}
			}
			const Ee = (e, t, s, o) => {
					let n = t;
					return s && (n += "-overlay"), o && (n += "-sticky"), n += e
				},
				ke = Oe(ge(Object(L.c)(je)));
			t.c = r.a.memo((function(e) {
				const t = Object(ae.b)();
				return r.a.createElement(ke, me({}, e, {
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
		"./src/reddit/components/ModActionsMenu/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/tooltip.ts"),
				a = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				d = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				l = s("./src/reddit/selectors/tooltip.ts");
			const p = Object(i.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(l.b)(t)(e)
				}),
				u = Object(r.b)(p, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(c.h)({
						tooltipId: t
					}))
				})),
				m = () => null;
			t.a = u(e => n.a.createElement("div", {
				id: e.dropdownId,
				onClick: e.dropdownIsOpen ? m : e.onClick
			}, e.inCommentFlatlist ? n.a.createElement(a.a, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children) : n.a.createElement(d.c, {
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
				RemoveGroup: "_3LzZxt89CjBbx__WYlCPCh",
				removeGroup: "_3LzZxt89CjBbx__WYlCPCh",
				SpamGroup: "_2WaHNFliLea9SKyF3nlBx8",
				spamGroup: "_2WaHNFliLea9SKyF3nlBx8",
				FlairGroup: "_129dedXMiIcel_grUelwoG",
				flairGroup: "_129dedXMiIcel_grUelwoG",
				HideIfVWLarger: "_1RO0TIeDG89QPdOWgZwUvR",
				hideIfVwLarger: "_1RO0TIeDG89QPdOWgZwUvR"
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
				return p
			}));
			var o, n, r, i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				a = s("./src/reddit/components/ModToolsFlatlist/breakpoints.m.less"),
				d = s.n(a);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(o || (o = {})),
			function(e) {
				e.Approve = "ApproveGroup", e.Remove = "RemoveGroup", e.Spam = "SpamGroup", e.Flair = "FlairGroup"
			}(n || (n = {})),
			function(e) {
				e.Compact = "CompactVariant", e.Default = "DefaultVariant"
			}(r || (r = {}));
			const l = {
					[c.a.Approve]: n.Approve,
					[c.a.Remove]: n.Remove,
					[c.a.Spam]: n.Spam,
					[c.a.Flair]: n.Flair
				},
				p = e => {
					const t = l[e.flatlistItem],
						s = d.a[e.breakpointType],
						o = d.a[t],
						n = e.isCompact ? d.a[r.Compact] : d.a[r.Default];
					return Object(i.a)(s, o, n)
				}
		},
		"./src/reddit/components/ModToolsFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				container: "OccjSdFd6HkHhShRg6DOl"
			}
		},
		"./src/reddit/components/ModToolsFlatlist/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				b = s("./src/reddit/components/ModModeReports/helpers.ts"),
				h = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				x = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				f = s("./src/reddit/constants/postLayout.ts"),
				v = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				_ = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				C = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				g = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				j = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				E = s("./src/reddit/selectors/activeModalId.ts"),
				k = s("./src/reddit/selectors/moderatorPermissions.ts"),
				w = s("./src/reddit/selectors/postFlair.ts"),
				I = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				y = s("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				P = s("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				S = s.n(P);
			const T = (e, t = !1) => Object(y.b)({
					breakpointType: y.a.HideIfVWSmaller,
					flatlistItem: e,
					isCompact: t
				}),
				M = Object(i.b)(() => Object(c.c)({
					activeModalId: E.a,
					canEditFlair: (e, {
						post: t
					}) => Object(w.a)(e, {
						postId: t.id
					}),
					moderatorPermissions: (e, t) => Object(k.h)(e, {
						postId: t.post.id
					})
				}), (e, {
					post: t
				}) => ({
					onApprovePost: () => e(Object(p.n)(t.id)),
					onOpenPostModModeDropdown: t => e(Object(u.h)({
						tooltipId: t
					})),
					onRemovePost: () => e(Object(p.M)(t.id, !1)),
					onSpamPost: () => e(Object(p.M)(t.id, !0)),
					onFlairPost: t => () => e(Object(l.i)(t))
				}));
			t.a = M(e => {
				const {
					canEditFlair: t,
					className: s,
					isOverlay: i,
					layout: c,
					moderatorPermissions: l,
					modModeEnabled: p,
					onApprovePost: u,
					onFlairPost: E,
					onRemovePost: k,
					onSpamPost: w,
					post: y,
					sendEvent: P,
					showIconsOnly: M
				} = e, N = Object(v.a)(l), F = Object(b.b)(y), R = !(!y.approvedBy || !F), A = Object(h.b)(y.id, i), L = N && p && !y.isSponsored, D = t && p;
				let B, W, G;
				M || (B = ((e, t) => e ? o.fbt._("reapprove", null, {
					hk: "OJvB1"
				}) : t ? o.fbt._("approved", null, {
					hk: "2bWAFI"
				}) : o.fbt._("approve", null, {
					hk: "2DIHcM"
				}))(R, y.approvedBy), W = ((e, t) => e ? t === d.k ? o.fbt._("Confirm removal", null, {
					hk: "1t5tKM"
				}) : o.fbt._("removed", null, {
					hk: "35ZTch"
				}) : o.fbt._("remove", null, {
					hk: "3LWMcS"
				}))(y.isRemoved, y.bannedBy), G = (e => e ? o.fbt._("spammed", null, {
					hk: "3GPrkZ"
				}) : o.fbt._("spam", null, {
					hk: "3ebJLg"
				}))(y.isSpam));
				const V = !i && c === f.g.Compact;
				return r.a.createElement("div", {
					className: Object(a.a)(S.a.container, s)
				}, L && r.a.createElement(n.Fragment, null, r.a.createElement(x.b, {
					className: T(I.a.Approve, V),
					key: "approveButton",
					text: B,
					disabled: !!y.approvedBy && !F,
					onClick: () => {
						u(), P(Object(_.f)(y.id, "approve"))
					}
				}, r.a.createElement(O.a, null)), r.a.createElement(x.d, {
					className: T(I.a.Remove, V),
					key: "removeButton",
					text: W,
					disabled: y.isRemoved && y.bannedBy !== d.k,
					onClick: () => {
						k(), y.isRemoved && y.bannedBy === d.k ? P(Object(_.f)(y.id, "confirm_remove")) : P(Object(_.f)(y.id, "remove"))
					}
				}, r.a.createElement(C.a, null)), r.a.createElement(x.d, {
					className: T(I.a.Spam, V),
					key: "removeSpamButton",
					text: G,
					disabled: y.isSpam,
					onClick: () => {
						w(), P(Object(_.f)(y.id, "spam"))
					}
				}, r.a.createElement(g.a, null))), D && r.a.createElement(x.c, {
					className: T(I.a.Flair, V),
					key: "tagButton",
					onClick: () => {
						E(A)(), P(Object(_.f)(y.id, "post_flair_picker"))
					}
				}, r.a.createElement(j.a, null)), r.a.createElement(m.f, null))
			})
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
				c = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/Row.tsx"),
				b = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				x = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				f = s("./src/reddit/selectors/tooltip.ts"),
				v = s("./src/reddit/components/OverflowMenu/index.m.less"),
				_ = s.n(v);
			const O = d.a.wrapped(u.a, "_Dropdown", _.a),
				C = Object(p.a)(O),
				g = d.a.button("MenuButton", _.a),
				j = d.a.wrapped(x.a, "MenuIcon", _.a),
				E = d.a.wrapped(m.b, "DropdownRow", _.a),
				k = Object(c.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(f.b)(t)(e)
				}),
				w = Object(i.b)(k, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				I = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = w(e => {
				const t = Object(b.b)();
				return r.a.createElement(g, {
					"aria-expanded": e.dropdownIsOpen,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("more options", null, {
						hk: "2EnY1x"
					}),
					className: Object(a.a)(e.className, {
						[_.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
					}),
					disabled: e.disabled,
					onClick: I(e),
					onMouseDown: e.handleMouseDown,
					id: e.dropdownId
				}, e.icon ? e.icon : t ? r.a.createElement(h.a, {
					name: "overflow_horizontal"
				}) : r.a.createElement(j, null), r.a.createElement(C, {
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId,
					isFixed: e.isFixed,
					targetPosition: e.targetPosition,
					tooltipPosition: e.tooltipPosition,
					style: e.style
				}, e.children))
			})
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
				c = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/asModal/index.tsx"),
				l = s("./src/lib/memoizeByReference/index.ts"),
				p = s("./src/reddit/actions/postCreation/general.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/keycodes.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/Input/index.tsx"),
				x = s("./src/reddit/icons/svgs/Close/index.tsx"),
				f = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				v = s("./src/reddit/icons/svgs/Search/index.tsx"),
				_ = s("./src/reddit/layout/row/Inline/index.tsx"),
				O = s("./src/reddit/models/PostCreationForm/index.ts"),
				C = s("./src/reddit/selectors/postCollection.ts"),
				g = s("./src/lib/timeAgo/index.ts"),
				j = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				E = s("./src/reddit/helpers/name/index.ts"),
				k = s("./src/reddit/models/Subreddit/index.ts"),
				w = s("./src/reddit/models/User/index.ts"),
				I = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),
				S = s.n(P),
				T = s("./src/lib/lessComponent.tsx");
			const {
				fbt: M
			} = s("./node_modules/fbt/lib/FbtPublic.js"), N = T.a.div("Container", S.a), F = T.a.h2("PostTitle", S.a), R = T.a.div("MetaLine", S.a), A = T.a.span("SubredditName", S.a), L = T.a.time("InfoSpan", S.a), D = Object(a.c)({
				subreddit: (e, {
					collection: {
						subredditId: t
					}
				}) => t ? Object(I.S)(e, {
					subredditId: t
				}) : void 0,
				user: y.i
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
						user: s,
						onHoverActionText: o
					} = this.props, n = t && Object(k.g)(t) && s ? Object(E.d)(Object(w.e)(s)) : t ? t.displayText : "", r = e.postIds.length;
					return i.a.createElement(N, {
						onClick: this.onClick,
						className: S.a.container
					}, i.a.createElement(F, {
						"data-redditstyle": !0
					}, e.title), i.a.createElement(R, {
						"data-redditstyle": !0
					}, n && i.a.createElement(A, {
						"data-redditstyle": !0
					}, n), n && i.a.createElement(j.b, null), i.a.createElement(L, null, M._({
						"*": "{number of posts} posts",
						_1: "1 post"
					}, [M._plural(r, "number of posts")], {
						hk: "1Uy96U"
					})), i.a.createElement(j.b, null), i.a.createElement(L, null, M._("created {time}", [M._param("time", Object(g.d)(e.createdAtUTC))], {
						hk: "2cUc5m"
					}))), o && i.a.createElement("div", {
						className: S.a.onHoverActionText
					}, i.a.createElement("span", null, o)))
				}
			}
			var W = Object(c.b)(D)(B),
				G = s("./src/reddit/helpers/trackers/postCollection.ts"),
				V = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less"),
				U = s.n(V);
			const H = `${o.a.assetPath}/img/snoo-drafts.png`,
				K = T.a.div("TopRow", U.a),
				q = T.a.div("TitleRow", U.a),
				J = T.a.div("DetailsContainer", U.a),
				z = T.a.wrapped(_.a, "ButtonRow", U.a),
				X = T.a.div("CloseWrapper", U.a),
				Q = T.a.wrapped(x.a, "Close", U.a),
				Y = T.a.div("Empty", U.a),
				Z = T.a.img("EmptyImage", U.a),
				$ = T.a.p("EmptyText", U.a),
				ee = T.a.div("FilterWrapper", U.a),
				te = T.a.wrapped(h.a, "FilterInput", U.a),
				se = T.a.wrapped(v.a, "SearchIcon", U.a),
				oe = T.a.wrapped(f.a, "PlusIcon", U.a),
				ne = T.a.wrapped(b.m, "CreateCollectionButton", U.a),
				re = Object(l.a)((e, t) => {
					const s = t.toLowerCase();
					return e.filter(e => e.title.toLowerCase().includes(s))
				}),
				ie = Object(a.c)({
					collections: C.v
				}),
				ce = Object(c.b)(ie, (e, {
					postId: t,
					isOverlay: s
				}) => ({
					onOpenCreateCollectionModal: () => {
						let o = O.b;
						t && (o = Object(O.t)(t, !!s)), e(Object(p.w)(o))
					}
				}));
			class ae extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						filterStr: ""
					}, this.close = () => {
						this.props.sendEvent(Object(G.c)()), this.props.onClose()
					}, this.handleEscapeKey = e => {
						e.keyCode === m.a.Escape && this.close()
					}, this.handleCreateCollectionClicked = () => {
						this.props.onOpenCreateCollectionModal(), this.props.sendEvent(Object(G.j)())
					}, this.handleCollectionSelected = e => {
						this.props.onSelectCollection(e), this.props.sendEvent(Object(G.q)())
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
					document.addEventListener("keydown", this.handleEscapeKey), this.props.sendEvent(Object(G.d)())
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
					}), i.a.createElement(X, {
						onClick: this.close
					}, i.a.createElement(Q, {
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
			const de = Object(d.a)(ce(Object(u.c)(ae)));
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
				c = s("./node_modules/reselect/es/index.js"),
				a = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/lib/formatApiError/index.ts"),
				l = s("./src/reddit/actions/postCollection/index.ts"),
				p = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = s("./src/reddit/constants/postCreation.ts"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/controls/ErrorText/index.tsx"),
				h = s("./src/reddit/controls/Input/index.tsx"),
				x = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = s("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				v = s("./src/reddit/icons/svgs/Close/index.tsx"),
				_ = s("./src/reddit/layout/row/Inline/index.tsx"),
				O = s("./src/reddit/selectors/postCollection.ts"),
				C = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less"),
				g = s.n(C),
				j = s("./src/lib/lessComponent.tsx");
			const E = j.a.div("Container", g.a),
				k = j.a.div("Content", g.a),
				w = j.a.div("TitleRow", g.a),
				I = j.a.div("Details", g.a),
				y = j.a.wrapped(p.f, "Footer", g.a),
				P = j.a.wrapped(m.l, "CancelButton", g.a),
				S = j.a.div("CloseWrapper", g.a),
				T = j.a.wrapped(v.a, "CloseIcon", g.a),
				M = j.a.label("Label", g.a),
				N = j.a.wrapped(h.a, "TitleInput", g.a),
				F = j.a.wrapped(f.a, "AddCollectionIcon", g.a),
				R = j.a.wrapped(m.i, "PrimaryActionButton", g.a),
				A = j.a.wrapped(x.a, "LoadingIcon", g.a),
				L = j.a.wrapped(b.b, "ErrorText", g.a),
				D = Object(c.c)({
					collection: O.q,
					error: O.c,
					isPending: O.g
				}),
				B = Object(i.b)(D, (e, t) => ({
					onCreate: (t, s) => e(Object(l.b)(t, s)),
					onUpdate: s => e(Object(l.h)(t.collectionId, s))
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
					} = this.props, n = !e, i = !!this.state.collectionTitle.trim(), c = n ? o.fbt._("Create", null, {
						hk: "Ijp7n"
					}) : o.fbt._("Save", null, {
						hk: "2Onrrv"
					});
					return r.a.createElement(E, null, r.a.createElement(S, {
						onClick: this.props.onCancel
					}, r.a.createElement(T, null)), r.a.createElement(k, null, n && r.a.createElement(r.a.Fragment, null, r.a.createElement(w, null, r.a.createElement(F, null), o.fbt._("Create a collection", null, {
						hk: "3ndxk5"
					})), r.a.createElement(I, null, o.fbt._("Group posts into one feed. Create a series of events or just a group of random things. Make something awesome!", null, {
						hk: "2eCAQw"
					}))), r.a.createElement(M, null, n ? o.fbt._("Give a title for your collection", null, {
						hk: "Uaqbe"
					}) : o.fbt._("Edit title", null, {
						hk: "1jzweg"
					}), r.a.createElement(N, {
						maxLength: u.e,
						onChange: this.onTitleChange,
						placeholder: o.fbt._("Enter title", null, {
							hk: "3B0iRI"
						}),
						value: this.state.collectionTitle
					}))), r.a.createElement(y, null, r.a.createElement(_.a, null, r.a.createElement(P, {
						onClick: this.props.onCancel
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(R, {
						onClick: this.onPrimaryButtonClick,
						disabled: s || !i
					}, s ? r.a.createElement(A, {
						sizePx: 10
					}) : c)), t && r.a.createElement(L, null, Object(d.a)(t))))
				}
			}
			t.a = Object(a.a)(B(W))
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
				c = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				p = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				m = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				b = s("./src/reddit/components/FlairPreview/index.tsx"),
				h = s("./src/reddit/components/FlairSearch/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/models/Flair/index.ts"),
				v = s("./src/reddit/selectors/moderatorPermissions.ts"),
				_ = s("./src/reddit/selectors/postFlair.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/selectors/telemetry.ts"),
				g = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				j = s("./src/reddit/components/PostFlairPicker/index.m.less"),
				E = s.n(j);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(o || (o = {}));
			const k = (e, t = !1, s = o.UNSET) => `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${s}]`,
				w = Object(a.c)({
					flairData: _.d,
					subreddit: O.S,
					isMod: (e, t) => !!Object(v.i)(e, t)
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
						subreddit: Object(C.subredditById)(t, this.props.subredditId)
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
					} = e, c = r.displayText, {
						templates: a,
						templateIds: d
					} = o, {
						canSave: l
					} = this.canSave();
					return i.a.createElement(m.a, {
						className: s
					}, i.a.createElement(u.a, {
						onClosePressed: e.closeModal,
						title: n.fbt._("Select {subredditName} flair", [n.fbt._param("subredditName", c)], {
							hk: "1lDMWS"
						})
					}), i.a.createElement(b.a, {
						flair: t,
						flairTemplateType: f.d.LinkFlair,
						placeholderText: n.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), i.a.createElement(h.a, {
						flair: t,
						flairTemplateType: f.d.LinkFlair,
						subredditId: r.id,
						templates: a,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), i.a.createElement("div", {
						className: E.a.buttonsRow
					}, i.a.createElement(x.i, {
						disabled: !l,
						onClick: this.onApply
					}, n.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), i.a.createElement(x.l, {
						className: E.a.clearButton,
						onClick: this.onClear
					}, n.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const y = Object(c.b)(w, (e, t) => ({
				closeModal: () => e(Object(p.i)(t.modalId))
			}))(I);
			t.a = Object(l.a)(Object(d.c)(y))
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
				SavedIcon: "_2ImUH_EV4vF4Tmh9_72Tpn",
				savedIcon: "_2ImUH_EV4vF4Tmh9_72Tpn",
				SaveIcon: "va_0c4n4YKyMsW0Pl5cQu",
				saveIcon: "va_0c4n4YKyMsW0Pl5cQu",
				HideIcon: "_3CksthIwbeJIolp7OYeQYv",
				hideIcon: "_3CksthIwbeJIolp7OYeQYv",
				Icon: "_2V4nGS1AmzWhA62lzdCu4r",
				icon: "_2V4nGS1AmzWhA62lzdCu4r",
				AddCollectionIcon: "_3McOViCQeBaGf3kRQLi-YJ",
				addCollectionIcon: "_3McOViCQeBaGf3kRQLi-YJ",
				CalendarIcon: "_1zSdStUj7GoJJcKjQ7zhG8",
				calendarIcon: "_1zSdStUj7GoJJcKjQ7zhG8",
				LinkIcon: "_1lgI_HBlGeEd4PRa5CuxRF",
				linkIcon: "_1lgI_HBlGeEd4PRa5CuxRF",
				LiveIcon: "otoj2GWn145x5kC1YJdJV",
				liveIcon: "otoj2GWn145x5kC1YJdJV",
				PostCheckboxMenuItem: "_3fGEO8uLSvUJEOP4lDX35p",
				postCheckboxMenuItem: "_3fGEO8uLSvUJEOP4lDX35p"
			}
		},
		"./src/reddit/components/PostOverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Ie
			})), s.d(t, "b", (function() {
				return ye
			})), s.d(t, "c", (function() {
				return Pe
			})), s.d(t, "d", (function() {
				return Se
			})), s.d(t, "f", (function() {
				return Te
			})), s.d(t, "e", (function() {
				return Me
			})), s.d(t, "h", (function() {
				return qe
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				c = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router/esm/react-router.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/telemetry/index.ts"),
				p = s("./node_modules/uuid/v4.js"),
				u = s.n(p),
				m = s("./src/lib/addQueryParams/index.ts"),
				b = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/lessComponent.tsx"),
				x = s("./src/reddit/actions/eventPosts/index.ts"),
				f = s("./src/reddit/actions/gold/modals.ts"),
				v = s("./src/reddit/actions/modal.ts"),
				_ = s("./src/reddit/actions/pinnedPost.ts"),
				O = s("./src/reddit/actions/post.ts"),
				C = s("./src/reddit/actions/postCreation/editing.ts"),
				g = s("./src/reddit/actions/reportFlow/index.ts"),
				j = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				E = s("./src/reddit/constants/parameters.ts"),
				k = s("./src/reddit/constants/posts.ts"),
				w = s("./src/reddit/helpers/embeds/index.ts"),
				I = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				y = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				P = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				S = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx"),
				T = s("./src/reddit/icons/fonts/index.tsx"),
				M = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				N = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				F = s("./src/reddit/icons/fonts/Embed/index.tsx"),
				R = s("./src/reddit/icons/fonts/Hide/index.tsx"),
				A = s("./src/reddit/icons/fonts/Link/index.tsx"),
				L = s("./src/reddit/icons/fonts/Live/index.tsx"),
				D = s("./src/reddit/icons/fonts/Pencil/index.tsx"),
				B = s("./src/reddit/icons/fonts/Report/index.tsx"),
				W = s("./src/reddit/icons/fonts/Save/index.tsx"),
				G = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				V = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				U = s("./src/reddit/icons/fonts/Unpin/index.tsx"),
				H = s("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				K = s("./src/reddit/icons/svgs/Saved/index.tsx"),
				q = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				J = s("./src/reddit/components/OverflowMenu/index.tsx"),
				z = s("./src/reddit/components/ReportFlow/index.tsx"),
				X = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Q = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				Y = s("./src/reddit/controls/Dropdown/Row.tsx"),
				Z = s("./src/reddit/components/Flatlist/constants.ts"),
				$ = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				ee = s("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				te = s("./src/reddit/constants/postLayout.ts"),
				se = s("./src/reddit/helpers/correlationIdTracker.ts"),
				oe = s("./src/reddit/helpers/isCrosspost.ts"),
				ne = s("./src/reddit/helpers/postEvent.ts"),
				re = s("./src/reddit/helpers/trackers/post.ts"),
				ie = s("./src/reddit/models/Post/index.ts"),
				ce = s("./src/reddit/models/Subreddit/index.ts"),
				ae = s("./src/reddit/selectors/activeModalId.ts"),
				de = s("./src/reddit/selectors/experiments/coreStyles.ts"),
				le = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				pe = s("./src/reddit/selectors/posts.ts"),
				ue = s("./src/reddit/selectors/subreddit.ts"),
				me = s("./src/reddit/selectors/user.ts"),
				be = s("./src/reddit/selectors/experiments/rebed.ts"),
				he = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				xe = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				fe = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				ve = s("./src/reddit/components/ReportFlow/new.tsx"),
				_e = s("./src/reddit/actions/postCollection/index.ts"),
				Oe = s("./src/reddit/contexts/Post/index.tsx"),
				Ce = s("./src/reddit/helpers/trackers/postCollection.ts"),
				ge = s("./src/reddit/models/PostCreationForm/index.ts"),
				je = s("./src/reddit/selectors/postCollection.ts"),
				Ee = s("./src/reddit/components/PostOverflowMenu/index.m.less"),
				ke = s.n(Ee);

			function we() {
				return (we = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Ie = h.a.wrapped(S.a, "Icon", ke.a),
				ye = h.a.wrapped(R.a, "Icon", ke.a),
				Pe = h.a.wrapped(D.a, "Icon", ke.a),
				Se = h.a.wrapped(B.a, "Icon", ke.a),
				Te = h.a.wrapped(e => {
					return Object(P.b)() ? i.a.createElement(W.a, we({}, e, {
						isFilled: !0
					})) : i.a.createElement(K.a, e)
				}, "SavedIcon", ke.a),
				Me = h.a.wrapped(W.a, "SaveIcon", ke.a),
				Ne = h.a.wrapped(M.a, "Icon", ke.a),
				Fe = h.a.wrapped(H.a, "AddCollectionIcon", ke.a),
				Re = h.a.wrapped(F.a, "Icon", ke.a),
				Ae = h.a.wrapped(G.a, "Icon", ke.a),
				Le = h.a.wrapped(V.a, "Icon", ke.a),
				De = h.a.wrapped(q.b, "Icon", ke.a),
				Be = h.a.wrapped(U.a, "Icon", ke.a),
				We = h.a.wrapped(L.a, "LiveIcon", ke.a),
				Ge = h.a.wrapped(N.a, "CalendarIcon", ke.a),
				Ve = h.a.wrapped(A.a, "LinkIcon", ke.a),
				Ue = h.a.wrapped(Y.b, "DropdownRow", ke.a),
				He = h.a.wrapped(Q.a, "PostCheckboxMenuItem", ke.a),
				Ke = u()(),
				qe = ({
					gild: e = !0,
					save: t = !0,
					share: s = !0,
					report: o = !0,
					editPost: n = !0,
					hide: r = !0
				}) => ({
					[Z.a.Gild]: e,
					[Z.a.Save]: t,
					[Z.a.Share]: s,
					[Z.a.Report]: o,
					[Z.a.EditPost]: n,
					[Z.a.Hide]: r
				}),
				Je = Object(c.b)(() => Object(d.c)({
					claimedFreeAward: le.b,
					isConfirmDeleteOpen: (e, {
						postId: t
					}) => Object(ae.a)(e) === `POST_OVERFLOW_DELETE_CONFIRMATION_${t}`,
					isFutureEvent: je.i,
					isInIcons2020: de.b,
					isPinned: pe.r,
					subredditAboutInfo: pe.J,
					reportFlowIsOpen: (e, {
						isOverlay: t,
						postId: s
					}) => {
						var o, n, r, i;
						return (null === (n = null === (o = e.features) || void 0 === o ? void 0 : o.reportFlow) || void 0 === n ? void 0 : n.openedFromModalPage) === t && (null === (i = null === (r = e.features) || void 0 === r ? void 0 : r.reportFlow) || void 0 === i ? void 0 : i.postOrCommentId) === s
					},
					showPinAction: (e, {
						isProfilePostListing: t,
						userIsOp: s,
						post: o,
						pageLayer: n
					}) => Object(X.B)(e, {
						pageLayer: n
					}) && t && s && Object(me.mb)(e, {
						userName: o.author
					}),
					hasSubredditRules: ue.j,
					isPostPartOfACollection: je.k,
					shouldRenderCollectionEditButtons: (e, {
						post: t,
						subredditOrProfile: s
					}) => {
						if (t.isSponsored) return !1;
						if (!s) return !1;
						const o = s.type === ce.e.User;
						return Object(je.r)(e, s.name, o)
					},
					reportingRevampEnabled: he.a,
					isRebedLinkEnabled: be.a,
					videoShareModalOpen: (e, {
						postId: t
					}) => Object(ae.a)(e) === Object(ee.a)(t)
				}), (e, {
					postId: t,
					isOverlay: s,
					isCommentsPage: o
				}) => ({
					onCopyLink: t => e(Object(O.x)(t)),
					onDelete: o => e(Object(O.G)(t, o, s)),
					onDistinguishPost: s => e(Object(O.q)(t, s)),
					onGildClick: (s, o) => e(Object(f.d)({
						awardId: o,
						correlationId: s,
						thingId: t
					})),
					onToggleSave: () => e(Object(O.N)(t)),
					onToggleNSFW: () => e(Object(O.C)(t)),
					onToggleOC: () => e(Object(O.D)(t)),
					onTogglePinned: () => e(Object(_.i)(t)),
					onToggleSpoiler: () => e(Object(O.Q)(t)),
					onHide: o => e(Object(O.R)(t, !o, s, !0)),
					onReportClick: () => e(Object(g.c)(t, s)),
					onStartEventNow: () => {
						e((e, t) => Object(l.a)(Object(y.l)()(t()))), e(Object(x.startEventNowRequested)(t))
					},
					onEdit: () => {
						const n = !s && !o;
						e(Object(C.a)(t, n))
					},
					onFlairPost: () => e(Object(v.i)(Object(fe.b)(t, s))),
					onToggleSendReplies: () => e(Object(O.O)(t)),
					showCollectionsList: (t, o) => {
						e(Object(_e.e)(t)).then(() => {
							const t = Object(ge.s)(o, s);
							e(v.i(t))
						})
					},
					toggleConfirmDelete: () => e(Object(v.i)(`POST_OVERFLOW_DELETE_CONFIRMATION_${t}`)),
					onToggleVideoShareModal: () => e(Object(v.i)(Object(ee.a)(t)))
				}));
			class ze extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.handlePostEvent = (e, t) => {
						const {
							isOverlay: s,
							post: o,
							sendEvent: n
						} = this.props;
						n(Object(re.f)(o.id, e, s ? "post_detail" : "post", void 0, void 0, void 0, null == t ? void 0 : t.referralId))
					}, this.handleClickMenuButton = () => {
						this.handlePostEvent("post_overflow_menu")
					}, this.handleDeletePost = e => {
						e && (this.props.onDelete(e), this.handlePostEvent("delete"))
					}, this.handleEdit = () => {
						this.handlePostEvent("edit"), this.props.onEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(se.d)(se.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: o
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(o(this.props.postId))
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
						this.handlePostEvent(this.props.isPinned ? "unpin" : "pin"), this.props.isPinned ? this.props.sendEvent(Object(re.g)(this.props.post.id)) : this.props.sendEvent(Object(re.c)(this.props.post.id)), this.props.onTogglePinned()
					}, this.toggleSpoiler = () => {
						this.handlePostEvent(this.props.post.isSpoiler ? "unmark_spoiler" : "mark_spoiler"), this.props.onToggleSpoiler()
					}, this.toggleNSFW = () => {
						this.handlePostEvent(this.props.post.isNSFW ? "unmark_nsfw" : "mark_nsfw"), this.props.onToggleNSFW()
					}, this.getBreakpointClass = e => {
						const {
							props: t
						} = this;
						if (!t.ignoreBreakpoints && t.useFlatlistBreakpoints[e]) return Object($.b)({
							breakpointType: $.a.HideIfVWLarger,
							flatlistItem: e,
							isLoggedIn: !!t.currentUser,
							isUserOp: t.userIsOp
						})
					}, this.handleAddToCollection = () => {
						const {
							isPostPartOfACollection: e,
							showCollectionsList: t,
							post: s,
							sendEvent: o
						} = this.props;
						e || (o(Object(Ce.b)(s.id)), t(s.belongsTo.id, s.id))
					}, this.onCloseShareModal = e => {
						e && (this.handlePostEvent("copy_link", {
							referralId: Ke
						}), this.props.onCopyLink(e)), this.props.onToggleVideoShareModal()
					}, this.renderReportFlow = () => this.props.reportingRevampEnabled ? i.a.createElement(ve.a, {
						withOverlay: !0,
						overlayCustomStyles: z.b,
						postId: this.props.postId,
						timestamp: this.context.currentTime
					}) : i.a.createElement(z.a, {
						withOverlay: !0,
						overlayCustomStyles: z.b,
						postId: this.props.postId,
						timestamp: this.context.currentTime
					})
				}
				getOverflowMenuBreakpointClass() {
					const {
						props: e
					} = this, t = e.layout === te.g.Classic;
					if (!(e.ignoreBreakpoints || e.modModeWithPost || e.userIsOp || !e.isCommentsPage && !t)) return Object($.b)({
						breakpointType: $.a.HideIfVWLarger,
						flatlistItem: Z.a.PostOverflowMenu,
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
						isInIcons2020: r,
						isPinned: c,
						onStartEventNow: a,
						post: d,
						isRebedLinkEnabled: l,
						shouldRenderCollectionEditButtons: p,
						showEditFlair: u,
						showPinAction: m,
						toggleAddEventStartTimeModal: b,
						toggleEditStartTimeModal: h,
						userIsOp: x
					} = e, f = e.currentUser && e.currentUser.isEmployee, v = Object(oe.a)(e.post), _ = e.post.belongsTo.type === k.a.PROFILE || Object(ce.f)(e.subredditAboutInfo), O = t && d.isGildable, C = Object(w.a)(e.post.permalink, l), g = Object(ne.a)(e.post);
					return i.a.createElement("div", null, O && i.a.createElement(Ue, {
						className: this.getBreakpointClass(Z.a.Gild),
						displayText: o.fbt._("Give Award", null, {
							hk: "3mYeGJ"
						}),
						onClick: this.handleGild
					}, i.a.createElement(Ie, null)), i.a.createElement(Ue, {
						className: this.getBreakpointClass(Z.a.Share),
						displayText: o.fbt._("Copy link", null, {
							hk: "ETZxA"
						}),
						onClick: () => {
							const {
								permalink: t,
								post: s
							} = e;
							s && Object(ie.n)(s) ? (e.onToggleVideoShareModal(), this.handlePostEvent("share")) : (this.handlePostEvent("share_copy"), e.onCopyLink(t))
						}
					}, i.a.createElement(Ve, null)), i.a.createElement(Ue, {
						className: this.getBreakpointClass(Z.a.Share),
						displayText: o.fbt._("Embed", null, {
							hk: "3u0v6r"
						}),
						onClick: () => {
							this.handlePostEvent("share_embed"), window.open(C, "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, i.a.createElement(Re, null)), e.showEditPost && i.a.createElement(Ue, {
						className: this.getBreakpointClass(Z.a.EditPost),
						displayText: o.fbt._("Edit post", null, {
							hk: "3gVzz0"
						}),
						onClick: this.handleEdit,
						isSelected: e.post.hidden
					}, i.a.createElement(Pe, null)), u && i.a.createElement(Ue, {
						displayText: o.fbt._("Edit flair", null, {
							hk: "qt3W7"
						}),
						onClick: e.onFlairPost,
						isSelected: e.post.hidden
					}, i.a.createElement(Le, null)), i.a.createElement(Ue, {
						className: this.getBreakpointClass(Z.a.Save),
						displayText: e.post.saved ? o.fbt._("unsave", null, {
							hk: "HDDPm"
						}) : o.fbt._("save", null, {
							hk: "3bg2gs"
						}),
						onClick: this.toggleSave,
						isSelected: e.post.saved
					}, e.post.saved ? i.a.createElement(Te, null) : i.a.createElement(Me, null)), m && i.a.createElement(Ue, {
						displayText: c ? o.fbt._("Unpin Post from Profile", null, {
							hk: "6DYfk"
						}) : o.fbt._("Pin Post to Profile", null, {
							hk: "2RWbNF"
						}),
						onClick: this.togglePinned
					}, this.props.isPinned ? i.a.createElement(Be, null) : i.a.createElement(Ae, null)), !e.post.isSponsored && i.a.createElement(Ue, {
						className: this.getBreakpointClass(Z.a.Hide),
						displayText: e.post.hidden ? o.fbt._("unhide", null, {
							hk: "1P4IxC"
						}) : o.fbt._("hide", null, {
							hk: "48yKzW"
						}),
						onClick: this.toggleHide,
						isSelected: e.post.hidden
					}, i.a.createElement(ye, {
						className: ke.a.HideIcon
					})), !e.post.isSponsored && !x && i.a.createElement(Ue, {
						className: this.getBreakpointClass(Z.a.Report),
						displayText: o.fbt._("report", null, {
							hk: "128RPn"
						}),
						onClick: this.handleReport
					}, i.a.createElement(Se, null)), p && s && a && i.a.createElement(Ue, {
						onClick: a,
						displayText: o.fbt._("Start event now", null, {
							hk: "3VomTN"
						})
					}, i.a.createElement(We, null)), p && s && h && i.a.createElement(Ue, {
						onClick: h,
						displayText: o.fbt._("Edit start time", null, {
							hk: "2typ17"
						})
					}, i.a.createElement(Ge, null)), p && !g && b && i.a.createElement(Ue, {
						displayText: o.fbt._("Add event start time", null, {
							hk: "1XXqzu"
						}),
						onClick: b
					}, i.a.createElement(Ge, null)), p && i.a.createElement(Ue, {
						className: this.props.isPostPartOfACollection ? ke.a.disabledRow : void 0,
						displayText: o.fbt._("Add to collection", null, {
							hk: "3UNHgN"
						}),
						onClick: this.handleAddToCollection,
						noHover: this.props.isPostPartOfACollection
					}, r ? i.a.createElement(T.a, {
						name: "collection"
					}) : i.a.createElement(Fe, null)), x && i.a.createElement(Ue, {
						displayText: o.fbt._("delete", null, {
							hk: "4kSfzC"
						}),
						onClick: this.props.toggleConfirmDelete
					}, r ? i.a.createElement(T.a, {
						name: "delete"
					}) : i.a.createElement(De, null)), f && e.userIsOp && i.a.createElement(Ue, {
						displayText: e.post.distinguishType === n.C.ADMIN ? o.fbt._("undistinguish", null, {
							hk: "2chGON"
						}) : o.fbt._("Distinguish as admin", null, {
							hk: "2xltiM"
						}),
						onClick: () => e.post.distinguishType === n.C.ADMIN ? e.onDistinguishPost(n.C.NONE) : e.onDistinguishPost(n.C.ADMIN)
					}, i.a.createElement(Ne, null)), x && _ && !v && i.a.createElement(He, {
						text: o.fbt._("Mark as OC", null, {
							hk: "2vGyoC"
						}),
						onClick: this.toggleOC,
						isSelected: this.props.post.isOriginalContent
					}), x && i.a.createElement(He, {
						text: o.fbt._("Mark as Spoiler", null, {
							hk: "3PJk7A"
						}),
						onClick: this.toggleSpoiler,
						isSelected: this.props.post.isSpoiler
					}), x && i.a.createElement(He, {
						text: o.fbt._("Mark as NSFW", null, {
							hk: "4qK6JN"
						}),
						onClick: this.toggleNSFW,
						isSelected: this.props.post.isNSFW
					}), e.userIsOp && i.a.createElement(He, {
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
					return i.a.createElement("div", null, i.a.createElement(J.b, {
						className: Object(b.a)(ke.a.overflowMenu, this.getOverflowMenuBreakpointClass(), e.className),
						dropdownId: e.dropdownId,
						isFixed: e.isFixed,
						layout: e.layout,
						onClick: this.handleClickMenuButton
					}, this.renderDropdownIcons()), e.reportFlowIsOpen && e.subredditOrProfile && e.hasSubredditRules && this.renderReportFlow(), this.props.isConfirmDeleteOpen && i.a.createElement(Xe, {
						toggleConfirmDelete: this.props.toggleConfirmDelete,
						handleDeletePost: this.handleDeletePost
					}), e.videoShareModalOpen && i.a.createElement(ee.b, {
						className: ke.a.modalBody,
						onClose: this.onCloseShareModal,
						withOverlay: !1,
						url: Object(m.a)(Object(I.a)(e.postId), {
							[E.q]: Ke,
							utm_source: "share",
							utm_medium: "web2x",
							utm_content: "rpan_stream"
						})
					}))
				}
			}
			const Xe = Object(a.i)(e => i.a.createElement(xe.a, {
				toggleModal: e.toggleConfirmDelete,
				onConfirm: () => e.handleDeletePost(e.location),
				actionText: o.fbt._("delete post", null, {
					hk: "49hVoG"
				}),
				headerText: o.fbt._("Delete post?", null, {
					hk: "3g7QoX"
				}),
				modalText: o.fbt._("Are you sure you want to delete your post? You can't undo this.", null, {
					hk: "2eDKWP"
				}),
				withOverlay: !0
			}));
			ze.contextType = j.a, t.g = Object(Oe.d)(Je(ze))
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
				i = ({
					children: e
				}) => {
					const [t, s] = Object(o.useState)(0), [i, c] = Object(o.useState)(!1), [a, d] = Object(o.useState)(0), l = {
						currentTime: t,
						setCurrentTime: s,
						isLive: i,
						setIsLive: c,
						totalTime: a,
						setTotalTime: d
					};
					return n.a.createElement(r.Provider, {
						value: l
					}, e)
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
				backgroundColor: n.b.overlayReportFlow
			};
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "ReportFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ReportFlow").then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx")),
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
					backgroundColor: n.b.overlayReportFlow
				},
				i = Object(o.a)({
					resolved: {},
					chunkName: () => "ReportFlow",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("ReportFlow").then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx")),
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
				c = Object(o.a)({
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
			t.b = c
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
				return p
			})), s.d(t, "a", (function() {
				return u
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				a = s.n(c);
			const d = e => n.a.createElement("button", {
					className: Object(r.a)(a.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick
				}, e.children, e.text && n.a.createElement("span", {
					className: a.a.TextWrapper
				}, e.text, " ")),
				l = i.a.wrapped(d, "ApproveButton", a.a),
				p = i.a.wrapped(d, "RemoveButton", a.a),
				u = e => n.a.createElement("button", {
					className: Object(r.a)(a.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/ShareMenu/index.m.less": function(e, t, s) {
			e.exports = {
				dropdown: "PWY92ySDjTYrTAiutq4ty",
				dropdownRow: "_2snJGyyGyyH38duHobOUKE",
				linkIcon: "_1GObrri0j7y_9IWiGUfPjp",
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
				c = s("./node_modules/react-router/esm/react-router.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./node_modules/uuid/v4.js"),
				l = s.n(d),
				p = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				h = s("./src/reddit/actions/tooltip.ts"),
				x = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				f = s("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				v = s("./src/reddit/constants/parameters.ts"),
				_ = s("./src/reddit/controls/Dropdown/index.tsx"),
				O = s("./src/reddit/controls/Dropdown/Row.tsx"),
				C = s("./src/reddit/helpers/embeds/index.ts"),
				g = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				j = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				E = s("./src/reddit/icons/fonts/Embed/index.tsx"),
				k = s("./src/reddit/icons/fonts/Link/index.tsx"),
				w = s("./src/reddit/models/Post/index.ts"),
				I = s("./src/reddit/models/Subreddit/index.ts"),
				y = s("./src/reddit/routes/postCreation/constants.ts"),
				P = s("./src/reddit/selectors/activeModalId.ts"),
				S = s("./src/reddit/selectors/experiments/rebed.ts"),
				T = s("./src/reddit/selectors/tooltip.ts"),
				M = s("./src/reddit/components/ShareMenu/index.m.less"),
				N = s.n(M);
			const F = Object(x.a)(_.a),
				R = l()(),
				A = Object(a.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(T.b)(t)(e),
					isRebedLinkEnabled: S.a,
					videoShareModalOpen: (e, {
						dropdownId: t
					}) => Object(P.b)(Object(f.a)(t))(e)
				}),
				L = Object(i.b)(A, (e, {
					dropdownId: t,
					permalink: s,
					...o
				}) => ({
					toggleDropdown: () => {
						e(Object(h.h)({
							tooltipId: t
						}))
					},
					copyLink: t => e(Object(m.x)(t)),
					onToggleVideoShareModal: () => {
						o.post && e(Object(b.d)(o.post.id)), e(Object(u.i)(Object(f.a)(o.post.id)))
					}
				})),
				D = r.a.memo(e => {
					const t = !e.subreddit || e.subreddit && e.subreddit.type === I.e.Public,
						s = !!e.post && e.post.isCrosspostable && !e.post.isSponsored,
						n = Object(C.a)(e.permalink, e.isRebedLinkEnabled);
					return r.a.createElement("div", {
						className: e.className,
						onClick: e.toggleDropdown,
						id: e.dropdownId
					}, e.children, r.a.createElement(F, {
						className: N.a.dropdown,
						isOpen: e.dropdownIsOpen,
						tooltipId: e.dropdownId
					}, r.a.createElement(O.b, {
						className: N.a.dropdownRow,
						displayText: o.fbt._("Copy link", null, {
							hk: "1tCqox"
						}),
						onClick: () => {
							const {
								permalink: t,
								post: s
							} = e;
							if (s && Object(w.n)(s)) e.sendEventWithName("share_copy", {
								referralId: R
							}), e.onToggleVideoShareModal();
							else {
								const s = Object(p.a)(t, {
									utm_source: "share",
									utm_medium: "web2x",
									context: 3
								});
								e.sendEventWithName("share_copy"), e.copyLink(s)
							}
						}
					}, r.a.createElement(k.a, {
						className: N.a.linkIcon
					})), s && r.a.createElement(O.b, {
						className: N.a.dropdownRow,
						displayText: o.fbt._("crosspost", null, {
							hk: "23zSN6"
						}),
						onClick: () => {
							e.sendEventWithName("share_crosspost"), e.post && window.open(`${y.b}?source_id=${e.post.id}`, "_blank")
						}
					}, r.a.createElement(j.a, {
						className: N.a.crosspostIcon
					})), t && r.a.createElement(O.b, {
						className: N.a.dropdownRow,
						displayText: o.fbt._("Embed", null, {
							hk: "2CcsuC"
						}),
						onClick: () => {
							e.sendEventWithName("share_embed"), window.open(n, "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, r.a.createElement(E.a, {
						className: N.a.embedIcon
					}))), e.videoShareModalOpen && e.post && r.a.createElement(f.b, {
						className: N.a.modalBody,
						onClose: t => {
							t && (e.sendEventWithName("copy_link", {
								referralId: R
							}), e.copyLink(t)), e.onToggleVideoShareModal()
						},
						url: Object(p.a)(Object(g.a)(e.post.id), {
							[v.q]: R,
							utm_source: "share",
							utm_medium: "web2x",
							utm_content: "rpan_stream"
						})
					}))
				});
			t.a = L(Object(c.i)(D))
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
				return c
			}));
			const o = "comment",
				n = "comment-submission-form-markdown",
				r = "comment-submission-form-richtext",
				i = "comments-page-link-num-comments",
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
				return c
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "g", (function() {
				return d
			}));
			const o = "PostCreation-AddEventButton",
				n = 500,
				r = "PostCreation-CollectionEducationTooltip",
				i = "PostCreation-EventEducationTooltip",
				c = 300,
				a = c,
				d = "PostCreation-AddToCollectionButton"
		},
		"./src/reddit/controls/CheckboxMenuItem/index.m.less": function(e, t, s) {
			e.exports = {
				checkbox: "_2zOuGd5s9dLeXmKJ8TJF9T",
				checkboxSelected: "LevaZhN5EO7Pei7YvAi1W",
				sharedIconStyles: "_19iKCOTFpWIyFwZ0bqQhg",
				checkbox2020: "_2n1K_z8s56FQ3Xxeyst2P_",
				checkboxMenuItem: "_2eawLPCtwzvTZhWKtaUgZQ",
				expandRight: "_34Odk7t6y-rCPxPcYJa4Nw",
				postCheckboxMenuItem: "_3LyKu57c-QkPvlFvAgWop5"
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				d = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				p = s("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				u = s.n(p);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const b = e => {
					const t = Object(i.b)();
					return n.a.createElement("div", {
						className: Object(r.a)(u.a.checkboxMenuItem, e.className),
						onClick: e.onClick
					}, n.a.createElement(l.a, {
						className: u.a.expandRight
					}, t ? n.a.createElement(c.a, {
						name: "checkbox",
						isFilled: e.isSelected,
						className: u.a.checkbox2020
					}) : e.isSelected ? n.a.createElement(d.a, {
						className: u.a.checkboxSelected
					}) : n.a.createElement(a.a, {
						className: u.a.checkbox
					}), e.text))
				},
				h = ({
					className: e,
					...t
				}) => n.a.createElement(b, m({
					className: Object(r.a)(u.a.postCheckboxMenuItem, e)
				}, t));
			t.b = b
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
				return w
			})), s.d(t, "c", (function() {
				return I
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/uniqueId.js"),
				r = s.n(n),
				i = s("./node_modules/raf/index.js"),
				c = s.n(i),
				a = s("./node_modules/react/index.js"),
				d = s.n(a),
				l = s("./node_modules/react-redux/es/index.js"),
				p = s("./node_modules/reselect/es/index.js"),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/actions/modal.ts"),
				b = s("./src/reddit/selectors/activeModalId.ts"),
				h = s("./src/higherOrderComponents/asModal/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/layout/row/Inline/index.tsx"),
				v = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				_ = s.n(v);
			var O = Object(h.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return d.a.createElement("div", {
						className: _.a.wrapper
					}, d.a.createElement(f.a, {
						className: _.a.titleRow
					}, s), d.a.createElement("div", {
						className: _.a.detailsContainer
					}, t), d.a.createElement(f.a, {
						className: _.a.buttonRow
					}, d.a.createElement(x.i, {
						className: _.a.confirmButton,
						onClick: e.onConfirmed
					}, o.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				C = s("./src/reddit/controls/ErrorText/index.m.less"),
				g = s.n(C);
			const j = Object(p.c)({
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
					c()(() => {
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
						className: s,
						errorModalBody: n,
						errorModalTitle: r = o.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: i = o.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: c,
						textHasOverflowed: a
					} = this.state;
					return d.a.createElement("div", {
						className: Object(u.a)(g.a.wrapper, s)
					}, d.a.createElement("span", {
						className: g.a.description,
						ref: this.spanRef
					}, e), a && d.a.createElement("span", {
						className: g.a.moreText,
						onClick: this.toggleModal
					}, i), t === c && d.a.createElement(O, {
						onConfirmed: this.toggleModal,
						title: r
					}, n || e))
				}
			}
			const k = Object(l.b)(j, e => ({
					toggleErrorTextModal: t => e(Object(m.i)(t))
				}))(E),
				w = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: o,
						fallbackMessage: n,
						messages: r = []
					} = e, i = r.length ? r : n ? [n] : [];
					return i.length ? d.a.createElement("div", {
						className: t
					}, i.map((e, t) => d.a.createElement(k, {
						className: s,
						errorModalTitle: o,
						key: t
					}, e))) : null
				},
				I = e => d.a.createElement(w, {
					fallbackMessage: o.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = k
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/controls/Input/index.m.less"),
				r = s.n(n);
			t.a = o.a.input("input", r.a)
		},
		"./src/reddit/helpers/embeds/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			const o = (e, t = !1) => t ? `https://rebed.redditmedia.com/embed?url=${e}` : `https://embed.redditmedia.com/widgets/embed?url=${e}`
		},
		"./src/reddit/helpers/hasModPostPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.posts
		},
		"./src/reddit/helpers/trackers/freeAwardOffer.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			}));
			var o = s("./src/reddit/helpers/correlationIdTracker.ts"),
				n = s("./src/reddit/helpers/trackers/goldPayment.ts"),
				r = s("./src/reddit/models/Gold/ProductOffer.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const c = e => ({
					...Object(n.h)(e, {
						offerContext: r.a.StorefrontFreeAward
					}),
					correlationId: Object(o.d)(o.a.GoldPayment, !1),
					profile: i.profile(e),
					subreddit: i.subreddit(e)
				}),
				a = () => e => ({
					source: "free_award_offer",
					action: "view",
					noun: "page",
					...c(e)
				}),
				d = e => t => ({
					source: "free_award_offer",
					action: "click",
					noun: e,
					...c(t)
				}),
				l = () => e => ({
					source: "tooltip",
					action: "view",
					noun: "try_free_award",
					...c(e)
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
				return p
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "n", (function() {
				return h
			})), s.d(t, "m", (function() {
				return x
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "p", (function() {
				return _
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "j", (function() {
				return C
			})), s.d(t, "q", (function() {
				return g
			})), s.d(t, "k", (function() {
				return j
			})), s.d(t, "l", (function() {
				return E
			})), s.d(t, "i", (function() {
				return k
			})), s.d(t, "d", (function() {
				return w
			}));
			var o, n, r = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/helpers/trackers/postEvent.ts"),
				c = s("./src/reddit/selectors/platform.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(o || (o = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(n || (n = {}));
			const d = e => t => ({
					source: o.collection,
					noun: n.post,
					...u(t, e)
				}),
				l = ({
					postId: e,
					isFollowed: t
				}) => s => ({
					source: o.collection,
					noun: t ? n.unfollow : n.follow,
					...u(s, e)
				}),
				p = ({
					postId: e,
					isFollowed: t
				}) => s => ({
					source: i.a.postEvent,
					noun: t ? n.unfollow : n.follow,
					...u(s, e)
				}),
				u = (e, t) => {
					const s = {
						...a.defaults(e),
						action: r.c.CLICK,
						subreddit: a.subreddit(e)
					};
					return void 0 === t ? s : {
						...s,
						post: a.post(e, t),
						postCollection: a.postCollectionI13nSelector(e, {
							postId: t
						}),
						postEvent: a.postEventI13nSelector(e, {
							postId: t
						})
					}
				},
				m = e => ({
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
					...a.defaults(e),
					subreddit: a.subreddit(e),
					source: o.postComposer
				}),
				v = (e, t) => s => ({
					...u(s, e),
					source: t || o.postOverflowMenu,
					noun: n.collectionAddPost
				}),
				_ = e => t => ({
					...u(t, e),
					source: o.collectionComposer,
					noun: n.collectionRemovePost
				}),
				O = () => e => ({
					...u(e),
					source: o.collectionComposer,
					noun: n.collectionCancel
				}),
				C = () => e => {
					const t = Object(c.m)(e) || void 0;
					return {
						...u(e, t),
						source: o.collectionComposer,
						noun: n.collectionCreate
					}
				},
				g = () => e => ({
					...u(e),
					source: o.collectionComposer,
					noun: n.collectionSelect
				}),
				j = e => t => ({
					...a.defaults(t),
					subreddit: a.subreddit(t),
					source: o.collectionComposer,
					action: r.c.CLICK,
					noun: n.collectionDelete,
					postCollection: a.postCollectionI13nByCollectionIdSelector(t, {
						collectionId: e
					})
				}),
				E = e => t => ({
					...u(t),
					source: o.collectionComposer,
					noun: n.collectionEdit,
					postCollection: a.postCollectionI13nByCollectionIdSelector(t, {
						collectionId: e
					})
				}),
				k = e => t => ({
					...u(t, e),
					source: o.collectionComposer,
					noun: n.startEvent
				}),
				w = () => e => {
					const t = Object(c.m)(e) || void 0;
					return {
						...u(e, t),
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
				return _
			}));
			var o, n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/eventTools/index.ts"),
				i = s("./src/lib/timezone/index.ts"),
				c = s("./src/reddit/constants/tracking.ts"),
				a = s("./src/reddit/models/PostCreationForm/index.ts"),
				d = s("./src/reddit/selectors/platform.ts"),
				l = s("./src/reddit/selectors/postCreations.ts"),
				p = s("./src/reddit/selectors/telemetry.ts"),
				u = s("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(o || (o = {}));
			const m = e => p.actionInfo(e, {
					pageType: "event_submit"
				}),
				b = e => {
					Object(u.a)({
						...p.defaults(e),
						source: o.postComposer,
						action: c.c.CLICK,
						noun: "event_create",
						subreddit: p.subreddit(e)
					})
				},
				h = e => {
					Object(u.a)({
						...p.defaults(e),
						source: o.postComposer,
						action: c.c.CLICK,
						noun: "event_edit",
						subreddit: p.subreddit(e),
						postEvent: O(e),
						postComposer: C(e)
					})
				},
				x = () => e => ({
					source: o.eventComposer,
					action: c.c.VIEW,
					noun: c.b.SCREEN,
					actionInfo: m(e),
					postEvent: O(e)
				}),
				f = e => t => ({
					...E(t, Object(d.m)(t)),
					source: o.postComposer,
					noun: "apply",
					postComposer: g(e)
				}),
				v = () => e => ({
					...E(e, Object(d.m)(e)),
					noun: "cancel",
					actionInfo: m(e)
				}),
				_ = e => t => ({
					...E(t, Object(d.m)(t)),
					noun: "delete",
					actionInfo: m(t),
					postComposer: C(t),
					postEvent: j(e)
				}),
				O = e => {
					const t = Object(l.p)(e);
					return t && j(t)
				},
				C = e => g(Object(l.p)(e)),
				g = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === a.i.AtEventTime ? Object(i.f)(e.startDate).getTime() / n.Hb : void 0
					}
				},
				j = e => {
					const t = Object(i.f)(e.startDate).getTime() / n.Hb,
						s = Object(i.f)(e.endDate).getTime() / n.Hb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: s,
						eventState: Object(r.e)(t, s)
					}
				},
				E = (e, t) => {
					const s = {
						source: o.eventComposer,
						action: c.c.CLICK,
						subreddit: p.subreddit(e)
					};
					return t ? {
						...s,
						post: p.post(e, t),
						postEvent: p.postEventI13nSelector(e, {
							postId: t
						}),
						postCollection: p.postCollectionI13nSelector(e, {
							postId: t
						})
					} : s
				}
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return c
			})), s.d(t, "y", (function() {
				return a
			})), s.d(t, "m", (function() {
				return d
			})), s.d(t, "p", (function() {
				return l
			})), s.d(t, "q", (function() {
				return p
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "o", (function() {
				return b
			})), s.d(t, "r", (function() {
				return h
			})), s.d(t, "k", (function() {
				return x
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "n", (function() {
				return _
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "l", (function() {
				return j
			})), s.d(t, "t", (function() {
				return E
			})), s.d(t, "j", (function() {
				return k
			})), s.d(t, "e", (function() {
				return w
			})), s.d(t, "x", (function() {
				return I
			})), s.d(t, "u", (function() {
				return y
			})), s.d(t, "a", (function() {
				return P
			})), s.d(t, "s", (function() {
				return S
			})), s.d(t, "v", (function() {
				return T
			})), s.d(t, "w", (function() {
				return M
			}));
			var o = s("./src/reddit/models/ScheduledPost/index.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
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
					isRecurring: Object(o.p)(e)
				}),
				c = () => e => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post",
					...r(e)
				}),
				a = () => e => ({
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
				x = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts",
					...r(e)
				}),
				f = () => e => ({
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
				_ = () => e => ({
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
				C = {
					[o.d.Hourly]: "hourly_frequency",
					[o.d.Daily]: "daily_frequency",
					[o.d.Weekly]: "weekly_frequency",
					[o.d.Monthly]: "monthly_frequency",
					[o.b]: "custom_frequency"
				},
				g = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : C[e],
					...r(t)
				}),
				j = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...r(e)
				}),
				E = (e, t, s) => i => ({
					source: "post",
					action: "click",
					noun: Object(o.l)(e),
					...r(i),
					actionInfo: n.actionInfo(i, {
						settingValue: t ? "true" : "false",
						pageType: s ? "recurring_posts" : "scheduled_posts"
					})
				}),
				k = () => e => ({
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
				S = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...r(e),
					scheduledPost: i(t)
				}),
				T = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...r(e)
				}),
				M = () => (e, t) => {
					const s = r(e);
					return {
						source: "post",
						action: "view",
						noun: "error",
						...s,
						actionInfo: {
							...s.actionInfo,
							reason: "failed_post"
						},
						scheduledPost: i(t)
					}
				}
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = s.n(c);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("approve", e.isFilled), a.a.approveIcon, e.className),
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
				i = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);
			t.a = e => {
				const t = Object(i.b)();
				return n.a.createElement("i", {
					className: Object(r.a)(Object(c.b)(t ? "scheduled" : "calendar", e.isFilled), d.a.calendarIcon, e.className)
				})
			}
		},
		"./src/reddit/icons/fonts/Comment/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = s.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => n.a.createElement("i", d({
				className: Object(r.a)(Object(i.b)("comment", t.isFilled), a.a.commentIcon, e)
			}, t))
		},
		"./src/reddit/icons/fonts/Crosspost/index.m.less": function(e, t, s) {
			e.exports = {
				CrosspostIcon: "_1lgwGF1j_DukLN7vdKUyHn",
				crosspostIcon: "_1lgwGF1j_DukLN7vdKUyHn"
			}
		},
		"./src/reddit/icons/fonts/Crosspost/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Crosspost/index.m.less"),
				c = s.n(i);
			t.a = e => n.a.createElement("i", {
				className: `${Object(r.b)("crosspost",e.isFilled)} ${c.a.CrosspostIcon} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Embed/index.m.less": function(e, t, s) {
			e.exports = {
				EmbedIcon: "_1J2DOAiKZ5l1xq516M9W_Q",
				embedIcon: "_1J2DOAiKZ5l1xq516M9W_Q"
			}
		},
		"./src/reddit/icons/fonts/Embed/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Embed/index.m.less"),
				c = s.n(i);
			const a = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: `${Object(r.b)("embed",e.isFilled)} ${e.className}`
			}), "EmbedIcon", c.a);
			t.a = a
		},
		"./src/reddit/icons/fonts/Hide/index.m.less": function(e, t, s) {
			e.exports = {
				HideIcon: "_1ps3GcyMra2ZVakeRQFnGj",
				hideIcon: "_1ps3GcyMra2ZVakeRQFnGj"
			}
		},
		"./src/reddit/icons/fonts/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Hide/index.m.less"),
				c = s.n(i);
			const a = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: `${Object(r.b)("hide",e.isFilled)} ${e.className}`
			}), "HideIcon", c.a);
			t.a = a
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.m.less": function(e, t, s) {
			e.exports = {
				IgnoreReportIcon: "_3iBgiSReJX5KcPORjE1Yuf",
				ignoreReportIcon: "_3iBgiSReJX5KcPORjE1Yuf"
			}
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/IgnoreReport/index.m.less"),
				c = s.n(i);
			const a = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: `${Object(r.b)("ignoreReport",e.isFilled)} ${e.className}`
			}), "IgnoreReportIcon", c.a);
			t.a = a
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = s.n(c);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("live", e.isFilled), a.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);

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
				const t = Object(i.b)();
				return n.a.createElement("i", l({}, e, {
					className: Object(r.a)(Object(c.b)(t ? "mod" : "modActions", e.isFilled), d.a.modActions, e.className)
				}))
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.m.less": function(e, t, s) {
			e.exports = {
				PencilIcon: "fKeLCuOy1oZ3UGfRARX6w",
				pencilIcon: "fKeLCuOy1oZ3UGfRARX6w"
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/Pencil/index.m.less"),
				a = s.n(c);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.b)();
				return n.a.createElement("i", {
					className: `${Object(i.b)(t?"edit":"pencil",e.isFilled)} ${e.className}`
				})
			}, "PencilIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = s.n(c);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("remove", e.isFilled), a.a.removeIcon, e.className),
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
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = s.n(c);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("report", e.isFilled), a.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Save/index.m.less": function(e, t, s) {
			e.exports = {
				SaveIcon: "_3n1jtdyipCtmS0HkOM1Tfd",
				saveIcon: "_3n1jtdyipCtmS0HkOM1Tfd"
			}
		},
		"./src/reddit/icons/fonts/Save/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Save/index.m.less"),
				c = s.n(i);
			const a = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: `${Object(r.b)("save",e.isFilled)} ${e.className}`
			}), "SaveIcon", c.a);
			t.a = a
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = s.n(c);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("share", e.isFilled), a.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = s.n(c);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("spam", e.isFilled), a.a.spamIcon, e.className),
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
				i = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);
			t.a = e => {
				const t = Object(i.b)();
				return n.a.createElement("i", {
					className: Object(r.a)(Object(c.b)(t ? "pin" : "sticky", e.isFilled), d.a.stickyIcon, e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, n.a.createElement(c.a, null, e.desc))
			}
		},
		"./src/reddit/icons/fonts/Tag/index.m.less": function(e, t, s) {
			e.exports = {
				TagIcon: "_2e-QjEsH3vADXyIpSzLW6_",
				tagIcon: "_2e-QjEsH3vADXyIpSzLW6_"
			}
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Tag/index.m.less"),
				c = s.n(i);
			const a = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: `${Object(r.b)("tag",e.isFilled)} ${e.className}`
			}), "TagIcon", c.a);
			t.a = a
		},
		"./src/reddit/icons/fonts/Unpin/index.m.less": function(e, t, s) {
			e.exports = {
				UnpinIcon: "_1X-tE86a0YWmVh310hgKTZ",
				unpinIcon: "_1X-tE86a0YWmVh310hgKTZ"
			}
		},
		"./src/reddit/icons/fonts/Unpin/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/Unpin/index.m.less"),
				a = s.n(c);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("unpin", e.isFilled), e.className)
			}), "UnpinIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
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
		"./src/reddit/icons/svgs/Saved/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2OUcXcp-8gkoFyUSKdNTxF"
			}
		},
		"./src/reddit/icons/svgs/Saved/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Saved/index.m.less"),
				c = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M12.5 2h-11a.5.5 0 0 0 0 1A2.5 2.5 0 0 1 4 5.5v12.24a1 1 0 0 0 1.4.92l4.6-2 4.6 2a1 1 0 0 0 1.4-.92V5.5A3.5 3.5 0 0 0 12.5 2zm1 6.53l-4.26 4.29a.75.75 0 0 1-1.06 0L6.47 11.1A.75.75 0 0 1 7.53 10l1.18 1.18 3.76-3.76a.75.75 0 0 1 1.06 1.06z"
			}))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				c = s.n(i);
			const a = e => n.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), n.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = a
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
				c = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				a = s.n(c);

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
					gutter: c,
					...l
				} = e;
				return n.a.createElement("div", d({
					className: Object(i.a)(a.a.expandRightContainer, t)
				}, l), n.a.createElement("div", {
					className: a.a.left,
					style: {
						flexBasis: r,
						height: o,
						marginRight: c
					}
				}, Array.isArray(s) && s[0]), n.a.createElement("div", {
					className: a.a.right
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
				return c
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			}));
			var o = s("./src/lib/makeListingKey/index.ts"),
				n = s("./src/reddit/selectors/posts.ts");
			const r = (e, {
					subredditName: t
				}) => Object(o.a)("ModhubPage-EventPosts", "timeline", {
					subredditName: t
				}),
				i = (e, t) => {
					const s = r(e, t);
					return Object(n.O)(e, {
						listingKey: s
					}) || []
				},
				c = (e, t) => {
					const s = r(e, t);
					return !!e.listings.postOrder.api.pending[s]
				},
				a = (e, t) => {
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
		"./src/reddit/selectors/experiments/rebed.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => Object(n.c)(e, {
				experimentEligibilitySelector: n.a,
				experimentName: o.R
			}) === o.Y.Enabled
		},
		"./src/reddit/selectors/experiments/reportingRevampDesktop.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const i = e => o.e.Enabled === Object(n.c)(e, {
				experimentEligibilitySelector: r.J,
				experimentName: o.i
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48.4ec79e40bb1c8beaf501.js.map