// https://www.redditstatic.com/desktop2x/reddit-components-ViewReportsDropdown-index.05f6e6d09c5f827c687a.js
// Retrieved at 11/17/2021, 12:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ViewReportsDropdown-index"], {
		"./src/reddit/actions/comment/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return I
			})), s.d(t, "m", (function() {
				return T
			})), s.d(t, "e", (function() {
				return D
			})), s.d(t, "h", (function() {
				return N
			})), s.d(t, "l", (function() {
				return L
			})), s.d(t, "q", (function() {
				return U
			})), s.d(t, "j", (function() {
				return z
			})), s.d(t, "g", (function() {
				return F
			})), s.d(t, "f", (function() {
				return K
			})), s.d(t, "o", (function() {
				return $
			})), s.d(t, "p", (function() {
				return H
			})), s.d(t, "d", (function() {
				return Q
			})), s.d(t, "a", (function() {
				return Z
			})), s.d(t, "b", (function() {
				return J
			})), s.d(t, "n", (function() {
				return X
			})), s.d(t, "c", (function() {
				return q
			})), s.d(t, "k", (function() {
				return W
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/config.ts"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/telemetry/index.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/economics/helpers/async.ts"),
				c = s("./src/reddit/actions/economics/powerups/flairs/async.ts"),
				a = s("./src/reddit/actions/login.ts"),
				m = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/shortcuts/utils.ts"),
				p = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/reddit/actions/vote.ts"),
				b = s("./src/reddit/endpoints/comment/index.tsx"),
				O = s("./src/reddit/helpers/commentList/index.ts"),
				f = s("./src/reddit/helpers/trackers/comment.ts"),
				j = s("./src/reddit/models/Comment/index.ts"),
				x = s("./src/reddit/models/Post/index.ts"),
				g = s("./src/reddit/models/Toast/index.ts"),
				h = s("./src/reddit/models/Vote/index.ts"),
				v = s("./src/reddit/selectors/comments.ts"),
				R = s("./src/reddit/selectors/commentSelector.ts"),
				w = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				y = s("./src/reddit/selectors/moderatingComments.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/actions/comment/constants.ts");
			const S = {},
				I = Object(d.a)(k.o),
				T = e => async (t, s, {
					apiContext: o
				}) => {
					if (!Object(C.K)(s())) return t(Object(a.k)()), void t(Object(m.k)({
						actionSource: m.a.Save,
						redirectUrl: Object(v.m)(s(), {
							commentId: e
						})
					}));
					const r = s().features.comments.models[e];
					if (!r) return;
					const d = r.isSaved ? b.m : b.i;
					if (t(I({
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
							kind: g.b.Undo,
							buttonText: o,
							buttonAction: T(e)
						}))
					} else t(I({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, _ = e => `viewing-comment-${e}`, E = o.a.telemetry.commentConsumedThreshold, D = e => async (t, s) => {
					const n = s();
					if (!Object(R.b)(n, {
							commentId: e
						}) || Math.random() > o.a.telemetry.commentSampleRate) return;
					f.c({
						state: n,
						commentId: e
					}), r.c.start(_(e));
					const d = setTimeout(() => f.a({
						state: n,
						commentId: e
					}), E);
					S[e] = d
				}, N = (e, t) => async (s, o) => {
					const n = o(),
						d = _(e);
					if (Object(R.b)(n, {
							commentId: e
						}) && r.c.has(d)) {
						const s = r.c.end(d);
						!t && s < E && (clearTimeout(S[e]), delete S[e])
					}
				}, P = Object(d.a)(k.x), A = Object(d.a)(k.w), B = Object(d.a)(k.v), L = (e, t) => async (s, o, {
					apiContext: n
				}) => {
					const r = o(),
						d = r.moreComments.models[t],
						a = r.platform.currentPage,
						m = a && a.routeMatch,
						l = m && m.match,
						{
							partialPostId: p
						} = l ? l.params : null;
					if (!p) return;
					const u = Object(x.t)(p);
					s(P({
						moreCommentsId: d.id
					}));
					const f = await Object(b.f)(n(), u, {
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
						let a;
						n && "subreddit" === n.belongsTo.type && t.comments && (a = n.belongsTo.id, await s(Object(i.a)({
							commentIds: Object.keys(f.body.comments),
							postIds: [n.id],
							skip: ["communityDetails", "subscription"],
							subredditId: a
						})));
						const m = f.body.comments;
						await s(Object(c.b)(a, m))
					} else s(B({
						moreCommentsItem: d,
						...f.error
					}))
				}, U = Object(u.a)(O.b, h.a.upvoted), z = Object(u.a)(O.b, h.a.downvoted), F = Object(d.a)(k.j), K = Object(d.a)(k.i), G = Object(d.a)(k.e), M = Object(d.a)(k.f), $ = (Object(d.a)(k.c), Object(d.a)(k.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: s
				}) => async (o, n) => {
					const r = n(),
						d = Object(j.i)(e),
						i = Object(v.n)(r, {
							commentLink: d,
							commentsPageKey: t
						}),
						c = Object(y.b)(r, {
							commentId: e,
							commentsPageKey: t
						}),
						a = i.depth;
					o(G({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: c
					})), c || 0 !== a || s(e, !0), Object(l.d)()
				}), H = ({
					commentId: e,
					commentsPageKey: t
				}) => async s => {
					s(M({
						commentId: e,
						commentsPageKey: t
					}))
				}, Q = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: s,
					scrollToAndRemeasure: o
				}) => async (n, r) => {
					const d = r(),
						i = Object(O.e)(t, e, s, d),
						c = Object(y.b)(d, {
							commentId: e.id,
							commentsPageKey: t
						});
					n(G({
						commentId: i,
						commentsPageKey: t,
						isCollapsed: c
					})), 0 === s && o(i, !0), Object(l.d)()
				}, V = Object(d.a)(k.r), Z = e => t => t(V({
					draftKey: e
				})), J = Object(d.a)(k.a), X = Object(d.a)(k.E), q = Object(d.a)(k.b), W = Object(d.a)(k.u)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return v
			})), s.d(t, "c", (function() {
				return R
			})), s.d(t, "f", (function() {
				return w
			})), s.d(t, "a", (function() {
				return y
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "g", (function() {
				return k
			})), s.d(t, "h", (function() {
				return S
			})), s.d(t, "b", (function() {
				return I
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/lib/makeCommentsPageKey/index.ts"),
				i = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/shortcuts/utils.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/constants/modals.ts"),
				l = s("./src/reddit/endpoints/comment/index.tsx"),
				p = s("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				u = s("./src/reddit/models/Reportable/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				O = s("./src/reddit/selectors/commentSelector.ts"),
				f = s("./src/reddit/selectors/experiments/d2xGqlDistinguish.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/actions/comment/index.ts"),
				g = s("./src/reddit/actions/comment/constants.ts");
			const h = Object(r.a)(g.n),
				v = e => async (t, s, {
					apiContext: o
				}) => {
					s().features.comments.models[e] && (await Object(l.j)(o(), e)).ok && t((e => async t => {
						t(h({
							commentId: e
						}))
					})(e))
				}, R = e => async (t, s, {
					apiContext: o
				}) => {
					if (!Object(j.K)(s())) return void t(Object(i.i)(m.a.LOGIN_MODAL_ID));
					const n = s().features.comments.models[e];
					if (!n) return;
					const r = n.isLocked ? l.l : l.e;
					t(Object(x.i)({
						[e]: {
							isLocked: !n.isLocked
						}
					})), (await r(o(), e)).ok || t(Object(x.i)({
						[e]: {
							isLocked: n.isLocked
						}
					}))
				}, w = Object(r.a)(g.F), y = e => async (t, s, {
					apiContext: o
				}) => {
					const n = s(),
						r = n.features.comments.models[e],
						d = n.user.account ? n.user.account.displayText : null;
					r && d && (t(Object(x.i)({
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
					})), (await Object(l.a)(o(), e)).ok || t(Object(x.i)({
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
				}, C = (e, t) => async (s, o, {
					apiContext: n
				}) => {
					const r = o(),
						d = r.features.comments.models[e],
						i = r.user.account ? r.user.account.displayText : null;
					d && i && (s(Object(x.i)({
						[e]: {
							approvedBy: null,
							bannedBy: i,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(l.h)(n(), e, t)).ok || s(Object(x.i)({
						[e]: {
							approvedBy: d.approvedBy,
							bannedBy: d.bannedBy,
							isApproved: d.isApproved,
							isRemoved: d.isRemoved,
							isSpam: d.isSpam
						}
					})), Object(c.d)())
				}, k = e => async (t, s, {
					apiContext: o
				}) => {
					const n = s().features.comments.models[e];
					if (!n) return;
					const r = n.ignoreReports ? l.k : l.d;
					t(Object(x.i)({
						[e]: {
							ignoreReports: !n.ignoreReports
						}
					})), (await r(o(), e)).ok || t(Object(x.i)({
						[e]: {
							ignoreReports: n.ignoreReports
						}
					}))
				}, S = (e, t, s) => async (r, d, {
					gqlContext: i
				}) => {
					const c = Object(O.b)(d(), {
						commentId: e
					});
					if (!c) return;
					const m = s === n.bc.Snoozed,
						l = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(p.a)(i(), {
							input: l
						})).ok) r(Object(x.i)({
						[e]: {
							userReports: Object(u.a)(c.userReports, t, m)
						}
					}));
					else {
						const e = Object(a.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(a.f)(e))
					}
				}, I = (e, t, s) => async (o, r, {
					apiContext: i,
					gqlContext: c
				}) => {
					const a = r(),
						m = a.features.comments.models[e];
					if (!m) return;
					const p = m.postId,
						u = a.postStickiedComments.data[p],
						b = n.g[t];
					let O;
					if (o(Object(x.i)({
							[e]: {
								distinguishType: t,
								isAdmin: t === n.G.ADMIN,
								isMod: t === n.G.MODERATOR,
								isStickied: !!s
							}
						})), s && u && u !== e && o(Object(x.i)({
							[u]: {
								isStickied: !1
							}
						})), Object(f.a)(r())) {
						const o = Object(l.b)(c(), e, t),
							n = Object(l.c)(c(), e, !!s),
							r = [o];
						(s || !s && e === u) && r.push(n), O = {
							ok: (await Promise.all(r)).every(e => e.ok)
						}
					} else O = await Object(l.g)(i(), e, b, s || null);
					O.ok ? s && o(w({
						id: e,
						postId: p,
						commentsPageKey: Object(d.a)(p, null, {
							sort: n.u.CONFIDENCE,
							...a.platform.currentPage.queryParams
						})
					})) : (o(Object(x.i)({
						[e]: {
							distinguishType: m.distinguishType,
							isAdmin: m.isAdmin,
							isMod: m.isMod,
							isStickied: m.isStickied
						}
					})), o(Object(x.i)({
						[u]: {
							isStickied: a.features.comments.models[u].isStickied
						}
					})))
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
				return B
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/lessComponent.tsx"),
				d = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/constants/index.ts"),
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
				g = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				h = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				v = s("./src/reddit/icons/svgs/Undo/index.tsx"),
				R = s("./src/reddit/selectors/tooltip.ts"),
				w = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				y = s.n(w);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = (e, t) => `SnoozableReport--${t}--${e}`, S = Object(d.b)(() => Object(i.c)({
				isDropdownOpen: (e, t) => Object(R.b)(k(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(l.h)({
					tooltipId: k(t.reason, t.reportedThingId)
				})),
				toggleSnooze: s => {
					Object(f.a)(t.reportedThingId) ? e(Object(a.h)(t.reportedThingId, t.reason, s)) : e(Object(m.ab)(t.reportedThingId, t.reason, s))
				}
			})), I = Object(p.a)(b.a);
			class T extends n.a.Component {
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
						reportedThingId: s,
						openDropdown: o,
						isDropdownOpen: r,
						isSnoozed: d
					} = this.props, i = k(e, s);
					return n.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, n.a.createElement(O.b, {
						id: i,
						className: y.a.DropdownLabelContainer,
						onClick: o
					}, n.a.createElement("label", {
						htmlFor: i,
						className: y.a.DropdownLabel
					}, d ? "Reporter snoozed" : `${t}: ${e}`, r ? n.a.createElement(g.a, null) : n.a.createElement(x.a, null))), n.a.createElement(I, {
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
					})) : n.a.createElement(n.a.Fragment, null, n.a.createElement(h.a, null), C._("Snooze reports from this user for 7 days", null, {
						hk: "4cRFyG"
					}))))))
				}
			}
			var _ = S(Object(u.c)(T)),
				E = s("./src/reddit/components/Reports/index.m.less"),
				D = s.n(E);
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js"), P = r.a.div("ReportText", D.a), A = r.a.div("ReportsTitle", D.a);

			function B(e) {
				const {
					className: t,
					modReports: s,
					userReports: o,
					reportedThingId: r
				} = e;
				return n.a.createElement("div", {
					className: t
				}, s && s.length > 0 && n.a.createElement("div", {
					className: D.a.Reports
				}, n.a.createElement(A, null, N._("Moderator Reports", null, {
					hk: "3hZ0oX"
				})), s.map(([e, t]) => n.a.createElement(P, {
					key: `mod-${t}`
				}, `u/${t}: ${e}`))), o && o.length > 0 && n.a.createElement("div", {
					className: D.a.Reports
				}, n.a.createElement(A, null, N._("User Reports", null, {
					hk: "2KeCLz"
				})), n.a.createElement("div", {
					className: D.a.UserReports
				}, o.map(([e, t, s, o]) => void 0 !== s && o ? n.a.createElement(_, {
					key: `user-${e}`,
					reason: e,
					amount: t,
					reportedThingId: r,
					isSnoozed: s
				}) : n.a.createElement(P, {
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
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				a = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/selectors/tooltip.ts"),
				l = s("./node_modules/fbt/lib/FbtPublic.js"),
				p = s("./src/reddit/components/Reports/index.tsx"),
				u = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				b = s("./src/reddit/layout/row/Inline/index.tsx"),
				O = s("./src/reddit/components/ViewReportsDropdown/ReportsList.m.less"),
				f = s.n(O);
			const j = i.a.wrapped(b.a, "Footer", f.a),
				x = i.a.wrapped(u.c, "FooterButton", f.a);
			var g = e => n.a.createElement("div", null, n.a.createElement(p.a, {
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
				h = s("./src/reddit/components/ViewReportsDropdown/index.m.less"),
				v = s.n(h);
			const R = i.a.wrapped(a.a, "StyledDropdown", v.a),
				w = Object(d.c)({
					isDropdownOpen: (e, {
						tooltipId: t
					}) => Object(m.b)(t)(e)
				}),
				y = Object(r.b)(w),
				C = Object(c.a)(R),
				k = y(e => {
					const t = !(!e.model.numReports || -1 !== e.model.numReports),
						s = t ? e.model.modReportsDismissed || [] : e.model.modReports,
						o = t ? e.model.userReportsDismissed || [] : e.model.userReports;
					return n.a.createElement(C, {
						className: e.className,
						isOpen: e.isDropdownOpen,
						tooltipId: e.tooltipId
					}, n.a.createElement(g, {
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
			s.d(t, "i", (function() {
				return f
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
				return w
			})), s.d(t, "j", (function() {
				return y
			})), s.d(t, "f", (function() {
				return C
			})), s.d(t, "g", (function() {
				return k
			})), s.d(t, "b", (function() {
				return I
			})), s.d(t, "c", (function() {
				return T
			}));
			var o = s("./src/config.ts"),
				n = s("./src/redditGQL/operations/UpdateCommentDistinguishState.json"),
				r = s("./src/redditGQL/operations/UpdateCommentStickyState.json"),
				d = s("./src/redditGQL/types.ts"),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeApiRequest/index.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				m = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				p = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = s("./src/reddit/models/Comment/addProfileImgParam.ts"),
				b = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				O = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const f = (e, t) => Object(c.a)(Object(m.a)(e, [l.a]), {
					endpoint: Object(p.a)(`${e.apiUrl}/api/save`),
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				j = (e, t) => Object(c.a)(Object(m.a)(e, [l.a]), {
					endpoint: Object(p.a)(`${e.apiUrl}/api/unsave`),
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				x = (e, t) => Object(c.a)(Object(m.a)(e, [l.a]), {
					endpoint: Object(p.a)(`${e.apiUrl}/api/lock`),
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				g = (e, t) => Object(c.a)(Object(m.a)(e, [l.a]), {
					endpoint: Object(p.a)(`${e.apiUrl}/api/unlock`),
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(c.a)(Object(m.a)(e, [l.a]), {
					endpoint: Object(p.a)(`${e.apiUrl}/api/approve`),
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				v = (e, t, s) => Object(c.a)(Object(m.a)(e, [l.a]), {
					endpoint: Object(p.a)(`${e.apiUrl}/api/remove`),
					method: i.jb.POST,
					data: {
						id: t,
						spam: s
					}
				}),
				R = (e, t) => Object(c.a)(Object(m.a)(e, [l.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				w = (e, t) => Object(c.a)(Object(m.a)(e, [l.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				y = (e, t) => Object(c.a)(Object(m.a)(e, [l.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				C = (e, t, s, n) => {
					let r = Object(p.a)(Object(O.a)(Object(b.a)(`${o.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return n && (r = Object(u.a)(r)), Object(c.a)(e, {
						data: s,
						endpoint: r,
						method: i.jb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				k = (e, t, s, o) => Object(c.a)(Object(m.a)(e, [l.a]), {
					endpoint: Object(p.a)(`${e.apiUrl}/api/distinguish/${s}`),
					method: i.jb.POST,
					data: {
						id: t,
						sticky: o
					}
				}),
				S = {
					[i.G.NONE]: d.d.None,
					[i.G.MODERATOR]: d.d.ModDistinguished,
					[i.G.ADMIN]: d.d.AdminDistinguished,
					[i.G.ALUMNI_ADMIN]: d.d.AlumniDistinguished
				};

			function I(e, t, s) {
				const o = function(e, t) {
					return {
						input: {
							commentId: e,
							distinguishState: t === i.G.NONE ? d.b.None : d.b.Distinguished,
							distinguishType: S[t]
						}
					}
				}(t, s);
				return Object(a.a)(e, {
					...n,
					variables: o
				})
			}

			function T(e, t, s) {
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
				return i
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
				i = e => t => ({
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
				i = s.n(d);
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
				i = s.n(d);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(i.a.undo, e.className),
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
		"./src/redditGQL/operations/UpdateCommentDistinguishState.json": function(e) {
			e.exports = JSON.parse('{"id":"e1f407c8ceba"}')
		},
		"./src/redditGQL/operations/UpdateCommentStickyState.json": function(e) {
			e.exports = JSON.parse('{"id":"236938d65d55"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ViewReportsDropdown-index.05f6e6d09c5f827c687a.js.map