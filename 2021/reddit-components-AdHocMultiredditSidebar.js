// https://www.redditstatic.com/desktop2x/reddit-components-AdHocMultiredditSidebar.70695a17657a3f5f16d2.js
// Retrieved at 10/5/2021, 7:40:04 PM by Reddit Dataminer v1.0.0
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-AdHocMultiredditSidebar.70695a17657a3f5f16d2.js.map