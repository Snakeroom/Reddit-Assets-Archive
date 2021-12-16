// https://www.redditstatic.com/desktop2x/reddit-components-ViewReportsDropdown-index.5f7cae406db63971e44a.js
// Retrieved at 12/16/2021, 2:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ViewReportsDropdown-index"], {
		"./src/reddit/actions/comment/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "i", (function() {
				return _
			})), o.d(t, "m", (function() {
				return E
			})), o.d(t, "e", (function() {
				return N
			})), o.d(t, "h", (function() {
				return P
			})), o.d(t, "l", (function() {
				return z
			})), o.d(t, "q", (function() {
				return F
			})), o.d(t, "j", (function() {
				return Q
			})), o.d(t, "g", (function() {
				return G
			})), o.d(t, "f", (function() {
				return M
			})), o.d(t, "o", (function() {
				return H
			})), o.d(t, "p", (function() {
				return V
			})), o.d(t, "d", (function() {
				return Z
			})), o.d(t, "a", (function() {
				return J
			})), o.d(t, "b", (function() {
				return X
			})), o.d(t, "n", (function() {
				return W
			})), o.d(t, "c", (function() {
				return Y
			})), o.d(t, "k", (function() {
				return ee
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = o("./src/config.ts"),
				n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/telemetry/index.ts"),
				d = o("./src/lib/makeActionCreator/index.ts"),
				i = o("./src/reddit/actions/economics/helpers/async.ts"),
				c = o("./src/reddit/actions/economics/powerups/flairs/async.ts"),
				a = o("./src/reddit/actions/login.ts"),
				m = o("./src/reddit/actions/modal.ts"),
				l = o("./src/reddit/actions/modQueueTriggers/index.ts"),
				u = o("./src/reddit/actions/shortcuts/utils.ts"),
				p = o("./src/reddit/actions/toaster.ts"),
				b = o("./src/reddit/actions/vote.ts"),
				O = o("./src/reddit/endpoints/comment/index.tsx"),
				f = o("./src/reddit/helpers/commentList/index.ts"),
				j = o("./src/reddit/helpers/trackers/comment.ts"),
				g = o("./src/reddit/models/Comment/index.ts"),
				x = o("./src/reddit/models/Post/index.ts"),
				v = o("./src/reddit/models/Toast/index.ts"),
				h = o("./src/reddit/models/Vote/index.ts"),
				R = o("./src/reddit/selectors/comments.ts"),
				y = o("./src/reddit/selectors/commentSelector.ts"),
				w = o("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				I = o("./src/reddit/selectors/moderatingComments.ts"),
				C = o("./src/reddit/selectors/moderatorPermissions.ts"),
				k = o("./src/reddit/selectors/user.ts"),
				T = o("./src/reddit/actions/comment/constants.ts");
			const S = {},
				_ = Object(d.a)(T.o),
				E = e => async (t, o, {
					apiContext: s
				}) => {
					if (!Object(k.K)(o())) return t(Object(a.k)()), void t(Object(m.k)({
						actionSource: m.a.Save,
						redirectUrl: Object(R.m)(o(), {
							commentId: e
						})
					}));
					const r = o().features.comments.models[e];
					if (!r) return;
					const d = r.isSaved ? O.m : O.i;
					if (t(_({
							[e]: {
								isSaved: !r.isSaved
							}
						})), (await d(s(), e)).ok) {
						const o = r.isSaved ? n.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : n.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							s = n.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(p.f)({
							text: o,
							kind: v.b.Undo,
							buttonText: s,
							buttonAction: E(e)
						}))
					} else t(_({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, D = e => `viewing-comment-${e}`, B = s.a.telemetry.commentConsumedThreshold, N = e => async (t, o) => {
					const n = o();
					if (!Object(y.b)(n, {
							commentId: e
						}) || Math.random() > s.a.telemetry.commentSampleRate) return;
					j.c({
						state: n,
						commentId: e
					}), r.c.start(D(e));
					const d = setTimeout(() => j.a({
						state: n,
						commentId: e
					}), B);
					S[e] = d
				}, P = (e, t) => async (o, s) => {
					const n = s(),
						d = D(e);
					if (Object(y.b)(n, {
							commentId: e
						}) && r.c.has(d)) {
						const o = r.c.end(d);
						!t && o < B && (clearTimeout(S[e]), delete S[e])
					}
				}, L = Object(d.a)(T.x), A = Object(d.a)(T.w), U = Object(d.a)(T.v), z = (e, t) => async (o, s, {
					apiContext: n
				}) => {
					const r = s(),
						d = r.moreComments.models[t],
						a = r.platform.currentPage,
						m = a && a.routeMatch,
						u = m && m.match,
						{
							partialPostId: p
						} = u ? u.params : null;
					if (!p) return;
					const b = Object(x.t)(p);
					o(L({
						moreCommentsId: d.id
					}));
					const j = await Object(O.f)(n(), b, {
						token: d.token
					}, Object(w.a)(r));
					if (j.ok) {
						const t = j.body,
							n = Object(f.a)(t, b, r);
						o(A({
							key: e,
							moreCommentsItem: d,
							shouldCollapse: n,
							...t
						}));
						const a = r.posts.models[b];
						let m;
						a && "subreddit" === a.belongsTo.type && t.comments && (m = a.belongsTo.id, await o(Object(i.a)({
							commentIds: Object.keys(j.body.comments),
							postIds: [a.id],
							skip: ["communityDetails", "subscription"],
							subredditId: m
						})));
						const u = j.body.comments;
						await o(Object(c.b)(m, u)), Object(C.h)(s(), {
							subredditId: a.belongsTo.id
						}) && o(Object(l.a)({
							commentIds: Object.keys(t.comments)
						}))
					} else o(U({
						moreCommentsItem: d,
						...j.error
					}))
				}, F = Object(b.a)(f.b, h.a.upvoted), Q = Object(b.a)(f.b, h.a.downvoted), G = Object(d.a)(T.j), M = Object(d.a)(T.i), K = Object(d.a)(T.e), $ = Object(d.a)(T.f), H = (Object(d.a)(T.c), Object(d.a)(T.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: o
				}) => async (s, n) => {
					const r = n(),
						d = Object(g.i)(e),
						i = Object(R.n)(r, {
							commentLink: d,
							commentsPageKey: t
						}),
						c = Object(I.b)(r, {
							commentId: e,
							commentsPageKey: t
						}),
						a = i.depth;
					s(K({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: c
					})), c || 0 !== a || o(e, !0), Object(u.d)()
				}), V = ({
					commentId: e,
					commentsPageKey: t
				}) => async o => {
					o($({
						commentId: e,
						commentsPageKey: t
					}))
				}, Z = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: o,
					scrollToAndRemeasure: s
				}) => async (n, r) => {
					const d = r(),
						i = Object(f.e)(t, e, o, d),
						c = Object(I.b)(d, {
							commentId: e.id,
							commentsPageKey: t
						});
					n(K({
						commentId: i,
						commentsPageKey: t,
						isCollapsed: c
					})), 0 === o && s(i, !0), Object(u.d)()
				}, q = Object(d.a)(T.r), J = e => t => t(q({
					draftKey: e
				})), X = Object(d.a)(T.a), W = Object(d.a)(T.E), Y = Object(d.a)(T.b), ee = Object(d.a)(T.u)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return h
			})), o.d(t, "c", (function() {
				return R
			})), o.d(t, "f", (function() {
				return y
			})), o.d(t, "a", (function() {
				return w
			})), o.d(t, "e", (function() {
				return I
			})), o.d(t, "g", (function() {
				return C
			})), o.d(t, "h", (function() {
				return k
			})), o.d(t, "b", (function() {
				return T
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				d = o("./src/lib/makeCommentsPageKey/index.ts"),
				i = o("./src/reddit/actions/modal.ts"),
				c = o("./src/reddit/actions/shortcuts/utils.ts"),
				a = o("./src/reddit/actions/toaster.ts"),
				m = o("./src/reddit/constants/modals.ts"),
				l = o("./src/reddit/endpoints/comment/index.tsx"),
				u = o("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = o("./src/reddit/models/Reportable/index.ts"),
				b = o("./src/reddit/models/Toast/index.ts"),
				O = o("./src/reddit/selectors/commentSelector.ts"),
				f = o("./src/reddit/selectors/experiments/d2xGqlDistinguish.ts"),
				j = o("./src/reddit/selectors/user.ts"),
				g = o("./src/reddit/actions/comment/index.ts"),
				x = o("./src/reddit/actions/comment/constants.ts");
			const v = Object(r.a)(x.n),
				h = e => async (t, o, {
					apiContext: s
				}) => {
					o().features.comments.models[e] && (await Object(l.j)(s(), e)).ok && t((e => async t => {
						t(v({
							commentId: e
						}))
					})(e))
				}, R = e => async (t, o, {
					apiContext: s
				}) => {
					if (!Object(j.K)(o())) return void t(Object(i.i)(m.a.LOGIN_MODAL_ID));
					const n = o().features.comments.models[e];
					if (!n) return;
					const r = n.isLocked ? l.l : l.e;
					t(Object(g.i)({
						[e]: {
							isLocked: !n.isLocked
						}
					})), (await r(s(), e)).ok || t(Object(g.i)({
						[e]: {
							isLocked: n.isLocked
						}
					}))
				}, y = Object(r.a)(x.F), w = e => async (t, o, {
					apiContext: s
				}) => {
					const n = o(),
						r = n.features.comments.models[e],
						d = n.user.account ? n.user.account.displayText : null;
					r && d && (t(Object(g.i)({
						[e]: {
							isApproved: !0,
							approvedBy: d,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(l.a)(s(), e)).ok || t(Object(g.i)({
						[e]: {
							isApproved: r.isApproved,
							approvedBy: null,
							bannedBy: r.bannedBy,
							isRemoved: r.isRemoved,
							isSpam: r.isSpam,
							modNote: r.modNote,
							modReasonBy: r.modReasonBy,
							modRemovalReason: r.modRemovalReason,
							numReports: r.numReports || null
						}
					})), Object(c.d)())
				}, I = (e, t) => async (o, s, {
					apiContext: n
				}) => {
					const r = s(),
						d = r.features.comments.models[e],
						i = r.user.account ? r.user.account.displayText : null;
					d && i && (o(Object(g.i)({
						[e]: {
							approvedBy: null,
							bannedBy: i,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(l.h)(n(), e, t)).ok || o(Object(g.i)({
						[e]: {
							approvedBy: d.approvedBy,
							bannedBy: d.bannedBy,
							isApproved: d.isApproved,
							isRemoved: d.isRemoved,
							isSpam: d.isSpam
						}
					})), Object(c.d)())
				}, C = e => async (t, o, {
					apiContext: s
				}) => {
					const n = o().features.comments.models[e];
					if (!n) return;
					const r = n.ignoreReports ? l.k : l.d;
					t(Object(g.i)({
						[e]: {
							ignoreReports: !n.ignoreReports
						}
					})), (await r(s(), e)).ok || t(Object(g.i)({
						[e]: {
							ignoreReports: n.ignoreReports
						}
					}))
				}, k = (e, t, o) => async (r, d, {
					gqlContext: i
				}) => {
					const c = Object(O.b)(d(), {
						commentId: e
					});
					if (!c) return;
					const m = o === n.bc.Snoozed,
						l = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(u.a)(i(), {
							input: l
						})).ok) r(Object(g.i)({
						[e]: {
							userReports: Object(p.a)(c.userReports, t, m)
						}
					}));
					else {
						const e = Object(a.e)(s.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(a.f)(e))
					}
				}, T = (e, t, o) => async (s, r, {
					apiContext: i,
					gqlContext: c
				}) => {
					const a = r(),
						m = a.features.comments.models[e];
					if (!m) return;
					const u = m.postId,
						p = a.postStickiedComments.data[u],
						b = n.g[t];
					let O;
					if (s(Object(g.i)({
							[e]: {
								distinguishType: t,
								isAdmin: t === n.G.ADMIN,
								isMod: t === n.G.MODERATOR,
								isStickied: !!o
							}
						})), o && p && p !== e && s(Object(g.i)({
							[p]: {
								isStickied: !1
							}
						})), Object(f.a)(r())) {
						const s = Object(l.b)(c(), e, t),
							n = Object(l.c)(c(), e, !!o),
							r = [s];
						(o || !o && e === p) && r.push(n), O = {
							ok: (await Promise.all(r)).every(e => e.ok)
						}
					} else O = await Object(l.g)(i(), e, b, o || null);
					O.ok ? o && s(y({
						id: e,
						postId: u,
						commentsPageKey: Object(d.a)(u, null, {
							sort: n.u.CONFIDENCE,
							...a.platform.currentPage.queryParams
						})
					})) : (s(Object(g.i)({
						[e]: {
							distinguishType: m.distinguishType,
							isAdmin: m.isAdmin,
							isMod: m.isMod,
							isStickied: m.isStickied
						}
					})), s(Object(g.i)({
						[p]: {
							isStickied: a.features.comments.models[p].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/modQueueTriggers/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return i
			}));
			var s = o("./src/reddit/actions/comment/index.ts"),
				n = o("./src/reddit/actions/post.ts"),
				r = o("./src/lib/makeGqlRequest/index.ts"),
				d = o("./src/redditGQL/operations/ModQueueTriggers.json");
			const i = ({
				commentIds: e = [],
				postIds: t = []
			}) => async (o, i, {
				gqlContext: c
			}) => {
				var a, m;
				if (!e.length && !t.length) return;
				const l = await ((e, t) => Object(r.a)(e, {
					...d,
					variables: t
				}))(c(), {
					commentIds: e,
					postIds: t
				});
				if (l.ok) {
					const e = l.body;
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
						o(Object(s.i)(t))
					}
					if (e.data.postsInfoByIds) {
						const t = Object.fromEntries(null === (m = e.data.postsInfoByIds) || void 0 === m ? void 0 : m.filter(e => {
							var t;
							return null === (t = null == e ? void 0 : e.moderationInfo) || void 0 === t ? void 0 : t.modQueueTriggers
						}).map(e => {
							var t;
							return [null == e ? void 0 : e.id, {
								modQueueTriggers: null === (t = null == e ? void 0 : e.moderationInfo) || void 0 === t ? void 0 : t.modQueueTriggers
							}]
						}));
						o(Object(n.S)(t))
					}
				}
			}
		},
		"./src/reddit/components/Reports/SnoozableReport/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/Reports/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/Reports/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return L
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/lessComponent.tsx"),
				d = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				c = o("./src/lib/constants/index.ts"),
				a = o("./src/reddit/actions/comment/moderation.ts"),
				m = o("./src/reddit/actions/post.ts"),
				l = o("./src/reddit/actions/tooltip.ts"),
				u = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = o("./src/reddit/components/TrackingHelper/index.tsx"),
				b = o("./src/reddit/controls/Dropdown/index.tsx"),
				O = o("./src/reddit/controls/Dropdown/Row.tsx"),
				f = o("./src/reddit/helpers/isComment.ts"),
				j = o("./src/reddit/helpers/trackers/modTools.ts"),
				g = o("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				x = o("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				v = o("./src/reddit/icons/svgs/Clock/index.tsx"),
				h = o("./src/reddit/icons/svgs/Undo/index.tsx"),
				R = o("./src/reddit/selectors/tooltip.ts"),
				y = o("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				w = o.n(y);
			const {
				fbt: I
			} = o("./node_modules/fbt/lib/FbtPublic.js"), C = (e, t) => `SnoozableReport--${t}--${e}`, k = Object(d.b)(() => Object(i.c)({
				isDropdownOpen: (e, t) => Object(R.b)(C(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(l.h)({
					tooltipId: C(t.reason, t.reportedThingId)
				})),
				toggleSnooze: o => {
					Object(f.a)(t.reportedThingId) ? e(Object(a.h)(t.reportedThingId, t.reason, o)) : e(Object(m.gb)(t.reportedThingId, t.reason, o))
				}
			})), T = Object(u.a)(b.a);
			class S extends n.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? c.bc.None : c.bc.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(j.l)(Object(f.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
						this.props.sendEvent(t)
					}
				}
				render() {
					const {
						reason: e,
						amount: t,
						reportedThingId: o,
						openDropdown: s,
						isDropdownOpen: r,
						isSnoozed: d
					} = this.props, i = C(e, o);
					return n.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, n.a.createElement(O.b, {
						id: i,
						className: w.a.DropdownLabelContainer,
						onClick: s
					}, n.a.createElement("label", {
						htmlFor: i,
						className: w.a.DropdownLabel
					}, d ? "Reporter snoozed" : `${t}: ${e}`, r ? n.a.createElement(x.a, null) : n.a.createElement(g.a, null))), n.a.createElement(T, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, n.a.createElement("button", {
						className: w.a.SnoozeButton,
						onClick: this.onSnoozeButtonClick
					}, n.a.createElement("div", {
						className: w.a.SnoozeButtonContent
					}, d ? n.a.createElement(n.a.Fragment, null, n.a.createElement(h.a, null), I._("Undo snoozing reports from this user", null, {
						hk: "4iqfWB"
					})) : n.a.createElement(n.a.Fragment, null, n.a.createElement(v.a, null), I._("Snooze reports from this user for 7 days", null, {
						hk: "4cRFyG"
					}))))))
				}
			}
			var _ = k(Object(p.c)(S)),
				E = o("./src/reddit/components/Reports/index.m.less"),
				D = o.n(E);
			const {
				fbt: B
			} = o("./node_modules/fbt/lib/FbtPublic.js"), N = r.a.div("ReportText", D.a), P = r.a.div("ReportsTitle", D.a);

			function L(e) {
				const {
					className: t,
					modReports: o,
					userReports: s,
					reportedThingId: r
				} = e;
				return n.a.createElement("div", {
					className: t
				}, o && o.length > 0 && n.a.createElement("div", {
					className: D.a.Reports
				}, n.a.createElement(P, null, B._("Moderator Reports", null, {
					hk: "3hZ0oX"
				})), o.map(([e, t]) => n.a.createElement(N, {
					key: `mod-${t}`
				}, `u/${t}: ${e}`))), s && s.length > 0 && n.a.createElement("div", {
					className: D.a.Reports
				}, n.a.createElement(P, null, B._("User Reports", null, {
					hk: "2KeCLz"
				})), n.a.createElement("div", {
					className: D.a.UserReports
				}, s.map(([e, t, o, s]) => void 0 !== o && s ? n.a.createElement(_, {
					key: `user-${e}`,
					reason: e,
					amount: t,
					reportedThingId: r,
					isSnoozed: o
				}) : n.a.createElement(N, {
					key: `user-${e}`
				}, `${t}: ${e}`)))))
			}
		},
		"./src/reddit/components/ViewReportsDropdown/ReportsList.m.less": function(e, t, o) {
			e.exports = {
				Footer: "_3gYQVpWufsDzXIdO0AVQ3C",
				footer: "_3gYQVpWufsDzXIdO0AVQ3C",
				FooterButton: "N4PQSWJIy71lacAE0bgsp",
				footerButton: "N4PQSWJIy71lacAE0bgsp"
			}
		},
		"./src/reddit/components/ViewReportsDropdown/index.m.less": function(e, t, o) {
			e.exports = {
				StyledDropdown: "_2E7inYp2OX8O0j2rbGsnw8",
				styledDropdown: "_2E7inYp2OX8O0j2rbGsnw8"
			}
		},
		"./src/reddit/components/ViewReportsDropdown/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./node_modules/react-redux/es/index.js"),
				d = o("./node_modules/reselect/es/index.js"),
				i = o("./src/lib/lessComponent.tsx"),
				c = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				a = o("./src/reddit/controls/Dropdown/index.tsx"),
				m = o("./src/reddit/selectors/tooltip.ts"),
				l = o("./node_modules/fbt/lib/FbtPublic.js"),
				u = o("./src/reddit/components/Reports/index.tsx"),
				p = o("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				b = o("./src/reddit/layout/row/Inline/index.tsx"),
				O = o("./src/reddit/components/ViewReportsDropdown/ReportsList.m.less"),
				f = o.n(O);
			const j = i.a.wrapped(b.a, "Footer", f.a),
				g = i.a.wrapped(p.c, "FooterButton", f.a);
			var x = e => n.a.createElement("div", null, n.a.createElement(u.a, {
					modReports: e.modReports,
					userReports: e.userReports,
					reportedThingId: e.reportedThingId
				}), !e.isShowingHistoricalReports && n.a.createElement(j, null, n.a.createElement(g, {
					onClick: e.onIgnoreReports,
					text: e.ignoreReports ? l.fbt._("Restore reports", null, {
						hk: "3wbqh7"
					}) : l.fbt._("Ignore reports", null, {
						hk: "4dr3Qm"
					})
				}))),
				v = o("./src/reddit/components/ViewReportsDropdown/index.m.less"),
				h = o.n(v);
			const R = i.a.wrapped(a.a, "StyledDropdown", h.a),
				y = Object(d.c)({
					isDropdownOpen: (e, {
						tooltipId: t
					}) => Object(m.b)(t)(e)
				}),
				w = Object(r.b)(y),
				I = Object(c.a)(R),
				C = w(e => {
					const t = !(!e.model.numReports || -1 !== e.model.numReports),
						o = t ? e.model.modReportsDismissed || [] : e.model.modReports,
						s = t ? e.model.userReportsDismissed || [] : e.model.userReports;
					return n.a.createElement(I, {
						className: e.className,
						isOpen: e.isDropdownOpen,
						tooltipId: e.tooltipId
					}, n.a.createElement(x, {
						ignoreReports: e.model.ignoreReports,
						modReports: o,
						onIgnoreReports: e.onIgnoreReports,
						isShowingHistoricalReports: t,
						userReports: s,
						reportedThingId: e.model.id
					}))
				});
			t.default = C
		},
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "i", (function() {
				return f
			})), o.d(t, "m", (function() {
				return j
			})), o.d(t, "e", (function() {
				return g
			})), o.d(t, "l", (function() {
				return x
			})), o.d(t, "a", (function() {
				return v
			})), o.d(t, "h", (function() {
				return h
			})), o.d(t, "d", (function() {
				return R
			})), o.d(t, "k", (function() {
				return y
			})), o.d(t, "j", (function() {
				return w
			})), o.d(t, "f", (function() {
				return I
			})), o.d(t, "g", (function() {
				return C
			})), o.d(t, "b", (function() {
				return T
			})), o.d(t, "c", (function() {
				return S
			}));
			var s = o("./src/config.ts"),
				n = o("./src/redditGQL/operations/UpdateCommentDistinguishState.json"),
				r = o("./src/redditGQL/operations/UpdateCommentStickyState.json"),
				d = o("./src/redditGQL/types.ts"),
				i = o("./src/lib/constants/index.ts"),
				c = o("./src/lib/makeApiRequest/index.ts"),
				a = o("./src/lib/makeGqlRequest/index.ts"),
				m = o("./src/lib/omitHeaders/index.ts"),
				l = o("./src/reddit/constants/headers.ts"),
				u = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = o("./src/reddit/models/Comment/addProfileImgParam.ts"),
				b = o("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				O = o("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const f = (e, t) => Object(c.a)(Object(m.a)(e, [l.a]), {
					endpoint: Object(u.a)(`${e.apiUrl}/api/save`),
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				j = (e, t) => Object(c.a)(Object(m.a)(e, [l.a]), {
					endpoint: Object(u.a)(`${e.apiUrl}/api/unsave`),
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				g = (e, t) => Object(c.a)(Object(m.a)(e, [l.a]), {
					endpoint: Object(u.a)(`${e.apiUrl}/api/lock`),
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				x = (e, t) => Object(c.a)(Object(m.a)(e, [l.a]), {
					endpoint: Object(u.a)(`${e.apiUrl}/api/unlock`),
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				v = (e, t) => Object(c.a)(Object(m.a)(e, [l.a]), {
					endpoint: Object(u.a)(`${e.apiUrl}/api/approve`),
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t, o) => Object(c.a)(Object(m.a)(e, [l.a]), {
					endpoint: Object(u.a)(`${e.apiUrl}/api/remove`),
					method: i.jb.POST,
					data: {
						id: t,
						spam: o
					}
				}),
				R = (e, t) => Object(c.a)(Object(m.a)(e, [l.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				y = (e, t) => Object(c.a)(Object(m.a)(e, [l.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				w = (e, t) => Object(c.a)(Object(m.a)(e, [l.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				I = (e, t, o, n) => {
					let r = Object(u.a)(Object(O.a)(Object(b.a)(`${s.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return n && (r = Object(p.a)(r)), Object(c.a)(e, {
						data: o,
						endpoint: r,
						method: i.jb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				C = (e, t, o, s) => Object(c.a)(Object(m.a)(e, [l.a]), {
					endpoint: Object(u.a)(`${e.apiUrl}/api/distinguish/${o}`),
					method: i.jb.POST,
					data: {
						id: t,
						sticky: s
					}
				}),
				k = {
					[i.G.NONE]: d.d.None,
					[i.G.MODERATOR]: d.d.ModDistinguished,
					[i.G.ADMIN]: d.d.AdminDistinguished,
					[i.G.ALUMNI_ADMIN]: d.d.AlumniDistinguished
				};

			function T(e, t, o) {
				const s = function(e, t) {
					return {
						input: {
							commentId: e,
							distinguishState: t === i.G.NONE ? d.b.None : d.b.Distinguished,
							distinguishType: k[t]
						}
					}
				}(t, o);
				return Object(a.a)(e, {
					...n,
					variables: s
				})
			}

			function S(e, t, o) {
				return Object(a.a)(e, {
					...r,
					variables: {
						input: {
							commentId: t,
							sticky: o
						}
					}
				})
			}
		},
		"./src/reddit/helpers/trackers/comment.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return r
			})), o.d(t, "a", (function() {
				return d
			})), o.d(t, "b", (function() {
				return i
			}));
			var s = o("./src/telemetry/index.ts"),
				n = o("./src/reddit/selectors/telemetry.ts");
			const r = ({
					state: e,
					commentId: t
				}) => Object(s.a)({
					source: "comment",
					action: "view",
					noun: "comment",
					...n.o(e),
					profile: n.R(e),
					post: n.I(e, t),
					media: n.B(e, t),
					subreddit: n.hb(e),
					comment: n.j(e, t)
				}),
				d = ({
					state: e,
					commentId: t
				}) => Object(s.a)({
					source: "comment",
					action: "consume",
					noun: "comment",
					...n.o(e),
					profile: n.R(e),
					post: n.I(e, t),
					media: n.B(e, t),
					subreddit: n.hb(e),
					comment: n.j(e, t)
				}),
				i = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: n.ob(t),
					subreddit: n.hb(t),
					post: n.I(t, e),
					actionInfo: n.d(t),
					app: n.h(t),
					referrer: n.X(t),
					session: n.cb(t)
				})
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);
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
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);
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
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, o) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				d = o("./src/reddit/icons/svgs/Clock/index.m.less"),
				i = o.n(d);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(i.a.clock, e.className),
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
		"./src/reddit/icons/svgs/Undo/index.m.less": function(e, t, o) {
			e.exports = {
				undo: "_2sBykNOXv7XBQtHHHAB1JB"
			}
		},
		"./src/reddit/icons/svgs/Undo/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				d = o("./src/reddit/icons/svgs/Undo/index.m.less"),
				i = o.n(d);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(i.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/selectors/moderatingComments.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return s
			})), o.d(t, "a", (function() {
				return n
			}));
			const s = (e, {
					commentId: t,
					commentsPageKey: o
				}) => {
					if (!t) return !1;
					if (e.features.comments.collapsed[o] && t in e.features.comments.collapsed[o]) return !!e.features.comments.collapsed[o][t];
					const s = e.features.comments.models[t];
					return !!s && ("computedCollapsed" in s ? !!s.computedCollapsed : s.collapsedBecauseCrowdControl ? !e.modModeEnabled : s.collapsed)
				},
				n = (e, {
					commentId: t
				}) => {
					if (!t) return !1;
					const o = e.features.comments.models[t];
					return !(!o || !o.collapsedBecauseCrowdControl) && e.modModeEnabled
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ViewReportsDropdown-index.5f7cae406db63971e44a.js.map