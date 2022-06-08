// https://www.redditstatic.com/desktop2x/ModQueue.7d42c064e6a3b75882c0.js
// Retrieved at 6/8/2022, 11:40:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueue"], {
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/bulkActions/constants.ts");
			const n = Object(o.a)(r.c),
				a = Object(o.a)(r.b),
				d = Object(o.a)(r.a)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return v
			})), s.d(t, "c", (function() {
				return R
			})), s.d(t, "f", (function() {
				return S
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "e", (function() {
				return k
			})), s.d(t, "g", (function() {
				return E
			})), s.d(t, "h", (function() {
				return y
			})), s.d(t, "b", (function() {
				return A
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
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
				O = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/actions/comment/index.ts"),
				_ = s("./src/reddit/actions/comment/constants.ts");
			const h = Object(n.a)(_.o),
				v = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					s().features.comments.models[e] && (await Object(m.i)(r(), e)).ok && t((e => async t => {
						t(h({
							commentId: e
						}))
					})(e))
				}, R = e => async (t, s, r) => {
					let {
						apiContext: n
					} = r;
					if (!Object(O.Q)(s())) return void t(Object(d.i)(u.a.LOGIN_MODAL_ID));
					const a = s().features.comments.models[e];
					if (!a) return;
					const c = a.isLocked ? m.k : m.e;
					t(Object(j.i)({
						[e]: {
							isLocked: !a.isLocked
						}
					})), (await c(n(), e)).ok ? t(Object(i.f)({
						kind: p.b.SuccessMod,
						text: a.isLocked ? o.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : o.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(j.i)({
						[e]: {
							isLocked: a.isLocked
						}
					}))
				}, S = Object(n.a)(_.H), g = e => async (t, s, r) => {
					let {
						apiContext: n
					} = r;
					const a = s(),
						d = a.features.comments.models[e],
						u = a.user.account ? a.user.account.displayText : null;
					d && u && (t(Object(j.i)({
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
					})), (await Object(m.a)(n(), e)).ok ? t(Object(i.f)({
						kind: p.b.SuccessMod,
						text: o.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(j.i)({
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
				}, k = (e, t) => async (s, r, n) => {
					let {
						apiContext: a
					} = n;
					const d = r(),
						u = d.features.comments.models[e],
						l = d.user.account ? d.user.account.displayText : null;
					u && l && (s(Object(j.i)({
						[e]: {
							approvedBy: null,
							bannedBy: l,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.g)(a(), e, t)).ok ? s(Object(i.f)({
						kind: p.b.SuccessMod,
						text: t ? o.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : o.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : s(Object(j.i)({
						[e]: {
							approvedBy: u.approvedBy,
							bannedBy: u.bannedBy,
							isApproved: u.isApproved,
							isRemoved: u.isRemoved,
							isSpam: u.isSpam
						}
					})), Object(c.d)())
				}, E = e => async (t, s, r) => {
					let {
						apiContext: n
					} = r;
					const a = s().features.comments.models[e];
					if (!a) return;
					const d = a.ignoreReports ? m.j : m.d;
					t(Object(j.i)({
						[e]: {
							ignoreReports: !a.ignoreReports
						}
					})), (await d(n(), e)).ok ? t(Object(i.f)({
						kind: p.b.SuccessMod,
						text: a.ignoreReports ? o.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : o.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(j.i)({
						[e]: {
							ignoreReports: a.ignoreReports
						}
					}))
				}, y = (e, t, s) => async (n, a, d) => {
					let {
						gqlContext: c
					} = d;
					const u = Object(f.b)(a(), {
						commentId: e
					});
					if (!u) return;
					const m = s === r.ec.Snoozed,
						O = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(l.a)(c(), {
							input: O
						})).ok) n(Object(j.i)({
						[e]: {
							userReports: Object(b.a)(u.userReports, t, m)
						}
					}));
					else {
						const e = Object(i.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), p.b.Error);
						n(Object(i.f)(e))
					}
				}, A = (e, t, s) => async (o, n, d) => {
					let {
						apiContext: c,
						gqlContext: i
					} = d;
					const u = n(),
						l = u.features.comments.models[e];
					if (!l) return;
					const b = l.postId,
						p = u.postStickiedComments.data[b];
					o(Object(j.i)({
						[e]: {
							distinguishType: t,
							isAdmin: t === r.G.ADMIN,
							isMod: t === r.G.MODERATOR,
							isStickied: !!s
						}
					})), s && p && p !== e && o(Object(j.i)({
						[p]: {
							isStickied: !1
						}
					}));
					const f = Object(m.b)(i(), e, t),
						O = Object(m.c)(i(), e, !!s),
						_ = [f];
					(s || !s && e === p) && _.push(O), (await Promise.all(_)).every(e => e.ok) ? s && o(S({
						id: e,
						postId: b,
						commentsPageKey: Object(a.a)(b, null, {
							sort: r.t.CONFIDENCE,
							...u.platform.currentPage.queryParams
						})
					})) : (o(Object(j.i)({
						[e]: {
							distinguishType: l.distinguishType,
							isAdmin: l.isAdmin,
							isMod: l.isMod,
							isStickied: l.isStickied
						}
					})), o(Object(j.i)({
						[p]: {
							isStickied: u.features.comments.models[p].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/modQueue/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return Y
			})), s.d(t, "d", (function() {
				return ee
			})), s.d(t, "f", (function() {
				return re
			})), s.d(t, "a", (function() {
				return ne
			})), s.d(t, "b", (function() {
				return ae
			})), s.d(t, "c", (function() {
				return de
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/bulkActions/index.ts"),
				d = s("./src/reddit/actions/modQueueTriggers/index.ts"),
				c = s("./src/reddit/actions/removalReasons/index.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/reddit/endpoints/modQueue/index.ts"),
				m = s("./src/reddit/endpoints/user/index.ts"),
				l = s("./src/reddit/helpers/correlationIdTracker.ts"),
				b = s("./src/reddit/helpers/flair.ts"),
				p = s("./node_modules/Base64/base64.js"),
				f = s("./src/reddit/components/ModQueueList/PostSortDropdown.tsx"),
				O = s("./src/reddit/helpers/isPost.ts"),
				j = s("./src/reddit/selectors/commentSelector.ts"),
				_ = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/redditGQL/types.ts"),
				v = s("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				R = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				S = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const g = {
					[r.rb.Edited]: h.q.Edited,
					[r.rb.Modqueue]: h.q.Mod,
					[r.rb.Reports]: h.q.Reported,
					[r.rb.Spam]: h.q.Removed,
					[r.rb.Unmoderated]: h.q.Unmoderated
				},
				k = {
					comments: h.p.Comment,
					links: h.p.Post
				};

			function E(e) {
				let {
					getState: t,
					queueType: s,
					options: o
				} = e;
				const r = t();
				let n;
				o.only && (n = k[o.only]);
				const a = {};
				o.after && (a[o.sort === f.a.OldestFirst ? "before" : "after"] = function(e, t) {
					const s = Object(O.a)(t) ? Object(_.G)(e, {
						postId: t
					}) : Object(j.b)(e, {
						commentId: t
					});
					if (s) return Object(p.btoa)(`${s.id}|${s.created}`)
				}(r, o.after));
				const d = {};
				return o.sort === f.a.OldestFirst ? d.last = 25 : d.first = 25, {
					queueType: g[s],
					...d,
					...!!n && {
						itemTypes: n
					},
					...!!o.subreddit && {
						subredditIds: [o.subreddit]
					},
					...!!o.profile && {
						subredditIds: [o.profile]
					},
					...a
				}
			}
			var y;
			! function(e) {
				e.Comment = "ModQueueItemComment", e.Post = "ModQueueItemPost"
			}(y || (y = {}));
			var A = s("./src/reddit/models/ModQueue/index.ts"),
				x = s("./src/reddit/models/Toast/index.ts"),
				I = s("./src/reddit/selectors/modQueue.ts"),
				P = s("./src/reddit/selectors/subreddit.ts"),
				N = s("./src/reddit/selectors/telemetry.ts"),
				M = s("./src/telemetry/index.ts"),
				C = s("./src/lib/initializeClient/installReducer.ts"),
				L = s("./src/reddit/reducers/pages/modHub/index.ts"),
				D = s("./src/reddit/actions/modQueue/constants.ts");
			Object(C.a)({
				pages: {
					modHub: L.a
				}
			});
			const w = Object(n.a)(D.j),
				T = Object(n.a)(D.i),
				Q = Object(n.a)(D.h),
				F = Object(n.a)(D.g),
				q = Object(n.a)(D.f),
				B = Object(n.a)(D.e),
				U = Object(n.a)(D.n),
				H = Object(n.a)(D.m),
				V = Object(n.a)(D.l),
				G = Object(n.a)(D.q),
				$ = Object(n.a)(D.p),
				K = Object(n.a)(D.o),
				z = Object(n.a)(D.w),
				W = Object(n.a)(D.v),
				J = Object(n.a)(D.u),
				Y = (e, t, s) => async (n, a, c) => {
					let {
						apiContext: l,
						gqlContext: b
					} = c;
					var p, f;
					let O, j, _;
					switch (t) {
						case r.rb.Edited:
							O = F, j = B, _ = q;
							break;
						case r.rb.Modqueue:
							O = w, j = Q, _ = T;
							break;
						case r.rb.Reports:
							O = U, j = V, _ = H;
							break;
						case r.rb.Spam:
							O = G, j = K, _ = $;
							break;
						case r.rb.Unmoderated:
							O = z, j = J, _ = W;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					n(O());
					const h = await Object(u.c)(l(), t, s);
					if (h.ok) {
						const r = h.body,
							c = {
								...s
							};
						if (c.subreddit) {
							const e = null === (p = Object.values(r.subreddits).find(e => {
								let {
									name: t
								} = e;
								return t === s.subreddit
							})) || void 0 === p ? void 0 : p.id;
							c.subreddit = e
						}
						if (c.profile) {
							const e = null === (f = (await Object(m.b)(l(), c.profile)).body[c.profile]) || void 0 === f ? void 0 : f.profileId;
							c.profile = e
						}
						const O = E({
								getState: a,
								queueType: t,
								options: c
							}),
							g = await Object(u.b)(b(), O);
						if (!g.ok) return n(j(g.error)), void n(Object(i.f)({
							kind: x.b.Error,
							text: o.fbt._("Oh no! Something went wrong!", null, {
								hk: "16O2Sk"
							})
						}));
						const k = function(e) {
							let {
								modQueueItems: t
							} = e;
							const s = {
								posts: {},
								comments: {},
								reports: {},
								modqueue: [],
								authorFlair: {},
								listingOrder: []
							};
							return t && t.edges ? (t.edges.forEach(e => {
								var t, o;
								if (!e) return;
								const {
									node: r
								} = e;
								if (!r) return;
								const {
									__typename: n,
									subredditInfo: a
								} = r;
								if (!a) return;
								const {
									id: d
								} = a;
								if (n === y.Comment) {
									const {
										commentInfo: e
									} = r;
									if (!e) return;
									const o = Object(v.a)(e);
									s.comments[o.id] = o, s.listingOrder.push({
										id: o.id,
										type: "comment"
									}), s.modqueue.push(o.id);
									const {
										authorInfo: n,
										authorFlair: a
									} = e, c = a ? null === (t = Object(R.a)(a)) || void 0 === t ? void 0 : t[0] : null;
									s.authorFlair[d] = {
										...s.authorFlair[d],
										...(null == n ? void 0 : n.name) ? {
											[null == n ? void 0 : n.name]: c
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
								if (n === y.Post) {
									const {
										postInfo: e
									} = r;
									if (!e) return;
									const t = Object(S.f)(e);
									s.posts[t.id] = t, s.listingOrder.push({
										id: t.id,
										type: "post"
									}), s.modqueue.push(t.id);
									const {
										authorInfo: n,
										authorFlair: a
									} = e, c = a ? null === (o = Object(R.a)(a)) || void 0 === o ? void 0 : o[0] : null;
									s.authorFlair[d] = {
										...s.authorFlair[d],
										...(null == n ? void 0 : n.name) ? {
											[null == n ? void 0 : n.name]: c
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
						}(g.body.data);
						n(_({
							listingKey: e,
							page: `${s.page||A.b}`,
							response: {
								...r,
								...k
							}
						})), n(Object(d.a)({
							postIds: r.posts ? Object.keys(r.posts) : void 0,
							commentIds: r.comments ? Object.keys(r.comments) : void 0
						}))
					} else n(j(h.error)), n(Object(i.f)({
						kind: x.b.Error,
						text: o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, Z = Object(n.a)(D.k), X = Object(n.a)(D.b), ee = e => async (t, s, r) => {
					let {
						apiContext: n
					} = r;
					const a = s(),
						d = a.pages.modHub.modQueue.moderatedCommunitiesOrder.after,
						c = a.pages.modHub.modQueue.moderatedCommunitiesOrder.pending,
						m = a.pages.modHub.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: l
						} = a.platform.currentPage.urlParams,
						b = l;
					if (e && c || m || !d) return;
					const p = await Object(u.c)(n(), b, {
						moderated_after: d
					});
					if (p.ok) {
						const e = p.body;
						t(Z(e)), e.moderatedAfter ? t(ee()) : t(X())
					} else t(Object(i.f)({
						kind: x.b.Error,
						text: o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, te = Object(n.a)(D.t), se = Object(n.a)(D.s), oe = Object(n.a)(D.r), re = (e, t, s) => async (r, n, d) => {
					let {
						apiContext: m
					} = d;
					r(Object(a.c)());
					const p = n(),
						f = Object(I.g)(p),
						j = p.user.account && p.user.account.displayText;
					Object(l.d)(l.a.ModQueue);
					const _ = Object(l.c)(l.a.ModQueue);
					Object(M.a)({
						source: "bulk_mod_action_menu",
						action: "click",
						noun: e,
						...N.n(p),
						actionInfo: N.d(p, {
							count: f.length,
							paneName: p.platform.currentPage ? p.platform.currentPage.urlParams.pageName : void 0
						}),
						screen: N.Y(p),
						correlationId: _
					});
					for (let t = 0; t < f.length; t++) {
						const s = f[t];
						let o = e;
						[A.a.Approve, A.a.Remove, A.a.Spam].includes(e) && (Object(O.a)(s) ? o += "_link" : o += "_comment"), Object(M.a)({
							source: "bulk_mod_action",
							action: "click",
							noun: o,
							...N.n(p),
							actionInfo: N.d(p, {
								count: f.length,
								paneName: p.platform.currentPage ? p.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: N.h(p, s),
							post: N.H(p, s),
							profile: N.S(p, s),
							screen: N.Y(p),
							subreddit: N.jb(p, s),
							correlationId: _
						})
					}
					Object(l.b)(l.a.ModQueue);
					const h = {
						ids: f
					};
					t && (h.text = Object(b.g)(t) || "", h.flairTemplateId = ""), s && (h.cssClass = s, h.flairTemplateId = s);
					const v = await Object(u.a)(m(), e, h);
					if (v.ok) {
						r(Object(a.b)({
							...v.body,
							operation: e,
							ids: f,
							username: j,
							options: {
								flair: t
							}
						}));
						const s = function(e, t) {
							switch (e) {
								case A.a.Approve:
									return o.fbt._({
										"*": "{number} posts/comments have been approved",
										_1: "1 post/comment has been approved"
									}, [o.fbt._plural(t, "number")], {
										hk: "2kKhSf"
									});
								case A.a.Flair:
									return o.fbt._({
										"*": "{number} posts/comments have had flair applied",
										_1: "1 post/comment has had flair applied"
									}, [o.fbt._plural(t, "number")], {
										hk: "3syB5O"
									});
								case A.a.IgnoreReports:
									return o.fbt._({
										"*": "{number} posts/comments have had their reports ignored",
										_1: "1 post/comment has had their reports ignored"
									}, [o.fbt._plural(t, "number")], {
										hk: "2WfE4g"
									});
								case A.a.Lock:
									return o.fbt._({
										"*": "{number} posts/comments have been locked",
										_1: "1 post/comment has been locked"
									}, [o.fbt._plural(t, "number")], {
										hk: "45oMbv"
									});
								case A.a.MarkNSFW:
									return o.fbt._({
										"*": "{number} posts/comments have been marked NSFW",
										_1: "1 post/comment has been marked NSFW"
									}, [o.fbt._plural(t, "number")], {
										hk: "oPsQr"
									});
								case A.a.RemovalReason:
									return o.fbt._({
										"*": "{number} posts/comments have had removal reasons applied",
										_1: "1 post/comment has had removal reasons applied"
									}, [o.fbt._plural(t, "number")], {
										hk: "35Tosn"
									});
								case A.a.Remove:
									return o.fbt._({
										"*": "{number} posts/comments have been removed",
										_1: "1 post/comment has been removed"
									}, [o.fbt._plural(t, "number")], {
										hk: "B1ZbE"
									});
								case A.a.Spam:
									return o.fbt._({
										"*": "{number} posts/comments have been marked as spam",
										_1: "1 post/comment has been marked as spam"
									}, [o.fbt._plural(t, "number")], {
										hk: "3OoNfp"
									});
								case A.a.Spoiler:
									return o.fbt._({
										"*": "{number} posts/comments have been marked as spoilers",
										_1: "1 post/comment has been marked as spoilers"
									}, [o.fbt._plural(t, "number")], {
										hk: "1DFW5M"
									});
								case A.a.UnignoreReports:
									return o.fbt._({
										"*": "{number} posts/comments have had their reports un-ignored",
										_1: "1 post/comment has had their reports un-ignored"
									}, [o.fbt._plural(t, "number")], {
										hk: "303Hpb"
									});
								case A.a.Unlock:
									return o.fbt._({
										"*": "{number} posts/comments have been unlocked",
										_1: "1 post/comment has been unlocked"
									}, [o.fbt._plural(t, "number")], {
										hk: "5gUht"
									});
								case A.a.UnmarkNSFW:
									return o.fbt._({
										"*": "{number} posts/comments have been un-marked as NSFW",
										_1: "1 post/comment has been un-marked as NSFW"
									}, [o.fbt._plural(t, "number")], {
										hk: "3oSSST"
									});
								case A.a.Unspoiler:
								case A.a.Unspoiler:
									return o.fbt._({
										"*": "{number} posts/comments have been un-marked as spoilers",
										_1: "1 post/comment has been un-marked as spoilers"
									}, [o.fbt._plural(t, "number")], {
										hk: "3lHoNI"
									})
							}
						}(e, f.length);
						if (e !== A.a.Approve && e !== A.a.Flair) {
							let t, n;
							const d = p.platform.currentPage && p.platform.currentPage.queryParams && p.platform.currentPage.queryParams.subreddit,
								m = d && Object(P.F)(p, d);
							e === A.a.Remove && m && f.length > 1 && (t = o.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), n = Object(c.fetchReasonsAndOpenModal)(m, f));
							const l = Object(i.e)(s, x.b.Undo, o.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, s) => {
								let {
									apiContext: r
								} = s;
								e(te());
								const n = t(),
									d = Object.keys(n.pages.modHub.modQueue.bulkAction.undoLastAction)[0],
									c = n.pages.modHub.modQueue.bulkAction.undoLastAction[d],
									m = n.user.account && n.user.account.displayText;
								e(Object(a.c)());
								const l = await Object(u.a)(r(), d, {
									ids: c
								});
								l.ok ? e(se({
									...l.body,
									operation: d,
									ids: c,
									username: m
								})) : (e(oe(l.error)), e(Object(i.f)({
									kind: x.b.Error,
									text: o.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, n);
							r(Object(i.f)(l))
						} else {
							const e = Object(i.e)(s, x.b.SuccessMod);
							r(Object(i.f)(e))
						}
					} else {
						r(Object(a.a)(v.error));
						const e = Object(i.e)(o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), x.b.Error);
						r(Object(i.f)(e))
					}
				}, ne = Object(n.a)(D.a), ae = Object(n.a)(D.c), de = Object(n.a)(D.d)
		},
		"./src/reddit/actions/pages/modQueue/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "modQueuePageRequested", (function() {
				return f
			}));
			var o = s("./node_modules/lodash/get.js"),
				r = s.n(o),
				n = s("./src/lib/constants/index.ts"),
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
					subreddit: _
				} = f, h = s();
				if (!p) return;
				const v = Object(d.a)({
						onlyOfType: f.only,
						profile: f.profile,
						sort: f.sort,
						subreddit: f.subreddit
					}),
					R = h.pages.modHub.modQueue[p].itemOrder[v],
					S = !!(null === (b = null == R ? void 0 : R[O]) || void 0 === b ? void 0 : b.length),
					g = h.pages.modHub.modQueue[p].api.error;
				if (h.pages.modHub.modQueue[p].api.pending || S && !g) return;
				Object(l.p)(h) || await Object(u.e)(v, p, f)(t, s, o);
				const k = s();
				if (r()(k.pages.modHub.modQueue[p].api.error, "type") === n.I.AUTHENTICATION_ERROR) return Object(c.a)(t, k);
				Object(i.j)(k, _, j), t(m.m({
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
				return re
			})), s.d(t, "addRemovalReason", (function() {
				return ne
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
				return _e
			})), s.d(t, "removalReasonMessagePending", (function() {
				return he
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
				r = s("./src/lib/initializeClient/installReducer.ts"),
				n = s("./node_modules/redux/es/redux.js");
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
				_ = Object(n.c)({
					error: O,
					pending: j
				});
			const h = {};
			var v = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
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
							...r
						} = e;
						return r
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
							order: r
						} = o;
						return {
							...e,
							[s]: r
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
						} = t.payload, r = [...e[s]].filter(e => e !== o);
						return {
							...e,
							[s]: r
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
				k = Object(n.c)({
					api: _,
					models: v,
					reasonOrder: S,
					removedItemIds: g
				}),
				E = s("./src/lib/constants/index.ts"),
				y = s("./src/lib/makeActionCreator/index.ts"),
				A = s("./src/lib/makeCommentsPageKey/index.ts"),
				x = s("./src/lib/makeDraftKey/index.ts"),
				I = s("./src/reddit/actions/bulkActions/index.ts"),
				P = s("./src/reddit/actions/comment/index.ts"),
				N = s("./src/reddit/actions/comment/authoring.ts"),
				M = s("./src/reddit/actions/comment/moderation.ts"),
				C = s("./src/reddit/actions/modal.ts"),
				L = s("./src/reddit/actions/post.ts"),
				D = s("./src/reddit/actions/toaster.ts"),
				w = s("./src/reddit/constants/modals.ts"),
				T = s("./src/lib/makeApiRequest/index.ts"),
				Q = s("./src/lib/omitHeaders/index.ts"),
				F = s("./src/reddit/constants/headers.ts"),
				q = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const B = (e, t) => Object(T.a)(Object(Q.a)(e, [F.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: E.jb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				U = (e, t, s) => Object(T.a)(Object(Q.a)(e, [F.a]), {
					endpoint: Object(q.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`),
					method: E.jb.POST,
					type: "json",
					data: t
				});
			var H = s("./src/reddit/helpers/isPost.ts"),
				V = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				G = s("./src/reddit/helpers/routeKey/index.ts"),
				$ = s("./src/reddit/models/ModQueue/index.ts"),
				K = s("./src/reddit/models/PostDraft/index.ts"),
				z = s("./src/reddit/models/RemovalReason/index.ts"),
				W = s("./src/reddit/models/Toast/index.ts"),
				J = s("./src/reddit/selectors/comments.ts"),
				Y = s("./src/reddit/selectors/platform.ts");
			Object(r.a)({
				features: {
					removalReasons: k
				}
			});
			const Z = Object(y.a)("REMOVALREASONS__LOAD_PENDING"),
				X = Object(y.a)(a),
				ee = Object(y.a)("REMOVALREASONS__LOAD_FAILED"),
				te = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					const n = s().subreddits.models[e].name;
					t(Z());
					const a = await ((e, t) => Object(T.a)(Object(Q.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: E.jb.GET
					}))(r(), n);
					a.ok ? t(X({
						subredditId: e,
						response: a.body
					})) : t(ee(a.error))
				}, se = Object(y.a)(d), oe = Object(y.a)(c), re = Object(y.a)(i), ne = (e, t) => async (s, r, n) => {
					let {
						apiContext: a
					} = n;
					const d = r().subreddits.models[e].name;
					s(se());
					const c = await ((e, t, s) => Object(T.a)(Object(Q.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: E.jb.POST,
						data: s
					}))(a(), d, t);
					if (c.ok) {
						const {
							id: r
						} = c.body, n = {
							...t,
							id: r
						};
						s(oe({
							subredditId: e,
							reason: n
						})), s(Object(D.f)({
							kind: W.b.SuccessMod,
							text: o.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(re(c.error))
				}, ae = Object(y.a)(u), de = Object(y.a)(m), ce = Object(y.a)(l), ie = (e, t) => async (s, r, n) => {
					let {
						apiContext: a
					} = n;
					const d = r().subreddits.models[e].name;
					s(ae());
					const c = await ((e, t, s) => Object(T.a)(Object(Q.a)(e, [F.a]), {
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
				}, ue = Object(y.a)(b), me = Object(y.a)(p), le = Object(y.a)(f), be = (e, t) => async (s, r, n) => {
					let {
						apiContext: a
					} = n;
					const d = r().subreddits.models[e].name;
					s(ue());
					const c = await ((e, t, s) => Object(T.a)(Object(Q.a)(e, [F.a]), {
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
				}, pe = Object(y.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), fe = (e, t) => async (s, o, r) => {
					let {
						apiContext: n
					} = r;
					const a = o();
					a.features.removalReasons.reasonOrder[e] && a.features.removalReasons.reasonOrder[e].length > 0 || s(te(e)), s(pe({
						subredditId: e,
						itemIds: t
					})), s(Object(C.i)(w.a.ADD_REMOVAL_REASON))
				}, Oe = Object(y.a)("REMOVALREASONS__SUBMIT_PENDING"), je = Object(y.a)("REMOVALREASONS__SUBMIT_SUCCESS"), _e = Object(y.a)("REMOVALREASONS__SUBMIT_FAILED"), he = Object(y.a)("REMOVALREASONS__MESSAGE_PENDING"), ve = Object(y.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Re = Object(y.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Se = Object(y.a)("REMOVALREASONS__MESSAGE_FAILED"), ge = (e, t, s, o, r) => async (n, a, d) => {
					let {
						apiContext: c
					} = d;
					const i = a(),
						u = i.user.account && i.user.account.displayText,
						m = e[0],
						l = Object(H.a)(m) ? z.e.Post : z.e.Comment,
						b = l === z.e.Post ? i.posts.models[m] : i.features.comments.models[m],
						p = l === z.e.Post ? L.S : P.i;
					if (!b || !u) return !1;
					n(Oe()), n(p({
						[m]: {
							modNote: r,
							modRemovalReason: t && t.title,
							modReasonBy: u
						}
					}));
					const f = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						O = await B(c(), f);
					if (O.ok) {
						if (n(je()), t) {
							n(he());
							const r = {
									itemId: e,
									message: s,
									title: t.title,
									type: o
								},
								a = await U(c(), Object(z.h)(r, l), l);
							if (a.ok) {
								if (o === z.f.Public) {
									if (n(Re()), a.body) {
										const e = Object(V.a)(a.body),
											t = {
												comment: e,
												parentId: m
											},
											s = Object(Y.f)(i),
											o = i.platform.currentPage && i.platform.currentPage.routeMatch;
										let r = s && o && Object(G.a)(o, i, i.posts.models[e.postId]);
										if (r || (r = Object(A.a)(e.postId, null, {
												sort: E.u,
												hasSortParam: !0
											})), l === z.e.Post) {
											const s = Object(x.a)(K.c.replyToPost, m);
											n(Object(N.r)({
												...t,
												headCommentId: Object(J.w)(i, {
													commentsPageKey: r
												}),
												commentsPageKey: r,
												draftKey: s
											}));
											const o = i.postStickiedComments.data[m];
											n(Object(M.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: r
											})), o && o !== e.id && n(Object(P.i)({
												[o]: {
													isStickied: !1
												}
											}))
										} else if (l === z.e.Comment) {
											const e = Object(x.a)(K.c.replyToComment, b.id),
												s = Object(J.j)(i, {
													commentId: m,
													commentsPageKey: r
												});
											n(Object(N.p)({
												...t,
												parentCommentId: m,
												commentsPageKey: r,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else n(ve());
								return !0
							}
							return n(Se(a.error)), !1
						}
					} else n(_e(O.error)), n(p({
						[m]: {
							modNote: b.modNote,
							modRemovalReason: b.modRemovalReason,
							modReasonBy: b.modReasonBy
						}
					}));
					return !1
				}, ke = (e, t, s, r, n) => async (a, d, c) => {
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
							modNote: n,
							reasonId: t ? t.id : null
						},
						p = await B(i(), b);
					if (p.ok) {
						const o = {
							ids: e,
							operation: $.a.RemovalReason,
							username: m,
							options: {
								modNote: n,
								removalReason: t && t.title
							}
						};
						if (a(Object(I.b)(o)), t) {
							const o = {
									itemId: e,
									message: s,
									title: t.title,
									type: r
								},
								n = await U(i(), Object(z.h)(o, z.e.Bulk), z.e.Bulk);
							n.ok ? (a(ve()), a(l)) : a(Se(n.error))
						} else a(l)
					} else a(_e(p.error))
				}
		},
		"./src/reddit/components/ModQueueList/PostSortDropdown.m.less": function(e, t, s) {
			e.exports = {
				Row: "_3h6zBMaGJuwN_qOmhUyv7E",
				row: "_3h6zBMaGJuwN_qOmhUyv7E"
			}
		},
		"./src/reddit/components/ModQueueList/PostSortDropdown.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var o, r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/lib/filterQueryParams/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/controls/Dropdown/Row.tsx"),
				b = s("./src/reddit/controls/InternalLink/index.tsx"),
				p = s("./src/reddit/selectors/meta.ts"),
				f = s("./src/reddit/components/ModQueueList/PostSortDropdown.m.less"),
				O = s.n(f);
			! function(e) {
				e.OldestFirst = "oldest"
			}(o || (o = {}));
			const j = m.a.wrapped(l.b, "Row", O.a),
				_ = Object(c.c)({
					currentPage: e => e.platform.currentPage,
					origin: p.j
				}),
				h = Object(d.b)(_);
			t.b = h(e => a.a.createElement("div", {
				className: e.className
			}, a.a.createElement(b.default, {
				onClick: e.sendEventWithName("modqueue_sort_newest"),
				to: Object(u.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page", "sort"])
			}, a.a.createElement(j, {
				displayText: r.fbt._("Newest first", null, {
					hk: "4buqk8"
				}),
				isSelected: !e.postSort
			})), a.a.createElement(b.default, {
				onClick: e.sendEventWithName("modqueue_sort_oldest"),
				to: Object(i.a)(Object(u.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
					sort: o.OldestFirst
				})
			}, a.a.createElement(j, {
				displayText: r.fbt._("Oldest first", null, {
					hk: "1x9Jdr"
				}),
				isSelected: e.postSort === o.OldestFirst
			}))))
		},
		"./src/reddit/helpers/makeModQueueListingKey/index.ts": function(e, t, s) {
			"use strict";
			var o = s("./src/reddit/components/ModQueueList/PostSortDropdown.tsx");
			t.a = e => {
				const {
					profile: t,
					subreddit: s
				} = e;
				let r = s && `r/${s}` || t && `u/${t}` || "all";
				return "comments" !== e.onlyOfType && "links" !== e.onlyOfType || (r += `--[${e.onlyOfType}]`), e.sort === o.a.OldestFirst && (r += `--[${e.sort}]`), r
			}
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return n
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
			const r = 50,
				n = 50,
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
			s.d(t, "d", (function() {
				return u
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "a", (function() {
				return p
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "b", (function() {
				return O
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				n = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/lib/initializeClient/installReducer.ts"),
				d = s("./src/reddit/reducers/features/comments/index.ts"),
				c = s("./src/reddit/reducers/pages/modHub/index.ts");
			Object(a.a)({
				features: {
					comments: d.a
				},
				pages: {
					modHub: c.a
				}
			});
			const i = (e, t) => Object(r.a)({
					onlyOfType: t.queryParams.only,
					profile: t.profileName,
					sort: t.queryParams.sort,
					subreddit: t.subredditName
				}),
				u = Object(n.a)((e, t) => {
					var s, o, r;
					const {
						pageName: n,
						page: a
					} = t, d = i(0, t);
					if (!(null === (r = null === (o = null === (s = e.pages.modHub.modQueue[n]) || void 0 === s ? void 0 : s.itemOrder) || void 0 === o ? void 0 : o[d]) || void 0 === r ? void 0 : r[a])) return;
					const c = e.pages.modHub.modQueue[n].itemOrder[d][a];
					return c ? c.map(t => e.posts.models[t] || e.features.comments.models[t]) : []
				}),
				m = (e, t) => {
					var s;
					const {
						pageName: o
					} = t;
					return null === (s = e.pages.modHub.modQueue[o]) || void 0 === s || !s.api || e.pages.modHub.modQueue[o].api.pending
				},
				l = (e, t) => {
					var s;
					const o = i(0, t);
					return null === (s = e.pages.modHub.modQueue[t.pageName]) || void 0 === s ? void 0 : s.loadMore[o]
				},
				b = e => Object.keys(e.pages.modHub.modQueue.bulkAction.selectedItems),
				p = e => e.pages.modHub.modQueue.bulkAction.api.pending,
				f = e => e.pages.modHub.modQueue.moderatedCommunitiesOrder.data,
				O = e => {
					const t = e.platform && e.platform.currentPage;
					return t && t.meta && (t.meta.name === o.Nb.MODERATION_PAGES || t.meta.name === o.Nb.MODQUEUE_PAGES)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueue.7d42c064e6a3b75882c0.js.map