// https://www.redditstatic.com/desktop2x/NotificationsPrePromptLoader.d33ad63a49892e452d57.js
// Retrieved at 5/17/2022, 12:10:06 PM by Reddit Dataminer v1.0.0
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
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/higherOrderComponents/asModal/index.tsx"),
				c = r("./src/lib/notifications/constants.ts"),
				a = r("./src/reddit/components/TrackingHelper/index.tsx"),
				d = r("./src/reddit/helpers/trackers/notifications.ts"),
				l = r("./src/reddit/constants/experiments.ts"),
				m = r("./src/reddit/helpers/chooseVariant/index.ts");

			function u(e) {
				return Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: l.vb
				}) === l.od
			}
			var p = r("./src/reddit/components/NotificationsPrePrompt/index.m.less"),
				O = r.n(p);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const f = Object(o.a)(() => null);
			t.default = e => {
				const t = Object(a.b)(),
					r = Object(i.d)(),
					[o, l] = Object(n.useState)(),
					m = Object(i.e)(u);
				return Object(n.useEffect)(() => {
					m && l(setTimeout(() => {
						r(Object(c.k)()), t(Object(d.g)())
					}, 3e3))
				}, [r, m, t]), s.a.createElement(f, b({
					onOverlayClick: () => {
						m && (clearTimeout(Number(o)), r(Object(c.k)()), t(Object(d.h)()))
					}
				}, e, {
					overlayClassName: O.a.overlay,
					withOverlay: !0
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationsPrePromptLoader.d33ad63a49892e452d57.js.map