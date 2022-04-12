// https://www.redditstatic.com/desktop2x/ModQueue.1df6869d4f358ca410e6.js
// Retrieved at 4/12/2022, 1:50:04 PM by Reddit Dataminer v1.0.0
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
				return R
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
				f = s("./src/reddit/selectors/commentSelector.ts"),
				O = s("./src/reddit/selectors/experiments/d2xGqlDistinguish.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/actions/comment/index.ts"),
				_ = s("./src/reddit/actions/comment/constants.ts");
			const v = Object(r.a)(_.n),
				R = e => async (t, s, o) => {
					let {
						apiContext: n
					} = o;
					s().features.comments.models[e] && (await Object(m.j)(n(), e)).ok && t((e => async t => {
						t(v({
							commentId: e
						}))
					})(e))
				}, S = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					if (!Object(j.Q)(s())) return void t(Object(d.i)(u.a.LOGIN_MODAL_ID));
					const a = s().features.comments.models[e];
					if (!a) return;
					const c = a.isLocked ? m.l : m.e;
					t(Object(h.i)({
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
					})) : t(Object(h.i)({
						[e]: {
							isLocked: a.isLocked
						}
					}))
				}, g = Object(r.a)(_.G), k = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					const a = s(),
						d = a.features.comments.models[e],
						u = a.user.account ? a.user.account.displayText : null;
					d && u && (t(Object(h.i)({
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
					})) : t(Object(h.i)({
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
					u && l && (s(Object(h.i)({
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
					})) : s(Object(h.i)({
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
					t(Object(h.i)({
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
					})) : t(Object(h.i)({
						[e]: {
							ignoreReports: a.ignoreReports
						}
					}))
				}, A = (e, t, s) => async (r, a, d) => {
					let {
						gqlContext: c
					} = d;
					const u = Object(f.b)(a(), {
						commentId: e
					});
					if (!u) return;
					const m = s === n.dc.Snoozed,
						O = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(l.a)(c(), {
							input: O
						})).ok) r(Object(h.i)({
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
						f = n.g[t];
					let j;
					if (o(Object(h.i)({
							[e]: {
								distinguishType: t,
								isAdmin: t === n.G.ADMIN,
								isMod: t === n.G.MODERATOR,
								isStickied: !!s
							}
						})), s && p && p !== e && o(Object(h.i)({
							[p]: {
								isStickied: !1
							}
						})), Object(O.a)(r())) {
						const o = Object(m.b)(i(), e, t),
							n = Object(m.c)(i(), e, !!s),
							r = [o];
						(s || !s && e === p) && r.push(n), j = {
							ok: (await Promise.all(r)).every(e => e.ok)
						}
					} else j = await Object(m.g)(c(), e, f, s || null);
					j.ok ? s && o(g({
						id: e,
						postId: b,
						commentsPageKey: Object(a.a)(b, null, {
							sort: n.u.CONFIDENCE,
							...u.platform.currentPage.queryParams
						})
					})) : (o(Object(h.i)({
						[e]: {
							distinguishType: l.distinguishType,
							isAdmin: l.isAdmin,
							isMod: l.isMod,
							isStickied: l.isStickied
						}
					})), o(Object(h.i)({
						[p]: {
							isStickied: u.features.comments.models[p].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/modQueue/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return W
			})), s.d(t, "d", (function() {
				return Z
			})), s.d(t, "f", (function() {
				return se
			})), s.d(t, "a", (function() {
				return oe
			})), s.d(t, "b", (function() {
				return ne
			})), s.d(t, "c", (function() {
				return re
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
				b = s("./node_modules/Base64/base64.js"),
				p = s("./src/reddit/helpers/isPost.ts"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				O = s("./src/reddit/selectors/posts.ts"),
				j = s("./src/redditGQL/types.ts"),
				h = s("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				_ = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				v = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const R = {
					[n.rb.Edited]: j.q.Edited,
					[n.rb.Modqueue]: j.q.Mod,
					[n.rb.Reports]: j.q.Reported,
					[n.rb.Spam]: j.q.Removed,
					[n.rb.Unmoderated]: j.q.Unmoderated
				},
				S = {
					comments: j.p.Comment,
					links: j.p.Post
				};

			function g(e) {
				let {
					getState: t,
					queueType: s,
					options: o
				} = e;
				const n = t();
				let r, a;
				return o.only && (r = S[o.only]), o.after && (a = function(e, t) {
					const s = Object(p.a)(t) ? Object(O.G)(e, {
						postId: t
					}) : Object(f.b)(e, {
						commentId: t
					});
					if (s) return Object(b.btoa)(`${s.id}|${s.created}`)
				}(n, o.after)), {
					queueType: R[s],
					...!!r && {
						itemTypes: r
					},
					...!!o.subreddit && {
						subredditIds: [o.subreddit]
					},
					...!!a && {
						after: a
					}
				}
			}
			var k;
			! function(e) {
				e.Comment = "ModQueueItemComment", e.Post = "ModQueueItemPost"
			}(k || (k = {}));
			var E = s("./src/reddit/models/ModQueue/index.ts"),
				y = s("./src/reddit/models/Toast/index.ts"),
				A = s("./src/reddit/selectors/modQueue.ts"),
				x = s("./src/reddit/selectors/subreddit.ts"),
				I = s("./src/reddit/selectors/telemetry.ts"),
				N = s("./src/telemetry/index.ts"),
				M = s("./src/lib/initializeClient/installReducer.ts"),
				P = s("./src/reddit/reducers/pages/modHub/index.ts"),
				C = s("./src/reddit/actions/modQueue/constants.ts");
			Object(M.a)({
				pages: {
					modHub: P.a
				}
			});
			const L = Object(r.a)(C.j),
				D = Object(r.a)(C.i),
				T = Object(r.a)(C.h),
				w = Object(r.a)(C.g),
				Q = Object(r.a)(C.f),
				F = Object(r.a)(C.e),
				q = Object(r.a)(C.n),
				B = Object(r.a)(C.m),
				U = Object(r.a)(C.l),
				H = Object(r.a)(C.q),
				V = Object(r.a)(C.p),
				G = Object(r.a)(C.o),
				K = Object(r.a)(C.w),
				$ = Object(r.a)(C.v),
				z = Object(r.a)(C.u),
				W = (e, t, s) => async (r, a, c) => {
					let {
						apiContext: m,
						gqlContext: l
					} = c;
					var b;
					let p, f, O;
					switch (t) {
						case n.rb.Edited:
							p = w, f = F, O = Q;
							break;
						case n.rb.Modqueue:
							p = L, f = T, O = D;
							break;
						case n.rb.Reports:
							p = q, f = U, O = B;
							break;
						case n.rb.Spam:
							p = H, f = G, O = V;
							break;
						case n.rb.Unmoderated:
							p = K, f = z, O = $;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					r(p());
					const j = await Object(u.c)(m(), t, {
						moderated_limit: 0
					});
					if (j.ok) {
						const o = j.body,
							n = {
								...s
							};
						if (n.subreddit) {
							const e = null === (b = Object.values(o.subreddits).find(e => {
								let {
									name: t
								} = e;
								return t === s.subreddit
							})) || void 0 === b ? void 0 : b.id;
							n.subreddit = e
						}
						const c = g({
								getState: a,
								queueType: t,
								options: n
							}),
							i = await Object(u.b)(l(), c);
						if (!i.ok) return;
						const m = function(e) {
								let {
									modQueueItems: t
								} = e;
								const s = {
									posts: {},
									comments: {},
									reports: {},
									modqueue: [],
									authorFlair: {}
								};
								return t && t.edges ? (t.edges.forEach(e => {
									var t, o;
									if (!e) return;
									const {
										node: n
									} = e;
									if (!n) return;
									const {
										__typename: r,
										subredditInfo: a
									} = n;
									if (!a) return;
									const {
										id: d
									} = a;
									if (r === k.Comment) {
										const {
											commentInfo: e
										} = n;
										if (!e) return;
										const o = Object(h.a)(e);
										s.comments[o.id] = o, s.modqueue.push(o.id);
										const {
											authorInfo: r,
											authorFlair: a
										} = e, c = a ? null === (t = Object(_.a)(a)) || void 0 === t ? void 0 : t[0] : null;
										s.authorFlair[d] = {
											...s.authorFlair[d],
											...(null == r ? void 0 : r.name) ? {
												[null == r ? void 0 : r.name]: c
											} : {}
										};
										const i = [];
										o.modReports.forEach(e => {
											i.push({
												type: "moderator",
												reason: e[0],
												reporter: e[1]
											})
										}), o.userReports.forEach(e => {
											i.push({
												type: "user",
												reason: e[0]
											})
										}), s.reports[o.id] = i
									}
									if (r === k.Post) {
										const {
											postInfo: e
										} = n;
										if (!e) return;
										const t = Object(v.f)(e);
										s.posts[t.id] = t, s.modqueue.push(t.id);
										const {
											authorInfo: r,
											authorFlair: a
										} = e, c = a ? null === (o = Object(_.a)(a)) || void 0 === o ? void 0 : o[0] : null;
										s.authorFlair[d] = {
											...s.authorFlair[d],
											...(null == r ? void 0 : r.name) ? {
												[null == r ? void 0 : r.name]: c
											} : {}
										};
										const i = [];
										t.modReports.forEach(e => {
											i.push({
												type: "moderator",
												reason: e[0],
												reporter: e[1]
											})
										}), t.userReports.forEach(e => {
											i.push({
												type: "user",
												reason: e[0]
											})
										}), s.reports[t.id] = i
									}
								}), s) : s
							}(i.body.data),
							p = {
								...j.body,
								...m
							};
						j.body = p, r(O({
							listingKey: e,
							page: `${s.page||E.b}`,
							response: o
						})), r(Object(d.a)({
							postIds: o.posts ? Object.keys(o.posts) : void 0,
							commentIds: o.comments ? Object.keys(o.comments) : void 0
						}))
					} else r(f(j.error)), r(Object(i.f)({
						kind: y.b.Error,
						text: o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, J = Object(r.a)(C.k), Y = Object(r.a)(C.b), Z = e => async (t, s, n) => {
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
						t(J(e)), e.moderatedAfter ? t(Z()) : t(Y())
					} else t(Object(i.f)({
						kind: y.b.Error,
						text: o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, X = Object(r.a)(C.t), ee = Object(r.a)(C.s), te = Object(r.a)(C.r), se = (e, t, s) => async (n, r, d) => {
					let {
						apiContext: b
					} = d;
					n(Object(a.c)());
					const f = r(),
						O = Object(A.f)(f),
						j = f.user.account && f.user.account.displayText;
					Object(m.e)(m.a.ModQueue);
					const h = Object(m.c)(m.a.ModQueue);
					Object(N.a)({
						source: "bulk_mod_action_menu",
						action: "click",
						noun: e,
						...I.n(f),
						actionInfo: I.d(f, {
							count: O.length,
							paneName: f.platform.currentPage ? f.platform.currentPage.urlParams.pageName : void 0
						}),
						screen: I.Y(f),
						correlationId: h
					});
					for (let t = 0; t < O.length; t++) {
						const s = O[t];
						let o = e;
						[E.a.Approve, E.a.Remove, E.a.Spam].includes(e) && (Object(p.a)(s) ? o += "_link" : o += "_comment"), Object(N.a)({
							source: "bulk_mod_action",
							action: "click",
							noun: o,
							...I.n(f),
							actionInfo: I.d(f, {
								count: O.length,
								paneName: f.platform.currentPage ? f.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: I.h(f, s),
							post: I.H(f, s),
							profile: I.S(f, s),
							screen: I.Y(f),
							subreddit: I.jb(f, s),
							correlationId: h
						})
					}
					Object(m.b)(m.a.ModQueue);
					const _ = {
						ids: O
					};
					t && (_.text = Object(l.g)(t) || "", _.flairTemplateId = ""), s && (_.cssClass = s, _.flairTemplateId = s);
					const v = await Object(u.a)(b(), e, _);
					if (v.ok) {
						n(Object(a.b)({
							...v.body,
							operation: e,
							ids: O,
							username: j,
							options: {
								flair: t
							}
						}));
						const s = function(e, t) {
							switch (e) {
								case E.a.Approve:
									return o.fbt._({
										"*": "{number} posts/comments have been approved",
										_1: "1 post/comment has been approved"
									}, [o.fbt._plural(t, "number")], {
										hk: "2kKhSf"
									});
								case E.a.Flair:
									return o.fbt._({
										"*": "{number} posts/comments have had flair applied",
										_1: "1 post/comment has had flair applied"
									}, [o.fbt._plural(t, "number")], {
										hk: "3syB5O"
									});
								case E.a.IgnoreReports:
									return o.fbt._({
										"*": "{number} posts/comments have had their reports ignored",
										_1: "1 post/comment has had their reports ignored"
									}, [o.fbt._plural(t, "number")], {
										hk: "2WfE4g"
									});
								case E.a.Lock:
									return o.fbt._({
										"*": "{number} posts/comments have been locked",
										_1: "1 post/comment has been locked"
									}, [o.fbt._plural(t, "number")], {
										hk: "45oMbv"
									});
								case E.a.MarkNSFW:
									return o.fbt._({
										"*": "{number} posts/comments have been marked NSFW",
										_1: "1 post/comment has been marked NSFW"
									}, [o.fbt._plural(t, "number")], {
										hk: "oPsQr"
									});
								case E.a.RemovalReason:
									return o.fbt._({
										"*": "{number} posts/comments have had removal reasons applied",
										_1: "1 post/comment has had removal reasons applied"
									}, [o.fbt._plural(t, "number")], {
										hk: "35Tosn"
									});
								case E.a.Remove:
									return o.fbt._({
										"*": "{number} posts/comments have been removed",
										_1: "1 post/comment has been removed"
									}, [o.fbt._plural(t, "number")], {
										hk: "B1ZbE"
									});
								case E.a.Spam:
									return o.fbt._({
										"*": "{number} posts/comments have been marked as spam",
										_1: "1 post/comment has been marked as spam"
									}, [o.fbt._plural(t, "number")], {
										hk: "3OoNfp"
									});
								case E.a.Spoiler:
									return o.fbt._({
										"*": "{number} posts/comments have been marked as spoilers",
										_1: "1 post/comment has been marked as spoilers"
									}, [o.fbt._plural(t, "number")], {
										hk: "1DFW5M"
									});
								case E.a.UnignoreReports:
									return o.fbt._({
										"*": "{number} posts/comments have had their reports un-ignored",
										_1: "1 post/comment has had their reports un-ignored"
									}, [o.fbt._plural(t, "number")], {
										hk: "303Hpb"
									});
								case E.a.Unlock:
									return o.fbt._({
										"*": "{number} posts/comments have been unlocked",
										_1: "1 post/comment has been unlocked"
									}, [o.fbt._plural(t, "number")], {
										hk: "5gUht"
									});
								case E.a.UnmarkNSFW:
									return o.fbt._({
										"*": "{number} posts/comments have been un-marked as NSFW",
										_1: "1 post/comment has been un-marked as NSFW"
									}, [o.fbt._plural(t, "number")], {
										hk: "3oSSST"
									});
								case E.a.Unspoiler:
								case E.a.Unspoiler:
									return o.fbt._({
										"*": "{number} posts/comments have been un-marked as spoilers",
										_1: "1 post/comment has been un-marked as spoilers"
									}, [o.fbt._plural(t, "number")], {
										hk: "3lHoNI"
									})
							}
						}(e, O.length);
						if (e !== E.a.Approve && e !== E.a.Flair) {
							let t, r;
							const d = f.platform.currentPage && f.platform.currentPage.queryParams && f.platform.currentPage.queryParams.subreddit,
								m = d && Object(x.D)(f, d);
							e === E.a.Remove && m && O.length > 1 && (t = o.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), r = Object(c.fetchReasonsAndOpenModal)(m, O));
							const l = Object(i.e)(s, y.b.Undo, o.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, s) => {
								let {
									apiContext: n
								} = s;
								e(X());
								const r = t(),
									d = Object.keys(r.pages.modHub.modQueue.bulkAction.undoLastAction)[0],
									c = r.pages.modHub.modQueue.bulkAction.undoLastAction[d],
									m = r.user.account && r.user.account.displayText;
								e(Object(a.c)());
								const l = await Object(u.a)(n(), d, {
									ids: c
								});
								l.ok ? e(ee({
									...l.body,
									operation: d,
									ids: c,
									username: m
								})) : (e(te(l.error)), e(Object(i.f)({
									kind: y.b.Error,
									text: o.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, r);
							n(Object(i.f)(l))
						} else {
							const e = Object(i.e)(s, y.b.SuccessMod);
							n(Object(i.f)(e))
						}
					} else {
						n(Object(a.a)(v.error));
						const e = Object(i.e)(o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), y.b.Error);
						n(Object(i.f)(e))
					}
				}, oe = Object(r.a)(C.a), ne = Object(r.a)(C.c), re = Object(r.a)(C.d)
		},
		"./src/reddit/actions/pages/modQueue/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "modQueuePageRequested", (function() {
				return f
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
			const f = e => async (t, s, o) => {
				var b;
				const {
					pageName: p
				} = e.params, f = e.queryParams, {
					page: O,
					profile: j,
					subreddit: h
				} = f, _ = s();
				if (!p) return;
				const v = Object(d.a)({
						onlyOfType: f.only,
						profile: f.profile,
						subreddit: f.subreddit
					}),
					R = _.pages.modHub.modQueue[p].itemOrder[v],
					S = !!(null === (b = null == R ? void 0 : R[O]) || void 0 === b ? void 0 : b.length),
					g = _.pages.modHub.modQueue[p].api.error;
				if (_.pages.modHub.modQueue[p].api.pending || S && !g) return;
				Object(l.p)(_) || await Object(u.e)(v, p, f)(t, s, o);
				const k = s();
				if (n()(k.pages.modHub.modQueue[p].api.error, "type") === r.I.AUTHENTICATION_ERROR) return Object(c.a)(t, k);
				Object(i.j)(k, h, j), t(m.m({
					title: Object(a.g)()
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
				return fe
			})), s.d(t, "removalReasonSubmittedPending", (function() {
				return Oe
			})), s.d(t, "removalReasonSubmittedSuccess", (function() {
				return je
			})), s.d(t, "removalReasonSubmittedFailed", (function() {
				return he
			})), s.d(t, "removalReasonMessagePending", (function() {
				return _e
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return ve
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return Re
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
				f = "REMOVALREASONS__DELETE_FAILED";
			var O = function() {
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
					case f:
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
						case f:
							return !1;
						default:
							return e
					}
				},
				h = Object(r.c)({
					error: O,
					pending: j
				});
			const _ = {};
			var v = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
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
			const R = {};
			var S = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R,
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
					api: h,
					models: v,
					reasonOrder: S,
					removedItemIds: g
				}),
				E = s("./src/lib/constants/index.ts"),
				y = s("./src/lib/makeActionCreator/index.ts"),
				A = s("./src/lib/makeCommentsPageKey/index.ts"),
				x = s("./src/lib/makeDraftKey/index.ts"),
				I = s("./src/reddit/actions/bulkActions/index.ts"),
				N = s("./src/reddit/actions/comment/index.ts"),
				M = s("./src/reddit/actions/comment/authoring.ts"),
				P = s("./src/reddit/actions/comment/moderation.ts"),
				C = s("./src/reddit/actions/modal.ts"),
				L = s("./src/reddit/actions/post.ts"),
				D = s("./src/reddit/actions/toaster.ts"),
				T = s("./src/reddit/constants/modals.ts"),
				w = s("./src/lib/makeApiRequest/index.ts"),
				Q = s("./src/lib/omitHeaders/index.ts"),
				F = s("./src/reddit/constants/headers.ts"),
				q = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const B = (e, t) => Object(w.a)(Object(Q.a)(e, [F.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: E.jb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				U = (e, t, s) => Object(w.a)(Object(Q.a)(e, [F.a]), {
					endpoint: Object(q.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`),
					method: E.jb.POST,
					type: "json",
					data: t
				});
			var H = s("./src/reddit/helpers/isPost.ts"),
				V = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				G = s("./src/reddit/helpers/routeKey/index.ts"),
				K = s("./src/reddit/models/ModQueue/index.ts"),
				$ = s("./src/reddit/models/PostDraft/index.ts"),
				z = s("./src/reddit/models/RemovalReason/index.ts"),
				W = s("./src/reddit/models/Toast/index.ts"),
				J = s("./src/reddit/selectors/comments.ts"),
				Y = s("./src/reddit/selectors/platform.ts");
			Object(n.a)({
				features: {
					removalReasons: k
				}
			});
			const Z = Object(y.a)("REMOVALREASONS__LOAD_PENDING"),
				X = Object(y.a)(a),
				ee = Object(y.a)("REMOVALREASONS__LOAD_FAILED"),
				te = e => async (t, s, o) => {
					let {
						apiContext: n
					} = o;
					const r = s().subreddits.models[e].name;
					t(Z());
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
				}, ue = Object(y.a)(b), me = Object(y.a)(p), le = Object(y.a)(f), be = (e, t) => async (s, n, r) => {
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
				}, pe = Object(y.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), fe = (e, t) => async (s, o, n) => {
					let {
						apiContext: r
					} = n;
					const a = o();
					a.features.removalReasons.reasonOrder[e] && a.features.removalReasons.reasonOrder[e].length > 0 || s(te(e)), s(pe({
						subredditId: e,
						itemIds: t
					})), s(Object(C.i)(T.a.ADD_REMOVAL_REASON))
				}, Oe = Object(y.a)("REMOVALREASONS__SUBMIT_PENDING"), je = Object(y.a)("REMOVALREASONS__SUBMIT_SUCCESS"), he = Object(y.a)("REMOVALREASONS__SUBMIT_FAILED"), _e = Object(y.a)("REMOVALREASONS__MESSAGE_PENDING"), ve = Object(y.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Re = Object(y.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Se = Object(y.a)("REMOVALREASONS__MESSAGE_FAILED"), ge = (e, t, s, o, n) => async (r, a, d) => {
					let {
						apiContext: c
					} = d;
					const i = a(),
						u = i.user.account && i.user.account.displayText,
						m = e[0],
						l = Object(H.a)(m) ? z.e.Post : z.e.Comment,
						b = l === z.e.Post ? i.posts.models[m] : i.features.comments.models[m],
						p = l === z.e.Post ? L.S : N.i;
					if (!b || !u) return !1;
					r(Oe()), r(p({
						[m]: {
							modNote: n,
							modRemovalReason: t && t.title,
							modReasonBy: u
						}
					}));
					const f = {
							itemIds: e,
							modNote: n,
							reasonId: t ? t.id : null
						},
						O = await B(c(), f);
					if (O.ok) {
						if (r(je()), t) {
							r(_e());
							const n = {
									itemId: e,
									message: s,
									title: t.title,
									type: o
								},
								a = await U(c(), Object(z.h)(n, l), l);
							if (a.ok) {
								if (o === z.f.Public) {
									if (r(Re()), a.body) {
										const e = Object(V.a)(a.body, u),
											t = {
												comment: e,
												parentId: m
											},
											s = Object(Y.f)(i),
											o = i.platform.currentPage && i.platform.currentPage.routeMatch;
										let n = s && o && Object(G.a)(o, i, i.posts.models[e.postId]);
										if (n || (n = Object(A.a)(e.postId, null, {
												sort: E.v,
												hasSortParam: !0
											})), l === z.e.Post) {
											const s = Object(x.a)($.c.replyToPost, m);
											r(Object(M.p)({
												...t,
												headCommentId: Object(J.w)(i, {
													commentsPageKey: n
												}),
												commentsPageKey: n,
												draftKey: s
											}));
											const o = i.postStickiedComments.data[m];
											r(Object(P.f)({
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
											r(Object(M.n)({
												...t,
												parentCommentId: m,
												commentsPageKey: n,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else r(ve());
								return !0
							}
							return r(Se(a.error)), !1
						}
					} else r(he(O.error)), r(p({
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
					a(Oe());
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
						p = await B(i(), b);
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
								r = await U(i(), Object(z.h)(o, z.e.Bulk), z.e.Bulk);
							r.ok ? (a(ve()), a(l)) : a(Se(r.error))
						} else a(l)
					} else a(he(p.error))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueue.1df6869d4f358ca410e6.js.map