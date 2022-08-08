// https://www.redditstatic.com/desktop2x/NotificationsPrePromptLoader.47bf643ce70dbf7d0478.js
// Retrieved at 8/8/2022, 2:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationsPrePromptLoader"], {
		"./src/reddit/components/NotificationsPrePrompt/index.m.less": function(e, t, c) {
			e.exports = {
				overlay: "_3Ig_EsWWVLquWs2yBBQjec",
				backgroundAnimation: "_2iwhmPhcdf_cKfsjSxiNTC"
			}
		},
		"./src/reddit/components/NotificationsPrePrompt/index.tsx": function(e, t, c) {
			"use strict";
			c.r(t);
			var n = c("./node_modules/react/index.js"),
				r = c.n(n),
				i = c("./node_modules/react-redux/es/index.js"),
				s = c("./src/higherOrderComponents/asModal/index.tsx"),
				o = c("./src/lib/notifications/constants.ts"),
				a = c("./src/reddit/components/TrackingHelper/index.tsx"),
				d = c("./src/reddit/constants/experiments.ts"),
				l = c("./src/reddit/helpers/trackers/notifications.ts"),
				u = c("./src/reddit/helpers/chooseVariant/index.ts");

			function m(e) {
				const t = Object(u.c)(e, {
					experimentEligibilitySelector: u.a,
					experimentName: d.Eb
				});
				return !Object(d.bg)(t) && t
			}
			var b, O = c("./src/reddit/components/NotificationsPrePrompt/index.m.less"),
				p = c.n(O);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var c = arguments[t];
						for (var n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ThreeSec = 3e3] = "ThreeSec", e[e.FiveSec = 5e3] = "FiveSec", e[e.TenSec = 1e4] = "TenSec"
			}(b || (b = {}));
			const j = Object(s.a)(() => null);
			t.default = e => {
				const t = Object(a.b)(),
					c = Object(i.d)(),
					[s, u] = Object(n.useState)(),
					O = Object(i.e)(m),
					_ = Object(n.useCallback)(() => O === d.Wc.ThreeSeconds ? b.ThreeSec : O === d.Wc.FiveSeconds ? b.FiveSec : b.TenSec, [O]);
				return Object(n.useEffect)(() => {
					if (O) {
						const e = _();
						u(setTimeout(() => {
							c(Object(o.k)()), t(Object(l.g)())
						}, e))
					}
				}, [c, O, t, _]), r.a.createElement(j, f({
					onOverlayClick: () => {
						O && (clearTimeout(Number(s)), c(Object(o.k)()), t(Object(l.h)()))
					}
				}, e, {
					overlayClassName: p.a.overlay,
					withOverlay: !0
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationsPrePromptLoader.47bf643ce70dbf7d0478.js.map