// https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.f5aa343f5b3979752d7e.js
// Retrieved at 12/2/2021, 3:20:04 PM by Reddit Dataminer v1.0.0
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
				l = ({
					className: e,
					post: t
				}) => t.isSponsored ? d.a.createElement(c.a, {
					post: t,
					trackDisplay: !0
				}, d.a.createElement("div", {
					className: Object(o.a)(e, `Blank ${t.id}`)
				})) : null;
			t.default = Object(a.b)(r(l))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.f5aa343f5b3979752d7e.js.map