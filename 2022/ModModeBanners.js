// https://www.redditstatic.com/desktop2x/ModModeBanners.fdef1986d7655cf34cf0.js
// Retrieved at 3/22/2022, 9:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModModeBanners"], {
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return _
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "f", (function() {
				return j
			})), s.d(t, "a", (function() {
				return k
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "g", (function() {
				return C
			})), s.d(t, "h", (function() {
				return N
			})), s.d(t, "b", (function() {
				return M
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/makeCommentsPageKey/index.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				i = s("./src/reddit/actions/shortcuts/utils.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/constants/modals.ts"),
				m = s("./src/reddit/endpoints/comment/index.tsx"),
				p = s("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				u = s("./src/reddit/models/Reportable/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				x = s("./src/reddit/selectors/commentSelector.ts"),
				g = s("./src/reddit/selectors/experiments/d2xGqlDistinguish.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				R = s("./src/reddit/actions/comment/index.ts"),
				v = s("./src/reddit/actions/comment/constants.ts");
			const f = Object(r.a)(v.n),
				_ = e => async (t, s, {
					apiContext: o
				}) => {
					s().features.comments.models[e] && (await Object(m.j)(o(), e)).ok && t((e => async t => {
						t(f({
							commentId: e
						}))
					})(e))
				}, O = e => async (t, s, {
					apiContext: n
				}) => {
					if (!Object(h.P)(s())) return void t(Object(d.i)(l.a.LOGIN_MODAL_ID));
					const r = s().features.comments.models[e];
					if (!r) return;
					const a = r.isLocked ? m.l : m.e;
					t(Object(R.i)({
						[e]: {
							isLocked: !r.isLocked
						}
					})), (await a(n(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: r.isLocked ? o.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : o.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(R.i)({
						[e]: {
							isLocked: r.isLocked
						}
					}))
				}, j = Object(r.a)(v.G), k = e => async (t, s, {
					apiContext: n
				}) => {
					const r = s(),
						a = r.features.comments.models[e],
						d = r.user.account ? r.user.account.displayText : null;
					a && d && (t(Object(R.i)({
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
					})), (await Object(m.a)(n(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: o.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(R.i)({
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
				}, E = (e, t) => async (s, n, {
					apiContext: r
				}) => {
					const a = n(),
						d = a.features.comments.models[e],
						l = a.user.account ? a.user.account.displayText : null;
					d && l && (s(Object(R.i)({
						[e]: {
							approvedBy: null,
							bannedBy: l,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.h)(r(), e, t)).ok ? s(Object(c.f)({
						kind: b.b.SuccessMod,
						text: t ? o.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : o.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : s(Object(R.i)({
						[e]: {
							approvedBy: d.approvedBy,
							bannedBy: d.bannedBy,
							isApproved: d.isApproved,
							isRemoved: d.isRemoved,
							isSpam: d.isSpam
						}
					})), Object(i.d)())
				}, C = e => async (t, s, {
					apiContext: n
				}) => {
					const r = s().features.comments.models[e];
					if (!r) return;
					const a = r.ignoreReports ? m.k : m.d;
					t(Object(R.i)({
						[e]: {
							ignoreReports: !r.ignoreReports
						}
					})), (await a(n(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: r.ignoreReports ? o.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : o.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(R.i)({
						[e]: {
							ignoreReports: r.ignoreReports
						}
					}))
				}, N = (e, t, s) => async (r, a, {
					gqlContext: d
				}) => {
					const i = Object(x.b)(a(), {
						commentId: e
					});
					if (!i) return;
					const l = s === n.dc.Snoozed,
						m = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(p.a)(d(), {
							input: m
						})).ok) r(Object(R.i)({
						[e]: {
							userReports: Object(u.a)(i.userReports, t, l)
						}
					}));
					else {
						const e = Object(c.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(c.f)(e))
					}
				}, M = (e, t, s) => async (o, r, {
					apiContext: d,
					gqlContext: i
				}) => {
					const c = r(),
						l = c.features.comments.models[e];
					if (!l) return;
					const p = l.postId,
						u = c.postStickiedComments.data[p],
						b = n.g[t];
					let x;
					if (o(Object(R.i)({
							[e]: {
								distinguishType: t,
								isAdmin: t === n.G.ADMIN,
								isMod: t === n.G.MODERATOR,
								isStickied: !!s
							}
						})), s && u && u !== e && o(Object(R.i)({
							[u]: {
								isStickied: !1
							}
						})), Object(g.a)(r())) {
						const o = Object(m.b)(i(), e, t),
							n = Object(m.c)(i(), e, !!s),
							r = [o];
						(s || !s && e === u) && r.push(n), x = {
							ok: (await Promise.all(r)).every(e => e.ok)
						}
					} else x = await Object(m.g)(d(), e, b, s || null);
					x.ok ? s && o(j({
						id: e,
						postId: p,
						commentsPageKey: Object(a.a)(p, null, {
							sort: n.u.CONFIDENCE,
							...c.platform.currentPage.queryParams
						})
					})) : (o(Object(R.i)({
						[e]: {
							distinguishType: l.distinguishType,
							isAdmin: l.isAdmin,
							isMod: l.isMod,
							isStickied: l.isStickied
						}
					})), o(Object(R.i)({
						[u]: {
							isStickied: c.features.comments.models[u].isStickied
						}
					})))
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
				a = s("./src/reddit/components/ModModeBanners/index.m.less"),
				d = s.n(a),
				i = s("./src/reddit/models/ModQueueTrigger/index.ts"),
				c = s("./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.m.less"),
				l = s.n(c),
				m = s("./src/reddit/icons/fonts/index.tsx");
			var p = ({
					iconName: e,
					children: t
				}) => n.a.createElement(n.a.Fragment, null, n.a.createElement(m.a, {
					isFilled: !0,
					name: e,
					className: Object(r.a)(l.a.coloredIcon, d.a.icon)
				}), t),
				u = s("./src/reddit/components/ModModeFilteredReason/helpers.ts");
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = e => e ? `: ${e}` : "";
			t.default = ({
				thing: e
			}) => {
				var t, s;
				return n.a.createElement("ul", {
					className: Object(r.a)(l.a.banner, d.a.banner)
				}, Object(u.c)(e) && n.a.createElement("li", {
					className: l.a.listItem
				}, n.a.createElement(p, {
					iconName: "mod_mode_fill"
				}, b._("Blocked by Automatic Filter{reason}", [b._param("reason", x(null === (t = Object(i.b)(e, i.a.HATEFUL_CONTENT)) || void 0 === t ? void 0 : t.message))], {
					hk: "3IxjRX"
				}))), Object(u.b)(e) && n.a.createElement("li", {
					className: l.a.listItem
				}, n.a.createElement(p, {
					iconName: "crowd_control"
				}, b._("Blocked by Crowd Control", null, {
					hk: "1gAVrC"
				}))), Object(u.a)(e) && n.a.createElement("li", {
					className: l.a.listItem
				}, n.a.createElement(p, {
					iconName: "bot"
				}, b._("Blocked by AutoMod{reason}", [b._param("reason", x((null === (s = Object(i.b)(e, i.a.AUTOMOD)) || void 0 === s ? void 0 : s.message) || e.modNote))], {
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
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/ModModeBanners/index.m.less"),
				i = s.n(d),
				c = s("./src/reddit/components/Reports/index.tsx"),
				l = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/helpers/isPost.ts"),
				u = s("./src/reddit/helpers/trackers/modTools.ts"),
				b = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				x = s("./src/reddit/icons/fonts/Report/index.tsx"),
				g = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				h = s("./src/reddit/components/ModModeReports/_ModModeReports.m.less"),
				R = s.n(h);
			const v = ({
				handleToggleExpando: e,
				isHistoricalReports: t,
				numReports: s,
				modReports: n,
				userReports: d,
				collapseReports: m,
				reportedThingId: p
			}) => r.a.createElement("div", {
				className: Object(a.a)(R.a.banner, i.a.banner, m && R.a.collapsed)
			}, r.a.createElement("div", {
				className: R.a.contentContainer
			}, m ? r.a.createElement(b.a, {
				className: Object(a.a)(i.a.icon, R.a.coloredIcon)
			}) : r.a.createElement(x.a, {
				className: Object(a.a)(i.a.icon, R.a.coloredIcon)
			}), r.a.createElement("div", {
				className: R.a.reportsWrapper
			}, m ? s : r.a.createElement(c.a, {
				className: R.a.reports,
				modReports: n,
				userReports: d,
				reportedThingId: p
			})), t ? r.a.createElement(l.c, {
				className: R.a.ignoreButton,
				onClick: e,
				text: o.fbt._("old reports", null, {
					hk: "2IdZOv"
				})
			}, r.a.createElement(g.a, {
				className: R.a.ignoreButtonIcon
			})) : r.a.createElement(l.c, {
				className: R.a.ignoreButton,
				onClick: e,
				text: m ? o.fbt._("Restore Reports", null, {
					hk: "2O219R"
				}) : o.fbt._("ignore reports", null, {
					hk: "48jlNW"
				})
			}, m ? r.a.createElement(x.a, {
				className: R.a.ignoreButtonIcon
			}) : r.a.createElement(b.a, {
				className: R.a.ignoreButtonIcon
			}))));
			t.default = ({
				reportable: e,
				onIgnoreReports: t
			}) => {
				const [s, o] = Object(n.useState)(!0), a = Object(m.b)(), d = () => {
					let s;
					t();
					const o = e.ignoreReports ? "restore_reports" : "ignore_reports";
					s = Object(p.a)(e.id) ? Object(u.h)(o, e.id) : Object(u.g)(o, e.id), a(s)
				}, i = (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0);
				return i ? r.a.createElement(v, {
					collapseReports: s,
					handleToggleExpando: () => o(e => !e),
					isHistoricalReports: !0,
					numReports: i,
					modReports: e.modReportsDismissed,
					userReports: e.userReportsDismissed,
					reportedThingId: e.id
				}) : r.a.createElement(v, {
					handleToggleExpando: d,
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
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/actions/comment/moderation.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				x = s("./src/reddit/controls/Dropdown/Row.tsx"),
				g = s("./src/reddit/helpers/isComment.ts"),
				h = s("./src/reddit/helpers/trackers/modTools.ts"),
				R = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				v = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				f = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				_ = s("./src/reddit/icons/svgs/Undo/index.tsx"),
				O = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				k = s.n(j);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = (e, t) => `SnoozableReport--${t}--${e}`, N = Object(a.b)(() => Object(d.c)({
				isDropdownOpen: (e, t) => Object(O.b)(C(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(m.h)({
					tooltipId: C(t.reason, t.reportedThingId)
				})),
				toggleSnooze: s => {
					Object(g.a)(t.reportedThingId) ? e(Object(c.h)(t.reportedThingId, t.reason, s)) : e(Object(l.hb)(t.reportedThingId, t.reason, s))
				}
			})), M = Object(p.a)(b.a);
			class T extends n.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? i.dc.None : i.dc.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(h.l)(Object(g.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
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
						isSnoozed: a
					} = this.props, d = C(e, s);
					return n.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, n.a.createElement(x.b, {
						id: d,
						className: k.a.DropdownLabelContainer,
						onClick: o
					}, n.a.createElement("label", {
						htmlFor: d,
						className: k.a.DropdownLabel
					}, a ? "Reporter snoozed" : `${t}: ${e}`, r ? n.a.createElement(v.a, null) : n.a.createElement(R.a, null))), n.a.createElement(M, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, n.a.createElement("button", {
						className: k.a.SnoozeButton,
						onClick: this.onSnoozeButtonClick
					}, n.a.createElement("div", {
						className: k.a.SnoozeButtonContent
					}, a ? n.a.createElement(n.a.Fragment, null, n.a.createElement(_.a, null), E._("Undo snoozing reports from this user", null, {
						hk: "4iqfWB"
					})) : n.a.createElement(n.a.Fragment, null, n.a.createElement(f.a, null), E._("Snooze reports from this user for 7 days", null, {
						hk: "4cRFyG"
					}))))))
				}
			}
			var B = N(Object(u.c)(T)),
				w = s("./src/reddit/components/Reports/index.m.less"),
				y = s.n(w);
			const {
				fbt: I
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = r.a.div("ReportText", y.a), F = r.a.div("ReportsTitle", y.a);

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
					className: y.a.Reports
				}, n.a.createElement(F, null, I._("Moderator Reports", null, {
					hk: "3hZ0oX"
				})), s.map(([e, t]) => n.a.createElement(S, {
					key: `mod-${t}`
				}, `u/${t}: ${e}`))), o && o.length > 0 && n.a.createElement("div", {
					className: y.a.Reports
				}, n.a.createElement(F, null, I._("User Reports", null, {
					hk: "2KeCLz"
				})), n.a.createElement("div", {
					className: y.a.UserReports
				}, o.map(([e, t, s, o]) => void 0 !== s && o ? n.a.createElement(B, {
					key: `user-${e}`,
					reason: e,
					amount: t,
					reportedThingId: r,
					isSnoozed: s
				}) : n.a.createElement(S, {
					key: `user-${e}`
				}, `${t}: ${e}`)))))
			}
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
				a = s("./src/reddit/icons/svgs/Clock/index.m.less"),
				d = s.n(a);
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
				a = s("./src/reddit/icons/svgs/Undo/index.m.less"),
				d = s.n(a);
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModModeBanners.fdef1986d7655cf34cf0.js.map