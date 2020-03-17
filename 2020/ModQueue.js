// https://www.redditstatic.com/desktop2x/ModQueue.4fa1a292840530b743ba.js
// Retrieved at 3/17/2020, 2:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueue", "removalReasonActions"], {
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return a
			})), o.d(t, "b", (function() {
				return r
			})), o.d(t, "a", (function() {
				return c
			}));
			var s = o("./src/lib/makeActionCreator/index.ts"),
				n = o("./src/reddit/actions/bulkActions/constants.ts");
			const a = Object(s.a)(n.c),
				r = Object(s.a)(n.b),
				c = Object(s.a)(n.a)
		},
		"./src/reddit/actions/modQueue/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "e", (function() {
				return N
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
			var s = o("./src/app/strings/index.ts"),
				n = o("./src/lib/constants/index.ts"),
				a = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/reddit/actions/bulkActions/index.ts"),
				c = o("./src/reddit/actions/removalReasons/index.ts"),
				d = o("./src/reddit/actions/toaster.ts"),
				i = o("./src/reddit/endpoints/modQueue/index.ts"),
				u = o("./src/reddit/helpers/flair.ts"),
				m = o("./src/reddit/helpers/isPost.ts"),
				b = o("./src/reddit/i18n/utils.ts"),
				l = o("./src/reddit/models/ModQueue/index.ts"),
				O = o("./src/reddit/models/Toast/index.ts"),
				j = o("./src/reddit/selectors/modQueue.ts"),
				p = o("./src/reddit/selectors/subreddit.ts"),
				f = o("./src/reddit/selectors/telemetry.ts"),
				R = o("./src/reddit/selectors/user.ts"),
				g = o("./src/telemetry/index.ts"),
				v = o("./src/reddit/actions/modQueue/constants.ts");
			const x = Object(a.a)(v.j),
				y = Object(a.a)(v.i),
				k = Object(a.a)(v.h),
				P = Object(a.a)(v.g),
				h = Object(a.a)(v.f),
				A = Object(a.a)(v.e),
				_ = Object(a.a)(v.n),
				C = Object(a.a)(v.m),
				I = Object(a.a)(v.l),
				T = Object(a.a)(v.q),
				Q = Object(a.a)(v.p),
				S = Object(a.a)(v.o),
				M = Object(a.a)(v.w),
				w = Object(a.a)(v.v),
				E = Object(a.a)(v.u),
				N = (e, t, o) => async (a, r, c) => {
					let u, m, b, {
						apiContext: j
					} = c;
					switch (t) {
						case n.hb.Edited:
							u = P, m = A, b = h;
							break;
						case n.hb.Modqueue:
							u = x, m = k, b = y;
							break;
						case n.hb.Reports:
							u = _, m = I, b = C;
							break;
						case n.hb.Spam:
							u = T, m = S, b = Q;
							break;
						case n.hb.Unmoderated:
							u = M, m = E, b = w;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					a(u());
					const p = await Object(i.b)(j(), t, o);
					if (p.ok) {
						a(b({
							listingKey: e,
							page: "".concat(o.page || l.b),
							response: p.body
						}))
					} else {
						const e = Object(R.O)(r());
						a(m(p.error)), a(Object(d.e)({
							kind: O.b.Error,
							text: Object(s.a)(e, "subredditModeration.modQueue.toastText.somethingWentWrong")
						}))
					}
				}, K = Object(a.a)(v.k), B = Object(a.a)(v.b), L = e => async (t, o, n) => {
					let {
						apiContext: a
					} = n;
					const r = o(),
						c = r.modQueue.moderatedCommunitiesOrder.after,
						u = r.modQueue.moderatedCommunitiesOrder.pending,
						m = r.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: b
						} = r.platform.currentPage.urlParams,
						l = b;
					if (e && u || m || !c) return;
					const j = await Object(i.b)(a(), l, {
						moderated_after: c
					});
					if (j.ok) t(K(j.body)), j.body.moderatedAfter ? t(L()) : t(B());
					else {
						const e = Object(R.O)(o());
						t(Object(d.e)({
							kind: O.b.Error,
							text: Object(s.a)(e, "subredditModeration.modQueue.toastText.somethingWentWrong")
						}))
					}
				}, D = Object(a.a)(v.t), U = Object(a.a)(v.s), q = Object(a.a)(v.r), F = (e, t, o) => async (n, a, v) => {
					let {
						apiContext: x
					} = v;
					n(Object(r.c)());
					const y = a(),
						k = y.user.language,
						P = Object(j.g)(y),
						h = y.user.account && y.user.account.displayText,
						A = Object(s.a)(k, "subredditModeration.modQueue.toastText.".concat(e)),
						_ = Object(s.a)(k, "subredditModeration.modQueue.toastText.postsComments");
					for (let t = 0; t < P.length; t++) {
						const o = P[t];
						let s = e;
						[l.a.Approve, l.a.Remove, l.a.Spam].includes(e) && (Object(m.a)(o) ? s += "_link" : s += "_comment"), Object(g.a)(Object.assign({
							source: "bulk_mod_action",
							action: "click",
							noun: s
						}, f.defaults(y), {
							actionInfo: f.actionInfo(y, {
								count: P.length,
								paneName: y.platform.currentPage ? y.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: f.comment(y, o),
							post: f.post(y, o),
							profile: f.profileByPostOrCommentId(y, o),
							screen: f.screen(y),
							subreddit: f.subredditByPostOrCommentId(y, o)
						}))
					}
					const C = {
						ids: P
					};
					t && (C.text = Object(u.g)(t) || "", C.flairTemplateId = ""), o && (C.cssClass = o, C.flairTemplateId = o);
					const I = await Object(i.a)(x(), e, C);
					if (I.ok)
						if (n(Object(r.b)(Object.assign({}, I.body, {
								operation: e,
								ids: P,
								username: h,
								options: {
									flair: t
								}
							}))), e !== l.a.Approve && e !== l.a.Flair) {
							let t, o;
							const a = y.platform.currentPage && y.platform.currentPage.queryParams && y.platform.currentPage.queryParams.subreddit,
								u = a && Object(p.D)(y, a);
							e === l.a.Remove && u && P.length > 1 && (t = Object(b.c)("Add a removal reason"), o = Object(c.fetchReasonsAndOpenModal)(u, P));
							const m = Object(d.d)("".concat(P.length, " ").concat(_, " ").concat(A), O.b.Undo, Object(s.a)(k, "subredditModeration.modQueue.toastText.undo"), (() => async (e, t, o) => {
								let {
									apiContext: n
								} = o;
								e(D());
								const a = t(),
									c = Object.keys(a.modQueue.bulkAction.undoLastAction)[0],
									u = a.modQueue.bulkAction.undoLastAction[c],
									m = a.user.account && a.user.account.displayText;
								e(Object(r.c)());
								const b = await Object(i.a)(n(), c, {
									ids: u
								});
								if (b.ok) e(U(Object.assign({}, b.body, {
									operation: c,
									ids: u,
									username: m
								})));
								else {
									const o = Object(R.O)(t());
									e(q(b.error)), e(Object(d.e)({
										kind: O.b.Error,
										text: Object(s.a)(o, "subredditModeration.modQueue.toastText.somethingWentWrong")
									}))
								}
							})(), t, o);
							n(Object(d.e)(m))
						} else {
							const e = Object(d.d)("".concat(P.length, " ").concat(_, " ").concat(A), O.b.SuccessMod);
							n(Object(d.e)(e))
						}
					else {
						n(Object(r.a)(I.error));
						const e = Object(d.d)(Object(s.a)(k, "subredditModeration.modQueue.toastText.somethingWentWrong"), O.b.Error);
						n(Object(d.e)(e))
					}
				}, W = Object(a.a)(v.a), H = Object(a.a)(v.c), J = Object(a.a)(v.d)
		},
		"./src/reddit/actions/pages/modQueue/index.ts": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "modQueuePageRequested", (function() {
				return l
			}));
			var s = o("./node_modules/lodash/get.js"),
				n = o.n(s),
				a = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/pageTitle.ts"),
				c = o("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				d = o("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				i = o("./src/reddit/helpers/trackers/screenview.ts"),
				u = o("./src/reddit/actions/modQueue/index.ts"),
				m = o("./src/reddit/actions/platform.ts"),
				b = o("./src/reddit/selectors/platform.ts");
			const l = e => async (t, o, s) => {
				const {
					pageName: l
				} = e.params, O = e.queryParams, {
					page: j,
					profile: p,
					subreddit: f
				} = O, R = o();
				if (!l) return;
				const g = Object(c.a)({
						onlyOfType: O.only,
						profile: O.profile,
						subreddit: O.subreddit
					}),
					v = R.modQueue[l].itemOrder[g],
					x = !!(v && v[j] && v[j].length),
					y = R.modQueue[l].api.error;
				if (R.modQueue[l].api.pending || x && !y) return;
				Object(b.o)(R) || await Object(u.e)(g, l, O)(t, o, s);
				const k = o();
				if (n()(k.modQueue[l].api.error, "type") === a.F.AUTHENTICATION_ERROR) return Object(d.a)(t, k);
				Object(i.f)(k, l, f, p), t(m.l({
					title: Object(r.d)()
				}))
			}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, o) {
			"use strict";
			o.r(t);
			var s = o("./src/lib/makeActionCreator/index.ts"),
				n = o("./src/lib/constants/index.ts"),
				a = o("./src/lib/makeCommentsPageKey/index.ts"),
				r = o("./src/lib/makeDraftKey/index.ts"),
				c = o("./src/reddit/helpers/isPost.ts"),
				d = o("./src/reddit/helpers/routeKey/index.ts"),
				i = o("./src/reddit/models/PostDraft/index.ts"),
				u = o("./src/reddit/actions/bulkActions/index.ts"),
				m = o("./src/reddit/actions/comment/index.ts"),
				b = o("./src/reddit/actions/modal.ts"),
				l = o("./src/reddit/actions/post.ts"),
				O = o("./src/reddit/actions/toaster.ts"),
				j = o("./src/reddit/constants/modals.ts"),
				p = o("./src/lib/makeApiRequest/index.ts"),
				f = o("./src/lib/omitHeaders/index.ts"),
				R = o("./src/reddit/constants/headers.ts"),
				g = o("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const v = (e, t) => Object(p.b)(Object(f.a)(e, [R.a]), {
					endpoint: "".concat(e.apiUrl, "/api/v1/modactions/removal_reasons/"),
					method: n.db.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				x = (e, t, o) => Object(p.b)(Object(f.a)(e, [R.a]), {
					endpoint: Object(g.a)("".concat(e.apiUrl, "/api/v1/modactions/removal_").concat(o, "_message/")),
					method: n.db.POST,
					type: "json",
					data: t
				});
			var y = o("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				k = o("./src/reddit/i18n/utils.ts"),
				P = o("./src/reddit/models/ModQueue/index.ts"),
				h = o("./src/reddit/models/RemovalReason/index.ts"),
				A = o("./src/reddit/models/Toast/index.ts"),
				_ = o("./src/reddit/selectors/comments.ts"),
				C = o("./src/reddit/selectors/platform.ts"),
				I = o("./src/reddit/actions/removalReasons/constants.ts");
			o.d(t, "removalReasonsPending", (function() {
				return T
			})), o.d(t, "removalReasonsLoaded", (function() {
				return Q
			})), o.d(t, "removalReasonsFailed", (function() {
				return S
			})), o.d(t, "removalReasonsRequested", (function() {
				return M
			})), o.d(t, "removalReasonAddedPending", (function() {
				return w
			})), o.d(t, "removalReasonAddedSuccess", (function() {
				return E
			})), o.d(t, "removalReasonAddedFailed", (function() {
				return N
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
			const T = Object(s.a)(I.k),
				Q = Object(s.a)(I.l),
				S = Object(s.a)(I.j),
				M = e => async (t, o, s) => {
					let {
						apiContext: a
					} = s;
					const r = o().subreddits.models[e].name;
					t(T());
					const c = await ((e, t) => Object(p.b)(Object(f.a)(e, [R.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons.json"),
						method: n.db.GET
					}))(a(), r);
					c.ok ? t(Q({
						subredditId: e,
						response: c.body
					})) : t(S(c.error))
				}, w = Object(s.a)(I.b), E = Object(s.a)(I.c), N = Object(s.a)(I.a), K = (e, t) => async (o, s, a) => {
					let {
						apiContext: r
					} = a;
					const c = s().subreddits.models[e].name;
					o(w());
					const d = await ((e, t, o) => Object(p.b)(Object(f.a)(e, [R.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons"),
						method: n.db.POST,
						data: o
					}))(r(), c, t);
					if (d.ok) {
						const {
							id: s
						} = d.body, n = Object.assign({}, t, {
							id: s
						});
						o(E({
							subredditId: e,
							reason: n
						})), o(Object(O.e)({
							kind: A.b.SuccessMod,
							text: Object(k.c)("Removal reason added!")
						}))
					} else o(N(d.error))
				}, B = Object(s.a)(I.h), L = Object(s.a)(I.i), D = Object(s.a)(I.g), U = (e, t) => async (o, s, a) => {
					let {
						apiContext: r
					} = a;
					const c = s().subreddits.models[e].name;
					o(B());
					const d = await ((e, t, o) => Object(p.b)(Object(f.a)(e, [R.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons/").concat(o.id),
						method: n.db.PUT,
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
				}, q = Object(s.a)(I.e), F = Object(s.a)(I.f), W = Object(s.a)(I.d), H = (e, t) => async (o, s, a) => {
					let {
						apiContext: r
					} = a;
					const c = s().subreddits.models[e].name;
					o(q());
					const d = await ((e, t, o) => Object(p.b)(Object(f.a)(e, [R.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons/").concat(o),
						method: n.db.DELETE
					}))(r(), c, t);
					d.ok ? (o(F({
						subredditId: e,
						reasonId: t
					})), o(Object(O.e)({
						kind: A.b.SuccessMod,
						text: Object(k.c)("Removal reason deleted")
					}))) : o(W(d.error))
				}, J = Object(s.a)(I.t), z = (e, t) => async (o, s, n) => {
					let {
						apiContext: a
					} = n;
					const r = s();
					r.removalReasons.reasonOrder[e] && r.removalReasons.reasonOrder[e].length > 0 || o(M(e)), o(J({
						subredditId: e,
						itemIds: t
					})), o(Object(b.i)(j.a.ADD_REMOVAL_REASON))
				}, G = Object(s.a)(I.r), V = Object(s.a)(I.s), X = Object(s.a)(I.q), Y = Object(s.a)(I.n), Z = Object(s.a)(I.o), $ = Object(s.a)(I.p), ee = Object(s.a)(I.m), te = (e, t, o, s, u) => async (b, O, j) => {
					let {
						apiContext: p
					} = j;
					const f = O(),
						R = f.user.account && f.user.account.displayText,
						g = e[0],
						k = Object(c.a)(g) ? h.e.Post : h.e.Comment,
						P = k === h.e.Post ? f.posts.models[g] : f.comments.models[g],
						A = k === h.e.Post ? l.S : m.R;
					if (!P || !R) return;
					b(G()), b(A({
						[g]: {
							modNote: u,
							modRemovalReason: t && t.title,
							modReasonBy: R
						}
					}));
					const I = {
							itemIds: e,
							modNote: u,
							reasonId: t ? t.id : null
						},
						T = await v(p(), I);
					if (T.ok) {
						if (b(V()), t) {
							b(Y());
							const c = {
									itemId: e,
									message: o,
									title: t.title,
									type: s
								},
								u = await x(p(), Object(h.h)(c, k), k);
							if (u.ok)
								if (s === h.f.Public) {
									if (b($()), u.body) {
										const e = Object(y.a)(u.body, R),
											t = {
												comment: e,
												parentId: g
											},
											o = Object(C.g)(f),
											s = f.platform.currentPage && f.platform.currentPage.routeMatch;
										let c = o && s && Object(d.a)(s, f, f.posts.models[e.postId]);
										if (c || (c = Object(a.a)(e.postId, null, {
												sort: n.t,
												hasSortParam: !0
											})), k === h.e.Post) {
											const o = Object(r.a)(i.c.replyToPost, g);
											b(Object(m.mb)(Object.assign({}, t, {
												headCommentId: Object(_.x)(f, {
													commentsPageKey: c
												}),
												commentsPageKey: c,
												draftKey: o
											})));
											const s = f.postStickiedComments.data[g];
											b(Object(m.ib)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: c
											})), s && s !== e.id && b(Object(m.R)({
												[s]: {
													isStickied: !1
												}
											}))
										} else if (k === h.e.Comment) {
											const e = Object(r.a)(i.c.replyToComment, P.id),
												o = Object(_.j)(f, {
													commentId: g,
													commentsPageKey: c
												});
											b(Object(m.kb)(Object.assign({}, t, {
												parentCommentId: g,
												commentsPageKey: c,
												draftKey: e,
												depth: o + 1
											})))
										}
									}
								} else b(Z());
							else b(ee(u.error))
						}
					} else b(X(T.error)), b(A({
						[g]: {
							modNote: P.modNote,
							modRemovalReason: P.modRemovalReason,
							modReasonBy: P.modReasonBy
						}
					}))
				}, oe = (e, t, o, s, n) => async (a, r, c) => {
					let {
						apiContext: d
					} = c;
					const i = r(),
						m = i.user.account && i.user.account.displayText;
					if (!m) return;
					a(G());
					const b = Object(O.e)({
							kind: A.b.SuccessMod,
							text: Object(k.c)("Added removal reason for ".concat(Object(k.b)("number", e.length), " posts/comments"))
						}),
						l = {
							itemIds: e,
							modNote: n,
							reasonId: t ? t.id : null
						},
						j = await v(d(), l);
					if (j.ok) {
						const r = {
							ids: e,
							operation: P.a.RemovalReason,
							username: m,
							options: {
								modNote: n,
								removalReason: t && t.title
							}
						};
						if (a(Object(u.b)(r)), t) {
							const n = {
									itemId: e,
									message: o,
									title: t.title,
									type: s
								},
								r = await x(d(), Object(h.h)(n, h.e.Bulk), h.e.Bulk);
							r.ok ? (a(Z()), a(b)) : a(ee(r.error))
						} else a(b)
					} else a(X(j.error))
				}
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return n
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
			var s = o("./src/reddit/helpers/isPost.ts");
			const n = 20,
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
			const u = e => 1 === e.length ? Object(s.a)(e[0]) ? i.Post : i.Comment : i.Bulk,
				m = (e, t) => {
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
//# sourceMappingURL=ModQueue.4fa1a292840530b743ba.js.map