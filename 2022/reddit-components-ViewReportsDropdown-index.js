// https://www.redditstatic.com/desktop2x/reddit-components-ViewReportsDropdown-index.c3549e816e1fe9154aae.js
// Retrieved at 1/24/2022, 11:20:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ViewReportsDropdown-index"], {
		"./src/reddit/actions/comment/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return S
			})), n.d(t, "m", (function() {
				return P
			})), n.d(t, "e", (function() {
				return D
			})), n.d(t, "h", (function() {
				return B
			})), n.d(t, "l", (function() {
				return G
			})), n.d(t, "q", (function() {
				return z
			})), n.d(t, "j", (function() {
				return U
			})), n.d(t, "g", (function() {
				return F
			})), n.d(t, "f", (function() {
				return M
			})), n.d(t, "o", (function() {
				return V
			})), n.d(t, "p", (function() {
				return $
			})), n.d(t, "d", (function() {
				return J
			})), n.d(t, "a", (function() {
				return Z
			})), n.d(t, "b", (function() {
				return X
			})), n.d(t, "n", (function() {
				return Y
			})), n.d(t, "c", (function() {
				return W
			})), n.d(t, "k", (function() {
				return ee
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/telemetry/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/economics/helpers/async.ts"),
				i = n("./src/reddit/actions/economics/powerups/flairs/async.ts"),
				a = n("./src/reddit/actions/login.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/modQueueTriggers/index.ts"),
				l = n("./src/reddit/actions/shortcuts/utils.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/actions/vote.ts"),
				f = n("./src/reddit/endpoints/comment/index.tsx"),
				O = n("./src/reddit/helpers/commentList/index.ts"),
				j = n("./src/reddit/helpers/trackers/comment.ts"),
				h = n("./src/reddit/models/Comment/index.ts"),
				g = n("./src/reddit/models/Post/index.ts"),
				y = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/models/Vote/index.ts"),
				x = n("./src/reddit/selectors/comments.ts"),
				k = n("./src/reddit/selectors/commentSelector.ts"),
				I = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				C = n("./src/reddit/selectors/moderatingComments.ts"),
				w = n("./src/reddit/selectors/moderatorPermissions.ts"),
				T = n("./src/reddit/selectors/user.ts"),
				R = n("./src/reddit/actions/comment/constants.ts");
			const _ = {},
				S = Object(c.a)(R.o),
				P = e => async (t, n, {
					apiContext: o
				}) => {
					if (!Object(T.J)(n())) return t(Object(a.j)()), void t(Object(m.k)({
						actionSource: m.a.Save,
						redirectUrl: Object(x.m)(n(), {
							commentId: e
						})
					}));
					const r = n().features.comments.models[e];
					if (!r) return;
					const c = r.isSaved ? f.m : f.i;
					if (t(S({
							[e]: {
								isSaved: !r.isSaved
							}
						})), (await c(o(), e)).ok) {
						const n = r.isSaved ? s.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : s.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							o = s.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(p.f)({
							text: n,
							kind: y.b.Undo,
							buttonText: o,
							buttonAction: P(e)
						}))
					} else t(S({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, E = e => `viewing-comment-${e}`, L = o.a.telemetry.commentConsumedThreshold, D = e => async (t, n) => {
					const s = n();
					if (!Object(k.b)(s, {
							commentId: e
						}) || Math.random() > o.a.telemetry.commentSampleRate) return;
					j.c({
						state: s,
						commentId: e
					}), r.c.start(E(e));
					const c = setTimeout(() => j.a({
						state: s,
						commentId: e
					}), L);
					_[e] = c
				}, B = (e, t) => async (n, o) => {
					const s = o(),
						c = E(e);
					if (Object(k.b)(s, {
							commentId: e
						}) && r.c.has(c)) {
						const n = r.c.end(c);
						!t && n < L && (clearTimeout(_[e]), delete _[e])
					}
				}, K = Object(c.a)(R.x), N = Object(c.a)(R.w), A = Object(c.a)(R.v), G = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const r = o(),
						c = r.moreComments.models[t],
						a = r.platform.currentPage,
						m = a && a.routeMatch,
						l = m && m.match,
						{
							partialPostId: p
						} = l ? l.params : null;
					if (!p) return;
					const b = Object(g.t)(p);
					n(K({
						moreCommentsId: c.id
					}));
					const j = await Object(f.f)(s(), b, {
						token: c.token
					}, Object(I.a)(r));
					if (j.ok) {
						const t = j.body,
							s = Object(O.a)(t, b, r);
						n(N({
							key: e,
							moreCommentsItem: c,
							shouldCollapse: s,
							...t
						}));
						const a = r.posts.models[b];
						let m;
						a && "subreddit" === a.belongsTo.type && t.comments && (m = a.belongsTo.id, await n(Object(d.a)({
							commentIds: Object.keys(j.body.comments),
							postIds: [a.id],
							skip: ["communityDetails", "subscription"],
							subredditId: m
						})));
						const l = j.body.comments;
						await n(Object(i.b)(m, l)), Object(w.h)(o(), {
							subredditId: a.belongsTo.id
						}) && n(Object(u.a)({
							commentIds: Object.keys(t.comments)
						}))
					} else n(A({
						moreCommentsItem: c,
						...j.error
					}))
				}, z = Object(b.a)(O.b, v.a.upvoted), U = Object(b.a)(O.b, v.a.downvoted), F = Object(c.a)(R.j), M = Object(c.a)(R.i), Q = Object(c.a)(R.e), H = Object(c.a)(R.f), V = (Object(c.a)(R.c), Object(c.a)(R.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: n
				}) => async (o, s) => {
					const r = s(),
						c = Object(h.i)(e),
						d = Object(x.n)(r, {
							commentLink: c,
							commentsPageKey: t
						}),
						i = Object(C.b)(r, {
							commentId: e,
							commentsPageKey: t
						}),
						a = d.depth;
					o(Q({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: i
					})), i || 0 !== a || n(e, !0), Object(l.d)()
				}), $ = ({
					commentId: e,
					commentsPageKey: t
				}) => async n => {
					n(H({
						commentId: e,
						commentsPageKey: t
					}))
				}, J = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: n,
					scrollToAndRemeasure: o
				}) => async (s, r) => {
					const c = r(),
						d = Object(O.e)(t, e, n, c),
						i = Object(C.b)(c, {
							commentId: e.id,
							commentsPageKey: t
						});
					s(Q({
						commentId: d,
						commentsPageKey: t,
						isCollapsed: i
					})), 0 === n && o(d, !0), Object(l.d)()
				}, q = Object(c.a)(R.r), Z = e => t => t(q({
					draftKey: e
				})), X = Object(c.a)(R.a), Y = Object(c.a)(R.E), W = Object(c.a)(R.b), ee = Object(c.a)(R.u)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return v
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "f", (function() {
				return k
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "h", (function() {
				return T
			})), n.d(t, "b", (function() {
				return R
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/makeCommentsPageKey/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/shortcuts/utils.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/endpoints/comment/index.tsx"),
				l = n("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = n("./src/reddit/models/Reportable/index.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/selectors/commentSelector.ts"),
				O = n("./src/reddit/selectors/experiments/d2xGqlDistinguish.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/actions/comment/index.ts"),
				g = n("./src/reddit/actions/comment/constants.ts");
			const y = Object(r.a)(g.n),
				v = e => async (t, n, {
					apiContext: o
				}) => {
					n().features.comments.models[e] && (await Object(u.j)(o(), e)).ok && t((e => async t => {
						t(y({
							commentId: e
						}))
					})(e))
				}, x = e => async (t, n, {
					apiContext: s
				}) => {
					if (!Object(j.J)(n())) return void t(Object(d.i)(m.a.LOGIN_MODAL_ID));
					const r = n().features.comments.models[e];
					if (!r) return;
					const c = r.isLocked ? u.l : u.e;
					t(Object(h.i)({
						[e]: {
							isLocked: !r.isLocked
						}
					})), (await c(s(), e)).ok ? t(Object(a.f)({
						kind: b.b.SuccessMod,
						text: r.isLocked ? o.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : o.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(h.i)({
						[e]: {
							isLocked: r.isLocked
						}
					}))
				}, k = Object(r.a)(g.F), I = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n(),
						c = r.features.comments.models[e],
						d = r.user.account ? r.user.account.displayText : null;
					c && d && (t(Object(h.i)({
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
					})), (await Object(u.a)(s(), e)).ok ? t(Object(a.f)({
						kind: b.b.SuccessMod,
						text: o.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(h.i)({
						[e]: {
							isApproved: c.isApproved,
							approvedBy: null,
							bannedBy: c.bannedBy,
							isRemoved: c.isRemoved,
							isSpam: c.isSpam,
							modNote: c.modNote,
							modReasonBy: c.modReasonBy,
							modRemovalReason: c.modRemovalReason,
							numReports: c.numReports || null
						}
					})), Object(i.d)())
				}, C = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const c = s(),
						d = c.features.comments.models[e],
						m = c.user.account ? c.user.account.displayText : null;
					d && m && (n(Object(h.i)({
						[e]: {
							approvedBy: null,
							bannedBy: m,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(u.h)(r(), e, t)).ok ? n(Object(a.f)({
						kind: b.b.SuccessMod,
						text: t ? o.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : o.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : n(Object(h.i)({
						[e]: {
							approvedBy: d.approvedBy,
							bannedBy: d.bannedBy,
							isApproved: d.isApproved,
							isRemoved: d.isRemoved,
							isSpam: d.isSpam
						}
					})), Object(i.d)())
				}, w = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n().features.comments.models[e];
					if (!r) return;
					const c = r.ignoreReports ? u.k : u.d;
					t(Object(h.i)({
						[e]: {
							ignoreReports: !r.ignoreReports
						}
					})), (await c(s(), e)).ok ? t(Object(a.f)({
						kind: b.b.SuccessMod,
						text: r.ignoreReports ? o.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : o.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(h.i)({
						[e]: {
							ignoreReports: r.ignoreReports
						}
					}))
				}, T = (e, t, n) => async (r, c, {
					gqlContext: d
				}) => {
					const i = Object(f.b)(c(), {
						commentId: e
					});
					if (!i) return;
					const m = n === s.cc.Snoozed,
						u = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(l.a)(d(), {
							input: u
						})).ok) r(Object(h.i)({
						[e]: {
							userReports: Object(p.a)(i.userReports, t, m)
						}
					}));
					else {
						const e = Object(a.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(a.f)(e))
					}
				}, R = (e, t, n) => async (o, r, {
					apiContext: d,
					gqlContext: i
				}) => {
					const a = r(),
						m = a.features.comments.models[e];
					if (!m) return;
					const l = m.postId,
						p = a.postStickiedComments.data[l],
						b = s.g[t];
					let f;
					if (o(Object(h.i)({
							[e]: {
								distinguishType: t,
								isAdmin: t === s.G.ADMIN,
								isMod: t === s.G.MODERATOR,
								isStickied: !!n
							}
						})), n && p && p !== e && o(Object(h.i)({
							[p]: {
								isStickied: !1
							}
						})), Object(O.a)(r())) {
						const o = Object(u.b)(i(), e, t),
							s = Object(u.c)(i(), e, !!n),
							r = [o];
						(n || !n && e === p) && r.push(s), f = {
							ok: (await Promise.all(r)).every(e => e.ok)
						}
					} else f = await Object(u.g)(d(), e, b, n || null);
					f.ok ? n && o(k({
						id: e,
						postId: l,
						commentsPageKey: Object(c.a)(l, null, {
							sort: s.u.CONFIDENCE,
							...a.platform.currentPage.queryParams
						})
					})) : (o(Object(h.i)({
						[e]: {
							distinguishType: m.distinguishType,
							isAdmin: m.isAdmin,
							isMod: m.isMod,
							isStickied: m.isStickied
						}
					})), o(Object(h.i)({
						[p]: {
							isStickied: a.features.comments.models[p].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/modQueueTriggers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("./src/reddit/actions/comment/index.ts"),
				s = n("./src/reddit/actions/post.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/ModQueueTriggers.json");
			const d = ({
				commentIds: e = [],
				postIds: t = []
			}) => async (n, d, {
				gqlContext: i
			}) => {
				var a, m;
				if (!e.length && !t.length) return;
				const u = await ((e, t) => Object(r.a)(e, {
					...c,
					variables: t
				}))(i(), {
					commentIds: e,
					postIds: t
				});
				if (u.ok) {
					const e = u.body;
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
						n(Object(o.i)(t))
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
						n(Object(s.S)(t))
					}
				}
			}
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/reddit/constants/elementIds.ts"),
				d = n("./src/reddit/contexts/InsideOverlay.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function a(e, t) {
				const n = Object(r.a)(e, t);
				class o extends s.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(c.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return s.a.createElement(n, i({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(d.b)(o)
			}
		},
		"./src/reddit/components/Reports/SnoozableReport/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Reports/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Reports/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return K
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/lessComponent.tsx"),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/actions/comment/moderation.ts"),
				m = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/controls/Dropdown/index.tsx"),
				f = n("./src/reddit/controls/Dropdown/Row.tsx"),
				O = n("./src/reddit/helpers/isComment.ts"),
				j = n("./src/reddit/helpers/trackers/modTools.ts"),
				h = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				g = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				y = n("./src/reddit/icons/svgs/Clock/index.tsx"),
				v = n("./src/reddit/icons/svgs/Undo/index.tsx"),
				x = n("./src/reddit/selectors/tooltip.ts"),
				k = n("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				I = n.n(k);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), w = (e, t) => `SnoozableReport--${t}--${e}`, T = Object(c.b)(() => Object(d.c)({
				isDropdownOpen: (e, t) => Object(x.b)(w(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(u.h)({
					tooltipId: w(t.reason, t.reportedThingId)
				})),
				toggleSnooze: n => {
					Object(O.a)(t.reportedThingId) ? e(Object(a.h)(t.reportedThingId, t.reason, n)) : e(Object(m.gb)(t.reportedThingId, t.reason, n))
				}
			})), R = Object(l.a)(b.a);
			class _ extends s.a.Component {
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
						reportedThingId: n,
						openDropdown: o,
						isDropdownOpen: r,
						isSnoozed: c
					} = this.props, d = w(e, n);
					return s.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, s.a.createElement(f.b, {
						id: d,
						className: I.a.DropdownLabelContainer,
						onClick: o
					}, s.a.createElement("label", {
						htmlFor: d,
						className: I.a.DropdownLabel
					}, c ? "Reporter snoozed" : `${t}: ${e}`, r ? s.a.createElement(g.a, null) : s.a.createElement(h.a, null))), s.a.createElement(R, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, s.a.createElement("button", {
						className: I.a.SnoozeButton,
						onClick: this.onSnoozeButtonClick
					}, s.a.createElement("div", {
						className: I.a.SnoozeButtonContent
					}, c ? s.a.createElement(s.a.Fragment, null, s.a.createElement(v.a, null), C._("Undo snoozing reports from this user", null, {
						hk: "4iqfWB"
					})) : s.a.createElement(s.a.Fragment, null, s.a.createElement(y.a, null), C._("Snooze reports from this user for 7 days", null, {
						hk: "4cRFyG"
					}))))))
				}
			}
			var S = T(Object(p.c)(_)),
				P = n("./src/reddit/components/Reports/index.m.less"),
				E = n.n(P);
			const {
				fbt: L
			} = n("./node_modules/fbt/lib/FbtPublic.js"), D = r.a.div("ReportText", E.a), B = r.a.div("ReportsTitle", E.a);

			function K(e) {
				const {
					className: t,
					modReports: n,
					userReports: o,
					reportedThingId: r
				} = e;
				return s.a.createElement("div", {
					className: t
				}, n && n.length > 0 && s.a.createElement("div", {
					className: E.a.Reports
				}, s.a.createElement(B, null, L._("Moderator Reports", null, {
					hk: "3hZ0oX"
				})), n.map(([e, t]) => s.a.createElement(D, {
					key: `mod-${t}`
				}, `u/${t}: ${e}`))), o && o.length > 0 && s.a.createElement("div", {
					className: E.a.Reports
				}, s.a.createElement(B, null, L._("User Reports", null, {
					hk: "2KeCLz"
				})), s.a.createElement("div", {
					className: E.a.UserReports
				}, o.map(([e, t, n, o]) => void 0 !== n && o ? s.a.createElement(S, {
					key: `user-${e}`,
					reason: e,
					amount: t,
					reportedThingId: r,
					isSnoozed: n
				}) : s.a.createElement(D, {
					key: `user-${e}`
				}, `${t}: ${e}`)))))
			}
		},
		"./src/reddit/components/ViewReportsDropdown/ReportsList.m.less": function(e, t, n) {
			e.exports = {
				Footer: "_3gYQVpWufsDzXIdO0AVQ3C",
				footer: "_3gYQVpWufsDzXIdO0AVQ3C",
				FooterButton: "N4PQSWJIy71lacAE0bgsp",
				footerButton: "N4PQSWJIy71lacAE0bgsp"
			}
		},
		"./src/reddit/components/ViewReportsDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				StyledDropdown: "_2E7inYp2OX8O0j2rbGsnw8",
				styledDropdown: "_2E7inYp2OX8O0j2rbGsnw8"
			}
		},
		"./src/reddit/components/ViewReportsDropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				a = n("./src/reddit/controls/Dropdown/index.tsx"),
				m = n("./src/reddit/selectors/tooltip.ts"),
				u = n("./node_modules/fbt/lib/FbtPublic.js"),
				l = n("./src/reddit/components/Reports/index.tsx"),
				p = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				b = n("./src/reddit/layout/row/Inline/index.tsx"),
				f = n("./src/reddit/components/ViewReportsDropdown/ReportsList.m.less"),
				O = n.n(f);
			const j = d.a.wrapped(b.a, "Footer", O.a),
				h = d.a.wrapped(p.c, "FooterButton", O.a);
			var g = e => s.a.createElement("div", null, s.a.createElement(l.a, {
					modReports: e.modReports,
					userReports: e.userReports,
					reportedThingId: e.reportedThingId
				}), !e.isShowingHistoricalReports && s.a.createElement(j, null, s.a.createElement(h, {
					onClick: e.onIgnoreReports,
					text: e.ignoreReports ? u.fbt._("Restore reports", null, {
						hk: "3wbqh7"
					}) : u.fbt._("Ignore reports", null, {
						hk: "4dr3Qm"
					})
				}))),
				y = n("./src/reddit/components/ViewReportsDropdown/index.m.less"),
				v = n.n(y);
			const x = d.a.wrapped(a.a, "StyledDropdown", v.a),
				k = Object(c.c)({
					isDropdownOpen: (e, {
						tooltipId: t
					}) => Object(m.b)(t)(e)
				}),
				I = Object(r.b)(k),
				C = Object(i.a)(x),
				w = I(e => {
					const t = !(!e.model.numReports || -1 !== e.model.numReports),
						n = t ? e.model.modReportsDismissed || [] : e.model.modReports,
						o = t ? e.model.userReportsDismissed || [] : e.model.userReports;
					return s.a.createElement(C, {
						className: e.className,
						isOpen: e.isDropdownOpen,
						tooltipId: e.tooltipId
					}, s.a.createElement(g, {
						ignoreReports: e.model.ignoreReports,
						modReports: n,
						onIgnoreReports: e.onIgnoreReports,
						isShowingHistoricalReports: t,
						userReports: o,
						reportedThingId: e.model.id
					}))
				});
			t.default = w
		},
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return O
			})), n.d(t, "m", (function() {
				return j
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "l", (function() {
				return g
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "k", (function() {
				return k
			})), n.d(t, "j", (function() {
				return I
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "b", (function() {
				return R
			})), n.d(t, "c", (function() {
				return _
			}));
			var o = n("./src/config.ts"),
				s = n("./src/redditGQL/operations/UpdateCommentDistinguishState.json"),
				r = n("./src/redditGQL/operations/UpdateCommentStickyState.json"),
				c = n("./src/redditGQL/types.ts"),
				d = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				m = n("./src/lib/omitHeaders/index.ts"),
				u = n("./src/reddit/constants/headers.ts"),
				l = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				b = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				f = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const O = (e, t) => Object(i.a)(Object(m.a)(e, [u.a]), {
					endpoint: Object(l.a)(`${e.apiUrl}/api/save`),
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				j = (e, t) => Object(i.a)(Object(m.a)(e, [u.a]), {
					endpoint: Object(l.a)(`${e.apiUrl}/api/unsave`),
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(i.a)(Object(m.a)(e, [u.a]), {
					endpoint: Object(l.a)(`${e.apiUrl}/api/lock`),
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				g = (e, t) => Object(i.a)(Object(m.a)(e, [u.a]), {
					endpoint: Object(l.a)(`${e.apiUrl}/api/unlock`),
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				y = (e, t) => Object(i.a)(Object(m.a)(e, [u.a]), {
					endpoint: Object(l.a)(`${e.apiUrl}/api/approve`),
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				v = (e, t, n) => Object(i.a)(Object(m.a)(e, [u.a]), {
					endpoint: Object(l.a)(`${e.apiUrl}/api/remove`),
					method: d.jb.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				x = (e, t) => Object(i.a)(Object(m.a)(e, [u.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				k = (e, t) => Object(i.a)(Object(m.a)(e, [u.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				I = (e, t) => Object(i.a)(Object(m.a)(e, [u.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				C = (e, t, n, s) => {
					let r = Object(l.a)(Object(f.a)(Object(b.a)(`${o.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return s && (r = Object(p.a)(r)), Object(i.a)(e, {
						data: n,
						endpoint: r,
						method: d.jb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				w = (e, t, n, o) => Object(i.a)(Object(m.a)(e, [u.a]), {
					endpoint: Object(l.a)(`${e.apiUrl}/api/distinguish/${n}`),
					method: d.jb.POST,
					data: {
						id: t,
						sticky: o
					}
				}),
				T = {
					[d.G.NONE]: c.e.None,
					[d.G.MODERATOR]: c.e.ModDistinguished,
					[d.G.ADMIN]: c.e.AdminDistinguished,
					[d.G.ALUMNI_ADMIN]: c.e.AlumniDistinguished
				};

			function R(e, t, n) {
				const o = function(e, t) {
					return {
						input: {
							commentId: e,
							distinguishState: t === d.G.NONE ? c.b.None : c.b.Distinguished,
							distinguishType: T[t]
						}
					}
				}(t, n);
				return Object(a.a)(e, {
					...s,
					variables: o
				})
			}

			function _(e, t, n) {
				return Object(a.a)(e, {
					...r,
					variables: {
						input: {
							commentId: t,
							sticky: n
						}
					}
				})
			}
		},
		"./src/reddit/helpers/commentList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "a", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/constants/comments.ts"),
				s = n("./src/reddit/selectors/comments.ts"),
				r = n("./src/reddit/constants/experiments.ts"),
				c = n("./src/reddit/helpers/chooseVariant/index.ts");
			const d = (e, t) => t().features.comments.models[e],
				i = e => {
					switch (e.commentLink.type) {
						case o.a.Comment:
							return e.commentsDict[e.commentLink.id];
						case o.a.MoreComments:
							return e.moreCommentsDict[e.commentLink.id];
						case o.a.ContinueThread:
							return e.continueThreadDict[e.commentLink.id]
					}
				},
				a = (e, t) => e.type === o.a.MoreComments ? t[e.id].numComments : 1,
				m = (e, t, n, o) => {
					let r = Object(s.n)(o, {
							commentLink: t,
							commentsPageKey: e
						}),
						c = t;
					for (; r && r.depth > n && r.prev && (c = r.prev, (r = Object(s.n)(o, {
							commentLink: c,
							commentsPageKey: e
						})) && !(r.depth <= n)););
					return c.id
				},
				u = (e, t, n) => {
					const {
						commentLists: o,
						comments: s
					} = e, {
						head: d
					} = o[t];
					if (d) return Object.keys(s).filter(e => {
						const t = s[e];
						return !(!t.isStickied || !((e, t) => {
							const n = Object(c.c)(e, {
								experimentEligibilitySelector: c.a,
								experimentName: r.J,
								expEventOverride: t
							});
							return !!(Object(r.mf)(n) ? void 0 : n)
						})(n)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/trackers/comment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var o = n("./src/telemetry/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const r = ({
					state: e,
					commentId: t
				}) => Object(o.a)({
					source: "comment",
					action: "view",
					noun: "comment",
					...s.m(e),
					profile: s.P(e),
					post: s.G(e, t),
					media: s.z(e, t),
					subreddit: s.hb(e),
					comment: s.h(e, t)
				}),
				c = ({
					state: e,
					commentId: t
				}) => Object(o.a)({
					source: "comment",
					action: "consume",
					noun: "comment",
					...s.m(e),
					profile: s.P(e),
					post: s.G(e, t),
					media: s.z(e, t),
					subreddit: s.hb(e),
					comment: s.h(e, t)
				}),
				d = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: s.ob(t),
					subreddit: s.hb(t),
					post: s.G(t, e),
					actionInfo: s.c(t),
					app: s.f(t),
					referrer: s.V(t),
					session: s.cb(t)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return c
			})), n.d(t, "j", (function() {
				return d
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "l", (function() {
				return j
			}));
			var o = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: Object(s.Y)(e),
					profile: Object(s.P)(e),
					subreddit: Object(s.hb)(e),
					userSubreddit: Object(s.qb)(e)
				}),
				c = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...r(t)
				}),
				d = (e, t) => n => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(s.G)(n, t),
					...r(n)
				}),
				i = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(s.G)(n, t),
					comment: Object(s.h)(n, t),
					...r(n)
				}),
				a = (e, t) => n => ({
					source: "comment",
					action: o.c.UNDO,
					noun: e,
					post: Object(s.G)(n, t),
					comment: Object(s.h)(n, t),
					...r(n)
				}),
				m = (e, t) => n => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(s.G)(n, t),
					comment: Object(s.h)(n, t),
					...r(n)
				}),
				u = (e, t) => n => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(s.G)(n, t),
					comment: Object(s.h)(n, t),
					...r(n)
				}),
				l = (e, t) => n => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(s.G)(n, t),
					comment: Object(s.h)(n, t),
					...r(n)
				}),
				p = (e, t) => n => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(s.h)(n, t),
					post: Object(s.G)(n, t),
					...r(n)
				}),
				b = (e, t) => n => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(s.G)(n, t),
					...r(n)
				}),
				f = (e, t) => n => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(s.G)(n, t),
					subreddit: Object(s.kb)(n, t)
				}),
				O = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(s.h)(n, t),
					post: Object(s.G)(n, t),
					subreddit: Object(s.kb)(n, t)
				}),
				j = (e, t, n, o) => r => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(s.G)(r, n),
					subreddit: Object(s.kb)(r, n),
					actionInfo: {
						reason: o
					},
					...e && {
						comment: Object(s.h)(r, n)
					}
				})
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, n) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/svgs/Clock/index.m.less"),
				d = n.n(c);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(d.a.clock, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Undo/index.m.less": function(e, t, n) {
			e.exports = {
				undo: "_2sBykNOXv7XBQtHHHAB1JB"
			}
		},
		"./src/reddit/icons/svgs/Undo/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/svgs/Undo/index.m.less"),
				d = n.n(c);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(d.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/Inline/index.m.less"),
				r = n.n(s);
			t.a = o.a.div("inlineRow", r.a)
		},
		"./src/reddit/reducers/pages/comments/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/ads/constants.ts");
			const r = [];
			var c = (e = r, t) => {
					switch (t.type) {
						case s.o:
							return t.payload;
						case s.p:
						default:
							return e
					}
				},
				d = n("./src/reddit/actions/pages/constants.ts");
			const i = {};
			var a = (e = i, t) => {
				switch (t.type) {
					case d.d:
					case d.b:
					case d.h:
					case d.f: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case d.a:
					case d.e: {
						const {
							key: n,
							error: o
						} = t.payload;
						return {
							...e,
							[n]: o || {}
						}
					}
					default:
						return e
				}
			};
			const m = {};
			var u = (e = m, t) => {
				switch (t.type) {
					case d.c:
					case d.g: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					case d.i: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: !1
						}
					}
					default:
						return e
				}
			};
			const l = {};
			var p = (e = l, t) => {
					switch (t.type) {
						case d.d:
						case d.h:
						case d.i: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case d.b:
						case d.a:
						case d.f:
						case d.e: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				b = Object(o.c)({
					error: a,
					fullyLoaded: u,
					pending: p
				}),
				f = n("./src/reddit/actions/comment/constants.ts");
			const O = [];
			var j = (e = O, t) => {
					switch (t.type) {
						case f.E:
							return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
						case f.b:
							return [...e.filter(e => e.expiresAt > Date.now())];
						case f.u:
							return [...t.payload.comments];
						default:
							return e
					}
				},
				h = n("./node_modules/lodash/uniqBy.js"),
				g = n.n(h),
				y = n("./node_modules/lodash/values.js"),
				v = n.n(y),
				x = n("./src/reddit/actions/comment/websocket/constants.ts");
			const k = {};

			function I(e) {
				return g()(e, "id").sort((e, t) => e.created - t.created)
			}
			var C = (e = k, t) => {
					switch (t.type) {
						case d.f:
						case f.w:
						case d.b: {
							const {
								comments: n,
								key: o
							} = t.payload, s = e[o] ? e[o] : [], r = function(e, t) {
								return v()(e).map(e => {
									const n = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
									return {
										id: e.id,
										created: n,
										stickied: e.isStickied,
										authorId: e.authorId
									}
								})
							}(n, s.find(e => e.stickied)), c = I([...s, ...r]);
							return {
								...e,
								[o]: [...c]
							}
						}
						case x.b:
						case x.c:
						case x.d:
						case f.J:
						case f.I: {
							const {
								comment: {
									id: n,
									created: o,
									isStickied: s,
									authorId: r
								},
								commentsPageKey: c
							} = t.payload;
							return {
								...e,
								[c]: [...I([...e[c] ? e[c] : [], {
									id: n,
									created: o,
									stickied: s,
									authorId: r
								}])]
							}
						}
						default:
							return e
					}
				},
				w = n("./node_modules/lodash/mapValues.js"),
				T = n.n(w),
				R = n("./src/reddit/helpers/commentList/index.ts"),
				_ = n("./src/reddit/models/Comment/index.ts");
			const S = {};

			function P(e) {
				const t = e;
				return T()(t, ({
					depth: e,
					next: t,
					prev: n
				}) => ({
					depth: e,
					next: t,
					prev: n
				}))
			}
			var E = (e = S, t) => {
				switch (t.type) {
					case f.w: {
						const {
							comments: n,
							commentLists: o,
							continueThreads: s,
							key: r,
							moreCommentsItem: c,
							moreComments: d
						} = t.payload, i = o[c.postId], a = e[r], m = {}, u = a[c.id];
						if (u && u.prev) {
							const {
								id: e
							} = u.prev;
							m[e] = {
								...a[e],
								next: i.head || u.next
							}
						}
						if (u && u.next) {
							const {
								id: e
							} = u.next;
							m[e] = {
								...a[e],
								prev: i.tail || u.prev
							}
						}
						if (i.head && i.tail) {
							const e = Object(R.c)({
									commentLink: i.head,
									commentsDict: n,
									moreCommentsDict: d,
									continueThreadDict: s
								}),
								t = Object(R.c)({
									commentLink: i.tail,
									commentsDict: n,
									moreCommentsDict: d,
									continueThreadDict: s
								});
							u && (e.prev = u.prev, t.next = u.next)
						}
						return {
							...e,
							[r]: {
								...e[r],
								...P(n),
								...P(s),
								...P(d),
								...m
							}
						}
					}
					case d.b:
					case d.f: {
						const {
							comments: n,
							continueThreads: o,
							key: s,
							moreComments: r
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								...P(n),
								...P(o),
								...P(r)
							}
						}
					}
					case x.b:
					case f.J: {
						const {
							comment: n,
							commentsPageKey: o,
							headCommentId: s
						} = t.payload, r = e[o], c = {};
						let d = null;
						return s && (c[s] = {
							...r[s],
							prev: Object(_.i)(n.id)
						}, d = Object(_.i)(s)), {
							...e,
							[o]: {
								...e[o],
								...c,
								[n.id]: {
									depth: 0,
									next: d,
									prev: null
								}
							}
						}
					}
					case f.I: {
						const {
							comment: n,
							commentsPageKey: o,
							parentCommentId: s,
							depth: r
						} = t.payload, c = e[o], d = {};
						let i = null;
						if (!c[s]) return e;
						const a = c[s].next;
						return a && (d[a.id] = {
							...c[a.id],
							prev: Object(_.i)(n.id)
						}, i = a), d[s] = {
							...c[s],
							next: Object(_.i)(n.id)
						}, {
							...e,
							[o]: {
								...e[o],
								...d,
								[n.id]: {
									depth: r,
									next: i,
									prev: Object(_.i)(s)
								}
							}
						}
					}
					default:
						return e
				}
			};
			const L = {};
			var D = (e = L, t) => {
				switch (t.type) {
					case x.b:
					case x.c:
					case f.J: {
						const {
							comment: n,
							commentsPageKey: o
						} = t.payload;
						return {
							...e,
							[o]: n.id
						}
					}
					case d.b:
					case d.f: {
						const {
							commentLists: n,
							key: o,
							postId: s
						} = t.payload;
						return {
							...e,
							[o]: n[s] && n[s].head ? n[s].head.id : null
						}
					}
					case d.i: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					default:
						return e
				}
			};
			const B = {};
			var K = (e = B, t) => {
				switch (t.type) {
					case d.d:
					case d.b:
					case d.c:
					case d.h: {
						const {
							key: n,
							postId: o
						} = t.payload;
						return {
							...e,
							[n]: o
						}
					}
					case f.J: {
						const {
							parentId: n,
							commentsPageKey: o
						} = t.payload;
						return e[o] ? e : {
							...e,
							[o]: n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(o.c)({
				api: b,
				followed: j,
				keyToChatCommentLinks: C,
				keyToCommentThreadLinkSets: E,
				keyToHeadCommentId: D,
				keyToPostId: K,
				ads: c
			})
		},
		"./src/reddit/selectors/comments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "u", (function() {
				return j
			})), n.d(t, "w", (function() {
				return h
			})), n.d(t, "x", (function() {
				return g
			})), n.d(t, "k", (function() {
				return v
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "H", (function() {
				return k
			})), n.d(t, "n", (function() {
				return I
			})), n.d(t, "o", (function() {
				return C
			})), n.d(t, "j", (function() {
				return w
			})), n.d(t, "l", (function() {
				return T
			})), n.d(t, "h", (function() {
				return R
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "b", (function() {
				return S
			})), n.d(t, "q", (function() {
				return P
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "t", (function() {
				return L
			})), n.d(t, "z", (function() {
				return D
			})), n.d(t, "J", (function() {
				return B
			})), n.d(t, "s", (function() {
				return K
			})), n.d(t, "D", (function() {
				return N
			})), n.d(t, "E", (function() {
				return A
			})), n.d(t, "F", (function() {
				return G
			})), n.d(t, "r", (function() {
				return z
			})), n.d(t, "e", (function() {
				return U
			})), n.d(t, "v", (function() {
				return F
			})), n.d(t, "K", (function() {
				return M
			})), n.d(t, "f", (function() {
				return Q
			})), n.d(t, "i", (function() {
				return H
			})), n.d(t, "G", (function() {
				return V
			})), n.d(t, "C", (function() {
				return $
			})), n.d(t, "I", (function() {
				return J
			})), n.d(t, "p", (function() {
				return q
			})), n.d(t, "L", (function() {
				return Z
			})), n.d(t, "y", (function() {
				return X
			})), n.d(t, "A", (function() {
				return Y
			})), n.d(t, "B", (function() {
				return W
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/values.js"),
				s = n.n(o),
				r = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/constants/comments.ts"),
				i = n("./src/reddit/models/Comment/index.ts"),
				a = n("./src/reddit/models/Post/index.ts"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/commentSelector.ts"),
				l = n("./src/lib/initializeClient/installReducer.ts"),
				p = n("./src/reddit/reducers/features/comments/index.ts"),
				b = n("./src/reddit/reducers/pages/comments/index.ts");
			Object(l.a)({
				features: {
					comments: p.a
				},
				pages: {
					comments: b.a
				}
			});
			const f = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.error[t],
				O = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.pending[t],
				j = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.fullyLoaded[t],
				h = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				g = (e, t) => {
					const n = h(e, t);
					if (n) return Object(u.b)(e, {
						commentId: n
					})
				},
				y = [],
				v = Object(c.a)((e, t) => {
					const n = g(e, t),
						o = n && n.id;
					if (!o) return y;
					const {
						commentsPageKey: s
					} = t, r = e.pages.comments.keyToCommentThreadLinkSets[s], c = [];
					let i = {
						id: o,
						type: d.a.Comment
					};
					do {
						c.push(i), i = r[i.id].next
					} while (i);
					return c
				}),
				x = (e, t) => h(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				k = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					return n ? e.posts.models[n] : null
				},
				I = (e, {
					commentId: t,
					commentLink: n,
					commentsPageKey: o
				}) => {
					const s = e.pages.comments.keyToCommentThreadLinkSets[o];
					return s ? n ? s[n.id] : t ? s[t] : null : null
				},
				C = (e, {
					commentsPageKey: t
				}) => e.pages.comments.keyToCommentThreadLinkSets[t],
				w = (e, t) => {
					const n = t.commentsPageKey ? I(e, t) : null;
					return n ? n.depth : null
				},
				T = (e, {
					commentLink: t
				}) => {
					const {
						id: n,
						type: o
					} = t;
					switch (o) {
						case d.a.Comment:
							return e.features.comments.models[n];
						case d.a.MoreComments:
							return e.moreComments.models[n];
						case d.a.ContinueThread:
							return e.continueThreads.models[n];
						default:
							return null
					}
				},
				R = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, n = Object(a.t)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === n && e.features.comments.models[t].author !== r.E).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				_ = (e, {
					commentsPageKey: t
				}) => e.features.comments.collapsed[t],
				S = e => e.moreComments.models,
				P = e => e.features.comments.models,
				E = (e, {
					commentId: t
				}) => {
					const n = Object(u.b)(e, {
						commentId: t
					});
					return n ? Object(u.a)(e, n) : ""
				},
				L = (e, {
					commentId: t
				}) => !!(t && e.features.comments.focused && e.features.comments.focused[t]),
				D = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.isEditing[n] && e.features.comments.isEditing[n][t]),
				B = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.replyFormOpen[n] && e.features.comments.replyFormOpen[n][t]),
				K = (e, {
					commentsPageKey: t
				}) => {
					const n = t && e.features.comments.replyFormOpen[t] || {},
						o = Object.keys(n).find(e => n[e]),
						s = Object(u.b)(e, {
							commentId: o
						}),
						r = s && w(e, {
							commentId: s.id,
							commentLink: void 0,
							commentsPageKey: t
						});
					if (s && "number" == typeof r) return {
						...s,
						depth: r
					}
				},
				N = (e, {
					moreCommentsId: t
				}) => e.moreComments.models[t],
				A = (e, {
					moreCommentsId: t
				}) => !!e.moreComments.api.pending[t],
				G = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					if (n) {
						const t = s()(e.moreComments.models).find(t => t.postId === n && 0 === t.depth && !(void 0 !== e.moreComments.api.pending[t.id]));
						if (t) return {
							moreCommentId: t.id,
							pending: !!e.moreComments.api.pending[t.id]
						}
					}
					return null
				},
				z = (e, {
					id: t
				}) => e.continueThreads.models[t],
				U = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.models[t] : void 0;
					if (!n) return null;
					const o = e.authorFlair.models[n.subredditId];
					return o ? o[n.author] : null
				},
				F = (e, {
					draftKey: t
				}) => !!e.features.comments.submit.error[t],
				M = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.submit.error[t];
					return n && n.fields ? n.fields.map(e => e.msg) : []
				},
				Q = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.drafts[t];
					return !!n && n.autofocusDisabled
				},
				H = (e, {
					draftKey: t
				}) => e.features.comments.drafts[t],
				V = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.submit.error[t] : void 0;
					return n && n.fields ? n.fields.map(e => e.msg) : void 0
				},
				$ = (e, {
					commentId: t
				}) => !!t && e.features.comments.submit.pending[t],
				J = (e, {
					commentId: t
				}) => !!t && e.features.comments.models[t].sendReplies,
				q = e => e.features.comments.visitHighlightFilter,
				Z = (e, t) => {
					const n = Object(u.b)(e, t);
					if (n) return Object(m.W)(e, n)
				},
				X = (e, {
					commentId: t
				}) => {
					var n, o;
					return !!((null === (o = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === o ? void 0 : o.followed) || []).find(e => e.id === t)
				},
				Y = (e, {
					commentId: t
				}) => {
					var n, o;
					const s = ((null === (o = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === o ? void 0 : o.followed) || []).find(e => e.id === t);
					return !!(s && s.expiresAt < Date.now())
				},
				W = (e, {
					commentId: t
				}) => {
					let n = Object(u.b)(e, {
						commentId: t
					});
					for (; n && n.parentId;) {
						if (Object(i.g)(n)) return !0;
						if ((n = Object(u.b)(e, {
								commentId: n.parentId
							})) && Object(i.g)(n)) return !0
					}
					return !1
				}
		},
		"./src/reddit/selectors/moderatingComments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			}));
			const o = (e, {
					commentId: t,
					commentsPageKey: n
				}) => {
					if (!t) return !1;
					if (e.features.comments.collapsed[n] && t in e.features.comments.collapsed[n]) return !!e.features.comments.collapsed[n][t];
					const o = e.features.comments.models[t];
					return !!o && ("computedCollapsed" in o ? !!o.computedCollapsed : o.collapsedBecauseCrowdControl ? !e.modModeEnabled : o.collapsed)
				},
				s = (e, {
					commentId: t
				}) => {
					if (!t) return !1;
					const n = e.features.comments.models[t];
					return !(!n || !n.collapsedBecauseCrowdControl) && e.modModeEnabled
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ViewReportsDropdown-index.c3549e816e1fe9154aae.js.map