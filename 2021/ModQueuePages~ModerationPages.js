// https://www.redditstatic.com/desktop2x/ModQueuePages~ModerationPages.7d10e4aef734fb59f367.js
// Retrieved at 3/1/2021, 4:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueuePages~ModerationPages"], {
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return c
			})), o.d(t, "a", (function() {
				return l
			})), o.d(t, "b", (function() {
				return m
			})), o.d(t, "d", (function() {
				return p
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./src/reddit/components/TrackingHelper/index.tsx"),
				r = o("./src/reddit/selectors/telemetry.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = (e, t, o) => (s = (() => {})) => n => {
				const i = p(n.target, n.currentTarget),
					a = u(n.target, n.currentTarget);
				i && o && t && (m(n.target, n.currentTarget, l.anchors) ? o(t(e, i, a)) : o(o => {
					const s = t(e, i, a)(o);
					let n;
					if (s && s.actionInfo) {
						const {
							pageType: e,
							...t
						} = s.actionInfo;
						n = t
					}
					return {
						...s,
						actionInfo: Object(r.previousPageActionInfo)(o, n)
					}
				})), m(n.target, n.currentTarget, l.anchorsAndButtons) && s(n)
			};

			function c(e) {
				return Object(i.c)(t => {
					const {
						sendEvent: o,
						eventFactory: i,
						clickTrackingId: r,
						...c
					} = t, l = Object(s.useCallback)(d(r, i, o), [r, i, o]);
					return n.a.createElement(e, a({}, c, {
						afterClickTracking: l
					}))
				})
			}
			const l = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				m = (e, t, o) => !o.includes(e.tagName) && (e === t || !!e.parentElement && m(e.parentElement, t, o)),
				p = (e, t) => {
					const o = e.dataset.clickId;
					return o || (e === t ? null : !!e.parentElement && p(e.parentElement, t))
				},
				u = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && u(e.parentElement, t))
		},
		"./src/lib/intersectionObserver/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			})), o.d(t, "b", (function() {
				return a
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			let s;
			const n = new Map,
				i = new Map;
			"undefined" != typeof window && (o("./node_modules/intersection-observer/intersection-observer.js"), s = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						o = e.intersectionRatio > 0;
					if (o !== !!i.get(t)) {
						i.set(t, o);
						const s = n.get(t);
						if (s) {
							s(e, o && !!i.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const r = (e, t) => {
					try {
						n.set(e, t), s && s.observe(e)
					} catch (o) {
						0
					}
				},
				a = e => {
					try {
						n.delete(e), s && s.unobserve(e)
					} catch (t) {
						0
					}
				}
		},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return i
			})), o.d(t, "b", (function() {
				return r
			})), o.d(t, "a", (function() {
				return a
			}));
			var s = o("./src/lib/makeActionCreator/index.ts"),
				n = o("./src/reddit/actions/bulkActions/constants.ts");
			const i = Object(s.a)(n.c),
				r = Object(s.a)(n.b),
				a = Object(s.a)(n.a)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return h
			})), o.d(t, "c", (function() {
				return b
			})), o.d(t, "f", (function() {
				return f
			})), o.d(t, "a", (function() {
				return C
			})), o.d(t, "e", (function() {
				return x
			})), o.d(t, "g", (function() {
				return g
			})), o.d(t, "b", (function() {
				return v
			}));
			var s = o("./src/lib/constants/index.ts"),
				n = o("./src/lib/makeActionCreator/index.ts"),
				i = o("./src/lib/makeCommentsPageKey/index.ts"),
				r = o("./src/reddit/actions/modal.ts"),
				a = o("./src/reddit/actions/shortcuts/utils.ts"),
				d = o("./src/reddit/constants/modals.ts"),
				c = o("./src/reddit/endpoints/comment/index.tsx"),
				l = o("./src/reddit/selectors/user.ts"),
				m = o("./src/reddit/actions/comment/index.ts"),
				p = o("./src/reddit/actions/comment/constants.ts");
			const u = Object(n.a)(p.m),
				h = e => async (t, o, {
					apiContext: s
				}) => {
					o().features.comments.models[e] && (await Object(c.h)(s(), e)).ok && t((e => async t => {
						t(u({
							commentId: e
						}))
					})(e))
				}, b = e => async (t, o, {
					apiContext: s
				}) => {
					if (!Object(l.J)(o())) return void t(Object(r.i)(d.a.LOGIN_MODAL_ID));
					const n = o().features.comments.models[e];
					if (!n) return;
					const i = n.isLocked ? c.j : c.d;
					t(Object(m.h)({
						[e]: {
							isLocked: !n.isLocked
						}
					})), (await i(s(), e)).ok || t(Object(m.h)({
						[e]: {
							isLocked: n.isLocked
						}
					}))
				}, f = Object(n.a)(p.C), C = e => async (t, o, {
					apiContext: s
				}) => {
					const n = o(),
						i = n.features.comments.models[e],
						r = n.user.account ? n.user.account.displayText : null;
					i && r && (t(Object(m.h)({
						[e]: {
							isApproved: !0,
							approvedBy: r,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(c.a)(s(), e)).ok || t(Object(m.h)({
						[e]: {
							isApproved: i.isApproved,
							approvedBy: null,
							bannedBy: i.bannedBy,
							isRemoved: i.isRemoved,
							isSpam: i.isSpam,
							modNote: i.modNote,
							modReasonBy: i.modReasonBy,
							modRemovalReason: i.modRemovalReason,
							numReports: i.numReports || null
						}
					})), Object(a.d)())
				}, x = (e, t) => async (o, s, {
					apiContext: n
				}) => {
					const i = s(),
						r = i.features.comments.models[e],
						d = i.user.account ? i.user.account.displayText : null;
					r && d && (o(Object(m.h)({
						[e]: {
							approvedBy: null,
							bannedBy: d,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(c.f)(n(), e, t)).ok || o(Object(m.h)({
						[e]: {
							approvedBy: r.approvedBy,
							bannedBy: r.bannedBy,
							isApproved: r.isApproved,
							isRemoved: r.isRemoved,
							isSpam: r.isSpam
						}
					})), Object(a.d)())
				}, g = e => async (t, o, {
					apiContext: s
				}) => {
					const n = o().features.comments.models[e];
					if (!n) return;
					const i = n.ignoreReports ? c.i : c.c;
					t(Object(m.h)({
						[e]: {
							ignoreReports: !n.ignoreReports
						}
					})), (await i(s(), e)).ok || t(Object(m.h)({
						[e]: {
							ignoreReports: n.ignoreReports
						}
					}))
				}, v = (e, t, o) => async (n, r, {
					apiContext: a
				}) => {
					const d = r(),
						l = d.features.comments.models[e];
					if (!l) return;
					const p = l.postId,
						u = d.postStickiedComments.data[p],
						h = s.g[t];
					n(Object(m.h)({
						[e]: {
							distinguishType: t,
							isAdmin: t === s.C.ADMIN,
							isMod: t === s.C.MODERATOR,
							isStickied: !!o
						}
					})), o && u && u !== e && n(Object(m.h)({
						[u]: {
							isStickied: !1
						}
					})), (await Object(c.b)(a(), e, h, o || null)).ok ? o && n(f({
						id: e,
						postId: p,
						commentsPageKey: Object(i.a)(p, null, {
							sort: s.r.CONFIDENCE,
							...d.platform.currentPage.queryParams
						})
					})) : (n(Object(m.h)({
						[e]: {
							distinguishType: l.distinguishType,
							isAdmin: l.isAdmin,
							isMod: l.isMod,
							isStickied: l.isStickied
						}
					})), n(Object(m.h)({
						[u]: {
							isStickied: d.features.comments.models[u].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/modQueue/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "e", (function() {
				return D
			})), o.d(t, "d", (function() {
				return B
			})), o.d(t, "f", (function() {
				return z
			})), o.d(t, "a", (function() {
				return G
			})), o.d(t, "b", (function() {
				return q
			})), o.d(t, "c", (function() {
				return Q
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./src/lib/constants/index.ts"),
				i = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/reddit/actions/bulkActions/index.ts"),
				a = o("./src/reddit/actions/removalReasons/index.ts"),
				d = o("./src/reddit/actions/toaster.ts"),
				c = o("./src/reddit/endpoints/modQueue/index.ts"),
				l = o("./src/reddit/helpers/correlationIdTracker.ts"),
				m = o("./src/reddit/helpers/flair.ts"),
				p = o("./src/reddit/helpers/isPost.ts"),
				u = o("./src/reddit/models/ModQueue/index.ts"),
				h = o("./src/reddit/models/Toast/index.ts"),
				b = o("./src/reddit/selectors/modQueue.ts"),
				f = o("./src/reddit/selectors/subreddit.ts"),
				C = o("./src/reddit/selectors/telemetry.ts"),
				x = o("./src/telemetry/index.ts"),
				g = o("./src/lib/initializeClient/installReducer.ts"),
				v = o("./src/reddit/reducers/pages/modHub/index.ts"),
				O = o("./src/reddit/actions/modQueue/constants.ts");
			Object(g.a)({
				pages: {
					modHub: v.a
				}
			});
			const I = Object(i.a)(O.j),
				S = Object(i.a)(O.i),
				k = Object(i.a)(O.h),
				E = Object(i.a)(O.g),
				_ = Object(i.a)(O.f),
				T = Object(i.a)(O.e),
				w = Object(i.a)(O.n),
				R = Object(i.a)(O.m),
				y = Object(i.a)(O.l),
				j = Object(i.a)(O.q),
				P = Object(i.a)(O.p),
				M = Object(i.a)(O.o),
				A = Object(i.a)(O.w),
				N = Object(i.a)(O.v),
				L = Object(i.a)(O.u),
				D = (e, t, o) => async (i, r, {
					apiContext: a
				}) => {
					let l, m, p;
					switch (t) {
						case n.jb.Edited:
							l = E, m = T, p = _;
							break;
						case n.jb.Modqueue:
							l = I, m = k, p = S;
							break;
						case n.jb.Reports:
							l = w, m = y, p = R;
							break;
						case n.jb.Spam:
							l = j, m = M, p = P;
							break;
						case n.jb.Unmoderated:
							l = A, m = L, p = N;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					i(l());
					const b = await Object(c.b)(a(), t, o);
					if (b.ok) {
						i(p({
							listingKey: e,
							page: `${o.page||u.b}`,
							response: b.body
						}))
					} else i(m(b.error)), i(Object(d.e)({
						kind: h.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, F = Object(i.a)(O.k), V = Object(i.a)(O.b), B = e => async (t, o, {
					apiContext: n
				}) => {
					const i = o(),
						r = i.pages.modHub.modQueue.moderatedCommunitiesOrder.after,
						a = i.pages.modHub.modQueue.moderatedCommunitiesOrder.pending,
						l = i.pages.modHub.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: m
						} = i.platform.currentPage.urlParams,
						p = m;
					if (e && a || l || !r) return;
					const u = await Object(c.b)(n(), p, {
						moderated_after: r
					});
					u.ok ? (t(F(u.body)), u.body.moderatedAfter ? t(B()) : t(V())) : t(Object(d.e)({
						kind: h.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, H = Object(i.a)(O.t), U = Object(i.a)(O.s), W = Object(i.a)(O.r), z = (e, t, o) => async (n, i, {
					apiContext: g
				}) => {
					n(Object(r.c)());
					const v = i(),
						O = Object(b.g)(v),
						I = v.user.account && v.user.account.displayText;
					Object(l.d)(l.a.ModQueue);
					const S = Object(l.c)(l.a.ModQueue);
					Object(x.a)({
						source: "bulk_mod_action_menu",
						action: "click",
						noun: e,
						...C.defaults(v),
						actionInfo: C.actionInfo(v, {
							count: O.length,
							paneName: v.platform.currentPage ? v.platform.currentPage.urlParams.pageName : void 0
						}),
						screen: C.screen(v),
						correlationId: S
					});
					for (let t = 0; t < O.length; t++) {
						const o = O[t];
						let s = e;
						[u.a.Approve, u.a.Remove, u.a.Spam].includes(e) && (Object(p.a)(o) ? s += "_link" : s += "_comment"), Object(x.a)({
							source: "bulk_mod_action",
							action: "click",
							noun: s,
							...C.defaults(v),
							actionInfo: C.actionInfo(v, {
								count: O.length,
								paneName: v.platform.currentPage ? v.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: C.comment(v, o),
							post: C.post(v, o),
							profile: C.profileByPostOrCommentId(v, o),
							screen: C.screen(v),
							subreddit: C.subredditByPostOrCommentId(v, o),
							correlationId: S
						})
					}
					Object(l.b)(l.a.ModQueue);
					const k = {
						ids: O
					};
					t && (k.text = Object(m.g)(t) || "", k.flairTemplateId = ""), o && (k.cssClass = o, k.flairTemplateId = o);
					const E = await Object(c.a)(g(), e, k);
					if (E.ok) {
						n(Object(r.b)({
							...E.body,
							operation: e,
							ids: O,
							username: I,
							options: {
								flair: t
							}
						}));
						const o = function(e, t) {
							switch (e) {
								case u.a.Approve:
									return s.fbt._({
										"*": "{number} posts/comments have been approved",
										_1: "1 post/comment has been approved"
									}, [s.fbt._plural(t, "number")], {
										hk: "2kKhSf"
									});
								case u.a.Flair:
									return s.fbt._({
										"*": "{number} posts/comments have had flair applied",
										_1: "1 post/comment has had flair applied"
									}, [s.fbt._plural(t, "number")], {
										hk: "3syB5O"
									});
								case u.a.IgnoreReports:
									return s.fbt._({
										"*": "{number} posts/comments have had their reports ignored",
										_1: "1 post/comment has had their reports ignored"
									}, [s.fbt._plural(t, "number")], {
										hk: "2WfE4g"
									});
								case u.a.Lock:
									return s.fbt._({
										"*": "{number} posts/comments have been locked",
										_1: "1 post/comment has been locked"
									}, [s.fbt._plural(t, "number")], {
										hk: "45oMbv"
									});
								case u.a.MarkNSFW:
									return s.fbt._({
										"*": "{number} posts/comments have been marked NSFW",
										_1: "1 post/comment has been marked NSFW"
									}, [s.fbt._plural(t, "number")], {
										hk: "oPsQr"
									});
								case u.a.RemovalReason:
									return s.fbt._({
										"*": "{number} posts/comments have had removal reasons applied",
										_1: "1 post/comment has had removal reasons applied"
									}, [s.fbt._plural(t, "number")], {
										hk: "35Tosn"
									});
								case u.a.Remove:
									return s.fbt._({
										"*": "{number} posts/comments have been removed",
										_1: "1 post/comment has been removed"
									}, [s.fbt._plural(t, "number")], {
										hk: "B1ZbE"
									});
								case u.a.Spam:
									return s.fbt._({
										"*": "{number} posts/comments have been marked as spam",
										_1: "1 post/comment has been marked as spam"
									}, [s.fbt._plural(t, "number")], {
										hk: "3OoNfp"
									});
								case u.a.Spoiler:
									return s.fbt._({
										"*": "{number} posts/comments have been marked as spoilers",
										_1: "1 post/comment has been marked as spoilers"
									}, [s.fbt._plural(t, "number")], {
										hk: "1DFW5M"
									});
								case u.a.UnignoreReports:
									return s.fbt._({
										"*": "{number} posts/comments have had their reports un-ignored",
										_1: "1 post/comment has had their reports un-ignored"
									}, [s.fbt._plural(t, "number")], {
										hk: "303Hpb"
									});
								case u.a.Unlock:
									return s.fbt._({
										"*": "{number} posts/comments have been unlocked",
										_1: "1 post/comment has been unlocked"
									}, [s.fbt._plural(t, "number")], {
										hk: "5gUht"
									});
								case u.a.UnmarkNSFW:
									return s.fbt._({
										"*": "{number} posts/comments have been un-marked as NSFW",
										_1: "1 post/comment has been un-marked as NSFW"
									}, [s.fbt._plural(t, "number")], {
										hk: "3oSSST"
									});
								case u.a.Unspoiler:
								case u.a.Unspoiler:
									return s.fbt._({
										"*": "{number} posts/comments have been un-marked as spoilers",
										_1: "1 post/comment has been un-marked as spoilers"
									}, [s.fbt._plural(t, "number")], {
										hk: "3lHoNI"
									})
							}
						}(e, O.length);
						if (e !== u.a.Approve && e !== u.a.Flair) {
							let t, i;
							const l = v.platform.currentPage && v.platform.currentPage.queryParams && v.platform.currentPage.queryParams.subreddit,
								m = l && Object(f.F)(v, l);
							e === u.a.Remove && m && O.length > 1 && (t = s.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), i = Object(a.fetchReasonsAndOpenModal)(m, O));
							const p = Object(d.d)(o, h.b.Undo, s.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, {
								apiContext: o
							}) => {
								e(H());
								const n = t(),
									i = Object.keys(n.pages.modHub.modQueue.bulkAction.undoLastAction)[0],
									a = n.pages.modHub.modQueue.bulkAction.undoLastAction[i],
									l = n.user.account && n.user.account.displayText;
								e(Object(r.c)());
								const m = await Object(c.a)(o(), i, {
									ids: a
								});
								m.ok ? e(U({
									...m.body,
									operation: i,
									ids: a,
									username: l
								})) : (e(W(m.error)), e(Object(d.e)({
									kind: h.b.Error,
									text: s.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, i);
							n(Object(d.e)(p))
						} else {
							const e = Object(d.d)(o, h.b.SuccessMod);
							n(Object(d.e)(e))
						}
					} else {
						n(Object(r.a)(E.error));
						const e = Object(d.d)(s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), h.b.Error);
						n(Object(d.e)(e))
					}
				}, G = Object(i.a)(O.a), q = Object(i.a)(O.c), Q = Object(i.a)(O.d)
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "removalReasonsPending", (function() {
				return Z
			})), o.d(t, "removalReasonsLoaded", (function() {
				return Y
			})), o.d(t, "removalReasonsFailed", (function() {
				return $
			})), o.d(t, "removalReasonsRequested", (function() {
				return ee
			})), o.d(t, "removalReasonAddedPending", (function() {
				return te
			})), o.d(t, "removalReasonAddedSuccess", (function() {
				return oe
			})), o.d(t, "removalReasonAddedFailed", (function() {
				return se
			})), o.d(t, "addRemovalReason", (function() {
				return ne
			})), o.d(t, "editRemovalReasonPending", (function() {
				return ie
			})), o.d(t, "editRemovalReasonSuccess", (function() {
				return re
			})), o.d(t, "editRemovalReasonFailed", (function() {
				return ae
			})), o.d(t, "editRemovalReason", (function() {
				return de
			})), o.d(t, "deleteRemovalReasonPending", (function() {
				return ce
			})), o.d(t, "deleteRemovalReasonSuccess", (function() {
				return le
			})), o.d(t, "deleteRemovalReasonFailed", (function() {
				return me
			})), o.d(t, "deleteRemovalReason", (function() {
				return pe
			})), o.d(t, "removedItemsSelected", (function() {
				return ue
			})), o.d(t, "fetchReasonsAndOpenModal", (function() {
				return he
			})), o.d(t, "removalReasonSubmittedPending", (function() {
				return be
			})), o.d(t, "removalReasonSubmittedSuccess", (function() {
				return fe
			})), o.d(t, "removalReasonSubmittedFailed", (function() {
				return Ce
			})), o.d(t, "removalReasonMessagePending", (function() {
				return xe
			})), o.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return ge
			})), o.d(t, "removalReasonPublicMessageSuccess", (function() {
				return ve
			})), o.d(t, "removalReasonMessageFailed", (function() {
				return Oe
			})), o.d(t, "submitRemovalReason", (function() {
				return Ie
			})), o.d(t, "submitBulkRemovalReason", (function() {
				return Se
			}));
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./src/lib/initializeClient/installReducer.ts"),
				i = o("./node_modules/redux/es/redux.js");
			const r = "REMOVALREASONS__ADD_PENDING",
				a = "REMOVALREASONS__ADD_SUCCESS",
				d = "REMOVALREASONS__ADD_FAILED",
				c = "REMOVALREASONS__EDIT_PENDING",
				l = "REMOVALREASONS__EDIT_SUCCESS",
				m = "REMOVALREASONS__EDIT_FAILED",
				p = "REMOVALREASONS__DELETE_PENDING",
				u = "REMOVALREASONS__DELETE_SUCCESS",
				h = "REMOVALREASONS__DELETE_FAILED";
			var b = (e = null, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case "REMOVALREASONS__LOAD_SUCCESS":
					case r:
					case a:
					case c:
					case l:
					case p:
					case u:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case d:
					case m:
					case h:
						return t.payload;
					default:
						return e
				}
			};
			var f = (e = !1, t) => {
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case r:
						case c:
						case p:
							return !0;
						case "REMOVALREASONS__LOAD_SUCCESS":
						case "REMOVALREASONS__LOAD_FAILED":
						case a:
						case d:
						case l:
						case m:
						case u:
						case h:
							return !1;
						default:
							return e
					}
				},
				C = Object(i.c)({
					error: b,
					pending: f
				});
			const x = {};
			var g = (e = x, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
						const {
							response: o
						} = t.payload, {
							data: s
						} = o;
						return {
							...e,
							...s
						}
					}
					case a:
					case l: {
						const {
							reason: o
						} = t.payload;
						return {
							...e,
							[o.id]: o
						}
					}
					case u: {
						const {
							reasonId: o
						} = t.payload, {
							[o]: s,
							...n
						} = e;
						return n
					}
					default:
						return e
				}
			};
			const v = {};
			var O = (e = v, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
						const {
							subredditId: o,
							response: s
						} = t.payload, {
							order: n
						} = s;
						return {
							...e,
							[o]: n
						}
					}
					case a: {
						const {
							subredditId: o,
							reason: s
						} = t.payload;
						return {
							...e,
							[o]: [...e[o], s.id]
						}
					}
					case u: {
						const {
							subredditId: o,
							reasonId: s
						} = t.payload, n = [...e[o]].filter(e => e !== s);
						return {
							...e,
							[o]: n
						}
					}
					default:
						return e
				}
			};
			var I = (e = null, t) => {
					switch (t.type) {
						case "REMOVALREASONS__REMOVEDITEMS_SELECTED": {
							const {
								subredditId: e,
								itemIds: o
							} = t.payload;
							return {
								itemIds: o,
								subredditId: e
							}
						}
						default:
							return e
					}
				},
				S = Object(i.c)({
					api: C,
					models: g,
					reasonOrder: O,
					removedItemIds: I
				}),
				k = o("./src/lib/constants/index.ts"),
				E = o("./src/lib/makeActionCreator/index.ts"),
				_ = o("./src/lib/makeCommentsPageKey/index.ts"),
				T = o("./src/lib/makeDraftKey/index.ts"),
				w = o("./src/reddit/actions/bulkActions/index.ts"),
				R = o("./src/reddit/actions/comment/index.ts"),
				y = o("./src/reddit/actions/comment/authoring.ts"),
				j = o("./src/reddit/actions/comment/moderation.ts"),
				P = o("./src/reddit/actions/modal.ts"),
				M = o("./src/reddit/actions/post.ts"),
				A = o("./src/reddit/actions/toaster.ts"),
				N = o("./src/reddit/constants/modals.ts"),
				L = o("./src/lib/makeApiRequest/index.ts"),
				D = o("./src/lib/omitHeaders/index.ts"),
				F = o("./src/reddit/constants/headers.ts"),
				V = o("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const B = (e, t) => Object(L.a)(Object(D.a)(e, [F.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: k.cb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				H = (e, t, o) => Object(L.a)(Object(D.a)(e, [F.a]), {
					endpoint: Object(V.a)(`${e.apiUrl}/api/v1/modactions/removal_${o}_message/`),
					method: k.cb.POST,
					type: "json",
					data: t
				});
			var U = o("./src/reddit/helpers/isPost.ts"),
				W = o("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				z = o("./src/reddit/helpers/routeKey/index.ts"),
				G = o("./src/reddit/models/ModQueue/index.ts"),
				q = o("./src/reddit/models/PostDraft/index.ts"),
				Q = o("./src/reddit/models/RemovalReason/index.ts"),
				K = o("./src/reddit/models/Toast/index.ts"),
				X = o("./src/reddit/selectors/comments.ts"),
				J = o("./src/reddit/selectors/platform.ts");
			Object(n.a)({
				features: {
					removalReasons: S
				}
			});
			const Z = Object(E.a)("REMOVALREASONS__LOAD_PENDING"),
				Y = Object(E.a)("REMOVALREASONS__LOAD_SUCCESS"),
				$ = Object(E.a)("REMOVALREASONS__LOAD_FAILED"),
				ee = e => async (t, o, {
					apiContext: s
				}) => {
					const n = o().subreddits.models[e].name;
					t(Z());
					const i = await ((e, t) => Object(L.a)(Object(D.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: k.cb.GET
					}))(s(), n);
					i.ok ? t(Y({
						subredditId: e,
						response: i.body
					})) : t($(i.error))
				}, te = Object(E.a)(r), oe = Object(E.a)(a), se = Object(E.a)(d), ne = (e, t) => async (o, n, {
					apiContext: i
				}) => {
					const r = n().subreddits.models[e].name;
					o(te());
					const a = await ((e, t, o) => Object(L.a)(Object(D.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: k.cb.POST,
						data: o
					}))(i(), r, t);
					if (a.ok) {
						const {
							id: n
						} = a.body, i = {
							...t,
							id: n
						};
						o(oe({
							subredditId: e,
							reason: i
						})), o(Object(A.e)({
							kind: K.b.SuccessMod,
							text: s.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else o(se(a.error))
				}, ie = Object(E.a)(c), re = Object(E.a)(l), ae = Object(E.a)(m), de = (e, t) => async (o, n, {
					apiContext: i
				}) => {
					const r = n().subreddits.models[e].name;
					o(ie());
					const a = await ((e, t, o) => Object(L.a)(Object(D.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${o.id}`,
						method: k.cb.PUT,
						data: {
							message: o.message,
							title: o.title
						}
					}))(i(), r, t);
					a.ok ? (o(re({
						subredditId: e,
						reason: t
					})), o(Object(A.e)({
						kind: K.b.SuccessMod,
						text: s.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : o(ae(a.error))
				}, ce = Object(E.a)(p), le = Object(E.a)(u), me = Object(E.a)(h), pe = (e, t) => async (o, n, {
					apiContext: i
				}) => {
					const r = n().subreddits.models[e].name;
					o(ce());
					const a = await ((e, t, o) => Object(L.a)(Object(D.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${o}`,
						method: k.cb.DELETE
					}))(i(), r, t);
					a.ok ? (o(le({
						subredditId: e,
						reasonId: t
					})), o(Object(A.e)({
						kind: K.b.SuccessMod,
						text: s.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : o(me(a.error))
				}, ue = Object(E.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), he = (e, t) => async (o, s, {
					apiContext: n
				}) => {
					const i = s();
					i.features.removalReasons.reasonOrder[e] && i.features.removalReasons.reasonOrder[e].length > 0 || o(ee(e)), o(ue({
						subredditId: e,
						itemIds: t
					})), o(Object(P.i)(N.a.ADD_REMOVAL_REASON))
				}, be = Object(E.a)("REMOVALREASONS__SUBMIT_PENDING"), fe = Object(E.a)("REMOVALREASONS__SUBMIT_SUCCESS"), Ce = Object(E.a)("REMOVALREASONS__SUBMIT_FAILED"), xe = Object(E.a)("REMOVALREASONS__MESSAGE_PENDING"), ge = Object(E.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), ve = Object(E.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Oe = Object(E.a)("REMOVALREASONS__MESSAGE_FAILED"), Ie = (e, t, o, s, n) => async (i, r, {
					apiContext: a
				}) => {
					const d = r(),
						c = d.user.account && d.user.account.displayText,
						l = e[0],
						m = Object(U.a)(l) ? Q.e.Post : Q.e.Comment,
						p = m === Q.e.Post ? d.posts.models[l] : d.features.comments.models[l],
						u = m === Q.e.Post ? M.L : R.h;
					if (!p || !c) return !1;
					i(be()), i(u({
						[l]: {
							modNote: n,
							modRemovalReason: t && t.title,
							modReasonBy: c
						}
					}));
					const h = {
							itemIds: e,
							modNote: n,
							reasonId: t ? t.id : null
						},
						b = await B(a(), h);
					if (b.ok) {
						if (i(fe()), t) {
							i(xe());
							const n = {
									itemId: e,
									message: o,
									title: t.title,
									type: s
								},
								r = await H(a(), Object(Q.h)(n, m), m);
							if (r.ok) {
								if (s === Q.f.Public) {
									if (i(ve()), r.body) {
										const e = Object(W.a)(r.body, c),
											t = {
												comment: e,
												parentId: l
											},
											o = Object(J.f)(d),
											s = d.platform.currentPage && d.platform.currentPage.routeMatch;
										let n = o && s && Object(z.a)(s, d, d.posts.models[e.postId]);
										if (n || (n = Object(_.a)(e.postId, null, {
												sort: k.s,
												hasSortParam: !0
											})), m === Q.e.Post) {
											const o = Object(T.a)(q.c.replyToPost, l);
											i(Object(y.o)({
												...t,
												headCommentId: Object(X.w)(d, {
													commentsPageKey: n
												}),
												commentsPageKey: n,
												draftKey: o
											}));
											const s = d.postStickiedComments.data[l];
											i(Object(j.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: n
											})), s && s !== e.id && i(Object(R.h)({
												[s]: {
													isStickied: !1
												}
											}))
										} else if (m === Q.e.Comment) {
											const e = Object(T.a)(q.c.replyToComment, p.id),
												o = Object(X.j)(d, {
													commentId: l,
													commentsPageKey: n
												});
											i(Object(y.m)({
												...t,
												parentCommentId: l,
												commentsPageKey: n,
												draftKey: e,
												depth: o + 1
											}))
										}
									}
								} else i(ge());
								return !0
							}
							return i(Oe(r.error)), !1
						}
					} else i(Ce(b.error)), i(u({
						[l]: {
							modNote: p.modNote,
							modRemovalReason: p.modRemovalReason,
							modReasonBy: p.modReasonBy
						}
					}));
					return !1
				}, Se = (e, t, o, n, i) => async (r, a, {
					apiContext: d
				}) => {
					const c = a(),
						l = c.user.account && c.user.account.displayText;
					if (!l) return;
					r(be());
					const m = Object(A.e)({
							kind: K.b.SuccessMod,
							text: s.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [s.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						p = {
							itemIds: e,
							modNote: i,
							reasonId: t ? t.id : null
						},
						u = await B(d(), p);
					if (u.ok) {
						const s = {
							ids: e,
							operation: G.a.RemovalReason,
							username: l,
							options: {
								modNote: i,
								removalReason: t && t.title
							}
						};
						if (r(Object(w.b)(s)), t) {
							const s = {
									itemId: e,
									message: o,
									title: t.title,
									type: n
								},
								i = await H(d(), Object(Q.h)(s, Q.e.Bulk), Q.e.Bulk);
							i.ok ? (r(ge()), r(m)) : r(Oe(i.error))
						} else r(m)
					} else r(Ce(u.error))
				}
		},
		"./src/reddit/components/ClassicPost/Placeholder.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return O
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./node_modules/react-redux/es/index.js"),
				r = o("./node_modules/reselect/es/index.js"),
				a = o("./src/lib/classNames/index.ts"),
				d = o("./src/reddit/components/PostLeftRail/index.tsx"),
				c = o("./src/reddit/components/VerticalVotes/votes.tsx"),
				l = o("./src/reddit/contexts/PageLayer/index.tsx"),
				m = o("./src/reddit/helpers/styles/mixins/loading.ts"),
				p = o("./src/reddit/models/Vote/index.ts"),
				u = o("./src/reddit/helpers/styles/mixins/index.m.less"),
				h = o.n(u),
				b = o("./src/reddit/components/ClassicPost/placeholder.m.less"),
				f = o.n(b);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			const x = Object(l.t)(),
				g = Object(r.c)({
					isFakeSubreddit: l.x
				}),
				v = Object(i.b)(g),
				O = e => {
					const t = {
						interactive: !1,
						voteState: p.a.notVoted
					};
					return n.a.createElement("div", {
						className: Object(a.a)(e.className, f.a.emptyVerticalVotes)
					}, n.a.createElement(c.d, C({
						key: "u"
					}, t)), e.children, n.a.createElement(c.c, C({
						key: "d"
					}, t)))
				},
				I = () => n.a.createElement(O, null, n.a.createElement("div", {
					className: f.a.emptyScore,
					key: "s"
				}));
			t.b = x(v(e => n.a.createElement("div", {
				className: Object(a.a)(e.className, h.a.classicPostStyles, h.a.classicAndCompactPlaceholderStyles)
			}, n.a.createElement(d.b, null, n.a.createElement(I, null)), n.a.createElement("div", {
				className: f.a.mainBody
			}, n.a.createElement("div", {
				className: f.a.thumbnailContainer
			}, n.a.createElement("div", {
				className: Object(a.a)(f.a.thumbnail, Object(m.b)(e))
			})), n.a.createElement("div", {
				className: f.a.content
			}, n.a.createElement("div", {
				key: "a"
			}, n.a.createElement("div", {
				key: "aa",
				className: Object(a.a)(f.a.title, Object(m.b)(e))
			}), n.a.createElement("div", {
				key: "ab",
				className: Object(a.a)(f.a.meta, Object(m.b)(e))
			})), n.a.createElement("div", {
				key: "f",
				className: f.a.flatlist
			}, n.a.createElement("div", {
				key: "fa",
				className: Object(a.a)(f.a.flatlistExpando, Object(m.b)(e))
			}), n.a.createElement("div", {
				key: "fb",
				className: f.a.flatlistSeparator
			}), n.a.createElement("div", {
				key: "fc",
				className: Object(a.a)(f.a.flatListItemOne, Object(m.b)(e))
			}), n.a.createElement("div", {
				key: "fd",
				className: Object(a.a)(f.a.flatListItemTwo, Object(m.b)(e))
			})))))))
		},
		"./src/reddit/components/ClassicPost/placeholder.m.less": function(e, t, o) {
			e.exports = {
				thumbnailContainer: "_3cwq18vPueuAxRSrd1foNB",
				mainBody: "_1jxw1P65tWXN5u8kVHlX-n",
				content: "_2KR7fLQx_7rIv8QaoeXKZw",
				emptyScore: "_6w7aNMh3t6UMe07Q6oWFE",
				emptyVerticalVotes: "_1Xs9oeessHWcuF0VTVxRnl",
				thumbnail: "_2XOZ5bYpLdswvBAYUNa-ly",
				title: "n3AVRrP7HOfc0gAtGFpfv",
				meta: "_1BoNlCqTsaeLXkuZbADxyl",
				flatlist: "_1IgQuZI8L6A0NcShWmf08y",
				flatlistExpando: "_2AMaFX8Gwojg29X4_nOnaL",
				flatlistSeparator: "oljBm1Q059l3l84VHO9VM",
				flatListItemOne: "_2xeK0Acj_38O5kqiHgp7VC",
				flatListItemTwo: "_3WphuhFsMSKk2tQyD3fZeI"
			}
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/react/index.js"),
				i = o.n(n),
				r = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				d = o("./src/lib/classNames/index.ts"),
				c = o("./src/lib/constants/index.ts"),
				l = o("./src/lib/lessComponent.tsx"),
				m = o("./src/reddit/actions/comment/moderation.ts"),
				p = o("./src/reddit/actions/tooltip.ts"),
				u = o("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				h = o("./src/reddit/components/ModModeReports/helpers.ts"),
				b = o("./src/reddit/components/TrackingHelper/index.tsx"),
				f = o("./src/reddit/contexts/PageLayer/index.tsx"),
				C = o("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				x = o("./src/reddit/helpers/trackers/modTools.ts"),
				g = o("./src/reddit/selectors/moderatingComments.ts"),
				v = o("./src/reddit/selectors/moderatorPermissions.ts"),
				O = o("./src/reddit/selectors/tooltip.ts"),
				I = o("./src/reddit/selectors/user.ts"),
				S = o("./src/reddit/icons/fonts/Approve/index.tsx"),
				k = o("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				E = o("./src/reddit/icons/fonts/Lock/index.tsx"),
				_ = o("./src/reddit/icons/fonts/Remove/index.tsx"),
				T = o("./src/reddit/icons/fonts/Spam/index.tsx"),
				w = o("./src/reddit/icons/svgs/Show/index.tsx"),
				R = o("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				y = o("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				j = o.n(y);
			const P = Object(f.t)(),
				M = e => `Distinguish--Dropdown--${e}`,
				A = Object(a.c)({
					currentUser: I.i,
					collapsedBecauseCrowdControl: (e, {
						comment: t
					}) => Object(g.a)(e, {
						commentId: t.id
					}),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(O.b)(M(t.id))(e),
					moderatorPermissions: (e, t) => {
						const {
							comment: o
						} = t;
						return Object(f.g)(e, t) || Object(v.i)(e, {
							subredditId: o.subredditId
						})
					},
					modModeEnabled: f.P
				}),
				N = Object(r.b)(A, (e, {
					comment: t
				}) => ({
					onApproveComment: () => e(Object(m.a)(t.id)),
					onDistinguishComment: (o, s) => e(Object(m.b)(t.id, o, s)),
					onLockComment: () => e(Object(m.c)(t.id)),
					onRemoveComment: () => e(Object(m.e)(t.id, !1)),
					onSpamComment: () => e(Object(m.e)(t.id, !0)),
					onShowComment: () => e(Object(m.d)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(p.h)({
						tooltipId: M(t.id)
					}))
				}));
			t.a = P(N(l.a.wrapped(Object(b.c)(({
				className: e,
				comment: t,
				currentUser: o,
				isCommentAuthor: n,
				collapsedBecauseCrowdControl: r,
				moderatorPermissions: a,
				modModeEnabled: l,
				onApproveComment: m,
				onDistinguishComment: p,
				onLockComment: b,
				onRemoveComment: f,
				onShowComment: g,
				onSpamComment: v,
				onToggleDistinguishDropdown: O,
				sendEvent: I,
				...y
			}) => {
				const P = Object(C.a)(a),
					A = Object(h.b)(t),
					N = t.isApproved && A,
					L = !!o && o.isEmployee,
					D = !t.isRemoved || t.bannedBy === c.k,
					F = r,
					V = e => I(Object(x.a)(e, t.id));
				return i.a.createElement("div", {
					className: e
				}, (t.bannedBy || A) && i.a.createElement(R.a, {
					text: N ? s.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : s.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						m(), V("approve")
					}
				}, i.a.createElement(S.a, {
					className: j.a.icon
				})), D && i.a.createElement(i.a.Fragment, null, i.a.createElement(R.a, {
					text: t.bannedBy === c.k ? s.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : s.fbt._("Remove", null, {
						hk: "VP5J0"
					}),
					onClick: () => {
						f(), t.bannedBy === c.k ? V("confirm_remove") : V("remove")
					}
				}, i.a.createElement(_.a, {
					className: j.a.icon
				})), i.a.createElement(R.a, {
					text: s.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						v(), V("spam")
					}
				}, i.a.createElement(T.a, {
					className: j.a.icon
				}))), i.a.createElement(R.a, {
					text: t.isLocked ? s.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : s.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						b(), V(t.isLocked ? "unlock" : "lock")
					}
				}, i.a.createElement(E.a, {
					className: j.a.icon
				})), n && !L && !t.bannedBy && i.a.createElement(R.a, {
					className: Object(d.a)({
						[j.a.selected]: y.isDistinguishDropdownOpen
					}),
					onClick: () => {
						V("mod_distinguish_menu"), O()
					}
				}, i.a.createElement(k.a, null), i.a.createElement(u.a, {
					isAdminDistinguished: t.isAdmin,
					isDropdownOpen: y.isDistinguishDropdownOpen,
					isModDistinguished: t.isMod,
					isStickied: t.isStickied,
					isTopLevelComment: !t.parentId,
					isUserEmployee: L,
					isUserMod: P,
					onDistinguishComment: p,
					sendEventWithName: V,
					tooltipId: M(t.id)
				})), F && i.a.createElement(R.a, {
					text: s.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						g()
					}
				}, i.a.createElement(w.a, {
					className: Object(d.a)(j.a.icon, j.a.Show)
				})))
			}), "CommentModToolsFlatlist", j.a)))
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, o) {
			e.exports = {
				CommentAuthorLink: "f3THgbzMYccGW8vbqZBUH",
				commentAuthorLink: "f3THgbzMYccGW8vbqZBUH",
				badgeIconStyle: "_2MlVoXUc3Eo3KGWDukM9xn",
				modBadgeIconStyle: "_1kqPGnOAdnd9gPUXDU2_AS",
				RightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				rightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				EditedText: "uMVXpG5M2xxHNW2g94S8K",
				editedText: "uMVXpG5M2xxHNW2g94S8K",
				MetaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				metaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				publicPoints: "_2LXcsgibmlCEsBPk8MLy7e",
				AuthorHoverCard: "_16AAktgl_rVbXAeiWU9CQd",
				authorHoverCard: "_16AAktgl_rVbXAeiWU9CQd",
				Component: "_36uQqfCEixcb8d3_aWB5H6",
				component: "_36uQqfCEixcb8d3_aWB5H6",
				AdminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				adminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				ApproveIcon: "_1Eh0n96uBEmPUSfcMxUGhG",
				approveIcon: "_1Eh0n96uBEmPUSfcMxUGhG",
				LockIcon: "_1jeG-DROQh1SLQ5G8u6Nk_",
				lockIcon: "_1jeG-DROQh1SLQ5G8u6Nk_",
				AdminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				adminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				AutomoderatorIcon: "_2PtIIiQkETUOP8Lk3Di9nj",
				automoderatorIcon: "_2PtIIiQkETUOP8Lk3Di9nj",
				removed: "_2jIbl66ymb_twdJlZslQ-e",
				CakeIcon: "_1HLCDx7CkNvQgmNroGXenu",
				cakeIcon: "_1HLCDx7CkNvQgmNroGXenu",
				ModeratorIcon: "rZkjnStRKzlmtr__ixhKy",
				moderatorIcon: "rZkjnStRKzlmtr__ixhKy",
				RemoveIcon: "_1OSCZHrfg3APy19ezg_Z7V",
				removeIcon: "_1OSCZHrfg3APy19ezg_Z7V",
				ReportIcon: "_3EVxdJ5MkUz5ddcInDzq5K",
				reportIcon: "_3EVxdJ5MkUz5ddcInDzq5K",
				SpamIcon: "_29rfUWOxsqpcNo-WwSh_XJ",
				spamIcon: "_29rfUWOxsqpcNo-WwSh_XJ",
				OpIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				opIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				ContractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				contractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				TopSupporterIcon: "_2Cj3vP3_ckCL5Fy6ZU7YGR",
				topSupporterIcon: "_2Cj3vP3_ckCL5Fy6ZU7YGR",
				redditorIcon: "_2SkK42s487b14gsRa4zinm",
				MetaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				metaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				StickiedText: "_1eNQE7Kj1TEqCLAn1BUKJy",
				stickiedText: "_1eNQE7Kj1TEqCLAn1BUKJy",
				DeletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				deletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				RemovalReason: "Gtgj2P-Js5aSN72H6Mqms",
				removalReason: "Gtgj2P-Js5aSN72H6Mqms",
				container: "_3ezOJqKdLbgkHsXcfvS5SA",
				collapsed: "_2k27lgIDltx9kOzVGXt48i",
				hasBadges: "_1KMFaeLEhRikeFEOlWE9Ti",
				liveStreaming: "_1iUed95f0HTc84gBtoOxdc",
				CrowdControlText: "Eoj3NCGwtl7hQcr7Rnc0N",
				crowdControlText: "Eoj3NCGwtl7hQcr7Rnc0N",
				metaText: "_3_GZIIN1xcMEC5AVuv4kfa",
				icon2020Styles: "_3N-ztylrPoAFspBRmaxjS0"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/react/index.js"),
				i = o.n(n),
				r = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				d = o("./src/reddit/hooks/useTracking.ts"),
				c = o("./src/reddit/actions/gold/powerups.ts"),
				l = o("./src/reddit/actions/tooltip.ts"),
				m = o("./src/lib/addQueryParams/index.ts"),
				p = o("./src/lib/classNames/index.ts"),
				u = o("./src/lib/constants/index.ts"),
				h = o("./src/lib/humanizeDateTime/index.ts"),
				b = o("./src/lib/lessComponent.tsx"),
				f = o("./src/lib/timeAgo/index.ts"),
				C = o("./src/reddit/helpers/trackers/powerups.ts"),
				x = o("./src/reddit/components/AuthorLink/index.tsx"),
				g = o("./src/reddit/components/AwardBadges/index.tsx"),
				v = o("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				O = o("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				I = o("./src/reddit/components/Flair/index.tsx"),
				S = o("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				k = o("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				E = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				_ = o("./src/reddit/components/JSAPIContainers/index.tsx"),
				T = o("./src/reddit/components/PostTopMeta/index.tsx"),
				w = o("./src/reddit/selectors/economics.ts"),
				R = o("./src/reddit/helpers/isRemoved.ts"),
				y = o("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				j = o("./src/reddit/helpers/showReportIndicator/index.ts"),
				P = o("./src/reddit/actions/comment/index.ts"),
				M = o("./src/reddit/models/AutomatedReporting/index.ts"),
				A = o("./src/reddit/models/Comment/index.ts"),
				N = o("./src/reddit/models/Flair/index.ts"),
				L = o("./src/reddit/icons/fonts/index.tsx"),
				D = o("./src/reddit/icons/fonts/Admin/index.tsx"),
				F = o("./src/reddit/icons/fonts/Approve/index.tsx"),
				V = o("./src/reddit/icons/fonts/Lock/index.tsx"),
				B = o("./src/reddit/icons/fonts/Op/index.tsx"),
				H = o("./src/reddit/icons/fonts/Remove/index.tsx"),
				U = o("./src/reddit/icons/fonts/Report/index.tsx"),
				W = o("./src/reddit/icons/fonts/Spam/index.tsx"),
				z = o("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				G = o("./src/reddit/icons/svgs/Cake/index.tsx"),
				q = o("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Q = o("./src/reddit/icons/svgs/Powerup/index.tsx"),
				K = o("./src/reddit/controls/MetaData/index.tsx"),
				X = o("./src/reddit/selectors/experiments/coreStyles.ts"),
				J = o("./src/reddit/selectors/subreddit.ts"),
				Z = o("./src/reddit/selectors/userFlair.ts"),
				Y = o("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				$ = o.n(Y);

			function ee() {
				return (ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			const te = b.a.wrapped(I.b, "RightPositionedAuthorFlair", $.a),
				oe = b.a.wrapped(D.a, "AdminIcon", $.a),
				se = b.a.wrapped(F.a, "ApproveIcon", $.a),
				ne = b.a.wrapped(V.a, "LockIcon", $.a),
				ie = b.a.div("AdminEmeritus", $.a),
				re = b.a.wrapped(z.a, "AutomoderatorIcon", $.a),
				ae = b.a.wrapped(Q.a, "TopSupporterIcon", $.a),
				de = b.a.wrapped(G.a, "CakeIcon", $.a),
				ce = b.a.wrapped(q.a, "ModeratorIcon", $.a),
				le = b.a.wrapped(H.a, "RemoveIcon", $.a),
				me = b.a.wrapped(U.a, "ReportIcon", $.a),
				pe = b.a.wrapped(W.a, "SpamIcon", $.a),
				ue = b.a.wrapped(B.a, "OpIcon", $.a),
				he = b.a.wrapped(D.a, "ContractorIcon", $.a),
				be = b.a.a("MetaLink", $.a),
				fe = b.a.wrapped(K.a, "EditedText", $.a),
				Ce = b.a.wrapped(K.a, "StickiedText", $.a),
				xe = b.a.span("DeletedText", $.a),
				ge = b.a.wrapped(K.a, "MetaSeparator", $.a),
				ve = b.a.wrapped(K.a, "CrowdControlText", $.a),
				Oe = b.a.wrapped(k.b, "AuthorHoverCard", $.a),
				Ie = b.a.a("RemovalReason", $.a),
				Se = b.a.wrapped(v.b, "Component", $.a),
				ke = e => (t, {
					comment: o,
					renderedInOverlay: s
				}) => `${e}${o.id}${s?"inOverlay":""}`,
				Ee = () => s.fbt._("Reddit admin, speaking officially", null, {
					hk: "3vg8wE"
				}),
				_e = () => s.fbt._("Cake day", null, {
					hk: "1xptSi"
				}),
				Te = () => s.fbt._("Reddit admin emeritus", null, {
					hk: "1Md5AV"
				}),
				we = e => s.fbt._("Moderator of {subredditDisplayText}, speaking officially", [s.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				}),
				Re = () => s.fbt._("Original Poster", null, {
					hk: "3DqK8z"
				}),
				ye = () => s.fbt._("Reddit contractor", null, {
					hk: "3APwEh"
				}),
				je = () => s.fbt._("Powerups Top Supporter", null, {
					hk: "1GLWsz"
				}),
				Pe = Object(r.b)(() => Object(a.c)({
					adminTooltipId: ke("CommentTopMeta--Admin--"),
					cakedayTooltipId: ke("CommentTopMeta--cakeday--"),
					adminEmeritusTooltipId: ke("CommentTopMeta--AdEm--"),
					automodTooltipId: ke("CommentTopMeta--Automod--"),
					approveTooltipId: ke("CommentTopMeta--Approve--"),
					createdTooltipId: ke("CommentTopMeta--Created--"),
					contractorTooltipId: ke("CommentTopMeta--Contractor--"),
					gildedTooltipId: ke("CommentTopMeta--Gold--"),
					lockedTooltipId: ke("CommentTopMeta--Locked--"),
					modTooltipId: ke("CommentTopMeta--Mod--"),
					opTooltipId: ke("CommentTopMeta--OP--"),
					removeTooltipId: ke("CommentTopMeta--Remove--"),
					reportTooltipId: ke("CommentTopMeta--Report--"),
					spamTooltipId: ke("CommentTopMeta--Spam--"),
					topSupporterTooltipId: ke("CommentTopMeta--TopSupporter--"),
					hasBadges: (e, {
						comment: t
					}) => !!Object(w.p)(e, t.subredditId, t.authorId).length,
					subredditDisplayText: (e, t) => {
						const o = Object(J.I)(e, {
							commentId: t.comment.id
						});
						return o ? o.displayText : ""
					},
					flairPosition: (e, {
						comment: t
					}) => Object(Z.d)(e, {
						subredditId: t.subredditId
					}),
					isInIcons2020: X.b
				}), (e, t) => ({
					onCreatedClick: () => {
						window.addEventListener("focus", (function o() {
							((e, t, o) => {
								window.removeEventListener("focus", o), e(Object(P.f)({
									commentListNodeId: t
								})), window.setTimeout(() => e(Object(P.f)({
									commentListNodeId: t
								})), 5e3)
							})(e, t.comment.id, o)
						}))
					},
					onHideTooltip: () => e(Object(l.i)()),
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					openPowerupsModal: () => e(Object(c.b)()),
					openRemovalReasonModal: () => {
						o.e("removalReasonActions").then(o.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(o => e(o.fetchReasonsAndOpenModal(t.comment.subredditId, [t.comment.id])))
					}
				}));
			t.a = Pe(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: o,
					approveTooltipId: s,
					automodTooltipId: n,
					cakedayTooltipId: r,
					children: a,
					className: c,
					collapsed: l,
					collapsedBecauseCrowdControl: m,
					comment: h,
					commentsPageKey: b,
					contractorTooltipId: f,
					compact: x,
					flair: v,
					flairPosition: k,
					hasBadges: E,
					isAvatarsInCommentsEnabled: w,
					isInIcons2020: R,
					isLivestreaming: y,
					ignoreFlairPosition: j,
					ignoreLock: P,
					lockedTooltipId: M,
					modTooltipId: L,
					onHideTooltip: D,
					onShowTooltip: F,
					opTooltipId: V,
					openPowerupsModal: B,
					openRemovalReasonModal: H,
					removeTooltipId: U,
					renderContractorBadge: W,
					renderTopSupporterBadge: z,
					renderedInOverlay: G,
					reportTooltipId: q,
					spamTooltipId: Q,
					subredditDisplayText: X,
					topSupporterTooltipId: J
				} = e, Z = Object(d.a)();
				if (h.isDeleted) return i.a.createElement(Me, ee({}, e, {
					className: Object(p.a)(c, $.a.container, {
						[$.a.collapsed]: l
					})
				}));
				if (l) return i.a.createElement(Ae, ee({}, e, {
					className: Object(p.a)(c, $.a.container, {
						[$.a.collapsed]: l
					})
				}));
				const Y = !j && k === N.b.Left;
				return i.a.createElement("div", {
					className: Object(p.a)(c, $.a.container, {
						[$.a.collapsed]: l,
						[$.a.hasBadges]: E,
						[$.a.liveStreaming]: y
					})
				}, v && Y && i.a.createElement(I.b, {
					flair: v,
					forceSmallEmojis: x
				}), !Object(A.e)(h) && i.a.createElement(Se, {
					showAddCustom: !0,
					subredditId: h.subredditId,
					userId: h.authorId,
					uniqueIdentifier: h.id
				}), i.a.createElement(Oe, {
					postOrComment: h,
					tooltipType: G ? T.c.Lightbox : void 0
				}, i.a.createElement(O.b, {
					ignore: Object(A.e)(h) || !!h.distinguishType && h.distinguishType !== u.C.NONE,
					subredditId: h.subredditId,
					userId: h.authorId
				}, i.a.createElement(Le, {
					comment: h,
					isLivestreaming: y,
					isStrong: !!x,
					isAuthorDeleted: Object(A.e)(h)
				}, a && a))), m && i.a.createElement(ve, null, "Crowd Control"), m && i.a.createElement(K.c, {
					className: $.a.metaText,
					key: "crowdControlSeparator"
				}), v && !Y && i.a.createElement(te, {
					flair: v,
					forceSmallEmojis: x
				}), !x && i.a.createElement(S.a, {
					className: $.a.publicPoints,
					contentId: h.id,
					metaSeparator: i.a.createElement(K.c, {
						className: $.a.metaText
					}),
					subredditId: h.subredditId,
					userId: h.authorId,
					username: h.author
				}), i.a.createElement(i.a.Fragment, null, i.a.createElement(_.b, {
					commentId: h.id
				}), i.a.createElement(_.a, {
					commentId: h.id,
					commentsPageKey: b
				}), i.a.createElement(Ve, {
					comment: h,
					compact: x,
					adminTooltipId: o,
					adminEmeritusTooltipId: t,
					cakedayTooltipId: r,
					contractorTooltipId: f,
					modTooltipId: L,
					onHideTooltip: D,
					onShowTooltip: F,
					openPowerupsModal: () => {
						Z(Object(C.h)("comment")), B()
					},
					opTooltipId: V,
					renderContractorBadge: W,
					renderTopSupporterBadge: z,
					subredditDisplayText: X,
					topSupporterTooltipId: J,
					isInIcons2020: R
				})), !x && i.a.createElement(i.a.Fragment, null, !h.isDeleted && !w && i.a.createElement(K.b, {
					className: $.a.metaText,
					isScoreHidden: h.isScoreHidden,
					score: h.score
				}), !w && i.a.createElement(K.c, {
					className: $.a.metaText,
					key: "scoreCreatedSeparator"
				}), i.a.createElement(De, ee({
					key: "Created"
				}, e)), h.isStickied && He(), h.editedAt && Ne(h.editedAt)), i.a.createElement(i.a.Fragment, null, i.a.createElement(Be, {
					comment: h,
					approveTooltipId: s,
					automodTooltipId: n,
					ignoreLock: P,
					lockedTooltipId: M,
					onHideTooltip: D,
					onShowTooltip: F,
					openRemovalReasonModal: H,
					removeTooltipId: U,
					reportTooltipId: q,
					spamTooltipId: Q,
					isInIcons2020: R
				})), i.a.createElement(g.a, {
					thing: h,
					tooltipType: G ? T.c.Lightbox : void 0
				}))
			});
			const Me = e => {
					const {
						childrenInfo: t,
						collapsed: o,
						className: n,
						comment: r
					} = e;
					return i.a.createElement("div", {
						className: n
					}, i.a.createElement(xe, null, r.deletedBy === A.b.User ? s.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : s.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), i.a.createElement(De, ee({
						key: "Created"
					}, e)), o && Fe({
						childrenInfo: t
					}))
				},
				Ae = e => {
					const {
						comment: t,
						className: o,
						childrenInfo: s
					} = e;
					return i.a.createElement("div", {
						className: o
					}, i.a.createElement("div", null, i.a.createElement(Le, {
						comment: t,
						isAuthorDeleted: Object(A.e)(t)
					})), i.a.createElement(K.b, {
						className: $.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), i.a.createElement(K.c, {
						className: $.a.metaText,
						key: "scoreCreatedSeparator"
					}), i.a.createElement(De, ee({
						key: "Created"
					}, e)), Fe({
						childrenInfo: s
					}))
				},
				Ne = e => i.a.createElement(n.Fragment, null, i.a.createElement(K.c, {
					className: $.a.metaText
				}), i.a.createElement(fe, null, s.fbt._("edited {time}", [s.fbt._param("time", Object(f.d)(e))], {
					hk: "1tiB0u"
				}))),
				Le = e => i.a.createElement(x.a, {
					className: $.a.CommentAuthorLink,
					author: e.comment.author,
					isAdmin: e.comment.isAdmin,
					isAdminEmeritus: e.comment.distinguishType === u.C.ALUMNI_ADMIN,
					isAuthorDeleted: e.isAuthorDeleted,
					isLivestreaming: e.isLivestreaming,
					isMod: e.comment.isMod,
					isOp: e.comment.isOp,
					isStrong: e.isStrong,
					style: e.style
				}, e.children && e.children, e.comment.author);
			class De extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCreatedTooltip = () => this.props.onShowTooltip(this.props.createdTooltipId)
				}
				render() {
					const {
						comment: e,
						onCreatedClick: t,
						...o
					} = this.props;
					return i.a.createElement(be, {
						href: Object(m.a)(e.permalink, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: o.createdTooltipId,
						onClick: t,
						onMouseEnter: this.onShowCreatedTooltip,
						onMouseLeave: o.onHideTooltip,
						rel: "nofollow",
						target: "_blank"
					}, Object(f.d)(e.created), Ue(o.createdTooltipId, Object(h.a)(e.created)))
				}
			}
			const Fe = e => {
				const {
					hasContinueThread: t,
					numChildren: o
				} = e.childrenInfo || {
					hasContinueThread: !1,
					numChildren: 0
				};
				return i.a.createElement(ge, {
					className: $.a.metaText
				}, t ? s.fbt._({
					"*": "More than {number} children",
					_1: "More than 1 child"
				}, [s.fbt._plural(o, "number")], {
					hk: "13XC7a"
				}) : s.fbt._({
					"*": "{number} children",
					_1: "1 child"
				}, [s.fbt._plural(o, "number")], {
					hk: "dhX9w"
				}))
			};
			class Ve extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCakedayTooltip = () => this.props.onShowTooltip(this.props.cakedayTooltipId), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId), this.onShowTopSupporterTooltip = () => this.props.onShowTooltip(this.props.topSupporterTooltipId)
				}
				render() {
					const {
						comment: e,
						isInIcons2020: t,
						...o
					} = this.props;
					return i.a.createElement(n.Fragment, null, e.isAuthorCakeday && (t ? i.a.createElement(L.a, {
						name: "cake",
						isFilled: !0,
						className: $.a.CakeIcon,
						"aria-label": _e(),
						id: o.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: o.onHideTooltip
					}) : i.a.createElement(de, {
						"aria-label": _e(),
						id: o.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: o.onHideTooltip
					})), e.isAuthorCakeday && Ue(o.cakedayTooltipId, _e()), e.isAdmin && i.a.createElement(oe, {
						desc: Ee(),
						id: o.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: o.onHideTooltip,
						isFilled: t
					}), e.isAdmin && Ue(o.adminTooltipId, Ee()), e.distinguishType === u.C.ALUMNI_ADMIN && i.a.createElement(ie, {
						"aria-label": Te(),
						id: o.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: o.onHideTooltip
					}, "Δ"), e.distinguishType === u.C.ALUMNI_ADMIN && Ue(o.adminEmeritusTooltipId, Te()), e.isMod && (t ? i.a.createElement(L.a, {
						name: "mod",
						isFilled: !0,
						className: $.a.ModeratorIcon,
						"aria-label": we(o.subredditDisplayText),
						id: o.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: o.onHideTooltip
					}) : i.a.createElement(ce, {
						desc: we(o.subredditDisplayText),
						id: o.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: o.onHideTooltip
					})), e.isMod && Ue(o.modTooltipId, we(o.subredditDisplayText)), e.isOp && i.a.createElement(ue, {
						desc: Re(),
						id: o.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: o.onHideTooltip,
						isFilled: t
					}), e.isOp && Ue(o.opTooltipId, Re()), o.renderContractorBadge && i.a.createElement(he, {
						desc: ye(),
						id: o.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: o.onHideTooltip,
						isFilled: t
					}), o.renderContractorBadge && Ue(o.contractorTooltipId, ye()), o.renderTopSupporterBadge && (t ? i.a.createElement(L.a, {
						name: "powerup",
						isFilled: !0,
						className: $.a.TopSupporterIcon,
						"aria-label": je(),
						id: o.topSupporterTooltipId,
						onMouseEnter: this.onShowTopSupporterTooltip,
						onMouseLeave: o.onHideTooltip,
						onClick: o.openPowerupsModal
					}) : i.a.createElement(ae, {
						desc: je(),
						id: o.topSupporterTooltipId,
						onMouseEnter: this.onShowTopSupporterTooltip,
						onMouseLeave: o.onHideTooltip,
						onClick: o.openPowerupsModal
					})), o.renderTopSupporterBadge && Ue(o.topSupporterTooltipId, je()))
				}
			}
			class Be extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowApproveTooltip = () => this.props.onShowTooltip(this.props.approveTooltipId), this.onShowRemoveTooltip = () => this.props.onShowTooltip(this.props.removeTooltipId), this.onShowSpamTooltip = () => this.props.onShowTooltip(this.props.spamTooltipId), this.onShowAutomodTooltip = () => this.props.onShowTooltip(this.props.automodTooltipId), this.onShowReportTooltip = () => this.props.onShowTooltip(this.props.reportTooltipId)
				}
				render() {
					const {
						comment: e,
						isInIcons2020: t,
						...o
					} = this.props, r = e.bannedBy && Object(M.b)(e.bannedBy);
					return i.a.createElement(n.Fragment, null, (e.approvedBy || e.isApproved) && i.a.createElement(se, {
						desc: Object(y.a)(e),
						id: o.approveTooltipId,
						onMouseEnter: this.onShowApproveTooltip,
						onMouseLeave: o.onHideTooltip,
						isFilled: t
					}), (e.approvedBy || e.isApproved) && Ue(o.approveTooltipId, Object(y.a)(e)), Object(R.a)(e) && !r && i.a.createElement(le, {
						desc: Object(y.c)(e),
						id: o.removeTooltipId,
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: o.onHideTooltip,
						isFilled: t
					}), Object(R.a)(e) && Ue(o.removeTooltipId, Object(y.c)(e)), Object(R.a)(e) && e.isRemoved && !e.modNote && !e.modRemovalReason && i.a.createElement(Ie, {
						onClick: o.openRemovalReasonModal
					}, s.fbt._("Add a removal reason", null, {
						hk: "L6yrL"
					})), Object(R.a)(e) && !(e.isRemoved && !e.modNote && !e.modRemovalReason) && !r && i.a.createElement(Ie, {
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: o.onHideTooltip
					}, s.fbt._("Removal reason", null, {
						hk: "20NRw8"
					})), e.isLocked && !o.ignoreLock && i.a.createElement(ne, {
						desc: s.fbt._("Locked", null, {
							hk: "40Ju3g"
						}),
						id: o.lockedTooltipId,
						onMouseEnter: () => {
							o.onShowTooltip(o.lockedTooltipId)
						},
						onMouseLeave: o.onHideTooltip,
						isFilled: t
					}), e.bannedBy && e.isSpam && i.a.createElement(pe, {
						desc: Object(y.e)(e),
						id: o.spamTooltipId,
						onMouseEnter: this.onShowSpamTooltip,
						onMouseLeave: o.onHideTooltip,
						isFilled: t
					}), e.bannedBy && e.isSpam && Ue(o.spamTooltipId, Object(y.e)(e)), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && (t ? i.a.createElement(L.a, {
						name: "bot",
						isFilled: !0,
						className: Object(p.a)($.a.AutomoderatorIcon, {
							[$.a.removed]: !!e.bannedBy
						}),
						"aria-label": y.b,
						id: o.automodTooltipId,
						key: o.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: o.onHideTooltip
					}) : i.a.createElement(re, {
						className: Object(p.a)({
							[$.a.removed]: !!e.bannedBy
						}),
						desc: y.b,
						id: o.automodTooltipId,
						key: o.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: o.onHideTooltip
					})), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && Ue(o.automodTooltipId, y.b), Object(j.a)(e) && i.a.createElement(me, {
						desc: Object(y.d)(e.numReports),
						id: o.reportTooltipId,
						onMouseEnter: this.onShowReportTooltip,
						onMouseLeave: o.onHideTooltip,
						isFilled: t
					}), Object(j.a)(e) && Ue(o.reportTooltipId, Object(y.d)(e.numReports)), r && i.a.createElement(Ie, null, s.fbt._("• Removed by the Automated {filterName}", [s.fbt._param("filterName", r)], {
						hk: "3C408F"
					})))
				}
			}
			const He = () => i.a.createElement(n.Fragment, null, i.a.createElement(K.c, {
					className: $.a.metaText
				}), i.a.createElement(Ce, null, s.fbt._("Stickied comment", null, {
					hk: "XUSav"
				}))),
				Ue = (e, t) => i.a.createElement(E.c, {
					tooltipId: e,
					text: t
				})
		},
		"./src/reddit/components/Comments/UnthreadedComment/index.m.less": function(e, t, o) {
			e.exports = {
				VoteSpacer: "oq5mUzSj_vNl2qp3WN_JJ",
				voteSpacer: "oq5mUzSj_vNl2qp3WN_JJ",
				ContentWrapper: "Z-SSPhDFBXkUleK1Uoo5n",
				contentWrapper: "Z-SSPhDFBXkUleK1Uoo5n",
				CommentContentWrapper: "_2OgGzVSF6RB04Jb2cXSiPj",
				commentContentWrapper: "_2OgGzVSF6RB04Jb2cXSiPj",
				CommentParentWrapper: "OPElT6Do1pTNOWhGkL1eT",
				commentParentWrapper: "OPElT6Do1pTNOWhGkL1eT",
				CommentBody: "_3PTQsA2VkqzBrZxhvpwI8Z",
				commentBody: "_3PTQsA2VkqzBrZxhvpwI8Z",
				ParentPostTitle: "_144TYY84bzwNfGN3DGzUvi",
				parentPostTitle: "_144TYY84bzwNfGN3DGzUvi",
				Component: "_29-oldqrqqPwwjRRH0aLqU",
				component: "_29-oldqrqqPwwjRRH0aLqU"
			}
		},
		"./src/reddit/components/Comments/UnthreadedComment/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return y
			})), o.d(t, "b", (function() {
				return M
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./node_modules/react-redux/es/index.js"),
				r = o("./node_modules/reselect/es/index.js"),
				a = o("./src/lib/objectSelector/index.ts"),
				d = o("./src/reddit/actions/comment/index.ts"),
				c = o("./src/reddit/actions/comment/moderation.ts"),
				l = o("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				m = o("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				p = o("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				u = o("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				h = o("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				b = o("./src/reddit/components/ModModeReports/index.tsx"),
				f = o("./src/reddit/components/PostRailAndVotes/index.tsx"),
				C = o("./src/reddit/components/RichTextJson/index.tsx"),
				x = o("./src/reddit/helpers/getRichTextContent/index.ts"),
				g = o("./src/reddit/models/Vote/index.ts"),
				v = o("./src/reddit/selectors/comments.ts"),
				O = o("./src/reddit/selectors/commentSelector.ts"),
				I = o("./src/reddit/selectors/subreddit.ts"),
				S = o("./src/reddit/components/Comments/UnthreadedComment/index.m.less"),
				k = o.n(S),
				E = o("./src/lib/lessComponent.tsx");
			const _ = E.a.div("VoteSpacer", k.a),
				T = E.a.div("ContentWrapper", k.a),
				w = E.a.div("CommentContentWrapper", k.a),
				R = E.a.div("CommentBody", k.a),
				y = E.a.div("ParentPostTitle", k.a),
				j = E.a.div("CommentParentWrapper", k.a),
				P = Object(r.c)({
					comment: (e, t) => Object(O.a)(e, t),
					flair: v.e,
					subreddit: I.I
				}),
				M = Object(i.b)(P, (e, {
					commentId: t,
					trackClick: o
				}) => ({
					onIgnoreReports: () => e(Object(c.g)(t)),
					onVoteClick: s => {
						const [n, i] = s === g.a.upvoted ? [Object(d.n)(t), "upvote_comment"] : [Object(d.i)(t), "downvote_comment"];
						o(i)(), e(n)
					}
				})),
				A = Object(a.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.c = M(E.a.wrapped(e => {
				const {
					className: t,
					comment: o,
					flair: s,
					hasReports: i,
					isCheckboxSelected: r = !1,
					onIgnoreReports: a,
					onVoteClick: d,
					showModTools: c,
					subreddit: g,
					showBulkActionCheckbox: v,
					toggleCheckbox: O
				} = e;
				return n.a.createElement(m.a, {
					className: t,
					clickTrackingId: o.id,
					permalink: o.permalink
				}, n.a.createElement(f.a, {
					model: o,
					handleVote: d,
					showBulkActionCheckbox: v,
					isCheckboxSelected: r,
					toggleCheckbox: O,
					subreddit: g
				}), n.a.createElement(_, null, n.a.createElement(T, null, n.a.createElement(j, null, o.postTitle && n.a.createElement(y, null, o.postTitle), o.postAuthor && n.a.createElement(h.a, {
					comment: o
				})), n.a.createElement(w, null, n.a.createElement(p.a, {
					comment: o
				}, n.a.createElement(R, null, n.a.createElement(C.a, {
					content: Object(x.a)(o),
					rtJsonElementProps: A(e)
				})), n.a.createElement(u.a, {
					comment: o,
					flair: s,
					subredditName: g ? g.displayText : null
				}), i && n.a.createElement(b.a, {
					onIgnoreReports: a,
					reportable: o
				}), c && !o.isDeleted && n.a.createElement(l.a, {
					comment: o
				}))))))
			}, "Component", k.a))
		},
		"./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./node_modules/react-redux/es/index.js"),
				r = o("./src/lib/addQueryParams/index.ts"),
				a = o("./src/higherOrderComponents/withClickTracking/index.tsx"),
				d = o("./src/reddit/helpers/overlay/index.ts");
			const c = Object(i.b)(null, e => ({
				openLightbox: t => e(Object(d.a)(t))
			}));
			class l extends n.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						permalink: t,
						openLightbox: o,
						...s
					} = this.props, i = s => e(() => s.metaKey || s.ctrlKey || 1 === s.button ? window.open(Object(r.a)(t, {
						context: 3
					})) : o(Object(r.a)(t, {
						context: 3
					})))(s);
					return n.a.createElement("div", {
						className: s.className,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3)), 1 === e.button && i(e)
						},
						onClick: e => {
							!this.cancelClick && 0 === e.button && i(e)
						}
					}, s.children)
				}
			}
			t.a = c(Object(a.c)(l))
		},
		"./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less": function(e, t, o) {
			e.exports = {
				DashWrapper: "_3Ed3UKndPjQ4kkX0QvOz3u",
				dashWrapper: "_3Ed3UKndPjQ4kkX0QvOz3u"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./src/lib/lessComponent.tsx"),
				r = o("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less"),
				a = o.n(r);
			const d = i.a.div("DashWrapper", a.a);
			t.a = e => null === e.comment.parentId ? n.a.createElement(d, null, e.children) : n.a.createElement(d, null, n.a.createElement(d, null, e.children))
		},
		"./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less": function(e, t, o) {
			e.exports = {
				SubredditWrapper: "_1ZSTlGe7wnX1GJX3F-AEwD",
				subredditWrapper: "_1ZSTlGe7wnX1GJX3F-AEwD",
				TopMeta: "_2Rm4FD32bOsXwX7lx3GeYW",
				topMeta: "_2Rm4FD32bOsXwX7lx3GeYW",
				Inline: "meK3ndVOmnvQt6wVaAg5W",
				inline: "meK3ndVOmnvQt6wVaAg5W",
				PostedInfo: "_6b3ccJ38E6dy9dby4PlDN",
				postedInfo: "_6b3ccJ38E6dy9dby4PlDN",
				TextContainer: "iV3Hb5JWIQSpA3WhioY-N",
				textContainer: "iV3Hb5JWIQSpA3WhioY-N"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/react/index.js"),
				i = o.n(n),
				r = o("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				a = o("./src/reddit/layout/row/Inline/index.tsx"),
				d = o("./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less"),
				c = o.n(d),
				l = o("./src/lib/lessComponent.tsx");
			const m = l.a.wrapped(a.a, "Inline", c.a),
				p = l.a.wrapped(a.a, "PostedInfo", c.a),
				u = l.a.wrapped(a.a, "SubredditWrapper", c.a),
				h = l.a.div("TextContainer", c.a),
				b = l.a.wrapped(r.a, "TopMeta", c.a);
			t.a = e => i.a.createElement(m, {
				className: e.className
			}, e.subredditName && i.a.createElement(u, null, e.subredditName && i.a.createElement(h, null, e.subredditName)), i.a.createElement(p, null, i.a.createElement(h, null, `${s.fbt._("Commented by",null,{hk:"4Dveap"})}`), i.a.createElement(b, {
				collapsedBecauseCrowdControl: e.comment.collapsedBecauseCrowdControl,
				collapsed: !1,
				comment: e.comment,
				flair: e.flair,
				renderedInOverlay: !1
			})))
		},
		"./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less": function(e, t, o) {
			e.exports = {
				AuthorLink: "_2jljMb6FK7HnIb15zmm1of",
				authorLink: "_2jljMb6FK7HnIb15zmm1of",
				SubredditWrapper: "SZcM6DS3LArR6FZxlQXOv",
				subredditWrapper: "SZcM6DS3LArR6FZxlQXOv",
				TextContainer: "_2in6k_0-sFgKVz16hifq03",
				textContainer: "_2in6k_0-sFgKVz16hifq03",
				SubredditIcon: "uCjYZbKNai0INWGwHjoUh",
				subredditIcon: "uCjYZbKNai0INWGwHjoUh",
				Inline: "_2VWXAfRlnHG_4nydI7J4l3",
				inline: "_2VWXAfRlnHG_4nydI7J4l3"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./src/reddit/components/AuthorLink/index.tsx"),
				r = o("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				a = o("./src/reddit/components/SubredditIcon/index.tsx"),
				d = o("./src/reddit/layout/row/Inline/index.tsx"),
				c = o("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less"),
				l = o.n(c),
				m = o("./src/lib/lessComponent.tsx");
			const {
				fbt: p
			} = o("./node_modules/fbt/lib/FbtPublic.js"), u = m.a.wrapped(i.a, "AuthorLink", l.a), h = m.a.wrapped(d.a, "Inline", l.a), b = m.a.wrapped(d.a, "SubredditWrapper", l.a), f = m.a.div("TextContainer", l.a), C = m.a.wrapped(a.b, "SubredditIcon", l.a);
			t.a = e => n.a.createElement(h, null, e.subredditOrProfile && n.a.createElement(b, null, e.subredditOrProfile && n.a.createElement(C, {
				subredditOrProfile: e.subredditOrProfile
			}), e.subredditOrProfile && n.a.createElement(f, null, e.subredditOrProfile.displayText)), p._("posted by", null, {
				hk: "1EuRc2"
			}), e.comment.postAuthor && n.a.createElement(r.b, {
				postOrComment: e.comment,
				author: e.comment.postAuthor
			}, n.a.createElement(u, {
				author: e.comment.postAuthor,
				isUnstyled: !0
			}, `u/${e.comment.postAuthor}`)))
		},
		"./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less": function(e, t, o) {
			e.exports = {
				DistinguishWrapper: "_3aVdI6Y8gye7mgZBvUx5X-",
				distinguishWrapper: "_3aVdI6Y8gye7mgZBvUx5X-",
				Inline: "_2fiLaXOPdMYold0b-FKdVN",
				inline: "_2fiLaXOPdMYold0b-FKdVN",
				RadioOff: "_1kl3eXeS_cuuM03T3_G8G1",
				radioOff: "_1kl3eXeS_cuuM03T3_G8G1",
				RadioOn: "_1EcSEYj-g98-QR-5idlQZr",
				radioOn: "_1EcSEYj-g98-QR-5idlQZr",
				DistinguishOptions: "_1uVj4QJ6tIy-PC9lK3eOYO",
				distinguishOptions: "_1uVj4QJ6tIy-PC9lK3eOYO"
			}
		},
		"./src/reddit/components/DistinguishCommentDropdown/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./src/lib/constants/index.ts"),
				r = o("./node_modules/fbt/lib/FbtPublic.js"),
				a = o("./src/lib/lessComponent.tsx"),
				d = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = o("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = o("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				m = o("./src/reddit/layout/row/Inline/index.tsx"),
				p = o("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				u = o.n(p);
			const h = a.a.div("DistinguishWrapper", u.a),
				b = a.a.wrapped(m.a, "Inline", u.a),
				f = a.a.wrapped(c.a, "RadioOff", u.a),
				C = a.a.wrapped(l.a, "RadioOn", u.a),
				x = e => n.a.createElement(b, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? n.a.createElement(C, null) : n.a.createElement(f, null), e.text),
				g = a.a.wrapped(e => {
					const {
						className: t,
						style: o,
						isAdminDistinguished: s,
						isUserEmployee: a,
						isUserMod: d,
						isModDistinguished: c,
						isStickied: l,
						isTopLevelComment: m,
						onDistinguishComment: p
					} = e;
					return n.a.createElement(h, {
						className: t,
						style: o
					}, n.a.createElement(x, {
						onClick: () => p(i.C.NONE, null),
						selected: !c && !s,
						text: r.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), d && n.a.createElement(x, {
						onClick: () => p(i.C.MODERATOR, null),
						selected: c && !l,
						text: r.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), m && d && n.a.createElement(x, {
						onClick: () => p(i.C.MODERATOR, !0),
						selected: c && l,
						text: r.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), a && n.a.createElement(x, {
						onClick: () => p(i.C.ADMIN, null),
						selected: s && !l,
						text: r.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), a && d && m && n.a.createElement(x, {
						onClick: () => p(i.C.ADMIN, !0),
						selected: s && l,
						text: r.fbt._("Distinguish as Admin and Sticky", null, {
							hk: "3x8QWN"
						})
					}))
				}, "DistinguishOptions", u.a);
			var v = Object(d.a)(g);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: o,
					isUserEmployee: s,
					isUserMod: r,
					isModDistinguished: a,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: l,
					sendEventWithName: m,
					tooltipId: p
				} = e;
				return n.a.createElement("div", {
					className: t,
					id: p
				}, n.a.createElement(v, {
					isAdminDistinguished: o,
					isUserEmployee: s,
					isUserMod: r,
					isModDistinguished: a,
					isOpen: e.isDropdownOpen,
					tooltipId: p,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: (e, t) => {
						l(e, t), e === i.C.MODERATOR ? m(!d && t ? "distinguish_sticky" : "distinguish") : e === i.C.ADMIN ? m("admin_distinguish") : a && e !== i.C.MODERATOR ? m("undistinguish") : o && e !== i.C.ADMIN && m("admin_undistinguish"), d && !t && m("unsticky")
					}
				}))
			}
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, o) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = o("./node_modules/react/index.js"),
				i = o.n(n),
				r = o("./src/lib/lessComponent.tsx"),
				a = o("./src/reddit/components/ModModeReports/index.m.less"),
				d = o.n(a);
			const {
				fbt: c
			} = o("./node_modules/fbt/lib/FbtPublic.js"), l = r.a.div("Text", d.a), m = r.a.div("Placeholder", d.a), p = () => i.a.createElement(m, null, i.a.createElement(l, null, c._("Loading reports…", null, {
				hk: "4gwdQw"
			}))), u = Object(s.a)({
				resolved: {},
				chunkName: () => "ModerationDropdowns",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => o.e("ModerationDropdowns").then(o.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return o(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeReports/_ModModeReports.tsx"
				}
			}, {
				fallback: i.a.createElement(p, null),
				ssr: !1
			});
			t.a = u
		},
		"./src/reddit/components/ModerationPrompts/Prompt.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return b
			}));
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/react/index.js"),
				i = o.n(n),
				r = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = o("./src/reddit/actions/post.ts"),
				c = o("./src/reddit/actions/reportFlow/index.ts"),
				l = o("./src/reddit/components/Popup/index.tsx"),
				m = o("./src/reddit/components/Popup/Button.tsx"),
				p = o("./src/reddit/helpers/trackers/reportPrompt.ts"),
				u = o("./src/reddit/hooks/useTracking.ts"),
				h = o("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function b(e) {
				const {
					subredditName: t,
					post: o,
					isOverlay: b
				} = e, [f, C] = Object(n.useState)(!0), x = Object(h.b)(o.id, b), g = Object(r.d)(), v = Object(u.a)(), O = Object(h.a)(o, b), I = (e, s) => v(Object(p.a)(t, o.id, e, s));
				Object(n.useEffect)(() => {
					O && I("modal", "show")
				}, [O]);
				if (!O || !f) return null;
				const S = s.fbt._("Help r/{subredditName} mods", [s.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return i.a.createElement(l.a, {
					id: x,
					title: S,
					onClose: () => {
						C(!1), I("close", "click"), g(Object(d.A)()), g(Object(d.L)({
							[o.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						g(Object(d.A)())
					}
				}, i.a.createElement("p", null, s.fbt._("Report this post if it's breaking {=Reddit} or {=community} rules.", [s.fbt._param("=Reddit", i.a.createElement("a", {
					href: "https://www.redditinc.com/policies/content-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, s.fbt._("Reddit", null, {
					hk: "4g8g4O"
				}))), s.fbt._param("=community", i.a.createElement(a.a, {
					to: `/r/${t}/about/rules`,
					target: "_blank"
				}, s.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), i.a.createElement(m.a, {
					onClick: () => (C(!1), I("report", "click"), void g(Object(c.c)(o.id)))
				}, s.fbt._("Report", null, {
					hk: "4oVcnd"
				})))
			}
		},
		"./src/reddit/components/ModerationPrompts/Survey.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return f
			}));
			var s, n = o("./node_modules/fbt/lib/FbtPublic.js"),
				i = o("./node_modules/react/index.js"),
				r = o.n(i),
				a = o("./node_modules/react-redux/es/index.js"),
				d = o("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = o("./src/reddit/actions/post.ts"),
				l = o("./src/reddit/actions/reportFlow/index.ts"),
				m = o("./src/reddit/components/Popup/index.tsx"),
				p = o("./src/reddit/components/Popup/Button.tsx"),
				u = o("./src/reddit/helpers/trackers/reportPrompt.ts"),
				h = o("./src/reddit/hooks/useTracking.ts"),
				b = o("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function f(e) {
				const {
					subredditName: t,
					post: o,
					isOverlay: f
				} = e, [C, x] = Object(i.useState)(s.Survey), g = Object(b.b)(o.id, f), v = Object(a.d)(), O = Object(h.a)(), I = Object(b.a)(o, f), S = (e, s) => O(Object(u.b)(t, o.id, e, s));
				Object(i.useEffect)(() => {
					I && S("modal", "show")
				}, [I]);
				const k = e => {
					x(s.Closed), S("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), v(Object(l.c)(o.id, void 0, e))
				};
				if (!I) return null;
				let E = null;
				const _ = {
					id: g,
					title: n.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						x(s.Closed), S("close", "click"), v(Object(c.A)())
					},
					onClickOutside: () => {
						v(Object(c.A)())
					}
				};
				switch (C) {
					case s.Survey:
						E = r.a.createElement(m.a, _, r.a.createElement("p", null, n.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [n.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), r.a.createElement(p.a, {
							onClick: () => {
								x(s.OffTopic), S("off_topic", "click")
							}
						}, n.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), r.a.createElement(p.a, {
							onClick: () => {
								x(s.DontLike), S("dont_like", "click")
							}
						}, n.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), r.a.createElement(p.a, {
							onClick: () => {
								x(s.BreaksRules), S("breaks_rules", "click")
							}
						}, n.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case s.OffTopic:
						E = r.a.createElement(m.a, _, r.a.createElement("p", null, n.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case s.DontLike:
						E = r.a.createElement(m.a, _, r.a.createElement("p", null, n.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case s.BreaksRules:
						E = r.a.createElement(m.a, _, r.a.createElement("p", null, n.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [n.fbt._param("=Reddit", r.a.createElement("a", {
							href: "https://www.redditinc.com/policies/content-policy",
							target: "_blank",
							rel: "noopener noreferrer"
						}, n.fbt._("Reddit", null, {
							hk: "1amvzD"
						}))), n.fbt._param("=community", r.a.createElement(d.a, {
							to: `/r/${t}/about/rules`,
							target: "_blank"
						}, n.fbt._("community", null, {
							hk: "2TnSrt"
						})))], {
							hk: "1mXxTX"
						})), r.a.createElement(p.a, {
							onClick: () => k("site")
						}, n.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), r.a.createElement(p.a, {
							onClick: () => k("community")
						}, n.fbt._("It breaks community rules", null, {
							hk: "3XbHan"
						})));
						break;
					case s.Closed:
				}
				return E
			}! function(e) {
				e[e.Survey = 0] = "Survey", e[e.OffTopic = 1] = "OffTopic", e[e.DontLike = 2] = "DontLike", e[e.BreaksRules = 3] = "BreaksRules", e[e.Closed = 4] = "Closed"
			}(s || (s = {}))
		},
		"./src/reddit/components/Popup/Button.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./src/reddit/components/Popup/index.m.less"),
				r = o.n(i);

			function a(e) {
				return n.a.createElement("button", {
					className: r.a.popupButton,
					onClick: e.onClick
				}, e.children)
			}
		},
		"./src/reddit/components/Popup/index.m.less": function(e, t, o) {
			e.exports = {
				popup: "t5ViKDVyrrlzRbCpXvJu7",
				header: "preWelIDv3a0Fgtd5_QjN",
				title: "_3Xw5NRiOh-SAcOXIUMIm-l",
				closeButton: "_3oee1_5V2jOvP4BaO2LCQu",
				popupButton: "_3nddrgCBXpzDP5XYzrH3ZY"
			}
		},
		"./src/reddit/components/Popup/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return l
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./node_modules/uuid/v4.js"),
				r = o.n(i),
				a = o("./src/reddit/hooks/useOnClickOutside.ts"),
				d = o("./src/reddit/components/Popup/index.m.less"),
				c = o.n(d);

			function l(e) {
				const {
					id: t = r()(),
					onClose: o,
					onClickOutside: s,
					title: i,
					children: d
				} = e;
				return Object(a.a)(t, s), n.a.createElement("div", {
					id: t,
					"aria-modal": !0,
					className: c.a.popup,
					role: "dialog",
					tabIndex: -1
				}, n.a.createElement("h3", {
					className: c.a.header
				}, n.a.createElement("span", {
					className: c.a.title
				}, i), n.a.createElement("button", {
					className: c.a.closeButton,
					onClick: o
				}, "✕")), d)
			}
		},
		"./src/reddit/components/PostLeftRail/index.m.less": function(e, t, o) {
			e.exports = {
				postLeftRail: "_23h0-EcaBUorIHC-JZyh6J"
			}
		},
		"./src/reddit/components/PostLeftRail/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return l
			})), o.d(t, "c", (function() {
				return m
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./src/lib/classNames/index.ts"),
				r = o("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = o("./src/reddit/constants/colors.ts"),
				d = o("./src/reddit/components/PostLeftRail/index.m.less"),
				c = o.n(d);
			const l = 40,
				m = e => e.isRemoved ? a.b.removed : e.isReported ? a.b.reported : "transparent",
				p = Object(r.a)(e => {
					const t = m(e),
						o = {
							width: `${l}px`,
							borderLeft: `4px solid ${t}`
						};
					return n.a.createElement("div", {
						className: Object(i.a)(c.a.postLeftRail, e.className),
						style: e.withoutComputedStyles ? {} : o
					}, e.children)
				});
			t.b = p
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, o) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				r = o("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				a = o("./src/reddit/components/PopupPortal/index.tsx"),
				d = o("./src/reddit/components/PostLeftRail/index.tsx"),
				c = o("./src/reddit/components/VerticalVotes/index.tsx"),
				l = o("./src/reddit/controls/Checkbox/index.tsx"),
				m = o("./src/reddit/helpers/isPost.ts"),
				p = o("./src/reddit/helpers/showReportIndicator/index.ts"),
				u = o("./src/reddit/components/PostRailAndVotes/index.m.less"),
				h = o.n(u);
			t.a = e => {
				const {
					model: t,
					handleVote: o,
					showBulkActionCheckbox: s = !1,
					isCheckboxSelected: u = !1,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: f,
					redditStyle: C,
					subreddit: x,
					isOverlay: g,
					isActionBarAnimationEnabled: v,
					postId: O,
					isForceSelected: I
				} = e, S = `upvote-button-${t.id}${g?"-overlay":""}`, {
					moderationPrompt: k
				} = t;
				return n.a.createElement(d.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(p.a)(t),
					isSponsored: !!Object(m.b)(t) && t.isSponsored,
					redditStyle: C
				}, s && n.a.createElement(l.a, {
					isCheckboxSelected: u,
					toggleCheckbox: b
				}), n.a.createElement(c.a, {
					flairStyleTemplate: f,
					model: t,
					onVoteClick: o,
					redditStyle: C,
					upvoteTooltipId: S,
					isActionBarAnimationEnabled: v,
					postId: O,
					isForceSelected: I,
					scoreClassName: h.a.score
				}), k && n.a.createElement(a.b, {
					rightOf: S
				}, "survey" === k ? n.a.createElement(r.a, {
					post: t,
					subredditName: x.name,
					isOverlay: !!g
				}) : n.a.createElement(i.a, {
					post: t,
					subredditName: x.name,
					isOverlay: !!g
				})))
			}
		},
		"./src/reddit/components/Scroller/Simple.m.less": function(e, t, o) {
			e.exports = {
				Hidden: "wwHbgRV0ZXGp5CHHlpo5u",
				hidden: "wwHbgRV0ZXGp5CHHlpo5u"
			}
		},
		"./src/reddit/components/Scroller/Simple.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return K
			}));
			var s = o("./node_modules/lodash/debounce.js"),
				n = o.n(s),
				i = o("./node_modules/lodash/isNil.js"),
				r = o.n(i),
				a = o("./node_modules/react/index.js"),
				d = o.n(a),
				c = o("./node_modules/react-dom/index.js"),
				l = o("./node_modules/react-redux/es/index.js"),
				m = o("./node_modules/request-idle-callback/index.js"),
				p = o("./node_modules/reselect/es/index.js"),
				u = o("./src/lib/constants/index.ts"),
				h = o("./src/lib/fastdom/index.ts"),
				b = o("./node_modules/lodash/throttle.js"),
				f = o.n(b);
			const C = 500,
				x = 1e3,
				g = 40;
			var v;
			! function(e) {
				e.Max10 = "0-10", e.Max20 = "11-20", e.Max30 = "21-30", e.Max40 = "31-40", e.Max50 = "41-50", e.Max60 = "51-60"
			}(v || (v = {}));
			const O = () => ({
					[v.Max10]: 0,
					[v.Max20]: 0,
					[v.Max30]: 0,
					[v.Max40]: 0,
					[v.Max50]: 0,
					[v.Max60]: 0
				}),
				I = [v.Max10, v.Max20, v.Max30, v.Max40, v.Max50, v.Max60],
				S = e => ({
					eventHandler: e
				});

			function k({
				fn: e,
				subscriber: t,
				timeout: o
			}) {
				const s = [];
				let n, i, r;
				const a = () => {
						if (s.length < g) return;
						const e = O(),
							o = Math.min(x, s.length),
							n = s.splice(0, o);
						s.splice(0, s.length);
						const i = n[o - 1] - n[0];
						for (let t = n.shift(); n.length > 0; t = n.shift()) {
							const o = n[0] - t,
								s = Math.min(60, Math.ceil(1e3 / o));
							e[s <= 10 ? v.Max10 : 60 === s ? v.Max60 : I[Math.ceil(s / 10) - 1]] += o
						}
						const r = O();
						for (const t in e) r[t] = e[t] / i;
						t(r)
					},
					d = () => {
						void 0 !== r && (window.clearTimeout(r), r = void 0)
					},
					c = () => {
						void 0 !== n && (cancelAnimationFrame(n), n = void 0), void 0 !== i && (window.clearInterval(i), i = void 0), d(), a()
					},
					l = () => {
						n = requestAnimationFrame(() => {
							s.push(performance.now()), l()
						})
					},
					m = f()(() => {
						d(), r = window.setTimeout(c, o)
					}, u.G);
				return {
					cleanup: c,
					eventHandler: t => {
						void 0 === i ? (l(), m(), i = window.setInterval(a, C)) : m(), e(t)
					}
				}
			}
			var E = o("./src/lib/scheduler/index.ts"),
				_ = o("./src/lib/domUtils/index.ts"),
				T = o("./src/lib/LinkedListMap/index.ts");
			const w = (e, t) => e < 0 ? t + e : e % t;
			class R {
				constructor(e) {
					this.head = 0, this.size = 0, this.maxSize = e, this.items = new Array(e)
				}
				push(e) {
					return this.items[this.head] = e, this.head = w(this.head + 1, this.maxSize), this.size < this.maxSize && this.size++, this
				}
				pop() {
					if (this.size > 0) {
						const e = w(this.head - 1, this.maxSize),
							t = this.items[e];
						return this.items[e] = void 0, this.head = e, this.size--, t
					}
				}
				forEach(e) {
					let t = this.size < this.maxSize ? w(this.head - this.size, this.maxSize) : this.head;
					for (let o = 0; o < this.size; o++) e(this.items[t], o, this.size), t = (t + 1) % this.maxSize
				}
				map(e) {
					const t = new Array(this.size);
					return this.forEach((o, s, n) => {
						t[s] = e(o, s, n)
					}), t
				}
				getEntries() {
					const e = new Array(this.size);
					return this.forEach((t, o) => {
						e[o] = t
					}), e
				}
				clear() {
					const e = this.size;
					for (let t = 0; t < e; t++) this.pop()
				}
			}
			var y = o("./src/reddit/components/Scroller/getDocumentTop.ts");
			class j {
				constructor({
					top: e,
					height: t,
					heightWithSuffix: o
				}) {
					this.height = t, this.heightWithSuffix = o, this.top = e, this.bottom = this.top + this.height
				}
				contains(e) {
					return !(e.top <= this.top || e.bottom >= this.bottom)
				}
				intersects(e) {
					return !(e.bottom <= this.top || e.top >= this.bottom)
				}
				intersectsBorder(e) {
					return e.top <= this.top && e.bottom >= this.top || e.bottom >= this.bottom && e.top <= this.bottom
				}
				containsTop(e) {
					return !(e.top < this.top || e.top > this.bottom)
				}
				isAbove(e) {
					return e.top > this.bottom
				}
				isBelow(e) {
					return e.bottom < this.top
				}
			}
			const P = ({
				buffer: e,
				container: t
			} = {}) => {
				const o = r()(e) ? 1e3 : e;
				if ("undefined" != typeof window && t) {
					const e = t === document ? Object(y.a)() : t.scrollTop;
					return new j({
						top: e,
						height: window.innerHeight
					})
				}
				return new j({
					top: 0,
					height: o
				})
			};
			var M = o("./src/reddit/components/ResizeSensor/index.tsx"),
				A = o("./src/reddit/constants/componentSizes.ts"),
				N = o("./src/reddit/constants/elementClassNames.ts"),
				L = o("./src/reddit/contexts/InsideOverlay.tsx"),
				D = o("./src/reddit/selectors/platform.ts"),
				F = o("./src/telemetry/helpers/sendEvent.ts"),
				V = o("./src/telemetry/helpers/sendTiming.ts"),
				B = o("./src/reddit/components/Scroller/Simple.m.less"),
				H = o.n(B);
			const U = A.g,
				W = 5 * u.G,
				z = 3,
				G = Object(p.c)({
					isOverlayOpen: D.h
				}),
				q = Object(l.b)(G),
				Q = {};

			function K(e) {
				return e === document
			}

			function X(e) {
				let t = 0;
				do {
					t += e.offsetTop || 0, e = e.offsetParent
				} while (e);
				return t
			}
			const J = 10,
				Z = .9,
				Y = .9,
				$ = 1.8,
				ee = 5,
				te = 1500,
				oe = 2 * u.G,
				se = 400,
				ne = 8,
				ie = 5 * u.G,
				re = 30,
				ae = "object" == typeof performance && "function" == typeof performance.now,
				de = () => ae ? performance.now() : Date.now();

			function ce(e, t) {
				return T.a.fromArray(e.children.map((e, o) => {
					const s = t && t.get(e.id);
					return s ? (s.isFocusable = !!e.isFocusable, s.trackOnEnteredViewport = e.trackOnEnteredViewport, s.trackOnExitedViewport = e.trackOnExitedViewport, s) : {
						el: null,
						id: e.id,
						index: o,
						isFocusable: !!e.isFocusable,
						itemRef: void 0,
						focused: !1,
						loaded: !t && o < ee,
						rectangle: void 0,
						trackOnEnteredViewport: e.trackOnEnteredViewport,
						trackOnExitedViewport: e.trackOnExitedViewport
					}
				}), "id")
			}
			class le extends d.a.Component {
				constructor(e) {
					super(e), this.lastRenderPosition = 0, this.lastScrollTime = -1, this.resetCanFocusTimer = -1, this.unmountItemsIdleId = null, this.scrollingQuickly = !1, this.visibleChildrenCount = 0, this.isRenderableChildrenStateChangePending = !1, this.parentOffsetTop = void 0, this.containerOffsetTop = void 0, this.distanceToTop = void 0, this.measurementsInvalid = !1, this.viewport = void 0, this.mountableViewport = void 0, this.needsToPauseViewportItems = !0, this.updateRenderableChildrenWhenIdleHandle = null, this.requestUpdateWhenIdleCallbackHandle = null, this.pendingScollHandlerRead = null, this.pendingResizeHandlerRead = null, this.renderableViewport = void 0, this.sendFPSData = e => {
						const t = {
							name: this.props.trackingName
						};
						F.b.enqueue(new E.a({
							args: [e, t],
							cb: (e, t) => Object(V.a)(u.l.Redesign, {
								data: e,
								meta: t,
								type: "scrollfps"
							})
						}))
					}, this.getVisibleChildren = () => {
						let e = 0;
						const t = te + (this.props.viewportTopPadding ? this.props.viewportTopPadding : 0),
							o = [];
						let s = this.nextVisibleChildrenIndex;
						for (; e < t && s < this.props.children.length;) {
							const t = this.props.children[s];
							o.push(t), e += t.estHeight, s++
						}
						return this.visibleChildrenCount = o.length, o
					}, this.setRenderableChildrenIndexIncrement = () => {
						if (this.props.children[0]) {
							const e = this.props.children[0].estHeight;
							this.renderableChildrenIndexIncrement = Math.min(Math.ceil(se / e), ne)
						} else this.renderableChildrenIndexIncrement = ne
					}, this.updateRenderableChildrenWhenIdle = () => {
						this.cancelPopulateRenderableChildrenWhenIdle(), this.hasScrolledWithinThreshold() || (this.timeoutForUpdateIdleCallback = ie, Object(m.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle), this.requestUpdateWhenIdleCallbackHandle = Object(m.requestIdleCallback)(() => {
							const e = Math.ceil(this.renderableChildrenIndexIncrement / 2);
							this.populateRenderableChildrenFromProps(!1, e)
						})), this.state.renderableChildren.length < this.props.children.length && this.schedulePopulateRenderableChildrenWhenIdle()
					}, this.hasScrolledWithinThreshold = () => !!this.lastScrollTime && de() - this.lastScrollTime < oe, this.populateRenderableChildrenFromProps = (e = !1, t = this.renderableChildrenIndexIncrement, o) => {
						const s = o || this.props.children;
						if (this.state.renderableChildren.length < s.length || e)
							if (this.hasScrolledWithinThreshold()) h.a.read(() => {
								clearTimeout(this.updateRenderableChildrenHandle), this.updateRenderableChildrenHandle = setTimeout(() => {
									this.populateRenderableChildrenFromProps(e, this.renderableChildrenIndexIncrement, o ? s : void 0)
								}, oe)
							});
							else {
								this.nextVisibleChildrenIndex + t <= s.length ? this.nextVisibleChildrenIndex += t : this.nextVisibleChildrenIndex = s.length;
								const e = s.slice(0, this.nextVisibleChildrenIndex);
								e.length && (this.lastVisibleElId = e[e.length - 1].id), h.a.write(() => {
									this.setState({
										renderableChildren: e
									})
								}), this.isRenderableChildrenStateChangePending = !0
							}
					}, this.lastElementIsAboutToBeVisible = () => {
						if (this.lastVisibleEl) {
							if (this.lastVisibleEl.getBoundingClientRect().top < window.innerHeight + se) return !0
						}
						return !1
					}, this.getRenderableChildrenIndexIncrement = (e = re) => {
						let t = 0,
							o = this.state.renderableChildren.length;
						for (; t < e && o < this.props.children.length;) t += this.props.children[o].estHeight, o++;
						const s = o - this.state.renderableChildren.length;
						return Math.max(this.renderableChildrenIndexIncrement, s)
					}, this.schedulePopulateRenderableChildrenWhenIdle = () => {
						!this.props.isOverlayOpen || this.props.isOverlay ? this.updateRenderableChildrenWhenIdleHandle = setTimeout(() => {
							this.updateRenderableChildrenWhenIdle()
						}, this.timeoutForUpdateIdleCallback) : this.cancelPopulateRenderableChildrenWhenIdle()
					}, this.cancelPopulateRenderableChildrenWhenIdle = () => {
						clearTimeout(this.updateRenderableChildrenWhenIdleHandle), Object(m.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle)
					}, this.callOnScrollForItemsChanged = n()(() => {
						this.handleScroll()
					}, u.G), this.pauseAllElements = () => {
						const e = this.getItemsInViewportWithFilter(this.loadedChildRefFilter),
							t = [];
						e.forEach(e => {
							const {
								itemRef: o
							} = e;
							o && (e.focused = !1, t.push(o.pauseContent))
						}), h.a.write(() => {
							t.forEach(e => e())
						})
					}, this.elementIsVisible = e => !!this.viewport && this.viewport.intersects(e), this.getItemsInViewportWithFilter = e => {
						this.updateViewportInfo();
						const t = new T.a("id");
						return this.state.renderableChildren.forEach(o => {
							const s = this.childMap.get(o.id);
							s && e(s) && t.push(s)
						}), t
					}, this.visibleChildRefFilter = e => {
						const t = this.getChildRectangle(e);
						return t && this.elementIsVisible(t) || !1
					}, this.loadedChildRefFilter = e => e.loaded, this.resetScrollFramerateAndFocus = () => {
						this.scrollContainer && (this.pixelsPerMSRing.clear(), this.lastScrollTime = -1, this.needsToPauseViewportItems = !0, null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(m.requestIdleCallback)(this.unmountItemsWhileIdle)), setTimeout(this.handleScroll, u.G))
					}, this.setContainerRef = e => {
						this.containerRef = e, this.props.innerRef && this.props.innerRef(e)
					}, this.getChildRectangle = e => {
						const {
							el: t
						} = e;
						if (!t) return;
						if (e.rectangle && !this.measurementsInvalid) return e.rectangle;
						if (void 0 === this.parentOffsetTop) {
							const e = t.offsetParent;
							this.parentOffsetTop = (null == e ? void 0 : e.offsetTop) || 0;
							const o = (null == e ? void 0 : e.getBoundingClientRect().top) || 0;
							this.distanceToTop = o + this.getScrollTop()
						}
						const o = t.offsetTop + this.parentOffsetTop,
							s = t.getBoundingClientRect().height,
							n = new j({
								top: o,
								height: s,
								heightWithSuffix: `${s}px`
							});
						return e.rectangle = n, n
					}, this.handleResize = e => {
						this.fpsMeter && this.fpsMeter.eventHandler(e);
						for (const t in this.hiddenChildren) this.remeasureWhenShown[t] = !0;
						this.measurementsInvalid = !0, this.callOnScrollForItemsChanged()
					}, this.getTotalOffsetTop = () => this.containerRef ? X(this.containerRef) : 0, this.handleContentContainerResize = n()(() => {
						this.pendingResizeHandlerRead || (this.pendingResizeHandlerRead = h.a.read(() => {
							const e = this.getTotalOffsetTop();
							e !== this.containerOffsetTop && (this.containerOffsetTop = e, this.handleResize()), this.pendingResizeHandlerRead = null
						}))
					}, u.G), this.handleScroll = () => {
						this.pendingScollHandlerRead || (this.pendingScollHandlerRead = h.a.read(() => {
							if (clearTimeout(this.resetCanFocusTimer), this.cancelPopulateRenderableChildrenWhenIdle(), Object(_.b)() || !this.scrollContainer) return void(this.pendingScollHandlerRead = null);
							this.updateScrollMetrics();
							const e = this.getAveragePixelsPerMilliSecond(),
								t = e < Z,
								o = e < Y,
								s = e < $;
							if (this.scrollContainer && !this.loadMoreFired && this.props.onLoadMore) {
								let e = !1;
								if (void 0 !== this.props.loadMoreToken && void 0 !== this.viewport && this.nextVisibleChildrenIndex >= this.props.children.length) {
									const t = this.getTotalOffsetTop();
									e = !!this.containerRef && this.containerRef.offsetHeight + t - this.viewport.bottom <= this.viewport.height
								}
								if (e) {
									const {
										onLoadMore: e
									} = this.props;
									setTimeout(e), this.loadMoreFired = !0
								}
							}
							this.populateRenderableChildrenIfLastChildIsVisible();
							const n = new T.a("id");
							let i, r;
							const a = [];
							this.state.renderableChildren.forEach(e => {
								const d = this.childMap.get(e.id);
								let c;
								if (d && d.el) {
									if (!(c = this.getChildRectangle(d))) return;
									const {
										id: e
									} = d;
									this.elementIsHideable(c) ? void 0 === this.hiddenChildren[e] && (this.childrenToHide[e] = c.heightWithSuffix) : void 0 !== this.hiddenChildren[e] && (this.childrenToShow[e] = !0)
								}
								if (!d || !d.el || !d.rectangle) return void(this.measurementsInvalid && d && this.getChildRectangle(d));
								const {
									id: l,
									itemRef: m,
									trackOnEnteredViewport: p
								} = d, u = !!this.itemsInViewport.get(l);
								if (this.elementIsUnmountable(c)) m && u && d.loaded && d.isFocusable && a.push(m.pauseContent);
								else if (m && this.loadItemIfPossible(d, m, t, o, s, a), this.elementIsVisible(c)) {
									n.push(d), !u && p && F.b.enqueue(new E.a({
										cb: p,
										args: void 0
									}));
									const e = this.elementIsFocused(c);
									e && !r && (r = d.id), t && d.isFocusable && !i && e ? (i = d.id, d.focused || (d.focused = !0, m && a.push(m.focusContent))) : d.loaded && d.isFocusable && (d.focused || this.needsToPauseViewportItems) && (d.focused = !1, m && a.push(m.pauseContent))
								} else u && d.loaded && d.isFocusable && (d.focused = !1, m && a.push(m.stopContent))
							}), h.a.write(() => {
								a.forEach(e => e()), this.props.enableElementHiding && this.hideOrShowChildren()
							}), this.itemsInViewport.forEach(({
								id: e,
								trackOnExitedViewport: t
							}) => {
								t && !n.has(e) && F.b.enqueue(new E.a({
									cb: t,
									args: [!1]
								}))
							}), this.itemsInViewport = n, this.canFocusItems = t, this.focusedChild = i, this.primaryChild = r, this.measurementsInvalid = !1, this.needsToPauseViewportItems = !1, t ? null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(m.requestIdleCallback)(this.unmountItemsWhileIdle)) : (this.resetCanFocusTimer = setTimeout(this.resetScrollFramerateAndFocus, W), null !== this.unmountItemsIdleId && (Object(m.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)), this.props.onScroll && this.props.onScroll({
								getVisibleItemsInViewport: () => this.getItemsInViewportWithFilter(this.visibleChildRefFilter),
								primaryChild: this.primaryChild ? this.childMap.get(this.primaryChild) : void 0
							}), this.timeoutForUpdateIdleCallback = 4 * ie, this.schedulePopulateRenderableChildrenWhenIdle(), this.pendingScollHandlerRead = null
						}))
					}, this.unmountItemsWhileIdle = e => {
						if (!this.scrollContainer) return;
						const t = [];
						if (this.state.renderableChildren.forEach(e => {
								const o = this.childMap.get(e.id);
								if (!o || !o.el || !o.itemRef) return;
								const s = this.getChildRectangle(o);
								s && this.elementIsUnmountable(s) && o.loaded && t.push(o)
							}), !t.length) return;
						const o = Math.min(Math.ceil(e.timeRemaining() / z), t.length),
							s = [];
						for (let n = 0; n < o; n++) {
							const e = t[n];
							s.push(e.itemRef.unmountContent), e.loaded = !1, e.focused = !1
						}
						Object(c.unstable_batchedUpdates)(() => {
							this.scrollContainer && s.forEach(e => e())
						}), o < t.length ? this.unmountItemsIdleId = Object(m.requestIdleCallback)(this.unmountItemsWhileIdle) : this.unmountItemsIdleId = null
					}, this.hideOrShowChildren = n()(() => {
						for (const e in this.childrenToHide) {
							const t = this.childrenToHide[e];
							void 0 !== t && (this.hideChild(e, t), this.childrenToHide[e] = void 0)
						}
						for (const e in this.childrenToShow) void 0 !== this.childrenToShow[e] && (this.showChild(e), this.childrenToShow[e] = void 0)
					}, u.G), this.hideChild = (e, t) => {
						const o = this.childMap.get(e);
						if (!o || !o.el) return;
						const s = o.el.firstChild;
						s && (t !== o.el.style.height && (o.el.style.height = t), s.classList.add(H.a.Hidden), this.hiddenChildren[e] = t, o.loaded && h.a.write(() => {
							o.itemRef && (o.loaded = !1, o.focused = !1, o.itemRef.unmountContent())
						}))
					}, this.showChild = e => {
						const t = this.childMap.get(e);
						if (!t || !t.el) return;
						const o = t.el.firstChild;
						o && (this.remeasureWhenShown[t.id] && (this.measurementsInvalid = !0, this.remeasureWhenShown[t.id] = void 0), t.el.style.height = "", o.classList.remove(H.a.Hidden), void 0 !== this.hiddenChildren[e] && (this.hiddenChildren[e] = void 0))
					}, this.getStylesForOuterWrapper = e => {
						if (void 0 !== this.hiddenChildren[e]) return {
							height: this.hiddenChildren[e]
						}
					}, this.remeasureChild = e => {
						this.measurementsInvalid = !0
					}, this.scrollToChild = (e, t) => {
						this.measurementsInvalid = !0, h.a.read(() => {
							const o = this.childMap.get(e);
							if (o && o.el && this.scrollContainer) {
								if (o.rectangle = void 0, t && this.isScrollChildTopVisible(e)) return;
								const s = this.getScrollTop() + o.el.getBoundingClientRect().top - (this.props.scrollToChildPadding || 0) - (this.props.viewportTopPadding || 0);
								setTimeout(() => {
									this.scrollContainer && (Object(_.c)(this.scrollContainer, s), this.callOnScrollForItemsChanged())
								}, u.G)
							}
						})
					}, this.isScrollChildTopVisible = e => {
						const t = this.childMap.get(e);
						if (t && t.el && this.scrollContainer) {
							const {
								scrollToChildPadding: e = 0,
								viewportTopPadding: o = 0
							} = this.props, s = window.innerHeight - o, {
								top: n
							} = t.el.getBoundingClientRect();
							return n >= o + e && n < s
						}
						return !1
					}, this.childMap = ce(e), this.containerRef = null, this.itemsInViewport = new T.a("id"), this.loadMoreFired = !1, this.pixelsPerMSRing = new R(J), this.wrapperRefFNs = {}, this.childRefFns = {}, this.childrenToHide = {}, this.childrenToShow = {}, this.canFocusItems = !0, this.focusedChild = void 0, this.hiddenChildren = {}, this.nextVisibleChildrenIndex = 0, this.lastVisibleEl = null, this.lastVisibleElId = null, this.remeasureWhenShown = {}, this.timeoutForUpdateIdleCallback = ie;
					const t = this.getVisibleChildren();
					t.length && (this.lastVisibleElId = t[t.length - 1].id), this.nextVisibleChildrenIndex = t.length, this.updateRenderableChildrenHandle = null, this.state = {
						renderableChildren: t
					}, this.setRenderableChildrenIndexIncrement(), this.validateScrollPreservationProps(e), this.validateLoadMoreProps(e)
				}
				populateRenderableChildrenIfLastChildIsVisible() {
					if (this.isRenderableChildrenStateChangePending) return;
					this.state.renderableChildren.length < this.props.children.length && h.a.read(() => {
						if (!this.isRenderableChildrenStateChangePending && this.lastElementIsAboutToBeVisible()) {
							const e = this.getRenderableChildrenIndexIncrement();
							this.populateRenderableChildrenFromProps(!1, e)
						}
					})
				}
				setupScrollHandler() {
					this.fpsMeter = this.props.trackingName ? k({
						fn: this.handleScroll,
						subscriber: this.sendFPSData,
						timeout: W
					}) : S(this.handleScroll), this.scrollContainer && this.scrollContainer.addEventListener("scroll", this.fpsMeter.eventHandler), window.addEventListener("resize", this.handleResize)
				}
				cleanupScrollHandler() {
					this.fpsMeter && ("function" == typeof this.fpsMeter.cleanup && this.fpsMeter.cleanup(), this.scrollContainer && this.scrollContainer.removeEventListener("scroll", this.fpsMeter.eventHandler), window.removeEventListener("resize", this.handleResize), this.pendingScollHandlerRead && (h.a.clear(this.pendingScollHandlerRead), this.pendingScollHandlerRead = null), this.pendingResizeHandlerRead && (h.a.clear(this.pendingResizeHandlerRead), this.pendingResizeHandlerRead = null))
				}
				componentDidMount() {
					this.props.getContainer ? this.scrollContainer = this.props.getContainer() || document : this.scrollContainer = document, this.props.onScroll && this.props.onScroll({
						getVisibleItemsInViewport: () => this.getItemsInViewportWithFilter(this.visibleChildRefFilter),
						primaryChild: void 0
					}), this.props.disableScrollCache && !this.props.preventScrollOnMount && Object(_.c)(this.scrollContainer, 0), this.setupScrollHandler(), h.a.write(() => {
						if (!this.props.disableScrollCache) {
							const e = this.getCacheKey(),
								t = Q[e];
							r()(t) || (Q[e] = void 0, this.scrollContainer && Object(_.c)(this.scrollContainer, t))
						}
						this.callOnScrollForItemsChanged(), this.props.onLastVisibleChildRendered && this.props.onLastVisibleChildRendered()
					}), h.a.read(() => {
						this.containerOffsetTop = this.getTotalOffsetTop()
					}), this.schedulePopulateRenderableChildrenWhenIdle()
				}
				componentDidUpdate(e) {
					if (this.isRenderableChildrenStateChangePending = !1, this.measurementsInvalid = !0, this.scrollTargetId && (this.scrollToChild(this.scrollTargetId, !1), this.scrollTargetId = void 0), this.didLayoutAloneChange(e, this.props)) {
						this.callExitedViewportForUnmount(), this.focusedChild = void 0, this.childrenToShow = {}, this.childrenToHide = {}, this.hiddenChildren = {}, this.childMap.forEach(e => {
							e.loaded = !1, e.focused = !1
						}), this.setRenderableChildrenIndexIncrement(), this.populateRenderableChildrenFromProps(!0), this.callOnScrollForItemsChanged();
						const e = this.getVisibleChildren();
						this.visibleChildrenCount = e.length, this.schedulePopulateRenderableChildrenWhenIdle()
					}
					this.populateRenderableChildrenIfLastChildIsVisible(), e.trackingName !== this.props.trackingName && (this.cleanupScrollHandler(), this.setupScrollHandler())
				}
				shouldComponentUpdate(e) {
					return e.isOverlayOpen === this.props.isOverlayOpen
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.validateScrollPreservationProps(e) && this.validateLoadMoreProps(e) && this.didLayoutAloneChange(this.props, e) && this.hasBeenScrolled() && this.handleScroll(), e.loadMoreToken !== this.props.loadMoreToken && (this.loadMoreFired = !1, this.loadMoreEl = null), e.isOverlayOpen !== this.props.isOverlayOpen && e.isOverlayOpen && !this.props.isOverlay && h.a.read(this.pauseAllElements), e.isOverlayOpen === this.props.isOverlayOpen || e.isOverlayOpen || this.props.isOverlay || this.resetScrollFramerateAndFocus(), this.childMap = ce(e, this.childMap);
					const t = e.children.length < this.props.children.length,
						o = e.children.length === this.props.children.length && e.children.some((e, t) => e.id !== this.props.children[t].id);
					this.populateRenderableChildrenFromProps(t || o, this.renderableChildrenIndexIncrement, e.children), this.schedulePopulateRenderableChildrenWhenIdle()
				}
				componentWillUnmount() {
					if (this.callExitedViewportForUnmount(), this.cleanupScrollHandler(), clearTimeout(this.updateRenderableChildrenHandle), this.cancelPopulateRenderableChildrenWhenIdle(), this.scrollContainer && !this.props.disableScrollCache) {
						const e = this.getCacheKey();
						Q[e] = this.lastRenderPosition
					}
					this.childMap = new T.a("id"), this.itemsInViewport = new T.a("id"), this.wrapperRefFNs = {}, this.childRefFns = {}, this.containerRef = null, this.loadMoreEl = void 0, this.scrollContainer = void 0, this.unmountItemsIdleId && (Object(m.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)
				}
				didLayoutAloneChange(e, t) {
					return "string" == typeof e.layoutKey && "string" == typeof t.layoutKey && e.layoutKey !== t.layoutKey && "string" == typeof e.dataKey && "string" == typeof t.layoutKey && e.dataKey === t.dataKey
				}
				elementIsFocused(e) {
					if (!this.viewport) return !1;
					const t = this.distanceToTop ? this.distanceToTop : 0,
						o = this.parentOffsetTop ? this.parentOffsetTop : 0,
						s = e.bottom + t - o,
						n = e.top + t - o,
						i = Math.min(this.viewport.bottom, s) - Math.max(this.viewport.top, n),
						r = i / e.height,
						a = i / this.viewport.height;
					return r > .75 || a > .9
				}
				getFirstItemInViewport() {
					for (const {
							id: e
						} of this.props.children) {
						const t = this.childMap.get(e);
						if (t) {
							const e = this.getChildRectangle(t);
							if (e && this.elementIsVisible(e)) return t
						}
					}
				}
				elementIsUnmountable(e) {
					return !!this.mountableViewport && !this.mountableViewport.intersects(e)
				}
				elementIsHideable(e) {
					return !!this.renderableViewport && !this.renderableViewport.intersects(e)
				}
				getCacheKey() {
					return this.props.children.map(e => e.id).join("-")
				}
				getScrollTop() {
					return this.scrollContainer ? K(this.scrollContainer) ? Object(y.a)() : this.scrollContainer.scrollTop : 0
				}
				updateViewportInfo() {
					if (this.scrollContainer) {
						this.viewport = P({
							buffer: 0,
							container: this.scrollContainer
						});
						const {
							viewportTopPadding: e = 0
						} = this.props, t = window.innerHeight - e, o = 2 * t;
						this.mountableViewport = new j({
							top: this.viewport.top - o,
							height: this.viewport.height + 2 * o
						});
						const s = 4 * t;
						this.renderableViewport = new j({
							top: this.viewport.top - s,
							height: this.viewport.height + 2 * s
						})
					}
				}
				updateScrollMetrics() {
					this.updateViewportInfo();
					const e = de(),
						t = this.getScrollTop(),
						o = Math.abs(this.lastRenderPosition - t),
						s = e - this.lastScrollTime,
						n = this.lastScrollTime > -1;
					this.lastScrollTime = e, this.lastRenderPosition = t, n ? this.pixelsPerMSRing.push(o / s) : this.lastScrollTime = e
				}
				getAveragePixelsPerMilliSecond() {
					if (this.pixelsPerMSRing.size > 1) {
						let e = 0;
						return this.pixelsPerMSRing.forEach(t => e += t), e / this.pixelsPerMSRing.size
					}
					return 0
				}
				_wrapperRefFN(e, t) {
					const o = this.childMap.get(e);
					o && (o.el = t), this.lastVisibleElId === e && (this.lastVisibleEl = t)
				}
				getWrapperRefFN(e) {
					let t = this.wrapperRefFNs[e];
					return t || (t = t => {
						this._wrapperRefFN(e, t)
					}, this.wrapperRefFNs[e] = t), t
				}
				_childRefFn(e, t, o) {
					const s = this.childMap.get(e);
					s && (s.itemRef = t, s.loaded = !!t && (void 0 !== o ? o : s.loaded), this.callOnScrollForItemsChanged())
				}
				getChildRefFn(e) {
					let t = this.childRefFns[e];
					return t || (t = (t, o) => {
						this._childRefFn(e, t, o)
					}, this.childRefFns[e] = t), t
				}
				loadItemIfPossible(e, t, o, s, n, i) {
					if (t.contentIsHeavyToMount() ? s : n) {
						const s = !e.isFocusable || o;
						!e.loaded && s && (e.loaded = !0, i.push(t.loadContent))
					}
				}
				callExitedViewportForUnmount() {
					this.itemsInViewport.forEach(({
						id: e,
						trackOnExitedViewport: t
					}) => {
						t && F.b.enqueue(new E.a({
							cb: t,
							args: [!0]
						}))
					})
				}
				hasBeenScrolled() {
					if (!this.containerRef) return !1;
					const {
						viewportTopPadding: e = 0
					} = this.props, t = X(this.containerRef);
					return this.getScrollTop() + e - t > 0
				}
				render() {
					const {
						contentContainerRef: e
					} = this.props;
					return d.a.createElement("div", {
						className: this.props.className,
						ref: this.setContainerRef
					}, this.state.renderableChildren.map((e, t) => d.a.createElement("div", {
						key: `scroller-${e.id}`,
						ref: this.getWrapperRefFN(e.id),
						style: this.getStylesForOuterWrapper(e.id)
					}, d.a.createElement("div", {
						className: this.hiddenChildren[e.id] ? H.a.Hidden : void 0
					}, e.render({
						className: N.k,
						height: e.estHeight,
						placeholderRecommended: !1,
						remeasure: this.remeasureChild,
						scrollToAndRemeasure: this.scrollToChild,
						setScrollerChildRef: this.getChildRefFn(e.id),
						shouldLoadInitially: t < ee,
						width: U
					})))), !!e && d.a.createElement(M.a, {
						containerRef: e,
						onResize: this.handleContentContainerResize
					}))
				}
				validateScrollPreservationProps(e) {
					return "string" != typeof e.layoutKey || void 0 !== e.dataKey
				}
				validateLoadMoreProps(e) {
					return void 0 === e.onLoadMore || "loadMoreToken" in e
				}
			}
			t.b = q(Object(L.b)(le))
		},
		"./src/reddit/components/Scroller/getDocumentTop.ts": function(e, t, o) {
			"use strict";
			t.a = () => document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || 0
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, o) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = o("./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx"),
				d = o("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = o("./src/reddit/controls/Checkbox/index.m.less"),
				l = o.n(c);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = e => t => {
					const {
						className: o,
						disabled: s,
						redditStyle: r,
						"data-redditstyle": a,
						...d
					} = t, c = ((e, t, o) => {
						const s = !(!t && !o);
						let n = "";
						return n = e ? s ? l.a.mDisabledRedditStyle : l.a.mDisabled : s ? l.a.mActiveRedditStyle : l.a.mActive
					})(s, r, a);
					return n.a.createElement(e, m({
						className: Object(i.a)(l.a.CheckboxIcon, c, o)
					}, d))
				},
				u = p(d.a),
				h = p(a.a);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? h : e.isCheckboxSelected ? u : r.a;
				return n.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: Object(i.a)(l.a.Checkbox, e.className),
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, n.a.createElement(t, {
					className: Object(i.a)(l.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return C
			}));
			var s = o("./node_modules/lodash/throttle.js"),
				n = o.n(s),
				i = o("./node_modules/react/index.js"),
				r = o.n(i),
				a = o("./src/lib/classNames/index.ts"),
				d = o("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = o("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = o("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = o("./src/reddit/layout/row/InlineButton/index.tsx"),
				p = o("./src/reddit/controls/Dropdown/index.m.less"),
				u = o.n(p),
				h = o("./src/reddit/controls/Dropdown/row.m.less"),
				b = o.n(h);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			class C extends r.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = n()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, o = Object(a.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? r.a.createElement(d.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && r.a.createElement("span", {
						className: o
					}, e.children), r.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText)) : r.a.createElement(m.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: n()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? r.a.createElement("div", null, e.children) : r.a.createElement("span", {
						className: o
					}, e.children)), e.displayText && r.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && r.a.createElement(l.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && r.a.createElement(c.a, {
						className: u.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const o = Object(a.a)(b.a.row, e, {
					[b.a.mIsInteractive]: !t.noHover,
					[b.a.mIsSelected]: t.isSelected,
					[b.a.topics]: t.isTopicsStyle
				});
				return r.a.createElement(C, f({
					className: o
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, o) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				iconStyles: "_2XOVBjNLHjJIznEsn35vs2",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, o) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return l
			})), o.d(t, "c", (function() {
				return m
			})), o.d(t, "b", (function() {
				return p
			})), o.d(t, "d", (function() {
				return u
			}));
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/react/index.js"),
				i = o.n(n),
				r = o("./src/lib/lessComponent.tsx"),
				a = o("./src/lib/prettyPrintNumber/index.ts"),
				d = (o("./src/lib/timeAgo/index.ts"), o("./src/reddit/controls/MetaData/index.m.less")),
				c = o.n(d);
			const l = r.a.span("metaText", c.a),
				m = e => i.a.createElement(l, e, " · "),
				p = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: o,
					...n
				}) => {
					const r = Object(a.b)(t),
						d = s.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [s.fbt._plural(t, "number", r)], {
							hk: "2L3T21"
						}),
						c = e ? s.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : o ? d : s.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [s.fbt._plural(t, "number", r)], {
							hk: "gf67v"
						});
					return i.a.createElement(l, n, c)
				},
				u = e => i.a.createElement(l, null, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(e, "number", Object(a.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, o) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./src/lib/lessComponent.tsx"),
				n = o("./src/reddit/controls/InternalLink/index.tsx"),
				i = o("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				r = o.n(i);
			t.a = s.a.wrapped(n.a, "unstyledInternalLink", r.a)
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return d
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./node_modules/react-redux/es/index.js"),
				r = o("./node_modules/reselect/es/index.js"),
				a = o("./src/reddit/featureFlags/index.ts");

			function d(e, t, o) {
				const s = Object(r.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(i.b)(s)(e => {
					const {
						featureEnabled: s,
						...i
					} = e, r = i;
					return s ? n.a.createElement(t, r) : void 0 !== o ? n.a.createElement(o, r) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			}));
			var s = o("./src/reddit/models/WhitelistStatus/index.ts");
			const n = (e, t) => {
				const o = e.some(e => e.isNSFW),
					n = t.some(e => e.wls === s.b.NO_ADS);
				return !o && !n
			}
		},
		"./src/reddit/helpers/postComponentForLayout/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return f
			})), o.d(t, "c", (function() {
				return v
			})), o.d(t, "b", (function() {
				return O
			}));
			var s = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = o("./node_modules/react/index.js"),
				i = o.n(n),
				r = o("./src/lib/isUrl/index.ts"),
				a = o("./src/lib/logs/console.ts"),
				d = o("./src/reddit/constants/postLayout.ts"),
				c = o("./src/reddit/models/Media/index.ts");
			const l = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-BlankPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!o.m[t]
					},
					importAsync: () => o.e("reddit-components-BlankPost").then(o.bind(null, "./src/reddit/components/BlankPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return o(t)
					},
					resolve() {
						return "./src/reddit/components/BlankPost/index.tsx"
					}
				}),
				m = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-ClassicPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!o.m[t]
					},
					importAsync: () => Promise.all([o.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), o.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), o.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), o.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), o.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), o.e("PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~9f82fa34"), o.e("Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-Larg~9453fc9d"), o.e("reddit-components-ClassicPost")]).then(o.bind(null, "./src/reddit/components/ClassicPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return o(t)
					},
					resolve() {
						return "./src/reddit/components/ClassicPost/index.tsx"
					}
				}),
				p = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-CompactPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!o.m[t]
					},
					importAsync: () => Promise.all([o.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), o.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), o.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), o.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), o.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), o.e("PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~9f82fa34"), o.e("Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-Larg~9453fc9d"), o.e("reddit-components-CompactPost")]).then(o.bind(null, "./src/reddit/components/CompactPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return o(t)
					},
					resolve() {
						return "./src/reddit/components/CompactPost/index.tsx"
					}
				}),
				u = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-LargePost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!o.m[t]
					},
					importAsync: () => Promise.all([o.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), o.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), o.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), o.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), o.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), o.e("PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~9f82fa34"), o.e("Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-Larg~9453fc9d"), o.e("reddit-components-LargePost")]).then(o.bind(null, "./src/reddit/components/LargePost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return o(t)
					},
					resolve() {
						return "./src/reddit/components/LargePost/index.tsx"
					}
				}),
				h = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-MediumPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!o.m[t]
					},
					importAsync: () => Promise.all([o.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), o.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), o.e("PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~9f82fa34"), o.e("Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-Larg~9453fc9d"), o.e("reddit-components-MediumPost")]).then(o.bind(null, "./src/reddit/components/MediumPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return o(t)
					},
					resolve() {
						return "./src/reddit/components/MediumPost/index.tsx"
					}
				}),
				b = {
					[d.g.Large]: u,
					[d.g.Medium]: h,
					[d.g.Classic]: m,
					[d.g.Compact]: p
				},
				f = e => i.a.createElement(l, e),
				C = ["https://www.mcdonalds.com", "https://d2n94wep25xhn0.cloudfront.net", "https://www.dyson.com", "https://dyson.com", "https://www.bestbuy.com", "https://www.goarmy.com", "https://www.samsung.com", "https://www.cyberpunk.net"],
				x = e => e.source && e.source.url && e.isSponsored && C.some(t => e.source.url.startsWith(t)),
				g = e => !e.media || e.media.type === c.o.EMBED && !(c.b.has(e.media.provider) || x(e)),
				v = (e, t) => {
					if (e.isBlank) return 0;
					switch (t) {
						case d.g.Medium:
							return 188;
						case d.g.Classic:
							return 96;
						case d.g.Compact:
							return 32;
						default:
							return 200
					}
				};

			function O({
				isCrosspost: e,
				isFirstPost: t,
				layout: o,
				post: s
			}) {
				if (s.isBlank) return f;
				const n = !s.media && !!s.source && Object(r.a)(s.source.url),
					i = e && n;
				o === d.g.Large && g(s) && !i && (o = d.g.Medium);
				const c = b[o];
				return void 0 === c ? (Object(a.a)(void 0, `Could not find component for layout ${o}.`), f) : t && s.isSponsored && o === d.g.Large ? h : c
			}
		},
		"./src/reddit/helpers/styles/mixins/index.m.less": function(e, t, o) {
			e.exports = {
				baseLargeAndMediumPostStyles: "_2lHXa-mLMsRfm1Q5JxgU4r",
				basePostStyles: "REwsaLIz5u3DhM7zbbzIU",
				classicPostStyles: "bE7JgM2ex7W3aF3zci5bm",
				compactPostStyles: "FeLWdhOO-cVXowAo3Rndk",
				largeAndMediumPostStyles: "_3Qkp11fjcAw9I9wtLo8frE",
				baseClassicAndCompactPostStyles: "_2yN8L-c8UBoKxHn0-vg_dS",
				baseSubredditStyles: "_2zRMh6o0BucltCL6o64pa4",
				classicAndCompactActiveStyles: "_1Accc3h2AW0sB8E4CcEz2n",
				mIsActive: "_1LmKpEAguLZV4jQMgQSFVL",
				classicAndCompactPlaceholderStyles: "_3joKifdh6j3tG_vsgFS85R",
				mUseRedditTheme: "_1nQXomgzQ2rnBsRU2iZ00l",
				largeAndMediumActiveStyles: "_1qftyZQ2bhqP62lbPjoGAh"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, o) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			})), o.d(t, "b", (function() {
				return a
			}));
			var s = o("./src/lib/classNames/index.ts"),
				n = o("./src/reddit/helpers/styles/mixins/loading.m.less"),
				i = o.n(n);
			const r = ({
					isLoading: e
				}) => Object(s.a)(i.a.loadingBackground, {
					[i.a["m-loading"]]: e
				}),
				a = e => Object(s.a)(i.a.loadingBar, r(e))
		},
		"./src/reddit/helpers/trackers/reportPrompt.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			})), o.d(t, "b", (function() {
				return i
			}));
			var s = o("./src/reddit/selectors/telemetry.ts");
			const n = (e, t, o, n) => i => ({
					source: "report_prompt",
					noun: o,
					action: n,
					subreddit: s.subredditByName(i, e),
					post: s.post(i, t)
				}),
				i = (e, t, o, n) => i => ({
					source: "report_survey",
					noun: o,
					action: n,
					subreddit: s.subredditByName(i, e),
					post: s.post(i, t)
				})
		},
		"./src/reddit/hooks/useOnClickOutside.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			}));
			var s = o("./node_modules/react/index.js");

			function n(e, t) {
				const o = Object(s.useCallback)(o => {
					if (!t) return;
					const s = document.getElementById(e);
					s && (s.contains(o.target) || t(o))
				}, [e, t]);
				Object(s.useEffect)(() => {
					if (t) return document.body.addEventListener("click", o), () => {
						document.body.removeEventListener("click", o)
					}
				}, [t, o])
			}
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.m.less": function(e, t, o) {
			e.exports = {
				DistinguishShield: "_3qx_qM22xH7s5oSucqWca",
				distinguishShield: "_3qx_qM22xH7s5oSucqWca"
			}
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = o("./src/reddit/icons/fonts/helpers.tsx"),
				d = o("./src/reddit/icons/fonts/DistinguishShield/index.m.less"),
				c = o.n(d);
			t.a = e => {
				const t = Object(r.b)();
				return n.a.createElement("i", {
					className: Object(i.a)(c.a.DistinguishShield, Object(a.b)(t ? "distinguish" : "distinguishShield", e.isFilled), e.className)
				})
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, o) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				r = o("./src/reddit/icons/fonts/helpers.tsx"),
				a = o("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				d = o.n(a);
			const c = o("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(i.b)();
				return n.a.createElement("i", {
					className: `${Object(r.b)(t?"caret_down":"dropdownTriangle",e.isFilled)} ${e.className}`
				})
			}, "DropdownTriangle", d.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, o) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/fonts/Op/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				r = o("./src/reddit/icons/fonts/helpers.tsx"),
				a = o("./src/reddit/icons/fonts/Op/index.m.less"),
				d = o.n(a);
			const c = o("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(i.b)();
				return n.a.createElement("i", {
					className: `${Object(r.b)(t?"author":"op",e.isFilled)} ${e.className}`,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, n.a.createElement(r.a, null, e.desc))
			}, "OpIcon", d.a);
			t.a = c
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", i({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);
			t.a = e => n.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), n.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), n.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), n.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", i({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("g", {
				transform: "translate(-32.000000, -173.000000)"
			}, n.a.createElement("g", {
				transform: "translate(32.000000, 173.000000)"
			}, n.a.createElement("path", {
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, o) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = o.n(r);
			t.a = e => n.a.createElement("svg", {
				className: Object(i.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, n.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), n.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/Show/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M17.71,10.29,14.95,7.54a7,7,0,0,0-9.9,0L2.29,10.29a1,1,0,0,0,1.41,1.41L6.46,8.95c.07-.07.14-.11.21-.17a4,4,0,1,0,6.65,0c.07.06.15.11.21.17l2.76,2.76a1,1,0,0,0,1.41-1.41Z"
			}))
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return n
			})), o.d(t, "d", (function() {
				return i
			})), o.d(t, "a", (function() {
				return r
			})), o.d(t, "b", (function() {
				return a
			})), o.d(t, "f", (function() {
				return d
			})), o.d(t, "e", (function() {
				return c
			})), o.d(t, "g", (function() {
				return l
			})), o.d(t, "h", (function() {
				return m
			}));
			var s = o("./src/reddit/helpers/isPost.ts");
			const n = 20,
				i = 50,
				r = 1e4,
				a = 100;
			var d, c;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public"
			}(d || (d = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(c || (c = {}));
			const l = e => 1 === e.length ? Object(s.a)(e[0]) ? c.Post : c.Comment : c.Bulk,
				m = (e, t) => {
					return {
						[t === c.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type
					}
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueuePages~ModerationPages.7d10e4aef734fb59f367.js.map