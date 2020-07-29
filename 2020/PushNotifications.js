// https://www.redditstatic.com/desktop2x/PushNotifications.e488a2ecb66ba5b26618.js
// Retrieved at 7/28/2020, 10:42:45 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PushNotifications"], {
		"./src/graphql/operations/RegisterWebPushToken.json": function(t) {
			t.exports = JSON.parse('{"id":"197650c1946c"}')
		},
		"./src/reddit/actions/notifications/index.ts": function(t, e, i) {
			"use strict";
			i.r(e), i.d(e, "getBrowserNotificationPermission", (function() {
				return q
			})), i.d(e, "resetPermissionRequestClosed", (function() {
				return P
			})), i.d(e, "isBrowserSubscribedForPushNotifications", (function() {
				return I
			})), i.d(e, "initializeServiceWorkerChannel", (function() {
				return D
			})), i.d(e, "requestNotificationsPermissions", (function() {
				return W
			})), i.d(e, "subscribeForPNs", (function() {
				return B
			})), i.d(e, "unsubscribeFromPNs", (function() {
				return L
			}));
			i("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = i("./src/config.ts"),
				n = i("./node_modules/fbt/lib/FbtPublic.js"),
				o = i("./node_modules/lodash/omit.js"),
				r = i.n(o),
				c = i("./src/lib/browser/isIncognito.ts"),
				a = i("./src/lib/constants/index.ts"),
				u = i("./src/lib/localStorageAvailable/index.ts"),
				d = i("./src/lib/serviceWorker/index.ts"),
				l = (i("./node_modules/core-js/modules/es6.regexp.replace.js"), t => {
					const e = (t + "=".repeat((4 - t.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"),
						i = window.atob(e),
						s = new Uint8Array(i.length);
					for (let n = 0; n < i.length; ++n) s[n] = i.charCodeAt(n);
					return s
				}),
				b = i("./src/reddit/actions/chat/toggle.ts"),
				g = i("./src/reddit/actions/notifications/constants.ts"),
				f = i("./src/reddit/actions/notifications/state.ts"),
				p = i("./src/reddit/actions/notifications/utils.ts"),
				j = i("./src/reddit/actions/tabBadging.ts"),
				O = i("./src/reddit/actions/toaster.ts"),
				m = i("./src/graphql/operations/RegisterWebPushToken.json"),
				h = i("./src/lib/makeGqlRequest/index.ts"),
				v = i("./src/lib/timezone/index.ts"),
				_ = i("./src/reddit/helpers/parseUrl.ts"),
				w = i("./src/reddit/helpers/tabBadging/index.ts"),
				S = i("./src/reddit/helpers/trackers/notifications.ts"),
				k = i("./src/reddit/models/Toast/index.ts"),
				y = i("./src/reddit/selectors/meta.ts"),
				N = i("./src/reddit/selectors/user.ts");
			const x = 4 * a.J,
				q = () => {
					const t = Object(u.a)() && "1" === localStorage.getItem("notification-permission-request-closed");
					return "granted" === Notification.permission ? g.a.Granted : "denied" === Notification.permission ? g.a.Denied : t ? g.a.Closed : g.a.Default
				},
				P = () => !!Object(u.a)() && (localStorage.removeItem("notification-permission-request-closed"), !0),
				I = async () => {
					const t = await Object(d.a)();
					return !!t && null !== await t.pushManager.getSubscription()
				}, A = t => {
					navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: "registerClient",
						v2EventBoilerPlate: S.a(t)
					})
				};
			let C = !1;
			const D = async (t, e) => {
				const i = Object(N.G)(t);
				if (C) return;
				if (C = !0, Object(p.a)(t) !== g.f.NotificationsSupported) return;
				await Object(d.a)();
				navigator.serviceWorker.addEventListener("message", s => {
					const n = s.data,
						o = n.command || n.type;
					if ("registerWithServiceWorker" === o) A(t);
					else if (o === w.a && i) {
						const t = r()(n, ["command"]);
						e(Object(j.d)(t))
					} else if ("navigate.chat" === o) {
						const t = Object(_.a)(n.data.href);
						t && t.pathname && e(Object(b.b)(t.pathname))
					}
				}), A(t)
			}, W = function(t, e) {
				let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
				return async (s, n, o) => {
					const r = n(),
						a = Object(y.h)(r);
					if (await Object(c.a)() || a) return;
					if (await D(r, s), Object(u.a)()) {
						const e = localStorage.getItem("push-token-last-refresh-ms"),
							s = (new Date).getTime();
						if (!t && e && parseInt(e) + x > s) return void i();
						localStorage.setItem("push-token-last-refresh-ms", s.toString())
					}
					S.h(r);
					const d = Object(p.a)(r);
					if (d === g.f.BrowserUnsupported || d === g.f.LocalStorageUnavailable || d === g.f.NotAllRequiredAPIsSupported) return void i();
					if ("denied" === Notification.permission) return s(Object(g.m)()), void i();
					if ("granted" === Notification.permission) return s(Object(g.n)()), s(B()), void i();
					const l = localStorage.getItem("notification-permission-request-closed");
					if (e || !l || "1" !== l) switch (s(Object(g.p)()), s(Object(g.o)()), S.f(r), await Notification.requestPermission()) {
						case "granted":
							s(Object(g.n)()), s(B()), S.b(r);
							break;
						case "denied":
							s(Object(g.m)()), S.c(r);
							break;
						default:
							s(Object(g.m)()), S.d(r), localStorage.setItem("notification-permission-request-closed", "1")
					} else i()
				}
			}, B = t => async (e, i, o) => {
				const r = i();
				try {
					const c = await Object(d.a)();
					if (c) {
						let a = await c.pushManager.getSubscription();
						if (!a) {
							const t = {
								userVisibleOnly: !0,
								applicationServerKey: l(s.a.pushNotificationApplicationServerKey)
							};
							a = await c.pushManager.subscribe(t)
						}
						Object(f.c)();
						const u = await ((t, e, i) => {
								const s = {
									pushToken: JSON.stringify(i),
									timezoneName: Object(v.b)() || v.a,
									timestamp: (new Date).toISOString(),
									language: "en_us"
								};
								return Object(h.a)(t, Object.assign(Object.assign({}, m), {
									variables: s
								}))
							})(o.gqlContext(), i(), a),
							d = u.body.data.registerWebPushToken;
						u.ok ? d && !d.ok ? S.g(r, "registration_failed_in_gql") : (S.i(r), t && e(Object(O.e)({
							kind: k.b.SuccessCommunity,
							text: n.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						}))) : S.g(r, "registration_failed_generally")
					}
				} catch (c) {
					S.g(r, "registration_failed_uncaught_exception"), console.error(c)
				}
			}, L = t => async (e, i, s) => {
				try {
					const i = await Object(d.a)();
					if (i) {
						const s = await i.pushManager.getSubscription();
						s && (s.unsubscribe(), Object(f.c)(), t && e(Object(O.e)({
							kind: k.b.SuccessCommunity,
							text: n.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						})))
					}
				} catch (o) {}
			}
		},
		"./src/reddit/helpers/trackers/notifications.ts": function(t, e, i) {
			"use strict";
			i.d(e, "f", (function() {
				return c
			})), i.d(e, "b", (function() {
				return a
			})), i.d(e, "c", (function() {
				return u
			})), i.d(e, "d", (function() {
				return d
			})), i.d(e, "h", (function() {
				return b
			})), i.d(e, "i", (function() {
				return g
			})), i.d(e, "g", (function() {
				return f
			})), i.d(e, "a", (function() {
				return p
			})), i.d(e, "e", (function() {
				return j
			}));
			var s = i("./src/reddit/selectors/telemetry.ts"),
				n = i("./src/telemetry/index.ts");
			const o = t => Object.assign(Object.assign({}, s.defaults(t)), {
					noun: "desktop_notification_permissions"
				}),
				r = t => t ? "enable" : "disable",
				c = t => {
					Object(n.a)(Object.assign(Object.assign({}, o(t)), {
						action: "view",
						source: "popup"
					}))
				},
				a = t => {
					Object(n.a)(Object.assign(Object.assign({}, o(t)), {
						action: "allow",
						source: "popup"
					}))
				},
				u = t => {
					Object(n.a)(Object.assign(Object.assign({}, o(t)), {
						action: "block",
						source: "popup"
					}))
				},
				d = t => {
					Object(n.a)(Object.assign(Object.assign({}, o(t)), {
						action: "close",
						source: "popup"
					}))
				},
				l = (t, e, i) => Object.assign(Object.assign({}, s.defaults(t)), {
					actionInfo: s.actionInfo(t, {
						success: e,
						reason: i
					}),
					noun: "push_token"
				}),
				b = t => {
					Object(n.a)(Object.assign(Object.assign({}, l(t, !0)), {
						action: "request",
						source: "notification"
					}))
				},
				g = t => {
					Object(n.a)(Object.assign(Object.assign({}, l(t, !0)), {
						action: "register",
						source: "notification"
					}))
				},
				f = (t, e) => {
					Object(n.a)(Object.assign(Object.assign({}, l(t, !1, e)), {
						action: "bail",
						source: "notification"
					}))
				},
				p = t => Object.assign(Object.assign({}, (t => Object.assign(Object.assign({}, s.defaults(t)), {
					noun: "push_notification"
				}))(t)), {
					notification: s.notification(t, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				j = (t, e) => i => Object.assign(Object.assign({}, s.defaults(i)), {
					action: r(e),
					noun: t,
					source: "notification"
				})
		}
	}
]);
//# sourceMappingURL=PushNotifications.e488a2ecb66ba5b26618.js.map