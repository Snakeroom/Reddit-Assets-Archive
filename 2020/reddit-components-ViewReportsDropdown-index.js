// https://www.redditstatic.com/desktop2x/reddit-components-ViewReportsDropdown-index.8fe7f356ab39609f3a6b.js
// Retrieved at 4/8/2020, 2:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ViewReportsDropdown-index"], {
		"./src/reddit/components/Reports/index.m.less": function(e, t, o) {
			e.exports = {
				ReportText: "_3TPyo-_MFDbVaI7ExIkD1G",
				reportText: "_3TPyo-_MFDbVaI7ExIkD1G",
				ReportsTitle: "_21BmvfYiT1eKfN4AeE812a",
				reportsTitle: "_21BmvfYiT1eKfN4AeE812a",
				Reports: "ZL1AYPlBJX_2kYn3OATX6",
				reports: "ZL1AYPlBJX_2kYn3OATX6"
			}
		},
		"./src/reddit/components/Reports/index.tsx": function(e, t, o) {
			"use strict";
			var r = o("./node_modules/react/index.js"),
				s = o.n(r),
				n = o("./src/lib/lessComponent.tsx"),
				d = o("./src/reddit/components/Reports/index.m.less"),
				p = o.n(d);
			const {
				fbt: l
			} = o("./node_modules/fbt/lib/FbtPublic.js"), i = n.a.div("ReportText", p.a), c = n.a.div("ReportsTitle", p.a), a = n.a.div("Reports", p.a);
			t.a = e => {
				const {
					className: t,
					modReports: o,
					userReports: r
				} = e;
				return s.a.createElement("div", {
					className: t
				}, o && o.length > 0 && s.a.createElement(a, null, s.a.createElement(c, null, l._("Moderator Reports", null, {
					hk: "3hZ0oX"
				})), o.map(e => {
					let [t, o] = e;
					return s.a.createElement(i, {
						key: "mod-".concat(o)
					}, "u/".concat(o, ": ").concat(t))
				})), r && r.length > 0 && s.a.createElement(a, null, s.a.createElement(c, null, l._("User Reports", null, {
					hk: "2KeCLz"
				})), r.map(e => {
					let [t, o] = e;
					return s.a.createElement(i, {
						key: "user-".concat(t)
					}, "".concat(o, ": ").concat(t))
				})))
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
			var r = o("./node_modules/react/index.js"),
				s = o.n(r),
				n = o("./node_modules/react-redux/es/index.js"),
				d = o("./node_modules/reselect/es/index.js"),
				p = o("./src/lib/lessComponent.tsx"),
				l = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				i = o("./src/reddit/controls/Dropdown/index.tsx"),
				c = o("./src/reddit/selectors/tooltip.ts"),
				a = o("./node_modules/fbt/lib/FbtPublic.js"),
				m = o("./src/reddit/components/Reports/index.tsx"),
				u = o("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				R = o("./src/reddit/layout/row/Inline/index.tsx"),
				x = o("./src/reddit/components/ViewReportsDropdown/ReportsList.m.less"),
				_ = o.n(x);
			const w = p.a.wrapped(R.a, "Footer", _.a),
				b = p.a.wrapped(u.c, "FooterButton", _.a);
			var D = e => s.a.createElement("div", null, s.a.createElement(m.a, {
					modReports: e.modReports,
					userReports: e.userReports
				}), !e.isShowingHistoricalReports && s.a.createElement(w, null, s.a.createElement(b, {
					onClick: e.onIgnoreReports,
					text: e.ignoreReports ? a.fbt._("Restore reports", null, {
						hk: "3wbqh7"
					}) : a.fbt._("Ignore reports", null, {
						hk: "4dr3Qm"
					})
				}))),
				E = o("./src/reddit/components/ViewReportsDropdown/index.m.less"),
				O = o.n(E);
			const f = p.a.wrapped(i.a, "StyledDropdown", O.a),
				A = Object(d.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: o
						} = t;
						return Object(c.b)(o)(e)
					}
				}),
				I = Object(n.b)(A),
				g = Object(l.a)(f),
				T = I(e => {
					const t = !(!e.model.numReports || -1 !== e.model.numReports),
						o = t ? e.model.modReportsDismissed || [] : e.model.modReports,
						r = t ? e.model.userReportsDismissed || [] : e.model.userReports;
					return s.a.createElement(g, {
						className: e.className,
						isOpen: e.isDropdownOpen,
						tooltipId: e.tooltipId
					}, s.a.createElement(D, {
						ignoreReports: e.model.ignoreReports,
						modReports: o,
						onIgnoreReports: e.onIgnoreReports,
						isShowingHistoricalReports: t,
						userReports: r
					}))
				});
			t.default = T
		}
	}
]);
//# sourceMappingURL=reddit-components-ViewReportsDropdown-index.8fe7f356ab39609f3a6b.js.map