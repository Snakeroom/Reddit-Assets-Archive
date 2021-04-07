// https://www.redditstatic.com/desktop2x/ModQueuePages~ModerationPages.898fc4b3512d3bff3c02.js
// Retrieved at 4/7/2021, 7:40:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueuePages~ModerationPages"], {
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "d", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/selectors/telemetry.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = (e, t, n) => (s = (() => {})) => o => {
				const r = u(o.target, o.currentTarget),
					a = p(o.target, o.currentTarget);
				r && n && t && (m(o.target, o.currentTarget, l.anchors) ? n(t(e, r, a)) : n(n => {
					const s = t(e, r, a)(n);
					let o;
					if (s && s.actionInfo) {
						const {
							pageType: e,
							...t
						} = s.actionInfo;
						o = t
					}
					return {
						...s,
						actionInfo: Object(i.previousPageActionInfo)(n, o)
					}
				})), m(o.target, o.currentTarget, l.anchorsAndButtons) && s(o)
			};

			function c(e) {
				const t = t => {
					const {
						sendEvent: n,
						eventFactory: r,
						clickTrackingId: i,
						...c
					} = t, l = Object(s.useCallback)(d(i, r, n), [i, r, n]);
					return o.a.createElement(e, a({}, c, {
						afterClickTracking: l
					}))
				};
				return t.displayName = `WithClickTracking(${e.displayName||e.name})`, Object(r.c)(t)
			}
			const l = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				m = (e, t, n) => !n.includes(e.tagName) && (e === t || !!e.parentElement && m(e.parentElement, t, n)),
				u = (e, t) => {
					const n = e.dataset.clickId;
					return n || (e === t ? null : !!e.parentElement && u(e.parentElement, t))
				},
				p = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && p(e.parentElement, t))
		},
		"./src/lib/intersectionObserver/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			let s;
			const o = new Map,
				r = new Map;
			"undefined" != typeof window && (n("./node_modules/intersection-observer/intersection-observer.js"), s = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						n = e.intersectionRatio > 0;
					if (n !== !!r.get(t)) {
						r.set(t, n);
						const s = o.get(t);
						if (s) {
							s(e, n && !!r.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const i = (e, t) => {
					try {
						o.set(e, t), s && s.observe(e)
					} catch (n) {
						0
					}
				},
				a = e => {
					try {
						o.delete(e), s && s.unobserve(e)
					} catch (t) {
						0
					}
				}
		},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/bulkActions/constants.ts");
			const r = Object(s.a)(o.c),
				i = Object(s.a)(o.b),
				a = Object(s.a)(o.a)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return h
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "b", (function() {
				return v
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/makeCommentsPageKey/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/shortcuts/utils.ts"),
				d = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/endpoints/comment/index.tsx"),
				l = n("./src/reddit/selectors/user.ts"),
				m = n("./src/reddit/actions/comment/index.ts"),
				u = n("./src/reddit/actions/comment/constants.ts");
			const p = Object(o.a)(u.m),
				h = e => async (t, n, {
					apiContext: s
				}) => {
					n().features.comments.models[e] && (await Object(c.h)(s(), e)).ok && t((e => async t => {
						t(p({
							commentId: e
						}))
					})(e))
				}, b = e => async (t, n, {
					apiContext: s
				}) => {
					if (!Object(l.J)(n())) return void t(Object(i.i)(d.a.LOGIN_MODAL_ID));
					const o = n().features.comments.models[e];
					if (!o) return;
					const r = o.isLocked ? c.j : c.d;
					t(Object(m.h)({
						[e]: {
							isLocked: !o.isLocked
						}
					})), (await r(s(), e)).ok || t(Object(m.h)({
						[e]: {
							isLocked: o.isLocked
						}
					}))
				}, f = Object(o.a)(u.C), C = e => async (t, n, {
					apiContext: s
				}) => {
					const o = n(),
						r = o.features.comments.models[e],
						i = o.user.account ? o.user.account.displayText : null;
					r && i && (t(Object(m.h)({
						[e]: {
							isApproved: !0,
							approvedBy: i,
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
					})), Object(a.d)())
				}, x = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const r = s(),
						i = r.features.comments.models[e],
						d = r.user.account ? r.user.account.displayText : null;
					i && d && (n(Object(m.h)({
						[e]: {
							approvedBy: null,
							bannedBy: d,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(c.f)(o(), e, t)).ok || n(Object(m.h)({
						[e]: {
							approvedBy: i.approvedBy,
							bannedBy: i.bannedBy,
							isApproved: i.isApproved,
							isRemoved: i.isRemoved,
							isSpam: i.isSpam
						}
					})), Object(a.d)())
				}, g = e => async (t, n, {
					apiContext: s
				}) => {
					const o = n().features.comments.models[e];
					if (!o) return;
					const r = o.ignoreReports ? c.i : c.c;
					t(Object(m.h)({
						[e]: {
							ignoreReports: !o.ignoreReports
						}
					})), (await r(s(), e)).ok || t(Object(m.h)({
						[e]: {
							ignoreReports: o.ignoreReports
						}
					}))
				}, v = (e, t, n) => async (o, i, {
					apiContext: a
				}) => {
					const d = i(),
						l = d.features.comments.models[e];
					if (!l) return;
					const u = l.postId,
						p = d.postStickiedComments.data[u],
						h = s.g[t];
					o(Object(m.h)({
						[e]: {
							distinguishType: t,
							isAdmin: t === s.C.ADMIN,
							isMod: t === s.C.MODERATOR,
							isStickied: !!n
						}
					})), n && p && p !== e && o(Object(m.h)({
						[p]: {
							isStickied: !1
						}
					})), (await Object(c.b)(a(), e, h, n || null)).ok ? n && o(f({
						id: e,
						postId: u,
						commentsPageKey: Object(r.a)(u, null, {
							sort: s.r.CONFIDENCE,
							...d.platform.currentPage.queryParams
						})
					})) : (o(Object(m.h)({
						[e]: {
							distinguishType: l.distinguishType,
							isAdmin: l.isAdmin,
							isMod: l.isMod,
							isStickied: l.isStickied
						}
					})), o(Object(m.h)({
						[p]: {
							isStickied: d.features.comments.models[p].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/modQueue/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return D
			})), n.d(t, "d", (function() {
				return B
			})), n.d(t, "f", (function() {
				return z
			})), n.d(t, "a", (function() {
				return G
			})), n.d(t, "b", (function() {
				return X
			})), n.d(t, "c", (function() {
				return q
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/bulkActions/index.ts"),
				a = n("./src/reddit/actions/removalReasons/index.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/modQueue/index.ts"),
				l = n("./src/reddit/helpers/correlationIdTracker.ts"),
				m = n("./src/reddit/helpers/flair.ts"),
				u = n("./src/reddit/helpers/isPost.ts"),
				p = n("./src/reddit/models/ModQueue/index.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/selectors/modQueue.ts"),
				f = n("./src/reddit/selectors/subreddit.ts"),
				C = n("./src/reddit/selectors/telemetry.ts"),
				x = n("./src/telemetry/index.ts"),
				g = n("./src/lib/initializeClient/installReducer.ts"),
				v = n("./src/reddit/reducers/pages/modHub/index.ts"),
				O = n("./src/reddit/actions/modQueue/constants.ts");
			Object(g.a)({
				pages: {
					modHub: v.a
				}
			});
			const I = Object(r.a)(O.j),
				E = Object(r.a)(O.i),
				k = Object(r.a)(O.h),
				S = Object(r.a)(O.g),
				_ = Object(r.a)(O.f),
				y = Object(r.a)(O.e),
				R = Object(r.a)(O.n),
				j = Object(r.a)(O.m),
				P = Object(r.a)(O.l),
				w = Object(r.a)(O.q),
				M = Object(r.a)(O.p),
				T = Object(r.a)(O.o),
				A = Object(r.a)(O.w),
				N = Object(r.a)(O.v),
				L = Object(r.a)(O.u),
				D = (e, t, n) => async (r, i, {
					apiContext: a
				}) => {
					let l, m, u;
					switch (t) {
						case o.kb.Edited:
							l = S, m = y, u = _;
							break;
						case o.kb.Modqueue:
							l = I, m = k, u = E;
							break;
						case o.kb.Reports:
							l = R, m = P, u = j;
							break;
						case o.kb.Spam:
							l = w, m = T, u = M;
							break;
						case o.kb.Unmoderated:
							l = A, m = L, u = N;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					r(l());
					const b = await Object(c.b)(a(), t, n);
					if (b.ok) {
						r(u({
							listingKey: e,
							page: `${n.page||p.b}`,
							response: b.body
						}))
					} else r(m(b.error)), r(Object(d.f)({
						kind: h.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, F = Object(r.a)(O.k), V = Object(r.a)(O.b), B = e => async (t, n, {
					apiContext: o
				}) => {
					const r = n(),
						i = r.pages.modHub.modQueue.moderatedCommunitiesOrder.after,
						a = r.pages.modHub.modQueue.moderatedCommunitiesOrder.pending,
						l = r.pages.modHub.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: m
						} = r.platform.currentPage.urlParams,
						u = m;
					if (e && a || l || !i) return;
					const p = await Object(c.b)(o(), u, {
						moderated_after: i
					});
					p.ok ? (t(F(p.body)), p.body.moderatedAfter ? t(B()) : t(V())) : t(Object(d.f)({
						kind: h.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, H = Object(r.a)(O.t), U = Object(r.a)(O.s), W = Object(r.a)(O.r), z = (e, t, n) => async (o, r, {
					apiContext: g
				}) => {
					o(Object(i.c)());
					const v = r(),
						O = Object(b.g)(v),
						I = v.user.account && v.user.account.displayText;
					Object(l.d)(l.a.ModQueue);
					const E = Object(l.c)(l.a.ModQueue);
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
						correlationId: E
					});
					for (let t = 0; t < O.length; t++) {
						const n = O[t];
						let s = e;
						[p.a.Approve, p.a.Remove, p.a.Spam].includes(e) && (Object(u.a)(n) ? s += "_link" : s += "_comment"), Object(x.a)({
							source: "bulk_mod_action",
							action: "click",
							noun: s,
							...C.defaults(v),
							actionInfo: C.actionInfo(v, {
								count: O.length,
								paneName: v.platform.currentPage ? v.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: C.comment(v, n),
							post: C.post(v, n),
							profile: C.profileByPostOrCommentId(v, n),
							screen: C.screen(v),
							subreddit: C.subredditByPostOrCommentId(v, n),
							correlationId: E
						})
					}
					Object(l.b)(l.a.ModQueue);
					const k = {
						ids: O
					};
					t && (k.text = Object(m.g)(t) || "", k.flairTemplateId = ""), n && (k.cssClass = n, k.flairTemplateId = n);
					const S = await Object(c.a)(g(), e, k);
					if (S.ok) {
						o(Object(i.b)({
							...S.body,
							operation: e,
							ids: O,
							username: I,
							options: {
								flair: t
							}
						}));
						const n = function(e, t) {
							switch (e) {
								case p.a.Approve:
									return s.fbt._({
										"*": "{number} posts/comments have been approved",
										_1: "1 post/comment has been approved"
									}, [s.fbt._plural(t, "number")], {
										hk: "2kKhSf"
									});
								case p.a.Flair:
									return s.fbt._({
										"*": "{number} posts/comments have had flair applied",
										_1: "1 post/comment has had flair applied"
									}, [s.fbt._plural(t, "number")], {
										hk: "3syB5O"
									});
								case p.a.IgnoreReports:
									return s.fbt._({
										"*": "{number} posts/comments have had their reports ignored",
										_1: "1 post/comment has had their reports ignored"
									}, [s.fbt._plural(t, "number")], {
										hk: "2WfE4g"
									});
								case p.a.Lock:
									return s.fbt._({
										"*": "{number} posts/comments have been locked",
										_1: "1 post/comment has been locked"
									}, [s.fbt._plural(t, "number")], {
										hk: "45oMbv"
									});
								case p.a.MarkNSFW:
									return s.fbt._({
										"*": "{number} posts/comments have been marked NSFW",
										_1: "1 post/comment has been marked NSFW"
									}, [s.fbt._plural(t, "number")], {
										hk: "oPsQr"
									});
								case p.a.RemovalReason:
									return s.fbt._({
										"*": "{number} posts/comments have had removal reasons applied",
										_1: "1 post/comment has had removal reasons applied"
									}, [s.fbt._plural(t, "number")], {
										hk: "35Tosn"
									});
								case p.a.Remove:
									return s.fbt._({
										"*": "{number} posts/comments have been removed",
										_1: "1 post/comment has been removed"
									}, [s.fbt._plural(t, "number")], {
										hk: "B1ZbE"
									});
								case p.a.Spam:
									return s.fbt._({
										"*": "{number} posts/comments have been marked as spam",
										_1: "1 post/comment has been marked as spam"
									}, [s.fbt._plural(t, "number")], {
										hk: "3OoNfp"
									});
								case p.a.Spoiler:
									return s.fbt._({
										"*": "{number} posts/comments have been marked as spoilers",
										_1: "1 post/comment has been marked as spoilers"
									}, [s.fbt._plural(t, "number")], {
										hk: "1DFW5M"
									});
								case p.a.UnignoreReports:
									return s.fbt._({
										"*": "{number} posts/comments have had their reports un-ignored",
										_1: "1 post/comment has had their reports un-ignored"
									}, [s.fbt._plural(t, "number")], {
										hk: "303Hpb"
									});
								case p.a.Unlock:
									return s.fbt._({
										"*": "{number} posts/comments have been unlocked",
										_1: "1 post/comment has been unlocked"
									}, [s.fbt._plural(t, "number")], {
										hk: "5gUht"
									});
								case p.a.UnmarkNSFW:
									return s.fbt._({
										"*": "{number} posts/comments have been un-marked as NSFW",
										_1: "1 post/comment has been un-marked as NSFW"
									}, [s.fbt._plural(t, "number")], {
										hk: "3oSSST"
									});
								case p.a.Unspoiler:
								case p.a.Unspoiler:
									return s.fbt._({
										"*": "{number} posts/comments have been un-marked as spoilers",
										_1: "1 post/comment has been un-marked as spoilers"
									}, [s.fbt._plural(t, "number")], {
										hk: "3lHoNI"
									})
							}
						}(e, O.length);
						if (e !== p.a.Approve && e !== p.a.Flair) {
							let t, r;
							const l = v.platform.currentPage && v.platform.currentPage.queryParams && v.platform.currentPage.queryParams.subreddit,
								m = l && Object(f.F)(v, l);
							e === p.a.Remove && m && O.length > 1 && (t = s.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), r = Object(a.fetchReasonsAndOpenModal)(m, O));
							const u = Object(d.e)(n, h.b.Undo, s.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, {
								apiContext: n
							}) => {
								e(H());
								const o = t(),
									r = Object.keys(o.pages.modHub.modQueue.bulkAction.undoLastAction)[0],
									a = o.pages.modHub.modQueue.bulkAction.undoLastAction[r],
									l = o.user.account && o.user.account.displayText;
								e(Object(i.c)());
								const m = await Object(c.a)(n(), r, {
									ids: a
								});
								m.ok ? e(U({
									...m.body,
									operation: r,
									ids: a,
									username: l
								})) : (e(W(m.error)), e(Object(d.f)({
									kind: h.b.Error,
									text: s.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, r);
							o(Object(d.f)(u))
						} else {
							const e = Object(d.e)(n, h.b.SuccessMod);
							o(Object(d.f)(e))
						}
					} else {
						o(Object(i.a)(S.error));
						const e = Object(d.e)(s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), h.b.Error);
						o(Object(d.f)(e))
					}
				}, G = Object(r.a)(O.a), X = Object(r.a)(O.c), q = Object(r.a)(O.d)
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "removalReasonsPending", (function() {
				return Z
			})), n.d(t, "removalReasonsLoaded", (function() {
				return Y
			})), n.d(t, "removalReasonsFailed", (function() {
				return $
			})), n.d(t, "removalReasonsRequested", (function() {
				return ee
			})), n.d(t, "removalReasonAddedPending", (function() {
				return te
			})), n.d(t, "removalReasonAddedSuccess", (function() {
				return ne
			})), n.d(t, "removalReasonAddedFailed", (function() {
				return se
			})), n.d(t, "addRemovalReason", (function() {
				return oe
			})), n.d(t, "editRemovalReasonPending", (function() {
				return re
			})), n.d(t, "editRemovalReasonSuccess", (function() {
				return ie
			})), n.d(t, "editRemovalReasonFailed", (function() {
				return ae
			})), n.d(t, "editRemovalReason", (function() {
				return de
			})), n.d(t, "deleteRemovalReasonPending", (function() {
				return ce
			})), n.d(t, "deleteRemovalReasonSuccess", (function() {
				return le
			})), n.d(t, "deleteRemovalReasonFailed", (function() {
				return me
			})), n.d(t, "deleteRemovalReason", (function() {
				return ue
			})), n.d(t, "removedItemsSelected", (function() {
				return pe
			})), n.d(t, "fetchReasonsAndOpenModal", (function() {
				return he
			})), n.d(t, "removalReasonSubmittedPending", (function() {
				return be
			})), n.d(t, "removalReasonSubmittedSuccess", (function() {
				return fe
			})), n.d(t, "removalReasonSubmittedFailed", (function() {
				return Ce
			})), n.d(t, "removalReasonMessagePending", (function() {
				return xe
			})), n.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return ge
			})), n.d(t, "removalReasonPublicMessageSuccess", (function() {
				return ve
			})), n.d(t, "removalReasonMessageFailed", (function() {
				return Oe
			})), n.d(t, "submitRemovalReason", (function() {
				return Ie
			})), n.d(t, "submitBulkRemovalReason", (function() {
				return Ee
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./node_modules/redux/es/redux.js");
			const i = "REMOVALREASONS__ADD_PENDING",
				a = "REMOVALREASONS__ADD_SUCCESS",
				d = "REMOVALREASONS__ADD_FAILED",
				c = "REMOVALREASONS__EDIT_PENDING",
				l = "REMOVALREASONS__EDIT_SUCCESS",
				m = "REMOVALREASONS__EDIT_FAILED",
				u = "REMOVALREASONS__DELETE_PENDING",
				p = "REMOVALREASONS__DELETE_SUCCESS",
				h = "REMOVALREASONS__DELETE_FAILED";
			var b = (e = null, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case "REMOVALREASONS__LOAD_SUCCESS":
					case i:
					case a:
					case c:
					case l:
					case u:
					case p:
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
						case i:
						case c:
						case u:
							return !0;
						case "REMOVALREASONS__LOAD_SUCCESS":
						case "REMOVALREASONS__LOAD_FAILED":
						case a:
						case d:
						case l:
						case m:
						case p:
						case h:
							return !1;
						default:
							return e
					}
				},
				C = Object(r.c)({
					error: b,
					pending: f
				});
			const x = {};
			var g = (e = x, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
						const {
							response: n
						} = t.payload, {
							data: s
						} = n;
						return {
							...e,
							...s
						}
					}
					case a:
					case l: {
						const {
							reason: n
						} = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case p: {
						const {
							reasonId: n
						} = t.payload, {
							[n]: s,
							...o
						} = e;
						return o
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
							subredditId: n,
							response: s
						} = t.payload, {
							order: o
						} = s;
						return {
							...e,
							[n]: o
						}
					}
					case a: {
						const {
							subredditId: n,
							reason: s
						} = t.payload;
						return {
							...e,
							[n]: [...e[n], s.id]
						}
					}
					case p: {
						const {
							subredditId: n,
							reasonId: s
						} = t.payload, o = [...e[n]].filter(e => e !== s);
						return {
							...e,
							[n]: o
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
								itemIds: n
							} = t.payload;
							return {
								itemIds: n,
								subredditId: e
							}
						}
						default:
							return e
					}
				},
				E = Object(r.c)({
					api: C,
					models: g,
					reasonOrder: O,
					removedItemIds: I
				}),
				k = n("./src/lib/constants/index.ts"),
				S = n("./src/lib/makeActionCreator/index.ts"),
				_ = n("./src/lib/makeCommentsPageKey/index.ts"),
				y = n("./src/lib/makeDraftKey/index.ts"),
				R = n("./src/reddit/actions/bulkActions/index.ts"),
				j = n("./src/reddit/actions/comment/index.ts"),
				P = n("./src/reddit/actions/comment/authoring.ts"),
				w = n("./src/reddit/actions/comment/moderation.ts"),
				M = n("./src/reddit/actions/modal.ts"),
				T = n("./src/reddit/actions/post.ts"),
				A = n("./src/reddit/actions/toaster.ts"),
				N = n("./src/reddit/constants/modals.ts"),
				L = n("./src/lib/makeApiRequest/index.ts"),
				D = n("./src/lib/omitHeaders/index.ts"),
				F = n("./src/reddit/constants/headers.ts"),
				V = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
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
				H = (e, t, n) => Object(L.a)(Object(D.a)(e, [F.a]), {
					endpoint: Object(V.a)(`${e.apiUrl}/api/v1/modactions/removal_${n}_message/`),
					method: k.cb.POST,
					type: "json",
					data: t
				});
			var U = n("./src/reddit/helpers/isPost.ts"),
				W = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				z = n("./src/reddit/helpers/routeKey/index.ts"),
				G = n("./src/reddit/models/ModQueue/index.ts"),
				X = n("./src/reddit/models/PostDraft/index.ts"),
				q = n("./src/reddit/models/RemovalReason/index.ts"),
				K = n("./src/reddit/models/Toast/index.ts"),
				Q = n("./src/reddit/selectors/comments.ts"),
				J = n("./src/reddit/selectors/platform.ts");
			Object(o.a)({
				features: {
					removalReasons: E
				}
			});
			const Z = Object(S.a)("REMOVALREASONS__LOAD_PENDING"),
				Y = Object(S.a)("REMOVALREASONS__LOAD_SUCCESS"),
				$ = Object(S.a)("REMOVALREASONS__LOAD_FAILED"),
				ee = e => async (t, n, {
					apiContext: s
				}) => {
					const o = n().subreddits.models[e].name;
					t(Z());
					const r = await ((e, t) => Object(L.a)(Object(D.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: k.cb.GET
					}))(s(), o);
					r.ok ? t(Y({
						subredditId: e,
						response: r.body
					})) : t($(r.error))
				}, te = Object(S.a)(i), ne = Object(S.a)(a), se = Object(S.a)(d), oe = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const i = o().subreddits.models[e].name;
					n(te());
					const a = await ((e, t, n) => Object(L.a)(Object(D.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: k.cb.POST,
						data: n
					}))(r(), i, t);
					if (a.ok) {
						const {
							id: o
						} = a.body, r = {
							...t,
							id: o
						};
						n(ne({
							subredditId: e,
							reason: r
						})), n(Object(A.f)({
							kind: K.b.SuccessMod,
							text: s.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else n(se(a.error))
				}, re = Object(S.a)(c), ie = Object(S.a)(l), ae = Object(S.a)(m), de = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const i = o().subreddits.models[e].name;
					n(re());
					const a = await ((e, t, n) => Object(L.a)(Object(D.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n.id}`,
						method: k.cb.PUT,
						data: {
							message: n.message,
							title: n.title
						}
					}))(r(), i, t);
					a.ok ? (n(ie({
						subredditId: e,
						reason: t
					})), n(Object(A.f)({
						kind: K.b.SuccessMod,
						text: s.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : n(ae(a.error))
				}, ce = Object(S.a)(u), le = Object(S.a)(p), me = Object(S.a)(h), ue = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const i = o().subreddits.models[e].name;
					n(ce());
					const a = await ((e, t, n) => Object(L.a)(Object(D.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n}`,
						method: k.cb.DELETE
					}))(r(), i, t);
					a.ok ? (n(le({
						subredditId: e,
						reasonId: t
					})), n(Object(A.f)({
						kind: K.b.SuccessMod,
						text: s.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : n(me(a.error))
				}, pe = Object(S.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), he = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const r = s();
					r.features.removalReasons.reasonOrder[e] && r.features.removalReasons.reasonOrder[e].length > 0 || n(ee(e)), n(pe({
						subredditId: e,
						itemIds: t
					})), n(Object(M.i)(N.a.ADD_REMOVAL_REASON))
				}, be = Object(S.a)("REMOVALREASONS__SUBMIT_PENDING"), fe = Object(S.a)("REMOVALREASONS__SUBMIT_SUCCESS"), Ce = Object(S.a)("REMOVALREASONS__SUBMIT_FAILED"), xe = Object(S.a)("REMOVALREASONS__MESSAGE_PENDING"), ge = Object(S.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), ve = Object(S.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Oe = Object(S.a)("REMOVALREASONS__MESSAGE_FAILED"), Ie = (e, t, n, s, o) => async (r, i, {
					apiContext: a
				}) => {
					const d = i(),
						c = d.user.account && d.user.account.displayText,
						l = e[0],
						m = Object(U.a)(l) ? q.e.Post : q.e.Comment,
						u = m === q.e.Post ? d.posts.models[l] : d.features.comments.models[l],
						p = m === q.e.Post ? T.L : j.h;
					if (!u || !c) return !1;
					r(be()), r(p({
						[l]: {
							modNote: o,
							modRemovalReason: t && t.title,
							modReasonBy: c
						}
					}));
					const h = {
							itemIds: e,
							modNote: o,
							reasonId: t ? t.id : null
						},
						b = await B(a(), h);
					if (b.ok) {
						if (r(fe()), t) {
							r(xe());
							const o = {
									itemId: e,
									message: n,
									title: t.title,
									type: s
								},
								i = await H(a(), Object(q.h)(o, m), m);
							if (i.ok) {
								if (s === q.f.Public) {
									if (r(ve()), i.body) {
										const e = Object(W.a)(i.body, c),
											t = {
												comment: e,
												parentId: l
											},
											n = Object(J.f)(d),
											s = d.platform.currentPage && d.platform.currentPage.routeMatch;
										let o = n && s && Object(z.a)(s, d, d.posts.models[e.postId]);
										if (o || (o = Object(_.a)(e.postId, null, {
												sort: k.s,
												hasSortParam: !0
											})), m === q.e.Post) {
											const n = Object(y.a)(X.c.replyToPost, l);
											r(Object(P.o)({
												...t,
												headCommentId: Object(Q.w)(d, {
													commentsPageKey: o
												}),
												commentsPageKey: o,
												draftKey: n
											}));
											const s = d.postStickiedComments.data[l];
											r(Object(w.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: o
											})), s && s !== e.id && r(Object(j.h)({
												[s]: {
													isStickied: !1
												}
											}))
										} else if (m === q.e.Comment) {
											const e = Object(y.a)(X.c.replyToComment, u.id),
												n = Object(Q.j)(d, {
													commentId: l,
													commentsPageKey: o
												});
											r(Object(P.m)({
												...t,
												parentCommentId: l,
												commentsPageKey: o,
												draftKey: e,
												depth: n + 1
											}))
										}
									}
								} else r(ge());
								return !0
							}
							return r(Oe(i.error)), !1
						}
					} else r(Ce(b.error)), r(p({
						[l]: {
							modNote: u.modNote,
							modRemovalReason: u.modRemovalReason,
							modReasonBy: u.modReasonBy
						}
					}));
					return !1
				}, Ee = (e, t, n, o, r) => async (i, a, {
					apiContext: d
				}) => {
					const c = a(),
						l = c.user.account && c.user.account.displayText;
					if (!l) return;
					i(be());
					const m = Object(A.f)({
							kind: K.b.SuccessMod,
							text: s.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [s.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						u = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						p = await B(d(), u);
					if (p.ok) {
						const s = {
							ids: e,
							operation: G.a.RemovalReason,
							username: l,
							options: {
								modNote: r,
								removalReason: t && t.title
							}
						};
						if (i(Object(R.b)(s)), t) {
							const s = {
									itemId: e,
									message: n,
									title: t.title,
									type: o
								},
								r = await H(d(), Object(q.h)(s, q.e.Bulk), q.e.Bulk);
							r.ok ? (i(ge()), i(m)) : i(Oe(r.error))
						} else i(m)
					} else i(Ce(p.error))
				}
		},
		"./src/reddit/components/ClassicPost/Placeholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/PostLeftRail/index.tsx"),
				c = n("./src/reddit/components/VerticalVotes/votes.tsx"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				u = n("./src/reddit/models/Vote/index.ts"),
				p = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				h = n.n(p),
				b = n("./src/reddit/components/ClassicPost/placeholder.m.less"),
				f = n.n(b);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const x = Object(l.t)(),
				g = Object(i.c)({
					isFakeSubreddit: l.x
				}),
				v = Object(r.b)(g),
				O = e => {
					const t = {
						interactive: !1,
						voteState: u.a.notVoted
					};
					return o.a.createElement("div", {
						className: Object(a.a)(e.className, f.a.emptyVerticalVotes)
					}, o.a.createElement(c.d, C({
						key: "u"
					}, t)), e.children, o.a.createElement(c.c, C({
						key: "d"
					}, t)))
				},
				I = () => o.a.createElement(O, null, o.a.createElement("div", {
					className: f.a.emptyScore,
					key: "s"
				}));
			t.b = x(v(e => o.a.createElement("div", {
				className: Object(a.a)(e.className, h.a.classicPostStyles, h.a.classicAndCompactPlaceholderStyles)
			}, o.a.createElement(d.b, null, o.a.createElement(I, null)), o.a.createElement("div", {
				className: f.a.mainBody
			}, o.a.createElement("div", {
				className: f.a.thumbnailContainer
			}, o.a.createElement("div", {
				className: Object(a.a)(f.a.thumbnail, Object(m.b)(e))
			})), o.a.createElement("div", {
				className: f.a.content
			}, o.a.createElement("div", {
				key: "a"
			}, o.a.createElement("div", {
				key: "aa",
				className: Object(a.a)(f.a.title, Object(m.b)(e))
			}), o.a.createElement("div", {
				key: "ab",
				className: Object(a.a)(f.a.meta, Object(m.b)(e))
			})), o.a.createElement("div", {
				key: "f",
				className: f.a.flatlist
			}, o.a.createElement("div", {
				key: "fa",
				className: Object(a.a)(f.a.flatlistExpando, Object(m.b)(e))
			}), o.a.createElement("div", {
				key: "fb",
				className: f.a.flatlistSeparator
			}), o.a.createElement("div", {
				key: "fc",
				className: Object(a.a)(f.a.flatListItemOne, Object(m.b)(e))
			}), o.a.createElement("div", {
				key: "fd",
				className: Object(a.a)(f.a.flatListItemTwo, Object(m.b)(e))
			})))))))
		},
		"./src/reddit/components/ClassicPost/placeholder.m.less": function(e, t, n) {
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
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/actions/comment/moderation.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				h = n("./src/reddit/components/ModModeReports/helpers.ts"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/contexts/PageLayer/index.tsx"),
				C = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				x = n("./src/reddit/helpers/trackers/modTools.ts"),
				g = n("./src/reddit/selectors/moderatingComments.ts"),
				v = n("./src/reddit/selectors/moderatorPermissions.ts"),
				O = n("./src/reddit/selectors/tooltip.ts"),
				I = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				k = n("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				S = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				_ = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				y = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				R = n("./src/reddit/icons/svgs/Show/index.tsx"),
				j = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				P = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				w = n.n(P);
			const M = Object(f.t)(),
				T = e => `Distinguish--Dropdown--${e}`,
				A = Object(a.c)({
					currentUser: I.i,
					collapsedBecauseCrowdControl: (e, {
						comment: t
					}) => Object(g.a)(e, {
						commentId: t.id
					}),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(O.b)(T(t.id))(e),
					moderatorPermissions: (e, t) => {
						const {
							comment: n
						} = t;
						return Object(f.g)(e, t) || Object(v.k)(e, {
							subredditId: n.subredditId
						})
					},
					modModeEnabled: f.Q
				}),
				N = Object(i.b)(A, (e, {
					comment: t
				}) => ({
					onApproveComment: () => e(Object(m.a)(t.id)),
					onDistinguishComment: (n, s) => e(Object(m.b)(t.id, n, s)),
					onLockComment: () => e(Object(m.c)(t.id)),
					onRemoveComment: () => e(Object(m.e)(t.id, !1)),
					onSpamComment: () => e(Object(m.e)(t.id, !0)),
					onShowComment: () => e(Object(m.d)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(u.h)({
						tooltipId: T(t.id)
					}))
				}));
			t.a = M(N(l.a.wrapped(Object(b.c)(({
				className: e,
				comment: t,
				currentUser: n,
				isCommentAuthor: o,
				collapsedBecauseCrowdControl: i,
				moderatorPermissions: a,
				modModeEnabled: l,
				onApproveComment: m,
				onDistinguishComment: u,
				onLockComment: b,
				onRemoveComment: f,
				onShowComment: g,
				onSpamComment: v,
				onToggleDistinguishDropdown: O,
				sendEvent: I,
				...P
			}) => {
				const M = Object(C.a)(a),
					A = Object(h.b)(t),
					N = t.isApproved && A,
					L = !!n && n.isEmployee,
					D = !t.isRemoved || t.bannedBy === c.k,
					F = i,
					V = e => I(Object(x.a)(e, t.id));
				return r.a.createElement("div", {
					className: e
				}, (t.bannedBy || A) && r.a.createElement(j.a, {
					text: N ? s.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : s.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						m(), V("approve")
					}
				}, r.a.createElement(E.a, {
					className: w.a.icon
				})), D && r.a.createElement(r.a.Fragment, null, r.a.createElement(j.a, {
					text: t.bannedBy === c.k ? s.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : s.fbt._("Remove", null, {
						hk: "VP5J0"
					}),
					onClick: () => {
						f(), t.bannedBy === c.k ? V("confirm_remove") : V("remove")
					}
				}, r.a.createElement(_.a, {
					className: w.a.icon
				})), r.a.createElement(j.a, {
					text: s.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						v(), V("spam")
					}
				}, r.a.createElement(y.a, {
					className: w.a.icon
				}))), r.a.createElement(j.a, {
					text: t.isLocked ? s.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : s.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						b(), V(t.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(S.a, {
					className: w.a.icon
				})), o && !L && !t.bannedBy && r.a.createElement(j.a, {
					className: Object(d.a)({
						[w.a.selected]: P.isDistinguishDropdownOpen
					}),
					onClick: () => {
						V("mod_distinguish_menu"), O()
					}
				}, r.a.createElement(k.a, null), r.a.createElement(p.a, {
					isAdminDistinguished: t.isAdmin,
					isDropdownOpen: P.isDistinguishDropdownOpen,
					isModDistinguished: t.isMod,
					isStickied: t.isStickied,
					isTopLevelComment: !t.parentId,
					isUserEmployee: L,
					isUserMod: M,
					onDistinguishComment: u,
					sendEventWithName: V,
					tooltipId: T(t.id)
				})), F && r.a.createElement(j.a, {
					text: s.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						g()
					}
				}, r.a.createElement(R.a, {
					className: Object(d.a)(w.a.icon, w.a.Show)
				})))
			}), "CommentModToolsFlatlist", w.a)))
		},
		"./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less": function(e, t, n) {
			e.exports = {
				author: "DjcdNGtVXPcxG0yiFXIoZ",
				authorLine: "_1a_HxF03jCyxnx706hQmJR",
				headerLine: "_2nobNdIwmDrXK7NZps5zUO",
				container: "-Xcv3XBXmgiY2X5RqaPbO",
				cryptoPoints: "_2bfuNFXt4pN8991xPpimzy",
				metaText: "_3yx4Dn0W3Yunucf5sVJeFU",
				separator: "_8b8fUdBRxCYj9MkNpFvvv",
				userFlairLine: "_3w527zTLhXkd08MyacMV9H"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/author.m.less": function(e, t, n) {
			e.exports = {
				authorHoverCard: "sMaSljeAO1a-nAhrURxdj",
				userBadges: "R8aGxV4Lc_7mA2dO5oWDL"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less": function(e, t, n) {
			e.exports = {
				cakeIcon: "qzCz_F3Awvfuuy1_7cdqT"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less": function(e, t, n) {
			e.exports = {
				commentAuthorLink: "wM6scouPXXsFDSZmZPHRo"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less": function(e, t, n) {
			e.exports = {
				crowdControlText: "_3UBJEBi_CJ8y1i9Up_67Hb"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/edited.m.less": function(e, t, n) {
			e.exports = {
				editedText: "_18WUrfxbke5CjwIjhXu6C-"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, n) {
			e.exports = {
				badgeIconStyle: "_2MlVoXUc3Eo3KGWDukM9xn",
				modBadgeIconStyle: "_1kqPGnOAdnd9gPUXDU2_AS",
				RightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				rightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				MetaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				metaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				publicPoints: "_2LXcsgibmlCEsBPk8MLy7e",
				AdminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				adminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				AdminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				adminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				ModeratorIcon: "rZkjnStRKzlmtr__ixhKy",
				moderatorIcon: "rZkjnStRKzlmtr__ixhKy",
				OpIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				opIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				ContractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				contractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				TopSupporterIcon: "_2Cj3vP3_ckCL5Fy6ZU7YGR",
				topSupporterIcon: "_2Cj3vP3_ckCL5Fy6ZU7YGR",
				redditorIcon: "_2SkK42s487b14gsRa4zinm",
				MetaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				metaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				DeletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				deletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				container: "_3ezOJqKdLbgkHsXcfvS5SA",
				collapsed: "_2k27lgIDltx9kOzVGXt48i",
				hasBadges: "_1KMFaeLEhRikeFEOlWE9Ti",
				liveStreaming: "_1iUed95f0HTc84gBtoOxdc",
				metaText: "_3_GZIIN1xcMEC5AVuv4kfa",
				separator: "_1PuBpmbH2FA5sozYR7EuCs",
				icon2020Styles: "_3N-ztylrPoAFspBRmaxjS0"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/hooks/useTracking.ts"),
				c = n("./src/reddit/actions/gold/powerups.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/lessComponent.tsx"),
				h = n("./src/reddit/helpers/trackers/powerups.ts"),
				b = n("./src/reddit/components/AwardBadges/index.tsx"),
				f = n("./src/reddit/components/AuthorLink/index.tsx"),
				C = n("./src/reddit/selectors/experiments/econ/commentHeaderRedesign.ts"),
				x = n("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				g = n.n(x);
			const v = e => {
				const t = Object(i.e)(C.a),
					{
						className: n,
						comment: s,
						children: o,
						isAuthorDeleted: a,
						isLivestreaming: d,
						isStrong: c,
						style: l
					} = e;
				return r.a.createElement(f.a, {
					className: Object(m.a)(g.a.commentAuthorLink, n),
					author: s.author,
					isAdmin: s.isAdmin,
					isAdminEmeritus: s.distinguishType === u.C.ALUMNI_ADMIN,
					isAuthorDeleted: a,
					isLivestreaming: d,
					isMod: s.isMod,
					isOp: s.isOp,
					isStrong: c,
					isUnstyled: t,
					style: l
				}, o, s.author)
			};
			var O = n("./src/reddit/models/Comment/index.ts"),
				I = n("./src/reddit/components/Flair/index.tsx"),
				E = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				k = n("./src/reddit/components/PostTopMeta/index.tsx"),
				S = n("./src/reddit/controls/MetaData/index.tsx"),
				_ = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				y = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				R = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				j = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				P = n.n(j);
			const w = ({
				authorClassName: e,
				children: t,
				comment: n,
				isLivestreaming: s,
				isStrong: o,
				renderedInOverlay: i
			}) => r.a.createElement(r.a.Fragment, null, !Object(O.e)(n) && r.a.createElement(_.b, {
				className: P.a.userBadges,
				showAddCustom: !0,
				subredditId: n.subredditId,
				userId: n.authorId,
				uniqueIdentifier: n.id
			}), r.a.createElement(R.b, {
				className: P.a.authorHoverCard,
				postOrComment: n,
				tooltipType: i ? k.c.Lightbox : void 0
			}, r.a.createElement(y.b, {
				ignore: Object(O.e)(n) || n.distinguishType !== u.C.NONE,
				subredditId: n.subredditId,
				userId: n.authorId
			}, r.a.createElement(v, {
				className: e,
				comment: n,
				isLivestreaming: s,
				isStrong: o,
				isAuthorDeleted: Object(O.e)(n)
			}, t))));
			var M = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				T = n("./src/reddit/icons/fonts/index.tsx"),
				A = n("./src/reddit/icons/svgs/Cake/index.tsx");
			const N = (e, t, n = !1) => `${e}${t}${n?"inOverlay":""}`;
			var L = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				D = n.n(L);
			const F = ({
				commentId: e,
				isInIcons2020: t,
				renderedInOverlay: n
			}) => {
				const o = Object(i.d)(),
					a = () => o(Object(l.h)({
						tooltipId: d
					})),
					d = N("CommentTopMeta--cakeday--", e, n),
					c = s.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, t ? r.a.createElement(T.a, {
					name: "cake",
					isFilled: !0,
					className: D.a.cakeIcon,
					"aria-label": c,
					id: d,
					onMouseEnter: a,
					onMouseLeave: a
				}) : r.a.createElement(A.a, {
					"aria-label": c,
					className: D.a.cakeIcon,
					id: d,
					onMouseEnter: a,
					onMouseLeave: a
				}), r.a.createElement(M.c, {
					tooltipId: d,
					text: c
				}))
			};
			var V = n("./src/lib/addQueryParams/index.ts"),
				B = n("./src/lib/humanizeDateTime/index.ts"),
				H = n("./src/lib/timeAgo/index.ts"),
				U = n("./src/reddit/actions/comment/index.ts");
			const W = e => {
					const {
						className: t,
						comment: n,
						compact: s,
						renderedInOverlay: o
					} = e, a = Object(i.d)(), d = N("CommentTopMeta--Created--", n.id, o), c = () => a(Object(l.h)({
						tooltipId: d
					}));
					return r.a.createElement("a", {
						className: t,
						href: Object(V.a)(n.permalink, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: d,
						onClick: () => {
							z(a, n.id)
						},
						onMouseEnter: c,
						onMouseLeave: c,
						target: "_blank",
						rel: "noopener noreferrer"
					}, Object(H.d)(n.created, {
						noPostfix: s,
						shortenedUnit: s
					}), r.a.createElement(M.c, {
						tooltipId: d,
						text: Object(B.a)(n.created)
					}))
				},
				z = (e, t) => {
					window.addEventListener("focus", (function n() {
						G(e, t, n)
					}))
				},
				G = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(U.f)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(U.f)({
						commentListNodeId: t
					})), 5e3)
				};
			var X = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				q = n.n(X);
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Q = () => r.a.createElement(S.a, {
				className: q.a.crowdControlText
			}, K._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var J = n("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				Z = n.n(J);
			const {
				fbt: Y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), $ = ({
				compact: e,
				editedAt: t
			}) => r.a.createElement(S.a, {
				className: Z.a.editedText
			}, Y._("edited {time}", [Y._param("time", Object(H.d)(t, {
				noPostfix: e,
				shortenedUnit: e
			}))], {
				hk: "1tiB0u"
			}));
			var ee = n("./src/reddit/helpers/isRemoved.ts"),
				te = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				ne = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				se = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				oe = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				re = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				ie = n("./src/reddit/icons/fonts/Report/index.tsx"),
				ae = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				de = n("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				ce = n("./src/reddit/models/AutomatedReporting/index.ts"),
				le = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				me = n.n(le);
			const ue = ({
				comment: e,
				ignoreLock: t,
				isInIcons2020: o,
				renderedInOverlay: a
			}) => {
				const d = Object(i.d)(),
					c = e => () => d(Object(l.f)({
						tooltipId: e
					})),
					u = () => d(Object(l.i)()),
					p = t => N(t, e.id, a),
					h = p("CommentTopMeta--Automod--"),
					b = p("CommentTopMeta--Approve--"),
					f = p("CommentTopMeta--Remove--"),
					C = p("CommentTopMeta--Report--"),
					x = p("CommentTopMeta--Spam--"),
					g = e.bannedBy && Object(ce.b)(e.bannedBy),
					v = c(f);
				return r.a.createElement(r.a.Fragment, null, (e.approvedBy || e.isApproved) && r.a.createElement(r.a.Fragment, null, r.a.createElement(se.a, {
					className: me.a.approveIcon,
					desc: Object(te.a)(e),
					id: b,
					onMouseEnter: c(b),
					onMouseLeave: u,
					isFilled: o
				}), r.a.createElement(M.c, {
					tooltipId: b,
					text: Object(te.a)(e)
				})), Object(ee.a)(e) && !g && r.a.createElement(r.a.Fragment, null, r.a.createElement(re.a, {
					className: me.a.removeIcon,
					desc: Object(te.c)(e),
					id: f,
					onMouseEnter: v,
					onMouseLeave: u,
					isFilled: o
				}), r.a.createElement(M.c, {
					tooltipId: f,
					text: Object(te.c)(e)
				})), Object(ee.a)(e) && e.isRemoved && !e.modNote && !e.modRemovalReason && r.a.createElement("a", {
					className: me.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => d(t.fetchReasonsAndOpenModal(e.subredditId, [e.id])))
					}
				}, s.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(ee.a)(e) && !(e.isRemoved && !e.modNote && !e.modRemovalReason) && !g && r.a.createElement("a", {
					className: me.a.removalReason,
					onMouseEnter: v,
					onMouseLeave: u
				}, s.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), e.isLocked && !t && r.a.createElement(oe.a, {
					className: me.a.lockIcon,
					desc: s.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: o
				}), e.bannedBy && e.isSpam && r.a.createElement(ae.a, {
					className: me.a.spamIcon,
					desc: Object(te.e)(e),
					id: x,
					onMouseEnter: c(x),
					onMouseLeave: u,
					isFilled: o
				}), e.bannedBy && e.isSpam && r.a.createElement(M.c, {
					tooltipId: x,
					text: Object(te.e)(e)
				}), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && (o ? r.a.createElement(T.a, {
					name: "bot",
					isFilled: !0,
					className: Object(m.a)(me.a.automoderatorIcon, {
						[me.a.removed]: !!e.bannedBy
					}),
					"aria-label": te.b,
					id: h,
					key: h,
					onMouseEnter: c(h),
					onMouseLeave: u
				}) : r.a.createElement(de.a, {
					className: Object(m.a)(me.a.automoderatorIcon, {
						[me.a.removed]: !!e.bannedBy
					}),
					desc: te.b,
					id: h,
					key: h,
					onMouseEnter: c(h),
					onMouseLeave: u
				})), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && r.a.createElement(M.c, {
					tooltipId: h,
					text: te.b
				}), Object(ne.a)(e) && r.a.createElement(ie.a, {
					className: me.a.reportIcon,
					desc: Object(te.d)(e.numReports),
					id: C,
					onMouseEnter: c(C),
					onMouseLeave: u,
					isFilled: o
				}), Object(ne.a)(e) && r.a.createElement(M.c, {
					tooltipId: C,
					text: Object(te.d)(e.numReports)
				}), g && r.a.createElement("a", {
					className: me.a.removalReason
				}, s.fbt._("• Removed by the Automated {filterName}", [s.fbt._param("filterName", g)], {
					hk: "3C408F"
				})))
			};
			var pe = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				he = n.n(pe);
			const {
				fbt: be
			} = n("./node_modules/fbt/lib/FbtPublic.js"), fe = () => r.a.createElement(S.a, {
				className: he.a.stickiedText
			}, be._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var Ce = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				xe = n.n(Ce);
			const ge = e => {
				const {
					className: t,
					collapsedBecauseCrowdControl: n,
					comment: o,
					flair: i,
					ignoreLock: a,
					isInIcons2020: d,
					isLivestreaming: c,
					renderedInOverlay: l
				} = e;
				return o.isDeleted ? r.a.createElement("div", {
					className: Object(m.a)(xe.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: xe.a.authorLine
				}, r.a.createElement("span", {
					className: xe.a.metaText
				}, o.deletedBy === O.b.User ? s.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : s.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(S.c, {
					className: xe.a.separator
				}), r.a.createElement(W, {
					key: "Created",
					className: xe.a.metaText,
					comment: o,
					compact: !0,
					renderedInOverlay: l
				}))) : r.a.createElement("div", {
					className: Object(m.a)(xe.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: xe.a.authorLine
				}, r.a.createElement(w, {
					authorClassName: xe.a.author,
					comment: o,
					isLivestreaming: c,
					renderedInOverlay: l
				}), n && r.a.createElement(Q, null), o.isAuthorCakeday && r.a.createElement(F, {
					commentId: o.id,
					isInIcons2020: d,
					renderedInOverlay: l
				}), r.a.createElement(E.a, {
					className: xe.a.cryptoPoints,
					contentId: o.id,
					subredditId: o.subredditId,
					userId: o.authorId,
					username: o.author
				}), r.a.createElement(S.c, {
					className: xe.a.separator
				}), r.a.createElement(W, {
					key: "Created",
					className: xe.a.metaText,
					comment: o,
					compact: !0,
					renderedInOverlay: l
				}), o.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(S.c, {
					className: xe.a.separator
				}), r.a.createElement(fe, null)), o.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(S.c, {
					className: xe.a.separator
				}), r.a.createElement($, {
					compact: !0,
					editedAt: o.editedAt
				})), r.a.createElement(ue, {
					comment: o,
					ignoreLock: a,
					isInIcons2020: d,
					renderedInOverlay: l
				}), r.a.createElement(b.a, {
					thing: o,
					tooltipType: l ? k.c.Lightbox : void 0
				})), i && r.a.createElement("span", {
					className: xe.a.userFlairLine
				}, r.a.createElement(I.b, {
					flair: i,
					forceSmallEmojis: !0
				})))
			};
			var ve = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				Oe = n("./src/reddit/selectors/economics.ts"),
				Ie = n("./src/reddit/models/Flair/index.ts"),
				Ee = n("./src/reddit/icons/fonts/Admin/index.tsx"),
				ke = n("./src/reddit/icons/fonts/Op/index.tsx"),
				Se = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				_e = n("./src/reddit/selectors/experiments/coreStyles.ts"),
				ye = n("./src/reddit/selectors/subreddit.ts"),
				Re = n("./src/reddit/selectors/userFlair.ts"),
				je = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Pe = n.n(je);

			function we() {
				return (we = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Me = p.a.wrapped(I.b, "RightPositionedAuthorFlair", Pe.a),
				Te = p.a.wrapped(Ee.a, "AdminIcon", Pe.a),
				Ae = p.a.div("AdminEmeritus", Pe.a),
				Ne = p.a.wrapped(Se.a, "ModeratorIcon", Pe.a),
				Le = p.a.wrapped(ke.a, "OpIcon", Pe.a),
				De = p.a.wrapped(Ee.a, "ContractorIcon", Pe.a),
				Fe = p.a.span("DeletedText", Pe.a),
				Ve = p.a.wrapped(S.a, "MetaSeparator", Pe.a),
				Be = e => (t, {
					comment: n,
					renderedInOverlay: s
				}) => N(e, n.id, s),
				He = () => s.fbt._("Reddit admin, speaking officially", null, {
					hk: "3vg8wE"
				}),
				Ue = () => s.fbt._("Reddit admin emeritus", null, {
					hk: "1Md5AV"
				}),
				We = e => s.fbt._("Moderator of {subredditDisplayText}, speaking officially", [s.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				}),
				ze = () => s.fbt._("Original Poster", null, {
					hk: "3DqK8z"
				}),
				Ge = () => s.fbt._("Reddit contractor", null, {
					hk: "3APwEh"
				}),
				Xe = Object(i.b)(() => Object(a.c)({
					adminTooltipId: Be("CommentTopMeta--Admin--"),
					adminEmeritusTooltipId: Be("CommentTopMeta--AdEm--"),
					contractorTooltipId: Be("CommentTopMeta--Contractor--"),
					gildedTooltipId: Be("CommentTopMeta--Gold--"),
					modTooltipId: Be("CommentTopMeta--Mod--"),
					opTooltipId: Be("CommentTopMeta--OP--"),
					topSupporterTooltipId: Be("CommentTopMeta--TopSupporter--"),
					hasBadges: (e, {
						comment: t
					}) => !!Object(Oe.q)(e, t.subredditId, t.authorId).length,
					subredditDisplayText: (e, t) => {
						const n = Object(ye.I)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, {
						comment: t
					}) => Object(Re.d)(e, {
						subredditId: t.subredditId
					}),
					isInIcons2020: _e.a,
					isCommentHeaderRedesignEnabled: C.a
				}), (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					openPowerupsModal: () => e(Object(c.c)())
				}));
			t.a = Xe(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: n,
					children: s,
					className: o,
					collapsed: i,
					collapsedBecauseCrowdControl: a,
					comment: c,
					commentsPageKey: l,
					contractorTooltipId: u,
					compact: p,
					flair: f,
					flairPosition: C,
					hasBadges: x,
					isCommentHeaderRedesignEnabled: g,
					isInIcons2020: v,
					isLivestreaming: O,
					isPostComment: _,
					ignoreFlairPosition: y,
					ignoreLock: R,
					modTooltipId: j,
					onHideTooltip: P,
					onShowTooltip: M,
					opTooltipId: T,
					openPowerupsModal: A,
					renderContractorBadge: N,
					renderedInOverlay: L,
					subredditDisplayText: D,
					topSupporterTooltipId: F
				} = e, V = Object(d.a)(), B = r.a.createElement(r.a.Fragment, null, r.a.createElement(ve.b, {
					commentId: c.id
				}), r.a.createElement(ve.a, {
					commentId: c.id,
					commentsPageKey: l
				}));
				if (_ && g) return r.a.createElement(r.a.Fragment, null, r.a.createElement(ge, {
					className: Object(m.a)(o, {
						[Pe.a.collapsed]: i
					}),
					collapsedBecauseCrowdControl: a,
					comment: c,
					flair: f || null,
					ignoreLock: R,
					isInIcons2020: v,
					isLivestreaming: O,
					renderedInOverlay: L
				}), B);
				if (c.isDeleted) return r.a.createElement(qe, we({}, e, {
					className: Object(m.a)(o, Pe.a.container, {
						[Pe.a.collapsed]: i
					})
				}));
				if (i) return r.a.createElement(Ke, we({}, e, {
					className: Object(m.a)(o, Pe.a.container, {
						[Pe.a.collapsed]: i
					})
				}));
				const H = !y && C === Ie.b.Left;
				return r.a.createElement("div", {
					className: Object(m.a)(o, Pe.a.container, {
						[Pe.a.collapsed]: i,
						[Pe.a.hasBadges]: x,
						[Pe.a.liveStreaming]: O
					}),
					"data-testid": "comment-top-meta"
				}, f && H && r.a.createElement(I.b, {
					flair: f,
					forceSmallEmojis: p
				}), s && s, r.a.createElement(w, {
					comment: c,
					isLivestreaming: O,
					isStrong: !!p,
					renderedInOverlay: L
				}), a && r.a.createElement(Q, null), a && r.a.createElement(S.c, {
					className: Pe.a.metaText,
					key: "crowdControlSeparator"
				}), f && !H && r.a.createElement(Me, {
					flair: f,
					forceSmallEmojis: p
				}), !p && r.a.createElement(E.a, {
					className: Pe.a.publicPoints,
					contentId: c.id,
					metaSeparator: r.a.createElement(S.c, {
						className: Pe.a.metaText
					}),
					subredditId: c.subredditId,
					userId: c.authorId,
					username: c.author
				}), r.a.createElement(r.a.Fragment, null, B, r.a.createElement(Je, {
					comment: c,
					compact: p,
					adminTooltipId: n,
					adminEmeritusTooltipId: t,
					contractorTooltipId: u,
					modTooltipId: j,
					onHideTooltip: P,
					onShowTooltip: M,
					openPowerupsModal: () => {
						V(Object(h.k)("comment")), A()
					},
					opTooltipId: T,
					renderContractorBadge: N,
					renderedInOverlay: L,
					subredditDisplayText: D,
					topSupporterTooltipId: F,
					isInIcons2020: v
				})), !p && r.a.createElement(r.a.Fragment, null, !c.isDeleted && !_ && r.a.createElement(r.a.Fragment, null, r.a.createElement(S.b, {
					className: Pe.a.metaText,
					isScoreHidden: c.isScoreHidden,
					score: c.score
				}), r.a.createElement(S.c, {
					className: Pe.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(W, {
					key: "Created",
					className: Pe.a.MetaLink,
					comment: c,
					renderedInOverlay: L
				}), c.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(S.c, {
					className: Pe.a.separator
				}), r.a.createElement(fe, null)), c.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(S.c, {
					className: Pe.a.separator
				}), r.a.createElement($, {
					editedAt: c.editedAt
				}))), r.a.createElement(ue, {
					comment: c,
					ignoreLock: R,
					isInIcons2020: v,
					renderedInOverlay: L
				}), r.a.createElement(b.a, {
					thing: c,
					tooltipType: L ? k.c.Lightbox : void 0
				}))
			});
			const qe = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: o,
						comment: i,
						renderedInOverlay: a
					} = e;
					return r.a.createElement("div", {
						className: o
					}, r.a.createElement(Fe, null, i.deletedBy === O.b.User ? s.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : s.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(W, {
						key: "Created",
						className: Pe.a.MetaLink,
						comment: i,
						renderedInOverlay: a
					}), n && Qe({
						childrenInfo: t
					}))
				},
				Ke = e => {
					const {
						comment: t,
						className: n,
						childrenInfo: s,
						renderedInOverlay: o
					} = e;
					return r.a.createElement("div", {
						className: n
					}, r.a.createElement("div", null, r.a.createElement(v, {
						comment: t,
						isAuthorDeleted: Object(O.e)(t)
					})), r.a.createElement(S.b, {
						className: Pe.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(S.c, {
						className: Pe.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(W, {
						key: "Created",
						className: Pe.a.MetaLink,
						comment: t,
						renderedInOverlay: o
					}), Qe({
						childrenInfo: s
					}))
				},
				Qe = e => {
					const {
						hasContinueThread: t,
						numChildren: n
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return r.a.createElement(Ve, {
						className: Pe.a.metaText
					}, t ? s.fbt._({
						"*": "More than {number} children",
						_1: "More than 1 child"
					}, [s.fbt._plural(n, "number")], {
						hk: "13XC7a"
					}) : s.fbt._({
						"*": "{number} children",
						_1: "1 child"
					}, [s.fbt._plural(n, "number")], {
						hk: "dhX9w"
					}))
				};
			class Je extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId), this.onShowTopSupporterTooltip = () => this.props.onShowTooltip(this.props.topSupporterTooltipId)
				}
				render() {
					const {
						comment: e,
						isInIcons2020: t,
						renderedInOverlay: n,
						...s
					} = this.props;
					return r.a.createElement(o.Fragment, null, e.isAuthorCakeday && r.a.createElement(F, {
						commentId: e.id,
						isInIcons2020: t,
						renderedInOverlay: n
					}), e.isAdmin && r.a.createElement(Te, {
						desc: He(),
						id: s.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: s.onHideTooltip,
						isFilled: t
					}), e.isAdmin && Ze(s.adminTooltipId, He()), e.distinguishType === u.C.ALUMNI_ADMIN && r.a.createElement(Ae, {
						"aria-label": Ue(),
						id: s.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: s.onHideTooltip
					}, "Δ"), e.distinguishType === u.C.ALUMNI_ADMIN && Ze(s.adminEmeritusTooltipId, Ue()), e.isMod && (t ? r.a.createElement(T.a, {
						name: "mod",
						isFilled: !0,
						className: Pe.a.ModeratorIcon,
						"aria-label": We(s.subredditDisplayText),
						id: s.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: s.onHideTooltip
					}) : r.a.createElement(Ne, {
						desc: We(s.subredditDisplayText),
						id: s.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: s.onHideTooltip
					})), e.isMod && Ze(s.modTooltipId, We(s.subredditDisplayText)), e.isOp && r.a.createElement(Le, {
						desc: ze(),
						id: s.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: s.onHideTooltip,
						isFilled: t
					}), e.isOp && Ze(s.opTooltipId, ze()), s.renderContractorBadge && r.a.createElement(De, {
						desc: Ge(),
						id: s.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: s.onHideTooltip,
						isFilled: t
					}), s.renderContractorBadge && Ze(s.contractorTooltipId, Ge()))
				}
			}
			const Ze = (e, t) => r.a.createElement(M.c, {
				tooltipId: e,
				text: t
			})
		},
		"./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less": function(e, t, n) {
			e.exports = {
				approveIcon: "_3Jlybj1GmQS_PfZVxE6yR1",
				automoderatorIcon: "_2EBjdWEqs2dwPePq0_1vJn",
				lockIcon: "YjyVr4SnBmO7WorLVMXq5",
				removeIcon: "_3M_jIwyB1POxBFR2jnGIp_",
				reportIcon: "_3hI84iVaolaHi85h6liPyp",
				spamIcon: "MufLXlXcv1oes9OlakuXr",
				removed: "_2LQnjoTNHDUWKBOoq2gTlm",
				removalReason: "EM8fL_jC3oe9bruIOZt2U"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less": function(e, t, n) {
			e.exports = {
				stickiedText: "_2wd-K5Djdc9TGPRGDgmkpX"
			}
		},
		"./src/reddit/components/Comments/UnthreadedComment/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Comments/UnthreadedComment/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return P
			})), n.d(t, "b", (function() {
				return T
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/actions/comment/index.ts"),
				c = n("./src/reddit/actions/comment/moderation.ts"),
				l = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				m = n("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				u = n("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				p = n("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				h = n("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				b = n("./src/reddit/components/ModModeReports/index.tsx"),
				f = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				C = n("./src/reddit/components/RichTextJson/index.tsx"),
				x = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				g = n("./src/reddit/models/Vote/index.ts"),
				v = n("./src/reddit/selectors/comments.ts"),
				O = n("./src/reddit/selectors/commentSelector.ts"),
				I = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/components/Comments/UnthreadedComment/index.m.less"),
				k = n.n(E),
				S = n("./src/lib/lessComponent.tsx");
			const _ = S.a.div("VoteSpacer", k.a),
				y = S.a.div("ContentWrapper", k.a),
				R = S.a.div("CommentContentWrapper", k.a),
				j = S.a.div("CommentBody", k.a),
				P = S.a.div("ParentPostTitle", k.a),
				w = S.a.div("CommentParentWrapper", k.a),
				M = Object(i.c)({
					comment: (e, t) => Object(O.a)(e, t),
					flair: v.e,
					subreddit: I.I
				}),
				T = Object(r.b)(M, (e, {
					commentId: t,
					trackClick: n
				}) => ({
					onIgnoreReports: () => e(Object(c.g)(t)),
					onVoteClick: s => {
						const [o, r] = s === g.a.upvoted ? [Object(d.n)(t), "upvote_comment"] : [Object(d.i)(t), "downvote_comment"];
						n(r)(), e(o)
					}
				})),
				A = Object(a.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.c = T(S.a.wrapped(e => {
				const {
					className: t,
					comment: n,
					flair: s,
					hasReports: r,
					isCheckboxSelected: i = !1,
					onIgnoreReports: a,
					onVoteClick: d,
					showModTools: c,
					subreddit: g,
					showBulkActionCheckbox: v,
					toggleCheckbox: O
				} = e;
				return o.a.createElement(m.a, {
					className: t,
					clickTrackingId: n.id,
					permalink: n.permalink
				}, o.a.createElement(f.a, {
					model: n,
					handleVote: d,
					showBulkActionCheckbox: v,
					isCheckboxSelected: i,
					toggleCheckbox: O,
					subreddit: g
				}), o.a.createElement(_, null, o.a.createElement(y, null, o.a.createElement(w, null, n.postTitle && o.a.createElement(P, null, n.postTitle), n.postAuthor && o.a.createElement(h.a, {
					comment: n
				})), o.a.createElement(R, null, o.a.createElement(u.a, {
					comment: n
				}, o.a.createElement(j, null, o.a.createElement(C.a, {
					content: Object(x.a)(n),
					rtJsonElementProps: A(e)
				})), o.a.createElement(p.a, {
					comment: n,
					flair: s,
					subredditName: g ? g.displayText : null
				}), r && o.a.createElement(b.a, {
					onIgnoreReports: a,
					reportable: n
				}), c && !n.isDeleted && o.a.createElement(l.a, {
					comment: n
				}))))))
			}, "Component", k.a))
		},
		"./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/addQueryParams/index.ts"),
				a = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				d = n("./src/reddit/helpers/overlay/index.ts");
			const c = Object(r.b)(null, e => ({
				openLightbox: t => e(Object(d.a)(t))
			}));
			class l extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						permalink: t,
						openLightbox: n,
						...s
					} = this.props, r = s => e(() => s.metaKey || s.ctrlKey || 1 === s.button ? window.open(Object(i.a)(t, {
						context: 3
					})) : n(Object(i.a)(t, {
						context: 3
					})))(s);
					return o.a.createElement("div", {
						className: s.className,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3)), 1 === e.button && r(e)
						},
						onClick: e => {
							!this.cancelClick && 0 === e.button && r(e)
						}
					}, s.children)
				}
			}
			t.a = c(Object(a.c)(l))
		},
		"./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				DashWrapper: "_3Ed3UKndPjQ4kkX0QvOz3u",
				dashWrapper: "_3Ed3UKndPjQ4kkX0QvOz3u"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less"),
				a = n.n(i);
			const d = r.a.div("DashWrapper", a.a);
			t.a = e => null === e.comment.parentId ? o.a.createElement(d, null, e.children) : o.a.createElement(d, null, o.a.createElement(d, null, e.children))
		},
		"./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				a = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less"),
				c = n.n(d),
				l = n("./src/lib/lessComponent.tsx");
			const m = l.a.wrapped(a.a, "Inline", c.a),
				u = l.a.wrapped(a.a, "PostedInfo", c.a),
				p = l.a.wrapped(a.a, "SubredditWrapper", c.a),
				h = l.a.div("TextContainer", c.a),
				b = l.a.wrapped(i.a, "TopMeta", c.a);
			t.a = e => r.a.createElement(m, {
				className: e.className
			}, e.subredditName && r.a.createElement(p, null, e.subredditName && r.a.createElement(h, null, e.subredditName)), r.a.createElement(u, null, r.a.createElement(h, null, `${s.fbt._("Commented by",null,{hk:"4Dveap"})}`), r.a.createElement(b, {
				collapsedBecauseCrowdControl: e.comment.collapsedBecauseCrowdControl,
				collapsed: !1,
				comment: e.comment,
				flair: e.flair,
				renderedInOverlay: !1
			})))
		},
		"./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/AuthorLink/index.tsx"),
				i = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				a = n("./src/reddit/components/SubredditIcon/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				c = n("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less"),
				l = n.n(c),
				m = n("./src/lib/lessComponent.tsx");
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = m.a.wrapped(r.a, "AuthorLink", l.a), h = m.a.wrapped(d.a, "Inline", l.a), b = m.a.wrapped(d.a, "SubredditWrapper", l.a), f = m.a.div("TextContainer", l.a), C = m.a.wrapped(a.b, "SubredditIcon", l.a);
			t.a = e => o.a.createElement(h, null, e.subredditOrProfile && o.a.createElement(b, null, e.subredditOrProfile && o.a.createElement(C, {
				subredditOrProfile: e.subredditOrProfile
			}), e.subredditOrProfile && o.a.createElement(f, null, e.subredditOrProfile.displayText)), u._("posted by", null, {
				hk: "1EuRc2"
			}), e.comment.postAuthor && o.a.createElement(i.b, {
				postOrComment: e.comment,
				author: e.comment.postAuthor
			}, o.a.createElement(p, {
				author: e.comment.postAuthor,
				isUnstyled: !0
			}, `u/${e.comment.postAuthor}`)))
		},
		"./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less": function(e, t, n) {
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
		"./src/reddit/components/DistinguishCommentDropdown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/constants/index.ts"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				m = n("./src/reddit/layout/row/Inline/index.tsx"),
				u = n("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				p = n.n(u);
			const h = a.a.div("DistinguishWrapper", p.a),
				b = a.a.wrapped(m.a, "Inline", p.a),
				f = a.a.wrapped(c.a, "RadioOff", p.a),
				C = a.a.wrapped(l.a, "RadioOn", p.a),
				x = e => o.a.createElement(b, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? o.a.createElement(C, null) : o.a.createElement(f, null), e.text),
				g = a.a.wrapped(e => {
					const {
						className: t,
						style: n,
						isAdminDistinguished: s,
						isUserEmployee: a,
						isUserMod: d,
						isModDistinguished: c,
						isStickied: l,
						isTopLevelComment: m,
						onDistinguishComment: u
					} = e;
					return o.a.createElement(h, {
						className: t,
						style: n
					}, o.a.createElement(x, {
						onClick: () => u(r.C.NONE, null),
						selected: !c && !s,
						text: i.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), d && o.a.createElement(x, {
						onClick: () => u(r.C.MODERATOR, null),
						selected: c && !l,
						text: i.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), m && d && o.a.createElement(x, {
						onClick: () => u(r.C.MODERATOR, !0),
						selected: c && l,
						text: i.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), a && o.a.createElement(x, {
						onClick: () => u(r.C.ADMIN, null),
						selected: s && !l,
						text: i.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), a && d && m && o.a.createElement(x, {
						onClick: () => u(r.C.ADMIN, !0),
						selected: s && l,
						text: i.fbt._("Distinguish as Admin and Sticky", null, {
							hk: "3x8QWN"
						})
					}))
				}, "DistinguishOptions", p.a);
			var v = Object(d.a)(g);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: n,
					isUserEmployee: s,
					isUserMod: i,
					isModDistinguished: a,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: l,
					sendEventWithName: m,
					tooltipId: u
				} = e;
				return o.a.createElement("div", {
					className: t,
					id: u
				}, o.a.createElement(v, {
					isAdminDistinguished: n,
					isUserEmployee: s,
					isUserMod: i,
					isModDistinguished: a,
					isOpen: e.isDropdownOpen,
					tooltipId: u,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: (e, t) => {
						l(e, t), e === r.C.MODERATOR ? m(!d && t ? "distinguish_sticky" : "distinguish") : e === r.C.ADMIN ? m("admin_distinguish") : a && e !== r.C.MODERATOR ? m("undistinguish") : n && e !== r.C.ADMIN && m("admin_undistinguish"), d && !t && m("unsticky")
					}
				}))
			}
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, n) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/ModModeReports/index.m.less"),
				d = n.n(a);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = i.a.div("Text", d.a), m = i.a.div("Placeholder", d.a), u = () => r.a.createElement(m, null, r.a.createElement(l, null, c._("Loading reports…", null, {
				hk: "4gwdQw"
			}))), p = Object(s.a)({
				resolved: {},
				chunkName: () => "ModerationDropdowns",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ModerationDropdowns").then(n.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeReports/_ModModeReports.tsx"
				}
			}, {
				fallback: r.a.createElement(u, null),
				ssr: !1
			});
			t.a = p
		},
		"./src/reddit/components/ModerationPrompts/Prompt.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/reportFlow/index.ts"),
				l = n("./src/reddit/components/Popup/index.tsx"),
				m = n("./src/reddit/components/Popup/Button.tsx"),
				u = n("./src/reddit/helpers/trackers/reportPrompt.ts"),
				p = n("./src/reddit/hooks/useTracking.ts"),
				h = n("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function b(e) {
				const {
					subredditName: t,
					post: n,
					isOverlay: b
				} = e, [f, C] = Object(o.useState)(!0), x = Object(h.b)(n.id, b), g = Object(i.d)(), v = Object(p.a)(), O = Object(h.a)(n, b), I = (e, s) => v(Object(u.a)(t, n.id, e, s));
				Object(o.useEffect)(() => {
					O && I("modal", "show")
				}, [O]);
				if (!O || !f) return null;
				const E = s.fbt._("Help r/{subredditName} mods", [s.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return r.a.createElement(l.a, {
					id: x,
					title: E,
					onClose: () => {
						C(!1), I("close", "click"), g(Object(d.A)()), g(Object(d.L)({
							[n.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						g(Object(d.A)())
					}
				}, r.a.createElement("p", null, s.fbt._("Report this post if it's breaking {=Reddit} or {=community} rules.", [s.fbt._param("=Reddit", r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/content-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, s.fbt._("Reddit", null, {
					hk: "4g8g4O"
				}))), s.fbt._param("=community", r.a.createElement(a.a, {
					to: `/r/${t}/about/rules`,
					target: "_blank"
				}, s.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), r.a.createElement(m.a, {
					onClick: () => (C(!1), I("report", "click"), void g(Object(c.c)(n.id)))
				}, s.fbt._("Report", null, {
					hk: "4oVcnd"
				})))
			}
		},
		"./src/reddit/components/ModerationPrompts/Survey.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/reportFlow/index.ts"),
				m = n("./src/reddit/components/Popup/index.tsx"),
				u = n("./src/reddit/components/Popup/Button.tsx"),
				p = n("./src/reddit/helpers/trackers/reportPrompt.ts"),
				h = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function f(e) {
				const {
					subredditName: t,
					post: n,
					isOverlay: f
				} = e, [C, x] = Object(r.useState)(s.Survey), g = Object(b.b)(n.id, f), v = Object(a.d)(), O = Object(h.a)(), I = Object(b.a)(n, f), E = (e, s) => O(Object(p.b)(t, n.id, e, s));
				Object(r.useEffect)(() => {
					I && E("modal", "show")
				}, [I]);
				const k = e => {
					x(s.Closed), E("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), v(Object(l.c)(n.id, void 0, e))
				};
				if (!I) return null;
				let S = null;
				const _ = {
					id: g,
					title: o.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						x(s.Closed), E("close", "click"), v(Object(c.A)())
					},
					onClickOutside: () => {
						v(Object(c.A)())
					}
				};
				switch (C) {
					case s.Survey:
						S = i.a.createElement(m.a, _, i.a.createElement("p", null, o.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [o.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), i.a.createElement(u.a, {
							onClick: () => {
								x(s.OffTopic), E("off_topic", "click")
							}
						}, o.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), i.a.createElement(u.a, {
							onClick: () => {
								x(s.DontLike), E("dont_like", "click")
							}
						}, o.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), i.a.createElement(u.a, {
							onClick: () => {
								x(s.BreaksRules), E("breaks_rules", "click")
							}
						}, o.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case s.OffTopic:
						S = i.a.createElement(m.a, _, i.a.createElement("p", null, o.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case s.DontLike:
						S = i.a.createElement(m.a, _, i.a.createElement("p", null, o.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case s.BreaksRules:
						S = i.a.createElement(m.a, _, i.a.createElement("p", null, o.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [o.fbt._param("=Reddit", i.a.createElement("a", {
							href: "https://www.redditinc.com/policies/content-policy",
							target: "_blank",
							rel: "noopener noreferrer"
						}, o.fbt._("Reddit", null, {
							hk: "1amvzD"
						}))), o.fbt._param("=community", i.a.createElement(d.a, {
							to: `/r/${t}/about/rules`,
							target: "_blank"
						}, o.fbt._("community", null, {
							hk: "2TnSrt"
						})))], {
							hk: "1mXxTX"
						})), i.a.createElement(u.a, {
							onClick: () => k("site")
						}, o.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), i.a.createElement(u.a, {
							onClick: () => k("community")
						}, o.fbt._("It breaks community rules", null, {
							hk: "3XbHan"
						})));
						break;
					case s.Closed:
				}
				return S
			}! function(e) {
				e[e.Survey = 0] = "Survey", e[e.OffTopic = 1] = "OffTopic", e[e.DontLike = 2] = "DontLike", e[e.BreaksRules = 3] = "BreaksRules", e[e.Closed = 4] = "Closed"
			}(s || (s = {}))
		},
		"./src/reddit/components/Popup/Button.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/Popup/index.m.less"),
				i = n.n(r);

			function a(e) {
				return o.a.createElement("button", {
					className: i.a.popupButton,
					onClick: e.onClick
				}, e.children)
			}
		},
		"./src/reddit/components/Popup/index.m.less": function(e, t, n) {
			e.exports = {
				popup: "t5ViKDVyrrlzRbCpXvJu7",
				header: "preWelIDv3a0Fgtd5_QjN",
				title: "_3Xw5NRiOh-SAcOXIUMIm-l",
				closeButton: "_3oee1_5V2jOvP4BaO2LCQu",
				popupButton: "_3nddrgCBXpzDP5XYzrH3ZY"
			}
		},
		"./src/reddit/components/Popup/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/uuid/v4.js"),
				i = n.n(r),
				a = n("./src/reddit/hooks/useOnClickOutside.ts"),
				d = n("./src/reddit/components/Popup/index.m.less"),
				c = n.n(d);

			function l(e) {
				const {
					id: t = i()(),
					onClose: n,
					onClickOutside: s,
					title: r,
					children: d
				} = e;
				return Object(a.a)(t, s), o.a.createElement("div", {
					id: t,
					"aria-modal": !0,
					className: c.a.popup,
					role: "dialog",
					tabIndex: -1
				}, o.a.createElement("h3", {
					className: c.a.header
				}, o.a.createElement("span", {
					className: c.a.title
				}, r), o.a.createElement("button", {
					className: c.a.closeButton,
					onClick: n
				}, "✕")), d)
			}
		},
		"./src/reddit/components/PostLeftRail/index.m.less": function(e, t, n) {
			e.exports = {
				postLeftRail: "_23h0-EcaBUorIHC-JZyh6J"
			}
		},
		"./src/reddit/components/PostLeftRail/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/constants/colors.ts"),
				d = n("./src/reddit/components/PostLeftRail/index.m.less"),
				c = n.n(d);
			const l = 40,
				m = e => e.isRemoved ? a.b.removed : e.isReported ? a.b.reported : "transparent",
				u = Object(i.a)(e => {
					const t = m(e),
						n = {
							width: `${l}px`,
							borderLeft: `4px solid ${t}`
						};
					return o.a.createElement("div", {
						className: Object(r.a)(c.a.postLeftRail, e.className),
						style: e.withoutComputedStyles ? {} : n
					}, e.children)
				});
			t.b = u
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				i = n("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				a = n("./src/reddit/components/PopupPortal/index.tsx"),
				d = n("./src/reddit/components/PostLeftRail/index.tsx"),
				c = n("./src/reddit/components/VerticalVotes/index.tsx"),
				l = n("./src/reddit/controls/Checkbox/index.tsx"),
				m = n("./src/reddit/helpers/isPost.ts"),
				u = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				p = n("./src/reddit/components/PostRailAndVotes/index.m.less"),
				h = n.n(p);
			t.a = e => {
				const {
					model: t,
					handleVote: n,
					showBulkActionCheckbox: s = !1,
					isCheckboxSelected: p = !1,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: f,
					redditStyle: C,
					subreddit: x,
					isOverlay: g,
					isActionBarAnimationEnabled: v,
					postId: O,
					isForceSelected: I
				} = e, E = `upvote-button-${t.id}${g?"-overlay":""}`, {
					moderationPrompt: k
				} = t;
				return o.a.createElement(d.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(u.a)(t),
					isSponsored: !!Object(m.b)(t) && t.isSponsored,
					redditStyle: C
				}, s && o.a.createElement(l.a, {
					isCheckboxSelected: p,
					toggleCheckbox: b
				}), o.a.createElement(c.a, {
					flairStyleTemplate: f,
					model: t,
					onVoteClick: n,
					redditStyle: C,
					upvoteTooltipId: E,
					isActionBarAnimationEnabled: v,
					postId: O,
					isForceSelected: I,
					scoreClassName: h.a.score
				}), k && o.a.createElement(a.b, {
					rightOf: E
				}, "survey" === k ? o.a.createElement(i.a, {
					post: t,
					subredditName: x.name,
					isOverlay: !!g
				}) : o.a.createElement(r.a, {
					post: t,
					subredditName: x.name,
					isOverlay: !!g
				})))
			}
		},
		"./src/reddit/components/Scroller/Simple.m.less": function(e, t, n) {
			e.exports = {
				Hidden: "wwHbgRV0ZXGp5CHHlpo5u",
				hidden: "wwHbgRV0ZXGp5CHHlpo5u"
			}
		},
		"./src/reddit/components/Scroller/Simple.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return K
			}));
			var s = n("./node_modules/lodash/debounce.js"),
				o = n.n(s),
				r = n("./node_modules/lodash/isNil.js"),
				i = n.n(r),
				a = n("./node_modules/react/index.js"),
				d = n.n(a),
				c = n("./node_modules/react-dom/index.js"),
				l = n("./node_modules/react-redux/es/index.js"),
				m = n("./node_modules/request-idle-callback/index.js"),
				u = n("./node_modules/reselect/es/index.js"),
				p = n("./src/lib/constants/index.ts"),
				h = n("./src/lib/fastdom/index.ts"),
				b = n("./node_modules/lodash/throttle.js"),
				f = n.n(b);
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
				E = e => ({
					eventHandler: e
				});

			function k({
				fn: e,
				subscriber: t,
				timeout: n
			}) {
				const s = [];
				let o, r, i;
				const a = () => {
						if (s.length < g) return;
						const e = O(),
							n = Math.min(x, s.length),
							o = s.splice(0, n);
						s.splice(0, s.length);
						const r = o[n - 1] - o[0];
						for (let t = o.shift(); o.length > 0; t = o.shift()) {
							const n = o[0] - t,
								s = Math.min(60, Math.ceil(1e3 / n));
							e[s <= 10 ? v.Max10 : 60 === s ? v.Max60 : I[Math.ceil(s / 10) - 1]] += n
						}
						const i = O();
						for (const t in e) i[t] = e[t] / r;
						t(i)
					},
					d = () => {
						void 0 !== i && (window.clearTimeout(i), i = void 0)
					},
					c = () => {
						void 0 !== o && (cancelAnimationFrame(o), o = void 0), void 0 !== r && (window.clearInterval(r), r = void 0), d(), a()
					},
					l = () => {
						o = requestAnimationFrame(() => {
							s.push(performance.now()), l()
						})
					},
					m = f()(() => {
						d(), i = window.setTimeout(c, n)
					}, p.G);
				return {
					cleanup: c,
					eventHandler: t => {
						void 0 === r ? (l(), m(), r = window.setInterval(a, C)) : m(), e(t)
					}
				}
			}
			var S = n("./src/lib/scheduler/index.ts"),
				_ = n("./src/lib/domUtils/index.ts"),
				y = n("./src/lib/LinkedListMap/index.ts");
			const R = (e, t) => e < 0 ? t + e : e % t;
			class j {
				constructor(e) {
					this.head = 0, this.size = 0, this.maxSize = e, this.items = new Array(e)
				}
				push(e) {
					return this.items[this.head] = e, this.head = R(this.head + 1, this.maxSize), this.size < this.maxSize && this.size++, this
				}
				pop() {
					if (this.size > 0) {
						const e = R(this.head - 1, this.maxSize),
							t = this.items[e];
						return this.items[e] = void 0, this.head = e, this.size--, t
					}
				}
				forEach(e) {
					let t = this.size < this.maxSize ? R(this.head - this.size, this.maxSize) : this.head;
					for (let n = 0; n < this.size; n++) e(this.items[t], n, this.size), t = (t + 1) % this.maxSize
				}
				map(e) {
					const t = new Array(this.size);
					return this.forEach((n, s, o) => {
						t[s] = e(n, s, o)
					}), t
				}
				getEntries() {
					const e = new Array(this.size);
					return this.forEach((t, n) => {
						e[n] = t
					}), e
				}
				clear() {
					const e = this.size;
					for (let t = 0; t < e; t++) this.pop()
				}
			}
			var P = n("./src/reddit/components/Scroller/getDocumentTop.ts");
			class w {
				constructor({
					top: e,
					height: t,
					heightWithSuffix: n
				}) {
					this.height = t, this.heightWithSuffix = n, this.top = e, this.bottom = this.top + this.height
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
			const M = ({
				buffer: e,
				container: t
			} = {}) => {
				const n = i()(e) ? 1e3 : e;
				if ("undefined" != typeof window && t) {
					const e = t === document ? Object(P.a)() : t.scrollTop;
					return new w({
						top: e,
						height: window.innerHeight
					})
				}
				return new w({
					top: 0,
					height: n
				})
			};
			var T = n("./src/reddit/components/ResizeSensor/index.tsx"),
				A = n("./src/reddit/constants/componentSizes.ts"),
				N = n("./src/reddit/constants/elementClassNames.ts"),
				L = n("./src/reddit/contexts/InsideOverlay.tsx"),
				D = n("./src/reddit/selectors/platform.ts"),
				F = n("./src/telemetry/helpers/sendEvent.ts"),
				V = n("./src/telemetry/helpers/sendTiming.ts"),
				B = n("./src/reddit/components/Scroller/Simple.m.less"),
				H = n.n(B);
			const U = A.g,
				W = 5 * p.G,
				z = 3,
				G = Object(u.c)({
					isOverlayOpen: D.h
				}),
				X = Object(l.b)(G),
				q = {};

			function K(e) {
				return e === document
			}

			function Q(e) {
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
				ne = 2 * p.G,
				se = 400,
				oe = 8,
				re = 5 * p.G,
				ie = 30,
				ae = "object" == typeof performance && "function" == typeof performance.now,
				de = () => ae ? performance.now() : Date.now();

			function ce(e, t) {
				return y.a.fromArray(e.children.map((e, n) => {
					const s = t && t.get(e.id);
					return s ? (s.isFocusable = !!e.isFocusable, s.trackOnEnteredViewport = e.trackOnEnteredViewport, s.trackOnExitedViewport = e.trackOnExitedViewport, s) : {
						el: null,
						id: e.id,
						index: n,
						isFocusable: !!e.isFocusable,
						itemRef: void 0,
						focused: !1,
						loaded: !t && n < ee,
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
						F.b.enqueue(new S.a({
							args: [e, t],
							cb: (e, t) => Object(V.a)(p.l.Redesign, {
								data: e,
								meta: t,
								type: "scrollfps"
							})
						}))
					}, this.getVisibleChildren = () => {
						let e = 0;
						const t = te + (this.props.viewportTopPadding ? this.props.viewportTopPadding : 0),
							n = [];
						let s = this.nextVisibleChildrenIndex;
						for (; e < t && s < this.props.children.length;) {
							const t = this.props.children[s];
							n.push(t), e += t.estHeight, s++
						}
						return this.visibleChildrenCount = n.length, n
					}, this.setRenderableChildrenIndexIncrement = () => {
						if (this.props.children[0]) {
							const e = this.props.children[0].estHeight;
							this.renderableChildrenIndexIncrement = Math.min(Math.ceil(se / e), oe)
						} else this.renderableChildrenIndexIncrement = oe
					}, this.updateRenderableChildrenWhenIdle = () => {
						this.cancelPopulateRenderableChildrenWhenIdle(), this.hasScrolledWithinThreshold() || (this.timeoutForUpdateIdleCallback = re, Object(m.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle), this.requestUpdateWhenIdleCallbackHandle = Object(m.requestIdleCallback)(() => {
							const e = Math.ceil(this.renderableChildrenIndexIncrement / 2);
							this.populateRenderableChildrenFromProps(!1, e)
						})), this.state.renderableChildren.length < this.props.children.length && this.schedulePopulateRenderableChildrenWhenIdle()
					}, this.hasScrolledWithinThreshold = () => !!this.lastScrollTime && de() - this.lastScrollTime < ne, this.populateRenderableChildrenFromProps = (e = !1, t = this.renderableChildrenIndexIncrement, n) => {
						const s = n || this.props.children;
						if (this.state.renderableChildren.length < s.length || e)
							if (this.hasScrolledWithinThreshold()) h.a.read(() => {
								clearTimeout(this.updateRenderableChildrenHandle), this.updateRenderableChildrenHandle = setTimeout(() => {
									this.populateRenderableChildrenFromProps(e, this.renderableChildrenIndexIncrement, n ? s : void 0)
								}, ne)
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
					}, this.getRenderableChildrenIndexIncrement = (e = ie) => {
						let t = 0,
							n = this.state.renderableChildren.length;
						for (; t < e && n < this.props.children.length;) t += this.props.children[n].estHeight, n++;
						const s = n - this.state.renderableChildren.length;
						return Math.max(this.renderableChildrenIndexIncrement, s)
					}, this.schedulePopulateRenderableChildrenWhenIdle = () => {
						!this.props.isOverlayOpen || this.props.isOverlay ? this.updateRenderableChildrenWhenIdleHandle = setTimeout(() => {
							this.updateRenderableChildrenWhenIdle()
						}, this.timeoutForUpdateIdleCallback) : this.cancelPopulateRenderableChildrenWhenIdle()
					}, this.cancelPopulateRenderableChildrenWhenIdle = () => {
						clearTimeout(this.updateRenderableChildrenWhenIdleHandle), Object(m.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle)
					}, this.callOnScrollForItemsChanged = o()(() => {
						this.handleScroll()
					}, p.G), this.pauseAllElements = () => {
						const e = this.getItemsInViewportWithFilter(this.loadedChildRefFilter),
							t = [];
						e.forEach(e => {
							const {
								itemRef: n
							} = e;
							n && (e.focused = !1, t.push(n.pauseContent))
						}), h.a.write(() => {
							t.forEach(e => e())
						})
					}, this.elementIsVisible = e => !!this.viewport && this.viewport.intersects(e), this.getItemsInViewportWithFilter = e => {
						this.updateViewportInfo();
						const t = new y.a("id");
						return this.state.renderableChildren.forEach(n => {
							const s = this.childMap.get(n.id);
							s && e(s) && t.push(s)
						}), t
					}, this.visibleChildRefFilter = e => {
						const t = this.getChildRectangle(e);
						return t && this.elementIsVisible(t) || !1
					}, this.loadedChildRefFilter = e => e.loaded, this.resetScrollFramerateAndFocus = () => {
						this.scrollContainer && (this.pixelsPerMSRing.clear(), this.lastScrollTime = -1, this.needsToPauseViewportItems = !0, null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(m.requestIdleCallback)(this.unmountItemsWhileIdle)), setTimeout(this.handleScroll, p.G))
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
							const n = (null == e ? void 0 : e.getBoundingClientRect().top) || 0;
							this.distanceToTop = n + this.getScrollTop()
						}
						const n = t.offsetTop + this.parentOffsetTop,
							s = t.getBoundingClientRect().height,
							o = new w({
								top: n,
								height: s,
								heightWithSuffix: `${s}px`
							});
						return e.rectangle = o, o
					}, this.handleResize = e => {
						this.fpsMeter && this.fpsMeter.eventHandler(e);
						for (const t in this.hiddenChildren) this.remeasureWhenShown[t] = !0;
						this.measurementsInvalid = !0, this.callOnScrollForItemsChanged()
					}, this.getTotalOffsetTop = () => this.containerRef ? Q(this.containerRef) : 0, this.handleContentContainerResize = o()(() => {
						this.pendingResizeHandlerRead || (this.pendingResizeHandlerRead = h.a.read(() => {
							const e = this.getTotalOffsetTop();
							e !== this.containerOffsetTop && (this.containerOffsetTop = e, this.handleResize()), this.pendingResizeHandlerRead = null
						}))
					}, p.G), this.handleScroll = () => {
						this.pendingScollHandlerRead || (this.pendingScollHandlerRead = h.a.read(() => {
							if (clearTimeout(this.resetCanFocusTimer), this.cancelPopulateRenderableChildrenWhenIdle(), Object(_.b)() || !this.scrollContainer) return void(this.pendingScollHandlerRead = null);
							this.updateScrollMetrics();
							const e = this.getAveragePixelsPerMilliSecond(),
								t = e < Z,
								n = e < Y,
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
							const o = new y.a("id");
							let r, i;
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
									trackOnEnteredViewport: u
								} = d, p = !!this.itemsInViewport.get(l);
								if (this.elementIsUnmountable(c)) m && p && d.loaded && d.isFocusable && a.push(m.pauseContent);
								else if (m && this.loadItemIfPossible(d, m, t, n, s, a), this.elementIsVisible(c)) {
									o.push(d), !p && u && F.b.enqueue(new S.a({
										cb: u,
										args: void 0
									}));
									const e = this.elementIsFocused(c);
									e && !i && (i = d.id), t && d.isFocusable && !r && e ? (r = d.id, d.focused || (d.focused = !0, m && a.push(m.focusContent))) : d.loaded && d.isFocusable && (d.focused || this.needsToPauseViewportItems) && (d.focused = !1, m && a.push(m.pauseContent))
								} else p && d.loaded && d.isFocusable && (d.focused = !1, m && a.push(m.stopContent))
							}), h.a.write(() => {
								a.forEach(e => e()), this.props.enableElementHiding && this.hideOrShowChildren()
							}), this.itemsInViewport.forEach(({
								id: e,
								trackOnExitedViewport: t
							}) => {
								t && !o.has(e) && F.b.enqueue(new S.a({
									cb: t,
									args: [!1]
								}))
							}), this.itemsInViewport = o, this.canFocusItems = t, this.focusedChild = r, this.primaryChild = i, this.measurementsInvalid = !1, this.needsToPauseViewportItems = !1, t ? null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(m.requestIdleCallback)(this.unmountItemsWhileIdle)) : (this.resetCanFocusTimer = setTimeout(this.resetScrollFramerateAndFocus, W), null !== this.unmountItemsIdleId && (Object(m.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)), this.props.onScroll && this.props.onScroll({
								getVisibleItemsInViewport: () => this.getItemsInViewportWithFilter(this.visibleChildRefFilter),
								primaryChild: this.primaryChild ? this.childMap.get(this.primaryChild) : void 0
							}), this.timeoutForUpdateIdleCallback = 4 * re, this.schedulePopulateRenderableChildrenWhenIdle(), this.pendingScollHandlerRead = null
						}))
					}, this.unmountItemsWhileIdle = e => {
						if (!this.scrollContainer) return;
						const t = [];
						if (this.state.renderableChildren.forEach(e => {
								const n = this.childMap.get(e.id);
								if (!n || !n.el || !n.itemRef) return;
								const s = this.getChildRectangle(n);
								s && this.elementIsUnmountable(s) && n.loaded && t.push(n)
							}), !t.length) return;
						const n = Math.min(Math.ceil(e.timeRemaining() / z), t.length),
							s = [];
						for (let o = 0; o < n; o++) {
							const e = t[o];
							s.push(e.itemRef.unmountContent), e.loaded = !1, e.focused = !1
						}
						Object(c.unstable_batchedUpdates)(() => {
							this.scrollContainer && s.forEach(e => e())
						}), n < t.length ? this.unmountItemsIdleId = Object(m.requestIdleCallback)(this.unmountItemsWhileIdle) : this.unmountItemsIdleId = null
					}, this.hideOrShowChildren = o()(() => {
						for (const e in this.childrenToHide) {
							const t = this.childrenToHide[e];
							void 0 !== t && (this.hideChild(e, t), this.childrenToHide[e] = void 0)
						}
						for (const e in this.childrenToShow) void 0 !== this.childrenToShow[e] && (this.showChild(e), this.childrenToShow[e] = void 0)
					}, p.G), this.hideChild = (e, t) => {
						const n = this.childMap.get(e);
						if (!n || !n.el) return;
						const s = n.el.firstChild;
						s && (t !== n.el.style.height && (n.el.style.height = t), s.classList.add(H.a.Hidden), this.hiddenChildren[e] = t, n.loaded && h.a.write(() => {
							n.itemRef && (n.loaded = !1, n.focused = !1, n.itemRef.unmountContent())
						}))
					}, this.showChild = e => {
						const t = this.childMap.get(e);
						if (!t || !t.el) return;
						const n = t.el.firstChild;
						n && (this.remeasureWhenShown[t.id] && (this.measurementsInvalid = !0, this.remeasureWhenShown[t.id] = void 0), t.el.style.height = "", n.classList.remove(H.a.Hidden), void 0 !== this.hiddenChildren[e] && (this.hiddenChildren[e] = void 0))
					}, this.getStylesForOuterWrapper = e => {
						if (void 0 !== this.hiddenChildren[e]) return {
							height: this.hiddenChildren[e]
						}
					}, this.remeasureChild = e => {
						this.measurementsInvalid = !0
					}, this.scrollToChild = (e, t) => {
						this.measurementsInvalid = !0, h.a.read(() => {
							const n = this.childMap.get(e);
							if (n && n.el && this.scrollContainer) {
								if (n.rectangle = void 0, t && this.isScrollChildTopVisible(e)) return;
								const s = this.getScrollTop() + n.el.getBoundingClientRect().top - (this.props.scrollToChildPadding || 0) - (this.props.viewportTopPadding || 0);
								setTimeout(() => {
									this.scrollContainer && (Object(_.c)(this.scrollContainer, s), this.callOnScrollForItemsChanged())
								}, p.G)
							}
						})
					}, this.isScrollChildTopVisible = e => {
						const t = this.childMap.get(e);
						if (t && t.el && this.scrollContainer) {
							const {
								scrollToChildPadding: e = 0,
								viewportTopPadding: n = 0
							} = this.props, s = window.innerHeight - n, {
								top: o
							} = t.el.getBoundingClientRect();
							return o >= n + e && o < s
						}
						return !1
					}, this.childMap = ce(e), this.containerRef = null, this.itemsInViewport = new y.a("id"), this.loadMoreFired = !1, this.pixelsPerMSRing = new j(J), this.wrapperRefFNs = {}, this.childRefFns = {}, this.childrenToHide = {}, this.childrenToShow = {}, this.canFocusItems = !0, this.focusedChild = void 0, this.hiddenChildren = {}, this.nextVisibleChildrenIndex = 0, this.lastVisibleEl = null, this.lastVisibleElId = null, this.remeasureWhenShown = {}, this.timeoutForUpdateIdleCallback = re;
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
					}) : E(this.handleScroll), this.scrollContainer && this.scrollContainer.addEventListener("scroll", this.fpsMeter.eventHandler), window.addEventListener("resize", this.handleResize)
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
								t = q[e];
							i()(t) || (q[e] = void 0, this.scrollContainer && Object(_.c)(this.scrollContainer, t))
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
						n = e.children.length === this.props.children.length && e.children.some((e, t) => e.id !== this.props.children[t].id);
					this.populateRenderableChildrenFromProps(t || n, this.renderableChildrenIndexIncrement, e.children), this.schedulePopulateRenderableChildrenWhenIdle()
				}
				componentWillUnmount() {
					if (this.callExitedViewportForUnmount(), this.cleanupScrollHandler(), clearTimeout(this.updateRenderableChildrenHandle), this.cancelPopulateRenderableChildrenWhenIdle(), this.scrollContainer && !this.props.disableScrollCache) {
						const e = this.getCacheKey();
						q[e] = this.lastRenderPosition
					}
					this.childMap = new y.a("id"), this.itemsInViewport = new y.a("id"), this.wrapperRefFNs = {}, this.childRefFns = {}, this.containerRef = null, this.loadMoreEl = void 0, this.scrollContainer = void 0, this.unmountItemsIdleId && (Object(m.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)
				}
				didLayoutAloneChange(e, t) {
					return "string" == typeof e.layoutKey && "string" == typeof t.layoutKey && e.layoutKey !== t.layoutKey && "string" == typeof e.dataKey && "string" == typeof t.layoutKey && e.dataKey === t.dataKey
				}
				elementIsFocused(e) {
					if (!this.viewport) return !1;
					const t = this.distanceToTop ? this.distanceToTop : 0,
						n = this.parentOffsetTop ? this.parentOffsetTop : 0,
						s = e.bottom + t - n,
						o = e.top + t - n,
						r = Math.min(this.viewport.bottom, s) - Math.max(this.viewport.top, o),
						i = r / e.height,
						a = r / this.viewport.height;
					return i > .75 || a > .9
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
					return this.scrollContainer ? K(this.scrollContainer) ? Object(P.a)() : this.scrollContainer.scrollTop : 0
				}
				updateViewportInfo() {
					if (this.scrollContainer) {
						this.viewport = M({
							buffer: 0,
							container: this.scrollContainer
						});
						const {
							viewportTopPadding: e = 0
						} = this.props, t = window.innerHeight - e, n = 2 * t;
						this.mountableViewport = new w({
							top: this.viewport.top - n,
							height: this.viewport.height + 2 * n
						});
						const s = 4 * t;
						this.renderableViewport = new w({
							top: this.viewport.top - s,
							height: this.viewport.height + 2 * s
						})
					}
				}
				updateScrollMetrics() {
					this.updateViewportInfo();
					const e = de(),
						t = this.getScrollTop(),
						n = Math.abs(this.lastRenderPosition - t),
						s = e - this.lastScrollTime,
						o = this.lastScrollTime > -1;
					this.lastScrollTime = e, this.lastRenderPosition = t, o ? this.pixelsPerMSRing.push(n / s) : this.lastScrollTime = e
				}
				getAveragePixelsPerMilliSecond() {
					if (this.pixelsPerMSRing.size > 1) {
						let e = 0;
						return this.pixelsPerMSRing.forEach(t => e += t), e / this.pixelsPerMSRing.size
					}
					return 0
				}
				_wrapperRefFN(e, t) {
					const n = this.childMap.get(e);
					n && (n.el = t), this.lastVisibleElId === e && (this.lastVisibleEl = t)
				}
				getWrapperRefFN(e) {
					let t = this.wrapperRefFNs[e];
					return t || (t = t => {
						this._wrapperRefFN(e, t)
					}, this.wrapperRefFNs[e] = t), t
				}
				_childRefFn(e, t, n) {
					const s = this.childMap.get(e);
					s && (s.itemRef = t, s.loaded = !!t && (void 0 !== n ? n : s.loaded), this.callOnScrollForItemsChanged())
				}
				getChildRefFn(e) {
					let t = this.childRefFns[e];
					return t || (t = (t, n) => {
						this._childRefFn(e, t, n)
					}, this.childRefFns[e] = t), t
				}
				loadItemIfPossible(e, t, n, s, o, r) {
					if (t.contentIsHeavyToMount() ? s : o) {
						const s = !e.isFocusable || n;
						!e.loaded && s && (e.loaded = !0, r.push(t.loadContent))
					}
				}
				callExitedViewportForUnmount() {
					this.itemsInViewport.forEach(({
						id: e,
						trackOnExitedViewport: t
					}) => {
						t && F.b.enqueue(new S.a({
							cb: t,
							args: [!0]
						}))
					})
				}
				hasBeenScrolled() {
					if (!this.containerRef) return !1;
					const {
						viewportTopPadding: e = 0
					} = this.props, t = Q(this.containerRef);
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
					})))), !!e && d.a.createElement(T.a, {
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
			t.b = X(Object(L.b)(le))
		},
		"./src/reddit/components/Scroller/getDocumentTop.ts": function(e, t, n) {
			"use strict";
			t.a = () => document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || 0
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, n) {
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
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = n("./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx"),
				d = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = n("./src/reddit/controls/Checkbox/index.m.less"),
				l = n.n(c);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => t => {
					const {
						className: n,
						disabled: s,
						redditStyle: i,
						"data-redditstyle": a,
						...d
					} = t, c = ((e, t, n) => {
						const s = !(!t && !n);
						let o = "";
						return o = e ? s ? l.a.mDisabledRedditStyle : l.a.mDisabled : s ? l.a.mActiveRedditStyle : l.a.mActive
					})(s, i, a);
					return o.a.createElement(e, m({
						className: Object(r.a)(l.a.CheckboxIcon, c, n)
					}, d))
				},
				p = u(d.a),
				h = u(a.a);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? h : e.isCheckboxSelected ? p : i.a;
				return o.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: Object(r.a)(l.a.Checkbox, e.className),
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, o.a.createElement(t, {
					className: Object(r.a)(l.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				u = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(u),
				h = n("./src/reddit/controls/Dropdown/row.m.less"),
				b = n.n(h);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class C extends i.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = o()(() => {
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
					}, n = Object(a.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(d.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && i.a.createElement("span", {
						className: n
					}, e.children), i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(m.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: o()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(l.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(c.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(a.a)(b.a.row, e, {
					[b.a.mIsInteractive]: !t.noHover,
					[b.a.mIsSelected]: t.isSelected,
					[b.a.topics]: t.isTopicsStyle
				});
				return i.a.createElement(C, f({
					className: n
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
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
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, n) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "d", (function() {
				return p
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				d = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				c = n.n(d);
			const l = i.a.span("metaText", c.a),
				m = e => r.a.createElement(l, e, " · "),
				u = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: n,
					...o
				}) => {
					const i = Object(a.b)(t),
						d = s.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [s.fbt._plural(t, "number", i)], {
							hk: "2L3T21"
						}),
						c = e ? s.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? d : s.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [s.fbt._plural(t, "number", i)], {
							hk: "gf67v"
						});
					return r.a.createElement(l, o, c)
				},
				p = e => r.a.createElement(l, null, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(e, "number", Object(a.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				r = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = n.n(r);
			t.a = s.a.wrapped(o.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function d(e, t, n) {
				const s = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(r.b)(s)(e => {
					const {
						featureEnabled: s,
						...r
					} = e, i = r;
					return s ? o.a.createElement(t, i) : void 0 !== n ? o.a.createElement(n, i) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/models/WhitelistStatus/index.ts");
			const o = (e, t) => {
				const n = e.some(e => e.isNSFW),
					o = t.some(e => e.wls === s.b.NO_ADS);
				return !n && !o
			}
		},
		"./src/reddit/helpers/postComponentForLayout/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "b", (function() {
				return O
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/lib/isUrl/index.ts"),
				a = n("./src/lib/logs/console.ts"),
				d = n("./src/reddit/constants/postLayout.ts"),
				c = n("./src/reddit/models/Media/index.ts");
			const l = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-BlankPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), n.e("reddit-components-BlankPost")]).then(n.bind(null, "./src/reddit/components/BlankPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
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
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), n.e("Reddit~StandalonePostPage~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~redd~b7d82fac"), n.e("Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435"), n.e("reddit-components-ClassicPost")]).then(n.bind(null, "./src/reddit/components/ClassicPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ClassicPost/index.tsx"
					}
				}),
				u = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-CompactPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), n.e("Reddit~StandalonePostPage~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~redd~b7d82fac"), n.e("Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435"), n.e("reddit-components-CompactPost")]).then(n.bind(null, "./src/reddit/components/CompactPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/CompactPost/index.tsx"
					}
				}),
				p = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-LargePost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), n.e("Reddit~StandalonePostPage~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~redd~b7d82fac"), n.e("Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435"), n.e("Governance~Reddit~reddit-components-LargePost~reddit-components-MediumPost"), n.e("reddit-components-LargePost")]).then(n.bind(null, "./src/reddit/components/LargePost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
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
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), n.e("Reddit~StandalonePostPage~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~redd~b7d82fac"), n.e("Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435"), n.e("Governance~Reddit~reddit-components-LargePost~reddit-components-MediumPost"), n.e("reddit-components-MediumPost")]).then(n.bind(null, "./src/reddit/components/MediumPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/MediumPost/index.tsx"
					}
				}),
				b = {
					[d.g.Large]: p,
					[d.g.Medium]: h,
					[d.g.Classic]: m,
					[d.g.Compact]: u
				},
				f = e => r.a.createElement(l, e),
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
				layout: n,
				post: s
			}) {
				if (s.isBlank) return f;
				const o = !s.media && !!s.source && Object(i.a)(s.source.url),
					r = e && o;
				n === d.g.Large && g(s) && !r && (n = d.g.Medium);
				const c = b[n];
				return void 0 === c ? (Object(a.a)(void 0, `Could not find component for layout ${n}.`), f) : t && s.isSponsored && n === d.g.Large ? h : c
			}
		},
		"./src/reddit/helpers/styles/mixins/index.m.less": function(e, t, n) {
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
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = n.n(o);
			const i = ({
					isLoading: e
				}) => Object(s.a)(r.a.loadingBackground, {
					[r.a["m-loading"]]: e
				}),
				a = e => Object(s.a)(r.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/trackers/reportPrompt.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, n, o) => r => ({
					source: "report_prompt",
					noun: n,
					action: o,
					subreddit: s.subredditByName(r, e),
					post: s.post(r, t)
				}),
				r = (e, t, n, o) => r => ({
					source: "report_survey",
					noun: n,
					action: o,
					subreddit: s.subredditByName(r, e),
					post: s.post(r, t)
				})
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.m.less": function(e, t, n) {
			e.exports = {
				DistinguishShield: "_3qx_qM22xH7s5oSucqWca",
				distinguishShield: "_3qx_qM22xH7s5oSucqWca"
			}
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				d = n("./src/reddit/icons/fonts/DistinguishShield/index.m.less"),
				c = n.n(d);
			t.a = e => {
				const t = Object(i.a)();
				return o.a.createElement("i", {
					className: Object(r.a)(c.a.DistinguishShield, Object(a.b)(t ? "distinguish" : "distinguishShield", e.isFilled), e.className)
				})
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				d = n.n(a);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.a)();
				return o.a.createElement("i", {
					className: `${Object(i.b)(t?"caret_down":"dropdownTriangle",e.isFilled)} ${e.className}`
				})
			}, "DropdownTriangle", d.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, n) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/fonts/Op/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Op/index.m.less"),
				d = n.n(a);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.a)();
				return o.a.createElement("i", {
					className: `${Object(i.b)(t?"author":"op",e.isFilled)} ${e.className}`,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, o.a.createElement(i.a, null, e.desc))
			}, "OpIcon", d.a);
			t.a = c
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), o.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), o.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), o.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("g", {
				transform: "translate(-32.000000, -173.000000)"
			}, o.a.createElement("g", {
				transform: "translate(32.000000, 173.000000)"
			}, o.a.createElement("path", {
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = n.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, o.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), o.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/Show/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M17.71,10.29,14.95,7.54a7,7,0,0,0-9.9,0L2.29,10.29a1,1,0,0,0,1.41,1.41L6.46,8.95c.07-.07.14-.11.21-.17a4,4,0,1,0,6.65,0c.07.06.15.11.21.17l2.76,2.76a1,1,0,0,0,1.41-1.41Z"
			}))
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "h", (function() {
				return m
			}));
			var s = n("./src/reddit/helpers/isPost.ts");
			const o = 20,
				r = 50,
				i = 1e4,
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
		},
		"./src/reddit/selectors/experiments/econ/commentHeaderRedesign.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const r = Object(o.a)(s.pb)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueuePages~ModerationPages.898fc4b3512d3bff3c02.js.map