// https://www.redditstatic.com/desktop2x/PushNotifications.47ef4eb139e0e6c6ae8a.js
// Retrieved at 1/6/2022, 12:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PushNotifications"], {
		"./src/lib/notifications/token.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return u
			})), i.d(t, "b", (function() {
				return d
			}));
			var n = i("./src/config.ts"),
				s = i("./src/redditGQL/operations/RegisterWebPushToken.json"),
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
			var u;
			! function(e) {
				e[e.Success = 0] = "Success", e[e.FailedGeneric = 1] = "FailedGeneric", e[e.FailedResponse = 2] = "FailedResponse", e[e.FailedGqlReponse = 3] = "FailedGqlReponse", e[e.FailedNoServiceWorker = 4] = "FailedNoServiceWorker", e[e.FailedNoSubscription = 5] = "FailedNoSubscription"
			}(u || (u = {}));
			const d = async e => {
				try {
					const t = await Object(r.a)();
					if (!t) return u.FailedNoServiceWorker;
					let i = await t.pushManager.getSubscription();
					if (!i) {
						const e = {
							userVisibleOnly: !0,
							applicationServerKey: a(n.a.pushNotificationApplicationServerKey)
						};
						i = await t.pushManager.subscribe(e)
					}
					if (!i) return u.FailedNoSubscription;
					const d = await ((e, t) => {
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
					if (d && !d.ok) return u.FailedResponse;
					const l = null == d ? void 0 : d.body.data.registerWebPushToken;
					return l && !l.ok ? u.FailedGqlReponse : u.Success
				} catch (t) {
					return console.error(t), u.FailedGeneric
				}
			}
		},
		"./src/reddit/actions/notifications/index.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "initializeServiceWorkerChannel", (function() {
				return w
			})), i.d(t, "requestNotificationsPermissions", (function() {
				return S
			})), i.d(t, "subscribeForPNs", (function() {
				return F
			})), i.d(t, "unsubscribeFromPNs", (function() {
				return N
			})), i.d(t, "requestBrowserNotificationPermissionPromptByUser", (function() {
				return x
			})), i.d(t, "subscribeToPermissionsChange", (function() {
				return C
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/lodash/omit.js"),
				o = i.n(s),
				r = i("./src/lib/browser/isIncognito.ts"),
				c = i("./src/lib/notifications/token.ts"),
				a = i("./src/lib/notifications/index.ts"),
				u = i("./src/lib/notifications/constants.ts"),
				d = i("./src/lib/serviceWorker/index.ts"),
				l = i("./src/reddit/actions/chat/toggle.ts"),
				b = i("./src/reddit/actions/modal.ts"),
				f = i("./src/reddit/actions/notifications/utils.ts"),
				p = i("./src/reddit/actions/tabBadging.ts"),
				g = i("./src/reddit/actions/toaster.ts"),
				h = i("./src/reddit/helpers/parseUrl.ts"),
				m = i("./src/reddit/helpers/tabBadging/index.ts"),
				O = i("./src/reddit/helpers/trackers/notifications.ts"),
				v = i("./src/reddit/models/Toast/index.ts"),
				j = i("./src/reddit/selectors/meta.ts"),
				k = i("./src/reddit/selectors/user.ts");
			let _ = !1;
			const w = async (e, t) => {
				const i = Object(k.I)(e);
				if (_) return;
				if (_ = !0, Object(f.a)(e) !== u.c.NotificationsSupported) return;
				await Object(d.a)();
				navigator.serviceWorker.addEventListener("message", n => {
					const s = n.data,
						r = s.command || s.type;
					if ("registerWithServiceWorker" === r) y(e);
					else if (r === m.a && i) {
						const e = o()(s, ["command"]);
						t(Object(p.f)(e))
					} else if ("navigate.chat" === r) {
						const e = Object(h.a)(s.data.href);
						e && e.pathname && t(Object(l.c)(e.pathname))
					}
				}), y(e)
			}, y = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: O.c(e)
				})
			}, S = (e, t, i = (() => {})) => async (n, s, o) => {
				const c = s(),
					d = Object(j.f)(c);
				if (await Object(r.a)() || d) return;
				await w(c, n);
				O.j(c), await Object(a.b)(e, t, () => {
					n(Object(u.o)()), n(Object(u.n)()), O.h(c)
				}, (e, t) => {
					n(Object(u.l)()), n(N(t ? u.a.Denied : u.a.Closed)), e && (t ? O.e(c) : O.f(c))
				}, e => {
					n(Object(u.m)()), n(F()), e && O.d(c)
				}, () => {
					n(Object(u.k)()), i()
				})
			}, F = e => async (t, i, s) => {
				const o = i();
				try {
					switch (await Object(c.b)(s.gqlContext)) {
						case c.a.Success:
							Object(f.b)(u.a.Granted), O.k(o), e && t(Object(g.f)({
								kind: v.b.SuccessCommunity,
								text: n.fbt._("Changes saved", null, {
									hk: "wGH5U"
								})
							}));
							break;
						case c.a.FailedResponse:
							O.i(o, "registration_failed_generally");
							break;
						case c.a.FailedGqlReponse:
							O.i(o, "registration_failed_in_gql")
					}
				} catch (r) {
					O.i(o, "registration_failed_uncaught_exception"), console.error(r)
				}
			}, N = (e, t) => async i => {
				try {
					Object(f.b)(e);
					const s = await Object(d.a)();
					if (s) {
						const e = await s.pushManager.getSubscription();
						e && (e.unsubscribe(), t && i(Object(g.f)({
							kind: v.b.SuccessCommunity,
							text: n.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						})))
					}
				} catch (s) {}
			}, x = e => async (t, i) => {
				const n = i();
				if (Object(f.a)(n) === u.c.NotificationsSupported) switch (Object(a.a)()) {
					case u.a.Default:
					case u.a.Closed:
						await t(S(!0, !0));
						break;
					case u.a.Denied:
						t(Object(b.h)(e))
				}
			}, C = () => async (e, t) => {
				var i;
				if (!(null === (i = null === navigator || void 0 === navigator ? void 0 : navigator.permissions) || void 0 === i ? void 0 : i.query)) return;
				const n = t();
				if (Object(f.a)(n) !== u.c.NotificationsSupported) return;
				const s = await navigator.permissions.query({
					name: "notifications"
				});
				s.onchange = () => (t => {
					switch (t) {
						case u.a.Denied:
							e(N(u.a.Denied)), O.e(n);
							break;
						case u.a.Granted:
							e(F()), O.d(n);
							break;
						default:
							e(N(u.a.Default))
					}
				})(s.state)
			}
		},
		"./src/reddit/helpers/trackers/notifications.ts": function(e, t, i) {
			"use strict";
			i.d(t, "h", (function() {
				return a
			})), i.d(t, "d", (function() {
				return u
			})), i.d(t, "e", (function() {
				return d
			})), i.d(t, "f", (function() {
				return l
			})), i.d(t, "j", (function() {
				return f
			})), i.d(t, "k", (function() {
				return p
			})), i.d(t, "i", (function() {
				return g
			})), i.d(t, "c", (function() {
				return m
			})), i.d(t, "b", (function() {
				return O
			})), i.d(t, "g", (function() {
				return v
			})), i.d(t, "a", (function() {
				return j
			}));
			var n = i("./src/reddit/selectors/telemetry.ts"),
				s = i("./src/telemetry/index.ts"),
				o = i("./src/telemetry/models/Event.ts");
			const r = e => ({
					...n.o(e),
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
				u = e => {
					Object(s.a)({
						...r(e),
						action: o.c.Allow,
						source: "popup"
					})
				},
				d = e => {
					Object(s.a)({
						...r(e),
						action: o.c.Block,
						source: "popup"
					})
				},
				l = e => {
					Object(s.a)({
						...r(e),
						action: o.c.Close,
						source: "popup"
					})
				},
				b = (e, t, i) => ({
					...n.o(e),
					actionInfo: n.d(e, {
						success: t,
						reason: i
					}),
					noun: "push_token"
				}),
				f = e => {
					Object(s.a)({
						...b(e, !0),
						action: o.c.Request,
						source: "notification"
					})
				},
				p = e => {
					Object(s.a)({
						...b(e, !0),
						action: o.c.Register,
						source: "notification"
					})
				},
				g = (e, t) => {
					Object(s.a)({
						...b(e, !1, t),
						action: o.c.Bail,
						source: "notification"
					})
				},
				h = e => ({
					...n.o(e),
					noun: "push_notification"
				}),
				m = e => ({
					...h(e),
					notification: n.E(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				O = (e, t) => i => ({
					...n.o(i),
					action: c(e),
					email: {
						type: t
					},
					noun: "email",
					source: "email_app_settings"
				}),
				v = (e, t) => i => ({
					...n.o(i),
					action: c(e),
					notification: {
						type: t
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				j = e => t => ({
					...n.o(t),
					source: "email_app_settings",
					action: c(e),
					noun: "email",
					notification: {
						type: "all"
					}
				})
		},
		"./src/redditGQL/operations/RegisterWebPushToken.json": function(e) {
			e.exports = JSON.parse('{"id":"197650c1946c"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PushNotifications.47ef4eb139e0e6c6ae8a.js.map