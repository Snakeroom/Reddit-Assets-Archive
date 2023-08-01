// https://www.redditstatic.com/desktop2x/PushNotifications.d3ea16852480d6af3047.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PushNotifications"], {
		"./src/reddit/actions/notifications/index.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "initializeServiceWorkerChannel", (function() {
				return P
			})), i.d(t, "requestNotificationsPermissions", (function() {
				return A
			})), i.d(t, "subscribeForPNs", (function() {
				return B
			})), i.d(t, "unsubscribeFromPNs", (function() {
				return T
			})), i.d(t, "requestBrowserNotificationPermissionPromptByUser", (function() {
				return I
			})), i.d(t, "subscribeToPermissionsChange", (function() {
				return M
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/lodash/omit.js"),
				o = i.n(s),
				r = i("./src/lib/browser/isIncognito.ts"),
				c = i("./src/config.ts"),
				a = i("./src/redditGQL/operations/RegisterWebPushToken.json"),
				d = i("./src/lib/makeGqlRequest/index.ts"),
				u = i("./src/lib/serviceWorker/index.ts"),
				l = i("./src/lib/timezone/index.ts"),
				b = e => {
					const t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"),
						i = window.atob(t),
						n = new Uint8Array(i.length);
					for (let s = 0; s < i.length; ++s) n[s] = i.charCodeAt(s);
					return n
				};
			var f;
			! function(e) {
				e[e.Success = 0] = "Success", e[e.FailedGeneric = 1] = "FailedGeneric", e[e.FailedResponse = 2] = "FailedResponse", e[e.FailedGqlReponse = 3] = "FailedGqlReponse", e[e.FailedNoServiceWorker = 4] = "FailedNoServiceWorker", e[e.FailedNoSubscription = 5] = "FailedNoSubscription"
			}(f || (f = {}));
			const p = async e => {
				try {
					const t = await Object(u.a)();
					if (!t) return f.FailedNoServiceWorker;
					let i = await t.pushManager.getSubscription();
					if (!i) {
						const e = {
							userVisibleOnly: !0,
							applicationServerKey: b(c.a.pushNotificationApplicationServerKey)
						};
						i = await t.pushManager.subscribe(e)
					}
					if (!i) return f.FailedNoSubscription;
					const n = await ((e, t) => {
						const i = {
							pushToken: JSON.stringify(t),
							timezoneName: Object(l.b)() || l.a,
							timestamp: (new Date).toISOString(),
							language: "en_us"
						};
						return Object(d.a)(e(), {
							...a,
							variables: i
						})
					})(e, i);
					if (n && !n.ok) return f.FailedResponse;
					const s = null == n ? void 0 : n.body.data.registerWebPushToken;
					return s && !s.ok ? f.FailedGqlReponse : f.Success
				} catch (t) {
					return console.error(t), f.FailedGeneric
				}
			};
			var m = i("./src/lib/notifications/index.ts"),
				g = i("./src/lib/notifications/constants.ts"),
				O = i("./src/reddit/actions/modal.ts"),
				v = i("./src/reddit/actions/notifications/utils.ts"),
				_ = i("./src/reddit/actions/tabBadging.ts"),
				j = i("./src/reddit/actions/toaster.ts"),
				h = i("./src/reddit/constants/modals.ts"),
				k = i("./src/reddit/helpers/tabBadging/index.ts"),
				y = i("./src/reddit/helpers/trackers/notifications.ts"),
				w = i("./src/reddit/models/Toast/index.ts"),
				S = i("./src/reddit/selectors/activeModal.ts"),
				q = i("./src/reddit/selectors/activeModalId.ts"),
				N = i("./src/reddit/constants/experiments.ts"),
				F = i("./src/reddit/helpers/chooseVariant/index.ts"),
				x = i("./src/reddit/selectors/user.ts");
			const C = e => Object(F.c)(e, {
				experimentEligibilitySelector: x.S,
				experimentName: N.Cb
			}) === N.Rd;
			var R = i("./src/reddit/selectors/experiments/delayDnPermission.ts"),
				D = i("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");
			const G = e => Object(F.c)(e, {
				experimentName: N.dc,
				experimentEligibilitySelector: F.a
			}) === N.Rd;
			var W = i("./src/reddit/selectors/meta.ts");
			let L = !1;
			const P = async (e, t) => {
				const i = Object(x.R)(e);
				if (L) return;
				if (L = !0, Object(v.a)(e) !== g.d.NotificationsSupported) return;
				await Object(u.a)();
				navigator.serviceWorker.addEventListener("message", n => {
					const s = n.data,
						r = s.command || s.type;
					if ("registerWithServiceWorker" === r) E(e);
					else if (r === k.a && i) {
						const e = o()(s, ["command"]);
						t(Object(_.e)(e))
					}
				}), E(e)
			}, E = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: y.c(e)
				})
			}, A = function(e, t) {
				let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
				return async (n, s, o) => {
					const c = s(),
						a = Object(W.f)(c),
						d = G(c),
						u = !!Object(q.a)(c),
						l = Object(R.a)(c),
						b = Object(D.e)(c),
						f = Object(S.c)(h.a.NSFW_BLOCKING_MODAL_V2)(c),
						p = C(c);
					if (b || f) return;
					if (await Object(r.a)() || a) return;
					await P(c, n);
					y.l(c), await Object(m.b)(e, t, () => {
						d || l || u || n(Object(g.s)()), n(Object(g.q)()), y.j(c)
					}, (e, t) => {
						n(Object(g.o)()), n(T(t ? g.a.Denied : g.a.Closed)), e && (t ? y.e(c) : y.f(c)), i()
					}, e => {
						n(Object(g.p)()), n(B()), e && y.d(c), i()
					}, () => {
						n(Object(g.n)()), i()
					}, () => {
						n(Object(g.r)())
					}, p)
				}
			}, B = e => async (t, i, s) => {
				const o = i();
				try {
					switch (await p(s.gqlContext)) {
						case f.Success:
							Object(v.b)(g.a.Granted), y.m(o), e && t(Object(j.f)({
								kind: w.b.SuccessCommunity,
								text: n.fbt._("Changes saved", null, {
									hk: "wGH5U"
								})
							}));
							break;
						case f.FailedResponse:
							y.k(o, "registration_failed_generally");
							break;
						case f.FailedGqlReponse:
							y.k(o, "registration_failed_in_gql")
					}
				} catch (r) {
					y.k(o, "registration_failed_uncaught_exception"), console.error(r)
				}
			}, T = (e, t) => async i => {
				try {
					Object(v.b)(e);
					const s = await Object(u.a)();
					if (s) {
						const e = await s.pushManager.getSubscription();
						e && (e.unsubscribe(), t && i(Object(j.f)({
							kind: w.b.SuccessCommunity,
							text: n.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						})))
					}
				} catch (s) {}
			}, I = e => async (t, i) => {
				const n = i();
				if (Object(v.a)(n) === g.d.NotificationsSupported) switch (Object(m.a)()) {
					case g.a.Default:
					case g.a.Closed:
						await t(A(!0, !0));
						break;
					case g.a.Denied:
						t(Object(O.h)(e))
				}
			}, M = () => async (e, t) => {
				var i;
				if (!(null === (i = null === navigator || void 0 === navigator ? void 0 : navigator.permissions) || void 0 === i ? void 0 : i.query)) return;
				const n = t();
				if (Object(v.a)(n) !== g.d.NotificationsSupported) return;
				const s = await navigator.permissions.query({
					name: "notifications"
				});
				s.onchange = () => (t => {
					switch (t) {
						case g.a.Denied:
							e(T(g.a.Denied)), y.e(n);
							break;
						case g.a.Granted:
							e(B()), y.d(n);
							break;
						default:
							e(T(g.a.Default))
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
				return _
			})), i.d(t, "i", (function() {
				return j
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
				o = i("./src/telemetry/models/Event.ts");
			var r;
			! function(e) {
				e.FREQUENT = "frequent", e.LOW = "low", e.OFF = "off"
			}(r || (r = {}));
			const c = e => ({
					...n.q(e),
					noun: "desktop_notification_permissions"
				}),
				a = e => e ? "enable" : "disable",
				d = e => {
					Object(s.a)({
						...c(e),
						action: o.b.View,
						source: "popup"
					})
				},
				u = e => {
					Object(s.a)({
						...c(e),
						action: o.b.Allow,
						source: "popup"
					})
				},
				l = e => {
					Object(s.a)({
						...c(e),
						action: o.b.Block,
						source: "popup"
					})
				},
				b = e => {
					Object(s.a)({
						...c(e),
						action: o.b.Close,
						source: "popup"
					})
				},
				f = (e, t, i) => ({
					...n.q(e),
					actionInfo: n.d(e, {
						success: t,
						reason: i
					}),
					noun: "push_token"
				}),
				p = e => {
					Object(s.a)({
						...f(e, !0),
						action: o.b.Request,
						source: "notification"
					})
				},
				m = e => {
					Object(s.a)({
						...f(e, !0),
						action: o.b.Register,
						source: "notification"
					})
				},
				g = (e, t) => {
					Object(s.a)({
						...f(e, !1, t),
						action: o.b.Bail,
						source: "notification"
					})
				},
				O = e => ({
					...n.q(e),
					noun: "push_notification"
				}),
				v = e => ({
					...O(e),
					notification: n.H(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				_ = (e, t) => i => ({
					...n.q(i),
					action: a(e),
					email: {
						type: t
					},
					noun: "email",
					source: "email_app_settings"
				}),
				j = (e, t) => i => ({
					...n.q(i),
					action: a(e),
					notification: {
						type: t
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				h = e => t => ({
					...n.q(t),
					source: "email_app_settings",
					action: a(e),
					noun: "email",
					notification: {
						type: "all"
					}
				}),
				k = (e, t, i) => s => ({
					...n.q(s),
					action: "set_frequency",
					noun: i,
					source: "community_notifications",
					subreddit: {
						id: e,
						name: t.toLowerCase()
					}
				}),
				y = () => e => ({
					...n.q(e),
					action: o.b.View,
					noun: "screen",
					source: "global",
					actionInfo: {
						pageType: "community_alerts"
					}
				}),
				w = () => e => ({
					...n.q(e),
					action: "click",
					noun: "desktop_notification_permissions",
					source: "overlay"
				}),
				S = () => e => ({
					...n.q(e),
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PushNotifications.d3ea16852480d6af3047.js.map