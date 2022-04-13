// https://www.redditstatic.com/desktop2x/NotificationsPrePromptLoader.56bbd8a288f8f24ed4e3.js
// Retrieved at 4/13/2022, 1:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationsPrePromptLoader"], {
		"./src/reddit/components/NotificationsPrePrompt/index.m.less": function(e, t, r) {
			e.exports = {
				overlay: "_3Ig_EsWWVLquWs2yBBQjec",
				backgroundAnimation: "_2iwhmPhcdf_cKfsjSxiNTC"
			}
		},
		"./src/reddit/components/NotificationsPrePrompt/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/higherOrderComponents/asModal/index.tsx"),
				c = r("./src/lib/notifications/constants.ts"),
				a = r("./src/reddit/constants/experiments.ts"),
				d = r("./src/reddit/helpers/chooseVariant/index.ts");

			function l(e) {
				return Object(d.c)(e, {
					experimentEligibilitySelector: d.a,
					experimentName: a.rb
				}) === a.ld
			}
			var m = r("./src/reddit/components/NotificationsPrePrompt/index.m.less"),
				p = r.n(m);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = Object(s.a)(() => null);
			t.default = e => {
				const t = Object(o.d)(),
					r = Object(o.e)(l);
				return i.a.createElement(_, u({
					onOverlayClick: () => {
						r && t(Object(c.k)())
					}
				}, e, {
					overlayClassName: p.a.overlay,
					withOverlay: !0
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationsPrePromptLoader.56bbd8a288f8f24ed4e3.js.map