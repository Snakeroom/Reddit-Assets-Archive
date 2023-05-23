// https://www.redditstatic.com/desktop2x/removalReasonActions.5631845b1fe3349fa02e.js
// Retrieved at 5/23/2023, 12:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["removalReasonActions"], {
		"./node_modules/lodash/map.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_arrayMap.js"),
				n = s("./node_modules/lodash/_baseIteratee.js"),
				r = s("./node_modules/lodash/_baseMap.js"),
				d = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (d(e) ? o : r)(e, n(t, 3))
			}
		},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return a
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/bulkActions/constants.ts");
			const r = Object(o.a)(n.c),
				d = Object(o.a)(n.b),
				a = Object(o.a)(n.a)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return S
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "a", (function() {
				return A
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "g", (function() {
				return y
			})), s.d(t, "h", (function() {
				return I
			})), s.d(t, "b", (function() {
				return x
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/lib/makeCommentsPageKey/index.ts"),
				a = s("./src/reddit/actions/modal.ts"),
				i = s("./src/reddit/actions/shortcuts/utils.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/constants/modals.ts"),
				m = s("./src/reddit/endpoints/comment/index.tsx"),
				u = s("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = s("./src/reddit/models/Reportable/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				O = s("./src/reddit/selectors/commentSelector.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				R = s("./src/reddit/actions/comment/index.ts"),
				f = s("./src/reddit/actions/comment/constants.ts");
			const j = Object(r.a)(f.p),
				S = e => async (t, s, o) => {
					let {
						apiContext: n
					} = o;
					s().features.comments.models[e] && (await Object(m.j)(n(), e)).ok && t((e => async t => {
						t(j({
							commentId: e
						}))
					})(e))
				}, E = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					if (!Object(_.S)(s())) return void t(Object(a.i)(l.a.LOGIN_MODAL_ID));
					const d = s().features.comments.models[e];
					if (!d) return;
					const i = d.isLocked ? m.l : m.f;
					t(Object(R.j)({
						[e]: {
							isLocked: !d.isLocked
						}
					})), (await i(r(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: d.isLocked ? o.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : o.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(R.j)({
						[e]: {
							isLocked: d.isLocked
						}
					}))
				}, v = Object(r.a)(f.J), A = e => async (t, s, n) => {
					let {
						apiContext: r,
						gqlContext: d
					} = n;
					const a = s(),
						l = a.features.comments.models[e],
						u = a.user.account ? a.user.account.displayText : null;
					l && u && (t(Object(R.j)({
						[e]: {
							isApproved: !0,
							approvedBy: u,
							approvedAtUTC: Date.now(),
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(m.a)(d(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: o.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(R.j)({
						[e]: {
							isApproved: l.isApproved,
							approvedBy: null,
							bannedBy: l.bannedBy,
							isRemoved: l.isRemoved,
							isSpam: l.isSpam,
							modNote: l.modNote,
							modReasonBy: l.modReasonBy,
							modRemovalReason: l.modRemovalReason,
							numReports: l.numReports || null
						}
					})), Object(i.d)())
				}, h = (e, t) => async (s, n, r) => {
					let {
						apiContext: d,
						gqlContext: a
					} = r;
					const l = n(),
						u = l.features.comments.models[e],
						p = l.user.account ? l.user.account.displayText : null;
					u && p && (s(Object(R.j)({
						[e]: {
							approvedBy: null,
							bannedBy: p,
							bannedAtUTC: Date.now(),
							isApproved: !1,
							isRemoved: !t,
							isSpam: t,
							numReports: 0
						}
					})), (await Object(m.h)(a(), e, t)).ok ? s(Object(c.f)({
						kind: b.b.SuccessMod,
						text: t ? o.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : o.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : s(Object(R.j)({
						[e]: {
							approvedBy: u.approvedBy,
							bannedBy: u.bannedBy,
							isApproved: u.isApproved,
							isRemoved: u.isRemoved,
							isSpam: u.isSpam,
							numReports: u.numReports
						}
					})), Object(i.d)())
				}, y = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					const d = s().features.comments.models[e];
					if (!d) return;
					const a = d.ignoreReports ? m.k : m.e;
					d.ignoreReports || t(A(e)), t(Object(R.j)({
						[e]: {
							ignoreReports: !d.ignoreReports
						}
					})), (await a(r(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: d.ignoreReports ? o.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : o.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(R.j)({
						[e]: {
							ignoreReports: d.ignoreReports
						}
					}))
				}, I = (e, t, s) => async (r, d, a) => {
					let {
						gqlContext: i
					} = a;
					const l = Object(O.c)(d(), {
						commentId: e
					});
					if (!l) return;
					const m = s === n.lc.Snoozed,
						_ = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(u.a)(i(), {
							input: _
						})).ok) r(Object(R.j)({
						[e]: {
							userReports: Object(p.a)(l.userReports, t, m)
						}
					}));
					else {
						const e = Object(c.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(c.f)(e))
					}
				}, x = (e, t, s) => async (o, r, a) => {
					let {
						apiContext: i,
						gqlContext: c
					} = a;
					const l = r(),
						u = l.features.comments.models[e];
					if (!u) return;
					const p = u.postId,
						b = l.postStickiedComments.data[p];
					o(Object(R.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === n.J.ADMIN,
							isMod: t === n.J.MODERATOR,
							isStickied: !!s
						}
					})), s && b && b !== e && o(Object(R.j)({
						[b]: {
							isStickied: !1
						}
					}));
					const O = Object(m.c)(c(), e, t),
						_ = Object(m.d)(c(), e, !!s),
						f = [O];
					(s || !s && e === b) && f.push(_), (await Promise.all(f)).every(e => e.ok) ? s && o(v({
						id: e,
						postId: p,
						commentsPageKey: Object(d.a)(p, null, {
							sort: n.w.CONFIDENCE,
							...l.platform.currentPage.queryParams
						})
					})) : (o(Object(R.j)({
						[e]: {
							distinguishType: u.distinguishType,
							isAdmin: u.isAdmin,
							isMod: u.isMod,
							isStickied: u.isStickied
						}
					})), o(Object(R.j)({
						[b]: {
							isStickied: l.features.comments.models[b].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "removalReasonsPending", (function() {
				return Y
			})), s.d(t, "removalReasonsLoaded", (function() {
				return ee
			})), s.d(t, "removalReasonsFailed", (function() {
				return te
			})), s.d(t, "removalReasonsRequested", (function() {
				return se
			})), s.d(t, "removalReasonAddedPending", (function() {
				return oe
			})), s.d(t, "removalReasonAddedSuccess", (function() {
				return ne
			})), s.d(t, "removalReasonAddedFailed", (function() {
				return re
			})), s.d(t, "addRemovalReason", (function() {
				return de
			})), s.d(t, "editRemovalReasonPending", (function() {
				return ae
			})), s.d(t, "editRemovalReasonSuccess", (function() {
				return ie
			})), s.d(t, "editRemovalReasonFailed", (function() {
				return ce
			})), s.d(t, "editRemovalReason", (function() {
				return le
			})), s.d(t, "deleteRemovalReasonPending", (function() {
				return me
			})), s.d(t, "deleteRemovalReasonSuccess", (function() {
				return ue
			})), s.d(t, "deleteRemovalReasonFailed", (function() {
				return pe
			})), s.d(t, "deleteRemovalReason", (function() {
				return be
			})), s.d(t, "removedItemsSelected", (function() {
				return Oe
			})), s.d(t, "fetchReasonsAndOpenModal", (function() {
				return _e
			})), s.d(t, "removalReasonSubmittedPending", (function() {
				return Re
			})), s.d(t, "removalReasonSubmittedSuccess", (function() {
				return fe
			})), s.d(t, "removalReasonSubmittedFailed", (function() {
				return je
			})), s.d(t, "removalReasonMessagePending", (function() {
				return Se
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return Ee
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return ve
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return Ae
			})), s.d(t, "submitRemovalReason", (function() {
				return he
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return ye
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./node_modules/redux/es/redux.js");
			const d = "REMOVALREASONS__LOAD_SUCCESS",
				a = "REMOVALREASONS__ADD_PENDING",
				i = "REMOVALREASONS__ADD_SUCCESS",
				c = "REMOVALREASONS__ADD_FAILED",
				l = "REMOVALREASONS__EDIT_PENDING",
				m = "REMOVALREASONS__EDIT_SUCCESS",
				u = "REMOVALREASONS__EDIT_FAILED",
				p = "REMOVALREASONS__DELETE_PENDING",
				b = "REMOVALREASONS__DELETE_SUCCESS",
				O = "REMOVALREASONS__DELETE_FAILED";
			var _ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case d:
					case a:
					case i:
					case l:
					case m:
					case p:
					case b:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case c:
					case u:
					case O:
						return t.payload;
					default:
						return e
				}
			};
			var R = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case a:
						case l:
						case p:
							return !0;
						case d:
						case "REMOVALREASONS__LOAD_FAILED":
						case i:
						case c:
						case m:
						case u:
						case b:
						case O:
							return !1;
						default:
							return e
					}
				},
				f = Object(r.c)({
					error: _,
					pending: R
				});
			const j = {};
			var S = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d: {
						const {
							response: s
						} = t.payload, {
							data: o
						} = s;
						return {
							...e,
							...o
						}
					}
					case i:
					case m: {
						const {
							reason: s
						} = t.payload;
						return {
							...e,
							[s.id]: s
						}
					}
					case b: {
						const {
							reasonId: s
						} = t.payload, {
							[s]: o,
							...n
						} = e;
						return n
					}
					default:
						return e
				}
			};
			const E = {};
			var v = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d: {
						const {
							subredditId: s,
							response: o
						} = t.payload, {
							order: n
						} = o;
						return {
							...e,
							[s]: n
						}
					}
					case i: {
						const {
							subredditId: s,
							reason: o
						} = t.payload;
						return {
							...e,
							[s]: [...e[s], o.id]
						}
					}
					case b: {
						const {
							subredditId: s,
							reasonId: o
						} = t.payload, n = [...e[s]].filter(e => e !== o);
						return {
							...e,
							[s]: n
						}
					}
					default:
						return e
				}
			};
			var A = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__REMOVEDITEMS_SELECTED": {
							const {
								subredditId: e,
								itemIds: s
							} = t.payload;
							return {
								itemIds: s,
								subredditId: e
							}
						}
						default:
							return e
					}
				},
				h = Object(r.c)({
					api: f,
					models: S,
					reasonOrder: v,
					removedItemIds: A
				}),
				y = s("./src/lib/constants/index.ts"),
				I = s("./src/lib/makeActionCreator/index.ts"),
				x = s("./src/lib/makeCommentsPageKey/index.ts"),
				k = s("./src/lib/makeDraftKey/index.ts"),
				L = s("./src/reddit/actions/bulkActions/index.ts"),
				g = s("./src/reddit/actions/comment/index.ts"),
				C = s("./src/reddit/actions/comment/authoring.ts"),
				T = s("./src/reddit/actions/comment/moderation.ts"),
				D = s("./src/reddit/actions/modal.ts"),
				N = s("./src/reddit/actions/post.ts"),
				P = s("./src/reddit/actions/toaster.ts"),
				M = s("./src/reddit/constants/modals.ts"),
				w = s("./src/lib/makeApiRequest/index.ts"),
				V = s("./src/lib/omitHeaders/index.ts"),
				B = s("./src/reddit/constants/headers.ts"),
				U = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				F = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const K = (e, t) => Object(w.a)(Object(V.a)(e, [B.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_reasons/`),
					method: y.pb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				G = (e, t, s) => Object(w.a)(Object(V.a)(e, [B.a]), {
					endpoint: Object(U.a)(Object(F.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`)),
					method: y.pb.POST,
					type: "json",
					data: t
				});
			var $ = s("./src/reddit/helpers/isPost.ts"),
				J = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				z = s("./src/reddit/helpers/routeKey/index.ts"),
				H = s("./src/reddit/models/ModQueue/index.ts"),
				q = s("./src/reddit/models/PostDraft/index.ts"),
				Q = s("./src/reddit/models/RemovalReason/index.ts"),
				X = s("./src/reddit/models/Toast/index.ts"),
				Z = s("./src/reddit/selectors/comments.ts"),
				W = s("./src/reddit/selectors/platform.ts");
			Object(n.a)({
				features: {
					removalReasons: h
				}
			});
			const Y = Object(I.a)("REMOVALREASONS__LOAD_PENDING"),
				ee = Object(I.a)(d),
				te = Object(I.a)("REMOVALREASONS__LOAD_FAILED"),
				se = e => async (t, s, o) => {
					let {
						apiContext: n
					} = o;
					const r = s().subreddits.models[e].name;
					t(Y());
					const d = await ((e, t) => Object(w.a)(Object(V.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: y.pb.GET
					}))(n(), r);
					d.ok ? t(ee({
						subredditId: e,
						response: d.body
					})) : t(te(d.error))
				}, oe = Object(I.a)(a), ne = Object(I.a)(i), re = Object(I.a)(c), de = (e, t) => async (s, n, r) => {
					let {
						apiContext: d
					} = r;
					const a = n().subreddits.models[e].name;
					s(oe());
					const i = await ((e, t, s) => Object(w.a)(Object(V.a)(e, [B.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons`),
						method: y.pb.POST,
						data: s
					}))(d(), a, t);
					if (i.ok) {
						const {
							id: n
						} = i.body, r = {
							...t,
							id: n
						};
						s(ne({
							subredditId: e,
							reason: r
						})), s(Object(P.f)({
							kind: X.b.SuccessMod,
							text: o.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(re(i.error))
				}, ae = Object(I.a)(l), ie = Object(I.a)(m), ce = Object(I.a)(u), le = (e, t) => async (s, n, r) => {
					let {
						apiContext: d
					} = r;
					const a = n().subreddits.models[e].name;
					s(ae());
					const i = await ((e, t, s) => Object(w.a)(Object(V.a)(e, [B.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`),
						method: y.pb.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(d(), a, t);
					i.ok ? (s(ie({
						subredditId: e,
						reason: t
					})), s(Object(P.f)({
						kind: X.b.SuccessMod,
						text: o.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(ce(i.error))
				}, me = Object(I.a)(p), ue = Object(I.a)(b), pe = Object(I.a)(O), be = (e, t) => async (s, n, r) => {
					let {
						apiContext: d
					} = r;
					const a = n().subreddits.models[e].name;
					s(me());
					const i = await ((e, t, s) => Object(w.a)(Object(V.a)(e, [B.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`),
						method: y.pb.DELETE
					}))(d(), a, t);
					i.ok ? (s(ue({
						subredditId: e,
						reasonId: t
					})), s(Object(P.f)({
						kind: X.b.SuccessMod,
						text: o.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(pe(i.error))
				}, Oe = Object(I.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), _e = (e, t) => async (s, o, n) => {
					let {
						apiContext: r
					} = n;
					const d = o();
					d.features.removalReasons.reasonOrder[e] && d.features.removalReasons.reasonOrder[e].length > 0 || s(se(e)), s(Oe({
						subredditId: e,
						itemIds: t
					})), s(Object(D.i)(M.a.ADD_REMOVAL_REASON))
				}, Re = Object(I.a)("REMOVALREASONS__SUBMIT_PENDING"), fe = Object(I.a)("REMOVALREASONS__SUBMIT_SUCCESS"), je = Object(I.a)("REMOVALREASONS__SUBMIT_FAILED"), Se = Object(I.a)("REMOVALREASONS__MESSAGE_PENDING"), Ee = Object(I.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), ve = Object(I.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Ae = Object(I.a)("REMOVALREASONS__MESSAGE_FAILED"), he = (e, t, s, o, n, r) => async (d, a, i) => {
					let {
						apiContext: c
					} = i;
					const l = a(),
						m = l.user.account && l.user.account.displayText,
						u = e[0],
						p = Object($.a)(u) ? Q.e.Post : Q.e.Comment,
						b = p === Q.e.Post ? l.posts.models[u] : l.features.comments.models[u],
						O = p === Q.e.Post ? N.Q : g.j;
					if (!b || !m) return !1;
					d(Re()), d(O({
						[u]: {
							modNote: n,
							modRemovalReason: t && t.title,
							modReasonBy: m
						}
					}));
					const _ = {
							itemIds: e,
							modNote: n,
							reasonId: t ? t.id : null
						},
						R = await K(c(), _);
					if (R.ok) {
						if (d(fe()), t) {
							d(Se());
							const n = {
									itemId: e,
									message: s,
									title: t.title,
									isLocked: r,
									type: o
								},
								a = await G(c(), Object(Q.h)(n, p), p);
							if (a.ok) {
								if ([Q.f.Public, Q.f.PublicAsSubreddit].includes(o)) {
									if (d(ve()), a.body) {
										const e = Object(J.a)(a.body),
											t = {
												comment: e,
												parentId: u
											},
											s = Object(W.f)(l),
											o = l.platform.currentPage && l.platform.currentPage.routeMatch;
										let n = s && o && Object(z.a)(o, l, l.posts.models[e.postId]);
										if (n || (n = Object(x.a)(e.postId, null, {
												sort: y.x,
												hasSortParam: !0
											})), p === Q.e.Post) {
											const s = Object(k.a)(q.c.replyToPost, u);
											d(Object(C.r)({
												...t,
												headCommentId: Object(Z.w)(l, {
													commentsPageKey: n
												}),
												commentsPageKey: n,
												draftKey: s
											}));
											const o = l.postStickiedComments.data[u];
											d(Object(T.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: n
											})), o && o !== e.id && d(Object(g.j)({
												[o]: {
													isStickied: !1
												}
											}))
										} else if (p === Q.e.Comment) {
											const e = Object(k.a)(q.c.replyToComment, b.id),
												s = Object(Z.j)(l, {
													commentId: u,
													commentsPageKey: n
												});
											d(Object(C.p)({
												...t,
												parentCommentId: u,
												commentsPageKey: n,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else d(Ee());
								return !0
							}
							return d(Ae(a.error)), !1
						}
					} else d(je(R.error)), d(O({
						[u]: {
							modNote: b.modNote,
							modRemovalReason: b.modRemovalReason,
							modReasonBy: b.modReasonBy
						}
					}));
					return !1
				}, ye = (e, t, s, n, r) => async (d, a, i) => {
					let {
						apiContext: c
					} = i;
					const l = a(),
						m = l.user.account && l.user.account.displayText;
					if (!m) return;
					d(Re());
					const u = Object(P.f)({
							kind: X.b.SuccessMod,
							text: o.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [o.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						p = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						b = await K(c(), p);
					if (b.ok) {
						const o = {
							ids: e,
							operation: H.a.RemovalReason,
							username: m,
							options: {
								modNote: r,
								removalReason: t && t.title
							}
						};
						if (d(Object(L.b)(o)), t) {
							const o = {
									itemId: e,
									message: s,
									title: t.title,
									type: n
								},
								r = await G(c(), Object(Q.h)(o, Q.e.Bulk), Q.e.Bulk);
							r.ok ? (d(Ee()), d(u)) : d(Ae(r.error))
						} else d(u)
					} else d(je(b.error))
				}
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return _
			})), s.d(t, "a", (function() {
				return R
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				i = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = s("./src/reddit/selectors/tooltip.ts"),
				l = s("./src/reddit/components/InfoTextTooltip/index.m.less"),
				m = s.n(l),
				u = s("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const b = u.a.div("Text", m.a),
				O = u.a.div("BottomText", m.a),
				_ = e => n.a.createElement(b, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				R = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return n.a.createElement(O, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				f = Object(d.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(c.b)(s)(e)
					}
				}),
				j = Object(i.a)(R, [a.a.Click, a.a.Keydown]),
				S = Object(i.a)(_, [a.a.Click, a.a.Keydown]),
				E = Object(r.b)(f);
			t.c = E(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? n.a.createElement(j, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : n.a.createElement(S, p({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/reddit/constants/elementIds.ts"),
				a = s("./src/reddit/contexts/InsideOverlay.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e, t) {
				const s = Object(r.a)(e, t);
				class o extends n.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(d.e);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return n.a.createElement(s, i({}, this.props, {
							container: this.state.container || this.props.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(a.b)(o)
			}
		},
		"./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			}));
			var o = s("./src/lib/constants/index.ts"),
				n = s("./src/reddit/helpers/isComment.ts"),
				r = s("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				d = s("./src/reddit/models/Vote/index.ts"),
				a = e => !0 === e ? d.a.upvoted : !1 === e ? d.a.downvoted : d.a.notVoted,
				i = s("./src/reddit/models/Comment/index.ts");
			t.a = e => {
				const t = {
					approvedAtUTC: e.approved_at_utc,
					approvedBy: e.approved_by,
					author: e.author,
					authorId: e.author_fullname,
					bannedAtUTC: e.banned_at_utc,
					bannedBy: e.banned_by,
					body: e.body_html,
					bodyMD: e.body,
					collapsed: e.collapsed,
					collapsedReason: e.collapsed_reason,
					collapsedReasonCode: e.collapsed_reason_code,
					collapsedBecauseCrowdControl: e.collapsed_because_crowd_control,
					commentType: e.comment_type,
					created: e.created_utc,
					deletedBy: l(e),
					distinguishType: e.distinguished || "",
					editedAt: null,
					id: e.name,
					ignoreReports: e.ignore_reports,
					isAdmin: "admin" === e.distinguished,
					isAuthorPremium: !!e.author_premium,
					isApproved: e.approved,
					isDeleted: e.author === o.H,
					isGildable: e.can_gild,
					isLocked: e.locked,
					isMod: "moderator" === e.distinguished,
					isOp: e.is_submitter,
					isRemoved: e.removed,
					isScoreHidden: e.score_hidden,
					isSpam: e.spam,
					isStickied: e.stickied,
					isSaved: e.isSaved,
					isSystem: !1,
					subredditId: e.subreddit_id,
					markdown: e.body,
					media: {
						mediaMetadata: e.media_metadata,
						type: "rtjson",
						richtextContent: c(e.rtjson),
						rteMode: e.rte_mode
					},
					modReports: e.mod_reports,
					modReportsDismissed: e.mod_reports_dismissed,
					numReports: e.num_reports,
					parentId: Object(n.a)(e.parent_id) ? e.parent_id : null,
					permalink: e.permalink,
					postAuthor: e.link_author || null,
					postId: e.link_id,
					postTitle: e.link_title || null,
					sendReplies: e.send_replies,
					score: e.score,
					treatmentTags: e.treatment_tags,
					userReports: e.user_reports,
					userReportsDismissed: e.user_reports_dismissed,
					voteState: a(e.likes)
				};
				return e.all_awardings && (t.allAwardings = Object(r.a)(e.all_awardings)), e.awarders && (t.awarders = e.awarders), e.associated_award && (t.associatedAwardId = e.associated_award.id, t.associatedAward = Object(r.b)(e.associated_award)), t
			};
			const c = e => "string" == typeof e ? JSON.parse(e) : e,
				l = e => e.author !== o.H ? null : e.body === o.I ? i.c.User : e.body === o.Rb ? i.c.Moderator : null
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			}));
			var o = s("./src/lib/constants/index.ts");
			const n = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case o.L.NO_STRIPE_SUBSCRIPTION:
							case o.L.USER_DOESNT_EXIST:
							case o.L.USER_REQUIRED_ERROR:
							case o.L.VALIDATION_ERROR:
								return e;
							case o.L.NO_USER:
							case o.L.NO_TEXT:
							case o.L.NO_URL:
								return o.L.VALIDATION_ERROR;
							case o.L.CREDIT_CARD_FAILURE:
							case o.L.CREDIT_CARD_FAILURE_GENERIC:
								return o.L.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return o.L.SUBMIT_VALIDATION_ERROR
						}
					}
					return o.L.VALIDATION_ERROR
				},
				r = e => {
					const t = e.body;
					return {
						type: n(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				d = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: r(e)
					} : e
				};
			t.a = r
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "h", (function() {
				return m
			}));
			var o = s("./src/reddit/helpers/isPost.ts");
			const n = 50,
				r = 50,
				d = 1e4,
				a = 100;
			var i, c;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public", e.PublicAsSubreddit = "public_as_subreddit"
			}(i || (i = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(c || (c = {}));
			const l = e => 1 === e.length ? Object(o.a)(e[0]) ? c.Post : c.Comment : c.Bulk,
				m = (e, t) => {
					return {
						[t === c.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type,
						lock_comment: e.isLocked
					}
				}
		},
		"./src/reddit/selectors/experiments/commentSearchPdp.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./node_modules/reselect/es/index.js");
			const d = Object(r.a)(e => Object(n.c)(e, {
				experimentEligibilitySelector: n.a,
				experimentName: o.yb
			}), e => ({
				bucketed: e === o.bd.ExpandedSearch || e === o.bd.CollapsedSearch,
				collapsed: e === o.bd.CollapsedSearch,
				expanded: e === o.bd.ExpandedSearch
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/removalReasonActions.5631845b1fe3349fa02e.js.map