// https://www.redditstatic.com/desktop2x/AuthorHovercard~Reddit.3cccdd608beb01528012.js
// Retrieved at 3/14/2022, 11:50:05 AM by Reddit Dataminer v1.0.0
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
				return d
			})), n.d(t, "b", (function() {
				return l
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
				d = () => !!Object(o.a)() && (localStorage.removeItem(s.f), !0),
				l = async (e, t, n, r, d, l) => {
					const u = c();
					if (u === s.a.Unsupported) return void l();
					if (Object(o.a)()) {
						const t = localStorage.getItem(s.h),
							n = (new Date).getTime();
						if (!e && t && parseInt(t) + s.i > n) return void l();
						localStorage.setItem(s.h, n.toString())
					}
					if (!t && u === s.a.Denied) return r(!1, !0), void l();
					if (!t && u === s.a.Granted) return d(!1), void l();
					if (!t && u === s.a.Closed) return void l();
					let b = s.a.Default;
					const p = navigator.userAgent;
					switch (Object(a.b)(p) || Object(a.f)(p) ? Object(i.a)(1800).then(() => {
						b === s.a.Default && n()
					}) : n(), b = await Notification.requestPermission()) {
						case "granted":
							d(!0);
							break;
						case "denied":
							r(!0, !0);
							break;
						case "default":
							l();
							break;
						default:
							r(!0, !1), localStorage.setItem(s.f, s.g)
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
			var d;
			! function(e) {
				e[e.Success = 0] = "Success", e[e.FailedGeneric = 1] = "FailedGeneric", e[e.FailedResponse = 2] = "FailedResponse", e[e.FailedGqlReponse = 3] = "FailedGqlReponse", e[e.FailedNoServiceWorker = 4] = "FailedNoServiceWorker", e[e.FailedNoSubscription = 5] = "FailedNoSubscription"
			}(d || (d = {}));
			const l = async e => {
				try {
					const t = await Object(s.a)();
					if (!t) return d.FailedNoServiceWorker;
					let n = await t.pushManager.getSubscription();
					if (!n) {
						const e = {
							userVisibleOnly: !0,
							applicationServerKey: c(i.a.pushNotificationApplicationServerKey)
						};
						n = await t.pushManager.subscribe(e)
					}
					if (!n) return d.FailedNoSubscription;
					const l = await ((e, t) => {
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
				return x
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
				d = n("./src/redditGQL/operations/UserSubredditsNotificationsLevel.json");
			var l = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const b = Object(a.a)(o.c),
				p = Object(a.a)(o.b),
				m = Object(a.a)(o.a),
				f = Object(a.a)(o.f),
				h = Object(a.a)(o.e),
				g = Object(a.a)(o.d),
				_ = e => async (t, n, {
					gqlContext: i
				}) => {
					e === l.a.Push ? t(f()) : t(b()), await async function(e, t, n) {
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
							t === l.a.Push ? n(h(e)) : n(p(e))
						} else t === l.a.Push ? n(g({
							error: i.error
						})) : n(m({
							error: i.error
						}))
					}(i, e, t)
				};
			const y = Object(a.a)(o.g),
				x = e => async (t, n, {
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
				e(y({
					isEnabled: t.isEnabled,
					messageType: t.messageType
				}))
			}
			const O = Object(a.a)(o.j),
				N = Object(a.a)(o.i),
				k = Object(a.a)(o.k),
				I = Object(a.a)(o.h),
				C = e => async (t, n, {
					gqlContext: i
				}) => {
					var a, o;
					t(O());
					const r = await ((e, t) => Object(c.a)(e, {
						...d,
						variables: t
					}))(i(), e);
					if (null === (o = null === (a = r.error) || void 0 === a ? void 0 : a.fields) || void 0 === o ? void 0 : o.length) return t(I({
						error: r.error
					})), void t(Object(s.d)());
					if (r.ok && r.body) {
						const e = r.body,
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
				return I
			})), n.d(t, "requestNotificationsPermissions", (function() {
				return j
			})), n.d(t, "subscribeForPNs", (function() {
				return E
			})), n.d(t, "unsubscribeFromPNs", (function() {
				return w
			})), n.d(t, "requestBrowserNotificationPermissionPromptByUser", (function() {
				return S
			})), n.d(t, "subscribeToPermissionsChange", (function() {
				return B
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/omit.js"),
				o = n.n(a),
				s = n("./src/lib/browser/isIncognito.ts"),
				r = n("./src/lib/notifications/token.ts"),
				c = n("./src/lib/notifications/index.ts"),
				d = n("./src/lib/notifications/constants.ts"),
				l = n("./src/lib/serviceWorker/index.ts"),
				u = n("./src/reddit/actions/chat/toggle.ts"),
				b = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/actions/notifications/utils.ts"),
				m = n("./src/reddit/actions/tabBadging.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/reddit/helpers/parseUrl.ts"),
				g = n("./src/reddit/helpers/tabBadging/index.ts"),
				_ = n("./src/reddit/helpers/trackers/notifications.ts"),
				y = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/constants/experiments.ts"),
				v = n("./src/reddit/helpers/chooseVariant/index.ts");
			var O = n("./src/reddit/selectors/meta.ts"),
				N = n("./src/reddit/selectors/user.ts");
			let k = !1;
			const I = async (e, t) => {
				const n = Object(N.N)(e);
				if (k) return;
				if (k = !0, Object(p.a)(e) !== d.c.NotificationsSupported) return;
				await Object(l.a)();
				navigator.serviceWorker.addEventListener("message", i => {
					const a = i.data,
						s = a.command || a.type;
					if ("registerWithServiceWorker" === s) C(e);
					else if (s === g.a && n) {
						const e = o()(a, ["command"]);
						t(Object(m.f)(e))
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
			}, j = (e, t, n = (() => {})) => async (i, a, o) => {
				const r = a(),
					l = Object(O.f)(r),
					u = (e => Object(v.c)(e, {
						experimentName: x.Fb,
						experimentEligibilitySelector: v.a
					}) === x.Zc)(r);
				if (await Object(s.a)() || l) return;
				await I(r, i);
				_.j(r), await Object(c.b)(e, t, () => {
					u || i(Object(d.o)()), i(Object(d.n)()), _.h(r)
				}, (e, t) => {
					i(Object(d.l)()), i(w(t ? d.a.Denied : d.a.Closed)), e && (t ? _.e(r) : _.f(r))
				}, e => {
					i(Object(d.m)()), i(E()), e && _.d(r)
				}, () => {
					i(Object(d.k)()), n()
				})
			}, E = e => async (t, n, a) => {
				const o = n();
				try {
					switch (await Object(r.b)(a.gqlContext)) {
						case r.a.Success:
							Object(p.b)(d.a.Granted), _.k(o), e && t(Object(f.f)({
								kind: y.b.SuccessCommunity,
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
					Object(p.b)(e);
					const a = await Object(l.a)();
					if (a) {
						const e = await a.pushManager.getSubscription();
						e && (e.unsubscribe(), t && n(Object(f.f)({
							kind: y.b.SuccessCommunity,
							text: i.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						})))
					}
				} catch (a) {}
			}, S = e => async (t, n) => {
				const i = n();
				if (Object(p.a)(i) === d.c.NotificationsSupported) switch (Object(c.a)()) {
					case d.a.Default:
					case d.a.Closed:
						await t(j(!0, !0));
						break;
					case d.a.Denied:
						t(Object(b.h)(e))
				}
			}, B = () => async (e, t) => {
				var n;
				if (!(null === (n = null === navigator || void 0 === navigator ? void 0 : navigator.permissions) || void 0 === n ? void 0 : n.query)) return;
				const i = t();
				if (Object(p.a)(i) !== d.c.NotificationsSupported) return;
				const a = await navigator.permissions.query({
					name: "notifications"
				});
				a.onchange = () => (t => {
					switch (t) {
						case d.a.Denied:
							e(w(d.a.Denied)), _.e(i);
							break;
						case d.a.Granted:
							e(E()), _.d(i);
							break;
						default:
							e(w(d.a.Default))
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
			var i = n("./src/lib/notifications/index.ts"),
				a = n("./src/lib/notifications/constants.ts"),
				o = n("./src/lib/notifications/featureFlags.ts"),
				s = n("./src/reddit/featureFlags/index.ts"),
				r = n("./src/reddit/helpers/localStorage/index.ts");
			const c = e => s.d.pushNotificationsBrowserSupported(e) ? Object(o.a)() : a.c.BrowserUnsupported,
				d = e => {
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
				return d
			})), n.d(t, "g", (function() {
				return l
			}));
			var i = n("./src/lib/loadableAction/index.ts");
			const a = Object(i.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairChanged)),
				o = Object(i.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleUserFlairInSubreddit)),
				s = Object(i.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleAssignOwnFlairPermission)),
				r = Object(i.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.saveUserFlairTemplate)),
				c = Object(i.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.deleteUserFlairTemplate)),
				d = Object(i.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.reorderUserFlairTemplates)),
				l = Object(i.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairLoadedAndModalOpened))
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
				d = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/components/InboxBanner/index.m.less"),
				u = n.n(l);
			t.a = ({
				className: e,
				closeButtonText: t,
				closeIcon: n,
				descriptionText: i,
				primaryButtonText: l,
				titleText: b,
				onClose: p,
				onClick: m
			}) => {
				const f = Object(c.a)();
				return a.a.createElement("div", {
					className: Object(o.a)(u.a.banner, e)
				}, a.a.createElement("div", {
					className: u.a.bannerTitleContainer
				}, b && a.a.createElement("h4", {
					className: u.a.bannerTitle
				}, b), n && a.a.createElement(s.t, {
					onClick: e => {
						p && p(e), f(Object(r.o)({
							dnPromptAction: "dismiss"
						}))
					},
					Icon: Object(d.b)("close_fill"),
					className: Object(o.a)(u.a.closeIcon, u.a.closeButton),
					size: s.d.XXS,
					priority: s.c.Plain
				})), i && a.a.createElement("p", {
					className: u.a.bannerDescription
				}, i), a.a.createElement("div", {
					className: u.a.bannerButtonsContainer
				}, l && a.a.createElement(s.t, {
					text: l,
					priority: s.c.Tertiary,
					className: Object(o.a)(u.a.button, u.a.primaryButton),
					size: s.d.XS,
					onClick: e => {
						m && m(e), f(Object(r.o)({
							dnPromptAction: "cta"
						}))
					}
				}), t && a.a.createElement(s.t, {
					text: t,
					onClick: e => {
						p && p(e), f(Object(r.o)({
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
				d = n("./src/reddit/components/InboxBanner/index.m.less"),
				l = n.n(d);
			const u = ({
				onClose: e,
				pageType: t
			}) => {
				const n = Object(c.a)(),
					a = i.fbt._("We’ve updated our {userAgreement} and {privacyPolicy}. Take a look, as the changes take effect September 12, 2021.", [i.fbt._param("userAgreement", o.a.createElement("a", {
						className: l.a.underlineLink,
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "User Agreement")), i.fbt._param("privacyPolicy", o.a.createElement("a", {
						className: l.a.underlineLink,
						href: "https://www.redditinc.com/policies/privacy-policy",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "Privacy Policy"))], {
						hk: "3bGC4g"
					});
				return o.a.createElement(s.a, {
					className: l.a.policyBanner,
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
				return ee
			})), n.d(t, "b", (function() {
				return ae
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/lib/notifications/index.ts"),
				r = n("./src/lib/notifications/constants.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/BadgeCounter/index.tsx"),
				u = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				b = n("./node_modules/lodash/omit.js"),
				p = n.n(b),
				m = n("./src/reddit/components/InboxBanner/Banner.tsx"),
				f = n("./src/reddit/components/InboxBanner/index.m.less"),
				h = n.n(f);
			const g = ({
				onClose: e,
				onTurnOnBrowserNotifications: t
			}) => {
				return o.a.createElement(m.a, {
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
			var _ = n("./src/reddit/components/InboxBanner/PolicyBanner.tsx"),
				y = n("./src/config.ts"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/controls/InternalLink/index.tsx"),
				O = n("./src/reddit/icons/fonts/index.tsx"),
				N = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				k = n("./src/reddit/routes/wrappedreddit/index.ts");
			const I = {
					background: `url(${y.a.assetPath}/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png)`,
					backgroundSize: "cover"
				},
				C = ({
					onClose: e
				}) => o.a.createElement("div", {
					className: Object(c.a)(h.a.banner, h.a.wrappedRedditBanner),
					style: I
				}, o.a.createElement(v.a, {
					to: k.b,
					className: h.a.bannerContainer,
					onClick: e
				}, o.a.createElement("div", {
					className: h.a.bannerDataContainer
				}, o.a.createElement("div", {
					className: h.a.bannerTitleContainer
				}, o.a.createElement(N.a, {
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
					src: `${y.a.assetPath}/img/wrappedreddit/defaultcard/main_artwork_YIR@2x.png`
				})), o.a.createElement(x.t, {
					onClick: e,
					Icon: Object(O.b)("close_fill"),
					className: Object(c.a)(h.a.closeIcon, h.a.closeButton),
					size: x.d.XXS,
					priority: x.c.Plain
				}));
			var j = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				E = n("./src/reddit/components/ResizeSensor/index.tsx"),
				w = n("./src/reddit/components/InboxTooltip/index.m.less"),
				S = n.n(w);
			const B = 3;
			class P extends o.a.Component {
				constructor() {
					super(...arguments), this.ref = o.a.createRef(), this.handleResize = () => {
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
						hideSubredditNotifications: a,
						blockAwarder: s,
						index: r,
						isInboxPostEmbedEnabled: c,
						markNotificationAsRead: d,
						notification: l,
						setActiveOverflowMenuId: u,
						onItemClick: b
					} = this.props, p = r + 1 <= B;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						ref: this.ref,
						className: S.a.notificationResizeWrapper
					}, o.a.createElement(j.a, {
						activeOverflowMenuId: e,
						decreaseSubredditNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: i,
						hideSubredditNotifications: a,
						isInboxPostEmbedEnabled: c,
						isInTooltip: !0,
						markNotificationAsRead: d,
						notification: l,
						setActiveOverflowMenuId: u,
						onItemClick: b,
						blockAwarder: s
					}), !!p && o.a.createElement(E.a, {
						onResize: this.handleResize
					})))
				}
			}
			var T = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				L = n("./src/reddit/helpers/trackers/inbox.ts"),
				R = n("./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/EmptyStateComponent.tsx");

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const U = {},
				D = "",
				F = 0,
				W = "200px",
				H = "250px",
				M = "270px",
				G = 100,
				V = .5,
				z = 5,
				q = 50,
				K = 55;
			class Q extends o.a.Component {
				constructor() {
					super(...arguments), this.container = o.a.createRef(), this.state = {
						notificationHeights: U,
						currentNotificationCursorIndex: -1
					}, this.resetOverflowMenu = () => {
						this.props.activeOverflowMenuId.length > F && this.props.setActiveOverflowMenuId(D)
					}, this.getContainerHeight = () => {
						const {
							notificationHeights: e
						} = this.state, {
							isDNInboxPromptBannerEnabled: t,
							isInboxPrivacyPolicyBannerEnabled: n,
							isLoggedIn: i
						} = this.props, a = t || n, o = window.innerHeight - q - 2 * K - (a ? G : 0);
						let s = 0;
						for (const r in e) s += e[r];
						return 0 === s ? a ? H : i ? W : M : (a && (s += G), o < s && (s = o + (a ? G : 0)), s)
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
						} = this.state, n = t + z, i = n > e.length ? n : e.length - 1;
						this.setState({
							currentNotificationCursorIndex: i
						})
					}, this.renderNotifications = () => {
						const e = p()(this.props, ["notifications"]),
							{
								notificationHeights: t,
								currentNotificationCursorIndex: n
							} = this.state,
							{
								isInboxInfiniteScrollEnabled: i,
								notifications: a
							} = this.props,
							s = a.length > n + z;
						return (i && a.length > 0 && s ? a.slice(0, n + 1) : a).map((n, i) => o.a.createElement(P, A({}, e, {
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
							const e = a.length > this.state.currentNotificationCursorIndex + z;
							this.props.notifications.length > 0 && i && e ? this.updateCurrentCursorIndex() : t && n({
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
						isInboxInfiniteScrollEnabled: i,
						isLoggedIn: a,
						isPending: s,
						notifications: r,
						setDesktopNotificationsPromptSeen: c,
						setInboxPrivacyPolicyBannerSeen: d,
						showBrowserNotificationsPermissionSettings: l,
						isWrappedRedditBannerEnabled: b,
						setDesktopNotificationWrappedRedditBannerSeen: p
					} = this.props, m = !(!r || !r.length), f = this.getContainerHeight(), h = r.length > this.state.currentNotificationCursorIndex + z, y = n || t || b;
					return o.a.createElement("div", {
						className: S.a.notificationList,
						ref: this.container,
						style: m ? {
							height: f,
							maxHeight: f
						} : {
							minHeight: W
						}
					}, y && o.a.createElement("div", {
						className: S.a.notificationBannerContainer
					}, n && o.a.createElement(_.a, {
						onClose: d,
						pageType: L.c.MiniInbox
					}), t && o.a.createElement(g, {
						onTurnOnBrowserNotifications: l,
						onClose: c
					}), b && o.a.createElement(C, {
						onClose: p
					})), !m && s && o.a.createElement(T.a, null), !m && !s && o.a.createElement(R.a, {
						isBannerEnabled: y,
						isLoggedIn: a,
						inTooltip: !0,
						hideTooltip: this.props.onItemClick
					}), m && this.renderNotifications(), i && m && !s && (e || h) && o.a.createElement(u.a, {
						onChange: this.loadNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: V
					}, o.a.createElement("div", null)))
				}
			}
			var J = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts"),
				Z = n("./src/reddit/helpers/localStorage/index.ts");
			var Y = n("./src/reddit/hooks/useInboxPrivacyPolicyBannerSeen.ts"),
				X = n("./src/reddit/hooks/useTracking.ts");

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = [],
				te = d.a.div("StyledDropdown", S.a),
				ne = ({
					isLoggedIn: e,
					onMessagesClick: t,
					onBarClick: n,
					markAllAsRead: s,
					messagesBadgeCount: r,
					sendInboxClickSettings: d
				}) => {
					const u = !!r,
						b = Object(a.useCallback)(() => {
							t(), n()
						}, [t, n]),
						p = Object(a.useCallback)(() => {
							d(), n()
						}, [d, n]);
					return o.a.createElement("nav", {
						className: S.a.topNav
					}, o.a.createElement("span", {
						className: S.a.topNavTitle
					}, i.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), e && o.a.createElement("span", {
						className: S.a.topNavLinks
					}, o.a.createElement("span", {
						className: S.a.messagesLinkContainer
					}, o.a.createElement(v.a, {
						className: Object(c.a)(S.a.messagesLink, {
							[S.a.mActive]: u
						}),
						onClick: b,
						to: u ? "/message/unread" : "/message/messages"
					}, i.fbt._("Messages", null, {
						hk: "hulKY"
					}), o.a.createElement(l.a, {
						className: S.a.badgeCount,
						isActive: u,
						unreadCount: r
					}))), o.a.createElement("button", {
						className: S.a.navLink,
						onClick: s
					}, o.a.createElement(O.a, {
						name: "mark_read",
						className: S.a.icon
					})), o.a.createElement(v.a, {
						className: S.a.navLink,
						onClick: p,
						to: "/settings/notifications"
					}, o.a.createElement(O.a, {
						name: "settings",
						className: S.a.icon
					}))))
				},
				ie = e => o.a.createElement("div", {
					className: S.a.bottomBar
				}, o.a.createElement(v.a, {
					className: S.a.bottomLink,
					onClick: () => {
						e.sendInboxClickSeeAll(), e.onBarClick()
					},
					to: "/notifications"
				}, i.fbt._("See All", null, {
					hk: "3L3tFc"
				}))),
				ae = e => {
					const t = Object(X.a)(),
						{
							clearMessageTabBadgeCount: n,
							inboxBadgeCount: i,
							isPending: c,
							messagesBadgeCount: d,
							notifications: l,
							hideTooltip: u,
							isInboxPolicyBannerEnabled: b,
							isLoggedIn: p,
							isPushNotificationsSupported: m,
							isWrappedRedditBannerEnabled: f,
							userId: h
						} = e,
						[g, _] = function(e) {
							const [t, n] = Object(a.useState)(Object(Z.t)(e));
							return [t, Object(a.useCallback)(() => {
								n(!0), Object(Z.Db)(e)
							}, [])]
						}(h),
						[y, x] = Object(J.a)(h),
						[v, O] = Object(Y.a)(h),
						N = !(!l || !l.length),
						k = Object(s.a)(),
						I = k === r.a.Closed || k === r.a.Default || k === r.a.Denied,
						C = m && I && !y;
					return o.a.createElement(te, null, o.a.createElement("div", {
						className: S.a.tooltipContainer
					}, o.a.createElement(ne, {
						markAllAsRead: () => {
							e.markAllAsRead(), t(Object(L.h)({
								isMiniInbox: !0
							}))
						},
						messagesBadgeCount: d,
						onMessagesClick: () => {
							t(Object(L.s)({
								badgeCount: i,
								tab: L.f.Messages
							})), t(Object(L.i)()), n()
						},
						sendInboxClickSettings: () => t(Object(L.n)(L.c.MiniInbox)),
						onBarClick: u,
						isLoggedIn: p
					}), o.a.createElement(Q, $({}, e, {
						isPending: c,
						onItemClick: u,
						setDesktopNotificationsPromptSeen: x,
						isDNInboxPromptBannerEnabled: C,
						isInboxPrivacyPolicyBannerEnabled: b && !v,
						setInboxPrivacyPolicyBannerSeen: O,
						isWrappedRedditBannerEnabled: f && !g,
						setDesktopNotificationWrappedRedditBannerSeen: () => {
							_(), t(Object(L.r)())
						}
					})), (N || c) && o.a.createElement(ie, {
						sendInboxClickSeeAll: () => t(Object(L.m)()),
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
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const b = (e, t, n) => null != n ? n : t ? e : s.c.Plain,
				p = ({
					border: e,
					priority: t,
					small: n,
					...i
				}) => o.a.createElement(s.t, u({}, i, {
					priority: b(s.c.Primary, e, t),
					className: Object(l.a)(i.className, d.a.BaseButton),
					size: n ? s.d.S : s.d.M
				})),
				m = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? i.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : i.fbt._("Following", null, {
					hk: "1wQlVR"
				})), o.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
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
					priority: b(s.c.Secondary, t, n),
					className: Object(l.a)(a.className, d.a.BaseButton),
					size: i ? s.d.S : s.d.M,
					text: m(e)
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
					} = this.props, d = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: i,
						small: a,
						isFullWidth: s,
						style: c
					};
					return this.props.userIsSubscriber ? o.a.createElement(f, u({}, d, {
						buttonType: this.props.identifier.type
					})) : o.a.createElement(p, u({}, d, {
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
				return b
			})), n.d(t, "q", (function() {
				return p
			})), n.d(t, "o", (function() {
				return m
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "s", (function() {
				return h
			})), n.d(t, "t", (function() {
				return g
			})), n.d(t, "w", (function() {
				return _
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "v", (function() {
				return x
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "x", (function() {
				return N
			})), n.d(t, "p", (function() {
				return k
			})), n.d(t, "n", (function() {
				return I
			})), n.d(t, "m", (function() {
				return C
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "r", (function() {
				return S
			}));
			var i, a, o, s, r, c, d = n("./src/reddit/constants/tracking.ts"),
				l = n("./src/reddit/selectors/telemetry.ts"),
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
			const b = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: i
				}) => a => ({
					...l.o(a),
					action: d.c.VIEW,
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
				p = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: i,
					awardId: a
				}) => o => {
					Object(u.a)({
						...l.o(o),
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
				m = ({
					dnPromptAction: e
				}) => t => ({
					...l.o(t),
					action: d.c.CLICK,
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
					...l.o(u),
					action: d.c.CLICK,
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
					...l.o(n),
					action: d.c.VIEW,
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
					...l.o(t),
					action: d.c.VIEW,
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
					...l.o(t),
					action: d.c.CLICK,
					noun: "inbox",
					source: s.Nav,
					inbox: {
						badgeCount: e
					}
				}),
				y = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: i,
					awardId: a
				}) => o => ({
					...l.o(o),
					action: d.c.CLICK,
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
				x = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: i
				}) => a => ({
					...l.o(a),
					action: d.c.VIEW,
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
			const O = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: i,
					type: a
				}) => o => ({
					...l.o(o),
					action: d.c.CLICK,
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
						...l.d(o),
						type: e
					}
				}),
				N = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: i,
					type: a
				}) => o => ({
					...l.o(o),
					action: d.c.UNDO,
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
						...l.d(o),
						type: e
					}
				}),
				k = ({
					actionInfoType: e
				}) => t => ({
					...l.o(t),
					action: d.c.CLICK,
					noun: "empty_state_cta",
					source: s.Inbox,
					actionInfo: {
						...l.d(t),
						type: e
					}
				}),
				I = e => t => ({
					...l.o(t),
					action: d.c.CLICK,
					noun: "notification_app_settings",
					source: s.Inbox,
					actionInfo: {
						...l.d(t),
						pageType: e
					}
				}),
				C = () => e => ({
					...l.o(e),
					action: d.c.CLICK,
					noun: "see_all",
					source: s.Inbox,
					actionInfo: {
						...l.d(e),
						pageType: o.MiniInbox
					}
				}),
				j = () => e => ({
					...l.o(e),
					action: d.c.CLICK,
					noun: "messages",
					source: s.Inbox
				}),
				E = ({
					isMiniInbox: e
				}) => t => ({
					...l.o(t),
					action: d.c.CLICK,
					noun: "mark_all_as_read",
					source: s.Inbox,
					actionInfo: e ? {
						...l.d(t),
						pageType: o.MiniInbox
					} : {}
				}),
				w = (e, t) => n => ({
					...l.o(n),
					action: d.c.CLICK,
					noun: "policy_banner",
					source: s.Inbox,
					actionInfo: {
						...l.d(n),
						pageType: e,
						type: t
					}
				}),
				S = () => e => ({
					...l.o(e),
					action: d.c.CLICK,
					noun: "inbox_banner",
					source: s.Inbox,
					actionInfo: {
						...l.d(e),
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
				return b
			})), n.d(t, "j", (function() {
				return m
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
				d = e => {
					Object(a.a)({
						...r(e),
						action: o.c.View,
						source: "popup"
					})
				},
				l = e => {
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
				b = e => {
					Object(a.a)({
						...r(e),
						action: o.c.Close,
						source: "popup"
					})
				},
				p = (e, t, n) => ({
					...i.o(e),
					actionInfo: i.d(e, {
						success: t,
						reason: n
					}),
					noun: "push_token"
				}),
				m = e => {
					Object(a.a)({
						...p(e, !0),
						action: o.c.Request,
						source: "notification"
					})
				},
				f = e => {
					Object(a.a)({
						...p(e, !0),
						action: o.c.Register,
						source: "notification"
					})
				},
				h = (e, t) => {
					Object(a.a)({
						...p(e, !1, t),
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
				d = n("./src/config.ts"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/index.m.less"),
				p = n.n(b);

			function m() {
				return (m = Object.assign || function(e) {
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
						className: Object(l.a)(p.a.emptyState, p.a.karmaView, {
							[p.a.inNotificationsPage]: !e
						})
					}, a.a.createElement("div", {
						className: Object(l.a)(p.a.catsImageWrapper, {
							[p.a.inTooltip]: e
						})
					}, a.a.createElement("img", {
						src: `${d.a.assetPath}/img/notifications/bottom_cat.png`,
						alt: c.fbt._("cats picture", null, {
							hk: "27dboq"
						}),
						className: Object(l.a)(p.a.cat, p.a.bottom)
					}), a.a.createElement("img", {
						src: `${d.a.assetPath}/img/notifications/top_cat.png`,
						alt: c.fbt._("cats picture", null, {
							hk: "27dboq"
						}),
						className: Object(l.a)(p.a.cat, p.a.top)
					}), a.a.createElement("img", {
						src: `${d.a.assetPath}/img/notifications/cloud.png`,
						alt: c.fbt._("cats picture", null, {
							hk: "45gHNS"
						}),
						className: p.a.cloud
					}), a.a.createElement("img", {
						src: `${d.a.assetPath}/img/notifications/yummy.png`,
						alt: c.fbt._("cats picture", null, {
							hk: "27dboq"
						}),
						className: p.a.yummy
					})), a.a.createElement("h1", {
						className: Object(l.a)(p.a.emptyTitle, {
							[p.a.inTooltip]: e
						})
					}, c.fbt._("You don’t have any activity yet", null, {
						hk: "2GNaV0"
					})), a.a.createElement("p", {
						className: p.a.emptyDescription
					}, c.fbt._("That’s ok, maybe you just need the right inspiration. Have you had your daily cat fix yet today?", null, {
						hk: "3tmgZE"
					})), a.a.createElement(u.t, m({
						className: p.a.emptyStateButton,
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
			const y = h.a.wrapped(_, "BellOutline", p.a),
				x = ({
					isBannerEnabled: e,
					isLoggedIn: t
				}) => {
					const n = Object(o.d)();
					return a.a.createElement("div", {
						className: Object(l.a)(p.a.emptyState, {
							[p.a.emptyStateWithBanner]: Boolean(e),
							[p.a.loggedOutState]: !t
						})
					}, a.a.createElement(y, null), a.a.createElement("h1", {
						className: p.a.emptyTitle
					}, c.fbt._("Be the first to know", null, {
						hk: "2mNJO0"
					})), a.a.createElement("p", {
						className: p.a.emptyDescription
					}, c.fbt._("This is where you get updates on your activity and recommendations", null, {
						hk: "27V2PG"
					})), !t && a.a.createElement("div", {
						className: p.a.emptyStateLoggedOutContainer
					}, a.a.createElement(u.j, {
						onClick: () => n(Object(g.i)())
					}, c.fbt._("Log In", null, {
						hk: "ZR3pC"
					})), a.a.createElement("span", {
						className: p.a.emptyStateDivider
					}), a.a.createElement(u.j, {
						onClick: () => n(Object(g.j)())
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
			var k = ({
				inTooltip: e,
				isPopular: t,
				onBtnClick: n
			}) => {
				const i = t ? "r/popular" : N,
					o = `/${i}`,
					s = {
						to: o,
						kind: u.b.InternalLink
					},
					r = a.a.createElement(v.a, {
						to: o,
						target: "_blank",
						rel: "noopener noreferrer",
						className: p.a.subredditLinkR,
						onClick: n
					}, i);
				return a.a.createElement("div", {
					className: Object(l.a)(p.a.emptyState, p.a.karmaView, {
						[p.a.inNotificationsPage]: !e
					})
				}, a.a.createElement("img", {
					src: `${d.a.assetPath}/img/wrappedreddit/default_avatar.png`,
					alt: c.fbt._("default user avatar", null, {
						hk: "1VMTKf"
					}),
					className: Object(l.a)(p.a.avatarImage, {
						[p.a.inTooltip]: e
					})
				}), a.a.createElement("h1", {
					className: Object(l.a)(p.a.emptyTitle, {
						[p.a.inTooltip]: e
					})
				}, c.fbt._("You don’t have any activity yet", null, {
					hk: "2hf6yn"
				})), a.a.createElement("p", {
					className: p.a.emptyDescription
				}, t ? c.fbt._("That’s ok, maybe you just need the right inspiration. Try browsing {Link: to r/popular}, for new communities to join.", [c.fbt._param("Link: to r/popular", r)], {
					hk: "VSBWM"
				}) : c.fbt._("That’s ok, maybe you just need the right inspiration. Try posting in {Link: to popular subreddit} , a popular community for discussion.", [c.fbt._param("Link: to popular subreddit", r)], {
					hk: "1WOK4T"
				})), a.a.createElement(u.t, O({
					className: p.a.emptyStateButton,
					onClick: n,
					text: `Visit ${i}`
				}, s)))
			};

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const C = "/img/notifications/star.png";
			var j = ({
					inTooltip: e,
					onBtnClick: t
				}) => {
					const n = {
						to: "/r/memes/top/",
						kind: u.b.InternalLink
					};
					return a.a.createElement("div", {
						className: Object(l.a)(p.a.emptyState, p.a.karmaView, {
							[p.a.inNotificationsPage]: !e
						})
					}, a.a.createElement("div", {
						className: Object(l.a)(p.a.memesImageWrapper, {
							[p.a.inTooltip]: e
						})
					}, a.a.createElement("img", {
						src: `${d.a.assetPath}/img/notifications/shrek.png`,
						alt: c.fbt._("memes picture", null, {
							hk: "3e3S9E"
						}),
						className: p.a.shrek
					}), a.a.createElement("img", {
						src: `${d.a.assetPath}${C}`,
						alt: c.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(l.a)(p.a.star, p.a.inBottom)
					}), a.a.createElement("img", {
						src: `${d.a.assetPath}${C}`,
						alt: c.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(l.a)(p.a.star, p.a.inCenter)
					}), a.a.createElement("img", {
						src: `${d.a.assetPath}${C}`,
						alt: c.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(l.a)(p.a.star, p.a.inTop)
					})), a.a.createElement("h1", {
						className: Object(l.a)(p.a.emptyTitle, {
							[p.a.inTooltip]: e
						})
					}, c.fbt._("You don’t have any activity yet", null, {
						hk: "2GNaV0"
					})), a.a.createElement("p", {
						className: p.a.emptyDescription
					}, c.fbt._("That’s ok, maybe you just need the right inspiration. Let’s get some more lolz in your life.", null, {
						hk: "10HMFI"
					})), a.a.createElement(u.t, I({
						className: p.a.emptyStateButton,
						onClick: t
					}, n), c.fbt._("See today’s Top Memes in r/Memes", null, {
						hk: "42zwJz"
					})))
				},
				E = n("./src/lib/notifications/index.ts"),
				w = n("./src/lib/notifications/constants.ts"),
				S = n("./src/redditGQL/types.ts"),
				B = n("./src/reddit/actions/modal.ts"),
				P = n("./src/reddit/actions/notifications/index.ts"),
				T = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				L = n("./src/reddit/actions/toaster.ts"),
				R = n("./src/reddit/components/Settings/modalIds.ts"),
				A = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				U = n("./src/reddit/models/Toast/index.ts"),
				D = n("./src/reddit/selectors/notificationPrefs.ts"),
				F = n("./src/reddit/selectors/user.ts");

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const H = [S.h.PrivateMessage, S.h.ChatMessage, S.h.ChatRequest, S.h.UsernameMention, S.h.PostReply, S.h.UpvotePost, S.h.UpvoteComment, S.h.CommentReply, S.h.ThreadReplies, S.h.TopLevelComment, S.h.NewPostActivity, S.h.UserNewFollower, S.h.PostFlairAdded, S.h.UserFlairAdded, S.h.NewPinnedPost, S.h.AwardReceived, S.h.PostFollow, S.h.TalkLive, S.h.CommentFollow, S.h.LifecyclePostSuggestions, S.h.BroadcastRecommendation, S.h.SubredditRecommendation, S.h.RedditLore, S.h.OneOff, S.h.CakeDay, S.h.ModeratedSrEngagement];
			var M;
			! function(e) {
				e[e.TURN_ON_PN = 0] = "TURN_ON_PN", e[e.TURN_ON_PN_APP = 1] = "TURN_ON_PN_APP", e[e.VERIFY_EMAIL = 2] = "VERIFY_EMAIL", e[e.TURN_ON_DAYLY_DIGEST = 3] = "TURN_ON_DAYLY_DIGEST", e[e.DONE = 4] = "DONE"
			}(M || (M = {}));
			var G = ({
					inTooltip: e,
					isBannerEnabled: t,
					isLoggedIn: n,
					onBtnClick: r,
					hideTooltip: b
				}) => {
					const m = Object(o.d)(),
						f = Object(o.e)(F.n),
						h = Object(o.e)(F.C),
						g = Object(i.useRef)(f),
						[_, y] = Object(i.useState)(M.TURN_ON_PN),
						v = Object(o.e)(e => e.user.accountSettings.changeEmail.api.pending),
						O = Object(i.useCallback)(() => {
							m(async (e, t) => {
								var n, i;
								let a = Object(F.db)(t());
								a.allIds.length || await e(Object(T.a)(A.a.Email));
								const o = null === (i = null === (n = (a = Object(F.db)(t())).byId) || void 0 === n ? void 0 : n.EMAIL_DIGEST) || void 0 === i ? void 0 : i.isEnabled;
								y(o ? M.DONE : M.TURN_ON_DAYLY_DIGEST)
							})
						}, [m]),
						N = Object(i.useCallback)(() => {
							h ? O() : y(M.VERIFY_EMAIL)
						}, [h, O]),
						k = Object(i.useCallback)(() => {
							m(async (e, t) => {
								const n = t();
								Object(F.fb)(n).allIds.length || await e(Object(T.a)(A.a.Push)), Object(D.c)(t(), H) ? y(M.TURN_ON_PN_APP) : N()
							})
						}, [m, N]),
						I = Object(i.useCallback)(() => {
							(() => Object(E.a)() === w.a.Granted)() ? k(): y(M.TURN_ON_PN)
						}, [k]),
						C = Object(i.useCallback)(() => {
							r(s.b.Email_perms)(), e && b && b(), m(Object(B.h)(R.a))
						}, [m, r, e, b]);
					if (Object(i.useEffect)(() => {
							I()
						}, [I]), Object(i.useEffect)(() => {
							if (f !== g.current && _ === M.VERIFY_EMAIL) {
								const e = Object(L.e)(c.fbt._("Email successfully updated!", null, {
									hk: "3iPlUp"
								}), U.b.SuccessCommunityGreen);
								m(Object(L.f)(e)), O()
							}
						}, [f, _, O]), Object(i.useEffect)(() => {
							v && m(Object(B.g)(R.a))
						}, [v, m]), _ === M.DONE) return a.a.createElement(x, {
						isLoggedIn: n,
						isBannerEnabled: t
					});
					const j = {
							to: "/settings/notifications",
							kind: u.b.InternalLink,
							onClick: _ === M.TURN_ON_PN_APP ? r(s.b.PN_perms) : r(s.b.Email_perms)
						},
						S = {
							onClick: _ === M.TURN_ON_PN ? async () => {
								r(s.b.PN_perms)(), e && b && b(), await m(Object(P.requestBrowserNotificationPermissionPromptByUser)(R.f)), I()
							} : C
						},
						G = _ === M.TURN_ON_PN || _ === M.TURN_ON_PN_APP,
						V = _ === M.TURN_ON_PN_APP || _ === M.TURN_ON_DAYLY_DIGEST;
					return a.a.createElement("div", {
						className: Object(l.a)(p.a.emptyState, p.a.karmaView, {
							[p.a.inNotificationsPage]: !e
						})
					}, a.a.createElement("img", {
						src: `${d.a.assetPath}/img/wrappedreddit/default_avatar.png`,
						alt: c.fbt._("default user avatar", null, {
							hk: "1VMTKf"
						}),
						className: Object(l.a)(p.a.avatarImage, {
							[p.a.inTooltip]: e
						})
					}), a.a.createElement("h1", {
						className: Object(l.a)(p.a.emptyTitle, {
							[p.a.inTooltip]: e
						})
					}, G ? c.fbt._("Turn on notifications", null, {
						hk: "3qFpFu"
					}) : c.fbt._("Turn on email digest", null, {
						hk: "obBF8"
					})), a.a.createElement("p", {
						className: p.a.emptyDescription
					}, G ? c.fbt._("Stay in the loop on content from communities you love right on your phone.", null, {
						hk: "1gwnbO"
					}) : c.fbt._("Stay in the loop on content from communities you love right on your email inbox.", null, {
						hk: "1rs4kD"
					})), a.a.createElement(u.t, W({
						className: p.a.emptyStateButton
					}, V ? j : S, {
						text: c.fbt._("OK", null, {
							hk: "rhf0"
						})
					})))
				},
				V = n("./src/reddit/selectors/experiments/notifications.ts");
			t.a = ({
				isBannerEnabled: e,
				isLoggedIn: t,
				inTooltip: n,
				hideTooltip: i
			}) => {
				const c = Object(r.a)(),
					d = e => () => c(Object(s.p)({
						actionInfoType: e
					})),
					l = Object(o.e)(V.b),
					u = Object(o.e)(V.c),
					b = Object(o.e)(V.d),
					p = Object(o.e)(V.a),
					m = Object(o.e)(V.e);
				return l || m ? a.a.createElement(k, {
					inTooltip: n,
					isPopular: m,
					onBtnClick: d(s.b.Karma)
				}) : u ? a.a.createElement(j, {
					inTooltip: n,
					onBtnClick: d(s.b.Memes)
				}) : b ? a.a.createElement(G, {
					isBannerEnabled: e,
					isLoggedIn: t,
					inTooltip: n,
					onBtnClick: d,
					hideTooltip: i
				}) : p ? a.a.createElement(f, {
					inTooltip: n,
					onBtnClick: d(s.b.Cats)
				}) : a.a.createElement(x, {
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
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "a", (function() {
				return m
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
				d = Object(i.a)((e, {
					subredditId: t
				}) => {
					const n = e.features.banned.userOrder[t];
					return n ? n.map(n => e.features.banned.models[t][n]) : a.a
				}),
				l = (e, {
					subredditId: t
				}) => {
					const n = Object(o.e)(t);
					return e.features.banned.api.pending[n]
				},
				u = (e, {
					subredditId: t
				}) => e.features.banned.loadMore[t],
				b = e => e.features.banned.search.api.pending,
				p = e => e.features.banned.search.result,
				m = e => e.features.banned.inContext
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
				return d
			})), n.d(t, "f", (function() {
				return l
			}));
			var i = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: i.mb
				}) === i.gd.Karma,
				s = e => Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: i.mb
				}) === i.gd.Memes,
				r = e => Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: i.mb
				}) === i.gd.PnEmail,
				c = e => Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: i.mb
				}) === i.gd.Cats,
				d = e => Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: i.mb
				}) === i.gd.Popular,
				l = e => d(e) || c(e) || r(e) || s(e) || o(e)
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
				return d
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard~Reddit.3cccdd608beb01528012.js.map