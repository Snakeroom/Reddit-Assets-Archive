// https://www.redditstatic.com/desktop2x/reddit-components-AdHocMultiredditSidebar.ad10e9cd0f51aabc3c1d.js
// Retrieved at 3/11/2021, 9:20:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-AdHocMultiredditSidebar"], {
		"./node_modules/lodash/take.js": function(e, d, t) {
			var s = t("./node_modules/lodash/_baseSlice.js"),
				o = t("./node_modules/lodash/toInteger.js");
			e.exports = function(e, d, t) {
				return e && e.length ? (d = t || void 0 === d ? 1 : o(d), s(e, 0, d < 0 ? 0 : d)) : []
			}
		},
		"./src/reddit/components/AdHocMultiredditSidebar/index.tsx": function(e, d, t) {
			"use strict";
			t.r(d);
			var s = t("./node_modules/react/index.js"),
				o = t.n(s),
				r = t("./node_modules/react-redux/es/index.js"),
				i = t("./node_modules/reselect/es/index.js"),
				n = t("./src/reddit/components/MultiredditSidebar/index.tsx"),
				c = t("./src/reddit/contexts/PageLayer/index.tsx"),
				l = t("./src/reddit/selectors/multireddit.ts");
			const a = Object(c.t)(),
				u = Object(i.c)({
					multireddit: l.a,
					subredditCategory: c.l
				}),
				_ = Object(r.b)(u);
			d.default = a(_(e => o.a.createElement(n.a, e)))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-AdHocMultiredditSidebar.ad10e9cd0f51aabc3c1d.js.map