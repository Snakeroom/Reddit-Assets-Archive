// https://www.redditstatic.com/desktop2x/AuthorHovercard~Reddit.8eef7aa29c5fcc8323c9.js
// Retrieved at 5/10/2022, 1:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard~Reddit"], {
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
		"./src/lib/notifications/token.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
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
							applicationServerKey: c(r.a.pushNotificationApplicationServerKey)
						};
						n = await t.pushManager.subscribe(e)
					}
					if (!n) return l.FailedNoSubscription;
					const d = await ((e, t) => {
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
		"./src/reddit/actions/moderationLog/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			}));
			const r = "SUBREDDIT__MODERATION_LOG_LOADED",
				a = "SUBREDDIT__ALL_MODERATORS_LOADED"
		},
		"./src/reddit/actions/notifications/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "initializeServiceWorkerChannel", (function() {
				return C
			})), n.d(t, "requestNotificationsPermissions", (function() {
				return B
			})), n.d(t, "subscribeForPNs", (function() {
				return P
			})), n.d(t, "unsubscribeFromPNs", (function() {
				return T
			})), n.d(t, "requestBrowserNotificationPermissionPromptByUser", (function() {
				return L
			})), n.d(t, "subscribeToPermissionsChange", (function() {
				return A
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/omit.js"),
				s = n.n(a),
				o = n("./src/lib/browser/isIncognito.ts"),
				i = n("./src/lib/notifications/token.ts"),
				c = n("./src/lib/notifications/index.ts"),
				l = n("./src/lib/notifications/constants.ts"),
				d = n("./src/lib/serviceWorker/index.ts"),
				u = n("./src/reddit/actions/chat/toggle.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/notifications/utils.ts"),
				b = n("./src/reddit/actions/tabBadging.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/reddit/constants/modals.ts"),
				g = n("./src/reddit/helpers/parseUrl.ts"),
				v = n("./src/reddit/helpers/tabBadging/index.ts"),
				y = n("./src/reddit/helpers/trackers/notifications.ts"),
				O = n("./src/reddit/models/Toast/index.ts"),
				_ = n("./src/reddit/selectors/activeModal.ts"),
				j = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				k = n("./src/reddit/constants/experiments.ts"),
				I = n("./src/reddit/helpers/chooseVariant/index.ts");
			const N = e => Object(I.c)(e, {
				experimentName: k.Rb,
				experimentEligibilitySelector: I.a
			}) === k.pd;
			var x = n("./src/reddit/selectors/meta.ts"),
				E = n("./src/reddit/selectors/user.ts");
			let w = !1;
			const C = async (e, t) => {
				const n = Object(E.O)(e);
				if (w) return;
				if (w = !0, Object(m.a)(e) !== l.c.NotificationsSupported) return;
				await Object(d.a)();
				navigator.serviceWorker.addEventListener("message", r => {
					const a = r.data,
						o = a.command || a.type;
					if ("registerWithServiceWorker" === o) S(e);
					else if (o === v.a && n) {
						const e = s()(a, ["command"]);
						t(Object(b.f)(e))
					} else if ("navigate.chat" === o) {
						const e = Object(g.a)(a.data.href);
						e && e.pathname && t(Object(u.c)(e.pathname))
					}
				}), S(e)
			}, S = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: y.c(e)
				})
			}, B = function(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
				return async (r, a, s) => {
					const i = a(),
						d = Object(x.f)(i),
						u = N(i),
						p = Object(j.e)(i),
						m = Object(_.c)(f.a.NSFW_BLOCKING_MODAL_V2)(i);
					if (p || m) return;
					if (await Object(o.a)() || d) return;
					await C(i, r);
					y.l(i), await Object(c.b)(e, t, () => {
						u || r(Object(l.o)()), r(Object(l.n)()), y.j(i)
					}, (e, t) => {
						r(Object(l.l)()), r(T(t ? l.a.Denied : l.a.Closed)), e && (t ? y.e(i) : y.f(i))
					}, e => {
						r(Object(l.m)()), r(P()), e && y.d(i)
					}, () => {
						r(Object(l.k)()), n()
					})
				}
			}, P = e => async (t, n, a) => {
				const s = n();
				try {
					switch (await Object(i.b)(a.gqlContext)) {
						case i.a.Success:
							Object(m.b)(l.a.Granted), y.m(s), e && t(Object(h.f)({
								kind: O.b.SuccessCommunity,
								text: r.fbt._("Changes saved", null, {
									hk: "wGH5U"
								})
							}));
							break;
						case i.a.FailedResponse:
							y.k(s, "registration_failed_generally");
							break;
						case i.a.FailedGqlReponse:
							y.k(s, "registration_failed_in_gql")
					}
				} catch (o) {
					y.k(s, "registration_failed_uncaught_exception"), console.error(o)
				}
			}, T = (e, t) => async n => {
				try {
					Object(m.b)(e);
					const a = await Object(d.a)();
					if (a) {
						const e = await a.pushManager.getSubscription();
						e && (e.unsubscribe(), t && n(Object(h.f)({
							kind: O.b.SuccessCommunity,
							text: r.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						})))
					}
				} catch (a) {}
			}, L = e => async (t, n) => {
				const r = n();
				if (Object(m.a)(r) === l.c.NotificationsSupported) switch (Object(c.a)()) {
					case l.a.Default:
					case l.a.Closed:
						await t(B(!0, !0));
						break;
					case l.a.Denied:
						t(Object(p.h)(e))
				}
			}, A = () => async (e, t) => {
				var n;
				if (!(null === (n = null === navigator || void 0 === navigator ? void 0 : navigator.permissions) || void 0 === n ? void 0 : n.query)) return;
				const r = t();
				if (Object(m.a)(r) !== l.c.NotificationsSupported) return;
				const a = await navigator.permissions.query({
					name: "notifications"
				});
				a.onchange = () => (t => {
					switch (t) {
						case l.a.Denied:
							e(T(l.a.Denied)), y.e(r);
							break;
						case l.a.Granted:
							e(P()), y.d(r);
							break;
						default:
							e(T(l.a.Default))
					}
				})(a.state)
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
				return l
			})), n.d(t, "g", (function() {
				return d
			}));
			var r = n("./src/lib/loadableAction/index.ts");
			const a = Object(r.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairChanged)),
				s = Object(r.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleUserFlairInSubreddit)),
				o = Object(r.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleAssignOwnFlairPermission)),
				i = Object(r.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.saveUserFlairTemplate)),
				c = Object(r.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.deleteUserFlairTemplate)),
				l = Object(r.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.reorderUserFlairTemplates)),
				d = Object(r.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairLoadedAndModalOpened))
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
			t.a = e => {
				let {
					className: t,
					isActive: n,
					showEmpty: r,
					unreadCount: i
				} = e;
				return n ? a.a.createElement("span", {
					className: Object(s.a)(t, c.a.badgeCounter, {
						[c.a.mEmpty]: r || i < 1
					})
				}, r || i < 1 ? "" : Object(o.b)(i)) : null
			}
		},
		"./src/reddit/components/InboxBanner/Banner.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/helpers/trackers/inbox.ts"),
				c = n("./src/reddit/hooks/useTracking.ts"),
				l = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/components/InboxBanner/index.m.less"),
				u = n.n(d);
			t.a = e => {
				let {
					className: t,
					closeButtonText: n,
					closeIcon: r,
					descriptionText: d,
					primaryButtonText: p,
					titleText: m,
					onClose: b,
					onClick: h
				} = e;
				const f = Object(c.a)();
				return a.a.createElement("div", {
					className: Object(s.a)(u.a.banner, t)
				}, a.a.createElement("div", {
					className: u.a.bannerTitleContainer
				}, m && a.a.createElement("h4", {
					className: u.a.bannerTitle
				}, m), r && a.a.createElement(o.t, {
					onClick: e => {
						b && b(e), f(Object(i.p)({
							dnPromptAction: "dismiss"
						}))
					},
					Icon: Object(l.b)("close_fill"),
					className: Object(s.a)(u.a.closeIcon, u.a.closeButton),
					size: o.d.XXS,
					priority: o.c.Plain
				})), d && a.a.createElement("p", {
					className: u.a.bannerDescription
				}, d), a.a.createElement("div", {
					className: u.a.bannerButtonsContainer
				}, p && a.a.createElement(o.t, {
					text: p,
					priority: o.c.Tertiary,
					className: Object(s.a)(u.a.button, u.a.primaryButton),
					size: o.d.XS,
					onClick: e => {
						h && h(e), f(Object(i.p)({
							dnPromptAction: "cta"
						}))
					}
				}), n && a.a.createElement(o.t, {
					text: n,
					onClick: e => {
						b && b(e), f(Object(i.p)({
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/reddit/components/InboxBanner/Banner.tsx"),
				i = n("./src/reddit/helpers/trackers/inbox.ts"),
				c = n("./src/reddit/hooks/useTracking.ts"),
				l = n("./src/reddit/components/InboxBanner/index.m.less"),
				d = n.n(l);
			const u = e => {
				let {
					onClose: t,
					pageType: n
				} = e;
				const a = Object(c.a)(),
					l = r.fbt._("We’ve updated our {userAgreement} and {privacyPolicy}. Take a look, as the changes take effect September 12, 2021.", [r.fbt._param("userAgreement", s.a.createElement("a", {
						className: d.a.underlineLink,
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "User Agreement")), r.fbt._param("privacyPolicy", s.a.createElement("a", {
						className: d.a.underlineLink,
						href: "https://www.redditinc.com/policies/privacy-policy",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "Privacy Policy"))], {
						hk: "3bGC4g"
					});
				return s.a.createElement(o.a, {
					className: d.a.policyBanner,
					titleText: r.fbt._("Reddit’s User Agreement & Privacy Policy", null, {
						hk: "32fxCY"
					}),
					descriptionText: l,
					primaryButtonText: r.fbt._("Ok", null, {
						hk: "1IJxzv"
					}),
					onClick: e => {
						e.stopPropagation(), t(), a(Object(i.g)(n, i.a.Confirm))
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
				return se
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/lib/notifications/index.ts"),
				i = n("./src/lib/notifications/constants.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/BadgeCounter/index.tsx"),
				u = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				p = n("./node_modules/lodash/omit.js"),
				m = n.n(p),
				b = n("./src/reddit/components/InboxBanner/Banner.tsx"),
				h = n("./src/reddit/components/InboxBanner/index.m.less"),
				f = n.n(h);
			const g = e => {
				let {
					onClose: t,
					onTurnOnBrowserNotifications: n
				} = e;
				return s.a.createElement(b.a, {
					className: f.a.dnPromptBanner,
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
				O = n("./src/reddit/controls/InternalLink/index.tsx"),
				_ = n("./src/reddit/helpers/trackers/hotPotato.ts"),
				j = n("./src/reddit/hooks/useTracking.ts"),
				k = n("./src/reddit/icons/fonts/index.tsx"),
				I = n("./src/reddit/icons/svgs/HotPotato/index.tsx"),
				N = n("./src/reddit/selectors/experiments/hotPotato.ts");
			const x = e => {
				let {
					onClose: t
				} = e;
				const n = Object(v.e)(N.b),
					o = Object(j.a)(),
					i = Object(a.useCallback)(e => {
						t && t(e), o(Object(_.a)())
					}, [t, o]);
				return s.a.createElement("div", {
					className: Object(c.a)(f.a.banner, f.a.hotPotatoBanner)
				}, s.a.createElement(O.a, {
					to: `/r/${n}`,
					className: f.a.bannerContainer,
					onClick: i
				}, s.a.createElement("div", {
					className: f.a.bannerDataContainer
				}, s.a.createElement("div", {
					className: f.a.bannerTitleContainer
				}, s.a.createElement("h4", {
					className: f.a.bannerTitle
				}, r.fbt._("There's a time and r/place for everything", null, {
					hk: "10MnL"
				}))), s.a.createElement("p", {
					className: f.a.bannerDescription
				}, r.fbt._("r/Place is now open. Together we can make something more. Claim your tile and make r/place yours.", null, {
					hk: "2f11Wg"
				}))), s.a.createElement(I.a, {
					className: f.a.bannerImage
				})), s.a.createElement(y.t, {
					onClick: t,
					Icon: Object(k.b)("close_fill"),
					className: f.a.closeButton,
					size: y.d.XXS,
					priority: y.c.Plain
				}))
			};
			var E = n("./src/reddit/components/InboxBanner/PolicyBanner.tsx"),
				w = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				C = n("./src/reddit/components/ResizeSensor/index.tsx"),
				S = n("./src/reddit/components/InboxTooltip/index.m.less"),
				B = n.n(S);
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
						hideNotification: r,
						hideSubredditNotifications: a,
						blockAwarder: o,
						index: i,
						isInboxPostEmbedEnabled: c,
						markNotificationAsRead: l,
						notification: d,
						setActiveOverflowMenuId: u,
						onItemClick: p
					} = this.props, m = i + 1 <= P;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						ref: this.ref,
						className: B.a.notificationResizeWrapper
					}, s.a.createElement(w.a, {
						activeOverflowMenuId: e,
						decreaseSubredditNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: r,
						hideSubredditNotifications: a,
						isInboxPostEmbedEnabled: c,
						isInTooltip: !0,
						markNotificationAsRead: l,
						notification: d,
						setActiveOverflowMenuId: u,
						onItemClick: p,
						blockAwarder: o
					}), !!m && s.a.createElement(C.a, {
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
			const H = {},
				D = "",
				F = 0,
				M = "200px",
				z = "250px",
				W = "270px",
				G = 100,
				q = .5,
				V = 5,
				K = 50,
				J = 55;
			class Q extends s.a.Component {
				constructor() {
					super(...arguments), this.container = s.a.createRef(), this.state = {
						notificationHeights: H,
						currentNotificationCursorIndex: -1
					}, this.resetOverflowMenu = () => {
						this.props.activeOverflowMenuId.length > F && this.props.setActiveOverflowMenuId(D)
					}, this.getContainerHeight = () => {
						const {
							notificationHeights: e
						} = this.state, {
							isDNInboxPromptBannerEnabled: t,
							isInboxPrivacyPolicyBannerEnabled: n,
							isLoggedIn: r
						} = this.props, a = t || n, s = window.innerHeight - K - 2 * J - (a ? G : 0);
						let o = 0;
						for (const i in e) o += e[i];
						return 0 === o ? a ? z : r ? M : W : (a && (o += G), s < o && (o = s + (a ? G : 0)), o)
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
						} = this.state, n = t + V, r = n > e.length ? n : e.length - 1;
						this.setState({
							currentNotificationCursorIndex: r
						})
					}, this.renderNotifications = () => {
						const e = m()(this.props, ["notifications"]),
							{
								notificationHeights: t,
								currentNotificationCursorIndex: n
							} = this.state,
							{
								isInboxInfiniteScrollEnabled: r,
								notifications: a
							} = this.props,
							o = a.length > n + V;
						return (r && a.length > 0 && o ? a.slice(0, n + 1) : a).map((n, r) => s.a.createElement(T, R({}, e, {
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
							const e = a.length > this.state.currentNotificationCursorIndex + V;
							this.props.notifications.length > 0 && r && e ? this.updateCurrentCursorIndex() : t && n({
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
						isHotPotatoEnabled: n,
						isInboxPrivacyPolicyBannerEnabled: r,
						isInboxInfiniteScrollEnabled: a,
						isLoggedIn: o,
						isPending: i,
						notifications: c,
						setDesktopNotificationsPromptSeen: l,
						setInboxPrivacyPolicyBannerSeen: d,
						showBrowserNotificationsPermissionSettings: p,
						setHotPotatoBannerSeen: m
					} = this.props, b = !(!c || !c.length), h = this.getContainerHeight(), f = c.length > this.state.currentNotificationCursorIndex + V, v = r || t || n;
					return s.a.createElement("div", {
						className: B.a.notificationList,
						ref: this.container,
						style: b ? {
							height: h,
							maxHeight: h
						} : {
							minHeight: M
						}
					}, v && s.a.createElement("div", {
						className: B.a.notificationBannerContainer
					}, r && s.a.createElement(E.a, {
						onClose: d,
						pageType: A.c.MiniInbox
					}), t && s.a.createElement(g, {
						onTurnOnBrowserNotifications: p,
						onClose: l
					}), n && s.a.createElement(x, {
						onClose: m
					})), !b && i && s.a.createElement(L.a, null), !b && !i && s.a.createElement(U.a, {
						isBannerEnabled: v,
						isLoggedIn: o,
						inTooltip: !0,
						hideTooltip: this.props.onItemClick
					}), b && this.renderNotifications(), a && b && !i && (e || f) && s.a.createElement(u.a, {
						onChange: this.loadNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: q
					}, s.a.createElement("div", null)))
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
				ne = l.a.div("StyledDropdown", B.a),
				re = e => {
					let {
						isLoggedIn: t,
						onMessagesClick: n,
						onBarClick: o,
						markAllAsRead: i,
						messagesBadgeCount: l,
						sendInboxClickSettings: u
					} = e;
					const p = !!l,
						m = Object(a.useCallback)(() => {
							n(), o()
						}, [n, o]),
						b = Object(a.useCallback)(() => {
							u(), o()
						}, [u, o]);
					return s.a.createElement("nav", {
						className: B.a.topNav
					}, s.a.createElement("span", {
						className: B.a.topNavTitle
					}, r.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), t && s.a.createElement("span", {
						className: B.a.topNavLinks
					}, s.a.createElement("span", {
						className: B.a.messagesLinkContainer
					}, s.a.createElement(O.a, {
						className: Object(c.a)(B.a.messagesLink, {
							[B.a.mActive]: p
						}),
						onClick: m,
						to: p ? "/message/unread" : "/message/messages"
					}, r.fbt._("Messages", null, {
						hk: "hulKY"
					}), s.a.createElement(d.a, {
						className: B.a.badgeCount,
						isActive: p,
						unreadCount: l
					}))), s.a.createElement("button", {
						className: B.a.navLink,
						onClick: i
					}, s.a.createElement(k.a, {
						name: "mark_read",
						className: B.a.icon
					})), s.a.createElement(O.a, {
						className: B.a.navLink,
						onClick: b,
						to: "/settings/notifications"
					}, s.a.createElement(k.a, {
						name: "settings",
						className: B.a.icon
					}))))
				},
				ae = e => s.a.createElement("div", {
					className: B.a.bottomBar
				}, s.a.createElement(O.a, {
					className: B.a.bottomLink,
					onClick: () => {
						e.sendInboxClickSeeAll(), e.onBarClick()
					},
					to: "/notifications"
				}, r.fbt._("See All", null, {
					hk: "3L3tFc"
				}))),
				se = e => {
					const t = Object(j.a)(),
						{
							clearMessageTabBadgeCount: n,
							inboxBadgeCount: r,
							isPending: a,
							messagesBadgeCount: c,
							notifications: l,
							hideTooltip: d,
							isHotPotatoEnabled: u,
							isInboxPolicyBannerEnabled: p,
							isLoggedIn: m,
							isPushNotificationsSupported: b,
							userId: h
						} = e,
						[f, g] = Object(X.a)(h),
						[v, y] = Object($.a)(h),
						[O, _] = function(e) {
							let {
								key: t,
								userId: n
							} = e;
							const [r, a] = Object(Z.a)(t, []);
							return [-1 !== r.indexOf(n), () => {
								a([...r, n])
							}]
						}({
							key: Y.b.HOT_POTATO_BANNER_SEEN,
							userId: h
						}),
						k = !(!l || !l.length),
						I = Object(o.a)(),
						N = I === i.a.Closed || I === i.a.Default || I === i.a.Denied,
						x = b && N && !f;
					return s.a.createElement(ne, null, s.a.createElement("div", {
						className: B.a.tooltipContainer
					}, s.a.createElement(re, {
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
						onBarClick: d,
						isLoggedIn: m
					}), s.a.createElement(Q, ee({}, e, {
						isPending: a,
						onItemClick: d,
						setDesktopNotificationsPromptSeen: g,
						isDNInboxPromptBannerEnabled: x,
						isInboxPrivacyPolicyBannerEnabled: p && !v,
						setInboxPrivacyPolicyBannerSeen: y,
						isHotPotatoEnabled: u && !O,
						setHotPotatoBannerSeen: _
					})), (k || a) && s.a.createElement(ae, {
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
				return f
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				l = n.n(c),
				d = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const p = (e, t, n) => null != n ? n : t ? e : o.c.Plain,
				m = e => {
					let {
						border: t,
						priority: n,
						small: r,
						...a
					} = e;
					return s.a.createElement(o.t, u({}, a, {
						priority: p(o.c.Primary, t, n),
						className: Object(d.a)(a.className, l.a.BaseButton),
						size: r ? o.d.S : o.d.M
					}))
				},
				b = e => s.a.createElement(s.a.Fragment, null, s.a.createElement("span", {
					className: l.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), s.a.createElement("span", {
					className: l.a.UnsubscribeButtonHover
				}, "subreddit" === e ? r.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : r.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				h = e => {
					let {
						buttonType: t,
						border: n,
						priority: r,
						small: a,
						...i
					} = e;
					return s.a.createElement(o.t, u({}, i, {
						priority: p(o.c.Secondary, n, r),
						className: Object(d.a)(i.className, l.a.BaseButton),
						size: a ? o.d.S : o.d.M,
						text: b(t)
					}))
				};
			class f extends s.a.Component {
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
						isFullWidth: o = !1,
						style: c
					} = this.props, l = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: r,
						small: a,
						isFullWidth: o,
						style: c
					};
					return this.props.userIsSubscriber ? s.a.createElement(h, u({}, l, {
						buttonType: this.props.identifier.type
					})) : s.a.createElement(m, u({}, l, {
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
		"./src/reddit/helpers/trackers/hotPotato.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const s = () => e => ({
					...Object(a.n)(e),
					action: r.c.CLICK,
					noun: "preview",
					source: "hot_potato"
				}),
				o = () => e => ({
					...Object(a.n)(e),
					action: r.c.CLICK,
					noun: "hot_potato",
					source: "nav"
				}),
				i = () => e => ({
					...Object(a.n)(e),
					action: r.c.CLICK,
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
				return p
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "m", (function() {
				return h
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "n", (function() {
				return j
			})), n.d(t, "o", (function() {
				return k
			})), n.d(t, "h", (function() {
				return I
			})), n.d(t, "g", (function() {
				return N
			}));
			var r = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/telemetry/index.ts"),
				s = n("./src/telemetry/models/Event.ts");
			var o;
			! function(e) {
				e.FREQUENT = "frequent", e.LOW = "low", e.OFF = "off"
			}(o || (o = {}));
			const i = e => ({
					...r.n(e),
					noun: "desktop_notification_permissions"
				}),
				c = e => e ? "enable" : "disable",
				l = e => {
					Object(a.a)({
						...i(e),
						action: s.c.View,
						source: "popup"
					})
				},
				d = e => {
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
				p = e => {
					Object(a.a)({
						...i(e),
						action: s.c.Close,
						source: "popup"
					})
				},
				m = (e, t, n) => ({
					...r.n(e),
					actionInfo: r.d(e, {
						success: t,
						reason: n
					}),
					noun: "push_token"
				}),
				b = e => {
					Object(a.a)({
						...m(e, !0),
						action: s.c.Request,
						source: "notification"
					})
				},
				h = e => {
					Object(a.a)({
						...m(e, !0),
						action: s.c.Register,
						source: "notification"
					})
				},
				f = (e, t) => {
					Object(a.a)({
						...m(e, !1, t),
						action: s.c.Bail,
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
				O = (e, t) => n => ({
					...r.n(n),
					action: c(e),
					notification: {
						type: t
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				_ = e => t => ({
					...r.n(t),
					source: "email_app_settings",
					action: c(e),
					noun: "email",
					notification: {
						type: "all"
					}
				}),
				j = (e, t, n) => a => ({
					...r.n(a),
					action: "set_frequency",
					noun: n,
					source: "community_notifications",
					subreddit: {
						id: e,
						name: t.toLowerCase()
					}
				}),
				k = () => e => ({
					...r.n(e),
					action: s.c.View,
					noun: "screen",
					source: "global",
					actionInfo: {
						pageType: "community_alerts"
					}
				}),
				I = () => e => ({
					...r.n(e),
					action: "click",
					noun: "desktop_notification_permissions",
					source: "overlay"
				}),
				N = () => e => ({
					...r.n(e),
					action: "auto_dismiss",
					noun: "desktop_notification_permissions",
					source: "overlay"
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
				const [t, n] = Object(r.useState)(() => Object(a.t)(e));
				return [t, Object(r.useCallback)(() => {
					n(!0), Object(a.xb)(e)
				}, [e])]
			}
		},
		"./src/reddit/icons/svgs/HotPotato/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
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
		"./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/EmptyStateComponent.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/helpers/trackers/inbox.ts"),
				i = n("./src/reddit/hooks/useTracking.ts"),
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
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var h = e => {
					let {
						inTooltip: t
					} = e;
					const n = {
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
						className: m.a.emptyStateButton
					}, n), c.fbt._("See today’s Top Cats in r/cats", null, {
						hk: "Um68y"
					})))
				},
				f = n("./src/lib/lessComponent.tsx"),
				g = n("./src/reddit/actions/login.ts");
			var v = e => a.a.createElement("svg", {
				className: e.className,
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 21"
			}, a.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M18.4 14.788c-.662 0-1.2-.537-1.2-1.202l-.012-5.998C17.188 3.625 13.963.4 10 .4 6.037.4 2.811 3.625 2.811 7.586l-.01 6.002c0 .663-.54 1.2-1.2 1.2a1.199 1.199 0 100 2.4h16.8a1.2 1.2 0 100-2.4zm-9.6 3.6H7.6c0 1.324 1.076 2.4 2.4 2.4 1.323 0 2.4-1.076 2.4-2.4H8.8zm-3.6-4.797c0 .422-.087.822-.22 1.197H15.02a3.554 3.554 0 01-.22-1.2l-.013-5.997A4.794 4.794 0 0010 2.8a4.794 4.794 0 00-4.789 4.787l-.01 6.003z"
			}));
			const y = f.a.wrapped(v, "BellOutline", m.a),
				O = e => {
					let {
						isBannerEnabled: t,
						isLoggedIn: n
					} = e;
					const r = Object(s.d)();
					return a.a.createElement("div", {
						className: Object(d.a)(m.a.emptyState, {
							[m.a.emptyStateWithBanner]: Boolean(t),
							[m.a.loggedOutState]: !n
						})
					}, a.a.createElement(y, null), a.a.createElement("h1", {
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
						onClick: () => r(Object(g.i)())
					}, c.fbt._("Log In", null, {
						hk: "ZR3pC"
					})), a.a.createElement("span", {
						className: m.a.emptyStateDivider
					}), a.a.createElement(u.j, {
						onClick: () => r(Object(g.j)())
					}, c.fbt._("Sign Up", null, {
						hk: "3Jd0SI"
					}))))
				};
			var _ = n("./src/reddit/controls/InternalLink/index.tsx");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const k = ["r/somethingimade", "r/CasualConversation", "r/DoesAnybodyElse", "r/Old_Recipes"][Math.floor(100 * Math.random()) % 4];
			var I = e => {
				let {
					inTooltip: t,
					isPopular: n,
					onBtnClick: r
				} = e;
				const s = n ? "r/popular" : k,
					o = `/${s}`,
					i = {
						to: o,
						kind: u.b.InternalLink
					},
					p = a.a.createElement(_.a, {
						to: o,
						target: "_blank",
						rel: "noopener noreferrer",
						className: m.a.subredditLinkR,
						onClick: r
					}, s);
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
					hk: "43tvWW"
				})), a.a.createElement("p", {
					className: m.a.emptyDescription
				}, n ? c.fbt._("That’s ok, maybe you just need the right inspiration. Try browsing {Link: to r/popular}, for new communities to join.", [c.fbt._param("Link: to r/popular", p)], {
					hk: "VSBWM"
				}) : c.fbt._("That’s ok, maybe you just need the right inspiration. Try posting in {Link: to popular subreddit} , a popular community for discussion.", [c.fbt._param("Link: to popular subreddit", p)], {
					hk: "1WOK4T"
				})), a.a.createElement(u.t, j({
					className: m.a.emptyStateButton,
					onClick: r,
					text: `Visit ${s}`
				}, i)))
			};

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const x = "/img/notifications/star.png";
			var E = e => {
					let {
						inTooltip: t,
						onBtnClick: n
					} = e;
					const r = {
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
						src: `${l.a.assetPath}${x}`,
						alt: c.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(d.a)(m.a.star, m.a.inBottom)
					}), a.a.createElement("img", {
						src: `${l.a.assetPath}${x}`,
						alt: c.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(d.a)(m.a.star, m.a.inCenter)
					}), a.a.createElement("img", {
						src: `${l.a.assetPath}${x}`,
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
					})), a.a.createElement(u.t, N({
						className: m.a.emptyStateButton,
						onClick: n
					}, r), c.fbt._("See today’s Top Memes in r/Memes", null, {
						hk: "42zwJz"
					})))
				},
				w = n("./src/lib/notifications/index.ts"),
				C = n("./src/lib/notifications/constants.ts"),
				S = n("./src/redditGQL/types.ts"),
				B = n("./src/reddit/actions/modal.ts"),
				P = n("./src/reddit/actions/notifications/index.ts"),
				T = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				L = n("./src/reddit/actions/toaster.ts"),
				A = n("./src/reddit/components/Settings/modalIds.ts"),
				U = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				R = n("./src/reddit/models/Toast/index.ts"),
				H = n("./src/reddit/selectors/notificationPrefs.ts"),
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
			const M = [S.h.PrivateMessage, S.h.ChatMessage, S.h.ChatRequest, S.h.UsernameMention, S.h.PostReply, S.h.UpvotePost, S.h.UpvoteComment, S.h.CommentReply, S.h.ThreadReplies, S.h.TopLevelComment, S.h.NewPostActivity, S.h.UserNewFollower, S.h.PostFlairAdded, S.h.UserFlairAdded, S.h.NewPinnedPost, S.h.AwardReceived, S.h.PostFollow, S.h.TalkLive, S.h.CommentFollow, S.h.LifecyclePostSuggestions, S.h.BroadcastRecommendation, S.h.SubredditRecommendation, S.h.RedditLore, S.h.OneOff, S.h.CakeDay, S.h.ModeratedSrEngagement];
			var z;
			! function(e) {
				e[e.TURN_ON_PN = 0] = "TURN_ON_PN", e[e.TURN_ON_PN_APP = 1] = "TURN_ON_PN_APP", e[e.VERIFY_EMAIL = 2] = "VERIFY_EMAIL", e[e.TURN_ON_DAYLY_DIGEST = 3] = "TURN_ON_DAYLY_DIGEST", e[e.DONE = 4] = "DONE"
			}(z || (z = {}));
			var W = e => {
					let {
						inTooltip: t,
						isBannerEnabled: n,
						isLoggedIn: i,
						onBtnClick: p,
						hideTooltip: b
					} = e;
					const h = Object(s.d)(),
						f = Object(s.e)(D.n),
						g = Object(s.e)(D.D),
						v = Object(r.useRef)(f),
						[y, _] = Object(r.useState)(z.TURN_ON_PN),
						j = Object(s.e)(e => e.user.accountSettings.changeEmail.api.pending),
						k = Object(r.useCallback)(() => {
							h(async (e, t) => {
								var n, r;
								let a = Object(D.eb)(t());
								a.allIds.length || await e(Object(T.a)(U.a.Email));
								const s = null === (r = null === (n = (a = Object(D.eb)(t())).byId) || void 0 === n ? void 0 : n.EMAIL_DIGEST) || void 0 === r ? void 0 : r.isEnabled;
								_(s ? z.DONE : z.TURN_ON_DAYLY_DIGEST)
							})
						}, [h]),
						I = Object(r.useCallback)(() => {
							g ? k() : _(z.VERIFY_EMAIL)
						}, [g, k]),
						N = Object(r.useCallback)(() => {
							h(async (e, t) => {
								const n = t();
								Object(D.gb)(n).allIds.length || await e(Object(T.a)(U.a.Push)), Object(H.c)(t(), M) ? _(z.TURN_ON_PN_APP) : I()
							})
						}, [h, I]),
						x = Object(r.useCallback)(() => {
							(() => Object(w.a)() === C.a.Granted)() ? N(): _(z.TURN_ON_PN)
						}, [N]),
						E = Object(r.useCallback)(() => {
							p(o.b.Email_perms)(), t && b && b(), h(Object(B.h)(A.a))
						}, [h, p, t, b]);
					if (Object(r.useEffect)(() => {
							x()
						}, [x]), Object(r.useEffect)(() => {
							if (f !== v.current && y === z.VERIFY_EMAIL) {
								const e = Object(L.e)(c.fbt._("Email successfully updated!", null, {
									hk: "3iPlUp"
								}), R.b.SuccessCommunityGreen);
								h(Object(L.f)(e)), k()
							}
						}, [f, y, k]), Object(r.useEffect)(() => {
							j && h(Object(B.g)(A.a))
						}, [j, h]), y === z.DONE) return a.a.createElement(O, {
						isLoggedIn: i,
						isBannerEnabled: n
					});
					const S = {
							to: "/settings/notifications",
							kind: u.b.InternalLink,
							onClick: y === z.TURN_ON_PN_APP ? p(o.b.PN_perms) : p(o.b.Email_perms)
						},
						W = {
							onClick: y === z.TURN_ON_PN ? async () => {
								p(o.b.PN_perms)(), t && b && b(), await h(Object(P.requestBrowserNotificationPermissionPromptByUser)(A.f)), x()
							} : E
						},
						G = y === z.TURN_ON_PN || y === z.TURN_ON_PN_APP,
						q = y === z.TURN_ON_PN_APP || y === z.TURN_ON_DAYLY_DIGEST;
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
					}, G ? c.fbt._("Turn on notifications", null, {
						hk: "3qFpFu"
					}) : c.fbt._("Turn on email digest", null, {
						hk: "obBF8"
					})), a.a.createElement("p", {
						className: m.a.emptyDescription
					}, G ? c.fbt._("Stay in the loop on content from communities you love right on your phone.", null, {
						hk: "1gwnbO"
					}) : c.fbt._("Stay in the loop on content from communities you love right on your email inbox.", null, {
						hk: "1rs4kD"
					})), a.a.createElement(u.t, F({
						className: m.a.emptyStateButton
					}, q ? S : W, {
						text: c.fbt._("OK", null, {
							hk: "rhf0"
						})
					})))
				},
				G = n("./src/reddit/constants/experiments.ts"),
				q = n("./src/reddit/helpers/chooseVariant/index.ts");
			const V = e => Object(q.c)(e, {
					experimentEligibilitySelector: q.a,
					experimentName: G.ub
				}) === G.wd.MemesNoBadge,
				K = e => Object(q.c)(e, {
					experimentEligibilitySelector: q.a,
					experimentName: G.ub
				}) === G.wd.PnEmailNoBadge,
				J = e => Object(q.c)(e, {
					experimentEligibilitySelector: q.a,
					experimentName: G.ub
				}) === G.wd.KarmaNoBadge,
				Q = e => Object(q.c)(e, {
					experimentEligibilitySelector: q.a,
					experimentName: G.ub
				}) === G.wd.PopularNoBadge,
				Y = e => Object(q.c)(e, {
					experimentEligibilitySelector: q.a,
					experimentName: G.ub
				}) === G.wd.CatsNoBadge;
			t.a = e => {
				let {
					isBannerEnabled: t,
					isLoggedIn: n,
					inTooltip: r,
					hideTooltip: c
				} = e;
				const l = Object(i.a)(),
					d = e => () => l(Object(o.q)({
						actionInfoType: e
					})),
					u = Object(s.e)(V),
					p = Object(s.e)(K),
					m = Object(s.e)(J),
					b = Object(s.e)(Q),
					f = Object(s.e)(Y);
				return u ? a.a.createElement(E, {
					inTooltip: r,
					onBtnClick: d(o.b.Memes)
				}) : p ? a.a.createElement(W, {
					isBannerEnabled: t,
					isLoggedIn: n,
					inTooltip: r,
					onBtnClick: d,
					hideTooltip: c
				}) : m || b ? a.a.createElement(I, {
					inTooltip: r,
					isPopular: b,
					onBtnClick: d(o.b.Karma)
				}) : f ? a.a.createElement(h, {
					inTooltip: r
				}) : a.a.createElement(O, {
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
				a = n("./src/reddit/actions/subredditModeration/constants.ts");
			var s = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.g:
						case a.f:
							return null;
						case a.e:
							return t.payload;
						default:
							return e
					}
				},
				o = n("./src/reddit/models/SubredditModeration/index.ts");
			const i = {};
			var c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.g: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, a = Object(o.e)(n, r);
							return {
								...e,
								[a]: !0
							}
						}
						case a.f:
						case a.e: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, a = Object(o.e)(n, r);
							return {
								...e,
								[a]: !1
							}
						}
						default:
							return e
					}
				},
				l = Object(r.c)({
					error: s,
					pending: c
				});
			const d = {};
			var u = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.f: {
						const {
							fetchedToken: n,
							subredditId: r
						} = t.payload, a = Object(o.e)(r, n);
						return {
							...e,
							[a]: !0
						}
					}
					default:
						return e
				}
			};
			const p = {};
			var m = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.f: {
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
				b = n("./node_modules/icepick/icepick.js");
			const h = {};
			var f = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.d:
					case a.f: {
						const {
							subredditId: n,
							approvedSubmitters: r
						} = t.payload, a = {
							[n]: r
						};
						return Object(b.merge)(e, a)
					}
					case a.k: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(b.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			var g = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.j:
					case a.i:
						return null;
					case a.h:
						return t.payload;
					default:
						return e
				}
			};
			var v = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.j:
							return !0;
						case a.i:
						case a.h:
							return !1;
						default:
							return e
					}
				},
				y = Object(r.c)({
					error: g,
					pending: v
				});
			var O = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.j:
							return null;
						case a.i: {
							const e = t.payload.approvedSubmitterIds[0];
							return e ? t.payload.approvedSubmitters[e] : null
						}
						default:
							return e
					}
				},
				_ = Object(r.c)({
					api: y,
					result: O
				});
			const j = {};
			var k = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.f: {
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
						case a.k: {
							const {
								subredditId: n,
								userId: r
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== r)
							}
						}
						case a.d: {
							const {
								subredditId: n,
								approvedSubmitterIds: r
							} = t.payload, a = r[0];
							return a && e[n] && -1 === e[n].indexOf(a) ? {
								[n]: [a, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				I = Object(r.c)({
					api: l,
					fetchedTokens: u,
					loadMore: m,
					models: f,
					search: _,
					userOrder: k
				});
			var N = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.n:
					case a.m:
						return null;
					case a.l:
						return t.payload;
					default:
						return e
				}
			};
			const x = {};
			var E = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.n: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, a = Object(o.f)(n, r);
							return {
								...e,
								[a]: !0
							}
						}
						case a.m:
						case a.l: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, a = Object(o.f)(n, r);
							return {
								...e,
								[a]: !1
							}
						}
						default:
							return e
					}
				},
				w = Object(r.c)({
					error: N,
					pending: E
				});
			const C = {};
			var S = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.m: {
						const {
							fetchedToken: n,
							subredditId: r
						} = t.payload, a = Object(o.f)(r, n);
						return {
							...e,
							[a]: !0
						}
					}
					default:
						return e
				}
			};
			const B = {};
			var P = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.m: {
						const {
							subredditId: e,
							loadMoreToken: n
						} = t.payload;
						return {
							[e]: n
						}
					}
					default:
						return e
				}
			};
			const T = {};
			var L = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.m: {
							const {
								subredditId: n,
								approvedTalkHosts: r,
								forceRefresh: a
							} = t.payload, s = {
								[n]: [...a ? [] : e[n] || [], ...r]
							};
							return Object(b.merge)(e, s)
						}
						case a.o: {
							const {
								subredditId: n,
								userId: r
							} = t.payload, a = {
								[n]: e[n].filter(e => e.redditor.id !== r)
							};
							return Object(b.merge)(e, a)
						}
						default:
							return e
					}
				},
				A = Object(r.c)({
					api: w,
					fetchedTokens: S,
					loadMore: P,
					models: L
				}),
				U = n("./src/reddit/actions/grantUserFlair/constants.ts");
			var R = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case U.g:
					case U.i:
						return null;
					case U.f:
						return t.payload;
					default:
						return e
				}
			};
			var H = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case U.i:
							return !0;
						case U.g:
						case U.f:
							return !1;
						default:
							return e
					}
				},
				D = Object(r.c)({
					error: R,
					pending: H
				}),
				F = n("./node_modules/lodash/merge.js"),
				M = n.n(F),
				z = n("./node_modules/lodash/omit.js"),
				W = n.n(z);
			const G = {};
			var q = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case U.g:
					case U.k: {
						const {
							subredditId: n,
							flairedUsers: r
						} = t.payload;
						return M()({
							...e
						}, {
							[n]: r
						})
					}
					case U.c: {
						const {
							subredditId: n,
							userName: r
						} = t.payload, a = W()(e[n], r);
						return {
							...e,
							[n]: a
						}
					}
					case U.a:
					case U.b:
					case U.h:
						const {
							subredditId: n, userName: r, applied: a
						} = t.payload;
						return a ? {
							...e,
							[n]: {
								...e[n],
								[r]: a
							}
						} : e;
					default:
						return e
				}
			};
			const V = {};
			var K = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case U.g: {
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
			var J = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case U.l:
					case U.k:
						return null;
					case U.j:
						return t.payload;
					default:
						return e
				}
			};
			var Q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case U.l:
							return !0;
						case U.k:
						case U.j:
							return !1;
						default:
							return e
					}
				},
				Y = Object(r.c)({
					error: J,
					pending: Q
				});
			var Z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case U.k: {
							const {
								searchResult: e
							} = t.payload;
							return e
						}
						case U.c: {
							const {
								userName: n
							} = t.payload;
							return e === n ? null : e
						}
						default:
							return e
					}
				},
				X = Object(r.c)({
					api: Y,
					result: Z
				});
			const $ = {};
			var ee = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case U.g: {
							const {
								key: n,
								userOrder: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case U.a: {
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
						case U.c: {
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
				te = Object(r.c)({
					api: D,
					models: q,
					pageInfo: K,
					search: X,
					userOrder: ee
				}),
				ne = n("./src/reddit/actions/moderationLog/constants.ts");
			const re = {};
			var ae = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : re,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.b: {
						const {
							actionIds: n,
							key: r,
							subredditId: a
						} = t.payload;
						return {
							...e,
							[a]: {
								...e[a] || {},
								[r]: n
							}
						}
					}
					default:
						return e
				}
			};
			const se = {};
			var oe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : se,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ne.b: {
							const {
								normalizedModerationLog: n,
								subredditId: r
							} = t.payload, a = {};
							n.forEach(e => {
								a[e.id] = e
							});
							const s = {
								[r]: a
							};
							return M()({
								...e
							}, s)
						}
						default:
							return e
					}
				},
				ie = Object(r.c)({
					itemOrder: ae,
					models: oe
				});
			var ce = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.b: {
						const {
							endCursor: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const le = {};
			var de = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : le,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.b: {
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
			const ue = {};
			var pe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ue,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.b: {
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
			const me = [];
			var be = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : me,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.a: {
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
			var he = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ne.b: {
							const {
								startCursor: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				fe = Object(r.c)({
					actions: ie,
					endCursor: ce,
					hasNextPage: de,
					hasPreviousPage: pe,
					moderators: be,
					startCursor: he
				});
			const ge = {};
			var ve = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ge,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.O:
					case a.y: {
						const {
							subredditId: n,
							moderators: r
						} = t.payload.response || t.payload, a = {
							[n]: r
						};
						return Object(b.merge)(e, a)
					}
					case a.C: {
						const {
							subredditId: n,
							userId: r,
							permissions: a
						} = t.payload;
						return Object(b.setIn)(e, [n, r, "modPermissions"], a)
					}
					case a.jb: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(b.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			const ye = {};
			var Oe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ye,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.z:
					case a.y: {
						const {
							key: n,
							subredditId: r
						} = t.payload;
						return r ? {
							...e,
							[n]: null
						} : e
					}
					case a.x: {
						const {
							error: n,
							key: r,
							subredditId: a
						} = t.payload;
						return a ? {
							...e,
							[r]: n
						} : e
					}
					default:
						return e
				}
			};
			const _e = {};
			var je = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _e,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.x:
						case a.y: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !1
							} : e
						}
						case a.z: {
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
				ke = Object(r.c)({
					error: Oe,
					pending: je
				});
			const Ie = {};
			var Ne = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ie,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.y: {
							const {
								subredditId: n,
								response: r,
								key: a
							} = t.payload;
							return Object(b.setIn)(e, [n, a], r.moderatorIds)
						}
						case a.jb: {
							const {
								subredditId: n,
								userId: r,
								key: a
							} = t.payload, s = e[n][a].filter(e => e !== r);
							return Object(b.setIn)(e, [n, a], s)
						}
						default:
							return e
					}
				},
				xe = Object(r.c)({
					data: Ne,
					api: ke
				});
			var Ee = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.F:
					case a.E:
						return null;
					case a.D:
						return t.payload;
					default:
						return e
				}
			};
			var we = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.E:
						case a.D:
							return !1;
						case a.F:
							return !0;
						default:
							return e
					}
				},
				Ce = Object(r.c)({
					error: Ee,
					pending: we
				});
			const Se = {};
			var Be = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Se,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.E: {
						const {
							subredditId: n,
							moderators: r
						} = t.payload;
						return Object(b.set)(e, n, r)
					}
					case a.gb: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(b.unsetIn)(e, [n, r])
					}
					case a.c: {
						const n = t.payload,
							{
								subredditId: r,
								moderators: a
							} = n,
							s = {
								[r]: a
							};
						return Object(b.merge)(e, s)
					}
					default:
						return e
				}
			};
			const Pe = {};
			var Te = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.E: {
							const {
								subredditId: n,
								moderatorIds: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case a.gb: {
							const {
								subredditId: n,
								userId: r
							} = t.payload, a = e[n].filter(e => e !== r);
							return {
								...e,
								[n]: a
							}
						}
						case a.c: {
							const n = t.payload,
								{
									subredditId: r,
									moderatorIds: a
								} = n,
								s = [...e[r] || [], ...a];
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				Le = Object(r.c)({
					api: Ce,
					models: Be,
					userOrder: Te
				});
			const Ae = {};
			var Ue = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ae,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.L: {
						const {
							subredditId: n,
							response: r
						} = t.payload, {
							invitePending: a
						} = r, s = {
							[n]: a
						};
						return Object(b.merge)(e, s)
					}
					case a.I:
					case a.J: {
						const {
							subredditId: n
						} = t.payload;
						return Object(b.unset)(e, n)
					}
					default:
						return e
				}
			};
			const Re = {};
			var He = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Re,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.y: {
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
			const De = {};
			var Fe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : De,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.L: {
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
			const Me = {};
			var ze = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Me,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.L: {
						const {
							response: n
						} = t.payload, r = {
							[n.subredditId]: n.moderators
						};
						return Object(b.merge)({
							...e
						}, r)
					}
					case a.C: {
						const n = t.payload,
							{
								subredditId: r,
								userId: a,
								permissions: s
							} = n;
						return e[r] && e[r][a] ? Object(b.setIn)(e, [r, a, "modPermissions"], s) : e
					}
					default:
						return e
				}
			};
			var We = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.P:
					case a.O:
						return null;
					case a.N:
						return t.payload;
					default:
						return e
				}
			};
			var Ge = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.P:
							return !0;
						case a.O:
						case a.N:
							return !1;
						default:
							return e
					}
				},
				qe = Object(r.c)({
					error: We,
					pending: Ge
				}),
				Ve = n("./node_modules/lodash/isEqual.js"),
				Ke = n.n(Ve);
			var Je = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.P:
						case a.N:
						case a.jb:
							return null;
						case a.O: {
							const e = t.payload.moderatorIds[0];
							return e ? t.payload.moderators[e] : null
						}
						case a.C: {
							const {
								userId: n,
								permissions: r
							} = t.payload;
							return e && e.id === n && !Ke()(e.modPermissions, r) ? {
								...e,
								modPermissions: r
							} : e
						}
						default:
							return e
					}
				},
				Qe = Object(r.c)({
					api: qe,
					result: Je
				});
			const Ye = {};
			var Ze = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ye,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.M:
					case a.L: {
						const {
							subredditId: n,
							key: r
						} = t.payload;
						return n ? {
							...e,
							[r]: null
						} : e
					}
					case a.K: {
						const {
							error: n,
							subredditId: r,
							key: a
						} = t.payload;
						return r ? {
							...e,
							[a]: n
						} : e
					}
					default:
						return e
				}
			};
			const Xe = {};
			var $e = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.K:
						case a.L: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !1
							} : e
						}
						case a.M: {
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
				et = Object(r.c)({
					error: Ze,
					pending: $e
				});
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const tt = {};
			var nt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.L: {
							const {
								response: n,
								subredditId: r,
								key: a
							} = t.payload, {
								moderatorIds: s
							} = n;
							return Object(b.merge)(e, {
								[r]: {
									[a]: s
								}
							})
						}
						case a.jb: {
							const {
								subredditId: n,
								userId: r
							} = t.payload, a = {
								...e[n]
							};
							return Object.keys(e[n]).forEach(t => {
								const s = e[n][t].filter(e => e !== r);
								a[t] = s
							}), Object(b.set)(e, n, a)
						}
						default:
							return e
					}
				},
				rt = Object(r.c)({
					data: nt,
					api: et
				}),
				at = Object(r.c)({
					editableModerators: ve,
					editableUserOrder: xe,
					invitedModerators: Le,
					invitePending: Ue,
					loadMoreModerators: Fe,
					loadMoreEditableModerators: He,
					models: ze,
					search: Qe,
					userOrder: rt
				}),
				st = n("./src/reddit/actions/bulkActions/constants.ts");
			var ot = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case st.c:
						case st.b:
							return null;
						case st.a:
							return t.payload;
						default:
							return e
					}
				},
				it = n("./src/reddit/actions/modQueue/constants.ts");
			var ct = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case st.c:
							return !0;
						case st.b:
						case st.a:
						case it.s:
						case it.r:
							return !1;
						default:
							return e
					}
				},
				lt = Object(r.c)({
					error: ot,
					pending: ct
				});
			const dt = {};
			var ut = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.a: {
							const {
								ids: n
							} = t.payload, r = {};
							return n.forEach(e => r[e] = !0), {
								...e,
								...r
							}
						}
						case it.d: {
							const {
								ids: n
							} = t.payload;
							return W()(e, n)
						}
						case it.c: {
							const {
								ids: e
							} = t.payload, n = {};
							return e.forEach(e => n[e] = !0), n
						}
						default:
							return e
					}
				},
				pt = n("./src/reddit/models/ModQueue/index.ts");
			const mt = {};
			var bt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case st.b: {
							const {
								operation: e,
								ids: n
							} = t.payload;
							return "approve" === e ? mt : {
								[pt.c[e]]: n
							}
						}
						default:
							return e
					}
				},
				ht = Object(r.c)({
					api: lt,
					selectedItems: ut,
					undoLastAction: bt
				});
			var ft = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.g:
					case it.f:
						return null;
					case it.e:
						return t.payload;
					default:
						return e
				}
			};
			var gt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.g:
							return !0;
						case it.f:
						case it.e:
							return !1;
						default:
							return e
					}
				},
				vt = Object(r.c)({
					error: ft,
					pending: gt
				});
			const yt = {};
			var Ot = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.f: {
						const {
							listingKey: n,
							page: r,
							response: a
						} = t.payload, {
							modqueue: s
						} = a;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: s
							}
						}
					}
					default:
						return e
				}
			};
			const _t = {};
			var jt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _t,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.f: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: a
							} = r, s = a[a.length - 1] || null;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				kt = Object(r.c)({
					api: vt,
					itemOrder: Ot,
					loadMore: jt
				}),
				It = n("./src/reddit/actions/pages/modListing/constants.ts");
			var Nt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case It.e: {
						const n = t.payload,
							{
								moderatingSubreddits: r
							} = n;
						return r ? null : e
					}
					case it.i:
					case it.f:
					case it.m:
					case it.p:
					case it.v: {
						const {
							response: e
						} = t.payload, {
							moderatedAfter: n
						} = e;
						return n
					}
					case it.k: {
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
			const xt = [];
			var Et = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.i:
					case it.f:
					case it.m:
					case it.p:
					case it.v: {
						const {
							response: e
						} = t.payload, {
							listingOrder: n
						} = e;
						return n
					}
					case it.k: {
						const n = t.payload,
							{
								listingOrder: r
							} = n;
						return [...e, ...r]
					}
					case It.e: {
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
			var wt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.b:
						return !0;
					default:
						return e
				}
			};
			var Ct = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.k:
							return !0;
						case it.b:
							return !1;
						default:
							return e
					}
				},
				St = Object(r.c)({
					after: Nt,
					data: Et,
					loaded: wt,
					pending: Ct
				});
			var Bt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.j:
					case it.i:
						return null;
					case it.h:
						return t.payload;
					default:
						return e
				}
			};
			var Pt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.j:
							return !0;
						case it.i:
						case it.h:
							return !1;
						default:
							return e
					}
				},
				Tt = Object(r.c)({
					error: Bt,
					pending: Pt
				});
			const Lt = {};
			var At = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.i: {
						const {
							listingKey: n,
							page: r,
							response: a
						} = t.payload, {
							modqueue: s
						} = a;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: s
							}
						}
					}
					default:
						return e
				}
			};
			const Ut = {};
			var Rt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ut,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.i: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: a
							} = r, s = a[a.length - 1] || null;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				Ht = Object(r.c)({
					api: Tt,
					itemOrder: At,
					loadMore: Rt
				});
			var Dt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.n:
					case it.m:
						return null;
					case it.l:
						return t.payload;
					default:
						return e
				}
			};
			var Ft = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.n:
							return !0;
						case it.m:
						case it.l:
							return !1;
						default:
							return e
					}
				},
				Mt = Object(r.c)({
					error: Dt,
					pending: Ft
				});
			const zt = {};
			var Wt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.m: {
						const {
							listingKey: n,
							page: r,
							response: a
						} = t.payload, {
							modqueue: s
						} = a;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: s
							}
						}
					}
					default:
						return e
				}
			};
			const Gt = {};
			var qt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.m: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: a
							} = r, s = a[a.length - 1] || null;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				Vt = Object(r.c)({
					api: Mt,
					itemOrder: Wt,
					loadMore: qt
				});
			var Kt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.q:
					case it.p:
						return null;
					case it.o:
						return t.payload;
					default:
						return e
				}
			};
			var Jt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.q:
							return !0;
						case it.p:
						case it.o:
							return !1;
						default:
							return e
					}
				},
				Qt = Object(r.c)({
					error: Kt,
					pending: Jt
				});
			const Yt = {};
			var Zt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.p: {
						const {
							listingKey: n,
							page: r,
							response: a
						} = t.payload, {
							modqueue: s
						} = a;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: s
							}
						}
					}
					default:
						return e
				}
			};
			const Xt = {};
			var $t = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.p: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: a
							} = r, s = a[a.length - 1] || null;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				en = Object(r.c)({
					api: Qt,
					itemOrder: Zt,
					loadMore: $t
				});
			var tn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.w:
					case it.v:
						return null;
					case it.u:
						return t.payload;
					default:
						return e
				}
			};
			var nn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.w:
							return !0;
						case it.v:
						case it.u:
							return !1;
						default:
							return e
					}
				},
				rn = Object(r.c)({
					error: tn,
					pending: nn
				});
			const an = {};
			var sn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : an,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.v: {
						const {
							listingKey: n,
							page: r,
							response: a
						} = t.payload, {
							modqueue: s
						} = a;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: s
							}
						}
					}
					default:
						return e
				}
			};
			const on = {};
			var cn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : on,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.v: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: a
							} = r, s = a[a.length - 1] || null;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				ln = Object(r.c)({
					api: rn,
					itemOrder: sn,
					loadMore: cn
				}),
				dn = Object(r.c)({
					bulkAction: ht,
					edited: kt,
					moderatedCommunitiesOrder: St,
					modqueue: Ht,
					reports: Vt,
					spam: en,
					unmoderated: ln
				});
			var un = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.Y:
					case a.W:
						return null;
					case a.V:
						return t.payload;
					default:
						return e
				}
			};
			const pn = {};
			var mn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.Y: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, a = Object(o.e)(n, r);
							return {
								...e,
								[a]: !0
							}
						}
						case a.W:
						case a.V: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, a = Object(o.e)(n, r);
							return {
								...e,
								[a]: !1
							}
						}
						default:
							return e
					}
				},
				bn = Object(r.c)({
					error: un,
					pending: mn
				});
			const hn = {};
			var fn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.W: {
							const {
								fetchedToken: n,
								subredditId: r
							} = t.payload, a = Object(o.e)(r, n);
							return {
								...e,
								[a]: !0
							}
						}
						default:
							return e
					}
				},
				gn = n("./src/reddit/actions/inContextModeration.ts");
			var vn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gn.b:
						return t.payload;
					default:
						return e
				}
			};
			const yn = {};
			var On = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.W: {
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
			const _n = {};
			var jn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _n,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.X:
					case a.W: {
						const {
							subredditId: n,
							mutedUsers: r
						} = t.payload, a = {
							[n]: r
						};
						return Object(b.merge)(e, a)
					}
					case a.cb: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(b.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			var kn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.bb:
					case a.ab:
						return null;
					case a.Z:
						return t.payload;
					default:
						return e
				}
			};
			var In = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.bb:
							return !0;
						case a.ab:
						case a.Z:
							return !1;
						default:
							return e
					}
				},
				Nn = Object(r.c)({
					error: kn,
					pending: In
				});
			var xn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.bb:
						case a.Z:
							return null;
						case a.ab: {
							const e = t.payload.mutedUserIds[0];
							return e ? t.payload.mutedUsers[e] : null
						}
						default:
							return e
					}
				},
				En = Object(r.c)({
					api: Nn,
					result: xn
				});
			const wn = {};
			var Cn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.W: {
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
						case a.cb: {
							const {
								subredditId: n,
								userId: r
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== r)
							}
						}
						case a.X: {
							const {
								subredditId: n,
								mutedUserIds: r
							} = t.payload, a = r[0];
							return a && e[n] && -1 === e[n].indexOf(a) ? {
								[n]: [a, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				Sn = Object(r.c)({
					api: bn,
					fetchedTokens: fn,
					inContext: vn,
					loadMore: On,
					models: jn,
					search: En,
					userOrder: Cn
				});
			t.a = Object(r.c)({
				approvedSubmitters: I,
				approvedTalkHosts: A,
				flairedUsers: te,
				moderationLog: fe,
				moderators: at,
				modQueue: dn,
				muted: Sn
			})
		},
		"./src/reddit/selectors/bannedUser.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return i
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
			var r = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/components/InboxTooltip/Component.tsx"),
				s = n("./src/reddit/models/SubredditModeration/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = (e, t) => {
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
					const a = Object(o.zb)(e, {
						userName: r
					});
					if (!a) return;
					const s = i(e, {
						subredditId: n
					});
					return s ? s[a.id] : void 0
				},
				l = Object(r.a)((e, t) => {
					let {
						subredditId: n
					} = t;
					const r = e.features.banned.userOrder[n];
					return r ? r.map(t => e.features.banned.models[n][t]) : a.a
				}),
				d = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = Object(s.e)(n);
					return e.features.banned.api.pending[r]
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
				return p
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "d", (function() {
				return b
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/models/SubredditModeration/index.ts"),
				s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/pages/modHub/index.ts");
			Object(s.a)({
				pages: {
					modHub: o.a
				}
			});
			const i = [],
				c = Object(r.a)((e, t) => {
					let {
						subredditId: n
					} = t;
					const r = e.pages.modHub.muted.userOrder[n];
					return r ? r.map(t => e.pages.modHub.muted.models[n][t]) : i
				}),
				l = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = Object(a.e)(n);
					return !!e.pages.modHub.muted.api.pending[r]
				},
				d = (e, t, n) => !!e.pages.modHub.muted.models[t] && !!e.pages.modHub.muted.models[t][n],
				u = e => !!e.pages.modHub.muted.search.api.pending,
				p = e => e.pages.modHub.muted.search.result,
				m = e => {
					var t, n, r;
					return null === (r = null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.modHub) || void 0 === n ? void 0 : n.muted) || void 0 === r ? void 0 : r.inContext
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard~Reddit.8eef7aa29c5fcc8323c9.js.map