// https://www.redditstatic.com/desktop2x/Recap.1e7b1f9035c34c200418.js
// Retrieved at 6/28/2023, 10:20:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Recap", "PushNotifications"], {
		"./src/lib/notifications/token.ts": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return o
			})), t.d(a, "b", (function() {
				return d
			}));
			var r = t("./src/config.ts"),
				i = t("./src/redditGQL/operations/RegisterWebPushToken.json"),
				s = t("./src/lib/makeGqlRequest/index.ts"),
				c = t("./src/lib/serviceWorker/index.ts"),
				n = t("./src/lib/timezone/index.ts"),
				l = e => {
					const a = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"),
						t = window.atob(a),
						r = new Uint8Array(t.length);
					for (let i = 0; i < t.length; ++i) r[i] = t.charCodeAt(i);
					return r
				};
			var o;
			! function(e) {
				e[e.Success = 0] = "Success", e[e.FailedGeneric = 1] = "FailedGeneric", e[e.FailedResponse = 2] = "FailedResponse", e[e.FailedGqlReponse = 3] = "FailedGqlReponse", e[e.FailedNoServiceWorker = 4] = "FailedNoServiceWorker", e[e.FailedNoSubscription = 5] = "FailedNoSubscription"
			}(o || (o = {}));
			const d = async e => {
				try {
					const a = await Object(c.a)();
					if (!a) return o.FailedNoServiceWorker;
					let t = await a.pushManager.getSubscription();
					if (!t) {
						const e = {
							userVisibleOnly: !0,
							applicationServerKey: l(r.a.pushNotificationApplicationServerKey)
						};
						t = await a.pushManager.subscribe(e)
					}
					if (!t) return o.FailedNoSubscription;
					const d = await ((e, a) => {
						const t = {
							pushToken: JSON.stringify(a),
							timezoneName: Object(n.b)() || n.a,
							timestamp: (new Date).toISOString(),
							language: "en_us"
						};
						return Object(s.a)(e(), {
							...i,
							variables: t
						})
					})(e, t);
					if (d && !d.ok) return o.FailedResponse;
					const m = null == d ? void 0 : d.body.data.registerWebPushToken;
					return m && !m.ok ? o.FailedGqlReponse : o.Success
				} catch (a) {
					return console.error(a), o.FailedGeneric
				}
			}
		},
		"./src/reddit/actions/notifications/index.ts": function(e, a, t) {
			"use strict";
			t.r(a), t.d(a, "initializeServiceWorkerChannel", (function() {
				return T
			})), t.d(a, "requestNotificationsPermissions", (function() {
				return L
			})), t.d(a, "subscribeForPNs", (function() {
				return F
			})), t.d(a, "unsubscribeFromPNs", (function() {
				return A
			})), t.d(a, "requestBrowserNotificationPermissionPromptByUser", (function() {
				return D
			})), t.d(a, "subscribeToPermissionsChange", (function() {
				return P
			}));
			var r = t("./node_modules/fbt/lib/FbtPublic.js"),
				i = t("./node_modules/lodash/omit.js"),
				s = t.n(i),
				c = t("./src/lib/browser/isIncognito.ts"),
				n = t("./src/lib/notifications/token.ts"),
				l = t("./src/lib/notifications/index.ts"),
				o = t("./src/lib/notifications/constants.ts"),
				d = t("./src/lib/serviceWorker/index.ts"),
				m = t("./src/reddit/actions/chat/toggle.ts"),
				b = t("./src/reddit/actions/modal.ts"),
				u = t("./src/reddit/actions/notifications/utils.ts"),
				p = t("./src/reddit/actions/tabBadging.ts"),
				g = t("./src/reddit/actions/toaster.ts"),
				f = t("./src/reddit/constants/modals.ts"),
				h = t("./src/reddit/helpers/parseUrl.ts"),
				v = t("./src/reddit/helpers/tabBadging/index.ts"),
				E = t("./src/reddit/helpers/trackers/notifications.ts"),
				_ = t("./src/reddit/models/Toast/index.ts"),
				O = t("./src/reddit/selectors/activeModal.ts"),
				j = t("./src/reddit/selectors/activeModalId.ts"),
				k = t("./src/reddit/constants/experiments.ts"),
				C = t("./src/reddit/helpers/chooseVariant/index.ts"),
				N = t("./src/reddit/selectors/user.ts");
			const S = e => Object(C.c)(e, {
				experimentEligibilitySelector: N.S,
				experimentName: k.Gb
			}) === k.Yd;
			var y = t("./src/reddit/selectors/experiments/delayDnPermission.ts"),
				I = t("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");
			const x = e => Object(C.c)(e, {
				experimentName: k.ic,
				experimentEligibilitySelector: C.a
			}) === k.Yd;
			var w = t("./src/reddit/selectors/meta.ts");
			let R = !1;
			const T = async (e, a) => {
				const t = Object(N.R)(e);
				if (R) return;
				if (R = !0, Object(u.a)(e) !== o.d.NotificationsSupported) return;
				await Object(d.a)();
				navigator.serviceWorker.addEventListener("message", r => {
					const i = r.data,
						c = i.command || i.type;
					if ("registerWithServiceWorker" === c) B(e);
					else if (c === v.a && t) {
						const e = s()(i, ["command"]);
						a(Object(p.f)(e))
					} else if ("navigate.chat" === c) {
						const e = Object(h.a)(i.data.href);
						e && e.pathname && a(Object(m.c)(e.pathname))
					}
				}), B(e)
			}, B = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: E.c(e)
				})
			}, L = function(e, a) {
				let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
				return async (r, i, s) => {
					const n = i(),
						d = Object(w.f)(n),
						m = x(n),
						b = !!Object(j.a)(n),
						u = Object(y.a)(n),
						p = Object(I.e)(n),
						g = Object(O.c)(f.a.NSFW_BLOCKING_MODAL_V2)(n),
						h = S(n);
					if (p || g) return;
					if (await Object(c.a)() || d) return;
					await T(n, r);
					E.l(n), await Object(l.b)(e, a, () => {
						m || u || b || r(Object(o.s)()), r(Object(o.q)()), E.j(n)
					}, (e, a) => {
						r(Object(o.o)()), r(A(a ? o.a.Denied : o.a.Closed)), e && (a ? E.e(n) : E.f(n)), t()
					}, e => {
						r(Object(o.p)()), r(F()), e && E.d(n), t()
					}, () => {
						r(Object(o.n)()), t()
					}, () => {
						r(Object(o.r)())
					}, h)
				}
			}, F = e => async (a, t, i) => {
				const s = t();
				try {
					switch (await Object(n.b)(i.gqlContext)) {
						case n.a.Success:
							Object(u.b)(o.a.Granted), E.m(s), e && a(Object(g.f)({
								kind: _.b.SuccessCommunity,
								text: r.fbt._("Changes saved", null, {
									hk: "wGH5U"
								})
							}));
							break;
						case n.a.FailedResponse:
							E.k(s, "registration_failed_generally");
							break;
						case n.a.FailedGqlReponse:
							E.k(s, "registration_failed_in_gql")
					}
				} catch (c) {
					E.k(s, "registration_failed_uncaught_exception"), console.error(c)
				}
			}, A = (e, a) => async t => {
				try {
					Object(u.b)(e);
					const i = await Object(d.a)();
					if (i) {
						const e = await i.pushManager.getSubscription();
						e && (e.unsubscribe(), a && t(Object(g.f)({
							kind: _.b.SuccessCommunity,
							text: r.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						})))
					}
				} catch (i) {}
			}, D = e => async (a, t) => {
				const r = t();
				if (Object(u.a)(r) === o.d.NotificationsSupported) switch (Object(l.a)()) {
					case o.a.Default:
					case o.a.Closed:
						await a(L(!0, !0));
						break;
					case o.a.Denied:
						a(Object(b.h)(e))
				}
			}, P = () => async (e, a) => {
				var t;
				if (!(null === (t = null === navigator || void 0 === navigator ? void 0 : navigator.permissions) || void 0 === t ? void 0 : t.query)) return;
				const r = a();
				if (Object(u.a)(r) !== o.d.NotificationsSupported) return;
				const i = await navigator.permissions.query({
					name: "notifications"
				});
				i.onchange = () => (a => {
					switch (a) {
						case o.a.Denied:
							e(A(o.a.Denied)), E.e(r);
							break;
						case o.a.Granted:
							e(F()), E.d(r);
							break;
						default:
							e(A(o.a.Default))
					}
				})(i.state)
			}
		},
		"./src/reddit/actions/pages/recap/index.ts": function(e, a, t) {
			"use strict";
			t.r(a), t.d(a, "recapPageRequested", (function() {
				return n
			}));
			var r = t("./src/lib/pageTitle/index.ts"),
				i = t("./src/reddit/actions/platform.ts"),
				s = t("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				c = t("./src/reddit/selectors/user.ts");
			const n = () => async (e, a) => {
				e(Object(i.n)({
					title: Object(r.l)()
				}));
				const t = a();
				if (!Object(c.S)(t)) return Object(s.a)(e, t)
			}
		},
		"./src/reddit/helpers/trackers/notifications.ts": function(e, a, t) {
			"use strict";
			t.d(a, "j", (function() {
				return o
			})), t.d(a, "d", (function() {
				return d
			})), t.d(a, "e", (function() {
				return m
			})), t.d(a, "f", (function() {
				return b
			})), t.d(a, "l", (function() {
				return p
			})), t.d(a, "m", (function() {
				return g
			})), t.d(a, "k", (function() {
				return f
			})), t.d(a, "c", (function() {
				return v
			})), t.d(a, "b", (function() {
				return E
			})), t.d(a, "i", (function() {
				return _
			})), t.d(a, "a", (function() {
				return O
			})), t.d(a, "n", (function() {
				return j
			})), t.d(a, "o", (function() {
				return k
			})), t.d(a, "h", (function() {
				return C
			})), t.d(a, "g", (function() {
				return N
			}));
			var r = t("./src/reddit/selectors/telemetry.ts"),
				i = t("./src/telemetry/index.ts"),
				s = t("./src/telemetry/models/Event.ts");
			var c;
			! function(e) {
				e.FREQUENT = "frequent", e.LOW = "low", e.OFF = "off"
			}(c || (c = {}));
			const n = e => ({
					...r.p(e),
					noun: "desktop_notification_permissions"
				}),
				l = e => e ? "enable" : "disable",
				o = e => {
					Object(i.a)({
						...n(e),
						action: s.c.View,
						source: "popup"
					})
				},
				d = e => {
					Object(i.a)({
						...n(e),
						action: s.c.Allow,
						source: "popup"
					})
				},
				m = e => {
					Object(i.a)({
						...n(e),
						action: s.c.Block,
						source: "popup"
					})
				},
				b = e => {
					Object(i.a)({
						...n(e),
						action: s.c.Close,
						source: "popup"
					})
				},
				u = (e, a, t) => ({
					...r.p(e),
					actionInfo: r.d(e, {
						success: a,
						reason: t
					}),
					noun: "push_token"
				}),
				p = e => {
					Object(i.a)({
						...u(e, !0),
						action: s.c.Request,
						source: "notification"
					})
				},
				g = e => {
					Object(i.a)({
						...u(e, !0),
						action: s.c.Register,
						source: "notification"
					})
				},
				f = (e, a) => {
					Object(i.a)({
						...u(e, !1, a),
						action: s.c.Bail,
						source: "notification"
					})
				},
				h = e => ({
					...r.p(e),
					noun: "push_notification"
				}),
				v = e => ({
					...h(e),
					notification: r.G(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				E = (e, a) => t => ({
					...r.p(t),
					action: l(e),
					email: {
						type: a
					},
					noun: "email",
					source: "email_app_settings"
				}),
				_ = (e, a) => t => ({
					...r.p(t),
					action: l(e),
					notification: {
						type: a
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				O = e => a => ({
					...r.p(a),
					source: "email_app_settings",
					action: l(e),
					noun: "email",
					notification: {
						type: "all"
					}
				}),
				j = (e, a, t) => i => ({
					...r.p(i),
					action: "set_frequency",
					noun: t,
					source: "community_notifications",
					subreddit: {
						id: e,
						name: a.toLowerCase()
					}
				}),
				k = () => e => ({
					...r.p(e),
					action: s.c.View,
					noun: "screen",
					source: "global",
					actionInfo: {
						pageType: "community_alerts"
					}
				}),
				C = () => e => ({
					...r.p(e),
					action: "click",
					noun: "desktop_notification_permissions",
					source: "overlay"
				}),
				N = () => e => ({
					...r.p(e),
					action: "auto_dismiss",
					noun: "desktop_notification_permissions",
					source: "overlay"
				})
		},
		"./src/reddit/icons/svgs/EditPencil/index.tsx": function(e, a, t) {
			"use strict";
			var r = t("./node_modules/react/index.js"),
				i = t.n(r);
			a.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 14 14",
				xmlns: "http://www.w3.org/2000/svg",
				version: "1.1"
			}, i.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), i.a.createElement("g", null, i.a.createElement("path", {
				fill: "inherit",
				d: "M8.1168,3.0832 L10.9168,5.8832 C11.0728,6.0392 11.0728,6.2928 10.9168,6.4488 L4.0824,13.2832 C4.0072,13.3584 3.9056,13.4 3.8,13.4 L1,13.4 C0.7784,13.4 0.6,13.2216 0.6,13 L0.6,10.2 C0.6,10.0944 0.6416,9.9928 0.7168,9.9176 L7.5512,3.0832 C7.7072,2.9272 7.9608,2.9272 8.1168,3.0832 Z M13.5168,2.152 C13.9848,2.62 13.9848,3.3808 13.5168,3.8488 L12.048,5.3176 C11.9696,5.396 11.8672,5.4352 11.7656,5.4352 C11.6632,5.4352 11.5608,5.396 11.4824,5.3176 L8.6824,2.5176 C8.5264,2.3616 8.5264,2.108 8.6824,1.952 L10.1512,0.4832 C10.6192,0.0152 11.38,0.0152 11.848,0.4832 L13.5168,2.152 Z"
			})))
		},
		"./src/reddit/pages/Recap/CardTemplates/index.m.less": function(e, a, t) {
			e.exports = {
				fallbackStaticImage: "_1KeAVsRPHUhqnJZMxFxLAe",
				isSelected: "_2q4cbtrHijRWx9YGCsyyCP",
				small: "ZKjDE_xgQg64-5JX7mfvC",
				illustration: "_2SCbuF-0NbZReV6s7Nyh9b",
				initialCard: "_1ZjUzNgoR_82mpNIEBvbVE",
				image: "_7PGeAYknEPulscfNx1Zht",
				isResponsive: "_3UCvT7ZByIwajdHBBdoHQh",
				noBg: "TimZjENwe8TOIzwsSIeHh",
				isCircle: "_33wC-mxWH3e9FVgBiwaBz0",
				orange: "_2QS4phWYU6ucBxU42vDLDc",
				post: "_1mFNY9hUJx094QedQVkReh",
				commentSubreddit: "-f1VzXgnc434HTJc_EpjA",
				unitCircle: "_1pbhXLkA7b8wiToPxVBSK7",
				timeUnit: "_12ytMcr6l7mjphNbwdDoTB",
				selected: "_13NY-jZoIQCjuTRh8lxmyX",
				top: "_2ikvkKKW5L3LmjvOqoceQE",
				subredditFloating: "_2Y4x5baNwqdyXoXblfLo0I",
				isSubredditCard: "XkkRt4Sougn8c0jc12AFE",
				animated: "_227IdlbuAOAmiLYS_ipDrX",
				isTag: "A5iq-Bhochjxn1oBftCIs",
				subredditList: "_1NR0Xh41JU125cxU8lv3ID",
				subreddit: "_1yGUonc3FXb01y4LYDW5Ol",
				subredditBar: "_1jLUA8Vq5Dyiw0jnuOB7hC",
				time: "_14V8Sd95hYfT-OerPijGd5",
				isTopic: "_2NznIkWsFy8axpbbufRBhd",
				unit: "_2izsJTQ8i76U9EzhfFjQy6",
				topicIcon: "_38Iab9cZ9uB4gbwZ-6YibQ",
				topicImage: "_1wfHG-LpWoy4ncumk6dto_",
				postWrapper: "_1kINVl5DBMf07fyl86_XmP",
				text: "HoA7R6kbvEk4QoSRoO6s8",
				commentWrapper: "_1T0dIGavR9RtVJ-QidMTPq",
				subredditImage: "PRbaY1FL2DBM5rgUUDAHY",
				comment: "_2fN2A4C6nC3WdaAVoFCnKH",
				asText: "A7ufMmI97qMfcBZuGn7DO",
				avatarsWrapper: "_2a1oit7pqS4PI2liEGh754",
				avatars: "_2tUtJXDfTfNgRqksg-2Ueu",
				lightning: "_1AcdGnfHg7CWB-9lWfXoUW",
				avatar: "SXt-97VdQ3Vci84aFiNpZ",
				left: "_3IFNQKD52ExZKgnkRRhHZo",
				collectibleAvatar: "_1qzC4Ke4DAR2zCMvGrHmhV",
				rplaceWrapper: "_2oFtcTqWeu4WB_wRcBDV8q",
				canvas: "TlPTVzS2zm-Faa09egZWj",
				subredditButton: "jutiU8t5x8QX5TvRX6mug",
				rplaceContainer: "_3tobgOQuwsw9VS3h-q_zKg",
				delayedOpacityAnimation: "_23fXZiJSvAZlFkC2iBkMI-",
				forSharing: "_3dq4tHdnW1B2KDaXOF82ea",
				externalLinkWrapper: "_3ag_xSM4Ivz_-OAsF98sL8",
				icon: "_2ArLVQEsxK5GABq6m6b1_A",
				endText: "_11vSxrNJheaZGoXSOhby81",
				asLink: "_1bwGUcJSFAdHUs6rM1-2V0",
				visibilityWrapper: "_2Y8J5TUjEui3ZdqR1sdUi_",
				abilityCardWrapper: "IzLwCBOoAVhBMtJZ0M3Ih",
				animateCard: "_2NDiMShtTfO4pelaaqN-7h",
				card: "_3PHEbHCcEoKuPXD5y2tpPn",
				shiny: "_2Mjxv_A2C0HNvvupSV5eN7",
				abilityAvatar: "_3Tv12zQLciT-OzWwyHVLwM",
				userName: "_25Se9Z09-QEj1Pk3YUZ-go",
				cardBackground: "_2fhVIVBphrjZe5ebySvYuI",
				abilityWrapper: "_28we1vKvjabnki7CfgOecK",
				ability: "tc3Nf8FdzAU6SXiLmwF2o",
				stats: "_196EXJVeWrc1c60YK0_vIX",
				subreddits: "_2y0eFxGzncAZQ7RNwDzK5Z",
				karma: "_1v4tWdVTNdZoknWXik83eZ",
				karmaTitle: "_1wEOnpCA6iFITYarjM5Qi1",
				karmaValue: "_3sUEGZkGk_BPd12m1feCmX",
				cardRarity: "_3wWZ_JpQ8Em7Idqu8xROmg",
				rare: "_3phq2K7_HeEH8ly5UUgeNP",
				epic: "_3kPmfy5WBLhgokakXvA_6L",
				legendary: "_2eRJDug5HRVWHJlJYYkfj7",
				topic: "_2JuIXbV95vsbm5v3UNUEH_",
				topicBg: "_3GaIYjmHqjPAZk-ub-WDkd",
				premiumIcon: "_3UvaCTByVClHjnhrrKGTgz",
				toggles: "_2mrko_M41-aMp-HI9Jn4qt",
				visible: "_1SGKVO17G2cqHugOYN718W",
				hideAvatar: "_2AKDZvyGrXI5HNbC7r6wnQ",
				hideName: "meFhW43WlZ8eZdVtHROp_",
				black: "_33z5qa5oBaQjrv47q0jFWV",
				toggleButton: "_60z2KePIlFas1STcHluDK",
				externalLinkButton: "gahvBoJzFB22B4R2sRjtT",
				flippingWrapper: "_2AxwHfDR-ej2uDlRjWsNgR",
				flipped: "_34cX3biPCG-9Fj8OdID_ck",
				flipping: "_3P8l8EoUyMrtPNc8Z5YttT",
				unflipped: "_1elJrBq9DxddnxTtxISGzT",
				unflipping: "BiMziFvmLz8OE6kGoXx3B",
				frontCard: "_1Pk5k3s0aefYfK46eAUd8i",
				cardIcon: "_1kO14Aqfn7p85xFVBgUIcM",
				frontText: "_2y0fgCHrYKbVeJAgPTj7kL",
				frontMainText: "_2lo53Nklm_Aen46Fs_cZxv",
				frontSecondaryText: "_2busDGFpoeJB0onzhjXTDm",
				backCard: "_2YdO-cfD4VqrvSfDz8joft",
				editAvatarWrapper: "_3m1DeYumi2lyKdOPzzXs1d"
			}
		},
		"./src/reddit/pages/Recap/Components/Card/index.m.less": function(e, a, t) {
			e.exports = {
				wrapper: "_2ti-nOgnyCp_gxEzW0cknv",
				isResponsive: "I0BOV_1t20-xqqQsTFJSD",
				content: "_1oelt3pdl_QEdiwo9CoXkC",
				forAbility: "_2rdXnZwry4Ew0jXPbsuuQH",
				forSharing: "_2SnzCVjryqR7oRYDUT1ac2",
				footer: "b-QE4T2ZutkdB3vO-G1V9"
			}
		},
		"./src/reddit/pages/Recap/Components/ErrorScreen/index.m.less": function(e, a, t) {
			e.exports = {
				wrapper: "_3VBwoUd-qgxY5Uxy1BLcd_",
				image: "_4hk3k8W3TaR0FTuL0ItSz",
				isCircle: "_29asSMfcj-9jZ0LEm8IJ4d",
				fallbackStaticImage: "_1WYvIcNCbKgpufCYGaVe4i",
				info: "_1RIgyVmgil0LrC6D-cQmvn",
				logo: "MCGHx-kzPrm368NBccYNA",
				title: "_119HRcVkD7SAJvfnq54LzP",
				subtitle: "_3OrYMGFT4jp9FywgzO6eqr",
				retryButton: "_2cYDTAEMEawAyY6u70A30l"
			}
		},
		"./src/reddit/pages/Recap/Components/Info/index.m.less": function(e, a, t) {
			e.exports = {
				info: "_2Hs1Nv6knWzE1zJUPQ85QV",
				initialCard: "ByVCl6aSucyu0Z8kx6iIu",
				logo: "_14tAJBrwfUCwzb6yqYUTFn",
				title: "_1rxpNtuoawyacNKWmoXJhp",
				subtitle: "_2_rJDMuvgoGZeDZQfmd5Wd",
				cutoffText: "qkE6SNBBBjm83S4hFbLG-",
				black: "_3tGt5UIGFuCkCjfLzTlcHq",
				selected: "_1kKx4AbaHYRcTRNLl_jXjf",
				white: "_10sac8_Yz6flUpM7voKM5C",
				value: "trOgcRV-5wN9Yn9T2HwYI",
				orange: "alkP8lQe4nDtnF4wadJWh",
				numeric: "_32QHJBX9bSS0wrvJd36xrm",
				isResponsive: "TIf6HF1ByQmNXceZXCB1G"
			}
		},
		"./src/reddit/pages/Recap/Components/LoadingIcon/index.m.less": function(e, a, t) {
			e.exports = {
				circle: "_2M7sw4hhnG1M80Av_-XLMC",
				image: "_7Hjths-BWbWSUqPcsiRkd"
			}
		},
		"./src/reddit/pages/Recap/Components/Pager/index.m.less": function(e, a, t) {
			e.exports = {
				pager: "_3DMxIYiAWRanoZy9hUAwYd",
				progressDot: "_3Y90MllTkKOwIqPwsDqLnH",
				active: "_36h8GclKI0s8-ZmDsZ9ahR",
				black: "_3sUBMoHPyyEgv4iNymC-LA",
				nextDot: "_2wSjI4vEKKyW52zlEFC1jM"
			}
		},
		"./src/reddit/pages/Recap/Components/ShareButton/index.m.less": function(e, a, t) {
			e.exports = {
				shareContainer: "iBTnlL3S2stj2beMaG637",
				initialCard: "_2CQ0ujnei_R5lKiaeiDqlA",
				forAbility: "VsNrFYQq-SYl16I7vBdBK",
				shareButton: "_29d-H59ilasIsAj2tkxI4n",
				selected: "_2YS2Y_czjXUdlKN2tXsB9j",
				orange: "_28golcYajHH3Dai39MfnqD",
				shareIcon: "_15QdKPiPTT5X5r6faUjBHC",
				white: "N199XBTA1JmONpTctppM0"
			}
		},
		"./src/reddit/pages/Recap/Components/ShareModal/index.m.less": function(e, a, t) {
			e.exports = {
				modalWrapper: "_3h_ebhQEkw-Us2lwQ91gxQ",
				title: "_2mNheYQDR-psYJuBJhGdjD",
				titleCaption: "_2wAliDxxqCvp4UfQoC5j9b",
				titleCloseButtonIcon: "_2nZSax0h-ynbNPL69JlOp6",
				titleCloseButton: "QM9NIJOuoEhxep0F5nDdu",
				controls: "_1Dm-5VxsNKJP1ws_Uv06iV",
				download: "_3eSmLT5ovUEaWrcBH7cGDH",
				shareButton: "bBsDtRkOIrrShd5b8y2FC",
				shareIcon: "_2SPhb-bffOocbsmDdwhXlN",
				downloadIndicator: "_1Zldsk5rcw79nBT3dozwAt",
				puls: "_1-FvtLS2SFvsy5NLBc7VV6",
				shareWrapper: "_11rrHvDG_D7eayBsmuWI6c",
				shareContainer: "ctrg53i30VU_bupRYDh_1",
				card: "_2qH7BrSoyqR2zi9-7jle99",
				shareFooter: "_2xPRLLka4f58lHo37Y-iqz",
				logo: "_2DjulXzAPQ3ODgGkS_CHKR",
				text: "U4vBiT33ZmBD_rb0q2QNb"
			}
		},
		"./src/reddit/pages/Recap/Components/Subreddit/index.m.less": function(e, a, t) {
			e.exports = {
				subredditWrapper: "_1vL-bzmulpkEWki2NoHAZR",
				container: "_2fGVT1xSC1NoChnVQsWJk3",
				big: "_2qLbCAn09QPjzOLcyuuDeQ",
				small: "_3Sb4lcau-faHSM5BANpRPk",
				tiny: "_21epAkwBwbOoN3LFkUY9oC",
				micro: "_3VaL5kSmRllGFnzpxwqkBo",
				long: "_3X9qouOQBjyY_xFRAc6MFt",
				red: "_3IAhKVuscom0pCYdjNoNkr",
				addButton: "_2IxQ5yLYRSgewPR2DK3Owi",
				icon: "za5QKE4flmI4N2jZ7ZZHe",
				white: "_1dqOuXihVBcHP5_I-KbetO",
				subreddit: "_3zSNBMZDGWtgi9b1bbASpF",
				alternativeFocusColor: "_2fOx1gW2DSjDcbW7WElxc6",
				text: "_2c6NuoMa5kO0yyydUfphQZ",
				subredditPrefix: "_1RgOSqjcgo4hSLGk1fLyF5",
				withButton: "_3bcZWcr4cTbxQPgUhMNVmI"
			}
		},
		"./src/reddit/pages/Recap/Components/index.m.less": function(e, a, t) {
			e.exports = {
				cardsContainer: "_1IHzyKlGYPr5q1Kg0OL-3r",
				wrapper: "_7Le_Dd5cPtJaT3KvpCN-9",
				animated: "_13DIB6QJZGZEPmWasjPWo6",
				card: "o06JQ6d-oXiCqpl6DOJKt",
				downButton: "_26595aKEasiROJPZzGsZ-0",
				fadeUp: "_378OfjACgQdkjjeWY8tTut",
				downButtonIcon: "_13O7BZDC0K1kA8PAHXxPus",
				black: "_25yWR7Mez06MDyLE4cCFxL",
				shareButton: "_2R-wYMVA9PP3Nn__jrlmDC",
				white: "_2LHVYstSI66GqM0aE0lyFV",
				shareButtonIcon: "c2Vk-4PHgOqPD71lmQVZw",
				modalWrapper: "dQou53YbHnY4ZUprcB9EU",
				title: "_z-3XUcq4odquMGnY05O6",
				closeButton: "jLQYSW6UJF_JUbpA3Lx3H",
				closeButtonIcon: "_2qmAde2g8UiNSxiCo5Zxqt",
				shareModal: "_3_4a6JfYB4o7E3UfeHodiB",
				puls: "_3mrtNhanXAIGNDA5jhD0Rw"
			}
		},
		"./src/reddit/pages/Recap/index.m.less": function(e, a, t) {
			e.exports = {
				content: "_3UhnEpFrv5lG-BScw5bqPc"
			}
		},
		"./src/reddit/pages/Recap/index.tsx": function(e, a, t) {
			"use strict";
			t.r(a);
			var r, i, s = t("./node_modules/react/index.js"),
				c = t.n(s),
				n = (t("./assets/fonts/RedditSans/font.less"), t("./src/reddit/constants/colors.ts")),
				l = t("./src/reddit/layout/page/Listing/index.tsx"),
				o = (t("./node_modules/core-js/modules/web.dom.iterable.js"), t("./node_modules/fbt/lib/FbtPublic.js")),
				d = t("./node_modules/lodash/throttle.js"),
				m = t.n(d),
				b = t("./node_modules/react-redux/es/index.js"),
				u = t("./node_modules/react-router-redux/es/index.js"),
				p = t("./src/lib/classNames/index.ts"),
				g = t("./src/reddit/actions/recap/index.ts"),
				f = t("./src/reddit/constants/keycodes.ts"),
				h = t("./src/reddit/constants/modals.ts"),
				v = t("./src/reddit/contexts/PageLayer/index.tsx"),
				E = t("./src/reddit/controls/Button/index.tsx"),
				_ = t("./src/reddit/helpers/localStorage/index.ts"),
				O = t("./src/reddit/helpers/trackers/recap.ts"),
				j = t("./src/reddit/hooks/useTracking.ts"),
				k = t("./src/reddit/icons/fonts/index.tsx");
			! function(e) {
				e.YELLOW = "YELLOW", e.WHITE = "WHITE", e.RED = "RED", e.BLACK = "BLACK"
			}(r || (r = {})),
			function(e) {
				e.Common = "COMMON", e.Rare = "RARE", e.Epic = "EPIC", e.Legendary = "LEGENDARY"
			}(i || (i = {}));
			const C = "PersonalizedYearInReviewCommentCard",
				N = "PersonalizedYearInReviewEndCard",
				S = "PersonalizedYearInReviewGenericCard",
				y = "PersonalizedYearInReviewIntroCard",
				I = "PersonalizedYearInReviewPostCard",
				x = "PersonalizedYearInReviewShareCard",
				w = "PersonalizedYearInReviewSubredditCard",
				R = "PersonalizedYearInReviewSubredditListCard",
				T = "PersonalizedYearInReviewSingleStatSubredditListCard",
				B = "PersonalizedYearInReviewAvatarCard",
				L = "PersonalizedYearInReviewTopicListCard",
				F = "PersonalizedYearInReviewRPlaceTileListCard",
				A = "PersonalizedYearInReviewSingleTopicCard",
				D = e => e.__typename === x;
			var P = t("./src/config.ts"),
				W = t("./src/reddit/components/ImageWithFallback/index.tsx");

			function M() {
				return (M = Object.assign || function(e) {
					for (var a = 1; a < arguments.length; a++) {
						var t = arguments[a];
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
					}
					return e
				}).apply(this, arguments)
			}
			var H = e => c.a.createElement("svg", M({}, e, {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 130 32"
				}), c.a.createElement("path", {
					d: "M121.02 0H8.315A8.315 8.315 0 0 0 0 8.315v15.37A8.315 8.315 0 0 0 8.315 32H121.02a8.316 8.316 0 0 0 8.316-8.315V8.315A8.316 8.316 0 0 0 121.02 0Z"
				}), c.a.createElement("path", {
					d: "M17.342 26.386c5.693 0 10.307-4.615 10.307-10.308S23.035 5.771 17.342 5.771c-5.693 0-10.308 4.614-10.308 10.307 0 5.693 4.615 10.308 10.308 10.308Z",
					fill: "#FF4500"
				}), c.a.createElement("path", {
					d: "M24.211 16.078a1.503 1.503 0 0 0-2.545-1.081c-1.028-.742-2.444-1.22-4.02-1.275l.684-3.222 2.238.476a1.071 1.071 0 0 0 2.142-.052 1.07 1.07 0 0 0-2.032-.474l-2.499-.531a.266.266 0 0 0-.318.207l-.765 3.595c-1.6.044-3.038.523-4.079 1.273a1.503 1.503 0 1 0-1.655 2.455c-.022.15-.035.3-.035.455 0 2.312 2.692 4.187 6.013 4.187 3.32 0 6.012-1.875 6.012-4.188a2.96 2.96 0 0 0-.035-.451c.527-.234.894-.76.894-1.374Zm-10.306 1.074a1.075 1.075 0 1 1 1.074 1.073 1.075 1.075 0 0 1-1.074-1.073Zm5.987 2.837c-.732.732-2.137.789-2.55.789-.412 0-1.817-.057-2.549-.789a.278.278 0 1 1 .394-.393c.462.462 1.45.625 2.156.625.705 0 1.694-.163 2.156-.625a.278.278 0 0 1 .393.393Zm-.189-1.763a1.075 1.075 0 0 1 0-2.148 1.075 1.075 0 0 1 0 2.148Z",
					fill: "#fff"
				}), c.a.createElement("path", {
					d: "M40.77 21.975h-2.676l-2.106-3.698c-.203.01-.357.015-.463.015h-.883v3.683H32.27V11.31h3.85c.708 0 1.343.13 1.902.387.56.259.998.634 1.317 1.125.318.492.477 1.078.477 1.758 0 .632-.14 1.21-.423 1.733a3.432 3.432 0 0 1-1.212 1.284l2.59 4.377Zm-6.128-5.615h1.194c.323 0 .61-.06.861-.18.25-.121.446-.292.586-.514.14-.222.21-.48.21-.774 0-.295-.071-.553-.213-.775a1.39 1.39 0 0 0-.608-.513c-.263-.12-.57-.181-.923-.181h-1.106v2.937ZM47.976 18.82H42.74c.14.453.387.81.741 1.067.355.258.778.387 1.27.387a3.52 3.52 0 0 0 1.049-.166c.357-.111.632-.241.825-.391l.709 1.708c-.3.202-.673.364-1.122.484-.448.12-.923.181-1.425.181-.83 0-1.556-.169-2.178-.506a3.557 3.557 0 0 1-1.44-1.41c-.337-.604-.506-1.293-.506-2.07 0-.796.174-1.499.52-2.11a3.689 3.689 0 0 1 1.401-1.414 3.824 3.824 0 0 1 1.92-.499c.666 0 1.273.153 1.82.46.548.306.98.736 1.295 1.291.316.555.474 1.186.474 1.895 0 .367-.038.731-.115 1.093Zm-1.99-1.432c0-.464-.138-.83-.415-1.1-.277-.27-.643-.405-1.096-.405-.459 0-.843.136-1.154.408-.311.273-.517.638-.619 1.097h3.285ZM54.806 10.833h2.286v11.141h-2.177v-.933h-.036c-.295.333-.64.591-1.038.774a3.12 3.12 0 0 1-1.321.275c-.637 0-1.23-.159-1.78-.477-.55-.319-.991-.78-1.324-1.386-.333-.605-.499-1.317-.499-2.137 0-.84.172-1.562.517-2.168.345-.605.797-1.064 1.357-1.378.56-.313 1.16-.47 1.801-.47.434 0 .833.074 1.198.22.364.148.686.359.965.634h.051v-4.095Zm-.835 9.036c.287-.174.514-.416.683-.727.169-.311.253-.664.253-1.06 0-.39-.08-.74-.242-1.049a1.803 1.803 0 0 0-1.646-.984 1.812 1.812 0 0 0-1.65.973 2.18 2.18 0 0 0-.245 1.046c0 .39.08.742.242 1.056a1.81 1.81 0 0 0 1.646 1.006c.352 0 .672-.087.959-.261ZM63.908 10.833h2.286v11.141h-2.178v-.933h-.036a3.11 3.11 0 0 1-1.038.774 3.118 3.118 0 0 1-1.32.275c-.637 0-1.23-.159-1.78-.477-.55-.319-.991-.78-1.324-1.386-.333-.605-.5-1.317-.5-2.137 0-.84.173-1.562.518-2.168.345-.605.797-1.064 1.357-1.378.559-.313 1.16-.47 1.801-.47.434 0 .833.074 1.197.22.364.148.686.359.966.634h.05v-4.095Zm-.836 9.036c.287-.174.515-.416.684-.727.169-.311.253-.664.253-1.06 0-.39-.08-.74-.242-1.049a1.808 1.808 0 0 0-.673-.724 1.844 1.844 0 0 0-.973-.26 1.807 1.807 0 0 0-1.65.973 2.18 2.18 0 0 0-.246 1.046c0 .39.081.742.243 1.056a1.81 1.81 0 0 0 1.646 1.006c.352 0 .671-.087.958-.261ZM68.12 13.104a1.389 1.389 0 0 1-.688-1.208c0-.26.061-.497.184-.709.123-.212.29-.378.503-.5.212-.12.449-.18.71-.18a1.377 1.377 0 0 1 1.388 1.389 1.377 1.377 0 0 1-.687 1.208 1.355 1.355 0 0 1-.702.189c-.26 0-.497-.063-.709-.189Zm1.844 8.87h-2.286V14.19h2.286v7.784ZM74.767 14.19h1.672v1.946h-1.671v5.839H72.48v-5.839h-1.664V14.19h1.664v-2.229h2.287v2.229ZM89.007 21.975H86.33l-2.105-3.698c-.203.01-.357.015-.463.015h-.883v3.683h-2.373V11.31h3.849c.709 0 1.343.13 1.903.387.559.259.998.634 1.317 1.125.318.492.477 1.078.477 1.758 0 .632-.141 1.21-.423 1.733a3.431 3.431 0 0 1-1.212 1.284l2.59 4.377Zm-6.128-5.615h1.194c.323 0 .61-.06.86-.18.251-.121.447-.292.587-.514.14-.222.21-.48.21-.774 0-.295-.072-.553-.214-.775a1.394 1.394 0 0 0-.608-.513c-.263-.12-.57-.181-.922-.181h-1.107v2.937ZM96.213 18.82h-5.238c.14.453.387.81.741 1.067.355.258.778.387 1.27.387.343 0 .692-.055 1.05-.166.356-.111.631-.241.824-.391l.71 1.708c-.3.202-.674.364-1.122.484a5.47 5.47 0 0 1-1.426.181c-.83 0-1.555-.169-2.177-.506a3.559 3.559 0 0 1-1.44-1.41c-.338-.604-.507-1.293-.507-2.07 0-.796.174-1.499.522-2.11a3.685 3.685 0 0 1 1.4-1.414 3.826 3.826 0 0 1 1.92-.499c.666 0 1.272.153 1.82.46.547.306.979.736 1.295 1.291.316.555.474 1.186.474 1.895 0 .367-.039.731-.116 1.093Zm-1.99-1.432c0-.464-.138-.83-.415-1.1-.278-.27-.643-.405-1.097-.405-.458 0-.843.136-1.154.408-.31.273-.517.638-.618 1.097h3.285ZM99.277 21.533a4.042 4.042 0 0 1-1.523-1.447 3.808 3.808 0 0 1-.565-2.033c0-.733.185-1.403.554-2.01a4.01 4.01 0 0 1 1.498-1.44 4.145 4.145 0 0 1 2.058-.529 4.396 4.396 0 0 1 2.409.717l-.839 1.837a2.143 2.143 0 0 0-.687-.43 2.276 2.276 0 0 0-.825-.149c-.401 0-.752.09-1.053.272a1.85 1.85 0 0 0-.694.727 2.091 2.091 0 0 0-.243.998c0 .372.084.713.254 1.024a1.926 1.926 0 0 0 1.729 1.017c.299 0 .594-.054.886-.16.292-.106.512-.229.662-.369l.817 1.874a4.327 4.327 0 0 1-1.059.452 4.568 4.568 0 0 1-1.277.178 4.285 4.285 0 0 1-2.102-.529ZM109.953 14.183h2.177v7.792h-2.177v-.934h-.051c-.294.333-.64.591-1.038.775a3.12 3.12 0 0 1-1.32.275 3.49 3.49 0 0 1-1.78-.478c-.55-.318-.992-.78-1.324-1.386-.333-.605-.5-1.317-.5-2.137 0-.835.172-1.555.514-2.16.343-.605.795-1.066 1.357-1.382a3.635 3.635 0 0 1 1.812-.474c.473 0 .902.086 1.288.257s.721.419 1.006.742h.036v-.89Zm-.959 5.686c.287-.173.515-.416.684-.727.169-.31.253-.664.253-1.06 0-.39-.081-.74-.242-1.049a1.808 1.808 0 0 0-.673-.723 1.845 1.845 0 0 0-.973-.26 1.86 1.86 0 0 0-.973.256c-.288.171-.513.41-.677.716a2.18 2.18 0 0 0-.246 1.046c0 .39.081.743.242 1.056.162.314.388.56.677.738.289.179.612.268.969.268.352 0 .672-.087.959-.26ZM121.355 20.206a3.54 3.54 0 0 1-1.317 1.396c-.55.326-1.15.489-1.801.489a3.027 3.027 0 0 1-2.265-.948h-.058v3.892l-2.286-.022V14.19h2.17v.919h.044a2.909 2.909 0 0 1 1.012-.767 3.116 3.116 0 0 1 1.31-.268 3.563 3.563 0 0 1 3.172 1.874c.341.608.511 1.322.511 2.142 0 .805-.164 1.51-.492 2.116Zm-2.634-.348c.29-.176.514-.419.673-.73a2.28 2.28 0 0 0 .239-1.053c0-.39-.081-.74-.242-1.05a1.79 1.79 0 0 0-.673-.719 1.877 1.877 0 0 0-.981-.257 1.78 1.78 0 0 0-1.638.977 2.24 2.24 0 0 0-.243 1.056c0 .396.081.748.243 1.056.161.31.384.55.669.724.284.174.608.263.969.268a1.9 1.9 0 0 0 .984-.271Z",
					fill: "#FF4500"
				})),
				U = t("./src/reddit/pages/Recap/Components/ErrorScreen/index.m.less"),
				Y = t.n(U);
			var G = e => {
					let {
						onRetry: a
					} = e;
					return c.a.createElement("div", {
						className: Y.a.wrapper
					}, c.a.createElement("div", {
						className: Object(p.a)(Y.a.image, Y.a.isCircle)
					}, c.a.createElement(W.a, {
						src: `${P.a.assetPath}/img/recap/key_art_recap_2022.png`,
						className: Object(p.a)(Y.a.fallbackStaticImage)
					})), c.a.createElement("div", {
						className: Y.a.info
					}, c.a.createElement(H, {
						className: Y.a.logo
					}), c.a.createElement("p", {
						className: Y.a.title
					}, o.fbt._("WTF?", null, {
						hk: "exzlX"
					})), c.a.createElement("p", {
						className: Y.a.subtitle
					}, o.fbt._("Something went wrong. Try that again.", null, {
						hk: "fyv6n"
					})), c.a.createElement(E.t, {
						className: Object(p.a)(Y.a.retryButton),
						onClick: a
					}, o.fbt._("Retry", null, {
						hk: "2NAMZ4"
					}))))
				},
				z = t("./src/reddit/pages/Recap/Components/LoadingIcon/index.m.less"),
				Z = t.n(z);
			var V = () => c.a.createElement("div", {
					className: Z.a.circle
				}, c.a.createElement("img", {
					className: Z.a.image,
					src: `${P.a.assetPath}/img/recap/InfiniteLoad_4.gif`
				})),
				q = t("./src/reddit/pages/Recap/Components/Pager/index.m.less"),
				Q = t.n(q);
			var K = e => {
					let {
						cards: a,
						cardIndex: t,
						isBlack: r,
						onClick: i
					} = e;
					const s = Math.ceil((t + 1) / 6),
						n = t - 6 * (s - 1),
						l = a.length > 6 && s > 1,
						o = 6 * (s - 1),
						d = o + 6,
						m = 6 * s < a.length;
					return c.a.createElement("div", {
						className: Q.a.pager
					}, l && c.a.createElement("button", {
						className: Object(p.a)(Q.a.nextDot, {
							[Q.a.black]: !!r
						}),
						onClick: () => {
							i(o - 1)
						},
						tabIndex: 0,
						title: `Card #${o}`
					}), a.slice(o, d).map((e, a) => c.a.createElement("button", {
						key: a,
						className: Object(p.a)(Q.a.progressDot, {
							[Q.a.active]: a === n,
							[Q.a.black]: !!r
						}),
						onClick: () => {
							i(a + o)
						},
						tabIndex: 0,
						title: `Card #${a+o+1}`
					})), m && c.a.createElement("button", {
						className: Object(p.a)(Q.a.nextDot, {
							[Q.a.black]: !!r
						}),
						onClick: () => {
							i(d)
						},
						tabIndex: 0,
						title: `Card #${d+1}`
					}))
				},
				X = t("./src/higherOrderComponents/asModal/index.tsx"),
				J = t("./src/lib/notifications/index.ts"),
				$ = t("./src/lib/notifications/constants.ts"),
				ee = t("./src/reddit/pages/Recap/Components/ShareButton/index.m.less"),
				ae = t.n(ee);
			var te = e => {
					let {
						isSelected: a,
						isForAbilityCard: t,
						isVisible: r,
						isRedTemplate: i,
						isInitialCard: s
					} = e;
					const n = Object(b.d)(),
						l = Object(j.a)();
					return c.a.createElement("div", {
						className: Object(p.a)(ae.a.shareContainer, {
							[ae.a.selected]: a,
							[ae.a.forAbility]: t,
							[ae.a.visible]: r,
							[ae.a.initialCard]: s
						})
					}, c.a.createElement(E.t, {
						className: Object(p.a)(ae.a.shareButton, {
							[ae.a.orange]: !i
						}),
						Icon: Object(k.b)("share_ios"),
						iconClassName: Object(p.a)(ae.a.shareIcon, {
							[ae.a.white]: !i
						}),
						onClick: () => {
							n(Object(g.h)()), l(Object(O.n)())
						},
						tabIndex: a ? 0 : -1
					}, o.fbt._("Share", null, {
						hk: "1q5t1q"
					})))
				},
				re = t("./src/reddit/pages/Recap/Components/Info/index.m.less"),
				ie = t.n(re);
			const {
				fbt: se
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var ce = e => {
					let {
						title: a,
						subtitle: t,
						cardTemplateColor: i,
						subText: n,
						shouldHideShareButton: l,
						isSelected: o,
						isForSharing: d,
						isInitialCard: b,
						isEndCard: u
					} = e;
					const g = Object(s.useRef)(null),
						f = i === r.RED,
						h = i === r.BLACK,
						v = i === r.WHITE,
						E = m()(() => {
							var e;
							g.current && window.innerWidth <= 960 ? g.current.clientHeight >= 200 && (g.current.style.lineHeight = "40px", g.current.style.fontSize = "28px") : null === (e = g.current) || void 0 === e || e.removeAttribute("style")
						}, 500);
					return Object(s.useEffect)(() => (o && !d ? (E(), window.addEventListener("resize", E)) : window.removeEventListener("resize", E), () => window.removeEventListener("resize", E)), [E, o, d]), c.a.createElement("div", {
						className: Object(p.a)(ie.a.info, {
							[ie.a.black]: !f && !h,
							[ie.a.selected]: o,
							[ie.a.initialCard]: b,
							[ie.a.isResponsive]: !d
						})
					}, !d && c.a.createElement(H, {
						className: Object(p.a)(ie.a.logo, {
							[ie.a.white]: v,
							[ie.a.selected]: o
						})
					}), c.a.createElement("p", {
						ref: g,
						className: Object(p.a)(ie.a.title, {
							[ie.a.selected]: o
						})
					}, $e(a, Object(p.a)(ie.a.value, {
						[ie.a.orange]: !f
					}), ie.a.numeric)), c.a.createElement("p", {
						className: Object(p.a)(ie.a.subtitle, {
							[ie.a.selected]: o
						})
					}, u ? n : t.replace(/\//g, "/⁠")), b && c.a.createElement("p", {
						className: Object(p.a)(ie.a.cutoffText, {
							[ie.a.selected]: o
						})
					}, n), !l && !d && c.a.createElement(te, {
						isSelected: o,
						isRedTemplate: f,
						isInitialCard: b
					}))
				},
				ne = t("./src/reddit/pages/Recap/Components/Card/index.m.less"),
				le = t.n(ne);
			var oe = e => {
					let {
						cardTemplateColor: a,
						title: t,
						subtitle: r,
						children: i,
						shouldHideShareButton: s,
						isSelected: n,
						isForSharing: l,
						shouldHideInfo: o,
						isForAbilityCard: d,
						isInitialCard: m,
						isEndCard: b
					} = e;
					const [u, g] = c.a.Children.toArray(i);
					return c.a.createElement("div", {
						className: Object(p.a)(le.a.wrapper, {
							[le.a.forAbility]: d,
							[le.a.forSharing]: l,
							[le.a.isResponsive]: !l
						})
					}, c.a.createElement("div", {
						className: le.a.content
					}, u), !o && c.a.createElement(ce, {
						title: t,
						subtitle: r,
						cardTemplateColor: a,
						subText: g,
						shouldHideShareButton: s,
						isSelected: n,
						isForSharing: l,
						isInitialCard: m,
						isEndCard: b
					}))
				},
				de = t("./src/reddit/pages/Recap/CardTemplates/index.m.less"),
				me = t.n(de);
			const be = "https://i.redd.it/snoovatar/avatars/184bcb77-f84f-4c04-94c5-bec0e209b4ba.png";
			var ue = e => {
					let {
						card: {
							title: a,
							subtitle: t,
							cardTemplateColor: r,
							userPreviousAvatarUrl: i,
							userCurrentAvatarUrl: s
						},
						isSelected: n,
						isForSharing: l
					} = e;
					return c.a.createElement(oe, {
						title: a,
						subtitle: t,
						cardTemplateColor: r,
						isSelected: n,
						isForSharing: l
					}, c.a.createElement("div", {
						className: me.a.avatarsWrapper
					}, (null == i ? void 0 : i.length) && s.length ? c.a.createElement("div", {
						className: Object(p.a)(me.a.avatars, {
							[me.a.selected]: n,
							[me.a.isResponsive]: !l
						})
					}, c.a.createElement("div", {
						className: me.a.lightning
					}), c.a.createElement("div", {
						className: me.a.avatar,
						style: {
							backgroundImage: `url(${P.a.assetPath}/img/recap/left_side.png)`
						}
					}, c.a.createElement(W.a, {
						src: i,
						className: Object(p.a)(me.a.fallbackStaticImage, {
							[me.a.isSelected]: n
						}),
						errorSrc: be
					})), c.a.createElement("div", {
						className: Object(p.a)(me.a.avatar, me.a.left),
						style: {
							transitionDelay: ".65s",
							backgroundImage: `url(${P.a.assetPath}/img/recap/right_side.png)`
						}
					}, c.a.createElement(W.a, {
						src: s,
						className: Object(p.a)(me.a.fallbackStaticImage, {
							[me.a.isSelected]: n
						}),
						style: {
							transitionDelay: ".85s"
						},
						errorSrc: be
					}))) : c.a.createElement("div", {
						className: Object(p.a)(me.a.collectibleAvatar, {
							[me.a.selected]: n,
							[me.a.isResponsive]: !l
						})
					}, c.a.createElement(W.a, {
						src: s,
						className: Object(p.a)(me.a.fallbackStaticImage, {
							[me.a.isSelected]: n
						}),
						errorSrc: be
					}))))
				},
				pe = t("./src/reddit/controls/InternalLink/index.tsx"),
				ge = t("./src/reddit/actions/subscription/index.ts"),
				fe = t("./src/reddit/pages/Recap/Components/Subreddit/index.m.less"),
				he = t.n(fe);
			var ve = e => {
				let {
					deeplink: a,
					subredditName: t,
					className: r,
					isLong: i,
					isRed: n,
					size: l,
					withAddButton: o,
					subredditId: d,
					subscribed: m,
					tabIndex: u,
					shouldAlternativeFocus: g
				} = e;
				const f = Object(b.d)(),
					h = Object(j.a)(),
					[v, _] = Object(s.useState)(!!m);
				return c.a.createElement("div", {
					className: he.a.subredditWrapper
				}, c.a.createElement("div", {
					onClick: e => e.stopPropagation(),
					className: Object(p.a)(he.a.container, r, {
						[he.a.long]: i,
						[he.a.big]: "big" === l,
						[he.a.small]: "small" === l,
						[he.a.tiny]: "tiny" === l,
						[he.a.micro]: "micro" === l,
						[he.a.red]: n
					})
				}, o && c.a.createElement(E.t, {
					Icon: Object(k.b)(v ? "joined_fill" : "join"),
					size: E.d.S,
					priority: E.c.PlainLink,
					className: he.a.addButton,
					iconClassName: Object(p.a)(he.a.icon, {
						[he.a.white]: n
					}),
					onClick: e => (e.stopPropagation(), ((e, a) => {
						f(async t => {
							const r = await t(Object(ge.d)([{
								name: e,
								type: "subreddit"
							}], !a));
							h(Object(O.o)(!a, e, d)), r && _(!v)
						})
					})(t, v)),
					tabIndex: u
				}), c.a.createElement(pe.default, {
					to: a,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => h(Object(O.d)(d)),
					className: Object(p.a)(he.a.subreddit, {
						[he.a.red]: n,
						[he.a.big]: "big" === l,
						[he.a.small]: "small" === l,
						[he.a.tiny]: "tiny" === l,
						[he.a.micro]: "micro" === l,
						[he.a.withButton]: o,
						[he.a.alternativeFocusColor]: g
					}),
					tabIndex: u
				}, c.a.createElement("div", {
					className: he.a.text
				}, c.a.createElement("span", {
					className: he.a.subredditPrefix
				}, "r/"), t))))
			};
			const Ee = Object(k.b)("external_link"),
				_e = e => {
					let {
						deeplink: a,
						imageUrl: t,
						text: r,
						isSelected: i,
						isForSharing: s,
						isRedTemplate: n,
						subredditName: l,
						subredditLink: o,
						subredditId: d,
						shouldShowSubreddit: m,
						onClick: b
					} = e;
					return c.a.createElement(pe.default, {
						target: "_blank",
						rel: "noopener noreferrer",
						to: a,
						className: Object(p.a)(t ? me.a.image : me.a.asText, m ? me.a.comment : me.a.commentSubreddit, {
							[me.a.comment]: m,
							[me.a.selected]: i,
							[me.a.isResponsive]: !s,
							[me.a.orange]: !n
						}),
						tabIndex: i ? 0 : -1,
						onClick: b
					}, t ? c.a.createElement(W.a, {
						src: t,
						className: Object(p.a)(me.a.subredditImage, {
							[me.a.isSelected]: i
						}),
						errorSrc: `${P.a.assetPath}/img/planet.png`
					}) : c.a.createElement("div", {
						className: me.a.text
					}, c.a.createElement("p", null, r)), m && l && o && d && c.a.createElement("div", {
						className: Object(p.a)(me.a.subredditFloating, me.a.isTag)
					}, c.a.createElement(ve, {
						deeplink: o,
						subredditName: l,
						size: "tiny",
						isRed: !0,
						subredditId: d,
						tabIndex: i ? 0 : -1
					})), !s && c.a.createElement(Ee, {
						className: me.a.externalLinkButton
					}))
				};
			var Oe = e => {
					let {
						card: {
							title: a,
							subtitle: t,
							postImageUrl: i,
							cardTemplateColor: s,
							postDeeplink: n,
							commentText: l,
							commentDeeplink: o,
							postTitle: d,
							subredditId: m,
							commentId: b,
							postId: u,
							commentImageUrl: g
						},
						isSelected: f,
						isForSharing: h
					} = e;
					const v = Object(j.a)(),
						E = s === r.RED,
						{
							subredditName: _,
							subredditLink: k
						} = aa(n);
					return c.a.createElement(oe, {
						title: a,
						subtitle: t,
						cardTemplateColor: s,
						isSelected: f,
						isForSharing: h
					}, c.a.createElement("div", {
						className: Object(p.a)(me.a.commentWrapper, {
							[me.a.isResponsive]: !h
						})
					}, i ? c.a.createElement(_e, {
						isSelected: f,
						onClick: () => v(Object(O.c)(u, m)),
						deeplink: n,
						imageUrl: i,
						isForSharing: h,
						isRedTemplate: E
					}) : c.a.createElement(_e, {
						isSelected: f,
						onClick: () => v(Object(O.c)(u, m)),
						deeplink: n,
						isForSharing: h,
						text: d
					}), g ? c.a.createElement(_e, {
						isSelected: f,
						onClick: () => v(Object(O.a)(b, u)),
						deeplink: o,
						imageUrl: g,
						isForSharing: h,
						isRedTemplate: E,
						shouldShowSubreddit: !0,
						subredditLink: k,
						subredditName: _,
						subredditId: m
					}) : c.a.createElement(_e, {
						isSelected: f,
						onClick: () => v(Object(O.a)(b, u)),
						deeplink: o,
						isForSharing: h,
						text: l,
						shouldShowSubreddit: !0,
						subredditLink: k,
						subredditName: _,
						subredditId: m
					})))
				},
				je = t("./src/reddit/actions/modal.ts"),
				ke = t("./src/reddit/actions/notifications/index.ts"),
				Ce = t("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				Ne = t("./src/reddit/actions/toaster.ts"),
				Se = t("./src/reddit/components/Settings/modalIds.ts"),
				ye = t("./src/reddit/models/Toast/index.ts");
			const {
				fbt: Ie
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var xe;
			! function(e) {
				e[e.VERIFY_EMAIL = 0] = "VERIFY_EMAIL", e[e.TURN_ON_DAYLY_DIGEST = 1] = "TURN_ON_DAYLY_DIGEST", e[e.TURN_ON_DN = 2] = "TURN_ON_DN", e[e.DONE = 3] = "DONE"
			}(xe || (xe = {}));
			var we = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						cardTemplateColor: i,
						isEmailVerified: n,
						isDigestEnabled: l,
						subredditList: o
					},
					card: d,
					isSelected: m,
					isForSharing: g
				} = e;
				const f = Object(b.d)(),
					h = Object(j.a)(),
					v = Object(b.e)(e => {
						var a;
						return null === (a = e.user.account) || void 0 === a ? void 0 : a.email
					}),
					E = Object(b.e)(e => e.user.accountSettings.changeEmail.api.pending),
					[_, k] = Object(s.useState)(xe.VERIFY_EMAIL),
					C = Object(s.useRef)(v),
					N = () => {
						ta() ? k(xe.DONE) : k(xe.TURN_ON_DN)
					},
					S = () => {
						l ? N() : k(xe.TURN_ON_DAYLY_DIGEST)
					};
				Object(s.useEffect)(() => {
					n ? S() : k(xe.VERIFY_EMAIL)
				}, [d]), Object(s.useEffect)(() => {
					if (v !== C.current && _ === xe.VERIFY_EMAIL) {
						const e = Object(Ne.e)(Ie._("Email successfully updated!", null, {
							hk: "3iPlUp"
						}), ye.b.SuccessCommunityGreen);
						f(Object(Ne.f)(e)), S()
					}
				}, [v, _]), Object(s.useEffect)(() => {
					E && f(Object(je.g)(Se.a))
				}, [E, f]);
				const y = async () => {
					await f(Object(ke.requestBrowserNotificationPermissionPromptByUser)(Se.f)), ta() && k(xe.DONE), h(Object(O.h)())
				}, I = () => {
					f(Object(je.h)(Se.a)), h(Object(O.p)())
				}, x = () => {
					f(async (e, a) => {
						var t;
						await e(Object(Ce.d)({
							isEnabled: !0,
							messageType: "EMAIL_DIGEST"
						})), !!(null === (t = a().user.notificationPrefs.pushSettingsLayout.rows.byId.EMAIL_DIGEST) || void 0 === t ? void 0 : t.isEnabled) && N()
					}), h(Object(O.g)())
				};
				return c.a.createElement(oe, {
					title: a,
					subtitle: t,
					cardTemplateColor: i,
					isSelected: m,
					isForSharing: g,
					isEndCard: !0
				}, c.a.createElement("div", {
					className: Object(p.a)(me.a.subredditList, {
						[me.a.isResponsive]: !g
					})
				}, o.map((e, a) => c.a.createElement("div", {
					key: e.subredditId,
					style: {
						transitionDelay: `${.25*a+.4}s`
					},
					className: Object(p.a)(me.a.subreddit, {
						[me.a.selected]: m
					})
				}, c.a.createElement(ve, {
					key: e.subredditId,
					withAddButton: !0,
					deeplink: e.deeplink,
					subredditName: e.subredditName,
					isRed: i !== r.RED,
					size: "big",
					subredditId: e.subredditId,
					subscribed: e.isSubscribed,
					tabIndex: m ? 0 : -1
				})))), c.a.createElement("span", {
					className: me.a.endText
				}, (() => {
					const e = m ? 0 : -1;
					switch (_) {
						case xe.TURN_ON_DN:
							return $e(t, me.a.asLink, "", y, e);
						case xe.VERIFY_EMAIL:
						case xe.TURN_ON_DAYLY_DIGEST:
							return $e(t, me.a.asLink, "", _ === xe.VERIFY_EMAIL ? I : x, e);
						case xe.DONE:
							return $e(t, me.a.asLink, "", () => {
								f(Object(u.b)("/r/recap")), h(Object(O.b)())
							}, e)
					}
				})()))
			};
			var Re = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						templateImageUrl: r,
						cardTemplateColor: i,
						backgroundImageUrl: s
					},
					isSelected: n,
					isForSharing: l
				} = e;
				return c.a.createElement(oe, {
					title: a,
					subtitle: t,
					cardTemplateColor: i,
					isSelected: n,
					isForSharing: l
				}, c.a.createElement("div", {
					className: Object(p.a)(me.a.image, me.a.isCircle, me.a.noBg, {
						[me.a.isSelected]: n,
						[me.a.isResponsive]: !l
					}),
					style: {
						backgroundImage: `url(${s})`
					}
				}, c.a.createElement(W.a, {
					src: r,
					className: Object(p.a)(me.a.fallbackStaticImage, me.a.illustration, {
						[me.a.isSelected]: n
					})
				})))
			};
			var Te = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						templateImageUrl: r,
						cardTemplateColor: i,
						backgroundImageUrl: n,
						dataCutoffText: l
					},
					isSelected: o
				} = e;
				const [d, m] = Object(s.useState)(!1), [u, g] = Object(s.useState)(!0), f = Object(b.e)(e => e.recap.currentCardIndex);
				return Object(s.useEffect)(() => {
					setTimeout(() => {
						m(o)
					})
				}, [o]), Object(s.useEffect)(() => {
					0 !== f && g(!1)
				}, [f]), c.a.createElement(oe, {
					title: a,
					subtitle: t,
					cardTemplateColor: i,
					shouldHideShareButton: !0,
					isSelected: d,
					isInitialCard: u
				}, c.a.createElement("div", {
					className: Object(p.a)(me.a.image, me.a.isCircle, me.a.noBg, me.a.isResponsive, {
						[me.a.isSelected]: d,
						[me.a.initialCard]: u
					}),
					style: {
						backgroundImage: `url(${n})`
					}
				}, c.a.createElement(W.a, {
					src: r,
					className: Object(p.a)(me.a.fallbackStaticImage, me.a.illustration, {
						[me.a.isSelected]: d,
						[me.a.initialCard]: u
					})
				})), c.a.createElement("span", {
					className: me.a.endText
				}, l))
			};
			var Be = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						postImageUrl: i,
						cardTemplateColor: s,
						postDeeplink: n,
						subredditName: l,
						postTitle: o,
						subredditId: d,
						postId: m
					},
					isSelected: b,
					isForSharing: u
				} = e;
				const g = Object(j.a)(),
					f = s === r.RED,
					{
						subredditLink: h
					} = aa(n),
					v = Object(k.b)("external_link");
				return c.a.createElement(oe, {
					title: a,
					subtitle: t,
					cardTemplateColor: s,
					isSelected: b,
					isForSharing: u
				}, c.a.createElement(pe.default, {
					className: Object(p.a)(me.a.postWrapper, {
						[me.a.selected]: b,
						[me.a.isResponsive]: !u
					}),
					to: n,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => g(Object(O.c)(m, d)),
					tabIndex: b ? 0 : -1
				}, i ? c.a.createElement("div", {
					className: Object(p.a)(me.a.image, me.a.post, {
						[me.a.orange]: !f,
						[me.a.isSelected]: b,
						[me.a.isResponsive]: !u
					})
				}, c.a.createElement(W.a, {
					src: i,
					className: me.a.fallbackStaticImage
				}), c.a.createElement("div", {
					className: Object(p.a)(me.a.subredditFloating, me.a.isTag)
				}, c.a.createElement(ve, {
					deeplink: h,
					subredditName: l,
					size: "tiny",
					isRed: !0,
					subredditId: d,
					tabIndex: b ? 0 : -1
				})), !u && c.a.createElement(v, {
					className: me.a.externalLinkButton
				})) : c.a.createElement("div", {
					className: me.a.post
				}, c.a.createElement("div", {
					className: me.a.text
				}, c.a.createElement("p", null, o)), c.a.createElement("div", {
					className: Object(p.a)(me.a.subredditFloating, me.a.isTag)
				}, c.a.createElement(ve, {
					deeplink: h,
					subredditName: l,
					size: "tiny",
					isRed: !0,
					subredditId: d,
					tabIndex: b ? 0 : -1
				})), !u && c.a.createElement(v, {
					className: me.a.externalLinkButton
				}))))
			};
			var Le = e => {
					let {
						card: {
							title: a,
							subtitle: t,
							cardTemplateColor: r,
							topHexList: i
						},
						isSelected: s,
						isForSharing: l
					} = e;
					const o = Object(j.a)(),
						d = `${P.a.redditUrl}/r/place`,
						m = `${d}?fullscreen=true`,
						b = Object(k.b)("external_link"),
						u = i[0].toLowerCase() !== n.a.orangered;
					return c.a.createElement(oe, {
						title: a,
						subtitle: t,
						cardTemplateColor: r,
						isSelected: s,
						isForSharing: l
					}, c.a.createElement(pe.default, {
						className: Object(p.a)(me.a.rplaceWrapper, {
							[me.a.isResponsive]: !l
						}),
						to: m,
						target: "_blank",
						rel: "noopener noreferrer",
						tabIndex: s ? 0 : -1,
						onClick: () => {
							o(Object(O.m)())
						}
					}, c.a.createElement("div", {
						className: Object(p.a)(me.a.rplaceContainer, {
							[me.a.selected]: s,
							[me.a.forSharing]: l
						})
					}, 1 === i.length ? Array.from(Array(20).keys()).map((e, a) => c.a.createElement("div", {
						key: a,
						style: {
							backgroundColor: i[0]
						}
					})) : c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
						style: {
							backgroundColor: i[0]
						}
					}), c.a.createElement("div", {
						style: {
							backgroundColor: i[0]
						}
					}), c.a.createElement("div", {
						style: {
							backgroundColor: i[0]
						}
					}), c.a.createElement("div", {
						style: {
							backgroundColor: i[1]
						}
					}), c.a.createElement("div", {
						style: {
							backgroundColor: 3 === i.length ? i[2] : i[0]
						}
					}), c.a.createElement("div", {
						style: {
							backgroundColor: i[1]
						}
					}), c.a.createElement("div", {
						style: {
							backgroundColor: 3 === i.length ? i[2] : i[1]
						}
					}), c.a.createElement("div", {
						style: {
							backgroundColor: i[0]
						}
					}), c.a.createElement("div", {
						style: {
							backgroundColor: i[0]
						}
					}), c.a.createElement("div", {
						style: {
							backgroundColor: 3 === i.length ? i[1] : i[0]
						}
					}), c.a.createElement("div", {
						style: {
							backgroundColor: i[0]
						}
					}), c.a.createElement("div", {
						style: {
							backgroundColor: 3 === i.length ? i[1] : i[0]
						}
					}), c.a.createElement("div", {
						style: {
							backgroundColor: i[0]
						}
					}), c.a.createElement("div", {
						style: {
							backgroundColor: i[1]
						}
					}), c.a.createElement("div", {
						style: {
							backgroundColor: i[1]
						}
					}), c.a.createElement("div", {
						style: {
							backgroundColor: 3 === i.length ? i[0] : i[1]
						}
					}), c.a.createElement("div", {
						style: {
							backgroundColor: i[0]
						}
					}), c.a.createElement("div", {
						style: {
							backgroundColor: i[1]
						}
					}), c.a.createElement("div", {
						style: {
							backgroundColor: 3 === i.length ? i[2] : i[1]
						}
					}), c.a.createElement("div", {
						style: {
							backgroundColor: 3 === i.length ? i[2] : i[1]
						}
					}))), c.a.createElement(c.a.Fragment, null, !l && c.a.createElement("img", {
						className: Object(p.a)(me.a.canvas, {
							[me.a.selected]: s
						}),
						src: `${P.a.assetPath}/img/recap/rplace_canvas.png`,
						alt: ""
					}), c.a.createElement("div", {
						className: Object(p.a)(me.a.subredditFloating, me.a.isTag, me.a.subreddit, {
							[me.a.selected]: s,
							[me.a.forSharing]: l
						})
					}, c.a.createElement(ve, {
						deeplink: d,
						subredditName: "place",
						size: "tiny",
						isRed: u,
						subredditId: "t5_2sxhs",
						tabIndex: s ? 0 : -1
					})), !l && c.a.createElement("span", {
						className: Object(p.a)(me.a.externalLinkWrapper, {
							[me.a.selected]: s
						})
					}, c.a.createElement(b, {
						className: me.a.icon
					})))))
				},
				Fe = t("./src/reddit/actions/snoovatarModal.ts"),
				Ae = t("./src/reddit/controls/ToggleSwitch/index.tsx"),
				De = t("./src/reddit/icons/svgs/EditPencil/index.tsx");
			const {
				fbt: Pe
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var We = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						cardTemplateColor: l,
						userAvatar: o,
						userName: d,
						userKarma: m,
						level: u,
						subredditListOptional: f,
						isPremium: h,
						topicImageUrl: v,
						translatedLevel: E
					},
					isSelected: _,
					isForSharing: k
				} = e;
				const C = Object(b.d)(),
					N = Object(j.a)(),
					S = Object(s.useRef)(null),
					y = Object(s.useRef)(null),
					[I, x] = Object(s.useState)(""),
					w = Object(b.e)(e => e.recap.shouldHideAbilityCardUsername),
					R = Object(b.e)(e => e.recap.shouldHideAbilityCardAvatar),
					T = Object(b.e)(e => e.recap.shareCardWasOpened),
					B = l === r.WHITE || l === r.YELLOW,
					L = () => {
						k || (C(Object(g.b)()), !T && N(Object(O.i)()))
					};
				return Object(s.useEffect)(() => {
					!_ && T && L()
				}, [_]), c.a.createElement(oe, {
					title: a,
					subtitle: t,
					cardTemplateColor: l,
					isForSharing: k,
					shouldHideInfo: !0,
					isForAbilityCard: !k
				}, c.a.createElement("div", {
					className: Object(p.a)(me.a.visibilityWrapper, {
						[me.a.selected]: _
					}),
					tabIndex: -1
				}, c.a.createElement("div", {
					className: Object(p.a)(me.a.abilityCardWrapper, {
						[me.a.selected]: _,
						[me.a.forSharing]: k
					})
				}, c.a.createElement("style", {
					ref: y
				}, `\n        ${I}\n        `), c.a.createElement("div", {
					id: T && k ? "abilityCardShareId" : "",
					className: Object(p.a)(me.a.flippingWrapper, {
						[me.a.flipped]: T,
						[me.a.unflipped]: !T,
						[me.a.forSharing]: k
					}),
					onClick: L
				}, c.a.createElement("div", {
					className: Object(p.a)(me.a.frontCard, {
						[me.a.selected]: _
					}),
					id: !T && k ? "abilityCardShareId" : ""
				}, c.a.createElement("img", {
					className: me.a.cardBackground,
					src: `${P.a.assetPath}/img/recap/ability_card_front_side.png`,
					alt: ""
				}), c.a.createElement("img", {
					src: `${P.a.assetPath}/img/recap/3d_icon_question_mark 2.png`,
					alt: "",
					className: Object(p.a)(me.a.cardIcon, {
						[me.a.selected]: _
					})
				}), c.a.createElement("div", {
					className: Object(p.a)(me.a.frontText, {
						[me.a.selected]: _
					})
				}, c.a.createElement("div", {
					className: me.a.frontMainText
				}, Pe._("What’s your secret Reddit ability?", null, {
					hk: "35uXbT"
				})), c.a.createElement("div", {
					className: me.a.frontSecondaryText
				}, Pe._("Click to reveal", null, {
					hk: "32dQl2"
				})))), c.a.createElement("div", {
					className: Object(p.a)(me.a.backCard, {
						[me.a.selected]: _ && T
					})
				}, c.a.createElement("svg", {
					style: {
						visibility: "hidden",
						position: "absolute"
					},
					width: "0",
					height: "0",
					xmlns: "http://www.w3.org/2000/svg",
					version: "1.1"
				}, c.a.createElement("defs", null, c.a.createElement("filter", {
					id: "round"
				}, c.a.createElement("feGaussianBlur", {
					in: "SourceGraphic",
					stdDeviation: "2",
					result: "blur"
				}), c.a.createElement("feColorMatrix", {
					in: "blur",
					mode: "matrix",
					values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",
					result: "goo"
				}), c.a.createElement("feComposite", {
					in: "SourceGraphic",
					in2: "goo",
					operator: "atop"
				})))), c.a.createElement("div", {
					onMouseMove: e => {
						const a = S.current,
							t = y.current;
						if (!a || !t) return;
						const r = e.nativeEvent,
							s = [r.offsetX, r.offsetY];
						e.preventDefault();
						const c = s[0],
							n = s[1],
							l = a.clientHeight,
							o = a.clientWidth,
							d = 50 + (Math.abs(Math.floor(100 / o * c) - 100) - 50) / 1.5,
							m = 50 + (Math.abs(Math.floor(100 / l * n) - 100) - 50) / 1.5,
							b = `background-position: ${d}% ${m}%;`,
							p = `transform: rotateX(${(m-50)/2*-1}deg) rotateY(${(d-50)/1.5*.5}deg)`;
						u !== i.Common && x(`.${me.a.card}:hover::before { ${b} }`), a.setAttribute("style", p)
					},
					onMouseLeave: e => {
						const a = S.current;
						a && (a.removeAttribute("style"), x(""))
					},
					ref: S,
					className: Object(p.a)(me.a.card, {
						[me.a.common]: u === i.Common,
						[me.a.rare]: u === i.Rare,
						[me.a.epic]: u === i.Epic,
						[me.a.legendary]: u === i.Legendary,
						[me.a.flipped]: T,
						[me.a.shiny]: u !== i.Common
					})
				}, !k && c.a.createElement("button", {
					className: me.a.editAvatarWrapper,
					onClick: e => {
						e.stopPropagation(), C(Object(Fe.b)({
							clickSource: "recap"
						})), N(Object(O.f)())
					},
					tabIndex: _ && T ? 0 : -1
				}, c.a.createElement(De.a, {
					className: me.a.editAvatar
				})), c.a.createElement("img", {
					className: me.a.cardBackground,
					src: `${P.a.assetPath}/img/recap/${u.toLowerCase()}_ability_card_v2.png`,
					alt: ""
				}), c.a.createElement("span", {
					className: me.a.userName
				}, w ? Pe._("Redditor", null, {
					hk: "UOiBC"
				}) : d), c.a.createElement(W.a, {
					src: R ? "https://i.redd.it/snoovatar/avatars/184bcb77-f84f-4c04-94c5-bec0e209b4ba.png" : o,
					className: me.a.abilityAvatar,
					errorSrc: "https://i.redd.it/snoovatar/avatars/184bcb77-f84f-4c04-94c5-bec0e209b4ba.png"
				}), c.a.createElement("div", {
					className: me.a.karma
				}, c.a.createElement("span", {
					className: me.a.karmaValue
				}, m), Pe._("{=karma}", [Pe._param("=karma", c.a.createElement("span", {
					className: me.a.karmaTitle
				}, Pe._("karma", null, {
					hk: "rtxTV"
				})))], {
					hk: "1vxzil"
				}), c.a.createElement("div", {
					className: Object(p.a)(me.a.cardRarity, {
						[me.a.rare]: u === i.Rare,
						[me.a.epic]: u === i.Epic,
						[me.a.legendary]: u === i.Legendary
					})
				}, E)), c.a.createElement("div", {
					className: me.a.abilityWrapper
				}, c.a.createElement("div", {
					className: me.a.ability
				}, c.a.createElement("span", null, a)), c.a.createElement("p", {
					className: me.a.stats
				}, t), c.a.createElement("div", {
					className: me.a.subreddits
				}, (null == f ? void 0 : f.length) ? f.map(e => e ? c.a.createElement(ve, {
					key: e.subredditId,
					className: me.a.subreddit,
					deeplink: null == e ? void 0 : e.deeplink,
					subredditName: null == e ? void 0 : e.subredditName,
					isRed: !0,
					size: "micro",
					subredditId: e.subredditId,
					tabIndex: -1
				}) : null) : null)), c.a.createElement("img", {
					className: me.a.topicBg,
					src: `${P.a.assetPath}/img/recap/${u.toLowerCase()}_card_topic_bg.png`
				}), c.a.createElement("img", {
					className: me.a.topic,
					src: v
				}), h && c.a.createElement("img", {
					className: me.a.premiumIcon,
					src: `${P.a.assetPath}/img/recap/premium.png`
				})))), !k && c.a.createElement("div", {
					className: me.a.controls
				}, c.a.createElement("div", {
					className: Object(p.a)(me.a.toggles, {
						[me.a.visible]: T
					})
				}, c.a.createElement("div", {
					className: Object(p.a)(me.a.hideName, {
						[me.a.selected]: _
					})
				}, Pe._("{=Hide username}", [Pe._param("=Hide username", c.a.createElement("div", {
					className: Object(p.a)(me.a.text, {
						[me.a.black]: B
					})
				}, Pe._("Hide username", null, {
					hk: "2Q5Y03"
				})))], {
					hk: "3tRMJD"
				}), c.a.createElement(Ae.a, {
					on: w,
					onToggle: () => {
						C(Object(g.g)()), !w && N(Object(O.k)())
					},
					className: me.a.toggleButton,
					activeColorOverride: n.a.orangered,
					tabIndex: _ && T ? 0 : -1
				})), c.a.createElement("div", {
					className: Object(p.a)(me.a.hideAvatar, {
						[me.a.selected]: _
					})
				}, Pe._("{=Hide avatar}", [Pe._param("=Hide avatar", c.a.createElement("div", {
					className: Object(p.a)(me.a.text, {
						[me.a.black]: B
					})
				}, Pe._("Hide avatar", null, {
					hk: "2395yu"
				})))], {
					hk: "3Mkh3e"
				}), c.a.createElement(Ae.a, {
					on: R,
					onToggle: () => {
						C(Object(g.f)()), !R && N(Object(O.j)())
					},
					className: me.a.toggleButton,
					activeColorOverride: n.a.orangered,
					tabIndex: _ && T ? 0 : -1
				}))), c.a.createElement(te, {
					isSelected: _,
					isForAbilityCard: !0,
					tabIndex: _ ? 0 : -1
				})))))
			};
			var Me = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						cardTemplateColor: i,
						subredditList: s,
						isSubscribed: n
					},
					isSelected: l,
					isForSharing: o
				} = e;
				return c.a.createElement(oe, {
					title: a,
					subtitle: t,
					cardTemplateColor: i,
					isSelected: l,
					isForSharing: o
				}, c.a.createElement("div", {
					className: Object(p.a)(me.a.subredditList, {
						[me.a.isResponsive]: !o
					})
				}, s.map((e, a) => c.a.createElement("div", {
					key: e.subredditId,
					style: {
						transitionDelay: `${.25*a+.4}s`
					},
					className: Object(p.a)(me.a.subreddit, {
						[me.a.selected]: l
					})
				}, c.a.createElement(ve, {
					withAddButton: !n,
					key: e.subredditId,
					deeplink: e.deeplink,
					subredditName: e.subredditName,
					isRed: i !== r.RED,
					size: "big",
					subredditId: e.subredditId,
					subscribed: e.isSubscribed,
					tabIndex: l ? 0 : -1
				})))))
			};
			var He = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						cardTemplateColor: i,
						topTopic: {
							topicImgUrl: s
						}
					},
					isSelected: n,
					isForSharing: l
				} = e;
				const o = i === r.RED;
				return c.a.createElement(oe, {
					title: a,
					subtitle: t,
					cardTemplateColor: i,
					isSelected: n,
					isForSharing: l
				}, c.a.createElement("div", {
					className: Object(p.a)(me.a.image, me.a.isCircle, {
						[me.a.orange]: !o,
						[me.a.isSelected]: n,
						[me.a.isResponsive]: !l
					})
				}, c.a.createElement(W.a, {
					src: s,
					className: Object(p.a)(me.a.fallbackStaticImage, me.a.small, {
						[me.a.isSelected]: n
					})
				}), c.a.createElement("div", {
					className: Object(p.a)(me.a.unitCircle, {
						[me.a.selected]: n
					})
				}, "#1")))
			};
			var Ue, Ye = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						templateImageUrl: i,
						cardTemplateColor: s,
						subredditName: n,
						deeplink: l,
						subredditId: o,
						backgroundImageUrl: d,
						humanReadableTotalTimeOnSubreddit: m,
						timeUnit: b
					},
					isSelected: u,
					isForSharing: g
				} = e;
				return c.a.createElement(oe, {
					title: a,
					subtitle: t,
					cardTemplateColor: s,
					isSelected: u,
					isForSharing: g
				}, c.a.createElement("div", {
					className: Object(p.a)(me.a.image, me.a.isCircle, me.a.noBg, {
						[me.a.isSelected]: u,
						[me.a.isResponsive]: !g
					}),
					style: {
						backgroundImage: `url(${d})`
					}
				}, c.a.createElement(W.a, {
					src: i,
					className: Object(p.a)(me.a.fallbackStaticImage, me.a.illustration, {
						[me.a.isSelected]: u
					})
				}), c.a.createElement("div", {
					className: Object(p.a)(me.a.subredditFloating, me.a.animated, {
						[me.a.selected]: u
					}, me.a.isSubredditCard)
				}, c.a.createElement(ve, {
					deeplink: l,
					subredditName: n,
					isLong: !0,
					size: "small",
					isRed: s === r.WHITE,
					subredditId: o,
					tabIndex: u ? 0 : -1
				})), m && c.a.createElement("div", {
					className: Object(p.a)(me.a.unitCircle, me.a.top, {
						[me.a.selected]: u
					})
				}, m, c.a.createElement("span", {
					className: me.a.timeUnit
				}, b))))
			};
			! function(e) {
				e.WHITE = "#fff", e.MANGO_100 = "#fff8b8", e.MANGO_300 = "#ffd635", e.MANGO_500 = "#ffa800"
			}(Ue || (Ue = {}));
			const Ge = {
				[r.WHITE]: [Ue.MANGO_500, Ue.MANGO_300, Ue.MANGO_100],
				[r.YELLOW]: [Ue.WHITE, Ue.MANGO_300, Ue.MANGO_500]
			};
			var ze, Ze = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						cardTemplateColor: i,
						subredditList: s
					},
					isSelected: n,
					isForSharing: l
				} = e;
				return c.a.createElement(oe, {
					title: a,
					subtitle: t,
					cardTemplateColor: i,
					isSelected: n,
					isForSharing: l
				}, c.a.createElement("div", {
					className: Object(p.a)(me.a.subredditList, {
						[me.a.isResponsive]: !l
					})
				}, s.map((e, a) => c.a.createElement("div", {
					key: e.subredditId,
					className: Object(p.a)(me.a.subredditBar, {
						[me.a.selected]: n
					}),
					style: {
						width: `${n?Xe[a]:0}px`,
						backgroundColor: Ge[i][a],
						transitionDelay: `${.25*a+.4}s`
					}
				}, c.a.createElement("div", {
					className: Object(p.a)(me.a.time, {
						[me.a.selected]: n
					}),
					style: {
						transitionDelay: `${.125*a+.5*s.length}s`
					}
				}, e.totalTimeOnSubreddit, c.a.createElement("div", {
					className: me.a.unit
				}, e.timeUnit)), c.a.createElement("div", {
					style: {
						transitionDelay: `${.25*a+.8}s`
					},
					className: Object(p.a)(me.a.subreddit, {
						[me.a.selected]: n
					})
				}, c.a.createElement(ve, {
					deeplink: e.deeplink,
					subredditName: e.subredditName,
					isRed: i !== r.RED,
					size: "tiny",
					subredditId: e.subredditId,
					tabIndex: n ? 0 : -1,
					shouldAlternativeFocus: 1 === a
				}))))))
			};
			! function(e) {
				e.WHITE = "#fff", e.MANGO_300 = "#ffd635", e.MANGO_500 = "#ffa800"
			}(ze || (ze = {}));
			const Ve = [ze.WHITE, ze.MANGO_300, ze.MANGO_500];
			var qe = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						cardTemplateColor: r,
						topTopicsList: i
					},
					isSelected: s,
					isForSharing: n
				} = e;
				return c.a.createElement(oe, {
					title: a,
					subtitle: t,
					cardTemplateColor: r,
					isSelected: s,
					isForSharing: n
				}, c.a.createElement("div", {
					className: Object(p.a)(me.a.subredditList, {
						[me.a.isResponsive]: !n
					})
				}, i.map((e, a) => c.a.createElement("div", {
					key: e.topicName,
					className: Object(p.a)(me.a.subredditBar, {
						[me.a.selected]: s
					}),
					style: {
						width: `${s?Xe[a]:0}px`,
						backgroundColor: Ve[a],
						transitionDelay: `${.25*a+.4}s`
					}
				}, c.a.createElement("div", {
					className: Object(p.a)(me.a.time, me.a.isTopic, {
						[me.a.selected]: s
					}),
					style: {
						transitionDelay: `${.125*a+.5*i.length}s`
					}
				}, `#${a+1}`, c.a.createElement("div", {
					className: me.a.unit
				}, e.topicName)), c.a.createElement("div", {
					className: Object(p.a)(me.a.topicIcon, {
						[me.a.selected]: s
					}),
					style: {
						transitionDelay: `${.25*a+.8}s`
					}
				}, c.a.createElement(W.a, {
					src: e.topicImgUrl,
					className: me.a.topicImage
				}))))))
			};
			const {
				fbt: Qe
			} = t("./node_modules/fbt/lib/FbtPublic.js"), Ke = {
				[r.RED]: "#ff4500",
				[r.YELLOW]: "#fff8b8",
				[r.BLACK]: "#000",
				[r.WHITE]: "#fff"
			}, Xe = [434, 373, 246];
			var Je;
			! function(e) {
				e.WHITE = "#fff", e.MANGO_100 = "#fff8b8", e.MANGO_300 = "#ffd635", e.MANGO_500 = "#ffa800"
			}(Je || (Je = {}));
			const $e = function(e, a, t, r) {
					let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1;
					const s = /(\*\*.*?\*\*)/g,
						n = e.split(s);
					return n.map((e, n) => s.test(e) ? 0 === i ? c.a.createElement("button", {
						key: e + n,
						className: a,
						onClick: r,
						tabIndex: i
					}, e.replace(/\*/g, "").replace(/ /g, " ")) : c.a.createElement("span", {
						key: e + n,
						className: Object(p.a)(a, {
							[t]: /\d/.test(e)
						}),
						onClick: r
					}, e.replace(/\*/g, "").replace(/ /g, " ").replace(/-/g, "-⁠")) : e)
				},
				ea = e => {
					let {
						card: a,
						isSelected: t,
						isForSharing: r,
						className: i
					} = e;
					return c.a.createElement("div", {
						className: i
					}, " ", (() => a ? (e => e.__typename === y)(a) ? c.a.createElement(Te, {
						card: a,
						isSelected: t
					}) : (e => e.__typename === S)(a) ? c.a.createElement(Re, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === T)(a) ? c.a.createElement(Me, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === w)(a) ? c.a.createElement(Ye, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === I)(a) ? c.a.createElement(Be, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === C)(a) ? c.a.createElement(Oe, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === R)(a) ? c.a.createElement(Ze, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === B)(a) ? c.a.createElement(ue, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === L)(a) ? c.a.createElement(qe, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === F)(a) ? c.a.createElement(Le, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === N)(a) ? c.a.createElement(we, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : D(a) ? c.a.createElement(We, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === A)(a) ? c.a.createElement(He, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : c.a.createElement("div", null, a.title) : null)())
				},
				aa = e => {
					const a = e.match(/(\/r\/)(.+?)(\/.*)/i),
						t = null == a ? void 0 : a[2];
					return {
						subredditName: t,
						subredditLink: `/r/${t}/`
					}
				},
				ta = () => Object(J.a)() === $.a.Granted;
			var ra = t("./src/reddit/pages/Recap/Components/ShareModal/index.m.less"),
				ia = t.n(ra);
			var sa = Object(X.a)(e => {
					let {
						cardTemplateColor: a,
						card: t,
						isAbilityCard: r,
						onDownloadCard: i,
						isDownloading: n,
						onClose: l
					} = e;
					const d = Object(s.useCallback)(e => {
							null !== e && t && e.focus()
						}, [t]),
						m = Object(s.useCallback)(e => {
							e.key === f.b.Escape && l && l()
						}, [l]);
					return Object(s.useEffect)(() => (window.addEventListener("keydown", m), () => window.removeEventListener("keydown", m)), [m]), c.a.createElement("div", {
						className: ia.a.modalWrapper,
						ref: d
					}, c.a.createElement("div", {
						className: ia.a.title
					}, c.a.createElement("span", {
						className: ia.a.titleCaption
					}, o.fbt._("Share", null, {
						hk: "2Y190R"
					})), c.a.createElement(E.a, {
						priority: E.c.PlainLink,
						kind: E.b.Button,
						Icon: Object(k.b)("close"),
						onClick: l,
						disabled: n,
						className: ia.a.titleCloseButton,
						iconClassName: ia.a.titleCloseButtonIcon,
						tabIndex: 1
					})), c.a.createElement("div", {
						className: ia.a.shareWrapper,
						style: {
							backgroundColor: r ? "none" : a
						}
					}, c.a.createElement("div", {
						className: ia.a.shareContainer,
						id: "shareId",
						style: {
							backgroundColor: r ? "none" : a
						}
					}, c.a.createElement(ea, {
						card: t,
						isSelected: !0,
						isForSharing: !0,
						className: ia.a.card
					}), !r && c.a.createElement("div", {
						className: ia.a.shareFooter
					}, c.a.createElement(H, {
						className: Object(p.a)(ia.a.logo)
					}), c.a.createElement("span", {
						className: ia.a.text
					}, "2022")))), c.a.createElement("div", {
						className: ia.a.controls
					}, c.a.createElement("div", {
						className: ia.a.download
					}, c.a.createElement(E.a, {
						priority: E.c.PlainLink,
						kind: E.b.Button,
						className: Object(p.a)(ia.a.shareButton),
						Icon: Object(k.b)("download"),
						iconClassName: Object(p.a)(ia.a.shareIcon),
						onClick: i,
						size: E.d.XL,
						disabled: n,
						tabIndex: 1
					}), c.a.createElement("div", {
						className: Object(p.a)(ia.a.title, {
							[ia.a.downloadIndicator]: n
						})
					}, n ? o.fbt._("Downloading...", null, {
						hk: "37jEC2"
					}) : o.fbt._("Download", null, {
						hk: "3UONFz"
					})))))
				}),
				ca = t("./src/reddit/selectors/activeModalId.ts"),
				na = t("./src/reddit/selectors/user.ts"),
				la = t("./src/reddit/pages/Recap/Components/index.m.less"),
				oa = t.n(la);
			const da = e => {
					let {
						onClick: a,
						cardIndex: t,
						isBlack: r
					} = e;
					return c.a.createElement(E.a, {
						onClick: a,
						priority: E.c.PlainLink,
						kind: E.b.Button,
						Icon: Object(k.b)("down"),
						key: t,
						className: Object(p.a)(oa.a.downButton, {
							[oa.a.black]: r
						}),
						iconClassName: oa.a.downButtonIcon
					})
				},
				ma = e => {
					let {
						isWhite: a,
						onClick: t
					} = e;
					return c.a.createElement(E.a, {
						className: Object(p.a)(oa.a.shareButton, {
							[oa.a.white]: a
						}),
						iconClassName: Object(p.a)(oa.a.shareButtonIcon, {
							[oa.a.white]: a
						}),
						onClick: t,
						Icon: Object(k.b)("share_ios"),
						priority: E.c.PlainLink,
						kind: E.b.Button,
						title: o.fbt._("Share Your Recap", null, {
							hk: "1HiouD"
						}),
						tabIndex: 0
					})
				},
				ba = e => {
					let {
						isBlackButton: a,
						isBlackIcon: t,
						onClick: r
					} = e;
					return c.a.createElement(E.a, {
						className: Object(p.a)(oa.a.closeButton, {
							[oa.a.black]: a
						}),
						Icon: Object(k.b)("close"),
						iconClassName: Object(p.a)(oa.a.closeButtonIcon, {
							[oa.a.black]: t
						}),
						onClick: r,
						priority: E.c.PlainLink,
						kind: E.b.Button,
						title: o.fbt._("Close recap", null, {
							hk: "3tZkDG"
						}),
						tabIndex: 0
					})
				};
			var ua = () => {
					const e = Object(b.d)(),
						a = Object(j.a)(),
						i = Object(b.e)(e => e.recap.shouldShowShareModal),
						n = () => e(Object(g.h)()),
						l = Object(b.e)(e => e.recap.isCardsLoading),
						o = Object(b.e)(e => e.recap.cardsLoadingError),
						d = Object(b.e)(e => e.recap.currentCardIndex),
						E = Object(b.e)(e => e.recap.shareCardWasOpened),
						k = Object(b.e)(e => Object(v.X)(e, {
							pageLayer: e.platform.currentPage
						})),
						C = Object(b.e)(e => {
							var a;
							return null === (a = e.platform.currentPage) || void 0 === a ? void 0 : a.key
						}),
						[N, S] = Object(s.useState)(!1),
						y = Object(b.e)(e => e.recap.cards),
						[I, x] = Object(s.useState)(!1),
						[w, R] = Object(s.useState)(!0),
						[T, B] = Object(s.useState)(!1),
						[L, F] = Object(s.useState)(0),
						A = Object(b.e)(e => Object(ca.b)(h.a.SNOOVATAR_MODAL)(e)),
						P = Object(b.e)(na.m),
						W = y.length && D(y[d]),
						M = y.length && (y[d].cardTemplateColor === r.WHITE || y[d].cardTemplateColor === r.YELLOW),
						H = Object(s.useCallback)(() => {
							e(Object(g.c)()), e(Object(g.a)())
						}, [e]),
						U = Object(s.useCallback)(() => {
							let e = [];
							for (let a = 0; a < y.length - 1 && (y[a].hasOwnProperty("templateImageUrl") && (e = [...e, y[a].templateImageUrl]), y[a].hasOwnProperty("backgroundImageUrl") && (e = [...e, y[a].backgroundImageUrl]), 3 !== a); ++a);
							Promise.all(e.map(e => new Promise(a => {
								const t = new Image;
								t.onload = () => a(), t.src = e
							}))).then(() => B(!0))
						}, [y]);
					Object(s.useEffect)(() => {
						U()
					}, [U]), Object(s.useEffect)(() => {
						Object(g.d)(!0), P && Object(_.Vb)(null == P ? void 0 : P.id)
					}, [A, P]), Object(s.useEffect)(() => {
						a(Object(O.r)()), H()
					}, [H, a]), Object(s.useEffect)(() => {
						y.length && a(Object(O.q)())
					}, [y, d, a]);
					const Y = Object(s.useRef)(m()((t, r, i, s, c, n) => {
							const l = r - 1;
							let o = i;
							if (s && c && !n) return a(Object(O.i)()), e(Object(g.b)());
							(t instanceof WheelEvent && t.deltaY > 0 || t instanceof KeyboardEvent && t.code === f.b.ArrowDown) && (o = i + 1 <= l && i + 1 >= 0 ? i + 1 : i), (t instanceof WheelEvent && t.deltaY < 0 || t instanceof KeyboardEvent && t.code === f.b.ArrowUp) && (o = i - 1 <= l && i - 1 >= 0 ? i - 1 : i), e(Object(g.e)({
								index: o
							}))
						}, 2e3, {
							trailing: !1
						})),
						z = Object(s.useRef)(null),
						Z = Object(s.useCallback)(() => {
							(null == z ? void 0 : z.current) && y.length && (R(!1), F(z.current.clientHeight / y.length))
						}, [y]);
					Object(s.useEffect)(() => (Z(), addEventListener("resize", Z), () => removeEventListener("resize", Z)), [z, y.length, Z]);
					const q = Object(s.useCallback)(e => {
							if (null !== e && y.length && !i) {
								if (e.focus(), W && !N && !E) return S(!0);
								e.onwheel = e => {
									R(!0), Y.current(e, y.length, d, !!W, N, E)
								}, e.onkeydown = e => {
									e.key !== f.b.ArrowDown && e.key !== f.b.ArrowUp || (R(!0), Y.current(e, y.length, d, !!W, N, E))
								}
							}
						}, [y, d, i, E, N, W]),
						Q = c.a.useCallback(async () => {
							let e = document.getElementById("shareId");
							if (W && (e = document.getElementById("abilityCardShareId")), e) {
								x(!0);
								const a = await (() => t.e(9).then(t.bind(null, "./node_modules/html-to-image/es/index.js")))(),
									r = await a.getFontEmbedCSS(e),
									i = await a.toPng(e, {
										backgroundColor: W ? "transparent" : Ke[y[d].cardTemplateColor],
										canvasHeight: W ? 486 : 540,
										canvasWidth: W ? 340 : 960,
										style: {
											scale: "1"
										},
										fontEmbedCSS: r
									});
								if (i) {
									const e = document.createElement("a");
									e.download = `reddit_recap_card${d}.png`, e.href = i, e.click(), x(!1), n()
								}
							}
						}, [e, d]),
						X = Object(s.useCallback)(() => {
							e(k && C ? Object(u.a)() : Object(u.b)("/")), a(Object(O.e)())
						}, [k, C, e, a]);
					return o ? c.a.createElement(G, {
						onRetry: H
					}) : l || !T ? c.a.createElement(V, null) : c.a.createElement(c.a.Fragment, null, y.length ? c.a.createElement("div", {
						ref: q,
						className: oa.a.cardsContainer,
						tabIndex: 0
					}, c.a.createElement("div", {
						ref: z,
						className: Object(p.a)(oa.a.wrapper, {
							[oa.a.animated]: w
						}),
						style: {
							transform: `translateY(${-d*L}px)`,
							backgroundColor: Ke[y[d].cardTemplateColor]
						}
					}, y.map((e, a) => c.a.createElement("div", {
						className: oa.a.card,
						key: e.id
					}, c.a.createElement(ea, {
						card: e,
						isSelected: a === d
					})))), d < y.length - 1 && c.a.createElement(da, {
						isBlack: !!M,
						onClick: () => {
							e(Object(g.e)({
								index: d + 1
							}))
						},
						cardIndex: d
					}), c.a.createElement(ba, {
						isBlackButton: y[d].cardTemplateColor === r.BLACK,
						isBlackIcon: !!M,
						onClick: X
					}), d > 0 && c.a.createElement(ma, {
						isWhite: y[d].cardTemplateColor === r.WHITE,
						onClick: n
					}), c.a.createElement(K, {
						cards: y,
						cardIndex: d,
						isBlack: !!M,
						onClick: a => {
							R(!1), e(Object(g.e)({
								index: a
							}))
						}
					}), i && c.a.createElement(sa, {
						onOverlayClick: n,
						withOverlay: !0,
						card: y[d],
						cardTemplateColor: Ke[y[d].cardTemplateColor],
						isAbilityCard: !!W,
						isDownloading: I,
						onDownloadCard: Q,
						onClose: n,
						overlayClassName: oa.a.shareModal
					})) : null)
				},
				pa = t("./src/reddit/pages/Recap/index.m.less"),
				ga = t.n(pa);
			a.default = () => c.a.createElement(l.a, {
				content: c.a.createElement(ua, null),
				className: ga.a.content,
				backgroundColor: n.a.orangered
			})
		},
		"./src/redditGQL/operations/RegisterWebPushToken.json": function(e) {
			e.exports = JSON.parse('{"id":"197650c1946c"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Recap.1e7b1f9035c34c200418.js.map