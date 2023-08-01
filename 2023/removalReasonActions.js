// https://www.redditstatic.com/desktop2x/removalReasonActions.3badd38a68f4a8108ad0.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["removalReasonActions"], {
		"./node_modules/lodash/map.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_arrayMap.js"),
				n = s("./node_modules/lodash/_baseIteratee.js"),
				a = s("./node_modules/lodash/_baseMap.js"),
				d = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (d(e) ? o : a)(e, n(t, 3))
			}
		},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/bulkActions/constants.ts");
			const a = Object(o.a)(n.c),
				d = Object(o.a)(n.b),
				r = Object(o.a)(n.a)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return j
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "f", (function() {
				return A
			})), s.d(t, "a", (function() {
				return v
			})), s.d(t, "e", (function() {
				return y
			})), s.d(t, "g", (function() {
				return I
			})), s.d(t, "h", (function() {
				return h
			})), s.d(t, "b", (function() {
				return k
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/lib/makeCommentsPageKey/index.ts"),
				r = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/shortcuts/utils.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/constants/modals.ts"),
				u = s("./src/reddit/endpoints/comment/index.tsx"),
				m = s("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				b = s("./src/reddit/models/Reportable/index.ts"),
				O = s("./src/reddit/models/Toast/index.ts"),
				p = s("./src/reddit/selectors/commentSelector.ts"),
				R = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/actions/comment/index.ts"),
				S = s("./src/reddit/actions/comment/constants.ts");
			const _ = Object(a.a)(S.p),
				j = e => async (t, s, o) => {
					let {
						apiContext: n
					} = o;
					s().features.comments.models[e] && (await Object(u.j)(n(), e)).ok && t((e => async t => {
						t(_({
							commentId: e
						}))
					})(e))
				}, E = e => async (t, s, n) => {
					let {
						apiContext: a
					} = n;
					if (!Object(R.S)(s())) return void t(Object(r.i)(l.a.LOGIN_MODAL_ID));
					const d = s().features.comments.models[e];
					if (!d) return;
					const c = d.isLocked ? u.l : u.f;
					t(Object(f.j)({
						[e]: {
							isLocked: !d.isLocked
						}
					})), (await c(a(), e)).ok ? t(Object(i.f)({
						kind: O.b.SuccessMod,
						text: d.isLocked ? o.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : o.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(f.j)({
						[e]: {
							isLocked: d.isLocked
						}
					}))
				}, A = Object(a.a)(S.J), v = e => async (t, s, o) => {
					let {
						apiContext: n,
						gqlContext: a
					} = o;
					const d = s(),
						r = d.features.comments.models[e],
						i = d.user.account ? d.user.account.displayText : null;
					r && i && (t(Object(f.j)({
						[e]: {
							isApproved: !0,
							approvedBy: i,
							approvedAtUTC: Date.now(),
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(u.a)(a(), e)).ok || t(Object(f.j)({
						[e]: {
							isApproved: r.isApproved,
							approvedBy: null,
							bannedBy: r.bannedBy,
							isRemoved: r.isRemoved,
							isSpam: r.isSpam,
							modNote: r.modNote,
							modReasonBy: r.modReasonBy,
							modRemovalReason: r.modRemovalReason,
							numReports: r.numReports || null
						}
					})), Object(c.d)())
				}, y = (e, t) => async (s, o, n) => {
					let {
						apiContext: a,
						gqlContext: d
					} = n;
					const r = o(),
						i = r.features.comments.models[e],
						l = r.user.account ? r.user.account.displayText : null;
					i && l && (s(Object(f.j)({
						[e]: {
							approvedBy: null,
							bannedBy: l,
							bannedAtUTC: Date.now(),
							isApproved: !1,
							isRemoved: !t,
							isSpam: t,
							numReports: 0
						}
					})), (await Object(u.h)(d(), e, t)).ok || s(Object(f.j)({
						[e]: {
							approvedBy: i.approvedBy,
							bannedBy: i.bannedBy,
							isApproved: i.isApproved,
							isRemoved: i.isRemoved,
							isSpam: i.isSpam,
							numReports: i.numReports
						}
					})), Object(c.d)())
				}, I = e => async (t, s, n) => {
					let {
						apiContext: a
					} = n;
					const d = s().features.comments.models[e];
					if (!d) return;
					const r = d.ignoreReports ? u.k : u.e;
					d.ignoreReports || t(v(e)), t(Object(f.j)({
						[e]: {
							ignoreReports: !d.ignoreReports
						}
					})), (await r(a(), e)).ok ? t(Object(i.f)({
						kind: O.b.SuccessMod,
						text: d.ignoreReports ? o.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : o.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(f.j)({
						[e]: {
							ignoreReports: d.ignoreReports
						}
					}))
				}, h = (e, t, s) => async (a, d, r) => {
					let {
						gqlContext: c
					} = r;
					const l = Object(p.c)(d(), {
						commentId: e
					});
					if (!l) return;
					const u = s === n.jc.Snoozed,
						R = {
							itemId: e,
							reportText: t,
							isSnoozed: u
						};
					if ((await Object(m.a)(c(), {
							input: R
						})).ok) a(Object(f.j)({
						[e]: {
							userReports: Object(b.a)(l.userReports, t, u)
						}
					}));
					else {
						const e = Object(i.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), O.b.Error);
						a(Object(i.f)(e))
					}
				}, k = (e, t, s) => async (o, a, r) => {
					let {
						apiContext: c,
						gqlContext: i
					} = r;
					const l = a(),
						m = l.features.comments.models[e];
					if (!m) return;
					const b = m.postId,
						O = l.postStickiedComments.data[b];
					o(Object(f.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === n.H.ADMIN,
							isMod: t === n.H.MODERATOR,
							isStickied: !!s
						}
					})), s && O && O !== e && o(Object(f.j)({
						[O]: {
							isStickied: !1
						}
					}));
					const p = Object(u.c)(i(), e, t),
						R = Object(u.d)(i(), e, !!s),
						S = [p];
					(s || !s && e === O) && S.push(R), (await Promise.all(S)).every(e => e.ok) ? s && o(A({
						id: e,
						postId: b,
						commentsPageKey: Object(d.a)(b, null, {
							sort: n.v.CONFIDENCE,
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
						[O]: {
							isStickied: l.features.comments.models[O].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "removalReasonsPending", (function() {
				return Z
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
				return ae
			})), s.d(t, "addRemovalReason", (function() {
				return de
			})), s.d(t, "editRemovalReasonPending", (function() {
				return re
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
				return Oe
			})), s.d(t, "removedItemsSelected", (function() {
				return pe
			})), s.d(t, "fetchReasonsAndOpenModal", (function() {
				return Re
			})), s.d(t, "removalReasonSubmittedPending", (function() {
				return fe
			})), s.d(t, "removalReasonSubmittedSuccess", (function() {
				return Se
			})), s.d(t, "removalReasonSubmittedFailed", (function() {
				return _e
			})), s.d(t, "removalReasonMessagePending", (function() {
				return je
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return Ee
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return Ae
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return ve
			})), s.d(t, "submitRemovalReason", (function() {
				return ye
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return Ie
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/initializeClient/installReducer.ts"),
				a = s("./node_modules/redux/es/redux.js");
			const d = "REMOVALREASONS__LOAD_SUCCESS",
				r = "REMOVALREASONS__ADD_PENDING",
				c = "REMOVALREASONS__ADD_SUCCESS",
				i = "REMOVALREASONS__ADD_FAILED",
				l = "REMOVALREASONS__EDIT_PENDING",
				u = "REMOVALREASONS__EDIT_SUCCESS",
				m = "REMOVALREASONS__EDIT_FAILED",
				b = "REMOVALREASONS__DELETE_PENDING",
				O = "REMOVALREASONS__DELETE_SUCCESS",
				p = "REMOVALREASONS__DELETE_FAILED";
			var R = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case d:
					case r:
					case c:
					case l:
					case u:
					case b:
					case O:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case i:
					case m:
					case p:
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
						case r:
						case l:
						case b:
							return !0;
						case d:
						case "REMOVALREASONS__LOAD_FAILED":
						case c:
						case i:
						case u:
						case m:
						case O:
						case p:
							return !1;
						default:
							return e
					}
				},
				S = Object(a.c)({
					error: R,
					pending: f
				});
			const _ = {};
			var j = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
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
					case O: {
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
			var A = function() {
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
					case O: {
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
			var v = function() {
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
				y = Object(a.c)({
					api: S,
					models: j,
					reasonOrder: A,
					removedItemIds: v
				}),
				I = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/makeActionCreator/index.ts"),
				k = s("./src/lib/makeCommentsPageKey/index.ts"),
				L = s("./src/lib/makeDraftKey/index.ts"),
				g = s("./src/reddit/actions/bulkActions/index.ts"),
				x = s("./src/reddit/actions/comment/index.ts"),
				N = s("./src/reddit/actions/comment/authoring.ts"),
				C = s("./src/reddit/actions/comment/moderation.ts"),
				D = s("./src/reddit/actions/modal.ts"),
				M = s("./src/reddit/actions/post.ts"),
				P = s("./src/reddit/actions/toaster.ts"),
				T = s("./src/reddit/constants/modals.ts"),
				B = s("./src/lib/makeApiRequest/index.ts"),
				V = s("./src/lib/omitHeaders/index.ts"),
				w = s("./src/reddit/constants/headers.ts"),
				U = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				F = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const G = (e, t) => Object(B.a)(Object(V.a)(e, [w.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_reasons/`),
					method: I.nb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				K = (e, t, s) => Object(B.a)(Object(V.a)(e, [w.a]), {
					endpoint: Object(U.a)(Object(F.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`)),
					method: I.nb.POST,
					type: "json",
					data: t
				});
			var $ = s("./src/reddit/helpers/isPost.ts"),
				q = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				z = s("./src/reddit/helpers/routeKey/index.ts"),
				H = s("./src/reddit/models/ModQueue/index.ts"),
				J = s("./src/reddit/models/PostDraft/index.ts"),
				Q = s("./src/reddit/models/RemovalReason/index.ts"),
				W = s("./src/reddit/models/Toast/index.ts"),
				Y = s("./src/reddit/selectors/comments.ts"),
				X = s("./src/reddit/selectors/platform.ts");
			Object(n.a)({
				features: {
					removalReasons: y
				}
			});
			const Z = Object(h.a)("REMOVALREASONS__LOAD_PENDING"),
				ee = Object(h.a)(d),
				te = Object(h.a)("REMOVALREASONS__LOAD_FAILED"),
				se = e => async (t, s, o) => {
					let {
						apiContext: n
					} = o;
					const a = s().subreddits.models[e].name;
					t(Z());
					const d = await ((e, t) => Object(B.a)(Object(V.a)(e, [w.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: I.nb.GET
					}))(n(), a);
					d.ok ? t(ee({
						subredditId: e,
						response: d.body
					})) : t(te(d.error))
				}, oe = Object(h.a)(r), ne = Object(h.a)(c), ae = Object(h.a)(i), de = (e, t) => async (s, n, a) => {
					let {
						apiContext: d
					} = a;
					const r = n().subreddits.models[e].name;
					s(oe());
					const c = await ((e, t, s) => Object(B.a)(Object(V.a)(e, [w.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons`),
						method: I.nb.POST,
						data: s
					}))(d(), r, t);
					if (c.ok) {
						const {
							id: n
						} = c.body, a = {
							...t,
							id: n
						};
						s(ne({
							subredditId: e,
							reason: a
						})), s(Object(P.f)({
							kind: W.b.SuccessMod,
							text: o.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(ae(c.error))
				}, re = Object(h.a)(l), ce = Object(h.a)(u), ie = Object(h.a)(m), le = (e, t) => async (s, n, a) => {
					let {
						apiContext: d
					} = a;
					const r = n().subreddits.models[e].name;
					s(re());
					const c = await ((e, t, s) => Object(B.a)(Object(V.a)(e, [w.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`),
						method: I.nb.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(d(), r, t);
					c.ok ? (s(ce({
						subredditId: e,
						reason: t
					})), s(Object(P.f)({
						kind: W.b.SuccessMod,
						text: o.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(ie(c.error))
				}, ue = Object(h.a)(b), me = Object(h.a)(O), be = Object(h.a)(p), Oe = (e, t) => async (s, n, a) => {
					let {
						apiContext: d
					} = a;
					const r = n().subreddits.models[e].name;
					s(ue());
					const c = await ((e, t, s) => Object(B.a)(Object(V.a)(e, [w.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`),
						method: I.nb.DELETE
					}))(d(), r, t);
					c.ok ? (s(me({
						subredditId: e,
						reasonId: t
					})), s(Object(P.f)({
						kind: W.b.SuccessMod,
						text: o.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(be(c.error))
				}, pe = Object(h.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), Re = (e, t) => async (s, o, n) => {
					let {
						apiContext: a
					} = n;
					const d = o();
					d.features.removalReasons.reasonOrder[e] && d.features.removalReasons.reasonOrder[e].length > 0 || s(se(e)), s(pe({
						subredditId: e,
						itemIds: t
					})), s(Object(D.i)(T.a.ADD_REMOVAL_REASON))
				}, fe = Object(h.a)("REMOVALREASONS__SUBMIT_PENDING"), Se = Object(h.a)("REMOVALREASONS__SUBMIT_SUCCESS"), _e = Object(h.a)("REMOVALREASONS__SUBMIT_FAILED"), je = Object(h.a)("REMOVALREASONS__MESSAGE_PENDING"), Ee = Object(h.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Ae = Object(h.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), ve = Object(h.a)("REMOVALREASONS__MESSAGE_FAILED"), ye = (e, t, s, o, n, a) => async (d, r, c) => {
					let {
						apiContext: i
					} = c;
					const l = r(),
						u = l.user.account && l.user.account.displayText,
						m = e[0],
						b = Object($.a)(m) ? Q.e.Post : Q.e.Comment,
						O = b === Q.e.Post ? l.posts.models[m] : l.features.comments.models[m],
						p = b === Q.e.Post ? M.Q : x.j;
					if (!O || !u) return !1;
					d(fe()), d(p({
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
						f = await G(i(), R);
					if (f.ok) {
						if (d(Se()), t) {
							d(je());
							const n = {
									itemId: e,
									message: s,
									title: t.title,
									isLocked: a,
									type: o
								},
								r = await K(i(), Object(Q.h)(n, b), b);
							if (r.ok) {
								if ([Q.f.Public, Q.f.PublicAsSubreddit].includes(o)) {
									if (d(Ae()), r.body) {
										const e = Object(q.a)(r.body),
											t = {
												comment: e,
												parentId: m
											},
											s = Object(X.f)(l),
											o = l.platform.currentPage && l.platform.currentPage.routeMatch;
										let n = s && o && Object(z.a)(o, l, l.posts.models[e.postId]);
										if (n || (n = Object(k.a)(e.postId, null, {
												sort: I.w,
												hasSortParam: !0
											})), b === Q.e.Post) {
											const s = Object(L.a)(J.c.replyToPost, m);
											d(Object(N.r)({
												...t,
												headCommentId: Object(Y.w)(l, {
													commentsPageKey: n
												}),
												commentsPageKey: n,
												draftKey: s
											}));
											const o = l.postStickiedComments.data[m];
											d(Object(C.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: n
											})), o && o !== e.id && d(Object(x.j)({
												[o]: {
													isStickied: !1
												}
											}))
										} else if (b === Q.e.Comment) {
											const e = Object(L.a)(J.c.replyToComment, O.id),
												s = Object(Y.j)(l, {
													commentId: m,
													commentsPageKey: n
												});
											d(Object(N.p)({
												...t,
												parentCommentId: m,
												commentsPageKey: n,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else d(Ee());
								return !0
							}
							return d(ve(r.error)), !1
						}
					} else d(_e(f.error)), d(p({
						[m]: {
							modNote: O.modNote,
							modRemovalReason: O.modRemovalReason,
							modReasonBy: O.modReasonBy
						}
					}));
					return !1
				}, Ie = (e, t, s, n, a) => async (d, r, c) => {
					let {
						apiContext: i
					} = c;
					const l = r(),
						u = l.user.account && l.user.account.displayText;
					if (!u) return;
					d(fe());
					const m = Object(P.f)({
							kind: W.b.SuccessMod,
							text: o.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [o.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						b = {
							itemIds: e,
							modNote: a,
							reasonId: t ? t.id : null
						},
						O = await G(i(), b);
					if (O.ok) {
						const o = {
							ids: e,
							operation: H.a.RemovalReason,
							username: u,
							options: {
								modNote: a,
								removalReason: t && t.title
							}
						};
						if (d(Object(g.b)(o)), t) {
							const o = {
									itemId: e,
									message: s,
									title: t.title,
									type: n
								},
								a = await K(i(), Object(Q.h)(o, Q.e.Bulk), Q.e.Bulk);
							a.ok ? (d(Ee()), d(m)) : d(ve(a.error))
						} else d(m)
					} else d(_e(O.error))
				}
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return r
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
				a = 50,
				d = 1e4,
				r = 100;
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/removalReasonActions.3badd38a68f4a8108ad0.js.map