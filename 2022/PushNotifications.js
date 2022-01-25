// https://www.redditstatic.com/desktop2x/PushNotifications.dfc410ad27bec2121710.js
// Retrieved at 1/25/2022, 1:40:03 PM by Reddit Dataminer v1.0.0
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
			var u;
			! function(e) {
				e[e.Success = 0] = "Success", e[e.FailedGeneric = 1] = "FailedGeneric", e[e.FailedResponse = 2] = "FailedResponse", e[e.FailedGqlReponse = 3] = "FailedGqlReponse", e[e.FailedNoServiceWorker = 4] = "FailedNoServiceWorker", e[e.FailedNoSubscription = 5] = "FailedNoSubscription"
			}(u || (u = {}));
			const d = async e => {
				try {
					const t = await Object(o.a)();
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
						return Object(r.a)(e(), {
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
				return q
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/lodash/omit.js"),
				r = i.n(s),
				o = i("./src/lib/browser/isIncognito.ts"),
				c = i("./src/lib/notifications/token.ts"),
				a = i("./src/lib/notifications/index.ts"),
				u = i("./src/lib/notifications/constants.ts"),
				d = i("./src/lib/serviceWorker/index.ts"),
				l = i("./src/reddit/actions/chat/toggle.ts"),
				b = i("./src/reddit/actions/modal.ts"),
				f = i("./src/reddit/actions/notifications/utils.ts"),
				p = i("./src/reddit/actions/tabBadging.ts"),
				m = i("./src/reddit/actions/toaster.ts"),
				g = i("./src/reddit/helpers/parseUrl.ts"),
				h = i("./src/reddit/helpers/tabBadging/index.ts"),
				O = i("./src/reddit/helpers/trackers/notifications.ts"),
				v = i("./src/reddit/models/Toast/index.ts"),
				j = i("./src/reddit/constants/experiments.ts"),
				_ = i("./src/reddit/helpers/chooseVariant/index.ts");
			var k = i("./src/reddit/selectors/meta.ts"),
				y = i("./src/reddit/selectors/user.ts");
			let w = !1;
			const S = async (e, t) => {
				const i = Object(y.I)(e);
				if (w) return;
				if (w = !0, Object(f.a)(e) !== u.c.NotificationsSupported) return;
				await Object(d.a)();
				navigator.serviceWorker.addEventListener("message", n => {
					const s = n.data,
						o = s.command || s.type;
					if ("registerWithServiceWorker" === o) F(e);
					else if (o === h.a && i) {
						const e = r()(s, ["command"]);
						t(Object(p.f)(e))
					} else if ("navigate.chat" === o) {
						const e = Object(g.a)(s.data.href);
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
					d = Object(k.f)(c),
					l = (e => Object(_.c)(e, {
						experimentName: j.Fb,
						experimentEligibilitySelector: _.a
					}) === j.Wc)(c);
				if (await Object(o.a)() || d) return;
				await S(c, n);
				O.j(c), await Object(a.b)(e, t, () => {
					l || n(Object(u.o)()), n(Object(u.n)()), O.h(c)
				}, (e, t) => {
					n(Object(u.l)()), n(C(t ? u.a.Denied : u.a.Closed)), e && (t ? O.e(c) : O.f(c))
				}, e => {
					n(Object(u.m)()), n(x()), e && O.d(c)
				}, () => {
					n(Object(u.k)()), i()
				})
			}, x = e => async (t, i, s) => {
				const r = i();
				try {
					switch (await Object(c.b)(s.gqlContext)) {
						case c.a.Success:
							Object(f.b)(u.a.Granted), O.k(r), e && t(Object(m.f)({
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
					const s = await Object(d.a)();
					if (s) {
						const e = await s.pushManager.getSubscription();
						e && (e.unsubscribe(), t && i(Object(m.f)({
							kind: v.b.SuccessCommunity,
							text: n.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						})))
					}
				} catch (s) {}
			}, W = e => async (t, i) => {
				const n = i();
				if (Object(f.a)(n) === u.c.NotificationsSupported) switch (Object(a.a)()) {
					case u.a.Default:
					case u.a.Closed:
						await t(N(!0, !0));
						break;
					case u.a.Denied:
						t(Object(b.h)(e))
				}
			}, q = () => async (e, t) => {
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
							e(C(u.a.Denied)), O.e(n);
							break;
						case u.a.Granted:
							e(x()), O.d(n);
							break;
						default:
							e(C(u.a.Default))
					}
				})(s.state)
			}
		},
		"./src/reddit/helpers/trackers/notifications.ts": function(e, t, i) {
			"use strict";
			i.d(t, "h", (function() {
				return u
			})), i.d(t, "d", (function() {
				return d
			})), i.d(t, "e", (function() {
				return l
			})), i.d(t, "f", (function() {
				return b
			})), i.d(t, "j", (function() {
				return p
			})), i.d(t, "k", (function() {
				return m
			})), i.d(t, "i", (function() {
				return g
			})), i.d(t, "c", (function() {
				return O
			})), i.d(t, "b", (function() {
				return v
			})), i.d(t, "g", (function() {
				return j
			})), i.d(t, "a", (function() {
				return _
			})), i.d(t, "l", (function() {
				return k
			})), i.d(t, "m", (function() {
				return y
			}));
			var n = i("./src/reddit/selectors/telemetry.ts"),
				s = i("./src/telemetry/index.ts"),
				r = i("./src/telemetry/models/Event.ts");
			var o;
			! function(e) {
				e.FREQUENT = "frequent", e.LOW = "low", e.OFF = "off"
			}(o || (o = {}));
			const c = e => ({
					...n.m(e),
					noun: "desktop_notification_permissions"
				}),
				a = e => e ? "enable" : "disable",
				u = e => {
					Object(s.a)({
						...c(e),
						action: r.c.View,
						source: "popup"
					})
				},
				d = e => {
					Object(s.a)({
						...c(e),
						action: r.c.Allow,
						source: "popup"
					})
				},
				l = e => {
					Object(s.a)({
						...c(e),
						action: r.c.Block,
						source: "popup"
					})
				},
				b = e => {
					Object(s.a)({
						...c(e),
						action: r.c.Close,
						source: "popup"
					})
				},
				f = (e, t, i) => ({
					...n.m(e),
					actionInfo: n.c(e, {
						success: t,
						reason: i
					}),
					noun: "push_token"
				}),
				p = e => {
					Object(s.a)({
						...f(e, !0),
						action: r.c.Request,
						source: "notification"
					})
				},
				m = e => {
					Object(s.a)({
						...f(e, !0),
						action: r.c.Register,
						source: "notification"
					})
				},
				g = (e, t) => {
					Object(s.a)({
						...f(e, !1, t),
						action: r.c.Bail,
						source: "notification"
					})
				},
				h = e => ({
					...n.m(e),
					noun: "push_notification"
				}),
				O = e => ({
					...h(e),
					notification: n.C(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				v = (e, t) => i => ({
					...n.m(i),
					action: a(e),
					email: {
						type: t
					},
					noun: "email",
					source: "email_app_settings"
				}),
				j = (e, t) => i => ({
					...n.m(i),
					action: a(e),
					notification: {
						type: t
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				_ = e => t => ({
					...n.m(t),
					source: "email_app_settings",
					action: a(e),
					noun: "email",
					notification: {
						type: "all"
					}
				}),
				k = (e, t, i) => s => ({
					...n.m(s),
					action: "set_frequency",
					noun: i,
					source: "community_notifications",
					subreddit: {
						id: e,
						name: t.toLowerCase()
					}
				}),
				y = () => e => ({
					...n.m(e),
					action: r.c.View,
					noun: "screen",
					source: "global",
					actionInfo: {
						pageType: "community_alerts"
					}
				})
		},
		"./src/redditGQL/operations/RegisterWebPushToken.json": function(e) {
			e.exports = JSON.parse('{"id":"197650c1946c"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PushNotifications.dfc410ad27bec2121710.js.map