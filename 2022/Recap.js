// https://www.redditstatic.com/desktop2x/Recap.9bc2792918057679d742.js
// Retrieved at 11/3/2022, 10:50:06 AM by Reddit Dataminer v1.0.0
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
				v = t("./src/reddit/helpers/tabBadging/index.ts"),
				h = t("./src/reddit/helpers/trackers/notifications.ts"),
				_ = t("./src/reddit/models/Toast/index.ts"),
				O = t("./src/reddit/selectors/activeModal.ts"),
				N = t("./src/reddit/selectors/activeModalId.ts"),
				j = t("./src/reddit/selectors/experiments/delayDnPermission.ts"),
				C = t("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				k = t("./src/reddit/constants/experiments.ts"),
				S = t("./src/reddit/helpers/chooseVariant/index.ts");
			const y = e => Object(S.c)(e, {
				experimentName: k.kc,
				experimentEligibilitySelector: S.a
			}) === k.Ud;
			var I = t("./src/reddit/selectors/meta.ts"),
				x = t("./src/reddit/selectors/user.ts");
			let w = !1;
			const T = async (e, a) => {
				const t = Object(x.Q)(e);
				if (w) return;
				if (w = !0, Object(b.a)(e) !== o.c.NotificationsSupported) return;
				await Object(d.a)();
				navigator.serviceWorker.addEventListener("message", r => {
					const i = r.data,
						c = i.command || i.type;
					if ("registerWithServiceWorker" === c) R(e);
					else if (c === v.a && t) {
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
					v2EventBoilerPlate: h.c(e)
				})
			}, L = function(e, a) {
				let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
				return async (r, i, s) => {
					const n = i(),
						d = Object(I.f)(n),
						m = y(n),
						u = !!Object(N.a)(n),
						b = Object(j.a)(n),
						p = Object(C.e)(n),
						g = Object(O.c)(E.a.NSFW_BLOCKING_MODAL_V2)(n);
					if (p || g) return;
					if (await Object(c.a)() || d) return;
					await T(n, r);
					h.l(n), await Object(l.b)(e, a, () => {
						m || b || u || r(Object(o.o)()), r(Object(o.n)()), h.j(n)
					}, (e, a) => {
						r(Object(o.l)()), r(A(a ? o.a.Denied : o.a.Closed)), e && (a ? h.e(n) : h.f(n)), t()
					}, e => {
						r(Object(o.m)()), r(F()), e && h.d(n), t()
					}, () => {
						r(Object(o.k)()), t()
					})
				}
			}, F = e => async (a, t, i) => {
				const s = t();
				try {
					switch (await Object(n.b)(i.gqlContext)) {
						case n.a.Success:
							Object(b.b)(o.a.Granted), h.m(s), e && a(Object(g.f)({
								kind: _.b.SuccessCommunity,
								text: r.fbt._("Changes saved", null, {
									hk: "wGH5U"
								})
							}));
							break;
						case n.a.FailedResponse:
							h.k(s, "registration_failed_generally");
							break;
						case n.a.FailedGqlReponse:
							h.k(s, "registration_failed_in_gql")
					}
				} catch (c) {
					h.k(s, "registration_failed_uncaught_exception"), console.error(c)
				}
			}, A = (e, a) => async t => {
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
						await a(L(!0, !0));
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
							e(A(o.a.Denied)), h.e(r);
							break;
						case o.a.Granted:
							e(F()), h.d(r);
							break;
						default:
							e(A(o.a.Default))
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
				return v
			})), t.d(a, "b", (function() {
				return h
			})), t.d(a, "i", (function() {
				return _
			})), t.d(a, "a", (function() {
				return O
			})), t.d(a, "n", (function() {
				return N
			})), t.d(a, "o", (function() {
				return j
			})), t.d(a, "h", (function() {
				return C
			})), t.d(a, "g", (function() {
				return k
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
				v = e => ({
					...f(e),
					notification: r.F(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				h = (e, a) => t => ({
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
				C = () => e => ({
					...r.o(e),
					action: "click",
					noun: "desktop_notification_permissions",
					source: "overlay"
				}),
				k = () => e => ({
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
		"./src/reddit/pages/Recap/Components/ShareModal/index.m.less": function(e, a, t) {
			e.exports = {
				modalWrapper: "_3h_ebhQEkw-Us2lwQ91gxQ",
				title: "_2mNheYQDR-psYJuBJhGdjD",
				titleCaption: "_2wAliDxxqCvp4UfQoC5j9b",
				titleButtonIcon: "_35q8zlYq2jA057U8u65_hR",
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
				animated: "_13DIB6QJZGZEPmWasjPWo6",
				card: "o06JQ6d-oXiCqpl6DOJKt",
				downButton: "_26595aKEasiROJPZzGsZ-0",
				fadeUp: "_378OfjACgQdkjjeWY8tTut",
				downButtonIcon: "_13O7BZDC0K1kA8PAHXxPus"
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
				o = t("./node_modules/lodash/throttle.js"),
				d = t.n(o),
				m = t("./node_modules/react-redux/es/index.js"),
				u = t("./src/lib/classNames/index.ts"),
				b = t("./src/reddit/actions/recap/index.ts"),
				p = t("./src/reddit/constants/keycodes.ts"),
				g = t("./src/reddit/constants/modals.ts"),
				E = t("./src/reddit/controls/Button/index.tsx"),
				f = t("./src/reddit/helpers/localStorage/index.ts"),
				v = t("./src/reddit/helpers/trackers/recap.ts"),
				h = t("./src/reddit/hooks/useTracking.ts"),
				_ = t("./src/reddit/icons/fonts/index.tsx");
			! function(e) {
				e.YELLOW = "YELLOW", e.WHITE = "WHITE", e.RED = "RED", e.BLACK = "BLACK"
			}(r || (r = {})),
			function(e) {
				e.Common = "COMMON", e.Rare = "RARE", e.Epic = "EPIC", e.Legendary = "LEGENDARY"
			}(i || (i = {}));
			const O = "PersonalizedYearInReviewCommentCard",
				N = "PersonalizedYearInReviewEndCard",
				j = "PersonalizedYearInReviewGenericCard",
				C = "PersonalizedYearInReviewIntroCard",
				k = "PersonalizedYearInReviewPostCard",
				S = "PersonalizedYearInReviewShareCard",
				y = "PersonalizedYearInReviewSubredditCard",
				I = "PersonalizedYearInReviewSubredditListCard",
				x = "PersonalizedYearInReviewSingleStatSubredditListCard",
				w = "PersonalizedYearInReviewAvatarCard",
				T = "PersonalizedYearInReviewTopicListCard",
				R = "PersonalizedYearInReviewRPlaceTileListCard",
				L = "PersonalizedYearInReviewSingleTopicCard",
				F = e => e.__typename === S;
			var A = t("./src/config.ts"),
				D = t("./node_modules/fbt/lib/FbtPublic.js"),
				B = t("./src/reddit/components/ImageWithFallback/index.tsx");

			function M() {
				return (M = Object.assign || function(e) {
					for (var a = 1; a < arguments.length; a++) {
						var t = arguments[a];
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
					}
					return e
				}).apply(this, arguments)
			}
			var P = e => c.a.createElement("svg", M({}, e, {
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
				W = t("./src/reddit/pages/Recap/Components/ErrorScreen/index.m.less"),
				Y = t.n(W);
			var H = e => {
					let {
						onRetry: a
					} = e;
					return c.a.createElement("div", {
						className: Y.a.wrapper
					}, c.a.createElement("div", {
						className: Object(u.a)(Y.a.image, Y.a.isCircle)
					}, c.a.createElement(B.a, {
						src: `${A.a.assetPath}/img/recap/key_art_recap_2022.png`,
						className: Object(u.a)(Y.a.fallbackStaticImage)
					})), c.a.createElement("div", {
						className: Y.a.info
					}, c.a.createElement(P, {
						className: Y.a.logo
					}), c.a.createElement("p", {
						className: Y.a.title
					}, D.fbt._("WTF?", null, {
						hk: "exzlX"
					})), c.a.createElement("p", {
						className: Y.a.subtitle
					}, D.fbt._("Something went wrong. Try that again.", null, {
						hk: "fyv6n"
					})), c.a.createElement(E.t, {
						className: Object(u.a)(Y.a.retryButton),
						onClick: a
					}, D.fbt._("Retry", null, {
						hk: "2NAMZ4"
					}))))
				},
				U = t("./src/reddit/pages/Recap/Components/LoadingIcon/index.m.less"),
				G = t.n(U);
			var z = () => c.a.createElement("div", {
					className: G.a.circle
				}, c.a.createElement("img", {
					className: G.a.image,
					src: `${A.a.assetPath}/img/recap/InfiniteLoad_4.gif`
				})),
				V = t("./src/higherOrderComponents/asModal/index.tsx"),
				Z = t("./src/lib/notifications/index.ts"),
				q = t("./src/lib/notifications/constants.ts"),
				K = t("./src/reddit/pages/Recap/Components/ShareButton/index.m.less"),
				Q = t.n(K);
			var X = e => {
					let {
						isSelected: a,
						isForAbilityCard: t,
						isVisible: r,
						isRedTemplate: i,
						isInitialCard: s
					} = e;
					const n = Object(m.d)(),
						l = Object(h.a)();
					return c.a.createElement("div", {
						className: Object(u.a)(Q.a.shareContainer, {
							[Q.a.selected]: a,
							[Q.a.forAbility]: t,
							[Q.a.visible]: r,
							[Q.a.initialCard]: s
						})
					}, c.a.createElement(E.t, {
						className: Object(u.a)(Q.a.shareButton, {
							[Q.a.orange]: !i
						}),
						Icon: Object(_.b)("share_ios"),
						iconClassName: Object(u.a)(Q.a.shareIcon, {
							[Q.a.white]: !i
						}),
						onClick: () => {
							n(Object(b.h)()), l(Object(v.k)())
						}
					}, D.fbt._("Share", null, {
						hk: "1q5t1q"
					})))
				},
				J = t("./src/reddit/pages/Recap/Components/Info/index.m.less"),
				$ = t.n(J);
			const {
				fbt: ee
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var ae = e => {
					let {
						title: a,
						subtitle: t,
						cardTemplateColor: i,
						subText: s,
						shouldHideShareButton: n,
						isSelected: l,
						isForSharing: o,
						isInitialCard: d,
						isEndCard: m
					} = e;
					const b = i === r.RED,
						p = i === r.BLACK,
						g = i === r.WHITE;
					return c.a.createElement("div", {
						className: Object(u.a)($.a.info, {
							[$.a.black]: !b && !p,
							[$.a.selected]: l,
							[$.a.initialCard]: d
						})
					}, !o && c.a.createElement(P, {
						className: Object(u.a)($.a.logo, {
							[$.a.white]: g,
							[$.a.selected]: l
						})
					}), c.a.createElement("p", {
						className: Object(u.a)($.a.title, {
							[$.a.selected]: l
						})
					}, Ve(a, Object(u.a)($.a.value, {
						[$.a.orange]: !b
					}))), c.a.createElement("p", {
						className: Object(u.a)($.a.subtitle, {
							[$.a.selected]: l
						})
					}, m ? s : t), !n && !o && c.a.createElement(X, {
						isSelected: l,
						isRedTemplate: b,
						isInitialCard: d
					}))
				},
				te = t("./src/reddit/pages/Recap/Components/Card/index.m.less"),
				re = t.n(te);
			var ie = e => {
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
					const [p, g] = c.a.Children.toArray(i);
					return c.a.createElement("div", {
						className: Object(u.a)(re.a.wrapper, {
							[re.a.forAbility]: d,
							[re.a.forSharing]: l
						})
					}, p, !o && c.a.createElement(ae, {
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
				se = t("./src/reddit/pages/Recap/CardTemplates/index.m.less"),
				ce = t.n(se);
			var ne = e => {
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
					return c.a.createElement(ie, {
						title: a,
						subtitle: t,
						cardTemplateColor: r,
						isSelected: n,
						isForSharing: l
					}, c.a.createElement("div", {
						className: ce.a.avatarsWrapper
					}, (null == i ? void 0 : i.length) && s.length ? c.a.createElement("div", {
						className: Object(u.a)(ce.a.avatars, {
							[ce.a.selected]: n
						})
					}, c.a.createElement("div", {
						className: ce.a.avatar,
						style: {
							transitionDelay: ".65s"
						}
					}, c.a.createElement(B.a, {
						src: i,
						className: Object(u.a)(ce.a.fallbackStaticImage, {
							[ce.a.isSelected]: n
						})
					})), c.a.createElement("div", {
						className: ce.a.avatar
					}, c.a.createElement(B.a, {
						src: s,
						className: Object(u.a)(ce.a.fallbackStaticImage, {
							[ce.a.isSelected]: n
						}),
						style: {
							transitionDelay: ".85s"
						}
					}))) : c.a.createElement("div", {
						className: Object(u.a)(ce.a.collectibleAvatar, {
							[ce.a.selected]: n
						})
					}, c.a.createElement(B.a, {
						src: s,
						className: Object(u.a)(ce.a.fallbackStaticImage, {
							[ce.a.isSelected]: n
						})
					}))))
				},
				le = t("./src/reddit/controls/InternalLink/index.tsx"),
				oe = t("./src/reddit/actions/subscription/index.ts"),
				de = t("./src/reddit/pages/Recap/Components/Subreddit/index.m.less"),
				me = t.n(de);
			var ue = e => {
				let {
					deeplink: a,
					subredditName: t,
					className: r,
					isLong: i,
					isRed: n,
					size: l,
					withAddButton: o,
					subredditId: d,
					subscribed: b
				} = e;
				const p = Object(m.d)(),
					g = Object(h.a)(),
					[f, O] = Object(s.useState)(!!b);
				return c.a.createElement("div", {
					className: me.a.subredditWrapper
				}, c.a.createElement("div", {
					onClick: e => e.stopPropagation(),
					className: Object(u.a)(me.a.container, r, {
						[me.a.long]: i,
						[me.a.big]: "big" === l,
						[me.a.small]: "small" === l,
						[me.a.tiny]: "tiny" === l,
						[me.a.micro]: "micro" === l,
						[me.a.red]: n
					})
				}, o && c.a.createElement(E.t, {
					Icon: Object(_.b)(f ? "joined_fill" : "join"),
					size: E.d.S,
					priority: E.c.PlainLink,
					className: me.a.addButton,
					iconClassName: Object(u.a)(me.a.icon, {
						[me.a.white]: n
					}),
					onClick: e => (e.stopPropagation(), ((e, a) => {
						p(async t => {
							const r = await t(Object(oe.d)([{
								name: e,
								type: "subreddit"
							}], !a));
							g(Object(v.l)(!a, e, d)), r && O(!f)
						})
					})(t, f))
				}), c.a.createElement(le.default, {
					to: a,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => g(Object(v.d)(d)),
					className: Object(u.a)(me.a.subreddit, {
						[me.a.red]: n,
						[me.a.big]: "big" === l,
						[me.a.small]: "small" === l,
						[me.a.tiny]: "tiny" === l,
						[me.a.micro]: "micro" === l,
						[me.a.withButton]: o
					})
				}, c.a.createElement("div", {
					className: me.a.text
				}, c.a.createElement("span", {
					className: me.a.subredditPrefix
				}, "r/"), t))))
			};
			var be = e => {
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
							postId: p
						},
						isSelected: g,
						isForSharing: E
					} = e;
					const f = Object(h.a)(),
						O = s === r.RED,
						{
							subredditName: N,
							subredditLink: j
						} = qe(n),
						C = Object(_.b)("external_link");
					return c.a.createElement(ie, {
						title: a,
						subtitle: t,
						cardTemplateColor: s,
						isSelected: g,
						isForSharing: E
					}, c.a.createElement("div", {
						className: ce.a.commentWrapper
					}, i ? c.a.createElement("div", {
						className: Object(u.a)(ce.a.image, ce.a.commentSubreddit, {
							[ce.a.orange]: !O,
							[ce.a.selected]: g
						})
					}, c.a.createElement(B.a, {
						src: i,
						className: Object(u.a)(ce.a.subredditImage, {
							[ce.a.isSelected]: g
						})
					})) : c.a.createElement("div", {
						className: Object(u.a)(ce.a.commentSubreddit, ce.a.asText, {
							[ce.a.selected]: g
						})
					}, c.a.createElement("div", {
						className: ce.a.text
					}, c.a.createElement("p", null, d))), c.a.createElement(le.default, {
						className: Object(u.a)(ce.a.comment, {
							[ce.a.selected]: g
						}),
						to: o,
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => f(Object(v.a)(b, p))
					}, c.a.createElement("div", {
						className: ce.a.text
					}, c.a.createElement("p", null, l)), N && c.a.createElement("div", {
						className: Object(u.a)(ce.a.subredditFloating, ce.a.isTag)
					}, c.a.createElement(ue, {
						deeplink: j,
						subredditName: N,
						size: "small",
						isRed: !0,
						subredditId: m
					})), !E && c.a.createElement(C, {
						className: ce.a.externalLinkButton
					}))))
				},
				pe = t("./node_modules/react-router-redux/es/index.js"),
				ge = t("./src/reddit/actions/modal.ts"),
				Ee = t("./src/reddit/actions/notifications/index.ts"),
				fe = t("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				ve = t("./src/reddit/actions/toaster.ts"),
				he = t("./src/reddit/components/Settings/modalIds.ts"),
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
						cardTemplateColor: i,
						isEmailVerified: n,
						isDigestEnabled: l,
						subredditList: o
					},
					card: d,
					isSelected: b,
					isForSharing: p
				} = e;
				const g = Object(m.d)(),
					E = Object(h.a)(),
					f = Object(m.e)(e => {
						var a;
						return null === (a = e.user.account) || void 0 === a ? void 0 : a.email
					}),
					_ = Object(m.e)(e => e.user.accountSettings.changeEmail.api.pending),
					[O, N] = Object(s.useState)(Ne.VERIFY_EMAIL),
					j = Object(s.useRef)(f),
					C = () => {
						Ke() ? N(Ne.DONE) : N(Ne.TURN_ON_DN)
					},
					k = () => {
						l ? C() : N(Ne.TURN_ON_DAYLY_DIGEST)
					};
				Object(s.useEffect)(() => {
					n ? k() : N(Ne.VERIFY_EMAIL)
				}, [d]), Object(s.useEffect)(() => {
					if (f !== j.current && O === Ne.VERIFY_EMAIL) {
						const e = Object(ve.e)(Oe._("Email successfully updated!", null, {
							hk: "3iPlUp"
						}), _e.b.SuccessCommunityGreen);
						g(Object(ve.f)(e)), k()
					}
				}, [f, O]), Object(s.useEffect)(() => {
					_ && g(Object(ge.g)(he.a))
				}, [_, g]);
				const S = async () => {
					await g(Object(Ee.requestBrowserNotificationPermissionPromptByUser)(he.f)), Ke() && N(Ne.DONE), E(Object(v.g)())
				}, y = () => {
					g(Object(ge.h)(he.a))
				}, I = () => {
					g(async (e, a) => {
						var t;
						await e(Object(fe.d)({
							isEnabled: !0,
							messageType: "EMAIL_DIGEST"
						})), !!(null === (t = a().user.notificationPrefs.pushSettingsLayout.rows.byId.EMAIL_DIGEST) || void 0 === t ? void 0 : t.isEnabled) && C()
					}), E(Object(v.f)())
				};
				return c.a.createElement(ie, {
					title: a,
					subtitle: t,
					cardTemplateColor: i,
					isSelected: b,
					isForSharing: p,
					isEndCard: !0
				}, c.a.createElement("div", {
					className: ce.a.subredditList
				}, o.map((e, a) => c.a.createElement("div", {
					key: e.subredditId,
					style: {
						transitionDelay: `${.25*a+.4}s`
					},
					className: Object(u.a)(ce.a.subreddit, {
						[ce.a.selected]: b
					})
				}, c.a.createElement(ue, {
					key: e.subredditId,
					withAddButton: !0,
					deeplink: e.deeplink,
					subredditName: e.subredditName,
					isRed: i !== r.RED,
					size: "big",
					subredditId: e.subredditId,
					subscribed: e.isSubscribed
				})))), c.a.createElement("span", {
					className: ce.a.endText
				}, (() => {
					switch (O) {
						case Ne.TURN_ON_DN:
							return Ve(t, ce.a.asLink, S);
						case Ne.VERIFY_EMAIL:
						case Ne.TURN_ON_DAYLY_DIGEST:
							return Ve(t, ce.a.asLink, O === Ne.VERIFY_EMAIL ? y : I);
						case Ne.DONE:
							return Ve(t, ce.a.asLink, () => {
								g(Object(pe.b)("/r/recap")), E(Object(v.b)())
							})
					}
				})()))
			};
			var Ce = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						templateImageUrl: i,
						cardTemplateColor: s,
						backgroundImageUrl: n
					},
					isSelected: l,
					isForSharing: o
				} = e;
				const d = s === r.RED;
				return c.a.createElement(ie, {
					title: a,
					subtitle: t,
					cardTemplateColor: s,
					isSelected: l,
					isForSharing: o
				}, c.a.createElement("div", {
					className: Object(u.a)(ce.a.image, ce.a.isCircle, {
						[ce.a.orange]: !d,
						[ce.a.isSelected]: l
					}),
					style: {
						backgroundImage: `url(${n})`
					}
				}, c.a.createElement(B.a, {
					src: i,
					className: Object(u.a)(ce.a.fallbackStaticImage, ce.a.illustration, {
						[ce.a.isSelected]: l
					})
				})))
			};
			var ke = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						templateImageUrl: i,
						cardTemplateColor: n,
						backgroundImageUrl: l
					},
					isSelected: o
				} = e;
				const d = n === r.RED,
					[m, b] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => {
					setTimeout(() => {
						b(o)
					})
				}, [o]), c.a.createElement(ie, {
					title: a,
					subtitle: t,
					cardTemplateColor: n,
					shouldHideShareButton: !0,
					isSelected: m,
					isInitialCard: !0
				}, c.a.createElement("div", {
					className: Object(u.a)(ce.a.image, ce.a.isCircle, ce.a.initialCard, {
						[ce.a.orange]: !d,
						[ce.a.isSelected]: m
					}),
					style: {
						backgroundImage: `url(${l})`
					}
				}, c.a.createElement(B.a, {
					src: i,
					className: Object(u.a)(ce.a.fallbackStaticImage, ce.a.illustration, ce.a.initialCard, {
						[ce.a.isSelected]: m
					})
				})))
			};
			var Se = e => {
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
					isForSharing: p
				} = e;
				const g = Object(h.a)(),
					E = s === r.RED,
					{
						subredditLink: f
					} = qe(n),
					O = Object(_.b)("external_link");
				return c.a.createElement(ie, {
					title: a,
					subtitle: t,
					cardTemplateColor: s,
					isSelected: b,
					isForSharing: p
				}, c.a.createElement(le.default, {
					className: Object(u.a)(ce.a.postWrapper, {
						[ce.a.selected]: b
					}),
					to: n,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => g(Object(v.c)(m))
				}, i ? c.a.createElement("div", {
					className: Object(u.a)(ce.a.image, ce.a.post, {
						[ce.a.orange]: !E,
						[ce.a.isSelected]: b
					})
				}, c.a.createElement(B.a, {
					src: i,
					className: ce.a.fallbackStaticImage
				}), c.a.createElement("div", {
					className: Object(u.a)(ce.a.subredditFloating, ce.a.isTag)
				}, c.a.createElement(ue, {
					deeplink: f,
					subredditName: l,
					size: "small",
					isRed: !0,
					subredditId: d
				})), !p && c.a.createElement(O, {
					className: ce.a.externalLinkButton
				})) : c.a.createElement("div", {
					className: ce.a.post
				}, c.a.createElement("div", {
					className: ce.a.text
				}, c.a.createElement("p", null, o)), c.a.createElement("div", {
					className: Object(u.a)(ce.a.subredditFloating, ce.a.isTag)
				}, c.a.createElement(ue, {
					deeplink: f,
					subredditName: l,
					size: "small",
					isRed: !0,
					subredditId: d
				})), !p && c.a.createElement(O, {
					className: ce.a.externalLinkButton
				}))))
			};
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			var ye = e => {
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
					const o = `${A.a.redditUrl}/r/place`,
						d = `${o}?fullscreen=true`,
						m = Object(_.b)("external_link"),
						b = i[0].toLowerCase() !== n.a.orangered;
					return c.a.createElement(ie, {
						title: a,
						subtitle: t,
						cardTemplateColor: r,
						isSelected: s,
						isForSharing: l
					}, c.a.createElement(le.default, {
						className: ce.a.rplaceWrapper,
						to: d,
						target: "_blank",
						rel: "noopener noreferrer"
					}, c.a.createElement("div", {
						className: Object(u.a)(ce.a.rplaceContainer, {
							[ce.a.selected]: s,
							[ce.a.forSharing]: l
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
					}))), !l && c.a.createElement(c.a.Fragment, null, c.a.createElement("img", {
						className: Object(u.a)(ce.a.canvas, {
							[ce.a.selected]: s
						}),
						src: `${A.a.assetPath}/img/recap/rplace_canvas.png`,
						alt: ""
					}), c.a.createElement("div", {
						className: Object(u.a)(ce.a.subredditFloating, ce.a.isTag, ce.a.subreddit, {
							[ce.a.selected]: s
						})
					}, c.a.createElement(ue, {
						deeplink: o,
						subredditName: "place",
						size: "tiny",
						isRed: b,
						subredditId: "t5_2sxhs"
					})), c.a.createElement("span", {
						className: Object(u.a)(ce.a.externalLinkWrapper, {
							[ce.a.selected]: s
						})
					}, !l && c.a.createElement(m, {
						className: ce.a.icon
					})))))
				},
				Ie = t("./src/reddit/actions/snoovatarModal.ts"),
				xe = t("./src/reddit/controls/ToggleSwitch/index.tsx"),
				we = t("./src/reddit/icons/svgs/EditPencil/index.tsx");
			const {
				fbt: Te
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var Re = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						cardTemplateColor: l,
						userAvatar: o,
						userName: d,
						userKarma: p,
						level: g,
						subredditListOptional: E,
						isPremium: f,
						topicImageUrl: _
					},
					isSelected: O,
					isForSharing: N
				} = e;
				const j = Object(m.d)(),
					C = Object(h.a)(),
					k = Object(s.useRef)(null),
					S = Object(s.useRef)(null),
					[y, I] = Object(s.useState)(""),
					x = Object(m.e)(e => e.recap.shouldHideAbilityCardUsername),
					w = Object(m.e)(e => e.recap.shouldHideAbilityCardAvatar),
					T = Object(m.e)(e => e.recap.shareCardWasOpened),
					R = l === r.WHITE || l === r.YELLOW,
					L = () => {
						N || (j(Object(b.b)()), C(Object(v.h)()))
					};
				return Object(s.useEffect)(() => {
					!O && T && L()
				}, [O]), c.a.createElement(ie, {
					title: a,
					subtitle: t,
					cardTemplateColor: l,
					isForSharing: N,
					shouldHideInfo: !0,
					isForAbilityCard: !N
				}, c.a.createElement("div", {
					className: Object(u.a)(ce.a.visibilityWrapper, {
						[ce.a.selected]: O
					})
				}, c.a.createElement("div", {
					className: Object(u.a)(ce.a.abilityCardWrapper, {
						[ce.a.selected]: O,
						[ce.a.forSharing]: N
					})
				}, c.a.createElement("style", {
					ref: S
				}, `\n        ${y}\n        `), c.a.createElement("div", {
					id: T && N ? "abilityCardShareId" : "",
					className: Object(u.a)(ce.a.flippingWrapper, {
						[ce.a.flipped]: T,
						[ce.a.unflipped]: !T,
						[ce.a.forSharing]: N
					}),
					onClick: L
				}, c.a.createElement("div", {
					className: Object(u.a)(ce.a.frontCard, {
						[ce.a.selected]: O
					}),
					id: !T && N ? "abilityCardShareId" : ""
				}, c.a.createElement("img", {
					className: ce.a.cardBackground,
					src: `${A.a.assetPath}/img/recap/ability_card_front_side.png`,
					alt: ""
				}), c.a.createElement("img", {
					src: `${A.a.assetPath}/img/recap/3d_icon_question_mark 2.png`,
					alt: "",
					className: Object(u.a)(ce.a.cardIcon, {
						[ce.a.selected]: O
					})
				}), c.a.createElement("div", {
					className: Object(u.a)(ce.a.frontText, {
						[ce.a.selected]: O
					})
				}, c.a.createElement("div", {
					className: ce.a.frontMainText
				}, Te._("What’s your secret Reddit ability?", null, {
					hk: "35uXbT"
				})), c.a.createElement("div", {
					className: ce.a.frontSecondaryText
				}, Te._("Tap to reveal", null, {
					hk: "RdYjC"
				})))), c.a.createElement("div", {
					className: Object(u.a)(ce.a.backCard, {
						[ce.a.selected]: O && T
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
						const a = k.current,
							t = S.current;
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
							u = `background-position: ${d}% ${m}%;`,
							b = `transform: rotateX(${(m-50)/2*-1}deg) rotateY(${(d-50)/1.5*.5}deg)`;
						g !== i.Common && I(`.${ce.a.card}:hover::before { ${u} }`), a.setAttribute("style", b)
					},
					onMouseLeave: e => {
						const a = k.current;
						a && (a.removeAttribute("style"), I(""))
					},
					ref: k,
					className: Object(u.a)(ce.a.card, {
						[ce.a.common]: g === i.Common,
						[ce.a.rare]: g === i.Rare,
						[ce.a.epic]: g === i.Epic,
						[ce.a.legendary]: g === i.Legendary,
						[ce.a.flipped]: T,
						[ce.a.shiny]: g !== i.Common
					})
				}, !N && c.a.createElement("div", {
					className: ce.a.editAvatarWrapper,
					onClick: e => {
						e.stopPropagation(), j(Object(Ie.b)({
							clickSource: "recap"
						})), C(Object(v.e)())
					}
				}, c.a.createElement(we.a, {
					className: ce.a.editAvatar
				})), c.a.createElement("img", {
					className: ce.a.cardBackground,
					src: `${A.a.assetPath}/img/recap/${g.toLowerCase()}_ability_card.png`,
					alt: ""
				}), c.a.createElement("span", {
					className: ce.a.userName
				}, x ? Te._("Redditor", null, {
					hk: "UOiBC"
				}) : d), c.a.createElement("img", {
					src: w ? "https://i.redd.it/snoovatar/avatars/184bcb77-f84f-4c04-94c5-bec0e209b4ba.png" : o,
					className: ce.a.abilityAvatar
				}), c.a.createElement("div", {
					className: ce.a.karma
				}, c.a.createElement("span", {
					className: ce.a.karmaValue
				}, p), Te._("{=karma}", [Te._param("=karma", c.a.createElement("span", {
					className: ce.a.karmaTitle
				}, Te._("karma", null, {
					hk: "rtxTV"
				})))], {
					hk: "1vxzil"
				}), c.a.createElement("div", {
					className: Object(u.a)(ce.a.cardRarity, {
						[ce.a.rare]: g === i.Rare,
						[ce.a.epic]: g === i.Epic,
						[ce.a.legendary]: g === i.Legendary
					})
				}, g)), c.a.createElement("div", {
					className: ce.a.abilityWrapper
				}, c.a.createElement("div", {
					className: ce.a.ability
				}, c.a.createElement("span", null, a)), c.a.createElement("p", {
					className: ce.a.stats
				}, t), c.a.createElement("div", {
					className: ce.a.subreddits
				}, (null == E ? void 0 : E.length) ? E.map(e => e ? c.a.createElement(ue, {
					key: e.subredditId,
					className: ce.a.subreddit,
					deeplink: null == e ? void 0 : e.deeplink,
					subredditName: null == e ? void 0 : e.subredditName,
					isRed: !0,
					size: "micro",
					subredditId: e.subredditId
				}) : null) : null)), c.a.createElement("img", {
					className: ce.a.topic,
					src: _
				}), f && c.a.createElement("img", {
					className: ce.a.premiumIcon,
					src: `${A.a.assetPath}/img/recap/premium.png`,
					alt: ""
				})))), !N && c.a.createElement("div", {
					className: ce.a.controls
				}, c.a.createElement("div", {
					className: Object(u.a)(ce.a.toggles, {
						[ce.a.visible]: T
					})
				}, c.a.createElement("div", {
					className: Object(u.a)(ce.a.hideName, {
						[ce.a.selected]: O
					})
				}, Te._("{=Hide username}", [Te._param("=Hide username", c.a.createElement("div", {
					className: Object(u.a)(ce.a.text, {
						[ce.a.black]: R
					})
				}, Te._("Hide username", null, {
					hk: "2Q5Y03"
				})))], {
					hk: "3tRMJD"
				}), c.a.createElement(xe.a, {
					on: x,
					onToggle: () => {
						j(Object(b.g)()), !x && C(function() {
							throw new Error("Function not implemented.")
						}())
					},
					className: ce.a.toggleButton,
					activeColorOverride: n.a.orangered
				})), c.a.createElement("div", {
					className: Object(u.a)(ce.a.hideAvatar, {
						[ce.a.selected]: O
					})
				}, Te._("{=Hide avatar}", [Te._param("=Hide avatar", c.a.createElement("div", {
					className: Object(u.a)(ce.a.text, {
						[ce.a.black]: R
					})
				}, Te._("Hide avatar", null, {
					hk: "2395yu"
				})))], {
					hk: "3Mkh3e"
				}), c.a.createElement(xe.a, {
					on: w,
					onToggle: () => {
						j(Object(b.f)()), !w && C(Object(v.i)())
					},
					className: ce.a.toggleButton,
					activeColorOverride: n.a.orangered
				}))), c.a.createElement(X, {
					isSelected: O,
					isForAbilityCard: !0
				})))))
			};
			var Le = e => {
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
				return c.a.createElement(ie, {
					title: a,
					subtitle: t,
					cardTemplateColor: i,
					isSelected: l,
					isForSharing: o
				}, c.a.createElement("div", {
					className: ce.a.subredditList
				}, s.map((e, a) => c.a.createElement("div", {
					key: e.subredditId,
					style: {
						transitionDelay: `${.25*a+.4}s`
					},
					className: Object(u.a)(ce.a.subreddit, {
						[ce.a.selected]: l
					})
				}, c.a.createElement(ue, {
					withAddButton: !n,
					key: e.subredditId,
					deeplink: e.deeplink,
					subredditName: e.subredditName,
					isRed: i !== r.RED,
					size: "big",
					subredditId: e.subredditId,
					subscribed: e.isSubscribed
				})))))
			};
			var Fe = e => {
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
				return c.a.createElement(ie, {
					title: a,
					subtitle: t,
					cardTemplateColor: i,
					isSelected: n,
					isForSharing: l
				}, c.a.createElement("div", {
					className: Object(u.a)(ce.a.image, ce.a.isCircle, {
						[ce.a.orange]: !o,
						[ce.a.isSelected]: n
					})
				}, c.a.createElement(B.a, {
					src: s,
					className: Object(u.a)(ce.a.fallbackStaticImage, ce.a.small, {
						[ce.a.isSelected]: n
					})
				}), c.a.createElement("div", {
					className: Object(u.a)(ce.a.unitCircle, {
						[ce.a.selected]: n
					})
				}, "#1")))
			};
			var Ae, De = e => {
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
					isSelected: p,
					isForSharing: g
				} = e;
				const E = s === r.RED;
				return c.a.createElement(ie, {
					title: a,
					subtitle: t,
					cardTemplateColor: s,
					isSelected: p,
					isForSharing: g
				}, c.a.createElement("div", {
					className: Object(u.a)(ce.a.image, ce.a.isCircle, {
						[ce.a.orange]: !E,
						[ce.a.isSelected]: p
					}),
					style: {
						backgroundImage: `url(${d})`
					}
				}, c.a.createElement(B.a, {
					src: i,
					className: Object(u.a)(ce.a.fallbackStaticImage, ce.a.illustration, {
						[ce.a.isSelected]: p
					})
				}), c.a.createElement("div", {
					className: Object(u.a)(ce.a.subredditFloating, ce.a.animated, {
						[ce.a.selected]: p
					}, ce.a.isSubredditCard)
				}, c.a.createElement(ue, {
					deeplink: l,
					subredditName: n,
					isLong: !0,
					size: "small",
					isRed: s === r.WHITE,
					subredditId: o
				})), m && c.a.createElement("div", {
					className: Object(u.a)(ce.a.unitCircle, ce.a.top, {
						[ce.a.selected]: p
					})
				}, m, c.a.createElement("span", {
					className: ce.a.timeUnit
				}, b))))
			};
			! function(e) {
				e.WHITE = "#fff", e.MANGO_100 = "#fff8b8", e.MANGO_300 = "#ffd635", e.MANGO_500 = "#ffa800"
			}(Ae || (Ae = {}));
			const Be = {
				[r.WHITE]: [Ae.MANGO_500, Ae.MANGO_300, Ae.MANGO_100],
				[r.YELLOW]: [Ae.WHITE, Ae.MANGO_300, Ae.MANGO_500]
			};
			var Me, Pe = e => {
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
				return c.a.createElement(ie, {
					title: a,
					subtitle: t,
					cardTemplateColor: i,
					isSelected: n,
					isForSharing: l
				}, c.a.createElement("div", {
					className: ce.a.subredditList
				}, s.map((e, a) => c.a.createElement("div", {
					key: e.subredditId,
					className: Object(u.a)(ce.a.subredditBar, {
						[ce.a.selected]: n
					}),
					style: {
						width: `${n?Ge[a]:0}px`,
						backgroundColor: Be[i][a],
						transitionDelay: `${.25*a+.4}s`
					}
				}, c.a.createElement("div", {
					className: Object(u.a)(ce.a.time, {
						[ce.a.selected]: n
					}),
					style: {
						transitionDelay: `${.125*a+.5*s.length}s`
					}
				}, e.totalTimeOnSubreddit, c.a.createElement("div", {
					className: ce.a.unit
				}, e.timeUnit)), c.a.createElement("div", {
					style: {
						transitionDelay: `${.25*a+.8}s`
					},
					className: Object(u.a)(ce.a.subreddit, {
						[ce.a.selected]: n
					})
				}, c.a.createElement(ue, {
					deeplink: e.deeplink,
					subredditName: e.subredditName,
					isRed: i !== r.RED,
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
						topTopicsList: i
					},
					isSelected: s,
					isForSharing: n
				} = e;
				return c.a.createElement(ie, {
					title: a,
					subtitle: t,
					cardTemplateColor: r,
					isSelected: s,
					isForSharing: n
				}, c.a.createElement("div", {
					className: ce.a.subredditList
				}, i.map((e, a) => c.a.createElement("div", {
					key: e.topicName,
					className: Object(u.a)(ce.a.subredditBar, {
						[ce.a.selected]: s
					}),
					style: {
						width: `${s?Ge[a]:0}px`,
						backgroundColor: We[a],
						transitionDelay: `${.25*a+.4}s`
					}
				}, c.a.createElement("div", {
					className: Object(u.a)(ce.a.time, ce.a.isTopic, {
						[ce.a.selected]: s
					}),
					style: {
						transitionDelay: `${.125*a+.5*i.length}s`
					}
				}, `#${a+1}`, c.a.createElement("div", {
					className: ce.a.unit
				}, e.topicName)), c.a.createElement("div", {
					className: Object(u.a)(ce.a.topicIcon, {
						[ce.a.selected]: s
					}),
					style: {
						transitionDelay: `${.25*a+.8}s`
					}
				}, c.a.createElement(B.a, {
					src: e.topicImgUrl,
					className: ce.a.topicImage
				}))))))
			};
			const {
				fbt: He
			} = t("./node_modules/fbt/lib/FbtPublic.js"), Ue = {
				[r.RED]: "#ff4500",
				[r.YELLOW]: "#fff8b8",
				[r.BLACK]: "#000",
				[r.WHITE]: "#fff"
			}, Ge = [434, 373, 212];
			var ze;
			! function(e) {
				e.WHITE = "#fff", e.MANGO_100 = "#fff8b8", e.MANGO_300 = "#ffd635", e.MANGO_500 = "#ffa800"
			}(ze || (ze = {}));
			const Ve = (e, a, t) => {
					const r = /(\*\*.*?\*\*)/g;
					return e.split(r).map((e, i) => r.test(e) ? c.a.createElement("span", {
						key: e + i,
						className: a,
						onClick: t
					}, e.replace(/\*/g, "").replace(/ /g, " ")) : e)
				},
				Ze = e => {
					let {
						card: a,
						isSelected: t,
						isForSharing: r,
						className: i
					} = e;
					return c.a.createElement("div", {
						className: i
					}, " ", (() => a ? (e => e.__typename === C)(a) ? c.a.createElement(ke, {
						card: a,
						isSelected: t
					}) : (e => e.__typename === j)(a) ? c.a.createElement(Ce, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === x)(a) ? c.a.createElement(Le, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === y)(a) ? c.a.createElement(De, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === k)(a) ? c.a.createElement(Se, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === O)(a) ? c.a.createElement(be, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === I)(a) ? c.a.createElement(Pe, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === w)(a) ? c.a.createElement(ne, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === T)(a) ? c.a.createElement(Ye, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === R)(a) ? c.a.createElement(ye, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === N)(a) ? c.a.createElement(je, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : F(a) ? c.a.createElement(Re, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === L)(a) ? c.a.createElement(Fe, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : c.a.createElement("div", null, a.title) : null)())
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
			var Qe = t("./src/reddit/pages/Recap/Components/ShareModal/index.m.less"),
				Xe = t.n(Qe);
			var Je = Object(V.a)(e => {
					let {
						cardTemplateColor: a,
						card: t,
						isAbilityCard: r,
						onDownloadCard: i,
						isDownloading: n,
						onClose: l
					} = e;
					const o = Object(s.useCallback)(e => {
							null !== e && t && e.focus()
						}, [t]),
						d = Object(s.useCallback)(e => {
							console.log(e.key), e.key === p.b.Escape && l && l()
						}, [l]);
					return Object(s.useEffect)(() => (window.addEventListener("keydown", d), () => window.removeEventListener("keydown", d)), [d]), c.a.createElement("div", {
						className: Xe.a.modalWrapper,
						ref: o
					}, c.a.createElement("div", {
						className: Xe.a.title
					}, c.a.createElement("span", {
						className: Xe.a.titleCaption
					}, D.fbt._("Share", null, {
						hk: "2Y190R"
					})), c.a.createElement(E.a, {
						priority: E.c.PlainLink,
						kind: E.b.Button,
						Icon: Object(_.b)("close"),
						onClick: l,
						disabled: n,
						className: Xe.a.titleCloseButton,
						iconClassName: Xe.a.titleCloseButtonIcon,
						tabIndex: 1
					})), c.a.createElement("div", {
						className: Xe.a.shareWrapper,
						style: {
							backgroundColor: a
						}
					}, c.a.createElement("div", {
						className: Xe.a.shareContainer,
						id: "shareId",
						style: {
							backgroundColor: a
						}
					}, c.a.createElement(Ze, {
						card: t,
						isSelected: !0,
						isForSharing: !0,
						className: Xe.a.card
					}), !r && c.a.createElement("div", {
						className: Xe.a.shareFooter
					}, c.a.createElement(P, {
						className: Object(u.a)(Xe.a.logo)
					}), c.a.createElement("span", {
						className: Xe.a.text
					}, "2022")))), c.a.createElement("div", {
						className: Xe.a.controls
					}, c.a.createElement("div", {
						className: Xe.a.download
					}, c.a.createElement(E.a, {
						priority: E.c.PlainLink,
						kind: E.b.Button,
						className: Object(u.a)(Xe.a.shareButton),
						Icon: Object(_.b)("download"),
						iconClassName: Object(u.a)(Xe.a.shareIcon),
						onClick: i,
						size: E.d.XL,
						disabled: n,
						tabIndex: 1
					}), c.a.createElement("div", {
						className: Object(u.a)(Xe.a.title, {
							[Xe.a.downloadIndicator]: n
						})
					}, n ? D.fbt._("Downloading...", null, {
						hk: "37jEC2"
					}) : D.fbt._("Download", null, {
						hk: "3UONFz"
					})))))
				}),
				$e = t("./src/reddit/selectors/activeModalId.ts"),
				ea = t("./src/reddit/selectors/user.ts"),
				aa = t("./src/reddit/pages/Recap/Components/index.m.less"),
				ta = t.n(aa);
			var ra = () => {
					const e = Object(m.d)(),
						a = Object(h.a)(),
						i = Object(m.e)(e => e.recap.shouldShowShareModal),
						n = () => e(Object(b.h)()),
						l = Object(m.e)(e => e.recap.isCardsLoading),
						o = Object(m.e)(e => e.recap.cardsLoadingError),
						O = Object(m.e)(e => e.recap.currentCardIndex),
						N = Object(m.e)(e => e.recap.shareCardWasOpened),
						[j, C] = Object(s.useState)(!1),
						k = Object(m.e)(e => e.recap.cards),
						[S, y] = Object(s.useState)(!1),
						[I, x] = Object(s.useState)(!0),
						w = Object(m.e)(e => Object($e.b)(g.a.SNOOVATAR_MODAL)(e)),
						T = Object(m.e)(ea.l),
						R = Math.ceil((O + 1) / 6),
						L = O - 6 * (R - 1),
						A = k.length > 6 && R > 1,
						D = 6 * (R - 1),
						B = D + 6,
						M = 6 * R < k.length,
						P = k.length && F(k[O]),
						W = k.length && (k[O].cardTemplateColor === r.WHITE || k[O].cardTemplateColor === r.YELLOW),
						Y = Object(s.useCallback)(() => {
							e(Object(b.c)()), e(Object(b.a)())
						}, [e]);
					Object(s.useEffect)(() => {
						Object(b.d)(!0), T && Object(f.Tb)(null == T ? void 0 : T.id)
					}, [w, e, T, a]), Object(s.useEffect)(() => {
						a(Object(v.n)()), Y()
					}, [Y, a]), Object(s.useEffect)(() => {
						k.length && a(Object(v.m)())
					}, [k, O, a]);
					const U = Object(s.useRef)(d()((a, t, r, i, s, c) => {
							const n = t - 1;
							let l = r;
							if (i && s && !c) return e(Object(b.b)());
							(a instanceof WheelEvent && a.deltaY > 0 || a instanceof KeyboardEvent && a.code === p.b.ArrowDown) && (l = r + 1 <= n && r + 1 >= 0 ? r + 1 : r), (a instanceof WheelEvent && a.deltaY < 0 || a instanceof KeyboardEvent && a.code === p.b.ArrowUp) && (l = r - 1 <= n && r - 1 >= 0 ? r - 1 : r), e(Object(b.e)({
								index: l
							}))
						}, 2e3, {
							trailing: !1
						})),
						G = Object(s.useCallback)(e => {
							if (null !== e && k.length && !i) {
								if (e.focus(), P && !j && !N) return C(!0);
								e.onwheel = e => {
									x(!0), U.current(e, k.length, O, !!P, j, N)
								}, e.onkeydown = e => {
									x(!0), U.current(e, k.length, O, !!P, j, N)
								}
							}
						}, [k, O, i, N, j, P]),
						V = c.a.useCallback(async () => {
							let e = document.getElementById("shareId");
							if (P && (e = document.getElementById("abilityCardShareId")), e) {
								y(!0);
								const a = await (() => t.e(4).then(t.bind(null, "./node_modules/html-to-image/es/index.js")))(),
									r = await a.getFontEmbedCSS(e),
									i = await a.toPng(e, {
										backgroundColor: P ? "transparent" : Ue[k[O].cardTemplateColor],
										canvasHeight: P ? 243 : 540,
										canvasWidth: P ? 170 : 960,
										style: {
											scale: "1"
										},
										fontEmbedCSS: r
									});
								if (i) {
									const e = document.createElement("a");
									e.download = `reddit_recap_card${O}}.png`, e.href = i, e.click(), y(!1), n()
								}
							}
						}, [e, O]);
					return o ? c.a.createElement(H, {
						onRetry: Y
					}) : l ? c.a.createElement(z, null) : c.a.createElement(c.a.Fragment, null, k.length ? c.a.createElement("div", {
						ref: G,
						className: ta.a.cardsContainer,
						tabIndex: 0
					}, c.a.createElement("div", {
						className: ta.a.pager
					}, A && c.a.createElement("div", {
						className: Object(u.a)(ta.a.nextDot, {
							[ta.a.black]: !!W
						}),
						onClick: () => {
							x(!1), e(Object(b.e)({
								index: D - 1
							}))
						}
					}), k.slice(D, B).map((a, t) => c.a.createElement("div", {
						key: t,
						className: Object(u.a)(ta.a.progressDot, {
							[ta.a.active]: t === L,
							[ta.a.black]: !!W
						}),
						onClick: () => {
							x(!1), e(Object(b.e)({
								index: t + D
							}))
						}
					})), M && c.a.createElement("div", {
						className: Object(u.a)(ta.a.nextDot, {
							[ta.a.black]: !!W
						}),
						onClick: () => {
							x(!1), e(Object(b.e)({
								index: B
							}))
						}
					})), c.a.createElement("div", {
						className: Object(u.a)(ta.a.wrapper, {
							[ta.a.animated]: I
						}),
						style: {
							top: `${100*-O}%`,
							backgroundColor: Ue[k[O].cardTemplateColor]
						}
					}, k.map((e, a) => c.a.createElement("div", {
						className: ta.a.card,
						key: e.id
					}, c.a.createElement(Ze, {
						card: e,
						isSelected: a === O
					})))), O < k.length - 1 && c.a.createElement(E.a, {
						onClick: () => {
							e(Object(b.e)({
								index: O + 1
							}))
						},
						priority: E.c.PlainLink,
						kind: E.b.Button,
						Icon: Object(_.b)("down"),
						key: O,
						className: Object(u.a)(ta.a.downButton, {
							[ta.a.black]: !!W
						}),
						iconClassName: ta.a.downButtonIcon
					}), i && c.a.createElement(Je, {
						onOverlayClick: () => n(),
						withOverlay: !0,
						card: k[O],
						cardTemplateColor: Ue[k[O].cardTemplateColor],
						isAbilityCard: !!P,
						isDownloading: S,
						onDownloadCard: V,
						onClose: n
					})) : null)
				},
				ia = t("./src/reddit/pages/Recap/index.m.less"),
				sa = t.n(ia);
			a.default = () => c.a.createElement(l.a, {
				content: c.a.createElement(ra, null),
				className: sa.a.content,
				backgroundColor: n.a.orangered
			})
		},
		"./src/redditGQL/operations/RegisterWebPushToken.json": function(e) {
			e.exports = JSON.parse('{"id":"197650c1946c"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Recap.9bc2792918057679d742.js.map