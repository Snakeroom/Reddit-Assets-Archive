// https://www.redditstatic.com/desktop2x/removalReasonActions.00dd25f0d069d8d376eb.js
// Retrieved at 3/17/2020, 2:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["removalReasonActions"], {
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return a
			})), o.d(t, "b", (function() {
				return d
			})), o.d(t, "a", (function() {
				return c
			}));
			var n = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/reddit/actions/bulkActions/constants.ts");
			const a = Object(n.a)(s.c),
				d = Object(n.a)(s.b),
				c = Object(n.a)(s.a)
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, o) {
			"use strict";
			o.r(t);
			var n = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/lib/constants/index.ts"),
				a = o("./src/lib/makeCommentsPageKey/index.ts"),
				d = o("./src/lib/makeDraftKey/index.ts"),
				c = o("./src/reddit/helpers/isPost.ts"),
				r = o("./src/reddit/helpers/routeKey/index.ts"),
				i = o("./src/reddit/models/PostDraft/index.ts"),
				m = o("./src/reddit/actions/bulkActions/index.ts"),
				l = o("./src/reddit/actions/comment/index.ts"),
				u = o("./src/reddit/actions/modal.ts"),
				b = o("./src/reddit/actions/post.ts"),
				O = o("./src/reddit/actions/toaster.ts"),
				j = o("./src/reddit/constants/modals.ts"),
				R = o("./src/lib/makeApiRequest/index.ts"),
				f = o("./src/lib/omitHeaders/index.ts"),
				p = o("./src/reddit/constants/headers.ts"),
				v = o("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const P = (e, t) => Object(R.b)(Object(f.a)(e, [p.a]), {
					endpoint: "".concat(e.apiUrl, "/api/v1/modactions/removal_reasons/"),
					method: s.db.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				x = (e, t, o) => Object(R.b)(Object(f.a)(e, [p.a]), {
					endpoint: Object(v.a)("".concat(e.apiUrl, "/api/v1/modactions/removal_").concat(o, "_message/")),
					method: s.db.POST,
					type: "json",
					data: t
				});
			var g = o("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				y = o("./src/reddit/i18n/utils.ts"),
				k = o("./src/reddit/models/ModQueue/index.ts"),
				_ = o("./src/reddit/models/RemovalReason/index.ts"),
				h = o("./src/reddit/models/Toast/index.ts"),
				I = o("./src/reddit/selectors/comments.ts"),
				S = o("./src/reddit/selectors/platform.ts"),
				A = o("./src/reddit/actions/removalReasons/constants.ts");
			o.d(t, "removalReasonsPending", (function() {
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
				return J
			})), o.d(t, "deleteRemovalReason", (function() {
				return z
			})), o.d(t, "removedItemsSelected", (function() {
				return G
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
			const C = Object(n.a)(A.k),
				T = Object(n.a)(A.l),
				w = Object(n.a)(A.j),
				K = e => async (t, o, n) => {
					let {
						apiContext: a
					} = n;
					const d = o().subreddits.models[e].name;
					t(C());
					const c = await ((e, t) => Object(R.b)(Object(f.a)(e, [p.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons.json"),
						method: s.db.GET
					}))(a(), d);
					c.ok ? t(T({
						subredditId: e,
						response: c.body
					})) : t(w(c.error))
				}, M = Object(n.a)(A.b), B = Object(n.a)(A.c), D = Object(n.a)(A.a), E = (e, t) => async (o, n, a) => {
					let {
						apiContext: d
					} = a;
					const c = n().subreddits.models[e].name;
					o(M());
					const r = await ((e, t, o) => Object(R.b)(Object(f.a)(e, [p.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons"),
						method: s.db.POST,
						data: o
					}))(d(), c, t);
					if (r.ok) {
						const {
							id: n
						} = r.body, s = Object.assign({}, t, {
							id: n
						});
						o(B({
							subredditId: e,
							reason: s
						})), o(Object(O.e)({
							kind: h.b.SuccessMod,
							text: Object(y.c)("Removal reason added!")
						}))
					} else o(D(r.error))
				}, N = Object(n.a)(A.h), L = Object(n.a)(A.i), U = Object(n.a)(A.g), F = (e, t) => async (o, n, a) => {
					let {
						apiContext: d
					} = a;
					const c = n().subreddits.models[e].name;
					o(N());
					const r = await ((e, t, o) => Object(R.b)(Object(f.a)(e, [p.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons/").concat(o.id),
						method: s.db.PUT,
						data: {
							message: o.message,
							title: o.title
						}
					}))(d(), c, t);
					r.ok ? (o(L({
						subredditId: e,
						reason: t
					})), o(Object(O.e)({
						kind: h.b.SuccessMod,
						text: Object(y.c)("Removal reason saved")
					}))) : o(U(r.error))
				}, q = Object(n.a)(A.e), H = Object(n.a)(A.f), J = Object(n.a)(A.d), z = (e, t) => async (o, n, a) => {
					let {
						apiContext: d
					} = a;
					const c = n().subreddits.models[e].name;
					o(q());
					const r = await ((e, t, o) => Object(R.b)(Object(f.a)(e, [p.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons/").concat(o),
						method: s.db.DELETE
					}))(d(), c, t);
					r.ok ? (o(H({
						subredditId: e,
						reasonId: t
					})), o(Object(O.e)({
						kind: h.b.SuccessMod,
						text: Object(y.c)("Removal reason deleted")
					}))) : o(J(r.error))
				}, G = Object(n.a)(A.t), Q = (e, t) => async (o, n, s) => {
					let {
						apiContext: a
					} = s;
					const d = n();
					d.removalReasons.reasonOrder[e] && d.removalReasons.reasonOrder[e].length > 0 || o(K(e)), o(G({
						subredditId: e,
						itemIds: t
					})), o(Object(u.i)(j.a.ADD_REMOVAL_REASON))
				}, V = Object(n.a)(A.r), W = Object(n.a)(A.s), X = Object(n.a)(A.q), Y = Object(n.a)(A.n), Z = Object(n.a)(A.o), $ = Object(n.a)(A.p), ee = Object(n.a)(A.m), te = (e, t, o, n, m) => async (u, O, j) => {
					let {
						apiContext: R
					} = j;
					const f = O(),
						p = f.user.account && f.user.account.displayText,
						v = e[0],
						y = Object(c.a)(v) ? _.e.Post : _.e.Comment,
						k = y === _.e.Post ? f.posts.models[v] : f.comments.models[v],
						h = y === _.e.Post ? b.S : l.R;
					if (!k || !p) return;
					u(V()), u(h({
						[v]: {
							modNote: m,
							modRemovalReason: t && t.title,
							modReasonBy: p
						}
					}));
					const A = {
							itemIds: e,
							modNote: m,
							reasonId: t ? t.id : null
						},
						C = await P(R(), A);
					if (C.ok) {
						if (u(W()), t) {
							u(Y());
							const c = {
									itemId: e,
									message: o,
									title: t.title,
									type: n
								},
								m = await x(R(), Object(_.h)(c, y), y);
							if (m.ok)
								if (n === _.f.Public) {
									if (u($()), m.body) {
										const e = Object(g.a)(m.body, p),
											t = {
												comment: e,
												parentId: v
											},
											o = Object(S.g)(f),
											n = f.platform.currentPage && f.platform.currentPage.routeMatch;
										let c = o && n && Object(r.a)(n, f, f.posts.models[e.postId]);
										if (c || (c = Object(a.a)(e.postId, null, {
												sort: s.t,
												hasSortParam: !0
											})), y === _.e.Post) {
											const o = Object(d.a)(i.c.replyToPost, v);
											u(Object(l.mb)(Object.assign({}, t, {
												headCommentId: Object(I.x)(f, {
													commentsPageKey: c
												}),
												commentsPageKey: c,
												draftKey: o
											})));
											const n = f.postStickiedComments.data[v];
											u(Object(l.ib)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: c
											})), n && n !== e.id && u(Object(l.R)({
												[n]: {
													isStickied: !1
												}
											}))
										} else if (y === _.e.Comment) {
											const e = Object(d.a)(i.c.replyToComment, k.id),
												o = Object(I.j)(f, {
													commentId: v,
													commentsPageKey: c
												});
											u(Object(l.kb)(Object.assign({}, t, {
												parentCommentId: v,
												commentsPageKey: c,
												draftKey: e,
												depth: o + 1
											})))
										}
									}
								} else u(Z());
							else u(ee(m.error))
						}
					} else u(X(C.error)), u(h({
						[v]: {
							modNote: k.modNote,
							modRemovalReason: k.modRemovalReason,
							modReasonBy: k.modReasonBy
						}
					}))
				}, oe = (e, t, o, n, s) => async (a, d, c) => {
					let {
						apiContext: r
					} = c;
					const i = d(),
						l = i.user.account && i.user.account.displayText;
					if (!l) return;
					a(V());
					const u = Object(O.e)({
							kind: h.b.SuccessMod,
							text: Object(y.c)("Added removal reason for ".concat(Object(y.b)("number", e.length), " posts/comments"))
						}),
						b = {
							itemIds: e,
							modNote: s,
							reasonId: t ? t.id : null
						},
						j = await P(r(), b);
					if (j.ok) {
						const d = {
							ids: e,
							operation: k.a.RemovalReason,
							username: l,
							options: {
								modNote: s,
								removalReason: t && t.title
							}
						};
						if (a(Object(m.b)(d)), t) {
							const s = {
									itemId: e,
									message: o,
									title: t.title,
									type: n
								},
								d = await x(r(), Object(_.h)(s, _.e.Bulk), _.e.Bulk);
							d.ok ? (a(Z()), a(u)) : a(ee(d.error))
						} else a(u)
					} else a(X(j.error))
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
				return c
			})), o.d(t, "f", (function() {
				return r
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
				c = 100;
			var r, i;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public"
			}(r || (r = {})),
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
//# sourceMappingURL=removalReasonActions.00dd25f0d069d8d376eb.js.map