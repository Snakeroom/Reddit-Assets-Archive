// https://www.redditstatic.com/desktop2x/reddit-components-ViewReportsDropdown-index.c578b9ee9c8ffa5d6b4f.js
// Retrieved at 8/24/2020, 4:30:10 PM by Reddit Dataminer v1.0.0
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
			o.d(t, "a", (function() {
				return a
			}));
			var s = o("./node_modules/react/index.js"),
				r = o.n(s),
				n = o("./src/lib/lessComponent.tsx"),
				d = o("./src/reddit/components/Reports/index.m.less"),
				p = o.n(d);
			const {
				fbt: i
			} = o("./node_modules/fbt/lib/FbtPublic.js"), l = n.a.div("ReportText", p.a), c = n.a.div("ReportsTitle", p.a);

			function a(e) {
				const {
					className: t,
					modReports: o,
					userReports: s
				} = e;
				return r.a.createElement("div", {
					className: t
				}, o && o.length > 0 && r.a.createElement("div", {
					className: p.a.Reports
				}, r.a.createElement(c, null, i._("Moderator Reports", null, {
					hk: "3hZ0oX"
				})), o.map(e => {
					let [t, o] = e;
					return r.a.createElement(l, {
						key: "mod-".concat(o)
					}, "u/".concat(o, ": ").concat(t))
				})), s && s.length > 0 && r.a.createElement("div", {
					className: p.a.Reports
				}, r.a.createElement(c, null, i._("User Reports", null, {
					hk: "2KeCLz"
				})), s.map(e => {
					let [t, o] = e;
					return r.a.createElement(l, {
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
			var s = o("./node_modules/react/index.js"),
				r = o.n(s),
				n = o("./node_modules/react-redux/es/index.js"),
				d = o("./node_modules/reselect/es/index.js"),
				p = o("./src/lib/lessComponent.tsx"),
				i = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = o("./src/reddit/controls/Dropdown/index.tsx"),
				c = o("./src/reddit/selectors/tooltip.ts"),
				a = o("./node_modules/fbt/lib/FbtPublic.js"),
				m = o("./src/reddit/components/Reports/index.tsx"),
				u = o("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				R = o("./src/reddit/layout/row/Inline/index.tsx"),
				x = o("./src/reddit/components/ViewReportsDropdown/ReportsList.m.less"),
				_ = o.n(x);
			const w = p.a.wrapped(R.a, "Footer", _.a),
				b = p.a.wrapped(u.c, "FooterButton", _.a);
			var D = e => r.a.createElement("div", null, r.a.createElement(m.a, {
					modReports: e.modReports,
					userReports: e.userReports
				}), !e.isShowingHistoricalReports && r.a.createElement(w, null, r.a.createElement(b, {
					onClick: e.onIgnoreReports,
					text: e.ignoreReports ? a.fbt._("Restore reports", null, {
						hk: "3wbqh7"
					}) : a.fbt._("Ignore reports", null, {
						hk: "4dr3Qm"
					})
				}))),
				E = o("./src/reddit/components/ViewReportsDropdown/index.m.less"),
				f = o.n(E);
			const O = p.a.wrapped(l.a, "StyledDropdown", f.a),
				A = Object(d.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: o
						} = t;
						return Object(c.b)(o)(e)
					}
				}),
				I = Object(n.b)(A),
				g = Object(i.a)(O),
				T = I(e => {
					const t = !(!e.model.numReports || -1 !== e.model.numReports),
						o = t ? e.model.modReportsDismissed || [] : e.model.modReports,
						s = t ? e.model.userReportsDismissed || [] : e.model.userReports;
					return r.a.createElement(g, {
						className: e.className,
						isOpen: e.isDropdownOpen,
						tooltipId: e.tooltipId
					}, r.a.createElement(D, {
						ignoreReports: e.model.ignoreReports,
						modReports: o,
						onIgnoreReports: e.onIgnoreReports,
						isShowingHistoricalReports: t,
						userReports: s
					}))
				});
			t.default = T
		}
	}
]);
//# sourceMappingURL=reddit-components-ViewReportsDropdown-index.c578b9ee9c8ffa5d6b4f.js.map