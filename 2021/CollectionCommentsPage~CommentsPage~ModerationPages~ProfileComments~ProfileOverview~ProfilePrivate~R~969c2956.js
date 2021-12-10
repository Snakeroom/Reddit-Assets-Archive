// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956.14c56e6ffc568d0f2f61.js
// Retrieved at 12/9/2021, 7:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"], {
		"./src/reddit/actions/eventPosts/index.ts": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "fetchEventPostsPending", (function() {
				return v
			})), o.d(t, "fetchEventPostsSuccess", (function() {
				return _
			})), o.d(t, "fetchEventPostsFailure", (function() {
				return g
			})), o.d(t, "fetchMoreEventPostsSuccess", (function() {
				return j
			})), o.d(t, "eventPostsRequested", (function() {
				return k
			})), o.d(t, "startEventNowSuccess", (function() {
				return E
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
				m = o("./src/reddit/constants/headers.ts");
			var u = (e, t, o, s, r) => Object(l.a)(Object(p.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/api/event_post_time.json`,
				method: n.jb.POST,
				data: {
					id: t,
					event_start: o,
					event_end: s,
					event_tz: r
				}
			});
			var b = (e, t) => Object(l.a)(Object(p.a)(e, [m.a]), {
					endpoint: `${e.apiUrl}/api/start_event_post.json`,
					method: n.jb.POST,
					data: {
						id: t
					}
				}),
				h = o("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts"),
				x = o("./src/reddit/models/Toast/index.ts"),
				f = o("./src/reddit/selectors/eventPosts.ts"),
				O = o("./src/reddit/selectors/posts.ts");
			const C = () => s.fbt._("Something went wrong. Just don't panic.", null, {
					hk: "4onxm1"
				}),
				v = Object(r.a)(i.e),
				_ = Object(r.a)(i.c),
				g = Object(r.a)(i.b),
				j = Object(r.a)(i.d),
				k = e => async (t, o, {
					gqlContext: s
				}) => {
					let n = o();
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
						m = i && l;
					if (r) return;
					const u = {
						name: e,
						pageSize: 25,
						nonInclusiveCursor: null
					};
					if (m) u.nonInclusiveCursor = p;
					else if (i && !l) return;
					const b = Object(f.e)(n, {
						subredditName: e
					});
					t(v({
						key: b
					}));
					const O = await ((e, t) => Object(c.a)(e, {
						...d,
						variables: t
					}))(s(), u);
					if (O.ok) {
						const {
							subredditInfoByName: e
						} = O.body.data, {
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
						r.length > 0 && (i = r.map(e => e.id), a = r.reduce((e, t) => (e[t.id] = t, e), {})), n = o(), t((m ? j : _)({
							key: b,
							postIds: i,
							meta: n.meta,
							posts: a,
							pageInfo: c
						}))
					} else t(g({
						error: O.error,
						key: b
					})), t(Object(a.f)({
						kind: x.b.Error,
						text: C()
					}))
				}, E = Object(r.a)(i.f), w = e => async (t, o, {
					apiContext: n
				}) => {
					if ((await b(n(), e)).ok) {
						const n = () => s.fbt._("Following event has started successfully: {title}", [s.fbt._param("title", c)], {
							hk: "e9iz9"
						});
						t(E({
							postId: e
						}));
						const r = o(),
							i = Object(O.H)(r, {
								postId: e
							}),
							c = i && i.title || "";
						t(Object(a.f)({
							kind: x.b.SuccessMod,
							text: n()
						}))
					} else t(Object(a.f)({
						kind: x.b.Error,
						text: C()
					}))
				}, I = Object(r.a)(i.a), y = (e, t) => async (o, r, {
					apiContext: i
				}) => {
					const c = await u(i(), e, t.startDate, t.endDate, t.timezoneName);
					if (c.ok) {
						const t = c.body,
							i = 14400,
							d = Math.round(t.event_start / n.Rb);
						let l = t.event_end;
						const p = {
							eventStart: d,
							eventEnd: l = l && Math.round(l / n.Rb) || d + i,
							eventIsLive: t.event_is_live
						};
						o(I({
							postId: e,
							eventInfo: p
						}));
						const m = r(),
							u = Object(O.H)(m, {
								postId: e
							}),
							b = u && u.title || "",
							h = () => s.fbt._("Following event time is updated successfully: {title}", [s.fbt._param("title", b)], {
								hk: "1m1w1c"
							});
						o(Object(a.f)({
							kind: x.b.SuccessMod,
							text: h()
						}))
					} else o(Object(a.f)({
						kind: x.b.Error,
						text: C()
					}))
				}
		},
		"./src/reddit/actions/postCollection/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return N
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
				m = o("./src/lib/omitHeaders/index.ts"),
				u = o("./src/reddit/constants/headers.ts");
			var b = (e, t, o) => Object(p.a)(Object(m.a)(e, [u.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/add_post_to_collection.json`,
				method: l.jb.POST,
				data: {
					collection_id: t,
					link_fullname: o
				}
			});
			var h = (e, t, o) => Object(p.a)(Object(m.a)(e, [u.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/create_collection.json`,
				method: l.jb.POST,
				data: {
					title: t,
					sr_fullname: o
				}
			});
			var x = (e, t) => Object(p.a)(Object(m.a)(e, [u.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/delete_collection.json`,
					method: l.jb.POST,
					data: {
						collection_id: t
					}
				}),
				f = o("./src/config.ts");
			var O = (e, t) => Object(p.a)(Object(m.a)(e, [u.a]), {
				endpoint: `${f.a.gatewayUrl}/desktopapi/v1/subreddit_collections/${t}`,
				method: l.jb.GET
			});
			var C = (e, t, o) => Object(p.a)(Object(m.a)(e, [u.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/remove_post_in_collection.json`,
				method: l.jb.POST,
				data: {
					collection_id: t,
					link_fullname: o
				}
			});
			var v = (e, t, o) => Object(p.a)(Object(m.a)(e, [u.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_title.json`,
				method: l.jb.POST,
				data: {
					collection_id: t,
					title: o
				}
			});
			var _ = (e, t, o) => Object(p.a)(Object(m.a)(e, [u.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/reorder_collection.json`,
				method: l.jb.POST,
				data: {
					collection_id: t,
					link_ids: o.join(",")
				}
			});
			var g = (e, t, o) => Object(p.a)(Object(m.a)(e, [u.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_description.json`,
				method: l.jb.POST,
				data: {
					collection_id: t,
					description: o
				}
			});
			var j = (e, t, o) => Object(p.a)(Object(m.a)(e, [u.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/update_collection_display_layout.json`,
					method: l.jb.POST,
					data: {
						collection_id: t,
						display_layout: o
					}
				}),
				k = o("./src/reddit/helpers/overlay/index.ts"),
				E = o("./src/reddit/helpers/path/index.ts"),
				w = o("./src/reddit/models/Toast/index.ts"),
				I = o("./src/reddit/selectors/postCollection.ts"),
				y = o("./src/reddit/selectors/posts.ts"),
				P = o("./src/reddit/selectors/subreddit.ts");
			const T = Object(i.a)(a.c),
				S = Object(i.a)(a.b),
				M = Object(i.a)(a.d),
				N = (e, t) => async (o, s, {
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
						o(M({
							collection: t,
							meta: e
						})), i = t
					} else {
						const e = r.error;
						o(S(e))
					}
					return i
				}, F = Object(i.a)(a.f), R = e => async (t, o, {
					apiContext: n
				}) => {
					const r = o().postCollection.subredditToIds || {};
					if (Object.keys(r).length > 0) return;
					const i = await O(n(), e);
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
							a = Object(y.H)(i, {
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
								i = Object(y.H)(t, {
									postId: s
								});
							i && i.permalink && n(Object(k.a)(i.permalink))
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
						const n = Object(y.H)(i, {
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
							buttonAction: Object(k.a)(n.permalink)
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
					if ((await x(a(), e)).ok) {
						const {
							url: i
						} = d.platform.currentPage, a = Object(I.q)(d, {
							collectionId: e
						}), l = a && a.title || "", p = a && a.subredditId, m = p ? Object(P.c)(d, p) : "/";
						o(V({
							collectionId: e,
							collection: a
						})), o(t ? Object(n.c)(Object(r.a)(i, ["collection"])) : Object(n.b)(m)), o(Object(c.f)({
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
					const i = await v(r(), e, t);
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
				}, J = Object(i.a)(a.l), Q = Object(i.a)(a.m), z = Object(i.a)(a.k), Y = e => async (t, o) => {
					const s = o().platform.currentPage.locationState;
					t(!(!s || !s[d.b.IsOverlay]) ? Object(k.a)(e.permalink) : Object(n.b)(Object(E.b)(e.permalink)))
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
						if (i.ok) o(Q({
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
							o(z(e)), o(Object(c.f)({
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
						const i = await j(r(), e, t);
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
				m = o("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				u = o("./src/reddit/models/RichTextJson/addRTJParam.ts");
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
			var O = (e, t) => Object(c.a)(Object(d.a)(e, [l.a]), {
					endpoint: Object(u.a)(Object(p.a)(`${e.apiUrl}/api/editusertext`)),
					method: a.jb.POST,
					data: f(t)
				}).then(m.b),
				C = o("./src/reddit/helpers/overlay/index.ts"),
				v = o("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				_ = o("./src/reddit/helpers/trackers/lightbox.ts"),
				g = o("./src/reddit/helpers/trackers/post.ts"),
				j = o("./src/reddit/helpers/trackers/postComposer.ts"),
				k = o("./src/reddit/models/Media/index.ts"),
				E = o("./src/reddit/models/PostCreationForm/index.ts"),
				w = o("./src/reddit/models/Toast/index.ts"),
				I = o("./src/reddit/selectors/posts.ts"),
				y = o("./src/reddit/actions/postCreation/constants.ts"),
				P = o("./src/reddit/actions/postCreation/general.ts");
			const T = Object(n.a)(y.l),
				S = Object(n.a)(y.m),
				M = Object(n.a)(y.x),
				N = Object(n.a)(y.H),
				F = Object(n.a)(y.I),
				R = (e, t) => async (o, s, {
					apiContext: n
				}) => {
					const r = s(),
						i = Object(I.H)(r, {
							postId: e
						});
					t ? (o(Object(C.a)(i.permalink)), Object(_.e)(e, "edit")(r)) : Object(g.d)(e, "edit")(r);
					const {
						media: a
					} = i;
					if (!a) return;
					let c, d = E.i.RICH_TEXT,
						l = "";
					a.type === k.o.TEXT ? (d = E.i.MARKDOWN, l = a.content) : a.type === k.o.RTJSON && (l = (d = a.rteMode || E.i.RICH_TEXT) === E.i.MARKDOWN ? a.markdownContent : a.richtextContent, c = a.mediaMetadata || void 0), o(N({
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
					j.y(o(), Object(P.n)(c)), t(M(a.id));
					const d = await O(n(), e),
						l = !1 === d.body.success;
					if (t(T(a.id)), d.ok && !l) {
						t(Object(i.f)({
							kind: w.b.SuccessCommunity,
							text: s.fbt._("Post successfully edited", null, {
								hk: "xej5K"
							})
						})), t(F(a.id));
						const e = Object(v.a)(d.body);
						t(Object(r.R)({
							[a.id]: e
						}))
					} else t(S(d.error))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/streams.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return m
			})), o.d(t, "a", (function() {
				return C
			})), o.d(t, "b", (function() {
				return v
			})), o.d(t, "d", (function() {
				return _
			})), o.d(t, "e", (function() {
				return g
			})), o.d(t, "f", (function() {
				return k
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
				x = Object(r.a)(i.z),
				f = Object(r.a)(i.M),
				O = Object(r.a)(i.L),
				C = Object(r.a)(i.t),
				v = Object(r.a)(i.u),
				_ = e => async (t, o, {
					gqlContext: s
				}) => {
					const n = Object(c.g)(e),
						r = o();
					if (Object(d.d)(r, n)) return;
					t(u(n));
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
				}, g = (e, t) => async (o, s) => o(j(e, t)), j = (e, t) => async (o, s, {
					gqlContext: n
				}) => {
					const r = s();
					if (Object(d.f)(r)) return;
					o(h());
					const i = await Object(a.f)(n(), e, t),
						c = Date.now();
					if (i.ok && i.body && i.body.data) {
						const t = i.body.data;
						o(x({
							listingName: e,
							models: t,
							utcTimeStamp: c
						}))
					} else o(I({
						error: i.error,
						utcTimeStamp: c
					}))
				}, k = (e, t) => async (o, s) => o(E(e, t)), E = (e, t) => async (o, s, {
					gqlContext: n
				}) => {
					const r = s();
					if (Object(d.f)(r)) return;
					o(h());
					const i = Date.now(),
						c = e.replace("r/", ""),
						p = Object(l.C)(r, c),
						m = await Object(a.b)(n(), {
							subredditId: p,
							options: t
						}),
						u = m.body;
					m.ok && u && u.data || o(I({
						error: m.error,
						utcTimeStamp: i
					}));
					const b = u.data.liveVideoFeed.posts.edges.map(e => (async (e, t) => {
							const o = await Object(a.e)(e, t),
								s = Date.now(),
								n = o.body;
							return n && n.data ? n.data : void w({
								streamId: t,
								error: o.error,
								utcTimeStamp: s
							})
						})(n(), e.node.id)),
						f = (await Promise.all(b)).filter(e => void 0 !== typeof e);
					o(x({
						listingName: e,
						models: f,
						utcTimeStamp: i
					}))
				}, w = e => async t => {
					t(f(e))
				}, I = e => async t => {
					t(O(e))
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
			const n = Object(s.a)(() => Promise.all([o.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				r = Object(s.a)(() => Promise.all([o.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(s.a)(() => Promise.all([o.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
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
				m = o.n(p);
			const u = .1,
				b = Object(c.c)({
					isChatPost: l.d
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
					} = this.props, o = t && e;
					return t ? i.a.createElement(s.a, {
						rootMargin: "20px 0px 20px 0px",
						threshold: u,
						onChange: this.onVisibilityChange
					}, i.a.createElement("div", {
						className: Object(d.a)(m.a.Icon, this.props.className)
					}, i.a.createElement("span", {
						className: Object(d.a)(m.a.Animate, m.a.top, {
							[m.a.play]: o
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
						className: Object(d.a)(m.a.Animate, m.a.bottom, {
							[m.a.play]: o
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
				m = o("./src/reddit/actions/post.ts"),
				u = o("./src/reddit/components/CountAnimation/index.tsx"),
				b = o("./src/reddit/constants/componentTestIds.ts"),
				h = o("./src/reddit/constants/experiments.ts"),
				x = o("./src/reddit/constants/postLayout.ts"),
				f = o("./src/reddit/helpers/path/index.ts"),
				O = o("./src/reddit/hooks/useClickSourceData.ts"),
				C = o("./src/reddit/hooks/useExperimentVariant.ts"),
				v = o("./src/reddit/icons/fonts/Comment/index.tsx"),
				_ = o("./src/reddit/selectors/chatPost.ts"),
				g = o("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				j = o("./src/reddit/selectors/experiments/postSeo.ts"),
				k = o("./src/reddit/selectors/posts.ts"),
				E = o("./src/reddit/selectors/user.ts"),
				w = o("./src/reddit/components/CommentsLink/index.m.less"),
				I = o.n(w);
			const y = () => 0,
				P = Object(i.b)(() => Object(c.c)({
					isChatPost: _.d,
					isPostSEOEligible: j.e,
					postPermalink: k.G,
					shouldOpenPostInNewTab: E.db
				})),
				T = ({
					hasModPostPerms: e,
					isCountAnimShadowTestEnabled: t,
					isChatPost: o,
					isCommentCountAnimation: a,
					modModeEnabled: c,
					numComments: l,
					postId: b,
					shouldShowIcon: h,
					shouldShowText: f,
					text: O,
					type: C
				}) => {
					let _;
					_ = O || (C === x.g.Compact || o || c && e ? Object(p.b)(l) : s.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [s.fbt._plural(l, "number", Object(p.b)(l))], {
						hk: "1QeOde"
					}));
					const j = Object(i.d)(),
						k = Object(n.useCallback)(e => {
							const {
								commentCountChange: t
							} = e.subscribe.data;
							0 !== t && j(Object(m.H)({
								postId: b,
								delta: t
							}))
						}, [j, b]),
						E = Object(n.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "COMMENT_COUNT_UPDATE",
									postID: b
								}
							}
						}),
						w = a && l < g.a;
					return r.a.createElement(n.Fragment, null, h && r.a.createElement(v.a, {
						className: I.a.commentIcon,
						role: "presentation"
					}), f && r.a.createElement("span", {
						className: I.a.text
					}, (w || t) && r.a.createElement(u.b, {
						countToUpperBound: l,
						incrementDelta: y,
						initialDelay: y,
						initialDisplayCount: l,
						postId: b,
						shouldDisjointAnimation: !0,
						subsequentRecurringDelay: y,
						featureName: u.a.Comment,
						queryKey: "postCommentCount",
						queryVariables: E.current,
						onDataCB: k,
						isLoadTestOnly: !!t && !w
					}), !w && _), f && (!c || !e) && w && r.a.createElement("span", {
						className: Object(d.a)(I.a.text, I.a.commentsText)
					}, s.fbt._({
						"*": "comments",
						_1: " comment"
					}, [s.fbt._plural(l)], {
						hk: "119Rxn"
					})))
				};
			t.a = P(e => {
				const {
					className: t,
					hasModPostPerms: o,
					forceOpenInNewTab: s,
					isChatPost: n,
					isCommentPermalink: i,
					isCommentsPage: c,
					isOverlay: p,
					isPostSEOEligible: m,
					modModeEnabled: u,
					numComments: x,
					onClick: v,
					postPermalink: _,
					shouldOpenPostInNewTab: g,
					shouldShowIcon: j = !0,
					shouldShowText: k = !0,
					text: E,
					type: w,
					postId: y,
					isCommentCountAnimation: P,
					isCountAnimShadowTestEnabled: S
				} = e, M = c && !i && !m, N = i && !p, F = Object(O.a)(), R = Object(C.a)(h.pd) === h.wd.Enabled, A = r.a.createElement(T, {
					hasModPostPerms: o,
					isCountAnimShadowTestEnabled: !!S,
					isChatPost: n,
					isCommentCountAnimation: !!P,
					modModeEnabled: u,
					numComments: x,
					postId: y,
					shouldShowIcon: j,
					shouldShowText: k,
					text: E,
					type: w
				});
				return M ? r.a.createElement("div", {
					className: Object(d.a)(I.a.commentsLink, I.a.defaultCursorWrapper, t),
					onClick: v
				}, A) : r.a.createElement(a.a, {
					rel: "nofollow",
					"data-click-id": "comments",
					"data-test-id": b.a,
					className: Object(d.a)(I.a.commentsLink, I.a.link, t),
					target: s || g ? "_blank" : void 0,
					to: N ? Object(f.b)(_) : R ? Object(l.a)(_, !0, F) : Object(l.a)(_),
					onClick: v
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
			const m = e => e.preventDefault();
			t.a = Object(i.a)(e => r.a.createElement(a.e, null, r.a.createElement(a.i, null, r.a.createElement(d.a, null, r.a.createElement(a.q, null, e.headerText || s.fbt._("Confirm", null, {
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
			}, e.cancelActionText || s.fbt._("Cancel", null, {
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
				m = o("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = o("./src/reddit/selectors/tooltip.ts"),
				b = o("./src/reddit/components/ContentTooltip/index.m.less"),
				h = o.n(b);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			const f = {
					height: 200,
					width: 200
				},
				O = e => {
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
					return r.a.createElement("div", x({
						onClick: a,
						className: Object(d.a)(o, h.a.StyledTooltipContainer, {
							[h.a.caretOnTop]: "top" === n,
							[h.a.caretOnLeft]: "left" === n,
							[h.a.caretOnRight]: "right" === n,
							[h.a.caretOnBottom]: "bottom" === n
						}),
						style: {
							...s,
							"--contentTooltip-caretColor": i && i[n] ? i[n] : Object(m.a)(e).body
						}
					}, c), t)
				}),
				v = Object(a.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(u.b)(t)(e)
				}),
				_ = Object(c.a)(C, [s.a.Click, s.a.Keydown]),
				g = Object(i.b)(v);
			class j extends r.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = f
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
								position: n ? this.props.defaultTooltipPosition : O(this.props.defaultTooltipPosition)
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
					return r.a.createElement(_, x({}, this.props, {
						caretPosition: s,
						targetPosition: t,
						tooltipPosition: o
					}))
				}
			}
			t.a = g(j)
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
				ModModeVariant: "_1z0qJ5gYwMtpqfxoGibBGq",
				modModeVariant: "_1z0qJ5gYwMtpqfxoGibBGq",
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
					e.EditPost = "EDITPOST", e.EditFlair = "EDITFLAIR", e.Save = "SAVE", e.Gild = "GILD", e.Hide = "HIDE", e.PostOverflowMenu = "POST_OVERFLOW_MENU", e.Report = "REPORT", e.Share = "SHARE", e.ShowFewerLikeThis = "SHOW_FEWER_LIKE_THIS", e.ShowMoreLikeThis = "SHOW_MORE_LIKE_THIS"
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
				e.LoggedIn = "LoggedInVariant", e.LoggedOut = "LoggedOutVariant", e.Op = "OpVariant", e.ModModeWithPost = "ModModeVariant"
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
					[d.a.ShowMoreLikeThis]: n.First
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
						groupVariant: ((e, t, o = !1) => o ? r.ModModeWithPost : e && t ? r.Op : e ? r.LoggedIn : r.LoggedOut)(e.isLoggedIn, e.isUserOp, e.modModeWithPost)
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
				return Oe
			})), o.d(t, "a", (function() {
				return Ce
			})), o.d(t, "d", (function() {
				return ke
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
				m = o("./src/lib/timezone/index.ts"),
				u = o("./src/reddit/actions/gold/modals.ts"),
				b = o("./src/reddit/actions/modal.ts"),
				h = o("./src/reddit/actions/post.ts"),
				x = o("./src/reddit/actions/postCreation/editing.ts"),
				f = o("./src/reddit/actions/postFlair.ts"),
				O = o("./src/reddit/actions/reportFlow/index.ts"),
				C = o("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				v = o("./src/reddit/components/CommentsLink/index.tsx"),
				_ = o("./src/reddit/hooks/useTracking.ts"),
				g = o("./src/reddit/helpers/trackers/freeAwardOffer.ts"),
				j = o("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				k = o("./src/reddit/components/ContentTooltip/index.tsx"),
				E = o("./src/reddit/components/GiveAwardTooltip/index.m.less"),
				w = o.n(E);
			const {
				fbt: I
			} = o("./node_modules/fbt/lib/FbtPublic.js");
			var y = e => {
					const {
						tooltipId: t
					} = e, o = Object(i.e)(j.b), s = Object(_.a)();
					return Object(n.useEffect)(() => {
						o && s(Object(g.c)())
					}, [o, s]), o ? r.a.createElement(k.a, {
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
				S = o("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				M = o("./src/reddit/components/PostFlairPicker/index.tsx"),
				N = o("./src/reddit/components/PostModModeDropdown/index.tsx"),
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
				Q = o("./src/reddit/icons/fonts/index.tsx"),
				z = o("./src/reddit/icons/fonts/ModActions/index.tsx"),
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
				de = o("./src/reddit/selectors/experiments/antievil/index.tsx"),
				le = o("./src/reddit/selectors/posts.ts"),
				pe = o("./src/reddit/components/Flatlist/index.m.less"),
				me = o.n(pe);

			function ue() {
				return (ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			let be, he;
			const xe = p.a.button("ShareButton", me.a),
				fe = p.a.wrapped(A.a, "ShareMenu", me.a),
				Oe = Object(l.a)(({
					className: e,
					...t
				}) => r.a.createElement(z.a, ue({}, t, {
					className: Object(c.a)(me.a.modActionsIcon, e),
					style: {
						color: Object(U.a)(Object(V.a)(t), Z.a.actionIcon, Z.b.actionIcon)
					}
				}))),
				Ce = e => r.a.createElement("div", ue({}, e, {
					className: Object(c.a)(me.a.flatlistSeparator, e.className)
				})),
				ve = Object(W.u)({
					currentProfileName: W.i,
					isCommentPermalink: W.w,
					isCommentsPage: W.x,
					isProfilePostListing: W.K,
					pageLayer: e => e
				}),
				_e = Object(a.c)({
					activeModalId: ce.a,
					claimedFreeAward: j.b,
					layout: W.Q,
					userIsOp: G.qb,
					subreddit: W.r,
					isBlockedUserBannerEnabled: (e, {
						post: t
					}) => !!Object(le.w)(e, {
						postId: t.postId
					}) && Object(de.a)(e),
					isTrueblockPCBlockeeEnabled: de.b
				}),
				ge = Object(i.b)(_e, (e, {
					post: t,
					isOverlay: s,
					isCommentsPage: n
				}) => ({
					addPostToCollection: (t, o) => e(Object(ne.a)(t, o)),
					onToggleModal: t => e(Object(b.i)(t)),
					onToggleSave: () => e(Object(h.T)(t.postId)),
					onHide: o => e(Object(h.Y)(t.postId, !t.hidden, s, !0)),
					onReportClick: () => e(Object(O.c)(t.postId, s)),
					onEdit: () => {
						const o = !s && !n;
						e(Object(x.a)(t.postId, o))
					},
					onFlairPost: () => e(Object(b.i)(Object(M.b)(t.postId, s))),
					onGildClick: (o, s) => e(Object(u.d)({
						awardId: s,
						correlationId: o,
						thingId: t.postId
					})),
					onFlairChanged: ({
						selectedTemplateId: o,
						previewFlair: s
					}) => e(Object(f.h)({
						post: t,
						selectedTemplateId: o,
						previewFlair: s
					})),
					toggleEditStartTimeModal: async () => {
						be && he || ([be, he] = await Promise.all([o.e("schedulePickerModal").then(o.bind(null, "./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx")).then(e => e.default), Promise.resolve().then(o.bind(null, "./src/reddit/actions/eventPosts/index.ts")).then(e => e.editEventTimeRequested)])), e(Object(b.i)(Object($.s)(t.postId, s, $.k.POST_OVERFLOW_MENU)))
					},
					addEventStartTime: o => {
						he && e(he(t.id, o))
					}
				})),
				je = r.a.memo(e => {
					const {
						activeModalId: t,
						addEventStartTime: i,
						className: a,
						currentProfileName: l,
						currentUser: p,
						forceOpenInNewTab: u,
						hasModFlairPerms: b,
						hasModFullPerms: h,
						hasModPostPerms: x,
						isCommentPermalink: f,
						isCommentsPage: O,
						isCountAnimShadowTestEnabled: _,
						isLargePost: g,
						isOverlay: j,
						isProfilePostListing: k,
						isSticky: E,
						layout: w,
						modModeEnabled: I,
						onFlairChanged: A,
						onIgnoreReports: L,
						onOpenReportsDropdown: W,
						pageLayer: V,
						post: U,
						sendEvent: G,
						showEditFlair: z,
						showEditPost: Z,
						subreddit: ne,
						toggleEditStartTimeModal: ae,
						tooltipType: ce,
						userIsOp: de,
						searchIgnoreClick: le,
						isCommentCountAnimation: pe,
						hostPostData: ue,
						listingKey: he,
						onGildClick: Ce,
						onToggleModal: ve,
						claimedFreeAward: _e,
						onToggleSave: ge,
						onHide: je,
						addPostToCollection: Ee,
						onReportClick: we,
						isBlockedUserBannerEnabled: Ie,
						shouldHideItems: ye,
						isTrueblockPCBlockeeEnabled: Pe
					} = e, Te = Object(n.useCallback)(async () => {
						const e = Object(q.e)(q.a.GildingFlow, !0);
						Ce(e, null == _e ? void 0 : _e.id);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(o.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						G(t(U.id))
					}, [Ce, U, G, _e]), Se = Object(n.useCallback)(() => {
						t && ve(t)
					}, [t, ve]), Me = Object(n.useCallback)(() => {
						const e = Object($.t)(U.id, j);
						ve(e)
					}, [ve, j, U]), Ne = Object(n.useCallback)(e => {
						Ee(e.id, U.id).then(() => Se())
					}, [Ee, Se, U]), Fe = Object(n.useCallback)((e, t) => {
						G(Object(J.h)(U.id, e, j ? "post_detail" : "post", he, ue, void 0, null == t ? void 0 : t.referralId))
					}, [ue, j, G, he, U]), Re = Object(n.useCallback)(() => {
						ge(), Fe(U.saved ? "unsave" : "save")
					}, [ge, U, Fe]), Ae = Object(n.useCallback)(() => {
						je(!!U.hidden), Fe(U.hidden ? "unhide" : "hide")
					}, [je, U, Fe]), Le = Object(n.useCallback)(() => {
						we(), Fe("report")
					}, [we, Fe]), De = Object(n.useMemo)(() => r.a.createElement(xe, {
						"data-click-id": "share"
					}, r.a.createElement(Y.a, {
						className: me.a.shareIcon
					}), r.a.createElement("span", {
						className: me.a.shareText
					}, s.fbt._("share", null, {
						hk: "1eAfZg"
					}))), []), Be = !!p && Object(ee.e)(p) === U.author, We = Object(se.a)("View--Reports", U.id, ce), Ve = Object(se.a)(d.mc, U.id, ce), Ue = Object(T.c)(U), Ge = ke("-mod-actions-menu", U.id, j, E), He = Object(T.a)(U), qe = U.postId, Ke = w === B.g.Large, Je = !O && Ke || x && I || ye, Qe = !(j || O || f), ze = p && U.isGildable && !(U.authorIsBlocked && Ie) && !(U.unrepliableReason && Pe), Ye = U.media && U.media.type === X.o.LIVEVIDEO, Xe = !!U.recommendationContext, Ze = I && x;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(c.a)(me.a.flatlistContainer, a)
					}, r.a.createElement(v.a, {
						className: Object(c.a)(me.a.rowContainer, me.a.commentsLink),
						forceOpenInNewTab: u,
						hasModPostPerms: x,
						isCommentsPage: O,
						isCommentPermalink: f,
						isOverlay: j,
						postId: U.id,
						modModeEnabled: I,
						numComments: U.numComments,
						isCommentCountAnimation: pe,
						isCountAnimShadowTestEnabled: _
					}), ze && r.a.createElement(r.a.Fragment, null, r.a.createElement(H.a, {
						displayText: s.fbt._("Award", null, {
							hk: "2fZCpE"
						}),
						textClassName: me.a.responsiveRowText,
						flatlistItem: te.a.Gild,
						isLoggedIn: !!p,
						isUserOp: de,
						onClick: Te,
						searchIgnoreClick: le,
						skipRoleAttr: !0
					}, r.a.createElement(Q.a, {
						name: "award",
						className: me.a.awardIcon,
						id: Ve
					})), r.a.createElement(y, {
						postOrComment: U,
						tooltipId: Ve
					})), r.a.createElement(fe, {
						className: Object(c.a)(me.a.rowContainer, Object(oe.b)({
							flatlistItem: te.a.Share,
							isLoggedIn: !!p,
							isUserOp: de,
							modModeWithPost: Ze
						})),
						dropdownId: ke("-share-menu", U.id, j, E),
						permalink: U.permalink,
						post: U,
						sendEventWithName: Fe,
						subredditType: null == ne ? void 0 : ne.type
					}, De), Z && !Je && r.a.createElement(H.a, {
						displayText: s.fbt._("Edit post", null, {
							hk: "Jq2Cr"
						}),
						textClassName: me.a.responsiveRowText,
						flatlistItem: te.a.EditPost,
						isLoggedIn: !!p,
						isUserOp: de,
						onClick: e.onEdit,
						skipRoleAttr: !0
					}, r.a.createElement(Q.a, {
						name: "edit"
					})), !Ze && r.a.createElement(H.a, {
						displayText: U.saved ? s.fbt._("unsave", null, {
							hk: "4Dn4IT"
						}) : s.fbt._("save", null, {
							hk: "3NOMst"
						}),
						textClassName: me.a.responsiveRowText,
						flatlistItem: te.a.Save,
						isLoggedIn: !!p,
						isUserOp: de,
						onClick: Re,
						searchIgnoreClick: le,
						skipRoleAttr: !0
					}, r.a.createElement(Q.a, {
						name: U.saved ? "saved" : "save",
						className: me.a.saveIcon
					})), !U.isSponsored && !Je && r.a.createElement(H.a, {
						displayText: U.hidden ? s.fbt._("unhide", null, {
							hk: "151XLs"
						}) : s.fbt._("hide", null, {
							hk: "4AnA6R"
						}),
						textClassName: me.a.responsiveRowText,
						flatlistItem: te.a.Hide,
						isLoggedIn: !!p,
						isUserOp: de,
						onClick: Ae,
						searchIgnoreClick: le,
						skipRoleAttr: !0
					}, r.a.createElement(Q.a, {
						name: "hide",
						isFilled: U.hidden
					})), !Be && !U.isSponsored && !Je && r.a.createElement(H.a, {
						displayText: s.fbt._("report", null, {
							hk: "1phfns"
						}),
						textClassName: me.a.responsiveRowText,
						flatlistItem: te.a.Report,
						isLoggedIn: !!p,
						isUserOp: de,
						onClick: Le,
						searchIgnoreClick: le,
						skipRoleAttr: !0
					}, r.a.createElement(Q.a, {
						name: "report"
					})), r.a.createElement(S.a, {
						isOverlay: j,
						layout: w,
						modModeEnabled: I,
						post: U,
						sendEvent: G
					}), x && r.a.createElement(P.a, {
						dropdownId: Ge,
						onClick: () => G(Object(J.h)(U.id, "post_mod_action_menu"))
					}, r.a.createElement(Oe, null), r.a.createElement(N.a, {
						canEditFlair: b && !!z,
						hasModFullPerms: h,
						hasModPostPerms: x,
						isOverlay: !!j,
						isPostAuthor: Be,
						modModeEnabled: I,
						post: U,
						tooltipId: Ge
					})), x && Ue && !I && r.a.createElement(R.c, {
						text: `${He}`,
						onClick: () => {
							W(We), G(Object(J.h)(U.id, "post_report_menu"))
						},
						id: We
					}, r.a.createElement(D.a, {
						model: U,
						onIgnoreReports: () => {
							L(), G(Object(K.k)(U.ignoreReports ? "restore_reports" : "ignore_reports", U.id))
						},
						tooltipId: We
					}), r.a.createElement(Q.a, {
						className: me.a.icon,
						name: U.ignoreReports ? "ignore_reports" : "report"
					})), !U.isSponsored && r.a.createElement("div", {
						className: me.a.overflowMenuContainer
					}, r.a.createElement(F.a, {
						currentProfileName: l,
						dropdownId: ke("-overflow-menu", U.id, j, E),
						ignoreOverflowMenuBreakpoints: ye,
						isCommentsPage: O,
						isFixed: E,
						isOverlay: !!j,
						isProfilePostListing: k,
						isRecommendationPost: Xe,
						layout: w,
						modModeWithPost: Ze,
						pageLayer: V,
						permalink: U.permalink,
						postId: qe,
						sendEvent: G,
						showEditPost: !!Z,
						showEditFlair: !!z,
						useFlatlistBreakpoints: e.useFlatlistBreakpoints,
						toggleAddEventStartTimeModal: ae,
						toggleEditStartTimeModal: ae
					})), t === Object($.t)(U.id, j) && r.a.createElement(re.a, {
						subredditId: U.belongsTo.id,
						onClose: Se,
						postId: U.id,
						onSelectCollection: Ne,
						titleText: s.fbt._("Add post to a collection", null, {
							hk: "38vSyF"
						}),
						onItemHoverActionText: s.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						isOverlay: j
					}), t === Object($.s)(U.id, j, $.k.POST_OVERFLOW_MENU) && be && r.a.createElement(be, {
						onChange: i,
						onClose: ae,
						schedule: Object(m.c)(U),
						shouldShowDeleteButton: !1
					}), t === Object($.u)(U.id, j) && r.a.createElement(ie.a, {
						onCancel: Me,
						onCollectionCreated: Ne,
						subredditId: U.belongsTo.id
					}), t === Object(M.b)(U.id, j) && r.a.createElement(M.a, {
						flairs: U.flair,
						subredditId: U.belongsTo.id,
						modalId: Object(M.b)(U.id, j),
						onFlairChanged: A
					}), r.a.createElement("div", {
						className: me.a.flexSpacer
					})), Qe && !Ye && r.a.createElement(C.a, {
						className: Object(c.a)(me.a.liveDiscussionWrapper, {
							[me.a.large]: g
						}),
						isMod: x,
						postId: U.postId
					}))
				});
			je.displayName = "Flatlist";
			const ke = (e, t, o, s) => {
					let n = t;
					return o && (n += "-overlay"), s && (n += "-sticky"), n += e
				},
				Ee = ve(ge(Object(L.c)(je)));
			t.c = r.a.memo((function(e) {
				const t = Object(ae.a)();
				return r.a.createElement(Ee, ue({}, e, {
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
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(l.b)(t)(e)
				}),
				b = Object(r.b)(u, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(a.h)({
						tooltipId: t
					}))
				})),
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
		"./src/reddit/components/ModModeFilteredReason/helpers.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return r
			})), o.d(t, "d", (function() {
				return i
			})), o.d(t, "e", (function() {
				return a
			})), o.d(t, "a", (function() {
				return c
			})), o.d(t, "b", (function() {
				return d
			}));
			var s = o("./src/lib/constants/index.ts"),
				n = o("./src/reddit/models/ModQueueTrigger/index.ts");
			const r = e => "string" == typeof e.bannedBy && e.bannedBy === s.l || !!Object(n.b)(e, n.a.AUTOMOD),
				i = e => !!e.bannedBy && !!e.collapsedBecauseCrowdControl,
				a = e => !!e.bannedBy && !!Object(n.b)(e, n.a.HATEFUL_CONTENT),
				c = e => r(e) || i(e) || a(e),
				d = e => "boolean" == typeof e.bannedBy && e.bannedBy || c(e)
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
				return x
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
				x = e => {
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
				b = o("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				h = o("./src/reddit/components/ModModeReports/helpers.ts"),
				x = o("./src/reddit/components/PostFlairPicker/index.tsx"),
				f = o("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				O = o("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				C = o("./src/reddit/helpers/trackers/post.ts"),
				v = o("./src/reddit/icons/fonts/Approve/index.tsx"),
				_ = o("./src/reddit/icons/fonts/Spam/index.tsx"),
				g = o("./src/reddit/icons/fonts/Tag/index.tsx"),
				j = o("./src/reddit/selectors/activeModalId.ts"),
				k = o("./src/reddit/selectors/moderatorPermissions.ts"),
				E = o("./src/reddit/selectors/postFlair.ts"),
				w = o("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				I = o("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				y = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				P = o("./src/reddit/components/ModalStyledComponents/MessageBox.tsx"),
				T = o("./src/reddit/hooks/useTracking.ts"),
				S = o("./src/reddit/icons/fonts/Remove/index.tsx"),
				M = o("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				N = o.n(M);
			const F = ({
					className: e,
					textClassName: t,
					isOverlay: o,
					iconOnly: n,
					post: a
				}) => {
					const [c, d] = r.a.useState(!1), [u, h] = r.a.useState(!1), x = Object(T.a)(), O = Object(i.d)(), {
						isPrediction: v,
						resolvedOptionId: _,
						totalVoteCount: g
					} = a.pollData || {}, j = Object(b.b)(a), k = Object(b.c)(a), E = () => {
						d(!1), O(Object(l.S)(a.id, !1)), a.isRemoved && Object(b.c)(a) ? x(Object(C.h)(a.id, "confirm_remove")) : x(Object(C.h)(a.id, "remove"))
					}, w = function(e, t) {
						return t ? s.fbt._("Remove post", null, {
							hk: "jZCd2"
						}) : e ? s.fbt._("Removed", null, {
							hk: "1VADh1"
						}) : s.fbt._("Remove", null, {
							hk: "2VjjxY"
						})
					}(a.isRemoved, j), I = R("Remove", a.id, o), M = () => n && O(Object(p.h)({
						tooltipId: I
					})), F = r.a.useMemo(() => g ? 1 === g ? s.fbt._("Removing this post will cancel the 1 prediction that has already been made.", null, {
						hk: "hVYeT"
					}) : s.fbt._("Removing this post will cancel the {votedUsersCount} predictions that have already been made.", [s.fbt._param("votedUsersCount", g.toString())], {
						hk: "47oACN"
					}) : s.fbt._("Removing this post will cancel any predictions that have already been made.", null, {
						hk: "26cLeP"
					}), [g]);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(f.d, {
						className: e,
						textClassName: t,
						id: I,
						text: n ? void 0 : w,
						disabled: a.isRemoved && !k,
						onMouseEnter: M,
						onMouseLeave: M,
						onClick: () => {
							v ? _ ? h(!0) : d(!0) : E()
						}
					}, r.a.createElement(S.a, {
						desc: n ? w : void 0
					}), n && r.a.createElement(m.c, {
						className: N.a.tooltip,
						tooltipId: I,
						text: w
					})), u && r.a.createElement(P.a, {
						title: s.fbt._("This post can't be removed", null, {
							hk: "2GbryD"
						}),
						body: s.fbt._("Sorry about that. Once a prediction has been resolved, you can't remove the post.", null, {
							hk: "3wgNhQ"
						}),
						onClose: () => h(!u)
					}), c && r.a.createElement(y.a, {
						withOverlay: !0,
						modalText: F,
						actionText: s.fbt._("Remove", null, {
							hk: "2DXJl4"
						}),
						headerText: s.fbt._("Are you sure?", null, {
							hk: "3CJLRE"
						}),
						onConfirm: E,
						onOverlayClick: () => d(!c),
						toggleModal: () => d(!c)
					}))
				},
				R = (e, t, o = !1) => `ModToolsFlatlist-${e}${t}${o?"inOverlay":""}`,
				A = (e, t) => Object(I.b)({
					breakpointType: I.a.HideIfVWSmaller,
					flatlistItem: e,
					postLayout: t
				}),
				L = Object(i.b)(() => Object(a.c)({
					activeModalId: j.a,
					canEditFlair: (e, {
						post: t
					}) => Object(E.a)(e, {
						postId: t.id
					}),
					moderatorPermissions: (e, t) => Object(k.l)(e, {
						postId: t.post.id
					})
				}), (e, {
					post: t
				}) => ({
					onApprovePost: () => e(Object(l.s)(t.id)),
					onOpenPostModModeDropdown: t => e(Object(p.h)({
						tooltipId: t
					})),
					onSpamPost: () => e(Object(l.S)(t.id, !0)),
					onFlairPost: t => () => e(Object(d.i)(t))
				}));
			t.a = L(e => {
				const {
					canEditFlair: t,
					className: o,
					isOverlay: a,
					layout: d,
					moderatorPermissions: l,
					modModeEnabled: j,
					onApprovePost: k,
					onFlairPost: E,
					onSpamPost: y,
					post: P,
					sendEvent: T,
					showIconsOnly: S
				} = e, M = Object(i.d)(), L = Object(O.a)(l), D = Object(h.b)(P), B = !(!P.approvedBy || !D), W = Object(x.b)(P.id, a), V = L && j && !P.isSponsored, U = t && j, G = Object(b.b)(P), H = ((e, t, o) => e ? s.fbt._("Reapprove", null, {
					hk: "3FVlNF"
				}) : t ? s.fbt._("Approved", null, {
					hk: "15nSON"
				}) : o ? s.fbt._("Approve post", null, {
					hk: "2egsmf"
				}) : s.fbt._("Approve", null, {
					hk: "wZTau"
				}))(B, P.approvedBy, G), q = (e => e ? s.fbt._("Spammed", null, {
					hk: "1WpGXd"
				}) : s.fbt._("Spam", null, {
					hk: "48D7O7"
				}))(P.isSpam), K = R("Approve", P.id, a), J = R("Spam", P.id, a), Q = () => S && M(Object(p.h)({
					tooltipId: K
				})), z = () => S && M(Object(p.h)({
					tooltipId: J
				})), Y = a ? void 0 : d;
				return r.a.createElement("div", {
					className: Object(c.a)(N.a.container, o)
				}, V && r.a.createElement(n.Fragment, null, r.a.createElement(f.b, {
					className: A(w.a.Approve, Y),
					text: S ? void 0 : H,
					textClassName: Object(I.c)(Y),
					disabled: !!P.approvedBy && !D,
					id: K,
					onMouseEnter: Q,
					onMouseLeave: Q,
					onClick: () => {
						k(), T(Object(C.h)(P.id, "approve"))
					}
				}, r.a.createElement(v.a, {
					desc: S ? H : void 0
				}), S && r.a.createElement(m.c, {
					className: N.a.tooltip,
					tooltipId: K,
					text: H
				})), r.a.createElement(F, {
					className: A(w.a.Remove, Y),
					textClassName: Object(I.c)(Y),
					isOverlay: a,
					iconOnly: S,
					post: P
				}), r.a.createElement(f.d, {
					className: A(w.a.Spam, Y),
					text: S ? void 0 : q,
					textClassName: Object(I.c)(Y),
					disabled: P.isSpam,
					id: J,
					onMouseEnter: z,
					onMouseLeave: z,
					onClick: () => {
						y(), T(Object(C.h)(P.id, "spam"))
					}
				}, r.a.createElement(_.a, {
					desc: S ? q : void 0
				}), S && r.a.createElement(m.c, {
					className: N.a.tooltip,
					tooltipId: J,
					text: q
				}))), U && r.a.createElement(f.c, {
					className: A(w.a.Flair, Y),
					onClick: () => {
						E(W)(), T(Object(C.h)(P.id, "post_flair_picker"))
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
			const p = Object(i.a)(({
					title: e,
					body: t,
					actionText: o = s.fbt._("OK", null, {
						hk: "1eo6HO"
					}),
					onClose: n
				}) => r.a.createElement(a.e, null, r.a.createElement(a.i, null, r.a.createElement(d.a, null, r.a.createElement(a.q, null, e), r.a.createElement(c.a, {
					onClick: n
				}, r.a.createElement(a.b, null)))), r.a.createElement(a.l, null, r.a.createElement(a.p, null, t)), r.a.createElement(a.g, null, r.a.createElement(a.u, {
					"data-redditstyle": !0,
					onClick: n
				}, o)))),
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
				x = o("./src/reddit/components/OverflowMenu/index.m.less"),
				f = o.n(x);
			const O = d.a.wrapped(m.a, "_Dropdown", f.a),
				C = Object(p.a)(O),
				v = d.a.button("MenuButton", f.a),
				_ = d.a.wrapped(u.b, "DropdownRow", f.a),
				g = Object(a.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(h.b)(t)(e)
				}),
				j = Object(i.b)(g, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				k = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = j(e => r.a.createElement(v, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": s.fbt._("more options", null, {
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
			}), r.a.createElement(C, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				preventFocusScroll: e.preventFocusScroll,
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
				x = o("./src/reddit/icons/svgs/Close/index.tsx"),
				f = o("./src/reddit/icons/svgs/Plus/index.tsx"),
				O = o("./src/reddit/icons/svgs/Search/index.tsx"),
				C = o("./src/reddit/layout/row/Inline/index.tsx"),
				v = o("./src/reddit/models/PostCreationForm/index.ts"),
				_ = o("./src/reddit/selectors/postCollection.ts"),
				g = o("./src/reddit/controls/MetaSeparator/index.tsx"),
				j = o("./src/reddit/components/HumanDate/index.tsx"),
				k = o("./src/reddit/helpers/name/index.ts"),
				E = o("./src/reddit/models/Subreddit/index.ts"),
				w = o("./src/reddit/models/User/index.ts"),
				I = o("./src/reddit/selectors/subreddit.ts"),
				y = o("./src/reddit/selectors/user.ts"),
				P = o("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),
				T = o.n(P),
				S = o("./src/lib/lessComponent.tsx");
			const {
				fbt: M
			} = o("./node_modules/fbt/lib/FbtPublic.js"), N = S.a.div("Container", T.a), F = S.a.h2("PostTitle", T.a), R = S.a.div("MetaLine", T.a), A = S.a.span("SubredditName", T.a), L = S.a.time("InfoSpan", T.a), D = Object(c.c)({
				subreddit: (e, {
					collection: {
						subredditId: t
					}
				}) => t ? Object(I.R)(e, {
					subredditId: t
				}) : void 0,
				user: y.k
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
					} = this.props, n = t && Object(E.h)(t) && o ? Object(k.d)(Object(w.e)(o)) : t ? t.displayText : "", r = e.postIds.length;
					return i.a.createElement(N, {
						onClick: this.onClick,
						className: T.a.container
					}, i.a.createElement(F, {
						"data-redditstyle": !0
					}, e.title), i.a.createElement(R, {
						"data-redditstyle": !0
					}, n && i.a.createElement(A, {
						"data-redditstyle": !0
					}, n), n && i.a.createElement(g.b, null), i.a.createElement(L, null, M._({
						"*": "{number of posts} posts",
						_1: "1 post"
					}, [M._plural(r, "number of posts")], {
						hk: "1Uy96U"
					})), i.a.createElement(g.b, null), i.a.createElement(L, null, M._("created {time}", [M._param("time", i.a.createElement(j.d, {
						seconds: e.createdAtUTC
					}))], {
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
				q = S.a.div("TopRow", G.a),
				K = S.a.div("TitleRow", G.a),
				J = S.a.div("DetailsContainer", G.a),
				Q = S.a.wrapped(C.a, "ButtonRow", G.a),
				z = S.a.div("CloseWrapper", G.a),
				Y = S.a.wrapped(x.a, "Close", G.a),
				X = S.a.div("Empty", G.a),
				Z = S.a.img("EmptyImage", G.a),
				$ = S.a.p("EmptyText", G.a),
				ee = S.a.div("FilterWrapper", G.a),
				te = S.a.wrapped(h.a, "FilterInput", G.a),
				oe = S.a.wrapped(O.a, "SearchIcon", G.a),
				se = S.a.wrapped(f.a, "PlusIcon", G.a),
				ne = S.a.wrapped(b.p, "CreateCollectionButton", G.a),
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
						let s = v.b;
						t && (s = Object(v.u)(t, !!o)), e(Object(p.y)(s))
					}
				}));
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
					}), i.a.createElement(z, {
						onClick: this.close
					}, i.a.createElement(Y, {
						"data-redditstyle": !0
					}))), i.a.createElement(ee, null, i.a.createElement(oe, null), i.a.createElement(te, {
						placeholder: n.fbt._("Find a collection", null, {
							hk: "3DbFBU"
						}),
						value: this.state.filterStr,
						onChange: this.onFilterStringChange
					}))), i.a.createElement(J, null, o), i.a.createElement(Q, null, i.a.createElement(ne, {
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
				x = o("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = o("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				O = o("./src/reddit/icons/svgs/Close/index.tsx"),
				C = o("./src/reddit/layout/row/Inline/index.tsx"),
				v = o("./src/reddit/selectors/postCollection.ts"),
				_ = o("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less"),
				g = o.n(_),
				j = o("./src/lib/lessComponent.tsx");
			const k = j.a.div("Container", g.a),
				E = j.a.div("Content", g.a),
				w = j.a.div("TitleRow", g.a),
				I = j.a.div("Details", g.a),
				y = j.a.wrapped(p.g, "Footer", g.a),
				P = j.a.wrapped(u.o, "CancelButton", g.a),
				T = j.a.div("CloseWrapper", g.a),
				S = j.a.wrapped(O.a, "CloseIcon", g.a),
				M = j.a.label("Label", g.a),
				N = j.a.wrapped(h.a, "TitleInput", g.a),
				F = j.a.wrapped(f.a, "AddCollectionIcon", g.a),
				R = j.a.wrapped(u.l, "PrimaryActionButton", g.a),
				A = j.a.wrapped(x.a, "LoadingIcon", g.a),
				L = j.a.wrapped(b.b, "ErrorText", g.a),
				D = Object(a.c)({
					collection: v.q,
					error: v.c,
					isPending: v.g
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
						hk: "4yMsMq"
					});
					return r.a.createElement(k, null, r.a.createElement(T, {
						onClick: this.props.onCancel
					}, r.a.createElement(S, null)), r.a.createElement(E, null, n && r.a.createElement(r.a.Fragment, null, r.a.createElement(w, null, r.a.createElement(F, null), s.fbt._("Create a collection", null, {
						hk: "3ndxk5"
					})), r.a.createElement(I, null, s.fbt._("Group posts into one feed. Create a series of events or just a group of random things. Make something awesome!", null, {
						hk: "2eCAQw"
					}))), r.a.createElement(M, null, n ? s.fbt._("Give a title for your collection", null, {
						hk: "Uaqbe"
					}) : s.fbt._("Edit title", null, {
						hk: "1jzweg"
					}), r.a.createElement(N, {
						maxLength: m.e,
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
				return E
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
				x = o("./src/reddit/controls/Button/index.tsx"),
				f = o("./src/reddit/models/Flair/index.ts"),
				O = o("./src/reddit/selectors/moderatorPermissions.ts"),
				C = o("./src/reddit/selectors/postFlair.ts"),
				v = o("./src/reddit/selectors/subreddit.ts"),
				_ = o("./src/reddit/selectors/telemetry.ts"),
				g = o("./src/reddit/components/PostFlairPicker/helpers.ts"),
				j = o("./src/reddit/components/PostFlairPicker/index.m.less"),
				k = o.n(j);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(s || (s = {}));
			const E = (e, t = !1, o = s.UNSET) => `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${o}]`,
				w = Object(c.c)({
					flairData: C.d,
					subreddit: v.R,
					isMod: (e, t) => !!Object(O.m)(e, t)
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
						subreddit: Object(_.ib)(t, this.props.subredditId)
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
					return i.a.createElement(u.a, {
						className: o
					}, i.a.createElement(m.a, {
						onClosePressed: e.closeModal,
						title: n.fbt._("Select {subredditName} flair", [n.fbt._param("subredditName", a)], {
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
						templates: c,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), i.a.createElement("div", {
						className: k.a.buttonsRow
					}, i.a.createElement(x.l, {
						disabled: !l,
						onClick: this.onApply
					}, n.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), i.a.createElement(x.o, {
						className: k.a.clearButton,
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
				icon: "_2V4nGS1AmzWhA62lzdCu4r"
			}
		},
		"./src/reddit/components/PostOverflowMenu/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return fe
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
				x = o("./src/reddit/actions/eventPosts/index.ts"),
				f = o("./src/reddit/actions/gold/modals.ts"),
				O = o("./src/reddit/actions/modal.ts"),
				C = o("./src/reddit/actions/pinnedPost.ts"),
				v = o("./src/reddit/actions/post.ts"),
				_ = o("./src/reddit/actions/postCreation/editing.ts"),
				g = o("./src/reddit/actions/reportFlow/index.ts"),
				j = o("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				k = o("./src/reddit/constants/oneFeed.ts"),
				E = o("./src/reddit/constants/parameters.ts"),
				w = o("./src/reddit/constants/posts.ts"),
				I = o("./src/reddit/hooks/useRecommendationPostContext.ts");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			var P = function(e) {
					function t(t) {
						const o = Object(I.a)();
						return r.createElement(e, y({}, t, {
							recommendationPostContext: o
						}))
					}
					const o = e.displayName || e.name || "Component";
					return t.displayName = `withRecommendationPostContext(${o})`, t
				},
				T = o("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				S = o("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				M = o("./src/reddit/icons/fonts/index.tsx"),
				N = o("./src/reddit/components/OverflowMenu/index.tsx"),
				F = o("./src/reddit/components/ReportFlow/index.tsx"),
				R = o("./src/reddit/contexts/PageLayer/index.tsx"),
				A = o("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				L = o("./src/reddit/controls/Dropdown/Row.tsx"),
				D = o("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				B = o("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				W = o("./src/reddit/components/Flatlist/constants.ts"),
				V = o("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				U = o("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				G = o("./src/reddit/constants/postLayout.ts"),
				H = o("./src/reddit/helpers/correlationIdTracker.ts"),
				q = o("./src/reddit/helpers/isCrosspost.ts"),
				K = o("./src/reddit/helpers/postEvent.ts"),
				J = o("./src/reddit/helpers/trackers/post.ts"),
				Q = o("./src/reddit/models/Post/index.ts"),
				z = o("./src/reddit/models/Subreddit/index.ts"),
				Y = o("./src/reddit/selectors/activeModalId.ts"),
				X = o("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				Z = o("./src/reddit/selectors/posts.ts"),
				$ = o("./src/reddit/selectors/subreddit.ts"),
				ee = o("./src/reddit/selectors/user.ts"),
				te = o("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				oe = o("./src/reddit/components/PostFlairPicker/index.tsx"),
				se = o("./src/reddit/components/ReportFlow/new.tsx"),
				ne = o("./src/reddit/actions/postCollection/index.ts"),
				re = o("./src/reddit/contexts/Post/index.tsx"),
				ie = o("./src/reddit/helpers/trackers/postCollection.ts"),
				ae = o("./src/reddit/models/PostCreationForm/index.ts"),
				ce = o("./src/reddit/selectors/postCollection.ts"),
				de = o("./node_modules/react-router/esm/react-router.js"),
				le = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				pe = o("./src/reddit/components/ModalStyledComponents/MessageBox.tsx");
			const me = Object(de.i)(({
				post: e,
				toggleConfirmDelete: t,
				handleDeletePost: o,
				location: n
			}) => {
				const {
					isPrediction: r,
					resolvedOptionId: a,
					totalVoteCount: c
				} = e.pollData || {}, d = r ? s.fbt._("Are you sure?", null, {
					hk: "2mIMwE"
				}) : s.fbt._("Delete post?", null, {
					hk: "3g7QoX"
				}), l = i.a.useMemo(() => {
					const e = c || 0;
					return r ? 0 === e ? s.fbt._("Deleting this post will cancel any predictions that have been made.", null, {
						hk: "1OCTd3"
					}) : 1 === e ? s.fbt._("Deleting this post will cancel the 1 prediction that have already been made.", null, {
						hk: "1MnrUP"
					}) : s.fbt._("Deleting this post will cancel the {votedUsersCount} predictions that have already been made.", [s.fbt._param("votedUsersCount", e.toString())], {
						hk: "1jBXxs"
					}) : s.fbt._("Are you sure you want to delete your post? You can't undo this.", null, {
						hk: "2eDKWP"
					})
				}, [r, c]), p = r ? s.fbt._("Delete", null, {
					hk: "3NNdm0"
				}) : s.fbt._("Delete post", null, {
					hk: "28hc1p"
				});
				return r && a ? i.a.createElement(pe.a, {
					title: s.fbt._("This post can't be deleted", null, {
						hk: "1sZ013"
					}),
					body: s.fbt._("Sorry about that. Once a prediction has been resolved, you can't delete the post.", null, {
						hk: "32l6dr"
					}),
					onClose: t
				}) : i.a.createElement(le.a, {
					withOverlay: !0,
					toggleModal: t,
					onConfirm: () => o(n),
					onOverlayClick: t,
					actionText: p,
					headerText: d,
					modalText: l
				})
			});
			var ue = o("./src/reddit/components/PostOverflowMenu/index.m.less"),
				be = o.n(ue);
			const he = h.a.wrapped(L.b, "DropdownRow", be.a),
				xe = p()(),
				fe = ({
					gild: e = !0,
					save: t = !0,
					share: o = !0,
					report: s = !0,
					editPost: n = !0,
					hide: r = !0
				}) => ({
					[W.a.Gild]: e,
					[W.a.Save]: t,
					[W.a.Share]: o,
					[W.a.Report]: s,
					[W.a.EditPost]: n,
					[W.a.Hide]: r
				}),
				Oe = Object(a.b)(() => Object(c.c)({
					claimedFreeAward: X.b,
					isFutureEvent: ce.i,
					isPinned: Z.q,
					subredditAboutInfo: Z.I,
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
					}) => Object(R.D)(e, {
						pageLayer: n
					}) && t && o && Object(ee.ob)(e, {
						userName: s.author
					}),
					hasSubredditRules: $.h,
					isPostPartOfACollection: ce.k,
					shouldRenderCollectionEditButtons: (e, {
						post: t,
						subredditOrProfile: o
					}) => {
						if (t.isSponsored) return !1;
						if (!o) return !1;
						const s = o.type === z.f.User;
						return Object(ce.r)(e, o.name, s)
					},
					reportingRevampEnabled: te.a,
					videoShareModalOpen: (e, {
						postId: t
					}) => Object(Y.a)(e) === Object(U.a)(t)
				}), (e, {
					postId: t,
					isOverlay: o,
					isCommentsPage: s
				}) => ({
					onCopyLink: t => e(Object(v.D)(t)),
					onDelete: s => e(Object(v.M)(t, s, o)),
					onDistinguishPost: o => e(Object(v.v)(t, o)),
					onGildClick: (o, s) => e(Object(f.d)({
						awardId: s,
						correlationId: o,
						thingId: t
					})),
					onToggleSave: () => e(Object(v.T)(t)),
					onToggleNSFW: () => e(Object(v.G)(t)),
					onToggleOC: () => e(Object(v.J)(t)),
					onTogglePinned: () => e(Object(C.i)(t)),
					onToggleSpoiler: () => e(Object(v.X)(t)),
					onHide: s => e(Object(v.Y)(t, !s, o, !0)),
					onReportClick: () => e(Object(g.c)(t, o)),
					onStartEventNow: () => {
						e((e, t) => Object(d.a)(Object(S.l)()(t()))), e(Object(x.startEventNowRequested)(t))
					},
					onEdit: () => {
						const n = !o && !s;
						e(Object(_.a)(t, n))
					},
					onFlairPost: () => e(Object(O.i)(Object(oe.b)(t, o))),
					onToggleSendReplies: () => e(Object(v.U)(t)),
					showCollectionsList: (t, s) => {
						e(Object(ne.e)(t)).then(() => {
							const t = Object(ae.t)(s, o);
							e(O.i(t))
						})
					},
					onToggleVideoShareModal: () => e(Object(O.i)(Object(U.a)(t)))
				}));
			class Ce extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						isConfirmDeleteOpen: !1
					}, this.handlePostEvent = (e, t) => {
						const {
							isOverlay: o,
							post: s,
							sendEvent: n
						} = this.props;
						n(Object(J.h)(s.id, e, o ? "post_detail" : "post", void 0, void 0, void 0, null == t ? void 0 : t.referralId))
					}, this.handleClickMenuButton = () => {
						this.handlePostEvent("post_overflow_menu")
					}, this.handleDeletePost = e => {
						e && (this.props.onDelete(e), this.handlePostEvent("delete"))
					}, this.handleEdit = () => {
						this.handlePostEvent("edit"), this.props.onEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(H.e)(H.a.GildingFlow, !0);
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
						o(Object(J.j)(e)), t(k.a.SeeFewerPostsView)
					}, this.onShowMoreOfClick = () => {
						const {
							postId: e,
							recommendationPostContext: {
								setRecommendationFooterView: t
							},
							sendEvent: o
						} = this.props;
						o(Object(J.k)(e)), t(k.a.ThankYouView)
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
						this.handlePostEvent(this.props.isPinned ? "unpin" : "pin"), this.props.isPinned ? this.props.sendEvent(Object(J.n)(this.props.post.id)) : this.props.sendEvent(Object(J.e)(this.props.post.id)), this.props.onTogglePinned()
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
						if (!t.ignoreBreakpoints && t.useFlatlistBreakpoints[e]) return Object(V.b)({
							breakpointType: V.a.HideIfVWLarger,
							flatlistItem: e,
							isLoggedIn: !!t.currentUser,
							isUserOp: t.userIsOp,
							modModeWithPost: t.modModeWithPost
						})
					}, this.getBreakpointCx = (e, t) => Object(B.b)({
						breakpointType: V.a.HideIfVWLarger,
						flatlistItem: e,
						postLayout: t
					}), this.handleAddToCollection = () => {
						const {
							isPostPartOfACollection: e,
							showCollectionsList: t,
							post: o,
							sendEvent: s
						} = this.props;
						e || (s(Object(ie.b)(o.id)), t(o.belongsTo.id, o.id))
					}, this.onCloseShareModal = e => {
						e && (this.handlePostEvent("copy_link", {
							referralId: xe
						}), this.props.onCopyLink(e)), this.props.onToggleVideoShareModal()
					}, this.renderReportFlow = () => this.props.reportingRevampEnabled ? i.a.createElement(se.a, {
						withOverlay: !0,
						overlayCustomStyles: F.b,
						postId: this.props.postId,
						timestamp: this.context.currentTime
					}) : i.a.createElement(F.a, {
						withOverlay: !0,
						overlayCustomStyles: F.b,
						postId: this.props.postId,
						timestamp: this.context.currentTime
					})
				}
				getOverflowMenuBreakpointClass() {
					const {
						props: e
					} = this, t = e.layout === G.g.Classic;
					if (!(e.ignoreBreakpoints || e.ignoreOverflowMenuBreakpoints || e.modModeWithPost || e.userIsOp || !e.isCommentsPage && !t || e.isRecommendationPost)) return Object(V.b)({
						breakpointType: V.a.HideIfVWLarger,
						flatlistItem: W.a.PostOverflowMenu,
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
						isOverlay: r,
						isPinned: a,
						isRecommendationPost: c,
						layout: d,
						onStartEventNow: l,
						post: p,
						shouldRenderCollectionEditButtons: u,
						showEditFlair: b,
						showPinAction: h,
						toggleAddEventStartTimeModal: x,
						toggleEditStartTimeModal: f,
						userIsOp: O
					} = e, C = e.currentUser && e.currentUser.isEmployee, v = Object(q.a)(e.post), _ = e.post.belongsTo.type === w.a.PROFILE || Object(z.g)(e.subredditAboutInfo), g = e.post.belongsTo.type === w.a.PROFILE || Object(z.i)(e.subredditAboutInfo), j = t && p.isGildable, k = Object(K.a)(e.post), E = r ? void 0 : d;
					return i.a.createElement("div", null, j && i.a.createElement(he, {
						className: this.getBreakpointClass(W.a.Gild),
						displayText: s.fbt._("Give Award", null, {
							hk: "3mYeGJ"
						}),
						onClick: this.handleGild
					}, i.a.createElement(M.a, {
						name: "award",
						className: be.a.Icon
					})), c && i.a.createElement(i.a.Fragment, null, i.a.createElement(he, {
						className: this.getBreakpointClass(W.a.ShowMoreLikeThis),
						displayText: s.fbt._("Show more posts like this", null, {
							hk: "2t0WMg"
						}),
						onClick: this.onShowMoreOfClick
					}, i.a.createElement(M.a, {
						name: "checkmark",
						className: be.a.Icon
					})), i.a.createElement(he, {
						className: this.getBreakpointClass(W.a.ShowFewerLikeThis),
						displayText: s.fbt._("Show fewer posts like this", null, {
							hk: "k9sBL"
						}),
						onClick: this.onShowFewerOfClick
					}, i.a.createElement(M.a, {
						name: "hide",
						className: be.a.Icon
					}))), i.a.createElement(he, {
						className: this.getBreakpointClass(W.a.Share),
						displayText: s.fbt._("Copy link", null, {
							hk: "ETZxA"
						}),
						onClick: () => {
							const {
								permalink: t,
								post: o
							} = e;
							o && Object(Q.p)(o) ? (e.onToggleVideoShareModal(), this.handlePostEvent("share")) : (this.handlePostEvent("share_copy"), e.onCopyLink(t))
						}
					}, i.a.createElement(M.a, {
						name: "link_post",
						className: be.a.Icon
					})), i.a.createElement(he, {
						className: this.getBreakpointClass(W.a.Share),
						displayText: s.fbt._("Embed", null, {
							hk: "3u0v6r"
						}),
						onClick: () => {
							this.handlePostEvent("share_embed"), window.open(`${m.a.rebedMediaUrl}/embed?url=${e.post.permalink}`, "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, i.a.createElement(M.a, {
						name: "embed",
						className: be.a.Icon
					})), e.showEditPost && i.a.createElement(he, {
						className: this.getBreakpointClass(W.a.EditPost),
						displayText: s.fbt._("Edit post", null, {
							hk: "3gVzz0"
						}),
						onClick: this.handleEdit,
						isSelected: e.post.hidden
					}, i.a.createElement(M.a, {
						name: "edit",
						className: be.a.Icon
					})), b && i.a.createElement(he, {
						className: this.getBreakpointCx(D.a.Flair, E),
						displayText: s.fbt._("Edit Post Flair", null, {
							hk: "1pGISD"
						}),
						onClick: e.onFlairPost,
						isSelected: e.post.hidden
					}, i.a.createElement(M.a, {
						name: "tag",
						className: be.a.Icon
					})), i.a.createElement(he, {
						className: this.getBreakpointClass(W.a.Save),
						displayText: e.post.saved ? s.fbt._("unsave", null, {
							hk: "HDDPm"
						}) : s.fbt._("save", null, {
							hk: "3bg2gs"
						}),
						onClick: this.toggleSave,
						isSelected: e.post.saved
					}, i.a.createElement(M.a, {
						name: e.post.saved ? "saved" : "save",
						className: be.a.Icon
					})), h && i.a.createElement(he, {
						displayText: a ? s.fbt._("Unpin Post from Profile", null, {
							hk: "6DYfk"
						}) : s.fbt._("Pin Post to Profile", null, {
							hk: "2RWbNF"
						}),
						onClick: this.togglePinned
					}, i.a.createElement(M.a, {
						name: "pin",
						className: be.a.Icon,
						isFilled: this.props.isPinned
					})), !e.post.isSponsored && i.a.createElement(he, {
						className: this.getBreakpointClass(W.a.Hide),
						displayText: e.post.hidden ? s.fbt._("unhide", null, {
							hk: "1P4IxC"
						}) : s.fbt._("hide", null, {
							hk: "48yKzW"
						}),
						onClick: this.toggleHide,
						isSelected: e.post.hidden
					}, i.a.createElement(M.a, {
						name: "hide",
						className: be.a.HideIcon
					})), !e.post.isSponsored && !O && i.a.createElement(he, {
						className: this.getBreakpointClass(W.a.Report),
						displayText: s.fbt._("report", null, {
							hk: "128RPn"
						}),
						onClick: this.handleReport
					}, i.a.createElement(M.a, {
						name: "report",
						className: be.a.Icon
					})), u && o && l && i.a.createElement(he, {
						onClick: l,
						displayText: s.fbt._("Start event now", null, {
							hk: "3VomTN"
						})
					}, i.a.createElement(M.a, {
						name: "live",
						className: be.a.Icon
					})), u && o && f && i.a.createElement(he, {
						onClick: f,
						displayText: s.fbt._("Edit start time", null, {
							hk: "2typ17"
						})
					}, i.a.createElement(M.a, {
						name: "scheduled",
						className: be.a.Icon
					})), u && !k && x && i.a.createElement(he, {
						displayText: s.fbt._("Add event start time", null, {
							hk: "1XXqzu"
						}),
						onClick: x
					}, i.a.createElement(M.a, {
						name: "scheduled",
						className: be.a.Icon
					})), u && i.a.createElement(he, {
						className: this.props.isPostPartOfACollection ? be.a.disabledRow : void 0,
						displayText: s.fbt._("Add to collection", null, {
							hk: "3UNHgN"
						}),
						onClick: this.handleAddToCollection,
						noHover: this.props.isPostPartOfACollection
					}, i.a.createElement(M.a, {
						name: "collection",
						className: be.a.Icon
					})), O && i.a.createElement(he, {
						displayText: s.fbt._("delete", null, {
							hk: "4kSfzC"
						}),
						onClick: this.toggleDeleteConfirmation
					}, i.a.createElement(M.a, {
						name: "delete",
						className: be.a.Icon
					})), C && e.userIsOp && i.a.createElement(he, {
						displayText: e.post.distinguishType === n.G.ADMIN ? s.fbt._("undistinguish", null, {
							hk: "2chGON"
						}) : s.fbt._("Distinguish as admin", null, {
							hk: "2xltiM"
						}),
						onClick: () => e.post.distinguishType === n.G.ADMIN ? e.onDistinguishPost(n.G.NONE) : e.onDistinguishPost(n.G.ADMIN)
					}, i.a.createElement(M.a, {
						name: "admin",
						className: be.a.Icon
					})), O && _ && !v && i.a.createElement(A.a, {
						text: s.fbt._("Mark as OC", null, {
							hk: "2vGyoC"
						}),
						onClick: this.toggleOC,
						isSelected: this.props.post.isOriginalContent
					}), O && g && i.a.createElement(A.a, {
						text: s.fbt._("Mark as Spoiler", null, {
							hk: "3PJk7A"
						}),
						onClick: this.toggleSpoiler,
						isSelected: this.props.post.isSpoiler
					}), O && i.a.createElement(A.a, {
						text: s.fbt._("Mark as NSFW", null, {
							hk: "4qK6JN"
						}),
						onClick: this.toggleNSFW,
						isSelected: this.props.post.isNSFW
					}), e.userIsOp && i.a.createElement(A.a, {
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
					return i.a.createElement("div", null, i.a.createElement(N.b, {
						className: Object(b.a)(be.a.overflowMenu, this.getOverflowMenuBreakpointClass(), e.className),
						dropdownId: e.dropdownId,
						isFixed: e.isFixed,
						layout: e.layout,
						onClick: this.handleClickMenuButton
					}, this.renderDropdownIcons()), e.reportFlowIsOpen && e.subredditOrProfile && e.hasSubredditRules && this.renderReportFlow(), this.state.isConfirmDeleteOpen && i.a.createElement(me, {
						post: this.props.post,
						toggleConfirmDelete: this.toggleDeleteConfirmation,
						handleDeletePost: this.handleDeletePost
					}), e.videoShareModalOpen && i.a.createElement(U.b, {
						className: be.a.modalBody,
						onClose: this.onCloseShareModal,
						withOverlay: !1,
						url: Object(u.a)(Object(T.a)(e.postId), {
							[E.q]: xe,
							utm_source: "share",
							utm_medium: "web2x",
							utm_content: "rpan_stream"
						})
					}))
				}
			}
			Ce.contextType = j.a;
			t.a = P(Object(re.e)(Oe(Ce)))
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
				backgroundColor: n.a.overlayReportFlow
			};
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "ReportFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => Promise.all([o.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx")),
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
					importAsync: () => Promise.all([o.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx")),
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
				return m
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
				m = e => n.a.createElement("button", {
					className: Object(r.a)(c.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
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
				x = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				f = o("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				O = o("./src/reddit/constants/parameters.ts"),
				C = o("./src/reddit/controls/Dropdown/index.tsx"),
				v = o("./src/reddit/controls/Dropdown/Row.tsx"),
				_ = o("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				g = o("./src/reddit/helpers/trackers/shareToChat.ts"),
				j = o("./src/reddit/hooks/useTracking.ts"),
				k = o("./src/reddit/icons/fonts/index.tsx"),
				E = o("./src/reddit/models/Post/index.ts"),
				w = o("./src/reddit/models/Subreddit/index.ts"),
				I = o("./src/reddit/routes/postCreation/constants.ts"),
				y = o("./src/reddit/selectors/activeModalId.ts"),
				P = o("./src/reddit/selectors/experiments/shareToChatButton.ts"),
				T = o("./src/reddit/selectors/tooltip.ts"),
				S = o("./src/reddit/components/ShareMenu/index.m.less"),
				M = o.n(S);
			const N = Object(x.a)(C.a),
				F = c()(),
				R = r.a.memo(e => {
					const t = Object(i.d)(),
						o = Object(j.a)(),
						a = Object(i.e)(P.a),
						c = Object(i.e)(t => Object(T.b)(e.dropdownId)(t)),
						x = Object(i.e)(t => Object(y.b)(Object(f.a)(e.dropdownId))(t)),
						C = Object(n.useCallback)(() => {
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
						D = Object(n.useCallback)(e => {
							t(Object(p.f)(e)), o(Object(g.a)())
						}, [t, o]);
					return r.a.createElement("div", {
						className: e.className,
						onClick: C,
						id: e.dropdownId
					}, e.children, r.a.createElement(N, {
						className: M.a.dropdown,
						isOpen: c,
						tooltipId: e.dropdownId
					}, r.a.createElement(v.b, {
						className: M.a.dropdownRow,
						displayText: s.fbt._("Copy link", null, {
							hk: "1tCqox"
						}),
						onClick: () => {
							const {
								permalink: t,
								post: o
							} = e;
							if (o && Object(E.p)(o)) e.sendEventWithName("share_copy", {
								referralId: F
							}), R();
							else {
								const o = Object(l.a)(t, {
									utm_source: "share",
									utm_medium: "web2x",
									context: 3
								});
								e.sendEventWithName("share_copy"), S(o)
							}
						}
					}, r.a.createElement(k.a, {
						name: "link_post",
						className: M.a.linkIcon
					})), L && r.a.createElement(v.b, {
						className: M.a.dropdownRow,
						displayText: s.fbt._("crosspost", null, {
							hk: "23zSN6"
						}),
						onClick: () => {
							e.sendEventWithName("share_crosspost"), e.post && window.open(`${I.b}?source_id=${e.post.id}`, "_blank")
						}
					}, r.a.createElement(k.a, {
						name: "crosspost",
						className: M.a.crosspostIcon
					})), A && r.a.createElement(v.b, {
						className: M.a.dropdownRow,
						displayText: s.fbt._("Embed", null, {
							hk: "2CcsuC"
						}),
						onClick: () => {
							e.sendEventWithName("share_embed"), window.open(`${d.a.rebedMediaUrl}/embed?url=${e.permalink}`, "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, r.a.createElement(k.a, {
						name: "embed",
						className: M.a.embedIcon
					})), a && r.a.createElement(v.b, {
						className: M.a.dropdownRow,
						displayText: s.fbt._("share to chat", null, {
							hk: "3EuIWT"
						}),
						onClick: () => {
							const {
								permalink: t
							} = e, o = Object(l.a)(t, {
								utm_source: "share",
								utm_medium: "web2x",
								context: 3
							});
							D(o)
						}
					}, r.a.createElement(k.a, {
						name: "chat",
						className: M.a.chatIcon
					}))), x && e.post && r.a.createElement(f.b, {
						className: M.a.modalBody,
						onClose: t => {
							t && (e.sendEventWithName("copy_link", {
								referralId: F
							}), S(t)), R()
						},
						url: Object(l.a)(Object(_.a)(e.post.id), {
							[O.q]: F,
							utm_source: "share",
							utm_medium: "web2x",
							utm_content: "rpan_stream"
						})
					}))
				});
			t.a = R
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
				m = ({
					className: e,
					...t
				}) => n.a.createElement(p, l({
					className: Object(r.a)(d.a.postCheckboxMenuItem, e)
				}, t))
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
				return _
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
			var x = Object(p.a)(e => {
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
				f = o("./src/reddit/controls/ErrorText/index.m.less"),
				O = o.n(f);
			class C extends d.a.Component {
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
						className: Object(l.a)(O.a.wrapper, t)
					}, d.a.createElement("span", {
						className: O.a.description,
						ref: this.spanRef
					}, e), i && d.a.createElement("span", {
						className: O.a.moreText,
						onClick: this.toggleModal
					}, r), a && d.a.createElement(x, {
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
					}, i.map((e, t) => d.a.createElement(C, {
						className: o,
						errorModalTitle: s,
						key: t
					}, e))) : null
				},
				_ = e => d.a.createElement(v, {
					fallbackMessage: s.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = C
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
				},
				"data-testid": "LoadingIcon"
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
					correlationId: Object(s.e)(s.a.GoldPayment, !1),
					profile: i.R(e),
					subreddit: i.hb(e)
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
				return x
			})), o.d(t, "b", (function() {
				return O
			})), o.d(t, "p", (function() {
				return C
			})), o.d(t, "c", (function() {
				return v
			})), o.d(t, "j", (function() {
				return _
			})), o.d(t, "q", (function() {
				return g
			})), o.d(t, "k", (function() {
				return j
			})), o.d(t, "l", (function() {
				return k
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
				l = ({
					postId: e,
					isFollowed: t
				}) => o => ({
					source: s.collection,
					noun: t ? n.unfollow : n.follow,
					...m(o, e)
				}),
				p = ({
					postId: e,
					isFollowed: t
				}) => o => ({
					source: i.a.postEvent,
					noun: t ? n.unfollow : n.follow,
					...m(o, e)
				}),
				m = (e, t) => {
					const o = {
						...c.o(e),
						action: r.c.CLICK,
						subreddit: c.hb(e)
					};
					return void 0 === t ? o : {
						...o,
						post: c.I(e, t),
						postCollection: c.K(e, {
							postId: t
						}),
						postEvent: c.L(e, {
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
					subreddit: c.hb(e),
					source: s.postComposer
				}),
				O = (e, t) => o => ({
					...m(o, e),
					source: t || s.postOverflowMenu,
					noun: n.collectionAddPost
				}),
				C = e => t => ({
					...m(t, e),
					source: s.collectionComposer,
					noun: n.collectionRemovePost
				}),
				v = () => e => ({
					...m(e),
					source: s.collectionComposer,
					noun: n.collectionCancel
				}),
				_ = () => e => {
					const t = Object(a.o)(e) || void 0;
					return {
						...m(e, t),
						source: s.collectionComposer,
						noun: n.collectionCreate
					}
				},
				g = () => e => ({
					...m(e),
					source: s.collectionComposer,
					noun: n.collectionSelect
				}),
				j = e => t => ({
					...c.o(t),
					subreddit: c.hb(t),
					source: s.collectionComposer,
					action: r.c.CLICK,
					noun: n.collectionDelete,
					postCollection: c.J(t, {
						collectionId: e
					})
				}),
				k = e => t => ({
					...m(t),
					source: s.collectionComposer,
					noun: n.collectionEdit,
					postCollection: c.J(t, {
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
				return x
			})), o.d(t, "b", (function() {
				return f
			})), o.d(t, "c", (function() {
				return O
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
				m = o("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(s || (s = {}));
			const u = e => p.d(e, {
					pageType: "event_submit"
				}),
				b = e => {
					Object(m.a)({
						...p.o(e),
						source: s.postComposer,
						action: a.c.CLICK,
						noun: "event_create",
						subreddit: p.hb(e)
					})
				},
				h = e => {
					Object(m.a)({
						...p.o(e),
						source: s.postComposer,
						action: a.c.CLICK,
						noun: "event_edit",
						subreddit: p.hb(e),
						postEvent: v(e),
						postComposer: _(e)
					})
				},
				x = () => e => ({
					source: s.eventComposer,
					action: a.c.VIEW,
					noun: a.b.SCREEN,
					actionInfo: u(e),
					postEvent: v(e)
				}),
				f = e => t => ({
					...k(t, Object(d.o)(t)),
					source: s.postComposer,
					noun: "apply",
					postComposer: g(e)
				}),
				O = () => e => ({
					...k(e, Object(d.o)(e)),
					noun: "cancel",
					actionInfo: u(e)
				}),
				C = e => t => ({
					...k(t, Object(d.o)(t)),
					noun: "delete",
					actionInfo: u(t),
					postComposer: _(t),
					postEvent: j(e)
				}),
				v = e => {
					const t = Object(l.p)(e);
					return t && j(t)
				},
				_ = e => g(Object(l.p)(e)),
				g = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === c.j.AtEventTime ? Object(i.f)(e.startDate).getTime() / n.Rb : void 0
					}
				},
				j = e => {
					const t = Object(i.f)(e.startDate).getTime() / n.Rb,
						o = Object(i.f)(e.endDate).getTime() / n.Rb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: o,
						eventState: Object(r.e)(t, o)
					}
				},
				k = (e, t) => {
					const o = {
						source: s.eventComposer,
						action: a.c.CLICK,
						subreddit: p.hb(e)
					};
					return t ? {
						...o,
						post: p.I(e, t),
						postEvent: p.L(e, {
							postId: t
						}),
						postCollection: p.K(e, {
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
				...Object(n.o)(e),
				source: "post",
				action: s.c.CLICK,
				noun: "share_chat",
				subreddit: Object(n.hb)(e)
			})
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
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, o) {
			"use strict";
			var s;

			function n(e, t) {
				var o;
				return null === (o = e.modQueueTriggers) || void 0 === o ? void 0 : o.find(e => e.type === t)
			}
			o.d(t, "a", (function() {
					return s
				})), o.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT"
				}(s || (s = {}))
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
		"./src/reddit/selectors/experiments/antievil/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			})), o.d(t, "b", (function() {
				return i
			}));
			var s = o("./src/reddit/constants/experiments.ts"),
				n = o("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: s.g
					}) === s.a.Enabled
				},
				i = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: s.m
					}) === s.fd
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
				experimentEligibilitySelector: i.K,
				experimentName: s.k
			}) === s.f.Enabled
		},
		"./src/reddit/selectors/experiments/shareToChatButton.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
			}));
			var s = o("./node_modules/reselect/es/index.js"),
				n = o("./src/reddit/constants/experiments.ts"),
				r = o("./src/reddit/helpers/chooseVariant/index.ts"),
				i = o("./src/reddit/selectors/user.ts");
			const a = Object(s.a)(e => Object(r.c)(e, {
				experimentEligibilitySelector: i.K,
				experimentName: n.Wb
			}), e => e === n.fd)
		},
		"./src/redditGQL/operations/EventPostsBySubredditName.json": function(e) {
			e.exports = JSON.parse('{"id":"01538085cb58"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956.14c56e6ffc568d0f2f61.js.map