// https://www.redditstatic.com/desktop2x/JsonEMEntityView.858027fa85eb87c716ab.js
// Retrieved at 3/28/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["JsonEMEntityView"], {
		"./src/reddit/pages/EconManagement/JsonEMEntityView.tsx": function(t, e, n) {
			"use strict";
			n.r(e);
			var i = n("./node_modules/react/index.js"),
				o = n.n(i),
				s = n("./src/reddit/controls/Button/index.tsx");
			e.default = t => {
				let {
					entityData: e
				} = t;
				const [n, r] = Object(i.useState)(!1);
				return o.a.createElement(s.t, {
					onClick: () => {
						navigator.clipboard.writeText(e.source), r(!0), setTimeout(() => {
							r(!1)
						}, 1e3)
					},
					style: {
						minWidth: 220
					}
				}, n ? "Copied!" : "Click to copy source JSON")
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/JsonEMEntityView.858027fa85eb87c716ab.js.map