// https://www.redditstatic.com/desktop2x/NotificationsPrePromptLoader.4b6be53f8f22ff08387f.js
// Retrieved at 8/30/2022, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationsPrePromptLoader"], {
		"./src/reddit/components/NotificationsPrePrompt/index.m.less": function(e, n, t) {
			e.exports = {
				overlay: "_3Ig_EsWWVLquWs2yBBQjec",
				backgroundAnimation: "_2iwhmPhcdf_cKfsjSxiNTC"
			}
		},
		"./src/reddit/components/NotificationsPrePrompt/index.tsx": function(e, n, t) {
			"use strict";
			t.r(n);
			var o = t("./node_modules/react/index.js"),
				i = t.n(o),
				c = t("./node_modules/react-redux/es/index.js"),
				r = t("./src/higherOrderComponents/asModal/index.tsx"),
				s = t("./src/lib/notifications/constants.ts"),
				a = t("./src/reddit/components/TrackingHelper/index.tsx"),
				u = t("./src/reddit/constants/experiments.ts"),
				d = t("./src/reddit/helpers/trackers/notifications.ts"),
				f = t("./src/reddit/helpers/chooseVariant/index.ts");

			function l(e) {
				const n = Object(f.c)(e, {
					experimentEligibilitySelector: f.a,
					experimentName: u.Gb
				});
				return !Object(u.sg)(n) && n
			}
			var p, m = t("./src/reddit/components/NotificationsPrePrompt/index.m.less"),
				_ = t.n(m);

			function b() {
				return (b = Object.assign || function(e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ThreeSec = 3e3] = "ThreeSec", e[e.FiveSec = 5e3] = "FiveSec", e[e.TenSec = 1e4] = "TenSec"
			}(p || (p = {}));
			const O = Object(r.a)(() => null);
			n.default = e => {
				const n = Object(a.b)(),
					t = Object(c.d)(),
					[r, f] = Object(o.useState)(),
					m = Object(c.e)(l),
					j = Object(o.useCallback)(() => m === u.id.ThreeSeconds ? p.ThreeSec : m === u.id.FiveSeconds ? p.FiveSec : p.TenSec, [m]);
				return Object(o.useEffect)(() => {
					if (m) {
						const e = j();
						f(setTimeout(() => {
							t(Object(s.k)()), n(Object(d.g)())
						}, e))
					}
				}, [t, m, n, j]), i.a.createElement(O, b({
					onOverlayClick: () => {
						m && (clearTimeout(Number(r)), t(Object(s.k)()), n(Object(d.h)()))
					}
				}, e, {
					overlayClassName: _.a.overlay,
					withOverlay: !0
				}))
			}
		},
		"./src/reddit/helpers/trackers/notifications.ts": function(e, n, t) {
			"use strict";
			t.d(n, "j", (function() {
				return u
			})), t.d(n, "d", (function() {
				return d
			})), t.d(n, "e", (function() {
				return f
			})), t.d(n, "f", (function() {
				return l
			})), t.d(n, "l", (function() {
				return m
			})), t.d(n, "m", (function() {
				return _
			})), t.d(n, "k", (function() {
				return b
			})), t.d(n, "c", (function() {
				return j
			})), t.d(n, "b", (function() {
				return v
			})), t.d(n, "i", (function() {
				return y
			})), t.d(n, "a", (function() {
				return h
			})), t.d(n, "n", (function() {
				return x
			})), t.d(n, "o", (function() {
				return g
			})), t.d(n, "h", (function() {
				return S
			})), t.d(n, "g", (function() {
				return k
			}));
			var o = t("./src/reddit/selectors/telemetry.ts"),
				i = t("./src/telemetry/index.ts"),
				c = t("./src/telemetry/models/Event.ts");
			var r;
			! function(e) {
				e.FREQUENT = "frequent", e.LOW = "low", e.OFF = "off"
			}(r || (r = {}));
			const s = e => ({
					...o.n(e),
					noun: "desktop_notification_permissions"
				}),
				a = e => e ? "enable" : "disable",
				u = e => {
					Object(i.a)({
						...s(e),
						action: c.c.View,
						source: "popup"
					})
				},
				d = e => {
					Object(i.a)({
						...s(e),
						action: c.c.Allow,
						source: "popup"
					})
				},
				f = e => {
					Object(i.a)({
						...s(e),
						action: c.c.Block,
						source: "popup"
					})
				},
				l = e => {
					Object(i.a)({
						...s(e),
						action: c.c.Close,
						source: "popup"
					})
				},
				p = (e, n, t) => ({
					...o.n(e),
					actionInfo: o.d(e, {
						success: n,
						reason: t
					}),
					noun: "push_token"
				}),
				m = e => {
					Object(i.a)({
						...p(e, !0),
						action: c.c.Request,
						source: "notification"
					})
				},
				_ = e => {
					Object(i.a)({
						...p(e, !0),
						action: c.c.Register,
						source: "notification"
					})
				},
				b = (e, n) => {
					Object(i.a)({
						...p(e, !1, n),
						action: c.c.Bail,
						source: "notification"
					})
				},
				O = e => ({
					...o.n(e),
					noun: "push_notification"
				}),
				j = e => ({
					...O(e),
					notification: o.E(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				v = (e, n) => t => ({
					...o.n(t),
					action: a(e),
					email: {
						type: n
					},
					noun: "email",
					source: "email_app_settings"
				}),
				y = (e, n) => t => ({
					...o.n(t),
					action: a(e),
					notification: {
						type: n
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				h = e => n => ({
					...o.n(n),
					source: "email_app_settings",
					action: a(e),
					noun: "email",
					notification: {
						type: "all"
					}
				}),
				x = (e, n, t) => i => ({
					...o.n(i),
					action: "set_frequency",
					noun: t,
					source: "community_notifications",
					subreddit: {
						id: e,
						name: n.toLowerCase()
					}
				}),
				g = () => e => ({
					...o.n(e),
					action: c.c.View,
					noun: "screen",
					source: "global",
					actionInfo: {
						pageType: "community_alerts"
					}
				}),
				S = () => e => ({
					...o.n(e),
					action: "click",
					noun: "desktop_notification_permissions",
					source: "overlay"
				}),
				k = () => e => ({
					...o.n(e),
					action: "auto_dismiss",
					noun: "desktop_notification_permissions",
					source: "overlay"
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationsPrePromptLoader.4b6be53f8f22ff08387f.js.map