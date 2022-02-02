// https://www.redditstatic.com/desktop2x/AuthorHovercard.1321c54cfc4d50e79d47.js
// Retrieved at 2/2/2022, 2:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard"], {
		"./src/lib/browser/isIncognito.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/constants/index.ts");
			const a = 120 * r.hb;
			t.a = async () => {
				let e = await (async () => await new Promise(e => {
					const t = window.RequestFileSystem || window.webkitRequestFileSystem;
					t ? t(0, 100, () => e(!1), () => e(!0)) : e(void 0)
				}))();
				return e || (e = await (async () => {
					if ("storage" in navigator && "estimate" in navigator.storage) {
						const {
							quota: e
						} = await navigator.storage.estimate();
						return !e || e <= a
					}
				})()), e
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/constants/intlSupport.ts");

			function s(e, {
				showDay: t,
				useUtc: n,
				shortMonths: s,
				locale: o = r.D
			} = {}) {
				const i = new Date(e * r.Rb);
				return a.a ? new Intl.DateTimeFormat(o, {
					month: s ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(i) : i.toLocaleString()
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/constants/index.ts");
			t.a = (e, t = r.D) => {
				return new Date(1e3 * e).toLocaleString(t, {
					weekday: "short",
					month: "short",
					year: "numeric",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					timeZoneName: "short",
					timeZone: "UTC"
				})
			}
		},
		"./src/lib/notifications/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			}));
			var r = n("./src/lib/delay/index.ts"),
				a = n("./src/lib/getParsedUserAgent/index.ts"),
				s = n("./src/lib/localStorageAvailable/index.ts"),
				o = n("./src/lib/notifications/constants.ts"),
				i = n("./src/lib/notifications/featureFlags.ts");
			n("./src/lib/serviceWorker/index.ts");
			const c = () => {
					if (Object(i.a)() !== o.c.NotificationsSupported) return o.a.Unsupported;
					const e = Object(s.a)() && localStorage.getItem(o.f) === o.g;
					return "granted" === Notification.permission ? o.a.Granted : "denied" === Notification.permission ? o.a.Denied : e ? o.a.Closed : o.a.Default
				},
				d = () => !!Object(s.a)() && (localStorage.removeItem(o.f), !0),
				l = async (e, t, n, i, d, l) => {
					const u = c();
					if (u === o.a.Unsupported) return void l();
					if (Object(s.a)()) {
						const t = localStorage.getItem(o.h),
							n = (new Date).getTime();
						if (!e && t && parseInt(t) + o.i > n) return void l();
						localStorage.setItem(o.h, n.toString())
					}
					if (!t && u === o.a.Denied) return i(!1, !0), void l();
					if (!t && u === o.a.Granted) return d(!1), void l();
					if (!t && u === o.a.Closed) return void l();
					let m = o.a.Default;
					const p = navigator.userAgent;
					switch (Object(a.b)(p) || Object(a.f)(p) ? Object(r.a)(1800).then(() => {
						m === o.a.Default && n()
					}) : n(), m = await Notification.requestPermission()) {
						case "granted":
							d(!0);
							break;
						case "denied":
							i(!0, !0);
							break;
						case "default":
							l();
							break;
						default:
							i(!0, !1), localStorage.setItem(o.f, o.g)
					}
				}
		},
		"./src/lib/notifications/token.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			}));
			var r = n("./src/config.ts"),
				a = n("./src/redditGQL/operations/RegisterWebPushToken.json"),
				s = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/lib/serviceWorker/index.ts"),
				i = n("./src/lib/timezone/index.ts"),
				c = e => {
					const t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"),
						n = window.atob(t),
						r = new Uint8Array(n.length);
					for (let a = 0; a < n.length; ++a) r[a] = n.charCodeAt(a);
					return r
				};
			var d;
			! function(e) {
				e[e.Success = 0] = "Success", e[e.FailedGeneric = 1] = "FailedGeneric", e[e.FailedResponse = 2] = "FailedResponse", e[e.FailedGqlReponse = 3] = "FailedGqlReponse", e[e.FailedNoServiceWorker = 4] = "FailedNoServiceWorker", e[e.FailedNoSubscription = 5] = "FailedNoSubscription"
			}(d || (d = {}));
			const l = async e => {
				try {
					const t = await Object(o.a)();
					if (!t) return d.FailedNoServiceWorker;
					let n = await t.pushManager.getSubscription();
					if (!n) {
						const e = {
							userVisibleOnly: !0,
							applicationServerKey: c(r.a.pushNotificationApplicationServerKey)
						};
						n = await t.pushManager.subscribe(e)
					}
					if (!n) return d.FailedNoSubscription;
					const l = await ((e, t) => {
						const n = {
							pushToken: JSON.stringify(t),
							timezoneName: Object(i.b)() || i.a,
							timestamp: (new Date).toISOString(),
							language: "en_us"
						};
						return Object(s.a)(e(), {
							...a,
							variables: n
						})
					})(e, n);
					if (l && !l.ok) return d.FailedResponse;
					const u = null == l ? void 0 : l.body.data.registerWebPushToken;
					return u && !u.ok ? d.FailedGqlReponse : d.Success
				} catch (t) {
					return console.error(t), d.FailedGeneric
				}
			}
		},
		"./src/reddit/actions/inContextModeration.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const a = "INCONTEXT__BANNED",
				s = "INCONTEXT__MUTED",
				o = Object(r.a)(a),
				i = Object(r.a)(s)
		},
		"./src/reddit/actions/notificationSettingsLayout/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			}));
			const r = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__FAILED",
				a = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__LOADED",
				s = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__PENDING",
				o = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__FAILED",
				i = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__LOADED",
				c = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__PENDING",
				d = "NOTIFICATION_SETTINGS_LAYOUT_UPDATED",
				l = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_FAILED",
				u = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_LOADED",
				m = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_PENDING",
				p = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_UPDATED"
		},
		"./src/reddit/actions/notificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "b", (function() {
				return C
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/notificationSettingsLayout/constants.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/redditGQL/operations/UserSubredditsNotificationsLevel.json");
			var l = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const m = Object(a.a)(s.c),
				p = Object(a.a)(s.b),
				b = Object(a.a)(s.a),
				f = Object(a.a)(s.f),
				h = Object(a.a)(s.e),
				v = Object(a.a)(s.d),
				g = e => async (t, n, {
					gqlContext: r
				}) => {
					e === l.a.Push ? t(f()) : t(m()), await async function(e, t, n) {
						const r = await Object(i.a)(e(), {
							channel: t
						});
						if (r.ok && r.body) {
							const e = function(e) {
								const t = e && e.data,
									n = t && t.notificationSettingsLayoutByChannel,
									r = n && n.sections;
								if (r) return function(e) {
									const t = {},
										n = [];
									let r = {},
										a = [];
									const s = e => {
										const {
											rowIds: s,
											rowsCollection: o
										} = function(e) {
											const t = [],
												n = {};
											if (e.rows)
												for (let r = 0; r < e.rows.length; r++) {
													const a = e.rows[r],
														s = a.messageType;
													t.push(s), n[s] = a
												}
											return {
												rowsCollection: n,
												rowIds: t
											}
										}(e);
										r = {
											...r,
											...o
										}, a = [...a, ...s];
										const i = e.id;
										n.push(i), t[i] = {
											...e,
											rows: s
										}
									};
									for (let o = 0; o < e.length; o++) s(e[o]);
									return {
										sections: {
											byId: t,
											allIds: n
										},
										rows: {
											byId: r,
											allIds: a
										}
									}
								}(r)
							}(r.body);
							t === l.a.Push ? n(h(e)) : n(p(e))
						} else t === l.a.Push ? n(v({
							error: r.error
						})) : n(b({
							error: r.error
						}))
					}(r, e, t)
				};
			const x = Object(a.a)(s.g),
				_ = e => async (t, n, {
					gqlContext: a
				}) => {
					(await Object(i.b)(a(), e)).ok ? (I(t, e), function(e) {
						e(Object(o.f)({
							kind: u.b.SuccessCommunity,
							text: r.fbt._("Changes saved", null, {
								hk: "UBoVR"
							})
						}))
					}(t)) : function(e) {
						e(Object(o.f)({
							kind: u.b.Error,
							text: r.fbt._("We had some issues saving your changes. Please try again.", null, {
								hk: "1OvQi6"
							})
						}))
					}(t)
				};

			function I(e, t) {
				e(x({
					isEnabled: t.isEnabled,
					messageType: t.messageType
				}))
			}
			const O = Object(a.a)(s.j),
				y = Object(a.a)(s.i),
				E = Object(a.a)(s.k),
				N = Object(a.a)(s.h),
				C = e => async (t, n, {
					gqlContext: r
				}) => {
					var a, s;
					t(O());
					const i = await ((e, t) => Object(c.a)(e, {
						...d,
						variables: t
					}))(r(), e);
					if (null === (s = null === (a = i.error) || void 0 === a ? void 0 : a.fields) || void 0 === s ? void 0 : s.length) return t(N({
						error: i.error
					})), void t(Object(o.d)());
					if (i.ok && i.body) {
						const e = i.body,
							n = e && e.data,
							r = n && n.identity && n.identity.subscribedSubreddits,
							a = r && r.pageInfo,
							s = (r && r.edges).map(e => e.node);
						t(y({
							nodes: s,
							pageInfo: a
						}))
					}
				}
		},
		"./src/reddit/actions/notifications/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "initializeServiceWorkerChannel", (function() {
				return N
			})), n.d(t, "requestNotificationsPermissions", (function() {
				return j
			})), n.d(t, "subscribeForPNs", (function() {
				return w
			})), n.d(t, "unsubscribeFromPNs", (function() {
				return k
			})), n.d(t, "requestBrowserNotificationPermissionPromptByUser", (function() {
				return P
			})), n.d(t, "subscribeToPermissionsChange", (function() {
				return S
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/omit.js"),
				s = n.n(a),
				o = n("./src/lib/browser/isIncognito.ts"),
				i = n("./src/lib/notifications/token.ts"),
				c = n("./src/lib/notifications/index.ts"),
				d = n("./src/lib/notifications/constants.ts"),
				l = n("./src/lib/serviceWorker/index.ts"),
				u = n("./src/reddit/actions/chat/toggle.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/actions/notifications/utils.ts"),
				b = n("./src/reddit/actions/tabBadging.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/reddit/helpers/parseUrl.ts"),
				v = n("./src/reddit/helpers/tabBadging/index.ts"),
				g = n("./src/reddit/helpers/trackers/notifications.ts"),
				x = n("./src/reddit/models/Toast/index.ts"),
				_ = n("./src/reddit/constants/experiments.ts"),
				I = n("./src/reddit/helpers/chooseVariant/index.ts");
			var O = n("./src/reddit/selectors/meta.ts"),
				y = n("./src/reddit/selectors/user.ts");
			let E = !1;
			const N = async (e, t) => {
				const n = Object(y.I)(e);
				if (E) return;
				if (E = !0, Object(p.a)(e) !== d.c.NotificationsSupported) return;
				await Object(l.a)();
				navigator.serviceWorker.addEventListener("message", r => {
					const a = r.data,
						o = a.command || a.type;
					if ("registerWithServiceWorker" === o) C(e);
					else if (o === v.a && n) {
						const e = s()(a, ["command"]);
						t(Object(b.f)(e))
					} else if ("navigate.chat" === o) {
						const e = Object(h.a)(a.data.href);
						e && e.pathname && t(Object(u.c)(e.pathname))
					}
				}), C(e)
			}, C = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: g.c(e)
				})
			}, j = (e, t, n = (() => {})) => async (r, a, s) => {
				const i = a(),
					l = Object(O.f)(i),
					u = (e => Object(I.c)(e, {
						experimentName: _.Gb,
						experimentEligibilitySelector: I.a
					}) === _.Yc)(i);
				if (await Object(o.a)() || l) return;
				await N(i, r);
				g.j(i), await Object(c.b)(e, t, () => {
					u || r(Object(d.o)()), r(Object(d.n)()), g.h(i)
				}, (e, t) => {
					r(Object(d.l)()), r(k(t ? d.a.Denied : d.a.Closed)), e && (t ? g.e(i) : g.f(i))
				}, e => {
					r(Object(d.m)()), r(w()), e && g.d(i)
				}, () => {
					r(Object(d.k)()), n()
				})
			}, w = e => async (t, n, a) => {
				const s = n();
				try {
					switch (await Object(i.b)(a.gqlContext)) {
						case i.a.Success:
							Object(p.b)(d.a.Granted), g.k(s), e && t(Object(f.f)({
								kind: x.b.SuccessCommunity,
								text: r.fbt._("Changes saved", null, {
									hk: "wGH5U"
								})
							}));
							break;
						case i.a.FailedResponse:
							g.i(s, "registration_failed_generally");
							break;
						case i.a.FailedGqlReponse:
							g.i(s, "registration_failed_in_gql")
					}
				} catch (o) {
					g.i(s, "registration_failed_uncaught_exception"), console.error(o)
				}
			}, k = (e, t) => async n => {
				try {
					Object(p.b)(e);
					const a = await Object(l.a)();
					if (a) {
						const e = await a.pushManager.getSubscription();
						e && (e.unsubscribe(), t && n(Object(f.f)({
							kind: x.b.SuccessCommunity,
							text: r.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						})))
					}
				} catch (a) {}
			}, P = e => async (t, n) => {
				const r = n();
				if (Object(p.a)(r) === d.c.NotificationsSupported) switch (Object(c.a)()) {
					case d.a.Default:
					case d.a.Closed:
						await t(j(!0, !0));
						break;
					case d.a.Denied:
						t(Object(m.h)(e))
				}
			}, S = () => async (e, t) => {
				var n;
				if (!(null === (n = null === navigator || void 0 === navigator ? void 0 : navigator.permissions) || void 0 === n ? void 0 : n.query)) return;
				const r = t();
				if (Object(p.a)(r) !== d.c.NotificationsSupported) return;
				const a = await navigator.permissions.query({
					name: "notifications"
				});
				a.onchange = () => (t => {
					switch (t) {
						case d.a.Denied:
							e(k(d.a.Denied)), g.e(r);
							break;
						case d.a.Granted:
							e(w()), g.d(r);
							break;
						default:
							e(k(d.a.Default))
					}
				})(a.state)
			}
		},
		"./src/reddit/actions/notifications/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var r = n("./src/lib/notifications/index.ts"),
				a = n("./src/lib/notifications/constants.ts"),
				s = n("./src/lib/notifications/featureFlags.ts"),
				o = n("./src/reddit/featureFlags/index.ts"),
				i = n("./src/reddit/helpers/localStorage/index.ts");
			const c = e => o.d.pushNotificationsBrowserSupported(e) ? Object(s.a)() : a.c.BrowserUnsupported,
				d = e => {
					switch (e) {
						case a.a.Denied:
							i.mb(!1), Object(r.c)();
							break;
						case a.a.Default:
						case a.a.Granted:
							i.mb(!0), Object(r.c)();
							break;
						case a.a.Closed:
							i.mb(!0)
					}
				}
		},
		"./src/reddit/actions/pages/wrappedReddit.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/pageTitle.ts"),
				a = n("./src/reddit/actions/platform.ts");
			t.a = () => async e => {
				e(Object(a.m)({
					title: Object(r.p)()
				}))
			}
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return $
			})), n.d(t, "d", (function() {
				return re
			})), n.d(t, "b", (function() {
				return oe
			})), n.d(t, "e", (function() {
				return ie
			})), n.d(t, "a", (function() {
				return ce
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/get.js"),
				s = n.n(a),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/apiRequestState.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/subreddit.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/modals.ts"),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts"),
				h = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				v = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const g = (e, t, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
				endpoint: Object(h.a)(Object(v.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: m.jb.GET,
				data: n
			});
			var x = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				_ = n("./src/reddit/models/SubredditModeration/index.ts"),
				I = n("./src/reddit/models/Toast/index.ts"),
				O = n("./src/reddit/selectors/activeModalId.ts"),
				y = n("./src/reddit/selectors/bannedUser.ts"),
				E = n("./src/reddit/selectors/subreddit.ts"),
				N = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/actions/subredditModeration/constants.ts"),
				j = n("./src/lib/initializeClient/installReducer.ts"),
				w = n("./node_modules/redux/es/redux.js");
			var k = (e = null, t) => {
				switch (t.type) {
					case C.o:
					case C.n:
						return null;
					case C.m:
						return t.payload;
					default:
						return e
				}
			};
			const P = {};
			var S = (e = P, t) => {
					switch (t.type) {
						case C.o: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, a = Object(_.d)(n, r);
							return {
								...e,
								[a]: !0
							}
						}
						case C.n:
						case C.m: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, a = Object(_.d)(n, r);
							return {
								...e,
								[a]: !1
							}
						}
						default:
							return e
					}
				},
				T = Object(w.c)({
					error: k,
					pending: S
				});
			const B = {};
			var U = (e = B, t) => {
					switch (t.type) {
						case C.n: {
							const {
								fetchedToken: n,
								subredditId: r
							} = t.payload, a = Object(_.d)(r, n);
							return {
								...e,
								[a]: !0
							}
						}
						default:
							return e
					}
				},
				L = n("./src/reddit/actions/inContextModeration.ts");
			var A = (e = null, t) => {
				switch (t.type) {
					case L.a:
						return t.payload;
					default:
						return e
				}
			};
			const D = {};
			var F = (e = D, t) => {
					switch (t.type) {
						case C.n: {
							const {
								subredditId: e,
								after: n
							} = t.payload;
							return {
								[e]: n
							}
						}
						default:
							return e
					}
				},
				H = n("./node_modules/icepick/icepick.js");
			const R = {};
			var M = (e = R, t) => {
				switch (t.type) {
					case C.l:
					case C.n: {
						const {
							subredditId: n,
							bannedUsers: r
						} = t.payload;
						return Object(H.merge)(e, {
							[n]: r
						})
					}
					case C.s: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(H.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			var W = (e = null, t) => {
				switch (t.type) {
					case C.r:
					case C.q:
						return null;
					case C.p:
						return t.payload;
					default:
						return e
				}
			};
			var G = (e = !1, t) => {
					switch (t.type) {
						case C.r:
							return !0;
						case C.q:
						case C.p:
							return !1;
						default:
							return e
					}
				},
				K = Object(w.c)({
					error: W,
					pending: G
				});
			var z = (e = null, t) => {
					switch (t.type) {
						case C.r:
						case C.p:
							return null;
						case C.q: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				q = Object(w.c)({
					api: K,
					result: z
				});
			const V = {};
			var Z = (e = V, t) => {
					switch (t.type) {
						case C.n: {
							const {
								subredditId: n,
								bannedUserIds: r
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...r]
							} : {
								...e,
								[n]: r
							}
						}
						case C.s: {
							const {
								subredditId: n,
								userId: r
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== r)
							}
						}
						case C.l: {
							const {
								subredditId: n,
								bannedUserIds: r
							} = t.payload, a = r[0];
							return a && e[n] && -1 === e[n].indexOf(a) ? {
								[n]: [a, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				Y = Object(w.c)({
					api: T,
					fetchedTokens: U,
					inContext: A,
					loadMore: F,
					models: M,
					search: q,
					userOrder: Z
				});
			Object(j.a)({
				features: {
					banned: Y
				}
			});
			const Q = Object(o.a)(C.o),
				J = Object(o.a)(C.n),
				X = Object(o.a)(C.m),
				$ = (e, t = {}) => async (n, r, {
					apiContext: a
				}) => {
					const s = r(),
						o = t.after || "",
						i = Object(_.d)(e, o),
						c = s.features.banned.fetchedTokens[i];
					if (s.features.banned.api.pending[i] || c) return;
					n(Q({
						subredditId: e,
						fetchedToken: o
					}));
					const d = s.subreddits.models[e].name,
						l = await g(a(), d, t);
					l.ok ? n(J({
						...l.body,
						fetchedToken: o
					})) : n(X({
						subredditId: e,
						fetchedToken: o
					}))
				}, ee = Object(o.a)(C.r), te = Object(o.a)(C.q), ne = Object(o.a)(C.p), re = (e, t) => async (n, r, {
					apiContext: a
				}) => {
					const s = r().subreddits.models[e].name,
						o = {
							username: Object(x.a)(t)
						};
					n(ee());
					const i = await g(a(), s, o);
					i.ok ? n(te(i.body)) : n(ne(i.error))
				}, ae = Object(o.a)(C.l), se = Object(o.a)(C.s), oe = (e, t, n) => async (a, o, {
					apiContext: c
				}) => {
					const d = o(),
						u = d.subreddits.models[e].url,
						h = d.subreddits.models[e].name;
					t.username = Object(x.a)(t.username), a(Object(i.h)(n));
					const v = await ((e, t, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: m.jb.POST,
						data: {
							api_type: "json",
							ban_reason: n.reason,
							ban_message: n.banMessage,
							duration: n.duration,
							name: n.username,
							note: n.modNote,
							ban_context: n.contextId,
							type: "banned"
						}
					}))(c(), u, t);
					if (v.ok) {
						a(Object(i.e)(n));
						const e = {
							username: t.username
						};
						a(Object(l.f)({
							kind: I.b.SuccessMod,
							text: r.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const s = await g(c(), h, e);
						s.ok && a(ae(s.body))
					} else {
						a(Object(i.f)(n, v.error));
						const e = s()(v, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						a(Object(l.f)({
							kind: I.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ie = (e, t) => async (n, a, {
					apiContext: o
				}) => {
					const i = a().subreddits.models[e].url,
						c = await ((e, t, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: m.jb.POST,
							data: {
								api_type: "json",
								id: n,
								type: "banned"
							}
						}))(o(), i, t);
					if (c.ok) n(se({
						subredditId: e,
						userId: t
					})), n(Object(l.f)({
						kind: I.b.SuccessMod,
						text: r.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = s()(c, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(l.f)({
							kind: I.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ce = (e, t) => async (n, r) => {
					const a = r();
					await Promise.all([(async () => {
						if (!Object(O.b)(u.a.BAN_USER)(a) && !Object(E.O)(a, {
								subredditId: e
							})) {
							const t = Object(E.R)(a, {
								subredditId: e
							});
							await n(Object(d.o)(t.name))
						}
					})(), (async () => {
						const r = Object(N.rb)(a, {
							userName: t
						});
						if (!r) return;
						const s = Object(y.h)(a, {
							subredditId: e
						});
						s && s[r.id] || await n($(e, {
							username: t
						}))
					})()]), n(Object(c.i)(u.a.BAN_USER))
				}
		},
		"./src/reddit/actions/userFlair/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return a
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			}));
			var r = n("./src/lib/loadableAction/index.ts");
			const a = Object(r.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairChanged)),
				s = Object(r.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleUserFlairInSubreddit)),
				o = Object(r.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleAssignOwnFlairPermission)),
				i = Object(r.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.saveUserFlairTemplate)),
				c = Object(r.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.deleteUserFlairTemplate)),
				d = Object(r.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.reorderUserFlairTemplates)),
				l = Object(r.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairLoadedAndModalOpened))
		},
		"./src/reddit/components/BadgeCounter/index.m.less": function(e, t, n) {
			e.exports = {
				badgeCounter: "_1-nIsCaWhGBFN-L4ZHnbGp",
				mEmpty: "_3FX9lCQKNdKXkfBiSWCjSb"
			}
		},
		"./src/reddit/components/BadgeCounter/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/BadgeCounter/index.m.less"),
				c = n.n(i);
			t.a = ({
				className: e,
				isActive: t,
				showEmpty: n,
				unreadCount: r
			}) => t ? a.a.createElement("span", {
				className: Object(s.a)(e, c.a.badgeCounter, {
					[c.a.mEmpty]: n || r < 1
				})
			}, n || r < 1 ? "" : Object(o.b)(r)) : null
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r, a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/chat/toggle.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(r || (r = {}));
			const u = ({
				onStartChat: e,
				text: t,
				className: n,
				sendEvent: a,
				contextId: o,
				priority: i,
				Icon: c,
				redditStyle: u,
				isFullWidth: m,
				eventSource: p,
				onClick: b,
				onAddUserToQuickReplyList: f,
				children: h
			}) => {
				return s.a.createElement(d.t, {
					onClick: t => {
						if (b && b(t), e(), p === r.awardNotification) return f();
						a(Object(l.b)(o))
					},
					className: n,
					text: t,
					priority: i,
					Icon: c,
					redditStyle: u,
					isFullWidth: m
				}, h)
			};
			u.displayName = "ChatButton";
			const m = Object(o.b)(null, (e, {
				contextId: t,
				userId: n
			}) => ({
				onStartChat: () => {
					e(Object(i.b)(n, t))
				},
				onAddUserToQuickReplyList: () => {
					e(Object(i.a)(n))
				}
			}));
			t.b = m(Object(c.c)(u))
		},
		"./src/reddit/components/EditableImage/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_27zThB3Syksyv8gLdDJqep",
				container: "_27zThB3Syksyv8gLdDJqep",
				HitBox: "_1RlGOQJAoxE66cPOVTH0s",
				hitBox: "_1RlGOQJAoxE66cPOVTH0s",
				Image: "_1te2cn6lvn-YtGSv-hrM7g",
				image: "_1te2cn6lvn-YtGSv-hrM7g",
				ImageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				imageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				ImageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				imageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				LoadingIcon: "_3syvcMeczod-NOIewWIb8n",
				loadingIcon: "_3syvcMeczod-NOIewWIb8n",
				EditButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				editButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				profileCard: "eHsnwmpOgtfnBAgrWXQKq",
				EditIcon: "_3X4DuB4IpAlTY0XMdSI5q6",
				editIcon: "_3X4DuB4IpAlTY0XMdSI5q6"
			}
		},
		"./src/reddit/components/EditableImage/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/ImageInput/index.tsx"),
				c = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				d = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/models/ApiRequestState/index.ts"),
				u = n("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				m = n("./src/reddit/components/EditableImage/index.m.less"),
				p = n.n(m);
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				altText: e,
				children: t,
				className: n,
				isProfileCard: r,
				isLoading: m,
				imageUrl: b,
				onFileSelected: f
			}) => {
				const h = Object(s.e)(u.a);
				return a.a.createElement("div", {
					className: Object(o.a)(p.a.Container, n)
				}, a.a.createElement("label", {
					className: p.a.HitBox
				}, a.a.createElement("span", {
					className: p.a.ImageContainer,
					role: "presentation"
				}, b ? a.a.createElement("img", {
					alt: e,
					className: p.a.Image,
					src: b
				}) : t), a.a.createElement(i.a, {
					className: p.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(l.b)();
						f(e, t)
					},
					isPending: h ? m : void 0
				}), !m && a.a.createElement("div", {
					className: Object(o.a)(p.a.EditButton, {
						[p.a.profileCard]: r
					})
				}, a.a.createElement(d.a, {
					name: "add_media",
					className: p.a.EditIcon
				}))), m && a.a.createElement(c.a, {
					className: p.a.LoadingIcon,
					sizePx: 80
				}))
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/snoovatarModal.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/selectors/gold/awardIcon.ts"),
				l = n("./src/reddit/selectors/meta.ts"),
				u = n("./src/reddit/selectors/moderatorPermissions.ts"),
				m = n("./src/reddit/selectors/profile.ts"),
				p = n("./src/reddit/selectors/structuredStyles.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				f = n("./src/reddit/selectors/tooltip.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/selectors/userFlair.ts"),
				g = n("./src/reddit/selectors/userPrefs.ts"),
				x = n("./node_modules/fbt/lib/FbtPublic.js"),
				_ = n("./src/config.ts"),
				I = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				O = n("./src/lib/lessComponent.tsx"),
				y = n("./src/lib/prettyPrintNumber/index.ts"),
				E = n("./src/reddit/components/ChatButton/index.tsx"),
				N = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				C = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				j = n("./src/reddit/components/SubscribeButton/index.tsx"),
				w = n("./src/reddit/components/UserIcon/index.tsx"),
				k = n("./src/reddit/endpoints/profile/info.ts"),
				P = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				S = n("./src/reddit/icons/fonts/Info/index.tsx"),
				T = n("./src/reddit/icons/svgs/Admin/index.tsx");
			var B = e => a.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", null, a.a.createElement("path", {
					d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
				}))),
				U = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				L = n("./src/reddit/models/Gold/Award.ts"),
				A = n("./src/reddit/models/User/index.ts"),
				D = n("./src/reddit/components/HumanDate/index.tsx"),
				F = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				H = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				R = n("./src/reddit/actions/inContextModeration.ts"),
				M = n("./src/reddit/actions/modal.ts"),
				W = n("./src/reddit/actions/subredditModeration/ban.ts"),
				G = n("./src/reddit/constants/modals.ts"),
				K = n("./src/reddit/components/Hovercards/helpers.ts"),
				z = n("./src/reddit/icons/fonts/index.tsx"),
				q = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				V = n("./src/reddit/selectors/bannedUser.ts"),
				Z = n("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				Y = n.n(Z);
			const {
				fbt: Q
			} = n("./node_modules/fbt/lib/FbtPublic.js"), J = Object(o.c)({
				hasModMailPermissions: Object(u.b)(q.c.mail),
				isUserBanned: (e, t) => !!Object(V.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(h.rb)(e, {
					userName: t.username
				})
			});
			class X extends a.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: n,
						isUserBanned: r,
						onUnbanUser: s,
						sendEvent: o,
						toggleBanModal: i,
						toggleMuteModal: c
					} = this.props;
					return a.a.createElement("div", {
						className: e
					}, r ? a.a.createElement(K.a, {
						role: "button",
						onClick: () => {
							s(this.props.user.id), o(P.e(t))
						}
					}, a.a.createElement(z.a, {
						name: "ban",
						isFilled: !0,
						className: Y.a.icon
					}), Q._("Unban User", null, {
						hk: "1aASyW"
					})) : a.a.createElement(K.a, {
						role: "button",
						onClick: () => {
							i(), o(P.a(t))
						}
					}, a.a.createElement(z.a, {
						name: "ban",
						className: Y.a.icon
					}), Q._("Ban User", null, {
						hk: "3OhuLx"
					})), n && a.a.createElement(K.a, {
						role: "button",
						onClick: () => {
							c(), o(P.d(t))
						}
					}, a.a.createElement(z.a, {
						name: "mod_mute",
						className: Y.a.icon
					}), Q._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var $ = Object(s.b)(J, (e, {
					username: t,
					subredditId: n,
					contextId: r
				}) => ({
					onUnbanUser: t => e(Object(W.e)(n, t)),
					requestUserBanInfo: () => e(Object(W.c)(n, {
						username: t
					})),
					toggleBanModal: () => {
						e(Object(R.c)({
							username: t,
							subredditId: n,
							contextId: r
						})), e(Object(W.a)(n, t))
					},
					toggleMuteModal: () => {
						e(Object(R.d)({
							username: t,
							subredditId: n,
							contextId: r
						})), e(Object(M.i)(G.a.MUTE_USER))
					}
				}))(X),
				ee = n("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ne = Object(s.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(ee.g)(t.subredditId, t.username))
				}))(e => a.a.createElement(K.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(P.c(e.contextId))
					}
				}, a.a.createElement(z.a, {
					name: "tag",
					className: Y.a.icon
				}), te._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				re = n("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				ae = n.n(re);

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const oe = O.a.wrapped(w.a, "UserIcon", ae.a),
				ie = O.a.wrapped(j.a, "SubscribeButton", ae.a),
				ce = O.a.wrapped(E.b, "ChatButton", ae.a),
				de = O.a.wrapped(B, "KarmaIcon", ae.a),
				le = O.a.wrapped(U.a, "PremiumIcon", ae.a),
				ue = O.a.wrapped(I.a, "UserNameLink", ae.a),
				me = O.a.div("UserNameMetaData", ae.a),
				pe = O.a.div("MetaDataItem", ae.a),
				be = O.a.div("Bullet", ae.a),
				fe = O.a.div("UserNameContainer", ae.a),
				he = O.a.div("UserInfoContainer", ae.a),
				ve = O.a.div("PostKarma", ae.a),
				ge = O.a.div("CommentKarma", ae.a),
				xe = O.a.div("KarmaGrid", ae.a),
				_e = O.a.div("GenericKarma", ae.a),
				Ie = O.a.a("InfoLink", ae.a),
				Oe = O.a.div("KarmaCount", ae.a),
				ye = O.a.div("KarmaLabel", ae.a),
				Ee = O.a.div("GenericKarmaLabel", ae.a),
				Ne = O.a.div("BannerImage", ae.a),
				Ce = O.a.div("UserContainer", ae.a),
				je = O.a.div("BottomSpacer", ae.a),
				we = O.a.div("Container", ae.a),
				ke = e => a.a.createElement("div", null, a.a.createElement("div", null, a.a.createElement(ue, {
					to: `/user/${e.userName}/`
				}, e.title || e.userName), e.user.isEmployee && a.a.createElement(T.a, {
					className: ae.a.adminIcon,
					title: x.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && a.a.createElement(I.a, {
					to: "/premium"
				}, a.a.createElement(le, null))), a.a.createElement(me, null, a.a.createElement(pe, null, `u/${e.userName}`, a.a.createElement(be, null, "•")), a.a.createElement(pe, null, (e.user.createdUtc || e.user.created) && a.a.createElement(D.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				Pe = e => {
					const {
						showAwardKarma: t,
						user: {
							karma: n
						}
					} = e, r = {
						...k.a,
						...n
					};
					return t ? a.a.createElement(xe, null, a.a.createElement(_e, null, a.a.createElement(Oe, null, Object(y.b)(r.fromPosts)), a.a.createElement(Ee, null, x.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [x.fbt._plural(r.fromPosts)], {
						hk: "3K4oaH"
					}))), a.a.createElement(_e, null, a.a.createElement(Oe, null, Object(y.b)(r.fromComments)), a.a.createElement(Ee, null, x.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [x.fbt._plural(r.fromComments)], {
						hk: "3gKRx9"
					}))), a.a.createElement(_e, null, a.a.createElement(Oe, null, Object(y.b)(r.fromAwardsReceived)), a.a.createElement(Ee, null, x.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [x.fbt._plural(r.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), a.a.createElement(Ie, {
						href: L.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, a.a.createElement(S.a, {
						className: ae.a.infoIcon
					})))), a.a.createElement(_e, null, a.a.createElement(Oe, null, Object(y.b)(r.fromAwardsGiven)), a.a.createElement(Ee, null, x.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [x.fbt._plural(r.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), a.a.createElement(Ie, {
						href: L.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, a.a.createElement(S.a, {
						className: ae.a.infoIcon
					}))))) : a.a.createElement(he, null, a.a.createElement(de, null), a.a.createElement(ve, null, a.a.createElement(Oe, null, Object(y.b)(r.fromPosts)), a.a.createElement(ye, null, x.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [x.fbt._plural(r.fromPosts)], {
						hk: "3K4oaH"
					}))), a.a.createElement(ge, null, a.a.createElement(Oe, null, Object(y.b)(r.fromComments)), a.a.createElement(ye, null, x.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [x.fbt._plural(r.fromComments)], {
						hk: "3gKRx9"
					}))))
				},
				Se = e => {
					const {
						className: t,
						contextId: n,
						currentUser: r,
						hideNSFWPref: s,
						hoverId: o,
						isLoggedIn: i,
						onClickSnoovatar: c,
						origin: d,
						moderatorPermissions: l,
						prefersReducedAnimations: u,
						profile: m,
						sendEvent: p,
						showAwardKarma: b,
						style: f,
						subredditId: h,
						topAwardIcon: v,
						userName: g,
						user: I,
						userFlair: O,
						userIsBanned: y,
						userProfileStyles: E,
						acceptChats: C,
						isCommentAuthorBlocked: j
					} = e;
					if (!I) return a.a.createElement(we, {
						style: f
					});
					const w = !!r && Object(A.e)(r) === g,
						k = !!(null == r ? void 0 : r.snoovatarFullBodyAsset),
						S = I.accountIcon || `${_.a.assetPath}/img/snoo_user_placeholder.png`,
						T = l && l.flair,
						B = l && l.access,
						U = O && O.templateIds && O.templateIds.length > 0,
						L = O && O.displaySettings && O.displaySettings.isEnabled,
						{
							awardedLastMonth: D
						} = I,
						R = !!I.snoovatarFullBodyAsset,
						M = I.isNSFW && s;
					let W;
					return W = R ? !M && E && E.bannerBackgroundImage || void 0 : M ? `${_.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, a.a.createElement(we, {
						className: t,
						id: o,
						style: f
					}, !R && W && a.a.createElement(Ne, {
						style: {
							backgroundImage: `url('${W}')`
						}
					}), a.a.createElement(Ce, null, R ? a.a.createElement(H.a, {
						isHovercard: !0,
						bannerBackgroundImage: W,
						compact: !0,
						currentUserHasSnoovatar: k,
						isEmployee: I.isEmployee,
						isGold: I.isGold,
						isNSFW: I.isNSFW,
						isOwnProfile: w,
						onClickSnoovatar: c,
						prefersReducedAnimations: !!u,
						snoovatarUrl: I.snoovatarFullBodyAsset,
						title: null == m ? void 0 : m.title,
						userCreated: I.created,
						username: g,
						url: `/user/${e.userName}/`
					}) : a.a.createElement(fe, null, a.a.createElement(oe, {
						iconUrl: S,
						isNSFW: I.isNSFW,
						userName: g
					}), a.a.createElement(ke, {
						origin: d,
						title: null == m ? void 0 : m.title,
						user: I,
						userName: g
					})), a.a.createElement(Pe, {
						showAwardKarma: b,
						user: I
					}), D && a.a.createElement(F.a, {
						recentAwardings: D,
						topAwardIcon: v,
						username: g
					}), i && !w && !y && C && !j && a.a.createElement(ce, {
						contextId: n,
						userId: I.id,
						text: x.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), I.hasUserProfile && !y && !j && !w && I.enableFollowers && a.a.createElement(ie, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(P.g)(e ? "unfollow" : "follow", n),
						isFullWidth: !0,
						small: !0
					})), B && n && !w && h && a.a.createElement($, {
						contextId: n,
						subredditId: h,
						sendEvent: p,
						username: g
					}), T && n && U && L && h && a.a.createElement(ne, {
						contextId: n,
						subredditId: h,
						sendEvent: p,
						username: g
					}), a.a.createElement(N.i, {
						contextId: n,
						subredditId: h,
						user: I
					}), !(B || i) && a.a.createElement(je, null))
				},
				Te = Object(C.a)(Se),
				Be = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return a.a.createElement(Te, se({
						isOpen: t
					}, e))
				};
			Be.WrappedComponent = Se;
			var Ue = Be;
			const Le = Object(o.c)({
					activeTooltipId: f.a,
					currentUser: h.k,
					isLoggedIn: h.J,
					hideNSFWPref: h.C,
					moderatorPermissions: (e, {
						subredditId: t
					}) => t ? Object(u.m)(e, {
						subredditId: t
					}) : void 0,
					origin: l.j,
					prefersReducedAnimations: g.c,
					profile: (e, {
						userName: t
					}) => Object(m.j)(e, {
						profileName: t
					}),
					showAwardKarma: (e, t) => {
						return Object(f.a)(e) === t.tooltipId
					},
					topAwardIcon: (e, {
						userName: t
					}) => Object(d.e)(e, {
						userName: t,
						minSize: 32
					}),
					user: h.rb,
					userFlair: (e, {
						subredditId: t
					}) => t ? Object(v.d)(e, {
						subredditId: t
					}) : void 0,
					userIsBanned: (e, t) => !!Object(b.l)(t) && Object(b.cb)(e, t),
					userProfileStyles: (e, t) => Object(p.m)(e, Object(m.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const n = Object(m.h)(e, {
							profileName: t.userName
						});
						return !n || n.acceptChats
					}
				}),
				Ae = Object(s.b)(Le, (e, t) => ({
					onClickSnoovatar: () => e(Object(i.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(c.i)())
				}));
			t.a = Ae(e => a.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, a.a.createElement(Ue, {
				activeTooltipId: e.activeTooltipId,
				contextId: e.contextId,
				currentUser: e.currentUser,
				isLoggedIn: e.isLoggedIn,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				moderatorPermissions: e.moderatorPermissions,
				onClickSnoovatar: e.onClickSnoovatar,
				onHideTooltip: e.onHideTooltip,
				origin: e.origin,
				prefersReducedAnimations: e.prefersReducedAnimations,
				profile: e.profile,
				sendEvent: e.sendEvent,
				showAwardKarma: e.showAwardKarma,
				subredditId: e.subredditId,
				topAwardIcon: e.topAwardIcon,
				tooltipId: e.tooltipId,
				tooltipType: e.tooltipType,
				user: e.user,
				userFlair: e.userFlair,
				userIsBanned: e.userIsBanned,
				userName: e.userName,
				userProfileStyles: e.userProfileStyles,
				acceptChats: e.acceptChats,
				isCommentAuthorBlocked: e.isCommentAuthorBlocked,
				collapsed: e.collapsed
			})))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less": function(e, t, n) {
			e.exports = {
				icon: "xd9vrdS8_V6IVus6-mHAM"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/reddit/components/Hovercards/helpers.ts"),
				o = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				i = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				d = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			const m = e => Object(i.a)(e.id) ? e.belongsTo.id : e.subredditId;
			class p extends a.a.Component {
				constructor() {
					super(...arguments), this.sendEvent = () => this.props.sendEvent(Object(u.f)(this.props.postOrComment.id))
				}
				render() {
					const {
						props: e
					} = this, t = Object(s.b)({
						author: e.author,
						itemId: e.postOrComment.id,
						tooltipIdPrefix: e.tooltipIdPrefix || d.a,
						tooltipType: e.tooltipType
					}), n = `${t}-hover-id`, r = e.author || e.postOrComment.author;
					return a.a.createElement(o.a, {
						authorOrSubredditName: r,
						className: e.hoverDivClassName,
						hoverId: n,
						sendHoverEvent: this.sendEvent,
						tooltipId: t
					}, e.children, a.a.createElement(c.a, {
						className: e.className,
						contextId: e.postOrComment.id,
						hoverId: n,
						sendEvent: e.sendEvent,
						subredditId: m(e.postOrComment),
						tooltipId: t,
						tooltipType: e.tooltipType,
						userName: r,
						isCommentAuthorBlocked: e.isCommentAuthorBlocked,
						collapsed: e.collapsed
					}))
				}
			}
			t.default = Object(l.c)(p)
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less": function(e, t, n) {
			e.exports = {
				ChatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				chatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				UserIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				userIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				SubscribeButton: "yFByQg8RzENoqoOt0ysAk",
				subscribeButton: "yFByQg8RzENoqoOt0ysAk",
				KarmaIcon: "_2XmHHGriP3EYLhv_9BG6OT",
				karmaIcon: "_2XmHHGriP3EYLhv_9BG6OT",
				PremiumIcon: "_3YJqiyvx8zFvv30tmg36S-",
				premiumIcon: "_3YJqiyvx8zFvv30tmg36S-",
				Token: "_2U0P3n4v75sHsDvQmSKNz3",
				token: "_2U0P3n4v75sHsDvQmSKNz3",
				UserNameLink: "_1oT4pd8QlZQZ1wGOk9VAaQ",
				userNameLink: "_1oT4pd8QlZQZ1wGOk9VAaQ",
				UserNameMetaData: "_1wu7a98opA-mU9WUQpJIuF",
				userNameMetaData: "_1wu7a98opA-mU9WUQpJIuF",
				GildedLastMonthDisplay: "_19NlUDUSw7ra6wC0luJwKV",
				gildedLastMonthDisplay: "_19NlUDUSw7ra6wC0luJwKV",
				Bullet: "_2dfF2p_dwLpL5C-8pAvdbL",
				bullet: "_2dfF2p_dwLpL5C-8pAvdbL",
				MetaDataItem: "RcL4UXH2ABHT3YpYzu3ms",
				metaDataItem: "RcL4UXH2ABHT3YpYzu3ms",
				UserNameContainer: "J9OjkO5NR8gsgJUQrk2Ft",
				userNameContainer: "J9OjkO5NR8gsgJUQrk2Ft",
				UserInfoContainer: "_3l7ptRjFJYo-fcXXajRpqn",
				userInfoContainer: "_3l7ptRjFJYo-fcXXajRpqn",
				PostKarma: "_2T3kavHwxOaL76xfa9id7",
				postKarma: "_2T3kavHwxOaL76xfa9id7",
				CommentKarma: "_1rFYsN1yoSDrDTRfqagI5r",
				commentKarma: "_1rFYsN1yoSDrDTRfqagI5r",
				KarmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				karmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				GenericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				genericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				KarmaCount: "_18aX_pAQub_mu1suz4-i8j",
				karmaCount: "_18aX_pAQub_mu1suz4-i8j",
				KarmaLabel: "_1b2tgHrvjFKgTLyFIQ9B6T",
				karmaLabel: "_1b2tgHrvjFKgTLyFIQ9B6T",
				GenericKarmaLabel: "EtlFWXCmzvjyd92eABb-5",
				genericKarmaLabel: "EtlFWXCmzvjyd92eABb-5",
				InfoLink: "_2qjqkYRKCjuqB4VRr2duCK",
				infoLink: "_2qjqkYRKCjuqB4VRr2duCK",
				BannerImage: "_1l9DXI5VaWcxjbz23v5b6X",
				bannerImage: "_1l9DXI5VaWcxjbz23v5b6X",
				UserContainer: "_m7PpFuKATP9fZF4xKf9R",
				userContainer: "_m7PpFuKATP9fZF4xKf9R",
				BottomSpacer: "_2D-HmwsbsNkTnIiPO4zcqb",
				bottomSpacer: "_2D-HmwsbsNkTnIiPO4zcqb",
				UserActionLink: "_1Sy8bDpK6p4JRHy1yB1Xyk",
				userActionLink: "_1Sy8bDpK6p4JRHy1yB1Xyk",
				Container: "_1sbZnfdaxhCOFVUCJ3Z75m",
				container: "_1sbZnfdaxhCOFVUCJ3Z75m",
				adminIcon: "_2aJuBKF3mo4YJS4YFkeU9a"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, n) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			})), n.d(t, "b", (function() {
				return I
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/lessComponent.tsx"),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/profile/index.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/selectors/tooltip.ts");
			const u = Object(i.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var m = Object(o.b)(u, (e, t) => ({
					onCloseUserDropdown: () => e(Object(d.i)()),
					onOpenUserDropdown: async () => {
						e(Object(d.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && (await e(Object(c.d)(t.authorOrSubredditName)), t.sendHoverEvent())
					}
				})),
				p = n("./src/reddit/actions/subreddit.ts");
			const b = Object(i.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var f = Object(o.b)(b, (e, t) => ({
					onCloseUserDropdown: () => e(Object(d.i)()),
					onOpenUserDropdown: async () => {
						var n;
						e(Object(d.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.u)(t.authorOrSubredditName)), null === (n = t.onShow) || void 0 === n || n.call(t)
					}
				})),
				h = n("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				v = n.n(h);
			class g extends a.a.Component {
				constructor() {
					super(...arguments), this.closeHovercardTimeoutId = 0, this.openHovercardTimeoutId = 0, this.isHovering = !1, this.hoverEl = void 0, this.onHoverElMouseEnter = () => {
						this.isHovering = !0
					}, this.onHoverElMouseLeave = () => {
						this.isHovering = !1
					}, this.onMouseEnter = e => {
						this.closeHovercardTimeoutId && clearTimeout(this.closeHovercardTimeoutId), this.openHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.dropdownIsOpen || this.props.onOpenUserDropdown()
						}, 500)
					}, this.onMouseLeave = () => {
						this.openHovercardTimeoutId && clearTimeout(this.openHovercardTimeoutId), this.closeHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.onCloseUserDropdown()
						}, 300)
					}
				}
				componentDidMount() {
					const e = document.getElementById(this.props.hoverId);
					e && (this.hoverEl = e, this.addHoverListeners(this.hoverEl))
				}
				componentWillUnmount() {
					this.hoverEl && this.removeHoverListeners(this.hoverEl), this.hoverEl = void 0, this.openHovercardTimeoutId && window.clearTimeout(this.openHovercardTimeoutId)
				}
				addHoverListeners(e) {
					e.addEventListener("mouseenter", this.onHoverElMouseEnter), e.addEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				removeHoverListeners(e) {
					e.removeEventListener("mouseenter", this.onHoverElMouseEnter), e.removeEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				render() {
					const {
						children: e,
						className: t
					} = this.props;
					return a.a.createElement("div", {
						className: t,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, e)
				}
			}
			const x = s.a.wrapped(g, "HoverDiv", v.a),
				_ = m(x),
				I = f(x)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, n) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/layout/row/Inline/index.tsx"),
				s = n("./src/reddit/components/Hovercards/helpers.m.less"),
				o = n.n(s);
			const i = r.a.wrapped(a.a, "UserActionItem", o.a),
				c = e => {
					const {
						author: t,
						itemId: n,
						subredditName: r,
						tooltipIdPrefix: a,
						tooltipType: s
					} = e;
					let o = a;
					return n && (o = `${o}--${n}`), s && (o = `${o}--${s}`), t && (o = `${o}--${t}`), r && (o = `${o}--${r}`), o
				}
		},
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return h
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/timeAgo/index.ts"),
				o = n("./src/reddit/hooks/useLocale.ts");
			var i = function({
					seconds: e,
					...t
				}) {
					var n;
					const r = Object(o.a)(),
						i = {
							...t,
							locale: null !== (n = t.locale) && void 0 !== n ? n : r
						};
					return a.a.createElement(a.a.Fragment, null, Object(s.d)(e, i))
				},
				c = n("./src/lib/humanizeDate/index.ts");
			var d = function({
					seconds: e,
					...t
				}) {
					var n;
					const r = Object(o.a)(),
						s = {
							...t,
							locale: null !== (n = t.locale) && void 0 !== n ? n : r
						};
					return a.a.createElement(a.a.Fragment, null, Object(c.a)(e, s))
				},
				l = n("./src/lib/constants/index.ts");
			var u = function({
					seconds: e,
					locale: t
				}) {
					const n = Object(o.a)(),
						r = null != t ? t : n;
					return a.a.createElement(a.a.Fragment, null, function(e, t = l.D) {
						const n = e * l.Rb;
						return new Date(n).toLocaleString(t, {
							weekday: "short",
							month: "short",
							year: "numeric",
							day: "2-digit",
							hour: "2-digit",
							minute: "2-digit",
							second: "2-digit",
							timeZoneName: "long"
						})
					}(e, r))
				},
				m = n("./node_modules/fbt/lib/FbtPublic.js"),
				p = n("./src/lib/eventTools/index.ts");

			function b(e, t = l.D) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function f(e, t, n = !1, r = l.D) {
				const a = Object(p.e)(e, t),
					s = new Date(e * l.Rb);
				let o;
				if (a === p.a.Live || n) return m.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return a === p.a.Future ? o = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(p.b)(e) >= 5 ? b(s, r) : function(e, t = l.D) {
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(s, r) : a === p.a.Past && (o = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : b(s, r)), `${o} @ ${function(e,t=l.D){return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(s,r)}`
			}
			var h = function({
				startTime: e,
				endTime: t,
				isLive: n,
				locale: r
			}) {
				const s = Object(o.a)(),
					i = null != r ? r : s;
				return a.a.createElement(a.a.Fragment, null, f(e, t, n, i))
			};
			n("./src/lib/humanizeUTCDate/index.tsx")
		},
		"./src/reddit/components/InboxBanner/Banner.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/components/InboxBanner/index.m.less"),
				d = n.n(c);
			t.a = ({
				className: e,
				closeButtonText: t,
				closeIcon: n,
				descriptionText: a,
				primaryButtonText: c,
				titleText: l,
				onClose: u,
				onClick: m
			}) => s.a.createElement("div", {
				className: Object(r.a)(d.a.banner, e)
			}, s.a.createElement("div", {
				className: d.a.bannerTitleContainer
			}, l && s.a.createElement("h4", {
				className: d.a.bannerTitle
			}, l), n && s.a.createElement(o.t, {
				onClick: u,
				Icon: Object(i.b)("close_fill"),
				className: Object(r.a)(d.a.closeIcon, d.a.closeButton),
				size: o.d.XXS,
				priority: o.c.Plain
			})), a && s.a.createElement("p", {
				className: d.a.bannerDescription
			}, a), s.a.createElement("div", {
				className: d.a.bannerButtonsContainer
			}, c && s.a.createElement(o.t, {
				text: c,
				priority: o.c.Tertiary,
				className: Object(r.a)(d.a.button, d.a.primaryButton),
				size: o.d.XS,
				onClick: m
			}), t && s.a.createElement(o.t, {
				text: t,
				onClick: u,
				priority: o.c.Plain,
				size: o.d.XS,
				className: Object(r.a)(d.a.button, d.a.closeButton)
			})))
		},
		"./src/reddit/components/InboxBanner/PolicyBanner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/reddit/components/InboxBanner/Banner.tsx"),
				i = n("./src/reddit/helpers/trackers/inbox.ts"),
				c = n("./src/reddit/hooks/useTracking.ts"),
				d = n("./src/reddit/components/InboxBanner/index.m.less"),
				l = n.n(d);
			const u = ({
				onClose: e,
				pageType: t
			}) => {
				const n = Object(c.a)(),
					a = r.fbt._("We’ve updated our {userAgreement} and {privacyPolicy}. Take a look, as the changes take effect September 12, 2021.", [r.fbt._param("userAgreement", s.a.createElement("a", {
						className: l.a.underlineLink,
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "User Agreement")), r.fbt._param("privacyPolicy", s.a.createElement("a", {
						className: l.a.underlineLink,
						href: "https://www.redditinc.com/policies/privacy-policy",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "Privacy Policy"))], {
						hk: "3bGC4g"
					});
				return s.a.createElement(o.a, {
					className: l.a.policyBanner,
					titleText: r.fbt._("Reddit’s User Agreement & Privacy Policy", null, {
						hk: "32fxCY"
					}),
					descriptionText: a,
					primaryButtonText: r.fbt._("Ok", null, {
						hk: "1IJxzv"
					}),
					onClick: r => {
						r.stopPropagation(), e(), n(Object(i.f)(t, i.a.Confirm))
					}
				})
			}
		},
		"./src/reddit/components/InboxBanner/index.m.less": function(e, t, n) {
			e.exports = {
				underlineLink: "_3vOO3WyD7yteL4Rr9E1i2y",
				banner: "_34mO86zNIysmcISYIe8gVT",
				bannerTitleContainer: "rh7yf_ejK6H75L6jZkb6C",
				bannerTitle: "V_VLkmdSrXqz92-5vad5F",
				bannerDescription: "_1vbdR0mal1nPuuTOZIemLg",
				closeButton: "-Fi_Lr4OQ6XfCIiufmgxa",
				bannerButtonsContainer: "_1a9VL63O5el1YN7RuPoDLy",
				button: "_1mejKTw8yWGmudymV6GufX",
				primaryButton: "_1mR2YFl21PdJDX9T7ykA7c",
				welcomeBanner: "_3QWgBcfZuqQ6TlxZa6uYkS",
				dnPromptBanner: "_3IIpKn1IlCXgko4sLMEie1",
				policyBanner: "GLgkxGZkPymWBWeRISXBe",
				modalHeader: "_2Ggqgl_RyXu2U-mPYZSaCk",
				modalTitle: "_2C3YUpN8pGzseZOBK0tl0I",
				modalCloseIcon: "_2BTQI8_1TIwwfdecOP_j6o",
				modalListItem: "-sXLpWAGj2HMFvzRvH_bC",
				modalListIcon: "_3UO2hA0CsOqKl1bYybPZGs",
				wrappedRedditBanner: "_3lPlfNiwLG6b9WE7zxkkU5",
				bannerContainer: "V5Q75l1gWtGpBZEehJiGH",
				bannerImage: "_2zetWw7f4W-0OWrUYJHPQ-",
				bannerDataContainer: "SIz6ozr7aqewYGVSLfSf6",
				bannerLogo: "_3vKs7F-vWpFg20NtGjjN62"
			}
		},
		"./src/reddit/components/InboxTooltip/Component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return X
			})), n.d(t, "b", (function() {
				return ne
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/lib/notifications/index.ts"),
				i = n("./src/lib/notifications/constants.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/BadgeCounter/index.tsx"),
				u = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				m = n("./node_modules/lodash/omit.js"),
				p = n.n(m),
				b = n("./src/reddit/components/InboxBanner/Banner.tsx"),
				f = n("./src/reddit/components/InboxBanner/index.m.less"),
				h = n.n(f);
			const v = ({
				onClose: e,
				onTurnOnBrowserNotifications: t
			}) => {
				return s.a.createElement(b.a, {
					className: h.a.dnPromptBanner,
					titleText: r.fbt._("Don’t miss out on updates — Turn on desktop notifications.", null, {
						hk: "10oNqB"
					}),
					onClose: t => {
						t.stopPropagation(), e()
					},
					closeIcon: !0,
					primaryButtonText: r.fbt._("Turn On", null, {
						hk: "3hywR9"
					}),
					closeButtonText: r.fbt._("No Thanks", null, {
						hk: "2GQOmV"
					}),
					onClick: n => {
						t(), e()
					}
				})
			};
			var g = n("./src/reddit/components/InboxBanner/PolicyBanner.tsx"),
				x = n("./src/config.ts"),
				_ = n("./src/reddit/controls/Button/index.tsx"),
				I = n("./src/reddit/controls/InternalLink/index.tsx"),
				O = n("./src/reddit/icons/fonts/index.tsx"),
				y = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				E = n("./src/reddit/routes/wrappedreddit/index.ts");
			const N = {
					background: `url(${x.a.assetPath}/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png)`,
					backgroundSize: "cover"
				},
				C = ({
					onClose: e
				}) => s.a.createElement("div", {
					className: Object(c.a)(h.a.banner, h.a.wrappedRedditBanner),
					style: N
				}, s.a.createElement(I.a, {
					to: E.b,
					className: h.a.bannerContainer,
					onClick: e
				}, s.a.createElement("div", {
					className: h.a.bannerDataContainer
				}, s.a.createElement("div", {
					className: h.a.bannerTitleContainer
				}, s.a.createElement(y.a, {
					className: h.a.bannerLogo
				}), s.a.createElement("h4", {
					className: h.a.bannerTitle
				}, r.fbt._("Reddit Recap", null, {
					hk: "tRxDK"
				}))), s.a.createElement("p", {
					className: h.a.bannerDescription
				}, r.fbt._("It’s that time of the year. Come check out your 2021 highlights on Reddit.", null, {
					hk: "eufBA"
				}))), s.a.createElement("img", {
					alt: r.fbt._("Image Banner for Reddit Recap", null, {
						hk: "1K2v1e"
					}),
					className: h.a.bannerImage,
					src: `${x.a.assetPath}/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png`
				})), s.a.createElement(_.t, {
					onClick: e,
					Icon: Object(O.b)("close_fill"),
					className: Object(c.a)(h.a.closeIcon, h.a.closeButton),
					size: _.d.XXS,
					priority: _.c.Plain
				}));
			var j = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				w = n("./src/reddit/components/ResizeSensor/index.tsx"),
				k = n("./src/reddit/components/InboxTooltip/index.m.less"),
				P = n.n(k);
			const S = 3;
			class T extends s.a.Component {
				constructor() {
					super(...arguments), this.ref = s.a.createRef(), this.handleResize = () => {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						e !== this.props.notificationHeight && this.props.setNotificationHeight(e, this.props.index)
					}
				}
				componentDidMount() {
					if (this.props.index + 1 <= S) {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						this.props.setNotificationHeight(e, this.props.index)
					}
				}
				render() {
					const {
						activeOverflowMenuId: e,
						decreaseSubredditNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: r,
						hideSubredditNotifications: a,
						blockAwarder: o,
						index: i,
						isInboxPostEmbedEnabled: c,
						markNotificationAsRead: d,
						notification: l,
						setActiveOverflowMenuId: u,
						onItemClick: m
					} = this.props, p = i + 1 <= S;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						ref: this.ref,
						className: P.a.notificationResizeWrapper
					}, s.a.createElement(j.a, {
						activeOverflowMenuId: e,
						decreaseSubredditNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: r,
						hideSubredditNotifications: a,
						isInboxPostEmbedEnabled: c,
						isInTooltip: !0,
						markNotificationAsRead: d,
						notification: l,
						setActiveOverflowMenuId: u,
						onItemClick: m,
						blockAwarder: o
					}), !!p && s.a.createElement(w.a, {
						onResize: this.handleResize
					})))
				}
			}
			var B = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				U = n("./src/reddit/helpers/trackers/inbox.ts"),
				L = n("./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/EmptyStateComponent.tsx");

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const D = {},
				F = "",
				H = 0,
				R = "200px",
				M = "250px",
				W = "270px",
				G = 100,
				K = .5,
				z = 5;
			class q extends s.a.Component {
				constructor() {
					super(...arguments), this.container = s.a.createRef(), this.state = {
						notificationHeights: D,
						currentNotificationCursorIndex: -1
					}, this.resetOverflowMenu = () => {
						this.props.activeOverflowMenuId.length > H && this.props.setActiveOverflowMenuId(F)
					}, this.getContainerHeight = () => {
						const {
							notificationHeights: e
						} = this.state, {
							isDNInboxPromptBannerEnabled: t,
							isInboxPrivacyPolicyBannerEnabled: n,
							isLoggedIn: r
						} = this.props, a = t || n;
						let s = 0;
						for (const o in e) s += e[o];
						return 0 === s ? a ? M : r ? R : W : (a && (s += G), s)
					}, this.setNotificationHeight = (e, t) => {
						this.setState(n => ({
							notificationHeights: {
								...n.notificationHeights,
								[t]: e
							}
						}))
					}, this.updateCurrentCursorIndex = () => {
						const {
							notifications: e
						} = this.props, {
							currentNotificationCursorIndex: t
						} = this.state, n = t + z, r = n > e.length ? n : e.length - 1;
						this.setState({
							currentNotificationCursorIndex: r
						})
					}, this.renderNotifications = () => {
						const e = p()(this.props, ["notifications"]),
							{
								notificationHeights: t,
								currentNotificationCursorIndex: n
							} = this.state,
							{
								isInboxInfiniteScrollEnabled: r,
								notifications: a
							} = this.props,
							o = a.length > n + z;
						return (r && a.length > 0 && o ? a.slice(0, n + 1) : a).map((n, r) => s.a.createElement(T, A({}, e, {
							index: r,
							key: r,
							notification: n,
							notificationHeight: t[r],
							setNotificationHeight: this.setNotificationHeight
						})))
					}, this.loadNotifications = e => {
						const {
							cursor: t,
							fetchNotifications: n,
							isInboxInfiniteScrollEnabled: r,
							notifications: a
						} = this.props;
						if (e.isIntersecting) {
							const e = a.length > this.state.currentNotificationCursorIndex + z;
							this.props.notifications.length > 0 && r && e ? this.updateCurrentCursorIndex() : t && n({
								after: t,
								first: z
							})
						}
					}
				}
				componentDidMount() {
					const e = this.container && this.container.current;
					e && e.addEventListener("scroll", this.resetOverflowMenu)
				}
				componentWillUnmount() {
					const e = this.container && this.container.current;
					e && e.removeEventListener("scroll", this.resetOverflowMenu), this.resetOverflowMenu()
				}
				render() {
					const {
						hasNextPage: e,
						isDNInboxPromptBannerEnabled: t,
						isInboxPrivacyPolicyBannerEnabled: n,
						isInboxInfiniteScrollEnabled: r,
						isLoggedIn: a,
						isPending: o,
						notifications: i,
						setDesktopNotificationsPromptSeen: c,
						setInboxPrivacyPolicyBannerSeen: d,
						showBrowserNotificationsPermissionSettings: l,
						isWrappedRedditBannerEnabled: m,
						setDesktopNotificationWrappedRedditBannerSeen: p
					} = this.props, b = !(!i || !i.length), f = this.getContainerHeight(), h = i.length > this.state.currentNotificationCursorIndex + z, x = n || t || m;
					return s.a.createElement("div", {
						className: P.a.notificationList,
						ref: this.container,
						style: b ? {
							height: f,
							maxHeight: f
						} : {
							minHeight: R
						}
					}, x && s.a.createElement("div", {
						className: P.a.notificationBannerContainer
					}, n && s.a.createElement(g.a, {
						onClose: d,
						pageType: U.b.MiniInbox
					}), t && s.a.createElement(v, {
						onTurnOnBrowserNotifications: l,
						onClose: c
					}), m && s.a.createElement(C, {
						onClose: p
					})), !b && o && s.a.createElement(B.a, null), !b && !o && s.a.createElement(L.a, {
						isBannerEnabled: x,
						isLoggedIn: a,
						inTooltip: !0
					}), b && this.renderNotifications(), r && b && !o && (e || h) && s.a.createElement(u.a, {
						onChange: this.loadNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: K
					}, s.a.createElement("div", null)))
				}
			}
			var V = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts"),
				Z = n("./src/reddit/helpers/localStorage/index.ts");
			var Y = n("./src/reddit/hooks/useInboxPrivacyPolicyBannerSeen.ts"),
				Q = n("./src/reddit/hooks/useTracking.ts");

			function J() {
				return (J = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const X = [],
				$ = d.a.div("StyledDropdown", P.a),
				ee = ({
					isLoggedIn: e,
					onMessagesClick: t,
					onBarClick: n,
					markAllAsRead: o,
					messagesBadgeCount: i,
					sendInboxClickSettings: d
				}) => {
					const u = !!i,
						m = Object(a.useCallback)(() => {
							t(), n()
						}, [t, n]),
						p = Object(a.useCallback)(() => {
							d(), n()
						}, [d, n]);
					return s.a.createElement("nav", {
						className: P.a.topNav
					}, s.a.createElement("span", {
						className: P.a.topNavTitle
					}, r.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), e && s.a.createElement("span", {
						className: P.a.topNavLinks
					}, s.a.createElement("span", {
						className: P.a.messagesLinkContainer
					}, s.a.createElement(I.a, {
						className: Object(c.a)(P.a.messagesLink, {
							[P.a.mActive]: u
						}),
						onClick: m,
						to: u ? "/message/unread" : "/message/messages"
					}, r.fbt._("Messages", null, {
						hk: "hulKY"
					}), s.a.createElement(l.a, {
						className: P.a.badgeCount,
						isActive: u,
						unreadCount: i
					}))), s.a.createElement("button", {
						className: P.a.navLink,
						onClick: o
					}, s.a.createElement(O.a, {
						name: "mark_read",
						className: P.a.icon
					})), s.a.createElement(I.a, {
						className: P.a.navLink,
						onClick: p,
						to: "/settings/notifications"
					}, s.a.createElement(O.a, {
						name: "settings",
						className: P.a.icon
					}))))
				},
				te = e => s.a.createElement("div", {
					className: P.a.bottomBar
				}, s.a.createElement(I.a, {
					className: P.a.bottomLink,
					onClick: () => {
						e.sendInboxClickSeeAll(), e.onBarClick()
					},
					to: "/notifications"
				}, r.fbt._("See All", null, {
					hk: "3L3tFc"
				}))),
				ne = e => {
					const t = Object(Q.a)(),
						{
							clearMessageTabBadgeCount: n,
							inboxBadgeCount: r,
							isPending: c,
							messagesBadgeCount: d,
							notifications: l,
							hideTooltip: u,
							isInboxPolicyBannerEnabled: m,
							isLoggedIn: p,
							isPushNotificationsSupported: b,
							isWrappedRedditBannerEnabled: f,
							userId: h
						} = e,
						[v, g] = function(e) {
							const [t, n] = Object(a.useState)(Object(Z.t)(e));
							return [t, Object(a.useCallback)(() => {
								n(!0), Object(Z.Ab)(e)
							}, [])]
						}(h),
						[x, _] = Object(V.a)(h),
						[I, O] = Object(Y.a)(h),
						y = !(!l || !l.length),
						E = Object(o.a)(),
						N = E === i.a.Closed || E === i.a.Default || E === i.a.Denied,
						C = b && N && !x;
					return s.a.createElement($, null, s.a.createElement("div", {
						className: P.a.tooltipContainer
					}, s.a.createElement(ee, {
						markAllAsRead: () => {
							e.markAllAsRead(), t(Object(U.g)({
								isMiniInbox: !0
							}))
						},
						messagesBadgeCount: d,
						onMessagesClick: () => {
							t(Object(U.p)({
								badgeCount: r,
								tab: U.e.Messages
							})), t(Object(U.h)()), n()
						},
						sendInboxClickSettings: () => t(Object(U.m)(U.b.MiniInbox)),
						onBarClick: u,
						isLoggedIn: p
					}), s.a.createElement(q, J({}, e, {
						isPending: c,
						onItemClick: u,
						setDesktopNotificationsPromptSeen: _,
						isDNInboxPromptBannerEnabled: C,
						isInboxPrivacyPolicyBannerEnabled: m && !I,
						setInboxPrivacyPolicyBannerSeen: O,
						isWrappedRedditBannerEnabled: f && !v,
						setDesktopNotificationWrappedRedditBannerSeen: () => {
							g(), t(Object(U.o)())
						}
					})), (y || c) && s.a.createElement(te, {
						sendInboxClickSeeAll: () => t(Object(U.l)()),
						onBarClick: u
					})))
				}
		},
		"./src/reddit/components/InboxTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				carot: "_389RY3FytRs4F82-BLVEiq",
				StyledDropdown: "_3fRnnkCBwqAZG6nmxhTKHr",
				styledDropdown: "_3fRnnkCBwqAZG6nmxhTKHr",
				tooltipContainer: "_3oNU8Gzy2V3jDPhFfeEFbD",
				topNav: "F0hrtz76LlopbY9X0wtDo",
				topNavTitle: "wdFbe8PT7DInxaiHo2Me1",
				messagesLinkContainer: "_1581SeO-Xb1j1kfhIRrIyB",
				topNavLinks: "_1R0ZV71kh7uwDXo7fn1eDk",
				messagesLink: "_27rjoZBkLhiqLLjBu-xU_p",
				"m-active": "_29xCmtH_l8UtRn8IP08VLB",
				mActive: "_29xCmtH_l8UtRn8IP08VLB",
				badgeCount: "_1mrhJHegVozrNeTH7r5svN",
				navLink: "_2l1d6HSQ764u0JcvRSEJXD",
				notificationList: "_2MId4QR3fPm4RPlrSTZg_E",
				notificationResizeWrapper: "_3PWmWL3sMw23-xBHydcnPf",
				emptyState: "_17HPdVVhdV3LWBjzHwGlhA",
				emptyTitle: "_2CY3n2AMoj0af7gQhj9dfI",
				emptyDescription: "HxBuWRTAFa8y8bMiQKdSJ",
				bottomBar: "_8INvnNiEMHRndJ0M-LiY",
				bottomLink: "X1WC7m4hrFQNzINreBRsv",
				icon: "_3pDOQfbIbQuT4PBwPGp85E",
				BellOutline: "SBkEJxL8i3eNB9EZn7AAz",
				bellOutline: "SBkEJxL8i3eNB9EZn7AAz",
				notificationBannerContainer: "_2prSjBmU3TS_Liup8DFR-2",
				welcomeTooltipContainer: "_1OZgaZvEs6sdhMUCqaUCW_",
				closeButton: "_3fWRL_DhsIqXjpW4eXDwmR",
				CloseIcon: "_2xK-Knp1-SUm_DxX4Ak1T0",
				closeIcon: "_2xK-Knp1-SUm_DxX4Ak1T0",
				tooltipTitle: "_3EmopbfaUR0bemuuUcEcko",
				tooltipDescription: "_3MtkPXIDbG9Hf6YeNOxAxv"
			}
		},
		"./src/reddit/components/NotificationUnit/Loader.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(r.a)({
				resolved: {},
				chunkName: () => "NotificationUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("NotificationUnit").then(n.bind(null, "./src/reddit/components/NotificationUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/NotificationUnit/index.tsx"
				}
			});
			t.a = a
		},
		"./src/reddit/components/NotificationUnit/Placeholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/reddit/components/NotificationUnit/index.m.less"),
				o = n.n(s);
			const i = () => a.a.createElement("li", {
					className: o.a.placeholderWrapper
				}, a.a.createElement("span", {
					className: o.a.placeholderAvatar
				}), a.a.createElement("span", {
					className: o.a.placeholderContent
				})),
				c = () => a.a.createElement("ol", null, a.a.createElement(i, null), a.a.createElement(i, null), a.a.createElement(i, null))
		},
		"./src/reddit/components/NotificationUnit/index.m.less": function(e, t, n) {
			e.exports = {
				notificationItem: "_3mUSJN4kdLCGjq-K-JLJw",
				unread: "_2n4UrzwZ3VBdRmFUYAHF_9",
				isNightMode: "_3ds5pVvIyBrh1GgQ2O7AFd",
				contextContainer: "_3T3J7R8JnlSfiFdB5bxe5h",
				link: "_1tpiOc0IxpDU113wUs4zi1",
				avatarContainer: "_2WN4-UdVoyjpLQ8mpNTQA",
				avatar: "_12V0IULSx8mSJHxdpHwOGE",
				nsfwAvatar: "_1Bzw8F6BC4Vk8OzAgnU0z3",
				notificationIconContainer: "_3smo-GSstogGTGh6ArpwI0",
				NotifIcon: "OzS9DxR-g3V71ZAeo2lbH",
				notifIcon: "OzS9DxR-g3V71ZAeo2lbH",
				RedditorIcon: "_23rEnykeBXjpsB9b72y8_1",
				redditorIcon: "_23rEnykeBXjpsB9b72y8_1",
				Separator: "_1caKsZ5CCRPSfIgoh608Ej",
				separator: "_1caKsZ5CCRPSfIgoh608Ej",
				topBar: "_3mGSd8RyCZhF_eqyrV_Bvk",
				title: "_180jOSBDwwE60X5UR8zt3-",
				timeAgo: "_2fQXbzOYQuzqlwMzxgtBKH",
				"m-tooltip": "_2a8MIP8QlMF7KPqTup62Vt",
				mTooltip: "_2a8MIP8QlMF7KPqTup62Vt",
				menuButton: "_8Q653FSGz7lD9Ux0AQsXY",
				isOpen: "WHFiF_asC8mzlevTdJv26",
				MenuIcon: "_2oVe02cXZA6mJa7WXHJFi5",
				menuIcon: "_2oVe02cXZA6mJa7WXHJFi5",
				contentContainer: "_3Q_e75oXJ8meqWwAQS36l2",
				body: "_2VDnxV3G5ZvEDq10Z-_fM9",
				ButtonIcon: "_25ecrisK-bGTesa4kIqyHR",
				buttonIcon: "_25ecrisK-bGTesa4kIqyHR",
				ReplyButtonIcon: "_1wAIwQaxmGHWzaHv-8jex_",
				replyButtonIcon: "_1wAIwQaxmGHWzaHv-8jex_",
				notificationButton: "_3doOacPPJ-LU-aBSoLl9TV",
				isUnread: "_2svu3lh5YfWQmYfACdB2J5",
				replyIcon: "_3LbCSOW9yuZK_CHzTuR9M5",
				postIcon: "_102yZEdZMcXLlu2Ri0KD9O",
				postEmbedContainer: "_1cndvAxAFPMUr8IaWuw_we",
				postEmbedContent: "_2fsQOzhZpW9XNu1RXtgzqW",
				deleted: "LypGzp3NJwjpkpsRn9Ocn",
				postEmbedTitleContainer: "_2XT3C7unUlQXgaiyeYfIYv",
				postEmbedTitle: "_1SZwyv3jy4dBipT0yC1CcI",
				postEmbedMeta: "_1LcCO3y9JhylZFlKsgvzHs",
				postEmbedBlurredThumbnailContainer: "_2EmrjrpYxkgB5_ljritGbO",
				postEmbedBlurredThumbnail: "_2a0rc3KL05PEnGmVWcQI8W",
				postEmbedThumbnail: "msJLWFmahK0W8JhaqYny9",
				postEmbedThumbnailBase: "_3CGVcVQDu97m9Oj_xs0n01",
				postEmbedNSFWThumbnailIndicator: "_2q-yvZHWG3Xp2YECYCI09S",
				postEmbedNsfwThumbnailIndicator: "_2q-yvZHWG3Xp2YECYCI09S",
				WarningIcon: "_2PzKGDccrg-BWzhhzJaJTs",
				warningIcon: "_2PzKGDccrg-BWzhhzJaJTs",
				StyledDropdown: "_1i_9WvxHOe7AlJZQ6w_-X9",
				styledDropdown: "_1i_9WvxHOe7AlJZQ6w_-X9",
				overflowMenuContainer: "_2UKt6pQu-os9uxZnfhPydP",
				overflowMenuOption: "_1g8x_Z2KsTf65RBk7dRBZm",
				placeholderWrapper: "_2iacm7sPgvO9z8gO1W7FoY",
				placeholderAvatar: "_2_cDiTNVpitX7CtTmIambB",
				placeholderContent: "_2KpinIkIJ7VxNGQgUgzJCA",
				glimmer: "_27pfB7o_o_4F4TdujFhrNO",
				PostUnavailableInfo: "_2lh6HxiG9gd6MKnaAag9Cu",
				postUnavailableInfo: "_2lh6HxiG9gd6MKnaAag9Cu",
				StateIcon: "_2RPeGp2zLx2hBQTZWSUTQK",
				stateIcon: "_2RPeGp2zLx2hBQTZWSUTQK",
				Text: "_2bba9zuFqUwxMhGdswkU86",
				text: "_2bba9zuFqUwxMhGdswkU86"
			}
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/higherOrderComponents/asTooltip.tsx"),
				o = n("./src/reddit/constants/elementIds.ts"),
				i = n("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const n = Object(s.a)(e, t);
				class r extends a.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(o.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return a.a.createElement(n, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(i.b)(r)
			}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/config.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				c = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class l extends a.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: n
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: r,
						totalCount: i
					} = t, l = r.description ? r.description : r.name;
					return a.a.createElement("a", {
						className: c.a.AwardedLastMonth,
						href: `${s.a.oldRedditUrl}/user/${n}/gilded`
					}, a.a.createElement("div", {
						className: c.a.iconColumn
					}, a.a.createElement("img", {
						alt: l,
						className: c.a.icon,
						src: e
					}), i > 1 && a.a.createElement("span", {
						className: c.a.count
					}, `+${Object(o.b)(i-1)}`)), a.a.createElement("div", {
						className: c.a.textColumn
					}, d._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [d._param("award-name", r.name), d._plural(i)], {
						hk: "16MJHe"
					})))
				}
			}
			t.a = l
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less": function(e, t, n) {
			e.exports = {
				Banner: "_2ZyL7luKQghNeMnczY3gqW",
				banner: "_2ZyL7luKQghNeMnczY3gqW"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/reddit/models/Image/index.tsx"),
				i = n("./src/reddit/components/EditableImage/index.tsx"),
				c = n("./src/reddit/models/User/index.ts"),
				d = n("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				u = n.n(l);
			class m extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const n = await Object(o.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(n, "profileBanner"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						bannerUrl: e,
						className: t,
						currentUser: n,
						hideNSFWPref: a,
						isNSFW: o,
						userName: d
					} = this.props, {
						isUpdating: l
					} = this.state, m = e ? s.a.createElement("div", {
						className: u.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return n && Object(c.e)(n) === d ? s.a.createElement(i.a, {
						altText: r.fbt._("{userName} banner image", [r.fbt._param("userName", d)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, m) : o && a ? null : m
				}
			}
			t.a = Object(d.a)(m)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/actions/preferences.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = Object(a.c)({
					currentUser: o.k,
					hideNSFWPref: o.C
				}),
				c = Object(r.b)(i, e => ({
					imageUpdateRequested: (t, n) => e(Object(s.C)(t, n))
				}));
			t.a = c
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				c = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/snoovatarModal.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				b = n("./src/reddit/models/Vote/index.ts"),
				f = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				h = n.n(f);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(i.i)(({
				isHovercard: e,
				username: t,
				isAvatarPost: n,
				post: i,
				share: f
			}) => {
				const g = Object(l.b)(),
					x = Object(o.d)(),
					_ = i && i.id,
					I = i && i.voteState;
				let O = null;
				_ || (O = e ? "user_hovercard" : "profile_overview");
				const y = Object(a.useCallback)(() => g(Object(m.g)(e ? "user_hovercard" : "profile_overview", t)), [e, g, t]);
				return s.a.createElement(u.t, {
					onClick: () => {
						n ? (g(m.h), _ && I === b.a.notVoted && x(Object(c.jb)(_))) : y();
						const e = n ? "postify" : "copy";
						x(Object(d.b)({
							clickSource: O,
							share: f,
							source: e
						}))
					},
					className: Object(r.a)(h.a.snoovatarButton, h.a.snoovatarExtraPadding, h.a.compactButtonLayout, {
						[h.a.avatarPostifyButton]: n
					}),
					isFullWidth: !0
				}, s.a.createElement(p.a, {
					className: Object(r.a)({
						[h.a.shirtIcon]: !n,
						[h.a.avatarPostButtonShirtIcon]: n
					})
				}), v._("Try this Look", null, {
					hk: "dOuPb"
				}), s.a.createElement("div", {
					className: h.a.chevronIcon
				}))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, n) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				avatarPostifyButton: "_2Viile0fcrruho_hQqpnUx",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				avatarPostButtonShirtIcon: "ARFP2bx6U967JwMoJ2Xr5",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				d = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				compact: e,
				currentUserHasSnoovatar: t,
				className: n,
				isOwnProfile: r,
				onClick: d
			}) {
				return a.a.createElement(o.t, {
					onClick: d,
					isFullWidth: !0,
					className: Object(s.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !t && r,
						[l.a.compactButtonLayout]: e
					}, n)
				}, t ? a.a.createElement(c.a, {
					className: l.a.shirtIcon
				}) : a.a.createElement("div", {
					className: l.a.shirtIcon
				}), t ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : r ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), t ? a.a.createElement("div", {
					className: l.a.chevronIcon
				}) : a.a.createElement(i.a, {
					name: "caret_right",
					className: l.a.chevronIcon
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less": function(e, t, n) {
			e.exports = {
				BannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				bannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				BannerImage: "_1IvROQ79nAJZ87_JkTFsLO",
				bannerImage: "_1IvROQ79nAJZ87_JkTFsLO"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				o = n("./src/reddit/icons/svgs/Close/index.tsx"),
				i = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				c = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				d = n.n(c),
				l = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				u = n.n(l);
			t.a = function({
				bannerBackgroundImage: e,
				isNSFW: t,
				username: n,
				editMode: r,
				isDeletingBanner: c,
				onDeleteBanner: l
			}) {
				return a.a.createElement("div", {
					className: d.a.bannerWrapper
				}, a.a.createElement(i.a, {
					bannerUrl: e,
					isNSFW: t,
					userName: n
				}), r && e && (c ? a.a.createElement(s.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : a.a.createElement(o.a, {
					className: u.a.closeIcon,
					onClick: l
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/reddit/controls/InternalLink/index.tsx"),
				o = n("./src/reddit/components/HumanDate/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				className: e,
				shouldDisplaySnoovatar: t,
				url: n,
				userCreated: r,
				username: c,
				...d
			}) {
				const l = t ? a.a.createElement(a.a.Fragment, null, "u/", c, " · ", a.a.createElement(o.d, {
					seconds: r,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${c}`;
				return n ? a.a.createElement(s.a, i({}, d, {
					className: e,
					to: n
				}), l) : a.a.createElement("span", i({}, d, {
					className: e
				}), l)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				c = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				d = n("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				l = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				u = n.n(l);
			t.a = ({
				title: e,
				username: t,
				isEmployee: n,
				isGold: s,
				isNSFW: l
			}) => o.a.createElement("h1", {
				className: u.a.snoovatarUserTitle
			}, e || t, n && o.a.createElement(i.a, {
				className: u.a.snoovatarAdminIcon,
				title: a.fbt._("Reddit admin", null, {
					hk: "goUUb"
				})
			}), s && o.a.createElement("a", {
				title: a.fbt._("{username} has Reddit Premium", [a.fbt._param("username", t)], {
					hk: "3Fylv"
				}),
				href: `${r.a.redditUrl}/premium`
			}, o.a.createElement(d.a, {
				className: u.a.snoovatarPremiumIcon
			})), l && o.a.createElement(c.a, {
				className: u.a.snoovatarNsfwIcon,
				title: a.fbt._("NSFW - Adult Content", null, {
					hk: "2Iw7mN"
				})
			}))
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, n) {
			e.exports = {
				snoovatarContainer: "_34XIqvI8-YT1wukR_W8vj6",
				bottomGlow: "_18b8M-cZftX_frkYRy3DN1",
				topGlow: "_1-PwjX8ETMrfCu2hAkAHFd",
				snoovatar: "_2bLCGrtCCJIMNCZgmAMZFM",
				premiumGlow: "_18BjSGkpIVVfS1xJXL1eoW",
				snoovatarUserName: "_28nEhn86_R1ENZ59eAru8S",
				snoovatarUserTitle: "_3LM4tRaExed4x1wBfK1pmg",
				snoovatarSettingsLink: "PNl4tAYE2TRxhOc34iqcY",
				snoovatarAdminIcon: "kOKnXvA8jebkfk2wVIb9R",
				snoovatarNsfwIcon: "Wb4wBt474lETdwG0YpWID",
				snoovatarPremiumIcon: "_3NZUKOdsA_2X9TrZGSNQyP",
				particleWrapper: "_3sckwXGpSWEBLgH7dBHDSI",
				particle: "R8JC02qFTBSKsWVEamnnh",
				particleX0: "_2FHPkirHUUZZ53WuQRt_ku",
				particleX20: "DeM4CXWl9dmFhzxbChV3v",
				particleX40: "_2jQr36LfrhyZudo0c4r5qb",
				particleX60: "_2ThlCGLfserHkMW64od-w_",
				particleX80: "_2PoCUl_D7HnNn8GhlmyNMn",
				particleX100: "_3xLPb9tG5DMGKH5Qmq0lMn",
				particleFloat1: "_2Tlu1OsBOwuxXIF1MLT2k",
				floatUp1: "_1-74-z_0KhbvP-MLUh63RF",
				particleFloat2: "BW4L6Zj7IYZtY4carTDWz",
				floatUp2: "BhXouEsciSb0lIayg329d",
				particleFloat3: "UjQ0lRcZlylUigyKGCSrO",
				floatUp3: "_2cAI3EiKyyG1hMFOLbG7ka",
				particleFloat4: "_2_ke4gf08pfYrY6lP-aPZ_",
				floatUp1Left: "_2D7to5Dk7q0ZyKN3MMQfuJ",
				particleFloat5: "_2wM6_vp4fY0ziLkOrGaobV",
				floatUp2Left: "_3BR2d3YbOQLeA3LmAmwBJL",
				particleFloat6: "_23n0biPU5CQf96pEUSFupJ",
				floatUp3Left: "_3FnzyfIl1wHuAYA54rlkJH",
				particleDelay1: "_3meTYeYw1F3UdYO0v-gAYr",
				particleDelay2: "_3d8_fd8LwWsj0tyZWIeQdt",
				particleDelay3: "_2PLSBdnBk3jcotYknlKud1",
				particleDelay4: "_2pnTv5ZAxpIbkx38PkPJPg",
				particleDelay5: "_3j1NzwW_t2Ufnx4ed9QabN",
				particleDelay6: "_1hddWHnQ8DFnwilLlN9GEO",
				particleDelay7: "_3eRR1I_MwXC19q9sr8mKaR",
				particleDelay8: "_1sCUpg4sdajNDXrcNTP0qW",
				particleDelay9: "_3J5h1MCyY_xUf2QP7PDSHY",
				particleDelay10: "_2RqcLn9onSZQmKQgvKmSF7"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/InternalLink/index.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/selectors/experiments/econ/index.ts"),
				l = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				u = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				m = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				p = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				b = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				f = n.n(b);
			const h = 25;

			function v(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function g(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const x = v("particleDelay", f.a),
				_ = v("particleX", f.a),
				I = v("particleFloat", f.a),
				O = () => {
					const e = g(_),
						t = g(I),
						n = g(x);
					return Object(o.a)(f.a.particle, e, t, n)
				};
			class y extends a.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < h; t++) e.push(this.createParticle(t));
					return a.a.createElement("div", {
						role: "presentation",
						className: f.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return a.a.createElement("div", {
						key: e,
						className: `${O()}`
					})
				}
			}
			var E = y,
				N = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				C = n.n(N),
				j = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: n,
				editMode: r,
				isDeletingBanner: b,
				isEmployee: h,
				isGold: v,
				isNSFW: g,
				isOwnProfile: x,
				onClickSnoovatar: _,
				onDeleteBanner: I,
				prefersReducedAnimations: O,
				snoovatarUrl: y,
				title: N,
				userCreated: w,
				username: k,
				url: P,
				isHovercard: S
			}) => {
				const T = Object(s.e)(e => !x && !!y && Object(d.g)(e));
				return a.a.createElement(a.a.Fragment, null, a.a.createElement(m.a, {
					bannerBackgroundImage: e,
					editMode: !!r,
					isNSFW: g,
					username: k,
					isDeletingBanner: !!b,
					onDeleteBanner: I
				}), a.a.createElement("div", {
					className: f.a.snoovatarContainer
				}, v && a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: f.a.topGlow
				}), a.a.createElement("div", {
					className: f.a.bottomGlow
				}), !O && a.a.createElement(E, null)), a.a.createElement("img", {
					className: Object(o.a)(f.a.snoovatar, {
						[f.a.premiumGlow]: v
					}),
					src: y || void 0
				})), !r && x && a.a.createElement(i.a, {
					to: "/settings/profile",
					className: f.a.snoovatarSettingsLink
				}, a.a.createElement(c.a, {
					name: "settings",
					className: C.a.settingsIcon
				})), a.a.createElement(j.a, {
					isEmployee: h,
					isGold: v,
					isNSFW: g,
					title: N,
					username: k
				}), a.a.createElement(p.a, {
					className: f.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: k,
					userCreated: w,
					url: P
				}), (x || !n && !!y) && a.a.createElement(l.a, {
					compact: t,
					currentUserHasSnoovatar: n,
					isOwnProfile: x,
					onClick: _
				}), T && a.a.createElement(u.a, {
					username: k,
					isHovercard: !!S,
					share: {
						username: k
					}
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, n) {
			e.exports = {
				actionItem: "_1l7CTV4NjDjmzX8DiiSgTL",
				AwardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				awardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				textColumn: "_wi1DtT7oN7k_x5oIV8zm",
				iconColumn: "_32tzMaZn7x3dfQC5MXndJn",
				icon: "_12jN4wdttUosp76WHzuieI",
				count: "_6xPPP5HdELF-SZJL8layH",
				awardIcon: "_2Eq8z6UD7I0ul3wnZ-YT80",
				adminIcon: "_1sNQxemH_0rq1jtZAMyAZd",
				snoovatarAdminIcon: "_1rf3zLc4sH59mO7_BEXyze",
				snoovatarPremiumIcon: "_3QQFENUs15G6BHI5pjsswJ",
				button: "_2q1wcTx60QKM_bQ1Maev7b"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = (e, t, n) => null != n ? n : t ? e : o.c.Plain,
				p = ({
					border: e,
					priority: t,
					small: n,
					...r
				}) => s.a.createElement(o.t, u({}, r, {
					priority: m(o.c.Primary, e, t),
					className: Object(l.a)(r.className, d.a.BaseButton),
					size: n ? o.d.S : o.d.M
				})),
				b = e => s.a.createElement(s.a.Fragment, null, s.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), s.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? r.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : r.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				f = ({
					buttonType: e,
					border: t,
					priority: n,
					small: r,
					...a
				}) => s.a.createElement(o.t, u({}, a, {
					priority: m(o.c.Secondary, t, n),
					className: Object(l.a)(a.className, d.a.BaseButton),
					size: r ? o.d.S : o.d.M,
					text: b(e)
				}));
			class h extends s.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: n,
						priority: r,
						small: a = !1,
						isFullWidth: o = !1
					} = this.props, c = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: r,
						small: a,
						isFullWidth: o
					};
					return this.props.userIsSubscriber ? s.a.createElement(f, u({}, c, {
						buttonType: this.props.identifier.type
					})) : s.a.createElement(p, u({}, c, {
						id: n
					}), this.props.children, Object(i.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				a = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				s = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(a.a)(Object(r.c)(s.a))
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			class s extends a.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							n = this.props.multiple ? [...t] : t[0];
						this.props.onChange(n), this.setState(() => ({
							value: n
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = "string" == typeof t.value ? t.value : "", r = "object" == typeof t.value ? t.value : null, s = n || r;
					return a.a.createElement("div", {
						className: e.className
					}, n && a.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), (!s || e.multiple || void 0 !== e.isPending && !e.isPending) && a.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => a.a.createElement("div", {
				className: Object(s.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json"),
				s = n("./src/redditGQL/operations/UpdateNotificationPreferences.json");
			const o = (e, t) => Object(r.a)(e, {
					...a,
					variables: t
				}),
				i = (e, t) => Object(r.a)(e, {
					...s,
					variables: {
						input: {
							preferences: [t]
						}
					}
				})
		},
		"./src/reddit/helpers/trackers/inbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return r
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "r", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "p", (function() {
				return f
			})), n.d(t, "q", (function() {
				return h
			})), n.d(t, "t", (function() {
				return v
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "s", (function() {
				return x
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "u", (function() {
				return I
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "g", (function() {
				return N
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "o", (function() {
				return j
			}));
			var r, a, s, o, i, c, d = n("./src/reddit/constants/tracking.ts"),
				l = n("./src/reddit/selectors/telemetry.ts"),
				u = n("./src/telemetry/index.ts");
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(r || (r = {})),
			function(e) {
				e.HideNotifications = "hide_notification", e.HideSubreddit = "hide_subreddit", e.HideUpdates = "hide_updates", e.BlockAwarder = "block_awarder", e.DecreaseSubredditUpdates = "disable_frequent"
			}(a || (a = {})),
			function(e) {
				e.MiniInbox = "mini_inbox", e.Inbox = "inbox"
			}(s || (s = {})),
			function(e) {
				e.Inbox = "inbox", e.Nav = "nav", e.Settings = "notification_app_settings"
			}(o || (o = {})),
			function(e) {
				e[e.FIRST = 1] = "FIRST", e[e.SECOND = 2] = "SECOND"
			}(i || (i = {})),
			function(e) {
				e.Confirm = "confirm"
			}(c || (c = {}));
			const m = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: r
				}) => a => ({
					...l.m(a),
					action: d.c.VIEW,
					noun: "inbox_notification",
					source: o.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: r
					}
				}),
				p = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: r,
					awardId: a
				}) => s => {
					Object(u.a)({
						...l.m(s),
						action: "receive",
						noun: "inbox_notification",
						source: o.Inbox,
						inbox: {
							id: e,
							isClicked: t,
							isViewed: n
						},
						notification: {
							type: r
						},
						goldPurchase: {
							awardId: a
						}
					})
				},
				b = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: r,
					awardId: a,
					position: s
				}) => i => ({
					...l.m(i),
					action: d.c.CLICK,
					noun: "inbox_notification",
					source: o.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: r
					},
					goldPurchase: {
						awardId: a
					},
					actionInfo: {
						position: s
					}
				}),
				f = ({
					badgeCount: e,
					tab: t
				}) => n => ({
					...l.m(n),
					action: d.c.VIEW,
					noun: "inbox",
					source: o.Inbox,
					inbox: {
						badgeCount: e,
						tab: t
					}
				}),
				h = ({
					badgeCount: e,
					tab: t
				}) => t => ({
					...l.m(t),
					action: d.c.VIEW,
					noun: "mini_inbox",
					source: o.Inbox,
					inbox: {
						badgeCount: e,
						tab: r.Activity
					}
				}),
				v = ({
					badgeCount: e
				}) => t => ({
					...l.m(t),
					action: d.c.CLICK,
					noun: "inbox",
					source: o.Nav,
					inbox: {
						badgeCount: e
					}
				}),
				g = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: r,
					awardId: a
				}) => s => ({
					...l.m(s),
					action: d.c.CLICK,
					noun: "inbox_notification_overflow",
					source: o.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: r
					},
					goldPurchase: {
						awardId: a
					}
				}),
				x = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: r
				}) => a => ({
					...l.m(a),
					action: d.c.VIEW,
					noun: "inbox_notification_overflow",
					source: o.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: r
					}
				}),
				_ = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: r,
					type: a
				}) => s => ({
					...l.m(s),
					action: d.c.CLICK,
					noun: "overflow_option",
					source: o.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: r
					},
					notification: {
						type: a
					},
					actionInfo: {
						...l.c(s),
						type: e
					}
				}),
				I = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: r,
					type: a
				}) => s => ({
					...l.m(s),
					action: d.c.UNDO,
					noun: "overflow_option",
					source: o.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: r
					},
					notification: {
						type: a
					},
					actionInfo: {
						...l.c(s),
						type: e
					}
				}),
				O = e => t => ({
					...l.m(t),
					action: d.c.CLICK,
					noun: "notification_app_settings",
					source: o.Inbox,
					actionInfo: {
						...l.c(t),
						pageType: e
					}
				}),
				y = () => e => ({
					...l.m(e),
					action: d.c.CLICK,
					noun: "see_all",
					source: o.Inbox,
					actionInfo: {
						...l.c(e),
						pageType: s.MiniInbox
					}
				}),
				E = () => e => ({
					...l.m(e),
					action: d.c.CLICK,
					noun: "messages",
					source: o.Inbox
				}),
				N = ({
					isMiniInbox: e
				}) => t => ({
					...l.m(t),
					action: d.c.CLICK,
					noun: "mark_all_as_read",
					source: o.Inbox,
					actionInfo: e ? {
						...l.c(t),
						pageType: s.MiniInbox
					} : {}
				}),
				C = (e, t) => n => ({
					...l.m(n),
					action: d.c.CLICK,
					noun: "policy_banner",
					source: o.Inbox,
					actionInfo: {
						...l.c(n),
						pageType: e,
						type: t
					}
				}),
				j = () => e => ({
					...l.m(e),
					action: d.c.CLICK,
					noun: "inbox_banner",
					source: o.Inbox,
					actionInfo: {
						...l.c(e),
						type: "2021Recap"
					}
				})
		},
		"./src/reddit/helpers/trackers/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "m", (function() {
				return y
			}));
			var r = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/telemetry/index.ts"),
				s = n("./src/telemetry/models/Event.ts");
			var o;
			! function(e) {
				e.FREQUENT = "frequent", e.LOW = "low", e.OFF = "off"
			}(o || (o = {}));
			const i = e => ({
					...r.m(e),
					noun: "desktop_notification_permissions"
				}),
				c = e => e ? "enable" : "disable",
				d = e => {
					Object(a.a)({
						...i(e),
						action: s.c.View,
						source: "popup"
					})
				},
				l = e => {
					Object(a.a)({
						...i(e),
						action: s.c.Allow,
						source: "popup"
					})
				},
				u = e => {
					Object(a.a)({
						...i(e),
						action: s.c.Block,
						source: "popup"
					})
				},
				m = e => {
					Object(a.a)({
						...i(e),
						action: s.c.Close,
						source: "popup"
					})
				},
				p = (e, t, n) => ({
					...r.m(e),
					actionInfo: r.c(e, {
						success: t,
						reason: n
					}),
					noun: "push_token"
				}),
				b = e => {
					Object(a.a)({
						...p(e, !0),
						action: s.c.Request,
						source: "notification"
					})
				},
				f = e => {
					Object(a.a)({
						...p(e, !0),
						action: s.c.Register,
						source: "notification"
					})
				},
				h = (e, t) => {
					Object(a.a)({
						...p(e, !1, t),
						action: s.c.Bail,
						source: "notification"
					})
				},
				v = e => ({
					...r.m(e),
					noun: "push_notification"
				}),
				g = e => ({
					...v(e),
					notification: r.C(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				x = (e, t) => n => ({
					...r.m(n),
					action: c(e),
					email: {
						type: t
					},
					noun: "email",
					source: "email_app_settings"
				}),
				_ = (e, t) => n => ({
					...r.m(n),
					action: c(e),
					notification: {
						type: t
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				I = e => t => ({
					...r.m(t),
					source: "email_app_settings",
					action: c(e),
					noun: "email",
					notification: {
						type: "all"
					}
				}),
				O = (e, t, n) => a => ({
					...r.m(a),
					action: "set_frequency",
					noun: n,
					source: "community_notifications",
					subreddit: {
						id: e,
						name: t.toLowerCase()
					}
				}),
				y = () => e => ({
					...r.m(e),
					action: s.c.View,
					noun: "screen",
					source: "global",
					actionInfo: {
						pageType: "community_alerts"
					}
				})
		},
		"./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react/index.js"),
				a = n("./src/reddit/helpers/localStorage/index.ts");

			function s(e) {
				const [t, n] = Object(r.useState)(Object(a.s)(e));
				return [t, Object(r.useCallback)(() => {
					n(!0), Object(a.nb)(e)
				}, [])]
			}
		},
		"./src/reddit/hooks/useInboxPrivacyPolicyBannerSeen.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react/index.js"),
				a = n("./src/reddit/helpers/localStorage/index.ts");

			function s(e) {
				const [t, n] = Object(r.useState)(() => Object(a.v)(e));
				return [t, Object(r.useCallback)(() => {
					n(!0), Object(a.yb)(e)
				}, [e])]
			}
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			}));
			var r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				a = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/selectors/meta.ts");
			const i = "undefined" == typeof document ? function() {
				const e = Object(s.e)(o.i) || a.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? a.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || a.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? a.DEFAULT_LOCALE : e
			};
			t.a = i;
			const c = () => {
				const e = i(),
					t = Object(s.e)(o.b);
				return t ? e.replace(/([a-z]+-)([A-Z]+)/, `$1${t}`) : e
			}
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => a.a.createElement("i", {
				className: `${Object(s.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, n) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = n.n(o);
			t.a = e => a.a.createElement("svg", {
				className: Object(s.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && a.a.createElement("title", null, e.title), e.desc && a.a.createElement("desc", null, e.desc), a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), a.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, a.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), a.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && a.a.createElement("title", null, e.title), a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("rect", {
				width: "20",
				height: "20",
				rx: "10",
				fill: "url(#gradient)"
			}), a.a.createElement("path", {
				d: "M12.121 13.471c-1.007.146-1.73.445-2.121.643v-3.068a1.2 1.2 0 00-1.2-1.2H6.53c.027-.292.046-.61.046-.978 0-1.015-.294-1.78-.53-2.233l.834-.834H10v2.845a1.2 1.2 0 001.2 1.2h2.27c.036.402.086.749.132 1.045.058.38.109.706.109 1.047 0 .627-.497 1.375-1.59 1.533zm3.017-7.35l-1.345-1.345a.6.6 0 00-.425-.175H6.632a.6.6 0 00-.425.175L4.862 6.122a.6.6 0 00-.042.802c.006.006.556.72.556 1.944 0 .783-.087 1.344-.164 1.84-.064.41-.124.797-.124 1.23 0 1.163.9 2.471 2.619 2.72 1.251.183 1.952.638 1.956.64a.61.61 0 00.67.002c.007-.004.709-.46 1.96-.642 1.719-.249 2.618-1.557 2.618-2.72 0-.433-.06-.82-.124-1.23a11.026 11.026 0 01-.163-1.84c0-1.22.536-1.919.556-1.944a.6.6 0 00-.042-.802z",
				fill: "#fff"
			}), a.a.createElement("defs", null, a.a.createElement("linearGradient", {
				id: "gradient",
				x1: "0",
				y1: "20",
				x2: "20.021",
				y2: "19.979",
				gradientUnits: "userSpaceOnUse"
			}, a.a.createElement("stop", {
				stopColor: "#EC0623"
			}), a.a.createElement("stop", {
				offset: "1",
				stopColor: "#FF8717"
			}))))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = function({
				className: e
			}) {
				return a.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, a.a.createElement("g", {
					fill: "inherit"
				}, a.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/icons/svgs/Snoo/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/reddit/constants/colors.ts");
			t.a = e => a.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				className: e.className
			}, a.a.createElement("g", null, a.a.createElement("circle", {
				fill: s.a.snoo,
				cx: "10",
				cy: "10",
				r: "10"
			}), a.a.createElement("path", {
				fill: "#FFF",
				d: "M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
			})))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/layout/row/Inline/index.m.less"),
				s = n.n(a);
			t.a = r.a.div("inlineRow", s.a)
		},
		"./src/reddit/models/NotificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.Email = "EMAIL", e.Push = "PUSH", e.CommunityAlerts = "COMMUNITY_ALERTS", e.ModCommunityAlerts = "MOD_COMMUNITY_ALERTS"
				}(r || (r = {}))
		},
		"./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/EmptyStateComponent.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var p = ({
					inTooltip: e
				}) => {
					const t = {
						to: "/r/cats/top/",
						kind: d.b.InternalLink
					};
					return a.a.createElement("div", {
						className: Object(c.a)(u.a.emptyState, u.a.karmaView, {
							[u.a.inNotificationsPage]: !e
						})
					}, a.a.createElement("div", {
						className: Object(c.a)(u.a.catsImageWrapper, {
							[u.a.inTooltip]: e
						})
					}, a.a.createElement("img", {
						src: `${i.a.assetPath}/img/notifications/bottom_cat.png`,
						alt: o.fbt._("cats picture", null, {
							hk: "27dboq"
						}),
						className: Object(c.a)(u.a.cat, u.a.bottom)
					}), a.a.createElement("img", {
						src: `${i.a.assetPath}/img/notifications/top_cat.png`,
						alt: o.fbt._("cats picture", null, {
							hk: "27dboq"
						}),
						className: Object(c.a)(u.a.cat, u.a.top)
					}), a.a.createElement("img", {
						src: `${i.a.assetPath}/img/notifications/cloud.png`,
						alt: o.fbt._("cats picture", null, {
							hk: "45gHNS"
						}),
						className: u.a.cloud
					}), a.a.createElement("img", {
						src: `${i.a.assetPath}/img/notifications/yummy.png`,
						alt: o.fbt._("cats picture", null, {
							hk: "27dboq"
						}),
						className: u.a.yummy
					})), a.a.createElement("h1", {
						className: Object(c.a)(u.a.emptyTitle, {
							[u.a.inTooltip]: e
						})
					}, o.fbt._("You don’t have any activity yet", null, {
						hk: "2GNaV0"
					})), a.a.createElement("p", {
						className: u.a.emptyDescription
					}, o.fbt._("That’s ok, maybe you just need the right inspiration. Have you had your daily cat fix yet today?", null, {
						hk: "3tmgZE"
					})), a.a.createElement(d.t, m({
						className: u.a.emptyStateButton
					}, t), o.fbt._("See today’s Top Cats in r/cats", null, {
						hk: "Um68y"
					})))
				},
				b = n("./src/lib/lessComponent.tsx"),
				f = n("./src/reddit/actions/login.ts");
			var h = e => a.a.createElement("svg", {
				className: e.className,
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 21"
			}, a.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M18.4 14.788c-.662 0-1.2-.537-1.2-1.202l-.012-5.998C17.188 3.625 13.963.4 10 .4 6.037.4 2.811 3.625 2.811 7.586l-.01 6.002c0 .663-.54 1.2-1.2 1.2a1.199 1.199 0 100 2.4h16.8a1.2 1.2 0 100-2.4zm-9.6 3.6H7.6c0 1.324 1.076 2.4 2.4 2.4 1.323 0 2.4-1.076 2.4-2.4H8.8zm-3.6-4.797c0 .422-.087.822-.22 1.197H15.02a3.554 3.554 0 01-.22-1.2l-.013-5.997A4.794 4.794 0 0010 2.8a4.794 4.794 0 00-4.789 4.787l-.01 6.003z"
			}));
			const v = b.a.wrapped(h, "BellOutline", u.a),
				g = ({
					isBannerEnabled: e,
					isLoggedIn: t
				}) => {
					const n = Object(s.d)();
					return a.a.createElement("div", {
						className: Object(c.a)(u.a.emptyState, {
							[u.a.emptyStateWithBanner]: Boolean(e),
							[u.a.loggedOutState]: !t
						})
					}, a.a.createElement(v, null), a.a.createElement("h1", {
						className: u.a.emptyTitle
					}, o.fbt._("Be the first to know", null, {
						hk: "2mNJO0"
					})), a.a.createElement("p", {
						className: u.a.emptyDescription
					}, o.fbt._("This is where you get updates on your activity and recommendations", null, {
						hk: "27V2PG"
					})), !t && a.a.createElement("div", {
						className: u.a.emptyStateLoggedOutContainer
					}, a.a.createElement(d.j, {
						onClick: () => n(Object(f.i)())
					}, o.fbt._("Log In", null, {
						hk: "ZR3pC"
					})), a.a.createElement("span", {
						className: u.a.emptyStateDivider
					}), a.a.createElement(d.j, {
						onClick: () => n(Object(f.j)())
					}, o.fbt._("Sign Up", null, {
						hk: "3Jd0SI"
					}))))
				};
			var x = n("./src/reddit/controls/InternalLink/index.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const I = ["/r/somethingimade", "/r/CasualConversation", "/r/DoesAnybodyElse", "/r/Old_Recipes"][Math.floor(100 * Math.random()) % 4];
			var O = ({
				inTooltip: e,
				isPopular: t
			}) => {
				const n = t ? "/r/popular" : I,
					r = {
						to: n,
						kind: d.b.InternalLink
					},
					s = a.a.createElement(x.a, {
						to: n,
						target: "_blank",
						rel: "noopener noreferrer",
						className: u.a.subredditLinkR
					}, n);
				return a.a.createElement("div", {
					className: Object(c.a)(u.a.emptyState, u.a.karmaView, {
						[u.a.inNotificationsPage]: !e
					})
				}, a.a.createElement("img", {
					src: `${i.a.assetPath}/img/wrappedreddit/default_avatar.png`,
					alt: o.fbt._("default user avatar", null, {
						hk: "1VMTKf"
					}),
					className: Object(c.a)(u.a.avatarImage, {
						[u.a.inTooltip]: e
					})
				}), a.a.createElement("h1", {
					className: Object(c.a)(u.a.emptyTitle, {
						[u.a.inTooltip]: e
					})
				}, o.fbt._("You don’t have any activity yet", null, {
					hk: "2hf6yn"
				})), a.a.createElement("p", {
					className: u.a.emptyDescription
				}, t ? o.fbt._("That’s ok, maybe you just need the right inspiration. Try browsing {Link: to /r/popular}, for new communities to join.", [o.fbt._param("Link: to /r/popular", s)], {
					hk: "3fKsCP"
				}) : o.fbt._("That’s ok, maybe you just need the right inspiration. Try posting in {Link: to /r/popular}, a popular community for discussion.", [o.fbt._param("Link: to /r/popular", s)], {
					hk: "3vcPQJ"
				})), a.a.createElement(d.t, _({
					className: u.a.emptyStateButton,
					text: `Visit ${n}`
				}, r)))
			};

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const E = "/img/notifications/star.png";
			var N = ({
					inTooltip: e
				}) => {
					const t = {
						to: "/r/memes/top/",
						kind: d.b.InternalLink
					};
					return a.a.createElement("div", {
						className: Object(c.a)(u.a.emptyState, u.a.karmaView, {
							[u.a.inNotificationsPage]: !e
						})
					}, a.a.createElement("div", {
						className: Object(c.a)(u.a.memesImageWrapper, {
							[u.a.inTooltip]: e
						})
					}, a.a.createElement("img", {
						src: `${i.a.assetPath}/img/notifications/shrek.png`,
						alt: o.fbt._("memes picture", null, {
							hk: "3e3S9E"
						}),
						className: u.a.shrek
					}), a.a.createElement("img", {
						src: `${i.a.assetPath}${E}`,
						alt: o.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(c.a)(u.a.star, u.a.inBottom)
					}), a.a.createElement("img", {
						src: `${i.a.assetPath}${E}`,
						alt: o.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(c.a)(u.a.star, u.a.inCenter)
					}), a.a.createElement("img", {
						src: `${i.a.assetPath}${E}`,
						alt: o.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(c.a)(u.a.star, u.a.inTop)
					})), a.a.createElement("h1", {
						className: Object(c.a)(u.a.emptyTitle, {
							[u.a.inTooltip]: e
						})
					}, o.fbt._("You don’t have any activity yet", null, {
						hk: "2GNaV0"
					})), a.a.createElement("p", {
						className: u.a.emptyDescription
					}, o.fbt._("That’s ok, maybe you just need the right inspiration. Let’s get some more lolz in your life.", null, {
						hk: "10HMFI"
					})), a.a.createElement(d.t, y({
						className: u.a.emptyStateButton
					}, t), o.fbt._("See today’s Top Memes in r/Memes", null, {
						hk: "42zwJz"
					})))
				},
				C = n("./src/lib/notifications/index.ts"),
				j = n("./src/lib/notifications/constants.ts"),
				w = n("./src/redditGQL/types.ts"),
				k = n("./src/reddit/actions/modal.ts"),
				P = n("./src/reddit/actions/notifications/index.ts"),
				S = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				T = n("./src/reddit/actions/toaster.ts"),
				B = n("./src/reddit/components/Settings/modalIds.ts"),
				U = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				L = n("./src/reddit/models/Toast/index.ts"),
				A = n("./src/reddit/selectors/notificationPrefs.ts"),
				D = n("./src/reddit/selectors/user.ts");

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const H = [w.e.PrivateMessage, w.e.ChatMessage, w.e.ChatRequest, w.e.UsernameMention, w.e.PostReply, w.e.UpvotePost, w.e.UpvoteComment, w.e.CommentReply, w.e.ThreadReplies, w.e.TopLevelComment, w.e.NewPostActivity, w.e.UserNewFollower, w.e.PostFlairAdded, w.e.UserFlairAdded, w.e.NewPinnedPost, w.e.AwardReceived, w.e.PostFollow, w.e.TalkLive, w.e.CommentFollow, w.e.LifecyclePostSuggestions, w.e.BroadcastRecommendation, w.e.SubredditRecommendation, w.e.RedditLore, w.e.OneOff, w.e.CakeDay, w.e.ModeratedSrEngagement];
			var R;
			! function(e) {
				e[e.TURN_ON_PN = 0] = "TURN_ON_PN", e[e.TURN_ON_PN_APP = 1] = "TURN_ON_PN_APP", e[e.VERIFY_EMAIL = 2] = "VERIFY_EMAIL", e[e.TURN_ON_DAYLY_DIGEST = 3] = "TURN_ON_DAYLY_DIGEST", e[e.DONE = 4] = "DONE"
			}(R || (R = {}));
			var M = ({
					inTooltip: e,
					isBannerEnabled: t,
					isLoggedIn: n
				}) => {
					const l = Object(s.d)(),
						m = Object(s.e)(D.n),
						p = Object(s.e)(D.A),
						b = Object(r.useRef)(m),
						[f, h] = Object(r.useState)(R.TURN_ON_PN),
						v = Object(s.e)(e => e.user.accountSettings.changeEmail.api.pending),
						x = Object(r.useCallback)(() => {
							l(async (e, t) => {
								var n, r;
								let a = Object(D.Y)(t());
								a.allIds.length || await e(Object(S.a)(U.a.Email));
								const s = null === (r = null === (n = (a = Object(D.Y)(t())).byId) || void 0 === n ? void 0 : n.EMAIL_DIGEST) || void 0 === r ? void 0 : r.isEnabled;
								h(s ? R.DONE : R.TURN_ON_DAYLY_DIGEST)
							})
						}, [l]),
						_ = Object(r.useCallback)(() => {
							p ? x() : h(R.VERIFY_EMAIL)
						}, [p, x]),
						I = Object(r.useCallback)(() => {
							l(async (e, t) => {
								const n = t();
								Object(D.ab)(n).allIds.length || await e(Object(S.a)(U.a.Push)), Object(A.c)(t(), H) ? h(R.TURN_ON_PN_APP) : _()
							})
						}, [l, _]),
						O = Object(r.useCallback)(() => {
							(() => Object(C.a)() === j.a.Granted)() ? I(): h(R.TURN_ON_PN)
						}, [I]),
						y = Object(r.useCallback)(() => {
							l(Object(k.h)(B.a))
						}, [l]);
					if (Object(r.useEffect)(() => {
							O()
						}, [O]), Object(r.useEffect)(() => {
							if (m !== b.current && f === R.VERIFY_EMAIL) {
								const e = Object(T.e)(o.fbt._("Email successfully updated!", null, {
									hk: "3iPlUp"
								}), L.b.SuccessCommunityGreen);
								l(Object(T.f)(e)), x()
							}
						}, [m, f, x]), Object(r.useEffect)(() => {
							v && l(Object(k.g)(B.a))
						}, [v, l]), f === R.DONE) return a.a.createElement(g, {
						isLoggedIn: n,
						isBannerEnabled: t
					});
					const E = {
							to: "/settings/notifications",
							kind: d.b.InternalLink
						},
						N = {
							onClick: f === R.TURN_ON_PN ? async () => {
								await l(Object(P.requestBrowserNotificationPermissionPromptByUser)(B.f)), O()
							} : y
						},
						w = f === R.TURN_ON_PN || f === R.TURN_ON_PN_APP,
						M = f === R.TURN_ON_PN_APP || f === R.TURN_ON_DAYLY_DIGEST;
					return a.a.createElement("div", {
						className: Object(c.a)(u.a.emptyState, u.a.karmaView, {
							[u.a.inNotificationsPage]: !e
						})
					}, a.a.createElement("img", {
						src: `${i.a.assetPath}/img/wrappedreddit/default_avatar.png`,
						alt: o.fbt._("default user avatar", null, {
							hk: "1VMTKf"
						}),
						className: Object(c.a)(u.a.avatarImage, {
							[u.a.inTooltip]: e
						})
					}), a.a.createElement("h1", {
						className: Object(c.a)(u.a.emptyTitle, {
							[u.a.inTooltip]: e
						})
					}, w ? o.fbt._("Turn on notifications", null, {
						hk: "3qFpFu"
					}) : o.fbt._("Turn on email digest", null, {
						hk: "obBF8"
					})), a.a.createElement("p", {
						className: u.a.emptyDescription
					}, w ? o.fbt._("Stay in the loop on content from communities you love right on your phone.", null, {
						hk: "1gwnbO"
					}) : o.fbt._("Stay in the loop on content from communities you love right on your email inbox.", null, {
						hk: "1rs4kD"
					})), a.a.createElement(d.t, F({
						className: u.a.emptyStateButton
					}, M ? E : N, {
						text: o.fbt._("OK", null, {
							hk: "rhf0"
						})
					})))
				},
				W = n("./src/reddit/constants/experiments.ts"),
				G = n("./src/reddit/helpers/chooseVariant/index.ts");
			const K = e => Object(G.c)(e, {
					experimentEligibilitySelector: G.a,
					experimentName: W.nb
				}) === W.fd.Karma,
				z = e => Object(G.c)(e, {
					experimentEligibilitySelector: G.a,
					experimentName: W.nb
				}) === W.fd.Memes,
				q = e => Object(G.c)(e, {
					experimentEligibilitySelector: G.a,
					experimentName: W.nb
				}) === W.fd.PnEmail,
				V = e => Object(G.c)(e, {
					experimentEligibilitySelector: G.a,
					experimentName: W.nb
				}) === W.fd.Cats,
				Z = e => Object(G.c)(e, {
					experimentEligibilitySelector: G.a,
					experimentName: W.nb
				}) === W.fd.Popular;
			t.a = ({
				isBannerEnabled: e,
				isLoggedIn: t,
				inTooltip: n
			}) => {
				const r = Object(s.e)(K),
					o = Object(s.e)(z),
					i = Object(s.e)(q),
					c = Object(s.e)(V),
					d = Object(s.e)(Z);
				return r || d ? a.a.createElement(O, {
					inTooltip: n,
					isPopular: d
				}) : o ? a.a.createElement(N, {
					inTooltip: n
				}) : i ? a.a.createElement(M, {
					isBannerEnabled: e,
					isLoggedIn: t,
					inTooltip: n
				}) : c ? a.a.createElement(p, {
					inTooltip: n
				}) : a.a.createElement(g, {
					isBannerEnabled: e,
					isLoggedIn: t
				})
			}
		},
		"./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/index.m.less": function(e, t, n) {
			e.exports = {
				emptyState: "_3B_EfQMwEiEzc_9vEdVplz",
				emptyStateLoggedOutContainer: "_3AcDG0KjCxs3H1UW_4ajNf",
				emptyStateDivider: "bfJNAfRJ7wvCVMJIHbVa-",
				karmaView: "_3eBLRjkIDT-8Hobfrj_UTz",
				inNotificationsPage: "_2upiES-f8azWSz_UdoeHE7",
				avatarImage: "mGm_bo7f-d7T6Ax_UEs_l",
				inTooltip: "JBKRJW6IC_gf5qQ_mqb4A",
				catsImageWrapper: "odMqhFpc4xkpus4jHz_9f",
				cat: "_13uS-SsNmI2cGGsq2rpP8O",
				top: "_29krHC0w9xxlGw1mBpwNHU",
				bottom: "_3VkvX9EbwQAVQJ3qEl_wzw",
				cloud: "_3yAL94u5AxUY-JhhHIPNuU",
				yummy: "_2TY8uYFieKTHl7jN_vmcYR",
				memesImageWrapper: "jaQ0krPJ6FkjLU-VDMGNq",
				shrek: "_1f1-1KlOtH3uQKPHzkGdDI",
				star: "_2mEU_pG_y9L4CaC7zihby0",
				inBottom: "_1kfecAwlZWu6be_WDfvh-P",
				inCenter: "_4DkJv1On5ORUXrwzznhqE",
				inTop: "_1lJAHwdJYzqn-69JkG-HJQ",
				emptyStateButton: "_1_kVxSQ5_eQNTfI-Y89mu4",
				loggedOutState: "_3uw_OsQCi8zOpS3fha4JEF",
				emptyStateWithBanner: "_1L4nSUqK39ZB-E1-MXtBve",
				emptyTitle: "_36brOzjH6sE_rgnTt-hcL1",
				emptyDescription: "Ae79bDDbZ2U_G-wqwA71z",
				subredditLinkR: "_9DV1fqkU31oi8pfSQxzjw",
				BellOutline: "_23NDu_VaLgaSWVzKHs-Gfa",
				bellOutline: "_23NDu_VaLgaSWVzKHs-Gfa"
			}
		},
		"./src/reddit/routes/wrappedreddit/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/actions/pages/wrappedReddit.ts");
			const o = "/RedditRecap2021",
				i = "https://i.redd.it/8yb4biw7bf481.png",
				c = {
					action: s.a,
					chunk: a.s.WRAPPED_REDDIT,
					component: Object(r.a)({
						resolved: {},
						chunkName: () => "WrappedReddit",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("WrappedReddit").then(n.bind(null, "./src/reddit/pages/WrappedReddit/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/WrappedReddit/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: a.Mb.WRAPPED_REDDIT
					},
					path: o
				};
			t.c = c
		},
		"./src/reddit/selectors/bannedUser.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/components/InboxTooltip/Component.tsx"),
				s = n("./src/reddit/models/SubredditModeration/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = (e, {
					subredditId: t
				}) => e.features.banned.models[t],
				c = (e, {
					subredditId: t,
					username: n
				}) => {
					const r = Object(o.rb)(e, {
						userName: n
					});
					if (!r) return;
					const a = i(e, {
						subredditId: t
					});
					return a ? a[r.id] : void 0
				},
				d = Object(r.a)((e, {
					subredditId: t
				}) => {
					const n = e.features.banned.userOrder[t];
					return n ? n.map(n => e.features.banned.models[t][n]) : a.a
				}),
				l = (e, {
					subredditId: t
				}) => {
					const n = Object(s.d)(t);
					return e.features.banned.api.pending[n]
				},
				u = (e, {
					subredditId: t
				}) => e.features.banned.loadMore[t],
				m = e => e.features.banned.search.api.pending,
				p = e => e.features.banned.search.result,
				b = e => e.features.banned.inContext
		},
		"./src/reddit/selectors/notificationPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "g", (function() {
				return s
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			}));
			const r = e => e.user.notificationPrefs.api.getPreferences.loaded,
				a = e => e.user.notificationPrefs.api.getPreferences.pending,
				s = e => e.user.notificationPrefs.api.setPreferences.pending,
				o = e => e.user.notificationPrefs.preferences,
				i = e => e.user.notificationPrefs.isNotificationPromptVisible,
				c = (e, t) => {
					var n, r;
					const a = (e => e.user.notificationPrefs.pushSettingsLayout)(e),
						s = null === (n = null == a ? void 0 : a.rows) || void 0 === n ? void 0 : n.byId;
					return s && (null === (r = s[t]) || void 0 === r ? void 0 : r.isEnabled)
				},
				d = (e, t) => !t.some(t => c(e, t))
		},
		"./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json": function(e) {
			e.exports = JSON.parse('{"id":"d03522f8a8d4"}')
		},
		"./src/redditGQL/operations/RegisterWebPushToken.json": function(e) {
			e.exports = JSON.parse('{"id":"197650c1946c"}')
		},
		"./src/redditGQL/operations/UpdateNotificationPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"129085be0500"}')
		},
		"./src/redditGQL/operations/UserSubredditsNotificationsLevel.json": function(e) {
			e.exports = JSON.parse('{"id":"8404d1f9e84d"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard.1321c54cfc4d50e79d47.js.map