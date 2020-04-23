// https://www.redditstatic.com/desktop2x/PushNotifications.9df01268a9599fa678ad.js
// Retrieved at 4/23/2020, 12:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PushNotifications"], {
		"./src/graphql/operations/RegisterWebPushToken.json": function(e) {
			e.exports = JSON.parse('{"id":"197650c1946c"}')
		},
		"./src/reddit/actions/notifications/index.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "getBrowserNotificationPermission", (function() {
				return y
			})), i.d(t, "resetPermissionRequestClosed", (function() {
				return N
			})), i.d(t, "isBrowserSubscribedForPushNotifications", (function() {
				return q
			})), i.d(t, "initializeServiceWorkerChannel", (function() {
				return P
			})), i.d(t, "requestNotificationsPermissions", (function() {
				return W
			})), i.d(t, "subscribeForPNs", (function() {
				return A
			})), i.d(t, "unsubscribeFromPNs", (function() {
				return C
			}));
			i("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = i("./src/config.ts"),
				n = i("./node_modules/fbt/lib/FbtPublic.js"),
				r = i("./node_modules/lodash/omit.js"),
				o = i.n(r),
				a = i("./src/lib/browser/isIncognito.ts"),
				c = i("./src/lib/constants/index.ts"),
				u = i("./src/lib/localStorageAvailable/index.ts"),
				d = (i("./node_modules/core-js/modules/es6.regexp.replace.js"), e => {
					const t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"),
						i = window.atob(t),
						s = new Uint8Array(i.length);
					for (let n = 0; n < i.length; ++n) s[n] = i.charCodeAt(n);
					return s
				}),
				l = i("./src/reddit/actions/notifications/constants.ts"),
				g = i("./src/reddit/actions/notifications/state.ts"),
				b = i("./src/reddit/actions/notifications/utils.ts"),
				f = i("./src/reddit/actions/tabBadging.ts"),
				p = i("./src/reddit/actions/toaster.ts"),
				m = i("./src/graphql/operations/RegisterWebPushToken.json"),
				j = i("./src/lib/makeGqlRequest/index.ts"),
				O = i("./src/lib/timezone/index.ts");
			var h = i("./src/reddit/helpers/tabBadging/index.ts"),
				v = i("./src/reddit/helpers/trackers/notifications.ts"),
				w = i("./src/reddit/models/Toast/index.ts"),
				_ = i("./src/reddit/selectors/meta.ts"),
				k = i("./src/reddit/selectors/user.ts");
			const S = 4 * c.I,
				y = () => {
					const e = Object(u.a)() && "1" === localStorage.getItem("notification-permission-request-closed");
					return "granted" === Notification.permission ? l.a.Granted : "denied" === Notification.permission ? l.a.Denied : e ? l.a.Closed : l.a.Default
				},
				N = () => !!Object(u.a)() && (localStorage.removeItem("notification-permission-request-closed"), !0),
				q = async () => {
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
						v2EventBoilerPlate: v.a(e)
					})
				};
			let I = !1;
			const P = async (e, t) => {
				const i = Object(k.G)(e);
				if (I) return;
				if (I = !0, Object(b.a)(e) !== l.f.NotificationsSupported) return;
				try {
					await navigator.serviceWorker.register("/sw.js")
				} catch (s) {
					return
				}
				navigator.serviceWorker.addEventListener("message", s => {
					const n = s.data,
						r = n.command;
					if ("registerWithServiceWorker" === r) x(e);
					else if (r === h.a && i) {
						const e = o()(n, ["command"]);
						t(Object(f.c)(e))
					}
				}), x(e)
			}, W = (e, t) => async (i, s, n) => {
				const r = s(),
					o = Object(_.g)(r);
				if (await Object(a.a)() || o) return;
				if (await P(r, i), Object(u.a)()) {
					const t = localStorage.getItem("push-token-last-refresh-ms"),
						i = (new Date).getTime();
					if (!e && t && parseInt(t) + S > i) return;
					localStorage.setItem("push-token-last-refresh-ms", i.toString())
				}
				v.h(r);
				const c = Object(b.a)(r);
				if (c === l.f.BrowserUnsupported) return;
				if (c === l.f.LocalStorageUnavailable) return;
				if (c === l.f.NotAllRequiredAPIsSupported) return;
				if ("denied" === Notification.permission) return void i(Object(l.m)());
				if ("granted" === Notification.permission) return i(Object(l.n)()), void i(A());
				const d = localStorage.getItem("notification-permission-request-closed");
				if (t || !d || "1" !== d) switch (i(Object(l.p)()), i(Object(l.o)()), v.f(r), await Notification.requestPermission()) {
					case "granted":
						i(Object(l.n)()), i(A()), v.b(r);
						break;
					case "denied":
						i(Object(l.m)()), v.c(r);
						break;
					default:
						i(Object(l.m)()), v.d(r), localStorage.setItem("notification-permission-request-closed", "1")
				}
			}, A = e => async (t, i, r) => {
				const o = i();
				try {
					const a = await navigator.serviceWorker.register("/sw.js");
					let c = await a.pushManager.getSubscription();
					if (!c) {
						const e = {
							userVisibleOnly: !0,
							applicationServerKey: d(s.a.pushNotificationApplicationServerKey)
						};
						c = await a.pushManager.subscribe(e)
					}
					Object(g.c)();
					const u = await ((e, t, i) => {
							const s = {
								pushToken: JSON.stringify(i),
								timezoneName: Object(O.b)() || O.a,
								timestamp: (new Date).toISOString(),
								language: "en_us"
							};
							return Object(j.a)(e, Object.assign({}, m, {
								variables: s
							}))
						})(r.gqlContext(), i(), c),
						l = u.body.data.registerWebPushToken;
					u.ok ? l && !l.ok ? v.g(o, "registration_failed_in_gql") : (v.i(o), e && t(Object(p.e)({
						kind: w.b.SuccessCommunity,
						text: n.fbt._("Changes saved", null, {
							hk: "wGH5U"
						})
					}))) : v.g(o, "registration_failed_generally")
				} catch (a) {
					v.g(o, "registration_failed_uncaught_exception"), console.error(a)
				}
			}, C = e => async (t, i, s) => {
				try {
					const i = await navigator.serviceWorker.register("/sw.js"),
						s = await i.pushManager.getSubscription();
					s && (s.unsubscribe(), Object(g.c)(), e && t(Object(p.e)({
						kind: w.b.SuccessCommunity,
						text: n.fbt._("Changes saved", null, {
							hk: "wGH5U"
						})
					})))
				} catch (r) {}
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
				return m
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
				m = (e, t) => i => Object.assign({}, s.defaults(i), {
					action: o(t),
					noun: e,
					source: "notification"
				})
		}
	}
]);
//# sourceMappingURL=PushNotifications.9df01268a9599fa678ad.js.map