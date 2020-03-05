// https://www.redditstatic.com/desktop2x/ModQueue~ModQueuePages.5e66b5982a5e1ec6e6d5.js
// Retrieved at 3/5/2020, 3:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueue~ModQueuePages", "removalReasonActions"], {
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return a
			})), o.d(t, "b", (function() {
				return r
			})), o.d(t, "a", (function() {
				return c
			}));
			var n = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/reddit/actions/bulkActions/constants.ts");
			const a = Object(n.a)(s.c),
				r = Object(n.a)(s.b),
				c = Object(n.a)(s.a)
		},
		"./src/reddit/actions/modQueue/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "e", (function() {
				return E
			})), o.d(t, "d", (function() {
				return L
			})), o.d(t, "f", (function() {
				return F
			})), o.d(t, "a", (function() {
				return W
			})), o.d(t, "b", (function() {
				return H
			})), o.d(t, "c", (function() {
				return J
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./src/app/strings/index.ts"),
				s = o("./src/lib/constants/index.ts"),
				a = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/reddit/actions/bulkActions/index.ts"),
				c = o("./src/reddit/actions/removalReasons/index.ts"),
				d = o("./src/reddit/actions/toaster.ts"),
				i = o("./src/reddit/endpoints/modQueue/index.ts"),
				u = o("./src/reddit/helpers/flair.ts"),
				m = o("./src/reddit/helpers/isPost.ts"),
				l = o("./src/reddit/i18n/utils.ts"),
				b = o("./src/reddit/models/ModQueue/index.ts"),
				O = o("./src/reddit/models/Toast/index.ts"),
				j = o("./src/reddit/selectors/modQueue.ts"),
				p = o("./src/reddit/selectors/subreddit.ts"),
				f = o("./src/reddit/selectors/telemetry.ts"),
				g = o("./src/reddit/selectors/user.ts"),
				v = o("./src/telemetry/index.ts"),
				R = o("./src/reddit/actions/modQueue/constants.ts");
			const y = Object(a.a)(R.j),
				x = Object(a.a)(R.i),
				k = Object(a.a)(R.h),
				P = Object(a.a)(R.g),
				h = Object(a.a)(R.f),
				A = Object(a.a)(R.e),
				C = Object(a.a)(R.n),
				Q = Object(a.a)(R.m),
				_ = Object(a.a)(R.l),
				I = Object(a.a)(R.q),
				T = Object(a.a)(R.p),
				M = Object(a.a)(R.o),
				S = Object(a.a)(R.w),
				w = Object(a.a)(R.v),
				N = Object(a.a)(R.u),
				E = (e, t, o) => async (a, r, c) => {
					let u, m, l, {
						apiContext: j
					} = c;
					switch (t) {
						case s.gb.Edited:
							u = P, m = A, l = h;
							break;
						case s.gb.Modqueue:
							u = y, m = k, l = x;
							break;
						case s.gb.Reports:
							u = C, m = _, l = Q;
							break;
						case s.gb.Spam:
							u = I, m = M, l = T;
							break;
						case s.gb.Unmoderated:
							u = S, m = N, l = w;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					a(u());
					const p = await Object(i.b)(j(), t, o);
					if (p.ok) {
						a(l({
							listingKey: e,
							page: "".concat(o.page || b.b),
							response: p.body
						}))
					} else {
						const e = Object(g.O)(r());
						a(m(p.error)), a(Object(d.e)({
							kind: O.b.Error,
							text: Object(n.a)(e, "subredditModeration.modQueue.toastText.somethingWentWrong")
						}))
					}
				}, K = Object(a.a)(R.k), B = Object(a.a)(R.b), L = e => async (t, o, s) => {
					let {
						apiContext: a
					} = s;
					const r = o(),
						c = r.modQueue.moderatedCommunitiesOrder.after,
						u = r.modQueue.moderatedCommunitiesOrder.pending,
						m = r.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: l
						} = r.platform.currentPage.urlParams,
						b = l;
					if (e && u || m || !c) return;
					const j = await Object(i.b)(a(), b, {
						moderated_after: c
					});
					if (j.ok) t(K(j.body)), j.body.moderatedAfter ? t(L()) : t(B());
					else {
						const e = Object(g.O)(o());
						t(Object(d.e)({
							kind: O.b.Error,
							text: Object(n.a)(e, "subredditModeration.modQueue.toastText.somethingWentWrong")
						}))
					}
				}, D = Object(a.a)(R.t), U = Object(a.a)(R.s), q = Object(a.a)(R.r), F = (e, t, o) => async (s, a, R) => {
					let {
						apiContext: y
					} = R;
					s(Object(r.c)());
					const x = a(),
						k = x.user.language,
						P = Object(j.f)(x),
						h = x.user.account && x.user.account.displayText,
						A = Object(n.a)(k, "subredditModeration.modQueue.toastText.".concat(e)),
						C = Object(n.a)(k, "subredditModeration.modQueue.toastText.postsComments");
					for (let t = 0; t < P.length; t++) {
						const o = P[t];
						let n = e;
						[b.a.Approve, b.a.Remove, b.a.Spam].includes(e) && (Object(m.a)(o) ? n += "_link" : n += "_comment"), Object(v.a)(Object.assign({
							source: "bulk_mod_action",
							action: "click",
							noun: n
						}, f.defaults(x), {
							actionInfo: f.actionInfo(x, {
								count: P.length,
								paneName: x.platform.currentPage ? x.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: f.comment(x, o),
							post: f.post(x, o),
							profile: f.profileByPostOrCommentId(x, o),
							screen: f.screen(x),
							subreddit: f.subredditByPostOrCommentId(x, o)
						}))
					}
					const Q = {
						ids: P
					};
					t && (Q.text = Object(u.g)(t) || "", Q.flairTemplateId = ""), o && (Q.cssClass = o, Q.flairTemplateId = o);
					const _ = await Object(i.a)(y(), e, Q);
					if (_.ok)
						if (s(Object(r.b)(Object.assign({}, _.body, {
								operation: e,
								ids: P,
								username: h,
								options: {
									flair: t
								}
							}))), e !== b.a.Approve && e !== b.a.Flair) {
							let t, o;
							const a = x.platform.currentPage && x.platform.currentPage.queryParams && x.platform.currentPage.queryParams.subreddit,
								u = a && Object(p.D)(x, a);
							e === b.a.Remove && u && P.length > 1 && (t = Object(l.c)("Add a removal reason"), o = Object(c.fetchReasonsAndOpenModal)(u, P));
							const m = Object(d.d)("".concat(P.length, " ").concat(C, " ").concat(A), O.b.Undo, Object(n.a)(k, "subredditModeration.modQueue.toastText.undo"), (() => async (e, t, o) => {
								let {
									apiContext: s
								} = o;
								e(D());
								const a = t(),
									c = Object.keys(a.modQueue.bulkAction.undoLastAction)[0],
									u = a.modQueue.bulkAction.undoLastAction[c],
									m = a.user.account && a.user.account.displayText;
								e(Object(r.c)());
								const l = await Object(i.a)(s(), c, {
									ids: u
								});
								if (l.ok) e(U(Object.assign({}, l.body, {
									operation: c,
									ids: u,
									username: m
								})));
								else {
									const o = Object(g.O)(t());
									e(q(l.error)), e(Object(d.e)({
										kind: O.b.Error,
										text: Object(n.a)(o, "subredditModeration.modQueue.toastText.somethingWentWrong")
									}))
								}
							})(), t, o);
							s(Object(d.e)(m))
						} else {
							const e = Object(d.d)("".concat(P.length, " ").concat(C, " ").concat(A), O.b.SuccessMod);
							s(Object(d.e)(e))
						}
					else {
						s(Object(r.a)(_.error));
						const e = Object(d.d)(Object(n.a)(k, "subredditModeration.modQueue.toastText.somethingWentWrong"), O.b.Error);
						s(Object(d.e)(e))
					}
				}, W = Object(a.a)(R.a), H = Object(a.a)(R.c), J = Object(a.a)(R.d)
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, o) {
			"use strict";
			o.r(t);
			var n = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/lib/constants/index.ts"),
				a = o("./src/lib/makeCommentsPageKey/index.ts"),
				r = o("./src/lib/makeDraftKey/index.ts"),
				c = o("./src/reddit/helpers/isPost.ts"),
				d = o("./src/reddit/helpers/routeKey/index.ts"),
				i = o("./src/reddit/models/PostDraft/index.ts"),
				u = o("./src/reddit/actions/bulkActions/index.ts"),
				m = o("./src/reddit/actions/comment/index.ts"),
				l = o("./src/reddit/actions/modal.ts"),
				b = o("./src/reddit/actions/post.ts"),
				O = o("./src/reddit/actions/toaster.ts"),
				j = o("./src/reddit/constants/modals.ts"),
				p = o("./src/lib/makeApiRequest/index.ts"),
				f = o("./src/lib/omitHeaders/index.ts"),
				g = o("./src/reddit/constants/headers.ts"),
				v = o("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const R = (e, t) => Object(p.b)(Object(f.a)(e, [g.a]), {
					endpoint: "".concat(e.apiUrl, "/api/v1/modactions/removal_reasons/"),
					method: s.cb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				y = (e, t, o) => Object(p.b)(Object(f.a)(e, [g.a]), {
					endpoint: Object(v.a)("".concat(e.apiUrl, "/api/v1/modactions/removal_").concat(o, "_message/")),
					method: s.cb.POST,
					type: "json",
					data: t
				});
			var x = o("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				k = o("./src/reddit/i18n/utils.ts"),
				P = o("./src/reddit/models/ModQueue/index.ts"),
				h = o("./src/reddit/models/RemovalReason/index.ts"),
				A = o("./src/reddit/models/Toast/index.ts"),
				C = o("./src/reddit/selectors/comments.ts"),
				Q = o("./src/reddit/selectors/platform.ts"),
				_ = o("./src/reddit/actions/removalReasons/constants.ts");
			o.d(t, "removalReasonsPending", (function() {
				return I
			})), o.d(t, "removalReasonsLoaded", (function() {
				return T
			})), o.d(t, "removalReasonsFailed", (function() {
				return M
			})), o.d(t, "removalReasonsRequested", (function() {
				return S
			})), o.d(t, "removalReasonAddedPending", (function() {
				return w
			})), o.d(t, "removalReasonAddedSuccess", (function() {
				return N
			})), o.d(t, "removalReasonAddedFailed", (function() {
				return E
			})), o.d(t, "addRemovalReason", (function() {
				return K
			})), o.d(t, "editRemovalReasonPending", (function() {
				return B
			})), o.d(t, "editRemovalReasonSuccess", (function() {
				return L
			})), o.d(t, "editRemovalReasonFailed", (function() {
				return D
			})), o.d(t, "editRemovalReason", (function() {
				return U
			})), o.d(t, "deleteRemovalReasonPending", (function() {
				return q
			})), o.d(t, "deleteRemovalReasonSuccess", (function() {
				return F
			})), o.d(t, "deleteRemovalReasonFailed", (function() {
				return W
			})), o.d(t, "deleteRemovalReason", (function() {
				return H
			})), o.d(t, "removedItemsSelected", (function() {
				return J
			})), o.d(t, "fetchReasonsAndOpenModal", (function() {
				return z
			})), o.d(t, "removalReasonSubmittedPending", (function() {
				return G
			})), o.d(t, "removalReasonSubmittedSuccess", (function() {
				return V
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
			const I = Object(n.a)(_.k),
				T = Object(n.a)(_.l),
				M = Object(n.a)(_.j),
				S = e => async (t, o, n) => {
					let {
						apiContext: a
					} = n;
					const r = o().subreddits.models[e].name;
					t(I());
					const c = await ((e, t) => Object(p.b)(Object(f.a)(e, [g.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons.json"),
						method: s.cb.GET
					}))(a(), r);
					c.ok ? t(T({
						subredditId: e,
						response: c.body
					})) : t(M(c.error))
				}, w = Object(n.a)(_.b), N = Object(n.a)(_.c), E = Object(n.a)(_.a), K = (e, t) => async (o, n, a) => {
					let {
						apiContext: r
					} = a;
					const c = n().subreddits.models[e].name;
					o(w());
					const d = await ((e, t, o) => Object(p.b)(Object(f.a)(e, [g.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons"),
						method: s.cb.POST,
						data: o
					}))(r(), c, t);
					if (d.ok) {
						const {
							id: n
						} = d.body, s = Object.assign({}, t, {
							id: n
						});
						o(N({
							subredditId: e,
							reason: s
						})), o(Object(O.e)({
							kind: A.b.SuccessMod,
							text: Object(k.c)("Removal reason added!")
						}))
					} else o(E(d.error))
				}, B = Object(n.a)(_.h), L = Object(n.a)(_.i), D = Object(n.a)(_.g), U = (e, t) => async (o, n, a) => {
					let {
						apiContext: r
					} = a;
					const c = n().subreddits.models[e].name;
					o(B());
					const d = await ((e, t, o) => Object(p.b)(Object(f.a)(e, [g.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons/").concat(o.id),
						method: s.cb.PUT,
						data: {
							message: o.message,
							title: o.title
						}
					}))(r(), c, t);
					d.ok ? (o(L({
						subredditId: e,
						reason: t
					})), o(Object(O.e)({
						kind: A.b.SuccessMod,
						text: Object(k.c)("Removal reason saved")
					}))) : o(D(d.error))
				}, q = Object(n.a)(_.e), F = Object(n.a)(_.f), W = Object(n.a)(_.d), H = (e, t) => async (o, n, a) => {
					let {
						apiContext: r
					} = a;
					const c = n().subreddits.models[e].name;
					o(q());
					const d = await ((e, t, o) => Object(p.b)(Object(f.a)(e, [g.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons/").concat(o),
						method: s.cb.DELETE
					}))(r(), c, t);
					d.ok ? (o(F({
						subredditId: e,
						reasonId: t
					})), o(Object(O.e)({
						kind: A.b.SuccessMod,
						text: Object(k.c)("Removal reason deleted")
					}))) : o(W(d.error))
				}, J = Object(n.a)(_.t), z = (e, t) => async (o, n, s) => {
					let {
						apiContext: a
					} = s;
					const r = n();
					r.removalReasons.reasonOrder[e] && r.removalReasons.reasonOrder[e].length > 0 || o(S(e)), o(J({
						subredditId: e,
						itemIds: t
					})), o(Object(l.i)(j.a.ADD_REMOVAL_REASON))
				}, G = Object(n.a)(_.r), V = Object(n.a)(_.s), X = Object(n.a)(_.q), Y = Object(n.a)(_.n), Z = Object(n.a)(_.o), $ = Object(n.a)(_.p), ee = Object(n.a)(_.m), te = (e, t, o, n, u) => async (l, O, j) => {
					let {
						apiContext: p
					} = j;
					const f = O(),
						g = f.user.account && f.user.account.displayText,
						v = e[0],
						k = Object(c.a)(v) ? h.e.Post : h.e.Comment,
						P = k === h.e.Post ? f.posts.models[v] : f.comments.models[v],
						A = k === h.e.Post ? b.O : m.R;
					if (!P || !g) return;
					l(G()), l(A({
						[v]: {
							modNote: u,
							modRemovalReason: t && t.title,
							modReasonBy: g
						}
					}));
					const _ = {
							itemIds: e,
							modNote: u,
							reasonId: t ? t.id : null
						},
						I = await R(p(), _);
					if (I.ok) {
						if (l(V()), t) {
							l(Y());
							const c = {
									itemId: e,
									message: o,
									title: t.title,
									type: n
								},
								u = await y(p(), Object(h.h)(c, k), k);
							if (u.ok)
								if (n === h.f.Public) {
									if (l($()), u.body) {
										const e = Object(x.a)(u.body, g),
											t = {
												comment: e,
												parentId: v
											},
											o = Object(Q.g)(f),
											n = f.platform.currentPage && f.platform.currentPage.routeMatch;
										let c = o && n && Object(d.a)(n, f, f.posts.models[e.postId]);
										if (c || (c = Object(a.a)(e.postId, null, {
												sort: s.s,
												hasSortParam: !0
											})), k === h.e.Post) {
											const o = Object(r.a)(i.c.replyToPost, v);
											l(Object(m.mb)(Object.assign({}, t, {
												headCommentId: Object(C.x)(f, {
													commentsPageKey: c
												}),
												commentsPageKey: c,
												draftKey: o
											})));
											const n = f.postStickiedComments.data[v];
											l(Object(m.ib)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: c
											})), n && n !== e.id && l(Object(m.R)({
												[n]: {
													isStickied: !1
												}
											}))
										} else if (k === h.e.Comment) {
											const e = Object(r.a)(i.c.replyToComment, P.id),
												o = Object(C.j)(f, {
													commentId: v,
													commentsPageKey: c
												});
											l(Object(m.kb)(Object.assign({}, t, {
												parentCommentId: v,
												commentsPageKey: c,
												draftKey: e,
												depth: o + 1
											})))
										}
									}
								} else l(Z());
							else l(ee(u.error))
						}
					} else l(X(I.error)), l(A({
						[v]: {
							modNote: P.modNote,
							modRemovalReason: P.modRemovalReason,
							modReasonBy: P.modReasonBy
						}
					}))
				}, oe = (e, t, o, n, s) => async (a, r, c) => {
					let {
						apiContext: d
					} = c;
					const i = r(),
						m = i.user.account && i.user.account.displayText;
					if (!m) return;
					a(G());
					const l = Object(O.e)({
							kind: A.b.SuccessMod,
							text: Object(k.c)("Added removal reason for ".concat(Object(k.b)("number", e.length), " posts/comments"))
						}),
						b = {
							itemIds: e,
							modNote: s,
							reasonId: t ? t.id : null
						},
						j = await R(d(), b);
					if (j.ok) {
						const r = {
							ids: e,
							operation: P.a.RemovalReason,
							username: m,
							options: {
								modNote: s,
								removalReason: t && t.title
							}
						};
						if (a(Object(u.b)(r)), t) {
							const s = {
									itemId: e,
									message: o,
									title: t.title,
									type: n
								},
								r = await y(d(), Object(h.h)(s, h.e.Bulk), h.e.Bulk);
							r.ok ? (a(Z()), a(l)) : a(ee(r.error))
						} else a(l)
					} else a(X(j.error))
				}
		},
		"./src/reddit/helpers/makeModQueueListingKey/index.ts": function(e, t, o) {
			"use strict";
			t.a = e => {
				const {
					profile: t,
					subreddit: o
				} = e;
				let n = o && "r/".concat(o) || t && "u/".concat(t) || "all";
				return "comments" !== e.onlyOfType && "links" !== e.onlyOfType || (n += "--[".concat(e.onlyOfType, "]")), n
			}
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return s
			})), o.d(t, "d", (function() {
				return a
			})), o.d(t, "a", (function() {
				return r
			})), o.d(t, "b", (function() {
				return c
			})), o.d(t, "f", (function() {
				return d
			})), o.d(t, "e", (function() {
				return i
			})), o.d(t, "g", (function() {
				return u
			})), o.d(t, "h", (function() {
				return m
			}));
			var n = o("./src/reddit/helpers/isPost.ts");
			const s = 20,
				a = 50,
				r = 1e4,
				c = 100;
			var d, i;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public"
			}(d || (d = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(i || (i = {}));
			const u = e => 1 === e.length ? Object(n.a)(e[0]) ? i.Post : i.Comment : i.Bulk,
				m = (e, t) => {
					return {
						[t === i.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type
					}
				}
		},
		"./src/reddit/selectors/modQueue.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return r
			})), o.d(t, "b", (function() {
				return c
			})), o.d(t, "d", (function() {
				return d
			})), o.d(t, "f", (function() {
				return i
			})), o.d(t, "a", (function() {
				return u
			})), o.d(t, "e", (function() {
				return m
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				s = o("./src/lib/objectSelector/index.ts");
			const a = (e, t) => Object(n.a)({
					onlyOfType: t.queryParams.only,
					profile: t.profileName,
					subreddit: t.subredditName
				}),
				r = Object(s.a)((e, t) => {
					const {
						pageName: o,
						page: n
					} = t, s = a(0, t);
					if (!e.modQueue[o] || !e.modQueue[o].itemOrder[s] || !e.modQueue[o].itemOrder[s][n]) return;
					const r = e.modQueue[o].itemOrder[s][n];
					return r ? r.map(t => e.posts.models[t] || e.comments.models[t]) : []
				}),
				c = (e, t) => {
					const {
						pageName: o
					} = t;
					return !e.modQueue[o] || !e.modQueue[o].api || e.modQueue[o].api.pending
				},
				d = (e, t) => {
					const o = a(0, t);
					return e.modQueue[t.pageName].loadMore[o]
				},
				i = e => Object.keys(e.modQueue.bulkAction.selectedItems),
				u = e => e.modQueue.bulkAction.api.pending,
				m = e => e.modQueue.moderatedCommunitiesOrder.data
		}
	}
]);
//# sourceMappingURL=ModQueue~ModQueuePages.5e66b5982a5e1ec6e6d5.js.map