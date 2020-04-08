// https://www.redditstatic.com/desktop2x/reddit-components-AdHocMultiredditSidebar.eebc7bd75402d782b899.js
// Retrieved at 4/8/2020, 3:10:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-AdHocMultiredditSidebar"], {
		"./node_modules/lodash/take.js": function(e, d, t) {
			var s = t("./node_modules/lodash/_baseSlice.js"),
				r = t("./node_modules/lodash/toInteger.js");
			e.exports = function(e, d, t) {
				return e && e.length ? (d = t || void 0 === d ? 1 : r(d), s(e, 0, d < 0 ? 0 : d)) : []
			}
		},
		"./src/reddit/components/AdHocMultiredditSidebar/index.tsx": function(e, d, t) {
			"use strict";
			t.r(d);
			var s = t("./node_modules/react/index.js"),
				r = t.n(s),
				o = t("./node_modules/react-redux/es/index.js"),
				i = t("./node_modules/reselect/es/index.js"),
				n = t("./src/reddit/components/MultiredditSidebar/index.tsx"),
				c = t("./src/reddit/contexts/PageLayer/index.tsx"),
				l = t("./src/reddit/selectors/multireddit.ts"),
				a = t("./src/reddit/selectors/user.ts");
			const u = Object(c.t)(),
				_ = Object(i.c)({
					language: a.O,
					multireddit: l.a,
					subredditCategory: c.l
				}),
				m = Object(o.b)(_);
			d.default = u(m(e => r.a.createElement(n.a, e)))
		}
	}
]);
//# sourceMappingURL=reddit-components-AdHocMultiredditSidebar.eebc7bd75402d782b899.js.map