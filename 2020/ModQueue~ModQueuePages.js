// https://www.redditstatic.com/desktop2x/ModQueue~ModQueuePages.5842c629b39b1b4662d8.js
// Retrieved at 3/18/2020, 7:10:05 PM by Reddit Dataminer v1.0.0
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
				return F
			})), o.d(t, "a", (function() {
				return Q
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
				O = o("./src/reddit/selectors/subreddit.ts"),
				f = o("./src/reddit/selectors/telemetry.ts"),
				j = o("./src/telemetry/index.ts"),
				v = o("./src/reddit/actions/modQueue/constants.ts");
			const h = Object(a.a)(v.j),
				k = Object(a.a)(v.i),
				g = Object(a.a)(v.h),
				R = Object(a.a)(v.g),
				_ = Object(a.a)(v.f),
				x = Object(a.a)(v.e),
				y = Object(a.a)(v.n),
				S = Object(a.a)(v.m),
				P = Object(a.a)(v.l),
				A = Object(a.a)(v.q),
				C = Object(a.a)(v.p),
				I = Object(a.a)(v.o),
				w = Object(a.a)(v.w),
				L = Object(a.a)(v.v),
				M = Object(a.a)(v.u),
				E = (e, t, o) => async (a, r, c) => {
					let m, u, p, {
						apiContext: O
					} = c;
					switch (t) {
						case s.hb.Edited:
							m = R, u = x, p = _;
							break;
						case s.hb.Modqueue:
							m = h, u = g, p = k;
							break;
						case s.hb.Reports:
							m = y, u = P, p = S;
							break;
						case s.hb.Spam:
							m = A, u = I, p = C;
							break;
						case s.hb.Unmoderated:
							m = w, u = M, p = L;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					a(m());
					const f = await Object(i.b)(O(), t, o);
					if (f.ok) {
						a(p({
							listingKey: e,
							page: "".concat(o.page || l.b),
							response: f.body
						}))
					} else a(u(f.error)), a(Object(d.e)({
						kind: b.b.Error,
						text: n.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, T = Object(a.a)(v.k), N = Object(a.a)(v.b), U = e => async (t, o, s) => {
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
					const O = await Object(i.b)(a(), p, {
						moderated_after: c
					});
					O.ok ? (t(T(O.body)), O.body.moderatedAfter ? t(U()) : t(N())) : t(Object(d.e)({
						kind: b.b.Error,
						text: n.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, K = Object(a.a)(v.t), D = Object(a.a)(v.s), B = Object(a.a)(v.r), F = (e, t, o) => async (s, a, v) => {
					let {
						apiContext: h
					} = v;
					s(Object(r.c)());
					const k = a(),
						g = Object(p.g)(k),
						R = k.user.account && k.user.account.displayText;
					for (let t = 0; t < g.length; t++) {
						const o = g[t];
						let n = e;
						[l.a.Approve, l.a.Remove, l.a.Spam].includes(e) && (Object(u.a)(o) ? n += "_link" : n += "_comment"), Object(j.a)(Object.assign({
							source: "bulk_mod_action",
							action: "click",
							noun: n
						}, f.defaults(k), {
							actionInfo: f.actionInfo(k, {
								count: g.length,
								paneName: k.platform.currentPage ? k.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: f.comment(k, o),
							post: f.post(k, o),
							profile: f.profileByPostOrCommentId(k, o),
							screen: f.screen(k),
							subreddit: f.subredditByPostOrCommentId(k, o)
						}))
					}
					const _ = {
						ids: g
					};
					t && (_.text = Object(m.g)(t) || "", _.flairTemplateId = ""), o && (_.cssClass = o, _.flairTemplateId = o);
					const x = await Object(i.a)(h(), e, _);
					if (x.ok) {
						s(Object(r.b)(Object.assign({}, x.body, {
							operation: e,
							ids: g,
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
						}(e, g.length);
						if (e !== l.a.Approve && e !== l.a.Flair) {
							let t, a;
							const m = k.platform.currentPage && k.platform.currentPage.queryParams && k.platform.currentPage.queryParams.subreddit,
								u = m && Object(O.D)(k, m);
							e === l.a.Remove && u && g.length > 1 && (t = n.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), a = Object(c.fetchReasonsAndOpenModal)(u, g));
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
								}))) : (e(B(l.error)), e(Object(d.e)({
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
				}, Q = Object(a.a)(v.a), q = Object(a.a)(v.c), W = Object(a.a)(v.d)
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
				m = o("./src/reddit/actions/bulkActions/index.ts"),
				u = o("./src/reddit/actions/comment/index.ts"),
				l = o("./src/reddit/actions/modal.ts"),
				b = o("./src/reddit/actions/post.ts"),
				p = o("./src/reddit/actions/toaster.ts"),
				O = o("./src/reddit/constants/modals.ts"),
				f = o("./src/lib/makeApiRequest/index.ts"),
				j = o("./src/lib/omitHeaders/index.ts"),
				v = o("./src/reddit/constants/headers.ts"),
				h = o("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const k = (e, t) => Object(f.b)(Object(j.a)(e, [v.a]), {
					endpoint: "".concat(e.apiUrl, "/api/v1/modactions/removal_reasons/"),
					method: s.db.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				g = (e, t, o) => Object(f.b)(Object(j.a)(e, [v.a]), {
					endpoint: Object(h.a)("".concat(e.apiUrl, "/api/v1/modactions/removal_").concat(o, "_message/")),
					method: s.db.POST,
					type: "json",
					data: t
				});
			var R = o("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				_ = o("./src/reddit/i18n/utils.ts"),
				x = o("./src/reddit/models/ModQueue/index.ts"),
				y = o("./src/reddit/models/RemovalReason/index.ts"),
				S = o("./src/reddit/models/Toast/index.ts"),
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
				return T
			})), o.d(t, "removalReasonAddedFailed", (function() {
				return N
			})), o.d(t, "addRemovalReason", (function() {
				return U
			})), o.d(t, "editRemovalReasonPending", (function() {
				return K
			})), o.d(t, "editRemovalReasonSuccess", (function() {
				return D
			})), o.d(t, "editRemovalReasonFailed", (function() {
				return B
			})), o.d(t, "editRemovalReason", (function() {
				return F
			})), o.d(t, "deleteRemovalReasonPending", (function() {
				return Q
			})), o.d(t, "deleteRemovalReasonSuccess", (function() {
				return q
			})), o.d(t, "deleteRemovalReasonFailed", (function() {
				return W
			})), o.d(t, "deleteRemovalReason", (function() {
				return H
			})), o.d(t, "removedItemsSelected", (function() {
				return z
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
			const I = Object(n.a)(C.k),
				w = Object(n.a)(C.l),
				L = Object(n.a)(C.j),
				M = e => async (t, o, n) => {
					let {
						apiContext: a
					} = n;
					const r = o().subreddits.models[e].name;
					t(I());
					const c = await ((e, t) => Object(f.b)(Object(j.a)(e, [v.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons.json"),
						method: s.db.GET
					}))(a(), r);
					c.ok ? t(w({
						subredditId: e,
						response: c.body
					})) : t(L(c.error))
				}, E = Object(n.a)(C.b), T = Object(n.a)(C.c), N = Object(n.a)(C.a), U = (e, t) => async (o, n, a) => {
					let {
						apiContext: r
					} = a;
					const c = n().subreddits.models[e].name;
					o(E());
					const d = await ((e, t, o) => Object(f.b)(Object(j.a)(e, [v.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons"),
						method: s.db.POST,
						data: o
					}))(r(), c, t);
					if (d.ok) {
						const {
							id: n
						} = d.body, s = Object.assign({}, t, {
							id: n
						});
						o(T({
							subredditId: e,
							reason: s
						})), o(Object(p.e)({
							kind: S.b.SuccessMod,
							text: Object(_.c)("Removal reason added!")
						}))
					} else o(N(d.error))
				}, K = Object(n.a)(C.h), D = Object(n.a)(C.i), B = Object(n.a)(C.g), F = (e, t) => async (o, n, a) => {
					let {
						apiContext: r
					} = a;
					const c = n().subreddits.models[e].name;
					o(K());
					const d = await ((e, t, o) => Object(f.b)(Object(j.a)(e, [v.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons/").concat(o.id),
						method: s.db.PUT,
						data: {
							message: o.message,
							title: o.title
						}
					}))(r(), c, t);
					d.ok ? (o(D({
						subredditId: e,
						reason: t
					})), o(Object(p.e)({
						kind: S.b.SuccessMod,
						text: Object(_.c)("Removal reason saved")
					}))) : o(B(d.error))
				}, Q = Object(n.a)(C.e), q = Object(n.a)(C.f), W = Object(n.a)(C.d), H = (e, t) => async (o, n, a) => {
					let {
						apiContext: r
					} = a;
					const c = n().subreddits.models[e].name;
					o(Q());
					const d = await ((e, t, o) => Object(f.b)(Object(j.a)(e, [v.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons/").concat(o),
						method: s.db.DELETE
					}))(r(), c, t);
					d.ok ? (o(q({
						subredditId: e,
						reasonId: t
					})), o(Object(p.e)({
						kind: S.b.SuccessMod,
						text: Object(_.c)("Removal reason deleted")
					}))) : o(W(d.error))
				}, z = Object(n.a)(C.t), G = (e, t) => async (o, n, s) => {
					let {
						apiContext: a
					} = s;
					const r = n();
					r.removalReasons.reasonOrder[e] && r.removalReasons.reasonOrder[e].length > 0 || o(M(e)), o(z({
						subredditId: e,
						itemIds: t
					})), o(Object(l.i)(O.a.ADD_REMOVAL_REASON))
				}, J = Object(n.a)(C.r), V = Object(n.a)(C.s), X = Object(n.a)(C.q), Y = Object(n.a)(C.n), Z = Object(n.a)(C.o), $ = Object(n.a)(C.p), ee = Object(n.a)(C.m), te = (e, t, o, n, m) => async (l, p, O) => {
					let {
						apiContext: f
					} = O;
					const j = p(),
						v = j.user.account && j.user.account.displayText,
						h = e[0],
						_ = Object(c.a)(h) ? y.e.Post : y.e.Comment,
						x = _ === y.e.Post ? j.posts.models[h] : j.comments.models[h],
						S = _ === y.e.Post ? b.T : u.R;
					if (!x || !v) return;
					l(J()), l(S({
						[h]: {
							modNote: m,
							modRemovalReason: t && t.title,
							modReasonBy: v
						}
					}));
					const C = {
							itemIds: e,
							modNote: m,
							reasonId: t ? t.id : null
						},
						I = await k(f(), C);
					if (I.ok) {
						if (l(V()), t) {
							l(Y());
							const c = {
									itemId: e,
									message: o,
									title: t.title,
									type: n
								},
								m = await g(f(), Object(y.h)(c, _), _);
							if (m.ok)
								if (n === y.f.Public) {
									if (l($()), m.body) {
										const e = Object(R.a)(m.body, v),
											t = {
												comment: e,
												parentId: h
											},
											o = Object(A.g)(j),
											n = j.platform.currentPage && j.platform.currentPage.routeMatch;
										let c = o && n && Object(d.a)(n, j, j.posts.models[e.postId]);
										if (c || (c = Object(a.a)(e.postId, null, {
												sort: s.t,
												hasSortParam: !0
											})), _ === y.e.Post) {
											const o = Object(r.a)(i.c.replyToPost, h);
											l(Object(u.mb)(Object.assign({}, t, {
												headCommentId: Object(P.x)(j, {
													commentsPageKey: c
												}),
												commentsPageKey: c,
												draftKey: o
											})));
											const n = j.postStickiedComments.data[h];
											l(Object(u.ib)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: c
											})), n && n !== e.id && l(Object(u.R)({
												[n]: {
													isStickied: !1
												}
											}))
										} else if (_ === y.e.Comment) {
											const e = Object(r.a)(i.c.replyToComment, x.id),
												o = Object(P.j)(j, {
													commentId: h,
													commentsPageKey: c
												});
											l(Object(u.kb)(Object.assign({}, t, {
												parentCommentId: h,
												commentsPageKey: c,
												draftKey: e,
												depth: o + 1
											})))
										}
									}
								} else l(Z());
							else l(ee(m.error))
						}
					} else l(X(I.error)), l(S({
						[h]: {
							modNote: x.modNote,
							modRemovalReason: x.modRemovalReason,
							modReasonBy: x.modReasonBy
						}
					}))
				}, oe = (e, t, o, n, s) => async (a, r, c) => {
					let {
						apiContext: d
					} = c;
					const i = r(),
						u = i.user.account && i.user.account.displayText;
					if (!u) return;
					a(J());
					const l = Object(p.e)({
							kind: S.b.SuccessMod,
							text: Object(_.c)("Added removal reason for ".concat(Object(_.b)("number", e.length), " posts/comments"))
						}),
						b = {
							itemIds: e,
							modNote: s,
							reasonId: t ? t.id : null
						},
						O = await k(d(), b);
					if (O.ok) {
						const r = {
							ids: e,
							operation: x.a.RemovalReason,
							username: u,
							options: {
								modNote: s,
								removalReason: t && t.title
							}
						};
						if (a(Object(m.b)(r)), t) {
							const s = {
									itemId: e,
									message: o,
									title: t.title,
									type: n
								},
								r = await g(d(), Object(y.h)(s, y.e.Bulk), y.e.Bulk);
							r.ok ? (a(Z()), a(l)) : a(ee(r.error))
						} else a(l)
					} else a(X(O.error))
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
//# sourceMappingURL=ModQueue~ModQueuePages.5842c629b39b1b4662d8.js.map