// https://www.redditstatic.com/desktop2x/AuthorHovercard~Reddit.53f74405db87efaac8c4.js
// Retrieved at 4/5/2022, 11:30:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard~Reddit"], {
		"./src/lib/browser/isIncognito.ts": function(e, t, n) {
			"use strict";
			var i = n("./src/lib/constants/index.ts");
			const o = 120 * i.hb;
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
						return !e || e <= o
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
				o = n("./src/lib/getParsedUserAgent/index.ts"),
				a = n("./src/lib/localStorageAvailable/index.ts"),
				s = n("./src/lib/notifications/constants.ts"),
				r = n("./src/lib/notifications/featureFlags.ts");
			n("./src/lib/serviceWorker/index.ts");
			const c = () => {
					if (Object(r.a)() !== s.c.NotificationsSupported) return s.a.Unsupported;
					const e = Object(a.a)() && localStorage.getItem(s.f) === s.g;
					return "granted" === Notification.permission ? s.a.Granted : "denied" === Notification.permission ? s.a.Denied : e ? s.a.Closed : s.a.Default
				},
				l = () => !!Object(a.a)() && (localStorage.removeItem(s.f), !0),
				d = async (e, t, n, r, l, d) => {
					const u = c();
					if (u === s.a.Unsupported) return void d();
					if (Object(a.a)()) {
						const t = localStorage.getItem(s.h),
							n = (new Date).getTime();
						if (!e && t && parseInt(t) + s.i > n) return void d();
						localStorage.setItem(s.h, n.toString())
					}
					if (!t && u === s.a.Denied) return r(!1, !0), void d();
					if (!t && u === s.a.Granted) return l(!1), void d();
					if (!t && u === s.a.Closed) return void d();
					let m = s.a.Default;
					const b = navigator.userAgent;
					switch (Object(o.b)(b) || Object(o.f)(b) ? Object(i.a)(1800).then(() => {
						m === s.a.Default && n()
					}) : n(), m = await Notification.requestPermission()) {
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
				o = n("./src/redditGQL/operations/RegisterWebPushToken.json"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/lib/serviceWorker/index.ts"),
				r = n("./src/lib/timezone/index.ts"),
				c = e => {
					const t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"),
						n = window.atob(t),
						i = new Uint8Array(n.length);
					for (let o = 0; o < n.length; ++o) i[o] = n.charCodeAt(o);
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
						return Object(a.a)(e(), {
							...o,
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
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			}));
			var i = n("./src/lib/makeActionCreator/index.ts");
			const o = "INCONTEXT__BANNED",
				a = "INCONTEXT__MUTED",
				s = Object(i.a)(o),
				r = Object(i.a)(a)
		},
		"./src/reddit/actions/notificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "b", (function() {
				return I
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/notificationSettingsLayout/constants.ts"),
				s = n("./src/reddit/actions/toaster.ts"),
				r = n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				l = n("./src/redditGQL/operations/UserSubredditsNotificationsLevel.json");
			var d = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const m = Object(o.a)(a.c),
				b = Object(o.a)(a.b),
				p = Object(o.a)(a.a),
				f = Object(o.a)(a.f),
				h = Object(o.a)(a.e),
				g = Object(o.a)(a.d),
				_ = e => async (t, n, i) => {
					let {
						gqlContext: o
					} = i;
					e === d.a.Push ? t(f()) : t(m()), await async function(e, t, n) {
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
										o = [];
									const a = e => {
										const {
											rowIds: a,
											rowsCollection: s
										} = function(e) {
											const t = [],
												n = {};
											if (e.rows)
												for (let i = 0; i < e.rows.length; i++) {
													const o = e.rows[i],
														a = o.messageType;
													t.push(a), n[a] = o
												}
											return {
												rowsCollection: n,
												rowIds: t
											}
										}(e);
										i = {
											...i,
											...s
										}, o = [...o, ...a];
										const r = e.id;
										n.push(r), t[r] = {
											...e,
											rows: a
										}
									};
									for (let s = 0; s < e.length; s++) a(e[s]);
									return {
										sections: {
											byId: t,
											allIds: n
										},
										rows: {
											byId: i,
											allIds: o
										}
									}
								}(i)
							}(i.body);
							t === d.a.Push ? n(h(e)) : n(b(e))
						} else t === d.a.Push ? n(g({
							error: i.error
						})) : n(p({
							error: i.error
						}))
					}(o, e, t)
				};
			const y = Object(o.a)(a.g),
				x = e => async (t, n, o) => {
					let {
						gqlContext: a
					} = o;
					(await Object(r.b)(a(), e)).ok ? (v(t, e), function(e) {
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
				e(y({
					isEnabled: t.isEnabled,
					messageType: t.messageType
				}))
			}
			const O = Object(o.a)(a.j),
				N = Object(o.a)(a.i),
				k = Object(o.a)(a.k),
				C = Object(o.a)(a.h),
				I = e => async (t, n, i) => {
					let {
						gqlContext: o
					} = i;
					var a, r;
					t(O());
					const d = await ((e, t) => Object(c.a)(e, {
						...l,
						variables: t
					}))(o(), e);
					if (null === (r = null === (a = d.error) || void 0 === a ? void 0 : a.fields) || void 0 === r ? void 0 : r.length) return t(C({
						error: d.error
					})), void t(Object(s.d)());
					if (d.ok && d.body) {
						const e = d.body,
							n = e && e.data,
							i = n && n.identity && n.identity.subscribedSubreddits,
							o = i && i.pageInfo,
							a = (i && i.edges).map(e => e.node);
						t(N({
							nodes: a,
							pageInfo: o
						}))
					}
				}
		},
		"./src/reddit/actions/notifications/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "initializeServiceWorkerChannel", (function() {
				return I
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
				o = n("./node_modules/lodash/omit.js"),
				a = n.n(o),
				s = n("./src/lib/browser/isIncognito.ts"),
				r = n("./src/lib/notifications/token.ts"),
				c = n("./src/lib/notifications/index.ts"),
				l = n("./src/lib/notifications/constants.ts"),
				d = n("./src/lib/serviceWorker/index.ts"),
				u = n("./src/reddit/actions/chat/toggle.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				b = n("./src/reddit/actions/notifications/utils.ts"),
				p = n("./src/reddit/actions/tabBadging.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/reddit/helpers/parseUrl.ts"),
				g = n("./src/reddit/helpers/tabBadging/index.ts"),
				_ = n("./src/reddit/helpers/trackers/notifications.ts"),
				y = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/constants/experiments.ts"),
				v = n("./src/reddit/helpers/chooseVariant/index.ts");
			const O = e => Object(v.c)(e, {
				experimentName: x.Kb,
				experimentEligibilitySelector: v.a
			}) === x.ed;
			var N = n("./src/reddit/selectors/meta.ts"),
				k = n("./src/reddit/selectors/user.ts");
			let C = !1;
			const I = async (e, t) => {
				const n = Object(k.O)(e);
				if (C) return;
				if (C = !0, Object(b.a)(e) !== l.c.NotificationsSupported) return;
				await Object(d.a)();
				navigator.serviceWorker.addEventListener("message", i => {
					const o = i.data,
						s = o.command || o.type;
					if ("registerWithServiceWorker" === s) E(e);
					else if (s === g.a && n) {
						const e = a()(o, ["command"]);
						t(Object(p.f)(e))
					} else if ("navigate.chat" === s) {
						const e = Object(h.a)(o.data.href);
						e && e.pathname && t(Object(u.c)(e.pathname))
					}
				}), E(e)
			}, E = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: _.c(e)
				})
			}, j = function(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
				return async (i, o, a) => {
					const r = o(),
						d = Object(N.f)(r),
						u = O(r);
					if (await Object(s.a)() || d) return;
					await I(r, i);
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
			}, w = e => async (t, n, o) => {
				const a = n();
				try {
					switch (await Object(r.b)(o.gqlContext)) {
						case r.a.Success:
							Object(b.b)(l.a.Granted), _.k(a), e && t(Object(f.f)({
								kind: y.b.SuccessCommunity,
								text: i.fbt._("Changes saved", null, {
									hk: "wGH5U"
								})
							}));
							break;
						case r.a.FailedResponse:
							_.i(a, "registration_failed_generally");
							break;
						case r.a.FailedGqlReponse:
							_.i(a, "registration_failed_in_gql")
					}
				} catch (s) {
					_.i(a, "registration_failed_uncaught_exception"), console.error(s)
				}
			}, S = (e, t) => async n => {
				try {
					Object(b.b)(e);
					const o = await Object(d.a)();
					if (o) {
						const e = await o.pushManager.getSubscription();
						e && (e.unsubscribe(), t && n(Object(f.f)({
							kind: y.b.SuccessCommunity,
							text: i.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						})))
					}
				} catch (o) {}
			}, P = e => async (t, n) => {
				const i = n();
				if (Object(b.a)(i) === l.c.NotificationsSupported) switch (Object(c.a)()) {
					case l.a.Default:
					case l.a.Closed:
						await t(j(!0, !0));
						break;
					case l.a.Denied:
						t(Object(m.h)(e))
				}
			}, B = () => async (e, t) => {
				var n;
				if (!(null === (n = null === navigator || void 0 === navigator ? void 0 : navigator.permissions) || void 0 === n ? void 0 : n.query)) return;
				const i = t();
				if (Object(b.a)(i) !== l.c.NotificationsSupported) return;
				const o = await navigator.permissions.query({
					name: "notifications"
				});
				o.onchange = () => (t => {
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
				})(o.state)
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
				o = n("./src/lib/notifications/constants.ts"),
				a = n("./src/lib/notifications/featureFlags.ts"),
				s = n("./src/reddit/featureFlags/index.ts"),
				r = n("./src/reddit/helpers/localStorage/index.ts");
			const c = e => s.d.pushNotificationsBrowserSupported(e) ? Object(a.a)() : o.c.BrowserUnsupported,
				l = e => {
					switch (e) {
						case o.a.Denied:
							r.nb(!1), Object(i.c)();
							break;
						case o.a.Default:
						case o.a.Granted:
							r.nb(!0), Object(i.c)();
							break;
						case o.a.Closed:
							r.nb(!0)
					}
				}
		},
		"./src/reddit/actions/userFlair/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
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
			const o = Object(i.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairChanged)),
				a = Object(i.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleUserFlairInSubreddit)),
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
				o = n.n(i),
				a = n("./src/lib/classNames/index.ts"),
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
				return n ? o.a.createElement("span", {
					className: Object(a.a)(t, c.a.badgeCounter, {
						[c.a.mEmpty]: i || r < 1
					})
				}, i || r < 1 ? "" : Object(s.b)(r)) : null
			}
		},
		"./src/reddit/components/InboxBanner/Banner.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./src/lib/classNames/index.ts"),
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
					primaryButtonText: m,
					titleText: b,
					onClose: p,
					onClick: f
				} = e;
				const h = Object(c.a)();
				return o.a.createElement("div", {
					className: Object(a.a)(u.a.banner, t)
				}, o.a.createElement("div", {
					className: u.a.bannerTitleContainer
				}, b && o.a.createElement("h4", {
					className: u.a.bannerTitle
				}, b), i && o.a.createElement(s.t, {
					onClick: e => {
						p && p(e), h(Object(r.p)({
							dnPromptAction: "dismiss"
						}))
					},
					Icon: Object(l.b)("close_fill"),
					className: Object(a.a)(u.a.closeIcon, u.a.closeButton),
					size: s.d.XXS,
					priority: s.c.Plain
				})), d && o.a.createElement("p", {
					className: u.a.bannerDescription
				}, d), o.a.createElement("div", {
					className: u.a.bannerButtonsContainer
				}, m && o.a.createElement(s.t, {
					text: m,
					priority: s.c.Tertiary,
					className: Object(a.a)(u.a.button, u.a.primaryButton),
					size: s.d.XS,
					onClick: e => {
						f && f(e), h(Object(r.p)({
							dnPromptAction: "cta"
						}))
					}
				}), n && o.a.createElement(s.t, {
					text: n,
					onClick: e => {
						p && p(e), h(Object(r.p)({
							dnPromptAction: "refuse"
						}))
					},
					priority: s.c.Plain,
					size: s.d.XS,
					className: Object(a.a)(u.a.button, u.a.closeButton)
				})))
			}
		},
		"./src/reddit/components/InboxBanner/PolicyBanner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
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
				const o = Object(c.a)(),
					l = i.fbt._("We’ve updated our {userAgreement} and {privacyPolicy}. Take a look, as the changes take effect September 12, 2021.", [i.fbt._param("userAgreement", a.a.createElement("a", {
						className: d.a.underlineLink,
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "User Agreement")), i.fbt._param("privacyPolicy", a.a.createElement("a", {
						className: d.a.underlineLink,
						href: "https://www.redditinc.com/policies/privacy-policy",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "Privacy Policy"))], {
						hk: "3bGC4g"
					});
				return a.a.createElement(s.a, {
					className: d.a.policyBanner,
					titleText: i.fbt._("Reddit’s User Agreement & Privacy Policy", null, {
						hk: "32fxCY"
					}),
					descriptionText: l,
					primaryButtonText: i.fbt._("Ok", null, {
						hk: "1IJxzv"
					}),
					onClick: e => {
						e.stopPropagation(), t(), o(Object(r.g)(n, r.a.Confirm))
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
				return ae
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				s = n("./src/lib/notifications/index.ts"),
				r = n("./src/lib/notifications/constants.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/BadgeCounter/index.tsx"),
				u = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				m = n("./node_modules/lodash/omit.js"),
				b = n.n(m),
				p = n("./src/reddit/components/InboxBanner/Banner.tsx"),
				f = n("./src/reddit/components/InboxBanner/index.m.less"),
				h = n.n(f);
			const g = e => {
				let {
					onClose: t,
					onTurnOnBrowserNotifications: n
				} = e;
				return a.a.createElement(p.a, {
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
				y = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/controls/InternalLink/index.tsx"),
				v = n("./src/reddit/helpers/trackers/hotPotato.ts"),
				O = n("./src/reddit/hooks/useTracking.ts"),
				N = n("./src/reddit/icons/fonts/index.tsx"),
				k = n("./src/reddit/icons/svgs/HotPotato/index.tsx"),
				C = n("./src/reddit/selectors/experiments/hotPotato.ts");
			const I = e => {
				let {
					onClose: t
				} = e;
				const n = Object(_.e)(C.b),
					s = Object(O.a)(),
					r = Object(o.useCallback)(e => {
						t && t(e), s(Object(v.a)())
					}, [t, s]);
				return a.a.createElement("div", {
					className: Object(c.a)(h.a.banner, h.a.hotPotatoBanner)
				}, a.a.createElement(x.a, {
					to: `/r/${n}`,
					className: h.a.bannerContainer,
					onClick: r
				}, a.a.createElement("div", {
					className: h.a.bannerDataContainer
				}, a.a.createElement("div", {
					className: h.a.bannerTitleContainer
				}, a.a.createElement("h4", {
					className: h.a.bannerTitle
				}, i.fbt._("There's a time and r/place for everything", null, {
					hk: "10MnL"
				}))), a.a.createElement("p", {
					className: h.a.bannerDescription
				}, i.fbt._("r/Place is now open. Together we can make something more. Claim your tile and make r/place yours.", null, {
					hk: "2f11Wg"
				}))), a.a.createElement(k.a, {
					className: h.a.bannerImage
				})), a.a.createElement(y.t, {
					onClick: t,
					Icon: Object(N.b)("close_fill"),
					className: h.a.closeButton,
					size: y.d.XXS,
					priority: y.c.Plain
				}))
			};
			var E = n("./src/reddit/components/InboxBanner/PolicyBanner.tsx"),
				j = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				w = n("./src/reddit/components/ResizeSensor/index.tsx"),
				S = n("./src/reddit/components/InboxTooltip/index.m.less"),
				P = n.n(S);
			const B = 3;
			class T extends a.a.Component {
				constructor() {
					super(...arguments), this.ref = a.a.createRef(), this.handleResize = () => {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						e !== this.props.notificationHeight && this.props.setNotificationHeight(e, this.props.index)
					}
				}
				componentDidMount() {
					if (this.props.index + 1 <= B) {
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
						hideSubredditNotifications: o,
						blockAwarder: s,
						index: r,
						isInboxPostEmbedEnabled: c,
						markNotificationAsRead: l,
						notification: d,
						setActiveOverflowMenuId: u,
						onItemClick: m
					} = this.props, b = r + 1 <= B;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						ref: this.ref,
						className: P.a.notificationResizeWrapper
					}, a.a.createElement(j.a, {
						activeOverflowMenuId: e,
						decreaseSubredditNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: i,
						hideSubredditNotifications: o,
						isInboxPostEmbedEnabled: c,
						isInTooltip: !0,
						markNotificationAsRead: l,
						notification: d,
						setActiveOverflowMenuId: u,
						onItemClick: m,
						blockAwarder: s
					}), !!b && a.a.createElement(w.a, {
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
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const D = {},
				F = "",
				H = 0,
				z = "200px",
				M = "250px",
				V = "270px",
				W = 100,
				G = .5,
				q = 5,
				K = 50,
				Q = 55;
			class J extends a.a.Component {
				constructor() {
					super(...arguments), this.container = a.a.createRef(), this.state = {
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
							isLoggedIn: i
						} = this.props, o = t || n, a = window.innerHeight - K - 2 * Q - (o ? W : 0);
						let s = 0;
						for (const r in e) s += e[r];
						return 0 === s ? o ? M : i ? z : V : (o && (s += W), a < s && (s = a + (o ? W : 0)), s)
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
						} = this.state, n = t + q, i = n > e.length ? n : e.length - 1;
						this.setState({
							currentNotificationCursorIndex: i
						})
					}, this.renderNotifications = () => {
						const e = b()(this.props, ["notifications"]),
							{
								notificationHeights: t,
								currentNotificationCursorIndex: n
							} = this.state,
							{
								isInboxInfiniteScrollEnabled: i,
								notifications: o
							} = this.props,
							s = o.length > n + q;
						return (i && o.length > 0 && s ? o.slice(0, n + 1) : o).map((n, i) => a.a.createElement(T, R({}, e, {
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
							notifications: o
						} = this.props;
						if (e.isIntersecting) {
							const e = o.length > this.state.currentNotificationCursorIndex + q;
							this.props.notifications.length > 0 && i && e ? this.updateCurrentCursorIndex() : t && n({
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
						isInboxPrivacyPolicyBannerEnabled: i,
						isInboxInfiniteScrollEnabled: o,
						isLoggedIn: s,
						isPending: r,
						notifications: c,
						setDesktopNotificationsPromptSeen: l,
						setInboxPrivacyPolicyBannerSeen: d,
						showBrowserNotificationsPermissionSettings: m,
						setHotPotatoBannerSeen: b
					} = this.props, p = !(!c || !c.length), f = this.getContainerHeight(), h = c.length > this.state.currentNotificationCursorIndex + q, _ = i || t || n;
					return a.a.createElement("div", {
						className: P.a.notificationList,
						ref: this.container,
						style: p ? {
							height: f,
							maxHeight: f
						} : {
							minHeight: z
						}
					}, _ && a.a.createElement("div", {
						className: P.a.notificationBannerContainer
					}, i && a.a.createElement(E.a, {
						onClose: d,
						pageType: A.c.MiniInbox
					}), t && a.a.createElement(g, {
						onTurnOnBrowserNotifications: m,
						onClose: l
					}), n && a.a.createElement(I, {
						onClose: b
					})), !p && r && a.a.createElement(L.a, null), !p && !r && a.a.createElement(U.a, {
						isBannerEnabled: _,
						isLoggedIn: s,
						inTooltip: !0,
						hideTooltip: this.props.onItemClick
					}), p && this.renderNotifications(), o && p && !r && (e || h) && a.a.createElement(u.a, {
						onChange: this.loadNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: G
					}, a.a.createElement("div", null)))
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
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const te = [],
				ne = l.a.div("StyledDropdown", P.a),
				ie = e => {
					let {
						isLoggedIn: t,
						onMessagesClick: n,
						onBarClick: s,
						markAllAsRead: r,
						messagesBadgeCount: l,
						sendInboxClickSettings: u
					} = e;
					const m = !!l,
						b = Object(o.useCallback)(() => {
							n(), s()
						}, [n, s]),
						p = Object(o.useCallback)(() => {
							u(), s()
						}, [u, s]);
					return a.a.createElement("nav", {
						className: P.a.topNav
					}, a.a.createElement("span", {
						className: P.a.topNavTitle
					}, i.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), t && a.a.createElement("span", {
						className: P.a.topNavLinks
					}, a.a.createElement("span", {
						className: P.a.messagesLinkContainer
					}, a.a.createElement(x.a, {
						className: Object(c.a)(P.a.messagesLink, {
							[P.a.mActive]: m
						}),
						onClick: b,
						to: m ? "/message/unread" : "/message/messages"
					}, i.fbt._("Messages", null, {
						hk: "hulKY"
					}), a.a.createElement(d.a, {
						className: P.a.badgeCount,
						isActive: m,
						unreadCount: l
					}))), a.a.createElement("button", {
						className: P.a.navLink,
						onClick: r
					}, a.a.createElement(N.a, {
						name: "mark_read",
						className: P.a.icon
					})), a.a.createElement(x.a, {
						className: P.a.navLink,
						onClick: p,
						to: "/settings/notifications"
					}, a.a.createElement(N.a, {
						name: "settings",
						className: P.a.icon
					}))))
				},
				oe = e => a.a.createElement("div", {
					className: P.a.bottomBar
				}, a.a.createElement(x.a, {
					className: P.a.bottomLink,
					onClick: () => {
						e.sendInboxClickSeeAll(), e.onBarClick()
					},
					to: "/notifications"
				}, i.fbt._("See All", null, {
					hk: "3L3tFc"
				}))),
				ae = e => {
					const t = Object(O.a)(),
						{
							clearMessageTabBadgeCount: n,
							inboxBadgeCount: i,
							isPending: o,
							messagesBadgeCount: c,
							notifications: l,
							hideTooltip: d,
							isHotPotatoEnabled: u,
							isInboxPolicyBannerEnabled: m,
							isLoggedIn: b,
							isPushNotificationsSupported: p,
							userId: f
						} = e,
						[h, g] = Object(X.a)(f),
						[_, y] = Object($.a)(f),
						[x, v] = function(e) {
							let {
								key: t,
								userId: n
							} = e;
							const [i, o] = Object(Z.a)(t, []);
							return [-1 !== i.indexOf(n), () => {
								o([...i, n])
							}]
						}({
							key: Y.b.HOT_POTATO_BANNER_SEEN,
							userId: f
						}),
						N = !(!l || !l.length),
						k = Object(s.a)(),
						C = k === r.a.Closed || k === r.a.Default || k === r.a.Denied,
						I = p && C && !h;
					return a.a.createElement(ne, null, a.a.createElement("div", {
						className: P.a.tooltipContainer
					}, a.a.createElement(ie, {
						markAllAsRead: () => {
							e.markAllAsRead(), t(Object(A.i)({
								isMiniInbox: !0
							}))
						},
						messagesBadgeCount: c,
						onMessagesClick: () => {
							t(Object(A.u)({
								badgeCount: i,
								tab: A.f.Messages
							})), t(Object(A.j)()), n()
						},
						sendInboxClickSettings: () => t(Object(A.o)(A.c.MiniInbox)),
						onBarClick: d,
						isLoggedIn: b
					}), a.a.createElement(J, ee({}, e, {
						isPending: o,
						onItemClick: d,
						setDesktopNotificationsPromptSeen: g,
						isDNInboxPromptBannerEnabled: I,
						isInboxPrivacyPolicyBannerEnabled: m && !_,
						setInboxPrivacyPolicyBannerSeen: y,
						isHotPotatoEnabled: u && !x,
						setHotPotatoBannerSeen: v
					})), (N || o) && a.a.createElement(oe, {
						sendInboxClickSeeAll: () => t(Object(A.n)()),
						onBarClick: d
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
			const o = Object(i.a)({
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
			t.a = o
		},
		"./src/reddit/components/NotificationUnit/Placeholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./src/reddit/components/NotificationUnit/index.m.less"),
				s = n.n(a);
			const r = () => o.a.createElement("li", {
					className: s.a.placeholderWrapper
				}, o.a.createElement("span", {
					className: s.a.placeholderAvatar
				}), o.a.createElement("span", {
					className: s.a.placeholderContent
				})),
				c = () => o.a.createElement("ol", null, o.a.createElement(r, null), o.a.createElement(r, null), o.a.createElement(r, null))
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
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
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
			const m = (e, t, n) => null != n ? n : t ? e : s.c.Plain,
				b = e => {
					let {
						border: t,
						priority: n,
						small: i,
						...o
					} = e;
					return a.a.createElement(s.t, u({}, o, {
						priority: m(s.c.Primary, t, n),
						className: Object(d.a)(o.className, l.a.BaseButton),
						size: i ? s.d.S : s.d.M
					}))
				},
				p = e => a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
					className: l.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? i.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : i.fbt._("Following", null, {
					hk: "1wQlVR"
				})), a.a.createElement("span", {
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
						small: o,
						...r
					} = e;
					return a.a.createElement(s.t, u({}, r, {
						priority: m(s.c.Secondary, n, i),
						className: Object(d.a)(r.className, l.a.BaseButton),
						size: o ? s.d.S : s.d.M,
						text: p(t)
					}))
				};
			class h extends a.a.Component {
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
						small: o = !1,
						isFullWidth: s = !1,
						style: c
					} = this.props, l = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: i,
						small: o,
						isFullWidth: s,
						style: c
					};
					return this.props.userIsSubscriber ? a.a.createElement(f, u({}, l, {
						buttonType: this.props.identifier.type
					})) : a.a.createElement(b, u({}, l, {
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
				o = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(o.a)(Object(i.c)(a.a))
		},
		"./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			var i = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json"),
				a = n("./src/redditGQL/operations/UpdateNotificationPreferences.json");
			const s = (e, t) => Object(i.a)(e, {
					...o,
					variables: t
				}),
				r = (e, t) => Object(i.a)(e, {
					...a,
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
				return a
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			var i = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const a = () => e => ({
					...Object(o.o)(e),
					action: i.c.CLICK,
					noun: "preview",
					source: "hot_potato"
				}),
				s = () => e => ({
					...Object(o.o)(e),
					action: i.c.CLICK,
					noun: "hot_potato",
					source: "nav"
				}),
				r = () => e => ({
					...Object(o.o)(e),
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
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "w", (function() {
				return m
			})), n.d(t, "t", (function() {
				return b
			})), n.d(t, "r", (function() {
				return p
			})), n.d(t, "s", (function() {
				return f
			})), n.d(t, "p", (function() {
				return h
			})), n.d(t, "k", (function() {
				return g
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "u", (function() {
				return y
			})), n.d(t, "v", (function() {
				return x
			})), n.d(t, "y", (function() {
				return v
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "x", (function() {
				return N
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "m", (function() {
				return C
			})), n.d(t, "z", (function() {
				return I
			})), n.d(t, "q", (function() {
				return E
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
			}));
			var i, o, a, s, r, c, l = n("./src/reddit/constants/tracking.ts"),
				d = n("./src/reddit/selectors/telemetry.ts"),
				u = n("./src/telemetry/index.ts");
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(i || (i = {})),
			function(e) {
				e.HideNotifications = "hide_notification", e.HideSubreddit = "hide_subreddit", e.HideUpdates = "hide_updates", e.BlockAwarder = "block_awarder", e.DecreaseSubredditUpdates = "disable_frequent"
			}(o || (o = {})),
			function(e) {
				e.MiniInbox = "mini_inbox", e.Inbox = "inbox"
			}(a || (a = {})),
			function(e) {
				e.Inbox = "inbox", e.Nav = "nav", e.Settings = "notification_app_settings"
			}(s || (s = {})),
			function(e) {
				e[e.FIRST = 1] = "FIRST", e[e.SECOND = 2] = "SECOND"
			}(r || (r = {})),
			function(e) {
				e.Confirm = "confirm"
			}(c || (c = {}));
			const m = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: i,
						type: o
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
							type: o
						}
					})
				},
				b = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: i,
						type: o
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
							type: o
						}
					})
				},
				p = () => e => ({
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
						type: o,
						awardId: a
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
								type: o
							},
							goldPurchase: {
								awardId: a
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
						type: o,
						awardId: a,
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
							type: o
						},
						goldPurchase: {
							awardId: a
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
						type: o,
						awardId: a,
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
							type: o
						},
						goldPurchase: {
							awardId: a
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
				y = e => {
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
				x = e => {
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
						type: o,
						awardId: a
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
							type: o
						},
						goldPurchase: {
							awardId: a
						}
					})
				},
				N = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: i,
						type: o
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
							type: o
						}
					})
				};
			var k;
			! function(e) {
				e.Cats = "cats", e.Memes = "memes", e.Karma = "karma_free_subs", e.PN_perms = "pn_perms", e.Email_perms = "email_perms"
			}(k || (k = {}));
			const C = e => {
					let {
						actionInfoType: t,
						id: n,
						isClicked: i,
						isViewed: o,
						type: a
					} = e;
					return e => ({
						...d.o(e),
						action: l.c.CLICK,
						noun: "overflow_option",
						source: s.Inbox,
						inbox: {
							id: n,
							isClicked: i,
							isViewed: o
						},
						notification: {
							type: a
						},
						actionInfo: {
							...d.d(e),
							type: t
						}
					})
				},
				I = e => {
					let {
						actionInfoType: t,
						id: n,
						isClicked: i,
						isViewed: o,
						type: a
					} = e;
					return e => ({
						...d.o(e),
						action: l.c.UNDO,
						noun: "overflow_option",
						source: s.Inbox,
						inbox: {
							id: n,
							isClicked: i,
							isViewed: o
						},
						notification: {
							type: a
						},
						actionInfo: {
							...d.d(e),
							type: t
						}
					})
				},
				E = e => {
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
						pageType: a.MiniInbox
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
							pageType: a.MiniInbox
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
				return m
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "m", (function() {
				return N
			}));
			var i = n("./src/reddit/selectors/telemetry.ts"),
				o = n("./src/telemetry/index.ts"),
				a = n("./src/telemetry/models/Event.ts");
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
					Object(o.a)({
						...r(e),
						action: a.c.View,
						source: "popup"
					})
				},
				d = e => {
					Object(o.a)({
						...r(e),
						action: a.c.Allow,
						source: "popup"
					})
				},
				u = e => {
					Object(o.a)({
						...r(e),
						action: a.c.Block,
						source: "popup"
					})
				},
				m = e => {
					Object(o.a)({
						...r(e),
						action: a.c.Close,
						source: "popup"
					})
				},
				b = (e, t, n) => ({
					...i.o(e),
					actionInfo: i.d(e, {
						success: t,
						reason: n
					}),
					noun: "push_token"
				}),
				p = e => {
					Object(o.a)({
						...b(e, !0),
						action: a.c.Request,
						source: "notification"
					})
				},
				f = e => {
					Object(o.a)({
						...b(e, !0),
						action: a.c.Register,
						source: "notification"
					})
				},
				h = (e, t) => {
					Object(o.a)({
						...b(e, !1, t),
						action: a.c.Bail,
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
				y = (e, t) => n => ({
					...i.o(n),
					action: c(e),
					email: {
						type: t
					},
					noun: "email",
					source: "email_app_settings"
				}),
				x = (e, t) => n => ({
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
				O = (e, t, n) => o => ({
					...i.o(o),
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
					action: a.c.View,
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
				return a
			}));
			var i = n("./node_modules/react/index.js"),
				o = n("./src/reddit/helpers/localStorage/index.ts");

			function a(e) {
				const [t, n] = Object(i.useState)(Object(o.s)(e));
				return [t, Object(i.useCallback)(() => {
					n(!0), Object(o.ob)(e)
				}, [])]
			}
		},
		"./src/reddit/hooks/useInboxPrivacyPolicyBannerSeen.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var i = n("./node_modules/react/index.js"),
				o = n("./src/reddit/helpers/localStorage/index.ts");

			function a(e) {
				const [t, n] = Object(i.useState)(() => Object(o.u)(e));
				return [t, Object(i.useCallback)(() => {
					n(!0), Object(o.zb)(e)
				}, [e])]
			}
		},
		"./src/reddit/icons/svgs/HotPotato/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react/index.js"),
				o = n.n(i);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 32 32",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				fill: "#ff4500"
			}, o.a.createElement("path", {
				d: "m6.4 0h-6.4v6.4h6.4z"
			}), o.a.createElement("path", {
				d: "m12.8 0h-6.4v6.4h6.4z"
			}), o.a.createElement("path", {
				d: "m19.2 0h-6.4v6.4h6.4z"
			}), o.a.createElement("path", {
				d: "m25.6 0h-6.4v6.4h6.4z"
			}), o.a.createElement("path", {
				d: "m32 6.4h-6.4v6.4h6.4z"
			}), o.a.createElement("path", {
				d: "m32 12.8h-6.4v6.4h6.4z"
			}), o.a.createElement("path", {
				d: "m32 19.2h-6.4v6.4h6.4z"
			}), o.a.createElement("path", {
				d: "m32 25.6h-6.4v6.4h6.4z"
			}), o.a.createElement("path", {
				d: "m19.2 25.6h-6.4v6.4h6.4z"
			}), o.a.createElement("path", {
				d: "m25.6 25.6h-6.4v6.4h6.4z"
			}), o.a.createElement("path", {
				d: "m6.4 25.6h-6.4v6.4h6.4z"
			})), o.a.createElement("path", {
				d: "m19.2 12.8h-6.4v6.4h6.4z",
				fill: "#000"
			}), o.a.createElement("g", {
				fill: "#ff4500"
			}, o.a.createElement("path", {
				d: "m6.4 19.2h-6.4v6.4h6.4z"
			}), o.a.createElement("path", {
				d: "m6.4 12.8h-6.4v6.4h6.4z"
			}), o.a.createElement("path", {
				d: "m6.4 6.4h-6.4v6.4h6.4z"
			})), o.a.createElement("path", {
				d: "m19.2 6.4h-12.8v25.6h6.4v-6.4h12.8v-19.2zm0 12.8h-6.4v-6.4h6.4z",
				fill: "#fff"
			}))
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
				o = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/helpers/trackers/inbox.ts"),
				r = n("./src/reddit/hooks/useTracking.ts"),
				c = n("./node_modules/fbt/lib/FbtPublic.js"),
				l = n("./src/config.ts"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/index.m.less"),
				b = n.n(m);

			function p() {
				return (p = Object.assign || function(e) {
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
					return o.a.createElement("div", {
						className: Object(d.a)(b.a.emptyState, b.a.karmaView, {
							[b.a.inNotificationsPage]: !t
						})
					}, o.a.createElement("div", {
						className: Object(d.a)(b.a.catsImageWrapper, {
							[b.a.inTooltip]: t
						})
					}, o.a.createElement("img", {
						src: `${l.a.assetPath}/img/notifications/bottom_cat.png`,
						alt: c.fbt._("cats picture", null, {
							hk: "27dboq"
						}),
						className: Object(d.a)(b.a.cat, b.a.bottom)
					}), o.a.createElement("img", {
						src: `${l.a.assetPath}/img/notifications/top_cat.png`,
						alt: c.fbt._("cats picture", null, {
							hk: "27dboq"
						}),
						className: Object(d.a)(b.a.cat, b.a.top)
					}), o.a.createElement("img", {
						src: `${l.a.assetPath}/img/notifications/cloud.png`,
						alt: c.fbt._("cats picture", null, {
							hk: "45gHNS"
						}),
						className: b.a.cloud
					}), o.a.createElement("img", {
						src: `${l.a.assetPath}/img/notifications/yummy.png`,
						alt: c.fbt._("cats picture", null, {
							hk: "27dboq"
						}),
						className: b.a.yummy
					})), o.a.createElement("h1", {
						className: Object(d.a)(b.a.emptyTitle, {
							[b.a.inTooltip]: t
						})
					}, c.fbt._("You don’t have any activity yet", null, {
						hk: "2GNaV0"
					})), o.a.createElement("p", {
						className: b.a.emptyDescription
					}, c.fbt._("That’s ok, maybe you just need the right inspiration. Have you had your daily cat fix yet today?", null, {
						hk: "3tmgZE"
					})), o.a.createElement(u.t, p({
						className: b.a.emptyStateButton,
						onClick: n
					}, i), c.fbt._("See today’s Top Cats in r/cats", null, {
						hk: "Um68y"
					})))
				},
				h = n("./src/lib/lessComponent.tsx"),
				g = n("./src/reddit/actions/login.ts");
			var _ = e => o.a.createElement("svg", {
				className: e.className,
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 21"
			}, o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M18.4 14.788c-.662 0-1.2-.537-1.2-1.202l-.012-5.998C17.188 3.625 13.963.4 10 .4 6.037.4 2.811 3.625 2.811 7.586l-.01 6.002c0 .663-.54 1.2-1.2 1.2a1.199 1.199 0 100 2.4h16.8a1.2 1.2 0 100-2.4zm-9.6 3.6H7.6c0 1.324 1.076 2.4 2.4 2.4 1.323 0 2.4-1.076 2.4-2.4H8.8zm-3.6-4.797c0 .422-.087.822-.22 1.197H15.02a3.554 3.554 0 01-.22-1.2l-.013-5.997A4.794 4.794 0 0010 2.8a4.794 4.794 0 00-4.789 4.787l-.01 6.003z"
			}));
			const y = h.a.wrapped(_, "BellOutline", b.a),
				x = e => {
					let {
						isBannerEnabled: t,
						isLoggedIn: n
					} = e;
					const i = Object(a.d)();
					return o.a.createElement("div", {
						className: Object(d.a)(b.a.emptyState, {
							[b.a.emptyStateWithBanner]: Boolean(t),
							[b.a.loggedOutState]: !n
						})
					}, o.a.createElement(y, null), o.a.createElement("h1", {
						className: b.a.emptyTitle
					}, c.fbt._("Be the first to know", null, {
						hk: "2mNJO0"
					})), o.a.createElement("p", {
						className: b.a.emptyDescription
					}, c.fbt._("This is where you get updates on your activity and recommendations", null, {
						hk: "27V2PG"
					})), !n && o.a.createElement("div", {
						className: b.a.emptyStateLoggedOutContainer
					}, o.a.createElement(u.j, {
						onClick: () => i(Object(g.i)())
					}, c.fbt._("Log In", null, {
						hk: "ZR3pC"
					})), o.a.createElement("span", {
						className: b.a.emptyStateDivider
					}), o.a.createElement(u.j, {
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
				const a = n ? "r/popular" : N,
					s = `/${a}`,
					r = {
						to: s,
						kind: u.b.InternalLink
					},
					m = o.a.createElement(v.a, {
						to: s,
						target: "_blank",
						rel: "noopener noreferrer",
						className: b.a.subredditLinkR,
						onClick: i
					}, a);
				return o.a.createElement("div", {
					className: Object(d.a)(b.a.emptyState, b.a.karmaView, {
						[b.a.inNotificationsPage]: !t
					})
				}, o.a.createElement("img", {
					src: `${l.a.assetPath}/img/wrappedreddit/default_avatar.png`,
					alt: c.fbt._("default user avatar", null, {
						hk: "1VMTKf"
					}),
					className: Object(d.a)(b.a.avatarImage, {
						[b.a.inTooltip]: t
					})
				}), o.a.createElement("h1", {
					className: Object(d.a)(b.a.emptyTitle, {
						[b.a.inTooltip]: t
					})
				}, c.fbt._("You don’t have any activity yet", null, {
					hk: "2hf6yn"
				})), o.a.createElement("p", {
					className: b.a.emptyDescription
				}, n ? c.fbt._("That’s ok, maybe you just need the right inspiration. Try browsing {Link: to r/popular}, for new communities to join.", [c.fbt._param("Link: to r/popular", m)], {
					hk: "VSBWM"
				}) : c.fbt._("That’s ok, maybe you just need the right inspiration. Try posting in {Link: to popular subreddit} , a popular community for discussion.", [c.fbt._param("Link: to popular subreddit", m)], {
					hk: "1WOK4T"
				})), o.a.createElement(u.t, O({
					className: b.a.emptyStateButton,
					onClick: i,
					text: `Visit ${a}`
				}, r)))
			};

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const I = "/img/notifications/star.png";
			var E = e => {
					let {
						inTooltip: t,
						onBtnClick: n
					} = e;
					const i = {
						to: "/r/memes/top/",
						kind: u.b.InternalLink
					};
					return o.a.createElement("div", {
						className: Object(d.a)(b.a.emptyState, b.a.karmaView, {
							[b.a.inNotificationsPage]: !t
						})
					}, o.a.createElement("div", {
						className: Object(d.a)(b.a.memesImageWrapper, {
							[b.a.inTooltip]: t
						})
					}, o.a.createElement("img", {
						src: `${l.a.assetPath}/img/notifications/shrek.png`,
						alt: c.fbt._("memes picture", null, {
							hk: "3e3S9E"
						}),
						className: b.a.shrek
					}), o.a.createElement("img", {
						src: `${l.a.assetPath}${I}`,
						alt: c.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(d.a)(b.a.star, b.a.inBottom)
					}), o.a.createElement("img", {
						src: `${l.a.assetPath}${I}`,
						alt: c.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(d.a)(b.a.star, b.a.inCenter)
					}), o.a.createElement("img", {
						src: `${l.a.assetPath}${I}`,
						alt: c.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(d.a)(b.a.star, b.a.inTop)
					})), o.a.createElement("h1", {
						className: Object(d.a)(b.a.emptyTitle, {
							[b.a.inTooltip]: t
						})
					}, c.fbt._("You don’t have any activity yet", null, {
						hk: "2GNaV0"
					})), o.a.createElement("p", {
						className: b.a.emptyDescription
					}, c.fbt._("That’s ok, maybe you just need the right inspiration. Let’s get some more lolz in your life.", null, {
						hk: "10HMFI"
					})), o.a.createElement(u.t, C({
						className: b.a.emptyStateButton,
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
				A = n("./src/reddit/components/Settings/modalIds.ts"),
				U = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				R = n("./src/reddit/models/Toast/index.ts"),
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
			const z = [S.h.PrivateMessage, S.h.ChatMessage, S.h.ChatRequest, S.h.UsernameMention, S.h.PostReply, S.h.UpvotePost, S.h.UpvoteComment, S.h.CommentReply, S.h.ThreadReplies, S.h.TopLevelComment, S.h.NewPostActivity, S.h.UserNewFollower, S.h.PostFlairAdded, S.h.UserFlairAdded, S.h.NewPinnedPost, S.h.AwardReceived, S.h.PostFollow, S.h.TalkLive, S.h.CommentFollow, S.h.LifecyclePostSuggestions, S.h.BroadcastRecommendation, S.h.SubredditRecommendation, S.h.RedditLore, S.h.OneOff, S.h.CakeDay, S.h.ModeratedSrEngagement];
			var M;
			! function(e) {
				e[e.TURN_ON_PN = 0] = "TURN_ON_PN", e[e.TURN_ON_PN_APP = 1] = "TURN_ON_PN_APP", e[e.VERIFY_EMAIL = 2] = "VERIFY_EMAIL", e[e.TURN_ON_DAYLY_DIGEST = 3] = "TURN_ON_DAYLY_DIGEST", e[e.DONE = 4] = "DONE"
			}(M || (M = {}));
			var V = e => {
					let {
						inTooltip: t,
						isBannerEnabled: n,
						isLoggedIn: r,
						onBtnClick: m,
						hideTooltip: p
					} = e;
					const f = Object(a.d)(),
						h = Object(a.e)(F.n),
						g = Object(a.e)(F.D),
						_ = Object(i.useRef)(h),
						[y, v] = Object(i.useState)(M.TURN_ON_PN),
						O = Object(a.e)(e => e.user.accountSettings.changeEmail.api.pending),
						N = Object(i.useCallback)(() => {
							f(async (e, t) => {
								var n, i;
								let o = Object(F.eb)(t());
								o.allIds.length || await e(Object(T.a)(U.a.Email));
								const a = null === (i = null === (n = (o = Object(F.eb)(t())).byId) || void 0 === n ? void 0 : n.EMAIL_DIGEST) || void 0 === i ? void 0 : i.isEnabled;
								v(a ? M.DONE : M.TURN_ON_DAYLY_DIGEST)
							})
						}, [f]),
						k = Object(i.useCallback)(() => {
							g ? N() : v(M.VERIFY_EMAIL)
						}, [g, N]),
						C = Object(i.useCallback)(() => {
							f(async (e, t) => {
								const n = t();
								Object(F.gb)(n).allIds.length || await e(Object(T.a)(U.a.Push)), Object(D.c)(t(), z) ? v(M.TURN_ON_PN_APP) : k()
							})
						}, [f, k]),
						I = Object(i.useCallback)(() => {
							(() => Object(j.a)() === w.a.Granted)() ? C(): v(M.TURN_ON_PN)
						}, [C]),
						E = Object(i.useCallback)(() => {
							m(s.b.Email_perms)(), t && p && p(), f(Object(P.h)(A.a))
						}, [f, m, t, p]);
					if (Object(i.useEffect)(() => {
							I()
						}, [I]), Object(i.useEffect)(() => {
							if (h !== _.current && y === M.VERIFY_EMAIL) {
								const e = Object(L.e)(c.fbt._("Email successfully updated!", null, {
									hk: "3iPlUp"
								}), R.b.SuccessCommunityGreen);
								f(Object(L.f)(e)), N()
							}
						}, [h, y, N]), Object(i.useEffect)(() => {
							O && f(Object(P.g)(A.a))
						}, [O, f]), y === M.DONE) return o.a.createElement(x, {
						isLoggedIn: r,
						isBannerEnabled: n
					});
					const S = {
							to: "/settings/notifications",
							kind: u.b.InternalLink,
							onClick: y === M.TURN_ON_PN_APP ? m(s.b.PN_perms) : m(s.b.Email_perms)
						},
						V = {
							onClick: y === M.TURN_ON_PN ? async () => {
								m(s.b.PN_perms)(), t && p && p(), await f(Object(B.requestBrowserNotificationPermissionPromptByUser)(A.f)), I()
							} : E
						},
						W = y === M.TURN_ON_PN || y === M.TURN_ON_PN_APP,
						G = y === M.TURN_ON_PN_APP || y === M.TURN_ON_DAYLY_DIGEST;
					return o.a.createElement("div", {
						className: Object(d.a)(b.a.emptyState, b.a.karmaView, {
							[b.a.inNotificationsPage]: !t
						})
					}, o.a.createElement("img", {
						src: `${l.a.assetPath}/img/wrappedreddit/default_avatar.png`,
						alt: c.fbt._("default user avatar", null, {
							hk: "1VMTKf"
						}),
						className: Object(d.a)(b.a.avatarImage, {
							[b.a.inTooltip]: t
						})
					}), o.a.createElement("h1", {
						className: Object(d.a)(b.a.emptyTitle, {
							[b.a.inTooltip]: t
						})
					}, W ? c.fbt._("Turn on notifications", null, {
						hk: "3qFpFu"
					}) : c.fbt._("Turn on email digest", null, {
						hk: "obBF8"
					})), o.a.createElement("p", {
						className: b.a.emptyDescription
					}, W ? c.fbt._("Stay in the loop on content from communities you love right on your phone.", null, {
						hk: "1gwnbO"
					}) : c.fbt._("Stay in the loop on content from communities you love right on your email inbox.", null, {
						hk: "1rs4kD"
					})), o.a.createElement(u.t, H({
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
					inTooltip: i,
					hideTooltip: c
				} = e;
				const l = Object(r.a)(),
					d = e => () => l(Object(s.q)({
						actionInfoType: e
					})),
					u = Object(a.e)(W.b),
					m = Object(a.e)(W.c),
					b = Object(a.e)(W.d),
					p = Object(a.e)(W.a),
					h = Object(a.e)(W.e);
				return u || h ? o.a.createElement(k, {
					inTooltip: i,
					isPopular: h,
					onBtnClick: d(s.b.Karma)
				}) : m ? o.a.createElement(E, {
					inTooltip: i,
					onBtnClick: d(s.b.Memes)
				}) : b ? o.a.createElement(V, {
					isBannerEnabled: t,
					isLoggedIn: n,
					inTooltip: i,
					onBtnClick: d,
					hideTooltip: c
				}) : p ? o.a.createElement(f, {
					inTooltip: i,
					onBtnClick: d(s.b.Cats)
				}) : o.a.createElement(x, {
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
				return m
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "a", (function() {
				return p
			}));
			var i = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/components/InboxTooltip/Component.tsx"),
				a = n("./src/reddit/models/SubredditModeration/index.ts"),
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
					const o = Object(s.yb)(e, {
						userName: i
					});
					if (!o) return;
					const a = r(e, {
						subredditId: n
					});
					return a ? a[o.id] : void 0
				},
				l = Object(i.a)((e, t) => {
					let {
						subredditId: n
					} = t;
					const i = e.features.banned.userOrder[n];
					return i ? i.map(t => e.features.banned.models[n][t]) : o.a
				}),
				d = (e, t) => {
					let {
						subredditId: n
					} = t;
					const i = Object(a.e)(n);
					return e.features.banned.api.pending[i]
				},
				u = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.features.banned.loadMore[n]
				},
				m = e => e.features.banned.search.api.pending,
				b = e => e.features.banned.search.result,
				p = e => e.features.banned.inContext
		},
		"./src/reddit/selectors/experiments/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
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
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: i.ob
				}) === i.ld.Karma,
				s = e => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: i.ob
				}) === i.ld.Memes,
				r = e => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: i.ob
				}) === i.ld.PnEmail,
				c = e => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: i.ob
				}) === i.ld.Cats,
				l = e => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: i.ob
				}) === i.ld.Popular,
				d = e => l(e) || c(e) || r(e) || s(e) || a(e)
		},
		"./src/reddit/selectors/notificationPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "g", (function() {
				return a
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
				o = e => e.user.notificationPrefs.api.getPreferences.pending,
				a = e => e.user.notificationPrefs.api.setPreferences.pending,
				s = e => e.user.notificationPrefs.preferences,
				r = e => e.user.notificationPrefs.isNotificationPromptVisible,
				c = (e, t) => {
					var n, i;
					const o = (e => e.user.notificationPrefs.pushSettingsLayout)(e),
						a = null === (n = null == o ? void 0 : o.rows) || void 0 === n ? void 0 : n.byId;
					return a && (null === (i = a[t]) || void 0 === i ? void 0 : i.isEnabled)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard~Reddit.53f74405db87efaac8c4.js.map