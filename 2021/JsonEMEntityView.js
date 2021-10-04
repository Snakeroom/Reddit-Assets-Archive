// https://www.redditstatic.com/desktop2x/JsonEMEntityView.6813b3d8e6516f684f33.js
// Retrieved at 10/4/2021, 9:50:05 AM by Reddit Dataminer v1.0.0
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/JsonEMEntityView.6813b3d8e6516f684f33.js.map