// https://www.redditstatic.com/desktop2x/NotificationsPermissionPromptLoader.19625905195cf5b77044.js
// Retrieved at 7/6/2023, 5:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationsPermissionPromptLoader", "PushNotifications"], {
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
				return G
			})), i.d(t, "requestNotificationsPermissions", (function() {
				return D
			})), i.d(t, "subscribeForPNs", (function() {
				return W
			})), i.d(t, "unsubscribeFromPNs", (function() {
				return A
			})), i.d(t, "requestBrowserNotificationPermissionPromptByUser", (function() {
				return R
			})), i.d(t, "subscribeToPermissionsChange", (function() {
				return L
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
				p = i("./src/reddit/actions/notifications/utils.ts"),
				b = i("./src/reddit/actions/tabBadging.ts"),
				m = i("./src/reddit/actions/toaster.ts"),
				g = i("./src/reddit/constants/modals.ts"),
				O = i("./src/reddit/helpers/parseUrl.ts"),
				v = i("./src/reddit/helpers/tabBadging/index.ts"),
				_ = i("./src/reddit/helpers/trackers/notifications.ts"),
				h = i("./src/reddit/models/Toast/index.ts"),
				j = i("./src/reddit/selectors/activeModal.ts"),
				y = i("./src/reddit/selectors/activeModalId.ts"),
				k = i("./src/reddit/constants/experiments.ts"),
				x = i("./src/reddit/helpers/chooseVariant/index.ts"),
				w = i("./src/reddit/selectors/user.ts");
			const N = e => Object(x.c)(e, {
				experimentEligibilitySelector: w.S,
				experimentName: k.Gb
			}) === k.Yd;
			var S = i("./src/reddit/selectors/experiments/delayDnPermission.ts"),
				P = i("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");
			const F = e => Object(x.c)(e, {
				experimentName: k.ic,
				experimentEligibilitySelector: x.a
			}) === k.Yd;
			var q = i("./src/reddit/selectors/meta.ts");
			let C = !1;
			const G = async (e, t) => {
				const i = Object(w.R)(e);
				if (C) return;
				if (C = !0, Object(p.a)(e) !== d.d.NotificationsSupported) return;
				await Object(u.a)();
				navigator.serviceWorker.addEventListener("message", n => {
					const s = n.data,
						r = s.command || s.type;
					if ("registerWithServiceWorker" === r) E(e);
					else if (r === v.a && i) {
						const e = o()(s, ["command"]);
						t(Object(b.f)(e))
					} else if ("navigate.chat" === r) {
						const e = Object(O.a)(s.data.href);
						e && e.pathname && t(Object(l.c)(e.pathname))
					}
				}), E(e)
			}, E = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: _.c(e)
				})
			}, D = function(e, t) {
				let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
				return async (n, s, o) => {
					const c = s(),
						u = Object(q.f)(c),
						l = F(c),
						f = !!Object(y.a)(c),
						p = Object(S.a)(c),
						b = Object(P.e)(c),
						m = Object(j.c)(g.a.NSFW_BLOCKING_MODAL_V2)(c),
						O = N(c);
					if (b || m) return;
					if (await Object(r.a)() || u) return;
					await G(c, n);
					_.l(c), await Object(a.b)(e, t, () => {
						l || p || f || n(Object(d.s)()), n(Object(d.q)()), _.j(c)
					}, (e, t) => {
						n(Object(d.o)()), n(A(t ? d.a.Denied : d.a.Closed)), e && (t ? _.e(c) : _.f(c)), i()
					}, e => {
						n(Object(d.p)()), n(W()), e && _.d(c), i()
					}, () => {
						n(Object(d.n)()), i()
					}, () => {
						n(Object(d.r)())
					}, O)
				}
			}, W = e => async (t, i, s) => {
				const o = i();
				try {
					switch (await Object(c.b)(s.gqlContext)) {
						case c.a.Success:
							Object(p.b)(d.a.Granted), _.m(o), e && t(Object(m.f)({
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
			}, A = (e, t) => async i => {
				try {
					Object(p.b)(e);
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
			}, R = e => async (t, i) => {
				const n = i();
				if (Object(p.a)(n) === d.d.NotificationsSupported) switch (Object(a.a)()) {
					case d.a.Default:
					case d.a.Closed:
						await t(D(!0, !0));
						break;
					case d.a.Denied:
						t(Object(f.h)(e))
				}
			}, L = () => async (e, t) => {
				var i;
				if (!(null === (i = null === navigator || void 0 === navigator ? void 0 : navigator.permissions) || void 0 === i ? void 0 : i.query)) return;
				const n = t();
				if (Object(p.a)(n) !== d.d.NotificationsSupported) return;
				const s = await navigator.permissions.query({
					name: "notifications"
				});
				s.onchange = () => (t => {
					switch (t) {
						case d.a.Denied:
							e(A(d.a.Denied)), _.e(n);
							break;
						case d.a.Granted:
							e(W()), _.d(n);
							break;
						default:
							e(A(d.a.Default))
					}
				})(s.state)
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
				return b
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/react/index.js"),
				o = i.n(s),
				r = i("./node_modules/react-redux/es/index.js"),
				c = i("./src/higherOrderComponents/asModal/index.tsx"),
				a = i("./src/lib/notifications/constants.ts"),
				d = i("./src/reddit/actions/notifications/index.ts"),
				u = i("./src/reddit/controls/Button/index.tsx"),
				l = i("./src/reddit/components/NotificationsPermissionPrompt/index.m.less"),
				f = i.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}
			const b = Object(c.a)(() => {
				const e = Object(r.d)();
				return o.a.createElement("div", {
					className: f.a.container
				}, o.a.createElement("p", {
					className: f.a.text
				}, n.fbt._("Do you want to enable desktop notifications?", null, {
					hk: "2VvV1D"
				})), o.a.createElement("div", {
					className: f.a.controls
				}, o.a.createElement(u.t, {
					priority: u.c.Secondary,
					onClick: () => {
						e(Object(a.m)())
					}
				}, n.fbt._("No", null, {
					hk: "49ARSG"
				})), o.a.createElement(u.t, {
					priority: u.c.Primary,
					onClick: () => {
						e(Object(d.requestNotificationsPermissions)(!1, !0)), e(Object(a.m)())
					}
				}, n.fbt._("Yes", null, {
					hk: "2VPWHX"
				}))))
			});
			t.default = e => o.a.createElement(b, p({}, e, {
				overlayClassName: f.a.overlay,
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
				return f
			})), i.d(t, "l", (function() {
				return b
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
				return y
			})), i.d(t, "o", (function() {
				return k
			})), i.d(t, "h", (function() {
				return x
			})), i.d(t, "g", (function() {
				return w
			}));
			var n = i("./src/reddit/selectors/telemetry.ts"),
				s = i("./src/telemetry/index.ts"),
				o = i("./src/telemetry/models/Event.ts");
			var r;
			! function(e) {
				e.FREQUENT = "frequent", e.LOW = "low", e.OFF = "off"
			}(r || (r = {}));
			const c = e => ({
					...n.p(e),
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
				p = (e, t, i) => ({
					...n.p(e),
					actionInfo: n.d(e, {
						success: t,
						reason: i
					}),
					noun: "push_token"
				}),
				b = e => {
					Object(s.a)({
						...p(e, !0),
						action: o.c.Request,
						source: "notification"
					})
				},
				m = e => {
					Object(s.a)({
						...p(e, !0),
						action: o.c.Register,
						source: "notification"
					})
				},
				g = (e, t) => {
					Object(s.a)({
						...p(e, !1, t),
						action: o.c.Bail,
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
				_ = (e, t) => i => ({
					...n.p(i),
					action: a(e),
					email: {
						type: t
					},
					noun: "email",
					source: "email_app_settings"
				}),
				h = (e, t) => i => ({
					...n.p(i),
					action: a(e),
					notification: {
						type: t
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				j = e => t => ({
					...n.p(t),
					source: "email_app_settings",
					action: a(e),
					noun: "email",
					notification: {
						type: "all"
					}
				}),
				y = (e, t, i) => s => ({
					...n.p(s),
					action: "set_frequency",
					noun: i,
					source: "community_notifications",
					subreddit: {
						id: e,
						name: t.toLowerCase()
					}
				}),
				k = () => e => ({
					...n.p(e),
					action: o.c.View,
					noun: "screen",
					source: "global",
					actionInfo: {
						pageType: "community_alerts"
					}
				}),
				x = () => e => ({
					...n.p(e),
					action: "click",
					noun: "desktop_notification_permissions",
					source: "overlay"
				}),
				w = () => e => ({
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationsPermissionPromptLoader.19625905195cf5b77044.js.map