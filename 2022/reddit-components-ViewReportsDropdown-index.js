// https://www.redditstatic.com/desktop2x/reddit-components-ViewReportsDropdown-index.788759345a0454bdf618.js
// Retrieved at 4/19/2022, 3:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ViewReportsDropdown-index"], {
		"./src/reddit/actions/comment/moderation.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return O
			})), o.d(t, "c", (function() {
				return w
			})), o.d(t, "f", (function() {
				return j
			})), o.d(t, "a", (function() {
				return k
			})), o.d(t, "e", (function() {
				return _
			})), o.d(t, "g", (function() {
				return C
			})), o.d(t, "h", (function() {
				return E
			})), o.d(t, "b", (function() {
				return S
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				i = o("./src/lib/makeCommentsPageKey/index.ts"),
				d = o("./src/reddit/actions/modal.ts"),
				c = o("./src/reddit/actions/shortcuts/utils.ts"),
				a = o("./src/reddit/actions/toaster.ts"),
				l = o("./src/reddit/constants/modals.ts"),
				p = o("./src/reddit/endpoints/comment/index.tsx"),
				m = o("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				u = o("./src/reddit/models/Reportable/index.ts"),
				b = o("./src/reddit/models/Toast/index.ts"),
				x = o("./src/reddit/selectors/commentSelector.ts"),
				g = o("./src/reddit/selectors/experiments/d2xGqlDistinguish.ts"),
				h = o("./src/reddit/selectors/user.ts"),
				R = o("./src/reddit/actions/comment/index.ts"),
				f = o("./src/reddit/actions/comment/constants.ts");
			const v = Object(r.a)(f.n),
				O = e => async (t, o, s) => {
					let {
						apiContext: n
					} = s;
					o().features.comments.models[e] && (await Object(p.j)(n(), e)).ok && t((e => async t => {
						t(v({
							commentId: e
						}))
					})(e))
				}, w = e => async (t, o, n) => {
					let {
						apiContext: r
					} = n;
					if (!Object(h.R)(o())) return void t(Object(d.i)(l.a.LOGIN_MODAL_ID));
					const i = o().features.comments.models[e];
					if (!i) return;
					const c = i.isLocked ? p.l : p.e;
					t(Object(R.i)({
						[e]: {
							isLocked: !i.isLocked
						}
					})), (await c(r(), e)).ok ? t(Object(a.f)({
						kind: b.b.SuccessMod,
						text: i.isLocked ? s.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : s.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(R.i)({
						[e]: {
							isLocked: i.isLocked
						}
					}))
				}, j = Object(r.a)(f.G), k = e => async (t, o, n) => {
					let {
						apiContext: r
					} = n;
					const i = o(),
						d = i.features.comments.models[e],
						l = i.user.account ? i.user.account.displayText : null;
					d && l && (t(Object(R.i)({
						[e]: {
							isApproved: !0,
							approvedBy: l,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(p.a)(r(), e)).ok ? t(Object(a.f)({
						kind: b.b.SuccessMod,
						text: s.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(R.i)({
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
					})), Object(c.d)())
				}, _ = (e, t) => async (o, n, r) => {
					let {
						apiContext: i
					} = r;
					const d = n(),
						l = d.features.comments.models[e],
						m = d.user.account ? d.user.account.displayText : null;
					l && m && (o(Object(R.i)({
						[e]: {
							approvedBy: null,
							bannedBy: m,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(p.h)(i(), e, t)).ok ? o(Object(a.f)({
						kind: b.b.SuccessMod,
						text: t ? s.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : s.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : o(Object(R.i)({
						[e]: {
							approvedBy: l.approvedBy,
							bannedBy: l.bannedBy,
							isApproved: l.isApproved,
							isRemoved: l.isRemoved,
							isSpam: l.isSpam
						}
					})), Object(c.d)())
				}, C = e => async (t, o, n) => {
					let {
						apiContext: r
					} = n;
					const i = o().features.comments.models[e];
					if (!i) return;
					const d = i.ignoreReports ? p.k : p.d;
					t(Object(R.i)({
						[e]: {
							ignoreReports: !i.ignoreReports
						}
					})), (await d(r(), e)).ok ? t(Object(a.f)({
						kind: b.b.SuccessMod,
						text: i.ignoreReports ? s.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : s.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(R.i)({
						[e]: {
							ignoreReports: i.ignoreReports
						}
					}))
				}, E = (e, t, o) => async (r, i, d) => {
					let {
						gqlContext: c
					} = d;
					const l = Object(x.b)(i(), {
						commentId: e
					});
					if (!l) return;
					const p = o === n.fc.Snoozed,
						g = {
							itemId: e,
							reportText: t,
							isSnoozed: p
						};
					if ((await Object(m.a)(c(), {
							input: g
						})).ok) r(Object(R.i)({
						[e]: {
							userReports: Object(u.a)(l.userReports, t, p)
						}
					}));
					else {
						const e = Object(a.e)(s.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(a.f)(e))
					}
				}, S = (e, t, o) => async (s, r, d) => {
					let {
						apiContext: c,
						gqlContext: a
					} = d;
					const l = r(),
						m = l.features.comments.models[e];
					if (!m) return;
					const u = m.postId,
						b = l.postStickiedComments.data[u],
						x = n.g[t];
					let h;
					if (s(Object(R.i)({
							[e]: {
								distinguishType: t,
								isAdmin: t === n.H.ADMIN,
								isMod: t === n.H.MODERATOR,
								isStickied: !!o
							}
						})), o && b && b !== e && s(Object(R.i)({
							[b]: {
								isStickied: !1
							}
						})), Object(g.a)(r())) {
						const s = Object(p.b)(a(), e, t),
							n = Object(p.c)(a(), e, !!o),
							r = [s];
						(o || !o && e === b) && r.push(n), h = {
							ok: (await Promise.all(r)).every(e => e.ok)
						}
					} else h = await Object(p.g)(c(), e, x, o || null);
					h.ok ? o && s(j({
						id: e,
						postId: u,
						commentsPageKey: Object(i.a)(u, null, {
							sort: n.u.CONFIDENCE,
							...l.platform.currentPage.queryParams
						})
					})) : (s(Object(R.i)({
						[e]: {
							distinguishType: m.distinguishType,
							isAdmin: m.isAdmin,
							isMod: m.isMod,
							isStickied: m.isStickied
						}
					})), s(Object(R.i)({
						[b]: {
							isStickied: l.features.comments.models[b].isStickied
						}
					})))
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
				i = o("./node_modules/react-redux/es/index.js"),
				d = o("./node_modules/reselect/es/index.js"),
				c = o("./src/lib/constants/index.ts"),
				a = o("./src/reddit/actions/comment/moderation.ts"),
				l = o("./src/reddit/actions/post.ts"),
				p = o("./src/reddit/actions/tooltip.ts"),
				m = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = o("./src/reddit/components/TrackingHelper/index.tsx"),
				b = o("./src/reddit/controls/Dropdown/index.tsx"),
				x = o("./src/reddit/controls/Dropdown/Row.tsx"),
				g = o("./src/reddit/helpers/isComment.ts"),
				h = o("./src/reddit/helpers/trackers/modTools.ts"),
				R = o("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				f = o("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				v = o("./src/reddit/icons/svgs/Clock/index.tsx"),
				O = o("./src/reddit/icons/svgs/Undo/index.tsx"),
				w = o("./src/reddit/selectors/tooltip.ts"),
				j = o("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				k = o.n(j);
			const {
				fbt: _
			} = o("./node_modules/fbt/lib/FbtPublic.js"), C = (e, t) => `SnoozableReport--${t}--${e}`, E = Object(i.b)(() => Object(d.c)({
				isDropdownOpen: (e, t) => Object(w.b)(C(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(p.h)({
					tooltipId: C(t.reason, t.reportedThingId)
				})),
				toggleSnooze: o => {
					Object(g.a)(t.reportedThingId) ? e(Object(a.h)(t.reportedThingId, t.reason, o)) : e(Object(l.hb)(t.reportedThingId, t.reason, o))
				}
			})), S = Object(m.a)(b.a);
			class y extends n.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? c.fc.None : c.fc.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(h.l)(Object(g.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
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
						isSnoozed: i
					} = this.props, d = C(e, o);
					return n.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, n.a.createElement(x.b, {
						id: d,
						className: k.a.DropdownLabelContainer,
						onClick: s
					}, n.a.createElement("label", {
						htmlFor: d,
						className: k.a.DropdownLabel
					}, i ? "Reporter snoozed" : `${t}: ${e}`, r ? n.a.createElement(f.a, null) : n.a.createElement(R.a, null))), n.a.createElement(S, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, n.a.createElement("button", {
						className: k.a.SnoozeButton,
						onClick: this.onSnoozeButtonClick
					}, n.a.createElement("div", {
						className: k.a.SnoozeButtonContent
					}, i ? n.a.createElement(n.a.Fragment, null, n.a.createElement(O.a, null), _._("Undo snoozing reports from this user", null, {
						hk: "4iqfWB"
					})) : n.a.createElement(n.a.Fragment, null, n.a.createElement(v.a, null), _._("Snooze reports from this user for 7 days", null, {
						hk: "4cRFyG"
					}))))))
				}
			}
			var D = E(Object(u.c)(y)),
				T = o("./src/reddit/components/Reports/index.m.less"),
				B = o.n(T);
			const {
				fbt: I
			} = o("./node_modules/fbt/lib/FbtPublic.js"), z = r.a.div("ReportText", B.a), N = r.a.div("ReportsTitle", B.a);

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
					className: B.a.Reports
				}, n.a.createElement(N, null, I._("Moderator Reports", null, {
					hk: "3hZ0oX"
				})), o.map(e => {
					let [t, o] = e;
					return n.a.createElement(z, {
						key: `mod-${o}`
					}, `u/${o}: ${t}`)
				})), s && s.length > 0 && n.a.createElement("div", {
					className: B.a.Reports
				}, n.a.createElement(N, null, I._("User Reports", null, {
					hk: "2KeCLz"
				})), n.a.createElement("div", {
					className: B.a.UserReports
				}, s.map(e => {
					let [t, o, s, i] = e;
					return void 0 !== s && i ? n.a.createElement(D, {
						key: `user-${t}`,
						reason: t,
						amount: o,
						reportedThingId: r,
						isSnoozed: s
					}) : n.a.createElement(z, {
						key: `user-${t}`
					}, `${o}: ${t}`)
				}))))
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
				i = o("./node_modules/reselect/es/index.js"),
				d = o("./src/lib/lessComponent.tsx"),
				c = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				a = o("./src/reddit/controls/Dropdown/index.tsx"),
				l = o("./src/reddit/selectors/tooltip.ts"),
				p = o("./node_modules/fbt/lib/FbtPublic.js"),
				m = o("./src/reddit/components/Reports/index.tsx"),
				u = o("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				b = o("./src/reddit/layout/row/Inline/index.tsx"),
				x = o("./src/reddit/components/ViewReportsDropdown/ReportsList.m.less"),
				g = o.n(x);
			const h = d.a.wrapped(b.a, "Footer", g.a),
				R = d.a.wrapped(u.c, "FooterButton", g.a);
			var f = e => n.a.createElement("div", null, n.a.createElement(m.a, {
					modReports: e.modReports,
					userReports: e.userReports,
					reportedThingId: e.reportedThingId
				}), !e.isShowingHistoricalReports && n.a.createElement(h, null, n.a.createElement(R, {
					onClick: e.onIgnoreReports,
					text: e.ignoreReports ? p.fbt._("Restore reports", null, {
						hk: "3wbqh7"
					}) : p.fbt._("Ignore reports", null, {
						hk: "4dr3Qm"
					})
				}))),
				v = o("./src/reddit/components/ViewReportsDropdown/index.m.less"),
				O = o.n(v);
			const w = d.a.wrapped(a.a, "StyledDropdown", O.a),
				j = Object(i.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: o
						} = t;
						return Object(l.b)(o)(e)
					}
				}),
				k = Object(r.b)(j),
				_ = Object(c.a)(w),
				C = k(e => {
					const t = !(!e.model.numReports || -1 !== e.model.numReports),
						o = t ? e.model.modReportsDismissed || [] : e.model.modReports,
						s = t ? e.model.userReportsDismissed || [] : e.model.userReports;
					return n.a.createElement(_, {
						className: e.className,
						isOpen: e.isDropdownOpen,
						tooltipId: e.tooltipId
					}, n.a.createElement(f, {
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
				i = o("./src/reddit/icons/svgs/Clock/index.m.less"),
				d = o.n(i);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(d.a.clock, e.className),
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
				i = o("./src/reddit/icons/svgs/Undo/index.m.less"),
				d = o.n(i);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(d.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ViewReportsDropdown-index.788759345a0454bdf618.js.map