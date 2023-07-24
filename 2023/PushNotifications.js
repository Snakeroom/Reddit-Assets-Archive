// https://www.redditstatic.com/desktop2x/PushNotifications.e5664e1da5798a5cffd5.js
// Retrieved at 7/24/2023, 1:20:03 PM by Reddit Dataminer v1.0.0
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
				return W
			})), i.d(t, "requestNotificationsPermissions", (function() {
				return R
			})), i.d(t, "subscribeForPNs", (function() {
				return L
			})), i.d(t, "unsubscribeFromPNs", (function() {
				return P
			})), i.d(t, "requestBrowserNotificationPermissionPromptByUser", (function() {
				return E
			})), i.d(t, "subscribeToPermissionsChange", (function() {
				return A
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
				m = i("./src/reddit/actions/toaster.ts"),
				g = i("./src/reddit/constants/modals.ts"),
				O = i("./src/reddit/helpers/parseUrl.ts"),
				v = i("./src/reddit/helpers/tabBadging/index.ts"),
				j = i("./src/reddit/helpers/trackers/notifications.ts"),
				_ = i("./src/reddit/models/Toast/index.ts"),
				h = i("./src/reddit/selectors/activeModal.ts"),
				k = i("./src/reddit/selectors/activeModalId.ts"),
				y = i("./src/reddit/constants/experiments.ts"),
				w = i("./src/reddit/helpers/chooseVariant/index.ts"),
				S = i("./src/reddit/selectors/user.ts");
			const N = e => Object(w.c)(e, {
				experimentEligibilitySelector: S.S,
				experimentName: y.Hb
			}) === y.Zd;
			var F = i("./src/reddit/selectors/experiments/delayDnPermission.ts"),
				x = i("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");
			const q = e => Object(w.c)(e, {
				experimentName: y.jc,
				experimentEligibilitySelector: w.a
			}) === y.Zd;
			var C = i("./src/reddit/selectors/meta.ts");
			let G = !1;
			const W = async (e, t) => {
				const i = Object(S.R)(e);
				if (G) return;
				if (G = !0, Object(f.a)(e) !== d.d.NotificationsSupported) return;
				await Object(u.a)();
				navigator.serviceWorker.addEventListener("message", n => {
					const s = n.data,
						o = s.command || s.type;
					if ("registerWithServiceWorker" === o) D(e);
					else if (o === v.a && i) {
						const e = r()(s, ["command"]);
						t(Object(p.f)(e))
					} else if ("navigate.chat" === o) {
						const e = Object(O.a)(s.data.href);
						e && e.pathname && t(Object(l.c)(e.pathname))
					}
				}), D(e)
			}, D = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: j.c(e)
				})
			}, R = function(e, t) {
				let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
				return async (n, s, r) => {
					const c = s(),
						u = Object(C.f)(c),
						l = q(c),
						b = !!Object(k.a)(c),
						f = Object(F.a)(c),
						p = Object(x.e)(c),
						m = Object(h.c)(g.a.NSFW_BLOCKING_MODAL_V2)(c),
						O = N(c);
					if (p || m) return;
					if (await Object(o.a)() || u) return;
					await W(c, n);
					j.l(c), await Object(a.b)(e, t, () => {
						l || f || b || n(Object(d.s)()), n(Object(d.q)()), j.j(c)
					}, (e, t) => {
						n(Object(d.o)()), n(P(t ? d.a.Denied : d.a.Closed)), e && (t ? j.e(c) : j.f(c)), i()
					}, e => {
						n(Object(d.p)()), n(L()), e && j.d(c), i()
					}, () => {
						n(Object(d.n)()), i()
					}, () => {
						n(Object(d.r)())
					}, O)
				}
			}, L = e => async (t, i, s) => {
				const r = i();
				try {
					switch (await Object(c.b)(s.gqlContext)) {
						case c.a.Success:
							Object(f.b)(d.a.Granted), j.m(r), e && t(Object(m.f)({
								kind: _.b.SuccessCommunity,
								text: n.fbt._("Changes saved", null, {
									hk: "wGH5U"
								})
							}));
							break;
						case c.a.FailedResponse:
							j.k(r, "registration_failed_generally");
							break;
						case c.a.FailedGqlReponse:
							j.k(r, "registration_failed_in_gql")
					}
				} catch (o) {
					j.k(r, "registration_failed_uncaught_exception"), console.error(o)
				}
			}, P = (e, t) => async i => {
				try {
					Object(f.b)(e);
					const s = await Object(u.a)();
					if (s) {
						const e = await s.pushManager.getSubscription();
						e && (e.unsubscribe(), t && i(Object(m.f)({
							kind: _.b.SuccessCommunity,
							text: n.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						})))
					}
				} catch (s) {}
			}, E = e => async (t, i) => {
				const n = i();
				if (Object(f.a)(n) === d.d.NotificationsSupported) switch (Object(a.a)()) {
					case d.a.Default:
					case d.a.Closed:
						await t(R(!0, !0));
						break;
					case d.a.Denied:
						t(Object(b.h)(e))
				}
			}, A = () => async (e, t) => {
				var i;
				if (!(null === (i = null === navigator || void 0 === navigator ? void 0 : navigator.permissions) || void 0 === i ? void 0 : i.query)) return;
				const n = t();
				if (Object(f.a)(n) !== d.d.NotificationsSupported) return;
				const s = await navigator.permissions.query({
					name: "notifications"
				});
				s.onchange = () => (t => {
					switch (t) {
						case d.a.Denied:
							e(P(d.a.Denied)), j.e(n);
							break;
						case d.a.Granted:
							e(L()), j.d(n);
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
				return b
			})), i.d(t, "l", (function() {
				return p
			})), i.d(t, "m", (function() {
				return m
			})), i.d(t, "k", (function() {
				return g
			})), i.d(t, "c", (function() {
				return v
			})), i.d(t, "b", (function() {
				return j
			})), i.d(t, "i", (function() {
				return _
			})), i.d(t, "a", (function() {
				return h
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
				r = i("./src/telemetry/models/Event.ts");
			var o;
			! function(e) {
				e.FREQUENT = "frequent", e.LOW = "low", e.OFF = "off"
			}(o || (o = {}));
			const c = e => ({
					...n.p(e),
					noun: "desktop_notification_permissions"
				}),
				a = e => e ? "enable" : "disable",
				d = e => {
					Object(s.a)({
						...c(e),
						action: r.c.View,
						source: "popup"
					})
				},
				u = e => {
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
					...n.p(e),
					actionInfo: n.d(e, {
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
				O = e => ({
					...n.p(e),
					noun: "push_notification"
				}),
				v = e => ({
					...O(e),
					notification: n.G(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				j = (e, t) => i => ({
					...n.p(i),
					action: a(e),
					email: {
						type: t
					},
					noun: "email",
					source: "email_app_settings"
				}),
				_ = (e, t) => i => ({
					...n.p(i),
					action: a(e),
					notification: {
						type: t
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				h = e => t => ({
					...n.p(t),
					source: "email_app_settings",
					action: a(e),
					noun: "email",
					notification: {
						type: "all"
					}
				}),
				k = (e, t, i) => s => ({
					...n.p(s),
					action: "set_frequency",
					noun: i,
					source: "community_notifications",
					subreddit: {
						id: e,
						name: t.toLowerCase()
					}
				}),
				y = () => e => ({
					...n.p(e),
					action: r.c.View,
					noun: "screen",
					source: "global",
					actionInfo: {
						pageType: "community_alerts"
					}
				}),
				w = () => e => ({
					...n.p(e),
					action: "click",
					noun: "desktop_notification_permissions",
					source: "overlay"
				}),
				S = () => e => ({
					...n.p(e),
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PushNotifications.e5664e1da5798a5cffd5.js.map