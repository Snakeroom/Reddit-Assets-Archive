// https://www.redditstatic.com/desktop2x/AuthorHovercard.cd9486431b397bd0077c.js
// Retrieved at 2/3/2022, 4:50:13 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard"], {
		"./src/lib/browser/isIncognito.ts": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/constants/index.ts");
			const r = 120 * a.hb;
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
						return !e || e <= r
					}
				})()), e
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var a = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/constants/intlSupport.ts");

			function s(e, {
				showDay: t,
				useUtc: n,
				shortMonths: s,
				locale: i = a.D
			} = {}) {
				const o = new Date(e * a.Sb);
				return r.a ? new Intl.DateTimeFormat(i, {
					month: s ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(o) : o.toLocaleString()
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/constants/index.ts");
			t.a = (e, t = a.D) => {
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
			var a = n("./src/lib/delay/index.ts"),
				r = n("./src/lib/getParsedUserAgent/index.ts"),
				s = n("./src/lib/localStorageAvailable/index.ts"),
				i = n("./src/lib/notifications/constants.ts"),
				o = n("./src/lib/notifications/featureFlags.ts");
			n("./src/lib/serviceWorker/index.ts");
			const c = () => {
					if (Object(o.a)() !== i.c.NotificationsSupported) return i.a.Unsupported;
					const e = Object(s.a)() && localStorage.getItem(i.f) === i.g;
					return "granted" === Notification.permission ? i.a.Granted : "denied" === Notification.permission ? i.a.Denied : e ? i.a.Closed : i.a.Default
				},
				d = () => !!Object(s.a)() && (localStorage.removeItem(i.f), !0),
				l = async (e, t, n, o, d, l) => {
					const u = c();
					if (u === i.a.Unsupported) return void l();
					if (Object(s.a)()) {
						const t = localStorage.getItem(i.h),
							n = (new Date).getTime();
						if (!e && t && parseInt(t) + i.i > n) return void l();
						localStorage.setItem(i.h, n.toString())
					}
					if (!t && u === i.a.Denied) return o(!1, !0), void l();
					if (!t && u === i.a.Granted) return d(!1), void l();
					if (!t && u === i.a.Closed) return void l();
					let m = i.a.Default;
					const p = navigator.userAgent;
					switch (Object(r.b)(p) || Object(r.f)(p) ? Object(a.a)(1800).then(() => {
						m === i.a.Default && n()
					}) : n(), m = await Notification.requestPermission()) {
						case "granted":
							d(!0);
							break;
						case "denied":
							o(!0, !0);
							break;
						case "default":
							l();
							break;
						default:
							o(!0, !1), localStorage.setItem(i.f, i.g)
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
			var a = n("./src/config.ts"),
				r = n("./src/redditGQL/operations/RegisterWebPushToken.json"),
				s = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/lib/serviceWorker/index.ts"),
				o = n("./src/lib/timezone/index.ts"),
				c = e => {
					const t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"),
						n = window.atob(t),
						a = new Uint8Array(n.length);
					for (let r = 0; r < n.length; ++r) a[r] = n.charCodeAt(r);
					return a
				};
			var d;
			! function(e) {
				e[e.Success = 0] = "Success", e[e.FailedGeneric = 1] = "FailedGeneric", e[e.FailedResponse = 2] = "FailedResponse", e[e.FailedGqlReponse = 3] = "FailedGqlReponse", e[e.FailedNoServiceWorker = 4] = "FailedNoServiceWorker", e[e.FailedNoSubscription = 5] = "FailedNoSubscription"
			}(d || (d = {}));
			const l = async e => {
				try {
					const t = await Object(i.a)();
					if (!t) return d.FailedNoServiceWorker;
					let n = await t.pushManager.getSubscription();
					if (!n) {
						const e = {
							userVisibleOnly: !0,
							applicationServerKey: c(a.a.pushNotificationApplicationServerKey)
						};
						n = await t.pushManager.subscribe(e)
					}
					if (!n) return d.FailedNoSubscription;
					const l = await ((e, t) => {
						const n = {
							pushToken: JSON.stringify(t),
							timezoneName: Object(o.b)() || o.a,
							timestamp: (new Date).toISOString(),
							language: "en_us"
						};
						return Object(s.a)(e(), {
							...r,
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
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return o
			}));
			var a = n("./src/lib/makeActionCreator/index.ts");
			const r = "INCONTEXT__BANNED",
				s = "INCONTEXT__MUTED",
				i = Object(a.a)(r),
				o = Object(a.a)(s)
		},
		"./src/reddit/actions/notificationSettingsLayout/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return o
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
			const a = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__FAILED",
				r = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__LOADED",
				s = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__PENDING",
				i = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__FAILED",
				o = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__LOADED",
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
				return v
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "c", (function() {
				return N
			})), n.d(t, "b", (function() {
				return E
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/notificationSettingsLayout/constants.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/redditGQL/operations/UserSubredditsNotificationsLevel.json");
			var l = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const m = Object(r.a)(s.c),
				p = Object(r.a)(s.b),
				b = Object(r.a)(s.a),
				f = Object(r.a)(s.f),
				h = Object(r.a)(s.e),
				g = Object(r.a)(s.d),
				v = e => async (t, n, {
					gqlContext: a
				}) => {
					e === l.a.Push ? t(f()) : t(m()), await async function(e, t, n) {
						const a = await Object(o.a)(e(), {
							channel: t
						});
						if (a.ok && a.body) {
							const e = function(e) {
								const t = e && e.data,
									n = t && t.notificationSettingsLayoutByChannel,
									a = n && n.sections;
								if (a) return function(e) {
									const t = {},
										n = [];
									let a = {},
										r = [];
									const s = e => {
										const {
											rowIds: s,
											rowsCollection: i
										} = function(e) {
											const t = [],
												n = {};
											if (e.rows)
												for (let a = 0; a < e.rows.length; a++) {
													const r = e.rows[a],
														s = r.messageType;
													t.push(s), n[s] = r
												}
											return {
												rowsCollection: n,
												rowIds: t
											}
										}(e);
										a = {
											...a,
											...i
										}, r = [...r, ...s];
										const o = e.id;
										n.push(o), t[o] = {
											...e,
											rows: s
										}
									};
									for (let i = 0; i < e.length; i++) s(e[i]);
									return {
										sections: {
											byId: t,
											allIds: n
										},
										rows: {
											byId: a,
											allIds: r
										}
									}
								}(a)
							}(a.body);
							t === l.a.Push ? n(h(e)) : n(p(e))
						} else t === l.a.Push ? n(g({
							error: a.error
						})) : n(b({
							error: a.error
						}))
					}(a, e, t)
				};
			const x = Object(r.a)(s.g),
				_ = e => async (t, n, {
					gqlContext: r
				}) => {
					(await Object(o.b)(r(), e)).ok ? (I(t, e), function(e) {
						e(Object(i.f)({
							kind: u.b.SuccessCommunity,
							text: a.fbt._("Changes saved", null, {
								hk: "UBoVR"
							})
						}))
					}(t)) : function(e) {
						e(Object(i.f)({
							kind: u.b.Error,
							text: a.fbt._("We had some issues saving your changes. Please try again.", null, {
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
			const O = Object(r.a)(s.j),
				y = Object(r.a)(s.i),
				N = Object(r.a)(s.k),
				C = Object(r.a)(s.h),
				E = e => async (t, n, {
					gqlContext: a
				}) => {
					var r, s;
					t(O());
					const o = await ((e, t) => Object(c.a)(e, {
						...d,
						variables: t
					}))(a(), e);
					if (null === (s = null === (r = o.error) || void 0 === r ? void 0 : r.fields) || void 0 === s ? void 0 : s.length) return t(C({
						error: o.error
					})), void t(Object(i.d)());
					if (o.ok && o.body) {
						const e = o.body,
							n = e && e.data,
							a = n && n.identity && n.identity.subscribedSubreddits,
							r = a && a.pageInfo,
							s = (a && a.edges).map(e => e.node);
						t(y({
							nodes: s,
							pageInfo: r
						}))
					}
				}
		},
		"./src/reddit/actions/notifications/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "initializeServiceWorkerChannel", (function() {
				return C
			})), n.d(t, "requestNotificationsPermissions", (function() {
				return j
			})), n.d(t, "subscribeForPNs", (function() {
				return k
			})), n.d(t, "unsubscribeFromPNs", (function() {
				return w
			})), n.d(t, "requestBrowserNotificationPermissionPromptByUser", (function() {
				return S
			})), n.d(t, "subscribeToPermissionsChange", (function() {
				return P
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/omit.js"),
				s = n.n(r),
				i = n("./src/lib/browser/isIncognito.ts"),
				o = n("./src/lib/notifications/token.ts"),
				c = n("./src/lib/notifications/index.ts"),
				d = n("./src/lib/notifications/constants.ts"),
				l = n("./src/lib/serviceWorker/index.ts"),
				u = n("./src/reddit/actions/chat/toggle.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/actions/notifications/utils.ts"),
				b = n("./src/reddit/actions/tabBadging.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/reddit/helpers/parseUrl.ts"),
				g = n("./src/reddit/helpers/tabBadging/index.ts"),
				v = n("./src/reddit/helpers/trackers/notifications.ts"),
				x = n("./src/reddit/models/Toast/index.ts"),
				_ = n("./src/reddit/constants/experiments.ts"),
				I = n("./src/reddit/helpers/chooseVariant/index.ts");
			var O = n("./src/reddit/selectors/meta.ts"),
				y = n("./src/reddit/selectors/user.ts");
			let N = !1;
			const C = async (e, t) => {
				const n = Object(y.J)(e);
				if (N) return;
				if (N = !0, Object(p.a)(e) !== d.c.NotificationsSupported) return;
				await Object(l.a)();
				navigator.serviceWorker.addEventListener("message", a => {
					const r = a.data,
						i = r.command || r.type;
					if ("registerWithServiceWorker" === i) E(e);
					else if (i === g.a && n) {
						const e = s()(r, ["command"]);
						t(Object(b.f)(e))
					} else if ("navigate.chat" === i) {
						const e = Object(h.a)(r.data.href);
						e && e.pathname && t(Object(u.c)(e.pathname))
					}
				}), E(e)
			}, E = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: v.c(e)
				})
			}, j = (e, t, n = (() => {})) => async (a, r, s) => {
				const o = r(),
					l = Object(O.f)(o),
					u = (e => Object(I.c)(e, {
						experimentName: _.Hb,
						experimentEligibilitySelector: I.a
					}) === _.bd)(o);
				if (await Object(i.a)() || l) return;
				await C(o, a);
				v.j(o), await Object(c.b)(e, t, () => {
					u || a(Object(d.o)()), a(Object(d.n)()), v.h(o)
				}, (e, t) => {
					a(Object(d.l)()), a(w(t ? d.a.Denied : d.a.Closed)), e && (t ? v.e(o) : v.f(o))
				}, e => {
					a(Object(d.m)()), a(k()), e && v.d(o)
				}, () => {
					a(Object(d.k)()), n()
				})
			}, k = e => async (t, n, r) => {
				const s = n();
				try {
					switch (await Object(o.b)(r.gqlContext)) {
						case o.a.Success:
							Object(p.b)(d.a.Granted), v.k(s), e && t(Object(f.f)({
								kind: x.b.SuccessCommunity,
								text: a.fbt._("Changes saved", null, {
									hk: "wGH5U"
								})
							}));
							break;
						case o.a.FailedResponse:
							v.i(s, "registration_failed_generally");
							break;
						case o.a.FailedGqlReponse:
							v.i(s, "registration_failed_in_gql")
					}
				} catch (i) {
					v.i(s, "registration_failed_uncaught_exception"), console.error(i)
				}
			}, w = (e, t) => async n => {
				try {
					Object(p.b)(e);
					const r = await Object(l.a)();
					if (r) {
						const e = await r.pushManager.getSubscription();
						e && (e.unsubscribe(), t && n(Object(f.f)({
							kind: x.b.SuccessCommunity,
							text: a.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						})))
					}
				} catch (r) {}
			}, S = e => async (t, n) => {
				const a = n();
				if (Object(p.a)(a) === d.c.NotificationsSupported) switch (Object(c.a)()) {
					case d.a.Default:
					case d.a.Closed:
						await t(j(!0, !0));
						break;
					case d.a.Denied:
						t(Object(m.h)(e))
				}
			}, P = () => async (e, t) => {
				var n;
				if (!(null === (n = null === navigator || void 0 === navigator ? void 0 : navigator.permissions) || void 0 === n ? void 0 : n.query)) return;
				const a = t();
				if (Object(p.a)(a) !== d.c.NotificationsSupported) return;
				const r = await navigator.permissions.query({
					name: "notifications"
				});
				r.onchange = () => (t => {
					switch (t) {
						case d.a.Denied:
							e(w(d.a.Denied)), v.e(a);
							break;
						case d.a.Granted:
							e(k()), v.d(a);
							break;
						default:
							e(w(d.a.Default))
					}
				})(r.state)
			}
		},
		"./src/reddit/actions/notifications/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var a = n("./src/lib/notifications/index.ts"),
				r = n("./src/lib/notifications/constants.ts"),
				s = n("./src/lib/notifications/featureFlags.ts"),
				i = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/helpers/localStorage/index.ts");
			const c = e => i.d.pushNotificationsBrowserSupported(e) ? Object(s.a)() : r.c.BrowserUnsupported,
				d = e => {
					switch (e) {
						case r.a.Denied:
							o.nb(!1), Object(a.c)();
							break;
						case r.a.Default:
						case r.a.Granted:
							o.nb(!0), Object(a.c)();
							break;
						case r.a.Closed:
							o.nb(!0)
					}
				}
		},
		"./src/reddit/actions/pages/wrappedReddit.ts": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/pageTitle.ts"),
				r = n("./src/reddit/actions/platform.ts");
			t.a = () => async e => {
				e(Object(r.m)({
					title: Object(a.p)()
				}))
			}
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return $
			})), n.d(t, "d", (function() {
				return ae
			})), n.d(t, "b", (function() {
				return ie
			})), n.d(t, "e", (function() {
				return oe
			})), n.d(t, "a", (function() {
				return ce
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/get.js"),
				s = n.n(r),
				i = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/apiRequestState.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/subreddit.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/modals.ts"),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts"),
				h = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				g = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const v = (e, t, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
				endpoint: Object(h.a)(Object(g.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: m.jb.GET,
				data: n
			});
			var x = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				_ = n("./src/reddit/models/SubredditModeration/index.ts"),
				I = n("./src/reddit/models/Toast/index.ts"),
				O = n("./src/reddit/selectors/activeModalId.ts"),
				y = n("./src/reddit/selectors/bannedUser.ts"),
				N = n("./src/reddit/selectors/subreddit.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/actions/subredditModeration/constants.ts"),
				j = n("./src/lib/initializeClient/installReducer.ts"),
				k = n("./node_modules/redux/es/redux.js");
			var w = (e = null, t) => {
				switch (t.type) {
					case E.o:
					case E.n:
						return null;
					case E.m:
						return t.payload;
					default:
						return e
				}
			};
			const S = {};
			var P = (e = S, t) => {
					switch (t.type) {
						case E.o: {
							const {
								subredditId: n,
								fetchedToken: a
							} = t.payload, r = Object(_.e)(n, a);
							return {
								...e,
								[r]: !0
							}
						}
						case E.n:
						case E.m: {
							const {
								subredditId: n,
								fetchedToken: a
							} = t.payload, r = Object(_.e)(n, a);
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				T = Object(k.c)({
					error: w,
					pending: P
				});
			const B = {};
			var U = (e = B, t) => {
					switch (t.type) {
						case E.n: {
							const {
								fetchedToken: n,
								subredditId: a
							} = t.payload, r = Object(_.e)(a, n);
							return {
								...e,
								[r]: !0
							}
						}
						default:
							return e
					}
				},
				A = n("./src/reddit/actions/inContextModeration.ts");
			var L = (e = null, t) => {
				switch (t.type) {
					case A.a:
						return t.payload;
					default:
						return e
				}
			};
			const F = {};
			var D = (e = F, t) => {
					switch (t.type) {
						case E.n: {
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
				R = n("./node_modules/icepick/icepick.js");
			const M = {};
			var H = (e = M, t) => {
				switch (t.type) {
					case E.l:
					case E.n: {
						const {
							subredditId: n,
							bannedUsers: a
						} = t.payload;
						return Object(R.merge)(e, {
							[n]: a
						})
					}
					case E.s: {
						const {
							subredditId: n,
							userId: a
						} = t.payload;
						return Object(R.unsetIn)(e, [n, a])
					}
					default:
						return e
				}
			};
			var W = (e = null, t) => {
				switch (t.type) {
					case E.r:
					case E.q:
						return null;
					case E.p:
						return t.payload;
					default:
						return e
				}
			};
			var G = (e = !1, t) => {
					switch (t.type) {
						case E.r:
							return !0;
						case E.q:
						case E.p:
							return !1;
						default:
							return e
					}
				},
				K = Object(k.c)({
					error: W,
					pending: G
				});
			var z = (e = null, t) => {
					switch (t.type) {
						case E.r:
						case E.p:
							return null;
						case E.q: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				q = Object(k.c)({
					api: K,
					result: z
				});
			const Z = {};
			var V = (e = Z, t) => {
					switch (t.type) {
						case E.n: {
							const {
								subredditId: n,
								bannedUserIds: a
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...a]
							} : {
								...e,
								[n]: a
							}
						}
						case E.s: {
							const {
								subredditId: n,
								userId: a
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== a)
							}
						}
						case E.l: {
							const {
								subredditId: n,
								bannedUserIds: a
							} = t.payload, r = a[0];
							return r && e[n] && -1 === e[n].indexOf(r) ? {
								[n]: [r, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				Q = Object(k.c)({
					api: T,
					fetchedTokens: U,
					inContext: L,
					loadMore: D,
					models: H,
					search: q,
					userOrder: V
				});
			Object(j.a)({
				features: {
					banned: Q
				}
			});
			const Y = Object(i.a)(E.o),
				J = Object(i.a)(E.n),
				X = Object(i.a)(E.m),
				$ = (e, t = {}) => async (n, a, {
					apiContext: r
				}) => {
					const s = a(),
						i = t.after || "",
						o = Object(_.e)(e, i),
						c = s.features.banned.fetchedTokens[o];
					if (s.features.banned.api.pending[o] || c) return;
					n(Y({
						subredditId: e,
						fetchedToken: i
					}));
					const d = s.subreddits.models[e].name,
						l = await v(r(), d, t);
					l.ok ? n(J({
						...l.body,
						fetchedToken: i
					})) : n(X({
						subredditId: e,
						fetchedToken: i
					}))
				}, ee = Object(i.a)(E.r), te = Object(i.a)(E.q), ne = Object(i.a)(E.p), ae = (e, t) => async (n, a, {
					apiContext: r
				}) => {
					const s = a().subreddits.models[e].name,
						i = {
							username: Object(x.a)(t)
						};
					n(ee());
					const o = await v(r(), s, i);
					o.ok ? n(te(o.body)) : n(ne(o.error))
				}, re = Object(i.a)(E.l), se = Object(i.a)(E.s), ie = (e, t, n) => async (r, i, {
					apiContext: c
				}) => {
					const d = i(),
						u = d.subreddits.models[e].url,
						h = d.subreddits.models[e].name;
					t.username = Object(x.a)(t.username), r(Object(o.h)(n));
					const g = await ((e, t, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
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
					if (g.ok) {
						r(Object(o.e)(n));
						const e = {
							username: t.username
						};
						r(Object(l.f)({
							kind: I.b.SuccessMod,
							text: a.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const s = await v(c(), h, e);
						s.ok && r(re(s.body))
					} else {
						r(Object(o.f)(n, g.error));
						const e = s()(g, "body.json.errors[0][1]", a.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(l.f)({
							kind: I.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, oe = (e, t) => async (n, r, {
					apiContext: i
				}) => {
					const o = r().subreddits.models[e].url,
						c = await ((e, t, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: m.jb.POST,
							data: {
								api_type: "json",
								id: n,
								type: "banned"
							}
						}))(i(), o, t);
					if (c.ok) n(se({
						subredditId: e,
						userId: t
					})), n(Object(l.f)({
						kind: I.b.SuccessMod,
						text: a.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = s()(c, "body.json.errors[0][1]", a.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(l.f)({
							kind: I.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ce = (e, t) => async (n, a) => {
					const r = a();
					await Promise.all([(async () => {
						if (!Object(O.b)(u.a.BAN_USER)(r) && !Object(N.O)(r, {
								subredditId: e
							})) {
							const t = Object(N.R)(r, {
								subredditId: e
							});
							await n(Object(d.o)(t.name))
						}
					})(), (async () => {
						const a = Object(C.sb)(r, {
							userName: t
						});
						if (!a) return;
						const s = Object(y.h)(r, {
							subredditId: e
						});
						s && s[a.id] || await n($(e, {
							username: t
						}))
					})()]), n(Object(c.i)(u.a.BAN_USER))
				}
		},
		"./src/reddit/actions/userFlair/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return r
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			}));
			var a = n("./src/lib/loadableAction/index.ts");
			const r = Object(a.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairChanged)),
				s = Object(a.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleUserFlairInSubreddit)),
				i = Object(a.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleAssignOwnFlairPermission)),
				o = Object(a.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.saveUserFlairTemplate)),
				c = Object(a.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.deleteUserFlairTemplate)),
				d = Object(a.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.reorderUserFlairTemplates)),
				l = Object(a.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairLoadedAndModalOpened))
		},
		"./src/reddit/components/BadgeCounter/index.m.less": function(e, t, n) {
			e.exports = {
				badgeCounter: "_1-nIsCaWhGBFN-L4ZHnbGp",
				mEmpty: "_3FX9lCQKNdKXkfBiSWCjSb"
			}
		},
		"./src/reddit/components/BadgeCounter/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				o = n("./src/reddit/components/BadgeCounter/index.m.less"),
				c = n.n(o);
			t.a = ({
				className: e,
				isActive: t,
				showEmpty: n,
				unreadCount: a
			}) => t ? r.a.createElement("span", {
				className: Object(s.a)(e, c.a.badgeCounter, {
					[c.a.mEmpty]: n || a < 1
				})
			}, n || a < 1 ? "" : Object(i.b)(a)) : null
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var a, r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/actions/chat/toggle.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(a || (a = {}));
			const u = ({
				onStartChat: e,
				text: t,
				className: n,
				sendEvent: r,
				contextId: i,
				priority: o,
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
						if (b && b(t), e(), p === a.awardNotification) return f();
						r(Object(l.b)(i))
					},
					className: n,
					text: t,
					priority: o,
					Icon: c,
					redditStyle: u,
					isFullWidth: m
				}, h)
			};
			u.displayName = "ChatButton";
			const m = Object(i.b)(null, (e, {
				contextId: t,
				userId: n
			}) => ({
				onStartChat: () => {
					e(Object(o.b)(n, t))
				},
				onAddUserToQuickReplyList: () => {
					e(Object(o.a)(n))
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/ImageInput/index.tsx"),
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
				isProfileCard: a,
				isLoading: m,
				imageUrl: b,
				onFileSelected: f
			}) => {
				const h = Object(s.e)(u.a);
				return r.a.createElement("div", {
					className: Object(i.a)(p.a.Container, n)
				}, r.a.createElement("label", {
					className: p.a.HitBox
				}, r.a.createElement("span", {
					className: p.a.ImageContainer,
					role: "presentation"
				}, b ? r.a.createElement("img", {
					alt: e,
					className: p.a.Image,
					src: b
				}) : t), r.a.createElement(o.a, {
					className: p.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(l.b)();
						f(e, t)
					},
					isPending: h ? m : void 0
				}), !m && r.a.createElement("div", {
					className: Object(i.a)(p.a.EditButton, {
						[p.a.profileCard]: a
					})
				}, r.a.createElement(d.a, {
					name: "add_media",
					className: p.a.EditIcon
				}))), m && r.a.createElement(c.a, {
					className: p.a.LoadingIcon,
					sizePx: 80
				}))
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/snoovatarModal.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/selectors/gold/awardIcon.ts"),
				l = n("./src/reddit/selectors/meta.ts"),
				u = n("./src/reddit/selectors/moderatorPermissions.ts"),
				m = n("./src/reddit/selectors/profile.ts"),
				p = n("./src/reddit/selectors/structuredStyles.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				f = n("./src/reddit/selectors/tooltip.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/selectors/userFlair.ts"),
				v = n("./src/reddit/selectors/userPrefs.ts"),
				x = n("./node_modules/fbt/lib/FbtPublic.js"),
				_ = n("./src/config.ts"),
				I = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				O = n("./src/lib/lessComponent.tsx"),
				y = n("./src/lib/prettyPrintNumber/index.ts"),
				N = n("./src/reddit/components/ChatButton/index.tsx"),
				C = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				E = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				j = n("./src/reddit/components/SubscribeButton/index.tsx"),
				k = n("./src/reddit/components/UserIcon/index.tsx"),
				w = n("./src/reddit/endpoints/profile/info.ts"),
				S = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				P = n("./src/reddit/icons/fonts/Info/index.tsx"),
				T = n("./src/reddit/icons/svgs/Admin/index.tsx");
			var B = e => r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", null, r.a.createElement("path", {
					d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
				}))),
				U = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				A = n("./src/reddit/models/Gold/Award.ts"),
				L = n("./src/reddit/models/User/index.ts"),
				F = n("./src/reddit/components/HumanDate/index.tsx"),
				D = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				R = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				M = n("./src/reddit/actions/inContextModeration.ts"),
				H = n("./src/reddit/actions/modal.ts"),
				W = n("./src/reddit/actions/subredditModeration/ban.ts"),
				G = n("./src/reddit/constants/modals.ts"),
				K = n("./src/reddit/components/Hovercards/helpers.ts"),
				z = n("./src/reddit/icons/fonts/index.tsx"),
				q = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Z = n("./src/reddit/selectors/bannedUser.ts"),
				V = n("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				Q = n.n(V);
			const {
				fbt: Y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), J = Object(i.c)({
				hasModMailPermissions: Object(u.b)(q.c.mail),
				isUserBanned: (e, t) => !!Object(Z.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(h.sb)(e, {
					userName: t.username
				})
			});
			class X extends r.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: n,
						isUserBanned: a,
						onUnbanUser: s,
						sendEvent: i,
						toggleBanModal: o,
						toggleMuteModal: c
					} = this.props;
					return r.a.createElement("div", {
						className: e
					}, a ? r.a.createElement(K.a, {
						role: "button",
						onClick: () => {
							s(this.props.user.id), i(S.e(t))
						}
					}, r.a.createElement(z.a, {
						name: "ban",
						isFilled: !0,
						className: Q.a.icon
					}), Y._("Unban User", null, {
						hk: "1aASyW"
					})) : r.a.createElement(K.a, {
						role: "button",
						onClick: () => {
							o(), i(S.a(t))
						}
					}, r.a.createElement(z.a, {
						name: "ban",
						className: Q.a.icon
					}), Y._("Ban User", null, {
						hk: "3OhuLx"
					})), n && r.a.createElement(K.a, {
						role: "button",
						onClick: () => {
							c(), i(S.d(t))
						}
					}, r.a.createElement(z.a, {
						name: "mod_mute",
						className: Q.a.icon
					}), Y._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var $ = Object(s.b)(J, (e, {
					username: t,
					subredditId: n,
					contextId: a
				}) => ({
					onUnbanUser: t => e(Object(W.e)(n, t)),
					requestUserBanInfo: () => e(Object(W.c)(n, {
						username: t
					})),
					toggleBanModal: () => {
						e(Object(M.c)({
							username: t,
							subredditId: n,
							contextId: a
						})), e(Object(W.a)(n, t))
					},
					toggleMuteModal: () => {
						e(Object(M.d)({
							username: t,
							subredditId: n,
							contextId: a
						})), e(Object(H.i)(G.a.MUTE_USER))
					}
				}))(X),
				ee = n("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ne = Object(s.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(ee.g)(t.subredditId, t.username))
				}))(e => r.a.createElement(K.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(S.c(e.contextId))
					}
				}, r.a.createElement(z.a, {
					name: "tag",
					className: Q.a.icon
				}), te._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				ae = n("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				re = n.n(ae);

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const ie = O.a.wrapped(k.a, "UserIcon", re.a),
				oe = O.a.wrapped(j.a, "SubscribeButton", re.a),
				ce = O.a.wrapped(N.b, "ChatButton", re.a),
				de = O.a.wrapped(B, "KarmaIcon", re.a),
				le = O.a.wrapped(U.a, "PremiumIcon", re.a),
				ue = O.a.wrapped(I.a, "UserNameLink", re.a),
				me = O.a.div("UserNameMetaData", re.a),
				pe = O.a.div("MetaDataItem", re.a),
				be = O.a.div("Bullet", re.a),
				fe = O.a.div("UserNameContainer", re.a),
				he = O.a.div("UserInfoContainer", re.a),
				ge = O.a.div("PostKarma", re.a),
				ve = O.a.div("CommentKarma", re.a),
				xe = O.a.div("KarmaGrid", re.a),
				_e = O.a.div("GenericKarma", re.a),
				Ie = O.a.a("InfoLink", re.a),
				Oe = O.a.div("KarmaCount", re.a),
				ye = O.a.div("KarmaLabel", re.a),
				Ne = O.a.div("GenericKarmaLabel", re.a),
				Ce = O.a.div("BannerImage", re.a),
				Ee = O.a.div("UserContainer", re.a),
				je = O.a.div("BottomSpacer", re.a),
				ke = O.a.div("Container", re.a),
				we = e => r.a.createElement("div", null, r.a.createElement("div", null, r.a.createElement(ue, {
					to: `/user/${e.userName}/`
				}, e.title || e.userName), e.user.isEmployee && r.a.createElement(T.a, {
					className: re.a.adminIcon,
					title: x.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && r.a.createElement(I.a, {
					to: "/premium"
				}, r.a.createElement(le, null))), r.a.createElement(me, null, r.a.createElement(pe, null, `u/${e.userName}`, r.a.createElement(be, null, "•")), r.a.createElement(pe, null, (e.user.createdUtc || e.user.created) && r.a.createElement(F.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				Se = e => {
					const {
						showAwardKarma: t,
						user: {
							karma: n
						}
					} = e, a = {
						...w.a,
						...n
					};
					return t ? r.a.createElement(xe, null, r.a.createElement(_e, null, r.a.createElement(Oe, null, Object(y.b)(a.fromPosts)), r.a.createElement(Ne, null, x.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [x.fbt._plural(a.fromPosts)], {
						hk: "3K4oaH"
					}))), r.a.createElement(_e, null, r.a.createElement(Oe, null, Object(y.b)(a.fromComments)), r.a.createElement(Ne, null, x.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [x.fbt._plural(a.fromComments)], {
						hk: "3gKRx9"
					}))), r.a.createElement(_e, null, r.a.createElement(Oe, null, Object(y.b)(a.fromAwardsReceived)), r.a.createElement(Ne, null, x.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [x.fbt._plural(a.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), r.a.createElement(Ie, {
						href: A.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.a.createElement(P.a, {
						className: re.a.infoIcon
					})))), r.a.createElement(_e, null, r.a.createElement(Oe, null, Object(y.b)(a.fromAwardsGiven)), r.a.createElement(Ne, null, x.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [x.fbt._plural(a.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), r.a.createElement(Ie, {
						href: A.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.a.createElement(P.a, {
						className: re.a.infoIcon
					}))))) : r.a.createElement(he, null, r.a.createElement(de, null), r.a.createElement(ge, null, r.a.createElement(Oe, null, Object(y.b)(a.fromPosts)), r.a.createElement(ye, null, x.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [x.fbt._plural(a.fromPosts)], {
						hk: "3K4oaH"
					}))), r.a.createElement(ve, null, r.a.createElement(Oe, null, Object(y.b)(a.fromComments)), r.a.createElement(ye, null, x.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [x.fbt._plural(a.fromComments)], {
						hk: "3gKRx9"
					}))))
				},
				Pe = e => {
					const {
						className: t,
						contextId: n,
						currentUser: a,
						hideNSFWPref: s,
						hoverId: i,
						isLoggedIn: o,
						onClickSnoovatar: c,
						origin: d,
						moderatorPermissions: l,
						prefersReducedAnimations: u,
						profile: m,
						sendEvent: p,
						showAwardKarma: b,
						style: f,
						subredditId: h,
						topAwardIcon: g,
						userName: v,
						user: I,
						userFlair: O,
						userIsBanned: y,
						userProfileStyles: N,
						acceptChats: E,
						isCommentAuthorBlocked: j
					} = e;
					if (!I) return r.a.createElement(ke, {
						style: f
					});
					const k = !!a && Object(L.e)(a) === v,
						w = !!(null == a ? void 0 : a.snoovatarFullBodyAsset),
						P = I.accountIcon || `${_.a.assetPath}/img/snoo_user_placeholder.png`,
						T = l && l.flair,
						B = l && l.access,
						U = O && O.templateIds && O.templateIds.length > 0,
						A = O && O.displaySettings && O.displaySettings.isEnabled,
						{
							awardedLastMonth: F
						} = I,
						M = !!I.snoovatarFullBodyAsset,
						H = I.isNSFW && s;
					let W;
					return W = M ? !H && N && N.bannerBackgroundImage || void 0 : H ? `${_.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, r.a.createElement(ke, {
						className: t,
						id: i,
						style: f
					}, !M && W && r.a.createElement(Ce, {
						style: {
							backgroundImage: `url('${W}')`
						}
					}), r.a.createElement(Ee, null, M ? r.a.createElement(R.a, {
						isHovercard: !0,
						bannerBackgroundImage: W,
						compact: !0,
						currentUserHasSnoovatar: w,
						isEmployee: I.isEmployee,
						isGold: I.isGold,
						isNSFW: I.isNSFW,
						isOwnProfile: k,
						onClickSnoovatar: c,
						prefersReducedAnimations: !!u,
						snoovatarUrl: I.snoovatarFullBodyAsset,
						title: null == m ? void 0 : m.title,
						userCreated: I.created,
						username: v,
						url: `/user/${e.userName}/`
					}) : r.a.createElement(fe, null, r.a.createElement(ie, {
						iconUrl: P,
						isNSFW: I.isNSFW,
						userName: v
					}), r.a.createElement(we, {
						origin: d,
						title: null == m ? void 0 : m.title,
						user: I,
						userName: v
					})), r.a.createElement(Se, {
						showAwardKarma: b,
						user: I
					}), F && r.a.createElement(D.a, {
						recentAwardings: F,
						topAwardIcon: g,
						username: v
					}), o && !k && !y && E && !j && r.a.createElement(ce, {
						contextId: n,
						userId: I.id,
						text: x.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), I.hasUserProfile && !y && !j && !k && I.enableFollowers && r.a.createElement(oe, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(S.g)(e ? "unfollow" : "follow", n),
						isFullWidth: !0,
						small: !0
					})), B && n && !k && h && r.a.createElement($, {
						contextId: n,
						subredditId: h,
						sendEvent: p,
						username: v
					}), T && n && U && A && h && r.a.createElement(ne, {
						contextId: n,
						subredditId: h,
						sendEvent: p,
						username: v
					}), r.a.createElement(C.i, {
						contextId: n,
						subredditId: h,
						user: I
					}), !(B || o) && r.a.createElement(je, null))
				},
				Te = Object(E.a)(Pe),
				Be = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return r.a.createElement(Te, se({
						isOpen: t
					}, e))
				};
			Be.WrappedComponent = Pe;
			var Ue = Be;
			const Ae = Object(i.c)({
					activeTooltipId: f.a,
					currentUser: h.k,
					isLoggedIn: h.K,
					hideNSFWPref: h.C,
					moderatorPermissions: (e, {
						subredditId: t
					}) => t ? Object(u.m)(e, {
						subredditId: t
					}) : void 0,
					origin: l.j,
					prefersReducedAnimations: v.c,
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
					user: h.sb,
					userFlair: (e, {
						subredditId: t
					}) => t ? Object(g.d)(e, {
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
				Le = Object(s.b)(Ae, (e, t) => ({
					onClickSnoovatar: () => e(Object(o.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(c.i)())
				}));
			t.a = Le(e => r.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, r.a.createElement(Ue, {
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/reddit/components/Hovercards/helpers.ts"),
				i = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				o = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				d = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			const m = e => Object(o.a)(e.id) ? e.belongsTo.id : e.subredditId;
			class p extends r.a.Component {
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
					}), n = `${t}-hover-id`, a = e.author || e.postOrComment.author;
					return r.a.createElement(i.a, {
						authorOrSubredditName: a,
						className: e.hoverDivClassName,
						hoverId: n,
						sendHoverEvent: this.sendEvent,
						tooltipId: t
					}, e.children, r.a.createElement(c.a, {
						className: e.className,
						contextId: e.postOrComment.id,
						hoverId: n,
						sendEvent: e.sendEvent,
						subredditId: m(e.postOrComment),
						tooltipId: t,
						tooltipType: e.tooltipType,
						userName: a,
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
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, n) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return c
			}));
			var a = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/Inline/index.tsx"),
				s = n("./src/reddit/components/Hovercards/helpers.m.less"),
				i = n.n(s);
			const o = a.a.wrapped(r.a, "UserActionItem", i.a),
				c = e => {
					const {
						author: t,
						itemId: n,
						subredditName: a,
						tooltipIdPrefix: r,
						tooltipType: s
					} = e;
					let i = r;
					return n && (i = `${i}--${n}`), s && (i = `${i}--${s}`), t && (i = `${i}--${t}`), a && (i = `${i}--${a}`), i
				}
		},
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return o
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return h
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/timeAgo/index.ts"),
				i = n("./src/reddit/hooks/useLocale.ts");
			var o = function({
					seconds: e,
					...t
				}) {
					var n;
					const a = Object(i.a)(),
						o = {
							...t,
							locale: null !== (n = t.locale) && void 0 !== n ? n : a
						};
					return r.a.createElement(r.a.Fragment, null, Object(s.d)(e, o))
				},
				c = n("./src/lib/humanizeDate/index.ts");
			var d = function({
					seconds: e,
					...t
				}) {
					var n;
					const a = Object(i.a)(),
						s = {
							...t,
							locale: null !== (n = t.locale) && void 0 !== n ? n : a
						};
					return r.a.createElement(r.a.Fragment, null, Object(c.a)(e, s))
				},
				l = n("./src/lib/constants/index.ts");
			var u = function({
					seconds: e,
					locale: t
				}) {
					const n = Object(i.a)(),
						a = null != t ? t : n;
					return r.a.createElement(r.a.Fragment, null, function(e, t = l.D) {
						const n = e * l.Sb;
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
					}(e, a))
				},
				m = n("./node_modules/fbt/lib/FbtPublic.js"),
				p = n("./src/lib/eventTools/index.ts");

			function b(e, t = l.D) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function f(e, t, n = !1, a = l.D) {
				const r = Object(p.e)(e, t),
					s = new Date(e * l.Sb);
				let i;
				if (r === p.a.Live || n) return m.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return r === p.a.Future ? i = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(p.b)(e) >= 5 ? b(s, a) : function(e, t = l.D) {
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(s, a) : r === p.a.Past && (i = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : b(s, a)), `${i} @ ${function(e,t=l.D){return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(s,a)}`
			}
			var h = function({
				startTime: e,
				endTime: t,
				isLive: n,
				locale: a
			}) {
				const s = Object(i.a)(),
					o = null != a ? a : s;
				return r.a.createElement(r.a.Fragment, null, f(e, t, n, o))
			};
			n("./src/lib/humanizeUTCDate/index.tsx")
		},
		"./src/reddit/components/InboxBanner/Banner.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/controls/Button/index.tsx"),
				o = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/components/InboxBanner/index.m.less"),
				d = n.n(c);
			t.a = ({
				className: e,
				closeButtonText: t,
				closeIcon: n,
				descriptionText: r,
				primaryButtonText: c,
				titleText: l,
				onClose: u,
				onClick: m
			}) => s.a.createElement("div", {
				className: Object(a.a)(d.a.banner, e)
			}, s.a.createElement("div", {
				className: d.a.bannerTitleContainer
			}, l && s.a.createElement("h4", {
				className: d.a.bannerTitle
			}, l), n && s.a.createElement(i.t, {
				onClick: u,
				Icon: Object(o.b)("close_fill"),
				className: Object(a.a)(d.a.closeIcon, d.a.closeButton),
				size: i.d.XXS,
				priority: i.c.Plain
			})), r && s.a.createElement("p", {
				className: d.a.bannerDescription
			}, r), s.a.createElement("div", {
				className: d.a.bannerButtonsContainer
			}, c && s.a.createElement(i.t, {
				text: c,
				priority: i.c.Tertiary,
				className: Object(a.a)(d.a.button, d.a.primaryButton),
				size: i.d.XS,
				onClick: m
			}), t && s.a.createElement(i.t, {
				text: t,
				onClick: u,
				priority: i.c.Plain,
				size: i.d.XS,
				className: Object(a.a)(d.a.button, d.a.closeButton)
			})))
		},
		"./src/reddit/components/InboxBanner/PolicyBanner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/components/InboxBanner/Banner.tsx"),
				o = n("./src/reddit/helpers/trackers/inbox.ts"),
				c = n("./src/reddit/hooks/useTracking.ts"),
				d = n("./src/reddit/components/InboxBanner/index.m.less"),
				l = n.n(d);
			const u = ({
				onClose: e,
				pageType: t
			}) => {
				const n = Object(c.a)(),
					r = a.fbt._("We’ve updated our {userAgreement} and {privacyPolicy}. Take a look, as the changes take effect September 12, 2021.", [a.fbt._param("userAgreement", s.a.createElement("a", {
						className: l.a.underlineLink,
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "User Agreement")), a.fbt._param("privacyPolicy", s.a.createElement("a", {
						className: l.a.underlineLink,
						href: "https://www.redditinc.com/policies/privacy-policy",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "Privacy Policy"))], {
						hk: "3bGC4g"
					});
				return s.a.createElement(i.a, {
					className: l.a.policyBanner,
					titleText: a.fbt._("Reddit’s User Agreement & Privacy Policy", null, {
						hk: "32fxCY"
					}),
					descriptionText: r,
					primaryButtonText: a.fbt._("Ok", null, {
						hk: "1IJxzv"
					}),
					onClick: a => {
						a.stopPropagation(), e(), n(Object(o.f)(t, o.a.Confirm))
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
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/notifications/index.ts"),
				o = n("./src/lib/notifications/constants.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/BadgeCounter/index.tsx"),
				u = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				m = n("./node_modules/lodash/omit.js"),
				p = n.n(m),
				b = n("./src/reddit/components/InboxBanner/Banner.tsx"),
				f = n("./src/reddit/components/InboxBanner/index.m.less"),
				h = n.n(f);
			const g = ({
				onClose: e,
				onTurnOnBrowserNotifications: t
			}) => {
				return s.a.createElement(b.a, {
					className: h.a.dnPromptBanner,
					titleText: a.fbt._("Don’t miss out on updates — Turn on desktop notifications.", null, {
						hk: "10oNqB"
					}),
					onClose: t => {
						t.stopPropagation(), e()
					},
					closeIcon: !0,
					primaryButtonText: a.fbt._("Turn On", null, {
						hk: "3hywR9"
					}),
					closeButtonText: a.fbt._("No Thanks", null, {
						hk: "2GQOmV"
					}),
					onClick: n => {
						t(), e()
					}
				})
			};
			var v = n("./src/reddit/components/InboxBanner/PolicyBanner.tsx"),
				x = n("./src/config.ts"),
				_ = n("./src/reddit/controls/Button/index.tsx"),
				I = n("./src/reddit/controls/InternalLink/index.tsx"),
				O = n("./src/reddit/icons/fonts/index.tsx"),
				y = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				N = n("./src/reddit/routes/wrappedreddit/index.ts");
			const C = {
					background: `url(${x.a.assetPath}/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png)`,
					backgroundSize: "cover"
				},
				E = ({
					onClose: e
				}) => s.a.createElement("div", {
					className: Object(c.a)(h.a.banner, h.a.wrappedRedditBanner),
					style: C
				}, s.a.createElement(I.a, {
					to: N.b,
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
				}, a.fbt._("Reddit Recap", null, {
					hk: "tRxDK"
				}))), s.a.createElement("p", {
					className: h.a.bannerDescription
				}, a.fbt._("It’s that time of the year. Come check out your 2021 highlights on Reddit.", null, {
					hk: "eufBA"
				}))), s.a.createElement("img", {
					alt: a.fbt._("Image Banner for Reddit Recap", null, {
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
				k = n("./src/reddit/components/ResizeSensor/index.tsx"),
				w = n("./src/reddit/components/InboxTooltip/index.m.less"),
				S = n.n(w);
			const P = 3;
			class T extends s.a.Component {
				constructor() {
					super(...arguments), this.ref = s.a.createRef(), this.handleResize = () => {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						e !== this.props.notificationHeight && this.props.setNotificationHeight(e, this.props.index)
					}
				}
				componentDidMount() {
					if (this.props.index + 1 <= P) {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						this.props.setNotificationHeight(e, this.props.index)
					}
				}
				render() {
					const {
						activeOverflowMenuId: e,
						decreaseSubredditNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: a,
						hideSubredditNotifications: r,
						blockAwarder: i,
						index: o,
						isInboxPostEmbedEnabled: c,
						markNotificationAsRead: d,
						notification: l,
						setActiveOverflowMenuId: u,
						onItemClick: m
					} = this.props, p = o + 1 <= P;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						ref: this.ref,
						className: S.a.notificationResizeWrapper
					}, s.a.createElement(j.a, {
						activeOverflowMenuId: e,
						decreaseSubredditNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: a,
						hideSubredditNotifications: r,
						isInboxPostEmbedEnabled: c,
						isInTooltip: !0,
						markNotificationAsRead: d,
						notification: l,
						setActiveOverflowMenuId: u,
						onItemClick: m,
						blockAwarder: i
					}), !!p && s.a.createElement(k.a, {
						onResize: this.handleResize
					})))
				}
			}
			var B = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				U = n("./src/reddit/helpers/trackers/inbox.ts"),
				A = n("./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/EmptyStateComponent.tsx");

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const F = {},
				D = "",
				R = 0,
				M = "200px",
				H = "250px",
				W = "270px",
				G = 100,
				K = .5,
				z = 5;
			class q extends s.a.Component {
				constructor() {
					super(...arguments), this.container = s.a.createRef(), this.state = {
						notificationHeights: F,
						currentNotificationCursorIndex: -1
					}, this.resetOverflowMenu = () => {
						this.props.activeOverflowMenuId.length > R && this.props.setActiveOverflowMenuId(D)
					}, this.getContainerHeight = () => {
						const {
							notificationHeights: e
						} = this.state, {
							isDNInboxPromptBannerEnabled: t,
							isInboxPrivacyPolicyBannerEnabled: n,
							isLoggedIn: a
						} = this.props, r = t || n;
						let s = 0;
						for (const i in e) s += e[i];
						return 0 === s ? r ? H : a ? M : W : (r && (s += G), s)
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
						} = this.state, n = t + z, a = n > e.length ? n : e.length - 1;
						this.setState({
							currentNotificationCursorIndex: a
						})
					}, this.renderNotifications = () => {
						const e = p()(this.props, ["notifications"]),
							{
								notificationHeights: t,
								currentNotificationCursorIndex: n
							} = this.state,
							{
								isInboxInfiniteScrollEnabled: a,
								notifications: r
							} = this.props,
							i = r.length > n + z;
						return (a && r.length > 0 && i ? r.slice(0, n + 1) : r).map((n, a) => s.a.createElement(T, L({}, e, {
							index: a,
							key: a,
							notification: n,
							notificationHeight: t[a],
							setNotificationHeight: this.setNotificationHeight
						})))
					}, this.loadNotifications = e => {
						const {
							cursor: t,
							fetchNotifications: n,
							isInboxInfiniteScrollEnabled: a,
							notifications: r
						} = this.props;
						if (e.isIntersecting) {
							const e = r.length > this.state.currentNotificationCursorIndex + z;
							this.props.notifications.length > 0 && a && e ? this.updateCurrentCursorIndex() : t && n({
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
						isInboxInfiniteScrollEnabled: a,
						isLoggedIn: r,
						isPending: i,
						notifications: o,
						setDesktopNotificationsPromptSeen: c,
						setInboxPrivacyPolicyBannerSeen: d,
						showBrowserNotificationsPermissionSettings: l,
						isWrappedRedditBannerEnabled: m,
						setDesktopNotificationWrappedRedditBannerSeen: p
					} = this.props, b = !(!o || !o.length), f = this.getContainerHeight(), h = o.length > this.state.currentNotificationCursorIndex + z, x = n || t || m;
					return s.a.createElement("div", {
						className: S.a.notificationList,
						ref: this.container,
						style: b ? {
							height: f,
							maxHeight: f
						} : {
							minHeight: M
						}
					}, x && s.a.createElement("div", {
						className: S.a.notificationBannerContainer
					}, n && s.a.createElement(v.a, {
						onClose: d,
						pageType: U.b.MiniInbox
					}), t && s.a.createElement(g, {
						onTurnOnBrowserNotifications: l,
						onClose: c
					}), m && s.a.createElement(E, {
						onClose: p
					})), !b && i && s.a.createElement(B.a, null), !b && !i && s.a.createElement(A.a, {
						isBannerEnabled: x,
						isLoggedIn: r,
						inTooltip: !0
					}), b && this.renderNotifications(), a && b && !i && (e || h) && s.a.createElement(u.a, {
						onChange: this.loadNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: K
					}, s.a.createElement("div", null)))
				}
			}
			var Z = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts"),
				V = n("./src/reddit/helpers/localStorage/index.ts");
			var Q = n("./src/reddit/hooks/useInboxPrivacyPolicyBannerSeen.ts"),
				Y = n("./src/reddit/hooks/useTracking.ts");

			function J() {
				return (J = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const X = [],
				$ = d.a.div("StyledDropdown", S.a),
				ee = ({
					isLoggedIn: e,
					onMessagesClick: t,
					onBarClick: n,
					markAllAsRead: i,
					messagesBadgeCount: o,
					sendInboxClickSettings: d
				}) => {
					const u = !!o,
						m = Object(r.useCallback)(() => {
							t(), n()
						}, [t, n]),
						p = Object(r.useCallback)(() => {
							d(), n()
						}, [d, n]);
					return s.a.createElement("nav", {
						className: S.a.topNav
					}, s.a.createElement("span", {
						className: S.a.topNavTitle
					}, a.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), e && s.a.createElement("span", {
						className: S.a.topNavLinks
					}, s.a.createElement("span", {
						className: S.a.messagesLinkContainer
					}, s.a.createElement(I.a, {
						className: Object(c.a)(S.a.messagesLink, {
							[S.a.mActive]: u
						}),
						onClick: m,
						to: u ? "/message/unread" : "/message/messages"
					}, a.fbt._("Messages", null, {
						hk: "hulKY"
					}), s.a.createElement(l.a, {
						className: S.a.badgeCount,
						isActive: u,
						unreadCount: o
					}))), s.a.createElement("button", {
						className: S.a.navLink,
						onClick: i
					}, s.a.createElement(O.a, {
						name: "mark_read",
						className: S.a.icon
					})), s.a.createElement(I.a, {
						className: S.a.navLink,
						onClick: p,
						to: "/settings/notifications"
					}, s.a.createElement(O.a, {
						name: "settings",
						className: S.a.icon
					}))))
				},
				te = e => s.a.createElement("div", {
					className: S.a.bottomBar
				}, s.a.createElement(I.a, {
					className: S.a.bottomLink,
					onClick: () => {
						e.sendInboxClickSeeAll(), e.onBarClick()
					},
					to: "/notifications"
				}, a.fbt._("See All", null, {
					hk: "3L3tFc"
				}))),
				ne = e => {
					const t = Object(Y.a)(),
						{
							clearMessageTabBadgeCount: n,
							inboxBadgeCount: a,
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
						[g, v] = function(e) {
							const [t, n] = Object(r.useState)(Object(V.t)(e));
							return [t, Object(r.useCallback)(() => {
								n(!0), Object(V.Cb)(e)
							}, [])]
						}(h),
						[x, _] = Object(Z.a)(h),
						[I, O] = Object(Q.a)(h),
						y = !(!l || !l.length),
						N = Object(i.a)(),
						C = N === o.a.Closed || N === o.a.Default || N === o.a.Denied,
						E = b && C && !x;
					return s.a.createElement($, null, s.a.createElement("div", {
						className: S.a.tooltipContainer
					}, s.a.createElement(ee, {
						markAllAsRead: () => {
							e.markAllAsRead(), t(Object(U.g)({
								isMiniInbox: !0
							}))
						},
						messagesBadgeCount: d,
						onMessagesClick: () => {
							t(Object(U.p)({
								badgeCount: a,
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
						isDNInboxPromptBannerEnabled: E,
						isInboxPrivacyPolicyBannerEnabled: m && !I,
						setInboxPrivacyPolicyBannerSeen: O,
						isWrappedRedditBannerEnabled: f && !g,
						setDesktopNotificationWrappedRedditBannerSeen: () => {
							v(), t(Object(U.o)())
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
			var a = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(a.a)({
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
			t.a = r
		},
		"./src/reddit/components/NotificationUnit/Placeholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/reddit/components/NotificationUnit/index.m.less"),
				i = n.n(s);
			const o = () => r.a.createElement("li", {
					className: i.a.placeholderWrapper
				}, r.a.createElement("span", {
					className: i.a.placeholderAvatar
				}), r.a.createElement("span", {
					className: i.a.placeholderContent
				})),
				c = () => r.a.createElement("ol", null, r.a.createElement(o, null), r.a.createElement(o, null), r.a.createElement(o, null))
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/higherOrderComponents/asTooltip.tsx"),
				i = n("./src/reddit/constants/elementIds.ts"),
				o = n("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const n = Object(s.a)(e, t);
				class a extends r.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(i.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return r.a.createElement(n, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(o.b)(a)
			}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/config.ts"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				o = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				c = n.n(o);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class l extends r.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: n
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: a,
						totalCount: o
					} = t, l = a.description ? a.description : a.name;
					return r.a.createElement("a", {
						className: c.a.AwardedLastMonth,
						href: `${s.a.oldRedditUrl}/user/${n}/gilded`
					}, r.a.createElement("div", {
						className: c.a.iconColumn
					}, r.a.createElement("img", {
						alt: l,
						className: c.a.icon,
						src: e
					}), o > 1 && r.a.createElement("span", {
						className: c.a.count
					}, `+${Object(i.b)(o-1)}`)), r.a.createElement("div", {
						className: c.a.textColumn
					}, d._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [d._param("award-name", a.name), d._plural(o)], {
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
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/models/Image/index.tsx"),
				o = n("./src/reddit/components/EditableImage/index.tsx"),
				c = n("./src/reddit/models/User/index.ts"),
				d = n("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				u = n.n(l);
			class m extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const n = await Object(i.e)(e);
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
						hideNSFWPref: r,
						isNSFW: i,
						userName: d
					} = this.props, {
						isUpdating: l
					} = this.state, m = e ? s.a.createElement("div", {
						className: u.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return n && Object(c.e)(n) === d ? s.a.createElement(o.a, {
						altText: a.fbt._("{userName} banner image", [a.fbt._param("userName", d)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, m) : i && r ? null : m
				}
			}
			t.a = Object(d.a)(m)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/actions/preferences.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const o = Object(r.c)({
					currentUser: i.k,
					hideNSFWPref: i.C
				}),
				c = Object(a.b)(o, e => ({
					imageUpdateRequested: (t, n) => e(Object(s.C)(t, n))
				}));
			t.a = c
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router/esm/react-router.js"),
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
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(o.i)(({
				isHovercard: e,
				username: t,
				isAvatarPost: n,
				post: o,
				share: f
			}) => {
				const v = Object(l.b)(),
					x = Object(i.d)(),
					_ = o && o.id,
					I = o && o.voteState;
				let O = null;
				_ || (O = e ? "user_hovercard" : "profile_overview");
				const y = Object(r.useCallback)(() => v(Object(m.g)(e ? "user_hovercard" : "profile_overview", t)), [e, v, t]);
				return s.a.createElement(u.t, {
					onClick: () => {
						n ? (v(m.h), _ && I === b.a.notVoted && x(Object(c.jb)(_))) : y();
						const e = n ? "postify" : "copy";
						x(Object(d.b)({
							clickSource: O,
							share: f,
							source: e
						}))
					},
					className: Object(a.a)(h.a.snoovatarButton, h.a.snoovatarExtraPadding, h.a.compactButtonLayout, {
						[h.a.avatarPostifyButton]: n
					}),
					isFullWidth: !0
				}, s.a.createElement(p.a, {
					className: Object(a.a)({
						[h.a.shirtIcon]: !n,
						[h.a.avatarPostButtonShirtIcon]: n
					})
				}), g._("Try this Look", null, {
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				o = n("./src/reddit/icons/fonts/index.tsx"),
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
				isOwnProfile: a,
				onClick: d
			}) {
				return r.a.createElement(i.t, {
					onClick: d,
					isFullWidth: !0,
					className: Object(s.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !t && a,
						[l.a.compactButtonLayout]: e
					}, n)
				}, t ? r.a.createElement(c.a, {
					className: l.a.shirtIcon
				}) : r.a.createElement("div", {
					className: l.a.shirtIcon
				}), t ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : a ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), t ? r.a.createElement("div", {
					className: l.a.chevronIcon
				}) : r.a.createElement(o.a, {
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				i = n("./src/reddit/icons/svgs/Close/index.tsx"),
				o = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				c = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				d = n.n(c),
				l = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				u = n.n(l);
			t.a = function({
				bannerBackgroundImage: e,
				isNSFW: t,
				username: n,
				editMode: a,
				isDeletingBanner: c,
				onDeleteBanner: l
			}) {
				return r.a.createElement("div", {
					className: d.a.bannerWrapper
				}, r.a.createElement(o.a, {
					bannerUrl: e,
					isNSFW: t,
					userName: n
				}), a && e && (c ? r.a.createElement(s.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : r.a.createElement(i.a, {
					className: u.a.closeIcon,
					onClick: l
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/reddit/controls/InternalLink/index.tsx"),
				i = n("./src/reddit/components/HumanDate/index.tsx");

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
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
				userCreated: a,
				username: c,
				...d
			}) {
				const l = t ? r.a.createElement(r.a.Fragment, null, "u/", c, " · ", r.a.createElement(i.d, {
					seconds: a,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${c}`;
				return n ? r.a.createElement(s.a, o({}, d, {
					className: e,
					to: n
				}), l) : r.a.createElement("span", o({}, d, {
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
			var a = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./src/reddit/icons/svgs/Admin/index.tsx"),
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
			}) => i.a.createElement("h1", {
				className: u.a.snoovatarUserTitle
			}, e || t, n && i.a.createElement(o.a, {
				className: u.a.snoovatarAdminIcon,
				title: r.fbt._("Reddit admin", null, {
					hk: "goUUb"
				})
			}), s && i.a.createElement("a", {
				title: r.fbt._("{username} has Reddit Premium", [r.fbt._param("username", t)], {
					hk: "3Fylv"
				}),
				href: `${a.a.redditUrl}/premium`
			}, i.a.createElement(d.a, {
				className: u.a.snoovatarPremiumIcon
			})), l && i.a.createElement(c.a, {
				className: u.a.snoovatarNsfwIcon,
				title: r.fbt._("NSFW - Adult Content", null, {
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/selectors/experiments/econ/index.ts"),
				l = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				u = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				m = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				p = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				b = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				f = n.n(b);
			const h = 25;

			function g(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function v(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const x = g("particleDelay", f.a),
				_ = g("particleX", f.a),
				I = g("particleFloat", f.a),
				O = () => {
					const e = v(_),
						t = v(I),
						n = v(x);
					return Object(i.a)(f.a.particle, e, t, n)
				};
			class y extends r.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < h; t++) e.push(this.createParticle(t));
					return r.a.createElement("div", {
						role: "presentation",
						className: f.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return r.a.createElement("div", {
						key: e,
						className: `${O()}`
					})
				}
			}
			var N = y,
				C = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				E = n.n(C),
				j = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: n,
				editMode: a,
				isDeletingBanner: b,
				isEmployee: h,
				isGold: g,
				isNSFW: v,
				isOwnProfile: x,
				onClickSnoovatar: _,
				onDeleteBanner: I,
				prefersReducedAnimations: O,
				snoovatarUrl: y,
				title: C,
				userCreated: k,
				username: w,
				url: S,
				isHovercard: P
			}) => {
				const T = Object(s.e)(e => !x && !!y && Object(d.g)(e));
				return r.a.createElement(r.a.Fragment, null, r.a.createElement(m.a, {
					bannerBackgroundImage: e,
					editMode: !!a,
					isNSFW: v,
					username: w,
					isDeletingBanner: !!b,
					onDeleteBanner: I
				}), r.a.createElement("div", {
					className: f.a.snoovatarContainer
				}, g && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: f.a.topGlow
				}), r.a.createElement("div", {
					className: f.a.bottomGlow
				}), !O && r.a.createElement(N, null)), r.a.createElement("img", {
					className: Object(i.a)(f.a.snoovatar, {
						[f.a.premiumGlow]: g
					}),
					src: y || void 0
				})), !a && x && r.a.createElement(o.a, {
					to: "/settings/profile",
					className: f.a.snoovatarSettingsLink
				}, r.a.createElement(c.a, {
					name: "settings",
					className: E.a.settingsIcon
				})), r.a.createElement(j.a, {
					isEmployee: h,
					isGold: g,
					isNSFW: v,
					title: C,
					username: w
				}), r.a.createElement(p.a, {
					className: f.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: w,
					userCreated: k,
					url: S
				}), (x || !n && !!y) && r.a.createElement(l.a, {
					compact: t,
					currentUserHasSnoovatar: n,
					isOwnProfile: x,
					onClick: _
				}), T && r.a.createElement(u.a, {
					username: w,
					isHovercard: !!P,
					share: {
						username: w
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
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/controls/Button/index.tsx"),
				o = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const m = (e, t, n) => null != n ? n : t ? e : i.c.Plain,
				p = ({
					border: e,
					priority: t,
					small: n,
					...a
				}) => s.a.createElement(i.t, u({}, a, {
					priority: m(i.c.Primary, e, t),
					className: Object(l.a)(a.className, d.a.BaseButton),
					size: n ? i.d.S : i.d.M
				})),
				b = e => s.a.createElement(s.a.Fragment, null, s.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? a.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : a.fbt._("Following", null, {
					hk: "1wQlVR"
				})), s.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? a.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : a.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				f = ({
					buttonType: e,
					border: t,
					priority: n,
					small: a,
					...r
				}) => s.a.createElement(i.t, u({}, r, {
					priority: m(i.c.Secondary, t, n),
					className: Object(l.a)(r.className, d.a.BaseButton),
					size: a ? i.d.S : i.d.M,
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
						priority: a,
						small: r = !1,
						isFullWidth: i = !1
					} = this.props, c = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: a,
						small: r,
						isFullWidth: i
					};
					return this.props.userIsSubscriber ? s.a.createElement(f, u({}, c, {
						buttonType: this.props.identifier.type
					})) : s.a.createElement(p, u({}, c, {
						id: n
					}), this.props.children, Object(o.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				s = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(a.c)(s.a))
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			class s extends r.a.Component {
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
					} = this, n = "string" == typeof t.value ? t.value : "", a = "object" == typeof t.value ? t.value : null, s = n || a;
					return r.a.createElement("div", {
						className: e.className
					}, n && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), (!s || e.multiple || void 0 !== e.isPending && !e.isPending) && r.a.createElement("input", {
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				o = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => r.a.createElement("div", {
				className: Object(s.a)(o.a.loadingIcon, t, {
					[o.a.mCentered]: e
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
				return i
			})), n.d(t, "b", (function() {
				return o
			}));
			var a = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json"),
				s = n("./src/redditGQL/operations/UpdateNotificationPreferences.json");
			const i = (e, t) => Object(a.a)(e, {
					...r,
					variables: t
				}),
				o = (e, t) => Object(a.a)(e, {
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
				return a
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
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
				return g
			})), n.d(t, "j", (function() {
				return v
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
				return N
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "o", (function() {
				return j
			}));
			var a, r, s, i, o, c, d = n("./src/reddit/constants/tracking.ts"),
				l = n("./src/reddit/selectors/telemetry.ts"),
				u = n("./src/telemetry/index.ts");
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(a || (a = {})),
			function(e) {
				e.HideNotifications = "hide_notification", e.HideSubreddit = "hide_subreddit", e.HideUpdates = "hide_updates", e.BlockAwarder = "block_awarder", e.DecreaseSubredditUpdates = "disable_frequent"
			}(r || (r = {})),
			function(e) {
				e.MiniInbox = "mini_inbox", e.Inbox = "inbox"
			}(s || (s = {})),
			function(e) {
				e.Inbox = "inbox", e.Nav = "nav", e.Settings = "notification_app_settings"
			}(i || (i = {})),
			function(e) {
				e[e.FIRST = 1] = "FIRST", e[e.SECOND = 2] = "SECOND"
			}(o || (o = {})),
			function(e) {
				e.Confirm = "confirm"
			}(c || (c = {}));
			const m = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: a
				}) => r => ({
					...l.n(r),
					action: d.c.VIEW,
					noun: "inbox_notification",
					source: i.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: a
					}
				}),
				p = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: a,
					awardId: r
				}) => s => {
					Object(u.a)({
						...l.n(s),
						action: "receive",
						noun: "inbox_notification",
						source: i.Inbox,
						inbox: {
							id: e,
							isClicked: t,
							isViewed: n
						},
						notification: {
							type: a
						},
						goldPurchase: {
							awardId: r
						}
					})
				},
				b = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: a,
					awardId: r,
					position: s
				}) => o => ({
					...l.n(o),
					action: d.c.CLICK,
					noun: "inbox_notification",
					source: i.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: a
					},
					goldPurchase: {
						awardId: r
					},
					actionInfo: {
						position: s
					}
				}),
				f = ({
					badgeCount: e,
					tab: t
				}) => n => ({
					...l.n(n),
					action: d.c.VIEW,
					noun: "inbox",
					source: i.Inbox,
					inbox: {
						badgeCount: e,
						tab: t
					}
				}),
				h = ({
					badgeCount: e,
					tab: t
				}) => t => ({
					...l.n(t),
					action: d.c.VIEW,
					noun: "mini_inbox",
					source: i.Inbox,
					inbox: {
						badgeCount: e,
						tab: a.Activity
					}
				}),
				g = ({
					badgeCount: e
				}) => t => ({
					...l.n(t),
					action: d.c.CLICK,
					noun: "inbox",
					source: i.Nav,
					inbox: {
						badgeCount: e
					}
				}),
				v = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: a,
					awardId: r
				}) => s => ({
					...l.n(s),
					action: d.c.CLICK,
					noun: "inbox_notification_overflow",
					source: i.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: a
					},
					goldPurchase: {
						awardId: r
					}
				}),
				x = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: a
				}) => r => ({
					...l.n(r),
					action: d.c.VIEW,
					noun: "inbox_notification_overflow",
					source: i.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: a
					}
				}),
				_ = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: a,
					type: r
				}) => s => ({
					...l.n(s),
					action: d.c.CLICK,
					noun: "overflow_option",
					source: i.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: a
					},
					notification: {
						type: r
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
					isViewed: a,
					type: r
				}) => s => ({
					...l.n(s),
					action: d.c.UNDO,
					noun: "overflow_option",
					source: i.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: a
					},
					notification: {
						type: r
					},
					actionInfo: {
						...l.c(s),
						type: e
					}
				}),
				O = e => t => ({
					...l.n(t),
					action: d.c.CLICK,
					noun: "notification_app_settings",
					source: i.Inbox,
					actionInfo: {
						...l.c(t),
						pageType: e
					}
				}),
				y = () => e => ({
					...l.n(e),
					action: d.c.CLICK,
					noun: "see_all",
					source: i.Inbox,
					actionInfo: {
						...l.c(e),
						pageType: s.MiniInbox
					}
				}),
				N = () => e => ({
					...l.n(e),
					action: d.c.CLICK,
					noun: "messages",
					source: i.Inbox
				}),
				C = ({
					isMiniInbox: e
				}) => t => ({
					...l.n(t),
					action: d.c.CLICK,
					noun: "mark_all_as_read",
					source: i.Inbox,
					actionInfo: e ? {
						...l.c(t),
						pageType: s.MiniInbox
					} : {}
				}),
				E = (e, t) => n => ({
					...l.n(n),
					action: d.c.CLICK,
					noun: "policy_banner",
					source: i.Inbox,
					actionInfo: {
						...l.c(n),
						pageType: e,
						type: t
					}
				}),
				j = () => e => ({
					...l.n(e),
					action: d.c.CLICK,
					noun: "inbox_banner",
					source: i.Inbox,
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
				return v
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
			var a = n("./src/reddit/selectors/telemetry.ts"),
				r = n("./src/telemetry/index.ts"),
				s = n("./src/telemetry/models/Event.ts");
			var i;
			! function(e) {
				e.FREQUENT = "frequent", e.LOW = "low", e.OFF = "off"
			}(i || (i = {}));
			const o = e => ({
					...a.n(e),
					noun: "desktop_notification_permissions"
				}),
				c = e => e ? "enable" : "disable",
				d = e => {
					Object(r.a)({
						...o(e),
						action: s.c.View,
						source: "popup"
					})
				},
				l = e => {
					Object(r.a)({
						...o(e),
						action: s.c.Allow,
						source: "popup"
					})
				},
				u = e => {
					Object(r.a)({
						...o(e),
						action: s.c.Block,
						source: "popup"
					})
				},
				m = e => {
					Object(r.a)({
						...o(e),
						action: s.c.Close,
						source: "popup"
					})
				},
				p = (e, t, n) => ({
					...a.n(e),
					actionInfo: a.c(e, {
						success: t,
						reason: n
					}),
					noun: "push_token"
				}),
				b = e => {
					Object(r.a)({
						...p(e, !0),
						action: s.c.Request,
						source: "notification"
					})
				},
				f = e => {
					Object(r.a)({
						...p(e, !0),
						action: s.c.Register,
						source: "notification"
					})
				},
				h = (e, t) => {
					Object(r.a)({
						...p(e, !1, t),
						action: s.c.Bail,
						source: "notification"
					})
				},
				g = e => ({
					...a.n(e),
					noun: "push_notification"
				}),
				v = e => ({
					...g(e),
					notification: a.E(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				x = (e, t) => n => ({
					...a.n(n),
					action: c(e),
					email: {
						type: t
					},
					noun: "email",
					source: "email_app_settings"
				}),
				_ = (e, t) => n => ({
					...a.n(n),
					action: c(e),
					notification: {
						type: t
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				I = e => t => ({
					...a.n(t),
					source: "email_app_settings",
					action: c(e),
					noun: "email",
					notification: {
						type: "all"
					}
				}),
				O = (e, t, n) => r => ({
					...a.n(r),
					action: "set_frequency",
					noun: n,
					source: "community_notifications",
					subreddit: {
						id: e,
						name: t.toLowerCase()
					}
				}),
				y = () => e => ({
					...a.n(e),
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
			var a = n("./node_modules/react/index.js"),
				r = n("./src/reddit/helpers/localStorage/index.ts");

			function s(e) {
				const [t, n] = Object(a.useState)(Object(r.s)(e));
				return [t, Object(a.useCallback)(() => {
					n(!0), Object(r.ob)(e)
				}, [])]
			}
		},
		"./src/reddit/hooks/useInboxPrivacyPolicyBannerSeen.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var a = n("./node_modules/react/index.js"),
				r = n("./src/reddit/helpers/localStorage/index.ts");

			function s(e) {
				const [t, n] = Object(a.useState)(() => Object(r.w)(e));
				return [t, Object(a.useCallback)(() => {
					n(!0), Object(r.Ab)(e)
				}, [e])]
			}
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			}));
			var a = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/meta.ts");
			const o = "undefined" == typeof document ? function() {
				const e = Object(s.e)(i.i) || r.DEFAULT_LOCALE;
				return Object(a.isPseudoLocale)(e) ? r.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || r.DEFAULT_LOCALE;
				return Object(a.isPseudoLocale)(e) ? r.DEFAULT_LOCALE : e
			};
			t.a = o;
			const c = () => {
				const e = o(),
					t = Object(s.e)(i.b);
				return t ? e.replace(/([a-z]+-)([A-Z]+)/, `$1${t}`) : e
			}
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Admin/index.m.less"),
				o = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(e.className, o.a.admin, {
					[o.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && r.a.createElement("title", null, e.title), e.desc && r.a.createElement("desc", null, e.desc), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), r.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, r.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && r.a.createElement("title", null, e.title), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("rect", {
				width: "20",
				height: "20",
				rx: "10",
				fill: "url(#gradient)"
			}), r.a.createElement("path", {
				d: "M12.121 13.471c-1.007.146-1.73.445-2.121.643v-3.068a1.2 1.2 0 00-1.2-1.2H6.53c.027-.292.046-.61.046-.978 0-1.015-.294-1.78-.53-2.233l.834-.834H10v2.845a1.2 1.2 0 001.2 1.2h2.27c.036.402.086.749.132 1.045.058.38.109.706.109 1.047 0 .627-.497 1.375-1.59 1.533zm3.017-7.35l-1.345-1.345a.6.6 0 00-.425-.175H6.632a.6.6 0 00-.425.175L4.862 6.122a.6.6 0 00-.042.802c.006.006.556.72.556 1.944 0 .783-.087 1.344-.164 1.84-.064.41-.124.797-.124 1.23 0 1.163.9 2.471 2.619 2.72 1.251.183 1.952.638 1.956.64a.61.61 0 00.67.002c.007-.004.709-.46 1.96-.642 1.719-.249 2.618-1.557 2.618-2.72 0-.433-.06-.82-.124-1.23a11.026 11.026 0 01-.163-1.84c0-1.22.536-1.919.556-1.944a.6.6 0 00-.042-.802z",
				fill: "#fff"
			}), r.a.createElement("defs", null, r.a.createElement("linearGradient", {
				id: "gradient",
				x1: "0",
				y1: "20",
				x2: "20.021",
				y2: "19.979",
				gradientUnits: "userSpaceOnUse"
			}, r.a.createElement("stop", {
				stopColor: "#EC0623"
			}), r.a.createElement("stop", {
				offset: "1",
				stopColor: "#FF8717"
			}))))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = function({
				className: e
			}) {
				return r.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, r.a.createElement("g", {
					fill: "inherit"
				}, r.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/icons/svgs/Snoo/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/reddit/constants/colors.ts");
			t.a = e => r.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				className: e.className
			}, r.a.createElement("g", null, r.a.createElement("circle", {
				fill: s.a.snoo,
				cx: "10",
				cy: "10",
				r: "10"
			}), r.a.createElement("path", {
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
			var a = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/Inline/index.m.less"),
				s = n.n(r);
			t.a = a.a.div("inlineRow", s.a)
		},
		"./src/reddit/models/NotificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			var a;
			n.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.Email = "EMAIL", e.Push = "PUSH", e.CommunityAlerts = "COMMUNITY_ALERTS", e.ModCommunityAlerts = "MOD_COMMUNITY_ALERTS"
				}(a || (a = {}))
		},
		"./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/EmptyStateComponent.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
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
					return r.a.createElement("div", {
						className: Object(c.a)(u.a.emptyState, u.a.karmaView, {
							[u.a.inNotificationsPage]: !e
						})
					}, r.a.createElement("div", {
						className: Object(c.a)(u.a.catsImageWrapper, {
							[u.a.inTooltip]: e
						})
					}, r.a.createElement("img", {
						src: `${o.a.assetPath}/img/notifications/bottom_cat.png`,
						alt: i.fbt._("cats picture", null, {
							hk: "27dboq"
						}),
						className: Object(c.a)(u.a.cat, u.a.bottom)
					}), r.a.createElement("img", {
						src: `${o.a.assetPath}/img/notifications/top_cat.png`,
						alt: i.fbt._("cats picture", null, {
							hk: "27dboq"
						}),
						className: Object(c.a)(u.a.cat, u.a.top)
					}), r.a.createElement("img", {
						src: `${o.a.assetPath}/img/notifications/cloud.png`,
						alt: i.fbt._("cats picture", null, {
							hk: "45gHNS"
						}),
						className: u.a.cloud
					}), r.a.createElement("img", {
						src: `${o.a.assetPath}/img/notifications/yummy.png`,
						alt: i.fbt._("cats picture", null, {
							hk: "27dboq"
						}),
						className: u.a.yummy
					})), r.a.createElement("h1", {
						className: Object(c.a)(u.a.emptyTitle, {
							[u.a.inTooltip]: e
						})
					}, i.fbt._("You don’t have any activity yet", null, {
						hk: "2GNaV0"
					})), r.a.createElement("p", {
						className: u.a.emptyDescription
					}, i.fbt._("That’s ok, maybe you just need the right inspiration. Have you had your daily cat fix yet today?", null, {
						hk: "3tmgZE"
					})), r.a.createElement(d.t, m({
						className: u.a.emptyStateButton
					}, t), i.fbt._("See today’s Top Cats in r/cats", null, {
						hk: "Um68y"
					})))
				},
				b = n("./src/lib/lessComponent.tsx"),
				f = n("./src/reddit/actions/login.ts");
			var h = e => r.a.createElement("svg", {
				className: e.className,
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 21"
			}, r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M18.4 14.788c-.662 0-1.2-.537-1.2-1.202l-.012-5.998C17.188 3.625 13.963.4 10 .4 6.037.4 2.811 3.625 2.811 7.586l-.01 6.002c0 .663-.54 1.2-1.2 1.2a1.199 1.199 0 100 2.4h16.8a1.2 1.2 0 100-2.4zm-9.6 3.6H7.6c0 1.324 1.076 2.4 2.4 2.4 1.323 0 2.4-1.076 2.4-2.4H8.8zm-3.6-4.797c0 .422-.087.822-.22 1.197H15.02a3.554 3.554 0 01-.22-1.2l-.013-5.997A4.794 4.794 0 0010 2.8a4.794 4.794 0 00-4.789 4.787l-.01 6.003z"
			}));
			const g = b.a.wrapped(h, "BellOutline", u.a),
				v = ({
					isBannerEnabled: e,
					isLoggedIn: t
				}) => {
					const n = Object(s.d)();
					return r.a.createElement("div", {
						className: Object(c.a)(u.a.emptyState, {
							[u.a.emptyStateWithBanner]: Boolean(e),
							[u.a.loggedOutState]: !t
						})
					}, r.a.createElement(g, null), r.a.createElement("h1", {
						className: u.a.emptyTitle
					}, i.fbt._("Be the first to know", null, {
						hk: "2mNJO0"
					})), r.a.createElement("p", {
						className: u.a.emptyDescription
					}, i.fbt._("This is where you get updates on your activity and recommendations", null, {
						hk: "27V2PG"
					})), !t && r.a.createElement("div", {
						className: u.a.emptyStateLoggedOutContainer
					}, r.a.createElement(d.j, {
						onClick: () => n(Object(f.i)())
					}, i.fbt._("Log In", null, {
						hk: "ZR3pC"
					})), r.a.createElement("span", {
						className: u.a.emptyStateDivider
					}), r.a.createElement(d.j, {
						onClick: () => n(Object(f.j)())
					}, i.fbt._("Sign Up", null, {
						hk: "3Jd0SI"
					}))))
				};
			var x = n("./src/reddit/controls/InternalLink/index.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
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
					a = {
						to: n,
						kind: d.b.InternalLink
					},
					s = r.a.createElement(x.a, {
						to: n,
						target: "_blank",
						rel: "noopener noreferrer",
						className: u.a.subredditLinkR
					}, n);
				return r.a.createElement("div", {
					className: Object(c.a)(u.a.emptyState, u.a.karmaView, {
						[u.a.inNotificationsPage]: !e
					})
				}, r.a.createElement("img", {
					src: `${o.a.assetPath}/img/wrappedreddit/default_avatar.png`,
					alt: i.fbt._("default user avatar", null, {
						hk: "1VMTKf"
					}),
					className: Object(c.a)(u.a.avatarImage, {
						[u.a.inTooltip]: e
					})
				}), r.a.createElement("h1", {
					className: Object(c.a)(u.a.emptyTitle, {
						[u.a.inTooltip]: e
					})
				}, i.fbt._("You don’t have any activity yet", null, {
					hk: "2hf6yn"
				})), r.a.createElement("p", {
					className: u.a.emptyDescription
				}, t ? i.fbt._("That’s ok, maybe you just need the right inspiration. Try browsing {Link: to /r/popular}, for new communities to join.", [i.fbt._param("Link: to /r/popular", s)], {
					hk: "3fKsCP"
				}) : i.fbt._("That’s ok, maybe you just need the right inspiration. Try posting in {Link: to /r/popular}, a popular community for discussion.", [i.fbt._param("Link: to /r/popular", s)], {
					hk: "3vcPQJ"
				})), r.a.createElement(d.t, _({
					className: u.a.emptyStateButton,
					text: `Visit ${n}`
				}, a)))
			};

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const N = "/img/notifications/star.png";
			var C = ({
					inTooltip: e
				}) => {
					const t = {
						to: "/r/memes/top/",
						kind: d.b.InternalLink
					};
					return r.a.createElement("div", {
						className: Object(c.a)(u.a.emptyState, u.a.karmaView, {
							[u.a.inNotificationsPage]: !e
						})
					}, r.a.createElement("div", {
						className: Object(c.a)(u.a.memesImageWrapper, {
							[u.a.inTooltip]: e
						})
					}, r.a.createElement("img", {
						src: `${o.a.assetPath}/img/notifications/shrek.png`,
						alt: i.fbt._("memes picture", null, {
							hk: "3e3S9E"
						}),
						className: u.a.shrek
					}), r.a.createElement("img", {
						src: `${o.a.assetPath}${N}`,
						alt: i.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(c.a)(u.a.star, u.a.inBottom)
					}), r.a.createElement("img", {
						src: `${o.a.assetPath}${N}`,
						alt: i.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(c.a)(u.a.star, u.a.inCenter)
					}), r.a.createElement("img", {
						src: `${o.a.assetPath}${N}`,
						alt: i.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(c.a)(u.a.star, u.a.inTop)
					})), r.a.createElement("h1", {
						className: Object(c.a)(u.a.emptyTitle, {
							[u.a.inTooltip]: e
						})
					}, i.fbt._("You don’t have any activity yet", null, {
						hk: "2GNaV0"
					})), r.a.createElement("p", {
						className: u.a.emptyDescription
					}, i.fbt._("That’s ok, maybe you just need the right inspiration. Let’s get some more lolz in your life.", null, {
						hk: "10HMFI"
					})), r.a.createElement(d.t, y({
						className: u.a.emptyStateButton
					}, t), i.fbt._("See today’s Top Memes in r/Memes", null, {
						hk: "42zwJz"
					})))
				},
				E = n("./src/lib/notifications/index.ts"),
				j = n("./src/lib/notifications/constants.ts"),
				k = n("./src/redditGQL/types.ts"),
				w = n("./src/reddit/actions/modal.ts"),
				S = n("./src/reddit/actions/notifications/index.ts"),
				P = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				T = n("./src/reddit/actions/toaster.ts"),
				B = n("./src/reddit/components/Settings/modalIds.ts"),
				U = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				A = n("./src/reddit/models/Toast/index.ts"),
				L = n("./src/reddit/selectors/notificationPrefs.ts"),
				F = n("./src/reddit/selectors/user.ts");

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const R = [k.h.PrivateMessage, k.h.ChatMessage, k.h.ChatRequest, k.h.UsernameMention, k.h.PostReply, k.h.UpvotePost, k.h.UpvoteComment, k.h.CommentReply, k.h.ThreadReplies, k.h.TopLevelComment, k.h.NewPostActivity, k.h.UserNewFollower, k.h.PostFlairAdded, k.h.UserFlairAdded, k.h.NewPinnedPost, k.h.AwardReceived, k.h.PostFollow, k.h.TalkLive, k.h.CommentFollow, k.h.LifecyclePostSuggestions, k.h.BroadcastRecommendation, k.h.SubredditRecommendation, k.h.RedditLore, k.h.OneOff, k.h.CakeDay, k.h.ModeratedSrEngagement];
			var M;
			! function(e) {
				e[e.TURN_ON_PN = 0] = "TURN_ON_PN", e[e.TURN_ON_PN_APP = 1] = "TURN_ON_PN_APP", e[e.VERIFY_EMAIL = 2] = "VERIFY_EMAIL", e[e.TURN_ON_DAYLY_DIGEST = 3] = "TURN_ON_DAYLY_DIGEST", e[e.DONE = 4] = "DONE"
			}(M || (M = {}));
			var H = ({
					inTooltip: e,
					isBannerEnabled: t,
					isLoggedIn: n
				}) => {
					const l = Object(s.d)(),
						m = Object(s.e)(F.n),
						p = Object(s.e)(F.A),
						b = Object(a.useRef)(m),
						[f, h] = Object(a.useState)(M.TURN_ON_PN),
						g = Object(s.e)(e => e.user.accountSettings.changeEmail.api.pending),
						x = Object(a.useCallback)(() => {
							l(async (e, t) => {
								var n, a;
								let r = Object(F.Z)(t());
								r.allIds.length || await e(Object(P.a)(U.a.Email));
								const s = null === (a = null === (n = (r = Object(F.Z)(t())).byId) || void 0 === n ? void 0 : n.EMAIL_DIGEST) || void 0 === a ? void 0 : a.isEnabled;
								h(s ? M.DONE : M.TURN_ON_DAYLY_DIGEST)
							})
						}, [l]),
						_ = Object(a.useCallback)(() => {
							p ? x() : h(M.VERIFY_EMAIL)
						}, [p, x]),
						I = Object(a.useCallback)(() => {
							l(async (e, t) => {
								const n = t();
								Object(F.bb)(n).allIds.length || await e(Object(P.a)(U.a.Push)), Object(L.c)(t(), R) ? h(M.TURN_ON_PN_APP) : _()
							})
						}, [l, _]),
						O = Object(a.useCallback)(() => {
							(() => Object(E.a)() === j.a.Granted)() ? I(): h(M.TURN_ON_PN)
						}, [I]),
						y = Object(a.useCallback)(() => {
							l(Object(w.h)(B.a))
						}, [l]);
					if (Object(a.useEffect)(() => {
							O()
						}, [O]), Object(a.useEffect)(() => {
							if (m !== b.current && f === M.VERIFY_EMAIL) {
								const e = Object(T.e)(i.fbt._("Email successfully updated!", null, {
									hk: "3iPlUp"
								}), A.b.SuccessCommunityGreen);
								l(Object(T.f)(e)), x()
							}
						}, [m, f, x]), Object(a.useEffect)(() => {
							g && l(Object(w.g)(B.a))
						}, [g, l]), f === M.DONE) return r.a.createElement(v, {
						isLoggedIn: n,
						isBannerEnabled: t
					});
					const N = {
							to: "/settings/notifications",
							kind: d.b.InternalLink
						},
						C = {
							onClick: f === M.TURN_ON_PN ? async () => {
								await l(Object(S.requestBrowserNotificationPermissionPromptByUser)(B.f)), O()
							} : y
						},
						k = f === M.TURN_ON_PN || f === M.TURN_ON_PN_APP,
						H = f === M.TURN_ON_PN_APP || f === M.TURN_ON_DAYLY_DIGEST;
					return r.a.createElement("div", {
						className: Object(c.a)(u.a.emptyState, u.a.karmaView, {
							[u.a.inNotificationsPage]: !e
						})
					}, r.a.createElement("img", {
						src: `${o.a.assetPath}/img/wrappedreddit/default_avatar.png`,
						alt: i.fbt._("default user avatar", null, {
							hk: "1VMTKf"
						}),
						className: Object(c.a)(u.a.avatarImage, {
							[u.a.inTooltip]: e
						})
					}), r.a.createElement("h1", {
						className: Object(c.a)(u.a.emptyTitle, {
							[u.a.inTooltip]: e
						})
					}, k ? i.fbt._("Turn on notifications", null, {
						hk: "3qFpFu"
					}) : i.fbt._("Turn on email digest", null, {
						hk: "obBF8"
					})), r.a.createElement("p", {
						className: u.a.emptyDescription
					}, k ? i.fbt._("Stay in the loop on content from communities you love right on your phone.", null, {
						hk: "1gwnbO"
					}) : i.fbt._("Stay in the loop on content from communities you love right on your email inbox.", null, {
						hk: "1rs4kD"
					})), r.a.createElement(d.t, D({
						className: u.a.emptyStateButton
					}, H ? N : C, {
						text: i.fbt._("OK", null, {
							hk: "rhf0"
						})
					})))
				},
				W = n("./src/reddit/selectors/experiments/notifications.ts");
			t.a = ({
				isBannerEnabled: e,
				isLoggedIn: t,
				inTooltip: n
			}) => {
				const a = Object(s.e)(W.b),
					i = Object(s.e)(W.c),
					o = Object(s.e)(W.d),
					c = Object(s.e)(W.a),
					d = Object(s.e)(W.e);
				return a || d ? r.a.createElement(O, {
					inTooltip: n,
					isPopular: d
				}) : i ? r.a.createElement(C, {
					inTooltip: n
				}) : o ? r.a.createElement(H, {
					isBannerEnabled: e,
					isLoggedIn: t,
					inTooltip: n
				}) : c ? r.a.createElement(p, {
					inTooltip: n
				}) : r.a.createElement(v, {
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
				return i
			})), n.d(t, "a", (function() {
				return o
			}));
			var a = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/actions/pages/wrappedReddit.ts");
			const i = "/RedditRecap2021",
				o = "https://i.redd.it/8yb4biw7bf481.png",
				c = {
					action: s.a,
					chunk: r.s.WRAPPED_REDDIT,
					component: Object(a.a)({
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
						name: r.Nb.WRAPPED_REDDIT
					},
					path: i
				};
			t.c = c
		},
		"./src/reddit/selectors/bannedUser.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return o
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
			var a = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/components/InboxTooltip/Component.tsx"),
				s = n("./src/reddit/models/SubredditModeration/index.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const o = (e, {
					subredditId: t
				}) => e.features.banned.models[t],
				c = (e, {
					subredditId: t,
					username: n
				}) => {
					const a = Object(i.sb)(e, {
						userName: n
					});
					if (!a) return;
					const r = o(e, {
						subredditId: t
					});
					return r ? r[a.id] : void 0
				},
				d = Object(a.a)((e, {
					subredditId: t
				}) => {
					const n = e.features.banned.userOrder[t];
					return n ? n.map(n => e.features.banned.models[t][n]) : r.a
				}),
				l = (e, {
					subredditId: t
				}) => {
					const n = Object(s.e)(t);
					return e.features.banned.api.pending[n]
				},
				u = (e, {
					subredditId: t
				}) => e.features.banned.loadMore[t],
				m = e => e.features.banned.search.api.pending,
				p = e => e.features.banned.search.result,
				b = e => e.features.banned.inContext
		},
		"./src/reddit/selectors/experiments/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "f", (function() {
				return l
			}));
			var a = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const s = e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: a.ob
				}) === a.id.Karma,
				i = e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: a.ob
				}) === a.id.Memes,
				o = e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: a.ob
				}) === a.id.PnEmail,
				c = e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: a.ob
				}) === a.id.Cats,
				d = e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: a.ob
				}) === a.id.Popular,
				l = e => d(e) || c(e) || o(e) || i(e) || s(e)
		},
		"./src/reddit/selectors/notificationPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "g", (function() {
				return s
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			}));
			const a = e => e.user.notificationPrefs.api.getPreferences.loaded,
				r = e => e.user.notificationPrefs.api.getPreferences.pending,
				s = e => e.user.notificationPrefs.api.setPreferences.pending,
				i = e => e.user.notificationPrefs.preferences,
				o = e => e.user.notificationPrefs.isNotificationPromptVisible,
				c = (e, t) => {
					var n, a;
					const r = (e => e.user.notificationPrefs.pushSettingsLayout)(e),
						s = null === (n = null == r ? void 0 : r.rows) || void 0 === n ? void 0 : n.byId;
					return s && (null === (a = s[t]) || void 0 === a ? void 0 : a.isEnabled)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard.cd9486431b397bd0077c.js.map