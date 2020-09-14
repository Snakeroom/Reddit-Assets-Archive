// https://www.redditstatic.com/desktop2x/PushNotifications.a7f5b8905f6c7d48a846.js
// Retrieved at 9/14/2020, 11:40:06 AM by Reddit Dataminer v1.0.0
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
			i("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = i("./src/lib/localStorageAvailable/index.ts"),
				n = i("./src/lib/notifications/constants.ts"),
				c = i("./src/lib/notifications/featureFlags.ts");
			i("./src/lib/serviceWorker/index.ts");
			const r = async (e, t, i, r, o, a) => {
				if (Object(s.a)()) {
					const t = localStorage.getItem(n.h),
						i = (new Date).getTime();
					if (!e && t && parseInt(t) + n.i > i) return void a();
					localStorage.setItem(n.h, i.toString())
				}
				const d = Object(c.a)();
				if (d === n.c.BrowserUnsupported || d === n.c.LocalStorageUnavailable || d === n.c.NotAllRequiredAPIsSupported) return void a();
				if ("denied" === Notification.permission) return r(!1, !1), void a();
				if ("granted" === Notification.permission) return o(!1), void a();
				const u = localStorage.getItem(n.f);
				if (t || !u || u !== n.g) switch (i(), await Notification.requestPermission()) {
					case "granted":
						o(!0);
						break;
					case "denied":
						r(!0, !0);
						break;
					default:
						r(!0, !1), localStorage.setItem(n.f, n.g)
				} else a()
			}
		},
		"./src/lib/notifications/token.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return d
			})), i.d(t, "b", (function() {
				return u
			}));
			var s = i("./src/config.ts"),
				n = i("./src/graphql/operations/RegisterWebPushToken.json"),
				c = i("./src/lib/makeGqlRequest/index.ts"),
				r = i("./src/lib/serviceWorker/index.ts"),
				o = i("./src/lib/timezone/index.ts"),
				a = (i("./node_modules/core-js/modules/es6.regexp.replace.js"), e => {
					const t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"),
						i = window.atob(t),
						s = new Uint8Array(i.length);
					for (let n = 0; n < i.length; ++n) s[n] = i.charCodeAt(n);
					return s
				});
			var d;
			! function(e) {
				e[e.Success = 0] = "Success", e[e.FailedGeneric = 1] = "FailedGeneric", e[e.FailedResponse = 2] = "FailedResponse", e[e.FailedGqlReponse = 3] = "FailedGqlReponse", e[e.FailedNoServiceWorker = 4] = "FailedNoServiceWorker", e[e.FailedNoSubscription = 5] = "FailedNoSubscription"
			}(d || (d = {}));
			const u = async e => {
				try {
					const t = await Object(r.a)();
					if (!t) return d.FailedNoServiceWorker;
					let i = await t.pushManager.getSubscription();
					if (!i) {
						const e = {
							userVisibleOnly: !0,
							applicationServerKey: a(s.a.pushNotificationApplicationServerKey)
						};
						i = await t.pushManager.subscribe(e)
					}
					if (!i) return d.FailedNoSubscription;
					const u = await ((e, t) => {
						const i = {
							pushToken: JSON.stringify(t),
							timezoneName: Object(o.b)() || o.a,
							timestamp: (new Date).toISOString(),
							language: "en_us"
						};
						return Object(c.a)(e(), Object.assign(Object.assign({}, n), {
							variables: i
						}))
					})(e, i);
					if (u && !u.ok) return d.FailedResponse;
					const l = null == u ? void 0 : u.body.data.registerWebPushToken;
					return l && !l.ok ? d.FailedGqlReponse : d.Success
				} catch (t) {
					return console.error(t), d.FailedGeneric
				}
			}
		},
		"./src/reddit/actions/notifications/index.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "initializeServiceWorkerChannel", (function() {
				return _
			})), i.d(t, "requestNotificationsPermissions", (function() {
				return y
			})), i.d(t, "subscribeForPNs", (function() {
				return F
			})), i.d(t, "unsubscribeFromPNs", (function() {
				return N
			}));
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/lodash/omit.js"),
				c = i.n(n),
				r = i("./src/lib/browser/isIncognito.ts"),
				o = i("./src/lib/notifications/token.ts"),
				a = i("./src/lib/notifications/index.ts"),
				d = i("./src/lib/notifications/constants.ts"),
				u = i("./src/lib/serviceWorker/index.ts"),
				l = i("./src/reddit/actions/chat/toggle.ts"),
				b = i("./src/reddit/actions/notifications/state.ts"),
				g = i("./src/reddit/actions/notifications/utils.ts"),
				f = i("./src/reddit/actions/tabBadging.ts"),
				p = i("./src/reddit/actions/toaster.ts"),
				j = i("./src/reddit/helpers/parseUrl.ts"),
				O = i("./src/reddit/helpers/tabBadging/index.ts"),
				h = i("./src/reddit/helpers/trackers/notifications.ts"),
				m = i("./src/reddit/models/Toast/index.ts"),
				v = i("./src/reddit/selectors/meta.ts"),
				k = i("./src/reddit/selectors/user.ts");
			let S = !1;
			const _ = async (e, t) => {
				const i = Object(k.G)(e);
				if (S) return;
				if (S = !0, Object(g.a)(e) !== d.c.NotificationsSupported) return;
				await Object(u.a)();
				navigator.serviceWorker.addEventListener("message", s => {
					const n = s.data,
						r = n.command || n.type;
					if ("registerWithServiceWorker" === r) w(e);
					else if (r === O.a && i) {
						const e = c()(n, ["command"]);
						t(Object(f.d)(e))
					} else if ("navigate.chat" === r) {
						const e = Object(j.a)(n.data.href);
						e && e.pathname && t(Object(l.b)(e.pathname))
					}
				}), w(e)
			}, w = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: h.a(e)
				})
			}, y = function(e, t) {
				let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
				return async (s, n, c) => {
					const o = n(),
						u = Object(v.h)(o);
					if (await Object(r.a)() || u) return;
					await _(o, s);
					h.h(o), Object(a.a)(e, t, () => {
						s(Object(d.n)()), s(Object(d.m)()), h.f(o)
					}, (e, t) => {
						s(Object(d.k)()), e && (t ? h.c(o) : h.d(o))
					}, e => {
						s(Object(d.l)()), s(F()), e && h.b(o)
					}, () => {
						i()
					})
				}
			}, F = e => async (t, i, n) => {
				const c = i();
				try {
					const i = await Object(o.b)(n.gqlContext);
					switch (Object(b.c)(), i) {
						case o.a.Success:
							h.i(c), e && t(Object(p.e)({
								kind: m.b.SuccessCommunity,
								text: s.fbt._("Changes saved", null, {
									hk: "wGH5U"
								})
							}));
							break;
						case o.a.FailedResponse:
							h.g(c, "registration_failed_generally");
							break;
						case o.a.FailedGqlReponse:
							h.g(c, "registration_failed_in_gql")
					}
				} catch (r) {
					h.g(c, "registration_failed_uncaught_exception"), console.error(r)
				}
			}, N = e => async (t, i, n) => {
				try {
					const i = await Object(u.a)();
					if (i) {
						const n = await i.pushManager.getSubscription();
						n && (n.unsubscribe(), Object(b.c)(), e && t(Object(p.e)({
							kind: m.b.SuccessCommunity,
							text: s.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						})))
					}
				} catch (c) {}
			}
		},
		"./src/reddit/helpers/trackers/notifications.ts": function(e, t, i) {
			"use strict";
			i.d(t, "f", (function() {
				return o
			})), i.d(t, "b", (function() {
				return a
			})), i.d(t, "c", (function() {
				return d
			})), i.d(t, "d", (function() {
				return u
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
			const c = e => Object.assign(Object.assign({}, s.defaults(e)), {
					noun: "desktop_notification_permissions"
				}),
				r = e => e ? "enable" : "disable",
				o = e => {
					Object(n.a)(Object.assign(Object.assign({}, c(e)), {
						action: "view",
						source: "popup"
					}))
				},
				a = e => {
					Object(n.a)(Object.assign(Object.assign({}, c(e)), {
						action: "allow",
						source: "popup"
					}))
				},
				d = e => {
					Object(n.a)(Object.assign(Object.assign({}, c(e)), {
						action: "block",
						source: "popup"
					}))
				},
				u = e => {
					Object(n.a)(Object.assign(Object.assign({}, c(e)), {
						action: "close",
						source: "popup"
					}))
				},
				l = (e, t, i) => Object.assign(Object.assign({}, s.defaults(e)), {
					actionInfo: s.actionInfo(e, {
						success: t,
						reason: i
					}),
					noun: "push_token"
				}),
				b = e => {
					Object(n.a)(Object.assign(Object.assign({}, l(e, !0)), {
						action: "request",
						source: "notification"
					}))
				},
				g = e => {
					Object(n.a)(Object.assign(Object.assign({}, l(e, !0)), {
						action: "register",
						source: "notification"
					}))
				},
				f = (e, t) => {
					Object(n.a)(Object.assign(Object.assign({}, l(e, !1, t)), {
						action: "bail",
						source: "notification"
					}))
				},
				p = e => Object.assign(Object.assign({}, (e => Object.assign(Object.assign({}, s.defaults(e)), {
					noun: "push_notification"
				}))(e)), {
					notification: s.notification(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				j = (e, t) => i => Object.assign(Object.assign({}, s.defaults(i)), {
					action: r(t),
					noun: e,
					source: "notification"
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PushNotifications.a7f5b8905f6c7d48a846.js.map