// https://www.redditstatic.com/desktop2x/reddit-components-AdHocMultiredditSidebar.3b74f062931eb9fd947b.js
// Retrieved at 7/26/2021, 3:30:04 PM by Reddit Dataminer v1.0.0
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
				_ = t("./src/reddit/selectors/multireddit.ts");
			const a = Object(o.t)(),
				u = Object(n.c)({
					multireddit: _.a,
					subredditCategory: o.l
				}),
				l = Object(s.b)(u);
			d.default = a(l(e => r.a.createElement(c.a, e)))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-AdHocMultiredditSidebar.3b74f062931eb9fd947b.js.map