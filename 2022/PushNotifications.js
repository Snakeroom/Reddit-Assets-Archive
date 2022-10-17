// https://www.redditstatic.com/desktop2x/PushNotifications.507c5e853898fe3c2115.js
// Retrieved at 10/17/2022, 10:40:10 AM by Reddit Dataminer v1.0.0
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
						return Object(o.a)(e(), {
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
				return q
			})), i.d(t, "requestNotificationsPermissions", (function() {
				return G
			})), i.d(t, "subscribeForPNs", (function() {
				return R
			})), i.d(t, "unsubscribeFromPNs", (function() {
				return P
			})), i.d(t, "requestBrowserNotificationPermissionPromptByUser", (function() {
				return L
			})), i.d(t, "subscribeToPermissionsChange", (function() {
				return A
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/lodash/omit.js"),
				o = i.n(s),
				r = i("./src/lib/browser/isIncognito.ts"),
				c = i("./src/lib/notifications/token.ts"),
				a = i("./src/lib/notifications/index.ts"),
				d = i("./src/lib/notifications/constants.ts"),
				u = i("./src/lib/serviceWorker/index.ts"),
				l = i("./src/reddit/actions/chat/toggle.ts"),
				f = i("./src/reddit/actions/modal.ts"),
				b = i("./src/reddit/actions/notifications/utils.ts"),
				p = i("./src/reddit/actions/tabBadging.ts"),
				m = i("./src/reddit/actions/toaster.ts"),
				g = i("./src/reddit/constants/modals.ts"),
				O = i("./src/reddit/helpers/parseUrl.ts"),
				v = i("./src/reddit/helpers/tabBadging/index.ts"),
				_ = i("./src/reddit/helpers/trackers/notifications.ts"),
				h = i("./src/reddit/models/Toast/index.ts"),
				j = i("./src/reddit/selectors/activeModal.ts"),
				k = i("./src/reddit/selectors/activeModalId.ts"),
				y = i("./src/reddit/selectors/experiments/delayDnPermission.ts"),
				w = i("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				S = i("./src/reddit/constants/experiments.ts"),
				F = i("./src/reddit/helpers/chooseVariant/index.ts");
			const N = e => Object(F.c)(e, {
				experimentName: S.kc,
				experimentEligibilitySelector: F.a
			}) === S.Rd;
			var x = i("./src/reddit/selectors/meta.ts"),
				C = i("./src/reddit/selectors/user.ts");
			let W = !1;
			const q = async (e, t) => {
				const i = Object(C.P)(e);
				if (W) return;
				if (W = !0, Object(b.a)(e) !== d.c.NotificationsSupported) return;
				await Object(u.a)();
				navigator.serviceWorker.addEventListener("message", n => {
					const s = n.data,
						r = s.command || s.type;
					if ("registerWithServiceWorker" === r) D(e);
					else if (r === v.a && i) {
						const e = o()(s, ["command"]);
						t(Object(p.f)(e))
					} else if ("navigate.chat" === r) {
						const e = Object(O.a)(s.data.href);
						e && e.pathname && t(Object(l.c)(e.pathname))
					}
				}), D(e)
			}, D = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: _.c(e)
				})
			}, G = function(e, t) {
				let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
				return async (n, s, o) => {
					const c = s(),
						u = Object(x.f)(c),
						l = N(c),
						f = !!Object(k.a)(c),
						b = Object(y.a)(c),
						p = Object(w.e)(c),
						m = Object(j.c)(g.a.NSFW_BLOCKING_MODAL_V2)(c);
					if (p || m) return;
					if (await Object(r.a)() || u) return;
					await q(c, n);
					_.l(c), await Object(a.b)(e, t, () => {
						l || b || f || n(Object(d.o)()), n(Object(d.n)()), _.j(c)
					}, (e, t) => {
						n(Object(d.l)()), n(P(t ? d.a.Denied : d.a.Closed)), e && (t ? _.e(c) : _.f(c)), i()
					}, e => {
						n(Object(d.m)()), n(R()), e && _.d(c), i()
					}, () => {
						n(Object(d.k)()), i()
					})
				}
			}, R = e => async (t, i, s) => {
				const o = i();
				try {
					switch (await Object(c.b)(s.gqlContext)) {
						case c.a.Success:
							Object(b.b)(d.a.Granted), _.m(o), e && t(Object(m.f)({
								kind: h.b.SuccessCommunity,
								text: n.fbt._("Changes saved", null, {
									hk: "wGH5U"
								})
							}));
							break;
						case c.a.FailedResponse:
							_.k(o, "registration_failed_generally");
							break;
						case c.a.FailedGqlReponse:
							_.k(o, "registration_failed_in_gql")
					}
				} catch (r) {
					_.k(o, "registration_failed_uncaught_exception"), console.error(r)
				}
			}, P = (e, t) => async i => {
				try {
					Object(b.b)(e);
					const s = await Object(u.a)();
					if (s) {
						const e = await s.pushManager.getSubscription();
						e && (e.unsubscribe(), t && i(Object(m.f)({
							kind: h.b.SuccessCommunity,
							text: n.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						})))
					}
				} catch (s) {}
			}, L = e => async (t, i) => {
				const n = i();
				if (Object(b.a)(n) === d.c.NotificationsSupported) switch (Object(a.a)()) {
					case d.a.Default:
					case d.a.Closed:
						await t(G(!0, !0));
						break;
					case d.a.Denied:
						t(Object(f.h)(e))
				}
			}, A = () => async (e, t) => {
				var i;
				if (!(null === (i = null === navigator || void 0 === navigator ? void 0 : navigator.permissions) || void 0 === i ? void 0 : i.query)) return;
				const n = t();
				if (Object(b.a)(n) !== d.c.NotificationsSupported) return;
				const s = await navigator.permissions.query({
					name: "notifications"
				});
				s.onchange = () => (t => {
					switch (t) {
						case d.a.Denied:
							e(P(d.a.Denied)), _.e(n);
							break;
						case d.a.Granted:
							e(R()), _.d(n);
							break;
						default:
							e(P(d.a.Default))
					}
				})(s.state)
			}
		},
		"./src/reddit/helpers/trackers/notifications.ts": function(e, t, i) {
			"use strict";
			i.d(t, "j", (function() {
				return d
			})), i.d(t, "d", (function() {
				return u
			})), i.d(t, "e", (function() {
				return l
			})), i.d(t, "f", (function() {
				return f
			})), i.d(t, "l", (function() {
				return p
			})), i.d(t, "m", (function() {
				return m
			})), i.d(t, "k", (function() {
				return g
			})), i.d(t, "c", (function() {
				return v
			})), i.d(t, "b", (function() {
				return _
			})), i.d(t, "i", (function() {
				return h
			})), i.d(t, "a", (function() {
				return j
			})), i.d(t, "n", (function() {
				return k
			})), i.d(t, "o", (function() {
				return y
			})), i.d(t, "h", (function() {
				return w
			})), i.d(t, "g", (function() {
				return S
			}));
			var n = i("./src/reddit/selectors/telemetry.ts"),
				s = i("./src/telemetry/index.ts"),
				o = i("./src/telemetry/models/Event.ts");
			var r;
			! function(e) {
				e.FREQUENT = "frequent", e.LOW = "low", e.OFF = "off"
			}(r || (r = {}));
			const c = e => ({
					...n.o(e),
					noun: "desktop_notification_permissions"
				}),
				a = e => e ? "enable" : "disable",
				d = e => {
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
				l = e => {
					Object(s.a)({
						...c(e),
						action: o.c.Block,
						source: "popup"
					})
				},
				f = e => {
					Object(s.a)({
						...c(e),
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
				p = e => {
					Object(s.a)({
						...b(e, !0),
						action: o.c.Request,
						source: "notification"
					})
				},
				m = e => {
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
				O = e => ({
					...n.o(e),
					noun: "push_notification"
				}),
				v = e => ({
					...O(e),
					notification: n.F(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				_ = (e, t) => i => ({
					...n.o(i),
					action: a(e),
					email: {
						type: t
					},
					noun: "email",
					source: "email_app_settings"
				}),
				h = (e, t) => i => ({
					...n.o(i),
					action: a(e),
					notification: {
						type: t
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				j = e => t => ({
					...n.o(t),
					source: "email_app_settings",
					action: a(e),
					noun: "email",
					notification: {
						type: "all"
					}
				}),
				k = (e, t, i) => s => ({
					...n.o(s),
					action: "set_frequency",
					noun: i,
					source: "community_notifications",
					subreddit: {
						id: e,
						name: t.toLowerCase()
					}
				}),
				y = () => e => ({
					...n.o(e),
					action: o.c.View,
					noun: "screen",
					source: "global",
					actionInfo: {
						pageType: "community_alerts"
					}
				}),
				w = () => e => ({
					...n.o(e),
					action: "click",
					noun: "desktop_notification_permissions",
					source: "overlay"
				}),
				S = () => e => ({
					...n.o(e),
					action: "auto_dismiss",
					noun: "desktop_notification_permissions",
					source: "overlay"
				})
		},
		"./src/redditGQL/operations/RegisterWebPushToken.json": function(e) {
			e.exports = JSON.parse('{"id":"197650c1946c"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PushNotifications.507c5e853898fe3c2115.js.map