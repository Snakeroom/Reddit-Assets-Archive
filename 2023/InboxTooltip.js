// https://www.redditstatic.com/desktop2x/InboxTooltip.3fba1d062338ca8648ef.js
// Retrieved at 1/4/2023, 1:50:04 PM by Reddit Dataminer v1.0.0
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
				o = i("./src/redditGQL/operations/RegisterWebPushToken.json"),
				s = i("./src/lib/makeGqlRequest/index.ts"),
				r = i("./src/lib/serviceWorker/index.ts"),
				c = i("./src/lib/timezone/index.ts"),
				a = e => {
					const t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"),
						i = window.atob(t),
						n = new Uint8Array(i.length);
					for (let o = 0; o < i.length; ++o) n[o] = i.charCodeAt(o);
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
						return Object(s.a)(e(), {
							...o,
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
				return C
			})), i.d(t, "requestNotificationsPermissions", (function() {
				return A
			})), i.d(t, "subscribeForPNs", (function() {
				return R
			})), i.d(t, "unsubscribeFromPNs", (function() {
				return L
			})), i.d(t, "requestBrowserNotificationPermissionPromptByUser", (function() {
				return U
			})), i.d(t, "subscribeToPermissionsChange", (function() {
				return T
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				o = i("./node_modules/lodash/omit.js"),
				s = i.n(o),
				r = i("./src/lib/browser/isIncognito.ts"),
				c = i("./src/lib/notifications/token.ts"),
				a = i("./src/lib/notifications/index.ts"),
				d = i("./src/lib/notifications/constants.ts"),
				u = i("./src/lib/serviceWorker/index.ts"),
				l = i("./src/reddit/actions/chat/toggle.ts"),
				b = i("./src/reddit/actions/modal.ts"),
				f = i("./src/reddit/actions/notifications/utils.ts"),
				p = i("./src/reddit/actions/tabBadging.ts"),
				g = i("./src/reddit/actions/toaster.ts"),
				m = i("./src/reddit/constants/modals.ts"),
				O = i("./src/reddit/helpers/parseUrl.ts"),
				h = i("./src/reddit/helpers/tabBadging/index.ts"),
				j = i("./src/reddit/helpers/trackers/notifications.ts"),
				v = i("./src/reddit/models/Toast/index.ts"),
				x = i("./src/reddit/selectors/activeModal.ts"),
				S = i("./src/reddit/selectors/activeModalId.ts"),
				k = i("./src/reddit/constants/experiments.ts"),
				N = i("./src/reddit/helpers/chooseVariant/index.ts"),
				w = i("./src/reddit/selectors/user.ts");
			const y = e => Object(N.c)(e, {
				experimentEligibilitySelector: w.S,
				experimentName: k.vb
			}) === k.Od;
			var _ = i("./src/reddit/selectors/experiments/delayDnPermission.ts"),
				I = i("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");
			const P = e => Object(N.c)(e, {
				experimentName: k.cc,
				experimentEligibilitySelector: N.a
			}) === k.Od;
			var E = i("./src/reddit/selectors/meta.ts");
			let F = !1;
			const C = async (e, t) => {
				const i = Object(w.R)(e);
				if (F) return;
				if (F = !0, Object(f.a)(e) !== d.d.NotificationsSupported) return;
				await Object(u.a)();
				navigator.serviceWorker.addEventListener("message", n => {
					const o = n.data,
						r = o.command || o.type;
					if ("registerWithServiceWorker" === r) B(e);
					else if (r === h.a && i) {
						const e = s()(o, ["command"]);
						t(Object(p.f)(e))
					} else if ("navigate.chat" === r) {
						const e = Object(O.a)(o.data.href);
						e && e.pathname && t(Object(l.c)(e.pathname))
					}
				}), B(e)
			}, B = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: j.c(e)
				})
			}, A = function(e, t) {
				let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
				return async (n, o, s) => {
					const c = o(),
						u = Object(E.f)(c),
						l = P(c),
						b = !!Object(S.a)(c),
						f = Object(_.a)(c),
						p = Object(I.e)(c),
						g = Object(x.c)(m.a.NSFW_BLOCKING_MODAL_V2)(c),
						O = y(c);
					if (p || g) return;
					if (await Object(r.a)() || u) return;
					await C(c, n);
					j.l(c), await Object(a.b)(e, t, () => {
						l || f || b || n(Object(d.s)()), n(Object(d.q)()), j.j(c)
					}, (e, t) => {
						n(Object(d.o)()), n(L(t ? d.a.Denied : d.a.Closed)), e && (t ? j.e(c) : j.f(c)), i()
					}, e => {
						n(Object(d.p)()), n(R()), e && j.d(c), i()
					}, () => {
						n(Object(d.n)()), i()
					}, () => {
						n(Object(d.r)())
					}, O)
				}
			}, R = e => async (t, i, o) => {
				const s = i();
				try {
					switch (await Object(c.b)(o.gqlContext)) {
						case c.a.Success:
							Object(f.b)(d.a.Granted), j.m(s), e && t(Object(g.f)({
								kind: v.b.SuccessCommunity,
								text: n.fbt._("Changes saved", null, {
									hk: "wGH5U"
								})
							}));
							break;
						case c.a.FailedResponse:
							j.k(s, "registration_failed_generally");
							break;
						case c.a.FailedGqlReponse:
							j.k(s, "registration_failed_in_gql")
					}
				} catch (r) {
					j.k(s, "registration_failed_uncaught_exception"), console.error(r)
				}
			}, L = (e, t) => async i => {
				try {
					Object(f.b)(e);
					const o = await Object(u.a)();
					if (o) {
						const e = await o.pushManager.getSubscription();
						e && (e.unsubscribe(), t && i(Object(g.f)({
							kind: v.b.SuccessCommunity,
							text: n.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						})))
					}
				} catch (o) {}
			}, U = e => async (t, i) => {
				const n = i();
				if (Object(f.a)(n) === d.d.NotificationsSupported) switch (Object(a.a)()) {
					case d.a.Default:
					case d.a.Closed:
						await t(A(!0, !0));
						break;
					case d.a.Denied:
						t(Object(b.h)(e))
				}
			}, T = () => async (e, t) => {
				var i;
				if (!(null === (i = null === navigator || void 0 === navigator ? void 0 : navigator.permissions) || void 0 === i ? void 0 : i.query)) return;
				const n = t();
				if (Object(f.a)(n) !== d.d.NotificationsSupported) return;
				const o = await navigator.permissions.query({
					name: "notifications"
				});
				o.onchange = () => (t => {
					switch (t) {
						case d.a.Denied:
							e(L(d.a.Denied)), j.e(n);
							break;
						case d.a.Granted:
							e(R()), j.d(n);
							break;
						default:
							e(L(d.a.Default))
					}
				})(o.state)
			}
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return b
			})), i.d(t, "a", (function() {
				return g
			})), i.d(t, "b", (function() {
				return m
			})), i.d(t, "d", (function() {
				return O
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				o = i("./src/lib/makeActionCreator/index.ts"),
				s = i("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				r = i("./src/reddit/actions/notificationsInbox/index.ts"),
				c = i("./src/reddit/actions/subreddit/constants.ts"),
				a = i("./src/reddit/actions/toaster.ts"),
				d = i("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				u = i("./src/reddit/models/Subreddit/index.ts"),
				l = i("./src/reddit/models/Toast/index.ts");
			const b = Object(o.a)(c.z),
				f = Object(o.a)(c.y),
				p = Object(o.a)(c.x),
				g = e => {
					switch (e) {
						case u.c.FREQUENT:
							return {
								isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
							};
						case u.c.LOW:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
							};
						case u.c.OFF:
						default:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
							}
					}
				},
				m = e => {
					switch (e) {
						case u.c.OFF:
							return n.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case u.c.FREQUENT:
							return n.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case u.c.LOW:
							return n.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const O = e => {
				let {
					subredditId: t,
					notificationLevel: i,
					successCallback: o,
					undoCallback: c
				} = e;
				return async (e, u, O) => {
					let {
						gqlContext: h
					} = O;
					var j, v, x;
					e(f());
					const S = g(i),
						k = await Object(d.b)(h(), t, S);
					if ((null === (v = null === (j = k.error) || void 0 === j ? void 0 : j.fields) || void 0 === v ? void 0 : v.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(k.body) && (null === (x = k.body.data.updateSubredditNotificationSettings.errors) || void 0 === x ? void 0 : x.length)) return e(p()), e(Object(a.f)({
						kind: l.b.Error,
						text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					k.ok && (e(Object(s.c)({
						subredditId: t,
						notificationLevel: i
					})), e(b({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: i
							}
						}
					})), o && o(), e(c ? Object(a.f)(Object(a.e)(m(i), l.b.Undo, n.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(r.i)(t, c))) : Object(a.f)(Object(a.e)(m(i), l.b.SuccessCommunityGreen))))
				}
			}
		},
		"./src/reddit/components/InboxTooltip/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t);
			var n = i("./node_modules/react/index.js"),
				o = i.n(n),
				s = i("./node_modules/react-redux/es/index.js"),
				r = i("./node_modules/reselect/es/index.js"),
				c = i("./src/reddit/actions/appBadgeIndicators/index.ts"),
				a = i("./src/reddit/actions/notifications/index.ts"),
				d = i("./src/reddit/actions/notificationsInbox/index.ts"),
				u = i("./src/reddit/actions/subreddit/notifications.ts"),
				l = i("./src/reddit/components/InboxTooltip/Component.tsx"),
				b = i("./src/reddit/helpers/trackers/inbox.ts"),
				f = i("./src/reddit/hooks/useTracking.ts"),
				p = i("./src/reddit/models/Subreddit/index.ts"),
				g = i("./src/reddit/selectors/appBadges.ts"),
				m = i("./src/reddit/selectors/experiments/hotPotato.ts"),
				O = i("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				h = i("./src/reddit/selectors/notificationsInbox.tsx");
			const j = Object(r.c)({
					isPushNotificationsSupported: h.h,
					cursor: h.c,
					hasNextPage: h.d,
					isHotPotatoEnabled: m.a,
					inboxBadgeCount: g.h,
					isInboxInfiniteScrollEnabled: O.b,
					isInboxPolicyBannerEnabled: O.d,
					isInboxPostEmbedEnabled: O.a,
					isPending: h.e,
					messagesBadgeCount: g.i,
					notifications: e => Object(O.b)(e) ? Object(h.f)(e) : Object(h.g)(e)
				}),
				v = Object(s.b)(j, (e, t) => {
					let {
						desktopNotificationsModalId: i
					} = t;
					return {
						blockAwarder: t => e(Object(d.a)(t)),
						clearMessageTabBadgeCount: () => e(Object(c.b)()),
						decreaseSubredditNotifications: (t, i) => e(Object(u.d)({
							subredditId: t,
							notificationLevel: p.c.LOW,
							undoCallback: i
						})),
						disableNotificationUpdates: t => e(Object(d.c)(t)),
						fetchNotifications: t => e(Object(d.d)(t)),
						hideNotification: t => e(Object(d.b)(t)),
						hideSubredditNotifications: (t, i) => e(Object(d.f)(t, i)),
						markAllAsRead: () => e(Object(d.g)()),
						markNotificationAsRead: (t, i) => e(Object(d.h)(t, i)),
						showBrowserNotificationsPermissionSettings: () => e(Object(a.requestBrowserNotificationPermissionPromptByUser)(i)),
						updateInboxActivitySeenState: () => e(Object(d.j)())
					}
				});
			t.default = v(e => {
				let {
					clearMessageTabBadgeCount: t,
					cursor: i,
					decreaseSubredditNotifications: s,
					disableNotificationUpdates: r,
					fetchNotifications: c,
					hasNextPage: a,
					hideNotification: d,
					hideSubredditNotifications: u,
					hideTooltip: p,
					isHotPotatoEnabled: g,
					blockAwarder: m,
					inboxBadgeCount: O,
					isInboxPolicyBannerEnabled: h,
					isInboxInfiniteScrollEnabled: j,
					isInboxPostEmbedEnabled: v,
					isLoggedIn: x,
					isOpen: S,
					isPending: k,
					isPushNotificationsSupported: N,
					markAllAsRead: w,
					markNotificationAsRead: y,
					messagesBadgeCount: _,
					notifications: I,
					showBrowserNotificationsPermissionSettings: P,
					updateInboxActivitySeenState: E,
					userId: F
				} = e;
				const C = Object(f.a)(),
					[B, A] = Object(n.useState)("");
				return Object(n.useEffect)(() => {
					if (S && !I.length && x) {
						c({
							first: 5
						})
					}
					S && x && (E(), C(Object(b.x)({
						badgeCount: O
					})))
				}, [S]), o.a.createElement(l.b, {
					activeOverflowMenuId: B,
					clearMessageTabBadgeCount: t,
					cursor: i,
					decreaseSubredditNotifications: s,
					disableNotificationUpdates: r,
					fetchNotifications: c,
					hasNextPage: a,
					hideNotification: d,
					hideSubredditNotifications: u,
					hideTooltip: p,
					blockAwarder: m,
					inboxBadgeCount: O,
					isPushNotificationsSupported: N,
					isHotPotatoEnabled: g,
					isInboxPolicyBannerEnabled: h,
					isInboxInfiniteScrollEnabled: j,
					isInboxPostEmbedEnabled: v,
					isLoggedIn: x,
					isPending: k,
					markAllAsRead: w,
					markNotificationAsRead: y,
					messagesBadgeCount: _,
					notifications: I,
					setActiveOverflowMenuId: A,
					showBrowserNotificationsPermissionSettings: P,
					userId: F
				})
			})
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
				return g
			})), i.d(t, "k", (function() {
				return m
			})), i.d(t, "c", (function() {
				return h
			})), i.d(t, "b", (function() {
				return j
			})), i.d(t, "i", (function() {
				return v
			})), i.d(t, "a", (function() {
				return x
			})), i.d(t, "n", (function() {
				return S
			})), i.d(t, "o", (function() {
				return k
			})), i.d(t, "h", (function() {
				return N
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
					...n.o(e),
					noun: "desktop_notification_permissions"
				}),
				a = e => e ? "enable" : "disable",
				d = e => {
					Object(o.a)({
						...c(e),
						action: s.c.View,
						source: "popup"
					})
				},
				u = e => {
					Object(o.a)({
						...c(e),
						action: s.c.Allow,
						source: "popup"
					})
				},
				l = e => {
					Object(o.a)({
						...c(e),
						action: s.c.Block,
						source: "popup"
					})
				},
				b = e => {
					Object(o.a)({
						...c(e),
						action: s.c.Close,
						source: "popup"
					})
				},
				f = (e, t, i) => ({
					...n.o(e),
					actionInfo: n.d(e, {
						success: t,
						reason: i
					}),
					noun: "push_token"
				}),
				p = e => {
					Object(o.a)({
						...f(e, !0),
						action: s.c.Request,
						source: "notification"
					})
				},
				g = e => {
					Object(o.a)({
						...f(e, !0),
						action: s.c.Register,
						source: "notification"
					})
				},
				m = (e, t) => {
					Object(o.a)({
						...f(e, !1, t),
						action: s.c.Bail,
						source: "notification"
					})
				},
				O = e => ({
					...n.o(e),
					noun: "push_notification"
				}),
				h = e => ({
					...O(e),
					notification: n.F(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				j = (e, t) => i => ({
					...n.o(i),
					action: a(e),
					email: {
						type: t
					},
					noun: "email",
					source: "email_app_settings"
				}),
				v = (e, t) => i => ({
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
				}),
				S = (e, t, i) => o => ({
					...n.o(o),
					action: "set_frequency",
					noun: i,
					source: "community_notifications",
					subreddit: {
						id: e,
						name: t.toLowerCase()
					}
				}),
				k = () => e => ({
					...n.o(e),
					action: s.c.View,
					noun: "screen",
					source: "global",
					actionInfo: {
						pageType: "community_alerts"
					}
				}),
				N = () => e => ({
					...n.o(e),
					action: "click",
					noun: "desktop_notification_permissions",
					source: "overlay"
				}),
				w = () => e => ({
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InboxTooltip.3fba1d062338ca8648ef.js.map