// https://www.redditstatic.com/desktop2x/ModQueue.f08ece9b17d55b2e6ff1.js
// Retrieved at 4/6/2022, 6:40:04 PM by Reddit Dataminer v1.0.0
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
				return v
			})), s.d(t, "c", (function() {
				return S
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "a", (function() {
				return k
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "g", (function() {
				return y
			})), s.d(t, "h", (function() {
				return A
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
				j = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/actions/comment/index.ts"),
				R = s("./src/reddit/actions/comment/constants.ts");
			const h = Object(r.a)(R.n),
				v = e => async (t, s, o) => {
					let {
						apiContext: n
					} = o;
					s().features.comments.models[e] && (await Object(m.j)(n(), e)).ok && t((e => async t => {
						t(h({
							commentId: e
						}))
					})(e))
				}, S = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					if (!Object(j.P)(s())) return void t(Object(d.i)(u.a.LOGIN_MODAL_ID));
					const a = s().features.comments.models[e];
					if (!a) return;
					const c = a.isLocked ? m.l : m.e;
					t(Object(_.i)({
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
					})) : t(Object(_.i)({
						[e]: {
							isLocked: a.isLocked
						}
					}))
				}, g = Object(r.a)(R.G), k = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					const a = s(),
						d = a.features.comments.models[e],
						u = a.user.account ? a.user.account.displayText : null;
					d && u && (t(Object(_.i)({
						[e]: {
							isApproved: !0,
							approvedBy: u,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(m.a)(r(), e)).ok ? t(Object(i.f)({
						kind: p.b.SuccessMod,
						text: o.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(_.i)({
						[e]: {
							isApproved: d.isApproved,
							approvedBy: null,
							bannedBy: d.bannedBy,
							isRemoved: d.isRemoved,
							isSpam: d.isSpam,
							modNote: d.modNote,
							modReasonBy: d.modReasonBy,
							modRemovalReason: d.modRemovalReason,
							numReports: d.numReports || null
						}
					})), Object(c.d)())
				}, E = (e, t) => async (s, n, r) => {
					let {
						apiContext: a
					} = r;
					const d = n(),
						u = d.features.comments.models[e],
						l = d.user.account ? d.user.account.displayText : null;
					u && l && (s(Object(_.i)({
						[e]: {
							approvedBy: null,
							bannedBy: l,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.h)(a(), e, t)).ok ? s(Object(i.f)({
						kind: p.b.SuccessMod,
						text: t ? o.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : o.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : s(Object(_.i)({
						[e]: {
							approvedBy: u.approvedBy,
							bannedBy: u.bannedBy,
							isApproved: u.isApproved,
							isRemoved: u.isRemoved,
							isSpam: u.isSpam
						}
					})), Object(c.d)())
				}, y = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					const a = s().features.comments.models[e];
					if (!a) return;
					const d = a.ignoreReports ? m.k : m.d;
					t(Object(_.i)({
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
					})) : t(Object(_.i)({
						[e]: {
							ignoreReports: a.ignoreReports
						}
					}))
				}, A = (e, t, s) => async (r, a, d) => {
					let {
						gqlContext: c
					} = d;
					const u = Object(O.b)(a(), {
						commentId: e
					});
					if (!u) return;
					const m = s === n.dc.Snoozed,
						f = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(l.a)(c(), {
							input: f
						})).ok) r(Object(_.i)({
						[e]: {
							userReports: Object(b.a)(u.userReports, t, m)
						}
					}));
					else {
						const e = Object(i.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), p.b.Error);
						r(Object(i.f)(e))
					}
				}, x = (e, t, s) => async (o, r, d) => {
					let {
						apiContext: c,
						gqlContext: i
					} = d;
					const u = r(),
						l = u.features.comments.models[e];
					if (!l) return;
					const b = l.postId,
						p = u.postStickiedComments.data[b],
						O = n.g[t];
					let j;
					if (o(Object(_.i)({
							[e]: {
								distinguishType: t,
								isAdmin: t === n.G.ADMIN,
								isMod: t === n.G.MODERATOR,
								isStickied: !!s
							}
						})), s && p && p !== e && o(Object(_.i)({
							[p]: {
								isStickied: !1
							}
						})), Object(f.a)(r())) {
						const o = Object(m.b)(i(), e, t),
							n = Object(m.c)(i(), e, !!s),
							r = [o];
						(s || !s && e === p) && r.push(n), j = {
							ok: (await Promise.all(r)).every(e => e.ok)
						}
					} else j = await Object(m.g)(c(), e, O, s || null);
					j.ok ? s && o(g({
						id: e,
						postId: b,
						commentsPageKey: Object(a.a)(b, null, {
							sort: n.u.CONFIDENCE,
							...u.platform.currentPage.queryParams
						})
					})) : (o(Object(_.i)({
						[e]: {
							distinguishType: l.distinguishType,
							isAdmin: l.isAdmin,
							isMod: l.isMod,
							isStickied: l.isStickied
						}
					})), o(Object(_.i)({
						[p]: {
							isStickied: u.features.comments.models[p].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/modQueue/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return B
			})), s.d(t, "d", (function() {
				return U
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
				j = s("./src/reddit/helpers/chooseVariant/index.ts");
			var _ = s("./src/reddit/selectors/modQueue.ts"),
				R = s("./src/reddit/selectors/subreddit.ts"),
				h = s("./src/reddit/selectors/telemetry.ts"),
				v = s("./src/telemetry/index.ts"),
				S = s("./src/lib/initializeClient/installReducer.ts"),
				g = s("./src/reddit/reducers/pages/modHub/index.ts"),
				k = s("./src/reddit/actions/modQueue/constants.ts");
			Object(S.a)({
				pages: {
					modHub: g.a
				}
			});
			const E = Object(r.a)(k.j),
				y = Object(r.a)(k.i),
				A = Object(r.a)(k.h),
				x = Object(r.a)(k.g),
				I = Object(r.a)(k.f),
				N = Object(r.a)(k.e),
				L = Object(r.a)(k.n),
				M = Object(r.a)(k.m),
				P = Object(r.a)(k.l),
				C = Object(r.a)(k.q),
				D = Object(r.a)(k.p),
				T = Object(r.a)(k.o),
				w = Object(r.a)(k.w),
				Q = Object(r.a)(k.v),
				F = Object(r.a)(k.u),
				B = (e, t, r) => async (a, c, m) => {
					let {
						apiContext: l,
						gqlContext: b
					} = m;
					var _;
					let R, h, v;
					switch (t) {
						case n.rb.Edited:
							R = x, h = N, v = I;
							break;
						case n.rb.Modqueue:
							R = E, h = A, v = y;
							break;
						case n.rb.Reports:
							R = L, h = P, v = M;
							break;
						case n.rb.Spam:
							R = C, h = T, v = D;
							break;
						case n.rb.Unmoderated:
							R = w, h = F, v = Q;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					a(R());
					const S = await Object(u.c)(l(), t, r);
					if (S.ok) {
						if (function(e) {
								return Object(j.c)(e, {
									experimentEligibilitySelector: j.a,
									experimentName: f.td
								}) === f.gd
							}(c())) {
							const {
								normalizeModQueueListingFromGql: e,
								transformGatewayParamsToGQLVariables: o
							} = await s.e(10).then(s.bind(null, "./src/reddit/helpers/graphql/normalizeModQueueListingFromGql/index.ts")), {
								diffAndLog: n
							} = await s.e(8).then(s.bind(null, "./src/reddit/helpers/graphql/normalizeModQueueListingFromGql/diffAndLog.ts")), a = S.body, d = {
								...r
							};
							if (d.subreddit) {
								const e = null === (_ = Object.values(a.subreddits).find(e => {
									let {
										name: t
									} = e;
									return t === r.subreddit
								})) || void 0 === _ ? void 0 : _.id;
								d.subreddit = e
							}
							const i = o({
									getState: c,
									queueType: t,
									options: d
								}),
								m = await Object(u.b)(b(), i);
							if (!m.ok) return;
							const l = e(m.body.data),
								p = {
									posts: a.posts,
									comments: a.comments,
									modqueue: a.modqueue,
									reports: a.reports,
									authorFlair: a.authorFlair
								},
								O = {
									...S.body,
									...l
								};
							S.body = O, n({
								normalizedGqlResponse: l,
								gatewayResponse: p,
								rawGqlResponse: m.body.data
							})
						}
						const o = S.body;
						a(v({
							listingKey: e,
							page: `${r.page||p.b}`,
							response: o
						})), a(Object(d.a)({
							postIds: o.posts ? Object.keys(o.posts) : void 0,
							commentIds: o.comments ? Object.keys(o.comments) : void 0
						}))
					} else a(h(S.error)), a(Object(i.f)({
						kind: O.b.Error,
						text: o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, V = Object(r.a)(k.k), H = Object(r.a)(k.b), U = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					const a = s(),
						d = a.pages.modHub.modQueue.moderatedCommunitiesOrder.after,
						c = a.pages.modHub.modQueue.moderatedCommunitiesOrder.pending,
						m = a.pages.modHub.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: l
						} = a.platform.currentPage.urlParams,
						b = l;
					if (e && c || m || !d) return;
					const p = await Object(u.c)(r(), b, {
						moderated_after: d
					});
					if (p.ok) {
						const e = p.body;
						t(V(e)), e.moderatedAfter ? t(U()) : t(H())
					} else t(Object(i.f)({
						kind: O.b.Error,
						text: o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, q = Object(r.a)(k.t), G = Object(r.a)(k.s), K = Object(r.a)(k.r), $ = (e, t, s) => async (n, r, d) => {
					let {
						apiContext: f
					} = d;
					n(Object(a.c)());
					const j = r(),
						S = Object(_.f)(j),
						g = j.user.account && j.user.account.displayText;
					Object(m.e)(m.a.ModQueue);
					const k = Object(m.c)(m.a.ModQueue);
					Object(v.a)({
						source: "bulk_mod_action_menu",
						action: "click",
						noun: e,
						...h.o(j),
						actionInfo: h.d(j, {
							count: S.length,
							paneName: j.platform.currentPage ? j.platform.currentPage.urlParams.pageName : void 0
						}),
						screen: h.Z(j),
						correlationId: k
					});
					for (let t = 0; t < S.length; t++) {
						const s = S[t];
						let o = e;
						[p.a.Approve, p.a.Remove, p.a.Spam].includes(e) && (Object(b.a)(s) ? o += "_link" : o += "_comment"), Object(v.a)({
							source: "bulk_mod_action",
							action: "click",
							noun: o,
							...h.o(j),
							actionInfo: h.d(j, {
								count: S.length,
								paneName: j.platform.currentPage ? j.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: h.i(j, s),
							post: h.I(j, s),
							profile: h.T(j, s),
							screen: h.Z(j),
							subreddit: h.kb(j, s),
							correlationId: k
						})
					}
					Object(m.b)(m.a.ModQueue);
					const E = {
						ids: S
					};
					t && (E.text = Object(l.g)(t) || "", E.flairTemplateId = ""), s && (E.cssClass = s, E.flairTemplateId = s);
					const y = await Object(u.a)(f(), e, E);
					if (y.ok) {
						n(Object(a.b)({
							...y.body,
							operation: e,
							ids: S,
							username: g,
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
						}(e, S.length);
						if (e !== p.a.Approve && e !== p.a.Flair) {
							let t, r;
							const d = j.platform.currentPage && j.platform.currentPage.queryParams && j.platform.currentPage.queryParams.subreddit,
								m = d && Object(R.D)(j, d);
							e === p.a.Remove && m && S.length > 1 && (t = o.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), r = Object(c.fetchReasonsAndOpenModal)(m, S));
							const l = Object(i.e)(s, O.b.Undo, o.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, s) => {
								let {
									apiContext: n
								} = s;
								e(q());
								const r = t(),
									d = Object.keys(r.pages.modHub.modQueue.bulkAction.undoLastAction)[0],
									c = r.pages.modHub.modQueue.bulkAction.undoLastAction[d],
									m = r.user.account && r.user.account.displayText;
								e(Object(a.c)());
								const l = await Object(u.a)(n(), d, {
									ids: c
								});
								l.ok ? e(G({
									...l.body,
									operation: d,
									ids: c,
									username: m
								})) : (e(K(l.error)), e(Object(i.f)({
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
						n(Object(a.a)(y.error));
						const e = Object(i.e)(o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), O.b.Error);
						n(Object(i.f)(e))
					}
				}, z = Object(r.a)(k.a), W = Object(r.a)(k.c), J = Object(r.a)(k.d)
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
					profile: j,
					subreddit: _
				} = O, R = s();
				if (!p) return;
				const h = Object(d.a)({
						onlyOfType: O.only,
						profile: O.profile,
						subreddit: O.subreddit
					}),
					v = R.pages.modHub.modQueue[p].itemOrder[h],
					S = !!(null === (b = null == v ? void 0 : v[f]) || void 0 === b ? void 0 : b.length),
					g = R.pages.modHub.modQueue[p].api.error;
				if (R.pages.modHub.modQueue[p].api.pending || S && !g) return;
				Object(l.p)(R) || await Object(u.e)(h, p, O)(t, s, o);
				const k = s();
				if (n()(k.pages.modHub.modQueue[p].api.error, "type") === r.I.AUTHENTICATION_ERROR) return Object(c.a)(t, k);
				Object(i.j)(k, _, j), t(m.m({
					title: Object(a.g)()
				}))
			}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "removalReasonsPending", (function() {
				return Y
			})), s.d(t, "removalReasonsLoaded", (function() {
				return X
			})), s.d(t, "removalReasonsFailed", (function() {
				return ee
			})), s.d(t, "removalReasonsRequested", (function() {
				return te
			})), s.d(t, "removalReasonAddedPending", (function() {
				return se
			})), s.d(t, "removalReasonAddedSuccess", (function() {
				return oe
			})), s.d(t, "removalReasonAddedFailed", (function() {
				return ne
			})), s.d(t, "addRemovalReason", (function() {
				return re
			})), s.d(t, "editRemovalReasonPending", (function() {
				return ae
			})), s.d(t, "editRemovalReasonSuccess", (function() {
				return de
			})), s.d(t, "editRemovalReasonFailed", (function() {
				return ce
			})), s.d(t, "editRemovalReason", (function() {
				return ie
			})), s.d(t, "deleteRemovalReasonPending", (function() {
				return ue
			})), s.d(t, "deleteRemovalReasonSuccess", (function() {
				return me
			})), s.d(t, "deleteRemovalReasonFailed", (function() {
				return le
			})), s.d(t, "deleteRemovalReason", (function() {
				return be
			})), s.d(t, "removedItemsSelected", (function() {
				return pe
			})), s.d(t, "fetchReasonsAndOpenModal", (function() {
				return Oe
			})), s.d(t, "removalReasonSubmittedPending", (function() {
				return fe
			})), s.d(t, "removalReasonSubmittedSuccess", (function() {
				return je
			})), s.d(t, "removalReasonSubmittedFailed", (function() {
				return _e
			})), s.d(t, "removalReasonMessagePending", (function() {
				return Re
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return he
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return ve
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return Se
			})), s.d(t, "submitRemovalReason", (function() {
				return ge
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return ke
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./node_modules/redux/es/redux.js");
			const a = "REMOVALREASONS__LOAD_SUCCESS",
				d = "REMOVALREASONS__ADD_PENDING",
				c = "REMOVALREASONS__ADD_SUCCESS",
				i = "REMOVALREASONS__ADD_FAILED",
				u = "REMOVALREASONS__EDIT_PENDING",
				m = "REMOVALREASONS__EDIT_SUCCESS",
				l = "REMOVALREASONS__EDIT_FAILED",
				b = "REMOVALREASONS__DELETE_PENDING",
				p = "REMOVALREASONS__DELETE_SUCCESS",
				O = "REMOVALREASONS__DELETE_FAILED";
			var f = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case a:
					case d:
					case c:
					case u:
					case m:
					case b:
					case p:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case i:
					case l:
					case O:
						return t.payload;
					default:
						return e
				}
			};
			var j = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case d:
						case u:
						case b:
							return !0;
						case a:
						case "REMOVALREASONS__LOAD_FAILED":
						case c:
						case i:
						case m:
						case l:
						case p:
						case O:
							return !1;
						default:
							return e
					}
				},
				_ = Object(r.c)({
					error: f,
					pending: j
				});
			const R = {};
			var h = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R,
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
					case m: {
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
			const v = {};
			var S = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
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
			var g = function() {
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
				k = Object(r.c)({
					api: _,
					models: h,
					reasonOrder: S,
					removedItemIds: g
				}),
				E = s("./src/lib/constants/index.ts"),
				y = s("./src/lib/makeActionCreator/index.ts"),
				A = s("./src/lib/makeCommentsPageKey/index.ts"),
				x = s("./src/lib/makeDraftKey/index.ts"),
				I = s("./src/reddit/actions/bulkActions/index.ts"),
				N = s("./src/reddit/actions/comment/index.ts"),
				L = s("./src/reddit/actions/comment/authoring.ts"),
				M = s("./src/reddit/actions/comment/moderation.ts"),
				P = s("./src/reddit/actions/modal.ts"),
				C = s("./src/reddit/actions/post.ts"),
				D = s("./src/reddit/actions/toaster.ts"),
				T = s("./src/reddit/constants/modals.ts"),
				w = s("./src/lib/makeApiRequest/index.ts"),
				Q = s("./src/lib/omitHeaders/index.ts"),
				F = s("./src/reddit/constants/headers.ts"),
				B = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const V = (e, t) => Object(w.a)(Object(Q.a)(e, [F.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: E.jb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				H = (e, t, s) => Object(w.a)(Object(Q.a)(e, [F.a]), {
					endpoint: Object(B.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`),
					method: E.jb.POST,
					type: "json",
					data: t
				});
			var U = s("./src/reddit/helpers/isPost.ts"),
				q = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				G = s("./src/reddit/helpers/routeKey/index.ts"),
				K = s("./src/reddit/models/ModQueue/index.ts"),
				$ = s("./src/reddit/models/PostDraft/index.ts"),
				z = s("./src/reddit/models/RemovalReason/index.ts"),
				W = s("./src/reddit/models/Toast/index.ts"),
				J = s("./src/reddit/selectors/comments.ts"),
				Z = s("./src/reddit/selectors/platform.ts");
			Object(n.a)({
				features: {
					removalReasons: k
				}
			});
			const Y = Object(y.a)("REMOVALREASONS__LOAD_PENDING"),
				X = Object(y.a)(a),
				ee = Object(y.a)("REMOVALREASONS__LOAD_FAILED"),
				te = e => async (t, s, o) => {
					let {
						apiContext: n
					} = o;
					const r = s().subreddits.models[e].name;
					t(Y());
					const a = await ((e, t) => Object(w.a)(Object(Q.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: E.jb.GET
					}))(n(), r);
					a.ok ? t(X({
						subredditId: e,
						response: a.body
					})) : t(ee(a.error))
				}, se = Object(y.a)(d), oe = Object(y.a)(c), ne = Object(y.a)(i), re = (e, t) => async (s, n, r) => {
					let {
						apiContext: a
					} = r;
					const d = n().subreddits.models[e].name;
					s(se());
					const c = await ((e, t, s) => Object(w.a)(Object(Q.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: E.jb.POST,
						data: s
					}))(a(), d, t);
					if (c.ok) {
						const {
							id: n
						} = c.body, r = {
							...t,
							id: n
						};
						s(oe({
							subredditId: e,
							reason: r
						})), s(Object(D.f)({
							kind: W.b.SuccessMod,
							text: o.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(ne(c.error))
				}, ae = Object(y.a)(u), de = Object(y.a)(m), ce = Object(y.a)(l), ie = (e, t) => async (s, n, r) => {
					let {
						apiContext: a
					} = r;
					const d = n().subreddits.models[e].name;
					s(ae());
					const c = await ((e, t, s) => Object(w.a)(Object(Q.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`,
						method: E.jb.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(a(), d, t);
					c.ok ? (s(de({
						subredditId: e,
						reason: t
					})), s(Object(D.f)({
						kind: W.b.SuccessMod,
						text: o.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(ce(c.error))
				}, ue = Object(y.a)(b), me = Object(y.a)(p), le = Object(y.a)(O), be = (e, t) => async (s, n, r) => {
					let {
						apiContext: a
					} = r;
					const d = n().subreddits.models[e].name;
					s(ue());
					const c = await ((e, t, s) => Object(w.a)(Object(Q.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`,
						method: E.jb.DELETE
					}))(a(), d, t);
					c.ok ? (s(me({
						subredditId: e,
						reasonId: t
					})), s(Object(D.f)({
						kind: W.b.SuccessMod,
						text: o.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(le(c.error))
				}, pe = Object(y.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), Oe = (e, t) => async (s, o, n) => {
					let {
						apiContext: r
					} = n;
					const a = o();
					a.features.removalReasons.reasonOrder[e] && a.features.removalReasons.reasonOrder[e].length > 0 || s(te(e)), s(pe({
						subredditId: e,
						itemIds: t
					})), s(Object(P.i)(T.a.ADD_REMOVAL_REASON))
				}, fe = Object(y.a)("REMOVALREASONS__SUBMIT_PENDING"), je = Object(y.a)("REMOVALREASONS__SUBMIT_SUCCESS"), _e = Object(y.a)("REMOVALREASONS__SUBMIT_FAILED"), Re = Object(y.a)("REMOVALREASONS__MESSAGE_PENDING"), he = Object(y.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), ve = Object(y.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Se = Object(y.a)("REMOVALREASONS__MESSAGE_FAILED"), ge = (e, t, s, o, n) => async (r, a, d) => {
					let {
						apiContext: c
					} = d;
					const i = a(),
						u = i.user.account && i.user.account.displayText,
						m = e[0],
						l = Object(U.a)(m) ? z.e.Post : z.e.Comment,
						b = l === z.e.Post ? i.posts.models[m] : i.features.comments.models[m],
						p = l === z.e.Post ? C.S : N.i;
					if (!b || !u) return !1;
					r(fe()), r(p({
						[m]: {
							modNote: n,
							modRemovalReason: t && t.title,
							modReasonBy: u
						}
					}));
					const O = {
							itemIds: e,
							modNote: n,
							reasonId: t ? t.id : null
						},
						f = await V(c(), O);
					if (f.ok) {
						if (r(je()), t) {
							r(Re());
							const n = {
									itemId: e,
									message: s,
									title: t.title,
									type: o
								},
								a = await H(c(), Object(z.h)(n, l), l);
							if (a.ok) {
								if (o === z.f.Public) {
									if (r(ve()), a.body) {
										const e = Object(q.a)(a.body, u),
											t = {
												comment: e,
												parentId: m
											},
											s = Object(Z.f)(i),
											o = i.platform.currentPage && i.platform.currentPage.routeMatch;
										let n = s && o && Object(G.a)(o, i, i.posts.models[e.postId]);
										if (n || (n = Object(A.a)(e.postId, null, {
												sort: E.v,
												hasSortParam: !0
											})), l === z.e.Post) {
											const s = Object(x.a)($.c.replyToPost, m);
											r(Object(L.p)({
												...t,
												headCommentId: Object(J.w)(i, {
													commentsPageKey: n
												}),
												commentsPageKey: n,
												draftKey: s
											}));
											const o = i.postStickiedComments.data[m];
											r(Object(M.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: n
											})), o && o !== e.id && r(Object(N.i)({
												[o]: {
													isStickied: !1
												}
											}))
										} else if (l === z.e.Comment) {
											const e = Object(x.a)($.c.replyToComment, b.id),
												s = Object(J.j)(i, {
													commentId: m,
													commentsPageKey: n
												});
											r(Object(L.n)({
												...t,
												parentCommentId: m,
												commentsPageKey: n,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else r(he());
								return !0
							}
							return r(Se(a.error)), !1
						}
					} else r(_e(f.error)), r(p({
						[m]: {
							modNote: b.modNote,
							modRemovalReason: b.modRemovalReason,
							modReasonBy: b.modReasonBy
						}
					}));
					return !1
				}, ke = (e, t, s, n, r) => async (a, d, c) => {
					let {
						apiContext: i
					} = c;
					const u = d(),
						m = u.user.account && u.user.account.displayText;
					if (!m) return;
					a(fe());
					const l = Object(D.f)({
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
							modNote: r,
							reasonId: t ? t.id : null
						},
						p = await V(i(), b);
					if (p.ok) {
						const o = {
							ids: e,
							operation: K.a.RemovalReason,
							username: m,
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
								r = await H(i(), Object(z.h)(o, z.e.Bulk), z.e.Bulk);
							r.ok ? (a(he()), a(l)) : a(Se(r.error))
						} else a(l)
					} else a(_e(p.error))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueue.f08ece9b17d55b2e6ff1.js.map