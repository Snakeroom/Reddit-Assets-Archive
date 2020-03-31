// https://www.redditstatic.com/desktop2x/removalReasonActions.76880fb572c33c293eec.js
// Retrieved at 3/31/2020, 11:00:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["removalReasonActions"], {
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/bulkActions/constants.ts");
			const a = Object(o.a)(s.c),
				d = Object(o.a)(s.b),
				r = Object(o.a)(s.a)
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/lib/makeCommentsPageKey/index.ts"),
				r = n("./src/lib/makeDraftKey/index.ts"),
				c = n("./src/reddit/actions/bulkActions/index.ts"),
				i = n("./src/reddit/actions/comment/index.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/constants/modals.ts"),
				f = n("./src/lib/makeApiRequest/index.ts"),
				O = n("./src/lib/omitHeaders/index.ts"),
				R = n("./src/reddit/constants/headers.ts"),
				j = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const p = (e, t) => Object(f.b)(Object(O.a)(e, [R.a]), {
					endpoint: "".concat(e.apiUrl, "/api/v1/modactions/removal_reasons/"),
					method: s.cb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				v = (e, t, n) => Object(f.b)(Object(O.a)(e, [R.a]), {
					endpoint: Object(j.a)("".concat(e.apiUrl, "/api/v1/modactions/removal_").concat(n, "_message/")),
					method: s.cb.POST,
					type: "json",
					data: t
				});
			var P = n("./src/reddit/helpers/isPost.ts"),
				g = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				k = n("./src/reddit/helpers/routeKey/index.ts"),
				x = n("./src/reddit/models/ModQueue/index.ts"),
				y = n("./src/reddit/models/PostDraft/index.ts"),
				_ = n("./src/reddit/models/RemovalReason/index.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				S = n("./src/reddit/selectors/comments.ts"),
				I = n("./src/reddit/selectors/platform.ts"),
				A = n("./src/reddit/actions/removalReasons/constants.ts");
			n.d(t, "removalReasonsPending", (function() {
				return C
			})), n.d(t, "removalReasonsLoaded", (function() {
				return T
			})), n.d(t, "removalReasonsFailed", (function() {
				return w
			})), n.d(t, "removalReasonsRequested", (function() {
				return K
			})), n.d(t, "removalReasonAddedPending", (function() {
				return M
			})), n.d(t, "removalReasonAddedSuccess", (function() {
				return B
			})), n.d(t, "removalReasonAddedFailed", (function() {
				return D
			})), n.d(t, "addRemovalReason", (function() {
				return E
			})), n.d(t, "editRemovalReasonPending", (function() {
				return L
			})), n.d(t, "editRemovalReasonSuccess", (function() {
				return N
			})), n.d(t, "editRemovalReasonFailed", (function() {
				return U
			})), n.d(t, "editRemovalReason", (function() {
				return F
			})), n.d(t, "deleteRemovalReasonPending", (function() {
				return q
			})), n.d(t, "deleteRemovalReasonSuccess", (function() {
				return H
			})), n.d(t, "deleteRemovalReasonFailed", (function() {
				return z
			})), n.d(t, "deleteRemovalReason", (function() {
				return J
			})), n.d(t, "removedItemsSelected", (function() {
				return Q
			})), n.d(t, "fetchReasonsAndOpenModal", (function() {
				return W
			})), n.d(t, "removalReasonSubmittedPending", (function() {
				return G
			})), n.d(t, "removalReasonSubmittedSuccess", (function() {
				return V
			})), n.d(t, "removalReasonSubmittedFailed", (function() {
				return X
			})), n.d(t, "removalReasonMessagePending", (function() {
				return Y
			})), n.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return Z
			})), n.d(t, "removalReasonPublicMessageSuccess", (function() {
				return $
			})), n.d(t, "removalReasonMessageFailed", (function() {
				return ee
			})), n.d(t, "submitRemovalReason", (function() {
				return te
			})), n.d(t, "submitBulkRemovalReason", (function() {
				return ne
			}));
			const C = Object(a.a)(A.k),
				T = Object(a.a)(A.l),
				w = Object(a.a)(A.j),
				K = e => async (t, n, o) => {
					let {
						apiContext: a
					} = o;
					const d = n().subreddits.models[e].name;
					t(C());
					const r = await ((e, t) => Object(f.b)(Object(O.a)(e, [R.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons.json"),
						method: s.cb.GET
					}))(a(), d);
					r.ok ? t(T({
						subredditId: e,
						response: r.body
					})) : t(w(r.error))
				}, M = Object(a.a)(A.b), B = Object(a.a)(A.c), D = Object(a.a)(A.a), E = (e, t) => async (n, a, d) => {
					let {
						apiContext: r
					} = d;
					const c = a().subreddits.models[e].name;
					n(M());
					const i = await ((e, t, n) => Object(f.b)(Object(O.a)(e, [R.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons"),
						method: s.cb.POST,
						data: n
					}))(r(), c, t);
					if (i.ok) {
						const {
							id: s
						} = i.body, a = Object.assign({}, t, {
							id: s
						});
						n(B({
							subredditId: e,
							reason: a
						})), n(Object(u.e)({
							kind: h.b.SuccessMod,
							text: o.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else n(D(i.error))
				}, L = Object(a.a)(A.h), N = Object(a.a)(A.i), U = Object(a.a)(A.g), F = (e, t) => async (n, a, d) => {
					let {
						apiContext: r
					} = d;
					const c = a().subreddits.models[e].name;
					n(L());
					const i = await ((e, t, n) => Object(f.b)(Object(O.a)(e, [R.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons/").concat(n.id),
						method: s.cb.PUT,
						data: {
							message: n.message,
							title: n.title
						}
					}))(r(), c, t);
					i.ok ? (n(N({
						subredditId: e,
						reason: t
					})), n(Object(u.e)({
						kind: h.b.SuccessMod,
						text: o.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : n(U(i.error))
				}, q = Object(a.a)(A.e), H = Object(a.a)(A.f), z = Object(a.a)(A.d), J = (e, t) => async (n, a, d) => {
					let {
						apiContext: r
					} = d;
					const c = a().subreddits.models[e].name;
					n(q());
					const i = await ((e, t, n) => Object(f.b)(Object(O.a)(e, [R.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons/").concat(n),
						method: s.cb.DELETE
					}))(r(), c, t);
					i.ok ? (n(H({
						subredditId: e,
						reasonId: t
					})), n(Object(u.e)({
						kind: h.b.SuccessMod,
						text: o.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : n(z(i.error))
				}, Q = Object(a.a)(A.t), W = (e, t) => async (n, o, s) => {
					let {
						apiContext: a
					} = s;
					const d = o();
					d.removalReasons.reasonOrder[e] && d.removalReasons.reasonOrder[e].length > 0 || n(K(e)), n(Q({
						subredditId: e,
						itemIds: t
					})), n(Object(m.i)(b.a.ADD_REMOVAL_REASON))
				}, G = Object(a.a)(A.r), V = Object(a.a)(A.s), X = Object(a.a)(A.q), Y = Object(a.a)(A.n), Z = Object(a.a)(A.o), $ = Object(a.a)(A.p), ee = Object(a.a)(A.m), te = (e, t, n, o, a) => async (c, m, u) => {
					let {
						apiContext: b
					} = u;
					const f = m(),
						O = f.user.account && f.user.account.displayText,
						R = e[0],
						j = Object(P.a)(R) ? _.e.Post : _.e.Comment,
						x = j === _.e.Post ? f.posts.models[R] : f.comments.models[R],
						h = j === _.e.Post ? l.R : i.R;
					if (!x || !O) return;
					c(G()), c(h({
						[R]: {
							modNote: a,
							modRemovalReason: t && t.title,
							modReasonBy: O
						}
					}));
					const A = {
							itemIds: e,
							modNote: a,
							reasonId: t ? t.id : null
						},
						C = await p(b(), A);
					if (C.ok) {
						if (c(V()), t) {
							c(Y());
							const a = {
									itemId: e,
									message: n,
									title: t.title,
									type: o
								},
								m = await v(b(), Object(_.h)(a, j), j);
							if (m.ok)
								if (o === _.f.Public) {
									if (c($()), m.body) {
										const e = Object(g.a)(m.body, O),
											t = {
												comment: e,
												parentId: R
											},
											n = Object(I.g)(f),
											o = f.platform.currentPage && f.platform.currentPage.routeMatch;
										let a = n && o && Object(k.a)(o, f, f.posts.models[e.postId]);
										if (a || (a = Object(d.a)(e.postId, null, {
												sort: s.s,
												hasSortParam: !0
											})), j === _.e.Post) {
											const n = Object(r.a)(y.c.replyToPost, R);
											c(Object(i.mb)(Object.assign({}, t, {
												headCommentId: Object(S.x)(f, {
													commentsPageKey: a
												}),
												commentsPageKey: a,
												draftKey: n
											})));
											const o = f.postStickiedComments.data[R];
											c(Object(i.ib)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: a
											})), o && o !== e.id && c(Object(i.R)({
												[o]: {
													isStickied: !1
												}
											}))
										} else if (j === _.e.Comment) {
											const e = Object(r.a)(y.c.replyToComment, x.id),
												n = Object(S.j)(f, {
													commentId: R,
													commentsPageKey: a
												});
											c(Object(i.kb)(Object.assign({}, t, {
												parentCommentId: R,
												commentsPageKey: a,
												draftKey: e,
												depth: n + 1
											})))
										}
									}
								} else c(Z());
							else c(ee(m.error))
						}
					} else c(X(C.error)), c(h({
						[R]: {
							modNote: x.modNote,
							modRemovalReason: x.modRemovalReason,
							modReasonBy: x.modReasonBy
						}
					}))
				}, ne = (e, t, n, s, a) => async (d, r, i) => {
					let {
						apiContext: m
					} = i;
					const l = r(),
						b = l.user.account && l.user.account.displayText;
					if (!b) return;
					d(G());
					const f = Object(u.e)({
							kind: h.b.SuccessMod,
							text: o.fbt._("Added removal reason for {number} posts/comments", [o.fbt._param("number", e.length.toLocaleString())], {
								hk: "1nW4Qh"
							})
						}),
						O = {
							itemIds: e,
							modNote: a,
							reasonId: t ? t.id : null
						},
						R = await p(m(), O);
					if (R.ok) {
						const o = {
							ids: e,
							operation: x.a.RemovalReason,
							username: b,
							options: {
								modNote: a,
								removalReason: t && t.title
							}
						};
						if (d(Object(c.b)(o)), t) {
							const o = {
									itemId: e,
									message: n,
									title: t.title,
									type: s
								},
								a = await v(m(), Object(_.h)(o, _.e.Bulk), _.e.Bulk);
							a.ok ? (d(Z()), d(f)) : d(ee(a.error))
						} else d(f)
					} else d(X(R.error))
				}
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "h", (function() {
				return l
			}));
			var o = n("./src/reddit/helpers/isPost.ts");
			const s = 20,
				a = 50,
				d = 1e4,
				r = 100;
			var c, i;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public"
			}(c || (c = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(i || (i = {}));
			const m = e => 1 === e.length ? Object(o.a)(e[0]) ? i.Post : i.Comment : i.Bulk,
				l = (e, t) => {
					return {
						[t === i.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type
					}
				}
		}
	}
]);
//# sourceMappingURL=removalReasonActions.76880fb572c33c293eec.js.map