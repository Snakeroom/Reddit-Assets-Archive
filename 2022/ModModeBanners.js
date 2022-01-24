// https://www.redditstatic.com/desktop2x/ModModeBanners.9c48f67ae49c9749be36.js
// Retrieved at 1/24/2022, 11:20:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModModeBanners"], {
		"./src/reddit/actions/comment/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return N
			})), s.d(t, "m", (function() {
				return S
			})), s.d(t, "e", (function() {
				return w
			})), s.d(t, "h", (function() {
				return P
			})), s.d(t, "l", (function() {
				return A
			})), s.d(t, "q", (function() {
				return U
			})), s.d(t, "j", (function() {
				return z
			})), s.d(t, "g", (function() {
				return K
			})), s.d(t, "f", (function() {
				return G
			})), s.d(t, "o", (function() {
				return $
			})), s.d(t, "p", (function() {
				return Z
			})), s.d(t, "d", (function() {
				return q
			})), s.d(t, "a", (function() {
				return V
			})), s.d(t, "b", (function() {
				return X
			})), s.d(t, "n", (function() {
				return W
			})), s.d(t, "c", (function() {
				return Y
			})), s.d(t, "k", (function() {
				return ee
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/config.ts"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/telemetry/index.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/reddit/actions/economics/helpers/async.ts"),
				i = s("./src/reddit/actions/economics/powerups/flairs/async.ts"),
				a = s("./src/reddit/actions/login.ts"),
				l = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/actions/modQueueTriggers/index.ts"),
				u = s("./src/reddit/actions/shortcuts/utils.ts"),
				p = s("./src/reddit/actions/toaster.ts"),
				b = s("./src/reddit/actions/vote.ts"),
				f = s("./src/reddit/endpoints/comment/index.tsx"),
				O = s("./src/reddit/helpers/commentList/index.ts"),
				j = s("./src/reddit/helpers/trackers/comment.ts"),
				x = s("./src/reddit/models/Comment/index.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				h = s("./src/reddit/models/Toast/index.ts"),
				v = s("./src/reddit/models/Vote/index.ts"),
				R = s("./src/reddit/selectors/comments.ts"),
				k = s("./src/reddit/selectors/commentSelector.ts"),
				_ = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				I = s("./src/reddit/selectors/moderatingComments.ts"),
				y = s("./src/reddit/selectors/moderatorPermissions.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				T = s("./src/reddit/actions/comment/constants.ts");
			const E = {},
				N = Object(d.a)(T.o),
				S = e => async (t, s, {
					apiContext: o
				}) => {
					if (!Object(C.J)(s())) return t(Object(a.j)()), void t(Object(l.k)({
						actionSource: l.a.Save,
						redirectUrl: Object(R.m)(s(), {
							commentId: e
						})
					}));
					const r = s().features.comments.models[e];
					if (!r) return;
					const d = r.isSaved ? f.m : f.i;
					if (t(N({
							[e]: {
								isSaved: !r.isSaved
							}
						})), (await d(o(), e)).ok) {
						const s = r.isSaved ? n.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : n.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							o = n.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(p.f)({
							text: s,
							kind: h.b.Undo,
							buttonText: o,
							buttonAction: S(e)
						}))
					} else t(N({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, B = e => `viewing-comment-${e}`, M = o.a.telemetry.commentConsumedThreshold, w = e => async (t, s) => {
					const n = s();
					if (!Object(k.b)(n, {
							commentId: e
						}) || Math.random() > o.a.telemetry.commentSampleRate) return;
					j.c({
						state: n,
						commentId: e
					}), r.c.start(B(e));
					const d = setTimeout(() => j.a({
						state: n,
						commentId: e
					}), M);
					E[e] = d
				}, P = (e, t) => async (s, o) => {
					const n = o(),
						d = B(e);
					if (Object(k.b)(n, {
							commentId: e
						}) && r.c.has(d)) {
						const s = r.c.end(d);
						!t && s < M && (clearTimeout(E[e]), delete E[e])
					}
				}, D = Object(d.a)(T.x), L = Object(d.a)(T.w), F = Object(d.a)(T.v), A = (e, t) => async (s, o, {
					apiContext: n
				}) => {
					const r = o(),
						d = r.moreComments.models[t],
						a = r.platform.currentPage,
						l = a && a.routeMatch,
						u = l && l.match,
						{
							partialPostId: p
						} = u ? u.params : null;
					if (!p) return;
					const b = Object(g.t)(p);
					s(D({
						moreCommentsId: d.id
					}));
					const j = await Object(f.f)(n(), b, {
						token: d.token
					}, Object(_.a)(r));
					if (j.ok) {
						const t = j.body,
							n = Object(O.a)(t, b, r);
						s(L({
							key: e,
							moreCommentsItem: d,
							shouldCollapse: n,
							...t
						}));
						const a = r.posts.models[b];
						let l;
						a && "subreddit" === a.belongsTo.type && t.comments && (l = a.belongsTo.id, await s(Object(c.a)({
							commentIds: Object.keys(j.body.comments),
							postIds: [a.id],
							skip: ["communityDetails", "subscription"],
							subredditId: l
						})));
						const u = j.body.comments;
						await s(Object(i.b)(l, u)), Object(y.h)(o(), {
							subredditId: a.belongsTo.id
						}) && s(Object(m.a)({
							commentIds: Object.keys(t.comments)
						}))
					} else s(F({
						moreCommentsItem: d,
						...j.error
					}))
				}, U = Object(b.a)(O.b, v.a.upvoted), z = Object(b.a)(O.b, v.a.downvoted), K = Object(d.a)(T.j), G = Object(d.a)(T.i), Q = Object(d.a)(T.e), H = Object(d.a)(T.f), $ = (Object(d.a)(T.c), Object(d.a)(T.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: s
				}) => async (o, n) => {
					const r = n(),
						d = Object(x.i)(e),
						c = Object(R.n)(r, {
							commentLink: d,
							commentsPageKey: t
						}),
						i = Object(I.b)(r, {
							commentId: e,
							commentsPageKey: t
						}),
						a = c.depth;
					o(Q({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: i
					})), i || 0 !== a || s(e, !0), Object(u.d)()
				}), Z = ({
					commentId: e,
					commentsPageKey: t
				}) => async s => {
					s(H({
						commentId: e,
						commentsPageKey: t
					}))
				}, q = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: s,
					scrollToAndRemeasure: o
				}) => async (n, r) => {
					const d = r(),
						c = Object(O.e)(t, e, s, d),
						i = Object(I.b)(d, {
							commentId: e.id,
							commentsPageKey: t
						});
					n(Q({
						commentId: c,
						commentsPageKey: t,
						isCollapsed: i
					})), 0 === s && o(c, !0), Object(u.d)()
				}, J = Object(d.a)(T.r), V = e => t => t(J({
					draftKey: e
				})), X = Object(d.a)(T.a), W = Object(d.a)(T.E), Y = Object(d.a)(T.b), ee = Object(d.a)(T.u)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return v
			})), s.d(t, "c", (function() {
				return R
			})), s.d(t, "f", (function() {
				return k
			})), s.d(t, "a", (function() {
				return _
			})), s.d(t, "e", (function() {
				return I
			})), s.d(t, "g", (function() {
				return y
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "b", (function() {
				return T
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/lib/makeCommentsPageKey/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				i = s("./src/reddit/actions/shortcuts/utils.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/constants/modals.ts"),
				m = s("./src/reddit/endpoints/comment/index.tsx"),
				u = s("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = s("./src/reddit/models/Reportable/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				O = s("./src/reddit/selectors/experiments/d2xGqlDistinguish.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/actions/comment/index.ts"),
				g = s("./src/reddit/actions/comment/constants.ts");
			const h = Object(r.a)(g.n),
				v = e => async (t, s, {
					apiContext: o
				}) => {
					s().features.comments.models[e] && (await Object(m.j)(o(), e)).ok && t((e => async t => {
						t(h({
							commentId: e
						}))
					})(e))
				}, R = e => async (t, s, {
					apiContext: n
				}) => {
					if (!Object(j.J)(s())) return void t(Object(c.i)(l.a.LOGIN_MODAL_ID));
					const r = s().features.comments.models[e];
					if (!r) return;
					const d = r.isLocked ? m.l : m.e;
					t(Object(x.i)({
						[e]: {
							isLocked: !r.isLocked
						}
					})), (await d(n(), e)).ok ? t(Object(a.f)({
						kind: b.b.SuccessMod,
						text: r.isLocked ? o.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : o.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(x.i)({
						[e]: {
							isLocked: r.isLocked
						}
					}))
				}, k = Object(r.a)(g.F), _ = e => async (t, s, {
					apiContext: n
				}) => {
					const r = s(),
						d = r.features.comments.models[e],
						c = r.user.account ? r.user.account.displayText : null;
					d && c && (t(Object(x.i)({
						[e]: {
							isApproved: !0,
							approvedBy: c,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(m.a)(n(), e)).ok ? t(Object(a.f)({
						kind: b.b.SuccessMod,
						text: o.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(x.i)({
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
					})), Object(i.d)())
				}, I = (e, t) => async (s, n, {
					apiContext: r
				}) => {
					const d = n(),
						c = d.features.comments.models[e],
						l = d.user.account ? d.user.account.displayText : null;
					c && l && (s(Object(x.i)({
						[e]: {
							approvedBy: null,
							bannedBy: l,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.h)(r(), e, t)).ok ? s(Object(a.f)({
						kind: b.b.SuccessMod,
						text: t ? o.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : o.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : s(Object(x.i)({
						[e]: {
							approvedBy: c.approvedBy,
							bannedBy: c.bannedBy,
							isApproved: c.isApproved,
							isRemoved: c.isRemoved,
							isSpam: c.isSpam
						}
					})), Object(i.d)())
				}, y = e => async (t, s, {
					apiContext: n
				}) => {
					const r = s().features.comments.models[e];
					if (!r) return;
					const d = r.ignoreReports ? m.k : m.d;
					t(Object(x.i)({
						[e]: {
							ignoreReports: !r.ignoreReports
						}
					})), (await d(n(), e)).ok ? t(Object(a.f)({
						kind: b.b.SuccessMod,
						text: r.ignoreReports ? o.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : o.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(x.i)({
						[e]: {
							ignoreReports: r.ignoreReports
						}
					}))
				}, C = (e, t, s) => async (r, d, {
					gqlContext: c
				}) => {
					const i = Object(f.b)(d(), {
						commentId: e
					});
					if (!i) return;
					const l = s === n.cc.Snoozed,
						m = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(u.a)(c(), {
							input: m
						})).ok) r(Object(x.i)({
						[e]: {
							userReports: Object(p.a)(i.userReports, t, l)
						}
					}));
					else {
						const e = Object(a.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(a.f)(e))
					}
				}, T = (e, t, s) => async (o, r, {
					apiContext: c,
					gqlContext: i
				}) => {
					const a = r(),
						l = a.features.comments.models[e];
					if (!l) return;
					const u = l.postId,
						p = a.postStickiedComments.data[u],
						b = n.g[t];
					let f;
					if (o(Object(x.i)({
							[e]: {
								distinguishType: t,
								isAdmin: t === n.G.ADMIN,
								isMod: t === n.G.MODERATOR,
								isStickied: !!s
							}
						})), s && p && p !== e && o(Object(x.i)({
							[p]: {
								isStickied: !1
							}
						})), Object(O.a)(r())) {
						const o = Object(m.b)(i(), e, t),
							n = Object(m.c)(i(), e, !!s),
							r = [o];
						(s || !s && e === p) && r.push(n), f = {
							ok: (await Promise.all(r)).every(e => e.ok)
						}
					} else f = await Object(m.g)(c(), e, b, s || null);
					f.ok ? s && o(k({
						id: e,
						postId: u,
						commentsPageKey: Object(d.a)(u, null, {
							sort: n.u.CONFIDENCE,
							...a.platform.currentPage.queryParams
						})
					})) : (o(Object(x.i)({
						[e]: {
							distinguishType: l.distinguishType,
							isAdmin: l.isAdmin,
							isMod: l.isMod,
							isStickied: l.isStickied
						}
					})), o(Object(x.i)({
						[p]: {
							isStickied: a.features.comments.models[p].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/modQueueTriggers/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var o = s("./src/reddit/actions/comment/index.ts"),
				n = s("./src/reddit/actions/post.ts"),
				r = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/redditGQL/operations/ModQueueTriggers.json");
			const c = ({
				commentIds: e = [],
				postIds: t = []
			}) => async (s, c, {
				gqlContext: i
			}) => {
				var a, l;
				if (!e.length && !t.length) return;
				const m = await ((e, t) => Object(r.a)(e, {
					...d,
					variables: t
				}))(i(), {
					commentIds: e,
					postIds: t
				});
				if (m.ok) {
					const e = m.body;
					if (e.data.commentsByIds) {
						const t = Object.fromEntries(null === (a = e.data.commentsByIds) || void 0 === a ? void 0 : a.filter(e => {
							var t;
							return null === (t = null == e ? void 0 : e.moderationInfo) || void 0 === t ? void 0 : t.modQueueTriggers
						}).map(e => {
							var t;
							return [null == e ? void 0 : e.id, {
								modQueueTriggers: null === (t = null == e ? void 0 : e.moderationInfo) || void 0 === t ? void 0 : t.modQueueTriggers
							}]
						}));
						s(Object(o.i)(t))
					}
					if (e.data.postsInfoByIds) {
						const t = Object.fromEntries(null === (l = e.data.postsInfoByIds) || void 0 === l ? void 0 : l.filter(e => {
							var t;
							return null === (t = null == e ? void 0 : e.moderationInfo) || void 0 === t ? void 0 : t.modQueueTriggers
						}).map(e => {
							var t;
							return [null == e ? void 0 : e.id, {
								modQueueTriggers: null === (t = null == e ? void 0 : e.moderationInfo) || void 0 === t ? void 0 : t.modQueueTriggers
							}]
						}));
						s(Object(n.S)(t))
					}
				}
			}
		},
		"./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.m.less": function(e, t, s) {
			e.exports = {
				banner: "jVqYW2zU9Cs56ibjXMqQO",
				listItem: "_2hoVuydIPHT0lBFd4Dz-91",
				coloredIcon: "KJW8JsvlaHMp72a41MljF"
			}
		},
		"./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/ModModeBanners/index.m.less"),
				c = s.n(d),
				i = s("./src/reddit/models/ModQueueTrigger/index.ts"),
				a = s("./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.m.less"),
				l = s.n(a),
				m = s("./src/reddit/icons/fonts/index.tsx");
			var u = ({
					iconName: e,
					children: t
				}) => n.a.createElement(n.a.Fragment, null, n.a.createElement(m.a, {
					isFilled: !0,
					name: e,
					className: Object(r.a)(l.a.coloredIcon, c.a.icon)
				}), t),
				p = s("./src/reddit/components/ModModeFilteredReason/helpers.ts");
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), f = e => e ? `: ${e}` : "";
			t.default = ({
				thing: e
			}) => {
				var t, s;
				return n.a.createElement("ul", {
					className: Object(r.a)(l.a.banner, c.a.banner)
				}, Object(p.c)(e) && n.a.createElement("li", {
					className: l.a.listItem
				}, n.a.createElement(u, {
					iconName: "mod_mode_fill"
				}, b._("Blocked by Automatic Filter{reason}", [b._param("reason", f(null === (t = Object(i.b)(e, i.a.HATEFUL_CONTENT)) || void 0 === t ? void 0 : t.message))], {
					hk: "3IxjRX"
				}))), Object(p.b)(e) && n.a.createElement("li", {
					className: l.a.listItem
				}, n.a.createElement(u, {
					iconName: "crowd_control"
				}, b._("Blocked by Crowd Control", null, {
					hk: "1gAVrC"
				}))), Object(p.a)(e) && n.a.createElement("li", {
					className: l.a.listItem
				}, n.a.createElement(u, {
					iconName: "bot"
				}, b._("Blocked by AutoMod{reason}", [b._param("reason", f((null === (s = Object(i.b)(e, i.a.AUTOMOD)) || void 0 === s ? void 0 : s.message) || e.modNote))], {
					hk: "3yuGbK"
				}))))
			}
		},
		"./src/reddit/components/ModModeReports/_ModModeReports.m.less": function(e, t, s) {
			e.exports = {
				banner: "HvreLeuuSfh1rkoWE9xuN",
				collapsed: "_13ZFeqy7MhNDIo_5EgxMBy",
				contentContainer: "_1Mypg35XVWYc_yoTLInTJ-",
				coloredIcon: "_1FrEyh5SQ-2aoHDsNDPjzX",
				ignoreButton: "_1Lno0Y9PcQ4qpuobaTHDKT",
				ignoreButtonIcon: "_1bHw74h-KbQ16nM50WYsYB",
				reportsWrapper: "_1sFJ-ZCpGsI_VfPvFc0_KM",
				reports: "_1u0QpAjiAmsmy4uUwFZ27u"
			}
		},
		"./src/reddit/components/ModModeReports/_ModModeReports.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/ModModeBanners/index.m.less"),
				i = s.n(c),
				a = s("./src/reddit/components/Reports/index.tsx"),
				l = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/helpers/isPost.ts"),
				p = s("./src/reddit/helpers/trackers/modTools.ts"),
				b = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				f = s("./src/reddit/icons/fonts/Report/index.tsx"),
				O = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				j = s("./src/reddit/components/ModModeReports/_ModModeReports.m.less"),
				x = s.n(j);
			const g = ({
				handleToggleExpando: e,
				isHistoricalReports: t,
				numReports: s,
				modReports: n,
				userReports: c,
				collapseReports: m,
				reportedThingId: u
			}) => r.a.createElement("div", {
				className: Object(d.a)(x.a.banner, i.a.banner, m && x.a.collapsed)
			}, r.a.createElement("div", {
				className: x.a.contentContainer
			}, m ? r.a.createElement(b.a, {
				className: Object(d.a)(i.a.icon, x.a.coloredIcon)
			}) : r.a.createElement(f.a, {
				className: Object(d.a)(i.a.icon, x.a.coloredIcon)
			}), r.a.createElement("div", {
				className: x.a.reportsWrapper
			}, m ? s : r.a.createElement(a.a, {
				className: x.a.reports,
				modReports: n,
				userReports: c,
				reportedThingId: u
			})), t ? r.a.createElement(l.c, {
				className: x.a.ignoreButton,
				onClick: e,
				text: o.fbt._("old reports", null, {
					hk: "2IdZOv"
				})
			}, r.a.createElement(O.a, {
				className: x.a.ignoreButtonIcon
			})) : r.a.createElement(l.c, {
				className: x.a.ignoreButton,
				onClick: e,
				text: m ? o.fbt._("Restore Reports", null, {
					hk: "2O219R"
				}) : o.fbt._("ignore reports", null, {
					hk: "48jlNW"
				})
			}, m ? r.a.createElement(f.a, {
				className: x.a.ignoreButtonIcon
			}) : r.a.createElement(b.a, {
				className: x.a.ignoreButtonIcon
			}))));
			t.default = ({
				reportable: e,
				onIgnoreReports: t
			}) => {
				const [s, o] = Object(n.useState)(!0), d = Object(m.b)(), c = () => {
					let s;
					t();
					const o = e.ignoreReports ? "restore_reports" : "ignore_reports";
					s = Object(u.a)(e.id) ? Object(p.h)(o, e.id) : Object(p.g)(o, e.id), d(s)
				}, i = (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0);
				return i ? r.a.createElement(g, {
					collapseReports: s,
					handleToggleExpando: () => o(e => !e),
					isHistoricalReports: !0,
					numReports: i,
					modReports: e.modReportsDismissed,
					userReports: e.userReportsDismissed,
					reportedThingId: e.id
				}) : r.a.createElement(g, {
					handleToggleExpando: c,
					collapseReports: e.ignoreReports,
					numReports: e.numReports || 0,
					modReports: e.modReports,
					userReports: e.userReports,
					reportedThingId: e.id
				})
			}
		},
		"./src/reddit/components/Reports/SnoozableReport/index.m.less": function(e, t, s) {
			e.exports = {
				ReportContainer: "rcWKqpRVFFbdiL-fFemgZ",
				reportContainer: "rcWKqpRVFFbdiL-fFemgZ",
				DropdownLabelContainer: "_3rsZ2ZF99dXi8CxIvlUnna",
				dropdownLabelContainer: "_3rsZ2ZF99dXi8CxIvlUnna",
				DropdownLabel: "_1NxoOUgmzKH04lLU9O6O6z",
				dropdownLabel: "_1NxoOUgmzKH04lLU9O6O6z",
				mActive: "_1mwLBQ-SAEJSG4hvYZzPUO",
				SnoozeButton: "_1QMSuJL3vFpEsGhWHllIQ5",
				snoozeButton: "_1QMSuJL3vFpEsGhWHllIQ5",
				SnoozeButtonContent: "tGdUIanRrFFgVZrnBwdl5",
				snoozeButtonContent: "tGdUIanRrFFgVZrnBwdl5"
			}
		},
		"./src/reddit/components/Reports/index.m.less": function(e, t, s) {
			e.exports = {
				ReportText: "_3TPyo-_MFDbVaI7ExIkD1G",
				reportText: "_3TPyo-_MFDbVaI7ExIkD1G",
				ReportsTitle: "_21BmvfYiT1eKfN4AeE812a",
				reportsTitle: "_21BmvfYiT1eKfN4AeE812a",
				Reports: "ZL1AYPlBJX_2kYn3OATX6",
				reports: "ZL1AYPlBJX_2kYn3OATX6",
				UserReports: "_1d5zD9SHWtSuQPbzf7rh_k",
				userReports: "_1d5zD9SHWtSuQPbzf7rh_k"
			}
		},
		"./src/reddit/components/Reports/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return D
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/lessComponent.tsx"),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/actions/comment/moderation.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				f = s("./src/reddit/controls/Dropdown/Row.tsx"),
				O = s("./src/reddit/helpers/isComment.ts"),
				j = s("./src/reddit/helpers/trackers/modTools.ts"),
				x = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				g = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				h = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				v = s("./src/reddit/icons/svgs/Undo/index.tsx"),
				R = s("./src/reddit/selectors/tooltip.ts"),
				k = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				_ = s.n(k);
			const {
				fbt: I
			} = s("./node_modules/fbt/lib/FbtPublic.js"), y = (e, t) => `SnoozableReport--${t}--${e}`, C = Object(d.b)(() => Object(c.c)({
				isDropdownOpen: (e, t) => Object(R.b)(y(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(m.h)({
					tooltipId: y(t.reason, t.reportedThingId)
				})),
				toggleSnooze: s => {
					Object(O.a)(t.reportedThingId) ? e(Object(a.h)(t.reportedThingId, t.reason, s)) : e(Object(l.gb)(t.reportedThingId, t.reason, s))
				}
			})), T = Object(u.a)(b.a);
			class E extends n.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? i.cc.None : i.cc.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(j.l)(Object(O.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
						this.props.sendEvent(t)
					}
				}
				render() {
					const {
						reason: e,
						amount: t,
						reportedThingId: s,
						openDropdown: o,
						isDropdownOpen: r,
						isSnoozed: d
					} = this.props, c = y(e, s);
					return n.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, n.a.createElement(f.b, {
						id: c,
						className: _.a.DropdownLabelContainer,
						onClick: o
					}, n.a.createElement("label", {
						htmlFor: c,
						className: _.a.DropdownLabel
					}, d ? "Reporter snoozed" : `${t}: ${e}`, r ? n.a.createElement(g.a, null) : n.a.createElement(x.a, null))), n.a.createElement(T, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, n.a.createElement("button", {
						className: _.a.SnoozeButton,
						onClick: this.onSnoozeButtonClick
					}, n.a.createElement("div", {
						className: _.a.SnoozeButtonContent
					}, d ? n.a.createElement(n.a.Fragment, null, n.a.createElement(v.a, null), I._("Undo snoozing reports from this user", null, {
						hk: "4iqfWB"
					})) : n.a.createElement(n.a.Fragment, null, n.a.createElement(h.a, null), I._("Snooze reports from this user for 7 days", null, {
						hk: "4cRFyG"
					}))))))
				}
			}
			var N = C(Object(p.c)(E)),
				S = s("./src/reddit/components/Reports/index.m.less"),
				B = s.n(S);
			const {
				fbt: M
			} = s("./node_modules/fbt/lib/FbtPublic.js"), w = r.a.div("ReportText", B.a), P = r.a.div("ReportsTitle", B.a);

			function D(e) {
				const {
					className: t,
					modReports: s,
					userReports: o,
					reportedThingId: r
				} = e;
				return n.a.createElement("div", {
					className: t
				}, s && s.length > 0 && n.a.createElement("div", {
					className: B.a.Reports
				}, n.a.createElement(P, null, M._("Moderator Reports", null, {
					hk: "3hZ0oX"
				})), s.map(([e, t]) => n.a.createElement(w, {
					key: `mod-${t}`
				}, `u/${t}: ${e}`))), o && o.length > 0 && n.a.createElement("div", {
					className: B.a.Reports
				}, n.a.createElement(P, null, M._("User Reports", null, {
					hk: "2KeCLz"
				})), n.a.createElement("div", {
					className: B.a.UserReports
				}, o.map(([e, t, s, o]) => void 0 !== s && o ? n.a.createElement(N, {
					key: `user-${e}`,
					reason: e,
					amount: t,
					reportedThingId: r,
					isSnoozed: s
				}) : n.a.createElement(w, {
					key: `user-${e}`
				}, `${t}: ${e}`)))))
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, s) {
			e.exports = {
				removalReasonButton: "_3IEDcFIIs_TeXsZtKZGzUd",
				TextWrapper: "smOzqVIOoNqmSJcyBX2N6",
				textWrapper: "smOzqVIOoNqmSJcyBX2N6",
				Button: "_1rNBkuuOkN2SorEXyRkYjB",
				button: "_1rNBkuuOkN2SorEXyRkYjB",
				ApproveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				approveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				RemoveButton: "_2OvUr_pd3kddsNP_f35S28",
				removeButton: "_2OvUr_pd3kddsNP_f35S28"
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				i = s.n(c);
			const a = e => n.a.createElement("button", {
					className: Object(r.a)(i.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, e.children, e.text && n.a.createElement("span", {
					className: Object(r.a)(i.a.TextWrapper, e.textClassName)
				}, e.text, " ")),
				l = d.a.wrapped(a, "ApproveButton", i.a),
				m = d.a.wrapped(a, "RemoveButton", i.a),
				u = e => n.a.createElement("button", {
					className: Object(r.a)(i.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return O
			})), s.d(t, "m", (function() {
				return j
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "l", (function() {
				return g
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "d", (function() {
				return R
			})), s.d(t, "k", (function() {
				return k
			})), s.d(t, "j", (function() {
				return _
			})), s.d(t, "f", (function() {
				return I
			})), s.d(t, "g", (function() {
				return y
			})), s.d(t, "b", (function() {
				return T
			})), s.d(t, "c", (function() {
				return E
			}));
			var o = s("./src/config.ts"),
				n = s("./src/redditGQL/operations/UpdateCommentDistinguishState.json"),
				r = s("./src/redditGQL/operations/UpdateCommentStickyState.json"),
				d = s("./src/redditGQL/types.ts"),
				c = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeApiRequest/index.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				l = s("./src/lib/omitHeaders/index.ts"),
				m = s("./src/reddit/constants/headers.ts"),
				u = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = s("./src/reddit/models/Comment/addProfileImgParam.ts"),
				b = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				f = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const O = (e, t) => Object(i.a)(Object(l.a)(e, [m.a]), {
					endpoint: Object(u.a)(`${e.apiUrl}/api/save`),
					method: c.jb.POST,
					data: {
						id: t
					}
				}),
				j = (e, t) => Object(i.a)(Object(l.a)(e, [m.a]), {
					endpoint: Object(u.a)(`${e.apiUrl}/api/unsave`),
					method: c.jb.POST,
					data: {
						id: t
					}
				}),
				x = (e, t) => Object(i.a)(Object(l.a)(e, [m.a]), {
					endpoint: Object(u.a)(`${e.apiUrl}/api/lock`),
					method: c.jb.POST,
					data: {
						id: t
					}
				}),
				g = (e, t) => Object(i.a)(Object(l.a)(e, [m.a]), {
					endpoint: Object(u.a)(`${e.apiUrl}/api/unlock`),
					method: c.jb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(i.a)(Object(l.a)(e, [m.a]), {
					endpoint: Object(u.a)(`${e.apiUrl}/api/approve`),
					method: c.jb.POST,
					data: {
						id: t
					}
				}),
				v = (e, t, s) => Object(i.a)(Object(l.a)(e, [m.a]), {
					endpoint: Object(u.a)(`${e.apiUrl}/api/remove`),
					method: c.jb.POST,
					data: {
						id: t,
						spam: s
					}
				}),
				R = (e, t) => Object(i.a)(Object(l.a)(e, [m.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: c.jb.POST,
					data: {
						id: t
					}
				}),
				k = (e, t) => Object(i.a)(Object(l.a)(e, [m.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: c.jb.POST,
					data: {
						id: t
					}
				}),
				_ = (e, t) => Object(i.a)(Object(l.a)(e, [m.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: c.jb.POST,
					data: {
						id: t
					}
				}),
				I = (e, t, s, n) => {
					let r = Object(u.a)(Object(f.a)(Object(b.a)(`${o.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return n && (r = Object(p.a)(r)), Object(i.a)(e, {
						data: s,
						endpoint: r,
						method: c.jb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				y = (e, t, s, o) => Object(i.a)(Object(l.a)(e, [m.a]), {
					endpoint: Object(u.a)(`${e.apiUrl}/api/distinguish/${s}`),
					method: c.jb.POST,
					data: {
						id: t,
						sticky: o
					}
				}),
				C = {
					[c.G.NONE]: d.e.None,
					[c.G.MODERATOR]: d.e.ModDistinguished,
					[c.G.ADMIN]: d.e.AdminDistinguished,
					[c.G.ALUMNI_ADMIN]: d.e.AlumniDistinguished
				};

			function T(e, t, s) {
				const o = function(e, t) {
					return {
						input: {
							commentId: e,
							distinguishState: t === c.G.NONE ? d.b.None : d.b.Distinguished,
							distinguishType: C[t]
						}
					}
				}(t, s);
				return Object(a.a)(e, {
					...n,
					variables: o
				})
			}

			function E(e, t, s) {
				return Object(a.a)(e, {
					...r,
					variables: {
						input: {
							commentId: t,
							sticky: s
						}
					}
				})
			}
		},
		"./src/reddit/helpers/trackers/comment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return c
			}));
			var o = s("./src/telemetry/index.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const r = ({
					state: e,
					commentId: t
				}) => Object(o.a)({
					source: "comment",
					action: "view",
					noun: "comment",
					...n.m(e),
					profile: n.P(e),
					post: n.G(e, t),
					media: n.z(e, t),
					subreddit: n.hb(e),
					comment: n.h(e, t)
				}),
				d = ({
					state: e,
					commentId: t
				}) => Object(o.a)({
					source: "comment",
					action: "consume",
					noun: "comment",
					...n.m(e),
					profile: n.P(e),
					post: n.G(e, t),
					media: n.z(e, t),
					subreddit: n.hb(e),
					comment: n.h(e, t)
				}),
				c = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: n.ob(t),
					subreddit: n.hb(t),
					post: n.G(t, e),
					actionInfo: n.c(t),
					app: n.f(t),
					referrer: n.V(t),
					session: n.cb(t)
				})
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(r.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(c);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(d.b)("report", e.isFilled), i.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(d.a, null, e.desc))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("g", null, n.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, s) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/icons/svgs/Clock/index.m.less"),
				c = s.n(d);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(c.a.clock, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Undo/index.m.less": function(e, t, s) {
			e.exports = {
				undo: "_2sBykNOXv7XBQtHHHAB1JB"
			}
		},
		"./src/reddit/icons/svgs/Undo/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/icons/svgs/Undo/index.m.less"),
				c = s.n(d);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(c.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/selectors/moderatingComments.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return n
			}));
			const o = (e, {
					commentId: t,
					commentsPageKey: s
				}) => {
					if (!t) return !1;
					if (e.features.comments.collapsed[s] && t in e.features.comments.collapsed[s]) return !!e.features.comments.collapsed[s][t];
					const o = e.features.comments.models[t];
					return !!o && ("computedCollapsed" in o ? !!o.computedCollapsed : o.collapsedBecauseCrowdControl ? !e.modModeEnabled : o.collapsed)
				},
				n = (e, {
					commentId: t
				}) => {
					if (!t) return !1;
					const s = e.features.comments.models[t];
					return !(!s || !s.collapsedBecauseCrowdControl) && e.modModeEnabled
				}
		},
		"./src/redditGQL/operations/ModQueueTriggers.json": function(e) {
			e.exports = JSON.parse('{"id":"de8696c3b5fd"}')
		},
		"./src/redditGQL/operations/UpdateCommentDistinguishState.json": function(e) {
			e.exports = JSON.parse('{"id":"e1f407c8ceba"}')
		},
		"./src/redditGQL/operations/UpdateCommentStickyState.json": function(e) {
			e.exports = JSON.parse('{"id":"236938d65d55"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModModeBanners.9c48f67ae49c9749be36.js.map