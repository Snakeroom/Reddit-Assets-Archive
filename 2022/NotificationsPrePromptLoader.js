// https://www.redditstatic.com/desktop2x/NotificationsPrePromptLoader.12cab2d5de38b1e4fea6.js
// Retrieved at 9/12/2022, 2:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationsPrePromptLoader"], {
		"./src/reddit/components/NotificationsPrePrompt/index.m.less": function(n, t, e) {
			n.exports = {
				overlay: "_3Ig_EsWWVLquWs2yBBQjec",
				backgroundAnimation: "_2iwhmPhcdf_cKfsjSxiNTC"
			}
		},
		"./src/reddit/components/NotificationsPrePrompt/index.tsx": function(n, t, e) {
			"use strict";
			e.r(t), e.d(t, "NotificationsPrePrompt", (function() {
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
				return (l = Object.assign || function(n) {
					for (var t = 1; t < arguments.length; t++) {
						var e = arguments[t];
						for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o])
					}
					return n
				}).apply(this, arguments)
			}
			const p = Object(r.a)(() => null);
			t.default = n => {
				const t = Object(a.b)(),
					e = Object(c.d)(),
					[r, d] = Object(o.useState)();
				return Object(o.useEffect)(() => {
					d(setTimeout(() => {
						e(Object(s.k)()), t(Object(u.g)())
					}, 5e3))
				}, [e, t]), i.a.createElement(p, l({
					onOverlayClick: () => {
						clearTimeout(Number(r)), e(Object(s.k)()), t(Object(u.h)())
					}
				}, n, {
					overlayClassName: f.a.overlay,
					withOverlay: !0
				}))
			}
		},
		"./src/reddit/helpers/trackers/notifications.ts": function(n, t, e) {
			"use strict";
			e.d(t, "j", (function() {
				return u
			})), e.d(t, "d", (function() {
				return d
			})), e.d(t, "e", (function() {
				return f
			})), e.d(t, "f", (function() {
				return l
			})), e.d(t, "l", (function() {
				return m
			})), e.d(t, "m", (function() {
				return _
			})), e.d(t, "k", (function() {
				return O
			})), e.d(t, "c", (function() {
				return j
			})), e.d(t, "b", (function() {
				return y
			})), e.d(t, "i", (function() {
				return v
			})), e.d(t, "a", (function() {
				return h
			})), e.d(t, "n", (function() {
				return g
			})), e.d(t, "o", (function() {
				return k
			})), e.d(t, "h", (function() {
				return x
			})), e.d(t, "g", (function() {
				return w
			}));
			var o = e("./src/reddit/selectors/telemetry.ts"),
				i = e("./src/telemetry/index.ts"),
				c = e("./src/telemetry/models/Event.ts");
			var r;
			! function(n) {
				n.FREQUENT = "frequent", n.LOW = "low", n.OFF = "off"
			}(r || (r = {}));
			const s = n => ({
					...o.n(n),
					noun: "desktop_notification_permissions"
				}),
				a = n => n ? "enable" : "disable",
				u = n => {
					Object(i.a)({
						...s(n),
						action: c.c.View,
						source: "popup"
					})
				},
				d = n => {
					Object(i.a)({
						...s(n),
						action: c.c.Allow,
						source: "popup"
					})
				},
				f = n => {
					Object(i.a)({
						...s(n),
						action: c.c.Block,
						source: "popup"
					})
				},
				l = n => {
					Object(i.a)({
						...s(n),
						action: c.c.Close,
						source: "popup"
					})
				},
				p = (n, t, e) => ({
					...o.n(n),
					actionInfo: o.d(n, {
						success: t,
						reason: e
					}),
					noun: "push_token"
				}),
				m = n => {
					Object(i.a)({
						...p(n, !0),
						action: c.c.Request,
						source: "notification"
					})
				},
				_ = n => {
					Object(i.a)({
						...p(n, !0),
						action: c.c.Register,
						source: "notification"
					})
				},
				O = (n, t) => {
					Object(i.a)({
						...p(n, !1, t),
						action: c.c.Bail,
						source: "notification"
					})
				},
				b = n => ({
					...o.n(n),
					noun: "push_notification"
				}),
				j = n => ({
					...b(n),
					notification: o.E(n, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				y = (n, t) => e => ({
					...o.n(e),
					action: a(n),
					email: {
						type: t
					},
					noun: "email",
					source: "email_app_settings"
				}),
				v = (n, t) => e => ({
					...o.n(e),
					action: a(n),
					notification: {
						type: t
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				h = n => t => ({
					...o.n(t),
					source: "email_app_settings",
					action: a(n),
					noun: "email",
					notification: {
						type: "all"
					}
				}),
				g = (n, t, e) => i => ({
					...o.n(i),
					action: "set_frequency",
					noun: e,
					source: "community_notifications",
					subreddit: {
						id: n,
						name: t.toLowerCase()
					}
				}),
				k = () => n => ({
					...o.n(n),
					action: c.c.View,
					noun: "screen",
					source: "global",
					actionInfo: {
						pageType: "community_alerts"
					}
				}),
				x = () => n => ({
					...o.n(n),
					action: "click",
					noun: "desktop_notification_permissions",
					source: "overlay"
				}),
				w = () => n => ({
					...o.n(n),
					action: "auto_dismiss",
					noun: "desktop_notification_permissions",
					source: "overlay"
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationsPrePromptLoader.12cab2d5de38b1e4fea6.js.map