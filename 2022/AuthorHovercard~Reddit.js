// https://www.redditstatic.com/desktop2x/AuthorHovercard~Reddit.b9cfe81c810f5e743016.js
// Retrieved at 3/8/2022, 2:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard~Reddit"], {
		"./src/lib/browser/isIncognito.ts": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/constants/index.ts");
			const i = 120 * a.hb;
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
		"./src/lib/notifications/token.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			}));
			var a = n("./src/config.ts"),
				i = n("./src/redditGQL/operations/RegisterWebPushToken.json"),
				s = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/lib/serviceWorker/index.ts"),
				r = n("./src/lib/timezone/index.ts"),
				c = e => {
					const t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"),
						n = window.atob(t),
						a = new Uint8Array(n.length);
					for (let i = 0; i < n.length; ++i) a[i] = n.charCodeAt(i);
					return a
				};
			var l;
			! function(e) {
				e[e.Success = 0] = "Success", e[e.FailedGeneric = 1] = "FailedGeneric", e[e.FailedResponse = 2] = "FailedResponse", e[e.FailedGqlReponse = 3] = "FailedGqlReponse", e[e.FailedNoServiceWorker = 4] = "FailedNoServiceWorker", e[e.FailedNoSubscription = 5] = "FailedNoSubscription"
			}(l || (l = {}));
			const d = async e => {
				try {
					const t = await Object(o.a)();
					if (!t) return l.FailedNoServiceWorker;
					let n = await t.pushManager.getSubscription();
					if (!n) {
						const e = {
							userVisibleOnly: !0,
							applicationServerKey: c(a.a.pushNotificationApplicationServerKey)
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
						return Object(s.a)(e(), {
							...i,
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
		"./src/reddit/actions/notifications/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "initializeServiceWorkerChannel", (function() {
				return E
			})), n.d(t, "requestNotificationsPermissions", (function() {
				return C
			})), n.d(t, "subscribeForPNs", (function() {
				return I
			})), n.d(t, "unsubscribeFromPNs", (function() {
				return w
			})), n.d(t, "requestBrowserNotificationPermissionPromptByUser", (function() {
				return P
			})), n.d(t, "subscribeToPermissionsChange", (function() {
				return S
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/lodash/omit.js"),
				s = n.n(i),
				o = n("./src/lib/browser/isIncognito.ts"),
				r = n("./src/lib/notifications/token.ts"),
				c = n("./src/lib/notifications/index.ts"),
				l = n("./src/lib/notifications/constants.ts"),
				d = n("./src/lib/serviceWorker/index.ts"),
				u = n("./src/reddit/actions/chat/toggle.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/actions/notifications/utils.ts"),
				b = n("./src/reddit/actions/tabBadging.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/reddit/helpers/parseUrl.ts"),
				g = n("./src/reddit/helpers/tabBadging/index.ts"),
				_ = n("./src/reddit/helpers/trackers/notifications.ts"),
				x = n("./src/reddit/models/Toast/index.ts"),
				N = n("./src/reddit/constants/experiments.ts"),
				v = n("./src/reddit/helpers/chooseVariant/index.ts");
			var y = n("./src/reddit/selectors/meta.ts"),
				O = n("./src/reddit/selectors/user.ts");
			let k = !1;
			const E = async (e, t) => {
				const n = Object(O.N)(e);
				if (k) return;
				if (k = !0, Object(p.a)(e) !== l.c.NotificationsSupported) return;
				await Object(d.a)();
				navigator.serviceWorker.addEventListener("message", a => {
					const i = a.data,
						o = i.command || i.type;
					if ("registerWithServiceWorker" === o) j(e);
					else if (o === g.a && n) {
						const e = s()(i, ["command"]);
						t(Object(b.f)(e))
					} else if ("navigate.chat" === o) {
						const e = Object(h.a)(i.data.href);
						e && e.pathname && t(Object(u.c)(e.pathname))
					}
				}), j(e)
			}, j = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: _.c(e)
				})
			}, C = (e, t, n = (() => {})) => async (a, i, s) => {
				const r = i(),
					d = Object(y.f)(r),
					u = (e => Object(v.c)(e, {
						experimentName: N.Fb,
						experimentEligibilitySelector: v.a
					}) === N.Zc)(r);
				if (await Object(o.a)() || d) return;
				await E(r, a);
				_.j(r), await Object(c.b)(e, t, () => {
					u || a(Object(l.o)()), a(Object(l.n)()), _.h(r)
				}, (e, t) => {
					a(Object(l.l)()), a(w(t ? l.a.Denied : l.a.Closed)), e && (t ? _.e(r) : _.f(r))
				}, e => {
					a(Object(l.m)()), a(I()), e && _.d(r)
				}, () => {
					a(Object(l.k)()), n()
				})
			}, I = e => async (t, n, i) => {
				const s = n();
				try {
					switch (await Object(r.b)(i.gqlContext)) {
						case r.a.Success:
							Object(p.b)(l.a.Granted), _.k(s), e && t(Object(f.f)({
								kind: x.b.SuccessCommunity,
								text: a.fbt._("Changes saved", null, {
									hk: "wGH5U"
								})
							}));
							break;
						case r.a.FailedResponse:
							_.i(s, "registration_failed_generally");
							break;
						case r.a.FailedGqlReponse:
							_.i(s, "registration_failed_in_gql")
					}
				} catch (o) {
					_.i(s, "registration_failed_uncaught_exception"), console.error(o)
				}
			}, w = (e, t) => async n => {
				try {
					Object(p.b)(e);
					const i = await Object(d.a)();
					if (i) {
						const e = await i.pushManager.getSubscription();
						e && (e.unsubscribe(), t && n(Object(f.f)({
							kind: x.b.SuccessCommunity,
							text: a.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						})))
					}
				} catch (i) {}
			}, P = e => async (t, n) => {
				const a = n();
				if (Object(p.a)(a) === l.c.NotificationsSupported) switch (Object(c.a)()) {
					case l.a.Default:
					case l.a.Closed:
						await t(C(!0, !0));
						break;
					case l.a.Denied:
						t(Object(m.h)(e))
				}
			}, S = () => async (e, t) => {
				var n;
				if (!(null === (n = null === navigator || void 0 === navigator ? void 0 : navigator.permissions) || void 0 === n ? void 0 : n.query)) return;
				const a = t();
				if (Object(p.a)(a) !== l.c.NotificationsSupported) return;
				const i = await navigator.permissions.query({
					name: "notifications"
				});
				i.onchange = () => (t => {
					switch (t) {
						case l.a.Denied:
							e(w(l.a.Denied)), _.e(a);
							break;
						case l.a.Granted:
							e(I()), _.d(a);
							break;
						default:
							e(w(l.a.Default))
					}
				})(i.state)
			}
		},
		"./src/reddit/actions/pages/wrappedReddit.ts": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/pageTitle/index.ts"),
				i = n("./src/reddit/actions/platform.ts");
			t.a = () => async e => {
				e(Object(i.m)({
					title: Object(a.p)()
				}))
			}
		},
		"./src/reddit/actions/userFlair/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return i
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "g", (function() {
				return d
			}));
			var a = n("./src/lib/loadableAction/index.ts");
			const i = Object(a.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairChanged)),
				s = Object(a.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleUserFlairInSubreddit)),
				o = Object(a.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleAssignOwnFlairPermission)),
				r = Object(a.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.saveUserFlairTemplate)),
				c = Object(a.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.deleteUserFlairTemplate)),
				l = Object(a.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.reorderUserFlairTemplates)),
				d = Object(a.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairLoadedAndModalOpened))
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
				i = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				r = n("./src/reddit/components/BadgeCounter/index.m.less"),
				c = n.n(r);
			t.a = ({
				className: e,
				isActive: t,
				showEmpty: n,
				unreadCount: a
			}) => t ? i.a.createElement("span", {
				className: Object(s.a)(e, c.a.badgeCounter, {
					[c.a.mEmpty]: n || a < 1
				})
			}, n || a < 1 ? "" : Object(o.b)(a)) : null
		},
		"./src/reddit/components/InboxBanner/Banner.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				i = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				r = n("./src/reddit/helpers/trackers/inbox.ts"),
				c = n("./src/reddit/hooks/useTracking.ts"),
				l = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/components/InboxBanner/index.m.less"),
				u = n.n(d);
			t.a = ({
				className: e,
				closeButtonText: t,
				closeIcon: n,
				descriptionText: a,
				primaryButtonText: d,
				titleText: m,
				onClose: p,
				onClick: b
			}) => {
				const f = Object(c.a)();
				return i.a.createElement("div", {
					className: Object(s.a)(u.a.banner, e)
				}, i.a.createElement("div", {
					className: u.a.bannerTitleContainer
				}, m && i.a.createElement("h4", {
					className: u.a.bannerTitle
				}, m), n && i.a.createElement(o.t, {
					onClick: e => {
						p && p(e), f(Object(r.o)({
							dnPromptAction: "dismiss"
						}))
					},
					Icon: Object(l.b)("close_fill"),
					className: Object(s.a)(u.a.closeIcon, u.a.closeButton),
					size: o.d.XXS,
					priority: o.c.Plain
				})), a && i.a.createElement("p", {
					className: u.a.bannerDescription
				}, a), i.a.createElement("div", {
					className: u.a.bannerButtonsContainer
				}, d && i.a.createElement(o.t, {
					text: d,
					priority: o.c.Tertiary,
					className: Object(s.a)(u.a.button, u.a.primaryButton),
					size: o.d.XS,
					onClick: e => {
						b && b(e), f(Object(r.o)({
							dnPromptAction: "cta"
						}))
					}
				}), t && i.a.createElement(o.t, {
					text: t,
					onClick: e => {
						p && p(e), f(Object(r.o)({
							dnPromptAction: "refuse"
						}))
					},
					priority: o.c.Plain,
					size: o.d.XS,
					className: Object(s.a)(u.a.button, u.a.closeButton)
				})))
			}
		},
		"./src/reddit/components/InboxBanner/PolicyBanner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				s = n.n(i),
				o = n("./src/reddit/components/InboxBanner/Banner.tsx"),
				r = n("./src/reddit/helpers/trackers/inbox.ts"),
				c = n("./src/reddit/hooks/useTracking.ts"),
				l = n("./src/reddit/components/InboxBanner/index.m.less"),
				d = n.n(l);
			const u = ({
				onClose: e,
				pageType: t
			}) => {
				const n = Object(c.a)(),
					i = a.fbt._("We’ve updated our {userAgreement} and {privacyPolicy}. Take a look, as the changes take effect September 12, 2021.", [a.fbt._param("userAgreement", s.a.createElement("a", {
						className: d.a.underlineLink,
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "User Agreement")), a.fbt._param("privacyPolicy", s.a.createElement("a", {
						className: d.a.underlineLink,
						href: "https://www.redditinc.com/policies/privacy-policy",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "Privacy Policy"))], {
						hk: "3bGC4g"
					});
				return s.a.createElement(o.a, {
					className: d.a.policyBanner,
					titleText: a.fbt._("Reddit’s User Agreement & Privacy Policy", null, {
						hk: "32fxCY"
					}),
					descriptionText: i,
					primaryButtonText: a.fbt._("Ok", null, {
						hk: "1IJxzv"
					}),
					onClick: a => {
						a.stopPropagation(), e(), n(Object(r.g)(t, r.a.Confirm))
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
				return ie
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				s = n.n(i),
				o = n("./src/lib/notifications/index.ts"),
				r = n("./src/lib/notifications/constants.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/BadgeCounter/index.tsx"),
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
			var _ = n("./src/reddit/components/InboxBanner/PolicyBanner.tsx"),
				x = n("./src/config.ts"),
				N = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/controls/InternalLink/index.tsx"),
				y = n("./src/reddit/icons/fonts/index.tsx"),
				O = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				k = n("./src/reddit/routes/wrappedreddit/index.ts");
			const E = {
					background: `url(${x.a.assetPath}/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png)`,
					backgroundSize: "cover"
				},
				j = ({
					onClose: e
				}) => s.a.createElement("div", {
					className: Object(c.a)(h.a.banner, h.a.wrappedRedditBanner),
					style: E
				}, s.a.createElement(v.a, {
					to: k.b,
					className: h.a.bannerContainer,
					onClick: e
				}, s.a.createElement("div", {
					className: h.a.bannerDataContainer
				}, s.a.createElement("div", {
					className: h.a.bannerTitleContainer
				}, s.a.createElement(O.a, {
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
				})), s.a.createElement(N.t, {
					onClick: e,
					Icon: Object(y.b)("close_fill"),
					className: Object(c.a)(h.a.closeIcon, h.a.closeButton),
					size: N.d.XXS,
					priority: N.c.Plain
				}));
			var C = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				I = n("./src/reddit/components/ResizeSensor/index.tsx"),
				w = n("./src/reddit/components/InboxTooltip/index.m.less"),
				P = n.n(w);
			const S = 3;
			class B extends s.a.Component {
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
						hideNotification: a,
						hideSubredditNotifications: i,
						blockAwarder: o,
						index: r,
						isInboxPostEmbedEnabled: c,
						markNotificationAsRead: l,
						notification: d,
						setActiveOverflowMenuId: u,
						onItemClick: m
					} = this.props, p = r + 1 <= S;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						ref: this.ref,
						className: P.a.notificationResizeWrapper
					}, s.a.createElement(C.a, {
						activeOverflowMenuId: e,
						decreaseSubredditNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: a,
						hideSubredditNotifications: i,
						isInboxPostEmbedEnabled: c,
						isInTooltip: !0,
						markNotificationAsRead: l,
						notification: d,
						setActiveOverflowMenuId: u,
						onItemClick: m,
						blockAwarder: o
					}), !!p && s.a.createElement(I.a, {
						onResize: this.handleResize
					})))
				}
			}
			var T = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				R = n("./src/reddit/helpers/trackers/inbox.ts"),
				L = n("./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/EmptyStateComponent.tsx");

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const F = {},
				D = "",
				U = 0,
				W = "200px",
				H = "250px",
				G = "270px",
				z = 100,
				M = .5,
				V = 5,
				q = 50,
				K = 55;
			class J extends s.a.Component {
				constructor() {
					super(...arguments), this.container = s.a.createRef(), this.state = {
						notificationHeights: F,
						currentNotificationCursorIndex: -1
					}, this.resetOverflowMenu = () => {
						this.props.activeOverflowMenuId.length > U && this.props.setActiveOverflowMenuId(D)
					}, this.getContainerHeight = () => {
						const {
							notificationHeights: e
						} = this.state, {
							isDNInboxPromptBannerEnabled: t,
							isInboxPrivacyPolicyBannerEnabled: n,
							isLoggedIn: a
						} = this.props, i = t || n, s = window.innerHeight - q - 2 * K - (i ? z : 0);
						let o = 0;
						for (const r in e) o += e[r];
						return 0 === o ? i ? H : a ? W : G : (i && (o += z), s < o && (o = s + (i ? z : 0)), o)
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
						} = this.state, n = t + V, a = n > e.length ? n : e.length - 1;
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
								notifications: i
							} = this.props,
							o = i.length > n + V;
						return (a && i.length > 0 && o ? i.slice(0, n + 1) : i).map((n, a) => s.a.createElement(B, A({}, e, {
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
							notifications: i
						} = this.props;
						if (e.isIntersecting) {
							const e = i.length > this.state.currentNotificationCursorIndex + V;
							this.props.notifications.length > 0 && a && e ? this.updateCurrentCursorIndex() : t && n({
								after: t,
								first: V
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
						isLoggedIn: i,
						isPending: o,
						notifications: r,
						setDesktopNotificationsPromptSeen: c,
						setInboxPrivacyPolicyBannerSeen: l,
						showBrowserNotificationsPermissionSettings: d,
						isWrappedRedditBannerEnabled: m,
						setDesktopNotificationWrappedRedditBannerSeen: p
					} = this.props, b = !(!r || !r.length), f = this.getContainerHeight(), h = r.length > this.state.currentNotificationCursorIndex + V, x = n || t || m;
					return s.a.createElement("div", {
						className: P.a.notificationList,
						ref: this.container,
						style: b ? {
							height: f,
							maxHeight: f
						} : {
							minHeight: W
						}
					}, x && s.a.createElement("div", {
						className: P.a.notificationBannerContainer
					}, n && s.a.createElement(_.a, {
						onClose: l,
						pageType: R.c.MiniInbox
					}), t && s.a.createElement(g, {
						onTurnOnBrowserNotifications: d,
						onClose: c
					}), m && s.a.createElement(j, {
						onClose: p
					})), !b && o && s.a.createElement(T.a, null), !b && !o && s.a.createElement(L.a, {
						isBannerEnabled: x,
						isLoggedIn: i,
						inTooltip: !0,
						hideTooltip: this.props.onItemClick
					}), b && this.renderNotifications(), a && b && !o && (e || h) && s.a.createElement(u.a, {
						onChange: this.loadNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: M
					}, s.a.createElement("div", null)))
				}
			}
			var Q = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts"),
				Z = n("./src/reddit/helpers/localStorage/index.ts");
			var Y = n("./src/reddit/hooks/useInboxPrivacyPolicyBannerSeen.ts"),
				X = n("./src/reddit/hooks/useTracking.ts");

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = [],
				te = l.a.div("StyledDropdown", P.a),
				ne = ({
					isLoggedIn: e,
					onMessagesClick: t,
					onBarClick: n,
					markAllAsRead: o,
					messagesBadgeCount: r,
					sendInboxClickSettings: l
				}) => {
					const u = !!r,
						m = Object(i.useCallback)(() => {
							t(), n()
						}, [t, n]),
						p = Object(i.useCallback)(() => {
							l(), n()
						}, [l, n]);
					return s.a.createElement("nav", {
						className: P.a.topNav
					}, s.a.createElement("span", {
						className: P.a.topNavTitle
					}, a.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), e && s.a.createElement("span", {
						className: P.a.topNavLinks
					}, s.a.createElement("span", {
						className: P.a.messagesLinkContainer
					}, s.a.createElement(v.a, {
						className: Object(c.a)(P.a.messagesLink, {
							[P.a.mActive]: u
						}),
						onClick: m,
						to: u ? "/message/unread" : "/message/messages"
					}, a.fbt._("Messages", null, {
						hk: "hulKY"
					}), s.a.createElement(d.a, {
						className: P.a.badgeCount,
						isActive: u,
						unreadCount: r
					}))), s.a.createElement("button", {
						className: P.a.navLink,
						onClick: o
					}, s.a.createElement(y.a, {
						name: "mark_read",
						className: P.a.icon
					})), s.a.createElement(v.a, {
						className: P.a.navLink,
						onClick: p,
						to: "/settings/notifications"
					}, s.a.createElement(y.a, {
						name: "settings",
						className: P.a.icon
					}))))
				},
				ae = e => s.a.createElement("div", {
					className: P.a.bottomBar
				}, s.a.createElement(v.a, {
					className: P.a.bottomLink,
					onClick: () => {
						e.sendInboxClickSeeAll(), e.onBarClick()
					},
					to: "/notifications"
				}, a.fbt._("See All", null, {
					hk: "3L3tFc"
				}))),
				ie = e => {
					const t = Object(X.a)(),
						{
							clearMessageTabBadgeCount: n,
							inboxBadgeCount: a,
							isPending: c,
							messagesBadgeCount: l,
							notifications: d,
							hideTooltip: u,
							isInboxPolicyBannerEnabled: m,
							isLoggedIn: p,
							isPushNotificationsSupported: b,
							isWrappedRedditBannerEnabled: f,
							userId: h
						} = e,
						[g, _] = function(e) {
							const [t, n] = Object(i.useState)(Object(Z.t)(e));
							return [t, Object(i.useCallback)(() => {
								n(!0), Object(Z.Db)(e)
							}, [])]
						}(h),
						[x, N] = Object(Q.a)(h),
						[v, y] = Object(Y.a)(h),
						O = !(!d || !d.length),
						k = Object(o.a)(),
						E = k === r.a.Closed || k === r.a.Default || k === r.a.Denied,
						j = b && E && !x;
					return s.a.createElement(te, null, s.a.createElement("div", {
						className: P.a.tooltipContainer
					}, s.a.createElement(ne, {
						markAllAsRead: () => {
							e.markAllAsRead(), t(Object(R.h)({
								isMiniInbox: !0
							}))
						},
						messagesBadgeCount: l,
						onMessagesClick: () => {
							t(Object(R.s)({
								badgeCount: a,
								tab: R.f.Messages
							})), t(Object(R.i)()), n()
						},
						sendInboxClickSettings: () => t(Object(R.n)(R.c.MiniInbox)),
						onBarClick: u,
						isLoggedIn: p
					}), s.a.createElement(J, $({}, e, {
						isPending: c,
						onItemClick: u,
						setDesktopNotificationsPromptSeen: N,
						isDNInboxPromptBannerEnabled: j,
						isInboxPrivacyPolicyBannerEnabled: m && !v,
						setInboxPrivacyPolicyBannerSeen: y,
						isWrappedRedditBannerEnabled: f && !g,
						setDesktopNotificationWrappedRedditBannerSeen: () => {
							_(), t(Object(R.r)())
						}
					})), (O || c) && s.a.createElement(ae, {
						sendInboxClickSeeAll: () => t(Object(R.m)()),
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
			const i = Object(a.a)({
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
			var a = n("./node_modules/react/index.js"),
				i = n.n(a),
				s = n("./src/reddit/components/NotificationUnit/index.m.less"),
				o = n.n(s);
			const r = () => i.a.createElement("li", {
					className: o.a.placeholderWrapper
				}, i.a.createElement("span", {
					className: o.a.placeholderAvatar
				}), i.a.createElement("span", {
					className: o.a.placeholderContent
				})),
				c = () => i.a.createElement("ol", null, i.a.createElement(r, null), i.a.createElement(r, null), i.a.createElement(r, null))
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
				return N
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "m", (function() {
				return O
			}));
			var a = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/telemetry/index.ts"),
				s = n("./src/telemetry/models/Event.ts");
			var o;
			! function(e) {
				e.FREQUENT = "frequent", e.LOW = "low", e.OFF = "off"
			}(o || (o = {}));
			const r = e => ({
					...a.o(e),
					noun: "desktop_notification_permissions"
				}),
				c = e => e ? "enable" : "disable",
				l = e => {
					Object(i.a)({
						...r(e),
						action: s.c.View,
						source: "popup"
					})
				},
				d = e => {
					Object(i.a)({
						...r(e),
						action: s.c.Allow,
						source: "popup"
					})
				},
				u = e => {
					Object(i.a)({
						...r(e),
						action: s.c.Block,
						source: "popup"
					})
				},
				m = e => {
					Object(i.a)({
						...r(e),
						action: s.c.Close,
						source: "popup"
					})
				},
				p = (e, t, n) => ({
					...a.o(e),
					actionInfo: a.d(e, {
						success: t,
						reason: n
					}),
					noun: "push_token"
				}),
				b = e => {
					Object(i.a)({
						...p(e, !0),
						action: s.c.Request,
						source: "notification"
					})
				},
				f = e => {
					Object(i.a)({
						...p(e, !0),
						action: s.c.Register,
						source: "notification"
					})
				},
				h = (e, t) => {
					Object(i.a)({
						...p(e, !1, t),
						action: s.c.Bail,
						source: "notification"
					})
				},
				g = e => ({
					...a.o(e),
					noun: "push_notification"
				}),
				_ = e => ({
					...g(e),
					notification: a.F(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				x = (e, t) => n => ({
					...a.o(n),
					action: c(e),
					email: {
						type: t
					},
					noun: "email",
					source: "email_app_settings"
				}),
				N = (e, t) => n => ({
					...a.o(n),
					action: c(e),
					notification: {
						type: t
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				v = e => t => ({
					...a.o(t),
					source: "email_app_settings",
					action: c(e),
					noun: "email",
					notification: {
						type: "all"
					}
				}),
				y = (e, t, n) => i => ({
					...a.o(i),
					action: "set_frequency",
					noun: n,
					source: "community_notifications",
					subreddit: {
						id: e,
						name: t.toLowerCase()
					}
				}),
				O = () => e => ({
					...a.o(e),
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
				i = n("./src/reddit/helpers/localStorage/index.ts");

			function s(e) {
				const [t, n] = Object(a.useState)(Object(i.s)(e));
				return [t, Object(a.useCallback)(() => {
					n(!0), Object(i.pb)(e)
				}, [])]
			}
		},
		"./src/reddit/hooks/useInboxPrivacyPolicyBannerSeen.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var a = n("./node_modules/react/index.js"),
				i = n("./src/reddit/helpers/localStorage/index.ts");

			function s(e) {
				const [t, n] = Object(a.useState)(() => Object(i.w)(e));
				return [t, Object(a.useCallback)(() => {
					n(!0), Object(i.Bb)(e)
				}, [e])]
			}
		},
		"./src/reddit/icons/svgs/Snoo/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				i = n.n(a),
				s = n("./src/reddit/constants/colors.ts");
			t.a = e => i.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				className: e.className
			}, i.a.createElement("g", null, i.a.createElement("circle", {
				fill: s.a.snoo,
				cx: "10",
				cy: "10",
				r: "10"
			}), i.a.createElement("path", {
				fill: "#FFF",
				d: "M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
			})))
		},
		"./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/EmptyStateComponent.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				i = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/helpers/trackers/inbox.ts"),
				r = n("./src/reddit/hooks/useTracking.ts"),
				c = n("./node_modules/fbt/lib/FbtPublic.js"),
				l = n("./src/config.ts"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/index.m.less"),
				p = n.n(m);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
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
					return i.a.createElement("div", {
						className: Object(d.a)(p.a.emptyState, p.a.karmaView, {
							[p.a.inNotificationsPage]: !e
						})
					}, i.a.createElement("div", {
						className: Object(d.a)(p.a.catsImageWrapper, {
							[p.a.inTooltip]: e
						})
					}, i.a.createElement("img", {
						src: `${l.a.assetPath}/img/notifications/bottom_cat.png`,
						alt: c.fbt._("cats picture", null, {
							hk: "27dboq"
						}),
						className: Object(d.a)(p.a.cat, p.a.bottom)
					}), i.a.createElement("img", {
						src: `${l.a.assetPath}/img/notifications/top_cat.png`,
						alt: c.fbt._("cats picture", null, {
							hk: "27dboq"
						}),
						className: Object(d.a)(p.a.cat, p.a.top)
					}), i.a.createElement("img", {
						src: `${l.a.assetPath}/img/notifications/cloud.png`,
						alt: c.fbt._("cats picture", null, {
							hk: "45gHNS"
						}),
						className: p.a.cloud
					}), i.a.createElement("img", {
						src: `${l.a.assetPath}/img/notifications/yummy.png`,
						alt: c.fbt._("cats picture", null, {
							hk: "27dboq"
						}),
						className: p.a.yummy
					})), i.a.createElement("h1", {
						className: Object(d.a)(p.a.emptyTitle, {
							[p.a.inTooltip]: e
						})
					}, c.fbt._("You don’t have any activity yet", null, {
						hk: "2GNaV0"
					})), i.a.createElement("p", {
						className: p.a.emptyDescription
					}, c.fbt._("That’s ok, maybe you just need the right inspiration. Have you had your daily cat fix yet today?", null, {
						hk: "3tmgZE"
					})), i.a.createElement(u.t, b({
						className: p.a.emptyStateButton,
						onClick: t
					}, n), c.fbt._("See today’s Top Cats in r/cats", null, {
						hk: "Um68y"
					})))
				},
				h = n("./src/lib/lessComponent.tsx"),
				g = n("./src/reddit/actions/login.ts");
			var _ = e => i.a.createElement("svg", {
				className: e.className,
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 21"
			}, i.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M18.4 14.788c-.662 0-1.2-.537-1.2-1.202l-.012-5.998C17.188 3.625 13.963.4 10 .4 6.037.4 2.811 3.625 2.811 7.586l-.01 6.002c0 .663-.54 1.2-1.2 1.2a1.199 1.199 0 100 2.4h16.8a1.2 1.2 0 100-2.4zm-9.6 3.6H7.6c0 1.324 1.076 2.4 2.4 2.4 1.323 0 2.4-1.076 2.4-2.4H8.8zm-3.6-4.797c0 .422-.087.822-.22 1.197H15.02a3.554 3.554 0 01-.22-1.2l-.013-5.997A4.794 4.794 0 0010 2.8a4.794 4.794 0 00-4.789 4.787l-.01 6.003z"
			}));
			const x = h.a.wrapped(_, "BellOutline", p.a),
				N = ({
					isBannerEnabled: e,
					isLoggedIn: t
				}) => {
					const n = Object(s.d)();
					return i.a.createElement("div", {
						className: Object(d.a)(p.a.emptyState, {
							[p.a.emptyStateWithBanner]: Boolean(e),
							[p.a.loggedOutState]: !t
						})
					}, i.a.createElement(x, null), i.a.createElement("h1", {
						className: p.a.emptyTitle
					}, c.fbt._("Be the first to know", null, {
						hk: "2mNJO0"
					})), i.a.createElement("p", {
						className: p.a.emptyDescription
					}, c.fbt._("This is where you get updates on your activity and recommendations", null, {
						hk: "27V2PG"
					})), !t && i.a.createElement("div", {
						className: p.a.emptyStateLoggedOutContainer
					}, i.a.createElement(u.j, {
						onClick: () => n(Object(g.i)())
					}, c.fbt._("Log In", null, {
						hk: "ZR3pC"
					})), i.a.createElement("span", {
						className: p.a.emptyStateDivider
					}), i.a.createElement(u.j, {
						onClick: () => n(Object(g.j)())
					}, c.fbt._("Sign Up", null, {
						hk: "3Jd0SI"
					}))))
				};
			var v = n("./src/reddit/controls/InternalLink/index.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
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
				const a = t ? "r/popular" : O,
					s = `/${a}`,
					o = {
						to: s,
						kind: u.b.InternalLink
					},
					r = i.a.createElement(v.a, {
						to: s,
						target: "_blank",
						rel: "noopener noreferrer",
						className: p.a.subredditLinkR,
						onClick: n
					}, a);
				return i.a.createElement("div", {
					className: Object(d.a)(p.a.emptyState, p.a.karmaView, {
						[p.a.inNotificationsPage]: !e
					})
				}, i.a.createElement("img", {
					src: `${l.a.assetPath}/img/wrappedreddit/default_avatar.png`,
					alt: c.fbt._("default user avatar", null, {
						hk: "1VMTKf"
					}),
					className: Object(d.a)(p.a.avatarImage, {
						[p.a.inTooltip]: e
					})
				}), i.a.createElement("h1", {
					className: Object(d.a)(p.a.emptyTitle, {
						[p.a.inTooltip]: e
					})
				}, c.fbt._("You don’t have any activity yet", null, {
					hk: "2hf6yn"
				})), i.a.createElement("p", {
					className: p.a.emptyDescription
				}, t ? c.fbt._("That’s ok, maybe you just need the right inspiration. Try browsing {Link: to r/popular}, for new communities to join.", [c.fbt._param("Link: to r/popular", r)], {
					hk: "VSBWM"
				}) : c.fbt._("That’s ok, maybe you just need the right inspiration. Try posting in {Link: to popular subreddit} , a popular community for discussion.", [c.fbt._param("Link: to popular subreddit", r)], {
					hk: "1WOK4T"
				})), i.a.createElement(u.t, y({
					className: p.a.emptyStateButton,
					onClick: n,
					text: `Visit ${a}`
				}, o)))
			};

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const j = "/img/notifications/star.png";
			var C = ({
					inTooltip: e,
					onBtnClick: t
				}) => {
					const n = {
						to: "/r/memes/top/",
						kind: u.b.InternalLink
					};
					return i.a.createElement("div", {
						className: Object(d.a)(p.a.emptyState, p.a.karmaView, {
							[p.a.inNotificationsPage]: !e
						})
					}, i.a.createElement("div", {
						className: Object(d.a)(p.a.memesImageWrapper, {
							[p.a.inTooltip]: e
						})
					}, i.a.createElement("img", {
						src: `${l.a.assetPath}/img/notifications/shrek.png`,
						alt: c.fbt._("memes picture", null, {
							hk: "3e3S9E"
						}),
						className: p.a.shrek
					}), i.a.createElement("img", {
						src: `${l.a.assetPath}${j}`,
						alt: c.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(d.a)(p.a.star, p.a.inBottom)
					}), i.a.createElement("img", {
						src: `${l.a.assetPath}${j}`,
						alt: c.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(d.a)(p.a.star, p.a.inCenter)
					}), i.a.createElement("img", {
						src: `${l.a.assetPath}${j}`,
						alt: c.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(d.a)(p.a.star, p.a.inTop)
					})), i.a.createElement("h1", {
						className: Object(d.a)(p.a.emptyTitle, {
							[p.a.inTooltip]: e
						})
					}, c.fbt._("You don’t have any activity yet", null, {
						hk: "2GNaV0"
					})), i.a.createElement("p", {
						className: p.a.emptyDescription
					}, c.fbt._("That’s ok, maybe you just need the right inspiration. Let’s get some more lolz in your life.", null, {
						hk: "10HMFI"
					})), i.a.createElement(u.t, E({
						className: p.a.emptyStateButton,
						onClick: t
					}, n), c.fbt._("See today’s Top Memes in r/Memes", null, {
						hk: "42zwJz"
					})))
				},
				I = n("./src/lib/notifications/index.ts"),
				w = n("./src/lib/notifications/constants.ts"),
				P = n("./src/redditGQL/types.ts"),
				S = n("./src/reddit/actions/modal.ts"),
				B = n("./src/reddit/actions/notifications/index.ts"),
				T = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				R = n("./src/reddit/actions/toaster.ts"),
				L = n("./src/reddit/components/Settings/modalIds.ts"),
				A = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				F = n("./src/reddit/models/Toast/index.ts"),
				D = n("./src/reddit/selectors/notificationPrefs.ts"),
				U = n("./src/reddit/selectors/user.ts");

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const H = [P.h.PrivateMessage, P.h.ChatMessage, P.h.ChatRequest, P.h.UsernameMention, P.h.PostReply, P.h.UpvotePost, P.h.UpvoteComment, P.h.CommentReply, P.h.ThreadReplies, P.h.TopLevelComment, P.h.NewPostActivity, P.h.UserNewFollower, P.h.PostFlairAdded, P.h.UserFlairAdded, P.h.NewPinnedPost, P.h.AwardReceived, P.h.PostFollow, P.h.TalkLive, P.h.CommentFollow, P.h.LifecyclePostSuggestions, P.h.BroadcastRecommendation, P.h.SubredditRecommendation, P.h.RedditLore, P.h.OneOff, P.h.CakeDay, P.h.ModeratedSrEngagement];
			var G;
			! function(e) {
				e[e.TURN_ON_PN = 0] = "TURN_ON_PN", e[e.TURN_ON_PN_APP = 1] = "TURN_ON_PN_APP", e[e.VERIFY_EMAIL = 2] = "VERIFY_EMAIL", e[e.TURN_ON_DAYLY_DIGEST = 3] = "TURN_ON_DAYLY_DIGEST", e[e.DONE = 4] = "DONE"
			}(G || (G = {}));
			var z = ({
					inTooltip: e,
					isBannerEnabled: t,
					isLoggedIn: n,
					onBtnClick: r,
					hideTooltip: m
				}) => {
					const b = Object(s.d)(),
						f = Object(s.e)(U.n),
						h = Object(s.e)(U.C),
						g = Object(a.useRef)(f),
						[_, x] = Object(a.useState)(G.TURN_ON_PN),
						v = Object(s.e)(e => e.user.accountSettings.changeEmail.api.pending),
						y = Object(a.useCallback)(() => {
							b(async (e, t) => {
								var n, a;
								let i = Object(U.db)(t());
								i.allIds.length || await e(Object(T.a)(A.a.Email));
								const s = null === (a = null === (n = (i = Object(U.db)(t())).byId) || void 0 === n ? void 0 : n.EMAIL_DIGEST) || void 0 === a ? void 0 : a.isEnabled;
								x(s ? G.DONE : G.TURN_ON_DAYLY_DIGEST)
							})
						}, [b]),
						O = Object(a.useCallback)(() => {
							h ? y() : x(G.VERIFY_EMAIL)
						}, [h, y]),
						k = Object(a.useCallback)(() => {
							b(async (e, t) => {
								const n = t();
								Object(U.fb)(n).allIds.length || await e(Object(T.a)(A.a.Push)), Object(D.c)(t(), H) ? x(G.TURN_ON_PN_APP) : O()
							})
						}, [b, O]),
						E = Object(a.useCallback)(() => {
							(() => Object(I.a)() === w.a.Granted)() ? k(): x(G.TURN_ON_PN)
						}, [k]),
						j = Object(a.useCallback)(() => {
							r(o.b.Email_perms)(), e && m && m(), b(Object(S.h)(L.a))
						}, [b, r, e, m]);
					if (Object(a.useEffect)(() => {
							E()
						}, [E]), Object(a.useEffect)(() => {
							if (f !== g.current && _ === G.VERIFY_EMAIL) {
								const e = Object(R.e)(c.fbt._("Email successfully updated!", null, {
									hk: "3iPlUp"
								}), F.b.SuccessCommunityGreen);
								b(Object(R.f)(e)), y()
							}
						}, [f, _, y]), Object(a.useEffect)(() => {
							v && b(Object(S.g)(L.a))
						}, [v, b]), _ === G.DONE) return i.a.createElement(N, {
						isLoggedIn: n,
						isBannerEnabled: t
					});
					const C = {
							to: "/settings/notifications",
							kind: u.b.InternalLink,
							onClick: _ === G.TURN_ON_PN_APP ? r(o.b.PN_perms) : r(o.b.Email_perms)
						},
						P = {
							onClick: _ === G.TURN_ON_PN ? async () => {
								r(o.b.PN_perms)(), e && m && m(), await b(Object(B.requestBrowserNotificationPermissionPromptByUser)(L.f)), E()
							} : j
						},
						z = _ === G.TURN_ON_PN || _ === G.TURN_ON_PN_APP,
						M = _ === G.TURN_ON_PN_APP || _ === G.TURN_ON_DAYLY_DIGEST;
					return i.a.createElement("div", {
						className: Object(d.a)(p.a.emptyState, p.a.karmaView, {
							[p.a.inNotificationsPage]: !e
						})
					}, i.a.createElement("img", {
						src: `${l.a.assetPath}/img/wrappedreddit/default_avatar.png`,
						alt: c.fbt._("default user avatar", null, {
							hk: "1VMTKf"
						}),
						className: Object(d.a)(p.a.avatarImage, {
							[p.a.inTooltip]: e
						})
					}), i.a.createElement("h1", {
						className: Object(d.a)(p.a.emptyTitle, {
							[p.a.inTooltip]: e
						})
					}, z ? c.fbt._("Turn on notifications", null, {
						hk: "3qFpFu"
					}) : c.fbt._("Turn on email digest", null, {
						hk: "obBF8"
					})), i.a.createElement("p", {
						className: p.a.emptyDescription
					}, z ? c.fbt._("Stay in the loop on content from communities you love right on your phone.", null, {
						hk: "1gwnbO"
					}) : c.fbt._("Stay in the loop on content from communities you love right on your email inbox.", null, {
						hk: "1rs4kD"
					})), i.a.createElement(u.t, W({
						className: p.a.emptyStateButton
					}, M ? C : P, {
						text: c.fbt._("OK", null, {
							hk: "rhf0"
						})
					})))
				},
				M = n("./src/reddit/selectors/experiments/notifications.ts");
			t.a = ({
				isBannerEnabled: e,
				isLoggedIn: t,
				inTooltip: n,
				hideTooltip: a
			}) => {
				const c = Object(r.a)(),
					l = e => () => c(Object(o.p)({
						actionInfoType: e
					})),
					d = Object(s.e)(M.b),
					u = Object(s.e)(M.c),
					m = Object(s.e)(M.d),
					p = Object(s.e)(M.a),
					b = Object(s.e)(M.e);
				return d || b ? i.a.createElement(k, {
					inTooltip: n,
					isPopular: b,
					onBtnClick: l(o.b.Karma)
				}) : u ? i.a.createElement(C, {
					inTooltip: n,
					onBtnClick: l(o.b.Memes)
				}) : m ? i.a.createElement(z, {
					isBannerEnabled: e,
					isLoggedIn: t,
					inTooltip: n,
					onBtnClick: l,
					hideTooltip: a
				}) : p ? i.a.createElement(f, {
					inTooltip: n,
					onBtnClick: l(o.b.Cats)
				}) : i.a.createElement(N, {
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
				return r
			}));
			var a = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/actions/pages/wrappedReddit.ts");
			const o = "/RedditRecap2021",
				r = "https://i.redd.it/8yb4biw7bf481.png",
				c = {
					action: s.a,
					chunk: i.s.WRAPPED_REDDIT,
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
						name: i.Nb.WRAPPED_REDDIT
					},
					path: o
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
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			var a = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/reddit/components/InboxTooltip/Component.tsx"),
				s = n("./src/reddit/models/SubredditModeration/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const r = (e, {
					subredditId: t
				}) => e.features.banned.models[t],
				c = (e, {
					subredditId: t,
					username: n
				}) => {
					const a = Object(o.wb)(e, {
						userName: n
					});
					if (!a) return;
					const i = r(e, {
						subredditId: t
					});
					return i ? i[a.id] : void 0
				},
				l = Object(a.a)((e, {
					subredditId: t
				}) => {
					const n = e.features.banned.userOrder[t];
					return n ? n.map(n => e.features.banned.models[t][n]) : i.a
				}),
				d = (e, {
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
		"./src/reddit/selectors/experiments/econ/avatarNfts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			var a = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts");
			const s = e => Object(i.c)(e, {
					experimentEligibilitySelector: i.a,
					experimentName: a.t
				}) === a.w.Enabled,
				o = e => Object(i.c)(e, {
					experimentEligibilitySelector: i.a,
					experimentName: a.Ac
				}) === a.Zc
		},
		"./src/reddit/selectors/experiments/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "f", (function() {
				return d
			}));
			var a = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts");
			const s = e => Object(i.c)(e, {
					experimentEligibilitySelector: i.a,
					experimentName: a.mb
				}) === a.gd.Karma,
				o = e => Object(i.c)(e, {
					experimentEligibilitySelector: i.a,
					experimentName: a.mb
				}) === a.gd.Memes,
				r = e => Object(i.c)(e, {
					experimentEligibilitySelector: i.a,
					experimentName: a.mb
				}) === a.gd.PnEmail,
				c = e => Object(i.c)(e, {
					experimentEligibilitySelector: i.a,
					experimentName: a.mb
				}) === a.gd.Cats,
				l = e => Object(i.c)(e, {
					experimentEligibilitySelector: i.a,
					experimentName: a.mb
				}) === a.gd.Popular,
				d = e => l(e) || c(e) || r(e) || o(e) || s(e)
		},
		"./src/redditGQL/operations/RegisterWebPushToken.json": function(e) {
			e.exports = JSON.parse('{"id":"197650c1946c"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard~Reddit.b9cfe81c810f5e743016.js.map