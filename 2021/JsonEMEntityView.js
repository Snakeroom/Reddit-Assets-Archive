// https://www.redditstatic.com/desktop2x/JsonEMEntityView.ee26c2fa50fce800534d.js
// Retrieved at 11/4/2021, 10:30:05 AM by Reddit Dataminer v1.0.0
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
				return o.a.createElement(s.t, {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/JsonEMEntityView.ee26c2fa50fce800534d.js.map