// https://www.redditstatic.com/desktop2x/InboxTooltip.33ecde1bcf7ea3bbfd46.js
// Retrieved at 8/30/2021, 12:20:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["InboxTooltip", "PushNotifications"], {
		"./src/lib/notifications/token.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return d
			})), i.d(t, "b", (function() {
				return l
			}));
			var n = i("./src/config.ts"),
				s = i("./src/redditGQL/operations/RegisterWebPushToken.json"),
				o = i("./src/lib/makeGqlRequest/index.ts"),
				r = i("./src/lib/serviceWorker/index.ts"),
				a = i("./src/lib/timezone/index.ts"),
				c = e => {
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
			const l = async e => {
				try {
					const t = await Object(r.a)();
					if (!t) return d.FailedNoServiceWorker;
					let i = await t.pushManager.getSubscription();
					if (!i) {
						const e = {
							userVisibleOnly: !0,
							applicationServerKey: c(n.a.pushNotificationApplicationServerKey)
						};
						i = await t.pushManager.subscribe(e)
					}
					if (!i) return d.FailedNoSubscription;
					const l = await ((e, t) => {
						const i = {
							pushToken: JSON.stringify(t),
							timezoneName: Object(a.b)() || a.a,
							timestamp: (new Date).toISOString(),
							language: "en_us"
						};
						return Object(o.a)(e(), {
							...s,
							variables: i
						})
					})(e, i);
					if (l && !l.ok) return d.FailedResponse;
					const u = null == l ? void 0 : l.body.data.registerWebPushToken;
					return u && !u.ok ? d.FailedGqlReponse : d.Success
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
				return I
			})), i.d(t, "subscribeForPNs", (function() {
				return _
			})), i.d(t, "unsubscribeFromPNs", (function() {
				return w
			})), i.d(t, "requestBrowserNotificationPermissionByUser", (function() {
				return B
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/lodash/omit.js"),
				o = i.n(s),
				r = i("./src/lib/browser/isIncognito.ts"),
				a = i("./src/lib/notifications/token.ts"),
				c = i("./src/lib/notifications/index.ts"),
				d = i("./src/lib/notifications/constants.ts"),
				l = i("./src/lib/serviceWorker/index.ts"),
				u = i("./src/reddit/actions/chat/toggle.ts"),
				b = i("./src/reddit/actions/modal.ts"),
				f = i("./src/reddit/actions/notifications/utils.ts"),
				p = i("./src/reddit/actions/tabBadging.ts"),
				g = i("./src/reddit/actions/toaster.ts"),
				m = i("./src/reddit/helpers/parseUrl.ts"),
				h = i("./src/reddit/helpers/tabBadging/index.ts"),
				O = i("./src/reddit/helpers/trackers/notifications.ts"),
				x = i("./src/reddit/models/Toast/index.ts"),
				j = i("./src/reddit/selectors/meta.ts"),
				N = i("./src/reddit/selectors/user.ts");
			let k = !1;
			const S = async (e, t) => {
				const i = Object(N.J)(e);
				if (k) return;
				if (k = !0, Object(f.a)(e) !== d.c.NotificationsSupported) return;
				await Object(l.a)();
				navigator.serviceWorker.addEventListener("message", n => {
					const s = n.data,
						r = s.command || s.type;
					if ("registerWithServiceWorker" === r) v(e);
					else if (r === h.a && i) {
						const e = o()(s, ["command"]);
						t(Object(p.f)(e))
					} else if ("navigate.chat" === r) {
						const e = Object(m.a)(s.data.href);
						e && e.pathname && t(Object(u.c)(e.pathname))
					}
				}), v(e)
			}, v = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: O.c(e)
				})
			}, I = (e, t, i = (() => {})) => async (n, s, o) => {
				const a = s(),
					l = Object(j.f)(a);
				if (await Object(r.a)() || l) return;
				await S(a, n);
				O.j(a), Object(c.b)(e, t, () => {
					n(Object(d.o)()), n(Object(d.n)()), O.h(a)
				}, (e, t) => {
					n(Object(d.l)()), n(w(t ? d.a.Denied : d.a.Closed)), e && (t ? O.e(a) : O.f(a))
				}, e => {
					n(Object(d.m)()), n(_()), e && O.d(a)
				}, () => {
					n(Object(d.k)()), i()
				})
			}, _ = e => async (t, i, s) => {
				const o = i();
				try {
					switch (await Object(a.b)(s.gqlContext)) {
						case a.a.Success:
							Object(f.b)(d.a.Granted), O.k(o), e && t(Object(g.f)({
								kind: x.b.SuccessCommunity,
								text: n.fbt._("Changes saved", null, {
									hk: "wGH5U"
								})
							}));
							break;
						case a.a.FailedResponse:
							O.i(o, "registration_failed_generally");
							break;
						case a.a.FailedGqlReponse:
							O.i(o, "registration_failed_in_gql")
					}
				} catch (r) {
					O.i(o, "registration_failed_uncaught_exception"), console.error(r)
				}
			}, w = (e, t) => async i => {
				try {
					Object(f.b)(e);
					const s = await Object(l.a)();
					if (s) {
						const e = await s.pushManager.getSubscription();
						e && (e.unsubscribe(), t && i(Object(g.f)({
							kind: x.b.SuccessCommunity,
							text: n.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						})))
					}
				} catch (s) {}
			}, B = e => async (t, i) => {
				const n = i();
				if (Object(f.a)(n) === d.c.NotificationsSupported) switch (Object(c.a)()) {
					case d.a.Default:
					case d.a.Closed:
						t(I(!0, !0));
						break;
					case d.a.Denied:
						t(Object(b.h)(e))
				}
			}
		},
		"./src/reddit/components/InboxTooltip/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t);
			var n = i("./node_modules/react/index.js"),
				s = i.n(n),
				o = i("./node_modules/react-redux/es/index.js"),
				r = i("./node_modules/reselect/es/index.js"),
				a = i("./src/reddit/actions/appBadgeIndicators/index.ts"),
				c = i("./src/reddit/actions/notifications/index.ts"),
				d = i("./src/reddit/actions/notificationsInbox/index.ts"),
				l = i("./src/reddit/components/InboxTooltip/Component.tsx"),
				u = i("./src/reddit/helpers/trackers/inbox.ts"),
				b = i("./src/reddit/hooks/useTracking.ts"),
				f = i("./src/reddit/selectors/appBadges.ts"),
				p = i("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				g = i("./src/reddit/selectors/notificationsInbox.tsx");
			const m = Object(r.c)({
					isPushNotificationsSupported: g.h,
					cursor: g.c,
					hasNextPage: g.d,
					inboxBadgeCount: f.g,
					isDNInboxPromptBannerFirstTimeEnabled: p.a,
					isDNInboxPromptBannerPersistEnabled: p.b,
					isInboxExposureBannerEnabled: p.d,
					isInboxInfiniteScrollEnabled: p.h,
					isInboxPolicyBannerEnabled: p.i,
					isInboxPostEmbedEnabled: p.f,
					isPending: g.e,
					messagesBadgeCount: f.h,
					notifications: e => Object(p.h)(e) ? Object(g.f)(e) : Object(g.g)(e)
				}),
				h = Object(o.b)(m, (e, {
					desktopNotificationsModalId: t
				}) => ({
					blockAwarder: t => e(Object(d.a)(t)),
					clearMessageTabBadgeCount: () => e(Object(a.b)()),
					disableNotificationUpdates: t => e(Object(d.c)(t)),
					fetchNotifications: t => e(Object(d.d)(t)),
					hideNotification: t => e(Object(d.b)(t)),
					hideSubredditNotifications: (t, i) => e(Object(d.f)(t, i)),
					markAllAsRead: () => e(Object(d.g)()),
					markNotificationAsRead: (t, i) => e(Object(d.h)(t, i)),
					showBrowserNotificationsPermissionSettings: () => e(Object(c.requestBrowserNotificationPermissionByUser)(t)),
					updateInboxActivitySeenState: () => e(Object(d.i)())
				}));
			t.default = h(({
				clearMessageTabBadgeCount: e,
				cursor: t,
				disableNotificationUpdates: i,
				fetchNotifications: o,
				hasNextPage: r,
				hideNotification: a,
				hideSubredditNotifications: c,
				hideTooltip: d,
				blockAwarder: f,
				inboxBadgeCount: p,
				isDNInboxPromptBannerFirstTimeEnabled: g,
				isDNInboxPromptBannerPersistEnabled: m,
				isInboxExposureBannerEnabled: h,
				isInboxPolicyBannerEnabled: O,
				isInboxInfiniteScrollEnabled: x,
				isInboxPostEmbedEnabled: j,
				isOpen: N,
				isPending: k,
				isPushNotificationsSupported: S,
				markAllAsRead: v,
				markNotificationAsRead: I,
				messagesBadgeCount: _,
				notifications: w,
				showBrowserNotificationsPermissionSettings: B,
				updateInboxActivitySeenState: P,
				userId: E
			}) => {
				const y = Object(b.a)(),
					[A, C] = Object(n.useState)("");
				return Object(n.useEffect)(() => {
					if (N && !w.length) {
						o({
							first: 5
						})
					}
					N && (P(), y(Object(u.p)({
						badgeCount: p
					})))
				}, [N]), s.a.createElement(l.b, {
					activeOverflowMenuId: A,
					clearMessageTabBadgeCount: e,
					cursor: t,
					disableNotificationUpdates: i,
					fetchNotifications: o,
					hasNextPage: r,
					hideNotification: a,
					hideSubredditNotifications: c,
					hideTooltip: d,
					blockAwarder: f,
					inboxBadgeCount: p,
					isDNInboxPromptBannerFirstTimeEnabled: g && S,
					isDNInboxPromptBannerPersistEnabled: m && S,
					isInboxExposureBannerEnabled: h,
					isInboxPolicyBannerEnabled: O,
					isInboxInfiniteScrollEnabled: x,
					isInboxPostEmbedEnabled: j,
					isPending: k,
					markAllAsRead: v,
					markNotificationAsRead: I,
					messagesBadgeCount: _,
					notifications: w,
					setActiveOverflowMenuId: C,
					showBrowserNotificationsPermissionSettings: B,
					userId: E
				})
			})
		},
		"./src/reddit/helpers/trackers/notifications.ts": function(e, t, i) {
			"use strict";
			i.d(t, "h", (function() {
				return c
			})), i.d(t, "d", (function() {
				return d
			})), i.d(t, "e", (function() {
				return l
			})), i.d(t, "f", (function() {
				return u
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
				return x
			})), i.d(t, "a", (function() {
				return j
			}));
			var n = i("./src/reddit/selectors/telemetry.ts"),
				s = i("./src/telemetry/index.ts"),
				o = i("./src/telemetry/models/Event.ts");
			const r = e => ({
					...n.defaults(e),
					noun: "desktop_notification_permissions"
				}),
				a = e => e ? "enable" : "disable",
				c = e => {
					Object(s.a)({
						...r(e),
						action: o.c.View,
						source: "popup"
					})
				},
				d = e => {
					Object(s.a)({
						...r(e),
						action: o.c.Allow,
						source: "popup"
					})
				},
				l = e => {
					Object(s.a)({
						...r(e),
						action: o.c.Block,
						source: "popup"
					})
				},
				u = e => {
					Object(s.a)({
						...r(e),
						action: o.c.Close,
						source: "popup"
					})
				},
				b = (e, t, i) => ({
					...n.defaults(e),
					actionInfo: n.actionInfo(e, {
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
				m = e => ({
					...n.defaults(e),
					noun: "push_notification"
				}),
				h = e => ({
					...m(e),
					notification: n.notification(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				O = (e, t) => i => ({
					...n.defaults(i),
					action: a(e),
					email: {
						type: t
					},
					noun: "email",
					source: "email_app_settings"
				}),
				x = (e, t) => i => ({
					...n.defaults(i),
					action: a(e),
					notification: {
						type: t
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				j = e => t => ({
					...n.defaults(t),
					source: "email_app_settings",
					action: a(e),
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InboxTooltip.33ecde1bcf7ea3bbfd46.js.map