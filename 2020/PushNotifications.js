// https://www.redditstatic.com/desktop2x/PushNotifications.bcc727be3c5311eb87cf.js
// Retrieved at 1/17/2020, 11:00:23 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PushNotifications"], {
		"./src/graphql/operations/RegisterWebPushToken.json": function(e) {
			e.exports = JSON.parse('{"id":"197650c1946c"}')
		},
		"./src/lib/timezone/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.split.js");
			var s = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/models/PostCreationForm/index.ts");
			const r = "America/Los_Angeles",
				o = () => {
					let e;
					try {
						e = Intl.DateTimeFormat().resolvedOptions().timeZone
					} catch (t) {}
					return "Asia/Calcutta" === e && (e = "Asia/Kolkata"), e || void 0
				},
				a = e => {
					const t = Math.abs(e),
						n = t % 60,
						s = e > 0 ? "-" : "+",
						i = ("0" + Math.floor(t / 60)).slice(-2),
						r = ("0" + n).slice(-2);
					return "".concat(s).concat(i, ":").concat(r)
				},
				c = (e, t) => {
					const n = t || Date.now(),
						i = {
							year: "numeric",
							month: "numeric",
							day: "numeric",
							hour: "numeric",
							minute: "numeric",
							second: "numeric",
							timeZoneName: "short",
							hour12: !1,
							timeZone: e
						};
					let r = "";
					try {
						r = new Intl.DateTimeFormat("en-US", i).format(new Date(n))
					} catch (v) {
						return
					}
					const [o, a, c] = r.replace(", ", " ").split(" "), [u, d, l] = o.trim().split("/").map(Number), [m, f, g] = a.trim().split(":").map(Number), b = Date.UTC(l, u - 1, d, m, f, g), p = new Date(n).setMilliseconds(0) - b;
					return {
						abbreviation: c,
						offset: Math.round(p / s.cb)
					}
				},
				u = e => {
					const t = e.slice(0, 19),
						[n, s] = t.split("T"),
						[i, r, o] = n.split("-").map(Number),
						[a, c, u = 0] = s.split(":").map(Number);
					return new Date(i, r - 1, o, a, c, u)
				},
				d = e => {
					const t = new Date(e);
					return t.setMinutes(t.getMinutes() - t.getTimezoneOffset()), t.toISOString().slice(0, 16)
				},
				l = e => {
					if (e && e.eventInfo) {
						const {
							eventStart: t,
							eventEnd: n
						} = e.eventInfo;
						return {
							startDate: d(new Date(t * s.Bb)),
							endDate: d(new Date(n * s.Bb)),
							submitTime: i.i.Now,
							timezoneName: o() || r
						}
					}
				}
		},
		"./src/reddit/actions/notifications/index.ts": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = n("./src/config.ts"),
				i = n("./src/lib/browser/isIncognito.ts"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/localStorageAvailable/index.ts"),
				a = (n("./node_modules/core-js/modules/es6.regexp.replace.js"), e => {
					const t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"),
						n = window.atob(t),
						s = new Uint8Array(n.length);
					for (let i = 0; i < n.length; ++i) s[i] = n.charCodeAt(i);
					return s
				}),
				c = n("./src/reddit/actions/notifications/constants.ts"),
				u = n("./src/reddit/actions/notifications/state.ts"),
				d = n("./src/reddit/actions/notifications/utils.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/graphql/operations/RegisterWebPushToken.json"),
				f = n("./src/lib/makeGqlRequest/index.ts"),
				g = n("./src/lib/timezone/index.ts");
			var b = n("./src/reddit/helpers/trackers/notifications.ts"),
				p = n("./src/reddit/i18n/utils.ts"),
				v = n("./src/reddit/models/Toast/index.ts");
			n.d(t, "getBrowserNotificationPermission", (function() {
				return h
			})), n.d(t, "resetPermissionRequestClosed", (function() {
				return O
			})), n.d(t, "isBrowserSubscribedForPushNotifications", (function() {
				return _
			})), n.d(t, "initializeServiceWorkerChannel", (function() {
				return S
			})), n.d(t, "requestNotificationsPermissions", (function() {
				return y
			})), n.d(t, "subscribeForPNs", (function() {
				return N
			})), n.d(t, "unsubscribeFromPNs", (function() {
				return C
			}));
			const j = 4 * r.I,
				h = () => {
					const e = Object(o.a)() && "1" === localStorage.getItem("notification-permission-request-closed");
					return "granted" === Notification.permission ? c.a.Granted : "denied" === Notification.permission ? c.a.Denied : e ? c.a.Closed : c.a.Default
				},
				O = () => !!Object(o.a)() && (localStorage.removeItem("notification-permission-request-closed"), !0),
				_ = async () => {
					let e;
					try {
						e = await navigator.serviceWorker.register("/sw.js")
					} catch (t) {
						return !1
					}
					return null !== await e.pushManager.getSubscription()
				}, w = e => {
					navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: "registerClient",
						v2EventBoilerPlate: b.b(e)
					})
				};
			let k = !1;
			const S = async e => {
				if (k) return;
				if (k = !0, Object(d.a)(e) !== c.f.NotificationsSupported) return;
				try {
					await navigator.serviceWorker.register("/sw.js")
				} catch (t) {
					return
				}
				navigator.serviceWorker.addEventListener("message", t => {
					"registerWithServiceWorker" === t.data.command && w(e)
				}), w(e)
			}, y = (e, t) => async (n, s, r) => {
				const a = s();
				if (await Object(i.a)()) return;
				if (await S(a), Object(o.a)()) {
					const t = localStorage.getItem("push-token-last-refresh-ms"),
						n = (new Date).getTime();
					if (!e && t && parseInt(t) + j > n) return;
					localStorage.setItem("push-token-last-refresh-ms", n.toString())
				}
				b.i(a);
				const u = Object(d.a)(a);
				if (u === c.f.BrowserUnsupported) return;
				if (u === c.f.LocalStorageUnavailable) return;
				if (u === c.f.NotAllRequiredAPIsSupported) return;
				if ("denied" === Notification.permission) return void n(Object(c.m)());
				if ("granted" === Notification.permission) return n(Object(c.n)()), void n(N());
				const l = localStorage.getItem("notification-permission-request-closed");
				if (t || !l || "1" !== l) switch (n(Object(c.p)()), n(Object(c.o)()), b.g(a), await Notification.requestPermission()) {
					case "granted":
						n(Object(c.n)()), n(N()), b.c(a);
						break;
					case "denied":
						n(Object(c.m)()), b.d(a);
						break;
					default:
						n(Object(c.m)()), b.e(a), localStorage.setItem("notification-permission-request-closed", "1")
				}
			}, N = e => async (t, n, i) => {
				const r = n();
				try {
					const o = await navigator.serviceWorker.register("/sw.js");
					let c = await o.pushManager.getSubscription();
					if (!c) {
						const e = {
							userVisibleOnly: !0,
							applicationServerKey: a(s.a.pushNotificationApplicationServerKey)
						};
						c = await o.pushManager.subscribe(e)
					}
					Object(u.c)();
					const d = await ((e, t, n) => {
							const s = {
								pushToken: JSON.stringify(n),
								timezoneName: Object(g.b)() || g.a,
								timestamp: (new Date).toISOString(),
								language: "en_us"
							};
							return Object(f.a)(e, Object.assign({}, m, {
								variables: s
							}))
						})(i.gqlContext(), n(), c),
						j = d.body.data.registerWebPushToken;
					d.ok ? j && !j.ok ? b.h(r, "registration_failed_in_gql") : (b.j(r), e && t(Object(l.e)({
						kind: v.b.SuccessCommunity,
						text: Object(p.c)("Changes saved")
					}))) : b.h(r, "registration_failed_generally")
				} catch (o) {
					b.h(r, "registration_failed_uncaught_exception"), console.error(o)
				}
			}, C = e => async (t, n, s) => {
				try {
					const n = await navigator.serviceWorker.register("/sw.js"),
						s = await n.pushManager.getSubscription();
					s && (s.unsubscribe(), Object(u.c)(), e && t(Object(l.e)({
						kind: v.b.SuccessCommunity,
						text: Object(p.c)("Changes saved")
					})))
				} catch (i) {}
			}
		},
		"./src/reddit/helpers/trackers/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return c
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "f", (function() {
				return x
			}));
			var s = n("./src/reddit/models/PushNotification/index.ts"),
				i = n("./src/reddit/selectors/telemetry.ts"),
				r = n("./src/telemetry/index.ts");
			const o = e => Object.assign({}, i.defaults(e), {
					noun: "desktop_notification_permissions"
				}),
				a = e => e ? "enable" : "disable",
				c = e => {
					Object(r.a)(Object.assign({}, o(e), {
						action: "view",
						source: "popup"
					}))
				},
				u = e => {
					Object(r.a)(Object.assign({}, o(e), {
						action: "allow",
						source: "popup"
					}))
				},
				d = e => {
					Object(r.a)(Object.assign({}, o(e), {
						action: "block",
						source: "popup"
					}))
				},
				l = e => {
					Object(r.a)(Object.assign({}, o(e), {
						action: "close",
						source: "popup"
					}))
				},
				m = (e, t, n) => Object.assign({}, i.defaults(e), {
					actionInfo: i.actionInfo(e, {
						success: t,
						reason: n
					}),
					noun: "push_token"
				}),
				f = e => {
					Object(r.a)(Object.assign({}, m(e, !0), {
						action: "request",
						source: "notification"
					}))
				},
				g = e => {
					Object(r.a)(Object.assign({}, m(e, !0), {
						action: "register",
						source: "notification"
					}))
				},
				b = (e, t) => {
					Object(r.a)(Object.assign({}, m(e, !1, t), {
						action: "bail",
						source: "notification"
					}))
				},
				p = e => Object.assign({}, (e => Object.assign({}, i.defaults(e), {
					noun: "push_notification"
				}))(e), {
					notification: i.notification(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				v = e => (t, n) => {
					Object(r.a)(Object.assign({}, i.defaults(t), {
						action: a(n),
						noun: e,
						source: "notification"
					}))
				},
				j = v("chat_messages"),
				h = v("chat_requests"),
				O = v("comment_replies"),
				_ = v("community_recs"),
				w = v("desktop_notification_permissions"),
				k = v("live_event"),
				S = v("post_replies"),
				y = v("private_messages"),
				N = v("trending_posts"),
				C = v("username_mention"),
				D = v("upvotes_comment"),
				P = v("upvotes_post"),
				x = (e, t, n) => {
					switch (t) {
						case s.a.ChatMessages:
							j(e, n), h(e, n);
							break;
						case s.a.CommunityRecommendations:
							_(e, n);
							break;
						case s.a.LiveEvent:
							k(e, n);
							break;
						case s.a.TrendingPosts:
							N(e, n);
							break;
						case s.a.UpvotedComments:
							D(e, n);
							break;
						case s.a.UpvotedPosts:
							P(e, n);
							break;
						case s.a.UnreadMessages:
							O(e, n), S(e, n), y(e, n), C(e, n)
					}
				}
		},
		"./src/reddit/models/PushNotification/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.ChatMessages = "chatMessages", e.CommunityRecommendations = "communityRecommendations", e.LiveEvent = "liveEvent", e.TrendingPosts = "trendingPosts", e.UnreadMessages = "unreadMessages", e.UpvotedComments = "upvotedComments", e.UpvotedPosts = "upvotedPosts"
				}(s || (s = {}))
		}
	}
]);
//# sourceMappingURL=PushNotifications.bcc727be3c5311eb87cf.js.map