// https://www.redditstatic.com/desktop2x/removalReasonActions.9c3c26420c6e98fe7cd4.js
// Retrieved at 10/26/2020, 11:00:17 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["removalReasonActions"], {
		"./src/reddit/actions/bulkActions/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const o = "BULKACTION_PENDING",
				r = "BULKACTION_LOADED",
				s = "BULKACTION_FAILED"
		},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/bulkActions/constants.ts");
			const s = Object(o.a)(r.c),
				a = Object(o.a)(r.b),
				c = Object(o.a)(r.a)
		},
		"./src/reddit/actions/removalReasons/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return o
			})), n.d(t, "l", (function() {
				return r
			})), n.d(t, "j", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "r", (function() {
				return p
			})), n.d(t, "s", (function() {
				return R
			})), n.d(t, "q", (function() {
				return O
			})), n.d(t, "n", (function() {
				return S
			})), n.d(t, "o", (function() {
				return E
			})), n.d(t, "p", (function() {
				return _
			})), n.d(t, "m", (function() {
				return v
			})), n.d(t, "t", (function() {
				return A
			}));
			const o = "REMOVALREASONS__LOAD_PENDING",
				r = "REMOVALREASONS__LOAD_SUCCESS",
				s = "REMOVALREASONS__LOAD_FAILED",
				a = "REMOVALREASONS__ADD_PENDING",
				c = "REMOVALREASONS__ADD_SUCCESS",
				i = "REMOVALREASONS__ADD_FAILED",
				d = "REMOVALREASONS__EDIT_PENDING",
				u = "REMOVALREASONS__EDIT_SUCCESS",
				l = "REMOVALREASONS__EDIT_FAILED",
				m = "REMOVALREASONS__DELETE_PENDING",
				f = "REMOVALREASONS__DELETE_SUCCESS",
				b = "REMOVALREASONS__DELETE_FAILED",
				p = "REMOVALREASONS__SUBMIT_PENDING",
				R = "REMOVALREASONS__SUBMIT_SUCCESS",
				O = "REMOVALREASONS__SUBMIT_FAILED",
				S = "REMOVALREASONS__MESSAGE_PENDING",
				E = "REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS",
				_ = "REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS",
				v = "REMOVALREASONS__MESSAGE_FAILED",
				A = "REMOVALREASONS__REMOVEDITEMS_SELECTED"
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "removalReasonsPending", (function() {
				return h
			})), n.d(t, "removalReasonsLoaded", (function() {
				return P
			})), n.d(t, "removalReasonsFailed", (function() {
				return D
			})), n.d(t, "removalReasonsRequested", (function() {
				return M
			})), n.d(t, "removalReasonAddedPending", (function() {
				return x
			})), n.d(t, "removalReasonAddedSuccess", (function() {
				return C
			})), n.d(t, "removalReasonAddedFailed", (function() {
				return U
			})), n.d(t, "addRemovalReason", (function() {
				return T
			})), n.d(t, "editRemovalReasonPending", (function() {
				return B
			})), n.d(t, "editRemovalReasonSuccess", (function() {
				return F
			})), n.d(t, "editRemovalReasonFailed", (function() {
				return w
			})), n.d(t, "editRemovalReason", (function() {
				return V
			})), n.d(t, "deleteRemovalReasonPending", (function() {
				return K
			})), n.d(t, "deleteRemovalReasonSuccess", (function() {
				return G
			})), n.d(t, "deleteRemovalReasonFailed", (function() {
				return W
			})), n.d(t, "deleteRemovalReason", (function() {
				return q
			})), n.d(t, "removedItemsSelected", (function() {
				return H
			})), n.d(t, "fetchReasonsAndOpenModal", (function() {
				return J
			})), n.d(t, "removalReasonSubmittedPending", (function() {
				return z
			})), n.d(t, "removalReasonSubmittedSuccess", (function() {
				return Q
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
				r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/makeCommentsPageKey/index.ts"),
				c = n("./src/lib/makeDraftKey/index.ts"),
				i = n("./src/reddit/actions/bulkActions/index.ts"),
				d = n("./src/reddit/actions/comment/index.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/reddit/constants/modals.ts"),
				b = n("./src/lib/makeApiRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				R = n("./src/reddit/constants/headers.ts"),
				O = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const S = (e, t) => Object(b.a)(Object(p.a)(e, [R.a]), {
					endpoint: "".concat(e.apiUrl, "/api/v1/modactions/removal_reasons/"),
					method: r.db.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				E = (e, t, n) => Object(b.a)(Object(p.a)(e, [R.a]), {
					endpoint: Object(O.a)("".concat(e.apiUrl, "/api/v1/modactions/removal_").concat(n, "_message/")),
					method: r.db.POST,
					type: "json",
					data: t
				});
			var _ = n("./src/reddit/helpers/isPost.ts"),
				v = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				A = n("./src/reddit/helpers/routeKey/index.ts"),
				j = n("./src/reddit/models/ModQueue/index.ts"),
				N = n("./src/reddit/models/PostDraft/index.ts"),
				k = n("./src/reddit/models/RemovalReason/index.ts"),
				I = n("./src/reddit/models/Toast/index.ts"),
				L = n("./src/reddit/selectors/comments.ts"),
				g = n("./src/reddit/selectors/platform.ts"),
				y = n("./src/reddit/actions/removalReasons/constants.ts");
			const h = Object(s.a)(y.k),
				P = Object(s.a)(y.l),
				D = Object(s.a)(y.j),
				M = e => async (t, n, o) => {
					let {
						apiContext: s
					} = o;
					const a = n().subreddits.models[e].name;
					t(h());
					const c = await ((e, t) => Object(b.a)(Object(p.a)(e, [R.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons.json"),
						method: r.db.GET
					}))(s(), a);
					c.ok ? t(P({
						subredditId: e,
						response: c.body
					})) : t(D(c.error))
				}, x = Object(s.a)(y.b), C = Object(s.a)(y.c), U = Object(s.a)(y.a), T = (e, t) => async (n, s, a) => {
					let {
						apiContext: c
					} = a;
					const i = s().subreddits.models[e].name;
					n(x());
					const d = await ((e, t, n) => Object(b.a)(Object(p.a)(e, [R.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons"),
						method: r.db.POST,
						data: n
					}))(c(), i, t);
					if (d.ok) {
						const {
							id: r
						} = d.body, s = Object.assign(Object.assign({}, t), {
							id: r
						});
						n(C({
							subredditId: e,
							reason: s
						})), n(Object(m.e)({
							kind: I.b.SuccessMod,
							text: o.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else n(U(d.error))
				}, B = Object(s.a)(y.h), F = Object(s.a)(y.i), w = Object(s.a)(y.g), V = (e, t) => async (n, s, a) => {
					let {
						apiContext: c
					} = a;
					const i = s().subreddits.models[e].name;
					n(B());
					const d = await ((e, t, n) => Object(b.a)(Object(p.a)(e, [R.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons/").concat(n.id),
						method: r.db.PUT,
						data: {
							message: n.message,
							title: n.title
						}
					}))(c(), i, t);
					d.ok ? (n(F({
						subredditId: e,
						reason: t
					})), n(Object(m.e)({
						kind: I.b.SuccessMod,
						text: o.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : n(w(d.error))
				}, K = Object(s.a)(y.e), G = Object(s.a)(y.f), W = Object(s.a)(y.d), q = (e, t) => async (n, s, a) => {
					let {
						apiContext: c
					} = a;
					const i = s().subreddits.models[e].name;
					n(K());
					const d = await ((e, t, n) => Object(b.a)(Object(p.a)(e, [R.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons/").concat(n),
						method: r.db.DELETE
					}))(c(), i, t);
					d.ok ? (n(G({
						subredditId: e,
						reasonId: t
					})), n(Object(m.e)({
						kind: I.b.SuccessMod,
						text: o.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : n(W(d.error))
				}, H = Object(s.a)(y.t), J = (e, t) => async (n, o, r) => {
					let {
						apiContext: s
					} = r;
					const a = o();
					a.removalReasons.reasonOrder[e] && a.removalReasons.reasonOrder[e].length > 0 || n(M(e)), n(H({
						subredditId: e,
						itemIds: t
					})), n(Object(u.i)(f.a.ADD_REMOVAL_REASON))
				}, z = Object(s.a)(y.r), Q = Object(s.a)(y.s), X = Object(s.a)(y.q), Y = Object(s.a)(y.n), Z = Object(s.a)(y.o), $ = Object(s.a)(y.p), ee = Object(s.a)(y.m), te = (e, t, n, o, s) => async (i, u, m) => {
					let {
						apiContext: f
					} = m;
					const b = u(),
						p = b.user.account && b.user.account.displayText,
						R = e[0],
						O = Object(_.a)(R) ? k.e.Post : k.e.Comment,
						j = O === k.e.Post ? b.posts.models[R] : b.comments.models[R],
						I = O === k.e.Post ? l.J : d.R;
					if (!j || !p) return !1;
					i(z()), i(I({
						[R]: {
							modNote: s,
							modRemovalReason: t && t.title,
							modReasonBy: p
						}
					}));
					const y = {
							itemIds: e,
							modNote: s,
							reasonId: t ? t.id : null
						},
						h = await S(f(), y);
					if (h.ok) {
						if (i(Q()), t) {
							i(Y());
							const s = {
									itemId: e,
									message: n,
									title: t.title,
									type: o
								},
								u = await E(f(), Object(k.h)(s, O), O);
							if (u.ok) {
								if (o === k.f.Public) {
									if (i($()), u.body) {
										const e = Object(v.a)(u.body, p),
											t = {
												comment: e,
												parentId: R
											},
											n = Object(g.g)(b),
											o = b.platform.currentPage && b.platform.currentPage.routeMatch;
										let s = n && o && Object(A.a)(o, b, b.posts.models[e.postId]);
										if (s || (s = Object(a.a)(e.postId, null, {
												sort: r.s,
												hasSortParam: !0
											})), O === k.e.Post) {
											const n = Object(c.a)(N.c.replyToPost, R);
											i(Object(d.mb)(Object.assign(Object.assign({}, t), {
												headCommentId: Object(L.x)(b, {
													commentsPageKey: s
												}),
												commentsPageKey: s,
												draftKey: n
											})));
											const o = b.postStickiedComments.data[R];
											i(Object(d.ib)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: s
											})), o && o !== e.id && i(Object(d.R)({
												[o]: {
													isStickied: !1
												}
											}))
										} else if (O === k.e.Comment) {
											const e = Object(c.a)(N.c.replyToComment, j.id),
												n = Object(L.j)(b, {
													commentId: R,
													commentsPageKey: s
												});
											i(Object(d.kb)(Object.assign(Object.assign({}, t), {
												parentCommentId: R,
												commentsPageKey: s,
												draftKey: e,
												depth: n + 1
											})))
										}
									}
								} else i(Z());
								return !0
							}
							return i(ee(u.error)), !1
						}
					} else i(X(h.error)), i(I({
						[R]: {
							modNote: j.modNote,
							modRemovalReason: j.modRemovalReason,
							modReasonBy: j.modReasonBy
						}
					}));
					return !1
				}, ne = (e, t, n, r, s) => async (a, c, d) => {
					let {
						apiContext: u
					} = d;
					const l = c(),
						f = l.user.account && l.user.account.displayText;
					if (!f) return;
					a(z());
					const b = Object(m.e)({
							kind: I.b.SuccessMod,
							text: o.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [o.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						p = {
							itemIds: e,
							modNote: s,
							reasonId: t ? t.id : null
						},
						R = await S(u(), p);
					if (R.ok) {
						const o = {
							ids: e,
							operation: j.a.RemovalReason,
							username: f,
							options: {
								modNote: s,
								removalReason: t && t.title
							}
						};
						if (a(Object(i.b)(o)), t) {
							const o = {
									itemId: e,
									message: n,
									title: t.title,
									type: r
								},
								s = await E(u(), Object(k.h)(o, k.e.Bulk), k.e.Bulk);
							s.ok ? (a(Z()), a(b)) : a(ee(s.error))
						} else a(b)
					} else a(X(R.error))
				}
		},
		"./src/reddit/models/ModQueue/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return d
			}));
			var o = n("./src/reddit/helpers/isPost.ts"),
				r = n("./src/reddit/models/Flair/index.ts");
			const s = 1;
			var a;
			! function(e) {
				e.Approve = "approve", e.Flair = "flair", e.IgnoreReports = "ignore_reports", e.Lock = "lock", e.MarkNSFW = "mark_nsfw", e.RemovalReason = "removal_reason", e.Remove = "remove", e.Spam = "spam", e.Spoiler = "spoiler", e.UnignoreReports = "unignore_reports", e.Unlock = "unlock", e.UnmarkNSFW = "unmark_nsfw", e.Unspoiler = "unspoiler"
			}(a || (a = {}));
			const c = {},
				i = {
					ignore_reports: a.UnignoreReports,
					lock: a.Unlock,
					mark_nsfw: a.UnmarkNSFW,
					remove: a.Approve,
					spam: a.Approve,
					spoiler: a.Unspoiler,
					unignore_reports: a.IgnoreReports,
					unlock: a.Lock,
					unmark_nsfw: a.MarkNSFW,
					unspoiler: a.Spoiler
				},
				d = (e, t, n, s, i) => {
					switch (t) {
						case "approve": {
							const e = {};
							return n.forEach(t => {
								e[t] = {
									approvedBy: s,
									isApproved: !0,
									isRemoved: !1,
									isSpam: !1,
									bannedBy: null,
									modNote: null,
									modReasonBy: null,
									modRemovalReason: null,
									numReports: 0
								}
							}), e
						}
						case "flair": {
							const t = {};
							return n.forEach(n => {
								if (Object(o.a)(n)) {
									const o = e[n].flair.filter(e => e.type === r.f.Nsfw || e.type === r.f.Spoiler);
									i && i.flair && o.push(i.flair), t[n] = {
										flair: o
									}
								}
							}), t
						}
						case "ignore_reports": {
							const e = {};
							return n.forEach(t => {
								e[t] = {
									ignoreReports: !0
								}
							}), e
						}
						case "lock": {
							const e = {};
							return n.forEach(t => {
								e[t] = {
									isLocked: !0
								}
							}), e
						}
						case "mark_nsfw": {
							const t = {},
								s = {
									text: "nsfw",
									type: r.f.Nsfw
								};
							return n.forEach(n => {
								if (Object(o.a)(n)) {
									const o = e[n],
										r = o.isNSFW ? o.flair : o.flair ? [...o.flair, s] : {
											[n]: s
										};
									t[n] = {
										isNSFW: !0,
										flair: r
									}
								}
							}), t
						}
						case "remove": {
							const e = {};
							return n.forEach(t => {
								e[t] = {
									approvedBy: null,
									isApproved: !1,
									isRemoved: !0,
									isSpam: !1,
									bannedBy: s
								}
							}), e
						}
						case "spam": {
							const e = {};
							return n.forEach(t => {
								e[t] = {
									approvedBy: null,
									isApproved: !1,
									isRemoved: !1,
									isSpam: !0,
									bannedBy: s
								}
							}), e
						}
						case "spoiler": {
							const t = {},
								s = {
									text: "spoiler",
									type: r.f.Spoiler
								};
							return n.forEach(n => {
								if (Object(o.a)(n)) {
									const o = e[n],
										r = o.isSpoiler ? o.flair : o.flair ? [...o.flair, s] : {
											[n]: s
										};
									t[n] = {
										isSpoiler: !0,
										flair: r
									}
								}
							}), t
						}
						case "unignore_reports": {
							const e = {};
							return n.forEach(t => {
								e[t] = {
									ignoreReports: !1
								}
							}), e
						}
						case "unlock": {
							const e = {};
							return n.forEach(t => {
								e[t] = {
									isLocked: !1
								}
							}), e
						}
						case "unmark_nsfw": {
							const t = {};
							return n.forEach(n => {
								if (Object(o.a)(n)) {
									const o = e[n],
										s = o.flair ? o.flair.filter(e => e.type !== r.f.Nsfw) : null;
									t[n] = {
										isNSFW: !1,
										flair: s
									}
								}
							}), t
						}
						case "unspoiler": {
							const t = {};
							return n.forEach(n => {
								if (Object(o.a)(n)) {
									const o = e[n],
										s = o.flair ? o.flair.filter(e => e.type !== r.f.Spoiler) : null;
									t[n] = {
										isSpoiler: !1,
										flair: s
									}
								}
							}), t
						}
						case a.RemovalReason: {
							const e = {};
							return n.forEach(t => {
								e[t] = {
									modNote: i && i.modNote,
									modReasonBy: s,
									modRemovalReason: i && i.removalReason
								}
							}), e
						}
						default:
							return c
					}
				}
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "h", (function() {
				return l
			}));
			var o = n("./src/reddit/helpers/isPost.ts");
			const r = 20,
				s = 50,
				a = 1e4,
				c = 100;
			var i, d;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public"
			}(i || (i = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(d || (d = {}));
			const u = e => 1 === e.length ? Object(o.a)(e[0]) ? d.Post : d.Comment : d.Bulk,
				l = (e, t) => {
					return {
						[t === d.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type
					}
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/removalReasonActions.9c3c26420c6e98fe7cd4.js.map