// https://www.redditstatic.com/desktop2x/ModQueue.ff525da1121b20762603.js
// Retrieved at 10/24/2022, 9:50:07 AM by Reddit Dataminer v1.0.0
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
				return _
			})), o.d(t, "c", (function() {
				return S
			})), o.d(t, "f", (function() {
				return g
			})), o.d(t, "a", (function() {
				return R
			})), o.d(t, "e", (function() {
				return y
			})), o.d(t, "g", (function() {
				return E
			})), o.d(t, "h", (function() {
				return A
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
				O = o("./src/reddit/selectors/user.ts"),
				v = o("./src/reddit/actions/comment/index.ts"),
				h = o("./src/reddit/actions/comment/constants.ts");
			const j = Object(n.a)(h.p),
				_ = e => async (t, o, s) => {
					let {
						apiContext: r
					} = s;
					o().features.comments.models[e] && (await Object(l.j)(r(), e)).ok && t((e => async t => {
						t(j({
							commentId: e
						}))
					})(e))
				}, S = e => async (t, o, r) => {
					let {
						apiContext: n
					} = r;
					if (!Object(O.R)(o())) return void t(Object(a.i)(u.a.LOGIN_MODAL_ID));
					const d = o().features.comments.models[e];
					if (!d) return;
					const i = d.isLocked ? l.l : l.f;
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
				}, g = Object(n.a)(h.J), R = e => async (t, o, r) => {
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
					})), Object(i.d)())
				}, y = (e, t) => async (o, r, n) => {
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
							bannedAtUTC: Date.now(),
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(l.h)(a(), e, t)).ok ? o(Object(c.f)({
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
				}, E = e => async (t, o, r) => {
					let {
						apiContext: n
					} = r;
					const d = o().features.comments.models[e];
					if (!d) return;
					const a = d.ignoreReports ? l.k : l.e;
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
					const l = o === r.kc.Snoozed,
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
						h = [f];
					(o || !o && e === p) && h.push(O), (await Promise.all(h)).every(e => e.ok) ? o && s(g({
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
				return ne
			})), o.d(t, "d", (function() {
				return ie
			})), o.d(t, "f", (function() {
				return me
			})), o.d(t, "a", (function() {
				return be
			})), o.d(t, "b", (function() {
				return pe
			})), o.d(t, "c", (function() {
				return fe
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
				v = o("./src/reddit/selectors/posts.ts"),
				h = o("./src/reddit/models/Flair/index.ts"),
				j = o("./src/reddit/selectors/experiments/realtimeMQUpdates.ts"),
				_ = o("./src/redditGQL/types.ts"),
				S = o("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				g = o("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				R = o("./src/reddit/helpers/graphql/normalizeModActivityFromGql/index.ts"),
				y = o("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				E = o("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const A = {
					[r.wb.Edited]: _.D.Edited,
					[r.wb.Modqueue]: _.D.Mod,
					[r.wb.Reports]: _.D.Reported,
					[r.wb.Spam]: _.D.Removed,
					[r.wb.Unmoderated]: _.D.Unmoderated
				},
				k = {
					comments: _.B.Comment,
					links: _.B.Post,
					chat_comments: _.B.ChatComment
				};

			function x(e) {
				let {
					getState: t,
					queueType: o,
					options: s
				} = e;
				const r = t();
				let n;
				s.only && (n = k[s.only]);
				const d = {};
				s.after && (d[s.sort === p.a.OldestFirst ? "before" : "after"] = function(e, t) {
					const o = Object(f.a)(t) ? Object(v.G)(e, {
						postId: t
					}) : Object(O.b)(e, {
						commentId: t
					});
					if (o) return Object(b.btoa)(`${o.id}|${o.created}`)
				}(r, s.after));
				const a = {};
				s.sort === p.a.OldestFirst ? a.last = 25 : a.first = 25;
				const i = Object(j.a)(r);
				return {
					queueType: A[o],
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
					sort: s.sort === p.a.MostReportedFirst ? _.C.SortReports : _.C.SortDate,
					...d,
					includeModActivitySummaries: i
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
					config: (null == e ? void 0 : e.isConfigEditingAllowed) || !1,
					flair: (null == e ? void 0 : e.isFlairEditingAllowed) || !1,
					mail: (null == e ? void 0 : e.isMailEditingAllowed) || !1,
					posts: (null == e ? void 0 : e.isPostEditingAllowed) || !1,
					wiki: (null == e ? void 0 : e.isWikiEditingAllowed) || !1
				}),
				M = e => {
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

			function P(e) {
				let {
					modQueueItems: t,
					identity: o
				} = e;
				var s, r, n, d, a;
				const i = {
					posts: {},
					comments: {},
					reports: {},
					modActivitySummaries: {},
					modqueue: [],
					authorFlair: {},
					moderatedAfter: (null === (s = null == o ? void 0 : o.redditor.moderatedSubreddits) || void 0 === s ? void 0 : s.pageInfo.hasNextPage) ? null === (r = null == o ? void 0 : o.redditor.moderatedSubreddits) || void 0 === r ? void 0 : r.pageInfo.endCursor : null,
					moderatingProfiles: {},
					profiles: {},
					listingOrder: [],
					subreddits: {},
					moderatingSubreddits: {},
					postFlair: {},
					userFlair: {},
					users: {}
				};
				if (!t) return i;
				if (!t.edges) return i;
				const c = null === (n = null == o ? void 0 : o.redditor.moderatedSubredditActivity) || void 0 === n ? void 0 : n.edges.reduce((e, t) => {
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
				});
				i.modActivitySummaries = (null == c ? void 0 : c.summaries) || {};
				const u = null === (a = null === (d = null == o ? void 0 : o.redditor.moderatedSubreddits) || void 0 === d ? void 0 : d.edges) || void 0 === a ? void 0 : a.reduce((e, t) => {
					var o;
					if (!(null === (o = null == t ? void 0 : t.node) || void 0 === o ? void 0 : o.modPermissions)) return e;
					const s = t.node.modPermissions;
					return e.moderatingSubreddits[t.node.id] = C(s), e.subreddits[t.node.id] = Object(E.a)(t.node), e
				}, {
					subreddits: {},
					moderatingSubreddits: {}
				});
				return i.moderatingSubreddits = (null == u ? void 0 : u.moderatingSubreddits) || {}, i.subreddits = {
					...null == c ? void 0 : c.subreddits,
					...null == u ? void 0 : u.subreddits
				}, t.edges.forEach(e => {
					var t, o, s, r, n, d, a;
					if (!e) return;
					const {
						node: c
					} = e;
					if (!c) return;
					const {
						__typename: u,
						subredditInfo: l
					} = c;
					if (!l) return;
					const {
						id: m
					} = l;
					if (i.subreddits[m] = Object(E.a)(l), i.moderatingSubreddits[m] || "Subreddit" !== (null == l ? void 0 : l.__typename) || (i.moderatingSubreddits[m] = C(l.modPermissions)), !i.postFlair[m] && "Subreddit" === l.__typename) {
						const {
							position: e,
							isEnabled: o
						} = (null == l ? void 0 : l.postFlairSettings) || {};
						i.postFlair[m] = {
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
									type: d || h.f.Text,
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
						} = c;
						if (!e) return;
						const t = Object(S.a)(e);
						if (null === (o = e.moderationInfo) || void 0 === o ? void 0 : o.verdictBy) {
							const t = M(null === (s = e.moderationInfo) || void 0 === s ? void 0 : s.verdictBy);
							t.username && (i.users[null == t ? void 0 : t.username] = t)
						}
						i.comments[t.id] = t, i.listingOrder.push({
							id: t.id,
							type: "comment"
						}), i.modqueue.push(t.id);
						const {
							authorInfo: n,
							authorFlair: d
						} = e, a = d ? null === (r = Object(g.a)(d)) || void 0 === r ? void 0 : r[0] : null;
						i.authorFlair[m] = {
							...i.authorFlair[m],
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
						}), i.reports[t.id] = u
					}
					if (u === I.Post) {
						const {
							postInfo: e
						} = c;
						if (null === (n = null == e ? void 0 : e.moderationInfo) || void 0 === n ? void 0 : n.verdictBy) {
							const t = M(null === (d = e.moderationInfo) || void 0 === d ? void 0 : d.verdictBy);
							t.username && (i.users[null == t ? void 0 : t.username] = t)
						}
						if (!e) return;
						const t = Object(y.f)(e);
						i.posts[t.id] = t, i.listingOrder.push({
							id: t.id,
							type: "post"
						}), i.modqueue.push(t.id);
						const {
							authorInfo: o,
							authorFlair: s
						} = e, r = s ? null === (a = Object(g.a)(s)) || void 0 === a ? void 0 : a[0] : null;
						i.authorFlair[m] = {
							...i.authorFlair[m],
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
						}), i.reports[t.id] = u
					}
				}), i
			}
			var N = o("./src/reddit/models/ModQueue/index.ts"),
				w = o("./src/reddit/models/Toast/index.ts"),
				L = o("./src/reddit/selectors/modQueue.ts"),
				D = o("./src/reddit/selectors/subreddit.ts"),
				T = o("./src/reddit/selectors/telemetry.ts"),
				F = o("./src/telemetry/index.ts"),
				Q = o("./src/lib/initializeClient/installReducer.ts"),
				q = o("./src/reddit/reducers/features/modActivitySummaries/index.ts"),
				B = o("./src/reddit/reducers/pages/modHub/index.ts"),
				U = o("./src/reddit/actions/modQueue/constants.ts");
			Object(Q.a)({
				pages: {
					modHub: B.a
				}
			}), Object(Q.a)({
				features: {
					modActivitySummaries: q.a
				}
			});
			const V = Object(n.a)(U.k),
				G = Object(n.a)(U.j),
				H = Object(n.a)(U.i),
				$ = Object(n.a)(U.h),
				K = Object(n.a)(U.g),
				z = Object(n.a)(U.f),
				W = Object(n.a)(U.e),
				J = Object(n.a)(U.p),
				X = Object(n.a)(U.o),
				Y = Object(n.a)(U.n),
				Z = Object(n.a)(U.s),
				ee = Object(n.a)(U.r),
				te = Object(n.a)(U.q),
				oe = Object(n.a)(U.y),
				se = Object(n.a)(U.x),
				re = Object(n.a)(U.w),
				ne = (e, t, o) => async (n, d, a) => {
					let {
						apiContext: l,
						gqlContext: m
					} = a;
					var b;
					let p, f, O;
					switch (t) {
						case r.wb.Edited:
							p = K, f = W, O = z;
							break;
						case r.wb.Modqueue:
							p = G, f = $, O = H;
							break;
						case r.wb.Reports:
							p = J, f = Y, O = X;
							break;
						case r.wb.Spam:
							p = Z, f = te, O = ee;
							break;
						case r.wb.Unmoderated:
							p = oe, f = re, O = se;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					if (n(p()), o.profile) {
						const e = null === (b = (await Object(u.b)(l(), o.profile)).body[o.profile]) || void 0 === b ? void 0 : b.profileId;
						o.profile = e
					}
					const v = x({
							getState: d,
							queueType: t,
							options: o
						}),
						h = await Object(c.b)(m(), v);
					if (!h.ok) return n(f(h.error)), void n(Object(i.f)({
						kind: w.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}));
					const {
						users: j,
						..._
					} = P(h.body.data);
					Object(L.b)(d()) && n(V(j)), n(O({
						listingKey: e,
						page: `${o.page||N.b}`,
						response: _
					}))
				}, de = Object(n.a)(U.m), ae = Object(n.a)(U.b), ie = e => async (t, o, r) => {
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
					const b = x({
							getState: o,
							queueType: m,
							options: {
								moderatedAfter: a
							}
						}),
						p = await Object(c.b)(n(), b);
					if (!p.ok) return void t(Object(i.f)({
						kind: w.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}));
					const f = P(p.body.data);
					t(de(f)), f.moderatedAfter ? t(ie()) : t(ae())
				}, ce = Object(n.a)(U.v), ue = Object(n.a)(U.u), le = Object(n.a)(U.t), me = (e, t, o) => async (r, n, u) => {
					let {
						apiContext: b
					} = u;
					r(Object(d.c)());
					const p = n(),
						O = Object(L.i)(p),
						v = p.user.account && p.user.account.displayText;
					Object(l.d)(l.a.ModQueue);
					const h = Object(l.c)(l.a.ModQueue);
					Object(F.a)({
						source: "bulk_mod_action_menu",
						action: "click",
						noun: e,
						...T.o(p),
						actionInfo: T.d(p, {
							count: O.length,
							paneName: p.platform.currentPage ? p.platform.currentPage.urlParams.pageName : void 0
						}),
						screen: T.bb(p),
						correlationId: h
					});
					for (let t = 0; t < O.length; t++) {
						const o = O[t];
						let s = e;
						[N.a.Approve, N.a.Remove, N.a.Spam].includes(e) && (Object(f.a)(o) ? s += "_link" : s += "_comment"), Object(F.a)({
							source: "bulk_mod_action",
							action: "click",
							noun: s,
							...T.o(p),
							actionInfo: T.d(p, {
								count: O.length,
								paneName: p.platform.currentPage ? p.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: T.h({
								state: p,
								commentId: o
							}),
							post: T.K(p, o),
							profile: T.V(p, o),
							screen: T.bb(p),
							subreddit: T.mb(p, o),
							correlationId: h
						})
					}
					Object(l.b)(l.a.ModQueue);
					const j = {
						ids: O
					};
					t && (j.text = Object(m.g)(t) || "", j.flairTemplateId = ""), o && (j.cssClass = o, j.flairTemplateId = o);
					const _ = await Object(c.a)(b(), e, j);
					if (_.ok) {
						r(Object(d.b)({
							..._.body,
							operation: e,
							ids: O,
							username: v,
							options: {
								flair: t
							}
						}));
						const o = function(e, t) {
							switch (e) {
								case N.a.Approve:
									return s.fbt._({
										"*": "{number} posts/comments have been approved",
										_1: "1 post/comment has been approved"
									}, [s.fbt._plural(t, "number")], {
										hk: "2kKhSf"
									});
								case N.a.Flair:
									return s.fbt._({
										"*": "{number} posts/comments have had flair applied",
										_1: "1 post/comment has had flair applied"
									}, [s.fbt._plural(t, "number")], {
										hk: "3syB5O"
									});
								case N.a.IgnoreReports:
									return s.fbt._({
										"*": "{number} posts/comments have had their reports ignored",
										_1: "1 post/comment has had their reports ignored"
									}, [s.fbt._plural(t, "number")], {
										hk: "2WfE4g"
									});
								case N.a.Lock:
									return s.fbt._({
										"*": "{number} posts/comments have been locked",
										_1: "1 post/comment has been locked"
									}, [s.fbt._plural(t, "number")], {
										hk: "45oMbv"
									});
								case N.a.MarkNSFW:
									return s.fbt._({
										"*": "{number} posts/comments have been marked NSFW",
										_1: "1 post/comment has been marked NSFW"
									}, [s.fbt._plural(t, "number")], {
										hk: "oPsQr"
									});
								case N.a.RemovalReason:
									return s.fbt._({
										"*": "{number} posts/comments have had removal reasons applied",
										_1: "1 post/comment has had removal reasons applied"
									}, [s.fbt._plural(t, "number")], {
										hk: "35Tosn"
									});
								case N.a.Remove:
									return s.fbt._({
										"*": "{number} posts/comments have been removed",
										_1: "1 post/comment has been removed"
									}, [s.fbt._plural(t, "number")], {
										hk: "B1ZbE"
									});
								case N.a.Spam:
									return s.fbt._({
										"*": "{number} posts/comments have been marked as spam",
										_1: "1 post/comment has been marked as spam"
									}, [s.fbt._plural(t, "number")], {
										hk: "3OoNfp"
									});
								case N.a.Spoiler:
									return s.fbt._({
										"*": "{number} posts/comments have been marked as spoilers",
										_1: "1 post/comment has been marked as spoilers"
									}, [s.fbt._plural(t, "number")], {
										hk: "1DFW5M"
									});
								case N.a.UnignoreReports:
									return s.fbt._({
										"*": "{number} posts/comments have had their reports un-ignored",
										_1: "1 post/comment has had their reports un-ignored"
									}, [s.fbt._plural(t, "number")], {
										hk: "303Hpb"
									});
								case N.a.Unlock:
									return s.fbt._({
										"*": "{number} posts/comments have been unlocked",
										_1: "1 post/comment has been unlocked"
									}, [s.fbt._plural(t, "number")], {
										hk: "5gUht"
									});
								case N.a.UnmarkNSFW:
									return s.fbt._({
										"*": "{number} posts/comments have been un-marked as NSFW",
										_1: "1 post/comment has been un-marked as NSFW"
									}, [s.fbt._plural(t, "number")], {
										hk: "3oSSST"
									});
								case N.a.Unspoiler:
								case N.a.Unspoiler:
									return s.fbt._({
										"*": "{number} posts/comments have been un-marked as spoilers",
										_1: "1 post/comment has been un-marked as spoilers"
									}, [s.fbt._plural(t, "number")], {
										hk: "3lHoNI"
									})
							}
						}(e, O.length);
						if (e !== N.a.Approve && e !== N.a.Flair) {
							let t, n;
							const u = p.platform.currentPage && p.platform.currentPage.queryParams && p.platform.currentPage.queryParams.subreddit,
								l = u && Object(D.I)(p, u);
							e === N.a.Remove && l && O.length > 1 && (t = s.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), n = Object(a.fetchReasonsAndOpenModal)(l, O));
							const m = Object(i.e)(o, w.b.Undo, s.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, o) => {
								let {
									apiContext: r
								} = o;
								e(ce());
								const n = t(),
									a = Object.keys(n.pages.modHub.modQueue.bulkAction.undoLastAction)[0],
									u = n.pages.modHub.modQueue.bulkAction.undoLastAction[a],
									l = n.user.account && n.user.account.displayText;
								e(Object(d.c)());
								const m = await Object(c.a)(r(), a, {
									ids: u
								});
								m.ok ? e(ue({
									...m.body,
									operation: a,
									ids: u,
									username: l
								})) : (e(le(m.error)), e(Object(i.f)({
									kind: w.b.Error,
									text: s.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, n);
							r(Object(i.f)(m))
						} else {
							const e = Object(i.e)(o, w.b.SuccessMod);
							r(Object(i.f)(e))
						}
					} else {
						r(Object(d.a)(_.error));
						const e = Object(i.e)(s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), w.b.Error);
						r(Object(i.f)(e))
					}
				}, be = Object(n.a)(U.a), pe = Object(n.a)(U.c), fe = Object(n.a)(U.d)
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
					profile: v,
					subreddit: h
				} = f, j = o();
				if (!p) return;
				const _ = Object(a.a)({
						onlyOfType: f.only,
						profile: f.profile,
						sort: f.sort,
						subreddit: f.subreddit
					}),
					S = j.pages.modHub.modQueue[p].itemOrder[_],
					g = !!(null === (b = null == S ? void 0 : S[O]) || void 0 === b ? void 0 : b.length),
					R = j.pages.modHub.modQueue[p].api.error;
				if (j.pages.modHub.modQueue[p].api.pending || g && !R) return;
				Object(m.p)(j) || await Object(u.e)(_, p, f)(t, o, s);
				const y = o();
				if (r()(y.pages.modHub.modQueue[p].api.error, "type") === n.L.AUTHENTICATION_ERROR) return Object(i.a)(t, y);
				Object(c.j)(y, h, v), t(l.m({
					title: Object(d.i)()
				}))
			}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "removalReasonsPending", (function() {
				return Y
			})), o.d(t, "removalReasonsLoaded", (function() {
				return Z
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
				return ve
			})), o.d(t, "removalReasonSubmittedFailed", (function() {
				return he
			})), o.d(t, "removalReasonMessagePending", (function() {
				return je
			})), o.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return _e
			})), o.d(t, "removalReasonPublicMessageSuccess", (function() {
				return Se
			})), o.d(t, "removalReasonMessageFailed", (function() {
				return ge
			})), o.d(t, "submitRemovalReason", (function() {
				return Re
			})), o.d(t, "submitBulkRemovalReason", (function() {
				return ye
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
				h = Object(n.c)({
					error: O,
					pending: v
				});
			const j = {};
			var _ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j,
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
			const S = {};
			var g = function() {
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
				y = Object(n.c)({
					api: h,
					models: _,
					reasonOrder: g,
					removedItemIds: R
				}),
				E = o("./src/lib/constants/index.ts"),
				A = o("./src/lib/makeActionCreator/index.ts"),
				k = o("./src/lib/makeCommentsPageKey/index.ts"),
				x = o("./src/lib/makeDraftKey/index.ts"),
				I = o("./src/reddit/actions/bulkActions/index.ts"),
				C = o("./src/reddit/actions/comment/index.ts"),
				M = o("./src/reddit/actions/comment/authoring.ts"),
				P = o("./src/reddit/actions/comment/moderation.ts"),
				N = o("./src/reddit/actions/modal.ts"),
				w = o("./src/reddit/actions/post.ts"),
				L = o("./src/reddit/actions/toaster.ts"),
				D = o("./src/reddit/constants/modals.ts"),
				T = o("./src/lib/makeApiRequest/index.ts"),
				F = o("./src/lib/omitHeaders/index.ts"),
				Q = o("./src/reddit/constants/headers.ts"),
				q = o("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const B = (e, t) => Object(T.a)(Object(F.a)(e, [Q.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: E.ob.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				U = (e, t, o) => Object(T.a)(Object(F.a)(e, [Q.a]), {
					endpoint: Object(q.a)(`${e.apiUrl}/api/v1/modactions/removal_${o}_message/`),
					method: E.ob.POST,
					type: "json",
					data: t
				});
			var V = o("./src/reddit/helpers/isPost.ts"),
				G = o("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				H = o("./src/reddit/helpers/routeKey/index.ts"),
				$ = o("./src/reddit/models/ModQueue/index.ts"),
				K = o("./src/reddit/models/PostDraft/index.ts"),
				z = o("./src/reddit/models/RemovalReason/index.ts"),
				W = o("./src/reddit/models/Toast/index.ts"),
				J = o("./src/reddit/selectors/comments.ts"),
				X = o("./src/reddit/selectors/platform.ts");
			Object(r.a)({
				features: {
					removalReasons: y
				}
			});
			const Y = Object(A.a)("REMOVALREASONS__LOAD_PENDING"),
				Z = Object(A.a)(d),
				ee = Object(A.a)("REMOVALREASONS__LOAD_FAILED"),
				te = e => async (t, o, s) => {
					let {
						apiContext: r
					} = s;
					const n = o().subreddits.models[e].name;
					t(Y());
					const d = await ((e, t) => Object(T.a)(Object(F.a)(e, [Q.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: E.ob.GET
					}))(r(), n);
					d.ok ? t(Z({
						subredditId: e,
						response: d.body
					})) : t(ee(d.error))
				}, oe = Object(A.a)(a), se = Object(A.a)(i), re = Object(A.a)(c), ne = (e, t) => async (o, r, n) => {
					let {
						apiContext: d
					} = n;
					const a = r().subreddits.models[e].name;
					o(oe());
					const i = await ((e, t, o) => Object(T.a)(Object(F.a)(e, [Q.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: E.ob.POST,
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
						})), o(Object(L.f)({
							kind: W.b.SuccessMod,
							text: s.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else o(re(i.error))
				}, de = Object(A.a)(u), ae = Object(A.a)(l), ie = Object(A.a)(m), ce = (e, t) => async (o, r, n) => {
					let {
						apiContext: d
					} = n;
					const a = r().subreddits.models[e].name;
					o(de());
					const i = await ((e, t, o) => Object(T.a)(Object(F.a)(e, [Q.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${o.id}`,
						method: E.ob.PUT,
						data: {
							message: o.message,
							title: o.title
						}
					}))(d(), a, t);
					i.ok ? (o(ae({
						subredditId: e,
						reason: t
					})), o(Object(L.f)({
						kind: W.b.SuccessMod,
						text: s.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : o(ie(i.error))
				}, ue = Object(A.a)(b), le = Object(A.a)(p), me = Object(A.a)(f), be = (e, t) => async (o, r, n) => {
					let {
						apiContext: d
					} = n;
					const a = r().subreddits.models[e].name;
					o(ue());
					const i = await ((e, t, o) => Object(T.a)(Object(F.a)(e, [Q.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${o}`,
						method: E.ob.DELETE
					}))(d(), a, t);
					i.ok ? (o(le({
						subredditId: e,
						reasonId: t
					})), o(Object(L.f)({
						kind: W.b.SuccessMod,
						text: s.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : o(me(i.error))
				}, pe = Object(A.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), fe = (e, t) => async (o, s, r) => {
					let {
						apiContext: n
					} = r;
					const d = s();
					d.features.removalReasons.reasonOrder[e] && d.features.removalReasons.reasonOrder[e].length > 0 || o(te(e)), o(pe({
						subredditId: e,
						itemIds: t
					})), o(Object(N.i)(D.a.ADD_REMOVAL_REASON))
				}, Oe = Object(A.a)("REMOVALREASONS__SUBMIT_PENDING"), ve = Object(A.a)("REMOVALREASONS__SUBMIT_SUCCESS"), he = Object(A.a)("REMOVALREASONS__SUBMIT_FAILED"), je = Object(A.a)("REMOVALREASONS__MESSAGE_PENDING"), _e = Object(A.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Se = Object(A.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), ge = Object(A.a)("REMOVALREASONS__MESSAGE_FAILED"), Re = (e, t, o, s, r, n) => async (d, a, i) => {
					let {
						apiContext: c
					} = i;
					const u = a(),
						l = u.user.account && u.user.account.displayText,
						m = e[0],
						b = Object(V.a)(m) ? z.e.Post : z.e.Comment,
						p = b === z.e.Post ? u.posts.models[m] : u.features.comments.models[m],
						f = b === z.e.Post ? w.R : C.j;
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
						v = await B(c(), O);
					if (v.ok) {
						if (d(ve()), t) {
							d(je());
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
									if (d(Se()), a.body) {
										const e = Object(G.a)(a.body),
											t = {
												comment: e,
												parentId: m
											},
											o = Object(X.f)(u),
											s = u.platform.currentPage && u.platform.currentPage.routeMatch;
										let r = o && s && Object(H.a)(s, u, u.posts.models[e.postId]);
										if (r || (r = Object(k.a)(e.postId, null, {
												sort: E.x,
												hasSortParam: !0
											})), b === z.e.Post) {
											const o = Object(x.a)(K.c.replyToPost, m);
											d(Object(M.r)({
												...t,
												headCommentId: Object(J.w)(u, {
													commentsPageKey: r
												}),
												commentsPageKey: r,
												draftKey: o
											}));
											const s = u.postStickiedComments.data[m];
											d(Object(P.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: r
											})), s && s !== e.id && d(Object(C.j)({
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
											d(Object(M.p)({
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
							return d(ge(a.error)), !1
						}
					} else d(he(v.error)), d(f({
						[m]: {
							modNote: p.modNote,
							modRemovalReason: p.modRemovalReason,
							modReasonBy: p.modReasonBy
						}
					}));
					return !1
				}, ye = (e, t, o, r, n) => async (d, a, i) => {
					let {
						apiContext: c
					} = i;
					const u = a(),
						l = u.user.account && u.user.account.displayText;
					if (!l) return;
					d(Oe());
					const m = Object(L.f)({
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
							n.ok ? (d(_e()), d(m)) : d(ge(n.error))
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
				h = Object(i.c)({
					currentPage: e => e.platform.currentPage,
					origin: p.k
				}),
				j = Object(a.b)(h);
			t.b = j(e => d.a.createElement("div", {
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
					lastModActionAt: r,
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
					case s.o:
					case s.r:
					case s.x: {
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
		"./src/reddit/selectors/experiments/modqueueActionBarUXImprovements.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return d
			}));
			var s = o("./src/reddit/constants/experiments.ts"),
				r = o("./src/reddit/helpers/chooseVariant/index.ts"),
				n = o("./src/reddit/selectors/user.ts");
			const d = e => Object(r.c)(e, {
				experimentEligibilitySelector: n.R,
				experimentName: s.hc
			}) === s.Qd
		},
		"./src/reddit/selectors/experiments/realtimeMQUpdates.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
			}));
			var s = o("./src/reddit/constants/experiments.ts"),
				r = o("./src/reddit/helpers/chooseVariant/index.ts"),
				n = o("./src/reddit/selectors/user.ts"),
				d = o("./src/reddit/selectors/experiments/modqueueActionBarUXImprovements.ts");
			const a = e => Object(d.a)(e) && Object(r.c)(e, {
				experimentEligibilitySelector: n.R,
				experimentName: s.Cc
			}) === s.Qd
		},
		"./src/reddit/selectors/modQueue.ts": function(e, t, o) {
			"use strict";
			o.d(t, "f", (function() {
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
				return O
			})), o.d(t, "c", (function() {
				return v
			})), o.d(t, "d", (function() {
				return h
			})), o.d(t, "b", (function() {
				return j
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = o("./src/lib/constants/index.ts"),
				r = o("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				n = o("./src/lib/objectSelector/index.ts"),
				d = o("./src/lib/initializeClient/installReducer.ts"),
				a = o("./src/reddit/reducers/features/comments/index.ts"),
				i = o("./src/reddit/reducers/pages/modHub/index.ts"),
				c = o("./src/reddit/selectors/experiments/modqueueActionBarUXImprovements.ts");
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
					var o, s, r;
					const {
						pageName: n,
						page: d
					} = t, a = u(0, t);
					if (!(null === (r = null === (s = null === (o = e.pages.modHub.modQueue[n]) || void 0 === o ? void 0 : o.itemOrder) || void 0 === s ? void 0 : s[a]) || void 0 === r ? void 0 : r[d])) return;
					const i = e.pages.modHub.modQueue[n].itemOrder[a][d];
					return i ? i.map(t => e.posts.models[t] || e.features.comments.models[t]) : []
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
					const s = u(0, t);
					return null === (o = e.pages.modHub.modQueue[t.pageName]) || void 0 === o ? void 0 : o.loadMore[s]
				},
				p = e => Object.keys(e.pages.modHub.modQueue.bulkAction.selectedItems),
				f = e => e.pages.modHub.modQueue.bulkAction.api.pending,
				O = e => e.pages.modHub.modQueue.moderatedCommunitiesOrder.data,
				v = e => {
					const t = e.platform && e.platform.currentPage;
					return t && t.meta && (t.meta.name === s.Sb.MODERATION_PAGES || t.meta.name === s.Sb.MODQUEUE_PAGES)
				},
				h = e => {
					var t;
					const o = e.platform && e.platform.currentPage;
					return (null === (t = null == o ? void 0 : o.meta) || void 0 === t ? void 0 : t.name) === s.Sb.MODQUEUE_PAGES
				},
				j = e => v(e) && Object(c.a)(e) || !1
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueue.ff525da1121b20762603.js.map