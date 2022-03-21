// https://www.redditstatic.com/desktop2x/AuthorHovercard~Reddit.5ca664a2613f5ba70b55.js
// Retrieved at 3/21/2022, 10:30:03 AM by Reddit Dataminer v1.0.0
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
					let m = s.a.Default;
					const b = navigator.userAgent;
					switch (Object(a.b)(b) || Object(a.f)(b) ? Object(i.a)(1800).then(() => {
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
			const m = Object(a.a)(o.c),
				b = Object(a.a)(o.b),
				p = Object(a.a)(o.a),
				f = Object(a.a)(o.f),
				h = Object(a.a)(o.e),
				g = Object(a.a)(o.d),
				_ = e => async (t, n, {
					gqlContext: i
				}) => {
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
							t === d.a.Push ? n(h(e)) : n(b(e))
						} else t === d.a.Push ? n(g({
							error: i.error
						})) : n(p({
							error: i.error
						}))
					}(i, e, t)
				};
			const x = Object(a.a)(o.g),
				y = e => async (t, n, {
					gqlContext: a
				}) => {
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
				e(x({
					isEnabled: t.isEnabled,
					messageType: t.messageType
				}))
			}
			const N = Object(a.a)(o.j),
				O = Object(a.a)(o.i),
				k = Object(a.a)(o.k),
				E = Object(a.a)(o.h),
				C = e => async (t, n, {
					gqlContext: i
				}) => {
					var a, o;
					t(N());
					const r = await ((e, t) => Object(c.a)(e, {
						...l,
						variables: t
					}))(i(), e);
					if (null === (o = null === (a = r.error) || void 0 === a ? void 0 : a.fields) || void 0 === o ? void 0 : o.length) return t(E({
						error: r.error
					})), void t(Object(s.d)());
					if (r.ok && r.body) {
						const e = r.body,
							n = e && e.data,
							i = n && n.identity && n.identity.subscribedSubreddits,
							a = i && i.pageInfo,
							o = (i && i.edges).map(e => e.node);
						t(O({
							nodes: o,
							pageInfo: a
						}))
					}
				}
		},
		"./src/reddit/actions/notifications/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "initializeServiceWorkerChannel", (function() {
				return E
			})), n.d(t, "requestNotificationsPermissions", (function() {
				return I
			})), n.d(t, "subscribeForPNs", (function() {
				return j
			})), n.d(t, "unsubscribeFromPNs", (function() {
				return w
			})), n.d(t, "requestBrowserNotificationPermissionPromptByUser", (function() {
				return S
			})), n.d(t, "subscribeToPermissionsChange", (function() {
				return P
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
				m = n("./src/reddit/actions/modal.ts"),
				b = n("./src/reddit/actions/notifications/utils.ts"),
				p = n("./src/reddit/actions/tabBadging.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/reddit/helpers/parseUrl.ts"),
				g = n("./src/reddit/helpers/tabBadging/index.ts"),
				_ = n("./src/reddit/helpers/trackers/notifications.ts"),
				x = n("./src/reddit/models/Toast/index.ts"),
				y = n("./src/reddit/constants/experiments.ts"),
				v = n("./src/reddit/helpers/chooseVariant/index.ts");
			var N = n("./src/reddit/selectors/meta.ts"),
				O = n("./src/reddit/selectors/user.ts");
			let k = !1;
			const E = async (e, t) => {
				const n = Object(O.N)(e);
				if (k) return;
				if (k = !0, Object(b.a)(e) !== l.c.NotificationsSupported) return;
				await Object(d.a)();
				navigator.serviceWorker.addEventListener("message", i => {
					const a = i.data,
						s = a.command || a.type;
					if ("registerWithServiceWorker" === s) C(e);
					else if (s === g.a && n) {
						const e = o()(a, ["command"]);
						t(Object(p.f)(e))
					} else if ("navigate.chat" === s) {
						const e = Object(h.a)(a.data.href);
						e && e.pathname && t(Object(u.c)(e.pathname))
					}
				}), C(e)
			}, C = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: _.c(e)
				})
			}, I = (e, t, n = (() => {})) => async (i, a, o) => {
				const r = a(),
					d = Object(N.f)(r),
					u = (e => Object(v.c)(e, {
						experimentName: y.Gb,
						experimentEligibilitySelector: v.a
					}) === y.bd)(r);
				if (await Object(s.a)() || d) return;
				await E(r, i);
				_.j(r), await Object(c.b)(e, t, () => {
					u || i(Object(l.o)()), i(Object(l.n)()), _.h(r)
				}, (e, t) => {
					i(Object(l.l)()), i(w(t ? l.a.Denied : l.a.Closed)), e && (t ? _.e(r) : _.f(r))
				}, e => {
					i(Object(l.m)()), i(j()), e && _.d(r)
				}, () => {
					i(Object(l.k)()), n()
				})
			}, j = e => async (t, n, a) => {
				const o = n();
				try {
					switch (await Object(r.b)(a.gqlContext)) {
						case r.a.Success:
							Object(b.b)(l.a.Granted), _.k(o), e && t(Object(f.f)({
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
			}, w = (e, t) => async n => {
				try {
					Object(b.b)(e);
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
			}, S = e => async (t, n) => {
				const i = n();
				if (Object(b.a)(i) === l.c.NotificationsSupported) switch (Object(c.a)()) {
					case l.a.Default:
					case l.a.Closed:
						await t(I(!0, !0));
						break;
					case l.a.Denied:
						t(Object(m.h)(e))
				}
			}, P = () => async (e, t) => {
				var n;
				if (!(null === (n = null === navigator || void 0 === navigator ? void 0 : navigator.permissions) || void 0 === n ? void 0 : n.query)) return;
				const i = t();
				if (Object(b.a)(i) !== l.c.NotificationsSupported) return;
				const a = await navigator.permissions.query({
					name: "notifications"
				});
				a.onchange = () => (t => {
					switch (t) {
						case l.a.Denied:
							e(w(l.a.Denied)), _.e(i);
							break;
						case l.a.Granted:
							e(j()), _.d(i);
							break;
						default:
							e(w(l.a.Default))
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
							r.ob(!1), Object(i.c)();
							break;
						case a.a.Default:
						case a.a.Granted:
							r.ob(!0), Object(i.c)();
							break;
						case a.a.Closed:
							r.ob(!0)
					}
				}
		},
		"./src/reddit/actions/pages/wrappedReddit.ts": function(e, t, n) {
			"use strict";
			var i = n("./src/lib/pageTitle/index.ts"),
				a = n("./src/reddit/actions/platform.ts");
			t.a = () => async e => {
				e(Object(a.m)({
					title: Object(i.p)()
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
			t.a = ({
				className: e,
				isActive: t,
				showEmpty: n,
				unreadCount: i
			}) => t ? a.a.createElement("span", {
				className: Object(o.a)(e, c.a.badgeCounter, {
					[c.a.mEmpty]: n || i < 1
				})
			}, n || i < 1 ? "" : Object(s.b)(i)) : null
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
			t.a = ({
				className: e,
				closeButtonText: t,
				closeIcon: n,
				descriptionText: i,
				primaryButtonText: d,
				titleText: m,
				onClose: b,
				onClick: p
			}) => {
				const f = Object(c.a)();
				return a.a.createElement("div", {
					className: Object(o.a)(u.a.banner, e)
				}, a.a.createElement("div", {
					className: u.a.bannerTitleContainer
				}, m && a.a.createElement("h4", {
					className: u.a.bannerTitle
				}, m), n && a.a.createElement(s.t, {
					onClick: e => {
						b && b(e), f(Object(r.o)({
							dnPromptAction: "dismiss"
						}))
					},
					Icon: Object(l.b)("close_fill"),
					className: Object(o.a)(u.a.closeIcon, u.a.closeButton),
					size: s.d.XXS,
					priority: s.c.Plain
				})), i && a.a.createElement("p", {
					className: u.a.bannerDescription
				}, i), a.a.createElement("div", {
					className: u.a.bannerButtonsContainer
				}, d && a.a.createElement(s.t, {
					text: d,
					priority: s.c.Tertiary,
					className: Object(o.a)(u.a.button, u.a.primaryButton),
					size: s.d.XS,
					onClick: e => {
						p && p(e), f(Object(r.o)({
							dnPromptAction: "cta"
						}))
					}
				}), t && a.a.createElement(s.t, {
					text: t,
					onClick: e => {
						b && b(e), f(Object(r.o)({
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
			const u = ({
				onClose: e,
				pageType: t
			}) => {
				const n = Object(c.a)(),
					a = i.fbt._("We’ve updated our {userAgreement} and {privacyPolicy}. Take a look, as the changes take effect September 12, 2021.", [i.fbt._param("userAgreement", o.a.createElement("a", {
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
					descriptionText: a,
					primaryButtonText: i.fbt._("Ok", null, {
						hk: "1IJxzv"
					}),
					onClick: i => {
						i.stopPropagation(), e(), n(Object(r.g)(t, r.a.Confirm))
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
				m = n("./node_modules/lodash/omit.js"),
				b = n.n(m),
				p = n("./src/reddit/components/InboxBanner/Banner.tsx"),
				f = n("./src/reddit/components/InboxBanner/index.m.less"),
				h = n.n(f);
			const g = ({
				onClose: e,
				onTurnOnBrowserNotifications: t
			}) => {
				return o.a.createElement(p.a, {
					className: h.a.dnPromptBanner,
					titleText: i.fbt._("Don’t miss out on updates — Turn on desktop notifications.", null, {
						hk: "10oNqB"
					}),
					onClose: t => {
						t.stopPropagation(), e()
					},
					closeIcon: !0,
					primaryButtonText: i.fbt._("Turn On", null, {
						hk: "3hywR9"
					}),
					closeButtonText: i.fbt._("No Thanks", null, {
						hk: "2GQOmV"
					}),
					onClick: n => {
						t(), e()
					}
				})
			};
			var _ = n("./node_modules/react-redux/es/index.js"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				y = n("./src/reddit/controls/InternalLink/index.tsx"),
				v = n("./src/reddit/helpers/trackers/hotPotato.ts"),
				N = n("./src/reddit/hooks/useTracking.ts"),
				O = n("./src/reddit/icons/fonts/index.tsx"),
				k = n("./src/reddit/icons/svgs/HotPotato/index.tsx"),
				E = n("./src/reddit/selectors/experiments/hotPotato.ts");
			const C = ({
				onClose: e
			}) => {
				const t = Object(_.e)(E.a),
					n = Object(N.a)(),
					s = Object(a.useCallback)(t => {
						e && e(t), n(Object(v.a)())
					}, [e, n]);
				return o.a.createElement("div", {
					className: Object(c.a)(h.a.banner, h.a.hotPotatoBanner)
				}, o.a.createElement(y.a, {
					to: `/r/${t}`,
					className: h.a.bannerContainer,
					onClick: s
				}, o.a.createElement("div", {
					className: h.a.bannerDataContainer
				}, o.a.createElement("div", {
					className: h.a.bannerTitleContainer
				}, o.a.createElement("h4", {
					className: h.a.bannerTitle
				}, i.fbt._("Hot Potato", null, {
					hk: "2ZAGPs"
				}))), o.a.createElement("p", {
					className: h.a.bannerDescription
				}, i.fbt._("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a pellentesque arcu.", null, {
					hk: "4c9NoJ"
				}))), o.a.createElement(k.a, {
					className: h.a.bannerImage
				})), o.a.createElement(x.t, {
					onClick: e,
					Icon: Object(O.b)("close_fill"),
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
				B = ({
					onClose: e
				}) => o.a.createElement("div", {
					className: Object(c.a)(h.a.banner, h.a.wrappedRedditBanner),
					style: P
				}, o.a.createElement(y.a, {
					to: S.b,
					className: h.a.bannerContainer,
					onClick: e
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
					onClick: e,
					Icon: Object(O.b)("close_fill"),
					className: Object(c.a)(h.a.closeIcon, h.a.closeButton),
					size: x.d.XXS,
					priority: x.c.Plain
				}));
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
						onItemClick: m
					} = this.props, b = r + 1 <= U;
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
						onItemClick: m,
						blockAwarder: s
					}), !!b && o.a.createElement(L.a, {
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
				G = "",
				V = 0,
				q = "200px",
				K = "250px",
				Q = "270px",
				J = 100,
				Z = .5,
				Y = 5,
				X = 50,
				$ = 55;
			class ee extends o.a.Component {
				constructor() {
					super(...arguments), this.container = o.a.createRef(), this.state = {
						notificationHeights: M,
						currentNotificationCursorIndex: -1
					}, this.resetOverflowMenu = () => {
						this.props.activeOverflowMenuId.length > V && this.props.setActiveOverflowMenuId(G)
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
						} = this.state, n = t + Y, i = n > e.length ? n : e.length - 1;
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
								notifications: a
							} = this.props,
							s = a.length > n + Y;
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
							const e = a.length > this.state.currentNotificationCursorIndex + Y;
							this.props.notifications.length > 0 && i && e ? this.updateCurrentCursorIndex() : t && n({
								after: t,
								first: Y
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
						showBrowserNotificationsPermissionSettings: m,
						isWrappedRedditBannerEnabled: b,
						setDesktopNotificationWrappedRedditBannerSeen: p,
						setHotPotatoBannerSeen: f
					} = this.props, h = !(!c || !c.length), _ = this.getContainerHeight(), x = c.length > this.state.currentNotificationCursorIndex + Y, y = i || t || b || n;
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
						onTurnOnBrowserNotifications: m,
						onClose: l
					}), b && o.a.createElement(B, {
						onClose: p
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
						threshold: Z
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
				le = ({
					isLoggedIn: e,
					onMessagesClick: t,
					onBarClick: n,
					markAllAsRead: s,
					messagesBadgeCount: r,
					sendInboxClickSettings: l
				}) => {
					const u = !!r,
						m = Object(a.useCallback)(() => {
							t(), n()
						}, [t, n]),
						b = Object(a.useCallback)(() => {
							l(), n()
						}, [l, n]);
					return o.a.createElement("nav", {
						className: A.a.topNav
					}, o.a.createElement("span", {
						className: A.a.topNavTitle
					}, i.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), e && o.a.createElement("span", {
						className: A.a.topNavLinks
					}, o.a.createElement("span", {
						className: A.a.messagesLinkContainer
					}, o.a.createElement(y.a, {
						className: Object(c.a)(A.a.messagesLink, {
							[A.a.mActive]: u
						}),
						onClick: m,
						to: u ? "/message/unread" : "/message/messages"
					}, i.fbt._("Messages", null, {
						hk: "hulKY"
					}), o.a.createElement(d.a, {
						className: A.a.badgeCount,
						isActive: u,
						unreadCount: r
					}))), o.a.createElement("button", {
						className: A.a.navLink,
						onClick: s
					}, o.a.createElement(O.a, {
						name: "mark_read",
						className: A.a.icon
					})), o.a.createElement(y.a, {
						className: A.a.navLink,
						onClick: b,
						to: "/settings/notifications"
					}, o.a.createElement(O.a, {
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
					const t = Object(N.a)(),
						{
							clearMessageTabBadgeCount: n,
							inboxBadgeCount: i,
							isPending: c,
							messagesBadgeCount: l,
							notifications: d,
							hideTooltip: u,
							isHotPotatoEnabled: m,
							isInboxPolicyBannerEnabled: b,
							isLoggedIn: p,
							isPushNotificationsSupported: f,
							isWrappedRedditBannerEnabled: h,
							userId: g
						} = e,
						[_, x] = function(e) {
							const [t, n] = Object(a.useState)(Object(ae.t)(e));
							return [t, Object(a.useCallback)(() => {
								n(!0), Object(ae.Db)(e)
							}, [])]
						}(g),
						[y, v] = Object(ie.a)(g),
						[O, k] = Object(oe.a)(g),
						[E, C] = function({
							key: e,
							userId: t
						}) {
							const [n, i] = Object(ne.a)(e, []);
							return [-1 !== n.indexOf(t), () => {
								i([...n, t])
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
							e.markAllAsRead(), t(Object(H.h)({
								isMiniInbox: !0
							}))
						},
						messagesBadgeCount: l,
						onMessagesClick: () => {
							t(Object(H.s)({
								badgeCount: i,
								tab: H.f.Messages
							})), t(Object(H.i)()), n()
						},
						sendInboxClickSettings: () => t(Object(H.n)(H.c.MiniInbox)),
						onBarClick: u,
						isLoggedIn: p
					}), o.a.createElement(ee, se({}, e, {
						isPending: c,
						onItemClick: u,
						setDesktopNotificationsPromptSeen: v,
						isDNInboxPromptBannerEnabled: S,
						isInboxPrivacyPolicyBannerEnabled: b && !O,
						setInboxPrivacyPolicyBannerSeen: k,
						isWrappedRedditBannerEnabled: h && !_,
						setDesktopNotificationWrappedRedditBannerSeen: () => {
							x(), t(Object(H.r)())
						},
						isHotPotatoEnabled: m && !E,
						setHotPotatoBannerSeen: C
					})), (I || c) && o.a.createElement(de, {
						sendInboxClickSeeAll: () => t(Object(H.m)()),
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
			const m = (e, t, n) => null != n ? n : t ? e : s.c.Plain,
				b = ({
					border: e,
					priority: t,
					small: n,
					...i
				}) => o.a.createElement(s.t, u({}, i, {
					priority: m(s.c.Primary, e, t),
					className: Object(d.a)(i.className, l.a.BaseButton),
					size: n ? s.d.S : s.d.M
				})),
				p = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
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
				f = ({
					buttonType: e,
					border: t,
					priority: n,
					small: i,
					...a
				}) => o.a.createElement(s.t, u({}, a, {
					priority: m(s.c.Secondary, t, n),
					className: Object(d.a)(a.className, l.a.BaseButton),
					size: i ? s.d.S : s.d.M,
					text: p(e)
				}));
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
					})) : o.a.createElement(b, u({}, l, {
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
			})), n.d(t, "u", (function() {
				return m
			})), n.d(t, "q", (function() {
				return b
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "s", (function() {
				return h
			})), n.d(t, "t", (function() {
				return g
			})), n.d(t, "w", (function() {
				return _
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "v", (function() {
				return y
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "l", (function() {
				return N
			})), n.d(t, "x", (function() {
				return O
			})), n.d(t, "p", (function() {
				return k
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "m", (function() {
				return C
			})), n.d(t, "i", (function() {
				return I
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "r", (function() {
				return S
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
			const m = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: i
				}) => a => ({
					...d.o(a),
					action: l.c.VIEW,
					noun: "inbox_notification",
					source: s.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: i
					}
				}),
				b = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: i,
					awardId: a
				}) => o => {
					Object(u.a)({
						...d.o(o),
						action: "receive",
						noun: "inbox_notification",
						source: s.Inbox,
						inbox: {
							id: e,
							isClicked: t,
							isViewed: n
						},
						notification: {
							type: i
						},
						goldPurchase: {
							awardId: a
						}
					})
				},
				p = ({
					dnPromptAction: e
				}) => t => ({
					...d.o(t),
					action: l.c.CLICK,
					noun: "inbox_banner",
					source: "inbox",
					banner: {
						id: "inbox_dn_banner"
					},
					actionInfo: {
						pageType: "dn_prompt",
						type: e
					}
				}),
				f = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: i,
					awardId: a,
					position: o,
					postId: r,
					subredditId: c
				}) => u => ({
					...d.o(u),
					action: l.c.CLICK,
					noun: "inbox_notification",
					source: s.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: i
					},
					goldPurchase: {
						awardId: a
					},
					actionInfo: {
						position: o
					},
					subreddit: c ? {
						id: c
					} : null,
					post: r ? {
						id: r
					} : null
				}),
				h = ({
					badgeCount: e,
					tab: t
				}) => n => ({
					...d.o(n),
					action: l.c.VIEW,
					noun: "inbox",
					source: s.Inbox,
					inbox: {
						badgeCount: e,
						tab: t
					}
				}),
				g = ({
					badgeCount: e,
					tab: t
				}) => t => ({
					...d.o(t),
					action: l.c.VIEW,
					noun: "mini_inbox",
					source: s.Inbox,
					inbox: {
						badgeCount: e,
						tab: i.Activity
					}
				}),
				_ = ({
					badgeCount: e
				}) => t => ({
					...d.o(t),
					action: l.c.CLICK,
					noun: "inbox",
					source: s.Nav,
					inbox: {
						badgeCount: e
					}
				}),
				x = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: i,
					awardId: a
				}) => o => ({
					...d.o(o),
					action: l.c.CLICK,
					noun: "inbox_notification_overflow",
					source: s.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: i
					},
					goldPurchase: {
						awardId: a
					}
				}),
				y = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: i
				}) => a => ({
					...d.o(a),
					action: l.c.VIEW,
					noun: "inbox_notification_overflow",
					source: s.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: i
					}
				});
			var v;
			! function(e) {
				e.Cats = "cats", e.Memes = "memes", e.Karma = "karma_free_subs", e.PN_perms = "pn_perms", e.Email_perms = "email_perms"
			}(v || (v = {}));
			const N = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: i,
					type: a
				}) => o => ({
					...d.o(o),
					action: l.c.CLICK,
					noun: "overflow_option",
					source: s.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: i
					},
					notification: {
						type: a
					},
					actionInfo: {
						...d.d(o),
						type: e
					}
				}),
				O = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: i,
					type: a
				}) => o => ({
					...d.o(o),
					action: l.c.UNDO,
					noun: "overflow_option",
					source: s.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: i
					},
					notification: {
						type: a
					},
					actionInfo: {
						...d.d(o),
						type: e
					}
				}),
				k = ({
					actionInfoType: e
				}) => t => ({
					...d.o(t),
					action: l.c.CLICK,
					noun: "empty_state_cta",
					source: s.Inbox,
					actionInfo: {
						...d.d(t),
						type: e
					}
				}),
				E = e => t => ({
					...d.o(t),
					action: l.c.CLICK,
					noun: "notification_app_settings",
					source: s.Inbox,
					actionInfo: {
						...d.d(t),
						pageType: e
					}
				}),
				C = () => e => ({
					...d.o(e),
					action: l.c.CLICK,
					noun: "see_all",
					source: s.Inbox,
					actionInfo: {
						...d.d(e),
						pageType: o.MiniInbox
					}
				}),
				I = () => e => ({
					...d.o(e),
					action: l.c.CLICK,
					noun: "messages",
					source: s.Inbox
				}),
				j = ({
					isMiniInbox: e
				}) => t => ({
					...d.o(t),
					action: l.c.CLICK,
					noun: "mark_all_as_read",
					source: s.Inbox,
					actionInfo: e ? {
						...d.d(t),
						pageType: o.MiniInbox
					} : {}
				}),
				w = (e, t) => n => ({
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
				S = () => e => ({
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
				return x
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "l", (function() {
				return N
			})), n.d(t, "m", (function() {
				return O
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
				m = e => {
					Object(a.a)({
						...r(e),
						action: o.c.Close,
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
					Object(a.a)({
						...b(e, !0),
						action: o.c.Request,
						source: "notification"
					})
				},
				f = e => {
					Object(a.a)({
						...b(e, !0),
						action: o.c.Register,
						source: "notification"
					})
				},
				h = (e, t) => {
					Object(a.a)({
						...b(e, !1, t),
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
				N = (e, t, n) => a => ({
					...i.o(a),
					action: "set_frequency",
					noun: n,
					source: "community_notifications",
					subreddit: {
						id: e,
						name: t.toLowerCase()
					}
				}),
				O = () => e => ({
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
					n(!0), Object(a.pb)(e)
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
				const [t, n] = Object(i.useState)(() => Object(a.w)(e));
				return [t, Object(i.useCallback)(() => {
					n(!0), Object(a.Bb)(e)
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
			var f = ({
					inTooltip: e,
					onBtnClick: t
				}) => {
					const n = {
						to: "/r/cats/top/",
						kind: u.b.InternalLink
					};
					return a.a.createElement("div", {
						className: Object(d.a)(b.a.emptyState, b.a.karmaView, {
							[b.a.inNotificationsPage]: !e
						})
					}, a.a.createElement("div", {
						className: Object(d.a)(b.a.catsImageWrapper, {
							[b.a.inTooltip]: e
						})
					}, a.a.createElement("img", {
						src: `${l.a.assetPath}/img/notifications/bottom_cat.png`,
						alt: c.fbt._("cats picture", null, {
							hk: "27dboq"
						}),
						className: Object(d.a)(b.a.cat, b.a.bottom)
					}), a.a.createElement("img", {
						src: `${l.a.assetPath}/img/notifications/top_cat.png`,
						alt: c.fbt._("cats picture", null, {
							hk: "27dboq"
						}),
						className: Object(d.a)(b.a.cat, b.a.top)
					}), a.a.createElement("img", {
						src: `${l.a.assetPath}/img/notifications/cloud.png`,
						alt: c.fbt._("cats picture", null, {
							hk: "45gHNS"
						}),
						className: b.a.cloud
					}), a.a.createElement("img", {
						src: `${l.a.assetPath}/img/notifications/yummy.png`,
						alt: c.fbt._("cats picture", null, {
							hk: "27dboq"
						}),
						className: b.a.yummy
					})), a.a.createElement("h1", {
						className: Object(d.a)(b.a.emptyTitle, {
							[b.a.inTooltip]: e
						})
					}, c.fbt._("You don’t have any activity yet", null, {
						hk: "2GNaV0"
					})), a.a.createElement("p", {
						className: b.a.emptyDescription
					}, c.fbt._("That’s ok, maybe you just need the right inspiration. Have you had your daily cat fix yet today?", null, {
						hk: "3tmgZE"
					})), a.a.createElement(u.t, p({
						className: b.a.emptyStateButton,
						onClick: t
					}, n), c.fbt._("See today’s Top Cats in r/cats", null, {
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
			const x = h.a.wrapped(_, "BellOutline", b.a),
				y = ({
					isBannerEnabled: e,
					isLoggedIn: t
				}) => {
					const n = Object(o.d)();
					return a.a.createElement("div", {
						className: Object(d.a)(b.a.emptyState, {
							[b.a.emptyStateWithBanner]: Boolean(e),
							[b.a.loggedOutState]: !t
						})
					}, a.a.createElement(x, null), a.a.createElement("h1", {
						className: b.a.emptyTitle
					}, c.fbt._("Be the first to know", null, {
						hk: "2mNJO0"
					})), a.a.createElement("p", {
						className: b.a.emptyDescription
					}, c.fbt._("This is where you get updates on your activity and recommendations", null, {
						hk: "27V2PG"
					})), !t && a.a.createElement("div", {
						className: b.a.emptyStateLoggedOutContainer
					}, a.a.createElement(u.j, {
						onClick: () => n(Object(g.i)())
					}, c.fbt._("Log In", null, {
						hk: "ZR3pC"
					})), a.a.createElement("span", {
						className: b.a.emptyStateDivider
					}), a.a.createElement(u.j, {
						onClick: () => n(Object(g.j)())
					}, c.fbt._("Sign Up", null, {
						hk: "3Jd0SI"
					}))))
				};
			var v = n("./src/reddit/controls/InternalLink/index.tsx");

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const O = ["r/somethingimade", "r/CasualConversation", "r/DoesAnybodyElse", "r/Old_Recipes"][Math.floor(100 * Math.random()) % 4];
			var k = ({
				inTooltip: e,
				isPopular: t,
				onBtnClick: n
			}) => {
				const i = t ? "r/popular" : O,
					o = `/${i}`,
					s = {
						to: o,
						kind: u.b.InternalLink
					},
					r = a.a.createElement(v.a, {
						to: o,
						target: "_blank",
						rel: "noopener noreferrer",
						className: b.a.subredditLinkR,
						onClick: n
					}, i);
				return a.a.createElement("div", {
					className: Object(d.a)(b.a.emptyState, b.a.karmaView, {
						[b.a.inNotificationsPage]: !e
					})
				}, a.a.createElement("img", {
					src: `${l.a.assetPath}/img/wrappedreddit/default_avatar.png`,
					alt: c.fbt._("default user avatar", null, {
						hk: "1VMTKf"
					}),
					className: Object(d.a)(b.a.avatarImage, {
						[b.a.inTooltip]: e
					})
				}), a.a.createElement("h1", {
					className: Object(d.a)(b.a.emptyTitle, {
						[b.a.inTooltip]: e
					})
				}, c.fbt._("You don’t have any activity yet", null, {
					hk: "2hf6yn"
				})), a.a.createElement("p", {
					className: b.a.emptyDescription
				}, t ? c.fbt._("That’s ok, maybe you just need the right inspiration. Try browsing {Link: to r/popular}, for new communities to join.", [c.fbt._param("Link: to r/popular", r)], {
					hk: "VSBWM"
				}) : c.fbt._("That’s ok, maybe you just need the right inspiration. Try posting in {Link: to popular subreddit} , a popular community for discussion.", [c.fbt._param("Link: to popular subreddit", r)], {
					hk: "1WOK4T"
				})), a.a.createElement(u.t, N({
					className: b.a.emptyStateButton,
					onClick: n,
					text: `Visit ${i}`
				}, s)))
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
			var I = ({
					inTooltip: e,
					onBtnClick: t
				}) => {
					const n = {
						to: "/r/memes/top/",
						kind: u.b.InternalLink
					};
					return a.a.createElement("div", {
						className: Object(d.a)(b.a.emptyState, b.a.karmaView, {
							[b.a.inNotificationsPage]: !e
						})
					}, a.a.createElement("div", {
						className: Object(d.a)(b.a.memesImageWrapper, {
							[b.a.inTooltip]: e
						})
					}, a.a.createElement("img", {
						src: `${l.a.assetPath}/img/notifications/shrek.png`,
						alt: c.fbt._("memes picture", null, {
							hk: "3e3S9E"
						}),
						className: b.a.shrek
					}), a.a.createElement("img", {
						src: `${l.a.assetPath}${C}`,
						alt: c.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(d.a)(b.a.star, b.a.inBottom)
					}), a.a.createElement("img", {
						src: `${l.a.assetPath}${C}`,
						alt: c.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(d.a)(b.a.star, b.a.inCenter)
					}), a.a.createElement("img", {
						src: `${l.a.assetPath}${C}`,
						alt: c.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(d.a)(b.a.star, b.a.inTop)
					})), a.a.createElement("h1", {
						className: Object(d.a)(b.a.emptyTitle, {
							[b.a.inTooltip]: e
						})
					}, c.fbt._("You don’t have any activity yet", null, {
						hk: "2GNaV0"
					})), a.a.createElement("p", {
						className: b.a.emptyDescription
					}, c.fbt._("That’s ok, maybe you just need the right inspiration. Let’s get some more lolz in your life.", null, {
						hk: "10HMFI"
					})), a.a.createElement(u.t, E({
						className: b.a.emptyStateButton,
						onClick: t
					}, n), c.fbt._("See today’s Top Memes in r/Memes", null, {
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
			var M = ({
					inTooltip: e,
					isBannerEnabled: t,
					isLoggedIn: n,
					onBtnClick: r,
					hideTooltip: m
				}) => {
					const p = Object(o.d)(),
						f = Object(o.e)(F.n),
						h = Object(o.e)(F.C),
						g = Object(i.useRef)(f),
						[_, x] = Object(i.useState)(z.TURN_ON_PN),
						v = Object(o.e)(e => e.user.accountSettings.changeEmail.api.pending),
						N = Object(i.useCallback)(() => {
							p(async (e, t) => {
								var n, i;
								let a = Object(F.db)(t());
								a.allIds.length || await e(Object(T.a)(A.a.Email));
								const o = null === (i = null === (n = (a = Object(F.db)(t())).byId) || void 0 === n ? void 0 : n.EMAIL_DIGEST) || void 0 === i ? void 0 : i.isEnabled;
								x(o ? z.DONE : z.TURN_ON_DAYLY_DIGEST)
							})
						}, [p]),
						O = Object(i.useCallback)(() => {
							h ? N() : x(z.VERIFY_EMAIL)
						}, [h, N]),
						k = Object(i.useCallback)(() => {
							p(async (e, t) => {
								const n = t();
								Object(F.fb)(n).allIds.length || await e(Object(T.a)(A.a.Push)), Object(D.c)(t(), W) ? x(z.TURN_ON_PN_APP) : O()
							})
						}, [p, O]),
						E = Object(i.useCallback)(() => {
							(() => Object(j.a)() === w.a.Granted)() ? k(): x(z.TURN_ON_PN)
						}, [k]),
						C = Object(i.useCallback)(() => {
							r(s.b.Email_perms)(), e && m && m(), p(Object(P.h)(R.a))
						}, [p, r, e, m]);
					if (Object(i.useEffect)(() => {
							E()
						}, [E]), Object(i.useEffect)(() => {
							if (f !== g.current && _ === z.VERIFY_EMAIL) {
								const e = Object(L.e)(c.fbt._("Email successfully updated!", null, {
									hk: "3iPlUp"
								}), U.b.SuccessCommunityGreen);
								p(Object(L.f)(e)), N()
							}
						}, [f, _, N]), Object(i.useEffect)(() => {
							v && p(Object(P.g)(R.a))
						}, [v, p]), _ === z.DONE) return a.a.createElement(y, {
						isLoggedIn: n,
						isBannerEnabled: t
					});
					const I = {
							to: "/settings/notifications",
							kind: u.b.InternalLink,
							onClick: _ === z.TURN_ON_PN_APP ? r(s.b.PN_perms) : r(s.b.Email_perms)
						},
						S = {
							onClick: _ === z.TURN_ON_PN ? async () => {
								r(s.b.PN_perms)(), e && m && m(), await p(Object(B.requestBrowserNotificationPermissionPromptByUser)(R.f)), E()
							} : C
						},
						M = _ === z.TURN_ON_PN || _ === z.TURN_ON_PN_APP,
						G = _ === z.TURN_ON_PN_APP || _ === z.TURN_ON_DAYLY_DIGEST;
					return a.a.createElement("div", {
						className: Object(d.a)(b.a.emptyState, b.a.karmaView, {
							[b.a.inNotificationsPage]: !e
						})
					}, a.a.createElement("img", {
						src: `${l.a.assetPath}/img/wrappedreddit/default_avatar.png`,
						alt: c.fbt._("default user avatar", null, {
							hk: "1VMTKf"
						}),
						className: Object(d.a)(b.a.avatarImage, {
							[b.a.inTooltip]: e
						})
					}), a.a.createElement("h1", {
						className: Object(d.a)(b.a.emptyTitle, {
							[b.a.inTooltip]: e
						})
					}, M ? c.fbt._("Turn on notifications", null, {
						hk: "3qFpFu"
					}) : c.fbt._("Turn on email digest", null, {
						hk: "obBF8"
					})), a.a.createElement("p", {
						className: b.a.emptyDescription
					}, M ? c.fbt._("Stay in the loop on content from communities you love right on your phone.", null, {
						hk: "1gwnbO"
					}) : c.fbt._("Stay in the loop on content from communities you love right on your email inbox.", null, {
						hk: "1rs4kD"
					})), a.a.createElement(u.t, H({
						className: b.a.emptyStateButton
					}, G ? I : S, {
						text: c.fbt._("OK", null, {
							hk: "rhf0"
						})
					})))
				},
				G = n("./src/reddit/selectors/experiments/notifications.ts");
			t.a = ({
				isBannerEnabled: e,
				isLoggedIn: t,
				inTooltip: n,
				hideTooltip: i
			}) => {
				const c = Object(r.a)(),
					l = e => () => c(Object(s.p)({
						actionInfoType: e
					})),
					d = Object(o.e)(G.b),
					u = Object(o.e)(G.c),
					m = Object(o.e)(G.d),
					b = Object(o.e)(G.a),
					p = Object(o.e)(G.e);
				return d || p ? a.a.createElement(k, {
					inTooltip: n,
					isPopular: p,
					onBtnClick: l(s.b.Karma)
				}) : u ? a.a.createElement(I, {
					inTooltip: n,
					onBtnClick: l(s.b.Memes)
				}) : m ? a.a.createElement(M, {
					isBannerEnabled: e,
					isLoggedIn: t,
					inTooltip: n,
					onBtnClick: l,
					hideTooltip: i
				}) : b ? a.a.createElement(f, {
					inTooltip: n,
					onBtnClick: l(s.b.Cats)
				}) : a.a.createElement(y, {
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
				return m
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "a", (function() {
				return p
			}));
			var i = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/components/InboxTooltip/Component.tsx"),
				o = n("./src/reddit/models/SubredditModeration/index.ts"),
				s = n("./src/reddit/selectors/user.ts");
			const r = (e, {
					subredditId: t
				}) => e.features.banned.models[t],
				c = (e, {
					subredditId: t,
					username: n
				}) => {
					const i = Object(s.wb)(e, {
						userName: n
					});
					if (!i) return;
					const a = r(e, {
						subredditId: t
					});
					return a ? a[i.id] : void 0
				},
				l = Object(i.a)((e, {
					subredditId: t
				}) => {
					const n = e.features.banned.userOrder[t];
					return n ? n.map(n => e.features.banned.models[t][n]) : a.a
				}),
				d = (e, {
					subredditId: t
				}) => {
					const n = Object(o.e)(t);
					return e.features.banned.api.pending[n]
				},
				u = (e, {
					subredditId: t
				}) => e.features.banned.loadMore[t],
				m = e => e.features.banned.search.api.pending,
				b = e => e.features.banned.search.result,
				p = e => e.features.banned.inContext
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
					experimentName: i.nb
				}) === i.id.Karma,
				s = e => Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: i.nb
				}) === i.id.Memes,
				r = e => Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: i.nb
				}) === i.id.PnEmail,
				c = e => Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: i.nb
				}) === i.id.Cats,
				l = e => Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: i.nb
				}) === i.id.Popular,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard~Reddit.5ca664a2613f5ba70b55.js.map