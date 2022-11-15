// https://www.redditstatic.com/desktop2x/Recap.4a922e3de9e367110edb.js
// Retrieved at 11/15/2022, 10:10:04 AM by Reddit Dataminer v1.0.0
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
				c = t("./src/redditGQL/operations/RegisterWebPushToken.json"),
				i = t("./src/lib/makeGqlRequest/index.ts"),
				s = t("./src/lib/serviceWorker/index.ts"),
				n = t("./src/lib/timezone/index.ts"),
				l = e => {
					const a = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"),
						t = window.atob(a),
						r = new Uint8Array(t.length);
					for (let c = 0; c < t.length; ++c) r[c] = t.charCodeAt(c);
					return r
				};
			var o;
			! function(e) {
				e[e.Success = 0] = "Success", e[e.FailedGeneric = 1] = "FailedGeneric", e[e.FailedResponse = 2] = "FailedResponse", e[e.FailedGqlReponse = 3] = "FailedGqlReponse", e[e.FailedNoServiceWorker = 4] = "FailedNoServiceWorker", e[e.FailedNoSubscription = 5] = "FailedNoSubscription"
			}(o || (o = {}));
			const d = async e => {
				try {
					const a = await Object(s.a)();
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
						return Object(i.a)(e(), {
							...c,
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
				return B
			})), t.d(a, "subscribeToPermissionsChange", (function() {
				return D
			}));
			var r = t("./node_modules/fbt/lib/FbtPublic.js"),
				c = t("./node_modules/lodash/omit.js"),
				i = t.n(c),
				s = t("./src/lib/browser/isIncognito.ts"),
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
				E = t("./src/reddit/helpers/parseUrl.ts"),
				h = t("./src/reddit/helpers/tabBadging/index.ts"),
				v = t("./src/reddit/helpers/trackers/notifications.ts"),
				_ = t("./src/reddit/models/Toast/index.ts"),
				O = t("./src/reddit/selectors/activeModal.ts"),
				N = t("./src/reddit/selectors/activeModalId.ts"),
				j = t("./src/reddit/selectors/experiments/delayDnPermission.ts"),
				k = t("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				C = t("./src/reddit/constants/experiments.ts"),
				S = t("./src/reddit/helpers/chooseVariant/index.ts");
			const y = e => Object(S.c)(e, {
				experimentName: C.cc,
				experimentEligibilitySelector: S.a
			}) === C.Id;
			var I = t("./src/reddit/selectors/meta.ts"),
				x = t("./src/reddit/selectors/user.ts");
			let w = !1;
			const T = async (e, a) => {
				const t = Object(x.Q)(e);
				if (w) return;
				if (w = !0, Object(u.a)(e) !== o.c.NotificationsSupported) return;
				await Object(d.a)();
				navigator.serviceWorker.addEventListener("message", r => {
					const c = r.data,
						s = c.command || c.type;
					if ("registerWithServiceWorker" === s) R(e);
					else if (s === h.a && t) {
						const e = i()(c, ["command"]);
						a(Object(p.f)(e))
					} else if ("navigate.chat" === s) {
						const e = Object(E.a)(c.data.href);
						e && e.pathname && a(Object(m.c)(e.pathname))
					}
				}), R(e)
			}, R = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: v.c(e)
				})
			}, L = function(e, a) {
				let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
				return async (r, c, i) => {
					const n = c(),
						d = Object(I.f)(n),
						m = y(n),
						b = !!Object(N.a)(n),
						u = Object(j.a)(n),
						p = Object(k.e)(n),
						g = Object(O.c)(f.a.NSFW_BLOCKING_MODAL_V2)(n);
					if (p || g) return;
					if (await Object(s.a)() || d) return;
					await T(n, r);
					v.l(n), await Object(l.b)(e, a, () => {
						m || u || b || r(Object(o.o)()), r(Object(o.n)()), v.j(n)
					}, (e, a) => {
						r(Object(o.l)()), r(A(a ? o.a.Denied : o.a.Closed)), e && (a ? v.e(n) : v.f(n)), t()
					}, e => {
						r(Object(o.m)()), r(F()), e && v.d(n), t()
					}, () => {
						r(Object(o.k)()), t()
					})
				}
			}, F = e => async (a, t, c) => {
				const i = t();
				try {
					switch (await Object(n.b)(c.gqlContext)) {
						case n.a.Success:
							Object(u.b)(o.a.Granted), v.m(i), e && a(Object(g.f)({
								kind: _.b.SuccessCommunity,
								text: r.fbt._("Changes saved", null, {
									hk: "wGH5U"
								})
							}));
							break;
						case n.a.FailedResponse:
							v.k(i, "registration_failed_generally");
							break;
						case n.a.FailedGqlReponse:
							v.k(i, "registration_failed_in_gql")
					}
				} catch (s) {
					v.k(i, "registration_failed_uncaught_exception"), console.error(s)
				}
			}, A = (e, a) => async t => {
				try {
					Object(u.b)(e);
					const c = await Object(d.a)();
					if (c) {
						const e = await c.pushManager.getSubscription();
						e && (e.unsubscribe(), a && t(Object(g.f)({
							kind: _.b.SuccessCommunity,
							text: r.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						})))
					}
				} catch (c) {}
			}, B = e => async (a, t) => {
				const r = t();
				if (Object(u.a)(r) === o.c.NotificationsSupported) switch (Object(l.a)()) {
					case o.a.Default:
					case o.a.Closed:
						await a(L(!0, !0));
						break;
					case o.a.Denied:
						a(Object(b.h)(e))
				}
			}, D = () => async (e, a) => {
				var t;
				if (!(null === (t = null === navigator || void 0 === navigator ? void 0 : navigator.permissions) || void 0 === t ? void 0 : t.query)) return;
				const r = a();
				if (Object(u.a)(r) !== o.c.NotificationsSupported) return;
				const c = await navigator.permissions.query({
					name: "notifications"
				});
				c.onchange = () => (a => {
					switch (a) {
						case o.a.Denied:
							e(A(o.a.Denied)), v.e(r);
							break;
						case o.a.Granted:
							e(F()), v.d(r);
							break;
						default:
							e(A(o.a.Default))
					}
				})(c.state)
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
				c = t("./src/telemetry/index.ts"),
				i = t("./src/telemetry/models/Event.ts");
			var s;
			! function(e) {
				e.FREQUENT = "frequent", e.LOW = "low", e.OFF = "off"
			}(s || (s = {}));
			const n = e => ({
					...r.o(e),
					noun: "desktop_notification_permissions"
				}),
				l = e => e ? "enable" : "disable",
				o = e => {
					Object(c.a)({
						...n(e),
						action: i.c.View,
						source: "popup"
					})
				},
				d = e => {
					Object(c.a)({
						...n(e),
						action: i.c.Allow,
						source: "popup"
					})
				},
				m = e => {
					Object(c.a)({
						...n(e),
						action: i.c.Block,
						source: "popup"
					})
				},
				b = e => {
					Object(c.a)({
						...n(e),
						action: i.c.Close,
						source: "popup"
					})
				},
				u = (e, a, t) => ({
					...r.o(e),
					actionInfo: r.d(e, {
						success: a,
						reason: t
					}),
					noun: "push_token"
				}),
				p = e => {
					Object(c.a)({
						...u(e, !0),
						action: i.c.Request,
						source: "notification"
					})
				},
				g = e => {
					Object(c.a)({
						...u(e, !0),
						action: i.c.Register,
						source: "notification"
					})
				},
				f = (e, a) => {
					Object(c.a)({
						...u(e, !1, a),
						action: i.c.Bail,
						source: "notification"
					})
				},
				E = e => ({
					...r.o(e),
					noun: "push_notification"
				}),
				h = e => ({
					...E(e),
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
				N = (e, a, t) => c => ({
					...r.o(c),
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
					action: i.c.View,
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
				c = t.n(r);
			a.a = e => c.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 14 14",
				xmlns: "http://www.w3.org/2000/svg",
				version: "1.1"
			}, c.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), c.a.createElement("g", null, c.a.createElement("path", {
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
				comment: "_2fN2A4C6nC3WdaAVoFCnKH",
				subredditImage: "PRbaY1FL2DBM5rgUUDAHY",
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
				cutoffText: "qkE6SNBBBjm83S4hFbLG-",
				value: "trOgcRV-5wN9Yn9T2HwYI",
				orange: "alkP8lQe4nDtnF4wadJWh",
				numeric: "_32QHJBX9bSS0wrvJd36xrm"
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
				downButtonIcon: "_13O7BZDC0K1kA8PAHXxPus",
				closeButton: "jLQYSW6UJF_JUbpA3Lx3H",
				closeButtonIcon: "_2qmAde2g8UiNSxiCo5Zxqt"
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
			var r, c, i = t("./node_modules/react/index.js"),
				s = t.n(i),
				n = (t("./assets/fonts/RedditSans/font.less"), t("./src/reddit/constants/colors.ts")),
				l = t("./src/reddit/layout/page/Listing/index.tsx"),
				o = t("./node_modules/fbt/lib/FbtPublic.js"),
				d = t("./node_modules/lodash/throttle.js"),
				m = t.n(d),
				b = t("./node_modules/react-redux/es/index.js"),
				u = t("./node_modules/react-router-redux/es/index.js"),
				p = t("./src/lib/classNames/index.ts"),
				g = t("./src/reddit/actions/recap/index.ts"),
				f = t("./src/reddit/constants/keycodes.ts"),
				E = t("./src/reddit/constants/modals.ts"),
				h = t("./src/reddit/contexts/PageLayer/index.tsx"),
				v = t("./src/reddit/controls/Button/index.tsx"),
				_ = t("./src/reddit/helpers/localStorage/index.ts"),
				O = t("./src/reddit/helpers/trackers/recap.ts"),
				N = t("./src/reddit/hooks/useTracking.ts"),
				j = t("./src/reddit/icons/fonts/index.tsx");
			! function(e) {
				e.YELLOW = "YELLOW", e.WHITE = "WHITE", e.RED = "RED", e.BLACK = "BLACK"
			}(r || (r = {})),
			function(e) {
				e.Common = "COMMON", e.Rare = "RARE", e.Epic = "EPIC", e.Legendary = "LEGENDARY"
			}(c || (c = {}));
			const k = "PersonalizedYearInReviewCommentCard",
				C = "PersonalizedYearInReviewEndCard",
				S = "PersonalizedYearInReviewGenericCard",
				y = "PersonalizedYearInReviewIntroCard",
				I = "PersonalizedYearInReviewPostCard",
				x = "PersonalizedYearInReviewShareCard",
				w = "PersonalizedYearInReviewSubredditCard",
				T = "PersonalizedYearInReviewSubredditListCard",
				R = "PersonalizedYearInReviewSingleStatSubredditListCard",
				L = "PersonalizedYearInReviewAvatarCard",
				F = "PersonalizedYearInReviewTopicListCard",
				A = "PersonalizedYearInReviewRPlaceTileListCard",
				B = "PersonalizedYearInReviewSingleTopicCard",
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
			var H = e => s.a.createElement("svg", M({}, e, {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 130 32"
				}), s.a.createElement("path", {
					d: "M121.02 0H8.315A8.315 8.315 0 0 0 0 8.315v15.37A8.315 8.315 0 0 0 8.315 32H121.02a8.316 8.316 0 0 0 8.316-8.315V8.315A8.316 8.316 0 0 0 121.02 0Z"
				}), s.a.createElement("path", {
					d: "M17.342 26.386c5.693 0 10.307-4.615 10.307-10.308S23.035 5.771 17.342 5.771c-5.693 0-10.308 4.614-10.308 10.307 0 5.693 4.615 10.308 10.308 10.308Z",
					fill: "#FF4500"
				}), s.a.createElement("path", {
					d: "M24.211 16.078a1.503 1.503 0 0 0-2.545-1.081c-1.028-.742-2.444-1.22-4.02-1.275l.684-3.222 2.238.476a1.071 1.071 0 0 0 2.142-.052 1.07 1.07 0 0 0-2.032-.474l-2.499-.531a.266.266 0 0 0-.318.207l-.765 3.595c-1.6.044-3.038.523-4.079 1.273a1.503 1.503 0 1 0-1.655 2.455c-.022.15-.035.3-.035.455 0 2.312 2.692 4.187 6.013 4.187 3.32 0 6.012-1.875 6.012-4.188a2.96 2.96 0 0 0-.035-.451c.527-.234.894-.76.894-1.374Zm-10.306 1.074a1.075 1.075 0 1 1 1.074 1.073 1.075 1.075 0 0 1-1.074-1.073Zm5.987 2.837c-.732.732-2.137.789-2.55.789-.412 0-1.817-.057-2.549-.789a.278.278 0 1 1 .394-.393c.462.462 1.45.625 2.156.625.705 0 1.694-.163 2.156-.625a.278.278 0 0 1 .393.393Zm-.189-1.763a1.075 1.075 0 0 1 0-2.148 1.075 1.075 0 0 1 0 2.148Z",
					fill: "#fff"
				}), s.a.createElement("path", {
					d: "M40.77 21.975h-2.676l-2.106-3.698c-.203.01-.357.015-.463.015h-.883v3.683H32.27V11.31h3.85c.708 0 1.343.13 1.902.387.56.259.998.634 1.317 1.125.318.492.477 1.078.477 1.758 0 .632-.14 1.21-.423 1.733a3.432 3.432 0 0 1-1.212 1.284l2.59 4.377Zm-6.128-5.615h1.194c.323 0 .61-.06.861-.18.25-.121.446-.292.586-.514.14-.222.21-.48.21-.774 0-.295-.071-.553-.213-.775a1.39 1.39 0 0 0-.608-.513c-.263-.12-.57-.181-.923-.181h-1.106v2.937ZM47.976 18.82H42.74c.14.453.387.81.741 1.067.355.258.778.387 1.27.387a3.52 3.52 0 0 0 1.049-.166c.357-.111.632-.241.825-.391l.709 1.708c-.3.202-.673.364-1.122.484-.448.12-.923.181-1.425.181-.83 0-1.556-.169-2.178-.506a3.557 3.557 0 0 1-1.44-1.41c-.337-.604-.506-1.293-.506-2.07 0-.796.174-1.499.52-2.11a3.689 3.689 0 0 1 1.401-1.414 3.824 3.824 0 0 1 1.92-.499c.666 0 1.273.153 1.82.46.548.306.98.736 1.295 1.291.316.555.474 1.186.474 1.895 0 .367-.038.731-.115 1.093Zm-1.99-1.432c0-.464-.138-.83-.415-1.1-.277-.27-.643-.405-1.096-.405-.459 0-.843.136-1.154.408-.311.273-.517.638-.619 1.097h3.285ZM54.806 10.833h2.286v11.141h-2.177v-.933h-.036c-.295.333-.64.591-1.038.774a3.12 3.12 0 0 1-1.321.275c-.637 0-1.23-.159-1.78-.477-.55-.319-.991-.78-1.324-1.386-.333-.605-.499-1.317-.499-2.137 0-.84.172-1.562.517-2.168.345-.605.797-1.064 1.357-1.378.56-.313 1.16-.47 1.801-.47.434 0 .833.074 1.198.22.364.148.686.359.965.634h.051v-4.095Zm-.835 9.036c.287-.174.514-.416.683-.727.169-.311.253-.664.253-1.06 0-.39-.08-.74-.242-1.049a1.803 1.803 0 0 0-1.646-.984 1.812 1.812 0 0 0-1.65.973 2.18 2.18 0 0 0-.245 1.046c0 .39.08.742.242 1.056a1.81 1.81 0 0 0 1.646 1.006c.352 0 .672-.087.959-.261ZM63.908 10.833h2.286v11.141h-2.178v-.933h-.036a3.11 3.11 0 0 1-1.038.774 3.118 3.118 0 0 1-1.32.275c-.637 0-1.23-.159-1.78-.477-.55-.319-.991-.78-1.324-1.386-.333-.605-.5-1.317-.5-2.137 0-.84.173-1.562.518-2.168.345-.605.797-1.064 1.357-1.378.559-.313 1.16-.47 1.801-.47.434 0 .833.074 1.197.22.364.148.686.359.966.634h.05v-4.095Zm-.836 9.036c.287-.174.515-.416.684-.727.169-.311.253-.664.253-1.06 0-.39-.08-.74-.242-1.049a1.808 1.808 0 0 0-.673-.724 1.844 1.844 0 0 0-.973-.26 1.807 1.807 0 0 0-1.65.973 2.18 2.18 0 0 0-.246 1.046c0 .39.081.742.243 1.056a1.81 1.81 0 0 0 1.646 1.006c.352 0 .671-.087.958-.261ZM68.12 13.104a1.389 1.389 0 0 1-.688-1.208c0-.26.061-.497.184-.709.123-.212.29-.378.503-.5.212-.12.449-.18.71-.18a1.377 1.377 0 0 1 1.388 1.389 1.377 1.377 0 0 1-.687 1.208 1.355 1.355 0 0 1-.702.189c-.26 0-.497-.063-.709-.189Zm1.844 8.87h-2.286V14.19h2.286v7.784ZM74.767 14.19h1.672v1.946h-1.671v5.839H72.48v-5.839h-1.664V14.19h1.664v-2.229h2.287v2.229ZM89.007 21.975H86.33l-2.105-3.698c-.203.01-.357.015-.463.015h-.883v3.683h-2.373V11.31h3.849c.709 0 1.343.13 1.903.387.559.259.998.634 1.317 1.125.318.492.477 1.078.477 1.758 0 .632-.141 1.21-.423 1.733a3.431 3.431 0 0 1-1.212 1.284l2.59 4.377Zm-6.128-5.615h1.194c.323 0 .61-.06.86-.18.251-.121.447-.292.587-.514.14-.222.21-.48.21-.774 0-.295-.072-.553-.214-.775a1.394 1.394 0 0 0-.608-.513c-.263-.12-.57-.181-.922-.181h-1.107v2.937ZM96.213 18.82h-5.238c.14.453.387.81.741 1.067.355.258.778.387 1.27.387.343 0 .692-.055 1.05-.166.356-.111.631-.241.824-.391l.71 1.708c-.3.202-.674.364-1.122.484a5.47 5.47 0 0 1-1.426.181c-.83 0-1.555-.169-2.177-.506a3.559 3.559 0 0 1-1.44-1.41c-.338-.604-.507-1.293-.507-2.07 0-.796.174-1.499.522-2.11a3.685 3.685 0 0 1 1.4-1.414 3.826 3.826 0 0 1 1.92-.499c.666 0 1.272.153 1.82.46.547.306.979.736 1.295 1.291.316.555.474 1.186.474 1.895 0 .367-.039.731-.116 1.093Zm-1.99-1.432c0-.464-.138-.83-.415-1.1-.278-.27-.643-.405-1.097-.405-.458 0-.843.136-1.154.408-.31.273-.517.638-.618 1.097h3.285ZM99.277 21.533a4.042 4.042 0 0 1-1.523-1.447 3.808 3.808 0 0 1-.565-2.033c0-.733.185-1.403.554-2.01a4.01 4.01 0 0 1 1.498-1.44 4.145 4.145 0 0 1 2.058-.529 4.396 4.396 0 0 1 2.409.717l-.839 1.837a2.143 2.143 0 0 0-.687-.43 2.276 2.276 0 0 0-.825-.149c-.401 0-.752.09-1.053.272a1.85 1.85 0 0 0-.694.727 2.091 2.091 0 0 0-.243.998c0 .372.084.713.254 1.024a1.926 1.926 0 0 0 1.729 1.017c.299 0 .594-.054.886-.16.292-.106.512-.229.662-.369l.817 1.874a4.327 4.327 0 0 1-1.059.452 4.568 4.568 0 0 1-1.277.178 4.285 4.285 0 0 1-2.102-.529ZM109.953 14.183h2.177v7.792h-2.177v-.934h-.051c-.294.333-.64.591-1.038.775a3.12 3.12 0 0 1-1.32.275 3.49 3.49 0 0 1-1.78-.478c-.55-.318-.992-.78-1.324-1.386-.333-.605-.5-1.317-.5-2.137 0-.835.172-1.555.514-2.16.343-.605.795-1.066 1.357-1.382a3.635 3.635 0 0 1 1.812-.474c.473 0 .902.086 1.288.257s.721.419 1.006.742h.036v-.89Zm-.959 5.686c.287-.173.515-.416.684-.727.169-.31.253-.664.253-1.06 0-.39-.081-.74-.242-1.049a1.808 1.808 0 0 0-.673-.723 1.845 1.845 0 0 0-.973-.26 1.86 1.86 0 0 0-.973.256c-.288.171-.513.41-.677.716a2.18 2.18 0 0 0-.246 1.046c0 .39.081.743.242 1.056.162.314.388.56.677.738.289.179.612.268.969.268.352 0 .672-.087.959-.26ZM121.355 20.206a3.54 3.54 0 0 1-1.317 1.396c-.55.326-1.15.489-1.801.489a3.027 3.027 0 0 1-2.265-.948h-.058v3.892l-2.286-.022V14.19h2.17v.919h.044a2.909 2.909 0 0 1 1.012-.767 3.116 3.116 0 0 1 1.31-.268 3.563 3.563 0 0 1 3.172 1.874c.341.608.511 1.322.511 2.142 0 .805-.164 1.51-.492 2.116Zm-2.634-.348c.29-.176.514-.419.673-.73a2.28 2.28 0 0 0 .239-1.053c0-.39-.081-.74-.242-1.05a1.79 1.79 0 0 0-.673-.719 1.877 1.877 0 0 0-.981-.257 1.78 1.78 0 0 0-1.638.977 2.24 2.24 0 0 0-.243 1.056c0 .396.081.748.243 1.056.161.31.384.55.669.724.284.174.608.263.969.268a1.9 1.9 0 0 0 .984-.271Z",
					fill: "#FF4500"
				})),
				Y = t("./src/reddit/pages/Recap/Components/ErrorScreen/index.m.less"),
				U = t.n(Y);
			var G = e => {
					let {
						onRetry: a
					} = e;
					return s.a.createElement("div", {
						className: U.a.wrapper
					}, s.a.createElement("div", {
						className: Object(p.a)(U.a.image, U.a.isCircle)
					}, s.a.createElement(W.a, {
						src: `${P.a.assetPath}/img/recap/key_art_recap_2022.png`,
						className: Object(p.a)(U.a.fallbackStaticImage)
					})), s.a.createElement("div", {
						className: U.a.info
					}, s.a.createElement(H, {
						className: U.a.logo
					}), s.a.createElement("p", {
						className: U.a.title
					}, o.fbt._("WTF?", null, {
						hk: "exzlX"
					})), s.a.createElement("p", {
						className: U.a.subtitle
					}, o.fbt._("Something went wrong. Try that again.", null, {
						hk: "fyv6n"
					})), s.a.createElement(v.t, {
						className: Object(p.a)(U.a.retryButton),
						onClick: a
					}, o.fbt._("Retry", null, {
						hk: "2NAMZ4"
					}))))
				},
				Z = t("./src/reddit/pages/Recap/Components/LoadingIcon/index.m.less"),
				z = t.n(Z);
			var V = () => s.a.createElement("div", {
					className: z.a.circle
				}, s.a.createElement("img", {
					className: z.a.image,
					src: `${P.a.assetPath}/img/recap/InfiniteLoad_4.gif`
				})),
				q = t("./src/higherOrderComponents/asModal/index.tsx"),
				K = t("./src/lib/notifications/index.ts"),
				Q = t("./src/lib/notifications/constants.ts"),
				X = t("./src/reddit/pages/Recap/Components/ShareButton/index.m.less"),
				J = t.n(X);
			var $ = e => {
					let {
						isSelected: a,
						isForAbilityCard: t,
						isVisible: r,
						isRedTemplate: c,
						isInitialCard: i
					} = e;
					const n = Object(b.d)(),
						l = Object(N.a)();
					return s.a.createElement("div", {
						className: Object(p.a)(J.a.shareContainer, {
							[J.a.selected]: a,
							[J.a.forAbility]: t,
							[J.a.visible]: r,
							[J.a.initialCard]: i
						})
					}, s.a.createElement(v.t, {
						className: Object(p.a)(J.a.shareButton, {
							[J.a.orange]: !c
						}),
						Icon: Object(j.b)("share_ios"),
						iconClassName: Object(p.a)(J.a.shareIcon, {
							[J.a.white]: !c
						}),
						onClick: () => {
							n(Object(g.h)()), l(Object(O.n)())
						},
						tabIndex: a ? 0 : -1
					}, o.fbt._("Share", null, {
						hk: "1q5t1q"
					})))
				},
				ee = t("./src/reddit/pages/Recap/Components/Info/index.m.less"),
				ae = t.n(ee);
			const {
				fbt: te
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var re = e => {
					let {
						title: a,
						subtitle: t,
						cardTemplateColor: c,
						subText: i,
						shouldHideShareButton: n,
						isSelected: l,
						isForSharing: o,
						isInitialCard: d,
						isEndCard: m
					} = e;
					const b = c === r.RED,
						u = c === r.BLACK,
						g = c === r.WHITE;
					return s.a.createElement("div", {
						className: Object(p.a)(ae.a.info, {
							[ae.a.black]: !b && !u,
							[ae.a.selected]: l,
							[ae.a.initialCard]: d
						})
					}, !o && s.a.createElement(H, {
						className: Object(p.a)(ae.a.logo, {
							[ae.a.white]: g,
							[ae.a.selected]: l
						})
					}), s.a.createElement("p", {
						className: Object(p.a)(ae.a.title, {
							[ae.a.selected]: l
						})
					}, Ve(a, Object(p.a)(ae.a.value, {
						[ae.a.orange]: !b
					}), ae.a.numeric)), s.a.createElement("p", {
						className: Object(p.a)(ae.a.subtitle, {
							[ae.a.selected]: l
						})
					}, m ? i : t), d && s.a.createElement("p", {
						className: Object(p.a)(ae.a.cutoffText, {
							[ae.a.selected]: l
						})
					}, i), !n && !o && s.a.createElement($, {
						isSelected: l,
						isRedTemplate: b,
						isInitialCard: d
					}))
				},
				ce = t("./src/reddit/pages/Recap/Components/Card/index.m.less"),
				ie = t.n(ce);
			var se = e => {
					let {
						cardTemplateColor: a,
						title: t,
						subtitle: r,
						children: c,
						shouldHideShareButton: i,
						isSelected: n,
						isForSharing: l,
						shouldHideInfo: o,
						isForAbilityCard: d,
						isInitialCard: m,
						isEndCard: b
					} = e;
					const [u, g] = s.a.Children.toArray(c);
					return s.a.createElement("div", {
						className: Object(p.a)(ie.a.wrapper, {
							[ie.a.forAbility]: d,
							[ie.a.forSharing]: l
						})
					}, u, !o && s.a.createElement(re, {
						title: t,
						subtitle: r,
						cardTemplateColor: a,
						subText: g,
						shouldHideShareButton: i,
						isSelected: n,
						isForSharing: l,
						isInitialCard: m,
						isEndCard: b
					}))
				},
				ne = t("./src/reddit/pages/Recap/CardTemplates/index.m.less"),
				le = t.n(ne);
			var oe = e => {
					let {
						card: {
							title: a,
							subtitle: t,
							cardTemplateColor: r,
							userPreviousAvatarUrl: c,
							userCurrentAvatarUrl: i
						},
						isSelected: n,
						isForSharing: l
					} = e;
					return s.a.createElement(se, {
						title: a,
						subtitle: t,
						cardTemplateColor: r,
						isSelected: n,
						isForSharing: l
					}, s.a.createElement("div", {
						className: le.a.avatarsWrapper
					}, (null == c ? void 0 : c.length) && i.length ? s.a.createElement("div", {
						className: Object(p.a)(le.a.avatars, {
							[le.a.selected]: n
						})
					}, s.a.createElement("div", {
						className: le.a.lightning
					}), s.a.createElement("div", {
						className: le.a.avatar,
						style: {
							backgroundImage: `url(${P.a.assetPath}/img/recap/left_side.png)`
						}
					}, s.a.createElement(W.a, {
						src: c,
						className: Object(p.a)(le.a.fallbackStaticImage, {
							[le.a.isSelected]: n
						})
					})), s.a.createElement("div", {
						className: Object(p.a)(le.a.avatar, le.a.left),
						style: {
							transitionDelay: ".65s",
							backgroundImage: `url(${P.a.assetPath}/img/recap/right_side.png)`
						}
					}, s.a.createElement(W.a, {
						src: i,
						className: Object(p.a)(le.a.fallbackStaticImage, {
							[le.a.isSelected]: n
						}),
						style: {
							transitionDelay: ".85s"
						}
					}))) : s.a.createElement("div", {
						className: Object(p.a)(le.a.collectibleAvatar, {
							[le.a.selected]: n
						})
					}, s.a.createElement(W.a, {
						src: i,
						className: Object(p.a)(le.a.fallbackStaticImage, {
							[le.a.isSelected]: n
						})
					}))))
				},
				de = t("./src/reddit/controls/InternalLink/index.tsx"),
				me = t("./src/reddit/actions/subscription/index.ts"),
				be = t("./src/reddit/pages/Recap/Components/Subreddit/index.m.less"),
				ue = t.n(be);
			var pe = e => {
				let {
					deeplink: a,
					subredditName: t,
					className: r,
					isLong: c,
					isRed: n,
					size: l,
					withAddButton: o,
					subredditId: d,
					subscribed: m,
					tabIndex: u,
					shouldAlternativeFocus: g
				} = e;
				const f = Object(b.d)(),
					E = Object(N.a)(),
					[h, _] = Object(i.useState)(!!m);
				return s.a.createElement("div", {
					className: ue.a.subredditWrapper
				}, s.a.createElement("div", {
					onClick: e => e.stopPropagation(),
					className: Object(p.a)(ue.a.container, r, {
						[ue.a.long]: c,
						[ue.a.big]: "big" === l,
						[ue.a.small]: "small" === l,
						[ue.a.tiny]: "tiny" === l,
						[ue.a.micro]: "micro" === l,
						[ue.a.red]: n
					})
				}, o && s.a.createElement(v.t, {
					Icon: Object(j.b)(h ? "joined_fill" : "join"),
					size: v.d.S,
					priority: v.c.PlainLink,
					className: ue.a.addButton,
					iconClassName: Object(p.a)(ue.a.icon, {
						[ue.a.white]: n
					}),
					onClick: e => (e.stopPropagation(), ((e, a) => {
						f(async t => {
							const r = await t(Object(me.d)([{
								name: e,
								type: "subreddit"
							}], !a));
							E(Object(O.o)(!a, e, d)), r && _(!h)
						})
					})(t, h)),
					tabIndex: u
				}), s.a.createElement(de.default, {
					to: a,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => E(Object(O.d)(d)),
					className: Object(p.a)(ue.a.subreddit, {
						[ue.a.red]: n,
						[ue.a.big]: "big" === l,
						[ue.a.small]: "small" === l,
						[ue.a.tiny]: "tiny" === l,
						[ue.a.micro]: "micro" === l,
						[ue.a.withButton]: o,
						[ue.a.alternativeFocusColor]: g
					}),
					tabIndex: u
				}, s.a.createElement("div", {
					className: ue.a.text
				}, s.a.createElement("span", {
					className: ue.a.subredditPrefix
				}, "r/"), t))))
			};
			var ge = e => {
					let {
						card: {
							title: a,
							subtitle: t,
							postImageUrl: c,
							cardTemplateColor: i,
							postDeeplink: n,
							commentText: l,
							commentDeeplink: o,
							postTitle: d,
							subredditId: m,
							commentId: b,
							postId: u
						},
						isSelected: g,
						isForSharing: f
					} = e;
					const E = Object(N.a)(),
						h = i === r.RED,
						{
							subredditName: v,
							subredditLink: _
						} = Ke(n),
						k = Object(j.b)("external_link");
					return s.a.createElement(se, {
						title: a,
						subtitle: t,
						cardTemplateColor: i,
						isSelected: g,
						isForSharing: f
					}, s.a.createElement("div", {
						className: le.a.commentWrapper
					}, c ? s.a.createElement(de.default, {
						target: "_blank",
						rel: "noopener noreferrer",
						to: n,
						className: Object(p.a)(le.a.image, le.a.commentSubreddit, {
							[le.a.orange]: !h,
							[le.a.selected]: g
						}),
						tabIndex: g ? 0 : -1
					}, s.a.createElement(W.a, {
						src: c,
						className: Object(p.a)(le.a.subredditImage, {
							[le.a.isSelected]: g
						})
					})) : s.a.createElement(de.default, {
						target: "_blank",
						rel: "noopener noreferrer",
						to: n,
						className: Object(p.a)(le.a.commentSubreddit, le.a.asText, {
							[le.a.selected]: g
						}),
						tabIndex: g ? 0 : -1
					}, s.a.createElement("div", {
						className: le.a.text
					}, s.a.createElement("p", null, d))), s.a.createElement(de.default, {
						className: Object(p.a)(le.a.comment, {
							[le.a.selected]: g
						}),
						to: o,
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => E(Object(O.a)(b, u)),
						tabIndex: g ? 0 : -1
					}, s.a.createElement("div", {
						className: le.a.text
					}, s.a.createElement("p", null, l)), v && s.a.createElement("div", {
						className: Object(p.a)(le.a.subredditFloating, le.a.isTag)
					}, s.a.createElement(pe, {
						deeplink: _,
						subredditName: v,
						size: "tiny",
						isRed: !0,
						subredditId: m,
						tabIndex: g ? 0 : -1
					})), !f && s.a.createElement(k, {
						className: le.a.externalLinkButton
					}))))
				},
				fe = t("./src/reddit/actions/modal.ts"),
				Ee = t("./src/reddit/actions/notifications/index.ts"),
				he = t("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				ve = t("./src/reddit/actions/toaster.ts"),
				_e = t("./src/reddit/components/Settings/modalIds.ts"),
				Oe = t("./src/reddit/models/Toast/index.ts");
			const {
				fbt: Ne
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var je;
			! function(e) {
				e[e.VERIFY_EMAIL = 0] = "VERIFY_EMAIL", e[e.TURN_ON_DAYLY_DIGEST = 1] = "TURN_ON_DAYLY_DIGEST", e[e.TURN_ON_DN = 2] = "TURN_ON_DN", e[e.DONE = 3] = "DONE"
			}(je || (je = {}));
			var ke = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						cardTemplateColor: c,
						isEmailVerified: n,
						isDigestEnabled: l,
						subredditList: o
					},
					card: d,
					isSelected: m,
					isForSharing: g
				} = e;
				const f = Object(b.d)(),
					E = Object(N.a)(),
					h = Object(b.e)(e => {
						var a;
						return null === (a = e.user.account) || void 0 === a ? void 0 : a.email
					}),
					v = Object(b.e)(e => e.user.accountSettings.changeEmail.api.pending),
					[_, j] = Object(i.useState)(je.VERIFY_EMAIL),
					k = Object(i.useRef)(h),
					C = () => {
						Qe() ? j(je.DONE) : j(je.TURN_ON_DN)
					},
					S = () => {
						l ? C() : j(je.TURN_ON_DAYLY_DIGEST)
					};
				Object(i.useEffect)(() => {
					n ? S() : j(je.VERIFY_EMAIL)
				}, [d]), Object(i.useEffect)(() => {
					if (h !== k.current && _ === je.VERIFY_EMAIL) {
						const e = Object(ve.e)(Ne._("Email successfully updated!", null, {
							hk: "3iPlUp"
						}), Oe.b.SuccessCommunityGreen);
						f(Object(ve.f)(e)), S()
					}
				}, [h, _]), Object(i.useEffect)(() => {
					v && f(Object(fe.g)(_e.a))
				}, [v, f]);
				const y = async () => {
					await f(Object(Ee.requestBrowserNotificationPermissionPromptByUser)(_e.f)), Qe() && j(je.DONE), E(Object(O.h)())
				}, I = () => {
					f(Object(fe.h)(_e.a))
				}, x = () => {
					f(async (e, a) => {
						var t;
						await e(Object(he.d)({
							isEnabled: !0,
							messageType: "EMAIL_DIGEST"
						})), !!(null === (t = a().user.notificationPrefs.pushSettingsLayout.rows.byId.EMAIL_DIGEST) || void 0 === t ? void 0 : t.isEnabled) && C()
					}), E(Object(O.g)())
				};
				return s.a.createElement(se, {
					title: a,
					subtitle: t,
					cardTemplateColor: c,
					isSelected: m,
					isForSharing: g,
					isEndCard: !0
				}, s.a.createElement("div", {
					className: le.a.subredditList
				}, o.map((e, a) => s.a.createElement("div", {
					key: e.subredditId,
					style: {
						transitionDelay: `${.25*a+.4}s`
					},
					className: Object(p.a)(le.a.subreddit, {
						[le.a.selected]: m
					})
				}, s.a.createElement(pe, {
					key: e.subredditId,
					withAddButton: !0,
					deeplink: e.deeplink,
					subredditName: e.subredditName,
					isRed: c !== r.RED,
					size: "big",
					subredditId: e.subredditId,
					subscribed: e.isSubscribed,
					tabIndex: m ? 0 : -1
				})))), s.a.createElement("span", {
					className: le.a.endText
				}, (() => {
					const e = m ? 0 : -1;
					switch (_) {
						case je.TURN_ON_DN:
							return Ve(t, le.a.asLink, "", y, e);
						case je.VERIFY_EMAIL:
						case je.TURN_ON_DAYLY_DIGEST:
							return Ve(t, le.a.asLink, "", _ === je.VERIFY_EMAIL ? I : x, e);
						case je.DONE:
							return Ve(t, le.a.asLink, "", () => {
								f(Object(u.b)("/r/recap")), E(Object(O.b)())
							}, e)
					}
				})()))
			};
			var Ce = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						templateImageUrl: r,
						cardTemplateColor: c,
						backgroundImageUrl: i
					},
					isSelected: n,
					isForSharing: l
				} = e;
				return s.a.createElement(se, {
					title: a,
					subtitle: t,
					cardTemplateColor: c,
					isSelected: n,
					isForSharing: l
				}, s.a.createElement("div", {
					className: Object(p.a)(le.a.image, le.a.isCircle, le.a.noBg, {
						[le.a.isSelected]: n
					}),
					style: {
						backgroundImage: `url(${i})`
					}
				}, s.a.createElement(W.a, {
					src: r,
					className: Object(p.a)(le.a.fallbackStaticImage, le.a.illustration, {
						[le.a.isSelected]: n
					})
				})))
			};
			var Se = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						templateImageUrl: r,
						cardTemplateColor: c,
						backgroundImageUrl: n,
						dataCutoffText: l
					},
					isSelected: o
				} = e;
				const [d, m] = Object(i.useState)(!1);
				return Object(i.useEffect)(() => {
					setTimeout(() => {
						m(o)
					})
				}, [o]), s.a.createElement(se, {
					title: a,
					subtitle: t,
					cardTemplateColor: c,
					shouldHideShareButton: !0,
					isSelected: d,
					isInitialCard: !0
				}, s.a.createElement("div", {
					className: Object(p.a)(le.a.image, le.a.isCircle, le.a.initialCard, le.a.noBg, {
						[le.a.isSelected]: d
					}),
					style: {
						backgroundImage: `url(${n})`
					}
				}, s.a.createElement(W.a, {
					src: r,
					className: Object(p.a)(le.a.fallbackStaticImage, le.a.illustration, le.a.initialCard, {
						[le.a.isSelected]: d
					})
				})), s.a.createElement("span", {
					className: le.a.endText
				}, l))
			};
			var ye = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						postImageUrl: c,
						cardTemplateColor: i,
						postDeeplink: n,
						subredditName: l,
						postTitle: o,
						subredditId: d,
						postId: m
					},
					isSelected: b,
					isForSharing: u
				} = e;
				const g = Object(N.a)(),
					f = i === r.RED,
					{
						subredditLink: E
					} = Ke(n),
					h = Object(j.b)("external_link");
				return s.a.createElement(se, {
					title: a,
					subtitle: t,
					cardTemplateColor: i,
					isSelected: b,
					isForSharing: u
				}, s.a.createElement(de.default, {
					className: Object(p.a)(le.a.postWrapper, {
						[le.a.selected]: b
					}),
					to: n,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => g(Object(O.c)(m)),
					tabIndex: b ? 0 : -1
				}, c ? s.a.createElement("div", {
					className: Object(p.a)(le.a.image, le.a.post, {
						[le.a.orange]: !f,
						[le.a.isSelected]: b
					})
				}, s.a.createElement(W.a, {
					src: c,
					className: le.a.fallbackStaticImage
				}), s.a.createElement("div", {
					className: Object(p.a)(le.a.subredditFloating, le.a.isTag)
				}, s.a.createElement(pe, {
					deeplink: E,
					subredditName: l,
					size: "tiny",
					isRed: !0,
					subredditId: d,
					tabIndex: b ? 0 : -1
				})), !u && s.a.createElement(h, {
					className: le.a.externalLinkButton
				})) : s.a.createElement("div", {
					className: le.a.post
				}, s.a.createElement("div", {
					className: le.a.text
				}, s.a.createElement("p", null, o)), s.a.createElement("div", {
					className: Object(p.a)(le.a.subredditFloating, le.a.isTag)
				}, s.a.createElement(pe, {
					deeplink: E,
					subredditName: l,
					size: "tiny",
					isRed: !0,
					subredditId: d,
					tabIndex: b ? 0 : -1
				})), !u && s.a.createElement(h, {
					className: le.a.externalLinkButton
				}))))
			};
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			var Ie = e => {
					let {
						card: {
							title: a,
							subtitle: t,
							cardTemplateColor: r,
							topHexList: c
						},
						isSelected: i,
						isForSharing: l
					} = e;
					const o = Object(N.a)(),
						d = `${P.a.redditUrl}/r/place`,
						m = `${d}?fullscreen=true`,
						b = Object(j.b)("external_link"),
						u = c[0].toLowerCase() !== n.a.orangered;
					return s.a.createElement(se, {
						title: a,
						subtitle: t,
						cardTemplateColor: r,
						isSelected: i,
						isForSharing: l
					}, s.a.createElement(de.default, {
						className: le.a.rplaceWrapper,
						to: m,
						target: "_blank",
						rel: "noopener noreferrer",
						tabIndex: i ? 0 : -1,
						onClick: () => {
							o(Object(O.m)())
						}
					}, s.a.createElement("div", {
						className: Object(p.a)(le.a.rplaceContainer, {
							[le.a.selected]: i,
							[le.a.forSharing]: l
						})
					}, 1 === c.length ? Array.from(Array(20).keys()).map((e, a) => s.a.createElement("div", {
						key: a,
						style: {
							backgroundColor: c[0]
						}
					})) : s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						style: {
							backgroundColor: c[0]
						}
					}), s.a.createElement("div", {
						style: {
							backgroundColor: c[0]
						}
					}), s.a.createElement("div", {
						style: {
							backgroundColor: c[0]
						}
					}), s.a.createElement("div", {
						style: {
							backgroundColor: c[1]
						}
					}), s.a.createElement("div", {
						style: {
							backgroundColor: 3 === c.length ? c[2] : c[0]
						}
					}), s.a.createElement("div", {
						style: {
							backgroundColor: c[1]
						}
					}), s.a.createElement("div", {
						style: {
							backgroundColor: 3 === c.length ? c[2] : c[1]
						}
					}), s.a.createElement("div", {
						style: {
							backgroundColor: c[0]
						}
					}), s.a.createElement("div", {
						style: {
							backgroundColor: c[0]
						}
					}), s.a.createElement("div", {
						style: {
							backgroundColor: 3 === c.length ? c[1] : c[0]
						}
					}), s.a.createElement("div", {
						style: {
							backgroundColor: c[0]
						}
					}), s.a.createElement("div", {
						style: {
							backgroundColor: 3 === c.length ? c[1] : c[0]
						}
					}), s.a.createElement("div", {
						style: {
							backgroundColor: c[0]
						}
					}), s.a.createElement("div", {
						style: {
							backgroundColor: c[1]
						}
					}), s.a.createElement("div", {
						style: {
							backgroundColor: c[1]
						}
					}), s.a.createElement("div", {
						style: {
							backgroundColor: 3 === c.length ? c[0] : c[1]
						}
					}), s.a.createElement("div", {
						style: {
							backgroundColor: c[0]
						}
					}), s.a.createElement("div", {
						style: {
							backgroundColor: c[1]
						}
					}), s.a.createElement("div", {
						style: {
							backgroundColor: 3 === c.length ? c[2] : c[1]
						}
					}), s.a.createElement("div", {
						style: {
							backgroundColor: 3 === c.length ? c[2] : c[1]
						}
					}))), !l && s.a.createElement(s.a.Fragment, null, s.a.createElement("img", {
						className: Object(p.a)(le.a.canvas, {
							[le.a.selected]: i
						}),
						src: `${P.a.assetPath}/img/recap/rplace_canvas.png`,
						alt: ""
					}), s.a.createElement("div", {
						className: Object(p.a)(le.a.subredditFloating, le.a.isTag, le.a.subreddit, {
							[le.a.selected]: i
						})
					}, s.a.createElement(pe, {
						deeplink: d,
						subredditName: "place",
						size: "tiny",
						isRed: u,
						subredditId: "t5_2sxhs",
						tabIndex: i ? 0 : -1
					})), s.a.createElement("span", {
						className: Object(p.a)(le.a.externalLinkWrapper, {
							[le.a.selected]: i
						})
					}, !l && s.a.createElement(b, {
						className: le.a.icon
					})))))
				},
				xe = t("./src/reddit/actions/snoovatarModal.ts"),
				we = t("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Te = t("./src/reddit/icons/svgs/EditPencil/index.tsx");
			const {
				fbt: Re
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var Le = e => {
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
						isPremium: E,
						topicImageUrl: h,
						translatedLevel: v
					},
					isSelected: _,
					isForSharing: j
				} = e;
				const k = Object(b.d)(),
					C = Object(N.a)(),
					S = Object(i.useRef)(null),
					y = Object(i.useRef)(null),
					[I, x] = Object(i.useState)(""),
					w = Object(b.e)(e => e.recap.shouldHideAbilityCardUsername),
					T = Object(b.e)(e => e.recap.shouldHideAbilityCardAvatar),
					R = Object(b.e)(e => e.recap.shareCardWasOpened),
					L = l === r.WHITE || l === r.YELLOW,
					F = () => {
						j || (k(Object(g.b)()), C(Object(O.i)()))
					};
				return Object(i.useEffect)(() => {
					!_ && R && F()
				}, [_]), s.a.createElement(se, {
					title: a,
					subtitle: t,
					cardTemplateColor: l,
					isForSharing: j,
					shouldHideInfo: !0,
					isForAbilityCard: !j
				}, s.a.createElement("div", {
					className: Object(p.a)(le.a.visibilityWrapper, {
						[le.a.selected]: _
					}),
					tabIndex: -1
				}, s.a.createElement("div", {
					className: Object(p.a)(le.a.abilityCardWrapper, {
						[le.a.selected]: _,
						[le.a.forSharing]: j
					})
				}, s.a.createElement("style", {
					ref: y
				}, `\n        ${I}\n        `), s.a.createElement("div", {
					id: R && j ? "abilityCardShareId" : "",
					className: Object(p.a)(le.a.flippingWrapper, {
						[le.a.flipped]: R,
						[le.a.unflipped]: !R,
						[le.a.forSharing]: j
					}),
					onClick: F
				}, s.a.createElement("div", {
					className: Object(p.a)(le.a.frontCard, {
						[le.a.selected]: _
					}),
					id: !R && j ? "abilityCardShareId" : ""
				}, s.a.createElement("img", {
					className: le.a.cardBackground,
					src: `${P.a.assetPath}/img/recap/ability_card_front_side.png`,
					alt: ""
				}), s.a.createElement("img", {
					src: `${P.a.assetPath}/img/recap/3d_icon_question_mark 2.png`,
					alt: "",
					className: Object(p.a)(le.a.cardIcon, {
						[le.a.selected]: _
					})
				}), s.a.createElement("div", {
					className: Object(p.a)(le.a.frontText, {
						[le.a.selected]: _
					})
				}, s.a.createElement("div", {
					className: le.a.frontMainText
				}, Re._("What’s your secret Reddit ability?", null, {
					hk: "35uXbT"
				})), s.a.createElement("div", {
					className: le.a.frontSecondaryText
				}, Re._("Click to reveal", null, {
					hk: "32dQl2"
				})))), s.a.createElement("div", {
					className: Object(p.a)(le.a.backCard, {
						[le.a.selected]: _ && R
					})
				}, s.a.createElement("svg", {
					style: {
						visibility: "hidden",
						position: "absolute"
					},
					width: "0",
					height: "0",
					xmlns: "http://www.w3.org/2000/svg",
					version: "1.1"
				}, s.a.createElement("defs", null, s.a.createElement("filter", {
					id: "round"
				}, s.a.createElement("feGaussianBlur", {
					in: "SourceGraphic",
					stdDeviation: "2",
					result: "blur"
				}), s.a.createElement("feColorMatrix", {
					in: "blur",
					mode: "matrix",
					values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",
					result: "goo"
				}), s.a.createElement("feComposite", {
					in: "SourceGraphic",
					in2: "goo",
					operator: "atop"
				})))), s.a.createElement("div", {
					onMouseMove: e => {
						const a = S.current,
							t = y.current;
						if (!a || !t) return;
						const r = e.nativeEvent,
							i = [r.offsetX, r.offsetY];
						e.preventDefault();
						const s = i[0],
							n = i[1],
							l = a.clientHeight,
							o = a.clientWidth,
							d = 50 + (Math.abs(Math.floor(100 / o * s) - 100) - 50) / 1.5,
							m = 50 + (Math.abs(Math.floor(100 / l * n) - 100) - 50) / 1.5,
							b = `background-position: ${d}% ${m}%;`,
							p = `transform: rotateX(${(m-50)/2*-1}deg) rotateY(${(d-50)/1.5*.5}deg)`;
						u !== c.Common && x(`.${le.a.card}:hover::before { ${b} }`), a.setAttribute("style", p)
					},
					onMouseLeave: e => {
						const a = S.current;
						a && (a.removeAttribute("style"), x(""))
					},
					ref: S,
					className: Object(p.a)(le.a.card, {
						[le.a.common]: u === c.Common,
						[le.a.rare]: u === c.Rare,
						[le.a.epic]: u === c.Epic,
						[le.a.legendary]: u === c.Legendary,
						[le.a.flipped]: R,
						[le.a.shiny]: u !== c.Common
					})
				}, !j && s.a.createElement("button", {
					className: le.a.editAvatarWrapper,
					onClick: e => {
						e.stopPropagation(), k(Object(xe.b)({
							clickSource: "recap"
						})), C(Object(O.f)())
					},
					tabIndex: _ && R ? 0 : -1
				}, s.a.createElement(Te.a, {
					className: le.a.editAvatar
				})), s.a.createElement("img", {
					className: le.a.cardBackground,
					src: `${P.a.assetPath}/img/recap/${u.toLowerCase()}_ability_card_v2.png`,
					alt: ""
				}), s.a.createElement("span", {
					className: le.a.userName
				}, w ? Re._("Redditor", null, {
					hk: "UOiBC"
				}) : d), s.a.createElement("img", {
					src: T ? "https://i.redd.it/snoovatar/avatars/184bcb77-f84f-4c04-94c5-bec0e209b4ba.png" : o,
					className: le.a.abilityAvatar
				}), s.a.createElement("div", {
					className: le.a.karma
				}, s.a.createElement("span", {
					className: le.a.karmaValue
				}, m), Re._("{=karma}", [Re._param("=karma", s.a.createElement("span", {
					className: le.a.karmaTitle
				}, Re._("karma", null, {
					hk: "rtxTV"
				})))], {
					hk: "1vxzil"
				}), s.a.createElement("div", {
					className: Object(p.a)(le.a.cardRarity, {
						[le.a.rare]: u === c.Rare,
						[le.a.epic]: u === c.Epic,
						[le.a.legendary]: u === c.Legendary
					})
				}, v)), s.a.createElement("div", {
					className: le.a.abilityWrapper
				}, s.a.createElement("div", {
					className: le.a.ability
				}, s.a.createElement("span", null, a)), s.a.createElement("p", {
					className: le.a.stats
				}, t), s.a.createElement("div", {
					className: le.a.subreddits
				}, (null == f ? void 0 : f.length) ? f.map(e => e ? s.a.createElement(pe, {
					key: e.subredditId,
					className: le.a.subreddit,
					deeplink: null == e ? void 0 : e.deeplink,
					subredditName: null == e ? void 0 : e.subredditName,
					isRed: !0,
					size: "micro",
					subredditId: e.subredditId,
					tabIndex: -1
				}) : null) : null)), s.a.createElement("img", {
					className: le.a.topicBg,
					src: `${P.a.assetPath}/img/recap/${u.toLowerCase()}_card_topic_bg.png`
				}), s.a.createElement("img", {
					className: le.a.topic,
					src: h
				}), E && s.a.createElement("img", {
					className: le.a.premiumIcon,
					src: `${P.a.assetPath}/img/recap/premium.png`
				})))), !j && s.a.createElement("div", {
					className: le.a.controls
				}, s.a.createElement("div", {
					className: Object(p.a)(le.a.toggles, {
						[le.a.visible]: R
					})
				}, s.a.createElement("div", {
					className: Object(p.a)(le.a.hideName, {
						[le.a.selected]: _
					})
				}, Re._("{=Hide username}", [Re._param("=Hide username", s.a.createElement("div", {
					className: Object(p.a)(le.a.text, {
						[le.a.black]: L
					})
				}, Re._("Hide username", null, {
					hk: "2Q5Y03"
				})))], {
					hk: "3tRMJD"
				}), s.a.createElement(we.a, {
					on: w,
					onToggle: () => {
						k(Object(g.g)()), !w && C(Object(O.k)())
					},
					className: le.a.toggleButton,
					activeColorOverride: n.a.orangered,
					tabIndex: _ && R ? 0 : -1
				})), s.a.createElement("div", {
					className: Object(p.a)(le.a.hideAvatar, {
						[le.a.selected]: _
					})
				}, Re._("{=Hide avatar}", [Re._param("=Hide avatar", s.a.createElement("div", {
					className: Object(p.a)(le.a.text, {
						[le.a.black]: L
					})
				}, Re._("Hide avatar", null, {
					hk: "2395yu"
				})))], {
					hk: "3Mkh3e"
				}), s.a.createElement(we.a, {
					on: T,
					onToggle: () => {
						k(Object(g.f)()), !T && C(Object(O.j)())
					},
					className: le.a.toggleButton,
					activeColorOverride: n.a.orangered,
					tabIndex: _ && R ? 0 : -1
				}))), s.a.createElement($, {
					isSelected: _,
					isForAbilityCard: !0,
					tabIndex: _ ? 0 : -1
				})))))
			};
			var Fe = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						cardTemplateColor: c,
						subredditList: i,
						isSubscribed: n
					},
					isSelected: l,
					isForSharing: o
				} = e;
				return s.a.createElement(se, {
					title: a,
					subtitle: t,
					cardTemplateColor: c,
					isSelected: l,
					isForSharing: o
				}, s.a.createElement("div", {
					className: le.a.subredditList
				}, i.map((e, a) => s.a.createElement("div", {
					key: e.subredditId,
					style: {
						transitionDelay: `${.25*a+.4}s`
					},
					className: Object(p.a)(le.a.subreddit, {
						[le.a.selected]: l
					})
				}, s.a.createElement(pe, {
					withAddButton: !n,
					key: e.subredditId,
					deeplink: e.deeplink,
					subredditName: e.subredditName,
					isRed: c !== r.RED,
					size: "big",
					subredditId: e.subredditId,
					subscribed: e.isSubscribed,
					tabIndex: l ? 0 : -1
				})))))
			};
			var Ae = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						cardTemplateColor: c,
						topTopic: {
							topicImgUrl: i
						}
					},
					isSelected: n,
					isForSharing: l
				} = e;
				const o = c === r.RED;
				return s.a.createElement(se, {
					title: a,
					subtitle: t,
					cardTemplateColor: c,
					isSelected: n,
					isForSharing: l
				}, s.a.createElement("div", {
					className: Object(p.a)(le.a.image, le.a.isCircle, {
						[le.a.orange]: !o,
						[le.a.isSelected]: n
					})
				}, s.a.createElement(W.a, {
					src: i,
					className: Object(p.a)(le.a.fallbackStaticImage, le.a.small, {
						[le.a.isSelected]: n
					})
				}), s.a.createElement("div", {
					className: Object(p.a)(le.a.unitCircle, {
						[le.a.selected]: n
					})
				}, "#1")))
			};
			var Be, De = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						templateImageUrl: c,
						cardTemplateColor: i,
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
				return s.a.createElement(se, {
					title: a,
					subtitle: t,
					cardTemplateColor: i,
					isSelected: u,
					isForSharing: g
				}, s.a.createElement("div", {
					className: Object(p.a)(le.a.image, le.a.isCircle, le.a.noBg, {
						[le.a.isSelected]: u
					}),
					style: {
						backgroundImage: `url(${d})`
					}
				}, s.a.createElement(W.a, {
					src: c,
					className: Object(p.a)(le.a.fallbackStaticImage, le.a.illustration, {
						[le.a.isSelected]: u
					})
				}), s.a.createElement("div", {
					className: Object(p.a)(le.a.subredditFloating, le.a.animated, {
						[le.a.selected]: u
					}, le.a.isSubredditCard)
				}, s.a.createElement(pe, {
					deeplink: l,
					subredditName: n,
					isLong: !0,
					size: "small",
					isRed: i === r.WHITE,
					subredditId: o,
					tabIndex: u ? 0 : -1
				})), m && s.a.createElement("div", {
					className: Object(p.a)(le.a.unitCircle, le.a.top, {
						[le.a.selected]: u
					})
				}, m, s.a.createElement("span", {
					className: le.a.timeUnit
				}, b))))
			};
			! function(e) {
				e.WHITE = "#fff", e.MANGO_100 = "#fff8b8", e.MANGO_300 = "#ffd635", e.MANGO_500 = "#ffa800"
			}(Be || (Be = {}));
			const Pe = {
				[r.WHITE]: [Be.MANGO_500, Be.MANGO_300, Be.MANGO_100],
				[r.YELLOW]: [Be.WHITE, Be.MANGO_300, Be.MANGO_500]
			};
			var We, Me = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						cardTemplateColor: c,
						subredditList: i
					},
					isSelected: n,
					isForSharing: l
				} = e;
				return s.a.createElement(se, {
					title: a,
					subtitle: t,
					cardTemplateColor: c,
					isSelected: n,
					isForSharing: l
				}, s.a.createElement("div", {
					className: le.a.subredditList
				}, i.map((e, a) => s.a.createElement("div", {
					key: e.subredditId,
					className: Object(p.a)(le.a.subredditBar, {
						[le.a.selected]: n
					}),
					style: {
						width: `${n?Ze[a]:0}px`,
						backgroundColor: Pe[c][a],
						transitionDelay: `${.25*a+.4}s`
					}
				}, s.a.createElement("div", {
					className: Object(p.a)(le.a.time, {
						[le.a.selected]: n
					}),
					style: {
						transitionDelay: `${.125*a+.5*i.length}s`
					}
				}, e.totalTimeOnSubreddit, s.a.createElement("div", {
					className: le.a.unit
				}, e.timeUnit)), s.a.createElement("div", {
					style: {
						transitionDelay: `${.25*a+.8}s`
					},
					className: Object(p.a)(le.a.subreddit, {
						[le.a.selected]: n
					})
				}, s.a.createElement(pe, {
					deeplink: e.deeplink,
					subredditName: e.subredditName,
					isRed: c !== r.RED,
					size: "tiny",
					subredditId: e.subredditId,
					tabIndex: n ? 0 : -1,
					shouldAlternativeFocus: 1 === a
				}))))))
			};
			! function(e) {
				e.WHITE = "#fff", e.MANGO_300 = "#ffd635", e.MANGO_500 = "#ffa800"
			}(We || (We = {}));
			const He = [We.WHITE, We.MANGO_300, We.MANGO_500];
			var Ye = e => {
				let {
					card: {
						title: a,
						subtitle: t,
						cardTemplateColor: r,
						topTopicsList: c
					},
					isSelected: i,
					isForSharing: n
				} = e;
				return s.a.createElement(se, {
					title: a,
					subtitle: t,
					cardTemplateColor: r,
					isSelected: i,
					isForSharing: n
				}, s.a.createElement("div", {
					className: le.a.subredditList
				}, c.map((e, a) => s.a.createElement("div", {
					key: e.topicName,
					className: Object(p.a)(le.a.subredditBar, {
						[le.a.selected]: i
					}),
					style: {
						width: `${i?Ze[a]:0}px`,
						backgroundColor: He[a],
						transitionDelay: `${.25*a+.4}s`
					}
				}, s.a.createElement("div", {
					className: Object(p.a)(le.a.time, le.a.isTopic, {
						[le.a.selected]: i
					}),
					style: {
						transitionDelay: `${.125*a+.5*c.length}s`
					}
				}, `#${a+1}`, s.a.createElement("div", {
					className: le.a.unit
				}, e.topicName)), s.a.createElement("div", {
					className: Object(p.a)(le.a.topicIcon, {
						[le.a.selected]: i
					}),
					style: {
						transitionDelay: `${.25*a+.8}s`
					}
				}, s.a.createElement(W.a, {
					src: e.topicImgUrl,
					className: le.a.topicImage
				}))))))
			};
			const {
				fbt: Ue
			} = t("./node_modules/fbt/lib/FbtPublic.js"), Ge = {
				[r.RED]: "#ff4500",
				[r.YELLOW]: "#fff8b8",
				[r.BLACK]: "#000",
				[r.WHITE]: "#fff"
			}, Ze = [434, 373, 212];
			var ze;
			! function(e) {
				e.WHITE = "#fff", e.MANGO_100 = "#fff8b8", e.MANGO_300 = "#ffd635", e.MANGO_500 = "#ffa800"
			}(ze || (ze = {}));
			const Ve = function(e, a, t, r) {
					let c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1;
					const i = /(\*\*.*?\*\*)/g,
						n = e.split(i);
					return n.map((e, n) => i.test(e) ? 0 === c ? s.a.createElement("button", {
						key: e + n,
						className: a,
						onClick: r,
						tabIndex: c
					}, e.replace(/\*/g, "").replace(/ /g, " ")) : s.a.createElement("span", {
						key: e + n,
						className: Object(p.a)(a, {
							[t]: /\d/.test(e)
						}),
						onClick: r
					}, e.replace(/\*/g, "").replace(/ /g, " ")) : e)
				},
				qe = e => {
					let {
						card: a,
						isSelected: t,
						isForSharing: r,
						className: c
					} = e;
					return s.a.createElement("div", {
						className: c
					}, " ", (() => a ? (e => e.__typename === y)(a) ? s.a.createElement(Se, {
						card: a,
						isSelected: t
					}) : (e => e.__typename === S)(a) ? s.a.createElement(Ce, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === R)(a) ? s.a.createElement(Fe, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === w)(a) ? s.a.createElement(De, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === I)(a) ? s.a.createElement(ye, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === k)(a) ? s.a.createElement(ge, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === T)(a) ? s.a.createElement(Me, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === L)(a) ? s.a.createElement(oe, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === F)(a) ? s.a.createElement(Ye, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === A)(a) ? s.a.createElement(Ie, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === C)(a) ? s.a.createElement(ke, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : D(a) ? s.a.createElement(Le, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : (e => e.__typename === B)(a) ? s.a.createElement(Ae, {
						card: a,
						isSelected: t,
						isForSharing: r
					}) : s.a.createElement("div", null, a.title) : null)())
				},
				Ke = e => {
					const a = e.match(/(\/r\/)(.+?)(\/.*)/i),
						t = null == a ? void 0 : a[2];
					return {
						subredditName: t,
						subredditLink: `/r/${t}/`
					}
				},
				Qe = () => Object(K.a)() === Q.a.Granted;
			var Xe = t("./src/reddit/pages/Recap/Components/ShareModal/index.m.less"),
				Je = t.n(Xe);
			var $e = Object(q.a)(e => {
					let {
						cardTemplateColor: a,
						card: t,
						isAbilityCard: r,
						onDownloadCard: c,
						isDownloading: n,
						onClose: l
					} = e;
					const d = Object(i.useCallback)(e => {
							null !== e && t && e.focus()
						}, [t]),
						m = Object(i.useCallback)(e => {
							e.key === f.b.Escape && l && l()
						}, [l]);
					return Object(i.useEffect)(() => (window.addEventListener("keydown", m), () => window.removeEventListener("keydown", m)), [m]), s.a.createElement("div", {
						className: Je.a.modalWrapper,
						ref: d
					}, s.a.createElement("div", {
						className: Je.a.title
					}, s.a.createElement("span", {
						className: Je.a.titleCaption
					}, o.fbt._("Share", null, {
						hk: "2Y190R"
					})), s.a.createElement(v.a, {
						priority: v.c.PlainLink,
						kind: v.b.Button,
						Icon: Object(j.b)("close"),
						onClick: l,
						disabled: n,
						className: Je.a.titleCloseButton,
						iconClassName: Je.a.titleCloseButtonIcon,
						tabIndex: 1
					})), s.a.createElement("div", {
						className: Je.a.shareWrapper,
						style: {
							backgroundColor: r ? "none" : a
						}
					}, s.a.createElement("div", {
						className: Je.a.shareContainer,
						id: "shareId",
						style: {
							backgroundColor: r ? "none" : a
						}
					}, s.a.createElement(qe, {
						card: t,
						isSelected: !0,
						isForSharing: !0,
						className: Je.a.card
					}), !r && s.a.createElement("div", {
						className: Je.a.shareFooter
					}, s.a.createElement(H, {
						className: Object(p.a)(Je.a.logo)
					}), s.a.createElement("span", {
						className: Je.a.text
					}, "2022")))), s.a.createElement("div", {
						className: Je.a.controls
					}, s.a.createElement("div", {
						className: Je.a.download
					}, s.a.createElement(v.a, {
						priority: v.c.PlainLink,
						kind: v.b.Button,
						className: Object(p.a)(Je.a.shareButton),
						Icon: Object(j.b)("download"),
						iconClassName: Object(p.a)(Je.a.shareIcon),
						onClick: c,
						size: v.d.XL,
						disabled: n,
						tabIndex: 1
					}), s.a.createElement("div", {
						className: Object(p.a)(Je.a.title, {
							[Je.a.downloadIndicator]: n
						})
					}, n ? o.fbt._("Downloading...", null, {
						hk: "37jEC2"
					}) : o.fbt._("Download", null, {
						hk: "3UONFz"
					})))))
				}),
				ea = t("./src/reddit/selectors/activeModalId.ts"),
				aa = t("./src/reddit/selectors/user.ts"),
				ta = t("./src/reddit/pages/Recap/Components/index.m.less"),
				ra = t.n(ta);
			var ca = () => {
					const e = Object(b.d)(),
						a = Object(N.a)(),
						c = Object(b.e)(e => e.recap.shouldShowShareModal),
						n = () => e(Object(g.h)()),
						l = Object(b.e)(e => e.recap.isCardsLoading),
						d = Object(b.e)(e => e.recap.cardsLoadingError),
						k = Object(b.e)(e => e.recap.currentCardIndex),
						C = Object(b.e)(e => e.recap.shareCardWasOpened),
						S = Object(b.e)(e => Object(h.X)(e, {
							pageLayer: e.platform.currentPage
						})),
						[y, I] = Object(i.useState)(!1),
						x = Object(b.e)(e => e.recap.cards),
						[w, T] = Object(i.useState)(!1),
						[R, L] = Object(i.useState)(!0),
						F = Object(b.e)(e => Object(ea.b)(E.a.SNOOVATAR_MODAL)(e)),
						A = Object(b.e)(aa.l),
						B = Math.ceil((k + 1) / 6),
						P = k - 6 * (B - 1),
						W = x.length > 6 && B > 1,
						M = 6 * (B - 1),
						H = M + 6,
						Y = 6 * B < x.length,
						U = x.length && D(x[k]),
						Z = x.length && (x[k].cardTemplateColor === r.WHITE || x[k].cardTemplateColor === r.YELLOW),
						z = Object(i.useCallback)(() => {
							e(Object(g.c)()), e(Object(g.a)())
						}, [e]);
					Object(i.useEffect)(() => {
						Object(g.d)(!0), A && Object(_.Tb)(null == A ? void 0 : A.id)
					}, [F, e, A, a]), Object(i.useEffect)(() => {
						a(Object(O.q)()), z()
					}, [z, a]), Object(i.useEffect)(() => {
						x.length && a(Object(O.p)())
					}, [x, k, a]);
					const q = Object(i.useRef)(m()((a, t, r, c, i, s) => {
							const n = t - 1;
							let l = r;
							if (c && i && !s) return e(Object(g.b)());
							(a instanceof WheelEvent && a.deltaY > 0 || a instanceof KeyboardEvent && a.code === f.b.ArrowDown) && (l = r + 1 <= n && r + 1 >= 0 ? r + 1 : r), (a instanceof WheelEvent && a.deltaY < 0 || a instanceof KeyboardEvent && a.code === f.b.ArrowUp) && (l = r - 1 <= n && r - 1 >= 0 ? r - 1 : r), e(Object(g.e)({
								index: l
							}))
						}, 2e3, {
							trailing: !1
						})),
						K = Object(i.useCallback)(e => {
							if (null !== e && x.length && !c) {
								if (e.focus(), U && !y && !C) return I(!0);
								e.onwheel = e => {
									L(!0), q.current(e, x.length, k, !!U, y, C)
								}, e.onkeydown = e => {
									e.key !== f.b.ArrowDown && e.key !== f.b.ArrowUp || (L(!0), q.current(e, x.length, k, !!U, y, C))
								}
							}
						}, [x, k, c, C, y, U]),
						Q = s.a.useCallback(async () => {
							let e = document.getElementById("shareId");
							if (U && (e = document.getElementById("abilityCardShareId")), e) {
								T(!0);
								const a = await (() => t.e(4).then(t.bind(null, "./node_modules/html-to-image/es/index.js")))(),
									r = await a.getFontEmbedCSS(e),
									c = await a.toPng(e, {
										backgroundColor: U ? "transparent" : Ge[x[k].cardTemplateColor],
										canvasHeight: U ? 243 : 540,
										canvasWidth: U ? 170 : 960,
										style: {
											scale: "1"
										},
										fontEmbedCSS: r
									});
								if (c) {
									const e = document.createElement("a");
									e.download = `reddit_recap_card${k}.png`, e.href = c, e.click(), T(!1), n()
								}
							}
						}, [e, k]),
						X = Object(i.useCallback)(() => {
							e(S ? Object(u.a)() : Object(u.b)("/")), a(Object(O.e)())
						}, [S, e, a]);
					return d ? s.a.createElement(G, {
						onRetry: z
					}) : s.a.createElement(s.a.Fragment, null, l ? s.a.createElement(V, null) : s.a.createElement("div", {
						ref: K,
						className: ra.a.cardsContainer,
						tabIndex: 0
					}, s.a.createElement("div", {
						className: Object(p.a)(ra.a.wrapper, {
							[ra.a.animated]: R
						}),
						style: {
							top: `${100*-k}%`,
							backgroundColor: Ge[x[k].cardTemplateColor]
						}
					}, x.map((e, a) => s.a.createElement("div", {
						className: ra.a.card,
						key: e.id
					}, s.a.createElement(qe, {
						card: e,
						isSelected: a === k
					})))), k < x.length - 1 && s.a.createElement(v.a, {
						onClick: () => {
							e(Object(g.e)({
								index: k + 1
							}))
						},
						priority: v.c.PlainLink,
						kind: v.b.Button,
						Icon: Object(j.b)("down"),
						key: k,
						className: Object(p.a)(ra.a.downButton, {
							[ra.a.black]: !!Z
						}),
						iconClassName: ra.a.downButtonIcon
					}), s.a.createElement(v.a, {
						className: Object(p.a)(ra.a.closeButton, {
							[ra.a.black]: x[k].cardTemplateColor === r.BLACK
						}),
						Icon: Object(j.b)("close"),
						iconClassName: Object(p.a)(ra.a.closeButtonIcon, {
							[ra.a.black]: !!Z
						}),
						onClick: X,
						priority: v.c.PlainLink,
						kind: v.b.Button,
						title: o.fbt._("Close recap", null, {
							hk: "3tZkDG"
						}),
						tabIndex: 0
					}), s.a.createElement("div", {
						className: ra.a.pager
					}, W && s.a.createElement("button", {
						className: Object(p.a)(ra.a.nextDot, {
							[ra.a.black]: !!Z
						}),
						onClick: () => {
							L(!1), e(Object(g.e)({
								index: M - 1
							}))
						},
						tabIndex: 0
					}), x.slice(M, H).map((a, t) => s.a.createElement("button", {
						key: t,
						className: Object(p.a)(ra.a.progressDot, {
							[ra.a.active]: t === P,
							[ra.a.black]: !!Z
						}),
						onClick: () => {
							L(!1), e(Object(g.e)({
								index: t + M
							}))
						},
						tabIndex: 0
					})), Y && s.a.createElement("button", {
						className: Object(p.a)(ra.a.nextDot, {
							[ra.a.black]: !!Z
						}),
						onClick: () => {
							L(!1), e(Object(g.e)({
								index: H
							}))
						},
						tabIndex: 0
					})), c && s.a.createElement($e, {
						onOverlayClick: () => n(),
						withOverlay: !0,
						card: x[k],
						cardTemplateColor: Ge[x[k].cardTemplateColor],
						isAbilityCard: !!U,
						isDownloading: w,
						onDownloadCard: Q,
						onClose: n
					})))
				},
				ia = t("./src/reddit/pages/Recap/index.m.less"),
				sa = t.n(ia);
			a.default = () => s.a.createElement(l.a, {
				content: s.a.createElement(ca, null),
				className: sa.a.content,
				backgroundColor: n.a.orangered
			})
		},
		"./src/redditGQL/operations/RegisterWebPushToken.json": function(e) {
			e.exports = JSON.parse('{"id":"197650c1946c"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Recap.4a922e3de9e367110edb.js.map