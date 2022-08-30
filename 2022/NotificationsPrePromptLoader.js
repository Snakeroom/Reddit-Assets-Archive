// https://www.redditstatic.com/desktop2x/NotificationsPrePromptLoader.22a0b972972641a554e1.js
// Retrieved at 8/30/2022, 4:00:05 PM by Reddit Dataminer v1.0.0
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
			var o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/higherOrderComponents/asModal/index.tsx"),
				s = n("./src/lib/notifications/constants.ts"),
				a = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/constants/experiments.ts"),
				d = n("./src/reddit/helpers/trackers/notifications.ts"),
				f = n("./src/reddit/helpers/chooseVariant/index.ts");

			function l(e) {
				const t = Object(f.c)(e, {
					experimentEligibilitySelector: f.a,
					experimentName: u.Gb
				});
				return !Object(u.tg)(t) && t
			}
			var p, m = n("./src/reddit/components/NotificationsPrePrompt/index.m.less"),
				_ = n.n(m);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ThreeSec = 3e3] = "ThreeSec", e[e.FiveSec = 5e3] = "FiveSec", e[e.TenSec = 1e4] = "TenSec"
			}(p || (p = {}));
			const O = Object(r.a)(() => null);
			t.default = e => {
				const t = Object(a.b)(),
					n = Object(c.d)(),
					[r, f] = Object(o.useState)(),
					m = Object(c.e)(l),
					j = Object(o.useCallback)(() => m === u.id.ThreeSeconds ? p.ThreeSec : m === u.id.FiveSeconds ? p.FiveSec : p.TenSec, [m]);
				return Object(o.useEffect)(() => {
					if (m) {
						const e = j();
						f(setTimeout(() => {
							n(Object(s.k)()), t(Object(d.g)())
						}, e))
					}
				}, [n, m, t, j]), i.a.createElement(O, b({
					onOverlayClick: () => {
						m && (clearTimeout(Number(r)), n(Object(s.k)()), t(Object(d.h)()))
					}
				}, e, {
					overlayClassName: _.a.overlay,
					withOverlay: !0
				}))
			}
		},
		"./src/reddit/helpers/trackers/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "j", (function() {
				return u
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "m", (function() {
				return _
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "g", (function() {
				return k
			}));
			var o = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/telemetry/index.ts"),
				c = n("./src/telemetry/models/Event.ts");
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
				p = (e, t, n) => ({
					...o.n(e),
					actionInfo: o.d(e, {
						success: t,
						reason: n
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
				b = (e, t) => {
					Object(i.a)({
						...p(e, !1, t),
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
				v = (e, t) => n => ({
					...o.n(n),
					action: a(e),
					email: {
						type: t
					},
					noun: "email",
					source: "email_app_settings"
				}),
				y = (e, t) => n => ({
					...o.n(n),
					action: a(e),
					notification: {
						type: t
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				h = e => t => ({
					...o.n(t),
					source: "email_app_settings",
					action: a(e),
					noun: "email",
					notification: {
						type: "all"
					}
				}),
				x = (e, t, n) => i => ({
					...o.n(i),
					action: "set_frequency",
					noun: n,
					source: "community_notifications",
					subreddit: {
						id: e,
						name: t.toLowerCase()
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationsPrePromptLoader.22a0b972972641a554e1.js.map