// https://www.redditstatic.com/desktop2x/Recap.5fe0b3501937c6658f07.js
// Retrieved at 10/27/2022, 3:20:04 PM by Reddit Dataminer v1.0.0
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
				return w
			})), t.d(a, "requestNotificationsPermissions", (function() {
				return F
			})), t.d(a, "subscribeForPNs", (function() {
				return A
			})), t.d(a, "unsubscribeFromPNs", (function() {
				return L
			})), t.d(a, "requestBrowserNotificationPermissionPromptByUser", (function() {
				return D
			})), t.d(a, "subscribeToPermissionsChange", (function() {
				return B
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
				u = t("./src/reddit/actions/modal.ts"),
				b = t("./src/reddit/actions/notifications/utils.ts"),
				p = t("./src/reddit/actions/tabBadging.ts"),
				g = t("./src/reddit/actions/toaster.ts"),
				E = t("./src/reddit/constants/modals.ts"),
				f = t("./src/reddit/helpers/parseUrl.ts"),
				h = t("./src/reddit/helpers/tabBadging/index.ts"),
				v = t("./src/reddit/helpers/trackers/notifications.ts"),
				_ = t("./src/reddit/models/Toast/index.ts"),
				O = t("./src/reddit/selectors/activeModal.ts"),
				N = t("./src/reddit/selectors/activeModalId.ts"),
				j = t("./src/reddit/selectors/experiments/delayDnPermission.ts"),
				k = t("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				C = t("./src/reddit/constants/experiments.ts"),
				y = t("./src/reddit/helpers/chooseVariant/index.ts");
			const S = e => Object(y.c)(e, {
				experimentName: C.mc,
				experimentEligibilitySelector: y.a
			}) === C.Vd;
			var I = t("./src/reddit/selectors/meta.ts"),
				x = t("./src/reddit/selectors/user.ts");
			let T = !1;
			const w = async (e, a) => {
				const t = Object(x.Q)(e);
				if (T) return;
				if (T = !0, Object(b.a)(e) !== o.c.NotificationsSupported) return;
				await Object(d.a)();
				navigator.serviceWorker.addEventListener("message", r => {
					const i = r.data,
						c = i.command || i.type;
					if ("registerWithServiceWorker" === c) R(e);
					else if (c === h.a && t) {
						const e = s()(i, ["command"]);
						a(Object(p.f)(e))
					} else if ("navigate.chat" === c) {
						const e = Object(f.a)(i.data.href);
						e && e.pathname && a(Object(m.c)(e.pathname))
					}
				}), R(e)
			}, R = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: v.c(e)
				})
			}, F = function(e, a) {
				let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
				return async (r, i, s) => {
					const n = i(),
						d = Object(I.f)(n),
						m = S(n),
						u = !!Object(N.a)(n),
						b = Object(j.a)(n),
						p = Object(k.e)(n),
						g = Object(O.c)(E.a.NSFW_BLOCKING_MODAL_V2)(n);
					if (p || g) return;
					if (await Object(c.a)() || d) return;
					await w(n, r);
					v.l(n), await Object(l.b)(e, a, () => {
						m || b || u || r(Object(o.o)()), r(Object(o.n)()), v.j(n)
					}, (e, a) => {
						r(Object(o.l)()), r(L(a ? o.a.Denied : o.a.Closed)), e && (a ? v.e(n) : v.f(n)), t()
					}, e => {
						r(Object(o.m)()), r(A()), e && v.d(n), t()
					}, () => {
						r(Object(o.k)()), t()
					})
				}
			}, A = e => async (a, t, i) => {
				const s = t();
				try {
					switch (await Object(n.b)(i.gqlContext)) {
						case n.a.Success:
							Object(b.b)(o.a.Granted), v.m(s), e && a(Object(g.f)({
								kind: _.b.SuccessCommunity,
								text: r.fbt._("Changes saved", null, {
									hk: "wGH5U"
								})
							}));
							break;
						case n.a.FailedResponse:
							v.k(s, "registration_failed_generally");
							break;
						case n.a.FailedGqlReponse:
							v.k(s, "registration_failed_in_gql")
					}
				} catch (c) {
					v.k(s, "registration_failed_uncaught_exception"), console.error(c)
				}
			}, L = (e, a) => async t => {
				try {
					Object(b.b)(e);
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
				if (Object(b.a)(r) === o.c.NotificationsSupported) switch (Object(l.a)()) {
					case o.a.Default:
					case o.a.Closed:
						await a(F(!0, !0));
						break;
					case o.a.Denied:
						a(Object(u.h)(e))
				}
			}, B = () => async (e, a) => {
				var t;
				if (!(null === (t = null === navigator || void 0 === navigator ? void 0 : navigator.permissions) || void 0 === t ? void 0 : t.query)) return;
				const r = a();
				if (Object(b.a)(r) !== o.c.NotificationsSupported) return;
				const i = await navigator.permissions.query({
					name: "notifications"
				});
				i.onchange = () => (a => {
					switch (a) {
						case o.a.Denied:
							e(L(o.a.Denied)), v.e(r);
							break;
						case o.a.Granted:
							e(A()), v.d(r);
							break;
						default:
							e(L(o.a.Default))
					}
				})(i.state)
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
				return u
			})), t.d(a, "l", (function() {
				return p
			})), t.d(a, "m", (function() {
				return g
			})), t.d(a, "k", (function() {
				return E
			})), t.d(a, "c", (function() {
				return h
			})), t.d(a, "b", (function() {
				return v
			})), t.d(a, "i", (function() {
				return _
			})), t.d(a, "a", (function() {
				return O
			})), t.d(a, "n", (function() {
				return N
			})), t.d(a, "o", (function() {
				return j
			})), t.d(a, "h", (function() {
				return k
			})), t.d(a, "g", (function() {
				return C
			}));
			var r = t("./src/reddit/selectors/telemetry.ts"),
				i = t("./src/telemetry/index.ts"),
				s = t("./src/telemetry/models/Event.ts");
			var c;
			! function(e) {
				e.FREQUENT = "frequent", e.LOW = "low", e.OFF = "off"
			}(c || (c = {}));
			const n = e => ({
					...r.o(e),
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
				u = e => {
					Object(i.a)({
						...n(e),
						action: s.c.Close,
						source: "popup"
					})
				},
				b = (e, a, t) => ({
					...r.o(e),
					actionInfo: r.d(e, {
						success: a,
						reason: t
					}),
					noun: "push_token"
				}),
				p = e => {
					Object(i.a)({
						...b(e, !0),
						action: s.c.Request,
						source: "notification"
					})
				},
				g = e => {
					Object(i.a)({
						...b(e, !0),
						action: s.c.Register,
						source: "notification"
					})
				},
				E = (e, a) => {
					Object(i.a)({
						...b(e, !1, a),
						action: s.c.Bail,
						source: "notification"
					})
				},
				f = e => ({
					...r.o(e),
					noun: "push_notification"
				}),
				h = e => ({
					...f(e),
					notification: r.F(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				v = (e, a) => t => ({
					...r.o(t),
					action: l(e),
					email: {
						type: a
					},
					noun: "email",
					source: "email_app_settings"
				}),
				_ = (e, a) => t => ({
					...r.o(t),
					action: l(e),
					notification: {
						type: a
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				O = e => a => ({
					...r.o(a),
					source: "email_app_settings",
					action: l(e),
					noun: "email",
					notification: {
						type: "all"
					}
				}),
				N = (e, a, t) => i => ({
					...r.o(i),
					action: "set_frequency",
					noun: t,
					source: "community_notifications",
					subreddit: {
						id: e,
						name: a.toLowerCase()
					}
				}),
				j = () => e => ({
					...r.o(e),
					action: s.c.View,
					noun: "screen",
					source: "global",
					actionInfo: {
						pageType: "community_alerts"
					}
				}),
				k = () => e => ({
					...r.o(e),
					action: "click",
					noun: "desktop_notification_permissions",
					source: "overlay"
				}),
				C = () => e => ({
					...r.o(e),
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
				image: "_7PGeAYknEPulscfNx1Zht",
				isCircle: "_33wC-mxWH3e9FVgBiwaBz0",
				orange: "_2QS4phWYU6ucBxU42vDLDc",
				post: "_1mFNY9hUJx094QedQVkReh",
				commentSubreddit: "-f1VzXgnc434HTJc_EpjA",
				unitCircle: "_1pbhXLkA7b8wiToPxVBSK7",
				selected: "_13NY-jZoIQCjuTRh8lxmyX",
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
				comment: "_2fN2A4C6nC3WdaAVoFCnKH",
				subredditImage: "PRbaY1FL2DBM5rgUUDAHY",
				asText: "A7ufMmI97qMfcBZuGn7DO",
				avatarsWrapper: "_2a1oit7pqS4PI2liEGh754",
				avatars: "_2tUtJXDfTfNgRqksg-2Ueu",
				avatar: "SXt-97VdQ3Vci84aFiNpZ",
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
				log: "_3aDa1hw20PJsvGFNxxYP8h",
				title: "_1rxpNtuoawyacNKWmoXJhp",
				subtitle: "_2_rJDMuvgoGZeDZQfmd5Wd",
				black: "_3tGt5UIGFuCkCjfLzTlcHq",
				logo: "_14tAJBrwfUCwzb6yqYUTFn",
				selected: "_1kKx4AbaHYRcTRNLl_jXjf",
				white: "_10sac8_Yz6flUpM7voKM5C",
				value: "trOgcRV-5wN9Yn9T2HwYI",
				orange: "alkP8lQe4nDtnF4wadJWh"
			}
		},
		"./src/reddit/pages/Recap/Components/LoadingIcon/index.m.less": function(e, a, t) {
			e.exports = {
				circle: "_2M7sw4hhnG1M80Av_-XLMC",
				image: "_7Hjths-BWbWSUqPcsiRkd"
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
				text: "_2c6NuoMa5kO0yyydUfphQZ",
				subredditPrefix: "_1RgOSqjcgo4hSLGk1fLyF5",
				withButton: "_3bcZWcr4cTbxQPgUhMNVmI"
			}
		},
		"./src/reddit/pages/Recap/Components/index.m.less": function(e, a, t) {
			e.exports = {
				cardsContainer: "_1IHzyKlGYPr5q1Kg0OL-3r",
				pager: "_2_i4EC42S2Fdde63T8plXo",
				progressDot: "_3YwfIeih-fIHk7MGud93qQ",
				active: "_1jp56XyBH5dmACHKZVLTsV",
				black: "_25yWR7Mez06MDyLE4cCFxL",
				nextDot: "ON91STkOKKrasysjaPNNn",
				wrapper: "_7Le_Dd5cPtJaT3KvpCN-9",
				card: "o06JQ6d-oXiCqpl6DOJKt",
				downButton: "_26595aKEasiROJPZzGsZ-0",
				fadeUp: "_378OfjACgQdkjjeWY8tTut",
				downButtonIcon: "_13O7BZDC0K1kA8PAHXxPus",
				modalWrapper: "dQou53YbHnY4ZUprcB9EU",
				title: "_z-3XUcq4odquMGnY05O6",
				controls: "DxM-sGC78JR99cy7AFjUx",
				download: "_1C_InmvrCjQMavT09iXFTf",
				shareButton: "_2R-wYMVA9PP3Nn__jrlmDC",
				shareIcon: "_2r7qqMFtrklTuJ_4X9uZos",
				downloadIndicator: "_3-DxE7dVf90jPnJNBKPwmg",
				puls: "_3mrtNhanXAIGNDA5jhD0Rw",
				shareWrapper: "_1ExGauGZzcSafcA984FWeM",
				shareContainer: "_3hgKj6UBzkBrLQQIgLhxKQ",
				shareFooter: "_1gqOR_4rZP_T9A1Yu61uav",
				logo: "_2VrRPYZKiyu0CWjheVq_Bv",
				text: "NRtS3yVF8oxiLRaTjM2w3"
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
			var r = t("./node_modules/react/index.js"),
				i = t.n(r),
				s = (t("./assets/fonts/RedditSans/font.less"), t("./src/reddit/constants/colors.ts")),
				c = t("./src/reddit/layout/page/Listing/index.tsx"),
				n = t("./node_modules/fbt/lib/FbtPublic.js"),
				l = t("./node_modules/lodash/throttle.js"),
				o = t.n(l),
				d = t("./node_modules/react-redux/es/index.js"),
				m = t("./src/lib/classNames/index.ts"),
				u = t("./src/reddit/actions/recap/index.ts"),
				b = t("./src/reddit/constants/keycodes.ts"),
				p = t("./src/reddit/constants/modals.ts"),
				g = t("./src/reddit/controls/Button/index.tsx"),
				E = t("./src/reddit/helpers/localStorage/index.ts"),
				f = t("./src/reddit/hooks/useTracking.ts"),
				h = t("./src/reddit/icons/fonts/index.tsx");

			function v() {
				return (v = Object.assign || function(e) {
					for (var a = 1; a < arguments.length; a++) {
						var t = arguments[a];
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
					}
					return e
				}).apply(this, arguments)
			}
			var _, O, N = e => i.a.createElement("svg", v({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 130 32"
			}), i.a.createElement("path", {
				d: "M121.02 0H8.315A8.315 8.315 0 0 0 0 8.315v15.37A8.315 8.315 0 0 0 8.315 32H121.02a8.316 8.316 0 0 0 8.316-8.315V8.315A8.316 8.316 0 0 0 121.02 0Z"
			}), i.a.createElement("path", {
				d: "M17.342 26.386c5.693 0 10.307-4.615 10.307-10.308S23.035 5.771 17.342 5.771c-5.693 0-10.308 4.614-10.308 10.307 0 5.693 4.615 10.308 10.308 10.308Z",
				fill: "#FF4500"
			}), i.a.createElement("path", {
				d: "M24.211 16.078a1.503 1.503 0 0 0-2.545-1.081c-1.028-.742-2.444-1.22-4.02-1.275l.684-3.222 2.238.476a1.071 1.071 0 0 0 2.142-.052 1.07 1.07 0 0 0-2.032-.474l-2.499-.531a.266.266 0 0 0-.318.207l-.765 3.595c-1.6.044-3.038.523-4.079 1.273a1.503 1.503 0 1 0-1.655 2.455c-.022.15-.035.3-.035.455 0 2.312 2.692 4.187 6.013 4.187 3.32 0 6.012-1.875 6.012-4.188a2.96 2.96 0 0 0-.035-.451c.527-.234.894-.76.894-1.374Zm-10.306 1.074a1.075 1.075 0 1 1 1.074 1.073 1.075 1.075 0 0 1-1.074-1.073Zm5.987 2.837c-.732.732-2.137.789-2.55.789-.412 0-1.817-.057-2.549-.789a.278.278 0 1 1 .394-.393c.462.462 1.45.625 2.156.625.705 0 1.694-.163 2.156-.625a.278.278 0 0 1 .393.393Zm-.189-1.763a1.075 1.075 0 0 1 0-2.148 1.075 1.075 0 0 1 0 2.148Z",
				fill: "#fff"
			}), i.a.createElement("path", {
				d: "M40.77 21.975h-2.676l-2.106-3.698c-.203.01-.357.015-.463.015h-.883v3.683H32.27V11.31h3.85c.708 0 1.343.13 1.902.387.56.259.998.634 1.317 1.125.318.492.477 1.078.477 1.758 0 .632-.14 1.21-.423 1.733a3.432 3.432 0 0 1-1.212 1.284l2.59 4.377Zm-6.128-5.615h1.194c.323 0 .61-.06.861-.18.25-.121.446-.292.586-.514.14-.222.21-.48.21-.774 0-.295-.071-.553-.213-.775a1.39 1.39 0 0 0-.608-.513c-.263-.12-.57-.181-.923-.181h-1.106v2.937ZM47.976 18.82H42.74c.14.453.387.81.741 1.067.355.258.778.387 1.27.387a3.52 3.52 0 0 0 1.049-.166c.357-.111.632-.241.825-.391l.709 1.708c-.3.202-.673.364-1.122.484-.448.12-.923.181-1.425.181-.83 0-1.556-.169-2.178-.506a3.557 3.557 0 0 1-1.44-1.41c-.337-.604-.506-1.293-.506-2.07 0-.796.174-1.499.52-2.11a3.689 3.689 0 0 1 1.401-1.414 3.824 3.824 0 0 1 1.92-.499c.666 0 1.273.153 1.82.46.548.306.98.736 1.295 1.291.316.555.474 1.186.474 1.895 0 .367-.038.731-.115 1.093Zm-1.99-1.432c0-.464-.138-.83-.415-1.1-.277-.27-.643-.405-1.096-.405-.459 0-.843.136-1.154.408-.311.273-.517.638-.619 1.097h3.285ZM54.806 10.833h2.286v11.141h-2.177v-.933h-.036c-.295.333-.64.591-1.038.774a3.12 3.12 0 0 1-1.321.275c-.637 0-1.23-.159-1.78-.477-.55-.319-.991-.78-1.324-1.386-.333-.605-.499-1.317-.499-2.137 0-.84.172-1.562.517-2.168.345-.605.797-1.064 1.357-1.378.56-.313 1.16-.47 1.801-.47.434 0 .833.074 1.198.22.364.148.686.359.965.634h.051v-4.095Zm-.835 9.036c.287-.174.514-.416.683-.727.169-.311.253-.664.253-1.06 0-.39-.08-.74-.242-1.049a1.803 1.803 0 0 0-1.646-.984 1.812 1.812 0 0 0-1.65.973 2.18 2.18 0 0 0-.245 1.046c0 .39.08.742.242 1.056a1.81 1.81 0 0 0 1.646 1.006c.352 0 .672-.087.959-.261ZM63.908 10.833h2.286v11.141h-2.178v-.933h-.036a3.11 3.11 0 0 1-1.038.774 3.118 3.118 0 0 1-1.32.275c-.637 0-1.23-.159-1.78-.477-.55-.319-.991-.78-1.324-1.386-.333-.605-.5-1.317-.5-2.137 0-.84.173-1.562.518-2.168.345-.605.797-1.064 1.357-1.378.559-.313 1.16-.47 1.801-.47.434 0 .833.074 1.197.22.364.148.686.359.966.634h.05v-4.095Zm-.836 9.036c.287-.174.515-.416.684-.727.169-.311.253-.664.253-1.06 0-.39-.08-.74-.242-1.049a1.808 1.808 0 0 0-.673-.724 1.844 1.844 0 0 0-.973-.26 1.807 1.807 0 0 0-1.65.973 2.18 2.18 0 0 0-.246 1.046c0 .39.081.742.243 1.056a1.81 1.81 0 0 0 1.646 1.006c.352 0 .671-.087.958-.261ZM68.12 13.104a1.389 1.389 0 0 1-.688-1.208c0-.26.061-.497.184-.709.123-.212.29-.378.503-.5.212-.12.449-.18.71-.18a1.377 1.377 0 0 1 1.388 1.389 1.377 1.377 0 0 1-.687 1.208 1.355 1.355 0 0 1-.702.189c-.26 0-.497-.063-.709-.189Zm1.844 8.87h-2.286V14.19h2.286v7.784ZM74.767 14.19h1.672v1.946h-1.671v5.839H72.48v-5.839h-1.664V14.19h1.664v-2.229h2.287v2.229ZM89.007 21.975H86.33l-2.105-3.698c-.203.01-.357.015-.463.015h-.883v3.683h-2.373V11.31h3.849c.709 0 1.343.13 1.903.387.559.259.998.634 1.317 1.125.318.492.477 1.078.477 1.758 0 .632-.141 1.21-.423 1.733a3.431 3.431 0 0 1-1.212 1.284l2.59 4.377Zm-6.128-5.615h1.194c.323 0 .61-.06.86-.18.251-.121.447-.292.587-.514.14-.222.21-.48.21-.774 0-.295-.072-.553-.214-.775a1.394 1.394 0 0 0-.608-.513c-.263-.12-.57-.181-.922-.181h-1.107v2.937ZM96.213 18.82h-5.238c.14.453.387.81.741 1.067.355.258.778.387 1.27.387.343 0 .692-.055 1.05-.166.356-.111.631-.241.824-.391l.71 1.708c-.3.202-.674.364-1.122.484a5.47 5.47 0 0 1-1.426.181c-.83 0-1.555-.169-2.177-.506a3.559 3.559 0 0 1-1.44-1.41c-.338-.604-.507-1.293-.507-2.07 0-.796.174-1.499.522-2.11a3.685 3.685 0 0 1 1.4-1.414 3.826 3.826 0 0 1 1.92-.499c.666 0 1.272.153 1.82.46.547.306.979.736 1.295 1.291.316.555.474 1.186.474 1.895 0 .367-.039.731-.116 1.093Zm-1.99-1.432c0-.464-.138-.83-.415-1.1-.278-.27-.643-.405-1.097-.405-.458 0-.843.136-1.154.408-.31.273-.517.638-.618 1.097h3.285ZM99.277 21.533a4.042 4.042 0 0 1-1.523-1.447 3.808 3.808 0 0 1-.565-2.033c0-.733.185-1.403.554-2.01a4.01 4.01 0 0 1 1.498-1.44 4.145 4.145 0 0 1 2.058-.529 4.396 4.396 0 0 1 2.409.717l-.839 1.837a2.143 2.143 0 0 0-.687-.43 2.276 2.276 0 0 0-.825-.149c-.401 0-.752.09-1.053.272a1.85 1.85 0 0 0-.694.727 2.091 2.091 0 0 0-.243.998c0 .372.084.713.254 1.024a1.926 1.926 0 0 0 1.729 1.017c.299 0 .594-.054.886-.16.292-.106.512-.229.662-.369l.817 1.874a4.327 4.327 0 0 1-1.059.452 4.568 4.568 0 0 1-1.277.178 4.285 4.285 0 0 1-2.102-.529ZM109.953 14.183h2.177v7.792h-2.177v-.934h-.051c-.294.333-.64.591-1.038.775a3.12 3.12 0 0 1-1.32.275 3.49 3.49 0 0 1-1.78-.478c-.55-.318-.992-.78-1.324-1.386-.333-.605-.5-1.317-.5-2.137 0-.835.172-1.555.514-2.16.343-.605.795-1.066 1.357-1.382a3.635 3.635 0 0 1 1.812-.474c.473 0 .902.086 1.288.257s.721.419 1.006.742h.036v-.89Zm-.959 5.686c.287-.173.515-.416.684-.727.169-.31.253-.664.253-1.06 0-.39-.081-.74-.242-1.049a1.808 1.808 0 0 0-.673-.723 1.845 1.845 0 0 0-.973-.26 1.86 1.86 0 0 0-.973.256c-.288.171-.513.41-.677.716a2.18 2.18 0 0 0-.246 1.046c0 .39.081.743.242 1.056.162.314.388.56.677.738.289.179.612.268.969.268.352 0 .672-.087.959-.26ZM121.355 20.206a3.54 3.54 0 0 1-1.317 1.396c-.55.326-1.15.489-1.801.489a3.027 3.027 0 0 1-2.265-.948h-.058v3.892l-2.286-.022V14.19h2.17v.919h.044a2.909 2.909 0 0 1 1.012-.767 3.116 3.116 0 0 1 1.31-.268 3.563 3.563 0 0 1 3.172 1.874c.341.608.511 1.322.511 2.142 0 .805-.164 1.51-.492 2.116Zm-2.634-.348c.29-.176.514-.419.673-.73a2.28 2.28 0 0 0 .239-1.053c0-.39-.081-.74-.242-1.05a1.79 1.79 0 0 0-.673-.719 1.877 1.877 0 0 0-.981-.257 1.78 1.78 0 0 0-1.638.977 2.24 2.24 0 0 0-.243 1.056c0 .396.081.748.243 1.056.161.31.384.55.669.724.284.174.608.263.969.268a1.9 1.9 0 0 0 .984-.271Z",
				fill: "#FF4500"
			}));
			! function(e) {
				e.YELLOW = "YELLOW", e.WHITE = "WHITE", e.RED = "RED", e.BLACK = "BLACK"
			}(_ || (_ = {})),
			function(e) {
				e.Common = "COMMON", e.Rare = "RARE", e.Epic = "EPIC", e.Legendary = "LEGENDARY"
			}(O || (O = {}));
			const j = "PersonalizedYearInReviewCommentCard",
				k = "PersonalizedYearInReviewEndCard",
				C = "PersonalizedYearInReviewGenericCard",
				y = "PersonalizedYearInReviewIntroCard",
				S = "PersonalizedYearInReviewPostCard",
				I = "PersonalizedYearInReviewShareCard",
				x = "PersonalizedYearInReviewSubredditCard",
				T = "PersonalizedYearInReviewSubredditListCard",
				w = "PersonalizedYearInReviewSingleStatSubredditListCard",
				R = "PersonalizedYearInReviewAvatarCard",
				F = "PersonalizedYearInReviewTopicListCard",
				A = "PersonalizedYearInReviewRPlaceTileListCard",
				L = "PersonalizedYearInReviewSingleTopicCard",
				D = e => e.__typename === I;
			var B = t("./src/config.ts"),
				M = t("./src/reddit/components/ImageWithFallback/index.tsx"),
				P = t("./src/reddit/pages/Recap/Components/ErrorScreen/index.m.less"),
				W = t.n(P);
			var Y = e => {
					let {
						onRetry: a
					} = e;
					return i.a.createElement("div", {
						className: W.a.wrapper
					}, i.a.createElement("div", {
						className: Object(m.a)(W.a.image, W.a.isCircle)
					}, i.a.createElement(M.a, {
						src: `${B.a.assetPath}/img/recap/key_art_recap_2022.png`,
						className: Object(m.a)(W.a.fallbackStaticImage)
					})), i.a.createElement("div", {
						className: W.a.info
					}, i.a.createElement(N, {
						className: W.a.logo
					}), i.a.createElement("p", {
						className: W.a.title
					}, n.fbt._("WTF?", null, {
						hk: "exzlX"
					})), i.a.createElement("p", {
						className: W.a.subtitle
					}, n.fbt._("Something went wrong. Try that again.", null, {
						hk: "fyv6n"
					})), i.a.createElement(g.t, {
						className: Object(m.a)(W.a.retryButton),
						onClick: a
					}, n.fbt._("Retry", null, {
						hk: "2NAMZ4"
					}))))
				},
				H = t("./src/reddit/pages/Recap/Components/LoadingIcon/index.m.less"),
				G = t.n(H);
			var U = () => i.a.createElement("div", {
					className: G.a.circle
				}, i.a.createElement("img", {
					className: G.a.image,
					src: `${B.a.assetPath}/img/recap/InfiniteLoad_4.gif`
				})),
				V = t("./src/higherOrderComponents/asModal/index.tsx");
			var z = Object(V.a)(e => {
					let {
						children: a
					} = e;
					return i.a.createElement(i.a.Fragment, null, a)
				}),
				Z = t("./src/lib/notifications/index.ts"),
				q = t("./src/lib/notifications/constants.ts"),
				K = t("./src/reddit/helpers/trackers/recap.ts"),
				X = t("./src/reddit/pages/Recap/Components/ShareButton/index.m.less"),
				Q = t.n(X);
			var J = e => {
					let {
						isSelected: a,
						isForAbilityCard: t,
						isVisible: r,
						isRedTemplate: s,
						isInitialCard: c
					} = e;
					const l = Object(d.d)(),
						o = Object(f.a)();
					return i.a.createElement("div", {
						className: Object(m.a)(Q.a.shareContainer, {
							[Q.a.selected]: a,
							[Q.a.forAbility]: t,
							[Q.a.visible]: r,
							[Q.a.initialCard]: c
						})
					}, i.a.createElement(g.t, {
						className: Object(m.a)(Q.a.shareButton, {
							[Q.a.orange]: !s
						}),
						Icon: Object(h.b)("share_ios"),
						iconClassName: Object(m.a)(Q.a.shareIcon, {
							[Q.a.white]: !s
						}),
						onClick: () => {
							l(Object(u.h)()), o(Object(K.k)())
						}
					}, n.fbt._("Share", null, {
						hk: "1q5t1q"
					})))
				},
				$ = t("./src/reddit/pages/Recap/Components/Info/index.m.less"),
				ee = t.n($);
			const {
				fbt: ae
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var te = e => {
					let {
						title: a,
						subtitle: t,
						cardTemplateColor: r,
						subText: s,
						shouldHideShareButton: c,
						isSelected: n,
						isForSharing: l,
						isInitialCard: o
					} = e;
					const d = r === _.RED,
						u = r === _.BLACK,
						b = r === _.WHITE;
					return i.a.createElement("div", {
						className: Object(m.a)(ee.a.info, {
							[ee.a.black]: !d && !u,
							[ee.a.selected]: n,
							[ee.a.initialCard]: o
						})
					}, !l && i.a.createElement(N, {
						className: Object(m.a)(ee.a.logo, {
							[ee.a.white]: b,
							[ee.a.selected]: n
						})
					}), i.a.createElement("p", {
						className: Object(m.a)(ee.a.title, {
							[ee.a.selected]: n
						})
					}, ze(a, Object(m.a)(ee.a.value, {
						[ee.a.orange]: !d
					}))), i.a.createElement("p", {
						className: Object(m.a)(ee.a.subtitle, {
							[ee.a.selected]: n
						})
					}, t), !c && !l && i.a.createElement(J, {
						isSelected: n,
						isRedTemplate: d,
						isInitialCard: o
					}), s)
				},
				re = t("./src/reddit/pages/Recap/Components/Card/index.m.less"),
				ie = t.n(re);
			var se = e => {
					let {
						cardTemplateColor: a,
						title: t,
						subtitle: r,
						children: s,
						shouldHideShareButton: c,
						isSelected: n,
						isForSharing: l,
						shouldHideInfo: o,
						isForAbilityCard: d,
						isInitialCard: u
					} = e;
					const [b, p] = i.a.Children.toArray(s);
					return i.a.createElement("div", {
						className: Object(m.a)(ie.a.wrapper, {
							[ie.a.forAbility]: d,
							[ie.a.forSharing]: l
						})
					}, b, !o && i.a.createElement(te, {
						title: t,
						subtitle: r,
						cardTemplateColor: a,
						subText: p,
						shouldHideShareButton: c,
						isSelected: n,
						isForSharing: l,
						isInitialCard: u
					}))
				},
				ce = t("./src/reddit/pages/Recap/CardTemplates/index.m.less"),
				ne = t.n(ce);
			var le = e => {
					let {
						card: {
							title: a,
							subtitle: t,
							cardTemplateColor: r,
							userPreviousAvatarUrl: s,
							userCurrentAvatarUrl: c
						},
						isSelected: n,
						isForSharing: l
					} = e;
					return i.a.createElement(se, {
						title: a,
						subtitle: t,
						cardTemplateColor: r,
						isSelected: n,
						isForSharing: l
					}, i.a.createElement("div", {
						className: ne.a.avatarsWrapper
					}, (null == s ? void 0 : s.length) && c.length ? i.a.createElement("div", {
						className: Object(m.a)(ne.a.avatars, {
							[ne.a.selected]: n
						})
					}, i.a.createElement("div", {
						className: ne.a.avatar,
						style: {
							transitionDelay: ".65s"
						}
					}, i.a.createElement(M.a, {
						src: s,
						className: Object(m.a)(ne.a.fallbackStaticImage, {
							[ne.a.isSelected]: n
						})
					})), i.a.createElement("div", {
						className: ne.a.avatar
					}, i.a.createElement(M.a, {
						src: c,
						className: Object(m.a)(ne.a.fallbackStaticImage, {
							[ne.a.isSelected]: n
						}),
						style: {
							transitionDelay: ".85s"
						}
					}))) : i.a.createElement("div", {
						className: Object(m.a)(ne.a.collectibleAvatar, {
							[ne.a.selected]: n
						})
					}, i.a.createElement(M.a, {
						src: c,
						className: Object(m.a)(ne.a.fallbackStaticImage, {
							[ne.a.isSelected]: n
						})
					}))))
				},
				oe = t("./src/reddit/controls/InternalLink/index.tsx"),
				de = t("./src/reddit/actions/subscription/index.ts"),
				me = t("./src/reddit/pages/Recap/Components/Subreddit/index.m.less"),
				ue = t.n(me);
			var be = e => {
				let {
					deeplink: a,
					subredditName: t,
					className: s,
					isLong: c,
					isRed: n,
					size: l,
					withAddButton: o,
					subredditId: u
				} = e;
				const b = Object(d.d)(),
					p = Object(f.a)(),
					[E, v] = Object(r.useState)(!1);
				return i.a.createElement("div", {
					className: ue.a.subredditWrapper
				}, i.a.createElement("div", {
					onClick: e => e.stopPropagation(),
					className: Object(m.a)(ue.a.container, s, {
						[ue.a.long]: c,
						[ue.a.big]: "big" === l,
						[ue.a.small]: "small" === l,
						[ue.a.tiny]: "tiny" === l,
						[ue.a.micro]: "micro" === l,
						[ue.a.red]: n
					})
				}, o && i.a.createElement(g.t, {
					Icon: Object(h.b)(E ? "joined_fill" : "join"),
					size: g.d.S,
					priority: g.c.PlainLink,
					className: ue.a.addButton,
					iconClassName: Object(m.a)(ue.a.icon, {
						[ue.a.white]: n
					}),
					onClick: e => (e.stopPropagation(), ((e, a) => {
						b(async t => {
							const r = await t(Object(de.d)([{
								name: e,
								type: "subreddit"
							}], !a));
							p(Object(K.l)(!a, e, u)), r && v(!E)
						})
					})(t, E))
				}), i.a.createElement(oe.default, {
					to: a,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => p(Object(K.d)(u)),
					className: Object(m.a)(ue.a.subreddit, {
						[ue.a.red]: n,
						[ue.a.big]: "big" === l,
						[ue.a.small]: "small" === l,
						[ue.a.tiny]: "tiny" === l,
						[ue.a.micro]: "micro" === l,
						[ue.a.withButton]: o
					})
				}, i.a.createElement("div", {
					className: ue.a.text
				}, i.a.createElement("span", {
					className: ue.a.subredditPrefix
				}, "r/"), t))))
			};
			var pe = e => {
					let {
						card: {
							title: a,
							subtitle: t,
							postImageUrl: r,
							cardTemplateColor: s,
							postDeeplink: c,
							commentText: n,
							commentDeeplink: l,
							postTitle: o,
							subredditId: d,
							commentId: u,
							postId: b
						},
						isSelected: p,
						isForSharing: g
					} = e;
					const E = Object(f.a)(),
						v = s === _.RED,
						{
							subredditName: O,
							subredditLink: N
						} = qe(c),
						j = Object(h.b)("external_link");
					return i.a.createElement(se, {
						title: a,
						subtitle: t,
						cardTemplateColor: s,
						isSelected: p,
						isForSharing: g
					}, i.a.createElement("div", {
						className: ne.a.commentWrapper
					}, r ? i.a.createElement("div", {
						className: Object(m.a)(ne.a.image, ne.a.commentSubreddit, {
							[ne.a.orange]: !v,
							[ne.a.selected]: p
						})
					}, i.a.createElement(M.a, {
						src: r,
						className: Object(m.a)(ne.a.subredditImage, {
							[ne.a.isSelected]: p
						})
					})) : i.a.createElement("div", {
						className: Object(m.a)(ne.a.commentSubreddit, ne.a.asText, {
							[ne.a.selected]: p
						})
					}, i.a.createElement("div", {
						className: ne.a.text
					}, i.a.createElement("p", null, o))), i.a.createElement(oe.default, {
						className: Object(m.a)(ne.a.comment, {
							[ne.a.selected]: p
						}),
						to: l,
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => E(Object(K.a)(u, b))
					}, i.a.createElement("div", {
						className: ne.a.text
					}, i.a.createElement("p", null, n)), O && i.a.createElement("div", {
						className: Object(m.a)(ne.a.subredditFloating, ne.a.isTag)
					}, i.a.createElement(be, {
						deeplink: N,
						subredditName: O,
						size: "small",
						isRed: !0,
						subredditId: d
					})), !g && i.a.createElement(j, {
						className: ne.a.externalLinkButton
					}))))
				},
				ge = t("./src/reddit/actions/modal.ts"),
				Ee = t("./src/reddit/actions/notifications/index.ts"),
				fe = t("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				he = t("./src/reddit/actions/toaster.ts"),
				ve = t("./src/reddit/components/Settings/modalIds.ts"),
				_e = t("./src/reddit/models/Toast/index.ts");
			const {
				fbt: Oe
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var Ne;
			! function(e) {
				e[e.VERIFY_EMAIL = 0] = "VERIFY_EMAIL", e[e.TURN_ON_DAYLY_DIGEST = 1] = "TURN_ON_DAYLY_DIGEST", e[e.TURN_ON_DN = 2] = "TURN_ON_DN", e[e.DONE = 3] = "DONE"
			}(Ne || (Ne = {}));
			var je = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						cardTemplateColor: s,
						isEmailVerified: c,
						isDigestEnabled: n,
						subredditList: l
					},
					card: o,
					isSelected: u,
					isForSharing: b
				} = e;
				const p = Object(d.d)(),
					g = Object(f.a)(),
					E = Object(d.e)(e => {
						var a;
						return null === (a = e.user.account) || void 0 === a ? void 0 : a.email
					}),
					h = Object(d.e)(e => e.user.accountSettings.changeEmail.api.pending),
					[v, O] = Object(r.useState)(Ne.VERIFY_EMAIL),
					N = Object(r.useRef)(E),
					j = () => {
						Ke() ? O(Ne.DONE) : O(Ne.TURN_ON_DN)
					},
					k = () => {
						n ? j() : O(Ne.TURN_ON_DAYLY_DIGEST)
					};
				Object(r.useEffect)(() => {
					c ? k() : O(Ne.VERIFY_EMAIL)
				}, [o]), Object(r.useEffect)(() => {
					if (E !== N.current && v === Ne.VERIFY_EMAIL) {
						const e = Object(he.e)(Oe._("Email successfully updated!", null, {
							hk: "3iPlUp"
						}), _e.b.SuccessCommunityGreen);
						p(Object(he.f)(e)), k()
					}
				}, [E, v]), Object(r.useEffect)(() => {
					h && p(Object(ge.g)(ve.a))
				}, [h, p]);
				const C = async () => {
					await p(Object(Ee.requestBrowserNotificationPermissionPromptByUser)(ve.f)), Ke() && O(Ne.DONE), g(Object(K.g)())
				}, y = () => {
					p(Object(ge.h)(ve.a))
				}, S = () => {
					p(async (e, a) => {
						var t;
						await e(Object(fe.d)({
							isEnabled: !0,
							messageType: "EMAIL_DIGEST"
						})), !!(null === (t = a().user.notificationPrefs.pushSettingsLayout.rows.byId.EMAIL_DIGEST) || void 0 === t ? void 0 : t.isEnabled) && j()
					}), g(Object(K.f)())
				};
				return i.a.createElement(se, {
					title: a,
					subtitle: t,
					cardTemplateColor: s,
					isSelected: u,
					isForSharing: b
				}, i.a.createElement("div", {
					className: ne.a.subredditList
				}, l.map((e, a) => i.a.createElement("div", {
					key: e.subredditId,
					style: {
						transitionDelay: `${.25*a+.4}s`
					},
					className: Object(m.a)(ne.a.subreddit, {
						[ne.a.selected]: u
					})
				}, i.a.createElement(be, {
					key: e.subredditId,
					withAddButton: !0,
					deeplink: e.deeplink,
					subredditName: e.subredditName,
					isRed: s !== _.RED,
					size: "big",
					subredditId: e.subredditId
				})))), i.a.createElement("div", {
					className: ne.a.endText
				}, (() => {
					switch (v) {
						case Ne.TURN_ON_DN:
							return Oe._("And {=stay in the loop.}", [Oe._param("=stay in the loop.", i.a.createElement("span", {
								className: ne.a.asLink,
								onClick: C
							}, Oe._("stay in the loop.", null, {
								hk: "20YrIt"
							})))], {
								hk: "3rfO5L"
							});
						case Ne.VERIFY_EMAIL:
						case Ne.TURN_ON_DAYLY_DIGEST:
							return Oe._("And {=stay in the loop.}", [Oe._param("=stay in the loop.", i.a.createElement("span", {
								className: ne.a.asLink,
								onClick: v === Ne.VERIFY_EMAIL ? y : S
							}, Oe._("stay in the loop.", null, {
								hk: "20YrIt"
							})))], {
								hk: "3rfO5L"
							});
						case Ne.DONE:
							return Oe._("And {=stay in the loop.}", [Oe._param("=stay in the loop.", i.a.createElement("a", {
								href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
								className: ne.a.asLink,
								target: "_blank",
								rel: "noopener noreferrer",
								onClick: () => g(Object(K.b)())
							}, Oe._("stay in the loop.", null, {
								hk: "20YrIt"
							})))], {
								hk: "3ZBX4a"
							})
					}
				})()))
			};
			var ke = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						templateImageUrl: r,
						cardTemplateColor: s
					},
					isSelected: c,
					isForSharing: n
				} = e;
				const l = s === _.RED;
				return i.a.createElement(se, {
					title: a,
					subtitle: t,
					cardTemplateColor: s,
					isSelected: c,
					isForSharing: n
				}, i.a.createElement("div", {
					className: Object(m.a)(ne.a.image, ne.a.isCircle, {
						[ne.a.orange]: !l,
						[ne.a.isSelected]: c
					})
				}, i.a.createElement(M.a, {
					src: r,
					className: Object(m.a)(ne.a.fallbackStaticImage, ne.a.illustration, {
						[ne.a.isSelected]: c
					})
				})))
			};
			var Ce = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						templateImageUrl: s,
						cardTemplateColor: c
					},
					isSelected: n
				} = e;
				const l = c === _.RED,
					[o, d] = Object(r.useState)(!1);
				return Object(r.useEffect)(() => {
					setTimeout(() => {
						d(n)
					})
				}, [n]), i.a.createElement(se, {
					title: a,
					subtitle: t,
					cardTemplateColor: c,
					shouldHideShareButton: !0,
					isSelected: o,
					isInitialCard: !0
				}, i.a.createElement("div", {
					className: Object(m.a)(ne.a.image, ne.a.isCircle, ne.a.initialCard, {
						[ne.a.orange]: !l,
						[ne.a.isSelected]: o
					})
				}, i.a.createElement(M.a, {
					src: s,
					className: Object(m.a)(ne.a.fallbackStaticImage, ne.a.illustration, ne.a.initialCard, {
						[ne.a.isSelected]: o
					})
				})))
			};
			var ye = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						postImageUrl: r,
						cardTemplateColor: s,
						postDeeplink: c,
						subredditName: n,
						postTitle: l,
						subredditId: o,
						postId: d
					},
					isSelected: u,
					isForSharing: b
				} = e;
				const p = Object(f.a)(),
					g = s === _.RED,
					{
						subredditLink: E
					} = qe(c),
					v = Object(h.b)("external_link");
				return i.a.createElement(se, {
					title: a,
					subtitle: t,
					cardTemplateColor: s,
					isSelected: u,
					isForSharing: b
				}, i.a.createElement(oe.default, {
					className: Object(m.a)(ne.a.postWrapper, {
						[ne.a.selected]: u
					}),
					to: c,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => p(Object(K.c)(d))
				}, r ? i.a.createElement("div", {
					className: Object(m.a)(ne.a.image, ne.a.post, {
						[ne.a.orange]: !g,
						[ne.a.isSelected]: u
					})
				}, i.a.createElement(M.a, {
					src: r,
					className: ne.a.fallbackStaticImage
				}), i.a.createElement("div", {
					className: Object(m.a)(ne.a.subredditFloating, ne.a.isTag)
				}, i.a.createElement(be, {
					deeplink: E,
					subredditName: n,
					size: "small",
					isRed: !0,
					subredditId: o
				})), !b && i.a.createElement(v, {
					className: ne.a.externalLinkButton
				})) : i.a.createElement("div", {
					className: ne.a.post
				}, i.a.createElement("div", {
					className: ne.a.text
				}, i.a.createElement("p", null, l)), i.a.createElement("div", {
					className: Object(m.a)(ne.a.subredditFloating, ne.a.isTag)
				}, i.a.createElement(be, {
					deeplink: E,
					subredditName: n,
					size: "small",
					isRed: !0,
					subredditId: o
				})), !b && i.a.createElement(v, {
					className: ne.a.externalLinkButton
				}))))
			};
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			var Se = e => {
					let {
						card: {
							title: a,
							subtitle: t,
							cardTemplateColor: r,
							topHexList: c
						},
						isSelected: n,
						isForSharing: l
					} = e;
					const o = `${B.a.redditUrl}/r/place`,
						d = `${o}?fullscreen=true`,
						u = Object(h.b)("external_link"),
						b = c[0].toLowerCase() !== s.a.orangered;
					return i.a.createElement(se, {
						title: a,
						subtitle: t,
						cardTemplateColor: r,
						isSelected: n,
						isForSharing: l
					}, i.a.createElement(oe.default, {
						className: ne.a.rplaceWrapper,
						to: d,
						target: "_blank",
						rel: "noopener noreferrer"
					}, i.a.createElement("div", {
						className: Object(m.a)(ne.a.rplaceContainer, {
							[ne.a.selected]: n,
							[ne.a.forSharing]: l
						})
					}, 1 === c.length ? Array.from(Array(20).keys()).map((e, a) => i.a.createElement("div", {
						key: a,
						style: {
							backgroundColor: c[0]
						}
					})) : i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						style: {
							backgroundColor: c[0]
						}
					}), i.a.createElement("div", {
						style: {
							backgroundColor: c[0]
						}
					}), i.a.createElement("div", {
						style: {
							backgroundColor: c[0]
						}
					}), i.a.createElement("div", {
						style: {
							backgroundColor: (c.length, c[1])
						}
					}), i.a.createElement("div", {
						style: {
							backgroundColor: 3 === c.length ? c[2] : c[0]
						}
					}), i.a.createElement("div", {
						style: {
							backgroundColor: c[1]
						}
					}), i.a.createElement("div", {
						style: {
							backgroundColor: c[2]
						}
					}), i.a.createElement("div", {
						style: {
							backgroundColor: c[0]
						}
					}), i.a.createElement("div", {
						style: {
							backgroundColor: c[0]
						}
					}), i.a.createElement("div", {
						style: {
							backgroundColor: 3 === c.length ? c[1] : c[0]
						}
					}), i.a.createElement("div", {
						style: {
							backgroundColor: c[0]
						}
					}), i.a.createElement("div", {
						style: {
							backgroundColor: 3 === c.length ? c[1] : c[0]
						}
					}), i.a.createElement("div", {
						style: {
							backgroundColor: c[0]
						}
					}), i.a.createElement("div", {
						style: {
							backgroundColor: c[1]
						}
					}), i.a.createElement("div", {
						style: {
							backgroundColor: (c.length, c[1])
						}
					}), i.a.createElement("div", {
						style: {
							backgroundColor: 3 === c.length ? c[0] : c[1]
						}
					}), i.a.createElement("div", {
						style: {
							backgroundColor: c[0]
						}
					}), i.a.createElement("div", {
						style: {
							backgroundColor: c[1]
						}
					}), i.a.createElement("div", {
						style: {
							backgroundColor: c[2]
						}
					}), i.a.createElement("div", {
						style: {
							backgroundColor: c[2]
						}
					}))), !l && i.a.createElement(i.a.Fragment, null, i.a.createElement("img", {
						className: Object(m.a)(ne.a.canvas, {
							[ne.a.selected]: n
						}),
						src: `${B.a.assetPath}/img/recap/rplace_canvas.png`,
						alt: ""
					}), i.a.createElement("div", {
						className: Object(m.a)(ne.a.subredditFloating, ne.a.isTag, ne.a.subreddit, {
							[ne.a.selected]: n
						})
					}, i.a.createElement(be, {
						deeplink: o,
						subredditName: "place",
						size: "tiny",
						isRed: b,
						subredditId: "t5_2sxhs"
					})), i.a.createElement("span", {
						className: Object(m.a)(ne.a.externalLinkWrapper, {
							[ne.a.selected]: n
						})
					}, !l && i.a.createElement(u, {
						className: ne.a.icon
					})))))
				},
				Ie = t("./src/reddit/actions/snoovatarModal.ts"),
				xe = t("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Te = t("./src/reddit/icons/svgs/EditPencil/index.tsx");
			const {
				fbt: we
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var Re = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						cardTemplateColor: c,
						userAvatar: n,
						userName: l,
						userKarma: o,
						level: b,
						subredditListOptional: p,
						isPremium: g,
						topicImageUrl: E
					},
					isSelected: h,
					isForSharing: v
				} = e;
				const N = Object(d.d)(),
					j = Object(f.a)(),
					k = Object(r.useRef)(null),
					C = Object(r.useRef)(null),
					[y, S] = Object(r.useState)(""),
					I = Object(d.e)(e => e.recap.shouldHideAbilityCardUsername),
					x = Object(d.e)(e => e.recap.shouldHideAbilityCardAvatar),
					T = Object(d.e)(e => e.recap.shareCardWasOpened),
					w = c === _.WHITE || c === _.YELLOW,
					R = () => {
						v || (N(Object(u.b)()), j(Object(K.h)()))
					};
				return Object(r.useEffect)(() => {
					!h && T && R()
				}, [h]), i.a.createElement(se, {
					title: a,
					subtitle: t,
					cardTemplateColor: c,
					isForSharing: v,
					shouldHideInfo: !0,
					isForAbilityCard: !v
				}, i.a.createElement("div", {
					className: Object(m.a)(ne.a.visibilityWrapper, {
						[ne.a.selected]: h
					})
				}, i.a.createElement("div", {
					className: Object(m.a)(ne.a.abilityCardWrapper, {
						[ne.a.selected]: h,
						[ne.a.forSharing]: v
					})
				}, i.a.createElement("style", {
					ref: C
				}, `\n        ${y}\n        `), i.a.createElement("div", {
					id: T && v ? "abilityCardShareId" : "",
					className: Object(m.a)(ne.a.flippingWrapper, {
						[ne.a.flipped]: T,
						[ne.a.unflipped]: !T,
						[ne.a.forSharing]: v
					}),
					onClick: R
				}, i.a.createElement("div", {
					className: Object(m.a)(ne.a.frontCard, {
						[ne.a.selected]: h
					}),
					id: !T && v ? "abilityCardShareId" : ""
				}, i.a.createElement("img", {
					className: ne.a.cardBackground,
					src: `${B.a.assetPath}/img/recap/ability_card_front_side.png`,
					alt: ""
				}), i.a.createElement("img", {
					src: `${B.a.assetPath}/img/recap/3d_icon_question_mark 2.png`,
					alt: "",
					className: Object(m.a)(ne.a.cardIcon, {
						[ne.a.selected]: h
					})
				}), i.a.createElement("div", {
					className: Object(m.a)(ne.a.frontText, {
						[ne.a.selected]: h
					})
				}, i.a.createElement("div", {
					className: ne.a.frontMainText
				}, we._("What’s your secret Reddit ability?", null, {
					hk: "35uXbT"
				})), i.a.createElement("div", {
					className: ne.a.frontSecondaryText
				}, we._("Tap to reveal", null, {
					hk: "RdYjC"
				})))), i.a.createElement("div", {
					className: Object(m.a)(ne.a.backCard, {
						[ne.a.selected]: h && T
					})
				}, i.a.createElement("svg", {
					style: {
						visibility: "hidden",
						position: "absolute"
					},
					width: "0",
					height: "0",
					xmlns: "http://www.w3.org/2000/svg",
					version: "1.1"
				}, i.a.createElement("defs", null, i.a.createElement("filter", {
					id: "round"
				}, i.a.createElement("feGaussianBlur", {
					in: "SourceGraphic",
					stdDeviation: "2",
					result: "blur"
				}), i.a.createElement("feColorMatrix", {
					in: "blur",
					mode: "matrix",
					values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",
					result: "goo"
				}), i.a.createElement("feComposite", {
					in: "SourceGraphic",
					in2: "goo",
					operator: "atop"
				})))), i.a.createElement("div", {
					onMouseMove: e => {
						const a = k.current,
							t = C.current;
						if (!a || !t) return;
						const r = e.nativeEvent,
							i = [r.offsetX, r.offsetY];
						e.preventDefault();
						const s = i[0],
							c = i[1],
							n = a.clientHeight,
							l = a.clientWidth,
							o = 50 + (Math.abs(Math.floor(100 / l * s) - 100) - 50) / 1.5,
							d = 50 + (Math.abs(Math.floor(100 / n * c) - 100) - 50) / 1.5,
							m = `background-position: ${o}% ${d}%;`,
							u = `transform: rotateX(${(d-50)/2*-1}deg) rotateY(${(o-50)/1.5*.5}deg)`;
						b !== O.Common && S(`.${ne.a.card}:hover::before { ${m} }`), a.setAttribute("style", u)
					},
					onMouseLeave: e => {
						const a = k.current;
						a && (a.removeAttribute("style"), S(""))
					},
					ref: k,
					className: Object(m.a)(ne.a.card, {
						[ne.a.common]: b === O.Common,
						[ne.a.rare]: b === O.Rare,
						[ne.a.epic]: b === O.Epic,
						[ne.a.legendary]: b === O.Legendary,
						[ne.a.flipped]: T,
						[ne.a.shiny]: b !== O.Common
					})
				}, !v && i.a.createElement("div", {
					className: ne.a.editAvatarWrapper,
					onClick: e => {
						e.stopPropagation(), N(Object(Ie.b)({
							clickSource: "recap"
						})), j(Object(K.e)())
					}
				}, i.a.createElement(Te.a, {
					className: ne.a.editAvatar
				})), i.a.createElement("img", {
					className: ne.a.cardBackground,
					src: `${B.a.assetPath}/img/recap/${b.toLowerCase()}_ability_card.png`,
					alt: ""
				}), i.a.createElement("span", {
					className: ne.a.userName
				}, I ? we._("Redditor", null, {
					hk: "UOiBC"
				}) : l), i.a.createElement("img", {
					src: x ? "https://i.redd.it/snoovatar/avatars/184bcb77-f84f-4c04-94c5-bec0e209b4ba.png" : n,
					className: ne.a.abilityAvatar
				}), i.a.createElement("div", {
					className: ne.a.karma
				}, i.a.createElement("span", {
					className: ne.a.karmaValue
				}, o), we._("{=karma}", [we._param("=karma", i.a.createElement("span", {
					className: ne.a.karmaTitle
				}, we._("karma", null, {
					hk: "rtxTV"
				})))], {
					hk: "1vxzil"
				}), i.a.createElement("div", {
					className: Object(m.a)(ne.a.cardRarity, {
						[ne.a.rare]: b === O.Rare,
						[ne.a.epic]: b === O.Epic,
						[ne.a.legendary]: b === O.Legendary
					})
				}, b)), i.a.createElement("div", {
					className: ne.a.abilityWrapper
				}, i.a.createElement("div", {
					className: ne.a.ability
				}, i.a.createElement("span", null, a)), i.a.createElement("p", {
					className: ne.a.stats
				}, t), (null == p ? void 0 : p.length) && i.a.createElement("div", {
					className: ne.a.subreddits
				}, p.map(e => e ? i.a.createElement(be, {
					key: e.subredditId,
					className: ne.a.subreddit,
					deeplink: null == e ? void 0 : e.deeplink,
					subredditName: null == e ? void 0 : e.subredditName,
					isRed: !0,
					size: "micro",
					subredditId: e.subredditId
				}) : null))), i.a.createElement("img", {
					className: ne.a.topic,
					src: E
				}), g && i.a.createElement("img", {
					className: ne.a.premiumIcon,
					src: `${B.a.assetPath}/img/recap/premium.png`,
					alt: ""
				})))), !v && i.a.createElement("div", {
					className: ne.a.controls
				}, i.a.createElement("div", {
					className: Object(m.a)(ne.a.toggles, {
						[ne.a.visible]: T
					})
				}, i.a.createElement("div", {
					className: Object(m.a)(ne.a.hideName, {
						[ne.a.selected]: h
					})
				}, we._("{=Hide username}", [we._param("=Hide username", i.a.createElement("div", {
					className: Object(m.a)(ne.a.text, {
						[ne.a.black]: w
					})
				}, we._("Hide username", null, {
					hk: "2Q5Y03"
				})))], {
					hk: "3tRMJD"
				}), i.a.createElement(xe.a, {
					on: I,
					onToggle: () => {
						N(Object(u.g)()), !I && j(function() {
							throw new Error("Function not implemented.")
						}())
					},
					className: ne.a.toggleButton,
					activeColorOverride: s.a.orangered
				})), i.a.createElement("div", {
					className: Object(m.a)(ne.a.hideAvatar, {
						[ne.a.selected]: h
					})
				}, we._("{=Hide avatar}", [we._param("=Hide avatar", i.a.createElement("div", {
					className: Object(m.a)(ne.a.text, {
						[ne.a.black]: w
					})
				}, we._("Hide avatar", null, {
					hk: "2395yu"
				})))], {
					hk: "3Mkh3e"
				}), i.a.createElement(xe.a, {
					on: x,
					onToggle: () => {
						N(Object(u.f)()), !x && j(Object(K.i)())
					},
					className: ne.a.toggleButton,
					activeColorOverride: s.a.orangered
				}))), i.a.createElement(J, {
					isSelected: h,
					isForAbilityCard: !0
				})))))
			};
			var Fe = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						cardTemplateColor: r,
						subredditList: s,
						isSubscribed: c
					},
					isSelected: n,
					isForSharing: l
				} = e;
				return i.a.createElement(se, {
					title: a,
					subtitle: t,
					cardTemplateColor: r,
					isSelected: n,
					isForSharing: l
				}, i.a.createElement("div", {
					className: ne.a.subredditList
				}, s.map((e, a) => i.a.createElement("div", {
					key: e.subredditId,
					style: {
						transitionDelay: `${.25*a+.4}s`
					},
					className: Object(m.a)(ne.a.subreddit, {
						[ne.a.selected]: n
					})
				}, i.a.createElement(be, {
					withAddButton: !c,
					key: e.subredditId,
					deeplink: e.deeplink,
					subredditName: e.subredditName,
					isRed: r !== _.RED,
					size: "big",
					subredditId: e.subredditId
				})))))
			};
			var Ae = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						cardTemplateColor: r,
						topTopic: {
							topicImgUrl: s
						}
					},
					isSelected: c,
					isForSharing: n
				} = e;
				const l = r === _.RED;
				return i.a.createElement(se, {
					title: a,
					subtitle: t,
					cardTemplateColor: r,
					isSelected: c,
					isForSharing: n
				}, i.a.createElement("div", {
					className: Object(m.a)(ne.a.image, ne.a.isCircle, {
						[ne.a.orange]: !l,
						[ne.a.isSelected]: c
					})
				}, i.a.createElement(M.a, {
					src: s,
					className: Object(m.a)(ne.a.fallbackStaticImage, ne.a.small, {
						[ne.a.isSelected]: c
					})
				}), i.a.createElement("div", {
					className: Object(m.a)(ne.a.unitCircle, {
						[ne.a.selected]: c
					})
				}, "#1")))
			};
			var Le, De = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						templateImageUrl: r,
						cardTemplateColor: s,
						subredditName: c,
						deeplink: n,
						subredditId: l
					},
					isSelected: o,
					isForSharing: d
				} = e;
				const u = s === _.RED;
				return i.a.createElement(se, {
					title: a,
					subtitle: t,
					cardTemplateColor: s,
					isSelected: o,
					isForSharing: d
				}, i.a.createElement("div", {
					className: Object(m.a)(ne.a.image, ne.a.isCircle, {
						[ne.a.orange]: !u,
						[ne.a.isSelected]: o
					})
				}, i.a.createElement(M.a, {
					src: r,
					className: Object(m.a)(ne.a.fallbackStaticImage, ne.a.illustration, {
						[ne.a.isSelected]: o
					})
				}), i.a.createElement("div", {
					className: Object(m.a)(ne.a.subredditFloating, ne.a.animated, {
						[ne.a.selected]: o
					}, ne.a.isSubredditCard)
				}, i.a.createElement(be, {
					deeplink: n,
					subredditName: c,
					isLong: !0,
					size: "small",
					isRed: s === _.WHITE,
					subredditId: l
				}))))
			};
			! function(e) {
				e.WHITE = "#fff", e.MANGO_100 = "#fff8b8", e.MANGO_300 = "#ffd635", e.MANGO_500 = "#ffa800"
			}(Le || (Le = {}));
			const Be = {
				[_.WHITE]: [Le.MANGO_500, Le.MANGO_300, Le.MANGO_100],
				[_.YELLOW]: [Le.WHITE, Le.MANGO_300, Le.MANGO_500]
			};
			var Me, Pe = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						cardTemplateColor: r,
						subredditList: s
					},
					isSelected: c,
					isForSharing: n
				} = e;
				return i.a.createElement(se, {
					title: a,
					subtitle: t,
					cardTemplateColor: r,
					isSelected: c,
					isForSharing: n
				}, i.a.createElement("div", {
					className: ne.a.subredditList
				}, s.map((e, a) => i.a.createElement("div", {
					key: e.subredditId,
					className: Object(m.a)(ne.a.subredditBar, {
						[ne.a.selected]: c
					}),
					style: {
						width: `${c?Ue[a]:0}px`,
						backgroundColor: Be[r][a],
						transitionDelay: `${.25*a+.4}s`
					}
				}, i.a.createElement("div", {
					className: Object(m.a)(ne.a.time, {
						[ne.a.selected]: c
					}),
					style: {
						transitionDelay: `${.125*a+.5*s.length}s`
					}
				}, e.totalTimeOnSubreddit, i.a.createElement("div", {
					className: ne.a.unit
				}, e.timeUnit)), i.a.createElement("div", {
					style: {
						transitionDelay: `${.25*a+.8}s`
					},
					className: Object(m.a)(ne.a.subreddit, {
						[ne.a.selected]: c
					})
				}, i.a.createElement(be, {
					deeplink: e.deeplink,
					subredditName: e.subredditName,
					isRed: r !== _.RED,
					size: "tiny",
					subredditId: e.subredditId
				}))))))
			};
			! function(e) {
				e.WHITE = "#fff", e.MANGO_300 = "#ffd635", e.MANGO_500 = "#ffa800"
			}(Me || (Me = {}));
			const We = [Me.WHITE, Me.MANGO_300, Me.MANGO_500];
			var Ye = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						cardTemplateColor: r,
						topTopicsList: s
					},
					isSelected: c,
					isForSharing: n
				} = e;
				return i.a.createElement(se, {
					title: a,
					subtitle: t,
					cardTemplateColor: r,
					isSelected: c,
					isForSharing: n
				}, i.a.createElement("div", {
					className: ne.a.subredditList
				}, s.map((e, a) => i.a.createElement("div", {
					key: e.topicName,
					className: Object(m.a)(ne.a.subredditBar, {
						[ne.a.selected]: c
					}),
					style: {
						width: `${c?Ue[a]:0}px`,
						backgroundColor: We[a],
						transitionDelay: `${.25*a+.4}s`
					}
				}, i.a.createElement("div", {
					className: Object(m.a)(ne.a.time, ne.a.isTopic, {
						[ne.a.selected]: c
					}),
					style: {
						transitionDelay: `${.125*a+.5*s.length}s`
					}
				}, `#${a+1}`, i.a.createElement("div", {
					className: ne.a.unit
				}, e.topicName)), i.a.createElement("div", {
					className: Object(m.a)(ne.a.topicIcon, {
						[ne.a.selected]: c
					}),
					style: {
						transitionDelay: `${.25*a+.8}s`
					}
				}, i.a.createElement(M.a, {
					src: e.topicImgUrl,
					className: ne.a.topicImage
				}))))))
			};
			const {
				fbt: He
			} = t("./node_modules/fbt/lib/FbtPublic.js"), Ge = {
				[_.RED]: "#ff4500",
				[_.YELLOW]: "#fff8b8",
				[_.BLACK]: "#000",
				[_.WHITE]: "#fff"
			}, Ue = [434, 373, 212];
			var Ve;
			! function(e) {
				e.WHITE = "#fff", e.MANGO_100 = "#fff8b8", e.MANGO_300 = "#ffd635", e.MANGO_500 = "#ffa800"
			}(Ve || (Ve = {}));
			const ze = (e, a) => {
					const t = /(\*\*.*?\*\*)/g;
					return e.split(t).map((e, r) => t.test(e) ? i.a.createElement("span", {
						key: e + r,
						className: a
					}, e.replace(/\*/g, "")) : e)
				},
				Ze = e => {
					let {
						card: a,
						isSelected: t,
						isForSharing: r,
						className: s
					} = e;
					return i.a.createElement("div", {
						className: s
					}, " ", (() => a ? (e => e.__typename === y)(a) ? i.a.createElement(Ce, {
						card: a,
						isSelected: t
					}) : (e => e.__typename === C)(a) ? i.a.createElement(ke, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === w)(a) ? i.a.createElement(Fe, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === x)(a) ? i.a.createElement(De, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === S)(a) ? i.a.createElement(ye, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === j)(a) ? i.a.createElement(pe, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === T)(a) ? i.a.createElement(Pe, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === R)(a) ? i.a.createElement(le, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === F)(a) ? i.a.createElement(Ye, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === A)(a) ? i.a.createElement(Se, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === k)(a) ? i.a.createElement(je, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : D(a) ? i.a.createElement(Re, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === L)(a) ? i.a.createElement(Ae, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : i.a.createElement("div", null, a.title) : null)())
				},
				qe = e => {
					const a = e.match(/(\/r\/)(.+?)(\/.*)/i),
						t = null == a ? void 0 : a[2];
					return {
						subredditName: t,
						subredditLink: `/r/${t}/`
					}
				},
				Ke = () => Object(Z.a)() === q.a.Granted;
			var Xe = t("./src/reddit/selectors/activeModalId.ts"),
				Qe = t("./src/reddit/selectors/user.ts"),
				Je = t("./src/reddit/pages/Recap/Components/index.m.less"),
				$e = t.n(Je);
			var ea = () => {
					const e = Object(d.d)(),
						a = Object(f.a)(),
						s = Object(d.e)(e => e.recap.shouldShowShareModal),
						c = Object(d.e)(e => e.recap.isCardsLoading),
						l = Object(d.e)(e => e.recap.cardsLoadingError),
						v = Object(d.e)(e => e.recap.currentCardIndex),
						O = Object(d.e)(e => e.recap.cards),
						[j, k] = Object(r.useState)(!1),
						C = Object(d.e)(e => Object(Xe.b)(p.a.SNOOVATAR_MODAL)(e)),
						y = Object(d.e)(Qe.l),
						S = Math.ceil((v + 1) / 6),
						I = v - 6 * (S - 1),
						x = O.length > 6 && S > 1,
						T = 6 * (S - 1),
						w = T + 6,
						R = 6 * S < O.length,
						F = O.length && D(O[v]),
						A = O.length && (O[v].cardTemplateColor === _.WHITE || O[v].cardTemplateColor === _.YELLOW),
						L = Object(r.useCallback)(() => {
							e(Object(u.c)()), e(Object(u.a)())
						}, [e]);
					Object(r.useEffect)(() => {
						Object(u.d)(!0), y && Object(E.Sb)(null == y ? void 0 : y.id)
					}, [C, e, y, a]), Object(r.useEffect)(() => {
						a(Object(K.n)()), L()
					}, [L, a]), Object(r.useEffect)(() => {
						O.length && a(Object(K.m)())
					}, [O, v, a]);
					const B = Object(r.useRef)(o()((a, t, r) => {
							const i = t - 1;
							let s = r;
							(a instanceof WheelEvent && a.deltaY > 0 || a instanceof KeyboardEvent && a.code === b.b.ArrowDown) && (s = r + 1 <= i && r + 1 >= 0 ? r + 1 : r), (a instanceof WheelEvent && a.deltaY < 0 || a instanceof KeyboardEvent && a.code === b.b.ArrowUp) && (s = r - 1 <= i && r - 1 >= 0 ? r - 1 : r), e(Object(u.e)({
								index: s
							}))
						}, 2e3, {
							trailing: !1
						})),
						M = Object(r.useCallback)(e => {
							null !== e && O.length && (e.focus(), e.onwheel = e => B.current(e, O.length, v), e.onkeydown = e => B.current(e, O.length, v))
						}, [O, v]),
						P = i.a.useCallback(async () => {
							let e = document.getElementById("shareId");
							if (F && (e = document.getElementById("abilityCardShareId")), e) {
								k(!0);
								const a = await (() => t.e(4).then(t.bind(null, "./node_modules/html-to-image/es/index.js")))(),
									r = await a.getFontEmbedCSS(e),
									i = await a.toPng(e, {
										backgroundColor: F ? "transparent" : Ge[O[v].cardTemplateColor],
										canvasHeight: F ? 487 : 1080,
										canvasWidth: F ? 341 : 1920,
										style: {
											scale: "1"
										},
										fontEmbedCSS: r
									});
								if (i) {
									const e = document.createElement("a");
									e.download = `card_${O[v].id}.png`, e.href = i, e.click(), k(!1)
								}
							}
						}, [e, v]);
					return l ? i.a.createElement(Y, {
						onRetry: L
					}) : c ? i.a.createElement(U, null) : i.a.createElement(i.a.Fragment, null, O.length ? i.a.createElement("div", {
						ref: M,
						className: $e.a.cardsContainer,
						tabIndex: 0
					}, i.a.createElement("div", {
						className: $e.a.pager
					}, x && i.a.createElement("div", {
						className: Object(m.a)($e.a.nextDot, {
							[$e.a.black]: !!A
						})
					}), O.slice(T, w).map((e, a) => i.a.createElement("div", {
						key: a,
						className: Object(m.a)($e.a.progressDot, {
							[$e.a.active]: a === I,
							[$e.a.black]: !!A
						})
					})), R && i.a.createElement("div", {
						className: Object(m.a)($e.a.nextDot, {
							[$e.a.black]: !!A
						})
					})), i.a.createElement("div", {
						className: $e.a.wrapper,
						style: {
							top: `${100*-v}%`,
							backgroundColor: Ge[O[v].cardTemplateColor]
						}
					}, O.map((e, a) => i.a.createElement("div", {
						className: $e.a.card,
						key: e.id
					}, i.a.createElement(Ze, {
						card: e,
						isSelected: a === v
					})))), v < O.length - 1 && i.a.createElement(g.a, {
						onClick: () => {
							e(Object(u.e)({
								index: v + 1
							}))
						},
						priority: g.c.PlainLink,
						kind: g.b.Button,
						Icon: Object(h.b)("down"),
						key: v,
						className: Object(m.a)($e.a.downButton, {
							[$e.a.black]: !!A
						}),
						iconClassName: $e.a.downButtonIcon
					}), s && i.a.createElement(z, {
						onOverlayClick: () => (() => e(Object(u.h)()))(),
						withOverlay: !0
					}, i.a.createElement("div", {
						className: $e.a.modalWrapper
					}, i.a.createElement("div", {
						className: $e.a.title
					}, n.fbt._("Share", null, {
						hk: "2Y190R"
					})), i.a.createElement("div", {
						className: $e.a.shareWrapper,
						style: {
							backgroundColor: Ge[O[v].cardTemplateColor]
						}
					}, i.a.createElement("div", {
						className: $e.a.shareContainer,
						id: "shareId",
						style: {
							backgroundColor: Ge[O[v].cardTemplateColor]
						}
					}, i.a.createElement(Ze, {
						card: O[v],
						isSelected: !0,
						isForSharing: !0,
						className: $e.a.card
					}), !F && i.a.createElement("div", {
						className: $e.a.shareFooter
					}, i.a.createElement(N, {
						className: Object(m.a)($e.a.logo)
					}), i.a.createElement("span", {
						className: $e.a.text
					}, "2022")))), i.a.createElement("div", {
						className: $e.a.controls
					}, i.a.createElement("div", {
						className: $e.a.download
					}, i.a.createElement(g.a, {
						priority: g.c.PlainLink,
						kind: g.b.Button,
						className: Object(m.a)($e.a.shareButton),
						Icon: Object(h.b)("download"),
						iconClassName: Object(m.a)($e.a.shareIcon),
						onClick: P,
						size: g.d.XL,
						disabled: j
					}), i.a.createElement("div", {
						className: Object(m.a)($e.a.title, {
							[$e.a.downloadIndicator]: j
						})
					}, j ? n.fbt._("Downloading...", null, {
						hk: "37jEC2"
					}) : n.fbt._("Download", null, {
						hk: "3UONFz"
					}))))))) : null)
				},
				aa = t("./src/reddit/pages/Recap/index.m.less"),
				ta = t.n(aa);
			a.default = () => i.a.createElement(c.a, {
				content: i.a.createElement(ea, null),
				className: ta.a.content,
				backgroundColor: s.a.orangered
			})
		},
		"./src/redditGQL/operations/RegisterWebPushToken.json": function(e) {
			e.exports = JSON.parse('{"id":"197650c1946c"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Recap.5fe0b3501937c6658f07.js.map