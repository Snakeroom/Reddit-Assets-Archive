// https://www.redditstatic.com/desktop2x/PushNotifications.273ea5d53792337a0ce5.js
// Retrieved at 2/28/2021, 9:18:37 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PushNotifications"], {
		"./src/graphql/operations/RegisterWebPushToken.json": function(e) {
			e.exports = JSON.parse('{"id":"197650c1946c"}')
		},
		"./src/lib/notifications/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			}));
			var n = i("./src/lib/localStorageAvailable/index.ts"),
				s = i("./src/lib/notifications/constants.ts"),
				o = i("./src/lib/notifications/featureFlags.ts");
			i("./src/lib/serviceWorker/index.ts");
			const r = async (e, t, i, r, c, a) => {
				if (Object(n.a)()) {
					const t = localStorage.getItem(s.h),
						i = (new Date).getTime();
					if (!e && t && parseInt(t) + s.i > i) return void a();
					localStorage.setItem(s.h, i.toString())
				}
				const l = Object(o.a)();
				if (l === s.c.BrowserUnsupported || l === s.c.LocalStorageUnavailable || l === s.c.NotAllRequiredAPIsSupported) return void a();
				if ("denied" === Notification.permission) return r(!1, !1), void a();
				if ("granted" === Notification.permission) return c(!1), void a();
				const u = localStorage.getItem(s.f);
				if (t || !u || u !== s.g) switch (i(), await Notification.requestPermission()) {
					case "granted":
						c(!0);
						break;
					case "denied":
						r(!0, !0);
						break;
					default:
						r(!0, !1), localStorage.setItem(s.f, s.g)
				} else a()
			}
		},
		"./src/lib/notifications/token.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return l
			})), i.d(t, "b", (function() {
				return u
			}));
			var n = i("./src/config.ts"),
				s = i("./src/graphql/operations/RegisterWebPushToken.json"),
				o = i("./src/lib/makeGqlRequest/index.ts"),
				r = i("./src/lib/serviceWorker/index.ts"),
				c = i("./src/lib/timezone/index.ts"),
				a = e => {
					const t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"),
						i = window.atob(t),
						n = new Uint8Array(i.length);
					for (let s = 0; s < i.length; ++s) n[s] = i.charCodeAt(s);
					return n
				};
			var l;
			! function(e) {
				e[e.Success = 0] = "Success", e[e.FailedGeneric = 1] = "FailedGeneric", e[e.FailedResponse = 2] = "FailedResponse", e[e.FailedGqlReponse = 3] = "FailedGqlReponse", e[e.FailedNoServiceWorker = 4] = "FailedNoServiceWorker", e[e.FailedNoSubscription = 5] = "FailedNoSubscription"
			}(l || (l = {}));
			const u = async e => {
				try {
					const t = await Object(r.a)();
					if (!t) return l.FailedNoServiceWorker;
					let i = await t.pushManager.getSubscription();
					if (!i) {
						const e = {
							userVisibleOnly: !0,
							applicationServerKey: a(n.a.pushNotificationApplicationServerKey)
						};
						i = await t.pushManager.subscribe(e)
					}
					if (!i) return l.FailedNoSubscription;
					const u = await ((e, t) => {
						const i = {
							pushToken: JSON.stringify(t),
							timezoneName: Object(c.b)() || c.a,
							timestamp: (new Date).toISOString(),
							language: "en_us"
						};
						return Object(o.a)(e(), {
							...s,
							variables: i
						})
					})(e, i);
					if (u && !u.ok) return l.FailedResponse;
					const d = null == u ? void 0 : u.body.data.registerWebPushToken;
					return d && !d.ok ? l.FailedGqlReponse : l.Success
				} catch (t) {
					return console.error(t), l.FailedGeneric
				}
			}
		},
		"./src/reddit/actions/notifications/index.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "initializeServiceWorkerChannel", (function() {
				return S
			})), i.d(t, "requestNotificationsPermissions", (function() {
				return y
			})), i.d(t, "subscribeForPNs", (function() {
				return F
			})), i.d(t, "unsubscribeFromPNs", (function() {
				return N
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/lodash/omit.js"),
				o = i.n(s),
				r = i("./src/lib/browser/isIncognito.ts"),
				c = i("./src/lib/notifications/token.ts"),
				a = i("./src/lib/notifications/index.ts"),
				l = i("./src/lib/notifications/constants.ts"),
				u = i("./src/lib/serviceWorker/index.ts"),
				d = i("./src/reddit/actions/chat/toggle.ts"),
				f = i("./src/reddit/actions/notifications/state.ts"),
				b = i("./src/reddit/actions/notifications/utils.ts"),
				p = i("./src/reddit/actions/tabBadging.ts"),
				g = i("./src/reddit/actions/toaster.ts"),
				h = i("./src/reddit/helpers/parseUrl.ts"),
				m = i("./src/reddit/helpers/tabBadging/index.ts"),
				v = i("./src/reddit/helpers/trackers/notifications.ts"),
				O = i("./src/reddit/models/Toast/index.ts"),
				j = i("./src/reddit/selectors/meta.ts"),
				_ = i("./src/reddit/selectors/user.ts");
			let k = !1;
			const S = async (e, t) => {
				const i = Object(_.I)(e);
				if (k) return;
				if (k = !0, Object(b.a)(e) !== l.c.NotificationsSupported) return;
				await Object(u.a)();
				navigator.serviceWorker.addEventListener("message", n => {
					const s = n.data,
						r = s.command || s.type;
					if ("registerWithServiceWorker" === r) w(e);
					else if (r === m.a && i) {
						const e = o()(s, ["command"]);
						t(Object(p.f)(e))
					} else if ("navigate.chat" === r) {
						const e = Object(h.a)(s.data.href);
						e && e.pathname && t(Object(d.b)(e.pathname))
					}
				}), w(e)
			}, w = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: v.b(e)
				})
			}, y = (e, t, i = (() => {})) => async (n, s, o) => {
				const c = s(),
					u = Object(j.h)(c);
				if (await Object(r.a)() || u) return;
				await S(c, n);
				v.i(c), Object(a.a)(e, t, () => {
					n(Object(l.n)()), n(Object(l.m)()), v.g(c)
				}, (e, t) => {
					n(Object(l.k)()), e && (t ? v.d(c) : v.e(c))
				}, e => {
					n(Object(l.l)()), n(F()), e && v.c(c)
				}, () => {
					i()
				})
			}, F = e => async (t, i, s) => {
				const o = i();
				try {
					const i = await Object(c.b)(s.gqlContext);
					switch (Object(f.c)(), i) {
						case c.a.Success:
							v.j(o), e && t(Object(g.e)({
								kind: O.b.SuccessCommunity,
								text: n.fbt._("Changes saved", null, {
									hk: "wGH5U"
								})
							}));
							break;
						case c.a.FailedResponse:
							v.h(o, "registration_failed_generally");
							break;
						case c.a.FailedGqlReponse:
							v.h(o, "registration_failed_in_gql")
					}
				} catch (r) {
					v.h(o, "registration_failed_uncaught_exception"), console.error(r)
				}
			}, N = e => async (t, i, s) => {
				try {
					const i = await Object(u.a)();
					if (i) {
						const s = await i.pushManager.getSubscription();
						s && (s.unsubscribe(), Object(f.c)(), e && t(Object(g.e)({
							kind: O.b.SuccessCommunity,
							text: n.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						})))
					}
				} catch (o) {}
			}
		},
		"./src/reddit/helpers/trackers/notifications.ts": function(e, t, i) {
			"use strict";
			i.d(t, "g", (function() {
				return a
			})), i.d(t, "c", (function() {
				return l
			})), i.d(t, "d", (function() {
				return u
			})), i.d(t, "e", (function() {
				return d
			})), i.d(t, "i", (function() {
				return b
			})), i.d(t, "j", (function() {
				return p
			})), i.d(t, "h", (function() {
				return g
			})), i.d(t, "b", (function() {
				return m
			})), i.d(t, "f", (function() {
				return v
			})), i.d(t, "a", (function() {
				return O
			}));
			var n = i("./src/reddit/selectors/telemetry.ts"),
				s = i("./src/telemetry/index.ts"),
				o = i("./src/telemetry/models/Event.ts");
			const r = e => ({
					...n.defaults(e),
					noun: "desktop_notification_permissions"
				}),
				c = e => e ? "enable" : "disable",
				a = e => {
					Object(s.a)({
						...r(e),
						action: o.c.View,
						source: "popup"
					})
				},
				l = e => {
					Object(s.a)({
						...r(e),
						action: o.c.Allow,
						source: "popup"
					})
				},
				u = e => {
					Object(s.a)({
						...r(e),
						action: o.c.Block,
						source: "popup"
					})
				},
				d = e => {
					Object(s.a)({
						...r(e),
						action: o.c.Close,
						source: "popup"
					})
				},
				f = (e, t, i) => ({
					...n.defaults(e),
					actionInfo: n.actionInfo(e, {
						success: t,
						reason: i
					}),
					noun: "push_token"
				}),
				b = e => {
					Object(s.a)({
						...f(e, !0),
						action: o.c.Request,
						source: "notification"
					})
				},
				p = e => {
					Object(s.a)({
						...f(e, !0),
						action: o.c.Register,
						source: "notification"
					})
				},
				g = (e, t) => {
					Object(s.a)({
						...f(e, !1, t),
						action: o.c.Bail,
						source: "notification"
					})
				},
				h = e => ({
					...n.defaults(e),
					noun: "push_notification"
				}),
				m = e => ({
					...h(e),
					notification: n.notification(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				v = (e, t, i) => s => ({
					...n.defaults(s),
					action: c(e),
					notification: {
						type: t
					},
					noun: i ? "email" : "notification",
					source: i ? "email_app_settings" : "notification_app_settings"
				}),
				O = e => t => ({
					...n.defaults(t),
					source: "email_app_settings",
					action: c(e),
					noun: "email",
					notification: {
						type: "all"
					}
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PushNotifications.273ea5d53792337a0ce5.js.map