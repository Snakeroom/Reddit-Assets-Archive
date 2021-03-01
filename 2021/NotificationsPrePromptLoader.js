// https://www.redditstatic.com/desktop2x/NotificationsPrePromptLoader.b1df6fb919c422d6fb73.js
// Retrieved at 2/28/2021, 9:18:37 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationsPrePromptLoader"], {
		"./src/reddit/components/NotificationsPrePrompt/index.m.less": function(e, t, r) {
			e.exports = {
				overlay: "_3Ig_EsWWVLquWs2yBBQjec"
			}
		},
		"./src/reddit/components/NotificationsPrePrompt/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var o = r("./node_modules/react/index.js"),
				n = r.n(o),
				s = r("./src/higherOrderComponents/asModal/index.tsx"),
				i = r("./src/reddit/components/NotificationsPrePrompt/index.m.less"),
				a = r.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
					}
					return e
				}).apply(this, arguments)
			}
			const d = Object(s.a)(() => null);
			t.default = e => n.a.createElement(d, c({}, e, {
				overlayClassName: a.a.overlay,
				withOverlay: !0
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationsPrePromptLoader.b1df6fb919c422d6fb73.js.map