// https://www.redditstatic.com/desktop2x/PushNotifications.8500bd895f7ca1610fef.js
// Retrieved at 3/17/2020, 2:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PushNotifications"], {
		"./src/graphql/operations/RegisterWebPushToken.json": function(e) {
			e.exports = JSON.parse('{"id":"197650c1946c"}')
		},
		"./src/reddit/actions/notifications/index.ts": function(e, t, i) {
			"use strict";
			i.r(t);
			i("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = i("./src/config.ts"),
				n = i("./node_modules/lodash/omit.js"),
				r = i.n(n),
				o = i("./src/lib/browser/isIncognito.ts"),
				a = i("./src/lib/constants/index.ts"),
				c = i("./src/lib/localStorageAvailable/index.ts"),
				u = (i("./node_modules/core-js/modules/es6.regexp.replace.js"), e => {
					const t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"),
						i = window.atob(t),
						s = new Uint8Array(i.length);
					for (let n = 0; n < i.length; ++n) s[n] = i.charCodeAt(n);
					return s
				}),
				d = i("./src/reddit/actions/notifications/constants.ts"),
				l = i("./src/reddit/actions/notifications/state.ts"),
				g = i("./src/reddit/actions/notifications/utils.ts"),
				b = i("./src/reddit/actions/tabBadging.ts"),
				f = i("./src/reddit/actions/toaster.ts"),
				p = i("./src/graphql/operations/RegisterWebPushToken.json"),
				j = i("./src/lib/makeGqlRequest/index.ts"),
				m = i("./src/lib/timezone/index.ts");
			var O = i("./src/reddit/helpers/tabBadging/index.ts"),
				h = i("./src/reddit/helpers/trackers/notifications.ts"),
				v = i("./src/reddit/i18n/utils.ts"),
				w = i("./src/reddit/models/Toast/index.ts"),
				_ = i("./src/reddit/selectors/experiments/badging.ts");
			i.d(t, "getBrowserNotificationPermission", (function() {
				return S
			})), i.d(t, "resetPermissionRequestClosed", (function() {
				return y
			})), i.d(t, "isBrowserSubscribedForPushNotifications", (function() {
				return N
			})), i.d(t, "initializeServiceWorkerChannel", (function() {
				return I
			})), i.d(t, "requestNotificationsPermissions", (function() {
				return P
			})), i.d(t, "subscribeForPNs", (function() {
				return W
			})), i.d(t, "unsubscribeFromPNs", (function() {
				return A
			}));
			const k = 4 * a.K,
				S = () => {
					const e = Object(c.a)() && "1" === localStorage.getItem("notification-permission-request-closed");
					return "granted" === Notification.permission ? d.a.Granted : "denied" === Notification.permission ? d.a.Denied : e ? d.a.Closed : d.a.Default
				},
				y = () => !!Object(c.a)() && (localStorage.removeItem("notification-permission-request-closed"), !0),
				N = async () => {
					let e;
					try {
						e = await navigator.serviceWorker.register("/sw.js")
					} catch (t) {
						return !1
					}
					return null !== await e.pushManager.getSubscription()
				}, x = e => {
					navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: "registerClient",
						v2EventBoilerPlate: h.a(e)
					})
				};
			let q = !1;
			const I = async (e, t) => {
				const i = Object(_.a)(e);
				if (q) return;
				if (q = !0, Object(g.a)(e) !== d.f.NotificationsSupported) return;
				try {
					await navigator.serviceWorker.register("/sw.js")
				} catch (s) {
					return
				}
				navigator.serviceWorker.addEventListener("message", s => {
					const n = s.data,
						o = n.command;
					if ("registerWithServiceWorker" === o) x(e);
					else if (o === O.a && i) {
						const e = r()(n, ["command"]);
						t(Object(b.c)(e))
					}
				}), x(e)
			}, P = (e, t) => async (i, s, n) => {
				const r = s();
				if (await Object(o.a)()) return;
				if (await I(r, i), Object(c.a)()) {
					const t = localStorage.getItem("push-token-last-refresh-ms"),
						i = (new Date).getTime();
					if (!e && t && parseInt(t) + k > i) return;
					localStorage.setItem("push-token-last-refresh-ms", i.toString())
				}
				h.h(r);
				const a = Object(g.a)(r);
				if (a === d.f.BrowserUnsupported) return;
				if (a === d.f.LocalStorageUnavailable) return;
				if (a === d.f.NotAllRequiredAPIsSupported) return;
				if ("denied" === Notification.permission) return void i(Object(d.m)());
				if ("granted" === Notification.permission) return i(Object(d.n)()), void i(W());
				const u = localStorage.getItem("notification-permission-request-closed");
				if (t || !u || "1" !== u) switch (i(Object(d.p)()), i(Object(d.o)()), h.f(r), await Notification.requestPermission()) {
					case "granted":
						i(Object(d.n)()), i(W()), h.b(r);
						break;
					case "denied":
						i(Object(d.m)()), h.c(r);
						break;
					default:
						i(Object(d.m)()), h.d(r), localStorage.setItem("notification-permission-request-closed", "1")
				}
			}, W = e => async (t, i, n) => {
				const r = i();
				try {
					const o = await navigator.serviceWorker.register("/sw.js");
					let a = await o.pushManager.getSubscription();
					if (!a) {
						const e = {
							userVisibleOnly: !0,
							applicationServerKey: u(s.a.pushNotificationApplicationServerKey)
						};
						a = await o.pushManager.subscribe(e)
					}
					Object(l.c)();
					const c = await ((e, t, i) => {
							const s = {
								pushToken: JSON.stringify(i),
								timezoneName: Object(m.b)() || m.a,
								timestamp: (new Date).toISOString(),
								language: "en_us"
							};
							return Object(j.a)(e, Object.assign({}, p, {
								variables: s
							}))
						})(n.gqlContext(), i(), a),
						d = c.body.data.registerWebPushToken;
					c.ok ? d && !d.ok ? h.g(r, "registration_failed_in_gql") : (h.i(r), e && t(Object(f.e)({
						kind: w.b.SuccessCommunity,
						text: Object(v.c)("Changes saved")
					}))) : h.g(r, "registration_failed_generally")
				} catch (o) {
					h.g(r, "registration_failed_uncaught_exception"), console.error(o)
				}
			}, A = e => async (t, i, s) => {
				try {
					const i = await navigator.serviceWorker.register("/sw.js"),
						s = await i.pushManager.getSubscription();
					s && (s.unsubscribe(), Object(l.c)(), e && t(Object(f.e)({
						kind: w.b.SuccessCommunity,
						text: Object(v.c)("Changes saved")
					})))
				} catch (n) {}
			}
		},
		"./src/reddit/helpers/trackers/notifications.ts": function(e, t, i) {
			"use strict";
			i.d(t, "f", (function() {
				return a
			})), i.d(t, "b", (function() {
				return c
			})), i.d(t, "c", (function() {
				return u
			})), i.d(t, "d", (function() {
				return d
			})), i.d(t, "h", (function() {
				return g
			})), i.d(t, "i", (function() {
				return b
			})), i.d(t, "g", (function() {
				return f
			})), i.d(t, "a", (function() {
				return p
			})), i.d(t, "e", (function() {
				return j
			}));
			var s = i("./src/reddit/selectors/telemetry.ts"),
				n = i("./src/telemetry/index.ts");
			const r = e => Object.assign({}, s.defaults(e), {
					noun: "desktop_notification_permissions"
				}),
				o = e => e ? "enable" : "disable",
				a = e => {
					Object(n.a)(Object.assign({}, r(e), {
						action: "view",
						source: "popup"
					}))
				},
				c = e => {
					Object(n.a)(Object.assign({}, r(e), {
						action: "allow",
						source: "popup"
					}))
				},
				u = e => {
					Object(n.a)(Object.assign({}, r(e), {
						action: "block",
						source: "popup"
					}))
				},
				d = e => {
					Object(n.a)(Object.assign({}, r(e), {
						action: "close",
						source: "popup"
					}))
				},
				l = (e, t, i) => Object.assign({}, s.defaults(e), {
					actionInfo: s.actionInfo(e, {
						success: t,
						reason: i
					}),
					noun: "push_token"
				}),
				g = e => {
					Object(n.a)(Object.assign({}, l(e, !0), {
						action: "request",
						source: "notification"
					}))
				},
				b = e => {
					Object(n.a)(Object.assign({}, l(e, !0), {
						action: "register",
						source: "notification"
					}))
				},
				f = (e, t) => {
					Object(n.a)(Object.assign({}, l(e, !1, t), {
						action: "bail",
						source: "notification"
					}))
				},
				p = e => Object.assign({}, (e => Object.assign({}, s.defaults(e), {
					noun: "push_notification"
				}))(e), {
					notification: s.notification(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				j = (e, t) => i => Object.assign({}, s.defaults(i), {
					action: o(t),
					noun: e,
					source: "notification"
				})
		}
	}
]);
//# sourceMappingURL=PushNotifications.8500bd895f7ca1610fef.js.map