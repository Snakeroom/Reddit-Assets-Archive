// https://www.redditstatic.com/desktop2x/AuthorHovercard~Reddit.6e5e79b2a01144e3469d.js
// Retrieved at 4/7/2022, 9:40:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard~Reddit"], {
		"./src/lib/browser/isIncognito.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/constants/index.ts");
			const i = 120 * r.hb;
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
						return !e || e <= i
					}
				})()), e
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
				i = n("./src/lib/getParsedUserAgent/index.ts"),
				o = n("./src/lib/localStorageAvailable/index.ts"),
				a = n("./src/lib/notifications/constants.ts"),
				s = n("./src/lib/notifications/featureFlags.ts");
			n("./src/lib/serviceWorker/index.ts");
			const c = () => {
					if (Object(s.a)() !== a.c.NotificationsSupported) return a.a.Unsupported;
					const e = Object(o.a)() && localStorage.getItem(a.f) === a.g;
					return "granted" === Notification.permission ? a.a.Granted : "denied" === Notification.permission ? a.a.Denied : e ? a.a.Closed : a.a.Default
				},
				d = () => !!Object(o.a)() && (localStorage.removeItem(a.f), !0),
				l = async (e, t, n, s, d, l) => {
					const u = c();
					if (u === a.a.Unsupported) return void l();
					if (Object(o.a)()) {
						const t = localStorage.getItem(a.h),
							n = (new Date).getTime();
						if (!e && t && parseInt(t) + a.i > n) return void l();
						localStorage.setItem(a.h, n.toString())
					}
					if (!t && u === a.a.Denied) return s(!1, !0), void l();
					if (!t && u === a.a.Granted) return d(!1), void l();
					if (!t && u === a.a.Closed) return void l();
					let p = a.a.Default;
					const b = navigator.userAgent;
					switch (Object(i.b)(b) || Object(i.f)(b) ? Object(r.a)(1800).then(() => {
						p === a.a.Default && n()
					}) : n(), p = await Notification.requestPermission()) {
						case "granted":
							d(!0);
							break;
						case "denied":
							s(!0, !0);
							break;
						case "default":
							l();
							break;
						default:
							s(!0, !1), localStorage.setItem(a.f, a.g)
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
				i = n("./src/redditGQL/operations/RegisterWebPushToken.json"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/lib/serviceWorker/index.ts"),
				s = n("./src/lib/timezone/index.ts"),
				c = e => {
					const t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"),
						n = window.atob(t),
						r = new Uint8Array(n.length);
					for (let i = 0; i < n.length; ++i) r[i] = n.charCodeAt(i);
					return r
				};
			var d;
			! function(e) {
				e[e.Success = 0] = "Success", e[e.FailedGeneric = 1] = "FailedGeneric", e[e.FailedResponse = 2] = "FailedResponse", e[e.FailedGqlReponse = 3] = "FailedGqlReponse", e[e.FailedNoServiceWorker = 4] = "FailedNoServiceWorker", e[e.FailedNoSubscription = 5] = "FailedNoSubscription"
			}(d || (d = {}));
			const l = async e => {
				try {
					const t = await Object(a.a)();
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
							timezoneName: Object(s.b)() || s.a,
							timestamp: (new Date).toISOString(),
							language: "en_us"
						};
						return Object(o.a)(e(), {
							...i,
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
				return i
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return s
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const i = "INCONTEXT__BANNED",
				o = "INCONTEXT__MUTED",
				a = Object(r.a)(i),
				s = Object(r.a)(o)
		},
		"./src/reddit/actions/moderationLog/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			}));
			const r = "SUBREDDIT__MODERATION_LOG_LOADED",
				i = "SUBREDDIT__ALL_MODERATORS_LOADED"
		},
		"./src/reddit/actions/notificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "b", (function() {
				return N
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/notificationSettingsLayout/constants.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				s = n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/redditGQL/operations/UserSubredditsNotificationsLevel.json");
			var l = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const p = Object(i.a)(o.c),
				b = Object(i.a)(o.b),
				m = Object(i.a)(o.a),
				f = Object(i.a)(o.f),
				h = Object(i.a)(o.e),
				g = Object(i.a)(o.d),
				v = e => async (t, n, r) => {
					let {
						gqlContext: i
					} = r;
					e === l.a.Push ? t(f()) : t(p()), await async function(e, t, n) {
						const r = await Object(s.a)(e(), {
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
										i = [];
									const o = e => {
										const {
											rowIds: o,
											rowsCollection: a
										} = function(e) {
											const t = [],
												n = {};
											if (e.rows)
												for (let r = 0; r < e.rows.length; r++) {
													const i = e.rows[r],
														o = i.messageType;
													t.push(o), n[o] = i
												}
											return {
												rowsCollection: n,
												rowIds: t
											}
										}(e);
										r = {
											...r,
											...a
										}, i = [...i, ...o];
										const s = e.id;
										n.push(s), t[s] = {
											...e,
											rows: o
										}
									};
									for (let a = 0; a < e.length; a++) o(e[a]);
									return {
										sections: {
											byId: t,
											allIds: n
										},
										rows: {
											byId: r,
											allIds: i
										}
									}
								}(r)
							}(r.body);
							t === l.a.Push ? n(h(e)) : n(b(e))
						} else t === l.a.Push ? n(g({
							error: r.error
						})) : n(m({
							error: r.error
						}))
					}(i, e, t)
				};
			const y = Object(i.a)(o.g),
				_ = e => async (t, n, i) => {
					let {
						gqlContext: o
					} = i;
					(await Object(s.b)(o(), e)).ok ? (O(t, e), function(e) {
						e(Object(a.f)({
							kind: u.b.SuccessCommunity,
							text: r.fbt._("Changes saved", null, {
								hk: "UBoVR"
							})
						}))
					}(t)) : function(e) {
						e(Object(a.f)({
							kind: u.b.Error,
							text: r.fbt._("We had some issues saving your changes. Please try again.", null, {
								hk: "1OvQi6"
							})
						}))
					}(t)
				};

			function O(e, t) {
				e(y({
					isEnabled: t.isEnabled,
					messageType: t.messageType
				}))
			}
			const I = Object(i.a)(o.j),
				x = Object(i.a)(o.i),
				j = Object(i.a)(o.k),
				k = Object(i.a)(o.h),
				N = e => async (t, n, r) => {
					let {
						gqlContext: i
					} = r;
					var o, s;
					t(I());
					const l = await ((e, t) => Object(c.a)(e, {
						...d,
						variables: t
					}))(i(), e);
					if (null === (s = null === (o = l.error) || void 0 === o ? void 0 : o.fields) || void 0 === s ? void 0 : s.length) return t(k({
						error: l.error
					})), void t(Object(a.d)());
					if (l.ok && l.body) {
						const e = l.body,
							n = e && e.data,
							r = n && n.identity && n.identity.subscribedSubreddits,
							i = r && r.pageInfo,
							o = (r && r.edges).map(e => e.node);
						t(x({
							nodes: o,
							pageInfo: i
						}))
					}
				}
		},
		"./src/reddit/actions/notifications/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "initializeServiceWorkerChannel", (function() {
				return N
			})), n.d(t, "requestNotificationsPermissions", (function() {
				return C
			})), n.d(t, "subscribeForPNs", (function() {
				return E
			})), n.d(t, "unsubscribeFromPNs", (function() {
				return S
			})), n.d(t, "requestBrowserNotificationPermissionPromptByUser", (function() {
				return P
			})), n.d(t, "subscribeToPermissionsChange", (function() {
				return T
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/lodash/omit.js"),
				o = n.n(i),
				a = n("./src/lib/browser/isIncognito.ts"),
				s = n("./src/lib/notifications/token.ts"),
				c = n("./src/lib/notifications/index.ts"),
				d = n("./src/lib/notifications/constants.ts"),
				l = n("./src/lib/serviceWorker/index.ts"),
				u = n("./src/reddit/actions/chat/toggle.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				b = n("./src/reddit/actions/notifications/utils.ts"),
				m = n("./src/reddit/actions/tabBadging.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/reddit/helpers/parseUrl.ts"),
				g = n("./src/reddit/helpers/tabBadging/index.ts"),
				v = n("./src/reddit/helpers/trackers/notifications.ts"),
				y = n("./src/reddit/models/Toast/index.ts"),
				_ = n("./src/reddit/constants/experiments.ts"),
				O = n("./src/reddit/helpers/chooseVariant/index.ts");
			const I = e => Object(O.c)(e, {
				experimentName: _.Mb,
				experimentEligibilitySelector: O.a
			}) === _.gd;
			var x = n("./src/reddit/selectors/meta.ts"),
				j = n("./src/reddit/selectors/user.ts");
			let k = !1;
			const N = async (e, t) => {
				const n = Object(j.O)(e);
				if (k) return;
				if (k = !0, Object(b.a)(e) !== d.c.NotificationsSupported) return;
				await Object(l.a)();
				navigator.serviceWorker.addEventListener("message", r => {
					const i = r.data,
						a = i.command || i.type;
					if ("registerWithServiceWorker" === a) w(e);
					else if (a === g.a && n) {
						const e = o()(i, ["command"]);
						t(Object(m.f)(e))
					} else if ("navigate.chat" === a) {
						const e = Object(h.a)(i.data.href);
						e && e.pathname && t(Object(u.c)(e.pathname))
					}
				}), w(e)
			}, w = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: v.c(e)
				})
			}, C = function(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
				return async (r, i, o) => {
					const s = i(),
						l = Object(x.f)(s),
						u = I(s);
					if (await Object(a.a)() || l) return;
					await N(s, r);
					v.j(s), await Object(c.b)(e, t, () => {
						u || r(Object(d.o)()), r(Object(d.n)()), v.h(s)
					}, (e, t) => {
						r(Object(d.l)()), r(S(t ? d.a.Denied : d.a.Closed)), e && (t ? v.e(s) : v.f(s))
					}, e => {
						r(Object(d.m)()), r(E()), e && v.d(s)
					}, () => {
						r(Object(d.k)()), n()
					})
				}
			}, E = e => async (t, n, i) => {
				const o = n();
				try {
					switch (await Object(s.b)(i.gqlContext)) {
						case s.a.Success:
							Object(b.b)(d.a.Granted), v.k(o), e && t(Object(f.f)({
								kind: y.b.SuccessCommunity,
								text: r.fbt._("Changes saved", null, {
									hk: "wGH5U"
								})
							}));
							break;
						case s.a.FailedResponse:
							v.i(o, "registration_failed_generally");
							break;
						case s.a.FailedGqlReponse:
							v.i(o, "registration_failed_in_gql")
					}
				} catch (a) {
					v.i(o, "registration_failed_uncaught_exception"), console.error(a)
				}
			}, S = (e, t) => async n => {
				try {
					Object(b.b)(e);
					const i = await Object(l.a)();
					if (i) {
						const e = await i.pushManager.getSubscription();
						e && (e.unsubscribe(), t && n(Object(f.f)({
							kind: y.b.SuccessCommunity,
							text: r.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						})))
					}
				} catch (i) {}
			}, P = e => async (t, n) => {
				const r = n();
				if (Object(b.a)(r) === d.c.NotificationsSupported) switch (Object(c.a)()) {
					case d.a.Default:
					case d.a.Closed:
						await t(C(!0, !0));
						break;
					case d.a.Denied:
						t(Object(p.h)(e))
				}
			}, T = () => async (e, t) => {
				var n;
				if (!(null === (n = null === navigator || void 0 === navigator ? void 0 : navigator.permissions) || void 0 === n ? void 0 : n.query)) return;
				const r = t();
				if (Object(b.a)(r) !== d.c.NotificationsSupported) return;
				const i = await navigator.permissions.query({
					name: "notifications"
				});
				i.onchange = () => (t => {
					switch (t) {
						case d.a.Denied:
							e(S(d.a.Denied)), v.e(r);
							break;
						case d.a.Granted:
							e(E()), v.d(r);
							break;
						default:
							e(S(d.a.Default))
					}
				})(i.state)
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
				i = n("./src/lib/notifications/constants.ts"),
				o = n("./src/lib/notifications/featureFlags.ts"),
				a = n("./src/reddit/featureFlags/index.ts"),
				s = n("./src/reddit/helpers/localStorage/index.ts");
			const c = e => a.d.pushNotificationsBrowserSupported(e) ? Object(o.a)() : i.c.BrowserUnsupported,
				d = e => {
					switch (e) {
						case i.a.Denied:
							s.nb(!1), Object(r.c)();
							break;
						case i.a.Default:
						case i.a.Granted:
							s.nb(!0), Object(r.c)();
							break;
						case i.a.Closed:
							s.nb(!0)
					}
				}
		},
		"./src/reddit/actions/userFlair/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return i
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			}));
			var r = n("./src/lib/loadableAction/index.ts");
			const i = Object(r.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairChanged)),
				o = Object(r.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleUserFlairInSubreddit)),
				a = Object(r.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleAssignOwnFlairPermission)),
				s = Object(r.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.saveUserFlairTemplate)),
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
				i = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				s = n("./src/reddit/components/BadgeCounter/index.m.less"),
				c = n.n(s);
			t.a = e => {
				let {
					className: t,
					isActive: n,
					showEmpty: r,
					unreadCount: s
				} = e;
				return n ? i.a.createElement("span", {
					className: Object(o.a)(t, c.a.badgeCounter, {
						[c.a.mEmpty]: r || s < 1
					})
				}, r || s < 1 ? "" : Object(a.b)(s)) : null
			}
		},
		"./src/reddit/components/InboxBanner/Banner.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				s = n("./src/reddit/helpers/trackers/inbox.ts"),
				c = n("./src/reddit/hooks/useTracking.ts"),
				d = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/components/InboxBanner/index.m.less"),
				u = n.n(l);
			t.a = e => {
				let {
					className: t,
					closeButtonText: n,
					closeIcon: r,
					descriptionText: l,
					primaryButtonText: p,
					titleText: b,
					onClose: m,
					onClick: f
				} = e;
				const h = Object(c.a)();
				return i.a.createElement("div", {
					className: Object(o.a)(u.a.banner, t)
				}, i.a.createElement("div", {
					className: u.a.bannerTitleContainer
				}, b && i.a.createElement("h4", {
					className: u.a.bannerTitle
				}, b), r && i.a.createElement(a.t, {
					onClick: e => {
						m && m(e), h(Object(s.p)({
							dnPromptAction: "dismiss"
						}))
					},
					Icon: Object(d.b)("close_fill"),
					className: Object(o.a)(u.a.closeIcon, u.a.closeButton),
					size: a.d.XXS,
					priority: a.c.Plain
				})), l && i.a.createElement("p", {
					className: u.a.bannerDescription
				}, l), i.a.createElement("div", {
					className: u.a.bannerButtonsContainer
				}, p && i.a.createElement(a.t, {
					text: p,
					priority: a.c.Tertiary,
					className: Object(o.a)(u.a.button, u.a.primaryButton),
					size: a.d.XS,
					onClick: e => {
						f && f(e), h(Object(s.p)({
							dnPromptAction: "cta"
						}))
					}
				}), n && i.a.createElement(a.t, {
					text: n,
					onClick: e => {
						m && m(e), h(Object(s.p)({
							dnPromptAction: "refuse"
						}))
					},
					priority: a.c.Plain,
					size: a.d.XS,
					className: Object(o.a)(u.a.button, u.a.closeButton)
				})))
			}
		},
		"./src/reddit/components/InboxBanner/PolicyBanner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./src/reddit/components/InboxBanner/Banner.tsx"),
				s = n("./src/reddit/helpers/trackers/inbox.ts"),
				c = n("./src/reddit/hooks/useTracking.ts"),
				d = n("./src/reddit/components/InboxBanner/index.m.less"),
				l = n.n(d);
			const u = e => {
				let {
					onClose: t,
					pageType: n
				} = e;
				const i = Object(c.a)(),
					d = r.fbt._("We’ve updated our {userAgreement} and {privacyPolicy}. Take a look, as the changes take effect September 12, 2021.", [r.fbt._param("userAgreement", o.a.createElement("a", {
						className: l.a.underlineLink,
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "User Agreement")), r.fbt._param("privacyPolicy", o.a.createElement("a", {
						className: l.a.underlineLink,
						href: "https://www.redditinc.com/policies/privacy-policy",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "Privacy Policy"))], {
						hk: "3bGC4g"
					});
				return o.a.createElement(a.a, {
					className: l.a.policyBanner,
					titleText: r.fbt._("Reddit’s User Agreement & Privacy Policy", null, {
						hk: "32fxCY"
					}),
					descriptionText: d,
					primaryButtonText: r.fbt._("Ok", null, {
						hk: "1IJxzv"
					}),
					onClick: e => {
						e.stopPropagation(), t(), i(Object(s.g)(n, s.a.Confirm))
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
				bannerContainer: "V5Q75l1gWtGpBZEehJiGH",
				bannerDataContainer: "SIz6ozr7aqewYGVSLfSf6",
				bannerLogo: "_3vKs7F-vWpFg20NtGjjN62",
				hotPotatoBanner: "_2oy7Xi4NUleUcHtb8YDZh7",
				bannerImage: "_2zetWw7f4W-0OWrUYJHPQ-"
			}
		},
		"./src/reddit/components/InboxTooltip/Component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return te
			})), n.d(t, "b", (function() {
				return oe
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./src/lib/notifications/index.ts"),
				s = n("./src/lib/notifications/constants.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/BadgeCounter/index.tsx"),
				u = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				p = n("./node_modules/lodash/omit.js"),
				b = n.n(p),
				m = n("./src/reddit/components/InboxBanner/Banner.tsx"),
				f = n("./src/reddit/components/InboxBanner/index.m.less"),
				h = n.n(f);
			const g = e => {
				let {
					onClose: t,
					onTurnOnBrowserNotifications: n
				} = e;
				return o.a.createElement(m.a, {
					className: h.a.dnPromptBanner,
					titleText: r.fbt._("Don’t miss out on updates — Turn on desktop notifications.", null, {
						hk: "10oNqB"
					}),
					onClose: e => {
						e.stopPropagation(), t()
					},
					closeIcon: !0,
					primaryButtonText: r.fbt._("Turn On", null, {
						hk: "3hywR9"
					}),
					closeButtonText: r.fbt._("No Thanks", null, {
						hk: "2GQOmV"
					}),
					onClick: e => {
						n(), t()
					}
				})
			};
			var v = n("./node_modules/react-redux/es/index.js"),
				y = n("./src/reddit/controls/Button/index.tsx"),
				_ = n("./src/reddit/controls/InternalLink/index.tsx"),
				O = n("./src/reddit/helpers/trackers/hotPotato.ts"),
				I = n("./src/reddit/hooks/useTracking.ts"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				j = n("./src/reddit/icons/svgs/HotPotato/index.tsx"),
				k = n("./src/reddit/selectors/experiments/hotPotato.ts");
			const N = e => {
				let {
					onClose: t
				} = e;
				const n = Object(v.e)(k.b),
					a = Object(I.a)(),
					s = Object(i.useCallback)(e => {
						t && t(e), a(Object(O.a)())
					}, [t, a]);
				return o.a.createElement("div", {
					className: Object(c.a)(h.a.banner, h.a.hotPotatoBanner)
				}, o.a.createElement(_.a, {
					to: `/r/${n}`,
					className: h.a.bannerContainer,
					onClick: s
				}, o.a.createElement("div", {
					className: h.a.bannerDataContainer
				}, o.a.createElement("div", {
					className: h.a.bannerTitleContainer
				}, o.a.createElement("h4", {
					className: h.a.bannerTitle
				}, r.fbt._("There's a time and r/place for everything", null, {
					hk: "10MnL"
				}))), o.a.createElement("p", {
					className: h.a.bannerDescription
				}, r.fbt._("r/Place is now open. Together we can make something more. Claim your tile and make r/place yours.", null, {
					hk: "2f11Wg"
				}))), o.a.createElement(j.a, {
					className: h.a.bannerImage
				})), o.a.createElement(y.t, {
					onClick: t,
					Icon: Object(x.b)("close_fill"),
					className: h.a.closeButton,
					size: y.d.XXS,
					priority: y.c.Plain
				}))
			};
			var w = n("./src/reddit/components/InboxBanner/PolicyBanner.tsx"),
				C = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				E = n("./src/reddit/components/ResizeSensor/index.tsx"),
				S = n("./src/reddit/components/InboxTooltip/index.m.less"),
				P = n.n(S);
			const T = 3;
			class B extends o.a.Component {
				constructor() {
					super(...arguments), this.ref = o.a.createRef(), this.handleResize = () => {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						e !== this.props.notificationHeight && this.props.setNotificationHeight(e, this.props.index)
					}
				}
				componentDidMount() {
					if (this.props.index + 1 <= T) {
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
						hideSubredditNotifications: i,
						blockAwarder: a,
						index: s,
						isInboxPostEmbedEnabled: c,
						markNotificationAsRead: d,
						notification: l,
						setActiveOverflowMenuId: u,
						onItemClick: p
					} = this.props, b = s + 1 <= T;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						ref: this.ref,
						className: P.a.notificationResizeWrapper
					}, o.a.createElement(C.a, {
						activeOverflowMenuId: e,
						decreaseSubredditNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: r,
						hideSubredditNotifications: i,
						isInboxPostEmbedEnabled: c,
						isInTooltip: !0,
						markNotificationAsRead: d,
						notification: l,
						setActiveOverflowMenuId: u,
						onItemClick: p,
						blockAwarder: a
					}), !!b && o.a.createElement(E.a, {
						onResize: this.handleResize
					})))
				}
			}
			var L = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				A = n("./src/reddit/helpers/trackers/inbox.ts"),
				U = n("./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/EmptyStateComponent.tsx");

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const D = {},
				H = "",
				M = 0,
				F = "200px",
				z = "250px",
				V = "270px",
				W = 100,
				G = .5,
				q = 5,
				K = 50,
				Q = 55;
			class J extends o.a.Component {
				constructor() {
					super(...arguments), this.container = o.a.createRef(), this.state = {
						notificationHeights: D,
						currentNotificationCursorIndex: -1
					}, this.resetOverflowMenu = () => {
						this.props.activeOverflowMenuId.length > M && this.props.setActiveOverflowMenuId(H)
					}, this.getContainerHeight = () => {
						const {
							notificationHeights: e
						} = this.state, {
							isDNInboxPromptBannerEnabled: t,
							isInboxPrivacyPolicyBannerEnabled: n,
							isLoggedIn: r
						} = this.props, i = t || n, o = window.innerHeight - K - 2 * Q - (i ? W : 0);
						let a = 0;
						for (const s in e) a += e[s];
						return 0 === a ? i ? z : r ? F : V : (i && (a += W), o < a && (a = o + (i ? W : 0)), a)
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
						} = this.state, n = t + q, r = n > e.length ? n : e.length - 1;
						this.setState({
							currentNotificationCursorIndex: r
						})
					}, this.renderNotifications = () => {
						const e = b()(this.props, ["notifications"]),
							{
								notificationHeights: t,
								currentNotificationCursorIndex: n
							} = this.state,
							{
								isInboxInfiniteScrollEnabled: r,
								notifications: i
							} = this.props,
							a = i.length > n + q;
						return (r && i.length > 0 && a ? i.slice(0, n + 1) : i).map((n, r) => o.a.createElement(B, R({}, e, {
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
							notifications: i
						} = this.props;
						if (e.isIntersecting) {
							const e = i.length > this.state.currentNotificationCursorIndex + q;
							this.props.notifications.length > 0 && r && e ? this.updateCurrentCursorIndex() : t && n({
								after: t,
								first: q
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
						isHotPotatoEnabled: n,
						isInboxPrivacyPolicyBannerEnabled: r,
						isInboxInfiniteScrollEnabled: i,
						isLoggedIn: a,
						isPending: s,
						notifications: c,
						setDesktopNotificationsPromptSeen: d,
						setInboxPrivacyPolicyBannerSeen: l,
						showBrowserNotificationsPermissionSettings: p,
						setHotPotatoBannerSeen: b
					} = this.props, m = !(!c || !c.length), f = this.getContainerHeight(), h = c.length > this.state.currentNotificationCursorIndex + q, v = r || t || n;
					return o.a.createElement("div", {
						className: P.a.notificationList,
						ref: this.container,
						style: m ? {
							height: f,
							maxHeight: f
						} : {
							minHeight: F
						}
					}, v && o.a.createElement("div", {
						className: P.a.notificationBannerContainer
					}, r && o.a.createElement(w.a, {
						onClose: l,
						pageType: A.c.MiniInbox
					}), t && o.a.createElement(g, {
						onTurnOnBrowserNotifications: p,
						onClose: d
					}), n && o.a.createElement(N, {
						onClose: b
					})), !m && s && o.a.createElement(L.a, null), !m && !s && o.a.createElement(U.a, {
						isBannerEnabled: v,
						isLoggedIn: a,
						inTooltip: !0,
						hideTooltip: this.props.onItemClick
					}), m && this.renderNotifications(), i && m && !s && (e || h) && o.a.createElement(u.a, {
						onChange: this.loadNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: G
					}, o.a.createElement("div", null)))
				}
			}
			var Y = n("./src/reddit/constants/localStorage.ts"),
				Z = n("./src/reddit/hooks/useLocalStorage.ts");
			var X = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts"),
				$ = n("./src/reddit/hooks/useInboxPrivacyPolicyBannerSeen.ts");

			function ee() {
				return (ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const te = [],
				ne = d.a.div("StyledDropdown", P.a),
				re = e => {
					let {
						isLoggedIn: t,
						onMessagesClick: n,
						onBarClick: a,
						markAllAsRead: s,
						messagesBadgeCount: d,
						sendInboxClickSettings: u
					} = e;
					const p = !!d,
						b = Object(i.useCallback)(() => {
							n(), a()
						}, [n, a]),
						m = Object(i.useCallback)(() => {
							u(), a()
						}, [u, a]);
					return o.a.createElement("nav", {
						className: P.a.topNav
					}, o.a.createElement("span", {
						className: P.a.topNavTitle
					}, r.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), t && o.a.createElement("span", {
						className: P.a.topNavLinks
					}, o.a.createElement("span", {
						className: P.a.messagesLinkContainer
					}, o.a.createElement(_.a, {
						className: Object(c.a)(P.a.messagesLink, {
							[P.a.mActive]: p
						}),
						onClick: b,
						to: p ? "/message/unread" : "/message/messages"
					}, r.fbt._("Messages", null, {
						hk: "hulKY"
					}), o.a.createElement(l.a, {
						className: P.a.badgeCount,
						isActive: p,
						unreadCount: d
					}))), o.a.createElement("button", {
						className: P.a.navLink,
						onClick: s
					}, o.a.createElement(x.a, {
						name: "mark_read",
						className: P.a.icon
					})), o.a.createElement(_.a, {
						className: P.a.navLink,
						onClick: m,
						to: "/settings/notifications"
					}, o.a.createElement(x.a, {
						name: "settings",
						className: P.a.icon
					}))))
				},
				ie = e => o.a.createElement("div", {
					className: P.a.bottomBar
				}, o.a.createElement(_.a, {
					className: P.a.bottomLink,
					onClick: () => {
						e.sendInboxClickSeeAll(), e.onBarClick()
					},
					to: "/notifications"
				}, r.fbt._("See All", null, {
					hk: "3L3tFc"
				}))),
				oe = e => {
					const t = Object(I.a)(),
						{
							clearMessageTabBadgeCount: n,
							inboxBadgeCount: r,
							isPending: i,
							messagesBadgeCount: c,
							notifications: d,
							hideTooltip: l,
							isHotPotatoEnabled: u,
							isInboxPolicyBannerEnabled: p,
							isLoggedIn: b,
							isPushNotificationsSupported: m,
							userId: f
						} = e,
						[h, g] = Object(X.a)(f),
						[v, y] = Object($.a)(f),
						[_, O] = function(e) {
							let {
								key: t,
								userId: n
							} = e;
							const [r, i] = Object(Z.a)(t, []);
							return [-1 !== r.indexOf(n), () => {
								i([...r, n])
							}]
						}({
							key: Y.b.HOT_POTATO_BANNER_SEEN,
							userId: f
						}),
						x = !(!d || !d.length),
						j = Object(a.a)(),
						k = j === s.a.Closed || j === s.a.Default || j === s.a.Denied,
						N = m && k && !h;
					return o.a.createElement(ne, null, o.a.createElement("div", {
						className: P.a.tooltipContainer
					}, o.a.createElement(re, {
						markAllAsRead: () => {
							e.markAllAsRead(), t(Object(A.i)({
								isMiniInbox: !0
							}))
						},
						messagesBadgeCount: c,
						onMessagesClick: () => {
							t(Object(A.u)({
								badgeCount: r,
								tab: A.f.Messages
							})), t(Object(A.j)()), n()
						},
						sendInboxClickSettings: () => t(Object(A.o)(A.c.MiniInbox)),
						onBarClick: l,
						isLoggedIn: b
					}), o.a.createElement(J, ee({}, e, {
						isPending: i,
						onItemClick: l,
						setDesktopNotificationsPromptSeen: g,
						isDNInboxPromptBannerEnabled: N,
						isInboxPrivacyPolicyBannerEnabled: p && !v,
						setInboxPrivacyPolicyBannerSeen: y,
						isHotPotatoEnabled: u && !_,
						setHotPotatoBannerSeen: O
					})), (x || i) && o.a.createElement(ie, {
						sendInboxClickSeeAll: () => t(Object(A.n)()),
						onBarClick: l
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
			const i = Object(r.a)({
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
			t.a = i
		},
		"./src/reddit/components/NotificationUnit/Placeholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./src/reddit/components/NotificationUnit/index.m.less"),
				a = n.n(o);
			const s = () => i.a.createElement("li", {
					className: a.a.placeholderWrapper
				}, i.a.createElement("span", {
					className: a.a.placeholderAvatar
				}), i.a.createElement("span", {
					className: a.a.placeholderContent
				})),
				c = () => i.a.createElement("ol", null, i.a.createElement(s, null), i.a.createElement(s, null), i.a.createElement(s, null))
		},
		"./src/reddit/components/NotificationUnit/index.m.less": function(e, t, n) {
			e.exports = {
				notificationItem: "_3mUSJN4kdLCGjq-K-JLJw",
				unread: "_2n4UrzwZ3VBdRmFUYAHF_9",
				isNightMode: "_3ds5pVvIyBrh1GgQ2O7AFd",
				contextContainer: "_3T3J7R8JnlSfiFdB5bxe5h",
				link: "_1tpiOc0IxpDU113wUs4zi1",
				inAppNotification: "_3U799isaNx88b2pVv1S7m1",
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
				TitleWrapper: "_3D7vaSdKwBK4pdvYmH0ib",
				titleWrapper: "_3D7vaSdKwBK4pdvYmH0ib",
				title: "_180jOSBDwwE60X5UR8zt3-",
				"m-tooltip": "_2a8MIP8QlMF7KPqTup62Vt",
				mTooltip: "_2a8MIP8QlMF7KPqTup62Vt",
				timeAgo: "_2fQXbzOYQuzqlwMzxgtBKH",
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
				isFullWidth: "_36xH7NkS9uRrlN87iMo6Bw",
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
				postEmbedThumbnail: "msJLWFmahK0W8JhaqYny9",
				postEmbedThumbnailBase: "_3CGVcVQDu97m9Oj_xs0n01",
				postEmbedBlurredThumbnail: "_2a0rc3KL05PEnGmVWcQI8W",
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
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./src/reddit/controls/Button/index.tsx"),
				s = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
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
			const p = (e, t, n) => null != n ? n : t ? e : a.c.Plain,
				b = e => {
					let {
						border: t,
						priority: n,
						small: r,
						...i
					} = e;
					return o.a.createElement(a.t, u({}, i, {
						priority: p(a.c.Primary, t, n),
						className: Object(l.a)(i.className, d.a.BaseButton),
						size: r ? a.d.S : a.d.M
					}))
				},
				m = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), o.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? r.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : r.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				f = e => {
					let {
						buttonType: t,
						border: n,
						priority: r,
						small: i,
						...s
					} = e;
					return o.a.createElement(a.t, u({}, s, {
						priority: p(a.c.Secondary, n, r),
						className: Object(l.a)(s.className, d.a.BaseButton),
						size: i ? a.d.S : a.d.M,
						text: m(t)
					}))
				};
			class h extends o.a.Component {
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
						small: i = !1,
						isFullWidth: a = !1,
						style: c
					} = this.props, d = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: r,
						small: i,
						isFullWidth: a,
						style: c
					};
					return this.props.userIsSubscriber ? o.a.createElement(f, u({}, d, {
						buttonType: this.props.identifier.type
					})) : o.a.createElement(b, u({}, d, {
						id: n
					}), this.props.children, Object(s.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(i.a)(Object(r.c)(o.a))
		},
		"./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return s
			}));
			var r = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json"),
				o = n("./src/redditGQL/operations/UpdateNotificationPreferences.json");
			const a = (e, t) => Object(r.a)(e, {
					...i,
					variables: t
				}),
				s = (e, t) => Object(r.a)(e, {
					...o,
					variables: {
						input: {
							preferences: [t]
						}
					}
				})
		},
		"./src/reddit/helpers/trackers/hotPotato.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
					...Object(i.n)(e),
					action: r.c.CLICK,
					noun: "preview",
					source: "hot_potato"
				}),
				a = () => e => ({
					...Object(i.n)(e),
					action: r.c.CLICK,
					noun: "hot_potato",
					source: "nav"
				}),
				s = () => e => ({
					...Object(i.n)(e),
					action: r.c.CLICK,
					noun: "hot_potato",
					source: "inbox"
				})
		},
		"./src/reddit/helpers/trackers/inbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return r
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "w", (function() {
				return p
			})), n.d(t, "t", (function() {
				return b
			})), n.d(t, "r", (function() {
				return m
			})), n.d(t, "s", (function() {
				return f
			})), n.d(t, "p", (function() {
				return h
			})), n.d(t, "k", (function() {
				return g
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "u", (function() {
				return y
			})), n.d(t, "v", (function() {
				return _
			})), n.d(t, "y", (function() {
				return O
			})), n.d(t, "l", (function() {
				return I
			})), n.d(t, "x", (function() {
				return x
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "m", (function() {
				return k
			})), n.d(t, "z", (function() {
				return N
			})), n.d(t, "q", (function() {
				return w
			})), n.d(t, "o", (function() {
				return C
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "j", (function() {
				return S
			})), n.d(t, "i", (function() {
				return P
			})), n.d(t, "g", (function() {
				return T
			}));
			var r, i, o, a, s, c, d = n("./src/reddit/constants/tracking.ts"),
				l = n("./src/reddit/selectors/telemetry.ts"),
				u = n("./src/telemetry/index.ts");
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(r || (r = {})),
			function(e) {
				e.HideNotifications = "hide_notification", e.HideSubreddit = "hide_subreddit", e.HideUpdates = "hide_updates", e.BlockAwarder = "block_awarder", e.DecreaseSubredditUpdates = "disable_frequent"
			}(i || (i = {})),
			function(e) {
				e.MiniInbox = "mini_inbox", e.Inbox = "inbox"
			}(o || (o = {})),
			function(e) {
				e.Inbox = "inbox", e.Nav = "nav", e.Settings = "notification_app_settings"
			}(a || (a = {})),
			function(e) {
				e[e.FIRST = 1] = "FIRST", e[e.SECOND = 2] = "SECOND"
			}(s || (s = {})),
			function(e) {
				e.Confirm = "confirm"
			}(c || (c = {}));
			const p = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: i
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.VIEW,
						noun: "inbox_notification",
						source: "inbox",
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: i
						}
					})
				},
				b = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: i
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.VIEW,
						noun: "notification",
						source: "in_app_notification",
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: i
						}
					})
				},
				m = () => e => ({
					...l.n(e),
					action: d.c.RECEIVE,
					noun: "notification",
					source: "in_app_notification"
				}),
				f = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: i,
						awardId: o
					} = e;
					return e => {
						Object(u.a)({
							...l.n(e),
							action: "receive",
							noun: "inbox_notification",
							source: a.Inbox,
							inbox: {
								id: t,
								isClicked: n,
								isViewed: r
							},
							notification: {
								type: i
							},
							goldPurchase: {
								awardId: o
							}
						})
					}
				},
				h = e => {
					let {
						dnPromptAction: t
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "inbox_banner",
						source: "inbox",
						banner: {
							id: "inbox_dn_banner"
						},
						actionInfo: {
							pageType: "dn_prompt",
							type: t
						}
					})
				},
				g = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: i,
						awardId: o,
						position: a,
						postId: s,
						subredditId: c
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "inbox_notification",
						source: "inbox",
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: i
						},
						goldPurchase: {
							awardId: o
						},
						actionInfo: {
							position: a
						},
						subreddit: c ? {
							id: c
						} : null,
						post: s ? {
							id: s
						} : null
					})
				},
				v = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: i,
						awardId: o,
						position: a,
						postId: s,
						subredditId: c
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "notification",
						source: "in_app_notification",
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: i
						},
						goldPurchase: {
							awardId: o
						},
						actionInfo: {
							position: a
						},
						subreddit: c ? {
							id: c
						} : null,
						post: s ? {
							id: s
						} : null
					})
				},
				y = e => {
					let {
						badgeCount: t,
						tab: n
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.VIEW,
						noun: "inbox",
						source: a.Inbox,
						inbox: {
							badgeCount: t,
							tab: n
						}
					})
				},
				_ = e => {
					let {
						badgeCount: t,
						tab: n
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.VIEW,
						noun: "mini_inbox",
						source: a.Inbox,
						inbox: {
							badgeCount: t,
							tab: r.Activity
						}
					})
				},
				O = e => {
					let {
						badgeCount: t
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "inbox",
						source: a.Nav,
						inbox: {
							badgeCount: t
						}
					})
				},
				I = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: i,
						awardId: o
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "inbox_notification_overflow",
						source: a.Inbox,
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: i
						},
						goldPurchase: {
							awardId: o
						}
					})
				},
				x = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: i
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.VIEW,
						noun: "inbox_notification_overflow",
						source: a.Inbox,
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: i
						}
					})
				};
			var j;
			! function(e) {
				e.Cats = "cats", e.Memes = "memes", e.Karma = "karma_free_subs", e.PN_perms = "pn_perms", e.Email_perms = "email_perms"
			}(j || (j = {}));
			const k = e => {
					let {
						actionInfoType: t,
						id: n,
						isClicked: r,
						isViewed: i,
						type: o
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "overflow_option",
						source: a.Inbox,
						inbox: {
							id: n,
							isClicked: r,
							isViewed: i
						},
						notification: {
							type: o
						},
						actionInfo: {
							...l.d(e),
							type: t
						}
					})
				},
				N = e => {
					let {
						actionInfoType: t,
						id: n,
						isClicked: r,
						isViewed: i,
						type: o
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.UNDO,
						noun: "overflow_option",
						source: a.Inbox,
						inbox: {
							id: n,
							isClicked: r,
							isViewed: i
						},
						notification: {
							type: o
						},
						actionInfo: {
							...l.d(e),
							type: t
						}
					})
				},
				w = e => {
					let {
						actionInfoType: t
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "empty_state_cta",
						source: a.Inbox,
						actionInfo: {
							...l.d(e),
							type: t
						}
					})
				},
				C = e => t => ({
					...l.n(t),
					action: d.c.CLICK,
					noun: "notification_app_settings",
					source: a.Inbox,
					actionInfo: {
						...l.d(t),
						pageType: e
					}
				}),
				E = () => e => ({
					...l.n(e),
					action: d.c.CLICK,
					noun: "see_all",
					source: a.Inbox,
					actionInfo: {
						...l.d(e),
						pageType: o.MiniInbox
					}
				}),
				S = () => e => ({
					...l.n(e),
					action: d.c.CLICK,
					noun: "messages",
					source: a.Inbox
				}),
				P = e => {
					let {
						isMiniInbox: t
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "mark_all_as_read",
						source: a.Inbox,
						actionInfo: t ? {
							...l.d(e),
							pageType: o.MiniInbox
						} : {}
					})
				},
				T = (e, t) => n => ({
					...l.n(n),
					action: d.c.CLICK,
					noun: "policy_banner",
					source: a.Inbox,
					actionInfo: {
						...l.d(n),
						pageType: e,
						type: t
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
				return p
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "l", (function() {
				return I
			})), n.d(t, "m", (function() {
				return x
			}));
			var r = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/telemetry/index.ts"),
				o = n("./src/telemetry/models/Event.ts");
			var a;
			! function(e) {
				e.FREQUENT = "frequent", e.LOW = "low", e.OFF = "off"
			}(a || (a = {}));
			const s = e => ({
					...r.n(e),
					noun: "desktop_notification_permissions"
				}),
				c = e => e ? "enable" : "disable",
				d = e => {
					Object(i.a)({
						...s(e),
						action: o.c.View,
						source: "popup"
					})
				},
				l = e => {
					Object(i.a)({
						...s(e),
						action: o.c.Allow,
						source: "popup"
					})
				},
				u = e => {
					Object(i.a)({
						...s(e),
						action: o.c.Block,
						source: "popup"
					})
				},
				p = e => {
					Object(i.a)({
						...s(e),
						action: o.c.Close,
						source: "popup"
					})
				},
				b = (e, t, n) => ({
					...r.n(e),
					actionInfo: r.d(e, {
						success: t,
						reason: n
					}),
					noun: "push_token"
				}),
				m = e => {
					Object(i.a)({
						...b(e, !0),
						action: o.c.Request,
						source: "notification"
					})
				},
				f = e => {
					Object(i.a)({
						...b(e, !0),
						action: o.c.Register,
						source: "notification"
					})
				},
				h = (e, t) => {
					Object(i.a)({
						...b(e, !1, t),
						action: o.c.Bail,
						source: "notification"
					})
				},
				g = e => ({
					...r.n(e),
					noun: "push_notification"
				}),
				v = e => ({
					...g(e),
					notification: r.D(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				y = (e, t) => n => ({
					...r.n(n),
					action: c(e),
					email: {
						type: t
					},
					noun: "email",
					source: "email_app_settings"
				}),
				_ = (e, t) => n => ({
					...r.n(n),
					action: c(e),
					notification: {
						type: t
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				O = e => t => ({
					...r.n(t),
					source: "email_app_settings",
					action: c(e),
					noun: "email",
					notification: {
						type: "all"
					}
				}),
				I = (e, t, n) => i => ({
					...r.n(i),
					action: "set_frequency",
					noun: n,
					source: "community_notifications",
					subreddit: {
						id: e,
						name: t.toLowerCase()
					}
				}),
				x = () => e => ({
					...r.n(e),
					action: o.c.View,
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
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				i = n("./src/reddit/helpers/localStorage/index.ts");

			function o(e) {
				const [t, n] = Object(r.useState)(Object(i.s)(e));
				return [t, Object(r.useCallback)(() => {
					n(!0), Object(i.ob)(e)
				}, [])]
			}
		},
		"./src/reddit/hooks/useInboxPrivacyPolicyBannerSeen.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				i = n("./src/reddit/helpers/localStorage/index.ts");

			function o(e) {
				const [t, n] = Object(r.useState)(() => Object(i.u)(e));
				return [t, Object(r.useCallback)(() => {
					n(!0), Object(i.zb)(e)
				}, [e])]
			}
		},
		"./src/reddit/icons/svgs/HotPotato/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				i = n.n(r);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 32 32",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", {
				fill: "#ff4500"
			}, i.a.createElement("path", {
				d: "m6.4 0h-6.4v6.4h6.4z"
			}), i.a.createElement("path", {
				d: "m12.8 0h-6.4v6.4h6.4z"
			}), i.a.createElement("path", {
				d: "m19.2 0h-6.4v6.4h6.4z"
			}), i.a.createElement("path", {
				d: "m25.6 0h-6.4v6.4h6.4z"
			}), i.a.createElement("path", {
				d: "m32 6.4h-6.4v6.4h6.4z"
			}), i.a.createElement("path", {
				d: "m32 12.8h-6.4v6.4h6.4z"
			}), i.a.createElement("path", {
				d: "m32 19.2h-6.4v6.4h6.4z"
			}), i.a.createElement("path", {
				d: "m32 25.6h-6.4v6.4h6.4z"
			}), i.a.createElement("path", {
				d: "m19.2 25.6h-6.4v6.4h6.4z"
			}), i.a.createElement("path", {
				d: "m25.6 25.6h-6.4v6.4h6.4z"
			}), i.a.createElement("path", {
				d: "m6.4 25.6h-6.4v6.4h6.4z"
			})), i.a.createElement("path", {
				d: "m19.2 12.8h-6.4v6.4h6.4z",
				fill: "#000"
			}), i.a.createElement("g", {
				fill: "#ff4500"
			}, i.a.createElement("path", {
				d: "m6.4 19.2h-6.4v6.4h6.4z"
			}), i.a.createElement("path", {
				d: "m6.4 12.8h-6.4v6.4h6.4z"
			}), i.a.createElement("path", {
				d: "m6.4 6.4h-6.4v6.4h6.4z"
			})), i.a.createElement("path", {
				d: "m19.2 6.4h-12.8v25.6h6.4v-6.4h12.8v-19.2zm0 12.8h-6.4v-6.4h6.4z",
				fill: "#fff"
			}))
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
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/helpers/trackers/inbox.ts"),
				s = n("./src/reddit/hooks/useTracking.ts"),
				c = n("./node_modules/fbt/lib/FbtPublic.js"),
				d = n("./src/config.ts"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/index.m.less"),
				b = n.n(p);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var f = e => {
					let {
						inTooltip: t,
						onBtnClick: n
					} = e;
					const r = {
						to: "/r/cats/top/",
						kind: u.b.InternalLink
					};
					return i.a.createElement("div", {
						className: Object(l.a)(b.a.emptyState, b.a.karmaView, {
							[b.a.inNotificationsPage]: !t
						})
					}, i.a.createElement("div", {
						className: Object(l.a)(b.a.catsImageWrapper, {
							[b.a.inTooltip]: t
						})
					}, i.a.createElement("img", {
						src: `${d.a.assetPath}/img/notifications/bottom_cat.png`,
						alt: c.fbt._("cats picture", null, {
							hk: "27dboq"
						}),
						className: Object(l.a)(b.a.cat, b.a.bottom)
					}), i.a.createElement("img", {
						src: `${d.a.assetPath}/img/notifications/top_cat.png`,
						alt: c.fbt._("cats picture", null, {
							hk: "27dboq"
						}),
						className: Object(l.a)(b.a.cat, b.a.top)
					}), i.a.createElement("img", {
						src: `${d.a.assetPath}/img/notifications/cloud.png`,
						alt: c.fbt._("cats picture", null, {
							hk: "45gHNS"
						}),
						className: b.a.cloud
					}), i.a.createElement("img", {
						src: `${d.a.assetPath}/img/notifications/yummy.png`,
						alt: c.fbt._("cats picture", null, {
							hk: "27dboq"
						}),
						className: b.a.yummy
					})), i.a.createElement("h1", {
						className: Object(l.a)(b.a.emptyTitle, {
							[b.a.inTooltip]: t
						})
					}, c.fbt._("You don’t have any activity yet", null, {
						hk: "2GNaV0"
					})), i.a.createElement("p", {
						className: b.a.emptyDescription
					}, c.fbt._("That’s ok, maybe you just need the right inspiration. Have you had your daily cat fix yet today?", null, {
						hk: "3tmgZE"
					})), i.a.createElement(u.t, m({
						className: b.a.emptyStateButton,
						onClick: n
					}, r), c.fbt._("See today’s Top Cats in r/cats", null, {
						hk: "Um68y"
					})))
				},
				h = n("./src/lib/lessComponent.tsx"),
				g = n("./src/reddit/actions/login.ts");
			var v = e => i.a.createElement("svg", {
				className: e.className,
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 21"
			}, i.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M18.4 14.788c-.662 0-1.2-.537-1.2-1.202l-.012-5.998C17.188 3.625 13.963.4 10 .4 6.037.4 2.811 3.625 2.811 7.586l-.01 6.002c0 .663-.54 1.2-1.2 1.2a1.199 1.199 0 100 2.4h16.8a1.2 1.2 0 100-2.4zm-9.6 3.6H7.6c0 1.324 1.076 2.4 2.4 2.4 1.323 0 2.4-1.076 2.4-2.4H8.8zm-3.6-4.797c0 .422-.087.822-.22 1.197H15.02a3.554 3.554 0 01-.22-1.2l-.013-5.997A4.794 4.794 0 0010 2.8a4.794 4.794 0 00-4.789 4.787l-.01 6.003z"
			}));
			const y = h.a.wrapped(v, "BellOutline", b.a),
				_ = e => {
					let {
						isBannerEnabled: t,
						isLoggedIn: n
					} = e;
					const r = Object(o.d)();
					return i.a.createElement("div", {
						className: Object(l.a)(b.a.emptyState, {
							[b.a.emptyStateWithBanner]: Boolean(t),
							[b.a.loggedOutState]: !n
						})
					}, i.a.createElement(y, null), i.a.createElement("h1", {
						className: b.a.emptyTitle
					}, c.fbt._("Be the first to know", null, {
						hk: "2mNJO0"
					})), i.a.createElement("p", {
						className: b.a.emptyDescription
					}, c.fbt._("This is where you get updates on your activity and recommendations", null, {
						hk: "27V2PG"
					})), !n && i.a.createElement("div", {
						className: b.a.emptyStateLoggedOutContainer
					}, i.a.createElement(u.j, {
						onClick: () => r(Object(g.i)())
					}, c.fbt._("Log In", null, {
						hk: "ZR3pC"
					})), i.a.createElement("span", {
						className: b.a.emptyStateDivider
					}), i.a.createElement(u.j, {
						onClick: () => r(Object(g.j)())
					}, c.fbt._("Sign Up", null, {
						hk: "3Jd0SI"
					}))))
				};
			var O = n("./src/reddit/controls/InternalLink/index.tsx");

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const x = ["r/somethingimade", "r/CasualConversation", "r/DoesAnybodyElse", "r/Old_Recipes"][Math.floor(100 * Math.random()) % 4];
			var j = e => {
				let {
					inTooltip: t,
					isPopular: n,
					onBtnClick: r
				} = e;
				const o = n ? "r/popular" : x,
					a = `/${o}`,
					s = {
						to: a,
						kind: u.b.InternalLink
					},
					p = i.a.createElement(O.a, {
						to: a,
						target: "_blank",
						rel: "noopener noreferrer",
						className: b.a.subredditLinkR,
						onClick: r
					}, o);
				return i.a.createElement("div", {
					className: Object(l.a)(b.a.emptyState, b.a.karmaView, {
						[b.a.inNotificationsPage]: !t
					})
				}, i.a.createElement("img", {
					src: `${d.a.assetPath}/img/wrappedreddit/default_avatar.png`,
					alt: c.fbt._("default user avatar", null, {
						hk: "1VMTKf"
					}),
					className: Object(l.a)(b.a.avatarImage, {
						[b.a.inTooltip]: t
					})
				}), i.a.createElement("h1", {
					className: Object(l.a)(b.a.emptyTitle, {
						[b.a.inTooltip]: t
					})
				}, c.fbt._("You don’t have any activity yet", null, {
					hk: "2hf6yn"
				})), i.a.createElement("p", {
					className: b.a.emptyDescription
				}, n ? c.fbt._("That’s ok, maybe you just need the right inspiration. Try browsing {Link: to r/popular}, for new communities to join.", [c.fbt._param("Link: to r/popular", p)], {
					hk: "VSBWM"
				}) : c.fbt._("That’s ok, maybe you just need the right inspiration. Try posting in {Link: to popular subreddit} , a popular community for discussion.", [c.fbt._param("Link: to popular subreddit", p)], {
					hk: "1WOK4T"
				})), i.a.createElement(u.t, I({
					className: b.a.emptyStateButton,
					onClick: r,
					text: `Visit ${o}`
				}, s)))
			};

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const N = "/img/notifications/star.png";
			var w = e => {
					let {
						inTooltip: t,
						onBtnClick: n
					} = e;
					const r = {
						to: "/r/memes/top/",
						kind: u.b.InternalLink
					};
					return i.a.createElement("div", {
						className: Object(l.a)(b.a.emptyState, b.a.karmaView, {
							[b.a.inNotificationsPage]: !t
						})
					}, i.a.createElement("div", {
						className: Object(l.a)(b.a.memesImageWrapper, {
							[b.a.inTooltip]: t
						})
					}, i.a.createElement("img", {
						src: `${d.a.assetPath}/img/notifications/shrek.png`,
						alt: c.fbt._("memes picture", null, {
							hk: "3e3S9E"
						}),
						className: b.a.shrek
					}), i.a.createElement("img", {
						src: `${d.a.assetPath}${N}`,
						alt: c.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(l.a)(b.a.star, b.a.inBottom)
					}), i.a.createElement("img", {
						src: `${d.a.assetPath}${N}`,
						alt: c.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(l.a)(b.a.star, b.a.inCenter)
					}), i.a.createElement("img", {
						src: `${d.a.assetPath}${N}`,
						alt: c.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(l.a)(b.a.star, b.a.inTop)
					})), i.a.createElement("h1", {
						className: Object(l.a)(b.a.emptyTitle, {
							[b.a.inTooltip]: t
						})
					}, c.fbt._("You don’t have any activity yet", null, {
						hk: "2GNaV0"
					})), i.a.createElement("p", {
						className: b.a.emptyDescription
					}, c.fbt._("That’s ok, maybe you just need the right inspiration. Let’s get some more lolz in your life.", null, {
						hk: "10HMFI"
					})), i.a.createElement(u.t, k({
						className: b.a.emptyStateButton,
						onClick: n
					}, r), c.fbt._("See today’s Top Memes in r/Memes", null, {
						hk: "42zwJz"
					})))
				},
				C = n("./src/lib/notifications/index.ts"),
				E = n("./src/lib/notifications/constants.ts"),
				S = n("./src/redditGQL/types.ts"),
				P = n("./src/reddit/actions/modal.ts"),
				T = n("./src/reddit/actions/notifications/index.ts"),
				B = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				L = n("./src/reddit/actions/toaster.ts"),
				A = n("./src/reddit/components/Settings/modalIds.ts"),
				U = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				R = n("./src/reddit/models/Toast/index.ts"),
				D = n("./src/reddit/selectors/notificationPrefs.ts"),
				H = n("./src/reddit/selectors/user.ts");

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const F = [S.h.PrivateMessage, S.h.ChatMessage, S.h.ChatRequest, S.h.UsernameMention, S.h.PostReply, S.h.UpvotePost, S.h.UpvoteComment, S.h.CommentReply, S.h.ThreadReplies, S.h.TopLevelComment, S.h.NewPostActivity, S.h.UserNewFollower, S.h.PostFlairAdded, S.h.UserFlairAdded, S.h.NewPinnedPost, S.h.AwardReceived, S.h.PostFollow, S.h.TalkLive, S.h.CommentFollow, S.h.LifecyclePostSuggestions, S.h.BroadcastRecommendation, S.h.SubredditRecommendation, S.h.RedditLore, S.h.OneOff, S.h.CakeDay, S.h.ModeratedSrEngagement];
			var z;
			! function(e) {
				e[e.TURN_ON_PN = 0] = "TURN_ON_PN", e[e.TURN_ON_PN_APP = 1] = "TURN_ON_PN_APP", e[e.VERIFY_EMAIL = 2] = "VERIFY_EMAIL", e[e.TURN_ON_DAYLY_DIGEST = 3] = "TURN_ON_DAYLY_DIGEST", e[e.DONE = 4] = "DONE"
			}(z || (z = {}));
			var V = e => {
					let {
						inTooltip: t,
						isBannerEnabled: n,
						isLoggedIn: s,
						onBtnClick: p,
						hideTooltip: m
					} = e;
					const f = Object(o.d)(),
						h = Object(o.e)(H.n),
						g = Object(o.e)(H.D),
						v = Object(r.useRef)(h),
						[y, O] = Object(r.useState)(z.TURN_ON_PN),
						I = Object(o.e)(e => e.user.accountSettings.changeEmail.api.pending),
						x = Object(r.useCallback)(() => {
							f(async (e, t) => {
								var n, r;
								let i = Object(H.eb)(t());
								i.allIds.length || await e(Object(B.a)(U.a.Email));
								const o = null === (r = null === (n = (i = Object(H.eb)(t())).byId) || void 0 === n ? void 0 : n.EMAIL_DIGEST) || void 0 === r ? void 0 : r.isEnabled;
								O(o ? z.DONE : z.TURN_ON_DAYLY_DIGEST)
							})
						}, [f]),
						j = Object(r.useCallback)(() => {
							g ? x() : O(z.VERIFY_EMAIL)
						}, [g, x]),
						k = Object(r.useCallback)(() => {
							f(async (e, t) => {
								const n = t();
								Object(H.gb)(n).allIds.length || await e(Object(B.a)(U.a.Push)), Object(D.c)(t(), F) ? O(z.TURN_ON_PN_APP) : j()
							})
						}, [f, j]),
						N = Object(r.useCallback)(() => {
							(() => Object(C.a)() === E.a.Granted)() ? k(): O(z.TURN_ON_PN)
						}, [k]),
						w = Object(r.useCallback)(() => {
							p(a.b.Email_perms)(), t && m && m(), f(Object(P.h)(A.a))
						}, [f, p, t, m]);
					if (Object(r.useEffect)(() => {
							N()
						}, [N]), Object(r.useEffect)(() => {
							if (h !== v.current && y === z.VERIFY_EMAIL) {
								const e = Object(L.e)(c.fbt._("Email successfully updated!", null, {
									hk: "3iPlUp"
								}), R.b.SuccessCommunityGreen);
								f(Object(L.f)(e)), x()
							}
						}, [h, y, x]), Object(r.useEffect)(() => {
							I && f(Object(P.g)(A.a))
						}, [I, f]), y === z.DONE) return i.a.createElement(_, {
						isLoggedIn: s,
						isBannerEnabled: n
					});
					const S = {
							to: "/settings/notifications",
							kind: u.b.InternalLink,
							onClick: y === z.TURN_ON_PN_APP ? p(a.b.PN_perms) : p(a.b.Email_perms)
						},
						V = {
							onClick: y === z.TURN_ON_PN ? async () => {
								p(a.b.PN_perms)(), t && m && m(), await f(Object(T.requestBrowserNotificationPermissionPromptByUser)(A.f)), N()
							} : w
						},
						W = y === z.TURN_ON_PN || y === z.TURN_ON_PN_APP,
						G = y === z.TURN_ON_PN_APP || y === z.TURN_ON_DAYLY_DIGEST;
					return i.a.createElement("div", {
						className: Object(l.a)(b.a.emptyState, b.a.karmaView, {
							[b.a.inNotificationsPage]: !t
						})
					}, i.a.createElement("img", {
						src: `${d.a.assetPath}/img/wrappedreddit/default_avatar.png`,
						alt: c.fbt._("default user avatar", null, {
							hk: "1VMTKf"
						}),
						className: Object(l.a)(b.a.avatarImage, {
							[b.a.inTooltip]: t
						})
					}), i.a.createElement("h1", {
						className: Object(l.a)(b.a.emptyTitle, {
							[b.a.inTooltip]: t
						})
					}, W ? c.fbt._("Turn on notifications", null, {
						hk: "3qFpFu"
					}) : c.fbt._("Turn on email digest", null, {
						hk: "obBF8"
					})), i.a.createElement("p", {
						className: b.a.emptyDescription
					}, W ? c.fbt._("Stay in the loop on content from communities you love right on your phone.", null, {
						hk: "1gwnbO"
					}) : c.fbt._("Stay in the loop on content from communities you love right on your email inbox.", null, {
						hk: "1rs4kD"
					})), i.a.createElement(u.t, M({
						className: b.a.emptyStateButton
					}, G ? S : V, {
						text: c.fbt._("OK", null, {
							hk: "rhf0"
						})
					})))
				},
				W = n("./src/reddit/selectors/experiments/notifications.ts");
			t.a = e => {
				let {
					isBannerEnabled: t,
					isLoggedIn: n,
					inTooltip: r,
					hideTooltip: c
				} = e;
				const d = Object(s.a)(),
					l = e => () => d(Object(a.q)({
						actionInfoType: e
					})),
					u = Object(o.e)(W.b),
					p = Object(o.e)(W.c),
					b = Object(o.e)(W.d),
					m = Object(o.e)(W.a),
					h = Object(o.e)(W.e);
				return u || h ? i.a.createElement(j, {
					inTooltip: r,
					isPopular: h,
					onBtnClick: l(a.b.Karma)
				}) : p ? i.a.createElement(w, {
					inTooltip: r,
					onBtnClick: l(a.b.Memes)
				}) : b ? i.a.createElement(V, {
					isBannerEnabled: t,
					isLoggedIn: n,
					inTooltip: r,
					onBtnClick: l,
					hideTooltip: c
				}) : m ? i.a.createElement(f, {
					inTooltip: r,
					onBtnClick: l(a.b.Cats)
				}) : i.a.createElement(_, {
					isBannerEnabled: t,
					isLoggedIn: n
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
		"./src/reddit/reducers/pages/modHub/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				i = n("./src/reddit/actions/subredditModeration/constants.ts");
			var o = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.g:
						case i.f:
							return null;
						case i.e:
							return t.payload;
						default:
							return e
					}
				},
				a = n("./src/reddit/models/SubredditModeration/index.ts");
			const s = {};
			var c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.g: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, i = Object(a.e)(n, r);
							return {
								...e,
								[i]: !0
							}
						}
						case i.f:
						case i.e: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, i = Object(a.e)(n, r);
							return {
								...e,
								[i]: !1
							}
						}
						default:
							return e
					}
				},
				d = Object(r.c)({
					error: o,
					pending: c
				});
			const l = {};
			var u = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.f: {
						const {
							fetchedToken: n,
							subredditId: r
						} = t.payload, i = Object(a.e)(r, n);
						return {
							...e,
							[i]: !0
						}
					}
					default:
						return e
				}
			};
			const p = {};
			var b = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.f: {
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
				m = n("./node_modules/icepick/icepick.js");
			const f = {};
			var h = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.d:
					case i.f: {
						const {
							subredditId: n,
							approvedSubmitters: r
						} = t.payload, i = {
							[n]: r
						};
						return Object(m.merge)(e, i)
					}
					case i.k: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(m.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			var g = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.j:
					case i.i:
						return null;
					case i.h:
						return t.payload;
					default:
						return e
				}
			};
			var v = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.j:
							return !0;
						case i.i:
						case i.h:
							return !1;
						default:
							return e
					}
				},
				y = Object(r.c)({
					error: g,
					pending: v
				});
			var _ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.j:
							return null;
						case i.i: {
							const e = t.payload.approvedSubmitterIds[0];
							return e ? t.payload.approvedSubmitters[e] : null
						}
						default:
							return e
					}
				},
				O = Object(r.c)({
					api: y,
					result: _
				});
			const I = {};
			var x = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.f: {
							const {
								subredditId: n,
								approvedSubmitterIds: r
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...r]
							} : {
								...e,
								[n]: r
							}
						}
						case i.k: {
							const {
								subredditId: n,
								userId: r
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== r)
							}
						}
						case i.d: {
							const {
								subredditId: n,
								approvedSubmitterIds: r
							} = t.payload, i = r[0];
							return i && e[n] && -1 === e[n].indexOf(i) ? {
								[n]: [i, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				j = Object(r.c)({
					api: d,
					fetchedTokens: u,
					loadMore: b,
					models: h,
					search: O,
					userOrder: x
				}),
				k = n("./src/reddit/actions/grantUserFlair/constants.ts");
			var N = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.g:
					case k.i:
						return null;
					case k.f:
						return t.payload;
					default:
						return e
				}
			};
			var w = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.i:
							return !0;
						case k.g:
						case k.f:
							return !1;
						default:
							return e
					}
				},
				C = Object(r.c)({
					error: N,
					pending: w
				}),
				E = n("./node_modules/lodash/merge.js"),
				S = n.n(E),
				P = n("./node_modules/lodash/omit.js"),
				T = n.n(P);
			const B = {};
			var L = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.g:
					case k.k: {
						const {
							subredditId: n,
							flairedUsers: r
						} = t.payload;
						return S()({
							...e
						}, {
							[n]: r
						})
					}
					case k.c: {
						const {
							subredditId: n,
							userName: r
						} = t.payload, i = T()(e[n], r);
						return {
							...e,
							[n]: i
						}
					}
					case k.a:
					case k.b:
					case k.h:
						const {
							subredditId: n, userName: r, applied: i
						} = t.payload;
						return i ? {
							...e,
							[n]: {
								...e[n],
								[r]: i
							}
						} : e;
					default:
						return e
				}
			};
			const A = {};
			var U = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.g: {
						const {
							key: n,
							pageInfo: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			var R = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.l:
					case k.k:
						return null;
					case k.j:
						return t.payload;
					default:
						return e
				}
			};
			var D = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.l:
							return !0;
						case k.k:
						case k.j:
							return !1;
						default:
							return e
					}
				},
				H = Object(r.c)({
					error: R,
					pending: D
				});
			var M = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.k: {
							const {
								searchResult: e
							} = t.payload;
							return e
						}
						case k.c: {
							const {
								userName: n
							} = t.payload;
							return e === n ? null : e
						}
						default:
							return e
					}
				},
				F = Object(r.c)({
					api: H,
					result: M
				});
			const z = {};
			var V = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.g: {
							const {
								key: n,
								userOrder: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case k.a: {
							const {
								key: n,
								userName: r
							} = t.payload;
							if (!n) return e;
							if (!e[n].includes(r)) {
								const t = [...e[n], r];
								return {
									...e,
									[n]: t
								}
							}
							return e
						}
						case k.c: {
							const {
								userName: n
							} = t.payload, r = {};
							for (const t in e) r[t] = e[t].filter(e => e !== n);
							return r
						}
						default:
							return e
					}
				},
				W = Object(r.c)({
					api: C,
					models: L,
					pageInfo: U,
					search: F,
					userOrder: V
				}),
				G = n("./src/reddit/actions/moderationLog/constants.ts");
			const q = {};
			var K = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case G.b: {
						const {
							actionIds: n,
							key: r,
							subredditId: i
						} = t.payload;
						return {
							...e,
							[i]: {
								...e[i] || {},
								[r]: n
							}
						}
					}
					default:
						return e
				}
			};
			const Q = {};
			var J = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case G.b: {
							const {
								normalizedModerationLog: n,
								subredditId: r
							} = t.payload, i = {};
							n.forEach(e => {
								i[e.id] = e
							});
							const o = {
								[r]: i
							};
							return S()({
								...e
							}, o)
						}
						default:
							return e
					}
				},
				Y = Object(r.c)({
					itemOrder: K,
					models: J
				});
			var Z = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case G.b: {
						const {
							endCursor: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const X = {};
			var $ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : X,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case G.b: {
						const {
							hasNextPage: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			const ee = {};
			var te = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ee,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case G.b: {
						const {
							hasPreviousPage: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			const ne = [];
			var re = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case G.a: {
						const {
							normalizedModerators: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			var ie = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case G.b: {
							const {
								startCursor: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				oe = Object(r.c)({
					actions: Y,
					endCursor: Z,
					hasNextPage: $,
					hasPreviousPage: te,
					moderators: re,
					startCursor: ie
				});
			const ae = {};
			var se = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ae,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.K:
					case i.u: {
						const {
							subredditId: n,
							moderators: r
						} = t.payload.response || t.payload, i = {
							[n]: r
						};
						return Object(m.merge)(e, i)
					}
					case i.y: {
						const {
							subredditId: n,
							userId: r,
							permissions: i
						} = t.payload;
						return Object(m.setIn)(e, [n, r, "modPermissions"], i)
					}
					case i.fb: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(m.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			const ce = {};
			var de = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ce,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.v:
					case i.u: {
						const {
							key: n,
							subredditId: r
						} = t.payload;
						return r ? {
							...e,
							[n]: null
						} : e
					}
					case i.t: {
						const {
							error: n,
							key: r,
							subredditId: i
						} = t.payload;
						return i ? {
							...e,
							[r]: n
						} : e
					}
					default:
						return e
				}
			};
			const le = {};
			var ue = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : le,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.t:
						case i.u: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !1
							} : e
						}
						case i.v: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !0
							} : e
						}
						default:
							return e
					}
				},
				pe = Object(r.c)({
					error: de,
					pending: ue
				});
			const be = {};
			var me = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : be,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.u: {
							const {
								subredditId: n,
								response: r,
								key: i
							} = t.payload;
							return Object(m.setIn)(e, [n, i], r.moderatorIds)
						}
						case i.fb: {
							const {
								subredditId: n,
								userId: r,
								key: i
							} = t.payload, o = e[n][i].filter(e => e !== r);
							return Object(m.setIn)(e, [n, i], o)
						}
						default:
							return e
					}
				},
				fe = Object(r.c)({
					data: me,
					api: pe
				});
			var he = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.B:
					case i.A:
						return null;
					case i.z:
						return t.payload;
					default:
						return e
				}
			};
			var ge = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.A:
						case i.z:
							return !1;
						case i.B:
							return !0;
						default:
							return e
					}
				},
				ve = Object(r.c)({
					error: he,
					pending: ge
				});
			const ye = {};
			var _e = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ye,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.A: {
						const {
							subredditId: n,
							moderators: r
						} = t.payload;
						return Object(m.set)(e, n, r)
					}
					case i.cb: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(m.unsetIn)(e, [n, r])
					}
					case i.c: {
						const n = t.payload,
							{
								subredditId: r,
								moderators: i
							} = n,
							o = {
								[r]: i
							};
						return Object(m.merge)(e, o)
					}
					default:
						return e
				}
			};
			const Oe = {};
			var Ie = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.A: {
							const {
								subredditId: n,
								moderatorIds: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case i.cb: {
							const {
								subredditId: n,
								userId: r
							} = t.payload, i = e[n].filter(e => e !== r);
							return {
								...e,
								[n]: i
							}
						}
						case i.c: {
							const n = t.payload,
								{
									subredditId: r,
									moderatorIds: i
								} = n,
								o = [...e[r] || [], ...i];
							return {
								...e,
								[r]: o
							}
						}
						default:
							return e
					}
				},
				xe = Object(r.c)({
					api: ve,
					models: _e,
					userOrder: Ie
				});
			const je = {};
			var ke = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : je,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.H: {
						const {
							subredditId: n,
							response: r
						} = t.payload, {
							invitePending: i
						} = r, o = {
							[n]: i
						};
						return Object(m.merge)(e, o)
					}
					case i.E:
					case i.F: {
						const {
							subredditId: n
						} = t.payload;
						return Object(m.unset)(e, n)
					}
					default:
						return e
				}
			};
			const Ne = {};
			var we = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ne,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.u: {
						const {
							response: e
						} = t.payload;
						return {
							[e.subredditId]: {
								after: e.after,
								before: e.before
							}
						}
					}
					default:
						return e
				}
			};
			const Ce = {};
			var Ee = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ce,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.H: {
						const {
							response: e
						} = t.payload;
						return {
							[e.subredditId]: {
								after: e.after,
								before: e.before
							}
						}
					}
					default:
						return e
				}
			};
			const Se = {};
			var Pe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Se,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.H: {
						const {
							response: n
						} = t.payload, r = {
							[n.subredditId]: n.moderators
						};
						return Object(m.merge)({
							...e
						}, r)
					}
					case i.y: {
						const n = t.payload,
							{
								subredditId: r,
								userId: i,
								permissions: o
							} = n;
						return e[r] && e[r][i] ? Object(m.setIn)(e, [r, i, "modPermissions"], o) : e
					}
					default:
						return e
				}
			};
			var Te = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.L:
					case i.K:
						return null;
					case i.J:
						return t.payload;
					default:
						return e
				}
			};
			var Be = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.L:
							return !0;
						case i.K:
						case i.J:
							return !1;
						default:
							return e
					}
				},
				Le = Object(r.c)({
					error: Te,
					pending: Be
				}),
				Ae = n("./node_modules/lodash/isEqual.js"),
				Ue = n.n(Ae);
			var Re = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.L:
						case i.J:
						case i.fb:
							return null;
						case i.K: {
							const e = t.payload.moderatorIds[0];
							return e ? t.payload.moderators[e] : null
						}
						case i.y: {
							const {
								userId: n,
								permissions: r
							} = t.payload;
							return e && e.id === n && !Ue()(e.modPermissions, r) ? {
								...e,
								modPermissions: r
							} : e
						}
						default:
							return e
					}
				},
				De = Object(r.c)({
					api: Le,
					result: Re
				});
			const He = {};
			var Me = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : He,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.I:
					case i.H: {
						const {
							subredditId: n,
							key: r
						} = t.payload;
						return n ? {
							...e,
							[r]: null
						} : e
					}
					case i.G: {
						const {
							error: n,
							subredditId: r,
							key: i
						} = t.payload;
						return r ? {
							...e,
							[i]: n
						} : e
					}
					default:
						return e
				}
			};
			const Fe = {};
			var ze = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.G:
						case i.H: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !1
							} : e
						}
						case i.I: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !0
							} : e
						}
						default:
							return e
					}
				},
				Ve = Object(r.c)({
					error: Me,
					pending: ze
				});
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const We = {};
			var Ge = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : We,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.H: {
							const {
								response: n,
								subredditId: r,
								key: i
							} = t.payload, {
								moderatorIds: o
							} = n;
							return Object(m.merge)(e, {
								[r]: {
									[i]: o
								}
							})
						}
						case i.fb: {
							const {
								subredditId: n,
								userId: r
							} = t.payload, i = {
								...e[n]
							};
							return Object.keys(e[n]).forEach(t => {
								const o = e[n][t].filter(e => e !== r);
								i[t] = o
							}), Object(m.set)(e, n, i)
						}
						default:
							return e
					}
				},
				qe = Object(r.c)({
					data: Ge,
					api: Ve
				}),
				Ke = Object(r.c)({
					editableModerators: se,
					editableUserOrder: fe,
					invitedModerators: xe,
					invitePending: ke,
					loadMoreModerators: Ee,
					loadMoreEditableModerators: we,
					models: Pe,
					search: De,
					userOrder: qe
				}),
				Qe = n("./src/reddit/actions/bulkActions/constants.ts");
			var Je = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Qe.c:
						case Qe.b:
							return null;
						case Qe.a:
							return t.payload;
						default:
							return e
					}
				},
				Ye = n("./src/reddit/actions/modQueue/constants.ts");
			var Ze = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Qe.c:
							return !0;
						case Qe.b:
						case Qe.a:
						case Ye.s:
						case Ye.r:
							return !1;
						default:
							return e
					}
				},
				Xe = Object(r.c)({
					error: Je,
					pending: Ze
				});
			const $e = {};
			var et = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $e,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.a: {
							const {
								ids: n
							} = t.payload, r = {};
							return n.forEach(e => r[e] = !0), {
								...e,
								...r
							}
						}
						case Ye.d: {
							const {
								ids: n
							} = t.payload;
							return T()(e, n)
						}
						case Ye.c: {
							const {
								ids: e
							} = t.payload, n = {};
							return e.forEach(e => n[e] = !0), n
						}
						default:
							return e
					}
				},
				tt = n("./src/reddit/models/ModQueue/index.ts");
			const nt = {};
			var rt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Qe.b: {
							const {
								operation: e,
								ids: n
							} = t.payload;
							return "approve" === e ? nt : {
								[tt.c[e]]: n
							}
						}
						default:
							return e
					}
				},
				it = Object(r.c)({
					api: Xe,
					selectedItems: et,
					undoLastAction: rt
				});
			var ot = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.g:
					case Ye.f:
						return null;
					case Ye.e:
						return t.payload;
					default:
						return e
				}
			};
			var at = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.g:
							return !0;
						case Ye.f:
						case Ye.e:
							return !1;
						default:
							return e
					}
				},
				st = Object(r.c)({
					error: ot,
					pending: at
				});
			const ct = {};
			var dt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ct,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.f: {
						const {
							listingKey: n,
							page: r,
							response: i
						} = t.payload, {
							modqueue: o
						} = i;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: o
							}
						}
					}
					default:
						return e
				}
			};
			const lt = {};
			var ut = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.f: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: i
							} = r, o = i[i.length - 1] || null;
							return {
								...e,
								[n]: o
							}
						}
						default:
							return e
					}
				},
				pt = Object(r.c)({
					api: st,
					itemOrder: dt,
					loadMore: ut
				}),
				bt = n("./src/reddit/actions/pages/modListing/constants.ts");
			var mt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bt.e: {
						const n = t.payload,
							{
								moderatingSubreddits: r
							} = n;
						return r ? null : e
					}
					case Ye.i:
					case Ye.f:
					case Ye.m:
					case Ye.p:
					case Ye.v: {
						const {
							response: e
						} = t.payload, {
							moderatedAfter: n
						} = e;
						return n
					}
					case Ye.k: {
						const e = t.payload,
							{
								moderatedAfter: n
							} = e;
						return n
					}
					default:
						return e
				}
			};
			const ft = [];
			var ht = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ft,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.i:
					case Ye.f:
					case Ye.m:
					case Ye.p:
					case Ye.v: {
						const {
							response: e
						} = t.payload, {
							listingOrder: n
						} = e;
						return n
					}
					case Ye.k: {
						const n = t.payload,
							{
								listingOrder: r
							} = n;
						return [...e, ...r]
					}
					case bt.e: {
						const n = t.payload,
							{
								listingOrder: r
							} = n;
						return r || e
					}
					default:
						return e
				}
			};
			var gt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.b:
						return !0;
					default:
						return e
				}
			};
			var vt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.k:
							return !0;
						case Ye.b:
							return !1;
						default:
							return e
					}
				},
				yt = Object(r.c)({
					after: mt,
					data: ht,
					loaded: gt,
					pending: vt
				});
			var _t = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.j:
					case Ye.i:
						return null;
					case Ye.h:
						return t.payload;
					default:
						return e
				}
			};
			var Ot = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.j:
							return !0;
						case Ye.i:
						case Ye.h:
							return !1;
						default:
							return e
					}
				},
				It = Object(r.c)({
					error: _t,
					pending: Ot
				});
			const xt = {};
			var jt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.i: {
						const {
							listingKey: n,
							page: r,
							response: i
						} = t.payload, {
							modqueue: o
						} = i;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: o
							}
						}
					}
					default:
						return e
				}
			};
			const kt = {};
			var Nt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.i: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: i
							} = r, o = i[i.length - 1] || null;
							return {
								...e,
								[n]: o
							}
						}
						default:
							return e
					}
				},
				wt = Object(r.c)({
					api: It,
					itemOrder: jt,
					loadMore: Nt
				});
			var Ct = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.n:
					case Ye.m:
						return null;
					case Ye.l:
						return t.payload;
					default:
						return e
				}
			};
			var Et = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.n:
							return !0;
						case Ye.m:
						case Ye.l:
							return !1;
						default:
							return e
					}
				},
				St = Object(r.c)({
					error: Ct,
					pending: Et
				});
			const Pt = {};
			var Tt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.m: {
						const {
							listingKey: n,
							page: r,
							response: i
						} = t.payload, {
							modqueue: o
						} = i;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: o
							}
						}
					}
					default:
						return e
				}
			};
			const Bt = {};
			var Lt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.m: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: i
							} = r, o = i[i.length - 1] || null;
							return {
								...e,
								[n]: o
							}
						}
						default:
							return e
					}
				},
				At = Object(r.c)({
					api: St,
					itemOrder: Tt,
					loadMore: Lt
				});
			var Ut = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.q:
					case Ye.p:
						return null;
					case Ye.o:
						return t.payload;
					default:
						return e
				}
			};
			var Rt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.q:
							return !0;
						case Ye.p:
						case Ye.o:
							return !1;
						default:
							return e
					}
				},
				Dt = Object(r.c)({
					error: Ut,
					pending: Rt
				});
			const Ht = {};
			var Mt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ht,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.p: {
						const {
							listingKey: n,
							page: r,
							response: i
						} = t.payload, {
							modqueue: o
						} = i;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: o
							}
						}
					}
					default:
						return e
				}
			};
			const Ft = {};
			var zt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ft,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.p: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: i
							} = r, o = i[i.length - 1] || null;
							return {
								...e,
								[n]: o
							}
						}
						default:
							return e
					}
				},
				Vt = Object(r.c)({
					api: Dt,
					itemOrder: Mt,
					loadMore: zt
				});
			var Wt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.w:
					case Ye.v:
						return null;
					case Ye.u:
						return t.payload;
					default:
						return e
				}
			};
			var Gt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.w:
							return !0;
						case Ye.v:
						case Ye.u:
							return !1;
						default:
							return e
					}
				},
				qt = Object(r.c)({
					error: Wt,
					pending: Gt
				});
			const Kt = {};
			var Qt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.v: {
						const {
							listingKey: n,
							page: r,
							response: i
						} = t.payload, {
							modqueue: o
						} = i;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: o
							}
						}
					}
					default:
						return e
				}
			};
			const Jt = {};
			var Yt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.v: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: i
							} = r, o = i[i.length - 1] || null;
							return {
								...e,
								[n]: o
							}
						}
						default:
							return e
					}
				},
				Zt = Object(r.c)({
					api: qt,
					itemOrder: Qt,
					loadMore: Yt
				}),
				Xt = Object(r.c)({
					bulkAction: it,
					edited: pt,
					moderatedCommunitiesOrder: yt,
					modqueue: wt,
					reports: At,
					spam: Vt,
					unmoderated: Zt
				});
			var $t = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.U:
					case i.S:
						return null;
					case i.R:
						return t.payload;
					default:
						return e
				}
			};
			const en = {};
			var tn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : en,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.U: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, i = Object(a.e)(n, r);
							return {
								...e,
								[i]: !0
							}
						}
						case i.S:
						case i.R: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, i = Object(a.e)(n, r);
							return {
								...e,
								[i]: !1
							}
						}
						default:
							return e
					}
				},
				nn = Object(r.c)({
					error: $t,
					pending: tn
				});
			const rn = {};
			var on = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.S: {
							const {
								fetchedToken: n,
								subredditId: r
							} = t.payload, i = Object(a.e)(r, n);
							return {
								...e,
								[i]: !0
							}
						}
						default:
							return e
					}
				},
				an = n("./src/reddit/actions/inContextModeration.ts");
			var sn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case an.b:
						return t.payload;
					default:
						return e
				}
			};
			const cn = {};
			var dn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.S: {
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
			};
			const ln = {};
			var un = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ln,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.T:
					case i.S: {
						const {
							subredditId: n,
							mutedUsers: r
						} = t.payload, i = {
							[n]: r
						};
						return Object(m.merge)(e, i)
					}
					case i.Y: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(m.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			var pn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.X:
					case i.W:
						return null;
					case i.V:
						return t.payload;
					default:
						return e
				}
			};
			var bn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.X:
							return !0;
						case i.W:
						case i.V:
							return !1;
						default:
							return e
					}
				},
				mn = Object(r.c)({
					error: pn,
					pending: bn
				});
			var fn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.X:
						case i.V:
							return null;
						case i.W: {
							const e = t.payload.mutedUserIds[0];
							return e ? t.payload.mutedUsers[e] : null
						}
						default:
							return e
					}
				},
				hn = Object(r.c)({
					api: mn,
					result: fn
				});
			const gn = {};
			var vn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.S: {
							const {
								subredditId: n,
								mutedUserIds: r
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...r]
							} : {
								...e,
								[n]: r
							}
						}
						case i.Y: {
							const {
								subredditId: n,
								userId: r
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== r)
							}
						}
						case i.T: {
							const {
								subredditId: n,
								mutedUserIds: r
							} = t.payload, i = r[0];
							return i && e[n] && -1 === e[n].indexOf(i) ? {
								[n]: [i, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				yn = Object(r.c)({
					api: nn,
					fetchedTokens: on,
					inContext: sn,
					loadMore: dn,
					models: un,
					search: hn,
					userOrder: vn
				});
			t.a = Object(r.c)({
				approvedSubmitters: j,
				flairedUsers: W,
				moderationLog: oe,
				moderators: Ke,
				modQueue: Xt,
				muted: yn
			})
		},
		"./src/reddit/selectors/bannedUser.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "a", (function() {
				return m
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/reddit/components/InboxTooltip/Component.tsx"),
				o = n("./src/reddit/models/SubredditModeration/index.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const s = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.features.banned.models[n]
				},
				c = (e, t) => {
					let {
						subredditId: n,
						username: r
					} = t;
					const i = Object(a.yb)(e, {
						userName: r
					});
					if (!i) return;
					const o = s(e, {
						subredditId: n
					});
					return o ? o[i.id] : void 0
				},
				d = Object(r.a)((e, t) => {
					let {
						subredditId: n
					} = t;
					const r = e.features.banned.userOrder[n];
					return r ? r.map(t => e.features.banned.models[n][t]) : i.a
				}),
				l = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = Object(o.e)(n);
					return e.features.banned.api.pending[r]
				},
				u = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.features.banned.loadMore[n]
				},
				p = e => e.features.banned.search.api.pending,
				b = e => e.features.banned.search.result,
				m = e => e.features.banned.inContext
		},
		"./src/reddit/selectors/experiments/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "f", (function() {
				return l
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(i.c)(e, {
					experimentEligibilitySelector: i.a,
					experimentName: r.qb
				}) === r.nd.Karma,
				a = e => Object(i.c)(e, {
					experimentEligibilitySelector: i.a,
					experimentName: r.qb
				}) === r.nd.Memes,
				s = e => Object(i.c)(e, {
					experimentEligibilitySelector: i.a,
					experimentName: r.qb
				}) === r.nd.PnEmail,
				c = e => Object(i.c)(e, {
					experimentEligibilitySelector: i.a,
					experimentName: r.qb
				}) === r.nd.Cats,
				d = e => Object(i.c)(e, {
					experimentEligibilitySelector: i.a,
					experimentName: r.qb
				}) === r.nd.Popular,
				l = e => d(e) || c(e) || s(e) || a(e) || o(e)
		},
		"./src/reddit/selectors/muted.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "d", (function() {
				return m
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/reddit/models/SubredditModeration/index.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/pages/modHub/index.ts");
			Object(o.a)({
				pages: {
					modHub: a.a
				}
			});
			const s = [],
				c = Object(r.a)((e, t) => {
					let {
						subredditId: n
					} = t;
					const r = e.pages.modHub.muted.userOrder[n];
					return r ? r.map(t => e.pages.modHub.muted.models[n][t]) : s
				}),
				d = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = Object(i.e)(n);
					return !!e.pages.modHub.muted.api.pending[r]
				},
				l = (e, t, n) => !!e.pages.modHub.muted.models[t] && !!e.pages.modHub.muted.models[t][n],
				u = e => !!e.pages.modHub.muted.search.api.pending,
				p = e => e.pages.modHub.muted.search.result,
				b = e => {
					var t, n, r;
					return null === (r = null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.modHub) || void 0 === n ? void 0 : n.muted) || void 0 === r ? void 0 : r.inContext
				},
				m = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.pages.modHub.muted.loadMore[n]
				}
		},
		"./src/reddit/selectors/notificationPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "g", (function() {
				return o
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			}));
			const r = e => e.user.notificationPrefs.api.getPreferences.loaded,
				i = e => e.user.notificationPrefs.api.getPreferences.pending,
				o = e => e.user.notificationPrefs.api.setPreferences.pending,
				a = e => e.user.notificationPrefs.preferences,
				s = e => e.user.notificationPrefs.isNotificationPromptVisible,
				c = (e, t) => {
					var n, r;
					const i = (e => e.user.notificationPrefs.pushSettingsLayout)(e),
						o = null === (n = null == i ? void 0 : i.rows) || void 0 === n ? void 0 : n.byId;
					return o && (null === (r = o[t]) || void 0 === r ? void 0 : r.isEnabled)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard~Reddit.6e5e79b2a01144e3469d.js.map