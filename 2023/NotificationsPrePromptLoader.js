// https://www.redditstatic.com/desktop2x/NotificationsPrePromptLoader.bf376437394794c9e1fc.js
// Retrieved at 6/21/2023, 9:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationsPrePromptLoader"], {
		"./src/reddit/components/NotificationsPrePrompt/index.m.less": function(t, n, o) {
			t.exports = {
				overlay: "_3Ig_EsWWVLquWs2yBBQjec",
				backgroundAnimation: "_2iwhmPhcdf_cKfsjSxiNTC"
			}
		},
		"./src/reddit/components/NotificationsPrePrompt/index.tsx": function(t, n, o) {
			"use strict";
			o.r(n), o.d(n, "NotificationsPrePrompt", (function() {
				return p
			}));
			var e = o("./node_modules/react/index.js"),
				i = o.n(e),
				c = o("./node_modules/react-redux/es/index.js"),
				r = o("./src/higherOrderComponents/asModal/index.tsx"),
				s = o("./src/lib/notifications/constants.ts"),
				a = o("./src/reddit/components/TrackingHelper/index.tsx"),
				u = o("./src/reddit/helpers/trackers/notifications.ts"),
				d = o("./src/reddit/components/NotificationsPrePrompt/index.m.less"),
				f = o.n(d);

			function l() {
				return (l = Object.assign || function(t) {
					for (var n = 1; n < arguments.length; n++) {
						var o = arguments[n];
						for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e])
					}
					return t
				}).apply(this, arguments)
			}
			const p = Object(r.a)(() => null);
			n.default = t => {
				const n = Object(a.b)(),
					o = Object(c.d)(),
					[r, d] = Object(e.useState)();
				return Object(e.useEffect)(() => {
					d(setTimeout(() => {
						o(Object(s.n)()), n(Object(u.g)())
					}, 5e3))
				}, [o, n]), i.a.createElement(p, l({
					onOverlayClick: () => {
						clearTimeout(Number(r)), o(Object(s.n)()), n(Object(u.h)())
					}
				}, t, {
					overlayClassName: f.a.overlay,
					withOverlay: !0
				}))
			}
		},
		"./src/reddit/helpers/trackers/notifications.ts": function(t, n, o) {
			"use strict";
			o.d(n, "j", (function() {
				return u
			})), o.d(n, "d", (function() {
				return d
			})), o.d(n, "e", (function() {
				return f
			})), o.d(n, "f", (function() {
				return l
			})), o.d(n, "l", (function() {
				return m
			})), o.d(n, "m", (function() {
				return _
			})), o.d(n, "k", (function() {
				return O
			})), o.d(n, "c", (function() {
				return j
			})), o.d(n, "b", (function() {
				return y
			})), o.d(n, "i", (function() {
				return v
			})), o.d(n, "a", (function() {
				return h
			})), o.d(n, "n", (function() {
				return g
			})), o.d(n, "o", (function() {
				return x
			})), o.d(n, "h", (function() {
				return k
			})), o.d(n, "g", (function() {
				return w
			}));
			var e = o("./src/reddit/selectors/telemetry.ts"),
				i = o("./src/telemetry/index.ts"),
				c = o("./src/telemetry/models/Event.ts");
			var r;
			! function(t) {
				t.FREQUENT = "frequent", t.LOW = "low", t.OFF = "off"
			}(r || (r = {}));
			const s = t => ({
					...e.o(t),
					noun: "desktop_notification_permissions"
				}),
				a = t => t ? "enable" : "disable",
				u = t => {
					Object(i.a)({
						...s(t),
						action: c.c.View,
						source: "popup"
					})
				},
				d = t => {
					Object(i.a)({
						...s(t),
						action: c.c.Allow,
						source: "popup"
					})
				},
				f = t => {
					Object(i.a)({
						...s(t),
						action: c.c.Block,
						source: "popup"
					})
				},
				l = t => {
					Object(i.a)({
						...s(t),
						action: c.c.Close,
						source: "popup"
					})
				},
				p = (t, n, o) => ({
					...e.o(t),
					actionInfo: e.d(t, {
						success: n,
						reason: o
					}),
					noun: "push_token"
				}),
				m = t => {
					Object(i.a)({
						...p(t, !0),
						action: c.c.Request,
						source: "notification"
					})
				},
				_ = t => {
					Object(i.a)({
						...p(t, !0),
						action: c.c.Register,
						source: "notification"
					})
				},
				O = (t, n) => {
					Object(i.a)({
						...p(t, !1, n),
						action: c.c.Bail,
						source: "notification"
					})
				},
				b = t => ({
					...e.o(t),
					noun: "push_notification"
				}),
				j = t => ({
					...b(t),
					notification: e.F(t, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				y = (t, n) => o => ({
					...e.o(o),
					action: a(t),
					email: {
						type: n
					},
					noun: "email",
					source: "email_app_settings"
				}),
				v = (t, n) => o => ({
					...e.o(o),
					action: a(t),
					notification: {
						type: n
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				h = t => n => ({
					...e.o(n),
					source: "email_app_settings",
					action: a(t),
					noun: "email",
					notification: {
						type: "all"
					}
				}),
				g = (t, n, o) => i => ({
					...e.o(i),
					action: "set_frequency",
					noun: o,
					source: "community_notifications",
					subreddit: {
						id: t,
						name: n.toLowerCase()
					}
				}),
				x = () => t => ({
					...e.o(t),
					action: c.c.View,
					noun: "screen",
					source: "global",
					actionInfo: {
						pageType: "community_alerts"
					}
				}),
				k = () => t => ({
					...e.o(t),
					action: "click",
					noun: "desktop_notification_permissions",
					source: "overlay"
				}),
				w = () => t => ({
					...e.o(t),
					action: "auto_dismiss",
					noun: "desktop_notification_permissions",
					source: "overlay"
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationsPrePromptLoader.bf376437394794c9e1fc.js.map