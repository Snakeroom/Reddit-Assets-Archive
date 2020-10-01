// https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-DefaultNotificationUnit.4c4cf43ba9ee04a20219.js
// Retrieved at 10/1/2020, 7:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-NotificationUnit-DefaultNotificationUnit"], {
		"./src/reddit/components/NotificationUnit/DefaultNotificationUnit.tsx": function(t, e, n) {
			"use strict";
			n.r(e);
			var a = n("./node_modules/react/index.js"),
				i = n.n(a),
				o = n("./src/reddit/controls/MetaData/index.tsx"),
				c = n("./src/reddit/components/NotificationUnit/index.m.less"),
				r = n.n(c);
			e.default = t => {
				let {
					unit: e
				} = t;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("p", {
					className: r.a.defaultUnitTextContent
				}, e.textContent), e.meta && e.meta.scoreCount && e.meta.commentCount ? i.a.createElement(i.a.Fragment, null, i.a.createElement(o.b, {
					isScoreHidden: !1,
					score: e.meta.scoreCount
				}), i.a.createElement(o.c, null), Object(o.d)(e.meta.commentCount)) : null)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-DefaultNotificationUnit.4c4cf43ba9ee04a20219.js.map