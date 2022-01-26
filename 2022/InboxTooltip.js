// https://www.redditstatic.com/desktop2x/InboxTooltip.3b70463ce06043e39da4.js
// Retrieved at 1/26/2022, 6:40:04 PM by Reddit Dataminer v1.0.0
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
				return N
			})), i.d(t, "requestNotificationsPermissions", (function() {
				return _
			})), i.d(t, "subscribeForPNs", (function() {
				return I
			})), i.d(t, "unsubscribeFromPNs", (function() {
				return E
			})), i.d(t, "requestBrowserNotificationPermissionPromptByUser", (function() {
				return F
			})), i.d(t, "subscribeToPermissionsChange", (function() {
				return P
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/lodash/omit.js"),
				o = i.n(s),
				r = i("./src/lib/browser/isIncognito.ts"),
				a = i("./src/lib/notifications/token.ts"),
				c = i("./src/lib/notifications/index.ts"),
				d = i("./src/lib/notifications/constants.ts"),
				u = i("./src/lib/serviceWorker/index.ts"),
				l = i("./src/reddit/actions/chat/toggle.ts"),
				b = i("./src/reddit/actions/modal.ts"),
				f = i("./src/reddit/actions/notifications/utils.ts"),
				p = i("./src/reddit/actions/tabBadging.ts"),
				g = i("./src/reddit/actions/toaster.ts"),
				m = i("./src/reddit/helpers/parseUrl.ts"),
				O = i("./src/reddit/helpers/tabBadging/index.ts"),
				h = i("./src/reddit/helpers/trackers/notifications.ts"),
				j = i("./src/reddit/models/Toast/index.ts"),
				v = i("./src/reddit/constants/experiments.ts"),
				x = i("./src/reddit/helpers/chooseVariant/index.ts");
			var S = i("./src/reddit/selectors/meta.ts"),
				k = i("./src/reddit/selectors/user.ts");
			let w = !1;
			const N = async (e, t) => {
				const i = Object(k.I)(e);
				if (w) return;
				if (w = !0, Object(f.a)(e) !== d.c.NotificationsSupported) return;
				await Object(u.a)();
				navigator.serviceWorker.addEventListener("message", n => {
					const s = n.data,
						r = s.command || s.type;
					if ("registerWithServiceWorker" === r) y(e);
					else if (r === O.a && i) {
						const e = o()(s, ["command"]);
						t(Object(p.f)(e))
					} else if ("navigate.chat" === r) {
						const e = Object(m.a)(s.data.href);
						e && e.pathname && t(Object(l.c)(e.pathname))
					}
				}), y(e)
			}, y = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: h.c(e)
				})
			}, _ = (e, t, i = (() => {})) => async (n, s, o) => {
				const a = s(),
					u = Object(S.f)(a),
					l = (e => Object(x.c)(e, {
						experimentName: v.Fb,
						experimentEligibilitySelector: x.a
					}) === v.Xc)(a);
				if (await Object(r.a)() || u) return;
				await N(a, n);
				h.j(a), await Object(c.b)(e, t, () => {
					l || n(Object(d.o)()), n(Object(d.n)()), h.h(a)
				}, (e, t) => {
					n(Object(d.l)()), n(E(t ? d.a.Denied : d.a.Closed)), e && (t ? h.e(a) : h.f(a))
				}, e => {
					n(Object(d.m)()), n(I()), e && h.d(a)
				}, () => {
					n(Object(d.k)()), i()
				})
			}, I = e => async (t, i, s) => {
				const o = i();
				try {
					switch (await Object(a.b)(s.gqlContext)) {
						case a.a.Success:
							Object(f.b)(d.a.Granted), h.k(o), e && t(Object(g.f)({
								kind: j.b.SuccessCommunity,
								text: n.fbt._("Changes saved", null, {
									hk: "wGH5U"
								})
							}));
							break;
						case a.a.FailedResponse:
							h.i(o, "registration_failed_generally");
							break;
						case a.a.FailedGqlReponse:
							h.i(o, "registration_failed_in_gql")
					}
				} catch (r) {
					h.i(o, "registration_failed_uncaught_exception"), console.error(r)
				}
			}, E = (e, t) => async i => {
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
			}, F = e => async (t, i) => {
				const n = i();
				if (Object(f.a)(n) === d.c.NotificationsSupported) switch (Object(c.a)()) {
					case d.a.Default:
					case d.a.Closed:
						await t(_(!0, !0));
						break;
					case d.a.Denied:
						t(Object(b.h)(e))
				}
			}, P = () => async (e, t) => {
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
							e(E(d.a.Denied)), h.e(n);
							break;
						case d.a.Granted:
							e(I()), h.d(n);
							break;
						default:
							e(E(d.a.Default))
					}
				})(s.state)
			}
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return b
			})), i.d(t, "b", (function() {
				return m
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./src/lib/makeActionCreator/index.ts"),
				o = i("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				r = i("./src/reddit/actions/notificationsInbox/index.ts"),
				a = i("./src/reddit/actions/subreddit/constants.ts"),
				c = i("./src/reddit/actions/toaster.ts"),
				d = i("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				u = i("./src/reddit/models/Subreddit/index.ts"),
				l = i("./src/reddit/models/Toast/index.ts");
			const b = Object(s.a)(a.u),
				f = Object(s.a)(a.t),
				p = Object(s.a)(a.s),
				g = e => {
					switch (e) {
						case u.b.OFF:
							return n.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case u.b.FREQUENT:
							return n.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case u.b.LOW:
							return n.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const m = ({
				subredditId: e,
				notificationLevel: t,
				successCallback: i,
				undoCallback: s
			}) => async (a, m, {
				gqlContext: O
			}) => {
				var h, j, v;
				a(f());
				const x = (e => {
						switch (e) {
							case u.b.FREQUENT:
								return {
									isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
								};
							case u.b.LOW:
								return {
									isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
								};
							case u.b.OFF:
							default:
								return {
									isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
								}
						}
					})(t),
					S = await Object(d.b)(O(), e, x);
				if ((null === (j = null === (h = S.error) || void 0 === h ? void 0 : h.fields) || void 0 === j ? void 0 : j.length) || function(e) {
						return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
					}(S.body) && (null === (v = S.body.data.updateSubredditNotificationSettings.errors) || void 0 === v ? void 0 : v.length)) return a(p()), a(Object(c.f)({
					kind: l.b.Error,
					text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
						hk: "4avFFV"
					})
				}));
				S.ok && (a(Object(o.c)({
					subredditId: e,
					notificationLevel: t
				})), a(b({
					subredditAboutInfo: {
						[e]: {
							notificationLevel: t
						}
					}
				})), i && i(), a(s ? Object(c.f)(Object(c.e)(g(t), l.b.Undo, n.fbt._("Undo", null, {
					hk: "46OwLP"
				}), Object(r.i)(e, s))) : Object(c.f)(Object(c.e)(g(t), l.b.SuccessCommunityGreen))))
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
				l = i("./src/reddit/components/InboxTooltip/Component.tsx"),
				b = i("./src/reddit/helpers/trackers/inbox.ts"),
				f = i("./src/reddit/hooks/useTracking.ts"),
				p = i("./src/reddit/models/Subreddit/index.ts"),
				g = i("./src/reddit/selectors/appBadges.ts"),
				m = i("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				O = i("./src/reddit/selectors/experiments/wrappedReddit.ts"),
				h = i("./src/reddit/selectors/notificationsInbox.tsx");
			const j = Object(r.c)({
					isPushNotificationsSupported: h.h,
					cursor: h.c,
					hasNextPage: h.d,
					inboxBadgeCount: g.g,
					isWrappedRedditBannerEnabled: O.a,
					isInboxInfiniteScrollEnabled: m.c,
					isInboxPolicyBannerEnabled: m.e,
					isInboxPostEmbedEnabled: m.a,
					isPending: h.e,
					messagesBadgeCount: g.h,
					notifications: e => Object(m.c)(e) ? Object(h.f)(e) : Object(h.g)(e)
				}),
				v = Object(o.b)(j, (e, {
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
			t.default = v(({
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
				isInboxPolicyBannerEnabled: m,
				isInboxInfiniteScrollEnabled: O,
				isInboxPostEmbedEnabled: h,
				isWrappedRedditBannerEnabled: j,
				isLoggedIn: v,
				isOpen: x,
				isPending: S,
				isPushNotificationsSupported: k,
				markAllAsRead: w,
				markNotificationAsRead: N,
				messagesBadgeCount: y,
				notifications: _,
				showBrowserNotificationsPermissionSettings: I,
				updateInboxActivitySeenState: E,
				userId: F
			}) => {
				const P = Object(f.a)(),
					[C, B] = Object(n.useState)("");
				return Object(n.useEffect)(() => {
					if (x && !_.length && v) {
						r({
							first: 5
						})
					}
					x && v && (E(), P(Object(b.q)({
						badgeCount: g
					})))
				}, [x]), s.a.createElement(l.b, {
					activeOverflowMenuId: C,
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
					isPushNotificationsSupported: k,
					isInboxPolicyBannerEnabled: m,
					isInboxInfiniteScrollEnabled: O,
					isInboxPostEmbedEnabled: h,
					isWrappedRedditBannerEnabled: j,
					isLoggedIn: v,
					isPending: S,
					markAllAsRead: w,
					markNotificationAsRead: N,
					messagesBadgeCount: y,
					notifications: _,
					setActiveOverflowMenuId: B,
					showBrowserNotificationsPermissionSettings: I,
					userId: F
				})
			})
		},
		"./src/reddit/helpers/trackers/notifications.ts": function(e, t, i) {
			"use strict";
			i.d(t, "h", (function() {
				return d
			})), i.d(t, "d", (function() {
				return u
			})), i.d(t, "e", (function() {
				return l
			})), i.d(t, "f", (function() {
				return b
			})), i.d(t, "j", (function() {
				return p
			})), i.d(t, "k", (function() {
				return g
			})), i.d(t, "i", (function() {
				return m
			})), i.d(t, "c", (function() {
				return h
			})), i.d(t, "b", (function() {
				return j
			})), i.d(t, "g", (function() {
				return v
			})), i.d(t, "a", (function() {
				return x
			})), i.d(t, "l", (function() {
				return S
			})), i.d(t, "m", (function() {
				return k
			}));
			var n = i("./src/reddit/selectors/telemetry.ts"),
				s = i("./src/telemetry/index.ts"),
				o = i("./src/telemetry/models/Event.ts");
			var r;
			! function(e) {
				e.FREQUENT = "frequent", e.LOW = "low", e.OFF = "off"
			}(r || (r = {}));
			const a = e => ({
					...n.m(e),
					noun: "desktop_notification_permissions"
				}),
				c = e => e ? "enable" : "disable",
				d = e => {
					Object(s.a)({
						...a(e),
						action: o.c.View,
						source: "popup"
					})
				},
				u = e => {
					Object(s.a)({
						...a(e),
						action: o.c.Allow,
						source: "popup"
					})
				},
				l = e => {
					Object(s.a)({
						...a(e),
						action: o.c.Block,
						source: "popup"
					})
				},
				b = e => {
					Object(s.a)({
						...a(e),
						action: o.c.Close,
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
						action: o.c.Request,
						source: "notification"
					})
				},
				g = e => {
					Object(s.a)({
						...f(e, !0),
						action: o.c.Register,
						source: "notification"
					})
				},
				m = (e, t) => {
					Object(s.a)({
						...f(e, !1, t),
						action: o.c.Bail,
						source: "notification"
					})
				},
				O = e => ({
					...n.m(e),
					noun: "push_notification"
				}),
				h = e => ({
					...O(e),
					notification: n.C(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				j = (e, t) => i => ({
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
				x = e => t => ({
					...n.m(t),
					source: "email_app_settings",
					action: c(e),
					noun: "email",
					notification: {
						type: "all"
					}
				}),
				S = (e, t, i) => s => ({
					...n.m(s),
					action: "set_frequency",
					noun: i,
					source: "community_notifications",
					subreddit: {
						id: e,
						name: t.toLowerCase()
					}
				}),
				k = () => e => ({
					...n.m(e),
					action: o.c.View,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InboxTooltip.3b70463ce06043e39da4.js.map