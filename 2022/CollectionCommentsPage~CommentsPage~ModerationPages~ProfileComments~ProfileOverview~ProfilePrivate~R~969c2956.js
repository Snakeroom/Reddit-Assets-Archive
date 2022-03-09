// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956.08e2e9faac55da34ec0b.js
// Retrieved at 3/9/2022, 11:10:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"], {
		"./src/reddit/actions/eventPosts/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "fetchEventPostsPending", (function() {
				return g
			})), s.d(t, "fetchEventPostsSuccess", (function() {
				return v
			})), s.d(t, "fetchEventPostsFailure", (function() {
				return _
			})), s.d(t, "fetchMoreEventPostsSuccess", (function() {
				return k
			})), s.d(t, "eventPostsRequested", (function() {
				return E
			})), s.d(t, "startEventNowSuccess", (function() {
				return j
			})), s.d(t, "startEventNowRequested", (function() {
				return P
			})), s.d(t, "editEventTimeSuccess", (function() {
				return I
			})), s.d(t, "editEventTimeRequested", (function() {
				return w
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/eventPosts/constants.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/redditGQL/operations/EventPostsBySubredditName.json");
			var d = s("./src/lib/makeApiRequest/index.ts"),
				p = s("./src/lib/omitHeaders/index.ts"),
				m = s("./src/reddit/constants/headers.ts");
			var u = (e, t, s, o, i) => Object(d.a)(Object(p.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/api/event_post_time.json`,
				method: n.jb.POST,
				data: {
					id: t,
					event_start: s,
					event_end: o,
					event_tz: i
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
				f = s("./src/reddit/models/Toast/index.ts"),
				C = s("./src/reddit/selectors/eventPosts.ts"),
				x = s("./src/reddit/selectors/posts.ts");
			const O = () => o.fbt._("Something went wrong. Just don't panic.", null, {
					hk: "4onxm1"
				}),
				g = Object(i.a)(r.e),
				v = Object(i.a)(r.c),
				_ = Object(i.a)(r.b),
				k = Object(i.a)(r.d),
				E = e => async (t, s, {
					gqlContext: o
				}) => {
					let n = s();
					const i = Object(C.d)(n, {
							subredditName: e
						}),
						r = Object(C.b)(n, {
							subredditName: e
						}),
						d = Object(C.c)(n, {
							subredditName: e
						}),
						p = Object(C.a)(n, {
							subredditName: e
						}),
						m = r && d;
					if (i) return;
					const u = {
						name: e,
						pageSize: 25,
						nonInclusiveCursor: null
					};
					if (m) u.nonInclusiveCursor = p;
					else if (r && !d) return;
					const b = Object(C.e)(n, {
						subredditName: e
					});
					t(g({
						key: b
					}));
					const x = await ((e, t) => Object(l.a)(e, {
						...c,
						variables: t
					}))(o(), u);
					if (x.ok) {
						const {
							subredditInfoByName: e
						} = x.body.data, {
							eventPosts: o
						} = e, i = Object(h.a)(o);
						let r = [],
							a = {};
						const l = o.pageInfo || {
							hasNextPage: !1,
							endCursor: null,
							hasPreviousPage: !1,
							startCursor: null
						};
						i.length > 0 && (r = i.map(e => e.id), a = i.reduce((e, t) => (e[t.id] = t, e), {})), n = s(), t((m ? k : v)({
							key: b,
							postIds: r,
							meta: n.meta,
							posts: a,
							pageInfo: l
						}))
					} else t(_({
						error: x.error,
						key: b
					})), t(Object(a.f)({
						kind: f.b.Error,
						text: O()
					}))
				}, j = Object(i.a)(r.f), P = e => async (t, s, {
					apiContext: n
				}) => {
					if ((await b(n(), e)).ok) {
						const n = () => o.fbt._("Following event has started successfully: {title}", [o.fbt._param("title", l)], {
							hk: "e9iz9"
						});
						t(j({
							postId: e
						}));
						const i = s(),
							r = Object(x.G)(i, {
								postId: e
							}),
							l = r && r.title || "";
						t(Object(a.f)({
							kind: f.b.SuccessMod,
							text: n()
						}))
					} else t(Object(a.f)({
						kind: f.b.Error,
						text: O()
					}))
				}, I = Object(i.a)(r.a), w = (e, t) => async (s, i, {
					apiContext: r
				}) => {
					const l = await u(r(), e, t.startDate, t.endDate, t.timezoneName);
					if (l.ok) {
						const t = l.body,
							r = 14400,
							c = Math.round(t.event_start / n.Sb);
						let d = t.event_end;
						const p = {
							eventStart: c,
							eventEnd: d = d && Math.round(d / n.Sb) || c + r,
							eventIsLive: t.event_is_live
						};
						s(I({
							postId: e,
							eventInfo: p
						}));
						const m = i(),
							u = Object(x.G)(m, {
								postId: e
							}),
							b = u && u.title || "",
							h = () => o.fbt._("Following event time is updated successfully: {title}", [o.fbt._param("title", b)], {
								hk: "1m1w1c"
							});
						s(Object(a.f)({
							kind: f.b.SuccessMod,
							text: h()
						}))
					} else s(Object(a.f)({
						kind: f.b.Error,
						text: O()
					}))
				}
		},
		"./src/reddit/actions/postCollection/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return L
			})), s.d(t, "e", (function() {
				return R
			})), s.d(t, "g", (function() {
				return D
			})), s.d(t, "a", (function() {
				return G
			})), s.d(t, "c", (function() {
				return H
			})), s.d(t, "h", (function() {
				return Q
			})), s.d(t, "f", (function() {
				return Z
			})), s.d(t, "d", (function() {
				return ie
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react-router-redux/es/index.js"),
				i = s("./src/lib/filterQueryParams/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postCollection/constants.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
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
			var f = (e, t, s) => Object(m.a)(Object(u.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/create_collection.json`,
				method: p.jb.POST,
				data: {
					title: t,
					sr_fullname: s
				}
			});
			var C = (e, t) => Object(m.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/delete_collection.json`,
					method: p.jb.POST,
					data: {
						collection_id: t
					}
				}),
				x = s("./src/config.ts");
			var O = (e, t) => Object(m.a)(Object(u.a)(e, [b.a]), {
				endpoint: `${x.a.gatewayUrl}/desktopapi/v1/subreddit_collections/${t}`,
				method: p.jb.GET
			});
			var g = (e, t, s) => Object(m.a)(Object(u.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/remove_post_in_collection.json`,
				method: p.jb.POST,
				data: {
					collection_id: t,
					link_fullname: s
				}
			});
			var v = (e, t, s) => Object(m.a)(Object(u.a)(e, [b.a]), {
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
			var k = (e, t, s) => Object(m.a)(Object(u.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_description.json`,
				method: p.jb.POST,
				data: {
					collection_id: t,
					description: s
				}
			});
			var E = (e, t, s) => Object(m.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/update_collection_display_layout.json`,
					method: p.jb.POST,
					data: {
						collection_id: t,
						display_layout: s
					}
				}),
				j = s("./src/reddit/helpers/overlay/index.ts"),
				P = s("./src/reddit/helpers/path/index.ts"),
				I = s("./src/reddit/models/Toast/index.ts"),
				w = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				y = s("./src/reddit/selectors/postCollection.ts"),
				T = s("./src/reddit/selectors/posts.ts"),
				S = s("./src/reddit/selectors/subreddit.ts");
			const F = Object(r.a)(l.c),
				M = Object(r.a)(l.b),
				N = Object(r.a)(l.d),
				L = (e, t) => async (s, o, {
					apiContext: n
				}) => {
					s(F());
					const i = await f(n(), e, t);
					let r;
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
						s(N({
							collection: t,
							meta: e
						})), r = t
					} else {
						const e = i.error;
						s(M(e))
					}
					return r
				}, A = Object(r.a)(l.f), R = e => async (t, s, {
					apiContext: n
				}) => {
					const i = s().postCollection.subredditToIds || {};
					if (Object.keys(i).length > 0) return;
					const r = await O(n(), e);
					r.ok ? t(A(r.body)) : t(Object(c.f)({
						kind: I.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, B = Object(r.a)(l.g), D = (e, t, s) => async (n, i, {
					apiContext: r
				}) => {
					if ((await g(r(), e, t)).ok) {
						const r = i(),
							a = Object(T.G)(r, {
								postId: t
							}),
							l = a && a.title || "",
							d = Object(y.q)(r, {
								collectionId: e
							}),
							p = (d && d.postIds && d.postIds.indexOf(t) || -1) - 1;
						if (n(B({
								collectionId: e,
								postId: t
							})), s && p >= 0) {
							const t = i(),
								s = Object(y.q)(t, {
									collectionId: e
								}),
								o = s && s.postIds && s.postIds[p] || "",
								r = Object(T.G)(t, {
									postId: o
								});
							r && r.permalink && n(Object(j.a)(r.permalink))
						}
						n(Object(c.f)({
							kind: I.b.SuccessMod,
							text: o.fbt._("Following post removed from collection successfully: {postTitle}", [o.fbt._param("postTitle", l)], {
								hk: "8e1lV"
							}),
							buttonText: o.fbt._("UNDO", null, {
								hk: "3KPLib"
							}),
							buttonAction: G(e, t)
						}))
					} else n(Object(c.f)({
						kind: I.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, V = Object(r.a)(l.a), W = Object(r.a)(l.t), G = (e, t) => async (s, n, {
					apiContext: i
				}) => {
					const r = n();
					if ((await h(i(), e, t)).ok) {
						s(V({
							collectionId: e,
							postId: t
						})), s(W({
							collectionId: e,
							postId: t
						}));
						const n = Object(T.G)(r, {
								postId: t
							}),
							i = Object(y.q)(r, {
								collectionId: e
							}),
							a = i && i.title || "";
						s(Object(c.f)({
							kind: I.b.SuccessMod,
							text: o.fbt._("Success! You added a post to the collection: {title}", [o.fbt._param("title", a)], {
								hk: "3KNJWi"
							}),
							buttonText: o.fbt._("VIEW", null, {
								hk: "1SSkgL"
							}),
							buttonAction: Object(j.a)(n.permalink)
						}))
					} else s(Object(c.f)({
						kind: I.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, U = Object(r.a)(l.e), H = (e, t) => async (s, r, {
					apiContext: a
				}) => {
					const l = r();
					if ((await C(a(), e)).ok) {
						const {
							url: r
						} = l.platform.currentPage, a = Object(y.q)(l, {
							collectionId: e
						}), d = a && a.title || "", p = a && a.subredditId, m = p ? Object(S.c)(l, p) : "/";
						s(U({
							collectionId: e,
							collection: a
						})), s(t ? Object(n.c)(Object(i.a)(r, ["collection"])) : Object(n.b)(m)), s(Object(c.f)({
							kind: I.b.SuccessMod,
							text: o.fbt._("Collection deleted successfully: {title}", [o.fbt._param("title", d)], {
								hk: "4tcOKB"
							})
						}))
					} else s(Object(c.f)({
						kind: I.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, K = Object(r.a)(l.r), J = Object(r.a)(l.n), q = Object(r.a)(l.s), Q = (e, t) => async (s, n, {
					apiContext: i
				}) => {
					s(K());
					const r = await v(i(), e, t);
					let a = !1;
					if (r.ok) s(q({
						collectionId: e,
						newTitle: t
					})), s(Object(c.f)({
						kind: I.b.SuccessMod,
						text: o.fbt._("Collection title updated successfully", null, {
							hk: "2hKzKl"
						})
					})), a = !0;
					else {
						const e = r.error;
						s(J(e)), s(Object(c.f)({
							kind: I.b.Error,
							text: o.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))
					}
					return a
				}, X = Object(r.a)(l.l), z = Object(r.a)(l.m), Y = Object(r.a)(l.k), Z = e => async (t, s) => {
					const o = s();
					if (Object(w.b)(o)) return void t(Object(a.ab)(Object(P.b)(e.permalink), e.id));
					const i = o.platform.currentPage.locationState;
					t(!(!i || !i[d.b.IsOverlay]) ? Object(j.a)(e.permalink) : Object(n.b)(Object(P.b)(e.permalink)))
				}, $ = Object(r.a)(l.i), ee = Object(r.a)(l.j), te = Object(r.a)(l.h), se = Object(r.a)(l.p), oe = Object(r.a)(l.o), ne = Object(r.a)(l.q), ie = e => async t => {
					const s = [],
						{
							collectionId: n,
							description: i,
							displayLayout: r,
							postIds: a,
							title: l
						} = e;
					a && s.push(t(((e, t) => async (s, n, {
						apiContext: i
					}) => {
						s($());
						const r = await _(i(), e, t);
						let a = !1;
						return r.ok ? (s(ee({
							collectionId: e,
							postIds: t
						})), s(Object(c.f)({
							kind: I.b.SuccessMod,
							text: o.fbt._("Collection order updated successfully", null, {
								hk: "4ccHEL"
							})
						})), a = !0) : (s(te({
							error: r.error
						})), s(Object(c.f)({
							kind: I.b.Error,
							text: o.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))), a
					})(n, a))), l && s.push(t(Q(n, l))), void 0 !== i && s.push(t(((e, t) => async (s, n, {
						apiContext: i
					}) => {
						s(X());
						const r = await k(i(), e, t);
						let a = !1;
						if (r.ok) s(z({
							collectionId: e,
							newDescription: t
						})), s(Object(c.f)({
							kind: I.b.SuccessMod,
							text: o.fbt._("Collection description updated successfully", null, {
								hk: "1rIDCC"
							})
						})), a = !0;
						else {
							const e = r.error;
							s(Y(e)), s(Object(c.f)({
								kind: I.b.Error,
								text: o.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return a
					})(n, i))), r && s.push(t(((e, t) => async (s, n, {
						apiContext: i
					}) => {
						s(se());
						const r = await E(i(), e, t);
						let a = !1;
						if (r.ok) s(ne({
							collectionId: e,
							newLayout: t
						})), s(Object(c.f)({
							kind: I.b.SuccessMod,
							text: o.fbt._("Collection layout updated successfully", null, {
								hk: "1Rs19j"
							})
						})), a = !0;
						else {
							const e = r.error;
							s(oe(e)), s(Object(c.f)({
								kind: I.b.Error,
								text: o.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return a
					})(n, r)));
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
				return N
			})), s.d(t, "a", (function() {
				return L
			})), s.d(t, "c", (function() {
				return A
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/post.ts"),
				r = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
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
				f = e => ({
					text: e.markdown,
					return_rtjson: !0
				}),
				C = e => ({
					api_type: "json",
					show_error_list: !0,
					thing_id: e.post.id,
					validate_on_submit: !0,
					...b(e) ? h(e) : f(e)
				});
			var x = (e, t) => Object(l.a)(Object(c.a)(e, [d.a]), {
					endpoint: Object(u.a)(Object(p.a)(`${e.apiUrl}/api/editusertext`)),
					method: a.jb.POST,
					data: C(t)
				}).then(m.b),
				O = s("./src/reddit/helpers/overlay/index.ts"),
				g = s("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				v = s("./src/reddit/helpers/trackers/lightbox.ts"),
				_ = s("./src/reddit/helpers/trackers/post.ts"),
				k = s("./src/reddit/helpers/trackers/postComposer.ts"),
				E = s("./src/reddit/models/Media/index.ts"),
				j = s("./src/reddit/models/PostCreationForm/index.ts"),
				P = s("./src/reddit/models/Toast/index.ts"),
				I = s("./src/reddit/selectors/posts.ts"),
				w = s("./src/reddit/actions/postCreation/constants.ts"),
				y = s("./src/reddit/actions/postCreation/general.ts");
			const T = Object(n.a)(w.l),
				S = Object(n.a)(w.m),
				F = Object(n.a)(w.x),
				M = Object(n.a)(w.H),
				N = Object(n.a)(w.I),
				L = (e, t) => async (s, o, {
					apiContext: n
				}) => {
					const i = o(),
						r = Object(I.G)(i, {
							postId: e
						});
					t ? (s(Object(O.a)(r.permalink)), Object(v.e)(e, "edit")(i)) : Object(_.d)(e, "edit")(i);
					const {
						media: a
					} = r;
					if (!a) return;
					let l, c = j.i.RICH_TEXT,
						d = "";
					a.type === E.o.TEXT ? (c = j.i.MARKDOWN, d = a.content) : a.type === E.o.RTJSON && (d = (c = a.rteMode || j.i.RICH_TEXT) === j.i.MARKDOWN ? a.markdownContent : a.richtextContent, l = a.mediaMetadata || void 0), s(M({
						editorMode: c,
						mediaMetadata: l,
						postContent: d,
						postId: e
					}))
				}, A = e => async (t, s, {
					apiContext: n
				}) => {
					const {
						post: a
					} = e, l = !a.media || "rtjson" !== a.media.type && "text" !== a.media.type ? "" : a.media.rteMode;
					k.E(s(), Object(y.o)(l)), t(F(a.id));
					const c = await x(n(), e),
						d = !1 === c.body.success;
					if (t(T(a.id)), c.ok && !d) {
						t(Object(r.f)({
							kind: P.b.SuccessCommunity,
							text: o.fbt._("Post successfully edited", null, {
								hk: "xej5K"
							})
						})), t(N(a.id));
						const e = Object(g.a)(c.body);
						t(Object(i.S)({
							[a.id]: e
						}))
					} else t(S(c.error))
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
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/selectors/chatPost.ts"),
				p = s("./src/reddit/components/CommentsChat/LiveIcon/index.m.less"),
				m = s.n(p);
			const u = .1,
				b = Object(l.c)({
					isChatPost: d.d
				}),
				h = Object(a.b)(b);
			class f extends r.a.Component {
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
					return t ? r.a.createElement(o.a, {
						rootMargin: "20px 0px 20px 0px",
						threshold: u,
						onChange: this.onVisibilityChange
					}, r.a.createElement("div", {
						className: Object(c.a)(m.a.Icon, this.props.className)
					}, r.a.createElement("span", {
						className: Object(c.a)(m.a.Animate, m.a.top, {
							[m.a.play]: s
						})
					}, r.a.createElement("span", {
						className: m.a.bigCircle
					}), r.a.createElement("span", {
						className: m.a.midCircle
					}), r.a.createElement("span", {
						className: m.a.smallCircle
					})), r.a.createElement("p", {
						className: m.a.IconText
					}, n.fbt._("Live Discussion", null, {
						hk: "2akFwx"
					})), r.a.createElement("span", {
						className: Object(c.a)(m.a.Animate, m.a.bottom, {
							[m.a.play]: s
						})
					}, r.a.createElement("span", {
						className: m.a.bigCircle
					}), r.a.createElement("span", {
						className: m.a.midCircle
					}), r.a.createElement("span", {
						className: m.a.smallCircle
					})))) : null
				}
			}
			t.a = h(f)
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
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/components/CountAnimation/index.tsx"),
				b = s("./src/reddit/constants/componentTestIds.ts"),
				h = s("./src/reddit/constants/postLayout.ts"),
				f = s("./src/reddit/helpers/path/index.ts"),
				C = s("./src/reddit/hooks/useClickSourceData.ts"),
				x = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				O = s("./src/reddit/selectors/chatPost.ts"),
				g = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				v = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				_ = s("./src/reddit/selectors/experiments/postSeo.ts"),
				k = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/CommentsLink/index.m.less"),
				P = s.n(j);
			const I = () => 0,
				w = Object(r.b)(() => Object(l.c)({
					isChatPost: O.d,
					isPostSEOEligible: _.e,
					postPermalink: k.F,
					shouldOpenPostInNewTab: E.hb,
					isBlockingInterstitialEnabled: g.b
				})),
				y = ({
					hasModPostPerms: e,
					isCountAnimShadowTestEnabled: t,
					isChatPost: s,
					isCommentCountAnimation: a,
					modModeEnabled: l,
					numComments: d,
					postId: b,
					shouldShowIcon: f,
					shouldShowText: C,
					text: O,
					type: g
				}) => {
					let _;
					_ = O || (g === h.g.Compact || s || l && e ? Object(p.b)(d) : o.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [o.fbt._plural(d, "number", Object(p.b)(d))], {
						hk: "1QeOde"
					}));
					const k = Object(r.d)(),
						E = Object(n.useCallback)(e => {
							const {
								commentCountChange: t
							} = e.subscribe.data;
							0 !== t && k(Object(m.H)({
								postId: b,
								delta: t
							}))
						}, [k, b]),
						j = Object(n.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "COMMENT_COUNT_UPDATE",
									postID: b
								}
							}
						}),
						w = a && d < v.a;
					return i.a.createElement(n.Fragment, null, f && i.a.createElement(x.a, {
						className: P.a.commentIcon,
						role: "presentation"
					}), C && i.a.createElement("span", {
						className: P.a.text
					}, (w || t) && i.a.createElement(u.b, {
						countToUpperBound: d,
						incrementDelta: I,
						initialDelay: I,
						initialDisplayCount: d,
						postId: b,
						shouldDisjointAnimation: !0,
						subsequentRecurringDelay: I,
						featureName: u.a.Comment,
						queryKey: "postCommentCount",
						queryVariables: j.current,
						onDataCB: E,
						isLoadTestOnly: !!t && !w
					}), !w && _), C && (!l || !e) && w && i.a.createElement("span", {
						className: Object(c.a)(P.a.text, P.a.commentsText)
					}, o.fbt._({
						"*": "comments",
						_1: " comment"
					}, [o.fbt._plural(d)], {
						hk: "119Rxn"
					})))
				};
			t.a = w(e => {
				const {
					className: t,
					hasModPostPerms: s,
					forceOpenInNewTab: o,
					isChatPost: n,
					isCommentPermalink: l,
					isCommentsPage: p,
					isOverlay: u,
					isPostSEOEligible: h,
					modModeEnabled: x,
					numComments: O,
					onClick: g,
					postPermalink: v,
					shouldOpenPostInNewTab: _,
					shouldShowIcon: k = !0,
					shouldShowText: E = !0,
					text: j,
					type: I,
					postId: w,
					isCommentCountAnimation: T,
					isCountAnimShadowTestEnabled: S,
					isBlockingInterstitialEnabled: F
				} = e, M = Object(r.d)(), N = p && !l && !h, L = l && !u, A = Object(C.a)(), R = i.a.createElement(y, {
					hasModPostPerms: s,
					isCountAnimShadowTestEnabled: !!S,
					isChatPost: n,
					isCommentCountAnimation: !!T,
					modModeEnabled: x,
					numComments: O,
					postId: w,
					shouldShowIcon: k,
					shouldShowText: E,
					text: j,
					type: I
				});
				return N ? i.a.createElement("div", {
					className: Object(c.a)(P.a.commentsLink, P.a.defaultCursorWrapper, t),
					onClick: g
				}, R) : i.a.createElement(a.a, {
					rel: "nofollow",
					"data-click-id": "comments",
					"data-test-id": b.a,
					className: Object(c.a)(P.a.commentsLink, P.a.link, t),
					target: o || _ ? "_blank" : void 0,
					to: L ? Object(f.b)(v) : Object(d.a)(v, !0, A),
					onClick: e => {
						F && (e.preventDefault(), M(Object(m.Y)(Object(f.b)(v), w))), g && g()
					}
				}, R)
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
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/fastdom/index.ts"),
				p = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/selectors/tooltip.ts"),
				b = s("./src/reddit/components/ContentTooltip/index.m.less"),
				h = s.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const C = {
					height: 200,
					width: 200
				},
				x = e => {
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
				O = Object(c.a)(e => {
					const {
						children: t,
						className: s,
						style: o,
						caretPosition: n,
						caretColor: r,
						onClick: a,
						hideCaret: c,
						...d
					} = e;
					return i.a.createElement("div", f({
						onClick: a,
						className: Object(l.a)(s, h.a.StyledTooltipContainer, {
							[h.a.caretOnTop]: "top" === n,
							[h.a.caretOnLeft]: "left" === n,
							[h.a.caretOnRight]: "right" === n,
							[h.a.caretOnBottom]: "bottom" === n,
							[h.a.hideCaret]: c
						}),
						style: {
							...o,
							"--contentTooltip-caretColor": r && r[n] ? r[n] : Object(m.a)(e).body
						}
					}, d), t)
				}),
				g = Object(a.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(u.b)(t)(e)
				}),
				v = Object(p.a)(O, [o.a.Click, o.a.Keydown]),
				_ = Object(r.b)(g);
			class k extends i.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = C
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
								position: n ? this.props.defaultTooltipPosition : x(this.props.defaultTooltipPosition)
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
					return i.a.createElement(v, f({}, this.props, {
						caretPosition: o,
						targetPosition: t,
						tooltipPosition: s
					}))
				}
			}
			t.a = _(k)
		},
		"./src/reddit/components/Flatlist/ResponsiveRow.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				a = s("./src/reddit/controls/Dropdown/Row.tsx"),
				l = s("./src/reddit/components/Flatlist/index.m.less"),
				c = s.n(l);

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
				flatlistItem: e,
				isLoggedIn: t,
				isUserOp: s,
				noBreakpoints: o,
				...l
			}) => n.a.createElement("div", {
				"data-ignore-click": !!l.searchIgnoreClick,
				className: c.a.rowContainer
			}, n.a.createElement(a.a, d({}, l, {
				className: o ? c.a.responsiveRow : Object(i.a)(c.a.responsiveRow, Object(r.b)({
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
					e.EditPost = "EDITPOST", e.EditFlair = "EDITFLAIR", e.Save = "SAVE", e.Gild = "GILD", e.Hide = "HIDE", e.PostOverflowMenu = "POST_OVERFLOW_MENU", e.Report = "REPORT", e.Share = "SHARE", e.ShowFewerLikeThis = "SHOW_FEWER_LIKE_THIS", e.ShowMoreLikeThis = "SHOW_MORE_LIKE_THIS"
				}(o || (o = {}))
		},
		"./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return p
			}));
			var o, n, i, r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Flatlist/breakpoints.m.less"),
				l = s.n(a),
				c = s("./src/reddit/components/Flatlist/constants.ts");
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(o || (o = {})),
			function(e) {
				e.First = "FirstGroup", e.Editing = "EditingGroup", e.Second = "SecondGroup", e.Awarding = "AwardingGroup"
			}(n || (n = {})),
			function(e) {
				e.LoggedIn = "LoggedInVariant", e.LoggedOut = "LoggedOutVariant", e.Op = "OpVariant"
			}(i || (i = {}));
			const d = {
					[c.a.EditFlair]: n.Editing,
					[c.a.EditPost]: n.Editing,
					[c.a.Gild]: n.Awarding,
					[c.a.Hide]: n.First,
					[c.a.PostOverflowMenu]: n.First,
					[c.a.Report]: n.First,
					[c.a.Save]: n.First,
					[c.a.Share]: n.Second,
					[c.a.ShowFewerLikeThis]: n.First,
					[c.a.ShowMoreLikeThis]: n.First
				},
				p = e => {
					return (e => {
						const t = l.a[e.type],
							s = l.a[e.group],
							o = l.a[e.groupVariant];
						return Object(r.a)(t, s, o)
					})({
						type: e.breakpointType || o.HideIfVWSmaller,
						group: d[e.flatlistItem],
						groupVariant: ((e, t) => e && t ? i.Op : e ? i.LoggedIn : i.LoggedOut)(e.isLoggedIn, e.isUserOp)
					})
				}
		},
		"./src/reddit/components/Flatlist/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Flatlist/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return Oe
			})), s.d(t, "a", (function() {
				return ge
			})), s.d(t, "d", (function() {
				return je
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/lessComponent.tsx"),
				m = s("./src/lib/ads/index.ts"),
				u = s("./src/lib/timezone/index.ts"),
				b = s("./src/reddit/actions/gold/modals.ts"),
				h = s("./src/reddit/actions/modal.ts"),
				f = s("./src/reddit/actions/post.ts"),
				C = s("./src/reddit/actions/postCreation/editing.ts"),
				x = s("./src/reddit/actions/postFlair.ts"),
				O = s("./src/reddit/actions/reportFlow/index.ts"),
				g = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				v = s("./src/reddit/components/CommentsLink/index.tsx"),
				_ = s("./src/reddit/hooks/useTracking.ts"),
				k = s("./src/reddit/helpers/trackers/freeAwardOffer.ts"),
				E = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				j = s("./src/reddit/components/ContentTooltip/index.tsx"),
				P = s("./src/reddit/components/GiveAwardTooltip/index.m.less"),
				I = s.n(P);
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var y = e => {
					const {
						tooltipId: t
					} = e, s = Object(r.e)(E.b), o = Object(_.a)();
					return Object(n.useEffect)(() => {
						s && o(Object(k.c)())
					}, [s, o]), s ? i.a.createElement(j.a, {
						className: I.a.freeAwardTooltip,
						caretColor: {
							bottom: "#F6481E"
						},
						tooltipSizeEstimate: {
							height: 48,
							width: 148
						},
						tooltipId: t,
						defaultTooltipPosition: "top"
					}, i.a.createElement("div", {
						className: I.a.freeAwardContainer
					}, w._("Tap to give your {award name} Award", [w._param("award name", s.name)], {
						hk: "2EMqbP"
					}))) : null
				},
				T = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				S = s("./src/reddit/components/ModModeReports/helpers.ts"),
				F = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				M = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				N = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				L = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				A = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				R = s("./src/reddit/components/ShareMenu/index.tsx"),
				B = s("./src/reddit/components/TrackingHelper/index.tsx"),
				D = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				V = s("./src/reddit/constants/postLayout.ts"),
				W = s("./src/reddit/contexts/PageLayer/index.tsx"),
				G = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				U = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				H = s("./src/reddit/selectors/user.ts"),
				K = s("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				J = s("./src/reddit/helpers/correlationIdTracker.ts"),
				q = s("./src/reddit/helpers/trackers/modTools.ts"),
				Q = s("./src/reddit/helpers/trackers/post.ts"),
				X = s("./src/reddit/icons/fonts/index.tsx"),
				z = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				Y = s("./src/reddit/icons/fonts/Share/index.tsx"),
				Z = s("./src/reddit/models/Media/index.ts"),
				$ = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				ee = s("./src/reddit/models/PostCreationForm/index.ts"),
				te = s("./src/reddit/models/User/index.ts"),
				se = s("./src/reddit/components/Flatlist/constants.ts"),
				oe = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				ne = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				ie = s("./src/reddit/actions/postCollection/index.ts"),
				re = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx"),
				ae = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx"),
				le = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				ce = s("./src/reddit/selectors/activeModalId.ts"),
				de = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				pe = s("./src/reddit/selectors/posts.ts"),
				me = s("./src/reddit/components/Flatlist/index.m.less"),
				ue = s.n(me);

			function be() {
				return (be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			let he, fe;
			const Ce = p.a.button("ShareButton", ue.a),
				xe = p.a.wrapped(R.a, "ShareMenu", ue.a),
				Oe = Object(d.a)(({
					className: e,
					...t
				}) => i.a.createElement(z.a, be({}, t, {
					className: Object(l.a)(ue.a.modActionsIcon, e),
					style: {
						color: Object(U.a)(Object(G.a)(t), $.a.actionIcon, $.b.actionIcon)
					}
				}))),
				ge = e => i.a.createElement("div", be({}, e, {
					className: Object(l.a)(ue.a.flatlistSeparator, e.className)
				})),
				ve = Object(W.u)({
					currentProfileName: W.i,
					isCommentPermalink: W.w,
					isCommentsPage: W.x,
					isProfilePostListing: W.L,
					pageLayer: e => e
				}),
				_e = Object(a.c)({
					activeModalId: ce.a,
					claimedFreeAward: E.b,
					layout: W.R,
					userIsOp: H.zb,
					subreddit: W.r,
					isBlockedUserBannerEnabled: (e, {
						post: t
					}) => !!Object(pe.w)(e, {
						postId: t.postId
					}) && Object(de.a)(e),
					isTrueblockPCBlockeeEnabled: de.b
				}),
				ke = Object(r.b)(_e, (e, {
					post: t,
					isOverlay: o,
					isCommentsPage: n
				}) => ({
					addPostToCollection: (t, s) => e(Object(ie.a)(t, s)),
					onToggleModal: t => e(Object(h.i)(t)),
					onToggleSave: () => e(Object(f.U)(t.postId)),
					onHide: s => e(Object(f.eb)(t.postId, !t.hidden, o, !0)),
					onReportClick: () => e(Object(O.c)(t.postId, o)),
					onEdit: () => {
						const s = !o && !n;
						e(Object(C.a)(t.postId, s))
					},
					onFlairPost: () => e(Object(h.i)(Object(M.b)(t.postId, o))),
					onGildClick: (s, o) => e(Object(b.d)({
						awardId: o,
						correlationId: s,
						thingId: t.postId
					})),
					onFlairChanged: ({
						selectedTemplateId: s,
						previewFlair: o
					}) => e(Object(x.h)({
						post: t,
						selectedTemplateId: s,
						previewFlair: o
					})),
					toggleEditStartTimeModal: async () => {
						he && fe || ([he, fe] = await Promise.all([s.e("schedulePickerModal").then(s.bind(null, "./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx")).then(e => e.default), Promise.resolve().then(s.bind(null, "./src/reddit/actions/eventPosts/index.ts")).then(e => e.editEventTimeRequested)])), e(Object(h.i)(Object(ee.s)(t.postId, o, ee.k.POST_OVERFLOW_MENU)))
					},
					addEventStartTime: s => {
						fe && e(fe(t.id, s))
					}
				})),
				Ee = i.a.memo(e => {
					const {
						activeModalId: t,
						addEventStartTime: r,
						className: a,
						currentProfileName: d,
						currentUser: p,
						forceOpenInNewTab: b,
						hasModFlairPerms: h,
						hasModFullPerms: f,
						hasModPostPerms: C,
						isCommentPermalink: x,
						isCommentsPage: O,
						isCountAnimShadowTestEnabled: _,
						isLargePost: k,
						isOverlay: E,
						isProfilePostListing: j,
						isSticky: P,
						layout: I,
						modModeEnabled: w,
						onFlairChanged: R,
						onIgnoreReports: B,
						onOpenReportsDropdown: W,
						pageLayer: G,
						post: U,
						sendEvent: H,
						showEditFlair: z,
						showEditPost: $,
						subreddit: ie,
						toggleEditStartTimeModal: le,
						tooltipType: ce,
						userIsOp: de,
						searchIgnoreClick: pe,
						isCommentCountAnimation: me,
						hostPostData: be,
						listingKey: fe,
						onGildClick: ge,
						onToggleModal: ve,
						claimedFreeAward: _e,
						onToggleSave: ke,
						onHide: Ee,
						addPostToCollection: Pe,
						onReportClick: Ie,
						isBlockedUserBannerEnabled: we,
						shouldHideItems: ye,
						isTrueblockPCBlockeeEnabled: Te
					} = e, Se = Object(n.useCallback)(async () => {
						const e = Object(J.e)(J.a.GildingFlow, !0);
						ge(e, null == _e ? void 0 : _e.id);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						H(t(U.id))
					}, [ge, U, H, _e]), Fe = Object(n.useCallback)(() => {
						t && ve(t)
					}, [t, ve]), Me = Object(n.useCallback)(() => {
						const e = Object(ee.t)(U.id, E);
						ve(e)
					}, [ve, E, U]), Ne = Object(n.useCallback)(e => {
						Pe(e.id, U.id).then(() => Fe())
					}, [Pe, Fe, U]), Le = Object(n.useCallback)((e, t) => {
						H(Object(Q.h)(U.id, e, E ? "post_detail" : "post", fe, be, void 0, null == t ? void 0 : t.referralId))
					}, [be, E, H, fe, U]), Ae = Object(n.useCallback)(() => {
						ke(), Le(U.saved ? "unsave" : "save")
					}, [ke, U, Le]), Re = Object(n.useCallback)(() => {
						Ee(!!U.hidden), Le(U.hidden ? "unhide" : "hide")
					}, [Ee, U, Le]), Be = Object(n.useCallback)(() => {
						Ie(), Le("report")
					}, [Ie, Le]), De = Object(n.useMemo)(() => i.a.createElement(Ce, {
						"data-click-id": "share"
					}, i.a.createElement(Y.a, {
						className: ue.a.shareIcon
					}), i.a.createElement("span", {
						className: ue.a.shareText
					}, o.fbt._("share", null, {
						hk: "1eAfZg"
					}))), []), Ve = !!p && Object(te.e)(p) === U.author, We = Object(ne.a)("View--Reports", U.id, ce), Ge = Object(ne.a)(c.pc, U.id, ce), Ue = Object(S.c)(U), He = je("-mod-actions-menu", U.id, E, P), Ke = Object(S.a)(U), Je = U.postId, qe = I === V.g.Large, Qe = !O && qe || C && w || ye, Xe = !(E || O || x), ze = !(U.authorIsBlocked && Te) && p && U.isGildable && !(U.authorIsBlocked && we) && !(U.unrepliableReason && Te), Ye = U.media && U.media.type === Z.o.LIVEVIDEO, Ze = !!U.recommendationContext, $e = U.isSponsored || Object(m.u)(G);
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: Object(l.a)(ue.a.flatlistContainer, a)
					}, i.a.createElement(v.a, {
						className: Object(l.a)(ue.a.rowContainer, ue.a.commentsLink),
						forceOpenInNewTab: b,
						hasModPostPerms: C,
						isCommentsPage: O,
						isCommentPermalink: x,
						isOverlay: E,
						postId: U.id,
						modModeEnabled: w,
						numComments: U.numComments,
						isCommentCountAnimation: me,
						isCountAnimShadowTestEnabled: _
					}), ze && i.a.createElement(i.a.Fragment, null, i.a.createElement(K.a, {
						displayText: o.fbt._("Award", null, {
							hk: "2fZCpE"
						}),
						textClassName: ue.a.responsiveRowText,
						flatlistItem: se.a.Gild,
						isLoggedIn: !!p,
						isUserOp: de,
						onClick: Se,
						searchIgnoreClick: pe,
						skipRoleAttr: !0
					}, i.a.createElement(X.a, {
						name: "award",
						className: ue.a.awardIcon,
						id: Ge
					})), i.a.createElement(y, {
						postOrComment: U,
						tooltipId: Ge
					})), i.a.createElement(xe, {
						className: Object(l.a)(ue.a.rowContainer, Object(oe.b)({
							flatlistItem: se.a.Share,
							isLoggedIn: !!p,
							isUserOp: de
						})),
						dropdownId: je("-share-menu", U.id, E, P),
						permalink: U.permalink,
						post: U,
						sendEventWithName: Le,
						subredditType: null == ie ? void 0 : ie.type
					}, De), $ && !Qe && i.a.createElement(K.a, {
						displayText: o.fbt._("Edit post", null, {
							hk: "Jq2Cr"
						}),
						textClassName: ue.a.responsiveRowText,
						flatlistItem: se.a.EditPost,
						isLoggedIn: !!p,
						isUserOp: de,
						onClick: e.onEdit,
						skipRoleAttr: !0
					}, i.a.createElement(X.a, {
						name: "edit"
					})), (!C || !w) && i.a.createElement(K.a, {
						displayText: U.saved ? o.fbt._("unsave", null, {
							hk: "4Dn4IT"
						}) : o.fbt._("save", null, {
							hk: "3NOMst"
						}),
						textClassName: ue.a.responsiveRowText,
						flatlistItem: se.a.Save,
						isLoggedIn: !!p,
						isUserOp: de,
						onClick: Ae,
						searchIgnoreClick: pe,
						skipRoleAttr: !0
					}, i.a.createElement(X.a, {
						name: U.saved ? "saved" : "save",
						className: ue.a.saveIcon
					})), !$e && !Qe && i.a.createElement(K.a, {
						displayText: U.hidden ? o.fbt._("unhide", null, {
							hk: "151XLs"
						}) : o.fbt._("hide", null, {
							hk: "4AnA6R"
						}),
						textClassName: ue.a.responsiveRowText,
						flatlistItem: se.a.Hide,
						isLoggedIn: !!p,
						isUserOp: de,
						onClick: Re,
						searchIgnoreClick: pe,
						skipRoleAttr: !0
					}, i.a.createElement(X.a, {
						name: "hide",
						isFilled: U.hidden
					})), !Ve && !$e && !Qe && i.a.createElement(K.a, {
						displayText: o.fbt._("report", null, {
							hk: "1phfns"
						}),
						textClassName: ue.a.responsiveRowText,
						flatlistItem: se.a.Report,
						isLoggedIn: !!p,
						isUserOp: de,
						onClick: Be,
						searchIgnoreClick: pe,
						skipRoleAttr: !0
					}, i.a.createElement(X.a, {
						name: "report"
					})), i.a.createElement(F.a, {
						isOverlay: E,
						layout: I,
						modModeEnabled: w,
						post: U,
						sendEvent: H
					}), C && i.a.createElement(T.a, {
						dropdownId: He,
						onClick: () => H(Object(Q.h)(U.id, "post_mod_action_menu"))
					}, i.a.createElement(Oe, null), i.a.createElement(N.a, {
						canEditFlair: h && !!z,
						hasModFullPerms: f,
						hasModPostPerms: C,
						isOverlay: !!E,
						isPostAuthor: Ve,
						modModeEnabled: w,
						post: U,
						tooltipId: He
					})), C && Ue && !w && i.a.createElement(A.c, {
						text: `${Ke}`,
						onClick: () => {
							W(We), H(Object(Q.h)(U.id, "post_report_menu"))
						},
						id: We
					}, i.a.createElement(D.a, {
						model: U,
						onIgnoreReports: () => {
							B(), H(Object(q.k)(U.ignoreReports ? "restore_reports" : "ignore_reports", U.id))
						},
						tooltipId: We
					}), i.a.createElement(X.a, {
						className: ue.a.icon,
						name: U.ignoreReports ? "ignore_reports" : "report"
					})), !$e && i.a.createElement("div", {
						className: ue.a.overflowMenuContainer
					}, i.a.createElement(L.a, {
						currentProfileName: d,
						dropdownId: je("-overflow-menu", U.id, E, P),
						ignoreOverflowMenuBreakpoints: ye,
						isCommentsPage: O,
						isFixed: P,
						isOverlay: !!E,
						isProfilePostListing: j,
						isRecommendationPost: Ze,
						layout: I,
						modModeWithPost: w && C,
						pageLayer: G,
						permalink: U.permalink,
						postId: Je,
						sendEvent: H,
						showEditPost: !!$,
						showEditFlair: !!z,
						useFlatlistBreakpoints: e.useFlatlistBreakpoints,
						toggleAddEventStartTimeModal: le,
						toggleEditStartTimeModal: le
					})), t === Object(ee.t)(U.id, E) && i.a.createElement(re.a, {
						subredditId: U.belongsTo.id,
						onClose: Fe,
						postId: U.id,
						onSelectCollection: Ne,
						titleText: o.fbt._("Add post to a collection", null, {
							hk: "38vSyF"
						}),
						onItemHoverActionText: o.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						isOverlay: E
					}), t === Object(ee.s)(U.id, E, ee.k.POST_OVERFLOW_MENU) && he && i.a.createElement(he, {
						onChange: r,
						onClose: le,
						schedule: Object(u.c)(U),
						shouldShowDeleteButton: !1
					}), t === Object(ee.u)(U.id, E) && i.a.createElement(ae.a, {
						onCancel: Me,
						onCollectionCreated: Ne,
						subredditId: U.belongsTo.id
					}), t === Object(M.b)(U.id, E) && i.a.createElement(M.a, {
						flairs: U.flair,
						subredditId: U.belongsTo.id,
						modalId: Object(M.b)(U.id, E),
						onFlairChanged: R
					}), i.a.createElement("div", {
						className: ue.a.flexSpacer
					})), Xe && !Ye && i.a.createElement(g.a, {
						className: Object(l.a)(ue.a.liveDiscussionWrapper, {
							[ue.a.large]: k
						}),
						isMod: C,
						postId: U.postId
					}))
				});
			Ee.displayName = "Flatlist";
			const je = (e, t, s, o) => {
					let n = t;
					return s && (n += "-overlay"), o && (n += "-sticky"), n += e
				},
				Pe = ve(ke(Object(B.c)(Ee)));
			t.c = i.a.memo((function(e) {
				const t = Object(le.a)();
				return i.a.createElement(Pe, be({}, e, {
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
				return f
			}));
			var o, n, i, r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				l = s("./src/reddit/constants/postLayout.ts"),
				c = s("./src/reddit/components/ModToolsFlatlist/breakpoints.m.less"),
				d = s.n(c),
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
			}(i || (i = {}));
			const u = {
					[a.a.Approve]: n.Approve,
					[a.a.Remove]: n.Remove,
					[a.a.Spam]: n.Spam,
					[a.a.Flair]: n.Flair
				},
				b = {
					[l.g.Classic]: i.Classic,
					[l.g.Compact]: i.Compact,
					[l.g.Large]: i.Default,
					[l.g.Medium]: i.Default,
					[l.g.Search]: i.Default
				},
				h = e => {
					const t = u[e.flatlistItem],
						s = e.postLayout && b[e.postLayout],
						o = d.a[e.breakpointType],
						n = d.a[t],
						a = s ? d.a[s] : d.a[i.Default];
					return Object(r.a)(o, n, a)
				},
				f = e => {
					const t = e && b[e],
						s = t ? d.a[t] : d.a[i.Default];
					return Object(r.a)(s, m.a.ButtonTextWrapper, d.a.ButtonTextWrapper)
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
				return L
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				b = s("./src/reddit/components/ModModeReports/helpers.ts"),
				h = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				f = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				C = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				g = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				v = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				_ = s("./src/reddit/selectors/activeModalId.ts"),
				k = s("./src/reddit/selectors/moderatorPermissions.ts"),
				E = s("./src/reddit/selectors/postFlair.ts"),
				j = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				P = s("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				I = s("./src/lib/constants/index.ts"),
				w = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				y = s("./src/reddit/components/ModalStyledComponents/MessageBox.tsx"),
				T = s("./src/reddit/hooks/useTracking.ts"),
				S = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				F = s("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				M = s.n(F);
			const N = ({
					className: e,
					textClassName: t,
					isOverlay: s,
					iconOnly: n,
					post: a
				}) => {
					const [l, c] = i.a.useState(!1), [u, b] = i.a.useState(!1), h = Object(T.a)(), C = Object(r.d)(), {
						isPrediction: O,
						resolvedOptionId: g,
						totalVoteCount: v
					} = a.pollData || {}, _ = () => {
						c(!1), C(Object(d.T)(a.id, !1)), a.isRemoved && a.bannedBy === I.l ? h(Object(x.h)(a.id, "confirm_remove")) : h(Object(x.h)(a.id, "remove"))
					}, k = ((e, t) => e ? t === I.l ? o.fbt._("Confirm removal", null, {
						hk: "1t5tKM"
					}) : o.fbt._("removed", null, {
						hk: "35ZTch"
					}) : o.fbt._("remove", null, {
						hk: "3LWMcS"
					}))(a.isRemoved, a.bannedBy), E = L("Remove", a.id, s), j = () => n && C(Object(p.h)({
						tooltipId: E
					})), P = i.a.useMemo(() => v ? 1 === v ? o.fbt._("Removing this post will cancel the 1 prediction that has already been made.", null, {
						hk: "hVYeT"
					}) : o.fbt._("Removing this post will cancel the {votedUsersCount} predictions that have already been made.", [o.fbt._param("votedUsersCount", v.toString())], {
						hk: "47oACN"
					}) : o.fbt._("Removing this post will cancel any predictions that have already been made.", null, {
						hk: "26cLeP"
					}), [v]);
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(f.d, {
						className: e,
						textClassName: t,
						id: E,
						text: n ? void 0 : k,
						disabled: a.isRemoved && a.bannedBy !== I.l,
						onMouseEnter: j,
						onMouseLeave: j,
						onClick: () => {
							O ? g ? b(!0) : c(!0) : _()
						}
					}, i.a.createElement(S.a, {
						desc: n ? k : void 0
					}), n && i.a.createElement(m.c, {
						className: M.a.tooltip,
						tooltipId: E,
						text: k
					})), u && i.a.createElement(y.a, {
						title: o.fbt._("This post can't be removed", null, {
							hk: "2GbryD"
						}),
						body: o.fbt._("Sorry about that. Once a prediction has been resolved, you can't remove the post.", null, {
							hk: "3wgNhQ"
						}),
						onClose: () => b(!u)
					}), l && i.a.createElement(w.a, {
						withOverlay: !0,
						modalText: P,
						actionText: o.fbt._("Remove", null, {
							hk: "2DXJl4"
						}),
						headerText: o.fbt._("Are you sure?", null, {
							hk: "3CJLRE"
						}),
						onConfirm: _,
						onOverlayClick: () => c(!l),
						toggleModal: () => c(!l)
					}))
				},
				L = (e, t, s = !1) => `ModToolsFlatlist-${e}${t}${s?"inOverlay":""}`,
				A = (e, t) => Object(P.b)({
					breakpointType: P.a.HideIfVWSmaller,
					flatlistItem: e,
					postLayout: t
				}),
				R = Object(r.b)(() => Object(a.c)({
					activeModalId: _.a,
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
					onApprovePost: () => e(Object(d.s)(t.id)),
					onOpenPostModModeDropdown: t => e(Object(p.h)({
						tooltipId: t
					})),
					onSpamPost: () => e(Object(d.T)(t.id, !0)),
					onFlairPost: t => () => e(Object(c.i)(t))
				}));
			t.a = R(e => {
				const {
					canEditFlair: t,
					className: s,
					isOverlay: a,
					layout: c,
					moderatorPermissions: d,
					modModeEnabled: _,
					onApprovePost: k,
					onFlairPost: E,
					onSpamPost: I,
					post: w,
					sendEvent: y,
					showIconsOnly: T
				} = e, S = Object(r.d)(), F = Object(C.a)(d), R = Object(b.b)(w), B = !(!w.approvedBy || !R), D = Object(h.b)(w.id, a), V = F && _ && !w.isSponsored, W = t && _, G = ((e, t) => e ? o.fbt._("reapprove", null, {
					hk: "OJvB1"
				}) : t ? o.fbt._("approved", null, {
					hk: "2bWAFI"
				}) : o.fbt._("approve", null, {
					hk: "2DIHcM"
				}))(B, w.approvedBy), U = (e => e ? o.fbt._("spammed", null, {
					hk: "3GPrkZ"
				}) : o.fbt._("spam", null, {
					hk: "3ebJLg"
				}))(w.isSpam), H = L("Approve", w.id, a), K = L("Spam", w.id, a), J = () => T && S(Object(p.h)({
					tooltipId: H
				})), q = () => T && S(Object(p.h)({
					tooltipId: K
				})), Q = a ? void 0 : c;
				return i.a.createElement("div", {
					className: Object(l.a)(M.a.container, s)
				}, V && i.a.createElement(n.Fragment, null, i.a.createElement(f.b, {
					className: A(j.a.Approve, Q),
					key: "approveButton",
					text: T ? void 0 : G,
					textClassName: Object(P.c)(Q),
					disabled: !!w.approvedBy && !R,
					id: H,
					onMouseEnter: J,
					onMouseLeave: J,
					onClick: () => {
						k(), y(Object(x.h)(w.id, "approve"))
					}
				}, i.a.createElement(O.a, {
					desc: T ? G : void 0
				}), T && i.a.createElement(m.c, {
					className: M.a.tooltip,
					tooltipId: H,
					text: G
				})), i.a.createElement(N, {
					className: A(j.a.Remove, Q),
					textClassName: Object(P.c)(Q),
					isOverlay: a,
					iconOnly: T,
					post: w
				}), i.a.createElement(f.d, {
					className: A(j.a.Spam, Q),
					key: "removeSpamButton",
					text: T ? void 0 : U,
					textClassName: Object(P.c)(Q),
					disabled: w.isSpam,
					id: K,
					onMouseEnter: q,
					onMouseLeave: q,
					onClick: () => {
						I(), y(Object(x.h)(w.id, "spam"))
					}
				}, i.a.createElement(g.a, {
					desc: T ? U : void 0
				}), T && i.a.createElement(m.c, {
					className: M.a.tooltip,
					tooltipId: K,
					text: U
				}))), W && i.a.createElement(f.c, {
					className: A(j.a.Flair, Q),
					key: "tagButton",
					onClick: () => {
						E(D)(), y(Object(x.h)(w.id, "post_flair_picker"))
					}
				}, i.a.createElement(v.a, null)), i.a.createElement(u.f, null))
			})
		},
		"./src/reddit/components/ModalStyledComponents/MessageBox.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/higherOrderComponents/asModal/index.tsx"),
				a = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = s("./src/reddit/controls/TextButton/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const p = Object(r.a)(({
					title: e,
					body: t,
					actionText: s = o.fbt._("OK", null, {
						hk: "1eo6HO"
					}),
					onClose: n
				}) => i.a.createElement(a.e, null, i.a.createElement(a.i, null, i.a.createElement(c.a, null, i.a.createElement(a.q, null, e), i.a.createElement(l.a, {
					onClick: n
				}, i.a.createElement(a.b, null)))), i.a.createElement(a.l, null, i.a.createElement(a.p, null, t)), i.a.createElement(a.g, null, i.a.createElement(a.u, {
					"data-redditstyle": !0,
					onClick: n
				}, s)))),
				m = e => i.a.createElement(p, d({
					withOverlay: !0,
					onOverlayClick: e.onClose
				}, e))
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
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/lib/memoizeByReference/index.ts"),
				p = s("./src/reddit/actions/postCreation/general.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/keycodes.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/Input/index.tsx"),
				f = s("./src/reddit/icons/svgs/Close/index.tsx"),
				C = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				x = s("./src/reddit/icons/svgs/Search/index.tsx"),
				O = s("./src/reddit/layout/row/Inline/index.tsx"),
				g = s("./src/reddit/models/PostCreationForm/index.ts"),
				v = s("./src/reddit/selectors/postCollection.ts"),
				_ = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				k = s("./src/reddit/components/HumanDate/index.tsx"),
				E = s("./src/reddit/helpers/name/index.ts"),
				j = s("./src/reddit/models/Subreddit/index.ts"),
				P = s("./src/reddit/models/User/index.ts"),
				I = s("./src/reddit/selectors/subreddit.ts"),
				w = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),
				T = s.n(y),
				S = s("./src/lib/lessComponent.tsx");
			const {
				fbt: F
			} = s("./node_modules/fbt/lib/FbtPublic.js"), M = S.a.div("Container", T.a), N = S.a.h2("PostTitle", T.a), L = S.a.div("MetaLine", T.a), A = S.a.span("SubredditName", T.a), R = S.a.time("InfoSpan", T.a), B = Object(l.c)({
				subreddit: (e, {
					collection: {
						subredditId: t
					}
				}) => t ? Object(I.S)(e, {
					subredditId: t
				}) : void 0,
				user: w.k
			});
			class D extends r.a.PureComponent {
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
					} = this.props, n = t && Object(j.h)(t) && s ? Object(E.d)(Object(P.e)(s)) : t ? t.displayText : "", i = e.postIds.length;
					return r.a.createElement(M, {
						onClick: this.onClick,
						className: T.a.container
					}, r.a.createElement(N, {
						"data-redditstyle": !0
					}, e.title), r.a.createElement(L, {
						"data-redditstyle": !0
					}, n && r.a.createElement(A, {
						"data-redditstyle": !0
					}, n), n && r.a.createElement(_.b, null), r.a.createElement(R, null, F._({
						"*": "{number of posts} posts",
						_1: "1 post"
					}, [F._plural(i, "number of posts")], {
						hk: "1Uy96U"
					})), r.a.createElement(_.b, null), r.a.createElement(R, null, F._("created {time}", [F._param("time", r.a.createElement(k.d, {
						seconds: e.createdAtUTC
					}))], {
						hk: "2cUc5m"
					}))), o && r.a.createElement("div", {
						className: T.a.onHoverActionText
					}, r.a.createElement("span", null, o)))
				}
			}
			var V = Object(a.b)(B)(D),
				W = s("./src/reddit/helpers/trackers/postCollection.ts"),
				G = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less"),
				U = s.n(G);
			const H = `${o.a.assetPath}/img/snoo-drafts.png`,
				K = S.a.div("TopRow", U.a),
				J = S.a.div("TitleRow", U.a),
				q = S.a.div("DetailsContainer", U.a),
				Q = S.a.wrapped(O.a, "ButtonRow", U.a),
				X = S.a.div("CloseWrapper", U.a),
				z = S.a.wrapped(f.a, "Close", U.a),
				Y = S.a.div("Empty", U.a),
				Z = S.a.img("EmptyImage", U.a),
				$ = S.a.p("EmptyText", U.a),
				ee = S.a.div("FilterWrapper", U.a),
				te = S.a.wrapped(h.a, "FilterInput", U.a),
				se = S.a.wrapped(x.a, "SearchIcon", U.a),
				oe = S.a.wrapped(C.a, "PlusIcon", U.a),
				ne = S.a.wrapped(b.p, "CreateCollectionButton", U.a),
				ie = Object(d.a)((e, t) => {
					const s = t.toLowerCase();
					return e.filter(e => e.title.toLowerCase().includes(s))
				}),
				re = Object(l.c)({
					collections: v.v
				}),
				ae = Object(a.b)(re, (e, {
					postId: t,
					isOverlay: s
				}) => ({
					onOpenCreateCollectionModal: () => {
						let o = g.b;
						t && (o = Object(g.u)(t, !!s)), e(Object(p.z)(o))
					}
				}));
			class le extends r.a.PureComponent {
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
					}, this.renderItem = e => r.a.createElement(V, {
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
					return r.a.createElement(Y, null, r.a.createElement(Z, {
						src: H
					}), r.a.createElement($, null, n.fbt._("Your collections will live here", null, {
						hk: "FCxWg"
					})))
				}
				renderNoFilterMatches() {
					return r.a.createElement(Y, null, r.a.createElement($, null, n.fbt._("No collection matching filter", null, {
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
						const t = ie(e, this.state.filterStr);
						s = 0 === t.length ? this.renderNoFilterMatches() : t.map(this.renderItem)
					}
					return r.a.createElement("div", {
						className: U.a.wrapper,
						"data-redditstyle": !0
					}, r.a.createElement(K, null, r.a.createElement(J, {
						"data-redditstyle": !0
					}, t || n.fbt._("My collections", null, {
						hk: "3yKovS"
					}), r.a.createElement(X, {
						onClick: this.close
					}, r.a.createElement(z, {
						"data-redditstyle": !0
					}))), r.a.createElement(ee, null, r.a.createElement(se, null), r.a.createElement(te, {
						placeholder: n.fbt._("Find a collection", null, {
							hk: "3DbFBU"
						}),
						value: this.state.filterStr,
						onChange: this.onFilterStringChange
					}))), r.a.createElement(q, null, s), r.a.createElement(Q, null, r.a.createElement(ne, {
						onClick: this.handleCreateCollectionClicked
					}, r.a.createElement(oe, null), n.fbt._("Create a collection", null, {
						hk: "37xJVm"
					}))))
				}
			}
			const ce = Object(c.a)(ae(Object(m.c)(le)));
			t.a = ce
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
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				c = s("./src/lib/formatApiError/index.ts"),
				d = s("./src/reddit/actions/postCollection/index.ts"),
				p = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = s("./src/reddit/constants/postCreation.ts"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/controls/ErrorText/index.tsx"),
				h = s("./src/reddit/controls/Input/index.tsx"),
				f = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				C = s("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				x = s("./src/reddit/icons/svgs/Close/index.tsx"),
				O = s("./src/reddit/layout/row/Inline/index.tsx"),
				g = s("./src/reddit/selectors/postCollection.ts"),
				v = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less"),
				_ = s.n(v),
				k = s("./src/lib/lessComponent.tsx");
			const E = k.a.div("Container", _.a),
				j = k.a.div("Content", _.a),
				P = k.a.div("TitleRow", _.a),
				I = k.a.div("Details", _.a),
				w = k.a.wrapped(p.g, "Footer", _.a),
				y = k.a.wrapped(u.o, "CancelButton", _.a),
				T = k.a.div("CloseWrapper", _.a),
				S = k.a.wrapped(x.a, "CloseIcon", _.a),
				F = k.a.label("Label", _.a),
				M = k.a.wrapped(h.a, "TitleInput", _.a),
				N = k.a.wrapped(C.a, "AddCollectionIcon", _.a),
				L = k.a.wrapped(u.l, "PrimaryActionButton", _.a),
				A = k.a.wrapped(f.a, "LoadingIcon", _.a),
				R = k.a.wrapped(b.b, "ErrorText", _.a),
				B = Object(a.c)({
					collection: g.q,
					error: g.c,
					isPending: g.g
				}),
				D = Object(r.b)(B, (e, t) => ({
					onCreate: (t, s) => e(Object(d.b)(t, s)),
					onUpdate: s => e(Object(d.h)(t.collectionId, s))
				}));
			class V extends i.a.PureComponent {
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
					} = this.props, n = !e, r = !!this.state.collectionTitle.trim(), a = n ? o.fbt._("Create", null, {
						hk: "Ijp7n"
					}) : o.fbt._("Save", null, {
						hk: "4yMsMq"
					});
					return i.a.createElement(E, null, i.a.createElement(T, {
						onClick: this.props.onCancel
					}, i.a.createElement(S, null)), i.a.createElement(j, null, n && i.a.createElement(i.a.Fragment, null, i.a.createElement(P, null, i.a.createElement(N, null), o.fbt._("Create a collection", null, {
						hk: "3ndxk5"
					})), i.a.createElement(I, null, o.fbt._("Group posts into one feed. Create a series of events or just a group of random things. Make something awesome!", null, {
						hk: "2eCAQw"
					}))), i.a.createElement(F, null, n ? o.fbt._("Give a title for your collection", null, {
						hk: "Uaqbe"
					}) : o.fbt._("Edit title", null, {
						hk: "1jzweg"
					}), i.a.createElement(M, {
						maxLength: m.e,
						onChange: this.onTitleChange,
						placeholder: o.fbt._("Enter title", null, {
							hk: "3B0iRI"
						}),
						value: this.state.collectionTitle
					}))), i.a.createElement(w, null, i.a.createElement(O.a, null, i.a.createElement(y, {
						onClick: this.props.onCancel
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), i.a.createElement(L, {
						onClick: this.onPrimaryButtonClick,
						disabled: s || !r
					}, s ? i.a.createElement(A, {
						sizePx: 10
					}) : a)), t && i.a.createElement(R, null, Object(c.a)(t))))
				}
			}
			t.a = Object(l.a)(D(V))
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
				return E
			}));
			var o, n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/higherOrderComponents/asModal/index.tsx"),
				p = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				u = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				b = s("./src/reddit/components/FlairPreview/index.tsx"),
				h = s("./src/reddit/components/FlairSearch/index.tsx"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				C = s("./src/reddit/helpers/trackers/postComposer.ts"),
				x = s("./src/reddit/models/Flair/index.ts"),
				O = s("./src/reddit/selectors/postFlair.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				_ = s("./src/reddit/components/PostFlairPicker/index.m.less"),
				k = s.n(_);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(o || (o = {}));
			const E = (e, t = !1, s = o.UNSET) => `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${s}]`,
				j = Object(l.c)({
					flairData: O.d,
					subreddit: g.S
				});
			class P extends r.a.Component {
				constructor(e) {
					super(e), this.trackEvent = () => {
						this.props.sendEvent(Object(C.F)(this.props.subredditId))
					}, this.onApply = () => {
						const {
							previewFlair: e
						} = this.state, t = e && e.templateId;
						this.props.onFlairChanged({
							previewFlair: e,
							selectedTemplateId: t
						}), this.props.closeModal && this.props.closeModal(), this.trackEvent()
					}, this.onClear = () => {
						this.props.sendEvent(Object(C.b)()), this.setSelectedFlair(null)
					}, this.setSelectedFlair = e => {
						this.setState({
							previewFlair: e
						})
					};
					const t = Object(v.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, s = Object(v.c)(this.props.flairs) || null;
					return Object(v.b)(e, t, s)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: s,
						flairData: o,
						subreddit: i
					} = e, a = i.displayText, {
						templates: l,
						templateIds: c
					} = o, {
						canSave: d
					} = this.canSave();
					return r.a.createElement(u.a, {
						className: s
					}, r.a.createElement(m.a, {
						onClosePressed: e.closeModal,
						title: n.fbt._("Select {subredditName} flair", [n.fbt._param("subredditName", a)], {
							hk: "1lDMWS"
						})
					}), r.a.createElement(b.a, {
						flair: t,
						flairTemplateType: x.d.LinkFlair,
						placeholderText: n.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), r.a.createElement(h.a, {
						flair: t,
						flairTemplateType: x.d.LinkFlair,
						subredditId: i.id,
						templates: l,
						templateIds: c,
						onChange: this.setSelectedFlair
					}), r.a.createElement("div", {
						className: k.a.buttonsRow
					}, r.a.createElement(f.l, {
						disabled: !d,
						onClick: this.onApply
					}, n.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), r.a.createElement(f.o, {
						className: k.a.clearButton,
						onClick: this.onClear
					}, n.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const I = Object(a.b)(j, (e, t) => ({
				closeModal: () => e(Object(p.i)(t.modalId))
			}))(P);
			t.a = Object(d.a)(Object(c.c)(I))
		},
		"./src/reddit/components/PostModModeDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const i = () => null;
			t.a = Object(o.a)({
				ErrorComponent: i,
				getComponent: () => Object(n.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.tsx"))).then(e => e.default),
				LoadingComponent: i
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
				return xe
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				c = s("./src/telemetry/index.ts"),
				d = s("./node_modules/uuid/v4.js"),
				p = s.n(d),
				m = s("./src/config.ts"),
				u = s("./src/lib/addQueryParams/index.ts"),
				b = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/lessComponent.tsx"),
				f = s("./src/reddit/actions/eventPosts/index.ts"),
				C = s("./src/reddit/actions/gold/modals.ts"),
				x = s("./src/reddit/actions/modal.ts"),
				O = s("./src/reddit/actions/pinnedPost.ts"),
				g = s("./src/reddit/actions/post.ts"),
				v = s("./src/reddit/actions/postCreation/editing.ts"),
				_ = s("./src/reddit/actions/reportFlow/index.ts"),
				k = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				E = s("./src/reddit/constants/oneFeed.ts"),
				j = s("./src/reddit/constants/parameters.ts"),
				P = s("./src/reddit/constants/posts.ts"),
				I = s("./src/reddit/hooks/useRecommendationPostContext.ts");

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var y = function(e) {
					function t(t) {
						const s = Object(I.a)();
						return i.createElement(e, w({}, t, {
							recommendationPostContext: s
						}))
					}
					const s = e.displayName || e.name || "Component";
					return t.displayName = `withRecommendationPostContext(${s})`, t
				},
				T = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				S = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				F = s("./src/reddit/icons/fonts/index.tsx"),
				M = s("./src/reddit/components/OverflowMenu/index.tsx"),
				N = s("./src/reddit/components/ReportFlow/index.tsx"),
				L = s("./src/reddit/contexts/PageLayer/index.tsx"),
				A = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				R = s("./src/reddit/controls/Dropdown/Row.tsx"),
				B = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				D = s("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				V = s("./src/reddit/components/Flatlist/constants.ts"),
				W = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				G = s("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				U = s("./src/reddit/constants/postLayout.ts"),
				H = s("./src/reddit/helpers/correlationIdTracker.ts"),
				K = s("./src/reddit/helpers/isCrosspost.ts"),
				J = s("./src/reddit/helpers/postEvent.ts"),
				q = s("./src/reddit/helpers/trackers/post.ts"),
				Q = s("./src/reddit/models/Post/index.ts"),
				X = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				z = s("./src/reddit/models/Subreddit/index.ts"),
				Y = s("./src/reddit/selectors/activeModalId.ts"),
				Z = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				$ = s("./src/reddit/selectors/posts.ts"),
				ee = s("./src/reddit/selectors/subreddit.ts"),
				te = s("./src/reddit/selectors/user.ts"),
				se = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				oe = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				ne = s("./src/reddit/components/ReportFlow/new.tsx"),
				ie = s("./src/reddit/actions/postCollection/index.ts"),
				re = s("./src/reddit/contexts/Post/index.tsx"),
				ae = s("./src/reddit/helpers/trackers/postCollection.ts"),
				le = s("./src/reddit/models/PostCreationForm/index.ts"),
				ce = s("./src/reddit/selectors/postCollection.ts"),
				de = s("./node_modules/react-router/esm/react-router.js"),
				pe = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				me = s("./src/reddit/components/ModalStyledComponents/MessageBox.tsx");
			const ue = Object(de.i)(({
				post: e,
				toggleConfirmDelete: t,
				handleDeletePost: s,
				location: n
			}) => {
				const {
					isPrediction: i,
					resolvedOptionId: a,
					totalVoteCount: l
				} = e.pollData || {}, c = i ? o.fbt._("Are you sure?", null, {
					hk: "2mIMwE"
				}) : o.fbt._("Delete post?", null, {
					hk: "3g7QoX"
				}), d = r.a.useMemo(() => {
					const e = l || 0;
					return i ? 0 === e ? o.fbt._("Deleting this post will cancel any predictions that have been made.", null, {
						hk: "1OCTd3"
					}) : 1 === e ? o.fbt._("Deleting this post will cancel the 1 prediction that have already been made.", null, {
						hk: "1MnrUP"
					}) : o.fbt._("Deleting this post will cancel the {votedUsersCount} predictions that have already been made.", [o.fbt._param("votedUsersCount", e.toString())], {
						hk: "1jBXxs"
					}) : o.fbt._("Are you sure you want to delete your post? You can't undo this.", null, {
						hk: "2eDKWP"
					})
				}, [i, l]), p = i ? o.fbt._("Delete", null, {
					hk: "3NNdm0"
				}) : o.fbt._("Delete post", null, {
					hk: "28hc1p"
				});
				return i && a ? r.a.createElement(me.a, {
					title: o.fbt._("This post can't be deleted", null, {
						hk: "1sZ013"
					}),
					body: o.fbt._("Sorry about that. Once a prediction has been resolved, you can't delete the post.", null, {
						hk: "32l6dr"
					}),
					onClose: t
				}) : r.a.createElement(pe.a, {
					withOverlay: !0,
					toggleModal: t,
					onConfirm: () => s(n),
					onOverlayClick: t,
					actionText: p,
					headerText: c,
					modalText: d
				})
			});
			var be = s("./src/reddit/components/PostOverflowMenu/index.m.less"),
				he = s.n(be);
			const fe = h.a.wrapped(R.b, "DropdownRow", he.a),
				Ce = p()(),
				xe = ({
					gild: e = !0,
					save: t = !0,
					share: s = !0,
					report: o = !0,
					editPost: n = !0,
					hide: i = !0
				}) => ({
					[V.a.Gild]: e,
					[V.a.Save]: t,
					[V.a.Share]: s,
					[V.a.Report]: o,
					[V.a.EditPost]: n,
					[V.a.Hide]: i
				}),
				Oe = Object(a.b)(() => Object(l.c)({
					claimedFreeAward: Z.b,
					isFutureEvent: ce.i,
					isPinned: $.q,
					subredditAboutInfo: $.H,
					reportFlowIsOpen: (e, {
						isOverlay: t,
						postId: s
					}) => {
						var o, n, i, r;
						return (null === (n = null === (o = e.features) || void 0 === o ? void 0 : o.reportFlow) || void 0 === n ? void 0 : n.openedFromModalPage) === t && (null === (r = null === (i = e.features) || void 0 === i ? void 0 : i.reportFlow) || void 0 === r ? void 0 : r.postOrCommentId) === s
					},
					showPinAction: (e, {
						isProfilePostListing: t,
						userIsOp: s,
						post: o,
						pageLayer: n
					}) => Object(L.E)(e, {
						pageLayer: n
					}) && t && s && Object(te.xb)(e, {
						userName: o.author
					}),
					hasSubredditRules: ee.h,
					isPostPartOfACollection: ce.k,
					shouldRenderCollectionEditButtons: (e, {
						post: t,
						subredditOrProfile: s
					}) => {
						if (t.isSponsored) return !1;
						if (!s) return !1;
						const o = s.type === z.f.User;
						return Object(ce.r)(e, s.name, o)
					},
					reportingRevampEnabled: se.a,
					videoShareModalOpen: (e, {
						postId: t
					}) => Object(Y.a)(e) === Object(G.a)(t)
				}), (e, {
					postId: t,
					isOverlay: s,
					isCommentsPage: o
				}) => ({
					onCopyLink: t => e(Object(g.D)(t)),
					onDelete: o => e(Object(g.N)(t, o, s)),
					onDistinguishPost: s => e(Object(g.v)(t, s)),
					onGildClick: (s, o) => e(Object(C.d)({
						awardId: o,
						correlationId: s,
						thingId: t
					})),
					onToggleSave: () => e(Object(g.U)(t)),
					onToggleNSFW: () => e(Object(g.G)(t)),
					onToggleOC: () => e(Object(g.J)(t)),
					onTogglePinned: () => e(Object(O.i)(t)),
					onToggleSpoiler: () => e(Object(g.db)(t)),
					onHide: o => e(Object(g.eb)(t, !o, s, !0)),
					onReportClick: () => e(Object(_.c)(t, s)),
					onStartEventNow: () => {
						e((e, t) => Object(c.a)(Object(S.l)()(t()))), e(Object(f.startEventNowRequested)(t))
					},
					onEdit: () => {
						const n = !s && !o;
						e(Object(v.a)(t, n))
					},
					onFlairPost: () => e(Object(x.i)(Object(oe.b)(t, s))),
					onToggleSendReplies: () => e(Object(g.V)(t)),
					showCollectionsList: (t, o) => {
						e(Object(ie.e)(t)).then(() => {
							const t = Object(le.t)(o, s);
							e(x.i(t))
						})
					},
					onToggleVideoShareModal: () => e(Object(x.i)(Object(G.a)(t)))
				}));
			class ge extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						isConfirmDeleteOpen: !1
					}, this.handlePostEvent = (e, t) => {
						const {
							isOverlay: s,
							post: o,
							sendEvent: n
						} = this.props;
						n(Object(q.h)(o.id, e, s ? "post_detail" : "post", void 0, void 0, void 0, null == t ? void 0 : t.referralId))
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
						s(Object(q.k)(e)), t(E.a.SeeFewerPostsView)
					}, this.onShowMoreOfClick = () => {
						const {
							postId: e,
							recommendationPostContext: {
								setRecommendationFooterView: t
							},
							sendEvent: s
						} = this.props;
						s(Object(q.l)(e)), t(E.a.ThankYouView)
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
						this.handlePostEvent(this.props.isPinned ? "unpin" : "pin"), this.props.isPinned ? this.props.sendEvent(Object(q.o)(this.props.post.id)) : this.props.sendEvent(Object(q.e)(this.props.post.id)), this.props.onTogglePinned()
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
						if (!t.ignoreBreakpoints && t.useFlatlistBreakpoints[e]) return Object(W.b)({
							breakpointType: W.a.HideIfVWLarger,
							flatlistItem: e,
							isLoggedIn: !!t.currentUser,
							isUserOp: t.userIsOp
						})
					}, this.getBreakpointCx = (e, t) => Object(D.b)({
						breakpointType: W.a.HideIfVWLarger,
						flatlistItem: e,
						postLayout: t
					}), this.handleAddToCollection = () => {
						const {
							isPostPartOfACollection: e,
							showCollectionsList: t,
							post: s,
							sendEvent: o
						} = this.props;
						e || (o(Object(ae.b)(s.id)), t(s.belongsTo.id, s.id))
					}, this.onCloseShareModal = e => {
						e && (this.handlePostEvent("copy_link", {
							referralId: Ce
						}), this.props.onCopyLink(e)), this.props.onToggleVideoShareModal()
					}, this.renderReportFlow = () => this.props.reportingRevampEnabled ? r.a.createElement(ne.a, {
						withOverlay: !0,
						overlayCustomStyles: N.b,
						postId: this.props.postId,
						timestamp: this.context.currentTime
					}) : r.a.createElement(N.a, {
						withOverlay: !0,
						overlayCustomStyles: N.b,
						postId: this.props.postId,
						timestamp: this.context.currentTime
					})
				}
				getOverflowMenuBreakpointClass() {
					const {
						props: e
					} = this, t = e.layout === U.g.Classic;
					if (!(e.ignoreBreakpoints || e.ignoreOverflowMenuBreakpoints || e.modModeWithPost || e.userIsOp || !e.isCommentsPage && !t || e.isRecommendationPost)) return Object(W.b)({
						breakpointType: W.a.HideIfVWLarger,
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
						isOverlay: i,
						isPinned: a,
						isRecommendationPost: l,
						layout: c,
						onStartEventNow: d,
						post: p,
						shouldRenderCollectionEditButtons: u,
						showEditFlair: b,
						showPinAction: h,
						toggleAddEventStartTimeModal: f,
						toggleEditStartTimeModal: C,
						userIsOp: x
					} = e, O = e.currentUser && e.currentUser.isEmployee, g = Object(K.a)(e.post), v = e.post.belongsTo.type === P.a.PROFILE || Object(z.g)(e.subredditAboutInfo), _ = e.post.belongsTo.type === P.a.PROFILE || Object(z.i)(e.subredditAboutInfo), k = t && p.isGildable, E = Object(J.a)(e.post), j = i ? void 0 : c;
					return r.a.createElement("div", null, k && r.a.createElement(fe, {
						className: this.getBreakpointClass(V.a.Gild),
						displayText: o.fbt._("Give Award", null, {
							hk: "3mYeGJ"
						}),
						onClick: this.handleGild
					}, r.a.createElement(F.a, {
						name: "award",
						className: he.a.Icon
					})), l && r.a.createElement(r.a.Fragment, null, r.a.createElement(fe, {
						className: this.getBreakpointClass(V.a.ShowMoreLikeThis),
						displayText: o.fbt._("Show more posts like this", null, {
							hk: "2t0WMg"
						}),
						onClick: this.onShowMoreOfClick
					}, r.a.createElement(F.a, {
						name: "checkmark",
						className: he.a.Icon
					})), r.a.createElement(fe, {
						className: this.getBreakpointClass(V.a.ShowFewerLikeThis),
						displayText: o.fbt._("Show fewer posts like this", null, {
							hk: "k9sBL"
						}),
						onClick: this.onShowFewerOfClick
					}, r.a.createElement(F.a, {
						name: "hide",
						className: he.a.Icon
					}))), r.a.createElement(fe, {
						className: this.getBreakpointClass(V.a.Share),
						displayText: o.fbt._("Copy link", null, {
							hk: "ETZxA"
						}),
						onClick: () => {
							const {
								permalink: t,
								post: s
							} = e;
							s && Object(Q.p)(s) ? (e.onToggleVideoShareModal(), this.handlePostEvent("share")) : (this.handlePostEvent("share_copy"), e.onCopyLink(t))
						}
					}, r.a.createElement(F.a, {
						name: "link_post",
						className: he.a.Icon
					})), r.a.createElement(fe, {
						className: this.getBreakpointClass(V.a.Share),
						displayText: o.fbt._("Embed", null, {
							hk: "3u0v6r"
						}),
						onClick: () => {
							this.handlePostEvent("share_embed"), window.open(`${m.a.rebedMediaUrl}/embed?url=${e.post.permalink}`, "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, r.a.createElement(F.a, {
						name: "embed",
						className: he.a.Icon
					})), e.showEditPost && !Object(X.b)(this.props.post) && r.a.createElement(fe, {
						className: this.getBreakpointClass(V.a.EditPost),
						displayText: o.fbt._("Edit post", null, {
							hk: "3gVzz0"
						}),
						onClick: this.handleEdit,
						isSelected: e.post.hidden
					}, r.a.createElement(F.a, {
						name: "edit",
						className: he.a.Icon
					})), b && r.a.createElement(fe, {
						className: this.getBreakpointCx(B.a.Flair, j),
						displayText: o.fbt._("Edit Post Flair", null, {
							hk: "1pGISD"
						}),
						onClick: e.onFlairPost,
						isSelected: e.post.hidden
					}, r.a.createElement(F.a, {
						name: "tag",
						className: he.a.Icon
					})), r.a.createElement(fe, {
						className: this.getBreakpointClass(V.a.Save),
						displayText: e.post.saved ? o.fbt._("unsave", null, {
							hk: "HDDPm"
						}) : o.fbt._("save", null, {
							hk: "3bg2gs"
						}),
						onClick: this.toggleSave,
						isSelected: e.post.saved
					}, r.a.createElement(F.a, {
						name: e.post.saved ? "saved" : "save",
						className: he.a.Icon
					})), h && r.a.createElement(fe, {
						displayText: a ? o.fbt._("Unpin Post from Profile", null, {
							hk: "6DYfk"
						}) : o.fbt._("Pin Post to Profile", null, {
							hk: "2RWbNF"
						}),
						onClick: this.togglePinned
					}, r.a.createElement(F.a, {
						name: "pin",
						className: he.a.Icon,
						isFilled: this.props.isPinned
					})), !e.post.isSponsored && r.a.createElement(fe, {
						className: this.getBreakpointClass(V.a.Hide),
						displayText: e.post.hidden ? o.fbt._("unhide", null, {
							hk: "1P4IxC"
						}) : o.fbt._("hide", null, {
							hk: "48yKzW"
						}),
						onClick: this.toggleHide,
						isSelected: e.post.hidden
					}, r.a.createElement(F.a, {
						name: "hide",
						className: he.a.HideIcon
					})), !e.post.isSponsored && !x && r.a.createElement(fe, {
						className: this.getBreakpointClass(V.a.Report),
						displayText: o.fbt._("report", null, {
							hk: "128RPn"
						}),
						onClick: this.handleReport
					}, r.a.createElement(F.a, {
						name: "report",
						className: he.a.Icon
					})), u && s && d && r.a.createElement(fe, {
						onClick: d,
						displayText: o.fbt._("Start event now", null, {
							hk: "3VomTN"
						})
					}, r.a.createElement(F.a, {
						name: "live",
						className: he.a.Icon
					})), u && s && C && r.a.createElement(fe, {
						onClick: C,
						displayText: o.fbt._("Edit start time", null, {
							hk: "2typ17"
						})
					}, r.a.createElement(F.a, {
						name: "scheduled",
						className: he.a.Icon
					})), u && !E && f && r.a.createElement(fe, {
						displayText: o.fbt._("Add event start time", null, {
							hk: "1XXqzu"
						}),
						onClick: f
					}, r.a.createElement(F.a, {
						name: "scheduled",
						className: he.a.Icon
					})), u && r.a.createElement(fe, {
						className: this.props.isPostPartOfACollection ? he.a.disabledRow : void 0,
						displayText: o.fbt._("Add to collection", null, {
							hk: "3UNHgN"
						}),
						onClick: this.handleAddToCollection,
						noHover: this.props.isPostPartOfACollection
					}, r.a.createElement(F.a, {
						name: "collection",
						className: he.a.Icon
					})), x && r.a.createElement(fe, {
						displayText: o.fbt._("delete", null, {
							hk: "4kSfzC"
						}),
						onClick: this.toggleDeleteConfirmation
					}, r.a.createElement(F.a, {
						name: "delete",
						className: he.a.Icon
					})), O && e.userIsOp && r.a.createElement(fe, {
						displayText: e.post.distinguishType === n.G.ADMIN ? o.fbt._("undistinguish", null, {
							hk: "2chGON"
						}) : o.fbt._("Distinguish as admin", null, {
							hk: "2xltiM"
						}),
						onClick: () => e.post.distinguishType === n.G.ADMIN ? e.onDistinguishPost(n.G.NONE) : e.onDistinguishPost(n.G.ADMIN)
					}, r.a.createElement(F.a, {
						name: "admin",
						className: he.a.Icon
					})), x && v && !g && r.a.createElement(A.a, {
						text: o.fbt._("Mark as OC", null, {
							hk: "2vGyoC"
						}),
						onClick: this.toggleOC,
						isSelected: this.props.post.isOriginalContent
					}), x && _ && r.a.createElement(A.a, {
						text: o.fbt._("Mark as Spoiler", null, {
							hk: "3PJk7A"
						}),
						onClick: this.toggleSpoiler,
						isSelected: this.props.post.isSpoiler
					}), x && r.a.createElement(A.a, {
						text: o.fbt._("Mark as NSFW", null, {
							hk: "4qK6JN"
						}),
						onClick: this.toggleNSFW,
						isSelected: this.props.post.isNSFW
					}), e.userIsOp && r.a.createElement(A.a, {
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
					return r.a.createElement("div", null, r.a.createElement(M.b, {
						className: Object(b.a)(he.a.overflowMenu, this.getOverflowMenuBreakpointClass(), e.className),
						dropdownId: e.dropdownId,
						isFixed: e.isFixed,
						layout: e.layout,
						onClick: this.handleClickMenuButton
					}, this.renderDropdownIcons()), e.reportFlowIsOpen && e.subredditOrProfile && e.hasSubredditRules && this.renderReportFlow(), this.state.isConfirmDeleteOpen && r.a.createElement(ue, {
						post: this.props.post,
						toggleConfirmDelete: this.toggleDeleteConfirmation,
						handleDeletePost: this.handleDeletePost
					}), e.videoShareModalOpen && r.a.createElement(G.b, {
						className: he.a.modalBody,
						onClose: this.onCloseShareModal,
						withOverlay: !1,
						url: Object(u.a)(Object(T.a)(e.postId), {
							[j.r]: Ce,
							utm_source: "share",
							utm_medium: "web2x",
							utm_content: "rpan_stream"
						})
					}))
				}
			}
			ge.contextType = k.a;
			t.a = y(Object(re.e)(Oe(ge)))
		},
		"./src/reddit/constants/postCreation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "g", (function() {
				return c
			}));
			const o = "PostCreation-AddEventButton",
				n = 500,
				i = "PostCreation-CollectionEducationTooltip",
				r = "PostCreation-EventEducationTooltip",
				a = 300,
				l = a,
				c = "PostCreation-AddToCollectionButton"
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/controls/Input/index.m.less"),
				i = s.n(n);
			t.a = o.a.input("input", i.a)
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
				i = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = s.n(r);
			t.a = ({
				center: e,
				className: t,
				sizePx: s = 10
			}) => n.a.createElement("div", {
				className: Object(i.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${s}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/helpers/trackers/freeAwardOffer.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			}));
			var o = s("./src/reddit/helpers/correlationIdTracker.ts"),
				n = s("./src/reddit/helpers/trackers/goldPayment.ts"),
				i = s("./src/reddit/models/Gold/ProductOffer.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					...Object(n.h)(e, {
						offerContext: i.a.StorefrontFreeAward
					}),
					correlationId: Object(o.e)(o.a.GoldPayment, !1),
					profile: r.S(e),
					subreddit: r.jb(e)
				}),
				l = () => e => ({
					source: "free_award_offer",
					action: "view",
					noun: "page",
					...a(e)
				}),
				c = e => t => ({
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
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(i.a)(Object(r.b)("share", e.isFilled), l.a.shareIcon, e.className)
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
		"./src/reddit/selectors/eventPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return i
			})), s.d(t, "f", (function() {
				return r
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			var o = s("./src/lib/makeListingKey/index.ts"),
				n = s("./src/reddit/selectors/posts.ts");
			const i = (e, {
					subredditName: t
				}) => Object(o.a)("ModhubPage-EventPosts", "timeline", {
					subredditName: t
				}),
				r = (e, t) => {
					const s = i(e, t);
					return Object(n.N)(e, {
						listingKey: s
					}) || []
				},
				a = (e, t) => {
					const s = i(e, t);
					return !!e.listings.postOrder.api.pending[s]
				},
				l = (e, t) => {
					const s = i(e, t);
					return !!(e.listings.postOrder.ids[s] || []).length
				},
				c = (e, t) => {
					const s = i(e, t),
						o = e.listings.postOrder.pageInfo[s];
					return !(!o || !o.hasNextPage)
				},
				d = (e, t) => {
					const s = i(e, t),
						o = e.listings.postOrder.pageInfo[s];
					return o && o.endCursor || null
				}
		},
		"./src/redditGQL/operations/EventPostsBySubredditName.json": function(e) {
			e.exports = JSON.parse('{"id":"8397d27a1d2c"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956.08e2e9faac55da34ec0b.js.map