// https://www.redditstatic.com/desktop2x/ModQueue.77c9a1c31c7887bedfd6.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
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
				return _
			})), o.d(t, "f", (function() {
				return S
			})), o.d(t, "a", (function() {
				return y
			})), o.d(t, "e", (function() {
				return R
			})), o.d(t, "g", (function() {
				return A
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
				a = o("./src/reddit/actions/modal.ts"),
				i = o("./src/reddit/actions/shortcuts/utils.ts"),
				c = o("./src/reddit/actions/toaster.ts"),
				u = o("./src/reddit/constants/modals.ts"),
				l = o("./src/reddit/endpoints/comment/index.tsx"),
				m = o("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				b = o("./src/reddit/models/Reportable/index.ts"),
				p = o("./src/reddit/models/Toast/index.ts"),
				f = o("./src/reddit/selectors/commentSelector.ts"),
				v = o("./src/reddit/selectors/user.ts"),
				O = o("./src/reddit/actions/comment/index.ts"),
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
				}, _ = e => async (t, o, r) => {
					let {
						apiContext: n
					} = r;
					if (!Object(v.S)(o())) return void t(Object(a.i)(u.a.LOGIN_MODAL_ID));
					const d = o().features.comments.models[e];
					if (!d) return;
					const i = d.isLocked ? l.l : l.f;
					t(Object(O.j)({
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
					})) : t(Object(O.j)({
						[e]: {
							isLocked: d.isLocked
						}
					}))
				}, S = Object(n.a)(j.J), y = e => async (t, o, s) => {
					let {
						apiContext: r,
						gqlContext: n
					} = s;
					const d = o(),
						a = d.features.comments.models[e],
						c = d.user.account ? d.user.account.displayText : null;
					a && c && (t(Object(O.j)({
						[e]: {
							isApproved: !0,
							approvedBy: c,
							approvedAtUTC: Date.now(),
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(l.a)(n(), e)).ok || t(Object(O.j)({
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
					})), Object(i.d)())
				}, R = (e, t) => async (o, s, r) => {
					let {
						apiContext: n,
						gqlContext: d
					} = r;
					const a = s(),
						c = a.features.comments.models[e],
						u = a.user.account ? a.user.account.displayText : null;
					c && u && (o(Object(O.j)({
						[e]: {
							approvedBy: null,
							bannedBy: u,
							bannedAtUTC: Date.now(),
							isApproved: !1,
							isRemoved: !t,
							isSpam: t,
							numReports: 0
						}
					})), (await Object(l.h)(d(), e, t)).ok || o(Object(O.j)({
						[e]: {
							approvedBy: c.approvedBy,
							bannedBy: c.bannedBy,
							isApproved: c.isApproved,
							isRemoved: c.isRemoved,
							isSpam: c.isSpam,
							numReports: c.numReports
						}
					})), Object(i.d)())
				}, A = e => async (t, o, r) => {
					let {
						apiContext: n
					} = r;
					const d = o().features.comments.models[e];
					if (!d) return;
					const a = d.ignoreReports ? l.k : l.e;
					d.ignoreReports || t(y(e)), t(Object(O.j)({
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
					})) : t(Object(O.j)({
						[e]: {
							ignoreReports: d.ignoreReports
						}
					}))
				}, E = (e, t, o) => async (n, d, a) => {
					let {
						gqlContext: i
					} = a;
					const u = Object(f.c)(d(), {
						commentId: e
					});
					if (!u) return;
					const l = o === r.jc.Snoozed,
						v = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(m.a)(i(), {
							input: v
						})).ok) n(Object(O.j)({
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
				}, k = (e, t, o) => async (s, n, a) => {
					let {
						apiContext: i,
						gqlContext: c
					} = a;
					const u = n(),
						m = u.features.comments.models[e];
					if (!m) return;
					const b = m.postId,
						p = u.postStickiedComments.data[b];
					s(Object(O.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === r.H.ADMIN,
							isMod: t === r.H.MODERATOR,
							isStickied: !!o
						}
					})), o && p && p !== e && s(Object(O.j)({
						[p]: {
							isStickied: !1
						}
					}));
					const f = Object(l.c)(c(), e, t),
						v = Object(l.d)(c(), e, !!o),
						j = [f];
					(o || !o && e === p) && j.push(v), (await Promise.all(j)).every(e => e.ok) ? o && s(S({
						id: e,
						postId: b,
						commentsPageKey: Object(d.a)(b, null, {
							sort: r.v.CONFIDENCE,
							...u.platform.currentPage.queryParams
						})
					})) : (s(Object(O.j)({
						[e]: {
							distinguishType: m.distinguishType,
							isAdmin: m.isAdmin,
							isMod: m.isMod,
							isStickied: m.isStickied
						}
					})), s(Object(O.j)({
						[p]: {
							isStickied: u.features.comments.models[p].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/modQueue/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "e", (function() {
				return ve
			})), o.d(t, "d", (function() {
				return he
			})), o.d(t, "f", (function() {
				return ye
			})), o.d(t, "a", (function() {
				return Re
			})), o.d(t, "b", (function() {
				return Ae
			})), o.d(t, "c", (function() {
				return Ee
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./node_modules/react-redux/es/index.js"),
				n = o("./src/lib/constants/index.ts"),
				d = o("./src/lib/makeActionCreator/index.ts"),
				a = o("./src/reddit/actions/bulkActions/index.ts"),
				i = o("./src/reddit/actions/removalReasons/index.ts"),
				c = o("./src/reddit/actions/toaster.ts"),
				u = o("./src/reddit/constants/postLayout.ts"),
				l = o("./src/reddit/contexts/PageLayer/selectors.ts"),
				m = o("./src/reddit/endpoints/modQueue/index.ts"),
				b = o("./src/reddit/endpoints/user/index.ts"),
				p = o("./src/reddit/helpers/correlationIdTracker.ts"),
				f = o("./src/reddit/helpers/flair.ts"),
				v = o("./node_modules/Base64/base64.js"),
				O = o("./src/reddit/components/ModQueueList/PostSortDropdown.tsx"),
				j = o("./src/reddit/helpers/isPost.ts"),
				h = o("./src/reddit/selectors/commentSelector.ts"),
				g = o("./src/reddit/selectors/posts.ts"),
				_ = o("./src/reddit/models/Flair/index.ts"),
				S = o("./src/redditGQL/types.ts"),
				y = o("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				R = o("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				A = o("./src/reddit/helpers/graphql/normalizeModActivityFromGql/index.ts"),
				E = o("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				k = o("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const x = {
					[n.vb.Edited]: S.G.Edited,
					[n.vb.Modqueue]: S.G.Mod,
					[n.vb.Reports]: S.G.Reported,
					[n.vb.Spam]: S.G.Removed,
					[n.vb.Unmoderated]: S.G.Unmoderated
				},
				M = {
					comments: S.E.Comment,
					links: S.E.Post,
					chat_comments: S.E.ChatComment
				};

			function P(e) {
				let {
					getState: t,
					queueType: o,
					options: s
				} = e;
				var r, d;
				const a = t();
				let i;
				s.only && (i = M[s.only]);
				const c = {};
				s.after && (c[s.sort === O.a.OldestFirst ? "before" : "after"] = function(e, t) {
					const o = Object(j.a)(t) ? Object(g.F)(e, {
						postId: t
					}) : Object(h.c)(e, {
						commentId: t
					});
					if (o) return Object(v.btoa)(`${o.id}|${o.created}`)
				}(a, s.after));
				const u = {};
				s.sort === O.a.OldestFirst ? u.last = 25 : u.first = 25;
				const l = s.subreddit ? [s.subreddit] : [],
					m = (null == a ? void 0 : a.platform) && (null === (r = null == a ? void 0 : a.platform) || void 0 === r ? void 0 : r.currentPage),
					b = (null === (d = null == m ? void 0 : m.meta) || void 0 === d ? void 0 : d.name) === n.Sb.MODQUEUE_PAGES;
				return {
					queueType: x[o],
					moderatedAfter: s.moderatedAfter,
					...u,
					...!!i && {
						itemTypes: i
					},
					subredditNames: l,
					...!!s.profile && {
						subredditIds: [s.profile]
					},
					sort: s.sort === O.a.MostReportedFirst ? S.F.SortReports : S.F.SortDate,
					...c,
					includeAllModActivitySummaries: b,
					includeModActivitySummariesByNames: !b,
					isModqueueListing: 0 === l.length,
					includeDevPlatformMetadata: !!s.includeDevPlatformMetadata
				}
			}
			var I;
			! function(e) {
				e.Comment = "ModQueueItemComment", e.Post = "ModQueueItemPost", e.ChatComment = "ModQueueItemChatComment"
			}(I || (I = {}));
			const C = e => ({
					access: (null == e ? void 0 : e.isAccessEnabled) || !1,
					all: (null == e ? void 0 : e.isAllAllowed) || !1,
					chatConfig: (null == e ? void 0 : e.isChatConfigEditingAllowed) || !1,
					chatOperator: (null == e ? void 0 : e.isChatOperator) || !1,
					communityChat: !1,
					channels: !1,
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
						prefixedName: a,
						name: i
					} = e;
					return {
						accountIcon: null == o ? void 0 : o.url,
						displayName: d,
						displayNamePrefixed: a,
						displayText: i,
						enableFollowers: n,
						id: t,
						profileId: null == s ? void 0 : s.id,
						snoovatarFullBodyAsset: (null == r ? void 0 : r.url) || null,
						username: i
					}
				};

			function w(e) {
				let {
					modQueueItems: t,
					identity: o,
					moderatedSubredditActivityByNames: s
				} = e;
				var r, n, d, a, i;
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
						} = Object(A.a)(t.node);
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
						} = Object(A.a)(t);
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
				const m = null === (i = null === (a = null == o ? void 0 : o.redditor.moderatedSubreddits) || void 0 === a ? void 0 : a.edges) || void 0 === i ? void 0 : i.reduce((e, t) => {
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
					var t, o, s, r, n, d, a;
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
									textColor: a,
									backgroundColor: i,
									isModOnly: c,
									cssClass: u,
									maxEmojis: l,
									allowableContent: m
								} = t;
								return o ? (e.templateIds.push(o), e.templates[o] = {
									id: o,
									text: s || "",
									textEditable: r,
									type: d || _.f.Text,
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
					if (u === I.Comment || u === I.ChatComment) {
						const {
							commentInfo: e
						} = i;
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
					if (u === I.Post) {
						const {
							postInfo: e
						} = i;
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
						} = e, r = s ? null === (a = Object(R.a)(s)) || void 0 === a ? void 0 : a[0] : null;
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
				F = o("./src/reddit/selectors/experiments/devPlatform.ts"),
				T = o("./src/reddit/selectors/modQueue.ts"),
				q = o("./src/reddit/selectors/subreddit.ts"),
				Q = o("./src/reddit/selectors/telemetry.ts"),
				B = o("./src/telemetry/index.ts"),
				U = o("./src/lib/initializeClient/installReducer.ts"),
				G = o("./src/reddit/reducers/features/modActivitySummaries/index.ts"),
				H = o("./node_modules/redux/es/redux.js"),
				V = o("./node_modules/icepick/icepick.js"),
				$ = o("./src/reddit/actions/modQueue/constants.ts");
			const z = {};
			var K = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case $.i:
					case $.f:
					case $.r:
					case $.u:
					case $.A: {
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
					case $.l: {
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
			const W = {};
			var J = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $.i:
						case $.f:
						case $.r:
						case $.u:
						case $.A: {
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
						case $.l: {
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
				X = Object(H.c)({
					models: K,
					order: J
				}),
				Y = o("./src/reddit/reducers/features/realtimeModqueue/index.ts"),
				Z = o("./src/reddit/reducers/pages/modHub/index.ts");
			Object(U.a)({
				pages: {
					modHub: Z.a
				}
			}), Object(U.a)({
				features: {
					modActivitySummaries: G.a
				}
			}), Object(U.a)({
				features: {
					modPreviousActions: X
				}
			}), Object(U.a)({
				features: {
					realtimeModqueue: Y.a
				}
			});
			const ee = Object(d.a)($.k),
				te = Object(d.a)($.j),
				oe = Object(d.a)($.i),
				se = Object(d.a)($.h),
				re = Object(d.a)($.g),
				ne = Object(d.a)($.f),
				de = Object(d.a)($.e),
				ae = Object(d.a)($.s),
				ie = Object(d.a)($.r),
				ce = Object(d.a)($.q),
				ue = Object(d.a)($.v),
				le = Object(d.a)($.u),
				me = Object(d.a)($.t),
				be = Object(d.a)($.B),
				pe = Object(d.a)($.A),
				fe = Object(d.a)($.z),
				ve = (e, t, o) => async (r, d, a) => {
					let {
						apiContext: i,
						gqlContext: p
					} = a;
					var f;
					const v = Object(F.a)(d());
					let O, j, h;
					switch (t) {
						case n.vb.Edited:
							O = re, j = de, h = ne;
							break;
						case n.vb.Modqueue:
							O = te, j = se, h = oe;
							break;
						case n.vb.Reports:
							O = ae, j = ce, h = ie;
							break;
						case n.vb.Spam:
							O = ue, j = me, h = le;
							break;
						case n.vb.Unmoderated:
							O = be, j = fe, h = pe;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					if (r(O()), o.profile) {
						const e = null === (f = (await Object(b.b)(i(), o.profile)).body[o.profile]) || void 0 === f ? void 0 : f.profileId;
						o.profile = e
					}
					const g = P({
							getState: d,
							queueType: t,
							options: o
						}),
						_ = await Object(m.b)(p(), {
							...g,
							includeDevPlatformMetadata: v
						});
					if (!_.ok) return r(j(_.error)), void r(Object(c.f)({
						kind: D.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}));
					const {
						users: S,
						...y
					} = w(_.body.data), R = d(), A = u.e[Object(l.V)(R, {})] === u.d.Card;
					Object(T.b)(R, A) && r(ee(S)), r(h({
						listingKey: e,
						page: `${o.page||L.b}`,
						response: y
					}))
				}, Oe = Object(d.a)($.n), je = Object(d.a)($.b), he = e => async (t, o, n) => {
					let {
						gqlContext: d
					} = n;
					const a = o(),
						i = Object(r.e)(e => Object(F.a)(e)),
						u = a.pages.modHub.modQueue.moderatedCommunitiesOrder.after,
						l = a.pages.modHub.modQueue.moderatedCommunitiesOrder.pending,
						b = a.pages.modHub.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: p
						} = a.platform.currentPage.urlParams;
					if (e && l || b || !u) return;
					const f = P({
							getState: o,
							queueType: p,
							options: {
								moderatedAfter: u,
								includeDevPlatformMetadata: i
							}
						}),
						v = await Object(m.b)(d(), f);
					if (!v.ok) return void t(Object(c.f)({
						kind: D.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}));
					const O = w(v.body.data);
					t(Oe(O)), O.moderatedAfter ? t(he()) : t(je())
				}, ge = Object(d.a)($.y), _e = Object(d.a)($.x), Se = Object(d.a)($.w), ye = (e, t, o) => async (r, n, d) => {
					let {
						apiContext: u
					} = d;
					r(Object(a.c)());
					const l = n(),
						b = Object(T.i)(l),
						v = l.user.account && l.user.account.displayText;
					Object(p.d)(p.a.ModQueue);
					const O = Object(p.c)(p.a.ModQueue);
					Object(B.a)({
						source: "bulk_mod_action_menu",
						action: "click",
						noun: e,
						...Q.q(l),
						actionInfo: Q.d(l, {
							count: b.length,
							paneName: l.platform.currentPage ? l.platform.currentPage.urlParams.pageName : void 0
						}),
						screen: Q.eb(l),
						correlationId: O
					});
					for (let t = 0; t < b.length; t++) {
						const o = b[t];
						let s = e;
						[L.a.Approve, L.a.Remove, L.a.Spam].includes(e) && (Object(j.a)(o) ? s += "_link" : s += "_comment"), Object(B.a)({
							source: "bulk_mod_action",
							action: "click",
							noun: s,
							...Q.q(l),
							actionInfo: Q.d(l, {
								count: b.length,
								paneName: l.platform.currentPage ? l.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: Q.j({
								state: l,
								commentId: o
							}),
							post: Q.M(l, o),
							profile: Q.X(l, o),
							screen: Q.eb(l),
							subreddit: Q.qb(l, o),
							correlationId: O
						})
					}
					Object(p.b)(p.a.ModQueue);
					const h = {
						ids: b
					};
					t && (h.text = Object(f.g)(t) || "", h.flairTemplateId = ""), o && (h.cssClass = o, h.flairTemplateId = o);
					const g = await Object(m.a)(u(), e, h);
					if (g.ok) {
						r(Object(a.b)({
							...g.body,
							operation: e,
							ids: b,
							username: v,
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
						}(e, b.length);
						if (e !== L.a.Approve && e !== L.a.Flair) {
							let t, n;
							const d = l.platform.currentPage && l.platform.currentPage.queryParams && l.platform.currentPage.queryParams.subreddit,
								u = d && Object(q.I)(l, d);
							e === L.a.Remove && u && b.length > 1 && (t = s.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), n = Object(i.fetchReasonsAndOpenModal)(u, b));
							const p = Object(c.e)(o, D.b.Undo, s.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, o) => {
								let {
									apiContext: r
								} = o;
								e(ge());
								const n = t(),
									d = Object.keys(n.pages.modHub.modQueue.bulkAction.undoLastAction)[0],
									i = n.pages.modHub.modQueue.bulkAction.undoLastAction[d],
									u = n.user.account && n.user.account.displayText;
								e(Object(a.c)());
								const l = await Object(m.a)(r(), d, {
									ids: i
								});
								l.ok ? e(_e({
									...l.body,
									operation: d,
									ids: i,
									username: u
								})) : (e(Se(l.error)), e(Object(c.f)({
									kind: D.b.Error,
									text: s.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, n);
							r(Object(c.f)(p))
						} else {
							const e = Object(c.e)(o, D.b.SuccessMod);
							r(Object(c.f)(e))
						}
					} else {
						r(Object(a.a)(g.error));
						const e = Object(c.e)(s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), D.b.Error);
						r(Object(c.f)(e))
					}
				}, Re = Object(d.a)($.a), Ae = Object(d.a)($.c), Ee = Object(d.a)($.d)
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
					page: v,
					profile: O,
					subreddit: j
				} = f, h = o();
				if (!p) return;
				const g = Object(a.a)({
						onlyOfType: f.only,
						profile: f.profile,
						sort: f.sort,
						subreddit: f.subreddit
					}),
					_ = h.pages.modHub.modQueue[p].itemOrder[g],
					S = !!(null === (b = null == _ ? void 0 : _[v]) || void 0 === b ? void 0 : b.length),
					y = h.pages.modHub.modQueue[p].api.error;
				if (h.pages.modHub.modQueue[p].api.pending || S && !y) return;
				Object(m.p)(h) || await Object(u.e)(g, p, f)(t, o, s);
				const R = o();
				if (r()(R.pages.modHub.modQueue[p].api.error, "type") === n.J.AUTHENTICATION_ERROR) return Object(i.a)(t, R);
				Object(c.i)(R, j, O), t(l.n({
					title: Object(d.h)()
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
				return ae
			})), o.d(t, "editRemovalReasonSuccess", (function() {
				return ie
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
				return ve
			})), o.d(t, "removalReasonSubmittedPending", (function() {
				return Oe
			})), o.d(t, "removalReasonSubmittedSuccess", (function() {
				return je
			})), o.d(t, "removalReasonSubmittedFailed", (function() {
				return he
			})), o.d(t, "removalReasonMessagePending", (function() {
				return ge
			})), o.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return _e
			})), o.d(t, "removalReasonPublicMessageSuccess", (function() {
				return Se
			})), o.d(t, "removalReasonMessageFailed", (function() {
				return ye
			})), o.d(t, "submitRemovalReason", (function() {
				return Re
			})), o.d(t, "submitBulkRemovalReason", (function() {
				return Ae
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
			var v = function() {
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
			var O = function() {
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
					error: v,
					pending: O
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
			const _ = {};
			var S = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
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
				R = Object(n.c)({
					api: j,
					models: g,
					reasonOrder: S,
					removedItemIds: y
				}),
				A = o("./src/lib/constants/index.ts"),
				E = o("./src/lib/makeActionCreator/index.ts"),
				k = o("./src/lib/makeCommentsPageKey/index.ts"),
				x = o("./src/lib/makeDraftKey/index.ts"),
				M = o("./src/reddit/actions/bulkActions/index.ts"),
				P = o("./src/reddit/actions/comment/index.ts"),
				I = o("./src/reddit/actions/comment/authoring.ts"),
				C = o("./src/reddit/actions/comment/moderation.ts"),
				N = o("./src/reddit/actions/modal.ts"),
				w = o("./src/reddit/actions/post.ts"),
				L = o("./src/reddit/actions/toaster.ts"),
				D = o("./src/reddit/constants/modals.ts"),
				F = o("./src/lib/makeApiRequest/index.ts"),
				T = o("./src/lib/omitHeaders/index.ts"),
				q = o("./src/reddit/constants/headers.ts"),
				Q = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				B = o("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const U = (e, t) => Object(F.a)(Object(T.a)(e, [q.a]), {
					endpoint: Object(Q.a)(`${e.apiUrl}/api/v1/modactions/removal_reasons/`),
					method: A.nb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				G = (e, t, o) => Object(F.a)(Object(T.a)(e, [q.a]), {
					endpoint: Object(Q.a)(Object(B.a)(`${e.apiUrl}/api/v1/modactions/removal_${o}_message/`)),
					method: A.nb.POST,
					type: "json",
					data: t
				});
			var H = o("./src/reddit/helpers/isPost.ts"),
				V = o("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				$ = o("./src/reddit/helpers/routeKey/index.ts"),
				z = o("./src/reddit/models/ModQueue/index.ts"),
				K = o("./src/reddit/models/PostDraft/index.ts"),
				W = o("./src/reddit/models/RemovalReason/index.ts"),
				J = o("./src/reddit/models/Toast/index.ts"),
				X = o("./src/reddit/selectors/comments.ts"),
				Y = o("./src/reddit/selectors/platform.ts");
			Object(r.a)({
				features: {
					removalReasons: R
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
					const d = await ((e, t) => Object(F.a)(Object(T.a)(e, [q.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: A.nb.GET
					}))(r(), n);
					d.ok ? t(ee({
						subredditId: e,
						response: d.body
					})) : t(te(d.error))
				}, se = Object(E.a)(a), re = Object(E.a)(i), ne = Object(E.a)(c), de = (e, t) => async (o, r, n) => {
					let {
						apiContext: d
					} = n;
					const a = r().subreddits.models[e].name;
					o(se());
					const i = await ((e, t, o) => Object(F.a)(Object(T.a)(e, [q.a]), {
						endpoint: Object(Q.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons`),
						method: A.nb.POST,
						data: o
					}))(d(), a, t);
					if (i.ok) {
						const {
							id: r
						} = i.body, n = {
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
					} else o(ne(i.error))
				}, ae = Object(E.a)(u), ie = Object(E.a)(l), ce = Object(E.a)(m), ue = (e, t) => async (o, r, n) => {
					let {
						apiContext: d
					} = n;
					const a = r().subreddits.models[e].name;
					o(ae());
					const i = await ((e, t, o) => Object(F.a)(Object(T.a)(e, [q.a]), {
						endpoint: Object(Q.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${o.id}`),
						method: A.nb.PUT,
						data: {
							message: o.message,
							title: o.title
						}
					}))(d(), a, t);
					i.ok ? (o(ie({
						subredditId: e,
						reason: t
					})), o(Object(L.f)({
						kind: J.b.SuccessMod,
						text: s.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : o(ce(i.error))
				}, le = Object(E.a)(b), me = Object(E.a)(p), be = Object(E.a)(f), pe = (e, t) => async (o, r, n) => {
					let {
						apiContext: d
					} = n;
					const a = r().subreddits.models[e].name;
					o(le());
					const i = await ((e, t, o) => Object(F.a)(Object(T.a)(e, [q.a]), {
						endpoint: Object(Q.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${o}`),
						method: A.nb.DELETE
					}))(d(), a, t);
					i.ok ? (o(me({
						subredditId: e,
						reasonId: t
					})), o(Object(L.f)({
						kind: J.b.SuccessMod,
						text: s.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : o(be(i.error))
				}, fe = Object(E.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), ve = (e, t) => async (o, s, r) => {
					let {
						apiContext: n
					} = r;
					const d = s();
					d.features.removalReasons.reasonOrder[e] && d.features.removalReasons.reasonOrder[e].length > 0 || o(oe(e)), o(fe({
						subredditId: e,
						itemIds: t
					})), o(Object(N.i)(D.a.ADD_REMOVAL_REASON))
				}, Oe = Object(E.a)("REMOVALREASONS__SUBMIT_PENDING"), je = Object(E.a)("REMOVALREASONS__SUBMIT_SUCCESS"), he = Object(E.a)("REMOVALREASONS__SUBMIT_FAILED"), ge = Object(E.a)("REMOVALREASONS__MESSAGE_PENDING"), _e = Object(E.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Se = Object(E.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), ye = Object(E.a)("REMOVALREASONS__MESSAGE_FAILED"), Re = (e, t, o, s, r, n) => async (d, a, i) => {
					let {
						apiContext: c
					} = i;
					const u = a(),
						l = u.user.account && u.user.account.displayText,
						m = e[0],
						b = Object(H.a)(m) ? W.e.Post : W.e.Comment,
						p = b === W.e.Post ? u.posts.models[m] : u.features.comments.models[m],
						f = b === W.e.Post ? w.Q : P.j;
					if (!p || !l) return !1;
					d(Oe()), d(f({
						[m]: {
							modNote: r,
							modRemovalReason: t && t.title,
							modReasonBy: l
						}
					}));
					const v = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						O = await U(c(), v);
					if (O.ok) {
						if (d(je()), t) {
							d(ge());
							const r = {
									itemId: e,
									message: o,
									title: t.title,
									isLocked: n,
									type: s
								},
								a = await G(c(), Object(W.h)(r, b), b);
							if (a.ok) {
								if ([W.f.Public, W.f.PublicAsSubreddit].includes(s)) {
									if (d(Se()), a.body) {
										const e = Object(V.a)(a.body),
											t = {
												comment: e,
												parentId: m
											},
											o = Object(Y.f)(u),
											s = u.platform.currentPage && u.platform.currentPage.routeMatch;
										let r = o && s && Object($.a)(s, u, u.posts.models[e.postId]);
										if (r || (r = Object(k.a)(e.postId, null, {
												sort: A.w,
												hasSortParam: !0
											})), b === W.e.Post) {
											const o = Object(x.a)(K.c.replyToPost, m);
											d(Object(I.r)({
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
											})), s && s !== e.id && d(Object(P.j)({
												[s]: {
													isStickied: !1
												}
											}))
										} else if (b === W.e.Comment) {
											const e = Object(x.a)(K.c.replyToComment, p.id),
												o = Object(X.j)(u, {
													commentId: m,
													commentsPageKey: r
												});
											d(Object(I.p)({
												...t,
												parentCommentId: m,
												commentsPageKey: r,
												draftKey: e,
												depth: o + 1
											}))
										}
									}
								} else d(_e());
								return !0
							}
							return d(ye(a.error)), !1
						}
					} else d(he(O.error)), d(f({
						[m]: {
							modNote: p.modNote,
							modRemovalReason: p.modRemovalReason,
							modReasonBy: p.modReasonBy
						}
					}));
					return !1
				}, Ae = (e, t, o, r, n) => async (d, a, i) => {
					let {
						apiContext: c
					} = i;
					const u = a(),
						l = u.user.account && u.user.account.displayText;
					if (!l) return;
					d(Oe());
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
						p = await U(c(), b);
					if (p.ok) {
						const s = {
							ids: e,
							operation: z.a.RemovalReason,
							username: l,
							options: {
								modNote: n,
								removalReason: t && t.title
							}
						};
						if (d(Object(M.b)(s)), t) {
							const s = {
									itemId: e,
									message: o,
									title: t.title,
									type: r
								},
								n = await G(c(), Object(W.h)(s, W.e.Bulk), W.e.Bulk);
							n.ok ? (d(_e()), d(m)) : d(ye(n.error))
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
				a = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				c = o("./src/lib/addQueryParams/index.ts"),
				u = o("./src/lib/constants/index.ts"),
				l = o("./src/lib/filterQueryParams/index.ts"),
				m = o("./src/lib/lessComponent.tsx"),
				b = o("./src/reddit/controls/Dropdown/Row.tsx"),
				p = o("./src/reddit/controls/InternalLink/index.tsx"),
				f = o("./src/reddit/selectors/meta.ts"),
				v = o("./src/reddit/components/ModQueueList/PostSortDropdown.m.less"),
				O = o.n(v);
			! function(e) {
				e.NewestFirst = "newest", e.OldestFirst = "oldest", e.MostReportedFirst = "most_reported"
			}(s || (s = {}));
			const j = m.a.wrapped(b.b, "Row", O.a),
				h = Object(i.c)({
					currentPage: e => e.platform.currentPage,
					origin: f.l
				}),
				g = Object(a.b)(h);
			t.b = g(e => d.a.createElement("div", {
				className: e.className
			}, d.a.createElement(p.default, {
				onClick: e.sendEventWithName("modqueue_sort_newest"),
				to: Object(l.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page", "sort"])
			}, d.a.createElement(j, {
				displayText: r.fbt._("Newest first", null, {
					hk: "4buqk8"
				}),
				isSelected: !e.postSort
			})), d.a.createElement(p.default, {
				onClick: e.sendEventWithName("modqueue_sort_oldest"),
				to: Object(c.a)(Object(l.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
					sort: s.OldestFirst
				})
			}, d.a.createElement(j, {
				displayText: r.fbt._("Oldest first", null, {
					hk: "1x9Jdr"
				}),
				isSelected: e.postSort === s.OldestFirst
			})), [u.vb.Modqueue, u.vb.Reports].includes(e.currentPage.urlParams.pageName) && d.a.createElement(p.default, {
				onClick: e.sendEventWithName("modqueue_sort_most_reports"),
				to: Object(c.a)(Object(l.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
					sort: s.MostReportedFirst
				})
			}, d.a.createElement(j, {
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
					lastModAction: r,
					activeModerators: n
				} = (null == t ? void 0 : t.modActivitySummary) || {}, d = [], a = {};
				null == n || n.edges.map(e => {
					if (!(null == e ? void 0 : e.node)) return;
					const {
						lastModAction: t,
						moderator: o
					} = e.node;
					if (!o) return;
					const s = null == o ? void 0 : o.id;
					s && (d.push(s), a[s] || (a[s] = {
						info: {},
						lastModAction: {}
					}), a[s].info = o, a[s].lastModAction = {
						...t
					})
				});
				const i = {
					lastModAction: r,
					activeMods: d
				};
				return {
					subreddit: Object(s.a)(o),
					summary: {
						sub: i,
						mods: a
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
				a = o("./src/reddit/actions/platform.ts"),
				i = o("./src/reddit/actions/post.ts");
			const c = ["isApproved", "isRemoved", "isSpam"];
			var u = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.q:
					case i.k: {
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
					case a.g:
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
		"./src/reddit/selectors/modQueue.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return u
			})), o.d(t, "f", (function() {
				return l
			})), o.d(t, "e", (function() {
				return m
			})), o.d(t, "g", (function() {
				return b
			})), o.d(t, "i", (function() {
				return p
			})), o.d(t, "a", (function() {
				return f
			})), o.d(t, "h", (function() {
				return v
			})), o.d(t, "c", (function() {
				return O
			})), o.d(t, "b", (function() {
				return j
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
					if (null === (r = null === (s = null === (o = e.pages.modHub.modQueue[n]) || void 0 === o ? void 0 : o.itemOrder) || void 0 === s ? void 0 : s[a]) || void 0 === r ? void 0 : r[d]) return e.pages.modHub.modQueue[n].itemOrder[a][d] || []
				}),
				l = Object(n.a)((e, t) => {
					const o = u(e, t);
					return o ? o.map(t => e.posts.models[t] || e.features.comments.models[t]) : void 0
				}),
				m = (e, t) => {
					var o;
					const {
						pageName: s
					} = t;
					return null === (o = e.pages.modHub.modQueue[s]) || void 0 === o || !o.api || e.pages.modHub.modQueue[s].api.pending
				},
				b = (e, t) => {
					var o;
					const s = c(0, t);
					return null === (o = e.pages.modHub.modQueue[t.pageName]) || void 0 === o ? void 0 : o.loadMore[s]
				},
				p = e => Object.keys(e.pages.modHub.modQueue.bulkAction.selectedItems),
				f = e => e.pages.modHub.modQueue.bulkAction.api.pending,
				v = e => e.pages.modHub.modQueue.moderatedCommunitiesOrder.data,
				O = e => {
					var t;
					const o = e.platform && e.platform.currentPage;
					return (null === (t = null == o ? void 0 : o.meta) || void 0 === t ? void 0 : t.name) === s.Sb.MODQUEUE_PAGES
				},
				j = (e, t) => (e => {
					const t = e.platform && e.platform.currentPage;
					return t && t.meta && (t.meta.name === s.Sb.MODERATION_PAGES || t.meta.name === s.Sb.MODQUEUE_PAGES)
				})(e) && t || !1
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueue.77c9a1c31c7887bedfd6.js.map