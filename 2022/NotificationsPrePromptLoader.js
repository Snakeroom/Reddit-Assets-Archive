// https://www.redditstatic.com/desktop2x/NotificationsPrePromptLoader.3cd57301f55cffbc5cd7.js
// Retrieved at 8/10/2022, 7:10:03 PM by Reddit Dataminer v1.0.0
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

			function b(e) {
				const t = Object(u.c)(e, {
					experimentEligibilitySelector: u.a,
					experimentName: d.Fb
				});
				return !Object(d.jg)(t) && t
			}
			var m, O = n("./src/reddit/components/NotificationsPrePrompt/index.m.less"),
				p = n.n(O);

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
			}(m || (m = {}));
			const j = Object(s.a)(() => null);
			t.default = e => {
				const t = Object(a.b)(),
					n = Object(i.d)(),
					[s, u] = Object(r.useState)(),
					O = Object(i.e)(b),
					_ = Object(r.useCallback)(() => O === d.bd.ThreeSeconds ? m.ThreeSec : O === d.bd.FiveSeconds ? m.FiveSec : m.TenSec, [O]);
				return Object(r.useEffect)(() => {
					if (O) {
						const e = _();
						u(setTimeout(() => {
							n(Object(o.k)()), t(Object(l.g)())
						}, e))
					}
				}, [n, O, t, _]), c.a.createElement(j, f({
					onOverlayClick: () => {
						O && (clearTimeout(Number(s)), n(Object(o.k)()), t(Object(l.h)()))
					}
				}, e, {
					overlayClassName: p.a.overlay,
					withOverlay: !0
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationsPrePromptLoader.3cd57301f55cffbc5cd7.js.map