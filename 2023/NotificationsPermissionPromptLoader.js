// https://www.redditstatic.com/desktop2x/NotificationsPermissionPromptLoader.fd662a333af90252d67a.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationsPermissionPromptLoader", "PushNotifications"], {
		"./src/reddit/actions/notifications/index.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "initializeServiceWorkerChannel", (function() {
				return A
			})), i.d(t, "requestNotificationsPermissions", (function() {
				return L
			})), i.d(t, "subscribeForPNs", (function() {
				return B
			})), i.d(t, "unsubscribeFromPNs", (function() {
				return T
			})), i.d(t, "requestBrowserNotificationPermissionPromptByUser", (function() {
				return U
			})), i.d(t, "subscribeToPermissionsChange", (function() {
				return V
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				o = i("./node_modules/lodash/omit.js"),
				s = i.n(o),
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
					for (let o = 0; o < i.length; ++o) n[o] = i.charCodeAt(o);
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
					const o = null == n ? void 0 : n.body.data.registerWebPushToken;
					return o && !o.ok ? f.FailedGqlReponse : f.Success
				} catch (t) {
					return console.error(t), f.FailedGeneric
				}
			};
			var m = i("./src/lib/notifications/index.ts"),
				g = i("./src/lib/notifications/constants.ts"),
				O = i("./src/reddit/actions/modal.ts"),
				_ = i("./src/reddit/actions/notifications/utils.ts"),
				v = i("./src/reddit/actions/tabBadging.ts"),
				j = i("./src/reddit/actions/toaster.ts"),
				h = i("./src/reddit/constants/modals.ts"),
				y = i("./src/reddit/helpers/tabBadging/index.ts"),
				k = i("./src/reddit/helpers/trackers/notifications.ts"),
				x = i("./src/reddit/models/Toast/index.ts"),
				w = i("./src/reddit/selectors/activeModal.ts"),
				N = i("./src/reddit/selectors/activeModalId.ts"),
				S = i("./src/reddit/constants/experiments.ts"),
				q = i("./src/reddit/helpers/chooseVariant/index.ts"),
				P = i("./src/reddit/selectors/user.ts");
			const F = e => Object(q.c)(e, {
				experimentEligibilitySelector: P.S,
				experimentName: S.Cb
			}) === S.Rd;
			var C = i("./src/reddit/selectors/experiments/delayDnPermission.ts"),
				E = i("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");
			const D = e => Object(q.c)(e, {
				experimentName: S.dc,
				experimentEligibilitySelector: q.a
			}) === S.Rd;
			var G = i("./src/reddit/selectors/meta.ts");
			let R = !1;
			const A = async (e, t) => {
				const i = Object(P.R)(e);
				if (R) return;
				if (R = !0, Object(_.a)(e) !== g.d.NotificationsSupported) return;
				await Object(u.a)();
				navigator.serviceWorker.addEventListener("message", n => {
					const o = n.data,
						r = o.command || o.type;
					if ("registerWithServiceWorker" === r) W(e);
					else if (r === y.a && i) {
						const e = s()(o, ["command"]);
						t(Object(v.e)(e))
					}
				}), W(e)
			}, W = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: k.c(e)
				})
			}, L = function(e, t) {
				let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
				return async (n, o, s) => {
					const c = o(),
						a = Object(G.f)(c),
						d = D(c),
						u = !!Object(N.a)(c),
						l = Object(C.a)(c),
						b = Object(E.e)(c),
						f = Object(w.c)(h.a.NSFW_BLOCKING_MODAL_V2)(c),
						p = F(c);
					if (b || f) return;
					if (await Object(r.a)() || a) return;
					await A(c, n);
					k.l(c), await Object(m.b)(e, t, () => {
						d || l || u || n(Object(g.s)()), n(Object(g.q)()), k.j(c)
					}, (e, t) => {
						n(Object(g.o)()), n(T(t ? g.a.Denied : g.a.Closed)), e && (t ? k.e(c) : k.f(c)), i()
					}, e => {
						n(Object(g.p)()), n(B()), e && k.d(c), i()
					}, () => {
						n(Object(g.n)()), i()
					}, () => {
						n(Object(g.r)())
					}, p)
				}
			}, B = e => async (t, i, o) => {
				const s = i();
				try {
					switch (await p(o.gqlContext)) {
						case f.Success:
							Object(_.b)(g.a.Granted), k.m(s), e && t(Object(j.f)({
								kind: x.b.SuccessCommunity,
								text: n.fbt._("Changes saved", null, {
									hk: "wGH5U"
								})
							}));
							break;
						case f.FailedResponse:
							k.k(s, "registration_failed_generally");
							break;
						case f.FailedGqlReponse:
							k.k(s, "registration_failed_in_gql")
					}
				} catch (r) {
					k.k(s, "registration_failed_uncaught_exception"), console.error(r)
				}
			}, T = (e, t) => async i => {
				try {
					Object(_.b)(e);
					const o = await Object(u.a)();
					if (o) {
						const e = await o.pushManager.getSubscription();
						e && (e.unsubscribe(), t && i(Object(j.f)({
							kind: x.b.SuccessCommunity,
							text: n.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						})))
					}
				} catch (o) {}
			}, U = e => async (t, i) => {
				const n = i();
				if (Object(_.a)(n) === g.d.NotificationsSupported) switch (Object(m.a)()) {
					case g.a.Default:
					case g.a.Closed:
						await t(L(!0, !0));
						break;
					case g.a.Denied:
						t(Object(O.h)(e))
				}
			}, V = () => async (e, t) => {
				var i;
				if (!(null === (i = null === navigator || void 0 === navigator ? void 0 : navigator.permissions) || void 0 === i ? void 0 : i.query)) return;
				const n = t();
				if (Object(_.a)(n) !== g.d.NotificationsSupported) return;
				const o = await navigator.permissions.query({
					name: "notifications"
				});
				o.onchange = () => (t => {
					switch (t) {
						case g.a.Denied:
							e(T(g.a.Denied)), k.e(n);
							break;
						case g.a.Granted:
							e(B()), k.d(n);
							break;
						default:
							e(T(g.a.Default))
					}
				})(o.state)
			}
		},
		"./src/reddit/components/NotificationsPermissionPrompt/index.m.less": function(e, t, i) {
			e.exports = {
				overlay: "_3v_UJgSmuhKg_-rFfbh_SU",
				backgroundAnimation: "_1gSGJzodnYhApx2Am5TGdI",
				container: "V4YUeqnTA5qOVcNqrDLIS",
				text: "_2hsTi-aPwYMqJrQ6pxibE-",
				controls: "_1_1xQ0i5JyzZ-3136vNro6"
			}
		},
		"./src/reddit/components/NotificationsPermissionPrompt/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "NotificationsPermissionPrompt", (function() {
				return p
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				o = i("./node_modules/react/index.js"),
				s = i.n(o),
				r = i("./node_modules/react-redux/es/index.js"),
				c = i("./src/higherOrderComponents/asModal/index.tsx"),
				a = i("./src/lib/notifications/constants.ts"),
				d = i("./src/reddit/actions/notifications/index.ts"),
				u = i("./src/reddit/controls/Button/index.tsx"),
				l = i("./src/reddit/components/NotificationsPermissionPrompt/index.m.less"),
				b = i.n(l);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = Object(c.a)(() => {
				const e = Object(r.d)();
				return s.a.createElement("div", {
					className: b.a.container
				}, s.a.createElement("p", {
					className: b.a.text
				}, n.fbt._("Do you want to enable desktop notifications?", null, {
					hk: "2VvV1D"
				})), s.a.createElement("div", {
					className: b.a.controls
				}, s.a.createElement(u.t, {
					priority: u.c.Secondary,
					onClick: () => {
						e(Object(a.m)())
					}
				}, n.fbt._("No", null, {
					hk: "49ARSG"
				})), s.a.createElement(u.t, {
					priority: u.c.Primary,
					onClick: () => {
						e(Object(d.requestNotificationsPermissions)(!1, !0)), e(Object(a.m)())
					}
				}, n.fbt._("Yes", null, {
					hk: "2VPWHX"
				}))))
			});
			t.default = e => s.a.createElement(p, f({}, e, {
				overlayClassName: b.a.overlay,
				withOverlay: !0
			}))
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
				return _
			})), i.d(t, "b", (function() {
				return v
			})), i.d(t, "i", (function() {
				return j
			})), i.d(t, "a", (function() {
				return h
			})), i.d(t, "n", (function() {
				return y
			})), i.d(t, "o", (function() {
				return k
			})), i.d(t, "h", (function() {
				return x
			})), i.d(t, "g", (function() {
				return w
			}));
			var n = i("./src/reddit/selectors/telemetry.ts"),
				o = i("./src/telemetry/index.ts"),
				s = i("./src/telemetry/models/Event.ts");
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
					Object(o.a)({
						...c(e),
						action: s.b.View,
						source: "popup"
					})
				},
				u = e => {
					Object(o.a)({
						...c(e),
						action: s.b.Allow,
						source: "popup"
					})
				},
				l = e => {
					Object(o.a)({
						...c(e),
						action: s.b.Block,
						source: "popup"
					})
				},
				b = e => {
					Object(o.a)({
						...c(e),
						action: s.b.Close,
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
					Object(o.a)({
						...f(e, !0),
						action: s.b.Request,
						source: "notification"
					})
				},
				m = e => {
					Object(o.a)({
						...f(e, !0),
						action: s.b.Register,
						source: "notification"
					})
				},
				g = (e, t) => {
					Object(o.a)({
						...f(e, !1, t),
						action: s.b.Bail,
						source: "notification"
					})
				},
				O = e => ({
					...n.q(e),
					noun: "push_notification"
				}),
				_ = e => ({
					...O(e),
					notification: n.H(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				v = (e, t) => i => ({
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
				y = (e, t, i) => o => ({
					...n.q(o),
					action: "set_frequency",
					noun: i,
					source: "community_notifications",
					subreddit: {
						id: e,
						name: t.toLowerCase()
					}
				}),
				k = () => e => ({
					...n.q(e),
					action: s.b.View,
					noun: "screen",
					source: "global",
					actionInfo: {
						pageType: "community_alerts"
					}
				}),
				x = () => e => ({
					...n.q(e),
					action: "click",
					noun: "desktop_notification_permissions",
					source: "overlay"
				}),
				w = () => e => ({
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationsPermissionPromptLoader.fd662a333af90252d67a.js.map