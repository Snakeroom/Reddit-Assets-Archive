// https://www.redditstatic.com/desktop2x/ModQueue~ModQueuePages.1570f822b291775b0d57.js
// Retrieved at 3/23/2020, 6:50:05 PM by Reddit Dataminer v1.0.0
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
				return U
			})), o.d(t, "f", (function() {
				return Q
			})), o.d(t, "a", (function() {
				return B
			})), o.d(t, "b", (function() {
				return q
			})), o.d(t, "c", (function() {
				return W
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/constants/index.ts"),
				a = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/reddit/actions/bulkActions/index.ts"),
				c = o("./src/reddit/actions/removalReasons/index.ts"),
				d = o("./src/reddit/actions/toaster.ts"),
				i = o("./src/reddit/endpoints/modQueue/index.ts"),
				m = o("./src/reddit/helpers/flair.ts"),
				u = o("./src/reddit/helpers/isPost.ts"),
				l = o("./src/reddit/models/ModQueue/index.ts"),
				b = o("./src/reddit/models/Toast/index.ts"),
				p = o("./src/reddit/selectors/modQueue.ts"),
				f = o("./src/reddit/selectors/subreddit.ts"),
				O = o("./src/reddit/selectors/telemetry.ts"),
				j = o("./src/telemetry/index.ts"),
				v = o("./src/reddit/actions/modQueue/constants.ts");
			const k = Object(a.a)(v.j),
				g = Object(a.a)(v.i),
				h = Object(a.a)(v.h),
				R = Object(a.a)(v.g),
				_ = Object(a.a)(v.f),
				x = Object(a.a)(v.e),
				S = Object(a.a)(v.n),
				y = Object(a.a)(v.m),
				P = Object(a.a)(v.l),
				A = Object(a.a)(v.q),
				C = Object(a.a)(v.p),
				I = Object(a.a)(v.o),
				w = Object(a.a)(v.w),
				L = Object(a.a)(v.v),
				M = Object(a.a)(v.u),
				E = (e, t, o) => async (a, r, c) => {
					let m, u, p, {
						apiContext: f
					} = c;
					switch (t) {
						case s.gb.Edited:
							m = R, u = x, p = _;
							break;
						case s.gb.Modqueue:
							m = k, u = h, p = g;
							break;
						case s.gb.Reports:
							m = S, u = P, p = y;
							break;
						case s.gb.Spam:
							m = A, u = I, p = C;
							break;
						case s.gb.Unmoderated:
							m = w, u = M, p = L;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					a(m());
					const O = await Object(i.b)(f(), t, o);
					if (O.ok) {
						a(p({
							listingKey: e,
							page: "".concat(o.page || l.b),
							response: O.body
						}))
					} else a(u(O.error)), a(Object(d.e)({
						kind: b.b.Error,
						text: n.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, N = Object(a.a)(v.k), T = Object(a.a)(v.b), U = e => async (t, o, s) => {
					let {
						apiContext: a
					} = s;
					const r = o(),
						c = r.modQueue.moderatedCommunitiesOrder.after,
						m = r.modQueue.moderatedCommunitiesOrder.pending,
						u = r.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: l
						} = r.platform.currentPage.urlParams,
						p = l;
					if (e && m || u || !c) return;
					const f = await Object(i.b)(a(), p, {
						moderated_after: c
					});
					f.ok ? (t(N(f.body)), f.body.moderatedAfter ? t(U()) : t(T())) : t(Object(d.e)({
						kind: b.b.Error,
						text: n.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, K = Object(a.a)(v.t), D = Object(a.a)(v.s), F = Object(a.a)(v.r), Q = (e, t, o) => async (s, a, v) => {
					let {
						apiContext: k
					} = v;
					s(Object(r.c)());
					const g = a(),
						h = Object(p.g)(g),
						R = g.user.account && g.user.account.displayText;
					for (let t = 0; t < h.length; t++) {
						const o = h[t];
						let n = e;
						[l.a.Approve, l.a.Remove, l.a.Spam].includes(e) && (Object(u.a)(o) ? n += "_link" : n += "_comment"), Object(j.a)(Object.assign({
							source: "bulk_mod_action",
							action: "click",
							noun: n
						}, O.defaults(g), {
							actionInfo: O.actionInfo(g, {
								count: h.length,
								paneName: g.platform.currentPage ? g.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: O.comment(g, o),
							post: O.post(g, o),
							profile: O.profileByPostOrCommentId(g, o),
							screen: O.screen(g),
							subreddit: O.subredditByPostOrCommentId(g, o)
						}))
					}
					const _ = {
						ids: h
					};
					t && (_.text = Object(m.g)(t) || "", _.flairTemplateId = ""), o && (_.cssClass = o, _.flairTemplateId = o);
					const x = await Object(i.a)(k(), e, _);
					if (x.ok) {
						s(Object(r.b)(Object.assign({}, x.body, {
							operation: e,
							ids: h,
							username: R,
							options: {
								flair: t
							}
						})));
						const o = function(e, t) {
							switch (e) {
								case l.a.Approve:
									return n.fbt._("{count} posts/comments have been approved", [n.fbt._param("count", t.toLocaleString())], {
										hk: "1qICPW"
									});
								case l.a.Flair:
									return n.fbt._("{count} posts/comments have had flair applied", [n.fbt._param("count", t.toLocaleString())], {
										hk: "3rw26K"
									});
								case l.a.IgnoreReports:
									return n.fbt._("{count} posts/comments have had their reports ignored", [n.fbt._param("count", t.toLocaleString())], {
										hk: "3rNsmj"
									});
								case l.a.Lock:
									return n.fbt._("{count} posts/comments have been locked", [n.fbt._param("count", t.toLocaleString())], {
										hk: "14ew4E"
									});
								case l.a.MarkNSFW:
									return n.fbt._("{count} posts/comments have been marked NSFW", [n.fbt._param("count", t.toLocaleString())], {
										hk: "1sxQWy"
									});
								case l.a.RemovalReason:
									return n.fbt._("{count} posts/comments have had removal reasons applied", [n.fbt._param("count", t.toLocaleString())], {
										hk: "hB1Cf"
									});
								case l.a.Remove:
									return n.fbt._("{count} posts/comments have been removed", [n.fbt._param("count", t.toLocaleString())], {
										hk: "4aLdAo"
									});
								case l.a.Spam:
									return n.fbt._("{count} posts/comments have been marked as spam", [n.fbt._param("count", t.toLocaleString())], {
										hk: "1MtDMA"
									});
								case l.a.Spoiler:
									return n.fbt._("{count} posts/comments have been marked as spoilers", [n.fbt._param("count", t.toLocaleString())], {
										hk: "jT3Ax"
									});
								case l.a.UnignoreReports:
									return n.fbt._("{count} posts/comments have had their reports un-ignored", [n.fbt._param("count", t.toLocaleString())], {
										hk: "1MKatM"
									});
								case l.a.Unlock:
									return n.fbt._("{count} posts/comments have been unlocked", [n.fbt._param("count", t.toLocaleString())], {
										hk: "4c6zEu"
									});
								case l.a.UnmarkNSFW:
									return n.fbt._("{count} posts/comments have been un-marked as NSFW", [n.fbt._param("count", t.toLocaleString())], {
										hk: "1pWvp5"
									});
								case l.a.Unspoiler:
								case l.a.Unspoiler:
									return n.fbt._("{count} posts/comments have been un-marked as spoilers", [n.fbt._param("count", t.toLocaleString())], {
										hk: "1jlKvb"
									})
							}
						}(e, h.length);
						if (e !== l.a.Approve && e !== l.a.Flair) {
							let t, a;
							const m = g.platform.currentPage && g.platform.currentPage.queryParams && g.platform.currentPage.queryParams.subreddit,
								u = m && Object(f.D)(g, m);
							e === l.a.Remove && u && h.length > 1 && (t = n.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), a = Object(c.fetchReasonsAndOpenModal)(u, h));
							const p = Object(d.d)(o, b.b.Undo, n.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, o) => {
								let {
									apiContext: s
								} = o;
								e(K());
								const a = t(),
									c = Object.keys(a.modQueue.bulkAction.undoLastAction)[0],
									m = a.modQueue.bulkAction.undoLastAction[c],
									u = a.user.account && a.user.account.displayText;
								e(Object(r.c)());
								const l = await Object(i.a)(s(), c, {
									ids: m
								});
								l.ok ? e(D(Object.assign({}, l.body, {
									operation: c,
									ids: m,
									username: u
								}))) : (e(F(l.error)), e(Object(d.e)({
									kind: b.b.Error,
									text: n.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, a);
							s(Object(d.e)(p))
						} else {
							const e = Object(d.d)(o, b.b.SuccessMod);
							s(Object(d.e)(e))
						}
					} else {
						s(Object(r.a)(x.error));
						const e = Object(d.d)(n.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), b.b.Error);
						s(Object(d.e)(e))
					}
				}, B = Object(a.a)(v.a), q = Object(a.a)(v.c), W = Object(a.a)(v.d)
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, o) {
			"use strict";
			o.r(t);
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/constants/index.ts"),
				a = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/lib/makeCommentsPageKey/index.ts"),
				c = o("./src/lib/makeDraftKey/index.ts"),
				d = o("./src/reddit/actions/bulkActions/index.ts"),
				i = o("./src/reddit/actions/comment/index.ts"),
				m = o("./src/reddit/actions/modal.ts"),
				u = o("./src/reddit/actions/post.ts"),
				l = o("./src/reddit/actions/toaster.ts"),
				b = o("./src/reddit/constants/modals.ts"),
				p = o("./src/lib/makeApiRequest/index.ts"),
				f = o("./src/lib/omitHeaders/index.ts"),
				O = o("./src/reddit/constants/headers.ts"),
				j = o("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const v = (e, t) => Object(p.b)(Object(f.a)(e, [O.a]), {
					endpoint: "".concat(e.apiUrl, "/api/v1/modactions/removal_reasons/"),
					method: s.cb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				k = (e, t, o) => Object(p.b)(Object(f.a)(e, [O.a]), {
					endpoint: Object(j.a)("".concat(e.apiUrl, "/api/v1/modactions/removal_").concat(o, "_message/")),
					method: s.cb.POST,
					type: "json",
					data: t
				});
			var g = o("./src/reddit/helpers/isPost.ts"),
				h = o("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				R = o("./src/reddit/helpers/routeKey/index.ts"),
				_ = o("./src/reddit/models/ModQueue/index.ts"),
				x = o("./src/reddit/models/PostDraft/index.ts"),
				S = o("./src/reddit/models/RemovalReason/index.ts"),
				y = o("./src/reddit/models/Toast/index.ts"),
				P = o("./src/reddit/selectors/comments.ts"),
				A = o("./src/reddit/selectors/platform.ts"),
				C = o("./src/reddit/actions/removalReasons/constants.ts");
			o.d(t, "removalReasonsPending", (function() {
				return I
			})), o.d(t, "removalReasonsLoaded", (function() {
				return w
			})), o.d(t, "removalReasonsFailed", (function() {
				return L
			})), o.d(t, "removalReasonsRequested", (function() {
				return M
			})), o.d(t, "removalReasonAddedPending", (function() {
				return E
			})), o.d(t, "removalReasonAddedSuccess", (function() {
				return N
			})), o.d(t, "removalReasonAddedFailed", (function() {
				return T
			})), o.d(t, "addRemovalReason", (function() {
				return U
			})), o.d(t, "editRemovalReasonPending", (function() {
				return K
			})), o.d(t, "editRemovalReasonSuccess", (function() {
				return D
			})), o.d(t, "editRemovalReasonFailed", (function() {
				return F
			})), o.d(t, "editRemovalReason", (function() {
				return Q
			})), o.d(t, "deleteRemovalReasonPending", (function() {
				return B
			})), o.d(t, "deleteRemovalReasonSuccess", (function() {
				return q
			})), o.d(t, "deleteRemovalReasonFailed", (function() {
				return W
			})), o.d(t, "deleteRemovalReason", (function() {
				return z
			})), o.d(t, "removedItemsSelected", (function() {
				return H
			})), o.d(t, "fetchReasonsAndOpenModal", (function() {
				return G
			})), o.d(t, "removalReasonSubmittedPending", (function() {
				return J
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
			const I = Object(a.a)(C.k),
				w = Object(a.a)(C.l),
				L = Object(a.a)(C.j),
				M = e => async (t, o, n) => {
					let {
						apiContext: a
					} = n;
					const r = o().subreddits.models[e].name;
					t(I());
					const c = await ((e, t) => Object(p.b)(Object(f.a)(e, [O.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons.json"),
						method: s.cb.GET
					}))(a(), r);
					c.ok ? t(w({
						subredditId: e,
						response: c.body
					})) : t(L(c.error))
				}, E = Object(a.a)(C.b), N = Object(a.a)(C.c), T = Object(a.a)(C.a), U = (e, t) => async (o, a, r) => {
					let {
						apiContext: c
					} = r;
					const d = a().subreddits.models[e].name;
					o(E());
					const i = await ((e, t, o) => Object(p.b)(Object(f.a)(e, [O.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons"),
						method: s.cb.POST,
						data: o
					}))(c(), d, t);
					if (i.ok) {
						const {
							id: s
						} = i.body, a = Object.assign({}, t, {
							id: s
						});
						o(N({
							subredditId: e,
							reason: a
						})), o(Object(l.e)({
							kind: y.b.SuccessMod,
							text: n.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else o(T(i.error))
				}, K = Object(a.a)(C.h), D = Object(a.a)(C.i), F = Object(a.a)(C.g), Q = (e, t) => async (o, a, r) => {
					let {
						apiContext: c
					} = r;
					const d = a().subreddits.models[e].name;
					o(K());
					const i = await ((e, t, o) => Object(p.b)(Object(f.a)(e, [O.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons/").concat(o.id),
						method: s.cb.PUT,
						data: {
							message: o.message,
							title: o.title
						}
					}))(c(), d, t);
					i.ok ? (o(D({
						subredditId: e,
						reason: t
					})), o(Object(l.e)({
						kind: y.b.SuccessMod,
						text: n.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : o(F(i.error))
				}, B = Object(a.a)(C.e), q = Object(a.a)(C.f), W = Object(a.a)(C.d), z = (e, t) => async (o, a, r) => {
					let {
						apiContext: c
					} = r;
					const d = a().subreddits.models[e].name;
					o(B());
					const i = await ((e, t, o) => Object(p.b)(Object(f.a)(e, [O.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons/").concat(o),
						method: s.cb.DELETE
					}))(c(), d, t);
					i.ok ? (o(q({
						subredditId: e,
						reasonId: t
					})), o(Object(l.e)({
						kind: y.b.SuccessMod,
						text: n.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : o(W(i.error))
				}, H = Object(a.a)(C.t), G = (e, t) => async (o, n, s) => {
					let {
						apiContext: a
					} = s;
					const r = n();
					r.removalReasons.reasonOrder[e] && r.removalReasons.reasonOrder[e].length > 0 || o(M(e)), o(H({
						subredditId: e,
						itemIds: t
					})), o(Object(m.i)(b.a.ADD_REMOVAL_REASON))
				}, J = Object(a.a)(C.r), V = Object(a.a)(C.s), X = Object(a.a)(C.q), Y = Object(a.a)(C.n), Z = Object(a.a)(C.o), $ = Object(a.a)(C.p), ee = Object(a.a)(C.m), te = (e, t, o, n, a) => async (d, m, l) => {
					let {
						apiContext: b
					} = l;
					const p = m(),
						f = p.user.account && p.user.account.displayText,
						O = e[0],
						j = Object(g.a)(O) ? S.e.Post : S.e.Comment,
						_ = j === S.e.Post ? p.posts.models[O] : p.comments.models[O],
						y = j === S.e.Post ? u.T : i.R;
					if (!_ || !f) return;
					d(J()), d(y({
						[O]: {
							modNote: a,
							modRemovalReason: t && t.title,
							modReasonBy: f
						}
					}));
					const C = {
							itemIds: e,
							modNote: a,
							reasonId: t ? t.id : null
						},
						I = await v(b(), C);
					if (I.ok) {
						if (d(V()), t) {
							d(Y());
							const a = {
									itemId: e,
									message: o,
									title: t.title,
									type: n
								},
								m = await k(b(), Object(S.h)(a, j), j);
							if (m.ok)
								if (n === S.f.Public) {
									if (d($()), m.body) {
										const e = Object(h.a)(m.body, f),
											t = {
												comment: e,
												parentId: O
											},
											o = Object(A.g)(p),
											n = p.platform.currentPage && p.platform.currentPage.routeMatch;
										let a = o && n && Object(R.a)(n, p, p.posts.models[e.postId]);
										if (a || (a = Object(r.a)(e.postId, null, {
												sort: s.s,
												hasSortParam: !0
											})), j === S.e.Post) {
											const o = Object(c.a)(x.c.replyToPost, O);
											d(Object(i.mb)(Object.assign({}, t, {
												headCommentId: Object(P.x)(p, {
													commentsPageKey: a
												}),
												commentsPageKey: a,
												draftKey: o
											})));
											const n = p.postStickiedComments.data[O];
											d(Object(i.ib)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: a
											})), n && n !== e.id && d(Object(i.R)({
												[n]: {
													isStickied: !1
												}
											}))
										} else if (j === S.e.Comment) {
											const e = Object(c.a)(x.c.replyToComment, _.id),
												o = Object(P.j)(p, {
													commentId: O,
													commentsPageKey: a
												});
											d(Object(i.kb)(Object.assign({}, t, {
												parentCommentId: O,
												commentsPageKey: a,
												draftKey: e,
												depth: o + 1
											})))
										}
									}
								} else d(Z());
							else d(ee(m.error))
						}
					} else d(X(I.error)), d(y({
						[O]: {
							modNote: _.modNote,
							modRemovalReason: _.modRemovalReason,
							modReasonBy: _.modReasonBy
						}
					}))
				}, oe = (e, t, o, s, a) => async (r, c, i) => {
					let {
						apiContext: m
					} = i;
					const u = c(),
						b = u.user.account && u.user.account.displayText;
					if (!b) return;
					r(J());
					const p = Object(l.e)({
							kind: y.b.SuccessMod,
							text: n.fbt._("Added removal reason for {number} posts/comments", [n.fbt._param("number", e.length.toLocaleString())], {
								hk: "1nW4Qh"
							})
						}),
						f = {
							itemIds: e,
							modNote: a,
							reasonId: t ? t.id : null
						},
						O = await v(m(), f);
					if (O.ok) {
						const n = {
							ids: e,
							operation: _.a.RemovalReason,
							username: b,
							options: {
								modNote: a,
								removalReason: t && t.title
							}
						};
						if (r(Object(d.b)(n)), t) {
							const n = {
									itemId: e,
									message: o,
									title: t.title,
									type: s
								},
								a = await k(m(), Object(S.h)(n, S.e.Bulk), S.e.Bulk);
							a.ok ? (r(Z()), r(p)) : r(ee(a.error))
						} else r(p)
					} else r(X(O.error))
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
				return m
			})), o.d(t, "h", (function() {
				return u
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
			const m = e => 1 === e.length ? Object(n.a)(e[0]) ? i.Post : i.Comment : i.Bulk,
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
//# sourceMappingURL=ModQueue~ModQueuePages.1570f822b291775b0d57.js.map