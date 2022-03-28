// https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.28d0c1a0db004a8eae5a.js
// Retrieved at 3/28/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-BlankPost"], {
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "BlankPost", (function() {
				return l
			}));
			var n = s("./node_modules/react/index.js"),
				d = s.n(n),
				c = s("./src/reddit/components/AdViewability/index.tsx"),
				i = s("./src/reddit/connectors/PostViewable/index.ts"),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/contexts/Post/index.tsx");
			const r = Object(i.a)(null),
				l = e => {
					let {
						className: t,
						post: s
					} = e;
					return s.isSponsored ? d.a.createElement(c.a, {
						post: s,
						trackDisplay: !0
					}, d.a.createElement("div", {
						className: Object(o.a)(t, `Blank ${s.id}`)
					})) : null
				};
			t.default = Object(a.b)(r(l))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.28d0c1a0db004a8eae5a.js.map