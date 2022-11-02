// https://www.redditstatic.com/desktop2x/ModerationLogFilters.98c7dc90309ea9e94527.js
// Retrieved at 11/2/2022, 1:30:04 PM by Reddit Dataminer v1.0.0
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
				p = a("./src/reddit/controls/Dropdown/index.tsx"),
				u = a("./src/reddit/helpers/trackers/modLog.ts"),
				b = a("./src/reddit/icons/fonts/Clear/index.tsx"),
				C = a("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				g = a("./src/reddit/selectors/tooltip.ts"),
				x = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./node_modules/lodash/flatten.js")),
				h = a.n(x),
				f = a("./node_modules/lodash/isEmpty.js"),
				k = a.n(f),
				_ = a("./src/reddit/selectors/moderationLog.ts"),
				j = a("./src/reddit/components/CCM/ModerationLog/Filters/FilterCheckboxRow/index.tsx"),
				O = a("./src/reddit/controls/Button/index.tsx"),
				E = a("./src/reddit/controls/SearchBar/index.tsx"),
				N = a("./src/reddit/icons/svgs/Close/index.tsx"),
				w = a("./src/reddit/components/CCM/ModerationLog/ModerationLogItem/ActionCategory/index.tsx"),
				v = a("./src/reddit/controls/Checkbox/index.tsx"),
				M = a("./src/reddit/components/CCM/ModerationLog/Filters/ActionsDropdown/ActionsTreeFilter/ActionCategoryRow/index.m.less"),
				A = a.n(M);
			var D = e => {
					let {
						actionCategory: t,
						className: a,
						isHalfSelected: o,
						onClick: n,
						onToggle: r,
						selected: c
					} = e;
					return s.a.createElement("div", {
						className: Object(l.a)(a, A.a.row),
						onClick: n ? () => n(t) : void 0
					}, s.a.createElement(v.a, {
						className: A.a.checkbox,
						isCheckboxSelected: c,
						isHalfCheckboxSelected: o,
						toggleCheckbox: r ? () => r(t) : void 0
					}), s.a.createElement(w.a, {
						category: t
					}), s.a.createElement(C.a, {
						className: A.a.arrow
					}))
				},
				F = a("./src/reddit/components/CCM/ModerationLog/Filters/ActionsDropdown/ActionsTreeFilter/ActionBranch/index.m.less"),
				y = a.n(F);
			var T = e => {
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
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(D, {
						actionCategory: e.actionCategory,
						selected: r,
						isHalfSelected: l,
						onToggle: i,
						onClick: m
					}), !t && e.actions.map(t => s.a.createElement(j.a, {
						className: y.a.actionRow,
						key: `${e.actionCategory}_${t}`,
						name: t,
						title: d.b[t] ? d.b[t]() : t,
						selected: e.selectedActions.includes(t),
						isHalfSelected: !1,
						onToggle: c
					})))
				},
				L = a("./src/reddit/components/CCM/ModerationLog/Filters/ActionsDropdown/ActionsTreeFilter/index.m.less"),
				S = a.n(L);
			const B = e => h()(Object.keys(e).map(t => e[t]));
			var I = e => {
					const t = Object(c.a)(),
						a = Object(r.e)(e => Object(_.b)(e)),
						i = B(a),
						m = (e => k()(e) ? {} : Object.keys(e).reduce((t, a) => ({
							...t,
							...e[a].reduce((e, t) => ({
								...e,
								[t]: a
							}), {})
						}), {}))(a),
						[p, b] = Object(n.useState)(e.actions ? e.actions.reduce((t, o) => {
							const n = m[o];
							return {
								...t,
								[n]: e.actions.filter(e => a[n] && a[n].includes(e))
							}
						}, {}) : {}),
						C = B(p).length,
						g = !!C && C !== i.length,
						x = C === i.length,
						[h, f] = Object(n.useState)(""),
						w = Object(n.useCallback)(e => {
							e.target instanceof HTMLAnchorElement && t(Object(u.g)())
						}, [t]),
						v = Object(n.useCallback)((e, t) => {
							if (p[e] && 0 === t.length) {
								const t = {
									...p
								};
								return delete t[e], void b(t)
							}
							const a = {
								...p,
								[e]: t
							};
							b(a)
						}, [p]),
						M = Object(n.useCallback)(e => {
							b(x || g ? {} : a)
						}, [x, g, a]),
						A = Object(n.useCallback)(() => {
							e.onApply(x ? {
								actions: void 0
							} : {
								actions: B(p)
							}), e.onClose()
						}, [e, x, p]);
					if (k()(a)) return null;
					const D = ((e, t) => {
							if (t) {
								const a = t.toLowerCase();
								return Object.keys(e).reduce((t, o) => {
									const n = e[o].filter(e => {
										const t = d.b[e];
										return !!t && t().toString().toLowerCase().includes(a)
									});
									return n.length && (t[o] = n), t
								}, {})
							}
							return e
						})(a, h),
						F = (e => Object.keys(e).sort())(D);
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
						value: h
					}), s.a.createElement("div", {
						role: "menu",
						className: S.a.list,
						onClick: w
					}, !h && s.a.createElement(j.a, {
						className: S.a.selectAllRow,
						name: o.fbt._("Select all", null, {
							hk: "3sUGlp"
						}),
						title: o.fbt._("Select all", null, {
							hk: "3sUGlp"
						}),
						selected: x,
						isHalfSelected: g,
						onToggle: M
					}), F.map(e => s.a.createElement(T, {
						key: e,
						actions: D[e],
						actionCategory: e,
						selectedActions: p[e] ? p[e] : [],
						isAutoExpanded: !!h,
						onChange: t => v(e, t.actions)
					}))), s.a.createElement("div", {
						className: S.a.bottom
					}, s.a.createElement(O.t, {
						className: S.a.applyBtn,
						role: "submit",
						onClick: A
					}, o.fbt._("Apply", null, {
						hk: "20mTH3"
					}))))
				},
				R = a("./src/reddit/components/CCM/ModerationLog/Filters/index.m.less"),
				H = a.n(R);
			const U = Object(i.a)(p.a),
				P = e => {
					e.nativeEvent.stopImmediatePropagation()
				};
			t.default = e => {
				let {
					actions: t,
					onApply: a
				} = e;
				const n = Object(c.a)(),
					i = Object(r.d)(),
					p = () => i(Object(m.i)()),
					x = Object(r.e)(e => Object(g.b)("mod-log-action-filter-dropdown")(e)),
					h = t ? s.a.createElement("span", {
						onClick: e => {
							e.stopPropagation(), p(), a({
								actions: void 0
							})
						}
					}, s.a.createElement(b.a, {
						className: H.a.clearBtn
					})) : s.a.createElement(C.a, null);
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: H.a.container,
					onClickCapture: P
				}, s.a.createElement("button", {
					"aria-expanded": x,
					"aria-label": o.fbt._("Start typing to filter the mod actions or use up and down to select.", null, {
						hk: "32A4KB"
					}),
					className: Object(l.a)(H.a.filter, {
						[H.a.selected]: !!t
					}),
					id: "mod-log-action-filter-dropdown",
					onClick: () => {
						i(Object(m.h)({
							tooltipId: "mod-log-action-filter-dropdown"
						})), n(Object(u.a)())
					},
					role: "navigation"
				}, s.a.createElement("span", {
					className: H.a.filterText
				}, (e => e && 0 !== e.length ? 1 === e.length ? d.b[e[0]] ? d.b[e[0]]() : e[0] : o.fbt._("{actionCount} actions", [o.fbt._param("actionCount", e.length.toString())], {
					hk: "1DhjPC"
				}) : o.fbt._("Actions", null, {
					hk: "1s4OJD"
				}))(t)), h), s.a.createElement(U, {
					tooltipId: "mod-log-action-filter-dropdown",
					isOpen: x,
					className: H.a.dropdown
				}, s.a.createElement(I, {
					className: H.a.dropdownContent,
					actions: t,
					onApply: e => {
						a(e), n(Object(u.c)())
					},
					onClose: p
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
				p = a("./src/reddit/controls/Dropdown/index.tsx"),
				u = a("./src/reddit/helpers/trackers/modLog.ts"),
				b = a("./src/reddit/icons/fonts/Clear/index.tsx"),
				C = a("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				g = a("./src/reddit/controls/Button/index.tsx"),
				x = a("./src/reddit/components/CCM/ModerationLog/Filters/DateRangeDropdown/DateRangeFilter/index.m.less"),
				h = a.n(x);
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
						className: p
					} = e;
					return s.a.createElement("div", {
						role: "menu",
						className: p,
						onClickCapture: f
					}, s.a.createElement("h5", {
						className: h.a.title
					}, o.fbt._("Select a time frame", null, {
						hk: "3fQ2m8"
					})), s.a.createElement("div", {
						className: h.a.rangeContainer
					}, s.a.createElement("div", {
						className: h.a.range
					}, s.a.createElement("h6", {
						className: h.a.rangeTitle
					}, o.fbt._("From", null, {
						hk: "1JlV6N"
					})), s.a.createElement("input", {
						className: h.a.rangeInput,
						type: "date",
						onChange: c,
						value: t,
						min: e.minDate,
						max: e.maxDate
					})), s.a.createElement("div", {
						className: h.a.range
					}, s.a.createElement("h6", {
						className: h.a.rangeTitle
					}, o.fbt._("To", null, {
						hk: "22MrPI"
					})), s.a.createElement("input", {
						className: h.a.rangeInput,
						type: "date",
						onChange: i,
						value: r,
						min: e.minDate,
						max: e.maxDate
					}))), s.a.createElement("div", {
						className: h.a.controls
					}, s.a.createElement(g.a, {
						className: h.a.button,
						kind: g.b.Button,
						priority: g.c.Secondary,
						text: o.fbt._("Cancel", null, {
							hk: "370pdF"
						}),
						onClick: e.onClose
					}), s.a.createElement(g.a, {
						className: h.a.button,
						role: "submit",
						kind: g.b.Button,
						priority: g.c.Primary,
						text: o.fbt._("Apply", null, {
							hk: "2yCpXC"
						}),
						onClick: m
					})))
				},
				_ = a("./src/reddit/components/CCM/ModerationLog/Filters/index.m.less"),
				j = a.n(_);
			const O = Object(i.a)(p.a),
				E = e => {
					e.nativeEvent.stopImmediatePropagation()
				};
			t.default = e => {
				let {
					startDate: t,
					endDate: a,
					maxDate: n,
					minDate: i,
					onApply: p,
					shouldShowDefaultTitle: g
				} = e;
				const x = Object(c.a)(),
					h = Object(r.d)(),
					f = () => {
						h(Object(d.i)())
					},
					_ = Object(r.e)(e => Object(m.b)("mod-log-date-filter-dropdown")(e)),
					N = g ? s.a.createElement(C.a, null) : s.a.createElement("span", {
						onClick: e => {
							e.stopPropagation(), f(), p({
								startDate: void 0,
								endDate: void 0
							})
						}
					}, s.a.createElement(b.a, {
						className: j.a.clearBtn
					}));
				return s.a.createElement("div", {
					className: j.a.container,
					onClickCapture: E
				}, s.a.createElement("button", {
					"aria-expanded": _,
					"aria-label": o.fbt._("Select dates from and to and apply.", null, {
						hk: "2O0soE"
					}),
					className: Object(l.a)(j.a.filter, {
						[j.a.selected]: !g
					}),
					id: "mod-log-date-filter-dropdown",
					onClick: () => {
						h(Object(d.h)({
							tooltipId: "mod-log-date-filter-dropdown"
						})), x(Object(u.d)())
					},
					role: "navigation"
				}, s.a.createElement("span", {
					className: j.a.filterText
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
					isOpen: _,
					className: j.a.dropdown
				}, s.a.createElement(k, {
					className: Object(l.a)(j.a.dropdownContent, j.a.dateDropdownContent),
					startDate: t,
					endDate: a,
					maxDate: n,
					minDate: i,
					onApply: e => {
						p(e), x(Object(u.e)())
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
					title: p
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
				})), p)
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
				p = a("./src/reddit/helpers/trackers/modLog.ts"),
				u = a("./src/reddit/icons/fonts/Clear/index.tsx"),
				b = a("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				C = a("./src/reddit/selectors/tooltip.ts"),
				g = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./src/lib/constants/index.ts")),
				x = a("./src/reddit/selectors/moderationLog.ts"),
				h = a("./src/reddit/components/CCM/ModerationLog/Filters/FilterCheckboxRow/index.tsx"),
				f = a("./src/reddit/controls/Button/index.tsx"),
				k = a("./src/reddit/controls/SearchBar/index.tsx"),
				_ = a("./src/reddit/icons/svgs/Close/index.tsx"),
				j = a("./src/reddit/components/CCM/ModerationLog/Filters/ModeratorsDropdown/ModeratorsFilter/index.m.less"),
				O = a.n(j);
			var E = e => {
					let {
						className: t,
						moderatorNames: a,
						onApply: c,
						onClose: i,
						subredditId: d
					} = e;
					const m = Object(r.e)(e => Object(x.a)(e, d).sort((e, t) => {
							const a = e.name.toUpperCase(),
								o = t.name.toUpperCase();
							return a < o ? -1 : a > o ? 1 : 0
						})),
						p = e => {
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
						[u, b] = Object(n.useState)(""),
						[C, j] = Object(n.useState)(a ? a.reduce((e, t) => ({
							...e,
							[t]: !0
						}), {}) : {}),
						E = p(""),
						N = Object.keys(C).length,
						w = !!N && N !== E.length,
						v = N === E.length,
						M = Object(n.useCallback)(e => {
							if (C[e]) {
								const t = {
									...C
								};
								return delete t[e], void j(t)
							}
							j({
								...C,
								[e]: !0
							})
						}, [C]),
						A = Object(n.useCallback)(e => {
							j(v || w ? {} : E.reduce((e, t) => (e[t.name] = !0, e), {}))
						}, [v, w, E]),
						D = Object(n.useCallback)(() => {
							const e = Object.keys(C);
							c(v ? {
								moderatorNames: []
							} : {
								moderatorNames: e
							}), i()
						}, [C, c, i, v]),
						F = p(u);
					return s.a.createElement("div", {
						className: Object(l.a)(t, O.a.container)
					}, s.a.createElement("header", {
						className: O.a.header
					}, s.a.createElement("h3", {
						className: O.a.title
					}, o.fbt._("Moderators", null, {
						hk: "2mrndF"
					})), s.a.createElement(_.a, {
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
						value: u
					}), s.a.createElement("div", {
						role: "menu",
						className: O.a.list
					}, !u && s.a.createElement(h.a, {
						className: O.a.selectAllRow,
						name: o.fbt._("Select all", null, {
							hk: "UVcST"
						}),
						title: o.fbt._("Select all", null, {
							hk: "UVcST"
						}),
						selected: v,
						isHalfSelected: w,
						onToggle: A
					}), F.map(e => {
						let {
							name: t,
							iconUrl: a,
							title: o
						} = e;
						return s.a.createElement(h.a, {
							key: `${o}_${!!C[t]}`,
							name: t,
							title: o,
							iconUrl: a,
							selected: !!C[t],
							isHalfSelected: !1,
							onToggle: M
						})
					})), s.a.createElement("div", {
						className: O.a.bottom
					}, s.a.createElement(f.t, {
						className: O.a.applyBtn,
						role: "submit",
						onClick: D
					}, o.fbt._("Apply", null, {
						hk: "20mTH3"
					}))))
				},
				N = a("./src/reddit/components/CCM/ModerationLog/Filters/index.m.less"),
				w = a.n(N);
			const v = Object(i.a)(m.a),
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
					x = Object(r.e)(e => Object(C.b)("mod-log-moderator-filter-dropdown")(e)),
					h = t ? s.a.createElement("span", {
						onClick: e => {
							e.stopPropagation(), g(), n({
								moderatorNames: void 0
							})
						}
					}, s.a.createElement(u.a, {
						className: w.a.clearBtn
					})) : s.a.createElement(b.a, null);
				return s.a.createElement("div", {
					className: w.a.container,
					onClickCapture: M
				}, s.a.createElement("button", {
					"aria-expanded": x,
					"aria-label": o.fbt._("Start typing to filter moderators or use up and down to select.", null, {
						hk: "4ff0MW"
					}),
					className: Object(l.a)(w.a.filter, {
						[w.a.selected]: !!t
					}),
					id: "mod-log-moderator-filter-dropdown",
					onClick: () => {
						m(Object(d.h)({
							tooltipId: "mod-log-moderator-filter-dropdown"
						})), i(Object(p.f)())
					},
					role: "navigation"
				}, s.a.createElement("span", {
					className: w.a.filterText
				}, (e => e && 0 !== e.length ? 1 === e.length ? "a" === e[0] ? o.fbt._("Admins", null, {
					hk: "1qJDMA"
				}) : e[0] : o.fbt._("{modCount} moderators", [o.fbt._param("modCount", e.length.toString())], {
					hk: "302l1I"
				}) : o.fbt._("Moderator", null, {
					hk: "27CDKl"
				}))(t)), h), s.a.createElement(v, {
					tooltipId: "mod-log-moderator-filter-dropdown",
					isOpen: x,
					className: w.a.dropdown
				}, s.a.createElement(E, {
					className: w.a.dropdownContent,
					moderatorNames: t,
					onApply: e => {
						n(e), i(Object(p.h)())
					},
					onClose: g,
					subredditId: a
				})))
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
				p = a("./src/reddit/controls/Dropdown/index.tsx"),
				u = a("./src/reddit/helpers/trackers/modLog.ts"),
				b = a("./src/reddit/icons/fonts/Clear/index.tsx"),
				C = a("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				g = a("./src/reddit/selectors/tooltip.ts"),
				x = a("./src/reddit/hooks/useGqlContext.ts"),
				h = a("./src/reddit/constants/keycodes.ts"),
				f = a("./src/reddit/endpoints/redditor/index.ts"),
				k = a("./src/reddit/controls/Button/index.tsx"),
				_ = a("./src/reddit/icons/svgs/Close/index.tsx"),
				j = a("./src/reddit/components/CCM/ModerationLog/Filters/UsernameDropdown/UsernameFilter/index.m.less"),
				O = a.n(j);
			var E = e => {
					let {
						className: t,
						userName: a,
						onApply: r,
						onClose: c
					} = e;
					const d = Object(n.useRef)(null),
						m = Object(x.a)(),
						p = Object(n.useCallback)(async () => {
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
					})), s.a.createElement(_.a, {
						className: O.a.closeBtn,
						onClick: c
					})), s.a.createElement("input", {
						className: O.a.input,
						autoFocus: !0,
						type: "text",
						onKeyPress: e => {
							e.key !== h.b.Enter ? e.key === h.b.Escape && c() : p()
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
						onClick: p
					}, o.fbt._("Apply", null, {
						hk: "20mTH3"
					}))))
				},
				N = a("./src/reddit/components/CCM/ModerationLog/Filters/index.m.less"),
				w = a.n(N);
			const v = Object(d.a)(p.a),
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
					p = () => d(Object(m.i)()),
					x = Object(r.e)(e => Object(g.b)("mod-log-username-filter-dropdown")(e)),
					h = t ? s.a.createElement("span", {
						onClick: e => {
							e.stopPropagation(), p(), a({
								userName: void 0,
								userId: void 0
							})
						}
					}, s.a.createElement(b.a, {
						className: w.a.clearBtn
					})) : s.a.createElement(C.a, null);
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: w.a.container,
					onClickCapture: M
				}, s.a.createElement("button", {
					"aria-expanded": x,
					"aria-label": o.fbt._("Start typing to filter user name.", null, {
						hk: "TlFcF"
					}),
					className: Object(l.a)(w.a.filter, {
						[w.a.selected]: !!t
					}),
					id: "mod-log-username-filter-dropdown",
					onClick: () => {
						d(Object(m.h)({
							tooltipId: "mod-log-username-filter-dropdown"
						})), n(Object(u.o)())
					},
					role: "navigation"
				}, s.a.createElement("span", {
					className: w.a.filterText
				}, (e => e ? Object(i.e)(e) : o.fbt._("Username", null, {
					hk: "11kann"
				}))(t)), h), s.a.createElement(v, {
					tooltipId: "mod-log-username-filter-dropdown",
					isOpen: x,
					className: w.a.dropdown
				}, s.a.createElement(E, {
					className: w.a.dropdownContent,
					userName: t,
					onApply: e => {
						a(e), n(Object(u.p)())
					},
					onClose: p
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModerationLogFilters.98c7dc90309ea9e94527.js.map