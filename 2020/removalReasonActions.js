// https://www.redditstatic.com/desktop2x/removalReasonActions.d6341434f55d2a3155ba.js
// Retrieved at 6/23/2020, 1:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["removalReasonActions"], {
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return a
			})), o.d(t, "b", (function() {
				return d
			})), o.d(t, "a", (function() {
				return r
			}));
			var n = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/reddit/actions/bulkActions/constants.ts");
			const a = Object(n.a)(s.c),
				d = Object(n.a)(s.b),
				r = Object(n.a)(s.a)
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "removalReasonsPending", (function() {
				return C
			})), o.d(t, "removalReasonsLoaded", (function() {
				return T
			})), o.d(t, "removalReasonsFailed", (function() {
				return w
			})), o.d(t, "removalReasonsRequested", (function() {
				return K
			})), o.d(t, "removalReasonAddedPending", (function() {
				return M
			})), o.d(t, "removalReasonAddedSuccess", (function() {
				return B
			})), o.d(t, "removalReasonAddedFailed", (function() {
				return D
			})), o.d(t, "addRemovalReason", (function() {
				return E
			})), o.d(t, "editRemovalReasonPending", (function() {
				return N
			})), o.d(t, "editRemovalReasonSuccess", (function() {
				return L
			})), o.d(t, "editRemovalReasonFailed", (function() {
				return U
			})), o.d(t, "editRemovalReason", (function() {
				return F
			})), o.d(t, "deleteRemovalReasonPending", (function() {
				return q
			})), o.d(t, "deleteRemovalReasonSuccess", (function() {
				return H
			})), o.d(t, "deleteRemovalReasonFailed", (function() {
				return z
			})), o.d(t, "deleteRemovalReason", (function() {
				return G
			})), o.d(t, "removedItemsSelected", (function() {
				return J
			})), o.d(t, "fetchReasonsAndOpenModal", (function() {
				return Q
			})), o.d(t, "removalReasonSubmittedPending", (function() {
				return V
			})), o.d(t, "removalReasonSubmittedSuccess", (function() {
				return W
			})), o.d(t, "removalReasonSubmittedFailed", (function() {
				return X
			})), o.d(t, "removalReasonMessagePending", (function() {
				return Y
			})), o.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return Z
			})), o.d(t, "removalReasonPublicMessageSuccess", (function() {
				return $
			})), o.d(t, "removalReasonMessageFailed", (function() {
				return ee
			})), o.d(t, "submitRemovalReason", (function() {
				return te
			})), o.d(t, "submitBulkRemovalReason", (function() {
				return oe
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/constants/index.ts"),
				a = o("./src/lib/makeActionCreator/index.ts"),
				d = o("./src/lib/makeCommentsPageKey/index.ts"),
				r = o("./src/lib/makeDraftKey/index.ts"),
				c = o("./src/reddit/actions/bulkActions/index.ts"),
				i = o("./src/reddit/actions/comment/index.ts"),
				m = o("./src/reddit/actions/modal.ts"),
				l = o("./src/reddit/actions/post.ts"),
				u = o("./src/reddit/actions/toaster.ts"),
				b = o("./src/reddit/constants/modals.ts"),
				f = o("./src/lib/makeApiRequest/index.ts"),
				O = o("./src/lib/omitHeaders/index.ts"),
				R = o("./src/reddit/constants/headers.ts"),
				p = o("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const j = (e, t) => Object(f.a)(Object(O.a)(e, [R.a]), {
					endpoint: "".concat(e.apiUrl, "/api/v1/modactions/removal_reasons/"),
					method: s.cb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				v = (e, t, o) => Object(f.a)(Object(O.a)(e, [R.a]), {
					endpoint: Object(p.a)("".concat(e.apiUrl, "/api/v1/modactions/removal_").concat(o, "_message/")),
					method: s.cb.POST,
					type: "json",
					data: t
				});
			var P = o("./src/reddit/helpers/isPost.ts"),
				k = o("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				x = o("./src/reddit/helpers/routeKey/index.ts"),
				g = o("./src/reddit/models/ModQueue/index.ts"),
				y = o("./src/reddit/models/PostDraft/index.ts"),
				_ = o("./src/reddit/models/RemovalReason/index.ts"),
				h = o("./src/reddit/models/Toast/index.ts"),
				I = o("./src/reddit/selectors/comments.ts"),
				S = o("./src/reddit/selectors/platform.ts"),
				A = o("./src/reddit/actions/removalReasons/constants.ts");
			const C = Object(a.a)(A.k),
				T = Object(a.a)(A.l),
				w = Object(a.a)(A.j),
				K = e => async (t, o, n) => {
					let {
						apiContext: a
					} = n;
					const d = o().subreddits.models[e].name;
					t(C());
					const r = await ((e, t) => Object(f.a)(Object(O.a)(e, [R.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons.json"),
						method: s.cb.GET
					}))(a(), d);
					r.ok ? t(T({
						subredditId: e,
						response: r.body
					})) : t(w(r.error))
				}, M = Object(a.a)(A.b), B = Object(a.a)(A.c), D = Object(a.a)(A.a), E = (e, t) => async (o, a, d) => {
					let {
						apiContext: r
					} = d;
					const c = a().subreddits.models[e].name;
					o(M());
					const i = await ((e, t, o) => Object(f.a)(Object(O.a)(e, [R.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons"),
						method: s.cb.POST,
						data: o
					}))(r(), c, t);
					if (i.ok) {
						const {
							id: s
						} = i.body, a = Object.assign({}, t, {
							id: s
						});
						o(B({
							subredditId: e,
							reason: a
						})), o(Object(u.e)({
							kind: h.b.SuccessMod,
							text: n.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else o(D(i.error))
				}, N = Object(a.a)(A.h), L = Object(a.a)(A.i), U = Object(a.a)(A.g), F = (e, t) => async (o, a, d) => {
					let {
						apiContext: r
					} = d;
					const c = a().subreddits.models[e].name;
					o(N());
					const i = await ((e, t, o) => Object(f.a)(Object(O.a)(e, [R.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons/").concat(o.id),
						method: s.cb.PUT,
						data: {
							message: o.message,
							title: o.title
						}
					}))(r(), c, t);
					i.ok ? (o(L({
						subredditId: e,
						reason: t
					})), o(Object(u.e)({
						kind: h.b.SuccessMod,
						text: n.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : o(U(i.error))
				}, q = Object(a.a)(A.e), H = Object(a.a)(A.f), z = Object(a.a)(A.d), G = (e, t) => async (o, a, d) => {
					let {
						apiContext: r
					} = d;
					const c = a().subreddits.models[e].name;
					o(q());
					const i = await ((e, t, o) => Object(f.a)(Object(O.a)(e, [R.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons/").concat(o),
						method: s.cb.DELETE
					}))(r(), c, t);
					i.ok ? (o(H({
						subredditId: e,
						reasonId: t
					})), o(Object(u.e)({
						kind: h.b.SuccessMod,
						text: n.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : o(z(i.error))
				}, J = Object(a.a)(A.t), Q = (e, t) => async (o, n, s) => {
					let {
						apiContext: a
					} = s;
					const d = n();
					d.removalReasons.reasonOrder[e] && d.removalReasons.reasonOrder[e].length > 0 || o(K(e)), o(J({
						subredditId: e,
						itemIds: t
					})), o(Object(m.i)(b.a.ADD_REMOVAL_REASON))
				}, V = Object(a.a)(A.r), W = Object(a.a)(A.s), X = Object(a.a)(A.q), Y = Object(a.a)(A.n), Z = Object(a.a)(A.o), $ = Object(a.a)(A.p), ee = Object(a.a)(A.m), te = (e, t, o, n, a) => async (c, m, u) => {
					let {
						apiContext: b
					} = u;
					const f = m(),
						O = f.user.account && f.user.account.displayText,
						R = e[0],
						p = Object(P.a)(R) ? _.e.Post : _.e.Comment,
						g = p === _.e.Post ? f.posts.models[R] : f.comments.models[R],
						h = p === _.e.Post ? l.U : i.R;
					if (!g || !O) return;
					c(V()), c(h({
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
						C = await j(b(), A);
					if (C.ok) {
						if (c(W()), t) {
							c(Y());
							const a = {
									itemId: e,
									message: o,
									title: t.title,
									type: n
								},
								m = await v(b(), Object(_.h)(a, p), p);
							if (m.ok)
								if (n === _.f.Public) {
									if (c($()), m.body) {
										const e = Object(k.a)(m.body, O),
											t = {
												comment: e,
												parentId: R
											},
											o = Object(S.g)(f),
											n = f.platform.currentPage && f.platform.currentPage.routeMatch;
										let a = o && n && Object(x.a)(n, f, f.posts.models[e.postId]);
										if (a || (a = Object(d.a)(e.postId, null, {
												sort: s.s,
												hasSortParam: !0
											})), p === _.e.Post) {
											const o = Object(r.a)(y.c.replyToPost, R);
											c(Object(i.mb)(Object.assign({}, t, {
												headCommentId: Object(I.x)(f, {
													commentsPageKey: a
												}),
												commentsPageKey: a,
												draftKey: o
											})));
											const n = f.postStickiedComments.data[R];
											c(Object(i.ib)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: a
											})), n && n !== e.id && c(Object(i.R)({
												[n]: {
													isStickied: !1
												}
											}))
										} else if (p === _.e.Comment) {
											const e = Object(r.a)(y.c.replyToComment, g.id),
												o = Object(I.j)(f, {
													commentId: R,
													commentsPageKey: a
												});
											c(Object(i.kb)(Object.assign({}, t, {
												parentCommentId: R,
												commentsPageKey: a,
												draftKey: e,
												depth: o + 1
											})))
										}
									}
								} else c(Z());
							else c(ee(m.error))
						}
					} else c(X(C.error)), c(h({
						[R]: {
							modNote: g.modNote,
							modRemovalReason: g.modRemovalReason,
							modReasonBy: g.modReasonBy
						}
					}))
				}, oe = (e, t, o, s, a) => async (d, r, i) => {
					let {
						apiContext: m
					} = i;
					const l = r(),
						b = l.user.account && l.user.account.displayText;
					if (!b) return;
					d(V());
					const f = Object(u.e)({
							kind: h.b.SuccessMod,
							text: n.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [n.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						O = {
							itemIds: e,
							modNote: a,
							reasonId: t ? t.id : null
						},
						R = await j(m(), O);
					if (R.ok) {
						const n = {
							ids: e,
							operation: g.a.RemovalReason,
							username: b,
							options: {
								modNote: a,
								removalReason: t && t.title
							}
						};
						if (d(Object(c.b)(n)), t) {
							const n = {
									itemId: e,
									message: o,
									title: t.title,
									type: s
								},
								a = await v(m(), Object(_.h)(n, _.e.Bulk), _.e.Bulk);
							a.ok ? (d(Z()), d(f)) : d(ee(a.error))
						} else d(f)
					} else d(X(R.error))
				}
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return s
			})), o.d(t, "d", (function() {
				return a
			})), o.d(t, "a", (function() {
				return d
			})), o.d(t, "b", (function() {
				return r
			})), o.d(t, "f", (function() {
				return c
			})), o.d(t, "e", (function() {
				return i
			})), o.d(t, "g", (function() {
				return m
			})), o.d(t, "h", (function() {
				return l
			}));
			var n = o("./src/reddit/helpers/isPost.ts");
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
			const m = e => 1 === e.length ? Object(n.a)(e[0]) ? i.Post : i.Comment : i.Bulk,
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
//# sourceMappingURL=removalReasonActions.d6341434f55d2a3155ba.js.map