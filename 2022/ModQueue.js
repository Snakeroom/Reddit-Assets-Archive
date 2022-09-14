// https://www.redditstatic.com/desktop2x/ModQueue.30d1b45685ae2c57d1a7.js
// Retrieved at 9/14/2022, 6:30:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueue"], {
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return n
			})), o.d(t, "b", (function() {
				return d
			})), o.d(t, "a", (function() {
				return a
			}));
			var s = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/reddit/actions/bulkActions/constants.ts");
			const n = Object(s.a)(r.c),
				d = Object(s.a)(r.b),
				a = Object(s.a)(r.a)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return g
			})), o.d(t, "c", (function() {
				return S
			})), o.d(t, "f", (function() {
				return R
			})), o.d(t, "a", (function() {
				return E
			})), o.d(t, "e", (function() {
				return k
			})), o.d(t, "g", (function() {
				return y
			})), o.d(t, "h", (function() {
				return A
			})), o.d(t, "b", (function() {
				return x
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/constants/index.ts"),
				n = o("./src/lib/makeActionCreator/index.ts"),
				d = o("./src/lib/makeCommentsPageKey/index.ts"),
				a = o("./src/reddit/actions/modal.ts"),
				i = o("./src/reddit/actions/shortcuts/utils.ts"),
				c = o("./src/reddit/actions/toaster.ts"),
				u = o("./src/reddit/constants/modals.ts"),
				l = o("./src/reddit/endpoints/comment/index.tsx"),
				m = o("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				b = o("./src/reddit/models/Reportable/index.ts"),
				p = o("./src/reddit/models/Toast/index.ts"),
				f = o("./src/reddit/selectors/commentSelector.ts"),
				O = o("./src/reddit/selectors/experiments/cnc/index.ts"),
				j = o("./src/reddit/selectors/user.ts"),
				v = o("./src/reddit/actions/comment/index.ts"),
				_ = o("./src/reddit/actions/comment/constants.ts");
			const h = Object(n.a)(_.p),
				g = e => async (t, o, s) => {
					let {
						apiContext: r
					} = s;
					o().features.comments.models[e] && (await Object(l.l)(r(), e)).ok && t((e => async t => {
						t(h({
							commentId: e
						}))
					})(e))
				}, S = e => async (t, o, r) => {
					let {
						apiContext: n
					} = r;
					if (!Object(j.Q)(o())) return void t(Object(a.i)(u.a.LOGIN_MODAL_ID));
					const d = o().features.comments.models[e];
					if (!d) return;
					const i = d.isLocked ? l.n : l.g;
					t(Object(v.j)({
						[e]: {
							isLocked: !d.isLocked
						}
					})), (await i(n(), e)).ok ? t(Object(c.f)({
						kind: p.b.SuccessMod,
						text: d.isLocked ? s.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : s.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(v.j)({
						[e]: {
							isLocked: d.isLocked
						}
					}))
				}, R = Object(n.a)(_.J), E = e => async (t, o, r) => {
					let {
						apiContext: n,
						gqlContext: d
					} = r;
					const a = o(),
						u = a.features.comments.models[e],
						m = a.user.account ? a.user.account.displayText : null;
					u && m && (t(Object(v.j)({
						[e]: {
							isApproved: !0,
							approvedBy: m,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (Object(O.a)(a) ? await Object(l.a)(d(), e) : await Object(l.b)(n(), e)).ok ? t(Object(c.f)({
						kind: p.b.SuccessMod,
						text: s.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(v.j)({
						[e]: {
							isApproved: u.isApproved,
							approvedBy: null,
							bannedBy: u.bannedBy,
							isRemoved: u.isRemoved,
							isSpam: u.isSpam,
							modNote: u.modNote,
							modReasonBy: u.modReasonBy,
							modRemovalReason: u.modRemovalReason,
							numReports: u.numReports || null
						}
					})), Object(i.d)())
				}, k = (e, t) => async (o, r, n) => {
					let {
						apiContext: d,
						gqlContext: a
					} = n;
					const u = r(),
						m = u.features.comments.models[e],
						b = u.user.account ? u.user.account.displayText : null;
					m && b && (o(Object(v.j)({
						[e]: {
							approvedBy: null,
							bannedBy: b,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (Object(O.a)(u) ? await Object(l.i)(a(), e, t) : await Object(l.j)(d(), e, t)).ok ? o(Object(c.f)({
						kind: p.b.SuccessMod,
						text: t ? s.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : s.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : o(Object(v.j)({
						[e]: {
							approvedBy: m.approvedBy,
							bannedBy: m.bannedBy,
							isApproved: m.isApproved,
							isRemoved: m.isRemoved,
							isSpam: m.isSpam
						}
					})), Object(i.d)())
				}, y = e => async (t, o, r) => {
					let {
						apiContext: n
					} = r;
					const d = o().features.comments.models[e];
					if (!d) return;
					const a = d.ignoreReports ? l.m : l.f;
					t(Object(v.j)({
						[e]: {
							ignoreReports: !d.ignoreReports
						}
					})), (await a(n(), e)).ok ? t(Object(c.f)({
						kind: p.b.SuccessMod,
						text: d.ignoreReports ? s.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : s.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(v.j)({
						[e]: {
							ignoreReports: d.ignoreReports
						}
					}))
				}, A = (e, t, o) => async (n, d, a) => {
					let {
						gqlContext: i
					} = a;
					const u = Object(f.b)(d(), {
						commentId: e
					});
					if (!u) return;
					const l = o === r.ic.Snoozed,
						O = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(m.a)(i(), {
							input: O
						})).ok) n(Object(v.j)({
						[e]: {
							userReports: Object(b.a)(u.userReports, t, l)
						}
					}));
					else {
						const e = Object(c.e)(s.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), p.b.Error);
						n(Object(c.f)(e))
					}
				}, x = (e, t, o) => async (s, n, a) => {
					let {
						apiContext: i,
						gqlContext: c
					} = a;
					const u = n(),
						m = u.features.comments.models[e];
					if (!m) return;
					const b = m.postId,
						p = u.postStickiedComments.data[b];
					s(Object(v.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === r.H.ADMIN,
							isMod: t === r.H.MODERATOR,
							isStickied: !!o
						}
					})), o && p && p !== e && s(Object(v.j)({
						[p]: {
							isStickied: !1
						}
					}));
					const f = Object(l.d)(c(), e, t),
						O = Object(l.e)(c(), e, !!o),
						j = [f];
					(o || !o && e === p) && j.push(O), (await Promise.all(j)).every(e => e.ok) ? o && s(R({
						id: e,
						postId: b,
						commentsPageKey: Object(d.a)(b, null, {
							sort: r.u.CONFIDENCE,
							...u.platform.currentPage.queryParams
						})
					})) : (s(Object(v.j)({
						[e]: {
							distinguishType: m.distinguishType,
							isAdmin: m.isAdmin,
							isMod: m.isMod,
							isStickied: m.isStickied
						}
					})), s(Object(v.j)({
						[p]: {
							isStickied: u.features.comments.models[p].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/modQueue/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "e", (function() {
				return X
			})), o.d(t, "d", (function() {
				return oe
			})), o.d(t, "f", (function() {
				return de
			})), o.d(t, "a", (function() {
				return ae
			})), o.d(t, "b", (function() {
				return ie
			})), o.d(t, "c", (function() {
				return ce
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/constants/index.ts"),
				n = o("./src/lib/makeActionCreator/index.ts"),
				d = o("./src/reddit/actions/bulkActions/index.ts"),
				a = o("./src/reddit/actions/removalReasons/index.ts"),
				i = o("./src/reddit/actions/toaster.ts"),
				c = o("./src/reddit/endpoints/modQueue/index.ts"),
				u = o("./src/reddit/endpoints/user/index.ts"),
				l = o("./src/reddit/helpers/correlationIdTracker.ts"),
				m = o("./src/reddit/helpers/flair.ts"),
				b = o("./node_modules/Base64/base64.js"),
				p = o("./src/reddit/components/ModQueueList/PostSortDropdown.tsx"),
				f = o("./src/reddit/helpers/isPost.ts"),
				O = o("./src/reddit/selectors/commentSelector.ts"),
				j = o("./src/reddit/selectors/posts.ts"),
				v = o("./src/redditGQL/types.ts"),
				_ = o("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				h = o("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				g = o("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				S = o("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const R = {
					[r.ub.Edited]: v.x.Edited,
					[r.ub.Modqueue]: v.x.Mod,
					[r.ub.Reports]: v.x.Reported,
					[r.ub.Spam]: v.x.Removed,
					[r.ub.Unmoderated]: v.x.Unmoderated
				},
				E = {
					comments: v.v.Comment,
					links: v.v.Post,
					chat_comments: v.v.ChatComment
				};

			function k(e) {
				let {
					getState: t,
					queueType: o,
					options: s
				} = e;
				const r = t();
				let n;
				s.only && (n = E[s.only]);
				const d = {};
				s.after && (d[s.sort === p.a.OldestFirst ? "before" : "after"] = function(e, t) {
					const o = Object(f.a)(t) ? Object(j.G)(e, {
						postId: t
					}) : Object(O.b)(e, {
						commentId: t
					});
					if (o) return Object(b.btoa)(`${o.id}|${o.created}`)
				}(r, s.after));
				const a = {};
				return s.sort === p.a.OldestFirst ? a.last = 25 : a.first = 25, {
					queueType: R[o],
					moderatedAfter: s.moderatedAfter,
					...a,
					...!!n && {
						itemTypes: n
					},
					...!!s.subreddit && {
						subredditNames: Array.isArray(s.subreddit) ? s.subreddit : [s.subreddit]
					},
					...!!s.profile && {
						subredditIds: [s.profile]
					},
					sort: s.sort === p.a.MostReportedFirst ? v.w.SortReports : v.w.SortDate,
					...d
				}
			}
			var y;
			! function(e) {
				e.Comment = "ModQueueItemComment", e.Post = "ModQueueItemPost", e.ChatComment = "ModQueueItemChatComment"
			}(y || (y = {}));
			const A = e => ({
				access: (null == e ? void 0 : e.isAccessEnabled) || !1,
				all: (null == e ? void 0 : e.isAllAllowed) || !1,
				chatConfig: (null == e ? void 0 : e.isChatConfigEditingAllowed) || !1,
				chatOperator: (null == e ? void 0 : e.isChatOperator) || !1,
				config: (null == e ? void 0 : e.isConfigEditingAllowed) || !1,
				flair: (null == e ? void 0 : e.isFlairEditingAllowed) || !1,
				mail: (null == e ? void 0 : e.isMailEditingAllowed) || !1,
				posts: (null == e ? void 0 : e.isPostEditingAllowed) || !1,
				wiki: (null == e ? void 0 : e.isWikiEditingAllowed) || !1
			});

			function x(e) {
				let {
					modQueueItems: t,
					identity: o
				} = e;
				var s, r, n, d;
				const a = {
					posts: {},
					comments: {},
					reports: {},
					modqueue: [],
					authorFlair: {},
					moderatedAfter: (null === (s = null == o ? void 0 : o.redditor.moderatedSubreddits) || void 0 === s ? void 0 : s.pageInfo.hasNextPage) ? null === (r = null == o ? void 0 : o.redditor.moderatedSubreddits) || void 0 === r ? void 0 : r.pageInfo.endCursor : null,
					moderatingProfiles: {},
					profiles: {},
					listingOrder: [],
					subreddits: {},
					moderatingSubreddits: {},
					postFlair: {},
					userFlair: {}
				};
				if (!t) return a;
				if (!t.edges) return a;
				const i = null === (d = null === (n = null == o ? void 0 : o.redditor.moderatedSubreddits) || void 0 === n ? void 0 : n.edges) || void 0 === d ? void 0 : d.reduce((e, t) => {
					var o;
					if (!(null === (o = null == t ? void 0 : t.node) || void 0 === o ? void 0 : o.modPermissions)) return e;
					const s = t.node.modPermissions;
					return e.moderatingSubreddits[t.node.id] = A(s), e.subreddits[t.node.id] = Object(S.a)(t.node), e
				}, {
					subreddits: {},
					moderatingSubreddits: {}
				});
				return a.moderatingSubreddits = (null == i ? void 0 : i.moderatingSubreddits) || {}, a.subreddits = (null == i ? void 0 : i.subreddits) || {}, t.edges.forEach(e => {
					var t, o;
					if (!e) return;
					const {
						node: s
					} = e;
					if (!s) return;
					const {
						__typename: r,
						subredditInfo: n
					} = s;
					if (!n) return;
					const {
						id: d
					} = n;
					if (a.subreddits[d] = Object(S.a)(n), a.moderatingSubreddits[d] || "Subreddit" !== (null == n ? void 0 : n.__typename) || (a.moderatingSubreddits[d] = A(n.modPermissions)), !a.postFlair[d] && "Subreddit" === n.__typename) {
						const {
							position: e,
							isEnabled: t
						} = (null == n ? void 0 : n.postFlairSettings) || {};
						a.postFlair[d] = {
							displaySettings: {
								position: null == e ? void 0 : e.toLowerCase(),
								isEnabled: t
							}
						}
					}
					if (r === y.Comment || r === y.ChatComment) {
						const {
							commentInfo: e
						} = s;
						if (!e) return;
						const o = Object(_.a)(e);
						a.comments[o.id] = o, a.listingOrder.push({
							id: o.id,
							type: "comment"
						}), a.modqueue.push(o.id);
						const {
							authorInfo: r,
							authorFlair: n
						} = e, i = n ? null === (t = Object(h.a)(n)) || void 0 === t ? void 0 : t[0] : null;
						a.authorFlair[d] = {
							...a.authorFlair[d],
							...(null == r ? void 0 : r.name) ? {
								[null == r ? void 0 : r.name]: i
							} : {}
						};
						const c = [];
						o.modReports.forEach(e => {
							c.push({
								type: "moderator",
								reason: e[0],
								reporter: e[1]
							})
						}), o.userReports.forEach(e => {
							c.push({
								type: "user",
								reason: e[0]
							})
						}), a.reports[o.id] = c
					}
					if (r === y.Post) {
						const {
							postInfo: e
						} = s;
						if (!e) return;
						const t = Object(g.f)(e);
						a.posts[t.id] = t, a.listingOrder.push({
							id: t.id,
							type: "post"
						}), a.modqueue.push(t.id);
						const {
							authorInfo: r,
							authorFlair: n
						} = e, i = n ? null === (o = Object(h.a)(n)) || void 0 === o ? void 0 : o[0] : null;
						a.authorFlair[d] = {
							...a.authorFlair[d],
							...(null == r ? void 0 : r.name) ? {
								[null == r ? void 0 : r.name]: i
							} : {}
						};
						const c = [];
						t.modReports.forEach(e => {
							c.push({
								type: "moderator",
								reason: e[0],
								reporter: e[1]
							})
						}), t.userReports.forEach(e => {
							c.push({
								type: "user",
								reason: e[0]
							})
						}), a.reports[t.id] = c
					}
				}), a
			}
			var I = o("./src/reddit/models/ModQueue/index.ts"),
				P = o("./src/reddit/models/Toast/index.ts"),
				C = o("./src/reddit/selectors/modQueue.ts"),
				M = o("./src/reddit/selectors/subreddit.ts"),
				N = o("./src/reddit/selectors/telemetry.ts"),
				L = o("./src/telemetry/index.ts"),
				w = o("./src/lib/initializeClient/installReducer.ts"),
				D = o("./src/reddit/reducers/pages/modHub/index.ts"),
				T = o("./src/reddit/actions/modQueue/constants.ts");
			Object(w.a)({
				pages: {
					modHub: D.a
				}
			});
			const F = Object(n.a)(T.j),
				Q = Object(n.a)(T.i),
				q = Object(n.a)(T.h),
				B = Object(n.a)(T.g),
				U = Object(n.a)(T.f),
				H = Object(n.a)(T.e),
				V = Object(n.a)(T.n),
				G = Object(n.a)(T.m),
				$ = Object(n.a)(T.l),
				K = Object(n.a)(T.q),
				z = Object(n.a)(T.p),
				W = Object(n.a)(T.o),
				J = Object(n.a)(T.w),
				Y = Object(n.a)(T.v),
				Z = Object(n.a)(T.u),
				X = (e, t, o) => async (n, d, a) => {
					let {
						apiContext: l,
						gqlContext: m
					} = a;
					var b;
					let p, f, O;
					switch (t) {
						case r.ub.Edited:
							p = B, f = H, O = U;
							break;
						case r.ub.Modqueue:
							p = F, f = q, O = Q;
							break;
						case r.ub.Reports:
							p = V, f = $, O = G;
							break;
						case r.ub.Spam:
							p = K, f = W, O = z;
							break;
						case r.ub.Unmoderated:
							p = J, f = Z, O = Y;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					if (n(p()), o.profile) {
						const e = null === (b = (await Object(u.b)(l(), o.profile)).body[o.profile]) || void 0 === b ? void 0 : b.profileId;
						o.profile = e
					}
					const j = k({
							getState: d,
							queueType: t,
							options: o
						}),
						v = await Object(c.b)(m(), j);
					if (!v.ok) return n(f(v.error)), void n(Object(i.f)({
						kind: P.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}));
					const _ = x(v.body.data);
					n(O({
						listingKey: e,
						page: `${o.page||I.b}`,
						response: _
					}))
				}, ee = Object(n.a)(T.k), te = Object(n.a)(T.b), oe = e => async (t, o, r) => {
					let {
						gqlContext: n
					} = r;
					const d = o(),
						a = d.pages.modHub.modQueue.moderatedCommunitiesOrder.after,
						u = d.pages.modHub.modQueue.moderatedCommunitiesOrder.pending,
						l = d.pages.modHub.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: m
						} = d.platform.currentPage.urlParams;
					if (e && u || l || !a) return;
					const b = k({
							getState: o,
							queueType: m,
							options: {
								moderatedAfter: a
							}
						}),
						p = await Object(c.b)(n(), b);
					if (!p.ok) return void t(Object(i.f)({
						kind: P.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}));
					const f = x(p.body.data);
					t(ee(f)), f.moderatedAfter ? t(oe()) : t(te())
				}, se = Object(n.a)(T.t), re = Object(n.a)(T.s), ne = Object(n.a)(T.r), de = (e, t, o) => async (r, n, u) => {
					let {
						apiContext: b
					} = u;
					r(Object(d.c)());
					const p = n(),
						O = Object(C.g)(p),
						j = p.user.account && p.user.account.displayText;
					Object(l.d)(l.a.ModQueue);
					const v = Object(l.c)(l.a.ModQueue);
					Object(L.a)({
						source: "bulk_mod_action_menu",
						action: "click",
						noun: e,
						...N.o(p),
						actionInfo: N.d(p, {
							count: O.length,
							paneName: p.platform.currentPage ? p.platform.currentPage.urlParams.pageName : void 0
						}),
						screen: N.bb(p),
						correlationId: v
					});
					for (let t = 0; t < O.length; t++) {
						const o = O[t];
						let s = e;
						[I.a.Approve, I.a.Remove, I.a.Spam].includes(e) && (Object(f.a)(o) ? s += "_link" : s += "_comment"), Object(L.a)({
							source: "bulk_mod_action",
							action: "click",
							noun: s,
							...N.o(p),
							actionInfo: N.d(p, {
								count: O.length,
								paneName: p.platform.currentPage ? p.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: N.h(p, o),
							post: N.K(p, o),
							profile: N.V(p, o),
							screen: N.bb(p),
							subreddit: N.mb(p, o),
							correlationId: v
						})
					}
					Object(l.b)(l.a.ModQueue);
					const _ = {
						ids: O
					};
					t && (_.text = Object(m.g)(t) || "", _.flairTemplateId = ""), o && (_.cssClass = o, _.flairTemplateId = o);
					const h = await Object(c.a)(b(), e, _);
					if (h.ok) {
						r(Object(d.b)({
							...h.body,
							operation: e,
							ids: O,
							username: j,
							options: {
								flair: t
							}
						}));
						const o = function(e, t) {
							switch (e) {
								case I.a.Approve:
									return s.fbt._({
										"*": "{number} posts/comments have been approved",
										_1: "1 post/comment has been approved"
									}, [s.fbt._plural(t, "number")], {
										hk: "2kKhSf"
									});
								case I.a.Flair:
									return s.fbt._({
										"*": "{number} posts/comments have had flair applied",
										_1: "1 post/comment has had flair applied"
									}, [s.fbt._plural(t, "number")], {
										hk: "3syB5O"
									});
								case I.a.IgnoreReports:
									return s.fbt._({
										"*": "{number} posts/comments have had their reports ignored",
										_1: "1 post/comment has had their reports ignored"
									}, [s.fbt._plural(t, "number")], {
										hk: "2WfE4g"
									});
								case I.a.Lock:
									return s.fbt._({
										"*": "{number} posts/comments have been locked",
										_1: "1 post/comment has been locked"
									}, [s.fbt._plural(t, "number")], {
										hk: "45oMbv"
									});
								case I.a.MarkNSFW:
									return s.fbt._({
										"*": "{number} posts/comments have been marked NSFW",
										_1: "1 post/comment has been marked NSFW"
									}, [s.fbt._plural(t, "number")], {
										hk: "oPsQr"
									});
								case I.a.RemovalReason:
									return s.fbt._({
										"*": "{number} posts/comments have had removal reasons applied",
										_1: "1 post/comment has had removal reasons applied"
									}, [s.fbt._plural(t, "number")], {
										hk: "35Tosn"
									});
								case I.a.Remove:
									return s.fbt._({
										"*": "{number} posts/comments have been removed",
										_1: "1 post/comment has been removed"
									}, [s.fbt._plural(t, "number")], {
										hk: "B1ZbE"
									});
								case I.a.Spam:
									return s.fbt._({
										"*": "{number} posts/comments have been marked as spam",
										_1: "1 post/comment has been marked as spam"
									}, [s.fbt._plural(t, "number")], {
										hk: "3OoNfp"
									});
								case I.a.Spoiler:
									return s.fbt._({
										"*": "{number} posts/comments have been marked as spoilers",
										_1: "1 post/comment has been marked as spoilers"
									}, [s.fbt._plural(t, "number")], {
										hk: "1DFW5M"
									});
								case I.a.UnignoreReports:
									return s.fbt._({
										"*": "{number} posts/comments have had their reports un-ignored",
										_1: "1 post/comment has had their reports un-ignored"
									}, [s.fbt._plural(t, "number")], {
										hk: "303Hpb"
									});
								case I.a.Unlock:
									return s.fbt._({
										"*": "{number} posts/comments have been unlocked",
										_1: "1 post/comment has been unlocked"
									}, [s.fbt._plural(t, "number")], {
										hk: "5gUht"
									});
								case I.a.UnmarkNSFW:
									return s.fbt._({
										"*": "{number} posts/comments have been un-marked as NSFW",
										_1: "1 post/comment has been un-marked as NSFW"
									}, [s.fbt._plural(t, "number")], {
										hk: "3oSSST"
									});
								case I.a.Unspoiler:
								case I.a.Unspoiler:
									return s.fbt._({
										"*": "{number} posts/comments have been un-marked as spoilers",
										_1: "1 post/comment has been un-marked as spoilers"
									}, [s.fbt._plural(t, "number")], {
										hk: "3lHoNI"
									})
							}
						}(e, O.length);
						if (e !== I.a.Approve && e !== I.a.Flair) {
							let t, n;
							const u = p.platform.currentPage && p.platform.currentPage.queryParams && p.platform.currentPage.queryParams.subreddit,
								l = u && Object(M.G)(p, u);
							e === I.a.Remove && l && O.length > 1 && (t = s.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), n = Object(a.fetchReasonsAndOpenModal)(l, O));
							const m = Object(i.e)(o, P.b.Undo, s.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, o) => {
								let {
									apiContext: r
								} = o;
								e(se());
								const n = t(),
									a = Object.keys(n.pages.modHub.modQueue.bulkAction.undoLastAction)[0],
									u = n.pages.modHub.modQueue.bulkAction.undoLastAction[a],
									l = n.user.account && n.user.account.displayText;
								e(Object(d.c)());
								const m = await Object(c.a)(r(), a, {
									ids: u
								});
								m.ok ? e(re({
									...m.body,
									operation: a,
									ids: u,
									username: l
								})) : (e(ne(m.error)), e(Object(i.f)({
									kind: P.b.Error,
									text: s.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, n);
							r(Object(i.f)(m))
						} else {
							const e = Object(i.e)(o, P.b.SuccessMod);
							r(Object(i.f)(e))
						}
					} else {
						r(Object(d.a)(h.error));
						const e = Object(i.e)(s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), P.b.Error);
						r(Object(i.f)(e))
					}
				}, ae = Object(n.a)(T.a), ie = Object(n.a)(T.c), ce = Object(n.a)(T.d)
		},
		"./src/reddit/actions/pages/modQueue/index.ts": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "modQueuePageRequested", (function() {
				return f
			}));
			var s = o("./node_modules/lodash/get.js"),
				r = o.n(s),
				n = o("./src/lib/constants/index.ts"),
				d = o("./src/lib/pageTitle/index.ts"),
				a = o("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				i = o("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				c = o("./src/reddit/helpers/trackers/screenview.ts"),
				u = o("./src/reddit/actions/modQueue/index.ts"),
				l = o("./src/reddit/actions/platform.ts"),
				m = o("./src/reddit/selectors/platform.ts"),
				b = o("./src/lib/initializeClient/installReducer.ts"),
				p = o("./src/reddit/reducers/pages/modHub/index.ts");
			Object(b.a)({
				pages: {
					modHub: p.a
				}
			});
			const f = e => async (t, o, s) => {
				var b;
				const {
					pageName: p
				} = e.params, f = e.queryParams, {
					page: O,
					profile: j,
					subreddit: v
				} = f, _ = o();
				if (!p) return;
				const h = Object(a.a)({
						onlyOfType: f.only,
						profile: f.profile,
						sort: f.sort,
						subreddit: f.subreddit
					}),
					g = _.pages.modHub.modQueue[p].itemOrder[h],
					S = !!(null === (b = null == g ? void 0 : g[O]) || void 0 === b ? void 0 : b.length),
					R = _.pages.modHub.modQueue[p].api.error;
				if (_.pages.modHub.modQueue[p].api.pending || S && !R) return;
				Object(m.p)(_) || await Object(u.e)(h, p, f)(t, o, s);
				const E = o();
				if (r()(E.pages.modHub.modQueue[p].api.error, "type") === n.J.AUTHENTICATION_ERROR) return Object(i.a)(t, E);
				Object(c.j)(E, v, j), t(l.m({
					title: Object(d.g)()
				}))
			}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "removalReasonsPending", (function() {
				return Z
			})), o.d(t, "removalReasonsLoaded", (function() {
				return X
			})), o.d(t, "removalReasonsFailed", (function() {
				return ee
			})), o.d(t, "removalReasonsRequested", (function() {
				return te
			})), o.d(t, "removalReasonAddedPending", (function() {
				return oe
			})), o.d(t, "removalReasonAddedSuccess", (function() {
				return se
			})), o.d(t, "removalReasonAddedFailed", (function() {
				return re
			})), o.d(t, "addRemovalReason", (function() {
				return ne
			})), o.d(t, "editRemovalReasonPending", (function() {
				return de
			})), o.d(t, "editRemovalReasonSuccess", (function() {
				return ae
			})), o.d(t, "editRemovalReasonFailed", (function() {
				return ie
			})), o.d(t, "editRemovalReason", (function() {
				return ce
			})), o.d(t, "deleteRemovalReasonPending", (function() {
				return ue
			})), o.d(t, "deleteRemovalReasonSuccess", (function() {
				return le
			})), o.d(t, "deleteRemovalReasonFailed", (function() {
				return me
			})), o.d(t, "deleteRemovalReason", (function() {
				return be
			})), o.d(t, "removedItemsSelected", (function() {
				return pe
			})), o.d(t, "fetchReasonsAndOpenModal", (function() {
				return fe
			})), o.d(t, "removalReasonSubmittedPending", (function() {
				return Oe
			})), o.d(t, "removalReasonSubmittedSuccess", (function() {
				return je
			})), o.d(t, "removalReasonSubmittedFailed", (function() {
				return ve
			})), o.d(t, "removalReasonMessagePending", (function() {
				return _e
			})), o.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return he
			})), o.d(t, "removalReasonPublicMessageSuccess", (function() {
				return ge
			})), o.d(t, "removalReasonMessageFailed", (function() {
				return Se
			})), o.d(t, "submitRemovalReason", (function() {
				return Re
			})), o.d(t, "submitBulkRemovalReason", (function() {
				return Ee
			}));
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/initializeClient/installReducer.ts"),
				n = o("./node_modules/redux/es/redux.js");
			const d = "REMOVALREASONS__LOAD_SUCCESS",
				a = "REMOVALREASONS__ADD_PENDING",
				i = "REMOVALREASONS__ADD_SUCCESS",
				c = "REMOVALREASONS__ADD_FAILED",
				u = "REMOVALREASONS__EDIT_PENDING",
				l = "REMOVALREASONS__EDIT_SUCCESS",
				m = "REMOVALREASONS__EDIT_FAILED",
				b = "REMOVALREASONS__DELETE_PENDING",
				p = "REMOVALREASONS__DELETE_SUCCESS",
				f = "REMOVALREASONS__DELETE_FAILED";
			var O = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case d:
					case a:
					case i:
					case u:
					case l:
					case b:
					case p:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case c:
					case m:
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
						case a:
						case u:
						case b:
							return !0;
						case d:
						case "REMOVALREASONS__LOAD_FAILED":
						case i:
						case c:
						case l:
						case m:
						case p:
						case f:
							return !1;
						default:
							return e
					}
				},
				v = Object(n.c)({
					error: O,
					pending: j
				});
			const _ = {};
			var h = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d: {
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
					case i:
					case l: {
						const {
							reason: o
						} = t.payload;
						return {
							...e,
							[o.id]: o
						}
					}
					case p: {
						const {
							reasonId: o
						} = t.payload, {
							[o]: s,
							...r
						} = e;
						return r
					}
					default:
						return e
				}
			};
			const g = {};
			var S = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d: {
						const {
							subredditId: o,
							response: s
						} = t.payload, {
							order: r
						} = s;
						return {
							...e,
							[o]: r
						}
					}
					case i: {
						const {
							subredditId: o,
							reason: s
						} = t.payload;
						return {
							...e,
							[o]: [...e[o], s.id]
						}
					}
					case p: {
						const {
							subredditId: o,
							reasonId: s
						} = t.payload, r = [...e[o]].filter(e => e !== s);
						return {
							...e,
							[o]: r
						}
					}
					default:
						return e
				}
			};
			var R = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				E = Object(n.c)({
					api: v,
					models: h,
					reasonOrder: S,
					removedItemIds: R
				}),
				k = o("./src/lib/constants/index.ts"),
				y = o("./src/lib/makeActionCreator/index.ts"),
				A = o("./src/lib/makeCommentsPageKey/index.ts"),
				x = o("./src/lib/makeDraftKey/index.ts"),
				I = o("./src/reddit/actions/bulkActions/index.ts"),
				P = o("./src/reddit/actions/comment/index.ts"),
				C = o("./src/reddit/actions/comment/authoring.ts"),
				M = o("./src/reddit/actions/comment/moderation.ts"),
				N = o("./src/reddit/actions/modal.ts"),
				L = o("./src/reddit/actions/post.ts"),
				w = o("./src/reddit/actions/toaster.ts"),
				D = o("./src/reddit/constants/modals.ts"),
				T = o("./src/lib/makeApiRequest/index.ts"),
				F = o("./src/lib/omitHeaders/index.ts"),
				Q = o("./src/reddit/constants/headers.ts"),
				q = o("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const B = (e, t) => Object(T.a)(Object(F.a)(e, [Q.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: k.mb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				U = (e, t, o) => Object(T.a)(Object(F.a)(e, [Q.a]), {
					endpoint: Object(q.a)(`${e.apiUrl}/api/v1/modactions/removal_${o}_message/`),
					method: k.mb.POST,
					type: "json",
					data: t
				});
			var H = o("./src/reddit/helpers/isPost.ts"),
				V = o("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				G = o("./src/reddit/helpers/routeKey/index.ts"),
				$ = o("./src/reddit/models/ModQueue/index.ts"),
				K = o("./src/reddit/models/PostDraft/index.ts"),
				z = o("./src/reddit/models/RemovalReason/index.ts"),
				W = o("./src/reddit/models/Toast/index.ts"),
				J = o("./src/reddit/selectors/comments.ts"),
				Y = o("./src/reddit/selectors/platform.ts");
			Object(r.a)({
				features: {
					removalReasons: E
				}
			});
			const Z = Object(y.a)("REMOVALREASONS__LOAD_PENDING"),
				X = Object(y.a)(d),
				ee = Object(y.a)("REMOVALREASONS__LOAD_FAILED"),
				te = e => async (t, o, s) => {
					let {
						apiContext: r
					} = s;
					const n = o().subreddits.models[e].name;
					t(Z());
					const d = await ((e, t) => Object(T.a)(Object(F.a)(e, [Q.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: k.mb.GET
					}))(r(), n);
					d.ok ? t(X({
						subredditId: e,
						response: d.body
					})) : t(ee(d.error))
				}, oe = Object(y.a)(a), se = Object(y.a)(i), re = Object(y.a)(c), ne = (e, t) => async (o, r, n) => {
					let {
						apiContext: d
					} = n;
					const a = r().subreddits.models[e].name;
					o(oe());
					const i = await ((e, t, o) => Object(T.a)(Object(F.a)(e, [Q.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: k.mb.POST,
						data: o
					}))(d(), a, t);
					if (i.ok) {
						const {
							id: r
						} = i.body, n = {
							...t,
							id: r
						};
						o(se({
							subredditId: e,
							reason: n
						})), o(Object(w.f)({
							kind: W.b.SuccessMod,
							text: s.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else o(re(i.error))
				}, de = Object(y.a)(u), ae = Object(y.a)(l), ie = Object(y.a)(m), ce = (e, t) => async (o, r, n) => {
					let {
						apiContext: d
					} = n;
					const a = r().subreddits.models[e].name;
					o(de());
					const i = await ((e, t, o) => Object(T.a)(Object(F.a)(e, [Q.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${o.id}`,
						method: k.mb.PUT,
						data: {
							message: o.message,
							title: o.title
						}
					}))(d(), a, t);
					i.ok ? (o(ae({
						subredditId: e,
						reason: t
					})), o(Object(w.f)({
						kind: W.b.SuccessMod,
						text: s.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : o(ie(i.error))
				}, ue = Object(y.a)(b), le = Object(y.a)(p), me = Object(y.a)(f), be = (e, t) => async (o, r, n) => {
					let {
						apiContext: d
					} = n;
					const a = r().subreddits.models[e].name;
					o(ue());
					const i = await ((e, t, o) => Object(T.a)(Object(F.a)(e, [Q.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${o}`,
						method: k.mb.DELETE
					}))(d(), a, t);
					i.ok ? (o(le({
						subredditId: e,
						reasonId: t
					})), o(Object(w.f)({
						kind: W.b.SuccessMod,
						text: s.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : o(me(i.error))
				}, pe = Object(y.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), fe = (e, t) => async (o, s, r) => {
					let {
						apiContext: n
					} = r;
					const d = s();
					d.features.removalReasons.reasonOrder[e] && d.features.removalReasons.reasonOrder[e].length > 0 || o(te(e)), o(pe({
						subredditId: e,
						itemIds: t
					})), o(Object(N.i)(D.a.ADD_REMOVAL_REASON))
				}, Oe = Object(y.a)("REMOVALREASONS__SUBMIT_PENDING"), je = Object(y.a)("REMOVALREASONS__SUBMIT_SUCCESS"), ve = Object(y.a)("REMOVALREASONS__SUBMIT_FAILED"), _e = Object(y.a)("REMOVALREASONS__MESSAGE_PENDING"), he = Object(y.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), ge = Object(y.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Se = Object(y.a)("REMOVALREASONS__MESSAGE_FAILED"), Re = (e, t, o, s, r, n) => async (d, a, i) => {
					let {
						apiContext: c
					} = i;
					const u = a(),
						l = u.user.account && u.user.account.displayText,
						m = e[0],
						b = Object(H.a)(m) ? z.e.Post : z.e.Comment,
						p = b === z.e.Post ? u.posts.models[m] : u.features.comments.models[m],
						f = b === z.e.Post ? L.S : P.j;
					if (!p || !l) return !1;
					d(Oe()), d(f({
						[m]: {
							modNote: r,
							modRemovalReason: t && t.title,
							modReasonBy: l
						}
					}));
					const O = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						j = await B(c(), O);
					if (j.ok) {
						if (d(je()), t) {
							d(_e());
							const r = {
									itemId: e,
									message: o,
									title: t.title,
									isLocked: n,
									type: s
								},
								a = await U(c(), Object(z.h)(r, b), b);
							if (a.ok) {
								if ([z.f.Public, z.f.PublicAsSubreddit].includes(s)) {
									if (d(ge()), a.body) {
										const e = Object(V.a)(a.body),
											t = {
												comment: e,
												parentId: m
											},
											o = Object(Y.f)(u),
											s = u.platform.currentPage && u.platform.currentPage.routeMatch;
										let r = o && s && Object(G.a)(s, u, u.posts.models[e.postId]);
										if (r || (r = Object(A.a)(e.postId, null, {
												sort: k.v,
												hasSortParam: !0
											})), b === z.e.Post) {
											const o = Object(x.a)(K.c.replyToPost, m);
											d(Object(C.r)({
												...t,
												headCommentId: Object(J.w)(u, {
													commentsPageKey: r
												}),
												commentsPageKey: r,
												draftKey: o
											}));
											const s = u.postStickiedComments.data[m];
											d(Object(M.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: r
											})), s && s !== e.id && d(Object(P.j)({
												[s]: {
													isStickied: !1
												}
											}))
										} else if (b === z.e.Comment) {
											const e = Object(x.a)(K.c.replyToComment, p.id),
												o = Object(J.j)(u, {
													commentId: m,
													commentsPageKey: r
												});
											d(Object(C.p)({
												...t,
												parentCommentId: m,
												commentsPageKey: r,
												draftKey: e,
												depth: o + 1
											}))
										}
									}
								} else d(he());
								return !0
							}
							return d(Se(a.error)), !1
						}
					} else d(ve(j.error)), d(f({
						[m]: {
							modNote: p.modNote,
							modRemovalReason: p.modRemovalReason,
							modReasonBy: p.modReasonBy
						}
					}));
					return !1
				}, Ee = (e, t, o, r, n) => async (d, a, i) => {
					let {
						apiContext: c
					} = i;
					const u = a(),
						l = u.user.account && u.user.account.displayText;
					if (!l) return;
					d(Oe());
					const m = Object(w.f)({
							kind: W.b.SuccessMod,
							text: s.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [s.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						b = {
							itemIds: e,
							modNote: n,
							reasonId: t ? t.id : null
						},
						p = await B(c(), b);
					if (p.ok) {
						const s = {
							ids: e,
							operation: $.a.RemovalReason,
							username: l,
							options: {
								modNote: n,
								removalReason: t && t.title
							}
						};
						if (d(Object(I.b)(s)), t) {
							const s = {
									itemId: e,
									message: o,
									title: t.title,
									type: r
								},
								n = await U(c(), Object(z.h)(s, z.e.Bulk), z.e.Bulk);
							n.ok ? (d(he()), d(m)) : d(Se(n.error))
						} else d(m)
					} else d(ve(p.error))
				}
		},
		"./src/reddit/components/ModQueueList/PostSortDropdown.m.less": function(e, t, o) {
			e.exports = {
				Row: "_3h6zBMaGJuwN_qOmhUyv7E",
				row: "_3h6zBMaGJuwN_qOmhUyv7E"
			}
		},
		"./src/reddit/components/ModQueueList/PostSortDropdown.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return s
			}));
			var s, r = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/react/index.js"),
				d = o.n(n),
				a = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				c = o("./src/lib/addQueryParams/index.ts"),
				u = o("./src/lib/filterQueryParams/index.ts"),
				l = o("./src/lib/lessComponent.tsx"),
				m = o("./src/reddit/controls/Dropdown/Row.tsx"),
				b = o("./src/reddit/controls/InternalLink/index.tsx"),
				p = o("./src/reddit/selectors/meta.ts"),
				f = o("./src/reddit/components/ModQueueList/PostSortDropdown.m.less"),
				O = o.n(f);
			! function(e) {
				e.NewestFirst = "newest", e.OldestFirst = "oldest", e.MostReportedFirst = "most_reported"
			}(s || (s = {}));
			const j = l.a.wrapped(m.b, "Row", O.a),
				v = Object(i.c)({
					currentPage: e => e.platform.currentPage,
					origin: p.k
				}),
				_ = Object(a.b)(v);
			t.b = _(e => d.a.createElement("div", {
				className: e.className
			}, d.a.createElement(b.default, {
				onClick: e.sendEventWithName("modqueue_sort_newest"),
				to: Object(u.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page", "sort"])
			}, d.a.createElement(j, {
				displayText: r.fbt._("Newest first", null, {
					hk: "4buqk8"
				}),
				isSelected: !e.postSort
			})), d.a.createElement(b.default, {
				onClick: e.sendEventWithName("modqueue_sort_oldest"),
				to: Object(c.a)(Object(u.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
					sort: s.OldestFirst
				})
			}, d.a.createElement(j, {
				displayText: r.fbt._("Oldest first", null, {
					hk: "1x9Jdr"
				}),
				isSelected: e.postSort === s.OldestFirst
			})), d.a.createElement(b.default, {
				onClick: e.sendEventWithName("modqueue_sort_most_reports"),
				to: Object(c.a)(Object(u.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
					sort: s.MostReportedFirst
				})
			}, d.a.createElement(j, {
				displayText: r.fbt._("Most reported first", null, {
					hk: "2ac4Mt"
				}),
				isSelected: e.postSort === s.MostReportedFirst
			}))))
		},
		"./src/reddit/helpers/makeModQueueListingKey/index.ts": function(e, t, o) {
			"use strict";
			var s = o("./src/reddit/components/ModQueueList/PostSortDropdown.tsx");
			t.a = e => {
				const {
					profile: t,
					subreddit: o
				} = e;
				let r = o && `r/${o}` || t && `u/${t}` || "all";
				return "comments" !== e.onlyOfType && "links" !== e.onlyOfType && "chat_comments" !== e.onlyOfType || (r += `--[${e.onlyOfType}]`), e.sort !== s.a.NewestFirst && (r += `--[${e.sort}]`), r
			}
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return r
			})), o.d(t, "d", (function() {
				return n
			})), o.d(t, "a", (function() {
				return d
			})), o.d(t, "b", (function() {
				return a
			})), o.d(t, "f", (function() {
				return i
			})), o.d(t, "e", (function() {
				return c
			})), o.d(t, "g", (function() {
				return u
			})), o.d(t, "h", (function() {
				return l
			}));
			var s = o("./src/reddit/helpers/isPost.ts");
			const r = 50,
				n = 50,
				d = 1e4,
				a = 100;
			var i, c;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public", e.PublicAsSubreddit = "public_as_subreddit"
			}(i || (i = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(c || (c = {}));
			const u = e => 1 === e.length ? Object(s.a)(e[0]) ? c.Post : c.Comment : c.Bulk,
				l = (e, t) => {
					return {
						[t === c.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type,
						lock_comment: e.isLocked
					}
				}
		},
		"./src/reddit/selectors/modQueue.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return u
			})), o.d(t, "c", (function() {
				return l
			})), o.d(t, "e", (function() {
				return m
			})), o.d(t, "g", (function() {
				return b
			})), o.d(t, "a", (function() {
				return p
			})), o.d(t, "f", (function() {
				return f
			})), o.d(t, "b", (function() {
				return O
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = o("./src/lib/constants/index.ts"),
				r = o("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				n = o("./src/lib/objectSelector/index.ts"),
				d = o("./src/lib/initializeClient/installReducer.ts"),
				a = o("./src/reddit/reducers/features/comments/index.ts"),
				i = o("./src/reddit/reducers/pages/modHub/index.ts");
			Object(d.a)({
				features: {
					comments: a.a
				},
				pages: {
					modHub: i.a
				}
			});
			const c = (e, t) => Object(r.a)({
					onlyOfType: t.queryParams.only,
					profile: t.profileName,
					sort: t.queryParams.sort,
					subreddit: t.subredditName
				}),
				u = Object(n.a)((e, t) => {
					var o, s, r;
					const {
						pageName: n,
						page: d
					} = t, a = c(0, t);
					if (!(null === (r = null === (s = null === (o = e.pages.modHub.modQueue[n]) || void 0 === o ? void 0 : o.itemOrder) || void 0 === s ? void 0 : s[a]) || void 0 === r ? void 0 : r[d])) return;
					const i = e.pages.modHub.modQueue[n].itemOrder[a][d];
					return i ? i.map(t => e.posts.models[t] || e.features.comments.models[t]) : []
				}),
				l = (e, t) => {
					var o;
					const {
						pageName: s
					} = t;
					return null === (o = e.pages.modHub.modQueue[s]) || void 0 === o || !o.api || e.pages.modHub.modQueue[s].api.pending
				},
				m = (e, t) => {
					var o;
					const s = c(0, t);
					return null === (o = e.pages.modHub.modQueue[t.pageName]) || void 0 === o ? void 0 : o.loadMore[s]
				},
				b = e => Object.keys(e.pages.modHub.modQueue.bulkAction.selectedItems),
				p = e => e.pages.modHub.modQueue.bulkAction.api.pending,
				f = e => e.pages.modHub.modQueue.moderatedCommunitiesOrder.data,
				O = e => {
					const t = e.platform && e.platform.currentPage;
					return t && t.meta && (t.meta.name === s.Qb.MODERATION_PAGES || t.meta.name === s.Qb.MODQUEUE_PAGES)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueue.30d1b45685ae2c57d1a7.js.map