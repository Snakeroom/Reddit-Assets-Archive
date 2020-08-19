// https://www.redditstatic.com/desktop2x/removalReasonActions.11b7293e2cea0af8f0c2.js
// Retrieved at 8/19/2020, 1:50:07 PM by Reddit Dataminer v1.0.0
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
			n.r(t), n.d(t, "removalReasonsPending", (function() {
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
				return N
			})), n.d(t, "editRemovalReasonSuccess", (function() {
				return L
			})), n.d(t, "editRemovalReasonFailed", (function() {
				return U
			})), n.d(t, "editRemovalReason", (function() {
				return F
			})), n.d(t, "deleteRemovalReasonPending", (function() {
				return q
			})), n.d(t, "deleteRemovalReasonSuccess", (function() {
				return H
			})), n.d(t, "deleteRemovalReasonFailed", (function() {
				return J
			})), n.d(t, "deleteRemovalReason", (function() {
				return z
			})), n.d(t, "removedItemsSelected", (function() {
				return G
			})), n.d(t, "fetchReasonsAndOpenModal", (function() {
				return Q
			})), n.d(t, "removalReasonSubmittedPending", (function() {
				return V
			})), n.d(t, "removalReasonSubmittedSuccess", (function() {
				return W
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
				O = n("./src/lib/makeApiRequest/index.ts"),
				f = n("./src/lib/omitHeaders/index.ts"),
				j = n("./src/reddit/constants/headers.ts"),
				R = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const p = (e, t) => Object(O.a)(Object(f.a)(e, [j.a]), {
					endpoint: "".concat(e.apiUrl, "/api/v1/modactions/removal_reasons/"),
					method: s.db.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				v = (e, t, n) => Object(O.a)(Object(f.a)(e, [j.a]), {
					endpoint: Object(R.a)("".concat(e.apiUrl, "/api/v1/modactions/removal_").concat(n, "_message/")),
					method: s.db.POST,
					type: "json",
					data: t
				});
			var g = n("./src/reddit/helpers/isPost.ts"),
				P = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				k = n("./src/reddit/helpers/routeKey/index.ts"),
				x = n("./src/reddit/models/ModQueue/index.ts"),
				y = n("./src/reddit/models/PostDraft/index.ts"),
				_ = n("./src/reddit/models/RemovalReason/index.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				I = n("./src/reddit/selectors/comments.ts"),
				S = n("./src/reddit/selectors/platform.ts"),
				A = n("./src/reddit/actions/removalReasons/constants.ts");
			const C = Object(a.a)(A.k),
				T = Object(a.a)(A.l),
				w = Object(a.a)(A.j),
				K = e => async (t, n, o) => {
					let {
						apiContext: a
					} = o;
					const d = n().subreddits.models[e].name;
					t(C());
					const r = await ((e, t) => Object(O.a)(Object(f.a)(e, [j.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons.json"),
						method: s.db.GET
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
					const i = await ((e, t, n) => Object(O.a)(Object(f.a)(e, [j.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons"),
						method: s.db.POST,
						data: n
					}))(r(), c, t);
					if (i.ok) {
						const {
							id: s
						} = i.body, a = Object.assign(Object.assign({}, t), {
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
				}, N = Object(a.a)(A.h), L = Object(a.a)(A.i), U = Object(a.a)(A.g), F = (e, t) => async (n, a, d) => {
					let {
						apiContext: r
					} = d;
					const c = a().subreddits.models[e].name;
					n(N());
					const i = await ((e, t, n) => Object(O.a)(Object(f.a)(e, [j.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons/").concat(n.id),
						method: s.db.PUT,
						data: {
							message: n.message,
							title: n.title
						}
					}))(r(), c, t);
					i.ok ? (n(L({
						subredditId: e,
						reason: t
					})), n(Object(u.e)({
						kind: h.b.SuccessMod,
						text: o.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : n(U(i.error))
				}, q = Object(a.a)(A.e), H = Object(a.a)(A.f), J = Object(a.a)(A.d), z = (e, t) => async (n, a, d) => {
					let {
						apiContext: r
					} = d;
					const c = a().subreddits.models[e].name;
					n(q());
					const i = await ((e, t, n) => Object(O.a)(Object(f.a)(e, [j.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons/").concat(n),
						method: s.db.DELETE
					}))(r(), c, t);
					i.ok ? (n(H({
						subredditId: e,
						reasonId: t
					})), n(Object(u.e)({
						kind: h.b.SuccessMod,
						text: o.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : n(J(i.error))
				}, G = Object(a.a)(A.t), Q = (e, t) => async (n, o, s) => {
					let {
						apiContext: a
					} = s;
					const d = o();
					d.removalReasons.reasonOrder[e] && d.removalReasons.reasonOrder[e].length > 0 || n(K(e)), n(G({
						subredditId: e,
						itemIds: t
					})), n(Object(m.i)(b.a.ADD_REMOVAL_REASON))
				}, V = Object(a.a)(A.r), W = Object(a.a)(A.s), X = Object(a.a)(A.q), Y = Object(a.a)(A.n), Z = Object(a.a)(A.o), $ = Object(a.a)(A.p), ee = Object(a.a)(A.m), te = (e, t, n, o, a) => async (c, m, u) => {
					let {
						apiContext: b
					} = u;
					const O = m(),
						f = O.user.account && O.user.account.displayText,
						j = e[0],
						R = Object(g.a)(j) ? _.e.Post : _.e.Comment,
						x = R === _.e.Post ? O.posts.models[j] : O.comments.models[j],
						h = R === _.e.Post ? l.J : i.R;
					if (!x || !f) return !1;
					c(V()), c(h({
						[j]: {
							modNote: a,
							modRemovalReason: t && t.title,
							modReasonBy: f
						}
					}));
					const A = {
							itemIds: e,
							modNote: a,
							reasonId: t ? t.id : null
						},
						C = await p(b(), A);
					if (C.ok) {
						if (c(W()), t) {
							c(Y());
							const a = {
									itemId: e,
									message: n,
									title: t.title,
									type: o
								},
								m = await v(b(), Object(_.h)(a, R), R);
							if (m.ok) {
								if (o === _.f.Public) {
									if (c($()), m.body) {
										const e = Object(P.a)(m.body, f),
											t = {
												comment: e,
												parentId: j
											},
											n = Object(S.g)(O),
											o = O.platform.currentPage && O.platform.currentPage.routeMatch;
										let a = n && o && Object(k.a)(o, O, O.posts.models[e.postId]);
										if (a || (a = Object(d.a)(e.postId, null, {
												sort: s.s,
												hasSortParam: !0
											})), R === _.e.Post) {
											const n = Object(r.a)(y.c.replyToPost, j);
											c(Object(i.mb)(Object.assign(Object.assign({}, t), {
												headCommentId: Object(I.x)(O, {
													commentsPageKey: a
												}),
												commentsPageKey: a,
												draftKey: n
											})));
											const o = O.postStickiedComments.data[j];
											c(Object(i.ib)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: a
											})), o && o !== e.id && c(Object(i.R)({
												[o]: {
													isStickied: !1
												}
											}))
										} else if (R === _.e.Comment) {
											const e = Object(r.a)(y.c.replyToComment, x.id),
												n = Object(I.j)(O, {
													commentId: j,
													commentsPageKey: a
												});
											c(Object(i.kb)(Object.assign(Object.assign({}, t), {
												parentCommentId: j,
												commentsPageKey: a,
												draftKey: e,
												depth: n + 1
											})))
										}
									}
								} else c(Z());
								return !0
							}
							return c(ee(m.error)), !1
						}
					} else c(X(C.error)), c(h({
						[j]: {
							modNote: x.modNote,
							modRemovalReason: x.modRemovalReason,
							modReasonBy: x.modReasonBy
						}
					}));
					return !1
				}, ne = (e, t, n, s, a) => async (d, r, i) => {
					let {
						apiContext: m
					} = i;
					const l = r(),
						b = l.user.account && l.user.account.displayText;
					if (!b) return;
					d(V());
					const O = Object(u.e)({
							kind: h.b.SuccessMod,
							text: o.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [o.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						f = {
							itemIds: e,
							modNote: a,
							reasonId: t ? t.id : null
						},
						j = await p(m(), f);
					if (j.ok) {
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
							a.ok ? (d(Z()), d(O)) : d(ee(a.error))
						} else d(O)
					} else d(X(j.error))
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
//# sourceMappingURL=removalReasonActions.11b7293e2cea0af8f0c2.js.map