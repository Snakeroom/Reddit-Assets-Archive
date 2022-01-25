// https://www.redditstatic.com/desktop2x/PushNotifications.72d4f8ba478d117c4bc4.js
// Retrieved at 1/25/2022, 12:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PushNotifications"], {
		"./src/lib/notifications/token.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return d
			})), i.d(t, "b", (function() {
				return u
			}));
			var n = i("./src/config.ts"),
				s = i("./src/redditGQL/operations/RegisterWebPushToken.json"),
				r = i("./src/lib/makeGqlRequest/index.ts"),
				o = i("./src/lib/serviceWorker/index.ts"),
				c = i("./src/lib/timezone/index.ts"),
				a = e => {
					const t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"),
						i = window.atob(t),
						n = new Uint8Array(i.length);
					for (let s = 0; s < i.length; ++s) n[s] = i.charCodeAt(s);
					return n
				};
			var d;
			! function(e) {
				e[e.Success = 0] = "Success", e[e.FailedGeneric = 1] = "FailedGeneric", e[e.FailedResponse = 2] = "FailedResponse", e[e.FailedGqlReponse = 3] = "FailedGqlReponse", e[e.FailedNoServiceWorker = 4] = "FailedNoServiceWorker", e[e.FailedNoSubscription = 5] = "FailedNoSubscription"
			}(d || (d = {}));
			const u = async e => {
				try {
					const t = await Object(o.a)();
					if (!t) return d.FailedNoServiceWorker;
					let i = await t.pushManager.getSubscription();
					if (!i) {
						const e = {
							userVisibleOnly: !0,
							applicationServerKey: a(n.a.pushNotificationApplicationServerKey)
						};
						i = await t.pushManager.subscribe(e)
					}
					if (!i) return d.FailedNoSubscription;
					const u = await ((e, t) => {
						const i = {
							pushToken: JSON.stringify(t),
							timezoneName: Object(c.b)() || c.a,
							timestamp: (new Date).toISOString(),
							language: "en_us"
						};
						return Object(r.a)(e(), {
							...s,
							variables: i
						})
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
				return S
			})), i.d(t, "requestNotificationsPermissions", (function() {
				return N
			})), i.d(t, "subscribeForPNs", (function() {
				return x
			})), i.d(t, "unsubscribeFromPNs", (function() {
				return C
			})), i.d(t, "requestBrowserNotificationPermissionPromptByUser", (function() {
				return W
			})), i.d(t, "subscribeToPermissionsChange", (function() {
				return G
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/lodash/omit.js"),
				r = i.n(s),
				o = i("./src/lib/browser/isIncognito.ts"),
				c = i("./src/lib/notifications/token.ts"),
				a = i("./src/lib/notifications/index.ts"),
				d = i("./src/lib/notifications/constants.ts"),
				u = i("./src/lib/serviceWorker/index.ts"),
				l = i("./src/reddit/actions/chat/toggle.ts"),
				b = i("./src/reddit/actions/modal.ts"),
				f = i("./src/reddit/actions/notifications/utils.ts"),
				p = i("./src/reddit/actions/tabBadging.ts"),
				g = i("./src/reddit/actions/toaster.ts"),
				m = i("./src/reddit/helpers/parseUrl.ts"),
				h = i("./src/reddit/helpers/tabBadging/index.ts"),
				O = i("./src/reddit/helpers/trackers/notifications.ts"),
				v = i("./src/reddit/models/Toast/index.ts"),
				j = i("./src/reddit/constants/experiments.ts"),
				k = i("./src/reddit/helpers/chooseVariant/index.ts");
			var _ = i("./src/reddit/selectors/meta.ts"),
				w = i("./src/reddit/selectors/user.ts");
			let y = !1;
			const S = async (e, t) => {
				const i = Object(w.I)(e);
				if (y) return;
				if (y = !0, Object(f.a)(e) !== d.c.NotificationsSupported) return;
				await Object(u.a)();
				navigator.serviceWorker.addEventListener("message", n => {
					const s = n.data,
						o = s.command || s.type;
					if ("registerWithServiceWorker" === o) F(e);
					else if (o === h.a && i) {
						const e = r()(s, ["command"]);
						t(Object(p.f)(e))
					} else if ("navigate.chat" === o) {
						const e = Object(m.a)(s.data.href);
						e && e.pathname && t(Object(l.c)(e.pathname))
					}
				}), F(e)
			}, F = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: O.c(e)
				})
			}, N = (e, t, i = (() => {})) => async (n, s, r) => {
				const c = s(),
					u = Object(_.f)(c),
					l = (e => Object(k.c)(e, {
						experimentName: j.Fb,
						experimentEligibilitySelector: k.a
					}) === j.Wc)(c);
				if (await Object(o.a)() || u) return;
				await S(c, n);
				O.j(c), await Object(a.b)(e, t, () => {
					l || n(Object(d.o)()), n(Object(d.n)()), O.h(c)
				}, (e, t) => {
					n(Object(d.l)()), n(C(t ? d.a.Denied : d.a.Closed)), e && (t ? O.e(c) : O.f(c))
				}, e => {
					n(Object(d.m)()), n(x()), e && O.d(c)
				}, () => {
					n(Object(d.k)()), i()
				})
			}, x = e => async (t, i, s) => {
				const r = i();
				try {
					switch (await Object(c.b)(s.gqlContext)) {
						case c.a.Success:
							Object(f.b)(d.a.Granted), O.k(r), e && t(Object(g.f)({
								kind: v.b.SuccessCommunity,
								text: n.fbt._("Changes saved", null, {
									hk: "wGH5U"
								})
							}));
							break;
						case c.a.FailedResponse:
							O.i(r, "registration_failed_generally");
							break;
						case c.a.FailedGqlReponse:
							O.i(r, "registration_failed_in_gql")
					}
				} catch (o) {
					O.i(r, "registration_failed_uncaught_exception"), console.error(o)
				}
			}, C = (e, t) => async i => {
				try {
					Object(f.b)(e);
					const s = await Object(u.a)();
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
			}, W = e => async (t, i) => {
				const n = i();
				if (Object(f.a)(n) === d.c.NotificationsSupported) switch (Object(a.a)()) {
					case d.a.Default:
					case d.a.Closed:
						await t(N(!0, !0));
						break;
					case d.a.Denied:
						t(Object(b.h)(e))
				}
			}, G = () => async (e, t) => {
				var i;
				if (!(null === (i = null === navigator || void 0 === navigator ? void 0 : navigator.permissions) || void 0 === i ? void 0 : i.query)) return;
				const n = t();
				if (Object(f.a)(n) !== d.c.NotificationsSupported) return;
				const s = await navigator.permissions.query({
					name: "notifications"
				});
				s.onchange = () => (t => {
					switch (t) {
						case d.a.Denied:
							e(C(d.a.Denied)), O.e(n);
							break;
						case d.a.Granted:
							e(x()), O.d(n);
							break;
						default:
							e(C(d.a.Default))
					}
				})(s.state)
			}
		},
		"./src/reddit/helpers/trackers/notifications.ts": function(e, t, i) {
			"use strict";
			i.d(t, "h", (function() {
				return a
			})), i.d(t, "d", (function() {
				return d
			})), i.d(t, "e", (function() {
				return u
			})), i.d(t, "f", (function() {
				return l
			})), i.d(t, "j", (function() {
				return f
			})), i.d(t, "k", (function() {
				return p
			})), i.d(t, "i", (function() {
				return g
			})), i.d(t, "c", (function() {
				return h
			})), i.d(t, "b", (function() {
				return O
			})), i.d(t, "g", (function() {
				return v
			})), i.d(t, "a", (function() {
				return j
			}));
			var n = i("./src/reddit/selectors/telemetry.ts"),
				s = i("./src/telemetry/index.ts"),
				r = i("./src/telemetry/models/Event.ts");
			const o = e => ({
					...n.m(e),
					noun: "desktop_notification_permissions"
				}),
				c = e => e ? "enable" : "disable",
				a = e => {
					Object(s.a)({
						...o(e),
						action: r.c.View,
						source: "popup"
					})
				},
				d = e => {
					Object(s.a)({
						...o(e),
						action: r.c.Allow,
						source: "popup"
					})
				},
				u = e => {
					Object(s.a)({
						...o(e),
						action: r.c.Block,
						source: "popup"
					})
				},
				l = e => {
					Object(s.a)({
						...o(e),
						action: r.c.Close,
						source: "popup"
					})
				},
				b = (e, t, i) => ({
					...n.m(e),
					actionInfo: n.c(e, {
						success: t,
						reason: i
					}),
					noun: "push_token"
				}),
				f = e => {
					Object(s.a)({
						...b(e, !0),
						action: r.c.Request,
						source: "notification"
					})
				},
				p = e => {
					Object(s.a)({
						...b(e, !0),
						action: r.c.Register,
						source: "notification"
					})
				},
				g = (e, t) => {
					Object(s.a)({
						...b(e, !1, t),
						action: r.c.Bail,
						source: "notification"
					})
				},
				m = e => ({
					...n.m(e),
					noun: "push_notification"
				}),
				h = e => ({
					...m(e),
					notification: n.C(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				O = (e, t) => i => ({
					...n.m(i),
					action: c(e),
					email: {
						type: t
					},
					noun: "email",
					source: "email_app_settings"
				}),
				v = (e, t) => i => ({
					...n.m(i),
					action: c(e),
					notification: {
						type: t
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				j = e => t => ({
					...n.m(t),
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PushNotifications.72d4f8ba478d117c4bc4.js.map