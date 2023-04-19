// https://www.redditstatic.com/desktop2x/ModQueuePages~reddit-components-MediumPost.f6047f68a3b11e6d42bd.js
// Retrieved at 4/19/2023, 3:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueuePages~reddit-components-MediumPost"], {
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
				return P
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
				v = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				h = s("./src/reddit/helpers/isPost.ts"),
				f = s("./src/reddit/reducers/features/modActivitySummaries/index.ts"),
				O = s("./src/reddit/reducers/features/realtimeModqueue/index.ts"),
				_ = s("./src/reddit/actions/modQueue/constants.ts");
			var x = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _.o:
							return t.payload;
						default:
							return e
					}
				},
				E = s("./src/reddit/reducers/pages/modHub/index.ts"),
				g = s("./src/reddit/selectors/modQueue.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				y = s("./src/redditGQL/types.ts");
			Object(i.a)({
				pages: {
					modHub: E.a
				}
			}), Object(i.a)({
				features: {
					modActivitySummaries: f.a
				}
			}), Object(i.a)({
				features: {
					realtimeModqueue: O.a
				}
			}), Object(i.a)({
				features: {
					realtimeUpdateAnimationId: x
				}
			});
			const R = Object(d.a)(_.l),
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
				}, w = Object(d.a)(_.m), A = (e, t) => {
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
						n = Object(g.d)(e, s);
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
					} = null === (a = null == e ? void 0 : e.subscribe) || void 0 === a ? void 0 : a.data, l = s(), p = Object(k.k)(l), b = S.includes(c), v = i === p, h = A(l, d);
					if (!b || v || !h) return;
					const f = await Object(m.b)(o(), {
						id: i
					}) || (null === (r = Object(k.Bb)(l, {
						userId: i
					})) || void 0 === r ? void 0 : r.username);
					f && t(Object(u.z)(f)), t(w({
						targetID: d
					}))
				}, I = Object(d.a)(_.p), M = Object(d.a)(_.o), P = e => async (t, s, o) => {
					let {
						gqlContext: i
					} = o;
					var d, u, m, b, f, O;
					const _ = Object(h.a)(e),
						x = s(),
						E = null === (u = null === (d = null == x ? void 0 : x.features) || void 0 === d ? void 0 : d.realtimeModqueue) || void 0 === u ? void 0 : u.toUpdate.includes(e),
						g = A(x, e);
					if (!E || !g) return;
					const k = _ ? () => ((e, t) => Object(n.a)(e, {
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
						y = await k();
					if (y.ok) {
						if (_) {
							const s = null === (b = null === (m = null == y ? void 0 : y.body) || void 0 === m ? void 0 : m.data) || void 0 === b ? void 0 : b.postInfoById;
							t(Object(l.Q)({
								[e]: Object(v.f)(s)
							}))
						} else {
							const s = null === (O = null === (f = null == y ? void 0 : y.body) || void 0 === f ? void 0 : f.data) || void 0 === O ? void 0 : O.commentById;
							t(Object(c.j)({
								[e]: Object(p.a)(s)
							}))
						}
						t(M(e)), t(I({
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
				return ve
			})), s.d(t, "fetchReasonsAndOpenModal", (function() {
				return he
			})), s.d(t, "removalReasonSubmittedPending", (function() {
				return fe
			})), s.d(t, "removalReasonSubmittedSuccess", (function() {
				return Oe
			})), s.d(t, "removalReasonSubmittedFailed", (function() {
				return _e
			})), s.d(t, "removalReasonMessagePending", (function() {
				return xe
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return Ee
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return ge
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return ke
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
				v = "REMOVALREASONS__DELETE_FAILED";
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
					case v:
						return t.payload;
					default:
						return e
				}
			};
			var f = function() {
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
						case v:
							return !1;
						default:
							return e
					}
				},
				O = Object(a.c)({
					error: h,
					pending: f
				});
			const _ = {};
			var x = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
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
			var g = function() {
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
			var k = function() {
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
					models: x,
					reasonOrder: g,
					removedItemIds: k
				}),
				R = s("./src/lib/constants/index.ts"),
				j = s("./src/lib/makeActionCreator/index.ts"),
				C = s("./src/lib/makeCommentsPageKey/index.ts"),
				w = s("./src/lib/makeDraftKey/index.ts"),
				A = s("./src/reddit/actions/bulkActions/index.ts"),
				S = s("./src/reddit/actions/comment/index.ts"),
				N = s("./src/reddit/actions/comment/authoring.ts"),
				I = s("./src/reddit/actions/comment/moderation.ts"),
				M = s("./src/reddit/actions/modal.ts"),
				P = s("./src/reddit/actions/post.ts"),
				D = s("./src/reddit/actions/toaster.ts"),
				T = s("./src/reddit/constants/modals.ts"),
				L = s("./src/lib/makeApiRequest/index.ts"),
				F = s("./src/lib/omitHeaders/index.ts"),
				B = s("./src/reddit/constants/headers.ts"),
				U = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				z = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const V = (e, t) => Object(L.a)(Object(F.a)(e, [B.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_reasons/`),
					method: R.pb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				W = (e, t, s) => Object(L.a)(Object(F.a)(e, [B.a]), {
					endpoint: Object(U.a)(Object(z.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`)),
					method: R.pb.POST,
					type: "json",
					data: t
				});
			var Q = s("./src/reddit/helpers/isPost.ts"),
				q = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				G = s("./src/reddit/helpers/routeKey/index.ts"),
				H = s("./src/reddit/models/ModQueue/index.ts"),
				K = s("./src/reddit/models/PostDraft/index.ts"),
				Z = s("./src/reddit/models/RemovalReason/index.ts"),
				$ = s("./src/reddit/models/Toast/index.ts"),
				J = s("./src/reddit/selectors/comments.ts"),
				X = s("./src/reddit/selectors/platform.ts");
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
						method: R.pb.GET
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
						method: R.pb.POST,
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
						})), s(Object(D.f)({
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
						method: R.pb.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(r(), i, t);
					d.ok ? (s(de({
						subredditId: e,
						reason: t
					})), s(Object(D.f)({
						kind: $.b.SuccessMod,
						text: n.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(ce(d.error))
				}, ue = Object(j.a)(p), me = Object(j.a)(b), pe = Object(j.a)(v), be = (e, t) => async (s, o, a) => {
					let {
						apiContext: r
					} = a;
					const i = o().subreddits.models[e].name;
					s(ue());
					const d = await ((e, t, s) => Object(L.a)(Object(F.a)(e, [B.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`),
						method: R.pb.DELETE
					}))(r(), i, t);
					d.ok ? (s(me({
						subredditId: e,
						reasonId: t
					})), s(Object(D.f)({
						kind: $.b.SuccessMod,
						text: n.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(pe(d.error))
				}, ve = Object(j.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), he = (e, t) => async (s, n, o) => {
					let {
						apiContext: a
					} = o;
					const r = n();
					r.features.removalReasons.reasonOrder[e] && r.features.removalReasons.reasonOrder[e].length > 0 || s(se(e)), s(ve({
						subredditId: e,
						itemIds: t
					})), s(Object(M.i)(T.a.ADD_REMOVAL_REASON))
				}, fe = Object(j.a)("REMOVALREASONS__SUBMIT_PENDING"), Oe = Object(j.a)("REMOVALREASONS__SUBMIT_SUCCESS"), _e = Object(j.a)("REMOVALREASONS__SUBMIT_FAILED"), xe = Object(j.a)("REMOVALREASONS__MESSAGE_PENDING"), Ee = Object(j.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), ge = Object(j.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), ke = Object(j.a)("REMOVALREASONS__MESSAGE_FAILED"), ye = (e, t, s, n, o, a) => async (r, i, d) => {
					let {
						apiContext: c
					} = d;
					const l = i(),
						u = l.user.account && l.user.account.displayText,
						m = e[0],
						p = Object(Q.a)(m) ? Z.e.Post : Z.e.Comment,
						b = p === Z.e.Post ? l.posts.models[m] : l.features.comments.models[m],
						v = p === Z.e.Post ? P.Q : S.j;
					if (!b || !u) return !1;
					r(fe()), r(v({
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
						f = await V(c(), h);
					if (f.ok) {
						if (r(Oe()), t) {
							r(xe());
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
									if (r(ge()), i.body) {
										const e = Object(q.a)(i.body),
											t = {
												comment: e,
												parentId: m
											},
											s = Object(X.f)(l),
											n = l.platform.currentPage && l.platform.currentPage.routeMatch;
										let o = s && n && Object(G.a)(n, l, l.posts.models[e.postId]);
										if (o || (o = Object(C.a)(e.postId, null, {
												sort: R.x,
												hasSortParam: !0
											})), p === Z.e.Post) {
											const s = Object(w.a)(K.c.replyToPost, m);
											r(Object(N.r)({
												...t,
												headCommentId: Object(J.w)(l, {
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
												s = Object(J.j)(l, {
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
							return r(ke(i.error)), !1
						}
					} else r(_e(f.error)), r(v({
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
					r(fe());
					const m = Object(D.f)({
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
							operation: H.a.RemovalReason,
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
							a.ok ? (r(Ee()), r(m)) : r(ke(a.error))
						} else r(m)
					} else r(_e(b.error))
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
				return f
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "e", (function() {
				return _
			})), s.d(t, "c", (function() {
				return x
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
			}, v = () => m._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [m._param("=User Agreement", a.a.createElement("a", {
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
			}), f = (e, t) => {
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
						return a.a.createElement(v, null);
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
			}, _ = (e, t, s) => {
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
			}, x = e => {
				switch (e) {
					case c.g.AntiEvilOps:
						return a.a.createElement(v, null);
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
				return _
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/models/ModQueueTrigger/index.ts"),
				l = s("./src/reddit/components/RichTextJson/index.tsx"),
				u = s("./node_modules/lodash/debounce.js"),
				m = s.n(u),
				p = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				b = s("./src/reddit/hooks/useInfoTextTooltip.ts");
			const v = e => {
				let {
					confidence: t,
					children: s
				} = e;
				const n = Object(b.a)({
						placement: "top-end"
					}),
					i = m()(n.hide, 500);
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
				}(t)), o.a.createElement(p.a, {
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
			var h = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less"),
				f = s.n(h);
			const O = e => {
					if (e) try {
						return JSON.parse(e)
					} catch {
						return
					}
				},
				_ = e => {
					let {
						content: t
					} = e;
					const s = Object(n.useMemo)(() => {
						var e, s, n, o, r, d;
						const l = [];
						(null === (e = t.modQueueTriggers) || void 0 === e ? void 0 : e.length) || t.bannedBy !== i.m || l.push({
							icon: "bot_fill",
							heading: a.fbt._("Blocked by AutoMod", null, {
								hk: "XZuzM"
							})
						});
						for (const i of t.modQueueTriggers || []) switch (i.type) {
							case c.b.AUTOMOD:
								l.push({
									icon: "bot_fill",
									heading: a.fbt._("Blocked by AutoMod", null, {
										hk: "XZuzM"
									}),
									reason: i.message
								});
								break;
							case c.b.SHADOWBANNED_SUBMITTER:
								l.push({
									icon: "ban_fill",
									heading: a.fbt._("Blocked by Automatic Filter", null, {
										hk: "2iaUCM"
									}),
									reason: i.message
								});
								break;
							case c.b.HATEFUL_CONTENT:
								l.push({
									icon: "mod_mode_fill",
									heading: a.fbt._("Blocked by Automatic Filter", null, {
										hk: "4vu7uy"
									}),
									reason: i.message
								});
								break;
							case c.b.CROWD_CONTROL:
								l.push({
									icon: "crowd_control",
									heading: a.fbt._("Blocked by Crowd Control", null, {
										hk: "6LNvT"
									}),
									reason: i.message
								});
								break;
							case c.b.BAN_EVASION:
								l.push({
									icon: "ban_fill",
									heading: a.fbt._("Blocked by Ban Evasion Protection", null, {
										hk: "1unYu9"
									}),
									reason: i.message,
									reasonRichText: O(null === (n = null === (s = i.details) || void 0 === s ? void 0 : s.recencyExplanation) || void 0 === n ? void 0 : n.richtext),
									confidence: null === (o = i.details) || void 0 === o ? void 0 : o.confidence,
									confidenceExplanation: O(null === (d = null === (r = i.details) || void 0 === r ? void 0 : r.confidenceExplanation) || void 0 === d ? void 0 : d.richtext)
								})
						}
						return l
					}, [t.modQueueTriggers, t.bannedBy]);
					return o.a.createElement("div", {
						className: f.a.filteredWrapper
					}, s.map((e, t) => {
						let {
							heading: s,
							reason: n,
							reasonRichText: a,
							icon: i,
							confidence: c,
							confidenceExplanation: u
						} = e;
						return o.a.createElement("div", {
							key: `${s}-${n}-${t}`,
							className: f.a.filteredRow
						}, o.a.createElement(d.a, {
							isFilled: !0,
							name: i,
							className: Object(r.a)(f.a.coloredIcon, f.a.icon)
						}), o.a.createElement("div", {
							className: f.a.statusText
						}, o.a.createElement("div", {
							className: f.a.statusMeta
						}, o.a.createElement("p", {
							className: f.a.status
						}, s), c && u && o.a.createElement(v, {
							confidence: c
						}, o.a.createElement(l.b, {
							className: f.a.tooltipContent,
							content: u,
							rtJsonElementProps: {}
						}))), a && o.a.createElement(l.b, {
							content: a,
							rtJsonElementProps: {}
						}), n && !a && o.a.createElement("p", {
							className: f.a.reasonText
						}, n)))
					}))
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
				return Pe
			}));
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/actions/modQueue/realtime.ts"),
				l = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				u = s("./src/reddit/components/ReportFlow/new.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				b = s("./src/reddit/helpers/isPost.ts"),
				v = s("./src/reddit/helpers/trackers/modTools.ts"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				O = s("./src/reddit/hooks/useTracking.ts"),
				_ = s("./src/reddit/icons/fonts/index.tsx"),
				x = s("./src/reddit/models/Post/index.ts"),
				E = s("./src/reddit/actions/comment/moderation.ts"),
				g = s("./src/reddit/actions/modal.ts"),
				k = s("./src/reddit/actions/post.ts"),
				y = s("./src/reddit/actions/postFlair.ts"),
				R = s("./src/reddit/actions/removalReasons/index.ts"),
				j = s("./src/reddit/selectors/activeModal.ts"),
				C = s("./src/reddit/selectors/moderatorPermissions.ts"),
				w = s("./src/reddit/components/ModModeFilteredReason/helpers.ts");
			! function(e) {
				e.UNMODERATED = "UNMODERATED", e.APPROVED = "APPROVED", e.REMOVED = "REMOVED", e.SPAM = "SPAM", e.REPORTED = "REPORTED", e.FILTERED = "FILTERED"
			}(n || (n = {}));
			const A = e => e.isRemoved && (!e.bannedBy || e.bannedBy === d.m) || !e.isRemoved && Object(w.a)(e) ? n.FILTERED : e.isRemoved || Object(b.b)(e) && [x.g.AntiEvilOps, x.g.CommunityOps, x.g.ContentTakedown, x.g.CopyrightTakedown, x.g.Reddit].indexOf(e.removedByCategory) > -1 ? n.REMOVED : e.isSpam ? n.SPAM : (e.numReports || 0) > 0 ? n.REPORTED : e.isApproved ? n.APPROVED : n.UNMODERATED;
			var S = s("./src/reddit/components/ModQueueActionBar/index.m.less"),
				N = s.n(S),
				I = s("./src/lib/classNames/index.ts"),
				M = s("./src/lib/constants/icons.ts"),
				P = s("./src/reddit/actions/gold/modals.ts"),
				D = s("./src/reddit/actions/reportFlow/index.ts"),
				T = s("./src/reddit/components/GiveAwardTooltip/index.tsx"),
				L = s("./src/reddit/components/OverflowMenu/index.tsx"),
				F = s("./src/reddit/constants/modals.ts"),
				B = s("./src/reddit/controls/Dropdown/Row.tsx"),
				U = s("./src/reddit/helpers/correlationIdTracker.ts"),
				z = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				V = s("./src/reddit/helpers/trackers/gild.ts"),
				W = s("./src/reddit/selectors/comments.ts"),
				Q = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				q = s("./src/reddit/selectors/user.ts");
			const G = (e, t) => Object(v.c)(t, e),
				H = (e, t) => e ? t ? o.fbt._("Unlock Comments", null, {
					hk: "zGuti"
				}) : o.fbt._("Lock Comments", null, {
					hk: "1QO9cp"
				}) : t ? o.fbt._("Unlock thread", null, {
					hk: "SqzQU"
				}) : o.fbt._("Lock thread", null, {
					hk: "3drB04"
				});
			var K = e => {
					let {
						content: t,
						hostPostData: s,
						listingKey: n,
						moderatorPermissions: c
					} = e;
					var l, u;
					const m = Object(O.a)(),
						p = Object(i.d)(),
						f = Object(b.b)(t),
						x = Object(i.e)(q.k),
						y = Object(i.e)(q.P),
						R = Object(i.e)(Q.b),
						j = Object(z.a)(c),
						C = f ? h.n : G,
						w = t.authorId === x,
						A = y && w,
						S = (null === (l = t.distinguishType) || void 0 === l ? void 0 : l.toLowerCase()) === d.J.ADMIN,
						K = (null === (u = t.distinguishType) || void 0 === u ? void 0 : u.toLowerCase()) === d.J.MODERATOR,
						Z = Object(a.useCallback)(() => {
							const e = f ? k.D : E.c;
							p(e(t.id));
							const s = t.isLocked ? "unlock" : "lock";
							m(f ? C(t.id, s) : Object(v.j)(t.id, s, "mod_menu"))
						}, [C, m, p, t, f]),
						$ = Object(a.useCallback)(e => {
							m(Object(h.n)(t.id, e, "post", n, s, void 0))
						}, [m, n, s, t]),
						J = Object(a.useCallback)(() => {
							var e;
							const s = t.isStickied ? "unsticky" : "sticky";
							f ? (p(Object(k.gb)(t.id)), m(Object(v.n)(s, t.id))) : (p(Object(E.b)(t.id, (null === (e = t.distinguishType) || void 0 === e ? void 0 : e.toLowerCase()) || "", !t.isStickied)), m(Object(v.j)(t.id, s, "mod_menu")))
						}, [m, p, t, f]),
						X = Object(a.useCallback)(() => {
							f && (p(Object(k.I)(t.id)), m(Object(v.n)(t.isOriginalContent ? "unmark_original_content" : "mark_original_content", t.id)))
						}, [m, p, t, f]),
						Y = Object(a.useCallback)(() => {
							f && (p(Object(k.F)(t.id)), Object(v.n)(t.isNSFW ? "unmark_nsfw" : "mark_nsfw", t.id))
						}, [p, t, f]),
						ee = Object(a.useCallback)(() => {
							f && (p(Object(g.i)(F.a.CROWD_CONTROL)), p(Object(k.t)(t.id)))
						}, [p, t, f]),
						te = Object(i.e)(e => Object(W.m)(e, {
							commentId: t.id
						})),
						se = Object(a.useCallback)(() => {
							const e = f ? t.permalink : te;
							e && (p(Object(k.C)(e)), f ? $("copy") : m(Object(v.j)(t.id, "share", "mod_menu")))
						}, [$, p, t, f, te, m]),
						ne = Object(a.useCallback)(async () => {
							if (!f) return;
							const e = Object(U.d)(U.a.GildingFlow, !0);
							p(Object(P.d)({
								awardId: null == R ? void 0 : R.id,
								correlationId: e,
								thingId: t.id
							})), m(Object(V.clickGildEvent)(t.id))
						}, [m, p, t, R, f]),
						oe = Object(a.useCallback)(() => {
							p(Object(D.c)(t.id)), f ? $("report") : m(Object(v.j)(t.id, "report", "mod_menu"))
						}, [$, p, t, f, m]),
						ae = Object(a.useCallback)(() => {
							var e;
							f && (p(Object(k.db)(t.id, !t.hidden, !1, !0)), $((null === (e = t) || void 0 === e ? void 0 : e.hidden) ? "unhide" : "hide"))
						}, [$, p, t, f]),
						re = Object(a.useCallback)(() => {
							const e = f ? k.S : E.e;
							p(e(t.id, !0)), m(f ? Object(v.n)("spam", t.id) : Object(v.j)(t.id, "remove_as_spam", "mod_menu"))
						}, [m, p, t, f]),
						ie = Object(a.useCallback)(e => {
							const s = f ? k.u : E.b;
							p(s(t.id, e));
							const n = e === d.J.ADMIN ? "distinguish_as_admin" : e === d.J.MODERATOR ? "distinguish_as_mod" : "undistinguish";
							m(Object(v.j)(t.id, n, "mod_menu"))
						}, [p, t, f, m]);
					return r.a.createElement(L.b, {
						dropdownId: `modqueue-item-overflow-${t.id}`,
						className: N.a.overflowButton,
						icon: r.a.createElement(_.a, {
							name: M.a.overflow_horizontal,
							isFilled: !0
						})
					}, r.a.createElement("h6", {
						className: Object(I.a)("text-neutral-content-weak", N.a.overflowHeading)
					}, o.fbt._("Moderation", null, {
						hk: "2NlyQQ"
					})), !t.isRemoved && !t.isSpam && r.a.createElement(r.a.Fragment, null, r.a.createElement(B.b, {
						className: N.a.dropdownRow,
						displayText: o.fbt._("Remove as spam", null, {
							hk: "3jqLzv"
						}),
						onClick: re
					}, r.a.createElement(_.a, {
						name: M.a.spam
					})), f && r.a.createElement(B.b, {
						className: N.a.dropdownRow,
						displayText: t.isStickied ? o.fbt._("Unsticky Post", null, {
							hk: "3Y6DOH"
						}) : o.fbt._("Sticky Post", null, {
							hk: "RNgCH"
						}),
						onClick: J
					}, r.a.createElement(_.a, {
						name: t.isStickied ? M.a.unpin : M.a.pin
					}))), r.a.createElement(B.b, {
						className: N.a.dropdownRow,
						onClick: Z,
						displayText: H(f, !!(null == t ? void 0 : t.isLocked))
					}, r.a.createElement(_.a, {
						name: M.a.lock,
						isFilled: null == t ? void 0 : t.isLocked
					})), w && r.a.createElement(B.b, {
						className: N.a.dropdownRow,
						displayText: K ? o.fbt._("Undistinguish as a mod", null, {
							hk: "2Nmjxw"
						}) : o.fbt._("Distinguish as a mod", null, {
							hk: "35wmCr"
						}),
						onClick: () => ie(K ? "" : d.J.MODERATOR)
					}, r.a.createElement(_.a, {
						name: K ? M.a.distinguish_fill : M.a.distinguish
					})), A && r.a.createElement(B.b, {
						className: N.a.dropdownRow,
						displayText: S ? o.fbt._("Undistinguish as an admin", null, {
							hk: "BHAJd"
						}) : o.fbt._("Distinguish as an admin", null, {
							hk: "3gaPvB"
						}),
						onClick: () => ie(S ? "" : d.J.ADMIN)
					}, r.a.createElement(_.a, {
						name: S ? M.a.distinguish_fill : M.a.distinguish
					})), !f && (S || K) && w && r.a.createElement(B.b, {
						className: N.a.dropdownRow,
						displayText: t.isStickied ? o.fbt._("Unsticky the comment", null, {
							hk: "18TByd"
						}) : o.fbt._("Sticky the comment", null, {
							hk: "3roZIi"
						}),
						onClick: J
					}, r.a.createElement(_.a, {
						name: t.isStickied ? M.a.unpin : M.a.pin
					})), f && !t.crosspostParentId && r.a.createElement(B.b, {
						className: N.a.dropdownRow,
						onClick: X,
						displayText: t.isOriginalContent ? o.fbt._("Remove OC Mark", null, {
							hk: "1R9sR"
						}) : o.fbt._("Mark as OC", null, {
							hk: "31GUJ2"
						})
					}, r.a.createElement(_.a, {
						name: M.a.original
					})), f && r.a.createElement(B.b, {
						className: N.a.dropdownRow,
						onClick: Y,
						displayText: t.isNSFW ? o.fbt._("Mark as SFW", null, {
							hk: "rvDBl"
						}) : o.fbt._("Mark as NSFW", null, {
							hk: "1q4nut"
						})
					}, r.a.createElement(_.a, {
						name: M.a.nsfw
					})), f && j && "subreddit" === t.belongsTo.type && r.a.createElement(B.b, {
						className: N.a.dropdownRow,
						displayText: o.fbt._("Adjust crowd control", null, {
							hk: "4Drg85"
						}),
						onClick: ee
					}, r.a.createElement(_.a, {
						name: M.a.crowd_control
					})), r.a.createElement("h6", {
						className: Object(I.a)("text-neutral-content-weak", N.a.overflowHeading)
					}, o.fbt._("Other", null, {
						hk: "2543kN"
					})), r.a.createElement(B.b, {
						className: N.a.dropdownRow,
						displayText: o.fbt._("Share", null, {
							hk: "3L9n7l"
						}),
						onClick: se
					}, r.a.createElement(_.a, {
						name: M.a.share
					})), f && r.a.createElement(B.b, {
						className: N.a.dropdownRow,
						onClick: ne,
						displayText: o.fbt._("Award", null, {
							hk: "4hkt8T"
						})
					}, r.a.createElement(_.a, {
						name: M.a.award
					}), r.a.createElement(T.a, {
						postOrComment: t,
						tooltipId: `modqueue-item-award-${t.id}`
					})), r.a.createElement(B.b, {
						className: N.a.dropdownRow,
						displayText: o.fbt._("Report", null, {
							hk: "1FAnQb"
						}),
						onClick: oe
					}, r.a.createElement(_.a, {
						name: M.a.report
					})), f && r.a.createElement(B.b, {
						className: N.a.dropdownRow,
						onClick: ae,
						displayText: t.hidden ? o.fbt._("Unhide", null, {
							hk: "3L7lXA"
						}) : o.fbt._("Hide", null, {
							hk: "19RA4b"
						})
					}, r.a.createElement(_.a, {
						name: M.a.hide
					})))
				},
				Z = s("./src/reddit/helpers/trackers/modListing.ts"),
				$ = s("./src/config.ts"),
				J = s("./src/reddit/components/UserIcon/index.tsx"),
				X = s("./src/reddit/helpers/name/index.ts"),
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
					const n = Object(te.a)(),
						a = "string" == typeof t ? Object(ee.g)(t) / d.Yb : t,
						i = new Date(a * d.Yb);
					if (!Y.a) return r.a.createElement(r.a.Fragment, null, i.toLocaleString());
					const c = new Intl.DateTimeFormat(n, {
							month: "short",
							day: "numeric",
							year: se(i) ? void 0 : "numeric"
						}),
						l = new Intl.DateTimeFormat(n, {
							minute: "numeric",
							hour: "numeric"
						}),
						u = function(e) {
							const t = new Date(Date.now());
							return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()
						}(i) ? o.fbt._("Today", null, {
							hk: "1sZpnp"
						}) : c.format(i),
						m = l.format(i);
					return o.fbt._("{date} at {time}", [o.fbt._param("date", u), o.fbt._param("time", m)], {
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
				var o, a, i, d, c;
				const l = (null === (o = s.moderatorInfo) || void 0 === o ? void 0 : o.displayName) || "",
					u = (null === (i = null === (a = s.moderatorInfo) || void 0 === a ? void 0 : a.icon) || void 0 === i ? void 0 : i.url) || "",
					m = !!(null === (c = null === (d = s.moderatorInfo) || void 0 === d ? void 0 : d.profile) || void 0 === c ? void 0 : c.isNsfw),
					p = Object(b.a)(n);
				return r.a.createElement("div", {
					className: Object(I.a)(t, re.a.row)
				}, r.a.createElement("div", {
					className: re.a.userIconWrapper
				}, r.a.createElement(J.a, {
					className: re.a.userIcon,
					iconUrl: u,
					userName: l,
					isNSFW: m
				})), r.a.createElement("div", {
					className: re.a.details
				}, r.a.createElement("h3", {
					className: re.a.title
				}, Object(oe.a)(s.action, p ? "SubredditPost" : "")), r.a.createElement("p", {
					className: re.a.meta
				}, r.a.createElement("a", {
					className: re.a.userlink,
					href: `${$.a.redditUrl}/user/${l}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object(X.e)(l)))), r.a.createElement("span", {
					className: re.a.time
				}, r.a.createElement(ne, {
					date: s.createdAt
				})))
			};
			var de = e => {
				let {
					className: t,
					reportAction: s
				} = e;
				return r.a.createElement("div", {
					className: Object(I.a)(t, re.a.row)
				}, r.a.createElement(_.a, {
					isFilled: !0,
					name: "report_fill",
					className: re.a.icon
				}), r.a.createElement("div", {
					className: re.a.details
				}, r.a.createElement("h3", {
					className: re.a.title
				}, o.fbt._("Reported for", null, {
					hk: "pm0ot"
				})), !!s.reason && r.a.createElement("p", {
					className: re.a.meta
				}, s.reason)), r.a.createElement("span", {
					className: re.a.time
				}, r.a.createElement(ne, {
					date: s.createdAt
				})))
			};
			var ce = e => {
					const t = Object(i.e)(t => {
						var s, n;
						const o = null === (n = null === (s = null == t ? void 0 : t.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === n ? void 0 : n.order[e.postOrCommentId];
						if (o && o.length) return o.map(e => {
							var s, n;
							return null === (n = null === (s = null == t ? void 0 : t.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === n ? void 0 : n.models[e]
						})
					});
					return t ? r.a.createElement("div", {
						className: Object(I.a)(e.className, re.a.wrapper)
					}, r.a.createElement("h2", {
						className: re.a.wrapperTitle
					}, o.fbt._("Recent actions", null, {
						hk: "PAtYM"
					})), t.map(t => "ModAction" === (null == t ? void 0 : t.__typename) ? r.a.createElement(ie, {
						modAction: t,
						key: t.id,
						postOrCommentId: e.postOrCommentId
					}) : "ReportAction" === (null == t ? void 0 : t.__typename) ? r.a.createElement(de, {
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
				const n = (null == t ? void 0 : t.approvedBy) || "",
					a = Object(i.e)(e => (null == t ? void 0 : t.approvedBy) ? Object(q.Cb)(e, {
						userName: n
					}) : null),
					d = t.approvedAtUTC ? (null === (s = t.approvedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.approvedAtUTC / 1e3 : t.approvedAtUTC : null;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: me.a.userIconWrapper
				}, r.a.createElement(J.a, {
					className: Object(I.a)(me.a.userIcon),
					iconUrl: null == a ? void 0 : a.accountIcon,
					userName: n,
					isNSFW: !!(null == a ? void 0 : a.isNSFW)
				})), r.a.createElement("div", {
					className: me.a.statusText
				}, r.a.createElement("p", {
					className: me.a.status
				}, o.fbt._("Approved", null, {
					hk: "4d15LY"
				})), r.a.createElement("p", null, r.a.createElement("a", {
					className: me.a.userlink,
					href: `${$.a.redditUrl}/user/${n}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object(X.e)(n)), d && r.a.createElement(r.a.Fragment, null, " ", r.a.createElement(le.d, {
					seconds: d
				})))))
			};
			var be = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/FilteredStatusDisplay.tsx"),
				ve = s("./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx"),
				he = s("./src/reddit/selectors/subreddit.ts");
			const fe = e => {
				let {
					content: t
				} = e;
				var s;
				const n = Object(i.e)(e => (null == t ? void 0 : t.bannedBy) && "string" == typeof(null == t ? void 0 : t.bannedBy) ? Object(q.Cb)(e, {
						userName: null == t ? void 0 : t.bannedBy
					}) : null),
					a = Object(b.b)(t),
					d = Object(i.e)(e => Object(he.X)(e, {
						subredditId: a ? t.belongsTo.id : t.subredditId
					})),
					c = Object(i.e)(e => {
						var t, s, n, o;
						return (null === (s = null === (t = e.user) || void 0 === t ? void 0 : t.account) || void 0 === s ? void 0 : s.isAdmin) || (null === (o = null === (n = e.user) || void 0 === n ? void 0 : n.account) || void 0 === o ? void 0 : o.isEmployee)
					}),
					l = a && t.removedByCategory ? t.removedByCategory : null,
					u = l ? Object(ve.b)(l) : "clear_fill",
					m = t.bannedAtUTC ? (null === (s = t.bannedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.bannedAtUTC / 1e3 : t.bannedAtUTC : null,
					p = ![x.g.AntiEvilOps, x.g.CommunityOps, x.g.ContentTakedown, x.g.CopyrightTakedown, x.g.Reddit].includes(l) || c;
				return r.a.createElement(r.a.Fragment, null, n && p ? r.a.createElement("div", {
					className: me.a.userIconWrapper
				}, r.a.createElement(J.a, {
					className: Object(I.a)(me.a.userIcon),
					iconUrl: n.accountIcon,
					userName: n.username,
					isNSFW: n.isNSFW
				})) : r.a.createElement(_.a, {
					isFilled: !0,
					name: u,
					className: Object(I.a)(me.a.coloredIcon, me.a.icon)
				}), r.a.createElement("div", {
					className: me.a.statusText
				}, r.a.createElement("p", {
					className: me.a.status
				}, o.fbt._("Removed{spam}{reason}", [o.fbt._param("spam", t.isSpam ? " as spam" : ""), o.fbt._param("reason", t.modRemovalReason ? `: ${t.modRemovalReason}` : "")], {
					hk: "3BGtSz"
				})), r.a.createElement("p", null, p && (null == n ? void 0 : n.username) ? r.a.createElement(r.a.Fragment, null, r.a.createElement("a", {
					className: me.a.userlink,
					href: `${$.a.redditUrl}/user/${n.username}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object(X.e)(n.username)), m && r.a.createElement(r.a.Fragment, null, " ", r.a.createElement(le.d, {
					seconds: m
				}))) : l && Object(ve.e)(l, (null == n ? void 0 : n.username) || null, d.name))))
			};
			var Oe = s("./src/reddit/components/Reports/SnoozableReport/index.tsx"),
				_e = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				xe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Ee = s("./src/reddit/icons/fonts/helpers.tsx");
			s("./src/reddit/icons/fonts/Admin/index.tsx"), s("./src/reddit/icons/fonts/Approve/index.tsx"), s("./src/reddit/icons/fonts/Archived/index.tsx"), s("./src/reddit/icons/fonts/Calendar/index.tsx"), s("./src/reddit/icons/fonts/Clock/index.tsx"), s("./src/reddit/icons/fonts/Clear/index.tsx"), s("./src/reddit/icons/fonts/Coin/index.tsx"), s("./src/reddit/icons/fonts/Comment/index.tsx"), s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"), s("./src/reddit/icons/fonts/Downvote/index.tsx"), s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"), s("./src/reddit/icons/fonts/Envelope/index.tsx"), s("./src/reddit/icons/fonts/Expand/index.tsx"), s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"), s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"), s("./src/reddit/icons/fonts/Gift/index.tsx");
			var ge = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx");
			s("./src/reddit/icons/fonts/Info/index.tsx"), s("./src/reddit/icons/fonts/Live/index.tsx"), s("./src/reddit/icons/fonts/Lock/index.tsx");
			s("./src/reddit/icons/fonts/ModActions/index.tsx"), s("./src/reddit/icons/fonts/ModSettings/index.tsx");
			var ke = s("./src/reddit/icons/fonts/Op/index.m.less"),
				ye = s.n(ke),
				Re = s("./src/lib/lessComponent.tsx");
			Re.a.wrapped(e => r.a.createElement("i", {
				className: `${Object(Ee.b)("author",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(Ee.a, null, e.desc)), "OpIcon", ye.a), s("./src/reddit/icons/fonts/OutboundLink/index.tsx"), s("./src/reddit/icons/fonts/Pencil/index.tsx");
			var je = s("./src/reddit/icons/fonts/Photos/index.m.less"),
				Ce = s.n(je);
			Re.a.wrapped(e => r.a.createElement("i", {
				className: `${Object(Ee.b)("image_post",e.isFilled)} ${e.className}`
			}), "PhotoIcon", Ce.a), s("./src/reddit/icons/fonts/Premium/index.tsx"), s("./src/reddit/icons/fonts/Remove/index.tsx");
			var we = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Ae = (s("./src/reddit/icons/fonts/Share/index.tsx"), s("./src/reddit/icons/fonts/Spam/index.tsx"), s("./src/reddit/icons/fonts/Sticky/index.tsx"), s("./src/reddit/icons/fonts/Tag/index.tsx"), s("./src/reddit/icons/fonts/Text/index.m.less")),
				Se = s.n(Ae);
			Re.a.wrapped(e => r.a.createElement("i", {
				className: `${Object(Ee.b)("text_post",e.isFilled)} ${e.className}`
			}), "TextIcon", Se.a), s("./src/reddit/icons/fonts/Upvote/index.tsx");
			const Ne = e => {
					let {
						content: t
					} = e;
					const s = Object(xe.b)(),
						n = Object(i.d)(),
						d = Object(a.useCallback)(() => {
							const e = Object(b.a)(t.id),
								o = e ? k.eb : E.g,
								a = t.ignoreReports ? "restore_reports" : "ignore_reports",
								r = e ? Object(v.l)(a, t.id) : Object(v.k)(a, t.id);
							n(o(t.id)), s(r)
						}, [t.id, t.ignoreReports, s, n]),
						c = (t.modReportsDismissed && t.modReportsDismissed.length || 0) + (t.userReportsDismissed && t.userReportsDismissed.length || 0);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(_.a, {
						isFilled: !0,
						name: "report_fill",
						className: Object(I.a)(me.a.coloredIcon, me.a.icon)
					}), r.a.createElement("div", {
						className: me.a.reportedWrapper
					}, !!t.modReports.length && r.a.createElement("div", {
						className: me.a.statusText
					}, r.a.createElement("p", {
						className: me.a.status
					}, o.fbt._({
						"*": "{number of reports} Mod Reports",
						_1: "1 Mod Report"
					}, [o.fbt._plural(t.modReports.length, "number of reports")], {
						hk: "P5w8P"
					})), t.modReports.map((e, t) => {
						let [s, n] = e;
						return r.a.createElement("p", {
							key: `${s}-${n}-${t}`
						}, Object(X.e)(n), ": ", s)
					})), !!t.userReports.length && r.a.createElement("div", {
						className: me.a.statusText
					}, r.a.createElement("div", {
						className: me.a.reportMeta
					}, r.a.createElement("p", {
						className: me.a.status
					}, o.fbt._({
						"*": "{number of reports} Reports",
						_1: "1 Report"
					}, [o.fbt._plural(t.userReports.reduce((e, t) => {
						let [, s] = t;
						return s + e
					}, 0), "number of reports")], {
						hk: "1l1xMH"
					})), !c && r.a.createElement(_e.c, {
						className: me.a.ignoreButton,
						onClick: d,
						text: t.ignoreReports ? o.fbt._("Restore Reports", null, {
							hk: "2O219R"
						}) : o.fbt._("ignore reports", null, {
							hk: "48jlNW"
						})
					}, t.ignoreReports ? r.a.createElement(we.a, {
						className: me.a.ignoreButtonIcon
					}) : r.a.createElement(ge.a, {
						className: me.a.ignoreButtonIcon
					}))), t.userReports.map((e, s) => {
						let [n, o, a, i] = e;
						return n ? void 0 !== a && i ? r.a.createElement(Oe.a, {
							key: `user-${n}`,
							reason: n,
							amount: o,
							reportedThingId: t.id,
							isSnoozed: a,
							useNewFormat: !0,
							className: me.a.snoozabledButton,
							dropdownClassName: me.a.snoozableDropdown,
							iconClassName: me.a.snoozeIcon
						}) : r.a.createElement("p", {
							key: `user-${n}`
						}, n, " (", o, ")") : null
					}))))
				},
				Ie = e => {
					let {
						content: t
					} = e;
					const s = A(t),
						o = Object(a.useMemo)(() => {
							switch (s) {
								case n.APPROVED:
									return r.a.createElement(pe, {
										content: t
									});
								case n.REMOVED:
								case n.SPAM:
									return r.a.createElement(fe, {
										content: t
									});
								case n.FILTERED:
									return r.a.createElement(be.a, {
										content: t
									});
								case n.REPORTED:
									return r.a.createElement(Ne, {
										content: t
									});
								default:
									return r.a.createElement(a.Fragment, null)
							}
						}, [s, t]),
						[d, c] = Object(a.useState)(!1),
						l = Object(O.a)(),
						u = Object(a.useCallback)(e => {
							var n;
							e.stopPropagation(), c(!d), l(Object(Z.e)((null === (n = t.belongsTo) || void 0 === n ? void 0 : n.id) || t.subredditId, s, Object(b.a)(t.id), !d))
						}, [l, t, d, c, s]),
						m = Object(i.e)(e => {
							var s, n;
							return !!(null === (n = null === (s = null == e ? void 0 : e.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === n ? void 0 : n.order[t.id])
						});
					return s === n.UNMODERATED ? null : r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(I.a)(me.a.wrapper, {
							[me.a.approved]: s === n.APPROVED,
							[me.a.reported]: s === n.REPORTED,
							[me.a.opened]: d,
							[me.a.openable]: m
						}),
						onClick: m ? u : void 0
					}, o, m && r.a.createElement("button", {
						className: me.a.caretButton
					}, r.a.createElement(_.a, {
						name: d ? M.a.caret_up : M.a.caret_down,
						className: me.a.caretIcon
					}))), m && d && r.a.createElement(ce, {
						className: me.a.previousActions,
						postOrCommentId: t.id
					}))
				},
				Me = (e, t) => Object(v.c)(t, e),
				Pe = e => {
					let {
						content: t,
						listingKey: s,
						hostPostData: v
					} = e;
					const w = Object(O.a)(),
						S = Object(i.d)(),
						I = A(t),
						M = Object(i.e)(j.b),
						P = Object(b.b)(t),
						D = Object(i.e)(e => {
							var s, n;
							return (null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === t.id
						}),
						T = Object(i.e)(e => Object(C.m)(e, {
							postId: t.id
						})),
						L = Object(p.a)(T),
						[F, B] = Object(a.useState)(!1),
						U = Object(i.e)(e => {
							var s, n;
							return null === (n = null === (s = null == e ? void 0 : e.features) || void 0 === s ? void 0 : s.realtimeModqueue) || void 0 === n ? void 0 : n.toUpdate.includes(t.id)
						}),
						z = Object(a.useRef)(null),
						V = Object(a.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t,
									intersectionRatio: s
								} = e;
								s >= .5 ? B(!0) : t || B(!1)
							})
						}, []);
					F && U && S(Object(c.b)(t.id));
					const W = Object(a.useMemo)(() => ({
						threshold: [.5]
					}), []);
					Object(f.a)(z, V, W);
					const Q = [n.REPORTED, n.FILTERED, n.UNMODERATED].includes(I),
						q = [n.APPROVED, n.UNMODERATED, n.REPORTED].includes(I),
						G = P && L,
						H = I === n.REMOVED && Object(b.b)(t) && t.removedByCategory === x.g.Reddit && !t.isRemoved && !t.isApproved,
						Z = I === n.FILTERED || H,
						$ = I === n.REMOVED && !t.modRemovalReason && !Z,
						J = [n.REMOVED, n.SPAM].indexOf(I) > -1,
						X = P ? h.n : Me,
						Y = Object(a.useCallback)(() => {
							const e = P ? k.r : E.a;
							S(e(t.id)), w(X(t.id, "approve"))
						}, [w, S, t, P, X]),
						ee = Object(a.useCallback)(() => {
							const e = P ? k.S : E.e;
							S(e(t.id, !1)), t.isRemoved && t.bannedBy === d.m ? w(X(t.id, "confirm_remove")) : w(X(t.id, "remove"))
						}, [w, S, t, P, X]),
						te = Object(a.useCallback)(() => {
							S(Object(R.fetchReasonsAndOpenModal)(P ? t.belongsTo.id : t.subredditId, [t.id]))
						}, [t, P, S]),
						se = Object(a.useCallback)(() => {
							S(Object(g.i)(Object(l.b)(t.id, !1))), w(Object(h.n)(t.id, "post_flair_picker"))
						}, [w, S, t]),
						ne = Object(a.useCallback)(e => {
							let {
								previewFlair: s,
								selectedTemplateId: n
							} = e;
							P && S(Object(y.h)({
								post: t,
								previewFlair: s,
								selectedTemplateId: n
							}))
						}, [S, P, t]);
					return r.a.createElement("div", {
						className: N.a.wrapper,
						"data-testid": "modqueue-action-bar",
						ref: z
					}, r.a.createElement(Ie, {
						content: t
					}), r.a.createElement("div", {
						className: N.a.actionBar
					}, Q && r.a.createElement(m.t, {
						className: [N.a.button, N.a.approve].join(" "),
						Icon: Object(_.b)("checkmark"),
						iconPosition: m.h.L,
						iconClassName: N.a.icon,
						onClick: Y,
						text: o.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), q && r.a.createElement(m.t, {
						className: N.a.button,
						Icon: Object(_.b)("close"),
						iconPosition: m.h.L,
						iconClassName: N.a.icon,
						onClick: ee,
						text: o.fbt._("Remove", null, {
							hk: "2IDWyI"
						})
					}), $ && r.a.createElement(m.t, {
						className: N.a.button,
						onClick: te,
						text: o.fbt._("Add Removal Reason", null, {
							hk: "2htsXM"
						})
					}), Z && r.a.createElement(m.t, {
						className: N.a.button,
						Icon: Object(_.b)("close"),
						iconPosition: m.h.L,
						iconClassName: N.a.icon,
						onClick: ee,
						text: o.fbt._("Confirm Removal", null, {
							hk: "1v0rxC"
						})
					}), J && r.a.createElement(m.t, {
						className: N.a.button,
						Icon: Object(_.b)("checkmark"),
						iconPosition: m.h.L,
						iconClassName: N.a.icon,
						onClick: Y,
						text: o.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), G && r.a.createElement(m.t, {
						className: N.a.button,
						Icon: Object(_.b)("tag"),
						priority: m.c.Plain,
						iconPosition: m.h.L,
						iconClassName: N.a.icon,
						onClick: se,
						text: o.fbt._("Flair", null, {
							hk: "4968fn"
						})
					}), P && M === Object(l.b)(t.id, !1) && r.a.createElement(l.a, {
						flairs: t.flair,
						subredditId: t.belongsTo.id,
						modalId: Object(l.b)(t.id, !1),
						onFlairChanged: ne
					}), r.a.createElement(K, {
						content: t,
						hostPostData: v,
						listingKey: s,
						moderatorPermissions: T
					}), D && r.a.createElement(u.a, {
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
					flairStyleTemplate: v,
					redditStyle: h,
					isOverlay: f,
					isVoteCountAnimation: O,
					postId: _,
					shouldShowUpvoteRatioOnHover: x
				} = e, E = `upvote-button-${t.id}${f?"-overlay":""}`;
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
					flairStyleTemplate: v,
					model: t,
					onVoteClick: s,
					redditStyle: h,
					upvoteTooltipId: E,
					isVoteCountAnimation: O,
					isCountAnimShadowTestEnabled: p,
					postId: _,
					scoreClassName: Object(a.a)(m.a.score, {
						[m.a.allowPointerEvents]: x
					}),
					shouldShowUpvoteRatioOnHover: x
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
				v = s("./src/reddit/controls/Dropdown/Row.tsx"),
				h = s("./src/reddit/helpers/isComment.ts"),
				f = s("./src/reddit/helpers/trackers/modTools.ts"),
				O = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				_ = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				x = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				E = s("./src/reddit/icons/svgs/Undo/index.tsx"),
				g = s("./src/reddit/selectors/tooltip.ts"),
				k = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				y = s.n(k);
			const {
				fbt: R
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = (e, t) => `SnoozableReport--${t}--${e}`, C = Object(a.b)(() => Object(r.c)({
				isDropdownOpen: (e, t) => Object(g.b)(j(t.reason, t.reportedThingId))(e)
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
						const e = this.props.isSnoozed ? d.lc.None : d.lc.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(f.p)(Object(h.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
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
					}, o.a.createElement(v.b, {
						id: m,
						className: Object(i.a)(y.a.DropdownLabelContainer, c),
						onClick: n
					}, o.a.createElement("label", {
						htmlFor: m,
						className: y.a.DropdownLabel
					}, r ? R._("Reporter snoozed", null, {
						hk: "1rCWql"
					}) : d ? `${e} (${t})` : `${t}: ${e}`, a ? o.a.createElement(_.a, null) : o.a.createElement(O.a, null))), o.a.createElement(w, {
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
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(x.a, {
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
					...Object(n.o)(s),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: e ? "general_queue" : "community"
					},
					subreddit: {
						name: t.toLowerCase(),
						...Object(n.nb)(s, t)
					}
				}),
				d = (e, t, s) => o => ({
					source: "moderator",
					action: "click",
					noun: "subreddit_filter",
					...Object(n.o)(o),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: s ? "activity_card" : "queue_filters",
						reason: e ? "active" : "inactive"
					},
					subreddit: {
						name: t.toLowerCase(),
						...Object(n.nb)(o, t)
					}
				}),
				c = (e, t, s, o) => a => ({
					source: "moderator",
					action: "click",
					noun: o ? "expand_previous_actions" : "collapse_previous_actions",
					...Object(n.o)(a),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: s ? "post" : "comment",
						reason: t
					},
					subreddit: Object(n.mb)(a, e)
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
			e.exports = JSON.parse('{"id":"7e8ad668620c"}')
		},
		"./src/redditGQL/operations/SinglePostInfoById.json": function(e) {
			e.exports = JSON.parse('{"id":"0b05c384fb49"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueuePages~reddit-components-MediumPost.f6047f68a3b11e6d42bd.js.map