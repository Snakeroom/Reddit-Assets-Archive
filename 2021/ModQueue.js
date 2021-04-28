// https://www.redditstatic.com/desktop2x/ModQueue.63b4ba31f3ad91b3a2cf.js
// Retrieved at 4/28/2021, 3:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueue"], {
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
				return j
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "f", (function() {
				return A
			})), s.d(t, "a", (function() {
				return v
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "g", (function() {
				return k
			})), s.d(t, "h", (function() {
				return g
			})), s.d(t, "b", (function() {
				return y
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/makeCommentsPageKey/index.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/shortcuts/utils.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/reddit/constants/modals.ts"),
				m = s("./src/reddit/endpoints/comment/index.tsx"),
				l = s("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				b = s("./src/reddit/models/Reportable/index.ts"),
				p = s("./src/reddit/models/Toast/index.ts"),
				O = s("./src/reddit/selectors/commentSelector.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/actions/comment/index.ts"),
				R = s("./src/reddit/actions/comment/constants.ts");
			const S = Object(r.a)(R.n),
				j = e => async (t, s, {
					apiContext: o
				}) => {
					s().features.comments.models[e] && (await Object(m.h)(o(), e)).ok && t((e => async t => {
						t(S({
							commentId: e
						}))
					})(e))
				}, E = e => async (t, s, {
					apiContext: o
				}) => {
					if (!Object(f.J)(s())) return void t(Object(d.i)(u.a.LOGIN_MODAL_ID));
					const n = s().features.comments.models[e];
					if (!n) return;
					const r = n.isLocked ? m.j : m.d;
					t(Object(_.i)({
						[e]: {
							isLocked: !n.isLocked
						}
					})), (await r(o(), e)).ok || t(Object(_.i)({
						[e]: {
							isLocked: n.isLocked
						}
					}))
				}, A = Object(r.a)(R.F), v = e => async (t, s, {
					apiContext: o
				}) => {
					const n = s(),
						r = n.features.comments.models[e],
						a = n.user.account ? n.user.account.displayText : null;
					r && a && (t(Object(_.i)({
						[e]: {
							isApproved: !0,
							approvedBy: a,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(m.a)(o(), e)).ok || t(Object(_.i)({
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
				}, h = (e, t) => async (s, o, {
					apiContext: n
				}) => {
					const r = o(),
						a = r.features.comments.models[e],
						d = r.user.account ? r.user.account.displayText : null;
					a && d && (s(Object(_.i)({
						[e]: {
							approvedBy: null,
							bannedBy: d,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.f)(n(), e, t)).ok || s(Object(_.i)({
						[e]: {
							approvedBy: a.approvedBy,
							bannedBy: a.bannedBy,
							isApproved: a.isApproved,
							isRemoved: a.isRemoved,
							isSpam: a.isSpam
						}
					})), Object(c.d)())
				}, k = e => async (t, s, {
					apiContext: o
				}) => {
					const n = s().features.comments.models[e];
					if (!n) return;
					const r = n.ignoreReports ? m.i : m.c;
					t(Object(_.i)({
						[e]: {
							ignoreReports: !n.ignoreReports
						}
					})), (await r(o(), e)).ok || t(Object(_.i)({
						[e]: {
							ignoreReports: n.ignoreReports
						}
					}))
				}, g = (e, t, s) => async (r, a, {
					gqlContext: d
				}) => {
					const c = Object(O.a)(a(), {
						commentId: e
					});
					if (!c) return;
					const u = s === n.Ub.Snoozed,
						m = {
							itemId: e,
							reportText: t,
							isSnoozed: u
						};
					if ((await Object(l.a)(d(), {
							input: m
						})).ok) r(Object(_.i)({
						[e]: {
							userReports: Object(b.a)(c.userReports, t, u)
						}
					}));
					else {
						const e = Object(i.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), p.b.Error);
						r(Object(i.f)(e))
					}
				}, y = (e, t, s) => async (o, r, {
					apiContext: d
				}) => {
					const c = r(),
						i = c.features.comments.models[e];
					if (!i) return;
					const u = i.postId,
						l = c.postStickiedComments.data[u],
						b = n.g[t];
					o(Object(_.i)({
						[e]: {
							distinguishType: t,
							isAdmin: t === n.C.ADMIN,
							isMod: t === n.C.MODERATOR,
							isStickied: !!s
						}
					})), s && l && l !== e && o(Object(_.i)({
						[l]: {
							isStickied: !1
						}
					})), (await Object(m.b)(d(), e, b, s || null)).ok ? s && o(A({
						id: e,
						postId: u,
						commentsPageKey: Object(a.a)(u, null, {
							sort: n.r.CONFIDENCE,
							...c.platform.currentPage.queryParams
						})
					})) : (o(Object(_.i)({
						[e]: {
							distinguishType: i.distinguishType,
							isAdmin: i.isAdmin,
							isMod: i.isMod,
							isStickied: i.isStickied
						}
					})), o(Object(_.i)({
						[l]: {
							isStickied: c.features.comments.models[l].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/modQueue/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return w
			})), s.d(t, "d", (function() {
				return V
			})), s.d(t, "f", (function() {
				return K
			})), s.d(t, "a", (function() {
				return G
			})), s.d(t, "b", (function() {
				return $
			})), s.d(t, "c", (function() {
				return q
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/bulkActions/index.ts"),
				d = s("./src/reddit/actions/removalReasons/index.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				i = s("./src/reddit/endpoints/modQueue/index.ts"),
				u = s("./src/reddit/helpers/correlationIdTracker.ts"),
				m = s("./src/reddit/helpers/flair.ts"),
				l = s("./src/reddit/helpers/isPost.ts"),
				b = s("./src/reddit/models/ModQueue/index.ts"),
				p = s("./src/reddit/models/Toast/index.ts"),
				O = s("./src/reddit/selectors/modQueue.ts"),
				f = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/selectors/telemetry.ts"),
				R = s("./src/telemetry/index.ts"),
				S = s("./src/lib/initializeClient/installReducer.ts"),
				j = s("./src/reddit/reducers/pages/modHub/index.ts"),
				E = s("./src/reddit/actions/modQueue/constants.ts");
			Object(S.a)({
				pages: {
					modHub: j.a
				}
			});
			const A = Object(r.a)(E.j),
				v = Object(r.a)(E.i),
				h = Object(r.a)(E.h),
				k = Object(r.a)(E.g),
				g = Object(r.a)(E.f),
				y = Object(r.a)(E.e),
				I = Object(r.a)(E.n),
				x = Object(r.a)(E.m),
				N = Object(r.a)(E.l),
				C = Object(r.a)(E.q),
				L = Object(r.a)(E.p),
				P = Object(r.a)(E.o),
				M = Object(r.a)(E.w),
				D = Object(r.a)(E.v),
				T = Object(r.a)(E.u),
				w = (e, t, s) => async (r, a, {
					apiContext: d
				}) => {
					let u, m, l;
					switch (t) {
						case n.mb.Edited:
							u = k, m = y, l = g;
							break;
						case n.mb.Modqueue:
							u = A, m = h, l = v;
							break;
						case n.mb.Reports:
							u = I, m = N, l = x;
							break;
						case n.mb.Spam:
							u = C, m = P, l = L;
							break;
						case n.mb.Unmoderated:
							u = M, m = T, l = D;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					r(u());
					const O = await Object(i.b)(d(), t, s);
					if (O.ok) {
						r(l({
							listingKey: e,
							page: `${s.page||b.b}`,
							response: O.body
						}))
					} else r(m(O.error)), r(Object(c.f)({
						kind: p.b.Error,
						text: o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, U = Object(r.a)(E.k), B = Object(r.a)(E.b), V = e => async (t, s, {
					apiContext: n
				}) => {
					const r = s(),
						a = r.pages.modHub.modQueue.moderatedCommunitiesOrder.after,
						d = r.pages.modHub.modQueue.moderatedCommunitiesOrder.pending,
						u = r.pages.modHub.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: m
						} = r.platform.currentPage.urlParams,
						l = m;
					if (e && d || u || !a) return;
					const b = await Object(i.b)(n(), l, {
						moderated_after: a
					});
					b.ok ? (t(U(b.body)), b.body.moderatedAfter ? t(V()) : t(B())) : t(Object(c.f)({
						kind: p.b.Error,
						text: o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, F = Object(r.a)(E.t), Q = Object(r.a)(E.s), H = Object(r.a)(E.r), K = (e, t, s) => async (n, r, {
					apiContext: S
				}) => {
					n(Object(a.c)());
					const j = r(),
						E = Object(O.g)(j),
						A = j.user.account && j.user.account.displayText;
					Object(u.d)(u.a.ModQueue);
					const v = Object(u.c)(u.a.ModQueue);
					Object(R.a)({
						source: "bulk_mod_action_menu",
						action: "click",
						noun: e,
						..._.defaults(j),
						actionInfo: _.actionInfo(j, {
							count: E.length,
							paneName: j.platform.currentPage ? j.platform.currentPage.urlParams.pageName : void 0
						}),
						screen: _.screen(j),
						correlationId: v
					});
					for (let t = 0; t < E.length; t++) {
						const s = E[t];
						let o = e;
						[b.a.Approve, b.a.Remove, b.a.Spam].includes(e) && (Object(l.a)(s) ? o += "_link" : o += "_comment"), Object(R.a)({
							source: "bulk_mod_action",
							action: "click",
							noun: o,
							..._.defaults(j),
							actionInfo: _.actionInfo(j, {
								count: E.length,
								paneName: j.platform.currentPage ? j.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: _.comment(j, s),
							post: _.post(j, s),
							profile: _.profileByPostOrCommentId(j, s),
							screen: _.screen(j),
							subreddit: _.subredditByPostOrCommentId(j, s),
							correlationId: v
						})
					}
					Object(u.b)(u.a.ModQueue);
					const h = {
						ids: E
					};
					t && (h.text = Object(m.g)(t) || "", h.flairTemplateId = ""), s && (h.cssClass = s, h.flairTemplateId = s);
					const k = await Object(i.a)(S(), e, h);
					if (k.ok) {
						n(Object(a.b)({
							...k.body,
							operation: e,
							ids: E,
							username: A,
							options: {
								flair: t
							}
						}));
						const s = function(e, t) {
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
						}(e, E.length);
						if (e !== b.a.Approve && e !== b.a.Flair) {
							let t, r;
							const u = j.platform.currentPage && j.platform.currentPage.queryParams && j.platform.currentPage.queryParams.subreddit,
								m = u && Object(f.F)(j, u);
							e === b.a.Remove && m && E.length > 1 && (t = o.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), r = Object(d.fetchReasonsAndOpenModal)(m, E));
							const l = Object(c.e)(s, p.b.Undo, o.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, {
								apiContext: s
							}) => {
								e(F());
								const n = t(),
									r = Object.keys(n.pages.modHub.modQueue.bulkAction.undoLastAction)[0],
									d = n.pages.modHub.modQueue.bulkAction.undoLastAction[r],
									u = n.user.account && n.user.account.displayText;
								e(Object(a.c)());
								const m = await Object(i.a)(s(), r, {
									ids: d
								});
								m.ok ? e(Q({
									...m.body,
									operation: r,
									ids: d,
									username: u
								})) : (e(H(m.error)), e(Object(c.f)({
									kind: p.b.Error,
									text: o.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, r);
							n(Object(c.f)(l))
						} else {
							const e = Object(c.e)(s, p.b.SuccessMod);
							n(Object(c.f)(e))
						}
					} else {
						n(Object(a.a)(k.error));
						const e = Object(c.e)(o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), p.b.Error);
						n(Object(c.f)(e))
					}
				}, G = Object(r.a)(E.a), $ = Object(r.a)(E.c), q = Object(r.a)(E.d)
		},
		"./src/reddit/actions/pages/modQueue/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "modQueuePageRequested", (function() {
				return O
			}));
			var o = s("./node_modules/lodash/get.js"),
				n = s.n(o),
				r = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/pageTitle.ts"),
				d = s("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				c = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				i = s("./src/reddit/helpers/trackers/screenview.ts"),
				u = s("./src/reddit/actions/modQueue/index.ts"),
				m = s("./src/reddit/actions/platform.ts"),
				l = s("./src/reddit/selectors/platform.ts"),
				b = s("./src/lib/initializeClient/installReducer.ts"),
				p = s("./src/reddit/reducers/pages/modHub/index.ts");
			Object(b.a)({
				pages: {
					modHub: p.a
				}
			});
			const O = e => async (t, s, o) => {
				var b;
				const {
					pageName: p
				} = e.params, O = e.queryParams, {
					page: f,
					profile: _,
					subreddit: R
				} = O, S = s();
				if (!p) return;
				const j = Object(d.a)({
						onlyOfType: O.only,
						profile: O.profile,
						subreddit: O.subreddit
					}),
					E = S.pages.modHub.modQueue[p].itemOrder[j],
					A = !!(null === (b = null == E ? void 0 : E[f]) || void 0 === b ? void 0 : b.length),
					v = S.pages.modHub.modQueue[p].api.error;
				if (S.pages.modHub.modQueue[p].api.pending || A && !v) return;
				Object(l.n)(S) || await Object(u.e)(j, p, O)(t, s, o);
				const h = s();
				if (n()(h.pages.modHub.modQueue[p].api.error, "type") === r.E.AUTHENTICATION_ERROR) return Object(c.a)(t, h);
				Object(i.j)(h, R, _), t(m.l({
					title: Object(a.d)()
				}))
			}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "removalReasonsPending", (function() {
				return Z
			})), s.d(t, "removalReasonsLoaded", (function() {
				return X
			})), s.d(t, "removalReasonsFailed", (function() {
				return Y
			})), s.d(t, "removalReasonsRequested", (function() {
				return ee
			})), s.d(t, "removalReasonAddedPending", (function() {
				return te
			})), s.d(t, "removalReasonAddedSuccess", (function() {
				return se
			})), s.d(t, "removalReasonAddedFailed", (function() {
				return oe
			})), s.d(t, "addRemovalReason", (function() {
				return ne
			})), s.d(t, "editRemovalReasonPending", (function() {
				return re
			})), s.d(t, "editRemovalReasonSuccess", (function() {
				return ae
			})), s.d(t, "editRemovalReasonFailed", (function() {
				return de
			})), s.d(t, "editRemovalReason", (function() {
				return ce
			})), s.d(t, "deleteRemovalReasonPending", (function() {
				return ie
			})), s.d(t, "deleteRemovalReasonSuccess", (function() {
				return ue
			})), s.d(t, "deleteRemovalReasonFailed", (function() {
				return me
			})), s.d(t, "deleteRemovalReason", (function() {
				return le
			})), s.d(t, "removedItemsSelected", (function() {
				return be
			})), s.d(t, "fetchReasonsAndOpenModal", (function() {
				return pe
			})), s.d(t, "removalReasonSubmittedPending", (function() {
				return Oe
			})), s.d(t, "removalReasonSubmittedSuccess", (function() {
				return fe
			})), s.d(t, "removalReasonSubmittedFailed", (function() {
				return _e
			})), s.d(t, "removalReasonMessagePending", (function() {
				return Re
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return Se
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return je
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return Ee
			})), s.d(t, "submitRemovalReason", (function() {
				return Ae
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return ve
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./node_modules/redux/es/redux.js");
			const a = "REMOVALREASONS__ADD_PENDING",
				d = "REMOVALREASONS__ADD_SUCCESS",
				c = "REMOVALREASONS__ADD_FAILED",
				i = "REMOVALREASONS__EDIT_PENDING",
				u = "REMOVALREASONS__EDIT_SUCCESS",
				m = "REMOVALREASONS__EDIT_FAILED",
				l = "REMOVALREASONS__DELETE_PENDING",
				b = "REMOVALREASONS__DELETE_SUCCESS",
				p = "REMOVALREASONS__DELETE_FAILED";
			var O = (e = null, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case "REMOVALREASONS__LOAD_SUCCESS":
					case a:
					case d:
					case i:
					case u:
					case l:
					case b:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case c:
					case m:
					case p:
						return t.payload;
					default:
						return e
				}
			};
			var f = (e = !1, t) => {
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case a:
						case i:
						case l:
							return !0;
						case "REMOVALREASONS__LOAD_SUCCESS":
						case "REMOVALREASONS__LOAD_FAILED":
						case d:
						case c:
						case u:
						case m:
						case b:
						case p:
							return !1;
						default:
							return e
					}
				},
				_ = Object(r.c)({
					error: O,
					pending: f
				});
			const R = {};
			var S = (e = R, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
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
					case d:
					case u: {
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
			const j = {};
			var E = (e = j, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
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
					case d: {
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
			var A = (e = null, t) => {
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
				v = Object(r.c)({
					api: _,
					models: S,
					reasonOrder: E,
					removedItemIds: A
				}),
				h = s("./src/lib/constants/index.ts"),
				k = s("./src/lib/makeActionCreator/index.ts"),
				g = s("./src/lib/makeCommentsPageKey/index.ts"),
				y = s("./src/lib/makeDraftKey/index.ts"),
				I = s("./src/reddit/actions/bulkActions/index.ts"),
				x = s("./src/reddit/actions/comment/index.ts"),
				N = s("./src/reddit/actions/comment/authoring.ts"),
				C = s("./src/reddit/actions/comment/moderation.ts"),
				L = s("./src/reddit/actions/modal.ts"),
				P = s("./src/reddit/actions/post.ts"),
				M = s("./src/reddit/actions/toaster.ts"),
				D = s("./src/reddit/constants/modals.ts"),
				T = s("./src/lib/makeApiRequest/index.ts"),
				w = s("./src/lib/omitHeaders/index.ts"),
				U = s("./src/reddit/constants/headers.ts"),
				B = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const V = (e, t) => Object(T.a)(Object(w.a)(e, [U.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: h.eb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				F = (e, t, s) => Object(T.a)(Object(w.a)(e, [U.a]), {
					endpoint: Object(B.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`),
					method: h.eb.POST,
					type: "json",
					data: t
				});
			var Q = s("./src/reddit/helpers/isPost.ts"),
				H = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				K = s("./src/reddit/helpers/routeKey/index.ts"),
				G = s("./src/reddit/models/ModQueue/index.ts"),
				$ = s("./src/reddit/models/PostDraft/index.ts"),
				q = s("./src/reddit/models/RemovalReason/index.ts"),
				z = s("./src/reddit/models/Toast/index.ts"),
				W = s("./src/reddit/selectors/comments.ts"),
				J = s("./src/reddit/selectors/platform.ts");
			Object(n.a)({
				features: {
					removalReasons: v
				}
			});
			const Z = Object(k.a)("REMOVALREASONS__LOAD_PENDING"),
				X = Object(k.a)("REMOVALREASONS__LOAD_SUCCESS"),
				Y = Object(k.a)("REMOVALREASONS__LOAD_FAILED"),
				ee = e => async (t, s, {
					apiContext: o
				}) => {
					const n = s().subreddits.models[e].name;
					t(Z());
					const r = await ((e, t) => Object(T.a)(Object(w.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: h.eb.GET
					}))(o(), n);
					r.ok ? t(X({
						subredditId: e,
						response: r.body
					})) : t(Y(r.error))
				}, te = Object(k.a)(a), se = Object(k.a)(d), oe = Object(k.a)(c), ne = (e, t) => async (s, n, {
					apiContext: r
				}) => {
					const a = n().subreddits.models[e].name;
					s(te());
					const d = await ((e, t, s) => Object(T.a)(Object(w.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: h.eb.POST,
						data: s
					}))(r(), a, t);
					if (d.ok) {
						const {
							id: n
						} = d.body, r = {
							...t,
							id: n
						};
						s(se({
							subredditId: e,
							reason: r
						})), s(Object(M.f)({
							kind: z.b.SuccessMod,
							text: o.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(oe(d.error))
				}, re = Object(k.a)(i), ae = Object(k.a)(u), de = Object(k.a)(m), ce = (e, t) => async (s, n, {
					apiContext: r
				}) => {
					const a = n().subreddits.models[e].name;
					s(re());
					const d = await ((e, t, s) => Object(T.a)(Object(w.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`,
						method: h.eb.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(r(), a, t);
					d.ok ? (s(ae({
						subredditId: e,
						reason: t
					})), s(Object(M.f)({
						kind: z.b.SuccessMod,
						text: o.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(de(d.error))
				}, ie = Object(k.a)(l), ue = Object(k.a)(b), me = Object(k.a)(p), le = (e, t) => async (s, n, {
					apiContext: r
				}) => {
					const a = n().subreddits.models[e].name;
					s(ie());
					const d = await ((e, t, s) => Object(T.a)(Object(w.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`,
						method: h.eb.DELETE
					}))(r(), a, t);
					d.ok ? (s(ue({
						subredditId: e,
						reasonId: t
					})), s(Object(M.f)({
						kind: z.b.SuccessMod,
						text: o.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(me(d.error))
				}, be = Object(k.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), pe = (e, t) => async (s, o, {
					apiContext: n
				}) => {
					const r = o();
					r.features.removalReasons.reasonOrder[e] && r.features.removalReasons.reasonOrder[e].length > 0 || s(ee(e)), s(be({
						subredditId: e,
						itemIds: t
					})), s(Object(L.i)(D.a.ADD_REMOVAL_REASON))
				}, Oe = Object(k.a)("REMOVALREASONS__SUBMIT_PENDING"), fe = Object(k.a)("REMOVALREASONS__SUBMIT_SUCCESS"), _e = Object(k.a)("REMOVALREASONS__SUBMIT_FAILED"), Re = Object(k.a)("REMOVALREASONS__MESSAGE_PENDING"), Se = Object(k.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), je = Object(k.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Ee = Object(k.a)("REMOVALREASONS__MESSAGE_FAILED"), Ae = (e, t, s, o, n) => async (r, a, {
					apiContext: d
				}) => {
					const c = a(),
						i = c.user.account && c.user.account.displayText,
						u = e[0],
						m = Object(Q.a)(u) ? q.e.Post : q.e.Comment,
						l = m === q.e.Post ? c.posts.models[u] : c.features.comments.models[u],
						b = m === q.e.Post ? P.P : x.i;
					if (!l || !i) return !1;
					r(Oe()), r(b({
						[u]: {
							modNote: n,
							modRemovalReason: t && t.title,
							modReasonBy: i
						}
					}));
					const p = {
							itemIds: e,
							modNote: n,
							reasonId: t ? t.id : null
						},
						O = await V(d(), p);
					if (O.ok) {
						if (r(fe()), t) {
							r(Re());
							const n = {
									itemId: e,
									message: s,
									title: t.title,
									type: o
								},
								a = await F(d(), Object(q.h)(n, m), m);
							if (a.ok) {
								if (o === q.f.Public) {
									if (r(je()), a.body) {
										const e = Object(H.a)(a.body, i),
											t = {
												comment: e,
												parentId: u
											},
											s = Object(J.f)(c),
											o = c.platform.currentPage && c.platform.currentPage.routeMatch;
										let n = s && o && Object(K.a)(o, c, c.posts.models[e.postId]);
										if (n || (n = Object(g.a)(e.postId, null, {
												sort: h.s,
												hasSortParam: !0
											})), m === q.e.Post) {
											const s = Object(y.a)($.c.replyToPost, u);
											r(Object(N.o)({
												...t,
												headCommentId: Object(W.w)(c, {
													commentsPageKey: n
												}),
												commentsPageKey: n,
												draftKey: s
											}));
											const o = c.postStickiedComments.data[u];
											r(Object(C.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: n
											})), o && o !== e.id && r(Object(x.i)({
												[o]: {
													isStickied: !1
												}
											}))
										} else if (m === q.e.Comment) {
											const e = Object(y.a)($.c.replyToComment, l.id),
												s = Object(W.j)(c, {
													commentId: u,
													commentsPageKey: n
												});
											r(Object(N.m)({
												...t,
												parentCommentId: u,
												commentsPageKey: n,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else r(Se());
								return !0
							}
							return r(Ee(a.error)), !1
						}
					} else r(_e(O.error)), r(b({
						[u]: {
							modNote: l.modNote,
							modRemovalReason: l.modRemovalReason,
							modReasonBy: l.modReasonBy
						}
					}));
					return !1
				}, ve = (e, t, s, n, r) => async (a, d, {
					apiContext: c
				}) => {
					const i = d(),
						u = i.user.account && i.user.account.displayText;
					if (!u) return;
					a(Oe());
					const m = Object(M.f)({
							kind: z.b.SuccessMod,
							text: o.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [o.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						l = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						b = await V(c(), l);
					if (b.ok) {
						const o = {
							ids: e,
							operation: G.a.RemovalReason,
							username: u,
							options: {
								modNote: r,
								removalReason: t && t.title
							}
						};
						if (a(Object(I.b)(o)), t) {
							const o = {
									itemId: e,
									message: s,
									title: t.title,
									type: n
								},
								r = await F(c(), Object(q.h)(o, q.e.Bulk), q.e.Bulk);
							r.ok ? (a(Se()), a(m)) : a(Ee(r.error))
						} else a(m)
					} else a(_e(b.error))
				}
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
				return u
			})), s.d(t, "h", (function() {
				return m
			}));
			var o = s("./src/reddit/helpers/isPost.ts");
			const n = 20,
				r = 50,
				a = 1e4,
				d = 100;
			var c, i;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public"
			}(c || (c = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(i || (i = {}));
			const u = e => 1 === e.length ? Object(o.a)(e[0]) ? i.Post : i.Comment : i.Bulk,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueue.63b4ba31f3ad91b3a2cf.js.map