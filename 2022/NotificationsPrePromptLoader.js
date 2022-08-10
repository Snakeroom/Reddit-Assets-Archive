// https://www.redditstatic.com/desktop2x/NotificationsPrePromptLoader.d3bea6e044f87a43a118.js
// Retrieved at 8/10/2022, 12:50:05 PM by Reddit Dataminer v1.0.0
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
				c = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/higherOrderComponents/asModal/index.tsx"),
				o = n("./src/lib/notifications/constants.ts"),
				a = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/constants/experiments.ts"),
				l = n("./src/reddit/helpers/trackers/notifications.ts"),
				u = n("./src/reddit/helpers/chooseVariant/index.ts");

			function m(e) {
				const t = Object(u.c)(e, {
					experimentEligibilitySelector: u.a,
					experimentName: d.Eb
				});
				return !Object(d.ig)(t) && t
			}
			var O, b = n("./src/reddit/components/NotificationsPrePrompt/index.m.less"),
				p = n.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ThreeSec = 3e3] = "ThreeSec", e[e.FiveSec = 5e3] = "FiveSec", e[e.TenSec = 1e4] = "TenSec"
			}(O || (O = {}));
			const j = Object(s.a)(() => null);
			t.default = e => {
				const t = Object(a.b)(),
					n = Object(i.d)(),
					[s, u] = Object(r.useState)(),
					b = Object(i.e)(m),
					_ = Object(r.useCallback)(() => b === d.ad.ThreeSeconds ? O.ThreeSec : b === d.ad.FiveSeconds ? O.FiveSec : O.TenSec, [b]);
				return Object(r.useEffect)(() => {
					if (b) {
						const e = _();
						u(setTimeout(() => {
							n(Object(o.k)()), t(Object(l.g)())
						}, e))
					}
				}, [n, b, t, _]), c.a.createElement(j, f({
					onOverlayClick: () => {
						b && (clearTimeout(Number(s)), n(Object(o.k)()), t(Object(l.h)()))
					}
				}, e, {
					overlayClassName: p.a.overlay,
					withOverlay: !0
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationsPrePromptLoader.d3bea6e044f87a43a118.js.map