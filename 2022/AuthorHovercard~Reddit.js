// https://www.redditstatic.com/desktop2x/AuthorHovercard~Reddit.d42ef1421aad3ab99445.js
// Retrieved at 7/11/2022, 7:20:04 PM by Reddit Dataminer v1.0.0
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
				o = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/lib/serviceWorker/index.ts"),
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
					const t = await Object(s.a)();
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
						return Object(o.a)(e(), {
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
				return P
			})), n.d(t, "requestNotificationsPermissions", (function() {
				return B
			})), n.d(t, "subscribeForPNs", (function() {
				return S
			})), n.d(t, "unsubscribeFromPNs", (function() {
				return T
			})), n.d(t, "requestBrowserNotificationPermissionPromptByUser", (function() {
				return L
			})), n.d(t, "subscribeToPermissionsChange", (function() {
				return R
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/lodash/omit.js"),
				o = n.n(i),
				s = n("./src/lib/browser/isIncognito.ts"),
				r = n("./src/lib/notifications/token.ts"),
				c = n("./src/lib/notifications/index.ts"),
				l = n("./src/lib/notifications/constants.ts"),
				d = n("./src/lib/serviceWorker/index.ts"),
				u = n("./src/reddit/actions/chat/toggle.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/actions/notifications/utils.ts"),
				b = n("./src/reddit/actions/tabBadging.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/reddit/constants/modals.ts"),
				g = n("./src/reddit/helpers/parseUrl.ts"),
				_ = n("./src/reddit/helpers/tabBadging/index.ts"),
				v = n("./src/reddit/helpers/trackers/notifications.ts"),
				N = n("./src/reddit/models/Toast/index.ts"),
				O = n("./src/reddit/selectors/activeModal.ts"),
				x = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				y = n("./src/reddit/constants/experiments.ts"),
				k = n("./src/reddit/helpers/chooseVariant/index.ts");
			const E = e => Object(k.c)(e, {
				experimentName: y.fc,
				experimentEligibilitySelector: k.a
			}) === y.zd;
			var j = n("./src/reddit/selectors/meta.ts"),
				C = n("./src/reddit/selectors/user.ts");
			let I = !1;
			const P = async (e, t) => {
				const n = Object(C.P)(e);
				if (I) return;
				if (I = !0, Object(p.a)(e) !== l.c.NotificationsSupported) return;
				await Object(d.a)();
				navigator.serviceWorker.addEventListener("message", a => {
					const i = a.data,
						s = i.command || i.type;
					if ("registerWithServiceWorker" === s) w(e);
					else if (s === _.a && n) {
						const e = o()(i, ["command"]);
						t(Object(b.f)(e))
					} else if ("navigate.chat" === s) {
						const e = Object(g.a)(i.data.href);
						e && e.pathname && t(Object(u.c)(e.pathname))
					}
				}), w(e)
			}, w = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: v.c(e)
				})
			}, B = function(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
				return async (a, i, o) => {
					const r = i(),
						d = Object(j.f)(r),
						u = E(r),
						m = Object(x.e)(r),
						p = Object(O.c)(h.a.NSFW_BLOCKING_MODAL_V2)(r);
					if (m || p) return;
					if (await Object(s.a)() || d) return;
					await P(r, a);
					v.l(r), await Object(c.b)(e, t, () => {
						u || a(Object(l.o)()), a(Object(l.n)()), v.j(r)
					}, (e, t) => {
						a(Object(l.l)()), a(T(t ? l.a.Denied : l.a.Closed)), e && (t ? v.e(r) : v.f(r))
					}, e => {
						a(Object(l.m)()), a(S()), e && v.d(r)
					}, () => {
						a(Object(l.k)()), n()
					})
				}
			}, S = e => async (t, n, i) => {
				const o = n();
				try {
					switch (await Object(r.b)(i.gqlContext)) {
						case r.a.Success:
							Object(p.b)(l.a.Granted), v.m(o), e && t(Object(f.f)({
								kind: N.b.SuccessCommunity,
								text: a.fbt._("Changes saved", null, {
									hk: "wGH5U"
								})
							}));
							break;
						case r.a.FailedResponse:
							v.k(o, "registration_failed_generally");
							break;
						case r.a.FailedGqlReponse:
							v.k(o, "registration_failed_in_gql")
					}
				} catch (s) {
					v.k(o, "registration_failed_uncaught_exception"), console.error(s)
				}
			}, T = (e, t) => async n => {
				try {
					Object(p.b)(e);
					const i = await Object(d.a)();
					if (i) {
						const e = await i.pushManager.getSubscription();
						e && (e.unsubscribe(), t && n(Object(f.f)({
							kind: N.b.SuccessCommunity,
							text: a.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						})))
					}
				} catch (i) {}
			}, L = e => async (t, n) => {
				const a = n();
				if (Object(p.a)(a) === l.c.NotificationsSupported) switch (Object(c.a)()) {
					case l.a.Default:
					case l.a.Closed:
						await t(B(!0, !0));
						break;
					case l.a.Denied:
						t(Object(m.h)(e))
				}
			}, R = () => async (e, t) => {
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
							e(T(l.a.Denied)), v.e(a);
							break;
						case l.a.Granted:
							e(S()), v.d(a);
							break;
						default:
							e(T(l.a.Default))
					}
				})(i.state)
			}
		},
		"./src/reddit/actions/userFlair/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return i
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
			var a = n("./src/lib/loadableAction/index.ts");
			const i = Object(a.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairChanged)),
				o = Object(a.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleUserFlairInSubreddit)),
				s = Object(a.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleAssignOwnFlairPermission)),
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
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/prettyPrintNumber/index.ts"),
				r = n("./src/reddit/components/BadgeCounter/index.m.less"),
				c = n.n(r);
			t.a = e => {
				let {
					className: t,
					isActive: n,
					showEmpty: a,
					unreadCount: r
				} = e;
				return n ? i.a.createElement("span", {
					className: Object(o.a)(t, c.a.badgeCounter, {
						[c.a.mEmpty]: a || r < 1
					})
				}, a || r < 1 ? "" : Object(s.b)(r)) : null
			}
		},
		"./src/reddit/components/InboxBanner/Banner.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				i = n.n(a),
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
					closeIcon: a,
					descriptionText: d,
					primaryButtonText: m,
					titleText: p,
					onClose: b,
					onClick: f
				} = e;
				const h = Object(c.a)();
				return i.a.createElement("div", {
					className: Object(o.a)(u.a.banner, t)
				}, i.a.createElement("div", {
					className: u.a.bannerTitleContainer
				}, p && i.a.createElement("h4", {
					className: u.a.bannerTitle
				}, p), a && i.a.createElement(s.t, {
					onClick: e => {
						b && b(e), h(Object(r.p)({
							dnPromptAction: "dismiss"
						}))
					},
					Icon: Object(l.b)("close_fill"),
					className: Object(o.a)(u.a.closeIcon, u.a.closeButton),
					size: s.d.XXS,
					priority: s.c.Plain
				})), d && i.a.createElement("p", {
					className: u.a.bannerDescription
				}, d), i.a.createElement("div", {
					className: u.a.bannerButtonsContainer
				}, m && i.a.createElement(s.t, {
					text: m,
					priority: s.c.Tertiary,
					className: Object(o.a)(u.a.button, u.a.primaryButton),
					size: s.d.XS,
					onClick: e => {
						f && f(e), h(Object(r.p)({
							dnPromptAction: "cta"
						}))
					}
				}), n && i.a.createElement(s.t, {
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
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
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
				const i = Object(c.a)(),
					l = a.fbt._("We’ve updated our {userAgreement} and {privacyPolicy}. Take a look, as the changes take effect September 12, 2021.", [a.fbt._param("userAgreement", o.a.createElement("a", {
						className: d.a.underlineLink,
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "User Agreement")), a.fbt._param("privacyPolicy", o.a.createElement("a", {
						className: d.a.underlineLink,
						href: "https://www.redditinc.com/policies/privacy-policy",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "Privacy Policy"))], {
						hk: "3bGC4g"
					});
				return o.a.createElement(s.a, {
					className: d.a.policyBanner,
					titleText: a.fbt._("Reddit’s User Agreement & Privacy Policy", null, {
						hk: "32fxCY"
					}),
					descriptionText: l,
					primaryButtonText: a.fbt._("Ok", null, {
						hk: "1IJxzv"
					}),
					onClick: e => {
						e.stopPropagation(), t(), i(Object(r.g)(n, r.a.Confirm))
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
				hotPotatoBanner: "_2oy7Xi4NUleUcHtb8YDZh7",
				bannerContainer: "V5Q75l1gWtGpBZEehJiGH",
				bannerDataContainer: "SIz6ozr7aqewYGVSLfSf6",
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
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				s = n("./src/lib/notifications/index.ts"),
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
			const g = e => {
				let {
					onClose: t,
					onTurnOnBrowserNotifications: n
				} = e;
				return o.a.createElement(b.a, {
					className: h.a.dnPromptBanner,
					titleText: a.fbt._("Don’t miss out on updates — Turn on desktop notifications.", null, {
						hk: "10oNqB"
					}),
					onClose: e => {
						e.stopPropagation(), t()
					},
					closeIcon: !0,
					primaryButtonText: a.fbt._("Turn On", null, {
						hk: "3hywR9"
					}),
					closeButtonText: a.fbt._("No Thanks", null, {
						hk: "2GQOmV"
					}),
					onClick: e => {
						n(), t()
					}
				})
			};
			var _ = n("./node_modules/react-redux/es/index.js"),
				v = n("./src/reddit/controls/Button/index.tsx"),
				N = n("./src/reddit/controls/InternalLink/index.tsx"),
				O = n("./src/reddit/helpers/trackers/hotPotato.ts"),
				x = n("./src/reddit/hooks/useTracking.ts"),
				y = n("./src/reddit/icons/fonts/index.tsx"),
				k = n("./src/reddit/icons/svgs/HotPotato/index.tsx"),
				E = n("./src/reddit/selectors/experiments/hotPotato.ts");
			const j = e => {
				let {
					onClose: t
				} = e;
				const n = Object(_.e)(E.b),
					s = Object(x.a)(),
					r = Object(i.useCallback)(e => {
						t && t(e), s(Object(O.a)())
					}, [t, s]);
				return o.a.createElement("div", {
					className: Object(c.a)(h.a.banner, h.a.hotPotatoBanner)
				}, o.a.createElement(N.default, {
					to: `/r/${n}`,
					className: h.a.bannerContainer,
					onClick: r
				}, o.a.createElement("div", {
					className: h.a.bannerDataContainer
				}, o.a.createElement("div", {
					className: h.a.bannerTitleContainer
				}, o.a.createElement("h4", {
					className: h.a.bannerTitle
				}, a.fbt._("There's a time and r/place for everything", null, {
					hk: "10MnL"
				}))), o.a.createElement("p", {
					className: h.a.bannerDescription
				}, a.fbt._("r/Place is now open. Together we can make something more. Claim your tile and make r/place yours.", null, {
					hk: "2f11Wg"
				}))), o.a.createElement(k.a, {
					className: h.a.bannerImage
				})), o.a.createElement(v.t, {
					onClick: t,
					Icon: Object(y.b)("close_fill"),
					className: h.a.closeButton,
					size: v.d.XXS,
					priority: v.c.Plain
				}))
			};
			var C = n("./src/reddit/components/InboxBanner/PolicyBanner.tsx"),
				I = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				P = n("./src/reddit/components/ResizeSensor/index.tsx"),
				w = n("./src/reddit/components/InboxTooltip/index.m.less"),
				B = n.n(w);
			const S = 3;
			class T extends o.a.Component {
				constructor() {
					super(...arguments), this.ref = o.a.createRef(), this.handleResize = () => {
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
						blockAwarder: s,
						index: r,
						isInboxPostEmbedEnabled: c,
						markNotificationAsRead: l,
						notification: d,
						setActiveOverflowMenuId: u,
						onItemClick: m
					} = this.props, p = r + 1 <= S;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						ref: this.ref,
						className: B.a.notificationResizeWrapper
					}, o.a.createElement(I.a, {
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
						blockAwarder: s
					}), !!p && o.a.createElement(P.a, {
						onResize: this.handleResize
					})))
				}
			}
			var L = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				R = n("./src/reddit/helpers/trackers/inbox.ts"),
				A = n("./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/EmptyStateComponent.tsx");

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const F = {},
				U = "",
				D = 0,
				z = "200px",
				G = "250px",
				M = "270px",
				W = 100,
				V = .5,
				q = 5,
				K = 50,
				J = 55;
			class Q extends o.a.Component {
				constructor() {
					super(...arguments), this.container = o.a.createRef(), this.state = {
						notificationHeights: F,
						currentNotificationCursorIndex: -1
					}, this.resetOverflowMenu = () => {
						this.props.activeOverflowMenuId.length > D && this.props.setActiveOverflowMenuId(U)
					}, this.getContainerHeight = () => {
						const {
							notificationHeights: e
						} = this.state, {
							isDNInboxPromptBannerEnabled: t,
							isInboxPrivacyPolicyBannerEnabled: n,
							isLoggedIn: a
						} = this.props, i = t || n, o = window.innerHeight - K - 2 * J - (i ? W : 0);
						let s = 0;
						for (const r in e) s += e[r];
						return 0 === s ? i ? G : a ? z : M : (i && (s += W), o < s && (s = o + (i ? W : 0)), s)
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
						} = this.state, n = t + q, a = n > e.length ? n : e.length - 1;
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
							s = i.length > n + q;
						return (a && i.length > 0 && s ? i.slice(0, n + 1) : i).map((n, a) => o.a.createElement(T, H({}, e, {
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
							const e = i.length > this.state.currentNotificationCursorIndex + q;
							this.props.notifications.length > 0 && a && e ? this.updateCurrentCursorIndex() : t && n({
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
						isInboxPrivacyPolicyBannerEnabled: a,
						isInboxInfiniteScrollEnabled: i,
						isLoggedIn: s,
						isPending: r,
						notifications: c,
						setDesktopNotificationsPromptSeen: l,
						setInboxPrivacyPolicyBannerSeen: d,
						showBrowserNotificationsPermissionSettings: m,
						setHotPotatoBannerSeen: p
					} = this.props, b = !(!c || !c.length), f = this.getContainerHeight(), h = c.length > this.state.currentNotificationCursorIndex + q, _ = a || t || n;
					return o.a.createElement("div", {
						className: B.a.notificationList,
						ref: this.container,
						style: b ? {
							height: f,
							maxHeight: f
						} : {
							minHeight: z
						}
					}, _ && o.a.createElement("div", {
						className: B.a.notificationBannerContainer
					}, a && o.a.createElement(C.a, {
						onClose: d,
						pageType: R.c.MiniInbox
					}), t && o.a.createElement(g, {
						onTurnOnBrowserNotifications: m,
						onClose: l
					}), n && o.a.createElement(j, {
						onClose: p
					})), !b && r && o.a.createElement(L.a, null), !b && !r && o.a.createElement(A.a, {
						isBannerEnabled: _,
						isLoggedIn: s,
						inTooltip: !0,
						hideTooltip: this.props.onItemClick
					}), b && this.renderNotifications(), i && b && !r && (e || h) && o.a.createElement(u.a, {
						onChange: this.loadNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: V
					}, o.a.createElement("div", null)))
				}
			}
			var Y = n("./src/reddit/constants/localStorage.ts"),
				X = n("./src/reddit/hooks/useLocalStorage.ts");
			var Z = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts"),
				$ = n("./src/reddit/hooks/useInboxPrivacyPolicyBannerSeen.ts");

			function ee() {
				return (ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const te = [],
				ne = l.a.div("StyledDropdown", B.a),
				ae = e => {
					let {
						isLoggedIn: t,
						onMessagesClick: n,
						onBarClick: s,
						markAllAsRead: r,
						messagesBadgeCount: l,
						sendInboxClickSettings: u
					} = e;
					const m = !!l,
						p = Object(i.useCallback)(() => {
							n(), s()
						}, [n, s]),
						b = Object(i.useCallback)(() => {
							u(), s()
						}, [u, s]);
					return o.a.createElement("nav", {
						className: B.a.topNav
					}, o.a.createElement("span", {
						className: B.a.topNavTitle
					}, a.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), t && o.a.createElement("span", {
						className: B.a.topNavLinks
					}, o.a.createElement("span", {
						className: B.a.messagesLinkContainer
					}, o.a.createElement(N.default, {
						className: Object(c.a)(B.a.messagesLink, {
							[B.a.mActive]: m
						}),
						onClick: p,
						to: m ? "/message/unread" : "/message/messages"
					}, a.fbt._("Messages", null, {
						hk: "hulKY"
					}), o.a.createElement(d.a, {
						className: B.a.badgeCount,
						isActive: m,
						unreadCount: l
					}))), o.a.createElement("button", {
						className: B.a.navLink,
						onClick: r
					}, o.a.createElement(y.a, {
						name: "mark_read",
						className: B.a.icon
					})), o.a.createElement(N.default, {
						className: B.a.navLink,
						onClick: b,
						to: "/settings/notifications"
					}, o.a.createElement(y.a, {
						name: "settings",
						className: B.a.icon
					}))))
				},
				ie = e => o.a.createElement("div", {
					className: B.a.bottomBar
				}, o.a.createElement(N.default, {
					className: B.a.bottomLink,
					onClick: () => {
						e.sendInboxClickSeeAll(), e.onBarClick()
					},
					to: "/notifications"
				}, a.fbt._("See All", null, {
					hk: "3L3tFc"
				}))),
				oe = e => {
					const t = Object(x.a)(),
						{
							clearMessageTabBadgeCount: n,
							inboxBadgeCount: a,
							isPending: i,
							messagesBadgeCount: c,
							notifications: l,
							hideTooltip: d,
							isHotPotatoEnabled: u,
							isInboxPolicyBannerEnabled: m,
							isLoggedIn: p,
							isPushNotificationsSupported: b,
							userId: f
						} = e,
						[h, g] = Object(Z.a)(f),
						[_, v] = Object($.a)(f),
						[N, O] = function(e) {
							let {
								key: t,
								userId: n
							} = e;
							const [a, i] = Object(X.a)(t, []);
							return [-1 !== a.indexOf(n), () => {
								i([...a, n])
							}]
						}({
							key: Y.b.HOT_POTATO_BANNER_SEEN,
							userId: f
						}),
						y = !(!l || !l.length),
						k = Object(s.a)(),
						E = k === r.a.Closed || k === r.a.Default || k === r.a.Denied,
						j = b && E && !h;
					return o.a.createElement(ne, null, o.a.createElement("div", {
						className: B.a.tooltipContainer
					}, o.a.createElement(ae, {
						markAllAsRead: () => {
							e.markAllAsRead(), t(Object(R.i)({
								isMiniInbox: !0
							}))
						},
						messagesBadgeCount: c,
						onMessagesClick: () => {
							t(Object(R.u)({
								badgeCount: a,
								tab: R.f.Messages
							})), t(Object(R.j)()), n()
						},
						sendInboxClickSettings: () => t(Object(R.o)(R.c.MiniInbox)),
						onBarClick: d,
						isLoggedIn: p
					}), o.a.createElement(Q, ee({}, e, {
						isPending: i,
						onItemClick: d,
						setDesktopNotificationsPromptSeen: g,
						isDNInboxPromptBannerEnabled: j,
						isInboxPrivacyPolicyBannerEnabled: m && !_,
						setInboxPrivacyPolicyBannerSeen: v,
						isHotPotatoEnabled: u && !N,
						setHotPotatoBannerSeen: O
					})), (y || i) && o.a.createElement(ie, {
						sendInboxClickSeeAll: () => t(Object(R.n)()),
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
				o = n("./src/reddit/components/NotificationUnit/index.m.less"),
				s = n.n(o);
			const r = () => i.a.createElement("li", {
					className: s.a.placeholderWrapper
				}, i.a.createElement("span", {
					className: s.a.placeholderAvatar
				}), i.a.createElement("span", {
					className: s.a.placeholderContent
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
		"./src/reddit/helpers/trackers/hotPotato.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			var a = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
					...Object(i.n)(e),
					action: a.c.CLICK,
					noun: "preview",
					source: "hot_potato"
				}),
				s = () => e => ({
					...Object(i.n)(e),
					action: a.c.CLICK,
					noun: "hot_potato",
					source: "nav"
				}),
				r = () => e => ({
					...Object(i.n)(e),
					action: a.c.CLICK,
					noun: "hot_potato",
					source: "inbox"
				})
		},
		"./src/reddit/helpers/trackers/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "j", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "m", (function() {
				return f
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "i", (function() {
				return N
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "o", (function() {
				return y
			})), n.d(t, "h", (function() {
				return k
			})), n.d(t, "g", (function() {
				return E
			}));
			var a = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/telemetry/index.ts"),
				o = n("./src/telemetry/models/Event.ts");
			var s;
			! function(e) {
				e.FREQUENT = "frequent", e.LOW = "low", e.OFF = "off"
			}(s || (s = {}));
			const r = e => ({
					...a.n(e),
					noun: "desktop_notification_permissions"
				}),
				c = e => e ? "enable" : "disable",
				l = e => {
					Object(i.a)({
						...r(e),
						action: o.c.View,
						source: "popup"
					})
				},
				d = e => {
					Object(i.a)({
						...r(e),
						action: o.c.Allow,
						source: "popup"
					})
				},
				u = e => {
					Object(i.a)({
						...r(e),
						action: o.c.Block,
						source: "popup"
					})
				},
				m = e => {
					Object(i.a)({
						...r(e),
						action: o.c.Close,
						source: "popup"
					})
				},
				p = (e, t, n) => ({
					...a.n(e),
					actionInfo: a.d(e, {
						success: t,
						reason: n
					}),
					noun: "push_token"
				}),
				b = e => {
					Object(i.a)({
						...p(e, !0),
						action: o.c.Request,
						source: "notification"
					})
				},
				f = e => {
					Object(i.a)({
						...p(e, !0),
						action: o.c.Register,
						source: "notification"
					})
				},
				h = (e, t) => {
					Object(i.a)({
						...p(e, !1, t),
						action: o.c.Bail,
						source: "notification"
					})
				},
				g = e => ({
					...a.n(e),
					noun: "push_notification"
				}),
				_ = e => ({
					...g(e),
					notification: a.E(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				v = (e, t) => n => ({
					...a.n(n),
					action: c(e),
					email: {
						type: t
					},
					noun: "email",
					source: "email_app_settings"
				}),
				N = (e, t) => n => ({
					...a.n(n),
					action: c(e),
					notification: {
						type: t
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				O = e => t => ({
					...a.n(t),
					source: "email_app_settings",
					action: c(e),
					noun: "email",
					notification: {
						type: "all"
					}
				}),
				x = (e, t, n) => i => ({
					...a.n(i),
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
					action: o.c.View,
					noun: "screen",
					source: "global",
					actionInfo: {
						pageType: "community_alerts"
					}
				}),
				k = () => e => ({
					...a.n(e),
					action: "click",
					noun: "desktop_notification_permissions",
					source: "overlay"
				}),
				E = () => e => ({
					...a.n(e),
					action: "auto_dismiss",
					noun: "desktop_notification_permissions",
					source: "overlay"
				})
		},
		"./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var a = n("./node_modules/react/index.js"),
				i = n("./src/reddit/helpers/localStorage/index.ts");

			function o(e) {
				const [t, n] = Object(a.useState)(Object(i.s)(e));
				return [t, Object(a.useCallback)(() => {
					n(!0), Object(i.ob)(e)
				}, [])]
			}
		},
		"./src/reddit/hooks/useInboxPrivacyPolicyBannerSeen.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var a = n("./node_modules/react/index.js"),
				i = n("./src/reddit/helpers/localStorage/index.ts");

			function o(e) {
				const [t, n] = Object(a.useState)(() => Object(i.t)(e));
				return [t, Object(a.useCallback)(() => {
					n(!0), Object(i.yb)(e)
				}, [e])]
			}
		},
		"./src/reddit/icons/svgs/HotPotato/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				i = n.n(a);
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
		"./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/EmptyStateComponent.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				i = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/helpers/trackers/inbox.ts"),
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
			var f = e => {
					let {
						inTooltip: t
					} = e;
					const n = {
						to: "/r/cats/top/",
						kind: u.b.InternalLink
					};
					return i.a.createElement("div", {
						className: Object(d.a)(p.a.emptyState, p.a.karmaView, {
							[p.a.inNotificationsPage]: !t
						})
					}, i.a.createElement("div", {
						className: Object(d.a)(p.a.catsImageWrapper, {
							[p.a.inTooltip]: t
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
							[p.a.inTooltip]: t
						})
					}, c.fbt._("You don’t have any activity yet", null, {
						hk: "2GNaV0"
					})), i.a.createElement("p", {
						className: p.a.emptyDescription
					}, c.fbt._("That’s ok, maybe you just need the right inspiration. Have you had your daily cat fix yet today?", null, {
						hk: "3tmgZE"
					})), i.a.createElement(u.t, b({
						className: p.a.emptyStateButton
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
			const v = h.a.wrapped(_, "BellOutline", p.a),
				N = e => {
					let {
						isBannerEnabled: t,
						isLoggedIn: n
					} = e;
					const a = Object(o.d)();
					return i.a.createElement("div", {
						className: Object(d.a)(p.a.emptyState, {
							[p.a.emptyStateWithBanner]: Boolean(t),
							[p.a.loggedOutState]: !n
						})
					}, i.a.createElement(v, null), i.a.createElement("h1", {
						className: p.a.emptyTitle
					}, c.fbt._("Be the first to know", null, {
						hk: "2mNJO0"
					})), i.a.createElement("p", {
						className: p.a.emptyDescription
					}, c.fbt._("This is where you get updates on your activity and recommendations", null, {
						hk: "27V2PG"
					})), !n && i.a.createElement("div", {
						className: p.a.emptyStateLoggedOutContainer
					}, i.a.createElement(u.j, {
						onClick: () => a(Object(g.openLoginModal)())
					}, c.fbt._("Log In", null, {
						hk: "ZR3pC"
					})), i.a.createElement("span", {
						className: p.a.emptyStateDivider
					}), i.a.createElement(u.j, {
						onClick: () => a(Object(g.openRegisterModal)())
					}, c.fbt._("Sign Up", null, {
						hk: "3Jd0SI"
					}))))
				};
			var O = n("./src/reddit/controls/InternalLink/index.tsx");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const y = ["r/somethingimade", "r/CasualConversation", "r/DoesAnybodyElse", "r/Old_Recipes"][Math.floor(100 * Math.random()) % 4];
			var k = e => {
				let {
					inTooltip: t,
					isPopular: n,
					onBtnClick: a
				} = e;
				const o = n ? "r/popular" : y,
					s = `/${o}`,
					r = {
						to: s,
						kind: u.b.InternalLink
					},
					m = i.a.createElement(O.default, {
						to: s,
						target: "_blank",
						rel: "noopener noreferrer",
						className: p.a.subredditLinkR,
						onClick: a
					}, o);
				return i.a.createElement("div", {
					className: Object(d.a)(p.a.emptyState, p.a.karmaView, {
						[p.a.inNotificationsPage]: !t
					})
				}, i.a.createElement("img", {
					src: `${l.a.assetPath}/img/wrappedreddit/default_avatar.png`,
					alt: c.fbt._("default user avatar", null, {
						hk: "1VMTKf"
					}),
					className: Object(d.a)(p.a.avatarImage, {
						[p.a.inTooltip]: t
					})
				}), i.a.createElement("h1", {
					className: Object(d.a)(p.a.emptyTitle, {
						[p.a.inTooltip]: t
					})
				}, c.fbt._("You don’t have any activity yet", null, {
					hk: "43tvWW"
				})), i.a.createElement("p", {
					className: p.a.emptyDescription
				}, n ? c.fbt._("That’s ok, maybe you just need the right inspiration. Try browsing {Link: to r/popular}, for new communities to join.", [c.fbt._param("Link: to r/popular", m)], {
					hk: "VSBWM"
				}) : c.fbt._("That’s ok, maybe you just need the right inspiration. Try posting in {Link: to popular subreddit} , a popular community for discussion.", [c.fbt._param("Link: to popular subreddit", m)], {
					hk: "1WOK4T"
				})), i.a.createElement(u.t, x({
					className: p.a.emptyStateButton,
					onClick: a,
					text: `Visit ${o}`
				}, r)))
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
			var C = e => {
					let {
						inTooltip: t,
						onBtnClick: n
					} = e;
					const a = {
						to: "/r/memes/top/",
						kind: u.b.InternalLink
					};
					return i.a.createElement("div", {
						className: Object(d.a)(p.a.emptyState, p.a.karmaView, {
							[p.a.inNotificationsPage]: !t
						})
					}, i.a.createElement("div", {
						className: Object(d.a)(p.a.memesImageWrapper, {
							[p.a.inTooltip]: t
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
							[p.a.inTooltip]: t
						})
					}, c.fbt._("You don’t have any activity yet", null, {
						hk: "2GNaV0"
					})), i.a.createElement("p", {
						className: p.a.emptyDescription
					}, c.fbt._("That’s ok, maybe you just need the right inspiration. Let’s get some more lolz in your life.", null, {
						hk: "10HMFI"
					})), i.a.createElement(u.t, E({
						className: p.a.emptyStateButton,
						onClick: n
					}, a), c.fbt._("See today’s Top Memes in r/Memes", null, {
						hk: "42zwJz"
					})))
				},
				I = n("./src/lib/notifications/index.ts"),
				P = n("./src/lib/notifications/constants.ts"),
				w = n("./src/redditGQL/types.ts"),
				B = n("./src/reddit/actions/modal.ts"),
				S = n("./src/reddit/actions/notifications/index.ts"),
				T = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				L = n("./src/reddit/actions/toaster.ts"),
				R = n("./src/reddit/components/Settings/modalIds.ts"),
				A = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				H = n("./src/reddit/models/Toast/index.ts"),
				F = n("./src/reddit/selectors/notificationPrefs.ts"),
				U = n("./src/reddit/selectors/user.ts");

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const z = [w.i.PrivateMessage, w.i.ChatMessage, w.i.ChatRequest, w.i.UsernameMention, w.i.PostReply, w.i.UpvotePost, w.i.UpvoteComment, w.i.CommentReply, w.i.ThreadReplies, w.i.TopLevelComment, w.i.NewPostActivity, w.i.UserNewFollower, w.i.PostFlairAdded, w.i.UserFlairAdded, w.i.NewPinnedPost, w.i.AwardReceived, w.i.PostFollow, w.i.TalkLive, w.i.CommentFollow, w.i.LifecyclePostSuggestions, w.i.BroadcastRecommendation, w.i.SubredditRecommendation, w.i.RedditLore, w.i.OneOff, w.i.CakeDay, w.i.ModeratedSrEngagement];
			var G;
			! function(e) {
				e[e.TURN_ON_PN = 0] = "TURN_ON_PN", e[e.TURN_ON_PN_APP = 1] = "TURN_ON_PN_APP", e[e.VERIFY_EMAIL = 2] = "VERIFY_EMAIL", e[e.TURN_ON_DAYLY_DIGEST = 3] = "TURN_ON_DAYLY_DIGEST", e[e.DONE = 4] = "DONE"
			}(G || (G = {}));
			var M = e => {
					let {
						inTooltip: t,
						isBannerEnabled: n,
						isLoggedIn: r,
						onBtnClick: m,
						hideTooltip: b
					} = e;
					const f = Object(o.d)(),
						h = Object(o.e)(U.n),
						g = Object(o.e)(U.D),
						_ = Object(a.useRef)(h),
						[v, O] = Object(a.useState)(G.TURN_ON_PN),
						x = Object(o.e)(e => e.user.accountSettings.changeEmail.api.pending),
						y = Object(a.useCallback)(() => {
							f(async (e, t) => {
								var n, a;
								let i = Object(U.fb)(t());
								i.allIds.length || await e(Object(T.a)(A.a.Email));
								const o = null === (a = null === (n = (i = Object(U.fb)(t())).byId) || void 0 === n ? void 0 : n.EMAIL_DIGEST) || void 0 === a ? void 0 : a.isEnabled;
								O(o ? G.DONE : G.TURN_ON_DAYLY_DIGEST)
							})
						}, [f]),
						k = Object(a.useCallback)(() => {
							g ? y() : O(G.VERIFY_EMAIL)
						}, [g, y]),
						E = Object(a.useCallback)(() => {
							f(async (e, t) => {
								const n = t();
								Object(U.hb)(n).allIds.length || await e(Object(T.a)(A.a.Push)), Object(F.c)(t(), z) ? O(G.TURN_ON_PN_APP) : k()
							})
						}, [f, k]),
						j = Object(a.useCallback)(() => {
							(() => Object(I.a)() === P.a.Granted)() ? E(): O(G.TURN_ON_PN)
						}, [E]),
						C = Object(a.useCallback)(() => {
							m(s.b.Email_perms)(), t && b && b(), f(Object(B.h)(R.a))
						}, [f, m, t, b]);
					if (Object(a.useEffect)(() => {
							j()
						}, [j]), Object(a.useEffect)(() => {
							if (h !== _.current && v === G.VERIFY_EMAIL) {
								const e = Object(L.e)(c.fbt._("Email successfully updated!", null, {
									hk: "3iPlUp"
								}), H.b.SuccessCommunityGreen);
								f(Object(L.f)(e)), y()
							}
						}, [h, v, y]), Object(a.useEffect)(() => {
							x && f(Object(B.g)(R.a))
						}, [x, f]), v === G.DONE) return i.a.createElement(N, {
						isLoggedIn: r,
						isBannerEnabled: n
					});
					const w = {
							to: "/settings/notifications",
							kind: u.b.InternalLink,
							onClick: v === G.TURN_ON_PN_APP ? m(s.b.PN_perms) : m(s.b.Email_perms)
						},
						M = {
							onClick: v === G.TURN_ON_PN ? async () => {
								m(s.b.PN_perms)(), t && b && b(), await f(Object(S.requestBrowserNotificationPermissionPromptByUser)(R.f)), j()
							} : C
						},
						W = v === G.TURN_ON_PN || v === G.TURN_ON_PN_APP,
						V = v === G.TURN_ON_PN_APP || v === G.TURN_ON_DAYLY_DIGEST;
					return i.a.createElement("div", {
						className: Object(d.a)(p.a.emptyState, p.a.karmaView, {
							[p.a.inNotificationsPage]: !t
						})
					}, i.a.createElement("img", {
						src: `${l.a.assetPath}/img/wrappedreddit/default_avatar.png`,
						alt: c.fbt._("default user avatar", null, {
							hk: "1VMTKf"
						}),
						className: Object(d.a)(p.a.avatarImage, {
							[p.a.inTooltip]: t
						})
					}), i.a.createElement("h1", {
						className: Object(d.a)(p.a.emptyTitle, {
							[p.a.inTooltip]: t
						})
					}, W ? c.fbt._("Turn on notifications", null, {
						hk: "3qFpFu"
					}) : c.fbt._("Turn on email digest", null, {
						hk: "obBF8"
					})), i.a.createElement("p", {
						className: p.a.emptyDescription
					}, W ? c.fbt._("Stay in the loop on content from communities you love right on your phone.", null, {
						hk: "1gwnbO"
					}) : c.fbt._("Stay in the loop on content from communities you love right on your email inbox.", null, {
						hk: "1rs4kD"
					})), i.a.createElement(u.t, D({
						className: p.a.emptyStateButton
					}, V ? w : M, {
						text: c.fbt._("OK", null, {
							hk: "rhf0"
						})
					})))
				},
				W = n("./src/reddit/constants/experiments.ts"),
				V = n("./src/reddit/helpers/chooseVariant/index.ts");
			const q = e => Object(V.c)(e, {
					experimentEligibilitySelector: V.a,
					experimentName: W.Cb
				}) === W.Gd.MemesNoBadge,
				K = e => Object(V.c)(e, {
					experimentEligibilitySelector: V.a,
					experimentName: W.Cb
				}) === W.Gd.PnEmailNoBadge,
				J = e => Object(V.c)(e, {
					experimentEligibilitySelector: V.a,
					experimentName: W.Cb
				}) === W.Gd.KarmaNoBadge,
				Q = e => Object(V.c)(e, {
					experimentEligibilitySelector: V.a,
					experimentName: W.Cb
				}) === W.Gd.PopularNoBadge,
				Y = e => Object(V.c)(e, {
					experimentEligibilitySelector: V.a,
					experimentName: W.Cb
				}) === W.Gd.CatsNoBadge;
			t.a = e => {
				let {
					isBannerEnabled: t,
					isLoggedIn: n,
					inTooltip: a,
					hideTooltip: c
				} = e;
				const l = Object(r.a)(),
					d = e => () => l(Object(s.q)({
						actionInfoType: e
					})),
					u = Object(o.e)(q),
					m = Object(o.e)(K),
					p = Object(o.e)(J),
					b = Object(o.e)(Q),
					h = Object(o.e)(Y);
				return u ? i.a.createElement(C, {
					inTooltip: a,
					onBtnClick: d(s.b.Memes)
				}) : m ? i.a.createElement(M, {
					isBannerEnabled: t,
					isLoggedIn: n,
					inTooltip: a,
					onBtnClick: d,
					hideTooltip: c
				}) : p || b ? i.a.createElement(k, {
					inTooltip: a,
					isPopular: b,
					onBtnClick: d(s.b.Karma)
				}) : h ? i.a.createElement(f, {
					inTooltip: a
				}) : i.a.createElement(N, {
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
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			var a = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/reddit/components/InboxTooltip/Component.tsx"),
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
						username: a
					} = t;
					const i = Object(s.Ab)(e, {
						userName: a
					});
					if (!i) return;
					const o = r(e, {
						subredditId: n
					});
					return o ? o[i.id] : void 0
				},
				l = Object(a.a)((e, t) => {
					let {
						subredditId: n
					} = t;
					const a = e.features.banned.userOrder[n];
					return a ? a.map(t => e.features.banned.models[n][t]) : i.a
				}),
				d = (e, t) => {
					let {
						subredditId: n
					} = t;
					const a = Object(o.e)(n);
					return e.features.banned.api.pending[a]
				},
				u = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.features.banned.loadMore[n]
				},
				m = e => e.features.banned.search.api.pending,
				p = e => e.features.banned.search.result,
				b = e => e.features.banned.inContext
		},
		"./src/reddit/selectors/muted.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			}));
			var a = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/reddit/models/SubredditModeration/index.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/pages/modHub/index.ts");
			Object(o.a)({
				pages: {
					modHub: s.a
				}
			});
			const r = [],
				c = Object(a.a)((e, t) => {
					let {
						subredditId: n
					} = t;
					const a = e.pages.modHub.muted.userOrder[n];
					return a ? a.map(t => e.pages.modHub.muted.models[n][t]) : r
				}),
				l = (e, t) => {
					let {
						subredditId: n
					} = t;
					const a = Object(i.e)(n);
					return !!e.pages.modHub.muted.api.pending[a]
				},
				d = (e, t, n) => !!e.pages.modHub.muted.models[t] && !!e.pages.modHub.muted.models[t][n],
				u = e => !!e.pages.modHub.muted.search.api.pending,
				m = e => e.pages.modHub.muted.search.result,
				p = e => {
					var t, n, a;
					return null === (a = null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.modHub) || void 0 === n ? void 0 : n.muted) || void 0 === a ? void 0 : a.inContext
				},
				b = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.pages.modHub.muted.loadMore[n]
				}
		},
		"./src/redditGQL/operations/RegisterWebPushToken.json": function(e) {
			e.exports = JSON.parse('{"id":"197650c1946c"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard~Reddit.d42ef1421aad3ab99445.js.map