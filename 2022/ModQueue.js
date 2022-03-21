// https://www.redditstatic.com/desktop2x/ModQueue.a2cafe204c2e4410495b.js
// Retrieved at 3/21/2022, 10:30:03 AM by Reddit Dataminer v1.0.0
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
				return h
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "f", (function() {
				return k
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "g", (function() {
				return A
			})), s.d(t, "h", (function() {
				return y
			})), s.d(t, "b", (function() {
				return x
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
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
				f = s("./src/reddit/selectors/experiments/d2xGqlDistinguish.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/actions/comment/index.ts"),
				R = s("./src/reddit/actions/comment/constants.ts");
			const S = Object(r.a)(R.n),
				h = e => async (t, s, {
					apiContext: o
				}) => {
					s().features.comments.models[e] && (await Object(m.j)(o(), e)).ok && t((e => async t => {
						t(S({
							commentId: e
						}))
					})(e))
				}, v = e => async (t, s, {
					apiContext: n
				}) => {
					if (!Object(_.O)(s())) return void t(Object(d.i)(u.a.LOGIN_MODAL_ID));
					const r = s().features.comments.models[e];
					if (!r) return;
					const a = r.isLocked ? m.l : m.e;
					t(Object(j.i)({
						[e]: {
							isLocked: !r.isLocked
						}
					})), (await a(n(), e)).ok ? t(Object(i.f)({
						kind: p.b.SuccessMod,
						text: r.isLocked ? o.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : o.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(j.i)({
						[e]: {
							isLocked: r.isLocked
						}
					}))
				}, k = Object(r.a)(R.F), g = e => async (t, s, {
					apiContext: n
				}) => {
					const r = s(),
						a = r.features.comments.models[e],
						d = r.user.account ? r.user.account.displayText : null;
					a && d && (t(Object(j.i)({
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
					})), (await Object(m.a)(n(), e)).ok ? t(Object(i.f)({
						kind: p.b.SuccessMod,
						text: o.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(j.i)({
						[e]: {
							isApproved: a.isApproved,
							approvedBy: null,
							bannedBy: a.bannedBy,
							isRemoved: a.isRemoved,
							isSpam: a.isSpam,
							modNote: a.modNote,
							modReasonBy: a.modReasonBy,
							modRemovalReason: a.modRemovalReason,
							numReports: a.numReports || null
						}
					})), Object(c.d)())
				}, E = (e, t) => async (s, n, {
					apiContext: r
				}) => {
					const a = n(),
						d = a.features.comments.models[e],
						u = a.user.account ? a.user.account.displayText : null;
					d && u && (s(Object(j.i)({
						[e]: {
							approvedBy: null,
							bannedBy: u,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.h)(r(), e, t)).ok ? s(Object(i.f)({
						kind: p.b.SuccessMod,
						text: t ? o.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : o.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : s(Object(j.i)({
						[e]: {
							approvedBy: d.approvedBy,
							bannedBy: d.bannedBy,
							isApproved: d.isApproved,
							isRemoved: d.isRemoved,
							isSpam: d.isSpam
						}
					})), Object(c.d)())
				}, A = e => async (t, s, {
					apiContext: n
				}) => {
					const r = s().features.comments.models[e];
					if (!r) return;
					const a = r.ignoreReports ? m.k : m.d;
					t(Object(j.i)({
						[e]: {
							ignoreReports: !r.ignoreReports
						}
					})), (await a(n(), e)).ok ? t(Object(i.f)({
						kind: p.b.SuccessMod,
						text: r.ignoreReports ? o.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : o.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(j.i)({
						[e]: {
							ignoreReports: r.ignoreReports
						}
					}))
				}, y = (e, t, s) => async (r, a, {
					gqlContext: d
				}) => {
					const c = Object(O.b)(a(), {
						commentId: e
					});
					if (!c) return;
					const u = s === n.dc.Snoozed,
						m = {
							itemId: e,
							reportText: t,
							isSnoozed: u
						};
					if ((await Object(l.a)(d(), {
							input: m
						})).ok) r(Object(j.i)({
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
				}, x = (e, t, s) => async (o, r, {
					apiContext: d,
					gqlContext: c
				}) => {
					const i = r(),
						u = i.features.comments.models[e];
					if (!u) return;
					const l = u.postId,
						b = i.postStickiedComments.data[l],
						p = n.g[t];
					let O;
					if (o(Object(j.i)({
							[e]: {
								distinguishType: t,
								isAdmin: t === n.G.ADMIN,
								isMod: t === n.G.MODERATOR,
								isStickied: !!s
							}
						})), s && b && b !== e && o(Object(j.i)({
							[b]: {
								isStickied: !1
							}
						})), Object(f.a)(r())) {
						const o = Object(m.b)(c(), e, t),
							n = Object(m.c)(c(), e, !!s),
							r = [o];
						(s || !s && e === b) && r.push(n), O = {
							ok: (await Promise.all(r)).every(e => e.ok)
						}
					} else O = await Object(m.g)(d(), e, p, s || null);
					O.ok ? s && o(k({
						id: e,
						postId: l,
						commentsPageKey: Object(a.a)(l, null, {
							sort: n.u.CONFIDENCE,
							...i.platform.currentPage.queryParams
						})
					})) : (o(Object(j.i)({
						[e]: {
							distinguishType: u.distinguishType,
							isAdmin: u.isAdmin,
							isMod: u.isMod,
							isStickied: u.isStickied
						}
					})), o(Object(j.i)({
						[b]: {
							isStickied: i.features.comments.models[b].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/modQueue/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return F
			})), s.d(t, "d", (function() {
				return H
			})), s.d(t, "f", (function() {
				return $
			})), s.d(t, "a", (function() {
				return z
			})), s.d(t, "b", (function() {
				return W
			})), s.d(t, "c", (function() {
				return J
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/bulkActions/index.ts"),
				d = s("./src/reddit/actions/modQueueTriggers/index.ts"),
				c = s("./src/reddit/actions/removalReasons/index.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/reddit/endpoints/modQueue/index.ts"),
				m = s("./src/reddit/helpers/correlationIdTracker.ts"),
				l = s("./src/reddit/helpers/flair.ts"),
				b = s("./src/reddit/helpers/isPost.ts"),
				p = s("./src/reddit/models/ModQueue/index.ts"),
				O = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/constants/experiments.ts"),
				_ = s("./src/reddit/helpers/chooseVariant/index.ts");
			var j = s("./src/reddit/selectors/modQueue.ts"),
				R = s("./src/reddit/selectors/subreddit.ts"),
				S = s("./src/reddit/selectors/telemetry.ts"),
				h = s("./src/telemetry/index.ts"),
				v = s("./src/lib/initializeClient/installReducer.ts"),
				k = s("./src/reddit/reducers/pages/modHub/index.ts"),
				g = s("./src/reddit/actions/modQueue/constants.ts");
			Object(v.a)({
				pages: {
					modHub: k.a
				}
			});
			const E = Object(r.a)(g.j),
				A = Object(r.a)(g.i),
				y = Object(r.a)(g.h),
				x = Object(r.a)(g.g),
				I = Object(r.a)(g.f),
				N = Object(r.a)(g.e),
				L = Object(r.a)(g.n),
				M = Object(r.a)(g.m),
				C = Object(r.a)(g.l),
				P = Object(r.a)(g.q),
				D = Object(r.a)(g.p),
				T = Object(r.a)(g.o),
				w = Object(r.a)(g.w),
				Q = Object(r.a)(g.v),
				V = Object(r.a)(g.u),
				F = (e, t, r) => async (a, c, {
					apiContext: m,
					gqlContext: l
				}) => {
					var b;
					let j, R, S;
					switch (t) {
						case n.rb.Edited:
							j = x, R = N, S = I;
							break;
						case n.rb.Modqueue:
							j = E, R = y, S = A;
							break;
						case n.rb.Reports:
							j = L, R = C, S = M;
							break;
						case n.rb.Spam:
							j = P, R = T, S = D;
							break;
						case n.rb.Unmoderated:
							j = w, R = V, S = Q;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					a(j());
					const h = await Object(u.c)(m(), t, r);
					if (h.ok) {
						if (function(e) {
								return Object(_.c)(e, {
									experimentEligibilitySelector: _.a,
									experimentName: f.od
								}) === f.bd
							}(c())) {
							const {
								normalizeModQueueListingFromGql: e,
								transformGatewayParamsToGQLVariables: o
							} = await s.e(11).then(s.bind(null, "./src/reddit/helpers/graphql/normalizeModQueueListingFromGql/index.ts")), {
								diffAndLog: n
							} = await s.e(8).then(s.bind(null, "./src/reddit/helpers/graphql/normalizeModQueueListingFromGql/diffAndLog.ts")), a = h.body, d = {
								...r
							};
							if (d.subreddit) {
								const e = null === (b = Object.values(a.subreddits).find(({
									name: e
								}) => e === r.subreddit)) || void 0 === b ? void 0 : b.id;
								d.subreddit = e
							}
							const i = o({
									getState: c,
									queueType: t,
									options: d
								}),
								m = await Object(u.b)(l(), i);
							if (!m.ok) return;
							const p = e(m.body.data),
								O = {
									posts: a.posts,
									comments: a.comments,
									modqueue: a.modqueue,
									reports: a.reports,
									authorFlair: a.authorFlair
								},
								f = {
									...h.body,
									...p
								};
							h.body = f, n({
								normalizedGqlResponse: p,
								gatewayResponse: O,
								rawGqlResponse: m.body.data
							})
						}
						const o = h.body;
						a(S({
							listingKey: e,
							page: `${r.page||p.b}`,
							response: o
						})), a(Object(d.a)({
							postIds: o.posts ? Object.keys(o.posts) : void 0,
							commentIds: o.comments ? Object.keys(o.comments) : void 0
						}))
					} else a(R(h.error)), a(Object(i.f)({
						kind: O.b.Error,
						text: o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, U = Object(r.a)(g.k), B = Object(r.a)(g.b), H = e => async (t, s, {
					apiContext: n
				}) => {
					const r = s(),
						a = r.pages.modHub.modQueue.moderatedCommunitiesOrder.after,
						d = r.pages.modHub.modQueue.moderatedCommunitiesOrder.pending,
						c = r.pages.modHub.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: m
						} = r.platform.currentPage.urlParams,
						l = m;
					if (e && d || c || !a) return;
					const b = await Object(u.c)(n(), l, {
						moderated_after: a
					});
					if (b.ok) {
						const e = b.body;
						t(U(e)), e.moderatedAfter ? t(H()) : t(B())
					} else t(Object(i.f)({
						kind: O.b.Error,
						text: o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, q = Object(r.a)(g.t), G = Object(r.a)(g.s), K = Object(r.a)(g.r), $ = (e, t, s) => async (n, r, {
					apiContext: d
				}) => {
					n(Object(a.c)());
					const f = r(),
						_ = Object(j.f)(f),
						v = f.user.account && f.user.account.displayText;
					Object(m.e)(m.a.ModQueue);
					const k = Object(m.c)(m.a.ModQueue);
					Object(h.a)({
						source: "bulk_mod_action_menu",
						action: "click",
						noun: e,
						...S.o(f),
						actionInfo: S.d(f, {
							count: _.length,
							paneName: f.platform.currentPage ? f.platform.currentPage.urlParams.pageName : void 0
						}),
						screen: S.ab(f),
						correlationId: k
					});
					for (let t = 0; t < _.length; t++) {
						const s = _[t];
						let o = e;
						[p.a.Approve, p.a.Remove, p.a.Spam].includes(e) && (Object(b.a)(s) ? o += "_link" : o += "_comment"), Object(h.a)({
							source: "bulk_mod_action",
							action: "click",
							noun: o,
							...S.o(f),
							actionInfo: S.d(f, {
								count: _.length,
								paneName: f.platform.currentPage ? f.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: S.i(f, s),
							post: S.I(f, s),
							profile: S.T(f, s),
							screen: S.ab(f),
							subreddit: S.lb(f, s),
							correlationId: k
						})
					}
					Object(m.b)(m.a.ModQueue);
					const g = {
						ids: _
					};
					t && (g.text = Object(l.g)(t) || "", g.flairTemplateId = ""), s && (g.cssClass = s, g.flairTemplateId = s);
					const E = await Object(u.a)(d(), e, g);
					if (E.ok) {
						n(Object(a.b)({
							...E.body,
							operation: e,
							ids: _,
							username: v,
							options: {
								flair: t
							}
						}));
						const s = function(e, t) {
							switch (e) {
								case p.a.Approve:
									return o.fbt._({
										"*": "{number} posts/comments have been approved",
										_1: "1 post/comment has been approved"
									}, [o.fbt._plural(t, "number")], {
										hk: "2kKhSf"
									});
								case p.a.Flair:
									return o.fbt._({
										"*": "{number} posts/comments have had flair applied",
										_1: "1 post/comment has had flair applied"
									}, [o.fbt._plural(t, "number")], {
										hk: "3syB5O"
									});
								case p.a.IgnoreReports:
									return o.fbt._({
										"*": "{number} posts/comments have had their reports ignored",
										_1: "1 post/comment has had their reports ignored"
									}, [o.fbt._plural(t, "number")], {
										hk: "2WfE4g"
									});
								case p.a.Lock:
									return o.fbt._({
										"*": "{number} posts/comments have been locked",
										_1: "1 post/comment has been locked"
									}, [o.fbt._plural(t, "number")], {
										hk: "45oMbv"
									});
								case p.a.MarkNSFW:
									return o.fbt._({
										"*": "{number} posts/comments have been marked NSFW",
										_1: "1 post/comment has been marked NSFW"
									}, [o.fbt._plural(t, "number")], {
										hk: "oPsQr"
									});
								case p.a.RemovalReason:
									return o.fbt._({
										"*": "{number} posts/comments have had removal reasons applied",
										_1: "1 post/comment has had removal reasons applied"
									}, [o.fbt._plural(t, "number")], {
										hk: "35Tosn"
									});
								case p.a.Remove:
									return o.fbt._({
										"*": "{number} posts/comments have been removed",
										_1: "1 post/comment has been removed"
									}, [o.fbt._plural(t, "number")], {
										hk: "B1ZbE"
									});
								case p.a.Spam:
									return o.fbt._({
										"*": "{number} posts/comments have been marked as spam",
										_1: "1 post/comment has been marked as spam"
									}, [o.fbt._plural(t, "number")], {
										hk: "3OoNfp"
									});
								case p.a.Spoiler:
									return o.fbt._({
										"*": "{number} posts/comments have been marked as spoilers",
										_1: "1 post/comment has been marked as spoilers"
									}, [o.fbt._plural(t, "number")], {
										hk: "1DFW5M"
									});
								case p.a.UnignoreReports:
									return o.fbt._({
										"*": "{number} posts/comments have had their reports un-ignored",
										_1: "1 post/comment has had their reports un-ignored"
									}, [o.fbt._plural(t, "number")], {
										hk: "303Hpb"
									});
								case p.a.Unlock:
									return o.fbt._({
										"*": "{number} posts/comments have been unlocked",
										_1: "1 post/comment has been unlocked"
									}, [o.fbt._plural(t, "number")], {
										hk: "5gUht"
									});
								case p.a.UnmarkNSFW:
									return o.fbt._({
										"*": "{number} posts/comments have been un-marked as NSFW",
										_1: "1 post/comment has been un-marked as NSFW"
									}, [o.fbt._plural(t, "number")], {
										hk: "3oSSST"
									});
								case p.a.Unspoiler:
								case p.a.Unspoiler:
									return o.fbt._({
										"*": "{number} posts/comments have been un-marked as spoilers",
										_1: "1 post/comment has been un-marked as spoilers"
									}, [o.fbt._plural(t, "number")], {
										hk: "3lHoNI"
									})
							}
						}(e, _.length);
						if (e !== p.a.Approve && e !== p.a.Flair) {
							let t, r;
							const d = f.platform.currentPage && f.platform.currentPage.queryParams && f.platform.currentPage.queryParams.subreddit,
								m = d && Object(R.D)(f, d);
							e === p.a.Remove && m && _.length > 1 && (t = o.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), r = Object(c.fetchReasonsAndOpenModal)(m, _));
							const l = Object(i.e)(s, O.b.Undo, o.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, {
								apiContext: s
							}) => {
								e(q());
								const n = t(),
									r = Object.keys(n.pages.modHub.modQueue.bulkAction.undoLastAction)[0],
									d = n.pages.modHub.modQueue.bulkAction.undoLastAction[r],
									c = n.user.account && n.user.account.displayText;
								e(Object(a.c)());
								const m = await Object(u.a)(s(), r, {
									ids: d
								});
								m.ok ? e(G({
									...m.body,
									operation: r,
									ids: d,
									username: c
								})) : (e(K(m.error)), e(Object(i.f)({
									kind: O.b.Error,
									text: o.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, r);
							n(Object(i.f)(l))
						} else {
							const e = Object(i.e)(s, O.b.SuccessMod);
							n(Object(i.f)(e))
						}
					} else {
						n(Object(a.a)(E.error));
						const e = Object(i.e)(o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), O.b.Error);
						n(Object(i.f)(e))
					}
				}, z = Object(r.a)(g.a), W = Object(r.a)(g.c), J = Object(r.a)(g.d)
		},
		"./src/reddit/actions/pages/modQueue/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "modQueuePageRequested", (function() {
				return O
			}));
			var o = s("./node_modules/lodash/get.js"),
				n = s.n(o),
				r = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/pageTitle/index.ts"),
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
					subreddit: j
				} = O, R = s();
				if (!p) return;
				const S = Object(d.a)({
						onlyOfType: O.only,
						profile: O.profile,
						subreddit: O.subreddit
					}),
					h = R.pages.modHub.modQueue[p].itemOrder[S],
					v = !!(null === (b = null == h ? void 0 : h[f]) || void 0 === b ? void 0 : b.length),
					k = R.pages.modHub.modQueue[p].api.error;
				if (R.pages.modHub.modQueue[p].api.pending || v && !k) return;
				Object(l.p)(R) || await Object(u.e)(S, p, O)(t, s, o);
				const g = s();
				if (n()(g.pages.modHub.modQueue[p].api.error, "type") === r.I.AUTHENTICATION_ERROR) return Object(c.a)(t, g);
				Object(i.j)(g, j, _), t(m.m({
					title: Object(a.f)()
				}))
			}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "removalReasonsPending", (function() {
				return Y
			})), s.d(t, "removalReasonsLoaded", (function() {
				return Z
			})), s.d(t, "removalReasonsFailed", (function() {
				return X
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
				return je
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return Re
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return Se
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return he
			})), s.d(t, "submitRemovalReason", (function() {
				return ve
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return ke
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
			const j = {};
			var R = (e = j, t) => {
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
			const S = {};
			var h = (e = S, t) => {
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
			var v = (e = null, t) => {
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
				k = Object(r.c)({
					api: _,
					models: R,
					reasonOrder: h,
					removedItemIds: v
				}),
				g = s("./src/lib/constants/index.ts"),
				E = s("./src/lib/makeActionCreator/index.ts"),
				A = s("./src/lib/makeCommentsPageKey/index.ts"),
				y = s("./src/lib/makeDraftKey/index.ts"),
				x = s("./src/reddit/actions/bulkActions/index.ts"),
				I = s("./src/reddit/actions/comment/index.ts"),
				N = s("./src/reddit/actions/comment/authoring.ts"),
				L = s("./src/reddit/actions/comment/moderation.ts"),
				M = s("./src/reddit/actions/modal.ts"),
				C = s("./src/reddit/actions/post.ts"),
				P = s("./src/reddit/actions/toaster.ts"),
				D = s("./src/reddit/constants/modals.ts"),
				T = s("./src/lib/makeApiRequest/index.ts"),
				w = s("./src/lib/omitHeaders/index.ts"),
				Q = s("./src/reddit/constants/headers.ts"),
				V = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const F = (e, t) => Object(T.a)(Object(w.a)(e, [Q.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: g.jb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				U = (e, t, s) => Object(T.a)(Object(w.a)(e, [Q.a]), {
					endpoint: Object(V.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`),
					method: g.jb.POST,
					type: "json",
					data: t
				});
			var B = s("./src/reddit/helpers/isPost.ts"),
				H = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				q = s("./src/reddit/helpers/routeKey/index.ts"),
				G = s("./src/reddit/models/ModQueue/index.ts"),
				K = s("./src/reddit/models/PostDraft/index.ts"),
				$ = s("./src/reddit/models/RemovalReason/index.ts"),
				z = s("./src/reddit/models/Toast/index.ts"),
				W = s("./src/reddit/selectors/comments.ts"),
				J = s("./src/reddit/selectors/platform.ts");
			Object(n.a)({
				features: {
					removalReasons: k
				}
			});
			const Y = Object(E.a)("REMOVALREASONS__LOAD_PENDING"),
				Z = Object(E.a)("REMOVALREASONS__LOAD_SUCCESS"),
				X = Object(E.a)("REMOVALREASONS__LOAD_FAILED"),
				ee = e => async (t, s, {
					apiContext: o
				}) => {
					const n = s().subreddits.models[e].name;
					t(Y());
					const r = await ((e, t) => Object(T.a)(Object(w.a)(e, [Q.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: g.jb.GET
					}))(o(), n);
					r.ok ? t(Z({
						subredditId: e,
						response: r.body
					})) : t(X(r.error))
				}, te = Object(E.a)(a), se = Object(E.a)(d), oe = Object(E.a)(c), ne = (e, t) => async (s, n, {
					apiContext: r
				}) => {
					const a = n().subreddits.models[e].name;
					s(te());
					const d = await ((e, t, s) => Object(T.a)(Object(w.a)(e, [Q.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: g.jb.POST,
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
						})), s(Object(P.f)({
							kind: z.b.SuccessMod,
							text: o.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(oe(d.error))
				}, re = Object(E.a)(i), ae = Object(E.a)(u), de = Object(E.a)(m), ce = (e, t) => async (s, n, {
					apiContext: r
				}) => {
					const a = n().subreddits.models[e].name;
					s(re());
					const d = await ((e, t, s) => Object(T.a)(Object(w.a)(e, [Q.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`,
						method: g.jb.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(r(), a, t);
					d.ok ? (s(ae({
						subredditId: e,
						reason: t
					})), s(Object(P.f)({
						kind: z.b.SuccessMod,
						text: o.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(de(d.error))
				}, ie = Object(E.a)(l), ue = Object(E.a)(b), me = Object(E.a)(p), le = (e, t) => async (s, n, {
					apiContext: r
				}) => {
					const a = n().subreddits.models[e].name;
					s(ie());
					const d = await ((e, t, s) => Object(T.a)(Object(w.a)(e, [Q.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`,
						method: g.jb.DELETE
					}))(r(), a, t);
					d.ok ? (s(ue({
						subredditId: e,
						reasonId: t
					})), s(Object(P.f)({
						kind: z.b.SuccessMod,
						text: o.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(me(d.error))
				}, be = Object(E.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), pe = (e, t) => async (s, o, {
					apiContext: n
				}) => {
					const r = o();
					r.features.removalReasons.reasonOrder[e] && r.features.removalReasons.reasonOrder[e].length > 0 || s(ee(e)), s(be({
						subredditId: e,
						itemIds: t
					})), s(Object(M.i)(D.a.ADD_REMOVAL_REASON))
				}, Oe = Object(E.a)("REMOVALREASONS__SUBMIT_PENDING"), fe = Object(E.a)("REMOVALREASONS__SUBMIT_SUCCESS"), _e = Object(E.a)("REMOVALREASONS__SUBMIT_FAILED"), je = Object(E.a)("REMOVALREASONS__MESSAGE_PENDING"), Re = Object(E.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Se = Object(E.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), he = Object(E.a)("REMOVALREASONS__MESSAGE_FAILED"), ve = (e, t, s, o, n) => async (r, a, {
					apiContext: d
				}) => {
					const c = a(),
						i = c.user.account && c.user.account.displayText,
						u = e[0],
						m = Object(B.a)(u) ? $.e.Post : $.e.Comment,
						l = m === $.e.Post ? c.posts.models[u] : c.features.comments.models[u],
						b = m === $.e.Post ? C.S : I.i;
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
						O = await F(d(), p);
					if (O.ok) {
						if (r(fe()), t) {
							r(je());
							const n = {
									itemId: e,
									message: s,
									title: t.title,
									type: o
								},
								a = await U(d(), Object($.h)(n, m), m);
							if (a.ok) {
								if (o === $.f.Public) {
									if (r(Se()), a.body) {
										const e = Object(H.a)(a.body, i),
											t = {
												comment: e,
												parentId: u
											},
											s = Object(J.f)(c),
											o = c.platform.currentPage && c.platform.currentPage.routeMatch;
										let n = s && o && Object(q.a)(o, c, c.posts.models[e.postId]);
										if (n || (n = Object(A.a)(e.postId, null, {
												sort: g.v,
												hasSortParam: !0
											})), m === $.e.Post) {
											const s = Object(y.a)(K.c.replyToPost, u);
											r(Object(N.o)({
												...t,
												headCommentId: Object(W.w)(c, {
													commentsPageKey: n
												}),
												commentsPageKey: n,
												draftKey: s
											}));
											const o = c.postStickiedComments.data[u];
											r(Object(L.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: n
											})), o && o !== e.id && r(Object(I.i)({
												[o]: {
													isStickied: !1
												}
											}))
										} else if (m === $.e.Comment) {
											const e = Object(y.a)(K.c.replyToComment, l.id),
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
								} else r(Re());
								return !0
							}
							return r(he(a.error)), !1
						}
					} else r(_e(O.error)), r(b({
						[u]: {
							modNote: l.modNote,
							modRemovalReason: l.modRemovalReason,
							modReasonBy: l.modReasonBy
						}
					}));
					return !1
				}, ke = (e, t, s, n, r) => async (a, d, {
					apiContext: c
				}) => {
					const i = d(),
						u = i.user.account && i.user.account.displayText;
					if (!u) return;
					a(Oe());
					const m = Object(P.f)({
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
						b = await F(c(), l);
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
						if (a(Object(x.b)(o)), t) {
							const o = {
									itemId: e,
									message: s,
									title: t.title,
									type: n
								},
								r = await U(c(), Object($.h)(o, $.e.Bulk), $.e.Bulk);
							r.ok ? (a(Re()), a(m)) : a(he(r.error))
						} else a(m)
					} else a(_e(b.error))
				}
		},
		"./src/reddit/helpers/makeModQueueListingKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				const {
					profile: t,
					subreddit: s
				} = e;
				let o = s && `r/${s}` || t && `u/${t}` || "all";
				return "comments" !== e.onlyOfType && "links" !== e.onlyOfType || (o += `--[${e.onlyOfType}]`), o
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
			const n = 50,
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
		},
		"./src/reddit/selectors/modQueue.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return i
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "f", (function() {
				return l
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "e", (function() {
				return p
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/constants/index.ts");
			var o = s("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				n = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/lib/initializeClient/installReducer.ts"),
				a = s("./src/reddit/reducers/features/comments/index.ts"),
				d = s("./src/reddit/reducers/pages/modHub/index.ts");
			Object(r.a)({
				features: {
					comments: a.a
				},
				pages: {
					modHub: d.a
				}
			});
			const c = (e, t) => Object(o.a)({
					onlyOfType: t.queryParams.only,
					profile: t.profileName,
					subreddit: t.subredditName
				}),
				i = Object(n.a)((e, t) => {
					var s, o, n;
					const {
						pageName: r,
						page: a
					} = t, d = c(0, t);
					if (!(null === (n = null === (o = null === (s = e.pages.modHub.modQueue[r]) || void 0 === s ? void 0 : s.itemOrder) || void 0 === o ? void 0 : o[d]) || void 0 === n ? void 0 : n[a])) return;
					const i = e.pages.modHub.modQueue[r].itemOrder[d][a];
					return i ? i.map(t => e.posts.models[t] || e.features.comments.models[t]) : []
				}),
				u = (e, t) => {
					var s;
					const {
						pageName: o
					} = t;
					return null === (s = e.pages.modHub.modQueue[o]) || void 0 === s || !s.api || e.pages.modHub.modQueue[o].api.pending
				},
				m = (e, t) => {
					var s;
					const o = c(0, t);
					return null === (s = e.pages.modHub.modQueue[t.pageName]) || void 0 === s ? void 0 : s.loadMore[o]
				},
				l = e => Object.keys(e.pages.modHub.modQueue.bulkAction.selectedItems),
				b = e => e.pages.modHub.modQueue.bulkAction.api.pending,
				p = e => e.pages.modHub.modQueue.moderatedCommunitiesOrder.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueue.a2cafe204c2e4410495b.js.map