// https://www.redditstatic.com/desktop2x/AuthorHovercard~Reddit.ff9b9d7ca84d6b356ca7.js
// Retrieved at 3/28/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard~Reddit"], {
		"./src/lib/browser/isIncognito.ts": function(e, t, n) {
			"use strict";
			var i = n("./src/lib/constants/index.ts");
			const a = 120 * i.hb;
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
		"./src/lib/notifications/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			}));
			var i = n("./src/lib/delay/index.ts"),
				a = n("./src/lib/getParsedUserAgent/index.ts"),
				o = n("./src/lib/localStorageAvailable/index.ts"),
				s = n("./src/lib/notifications/constants.ts"),
				r = n("./src/lib/notifications/featureFlags.ts");
			n("./src/lib/serviceWorker/index.ts");
			const c = () => {
					if (Object(r.a)() !== s.c.NotificationsSupported) return s.a.Unsupported;
					const e = Object(o.a)() && localStorage.getItem(s.f) === s.g;
					return "granted" === Notification.permission ? s.a.Granted : "denied" === Notification.permission ? s.a.Denied : e ? s.a.Closed : s.a.Default
				},
				l = () => !!Object(o.a)() && (localStorage.removeItem(s.f), !0),
				d = async (e, t, n, r, l, d) => {
					const u = c();
					if (u === s.a.Unsupported) return void d();
					if (Object(o.a)()) {
						const t = localStorage.getItem(s.h),
							n = (new Date).getTime();
						if (!e && t && parseInt(t) + s.i > n) return void d();
						localStorage.setItem(s.h, n.toString())
					}
					if (!t && u === s.a.Denied) return r(!1, !0), void d();
					if (!t && u === s.a.Granted) return l(!1), void d();
					if (!t && u === s.a.Closed) return void d();
					let p = s.a.Default;
					const m = navigator.userAgent;
					switch (Object(a.b)(m) || Object(a.f)(m) ? Object(i.a)(1800).then(() => {
						p === s.a.Default && n()
					}) : n(), p = await Notification.requestPermission()) {
						case "granted":
							l(!0);
							break;
						case "denied":
							r(!0, !0);
							break;
						case "default":
							d();
							break;
						default:
							r(!0, !1), localStorage.setItem(s.f, s.g)
					}
				}
		},
		"./src/lib/notifications/token.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			}));
			var i = n("./src/config.ts"),
				a = n("./src/redditGQL/operations/RegisterWebPushToken.json"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/lib/serviceWorker/index.ts"),
				r = n("./src/lib/timezone/index.ts"),
				c = e => {
					const t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"),
						n = window.atob(t),
						i = new Uint8Array(n.length);
					for (let a = 0; a < n.length; ++a) i[a] = n.charCodeAt(a);
					return i
				};
			var l;
			! function(e) {
				e[e.Success = 0] = "Success", e[e.FailedGeneric = 1] = "FailedGeneric", e[e.FailedResponse = 2] = "FailedResponse", e[e.FailedGqlReponse = 3] = "FailedGqlReponse", e[e.FailedNoServiceWorker = 4] = "FailedNoServiceWorker", e[e.FailedNoSubscription = 5] = "FailedNoSubscription"
			}(l || (l = {}));
			const d = async e => {
				try {
					const t = await Object(s.a)();
					if (!t) return l.FailedNoServiceWorker;
					let n = await t.pushManager.getSubscription();
					if (!n) {
						const e = {
							userVisibleOnly: !0,
							applicationServerKey: c(i.a.pushNotificationApplicationServerKey)
						};
						n = await t.pushManager.subscribe(e)
					}
					if (!n) return l.FailedNoSubscription;
					const d = await ((e, t) => {
						const n = {
							pushToken: JSON.stringify(t),
							timezoneName: Object(r.b)() || r.a,
							timestamp: (new Date).toISOString(),
							language: "en_us"
						};
						return Object(o.a)(e(), {
							...a,
							variables: n
						})
					})(e, n);
					if (d && !d.ok) return l.FailedResponse;
					const u = null == d ? void 0 : d.body.data.registerWebPushToken;
					return u && !u.ok ? l.FailedGqlReponse : l.Success
				} catch (t) {
					return console.error(t), l.FailedGeneric
				}
			}
		},
		"./src/reddit/actions/inContextModeration.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			}));
			var i = n("./src/lib/makeActionCreator/index.ts");
			const a = "INCONTEXT__BANNED",
				o = "INCONTEXT__MUTED",
				s = Object(i.a)(a),
				r = Object(i.a)(o)
		},
		"./src/reddit/actions/notificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "b", (function() {
				return C
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/notificationSettingsLayout/constants.ts"),
				s = n("./src/reddit/actions/toaster.ts"),
				r = n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				l = n("./src/redditGQL/operations/UserSubredditsNotificationsLevel.json");
			var d = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const p = Object(a.a)(o.c),
				m = Object(a.a)(o.b),
				b = Object(a.a)(o.a),
				f = Object(a.a)(o.f),
				h = Object(a.a)(o.e),
				g = Object(a.a)(o.d),
				_ = e => async (t, n, i) => {
					let {
						gqlContext: a
					} = i;
					e === d.a.Push ? t(f()) : t(p()), await async function(e, t, n) {
						const i = await Object(r.a)(e(), {
							channel: t
						});
						if (i.ok && i.body) {
							const e = function(e) {
								const t = e && e.data,
									n = t && t.notificationSettingsLayoutByChannel,
									i = n && n.sections;
								if (i) return function(e) {
									const t = {},
										n = [];
									let i = {},
										a = [];
									const o = e => {
										const {
											rowIds: o,
											rowsCollection: s
										} = function(e) {
											const t = [],
												n = {};
											if (e.rows)
												for (let i = 0; i < e.rows.length; i++) {
													const a = e.rows[i],
														o = a.messageType;
													t.push(o), n[o] = a
												}
											return {
												rowsCollection: n,
												rowIds: t
											}
										}(e);
										i = {
											...i,
											...s
										}, a = [...a, ...o];
										const r = e.id;
										n.push(r), t[r] = {
											...e,
											rows: o
										}
									};
									for (let s = 0; s < e.length; s++) o(e[s]);
									return {
										sections: {
											byId: t,
											allIds: n
										},
										rows: {
											byId: i,
											allIds: a
										}
									}
								}(i)
							}(i.body);
							t === d.a.Push ? n(h(e)) : n(m(e))
						} else t === d.a.Push ? n(g({
							error: i.error
						})) : n(b({
							error: i.error
						}))
					}(a, e, t)
				};
			const x = Object(a.a)(o.g),
				y = e => async (t, n, a) => {
					let {
						gqlContext: o
					} = a;
					(await Object(r.b)(o(), e)).ok ? (v(t, e), function(e) {
						e(Object(s.f)({
							kind: u.b.SuccessCommunity,
							text: i.fbt._("Changes saved", null, {
								hk: "UBoVR"
							})
						}))
					}(t)) : function(e) {
						e(Object(s.f)({
							kind: u.b.Error,
							text: i.fbt._("We had some issues saving your changes. Please try again.", null, {
								hk: "1OvQi6"
							})
						}))
					}(t)
				};

			function v(e, t) {
				e(x({
					isEnabled: t.isEnabled,
					messageType: t.messageType
				}))
			}
			const O = Object(a.a)(o.j),
				N = Object(a.a)(o.i),
				k = Object(a.a)(o.k),
				E = Object(a.a)(o.h),
				C = e => async (t, n, i) => {
					let {
						gqlContext: a
					} = i;
					var o, r;
					t(O());
					const d = await ((e, t) => Object(c.a)(e, {
						...l,
						variables: t
					}))(a(), e);
					if (null === (r = null === (o = d.error) || void 0 === o ? void 0 : o.fields) || void 0 === r ? void 0 : r.length) return t(E({
						error: d.error
					})), void t(Object(s.d)());
					if (d.ok && d.body) {
						const e = d.body,
							n = e && e.data,
							i = n && n.identity && n.identity.subscribedSubreddits,
							a = i && i.pageInfo,
							o = (i && i.edges).map(e => e.node);
						t(N({
							nodes: o,
							pageInfo: a
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
				return w
			})), n.d(t, "unsubscribeFromPNs", (function() {
				return S
			})), n.d(t, "requestBrowserNotificationPermissionPromptByUser", (function() {
				return P
			})), n.d(t, "subscribeToPermissionsChange", (function() {
				return B
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/omit.js"),
				o = n.n(a),
				s = n("./src/lib/browser/isIncognito.ts"),
				r = n("./src/lib/notifications/token.ts"),
				c = n("./src/lib/notifications/index.ts"),
				l = n("./src/lib/notifications/constants.ts"),
				d = n("./src/lib/serviceWorker/index.ts"),
				u = n("./src/reddit/actions/chat/toggle.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/notifications/utils.ts"),
				b = n("./src/reddit/actions/tabBadging.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/reddit/helpers/parseUrl.ts"),
				g = n("./src/reddit/helpers/tabBadging/index.ts"),
				_ = n("./src/reddit/helpers/trackers/notifications.ts"),
				x = n("./src/reddit/models/Toast/index.ts"),
				y = n("./src/reddit/constants/experiments.ts"),
				v = n("./src/reddit/helpers/chooseVariant/index.ts");
			const O = e => Object(v.c)(e, {
				experimentName: y.Mb,
				experimentEligibilitySelector: v.a
			}) === y.id;
			var N = n("./src/reddit/selectors/meta.ts"),
				k = n("./src/reddit/selectors/user.ts");
			let E = !1;
			const C = async (e, t) => {
				const n = Object(k.O)(e);
				if (E) return;
				if (E = !0, Object(m.a)(e) !== l.c.NotificationsSupported) return;
				await Object(d.a)();
				navigator.serviceWorker.addEventListener("message", i => {
					const a = i.data,
						s = a.command || a.type;
					if ("registerWithServiceWorker" === s) I(e);
					else if (s === g.a && n) {
						const e = o()(a, ["command"]);
						t(Object(b.f)(e))
					} else if ("navigate.chat" === s) {
						const e = Object(h.a)(a.data.href);
						e && e.pathname && t(Object(u.c)(e.pathname))
					}
				}), I(e)
			}, I = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: _.c(e)
				})
			}, j = function(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
				return async (i, a, o) => {
					const r = a(),
						d = Object(N.f)(r),
						u = O(r);
					if (await Object(s.a)() || d) return;
					await C(r, i);
					_.j(r), await Object(c.b)(e, t, () => {
						u || i(Object(l.o)()), i(Object(l.n)()), _.h(r)
					}, (e, t) => {
						i(Object(l.l)()), i(S(t ? l.a.Denied : l.a.Closed)), e && (t ? _.e(r) : _.f(r))
					}, e => {
						i(Object(l.m)()), i(w()), e && _.d(r)
					}, () => {
						i(Object(l.k)()), n()
					})
				}
			}, w = e => async (t, n, a) => {
				const o = n();
				try {
					switch (await Object(r.b)(a.gqlContext)) {
						case r.a.Success:
							Object(m.b)(l.a.Granted), _.k(o), e && t(Object(f.f)({
								kind: x.b.SuccessCommunity,
								text: i.fbt._("Changes saved", null, {
									hk: "wGH5U"
								})
							}));
							break;
						case r.a.FailedResponse:
							_.i(o, "registration_failed_generally");
							break;
						case r.a.FailedGqlReponse:
							_.i(o, "registration_failed_in_gql")
					}
				} catch (s) {
					_.i(o, "registration_failed_uncaught_exception"), console.error(s)
				}
			}, S = (e, t) => async n => {
				try {
					Object(m.b)(e);
					const a = await Object(d.a)();
					if (a) {
						const e = await a.pushManager.getSubscription();
						e && (e.unsubscribe(), t && n(Object(f.f)({
							kind: x.b.SuccessCommunity,
							text: i.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						})))
					}
				} catch (a) {}
			}, P = e => async (t, n) => {
				const i = n();
				if (Object(m.a)(i) === l.c.NotificationsSupported) switch (Object(c.a)()) {
					case l.a.Default:
					case l.a.Closed:
						await t(j(!0, !0));
						break;
					case l.a.Denied:
						t(Object(p.h)(e))
				}
			}, B = () => async (e, t) => {
				var n;
				if (!(null === (n = null === navigator || void 0 === navigator ? void 0 : navigator.permissions) || void 0 === n ? void 0 : n.query)) return;
				const i = t();
				if (Object(m.a)(i) !== l.c.NotificationsSupported) return;
				const a = await navigator.permissions.query({
					name: "notifications"
				});
				a.onchange = () => (t => {
					switch (t) {
						case l.a.Denied:
							e(S(l.a.Denied)), _.e(i);
							break;
						case l.a.Granted:
							e(w()), _.d(i);
							break;
						default:
							e(S(l.a.Default))
					}
				})(a.state)
			}
		},
		"./src/reddit/actions/notifications/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			}));
			var i = n("./src/lib/notifications/index.ts"),
				a = n("./src/lib/notifications/constants.ts"),
				o = n("./src/lib/notifications/featureFlags.ts"),
				s = n("./src/reddit/featureFlags/index.ts"),
				r = n("./src/reddit/helpers/localStorage/index.ts");
			const c = e => s.d.pushNotificationsBrowserSupported(e) ? Object(o.a)() : a.c.BrowserUnsupported,
				l = e => {
					switch (e) {
						case a.a.Denied:
							r.nb(!1), Object(i.c)();
							break;
						case a.a.Default:
						case a.a.Granted:
							r.nb(!0), Object(i.c)();
							break;
						case a.a.Closed:
							r.nb(!0)
					}
				}
		},
		"./src/reddit/actions/pages/wrappedReddit.ts": function(e, t, n) {
			"use strict";
			var i = n("./src/lib/pageTitle/index.ts"),
				a = n("./src/reddit/actions/platform.ts");
			t.a = () => async e => {
				e(Object(a.m)({
					title: Object(i.q)()
				}))
			}
		},
		"./src/reddit/actions/userFlair/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return a
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "g", (function() {
				return d
			}));
			var i = n("./src/lib/loadableAction/index.ts");
			const a = Object(i.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairChanged)),
				o = Object(i.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleUserFlairInSubreddit)),
				s = Object(i.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleAssignOwnFlairPermission)),
				r = Object(i.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.saveUserFlairTemplate)),
				c = Object(i.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.deleteUserFlairTemplate)),
				l = Object(i.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.reorderUserFlairTemplates)),
				d = Object(i.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairLoadedAndModalOpened))
		},
		"./src/reddit/components/BadgeCounter/index.m.less": function(e, t, n) {
			e.exports = {
				badgeCounter: "_1-nIsCaWhGBFN-L4ZHnbGp",
				mEmpty: "_3FX9lCQKNdKXkfBiSWCjSb"
			}
		},
		"./src/reddit/components/BadgeCounter/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/prettyPrintNumber/index.ts"),
				r = n("./src/reddit/components/BadgeCounter/index.m.less"),
				c = n.n(r);
			t.a = e => {
				let {
					className: t,
					isActive: n,
					showEmpty: i,
					unreadCount: r
				} = e;
				return n ? a.a.createElement("span", {
					className: Object(o.a)(t, c.a.badgeCounter, {
						[c.a.mEmpty]: i || r < 1
					})
				}, i || r < 1 ? "" : Object(s.b)(r)) : null
			}
		},
		"./src/reddit/components/InboxBanner/Banner.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/controls/Button/index.tsx"),
				r = n("./src/reddit/helpers/trackers/inbox.ts"),
				c = n("./src/reddit/hooks/useTracking.ts"),
				l = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/components/InboxBanner/index.m.less"),
				u = n.n(d);
			t.a = e => {
				let {
					className: t,
					closeButtonText: n,
					closeIcon: i,
					descriptionText: d,
					primaryButtonText: p,
					titleText: m,
					onClose: b,
					onClick: f
				} = e;
				const h = Object(c.a)();
				return a.a.createElement("div", {
					className: Object(o.a)(u.a.banner, t)
				}, a.a.createElement("div", {
					className: u.a.bannerTitleContainer
				}, m && a.a.createElement("h4", {
					className: u.a.bannerTitle
				}, m), i && a.a.createElement(s.t, {
					onClick: e => {
						b && b(e), h(Object(r.p)({
							dnPromptAction: "dismiss"
						}))
					},
					Icon: Object(l.b)("close_fill"),
					className: Object(o.a)(u.a.closeIcon, u.a.closeButton),
					size: s.d.XXS,
					priority: s.c.Plain
				})), d && a.a.createElement("p", {
					className: u.a.bannerDescription
				}, d), a.a.createElement("div", {
					className: u.a.bannerButtonsContainer
				}, p && a.a.createElement(s.t, {
					text: p,
					priority: s.c.Tertiary,
					className: Object(o.a)(u.a.button, u.a.primaryButton),
					size: s.d.XS,
					onClick: e => {
						f && f(e), h(Object(r.p)({
							dnPromptAction: "cta"
						}))
					}
				}), n && a.a.createElement(s.t, {
					text: n,
					onClick: e => {
						b && b(e), h(Object(r.p)({
							dnPromptAction: "refuse"
						}))
					},
					priority: s.c.Plain,
					size: s.d.XS,
					className: Object(o.a)(u.a.button, u.a.closeButton)
				})))
			}
		},
		"./src/reddit/components/InboxBanner/PolicyBanner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/reddit/components/InboxBanner/Banner.tsx"),
				r = n("./src/reddit/helpers/trackers/inbox.ts"),
				c = n("./src/reddit/hooks/useTracking.ts"),
				l = n("./src/reddit/components/InboxBanner/index.m.less"),
				d = n.n(l);
			const u = e => {
				let {
					onClose: t,
					pageType: n
				} = e;
				const a = Object(c.a)(),
					l = i.fbt._("We’ve updated our {userAgreement} and {privacyPolicy}. Take a look, as the changes take effect September 12, 2021.", [i.fbt._param("userAgreement", o.a.createElement("a", {
						className: d.a.underlineLink,
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "User Agreement")), i.fbt._param("privacyPolicy", o.a.createElement("a", {
						className: d.a.underlineLink,
						href: "https://www.redditinc.com/policies/privacy-policy",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "Privacy Policy"))], {
						hk: "3bGC4g"
					});
				return o.a.createElement(s.a, {
					className: d.a.policyBanner,
					titleText: i.fbt._("Reddit’s User Agreement & Privacy Policy", null, {
						hk: "32fxCY"
					}),
					descriptionText: l,
					primaryButtonText: i.fbt._("Ok", null, {
						hk: "1IJxzv"
					}),
					onClick: e => {
						e.stopPropagation(), t(), a(Object(r.g)(n, r.a.Confirm))
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
				wrappedRedditBanner: "_3lPlfNiwLG6b9WE7zxkkU5",
				bannerImage: "_2zetWw7f4W-0OWrUYJHPQ-",
				hotPotatoBanner: "_2oy7Xi4NUleUcHtb8YDZh7"
			}
		},
		"./src/reddit/components/InboxTooltip/Component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return re
			})), n.d(t, "b", (function() {
				return ue
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/lib/notifications/index.ts"),
				r = n("./src/lib/notifications/constants.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/BadgeCounter/index.tsx"),
				u = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				p = n("./node_modules/lodash/omit.js"),
				m = n.n(p),
				b = n("./src/reddit/components/InboxBanner/Banner.tsx"),
				f = n("./src/reddit/components/InboxBanner/index.m.less"),
				h = n.n(f);
			const g = e => {
				let {
					onClose: t,
					onTurnOnBrowserNotifications: n
				} = e;
				return o.a.createElement(b.a, {
					className: h.a.dnPromptBanner,
					titleText: i.fbt._("Don’t miss out on updates — Turn on desktop notifications.", null, {
						hk: "10oNqB"
					}),
					onClose: e => {
						e.stopPropagation(), t()
					},
					closeIcon: !0,
					primaryButtonText: i.fbt._("Turn On", null, {
						hk: "3hywR9"
					}),
					closeButtonText: i.fbt._("No Thanks", null, {
						hk: "2GQOmV"
					}),
					onClick: e => {
						n(), t()
					}
				})
			};
			var _ = n("./node_modules/react-redux/es/index.js"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				y = n("./src/reddit/controls/InternalLink/index.tsx"),
				v = n("./src/reddit/helpers/trackers/hotPotato.ts"),
				O = n("./src/reddit/hooks/useTracking.ts"),
				N = n("./src/reddit/icons/fonts/index.tsx"),
				k = n("./src/reddit/icons/svgs/HotPotato/index.tsx"),
				E = n("./src/reddit/selectors/experiments/hotPotato.ts");
			const C = e => {
				let {
					onClose: t
				} = e;
				const n = Object(_.e)(E.a),
					s = Object(O.a)(),
					r = Object(a.useCallback)(e => {
						t && t(e), s(Object(v.a)())
					}, [t, s]);
				return o.a.createElement("div", {
					className: Object(c.a)(h.a.banner, h.a.hotPotatoBanner)
				}, o.a.createElement(y.a, {
					to: `/r/${n}`,
					className: h.a.bannerContainer,
					onClick: r
				}, o.a.createElement("div", {
					className: h.a.bannerDataContainer
				}, o.a.createElement("div", {
					className: h.a.bannerTitleContainer
				}, o.a.createElement("h4", {
					className: h.a.bannerTitle
				}, i.fbt._("There's a time and r/place for everything", null, {
					hk: "10MnL"
				}))), o.a.createElement("p", {
					className: h.a.bannerDescription
				}, i.fbt._("r/Place is now open. Together we can make something more. Claim your tile and make r/place yours.", null, {
					hk: "2f11Wg"
				}))), o.a.createElement(k.a, {
					className: h.a.bannerImage
				})), o.a.createElement(x.t, {
					onClick: t,
					Icon: Object(N.b)("close_fill"),
					className: h.a.closeButton,
					size: x.d.XXS,
					priority: x.c.Plain
				}))
			};
			var I = n("./src/reddit/components/InboxBanner/PolicyBanner.tsx"),
				j = n("./src/config.ts"),
				w = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				S = n("./src/reddit/routes/wrappedreddit/index.ts");
			const P = {
					background: `url(${j.a.assetPath}/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png)`,
					backgroundSize: "cover"
				},
				B = e => {
					let {
						onClose: t
					} = e;
					return o.a.createElement("div", {
						className: Object(c.a)(h.a.banner, h.a.wrappedRedditBanner),
						style: P
					}, o.a.createElement(y.a, {
						to: S.b,
						className: h.a.bannerContainer,
						onClick: t
					}, o.a.createElement("div", {
						className: h.a.bannerDataContainer
					}, o.a.createElement("div", {
						className: h.a.bannerTitleContainer
					}, o.a.createElement(w.a, {
						className: h.a.bannerLogo
					}), o.a.createElement("h4", {
						className: h.a.bannerTitle
					}, i.fbt._("Reddit Recap", null, {
						hk: "tRxDK"
					}))), o.a.createElement("p", {
						className: h.a.bannerDescription
					}, i.fbt._("It’s that time of the year. Come check out your 2021 highlights on Reddit.", null, {
						hk: "eufBA"
					}))), o.a.createElement("img", {
						alt: i.fbt._("Image Banner for Reddit Recap", null, {
							hk: "1K2v1e"
						}),
						className: h.a.bannerImage,
						src: `${j.a.assetPath}/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png`
					})), o.a.createElement(x.t, {
						onClick: t,
						Icon: Object(N.b)("close_fill"),
						className: Object(c.a)(h.a.closeIcon, h.a.closeButton),
						size: x.d.XXS,
						priority: x.c.Plain
					}))
				};
			var T = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				L = n("./src/reddit/components/ResizeSensor/index.tsx"),
				R = n("./src/reddit/components/InboxTooltip/index.m.less"),
				A = n.n(R);
			const U = 3;
			class D extends o.a.Component {
				constructor() {
					super(...arguments), this.ref = o.a.createRef(), this.handleResize = () => {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						e !== this.props.notificationHeight && this.props.setNotificationHeight(e, this.props.index)
					}
				}
				componentDidMount() {
					if (this.props.index + 1 <= U) {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						this.props.setNotificationHeight(e, this.props.index)
					}
				}
				render() {
					const {
						activeOverflowMenuId: e,
						decreaseSubredditNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: i,
						hideSubredditNotifications: a,
						blockAwarder: s,
						index: r,
						isInboxPostEmbedEnabled: c,
						markNotificationAsRead: l,
						notification: d,
						setActiveOverflowMenuId: u,
						onItemClick: p
					} = this.props, m = r + 1 <= U;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						ref: this.ref,
						className: A.a.notificationResizeWrapper
					}, o.a.createElement(T.a, {
						activeOverflowMenuId: e,
						decreaseSubredditNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: i,
						hideSubredditNotifications: a,
						isInboxPostEmbedEnabled: c,
						isInTooltip: !0,
						markNotificationAsRead: l,
						notification: d,
						setActiveOverflowMenuId: u,
						onItemClick: p,
						blockAwarder: s
					}), !!m && o.a.createElement(L.a, {
						onResize: this.handleResize
					})))
				}
			}
			var F = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				H = n("./src/reddit/helpers/trackers/inbox.ts"),
				W = n("./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/EmptyStateComponent.tsx");

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const M = {},
				V = "",
				G = 0,
				q = "200px",
				K = "250px",
				Q = "270px",
				J = 100,
				Y = .5,
				Z = 5,
				X = 50,
				$ = 55;
			class ee extends o.a.Component {
				constructor() {
					super(...arguments), this.container = o.a.createRef(), this.state = {
						notificationHeights: M,
						currentNotificationCursorIndex: -1
					}, this.resetOverflowMenu = () => {
						this.props.activeOverflowMenuId.length > G && this.props.setActiveOverflowMenuId(V)
					}, this.getContainerHeight = () => {
						const {
							notificationHeights: e
						} = this.state, {
							isDNInboxPromptBannerEnabled: t,
							isInboxPrivacyPolicyBannerEnabled: n,
							isLoggedIn: i
						} = this.props, a = t || n, o = window.innerHeight - X - 2 * $ - (a ? J : 0);
						let s = 0;
						for (const r in e) s += e[r];
						return 0 === s ? a ? K : i ? q : Q : (a && (s += J), o < s && (s = o + (a ? J : 0)), s)
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
						} = this.state, n = t + Z, i = n > e.length ? n : e.length - 1;
						this.setState({
							currentNotificationCursorIndex: i
						})
					}, this.renderNotifications = () => {
						const e = m()(this.props, ["notifications"]),
							{
								notificationHeights: t,
								currentNotificationCursorIndex: n
							} = this.state,
							{
								isInboxInfiniteScrollEnabled: i,
								notifications: a
							} = this.props,
							s = a.length > n + Z;
						return (i && a.length > 0 && s ? a.slice(0, n + 1) : a).map((n, i) => o.a.createElement(D, z({}, e, {
							index: i,
							key: i,
							notification: n,
							notificationHeight: t[i],
							setNotificationHeight: this.setNotificationHeight
						})))
					}, this.loadNotifications = e => {
						const {
							cursor: t,
							fetchNotifications: n,
							isInboxInfiniteScrollEnabled: i,
							notifications: a
						} = this.props;
						if (e.isIntersecting) {
							const e = a.length > this.state.currentNotificationCursorIndex + Z;
							this.props.notifications.length > 0 && i && e ? this.updateCurrentCursorIndex() : t && n({
								after: t,
								first: Z
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
						isInboxPrivacyPolicyBannerEnabled: i,
						isInboxInfiniteScrollEnabled: a,
						isLoggedIn: s,
						isPending: r,
						notifications: c,
						setDesktopNotificationsPromptSeen: l,
						setInboxPrivacyPolicyBannerSeen: d,
						showBrowserNotificationsPermissionSettings: p,
						isWrappedRedditBannerEnabled: m,
						setDesktopNotificationWrappedRedditBannerSeen: b,
						setHotPotatoBannerSeen: f
					} = this.props, h = !(!c || !c.length), _ = this.getContainerHeight(), x = c.length > this.state.currentNotificationCursorIndex + Z, y = i || t || m || n;
					return o.a.createElement("div", {
						className: A.a.notificationList,
						ref: this.container,
						style: h ? {
							height: _,
							maxHeight: _
						} : {
							minHeight: q
						}
					}, y && o.a.createElement("div", {
						className: A.a.notificationBannerContainer
					}, i && o.a.createElement(I.a, {
						onClose: d,
						pageType: H.c.MiniInbox
					}), t && o.a.createElement(g, {
						onTurnOnBrowserNotifications: p,
						onClose: l
					}), m && o.a.createElement(B, {
						onClose: b
					}), n && o.a.createElement(C, {
						onClose: f
					})), !h && r && o.a.createElement(F.a, null), !h && !r && o.a.createElement(W.a, {
						isBannerEnabled: y,
						isLoggedIn: s,
						inTooltip: !0,
						hideTooltip: this.props.onItemClick
					}), h && this.renderNotifications(), a && h && !r && (e || x) && o.a.createElement(u.a, {
						onChange: this.loadNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: Y
					}, o.a.createElement("div", null)))
				}
			}
			var te = n("./src/reddit/constants/localStorage.ts"),
				ne = n("./src/reddit/hooks/useLocalStorage.ts");
			var ie = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts"),
				ae = n("./src/reddit/helpers/localStorage/index.ts");
			var oe = n("./src/reddit/hooks/useInboxPrivacyPolicyBannerSeen.ts");

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const re = [],
				ce = l.a.div("StyledDropdown", A.a),
				le = e => {
					let {
						isLoggedIn: t,
						onMessagesClick: n,
						onBarClick: s,
						markAllAsRead: r,
						messagesBadgeCount: l,
						sendInboxClickSettings: u
					} = e;
					const p = !!l,
						m = Object(a.useCallback)(() => {
							n(), s()
						}, [n, s]),
						b = Object(a.useCallback)(() => {
							u(), s()
						}, [u, s]);
					return o.a.createElement("nav", {
						className: A.a.topNav
					}, o.a.createElement("span", {
						className: A.a.topNavTitle
					}, i.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), t && o.a.createElement("span", {
						className: A.a.topNavLinks
					}, o.a.createElement("span", {
						className: A.a.messagesLinkContainer
					}, o.a.createElement(y.a, {
						className: Object(c.a)(A.a.messagesLink, {
							[A.a.mActive]: p
						}),
						onClick: m,
						to: p ? "/message/unread" : "/message/messages"
					}, i.fbt._("Messages", null, {
						hk: "hulKY"
					}), o.a.createElement(d.a, {
						className: A.a.badgeCount,
						isActive: p,
						unreadCount: l
					}))), o.a.createElement("button", {
						className: A.a.navLink,
						onClick: r
					}, o.a.createElement(N.a, {
						name: "mark_read",
						className: A.a.icon
					})), o.a.createElement(y.a, {
						className: A.a.navLink,
						onClick: b,
						to: "/settings/notifications"
					}, o.a.createElement(N.a, {
						name: "settings",
						className: A.a.icon
					}))))
				},
				de = e => o.a.createElement("div", {
					className: A.a.bottomBar
				}, o.a.createElement(y.a, {
					className: A.a.bottomLink,
					onClick: () => {
						e.sendInboxClickSeeAll(), e.onBarClick()
					},
					to: "/notifications"
				}, i.fbt._("See All", null, {
					hk: "3L3tFc"
				}))),
				ue = e => {
					const t = Object(O.a)(),
						{
							clearMessageTabBadgeCount: n,
							inboxBadgeCount: i,
							isPending: c,
							messagesBadgeCount: l,
							notifications: d,
							hideTooltip: u,
							isHotPotatoEnabled: p,
							isInboxPolicyBannerEnabled: m,
							isLoggedIn: b,
							isPushNotificationsSupported: f,
							isWrappedRedditBannerEnabled: h,
							userId: g
						} = e,
						[_, x] = function(e) {
							const [t, n] = Object(a.useState)(Object(ae.t)(e));
							return [t, Object(a.useCallback)(() => {
								n(!0), Object(ae.Bb)(e)
							}, [])]
						}(g),
						[y, v] = Object(ie.a)(g),
						[N, k] = Object(oe.a)(g),
						[E, C] = function(e) {
							let {
								key: t,
								userId: n
							} = e;
							const [i, a] = Object(ne.a)(t, []);
							return [-1 !== i.indexOf(n), () => {
								a([...i, n])
							}]
						}({
							key: te.b.HOT_POTATO_BANNER_SEEN,
							userId: g
						}),
						I = !(!d || !d.length),
						j = Object(s.a)(),
						w = j === r.a.Closed || j === r.a.Default || j === r.a.Denied,
						S = f && w && !y;
					return o.a.createElement(ce, null, o.a.createElement("div", {
						className: A.a.tooltipContainer
					}, o.a.createElement(le, {
						markAllAsRead: () => {
							e.markAllAsRead(), t(Object(H.i)({
								isMiniInbox: !0
							}))
						},
						messagesBadgeCount: l,
						onMessagesClick: () => {
							t(Object(H.v)({
								badgeCount: i,
								tab: H.f.Messages
							})), t(Object(H.j)()), n()
						},
						sendInboxClickSettings: () => t(Object(H.o)(H.c.MiniInbox)),
						onBarClick: u,
						isLoggedIn: b
					}), o.a.createElement(ee, se({}, e, {
						isPending: c,
						onItemClick: u,
						setDesktopNotificationsPromptSeen: v,
						isDNInboxPromptBannerEnabled: S,
						isInboxPrivacyPolicyBannerEnabled: m && !N,
						setInboxPrivacyPolicyBannerSeen: k,
						isWrappedRedditBannerEnabled: h && !_,
						setDesktopNotificationWrappedRedditBannerSeen: () => {
							x(), t(Object(H.t)())
						},
						isHotPotatoEnabled: p && !E,
						setHotPotatoBannerSeen: C
					})), (I || c) && o.a.createElement(de, {
						sendInboxClickSeeAll: () => t(Object(H.n)()),
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
			var i = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(i.a)({
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
			var i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./src/reddit/components/NotificationUnit/index.m.less"),
				s = n.n(o);
			const r = () => a.a.createElement("li", {
					className: s.a.placeholderWrapper
				}, a.a.createElement("span", {
					className: s.a.placeholderAvatar
				}), a.a.createElement("span", {
					className: s.a.placeholderContent
				})),
				c = () => a.a.createElement("ol", null, a.a.createElement(r, null), a.a.createElement(r, null), a.a.createElement(r, null))
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
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/reddit/controls/Button/index.tsx"),
				r = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				l = n.n(c),
				d = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const p = (e, t, n) => null != n ? n : t ? e : s.c.Plain,
				m = e => {
					let {
						border: t,
						priority: n,
						small: i,
						...a
					} = e;
					return o.a.createElement(s.t, u({}, a, {
						priority: p(s.c.Primary, t, n),
						className: Object(d.a)(a.className, l.a.BaseButton),
						size: i ? s.d.S : s.d.M
					}))
				},
				b = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
					className: l.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? i.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : i.fbt._("Following", null, {
					hk: "1wQlVR"
				})), o.a.createElement("span", {
					className: l.a.UnsubscribeButtonHover
				}, "subreddit" === e ? i.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : i.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				f = e => {
					let {
						buttonType: t,
						border: n,
						priority: i,
						small: a,
						...r
					} = e;
					return o.a.createElement(s.t, u({}, r, {
						priority: p(s.c.Secondary, n, i),
						className: Object(d.a)(r.className, l.a.BaseButton),
						size: a ? s.d.S : s.d.M,
						text: b(t)
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
						priority: i,
						small: a = !1,
						isFullWidth: s = !1,
						style: c
					} = this.props, l = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: i,
						small: a,
						isFullWidth: s,
						style: c
					};
					return this.props.userIsSubscriber ? o.a.createElement(f, u({}, l, {
						buttonType: this.props.identifier.type
					})) : o.a.createElement(m, u({}, l, {
						id: n
					}), this.props.children, Object(r.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				a = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(a.a)(Object(i.c)(o.a))
		},
		"./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			var i = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json"),
				o = n("./src/redditGQL/operations/UpdateNotificationPreferences.json");
			const s = (e, t) => Object(i.a)(e, {
					...a,
					variables: t
				}),
				r = (e, t) => Object(i.a)(e, {
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
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			var i = n("./src/reddit/constants/tracking.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
					...Object(a.o)(e),
					action: i.c.CLICK,
					noun: "preview",
					source: "hot_potato"
				}),
				s = () => e => ({
					...Object(a.o)(e),
					action: i.c.CLICK,
					noun: "hot_potato",
					source: "nav"
				}),
				r = () => e => ({
					...Object(a.o)(e),
					action: i.c.CLICK,
					noun: "hot_potato",
					source: "inbox"
				})
		},
		"./src/reddit/helpers/trackers/inbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "x", (function() {
				return p
			})), n.d(t, "u", (function() {
				return m
			})), n.d(t, "r", (function() {
				return b
			})), n.d(t, "s", (function() {
				return f
			})), n.d(t, "p", (function() {
				return h
			})), n.d(t, "k", (function() {
				return g
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "v", (function() {
				return x
			})), n.d(t, "w", (function() {
				return y
			})), n.d(t, "z", (function() {
				return v
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "y", (function() {
				return N
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "A", (function() {
				return C
			})), n.d(t, "q", (function() {
				return I
			})), n.d(t, "o", (function() {
				return j
			})), n.d(t, "n", (function() {
				return w
			})), n.d(t, "j", (function() {
				return S
			})), n.d(t, "i", (function() {
				return P
			})), n.d(t, "g", (function() {
				return B
			})), n.d(t, "t", (function() {
				return T
			}));
			var i, a, o, s, r, c, l = n("./src/reddit/constants/tracking.ts"),
				d = n("./src/reddit/selectors/telemetry.ts"),
				u = n("./src/telemetry/index.ts");
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(i || (i = {})),
			function(e) {
				e.HideNotifications = "hide_notification", e.HideSubreddit = "hide_subreddit", e.HideUpdates = "hide_updates", e.BlockAwarder = "block_awarder", e.DecreaseSubredditUpdates = "disable_frequent"
			}(a || (a = {})),
			function(e) {
				e.MiniInbox = "mini_inbox", e.Inbox = "inbox"
			}(o || (o = {})),
			function(e) {
				e.Inbox = "inbox", e.Nav = "nav", e.Settings = "notification_app_settings"
			}(s || (s = {})),
			function(e) {
				e[e.FIRST = 1] = "FIRST", e[e.SECOND = 2] = "SECOND"
			}(r || (r = {})),
			function(e) {
				e.Confirm = "confirm"
			}(c || (c = {}));
			const p = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: i,
						type: a
					} = e;
					return e => ({
						...d.o(e),
						action: l.c.VIEW,
						noun: "inbox_notification",
						source: "inbox",
						inbox: {
							id: t,
							isClicked: n,
							isViewed: i
						},
						notification: {
							type: a
						}
					})
				},
				m = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: i,
						type: a
					} = e;
					return e => ({
						...d.o(e),
						action: l.c.VIEW,
						noun: "notification",
						source: "in_app_notification",
						inbox: {
							id: t,
							isClicked: n,
							isViewed: i
						},
						notification: {
							type: a
						}
					})
				},
				b = () => e => ({
					...d.o(e),
					action: l.c.RECEIVE,
					noun: "notification",
					source: "in_app_notification"
				}),
				f = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: i,
						type: a,
						awardId: o
					} = e;
					return e => {
						Object(u.a)({
							...d.o(e),
							action: "receive",
							noun: "inbox_notification",
							source: s.Inbox,
							inbox: {
								id: t,
								isClicked: n,
								isViewed: i
							},
							notification: {
								type: a
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
						...d.o(e),
						action: l.c.CLICK,
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
						isViewed: i,
						type: a,
						awardId: o,
						position: s,
						postId: r,
						subredditId: c
					} = e;
					return e => ({
						...d.o(e),
						action: l.c.CLICK,
						noun: "inbox_notification",
						source: "inbox",
						inbox: {
							id: t,
							isClicked: n,
							isViewed: i
						},
						notification: {
							type: a
						},
						goldPurchase: {
							awardId: o
						},
						actionInfo: {
							position: s
						},
						subreddit: c ? {
							id: c
						} : null,
						post: r ? {
							id: r
						} : null
					})
				},
				_ = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: i,
						type: a,
						awardId: o,
						position: s,
						postId: r,
						subredditId: c
					} = e;
					return e => ({
						...d.o(e),
						action: l.c.CLICK,
						noun: "notification",
						source: "in_app_notification",
						inbox: {
							id: t,
							isClicked: n,
							isViewed: i
						},
						notification: {
							type: a
						},
						goldPurchase: {
							awardId: o
						},
						actionInfo: {
							position: s
						},
						subreddit: c ? {
							id: c
						} : null,
						post: r ? {
							id: r
						} : null
					})
				},
				x = e => {
					let {
						badgeCount: t,
						tab: n
					} = e;
					return e => ({
						...d.o(e),
						action: l.c.VIEW,
						noun: "inbox",
						source: s.Inbox,
						inbox: {
							badgeCount: t,
							tab: n
						}
					})
				},
				y = e => {
					let {
						badgeCount: t,
						tab: n
					} = e;
					return e => ({
						...d.o(e),
						action: l.c.VIEW,
						noun: "mini_inbox",
						source: s.Inbox,
						inbox: {
							badgeCount: t,
							tab: i.Activity
						}
					})
				},
				v = e => {
					let {
						badgeCount: t
					} = e;
					return e => ({
						...d.o(e),
						action: l.c.CLICK,
						noun: "inbox",
						source: s.Nav,
						inbox: {
							badgeCount: t
						}
					})
				},
				O = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: i,
						type: a,
						awardId: o
					} = e;
					return e => ({
						...d.o(e),
						action: l.c.CLICK,
						noun: "inbox_notification_overflow",
						source: s.Inbox,
						inbox: {
							id: t,
							isClicked: n,
							isViewed: i
						},
						notification: {
							type: a
						},
						goldPurchase: {
							awardId: o
						}
					})
				},
				N = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: i,
						type: a
					} = e;
					return e => ({
						...d.o(e),
						action: l.c.VIEW,
						noun: "inbox_notification_overflow",
						source: s.Inbox,
						inbox: {
							id: t,
							isClicked: n,
							isViewed: i
						},
						notification: {
							type: a
						}
					})
				};
			var k;
			! function(e) {
				e.Cats = "cats", e.Memes = "memes", e.Karma = "karma_free_subs", e.PN_perms = "pn_perms", e.Email_perms = "email_perms"
			}(k || (k = {}));
			const E = e => {
					let {
						actionInfoType: t,
						id: n,
						isClicked: i,
						isViewed: a,
						type: o
					} = e;
					return e => ({
						...d.o(e),
						action: l.c.CLICK,
						noun: "overflow_option",
						source: s.Inbox,
						inbox: {
							id: n,
							isClicked: i,
							isViewed: a
						},
						notification: {
							type: o
						},
						actionInfo: {
							...d.d(e),
							type: t
						}
					})
				},
				C = e => {
					let {
						actionInfoType: t,
						id: n,
						isClicked: i,
						isViewed: a,
						type: o
					} = e;
					return e => ({
						...d.o(e),
						action: l.c.UNDO,
						noun: "overflow_option",
						source: s.Inbox,
						inbox: {
							id: n,
							isClicked: i,
							isViewed: a
						},
						notification: {
							type: o
						},
						actionInfo: {
							...d.d(e),
							type: t
						}
					})
				},
				I = e => {
					let {
						actionInfoType: t
					} = e;
					return e => ({
						...d.o(e),
						action: l.c.CLICK,
						noun: "empty_state_cta",
						source: s.Inbox,
						actionInfo: {
							...d.d(e),
							type: t
						}
					})
				},
				j = e => t => ({
					...d.o(t),
					action: l.c.CLICK,
					noun: "notification_app_settings",
					source: s.Inbox,
					actionInfo: {
						...d.d(t),
						pageType: e
					}
				}),
				w = () => e => ({
					...d.o(e),
					action: l.c.CLICK,
					noun: "see_all",
					source: s.Inbox,
					actionInfo: {
						...d.d(e),
						pageType: o.MiniInbox
					}
				}),
				S = () => e => ({
					...d.o(e),
					action: l.c.CLICK,
					noun: "messages",
					source: s.Inbox
				}),
				P = e => {
					let {
						isMiniInbox: t
					} = e;
					return e => ({
						...d.o(e),
						action: l.c.CLICK,
						noun: "mark_all_as_read",
						source: s.Inbox,
						actionInfo: t ? {
							...d.d(e),
							pageType: o.MiniInbox
						} : {}
					})
				},
				B = (e, t) => n => ({
					...d.o(n),
					action: l.c.CLICK,
					noun: "policy_banner",
					source: s.Inbox,
					actionInfo: {
						...d.d(n),
						pageType: e,
						type: t
					}
				}),
				T = () => e => ({
					...d.o(e),
					action: l.c.CLICK,
					noun: "inbox_banner",
					source: s.Inbox,
					actionInfo: {
						...d.d(e),
						type: "2021Recap"
					}
				})
		},
		"./src/reddit/helpers/trackers/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "m", (function() {
				return N
			}));
			var i = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/telemetry/index.ts"),
				o = n("./src/telemetry/models/Event.ts");
			var s;
			! function(e) {
				e.FREQUENT = "frequent", e.LOW = "low", e.OFF = "off"
			}(s || (s = {}));
			const r = e => ({
					...i.o(e),
					noun: "desktop_notification_permissions"
				}),
				c = e => e ? "enable" : "disable",
				l = e => {
					Object(a.a)({
						...r(e),
						action: o.c.View,
						source: "popup"
					})
				},
				d = e => {
					Object(a.a)({
						...r(e),
						action: o.c.Allow,
						source: "popup"
					})
				},
				u = e => {
					Object(a.a)({
						...r(e),
						action: o.c.Block,
						source: "popup"
					})
				},
				p = e => {
					Object(a.a)({
						...r(e),
						action: o.c.Close,
						source: "popup"
					})
				},
				m = (e, t, n) => ({
					...i.o(e),
					actionInfo: i.d(e, {
						success: t,
						reason: n
					}),
					noun: "push_token"
				}),
				b = e => {
					Object(a.a)({
						...m(e, !0),
						action: o.c.Request,
						source: "notification"
					})
				},
				f = e => {
					Object(a.a)({
						...m(e, !0),
						action: o.c.Register,
						source: "notification"
					})
				},
				h = (e, t) => {
					Object(a.a)({
						...m(e, !1, t),
						action: o.c.Bail,
						source: "notification"
					})
				},
				g = e => ({
					...i.o(e),
					noun: "push_notification"
				}),
				_ = e => ({
					...g(e),
					notification: i.E(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				x = (e, t) => n => ({
					...i.o(n),
					action: c(e),
					email: {
						type: t
					},
					noun: "email",
					source: "email_app_settings"
				}),
				y = (e, t) => n => ({
					...i.o(n),
					action: c(e),
					notification: {
						type: t
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				v = e => t => ({
					...i.o(t),
					source: "email_app_settings",
					action: c(e),
					noun: "email",
					notification: {
						type: "all"
					}
				}),
				O = (e, t, n) => a => ({
					...i.o(a),
					action: "set_frequency",
					noun: n,
					source: "community_notifications",
					subreddit: {
						id: e,
						name: t.toLowerCase()
					}
				}),
				N = () => e => ({
					...i.o(e),
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
			var i = n("./node_modules/react/index.js"),
				a = n("./src/reddit/helpers/localStorage/index.ts");

			function o(e) {
				const [t, n] = Object(i.useState)(Object(a.s)(e));
				return [t, Object(i.useCallback)(() => {
					n(!0), Object(a.ob)(e)
				}, [])]
			}
		},
		"./src/reddit/hooks/useInboxPrivacyPolicyBannerSeen.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var i = n("./node_modules/react/index.js"),
				a = n("./src/reddit/helpers/localStorage/index.ts");

			function o(e) {
				const [t, n] = Object(i.useState)(() => Object(a.v)(e));
				return [t, Object(i.useCallback)(() => {
					n(!0), Object(a.zb)(e)
				}, [e])]
			}
		},
		"./src/reddit/icons/svgs/HotPotato/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react/index.js"),
				a = n.n(i);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 32 32",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", {
				fill: "#ff4500"
			}, a.a.createElement("path", {
				d: "m6.4 0h-6.4v6.4h6.4z"
			}), a.a.createElement("path", {
				d: "m12.8 0h-6.4v6.4h6.4z"
			}), a.a.createElement("path", {
				d: "m19.2 0h-6.4v6.4h6.4z"
			}), a.a.createElement("path", {
				d: "m25.6 0h-6.4v6.4h6.4z"
			}), a.a.createElement("path", {
				d: "m32 6.4h-6.4v6.4h6.4z"
			}), a.a.createElement("path", {
				d: "m32 12.8h-6.4v6.4h6.4z"
			}), a.a.createElement("path", {
				d: "m32 19.2h-6.4v6.4h6.4z"
			}), a.a.createElement("path", {
				d: "m32 25.6h-6.4v6.4h6.4z"
			}), a.a.createElement("path", {
				d: "m19.2 25.6h-6.4v6.4h6.4z"
			}), a.a.createElement("path", {
				d: "m25.6 25.6h-6.4v6.4h6.4z"
			}), a.a.createElement("path", {
				d: "m6.4 25.6h-6.4v6.4h6.4z"
			})), a.a.createElement("path", {
				d: "m19.2 12.8h-6.4v6.4h6.4z",
				fill: "#000"
			}), a.a.createElement("g", {
				fill: "#ff4500"
			}, a.a.createElement("path", {
				d: "m6.4 19.2h-6.4v6.4h6.4z"
			}), a.a.createElement("path", {
				d: "m6.4 12.8h-6.4v6.4h6.4z"
			}), a.a.createElement("path", {
				d: "m6.4 6.4h-6.4v6.4h6.4z"
			})), a.a.createElement("path", {
				d: "m19.2 6.4h-12.8v25.6h6.4v-6.4h12.8v-19.2zm0 12.8h-6.4v-6.4h6.4z",
				fill: "#fff"
			}))
		},
		"./src/reddit/icons/svgs/Snoo/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./src/reddit/constants/colors.ts");
			t.a = e => a.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				className: e.className
			}, a.a.createElement("g", null, a.a.createElement("circle", {
				fill: o.a.snoo,
				cx: "10",
				cy: "10",
				r: "10"
			}), a.a.createElement("path", {
				fill: "#FFF",
				d: "M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
			})))
		},
		"./src/reddit/models/NotificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			var i;
			n.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.Email = "EMAIL", e.Push = "PUSH", e.CommunityAlerts = "COMMUNITY_ALERTS", e.ModCommunityAlerts = "MOD_COMMUNITY_ALERTS"
				}(i || (i = {}))
		},
		"./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/EmptyStateComponent.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/helpers/trackers/inbox.ts"),
				r = n("./src/reddit/hooks/useTracking.ts"),
				c = n("./node_modules/fbt/lib/FbtPublic.js"),
				l = n("./src/config.ts"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/index.m.less"),
				m = n.n(p);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			var f = e => {
					let {
						inTooltip: t,
						onBtnClick: n
					} = e;
					const i = {
						to: "/r/cats/top/",
						kind: u.b.InternalLink
					};
					return a.a.createElement("div", {
						className: Object(d.a)(m.a.emptyState, m.a.karmaView, {
							[m.a.inNotificationsPage]: !t
						})
					}, a.a.createElement("div", {
						className: Object(d.a)(m.a.catsImageWrapper, {
							[m.a.inTooltip]: t
						})
					}, a.a.createElement("img", {
						src: `${l.a.assetPath}/img/notifications/bottom_cat.png`,
						alt: c.fbt._("cats picture", null, {
							hk: "27dboq"
						}),
						className: Object(d.a)(m.a.cat, m.a.bottom)
					}), a.a.createElement("img", {
						src: `${l.a.assetPath}/img/notifications/top_cat.png`,
						alt: c.fbt._("cats picture", null, {
							hk: "27dboq"
						}),
						className: Object(d.a)(m.a.cat, m.a.top)
					}), a.a.createElement("img", {
						src: `${l.a.assetPath}/img/notifications/cloud.png`,
						alt: c.fbt._("cats picture", null, {
							hk: "45gHNS"
						}),
						className: m.a.cloud
					}), a.a.createElement("img", {
						src: `${l.a.assetPath}/img/notifications/yummy.png`,
						alt: c.fbt._("cats picture", null, {
							hk: "27dboq"
						}),
						className: m.a.yummy
					})), a.a.createElement("h1", {
						className: Object(d.a)(m.a.emptyTitle, {
							[m.a.inTooltip]: t
						})
					}, c.fbt._("You don’t have any activity yet", null, {
						hk: "2GNaV0"
					})), a.a.createElement("p", {
						className: m.a.emptyDescription
					}, c.fbt._("That’s ok, maybe you just need the right inspiration. Have you had your daily cat fix yet today?", null, {
						hk: "3tmgZE"
					})), a.a.createElement(u.t, b({
						className: m.a.emptyStateButton,
						onClick: n
					}, i), c.fbt._("See today’s Top Cats in r/cats", null, {
						hk: "Um68y"
					})))
				},
				h = n("./src/lib/lessComponent.tsx"),
				g = n("./src/reddit/actions/login.ts");
			var _ = e => a.a.createElement("svg", {
				className: e.className,
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 21"
			}, a.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M18.4 14.788c-.662 0-1.2-.537-1.2-1.202l-.012-5.998C17.188 3.625 13.963.4 10 .4 6.037.4 2.811 3.625 2.811 7.586l-.01 6.002c0 .663-.54 1.2-1.2 1.2a1.199 1.199 0 100 2.4h16.8a1.2 1.2 0 100-2.4zm-9.6 3.6H7.6c0 1.324 1.076 2.4 2.4 2.4 1.323 0 2.4-1.076 2.4-2.4H8.8zm-3.6-4.797c0 .422-.087.822-.22 1.197H15.02a3.554 3.554 0 01-.22-1.2l-.013-5.997A4.794 4.794 0 0010 2.8a4.794 4.794 0 00-4.789 4.787l-.01 6.003z"
			}));
			const x = h.a.wrapped(_, "BellOutline", m.a),
				y = e => {
					let {
						isBannerEnabled: t,
						isLoggedIn: n
					} = e;
					const i = Object(o.d)();
					return a.a.createElement("div", {
						className: Object(d.a)(m.a.emptyState, {
							[m.a.emptyStateWithBanner]: Boolean(t),
							[m.a.loggedOutState]: !n
						})
					}, a.a.createElement(x, null), a.a.createElement("h1", {
						className: m.a.emptyTitle
					}, c.fbt._("Be the first to know", null, {
						hk: "2mNJO0"
					})), a.a.createElement("p", {
						className: m.a.emptyDescription
					}, c.fbt._("This is where you get updates on your activity and recommendations", null, {
						hk: "27V2PG"
					})), !n && a.a.createElement("div", {
						className: m.a.emptyStateLoggedOutContainer
					}, a.a.createElement(u.j, {
						onClick: () => i(Object(g.i)())
					}, c.fbt._("Log In", null, {
						hk: "ZR3pC"
					})), a.a.createElement("span", {
						className: m.a.emptyStateDivider
					}), a.a.createElement(u.j, {
						onClick: () => i(Object(g.j)())
					}, c.fbt._("Sign Up", null, {
						hk: "3Jd0SI"
					}))))
				};
			var v = n("./src/reddit/controls/InternalLink/index.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const N = ["r/somethingimade", "r/CasualConversation", "r/DoesAnybodyElse", "r/Old_Recipes"][Math.floor(100 * Math.random()) % 4];
			var k = e => {
				let {
					inTooltip: t,
					isPopular: n,
					onBtnClick: i
				} = e;
				const o = n ? "r/popular" : N,
					s = `/${o}`,
					r = {
						to: s,
						kind: u.b.InternalLink
					},
					p = a.a.createElement(v.a, {
						to: s,
						target: "_blank",
						rel: "noopener noreferrer",
						className: m.a.subredditLinkR,
						onClick: i
					}, o);
				return a.a.createElement("div", {
					className: Object(d.a)(m.a.emptyState, m.a.karmaView, {
						[m.a.inNotificationsPage]: !t
					})
				}, a.a.createElement("img", {
					src: `${l.a.assetPath}/img/wrappedreddit/default_avatar.png`,
					alt: c.fbt._("default user avatar", null, {
						hk: "1VMTKf"
					}),
					className: Object(d.a)(m.a.avatarImage, {
						[m.a.inTooltip]: t
					})
				}), a.a.createElement("h1", {
					className: Object(d.a)(m.a.emptyTitle, {
						[m.a.inTooltip]: t
					})
				}, c.fbt._("You don’t have any activity yet", null, {
					hk: "2hf6yn"
				})), a.a.createElement("p", {
					className: m.a.emptyDescription
				}, n ? c.fbt._("That’s ok, maybe you just need the right inspiration. Try browsing {Link: to r/popular}, for new communities to join.", [c.fbt._param("Link: to r/popular", p)], {
					hk: "VSBWM"
				}) : c.fbt._("That’s ok, maybe you just need the right inspiration. Try posting in {Link: to popular subreddit} , a popular community for discussion.", [c.fbt._param("Link: to popular subreddit", p)], {
					hk: "1WOK4T"
				})), a.a.createElement(u.t, O({
					className: m.a.emptyStateButton,
					onClick: i,
					text: `Visit ${o}`
				}, r)))
			};

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const C = "/img/notifications/star.png";
			var I = e => {
					let {
						inTooltip: t,
						onBtnClick: n
					} = e;
					const i = {
						to: "/r/memes/top/",
						kind: u.b.InternalLink
					};
					return a.a.createElement("div", {
						className: Object(d.a)(m.a.emptyState, m.a.karmaView, {
							[m.a.inNotificationsPage]: !t
						})
					}, a.a.createElement("div", {
						className: Object(d.a)(m.a.memesImageWrapper, {
							[m.a.inTooltip]: t
						})
					}, a.a.createElement("img", {
						src: `${l.a.assetPath}/img/notifications/shrek.png`,
						alt: c.fbt._("memes picture", null, {
							hk: "3e3S9E"
						}),
						className: m.a.shrek
					}), a.a.createElement("img", {
						src: `${l.a.assetPath}${C}`,
						alt: c.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(d.a)(m.a.star, m.a.inBottom)
					}), a.a.createElement("img", {
						src: `${l.a.assetPath}${C}`,
						alt: c.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(d.a)(m.a.star, m.a.inCenter)
					}), a.a.createElement("img", {
						src: `${l.a.assetPath}${C}`,
						alt: c.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(d.a)(m.a.star, m.a.inTop)
					})), a.a.createElement("h1", {
						className: Object(d.a)(m.a.emptyTitle, {
							[m.a.inTooltip]: t
						})
					}, c.fbt._("You don’t have any activity yet", null, {
						hk: "2GNaV0"
					})), a.a.createElement("p", {
						className: m.a.emptyDescription
					}, c.fbt._("That’s ok, maybe you just need the right inspiration. Let’s get some more lolz in your life.", null, {
						hk: "10HMFI"
					})), a.a.createElement(u.t, E({
						className: m.a.emptyStateButton,
						onClick: n
					}, i), c.fbt._("See today’s Top Memes in r/Memes", null, {
						hk: "42zwJz"
					})))
				},
				j = n("./src/lib/notifications/index.ts"),
				w = n("./src/lib/notifications/constants.ts"),
				S = n("./src/redditGQL/types.ts"),
				P = n("./src/reddit/actions/modal.ts"),
				B = n("./src/reddit/actions/notifications/index.ts"),
				T = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				L = n("./src/reddit/actions/toaster.ts"),
				R = n("./src/reddit/components/Settings/modalIds.ts"),
				A = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				U = n("./src/reddit/models/Toast/index.ts"),
				D = n("./src/reddit/selectors/notificationPrefs.ts"),
				F = n("./src/reddit/selectors/user.ts");

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const W = [S.h.PrivateMessage, S.h.ChatMessage, S.h.ChatRequest, S.h.UsernameMention, S.h.PostReply, S.h.UpvotePost, S.h.UpvoteComment, S.h.CommentReply, S.h.ThreadReplies, S.h.TopLevelComment, S.h.NewPostActivity, S.h.UserNewFollower, S.h.PostFlairAdded, S.h.UserFlairAdded, S.h.NewPinnedPost, S.h.AwardReceived, S.h.PostFollow, S.h.TalkLive, S.h.CommentFollow, S.h.LifecyclePostSuggestions, S.h.BroadcastRecommendation, S.h.SubredditRecommendation, S.h.RedditLore, S.h.OneOff, S.h.CakeDay, S.h.ModeratedSrEngagement];
			var z;
			! function(e) {
				e[e.TURN_ON_PN = 0] = "TURN_ON_PN", e[e.TURN_ON_PN_APP = 1] = "TURN_ON_PN_APP", e[e.VERIFY_EMAIL = 2] = "VERIFY_EMAIL", e[e.TURN_ON_DAYLY_DIGEST = 3] = "TURN_ON_DAYLY_DIGEST", e[e.DONE = 4] = "DONE"
			}(z || (z = {}));
			var M = e => {
					let {
						inTooltip: t,
						isBannerEnabled: n,
						isLoggedIn: r,
						onBtnClick: p,
						hideTooltip: b
					} = e;
					const f = Object(o.d)(),
						h = Object(o.e)(F.n),
						g = Object(o.e)(F.D),
						_ = Object(i.useRef)(h),
						[x, v] = Object(i.useState)(z.TURN_ON_PN),
						O = Object(o.e)(e => e.user.accountSettings.changeEmail.api.pending),
						N = Object(i.useCallback)(() => {
							f(async (e, t) => {
								var n, i;
								let a = Object(F.eb)(t());
								a.allIds.length || await e(Object(T.a)(A.a.Email));
								const o = null === (i = null === (n = (a = Object(F.eb)(t())).byId) || void 0 === n ? void 0 : n.EMAIL_DIGEST) || void 0 === i ? void 0 : i.isEnabled;
								v(o ? z.DONE : z.TURN_ON_DAYLY_DIGEST)
							})
						}, [f]),
						k = Object(i.useCallback)(() => {
							g ? N() : v(z.VERIFY_EMAIL)
						}, [g, N]),
						E = Object(i.useCallback)(() => {
							f(async (e, t) => {
								const n = t();
								Object(F.gb)(n).allIds.length || await e(Object(T.a)(A.a.Push)), Object(D.c)(t(), W) ? v(z.TURN_ON_PN_APP) : k()
							})
						}, [f, k]),
						C = Object(i.useCallback)(() => {
							(() => Object(j.a)() === w.a.Granted)() ? E(): v(z.TURN_ON_PN)
						}, [E]),
						I = Object(i.useCallback)(() => {
							p(s.b.Email_perms)(), t && b && b(), f(Object(P.h)(R.a))
						}, [f, p, t, b]);
					if (Object(i.useEffect)(() => {
							C()
						}, [C]), Object(i.useEffect)(() => {
							if (h !== _.current && x === z.VERIFY_EMAIL) {
								const e = Object(L.e)(c.fbt._("Email successfully updated!", null, {
									hk: "3iPlUp"
								}), U.b.SuccessCommunityGreen);
								f(Object(L.f)(e)), N()
							}
						}, [h, x, N]), Object(i.useEffect)(() => {
							O && f(Object(P.g)(R.a))
						}, [O, f]), x === z.DONE) return a.a.createElement(y, {
						isLoggedIn: r,
						isBannerEnabled: n
					});
					const S = {
							to: "/settings/notifications",
							kind: u.b.InternalLink,
							onClick: x === z.TURN_ON_PN_APP ? p(s.b.PN_perms) : p(s.b.Email_perms)
						},
						M = {
							onClick: x === z.TURN_ON_PN ? async () => {
								p(s.b.PN_perms)(), t && b && b(), await f(Object(B.requestBrowserNotificationPermissionPromptByUser)(R.f)), C()
							} : I
						},
						V = x === z.TURN_ON_PN || x === z.TURN_ON_PN_APP,
						G = x === z.TURN_ON_PN_APP || x === z.TURN_ON_DAYLY_DIGEST;
					return a.a.createElement("div", {
						className: Object(d.a)(m.a.emptyState, m.a.karmaView, {
							[m.a.inNotificationsPage]: !t
						})
					}, a.a.createElement("img", {
						src: `${l.a.assetPath}/img/wrappedreddit/default_avatar.png`,
						alt: c.fbt._("default user avatar", null, {
							hk: "1VMTKf"
						}),
						className: Object(d.a)(m.a.avatarImage, {
							[m.a.inTooltip]: t
						})
					}), a.a.createElement("h1", {
						className: Object(d.a)(m.a.emptyTitle, {
							[m.a.inTooltip]: t
						})
					}, V ? c.fbt._("Turn on notifications", null, {
						hk: "3qFpFu"
					}) : c.fbt._("Turn on email digest", null, {
						hk: "obBF8"
					})), a.a.createElement("p", {
						className: m.a.emptyDescription
					}, V ? c.fbt._("Stay in the loop on content from communities you love right on your phone.", null, {
						hk: "1gwnbO"
					}) : c.fbt._("Stay in the loop on content from communities you love right on your email inbox.", null, {
						hk: "1rs4kD"
					})), a.a.createElement(u.t, H({
						className: m.a.emptyStateButton
					}, G ? S : M, {
						text: c.fbt._("OK", null, {
							hk: "rhf0"
						})
					})))
				},
				V = n("./src/reddit/selectors/experiments/notifications.ts");
			t.a = e => {
				let {
					isBannerEnabled: t,
					isLoggedIn: n,
					inTooltip: i,
					hideTooltip: c
				} = e;
				const l = Object(r.a)(),
					d = e => () => l(Object(s.q)({
						actionInfoType: e
					})),
					u = Object(o.e)(V.b),
					p = Object(o.e)(V.c),
					m = Object(o.e)(V.d),
					b = Object(o.e)(V.a),
					h = Object(o.e)(V.e);
				return u || h ? a.a.createElement(k, {
					inTooltip: i,
					isPopular: h,
					onBtnClick: d(s.b.Karma)
				}) : p ? a.a.createElement(I, {
					inTooltip: i,
					onBtnClick: d(s.b.Memes)
				}) : m ? a.a.createElement(M, {
					isBannerEnabled: t,
					isLoggedIn: n,
					inTooltip: i,
					onBtnClick: d,
					hideTooltip: c
				}) : b ? a.a.createElement(f, {
					inTooltip: i,
					onBtnClick: d(s.b.Cats)
				}) : a.a.createElement(y, {
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
		"./src/reddit/routes/wrappedreddit/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			var i = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/wrappedReddit.ts");
			const s = "/RedditRecap2021",
				r = "https://i.redd.it/8yb4biw7bf481.png",
				c = {
					action: o.a,
					chunk: a.s.WRAPPED_REDDIT,
					component: Object(i.a)({
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
						name: a.Nb.WRAPPED_REDDIT
					},
					path: s
				};
			t.c = c
		},
		"./src/reddit/selectors/bannedUser.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return r
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "a", (function() {
				return b
			}));
			var i = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/components/InboxTooltip/Component.tsx"),
				o = n("./src/reddit/models/SubredditModeration/index.ts"),
				s = n("./src/reddit/selectors/user.ts");
			const r = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.features.banned.models[n]
				},
				c = (e, t) => {
					let {
						subredditId: n,
						username: i
					} = t;
					const a = Object(s.yb)(e, {
						userName: i
					});
					if (!a) return;
					const o = r(e, {
						subredditId: n
					});
					return o ? o[a.id] : void 0
				},
				l = Object(i.a)((e, t) => {
					let {
						subredditId: n
					} = t;
					const i = e.features.banned.userOrder[n];
					return i ? i.map(t => e.features.banned.models[n][t]) : a.a
				}),
				d = (e, t) => {
					let {
						subredditId: n
					} = t;
					const i = Object(o.e)(n);
					return e.features.banned.api.pending[i]
				},
				u = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.features.banned.loadMore[n]
				},
				p = e => e.features.banned.search.api.pending,
				m = e => e.features.banned.search.result,
				b = e => e.features.banned.inContext
		},
		"./src/reddit/selectors/experiments/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "f", (function() {
				return d
			}));
			var i = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: i.qb
				}) === i.pd.Karma,
				s = e => Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: i.qb
				}) === i.pd.Memes,
				r = e => Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: i.qb
				}) === i.pd.PnEmail,
				c = e => Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: i.qb
				}) === i.pd.Cats,
				l = e => Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: i.qb
				}) === i.pd.Popular,
				d = e => l(e) || c(e) || r(e) || s(e) || o(e)
		},
		"./src/reddit/selectors/notificationPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "g", (function() {
				return o
			})), n.d(t, "f", (function() {
				return s
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			}));
			const i = e => e.user.notificationPrefs.api.getPreferences.loaded,
				a = e => e.user.notificationPrefs.api.getPreferences.pending,
				o = e => e.user.notificationPrefs.api.setPreferences.pending,
				s = e => e.user.notificationPrefs.preferences,
				r = e => e.user.notificationPrefs.isNotificationPromptVisible,
				c = (e, t) => {
					var n, i;
					const a = (e => e.user.notificationPrefs.pushSettingsLayout)(e),
						o = null === (n = null == a ? void 0 : a.rows) || void 0 === n ? void 0 : n.byId;
					return o && (null === (i = o[t]) || void 0 === i ? void 0 : i.isEnabled)
				},
				l = (e, t) => !t.some(t => c(e, t))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard~Reddit.ff9b9d7ca84d6b356ca7.js.map