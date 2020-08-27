// https://www.redditstatic.com/desktop2x/ModQueue~ModQueuePages.07622ac723a52ea6925c.js
// Retrieved at 8/27/2020, 1:10:07 PM by Reddit Dataminer v1.0.0
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
				return E
			})), n.d(t, "d", (function() {
				return Q
			})), n.d(t, "f", (function() {
				return L
			})), n.d(t, "a", (function() {
				return q
			})), n.d(t, "b", (function() {
				return W
			})), n.d(t, "c", (function() {
				return H
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/bulkActions/index.ts"),
				c = n("./src/reddit/actions/removalReasons/index.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/modQueue/index.ts"),
				m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				u = n("./src/reddit/helpers/flair.ts"),
				b = n("./src/reddit/helpers/isPost.ts"),
				l = n("./src/reddit/models/ModQueue/index.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/selectors/modQueue.ts"),
				O = n("./src/reddit/selectors/subreddit.ts"),
				j = n("./src/reddit/selectors/telemetry.ts"),
				h = n("./src/telemetry/index.ts"),
				k = n("./src/reddit/actions/modQueue/constants.ts");
			const v = Object(a.a)(k.j),
				_ = Object(a.a)(k.i),
				g = Object(a.a)(k.h),
				R = Object(a.a)(k.g),
				P = Object(a.a)(k.f),
				x = Object(a.a)(k.e),
				y = Object(a.a)(k.n),
				S = Object(a.a)(k.m),
				I = Object(a.a)(k.l),
				A = Object(a.a)(k.q),
				C = Object(a.a)(k.p),
				w = Object(a.a)(k.o),
				N = Object(a.a)(k.w),
				M = Object(a.a)(k.v),
				T = Object(a.a)(k.u),
				E = (e, t, n) => async (a, r, c) => {
					let m, u, b, {
						apiContext: f
					} = c;
					switch (t) {
						case s.hb.Edited:
							m = R, u = x, b = P;
							break;
						case s.hb.Modqueue:
							m = v, u = g, b = _;
							break;
						case s.hb.Reports:
							m = y, u = I, b = S;
							break;
						case s.hb.Spam:
							m = A, u = w, b = C;
							break;
						case s.hb.Unmoderated:
							m = N, u = T, b = M;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					a(m());
					const O = await Object(i.b)(f(), t, n);
					if (O.ok) {
						a(b({
							listingKey: e,
							page: "".concat(n.page || l.b),
							response: O.body
						}))
					} else a(u(O.error)), a(Object(d.e)({
						kind: p.b.Error,
						text: o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, F = Object(a.a)(k.k), U = Object(a.a)(k.b), Q = e => async (t, n, s) => {
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
						l = b;
					if (e && m || u || !c) return;
					const f = await Object(i.b)(a(), l, {
						moderated_after: c
					});
					f.ok ? (t(F(f.body)), f.body.moderatedAfter ? t(Q()) : t(U())) : t(Object(d.e)({
						kind: p.b.Error,
						text: o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, B = Object(a.a)(k.t), D = Object(a.a)(k.s), K = Object(a.a)(k.r), L = (e, t, n) => async (s, a, k) => {
					let {
						apiContext: v
					} = k;
					s(Object(r.c)());
					const _ = a(),
						g = Object(f.g)(_),
						R = _.user.account && _.user.account.displayText;
					Object(m.d)(m.a.ModQueue);
					const P = Object(m.c)(m.a.ModQueue);
					Object(h.a)(Object.assign(Object.assign({
						source: "bulk_mod_action_menu",
						action: "click",
						noun: e
					}, j.defaults(_)), {
						actionInfo: j.actionInfo(_, {
							count: g.length,
							paneName: _.platform.currentPage ? _.platform.currentPage.urlParams.pageName : void 0
						}),
						screen: j.screen(_),
						correlationId: P
					}));
					for (let t = 0; t < g.length; t++) {
						const n = g[t];
						let o = e;
						[l.a.Approve, l.a.Remove, l.a.Spam].includes(e) && (Object(b.a)(n) ? o += "_link" : o += "_comment"), Object(h.a)(Object.assign(Object.assign({
							source: "bulk_mod_action",
							action: "click",
							noun: o
						}, j.defaults(_)), {
							actionInfo: j.actionInfo(_, {
								count: g.length,
								paneName: _.platform.currentPage ? _.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: j.comment(_, n),
							post: j.post(_, n),
							profile: j.profileByPostOrCommentId(_, n),
							screen: j.screen(_),
							subreddit: j.subredditByPostOrCommentId(_, n),
							correlationId: P
						}))
					}
					Object(m.b)(m.a.ModQueue);
					const x = {
						ids: g
					};
					t && (x.text = Object(u.g)(t) || "", x.flairTemplateId = ""), n && (x.cssClass = n, x.flairTemplateId = n);
					const y = await Object(i.a)(v(), e, x);
					if (y.ok) {
						s(Object(r.b)(Object.assign(Object.assign({}, y.body), {
							operation: e,
							ids: g,
							username: R,
							options: {
								flair: t
							}
						})));
						const n = function(e, t) {
							switch (e) {
								case l.a.Approve:
									return o.fbt._({
										"*": "{number} posts/comments have been approved",
										_1: "1 post/comment has been approved"
									}, [o.fbt._plural(t, "number")], {
										hk: "2kKhSf"
									});
								case l.a.Flair:
									return o.fbt._({
										"*": "{number} posts/comments have had flair applied",
										_1: "1 post/comment has had flair applied"
									}, [o.fbt._plural(t, "number")], {
										hk: "3syB5O"
									});
								case l.a.IgnoreReports:
									return o.fbt._({
										"*": "{number} posts/comments have had their reports ignored",
										_1: "1 post/comment has had their reports ignored"
									}, [o.fbt._plural(t, "number")], {
										hk: "2WfE4g"
									});
								case l.a.Lock:
									return o.fbt._({
										"*": "{number} posts/comments have been locked",
										_1: "1 post/comment has been locked"
									}, [o.fbt._plural(t, "number")], {
										hk: "45oMbv"
									});
								case l.a.MarkNSFW:
									return o.fbt._({
										"*": "{number} posts/comments have been marked NSFW",
										_1: "1 post/comment has been marked NSFW"
									}, [o.fbt._plural(t, "number")], {
										hk: "oPsQr"
									});
								case l.a.RemovalReason:
									return o.fbt._({
										"*": "{number} posts/comments have had removal reasons applied",
										_1: "1 post/comment has had removal reasons applied"
									}, [o.fbt._plural(t, "number")], {
										hk: "35Tosn"
									});
								case l.a.Remove:
									return o.fbt._({
										"*": "{number} posts/comments have been removed",
										_1: "1 post/comment has been removed"
									}, [o.fbt._plural(t, "number")], {
										hk: "B1ZbE"
									});
								case l.a.Spam:
									return o.fbt._({
										"*": "{number} posts/comments have been marked as spam",
										_1: "1 post/comment has been marked as spam"
									}, [o.fbt._plural(t, "number")], {
										hk: "3OoNfp"
									});
								case l.a.Spoiler:
									return o.fbt._({
										"*": "{number} posts/comments have been marked as spoilers",
										_1: "1 post/comment has been marked as spoilers"
									}, [o.fbt._plural(t, "number")], {
										hk: "1DFW5M"
									});
								case l.a.UnignoreReports:
									return o.fbt._({
										"*": "{number} posts/comments have had their reports un-ignored",
										_1: "1 post/comment has had their reports un-ignored"
									}, [o.fbt._plural(t, "number")], {
										hk: "303Hpb"
									});
								case l.a.Unlock:
									return o.fbt._({
										"*": "{number} posts/comments have been unlocked",
										_1: "1 post/comment has been unlocked"
									}, [o.fbt._plural(t, "number")], {
										hk: "5gUht"
									});
								case l.a.UnmarkNSFW:
									return o.fbt._({
										"*": "{number} posts/comments have been un-marked as NSFW",
										_1: "1 post/comment has been un-marked as NSFW"
									}, [o.fbt._plural(t, "number")], {
										hk: "3oSSST"
									});
								case l.a.Unspoiler:
								case l.a.Unspoiler:
									return o.fbt._({
										"*": "{number} posts/comments have been un-marked as spoilers",
										_1: "1 post/comment has been un-marked as spoilers"
									}, [o.fbt._plural(t, "number")], {
										hk: "3lHoNI"
									})
							}
						}(e, g.length);
						if (e !== l.a.Approve && e !== l.a.Flair) {
							let t, a;
							const m = _.platform.currentPage && _.platform.currentPage.queryParams && _.platform.currentPage.queryParams.subreddit,
								u = m && Object(O.F)(_, m);
							e === l.a.Remove && u && g.length > 1 && (t = o.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), a = Object(c.fetchReasonsAndOpenModal)(u, g));
							const b = Object(d.d)(n, p.b.Undo, o.fbt._("UNDO", null, {
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
								b.ok ? e(D(Object.assign(Object.assign({}, b.body), {
									operation: c,
									ids: m,
									username: u
								}))) : (e(K(b.error)), e(Object(d.e)({
									kind: p.b.Error,
									text: o.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, a);
							s(Object(d.e)(b))
						} else {
							const e = Object(d.d)(n, p.b.SuccessMod);
							s(Object(d.e)(e))
						}
					} else {
						s(Object(r.a)(y.error));
						const e = Object(d.d)(o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), p.b.Error);
						s(Object(d.e)(e))
					}
				}, q = Object(a.a)(k.a), W = Object(a.a)(k.c), H = Object(a.a)(k.d)
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
				return M
			})), n.d(t, "removalReasonAddedPending", (function() {
				return T
			})), n.d(t, "removalReasonAddedSuccess", (function() {
				return E
			})), n.d(t, "removalReasonAddedFailed", (function() {
				return F
			})), n.d(t, "addRemovalReason", (function() {
				return U
			})), n.d(t, "editRemovalReasonPending", (function() {
				return Q
			})), n.d(t, "editRemovalReasonSuccess", (function() {
				return B
			})), n.d(t, "editRemovalReasonFailed", (function() {
				return D
			})), n.d(t, "editRemovalReason", (function() {
				return K
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
				return J
			})), n.d(t, "removalReasonSubmittedPending", (function() {
				return z
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
					method: s.db.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				k = (e, t, n) => Object(p.a)(Object(f.a)(e, [O.a]), {
					endpoint: Object(j.a)("".concat(e.apiUrl, "/api/v1/modactions/removal_").concat(n, "_message/")),
					method: s.db.POST,
					type: "json",
					data: t
				});
			var v = n("./src/reddit/helpers/isPost.ts"),
				_ = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				g = n("./src/reddit/helpers/routeKey/index.ts"),
				R = n("./src/reddit/models/ModQueue/index.ts"),
				P = n("./src/reddit/models/PostDraft/index.ts"),
				x = n("./src/reddit/models/RemovalReason/index.ts"),
				y = n("./src/reddit/models/Toast/index.ts"),
				S = n("./src/reddit/selectors/comments.ts"),
				I = n("./src/reddit/selectors/platform.ts"),
				A = n("./src/reddit/actions/removalReasons/constants.ts");
			const C = Object(a.a)(A.k),
				w = Object(a.a)(A.l),
				N = Object(a.a)(A.j),
				M = e => async (t, n, o) => {
					let {
						apiContext: a
					} = o;
					const r = n().subreddits.models[e].name;
					t(C());
					const c = await ((e, t) => Object(p.a)(Object(f.a)(e, [O.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons.json"),
						method: s.db.GET
					}))(a(), r);
					c.ok ? t(w({
						subredditId: e,
						response: c.body
					})) : t(N(c.error))
				}, T = Object(a.a)(A.b), E = Object(a.a)(A.c), F = Object(a.a)(A.a), U = (e, t) => async (n, a, r) => {
					let {
						apiContext: c
					} = r;
					const d = a().subreddits.models[e].name;
					n(T());
					const i = await ((e, t, n) => Object(p.a)(Object(f.a)(e, [O.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons"),
						method: s.db.POST,
						data: n
					}))(c(), d, t);
					if (i.ok) {
						const {
							id: s
						} = i.body, a = Object.assign(Object.assign({}, t), {
							id: s
						});
						n(E({
							subredditId: e,
							reason: a
						})), n(Object(b.e)({
							kind: y.b.SuccessMod,
							text: o.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else n(F(i.error))
				}, Q = Object(a.a)(A.h), B = Object(a.a)(A.i), D = Object(a.a)(A.g), K = (e, t) => async (n, a, r) => {
					let {
						apiContext: c
					} = r;
					const d = a().subreddits.models[e].name;
					n(Q());
					const i = await ((e, t, n) => Object(p.a)(Object(f.a)(e, [O.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons/").concat(n.id),
						method: s.db.PUT,
						data: {
							message: n.message,
							title: n.title
						}
					}))(c(), d, t);
					i.ok ? (n(B({
						subredditId: e,
						reason: t
					})), n(Object(b.e)({
						kind: y.b.SuccessMod,
						text: o.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : n(D(i.error))
				}, L = Object(a.a)(A.e), q = Object(a.a)(A.f), W = Object(a.a)(A.d), H = (e, t) => async (n, a, r) => {
					let {
						apiContext: c
					} = r;
					const d = a().subreddits.models[e].name;
					n(L());
					const i = await ((e, t, n) => Object(p.a)(Object(f.a)(e, [O.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons/").concat(n),
						method: s.db.DELETE
					}))(c(), d, t);
					i.ok ? (n(q({
						subredditId: e,
						reasonId: t
					})), n(Object(b.e)({
						kind: y.b.SuccessMod,
						text: o.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : n(W(i.error))
				}, G = Object(a.a)(A.t), J = (e, t) => async (n, o, s) => {
					let {
						apiContext: a
					} = s;
					const r = o();
					r.removalReasons.reasonOrder[e] && r.removalReasons.reasonOrder[e].length > 0 || n(M(e)), n(G({
						subredditId: e,
						itemIds: t
					})), n(Object(m.i)(l.a.ADD_REMOVAL_REASON))
				}, z = Object(a.a)(A.r), V = Object(a.a)(A.s), Z = Object(a.a)(A.q), X = Object(a.a)(A.n), Y = Object(a.a)(A.o), $ = Object(a.a)(A.p), ee = Object(a.a)(A.m), te = (e, t, n, o, a) => async (d, m, b) => {
					let {
						apiContext: l
					} = b;
					const p = m(),
						f = p.user.account && p.user.account.displayText,
						O = e[0],
						j = Object(v.a)(O) ? x.e.Post : x.e.Comment,
						R = j === x.e.Post ? p.posts.models[O] : p.comments.models[O],
						y = j === x.e.Post ? u.J : i.R;
					if (!R || !f) return !1;
					d(z()), d(y({
						[O]: {
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
						C = await h(l(), A);
					if (C.ok) {
						if (d(V()), t) {
							d(X());
							const a = {
									itemId: e,
									message: n,
									title: t.title,
									type: o
								},
								m = await k(l(), Object(x.h)(a, j), j);
							if (m.ok) {
								if (o === x.f.Public) {
									if (d($()), m.body) {
										const e = Object(_.a)(m.body, f),
											t = {
												comment: e,
												parentId: O
											},
											n = Object(I.g)(p),
											o = p.platform.currentPage && p.platform.currentPage.routeMatch;
										let a = n && o && Object(g.a)(o, p, p.posts.models[e.postId]);
										if (a || (a = Object(r.a)(e.postId, null, {
												sort: s.s,
												hasSortParam: !0
											})), j === x.e.Post) {
											const n = Object(c.a)(P.c.replyToPost, O);
											d(Object(i.mb)(Object.assign(Object.assign({}, t), {
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
										} else if (j === x.e.Comment) {
											const e = Object(c.a)(P.c.replyToComment, R.id),
												n = Object(S.j)(p, {
													commentId: O,
													commentsPageKey: a
												});
											d(Object(i.kb)(Object.assign(Object.assign({}, t), {
												parentCommentId: O,
												commentsPageKey: a,
												draftKey: e,
												depth: n + 1
											})))
										}
									}
								} else d(Y());
								return !0
							}
							return d(ee(m.error)), !1
						}
					} else d(Z(C.error)), d(y({
						[O]: {
							modNote: R.modNote,
							modRemovalReason: R.modRemovalReason,
							modReasonBy: R.modReasonBy
						}
					}));
					return !1
				}, ne = (e, t, n, s, a) => async (r, c, i) => {
					let {
						apiContext: m
					} = i;
					const u = c(),
						l = u.user.account && u.user.account.displayText;
					if (!l) return;
					r(z());
					const p = Object(b.e)({
							kind: y.b.SuccessMod,
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
								a = await k(m(), Object(x.h)(o, x.e.Bulk), x.e.Bulk);
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
//# sourceMappingURL=ModQueue~ModQueuePages.07622ac723a52ea6925c.js.map