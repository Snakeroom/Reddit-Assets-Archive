// https://www.redditstatic.com/desktop2x/ModQueue~ModQueuePages.1e0377b1e0716d45dd22.js
// Retrieved at 6/15/2020, 2:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueue~ModQueuePages", "removalReasonActions"], {
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return c
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/bulkActions/constants.ts");
			const a = Object(o.a)(s.c),
				r = Object(o.a)(s.b),
				c = Object(o.a)(s.a)
		},
		"./src/reddit/actions/modQueue/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return M
			})), n.d(t, "d", (function() {
				return U
			})), n.d(t, "f", (function() {
				return Q
			})), n.d(t, "a", (function() {
				return L
			})), n.d(t, "b", (function() {
				return q
			})), n.d(t, "c", (function() {
				return W
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/bulkActions/index.ts"),
				c = n("./src/reddit/actions/removalReasons/index.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/modQueue/index.ts"),
				m = n("./src/reddit/helpers/flair.ts"),
				u = n("./src/reddit/helpers/isPost.ts"),
				b = n("./src/reddit/models/ModQueue/index.ts"),
				l = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/reddit/selectors/modQueue.ts"),
				f = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/selectors/telemetry.ts"),
				j = n("./src/telemetry/index.ts"),
				h = n("./src/reddit/actions/modQueue/constants.ts");
			const k = Object(a.a)(h.j),
				v = Object(a.a)(h.i),
				_ = Object(a.a)(h.h),
				g = Object(a.a)(h.g),
				R = Object(a.a)(h.f),
				x = Object(a.a)(h.e),
				y = Object(a.a)(h.n),
				P = Object(a.a)(h.m),
				S = Object(a.a)(h.l),
				A = Object(a.a)(h.q),
				I = Object(a.a)(h.p),
				C = Object(a.a)(h.o),
				w = Object(a.a)(h.w),
				N = Object(a.a)(h.v),
				E = Object(a.a)(h.u),
				M = (e, t, n) => async (a, r, c) => {
					let m, u, p, {
						apiContext: f
					} = c;
					switch (t) {
						case s.gb.Edited:
							m = g, u = x, p = R;
							break;
						case s.gb.Modqueue:
							m = k, u = _, p = v;
							break;
						case s.gb.Reports:
							m = y, u = S, p = P;
							break;
						case s.gb.Spam:
							m = A, u = C, p = I;
							break;
						case s.gb.Unmoderated:
							m = w, u = E, p = N;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					a(m());
					const O = await Object(i.b)(f(), t, n);
					if (O.ok) {
						a(p({
							listingKey: e,
							page: "".concat(n.page || b.b),
							response: O.body
						}))
					} else a(u(O.error)), a(Object(d.e)({
						kind: l.b.Error,
						text: o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, T = Object(a.a)(h.k), F = Object(a.a)(h.b), U = e => async (t, n, s) => {
					let {
						apiContext: a
					} = s;
					const r = n(),
						c = r.modQueue.moderatedCommunitiesOrder.after,
						m = r.modQueue.moderatedCommunitiesOrder.pending,
						u = r.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: b
						} = r.platform.currentPage.urlParams,
						p = b;
					if (e && m || u || !c) return;
					const f = await Object(i.b)(a(), p, {
						moderated_after: c
					});
					f.ok ? (t(T(f.body)), f.body.moderatedAfter ? t(U()) : t(F())) : t(Object(d.e)({
						kind: l.b.Error,
						text: o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, B = Object(a.a)(h.t), D = Object(a.a)(h.s), K = Object(a.a)(h.r), Q = (e, t, n) => async (s, a, h) => {
					let {
						apiContext: k
					} = h;
					s(Object(r.c)());
					const v = a(),
						_ = Object(p.g)(v),
						g = v.user.account && v.user.account.displayText;
					for (let t = 0; t < _.length; t++) {
						const n = _[t];
						let o = e;
						[b.a.Approve, b.a.Remove, b.a.Spam].includes(e) && (Object(u.a)(n) ? o += "_link" : o += "_comment"), Object(j.a)(Object.assign({
							source: "bulk_mod_action",
							action: "click",
							noun: o
						}, O.defaults(v), {
							actionInfo: O.actionInfo(v, {
								count: _.length,
								paneName: v.platform.currentPage ? v.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: O.comment(v, n),
							post: O.post(v, n),
							profile: O.profileByPostOrCommentId(v, n),
							screen: O.screen(v),
							subreddit: O.subredditByPostOrCommentId(v, n)
						}))
					}
					const R = {
						ids: _
					};
					t && (R.text = Object(m.g)(t) || "", R.flairTemplateId = ""), n && (R.cssClass = n, R.flairTemplateId = n);
					const x = await Object(i.a)(k(), e, R);
					if (x.ok) {
						s(Object(r.b)(Object.assign({}, x.body, {
							operation: e,
							ids: _,
							username: g,
							options: {
								flair: t
							}
						})));
						const n = function(e, t) {
							switch (e) {
								case b.a.Approve:
									return o.fbt._({
										"*": "{number} posts/comments have been approved",
										_1: "1 post/comment has been approved"
									}, [o.fbt._plural(t, "number")], {
										hk: "2kKhSf"
									});
								case b.a.Flair:
									return o.fbt._({
										"*": "{number} posts/comments have had flair applied",
										_1: "1 post/comment has had flair applied"
									}, [o.fbt._plural(t, "number")], {
										hk: "3syB5O"
									});
								case b.a.IgnoreReports:
									return o.fbt._({
										"*": "{number} posts/comments have had their reports ignored",
										_1: "1 post/comment has had their reports ignored"
									}, [o.fbt._plural(t, "number")], {
										hk: "2WfE4g"
									});
								case b.a.Lock:
									return o.fbt._({
										"*": "{number} posts/comments have been locked",
										_1: "1 post/comment has been locked"
									}, [o.fbt._plural(t, "number")], {
										hk: "45oMbv"
									});
								case b.a.MarkNSFW:
									return o.fbt._({
										"*": "{number} posts/comments have been marked NSFW",
										_1: "1 post/comment has been marked NSFW"
									}, [o.fbt._plural(t, "number")], {
										hk: "oPsQr"
									});
								case b.a.RemovalReason:
									return o.fbt._({
										"*": "{number} posts/comments have had removal reasons applied",
										_1: "1 post/comment has had removal reasons applied"
									}, [o.fbt._plural(t, "number")], {
										hk: "35Tosn"
									});
								case b.a.Remove:
									return o.fbt._({
										"*": "{number} posts/comments have been removed",
										_1: "1 post/comment has been removed"
									}, [o.fbt._plural(t, "number")], {
										hk: "B1ZbE"
									});
								case b.a.Spam:
									return o.fbt._({
										"*": "{number} posts/comments have been marked as spam",
										_1: "1 post/comment has been marked as spam"
									}, [o.fbt._plural(t, "number")], {
										hk: "3OoNfp"
									});
								case b.a.Spoiler:
									return o.fbt._({
										"*": "{number} posts/comments have been marked as spoilers",
										_1: "1 post/comment has been marked as spoilers"
									}, [o.fbt._plural(t, "number")], {
										hk: "1DFW5M"
									});
								case b.a.UnignoreReports:
									return o.fbt._({
										"*": "{number} posts/comments have had their reports un-ignored",
										_1: "1 post/comment has had their reports un-ignored"
									}, [o.fbt._plural(t, "number")], {
										hk: "303Hpb"
									});
								case b.a.Unlock:
									return o.fbt._({
										"*": "{number} posts/comments have been unlocked",
										_1: "1 post/comment has been unlocked"
									}, [o.fbt._plural(t, "number")], {
										hk: "5gUht"
									});
								case b.a.UnmarkNSFW:
									return o.fbt._({
										"*": "{number} posts/comments have been un-marked as NSFW",
										_1: "1 post/comment has been un-marked as NSFW"
									}, [o.fbt._plural(t, "number")], {
										hk: "3oSSST"
									});
								case b.a.Unspoiler:
								case b.a.Unspoiler:
									return o.fbt._({
										"*": "{number} posts/comments have been un-marked as spoilers",
										_1: "1 post/comment has been un-marked as spoilers"
									}, [o.fbt._plural(t, "number")], {
										hk: "3lHoNI"
									})
							}
						}(e, _.length);
						if (e !== b.a.Approve && e !== b.a.Flair) {
							let t, a;
							const m = v.platform.currentPage && v.platform.currentPage.queryParams && v.platform.currentPage.queryParams.subreddit,
								u = m && Object(f.E)(v, m);
							e === b.a.Remove && u && _.length > 1 && (t = o.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), a = Object(c.fetchReasonsAndOpenModal)(u, _));
							const p = Object(d.d)(n, l.b.Undo, o.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, n) => {
								let {
									apiContext: s
								} = n;
								e(B());
								const a = t(),
									c = Object.keys(a.modQueue.bulkAction.undoLastAction)[0],
									m = a.modQueue.bulkAction.undoLastAction[c],
									u = a.user.account && a.user.account.displayText;
								e(Object(r.c)());
								const b = await Object(i.a)(s(), c, {
									ids: m
								});
								b.ok ? e(D(Object.assign({}, b.body, {
									operation: c,
									ids: m,
									username: u
								}))) : (e(K(b.error)), e(Object(d.e)({
									kind: l.b.Error,
									text: o.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, a);
							s(Object(d.e)(p))
						} else {
							const e = Object(d.d)(n, l.b.SuccessMod);
							s(Object(d.e)(e))
						}
					} else {
						s(Object(r.a)(x.error));
						const e = Object(d.d)(o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), l.b.Error);
						s(Object(d.e)(e))
					}
				}, L = Object(a.a)(h.a), q = Object(a.a)(h.c), W = Object(a.a)(h.d)
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "removalReasonsPending", (function() {
				return C
			})), n.d(t, "removalReasonsLoaded", (function() {
				return w
			})), n.d(t, "removalReasonsFailed", (function() {
				return N
			})), n.d(t, "removalReasonsRequested", (function() {
				return E
			})), n.d(t, "removalReasonAddedPending", (function() {
				return M
			})), n.d(t, "removalReasonAddedSuccess", (function() {
				return T
			})), n.d(t, "removalReasonAddedFailed", (function() {
				return F
			})), n.d(t, "addRemovalReason", (function() {
				return U
			})), n.d(t, "editRemovalReasonPending", (function() {
				return B
			})), n.d(t, "editRemovalReasonSuccess", (function() {
				return D
			})), n.d(t, "editRemovalReasonFailed", (function() {
				return K
			})), n.d(t, "editRemovalReason", (function() {
				return Q
			})), n.d(t, "deleteRemovalReasonPending", (function() {
				return L
			})), n.d(t, "deleteRemovalReasonSuccess", (function() {
				return q
			})), n.d(t, "deleteRemovalReasonFailed", (function() {
				return W
			})), n.d(t, "deleteRemovalReason", (function() {
				return H
			})), n.d(t, "removedItemsSelected", (function() {
				return G
			})), n.d(t, "fetchReasonsAndOpenModal", (function() {
				return z
			})), n.d(t, "removalReasonSubmittedPending", (function() {
				return J
			})), n.d(t, "removalReasonSubmittedSuccess", (function() {
				return V
			})), n.d(t, "removalReasonSubmittedFailed", (function() {
				return Z
			})), n.d(t, "removalReasonMessagePending", (function() {
				return X
			})), n.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return Y
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
				r = n("./src/lib/makeCommentsPageKey/index.ts"),
				c = n("./src/lib/makeDraftKey/index.ts"),
				d = n("./src/reddit/actions/bulkActions/index.ts"),
				i = n("./src/reddit/actions/comment/index.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/post.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/constants/modals.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				f = n("./src/lib/omitHeaders/index.ts"),
				O = n("./src/reddit/constants/headers.ts"),
				j = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const h = (e, t) => Object(p.a)(Object(f.a)(e, [O.a]), {
					endpoint: "".concat(e.apiUrl, "/api/v1/modactions/removal_reasons/"),
					method: s.cb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				k = (e, t, n) => Object(p.a)(Object(f.a)(e, [O.a]), {
					endpoint: Object(j.a)("".concat(e.apiUrl, "/api/v1/modactions/removal_").concat(n, "_message/")),
					method: s.cb.POST,
					type: "json",
					data: t
				});
			var v = n("./src/reddit/helpers/isPost.ts"),
				_ = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				g = n("./src/reddit/helpers/routeKey/index.ts"),
				R = n("./src/reddit/models/ModQueue/index.ts"),
				x = n("./src/reddit/models/PostDraft/index.ts"),
				y = n("./src/reddit/models/RemovalReason/index.ts"),
				P = n("./src/reddit/models/Toast/index.ts"),
				S = n("./src/reddit/selectors/comments.ts"),
				A = n("./src/reddit/selectors/platform.ts"),
				I = n("./src/reddit/actions/removalReasons/constants.ts");
			const C = Object(a.a)(I.k),
				w = Object(a.a)(I.l),
				N = Object(a.a)(I.j),
				E = e => async (t, n, o) => {
					let {
						apiContext: a
					} = o;
					const r = n().subreddits.models[e].name;
					t(C());
					const c = await ((e, t) => Object(p.a)(Object(f.a)(e, [O.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons.json"),
						method: s.cb.GET
					}))(a(), r);
					c.ok ? t(w({
						subredditId: e,
						response: c.body
					})) : t(N(c.error))
				}, M = Object(a.a)(I.b), T = Object(a.a)(I.c), F = Object(a.a)(I.a), U = (e, t) => async (n, a, r) => {
					let {
						apiContext: c
					} = r;
					const d = a().subreddits.models[e].name;
					n(M());
					const i = await ((e, t, n) => Object(p.a)(Object(f.a)(e, [O.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons"),
						method: s.cb.POST,
						data: n
					}))(c(), d, t);
					if (i.ok) {
						const {
							id: s
						} = i.body, a = Object.assign({}, t, {
							id: s
						});
						n(T({
							subredditId: e,
							reason: a
						})), n(Object(b.e)({
							kind: P.b.SuccessMod,
							text: o.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else n(F(i.error))
				}, B = Object(a.a)(I.h), D = Object(a.a)(I.i), K = Object(a.a)(I.g), Q = (e, t) => async (n, a, r) => {
					let {
						apiContext: c
					} = r;
					const d = a().subreddits.models[e].name;
					n(B());
					const i = await ((e, t, n) => Object(p.a)(Object(f.a)(e, [O.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons/").concat(n.id),
						method: s.cb.PUT,
						data: {
							message: n.message,
							title: n.title
						}
					}))(c(), d, t);
					i.ok ? (n(D({
						subredditId: e,
						reason: t
					})), n(Object(b.e)({
						kind: P.b.SuccessMod,
						text: o.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : n(K(i.error))
				}, L = Object(a.a)(I.e), q = Object(a.a)(I.f), W = Object(a.a)(I.d), H = (e, t) => async (n, a, r) => {
					let {
						apiContext: c
					} = r;
					const d = a().subreddits.models[e].name;
					n(L());
					const i = await ((e, t, n) => Object(p.a)(Object(f.a)(e, [O.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons/").concat(n),
						method: s.cb.DELETE
					}))(c(), d, t);
					i.ok ? (n(q({
						subredditId: e,
						reasonId: t
					})), n(Object(b.e)({
						kind: P.b.SuccessMod,
						text: o.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : n(W(i.error))
				}, G = Object(a.a)(I.t), z = (e, t) => async (n, o, s) => {
					let {
						apiContext: a
					} = s;
					const r = o();
					r.removalReasons.reasonOrder[e] && r.removalReasons.reasonOrder[e].length > 0 || n(E(e)), n(G({
						subredditId: e,
						itemIds: t
					})), n(Object(m.i)(l.a.ADD_REMOVAL_REASON))
				}, J = Object(a.a)(I.r), V = Object(a.a)(I.s), Z = Object(a.a)(I.q), X = Object(a.a)(I.n), Y = Object(a.a)(I.o), $ = Object(a.a)(I.p), ee = Object(a.a)(I.m), te = (e, t, n, o, a) => async (d, m, b) => {
					let {
						apiContext: l
					} = b;
					const p = m(),
						f = p.user.account && p.user.account.displayText,
						O = e[0],
						j = Object(v.a)(O) ? y.e.Post : y.e.Comment,
						R = j === y.e.Post ? p.posts.models[O] : p.comments.models[O],
						P = j === y.e.Post ? u.T : i.R;
					if (!R || !f) return;
					d(J()), d(P({
						[O]: {
							modNote: a,
							modRemovalReason: t && t.title,
							modReasonBy: f
						}
					}));
					const I = {
							itemIds: e,
							modNote: a,
							reasonId: t ? t.id : null
						},
						C = await h(l(), I);
					if (C.ok) {
						if (d(V()), t) {
							d(X());
							const a = {
									itemId: e,
									message: n,
									title: t.title,
									type: o
								},
								m = await k(l(), Object(y.h)(a, j), j);
							if (m.ok)
								if (o === y.f.Public) {
									if (d($()), m.body) {
										const e = Object(_.a)(m.body, f),
											t = {
												comment: e,
												parentId: O
											},
											n = Object(A.g)(p),
											o = p.platform.currentPage && p.platform.currentPage.routeMatch;
										let a = n && o && Object(g.a)(o, p, p.posts.models[e.postId]);
										if (a || (a = Object(r.a)(e.postId, null, {
												sort: s.s,
												hasSortParam: !0
											})), j === y.e.Post) {
											const n = Object(c.a)(x.c.replyToPost, O);
											d(Object(i.mb)(Object.assign({}, t, {
												headCommentId: Object(S.x)(p, {
													commentsPageKey: a
												}),
												commentsPageKey: a,
												draftKey: n
											})));
											const o = p.postStickiedComments.data[O];
											d(Object(i.ib)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: a
											})), o && o !== e.id && d(Object(i.R)({
												[o]: {
													isStickied: !1
												}
											}))
										} else if (j === y.e.Comment) {
											const e = Object(c.a)(x.c.replyToComment, R.id),
												n = Object(S.j)(p, {
													commentId: O,
													commentsPageKey: a
												});
											d(Object(i.kb)(Object.assign({}, t, {
												parentCommentId: O,
												commentsPageKey: a,
												draftKey: e,
												depth: n + 1
											})))
										}
									}
								} else d(Y());
							else d(ee(m.error))
						}
					} else d(Z(C.error)), d(P({
						[O]: {
							modNote: R.modNote,
							modRemovalReason: R.modRemovalReason,
							modReasonBy: R.modReasonBy
						}
					}))
				}, ne = (e, t, n, s, a) => async (r, c, i) => {
					let {
						apiContext: m
					} = i;
					const u = c(),
						l = u.user.account && u.user.account.displayText;
					if (!l) return;
					r(J());
					const p = Object(b.e)({
							kind: P.b.SuccessMod,
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
						O = await h(m(), f);
					if (O.ok) {
						const o = {
							ids: e,
							operation: R.a.RemovalReason,
							username: l,
							options: {
								modNote: a,
								removalReason: t && t.title
							}
						};
						if (r(Object(d.b)(o)), t) {
							const o = {
									itemId: e,
									message: n,
									title: t.title,
									type: s
								},
								a = await k(m(), Object(y.h)(o, y.e.Bulk), y.e.Bulk);
							a.ok ? (r(Y()), r(p)) : r(ee(a.error))
						} else r(p)
					} else r(Z(O.error))
				}
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "h", (function() {
				return u
			}));
			var o = n("./src/reddit/helpers/isPost.ts");
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
			const m = e => 1 === e.length ? Object(o.a)(e[0]) ? i.Post : i.Comment : i.Bulk,
				u = (e, t) => {
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
//# sourceMappingURL=ModQueue~ModQueuePages.1e0377b1e0716d45dd22.js.map