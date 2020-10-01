// https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-NotificationButton.d852d6e76047a0c0a0ad.js
// Retrieved at 10/1/2020, 7:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-NotificationUnit-NotificationButton"], {
		"./src/reddit/components/NotificationUnit/NotificationButton.tsx": function(t, n, i) {
			"use strict";
			i.r(n);
			var e = i("./node_modules/react/index.js"),
				o = i.n(e),
				a = i("./src/lib/classNames/index.ts"),
				s = i("./src/reddit/components/NotificationUnit/index.m.less"),
				c = i.n(s);
			n.default = t => {
				let {
					icon: n,
					isUnread: i,
					text: e
				} = t;
				return o.a.createElement("button", {
					className: Object(a.a)(c.a.notificationButton, {
						[c.a.unread]: i
					})
				}, n, o.a.createElement("span", null, e))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-NotificationButton.d852d6e76047a0c0a0ad.js.map