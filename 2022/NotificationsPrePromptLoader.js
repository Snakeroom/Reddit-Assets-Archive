// https://www.redditstatic.com/desktop2x/NotificationsPrePromptLoader.669fb075cde815b77f1f.js
// Retrieved at 4/26/2022, 2:20:04 PM by Reddit Dataminer v1.0.0
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
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/higherOrderComponents/asModal/index.tsx"),
				c = r("./src/lib/notifications/constants.ts"),
				a = r("./src/reddit/components/TrackingHelper/index.tsx"),
				d = r("./src/reddit/helpers/trackers/notifications.ts"),
				l = r("./src/reddit/constants/experiments.ts"),
				p = r("./src/reddit/helpers/chooseVariant/index.ts");

			function m(e) {
				return Object(p.c)(e, {
					experimentEligibilitySelector: p.a,
					experimentName: l.wb
				}) === l.wd
			}
			var u = r("./src/reddit/components/NotificationsPrePrompt/index.m.less"),
				_ = r.n(u);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const O = Object(o.a)(() => null);
			t.default = e => {
				const t = Object(a.b)(),
					r = Object(s.d)(),
					n = Object(s.e)(m);
				return i.a.createElement(O, x({
					onOverlayClick: () => {
						n && (r(Object(c.k)()), t(Object(d.g)()))
					}
				}, e, {
					overlayClassName: _.a.overlay,
					withOverlay: !0
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationsPrePromptLoader.669fb075cde815b77f1f.js.map