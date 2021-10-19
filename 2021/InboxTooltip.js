// https://www.redditstatic.com/desktop2x/InboxTooltip.3f879ee3e70e24717182.js
// Retrieved at 10/19/2021, 5:20:10 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["InboxTooltip", "PushNotifications"], {
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
			const u = async e => {
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
					const u = await ((e, t) => {
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
					if (u && !u.ok) return d.FailedResponse;
					const b = null == u ? void 0 : u.body.data.registerWebPushToken;
					return b && !b.ok ? d.FailedGqlReponse : d.Success
				} catch (t) {
					return console.error(t), d.FailedGeneric
				}
			}
		},
		"./src/reddit/actions/notifications/index.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "initializeServiceWorkerChannel", (function() {
				return k
			})), i.d(t, "requestNotificationsPermissions", (function() {
				return w
			})), i.d(t, "subscribeForPNs", (function() {
				return I
			})), i.d(t, "unsubscribeFromPNs", (function() {
				return y
			})), i.d(t, "requestBrowserNotificationPermissionPromptByUser", (function() {
				return P
			})), i.d(t, "subscribeToPermissionsChange", (function() {
				return _
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/lodash/omit.js"),
				o = i.n(s),
				r = i("./src/lib/browser/isIncognito.ts"),
				a = i("./src/lib/notifications/token.ts"),
				c = i("./src/lib/notifications/index.ts"),
				d = i("./src/lib/notifications/constants.ts"),
				u = i("./src/lib/serviceWorker/index.ts"),
				b = i("./src/reddit/actions/chat/toggle.ts"),
				l = i("./src/reddit/actions/modal.ts"),
				f = i("./src/reddit/actions/notifications/utils.ts"),
				p = i("./src/reddit/actions/tabBadging.ts"),
				g = i("./src/reddit/actions/toaster.ts"),
				m = i("./src/reddit/helpers/parseUrl.ts"),
				h = i("./src/reddit/helpers/tabBadging/index.ts"),
				O = i("./src/reddit/helpers/trackers/notifications.ts"),
				j = i("./src/reddit/models/Toast/index.ts"),
				x = i("./src/reddit/selectors/meta.ts"),
				v = i("./src/reddit/selectors/user.ts");
			let S = !1;
			const k = async (e, t) => {
				const i = Object(v.J)(e);
				if (S) return;
				if (S = !0, Object(f.a)(e) !== d.c.NotificationsSupported) return;
				await Object(u.a)();
				navigator.serviceWorker.addEventListener("message", n => {
					const s = n.data,
						r = s.command || s.type;
					if ("registerWithServiceWorker" === r) N(e);
					else if (r === h.a && i) {
						const e = o()(s, ["command"]);
						t(Object(p.f)(e))
					} else if ("navigate.chat" === r) {
						const e = Object(m.a)(s.data.href);
						e && e.pathname && t(Object(b.c)(e.pathname))
					}
				}), N(e)
			}, N = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: O.c(e)
				})
			}, w = (e, t, i = (() => {})) => async (n, s, o) => {
				const a = s(),
					u = Object(x.f)(a);
				if (await Object(r.a)() || u) return;
				await k(a, n);
				O.j(a), Object(c.b)(e, t, () => {
					n(Object(d.o)()), n(Object(d.n)()), O.h(a)
				}, (e, t) => {
					n(Object(d.l)()), n(y(t ? d.a.Denied : d.a.Closed)), e && (t ? O.e(a) : O.f(a))
				}, e => {
					n(Object(d.m)()), n(I()), e && O.d(a)
				}, () => {
					n(Object(d.k)()), i()
				})
			}, I = e => async (t, i, s) => {
				const o = i();
				try {
					switch (await Object(a.b)(s.gqlContext)) {
						case a.a.Success:
							Object(f.b)(d.a.Granted), O.k(o), e && t(Object(g.f)({
								kind: j.b.SuccessCommunity,
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
			}, y = (e, t) => async i => {
				try {
					Object(f.b)(e);
					const s = await Object(u.a)();
					if (s) {
						const e = await s.pushManager.getSubscription();
						e && (e.unsubscribe(), t && i(Object(g.f)({
							kind: j.b.SuccessCommunity,
							text: n.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						})))
					}
				} catch (s) {}
			}, P = e => async (t, i) => {
				const n = i();
				if (Object(f.a)(n) === d.c.NotificationsSupported) switch (Object(c.a)()) {
					case d.a.Default:
					case d.a.Closed:
						t(w(!0, !0));
						break;
					case d.a.Denied:
						t(Object(l.h)(e))
				}
			}, _ = () => async (e, t) => {
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
							e(y(d.a.Denied)), O.e(n);
							break;
						case d.a.Granted:
							e(I()), O.d(n);
							break;
						default:
							e(y(d.a.Default))
					}
				})(s.state)
			}
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return b
			})), i.d(t, "b", (function() {
				return g
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./src/lib/makeActionCreator/index.ts"),
				o = i("./src/reddit/actions/notificationsInbox/index.ts"),
				r = i("./src/reddit/actions/subreddit/constants.ts"),
				a = i("./src/reddit/actions/toaster.ts"),
				c = i("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				d = i("./src/reddit/models/Subreddit/index.ts"),
				u = i("./src/reddit/models/Toast/index.ts");
			const b = Object(s.a)(r.u),
				l = Object(s.a)(r.t),
				f = Object(s.a)(r.s),
				p = e => {
					switch (e) {
						case d.b.OFF:
							return n.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case d.b.FREQUENT:
							return n.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case d.b.LOW:
							return n.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const g = ({
				subredditId: e,
				notificationLevel: t,
				successCallback: i,
				undoCallback: s
			}) => async (r, g, {
				gqlContext: m
			}) => {
				var h, O, j;
				r(l());
				const x = (e => {
						switch (e) {
							case d.b.FREQUENT:
								return {
									isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
								};
							case d.b.LOW:
								return {
									isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
								};
							case d.b.OFF:
							default:
								return {
									isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
								}
						}
					})(t),
					v = await Object(c.b)(m(), e, x);
				if ((null === (O = null === (h = v.error) || void 0 === h ? void 0 : h.fields) || void 0 === O ? void 0 : O.length) || function(e) {
						return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
					}(v.body) && (null === (j = v.body.data.updateSubredditNotificationSettings.errors) || void 0 === j ? void 0 : j.length)) return r(f()), r(Object(a.f)({
					kind: u.b.Error,
					text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
						hk: "4avFFV"
					})
				}));
				v.ok && (r(b({
					subredditAboutInfo: {
						[e]: {
							notificationLevel: t
						}
					}
				})), i && i(), r(s ? Object(a.f)(Object(a.e)(p(t), u.b.Undo, n.fbt._("Undo", null, {
					hk: "46OwLP"
				}), Object(o.i)(e, s))) : Object(a.f)(Object(a.e)(p(t), u.b.SuccessCommunityGreen))))
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
				u = i("./src/reddit/actions/subreddit/notifications.ts"),
				b = i("./src/reddit/components/InboxTooltip/Component.tsx"),
				l = i("./src/reddit/helpers/trackers/inbox.ts"),
				f = i("./src/reddit/hooks/useTracking.ts"),
				p = i("./src/reddit/models/Subreddit/index.ts"),
				g = i("./src/reddit/selectors/appBadges.ts"),
				m = i("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				h = i("./src/reddit/selectors/notificationsInbox.tsx");
			const O = Object(r.c)({
					isPushNotificationsSupported: h.h,
					cursor: h.c,
					hasNextPage: h.d,
					inboxBadgeCount: g.g,
					isDNInboxPromptBannerFirstTimeEnabled: m.a,
					isDNInboxPromptBannerPersistEnabled: m.b,
					isInboxExposureBannerEnabled: m.d,
					isInboxInfiniteScrollEnabled: m.h,
					isInboxPolicyBannerEnabled: m.j,
					isInboxPostEmbedEnabled: m.f,
					isPending: h.e,
					messagesBadgeCount: g.h,
					notifications: e => Object(m.h)(e) ? Object(h.f)(e) : Object(h.g)(e)
				}),
				j = Object(o.b)(O, (e, {
					desktopNotificationsModalId: t
				}) => ({
					blockAwarder: t => e(Object(d.a)(t)),
					clearMessageTabBadgeCount: () => e(Object(a.b)()),
					decreaseSubredditNotifications: (t, i) => e(Object(u.b)({
						subredditId: t,
						notificationLevel: p.b.LOW,
						undoCallback: i
					})),
					disableNotificationUpdates: t => e(Object(d.c)(t)),
					fetchNotifications: t => e(Object(d.d)(t)),
					hideNotification: t => e(Object(d.b)(t)),
					hideSubredditNotifications: (t, i) => e(Object(d.f)(t, i)),
					markAllAsRead: () => e(Object(d.g)()),
					markNotificationAsRead: (t, i) => e(Object(d.h)(t, i)),
					showBrowserNotificationsPermissionSettings: () => e(Object(c.requestBrowserNotificationPermissionPromptByUser)(t)),
					updateInboxActivitySeenState: () => e(Object(d.j)())
				}));
			t.default = j(({
				clearMessageTabBadgeCount: e,
				cursor: t,
				decreaseSubredditNotifications: i,
				disableNotificationUpdates: o,
				fetchNotifications: r,
				hasNextPage: a,
				hideNotification: c,
				hideSubredditNotifications: d,
				hideTooltip: u,
				blockAwarder: p,
				inboxBadgeCount: g,
				isDNInboxPromptBannerFirstTimeEnabled: m,
				isDNInboxPromptBannerPersistEnabled: h,
				isInboxExposureBannerEnabled: O,
				isInboxPolicyBannerEnabled: j,
				isInboxInfiniteScrollEnabled: x,
				isInboxPostEmbedEnabled: v,
				isLoggedIn: S,
				isOpen: k,
				isPending: N,
				isPushNotificationsSupported: w,
				markAllAsRead: I,
				markNotificationAsRead: y,
				messagesBadgeCount: P,
				notifications: _,
				showBrowserNotificationsPermissionSettings: E,
				updateInboxActivitySeenState: B,
				userId: F
			}) => {
				const C = Object(f.a)(),
					[A, R] = Object(n.useState)("");
				return Object(n.useEffect)(() => {
					if (k && !_.length && S) {
						r({
							first: 5
						})
					}
					k && S && (B(), C(Object(l.p)({
						badgeCount: g
					})))
				}, [k]), s.a.createElement(b.b, {
					activeOverflowMenuId: A,
					clearMessageTabBadgeCount: e,
					cursor: t,
					decreaseSubredditNotifications: i,
					disableNotificationUpdates: o,
					fetchNotifications: r,
					hasNextPage: a,
					hideNotification: c,
					hideSubredditNotifications: d,
					hideTooltip: u,
					blockAwarder: p,
					inboxBadgeCount: g,
					isDNInboxPromptBannerFirstTimeEnabled: m && w,
					isDNInboxPromptBannerPersistEnabled: h && w,
					isInboxExposureBannerEnabled: O,
					isInboxPolicyBannerEnabled: j,
					isInboxInfiniteScrollEnabled: x,
					isInboxPostEmbedEnabled: v,
					isLoggedIn: S,
					isPending: N,
					markAllAsRead: I,
					markNotificationAsRead: y,
					messagesBadgeCount: P,
					notifications: _,
					setActiveOverflowMenuId: R,
					showBrowserNotificationsPermissionSettings: E,
					userId: F
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
				return u
			})), i.d(t, "f", (function() {
				return b
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
				return j
			})), i.d(t, "a", (function() {
				return x
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
				u = e => {
					Object(s.a)({
						...r(e),
						action: o.c.Block,
						source: "popup"
					})
				},
				b = e => {
					Object(s.a)({
						...r(e),
						action: o.c.Close,
						source: "popup"
					})
				},
				l = (e, t, i) => ({
					...n.defaults(e),
					actionInfo: n.actionInfo(e, {
						success: t,
						reason: i
					}),
					noun: "push_token"
				}),
				f = e => {
					Object(s.a)({
						...l(e, !0),
						action: o.c.Request,
						source: "notification"
					})
				},
				p = e => {
					Object(s.a)({
						...l(e, !0),
						action: o.c.Register,
						source: "notification"
					})
				},
				g = (e, t) => {
					Object(s.a)({
						...l(e, !1, t),
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
				j = (e, t) => i => ({
					...n.defaults(i),
					action: a(e),
					notification: {
						type: t
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				x = e => t => ({
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InboxTooltip.3f879ee3e70e24717182.js.map