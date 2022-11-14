// https://www.redditstatic.com/desktop2x/ModerationLogFilters.2ff225fb6380c7e005df.js
// Retrieved at 11/14/2022, 10:10:06 AM by Reddit Dataminer v1.0.0
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
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				o = a("./node_modules/react/index.js"),
				s = a.n(o),
				r = a("./node_modules/react-redux/es/index.js"),
				l = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/hooks/useTracking.ts"),
				i = a("./src/higherOrderComponents/asTooltip.tsx"),
				d = a("./src/reddit/constants/moderationLog.ts"),
				m = a("./src/reddit/actions/tooltip.ts"),
				u = a("./src/reddit/controls/Dropdown/index.tsx"),
				p = a("./src/reddit/helpers/trackers/modLog.ts"),
				b = a("./src/reddit/icons/fonts/Clear/index.tsx"),
				C = a("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				g = a("./src/reddit/selectors/tooltip.ts"),
				x = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./node_modules/lodash/flatten.js")),
				h = a.n(x),
				f = a("./node_modules/lodash/isEmpty.js"),
				_ = a.n(f),
				k = a("./src/reddit/selectors/moderationLog.ts"),
				j = a("./src/reddit/components/CCM/ModerationLog/Filters/FilterCheckboxRow/index.tsx"),
				O = a("./src/reddit/controls/Button/index.tsx"),
				E = a("./src/reddit/controls/SearchBar/index.tsx"),
				N = a("./src/reddit/icons/svgs/Close/index.tsx"),
				w = a("./src/reddit/components/CCM/ModerationLog/ModerationLogItem/ActionCategory/index.tsx"),
				v = a("./src/reddit/controls/Checkbox/index.tsx"),
				M = a("./src/reddit/components/CCM/ModerationLog/Filters/ActionsDropdown/ActionsTreeFilter/ActionCategoryRow/index.m.less"),
				A = a.n(M);
			var F = e => {
					let {
						actionCategory: t,
						className: a,
						isHalfSelected: n,
						onClick: o,
						onToggle: r,
						selected: c
					} = e;
					return s.a.createElement("div", {
						className: Object(l.a)(a, A.a.row),
						onClick: o ? () => o(t) : void 0
					}, s.a.createElement(v.a, {
						className: A.a.checkbox,
						isCheckboxSelected: c,
						isHalfCheckboxSelected: n,
						toggleCheckbox: r ? () => r(t) : void 0
					}), s.a.createElement(w.a, {
						category: t
					}), s.a.createElement(C.a, {
						className: A.a.arrow
					}))
				},
				y = a("./src/reddit/components/CCM/ModerationLog/Filters/ActionsDropdown/ActionsTreeFilter/ActionBranch/index.m.less"),
				D = a.n(y);
			var T = e => {
					const [t, a] = Object(o.useState)(0 === e.selectedActions.length);
					Object(o.useEffect)(() => {
						e.isAutoExpanded && a(!1)
					}, [e.isAutoExpanded]);
					const n = e.selectedActions.length,
						r = n === e.actions.length,
						l = !!n && n !== e.actions.length,
						c = Object(o.useCallback)(t => {
							r || e.selectedActions.includes(t) ? e.onChange({
								actions: e.selectedActions.filter(e => e !== t)
							}) : e.onChange({
								actions: [...e.selectedActions, t]
							})
						}, [e, r]),
						i = Object(o.useCallback)(() => {
							r || l ? e.onChange({
								actions: []
							}) : e.onChange({
								actions: e.actions
							})
						}, [r, l, e]),
						m = Object(o.useCallback)(() => {
							a(!t)
						}, [t]);
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(F, {
						actionCategory: e.actionCategory,
						selected: r,
						isHalfSelected: l,
						onToggle: i,
						onClick: m
					}), !t && e.actions.map(t => s.a.createElement(j.a, {
						className: D.a.actionRow,
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
						a = Object(r.e)(e => Object(k.b)(e)),
						i = B(a),
						m = (e => _()(e) ? {} : Object.keys(e).reduce((t, a) => ({
							...t,
							...e[a].reduce((e, t) => ({
								...e,
								[t]: a
							}), {})
						}), {}))(a),
						[u, b] = Object(o.useState)(e.actions ? e.actions.reduce((t, n) => {
							const o = m[n];
							return {
								...t,
								[o]: e.actions.filter(e => a[o] && a[o].includes(e))
							}
						}, {}) : {}),
						C = B(u).length,
						g = !!C && C !== i.length,
						x = C === i.length,
						[h, f] = Object(o.useState)(""),
						w = Object(o.useCallback)(e => {
							e.target instanceof HTMLAnchorElement && t(Object(p.g)())
						}, [t]),
						v = Object(o.useCallback)((e, t) => {
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
						M = Object(o.useCallback)(e => {
							b(x || g ? {} : a)
						}, [x, g, a]),
						A = Object(o.useCallback)(() => {
							e.onApply(x ? {
								actions: void 0
							} : {
								actions: B(u)
							}), e.onClose()
						}, [e, x, u]);
					if (_()(a)) return null;
					const F = ((e, t) => {
							if (t) {
								const a = t.toLowerCase();
								return Object.keys(e).reduce((t, n) => {
									const o = e[n].filter(e => {
										const t = d.b[e];
										return !!t && t().toString().toLowerCase().includes(a)
									});
									return o.length && (t[n] = o), t
								}, {})
							}
							return e
						})(a, h),
						y = (e => Object.keys(e).sort())(F);
					return s.a.createElement("div", {
						className: Object(l.a)(e.className, S.a.container)
					}, s.a.createElement("header", {
						className: S.a.header
					}, s.a.createElement("h3", {
						className: S.a.title
					}, n.fbt._("Actions", null, {
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
						placeholder: n.fbt._("Search Actions", null, {
							hk: "48XSyA"
						}),
						value: h
					}), s.a.createElement("div", {
						role: "menu",
						className: S.a.list,
						onClick: w
					}, !h && s.a.createElement(j.a, {
						className: S.a.selectAllRow,
						name: n.fbt._("Select all", null, {
							hk: "3sUGlp"
						}),
						title: n.fbt._("Select all", null, {
							hk: "3sUGlp"
						}),
						selected: x,
						isHalfSelected: g,
						onToggle: M
					}), y.map(e => s.a.createElement(T, {
						key: e,
						actions: F[e],
						actionCategory: e,
						selectedActions: u[e] ? u[e] : [],
						isAutoExpanded: !!h,
						onChange: t => v(e, t.actions)
					}))), s.a.createElement("div", {
						className: S.a.bottom
					}, s.a.createElement(O.t, {
						className: S.a.applyBtn,
						role: "submit",
						onClick: A
					}, n.fbt._("Apply", null, {
						hk: "20mTH3"
					}))))
				},
				R = a("./src/reddit/components/CCM/ModerationLog/Filters/index.m.less"),
				P = a.n(R);
			const H = Object(i.a)(u.a),
				U = e => {
					e.nativeEvent.stopImmediatePropagation()
				};
			t.default = e => {
				let {
					actions: t,
					onApply: a
				} = e;
				const o = Object(c.a)(),
					i = Object(r.d)(),
					u = () => i(Object(m.i)()),
					x = Object(r.e)(e => Object(g.b)("mod-log-action-filter-dropdown")(e)),
					h = t ? s.a.createElement("span", {
						onClick: e => {
							e.stopPropagation(), u(), a({
								actions: void 0
							})
						}
					}, s.a.createElement(b.a, {
						className: P.a.clearBtn
					})) : s.a.createElement(C.a, null);
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: P.a.container,
					onClickCapture: U
				}, s.a.createElement("button", {
					"aria-expanded": x,
					"aria-label": n.fbt._("Start typing to filter the mod actions or use up and down to select.", null, {
						hk: "32A4KB"
					}),
					className: Object(l.a)(P.a.filter, {
						[P.a.selected]: !!t
					}),
					id: "mod-log-action-filter-dropdown",
					onClick: () => {
						i(Object(m.h)({
							tooltipId: "mod-log-action-filter-dropdown"
						})), o(Object(p.a)())
					},
					role: "navigation"
				}, s.a.createElement("span", {
					className: P.a.filterText
				}, (e => e && 0 !== e.length ? 1 === e.length ? d.b[e[0]] ? d.b[e[0]]() : e[0] : n.fbt._("{actionCount} actions", [n.fbt._param("actionCount", e.length.toString())], {
					hk: "1DhjPC"
				}) : n.fbt._("Actions", null, {
					hk: "1s4OJD"
				}))(t)), h), s.a.createElement(H, {
					tooltipId: "mod-log-action-filter-dropdown",
					isOpen: x,
					className: P.a.dropdown
				}, s.a.createElement(I, {
					className: P.a.dropdownContent,
					actions: t,
					onApply: e => {
						a(e), o(Object(p.c)())
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
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				o = a("./node_modules/react/index.js"),
				s = a.n(o),
				r = a("./node_modules/react-redux/es/index.js"),
				l = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/hooks/useTracking.ts"),
				i = a("./src/higherOrderComponents/asTooltip.tsx"),
				d = a("./src/reddit/actions/tooltip.ts"),
				m = a("./src/reddit/selectors/tooltip.ts"),
				u = a("./src/reddit/controls/Dropdown/index.tsx"),
				p = a("./src/reddit/helpers/trackers/modLog.ts"),
				b = a("./src/reddit/icons/fonts/Clear/index.tsx"),
				C = a("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				g = a("./src/reddit/controls/Button/index.tsx"),
				x = a("./src/reddit/components/CCM/ModerationLog/Filters/DateRangeDropdown/DateRangeFilter/index.m.less"),
				h = a.n(x);
			const f = e => {
				e.nativeEvent.stopImmediatePropagation()
			};
			var _ = e => {
					const [t, a] = Object(o.useState)(e.startDate || ""), [r, l] = Object(o.useState)(e.endDate || ""), c = Object(o.useCallback)(e => {
						const {
							value: t
						} = e.currentTarget, n = new Date(t);
						r && n.valueOf() > new Date(r).valueOf() && l(t), a(t)
					}, [r]), i = Object(o.useCallback)(e => {
						const {
							value: n
						} = e.currentTarget, o = new Date(n);
						t && o.valueOf() < new Date(t).valueOf() && a(n), l(n)
					}, [t]), {
						onApply: d
					} = e, m = Object(o.useCallback)(() => {
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
						className: h.a.title
					}, n.fbt._("Select a time frame", null, {
						hk: "3fQ2m8"
					})), s.a.createElement("div", {
						className: h.a.rangeContainer
					}, s.a.createElement("div", {
						className: h.a.range
					}, s.a.createElement("h6", {
						className: h.a.rangeTitle
					}, n.fbt._("From", null, {
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
					}, n.fbt._("To", null, {
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
						text: n.fbt._("Cancel", null, {
							hk: "370pdF"
						}),
						onClick: e.onClose
					}), s.a.createElement(g.a, {
						className: h.a.button,
						role: "submit",
						kind: g.b.Button,
						priority: g.c.Primary,
						text: n.fbt._("Apply", null, {
							hk: "2yCpXC"
						}),
						onClick: m
					})))
				},
				k = a("./src/reddit/components/CCM/ModerationLog/Filters/index.m.less"),
				j = a.n(k);
			const O = Object(i.a)(u.a),
				E = e => {
					e.nativeEvent.stopImmediatePropagation()
				};
			t.default = e => {
				let {
					startDate: t,
					endDate: a,
					maxDate: o,
					minDate: i,
					onApply: u,
					shouldShowDefaultTitle: g
				} = e;
				const x = Object(c.a)(),
					h = Object(r.d)(),
					f = () => {
						h(Object(d.i)())
					},
					k = Object(r.e)(e => Object(m.b)("mod-log-date-filter-dropdown")(e)),
					N = g ? s.a.createElement(C.a, null) : s.a.createElement("span", {
						onClick: e => {
							e.stopPropagation(), f(), u({
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
					"aria-expanded": k,
					"aria-label": n.fbt._("Select dates from and to and apply.", null, {
						hk: "2O0soE"
					}),
					className: Object(l.a)(j.a.filter, {
						[j.a.selected]: !g
					}),
					id: "mod-log-date-filter-dropdown",
					onClick: () => {
						h(Object(d.h)({
							tooltipId: "mod-log-date-filter-dropdown"
						})), x(Object(p.d)())
					},
					role: "navigation"
				}, s.a.createElement("span", {
					className: j.a.filterText
				}, ((e, t, a) => {
					const o = new Date(`${e} 00:00:00`).toLocaleDateString(),
						s = new Date(`${t} 00:00:00`).toLocaleDateString();
					return "Invalid Date" === o || "Invalid Date" === s || a ? n.fbt._("Time frame", null, {
						hk: "h4sav"
					}) : s === o ? o : o && s ? `${o}–${s}` : o ? n.fbt._("from {date from}", [n.fbt._param("date from", o)], {
						hk: "PMhkT"
					}) : s ? n.fbt._("to {date to}", [n.fbt._param("date to", s)], {
						hk: "2rh6Yj"
					}) : n.fbt._("Time frame", null, {
						hk: "1Mv1rs"
					})
				})(t, a, g)), N), s.a.createElement(O, {
					tooltipId: "mod-log-date-filter-dropdown",
					isOpen: k,
					className: j.a.dropdown
				}, s.a.createElement(_, {
					className: Object(l.a)(j.a.dropdownContent, j.a.dateDropdownContent),
					startDate: t,
					endDate: a,
					maxDate: o,
					minDate: i,
					onApply: e => {
						u(e), x(Object(p.e)())
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
			var n = a("./node_modules/react/index.js"),
				o = a.n(n),
				s = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/components/UserIcon/index.tsx"),
				l = a("./src/reddit/controls/Checkbox/index.tsx"),
				c = a("./src/reddit/components/CCM/ModerationLog/Filters/FilterCheckboxRow/index.m.less"),
				i = a.n(c);
			t.a = e => {
				let {
					className: t,
					iconUrl: a,
					isHalfSelected: n,
					name: c,
					onToggle: d,
					selected: m,
					title: u
				} = e;
				return o.a.createElement("div", {
					className: Object(s.a)(t, i.a.row),
					onClick: d ? () => d(c) : void 0
				}, o.a.createElement(l.a, {
					className: i.a.checkbox,
					isCheckboxSelected: m,
					isHalfCheckboxSelected: n
				}), a && o.a.createElement("div", {
					className: i.a.iconWrapper
				}, o.a.createElement(r.a, {
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
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				o = a("./node_modules/react/index.js"),
				s = a.n(o),
				r = a("./node_modules/react-redux/es/index.js"),
				l = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/hooks/useTracking.ts"),
				i = a("./src/higherOrderComponents/asTooltip.tsx"),
				d = a("./src/reddit/actions/tooltip.ts"),
				m = a("./src/reddit/controls/Dropdown/index.tsx"),
				u = a("./src/reddit/helpers/trackers/modLog.ts"),
				p = a("./src/reddit/icons/fonts/Clear/index.tsx"),
				b = a("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				C = a("./src/reddit/selectors/tooltip.ts"),
				g = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./src/lib/constants/index.ts")),
				x = a("./src/reddit/selectors/moderationLog.ts"),
				h = a("./src/reddit/components/CCM/ModerationLog/Filters/FilterCheckboxRow/index.tsx"),
				f = a("./src/reddit/controls/Button/index.tsx"),
				_ = a("./src/reddit/controls/SearchBar/index.tsx"),
				k = a("./src/reddit/icons/svgs/Close/index.tsx"),
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
								n = t.name.toUpperCase();
							return a < n ? -1 : a > n ? 1 : 0
						})),
						u = e => {
							const t = [{
								name: "a",
								title: `${n.fbt._("Admins",null,{hk:"4mKRNI"})}`
							}, {
								name: "reddit",
								title: `${n.fbt._("Reddit",null,{hk:"2PddN0"})}`
							}, {
								name: g.m,
								title: `${n.fbt._("AutoModerator",null,{hk:"4wxc1W"})}`
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
						[p, b] = Object(o.useState)(""),
						[C, j] = Object(o.useState)(a ? a.reduce((e, t) => ({
							...e,
							[t]: !0
						}), {}) : {}),
						E = u(""),
						N = Object.keys(C).length,
						w = !!N && N !== E.length,
						v = N === E.length,
						M = Object(o.useCallback)(e => {
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
						A = Object(o.useCallback)(e => {
							j(v || w ? {} : E.reduce((e, t) => (e[t.name] = !0, e), {}))
						}, [v, w, E]),
						F = Object(o.useCallback)(() => {
							const e = Object.keys(C);
							c(v ? {
								moderatorNames: []
							} : {
								moderatorNames: e
							}), i()
						}, [C, c, i, v]),
						y = u(p);
					return s.a.createElement("div", {
						className: Object(l.a)(t, O.a.container)
					}, s.a.createElement("header", {
						className: O.a.header
					}, s.a.createElement("h3", {
						className: O.a.title
					}, n.fbt._("Moderators", null, {
						hk: "2mrndF"
					})), s.a.createElement(k.a, {
						className: O.a.closeBtn,
						onClick: i
					})), s.a.createElement(_.a, {
						className: O.a.searchBar,
						autoFocus: !0,
						onTextChange: e => {
							const t = e.currentTarget.value;
							b(t)
						},
						placeholder: n.fbt._("Search Moderators", null, {
							hk: "1MQPef"
						}),
						value: p
					}), s.a.createElement("div", {
						role: "menu",
						className: O.a.list
					}, !p && s.a.createElement(h.a, {
						className: O.a.selectAllRow,
						name: n.fbt._("Select all", null, {
							hk: "UVcST"
						}),
						title: n.fbt._("Select all", null, {
							hk: "UVcST"
						}),
						selected: v,
						isHalfSelected: w,
						onToggle: A
					}), y.map(e => {
						let {
							name: t,
							iconUrl: a,
							title: n
						} = e;
						return s.a.createElement(h.a, {
							key: `${n}_${!!C[t]}`,
							name: t,
							title: n,
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
						onClick: F
					}, n.fbt._("Apply", null, {
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
					onApply: o
				} = e;
				const i = Object(c.a)(),
					m = Object(r.d)(),
					g = () => m(Object(d.i)()),
					x = Object(r.e)(e => Object(C.b)("mod-log-moderator-filter-dropdown")(e)),
					h = t ? s.a.createElement("span", {
						onClick: e => {
							e.stopPropagation(), g(), o({
								moderatorNames: void 0
							})
						}
					}, s.a.createElement(p.a, {
						className: w.a.clearBtn
					})) : s.a.createElement(b.a, null);
				return s.a.createElement("div", {
					className: w.a.container,
					onClickCapture: M
				}, s.a.createElement("button", {
					"aria-expanded": x,
					"aria-label": n.fbt._("Start typing to filter moderators or use up and down to select.", null, {
						hk: "4ff0MW"
					}),
					className: Object(l.a)(w.a.filter, {
						[w.a.selected]: !!t
					}),
					id: "mod-log-moderator-filter-dropdown",
					onClick: () => {
						m(Object(d.h)({
							tooltipId: "mod-log-moderator-filter-dropdown"
						})), i(Object(u.f)())
					},
					role: "navigation"
				}, s.a.createElement("span", {
					className: w.a.filterText
				}, (e => e && 0 !== e.length ? 1 === e.length ? "a" === e[0] ? n.fbt._("Admins", null, {
					hk: "1qJDMA"
				}) : e[0] : n.fbt._("{modCount} moderators", [n.fbt._param("modCount", e.length.toString())], {
					hk: "302l1I"
				}) : n.fbt._("Moderator", null, {
					hk: "27CDKl"
				}))(t)), h), s.a.createElement(v, {
					tooltipId: "mod-log-moderator-filter-dropdown",
					isOpen: x,
					className: w.a.dropdown
				}, s.a.createElement(E, {
					className: w.a.dropdownContent,
					moderatorNames: t,
					onApply: e => {
						o(e), i(Object(u.h)())
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
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				o = a("./node_modules/react/index.js"),
				s = a.n(o),
				r = a("./node_modules/react-redux/es/index.js"),
				l = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/hooks/useTracking.ts"),
				i = a("./src/reddit/helpers/name/index.ts"),
				d = a("./src/higherOrderComponents/asTooltip.tsx"),
				m = a("./src/reddit/actions/tooltip.ts"),
				u = a("./src/reddit/controls/Dropdown/index.tsx"),
				p = a("./src/reddit/helpers/trackers/modLog.ts"),
				b = a("./src/reddit/icons/fonts/Clear/index.tsx"),
				C = a("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				g = a("./src/reddit/selectors/tooltip.ts"),
				x = a("./src/reddit/hooks/useGqlContext.ts"),
				h = a("./src/reddit/constants/keycodes.ts"),
				f = a("./src/reddit/endpoints/redditor/index.ts"),
				_ = a("./src/reddit/controls/Button/index.tsx"),
				k = a("./src/reddit/icons/svgs/Close/index.tsx"),
				j = a("./src/reddit/components/CCM/ModerationLog/Filters/UsernameDropdown/UsernameFilter/index.m.less"),
				O = a.n(j);
			var E = e => {
					let {
						className: t,
						userName: a,
						onApply: r,
						onClose: c
					} = e;
					const d = Object(o.useRef)(null),
						m = Object(x.a)(),
						u = Object(o.useCallback)(async () => {
							var e;
							const t = (null === (e = d.current) || void 0 === e ? void 0 : e.value) || void 0;
							if (!t) return;
							c();
							const a = Object(i.j)(t),
								n = await Object(f.a)(m(), {
									name: a
								});
							r(n ? {
								userName: a,
								userId: n
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
					}, n.fbt._("Username", null, {
						hk: "lucEB"
					})), s.a.createElement(k.a, {
						className: O.a.closeBtn,
						onClick: c
					})), s.a.createElement("input", {
						className: O.a.input,
						autoFocus: !0,
						type: "text",
						onKeyPress: e => {
							e.key !== h.b.Enter ? e.key === h.b.Escape && c() : u()
						},
						placeholder: n.fbt._("Enter exact username", null, {
							hk: "2VEfHB"
						}),
						ref: d,
						defaultValue: a ? Object(i.e)(a) : "",
						maxLength: 22
					}), s.a.createElement("div", {
						className: O.a.bottom
					}, s.a.createElement(_.t, {
						className: O.a.applyBtn,
						role: "submit",
						onClick: u
					}, n.fbt._("Apply", null, {
						hk: "20mTH3"
					}))))
				},
				N = a("./src/reddit/components/CCM/ModerationLog/Filters/index.m.less"),
				w = a.n(N);
			const v = Object(d.a)(u.a),
				M = e => {
					e.nativeEvent.stopImmediatePropagation()
				};
			t.default = e => {
				let {
					userName: t,
					onApply: a
				} = e;
				const o = Object(c.a)(),
					d = Object(r.d)(),
					u = () => d(Object(m.i)()),
					x = Object(r.e)(e => Object(g.b)("mod-log-username-filter-dropdown")(e)),
					h = t ? s.a.createElement("span", {
						onClick: e => {
							e.stopPropagation(), u(), a({
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
					"aria-label": n.fbt._("Start typing to filter user name.", null, {
						hk: "TlFcF"
					}),
					className: Object(l.a)(w.a.filter, {
						[w.a.selected]: !!t
					}),
					id: "mod-log-username-filter-dropdown",
					onClick: () => {
						d(Object(m.h)({
							tooltipId: "mod-log-username-filter-dropdown"
						})), o(Object(p.o)())
					},
					role: "navigation"
				}, s.a.createElement("span", {
					className: w.a.filterText
				}, (e => e ? Object(i.e)(e) : n.fbt._("Username", null, {
					hk: "11kann"
				}))(t)), h), s.a.createElement(v, {
					tooltipId: "mod-log-username-filter-dropdown",
					isOpen: x,
					className: w.a.dropdown
				}, s.a.createElement(E, {
					className: w.a.dropdownContent,
					userName: t,
					onApply: e => {
						a(e), o(Object(p.p)())
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
			var n = a("./node_modules/react/index.js"),
				o = a.n(n),
				s = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/icons/svgs/Search/index.tsx"),
				l = a("./src/reddit/controls/SearchBar/index.m.less"),
				c = a.n(l);
			t.a = e => o.a.createElement("label", {
				className: Object(s.a)(c.a.searchContainer, e.className)
			}, o.a.createElement("input", {
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
			}), o.a.createElement("div", {
				className: Object(s.a)(c.a.searchIconContainer, {
					[c.a.mClickable]: !!e.onSearch,
					[c.a.mRightAligned]: e.rightAlignedIcon
				}),
				role: e.onSearch && "submit",
				onClick: e.onSearch
			}, o.a.createElement(r.a, null)))
		},
		"./src/reddit/icons/fonts/Clear/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				o = a.n(n),
				s = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(s.a)(Object(r.b)("clear", e.isFilled), e.className)
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModerationLogFilters.2ff225fb6380c7e005df.js.map