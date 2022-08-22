// https://www.redditstatic.com/desktop2x/NotificationsPrePromptLoader.2f389a9140dcd017d031.js
// Retrieved at 8/22/2022, 4:50:10 PM by Reddit Dataminer v1.0.0
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
				c = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/higherOrderComponents/asModal/index.tsx"),
				o = r("./src/lib/notifications/constants.ts"),
				a = r("./src/reddit/components/TrackingHelper/index.tsx"),
				d = r("./src/reddit/constants/experiments.ts"),
				l = r("./src/reddit/helpers/trackers/notifications.ts"),
				u = r("./src/reddit/helpers/chooseVariant/index.ts");

			function m(e) {
				const t = Object(u.c)(e, {
					experimentEligibilitySelector: u.a,
					experimentName: d.Gb
				});
				return !Object(d.rg)(t) && t
			}
			var O, b = r("./src/reddit/components/NotificationsPrePrompt/index.m.less"),
				p = r.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ThreeSec = 3e3] = "ThreeSec", e[e.FiveSec = 5e3] = "FiveSec", e[e.TenSec = 1e4] = "TenSec"
			}(O || (O = {}));
			const j = Object(s.a)(() => null);
			t.default = e => {
				const t = Object(a.b)(),
					r = Object(i.d)(),
					[s, u] = Object(n.useState)(),
					b = Object(i.e)(m),
					_ = Object(n.useCallback)(() => b === d.gd.ThreeSeconds ? O.ThreeSec : b === d.gd.FiveSeconds ? O.FiveSec : O.TenSec, [b]);
				return Object(n.useEffect)(() => {
					if (b) {
						const e = _();
						u(setTimeout(() => {
							r(Object(o.k)()), t(Object(l.g)())
						}, e))
					}
				}, [r, b, t, _]), c.a.createElement(j, f({
					onOverlayClick: () => {
						b && (clearTimeout(Number(s)), r(Object(o.k)()), t(Object(l.h)()))
					}
				}, e, {
					overlayClassName: p.a.overlay,
					withOverlay: !0
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationsPrePromptLoader.2f389a9140dcd017d031.js.map