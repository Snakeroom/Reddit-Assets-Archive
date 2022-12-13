// https://www.redditstatic.com/desktop2x/ModQueue.478b3745dfb0ae5c03f0.js
// Retrieved at 12/13/2022, 10:20:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueue"], {
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return n
			})), o.d(t, "b", (function() {
				return d
			})), o.d(t, "a", (function() {
				return i
			}));
			var s = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/reddit/actions/bulkActions/constants.ts");
			const n = Object(s.a)(r.c),
				d = Object(s.a)(r.b),
				i = Object(s.a)(r.a)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return g
			})), o.d(t, "c", (function() {
				return S
			})), o.d(t, "f", (function() {
				return _
			})), o.d(t, "a", (function() {
				return y
			})), o.d(t, "e", (function() {
				return A
			})), o.d(t, "g", (function() {
				return R
			})), o.d(t, "h", (function() {
				return E
			})), o.d(t, "b", (function() {
				return k
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/constants/index.ts"),
				n = o("./src/lib/makeActionCreator/index.ts"),
				d = o("./src/lib/makeCommentsPageKey/index.ts"),
				i = o("./src/reddit/actions/modal.ts"),
				a = o("./src/reddit/actions/shortcuts/utils.ts"),
				c = o("./src/reddit/actions/toaster.ts"),
				u = o("./src/reddit/constants/modals.ts"),
				l = o("./src/reddit/endpoints/comment/index.tsx"),
				m = o("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				b = o("./src/reddit/models/Reportable/index.ts"),
				p = o("./src/reddit/models/Toast/index.ts"),
				f = o("./src/reddit/selectors/commentSelector.ts"),
				O = o("./src/reddit/selectors/user.ts"),
				v = o("./src/reddit/actions/comment/index.ts"),
				j = o("./src/reddit/actions/comment/constants.ts");
			const h = Object(n.a)(j.p),
				g = e => async (t, o, s) => {
					let {
						apiContext: r
					} = s;
					o().features.comments.models[e] && (await Object(l.j)(r(), e)).ok && t((e => async t => {
						t(h({
							commentId: e
						}))
					})(e))
				}, S = e => async (t, o, r) => {
					let {
						apiContext: n
					} = r;
					if (!Object(O.S)(o())) return void t(Object(i.i)(u.a.LOGIN_MODAL_ID));
					const d = o().features.comments.models[e];
					if (!d) return;
					const a = d.isLocked ? l.l : l.f;
					t(Object(v.j)({
						[e]: {
							isLocked: !d.isLocked
						}
					})), (await a(n(), e)).ok ? t(Object(c.f)({
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
				}, _ = Object(n.a)(j.J), y = e => async (t, o, r) => {
					let {
						apiContext: n,
						gqlContext: d
					} = r;
					const i = o(),
						u = i.features.comments.models[e],
						m = i.user.account ? i.user.account.displayText : null;
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
					})), Object(a.d)())
				}, A = (e, t) => async (o, r, n) => {
					let {
						apiContext: d,
						gqlContext: i
					} = n;
					const u = r(),
						m = u.features.comments.models[e],
						b = u.user.account ? u.user.account.displayText : null;
					m && b && (o(Object(v.j)({
						[e]: {
							approvedBy: null,
							bannedBy: b,
							bannedAtUTC: Date.now(),
							isApproved: !1,
							isRemoved: !t,
							isSpam: t,
							numReports: 0
						}
					})), (await Object(l.h)(i(), e, t)).ok ? o(Object(c.f)({
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
							isSpam: m.isSpam,
							numReports: m.numReports
						}
					})), Object(a.d)())
				}, R = e => async (t, o, r) => {
					let {
						apiContext: n
					} = r;
					const d = o().features.comments.models[e];
					if (!d) return;
					const i = d.ignoreReports ? l.k : l.e;
					d.ignoreReports || t(y(e)), t(Object(v.j)({
						[e]: {
							ignoreReports: !d.ignoreReports
						}
					})), (await i(n(), e)).ok ? t(Object(c.f)({
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
				}, E = (e, t, o) => async (n, d, i) => {
					let {
						gqlContext: a
					} = i;
					const u = Object(f.c)(d(), {
						commentId: e
					});
					if (!u) return;
					const l = o === r.kc.Snoozed,
						O = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(m.a)(a(), {
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
				}, k = (e, t, o) => async (s, n, i) => {
					let {
						apiContext: a,
						gqlContext: c
					} = i;
					const u = n(),
						m = u.features.comments.models[e];
					if (!m) return;
					const b = m.postId,
						p = u.postStickiedComments.data[b];
					s(Object(v.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === r.J.ADMIN,
							isMod: t === r.J.MODERATOR,
							isStickied: !!o
						}
					})), o && p && p !== e && s(Object(v.j)({
						[p]: {
							isStickied: !1
						}
					}));
					const f = Object(l.c)(c(), e, t),
						O = Object(l.d)(c(), e, !!o),
						j = [f];
					(o || !o && e === p) && j.push(O), (await Promise.all(j)).every(e => e.ok) ? o && s(_({
						id: e,
						postId: b,
						commentsPageKey: Object(d.a)(b, null, {
							sort: r.w.CONFIDENCE,
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
				return fe
			})), o.d(t, "d", (function() {
				return je
			})), o.d(t, "f", (function() {
				return _e
			})), o.d(t, "a", (function() {
				return ye
			})), o.d(t, "b", (function() {
				return Ae
			})), o.d(t, "c", (function() {
				return Re
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/constants/index.ts"),
				n = o("./src/lib/makeActionCreator/index.ts"),
				d = o("./src/reddit/actions/bulkActions/index.ts"),
				i = o("./src/reddit/actions/removalReasons/index.ts"),
				a = o("./src/reddit/actions/toaster.ts"),
				c = o("./src/reddit/constants/postLayout.ts"),
				u = o("./src/reddit/contexts/PageLayer/selectors.ts"),
				l = o("./src/reddit/endpoints/modQueue/index.ts"),
				m = o("./src/reddit/endpoints/user/index.ts"),
				b = o("./src/reddit/helpers/correlationIdTracker.ts"),
				p = o("./src/reddit/helpers/flair.ts"),
				f = o("./node_modules/Base64/base64.js"),
				O = o("./src/reddit/components/ModQueueList/PostSortDropdown.tsx"),
				v = o("./src/reddit/helpers/isPost.ts"),
				j = o("./src/reddit/selectors/commentSelector.ts"),
				h = o("./src/reddit/selectors/posts.ts"),
				g = o("./src/reddit/models/Flair/index.ts"),
				S = o("./src/reddit/selectors/experiments/realtimeMQUpdates.ts"),
				_ = o("./src/redditGQL/types.ts"),
				y = o("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				A = o("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				R = o("./src/reddit/helpers/graphql/normalizeModActivityFromGql/index.ts"),
				E = o("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				k = o("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const x = {
					[r.wb.Edited]: _.G.Edited,
					[r.wb.Modqueue]: _.G.Mod,
					[r.wb.Reports]: _.G.Reported,
					[r.wb.Spam]: _.G.Removed,
					[r.wb.Unmoderated]: _.G.Unmoderated
				},
				I = {
					comments: _.E.Comment,
					links: _.E.Post,
					chat_comments: _.E.ChatComment
				};

			function M(e) {
				let {
					getState: t,
					queueType: o,
					options: s
				} = e;
				var n, d;
				const i = t();
				let a;
				s.only && (a = I[s.only]);
				const c = {};
				s.after && (c[s.sort === O.a.OldestFirst ? "before" : "after"] = function(e, t) {
					const o = Object(v.a)(t) ? Object(h.G)(e, {
						postId: t
					}) : Object(j.c)(e, {
						commentId: t
					});
					if (o) return Object(f.btoa)(`${o.id}|${o.created}`)
				}(i, s.after));
				const u = {};
				s.sort === O.a.OldestFirst ? u.last = 25 : u.first = 25;
				const l = Object(S.a)(i),
					m = s.subreddit ? [s.subreddit] : [],
					b = (null == i ? void 0 : i.platform) && (null === (n = null == i ? void 0 : i.platform) || void 0 === n ? void 0 : n.currentPage),
					p = (null === (d = null == b ? void 0 : b.meta) || void 0 === d ? void 0 : d.name) === r.Sb.MODQUEUE_PAGES;
				return {
					queueType: x[o],
					moderatedAfter: s.moderatedAfter,
					...u,
					...!!a && {
						itemTypes: a
					},
					subredditNames: m,
					...!!s.profile && {
						subredditIds: [s.profile]
					},
					sort: s.sort === O.a.MostReportedFirst ? _.F.SortReports : _.F.SortDate,
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
						icon: o,
						profile: s,
						snoovatarIcon: r,
						isAcceptingFollowers: n,
						displayName: d,
						prefixedName: i,
						name: a
					} = e;
					return {
						accountIcon: null == o ? void 0 : o.url,
						displayName: d,
						displayNamePrefixed: i,
						displayText: a,
						enableFollowers: n,
						id: t,
						profileId: null == s ? void 0 : s.id,
						snoovatarFullBodyAsset: (null == r ? void 0 : r.url) || null,
						username: a
					}
				};

			function w(e) {
				let {
					modQueueItems: t,
					identity: o,
					moderatedSubredditActivityByNames: s
				} = e;
				var r, n, d, i, a;
				const c = {
					posts: {},
					comments: {},
					reports: {},
					modActivitySummaries: {},
					modqueue: [],
					authorFlair: {},
					moderatedAfter: (null === (r = null == o ? void 0 : o.redditor.moderatedSubreddits) || void 0 === r ? void 0 : r.pageInfo.hasNextPage) ? null === (n = null == o ? void 0 : o.redditor.moderatedSubreddits) || void 0 === n ? void 0 : n.pageInfo.endCursor : null,
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
				const u = null === (d = null == o ? void 0 : o.redditor.moderatedSubredditActivity) || void 0 === d ? void 0 : d.edges.reduce((e, t) => {
						var o;
						if (!(null === (o = null == t ? void 0 : t.node) || void 0 === o ? void 0 : o.moderation)) return e;
						const {
							subreddit: s,
							summary: r
						} = Object(R.a)(t.node);
						return e.summaries[t.node.id] = r, e.subreddits[t.node.id] = s, e
					}, {
						subreddits: {},
						summaries: {}
					}),
					l = null == s ? void 0 : s.reduce((e, t) => {
						if (!(t && "modPermissions" in t && (null == t ? void 0 : t.modPermissions))) return e;
						if (e.moderatingSubreddits[t.id] = C(t.modPermissions), !(null == t ? void 0 : t.moderation)) return e;
						const {
							subreddit: o,
							summary: s
						} = Object(R.a)(t);
						return e.summaries[t.id] = s, e.subreddits[t.id] = o, e
					}, {
						subreddits: {},
						summaries: {},
						moderatingSubreddits: {}
					});
				c.modActivitySummaries = {
					...null == u ? void 0 : u.summaries,
					...null == l ? void 0 : l.summaries
				};
				const m = null === (a = null === (i = null == o ? void 0 : o.redditor.moderatedSubreddits) || void 0 === i ? void 0 : i.edges) || void 0 === a ? void 0 : a.reduce((e, t) => {
					var o;
					if (!(null === (o = null == t ? void 0 : t.node) || void 0 === o ? void 0 : o.modPermissions)) return e;
					const s = t.node.modPermissions;
					return e.moderatingSubreddits[t.node.id] = C(s), e.subreddits[t.node.id] = Object(k.a)(t.node), e
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
					var t, o, s, r, n, d, i;
					if (!e) return;
					const {
						node: a
					} = e;
					if (!a) return;
					const {
						__typename: u,
						subredditInfo: l
					} = a;
					if (!l) return;
					const {
						id: m
					} = l;
					if (c.subreddits[m] = Object(k.a)(l), c.moderatingSubreddits[m] || "Subreddit" !== (null == l ? void 0 : l.__typename) || (c.moderatingSubreddits[m] = C(l.modPermissions)), !c.postFlair[m] && "Subreddit" === l.__typename) {
						const {
							position: e,
							isEnabled: o
						} = (null == l ? void 0 : l.postFlairSettings) || {};
						c.postFlair[m] = {
							displaySettings: {
								position: null == e ? void 0 : e.toLowerCase(),
								isEnabled: o
							},
							...(null === (t = null == l ? void 0 : l.postFlairTemplates) || void 0 === t ? void 0 : t.reduce((e, t) => {
								let {
									id: o,
									text: s,
									isEditable: r,
									richtext: n,
									type: d,
									textColor: i,
									backgroundColor: a,
									isModOnly: c,
									cssClass: u,
									maxEmojis: l,
									allowableContent: m
								} = t;
								return o ? (e.templateIds.push(o), e.templates[o] = {
									id: o,
									text: s || "",
									textEditable: r,
									type: d || g.f.Text,
									textColor: (null == i ? void 0 : i.toLowerCase()) || void 0,
									backgroundColor: (null == a ? void 0 : a.toLowerCase()) || void 0,
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
						} = a;
						if (!e) return;
						const t = Object(y.a)(e);
						if (null === (o = e.moderationInfo) || void 0 === o ? void 0 : o.verdictBy) {
							const t = N(null === (s = e.moderationInfo) || void 0 === s ? void 0 : s.verdictBy);
							t.username && (c.users[null == t ? void 0 : t.username] = t)
						}
						c.comments[t.id] = t, c.listingOrder.push({
							id: t.id,
							type: "comment"
						}), c.modqueue.push(t.id);
						const {
							authorInfo: n,
							authorFlair: d
						} = e, i = d ? null === (r = Object(A.a)(d)) || void 0 === r ? void 0 : r[0] : null;
						c.authorFlair[m] = {
							...c.authorFlair[m],
							...(null == n ? void 0 : n.name) ? {
								[null == n ? void 0 : n.name]: i
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
						} = a;
						if (null === (n = null == e ? void 0 : e.moderationInfo) || void 0 === n ? void 0 : n.verdictBy) {
							const t = N(null === (d = e.moderationInfo) || void 0 === d ? void 0 : d.verdictBy);
							t.username && (c.users[null == t ? void 0 : t.username] = t)
						}
						if (!e) return;
						const t = Object(E.f)(e);
						c.posts[t.id] = t, c.listingOrder.push({
							id: t.id,
							type: "post"
						}), c.modqueue.push(t.id);
						const {
							authorInfo: o,
							authorFlair: s
						} = e, r = s ? null === (i = Object(A.a)(s)) || void 0 === i ? void 0 : i[0] : null;
						c.authorFlair[m] = {
							...c.authorFlair[m],
							...(null == o ? void 0 : o.name) ? {
								[null == o ? void 0 : o.name]: r
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
			var L = o("./src/reddit/models/ModQueue/index.ts"),
				D = o("./src/reddit/models/Toast/index.ts"),
				T = o("./src/reddit/selectors/modQueue.ts"),
				F = o("./src/reddit/selectors/subreddit.ts"),
				q = o("./src/reddit/selectors/telemetry.ts"),
				Q = o("./src/telemetry/index.ts"),
				U = o("./src/lib/initializeClient/installReducer.ts"),
				B = o("./src/reddit/reducers/features/modActivitySummaries/index.ts"),
				G = o("./node_modules/redux/es/redux.js"),
				V = o("./node_modules/icepick/icepick.js"),
				H = o("./src/reddit/actions/modQueue/constants.ts");
			const $ = {};
			var K = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case H.i:
					case H.f:
					case H.r:
					case H.u:
					case H.A: {
						const {
							response: o
						} = t.payload, {
							comments: s,
							posts: r
						} = o, n = {};
						return [...Object.values(s), ...Object.values(r)].forEach(e => {
							var t;
							const o = null === (t = e.previousActions) || void 0 === t ? void 0 : t.actions;
							o && o.length && o.forEach(e => e.modAction ? n[e.modAction.id] = e.modAction : !!e.reportAction && (n[e.reportAction.id] = e.reportAction))
						}), Object(V.merge)(e, n)
					}
					case H.l: {
						const {
							summary: o
						} = t.payload, {
							mods: s
						} = o, r = {};
						return Object.values(s).forEach(e => {
							const {
								lastModAction: t,
								info: o
							} = e;
							t && t.id && (r[t.id] = {
								...t,
								__typename: "ModAction",
								moderatorInfo: o
							})
						}), Object(V.merge)(e, r)
					}
					default:
						return e
				}
			};
			const z = {};
			var W = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case H.i:
						case H.f:
						case H.r:
						case H.u:
						case H.A: {
							const {
								response: o
							} = t.payload, {
								comments: s,
								posts: r
							} = o, n = [...Object.values(s), ...Object.values(r)].reduce((e, t) => {
								var o;
								const s = null === (o = t.previousActions) || void 0 === o ? void 0 : o.actions;
								return s && s.length && (e[t.id] = s.map(e => {
									var t, o;
									return (null === (t = e.modAction) || void 0 === t ? void 0 : t.id) || (null === (o = e.reportAction) || void 0 === o ? void 0 : o.id)
								}).filter(e => !!e).splice(0, 5)), e
							}, {});
							return Object(V.merge)(e, n)
						}
						case H.l: {
							const {
								summary: o
							} = t.payload, {
								mods: s
							} = o, r = {};
							return Object.values(s).forEach(t => {
								const {
									lastModAction: o
								} = t;
								o && o.id && o.target && (r[o.target.id] = [o.id, ...e[o.target.id] || []].splice(0, 5))
							}), Object(V.merge)(e, r)
						}
						default:
							return e
					}
				},
				J = Object(G.c)({
					models: K,
					order: W
				}),
				X = o("./src/reddit/reducers/features/realtimeModqueue/index.ts"),
				Y = o("./src/reddit/reducers/pages/modHub/index.ts");
			Object(U.a)({
				pages: {
					modHub: Y.a
				}
			}), Object(U.a)({
				features: {
					modActivitySummaries: B.a
				}
			}), Object(U.a)({
				features: {
					modPreviousActions: J
				}
			}), Object(U.a)({
				features: {
					realtimeModqueue: X.a
				}
			});
			const Z = Object(n.a)(H.k),
				ee = Object(n.a)(H.j),
				te = Object(n.a)(H.i),
				oe = Object(n.a)(H.h),
				se = Object(n.a)(H.g),
				re = Object(n.a)(H.f),
				ne = Object(n.a)(H.e),
				de = Object(n.a)(H.s),
				ie = Object(n.a)(H.r),
				ae = Object(n.a)(H.q),
				ce = Object(n.a)(H.v),
				ue = Object(n.a)(H.u),
				le = Object(n.a)(H.t),
				me = Object(n.a)(H.B),
				be = Object(n.a)(H.A),
				pe = Object(n.a)(H.z),
				fe = (e, t, o) => async (n, d, i) => {
					let {
						apiContext: b,
						gqlContext: p
					} = i;
					var f;
					let O, v, j;
					switch (t) {
						case r.wb.Edited:
							O = se, v = ne, j = re;
							break;
						case r.wb.Modqueue:
							O = ee, v = oe, j = te;
							break;
						case r.wb.Reports:
							O = de, v = ae, j = ie;
							break;
						case r.wb.Spam:
							O = ce, v = le, j = ue;
							break;
						case r.wb.Unmoderated:
							O = me, v = pe, j = be;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					if (n(O()), o.profile) {
						const e = null === (f = (await Object(m.b)(b(), o.profile)).body[o.profile]) || void 0 === f ? void 0 : f.profileId;
						o.profile = e
					}
					const h = M({
							getState: d,
							queueType: t,
							options: o
						}),
						g = await Object(l.b)(p(), h);
					if (!g.ok) return n(v(g.error)), void n(Object(a.f)({
						kind: D.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}));
					const {
						users: S,
						..._
					} = w(g.body.data), y = d(), A = c.e[Object(u.V)(y, {})] === c.d.Card;
					Object(T.b)(y, A) && n(Z(S)), n(j({
						listingKey: e,
						page: `${o.page||L.b}`,
						response: _
					}))
				}, Oe = Object(n.a)(H.n), ve = Object(n.a)(H.b), je = e => async (t, o, r) => {
					let {
						gqlContext: n
					} = r;
					const d = o(),
						i = d.pages.modHub.modQueue.moderatedCommunitiesOrder.after,
						c = d.pages.modHub.modQueue.moderatedCommunitiesOrder.pending,
						u = d.pages.modHub.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: m
						} = d.platform.currentPage.urlParams;
					if (e && c || u || !i) return;
					const b = M({
							getState: o,
							queueType: m,
							options: {
								moderatedAfter: i
							}
						}),
						p = await Object(l.b)(n(), b);
					if (!p.ok) return void t(Object(a.f)({
						kind: D.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}));
					const f = w(p.body.data);
					t(Oe(f)), f.moderatedAfter ? t(je()) : t(ve())
				}, he = Object(n.a)(H.y), ge = Object(n.a)(H.x), Se = Object(n.a)(H.w), _e = (e, t, o) => async (r, n, c) => {
					let {
						apiContext: u
					} = c;
					r(Object(d.c)());
					const m = n(),
						f = Object(T.i)(m),
						O = m.user.account && m.user.account.displayText;
					Object(b.d)(b.a.ModQueue);
					const j = Object(b.c)(b.a.ModQueue);
					Object(Q.a)({
						source: "bulk_mod_action_menu",
						action: "click",
						noun: e,
						...q.o(m),
						actionInfo: q.d(m, {
							count: f.length,
							paneName: m.platform.currentPage ? m.platform.currentPage.urlParams.pageName : void 0
						}),
						screen: q.cb(m),
						correlationId: j
					});
					for (let t = 0; t < f.length; t++) {
						const o = f[t];
						let s = e;
						[L.a.Approve, L.a.Remove, L.a.Spam].includes(e) && (Object(v.a)(o) ? s += "_link" : s += "_comment"), Object(Q.a)({
							source: "bulk_mod_action",
							action: "click",
							noun: s,
							...q.o(m),
							actionInfo: q.d(m, {
								count: f.length,
								paneName: m.platform.currentPage ? m.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: q.h({
								state: m,
								commentId: o
							}),
							post: q.K(m, o),
							profile: q.V(m, o),
							screen: q.cb(m),
							subreddit: q.ob(m, o),
							correlationId: j
						})
					}
					Object(b.b)(b.a.ModQueue);
					const h = {
						ids: f
					};
					t && (h.text = Object(p.g)(t) || "", h.flairTemplateId = ""), o && (h.cssClass = o, h.flairTemplateId = o);
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
						const o = function(e, t) {
							switch (e) {
								case L.a.Approve:
									return s.fbt._({
										"*": "{number} posts/comments have been approved",
										_1: "1 post/comment has been approved"
									}, [s.fbt._plural(t, "number")], {
										hk: "2kKhSf"
									});
								case L.a.Flair:
									return s.fbt._({
										"*": "{number} posts/comments have had flair applied",
										_1: "1 post/comment has had flair applied"
									}, [s.fbt._plural(t, "number")], {
										hk: "3syB5O"
									});
								case L.a.IgnoreReports:
									return s.fbt._({
										"*": "{number} posts/comments have had their reports ignored",
										_1: "1 post/comment has had their reports ignored"
									}, [s.fbt._plural(t, "number")], {
										hk: "2WfE4g"
									});
								case L.a.Lock:
									return s.fbt._({
										"*": "{number} posts/comments have been locked",
										_1: "1 post/comment has been locked"
									}, [s.fbt._plural(t, "number")], {
										hk: "45oMbv"
									});
								case L.a.MarkNSFW:
									return s.fbt._({
										"*": "{number} posts/comments have been marked NSFW",
										_1: "1 post/comment has been marked NSFW"
									}, [s.fbt._plural(t, "number")], {
										hk: "oPsQr"
									});
								case L.a.RemovalReason:
									return s.fbt._({
										"*": "{number} posts/comments have had removal reasons applied",
										_1: "1 post/comment has had removal reasons applied"
									}, [s.fbt._plural(t, "number")], {
										hk: "35Tosn"
									});
								case L.a.Remove:
									return s.fbt._({
										"*": "{number} posts/comments have been removed",
										_1: "1 post/comment has been removed"
									}, [s.fbt._plural(t, "number")], {
										hk: "B1ZbE"
									});
								case L.a.Spam:
									return s.fbt._({
										"*": "{number} posts/comments have been marked as spam",
										_1: "1 post/comment has been marked as spam"
									}, [s.fbt._plural(t, "number")], {
										hk: "3OoNfp"
									});
								case L.a.Spoiler:
									return s.fbt._({
										"*": "{number} posts/comments have been marked as spoilers",
										_1: "1 post/comment has been marked as spoilers"
									}, [s.fbt._plural(t, "number")], {
										hk: "1DFW5M"
									});
								case L.a.UnignoreReports:
									return s.fbt._({
										"*": "{number} posts/comments have had their reports un-ignored",
										_1: "1 post/comment has had their reports un-ignored"
									}, [s.fbt._plural(t, "number")], {
										hk: "303Hpb"
									});
								case L.a.Unlock:
									return s.fbt._({
										"*": "{number} posts/comments have been unlocked",
										_1: "1 post/comment has been unlocked"
									}, [s.fbt._plural(t, "number")], {
										hk: "5gUht"
									});
								case L.a.UnmarkNSFW:
									return s.fbt._({
										"*": "{number} posts/comments have been un-marked as NSFW",
										_1: "1 post/comment has been un-marked as NSFW"
									}, [s.fbt._plural(t, "number")], {
										hk: "3oSSST"
									});
								case L.a.Unspoiler:
								case L.a.Unspoiler:
									return s.fbt._({
										"*": "{number} posts/comments have been un-marked as spoilers",
										_1: "1 post/comment has been un-marked as spoilers"
									}, [s.fbt._plural(t, "number")], {
										hk: "3lHoNI"
									})
							}
						}(e, f.length);
						if (e !== L.a.Approve && e !== L.a.Flair) {
							let t, n;
							const c = m.platform.currentPage && m.platform.currentPage.queryParams && m.platform.currentPage.queryParams.subreddit,
								u = c && Object(F.I)(m, c);
							e === L.a.Remove && u && f.length > 1 && (t = s.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), n = Object(i.fetchReasonsAndOpenModal)(u, f));
							const b = Object(a.e)(o, D.b.Undo, s.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, o) => {
								let {
									apiContext: r
								} = o;
								e(he());
								const n = t(),
									i = Object.keys(n.pages.modHub.modQueue.bulkAction.undoLastAction)[0],
									c = n.pages.modHub.modQueue.bulkAction.undoLastAction[i],
									u = n.user.account && n.user.account.displayText;
								e(Object(d.c)());
								const m = await Object(l.a)(r(), i, {
									ids: c
								});
								m.ok ? e(ge({
									...m.body,
									operation: i,
									ids: c,
									username: u
								})) : (e(Se(m.error)), e(Object(a.f)({
									kind: D.b.Error,
									text: s.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, n);
							r(Object(a.f)(b))
						} else {
							const e = Object(a.e)(o, D.b.SuccessMod);
							r(Object(a.f)(e))
						}
					} else {
						r(Object(d.a)(g.error));
						const e = Object(a.e)(s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), D.b.Error);
						r(Object(a.f)(e))
					}
				}, ye = Object(n.a)(H.a), Ae = Object(n.a)(H.c), Re = Object(n.a)(H.d)
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
				i = o("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				a = o("./src/reddit/helpers/pageActionLoginRedirect.ts"),
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
					profile: v,
					subreddit: j
				} = f, h = o();
				if (!p) return;
				const g = Object(i.a)({
						onlyOfType: f.only,
						profile: f.profile,
						sort: f.sort,
						subreddit: f.subreddit
					}),
					S = h.pages.modHub.modQueue[p].itemOrder[g],
					_ = !!(null === (b = null == S ? void 0 : S[O]) || void 0 === b ? void 0 : b.length),
					y = h.pages.modHub.modQueue[p].api.error;
				if (h.pages.modHub.modQueue[p].api.pending || _ && !y) return;
				Object(m.q)(h) || await Object(u.e)(g, p, f)(t, o, s);
				const A = o();
				if (r()(A.pages.modHub.modQueue[p].api.error, "type") === n.L.AUTHENTICATION_ERROR) return Object(a.a)(t, A);
				Object(c.j)(A, j, v), t(l.m({
					title: Object(d.i)()
				}))
			}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "removalReasonsPending", (function() {
				return Z
			})), o.d(t, "removalReasonsLoaded", (function() {
				return ee
			})), o.d(t, "removalReasonsFailed", (function() {
				return te
			})), o.d(t, "removalReasonsRequested", (function() {
				return oe
			})), o.d(t, "removalReasonAddedPending", (function() {
				return se
			})), o.d(t, "removalReasonAddedSuccess", (function() {
				return re
			})), o.d(t, "removalReasonAddedFailed", (function() {
				return ne
			})), o.d(t, "addRemovalReason", (function() {
				return de
			})), o.d(t, "editRemovalReasonPending", (function() {
				return ie
			})), o.d(t, "editRemovalReasonSuccess", (function() {
				return ae
			})), o.d(t, "editRemovalReasonFailed", (function() {
				return ce
			})), o.d(t, "editRemovalReason", (function() {
				return ue
			})), o.d(t, "deleteRemovalReasonPending", (function() {
				return le
			})), o.d(t, "deleteRemovalReasonSuccess", (function() {
				return me
			})), o.d(t, "deleteRemovalReasonFailed", (function() {
				return be
			})), o.d(t, "deleteRemovalReason", (function() {
				return pe
			})), o.d(t, "removedItemsSelected", (function() {
				return fe
			})), o.d(t, "fetchReasonsAndOpenModal", (function() {
				return Oe
			})), o.d(t, "removalReasonSubmittedPending", (function() {
				return ve
			})), o.d(t, "removalReasonSubmittedSuccess", (function() {
				return je
			})), o.d(t, "removalReasonSubmittedFailed", (function() {
				return he
			})), o.d(t, "removalReasonMessagePending", (function() {
				return ge
			})), o.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return Se
			})), o.d(t, "removalReasonPublicMessageSuccess", (function() {
				return _e
			})), o.d(t, "removalReasonMessageFailed", (function() {
				return ye
			})), o.d(t, "submitRemovalReason", (function() {
				return Ae
			})), o.d(t, "submitBulkRemovalReason", (function() {
				return Re
			}));
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/initializeClient/installReducer.ts"),
				n = o("./node_modules/redux/es/redux.js");
			const d = "REMOVALREASONS__LOAD_SUCCESS",
				i = "REMOVALREASONS__ADD_PENDING",
				a = "REMOVALREASONS__ADD_SUCCESS",
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
					case i:
					case a:
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
						case i:
						case u:
						case b:
							return !0;
						case d:
						case "REMOVALREASONS__LOAD_FAILED":
						case a:
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
			const S = {};
			var _ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
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
			var y = function() {
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
				A = Object(n.c)({
					api: j,
					models: g,
					reasonOrder: _,
					removedItemIds: y
				}),
				R = o("./src/lib/constants/index.ts"),
				E = o("./src/lib/makeActionCreator/index.ts"),
				k = o("./src/lib/makeCommentsPageKey/index.ts"),
				x = o("./src/lib/makeDraftKey/index.ts"),
				I = o("./src/reddit/actions/bulkActions/index.ts"),
				M = o("./src/reddit/actions/comment/index.ts"),
				P = o("./src/reddit/actions/comment/authoring.ts"),
				C = o("./src/reddit/actions/comment/moderation.ts"),
				N = o("./src/reddit/actions/modal.ts"),
				w = o("./src/reddit/actions/post.ts"),
				L = o("./src/reddit/actions/toaster.ts"),
				D = o("./src/reddit/constants/modals.ts"),
				T = o("./src/lib/makeApiRequest/index.ts"),
				F = o("./src/lib/omitHeaders/index.ts"),
				q = o("./src/reddit/constants/headers.ts"),
				Q = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				U = o("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const B = (e, t) => Object(T.a)(Object(F.a)(e, [q.a]), {
					endpoint: Object(Q.a)(`${e.apiUrl}/api/v1/modactions/removal_reasons/`),
					method: R.ob.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				G = (e, t, o) => Object(T.a)(Object(F.a)(e, [q.a]), {
					endpoint: Object(Q.a)(Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_${o}_message/`)),
					method: R.ob.POST,
					type: "json",
					data: t
				});
			var V = o("./src/reddit/helpers/isPost.ts"),
				H = o("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				$ = o("./src/reddit/helpers/routeKey/index.ts"),
				K = o("./src/reddit/models/ModQueue/index.ts"),
				z = o("./src/reddit/models/PostDraft/index.ts"),
				W = o("./src/reddit/models/RemovalReason/index.ts"),
				J = o("./src/reddit/models/Toast/index.ts"),
				X = o("./src/reddit/selectors/comments.ts"),
				Y = o("./src/reddit/selectors/platform.ts");
			Object(r.a)({
				features: {
					removalReasons: A
				}
			});
			const Z = Object(E.a)("REMOVALREASONS__LOAD_PENDING"),
				ee = Object(E.a)(d),
				te = Object(E.a)("REMOVALREASONS__LOAD_FAILED"),
				oe = e => async (t, o, s) => {
					let {
						apiContext: r
					} = s;
					const n = o().subreddits.models[e].name;
					t(Z());
					const d = await ((e, t) => Object(T.a)(Object(F.a)(e, [q.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: R.ob.GET
					}))(r(), n);
					d.ok ? t(ee({
						subredditId: e,
						response: d.body
					})) : t(te(d.error))
				}, se = Object(E.a)(i), re = Object(E.a)(a), ne = Object(E.a)(c), de = (e, t) => async (o, r, n) => {
					let {
						apiContext: d
					} = n;
					const i = r().subreddits.models[e].name;
					o(se());
					const a = await ((e, t, o) => Object(T.a)(Object(F.a)(e, [q.a]), {
						endpoint: Object(Q.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons`),
						method: R.ob.POST,
						data: o
					}))(d(), i, t);
					if (a.ok) {
						const {
							id: r
						} = a.body, n = {
							...t,
							id: r
						};
						o(re({
							subredditId: e,
							reason: n
						})), o(Object(L.f)({
							kind: J.b.SuccessMod,
							text: s.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else o(ne(a.error))
				}, ie = Object(E.a)(u), ae = Object(E.a)(l), ce = Object(E.a)(m), ue = (e, t) => async (o, r, n) => {
					let {
						apiContext: d
					} = n;
					const i = r().subreddits.models[e].name;
					o(ie());
					const a = await ((e, t, o) => Object(T.a)(Object(F.a)(e, [q.a]), {
						endpoint: Object(Q.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${o.id}`),
						method: R.ob.PUT,
						data: {
							message: o.message,
							title: o.title
						}
					}))(d(), i, t);
					a.ok ? (o(ae({
						subredditId: e,
						reason: t
					})), o(Object(L.f)({
						kind: J.b.SuccessMod,
						text: s.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : o(ce(a.error))
				}, le = Object(E.a)(b), me = Object(E.a)(p), be = Object(E.a)(f), pe = (e, t) => async (o, r, n) => {
					let {
						apiContext: d
					} = n;
					const i = r().subreddits.models[e].name;
					o(le());
					const a = await ((e, t, o) => Object(T.a)(Object(F.a)(e, [q.a]), {
						endpoint: Object(Q.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${o}`),
						method: R.ob.DELETE
					}))(d(), i, t);
					a.ok ? (o(me({
						subredditId: e,
						reasonId: t
					})), o(Object(L.f)({
						kind: J.b.SuccessMod,
						text: s.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : o(be(a.error))
				}, fe = Object(E.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), Oe = (e, t) => async (o, s, r) => {
					let {
						apiContext: n
					} = r;
					const d = s();
					d.features.removalReasons.reasonOrder[e] && d.features.removalReasons.reasonOrder[e].length > 0 || o(oe(e)), o(fe({
						subredditId: e,
						itemIds: t
					})), o(Object(N.i)(D.a.ADD_REMOVAL_REASON))
				}, ve = Object(E.a)("REMOVALREASONS__SUBMIT_PENDING"), je = Object(E.a)("REMOVALREASONS__SUBMIT_SUCCESS"), he = Object(E.a)("REMOVALREASONS__SUBMIT_FAILED"), ge = Object(E.a)("REMOVALREASONS__MESSAGE_PENDING"), Se = Object(E.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), _e = Object(E.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), ye = Object(E.a)("REMOVALREASONS__MESSAGE_FAILED"), Ae = (e, t, o, s, r, n) => async (d, i, a) => {
					let {
						apiContext: c
					} = a;
					const u = i(),
						l = u.user.account && u.user.account.displayText,
						m = e[0],
						b = Object(V.a)(m) ? W.e.Post : W.e.Comment,
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
						v = await B(c(), O);
					if (v.ok) {
						if (d(je()), t) {
							d(ge());
							const r = {
									itemId: e,
									message: o,
									title: t.title,
									isLocked: n,
									type: s
								},
								i = await G(c(), Object(W.h)(r, b), b);
							if (i.ok) {
								if ([W.f.Public, W.f.PublicAsSubreddit].includes(s)) {
									if (d(_e()), i.body) {
										const e = Object(H.a)(i.body),
											t = {
												comment: e,
												parentId: m
											},
											o = Object(Y.f)(u),
											s = u.platform.currentPage && u.platform.currentPage.routeMatch;
										let r = o && s && Object($.a)(s, u, u.posts.models[e.postId]);
										if (r || (r = Object(k.a)(e.postId, null, {
												sort: R.x,
												hasSortParam: !0
											})), b === W.e.Post) {
											const o = Object(x.a)(z.c.replyToPost, m);
											d(Object(P.r)({
												...t,
												headCommentId: Object(X.w)(u, {
													commentsPageKey: r
												}),
												commentsPageKey: r,
												draftKey: o
											}));
											const s = u.postStickiedComments.data[m];
											d(Object(C.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: r
											})), s && s !== e.id && d(Object(M.j)({
												[s]: {
													isStickied: !1
												}
											}))
										} else if (b === W.e.Comment) {
											const e = Object(x.a)(z.c.replyToComment, p.id),
												o = Object(X.j)(u, {
													commentId: m,
													commentsPageKey: r
												});
											d(Object(P.p)({
												...t,
												parentCommentId: m,
												commentsPageKey: r,
												draftKey: e,
												depth: o + 1
											}))
										}
									}
								} else d(Se());
								return !0
							}
							return d(ye(i.error)), !1
						}
					} else d(he(v.error)), d(f({
						[m]: {
							modNote: p.modNote,
							modRemovalReason: p.modRemovalReason,
							modReasonBy: p.modReasonBy
						}
					}));
					return !1
				}, Re = (e, t, o, r, n) => async (d, i, a) => {
					let {
						apiContext: c
					} = a;
					const u = i(),
						l = u.user.account && u.user.account.displayText;
					if (!l) return;
					d(ve());
					const m = Object(L.f)({
							kind: J.b.SuccessMod,
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
							operation: K.a.RemovalReason,
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
								n = await G(c(), Object(W.h)(s, W.e.Bulk), W.e.Bulk);
							n.ok ? (d(Se()), d(m)) : d(ye(n.error))
						} else d(m)
					} else d(he(p.error))
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
				i = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
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
			const v = l.a.wrapped(m.b, "Row", O.a),
				j = Object(a.c)({
					currentPage: e => e.platform.currentPage,
					origin: p.k
				}),
				h = Object(i.b)(j);
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
					sort: s.OldestFirst
				})
			}, d.a.createElement(v, {
				displayText: r.fbt._("Oldest first", null, {
					hk: "1x9Jdr"
				}),
				isSelected: e.postSort === s.OldestFirst
			})), d.a.createElement(b.default, {
				onClick: e.sendEventWithName("modqueue_sort_most_reports"),
				to: Object(c.a)(Object(u.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
					sort: s.MostReportedFirst
				})
			}, d.a.createElement(v, {
				displayText: r.fbt._("Most reported first", null, {
					hk: "2ac4Mt"
				}),
				isSelected: e.postSort === s.MostReportedFirst
			}))))
		},
		"./src/reddit/helpers/graphql/normalizeModActivityFromGql/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			}));
			var s = o("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const r = e => {
				const {
					moderation: t,
					...o
				} = e, {
					lastModActionAt: r,
					activeModerators: n
				} = (null == t ? void 0 : t.modActivitySummary) || {}, d = [], i = {};
				null == n || n.edges.map(e => {
					if (!(null == e ? void 0 : e.node)) return;
					const {
						lastModAction: t,
						moderator: o
					} = e.node;
					if (!o) return;
					const s = null == o ? void 0 : o.id;
					s && (d.push(s), i[s] || (i[s] = {
						info: {},
						lastModAction: {}
					}), i[s].info = o, i[s].lastModAction = {
						...t
					})
				});
				const a = {
					lastModActionAt: r,
					activeMods: d
				};
				return {
					subreddit: Object(s.a)(o),
					summary: {
						sub: a,
						mods: i
					}
				}
			}
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
				return "comments" !== e.onlyOfType && "links" !== e.onlyOfType && "chat_comments" !== e.onlyOfType || (r += `--[${e.onlyOfType}]`), e.sort && e.sort !== s.a.NewestFirst && (r += `--[${e.sort}]`), r
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
				return i
			})), o.d(t, "f", (function() {
				return a
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
				i = 100;
			var a, c;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public", e.PublicAsSubreddit = "public_as_subreddit"
			}(a || (a = {})),
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
		"./src/reddit/reducers/features/modActivitySummaries/index.ts": function(e, t, o) {
			"use strict";
			var s = o("./src/reddit/actions/modQueue/constants.ts");
			t.a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.l: {
						const {
							summary: o,
							subreddit: s
						} = t.payload;
						return {
							...e,
							[s.id]: {
								...e[s.id],
								...o
							}
						}
					}
					case s.i:
					case s.f:
					case s.r:
					case s.u:
					case s.A: {
						const {
							response: o
						} = t.payload;
						return {
							...e,
							...o.modActivitySummaries
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/realtimeModqueue/index.ts": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/redux/es/redux.js"),
				r = o("./src/reddit/actions/modQueue/constants.ts");
			var n = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.m: {
							const {
								targetID: o
							} = t.payload;
							return e.includes(o) ? e : [...e, o]
						}
						case r.p: {
							const {
								targetID: o
							} = t.payload, s = e.indexOf(o);
							return s > -1 && e.splice(s, 1), e
						}
						default:
							return e
					}
				},
				d = (o("./node_modules/core-js/modules/web.dom.iterable.js"), o("./src/reddit/actions/comment/constants.ts")),
				i = o("./src/reddit/actions/platform.ts"),
				a = o("./src/reddit/actions/post.ts");
			const c = ["isApproved", "isRemoved", "isSpam"];
			var u = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.q:
					case a.k: {
						const o = t.payload;
						return Object.keys(o).map(t => {
							const s = Object.keys(o[t]);
							let r = !1;
							s.map(e => {
								c.includes(e) && (r = !0)
							}), !e.includes(t) && r && (e = [...e, t])
						}), e
					}
					case r.p: {
						const {
							targetID: o
						} = t.payload;
						return e.includes(o) ? e : [...e, o]
					}
					case i.f:
						return [];
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				toUpdate: n,
				updated: u
			})
		},
		"./src/reddit/selectors/experiments/modqueueActionBarUXImprovements.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return d
			}));
			var s = o("./src/reddit/constants/experiments.ts"),
				r = o("./src/reddit/helpers/chooseVariant/index.ts"),
				n = o("./src/reddit/selectors/user.ts");
			const d = e => Object(r.c)(e, {
				experimentEligibilitySelector: n.S,
				experimentName: s.cc
			}) === s.Sd
		},
		"./src/reddit/selectors/experiments/realtimeMQUpdates.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return i
			}));
			var s = o("./src/reddit/constants/experiments.ts"),
				r = o("./src/reddit/helpers/chooseVariant/index.ts"),
				n = o("./src/reddit/selectors/user.ts"),
				d = o("./src/reddit/selectors/experiments/modqueueActionBarUXImprovements.ts");
			const i = e => Object(d.a)(e) && Object(r.c)(e, {
				experimentEligibilitySelector: n.S,
				experimentName: s.Cc
			}) === s.Sd
		},
		"./src/reddit/selectors/modQueue.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return l
			})), o.d(t, "f", (function() {
				return m
			})), o.d(t, "e", (function() {
				return b
			})), o.d(t, "g", (function() {
				return p
			})), o.d(t, "i", (function() {
				return f
			})), o.d(t, "a", (function() {
				return O
			})), o.d(t, "h", (function() {
				return v
			})), o.d(t, "c", (function() {
				return j
			})), o.d(t, "b", (function() {
				return h
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = o("./src/lib/constants/index.ts"),
				r = o("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				n = o("./src/lib/objectSelector/index.ts"),
				d = o("./src/lib/initializeClient/installReducer.ts"),
				i = o("./src/reddit/reducers/features/comments/index.ts"),
				a = o("./src/reddit/reducers/pages/modHub/index.ts"),
				c = o("./src/reddit/selectors/experiments/modqueueActionBarUXImprovements.ts");
			Object(d.a)({
				features: {
					comments: i.a
				},
				pages: {
					modHub: a.a
				}
			});
			const u = (e, t) => Object(r.a)({
					onlyOfType: t.queryParams.only,
					profile: t.profileName,
					sort: t.queryParams.sort,
					subreddit: t.subredditName
				}),
				l = Object(n.a)((e, t) => {
					var o, s, r;
					const {
						pageName: n,
						page: d
					} = t, i = u(0, t);
					if (null === (r = null === (s = null === (o = e.pages.modHub.modQueue[n]) || void 0 === o ? void 0 : o.itemOrder) || void 0 === s ? void 0 : s[i]) || void 0 === r ? void 0 : r[d]) return e.pages.modHub.modQueue[n].itemOrder[i][d] || []
				}),
				m = Object(n.a)((e, t) => {
					const o = l(e, t);
					return o ? o.map(t => e.posts.models[t] || e.features.comments.models[t]) : void 0
				}),
				b = (e, t) => {
					var o;
					const {
						pageName: s
					} = t;
					return null === (o = e.pages.modHub.modQueue[s]) || void 0 === o || !o.api || e.pages.modHub.modQueue[s].api.pending
				},
				p = (e, t) => {
					var o;
					const s = u(0, t);
					return null === (o = e.pages.modHub.modQueue[t.pageName]) || void 0 === o ? void 0 : o.loadMore[s]
				},
				f = e => Object.keys(e.pages.modHub.modQueue.bulkAction.selectedItems),
				O = e => e.pages.modHub.modQueue.bulkAction.api.pending,
				v = e => e.pages.modHub.modQueue.moderatedCommunitiesOrder.data,
				j = e => {
					var t;
					const o = e.platform && e.platform.currentPage;
					return (null === (t = null == o ? void 0 : o.meta) || void 0 === t ? void 0 : t.name) === s.Sb.MODQUEUE_PAGES
				},
				h = (e, t) => (e => {
					const t = e.platform && e.platform.currentPage;
					return t && t.meta && (t.meta.name === s.Sb.MODERATION_PAGES || t.meta.name === s.Sb.MODQUEUE_PAGES)
				})(e) && Object(c.a)(e) && t || !1
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueue.478b3745dfb0ae5c03f0.js.map