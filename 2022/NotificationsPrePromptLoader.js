// https://www.redditstatic.com/desktop2x/NotificationsPrePromptLoader.da2baca884a99c8003b4.js
// Retrieved at 4/7/2022, 12:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationsPrePromptLoader"], {
		"./src/reddit/components/NotificationsPrePrompt/index.m.less": function(e, t, n) {
			e.exports = {
				overlay: "_3Ig_EsWWVLquWs2yBBQjec",
				backgroundAnimation: "_2iwhmPhcdf_cKfsjSxiNTC"
			}
		},
		"./src/reddit/components/NotificationsPrePrompt/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/lib/notifications/constants.ts"),
				a = n("./src/reddit/constants/experiments.ts"),
				d = n("./src/reddit/helpers/chooseVariant/index.ts");

			function l(e) {
				return Object(d.c)(e, {
					experimentEligibilitySelector: d.a,
					experimentName: a.pb
				}) === a.gd
			}
			var m = n("./src/reddit/components/NotificationsPrePrompt/index.m.less"),
				p = n.n(m);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = Object(s.a)(() => null);
			t.default = e => {
				const t = Object(o.d)(),
					n = Object(o.e)(l);
				return i.a.createElement(_, u({
					onOverlayClick: () => {
						n && t(Object(c.k)())
					}
				}, e, {
					overlayClassName: p.a.overlay,
					withOverlay: !0
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationsPrePromptLoader.da2baca884a99c8003b4.js.map