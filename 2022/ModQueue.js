// https://www.redditstatic.com/desktop2x/ModQueue.e7b5732c6942780549b8.js
// Retrieved at 8/18/2022, 6:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueue"], {
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return a
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/bulkActions/constants.ts");
			const n = Object(o.a)(r.c),
				d = Object(o.a)(r.b),
				a = Object(o.a)(r.a)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return g
			})), s.d(t, "c", (function() {
				return S
			})), s.d(t, "f", (function() {
				return R
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
				r = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/lib/makeCommentsPageKey/index.ts"),
				a = s("./src/reddit/actions/modal.ts"),
				i = s("./src/reddit/actions/shortcuts/utils.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/reddit/constants/modals.ts"),
				l = s("./src/reddit/endpoints/comment/index.tsx"),
				m = s("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				b = s("./src/reddit/models/Reportable/index.ts"),
				p = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				O = s("./src/reddit/selectors/experiments/cnc/index.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/actions/comment/index.ts"),
				_ = s("./src/reddit/actions/comment/constants.ts");
			const h = Object(n.a)(_.p),
				g = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					s().features.comments.models[e] && (await Object(l.k)(r(), e)).ok && t((e => async t => {
						t(h({
							commentId: e
						}))
					})(e))
				}, S = e => async (t, s, r) => {
					let {
						apiContext: n
					} = r;
					if (!Object(v.Q)(s())) return void t(Object(a.i)(u.a.LOGIN_MODAL_ID));
					const d = s().features.comments.models[e];
					if (!d) return;
					const i = d.isLocked ? l.m : l.f;
					t(Object(j.j)({
						[e]: {
							isLocked: !d.isLocked
						}
					})), (await i(n(), e)).ok ? t(Object(c.f)({
						kind: p.b.SuccessMod,
						text: d.isLocked ? o.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : o.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(j.j)({
						[e]: {
							isLocked: d.isLocked
						}
					}))
				}, R = Object(n.a)(_.I), k = e => async (t, s, r) => {
					let {
						apiContext: n,
						gqlContext: d
					} = r;
					const a = s(),
						u = a.features.comments.models[e],
						m = a.user.account ? a.user.account.displayText : null;
					u && m && (t(Object(j.j)({
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
						text: o.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(j.j)({
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
				}, E = (e, t) => async (s, r, n) => {
					let {
						apiContext: d,
						gqlContext: a
					} = n;
					const u = r(),
						m = u.features.comments.models[e],
						b = u.user.account ? u.user.account.displayText : null;
					m && b && (s(Object(j.j)({
						[e]: {
							approvedBy: null,
							bannedBy: b,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (Object(O.a)(u) ? await Object(l.h)(a(), e, t) : await Object(l.i)(d(), e, t)).ok ? s(Object(c.f)({
						kind: p.b.SuccessMod,
						text: t ? o.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : o.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : s(Object(j.j)({
						[e]: {
							approvedBy: m.approvedBy,
							bannedBy: m.bannedBy,
							isApproved: m.isApproved,
							isRemoved: m.isRemoved,
							isSpam: m.isSpam
						}
					})), Object(i.d)())
				}, y = e => async (t, s, r) => {
					let {
						apiContext: n
					} = r;
					const d = s().features.comments.models[e];
					if (!d) return;
					const a = d.ignoreReports ? l.l : l.e;
					t(Object(j.j)({
						[e]: {
							ignoreReports: !d.ignoreReports
						}
					})), (await a(n(), e)).ok ? t(Object(c.f)({
						kind: p.b.SuccessMod,
						text: d.ignoreReports ? o.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : o.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(j.j)({
						[e]: {
							ignoreReports: d.ignoreReports
						}
					}))
				}, A = (e, t, s) => async (n, d, a) => {
					let {
						gqlContext: i
					} = a;
					const u = Object(f.b)(d(), {
						commentId: e
					});
					if (!u) return;
					const l = s === r.fc.Snoozed,
						O = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(m.a)(i(), {
							input: O
						})).ok) n(Object(j.j)({
						[e]: {
							userReports: Object(b.a)(u.userReports, t, l)
						}
					}));
					else {
						const e = Object(c.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), p.b.Error);
						n(Object(c.f)(e))
					}
				}, x = (e, t, s) => async (o, n, a) => {
					let {
						apiContext: i,
						gqlContext: c
					} = a;
					const u = n(),
						m = u.features.comments.models[e];
					if (!m) return;
					const b = m.postId,
						p = u.postStickiedComments.data[b];
					o(Object(j.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === r.H.ADMIN,
							isMod: t === r.H.MODERATOR,
							isStickied: !!s
						}
					})), s && p && p !== e && o(Object(j.j)({
						[p]: {
							isStickied: !1
						}
					}));
					const f = Object(l.c)(c(), e, t),
						O = Object(l.d)(c(), e, !!s),
						v = [f];
					(s || !s && e === p) && v.push(O), (await Promise.all(v)).every(e => e.ok) ? s && o(R({
						id: e,
						postId: b,
						commentsPageKey: Object(d.a)(b, null, {
							sort: r.u.CONFIDENCE,
							...u.platform.currentPage.queryParams
						})
					})) : (o(Object(j.j)({
						[e]: {
							distinguishType: m.distinguishType,
							isAdmin: m.isAdmin,
							isMod: m.isMod,
							isStickied: m.isStickied
						}
					})), o(Object(j.j)({
						[p]: {
							isStickied: u.features.comments.models[p].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/modQueue/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return X
			})), s.d(t, "d", (function() {
				return se
			})), s.d(t, "f", (function() {
				return de
			})), s.d(t, "a", (function() {
				return ae
			})), s.d(t, "b", (function() {
				return ie
			})), s.d(t, "c", (function() {
				return ce
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/reddit/actions/bulkActions/index.ts"),
				a = s("./src/reddit/actions/removalReasons/index.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/endpoints/modQueue/index.ts"),
				u = s("./src/reddit/endpoints/user/index.ts"),
				l = s("./src/reddit/helpers/correlationIdTracker.ts"),
				m = s("./src/reddit/helpers/flair.ts"),
				b = s("./node_modules/Base64/base64.js"),
				p = s("./src/reddit/components/ModQueueList/PostSortDropdown.tsx"),
				f = s("./src/reddit/helpers/isPost.ts"),
				O = s("./src/reddit/selectors/commentSelector.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				j = s("./src/redditGQL/types.ts"),
				_ = s("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				h = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				g = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				S = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const R = {
					[r.sb.Edited]: j.v.Edited,
					[r.sb.Modqueue]: j.v.Mod,
					[r.sb.Reports]: j.v.Reported,
					[r.sb.Spam]: j.v.Removed,
					[r.sb.Unmoderated]: j.v.Unmoderated
				},
				k = {
					comments: j.t.Comment,
					links: j.t.Post,
					chat_comments: j.t.ChatComment
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
				const d = {};
				o.after && (d[o.sort === p.a.OldestFirst ? "before" : "after"] = function(e, t) {
					const s = Object(f.a)(t) ? Object(v.G)(e, {
						postId: t
					}) : Object(O.b)(e, {
						commentId: t
					});
					if (s) return Object(b.btoa)(`${s.id}|${s.created}`)
				}(r, o.after));
				const a = {};
				return o.sort === p.a.OldestFirst ? a.last = 25 : a.first = 25, {
					queueType: R[s],
					moderatedAfter: o.moderatedAfter,
					...a,
					...!!n && {
						itemTypes: n
					},
					...!!o.subreddit && {
						subredditNames: Array.isArray(o.subreddit) ? o.subreddit : [o.subreddit]
					},
					...!!o.profile && {
						subredditIds: [o.profile]
					},
					sort: o.sort === p.a.MostReportedFirst ? j.u.SortReports : j.u.SortDate,
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
					identity: s
				} = e;
				var o, r, n, d;
				const a = {
					posts: {},
					comments: {},
					reports: {},
					modqueue: [],
					authorFlair: {},
					moderatedAfter: (null === (o = null == s ? void 0 : s.redditor.moderatedSubreddits) || void 0 === o ? void 0 : o.pageInfo.hasNextPage) ? null === (r = null == s ? void 0 : s.redditor.moderatedSubreddits) || void 0 === r ? void 0 : r.pageInfo.endCursor : null,
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
				const i = null === (d = null === (n = null == s ? void 0 : s.redditor.moderatedSubreddits) || void 0 === n ? void 0 : n.edges) || void 0 === d ? void 0 : d.reduce((e, t) => {
					var s;
					if (!(null === (s = null == t ? void 0 : t.node) || void 0 === s ? void 0 : s.modPermissions)) return e;
					const o = t.node.modPermissions;
					return e.moderatingSubreddits[t.node.id] = A(o), e.subreddits[t.node.id] = Object(S.a)(t.node), e
				}, {
					subreddits: {},
					moderatingSubreddits: {}
				});
				return a.moderatingSubreddits = (null == i ? void 0 : i.moderatingSubreddits) || {}, a.subreddits = (null == i ? void 0 : i.subreddits) || {}, t.edges.forEach(e => {
					var t, s;
					if (!e) return;
					const {
						node: o
					} = e;
					if (!o) return;
					const {
						__typename: r,
						subredditInfo: n
					} = o;
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
						} = o;
						if (!e) return;
						const s = Object(_.a)(e);
						a.comments[s.id] = s, a.listingOrder.push({
							id: s.id,
							type: "comment"
						}), a.modqueue.push(s.id);
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
						s.modReports.forEach(e => {
							c.push({
								type: "moderator",
								reason: e[0],
								reporter: e[1]
							})
						}), s.userReports.forEach(e => {
							c.push({
								type: "user",
								reason: e[0]
							})
						}), a.reports[s.id] = c
					}
					if (r === y.Post) {
						const {
							postInfo: e
						} = o;
						if (!e) return;
						const t = Object(g.f)(e);
						a.posts[t.id] = t, a.listingOrder.push({
							id: t.id,
							type: "post"
						}), a.modqueue.push(t.id);
						const {
							authorInfo: r,
							authorFlair: n
						} = e, i = n ? null === (s = Object(h.a)(n)) || void 0 === s ? void 0 : s[0] : null;
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
			var I = s("./src/reddit/models/ModQueue/index.ts"),
				P = s("./src/reddit/models/Toast/index.ts"),
				C = s("./src/reddit/selectors/modQueue.ts"),
				M = s("./src/reddit/selectors/subreddit.ts"),
				N = s("./src/reddit/selectors/telemetry.ts"),
				L = s("./src/telemetry/index.ts"),
				w = s("./src/lib/initializeClient/installReducer.ts"),
				D = s("./src/reddit/reducers/pages/modHub/index.ts"),
				T = s("./src/reddit/actions/modQueue/constants.ts");
			Object(w.a)({
				pages: {
					modHub: D.a
				}
			});
			const F = Object(n.a)(T.j),
				Q = Object(n.a)(T.i),
				q = Object(n.a)(T.h),
				U = Object(n.a)(T.g),
				B = Object(n.a)(T.f),
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
				X = (e, t, s) => async (n, d, a) => {
					let {
						apiContext: l,
						gqlContext: m
					} = a;
					var b;
					let p, f, O;
					switch (t) {
						case r.sb.Edited:
							p = U, f = H, O = B;
							break;
						case r.sb.Modqueue:
							p = F, f = q, O = Q;
							break;
						case r.sb.Reports:
							p = V, f = $, O = G;
							break;
						case r.sb.Spam:
							p = K, f = W, O = z;
							break;
						case r.sb.Unmoderated:
							p = J, f = Z, O = Y;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					if (n(p()), s.profile) {
						const e = null === (b = (await Object(u.b)(l(), s.profile)).body[s.profile]) || void 0 === b ? void 0 : b.profileId;
						s.profile = e
					}
					const v = E({
							getState: d,
							queueType: t,
							options: s
						}),
						j = await Object(c.b)(m(), v);
					if (!j.ok) return n(f(j.error)), void n(Object(i.f)({
						kind: P.b.Error,
						text: o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}));
					const _ = x(j.body.data);
					n(O({
						listingKey: e,
						page: `${s.page||I.b}`,
						response: _
					}))
				}, ee = Object(n.a)(T.k), te = Object(n.a)(T.b), se = e => async (t, s, r) => {
					let {
						gqlContext: n
					} = r;
					const d = s(),
						a = d.pages.modHub.modQueue.moderatedCommunitiesOrder.after,
						u = d.pages.modHub.modQueue.moderatedCommunitiesOrder.pending,
						l = d.pages.modHub.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: m
						} = d.platform.currentPage.urlParams;
					if (e && u || l || !a) return;
					const b = E({
							getState: s,
							queueType: m,
							options: {
								moderatedAfter: a
							}
						}),
						p = await Object(c.b)(n(), b);
					if (!p.ok) return void t(Object(i.f)({
						kind: P.b.Error,
						text: o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}));
					const f = x(p.body.data);
					t(ee(f)), f.moderatedAfter ? t(se()) : t(te())
				}, oe = Object(n.a)(T.t), re = Object(n.a)(T.s), ne = Object(n.a)(T.r), de = (e, t, s) => async (r, n, u) => {
					let {
						apiContext: b
					} = u;
					r(Object(d.c)());
					const p = n(),
						O = Object(C.g)(p),
						v = p.user.account && p.user.account.displayText;
					Object(l.d)(l.a.ModQueue);
					const j = Object(l.c)(l.a.ModQueue);
					Object(L.a)({
						source: "bulk_mod_action_menu",
						action: "click",
						noun: e,
						...N.n(p),
						actionInfo: N.d(p, {
							count: O.length,
							paneName: p.platform.currentPage ? p.platform.currentPage.urlParams.pageName : void 0
						}),
						screen: N.ab(p),
						correlationId: j
					});
					for (let t = 0; t < O.length; t++) {
						const s = O[t];
						let o = e;
						[I.a.Approve, I.a.Remove, I.a.Spam].includes(e) && (Object(f.a)(s) ? o += "_link" : o += "_comment"), Object(L.a)({
							source: "bulk_mod_action",
							action: "click",
							noun: o,
							...N.n(p),
							actionInfo: N.d(p, {
								count: O.length,
								paneName: p.platform.currentPage ? p.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: N.h(p, s),
							post: N.J(p, s),
							profile: N.U(p, s),
							screen: N.ab(p),
							subreddit: N.lb(p, s),
							correlationId: j
						})
					}
					Object(l.b)(l.a.ModQueue);
					const _ = {
						ids: O
					};
					t && (_.text = Object(m.g)(t) || "", _.flairTemplateId = ""), s && (_.cssClass = s, _.flairTemplateId = s);
					const h = await Object(c.a)(b(), e, _);
					if (h.ok) {
						r(Object(d.b)({
							...h.body,
							operation: e,
							ids: O,
							username: v,
							options: {
								flair: t
							}
						}));
						const s = function(e, t) {
							switch (e) {
								case I.a.Approve:
									return o.fbt._({
										"*": "{number} posts/comments have been approved",
										_1: "1 post/comment has been approved"
									}, [o.fbt._plural(t, "number")], {
										hk: "2kKhSf"
									});
								case I.a.Flair:
									return o.fbt._({
										"*": "{number} posts/comments have had flair applied",
										_1: "1 post/comment has had flair applied"
									}, [o.fbt._plural(t, "number")], {
										hk: "3syB5O"
									});
								case I.a.IgnoreReports:
									return o.fbt._({
										"*": "{number} posts/comments have had their reports ignored",
										_1: "1 post/comment has had their reports ignored"
									}, [o.fbt._plural(t, "number")], {
										hk: "2WfE4g"
									});
								case I.a.Lock:
									return o.fbt._({
										"*": "{number} posts/comments have been locked",
										_1: "1 post/comment has been locked"
									}, [o.fbt._plural(t, "number")], {
										hk: "45oMbv"
									});
								case I.a.MarkNSFW:
									return o.fbt._({
										"*": "{number} posts/comments have been marked NSFW",
										_1: "1 post/comment has been marked NSFW"
									}, [o.fbt._plural(t, "number")], {
										hk: "oPsQr"
									});
								case I.a.RemovalReason:
									return o.fbt._({
										"*": "{number} posts/comments have had removal reasons applied",
										_1: "1 post/comment has had removal reasons applied"
									}, [o.fbt._plural(t, "number")], {
										hk: "35Tosn"
									});
								case I.a.Remove:
									return o.fbt._({
										"*": "{number} posts/comments have been removed",
										_1: "1 post/comment has been removed"
									}, [o.fbt._plural(t, "number")], {
										hk: "B1ZbE"
									});
								case I.a.Spam:
									return o.fbt._({
										"*": "{number} posts/comments have been marked as spam",
										_1: "1 post/comment has been marked as spam"
									}, [o.fbt._plural(t, "number")], {
										hk: "3OoNfp"
									});
								case I.a.Spoiler:
									return o.fbt._({
										"*": "{number} posts/comments have been marked as spoilers",
										_1: "1 post/comment has been marked as spoilers"
									}, [o.fbt._plural(t, "number")], {
										hk: "1DFW5M"
									});
								case I.a.UnignoreReports:
									return o.fbt._({
										"*": "{number} posts/comments have had their reports un-ignored",
										_1: "1 post/comment has had their reports un-ignored"
									}, [o.fbt._plural(t, "number")], {
										hk: "303Hpb"
									});
								case I.a.Unlock:
									return o.fbt._({
										"*": "{number} posts/comments have been unlocked",
										_1: "1 post/comment has been unlocked"
									}, [o.fbt._plural(t, "number")], {
										hk: "5gUht"
									});
								case I.a.UnmarkNSFW:
									return o.fbt._({
										"*": "{number} posts/comments have been un-marked as NSFW",
										_1: "1 post/comment has been un-marked as NSFW"
									}, [o.fbt._plural(t, "number")], {
										hk: "3oSSST"
									});
								case I.a.Unspoiler:
								case I.a.Unspoiler:
									return o.fbt._({
										"*": "{number} posts/comments have been un-marked as spoilers",
										_1: "1 post/comment has been un-marked as spoilers"
									}, [o.fbt._plural(t, "number")], {
										hk: "3lHoNI"
									})
							}
						}(e, O.length);
						if (e !== I.a.Approve && e !== I.a.Flair) {
							let t, n;
							const u = p.platform.currentPage && p.platform.currentPage.queryParams && p.platform.currentPage.queryParams.subreddit,
								l = u && Object(M.G)(p, u);
							e === I.a.Remove && l && O.length > 1 && (t = o.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), n = Object(a.fetchReasonsAndOpenModal)(l, O));
							const m = Object(i.e)(s, P.b.Undo, o.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, s) => {
								let {
									apiContext: r
								} = s;
								e(oe());
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
									text: o.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, n);
							r(Object(i.f)(m))
						} else {
							const e = Object(i.e)(s, P.b.SuccessMod);
							r(Object(i.f)(e))
						}
					} else {
						r(Object(d.a)(h.error));
						const e = Object(i.e)(o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), P.b.Error);
						r(Object(i.f)(e))
					}
				}, ae = Object(n.a)(T.a), ie = Object(n.a)(T.c), ce = Object(n.a)(T.d)
		},
		"./src/reddit/actions/pages/modQueue/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "modQueuePageRequested", (function() {
				return f
			}));
			var o = s("./node_modules/lodash/get.js"),
				r = s.n(o),
				n = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/pageTitle/index.ts"),
				a = s("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				i = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				c = s("./src/reddit/helpers/trackers/screenview.ts"),
				u = s("./src/reddit/actions/modQueue/index.ts"),
				l = s("./src/reddit/actions/platform.ts"),
				m = s("./src/reddit/selectors/platform.ts"),
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
					profile: v,
					subreddit: j
				} = f, _ = s();
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
				Object(m.p)(_) || await Object(u.e)(h, p, f)(t, s, o);
				const k = s();
				if (r()(k.pages.modHub.modQueue[p].api.error, "type") === n.J.AUTHENTICATION_ERROR) return Object(i.a)(t, k);
				Object(c.j)(k, j, v), t(l.m({
					title: Object(d.g)()
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
				return de
			})), s.d(t, "editRemovalReasonSuccess", (function() {
				return ae
			})), s.d(t, "editRemovalReasonFailed", (function() {
				return ie
			})), s.d(t, "editRemovalReason", (function() {
				return ce
			})), s.d(t, "deleteRemovalReasonPending", (function() {
				return ue
			})), s.d(t, "deleteRemovalReasonSuccess", (function() {
				return le
			})), s.d(t, "deleteRemovalReasonFailed", (function() {
				return me
			})), s.d(t, "deleteRemovalReason", (function() {
				return be
			})), s.d(t, "removedItemsSelected", (function() {
				return pe
			})), s.d(t, "fetchReasonsAndOpenModal", (function() {
				return fe
			})), s.d(t, "removalReasonSubmittedPending", (function() {
				return Oe
			})), s.d(t, "removalReasonSubmittedSuccess", (function() {
				return ve
			})), s.d(t, "removalReasonSubmittedFailed", (function() {
				return je
			})), s.d(t, "removalReasonMessagePending", (function() {
				return _e
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return he
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return ge
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return Se
			})), s.d(t, "submitRemovalReason", (function() {
				return Re
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return ke
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/initializeClient/installReducer.ts"),
				n = s("./node_modules/redux/es/redux.js");
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
			var v = function() {
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
				j = Object(n.c)({
					error: O,
					pending: v
				});
			const _ = {};
			var h = function() {
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
					case i:
					case l: {
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
			const g = {};
			var S = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d: {
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
					case i: {
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
			var R = function() {
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
					api: j,
					models: h,
					reasonOrder: S,
					removedItemIds: R
				}),
				E = s("./src/lib/constants/index.ts"),
				y = s("./src/lib/makeActionCreator/index.ts"),
				A = s("./src/lib/makeCommentsPageKey/index.ts"),
				x = s("./src/lib/makeDraftKey/index.ts"),
				I = s("./src/reddit/actions/bulkActions/index.ts"),
				P = s("./src/reddit/actions/comment/index.ts"),
				C = s("./src/reddit/actions/comment/authoring.ts"),
				M = s("./src/reddit/actions/comment/moderation.ts"),
				N = s("./src/reddit/actions/modal.ts"),
				L = s("./src/reddit/actions/post.ts"),
				w = s("./src/reddit/actions/toaster.ts"),
				D = s("./src/reddit/constants/modals.ts"),
				T = s("./src/lib/makeApiRequest/index.ts"),
				F = s("./src/lib/omitHeaders/index.ts"),
				Q = s("./src/reddit/constants/headers.ts"),
				q = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const U = (e, t) => Object(T.a)(Object(F.a)(e, [Q.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: E.kb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				B = (e, t, s) => Object(T.a)(Object(F.a)(e, [Q.a]), {
					endpoint: Object(q.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`),
					method: E.kb.POST,
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
				X = Object(y.a)(d),
				ee = Object(y.a)("REMOVALREASONS__LOAD_FAILED"),
				te = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					const n = s().subreddits.models[e].name;
					t(Z());
					const d = await ((e, t) => Object(T.a)(Object(F.a)(e, [Q.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: E.kb.GET
					}))(r(), n);
					d.ok ? t(X({
						subredditId: e,
						response: d.body
					})) : t(ee(d.error))
				}, se = Object(y.a)(a), oe = Object(y.a)(i), re = Object(y.a)(c), ne = (e, t) => async (s, r, n) => {
					let {
						apiContext: d
					} = n;
					const a = r().subreddits.models[e].name;
					s(se());
					const i = await ((e, t, s) => Object(T.a)(Object(F.a)(e, [Q.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: E.kb.POST,
						data: s
					}))(d(), a, t);
					if (i.ok) {
						const {
							id: r
						} = i.body, n = {
							...t,
							id: r
						};
						s(oe({
							subredditId: e,
							reason: n
						})), s(Object(w.f)({
							kind: W.b.SuccessMod,
							text: o.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(re(i.error))
				}, de = Object(y.a)(u), ae = Object(y.a)(l), ie = Object(y.a)(m), ce = (e, t) => async (s, r, n) => {
					let {
						apiContext: d
					} = n;
					const a = r().subreddits.models[e].name;
					s(de());
					const i = await ((e, t, s) => Object(T.a)(Object(F.a)(e, [Q.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`,
						method: E.kb.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(d(), a, t);
					i.ok ? (s(ae({
						subredditId: e,
						reason: t
					})), s(Object(w.f)({
						kind: W.b.SuccessMod,
						text: o.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(ie(i.error))
				}, ue = Object(y.a)(b), le = Object(y.a)(p), me = Object(y.a)(f), be = (e, t) => async (s, r, n) => {
					let {
						apiContext: d
					} = n;
					const a = r().subreddits.models[e].name;
					s(ue());
					const i = await ((e, t, s) => Object(T.a)(Object(F.a)(e, [Q.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`,
						method: E.kb.DELETE
					}))(d(), a, t);
					i.ok ? (s(le({
						subredditId: e,
						reasonId: t
					})), s(Object(w.f)({
						kind: W.b.SuccessMod,
						text: o.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(me(i.error))
				}, pe = Object(y.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), fe = (e, t) => async (s, o, r) => {
					let {
						apiContext: n
					} = r;
					const d = o();
					d.features.removalReasons.reasonOrder[e] && d.features.removalReasons.reasonOrder[e].length > 0 || s(te(e)), s(pe({
						subredditId: e,
						itemIds: t
					})), s(Object(N.i)(D.a.ADD_REMOVAL_REASON))
				}, Oe = Object(y.a)("REMOVALREASONS__SUBMIT_PENDING"), ve = Object(y.a)("REMOVALREASONS__SUBMIT_SUCCESS"), je = Object(y.a)("REMOVALREASONS__SUBMIT_FAILED"), _e = Object(y.a)("REMOVALREASONS__MESSAGE_PENDING"), he = Object(y.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), ge = Object(y.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Se = Object(y.a)("REMOVALREASONS__MESSAGE_FAILED"), Re = (e, t, s, o, r, n) => async (d, a, i) => {
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
						v = await U(c(), O);
					if (v.ok) {
						if (d(ve()), t) {
							d(_e());
							const r = {
									itemId: e,
									message: s,
									title: t.title,
									isLocked: n,
									type: o
								},
								a = await B(c(), Object(z.h)(r, b), b);
							if (a.ok) {
								if ([z.f.Public, z.f.PublicAsSubreddit].includes(o)) {
									if (d(ge()), a.body) {
										const e = Object(V.a)(a.body),
											t = {
												comment: e,
												parentId: m
											},
											s = Object(Y.f)(u),
											o = u.platform.currentPage && u.platform.currentPage.routeMatch;
										let r = s && o && Object(G.a)(o, u, u.posts.models[e.postId]);
										if (r || (r = Object(A.a)(e.postId, null, {
												sort: E.v,
												hasSortParam: !0
											})), b === z.e.Post) {
											const s = Object(x.a)(K.c.replyToPost, m);
											d(Object(C.r)({
												...t,
												headCommentId: Object(J.w)(u, {
													commentsPageKey: r
												}),
												commentsPageKey: r,
												draftKey: s
											}));
											const o = u.postStickiedComments.data[m];
											d(Object(M.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: r
											})), o && o !== e.id && d(Object(P.j)({
												[o]: {
													isStickied: !1
												}
											}))
										} else if (b === z.e.Comment) {
											const e = Object(x.a)(K.c.replyToComment, p.id),
												s = Object(J.j)(u, {
													commentId: m,
													commentsPageKey: r
												});
											d(Object(C.p)({
												...t,
												parentCommentId: m,
												commentsPageKey: r,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else d(he());
								return !0
							}
							return d(Se(a.error)), !1
						}
					} else d(je(v.error)), d(f({
						[m]: {
							modNote: p.modNote,
							modRemovalReason: p.modRemovalReason,
							modReasonBy: p.modReasonBy
						}
					}));
					return !1
				}, ke = (e, t, s, r, n) => async (d, a, i) => {
					let {
						apiContext: c
					} = i;
					const u = a(),
						l = u.user.account && u.user.account.displayText;
					if (!l) return;
					d(Oe());
					const m = Object(w.f)({
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
						p = await U(c(), b);
					if (p.ok) {
						const o = {
							ids: e,
							operation: $.a.RemovalReason,
							username: l,
							options: {
								modNote: n,
								removalReason: t && t.title
							}
						};
						if (d(Object(I.b)(o)), t) {
							const o = {
									itemId: e,
									message: s,
									title: t.title,
									type: r
								},
								n = await B(c(), Object(z.h)(o, z.e.Bulk), z.e.Bulk);
							n.ok ? (d(he()), d(m)) : d(Se(n.error))
						} else d(m)
					} else d(je(p.error))
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
				d = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/lib/filterQueryParams/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/controls/Dropdown/Row.tsx"),
				b = s("./src/reddit/controls/InternalLink/index.tsx"),
				p = s("./src/reddit/selectors/meta.ts"),
				f = s("./src/reddit/components/ModQueueList/PostSortDropdown.m.less"),
				O = s.n(f);
			! function(e) {
				e.NewestFirst = "newest", e.OldestFirst = "oldest", e.MostReportedFirst = "most_reported"
			}(o || (o = {}));
			const v = l.a.wrapped(m.b, "Row", O.a),
				j = Object(i.c)({
					currentPage: e => e.platform.currentPage,
					origin: p.k
				}),
				_ = Object(a.b)(j);
			t.b = _(e => d.a.createElement("div", {
				className: e.className
			}, d.a.createElement(b.default, {
				onClick: e.sendEventWithName("modqueue_sort_newest"),
				to: Object(u.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page", "sort"])
			}, d.a.createElement(v, {
				displayText: r.fbt._("Newest first", null, {
					hk: "4buqk8"
				}),
				isSelected: !e.postSort
			})), d.a.createElement(b.default, {
				onClick: e.sendEventWithName("modqueue_sort_oldest"),
				to: Object(c.a)(Object(u.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
					sort: o.OldestFirst
				})
			}, d.a.createElement(v, {
				displayText: r.fbt._("Oldest first", null, {
					hk: "1x9Jdr"
				}),
				isSelected: e.postSort === o.OldestFirst
			})), d.a.createElement(b.default, {
				onClick: e.sendEventWithName("modqueue_sort_most_reports"),
				to: Object(c.a)(Object(u.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
					sort: o.MostReportedFirst
				})
			}, d.a.createElement(v, {
				displayText: r.fbt._("Most reported first", null, {
					hk: "2ac4Mt"
				}),
				isSelected: e.postSort === o.MostReportedFirst
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
				return "comments" !== e.onlyOfType && "links" !== e.onlyOfType && "chat_comments" !== e.onlyOfType || (r += `--[${e.onlyOfType}]`), e.sort !== o.a.NewestFirst && (r += `--[${e.sort}]`), r
			}
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return n
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "g", (function() {
				return u
			})), s.d(t, "h", (function() {
				return l
			}));
			var o = s("./src/reddit/helpers/isPost.ts");
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
			const u = e => 1 === e.length ? Object(o.a)(e[0]) ? c.Post : c.Comment : c.Bulk,
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
		"./src/reddit/selectors/modQueue.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return u
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
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
				d = s("./src/lib/initializeClient/installReducer.ts"),
				a = s("./src/reddit/reducers/features/comments/index.ts"),
				i = s("./src/reddit/reducers/pages/modHub/index.ts");
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
					var s, o, r;
					const {
						pageName: n,
						page: d
					} = t, a = c(0, t);
					if (!(null === (r = null === (o = null === (s = e.pages.modHub.modQueue[n]) || void 0 === s ? void 0 : s.itemOrder) || void 0 === o ? void 0 : o[a]) || void 0 === r ? void 0 : r[d])) return;
					const i = e.pages.modHub.modQueue[n].itemOrder[a][d];
					return i ? i.map(t => e.posts.models[t] || e.features.comments.models[t]) : []
				}),
				l = (e, t) => {
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
				b = e => Object.keys(e.pages.modHub.modQueue.bulkAction.selectedItems),
				p = e => e.pages.modHub.modQueue.bulkAction.api.pending,
				f = e => e.pages.modHub.modQueue.moderatedCommunitiesOrder.data,
				O = e => {
					const t = e.platform && e.platform.currentPage;
					return t && t.meta && (t.meta.name === o.Ob.MODERATION_PAGES || t.meta.name === o.Ob.MODQUEUE_PAGES)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueue.e7b5732c6942780549b8.js.map