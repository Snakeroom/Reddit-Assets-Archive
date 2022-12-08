// https://www.redditstatic.com/desktop2x/ModQueue.dcc96d928cf450b8d249.js
// Retrieved at 12/8/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
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
				return _
			})), s.d(t, "a", (function() {
				return y
			})), s.d(t, "e", (function() {
				return R
			})), s.d(t, "g", (function() {
				return E
			})), s.d(t, "h", (function() {
				return A
			})), s.d(t, "b", (function() {
				return k
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
				O = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/actions/comment/index.ts"),
				j = s("./src/reddit/actions/comment/constants.ts");
			const h = Object(n.a)(j.p),
				g = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					s().features.comments.models[e] && (await Object(l.j)(r(), e)).ok && t((e => async t => {
						t(h({
							commentId: e
						}))
					})(e))
				}, S = e => async (t, s, r) => {
					let {
						apiContext: n
					} = r;
					if (!Object(O.S)(s())) return void t(Object(a.i)(u.a.LOGIN_MODAL_ID));
					const d = s().features.comments.models[e];
					if (!d) return;
					const i = d.isLocked ? l.l : l.f;
					t(Object(v.j)({
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
					})) : t(Object(v.j)({
						[e]: {
							isLocked: d.isLocked
						}
					}))
				}, _ = Object(n.a)(j.J), y = e => async (t, s, r) => {
					let {
						apiContext: n,
						gqlContext: d
					} = r;
					const a = s(),
						u = a.features.comments.models[e],
						m = a.user.account ? a.user.account.displayText : null;
					u && m && (t(Object(v.j)({
						[e]: {
							isApproved: !0,
							approvedBy: m,
							approvedAtUTC: Date.now(),
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(l.a)(d(), e)).ok ? t(Object(c.f)({
						kind: p.b.SuccessMod,
						text: o.fbt._("comment has been approved", null, {
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
				}, R = (e, t) => async (s, r, n) => {
					let {
						apiContext: d,
						gqlContext: a
					} = n;
					const u = r(),
						m = u.features.comments.models[e],
						b = u.user.account ? u.user.account.displayText : null;
					m && b && (s(Object(v.j)({
						[e]: {
							approvedBy: null,
							bannedBy: b,
							bannedAtUTC: Date.now(),
							isApproved: !1,
							isRemoved: !t,
							isSpam: t,
							numReports: 0
						}
					})), (await Object(l.h)(a(), e, t)).ok ? s(Object(c.f)({
						kind: p.b.SuccessMod,
						text: t ? o.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : o.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : s(Object(v.j)({
						[e]: {
							approvedBy: m.approvedBy,
							bannedBy: m.bannedBy,
							isApproved: m.isApproved,
							isRemoved: m.isRemoved,
							isSpam: m.isSpam,
							numReports: m.numReports
						}
					})), Object(i.d)())
				}, E = e => async (t, s, r) => {
					let {
						apiContext: n
					} = r;
					const d = s().features.comments.models[e];
					if (!d) return;
					const a = d.ignoreReports ? l.k : l.e;
					d.ignoreReports || t(y(e)), t(Object(v.j)({
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
					})) : t(Object(v.j)({
						[e]: {
							ignoreReports: d.ignoreReports
						}
					}))
				}, A = (e, t, s) => async (n, d, a) => {
					let {
						gqlContext: i
					} = a;
					const u = Object(f.c)(d(), {
						commentId: e
					});
					if (!u) return;
					const l = s === r.kc.Snoozed,
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
						const e = Object(c.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), p.b.Error);
						n(Object(c.f)(e))
					}
				}, k = (e, t, s) => async (o, n, a) => {
					let {
						apiContext: i,
						gqlContext: c
					} = a;
					const u = n(),
						m = u.features.comments.models[e];
					if (!m) return;
					const b = m.postId,
						p = u.postStickiedComments.data[b];
					o(Object(v.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === r.J.ADMIN,
							isMod: t === r.J.MODERATOR,
							isStickied: !!s
						}
					})), s && p && p !== e && o(Object(v.j)({
						[p]: {
							isStickied: !1
						}
					}));
					const f = Object(l.c)(c(), e, t),
						O = Object(l.d)(c(), e, !!s),
						j = [f];
					(s || !s && e === p) && j.push(O), (await Promise.all(j)).every(e => e.ok) ? s && o(_({
						id: e,
						postId: b,
						commentsPageKey: Object(d.a)(b, null, {
							sort: r.w.CONFIDENCE,
							...u.platform.currentPage.queryParams
						})
					})) : (o(Object(v.j)({
						[e]: {
							distinguishType: m.distinguishType,
							isAdmin: m.isAdmin,
							isMod: m.isMod,
							isStickied: m.isStickied
						}
					})), o(Object(v.j)({
						[p]: {
							isStickied: u.features.comments.models[p].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/modQueue/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return ie
			})), s.d(t, "d", (function() {
				return le
			})), s.d(t, "f", (function() {
				return fe
			})), s.d(t, "a", (function() {
				return Oe
			})), s.d(t, "b", (function() {
				return ve
			})), s.d(t, "c", (function() {
				return je
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/reddit/actions/bulkActions/index.ts"),
				a = s("./src/reddit/actions/removalReasons/index.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				l = s("./src/reddit/endpoints/modQueue/index.ts"),
				m = s("./src/reddit/endpoints/user/index.ts"),
				b = s("./src/reddit/helpers/correlationIdTracker.ts"),
				p = s("./src/reddit/helpers/flair.ts"),
				f = s("./node_modules/Base64/base64.js"),
				O = s("./src/reddit/components/ModQueueList/PostSortDropdown.tsx"),
				v = s("./src/reddit/helpers/isPost.ts"),
				j = s("./src/reddit/selectors/commentSelector.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/models/Flair/index.ts"),
				S = s("./src/reddit/selectors/experiments/realtimeMQUpdates.ts"),
				_ = s("./src/redditGQL/types.ts"),
				y = s("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				R = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				E = s("./src/reddit/helpers/graphql/normalizeModActivityFromGql/index.ts"),
				A = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				k = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const x = {
					[r.wb.Edited]: _.F.Edited,
					[r.wb.Modqueue]: _.F.Mod,
					[r.wb.Reports]: _.F.Reported,
					[r.wb.Spam]: _.F.Removed,
					[r.wb.Unmoderated]: _.F.Unmoderated
				},
				I = {
					comments: _.D.Comment,
					links: _.D.Post,
					chat_comments: _.D.ChatComment
				};

			function M(e) {
				let {
					getState: t,
					queueType: s,
					options: o
				} = e;
				var n, d;
				const a = t();
				let i;
				o.only && (i = I[o.only]);
				const c = {};
				o.after && (c[o.sort === O.a.OldestFirst ? "before" : "after"] = function(e, t) {
					const s = Object(v.a)(t) ? Object(h.G)(e, {
						postId: t
					}) : Object(j.c)(e, {
						commentId: t
					});
					if (s) return Object(f.btoa)(`${s.id}|${s.created}`)
				}(a, o.after));
				const u = {};
				o.sort === O.a.OldestFirst ? u.last = 25 : u.first = 25;
				const l = Object(S.a)(a),
					m = o.subreddit ? [o.subreddit] : [],
					b = (null == a ? void 0 : a.platform) && (null === (n = null == a ? void 0 : a.platform) || void 0 === n ? void 0 : n.currentPage),
					p = (null === (d = null == b ? void 0 : b.meta) || void 0 === d ? void 0 : d.name) === r.Sb.MODQUEUE_PAGES;
				return {
					queueType: x[s],
					moderatedAfter: o.moderatedAfter,
					...u,
					...!!i && {
						itemTypes: i
					},
					subredditNames: m,
					...!!o.profile && {
						subredditIds: [o.profile]
					},
					sort: o.sort === O.a.MostReportedFirst ? _.E.SortReports : _.E.SortDate,
					...c,
					includeAllModActivitySummaries: l && p,
					includeModActivitySummariesByNames: l && !p,
					isModqueueListing: 0 === m.length
				}
			}
			var P;
			! function(e) {
				e.Comment = "ModQueueItemComment", e.Post = "ModQueueItemPost", e.ChatComment = "ModQueueItemChatComment"
			}(P || (P = {}));
			const C = e => ({
					access: (null == e ? void 0 : e.isAccessEnabled) || !1,
					all: (null == e ? void 0 : e.isAllAllowed) || !1,
					chatConfig: (null == e ? void 0 : e.isChatConfigEditingAllowed) || !1,
					chatOperator: (null == e ? void 0 : e.isChatOperator) || !1,
					config: (null == e ? void 0 : e.isConfigEditingAllowed) || !1,
					flair: (null == e ? void 0 : e.isFlairEditingAllowed) || !1,
					mail: (null == e ? void 0 : e.isMailEditingAllowed) || !1,
					posts: (null == e ? void 0 : e.isPostEditingAllowed) || !1,
					wiki: (null == e ? void 0 : e.isWikiEditingAllowed) || !1
				}),
				N = e => {
					let {
						id: t,
						icon: s,
						profile: o,
						snoovatarIcon: r,
						isAcceptingFollowers: n,
						displayName: d,
						prefixedName: a,
						name: i
					} = e;
					return {
						accountIcon: null == s ? void 0 : s.url,
						displayName: d,
						displayNamePrefixed: a,
						displayText: i,
						enableFollowers: n,
						id: t,
						profileId: null == o ? void 0 : o.id,
						snoovatarFullBodyAsset: (null == r ? void 0 : r.url) || null,
						username: i
					}
				};

			function w(e) {
				let {
					modQueueItems: t,
					identity: s,
					moderatedSubredditActivityByNames: o
				} = e;
				var r, n, d, a, i;
				const c = {
					posts: {},
					comments: {},
					reports: {},
					modActivitySummaries: {},
					modqueue: [],
					authorFlair: {},
					moderatedAfter: (null === (r = null == s ? void 0 : s.redditor.moderatedSubreddits) || void 0 === r ? void 0 : r.pageInfo.hasNextPage) ? null === (n = null == s ? void 0 : s.redditor.moderatedSubreddits) || void 0 === n ? void 0 : n.pageInfo.endCursor : null,
					moderatingProfiles: {},
					profiles: {},
					listingOrder: [],
					subreddits: {},
					moderatingSubreddits: {},
					postFlair: {},
					userFlair: {},
					users: {}
				};
				if (!t) return c;
				if (!t.edges) return c;
				const u = null === (d = null == s ? void 0 : s.redditor.moderatedSubredditActivity) || void 0 === d ? void 0 : d.edges.reduce((e, t) => {
						var s;
						if (!(null === (s = null == t ? void 0 : t.node) || void 0 === s ? void 0 : s.moderation)) return e;
						const {
							subreddit: o,
							summary: r
						} = Object(E.a)(t.node);
						return e.summaries[t.node.id] = r, e.subreddits[t.node.id] = o, e
					}, {
						subreddits: {},
						summaries: {}
					}),
					l = null == o ? void 0 : o.reduce((e, t) => {
						if (!(t && "modPermissions" in t && (null == t ? void 0 : t.modPermissions))) return e;
						if (e.moderatingSubreddits[t.id] = C(t.modPermissions), !(null == t ? void 0 : t.moderation)) return e;
						const {
							subreddit: s,
							summary: o
						} = Object(E.a)(t);
						return e.summaries[t.id] = o, e.subreddits[t.id] = s, e
					}, {
						subreddits: {},
						summaries: {},
						moderatingSubreddits: {}
					});
				c.modActivitySummaries = {
					...null == u ? void 0 : u.summaries,
					...null == l ? void 0 : l.summaries
				};
				const m = null === (i = null === (a = null == s ? void 0 : s.redditor.moderatedSubreddits) || void 0 === a ? void 0 : a.edges) || void 0 === i ? void 0 : i.reduce((e, t) => {
					var s;
					if (!(null === (s = null == t ? void 0 : t.node) || void 0 === s ? void 0 : s.modPermissions)) return e;
					const o = t.node.modPermissions;
					return e.moderatingSubreddits[t.node.id] = C(o), e.subreddits[t.node.id] = Object(k.a)(t.node), e
				}, {
					subreddits: {},
					moderatingSubreddits: {}
				});
				return c.moderatingSubreddits = {
					...null == m ? void 0 : m.moderatingSubreddits,
					...null == l ? void 0 : l.moderatingSubreddits
				}, c.subreddits = {
					...null == u ? void 0 : u.subreddits,
					...null == m ? void 0 : m.subreddits
				}, t.edges.forEach(e => {
					var t, s, o, r, n, d, a;
					if (!e) return;
					const {
						node: i
					} = e;
					if (!i) return;
					const {
						__typename: u,
						subredditInfo: l
					} = i;
					if (!l) return;
					const {
						id: m
					} = l;
					if (c.subreddits[m] = Object(k.a)(l), c.moderatingSubreddits[m] || "Subreddit" !== (null == l ? void 0 : l.__typename) || (c.moderatingSubreddits[m] = C(l.modPermissions)), !c.postFlair[m] && "Subreddit" === l.__typename) {
						const {
							position: e,
							isEnabled: s
						} = (null == l ? void 0 : l.postFlairSettings) || {};
						c.postFlair[m] = {
							displaySettings: {
								position: null == e ? void 0 : e.toLowerCase(),
								isEnabled: s
							},
							...(null === (t = null == l ? void 0 : l.postFlairTemplates) || void 0 === t ? void 0 : t.reduce((e, t) => {
								let {
									id: s,
									text: o,
									isEditable: r,
									richtext: n,
									type: d,
									textColor: a,
									backgroundColor: i,
									isModOnly: c,
									cssClass: u,
									maxEmojis: l,
									allowableContent: m
								} = t;
								return s ? (e.templateIds.push(s), e.templates[s] = {
									id: s,
									text: o || "",
									textEditable: r,
									type: d || g.f.Text,
									textColor: (null == a ? void 0 : a.toLowerCase()) || void 0,
									backgroundColor: (null == i ? void 0 : i.toLowerCase()) || void 0,
									richtext: JSON.parse(n || "[]"),
									modOnly: c,
									cssClass: u,
									maxEmojis: l,
									allowableContent: null == m ? void 0 : m.toLowerCase()
								}, e) : e
							}, {
								templates: {},
								templateIds: []
							})) || {}
						}
					}
					if (u === P.Comment || u === P.ChatComment) {
						const {
							commentInfo: e
						} = i;
						if (!e) return;
						const t = Object(y.a)(e);
						if (null === (s = e.moderationInfo) || void 0 === s ? void 0 : s.verdictBy) {
							const t = N(null === (o = e.moderationInfo) || void 0 === o ? void 0 : o.verdictBy);
							t.username && (c.users[null == t ? void 0 : t.username] = t)
						}
						c.comments[t.id] = t, c.listingOrder.push({
							id: t.id,
							type: "comment"
						}), c.modqueue.push(t.id);
						const {
							authorInfo: n,
							authorFlair: d
						} = e, a = d ? null === (r = Object(R.a)(d)) || void 0 === r ? void 0 : r[0] : null;
						c.authorFlair[m] = {
							...c.authorFlair[m],
							...(null == n ? void 0 : n.name) ? {
								[null == n ? void 0 : n.name]: a
							} : {}
						};
						const u = [];
						t.modReports.forEach(e => {
							u.push({
								type: "moderator",
								reason: e[0],
								reporter: e[1]
							})
						}), t.userReports.forEach(e => {
							u.push({
								type: "user",
								reason: e[0]
							})
						}), c.reports[t.id] = u
					}
					if (u === P.Post) {
						const {
							postInfo: e
						} = i;
						if (null === (n = null == e ? void 0 : e.moderationInfo) || void 0 === n ? void 0 : n.verdictBy) {
							const t = N(null === (d = e.moderationInfo) || void 0 === d ? void 0 : d.verdictBy);
							t.username && (c.users[null == t ? void 0 : t.username] = t)
						}
						if (!e) return;
						const t = Object(A.f)(e);
						c.posts[t.id] = t, c.listingOrder.push({
							id: t.id,
							type: "post"
						}), c.modqueue.push(t.id);
						const {
							authorInfo: s,
							authorFlair: o
						} = e, r = o ? null === (a = Object(R.a)(o)) || void 0 === a ? void 0 : a[0] : null;
						c.authorFlair[m] = {
							...c.authorFlair[m],
							...(null == s ? void 0 : s.name) ? {
								[null == s ? void 0 : s.name]: r
							} : {}
						};
						const u = [];
						t.modReports.forEach(e => {
							u.push({
								type: "moderator",
								reason: e[0],
								reporter: e[1]
							})
						}), t.userReports.forEach(e => {
							u.push({
								type: "user",
								reason: e[0]
							})
						}), c.reports[t.id] = u
					}
				}), c
			}
			var L = s("./src/reddit/models/ModQueue/index.ts"),
				D = s("./src/reddit/models/Toast/index.ts"),
				F = s("./src/reddit/selectors/modQueue.ts"),
				T = s("./src/reddit/selectors/subreddit.ts"),
				Q = s("./src/reddit/selectors/telemetry.ts"),
				q = s("./src/telemetry/index.ts"),
				B = s("./src/lib/initializeClient/installReducer.ts"),
				U = s("./src/reddit/reducers/features/modActivitySummaries/index.ts"),
				V = s("./src/reddit/reducers/features/realtimeModqueue/index.ts"),
				G = s("./src/reddit/reducers/pages/modHub/index.ts"),
				H = s("./src/reddit/actions/modQueue/constants.ts");
			Object(B.a)({
				pages: {
					modHub: G.a
				}
			}), Object(B.a)({
				features: {
					modActivitySummaries: U.a
				}
			}), Object(B.a)({
				features: {
					realtimeModqueue: V.a
				}
			});
			const $ = Object(n.a)(H.k),
				K = Object(n.a)(H.j),
				z = Object(n.a)(H.i),
				W = Object(n.a)(H.h),
				J = Object(n.a)(H.g),
				X = Object(n.a)(H.f),
				Y = Object(n.a)(H.e),
				Z = Object(n.a)(H.s),
				ee = Object(n.a)(H.r),
				te = Object(n.a)(H.q),
				se = Object(n.a)(H.v),
				oe = Object(n.a)(H.u),
				re = Object(n.a)(H.t),
				ne = Object(n.a)(H.B),
				de = Object(n.a)(H.A),
				ae = Object(n.a)(H.z),
				ie = (e, t, s) => async (n, d, a) => {
					let {
						apiContext: b,
						gqlContext: p
					} = a;
					var f;
					let O, v, j;
					switch (t) {
						case r.wb.Edited:
							O = J, v = Y, j = X;
							break;
						case r.wb.Modqueue:
							O = K, v = W, j = z;
							break;
						case r.wb.Reports:
							O = Z, v = te, j = ee;
							break;
						case r.wb.Spam:
							O = se, v = re, j = oe;
							break;
						case r.wb.Unmoderated:
							O = ne, v = ae, j = de;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					if (n(O()), s.profile) {
						const e = null === (f = (await Object(m.b)(b(), s.profile)).body[s.profile]) || void 0 === f ? void 0 : f.profileId;
						s.profile = e
					}
					const h = M({
							getState: d,
							queueType: t,
							options: s
						}),
						g = await Object(l.b)(p(), h);
					if (!g.ok) return n(v(g.error)), void n(Object(i.f)({
						kind: D.b.Error,
						text: o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}));
					const {
						users: S,
						..._
					} = w(g.body.data), y = d(), R = c.e[Object(u.V)(y, {})] === c.d.Card;
					Object(F.b)(y, R) && n($(S)), n(j({
						listingKey: e,
						page: `${s.page||L.b}`,
						response: _
					}))
				}, ce = Object(n.a)(H.n), ue = Object(n.a)(H.b), le = e => async (t, s, r) => {
					let {
						gqlContext: n
					} = r;
					const d = s(),
						a = d.pages.modHub.modQueue.moderatedCommunitiesOrder.after,
						c = d.pages.modHub.modQueue.moderatedCommunitiesOrder.pending,
						u = d.pages.modHub.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: m
						} = d.platform.currentPage.urlParams;
					if (e && c || u || !a) return;
					const b = M({
							getState: s,
							queueType: m,
							options: {
								moderatedAfter: a
							}
						}),
						p = await Object(l.b)(n(), b);
					if (!p.ok) return void t(Object(i.f)({
						kind: D.b.Error,
						text: o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}));
					const f = w(p.body.data);
					t(ce(f)), f.moderatedAfter ? t(le()) : t(ue())
				}, me = Object(n.a)(H.y), be = Object(n.a)(H.x), pe = Object(n.a)(H.w), fe = (e, t, s) => async (r, n, c) => {
					let {
						apiContext: u
					} = c;
					r(Object(d.c)());
					const m = n(),
						f = Object(F.i)(m),
						O = m.user.account && m.user.account.displayText;
					Object(b.d)(b.a.ModQueue);
					const j = Object(b.c)(b.a.ModQueue);
					Object(q.a)({
						source: "bulk_mod_action_menu",
						action: "click",
						noun: e,
						...Q.o(m),
						actionInfo: Q.d(m, {
							count: f.length,
							paneName: m.platform.currentPage ? m.platform.currentPage.urlParams.pageName : void 0
						}),
						screen: Q.cb(m),
						correlationId: j
					});
					for (let t = 0; t < f.length; t++) {
						const s = f[t];
						let o = e;
						[L.a.Approve, L.a.Remove, L.a.Spam].includes(e) && (Object(v.a)(s) ? o += "_link" : o += "_comment"), Object(q.a)({
							source: "bulk_mod_action",
							action: "click",
							noun: o,
							...Q.o(m),
							actionInfo: Q.d(m, {
								count: f.length,
								paneName: m.platform.currentPage ? m.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: Q.h({
								state: m,
								commentId: s
							}),
							post: Q.K(m, s),
							profile: Q.V(m, s),
							screen: Q.cb(m),
							subreddit: Q.nb(m, s),
							correlationId: j
						})
					}
					Object(b.b)(b.a.ModQueue);
					const h = {
						ids: f
					};
					t && (h.text = Object(p.g)(t) || "", h.flairTemplateId = ""), s && (h.cssClass = s, h.flairTemplateId = s);
					const g = await Object(l.a)(u(), e, h);
					if (g.ok) {
						r(Object(d.b)({
							...g.body,
							operation: e,
							ids: f,
							username: O,
							options: {
								flair: t
							}
						}));
						const s = function(e, t) {
							switch (e) {
								case L.a.Approve:
									return o.fbt._({
										"*": "{number} posts/comments have been approved",
										_1: "1 post/comment has been approved"
									}, [o.fbt._plural(t, "number")], {
										hk: "2kKhSf"
									});
								case L.a.Flair:
									return o.fbt._({
										"*": "{number} posts/comments have had flair applied",
										_1: "1 post/comment has had flair applied"
									}, [o.fbt._plural(t, "number")], {
										hk: "3syB5O"
									});
								case L.a.IgnoreReports:
									return o.fbt._({
										"*": "{number} posts/comments have had their reports ignored",
										_1: "1 post/comment has had their reports ignored"
									}, [o.fbt._plural(t, "number")], {
										hk: "2WfE4g"
									});
								case L.a.Lock:
									return o.fbt._({
										"*": "{number} posts/comments have been locked",
										_1: "1 post/comment has been locked"
									}, [o.fbt._plural(t, "number")], {
										hk: "45oMbv"
									});
								case L.a.MarkNSFW:
									return o.fbt._({
										"*": "{number} posts/comments have been marked NSFW",
										_1: "1 post/comment has been marked NSFW"
									}, [o.fbt._plural(t, "number")], {
										hk: "oPsQr"
									});
								case L.a.RemovalReason:
									return o.fbt._({
										"*": "{number} posts/comments have had removal reasons applied",
										_1: "1 post/comment has had removal reasons applied"
									}, [o.fbt._plural(t, "number")], {
										hk: "35Tosn"
									});
								case L.a.Remove:
									return o.fbt._({
										"*": "{number} posts/comments have been removed",
										_1: "1 post/comment has been removed"
									}, [o.fbt._plural(t, "number")], {
										hk: "B1ZbE"
									});
								case L.a.Spam:
									return o.fbt._({
										"*": "{number} posts/comments have been marked as spam",
										_1: "1 post/comment has been marked as spam"
									}, [o.fbt._plural(t, "number")], {
										hk: "3OoNfp"
									});
								case L.a.Spoiler:
									return o.fbt._({
										"*": "{number} posts/comments have been marked as spoilers",
										_1: "1 post/comment has been marked as spoilers"
									}, [o.fbt._plural(t, "number")], {
										hk: "1DFW5M"
									});
								case L.a.UnignoreReports:
									return o.fbt._({
										"*": "{number} posts/comments have had their reports un-ignored",
										_1: "1 post/comment has had their reports un-ignored"
									}, [o.fbt._plural(t, "number")], {
										hk: "303Hpb"
									});
								case L.a.Unlock:
									return o.fbt._({
										"*": "{number} posts/comments have been unlocked",
										_1: "1 post/comment has been unlocked"
									}, [o.fbt._plural(t, "number")], {
										hk: "5gUht"
									});
								case L.a.UnmarkNSFW:
									return o.fbt._({
										"*": "{number} posts/comments have been un-marked as NSFW",
										_1: "1 post/comment has been un-marked as NSFW"
									}, [o.fbt._plural(t, "number")], {
										hk: "3oSSST"
									});
								case L.a.Unspoiler:
								case L.a.Unspoiler:
									return o.fbt._({
										"*": "{number} posts/comments have been un-marked as spoilers",
										_1: "1 post/comment has been un-marked as spoilers"
									}, [o.fbt._plural(t, "number")], {
										hk: "3lHoNI"
									})
							}
						}(e, f.length);
						if (e !== L.a.Approve && e !== L.a.Flair) {
							let t, n;
							const c = m.platform.currentPage && m.platform.currentPage.queryParams && m.platform.currentPage.queryParams.subreddit,
								u = c && Object(T.I)(m, c);
							e === L.a.Remove && u && f.length > 1 && (t = o.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), n = Object(a.fetchReasonsAndOpenModal)(u, f));
							const b = Object(i.e)(s, D.b.Undo, o.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, s) => {
								let {
									apiContext: r
								} = s;
								e(me());
								const n = t(),
									a = Object.keys(n.pages.modHub.modQueue.bulkAction.undoLastAction)[0],
									c = n.pages.modHub.modQueue.bulkAction.undoLastAction[a],
									u = n.user.account && n.user.account.displayText;
								e(Object(d.c)());
								const m = await Object(l.a)(r(), a, {
									ids: c
								});
								m.ok ? e(be({
									...m.body,
									operation: a,
									ids: c,
									username: u
								})) : (e(pe(m.error)), e(Object(i.f)({
									kind: D.b.Error,
									text: o.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, n);
							r(Object(i.f)(b))
						} else {
							const e = Object(i.e)(s, D.b.SuccessMod);
							r(Object(i.f)(e))
						}
					} else {
						r(Object(d.a)(g.error));
						const e = Object(i.e)(o.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), D.b.Error);
						r(Object(i.f)(e))
					}
				}, Oe = Object(n.a)(H.a), ve = Object(n.a)(H.c), je = Object(n.a)(H.d)
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
				} = f, h = s();
				if (!p) return;
				const g = Object(a.a)({
						onlyOfType: f.only,
						profile: f.profile,
						sort: f.sort,
						subreddit: f.subreddit
					}),
					S = h.pages.modHub.modQueue[p].itemOrder[g],
					_ = !!(null === (b = null == S ? void 0 : S[O]) || void 0 === b ? void 0 : b.length),
					y = h.pages.modHub.modQueue[p].api.error;
				if (h.pages.modHub.modQueue[p].api.pending || _ && !y) return;
				Object(m.q)(h) || await Object(u.e)(g, p, f)(t, s, o);
				const R = s();
				if (r()(R.pages.modHub.modQueue[p].api.error, "type") === n.L.AUTHENTICATION_ERROR) return Object(i.a)(t, R);
				Object(c.j)(R, j, v), t(l.m({
					title: Object(d.i)()
				}))
			}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "removalReasonsPending", (function() {
				return Z
			})), s.d(t, "removalReasonsLoaded", (function() {
				return ee
			})), s.d(t, "removalReasonsFailed", (function() {
				return te
			})), s.d(t, "removalReasonsRequested", (function() {
				return se
			})), s.d(t, "removalReasonAddedPending", (function() {
				return oe
			})), s.d(t, "removalReasonAddedSuccess", (function() {
				return re
			})), s.d(t, "removalReasonAddedFailed", (function() {
				return ne
			})), s.d(t, "addRemovalReason", (function() {
				return de
			})), s.d(t, "editRemovalReasonPending", (function() {
				return ae
			})), s.d(t, "editRemovalReasonSuccess", (function() {
				return ie
			})), s.d(t, "editRemovalReasonFailed", (function() {
				return ce
			})), s.d(t, "editRemovalReason", (function() {
				return ue
			})), s.d(t, "deleteRemovalReasonPending", (function() {
				return le
			})), s.d(t, "deleteRemovalReasonSuccess", (function() {
				return me
			})), s.d(t, "deleteRemovalReasonFailed", (function() {
				return be
			})), s.d(t, "deleteRemovalReason", (function() {
				return pe
			})), s.d(t, "removedItemsSelected", (function() {
				return fe
			})), s.d(t, "fetchReasonsAndOpenModal", (function() {
				return Oe
			})), s.d(t, "removalReasonSubmittedPending", (function() {
				return ve
			})), s.d(t, "removalReasonSubmittedSuccess", (function() {
				return je
			})), s.d(t, "removalReasonSubmittedFailed", (function() {
				return he
			})), s.d(t, "removalReasonMessagePending", (function() {
				return ge
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return Se
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return _e
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return ye
			})), s.d(t, "submitRemovalReason", (function() {
				return Re
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return Ee
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
			const h = {};
			var g = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
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
			const S = {};
			var _ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
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
			var y = function() {
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
				R = Object(n.c)({
					api: j,
					models: g,
					reasonOrder: _,
					removedItemIds: y
				}),
				E = s("./src/lib/constants/index.ts"),
				A = s("./src/lib/makeActionCreator/index.ts"),
				k = s("./src/lib/makeCommentsPageKey/index.ts"),
				x = s("./src/lib/makeDraftKey/index.ts"),
				I = s("./src/reddit/actions/bulkActions/index.ts"),
				M = s("./src/reddit/actions/comment/index.ts"),
				P = s("./src/reddit/actions/comment/authoring.ts"),
				C = s("./src/reddit/actions/comment/moderation.ts"),
				N = s("./src/reddit/actions/modal.ts"),
				w = s("./src/reddit/actions/post.ts"),
				L = s("./src/reddit/actions/toaster.ts"),
				D = s("./src/reddit/constants/modals.ts"),
				F = s("./src/lib/makeApiRequest/index.ts"),
				T = s("./src/lib/omitHeaders/index.ts"),
				Q = s("./src/reddit/constants/headers.ts"),
				q = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				B = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const U = (e, t) => Object(F.a)(Object(T.a)(e, [Q.a]), {
					endpoint: Object(q.a)(`${e.apiUrl}/api/v1/modactions/removal_reasons/`),
					method: E.ob.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				V = (e, t, s) => Object(F.a)(Object(T.a)(e, [Q.a]), {
					endpoint: Object(q.a)(Object(B.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`)),
					method: E.ob.POST,
					type: "json",
					data: t
				});
			var G = s("./src/reddit/helpers/isPost.ts"),
				H = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				$ = s("./src/reddit/helpers/routeKey/index.ts"),
				K = s("./src/reddit/models/ModQueue/index.ts"),
				z = s("./src/reddit/models/PostDraft/index.ts"),
				W = s("./src/reddit/models/RemovalReason/index.ts"),
				J = s("./src/reddit/models/Toast/index.ts"),
				X = s("./src/reddit/selectors/comments.ts"),
				Y = s("./src/reddit/selectors/platform.ts");
			Object(r.a)({
				features: {
					removalReasons: R
				}
			});
			const Z = Object(A.a)("REMOVALREASONS__LOAD_PENDING"),
				ee = Object(A.a)(d),
				te = Object(A.a)("REMOVALREASONS__LOAD_FAILED"),
				se = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					const n = s().subreddits.models[e].name;
					t(Z());
					const d = await ((e, t) => Object(F.a)(Object(T.a)(e, [Q.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: E.ob.GET
					}))(r(), n);
					d.ok ? t(ee({
						subredditId: e,
						response: d.body
					})) : t(te(d.error))
				}, oe = Object(A.a)(a), re = Object(A.a)(i), ne = Object(A.a)(c), de = (e, t) => async (s, r, n) => {
					let {
						apiContext: d
					} = n;
					const a = r().subreddits.models[e].name;
					s(oe());
					const i = await ((e, t, s) => Object(F.a)(Object(T.a)(e, [Q.a]), {
						endpoint: Object(q.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons`),
						method: E.ob.POST,
						data: s
					}))(d(), a, t);
					if (i.ok) {
						const {
							id: r
						} = i.body, n = {
							...t,
							id: r
						};
						s(re({
							subredditId: e,
							reason: n
						})), s(Object(L.f)({
							kind: J.b.SuccessMod,
							text: o.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(ne(i.error))
				}, ae = Object(A.a)(u), ie = Object(A.a)(l), ce = Object(A.a)(m), ue = (e, t) => async (s, r, n) => {
					let {
						apiContext: d
					} = n;
					const a = r().subreddits.models[e].name;
					s(ae());
					const i = await ((e, t, s) => Object(F.a)(Object(T.a)(e, [Q.a]), {
						endpoint: Object(q.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`),
						method: E.ob.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(d(), a, t);
					i.ok ? (s(ie({
						subredditId: e,
						reason: t
					})), s(Object(L.f)({
						kind: J.b.SuccessMod,
						text: o.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(ce(i.error))
				}, le = Object(A.a)(b), me = Object(A.a)(p), be = Object(A.a)(f), pe = (e, t) => async (s, r, n) => {
					let {
						apiContext: d
					} = n;
					const a = r().subreddits.models[e].name;
					s(le());
					const i = await ((e, t, s) => Object(F.a)(Object(T.a)(e, [Q.a]), {
						endpoint: Object(q.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`),
						method: E.ob.DELETE
					}))(d(), a, t);
					i.ok ? (s(me({
						subredditId: e,
						reasonId: t
					})), s(Object(L.f)({
						kind: J.b.SuccessMod,
						text: o.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(be(i.error))
				}, fe = Object(A.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), Oe = (e, t) => async (s, o, r) => {
					let {
						apiContext: n
					} = r;
					const d = o();
					d.features.removalReasons.reasonOrder[e] && d.features.removalReasons.reasonOrder[e].length > 0 || s(se(e)), s(fe({
						subredditId: e,
						itemIds: t
					})), s(Object(N.i)(D.a.ADD_REMOVAL_REASON))
				}, ve = Object(A.a)("REMOVALREASONS__SUBMIT_PENDING"), je = Object(A.a)("REMOVALREASONS__SUBMIT_SUCCESS"), he = Object(A.a)("REMOVALREASONS__SUBMIT_FAILED"), ge = Object(A.a)("REMOVALREASONS__MESSAGE_PENDING"), Se = Object(A.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), _e = Object(A.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), ye = Object(A.a)("REMOVALREASONS__MESSAGE_FAILED"), Re = (e, t, s, o, r, n) => async (d, a, i) => {
					let {
						apiContext: c
					} = i;
					const u = a(),
						l = u.user.account && u.user.account.displayText,
						m = e[0],
						b = Object(G.a)(m) ? W.e.Post : W.e.Comment,
						p = b === W.e.Post ? u.posts.models[m] : u.features.comments.models[m],
						f = b === W.e.Post ? w.R : M.j;
					if (!p || !l) return !1;
					d(ve()), d(f({
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
						if (d(je()), t) {
							d(ge());
							const r = {
									itemId: e,
									message: s,
									title: t.title,
									isLocked: n,
									type: o
								},
								a = await V(c(), Object(W.h)(r, b), b);
							if (a.ok) {
								if ([W.f.Public, W.f.PublicAsSubreddit].includes(o)) {
									if (d(_e()), a.body) {
										const e = Object(H.a)(a.body),
											t = {
												comment: e,
												parentId: m
											},
											s = Object(Y.f)(u),
											o = u.platform.currentPage && u.platform.currentPage.routeMatch;
										let r = s && o && Object($.a)(o, u, u.posts.models[e.postId]);
										if (r || (r = Object(k.a)(e.postId, null, {
												sort: E.x,
												hasSortParam: !0
											})), b === W.e.Post) {
											const s = Object(x.a)(z.c.replyToPost, m);
											d(Object(P.r)({
												...t,
												headCommentId: Object(X.w)(u, {
													commentsPageKey: r
												}),
												commentsPageKey: r,
												draftKey: s
											}));
											const o = u.postStickiedComments.data[m];
											d(Object(C.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: r
											})), o && o !== e.id && d(Object(M.j)({
												[o]: {
													isStickied: !1
												}
											}))
										} else if (b === W.e.Comment) {
											const e = Object(x.a)(z.c.replyToComment, p.id),
												s = Object(X.j)(u, {
													commentId: m,
													commentsPageKey: r
												});
											d(Object(P.p)({
												...t,
												parentCommentId: m,
												commentsPageKey: r,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else d(Se());
								return !0
							}
							return d(ye(a.error)), !1
						}
					} else d(he(v.error)), d(f({
						[m]: {
							modNote: p.modNote,
							modRemovalReason: p.modRemovalReason,
							modReasonBy: p.modReasonBy
						}
					}));
					return !1
				}, Ee = (e, t, s, r, n) => async (d, a, i) => {
					let {
						apiContext: c
					} = i;
					const u = a(),
						l = u.user.account && u.user.account.displayText;
					if (!l) return;
					d(ve());
					const m = Object(L.f)({
							kind: J.b.SuccessMod,
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
							operation: K.a.RemovalReason,
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
								n = await V(c(), Object(W.h)(o, W.e.Bulk), W.e.Bulk);
							n.ok ? (d(Se()), d(m)) : d(ye(n.error))
						} else d(m)
					} else d(he(p.error))
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
				h = Object(a.b)(j);
			t.b = h(e => d.a.createElement("div", {
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
		"./src/reddit/helpers/graphql/normalizeModActivityFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const r = e => {
				const {
					moderation: t,
					...s
				} = e, {
					lastModActionAt: r,
					activeModerators: n
				} = (null == t ? void 0 : t.modActivitySummary) || {}, d = [], a = {};
				null == n || n.edges.map(e => {
					if (!(null == e ? void 0 : e.node)) return;
					const {
						lastModAction: t,
						moderator: s
					} = e.node;
					if (!s) return;
					const o = null == s ? void 0 : s.id;
					o && (d.push(o), a[o] || (a[o] = {
						info: {},
						lastModAction: {}
					}), a[o].info = s, a[o].lastModAction = {
						...t
					})
				});
				const i = {
					lastModActionAt: r,
					activeMods: d
				};
				return {
					subreddit: Object(o.a)(s),
					summary: {
						sub: i,
						mods: a
					}
				}
			}
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
				return "comments" !== e.onlyOfType && "links" !== e.onlyOfType && "chat_comments" !== e.onlyOfType || (r += `--[${e.onlyOfType}]`), e.sort && e.sort !== o.a.NewestFirst && (r += `--[${e.sort}]`), r
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
		"./src/reddit/reducers/features/modActivitySummaries/index.ts": function(e, t, s) {
			"use strict";
			var o = s("./src/reddit/actions/modQueue/constants.ts");
			t.a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.l: {
						const {
							summary: s,
							subreddit: o
						} = t.payload;
						return {
							...e,
							[o.id]: {
								...e[o.id],
								...s
							}
						}
					}
					case o.i:
					case o.f:
					case o.r:
					case o.u:
					case o.A: {
						const {
							response: s
						} = t.payload;
						return {
							...e,
							...s.modActivitySummaries
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/realtimeModqueue/index.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/redux/es/redux.js"),
				r = s("./src/reddit/actions/modQueue/constants.ts");
			var n = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.m: {
							const {
								targetID: s
							} = t.payload;
							return e.includes(s) ? e : [...e, s]
						}
						case r.p: {
							const {
								targetID: s
							} = t.payload, o = e.indexOf(s);
							return o > -1 && e.splice(o, 1), e
						}
						default:
							return e
					}
				},
				d = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/actions/comment/constants.ts")),
				a = s("./src/reddit/actions/platform.ts"),
				i = s("./src/reddit/actions/post.ts");
			const c = ["isApproved", "isRemoved", "isSpam"];
			var u = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.q:
					case i.k: {
						const s = t.payload;
						return Object.keys(s).map(t => {
							const o = Object.keys(s[t]);
							let r = !1;
							o.map(e => {
								c.includes(e) && (r = !0)
							}), !e.includes(t) && r && (e = [...e, t])
						}), e
					}
					case r.p: {
						const {
							targetID: s
						} = t.payload;
						return e.includes(s) ? e : [...e, s]
					}
					case a.f:
						return [];
					default:
						return e
				}
			};
			t.a = Object(o.c)({
				toUpdate: n,
				updated: u
			})
		},
		"./src/reddit/selectors/experiments/modqueueActionBarUXImprovements.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				n = s("./src/reddit/selectors/user.ts");
			const d = e => Object(r.c)(e, {
				experimentEligibilitySelector: n.S,
				experimentName: o.bc
			}) === o.Qd
		},
		"./src/reddit/selectors/experiments/realtimeMQUpdates.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				n = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/selectors/experiments/modqueueActionBarUXImprovements.ts");
			const a = e => Object(d.a)(e) && Object(r.c)(e, {
				experimentEligibilitySelector: n.S,
				experimentName: o.Bc
			}) === o.Qd
		},
		"./src/reddit/selectors/modQueue.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return l
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "a", (function() {
				return O
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "c", (function() {
				return j
			})), s.d(t, "b", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				n = s("./src/lib/objectSelector/index.ts"),
				d = s("./src/lib/initializeClient/installReducer.ts"),
				a = s("./src/reddit/reducers/features/comments/index.ts"),
				i = s("./src/reddit/reducers/pages/modHub/index.ts"),
				c = s("./src/reddit/selectors/experiments/modqueueActionBarUXImprovements.ts");
			Object(d.a)({
				features: {
					comments: a.a
				},
				pages: {
					modHub: i.a
				}
			});
			const u = (e, t) => Object(r.a)({
					onlyOfType: t.queryParams.only,
					profile: t.profileName,
					sort: t.queryParams.sort,
					subreddit: t.subredditName
				}),
				l = Object(n.a)((e, t) => {
					var s, o, r;
					const {
						pageName: n,
						page: d
					} = t, a = u(0, t);
					if (null === (r = null === (o = null === (s = e.pages.modHub.modQueue[n]) || void 0 === s ? void 0 : s.itemOrder) || void 0 === o ? void 0 : o[a]) || void 0 === r ? void 0 : r[d]) return e.pages.modHub.modQueue[n].itemOrder[a][d] || []
				}),
				m = Object(n.a)((e, t) => {
					const s = l(e, t);
					return s ? s.map(t => e.posts.models[t] || e.features.comments.models[t]) : void 0
				}),
				b = (e, t) => {
					var s;
					const {
						pageName: o
					} = t;
					return null === (s = e.pages.modHub.modQueue[o]) || void 0 === s || !s.api || e.pages.modHub.modQueue[o].api.pending
				},
				p = (e, t) => {
					var s;
					const o = u(0, t);
					return null === (s = e.pages.modHub.modQueue[t.pageName]) || void 0 === s ? void 0 : s.loadMore[o]
				},
				f = e => Object.keys(e.pages.modHub.modQueue.bulkAction.selectedItems),
				O = e => e.pages.modHub.modQueue.bulkAction.api.pending,
				v = e => e.pages.modHub.modQueue.moderatedCommunitiesOrder.data,
				j = e => {
					var t;
					const s = e.platform && e.platform.currentPage;
					return (null === (t = null == s ? void 0 : s.meta) || void 0 === t ? void 0 : t.name) === o.Sb.MODQUEUE_PAGES
				},
				h = (e, t) => (e => {
					const t = e.platform && e.platform.currentPage;
					return t && t.meta && (t.meta.name === o.Sb.MODERATION_PAGES || t.meta.name === o.Sb.MODQUEUE_PAGES)
				})(e) && Object(c.a)(e) && t || !1
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueue.dcc96d928cf450b8d249.js.map