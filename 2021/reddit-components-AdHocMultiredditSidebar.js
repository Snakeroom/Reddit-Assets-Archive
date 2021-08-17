// https://www.redditstatic.com/desktop2x/reddit-components-AdHocMultiredditSidebar.7a4857ca64d2a7b983a0.js
// Retrieved at 8/17/2021, 2:50:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-AdHocMultiredditSidebar"], {
		"./src/reddit/components/AdHocMultiredditSidebar/index.tsx": function(e, d, t) {
			"use strict";
			t.r(d);
			var i = t("./node_modules/react/index.js"),
				r = t.n(i),
				s = t("./node_modules/react-redux/es/index.js"),
				n = t("./node_modules/reselect/es/index.js"),
				c = t("./src/reddit/components/MultiredditSidebar/index.tsx"),
				o = t("./src/reddit/contexts/PageLayer/index.tsx"),
				u = t("./src/reddit/selectors/multireddit.ts");
			const _ = Object(o.u)(),
				a = Object(n.c)({
					multireddit: u.a,
					subredditCategory: o.m
				}),
				l = Object(s.b)(a);
			d.default = _(l(e => r.a.createElement(c.a, e)))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-AdHocMultiredditSidebar.7a4857ca64d2a7b983a0.js.map