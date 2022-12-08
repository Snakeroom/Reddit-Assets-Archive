// https://www.redditstatic.com/desktop2x/removalReasonActions.ca5dc5ee607f790e3216.js
// Retrieved at 12/8/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["removalReasonActions"], {
		"./node_modules/lodash/map.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_arrayMap.js"),
				n = s("./node_modules/lodash/_baseIteratee.js"),
				r = s("./node_modules/lodash/_baseMap.js"),
				a = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (a(e) ? o : r)(e, n(t, 3))
			}
		},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/bulkActions/constants.ts");
			const r = Object(o.a)(n.c),
				a = Object(o.a)(n.b),
				d = Object(o.a)(n.a)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return E
			})), s.d(t, "c", (function() {
				return S
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "a", (function() {
				return A
			})), s.d(t, "e", (function() {
				return I
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "h", (function() {
				return x
			})), s.d(t, "b", (function() {
				return y
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/makeCommentsPageKey/index.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/shortcuts/utils.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/constants/modals.ts"),
				u = s("./src/reddit/endpoints/comment/index.tsx"),
				m = s("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				b = s("./src/reddit/models/Reportable/index.ts"),
				p = s("./src/reddit/models/Toast/index.ts"),
				O = s("./src/reddit/selectors/commentSelector.ts"),
				R = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/actions/comment/index.ts"),
				_ = s("./src/reddit/actions/comment/constants.ts");
			const j = Object(r.a)(_.p),
				E = e => async (t, s, o) => {
					let {
						apiContext: n
					} = o;
					s().features.comments.models[e] && (await Object(u.j)(n(), e)).ok && t((e => async t => {
						t(j({
							commentId: e
						}))
					})(e))
				}, S = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					if (!Object(R.S)(s())) return void t(Object(d.i)(l.a.LOGIN_MODAL_ID));
					const a = s().features.comments.models[e];
					if (!a) return;
					const c = a.isLocked ? u.l : u.f;
					t(Object(f.j)({
						[e]: {
							isLocked: !a.isLocked
						}
					})), (await c(r(), e)).ok ? t(Object(i.f)({
						kind: p.b.SuccessMod,
						text: a.isLocked ? o.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : o.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(f.j)({
						[e]: {
							isLocked: a.isLocked
						}
					}))
				}, v = Object(r.a)(_.J), A = e => async (t, s, n) => {
					let {
						apiContext: r,
						gqlContext: a
					} = n;
					const d = s(),
						l = d.features.comments.models[e],
						m = d.user.account ? d.user.account.displayText : null;
					l && m && (t(Object(f.j)({
						[e]: {
							isApproved: !0,
							approvedBy: m,
							approvedAtUTC: Date.now(),
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(u.a)(a(), e)).ok ? t(Object(i.f)({
						kind: p.b.SuccessMod,
						text: o.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(f.j)({
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
					})), Object(c.d)())
				}, I = (e, t) => async (s, n, r) => {
					let {
						apiContext: a,
						gqlContext: d
					} = r;
					const l = n(),
						m = l.features.comments.models[e],
						b = l.user.account ? l.user.account.displayText : null;
					m && b && (s(Object(f.j)({
						[e]: {
							approvedBy: null,
							bannedBy: b,
							bannedAtUTC: Date.now(),
							isApproved: !1,
							isRemoved: !t,
							isSpam: t,
							numReports: 0
						}
					})), (await Object(u.h)(d(), e, t)).ok ? s(Object(i.f)({
						kind: p.b.SuccessMod,
						text: t ? o.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : o.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : s(Object(f.j)({
						[e]: {
							approvedBy: m.approvedBy,
							bannedBy: m.bannedBy,
							isApproved: m.isApproved,
							isRemoved: m.isRemoved,
							isSpam: m.isSpam,
							numReports: m.numReports
						}
					})), Object(c.d)())
				}, h = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					const a = s().features.comments.models[e];
					if (!a) return;
					const d = a.ignoreReports ? u.k : u.e;
					a.ignoreReports || t(A(e)), t(Object(f.j)({
						[e]: {
							ignoreReports: !a.ignoreReports
						}
					})), (await d(r(), e)).ok ? t(Object(i.f)({
						kind: p.b.SuccessMod,
						text: a.ignoreReports ? o.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : o.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(f.j)({
						[e]: {
							ignoreReports: a.ignoreReports
						}
					}))
				}, x = (e, t, s) => async (r, a, d) => {
					let {
						gqlContext: c
					} = d;
					const l = Object(O.c)(a(), {
						commentId: e
					});
					if (!l) return;
					const u = s === n.kc.Snoozed,
						R = {
							itemId: e,
							reportText: t,
							isSnoozed: u
						};
					if ((await Object(m.a)(c(), {
							input: R
						})).ok) r(Object(f.j)({
						[e]: {
							userReports: Object(b.a)(l.userReports, t, u)
						}
					}));
					else {
						const e = Object(i.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), p.b.Error);
						r(Object(i.f)(e))
					}
				}, y = (e, t, s) => async (o, r, d) => {
					let {
						apiContext: c,
						gqlContext: i
					} = d;
					const l = r(),
						m = l.features.comments.models[e];
					if (!m) return;
					const b = m.postId,
						p = l.postStickiedComments.data[b];
					o(Object(f.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === n.J.ADMIN,
							isMod: t === n.J.MODERATOR,
							isStickied: !!s
						}
					})), s && p && p !== e && o(Object(f.j)({
						[p]: {
							isStickied: !1
						}
					}));
					const O = Object(u.c)(i(), e, t),
						R = Object(u.d)(i(), e, !!s),
						_ = [O];
					(s || !s && e === p) && _.push(R), (await Promise.all(_)).every(e => e.ok) ? s && o(v({
						id: e,
						postId: b,
						commentsPageKey: Object(a.a)(b, null, {
							sort: n.w.CONFIDENCE,
							...l.platform.currentPage.queryParams
						})
					})) : (o(Object(f.j)({
						[e]: {
							distinguishType: m.distinguishType,
							isAdmin: m.isAdmin,
							isMod: m.isMod,
							isStickied: m.isStickied
						}
					})), o(Object(f.j)({
						[p]: {
							isStickied: l.features.comments.models[p].isStickied
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
				return ae
			})), s.d(t, "editRemovalReasonPending", (function() {
				return de
			})), s.d(t, "editRemovalReasonSuccess", (function() {
				return ce
			})), s.d(t, "editRemovalReasonFailed", (function() {
				return ie
			})), s.d(t, "editRemovalReason", (function() {
				return le
			})), s.d(t, "deleteRemovalReasonPending", (function() {
				return ue
			})), s.d(t, "deleteRemovalReasonSuccess", (function() {
				return me
			})), s.d(t, "deleteRemovalReasonFailed", (function() {
				return be
			})), s.d(t, "deleteRemovalReason", (function() {
				return pe
			})), s.d(t, "removedItemsSelected", (function() {
				return Oe
			})), s.d(t, "fetchReasonsAndOpenModal", (function() {
				return Re
			})), s.d(t, "removalReasonSubmittedPending", (function() {
				return fe
			})), s.d(t, "removalReasonSubmittedSuccess", (function() {
				return _e
			})), s.d(t, "removalReasonSubmittedFailed", (function() {
				return je
			})), s.d(t, "removalReasonMessagePending", (function() {
				return Ee
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return Se
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return ve
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return Ae
			})), s.d(t, "submitRemovalReason", (function() {
				return Ie
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return he
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./node_modules/redux/es/redux.js");
			const a = "REMOVALREASONS__LOAD_SUCCESS",
				d = "REMOVALREASONS__ADD_PENDING",
				c = "REMOVALREASONS__ADD_SUCCESS",
				i = "REMOVALREASONS__ADD_FAILED",
				l = "REMOVALREASONS__EDIT_PENDING",
				u = "REMOVALREASONS__EDIT_SUCCESS",
				m = "REMOVALREASONS__EDIT_FAILED",
				b = "REMOVALREASONS__DELETE_PENDING",
				p = "REMOVALREASONS__DELETE_SUCCESS",
				O = "REMOVALREASONS__DELETE_FAILED";
			var R = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case a:
					case d:
					case c:
					case l:
					case u:
					case b:
					case p:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case i:
					case m:
					case O:
						return t.payload;
					default:
						return e
				}
			};
			var f = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case d:
						case l:
						case b:
							return !0;
						case a:
						case "REMOVALREASONS__LOAD_FAILED":
						case c:
						case i:
						case u:
						case m:
						case p:
						case O:
							return !1;
						default:
							return e
					}
				},
				_ = Object(r.c)({
					error: R,
					pending: f
				});
			const j = {};
			var E = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a: {
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
					case c:
					case u: {
						const {
							reason: s
						} = t.payload;
						return {
							...e,
							[s.id]: s
						}
					}
					case p: {
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
			const S = {};
			var v = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a: {
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
					case c: {
						const {
							subredditId: s,
							reason: o
						} = t.payload;
						return {
							...e,
							[s]: [...e[s], o.id]
						}
					}
					case p: {
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
				I = Object(r.c)({
					api: _,
					models: E,
					reasonOrder: v,
					removedItemIds: A
				}),
				h = s("./src/lib/constants/index.ts"),
				x = s("./src/lib/makeActionCreator/index.ts"),
				y = s("./src/lib/makeCommentsPageKey/index.ts"),
				L = s("./src/lib/makeDraftKey/index.ts"),
				k = s("./src/reddit/actions/bulkActions/index.ts"),
				N = s("./src/reddit/actions/comment/index.ts"),
				T = s("./src/reddit/actions/comment/authoring.ts"),
				g = s("./src/reddit/actions/comment/moderation.ts"),
				C = s("./src/reddit/actions/modal.ts"),
				D = s("./src/reddit/actions/post.ts"),
				P = s("./src/reddit/actions/toaster.ts"),
				M = s("./src/reddit/constants/modals.ts"),
				V = s("./src/lib/makeApiRequest/index.ts"),
				w = s("./src/lib/omitHeaders/index.ts"),
				B = s("./src/reddit/constants/headers.ts"),
				U = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				F = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const K = (e, t) => Object(V.a)(Object(w.a)(e, [B.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_reasons/`),
					method: h.ob.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				G = (e, t, s) => Object(V.a)(Object(w.a)(e, [B.a]), {
					endpoint: Object(U.a)(Object(F.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`)),
					method: h.ob.POST,
					type: "json",
					data: t
				});
			var $ = s("./src/reddit/helpers/isPost.ts"),
				J = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				z = s("./src/reddit/helpers/routeKey/index.ts"),
				q = s("./src/reddit/models/ModQueue/index.ts"),
				H = s("./src/reddit/models/PostDraft/index.ts"),
				X = s("./src/reddit/models/RemovalReason/index.ts"),
				Q = s("./src/reddit/models/Toast/index.ts"),
				Z = s("./src/reddit/selectors/comments.ts"),
				W = s("./src/reddit/selectors/platform.ts");
			Object(n.a)({
				features: {
					removalReasons: I
				}
			});
			const Y = Object(x.a)("REMOVALREASONS__LOAD_PENDING"),
				ee = Object(x.a)(a),
				te = Object(x.a)("REMOVALREASONS__LOAD_FAILED"),
				se = e => async (t, s, o) => {
					let {
						apiContext: n
					} = o;
					const r = s().subreddits.models[e].name;
					t(Y());
					const a = await ((e, t) => Object(V.a)(Object(w.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: h.ob.GET
					}))(n(), r);
					a.ok ? t(ee({
						subredditId: e,
						response: a.body
					})) : t(te(a.error))
				}, oe = Object(x.a)(d), ne = Object(x.a)(c), re = Object(x.a)(i), ae = (e, t) => async (s, n, r) => {
					let {
						apiContext: a
					} = r;
					const d = n().subreddits.models[e].name;
					s(oe());
					const c = await ((e, t, s) => Object(V.a)(Object(w.a)(e, [B.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons`),
						method: h.ob.POST,
						data: s
					}))(a(), d, t);
					if (c.ok) {
						const {
							id: n
						} = c.body, r = {
							...t,
							id: n
						};
						s(ne({
							subredditId: e,
							reason: r
						})), s(Object(P.f)({
							kind: Q.b.SuccessMod,
							text: o.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(re(c.error))
				}, de = Object(x.a)(l), ce = Object(x.a)(u), ie = Object(x.a)(m), le = (e, t) => async (s, n, r) => {
					let {
						apiContext: a
					} = r;
					const d = n().subreddits.models[e].name;
					s(de());
					const c = await ((e, t, s) => Object(V.a)(Object(w.a)(e, [B.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`),
						method: h.ob.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(a(), d, t);
					c.ok ? (s(ce({
						subredditId: e,
						reason: t
					})), s(Object(P.f)({
						kind: Q.b.SuccessMod,
						text: o.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(ie(c.error))
				}, ue = Object(x.a)(b), me = Object(x.a)(p), be = Object(x.a)(O), pe = (e, t) => async (s, n, r) => {
					let {
						apiContext: a
					} = r;
					const d = n().subreddits.models[e].name;
					s(ue());
					const c = await ((e, t, s) => Object(V.a)(Object(w.a)(e, [B.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`),
						method: h.ob.DELETE
					}))(a(), d, t);
					c.ok ? (s(me({
						subredditId: e,
						reasonId: t
					})), s(Object(P.f)({
						kind: Q.b.SuccessMod,
						text: o.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(be(c.error))
				}, Oe = Object(x.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), Re = (e, t) => async (s, o, n) => {
					let {
						apiContext: r
					} = n;
					const a = o();
					a.features.removalReasons.reasonOrder[e] && a.features.removalReasons.reasonOrder[e].length > 0 || s(se(e)), s(Oe({
						subredditId: e,
						itemIds: t
					})), s(Object(C.i)(M.a.ADD_REMOVAL_REASON))
				}, fe = Object(x.a)("REMOVALREASONS__SUBMIT_PENDING"), _e = Object(x.a)("REMOVALREASONS__SUBMIT_SUCCESS"), je = Object(x.a)("REMOVALREASONS__SUBMIT_FAILED"), Ee = Object(x.a)("REMOVALREASONS__MESSAGE_PENDING"), Se = Object(x.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), ve = Object(x.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Ae = Object(x.a)("REMOVALREASONS__MESSAGE_FAILED"), Ie = (e, t, s, o, n, r) => async (a, d, c) => {
					let {
						apiContext: i
					} = c;
					const l = d(),
						u = l.user.account && l.user.account.displayText,
						m = e[0],
						b = Object($.a)(m) ? X.e.Post : X.e.Comment,
						p = b === X.e.Post ? l.posts.models[m] : l.features.comments.models[m],
						O = b === X.e.Post ? D.R : N.j;
					if (!p || !u) return !1;
					a(fe()), a(O({
						[m]: {
							modNote: n,
							modRemovalReason: t && t.title,
							modReasonBy: u
						}
					}));
					const R = {
							itemIds: e,
							modNote: n,
							reasonId: t ? t.id : null
						},
						f = await K(i(), R);
					if (f.ok) {
						if (a(_e()), t) {
							a(Ee());
							const n = {
									itemId: e,
									message: s,
									title: t.title,
									isLocked: r,
									type: o
								},
								d = await G(i(), Object(X.h)(n, b), b);
							if (d.ok) {
								if ([X.f.Public, X.f.PublicAsSubreddit].includes(o)) {
									if (a(ve()), d.body) {
										const e = Object(J.a)(d.body),
											t = {
												comment: e,
												parentId: m
											},
											s = Object(W.f)(l),
											o = l.platform.currentPage && l.platform.currentPage.routeMatch;
										let n = s && o && Object(z.a)(o, l, l.posts.models[e.postId]);
										if (n || (n = Object(y.a)(e.postId, null, {
												sort: h.x,
												hasSortParam: !0
											})), b === X.e.Post) {
											const s = Object(L.a)(H.c.replyToPost, m);
											a(Object(T.r)({
												...t,
												headCommentId: Object(Z.w)(l, {
													commentsPageKey: n
												}),
												commentsPageKey: n,
												draftKey: s
											}));
											const o = l.postStickiedComments.data[m];
											a(Object(g.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: n
											})), o && o !== e.id && a(Object(N.j)({
												[o]: {
													isStickied: !1
												}
											}))
										} else if (b === X.e.Comment) {
											const e = Object(L.a)(H.c.replyToComment, p.id),
												s = Object(Z.j)(l, {
													commentId: m,
													commentsPageKey: n
												});
											a(Object(T.p)({
												...t,
												parentCommentId: m,
												commentsPageKey: n,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else a(Se());
								return !0
							}
							return a(Ae(d.error)), !1
						}
					} else a(je(f.error)), a(O({
						[m]: {
							modNote: p.modNote,
							modRemovalReason: p.modRemovalReason,
							modReasonBy: p.modReasonBy
						}
					}));
					return !1
				}, he = (e, t, s, n, r) => async (a, d, c) => {
					let {
						apiContext: i
					} = c;
					const l = d(),
						u = l.user.account && l.user.account.displayText;
					if (!u) return;
					a(fe());
					const m = Object(P.f)({
							kind: Q.b.SuccessMod,
							text: o.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [o.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						b = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						p = await K(i(), b);
					if (p.ok) {
						const o = {
							ids: e,
							operation: q.a.RemovalReason,
							username: u,
							options: {
								modNote: r,
								removalReason: t && t.title
							}
						};
						if (a(Object(k.b)(o)), t) {
							const o = {
									itemId: e,
									message: s,
									title: t.title,
									type: n
								},
								r = await G(i(), Object(X.h)(o, X.e.Bulk), X.e.Bulk);
							r.ok ? (a(Se()), a(m)) : a(Ae(r.error))
						} else a(m)
					} else a(je(p.error))
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
				return R
			})), s.d(t, "a", (function() {
				return f
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				i = s("./src/reddit/selectors/tooltip.ts"),
				l = s("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = s.n(l),
				m = s("./src/lib/lessComponent.tsx");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const p = m.a.div("Text", u.a),
				O = m.a.div("BottomText", u.a),
				R = e => n.a.createElement(p, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				f = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return n.a.createElement(O, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				_ = Object(a.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(i.b)(s)(e)
					}
				}),
				j = Object(c.a)(f, [d.a.Click, d.a.Keydown]),
				E = Object(c.a)(R, [d.a.Click, d.a.Keydown]),
				S = Object(r.b)(_);
			t.c = S(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? n.a.createElement(j, b({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : n.a.createElement(E, b({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/higherOrderComponents/asTooltip.tsx"),
				a = s("./src/reddit/constants/elementIds.ts"),
				d = s("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}

			function i(e, t) {
				const s = Object(r.a)(e, t);
				class o extends n.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(a.e);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return n.a.createElement(s, c({}, this.props, {
							container: this.state.container || this.props.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(d.b)(o)
			}
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
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
				a = e => {
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
				return a
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "h", (function() {
				return u
			}));
			var o = s("./src/reddit/helpers/isPost.ts");
			const n = 50,
				r = 50,
				a = 1e4,
				d = 100;
			var c, i;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public", e.PublicAsSubreddit = "public_as_subreddit"
			}(c || (c = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(i || (i = {}));
			const l = e => 1 === e.length ? Object(o.a)(e[0]) ? i.Post : i.Comment : i.Bulk,
				u = (e, t) => {
					return {
						[t === i.Bulk ? "item_ids" : "item_id"]: e.itemId,
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
				return a
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./node_modules/reselect/es/index.js");
			const a = Object(r.a)(e => Object(n.c)(e, {
				experimentEligibilitySelector: n.a,
				experimentName: o.sb
			}), e => ({
				bucketed: e === o.Xc.ExpandedSearch || e === o.Xc.CollapsedSearch,
				collapsed: e === o.Xc.CollapsedSearch,
				expanded: e === o.Xc.ExpandedSearch
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/removalReasonActions.ca5dc5ee607f790e3216.js.map