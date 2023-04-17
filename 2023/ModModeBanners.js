// https://www.redditstatic.com/desktop2x/ModModeBanners.89261c4a535819988669.js
// Retrieved at 4/17/2023, 6:40:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModModeBanners"], {
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return v
			})), s.d(t, "c", (function() {
				return R
			})), s.d(t, "f", (function() {
				return E
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "e", (function() {
				return k
			})), s.d(t, "g", (function() {
				return O
			})), s.d(t, "h", (function() {
				return N
			})), s.d(t, "b", (function() {
				return B
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/makeCommentsPageKey/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				i = s("./src/reddit/actions/shortcuts/utils.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/constants/modals.ts"),
				p = s("./src/reddit/endpoints/comment/index.tsx"),
				m = s("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				u = s("./src/reddit/models/Reportable/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				x = s("./src/reddit/selectors/commentSelector.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/actions/comment/index.ts"),
				g = s("./src/reddit/actions/comment/constants.ts");
			const _ = Object(r.a)(g.p),
				v = e => async (t, s, o) => {
					let {
						apiContext: n
					} = o;
					s().features.comments.models[e] && (await Object(p.j)(n(), e)).ok && t((e => async t => {
						t(_({
							commentId: e
						}))
					})(e))
				}, R = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					if (!Object(h.S)(s())) return void t(Object(c.i)(l.a.LOGIN_MODAL_ID));
					const a = s().features.comments.models[e];
					if (!a) return;
					const i = a.isLocked ? p.l : p.f;
					t(Object(f.j)({
						[e]: {
							isLocked: !a.isLocked
						}
					})), (await i(r(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: a.isLocked ? o.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : o.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(f.j)({
						[e]: {
							isLocked: a.isLocked
						}
					}))
				}, E = Object(r.a)(g.J), j = e => async (t, s, n) => {
					let {
						apiContext: r,
						gqlContext: a
					} = n;
					const c = s(),
						l = c.features.comments.models[e],
						m = c.user.account ? c.user.account.displayText : null;
					l && m && (t(Object(f.j)({
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
					})), (await Object(p.a)(a(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: o.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(f.j)({
						[e]: {
							isApproved: l.isApproved,
							approvedBy: null,
							bannedBy: l.bannedBy,
							isRemoved: l.isRemoved,
							isSpam: l.isSpam,
							modNote: l.modNote,
							modReasonBy: l.modReasonBy,
							modRemovalReason: l.modRemovalReason,
							numReports: l.numReports || null
						}
					})), Object(i.d)())
				}, k = (e, t) => async (s, n, r) => {
					let {
						apiContext: a,
						gqlContext: c
					} = r;
					const l = n(),
						m = l.features.comments.models[e],
						u = l.user.account ? l.user.account.displayText : null;
					m && u && (s(Object(f.j)({
						[e]: {
							approvedBy: null,
							bannedBy: u,
							bannedAtUTC: Date.now(),
							isApproved: !1,
							isRemoved: !t,
							isSpam: t,
							numReports: 0
						}
					})), (await Object(p.h)(c(), e, t)).ok ? s(Object(d.f)({
						kind: b.b.SuccessMod,
						text: t ? o.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : o.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : s(Object(f.j)({
						[e]: {
							approvedBy: m.approvedBy,
							bannedBy: m.bannedBy,
							isApproved: m.isApproved,
							isRemoved: m.isRemoved,
							isSpam: m.isSpam,
							numReports: m.numReports
						}
					})), Object(i.d)())
				}, O = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					const a = s().features.comments.models[e];
					if (!a) return;
					const c = a.ignoreReports ? p.k : p.e;
					a.ignoreReports || t(j(e)), t(Object(f.j)({
						[e]: {
							ignoreReports: !a.ignoreReports
						}
					})), (await c(r(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: a.ignoreReports ? o.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : o.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(f.j)({
						[e]: {
							ignoreReports: a.ignoreReports
						}
					}))
				}, N = (e, t, s) => async (r, a, c) => {
					let {
						gqlContext: i
					} = c;
					const l = Object(x.c)(a(), {
						commentId: e
					});
					if (!l) return;
					const p = s === n.lc.Snoozed,
						h = {
							itemId: e,
							reportText: t,
							isSnoozed: p
						};
					if ((await Object(m.a)(i(), {
							input: h
						})).ok) r(Object(f.j)({
						[e]: {
							userReports: Object(u.a)(l.userReports, t, p)
						}
					}));
					else {
						const e = Object(d.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(d.f)(e))
					}
				}, B = (e, t, s) => async (o, r, c) => {
					let {
						apiContext: i,
						gqlContext: d
					} = c;
					const l = r(),
						m = l.features.comments.models[e];
					if (!m) return;
					const u = m.postId,
						b = l.postStickiedComments.data[u];
					o(Object(f.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === n.J.ADMIN,
							isMod: t === n.J.MODERATOR,
							isStickied: !!s
						}
					})), s && b && b !== e && o(Object(f.j)({
						[b]: {
							isStickied: !1
						}
					}));
					const x = Object(p.c)(d(), e, t),
						h = Object(p.d)(d(), e, !!s),
						g = [x];
					(s || !s && e === b) && g.push(h), (await Promise.all(g)).every(e => e.ok) ? s && o(E({
						id: e,
						postId: u,
						commentsPageKey: Object(a.a)(u, null, {
							sort: n.w.CONFIDENCE,
							...l.platform.currentPage.queryParams
						})
					})) : (o(Object(f.j)({
						[e]: {
							distinguishType: m.distinguishType,
							isAdmin: m.isAdmin,
							isMod: m.isMod,
							isStickied: m.isStickied
						}
					})), o(Object(f.j)({
						[b]: {
							isStickied: l.features.comments.models[b].isStickied
						}
					})))
				}
		},
		"./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/FilteredStatusDisplay.tsx"),
				c = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less"),
				i = s.n(c);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.default = e => {
				let {
					thing: t
				} = e;
				return n.a.createElement("ul", {
					className: Object(r.a)(i.a.wrapper)
				}, n.a.createElement(a.a, {
					content: t
				}))
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
				c = s("./src/reddit/components/ModModeBanners/index.m.less"),
				i = s.n(c),
				d = s("./src/reddit/components/Reports/index.tsx"),
				l = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/helpers/isPost.ts"),
				u = s("./src/reddit/helpers/trackers/modTools.ts"),
				b = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				x = s("./src/reddit/icons/fonts/Report/index.tsx"),
				h = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				f = s("./src/reddit/components/ModModeReports/_ModModeReports.m.less"),
				g = s.n(f);
			const _ = e => {
				let {
					handleToggleExpando: t,
					isHistoricalReports: s,
					numReports: n,
					modReports: c,
					userReports: p,
					collapseReports: m,
					reportedThingId: u
				} = e;
				return r.a.createElement("div", {
					className: Object(a.a)(g.a.banner, i.a.banner, m && g.a.collapsed)
				}, r.a.createElement("div", {
					className: g.a.contentContainer
				}, m ? r.a.createElement(b.a, {
					className: Object(a.a)(i.a.icon, g.a.coloredIcon)
				}) : r.a.createElement(x.a, {
					className: Object(a.a)(i.a.icon, g.a.coloredIcon)
				}), r.a.createElement("div", {
					className: g.a.reportsWrapper
				}, m ? n : r.a.createElement(d.a, {
					className: g.a.reports,
					modReports: c,
					userReports: p,
					reportedThingId: u
				})), s ? r.a.createElement(l.c, {
					className: g.a.ignoreButton,
					onClick: t,
					text: o.fbt._("old reports", null, {
						hk: "2IdZOv"
					})
				}, r.a.createElement(h.a, {
					className: g.a.ignoreButtonIcon
				})) : r.a.createElement(l.c, {
					className: g.a.ignoreButton,
					onClick: t,
					text: m ? o.fbt._("Restore Reports", null, {
						hk: "2O219R"
					}) : o.fbt._("ignore reports", null, {
						hk: "48jlNW"
					})
				}, m ? r.a.createElement(x.a, {
					className: g.a.ignoreButtonIcon
				}) : r.a.createElement(b.a, {
					className: g.a.ignoreButtonIcon
				}))))
			};
			t.default = e => {
				let {
					reportable: t,
					onIgnoreReports: s
				} = e;
				const [o, a] = Object(n.useState)(!0), c = Object(p.b)(), i = () => {
					let e;
					s();
					const o = t.ignoreReports ? "restore_reports" : "ignore_reports";
					e = Object(m.a)(t.id) ? Object(u.l)(o, t.id) : Object(u.k)(o, t.id), c(e)
				}, d = (t.modReportsDismissed && t.modReportsDismissed.length || 0) + (t.userReportsDismissed && t.userReportsDismissed.length || 0);
				return d ? r.a.createElement(_, {
					collapseReports: o,
					handleToggleExpando: () => a(e => !e),
					isHistoricalReports: !0,
					numReports: d,
					modReports: t.modReportsDismissed,
					userReports: t.userReportsDismissed,
					reportedThingId: t.id
				}) : r.a.createElement(_, {
					handleToggleExpando: i,
					collapseReports: t.ignoreReports,
					numReports: t.numReports || 0,
					modReports: t.modReports,
					userReports: t.userReports,
					reportedThingId: t.id
				})
			}
		},
		"./src/reddit/components/ModQueueActionBar/StatusDisplays/FilteredStatusDisplay.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return _
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/models/ModQueueTrigger/index.ts"),
				l = s("./src/reddit/components/RichTextJson/index.tsx"),
				p = s("./node_modules/lodash/debounce.js"),
				m = s.n(p),
				u = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				b = s("./src/reddit/hooks/useInfoTextTooltip.ts");
			const x = e => {
				let {
					confidence: t,
					children: s
				} = e;
				const o = Object(b.a)({
						placement: "top-end"
					}),
					c = m()(o.hide, 500);
				return n.a.createElement("div", {
					onMouseEnter: () => {
						o.show(), c.cancel()
					},
					onMouseLeave: c
				}, n.a.createElement("button", {
					onClick: e => {
						e.stopPropagation(), o.toggle()
					},
					className: "text-12 text-neutral-content mr-sm hover:underline",
					ref: o.target.ref
				}, n.a.createElement("span", {
					className: Object(a.a)("inline-block mr-2xs h-xs w-xs rounded-full", {
						"bg-alert-caution": t === d.a.LOW,
						"bg-success-background": t === d.a.HIGH
					})
				}), function(e) {
					switch (e) {
						case d.a.LOW:
							return r.fbt._("Low Confidence", null, {
								hk: "1woV5A"
							});
						case d.a.HIGH:
							return r.fbt._("High Confidence", null, {
								hk: "2UzCkt"
							})
					}
				}(t)), n.a.createElement(u.a, {
					popperProps: o.popperProps,
					arrowProps: o.arrowProps,
					visible: o.visible,
					className: "max-w-[230px] font-semibold text-12"
				}, n.a.createElement("div", {
					className: "py-xs flex gap-x-xs",
					onClick: e => e.stopPropagation()
				}, n.a.createElement(i.a, {
					name: "info_fill"
				}), n.a.createElement("div", null, s))))
			};
			var h = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less"),
				f = s.n(h);
			const g = e => {
					if (e) try {
						return JSON.parse(e)
					} catch {
						return
					}
				},
				_ = e => {
					let {
						content: t
					} = e;
					const s = Object(o.useMemo)(() => {
						var e, s, o, n, a, i;
						const l = [];
						(null === (e = t.modQueueTriggers) || void 0 === e ? void 0 : e.length) || t.bannedBy !== c.m || l.push({
							icon: "bot_fill",
							heading: r.fbt._("Blocked by AutoMod", null, {
								hk: "XZuzM"
							})
						});
						for (const c of t.modQueueTriggers || []) switch (c.type) {
							case d.b.AUTOMOD:
								l.push({
									icon: "bot_fill",
									heading: r.fbt._("Blocked by AutoMod", null, {
										hk: "XZuzM"
									}),
									reason: c.message
								});
								break;
							case d.b.SHADOWBANNED_SUBMITTER:
								l.push({
									icon: "ban_fill",
									heading: r.fbt._("Blocked by Automatic Filter", null, {
										hk: "2iaUCM"
									}),
									reason: c.message
								});
								break;
							case d.b.HATEFUL_CONTENT:
								l.push({
									icon: "mod_mode_fill",
									heading: r.fbt._("Blocked by Automatic Filter", null, {
										hk: "4vu7uy"
									}),
									reason: c.message
								});
								break;
							case d.b.CROWD_CONTROL:
								l.push({
									icon: "crowd_control",
									heading: r.fbt._("Blocked by Crowd Control", null, {
										hk: "6LNvT"
									}),
									reason: c.message
								});
								break;
							case d.b.BAN_EVASION:
								l.push({
									icon: "ban_fill",
									heading: r.fbt._("Blocked by Ban Evasion Protection", null, {
										hk: "1unYu9"
									}),
									reason: c.message,
									reasonRichText: g(null === (o = null === (s = c.details) || void 0 === s ? void 0 : s.recencyExplanation) || void 0 === o ? void 0 : o.richtext),
									confidence: null === (n = c.details) || void 0 === n ? void 0 : n.confidence,
									confidenceExplanation: g(null === (i = null === (a = c.details) || void 0 === a ? void 0 : a.confidenceExplanation) || void 0 === i ? void 0 : i.richtext)
								})
						}
						return l
					}, [t.modQueueTriggers, t.bannedBy]);
					return n.a.createElement("div", {
						className: f.a.filteredWrapper
					}, s.map((e, t) => {
						let {
							heading: s,
							reason: o,
							reasonRichText: r,
							icon: c,
							confidence: d,
							confidenceExplanation: p
						} = e;
						return n.a.createElement("div", {
							key: `${s}-${o}-${t}`,
							className: f.a.filteredRow
						}, n.a.createElement(i.a, {
							isFilled: !0,
							name: c,
							className: Object(a.a)(f.a.coloredIcon, f.a.icon)
						}), n.a.createElement("div", {
							className: f.a.statusText
						}, n.a.createElement("div", {
							className: f.a.statusMeta
						}, n.a.createElement("p", {
							className: f.a.status
						}, s), d && p && n.a.createElement(x, {
							confidence: d
						}, n.a.createElement(l.b, {
							className: f.a.tooltipContent,
							content: p,
							rtJsonElementProps: {}
						}))), r && n.a.createElement(l.b, {
							content: r,
							rtJsonElementProps: {}
						}), o && !r && n.a.createElement("p", {
							className: f.a.reasonText
						}, o)))
					}))
				}
		},
		"./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2qFtoxD1OfFOBkQIQeIP5N",
				opened: "_3kWeXZJizg6u4Rpq5Bx2k6",
				openable: "_1jr1ZpXLdZNEfWwHwMp3UW",
				filteredWrapper: "_1aoTzKKtmlGCr-UYW5QI5O",
				filteredRow: "_eBNIEsnbYySvkxjmpt2P",
				reportedWrapper: "_1rfFSNr23RcUWm7d90DpDo",
				reportMeta: "_32zOxnfn5FxzpA0vNAYP7J",
				ignoreButton: "_3qPfB3L3JEpdPsa2KJ6I6Y",
				ignoreButtonIcon: "_2xeI0-KXBryv89ds5re0ac",
				reported: "_37f_VPQZEbIxZBhfy_wkzt",
				icon: "OYsuhocczx0FWqSu4etye",
				approved: "_3PA1NUdBncNEoWXl9e53aE",
				statusText: "_3trW-r5LnijGIrjgDF1u2M",
				status: "_3Q6W_eSDsN-BhormvQBcRr",
				statusMeta: "_3Qp7V0IlguVisBYUCEDLwX",
				tooltipContent: "_1SLswtlo8BWHAgKgT5Nsj_",
				reasonText: "_7YNYpwZk3KH6oXU4KhoGd",
				snoozabledButton: "_3Rixx0Z51qJ71wGmQ8UtQj",
				userIconWrapper: "_3vnCHVExwDbhdlwSh9BV9k",
				userIcon: "_1O-L18qAEJqcxeYP7bE4mK",
				filteredExplanationIcon: "a13uMv6sihYo-UyNBZDo8",
				snoozableDropdown: "_3L6lZrroGMf7wnI2DFJDJx",
				snoozeIcon: "BUoPqJh1q6Pv_Vf5bsKyT",
				caretButton: "_1iROd0ZxfCEcEidNiygaYB",
				caretIcon: "-vF-jMhpa_XhPJ_ntG1Hv",
				userlink: "_2iRjlf0DdO9rVaTZpfwvHA"
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
		"./src/reddit/components/Reports/SnoozableReport/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/actions/comment/moderation.ts"),
				l = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				x = s("./src/reddit/controls/Dropdown/Row.tsx"),
				h = s("./src/reddit/helpers/isComment.ts"),
				f = s("./src/reddit/helpers/trackers/modTools.ts"),
				g = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				_ = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				v = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				R = s("./src/reddit/icons/svgs/Undo/index.tsx"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				k = s.n(j);
			const {
				fbt: O
			} = s("./node_modules/fbt/lib/FbtPublic.js"), N = (e, t) => `SnoozableReport--${t}--${e}`, B = Object(r.b)(() => Object(a.c)({
				isDropdownOpen: (e, t) => Object(E.b)(N(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(p.h)({
					tooltipId: N(t.reason, t.reportedThingId)
				})),
				toggleSnooze: s => {
					Object(h.a)(t.reportedThingId) ? e(Object(d.h)(t.reportedThingId, t.reason, s)) : e(Object(l.fb)(t.reportedThingId, t.reason, s))
				}
			})), C = Object(m.a)(b.a);
			class T extends n.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? i.lc.None : i.lc.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(f.p)(Object(h.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
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
						isSnoozed: a,
						useNewFormat: i,
						className: d,
						dropdownClassName: l,
						iconClassName: p
					} = this.props, m = N(e, s);
					return n.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, n.a.createElement(x.b, {
						id: m,
						className: Object(c.a)(k.a.DropdownLabelContainer, d),
						onClick: o
					}, n.a.createElement("label", {
						htmlFor: m,
						className: k.a.DropdownLabel
					}, a ? O._("Reporter snoozed", null, {
						hk: "1rCWql"
					}) : i ? `${e} (${t})` : `${t}: ${e}`, r ? n.a.createElement(_.a, null) : n.a.createElement(g.a, null))), n.a.createElement(C, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, n.a.createElement("button", {
						className: Object(c.a)(k.a.SnoozeButton, l),
						onClick: this.onSnoozeButtonClick
					}, n.a.createElement("div", {
						className: k.a.SnoozeButtonContent
					}, a ? n.a.createElement(n.a.Fragment, null, n.a.createElement(R.a, {
						className: p
					}), O._("Undo snoozing reports from this user", null, {
						hk: "1CloXT"
					})) : n.a.createElement(n.a.Fragment, null, n.a.createElement(v.a, {
						className: p
					}), O._("Snooze reports from this user for 7 days", null, {
						hk: "1i0sOW"
					}))))))
				}
			}
			t.a = B(Object(u.c)(T))
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
				return m
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Reports/SnoozableReport/index.tsx"),
				c = s("./src/reddit/components/Reports/index.m.less"),
				i = s.n(c);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = r.a.div("ReportText", i.a), p = r.a.div("ReportsTitle", i.a);

			function m(e) {
				const {
					className: t,
					modReports: s,
					userReports: o,
					reportedThingId: r
				} = e;
				return n.a.createElement("div", {
					className: t
				}, s && s.length > 0 && n.a.createElement("div", {
					className: i.a.Reports
				}, n.a.createElement(p, null, d._("Moderator Reports", null, {
					hk: "3hZ0oX"
				})), s.map(e => {
					let [t, s] = e;
					return n.a.createElement(l, {
						key: `mod-${s}`
					}, `u/${s}: ${t}`)
				})), o && o.length > 0 && n.a.createElement("div", {
					className: i.a.Reports
				}, n.a.createElement(p, null, d._("User Reports", null, {
					hk: "2KeCLz"
				})), n.a.createElement("div", {
					className: i.a.UserReports
				}, o.map(e => {
					let [t, s, o, c] = e;
					return void 0 !== o && c ? n.a.createElement(a.a, {
						key: `user-${t}`,
						reason: t,
						amount: s,
						reportedThingId: r,
						isSnoozed: o
					}) : n.a.createElement(l, {
						key: `user-${t}`
					}, `${s}: ${t}`)
				}))))
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
				c = s.n(a);
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
				a = s("./src/reddit/icons/svgs/Undo/index.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(c.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModModeBanners.89261c4a535819988669.js.map