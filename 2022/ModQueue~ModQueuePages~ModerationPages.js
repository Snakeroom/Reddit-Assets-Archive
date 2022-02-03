// https://www.redditstatic.com/desktop2x/ModQueue~ModQueuePages~ModerationPages.62a3acc29a56872b68f2.js
// Retrieved at 2/3/2022, 4:50:13 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueue~ModQueuePages~ModerationPages"], {
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/bulkActions/constants.ts");
			const n = Object(s.a)(a.c),
				o = Object(s.a)(a.b),
				d = Object(s.a)(a.a)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return _
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "f", (function() {
				return S
			})), r.d(t, "a", (function() {
				return k
			})), r.d(t, "e", (function() {
				return R
			})), r.d(t, "g", (function() {
				return I
			})), r.d(t, "h", (function() {
				return E
			})), r.d(t, "b", (function() {
				return A
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/makeCommentsPageKey/index.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/actions/shortcuts/utils.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				i = r("./src/reddit/constants/modals.ts"),
				l = r("./src/reddit/endpoints/comment/index.tsx"),
				m = r("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = r("./src/reddit/models/Reportable/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				f = r("./src/reddit/selectors/commentSelector.ts"),
				O = r("./src/reddit/selectors/experiments/d2xGqlDistinguish.ts"),
				y = r("./src/reddit/selectors/user.ts"),
				h = r("./src/reddit/actions/comment/index.ts"),
				j = r("./src/reddit/actions/comment/constants.ts");
			const v = Object(n.a)(j.n),
				_ = e => async (t, r, {
					apiContext: s
				}) => {
					r().features.comments.models[e] && (await Object(l.j)(s(), e)).ok && t((e => async t => {
						t(v({
							commentId: e
						}))
					})(e))
				}, g = e => async (t, r, {
					apiContext: a
				}) => {
					if (!Object(y.K)(r())) return void t(Object(d.i)(i.a.LOGIN_MODAL_ID));
					const n = r().features.comments.models[e];
					if (!n) return;
					const o = n.isLocked ? l.l : l.e;
					t(Object(h.i)({
						[e]: {
							isLocked: !n.isLocked
						}
					})), (await o(a(), e)).ok ? t(Object(u.f)({
						kind: b.b.SuccessMod,
						text: n.isLocked ? s.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : s.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(h.i)({
						[e]: {
							isLocked: n.isLocked
						}
					}))
				}, S = Object(n.a)(j.F), k = e => async (t, r, {
					apiContext: a
				}) => {
					const n = r(),
						o = n.features.comments.models[e],
						d = n.user.account ? n.user.account.displayText : null;
					o && d && (t(Object(h.i)({
						[e]: {
							isApproved: !0,
							approvedBy: d,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(l.a)(a(), e)).ok ? t(Object(u.f)({
						kind: b.b.SuccessMod,
						text: s.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(h.i)({
						[e]: {
							isApproved: o.isApproved,
							approvedBy: null,
							bannedBy: o.bannedBy,
							isRemoved: o.isRemoved,
							isSpam: o.isSpam,
							modNote: o.modNote,
							modReasonBy: o.modReasonBy,
							modRemovalReason: o.modRemovalReason,
							numReports: o.numReports || null
						}
					})), Object(c.d)())
				}, R = (e, t) => async (r, a, {
					apiContext: n
				}) => {
					const o = a(),
						d = o.features.comments.models[e],
						i = o.user.account ? o.user.account.displayText : null;
					d && i && (r(Object(h.i)({
						[e]: {
							approvedBy: null,
							bannedBy: i,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(l.h)(n(), e, t)).ok ? r(Object(u.f)({
						kind: b.b.SuccessMod,
						text: t ? s.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : s.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : r(Object(h.i)({
						[e]: {
							approvedBy: d.approvedBy,
							bannedBy: d.bannedBy,
							isApproved: d.isApproved,
							isRemoved: d.isRemoved,
							isSpam: d.isSpam
						}
					})), Object(c.d)())
				}, I = e => async (t, r, {
					apiContext: a
				}) => {
					const n = r().features.comments.models[e];
					if (!n) return;
					const o = n.ignoreReports ? l.k : l.d;
					t(Object(h.i)({
						[e]: {
							ignoreReports: !n.ignoreReports
						}
					})), (await o(a(), e)).ok ? t(Object(u.f)({
						kind: b.b.SuccessMod,
						text: n.ignoreReports ? s.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : s.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(h.i)({
						[e]: {
							ignoreReports: n.ignoreReports
						}
					}))
				}, E = (e, t, r) => async (n, o, {
					gqlContext: d
				}) => {
					const c = Object(f.b)(o(), {
						commentId: e
					});
					if (!c) return;
					const i = r === a.dc.Snoozed,
						l = {
							itemId: e,
							reportText: t,
							isSnoozed: i
						};
					if ((await Object(m.a)(d(), {
							input: l
						})).ok) n(Object(h.i)({
						[e]: {
							userReports: Object(p.a)(c.userReports, t, i)
						}
					}));
					else {
						const e = Object(u.e)(s.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						n(Object(u.f)(e))
					}
				}, A = (e, t, r) => async (s, n, {
					apiContext: d,
					gqlContext: c
				}) => {
					const u = n(),
						i = u.features.comments.models[e];
					if (!i) return;
					const m = i.postId,
						p = u.postStickiedComments.data[m],
						b = a.g[t];
					let f;
					if (s(Object(h.i)({
							[e]: {
								distinguishType: t,
								isAdmin: t === a.G.ADMIN,
								isMod: t === a.G.MODERATOR,
								isStickied: !!r
							}
						})), r && p && p !== e && s(Object(h.i)({
							[p]: {
								isStickied: !1
							}
						})), Object(O.a)(n())) {
						const s = Object(l.b)(c(), e, t),
							a = Object(l.c)(c(), e, !!r),
							n = [s];
						(r || !r && e === p) && n.push(a), f = {
							ok: (await Promise.all(n)).every(e => e.ok)
						}
					} else f = await Object(l.g)(d(), e, b, r || null);
					f.ok ? r && s(S({
						id: e,
						postId: m,
						commentsPageKey: Object(o.a)(m, null, {
							sort: a.u.CONFIDENCE,
							...u.platform.currentPage.queryParams
						})
					})) : (s(Object(h.i)({
						[e]: {
							distinguishType: i.distinguishType,
							isAdmin: i.isAdmin,
							isMod: i.isMod,
							isStickied: i.isStickied
						}
					})), s(Object(h.i)({
						[p]: {
							isStickied: u.features.comments.models[p].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/inContextModeration.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const a = "INCONTEXT__BANNED",
				n = "INCONTEXT__MUTED",
				o = Object(s.a)(a),
				d = Object(s.a)(n)
		},
		"./src/reddit/actions/modQueue/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return q
			})), r.d(t, "d", (function() {
				return V
			})), r.d(t, "f", (function() {
				return z
			})), r.d(t, "a", (function() {
				return $
			})), r.d(t, "b", (function() {
				return W
			})), r.d(t, "c", (function() {
				return J
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/bulkActions/index.ts"),
				d = r("./src/reddit/actions/modQueueTriggers/index.ts"),
				c = r("./src/reddit/actions/removalReasons/index.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				i = r("./src/reddit/endpoints/modQueue/index.ts"),
				l = r("./src/reddit/helpers/correlationIdTracker.ts"),
				m = r("./src/reddit/helpers/flair.ts"),
				p = r("./src/reddit/helpers/isPost.ts"),
				b = r("./src/reddit/models/ModQueue/index.ts"),
				f = r("./src/reddit/models/Toast/index.ts"),
				O = r("./src/reddit/constants/experiments.ts"),
				y = r("./src/reddit/helpers/chooseVariant/index.ts");
			var h = r("./src/reddit/selectors/modQueue.ts"),
				j = r("./src/reddit/selectors/subreddit.ts"),
				v = r("./src/reddit/selectors/telemetry.ts"),
				_ = r("./src/telemetry/index.ts"),
				g = r("./src/lib/initializeClient/installReducer.ts"),
				S = r("./src/reddit/reducers/pages/modHub/index.ts"),
				k = r("./src/reddit/actions/modQueue/constants.ts");
			Object(g.a)({
				pages: {
					modHub: S.a
				}
			});
			const R = Object(n.a)(k.j),
				I = Object(n.a)(k.i),
				E = Object(n.a)(k.h),
				A = Object(n.a)(k.g),
				w = Object(n.a)(k.f),
				x = Object(n.a)(k.e),
				M = Object(n.a)(k.n),
				N = Object(n.a)(k.m),
				L = Object(n.a)(k.l),
				C = Object(n.a)(k.q),
				P = Object(n.a)(k.p),
				D = Object(n.a)(k.o),
				T = Object(n.a)(k.w),
				U = Object(n.a)(k.v),
				Q = Object(n.a)(k.u),
				q = (e, t, n) => async (o, c, {
					apiContext: l,
					gqlContext: m
				}) => {
					let p, h, j;
					switch (t) {
						case a.rb.Edited:
							p = A, h = x, j = w;
							break;
						case a.rb.Modqueue:
							p = R, h = E, j = I;
							break;
						case a.rb.Reports:
							p = M, h = L, j = N;
							break;
						case a.rb.Spam:
							p = C, h = D, j = P;
							break;
						case a.rb.Unmoderated:
							p = T, h = Q, j = U;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					o(p());
					const v = await Object(i.c)(l(), t, n);
					if (v.ok) {
						if (function(e) {
								return Object(y.c)(e, {
									experimentEligibilitySelector: y.a,
									experimentName: O.od
								}) === O.bd
							}(c())) {
							const {
								normalizeModQueueListingFromGql: e,
								transformGatewayParamsToGQLVariables: s
							} = await r.e(9).then(r.bind(null, "./src/reddit/helpers/graphql/normalizeModQueueListingFromGql/index.ts")), {
								diffAndLog: a
							} = await r.e(6).then(r.bind(null, "./src/reddit/helpers/graphql/normalizeModQueueListingFromGql/diffAndLog.ts")), o = s({
								getState: c,
								queueType: t,
								options: n
							}), d = await Object(i.b)(m(), o);
							if (!d.ok) return;
							const u = e(d.body.data),
								l = v.body;
							a({
								normalizedGqlResponse: u,
								gatewayResponse: {
									posts: l.posts,
									comments: l.comments,
									modqueue: l.modqueue,
									reports: l.reports,
									authorFlair: l.authorFlair
								},
								rawGqlResponse: d.body.data
							})
						}
						const s = v.body;
						o(j({
							listingKey: e,
							page: `${n.page||b.b}`,
							response: s
						})), o(Object(d.a)({
							postIds: s.posts ? Object.keys(s.posts) : void 0,
							commentIds: s.comments ? Object.keys(s.comments) : void 0
						}))
					} else o(h(v.error)), o(Object(u.f)({
						kind: f.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, B = Object(n.a)(k.k), F = Object(n.a)(k.b), V = e => async (t, r, {
					apiContext: a
				}) => {
					const n = r(),
						o = n.pages.modHub.modQueue.moderatedCommunitiesOrder.after,
						d = n.pages.modHub.modQueue.moderatedCommunitiesOrder.pending,
						c = n.pages.modHub.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: l
						} = n.platform.currentPage.urlParams,
						m = l;
					if (e && d || c || !o) return;
					const p = await Object(i.c)(a(), m, {
						moderated_after: o
					});
					if (p.ok) {
						const e = p.body;
						t(B(e)), e.moderatedAfter ? t(V()) : t(F())
					} else t(Object(u.f)({
						kind: f.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, K = Object(n.a)(k.t), G = Object(n.a)(k.s), H = Object(n.a)(k.r), z = (e, t, r) => async (a, n, {
					apiContext: d
				}) => {
					a(Object(o.c)());
					const O = n(),
						y = Object(h.f)(O),
						g = O.user.account && O.user.account.displayText;
					Object(l.e)(l.a.ModQueue);
					const S = Object(l.c)(l.a.ModQueue);
					Object(_.a)({
						source: "bulk_mod_action_menu",
						action: "click",
						noun: e,
						...v.n(O),
						actionInfo: v.c(O, {
							count: y.length,
							paneName: O.platform.currentPage ? O.platform.currentPage.urlParams.pageName : void 0
						}),
						screen: v.ab(O),
						correlationId: S
					});
					for (let t = 0; t < y.length; t++) {
						const r = y[t];
						let s = e;
						[b.a.Approve, b.a.Remove, b.a.Spam].includes(e) && (Object(p.a)(r) ? s += "_link" : s += "_comment"), Object(_.a)({
							source: "bulk_mod_action",
							action: "click",
							noun: s,
							...v.n(O),
							actionInfo: v.c(O, {
								count: y.length,
								paneName: O.platform.currentPage ? O.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: v.h(O, r),
							post: v.I(O, r),
							profile: v.T(O, r),
							screen: v.ab(O),
							subreddit: v.lb(O, r),
							correlationId: S
						})
					}
					Object(l.b)(l.a.ModQueue);
					const k = {
						ids: y
					};
					t && (k.text = Object(m.g)(t) || "", k.flairTemplateId = ""), r && (k.cssClass = r, k.flairTemplateId = r);
					const R = await Object(i.a)(d(), e, k);
					if (R.ok) {
						a(Object(o.b)({
							...R.body,
							operation: e,
							ids: y,
							username: g,
							options: {
								flair: t
							}
						}));
						const r = function(e, t) {
							switch (e) {
								case b.a.Approve:
									return s.fbt._({
										"*": "{number} posts/comments have been approved",
										_1: "1 post/comment has been approved"
									}, [s.fbt._plural(t, "number")], {
										hk: "2kKhSf"
									});
								case b.a.Flair:
									return s.fbt._({
										"*": "{number} posts/comments have had flair applied",
										_1: "1 post/comment has had flair applied"
									}, [s.fbt._plural(t, "number")], {
										hk: "3syB5O"
									});
								case b.a.IgnoreReports:
									return s.fbt._({
										"*": "{number} posts/comments have had their reports ignored",
										_1: "1 post/comment has had their reports ignored"
									}, [s.fbt._plural(t, "number")], {
										hk: "2WfE4g"
									});
								case b.a.Lock:
									return s.fbt._({
										"*": "{number} posts/comments have been locked",
										_1: "1 post/comment has been locked"
									}, [s.fbt._plural(t, "number")], {
										hk: "45oMbv"
									});
								case b.a.MarkNSFW:
									return s.fbt._({
										"*": "{number} posts/comments have been marked NSFW",
										_1: "1 post/comment has been marked NSFW"
									}, [s.fbt._plural(t, "number")], {
										hk: "oPsQr"
									});
								case b.a.RemovalReason:
									return s.fbt._({
										"*": "{number} posts/comments have had removal reasons applied",
										_1: "1 post/comment has had removal reasons applied"
									}, [s.fbt._plural(t, "number")], {
										hk: "35Tosn"
									});
								case b.a.Remove:
									return s.fbt._({
										"*": "{number} posts/comments have been removed",
										_1: "1 post/comment has been removed"
									}, [s.fbt._plural(t, "number")], {
										hk: "B1ZbE"
									});
								case b.a.Spam:
									return s.fbt._({
										"*": "{number} posts/comments have been marked as spam",
										_1: "1 post/comment has been marked as spam"
									}, [s.fbt._plural(t, "number")], {
										hk: "3OoNfp"
									});
								case b.a.Spoiler:
									return s.fbt._({
										"*": "{number} posts/comments have been marked as spoilers",
										_1: "1 post/comment has been marked as spoilers"
									}, [s.fbt._plural(t, "number")], {
										hk: "1DFW5M"
									});
								case b.a.UnignoreReports:
									return s.fbt._({
										"*": "{number} posts/comments have had their reports un-ignored",
										_1: "1 post/comment has had their reports un-ignored"
									}, [s.fbt._plural(t, "number")], {
										hk: "303Hpb"
									});
								case b.a.Unlock:
									return s.fbt._({
										"*": "{number} posts/comments have been unlocked",
										_1: "1 post/comment has been unlocked"
									}, [s.fbt._plural(t, "number")], {
										hk: "5gUht"
									});
								case b.a.UnmarkNSFW:
									return s.fbt._({
										"*": "{number} posts/comments have been un-marked as NSFW",
										_1: "1 post/comment has been un-marked as NSFW"
									}, [s.fbt._plural(t, "number")], {
										hk: "3oSSST"
									});
								case b.a.Unspoiler:
								case b.a.Unspoiler:
									return s.fbt._({
										"*": "{number} posts/comments have been un-marked as spoilers",
										_1: "1 post/comment has been un-marked as spoilers"
									}, [s.fbt._plural(t, "number")], {
										hk: "3lHoNI"
									})
							}
						}(e, y.length);
						if (e !== b.a.Approve && e !== b.a.Flair) {
							let t, n;
							const d = O.platform.currentPage && O.platform.currentPage.queryParams && O.platform.currentPage.queryParams.subreddit,
								l = d && Object(j.C)(O, d);
							e === b.a.Remove && l && y.length > 1 && (t = s.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), n = Object(c.fetchReasonsAndOpenModal)(l, y));
							const m = Object(u.e)(r, f.b.Undo, s.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, {
								apiContext: r
							}) => {
								e(K());
								const a = t(),
									n = Object.keys(a.pages.modHub.modQueue.bulkAction.undoLastAction)[0],
									d = a.pages.modHub.modQueue.bulkAction.undoLastAction[n],
									c = a.user.account && a.user.account.displayText;
								e(Object(o.c)());
								const l = await Object(i.a)(r(), n, {
									ids: d
								});
								l.ok ? e(G({
									...l.body,
									operation: n,
									ids: d,
									username: c
								})) : (e(H(l.error)), e(Object(u.f)({
									kind: f.b.Error,
									text: s.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, n);
							a(Object(u.f)(m))
						} else {
							const e = Object(u.e)(r, f.b.SuccessMod);
							a(Object(u.f)(e))
						}
					} else {
						a(Object(o.a)(R.error));
						const e = Object(u.e)(s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), f.b.Error);
						a(Object(u.f)(e))
					}
				}, $ = Object(n.a)(k.a), W = Object(n.a)(k.c), J = Object(n.a)(k.d)
		},
		"./src/reddit/actions/moderationLog/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return a
			}));
			const s = "SUBREDDIT__MODERATION_LOG_LOADED",
				a = "SUBREDDIT__ALL_MODERATORS_LOADED"
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "removalReasonsPending", (function() {
				return X
			})), r.d(t, "removalReasonsLoaded", (function() {
				return Y
			})), r.d(t, "removalReasonsFailed", (function() {
				return Z
			})), r.d(t, "removalReasonsRequested", (function() {
				return ee
			})), r.d(t, "removalReasonAddedPending", (function() {
				return te
			})), r.d(t, "removalReasonAddedSuccess", (function() {
				return re
			})), r.d(t, "removalReasonAddedFailed", (function() {
				return se
			})), r.d(t, "addRemovalReason", (function() {
				return ae
			})), r.d(t, "editRemovalReasonPending", (function() {
				return ne
			})), r.d(t, "editRemovalReasonSuccess", (function() {
				return oe
			})), r.d(t, "editRemovalReasonFailed", (function() {
				return de
			})), r.d(t, "editRemovalReason", (function() {
				return ce
			})), r.d(t, "deleteRemovalReasonPending", (function() {
				return ue
			})), r.d(t, "deleteRemovalReasonSuccess", (function() {
				return ie
			})), r.d(t, "deleteRemovalReasonFailed", (function() {
				return le
			})), r.d(t, "deleteRemovalReason", (function() {
				return me
			})), r.d(t, "removedItemsSelected", (function() {
				return pe
			})), r.d(t, "fetchReasonsAndOpenModal", (function() {
				return be
			})), r.d(t, "removalReasonSubmittedPending", (function() {
				return fe
			})), r.d(t, "removalReasonSubmittedSuccess", (function() {
				return Oe
			})), r.d(t, "removalReasonSubmittedFailed", (function() {
				return ye
			})), r.d(t, "removalReasonMessagePending", (function() {
				return he
			})), r.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return je
			})), r.d(t, "removalReasonPublicMessageSuccess", (function() {
				return ve
			})), r.d(t, "removalReasonMessageFailed", (function() {
				return _e
			})), r.d(t, "submitRemovalReason", (function() {
				return ge
			})), r.d(t, "submitBulkRemovalReason", (function() {
				return Se
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/initializeClient/installReducer.ts"),
				n = r("./node_modules/redux/es/redux.js");
			const o = "REMOVALREASONS__ADD_PENDING",
				d = "REMOVALREASONS__ADD_SUCCESS",
				c = "REMOVALREASONS__ADD_FAILED",
				u = "REMOVALREASONS__EDIT_PENDING",
				i = "REMOVALREASONS__EDIT_SUCCESS",
				l = "REMOVALREASONS__EDIT_FAILED",
				m = "REMOVALREASONS__DELETE_PENDING",
				p = "REMOVALREASONS__DELETE_SUCCESS",
				b = "REMOVALREASONS__DELETE_FAILED";
			var f = (e = null, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case "REMOVALREASONS__LOAD_SUCCESS":
					case o:
					case d:
					case u:
					case i:
					case m:
					case p:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case c:
					case l:
					case b:
						return t.payload;
					default:
						return e
				}
			};
			var O = (e = !1, t) => {
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case o:
						case u:
						case m:
							return !0;
						case "REMOVALREASONS__LOAD_SUCCESS":
						case "REMOVALREASONS__LOAD_FAILED":
						case d:
						case c:
						case i:
						case l:
						case p:
						case b:
							return !1;
						default:
							return e
					}
				},
				y = Object(n.c)({
					error: f,
					pending: O
				});
			const h = {};
			var j = (e = h, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
						const {
							response: r
						} = t.payload, {
							data: s
						} = r;
						return {
							...e,
							...s
						}
					}
					case d:
					case i: {
						const {
							reason: r
						} = t.payload;
						return {
							...e,
							[r.id]: r
						}
					}
					case p: {
						const {
							reasonId: r
						} = t.payload, {
							[r]: s,
							...a
						} = e;
						return a
					}
					default:
						return e
				}
			};
			const v = {};
			var _ = (e = v, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
						const {
							subredditId: r,
							response: s
						} = t.payload, {
							order: a
						} = s;
						return {
							...e,
							[r]: a
						}
					}
					case d: {
						const {
							subredditId: r,
							reason: s
						} = t.payload;
						return {
							...e,
							[r]: [...e[r], s.id]
						}
					}
					case p: {
						const {
							subredditId: r,
							reasonId: s
						} = t.payload, a = [...e[r]].filter(e => e !== s);
						return {
							...e,
							[r]: a
						}
					}
					default:
						return e
				}
			};
			var g = (e = null, t) => {
					switch (t.type) {
						case "REMOVALREASONS__REMOVEDITEMS_SELECTED": {
							const {
								subredditId: e,
								itemIds: r
							} = t.payload;
							return {
								itemIds: r,
								subredditId: e
							}
						}
						default:
							return e
					}
				},
				S = Object(n.c)({
					api: y,
					models: j,
					reasonOrder: _,
					removedItemIds: g
				}),
				k = r("./src/lib/constants/index.ts"),
				R = r("./src/lib/makeActionCreator/index.ts"),
				I = r("./src/lib/makeCommentsPageKey/index.ts"),
				E = r("./src/lib/makeDraftKey/index.ts"),
				A = r("./src/reddit/actions/bulkActions/index.ts"),
				w = r("./src/reddit/actions/comment/index.ts"),
				x = r("./src/reddit/actions/comment/authoring.ts"),
				M = r("./src/reddit/actions/comment/moderation.ts"),
				N = r("./src/reddit/actions/modal.ts"),
				L = r("./src/reddit/actions/post.ts"),
				C = r("./src/reddit/actions/toaster.ts"),
				P = r("./src/reddit/constants/modals.ts"),
				D = r("./src/lib/makeApiRequest/index.ts"),
				T = r("./src/lib/omitHeaders/index.ts"),
				U = r("./src/reddit/constants/headers.ts"),
				Q = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const q = (e, t) => Object(D.a)(Object(T.a)(e, [U.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: k.jb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				B = (e, t, r) => Object(D.a)(Object(T.a)(e, [U.a]), {
					endpoint: Object(Q.a)(`${e.apiUrl}/api/v1/modactions/removal_${r}_message/`),
					method: k.jb.POST,
					type: "json",
					data: t
				});
			var F = r("./src/reddit/helpers/isPost.ts"),
				V = r("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				K = r("./src/reddit/helpers/routeKey/index.ts"),
				G = r("./src/reddit/models/ModQueue/index.ts"),
				H = r("./src/reddit/models/PostDraft/index.ts"),
				z = r("./src/reddit/models/RemovalReason/index.ts"),
				$ = r("./src/reddit/models/Toast/index.ts"),
				W = r("./src/reddit/selectors/comments.ts"),
				J = r("./src/reddit/selectors/platform.ts");
			Object(a.a)({
				features: {
					removalReasons: S
				}
			});
			const X = Object(R.a)("REMOVALREASONS__LOAD_PENDING"),
				Y = Object(R.a)("REMOVALREASONS__LOAD_SUCCESS"),
				Z = Object(R.a)("REMOVALREASONS__LOAD_FAILED"),
				ee = e => async (t, r, {
					apiContext: s
				}) => {
					const a = r().subreddits.models[e].name;
					t(X());
					const n = await ((e, t) => Object(D.a)(Object(T.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: k.jb.GET
					}))(s(), a);
					n.ok ? t(Y({
						subredditId: e,
						response: n.body
					})) : t(Z(n.error))
				}, te = Object(R.a)(o), re = Object(R.a)(d), se = Object(R.a)(c), ae = (e, t) => async (r, a, {
					apiContext: n
				}) => {
					const o = a().subreddits.models[e].name;
					r(te());
					const d = await ((e, t, r) => Object(D.a)(Object(T.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: k.jb.POST,
						data: r
					}))(n(), o, t);
					if (d.ok) {
						const {
							id: a
						} = d.body, n = {
							...t,
							id: a
						};
						r(re({
							subredditId: e,
							reason: n
						})), r(Object(C.f)({
							kind: $.b.SuccessMod,
							text: s.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else r(se(d.error))
				}, ne = Object(R.a)(u), oe = Object(R.a)(i), de = Object(R.a)(l), ce = (e, t) => async (r, a, {
					apiContext: n
				}) => {
					const o = a().subreddits.models[e].name;
					r(ne());
					const d = await ((e, t, r) => Object(D.a)(Object(T.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${r.id}`,
						method: k.jb.PUT,
						data: {
							message: r.message,
							title: r.title
						}
					}))(n(), o, t);
					d.ok ? (r(oe({
						subredditId: e,
						reason: t
					})), r(Object(C.f)({
						kind: $.b.SuccessMod,
						text: s.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : r(de(d.error))
				}, ue = Object(R.a)(m), ie = Object(R.a)(p), le = Object(R.a)(b), me = (e, t) => async (r, a, {
					apiContext: n
				}) => {
					const o = a().subreddits.models[e].name;
					r(ue());
					const d = await ((e, t, r) => Object(D.a)(Object(T.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${r}`,
						method: k.jb.DELETE
					}))(n(), o, t);
					d.ok ? (r(ie({
						subredditId: e,
						reasonId: t
					})), r(Object(C.f)({
						kind: $.b.SuccessMod,
						text: s.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : r(le(d.error))
				}, pe = Object(R.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), be = (e, t) => async (r, s, {
					apiContext: a
				}) => {
					const n = s();
					n.features.removalReasons.reasonOrder[e] && n.features.removalReasons.reasonOrder[e].length > 0 || r(ee(e)), r(pe({
						subredditId: e,
						itemIds: t
					})), r(Object(N.i)(P.a.ADD_REMOVAL_REASON))
				}, fe = Object(R.a)("REMOVALREASONS__SUBMIT_PENDING"), Oe = Object(R.a)("REMOVALREASONS__SUBMIT_SUCCESS"), ye = Object(R.a)("REMOVALREASONS__SUBMIT_FAILED"), he = Object(R.a)("REMOVALREASONS__MESSAGE_PENDING"), je = Object(R.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), ve = Object(R.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), _e = Object(R.a)("REMOVALREASONS__MESSAGE_FAILED"), ge = (e, t, r, s, a) => async (n, o, {
					apiContext: d
				}) => {
					const c = o(),
						u = c.user.account && c.user.account.displayText,
						i = e[0],
						l = Object(F.a)(i) ? z.e.Post : z.e.Comment,
						m = l === z.e.Post ? c.posts.models[i] : c.features.comments.models[i],
						p = l === z.e.Post ? L.S : w.i;
					if (!m || !u) return !1;
					n(fe()), n(p({
						[i]: {
							modNote: a,
							modRemovalReason: t && t.title,
							modReasonBy: u
						}
					}));
					const b = {
							itemIds: e,
							modNote: a,
							reasonId: t ? t.id : null
						},
						f = await q(d(), b);
					if (f.ok) {
						if (n(Oe()), t) {
							n(he());
							const a = {
									itemId: e,
									message: r,
									title: t.title,
									type: s
								},
								o = await B(d(), Object(z.h)(a, l), l);
							if (o.ok) {
								if (s === z.f.Public) {
									if (n(ve()), o.body) {
										const e = Object(V.a)(o.body, u),
											t = {
												comment: e,
												parentId: i
											},
											r = Object(J.f)(c),
											s = c.platform.currentPage && c.platform.currentPage.routeMatch;
										let a = r && s && Object(K.a)(s, c, c.posts.models[e.postId]);
										if (a || (a = Object(I.a)(e.postId, null, {
												sort: k.v,
												hasSortParam: !0
											})), l === z.e.Post) {
											const r = Object(E.a)(H.c.replyToPost, i);
											n(Object(x.o)({
												...t,
												headCommentId: Object(W.w)(c, {
													commentsPageKey: a
												}),
												commentsPageKey: a,
												draftKey: r
											}));
											const s = c.postStickiedComments.data[i];
											n(Object(M.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: a
											})), s && s !== e.id && n(Object(w.i)({
												[s]: {
													isStickied: !1
												}
											}))
										} else if (l === z.e.Comment) {
											const e = Object(E.a)(H.c.replyToComment, m.id),
												r = Object(W.j)(c, {
													commentId: i,
													commentsPageKey: a
												});
											n(Object(x.m)({
												...t,
												parentCommentId: i,
												commentsPageKey: a,
												draftKey: e,
												depth: r + 1
											}))
										}
									}
								} else n(je());
								return !0
							}
							return n(_e(o.error)), !1
						}
					} else n(ye(f.error)), n(p({
						[i]: {
							modNote: m.modNote,
							modRemovalReason: m.modRemovalReason,
							modReasonBy: m.modReasonBy
						}
					}));
					return !1
				}, Se = (e, t, r, a, n) => async (o, d, {
					apiContext: c
				}) => {
					const u = d(),
						i = u.user.account && u.user.account.displayText;
					if (!i) return;
					o(fe());
					const l = Object(C.f)({
							kind: $.b.SuccessMod,
							text: s.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [s.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						m = {
							itemIds: e,
							modNote: n,
							reasonId: t ? t.id : null
						},
						p = await q(c(), m);
					if (p.ok) {
						const s = {
							ids: e,
							operation: G.a.RemovalReason,
							username: i,
							options: {
								modNote: n,
								removalReason: t && t.title
							}
						};
						if (o(Object(A.b)(s)), t) {
							const s = {
									itemId: e,
									message: r,
									title: t.title,
									type: a
								},
								n = await B(c(), Object(z.h)(s, z.e.Bulk), z.e.Bulk);
							n.ok ? (o(je()), o(l)) : o(_e(n.error))
						} else o(l)
					} else o(ye(p.error))
				}
		},
		"./src/reddit/helpers/makeModQueueListingKey/index.ts": function(e, t, r) {
			"use strict";
			t.a = e => {
				const {
					profile: t,
					subreddit: r
				} = e;
				let s = r && `r/${r}` || t && `u/${t}` || "all";
				return "comments" !== e.onlyOfType && "links" !== e.onlyOfType || (s += `--[${e.onlyOfType}]`), s
			}
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return n
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "g", (function() {
				return i
			})), r.d(t, "h", (function() {
				return l
			}));
			var s = r("./src/reddit/helpers/isPost.ts");
			const a = 20,
				n = 50,
				o = 1e4,
				d = 100;
			var c, u;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public"
			}(c || (c = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(u || (u = {}));
			const i = e => 1 === e.length ? Object(s.a)(e[0]) ? u.Post : u.Comment : u.Bulk,
				l = (e, t) => {
					return {
						[t === u.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type
					}
				}
		},
		"./src/reddit/reducers/pages/modHub/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/redux/es/redux.js"),
				a = r("./src/reddit/actions/subredditModeration/constants.ts");
			var n = (e = null, t) => {
					switch (t.type) {
						case a.g:
						case a.f:
							return null;
						case a.e:
							return t.payload;
						default:
							return e
					}
				},
				o = r("./src/reddit/models/SubredditModeration/index.ts");
			const d = {};
			var c = (e = d, t) => {
					switch (t.type) {
						case a.g: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, a = Object(o.e)(r, s);
							return {
								...e,
								[a]: !0
							}
						}
						case a.f:
						case a.e: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, a = Object(o.e)(r, s);
							return {
								...e,
								[a]: !1
							}
						}
						default:
							return e
					}
				},
				u = Object(s.c)({
					error: n,
					pending: c
				});
			const i = {};
			var l = (e = i, t) => {
				switch (t.type) {
					case a.f: {
						const {
							fetchedToken: r,
							subredditId: s
						} = t.payload, a = Object(o.e)(s, r);
						return {
							...e,
							[a]: !0
						}
					}
					default:
						return e
				}
			};
			const m = {};
			var p = (e = m, t) => {
					switch (t.type) {
						case a.f: {
							const {
								subredditId: e,
								after: r
							} = t.payload;
							return {
								[e]: r
							}
						}
						default:
							return e
					}
				},
				b = r("./node_modules/icepick/icepick.js");
			const f = {};
			var O = (e = f, t) => {
				switch (t.type) {
					case a.d:
					case a.f: {
						const {
							subredditId: r,
							approvedSubmitters: s
						} = t.payload, a = {
							[r]: s
						};
						return Object(b.merge)(e, a)
					}
					case a.k: {
						const {
							subredditId: r,
							userId: s
						} = t.payload;
						return Object(b.unsetIn)(e, [r, s])
					}
					default:
						return e
				}
			};
			var y = (e = null, t) => {
				switch (t.type) {
					case a.j:
					case a.i:
						return null;
					case a.h:
						return t.payload;
					default:
						return e
				}
			};
			var h = (e = !1, t) => {
					switch (t.type) {
						case a.j:
							return !0;
						case a.i:
						case a.h:
							return !1;
						default:
							return e
					}
				},
				j = Object(s.c)({
					error: y,
					pending: h
				});
			var v = (e = null, t) => {
					switch (t.type) {
						case a.j:
							return null;
						case a.i: {
							const e = t.payload.approvedSubmitterIds[0];
							return e ? t.payload.approvedSubmitters[e] : null
						}
						default:
							return e
					}
				},
				_ = Object(s.c)({
					api: j,
					result: v
				});
			const g = {};
			var S = (e = g, t) => {
					switch (t.type) {
						case a.f: {
							const {
								subredditId: r,
								approvedSubmitterIds: s
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: [...e[r], ...s]
							} : {
								...e,
								[r]: s
							}
						}
						case a.k: {
							const {
								subredditId: r,
								userId: s
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== s)
							}
						}
						case a.d: {
							const {
								subredditId: r,
								approvedSubmitterIds: s
							} = t.payload, a = s[0];
							return a && e[r] && -1 === e[r].indexOf(a) ? {
								[r]: [a, ...e[r]]
							} : e
						}
						default:
							return e
					}
				},
				k = Object(s.c)({
					api: u,
					fetchedTokens: l,
					loadMore: p,
					models: O,
					search: _,
					userOrder: S
				}),
				R = r("./src/reddit/actions/grantUserFlair/constants.ts");
			var I = (e = null, t) => {
				switch (t.type) {
					case R.g:
					case R.i:
						return null;
					case R.f:
						return t.payload;
					default:
						return e
				}
			};
			var E = (e = !1, t) => {
					switch (t.type) {
						case R.i:
							return !0;
						case R.g:
						case R.f:
							return !1;
						default:
							return e
					}
				},
				A = Object(s.c)({
					error: I,
					pending: E
				}),
				w = r("./node_modules/lodash/merge.js"),
				x = r.n(w),
				M = r("./node_modules/lodash/omit.js"),
				N = r.n(M);
			const L = {};
			var C = (e = L, t) => {
				switch (t.type) {
					case R.g:
					case R.k: {
						const {
							subredditId: r,
							flairedUsers: s
						} = t.payload;
						return x()({
							...e
						}, {
							[r]: s
						})
					}
					case R.c: {
						const {
							subredditId: r,
							userName: s
						} = t.payload, a = N()(e[r], s);
						return {
							...e,
							[r]: a
						}
					}
					case R.a:
					case R.b:
					case R.h:
						const {
							subredditId: r, userName: s, applied: a
						} = t.payload;
						return a ? {
							...e,
							[r]: {
								...e[r],
								[s]: a
							}
						} : e;
					default:
						return e
				}
			};
			const P = {};
			var D = (e = P, t) => {
				switch (t.type) {
					case R.g: {
						const {
							key: r,
							pageInfo: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			var T = (e = null, t) => {
				switch (t.type) {
					case R.l:
					case R.k:
						return null;
					case R.j:
						return t.payload;
					default:
						return e
				}
			};
			var U = (e = !1, t) => {
					switch (t.type) {
						case R.l:
							return !0;
						case R.k:
						case R.j:
							return !1;
						default:
							return e
					}
				},
				Q = Object(s.c)({
					error: T,
					pending: U
				});
			var q = (e = null, t) => {
					switch (t.type) {
						case R.k: {
							const {
								searchResult: e
							} = t.payload;
							return e
						}
						case R.c: {
							const {
								userName: r
							} = t.payload;
							return e === r ? null : e
						}
						default:
							return e
					}
				},
				B = Object(s.c)({
					api: Q,
					result: q
				});
			const F = {};
			var V = (e = F, t) => {
					switch (t.type) {
						case R.g: {
							const {
								key: r,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case R.a: {
							const {
								key: r,
								userName: s
							} = t.payload;
							if (!r) return e;
							if (!e[r].includes(s)) {
								const t = [...e[r], s];
								return {
									...e,
									[r]: t
								}
							}
							return e
						}
						case R.c: {
							const {
								userName: r
							} = t.payload, s = {};
							for (const t in e) s[t] = e[t].filter(e => e !== r);
							return s
						}
						default:
							return e
					}
				},
				K = Object(s.c)({
					api: A,
					models: C,
					pageInfo: D,
					search: B,
					userOrder: V
				}),
				G = r("./src/reddit/actions/moderationLog/constants.ts");
			const H = {};
			var z = (e = H, t) => {
				switch (t.type) {
					case G.b: {
						const {
							actionIds: r,
							key: s,
							subredditId: a
						} = t.payload;
						return {
							...e,
							[a]: {
								...e[a] || {},
								[s]: r
							}
						}
					}
					default:
						return e
				}
			};
			const $ = {};
			var W = (e = $, t) => {
					switch (t.type) {
						case G.b: {
							const {
								normalizedModerationLog: r,
								subredditId: s
							} = t.payload, a = {};
							r.forEach(e => {
								a[e.id] = e
							});
							const n = {
								[s]: a
							};
							return x()({
								...e
							}, n)
						}
						default:
							return e
					}
				},
				J = Object(s.c)({
					itemOrder: z,
					models: W
				});
			var X = (e = null, t) => {
				switch (t.type) {
					case G.b: {
						const {
							endCursor: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Y = {};
			var Z = (e = Y, t) => {
				switch (t.type) {
					case G.b: {
						const {
							hasNextPage: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					default:
						return e
				}
			};
			const ee = {};
			var te = (e = ee, t) => {
				switch (t.type) {
					case G.b: {
						const {
							hasPreviousPage: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					default:
						return e
				}
			};
			const re = [];
			var se = (e = re, t) => {
				switch (t.type) {
					case G.a: {
						const {
							normalizedModerators: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					default:
						return e
				}
			};
			var ae = (e = null, t) => {
					switch (t.type) {
						case G.b: {
							const {
								startCursor: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				ne = Object(s.c)({
					actions: J,
					endCursor: X,
					hasNextPage: Z,
					hasPreviousPage: te,
					moderators: se,
					startCursor: ae
				});
			const oe = {};
			var de = (e = oe, t) => {
				switch (t.type) {
					case a.K:
					case a.u: {
						const {
							subredditId: r,
							moderators: s
						} = t.payload.response || t.payload, a = {
							[r]: s
						};
						return Object(b.merge)(e, a)
					}
					case a.y: {
						const {
							subredditId: r,
							userId: s,
							permissions: a
						} = t.payload;
						return Object(b.setIn)(e, [r, s, "modPermissions"], a)
					}
					case a.ab: {
						const {
							subredditId: r,
							userId: s
						} = t.payload;
						return Object(b.unsetIn)(e, [r, s])
					}
					default:
						return e
				}
			};
			const ce = {};
			var ue = (e = ce, t) => {
				switch (t.type) {
					case a.v:
					case a.u: {
						const {
							key: r,
							subredditId: s
						} = t.payload;
						return s ? {
							...e,
							[r]: null
						} : e
					}
					case a.t: {
						const {
							error: r,
							key: s,
							subredditId: a
						} = t.payload;
						return a ? {
							...e,
							[s]: r
						} : e
					}
					default:
						return e
				}
			};
			const ie = {};
			var le = (e = ie, t) => {
					switch (t.type) {
						case a.t:
						case a.u: {
							const {
								subredditId: r,
								key: s
							} = t.payload;
							return r ? {
								...e,
								[s]: !1
							} : e
						}
						case a.v: {
							const {
								subredditId: r,
								key: s
							} = t.payload;
							return r ? {
								...e,
								[s]: !0
							} : e
						}
						default:
							return e
					}
				},
				me = Object(s.c)({
					error: ue,
					pending: le
				});
			const pe = {};
			var be = (e = pe, t) => {
					switch (t.type) {
						case a.u: {
							const {
								subredditId: r,
								response: s,
								key: a
							} = t.payload;
							return Object(b.setIn)(e, [r, a], s.moderatorIds)
						}
						case a.ab: {
							const {
								subredditId: r,
								userId: s,
								key: a
							} = t.payload, n = e[r][a].filter(e => e !== s);
							return Object(b.setIn)(e, [r, a], n)
						}
						default:
							return e
					}
				},
				fe = Object(s.c)({
					data: be,
					api: me
				});
			var Oe = (e = null, t) => {
				switch (t.type) {
					case a.B:
					case a.A:
						return null;
					case a.z:
						return t.payload;
					default:
						return e
				}
			};
			var ye = (e = !1, t) => {
					switch (t.type) {
						case a.A:
						case a.z:
							return !1;
						case a.B:
							return !0;
						default:
							return e
					}
				},
				he = Object(s.c)({
					error: Oe,
					pending: ye
				});
			const je = {};
			var ve = (e = je, t) => {
				switch (t.type) {
					case a.A: {
						const {
							subredditId: r,
							moderators: s
						} = t.payload;
						return Object(b.set)(e, r, s)
					}
					case a.X: {
						const {
							subredditId: r,
							userId: s
						} = t.payload;
						return Object(b.unsetIn)(e, [r, s])
					}
					case a.c: {
						const r = t.payload,
							{
								subredditId: s,
								moderators: a
							} = r,
							n = {
								[s]: a
							};
						return Object(b.merge)(e, n)
					}
					default:
						return e
				}
			};
			const _e = {};
			var ge = (e = _e, t) => {
					switch (t.type) {
						case a.A: {
							const {
								subredditId: r,
								moderatorIds: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case a.X: {
							const {
								subredditId: r,
								userId: s
							} = t.payload, a = e[r].filter(e => e !== s);
							return {
								...e,
								[r]: a
							}
						}
						case a.c: {
							const r = t.payload,
								{
									subredditId: s,
									moderatorIds: a
								} = r,
								n = [...e[s] || [], ...a];
							return {
								...e,
								[s]: n
							}
						}
						default:
							return e
					}
				},
				Se = Object(s.c)({
					api: he,
					models: ve,
					userOrder: ge
				});
			const ke = {};
			var Re = (e = ke, t) => {
				switch (t.type) {
					case a.H: {
						const {
							subredditId: r,
							response: s
						} = t.payload, {
							invitePending: a
						} = s, n = {
							[r]: a
						};
						return Object(b.merge)(e, n)
					}
					case a.E:
					case a.F: {
						const {
							subredditId: r
						} = t.payload;
						return Object(b.unset)(e, r)
					}
					default:
						return e
				}
			};
			const Ie = {};
			var Ee = (e = Ie, t) => {
				switch (t.type) {
					case a.u: {
						const {
							response: e
						} = t.payload;
						return {
							[e.subredditId]: {
								after: e.after,
								before: e.before
							}
						}
					}
					default:
						return e
				}
			};
			const Ae = {};
			var we = (e = Ae, t) => {
				switch (t.type) {
					case a.H: {
						const {
							response: e
						} = t.payload;
						return {
							[e.subredditId]: {
								after: e.after,
								before: e.before
							}
						}
					}
					default:
						return e
				}
			};
			const xe = {};
			var Me = (e = xe, t) => {
				switch (t.type) {
					case a.H: {
						const {
							response: r
						} = t.payload, s = {
							[r.subredditId]: r.moderators
						};
						return Object(b.merge)({
							...e
						}, s)
					}
					case a.y: {
						const r = t.payload,
							{
								subredditId: s,
								userId: a,
								permissions: n
							} = r;
						return e[s] && e[s][a] ? Object(b.setIn)(e, [s, a, "modPermissions"], n) : e
					}
					default:
						return e
				}
			};
			var Ne = (e = null, t) => {
				switch (t.type) {
					case a.L:
					case a.K:
						return null;
					case a.J:
						return t.payload;
					default:
						return e
				}
			};
			var Le = (e = !1, t) => {
					switch (t.type) {
						case a.L:
							return !0;
						case a.K:
						case a.J:
							return !1;
						default:
							return e
					}
				},
				Ce = Object(s.c)({
					error: Ne,
					pending: Le
				}),
				Pe = r("./node_modules/lodash/isEqual.js"),
				De = r.n(Pe);
			var Te = (e = null, t) => {
					switch (t.type) {
						case a.L:
						case a.J:
						case a.ab:
							return null;
						case a.K: {
							const e = t.payload.moderatorIds[0];
							return e ? t.payload.moderators[e] : null
						}
						case a.y: {
							const {
								userId: r,
								permissions: s
							} = t.payload;
							return e && e.id === r && !De()(e.modPermissions, s) ? {
								...e,
								modPermissions: s
							} : e
						}
						default:
							return e
					}
				},
				Ue = Object(s.c)({
					api: Ce,
					result: Te
				});
			const Qe = {};
			var qe = (e = Qe, t) => {
				switch (t.type) {
					case a.I:
					case a.H: {
						const {
							subredditId: r,
							key: s
						} = t.payload;
						return r ? {
							...e,
							[s]: null
						} : e
					}
					case a.G: {
						const {
							error: r,
							subredditId: s,
							key: a
						} = t.payload;
						return s ? {
							...e,
							[a]: r
						} : e
					}
					default:
						return e
				}
			};
			const Be = {};
			var Fe = (e = Be, t) => {
					switch (t.type) {
						case a.G:
						case a.H: {
							const {
								subredditId: r,
								key: s
							} = t.payload;
							return r ? {
								...e,
								[s]: !1
							} : e
						}
						case a.I: {
							const {
								subredditId: r,
								key: s
							} = t.payload;
							return r ? {
								...e,
								[s]: !0
							} : e
						}
						default:
							return e
					}
				},
				Ve = Object(s.c)({
					error: qe,
					pending: Fe
				});
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			const Ke = {};
			var Ge = (e = Ke, t) => {
					switch (t.type) {
						case a.H: {
							const {
								response: r,
								subredditId: s,
								key: a
							} = t.payload, {
								moderatorIds: n
							} = r;
							return Object(b.merge)(e, {
								[s]: {
									[a]: n
								}
							})
						}
						case a.ab: {
							const {
								subredditId: r,
								userId: s
							} = t.payload, a = {
								...e[r]
							};
							return Object.keys(e[r]).forEach(t => {
								const n = e[r][t].filter(e => e !== s);
								a[t] = n
							}), Object(b.set)(e, r, a)
						}
						default:
							return e
					}
				},
				He = Object(s.c)({
					data: Ge,
					api: Ve
				}),
				ze = Object(s.c)({
					editableModerators: de,
					editableUserOrder: fe,
					invitedModerators: Se,
					invitePending: Re,
					loadMoreModerators: we,
					loadMoreEditableModerators: Ee,
					models: Me,
					search: Ue,
					userOrder: He
				}),
				$e = r("./src/reddit/actions/bulkActions/constants.ts");
			var We = (e = null, t) => {
					switch (t.type) {
						case $e.c:
						case $e.b:
							return null;
						case $e.a:
							return t.payload;
						default:
							return e
					}
				},
				Je = r("./src/reddit/actions/modQueue/constants.ts");
			var Xe = (e = !1, t) => {
					switch (t.type) {
						case $e.c:
							return !0;
						case $e.b:
						case $e.a:
						case Je.s:
						case Je.r:
							return !1;
						default:
							return e
					}
				},
				Ye = Object(s.c)({
					error: We,
					pending: Xe
				});
			const Ze = {};
			var et = (e = Ze, t) => {
					switch (t.type) {
						case Je.a: {
							const {
								ids: r
							} = t.payload, s = {};
							return r.forEach(e => s[e] = !0), {
								...e,
								...s
							}
						}
						case Je.d: {
							const {
								ids: r
							} = t.payload;
							return N()(e, r)
						}
						case Je.c: {
							const {
								ids: e
							} = t.payload, r = {};
							return e.forEach(e => r[e] = !0), r
						}
						default:
							return e
					}
				},
				tt = r("./src/reddit/models/ModQueue/index.ts");
			const rt = {};
			var st = (e = rt, t) => {
					switch (t.type) {
						case $e.b: {
							const {
								operation: e,
								ids: r
							} = t.payload;
							return "approve" === e ? rt : {
								[tt.c[e]]: r
							}
						}
						default:
							return e
					}
				},
				at = Object(s.c)({
					api: Ye,
					selectedItems: et,
					undoLastAction: st
				});
			var nt = (e = null, t) => {
				switch (t.type) {
					case Je.g:
					case Je.f:
						return null;
					case Je.e:
						return t.payload;
					default:
						return e
				}
			};
			var ot = (e = !1, t) => {
					switch (t.type) {
						case Je.g:
							return !0;
						case Je.f:
						case Je.e:
							return !1;
						default:
							return e
					}
				},
				dt = Object(s.c)({
					error: nt,
					pending: ot
				});
			const ct = {};
			var ut = (e = ct, t) => {
				switch (t.type) {
					case Je.f: {
						const {
							listingKey: r,
							page: s,
							response: a
						} = t.payload, {
							modqueue: n
						} = a;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[s]: n
							}
						}
					}
					default:
						return e
				}
			};
			const it = {};
			var lt = (e = it, t) => {
					switch (t.type) {
						case Je.f: {
							const {
								listingKey: r,
								response: s
							} = t.payload, {
								modqueue: a
							} = s, n = a[a.length - 1] || null;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				mt = Object(s.c)({
					api: dt,
					itemOrder: ut,
					loadMore: lt
				}),
				pt = r("./src/reddit/actions/pages/modListing/constants.ts");
			var bt = (e = null, t) => {
				switch (t.type) {
					case pt.e: {
						const r = t.payload,
							{
								moderatingSubreddits: s
							} = r;
						return s ? null : e
					}
					case Je.i:
					case Je.f:
					case Je.m:
					case Je.p:
					case Je.v: {
						const {
							response: e
						} = t.payload, {
							moderatedAfter: r
						} = e;
						return r
					}
					case Je.k: {
						const e = t.payload,
							{
								moderatedAfter: r
							} = e;
						return r
					}
					default:
						return e
				}
			};
			const ft = [];
			var Ot = (e = ft, t) => {
				switch (t.type) {
					case Je.i:
					case Je.f:
					case Je.m:
					case Je.p:
					case Je.v: {
						const {
							response: e
						} = t.payload, {
							listingOrder: r
						} = e;
						return r
					}
					case Je.k: {
						const r = t.payload,
							{
								listingOrder: s
							} = r;
						return [...e, ...s]
					}
					case pt.e: {
						const r = t.payload,
							{
								listingOrder: s
							} = r;
						return s || e
					}
					default:
						return e
				}
			};
			var yt = (e = !1, t) => {
				switch (t.type) {
					case Je.b:
						return !0;
					default:
						return e
				}
			};
			var ht = (e = !1, t) => {
					switch (t.type) {
						case Je.k:
							return !0;
						case Je.b:
							return !1;
						default:
							return e
					}
				},
				jt = Object(s.c)({
					after: bt,
					data: Ot,
					loaded: yt,
					pending: ht
				});
			var vt = (e = null, t) => {
				switch (t.type) {
					case Je.j:
					case Je.i:
						return null;
					case Je.h:
						return t.payload;
					default:
						return e
				}
			};
			var _t = (e = !1, t) => {
					switch (t.type) {
						case Je.j:
							return !0;
						case Je.i:
						case Je.h:
							return !1;
						default:
							return e
					}
				},
				gt = Object(s.c)({
					error: vt,
					pending: _t
				});
			const St = {};
			var kt = (e = St, t) => {
				switch (t.type) {
					case Je.i: {
						const {
							listingKey: r,
							page: s,
							response: a
						} = t.payload, {
							modqueue: n
						} = a;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[s]: n
							}
						}
					}
					default:
						return e
				}
			};
			const Rt = {};
			var It = (e = Rt, t) => {
					switch (t.type) {
						case Je.i: {
							const {
								listingKey: r,
								response: s
							} = t.payload, {
								modqueue: a
							} = s, n = a[a.length - 1] || null;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				Et = Object(s.c)({
					api: gt,
					itemOrder: kt,
					loadMore: It
				});
			var At = (e = null, t) => {
				switch (t.type) {
					case Je.n:
					case Je.m:
						return null;
					case Je.l:
						return t.payload;
					default:
						return e
				}
			};
			var wt = (e = !1, t) => {
					switch (t.type) {
						case Je.n:
							return !0;
						case Je.m:
						case Je.l:
							return !1;
						default:
							return e
					}
				},
				xt = Object(s.c)({
					error: At,
					pending: wt
				});
			const Mt = {};
			var Nt = (e = Mt, t) => {
				switch (t.type) {
					case Je.m: {
						const {
							listingKey: r,
							page: s,
							response: a
						} = t.payload, {
							modqueue: n
						} = a;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[s]: n
							}
						}
					}
					default:
						return e
				}
			};
			const Lt = {};
			var Ct = (e = Lt, t) => {
					switch (t.type) {
						case Je.m: {
							const {
								listingKey: r,
								response: s
							} = t.payload, {
								modqueue: a
							} = s, n = a[a.length - 1] || null;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				Pt = Object(s.c)({
					api: xt,
					itemOrder: Nt,
					loadMore: Ct
				});
			var Dt = (e = null, t) => {
				switch (t.type) {
					case Je.q:
					case Je.p:
						return null;
					case Je.o:
						return t.payload;
					default:
						return e
				}
			};
			var Tt = (e = !1, t) => {
					switch (t.type) {
						case Je.q:
							return !0;
						case Je.p:
						case Je.o:
							return !1;
						default:
							return e
					}
				},
				Ut = Object(s.c)({
					error: Dt,
					pending: Tt
				});
			const Qt = {};
			var qt = (e = Qt, t) => {
				switch (t.type) {
					case Je.p: {
						const {
							listingKey: r,
							page: s,
							response: a
						} = t.payload, {
							modqueue: n
						} = a;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[s]: n
							}
						}
					}
					default:
						return e
				}
			};
			const Bt = {};
			var Ft = (e = Bt, t) => {
					switch (t.type) {
						case Je.p: {
							const {
								listingKey: r,
								response: s
							} = t.payload, {
								modqueue: a
							} = s, n = a[a.length - 1] || null;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				Vt = Object(s.c)({
					api: Ut,
					itemOrder: qt,
					loadMore: Ft
				});
			var Kt = (e = null, t) => {
				switch (t.type) {
					case Je.w:
					case Je.v:
						return null;
					case Je.u:
						return t.payload;
					default:
						return e
				}
			};
			var Gt = (e = !1, t) => {
					switch (t.type) {
						case Je.w:
							return !0;
						case Je.v:
						case Je.u:
							return !1;
						default:
							return e
					}
				},
				Ht = Object(s.c)({
					error: Kt,
					pending: Gt
				});
			const zt = {};
			var $t = (e = zt, t) => {
				switch (t.type) {
					case Je.v: {
						const {
							listingKey: r,
							page: s,
							response: a
						} = t.payload, {
							modqueue: n
						} = a;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[s]: n
							}
						}
					}
					default:
						return e
				}
			};
			const Wt = {};
			var Jt = (e = Wt, t) => {
					switch (t.type) {
						case Je.v: {
							const {
								listingKey: r,
								response: s
							} = t.payload, {
								modqueue: a
							} = s, n = a[a.length - 1] || null;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				Xt = Object(s.c)({
					api: Ht,
					itemOrder: $t,
					loadMore: Jt
				}),
				Yt = Object(s.c)({
					bulkAction: at,
					edited: mt,
					moderatedCommunitiesOrder: jt,
					modqueue: Et,
					reports: Pt,
					spam: Vt,
					unmoderated: Xt
				});
			var Zt = (e = null, t) => {
				switch (t.type) {
					case a.P:
					case a.N:
						return null;
					case a.M:
						return t.payload;
					default:
						return e
				}
			};
			const er = {};
			var tr = (e = er, t) => {
					switch (t.type) {
						case a.P: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, a = Object(o.e)(r, s);
							return {
								...e,
								[a]: !0
							}
						}
						case a.N:
						case a.M: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, a = Object(o.e)(r, s);
							return {
								...e,
								[a]: !1
							}
						}
						default:
							return e
					}
				},
				rr = Object(s.c)({
					error: Zt,
					pending: tr
				});
			const sr = {};
			var ar = (e = sr, t) => {
					switch (t.type) {
						case a.N: {
							const {
								fetchedToken: r,
								subredditId: s
							} = t.payload, a = Object(o.e)(s, r);
							return {
								...e,
								[a]: !0
							}
						}
						default:
							return e
					}
				},
				nr = r("./src/reddit/actions/inContextModeration.ts");
			var or = (e = null, t) => {
				switch (t.type) {
					case nr.b:
						return t.payload;
					default:
						return e
				}
			};
			const dr = {};
			var cr = (e = dr, t) => {
				switch (t.type) {
					case a.N: {
						const {
							subredditId: e,
							after: r
						} = t.payload;
						return {
							[e]: r
						}
					}
					default:
						return e
				}
			};
			const ur = {};
			var ir = (e = ur, t) => {
				switch (t.type) {
					case a.O:
					case a.N: {
						const {
							subredditId: r,
							mutedUsers: s
						} = t.payload, a = {
							[r]: s
						};
						return Object(b.merge)(e, a)
					}
					case a.T: {
						const {
							subredditId: r,
							userId: s
						} = t.payload;
						return Object(b.unsetIn)(e, [r, s])
					}
					default:
						return e
				}
			};
			var lr = (e = null, t) => {
				switch (t.type) {
					case a.S:
					case a.R:
						return null;
					case a.Q:
						return t.payload;
					default:
						return e
				}
			};
			var mr = (e = !1, t) => {
					switch (t.type) {
						case a.S:
							return !0;
						case a.R:
						case a.Q:
							return !1;
						default:
							return e
					}
				},
				pr = Object(s.c)({
					error: lr,
					pending: mr
				});
			var br = (e = null, t) => {
					switch (t.type) {
						case a.S:
						case a.Q:
							return null;
						case a.R: {
							const e = t.payload.mutedUserIds[0];
							return e ? t.payload.mutedUsers[e] : null
						}
						default:
							return e
					}
				},
				fr = Object(s.c)({
					api: pr,
					result: br
				});
			const Or = {};
			var yr = (e = Or, t) => {
					switch (t.type) {
						case a.N: {
							const {
								subredditId: r,
								mutedUserIds: s
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: [...e[r], ...s]
							} : {
								...e,
								[r]: s
							}
						}
						case a.T: {
							const {
								subredditId: r,
								userId: s
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== s)
							}
						}
						case a.O: {
							const {
								subredditId: r,
								mutedUserIds: s
							} = t.payload, a = s[0];
							return a && e[r] && -1 === e[r].indexOf(a) ? {
								[r]: [a, ...e[r]]
							} : e
						}
						default:
							return e
					}
				},
				hr = Object(s.c)({
					api: rr,
					fetchedTokens: ar,
					inContext: or,
					loadMore: cr,
					models: ir,
					search: fr,
					userOrder: yr
				});
			t.a = Object(s.c)({
				approvedSubmitters: k,
				flairedUsers: K,
				moderationLog: ne,
				moderators: ze,
				modQueue: Yt,
				muted: hr
			})
		},
		"./src/reddit/selectors/modQueue.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "e", (function() {
				return b
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/lib/constants/index.ts");
			var s = r("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				a = r("./src/lib/objectSelector/index.ts"),
				n = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/comments/index.ts"),
				d = r("./src/reddit/reducers/pages/modHub/index.ts");
			Object(n.a)({
				features: {
					comments: o.a
				},
				pages: {
					modHub: d.a
				}
			});
			const c = (e, t) => Object(s.a)({
					onlyOfType: t.queryParams.only,
					profile: t.profileName,
					subreddit: t.subredditName
				}),
				u = Object(a.a)((e, t) => {
					var r, s, a;
					const {
						pageName: n,
						page: o
					} = t, d = c(0, t);
					if (!(null === (a = null === (s = null === (r = e.pages.modHub.modQueue[n]) || void 0 === r ? void 0 : r.itemOrder) || void 0 === s ? void 0 : s[d]) || void 0 === a ? void 0 : a[o])) return;
					const u = e.pages.modHub.modQueue[n].itemOrder[d][o];
					return u ? u.map(t => e.posts.models[t] || e.features.comments.models[t]) : []
				}),
				i = (e, t) => {
					var r;
					const {
						pageName: s
					} = t;
					return null === (r = e.pages.modHub.modQueue[s]) || void 0 === r || !r.api || e.pages.modHub.modQueue[s].api.pending
				},
				l = (e, t) => {
					var r;
					const s = c(0, t);
					return null === (r = e.pages.modHub.modQueue[t.pageName]) || void 0 === r ? void 0 : r.loadMore[s]
				},
				m = e => Object.keys(e.pages.modHub.modQueue.bulkAction.selectedItems),
				p = e => e.pages.modHub.modQueue.bulkAction.api.pending,
				b = e => e.pages.modHub.modQueue.moderatedCommunitiesOrder.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueue~ModQueuePages~ModerationPages.62a3acc29a56872b68f2.js.map