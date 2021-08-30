// https://www.redditstatic.com/desktop2x/PushNotifications.f66fe4f447a6ccb93a3f.js
// Retrieved at 8/30/2021, 12:20:15 PM by Reddit Dataminer v1.0.0
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
				c = i("./src/lib/serviceWorker/index.ts"),
				r = i("./src/lib/timezone/index.ts"),
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
					const t = await Object(c.a)();
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
							timezoneName: Object(r.b)() || r.a,
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
			})), i.d(t, "requestBrowserNotificationPermissionByUser", (function() {
				return x
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/lodash/omit.js"),
				o = i.n(s),
				c = i("./src/lib/browser/isIncognito.ts"),
				r = i("./src/lib/notifications/token.ts"),
				a = i("./src/lib/notifications/index.ts"),
				u = i("./src/lib/notifications/constants.ts"),
				d = i("./src/lib/serviceWorker/index.ts"),
				l = i("./src/reddit/actions/chat/toggle.ts"),
				f = i("./src/reddit/actions/modal.ts"),
				b = i("./src/reddit/actions/notifications/utils.ts"),
				p = i("./src/reddit/actions/tabBadging.ts"),
				g = i("./src/reddit/actions/toaster.ts"),
				h = i("./src/reddit/helpers/parseUrl.ts"),
				O = i("./src/reddit/helpers/tabBadging/index.ts"),
				j = i("./src/reddit/helpers/trackers/notifications.ts"),
				m = i("./src/reddit/models/Toast/index.ts"),
				_ = i("./src/reddit/selectors/meta.ts"),
				k = i("./src/reddit/selectors/user.ts");
			let v = !1;
			const w = async (e, t) => {
				const i = Object(k.J)(e);
				if (v) return;
				if (v = !0, Object(b.a)(e) !== u.c.NotificationsSupported) return;
				await Object(d.a)();
				navigator.serviceWorker.addEventListener("message", n => {
					const s = n.data,
						c = s.command || s.type;
					if ("registerWithServiceWorker" === c) y(e);
					else if (c === O.a && i) {
						const e = o()(s, ["command"]);
						t(Object(p.f)(e))
					} else if ("navigate.chat" === c) {
						const e = Object(h.a)(s.data.href);
						e && e.pathname && t(Object(l.c)(e.pathname))
					}
				}), y(e)
			}, y = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: j.c(e)
				})
			}, S = (e, t, i = (() => {})) => async (n, s, o) => {
				const r = s(),
					d = Object(_.f)(r);
				if (await Object(c.a)() || d) return;
				await w(r, n);
				j.j(r), Object(a.b)(e, t, () => {
					n(Object(u.o)()), n(Object(u.n)()), j.h(r)
				}, (e, t) => {
					n(Object(u.l)()), n(N(t ? u.a.Denied : u.a.Closed)), e && (t ? j.e(r) : j.f(r))
				}, e => {
					n(Object(u.m)()), n(F()), e && j.d(r)
				}, () => {
					n(Object(u.k)()), i()
				})
			}, F = e => async (t, i, s) => {
				const o = i();
				try {
					switch (await Object(r.b)(s.gqlContext)) {
						case r.a.Success:
							Object(b.b)(u.a.Granted), j.k(o), e && t(Object(g.f)({
								kind: m.b.SuccessCommunity,
								text: n.fbt._("Changes saved", null, {
									hk: "wGH5U"
								})
							}));
							break;
						case r.a.FailedResponse:
							j.i(o, "registration_failed_generally");
							break;
						case r.a.FailedGqlReponse:
							j.i(o, "registration_failed_in_gql")
					}
				} catch (c) {
					j.i(o, "registration_failed_uncaught_exception"), console.error(c)
				}
			}, N = (e, t) => async i => {
				try {
					Object(b.b)(e);
					const s = await Object(d.a)();
					if (s) {
						const e = await s.pushManager.getSubscription();
						e && (e.unsubscribe(), t && i(Object(g.f)({
							kind: m.b.SuccessCommunity,
							text: n.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						})))
					}
				} catch (s) {}
			}, x = e => async (t, i) => {
				const n = i();
				if (Object(b.a)(n) === u.c.NotificationsSupported) switch (Object(a.a)()) {
					case u.a.Default:
					case u.a.Closed:
						t(S(!0, !0));
						break;
					case u.a.Denied:
						t(Object(f.h)(e))
				}
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
				return b
			})), i.d(t, "k", (function() {
				return p
			})), i.d(t, "i", (function() {
				return g
			})), i.d(t, "c", (function() {
				return O
			})), i.d(t, "b", (function() {
				return j
			})), i.d(t, "g", (function() {
				return m
			})), i.d(t, "a", (function() {
				return _
			}));
			var n = i("./src/reddit/selectors/telemetry.ts"),
				s = i("./src/telemetry/index.ts"),
				o = i("./src/telemetry/models/Event.ts");
			const c = e => ({
					...n.defaults(e),
					noun: "desktop_notification_permissions"
				}),
				r = e => e ? "enable" : "disable",
				a = e => {
					Object(s.a)({
						...c(e),
						action: o.c.View,
						source: "popup"
					})
				},
				u = e => {
					Object(s.a)({
						...c(e),
						action: o.c.Allow,
						source: "popup"
					})
				},
				d = e => {
					Object(s.a)({
						...c(e),
						action: o.c.Block,
						source: "popup"
					})
				},
				l = e => {
					Object(s.a)({
						...c(e),
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
				O = e => ({
					...h(e),
					notification: n.notification(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				j = (e, t) => i => ({
					...n.defaults(i),
					action: r(e),
					email: {
						type: t
					},
					noun: "email",
					source: "email_app_settings"
				}),
				m = (e, t) => i => ({
					...n.defaults(i),
					action: r(e),
					notification: {
						type: t
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				_ = e => t => ({
					...n.defaults(t),
					source: "email_app_settings",
					action: r(e),
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PushNotifications.f66fe4f447a6ccb93a3f.js.map