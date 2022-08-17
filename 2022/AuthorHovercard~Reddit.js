// https://www.redditstatic.com/desktop2x/AuthorHovercard~Reddit.7bacf312930f42a6b73d.js
// Retrieved at 8/17/2022, 6:50:04 PM by Reddit Dataminer v1.0.0
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
		"./src/reddit/actions/notifications/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "initializeServiceWorkerChannel", (function() {
				return T
			})), n.d(t, "requestNotificationsPermissions", (function() {
				return P
			})), n.d(t, "subscribeForPNs", (function() {
				return L
			})), n.d(t, "unsubscribeFromPNs", (function() {
				return A
			})), n.d(t, "requestBrowserNotificationPermissionPromptByUser", (function() {
				return H
			})), n.d(t, "subscribeToPermissionsChange", (function() {
				return R
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
				h = n("./src/reddit/constants/modals.ts"),
				g = n("./src/reddit/helpers/parseUrl.ts"),
				_ = n("./src/reddit/helpers/tabBadging/index.ts"),
				v = n("./src/reddit/helpers/trackers/notifications.ts"),
				O = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/selectors/activeModal.ts"),
				N = n("./src/reddit/selectors/activeModalId.ts"),
				y = n("./src/reddit/selectors/experiments/delayDnPermission.ts"),
				k = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				j = n("./src/reddit/constants/experiments.ts"),
				C = n("./src/reddit/helpers/chooseVariant/index.ts");
			const E = e => Object(C.c)(e, {
				experimentName: j.lc,
				experimentEligibilitySelector: C.a
			}) === j.Nd;
			var I = n("./src/reddit/selectors/meta.ts"),
				S = n("./src/reddit/selectors/user.ts");
			let B = !1;
			const T = async (e, t) => {
				const n = Object(S.P)(e);
				if (B) return;
				if (B = !0, Object(b.a)(e) !== l.c.NotificationsSupported) return;
				await Object(d.a)();
				navigator.serviceWorker.addEventListener("message", i => {
					const a = i.data,
						s = a.command || a.type;
					if ("registerWithServiceWorker" === s) w(e);
					else if (s === _.a && n) {
						const e = o()(a, ["command"]);
						t(Object(p.f)(e))
					} else if ("navigate.chat" === s) {
						const e = Object(g.a)(a.data.href);
						e && e.pathname && t(Object(u.c)(e.pathname))
					}
				}), w(e)
			}, w = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: v.c(e)
				})
			}, P = function(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
				return async (i, a, o) => {
					const r = a(),
						d = Object(I.f)(r),
						u = E(r),
						m = !!Object(N.a)(r),
						b = Object(y.a)(r),
						p = Object(k.e)(r),
						f = Object(x.c)(h.a.NSFW_BLOCKING_MODAL_V2)(r);
					if (p || f) return;
					if (await Object(s.a)() || d) return;
					await T(r, i);
					v.l(r), await Object(c.b)(e, t, () => {
						u || b || m || i(Object(l.o)()), i(Object(l.n)()), v.j(r)
					}, (e, t) => {
						i(Object(l.l)()), i(A(t ? l.a.Denied : l.a.Closed)), e && (t ? v.e(r) : v.f(r)), n()
					}, e => {
						i(Object(l.m)()), i(L()), e && v.d(r), n()
					}, () => {
						i(Object(l.k)()), n()
					})
				}
			}, L = e => async (t, n, a) => {
				const o = n();
				try {
					switch (await Object(r.b)(a.gqlContext)) {
						case r.a.Success:
							Object(b.b)(l.a.Granted), v.m(o), e && t(Object(f.f)({
								kind: O.b.SuccessCommunity,
								text: i.fbt._("Changes saved", null, {
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
			}, A = (e, t) => async n => {
				try {
					Object(b.b)(e);
					const a = await Object(d.a)();
					if (a) {
						const e = await a.pushManager.getSubscription();
						e && (e.unsubscribe(), t && n(Object(f.f)({
							kind: O.b.SuccessCommunity,
							text: i.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						})))
					}
				} catch (a) {}
			}, H = e => async (t, n) => {
				const i = n();
				if (Object(b.a)(i) === l.c.NotificationsSupported) switch (Object(c.a)()) {
					case l.a.Default:
					case l.a.Closed:
						await t(P(!0, !0));
						break;
					case l.a.Denied:
						t(Object(m.h)(e))
				}
			}, R = () => async (e, t) => {
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
							e(A(l.a.Denied)), v.e(i);
							break;
						case l.a.Granted:
							e(L()), v.d(i);
							break;
						default:
							e(A(l.a.Default))
					}
				})(a.state)
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
		"./src/reddit/components/InboxBanner/CommonBanner.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "FjkUHssa96HMV17_qcQt6",
				wrapper: "FjkUHssa96HMV17_qcQt6",
				Content: "_27ZWqn-n6gBKDTqLbt0uk1",
				content: "_27ZWqn-n6gBKDTqLbt0uk1",
				Heading: "ZtxCbLGmd-U6DH5-RsBJV",
				heading: "ZtxCbLGmd-U6DH5-RsBJV",
				Title: "_2Iz2pxeBTmtn5cilveUdwj",
				title: "_2Iz2pxeBTmtn5cilveUdwj",
				TitleIcon: "_3wZ9NKCStyQ9_XMz6jRbkL",
				titleIcon: "_3wZ9NKCStyQ9_XMz6jRbkL",
				Body: "_2GYO5AeH0SYqV0W_IYw7C_",
				body: "_2GYO5AeH0SYqV0W_IYw7C_",
				BodyText: "_1Tw_Z3ZCizARHq8mDvXtJp",
				bodyText: "_1Tw_Z3ZCizARHq8mDvXtJp",
				Thumbnail: "_3VFSVmukKEY-C06RJldU7n",
				thumbnail: "_3VFSVmukKEY-C06RJldU7n",
				ActionButtons: "_45hSSzyMPM5pmBx74E25U",
				actionButtons: "_45hSSzyMPM5pmBx74E25U",
				noMargin: "aaIwLr1Mbi15Al1BCmB8w",
				CloseButton: "_3xbx2cMOI83xtKSIZfzaeW",
				closeButton: "_3xbx2cMOI83xtKSIZfzaeW",
				SecondaryButton: "_1cOP2U6TmJgXE_lLuvdAk",
				secondaryButton: "_1cOP2U6TmJgXE_lLuvdAk",
				CloseButtonIcon: "_3uR0NalufS44rp_5yMF15w",
				closeButtonIcon: "_3uR0NalufS44rp_5yMF15w"
			}
		},
		"./src/reddit/components/InboxBanner/CommonBanner.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/opener/index.ts"),
				c = n("./src/reddit/actions/inboxBanner/index.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/helpers/trackers/inbox.ts"),
				u = n("./src/reddit/helpers/localStorage/index.ts"),
				m = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				p = n("./src/reddit/models/inboxBanner/index.ts");
			const f = e => e.notificationsInbox.banner,
				h = e => {
					return f(e).banners
				};
			var g = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/components/InboxBanner/CommonBanner.m.less"),
				v = n.n(_);
			const O = e => {
				let {
					isFromMiniInbox: t,
					banner: n,
					userId: h
				} = e;
				var g, _, O, x, N, y, k, j, C, E, I, S, B, T, w, P, L;
				const A = Object(o.d)(),
					H = Object(m.a)(),
					[R, U, F] = function(e, t, n) {
						const [a, o] = Object(i.useState)(Object(u.r)(e, t) || 0), s = Object(i.useCallback)(() => {
							o(a + 1), Object(u.Ab)(e, t, a + 1)
						}, []), r = Object(i.useCallback)(() => {
							n > 0 && (o(n), Object(u.Ab)(e, t, n))
						}, []);
						return [a, s, r]
					}(h, n.notificationName, (null === (g = n.persistence) || void 0 === g ? void 0 : g.maxViews) || 0),
					[D, M] = Object(i.useState)(!1),
					[z, W] = Object(i.useState)(!1),
					G = Object(o.e)(e => ((e, t) => {
						var n;
						return !!(null === (n = f(e).dismissedBanners) || void 0 === n ? void 0 : n.find(e => e === t))
					})(e, n.notificationName));
				Object(i.useEffect)(() => {
					U(), t ? (H(Object(d.B)(n.notificationName)), H(Object(d.C)(n.notificationName))) : (H(Object(d.p)(n.notificationName)), H(Object(d.q)(n.notificationName)))
				}, []);
				const V = null === (_ = null == n ? void 0 : n.persistence) || void 0 === _ ? void 0 : _.maxViews;
				if (!n || V && R > V) return null;
				const q = !!(null == n ? void 0 : n.primaryCta),
					K = !!(null == n ? void 0 : n.secondaryCta),
					J = !!(null == n ? void 0 : n.titleImage),
					Y = !!(null == n ? void 0 : n.thumbnailImageUrl),
					Z = () => {
						var e;
						(null === (e = n.persistence) || void 0 === e ? void 0 : e.isDismissible) && (F(), A(Object(c.a)(n.notificationName)))
					},
					Q = {
						backgroundColor: D ? null === (O = null == n ? void 0 : n.primaryCta) || void 0 === O ? void 0 : O.colors.hoverHex : null === (x = null == n ? void 0 : n.primaryCta) || void 0 === x ? void 0 : x.colors.backgroundHex,
						color: null === (N = null == n ? void 0 : n.primaryCta) || void 0 === N ? void 0 : N.text.colorText,
						borderColor: null === (y = null == n ? void 0 : n.primaryCta) || void 0 === y ? void 0 : y.colors.borderHex
					},
					X = {
						backgroundColor: z ? null === (k = null == n ? void 0 : n.secondaryCta) || void 0 === k ? void 0 : k.colors.hoverHex : null === (j = null == n ? void 0 : n.secondaryCta) || void 0 === j ? void 0 : j.colors.backgroundHex,
						color: null === (C = null == n ? void 0 : n.secondaryCta) || void 0 === C ? void 0 : C.text.colorText,
						borderColor: null === (E = null == n ? void 0 : n.secondaryCta) || void 0 === E ? void 0 : E.colors.borderHex
					};
				return G ? null : a.a.createElement("div", {
					className: v.a.Wrapper,
					style: {
						backgroundImage: `url(${n.bodyBackgroundImage})`
					},
					onClick: e => {
						e.stopPropagation(), Object(r.e)(n.linkUrl, "_blank"), Z(), H(t ? Object(d.A)(n.notificationName, d.b.BANNER) : Object(d.o)(n.notificationName, d.b.BANNER))
					}
				}, a.a.createElement("div", {
					className: v.a.Content
				}, a.a.createElement("div", {
					className: v.a.Heading
				}, J ? a.a.createElement("img", {
					className: v.a.TitleIcon,
					src: n.titleImage
				}) : a.a.createElement("div", {
					className: v.a.Title,
					style: {
						color: null === (I = n.titleText) || void 0 === I ? void 0 : I.colorText
					}
				}, null === (S = n.titleText) || void 0 === S ? void 0 : S.text)), a.a.createElement("div", {
					className: v.a.Body
				}, a.a.createElement("div", {
					className: v.a.BodyText,
					style: {
						color: null === (B = n.bodyText) || void 0 === B ? void 0 : B.colorText
					}
				}, null === (T = n.bodyText) || void 0 === T ? void 0 : T.text), Y && a.a.createElement("img", {
					src: n.thumbnailImageUrl,
					className: v.a.Thumbnail
				})), q || K && a.a.createElement("div", {
					className: Object(s.a)(v.a.ActionButtons, {
						[v.a.noMargin]: Y
					})
				}, q && a.a.createElement(l.t, {
					text: null === (w = n.primaryCta) || void 0 === w ? void 0 : w.text.text,
					priority: l.c.Tertiary,
					size: l.d.XS,
					onClick: e => {
						var i;
						e.stopPropagation(), (null === (i = n.primaryCta) || void 0 === i ? void 0 : i.actionType) === p.a.GOTO && n.primaryCta.url && Object(r.e)(n.primaryCta.url, "_blank"), Z(), H(t ? Object(d.A)(n.notificationName, d.b.CTA_1) : Object(d.o)(n.notificationName, d.b.CTA_1))
					},
					style: {
						...Q
					},
					onMouseEnter: () => M(!0),
					onMouseLeave: () => M(!1)
				}), K && a.a.createElement(l.t, {
					text: null === (P = n.secondaryCta) || void 0 === P ? void 0 : P.text.text,
					priority: l.c.Plain,
					size: l.d.XS,
					className: v.a.SecondaryButton,
					onClick: e => {
						e.stopPropagation(), (null == n ? void 0 : n.secondaryCta) && (n.secondaryCta.actionType === p.a.GOTO && n.secondaryCta.url && Object(r.e)(n.secondaryCta.url, "_blank"), Z(), H(t ? Object(d.A)(n.notificationName, d.b.CTA_2) : Object(d.o)(n.notificationName, d.b.CTA_2)))
					},
					style: {
						...X
					},
					onMouseEnter: () => W(!0),
					onMouseLeave: () => W(!1)
				}))), (null === (L = n.persistence) || void 0 === L ? void 0 : L.isDismissible) && a.a.createElement(l.t, {
					Icon: Object(b.b)("close_fill"),
					className: v.a.CloseButton,
					size: l.d.XXS,
					iconClassName: v.a.CloseButtonIcon,
					priority: l.c.Plain,
					onClick: e => {
						e.stopPropagation(), Z(), H(t ? Object(d.A)(n.notificationName, d.b.DISMISS) : Object(d.o)(n.notificationName, d.b.DISMISS))
					}
				}))
			};
			t.a = e => {
				let {
					isFromMiniInbox: t
				} = e;
				const n = Object(o.e)(h),
					i = Object(o.e)(g.i);
				return (null == n ? void 0 : n.length) && i ? a.a.createElement(a.a.Fragment, null, null == n ? void 0 : n.map(e => a.a.createElement(O, {
					banner: e,
					isFromMiniInbox: t,
					key: e.notificationName,
					userId: i
				}))) : null
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
				return Z
			})), n.d(t, "b", (function() {
				return ee
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
				p = n("./src/reddit/components/InboxBanner/CommonBanner.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/helpers/trackers/inbox.ts"),
				g = n("./src/reddit/hooks/useTracking.ts"),
				_ = n("./src/reddit/icons/fonts/index.tsx"),
				v = n("./src/reddit/components/InboxBanner/index.m.less"),
				O = n.n(v);
			var x = e => {
				let {
					className: t,
					closeButtonText: n,
					closeIcon: i,
					descriptionText: a,
					primaryButtonText: s,
					titleText: r,
					onClose: l,
					onClick: d
				} = e;
				const u = Object(g.a)();
				return o.a.createElement("div", {
					className: Object(c.a)(O.a.banner, t)
				}, o.a.createElement("div", {
					className: O.a.bannerTitleContainer
				}, r && o.a.createElement("h4", {
					className: O.a.bannerTitle
				}, r), i && o.a.createElement(f.t, {
					onClick: e => {
						l && l(e), u(Object(h.r)({
							dnPromptAction: "dismiss"
						}))
					},
					Icon: Object(_.b)("close_fill"),
					className: Object(c.a)(O.a.closeIcon, O.a.closeButton),
					size: f.d.XXS,
					priority: f.c.Plain
				})), a && o.a.createElement("p", {
					className: O.a.bannerDescription
				}, a), o.a.createElement("div", {
					className: O.a.bannerButtonsContainer
				}, s && o.a.createElement(f.t, {
					text: s,
					priority: f.c.Tertiary,
					className: Object(c.a)(O.a.button, O.a.primaryButton),
					size: f.d.XS,
					onClick: e => {
						d && d(e), u(Object(h.r)({
							dnPromptAction: "cta"
						}))
					}
				}), n && o.a.createElement(f.t, {
					text: n,
					onClick: e => {
						l && l(e), u(Object(h.r)({
							dnPromptAction: "refuse"
						}))
					},
					priority: f.c.Plain,
					size: f.d.XS,
					className: Object(c.a)(O.a.button, O.a.closeButton)
				})))
			};
			const N = e => {
				let {
					onClose: t,
					onTurnOnBrowserNotifications: n
				} = e;
				return o.a.createElement(x, {
					className: O.a.dnPromptBanner,
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
			var y = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				k = n("./src/reddit/components/ResizeSensor/index.tsx"),
				j = n("./src/reddit/components/InboxTooltip/index.m.less"),
				C = n.n(j);
			const E = 3;
			class I extends o.a.Component {
				constructor() {
					super(...arguments), this.ref = o.a.createRef(), this.handleResize = () => {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						e !== this.props.notificationHeight && this.props.setNotificationHeight(e, this.props.index)
					}
				}
				componentDidMount() {
					if (this.props.index + 1 <= E) {
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
					} = this.props, b = r + 1 <= E;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						ref: this.ref,
						className: C.a.notificationResizeWrapper
					}, o.a.createElement(y.a, {
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
					}), !!b && o.a.createElement(k.a, {
						onResize: this.handleResize
					})))
				}
			}
			var S = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				B = n("./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/EmptyStateComponent.tsx");

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const w = {},
				P = "",
				L = 0,
				A = "200px",
				H = "250px",
				R = "270px",
				U = 100,
				F = .5,
				D = 5,
				M = 50,
				z = 55;
			class W extends o.a.Component {
				constructor() {
					super(...arguments), this.container = o.a.createRef(), this.state = {
						notificationHeights: w,
						currentNotificationCursorIndex: -1
					}, this.resetOverflowMenu = () => {
						this.props.activeOverflowMenuId.length > L && this.props.setActiveOverflowMenuId(P)
					}, this.getContainerHeight = () => {
						const {
							notificationHeights: e
						} = this.state, {
							isDNInboxPromptBannerEnabled: t,
							isInboxPrivacyPolicyBannerEnabled: n,
							isLoggedIn: i
						} = this.props, a = t || n, o = window.innerHeight - M - 2 * z - (a ? U : 0);
						let s = 0;
						for (const r in e) s += e[r];
						return 0 === s ? a ? H : i ? A : R : (a && (s += U), o < s && (s = o + (a ? U : 0)), s)
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
						} = this.state, n = t + D, i = n > e.length ? n : e.length - 1;
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
							s = a.length > n + D;
						return (i && a.length > 0 && s ? a.slice(0, n + 1) : a).map((n, i) => o.a.createElement(I, T({}, e, {
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
							const e = a.length > this.state.currentNotificationCursorIndex + D;
							this.props.notifications.length > 0 && i && e ? this.updateCurrentCursorIndex() : t && n({
								after: t,
								first: D
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
						showBrowserNotificationsPermissionSettings: d
					} = this.props, m = !(!c || !c.length), b = this.getContainerHeight(), f = c.length > this.state.currentNotificationCursorIndex + D, h = i || t || n;
					return o.a.createElement("div", {
						className: C.a.notificationList,
						ref: this.container,
						style: m ? {
							height: b,
							maxHeight: b
						} : {
							minHeight: A
						}
					}, !r && o.a.createElement("div", {
						className: C.a.notificationBannerContainer
					}, t && o.a.createElement(N, {
						onTurnOnBrowserNotifications: d,
						onClose: l
					}), o.a.createElement(p.a, {
						isFromMiniInbox: !0
					})), !m && r && o.a.createElement(S.a, null), !m && !r && o.a.createElement(B.a, {
						isBannerEnabled: h,
						isLoggedIn: s,
						inTooltip: !0,
						hideTooltip: this.props.onItemClick
					}), m && this.renderNotifications(), a && m && !r && (e || f) && o.a.createElement(u.a, {
						onChange: this.loadNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: F
					}, o.a.createElement("div", null)))
				}
			}
			var G = n("./src/reddit/constants/localStorage.ts"),
				V = n("./src/reddit/controls/InternalLink/index.tsx"),
				q = n("./src/reddit/hooks/useLocalStorage.ts");
			var K = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts"),
				J = n("./src/reddit/helpers/localStorage/index.ts");

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const Z = [],
				Q = l.a.div("StyledDropdown", C.a),
				X = e => {
					let {
						isLoggedIn: t,
						onMessagesClick: n,
						onBarClick: s,
						markAllAsRead: r,
						messagesBadgeCount: l,
						sendInboxClickSettings: u
					} = e;
					const m = !!l,
						b = Object(a.useCallback)(() => {
							n(), s()
						}, [n, s]),
						p = Object(a.useCallback)(() => {
							u(), s()
						}, [u, s]);
					return o.a.createElement("nav", {
						className: C.a.topNav
					}, o.a.createElement("span", {
						className: C.a.topNavTitle
					}, i.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), t && o.a.createElement("span", {
						className: C.a.topNavLinks
					}, o.a.createElement("span", {
						className: C.a.messagesLinkContainer
					}, o.a.createElement(V.default, {
						className: Object(c.a)(C.a.messagesLink, {
							[C.a.mActive]: m
						}),
						onClick: b,
						to: m ? "/message/unread" : "/message/messages"
					}, i.fbt._("Messages", null, {
						hk: "hulKY"
					}), o.a.createElement(d.a, {
						className: C.a.badgeCount,
						isActive: m,
						unreadCount: l
					}))), o.a.createElement("button", {
						className: C.a.navLink,
						onClick: r
					}, o.a.createElement(_.a, {
						name: "mark_read",
						className: C.a.icon
					})), o.a.createElement(V.default, {
						className: C.a.navLink,
						onClick: p,
						to: "/settings/notifications"
					}, o.a.createElement(_.a, {
						name: "settings",
						className: C.a.icon
					}))))
				},
				$ = e => o.a.createElement("div", {
					className: C.a.bottomBar
				}, o.a.createElement(V.default, {
					className: C.a.bottomLink,
					onClick: () => {
						e.sendInboxClickSeeAll(), e.onBarClick()
					},
					to: "/notifications"
				}, i.fbt._("See All", null, {
					hk: "3L3tFc"
				}))),
				ee = e => {
					const t = Object(g.a)(),
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
							userId: _
						} = e,
						[v, O] = Object(K.a)(_),
						[x, N] = function(e) {
							const [t, n] = Object(a.useState)(() => Object(J.u)(e));
							return [t, Object(a.useCallback)(() => {
								n(!0), Object(J.Bb)(e)
							}, [e])]
						}(_),
						[y, k] = function(e) {
							let {
								key: t,
								userId: n
							} = e;
							const [i, a] = Object(q.a)(t, []);
							return [-1 !== i.indexOf(n), () => {
								a([...i, n])
							}]
						}({
							key: G.b.HOT_POTATO_BANNER_SEEN,
							userId: _
						}),
						j = !(!d || !d.length),
						E = Object(s.a)(),
						I = E === r.a.Closed || E === r.a.Default || E === r.a.Denied,
						S = f && I && !v;
					return o.a.createElement(Q, null, o.a.createElement("div", {
						className: C.a.tooltipContainer
					}, o.a.createElement(X, {
						markAllAsRead: () => {
							e.markAllAsRead(), t(Object(h.h)({
								isMiniInbox: !0
							}))
						},
						messagesBadgeCount: l,
						onMessagesClick: () => {
							t(Object(h.w)({
								badgeCount: i,
								tab: h.f.Messages
							})), t(Object(h.i)()), n()
						},
						sendInboxClickSettings: () => t(Object(h.n)(h.c.MiniInbox)),
						onBarClick: u,
						isLoggedIn: p
					}), o.a.createElement(W, Y({}, e, {
						isPending: c,
						onItemClick: u,
						setDesktopNotificationsPromptSeen: O,
						isDNInboxPromptBannerEnabled: S,
						isInboxPrivacyPolicyBannerEnabled: b && !x,
						setInboxPrivacyPolicyBannerSeen: N,
						isHotPotatoEnabled: m && !y,
						setHotPotatoBannerSeen: k
					})), (j || c) && o.a.createElement($, {
						sendInboxClickSeeAll: () => t(Object(h.m)()),
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
				return p
			})), n.d(t, "m", (function() {
				return f
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "n", (function() {
				return N
			})), n.d(t, "o", (function() {
				return y
			})), n.d(t, "h", (function() {
				return k
			})), n.d(t, "g", (function() {
				return j
			}));
			var i = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/telemetry/index.ts"),
				o = n("./src/telemetry/models/Event.ts");
			var s;
			! function(e) {
				e.FREQUENT = "frequent", e.LOW = "low", e.OFF = "off"
			}(s || (s = {}));
			const r = e => ({
					...i.n(e),
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
					...i.n(e),
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
					...i.n(e),
					noun: "push_notification"
				}),
				_ = e => ({
					...g(e),
					notification: i.E(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				v = (e, t) => n => ({
					...i.n(n),
					action: c(e),
					email: {
						type: t
					},
					noun: "email",
					source: "email_app_settings"
				}),
				O = (e, t) => n => ({
					...i.n(n),
					action: c(e),
					notification: {
						type: t
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				x = e => t => ({
					...i.n(t),
					source: "email_app_settings",
					action: c(e),
					noun: "email",
					notification: {
						type: "all"
					}
				}),
				N = (e, t, n) => a => ({
					...i.n(a),
					action: "set_frequency",
					noun: n,
					source: "community_notifications",
					subreddit: {
						id: e,
						name: t.toLowerCase()
					}
				}),
				y = () => e => ({
					...i.n(e),
					action: o.c.View,
					noun: "screen",
					source: "global",
					actionInfo: {
						pageType: "community_alerts"
					}
				}),
				k = () => e => ({
					...i.n(e),
					action: "click",
					noun: "desktop_notification_permissions",
					source: "overlay"
				}),
				j = () => e => ({
					...i.n(e),
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
			var i = n("./node_modules/react/index.js"),
				a = n("./src/reddit/helpers/localStorage/index.ts");

			function o(e) {
				const [t, n] = Object(i.useState)(Object(a.t)(e));
				return [t, Object(i.useCallback)(() => {
					n(!0), Object(a.qb)(e)
				}, [])]
			}
		},
		"./src/reddit/hooks/useGqlContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var i = n("./node_modules/react/index.js"),
				a = n("./src/reddit/contexts/ApiContext.tsx");

			function o() {
				const {
					gqlContext: e
				} = Object(i.useContext)(a.a);
				return e
			}
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
			var f = e => {
					let {
						inTooltip: t
					} = e;
					const n = {
						to: "/r/cats/top/",
						kind: u.b.InternalLink
					};
					return a.a.createElement("div", {
						className: Object(d.a)(b.a.emptyState, b.a.karmaView, {
							[b.a.inNotificationsPage]: !t
						})
					}, a.a.createElement("div", {
						className: Object(d.a)(b.a.catsImageWrapper, {
							[b.a.inTooltip]: t
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
							[b.a.inTooltip]: t
						})
					}, c.fbt._("You don’t have any activity yet", null, {
						hk: "2GNaV0"
					})), a.a.createElement("p", {
						className: b.a.emptyDescription
					}, c.fbt._("That’s ok, maybe you just need the right inspiration. Have you had your daily cat fix yet today?", null, {
						hk: "3tmgZE"
					})), a.a.createElement(u.t, p({
						className: b.a.emptyStateButton
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
			const v = h.a.wrapped(_, "BellOutline", b.a),
				O = e => {
					let {
						isBannerEnabled: t,
						isLoggedIn: n
					} = e;
					const i = Object(o.d)();
					return a.a.createElement("div", {
						className: Object(d.a)(b.a.emptyState, {
							[b.a.emptyStateWithBanner]: Boolean(t),
							[b.a.loggedOutState]: !n
						})
					}, a.a.createElement(v, null), a.a.createElement("h1", {
						className: b.a.emptyTitle
					}, c.fbt._("Be the first to know", null, {
						hk: "2mNJO0"
					})), a.a.createElement("p", {
						className: b.a.emptyDescription
					}, c.fbt._("This is where you get updates on your activity and recommendations", null, {
						hk: "27V2PG"
					})), !n && a.a.createElement("div", {
						className: b.a.emptyStateLoggedOutContainer
					}, a.a.createElement(u.j, {
						onClick: () => i(Object(g.openLoginModal)())
					}, c.fbt._("Log In", null, {
						hk: "ZR3pC"
					})), a.a.createElement("span", {
						className: b.a.emptyStateDivider
					}), a.a.createElement(u.j, {
						onClick: () => i(Object(g.openRegisterModal)())
					}, c.fbt._("Sign Up", null, {
						hk: "3Jd0SI"
					}))))
				};
			var x = n("./src/reddit/controls/InternalLink/index.tsx");

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const y = ["r/somethingimade", "r/CasualConversation", "r/DoesAnybodyElse", "r/Old_Recipes"][Math.floor(100 * Math.random()) % 4];
			var k = e => {
				let {
					inTooltip: t,
					isPopular: n,
					onBtnClick: i
				} = e;
				const o = n ? "r/popular" : y,
					s = `/${o}`,
					r = {
						to: s,
						kind: u.b.InternalLink
					},
					m = a.a.createElement(x.default, {
						to: s,
						target: "_blank",
						rel: "noopener noreferrer",
						className: b.a.subredditLinkR,
						onClick: i
					}, o);
				return a.a.createElement("div", {
					className: Object(d.a)(b.a.emptyState, b.a.karmaView, {
						[b.a.inNotificationsPage]: !t
					})
				}, a.a.createElement("img", {
					src: `${l.a.assetPath}/img/wrappedreddit/default_avatar.png`,
					alt: c.fbt._("default user avatar", null, {
						hk: "1VMTKf"
					}),
					className: Object(d.a)(b.a.avatarImage, {
						[b.a.inTooltip]: t
					})
				}), a.a.createElement("h1", {
					className: Object(d.a)(b.a.emptyTitle, {
						[b.a.inTooltip]: t
					})
				}, c.fbt._("You don’t have any activity yet", null, {
					hk: "43tvWW"
				})), a.a.createElement("p", {
					className: b.a.emptyDescription
				}, n ? c.fbt._("That’s ok, maybe you just need the right inspiration. Try browsing {Link: to r/popular}, for new communities to join.", [c.fbt._param("Link: to r/popular", m)], {
					hk: "VSBWM"
				}) : c.fbt._("That’s ok, maybe you just need the right inspiration. Try posting in {Link: to popular subreddit} , a popular community for discussion.", [c.fbt._param("Link: to popular subreddit", m)], {
					hk: "1WOK4T"
				})), a.a.createElement(u.t, N({
					className: b.a.emptyStateButton,
					onClick: i,
					text: `Visit ${o}`
				}, r)))
			};

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const C = "/img/notifications/star.png";
			var E = e => {
					let {
						inTooltip: t,
						onBtnClick: n
					} = e;
					const i = {
						to: "/r/memes/top/",
						kind: u.b.InternalLink
					};
					return a.a.createElement("div", {
						className: Object(d.a)(b.a.emptyState, b.a.karmaView, {
							[b.a.inNotificationsPage]: !t
						})
					}, a.a.createElement("div", {
						className: Object(d.a)(b.a.memesImageWrapper, {
							[b.a.inTooltip]: t
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
							[b.a.inTooltip]: t
						})
					}, c.fbt._("You don’t have any activity yet", null, {
						hk: "2GNaV0"
					})), a.a.createElement("p", {
						className: b.a.emptyDescription
					}, c.fbt._("That’s ok, maybe you just need the right inspiration. Let’s get some more lolz in your life.", null, {
						hk: "10HMFI"
					})), a.a.createElement(u.t, j({
						className: b.a.emptyStateButton,
						onClick: n
					}, i), c.fbt._("See today’s Top Memes in r/Memes", null, {
						hk: "42zwJz"
					})))
				},
				I = n("./src/lib/notifications/index.ts"),
				S = n("./src/lib/notifications/constants.ts"),
				B = n("./src/redditGQL/types.ts"),
				T = n("./src/reddit/actions/modal.ts"),
				w = n("./src/reddit/actions/notifications/index.ts"),
				P = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				L = n("./src/reddit/actions/toaster.ts"),
				A = n("./src/reddit/components/Settings/modalIds.ts"),
				H = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				R = n("./src/reddit/models/Toast/index.ts"),
				U = n("./src/reddit/selectors/notificationPrefs.ts"),
				F = n("./src/reddit/selectors/user.ts");

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const M = [B.l.PrivateMessage, B.l.ChatMessage, B.l.ChatRequest, B.l.UsernameMention, B.l.PostReply, B.l.UpvotePost, B.l.UpvoteComment, B.l.CommentReply, B.l.ThreadReplies, B.l.TopLevelComment, B.l.NewPostActivity, B.l.UserNewFollower, B.l.PostFlairAdded, B.l.UserFlairAdded, B.l.NewPinnedPost, B.l.AwardReceived, B.l.PostFollow, B.l.TalkLive, B.l.CommentFollow, B.l.LifecyclePostSuggestions, B.l.BroadcastRecommendation, B.l.SubredditRecommendation, B.l.RedditLore, B.l.OneOff, B.l.CakeDay, B.l.ModeratedSrEngagement];
			var z;
			! function(e) {
				e[e.TURN_ON_PN = 0] = "TURN_ON_PN", e[e.TURN_ON_PN_APP = 1] = "TURN_ON_PN_APP", e[e.VERIFY_EMAIL = 2] = "VERIFY_EMAIL", e[e.TURN_ON_DAYLY_DIGEST = 3] = "TURN_ON_DAYLY_DIGEST", e[e.DONE = 4] = "DONE"
			}(z || (z = {}));
			var W = e => {
					let {
						inTooltip: t,
						isBannerEnabled: n,
						isLoggedIn: r,
						onBtnClick: m,
						hideTooltip: p
					} = e;
					const f = Object(o.d)(),
						h = Object(o.e)(F.n),
						g = Object(o.e)(F.D),
						_ = Object(i.useRef)(h),
						[v, x] = Object(i.useState)(z.TURN_ON_PN),
						N = Object(o.e)(e => e.user.accountSettings.changeEmail.api.pending),
						y = Object(i.useCallback)(() => {
							f(async (e, t) => {
								var n, i;
								let a = Object(F.fb)(t());
								a.allIds.length || await e(Object(P.a)(H.a.Email));
								const o = null === (i = null === (n = (a = Object(F.fb)(t())).byId) || void 0 === n ? void 0 : n.EMAIL_DIGEST) || void 0 === i ? void 0 : i.isEnabled;
								x(o ? z.DONE : z.TURN_ON_DAYLY_DIGEST)
							})
						}, [f]),
						k = Object(i.useCallback)(() => {
							g ? y() : x(z.VERIFY_EMAIL)
						}, [g, y]),
						j = Object(i.useCallback)(() => {
							f(async (e, t) => {
								const n = t();
								Object(F.hb)(n).allIds.length || await e(Object(P.a)(H.a.Push)), Object(U.c)(t(), M) ? x(z.TURN_ON_PN_APP) : k()
							})
						}, [f, k]),
						C = Object(i.useCallback)(() => {
							(() => Object(I.a)() === S.a.Granted)() ? j(): x(z.TURN_ON_PN)
						}, [j]),
						E = Object(i.useCallback)(() => {
							m(s.a.Email_perms)(), t && p && p(), f(Object(T.h)(A.a))
						}, [f, m, t, p]);
					if (Object(i.useEffect)(() => {
							C()
						}, [C]), Object(i.useEffect)(() => {
							if (h !== _.current && v === z.VERIFY_EMAIL) {
								const e = Object(L.e)(c.fbt._("Email successfully updated!", null, {
									hk: "3iPlUp"
								}), R.b.SuccessCommunityGreen);
								f(Object(L.f)(e)), y()
							}
						}, [h, v, y]), Object(i.useEffect)(() => {
							N && f(Object(T.g)(A.a))
						}, [N, f]), v === z.DONE) return a.a.createElement(O, {
						isLoggedIn: r,
						isBannerEnabled: n
					});
					const B = {
							to: "/settings/notifications",
							kind: u.b.InternalLink,
							onClick: v === z.TURN_ON_PN_APP ? m(s.a.PN_perms) : m(s.a.Email_perms)
						},
						W = {
							onClick: v === z.TURN_ON_PN ? async () => {
								m(s.a.PN_perms)(), t && p && p(), await f(Object(w.requestBrowserNotificationPermissionPromptByUser)(A.f)), C()
							} : E
						},
						G = v === z.TURN_ON_PN || v === z.TURN_ON_PN_APP,
						V = v === z.TURN_ON_PN_APP || v === z.TURN_ON_DAYLY_DIGEST;
					return a.a.createElement("div", {
						className: Object(d.a)(b.a.emptyState, b.a.karmaView, {
							[b.a.inNotificationsPage]: !t
						})
					}, a.a.createElement("img", {
						src: `${l.a.assetPath}/img/wrappedreddit/default_avatar.png`,
						alt: c.fbt._("default user avatar", null, {
							hk: "1VMTKf"
						}),
						className: Object(d.a)(b.a.avatarImage, {
							[b.a.inTooltip]: t
						})
					}), a.a.createElement("h1", {
						className: Object(d.a)(b.a.emptyTitle, {
							[b.a.inTooltip]: t
						})
					}, G ? c.fbt._("Turn on notifications", null, {
						hk: "3qFpFu"
					}) : c.fbt._("Turn on email digest", null, {
						hk: "obBF8"
					})), a.a.createElement("p", {
						className: b.a.emptyDescription
					}, G ? c.fbt._("Stay in the loop on content from communities you love right on your phone.", null, {
						hk: "1gwnbO"
					}) : c.fbt._("Stay in the loop on content from communities you love right on your email inbox.", null, {
						hk: "1rs4kD"
					})), a.a.createElement(u.t, D({
						className: b.a.emptyStateButton
					}, V ? B : W, {
						text: c.fbt._("OK", null, {
							hk: "rhf0"
						})
					})))
				},
				G = n("./src/reddit/constants/experiments.ts"),
				V = n("./src/reddit/helpers/chooseVariant/index.ts");
			const q = e => Object(V.c)(e, {
					experimentEligibilitySelector: V.a,
					experimentName: G.Hb
				}) === G.Ud.MemesNoBadge,
				K = e => Object(V.c)(e, {
					experimentEligibilitySelector: V.a,
					experimentName: G.Hb
				}) === G.Ud.PnEmailNoBadge,
				J = e => Object(V.c)(e, {
					experimentEligibilitySelector: V.a,
					experimentName: G.Hb
				}) === G.Ud.KarmaNoBadge,
				Y = e => Object(V.c)(e, {
					experimentEligibilitySelector: V.a,
					experimentName: G.Hb
				}) === G.Ud.PopularNoBadge,
				Z = e => Object(V.c)(e, {
					experimentEligibilitySelector: V.a,
					experimentName: G.Hb
				}) === G.Ud.CatsNoBadge;
			t.a = e => {
				let {
					isBannerEnabled: t,
					isLoggedIn: n,
					inTooltip: i,
					hideTooltip: c
				} = e;
				const l = Object(r.a)(),
					d = e => () => l(Object(s.s)({
						actionInfoType: e
					})),
					u = Object(o.e)(q),
					m = Object(o.e)(K),
					b = Object(o.e)(J),
					p = Object(o.e)(Y),
					h = Object(o.e)(Z);
				return u ? a.a.createElement(E, {
					inTooltip: i,
					onBtnClick: d(s.a.Memes)
				}) : m ? a.a.createElement(W, {
					isBannerEnabled: t,
					isLoggedIn: n,
					inTooltip: i,
					onBtnClick: d,
					hideTooltip: c
				}) : b || p ? a.a.createElement(k, {
					inTooltip: i,
					isPopular: p,
					onBtnClick: d(s.a.Karma)
				}) : h ? a.a.createElement(f, {
					inTooltip: i
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
					const a = Object(s.Ab)(e, {
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
				m = e => e.features.banned.search.api.pending,
				b = e => e.features.banned.search.result,
				p = e => e.features.banned.inContext
		},
		"./src/reddit/selectors/experiments/delayDnPermission.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var i = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => i.Oc.DnNoModal === Object(a.c)(e, {
				experimentEligibilitySelector: a.a,
				experimentName: i.Eb
			})
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
				return b
			})), n.d(t, "d", (function() {
				return p
			}));
			var i = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/models/SubredditModeration/index.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/pages/modHub/index.ts");
			Object(o.a)({
				pages: {
					modHub: s.a
				}
			});
			const r = [],
				c = Object(i.a)((e, t) => {
					let {
						subredditId: n
					} = t;
					const i = e.pages.modHub.muted.userOrder[n];
					return i ? i.map(t => e.pages.modHub.muted.models[n][t]) : r
				}),
				l = (e, t) => {
					let {
						subredditId: n
					} = t;
					const i = Object(a.e)(n);
					return !!e.pages.modHub.muted.api.pending[i]
				},
				d = (e, t, n) => !!e.pages.modHub.muted.models[t] && !!e.pages.modHub.muted.models[t][n],
				u = e => !!e.pages.modHub.muted.search.api.pending,
				m = e => e.pages.modHub.muted.search.result,
				b = e => {
					var t, n, i;
					return null === (i = null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.modHub) || void 0 === n ? void 0 : n.muted) || void 0 === i ? void 0 : i.inContext
				},
				p = (e, t) => {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard~Reddit.7bacf312930f42a6b73d.js.map