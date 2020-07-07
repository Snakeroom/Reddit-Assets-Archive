// https://www.redditstatic.com/desktop2x/PushNotifications.3b2e2eea181103ea75ff.js
// Retrieved at 7/7/2020, 10:50:06 AM by Reddit Dataminer v1.0.0
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
				return x
			})), i.d(t, "isBrowserSubscribedForPushNotifications", (function() {
				return P
			})), i.d(t, "initializeServiceWorkerChannel", (function() {
				return A
			})), i.d(t, "requestNotificationsPermissions", (function() {
				return C
			})), i.d(t, "subscribeForPNs", (function() {
				return D
			})), i.d(t, "unsubscribeFromPNs", (function() {
				return B
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
				b = i("./src/reddit/actions/notifications/constants.ts"),
				g = i("./src/reddit/actions/notifications/state.ts"),
				f = i("./src/reddit/actions/notifications/utils.ts"),
				p = i("./src/reddit/actions/tabBadging.ts"),
				m = i("./src/reddit/actions/toaster.ts"),
				j = i("./src/graphql/operations/RegisterWebPushToken.json"),
				O = i("./src/lib/makeGqlRequest/index.ts"),
				h = i("./src/lib/timezone/index.ts"),
				v = i("./src/reddit/helpers/parseUrl.ts");
			var w = i("./src/reddit/helpers/tabBadging/index.ts"),
				_ = i("./src/reddit/helpers/trackers/notifications.ts"),
				k = i("./src/reddit/models/Toast/index.ts"),
				S = i("./src/reddit/selectors/meta.ts"),
				y = i("./src/reddit/selectors/user.ts");
			const N = 4 * c.J,
				q = () => {
					const e = Object(u.a)() && "1" === localStorage.getItem("notification-permission-request-closed");
					return "granted" === Notification.permission ? b.a.Granted : "denied" === Notification.permission ? b.a.Denied : e ? b.a.Closed : b.a.Default
				},
				x = () => !!Object(u.a)() && (localStorage.removeItem("notification-permission-request-closed"), !0),
				P = async () => {
					let e;
					try {
						e = await navigator.serviceWorker.register("/sw.js")
					} catch (t) {
						return !1
					}
					return null !== await e.pushManager.getSubscription()
				}, I = e => {
					navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: "registerClient",
						v2EventBoilerPlate: _.a(e)
					})
				};
			let W = !1;
			const A = async (e, t) => {
				const i = Object(y.G)(e);
				if (W) return;
				if (W = !0, Object(f.a)(e) !== b.f.NotificationsSupported) return;
				try {
					await navigator.serviceWorker.register("/sw.js")
				} catch (s) {
					return
				}
				navigator.serviceWorker.addEventListener("message", s => {
					const n = s.data,
						r = n.command || n.type;
					if ("registerWithServiceWorker" === r) I(e);
					else if (r === w.a && i) {
						const e = o()(n, ["command"]);
						t(Object(p.d)(e))
					} else if ("navigate.chat" === r) {
						const e = Object(v.a)(n.data.href);
						e && e.pathname && t(Object(l.b)(e.pathname))
					}
				}), I(e)
			}, C = (e, t) => async (i, s, n) => {
				const r = s(),
					o = Object(S.h)(r);
				if (await Object(a.a)() || o) return;
				if (await A(r, i), Object(u.a)()) {
					const t = localStorage.getItem("push-token-last-refresh-ms"),
						i = (new Date).getTime();
					if (!e && t && parseInt(t) + N > i) return;
					localStorage.setItem("push-token-last-refresh-ms", i.toString())
				}
				_.h(r);
				const c = Object(f.a)(r);
				if (c === b.f.BrowserUnsupported) return;
				if (c === b.f.LocalStorageUnavailable) return;
				if (c === b.f.NotAllRequiredAPIsSupported) return;
				if ("denied" === Notification.permission) return void i(Object(b.m)());
				if ("granted" === Notification.permission) return i(Object(b.n)()), void i(D());
				const d = localStorage.getItem("notification-permission-request-closed");
				if (t || !d || "1" !== d) switch (i(Object(b.p)()), i(Object(b.o)()), _.f(r), await Notification.requestPermission()) {
					case "granted":
						i(Object(b.n)()), i(D()), _.b(r);
						break;
					case "denied":
						i(Object(b.m)()), _.c(r);
						break;
					default:
						i(Object(b.m)()), _.d(r), localStorage.setItem("notification-permission-request-closed", "1")
				}
			}, D = e => async (t, i, r) => {
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
								timezoneName: Object(h.b)() || h.a,
								timestamp: (new Date).toISOString(),
								language: "en_us"
							};
							return Object(O.a)(e, Object.assign({}, j, {
								variables: s
							}))
						})(r.gqlContext(), i(), c),
						l = u.body.data.registerWebPushToken;
					u.ok ? l && !l.ok ? _.g(o, "registration_failed_in_gql") : (_.i(o), e && t(Object(m.e)({
						kind: k.b.SuccessCommunity,
						text: n.fbt._("Changes saved", null, {
							hk: "wGH5U"
						})
					}))) : _.g(o, "registration_failed_generally")
				} catch (a) {
					_.g(o, "registration_failed_uncaught_exception"), console.error(a)
				}
			}, B = e => async (t, i, s) => {
				try {
					const i = await navigator.serviceWorker.register("/sw.js"),
						s = await i.pushManager.getSubscription();
					s && (s.unsubscribe(), Object(g.c)(), e && t(Object(m.e)({
						kind: k.b.SuccessCommunity,
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
				m = (e, t) => i => Object.assign({}, s.defaults(i), {
					action: o(t),
					noun: e,
					source: "notification"
				})
		}
	}
]);
//# sourceMappingURL=PushNotifications.3b2e2eea181103ea75ff.js.map