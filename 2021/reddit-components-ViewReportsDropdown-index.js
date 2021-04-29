// https://www.redditstatic.com/desktop2x/reddit-components-ViewReportsDropdown-index.f6d2d88da0e78de138ed.js
// Retrieved at 4/29/2021, 6:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ViewReportsDropdown-index"], {
		"./src/reddit/actions/comment/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return S
			})), s.d(t, "m", (function() {
				return _
			})), s.d(t, "e", (function() {
				return P
			})), s.d(t, "h", (function() {
				return D
			})), s.d(t, "l", (function() {
				return U
			})), s.d(t, "q", (function() {
				return L
			})), s.d(t, "j", (function() {
				return z
			})), s.d(t, "g", (function() {
				return F
			})), s.d(t, "f", (function() {
				return $
			})), s.d(t, "o", (function() {
				return M
			})), s.d(t, "p", (function() {
				return V
			})), s.d(t, "d", (function() {
				return Z
			})), s.d(t, "a", (function() {
				return J
			})), s.d(t, "b", (function() {
				return X
			})), s.d(t, "n", (function() {
				return G
			})), s.d(t, "c", (function() {
				return Y
			})), s.d(t, "k", (function() {
				return q
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/config.ts"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/telemetry/index.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/reddit/actions/economics/helpers/async.ts"),
				i = s("./src/reddit/actions/login.ts"),
				a = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/actions/presence.ts"),
				l = s("./src/reddit/actions/shortcuts/utils.ts"),
				p = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/reddit/actions/vote.ts"),
				b = s("./src/reddit/endpoints/comment/index.tsx"),
				O = s("./src/reddit/helpers/commentList/index.ts"),
				f = s("./src/reddit/helpers/trackers/comment.ts"),
				j = s("./src/reddit/models/Comment/index.ts"),
				x = s("./src/reddit/models/Post/index.ts"),
				h = s("./src/reddit/models/Toast/index.ts"),
				g = s("./src/reddit/models/Vote/index.ts"),
				v = s("./src/reddit/selectors/comments.ts"),
				R = s("./src/reddit/selectors/commentSelector.ts"),
				w = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				y = s("./src/reddit/selectors/moderatingComments.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/actions/comment/constants.ts");
			const I = {},
				S = Object(d.a)(k.o),
				_ = e => async (t, s, {
					apiContext: o
				}) => {
					if (!Object(C.J)(s())) return t(Object(i.j)()), void t(Object(a.k)({
						actionSource: a.a.Save,
						redirectUrl: Object(v.m)(s(), {
							commentId: e
						})
					}));
					const r = s().features.comments.models[e];
					if (!r) return;
					const d = r.isSaved ? b.k : b.g;
					if (t(S({
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
							buttonAction: _(e)
						}))
					} else t(S({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, E = e => `viewing-comment-${e}`, T = o.a.telemetry.commentConsumedThreshold, P = e => async (t, s) => {
					const n = s();
					if (!Object(R.a)(n, {
							commentId: e
						}) || Math.random() > o.a.telemetry.commentSampleRate) return;
					f.c({
						state: n,
						commentId: e
					}), r.c.start(E(e));
					const d = setTimeout(() => f.a({
						state: n,
						commentId: e
					}), T);
					I[e] = d
				}, D = (e, t) => async (s, o) => {
					const n = o(),
						d = E(e);
					if (Object(R.a)(n, {
							commentId: e
						}) && r.c.has(d)) {
						const s = r.c.end(d);
						!t && s < T && (clearTimeout(I[e]), delete I[e])
					}
				}, B = Object(d.a)(k.x), A = Object(d.a)(k.w), N = Object(d.a)(k.v), U = (e, t) => async (s, o, {
					apiContext: n
				}) => {
					const r = o(),
						d = r.moreComments.models[t],
						i = r.platform.currentPage,
						a = i && i.routeMatch,
						l = a && a.match,
						{
							partialPostId: p
						} = l ? l.params : null;
					if (!p) return;
					const u = Object(x.s)(p);
					s(B({
						moreCommentsId: d.id
					}));
					const f = await Object(b.e)(n(), u, {
						token: d.token
					}, Object(w.a)(r));
					if (f.ok) {
						const t = f.body,
							o = Object(O.a)(t, u, r);
						s(A({
							key: e,
							moreCommentsItem: d,
							shouldCollapse: o,
							...t
						}));
						const n = r.posts.models[u];
						let i;
						n && "subreddit" === n.belongsTo.type && t.comments && (i = n.belongsTo.id, await s(Object(c.a)({
							commentIds: Object.keys(f.body.comments),
							postIds: [n.id],
							skip: ["communityDetails", "subscription"],
							subredditId: i
						})));
						const a = f.body.comments,
							l = f.body.posts;
						await s(Object(m.b)(l, a, i))
					} else s(N({
						moreCommentsItem: d,
						...f.error
					}))
				}, L = Object(u.a)(O.b, g.a.upvoted), z = Object(u.a)(O.b, g.a.downvoted), F = Object(d.a)(k.j), $ = Object(d.a)(k.i), K = Object(d.a)(k.e), H = Object(d.a)(k.f), M = (Object(d.a)(k.c), Object(d.a)(k.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: s
				}) => async (o, n) => {
					const r = n(),
						d = Object(j.h)(e),
						c = Object(v.n)(r, {
							commentLink: d,
							commentsPageKey: t
						}),
						i = Object(y.b)(r, {
							commentId: e,
							commentsPageKey: t
						}),
						a = c.depth;
					o(K({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: i
					})), i || 0 !== a || s(e, !0), Object(l.d)()
				}), V = ({
					commentId: e,
					commentsPageKey: t
				}) => async s => {
					s(H({
						commentId: e,
						commentsPageKey: t
					}))
				}, Z = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: s,
					scrollToAndRemeasure: o
				}) => async (n, r) => {
					const d = r(),
						c = Object(O.e)(t, e, s, d),
						i = Object(y.b)(d, {
							commentId: e.id,
							commentsPageKey: t
						});
					n(K({
						commentId: c,
						commentsPageKey: t,
						isCollapsed: i
					})), 0 === s && o(c, !0), Object(l.d)()
				}, Q = Object(d.a)(k.r), J = e => t => t(Q({
					draftKey: e
				})), X = Object(d.a)(k.a), G = Object(d.a)(k.E), Y = Object(d.a)(k.b), q = Object(d.a)(k.u)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return g
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "f", (function() {
				return R
			})), s.d(t, "a", (function() {
				return w
			})), s.d(t, "e", (function() {
				return y
			})), s.d(t, "g", (function() {
				return C
			})), s.d(t, "h", (function() {
				return k
			})), s.d(t, "b", (function() {
				return I
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/lib/makeCommentsPageKey/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				i = s("./src/reddit/actions/shortcuts/utils.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/constants/modals.ts"),
				l = s("./src/reddit/endpoints/comment/index.tsx"),
				p = s("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				u = s("./src/reddit/models/Reportable/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				O = s("./src/reddit/selectors/commentSelector.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/actions/comment/index.ts"),
				x = s("./src/reddit/actions/comment/constants.ts");
			const h = Object(r.a)(x.n),
				g = e => async (t, s, {
					apiContext: o
				}) => {
					s().features.comments.models[e] && (await Object(l.h)(o(), e)).ok && t((e => async t => {
						t(h({
							commentId: e
						}))
					})(e))
				}, v = e => async (t, s, {
					apiContext: o
				}) => {
					if (!Object(f.J)(s())) return void t(Object(c.i)(m.a.LOGIN_MODAL_ID));
					const n = s().features.comments.models[e];
					if (!n) return;
					const r = n.isLocked ? l.j : l.d;
					t(Object(j.i)({
						[e]: {
							isLocked: !n.isLocked
						}
					})), (await r(o(), e)).ok || t(Object(j.i)({
						[e]: {
							isLocked: n.isLocked
						}
					}))
				}, R = Object(r.a)(x.F), w = e => async (t, s, {
					apiContext: o
				}) => {
					const n = s(),
						r = n.features.comments.models[e],
						d = n.user.account ? n.user.account.displayText : null;
					r && d && (t(Object(j.i)({
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
					})), (await Object(l.a)(o(), e)).ok || t(Object(j.i)({
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
					})), Object(i.d)())
				}, y = (e, t) => async (s, o, {
					apiContext: n
				}) => {
					const r = o(),
						d = r.features.comments.models[e],
						c = r.user.account ? r.user.account.displayText : null;
					d && c && (s(Object(j.i)({
						[e]: {
							approvedBy: null,
							bannedBy: c,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(l.f)(n(), e, t)).ok || s(Object(j.i)({
						[e]: {
							approvedBy: d.approvedBy,
							bannedBy: d.bannedBy,
							isApproved: d.isApproved,
							isRemoved: d.isRemoved,
							isSpam: d.isSpam
						}
					})), Object(i.d)())
				}, C = e => async (t, s, {
					apiContext: o
				}) => {
					const n = s().features.comments.models[e];
					if (!n) return;
					const r = n.ignoreReports ? l.i : l.c;
					t(Object(j.i)({
						[e]: {
							ignoreReports: !n.ignoreReports
						}
					})), (await r(o(), e)).ok || t(Object(j.i)({
						[e]: {
							ignoreReports: n.ignoreReports
						}
					}))
				}, k = (e, t, s) => async (r, d, {
					gqlContext: c
				}) => {
					const i = Object(O.a)(d(), {
						commentId: e
					});
					if (!i) return;
					const m = s === n.Ub.Snoozed,
						l = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(p.a)(c(), {
							input: l
						})).ok) r(Object(j.i)({
						[e]: {
							userReports: Object(u.a)(i.userReports, t, m)
						}
					}));
					else {
						const e = Object(a.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(a.f)(e))
					}
				}, I = (e, t, s) => async (o, r, {
					apiContext: c
				}) => {
					const i = r(),
						a = i.features.comments.models[e];
					if (!a) return;
					const m = a.postId,
						p = i.postStickiedComments.data[m],
						u = n.g[t];
					o(Object(j.i)({
						[e]: {
							distinguishType: t,
							isAdmin: t === n.C.ADMIN,
							isMod: t === n.C.MODERATOR,
							isStickied: !!s
						}
					})), s && p && p !== e && o(Object(j.i)({
						[p]: {
							isStickied: !1
						}
					})), (await Object(l.b)(c(), e, u, s || null)).ok ? s && o(R({
						id: e,
						postId: m,
						commentsPageKey: Object(d.a)(m, null, {
							sort: n.r.CONFIDENCE,
							...i.platform.currentPage.queryParams
						})
					})) : (o(Object(j.i)({
						[e]: {
							distinguishType: a.distinguishType,
							isAdmin: a.isAdmin,
							isMod: a.isMod,
							isStickied: a.isStickied
						}
					})), o(Object(j.i)({
						[p]: {
							isStickied: i.features.comments.models[p].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/presence.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return p
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				c = s("./src/reddit/constants/headers.ts"),
				i = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var a = s("./src/reddit/selectors/experiments/presenceIndicator.ts");
			const m = "PRESENCE__PRESENTUSERS_LOADED",
				l = Object(o.a)(m),
				p = (e, t, s) => async (o, m, {
					apiContext: p
				}) => {
					const u = m();
					if (!Object(a.a)(u)) return;
					const b = new Set;
					e && Object.values(e).map(e => {
						e.authorId && b.add(e.authorId)
					}), t && Object.values(t).map(e => {
						e.authorId && b.add(e.authorId)
					});
					const O = await (async (e, t, s) => Object(r.a)(Object(d.a)(e, [c.a]), {
						endpoint: Object(i.a)(`${e.apiUrl}/api/presence`),
						method: n.eb.POST,
						data: {
							user_fullnames: t.join(","),
							subreddit_fullname: s || ""
						}
					}).then(e => {
						if (!e.ok) return {
							presentUsers: []
						};
						const s = e.body.present_user_fullnames || [],
							o = new Set(s),
							n = {};
						return t.forEach(e => {
							n[e] = o.has(e)
						}), {
							presentUsers: n
						}
					}))(p(), Array.from(b), s);
					o(l(O))
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
				return U
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/actions/comment/moderation.ts"),
				m = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				O = s("./src/reddit/controls/Dropdown/Row.tsx"),
				f = s("./src/reddit/helpers/isComment.ts"),
				j = s("./src/reddit/helpers/trackers/modTools.ts"),
				x = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				h = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				g = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				v = s("./src/reddit/icons/svgs/Undo/index.tsx"),
				R = s("./src/reddit/selectors/tooltip.ts"),
				w = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				y = s.n(w);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = (e, t) => `SnoozableReport--${t}--${e}`, I = Object(r.b)(() => Object(c.c)({
				isDropdownOpen: (e, t) => Object(R.b)(k(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(l.h)({
					tooltipId: k(t.reason, t.reportedThingId)
				})),
				toggleSnooze: s => {
					Object(f.a)(t.reportedThingId) ? e(Object(a.h)(t.reportedThingId, t.reason, s)) : e(Object(m.Y)(t.reportedThingId, t.reason, s))
				}
			})), S = Object(p.a)(b.a);
			class _ extends n.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? i.Ub.None : i.Ub.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(j.l)(Object(f.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
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
					} = this.props, c = k(e, s);
					return n.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, n.a.createElement(O.b, {
						id: c,
						className: y.a.DropdownLabelContainer,
						onClick: o
					}, n.a.createElement("label", {
						htmlFor: c,
						className: y.a.DropdownLabel
					}, d ? "Reporter snoozed" : `${t}: ${e}`, r ? n.a.createElement(h.a, null) : n.a.createElement(x.a, null))), n.a.createElement(S, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, n.a.createElement("button", {
						className: y.a.SnoozeButton,
						onClick: this.onSnoozeButtonClick
					}, n.a.createElement("div", {
						className: y.a.SnoozeButtonContent
					}, d ? n.a.createElement(n.a.Fragment, null, n.a.createElement(v.a, null), C._("Undo snoozing reports from this user", null, {
						hk: "4iqfWB"
					})) : n.a.createElement(n.a.Fragment, null, n.a.createElement(g.a, null), C._("Snooze reports from this user for 7 days", null, {
						hk: "4cRFyG"
					}))))))
				}
			}
			var E = I(Object(u.c)(_)),
				T = s("./src/reddit/featureFlags/index.ts"),
				P = s("./src/reddit/components/Reports/index.m.less"),
				D = s.n(P);
			const {
				fbt: B
			} = s("./node_modules/fbt/lib/FbtPublic.js"), A = d.a.div("ReportText", D.a), N = d.a.div("ReportsTitle", D.a);

			function U(e) {
				const {
					className: t,
					modReports: s,
					userReports: o,
					reportedThingId: d
				} = e, c = Object(r.e)(e => T.d.enableSnoozableReport(e));
				return n.a.createElement("div", {
					className: t
				}, s && s.length > 0 && n.a.createElement("div", {
					className: D.a.Reports
				}, n.a.createElement(N, null, B._("Moderator Reports", null, {
					hk: "3hZ0oX"
				})), s.map(([e, t]) => n.a.createElement(A, {
					key: `mod-${t}`
				}, `u/${t}: ${e}`))), o && o.length > 0 && n.a.createElement("div", {
					className: D.a.Reports
				}, n.a.createElement(N, null, B._("User Reports", null, {
					hk: "2KeCLz"
				})), n.a.createElement("div", {
					className: D.a.UserReports
				}, o.map(([e, t, s, o]) => c && void 0 !== s && o ? n.a.createElement(E, {
					key: `user-${e}`,
					reason: e,
					amount: t,
					reportedThingId: d,
					isSnoozed: s
				}) : n.a.createElement(A, {
					key: `user-${e}`
				}, `${t}: ${e}`)))))
			}
		},
		"./src/reddit/components/ViewReportsDropdown/ReportsList.m.less": function(e, t, s) {
			e.exports = {
				Footer: "_3gYQVpWufsDzXIdO0AVQ3C",
				footer: "_3gYQVpWufsDzXIdO0AVQ3C",
				FooterButton: "N4PQSWJIy71lacAE0bgsp",
				footerButton: "N4PQSWJIy71lacAE0bgsp"
			}
		},
		"./src/reddit/components/ViewReportsDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				StyledDropdown: "_2E7inYp2OX8O0j2rbGsnw8",
				styledDropdown: "_2E7inYp2OX8O0j2rbGsnw8"
			}
		},
		"./src/reddit/components/ViewReportsDropdown/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				a = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/selectors/tooltip.ts"),
				l = s("./node_modules/fbt/lib/FbtPublic.js"),
				p = s("./src/reddit/components/Reports/index.tsx"),
				u = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				b = s("./src/reddit/layout/row/Inline/index.tsx"),
				O = s("./src/reddit/components/ViewReportsDropdown/ReportsList.m.less"),
				f = s.n(O);
			const j = c.a.wrapped(b.a, "Footer", f.a),
				x = c.a.wrapped(u.c, "FooterButton", f.a);
			var h = e => n.a.createElement("div", null, n.a.createElement(p.a, {
					modReports: e.modReports,
					userReports: e.userReports,
					reportedThingId: e.reportedThingId
				}), !e.isShowingHistoricalReports && n.a.createElement(j, null, n.a.createElement(x, {
					onClick: e.onIgnoreReports,
					text: e.ignoreReports ? l.fbt._("Restore reports", null, {
						hk: "3wbqh7"
					}) : l.fbt._("Ignore reports", null, {
						hk: "4dr3Qm"
					})
				}))),
				g = s("./src/reddit/components/ViewReportsDropdown/index.m.less"),
				v = s.n(g);
			const R = c.a.wrapped(a.a, "StyledDropdown", v.a),
				w = Object(d.c)({
					isDropdownOpen: (e, {
						tooltipId: t
					}) => Object(m.b)(t)(e)
				}),
				y = Object(r.b)(w),
				C = Object(i.a)(R),
				k = y(e => {
					const t = !(!e.model.numReports || -1 !== e.model.numReports),
						s = t ? e.model.modReportsDismissed || [] : e.model.modReports,
						o = t ? e.model.userReportsDismissed || [] : e.model.userReports;
					return n.a.createElement(C, {
						className: e.className,
						isOpen: e.isDropdownOpen,
						tooltipId: e.tooltipId
					}, n.a.createElement(h, {
						ignoreReports: e.model.ignoreReports,
						modReports: s,
						onIgnoreReports: e.onIgnoreReports,
						isShowingHistoricalReports: t,
						userReports: o,
						reportedThingId: e.model.id
					}))
				});
			t.default = k
		},
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "g", (function() {
				return p
			})), s.d(t, "k", (function() {
				return u
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "j", (function() {
				return O
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "f", (function() {
				return j
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "i", (function() {
				return h
			})), s.d(t, "h", (function() {
				return g
			})), s.d(t, "e", (function() {
				return v
			})), s.d(t, "b", (function() {
				return R
			}));
			var o = s("./src/config.ts"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				c = s("./src/reddit/constants/headers.ts"),
				i = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				a = s("./src/reddit/models/Comment/addProfileImgParam.ts"),
				m = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				l = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const p = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/save`),
					method: n.eb.POST,
					data: {
						id: t
					}
				}),
				u = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/unsave`),
					method: n.eb.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/lock`),
					method: n.eb.POST,
					data: {
						id: t
					}
				}),
				O = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/unlock`),
					method: n.eb.POST,
					data: {
						id: t
					}
				}),
				f = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/approve`),
					method: n.eb.POST,
					data: {
						id: t
					}
				}),
				j = (e, t, s) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/remove`),
					method: n.eb.POST,
					data: {
						id: t,
						spam: s
					}
				}),
				x = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: n.eb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: n.eb.POST,
					data: {
						id: t
					}
				}),
				g = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: n.eb.POST,
					data: {
						id: t
					}
				}),
				v = (e, t, s, d) => {
					let c = Object(l.a)(Object(m.a)(`${o.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`));
					return d && (c = Object(a.a)(c)), Object(r.a)(e, {
						data: s,
						endpoint: c,
						method: n.eb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				R = (e, t, s, o) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/distinguish/${s}`),
					method: n.eb.POST,
					data: {
						id: t,
						sticky: o
					}
				})
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
					...n.defaults(e),
					profile: n.profile(e),
					post: n.post(e, t),
					media: n.media(e, t),
					subreddit: n.subreddit(e),
					comment: n.comment(e, t)
				}),
				d = ({
					state: e,
					commentId: t
				}) => Object(o.a)({
					source: "comment",
					action: "consume",
					noun: "comment",
					...n.defaults(e),
					profile: n.profile(e),
					post: n.post(e, t),
					media: n.media(e, t),
					subreddit: n.subreddit(e),
					comment: n.comment(e, t)
				}),
				c = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: n.user(t),
					subreddit: n.subreddit(t),
					post: n.post(t, e),
					actionInfo: n.actionInfo(t),
					app: n.app(t),
					referrer: n.referrer(t),
					session: n.session(t)
				})
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
		"./src/reddit/selectors/experiments/presenceIndicator.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return d
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: o.Gc
					}) === o.Rc.Enabled
				},
				d = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: o.Fc
					}) === o.Qc.Enabled
				}
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ViewReportsDropdown-index.f6d2d88da0e78de138ed.js.map