// https://www.redditstatic.com/desktop2x/ModerationLogFilters.3d97564d2197a2c6b5b5.js
// Retrieved at 2/22/2023, 4:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModerationLogFilters"], {
		"./src/reddit/components/CCM/ModerationLog/Filters/ActionsDropdown/ActionsTreeFilter/ActionBranch/index.m.less": function(e, t, a) {
			e.exports = {
				actionRow: "_1ae8T0CpCNkLSxoAfGT_8p"
			}
		},
		"./src/reddit/components/CCM/ModerationLog/Filters/ActionsDropdown/ActionsTreeFilter/ActionCategoryRow/index.m.less": function(e, t, a) {
			e.exports = {
				row: "_1A2nMqVRdECvqxuniqvamI",
				checkbox: "_32eeab-22qmTO-u7mBJJjX",
				arrow: "_1Hi0Gg_VpY8Ov_QHWvmOm4"
			}
		},
		"./src/reddit/components/CCM/ModerationLog/Filters/ActionsDropdown/ActionsTreeFilter/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_1BwZ0yYDMU9LnhQWhsDIof",
				header: "_1RLWbyvlnq9GBFiFf6AYWh",
				title: "dkicAR82HFaFF97JAxWRm",
				closeBtn: "zp3EzzGPeEC18eIzxMupU",
				searchBar: "_1LG8IzKgTSggjdvBEIJFDl",
				list: "_1yYsmS9H4UhTfrARdbHbXM",
				selectAllRow: "_19b1AtaKSB1oTpCxaLte5a",
				bottom: "eoNOmLFk7SeTjNtA24qBZ",
				applyBtn: "_1Hev2w1U-UpQsdJ5HhyfId"
			}
		},
		"./src/reddit/components/CCM/ModerationLog/Filters/ActionsDropdown/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var o = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				l = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/hooks/useTracking.ts"),
				i = a("./src/higherOrderComponents/asTooltip.tsx"),
				d = a("./src/reddit/constants/moderationLog.ts"),
				m = a("./src/reddit/actions/tooltip.ts"),
				u = a("./src/reddit/controls/Dropdown/index.tsx"),
				p = a("./src/reddit/helpers/trackers/modLog.ts"),
				b = a("./src/reddit/icons/fonts/Clear/index.tsx"),
				h = a("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				g = a("./src/reddit/selectors/tooltip.ts"),
				C = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./node_modules/lodash/flatten.js")),
				x = a.n(C),
				f = a("./node_modules/lodash/isEmpty.js"),
				k = a.n(f),
				j = a("./src/reddit/selectors/moderationLog.ts"),
				_ = a("./src/reddit/components/CCM/ModerationLog/Filters/FilterCheckboxRow/index.tsx"),
				O = a("./src/reddit/controls/Button/index.tsx"),
				E = a("./src/reddit/controls/SearchBar/index.tsx"),
				N = a("./src/reddit/icons/svgs/Close/index.tsx"),
				v = a("./src/reddit/components/CCM/ModerationLog/ModerationLogItem/ActionCategory/index.tsx"),
				w = a("./src/reddit/controls/Checkbox/index.tsx"),
				M = a("./src/reddit/components/CCM/ModerationLog/Filters/ActionsDropdown/ActionsTreeFilter/ActionCategoryRow/index.m.less"),
				F = a.n(M);
			var y = e => {
					let {
						actionCategory: t,
						className: a,
						isHalfSelected: o,
						onClick: n,
						onToggle: r,
						selected: c
					} = e;
					return s.a.createElement("div", {
						className: Object(l.a)(a, F.a.row),
						onClick: n ? () => n(t) : void 0
					}, s.a.createElement(w.a, {
						className: F.a.checkbox,
						isCheckboxSelected: c,
						isHalfCheckboxSelected: o,
						toggleCheckbox: r ? () => r(t) : void 0
					}), s.a.createElement(v.a, {
						category: t
					}), s.a.createElement(h.a, {
						className: F.a.arrow
					}))
				},
				A = a("./src/reddit/components/CCM/ModerationLog/Filters/ActionsDropdown/ActionsTreeFilter/ActionBranch/index.m.less"),
				T = a.n(A);
			var D = e => {
					const [t, a] = Object(n.useState)(0 === e.selectedActions.length);
					Object(n.useEffect)(() => {
						e.isAutoExpanded && a(!1)
					}, [e.isAutoExpanded]);
					const o = e.selectedActions.length,
						r = o === e.actions.length,
						l = !!o && o !== e.actions.length,
						c = Object(n.useCallback)(t => {
							r || e.selectedActions.includes(t) ? e.onChange({
								actions: e.selectedActions.filter(e => e !== t)
							}) : e.onChange({
								actions: [...e.selectedActions, t]
							})
						}, [e, r]),
						i = Object(n.useCallback)(() => {
							r || l ? e.onChange({
								actions: []
							}) : e.onChange({
								actions: e.actions
							})
						}, [r, l, e]),
						m = Object(n.useCallback)(() => {
							a(!t)
						}, [t]);
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(y, {
						actionCategory: e.actionCategory,
						selected: r,
						isHalfSelected: l,
						onToggle: i,
						onClick: m
					}), !t && e.actions.map(t => s.a.createElement(_.a, {
						className: T.a.actionRow,
						key: `${e.actionCategory}_${t}`,
						name: t,
						title: d.a[t] ? d.a[t]() : t,
						selected: e.selectedActions.includes(t),
						isHalfSelected: !1,
						onToggle: c
					})))
				},
				L = a("./src/reddit/components/CCM/ModerationLog/Filters/ActionsDropdown/ActionsTreeFilter/index.m.less"),
				S = a.n(L);
			const I = e => x()(Object.keys(e).map(t => e[t]));
			var B = e => {
					const t = Object(c.a)(),
						a = Object(r.e)(e => Object(j.b)(e)),
						i = I(a),
						m = (e => k()(e) ? {} : Object.keys(e).reduce((t, a) => ({
							...t,
							...e[a].reduce((e, t) => ({
								...e,
								[t]: a
							}), {})
						}), {}))(a),
						[u, b] = Object(n.useState)(e.actions ? e.actions.reduce((t, o) => {
							const n = m[o];
							return {
								...t,
								[n]: e.actions.filter(e => a[n] && a[n].includes(e))
							}
						}, {}) : {}),
						h = I(u).length,
						g = !!h && h !== i.length,
						C = h === i.length,
						[x, f] = Object(n.useState)(""),
						v = Object(n.useCallback)(e => {
							e.target instanceof HTMLAnchorElement && t(Object(p.f)())
						}, [t]),
						w = Object(n.useCallback)((e, t) => {
							if (u[e] && 0 === t.length) {
								const t = {
									...u
								};
								return delete t[e], void b(t)
							}
							const a = {
								...u,
								[e]: t
							};
							b(a)
						}, [u]),
						M = Object(n.useCallback)(e => {
							b(C || g ? {} : a)
						}, [C, g, a]),
						F = Object(n.useCallback)(() => {
							e.onApply(C ? {
								actions: void 0
							} : {
								actions: I(u)
							}), e.onClose()
						}, [e, C, u]);
					if (k()(a)) return null;
					const y = ((e, t) => {
							if (t) {
								const a = t.toLowerCase();
								return Object.keys(e).reduce((t, o) => {
									const n = e[o].filter(e => {
										const t = d.a[e];
										return !!t && t().toString().toLowerCase().includes(a)
									});
									return n.length && (t[o] = n), t
								}, {})
							}
							return e
						})(a, x),
						A = (e => Object.keys(e).sort())(y);
					return s.a.createElement("div", {
						className: Object(l.a)(e.className, S.a.container)
					}, s.a.createElement("header", {
						className: S.a.header
					}, s.a.createElement("h3", {
						className: S.a.title
					}, o.fbt._("Actions", null, {
						hk: "2VlmHY"
					})), s.a.createElement(N.a, {
						className: S.a.closeBtn,
						onClick: e.onClose
					})), s.a.createElement(E.a, {
						className: S.a.searchBar,
						autoFocus: !0,
						onTextChange: e => {
							const t = e.currentTarget.value;
							f(t)
						},
						placeholder: o.fbt._("Search Actions", null, {
							hk: "48XSyA"
						}),
						value: x
					}), s.a.createElement("div", {
						role: "menu",
						className: S.a.list,
						onClick: v
					}, !x && s.a.createElement(_.a, {
						className: S.a.selectAllRow,
						name: o.fbt._("Select all", null, {
							hk: "3sUGlp"
						}),
						title: o.fbt._("Select all", null, {
							hk: "3sUGlp"
						}),
						selected: C,
						isHalfSelected: g,
						onToggle: M
					}), A.map(e => s.a.createElement(D, {
						key: e,
						actions: y[e],
						actionCategory: e,
						selectedActions: u[e] ? u[e] : [],
						isAutoExpanded: !!x,
						onChange: t => w(e, t.actions)
					}))), s.a.createElement("div", {
						className: S.a.bottom
					}, s.a.createElement(O.t, {
						className: S.a.applyBtn,
						role: "submit",
						onClick: F
					}, o.fbt._("Apply", null, {
						hk: "20mTH3"
					}))))
				},
				R = a("./src/reddit/components/CCM/ModerationLog/Filters/index.m.less"),
				U = a.n(R);
			const P = Object(i.a)(u.a),
				H = e => {
					e.nativeEvent.stopImmediatePropagation()
				};
			t.default = e => {
				let {
					actions: t,
					onApply: a
				} = e;
				const n = Object(c.a)(),
					i = Object(r.d)(),
					u = () => i(Object(m.i)()),
					C = Object(r.e)(e => Object(g.b)("mod-log-action-filter-dropdown")(e)),
					x = t ? s.a.createElement("span", {
						onClick: e => {
							e.stopPropagation(), u(), a({
								actions: void 0
							})
						}
					}, s.a.createElement(b.a, {
						className: U.a.clearBtn
					})) : s.a.createElement(h.a, null);
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: U.a.container,
					onClickCapture: H
				}, s.a.createElement("button", {
					"aria-expanded": C,
					"aria-label": o.fbt._("Start typing to filter the mod actions or use up and down to select.", null, {
						hk: "32A4KB"
					}),
					className: Object(l.a)(U.a.filter, {
						[U.a.selected]: !!t
					}),
					id: "mod-log-action-filter-dropdown",
					onClick: () => {
						i(Object(m.h)({
							tooltipId: "mod-log-action-filter-dropdown"
						})), n(Object(p.a)())
					},
					role: "navigation"
				}, s.a.createElement("span", {
					className: U.a.filterText
				}, (e => e && 0 !== e.length ? 1 === e.length ? d.a[e[0]] ? d.a[e[0]]() : e[0] : o.fbt._("{actionCount} actions", [o.fbt._param("actionCount", e.length.toString())], {
					hk: "1DhjPC"
				}) : o.fbt._("Actions", null, {
					hk: "1s4OJD"
				}))(t)), x), s.a.createElement(P, {
					tooltipId: "mod-log-action-filter-dropdown",
					isOpen: C,
					className: U.a.dropdown
				}, s.a.createElement(B, {
					className: U.a.dropdownContent,
					actions: t,
					onApply: e => {
						a(e), n(Object(p.b)())
					},
					onClose: u
				}))))
			}
		},
		"./src/reddit/components/CCM/ModerationLog/Filters/DateRangeDropdown/DateRangeFilter/index.m.less": function(e, t, a) {
			e.exports = {
				title: "_1hrs0uQBWCfzuDbM3WqZZ",
				rangeContainer: "_1FRVPsGymAZZnjjoEZbv5t",
				range: "_3CWjc-5xMSzyqnc21SMNr6",
				rangeTitle: "_1L5Hl88dq-XLjGEnw2g6Jx",
				rangeInput: "_2GjpMsvikkyRevmg3JyqqC",
				controls: "DDTpK7Eu3Xd5OWgfNhKPC",
				button: "_3zF0ocWRfr6FF-m0IkzIAi"
			}
		},
		"./src/reddit/components/CCM/ModerationLog/Filters/DateRangeDropdown/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var o = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				l = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/hooks/useTracking.ts"),
				i = a("./src/higherOrderComponents/asTooltip.tsx"),
				d = a("./src/reddit/actions/tooltip.ts"),
				m = a("./src/reddit/selectors/tooltip.ts"),
				u = a("./src/reddit/controls/Dropdown/index.tsx"),
				p = a("./src/reddit/helpers/trackers/modLog.ts"),
				b = a("./src/reddit/icons/fonts/Clear/index.tsx"),
				h = a("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				g = a("./src/reddit/controls/Button/index.tsx"),
				C = a("./src/reddit/components/CCM/ModerationLog/Filters/DateRangeDropdown/DateRangeFilter/index.m.less"),
				x = a.n(C);
			const f = e => {
				e.nativeEvent.stopImmediatePropagation()
			};
			var k = e => {
					const [t, a] = Object(n.useState)(e.startDate || ""), [r, l] = Object(n.useState)(e.endDate || ""), c = Object(n.useCallback)(e => {
						const {
							value: t
						} = e.currentTarget, o = new Date(t);
						r && o.valueOf() > new Date(r).valueOf() && l(t), a(t)
					}, [r]), i = Object(n.useCallback)(e => {
						const {
							value: o
						} = e.currentTarget, n = new Date(o);
						t && n.valueOf() < new Date(t).valueOf() && a(o), l(o)
					}, [t]), {
						onApply: d
					} = e, m = Object(n.useCallback)(() => {
						d({
							startDate: t || void 0,
							endDate: r || void 0
						})
					}, [t, r, d]), {
						className: u
					} = e;
					return s.a.createElement("div", {
						role: "menu",
						className: u,
						onClickCapture: f
					}, s.a.createElement("h5", {
						className: x.a.title
					}, o.fbt._("Select a time frame", null, {
						hk: "3fQ2m8"
					})), s.a.createElement("div", {
						className: x.a.rangeContainer
					}, s.a.createElement("div", {
						className: x.a.range
					}, s.a.createElement("h6", {
						className: x.a.rangeTitle
					}, o.fbt._("From", null, {
						hk: "1JlV6N"
					})), s.a.createElement("input", {
						className: x.a.rangeInput,
						type: "date",
						onChange: c,
						value: t,
						min: e.minDate,
						max: e.maxDate
					})), s.a.createElement("div", {
						className: x.a.range
					}, s.a.createElement("h6", {
						className: x.a.rangeTitle
					}, o.fbt._("To", null, {
						hk: "22MrPI"
					})), s.a.createElement("input", {
						className: x.a.rangeInput,
						type: "date",
						onChange: i,
						value: r,
						min: e.minDate,
						max: e.maxDate
					}))), s.a.createElement("div", {
						className: x.a.controls
					}, s.a.createElement(g.a, {
						className: x.a.button,
						kind: g.b.Button,
						priority: g.c.Secondary,
						text: o.fbt._("Cancel", null, {
							hk: "370pdF"
						}),
						onClick: e.onClose
					}), s.a.createElement(g.a, {
						className: x.a.button,
						role: "submit",
						kind: g.b.Button,
						priority: g.c.Primary,
						text: o.fbt._("Apply", null, {
							hk: "2yCpXC"
						}),
						onClick: m
					})))
				},
				j = a("./src/reddit/components/CCM/ModerationLog/Filters/index.m.less"),
				_ = a.n(j);
			const O = Object(i.a)(u.a),
				E = e => {
					e.nativeEvent.stopImmediatePropagation()
				};
			t.default = e => {
				let {
					startDate: t,
					endDate: a,
					maxDate: n,
					minDate: i,
					onApply: u,
					shouldShowDefaultTitle: g
				} = e;
				const C = Object(c.a)(),
					x = Object(r.d)(),
					f = () => {
						x(Object(d.i)())
					},
					j = Object(r.e)(e => Object(m.b)("mod-log-date-filter-dropdown")(e)),
					N = g ? s.a.createElement(h.a, null) : s.a.createElement("span", {
						onClick: e => {
							e.stopPropagation(), f(), u({
								startDate: void 0,
								endDate: void 0
							})
						}
					}, s.a.createElement(b.a, {
						className: _.a.clearBtn
					}));
				return s.a.createElement("div", {
					className: _.a.container,
					onClickCapture: E
				}, s.a.createElement("button", {
					"aria-expanded": j,
					"aria-label": o.fbt._("Select dates from and to and apply.", null, {
						hk: "2O0soE"
					}),
					className: Object(l.a)(_.a.filter, {
						[_.a.selected]: !g
					}),
					id: "mod-log-date-filter-dropdown",
					onClick: () => {
						x(Object(d.h)({
							tooltipId: "mod-log-date-filter-dropdown"
						})), C(Object(p.c)())
					},
					role: "navigation"
				}, s.a.createElement("span", {
					className: _.a.filterText
				}, ((e, t, a) => {
					const n = new Date(`${e} 00:00:00`).toLocaleDateString(),
						s = new Date(`${t} 00:00:00`).toLocaleDateString();
					return "Invalid Date" === n || "Invalid Date" === s || a ? o.fbt._("Time frame", null, {
						hk: "h4sav"
					}) : s === n ? n : n && s ? `${n}–${s}` : n ? o.fbt._("from {date from}", [o.fbt._param("date from", n)], {
						hk: "PMhkT"
					}) : s ? o.fbt._("to {date to}", [o.fbt._param("date to", s)], {
						hk: "2rh6Yj"
					}) : o.fbt._("Time frame", null, {
						hk: "1Mv1rs"
					})
				})(t, a, g)), N), s.a.createElement(O, {
					tooltipId: "mod-log-date-filter-dropdown",
					isOpen: j,
					className: _.a.dropdown
				}, s.a.createElement(k, {
					className: Object(l.a)(_.a.dropdownContent, _.a.dateDropdownContent),
					startDate: t,
					endDate: a,
					maxDate: n,
					minDate: i,
					onApply: e => {
						u(e), C(Object(p.d)())
					},
					onClose: f
				})))
			}
		},
		"./src/reddit/components/CCM/ModerationLog/Filters/FilterCheckboxRow/index.m.less": function(e, t, a) {
			e.exports = {
				row: "_18Js5vLpMX5saIHvfBM6g7",
				checkbox: "_2Mc_baan71YfAed0k1qnrQ",
				iconWrapper: "hHbAK41ZQx7_3UUMXRJ0G"
			}
		},
		"./src/reddit/components/CCM/ModerationLog/Filters/FilterCheckboxRow/index.tsx": function(e, t, a) {
			"use strict";
			var o = a("./node_modules/react/index.js"),
				n = a.n(o),
				s = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/components/UserIcon/index.tsx"),
				l = a("./src/reddit/controls/Checkbox/index.tsx"),
				c = a("./src/reddit/components/CCM/ModerationLog/Filters/FilterCheckboxRow/index.m.less"),
				i = a.n(c);
			t.a = e => {
				let {
					className: t,
					iconUrl: a,
					isHalfSelected: o,
					name: c,
					onToggle: d,
					selected: m,
					title: u
				} = e;
				return n.a.createElement("div", {
					className: Object(s.a)(t, i.a.row),
					onClick: d ? () => d(c) : void 0
				}, n.a.createElement(l.a, {
					className: i.a.checkbox,
					isCheckboxSelected: m,
					isHalfCheckboxSelected: o
				}), a && n.a.createElement("div", {
					className: i.a.iconWrapper
				}, n.a.createElement(r.a, {
					iconUrl: a,
					userName: c,
					isNSFW: !1
				})), u)
			}
		},
		"./src/reddit/components/CCM/ModerationLog/Filters/ModeratorsDropdown/ModeratorsFilter/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_35GR25zrhVtwuQBTuU69AZ",
				header: "o2rtmx71D-ZAoja2n8hn3",
				title: "_10ejNY-wpN1jWd-5AhMWLd",
				closeBtn: "_1y_YhmnQr3e69uwzzpHGV2",
				searchBar: "_2GCOfpZeC8lYaHpaN1BlH9",
				list: "_26s8z6VS-XjlXt7zkne06k",
				selectAllRow: "_3HcpfCb8aa7-VGLL4gtnGE",
				bottom: "_1Fg02kQlsnxC6a3i6j1y8j",
				applyBtn: "_22G5tPVkoYnW03gwPz4GRE"
			}
		},
		"./src/reddit/components/CCM/ModerationLog/Filters/ModeratorsDropdown/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var o = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				l = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/hooks/useTracking.ts"),
				i = a("./src/higherOrderComponents/asTooltip.tsx"),
				d = a("./src/reddit/actions/tooltip.ts"),
				m = a("./src/reddit/controls/Dropdown/index.tsx"),
				u = a("./src/reddit/helpers/trackers/modLog.ts"),
				p = a("./src/reddit/icons/fonts/Clear/index.tsx"),
				b = a("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				h = a("./src/reddit/selectors/tooltip.ts"),
				g = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./src/lib/constants/index.ts")),
				C = a("./src/reddit/selectors/moderationLog.ts"),
				x = a("./src/reddit/components/CCM/ModerationLog/Filters/FilterCheckboxRow/index.tsx"),
				f = a("./src/reddit/controls/Button/index.tsx"),
				k = a("./src/reddit/controls/SearchBar/index.tsx"),
				j = a("./src/reddit/icons/svgs/Close/index.tsx"),
				_ = a("./src/reddit/components/CCM/ModerationLog/Filters/ModeratorsDropdown/ModeratorsFilter/index.m.less"),
				O = a.n(_);
			var E = e => {
					let {
						className: t,
						moderatorNames: a,
						onApply: c,
						onClose: i,
						subredditId: d
					} = e;
					const m = Object(r.e)(e => Object(C.a)(e, d).sort((e, t) => {
							const a = e.name.toUpperCase(),
								o = t.name.toUpperCase();
							return a < o ? -1 : a > o ? 1 : 0
						})),
						u = e => {
							const t = [{
								name: "a",
								title: `${o.fbt._("Admins",null,{hk:"4mKRNI"})}`
							}, {
								name: "reddit",
								title: `${o.fbt._("Reddit",null,{hk:"2PddN0"})}`
							}, {
								name: g.m,
								title: `${o.fbt._("AutoModerator",null,{hk:"4wxc1W"})}`
							}, ...m.map(e => ({
								name: e.name,
								title: `u/${e.name}`,
								iconUrl: e.icon.url
							}))];
							if (e) {
								const a = e.toLowerCase();
								return t.filter(e => e.title.toLowerCase().includes(a))
							}
							return t
						},
						[p, b] = Object(n.useState)(""),
						[h, _] = Object(n.useState)(a ? a.reduce((e, t) => ({
							...e,
							[t]: !0
						}), {}) : {}),
						E = u(""),
						N = Object.keys(h).length,
						v = !!N && N !== E.length,
						w = N === E.length,
						M = Object(n.useCallback)(e => {
							if (h[e]) {
								const t = {
									...h
								};
								return delete t[e], void _(t)
							}
							_({
								...h,
								[e]: !0
							})
						}, [h]),
						F = Object(n.useCallback)(e => {
							_(w || v ? {} : E.reduce((e, t) => (e[t.name] = !0, e), {}))
						}, [w, v, E]),
						y = Object(n.useCallback)(() => {
							const e = Object.keys(h);
							c(w ? {
								moderatorNames: []
							} : {
								moderatorNames: e
							}), i()
						}, [h, c, i, w]),
						A = u(p);
					return s.a.createElement("div", {
						className: Object(l.a)(t, O.a.container)
					}, s.a.createElement("header", {
						className: O.a.header
					}, s.a.createElement("h3", {
						className: O.a.title
					}, o.fbt._("Moderators", null, {
						hk: "2mrndF"
					})), s.a.createElement(j.a, {
						className: O.a.closeBtn,
						onClick: i
					})), s.a.createElement(k.a, {
						className: O.a.searchBar,
						autoFocus: !0,
						onTextChange: e => {
							const t = e.currentTarget.value;
							b(t)
						},
						placeholder: o.fbt._("Search Moderators", null, {
							hk: "1MQPef"
						}),
						value: p
					}), s.a.createElement("div", {
						role: "menu",
						className: O.a.list
					}, !p && s.a.createElement(x.a, {
						className: O.a.selectAllRow,
						name: o.fbt._("Select all", null, {
							hk: "UVcST"
						}),
						title: o.fbt._("Select all", null, {
							hk: "UVcST"
						}),
						selected: w,
						isHalfSelected: v,
						onToggle: F
					}), A.map(e => {
						let {
							name: t,
							iconUrl: a,
							title: o
						} = e;
						return s.a.createElement(x.a, {
							key: `${o}_${!!h[t]}`,
							name: t,
							title: o,
							iconUrl: a,
							selected: !!h[t],
							isHalfSelected: !1,
							onToggle: M
						})
					})), s.a.createElement("div", {
						className: O.a.bottom
					}, s.a.createElement(f.t, {
						className: O.a.applyBtn,
						role: "submit",
						onClick: y
					}, o.fbt._("Apply", null, {
						hk: "20mTH3"
					}))))
				},
				N = a("./src/reddit/components/CCM/ModerationLog/Filters/index.m.less"),
				v = a.n(N);
			const w = Object(i.a)(m.a),
				M = e => {
					e.nativeEvent.stopImmediatePropagation()
				};
			t.default = e => {
				let {
					moderatorNames: t,
					subredditId: a,
					onApply: n
				} = e;
				const i = Object(c.a)(),
					m = Object(r.d)(),
					g = () => m(Object(d.i)()),
					C = Object(r.e)(e => Object(h.b)("mod-log-moderator-filter-dropdown")(e)),
					x = t ? s.a.createElement("span", {
						onClick: e => {
							e.stopPropagation(), g(), n({
								moderatorNames: void 0
							})
						}
					}, s.a.createElement(p.a, {
						className: v.a.clearBtn
					})) : s.a.createElement(b.a, null);
				return s.a.createElement("div", {
					className: v.a.container,
					onClickCapture: M
				}, s.a.createElement("button", {
					"aria-expanded": C,
					"aria-label": o.fbt._("Start typing to filter moderators or use up and down to select.", null, {
						hk: "4ff0MW"
					}),
					className: Object(l.a)(v.a.filter, {
						[v.a.selected]: !!t
					}),
					id: "mod-log-moderator-filter-dropdown",
					onClick: () => {
						m(Object(d.h)({
							tooltipId: "mod-log-moderator-filter-dropdown"
						})), i(Object(u.e)())
					},
					role: "navigation"
				}, s.a.createElement("span", {
					className: v.a.filterText
				}, (e => e && 0 !== e.length ? 1 === e.length ? "a" === e[0] ? o.fbt._("Admins", null, {
					hk: "1qJDMA"
				}) : e[0] : o.fbt._("{modCount} moderators", [o.fbt._param("modCount", e.length.toString())], {
					hk: "302l1I"
				}) : o.fbt._("Moderator", null, {
					hk: "27CDKl"
				}))(t)), x), s.a.createElement(w, {
					tooltipId: "mod-log-moderator-filter-dropdown",
					isOpen: C,
					className: v.a.dropdown
				}, s.a.createElement(E, {
					className: v.a.dropdownContent,
					moderatorNames: t,
					onApply: e => {
						n(e), i(Object(u.e)())
					},
					onClose: g,
					subredditId: a
				})))
			}
		},
		"./src/reddit/components/CCM/ModerationLog/Filters/PostUrlsDropdown/PostUrlsFilter/index.m.less": function(e, t, a) {
			e.exports = {
				container: "FcK_lPDrobVBRdwd_YxT5",
				header: "_3AkFa-C0WChXbkF9I3jB69",
				title: "oY3RJg8yuQeIggqZI7UUh",
				closeBtn: "_3WxRb3b2jRqO7VLXCkbamk",
				input: "_1nNjqHQRjiFOT10Bs--drv",
				error: "BhcA2J0x7RFommf1-p5i-",
				bottom: "bVGd-kq0lbFARHL_Wp3cm",
				applyBtn: "F5Un1RalK9f3e0XGPL9bz"
			}
		},
		"./src/reddit/components/CCM/ModerationLog/Filters/PostUrlsDropdown/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var o = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				l = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/hooks/useTracking.ts"),
				i = a("./src/higherOrderComponents/asTooltip.tsx"),
				d = a("./src/reddit/actions/tooltip.ts"),
				m = a("./src/reddit/controls/Dropdown/index.tsx"),
				u = a("./src/reddit/helpers/trackers/modLog.ts"),
				p = a("./src/reddit/icons/fonts/Clear/index.tsx"),
				b = a("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				h = a("./src/reddit/selectors/tooltip.ts"),
				g = a("./src/reddit/helpers/pixels.ts"),
				C = a("./src/reddit/helpers/structuredStyles/validators.ts"),
				x = a("./src/reddit/constants/keycodes.ts"),
				f = a("./src/reddit/controls/Button/index.tsx"),
				k = a("./src/reddit/icons/svgs/Close/index.tsx"),
				j = a("./src/reddit/components/CCM/ModerationLog/Filters/PostUrlsDropdown/PostUrlsFilter/index.m.less"),
				_ = a.n(j);
			var O = e => {
					let {
						className: t,
						postUrls: a,
						onApply: r,
						onClose: c
					} = e;
					const i = Object(n.useRef)(null),
						[d, m] = Object(n.useState)(!0),
						u = Object(n.useCallback)(async () => {
							var e;
							const t = (null === (e = i.current) || void 0 === e ? void 0 : e.value) || void 0;
							if (!t) return;
							const a = t.trim().split("?")[0],
								o = !!a && Object(C.g)(a) === C.d.Valid && Object(g.b)(a) && a.includes("/comments/");
							o && (r({
								postUrls: [a]
							}), c()), m(o)
						}, [r, c]);
					return s.a.createElement("div", {
						className: Object(l.a)(t, _.a.container)
					}, s.a.createElement("header", {
						className: _.a.header
					}, s.a.createElement("h3", {
						className: _.a.title
					}, o.fbt._("Input Post Url", null, {
						hk: "3GUZLy"
					})), s.a.createElement(k.a, {
						className: _.a.closeBtn,
						onClick: c
					})), s.a.createElement("input", {
						className: _.a.input,
						autoFocus: !0,
						type: "text",
						onKeyPress: e => {
							e.key !== x.b.Enter ? (m(!0), e.key === x.b.Escape && c()) : u()
						},
						placeholder: o.fbt._("Enter URL", null, {
							hk: "1XJ7ks"
						}),
						ref: i,
						defaultValue: a ? a[0] : "",
						maxLength: 200
					}), !d && s.a.createElement("div", {
						className: _.a.error
					}, o.fbt._("Invalid post url. Make sure this url is a link to a post.", null, {
						hk: "2hysMZ"
					})), s.a.createElement("div", {
						className: _.a.bottom
					}, s.a.createElement(f.t, {
						className: _.a.applyBtn,
						role: "submit",
						onClick: u
					}, o.fbt._("Apply", null, {
						hk: "20mTH3"
					}))))
				},
				E = a("./src/reddit/components/CCM/ModerationLog/Filters/index.m.less"),
				N = a.n(E);
			const v = Object(i.a)(m.a),
				w = e => {
					e.nativeEvent.stopImmediatePropagation()
				};
			t.default = e => {
				let {
					postUrls: t,
					onApply: a
				} = e;
				const n = Object(c.a)(),
					i = Object(r.d)(),
					m = () => i(Object(d.i)()),
					g = Object(r.e)(e => Object(h.b)("mod-log-posturl-filter-dropdown")(e)),
					C = t ? s.a.createElement("span", {
						onClick: e => {
							e.stopPropagation(), m(), a({
								postUrls: void 0
							})
						}
					}, s.a.createElement(p.a, {
						className: N.a.clearBtn
					})) : s.a.createElement(b.a, null);
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: N.a.container,
					onClickCapture: w
				}, s.a.createElement("button", {
					"aria-expanded": g,
					"aria-label": o.fbt._("Start typing to filter post url.", null, {
						hk: "Wu1vP"
					}),
					className: Object(l.a)(N.a.filter, {
						[N.a.selected]: !!t
					}),
					id: "mod-log-posturl-filter-dropdown",
					onClick: () => {
						i(Object(d.h)({
							tooltipId: "mod-log-posturl-filter-dropdown"
						})), n(Object(u.m)())
					},
					role: "navigation"
				}, s.a.createElement("span", {
					className: N.a.filterText
				}, (e => {
					if (!e || !e.length) return o.fbt._("Post url", null, {
						hk: "1mNrvU"
					});
					if (1 === e.length) {
						const t = (e[0].split("/comments/")[1] || "").split("/")[0];
						return o.fbt._("Post url: {postId}", [o.fbt._param("postId", t)], {
							hk: "35gRZ3"
						})
					}
					return o.fbt._("{postUrlCount} post urls", [o.fbt._param("postUrlCount", e.length.toString())], {
						hk: "1lch8o"
					})
				})(t)), C), s.a.createElement(v, {
					tooltipId: "mod-log-posturl-filter-dropdown",
					isOpen: g,
					className: N.a.dropdown
				}, s.a.createElement(O, {
					className: N.a.dropdownContent,
					postUrls: t,
					onApply: e => {
						a(e), n(Object(u.n)())
					},
					onClose: m
				}))))
			}
		},
		"./src/reddit/components/CCM/ModerationLog/Filters/UsernameDropdown/UsernameFilter/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_3xM41-8w-ptmg8Q0QJrMu3",
				header: "_3OGOzHnA5ZNyVyGiJ4rMPG",
				title: "_3R983CxPuKw8zaTnNQUrot",
				closeBtn: "_23BPoXtwtK4T0ReoCkIxGJ",
				input: "_2zh0UW_CeEffQJruFqNod_",
				bottom: "_3xz_i3hwls-bKnQtM_q2bg",
				applyBtn: "_2PwptjUX1RO1wjfs8Xgvv8"
			}
		},
		"./src/reddit/components/CCM/ModerationLog/Filters/UsernameDropdown/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var o = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				l = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/hooks/useTracking.ts"),
				i = a("./src/reddit/helpers/name/index.ts"),
				d = a("./src/higherOrderComponents/asTooltip.tsx"),
				m = a("./src/reddit/actions/tooltip.ts"),
				u = a("./src/reddit/controls/Dropdown/index.tsx"),
				p = a("./src/reddit/helpers/trackers/modLog.ts"),
				b = a("./src/reddit/icons/fonts/Clear/index.tsx"),
				h = a("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				g = a("./src/reddit/selectors/tooltip.ts"),
				C = a("./src/reddit/hooks/useGqlContext.ts"),
				x = a("./src/reddit/constants/keycodes.ts"),
				f = a("./src/reddit/endpoints/redditor/index.ts"),
				k = a("./src/reddit/controls/Button/index.tsx"),
				j = a("./src/reddit/icons/svgs/Close/index.tsx"),
				_ = a("./src/reddit/components/CCM/ModerationLog/Filters/UsernameDropdown/UsernameFilter/index.m.less"),
				O = a.n(_);
			var E = e => {
					let {
						className: t,
						userName: a,
						onApply: r,
						onClose: c
					} = e;
					const d = Object(n.useRef)(null),
						m = Object(C.a)(),
						u = Object(n.useCallback)(async () => {
							var e;
							const t = (null === (e = d.current) || void 0 === e ? void 0 : e.value) || void 0;
							if (!t) return;
							c();
							const a = Object(i.j)(t),
								o = await Object(f.a)(m(), {
									name: a
								});
							r(o ? {
								userName: a,
								userId: o
							} : {
								userName: a,
								userId: "no_id"
							})
						}, [r, c, m]);
					return s.a.createElement("div", {
						className: Object(l.a)(t, O.a.container)
					}, s.a.createElement("header", {
						className: O.a.header
					}, s.a.createElement("h3", {
						className: O.a.title
					}, o.fbt._("Username", null, {
						hk: "lucEB"
					})), s.a.createElement(j.a, {
						className: O.a.closeBtn,
						onClick: c
					})), s.a.createElement("input", {
						className: O.a.input,
						autoFocus: !0,
						type: "text",
						onKeyPress: e => {
							e.key !== x.b.Enter ? e.key === x.b.Escape && c() : u()
						},
						placeholder: o.fbt._("Enter exact username", null, {
							hk: "2VEfHB"
						}),
						ref: d,
						defaultValue: a ? Object(i.e)(a) : "",
						maxLength: 22
					}), s.a.createElement("div", {
						className: O.a.bottom
					}, s.a.createElement(k.t, {
						className: O.a.applyBtn,
						role: "submit",
						onClick: u
					}, o.fbt._("Apply", null, {
						hk: "20mTH3"
					}))))
				},
				N = a("./src/reddit/components/CCM/ModerationLog/Filters/index.m.less"),
				v = a.n(N);
			const w = Object(d.a)(u.a),
				M = e => {
					e.nativeEvent.stopImmediatePropagation()
				};
			t.default = e => {
				let {
					userName: t,
					onApply: a
				} = e;
				const n = Object(c.a)(),
					d = Object(r.d)(),
					u = () => d(Object(m.i)()),
					C = Object(r.e)(e => Object(g.b)("mod-log-username-filter-dropdown")(e)),
					x = t ? s.a.createElement("span", {
						onClick: e => {
							e.stopPropagation(), u(), a({
								userName: void 0,
								userId: void 0
							})
						}
					}, s.a.createElement(b.a, {
						className: v.a.clearBtn
					})) : s.a.createElement(h.a, null);
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: v.a.container,
					onClickCapture: M
				}, s.a.createElement("button", {
					"aria-expanded": C,
					"aria-label": o.fbt._("Start typing to filter user name.", null, {
						hk: "TlFcF"
					}),
					className: Object(l.a)(v.a.filter, {
						[v.a.selected]: !!t
					}),
					id: "mod-log-username-filter-dropdown",
					onClick: () => {
						d(Object(m.h)({
							tooltipId: "mod-log-username-filter-dropdown"
						})), n(Object(p.o)())
					},
					role: "navigation"
				}, s.a.createElement("span", {
					className: v.a.filterText
				}, (e => e ? Object(i.e)(e) : o.fbt._("Username", null, {
					hk: "11kann"
				}))(t)), x), s.a.createElement(w, {
					tooltipId: "mod-log-username-filter-dropdown",
					isOpen: C,
					className: v.a.dropdown
				}, s.a.createElement(E, {
					className: v.a.dropdownContent,
					userName: t,
					onApply: e => {
						a(e), n(Object(p.p)())
					},
					onClose: u
				}))))
			}
		},
		"./src/reddit/components/CCM/ModerationLog/Filters/index.m.less": function(e, t, a) {
			e.exports = {
				dropdownRow: "_3RbHuy9TCbMmIED8eY3a9e",
				search: "_1xYsI8I9JhcRzqRohvXpXZ",
				container: "_2F0MXFODdDz5cD8CKK0cOc",
				filter: "_10HYmOROFP2h37gVoirHIh",
				selected: "_1FvK7cnmXWqlwXrG__Zex3",
				filterText: "_22h5hG1lFaPAq5qg0lfyUf",
				dropdown: "_2OaF4J9qmkullK2dza2Trs",
				dropdownContent: "_2PRAn6VsmdoWCrG5Z_Lh_G",
				dateDropdownContent: "_1XY9PjGY2HvsuzzVObW48M",
				clearBtn: "_209BGF40WyOUdhK_u4UyTR"
			}
		},
		"./src/reddit/controls/SearchBar/index.m.less": function(e, t, a) {
			e.exports = {
				searchContainer: "_13yLxNALfY3_F48PYybgUr",
				search: "RxQA71ktKLBiPThTT7ita",
				mRightAlignedIcon: "_1NR83qzzPFX9KcVm-fxGFg",
				searchIconContainer: "_1IUrembT3LfQzzy388S8eF",
				mClickable: "_1K9n38-jQENV0_njgPIo_x",
				mRightAligned: "_1fLhMe5y6XbNg-lgHQrh5e"
			}
		},
		"./src/reddit/controls/SearchBar/index.tsx": function(e, t, a) {
			"use strict";
			var o = a("./node_modules/react/index.js"),
				n = a.n(o),
				s = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/icons/svgs/Search/index.tsx"),
				l = a("./src/reddit/controls/SearchBar/index.m.less"),
				c = a.n(l);
			t.a = e => n.a.createElement("label", {
				className: Object(s.a)(c.a.searchContainer, e.className)
			}, n.a.createElement("input", {
				className: Object(s.a)(c.a.search, {
					[c.a.mRightAlignedIcon]: e.rightAlignedIcon
				}),
				autoFocus: e.autoFocus,
				type: "text",
				onChange: e.onTextChange,
				onKeyPress: e.onKeyPress,
				placeholder: e.placeholder,
				ref: e.innerRef,
				value: e.value
			}), n.a.createElement("div", {
				className: Object(s.a)(c.a.searchIconContainer, {
					[c.a.mClickable]: !!e.onSearch,
					[c.a.mRightAligned]: e.rightAlignedIcon
				}),
				role: e.onSearch && "submit",
				onClick: e.onSearch
			}, n.a.createElement(r.a, null)))
		},
		"./src/reddit/helpers/structuredStyles/validators.ts": function(e, t, a) {
			"use strict";
			a.d(t, "d", (function() {
				return n
			})), a.d(t, "g", (function() {
				return s
			})), a.d(t, "b", (function() {
				return r
			})), a.d(t, "c", (function() {
				return l
			})), a.d(t, "f", (function() {
				return c
			})), a.d(t, "a", (function() {
				return i
			})), a.d(t, "e", (function() {
				return d
			}));
			var o = a("./src/lib/linkMatchers/index.ts");
			var n;
			! function(e) {
				e[e.Valid = 0] = "Valid", e[e.NoUrl = 1] = "NoUrl", e[e.TooShort = 2] = "TooShort", e[e.Invalid = 3] = "Invalid"
			}(n || (n = {}));
			const s = e => {
					if (!e) return n.NoUrl;
					if (e.length < 4) return n.TooShort;
					const t = Object(o.h)(o.f, e);
					return t ? "ftp:" === t.schema ? n.Invalid : "mailto:" === t.schema ? n.Invalid : n.Valid : n.Invalid
				},
				r = 20;
			var l;
			! function(e) {
				e[e.Valid = 0] = "Valid", e[e.TooShort = 1] = "TooShort", e[e.TooLong = 2] = "TooLong"
			}(l || (l = {}));
			const c = e => e ? e.length > r ? l.TooLong : l.Valid : l.TooShort;
			var i;
			! function(e) {
				e[e.Valid = 0] = "Valid", e[e.TooShort = 1] = "TooShort"
			}(i || (i = {}));
			const d = e => e.length ? i.Valid : i.TooShort
		},
		"./src/reddit/icons/fonts/Clear/index.tsx": function(e, t, a) {
			"use strict";
			var o = a("./node_modules/react/index.js"),
				n = a.n(o),
				s = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: Object(s.a)(Object(r.b)("clear", e.isFilled), e.className)
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModerationLogFilters.3d97564d2197a2c6b5b5.js.map