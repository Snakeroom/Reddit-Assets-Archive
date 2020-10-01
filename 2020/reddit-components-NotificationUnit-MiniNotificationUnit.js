// https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-MiniNotificationUnit.8280e6642f9e4988b1c1.js
// Retrieved at 10/1/2020, 7:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-NotificationUnit-MiniNotificationUnit"], {
		"./src/reddit/components/NotificationUnit/MiniNotificationUnit.tsx": function(t, e, n) {
			"use strict";
			n.r(e);
			var i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./src/reddit/controls/MetaData/index.tsx"),
				c = n("./src/reddit/components/NotificationUnit/index.m.less"),
				s = n.n(c);
			e.default = t => {
				let {
					unit: e
				} = t;
				return a.a.createElement("div", {
					className: s.a.miniUnitContentContainer
				}, a.a.createElement("span", null, a.a.createElement("p", {
					className: s.a.miniUnitTextContent
				}, e.textContent), a.a.createElement(o.b, {
					isScoreHidden: !1,
					score: e.meta && e.meta.scoreCount || 0
				}), a.a.createElement(o.c, null), e.meta && Object(o.d)(e.meta.commentCount)), a.a.createElement("img", {
					alt: e.altText,
					className: s.a.miniUnitImg,
					src: e.imageUrl
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-MiniNotificationUnit.8280e6642f9e4988b1c1.js.map