// https://www.redditstatic.com/desktop2x/InboxTooltip.80281f93250dbd2f2015.js
// Retrieved at 1/19/2022, 7:10:09 PM by Reddit Dataminer v1.0.0
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
				return P
			})), i.d(t, "subscribeToPermissionsChange", (function() {
				return F
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
				h = i("./src/reddit/helpers/tabBadging/index.ts"),
				O = i("./src/reddit/helpers/trackers/notifications.ts"),
				j = i("./src/reddit/models/Toast/index.ts"),
				x = i("./src/reddit/constants/experiments.ts"),
				S = i("./src/reddit/helpers/chooseVariant/index.ts");
			var v = i("./src/reddit/selectors/meta.ts"),
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
					else if (r === h.a && i) {
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
					v2EventBoilerPlate: O.c(e)
				})
			}, _ = (e, t, i = (() => {})) => async (n, s, o) => {
				const a = s(),
					u = Object(v.f)(a),
					l = (e => Object(S.c)(e, {
						experimentName: x.Gb,
						experimentEligibilitySelector: S.a
					}) === x.Wc)(a);
				if (await Object(r.a)() || u) return;
				await N(a, n);
				O.j(a), await Object(c.b)(e, t, () => {
					l || n(Object(d.o)()), n(Object(d.n)()), O.h(a)
				}, (e, t) => {
					n(Object(d.l)()), n(E(t ? d.a.Denied : d.a.Closed)), e && (t ? O.e(a) : O.f(a))
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
			}, P = e => async (t, i) => {
				const n = i();
				if (Object(f.a)(n) === d.c.NotificationsSupported) switch (Object(c.a)()) {
					case d.a.Default:
					case d.a.Closed:
						await t(_(!0, !0));
						break;
					case d.a.Denied:
						t(Object(b.h)(e))
				}
			}, F = () => async (e, t) => {
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
							e(E(d.a.Denied)), O.e(n);
							break;
						case d.a.Granted:
							e(I()), O.d(n);
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
				return l
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
			const l = Object(s.a)(r.u),
				b = Object(s.a)(r.t),
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
				r(b());
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
					S = await Object(c.b)(m(), e, x);
				if ((null === (O = null === (h = S.error) || void 0 === h ? void 0 : h.fields) || void 0 === O ? void 0 : O.length) || function(e) {
						return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
					}(S.body) && (null === (j = S.body.data.updateSubredditNotificationSettings.errors) || void 0 === j ? void 0 : j.length)) return r(f()), r(Object(a.f)({
					kind: u.b.Error,
					text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
						hk: "4avFFV"
					})
				}));
				S.ok && (r(l({
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
				l = i("./src/reddit/components/InboxTooltip/Component.tsx"),
				b = i("./src/reddit/helpers/trackers/inbox.ts"),
				f = i("./src/reddit/hooks/useTracking.ts"),
				p = i("./src/reddit/models/Subreddit/index.ts"),
				g = i("./src/reddit/selectors/appBadges.ts"),
				m = i("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				h = i("./src/reddit/selectors/experiments/wrappedReddit.ts"),
				O = i("./src/reddit/selectors/notificationsInbox.tsx");
			const j = Object(r.c)({
					isPushNotificationsSupported: O.h,
					cursor: O.c,
					hasNextPage: O.d,
					inboxBadgeCount: g.g,
					isWrappedRedditBannerEnabled: h.a,
					isInboxInfiniteScrollEnabled: m.c,
					isInboxPolicyBannerEnabled: m.e,
					isInboxPostEmbedEnabled: m.a,
					isPending: O.e,
					messagesBadgeCount: g.h,
					notifications: e => Object(m.c)(e) ? Object(O.f)(e) : Object(O.g)(e)
				}),
				x = Object(o.b)(j, (e, {
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
			t.default = x(({
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
				isInboxInfiniteScrollEnabled: h,
				isInboxPostEmbedEnabled: O,
				isWrappedRedditBannerEnabled: j,
				isLoggedIn: x,
				isOpen: S,
				isPending: v,
				isPushNotificationsSupported: k,
				markAllAsRead: w,
				markNotificationAsRead: N,
				messagesBadgeCount: y,
				notifications: _,
				showBrowserNotificationsPermissionSettings: I,
				updateInboxActivitySeenState: E,
				userId: P
			}) => {
				const F = Object(f.a)(),
					[B, C] = Object(n.useState)("");
				return Object(n.useEffect)(() => {
					if (S && !_.length && x) {
						r({
							first: 5
						})
					}
					S && x && (E(), F(Object(b.q)({
						badgeCount: g
					})))
				}, [S]), s.a.createElement(l.b, {
					activeOverflowMenuId: B,
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
					isInboxInfiniteScrollEnabled: h,
					isInboxPostEmbedEnabled: O,
					isWrappedRedditBannerEnabled: j,
					isLoggedIn: x,
					isPending: v,
					markAllAsRead: w,
					markNotificationAsRead: N,
					messagesBadgeCount: y,
					notifications: _,
					setActiveOverflowMenuId: C,
					showBrowserNotificationsPermissionSettings: I,
					userId: P
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
				return j
			})), i.d(t, "a", (function() {
				return x
			}));
			var n = i("./src/reddit/selectors/telemetry.ts"),
				s = i("./src/telemetry/index.ts"),
				o = i("./src/telemetry/models/Event.ts");
			const r = e => ({
					...n.o(e),
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
				l = e => {
					Object(s.a)({
						...r(e),
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
					...n.o(e),
					noun: "push_notification"
				}),
				h = e => ({
					...m(e),
					notification: n.E(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				O = (e, t) => i => ({
					...n.o(i),
					action: a(e),
					email: {
						type: t
					},
					noun: "email",
					source: "email_app_settings"
				}),
				j = (e, t) => i => ({
					...n.o(i),
					action: a(e),
					notification: {
						type: t
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				x = e => t => ({
					...n.o(t),
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InboxTooltip.80281f93250dbd2f2015.js.map