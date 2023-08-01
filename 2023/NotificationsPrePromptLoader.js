// https://www.redditstatic.com/desktop2x/NotificationsPrePromptLoader.9376ff11bf2c33b296bd.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationsPrePromptLoader"], {
		"./src/reddit/components/NotificationsPrePrompt/index.m.less": function(t, n, e) {
			t.exports = {
				overlay: "_3Ig_EsWWVLquWs2yBBQjec",
				backgroundAnimation: "_2iwhmPhcdf_cKfsjSxiNTC"
			}
		},
		"./src/reddit/components/NotificationsPrePrompt/index.tsx": function(t, n, e) {
			"use strict";
			e.r(n), e.d(n, "NotificationsPrePrompt", (function() {
				return p
			}));
			var o = e("./node_modules/react/index.js"),
				i = e.n(o),
				c = e("./node_modules/react-redux/es/index.js"),
				r = e("./src/higherOrderComponents/asModal/index.tsx"),
				s = e("./src/lib/notifications/constants.ts"),
				a = e("./src/reddit/components/TrackingHelper/index.tsx"),
				u = e("./src/reddit/helpers/trackers/notifications.ts"),
				d = e("./src/reddit/components/NotificationsPrePrompt/index.m.less"),
				f = e.n(d);

			function l() {
				return (l = Object.assign || function(t) {
					for (var n = 1; n < arguments.length; n++) {
						var e = arguments[n];
						for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
					}
					return t
				}).apply(this, arguments)
			}
			const p = Object(r.a)(() => null);
			n.default = t => {
				const n = Object(a.b)(),
					e = Object(c.d)(),
					[r, d] = Object(o.useState)();
				return Object(o.useEffect)(() => {
					d(setTimeout(() => {
						e(Object(s.n)()), n(Object(u.g)())
					}, 5e3))
				}, [e, n]), i.a.createElement(p, l({
					onOverlayClick: () => {
						clearTimeout(Number(r)), e(Object(s.n)()), n(Object(u.h)())
					}
				}, t, {
					overlayClassName: f.a.overlay,
					withOverlay: !0
				}))
			}
		},
		"./src/reddit/helpers/trackers/notifications.ts": function(t, n, e) {
			"use strict";
			e.d(n, "j", (function() {
				return u
			})), e.d(n, "d", (function() {
				return d
			})), e.d(n, "e", (function() {
				return f
			})), e.d(n, "f", (function() {
				return l
			})), e.d(n, "l", (function() {
				return m
			})), e.d(n, "m", (function() {
				return _
			})), e.d(n, "k", (function() {
				return b
			})), e.d(n, "c", (function() {
				return j
			})), e.d(n, "b", (function() {
				return y
			})), e.d(n, "i", (function() {
				return v
			})), e.d(n, "a", (function() {
				return h
			})), e.d(n, "n", (function() {
				return g
			})), e.d(n, "o", (function() {
				return q
			})), e.d(n, "h", (function() {
				return x
			})), e.d(n, "g", (function() {
				return k
			}));
			var o = e("./src/reddit/selectors/telemetry.ts"),
				i = e("./src/telemetry/index.ts"),
				c = e("./src/telemetry/models/Event.ts");
			var r;
			! function(t) {
				t.FREQUENT = "frequent", t.LOW = "low", t.OFF = "off"
			}(r || (r = {}));
			const s = t => ({
					...o.q(t),
					noun: "desktop_notification_permissions"
				}),
				a = t => t ? "enable" : "disable",
				u = t => {
					Object(i.a)({
						...s(t),
						action: c.b.View,
						source: "popup"
					})
				},
				d = t => {
					Object(i.a)({
						...s(t),
						action: c.b.Allow,
						source: "popup"
					})
				},
				f = t => {
					Object(i.a)({
						...s(t),
						action: c.b.Block,
						source: "popup"
					})
				},
				l = t => {
					Object(i.a)({
						...s(t),
						action: c.b.Close,
						source: "popup"
					})
				},
				p = (t, n, e) => ({
					...o.q(t),
					actionInfo: o.d(t, {
						success: n,
						reason: e
					}),
					noun: "push_token"
				}),
				m = t => {
					Object(i.a)({
						...p(t, !0),
						action: c.b.Request,
						source: "notification"
					})
				},
				_ = t => {
					Object(i.a)({
						...p(t, !0),
						action: c.b.Register,
						source: "notification"
					})
				},
				b = (t, n) => {
					Object(i.a)({
						...p(t, !1, n),
						action: c.b.Bail,
						source: "notification"
					})
				},
				O = t => ({
					...o.q(t),
					noun: "push_notification"
				}),
				j = t => ({
					...O(t),
					notification: o.H(t, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				y = (t, n) => e => ({
					...o.q(e),
					action: a(t),
					email: {
						type: n
					},
					noun: "email",
					source: "email_app_settings"
				}),
				v = (t, n) => e => ({
					...o.q(e),
					action: a(t),
					notification: {
						type: n
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				h = t => n => ({
					...o.q(n),
					source: "email_app_settings",
					action: a(t),
					noun: "email",
					notification: {
						type: "all"
					}
				}),
				g = (t, n, e) => i => ({
					...o.q(i),
					action: "set_frequency",
					noun: e,
					source: "community_notifications",
					subreddit: {
						id: t,
						name: n.toLowerCase()
					}
				}),
				q = () => t => ({
					...o.q(t),
					action: c.b.View,
					noun: "screen",
					source: "global",
					actionInfo: {
						pageType: "community_alerts"
					}
				}),
				x = () => t => ({
					...o.q(t),
					action: "click",
					noun: "desktop_notification_permissions",
					source: "overlay"
				}),
				k = () => t => ({
					...o.q(t),
					action: "auto_dismiss",
					noun: "desktop_notification_permissions",
					source: "overlay"
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationsPrePromptLoader.9376ff11bf2c33b296bd.js.map