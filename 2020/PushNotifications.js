// https://www.redditstatic.com/desktop2x/PushNotifications.88f92e7b929d8a0660df.js
// Retrieved at 7/14/2020, 3:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PushNotifications"], {
		"./src/graphql/operations/RegisterWebPushToken.json": function(e) {
			e.exports = JSON.parse('{"id":"197650c1946c"}')
		},
		"./src/reddit/actions/notifications/index.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "getBrowserNotificationPermission", (function() {
				return q
			})), i.d(t, "resetPermissionRequestClosed", (function() {
				return P
			})), i.d(t, "isBrowserSubscribedForPushNotifications", (function() {
				return I
			})), i.d(t, "initializeServiceWorkerChannel", (function() {
				return C
			})), i.d(t, "requestNotificationsPermissions", (function() {
				return D
			})), i.d(t, "subscribeForPNs", (function() {
				return B
			})), i.d(t, "unsubscribeFromPNs", (function() {
				return L
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
				l = i("./src/reddit/actions/chat/toggle.ts"),
				b = i("./src/reddit/actions/googleOneTap/index.ts"),
				g = i("./src/reddit/actions/notifications/constants.ts"),
				f = i("./src/reddit/actions/notifications/state.ts"),
				p = i("./src/reddit/actions/notifications/utils.ts"),
				j = i("./src/reddit/actions/tabBadging.ts"),
				O = i("./src/reddit/actions/toaster.ts"),
				m = i("./src/graphql/operations/RegisterWebPushToken.json"),
				h = i("./src/lib/makeGqlRequest/index.ts"),
				v = i("./src/lib/timezone/index.ts"),
				w = i("./src/reddit/helpers/parseUrl.ts");
			var _ = i("./src/reddit/helpers/tabBadging/index.ts"),
				k = i("./src/reddit/helpers/trackers/notifications.ts"),
				S = i("./src/reddit/models/Toast/index.ts"),
				y = i("./src/reddit/selectors/meta.ts"),
				N = i("./src/reddit/selectors/user.ts");
			const x = 4 * c.J,
				q = () => {
					const e = Object(u.a)() && "1" === localStorage.getItem("notification-permission-request-closed");
					return "granted" === Notification.permission ? g.a.Granted : "denied" === Notification.permission ? g.a.Denied : e ? g.a.Closed : g.a.Default
				},
				P = () => !!Object(u.a)() && (localStorage.removeItem("notification-permission-request-closed"), !0),
				I = async () => {
					let e;
					try {
						e = await navigator.serviceWorker.register("/sw.js")
					} catch (t) {
						return !1
					}
					return null !== await e.pushManager.getSubscription()
				}, W = e => {
					navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: "registerClient",
						v2EventBoilerPlate: k.a(e)
					})
				};
			let A = !1;
			const C = async (e, t) => {
				const i = Object(N.G)(e);
				if (A) return;
				if (A = !0, Object(p.a)(e) !== g.f.NotificationsSupported) return;
				try {
					await navigator.serviceWorker.register("/sw.js")
				} catch (s) {
					return
				}
				navigator.serviceWorker.addEventListener("message", s => {
					const n = s.data,
						r = n.command || n.type;
					if ("registerWithServiceWorker" === r) W(e);
					else if (r === _.a && i) {
						const e = o()(n, ["command"]);
						t(Object(j.d)(e))
					} else if ("navigate.chat" === r) {
						const e = Object(w.a)(n.data.href);
						e && e.pathname && t(Object(l.b)(e.pathname))
					}
				}), W(e)
			}, D = (e, t) => async (i, s, n) => {
				const r = s(),
					o = Object(y.h)(r);
				if (await Object(a.a)() || o) return;
				if (await C(r, i), Object(u.a)()) {
					const t = localStorage.getItem("push-token-last-refresh-ms"),
						s = (new Date).getTime();
					if (!e && t && parseInt(t) + x > s) return void i(Object(b.b)());
					localStorage.setItem("push-token-last-refresh-ms", s.toString())
				}
				k.h(r);
				const c = Object(p.a)(r);
				if (c === g.f.BrowserUnsupported || c === g.f.LocalStorageUnavailable || c === g.f.NotAllRequiredAPIsSupported) return void i(Object(b.b)());
				if ("denied" === Notification.permission) return i(Object(g.m)()), void i(Object(b.b)());
				if ("granted" === Notification.permission) return i(Object(g.n)()), i(B()), void i(Object(b.b)());
				const d = localStorage.getItem("notification-permission-request-closed");
				if (t || !d || "1" !== d) switch (i(Object(g.p)()), i(Object(g.o)()), k.f(r), await Notification.requestPermission()) {
					case "granted":
						i(Object(g.n)()), i(B()), k.b(r);
						break;
					case "denied":
						i(Object(g.m)()), k.c(r);
						break;
					default:
						i(Object(g.m)()), k.d(r), localStorage.setItem("notification-permission-request-closed", "1")
				} else i(Object(b.b)())
			}, B = e => async (t, i, r) => {
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
					Object(f.c)();
					const u = await ((e, t, i) => {
							const s = {
								pushToken: JSON.stringify(i),
								timezoneName: Object(v.b)() || v.a,
								timestamp: (new Date).toISOString(),
								language: "en_us"
							};
							return Object(h.a)(e, Object.assign({}, m, {
								variables: s
							}))
						})(r.gqlContext(), i(), c),
						l = u.body.data.registerWebPushToken;
					u.ok ? l && !l.ok ? k.g(o, "registration_failed_in_gql") : (k.i(o), e && t(Object(O.e)({
						kind: S.b.SuccessCommunity,
						text: n.fbt._("Changes saved", null, {
							hk: "wGH5U"
						})
					}))) : k.g(o, "registration_failed_generally")
				} catch (a) {
					k.g(o, "registration_failed_uncaught_exception"), console.error(a)
				}
			}, L = e => async (t, i, s) => {
				try {
					const i = await navigator.serviceWorker.register("/sw.js"),
						s = await i.pushManager.getSubscription();
					s && (s.unsubscribe(), Object(f.c)(), e && t(Object(O.e)({
						kind: S.b.SuccessCommunity,
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
				return b
			})), i.d(t, "i", (function() {
				return g
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
				b = e => {
					Object(n.a)(Object.assign({}, l(e, !0), {
						action: "request",
						source: "notification"
					}))
				},
				g = e => {
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
//# sourceMappingURL=PushNotifications.88f92e7b929d8a0660df.js.map