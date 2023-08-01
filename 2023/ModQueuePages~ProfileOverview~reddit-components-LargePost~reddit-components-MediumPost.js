// https://www.redditstatic.com/desktop2x/ModQueuePages~ProfileOverview~reddit-components-LargePost~reddit-components-MediumPost.eee2dc13594180fe583f.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueuePages~ProfileOverview~reddit-components-LargePost~reddit-components-MediumPost"], {
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/bulkActions/constants.ts");
			const a = Object(n.a)(o.c),
				r = Object(n.a)(o.b),
				i = Object(n.a)(o.a)
		},
		"./src/reddit/actions/modQueue/realtime.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			})), s.d(t, "c", (function() {
				return N
			})), s.d(t, "b", (function() {
				return M
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				o = (s("./src/redditGQL/operations/LastModActionInSubreddit.json"), s("./src/redditGQL/operations/ModActivitySummaryByID.json")),
				a = s("./src/redditGQL/operations/SingleCommentById.json"),
				r = s("./src/redditGQL/operations/SinglePostInfoById.json");
			var i = s("./src/lib/initializeClient/installReducer.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/reddit/actions/comment/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/users.ts"),
				m = s("./src/reddit/endpoints/redditor/index.ts"),
				p = s("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				b = s("./src/reddit/helpers/graphql/normalizeModActivityFromGql/index.ts"),
				f = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				h = s("./src/reddit/helpers/isPost.ts"),
				v = s("./src/reddit/reducers/features/modActivitySummaries/index.ts"),
				O = s("./src/reddit/reducers/features/realtimeModqueue/index.ts"),
				k = s("./src/reddit/actions/modQueue/constants.ts");
			var _ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.o:
							return t.payload;
						default:
							return e
					}
				},
				E = s("./src/reddit/reducers/pages/modHub/index.ts"),
				x = s("./src/reddit/selectors/modQueue.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				y = s("./src/redditGQL/types.ts");
			Object(i.a)({
				pages: {
					modHub: E.a
				}
			}), Object(i.a)({
				features: {
					modActivitySummaries: v.a
				}
			}), Object(i.a)({
				features: {
					realtimeModqueue: O.a
				}
			}), Object(i.a)({
				features: {
					realtimeUpdateAnimationId: _
				}
			});
			const R = Object(d.a)(k.l),
				j = e => async (t, s, a) => {
					let {
						gqlContext: r
					} = a;
					const i = await ((e, t) => Object(n.a)(e, {
							...o,
							variables: t
						}))(r(), {
							id: e
						}),
						d = Object(b.a)(i.body.data.subredditInfoById);
					t(R(d))
				}, C = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					e && t(j(e))
				}, w = Object(d.a)(k.m), A = (e, t) => {
					const s = (e => {
							var t, s;
							const {
								subredditName: n,
								pageName: o
							} = (null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || {}, a = (null === (s = e.platform.currentPage) || void 0 === s ? void 0 : s.queryParams) || {};
							return {
								page: (null == a ? void 0 : a.page) || "1",
								pageName: o,
								subredditName: n || (null == a ? void 0 : a.subreddit),
								queryParams: a
							}
						})(e),
						n = Object(x.d)(e, s);
					return null == n ? void 0 : n.includes(t)
				}, S = [y.y.ApproveComment, y.y.ApproveLink, y.y.RemoveComment, y.y.RemoveLink, y.y.SpamComment, y.y.SpamLink], N = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					var a, r;
					const {
						moderatorID: i,
						targetID: d,
						action: c
					} = null === (a = null == e ? void 0 : e.subscribe) || void 0 === a ? void 0 : a.data, l = s(), p = Object(g.k)(l), b = S.includes(c), f = i === p, h = A(l, d);
					if (!b || f || !h) return;
					const v = await Object(m.b)(o(), {
						id: i
					}) || (null === (r = Object(g.Cb)(l, {
						userId: i
					})) || void 0 === r ? void 0 : r.username);
					v && t(Object(u.z)(v)), t(w({
						targetID: d
					}))
				}, I = Object(d.a)(k.p), P = Object(d.a)(k.o), M = e => async (t, s, o) => {
					let {
						gqlContext: i
					} = o;
					var d, u, m, b, v, O;
					const k = Object(h.a)(e),
						_ = s(),
						E = null === (u = null === (d = null == _ ? void 0 : _.features) || void 0 === d ? void 0 : d.realtimeModqueue) || void 0 === u ? void 0 : u.toUpdate.includes(e),
						x = A(_, e);
					if (!E || !x) return;
					const g = k ? () => ((e, t) => Object(n.a)(e, {
							...r,
							variables: t
						}))(i(), {
							id: e
						}) : () => ((e, t) => Object(n.a)(e, {
							...a,
							variables: t
						}))(i(), {
							id: e
						}),
						y = await g();
					if (y.ok) {
						if (k) {
							const s = null === (b = null === (m = null == y ? void 0 : y.body) || void 0 === m ? void 0 : m.data) || void 0 === b ? void 0 : b.postInfoById;
							t(Object(l.Q)({
								[e]: Object(f.f)(s)
							}))
						} else {
							const s = null === (O = null === (v = null == y ? void 0 : y.body) || void 0 === v ? void 0 : v.data) || void 0 === O ? void 0 : O.commentById;
							t(Object(c.j)({
								[e]: Object(p.a)(s)
							}))
						}
						t(P(e)), t(I({
							targetID: e
						}))
					}
				}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "removalReasonsPending", (function() {
				return Y
			})), s.d(t, "removalReasonsLoaded", (function() {
				return ee
			})), s.d(t, "removalReasonsFailed", (function() {
				return te
			})), s.d(t, "removalReasonsRequested", (function() {
				return se
			})), s.d(t, "removalReasonAddedPending", (function() {
				return ne
			})), s.d(t, "removalReasonAddedSuccess", (function() {
				return oe
			})), s.d(t, "removalReasonAddedFailed", (function() {
				return ae
			})), s.d(t, "addRemovalReason", (function() {
				return re
			})), s.d(t, "editRemovalReasonPending", (function() {
				return ie
			})), s.d(t, "editRemovalReasonSuccess", (function() {
				return de
			})), s.d(t, "editRemovalReasonFailed", (function() {
				return ce
			})), s.d(t, "editRemovalReason", (function() {
				return le
			})), s.d(t, "deleteRemovalReasonPending", (function() {
				return ue
			})), s.d(t, "deleteRemovalReasonSuccess", (function() {
				return me
			})), s.d(t, "deleteRemovalReasonFailed", (function() {
				return pe
			})), s.d(t, "deleteRemovalReason", (function() {
				return be
			})), s.d(t, "removedItemsSelected", (function() {
				return fe
			})), s.d(t, "fetchReasonsAndOpenModal", (function() {
				return he
			})), s.d(t, "removalReasonSubmittedPending", (function() {
				return ve
			})), s.d(t, "removalReasonSubmittedSuccess", (function() {
				return Oe
			})), s.d(t, "removalReasonSubmittedFailed", (function() {
				return ke
			})), s.d(t, "removalReasonMessagePending", (function() {
				return _e
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return Ee
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return xe
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return ge
			})), s.d(t, "submitRemovalReason", (function() {
				return ye
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return Re
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/initializeClient/installReducer.ts"),
				a = s("./node_modules/redux/es/redux.js");
			const r = "REMOVALREASONS__LOAD_SUCCESS",
				i = "REMOVALREASONS__ADD_PENDING",
				d = "REMOVALREASONS__ADD_SUCCESS",
				c = "REMOVALREASONS__ADD_FAILED",
				l = "REMOVALREASONS__EDIT_PENDING",
				u = "REMOVALREASONS__EDIT_SUCCESS",
				m = "REMOVALREASONS__EDIT_FAILED",
				p = "REMOVALREASONS__DELETE_PENDING",
				b = "REMOVALREASONS__DELETE_SUCCESS",
				f = "REMOVALREASONS__DELETE_FAILED";
			var h = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case r:
					case i:
					case d:
					case l:
					case u:
					case p:
					case b:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case c:
					case m:
					case f:
						return t.payload;
					default:
						return e
				}
			};
			var v = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case i:
						case l:
						case p:
							return !0;
						case r:
						case "REMOVALREASONS__LOAD_FAILED":
						case d:
						case c:
						case u:
						case m:
						case b:
						case f:
							return !1;
						default:
							return e
					}
				},
				O = Object(a.c)({
					error: h,
					pending: v
				});
			const k = {};
			var _ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r: {
						const {
							response: s
						} = t.payload, {
							data: n
						} = s;
						return {
							...e,
							...n
						}
					}
					case d:
					case u: {
						const {
							reason: s
						} = t.payload;
						return {
							...e,
							[s.id]: s
						}
					}
					case b: {
						const {
							reasonId: s
						} = t.payload, {
							[s]: n,
							...o
						} = e;
						return o
					}
					default:
						return e
				}
			};
			const E = {};
			var x = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r: {
						const {
							subredditId: s,
							response: n
						} = t.payload, {
							order: o
						} = n;
						return {
							...e,
							[s]: o
						}
					}
					case d: {
						const {
							subredditId: s,
							reason: n
						} = t.payload;
						return {
							...e,
							[s]: [...e[s], n.id]
						}
					}
					case b: {
						const {
							subredditId: s,
							reasonId: n
						} = t.payload, o = [...e[s]].filter(e => e !== n);
						return {
							...e,
							[s]: o
						}
					}
					default:
						return e
				}
			};
			var g = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__REMOVEDITEMS_SELECTED": {
							const {
								subredditId: e,
								itemIds: s
							} = t.payload;
							return {
								itemIds: s,
								subredditId: e
							}
						}
						default:
							return e
					}
				},
				y = Object(a.c)({
					api: O,
					models: _,
					reasonOrder: x,
					removedItemIds: g
				}),
				R = s("./src/lib/constants/index.ts"),
				j = s("./src/lib/makeActionCreator/index.ts"),
				C = s("./src/lib/makeCommentsPageKey/index.ts"),
				w = s("./src/lib/makeDraftKey/index.ts"),
				A = s("./src/reddit/actions/bulkActions/index.ts"),
				S = s("./src/reddit/actions/comment/index.ts"),
				N = s("./src/reddit/actions/comment/authoring.ts"),
				I = s("./src/reddit/actions/comment/moderation.ts"),
				P = s("./src/reddit/actions/modal.ts"),
				M = s("./src/reddit/actions/post.ts"),
				T = s("./src/reddit/actions/toaster.ts"),
				D = s("./src/reddit/constants/modals.ts"),
				L = s("./src/lib/makeApiRequest/index.ts"),
				F = s("./src/lib/omitHeaders/index.ts"),
				B = s("./src/reddit/constants/headers.ts"),
				U = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				z = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const V = (e, t) => Object(L.a)(Object(F.a)(e, [B.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_reasons/`),
					method: R.nb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				W = (e, t, s) => Object(L.a)(Object(F.a)(e, [B.a]), {
					endpoint: Object(U.a)(Object(z.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`)),
					method: R.nb.POST,
					type: "json",
					data: t
				});
			var Q = s("./src/reddit/helpers/isPost.ts"),
				H = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				q = s("./src/reddit/helpers/routeKey/index.ts"),
				G = s("./src/reddit/models/ModQueue/index.ts"),
				K = s("./src/reddit/models/PostDraft/index.ts"),
				Z = s("./src/reddit/models/RemovalReason/index.ts"),
				$ = s("./src/reddit/models/Toast/index.ts"),
				X = s("./src/reddit/selectors/comments.ts"),
				J = s("./src/reddit/selectors/platform.ts");
			Object(o.a)({
				features: {
					removalReasons: y
				}
			});
			const Y = Object(j.a)("REMOVALREASONS__LOAD_PENDING"),
				ee = Object(j.a)(r),
				te = Object(j.a)("REMOVALREASONS__LOAD_FAILED"),
				se = e => async (t, s, n) => {
					let {
						apiContext: o
					} = n;
					const a = s().subreddits.models[e].name;
					t(Y());
					const r = await ((e, t) => Object(L.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: R.nb.GET
					}))(o(), a);
					r.ok ? t(ee({
						subredditId: e,
						response: r.body
					})) : t(te(r.error))
				}, ne = Object(j.a)(i), oe = Object(j.a)(d), ae = Object(j.a)(c), re = (e, t) => async (s, o, a) => {
					let {
						apiContext: r
					} = a;
					const i = o().subreddits.models[e].name;
					s(ne());
					const d = await ((e, t, s) => Object(L.a)(Object(F.a)(e, [B.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons`),
						method: R.nb.POST,
						data: s
					}))(r(), i, t);
					if (d.ok) {
						const {
							id: o
						} = d.body, a = {
							...t,
							id: o
						};
						s(oe({
							subredditId: e,
							reason: a
						})), s(Object(T.f)({
							kind: $.b.SuccessMod,
							text: n.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(ae(d.error))
				}, ie = Object(j.a)(l), de = Object(j.a)(u), ce = Object(j.a)(m), le = (e, t) => async (s, o, a) => {
					let {
						apiContext: r
					} = a;
					const i = o().subreddits.models[e].name;
					s(ie());
					const d = await ((e, t, s) => Object(L.a)(Object(F.a)(e, [B.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`),
						method: R.nb.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(r(), i, t);
					d.ok ? (s(de({
						subredditId: e,
						reason: t
					})), s(Object(T.f)({
						kind: $.b.SuccessMod,
						text: n.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(ce(d.error))
				}, ue = Object(j.a)(p), me = Object(j.a)(b), pe = Object(j.a)(f), be = (e, t) => async (s, o, a) => {
					let {
						apiContext: r
					} = a;
					const i = o().subreddits.models[e].name;
					s(ue());
					const d = await ((e, t, s) => Object(L.a)(Object(F.a)(e, [B.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`),
						method: R.nb.DELETE
					}))(r(), i, t);
					d.ok ? (s(me({
						subredditId: e,
						reasonId: t
					})), s(Object(T.f)({
						kind: $.b.SuccessMod,
						text: n.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(pe(d.error))
				}, fe = Object(j.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), he = (e, t) => async (s, n, o) => {
					let {
						apiContext: a
					} = o;
					const r = n();
					r.features.removalReasons.reasonOrder[e] && r.features.removalReasons.reasonOrder[e].length > 0 || s(se(e)), s(fe({
						subredditId: e,
						itemIds: t
					})), s(Object(P.i)(D.a.ADD_REMOVAL_REASON))
				}, ve = Object(j.a)("REMOVALREASONS__SUBMIT_PENDING"), Oe = Object(j.a)("REMOVALREASONS__SUBMIT_SUCCESS"), ke = Object(j.a)("REMOVALREASONS__SUBMIT_FAILED"), _e = Object(j.a)("REMOVALREASONS__MESSAGE_PENDING"), Ee = Object(j.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), xe = Object(j.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), ge = Object(j.a)("REMOVALREASONS__MESSAGE_FAILED"), ye = (e, t, s, n, o, a) => async (r, i, d) => {
					let {
						apiContext: c
					} = d;
					const l = i(),
						u = l.user.account && l.user.account.displayText,
						m = e[0],
						p = Object(Q.a)(m) ? Z.e.Post : Z.e.Comment,
						b = p === Z.e.Post ? l.posts.models[m] : l.features.comments.models[m],
						f = p === Z.e.Post ? M.Q : S.j;
					if (!b || !u) return !1;
					r(ve()), r(f({
						[m]: {
							modNote: o,
							modRemovalReason: t && t.title,
							modReasonBy: u
						}
					}));
					const h = {
							itemIds: e,
							modNote: o,
							reasonId: t ? t.id : null
						},
						v = await V(c(), h);
					if (v.ok) {
						if (r(Oe()), t) {
							r(_e());
							const o = {
									itemId: e,
									message: s,
									title: t.title,
									isLocked: a,
									type: n
								},
								i = await W(c(), Object(Z.h)(o, p), p);
							if (i.ok) {
								if ([Z.f.Public, Z.f.PublicAsSubreddit].includes(n)) {
									if (r(xe()), i.body) {
										const e = Object(H.a)(i.body),
											t = {
												comment: e,
												parentId: m
											},
											s = Object(J.f)(l),
											n = l.platform.currentPage && l.platform.currentPage.routeMatch;
										let o = s && n && Object(q.a)(n, l, l.posts.models[e.postId]);
										if (o || (o = Object(C.a)(e.postId, null, {
												sort: R.w,
												hasSortParam: !0
											})), p === Z.e.Post) {
											const s = Object(w.a)(K.c.replyToPost, m);
											r(Object(N.r)({
												...t,
												headCommentId: Object(X.w)(l, {
													commentsPageKey: o
												}),
												commentsPageKey: o,
												draftKey: s
											}));
											const n = l.postStickiedComments.data[m];
											r(Object(I.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: o
											})), n && n !== e.id && r(Object(S.j)({
												[n]: {
													isStickied: !1
												}
											}))
										} else if (p === Z.e.Comment) {
											const e = Object(w.a)(K.c.replyToComment, b.id),
												s = Object(X.j)(l, {
													commentId: m,
													commentsPageKey: o
												});
											r(Object(N.p)({
												...t,
												parentCommentId: m,
												commentsPageKey: o,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else r(Ee());
								return !0
							}
							return r(ge(i.error)), !1
						}
					} else r(ke(v.error)), r(f({
						[m]: {
							modNote: b.modNote,
							modRemovalReason: b.modRemovalReason,
							modReasonBy: b.modReasonBy
						}
					}));
					return !1
				}, Re = (e, t, s, o, a) => async (r, i, d) => {
					let {
						apiContext: c
					} = d;
					const l = i(),
						u = l.user.account && l.user.account.displayText;
					if (!u) return;
					r(ve());
					const m = Object(T.f)({
							kind: $.b.SuccessMod,
							text: n.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [n.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						p = {
							itemIds: e,
							modNote: a,
							reasonId: t ? t.id : null
						},
						b = await V(c(), p);
					if (b.ok) {
						const n = {
							ids: e,
							operation: G.a.RemovalReason,
							username: u,
							options: {
								modNote: a,
								removalReason: t && t.title
							}
						};
						if (r(Object(A.b)(n)), t) {
							const n = {
									itemId: e,
									message: s,
									title: t.title,
									type: o
								},
								a = await W(c(), Object(Z.h)(n, Z.e.Bulk), Z.e.Bulk);
							a.ok ? (r(Ee()), r(m)) : r(ge(a.error))
						} else r(m)
					} else r(ke(b.error))
				}
		},
		"./src/reddit/components/CCM/ModPreviousActions/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2-D4Vessy5Hd1e5HAU1PK3",
				wrapperTitle: "aC6WYpmVvQIF_BZRtMI_W",
				row: "ax8JnexGOa4WYNYKwXlQs",
				icon: "_1fiz4BfaOlncADi00qAx_l",
				userIconWrapper: "_1ChqLpIvObEfBbb4d-hyah",
				userIcon: "_3nEX0mG3UGhbY0hR0Kqaag",
				details: "_3jKisheiLDnZzH5J_qln3x",
				title: "_1-LXaYXcvGUA9hhrrw587d",
				meta: "_3w_F6oDd1-ZDKgp3jo94ew",
				time: "_2820zMw8REXxmaotvSTjqt",
				userlink: "_2622vu9WjymZhKkDq78CfF"
			}
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "e", (function() {
				return k
			})), s.d(t, "c", (function() {
				return _
			}));
			var n = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				r = s("./src/reddit/icons/svgs/ClearFilled/index.tsx"),
				i = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				d = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				c = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				u = s.n(l);
			const {
				fbt: m
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
				let t;
				switch (e) {
					case c.g.AntiEvilOps:
					case c.g.AutomodFiltered:
					case c.g.CommunityOps:
					case c.g.ContentTakedown:
					case c.g.CopyrightTakedown:
					case c.g.Reddit:
						t = r.a;
						break;
					case c.g.AuthorDeleted:
					case c.g.Author:
						t = d.b;
						break;
					case c.g.Moderator:
						t = i.a;
						break;
					default:
						t = r.a
				}
				return a.a.createElement(t, {
					className: u.a.icon
				})
			}, b = e => {
				let t;
				switch (e) {
					case c.g.AntiEvilOps:
					case c.g.AutomodFiltered:
					case c.g.CommunityOps:
					case c.g.ContentTakedown:
					case c.g.CopyrightTakedown:
					case c.g.Reddit:
						t = "clear_fill";
						break;
					case c.g.AuthorDeleted:
					case c.g.Author:
						t = "delete_fill";
						break;
					case c.g.Moderator:
						t = "mod_fill";
						break;
					default:
						t = "clear_fill"
				}
				return t
			}, f = () => m._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [m._param("=User Agreement", a.a.createElement("a", {
				className: u.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, m._("User Agreement", null, {
				hk: "3MHgRl"
			}))), m._param("=Content Policy", a.a.createElement("a", {
				className: u.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, m._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), h = () => m._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [m._param("=User Agreement", a.a.createElement("a", {
				className: u.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, m._("User Agreement", null, {
				hk: "yMHtU"
			}))), m._param("=Content Policy", a.a.createElement("a", {
				className: u.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, m._("Content Policy", null, {
				hk: "2dCXGu"
			})))], {
				hk: "2DLuNP"
			}), v = (e, t) => {
				switch (e) {
					case c.g.AntiEvilOps:
						return m._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
							hk: "2ZqyRT"
						});
					case c.g.Author:
						return m._("Sorry, this post was removed by the person who originally posted it.", null, {
							hk: "4IRCN"
						});
					case c.g.AuthorDeleted:
						return m._("Sorry, this post was deleted by the person who originally posted it.", null, {
							hk: "4emmIp"
						});
					case c.g.AutomodFiltered:
						return m._("Post is awaiting moderator approval.", null, {
							hk: "wdGOr"
						});
					case c.g.CommunityOps:
						return m._("Sorry, this post was removed by Reddit's Community team.", null, {
							hk: "3fs5lF"
						});
					case c.g.ContentTakedown:
						return m._("Sorry, this post was removed by Reddit.", null, {
							hk: "3XSuKc"
						});
					case c.g.CopyrightTakedown:
						return m._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
							hk: "1TbEDT"
						});
					case c.g.Moderator:
						return m._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [m._param("subredditName", t)], {
							hk: "12NWKq"
						});
					case c.g.Reddit:
						return m._("Sorry, this post was removed by Reddit's spam filters.", null, {
							hk: "10ItEu"
						});
					default:
						return m._("Sorry, this post has been removed", null, {
							hk: "11sG9V"
						})
				}
			}, O = (e, t) => {
				switch (e) {
					case c.g.AntiEvilOps:
						return a.a.createElement(f, null);
					case c.g.AuthorDeleted:
					case c.g.Author:
						return m._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
							hk: "2OBDBc"
						});
					case c.g.AutomodFiltered:
						return m._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [m._param("=[subreddit name]", a.a.createElement("a", {
							className: u.a.link,
							href: `${n.a.redditUrl}/r/${t}`,
							target: "_blank",
							rel: "noopener noreferrer"
						}, m._("{subreddit name}", [m._param("subreddit name", `r/${t}`)], {
							hk: "2o22vl"
						})))], {
							hk: "3dxuEW"
						});
					case c.g.CommunityOps:
						return m._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
							hk: "uPiHS"
						});
					case c.g.ContentTakedown:
						return a.a.createElement(h, null);
					case c.g.CopyrightTakedown:
						return m._("This content was removed in response to a copyright claim by a third party.", null, {
							hk: "2e8fhi"
						});
					case c.g.Moderator:
						return m._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
							hk: "QXZPk"
						});
					case c.g.Reddit:
					default:
						return m._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "3vUmEz"
						})
				}
			}, k = (e, t, s) => {
				switch (e) {
					case c.g.AntiEvilOps:
						return m._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
							hk: "3a8CyR"
						});
					case c.g.Author:
						return m._("This post was removed by the person who originally posted it.", null, {
							hk: "2lyUgL"
						});
					case c.g.AuthorDeleted:
						return m._("This post was deleted by the person who originally posted it.", null, {
							hk: "16LeiH"
						});
					case c.g.AutomodFiltered:
						return m._("This post was reported by automod, and is waiting for your review.", null, {
							hk: "2E46dR"
						});
					case c.g.CommunityOps:
						return m._("This post was removed by Reddit admin, u/{username}.", [m._param("username", t)], {
							hk: "34nHWu"
						});
					case c.g.ContentTakedown:
						return m._("This post was removed by Reddit.", null, {
							hk: "3uR3iw"
						});
					case c.g.CopyrightTakedown:
						return m._("This post was removed by Reddit's Legal Operations team.", null, {
							hk: "Ukfj"
						});
					case c.g.Moderator:
						return m._("This post was removed by r/{subredditName} moderator, u/{username}.", [m._param("subredditName", s), m._param("username", t)], {
							hk: "270bcn"
						});
					case c.g.Reddit:
						return m._("This post was removed by Reddit's spam filters.", null, {
							hk: "1k3lsh"
						});
					default:
						return m._("This post was removed by Reddit's spam filters.", null, {
							hk: "3oxS8r"
						})
				}
			}, _ = e => {
				switch (e) {
					case c.g.AntiEvilOps:
						return a.a.createElement(f, null);
					case c.g.AuthorDeleted:
					case c.g.Author:
						return m._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
							hk: "2KZLgT"
						});
					case c.g.AutomodFiltered:
						return m._("It won’t show up in your community feed until you or another moderator approve it.", null, {
							hk: "2X5ECb"
						});
					case c.g.CommunityOps:
						return m._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [m._param("=just ask", a.a.createElement("a", {
							className: u.a.link,
							href: `${n.a.redditUrl}/message/compose/?to=r/reddit.com`,
							target: "_blank",
							rel: "noopener noreferrer"
						}, m._("just ask", null, {
							hk: "jn9ip"
						})))], {
							hk: "3hMocZ"
						});
					case c.g.ContentTakedown:
						return a.a.createElement(h, null);
					case c.g.CopyrightTakedown:
						return m._("This content was removed in response to a copyright claim by a third party.", null, {
							hk: "7jiV"
						});
					case c.g.Moderator:
						return m._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
							hk: "22qJOB"
						});
					case c.g.Reddit:
						return m._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "3S3oDL"
						});
					default:
						return m._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "uKfHK"
						})
				}
			}
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less": function(e, t, s) {
			e.exports = {
				BannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				bannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				icon: "S7CavmS-v3qdubhT9asIc",
				link: "FmwbWt4ZwkxbQbR-0vj1G"
			}
		},
		"./src/reddit/components/ModQueueActionBar/StatusDisplays/FilteredStatusDisplay.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return U
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/models/ModQueueTrigger/index.ts"),
				l = s("./src/reddit/components/RichTextJson/index.tsx"),
				u = s("./src/reddit/constants/things.ts"),
				m = s("./src/reddit/selectors/telemetry.ts");
			const p = e => t => ({
					source: "moderator",
					action: "click",
					noun: e.isCorrect ? "filter_is_correct" : "filter_is_incorrect",
					...b(e, t)
				}),
				b = (e, t) => {
					const s = e.contentId.startsWith(u.a) ? e.contentId : "",
						n = e.contentId.startsWith(u.b) ? e.contentId : "";
					return {
						comment: s ? Object(m.j)({
							state: t,
							commentId: s
						}) : null,
						post: n ? Object(m.M)(t, n) : null,
						filter: {
							reference: {
								name: e.filterName
							}
						},
						subreddit: Object(m.qb)(t, e.contentId),
						...m.q(t)
					}
				};
			var f = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				h = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/constants/localStorage.ts")),
				v = s("./src/reddit/hooks/useLocalStorage.ts"),
				O = s("./src/reddit/hooks/useUserContext.ts");
			const k = () => {
				var e, t;
				const s = `${null!==(t=null===(e=Object(O.a)().currentUser)||void 0===e?void 0:e.id)&&void 0!==t?t:""}-${h.b.SAFETY_FILTER_FEEDBACK_CONTENT_IDS}`,
					[n, o] = Object(v.a)(s, []);
				return {
					contentIds: new Set(n),
					addContentId: e => {
						const t = [...n, e];
						t.length > 50 && t.shift(), o(t)
					}
				}
			};
			var _ = s("./src/reddit/hooks/useTracking.ts");
			const E = {
				threshold: [.5]
			};
			var x = e => {
					const t = Object(n.useRef)(null),
						s = Object(_.a)(),
						{
							contentIds: a
						} = k(),
						r = Object(n.useCallback)(t => {
							t.forEach(t => {
								let {
									intersectionRatio: n
								} = t;
								n >= .5 && !a.has(e.contentId) && s((e => t => ({
									source: "modqueue",
									action: "view",
									noun: "hitl_filter_feedback",
									...b(e, t)
								}))({
									...e
								}))
							})
						}, [s, e, a]);
					return Object(f.a)(t, r, E), o.a.createElement("div", {
						ref: t
					}, e.children)
				},
				g = s("./src/reddit/constants/experiments.ts"),
				y = s("./src/reddit/hooks/useExperimentVariant.ts"),
				R = s("./src/reddit/hooks/useMounted.ts"),
				j = s("./src/reddit/components/ModQueueActionBar/helpers.ts"),
				C = s("./node_modules/lodash/debounce.js"),
				w = s.n(C),
				A = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				S = s("./src/reddit/hooks/useInfoTextTooltip.ts");
			const N = e => {
				let {
					confidence: t,
					children: s
				} = e;
				const n = Object(S.a)({
						placement: "top-end"
					}),
					i = w()(n.hide, 500);
				return o.a.createElement("div", {
					onMouseEnter: () => {
						n.show(), i.cancel()
					},
					onMouseLeave: i
				}, o.a.createElement("button", {
					onClick: e => {
						e.stopPropagation(), n.toggle()
					},
					className: "text-12 text-neutral-content mr-sm hover:underline",
					ref: n.target.ref
				}, o.a.createElement("span", {
					className: Object(r.a)("inline-block mr-2xs h-xs w-xs rounded-full", {
						"bg-alert-caution": t === c.a.LOW,
						"bg-success-background": t === c.a.HIGH
					})
				}), function(e) {
					switch (e) {
						case c.a.LOW:
							return a.fbt._("Low Confidence", null, {
								hk: "1woV5A"
							});
						case c.a.HIGH:
							return a.fbt._("High Confidence", null, {
								hk: "2UzCkt"
							})
					}
				}(t)), o.a.createElement(A.a, {
					popperProps: n.popperProps,
					arrowProps: n.arrowProps,
					visible: n.visible,
					className: "max-w-[230px] font-semibold text-12"
				}, o.a.createElement("div", {
					className: "py-xs flex gap-x-xs",
					onClick: e => e.stopPropagation()
				}, o.a.createElement(d.a, {
					name: "info_fill"
				}), o.a.createElement("div", null, s))))
			};
			var I = s("./src/reddit/components/TrackingHelper/index.tsx"),
				P = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/SafetyFilterFeedbackPrompt.m.less"),
				M = s.n(P);
			const T = e => {
				let {
					filterName: t,
					contentId: s
				} = e;
				const r = Object(I.b)(),
					{
						addContentId: i
					} = k(),
					[d, c] = Object(n.useState)(!1),
					l = e => t => {
						t.stopPropagation(), i(s), c(!0), r(e)
					};
				return o.a.createElement("div", {
					className: M.a.feedbackPromptContainer
				}, o.a.createElement("p", {
					className: M.a.feedbackPrompt
				}, d ? a.fbt._("Thanks for your feedback!", null, {
					hk: "3ImVsP"
				}) : a.fbt._("Was this accurate?", null, {
					hk: "370juX"
				})), !d && o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
					"aria-label": "feedback response yes",
					className: M.a.feedbackPromptButton,
					onClick: l(p({
						isCorrect: !0,
						filterName: t,
						contentId: s
					}))
				}, a.fbt._("Yes", null, {
					hk: "QULVC"
				})), o.a.createElement("span", {
					className: M.a.feedbackButtonMiddot
				}, "·"), o.a.createElement("button", {
					"aria-label": "feedback response no",
					className: M.a.feedbackPromptButton,
					onClick: l(p({
						isCorrect: !1,
						filterName: t,
						contentId: s
					}))
				}, a.fbt._("No", null, {
					hk: "4zGto5"
				}))))
			};
			var D = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less"),
				L = s.n(D);
			const F = e => {
					if (e) try {
						return JSON.parse(e)
					} catch {
						return
					}
				},
				B = e => {
					let {
						reasonRichText: t,
						reason: s,
						feedbackPrompt: n
					} = e;
					const r = Object(R.a)();
					if (n) {
						if (!r) return o.a.createElement("p", {
							className: L.a.reasonText
						}, a.fbt._("Loading filter reason…", null, {
							hk: "K3Ipd"
						}));
						if (!n.feedbackSent) return o.a.createElement(x, n, o.a.createElement(T, n))
					}
					return t ? o.a.createElement(l.b, {
						content: t,
						rtJsonElementProps: {}
					}) : s ? o.a.createElement("p", {
						className: L.a.reasonText
					}, s) : null
				},
				U = e => {
					let {
						content: t
					} = e;
					const s = Object(y.a)(g.me) === g.Rd,
						{
							contentIds: u
						} = k(),
						m = Object(n.useMemo)(() => {
							var e, n, o, r, d, l;
							const m = [];
							(null === (e = t.modQueueTriggers) || void 0 === e ? void 0 : e.length) || t.bannedBy !== i.l || m.push({
								icon: "bot_fill",
								heading: a.fbt._("Blocked by AutoMod", null, {
									hk: "XZuzM"
								})
							});
							for (const i of t.modQueueTriggers || []) switch (i.type) {
								case c.b.AUTOMOD:
									m.push({
										icon: "bot_fill",
										heading: a.fbt._("Blocked by AutoMod", null, {
											hk: "XZuzM"
										}),
										reason: i.message
									});
									break;
								case c.b.SHADOWBANNED_SUBMITTER:
									m.push({
										icon: "ban_fill",
										heading: a.fbt._("Blocked by Automatic Filter", null, {
											hk: "2iaUCM"
										}),
										reason: i.message
									});
									break;
								case c.b.HATEFUL_CONTENT:
									m.push({
										icon: "mod_mode_fill",
										heading: s ? a.fbt._("Blocked for Harassment", null, {
											hk: "1FQFpi"
										}) : a.fbt._("Blocked by Automatic Filter", null, {
											hk: "4vu7uy"
										}),
										reason: i.message,
										feedbackPrompt: s ? {
											filterName: j.b.HarassingContent,
											feedbackSent: u.has(t.id),
											contentId: t.id
										} : void 0
									});
									break;
								case c.b.CROWD_CONTROL:
									m.push({
										icon: "crowd_control",
										heading: a.fbt._("Blocked by Crowd Control", null, {
											hk: "6LNvT"
										}),
										reason: i.message
									});
									break;
								case c.b.BAN_EVASION:
									m.push({
										icon: "ban_fill",
										heading: a.fbt._("Blocked by Ban Evasion Protection", null, {
											hk: "1unYu9"
										}),
										reason: i.message,
										reasonRichText: F(null === (o = null === (n = i.details) || void 0 === n ? void 0 : n.recencyExplanation) || void 0 === o ? void 0 : o.richtext),
										confidence: null === (r = i.details) || void 0 === r ? void 0 : r.confidence,
										confidenceExplanation: F(null === (l = null === (d = i.details) || void 0 === d ? void 0 : d.confidenceExplanation) || void 0 === l ? void 0 : l.richtext)
									})
							}
							return m
						}, [t.modQueueTriggers, t.bannedBy, t.id, s]);
					return o.a.createElement("div", {
						className: L.a.filteredWrapper
					}, m.map((e, t) => {
						const {
							heading: s,
							reason: n,
							icon: a,
							confidence: i,
							confidenceExplanation: c
						} = e;
						return o.a.createElement("div", {
							key: `${s}-${n}-${t}`,
							className: L.a.filteredRow
						}, o.a.createElement(d.a, {
							isFilled: !0,
							name: a,
							className: Object(r.a)(L.a.coloredIcon, L.a.icon)
						}), o.a.createElement("div", {
							className: L.a.statusText
						}, o.a.createElement("div", {
							className: L.a.statusMeta
						}, o.a.createElement("p", {
							className: L.a.status
						}, s), i && c && o.a.createElement(N, {
							confidence: i
						}, o.a.createElement(l.b, {
							className: L.a.tooltipContent,
							content: c,
							rtJsonElementProps: {}
						}))), o.a.createElement(B, e)))
					}))
				}
		},
		"./src/reddit/components/ModQueueActionBar/StatusDisplays/SafetyFilterFeedbackPrompt.m.less": function(e, t, s) {
			e.exports = {
				feedbackPromptContainer: "_3RtSyVCC6P8Sf0jcGpvCf-",
				feedbackPrompt: "_32ku9VINzkoa2aCNXzXAdB",
				feedbackPromptButton: "_3xtpwUZ-CWdFHk89lj-iQD",
				feedbackButtonMiddot: "_2urD2Oe4XFQoyHKHwdlc5y"
			}
		},
		"./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2qFtoxD1OfFOBkQIQeIP5N",
				opened: "_3kWeXZJizg6u4Rpq5Bx2k6",
				openable: "_1jr1ZpXLdZNEfWwHwMp3UW",
				filteredWrapper: "_1aoTzKKtmlGCr-UYW5QI5O",
				filteredRow: "_eBNIEsnbYySvkxjmpt2P",
				reportedWrapper: "_1rfFSNr23RcUWm7d90DpDo",
				reportMeta: "_32zOxnfn5FxzpA0vNAYP7J",
				ignoreButton: "_3qPfB3L3JEpdPsa2KJ6I6Y",
				ignoreButtonIcon: "_2xeI0-KXBryv89ds5re0ac",
				reported: "_37f_VPQZEbIxZBhfy_wkzt",
				icon: "OYsuhocczx0FWqSu4etye",
				approved: "_3PA1NUdBncNEoWXl9e53aE",
				statusText: "_3trW-r5LnijGIrjgDF1u2M",
				status: "_3Q6W_eSDsN-BhormvQBcRr",
				statusMeta: "_3Qp7V0IlguVisBYUCEDLwX",
				tooltipContent: "_1SLswtlo8BWHAgKgT5Nsj_",
				reasonText: "_7YNYpwZk3KH6oXU4KhoGd",
				snoozabledButton: "_3Rixx0Z51qJ71wGmQ8UtQj",
				userIconWrapper: "_3vnCHVExwDbhdlwSh9BV9k",
				userIcon: "_1O-L18qAEJqcxeYP7bE4mK",
				filteredExplanationIcon: "a13uMv6sihYo-UyNBZDo8",
				snoozableDropdown: "_3L6lZrroGMf7wnI2DFJDJx",
				snoozeIcon: "BUoPqJh1q6Pv_Vf5bsKyT",
				caretButton: "_1iROd0ZxfCEcEidNiygaYB",
				caretIcon: "-vF-jMhpa_XhPJ_ntG1Hv",
				userlink: "_2iRjlf0DdO9rVaTZpfwvHA"
			}
		},
		"./src/reddit/components/ModQueueActionBar/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return c
			}));
			var n, o, a = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/helpers/isPost.ts"),
				i = s("./src/reddit/models/Post/index.ts"),
				d = s("./src/reddit/components/ModModeFilteredReason/helpers.ts");
			! function(e) {
				e.UNMODERATED = "UNMODERATED", e.APPROVED = "APPROVED", e.REMOVED = "REMOVED", e.SPAM = "SPAM", e.REPORTED = "REPORTED", e.FILTERED = "FILTERED"
			}(n || (n = {})),
			function(e) {
				e.HarassingContent = "harassing_content"
			}(o || (o = {}));
			const c = e => e.isRemoved && (!e.bannedBy || e.bannedBy === a.l) || !e.isRemoved && Object(d.a)(e) ? n.FILTERED : e.isRemoved || Object(r.b)(e) && [i.g.AntiEvilOps, i.g.CommunityOps, i.g.ContentTakedown, i.g.CopyrightTakedown, i.g.Reddit].indexOf(e.removedByCategory) > -1 ? n.REMOVED : e.isSpam ? n.SPAM : (e.numReports || 0) > 0 ? n.REPORTED : e.isApproved ? n.APPROVED : n.UNMODERATED
		},
		"./src/reddit/components/ModQueueActionBar/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "zF_-R5xzOOncUiSyzLSC9",
				actionBar: "NMY-KfFuIWlYboZZZ8EcY",
				overflowButton: "zctszRbdSXb3WEChmk-o9",
				button: "_3W9WNfkd8zxnn_VGjf4UnY",
				approve: "_3mPdPTYWWZwCYwh4wijZvJ",
				icon: "_1H-LK0KAgKuxT0BkJSN-51",
				overflowHeading: "_2DEP4U6JV7ZNOcbW94l3tb",
				dropdownRow: "_1dFDaRKdCA0DGOYecpQXWF"
			}
		},
		"./src/reddit/components/ModQueueActionBar/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Me
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/actions/modQueue/realtime.ts"),
				c = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				l = s("./src/reddit/components/ReportFlow/new.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				p = s("./src/reddit/helpers/isPost.ts"),
				b = s("./src/reddit/helpers/trackers/modTools.ts"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				h = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				v = s("./src/reddit/hooks/useTracking.ts"),
				O = s("./src/reddit/icons/fonts/index.tsx"),
				k = s("./src/reddit/models/Post/index.ts"),
				_ = s("./src/reddit/actions/comment/moderation.ts"),
				E = s("./src/reddit/actions/modal.ts"),
				x = s("./src/reddit/actions/post.ts"),
				g = s("./src/reddit/actions/postFlair.ts"),
				y = s("./src/reddit/actions/removalReasons/index.ts"),
				R = s("./src/reddit/selectors/activeModal.ts"),
				j = s("./src/reddit/selectors/moderatorPermissions.ts"),
				C = s("./src/reddit/components/ModQueueActionBar/helpers.ts"),
				w = s("./src/reddit/components/ModQueueActionBar/index.m.less"),
				A = s.n(w),
				S = s("./src/lib/classNames/index.ts"),
				N = s("./src/lib/constants/icons.ts"),
				I = s("./src/reddit/actions/gold/modals.ts"),
				P = s("./src/reddit/actions/reportFlow/index.ts"),
				M = s("./src/reddit/components/GiveAwardTooltip/index.tsx"),
				T = s("./src/reddit/components/OverflowMenu/index.tsx"),
				D = s("./src/reddit/constants/modals.ts"),
				L = s("./src/reddit/controls/Dropdown/Row.tsx"),
				F = s("./src/reddit/helpers/correlationIdTracker.ts"),
				B = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				U = s("./src/reddit/helpers/trackers/gild.ts"),
				z = s("./src/reddit/selectors/comments.ts"),
				V = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				Q = s("./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx"),
				H = s("./src/devPlatform/constants.ts");
			const q = (e, t) => Object(b.c)(t, e),
				G = (e, t) => e ? t ? n.fbt._("Unlock Comments", null, {
					hk: "zGuti"
				}) : n.fbt._("Lock Comments", null, {
					hk: "1QO9cp"
				}) : t ? n.fbt._("Unlock thread", null, {
					hk: "SqzQU"
				}) : n.fbt._("Lock thread", null, {
					hk: "3drB04"
				});
			var K = e => {
					let {
						content: t,
						hostPostData: s,
						listingKey: d,
						moderatorPermissions: c
					} = e;
					var l, u;
					const m = Object(v.a)(),
						h = Object(r.d)(),
						k = Object(p.b)(t),
						g = Object(r.e)(W.k),
						y = Object(r.e)(W.P),
						R = Object(r.e)(V.b),
						j = Object(B.a)(c),
						C = k ? f.n : q,
						w = t.authorId === g,
						K = y && w,
						Z = (null === (l = t.distinguishType) || void 0 === l ? void 0 : l.toLowerCase()) === i.H.ADMIN,
						$ = (null === (u = t.distinguishType) || void 0 === u ? void 0 : u.toLowerCase()) === i.H.MODERATOR,
						X = Object(o.useCallback)(() => {
							const e = k ? x.D : _.c;
							h(e(t.id));
							const s = t.isLocked ? "unlock" : "lock";
							m(k ? C(t.id, s) : Object(b.j)(t.id, s, "mod_menu"))
						}, [C, m, h, t, k]),
						J = Object(o.useCallback)(e => {
							m(Object(f.n)(t.id, e, "post", d, s, void 0))
						}, [m, d, s, t]),
						Y = Object(o.useCallback)(() => {
							var e;
							const s = t.isStickied ? "unsticky" : "sticky";
							k ? (h(Object(x.gb)(t.id)), m(Object(b.n)(s, t.id))) : (h(Object(_.b)(t.id, (null === (e = t.distinguishType) || void 0 === e ? void 0 : e.toLowerCase()) || "", !t.isStickied)), m(Object(b.j)(t.id, s, "mod_menu")))
						}, [m, h, t, k]),
						ee = Object(o.useCallback)(() => {
							k && (h(Object(x.I)(t.id)), m(Object(b.n)(t.isOriginalContent ? "unmark_original_content" : "mark_original_content", t.id)))
						}, [m, h, t, k]),
						te = Object(o.useCallback)(() => {
							k && (h(Object(x.F)(t.id)), Object(b.n)(t.isNSFW ? "unmark_nsfw" : "mark_nsfw", t.id))
						}, [h, t, k]),
						se = Object(o.useCallback)(() => {
							k && (h(Object(E.i)(D.a.CROWD_CONTROL)), h(Object(x.t)(t.id)))
						}, [h, t, k]),
						ne = Object(r.e)(e => Object(z.m)(e, {
							commentId: t.id
						})),
						oe = Object(o.useCallback)(() => {
							const e = k ? t.permalink : ne;
							e && (h(Object(x.C)(e)), k ? J("copy") : m(Object(b.j)(t.id, "share", "mod_menu")))
						}, [J, h, t, k, ne, m]),
						ae = Object(o.useCallback)(async () => {
							if (!k) return;
							const e = Object(F.d)(F.a.GildingFlow, !0);
							h(Object(I.d)({
								awardId: null == R ? void 0 : R.id,
								correlationId: e,
								thingId: t.id
							})), m(Object(U.clickGildEvent)(t.id))
						}, [m, h, t, R, k]),
						re = Object(o.useCallback)(() => {
							h(Object(P.c)(t.id)), k ? J("report") : m(Object(b.j)(t.id, "report", "mod_menu"))
						}, [J, h, t, k, m]),
						ie = Object(o.useCallback)(() => {
							var e;
							k && (h(Object(x.db)(t.id, !t.hidden, !1, !0)), J((null === (e = t) || void 0 === e ? void 0 : e.hidden) ? "unhide" : "hide"))
						}, [J, h, t, k]),
						de = Object(o.useCallback)(() => {
							const e = k ? x.S : _.e;
							h(e(t.id, !0)), m(k ? Object(b.n)("spam", t.id) : Object(b.j)(t.id, "remove_as_spam", "mod_menu"))
						}, [m, h, t, k]),
						ce = Object(o.useCallback)(e => {
							const s = k ? x.u : _.b;
							h(s(t.id, e));
							const n = e === i.H.ADMIN ? "distinguish_as_admin" : e === i.H.MODERATOR ? "distinguish_as_mod" : "undistinguish";
							m(Object(b.j)(t.id, n, "mod_menu"))
						}, [h, t, k, m]);
					return a.a.createElement(T.b, {
						dropdownId: `modqueue-item-overflow-${t.id}`,
						className: A.a.overflowButton,
						icon: a.a.createElement(O.a, {
							name: N.a.overflow_horizontal,
							isFilled: !0
						})
					}, a.a.createElement("h6", {
						className: Object(S.a)("text-neutral-content-weak", A.a.overflowHeading)
					}, n.fbt._("Moderation", null, {
						hk: "2NlyQQ"
					})), !t.isRemoved && !t.isSpam && a.a.createElement(a.a.Fragment, null, a.a.createElement(L.b, {
						className: A.a.dropdownRow,
						displayText: n.fbt._("Remove as spam", null, {
							hk: "3jqLzv"
						}),
						onClick: de
					}, a.a.createElement(O.a, {
						name: N.a.spam
					})), k && a.a.createElement(L.b, {
						className: A.a.dropdownRow,
						displayText: t.isStickied ? n.fbt._("Unsticky Post", null, {
							hk: "3Y6DOH"
						}) : n.fbt._("Sticky Post", null, {
							hk: "RNgCH"
						}),
						onClick: Y
					}, a.a.createElement(O.a, {
						name: t.isStickied ? N.a.unpin : N.a.pin
					}))), a.a.createElement(L.b, {
						className: A.a.dropdownRow,
						onClick: X,
						displayText: G(k, !!(null == t ? void 0 : t.isLocked))
					}, a.a.createElement(O.a, {
						name: N.a.lock,
						isFilled: null == t ? void 0 : t.isLocked
					})), w && a.a.createElement(L.b, {
						className: A.a.dropdownRow,
						displayText: $ ? n.fbt._("Undistinguish as a mod", null, {
							hk: "2Nmjxw"
						}) : n.fbt._("Distinguish as a mod", null, {
							hk: "35wmCr"
						}),
						onClick: () => ce($ ? "" : i.H.MODERATOR)
					}, a.a.createElement(O.a, {
						name: $ ? N.a.distinguish_fill : N.a.distinguish
					})), K && a.a.createElement(L.b, {
						className: A.a.dropdownRow,
						displayText: Z ? n.fbt._("Undistinguish as an admin", null, {
							hk: "BHAJd"
						}) : n.fbt._("Distinguish as an admin", null, {
							hk: "3gaPvB"
						}),
						onClick: () => ce(Z ? "" : i.H.ADMIN)
					}, a.a.createElement(O.a, {
						name: Z ? N.a.distinguish_fill : N.a.distinguish
					})), !k && (Z || $) && w && a.a.createElement(L.b, {
						className: A.a.dropdownRow,
						displayText: t.isStickied ? n.fbt._("Unsticky the comment", null, {
							hk: "18TByd"
						}) : n.fbt._("Sticky the comment", null, {
							hk: "3roZIi"
						}),
						onClick: Y
					}, a.a.createElement(O.a, {
						name: t.isStickied ? N.a.unpin : N.a.pin
					})), k && !t.crosspostParentId && a.a.createElement(L.b, {
						className: A.a.dropdownRow,
						onClick: ee,
						displayText: t.isOriginalContent ? n.fbt._("Remove OC Mark", null, {
							hk: "1R9sR"
						}) : n.fbt._("Mark as OC", null, {
							hk: "31GUJ2"
						})
					}, a.a.createElement(O.a, {
						name: N.a.original
					})), k && a.a.createElement(L.b, {
						className: A.a.dropdownRow,
						onClick: te,
						displayText: t.isNSFW ? n.fbt._("Mark as SFW", null, {
							hk: "rvDBl"
						}) : n.fbt._("Mark as NSFW", null, {
							hk: "1q4nut"
						})
					}, a.a.createElement(O.a, {
						name: N.a.nsfw
					})), k && j && "subreddit" === t.belongsTo.type && a.a.createElement(L.b, {
						className: A.a.dropdownRow,
						displayText: n.fbt._("Adjust crowd control", null, {
							hk: "4Drg85"
						}),
						onClick: se
					}, a.a.createElement(O.a, {
						name: N.a.crowd_control
					})), a.a.createElement(Q.a, {
						contextType: Object(p.a)(t.id) ? H.a.POST : H.a.COMMENT,
						contextData: t,
						moderator: !0,
						isOnModQueueOverflowMenu: !0
					}), a.a.createElement("h6", {
						className: Object(S.a)("text-neutral-content-weak", A.a.overflowHeading)
					}, n.fbt._("Other", null, {
						hk: "2543kN"
					})), a.a.createElement(L.b, {
						className: A.a.dropdownRow,
						displayText: n.fbt._("Share", null, {
							hk: "3L9n7l"
						}),
						onClick: oe
					}, a.a.createElement(O.a, {
						name: N.a.share
					})), k && a.a.createElement(L.b, {
						className: A.a.dropdownRow,
						onClick: ae,
						displayText: n.fbt._("Award", null, {
							hk: "4hkt8T"
						})
					}, a.a.createElement(O.a, {
						name: N.a.award
					}), a.a.createElement(M.a, {
						postOrComment: t,
						tooltipId: `modqueue-item-award-${t.id}`
					})), a.a.createElement(L.b, {
						className: A.a.dropdownRow,
						displayText: n.fbt._("Report", null, {
							hk: "1FAnQb"
						}),
						onClick: re
					}, a.a.createElement(O.a, {
						name: N.a.report
					})), k && a.a.createElement(L.b, {
						className: A.a.dropdownRow,
						onClick: ie,
						displayText: t.hidden ? n.fbt._("Unhide", null, {
							hk: "3L7lXA"
						}) : n.fbt._("Hide", null, {
							hk: "19RA4b"
						})
					}, a.a.createElement(O.a, {
						name: N.a.hide
					})), a.a.createElement(Q.a, {
						contextType: Object(p.a)(t.id) ? H.a.POST : H.a.COMMENT,
						contextData: t,
						moderator: !1,
						isOnModQueueOverflowMenu: !0
					}))
				},
				Z = s("./src/reddit/helpers/trackers/modListing.ts"),
				$ = s("./src/config.ts"),
				X = s("./src/reddit/components/UserIcon/index.tsx"),
				J = s("./src/reddit/helpers/name/index.ts"),
				Y = s("./src/reddit/constants/intlSupport.ts"),
				ee = s("./src/reddit/helpers/graphql/helpers.ts"),
				te = s("./src/reddit/hooks/useLocale.ts");

			function se(e) {
				return new Date(Date.now()).getFullYear() === e.getFullYear()
			}
			var ne = function(e) {
					let {
						date: t,
						...s
					} = e;
					const o = Object(te.a)(),
						r = "string" == typeof t ? Object(ee.g)(t) / i.Wb : t,
						d = new Date(r * i.Wb);
					if (!Y.a) return a.a.createElement(a.a.Fragment, null, d.toLocaleString());
					const c = new Intl.DateTimeFormat(o, {
							month: "short",
							day: "numeric",
							year: se(d) ? void 0 : "numeric"
						}),
						l = new Intl.DateTimeFormat(o, {
							minute: "numeric",
							hour: "numeric"
						}),
						u = function(e) {
							const t = new Date(Date.now());
							return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()
						}(d) ? n.fbt._("Today", null, {
							hk: "1sZpnp"
						}) : c.format(d),
						m = l.format(d);
					return n.fbt._("{date} at {time}", [n.fbt._param("date", u), n.fbt._param("time", m)], {
						hk: "Ot5zO"
					})
				},
				oe = s("./src/reddit/components/ModQueueActivitySummaryCards/helpers.ts"),
				ae = s("./src/reddit/components/CCM/ModPreviousActions/index.m.less"),
				re = s.n(ae);
			var ie = e => {
				let {
					className: t,
					modAction: s,
					postOrCommentId: n
				} = e;
				var o, r, i, d, c;
				const l = (null === (o = s.moderatorInfo) || void 0 === o ? void 0 : o.displayName) || "",
					u = (null === (i = null === (r = s.moderatorInfo) || void 0 === r ? void 0 : r.icon) || void 0 === i ? void 0 : i.url) || "",
					m = !!(null === (c = null === (d = s.moderatorInfo) || void 0 === d ? void 0 : d.profile) || void 0 === c ? void 0 : c.isNsfw),
					b = Object(p.a)(n);
				return a.a.createElement("div", {
					className: Object(S.a)(t, re.a.row)
				}, a.a.createElement("div", {
					className: re.a.userIconWrapper
				}, a.a.createElement(X.a, {
					className: re.a.userIcon,
					iconUrl: u,
					userName: l,
					isNSFW: m
				})), a.a.createElement("div", {
					className: re.a.details
				}, a.a.createElement("h3", {
					className: re.a.title
				}, Object(oe.a)(s.action, b ? "SubredditPost" : "")), a.a.createElement("p", {
					className: re.a.meta
				}, a.a.createElement("a", {
					className: re.a.userlink,
					href: `${$.a.redditUrl}/user/${l}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object(J.e)(l)))), a.a.createElement("span", {
					className: re.a.time
				}, a.a.createElement(ne, {
					date: s.createdAt
				})))
			};
			var de = e => {
				let {
					className: t,
					reportAction: s
				} = e;
				return a.a.createElement("div", {
					className: Object(S.a)(t, re.a.row)
				}, a.a.createElement(O.a, {
					isFilled: !0,
					name: "report_fill",
					className: re.a.icon
				}), a.a.createElement("div", {
					className: re.a.details
				}, a.a.createElement("h3", {
					className: re.a.title
				}, n.fbt._("Reported for", null, {
					hk: "pm0ot"
				})), !!s.reason && a.a.createElement("p", {
					className: re.a.meta
				}, s.reason)), a.a.createElement("span", {
					className: re.a.time
				}, a.a.createElement(ne, {
					date: s.createdAt
				})))
			};
			var ce = e => {
					const t = Object(r.e)(t => {
						var s, n;
						const o = null === (n = null === (s = null == t ? void 0 : t.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === n ? void 0 : n.order[e.postOrCommentId];
						if (o && o.length) return o.map(e => {
							var s, n;
							return null === (n = null === (s = null == t ? void 0 : t.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === n ? void 0 : n.models[e]
						})
					});
					return t ? a.a.createElement("div", {
						className: Object(S.a)(e.className, re.a.wrapper)
					}, a.a.createElement("h2", {
						className: re.a.wrapperTitle
					}, n.fbt._("Recent actions", null, {
						hk: "PAtYM"
					})), t.map(t => "ModAction" === (null == t ? void 0 : t.__typename) ? a.a.createElement(ie, {
						modAction: t,
						key: t.id,
						postOrCommentId: e.postOrCommentId
					}) : "ReportAction" === (null == t ? void 0 : t.__typename) ? a.a.createElement(de, {
						reportAction: t,
						key: t.id
					}) : null)) : null
				},
				le = s("./src/reddit/components/HumanDate/index.tsx"),
				ue = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less"),
				me = s.n(ue);
			const pe = e => {
				let {
					content: t
				} = e;
				var s;
				const o = (null == t ? void 0 : t.approvedBy) || "",
					i = Object(r.e)(e => (null == t ? void 0 : t.approvedBy) ? Object(W.Db)(e, {
						userName: o
					}) : null),
					d = t.approvedAtUTC ? (null === (s = t.approvedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.approvedAtUTC / 1e3 : t.approvedAtUTC : null;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: me.a.userIconWrapper
				}, a.a.createElement(X.a, {
					className: Object(S.a)(me.a.userIcon),
					iconUrl: null == i ? void 0 : i.accountIcon,
					userName: o,
					isNSFW: !!(null == i ? void 0 : i.isNSFW)
				})), a.a.createElement("div", {
					className: me.a.statusText
				}, a.a.createElement("p", {
					className: me.a.status
				}, n.fbt._("Approved", null, {
					hk: "4d15LY"
				})), a.a.createElement("p", null, a.a.createElement("a", {
					className: me.a.userlink,
					href: `${$.a.redditUrl}/user/${o}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object(J.e)(o)), d && a.a.createElement(a.a.Fragment, null, " ", a.a.createElement(le.d, {
					seconds: d
				})))))
			};
			var be = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/FilteredStatusDisplay.tsx"),
				fe = s("./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx"),
				he = s("./src/reddit/selectors/subreddit.ts");
			const ve = e => {
				let {
					content: t
				} = e;
				var s;
				const o = Object(r.e)(e => (null == t ? void 0 : t.bannedBy) && "string" == typeof(null == t ? void 0 : t.bannedBy) ? Object(W.Db)(e, {
						userName: null == t ? void 0 : t.bannedBy
					}) : null),
					i = Object(p.b)(t),
					d = Object(r.e)(e => Object(he.X)(e, {
						subredditId: i ? t.belongsTo.id : t.subredditId
					})),
					c = Object(r.e)(e => {
						var t, s, n, o;
						return (null === (s = null === (t = e.user) || void 0 === t ? void 0 : t.account) || void 0 === s ? void 0 : s.isAdmin) || (null === (o = null === (n = e.user) || void 0 === n ? void 0 : n.account) || void 0 === o ? void 0 : o.isEmployee)
					}),
					l = i && t.removedByCategory ? t.removedByCategory : null,
					u = l ? Object(fe.b)(l) : "clear_fill",
					m = t.bannedAtUTC ? (null === (s = t.bannedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.bannedAtUTC / 1e3 : t.bannedAtUTC : null,
					b = ![k.g.AntiEvilOps, k.g.CommunityOps, k.g.ContentTakedown, k.g.CopyrightTakedown, k.g.Reddit].includes(l) || c;
				return a.a.createElement(a.a.Fragment, null, o && b ? a.a.createElement("div", {
					className: me.a.userIconWrapper
				}, a.a.createElement(X.a, {
					className: Object(S.a)(me.a.userIcon),
					iconUrl: o.accountIcon,
					userName: o.username,
					isNSFW: o.isNSFW
				})) : a.a.createElement(O.a, {
					isFilled: !0,
					name: u,
					className: Object(S.a)(me.a.coloredIcon, me.a.icon)
				}), a.a.createElement("div", {
					className: me.a.statusText
				}, a.a.createElement("p", {
					className: me.a.status
				}, n.fbt._("Removed{spam}{reason}", [n.fbt._param("spam", t.isSpam ? " as spam" : ""), n.fbt._param("reason", t.modRemovalReason ? `: ${t.modRemovalReason}` : "")], {
					hk: "3BGtSz"
				})), a.a.createElement("p", null, b && (null == o ? void 0 : o.username) ? a.a.createElement(a.a.Fragment, null, a.a.createElement("a", {
					className: me.a.userlink,
					href: `${$.a.redditUrl}/user/${o.username}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object(J.e)(o.username)), m && a.a.createElement(a.a.Fragment, null, " ", a.a.createElement(le.d, {
					seconds: m
				}))) : l && Object(fe.e)(l, (null == o ? void 0 : o.username) || null, d.name))))
			};
			var Oe = s("./src/reddit/components/Reports/SnoozableReport/index.tsx"),
				ke = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				_e = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Ee = s("./src/reddit/icons/fonts/helpers.tsx");
			s("./src/reddit/icons/fonts/Admin/index.tsx"), s("./src/reddit/icons/fonts/Approve/index.tsx"), s("./src/reddit/icons/fonts/Archived/index.tsx"), s("./src/reddit/icons/fonts/Calendar/index.tsx"), s("./src/reddit/icons/fonts/Clock/index.tsx"), s("./src/reddit/icons/fonts/Clear/index.tsx"), s("./src/reddit/icons/fonts/Coin/index.tsx"), s("./src/reddit/icons/fonts/Comment/index.tsx"), s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"), s("./src/reddit/icons/fonts/Downvote/index.tsx"), s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"), s("./src/reddit/icons/fonts/Envelope/index.tsx"), s("./src/reddit/icons/fonts/Expand/index.tsx"), s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"), s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"), s("./src/reddit/icons/fonts/Gift/index.tsx");
			var xe = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx");
			s("./src/reddit/icons/fonts/Info/index.tsx"), s("./src/reddit/icons/fonts/Live/index.tsx"), s("./src/reddit/icons/fonts/Lock/index.tsx");
			s("./src/reddit/icons/fonts/ModActions/index.tsx"), s("./src/reddit/icons/fonts/ModSettings/index.tsx");
			var ge = s("./src/reddit/icons/fonts/Op/index.m.less"),
				ye = s.n(ge),
				Re = s("./src/lib/lessComponent.tsx");
			Re.a.wrapped(e => a.a.createElement("i", {
				className: `${Object(Ee.b)("author",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement(Ee.a, null, e.desc)), "OpIcon", ye.a), s("./src/reddit/icons/fonts/OutboundLink/index.tsx"), s("./src/reddit/icons/fonts/Pencil/index.tsx");
			var je = s("./src/reddit/icons/fonts/Photos/index.m.less"),
				Ce = s.n(je);
			Re.a.wrapped(e => a.a.createElement("i", {
				className: `${Object(Ee.b)("image_post",e.isFilled)} ${e.className}`
			}), "PhotoIcon", Ce.a), s("./src/reddit/icons/fonts/Premium/index.tsx"), s("./src/reddit/icons/fonts/Remove/index.tsx");
			var we = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Ae = (s("./src/reddit/icons/fonts/Share/index.tsx"), s("./src/reddit/icons/fonts/Spam/index.tsx"), s("./src/reddit/icons/fonts/Sticky/index.tsx"), s("./src/reddit/icons/fonts/Tag/index.tsx"), s("./src/reddit/icons/fonts/Text/index.m.less")),
				Se = s.n(Ae);
			Re.a.wrapped(e => a.a.createElement("i", {
				className: `${Object(Ee.b)("text_post",e.isFilled)} ${e.className}`
			}), "TextIcon", Se.a), s("./src/reddit/icons/fonts/Upvote/index.tsx");
			const Ne = e => {
					let {
						content: t
					} = e;
					const s = Object(_e.b)(),
						i = Object(r.d)(),
						d = Object(o.useCallback)(() => {
							const e = Object(p.a)(t.id),
								n = e ? x.eb : _.g,
								o = t.ignoreReports ? "restore_reports" : "ignore_reports",
								a = e ? Object(b.l)(o, t.id) : Object(b.k)(o, t.id);
							i(n(t.id)), s(a)
						}, [t.id, t.ignoreReports, s, i]),
						c = (t.modReportsDismissed && t.modReportsDismissed.length || 0) + (t.userReportsDismissed && t.userReportsDismissed.length || 0);
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(O.a, {
						isFilled: !0,
						name: "report_fill",
						className: Object(S.a)(me.a.coloredIcon, me.a.icon)
					}), a.a.createElement("div", {
						className: me.a.reportedWrapper
					}, !!t.modReports.length && a.a.createElement("div", {
						className: me.a.statusText
					}, a.a.createElement("p", {
						className: me.a.status
					}, n.fbt._({
						"*": "{number of reports} Mod Reports",
						_1: "1 Mod Report"
					}, [n.fbt._plural(t.modReports.length, "number of reports")], {
						hk: "P5w8P"
					})), t.modReports.map((e, t) => {
						let [s, n] = e;
						return a.a.createElement("p", {
							key: `${s}-${n}-${t}`
						}, Object(J.e)(n), ": ", s)
					})), !!t.userReports.length && a.a.createElement("div", {
						className: me.a.statusText
					}, a.a.createElement("div", {
						className: me.a.reportMeta
					}, a.a.createElement("p", {
						className: me.a.status
					}, n.fbt._({
						"*": "{number of reports} Reports",
						_1: "1 Report"
					}, [n.fbt._plural(t.userReports.reduce((e, t) => {
						let [, s] = t;
						return s + e
					}, 0), "number of reports")], {
						hk: "1l1xMH"
					})), !c && a.a.createElement(ke.c, {
						className: me.a.ignoreButton,
						onClick: d,
						text: t.ignoreReports ? n.fbt._("Restore Reports", null, {
							hk: "2O219R"
						}) : n.fbt._("ignore reports", null, {
							hk: "48jlNW"
						})
					}, t.ignoreReports ? a.a.createElement(we.a, {
						className: me.a.ignoreButtonIcon
					}) : a.a.createElement(xe.a, {
						className: me.a.ignoreButtonIcon
					}))), t.userReports.map((e, s) => {
						let [n, o, r, i] = e;
						return n ? void 0 !== r && i ? a.a.createElement(Oe.a, {
							key: `user-${n}`,
							reason: n,
							amount: o,
							reportedThingId: t.id,
							isSnoozed: r,
							useNewFormat: !0,
							className: me.a.snoozabledButton,
							dropdownClassName: me.a.snoozableDropdown,
							iconClassName: me.a.snoozeIcon
						}) : a.a.createElement("p", {
							key: `user-${n}`
						}, n, " (", o, ")") : null
					}))))
				},
				Ie = e => {
					let {
						content: t
					} = e;
					const s = Object(C.c)(t),
						n = Object(o.useMemo)(() => {
							switch (s) {
								case C.a.APPROVED:
									return a.a.createElement(pe, {
										content: t
									});
								case C.a.REMOVED:
								case C.a.SPAM:
									return a.a.createElement(ve, {
										content: t
									});
								case C.a.FILTERED:
									return a.a.createElement(be.a, {
										content: t
									});
								case C.a.REPORTED:
									return a.a.createElement(Ne, {
										content: t
									});
								default:
									return a.a.createElement(o.Fragment, null)
							}
						}, [s, t]),
						[i, d] = Object(o.useState)(!1),
						c = Object(v.a)(),
						l = Object(o.useCallback)(e => {
							var n;
							e.stopPropagation(), d(!i), c(Object(Z.e)((null === (n = t.belongsTo) || void 0 === n ? void 0 : n.id) || t.subredditId, s, Object(p.a)(t.id), !i))
						}, [c, t, i, d, s]),
						u = Object(r.e)(e => {
							var s, n;
							return !!(null === (n = null === (s = null == e ? void 0 : e.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === n ? void 0 : n.order[t.id])
						});
					return s === C.a.UNMODERATED ? null : a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: Object(S.a)(me.a.wrapper, {
							[me.a.approved]: s === C.a.APPROVED,
							[me.a.reported]: s === C.a.REPORTED,
							[me.a.opened]: i,
							[me.a.openable]: u
						}),
						onClick: u ? l : void 0
					}, n, u && a.a.createElement("button", {
						className: me.a.caretButton
					}, a.a.createElement(O.a, {
						name: i ? N.a.caret_up : N.a.caret_down,
						className: me.a.caretIcon
					}))), u && i && a.a.createElement(ce, {
						className: me.a.previousActions,
						postOrCommentId: t.id
					}))
				},
				Pe = (e, t) => Object(b.c)(t, e),
				Me = e => {
					let {
						content: t,
						listingKey: s,
						hostPostData: b
					} = e;
					const w = Object(v.a)(),
						S = Object(r.d)(),
						N = Object(C.c)(t),
						I = Object(r.e)(R.b),
						P = Object(p.b)(t),
						M = Object(r.e)(e => {
							var s, n;
							return (null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === t.id
						}),
						T = Object(r.e)(e => Object(j.m)(e, {
							postId: t.id
						})),
						D = Object(m.a)(T),
						[L, F] = Object(o.useState)(!1),
						B = Object(r.e)(e => {
							var s, n;
							return null === (n = null === (s = null == e ? void 0 : e.features) || void 0 === s ? void 0 : s.realtimeModqueue) || void 0 === n ? void 0 : n.toUpdate.includes(t.id)
						}),
						U = Object(o.useRef)(null),
						z = Object(o.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t,
									intersectionRatio: s
								} = e;
								s >= .5 ? F(!0) : t || F(!1)
							})
						}, []);
					L && B && S(Object(d.b)(t.id));
					const V = Object(o.useMemo)(() => ({
						threshold: [.5]
					}), []);
					Object(h.a)(U, z, V);
					const W = [C.a.REPORTED, C.a.FILTERED, C.a.UNMODERATED].includes(N),
						Q = [C.a.APPROVED, C.a.UNMODERATED, C.a.REPORTED].includes(N),
						H = P && D,
						q = N === C.a.REMOVED && Object(p.b)(t) && t.removedByCategory === k.g.Reddit && !t.isRemoved && !t.isApproved,
						G = N === C.a.FILTERED || q,
						Z = N === C.a.REMOVED && !t.modRemovalReason && !G,
						$ = [C.a.REMOVED, C.a.SPAM].indexOf(N) > -1,
						X = P ? f.n : Pe,
						J = Object(o.useCallback)(() => {
							const e = P ? x.r : _.a;
							S(e(t.id)), w(X(t.id, "approve"))
						}, [w, S, t, P, X]),
						Y = Object(o.useCallback)(() => {
							const e = P ? x.S : _.e;
							S(e(t.id, !1)), t.isRemoved && t.bannedBy === i.l ? w(X(t.id, "confirm_remove")) : w(X(t.id, "remove"))
						}, [w, S, t, P, X]),
						ee = Object(o.useCallback)(() => {
							S(Object(y.fetchReasonsAndOpenModal)(P ? t.belongsTo.id : t.subredditId, [t.id]))
						}, [t, P, S]),
						te = Object(o.useCallback)(() => {
							S(Object(E.i)(Object(c.b)(t.id, !1))), w(Object(f.n)(t.id, "post_flair_picker"))
						}, [w, S, t]),
						se = Object(o.useCallback)(e => {
							let {
								previewFlair: s,
								selectedTemplateId: n
							} = e;
							P && S(Object(g.h)({
								post: t,
								previewFlair: s,
								selectedTemplateId: n
							}))
						}, [S, P, t]);
					return a.a.createElement("div", {
						className: A.a.wrapper,
						"data-testid": "modqueue-action-bar",
						ref: U
					}, a.a.createElement(Ie, {
						content: t
					}), a.a.createElement("div", {
						className: A.a.actionBar
					}, W && a.a.createElement(u.t, {
						className: [A.a.button, A.a.approve].join(" "),
						Icon: Object(O.b)("checkmark"),
						iconPosition: u.h.L,
						iconClassName: A.a.icon,
						onClick: J,
						text: n.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), Q && a.a.createElement(u.t, {
						className: A.a.button,
						Icon: Object(O.b)("close"),
						iconPosition: u.h.L,
						iconClassName: A.a.icon,
						onClick: Y,
						text: n.fbt._("Remove", null, {
							hk: "2IDWyI"
						})
					}), Z && a.a.createElement(u.t, {
						className: A.a.button,
						onClick: ee,
						text: n.fbt._("Add Removal Reason", null, {
							hk: "2htsXM"
						})
					}), G && a.a.createElement(u.t, {
						className: A.a.button,
						Icon: Object(O.b)("close"),
						iconPosition: u.h.L,
						iconClassName: A.a.icon,
						onClick: Y,
						text: n.fbt._("Confirm Removal", null, {
							hk: "1v0rxC"
						})
					}), $ && a.a.createElement(u.t, {
						className: A.a.button,
						Icon: Object(O.b)("checkmark"),
						iconPosition: u.h.L,
						iconClassName: A.a.icon,
						onClick: J,
						text: n.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), H && a.a.createElement(u.t, {
						className: A.a.button,
						Icon: Object(O.b)("tag"),
						priority: u.c.Plain,
						iconPosition: u.h.L,
						iconClassName: A.a.icon,
						onClick: te,
						text: n.fbt._("Flair", null, {
							hk: "4968fn"
						})
					}), P && I === Object(c.b)(t.id, !1) && a.a.createElement(c.a, {
						flairs: t.flair,
						subredditId: t.belongsTo.id,
						modalId: Object(c.b)(t.id, !1),
						onFlairChanged: se
					}), a.a.createElement(K, {
						content: t,
						hostPostData: b,
						listingKey: s,
						moderatorPermissions: T
					}), M && a.a.createElement(l.a, {
						withOverlay: !0,
						postId: P ? t.id : void 0,
						commentId: P ? void 0 : t.id
					})))
				}
		},
		"./src/reddit/components/ModQueueActivitySummaryCards/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/redditGQL/types.ts");
			const a = (e, t) => {
				switch (e) {
					case o.y.AddNote:
						return n.fbt._("Added mod note", null, {
							hk: "4EQdI3"
						});
					case o.y.AddRemovalReason:
						return n.fbt._("Added removal reason", null, {
							hk: "3sDuRA"
						});
					case o.y.AdjustPostCrowdControlLevel:
						return n.fbt._("Adjusted post crowd control level", null, {
							hk: "3Ru27s"
						});
					case o.y.EnablePostCrowdControlFilter:
						return n.fbt._("Enabled post crowd control level", null, {
							hk: "bnrbt"
						});
					case o.y.DisablePostCrowdControlFilter:
						return n.fbt._("Disabled post crowd control level", null, {
							hk: "3Pn8Cm"
						});
					case o.y.ApproveComment:
						return n.fbt._("Approved comment", null, {
							hk: "15N4AH"
						});
					case o.y.ApproveLink:
						return n.fbt._("Approved post", null, {
							hk: "2pHeO6"
						});
					case o.y.BanUser:
						return n.fbt._("Banned user", null, {
							hk: "30ZUto"
						});
					case o.y.Collections:
						return n.fbt._("Collections", null, {
							hk: "4DLN5q"
						});
					case o.y.DeleteNote:
						return n.fbt._("Deleted mod note", null, {
							hk: "24mUGI"
						});
					case o.y.Distinguish:
						return "SubredditPost" === t ? n.fbt._("Post distinguished", null, {
							hk: "1EzjPd"
						}) : n.fbt._("Comment distinguished", null, {
							hk: "3TNqQa"
						});
					case o.y.EditFlair:
						return "SubredditPost" === t ? n.fbt._("Post flair edited", null, {
							hk: "2oj67i"
						}) : n.fbt._("User flair edited", null, {
							hk: "2WAVS8"
						});
					case o.y.IgnoreReports:
						return "SubredditPost" === t ? n.fbt._("Post reports ignored", null, {
							hk: "1HbgCS"
						}) : n.fbt._("Comment reports ignored", null, {
							hk: "3eLRwL"
						});
					case o.y.Lock:
						return "SubredditPost" === t ? n.fbt._("Post locked", null, {
							hk: "45Huvj"
						}) : n.fbt._("Comment locked", null, {
							hk: "2HzroI"
						});
					case o.y.MarkNsfw:
						return n.fbt._("Toggled post NSFW", null, {
							hk: "eAiVp"
						});
					case o.y.MarkOriginalContent:
						return n.fbt._("Toggled post Original Content", null, {
							hk: "46B0Bk"
						});
					case o.y.MuteUser:
						return n.fbt._("Muted user", null, {
							hk: "31YWRG"
						});
					case o.y.RemoveComment:
						return n.fbt._("Removed comment", null, {
							hk: "2qfmzC"
						});
					case o.y.RemoveLink:
						return n.fbt._("Removed post", null, {
							hk: "2leMij"
						});
					case o.y.SetContestMode:
						return n.fbt._("Set post contest mode", null, {
							hk: "2iE074"
						});
					case o.y.SetSuggestedsort:
						return n.fbt._("Set post suggested sort", null, {
							hk: "3zw33Q"
						});
					case o.y.ShowComment:
						return n.fbt._("Showed comment", null, {
							hk: "1xvaXS"
						});
					case o.y.SpamComment:
						return n.fbt._("Marked comment as spam", null, {
							hk: "E6CLe"
						});
					case o.y.SpamLink:
						return n.fbt._("Removed post as spam", null, {
							hk: "1Al2xz"
						});
					case o.y.Spoiler:
						return n.fbt._("Added spoiler tag", null, {
							hk: "254Axx"
						});
					case o.y.Sticky:
						return "SubredditPost" === t ? n.fbt._("Post stickied", null, {
							hk: "4m9DRx"
						}) : n.fbt._("Comment stickied", null, {
							hk: "1JIPzu"
						});
					case o.y.UnbanUser:
						return n.fbt._("Unbanned user", null, {
							hk: "3U4olT"
						});
					case o.y.Unlock:
						return "SubredditPost" === t ? n.fbt._("Post unlocked", null, {
							hk: "3IXrG"
						}) : n.fbt._("Comment unlocked", null, {
							hk: "4v2jmJ"
						});
					case o.y.UnmuteUser:
						return n.fbt._("Unmuted user", null, {
							hk: "2aB30x"
						});
					case o.y.UnsetContestMode:
						return n.fbt._("Unset post contest mode", null, {
							hk: "W4Yjf"
						});
					case o.y.UnsnoozeReports:
						return "SubredditPost" === t ? n.fbt._("Post unsnoozed", null, {
							hk: "3jp8zr"
						}) : n.fbt._("Comment unsnoozed", null, {
							hk: "2x01Eq"
						});
					case o.y.Unspoiler:
						return n.fbt._("Removed spoiler tag", null, {
							hk: "2GvhDn"
						});
					case o.y.Unsticky:
						return "SubredditPost" === t ? n.fbt._("Post unstickied", null, {
							hk: "KXoHl"
						}) : n.fbt._("Comment unstickied", null, {
							hk: "dpEKC"
						});
					case o.y.UpdateRemovalReason:
					case o.y.WikiBanned:
					case o.y.WikiContributor:
					case o.y.WikiPageListed:
					case o.y.WikiPermLevel:
					case o.y.WikiRevise:
					case o.y.WikiUnbanned:
					case o.y.AcceptModeratorInvite:
					case o.y.AddCommunityTopics:
					case o.y.AddContributor:
					case o.y.AddModerator:
					case o.y.CreateAward:
					case o.y.CreateScheduledPost:
					case o.y.CreateRemovalReason:
					case o.y.CommunityStyling:
					case o.y.CommunityWidgets:
					case o.y.CreateRule:
					case o.y.DeleteAward:
					case o.y.DeleteRule:
					case o.y.DeleteScheduledPost:
					case o.y.DeleteOverriddenClassification:
					case o.y.DeleteRemovalReason:
					case o.y.DisableAward:
					case o.y.EditPostRequirements:
					case o.y.EditRule:
					case o.y.EditScheduledPost:
					case o.y.EditSettings:
					case o.y.EnableAward:
					case o.y.Events:
					case o.y.HiddenAward:
					case o.y.InviteModerator:
					case o.y.InviteSubscriber:
					case o.y.ModAwardGiven:
					case o.y.ModmailEnrollment:
					case o.y.OverrideClassification:
					case o.y.RemoveCommunityTopics:
					case o.y.RemoveContributor:
					case o.y.RemoveModerator:
					case o.y.RemoveWikiContributor:
					case o.y.ReorderModerators:
					case o.y.ReorderRules:
					case o.y.SetPermissions:
					case o.y.SnoozeReports:
					case o.y.SubmitContentRatingSurvey:
					case o.y.SubmitScheduledPost:
					case o.y.UnignoreReports:
					case o.y.UninviteModerator:
					default:
						return n.fbt._("Last mod action", null, {
							hk: "S9AMb"
						})
				}
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				allowPointerEvents: "_2iiIcja5xIjg-5sI4ECvcV",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/PostLeftRail/index.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
				d = s("./src/reddit/controls/Checkbox/index.tsx"),
				c = s("./src/reddit/helpers/isPost.ts"),
				l = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				u = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				m = s.n(u);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: u = !1,
					isCountAnimShadowTestEnabled: p,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: f,
					redditStyle: h,
					isOverlay: v,
					isVoteCountAnimation: O,
					postId: k,
					shouldShowUpvoteRatioOnHover: _
				} = e, E = `upvote-button-${t.id}${v?"-overlay":""}`;
				return o.a.createElement(r.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: h
				}, n && o.a.createElement(d.a, {
					className: m.a.checkbox,
					isCheckboxSelected: u,
					toggleCheckbox: b
				}), o.a.createElement(i.a, {
					flairStyleTemplate: f,
					model: t,
					onVoteClick: s,
					redditStyle: h,
					upvoteTooltipId: E,
					isVoteCountAnimation: O,
					isCountAnimShadowTestEnabled: p,
					postId: k,
					scoreClassName: Object(a.a)(m.a.score, {
						[m.a.allowPointerEvents]: _
					}),
					shouldShowUpvoteRatioOnHover: _
				}))
			}
		},
		"./src/reddit/components/Reports/SnoozableReport/index.m.less": function(e, t, s) {
			e.exports = {
				ReportContainer: "rcWKqpRVFFbdiL-fFemgZ",
				reportContainer: "rcWKqpRVFFbdiL-fFemgZ",
				DropdownLabelContainer: "_3rsZ2ZF99dXi8CxIvlUnna",
				dropdownLabelContainer: "_3rsZ2ZF99dXi8CxIvlUnna",
				DropdownLabel: "_1NxoOUgmzKH04lLU9O6O6z",
				dropdownLabel: "_1NxoOUgmzKH04lLU9O6O6z",
				mActive: "_1mwLBQ-SAEJSG4hvYZzPUO",
				SnoozeButton: "_1QMSuJL3vFpEsGhWHllIQ5",
				snoozeButton: "_1QMSuJL3vFpEsGhWHllIQ5",
				SnoozeButtonContent: "tGdUIanRrFFgVZrnBwdl5",
				snoozeButtonContent: "tGdUIanRrFFgVZrnBwdl5"
			}
		},
		"./src/reddit/components/Reports/SnoozableReport/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/actions/comment/moderation.ts"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				f = s("./src/reddit/controls/Dropdown/Row.tsx"),
				h = s("./src/reddit/helpers/isComment.ts"),
				v = s("./src/reddit/helpers/trackers/modTools.ts"),
				O = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				k = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				_ = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				E = s("./src/reddit/icons/svgs/Undo/index.tsx"),
				x = s("./src/reddit/selectors/tooltip.ts"),
				g = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				y = s.n(g);
			const {
				fbt: R
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = (e, t) => `SnoozableReport--${t}--${e}`, C = Object(a.b)(() => Object(r.c)({
				isDropdownOpen: (e, t) => Object(x.b)(j(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(u.h)({
					tooltipId: j(t.reason, t.reportedThingId)
				})),
				toggleSnooze: s => {
					Object(h.a)(t.reportedThingId) ? e(Object(c.h)(t.reportedThingId, t.reason, s)) : e(Object(l.fb)(t.reportedThingId, t.reason, s))
				}
			})), w = Object(m.a)(b.a);
			class A extends o.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? d.jc.None : d.jc.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(v.r)(Object(h.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
						this.props.sendEvent(t)
					}
				}
				render() {
					const {
						reason: e,
						amount: t,
						reportedThingId: s,
						openDropdown: n,
						isDropdownOpen: a,
						isSnoozed: r,
						useNewFormat: d,
						className: c,
						dropdownClassName: l,
						iconClassName: u
					} = this.props, m = j(e, s);
					return o.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, o.a.createElement(f.b, {
						id: m,
						className: Object(i.a)(y.a.DropdownLabelContainer, c),
						onClick: n
					}, o.a.createElement("label", {
						htmlFor: m,
						className: y.a.DropdownLabel
					}, r ? R._("Reporter snoozed", null, {
						hk: "1rCWql"
					}) : d ? `${e} (${t})` : `${t}: ${e}`, a ? o.a.createElement(k.a, null) : o.a.createElement(O.a, null))), o.a.createElement(w, {
						isOpen: a,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, o.a.createElement("button", {
						className: Object(i.a)(y.a.SnoozeButton, l),
						onClick: this.onSnoozeButtonClick
					}, o.a.createElement("div", {
						className: y.a.SnoozeButtonContent
					}, r ? o.a.createElement(o.a.Fragment, null, o.a.createElement(E.a, {
						className: u
					}), R._("Undo snoozing reports from this user", null, {
						hk: "1CloXT"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(_.a, {
						className: u
					}), R._("Snooze reports from this user for 7 days", null, {
						hk: "1i0sOW"
					}))))))
				}
			}
			t.a = C(Object(p.c)(A))
		},
		"./src/reddit/helpers/graphql/normalizeModActivityFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const o = e => {
				const {
					moderation: t,
					...s
				} = e, {
					lastModAction: o,
					activeModerators: a
				} = (null == t ? void 0 : t.modActivitySummary) || {}, r = [], i = {};
				null == a || a.edges.map(e => {
					if (!(null == e ? void 0 : e.node)) return;
					const {
						lastModAction: t,
						moderator: s
					} = e.node;
					if (!s) return;
					const n = null == s ? void 0 : s.id;
					n && (r.push(n), i[n] || (i[n] = {
						info: {},
						lastModAction: {}
					}), i[n].info = s, i[n].lastModAction = {
						...t
					})
				});
				const d = {
					lastModAction: o,
					activeMods: r
				};
				return {
					subreddit: Object(n.a)(s),
					summary: {
						sub: d,
						mods: i
					}
				}
			}
		},
		"./src/reddit/helpers/trackers/modListing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return o
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "hide_subreddit"
				}),
				a = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "unhide_subreddit"
				}),
				r = e => t => ({
					source: "r_mod",
					action: "click",
					noun: e ? "unfiltered_subreddits" : "filtered_subreddits"
				}),
				i = (e, t) => s => ({
					source: "moderator",
					action: "view",
					noun: "activemod_details",
					...Object(n.q)(s),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: e ? "general_queue" : "community"
					},
					subreddit: {
						name: t.toLowerCase(),
						...Object(n.pb)(s, t)
					}
				}),
				d = (e, t, s) => o => ({
					source: "moderator",
					action: "click",
					noun: "subreddit_filter",
					...Object(n.q)(o),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: s ? "activity_card" : "queue_filters",
						reason: e ? "active" : "inactive"
					},
					subreddit: {
						name: t.toLowerCase(),
						...Object(n.pb)(o, t)
					}
				}),
				c = (e, t, s, o) => a => ({
					source: "moderator",
					action: "click",
					noun: o ? "expand_previous_actions" : "collapse_previous_actions",
					...Object(n.q)(a),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: s ? "post" : "comment",
						reason: t
					},
					subreddit: Object(n.ob)(a, e)
				})
		},
		"./src/reddit/icons/fonts/Clear/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("clear", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("history", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("expand", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, s) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				i = s.n(r);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(a.b)("collapse",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				i = s.n(r);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(a.b)("expand",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(a.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/ModSettings/index.m.less": function(e, t, s) {
			e.exports = {
				ModSettings: "_3-SW6hQX6gXK9G4FM74obr",
				modSettings: "_3-SW6hQX6gXK9G4FM74obr"
			}
		},
		"./src/reddit/icons/fonts/ModSettings/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				d = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(d.a.ModSettings, Object(r.b)("mod", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, s) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(a.b)("edit",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Photos/index.m.less": function(e, t, s) {
			e.exports = {
				PhotoIcon: "_1LWQVKh7NQLbKMIz2io1Di",
				photoIcon: "_1LWQVKh7NQLbKMIz2io1Di"
			}
		},
		"./src/reddit/icons/fonts/Text/index.m.less": function(e, t, s) {
			e.exports = {
				TextIcon: "_5UHlAh7zBZ6migrBJeld3",
				textIcon: "_5UHlAh7zBZ6migrBJeld3"
			}
		},
		"./src/reddit/icons/svgs/ClearFilled/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				onMouseUp: e.onMouseUp,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, o.a.createElement("path", {
				d: "M20 2.5C10.3 2.5 2.5 10.3 2.5 20c0 9.7 7.8 17.5 17.5 17.5S37.5 29.7 37.5 20C37.5 10.3 29.7 2.5 20 2.5zM24.2 27.7L20 23.5l-4.2 4.2c-1.1 1.1-2.5 1.1-3.5 0-1.1-1.1-1.1-2.4 0-3.5l4.2-4.2-4.2-4.2c-1.1-1.1-1.1-2.5 0-3.5 1.1-1.1 2.4-1.1 3.5 0l4.2 4.2 4.2-4.2c1.1-1.1 2.5-1.1 3.5 0 1.1 1.1 1.1 2.4 0 3.5L23.5 20l4.2 4.2c1.1 1.1 1.1 2.5 0 3.5C26.7 28.8 25.3 28.8 24.2 27.7z"
			}))
		},
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, s) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Clock/index.m.less"),
				i = s.n(r);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(i.a.clock, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ModRemove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M13.0303,11.4697 C13.3233,11.7627 13.3233,12.2377 13.0303,12.5307 C12.8843,12.6767 12.6923,12.7497 12.5003,12.7497 C12.3083,12.7497 12.1163,12.6767 11.9693,12.5307 L10.0003,10.5607 L8.0303,12.5307 C7.8843,12.6767 7.6923,12.7497 7.5003,12.7497 C7.3083,12.7497 7.1163,12.6767 6.9693,12.5307 C6.6763,12.2377 6.6763,11.7627 6.9693,11.4697 L8.9393,9.4997 L6.9693,7.5307 C6.6763,7.2377 6.6763,6.7627 6.9693,6.4697 C7.2623,6.1767 7.7373,6.1767 8.0303,6.4697 L10.0003,8.4397 L11.9693,6.4697 C12.2623,6.1767 12.7373,6.1767 13.0303,6.4697 C13.3233,6.7627 13.3233,7.2377 13.0303,7.5307 L11.0603,9.4997 L13.0303,11.4697 Z M17.2753,3.0377 L10.2753,1.0377 C10.0953,0.9877 9.9053,0.9877 9.7253,1.0377 L2.7253,3.0377 C2.2963,3.1607 2.0003,3.5537 2.0003,3.9997 L2.0003,10.9997 C2.0003,16.6887 9.4093,18.8707 9.7253,18.9617 C9.8153,18.9877 9.9073,18.9997 10.0003,18.9997 C10.0923,18.9997 10.1853,18.9877 10.2753,18.9617 C10.5903,18.8707 18.0003,16.6887 18.0003,10.9997 L18.0003,3.9997 C18.0003,3.5537 17.7043,3.1607 17.2753,3.0377 L17.2753,3.0377 Z",
				id: "path-1"
			})))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = s.n(r);
			const d = e => o.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = d
		},
		"./src/reddit/icons/svgs/Undo/index.m.less": function(e, t, s) {
			e.exports = {
				undo: "_2sBykNOXv7XBQtHHHAB1JB"
			}
		},
		"./src/reddit/icons/svgs/Undo/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Undo/index.m.less"),
				i = s.n(r);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(i.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "h", (function() {
				return u
			}));
			var n = s("./src/reddit/helpers/isPost.ts");
			const o = 50,
				a = 50,
				r = 1e4,
				i = 100;
			var d, c;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public", e.PublicAsSubreddit = "public_as_subreddit"
			}(d || (d = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(c || (c = {}));
			const l = e => 1 === e.length ? Object(n.a)(e[0]) ? c.Post : c.Comment : c.Bulk,
				u = (e, t) => {
					return {
						[t === c.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type,
						lock_comment: e.isLocked
					}
				}
		},
		"./src/reddit/reducers/features/modActivitySummaries/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/actions/modQueue/constants.ts");
			t.a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case n.l: {
						const {
							summary: s,
							subreddit: n
						} = t.payload;
						return {
							...e,
							[n.id]: {
								...e[n.id],
								...s
							}
						}
					}
					case n.i:
					case n.f:
					case n.r:
					case n.u:
					case n.A: {
						const {
							response: s
						} = t.payload;
						return {
							...e,
							...s.modActivitySummaries
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/realtimeModqueue/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/redux/es/redux.js"),
				o = s("./src/reddit/actions/modQueue/constants.ts");
			var a = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.m: {
							const {
								targetID: s
							} = t.payload;
							return e.includes(s) ? e : [...e, s]
						}
						case o.p: {
							const {
								targetID: s
							} = t.payload, n = e.indexOf(s);
							return n > -1 && e.splice(n, 1), e
						}
						default:
							return e
					}
				},
				r = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/actions/comment/constants.ts")),
				i = s("./src/reddit/actions/platform.ts"),
				d = s("./src/reddit/actions/post.ts");
			const c = ["isApproved", "isRemoved", "isSpam"];
			var l = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.q:
					case d.k: {
						const s = t.payload;
						return Object.keys(s).map(t => {
							const n = Object.keys(s[t]);
							let o = !1;
							n.map(e => {
								c.includes(e) && (o = !0)
							}), !e.includes(t) && o && (e = [...e, t])
						}), e
					}
					case o.p: {
						const {
							targetID: s
						} = t.payload;
						return e.includes(s) ? e : [...e, s]
					}
					case i.g:
						return [];
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				toUpdate: a,
				updated: l
			})
		},
		"./src/redditGQL/operations/LastModActionInSubreddit.json": function(e) {
			e.exports = JSON.parse('{"id":"7888d2d30843"}')
		},
		"./src/redditGQL/operations/ModActivitySummaryByID.json": function(e) {
			e.exports = JSON.parse('{"id":"d968e053a7b8"}')
		},
		"./src/redditGQL/operations/SingleCommentById.json": function(e) {
			e.exports = JSON.parse('{"id":"7e1a2a69e2d6"}')
		},
		"./src/redditGQL/operations/SinglePostInfoById.json": function(e) {
			e.exports = JSON.parse('{"id":"7226f3bb6e27"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueuePages~ProfileOverview~reddit-components-LargePost~reddit-components-MediumPost.eee2dc13594180fe583f.js.map