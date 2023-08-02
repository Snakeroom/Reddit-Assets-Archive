// https://www.redditstatic.com/desktop2x/InboxTooltip.b934c321384c70f9d345.js
// Retrieved at 8/2/2023, 10:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["InboxTooltip", "PushNotifications"], {
		"./src/reddit/actions/notifications/index.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "initializeServiceWorkerChannel", (function() {
				return R
			})), i.d(t, "requestNotificationsPermissions", (function() {
				return U
			})), i.d(t, "subscribeForPNs", (function() {
				return T
			})), i.d(t, "unsubscribeFromPNs", (function() {
				return G
			})), i.d(t, "requestBrowserNotificationPermissionPromptByUser", (function() {
				return W
			})), i.d(t, "subscribeToPermissionsChange", (function() {
				return D
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
			var g = i("./src/lib/notifications/index.ts"),
				m = i("./src/lib/notifications/constants.ts"),
				O = i("./src/reddit/actions/modal.ts"),
				j = i("./src/reddit/actions/notifications/utils.ts"),
				h = i("./src/reddit/actions/tabBadging.ts"),
				x = i("./src/reddit/actions/toaster.ts"),
				v = i("./src/reddit/constants/modals.ts"),
				S = i("./src/reddit/helpers/tabBadging/index.ts"),
				k = i("./src/reddit/helpers/trackers/notifications.ts"),
				N = i("./src/reddit/models/Toast/index.ts"),
				w = i("./src/reddit/selectors/activeModal.ts"),
				y = i("./src/reddit/selectors/activeModalId.ts"),
				_ = i("./src/reddit/constants/experiments.ts"),
				I = i("./src/reddit/helpers/chooseVariant/index.ts"),
				E = i("./src/reddit/selectors/user.ts");
			const F = e => Object(I.c)(e, {
				experimentEligibilitySelector: E.S,
				experimentName: _.Cb
			}) === _.Rd;
			var P = i("./src/reddit/selectors/experiments/delayDnPermission.ts"),
				B = i("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");
			const C = e => Object(I.c)(e, {
				experimentName: _.dc,
				experimentEligibilitySelector: I.a
			}) === _.Rd;
			var q = i("./src/reddit/selectors/meta.ts");
			let A = !1;
			const R = async (e, t) => {
				const i = Object(E.R)(e);
				if (A) return;
				if (A = !0, Object(j.a)(e) !== m.d.NotificationsSupported) return;
				await Object(u.a)();
				navigator.serviceWorker.addEventListener("message", n => {
					const s = n.data,
						r = s.command || s.type;
					if ("registerWithServiceWorker" === r) L(e);
					else if (r === S.a && i) {
						const e = o()(s, ["command"]);
						t(Object(h.e)(e))
					}
				}), L(e)
			}, L = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: k.c(e)
				})
			}, U = function(e, t) {
				let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
				return async (n, s, o) => {
					const c = s(),
						a = Object(q.f)(c),
						d = C(c),
						u = !!Object(y.a)(c),
						l = Object(P.a)(c),
						b = Object(B.e)(c),
						f = Object(w.c)(v.a.NSFW_BLOCKING_MODAL_V2)(c),
						p = F(c);
					if (b || f) return;
					if (await Object(r.a)() || a) return;
					await R(c, n);
					k.l(c), await Object(g.b)(e, t, () => {
						d || l || u || n(Object(m.s)()), n(Object(m.q)()), k.j(c)
					}, (e, t) => {
						n(Object(m.o)()), n(G(t ? m.a.Denied : m.a.Closed)), e && (t ? k.e(c) : k.f(c)), i()
					}, e => {
						n(Object(m.p)()), n(T()), e && k.d(c), i()
					}, () => {
						n(Object(m.n)()), i()
					}, () => {
						n(Object(m.r)())
					}, p)
				}
			}, T = e => async (t, i, s) => {
				const o = i();
				try {
					switch (await p(s.gqlContext)) {
						case f.Success:
							Object(j.b)(m.a.Granted), k.m(o), e && t(Object(x.f)({
								kind: N.b.SuccessCommunity,
								text: n.fbt._("Changes saved", null, {
									hk: "wGH5U"
								})
							}));
							break;
						case f.FailedResponse:
							k.k(o, "registration_failed_generally");
							break;
						case f.FailedGqlReponse:
							k.k(o, "registration_failed_in_gql")
					}
				} catch (r) {
					k.k(o, "registration_failed_uncaught_exception"), console.error(r)
				}
			}, G = (e, t) => async i => {
				try {
					Object(j.b)(e);
					const s = await Object(u.a)();
					if (s) {
						const e = await s.pushManager.getSubscription();
						e && (e.unsubscribe(), t && i(Object(x.f)({
							kind: N.b.SuccessCommunity,
							text: n.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						})))
					}
				} catch (s) {}
			}, W = e => async (t, i) => {
				const n = i();
				if (Object(j.a)(n) === m.d.NotificationsSupported) switch (Object(g.a)()) {
					case m.a.Default:
					case m.a.Closed:
						await t(U(!0, !0));
						break;
					case m.a.Denied:
						t(Object(O.h)(e))
				}
			}, D = () => async (e, t) => {
				var i;
				if (!(null === (i = null === navigator || void 0 === navigator ? void 0 : navigator.permissions) || void 0 === i ? void 0 : i.query)) return;
				const n = t();
				if (Object(j.a)(n) !== m.d.NotificationsSupported) return;
				const s = await navigator.permissions.query({
					name: "notifications"
				});
				s.onchange = () => (t => {
					switch (t) {
						case m.a.Denied:
							e(G(m.a.Denied)), k.e(n);
							break;
						case m.a.Granted:
							e(T()), k.d(n);
							break;
						default:
							e(G(m.a.Default))
					}
				})(s.state)
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
				s = i("./src/lib/makeActionCreator/index.ts"),
				o = i("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				r = i("./src/reddit/actions/notificationsInbox/index.ts"),
				c = i("./src/reddit/actions/subreddit/constants.ts"),
				a = i("./src/reddit/actions/toaster.ts"),
				d = i("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				u = i("./src/reddit/models/Subreddit/index.ts"),
				l = i("./src/reddit/models/Toast/index.ts");
			const b = Object(s.a)(c.z),
				f = Object(s.a)(c.y),
				p = Object(s.a)(c.x),
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
					successCallback: s,
					undoCallback: c
				} = e;
				return async (e, u, O) => {
					let {
						gqlContext: j
					} = O;
					var h, x, v;
					e(f());
					const S = g(i),
						k = await Object(d.b)(j(), t, S);
					if ((null === (x = null === (h = k.error) || void 0 === h ? void 0 : h.fields) || void 0 === x ? void 0 : x.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(k.body) && (null === (v = k.body.data.updateSubredditNotificationSettings.errors) || void 0 === v ? void 0 : v.length)) return e(p()), e(Object(a.f)({
						kind: l.b.Error,
						text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					k.ok && (e(Object(o.c)({
						subredditId: t,
						notificationLevel: i
					})), e(b({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: i
							}
						}
					})), s && s(), e(c ? Object(a.f)(Object(a.e)(m(i), l.b.Undo, n.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(r.i)(t, c))) : Object(a.f)(Object(a.e)(m(i), l.b.SuccessCommunityGreen))))
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
				c = i("./src/reddit/actions/appBadgeIndicators/index.ts"),
				a = i("./src/reddit/actions/notifications/index.ts"),
				d = i("./src/reddit/actions/notificationsInbox/index.ts"),
				u = i("./src/reddit/actions/subreddit/notifications.ts"),
				l = i("./src/reddit/components/InboxTooltip/Component.tsx"),
				b = i("./src/reddit/helpers/trackers/inbox.ts"),
				f = i("./src/reddit/hooks/useTracking.ts"),
				p = i("./src/reddit/models/Subreddit/index.ts"),
				g = i("./src/reddit/selectors/appBadges.ts"),
				m = i("./src/reddit/selectors/experiments/garlicBread.ts"),
				O = i("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				j = i("./src/reddit/selectors/notificationsInbox.tsx");
			const h = Object(r.c)({
					isPushNotificationsSupported: j.h,
					cursor: j.c,
					hasNextPage: j.d,
					isGarlicBreadEnabled: m.a,
					inboxBadgeCount: g.f,
					isInboxInfiniteScrollEnabled: O.b,
					isInboxPolicyBannerEnabled: O.d,
					isInboxPostEmbedEnabled: O.a,
					isPending: j.e,
					messagesBadgeCount: g.g,
					notifications: e => Object(O.b)(e) ? Object(j.f)(e) : Object(j.g)(e)
				}),
				x = Object(o.b)(h, (e, t) => {
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
			t.default = x(e => {
				let {
					clearMessageTabBadgeCount: t,
					cursor: i,
					decreaseSubredditNotifications: o,
					disableNotificationUpdates: r,
					fetchNotifications: c,
					hasNextPage: a,
					hideNotification: d,
					hideSubredditNotifications: u,
					hideTooltip: p,
					isGarlicBreadEnabled: g,
					blockAwarder: m,
					inboxBadgeCount: O,
					isInboxPolicyBannerEnabled: j,
					isInboxInfiniteScrollEnabled: h,
					isInboxPostEmbedEnabled: x,
					isLoggedIn: v,
					isOpen: S,
					isPending: k,
					isPushNotificationsSupported: N,
					markAllAsRead: w,
					markNotificationAsRead: y,
					messagesBadgeCount: _,
					notifications: I,
					showBrowserNotificationsPermissionSettings: E,
					updateInboxActivitySeenState: F,
					userId: P
				} = e;
				const B = Object(f.a)(),
					[C, q] = Object(n.useState)("");
				return Object(n.useEffect)(() => {
					if (S && !I.length && v) {
						c({
							first: 5
						})
					}
					S && v && (F(), B(Object(b.u)({
						badgeCount: O
					})))
				}, [S]), s.a.createElement(l.b, {
					activeOverflowMenuId: C,
					clearMessageTabBadgeCount: t,
					cursor: i,
					decreaseSubredditNotifications: o,
					disableNotificationUpdates: r,
					fetchNotifications: c,
					hasNextPage: a,
					hideNotification: d,
					hideSubredditNotifications: u,
					hideTooltip: p,
					blockAwarder: m,
					inboxBadgeCount: O,
					isPushNotificationsSupported: N,
					isGarlicBreadEnabled: g,
					isInboxPolicyBannerEnabled: j,
					isInboxInfiniteScrollEnabled: h,
					isInboxPostEmbedEnabled: x,
					isLoggedIn: v,
					isPending: k,
					markAllAsRead: w,
					markNotificationAsRead: y,
					messagesBadgeCount: _,
					notifications: I,
					setActiveOverflowMenuId: q,
					showBrowserNotificationsPermissionSettings: E,
					userId: P
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
				return j
			})), i.d(t, "b", (function() {
				return h
			})), i.d(t, "i", (function() {
				return x
			})), i.d(t, "a", (function() {
				return v
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
				g = e => {
					Object(s.a)({
						...f(e, !0),
						action: o.b.Register,
						source: "notification"
					})
				},
				m = (e, t) => {
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
				j = e => ({
					...O(e),
					notification: n.H(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				h = (e, t) => i => ({
					...n.q(i),
					action: a(e),
					email: {
						type: t
					},
					noun: "email",
					source: "email_app_settings"
				}),
				x = (e, t) => i => ({
					...n.q(i),
					action: a(e),
					notification: {
						type: t
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				v = e => t => ({
					...n.q(t),
					source: "email_app_settings",
					action: a(e),
					noun: "email",
					notification: {
						type: "all"
					}
				}),
				S = (e, t, i) => s => ({
					...n.q(s),
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
					action: o.b.View,
					noun: "screen",
					source: "global",
					actionInfo: {
						pageType: "community_alerts"
					}
				}),
				N = () => e => ({
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InboxTooltip.b934c321384c70f9d345.js.map