// https://www.redditstatic.com/desktop2x/JsonEMEntityView.5a8f6080a8368c160406.js
// Retrieved at 10/5/2021, 7:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["JsonEMEntityView"], {
		"./src/reddit/pages/EconManagement/JsonEMEntityView.tsx": function(t, e, n) {
			"use strict";
			n.r(e);
			var i = n("./node_modules/react/index.js"),
				o = n.n(i),
				s = n("./src/reddit/controls/Button/index.tsx");
			e.default = ({
				entityData: t
			}) => {
				const [e, n] = Object(i.useState)(!1);
				return o.a.createElement(s.s, {
					onClick: () => {
						navigator.clipboard.writeText(t.source), n(!0), setTimeout(() => {
							n(!1)
						}, 1e3)
					},
					style: {
						minWidth: 220
					}
				}, e ? "Copied!" : "Click to copy source JSON")
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/JsonEMEntityView.5a8f6080a8368c160406.js.map