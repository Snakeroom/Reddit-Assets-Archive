// https://www.redditstatic.com/desktop2x/reddit-components-ViewReportsDropdown-index.6fd6d8048946e5a7368d.js
// Retrieved at 2/2/2022, 2:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ViewReportsDropdown-index"], {
		"./src/reddit/actions/comment/moderation.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return v
			})), o.d(t, "c", (function() {
				return R
			})), o.d(t, "f", (function() {
				return _
			})), o.d(t, "a", (function() {
				return w
			})), o.d(t, "e", (function() {
				return k
			})), o.d(t, "g", (function() {
				return C
			})), o.d(t, "h", (function() {
				return y
			})), o.d(t, "b", (function() {
				return E
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				i = o("./src/lib/makeCommentsPageKey/index.ts"),
				c = o("./src/reddit/actions/modal.ts"),
				d = o("./src/reddit/actions/shortcuts/utils.ts"),
				a = o("./src/reddit/actions/toaster.ts"),
				l = o("./src/reddit/constants/modals.ts"),
				m = o("./src/reddit/endpoints/comment/index.tsx"),
				p = o("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				u = o("./src/reddit/models/Reportable/index.ts"),
				b = o("./src/reddit/models/Toast/index.ts"),
				x = o("./src/reddit/selectors/commentSelector.ts"),
				O = o("./src/reddit/selectors/experiments/d2xGqlDistinguish.ts"),
				f = o("./src/reddit/selectors/user.ts"),
				h = o("./src/reddit/actions/comment/index.ts"),
				g = o("./src/reddit/actions/comment/constants.ts");
			const j = Object(r.a)(g.n),
				v = e => async (t, o, {
					apiContext: n
				}) => {
					o().features.comments.models[e] && (await Object(m.j)(n(), e)).ok && t((e => async t => {
						t(j({
							commentId: e
						}))
					})(e))
				}, R = e => async (t, o, {
					apiContext: s
				}) => {
					if (!Object(f.J)(o())) return void t(Object(c.i)(l.a.LOGIN_MODAL_ID));
					const r = o().features.comments.models[e];
					if (!r) return;
					const i = r.isLocked ? m.l : m.e;
					t(Object(h.i)({
						[e]: {
							isLocked: !r.isLocked
						}
					})), (await i(s(), e)).ok ? t(Object(a.f)({
						kind: b.b.SuccessMod,
						text: r.isLocked ? n.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : n.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(h.i)({
						[e]: {
							isLocked: r.isLocked
						}
					}))
				}, _ = Object(r.a)(g.F), w = e => async (t, o, {
					apiContext: s
				}) => {
					const r = o(),
						i = r.features.comments.models[e],
						c = r.user.account ? r.user.account.displayText : null;
					i && c && (t(Object(h.i)({
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
					})), (await Object(m.a)(s(), e)).ok ? t(Object(a.f)({
						kind: b.b.SuccessMod,
						text: n.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(h.i)({
						[e]: {
							isApproved: i.isApproved,
							approvedBy: null,
							bannedBy: i.bannedBy,
							isRemoved: i.isRemoved,
							isSpam: i.isSpam,
							modNote: i.modNote,
							modReasonBy: i.modReasonBy,
							modRemovalReason: i.modRemovalReason,
							numReports: i.numReports || null
						}
					})), Object(d.d)())
				}, k = (e, t) => async (o, s, {
					apiContext: r
				}) => {
					const i = s(),
						c = i.features.comments.models[e],
						l = i.user.account ? i.user.account.displayText : null;
					c && l && (o(Object(h.i)({
						[e]: {
							approvedBy: null,
							bannedBy: l,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.h)(r(), e, t)).ok ? o(Object(a.f)({
						kind: b.b.SuccessMod,
						text: t ? n.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : n.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : o(Object(h.i)({
						[e]: {
							approvedBy: c.approvedBy,
							bannedBy: c.bannedBy,
							isApproved: c.isApproved,
							isRemoved: c.isRemoved,
							isSpam: c.isSpam
						}
					})), Object(d.d)())
				}, C = e => async (t, o, {
					apiContext: s
				}) => {
					const r = o().features.comments.models[e];
					if (!r) return;
					const i = r.ignoreReports ? m.k : m.d;
					t(Object(h.i)({
						[e]: {
							ignoreReports: !r.ignoreReports
						}
					})), (await i(s(), e)).ok ? t(Object(a.f)({
						kind: b.b.SuccessMod,
						text: r.ignoreReports ? n.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : n.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(h.i)({
						[e]: {
							ignoreReports: r.ignoreReports
						}
					}))
				}, y = (e, t, o) => async (r, i, {
					gqlContext: c
				}) => {
					const d = Object(x.b)(i(), {
						commentId: e
					});
					if (!d) return;
					const l = o === s.cc.Snoozed,
						m = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(p.a)(c(), {
							input: m
						})).ok) r(Object(h.i)({
						[e]: {
							userReports: Object(u.a)(d.userReports, t, l)
						}
					}));
					else {
						const e = Object(a.e)(n.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(a.f)(e))
					}
				}, E = (e, t, o) => async (n, r, {
					apiContext: c,
					gqlContext: d
				}) => {
					const a = r(),
						l = a.features.comments.models[e];
					if (!l) return;
					const p = l.postId,
						u = a.postStickiedComments.data[p],
						b = s.g[t];
					let x;
					if (n(Object(h.i)({
							[e]: {
								distinguishType: t,
								isAdmin: t === s.G.ADMIN,
								isMod: t === s.G.MODERATOR,
								isStickied: !!o
							}
						})), o && u && u !== e && n(Object(h.i)({
							[u]: {
								isStickied: !1
							}
						})), Object(O.a)(r())) {
						const n = Object(m.b)(d(), e, t),
							s = Object(m.c)(d(), e, !!o),
							r = [n];
						(o || !o && e === u) && r.push(s), x = {
							ok: (await Promise.all(r)).every(e => e.ok)
						}
					} else x = await Object(m.g)(c(), e, b, o || null);
					x.ok ? o && n(_({
						id: e,
						postId: p,
						commentsPageKey: Object(i.a)(p, null, {
							sort: s.u.CONFIDENCE,
							...a.platform.currentPage.queryParams
						})
					})) : (n(Object(h.i)({
						[e]: {
							distinguishType: l.distinguishType,
							isAdmin: l.isAdmin,
							isMod: l.isMod,
							isStickied: l.isStickied
						}
					})), n(Object(h.i)({
						[u]: {
							isStickied: a.features.comments.models[u].isStickied
						}
					})))
				}
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/higherOrderComponents/asTooltip.tsx"),
				i = o("./src/reddit/constants/elementIds.ts"),
				c = o("./src/reddit/contexts/InsideOverlay.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}

			function a(e, t) {
				const o = Object(r.a)(e, t);
				class n extends s.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(i.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return s.a.createElement(o, d({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(c.b)(n)
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
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/lessComponent.tsx"),
				i = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/reselect/es/index.js"),
				d = o("./src/lib/constants/index.ts"),
				a = o("./src/reddit/actions/comment/moderation.ts"),
				l = o("./src/reddit/actions/post.ts"),
				m = o("./src/reddit/actions/tooltip.ts"),
				p = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = o("./src/reddit/components/TrackingHelper/index.tsx"),
				b = o("./src/reddit/controls/Dropdown/index.tsx"),
				x = o("./src/reddit/controls/Dropdown/Row.tsx"),
				O = o("./src/reddit/helpers/isComment.ts"),
				f = o("./src/reddit/helpers/trackers/modTools.ts"),
				h = o("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				g = o("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				j = o("./src/reddit/icons/svgs/Clock/index.tsx"),
				v = o("./src/reddit/icons/svgs/Undo/index.tsx"),
				R = o("./src/reddit/selectors/tooltip.ts"),
				_ = o("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				w = o.n(_);
			const {
				fbt: k
			} = o("./node_modules/fbt/lib/FbtPublic.js"), C = (e, t) => `SnoozableReport--${t}--${e}`, y = Object(i.b)(() => Object(c.c)({
				isDropdownOpen: (e, t) => Object(R.b)(C(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(m.h)({
					tooltipId: C(t.reason, t.reportedThingId)
				})),
				toggleSnooze: o => {
					Object(O.a)(t.reportedThingId) ? e(Object(a.h)(t.reportedThingId, t.reason, o)) : e(Object(l.gb)(t.reportedThingId, t.reason, o))
				}
			})), E = Object(p.a)(b.a);
			class S extends s.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? d.cc.None : d.cc.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(f.l)(Object(O.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
						this.props.sendEvent(t)
					}
				}
				render() {
					const {
						reason: e,
						amount: t,
						reportedThingId: o,
						openDropdown: n,
						isDropdownOpen: r,
						isSnoozed: i
					} = this.props, c = C(e, o);
					return s.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, s.a.createElement(x.b, {
						id: c,
						className: w.a.DropdownLabelContainer,
						onClick: n
					}, s.a.createElement("label", {
						htmlFor: c,
						className: w.a.DropdownLabel
					}, i ? "Reporter snoozed" : `${t}: ${e}`, r ? s.a.createElement(g.a, null) : s.a.createElement(h.a, null))), s.a.createElement(E, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, s.a.createElement("button", {
						className: w.a.SnoozeButton,
						onClick: this.onSnoozeButtonClick
					}, s.a.createElement("div", {
						className: w.a.SnoozeButtonContent
					}, i ? s.a.createElement(s.a.Fragment, null, s.a.createElement(v.a, null), k._("Undo snoozing reports from this user", null, {
						hk: "4iqfWB"
					})) : s.a.createElement(s.a.Fragment, null, s.a.createElement(j.a, null), k._("Snooze reports from this user for 7 days", null, {
						hk: "4cRFyG"
					}))))))
				}
			}
			var T = y(Object(u.c)(S)),
				I = o("./src/reddit/components/Reports/index.m.less"),
				D = o.n(I);
			const {
				fbt: B
			} = o("./node_modules/fbt/lib/FbtPublic.js"), z = r.a.div("ReportText", D.a), N = r.a.div("ReportsTitle", D.a);

			function L(e) {
				const {
					className: t,
					modReports: o,
					userReports: n,
					reportedThingId: r
				} = e;
				return s.a.createElement("div", {
					className: t
				}, o && o.length > 0 && s.a.createElement("div", {
					className: D.a.Reports
				}, s.a.createElement(N, null, B._("Moderator Reports", null, {
					hk: "3hZ0oX"
				})), o.map(([e, t]) => s.a.createElement(z, {
					key: `mod-${t}`
				}, `u/${t}: ${e}`))), n && n.length > 0 && s.a.createElement("div", {
					className: D.a.Reports
				}, s.a.createElement(N, null, B._("User Reports", null, {
					hk: "2KeCLz"
				})), s.a.createElement("div", {
					className: D.a.UserReports
				}, n.map(([e, t, o, n]) => void 0 !== o && n ? s.a.createElement(T, {
					key: `user-${e}`,
					reason: e,
					amount: t,
					reportedThingId: r,
					isSnoozed: o
				}) : s.a.createElement(z, {
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
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				c = o("./src/lib/lessComponent.tsx"),
				d = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				a = o("./src/reddit/controls/Dropdown/index.tsx"),
				l = o("./src/reddit/selectors/tooltip.ts"),
				m = o("./node_modules/fbt/lib/FbtPublic.js"),
				p = o("./src/reddit/components/Reports/index.tsx"),
				u = o("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				b = o("./src/reddit/layout/row/Inline/index.tsx"),
				x = o("./src/reddit/components/ViewReportsDropdown/ReportsList.m.less"),
				O = o.n(x);
			const f = c.a.wrapped(b.a, "Footer", O.a),
				h = c.a.wrapped(u.c, "FooterButton", O.a);
			var g = e => s.a.createElement("div", null, s.a.createElement(p.a, {
					modReports: e.modReports,
					userReports: e.userReports,
					reportedThingId: e.reportedThingId
				}), !e.isShowingHistoricalReports && s.a.createElement(f, null, s.a.createElement(h, {
					onClick: e.onIgnoreReports,
					text: e.ignoreReports ? m.fbt._("Restore reports", null, {
						hk: "3wbqh7"
					}) : m.fbt._("Ignore reports", null, {
						hk: "4dr3Qm"
					})
				}))),
				j = o("./src/reddit/components/ViewReportsDropdown/index.m.less"),
				v = o.n(j);
			const R = c.a.wrapped(a.a, "StyledDropdown", v.a),
				_ = Object(i.c)({
					isDropdownOpen: (e, {
						tooltipId: t
					}) => Object(l.b)(t)(e)
				}),
				w = Object(r.b)(_),
				k = Object(d.a)(R),
				C = w(e => {
					const t = !(!e.model.numReports || -1 !== e.model.numReports),
						o = t ? e.model.modReportsDismissed || [] : e.model.modReports,
						n = t ? e.model.userReportsDismissed || [] : e.model.userReports;
					return s.a.createElement(k, {
						className: e.className,
						isOpen: e.isDropdownOpen,
						tooltipId: e.tooltipId
					}, s.a.createElement(g, {
						ignoreReports: e.model.ignoreReports,
						modReports: o,
						onIgnoreReports: e.onIgnoreReports,
						isShowingHistoricalReports: t,
						userReports: n,
						reportedThingId: e.model.id
					}))
				});
			t.default = C
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, o) {
			"use strict";
			o.d(t, "i", (function() {
				return i
			})), o.d(t, "j", (function() {
				return c
			})), o.d(t, "a", (function() {
				return d
			})), o.d(t, "f", (function() {
				return a
			})), o.d(t, "d", (function() {
				return l
			})), o.d(t, "b", (function() {
				return m
			})), o.d(t, "c", (function() {
				return p
			})), o.d(t, "e", (function() {
				return u
			})), o.d(t, "k", (function() {
				return b
			})), o.d(t, "h", (function() {
				return x
			})), o.d(t, "g", (function() {
				return O
			})), o.d(t, "l", (function() {
				return f
			}));
			var n = o("./src/reddit/constants/tracking.ts"),
				s = o("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: Object(s.Y)(e),
					profile: Object(s.P)(e),
					subreddit: Object(s.gb)(e),
					userSubreddit: Object(s.qb)(e)
				}),
				i = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...r(t)
				}),
				c = (e, t) => o => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(s.G)(o, t),
					...r(o)
				}),
				d = (e, t) => o => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(s.G)(o, t),
					comment: Object(s.h)(o, t),
					...r(o)
				}),
				a = (e, t) => o => ({
					source: "comment",
					action: n.c.UNDO,
					noun: e,
					post: Object(s.G)(o, t),
					comment: Object(s.h)(o, t),
					...r(o)
				}),
				l = (e, t) => o => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(s.G)(o, t),
					comment: Object(s.h)(o, t),
					...r(o)
				}),
				m = (e, t) => o => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(s.G)(o, t),
					comment: Object(s.h)(o, t),
					...r(o)
				}),
				p = (e, t) => o => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(s.G)(o, t),
					comment: Object(s.h)(o, t),
					...r(o)
				}),
				u = (e, t) => o => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(s.h)(o, t),
					post: Object(s.G)(o, t),
					...r(o)
				}),
				b = (e, t) => o => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(s.G)(o, t),
					...r(o)
				}),
				x = (e, t) => o => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(s.G)(o, t),
					subreddit: Object(s.jb)(o, t)
				}),
				O = (e, t) => o => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(s.h)(o, t),
					post: Object(s.G)(o, t),
					subreddit: Object(s.jb)(o, t)
				}),
				f = (e, t, o, n) => r => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(s.G)(r, o),
					subreddit: Object(s.jb)(r, o),
					actionInfo: {
						reason: n
					},
					...e && {
						comment: Object(s.h)(r, o)
					}
				})
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
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
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
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
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, o) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/svgs/Clock/index.m.less"),
				c = o.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(c.a.clock, e.className),
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
		"./src/reddit/icons/svgs/Undo/index.m.less": function(e, t, o) {
			e.exports = {
				undo: "_2sBykNOXv7XBQtHHHAB1JB"
			}
		},
		"./src/reddit/icons/svgs/Undo/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/svgs/Undo/index.m.less"),
				c = o.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(c.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, o) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./src/lib/lessComponent.tsx"),
				s = o("./src/reddit/layout/row/Inline/index.m.less"),
				r = o.n(s);
			t.a = n.a.div("inlineRow", r.a)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ViewReportsDropdown-index.6fd6d8048946e5a7368d.js.map