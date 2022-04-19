// https://www.redditstatic.com/desktop2x/AuthorHovercard~Reddit.c213b175b6f5fc157983.js
// Retrieved at 4/19/2022, 2:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard~Reddit"], {
		"./src/lib/browser/isIncognito.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/constants/index.ts");
			const a = 120 * r.ib;
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
				return N
			})), n.d(t, "requestNotificationsPermissions", (function() {
				return E
			})), n.d(t, "subscribeForPNs", (function() {
				return C
			})), n.d(t, "unsubscribeFromPNs", (function() {
				return S
			})), n.d(t, "requestBrowserNotificationPermissionPromptByUser", (function() {
				return B
			})), n.d(t, "subscribeToPermissionsChange", (function() {
				return P
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
				f = n("./src/reddit/helpers/parseUrl.ts"),
				g = n("./src/reddit/helpers/tabBadging/index.ts"),
				v = n("./src/reddit/helpers/trackers/notifications.ts"),
				y = n("./src/reddit/models/Toast/index.ts"),
				O = n("./src/reddit/constants/experiments.ts"),
				_ = n("./src/reddit/helpers/chooseVariant/index.ts");
			const j = e => Object(_.c)(e, {
				experimentName: O.Sb,
				experimentEligibilitySelector: _.a
			}) === O.pd;
			var I = n("./src/reddit/selectors/meta.ts"),
				x = n("./src/reddit/selectors/user.ts");
			let k = !1;
			const N = async (e, t) => {
				const n = Object(x.P)(e);
				if (k) return;
				if (k = !0, Object(m.a)(e) !== l.c.NotificationsSupported) return;
				await Object(d.a)();
				navigator.serviceWorker.addEventListener("message", r => {
					const a = r.data,
						o = a.command || a.type;
					if ("registerWithServiceWorker" === o) w(e);
					else if (o === g.a && n) {
						const e = s()(a, ["command"]);
						t(Object(b.f)(e))
					} else if ("navigate.chat" === o) {
						const e = Object(f.a)(a.data.href);
						e && e.pathname && t(Object(u.c)(e.pathname))
					}
				}), w(e)
			}, w = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: v.c(e)
				})
			}, E = function(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
				return async (r, a, s) => {
					const i = a(),
						d = Object(I.f)(i),
						u = j(i);
					if (await Object(o.a)() || d) return;
					await N(i, r);
					v.j(i), await Object(c.b)(e, t, () => {
						u || r(Object(l.o)()), r(Object(l.n)()), v.h(i)
					}, (e, t) => {
						r(Object(l.l)()), r(S(t ? l.a.Denied : l.a.Closed)), e && (t ? v.e(i) : v.f(i))
					}, e => {
						r(Object(l.m)()), r(C()), e && v.d(i)
					}, () => {
						r(Object(l.k)()), n()
					})
				}
			}, C = e => async (t, n, a) => {
				const s = n();
				try {
					switch (await Object(i.b)(a.gqlContext)) {
						case i.a.Success:
							Object(m.b)(l.a.Granted), v.k(s), e && t(Object(h.f)({
								kind: y.b.SuccessCommunity,
								text: r.fbt._("Changes saved", null, {
									hk: "wGH5U"
								})
							}));
							break;
						case i.a.FailedResponse:
							v.i(s, "registration_failed_generally");
							break;
						case i.a.FailedGqlReponse:
							v.i(s, "registration_failed_in_gql")
					}
				} catch (o) {
					v.i(s, "registration_failed_uncaught_exception"), console.error(o)
				}
			}, S = (e, t) => async n => {
				try {
					Object(m.b)(e);
					const a = await Object(d.a)();
					if (a) {
						const e = await a.pushManager.getSubscription();
						e && (e.unsubscribe(), t && n(Object(h.f)({
							kind: y.b.SuccessCommunity,
							text: r.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						})))
					}
				} catch (a) {}
			}, B = e => async (t, n) => {
				const r = n();
				if (Object(m.a)(r) === l.c.NotificationsSupported) switch (Object(c.a)()) {
					case l.a.Default:
					case l.a.Closed:
						await t(E(!0, !0));
						break;
					case l.a.Denied:
						t(Object(p.h)(e))
				}
			}, P = () => async (e, t) => {
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
							e(S(l.a.Denied)), v.e(r);
							break;
						case l.a.Granted:
							e(C()), v.d(r);
							break;
						default:
							e(S(l.a.Default))
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
				I = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/icons/svgs/HotPotato/index.tsx"),
				k = n("./src/reddit/selectors/experiments/hotPotato.ts");
			const N = e => {
				let {
					onClose: t
				} = e;
				const n = Object(v.e)(k.b),
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
				}))), s.a.createElement(x.a, {
					className: f.a.bannerImage
				})), s.a.createElement(y.t, {
					onClick: t,
					Icon: Object(I.b)("close_fill"),
					className: f.a.closeButton,
					size: y.d.XXS,
					priority: y.c.Plain
				}))
			};
			var w = n("./src/reddit/components/InboxBanner/PolicyBanner.tsx"),
				E = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
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
					}, s.a.createElement(E.a, {
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
				K = 5,
				V = 50,
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
						} = this.props, a = t || n, s = window.innerHeight - V - 2 * J - (a ? G : 0);
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
						} = this.state, n = t + K, r = n > e.length ? n : e.length - 1;
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
							o = a.length > n + K;
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
							const e = a.length > this.state.currentNotificationCursorIndex + K;
							this.props.notifications.length > 0 && r && e ? this.updateCurrentCursorIndex() : t && n({
								after: t,
								first: K
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
					} = this.props, b = !(!c || !c.length), h = this.getContainerHeight(), f = c.length > this.state.currentNotificationCursorIndex + K, v = r || t || n;
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
					}, r && s.a.createElement(w.a, {
						onClose: d,
						pageType: A.c.MiniInbox
					}), t && s.a.createElement(g, {
						onTurnOnBrowserNotifications: p,
						onClose: l
					}), n && s.a.createElement(N, {
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
					}, s.a.createElement(I.a, {
						name: "mark_read",
						className: B.a.icon
					})), s.a.createElement(O.a, {
						className: B.a.navLink,
						onClick: b,
						to: "/settings/notifications"
					}, s.a.createElement(I.a, {
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
						I = !(!l || !l.length),
						x = Object(o.a)(),
						k = x === i.a.Closed || x === i.a.Default || x === i.a.Denied,
						N = b && k && !f;
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
						isDNInboxPromptBannerEnabled: N,
						isInboxPrivacyPolicyBannerEnabled: p && !v,
						setInboxPrivacyPolicyBannerSeen: y,
						isHotPotatoEnabled: u && !O,
						setHotPotatoBannerSeen: _
					})), (I || a) && s.a.createElement(ae, {
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
				return h
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "l", (function() {
				return j
			})), n.d(t, "m", (function() {
				return I
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
				I = () => e => ({
					...r.n(e),
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
					n(!0), Object(a.ob)(e)
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
				const [t, n] = Object(r.useState)(() => Object(a.u)(e));
				return [t, Object(r.useCallback)(() => {
					n(!0), Object(a.zb)(e)
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
				l = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/actions/login.ts"),
				p = n("./src/reddit/controls/Button/index.tsx");
			var m = e => a.a.createElement("svg", {
					className: e.className,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 21"
				}, a.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M18.4 14.788c-.662 0-1.2-.537-1.2-1.202l-.012-5.998C17.188 3.625 13.963.4 10 .4 6.037.4 2.811 3.625 2.811 7.586l-.01 6.002c0 .663-.54 1.2-1.2 1.2a1.199 1.199 0 100 2.4h16.8a1.2 1.2 0 100-2.4zm-9.6 3.6H7.6c0 1.324 1.076 2.4 2.4 2.4 1.323 0 2.4-1.076 2.4-2.4H8.8zm-3.6-4.797c0 .422-.087.822-.22 1.197H15.02a3.554 3.554 0 01-.22-1.2l-.013-5.997A4.794 4.794 0 0010 2.8a4.794 4.794 0 00-4.789 4.787l-.01 6.003z"
				})),
				b = n("./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/index.m.less"),
				h = n.n(b);
			const f = d.a.wrapped(m, "BellOutline", h.a),
				g = e => {
					let {
						isBannerEnabled: t,
						isLoggedIn: n
					} = e;
					const r = Object(s.d)();
					return a.a.createElement("div", {
						className: Object(l.a)(h.a.emptyState, {
							[h.a.emptyStateWithBanner]: Boolean(t),
							[h.a.loggedOutState]: !n
						})
					}, a.a.createElement(f, null), a.a.createElement("h1", {
						className: h.a.emptyTitle
					}, c.fbt._("Be the first to know", null, {
						hk: "2mNJO0"
					})), a.a.createElement("p", {
						className: h.a.emptyDescription
					}, c.fbt._("This is where you get updates on your activity and recommendations", null, {
						hk: "27V2PG"
					})), !n && a.a.createElement("div", {
						className: h.a.emptyStateLoggedOutContainer
					}, a.a.createElement(p.j, {
						onClick: () => r(Object(u.i)())
					}, c.fbt._("Log In", null, {
						hk: "ZR3pC"
					})), a.a.createElement("span", {
						className: h.a.emptyStateDivider
					}), a.a.createElement(p.j, {
						onClick: () => r(Object(u.j)())
					}, c.fbt._("Sign Up", null, {
						hk: "3Jd0SI"
					}))))
				};
			var v = n("./src/config.ts"),
				y = n("./src/reddit/controls/InternalLink/index.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = ["r/somethingimade", "r/CasualConversation", "r/DoesAnybodyElse", "r/Old_Recipes"][Math.floor(100 * Math.random()) % 4];
			var j = e => {
				let {
					inTooltip: t,
					isPopular: n,
					onBtnClick: r
				} = e;
				const s = n ? "r/popular" : _,
					o = `/${s}`,
					i = {
						to: o,
						kind: p.b.InternalLink
					},
					d = a.a.createElement(y.a, {
						to: o,
						target: "_blank",
						rel: "noopener noreferrer",
						className: h.a.subredditLinkR,
						onClick: r
					}, s);
				return a.a.createElement("div", {
					className: Object(l.a)(h.a.emptyState, h.a.karmaView, {
						[h.a.inNotificationsPage]: !t
					})
				}, a.a.createElement("img", {
					src: `${v.a.assetPath}/img/wrappedreddit/default_avatar.png`,
					alt: c.fbt._("default user avatar", null, {
						hk: "1VMTKf"
					}),
					className: Object(l.a)(h.a.avatarImage, {
						[h.a.inTooltip]: t
					})
				}), a.a.createElement("h1", {
					className: Object(l.a)(h.a.emptyTitle, {
						[h.a.inTooltip]: t
					})
				}, c.fbt._("You don’t have any activity yet", null, {
					hk: "43tvWW"
				})), a.a.createElement("p", {
					className: h.a.emptyDescription
				}, n ? c.fbt._("That’s ok, maybe you just need the right inspiration. Try browsing {Link: to r/popular}, for new communities to join.", [c.fbt._param("Link: to r/popular", d)], {
					hk: "VSBWM"
				}) : c.fbt._("That’s ok, maybe you just need the right inspiration. Try posting in {Link: to popular subreddit} , a popular community for discussion.", [c.fbt._param("Link: to popular subreddit", d)], {
					hk: "1WOK4T"
				})), a.a.createElement(p.t, O({
					className: h.a.emptyStateButton,
					onClick: r,
					text: `Visit ${s}`
				}, i)))
			};

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const x = "/img/notifications/star.png";
			var k = e => {
					let {
						inTooltip: t,
						onBtnClick: n
					} = e;
					const r = {
						to: "/r/memes/top/",
						kind: p.b.InternalLink
					};
					return a.a.createElement("div", {
						className: Object(l.a)(h.a.emptyState, h.a.karmaView, {
							[h.a.inNotificationsPage]: !t
						})
					}, a.a.createElement("div", {
						className: Object(l.a)(h.a.memesImageWrapper, {
							[h.a.inTooltip]: t
						})
					}, a.a.createElement("img", {
						src: `${v.a.assetPath}/img/notifications/shrek.png`,
						alt: c.fbt._("memes picture", null, {
							hk: "3e3S9E"
						}),
						className: h.a.shrek
					}), a.a.createElement("img", {
						src: `${v.a.assetPath}${x}`,
						alt: c.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(l.a)(h.a.star, h.a.inBottom)
					}), a.a.createElement("img", {
						src: `${v.a.assetPath}${x}`,
						alt: c.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(l.a)(h.a.star, h.a.inCenter)
					}), a.a.createElement("img", {
						src: `${v.a.assetPath}${x}`,
						alt: c.fbt._("memes picture", null, {
							hk: "2bHwq2"
						}),
						className: Object(l.a)(h.a.star, h.a.inTop)
					})), a.a.createElement("h1", {
						className: Object(l.a)(h.a.emptyTitle, {
							[h.a.inTooltip]: t
						})
					}, c.fbt._("You don’t have any activity yet", null, {
						hk: "2GNaV0"
					})), a.a.createElement("p", {
						className: h.a.emptyDescription
					}, c.fbt._("That’s ok, maybe you just need the right inspiration. Let’s get some more lolz in your life.", null, {
						hk: "10HMFI"
					})), a.a.createElement(p.t, I({
						className: h.a.emptyStateButton,
						onClick: n
					}, r), c.fbt._("See today’s Top Memes in r/Memes", null, {
						hk: "42zwJz"
					})))
				},
				N = n("./src/lib/notifications/index.ts"),
				w = n("./src/lib/notifications/constants.ts"),
				E = n("./src/redditGQL/types.ts"),
				C = n("./src/reddit/actions/modal.ts"),
				S = n("./src/reddit/actions/notifications/index.ts"),
				B = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				P = n("./src/reddit/actions/toaster.ts"),
				T = n("./src/reddit/components/Settings/modalIds.ts"),
				L = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				A = n("./src/reddit/models/Toast/index.ts"),
				U = n("./src/reddit/selectors/notificationPrefs.ts"),
				R = n("./src/reddit/selectors/user.ts");

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const D = [E.h.PrivateMessage, E.h.ChatMessage, E.h.ChatRequest, E.h.UsernameMention, E.h.PostReply, E.h.UpvotePost, E.h.UpvoteComment, E.h.CommentReply, E.h.ThreadReplies, E.h.TopLevelComment, E.h.NewPostActivity, E.h.UserNewFollower, E.h.PostFlairAdded, E.h.UserFlairAdded, E.h.NewPinnedPost, E.h.AwardReceived, E.h.PostFollow, E.h.TalkLive, E.h.CommentFollow, E.h.LifecyclePostSuggestions, E.h.BroadcastRecommendation, E.h.SubredditRecommendation, E.h.RedditLore, E.h.OneOff, E.h.CakeDay, E.h.ModeratedSrEngagement];
			var F;
			! function(e) {
				e[e.TURN_ON_PN = 0] = "TURN_ON_PN", e[e.TURN_ON_PN_APP = 1] = "TURN_ON_PN_APP", e[e.VERIFY_EMAIL = 2] = "VERIFY_EMAIL", e[e.TURN_ON_DAYLY_DIGEST = 3] = "TURN_ON_DAYLY_DIGEST", e[e.DONE = 4] = "DONE"
			}(F || (F = {}));
			var M = e => {
					let {
						inTooltip: t,
						isBannerEnabled: n,
						isLoggedIn: i,
						onBtnClick: d,
						hideTooltip: u
					} = e;
					const m = Object(s.d)(),
						b = Object(s.e)(R.n),
						f = Object(s.e)(R.D),
						y = Object(r.useRef)(b),
						[O, _] = Object(r.useState)(F.TURN_ON_PN),
						j = Object(s.e)(e => e.user.accountSettings.changeEmail.api.pending),
						I = Object(r.useCallback)(() => {
							m(async (e, t) => {
								var n, r;
								let a = Object(R.fb)(t());
								a.allIds.length || await e(Object(B.a)(L.a.Email));
								const s = null === (r = null === (n = (a = Object(R.fb)(t())).byId) || void 0 === n ? void 0 : n.EMAIL_DIGEST) || void 0 === r ? void 0 : r.isEnabled;
								_(s ? F.DONE : F.TURN_ON_DAYLY_DIGEST)
							})
						}, [m]),
						x = Object(r.useCallback)(() => {
							f ? I() : _(F.VERIFY_EMAIL)
						}, [f, I]),
						k = Object(r.useCallback)(() => {
							m(async (e, t) => {
								const n = t();
								Object(R.hb)(n).allIds.length || await e(Object(B.a)(L.a.Push)), Object(U.c)(t(), D) ? _(F.TURN_ON_PN_APP) : x()
							})
						}, [m, x]),
						E = Object(r.useCallback)(() => {
							(() => Object(N.a)() === w.a.Granted)() ? k(): _(F.TURN_ON_PN)
						}, [k]),
						M = Object(r.useCallback)(() => {
							d(o.b.Email_perms)(), t && u && u(), m(Object(C.h)(T.a))
						}, [m, d, t, u]);
					if (Object(r.useEffect)(() => {
							E()
						}, [E]), Object(r.useEffect)(() => {
							if (b !== y.current && O === F.VERIFY_EMAIL) {
								const e = Object(P.e)(c.fbt._("Email successfully updated!", null, {
									hk: "3iPlUp"
								}), A.b.SuccessCommunityGreen);
								m(Object(P.f)(e)), I()
							}
						}, [b, O, I]), Object(r.useEffect)(() => {
							j && m(Object(C.g)(T.a))
						}, [j, m]), O === F.DONE) return a.a.createElement(g, {
						isLoggedIn: i,
						isBannerEnabled: n
					});
					const z = {
							to: "/settings/notifications",
							kind: p.b.InternalLink,
							onClick: O === F.TURN_ON_PN_APP ? d(o.b.PN_perms) : d(o.b.Email_perms)
						},
						W = {
							onClick: O === F.TURN_ON_PN ? async () => {
								d(o.b.PN_perms)(), t && u && u(), await m(Object(S.requestBrowserNotificationPermissionPromptByUser)(T.f)), E()
							} : M
						},
						G = O === F.TURN_ON_PN || O === F.TURN_ON_PN_APP,
						q = O === F.TURN_ON_PN_APP || O === F.TURN_ON_DAYLY_DIGEST;
					return a.a.createElement("div", {
						className: Object(l.a)(h.a.emptyState, h.a.karmaView, {
							[h.a.inNotificationsPage]: !t
						})
					}, a.a.createElement("img", {
						src: `${v.a.assetPath}/img/wrappedreddit/default_avatar.png`,
						alt: c.fbt._("default user avatar", null, {
							hk: "1VMTKf"
						}),
						className: Object(l.a)(h.a.avatarImage, {
							[h.a.inTooltip]: t
						})
					}), a.a.createElement("h1", {
						className: Object(l.a)(h.a.emptyTitle, {
							[h.a.inTooltip]: t
						})
					}, G ? c.fbt._("Turn on notifications", null, {
						hk: "3qFpFu"
					}) : c.fbt._("Turn on email digest", null, {
						hk: "obBF8"
					})), a.a.createElement("p", {
						className: h.a.emptyDescription
					}, G ? c.fbt._("Stay in the loop on content from communities you love right on your phone.", null, {
						hk: "1gwnbO"
					}) : c.fbt._("Stay in the loop on content from communities you love right on your email inbox.", null, {
						hk: "1rs4kD"
					})), a.a.createElement(p.t, H({
						className: h.a.emptyStateButton
					}, q ? z : W, {
						text: c.fbt._("OK", null, {
							hk: "rhf0"
						})
					})))
				},
				z = n("./src/reddit/selectors/experiments/notifications.ts");
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
					u = Object(s.e)(z.c),
					p = Object(s.e)(z.d),
					m = Object(s.e)(z.e),
					b = Object(s.e)(z.f),
					h = Object(s.e)(z.a),
					f = Object(s.e)(z.b),
					v = Object(s.e)(z.g),
					y = Object(s.e)(z.h);
				return u || p ? a.a.createElement(k, {
					inTooltip: r,
					onBtnClick: d(o.b.Memes)
				}) : m || b ? a.a.createElement(M, {
					isBannerEnabled: t,
					isLoggedIn: n,
					inTooltip: r,
					onBtnClick: d,
					hideTooltip: c
				}) : h || f || v || y ? a.a.createElement(j, {
					inTooltip: r,
					isPopular: v || y,
					onBtnClick: d(o.b.Karma)
				}) : a.a.createElement(g, {
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
			var I = function() {
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
				x = Object(r.c)({
					api: l,
					fetchedTokens: u,
					loadMore: m,
					models: f,
					search: _,
					userOrder: I
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
				E = Object(r.c)({
					error: N,
					pending: w
				}),
				C = n("./node_modules/lodash/merge.js"),
				S = n.n(C),
				B = n("./node_modules/lodash/omit.js"),
				P = n.n(B);
			const T = {};
			var L = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
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
						} = t.payload, a = P()(e[n], r);
						return {
							...e,
							[n]: a
						}
					}
					case k.a:
					case k.b:
					case k.h:
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
			var H = function() {
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
				D = Object(r.c)({
					error: R,
					pending: H
				});
			var F = function() {
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
				M = Object(r.c)({
					api: D,
					result: F
				});
			const z = {};
			var W = function() {
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
				G = Object(r.c)({
					api: E,
					models: L,
					pageInfo: U,
					search: M,
					userOrder: W
				}),
				q = n("./src/reddit/actions/moderationLog/constants.ts");
			const K = {};
			var V = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case q.b: {
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
			const J = {};
			var Q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case q.b: {
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
							return S()({
								...e
							}, s)
						}
						default:
							return e
					}
				},
				Y = Object(r.c)({
					itemOrder: V,
					models: Q
				});
			var Z = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case q.b: {
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
					case q.b: {
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
					case q.b: {
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
					case q.a: {
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
			var ae = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case q.b: {
							const {
								startCursor: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				se = Object(r.c)({
					actions: Y,
					endCursor: Z,
					hasNextPage: $,
					hasPreviousPage: te,
					moderators: re,
					startCursor: ae
				});
			const oe = {};
			var ie = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.K:
					case a.u: {
						const {
							subredditId: n,
							moderators: r
						} = t.payload.response || t.payload, a = {
							[n]: r
						};
						return Object(b.merge)(e, a)
					}
					case a.y: {
						const {
							subredditId: n,
							userId: r,
							permissions: a
						} = t.payload;
						return Object(b.setIn)(e, [n, r, "modPermissions"], a)
					}
					case a.fb: {
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
			const ce = {};
			var le = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ce,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.v:
					case a.u: {
						const {
							key: n,
							subredditId: r
						} = t.payload;
						return r ? {
							...e,
							[n]: null
						} : e
					}
					case a.t: {
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
			const de = {};
			var ue = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : de,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.t:
						case a.u: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !1
							} : e
						}
						case a.v: {
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
					error: le,
					pending: ue
				});
			const me = {};
			var be = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : me,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.u: {
							const {
								subredditId: n,
								response: r,
								key: a
							} = t.payload;
							return Object(b.setIn)(e, [n, a], r.moderatorIds)
						}
						case a.fb: {
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
				he = Object(r.c)({
					data: be,
					api: pe
				});
			var fe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.B:
					case a.A:
						return null;
					case a.z:
						return t.payload;
					default:
						return e
				}
			};
			var ge = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.A:
						case a.z:
							return !1;
						case a.B:
							return !0;
						default:
							return e
					}
				},
				ve = Object(r.c)({
					error: fe,
					pending: ge
				});
			const ye = {};
			var Oe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ye,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.A: {
						const {
							subredditId: n,
							moderators: r
						} = t.payload;
						return Object(b.set)(e, n, r)
					}
					case a.cb: {
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
			const _e = {};
			var je = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _e,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.A: {
							const {
								subredditId: n,
								moderatorIds: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case a.cb: {
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
				Ie = Object(r.c)({
					api: ve,
					models: Oe,
					userOrder: je
				});
			const xe = {};
			var ke = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.H: {
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
					case a.E:
					case a.F: {
						const {
							subredditId: n
						} = t.payload;
						return Object(b.unset)(e, n)
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
					case a.u: {
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
			const Ee = {};
			var Ce = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ee,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.H: {
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
			var Be = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Se,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.H: {
						const {
							response: n
						} = t.payload, r = {
							[n.subredditId]: n.moderators
						};
						return Object(b.merge)({
							...e
						}, r)
					}
					case a.y: {
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
			var Pe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.L:
					case a.K:
						return null;
					case a.J:
						return t.payload;
					default:
						return e
				}
			};
			var Te = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.L:
							return !0;
						case a.K:
						case a.J:
							return !1;
						default:
							return e
					}
				},
				Le = Object(r.c)({
					error: Pe,
					pending: Te
				}),
				Ae = n("./node_modules/lodash/isEqual.js"),
				Ue = n.n(Ae);
			var Re = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.L:
						case a.J:
						case a.fb:
							return null;
						case a.K: {
							const e = t.payload.moderatorIds[0];
							return e ? t.payload.moderators[e] : null
						}
						case a.y: {
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
				He = Object(r.c)({
					api: Le,
					result: Re
				});
			const De = {};
			var Fe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : De,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.I:
					case a.H: {
						const {
							subredditId: n,
							key: r
						} = t.payload;
						return n ? {
							...e,
							[r]: null
						} : e
					}
					case a.G: {
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
			const Me = {};
			var ze = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Me,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.G:
						case a.H: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !1
							} : e
						}
						case a.I: {
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
				We = Object(r.c)({
					error: Fe,
					pending: ze
				});
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const Ge = {};
			var qe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ge,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.H: {
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
						case a.fb: {
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
				Ke = Object(r.c)({
					data: qe,
					api: We
				}),
				Ve = Object(r.c)({
					editableModerators: ie,
					editableUserOrder: he,
					invitedModerators: Ie,
					invitePending: ke,
					loadMoreModerators: Ce,
					loadMoreEditableModerators: we,
					models: Be,
					search: He,
					userOrder: Ke
				}),
				Je = n("./src/reddit/actions/bulkActions/constants.ts");
			var Qe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Je.c:
						case Je.b:
							return null;
						case Je.a:
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
						case Je.c:
							return !0;
						case Je.b:
						case Je.a:
						case Ye.s:
						case Ye.r:
							return !1;
						default:
							return e
					}
				},
				Xe = Object(r.c)({
					error: Qe,
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
							return P()(e, n)
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
						case Je.b: {
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
				at = Object(r.c)({
					api: Xe,
					selectedItems: et,
					undoLastAction: rt
				});
			var st = function() {
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
			var ot = function() {
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
				it = Object(r.c)({
					error: st,
					pending: ot
				});
			const ct = {};
			var lt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ct,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.f: {
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
			const dt = {};
			var ut = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.f: {
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
				pt = Object(r.c)({
					api: it,
					itemOrder: lt,
					loadMore: ut
				}),
				mt = n("./src/reddit/actions/pages/modListing/constants.ts");
			var bt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mt.e: {
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
			const ht = [];
			var ft = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ht,
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
					case mt.e: {
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
					after: bt,
					data: ft,
					loaded: gt,
					pending: vt
				});
			var Ot = function() {
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
			var _t = function() {
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
				jt = Object(r.c)({
					error: Ot,
					pending: _t
				});
			const It = {};
			var xt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : It,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.i: {
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
				wt = Object(r.c)({
					api: jt,
					itemOrder: xt,
					loadMore: Nt
				});
			var Et = function() {
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
			var Ct = function() {
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
					error: Et,
					pending: Ct
				});
			const Bt = {};
			var Pt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.m: {
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
			const Tt = {};
			var Lt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.m: {
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
				At = Object(r.c)({
					api: St,
					itemOrder: Pt,
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
				Ht = Object(r.c)({
					error: Ut,
					pending: Rt
				});
			const Dt = {};
			var Ft = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.p: {
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
			const Mt = {};
			var zt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.p: {
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
				Wt = Object(r.c)({
					api: Ht,
					itemOrder: Ft,
					loadMore: zt
				});
			var Gt = function() {
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
			var qt = function() {
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
				Kt = Object(r.c)({
					error: Gt,
					pending: qt
				});
			const Vt = {};
			var Jt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.v: {
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
			const Qt = {};
			var Yt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.v: {
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
				Zt = Object(r.c)({
					api: Kt,
					itemOrder: Jt,
					loadMore: Yt
				}),
				Xt = Object(r.c)({
					bulkAction: at,
					edited: pt,
					moderatedCommunitiesOrder: yt,
					modqueue: wt,
					reports: At,
					spam: Wt,
					unmoderated: Zt
				});
			var $t = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.U:
					case a.S:
						return null;
					case a.R:
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
						case a.U: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, a = Object(o.e)(n, r);
							return {
								...e,
								[a]: !0
							}
						}
						case a.S:
						case a.R: {
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
				nn = Object(r.c)({
					error: $t,
					pending: tn
				});
			const rn = {};
			var an = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.S: {
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
				sn = n("./src/reddit/actions/inContextModeration.ts");
			var on = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case sn.b:
						return t.payload;
					default:
						return e
				}
			};
			const cn = {};
			var ln = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.S: {
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
			const dn = {};
			var un = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.T:
					case a.S: {
						const {
							subredditId: n,
							mutedUsers: r
						} = t.payload, a = {
							[n]: r
						};
						return Object(b.merge)(e, a)
					}
					case a.Y: {
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
			var pn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.X:
					case a.W:
						return null;
					case a.V:
						return t.payload;
					default:
						return e
				}
			};
			var mn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.X:
							return !0;
						case a.W:
						case a.V:
							return !1;
						default:
							return e
					}
				},
				bn = Object(r.c)({
					error: pn,
					pending: mn
				});
			var hn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.X:
						case a.V:
							return null;
						case a.W: {
							const e = t.payload.mutedUserIds[0];
							return e ? t.payload.mutedUsers[e] : null
						}
						default:
							return e
					}
				},
				fn = Object(r.c)({
					api: bn,
					result: hn
				});
			const gn = {};
			var vn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.S: {
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
						case a.Y: {
							const {
								subredditId: n,
								userId: r
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== r)
							}
						}
						case a.T: {
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
				yn = Object(r.c)({
					api: nn,
					fetchedTokens: an,
					inContext: on,
					loadMore: ln,
					models: un,
					search: fn,
					userOrder: vn
				});
			t.a = Object(r.c)({
				approvedSubmitters: x,
				flairedUsers: G,
				moderationLog: se,
				moderators: Ve,
				modQueue: Xt,
				muted: yn
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
					const a = Object(o.Ab)(e, {
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
		"./src/reddit/selectors/experiments/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "i", (function() {
				return m
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts");
			const s = e => Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: r.ub
				}) === r.wd.MemesBadge,
				o = e => Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: r.ub
				}) === r.wd.MemesNoBadge,
				i = e => Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: r.ub
				}) === r.wd.PnEmailBadge,
				c = e => Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: r.ub
				}) === r.wd.PnEmailNoBadge,
				l = e => Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: r.ub
				}) === r.wd.KarmaBadge,
				d = e => Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: r.ub
				}) === r.wd.KarmaNoBadge,
				u = e => Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: r.ub
				}) === r.wd.PopularBadge,
				p = e => Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: r.ub
				}) === r.wd.PopularNoBadge,
				m = e => s(e) || i(e) || d(e) || p(e)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard~Reddit.c213b175b6f5fc157983.js.map