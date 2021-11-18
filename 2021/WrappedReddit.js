// https://www.redditstatic.com/desktop2x/WrappedReddit.269349d8de2b899d6a88.js
// Retrieved at 11/17/2021, 8:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["WrappedReddit", "PushNotifications"], {
		"./src/lib/notifications/token.ts": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return d
			})), t.d(a, "b", (function() {
				return o
			}));
			var r = t("./src/config.ts"),
				n = t("./src/redditGQL/operations/RegisterWebPushToken.json"),
				s = t("./src/lib/makeGqlRequest/index.ts"),
				i = t("./src/lib/serviceWorker/index.ts"),
				c = t("./src/lib/timezone/index.ts"),
				l = e => {
					const a = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"),
						t = window.atob(a),
						r = new Uint8Array(t.length);
					for (let n = 0; n < t.length; ++n) r[n] = t.charCodeAt(n);
					return r
				};
			var d;
			! function(e) {
				e[e.Success = 0] = "Success", e[e.FailedGeneric = 1] = "FailedGeneric", e[e.FailedResponse = 2] = "FailedResponse", e[e.FailedGqlReponse = 3] = "FailedGqlReponse", e[e.FailedNoServiceWorker = 4] = "FailedNoServiceWorker", e[e.FailedNoSubscription = 5] = "FailedNoSubscription"
			}(d || (d = {}));
			const o = async e => {
				try {
					const a = await Object(i.a)();
					if (!a) return d.FailedNoServiceWorker;
					let t = await a.pushManager.getSubscription();
					if (!t) {
						const e = {
							userVisibleOnly: !0,
							applicationServerKey: l(r.a.pushNotificationApplicationServerKey)
						};
						t = await a.pushManager.subscribe(e)
					}
					if (!t) return d.FailedNoSubscription;
					const o = await ((e, a) => {
						const t = {
							pushToken: JSON.stringify(a),
							timezoneName: Object(c.b)() || c.a,
							timestamp: (new Date).toISOString(),
							language: "en_us"
						};
						return Object(s.a)(e(), {
							...n,
							variables: t
						})
					})(e, t);
					if (o && !o.ok) return d.FailedResponse;
					const m = null == o ? void 0 : o.body.data.registerWebPushToken;
					return m && !m.ok ? d.FailedGqlReponse : d.Success
				} catch (a) {
					return console.error(a), d.FailedGeneric
				}
			}
		},
		"./src/reddit/actions/notifications/index.ts": function(e, a, t) {
			"use strict";
			t.r(a), t.d(a, "initializeServiceWorkerChannel", (function() {
				return C
			})), t.d(a, "requestNotificationsPermissions", (function() {
				return O
			})), t.d(a, "subscribeForPNs", (function() {
				return j
			})), t.d(a, "unsubscribeFromPNs", (function() {
				return L
			})), t.d(a, "requestBrowserNotificationPermissionPromptByUser", (function() {
				return y
			})), t.d(a, "subscribeToPermissionsChange", (function() {
				return I
			}));
			var r = t("./node_modules/fbt/lib/FbtPublic.js"),
				n = t("./node_modules/lodash/omit.js"),
				s = t.n(n),
				i = t("./src/lib/browser/isIncognito.ts"),
				c = t("./src/lib/notifications/token.ts"),
				l = t("./src/lib/notifications/index.ts"),
				d = t("./src/lib/notifications/constants.ts"),
				o = t("./src/lib/serviceWorker/index.ts"),
				m = t("./src/reddit/actions/chat/toggle.ts"),
				u = t("./src/reddit/actions/modal.ts"),
				p = t("./src/reddit/actions/notifications/utils.ts"),
				b = t("./src/reddit/actions/tabBadging.ts"),
				_ = t("./src/reddit/actions/toaster.ts"),
				g = t("./src/reddit/helpers/parseUrl.ts"),
				E = t("./src/reddit/helpers/tabBadging/index.ts"),
				f = t("./src/reddit/helpers/trackers/notifications.ts"),
				h = t("./src/reddit/models/Toast/index.ts"),
				N = t("./src/reddit/selectors/meta.ts"),
				v = t("./src/reddit/selectors/user.ts");
			let k = !1;
			const C = async (e, a) => {
				const t = Object(v.J)(e);
				if (k) return;
				if (k = !0, Object(p.a)(e) !== d.c.NotificationsSupported) return;
				await Object(o.a)();
				navigator.serviceWorker.addEventListener("message", r => {
					const n = r.data,
						i = n.command || n.type;
					if ("registerWithServiceWorker" === i) S(e);
					else if (i === E.a && t) {
						const e = s()(n, ["command"]);
						a(Object(b.f)(e))
					} else if ("navigate.chat" === i) {
						const e = Object(g.a)(n.data.href);
						e && e.pathname && a(Object(m.c)(e.pathname))
					}
				}), S(e)
			}, S = e => {
				navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: "registerClient",
					v2EventBoilerPlate: f.c(e)
				})
			}, O = (e, a, t = (() => {})) => async (r, n, s) => {
				const c = n(),
					o = Object(N.f)(c);
				if (await Object(i.a)() || o) return;
				await C(c, r);
				f.j(c), Object(l.b)(e, a, () => {
					r(Object(d.o)()), r(Object(d.n)()), f.h(c)
				}, (e, a) => {
					r(Object(d.l)()), r(L(a ? d.a.Denied : d.a.Closed)), e && (a ? f.e(c) : f.f(c))
				}, e => {
					r(Object(d.m)()), r(j()), e && f.d(c)
				}, () => {
					r(Object(d.k)()), t()
				})
			}, j = e => async (a, t, n) => {
				const s = t();
				try {
					switch (await Object(c.b)(n.gqlContext)) {
						case c.a.Success:
							Object(p.b)(d.a.Granted), f.k(s), e && a(Object(_.f)({
								kind: h.b.SuccessCommunity,
								text: r.fbt._("Changes saved", null, {
									hk: "wGH5U"
								})
							}));
							break;
						case c.a.FailedResponse:
							f.i(s, "registration_failed_generally");
							break;
						case c.a.FailedGqlReponse:
							f.i(s, "registration_failed_in_gql")
					}
				} catch (i) {
					f.i(s, "registration_failed_uncaught_exception"), console.error(i)
				}
			}, L = (e, a) => async t => {
				try {
					Object(p.b)(e);
					const n = await Object(o.a)();
					if (n) {
						const e = await n.pushManager.getSubscription();
						e && (e.unsubscribe(), a && t(Object(_.f)({
							kind: h.b.SuccessCommunity,
							text: r.fbt._("Changes saved", null, {
								hk: "wGH5U"
							})
						})))
					}
				} catch (n) {}
			}, y = e => async (a, t) => {
				const r = t();
				if (Object(p.a)(r) === d.c.NotificationsSupported) switch (Object(l.a)()) {
					case d.a.Default:
					case d.a.Closed:
						a(O(!0, !0));
						break;
					case d.a.Denied:
						a(Object(u.h)(e))
				}
			}, I = () => async (e, a) => {
				var t;
				if (!(null === (t = null === navigator || void 0 === navigator ? void 0 : navigator.permissions) || void 0 === t ? void 0 : t.query)) return;
				const r = a();
				if (Object(p.a)(r) !== d.c.NotificationsSupported) return;
				const n = await navigator.permissions.query({
					name: "notifications"
				});
				n.onchange = () => (a => {
					switch (a) {
						case d.a.Denied:
							e(L(d.a.Denied)), f.e(r);
							break;
						case d.a.Granted:
							e(j()), f.d(r);
							break;
						default:
							e(L(d.a.Default))
					}
				})(n.state)
			}
		},
		"./src/reddit/components/Media/LoadingIcon/index.m.less": function(e, a, t) {
			e.exports = {
				image: "_1Wd26c2ichqUxeZVJStEJT"
			}
		},
		"./src/reddit/components/Media/LoadingIcon/index.tsx": function(e, a, t) {
			"use strict";
			var r = t("./node_modules/react/index.js"),
				n = t.n(r),
				s = t("./src/config.ts"),
				i = t("./src/reddit/components/Media/LoadingIcon/index.m.less"),
				c = t.n(i);
			a.a = () => n.a.createElement("img", {
				className: c.a.image,
				src: `${s.a.assetPath}/img/loading.gif`
			})
		},
		"./src/reddit/helpers/trackers/notifications.ts": function(e, a, t) {
			"use strict";
			t.d(a, "h", (function() {
				return l
			})), t.d(a, "d", (function() {
				return d
			})), t.d(a, "e", (function() {
				return o
			})), t.d(a, "f", (function() {
				return m
			})), t.d(a, "j", (function() {
				return p
			})), t.d(a, "k", (function() {
				return b
			})), t.d(a, "i", (function() {
				return _
			})), t.d(a, "c", (function() {
				return E
			})), t.d(a, "b", (function() {
				return f
			})), t.d(a, "g", (function() {
				return h
			})), t.d(a, "a", (function() {
				return N
			}));
			var r = t("./src/reddit/selectors/telemetry.ts"),
				n = t("./src/telemetry/index.ts"),
				s = t("./src/telemetry/models/Event.ts");
			const i = e => ({
					...r.defaults(e),
					noun: "desktop_notification_permissions"
				}),
				c = e => e ? "enable" : "disable",
				l = e => {
					Object(n.a)({
						...i(e),
						action: s.c.View,
						source: "popup"
					})
				},
				d = e => {
					Object(n.a)({
						...i(e),
						action: s.c.Allow,
						source: "popup"
					})
				},
				o = e => {
					Object(n.a)({
						...i(e),
						action: s.c.Block,
						source: "popup"
					})
				},
				m = e => {
					Object(n.a)({
						...i(e),
						action: s.c.Close,
						source: "popup"
					})
				},
				u = (e, a, t) => ({
					...r.defaults(e),
					actionInfo: r.actionInfo(e, {
						success: a,
						reason: t
					}),
					noun: "push_token"
				}),
				p = e => {
					Object(n.a)({
						...u(e, !0),
						action: s.c.Request,
						source: "notification"
					})
				},
				b = e => {
					Object(n.a)({
						...u(e, !0),
						action: s.c.Register,
						source: "notification"
					})
				},
				_ = (e, a) => {
					Object(n.a)({
						...u(e, !1, a),
						action: s.c.Bail,
						source: "notification"
					})
				},
				g = e => ({
					...r.defaults(e),
					noun: "push_notification"
				}),
				E = e => ({
					...g(e),
					notification: r.notification(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				f = (e, a) => t => ({
					...r.defaults(t),
					action: c(e),
					email: {
						type: a
					},
					noun: "email",
					source: "email_app_settings"
				}),
				h = (e, a) => t => ({
					...r.defaults(t),
					action: c(e),
					notification: {
						type: a
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				N = e => a => ({
					...r.defaults(a),
					source: "email_app_settings",
					action: c(e),
					noun: "email",
					notification: {
						type: "all"
					}
				})
		},
		"./src/reddit/pages/WrappedReddit/CardTemplates/ShareCard/index.m.less": function(e, a, t) {
			e.exports = {
				shareCardImage: "_1TS51iCvSVd-d9_gD4FmR3",
				shareCardFrontImage: "_11r7eI4mVYXxm-Fxiz-oiX",
				cardContainer: "o3R6cGmUSQKjhtEXN9OCe",
				card: "_3qlrCLHmhwJORlc9eQSr72",
				flipCard: "j5fxvWacCEwhokarEVJDy",
				front: "_1hTNxOhOFgqhff1g_tj0mv",
				back: "_R4QfwReNhOWnlVII1PV_",
				editAvatarWrapper: "BfOsgXPXzKhQiDPgNPALU",
				editAvatar: "_2TKA6msDL1xJcqwyNhcKWW",
				hideWrapper: "_1FxusKtLOZoVEo1PMRyKlt",
				titleWrapper: "_2xo94Zs5f3Ec7r2uAcmoqi",
				infoRedditRecap: "_2Z19AP1bUCguKWdF2QFRUb",
				title: "_3Pbe1JrgzKsTOO1uXXk5Li",
				toggle: "_1OKHxCPT4QNjFMM_s_hSrr",
				shareCardImageWrrapper: "_11mAT-KtfDQnh49BKrNeuY",
				isPremium: "_2XqYiUy2viXUuB_MkvMyyY",
				whiteBackground: "_2c9eo6291gOgf_NAcXSJox",
				backgroundWithGradient: "_2GRqkIyZ4Yt8UnHxg0zPDE",
				isEpicLevel: "_2Y8F65_FqmmZFuIDtPZGJC",
				isLegendaryLevel: "_1BicOTZcm92MOTsPEreCPh",
				isRareLevel: "Ek6bPpn0avVM4uaM-Iz9j",
				isCommonLevel: "_3Rr-lPeCSZh6-YCcCU1gKj",
				infoWrapper: "jIWTAYHlx8SvK5UN1QU__",
				headerWrapper: "_2W1hkHEy9OL_aLfGp88ia2",
				logo: "KAOXo4ZOySb0w7Hn1i3-S",
				user: "_2ev16MiAH7fPDkm65NkotZ",
				userName: "_1A4Pc01QwCQahfMKgUZjFF",
				userLevel: "_16kCFnr1lFnAOUCdQ9QZyU",
				userKarma: "_3UiYJ9taUEV7059LAKY16a",
				countKarma: "_1J57JU2rz93gZXzldeHw3E",
				karma: "_1WqeqimBm5DvkiyIdTrkp6",
				bottomWrapper: "_3ymoLShiOUY1RrTBLOuGur",
				abilityRow: "_2roJjTG8r-oUHdfswpEz2x",
				abilityValue: "_3MuYFC6TReuvvNMtGvTRtd",
				abilityTitle: "TOZAlOw2NfAtCtr7Icgj8",
				cardLinesWrapper: "_3taPFQHS9D3zo3maA7uWpb",
				subredditListWrapper: "_1eMetQtkk7o8D67BcPULwL",
				subreddit: "bZt3IiHTeh5K-Y0cA8COL",
				year: "_1oRYpsJptwFiMzIVRwDmZF"
			}
		},
		"./src/reddit/pages/WrappedReddit/CardTemplates/index.m.less": function(e, a, t) {
			e.exports = {
				headingWrapper: "_18S6IdNay3SgMX7GQb0rM5",
				headingSection: "_1xC63cnY2qhjcYGIDQr7hS",
				headingContent: "NWNkhjewZJ2Q9XFqF2xlz",
				headingArt: "_1xKv7jpijv-5V_BZwrB8Mj",
				headingText: "_3ptfBsE_93gCuF4-52fpgf",
				defaultCardImage: "_3RM4uvqqBD52Fqs3_XLQ5I",
				imageDataWrapper: "_1ZpWx2bEBGU4dIy5w_h8nj",
				plusText: "_3wN4JPXMZwZzhMdfSolGyc",
				hiddenPlusText: "_1zmrWYAmY-wKd0rieqK7Ne",
				singleStatScoreWrapper: "_1SqgsAQwlYb9_h91-px85o",
				valueText: "_2R2mdVEyuuUlidllioYj3j",
				unitText: "_1Zb0qsuAre2xPGS6DrrNVi",
				fallbackStaticImage: "_4etB0gRP4CKmxUYekZpJP",
				logoWrapper: "_1ufzPXvq3tlzqa6TZ0skPJ",
				logoText: "afHn7lZ6Wk9FWD-xNTOQJ",
				heading: "_3ER-k3B79GQfzEIsBNj98o",
				introHeading: "A7wOFtb44OozFe8auC72T",
				logo: "_1Gk7CZ2cl92UsnRsSU8gGf",
				subheading: "_2ew6PsvBNfoRlK5tQpjgPu",
				subredditLink: "_42Lq-ymewUWKmMvF_0XgC",
				isSingleStatSubreddit: "_27uJ5XJbuWMt7zys4AFCr4",
				isPostCard: "_294-3KMZgcOkz1x3mUJF6P",
				subredditLinkR: "_2vsqnexkR03Fp1H6fe-8HR",
				subredditLinkName: "_19dfU5Buxa1F47TloUw_Ae",
				subredditLinkWrapper: "_10MUGyr3r5IF0igOxcKb5f",
				introLogo: "_23V0Q5WE2qVFhWsvOgoDGp",
				subredditListSection: "_3axVoFkpPzPJfv-NNbP2zd",
				subredditSection: "siHTla9cpu7IcTiyYLY3r",
				subredditCircle: "_1RA6WTvia8Oxp_ijsbzRkU",
				subredditCircleValue: "_2ibe3BH0I97pO6BXb2NHdp",
				subredditCircleUnit: "_1PU7Q796VrZ_VONgjN3jyE",
				singleStatWrapper: "_1PfCwo_7qWJRI3xv2jNzI5",
				singleStatSubredditCircle: "_3OvkdVPHBd8b86w62UYg0f",
				singleStatSubredditCircleValue: "_1twk7iLNEPfvR01c8zcrgu",
				singleStatSubredditCircleUnit: "_2BM7AdCOl4gM5v3sBVX1am",
				postCardCircle: "_2qAW-U2-fytSh-DL1YbJKo",
				postCardCircleValue: "_1K-GWWKWZYwEsbq_KGzWku",
				postCardCircleUnit: "_2AvQ3XgIMtesexOxUgMYwD",
				commentPostTitle: "_1mi0t2pwj86Xa9jSzTx9pp",
				isEmptyImage: "_1yOJZ_L54EDkUGS5fFapfC",
				postImageWrapper: "NCD7Lg1hov9wHF0H0I_lD",
				postEmptyImage: "tZ6F5HhO-em1_BXUKoNOC",
				isComment: "dWIpi9eGG7WMH-dcMQkGY",
				endWrapper: "_2PFqLWzOOhKdAlQo-KXjqt",
				endTitle: "T7r5-H8FGZ4OnKbMlLLfP",
				asLink: "_1USiMcV0p-9oW4yO-4DN3E"
			}
		},
		"./src/reddit/pages/WrappedReddit/Carousel/index.m.less": function(e, a, t) {
			e.exports = {
				carousel: "sLLDRdg6QdhlK0LqJvfi7",
				buttonsWrapper: "KpMLEPYvCluY4sZ6rhE7",
				ctaButton: "_2FYxW2MvghHNY6Up6fywCR",
				pager: "_3awt0Ajh4khxxmGRRupQ6t",
				progressDot: "_3gi75d2lmY2lSAkpTt6aJO",
				active: "_1VXJhfgd81c7po-cIzGKjc",
				nextDot: "_2R2s6ELkzFG2L3Erje7d6y",
				background: "_11m516p1kLIP5fDoSFoB6c",
				contentWrapper: "_2Dhe9KrHuRwlsqqn88Zhkv",
				errorLogo: "_2rrrjqRbJDkq99piHf7HKC",
				errorTitle: "_2P0H3pU6oU5D-7_6ti2GUU",
				errorSubTitle: "_21CghEaA-Ilq1qbQqtHicv",
				retryButton: "_2SdBPEg1ClCfy5bYH4M245",
				errorText: "_233NC14AqjwsEthl0fLrl",
				downloadIcon: "_19XymTvdXr_7JJtmEL7k1e",
				loadingIconWrapper: "_2XAbQ6OYwPVu7Ce_T3XMFC"
			}
		},
		"./src/reddit/pages/WrappedReddit/index.tsx": function(e, a, t) {
			"use strict";
			t.r(a);
			var r = t("./node_modules/react/index.js"),
				n = t.n(r),
				s = (t("./assets/fonts/RedditSans/font.less"), t("./node_modules/react-redux/es/index.js")),
				i = t("./src/lib/classNames/index.ts"),
				c = t("./src/lib/makeActionCreator/index.ts"),
				l = t("./src/reddit/actions/wrappedReddit/constants.ts"),
				d = t("./src/lib/makeGqlRequest/index.ts"),
				o = t("./src/redditGQL/operations/PersonalizedYearInReview.json");
			var m = t("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				u = t("./src/reddit/selectors/user.ts");
			const p = Object(c.a)(l.c),
				b = Object(c.a)(l.b),
				_ = Object(c.a)(l.a),
				g = Object(c.a)(l.d),
				E = () => async (e, a, {
					gqlContext: t
				}) => {
					var r, n;
					const s = a();
					if (!Object(u.K)(s)) return Object(m.a)(e, s);
					e(p());
					const i = await (async (e, a) => {
						return await Object(d.a)(e, {
							...o,
							variables: a
						})
					})(t(), {});
					if (!i.ok) {
						const a = i.error;
						return void e(_({
							error: a
						}))
					}
					const c = i.body,
						l = ((null === (n = null === (r = null == c ? void 0 : c.data) || void 0 === r ? void 0 : r.personalizedYearInReview) || void 0 === n ? void 0 : n.cards) || []).map((e, a) => ({
							...e,
							id: `wrapped_reddit${a}`
						}));
					e(b({
						cards: l
					}))
				};
			var f, h = t("./src/reddit/constants/modals.ts"),
				N = t("./src/reddit/controls/Button/index.tsx"),
				v = t("./src/reddit/icons/svgs/Download/index.tsx");
			! function(e) {
				e.Common = "COMMON", e.Rare = "RARE", e.Epic = "EPIC", e.Legendary = "LEGENDARY"
			}(f || (f = {}));
			const k = "PersonalizedYearInReviewCommentCard",
				C = "PersonalizedYearInReviewEndCard",
				S = "PersonalizedYearInReviewGenericCard",
				O = "PersonalizedYearInReviewIntroCard",
				j = "PersonalizedYearInReviewPostCard",
				L = "PersonalizedYearInReviewShareCard",
				y = "PersonalizedYearInReviewSingleStatCard",
				I = "PersonalizedYearInReviewSubredditCard",
				w = "PersonalizedYearInReviewSubredditListCard",
				x = "PersonalizedYearInReviewSingleStatSubredditListCard",
				R = e => e.__typename === L;
			var P = t("./src/reddit/icons/svgs/Replay/index.tsx"),
				T = t("./src/config.ts"),
				W = t("./src/lib/notifications/index.ts"),
				F = t("./src/lib/notifications/constants.ts"),
				A = t("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				U = t("./src/reddit/controls/InternalLink/index.tsx"),
				D = t("./src/reddit/icons/svgs/Snoo/index.tsx"),
				Y = t("./src/reddit/pages/WrappedReddit/CardTemplates/index.m.less"),
				M = t.n(Y);
			const {
				fbt: G
			} = t("./node_modules/fbt/lib/FbtPublic.js"), q = ({
				card: {
					title: e,
					subtitle: a,
					id: t
				},
				children: r
			}) => {
				const s = We();
				return n.a.createElement("div", {
					className: M.a.headingSection,
					id: t
				}, s, n.a.createElement("div", {
					className: Object(i.a)(M.a.headingWrapper, M.a.headingContent)
				}, n.a.createElement("div", {
					className: M.a.headingText
				}, n.a.createElement("div", {
					className: Object(i.a)(M.a.logoWrapper)
				}, n.a.createElement(D.a, {
					className: M.a.logo
				}), n.a.createElement("h1", {
					className: M.a.logoText
				}, G._("Reddit Recap", null, {
					hk: "KZIbz"
				}))), n.a.createElement("h2", {
					className: M.a.heading
				}, e), n.a.createElement("h3", {
					className: M.a.subheading
				}, a)), r))
			}, K = ({
				link: e,
				subredditName: a,
				className: t
			}) => G._("{=r/[subredditName]}", [G._param("=r/[subredditName]", n.a.createElement(U.a, {
				className: Object(i.a)(M.a.subredditLink, t),
				to: e
			}, G._("{=r/}{=[subredditName]}", [G._param("=r/", n.a.createElement("span", {
				className: M.a.subredditLinkR
			}, G._("r/", null, {
				hk: "3iHcmO"
			}))), G._param("=[subredditName]", n.a.createElement("span", {
				className: M.a.subredditLinkName
			}, G._("{subredditName}", [G._param("subredditName", a)], {
				hk: "2MKspf"
			})))], {
				hk: "x9Hc0"
			})))], {
				hk: "30rzWQ"
			}), B = ({
				link: e,
				className: a,
				children: t
			}) => n.a.createElement(U.a, {
				className: Object(i.a)(M.a.link, a),
				to: e
			}, t);

			function z() {
				return (z = Object.assign || function(e) {
					for (var a = 1; a < arguments.length; a++) {
						var t = arguments[a];
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
					}
					return e
				}).apply(this, arguments)
			}
			const H = e => new Promise(a => {
				const t = (e => e.replace(/https|http/i, "https"))(e),
					r = new XMLHttpRequest;
				r.onload = function() {
					const e = new FileReader;
					e.onloadend = function() {
						a(e.result)
					}, e.readAsDataURL(r.response)
				}, r.open("GET", t), r.responseType = "blob", r.send()
			});
			var Q = Object(r.memo)(({
				src: e,
				lowSrc: a = e,
				errorSrc: t = a,
				...s
			}) => {
				if (!e) return null;
				const i = Object(r.createRef)();
				return H(e).then(e => {
					i.current && e && (i.current.src = e)
				}).catch(() => {
					i.current && (i.current.src = t)
				}), n.a.createElement("img", z({
					ref: i,
					src: a
				}, s))
			});
			const {
				fbt: V
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var J = ({
					card: e
				}) => {
					const {
						commentDeeplink: a,
						commentScore: t,
						commentText: r,
						postDeeplink: s,
						postImageUrl: c,
						postTitle: l
					} = e, {
						subredditName: d,
						subredditLink: o
					} = Ae(s), m = c ? Object(i.a)(M.a.postEmptyImage, M.a.isComment) : M.a.postEmptyImage, u = n.a.createElement("div", {
						className: m
					}, n.a.createElement(B, {
						className: Object(i.a)(M.a.commentPostTitle, M.a.isEmptyImage),
						link: a
					}, n.a.createElement("p", null, r)), t && n.a.createElement("h2", {
						className: M.a.postCardCircle
					}, V._("{=[commentScore]}{=upvotes}", [V._param("=[commentScore]", n.a.createElement("span", {
						className: M.a.postCardCircleValue
					}, V._("{commentScore}", [V._param("commentScore", t)], {
						hk: "3kgtbk"
					}))), V._param("=upvotes", n.a.createElement("span", {
						className: M.a.postCardCircleUnit
					}, V._("upvotes", null, {
						hk: "4GE43M"
					})))], {
						hk: "tFe3k"
					})), d && n.a.createElement(K, {
						link: o,
						subredditName: d,
						className: M.a.isPostCard
					}));
					return n.a.createElement(q, {
						card: e
					}, n.a.createElement("div", {
						className: M.a.headingArt
					}, c ? n.a.createElement("div", {
						className: M.a.postImageWrapper
					}, n.a.createElement(Q, {
						src: c,
						alt: V._("comment card image", null, {
							hk: "4aXqeM"
						}),
						className: M.a.fallbackStaticImage
					}), n.a.createElement(B, {
						className: M.a.commentPostTitle,
						link: s
					}, n.a.createElement("h2", null, l)), u) : u))
				},
				Z = t("./src/reddit/actions/modal.ts"),
				X = t("./src/reddit/actions/notifications/index.ts"),
				$ = t("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				ee = t("./src/reddit/actions/toaster.ts"),
				ae = t("./src/reddit/components/Settings/modalIds.ts"),
				te = t("./src/reddit/models/Toast/index.ts");
			const {
				fbt: re
			} = t("./node_modules/fbt/lib/FbtPublic.js"), ne = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
			var se;
			! function(e) {
				e[e.TURN_ON_DN = 0] = "TURN_ON_DN", e[e.VERIFY_EMAIL = 1] = "VERIFY_EMAIL", e[e.TURN_ON_DAYLY_DIGEST = 2] = "TURN_ON_DAYLY_DIGEST", e[e.DONE = 3] = "DONE"
			}(se || (se = {}));
			var ie = ({
				card: e
			}) => {
				const a = Object(s.d)(),
					t = Object(s.e)(e => {
						var a;
						return null === (a = e.user.account) || void 0 === a ? void 0 : a.email
					}),
					i = Object(s.e)(e => e.user.accountSettings.changeEmail.api.pending),
					{
						subredditList: c,
						isEmailVerified: l,
						isDigestEnabled: d
					} = e,
					[o, m] = Object(r.useState)(se.TURN_ON_DN),
					u = Object(r.useRef)(t),
					p = () => {
						m(d ? se.DONE : se.TURN_ON_DAYLY_DIGEST)
					},
					b = () => {
						l ? p() : m(se.VERIFY_EMAIL)
					};
				Object(r.useEffect)(() => {
					Ue() ? b() : m(se.TURN_ON_DN)
				}, [e]), Object(r.useEffect)(() => {
					if (t !== u.current && o === se.VERIFY_EMAIL) {
						const e = Object(ee.e)(re._("Email successfully updated!", null, {
							hk: "3iPlUp"
						}), te.b.SuccessCommunity);
						a(Object(ee.f)(e)), p()
					}
				}, [t, o]), Object(r.useEffect)(() => {
					i && a(Object(Z.g)(ae.a))
				}, [i]);
				const _ = async () => {
					await a(Object(X.requestBrowserNotificationPermissionPromptByUser)(ae.f)), Ue() && b()
				}, g = () => {
					a(Object(Z.h)(ae.a))
				}, E = () => {
					a(async (e, a) => {
						var t;
						await e(Object($.b)({
							isEnabled: !0,
							messageType: "EMAIL_DIGEST"
						})), !!(null === (t = a().user.notificationPrefs.pushSettingsLayout.rows.byId.EMAIL_DIGEST) || void 0 === t ? void 0 : t.isEnabled) && m(se.DONE)
					})
				};
				return n.a.createElement(n.a.Fragment, null, i && Fe(), n.a.createElement(q, {
					card: e
				}, n.a.createElement("div", {
					className: M.a.headingArt
				}, n.a.createElement("div", {
					className: M.a.endWrapper
				}, c.map((e, a) => {
					const {
						deeplink: t,
						subredditName: r
					} = e;
					return n.a.createElement(K, {
						key: a,
						link: t,
						subredditName: r,
						className: M.a.isSingleStatSubreddit
					})
				}))), n.a.createElement("h1", {
					className: M.a.endTitle
				}, (() => {
					switch (o) {
						case se.TURN_ON_DN:
							return re._("{=Learn more} about how we made your 2021 Year in Review, and {=turn on notifications} to stay in the loop.", [re._param("=Learn more", n.a.createElement("a", {
								href: ne,
								className: M.a.asLink,
								target: "_blank",
								rel: "noopener noreferrer"
							}, re._("Learn more", null, {
								hk: "3CA6NH"
							}))), re._param("=turn on notifications", n.a.createElement("span", {
								className: M.a.asLink,
								onClick: _
							}, re._("turn on notifications", null, {
								hk: "c9NuO"
							})))], {
								hk: "zrP7k"
							});
						case se.VERIFY_EMAIL:
						case se.TURN_ON_DAYLY_DIGEST:
							return re._("{=Learn more} about how we made your 2021 Year in Review, and {=turn on email digest} to stay in the loop.", [re._param("=Learn more", n.a.createElement("a", {
								href: ne,
								className: M.a.asLink,
								target: "_blank",
								rel: "noopener noreferrer"
							}, re._("Learn more", null, {
								hk: "37mf7E"
							}))), re._param("=turn on email digest", n.a.createElement("span", {
								className: M.a.asLink,
								onClick: o === se.VERIFY_EMAIL ? g : E
							}, re._("turn on email digest", null, {
								hk: "LXhvv"
							})))], {
								hk: "GIQWY"
							});
						case se.DONE:
							return re._("{=Learn more} about how we made your 2021 Year in Review.", [re._param("=Learn more", n.a.createElement("a", {
								href: ne,
								className: M.a.asLink,
								target: "_blank",
								rel: "noopener noreferrer"
							}, re._("Learn more", null, {
								hk: "4wzMpF"
							})))], {
								hk: "3IpGgb"
							})
					}
				})())))
			};
			const {
				fbt: ce
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var le = ({
				card: e
			}) => n.a.createElement(q, {
				card: e
			}, n.a.createElement("div", {
				className: M.a.headingArt
			}, n.a.createElement("div", {
				className: M.a.defaultCardImage
			}, n.a.createElement(Q, {
				src: e.templateImageUrl,
				alt: ce._("generic card image", null, {
					hk: "3lzbHZ"
				}),
				className: M.a.fallbackStaticImage
			}))));
			const {
				fbt: de
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var oe = ({
				card: {
					title: e,
					subtitle: a,
					id: t,
					templateImageUrl: r
				}
			}) => {
				const s = We();
				return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					id: t,
					className: M.a.headingSection
				}, s, n.a.createElement("div", {
					className: Object(i.a)(M.a.headingWrapper, M.a.headingContent)
				}, n.a.createElement("div", {
					className: M.a.headingText
				}, n.a.createElement(D.a, {
					className: M.a.introLogo
				}), n.a.createElement("h1", {
					className: Object(i.a)(M.a.heading, M.a.introHeading)
				}, e), n.a.createElement("h2", {
					className: M.a.subheading
				}, a)), n.a.createElement("div", {
					className: M.a.headingArt
				}, n.a.createElement("div", {
					className: M.a.defaultCardImage
				}, n.a.createElement(Q, {
					src: r,
					alt: de._("Intro Card image", null, {
						hk: "3MSVPd"
					}),
					className: M.a.fallbackStaticImage
				}))))))
			};
			const {
				fbt: me
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var ue = ({
					card: e
				}) => {
					const {
						postDeeplink: a,
						postImageUrl: t,
						postScore: r,
						postTitle: s,
						subredditName: c
					} = e, l = t ? M.a.commentPostTitle : Object(i.a)(M.a.commentPostTitle, M.a.isEmptyImage), {
						subredditLink: d
					} = Ae(a);
					return n.a.createElement(q, {
						card: e
					}, n.a.createElement("div", {
						className: M.a.headingArt
					}, n.a.createElement("div", {
						className: t ? M.a.postImageWrapper : M.a.postEmptyImage
					}, n.a.createElement(Q, {
						src: t,
						alt: me._("post card image", null, {
							hk: "1RtvEc"
						}),
						className: M.a.fallbackStaticImage
					}), n.a.createElement(B, {
						link: a,
						className: l
					}, n.a.createElement("p", null, s)), r && me._("{=[postScore]upvotes}", [me._param("=[postScore]upvotes", n.a.createElement("h2", {
						className: M.a.postCardCircle
					}, me._("{=[postScore]}{=upvotes}", [me._param("=[postScore]", n.a.createElement("span", {
						className: M.a.postCardCircleValue
					}, me._("{postScore}", [me._param("postScore", r)], {
						hk: "2qli1l"
					}))), me._param("=upvotes", n.a.createElement("span", {
						className: M.a.postCardCircleUnit
					}, me._("upvotes", null, {
						hk: "1HocBN"
					})))], {
						hk: "1QhOEN"
					})))], {
						hk: "3RERUS"
					}), n.a.createElement(K, {
						link: d,
						subredditName: c,
						className: M.a.isPostCard
					}))))
				},
				pe = t("./src/reddit/controls/ToggleSwitch/index.tsx"),
				be = t("./src/reddit/icons/svgs/InfoRedditRecap/index.tsx"),
				_e = t("./src/reddit/actions/snoovatarModal.ts"),
				ge = t("./src/reddit/icons/svgs/EditPencil/index.tsx"),
				Ee = t("./src/reddit/pages/WrappedReddit/CardTemplates/ShareCard/index.m.less"),
				fe = t.n(Ee);
			const {
				fbt: he
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var Ne = ({
				card: e,
				hideAvatar: a
			}) => {
				const {
					id: t,
					userAvatar: r,
					isPremium: c,
					userName: l,
					level: d,
					userKarma: o,
					title: m,
					subtitle: u,
					subredditListOptional: p
				} = e, b = Object(s.d)(), _ = n.a.useMemo(() => r ? n.a.createElement(Q, {
					src: r,
					alt: he._("Share Card Image", null, {
						hk: "4fBAyM"
					}),
					className: fe.a.shareCardImage
				}) : n.a.createElement(n.a.Fragment, null), [r]), g = a ? "Redditor" : l, E = a ? n.a.createElement("img", {
					src: `${T.a.assetPath}/img/wrappedreddit/default_avatar.png`,
					alt: he._("Default Card Image", null, {
						hk: "eQmJB"
					}),
					className: fe.a.shareCardImage
				}) : _;
				return n.a.createElement("div", {
					className: fe.a.back
				}, n.a.createElement("div", {
					className: fe.a.editAvatarWrapper,
					onClick: () => b(Object(_e.b)({
						clickSource: "nav"
					}))
				}, n.a.createElement(ge.a, {
					className: fe.a.editAvatar
				})), n.a.createElement("div", {
					id: t,
					className: Object(i.a)(fe.a.shareCardImageWrrapper, {
						[fe.a.isPremium]: c
					})
				}, n.a.createElement("div", {
					className: fe.a.whiteBackground
				}, n.a.createElement("div", {
					className: Object(i.a)(fe.a.backgroundWithGradient, {
						[fe.a.isEpicLevel]: d === f.Epic,
						[fe.a.isLegendaryLevel]: d === f.Legendary,
						[fe.a.isCommonLevel]: d === f.Common,
						[fe.a.isRareLevel]: d === f.Rare
					})
				}), n.a.createElement("div", {
					className: fe.a.infoWrapper
				}, n.a.createElement("div", {
					className: fe.a.headerWrapper
				}, n.a.createElement(D.a, {
					className: fe.a.logo
				}), n.a.createElement("div", {
					className: fe.a.user
				}, n.a.createElement("h1", {
					className: fe.a.userName
				}, g), n.a.createElement("h2", {
					className: fe.a.userLevel
				}, d)), n.a.createElement("div", {
					className: fe.a.userKarma
				}, he._("{=[userKarma]}{=KARMA}", [he._param("=[userKarma]", n.a.createElement("span", {
					className: fe.a.countKarma
				}, he._("{userKarma}", [he._param("userKarma", o)], {
					hk: "2TQ4ZC"
				}))), he._param("=KARMA", n.a.createElement("span", {
					className: fe.a.karma
				}, he._("KARMA", null, {
					hk: "1hL9nO"
				})))], {
					hk: "2cU97Q"
				}))), E, n.a.createElement("div", {
					className: fe.a.bottomWrapper
				}, n.a.createElement("h2", {
					className: fe.a.abilityRow
				}, he._("{=ABILITY}{=[title]}", [he._param("=ABILITY", n.a.createElement("span", {
					className: fe.a.abilityTitle
				}, he._("ABILITY", null, {
					hk: "qNm74"
				}))), he._param("=[title]", n.a.createElement("span", {
					className: fe.a.abilityValue
				}, he._("{title}", [he._param("title", m)], {
					hk: "w7i10"
				})))], {
					hk: "3liwrD"
				})), n.a.createElement("div", {
					className: fe.a.cardLinesWrapper,
					style: {
						background: `url(${T.a.assetPath}/img/wrappedreddit/card_lines.png)`
					}
				}, n.a.createElement("h1", {
					className: fe.a.title
				}, u), n.a.createElement("div", {
					className: fe.a.subredditListWrapper
				}, n.a.createElement("div", null, null == p ? void 0 : p.filter(e => e).map((e, a) => {
					const {
						deeplink: t,
						subredditName: r
					} = e;
					return n.a.createElement(K, {
						key: a,
						link: t,
						subredditName: r,
						className: fe.a.subreddit
					})
				})), n.a.createElement("p", {
					className: fe.a.year
				}, 2021))))))))
			};
			const {
				fbt: ve
			} = t("./node_modules/fbt/lib/FbtPublic.js"), ke = ({
				onClick: e
			}) => n.a.createElement("div", {
				onClick: e,
				className: fe.a.front
			}, n.a.createElement("img", {
				src: `${T.a.assetPath}/img/wrappedreddit/share_card.png`,
				className: fe.a.shareCardFrontImage,
				alt: ve._("Share Card Front Image", null, {
					hk: "3ymwge"
				})
			}));
			var Ce = ({
				card: e
			}) => {
				const [a, t] = n.a.useState(!1), [r, s] = n.a.useState(!1), c = e.level === f.Common, l = a && !c ? We("/img/wrappedreddit/background_orangered_d2x.png") : We(), d = a ? Object(i.a)(fe.a.card, fe.a.flipCard) : fe.a.card;
				return n.a.createElement("div", {
					className: fe.a.headingSection
				}, l, n.a.createElement("div", {
					className: fe.a.cardContainer
				}, n.a.createElement("div", {
					className: d
				}, n.a.createElement(Ne, {
					card: e,
					hideAvatar: r
				}), n.a.createElement(ke, {
					onClick: () => t(e => !e)
				}))), n.a.createElement("div", {
					className: fe.a.hideWrapper
				}, n.a.createElement("div", {
					className: fe.a.titleWrapper
				}, n.a.createElement(be.a, {
					className: fe.a.infoRedditRecap
				}), n.a.createElement("h1", {
					className: fe.a.title
				}, ve._("Hide my name & avatar", null, {
					hk: "52ede"
				}))), n.a.createElement(pe.a, {
					className: fe.a.toggle,
					on: r,
					onToggle: () => {
						s(e => !e)
					}
				})))
			};
			const {
				fbt: Se
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var Oe = ({
				card: e
			}) => {
				const {
					templateImageUrl: a,
					isPlusText: t,
					unit: r,
					value: s
				} = e;
				return n.a.createElement(q, {
					card: e
				}, n.a.createElement("div", {
					className: M.a.headingArt
				}, n.a.createElement("div", {
					className: M.a.defaultCardImage
				}, n.a.createElement(Q, {
					src: a,
					alt: Se._("SingleStat Card image", null, {
						hk: "2stTlQ"
					}),
					className: M.a.fallbackStaticImage
				})), n.a.createElement("div", {
					className: M.a.imageDataWrapper
				}, n.a.createElement("p", {
					className: Object(i.a)(M.a.plusText, {
						[M.a.hiddenPlusText]: !t
					})
				}, "+"), n.a.createElement("p", {
					className: M.a.singleStatScoreWrapper
				}, Se._("{=[value]}{=[unit]}", [Se._param("=[value]", n.a.createElement("span", {
					className: M.a.valueText
				}, Se._("{value}", [Se._param("value", s)], {
					hk: "3dsq37"
				}))), Se._param("=[unit]", n.a.createElement("span", {
					className: M.a.unitText
				}, Se._("{unit}", [Se._param("unit", r)], {
					hk: "3TDsLx"
				})))], {
					hk: "1IZwoH"
				})))))
			};
			const {
				fbt: je
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var Le = ({
				card: e
			}) => {
				const {
					imageUrl: a,
					subredditList: t,
					subredditCount: r,
					subredditCountSuffix: s
				} = e, i = Boolean(s);
				return n.a.createElement(q, {
					card: e
				}, n.a.createElement("div", {
					className: M.a.headingArt
				}, n.a.createElement("div", {
					className: M.a.singleStatWrapper
				}, i && je._("{=[subredditCount][subredditCountSuffix]}", [je._param("=[subredditCount][subredditCountSuffix]", n.a.createElement("h2", {
					className: M.a.singleStatSubredditCircle
				}, je._("{=[subredditCount]}{=[subredditCountSuffix]}", [je._param("=[subredditCount]", n.a.createElement("span", {
					className: M.a.singleStatSubredditCircleValue
				}, je._("{subredditCount}", [je._param("subredditCount", r)], {
					hk: "1GEBfo"
				}))), je._param("=[subredditCountSuffix]", n.a.createElement("span", {
					className: M.a.singleStatSubredditCircleUnit
				}, je._("{subredditCountSuffix}", [je._param("subredditCountSuffix", s)], {
					hk: "3ZGqmH"
				})))], {
					hk: "38r358"
				})))], {
					hk: "yUpx1"
				}), t.map((e, a) => {
					const {
						deeplink: t,
						subredditName: r
					} = e;
					return n.a.createElement(K, {
						key: a,
						link: t,
						subredditName: r,
						className: M.a.isSingleStatSubreddit
					})
				})), n.a.createElement("div", {
					className: M.a.defaultCardImage
				}, n.a.createElement(Q, {
					src: a,
					alt: je._("Single Stat Subreddit List Card Image", null, {
						hk: "20PpJj"
					}),
					className: M.a.fallbackStaticImage
				}))))
			};
			const {
				fbt: ye
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var Ie = ({
				card: e
			}) => {
				const {
					templateImageUrl: a,
					subredditName: t,
					deeplink: r
				} = e;
				return n.a.createElement(q, {
					card: e
				}, n.a.createElement("div", {
					className: M.a.headingArt
				}, n.a.createElement("div", {
					className: M.a.defaultCardImage
				}, n.a.createElement(Q, {
					src: a,
					alt: ye._("Subreddit Card image", null, {
						hk: "2mvKJZ"
					}),
					className: M.a.fallbackStaticImage
				})), n.a.createElement("div", {
					className: M.a.subredditLinkWrapper
				}, n.a.createElement(K, {
					link: r,
					subredditName: t
				}))))
			};
			const {
				fbt: we
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var xe = ({
					card: e
				}) => {
					const {
						subredditList: a
					} = e;
					return n.a.createElement(q, {
						card: e
					}, n.a.createElement("div", {
						className: M.a.headingArt
					}, n.a.createElement("div", {
						className: M.a.subredditListSection
					}, a.map((e, a) => {
						const {
							totalTimeOnSubreddit: t,
							timeUnit: r,
							deeplink: s,
							subredditName: i
						} = e, c = Boolean(r);
						return n.a.createElement("div", {
							key: a,
							className: M.a.subredditSection
						}, c && we._("{=[totalTimeOnSubreddit][timeUnit]}", [we._param("=[totalTimeOnSubreddit][timeUnit]", n.a.createElement("h2", {
							className: M.a.subredditCircle
						}, we._("{=[totalTimeOnSubreddit]}{=[timeUnit]}", [we._param("=[totalTimeOnSubreddit]", n.a.createElement("span", {
							className: M.a.subredditCircleValue
						}, we._("{totalTimeOnSubreddit}", [we._param("totalTimeOnSubreddit", t)], {
							hk: "4nE9rz"
						}))), we._param("=[timeUnit]", n.a.createElement("span", {
							className: M.a.subredditCircleUnit
						}, we._("{timeUnit}", [we._param("timeUnit", r)], {
							hk: "2UYL4D"
						})))], {
							hk: "48PO9L"
						})))], {
							hk: "2vAJvN"
						}), n.a.createElement(K, {
							link: s,
							subredditName: i
						}))
					}))))
				},
				Re = t("./src/reddit/pages/WrappedReddit/Carousel/index.m.less"),
				Pe = t.n(Re);
			const Te = ({
					card: e
				}) => e ? (e => e.__typename === O)(e) ? n.a.createElement(oe, {
					card: e
				}) : (e => e.__typename === y)(e) ? n.a.createElement(Oe, {
					card: e
				}) : (e => e.__typename === I)(e) ? n.a.createElement(Ie, {
					card: e
				}) : (e => e.__typename === S)(e) ? n.a.createElement(le, {
					card: e
				}) : (e => e.__typename === w)(e) ? n.a.createElement(xe, {
					card: e
				}) : (e => e.__typename === x)(e) ? n.a.createElement(Le, {
					card: e
				}) : (e => e.__typename === j)(e) ? n.a.createElement(ue, {
					card: e
				}) : R(e) ? n.a.createElement(Ce, {
					card: e
				}) : (e => e.__typename === k)(e) ? n.a.createElement(J, {
					card: e
				}) : (e => e.__typename === C)(e) ? n.a.createElement(ie, {
					card: e
				}) : n.a.createElement(le, {
					card: e
				}) : null,
				We = e => n.a.createElement("div", {
					className: Object(i.a)(Pe.a.background, Pe.a.contentWrapper),
					style: {
						background: `url(${T.a.assetPath}${e||"/img/wrappedreddit/defaultcard/main_bg_YIR_d2x.png"}) center center / cover `
					}
				}),
				Fe = () => n.a.createElement("div", {
					className: Pe.a.loadingIconWrapper
				}, n.a.createElement(A.a, null)),
				Ae = e => {
					const a = e.match(/(\/r\/)(.+?)(\/.*)/i),
						t = null == a ? void 0 : a[2];
					return {
						subredditName: t,
						subredditLink: `/r/${t}/`
					}
				},
				Ue = () => Object(W.a)() === F.a.Granted,
				{
					fbt: De
				} = t("./node_modules/fbt/lib/FbtPublic.js");
			var Ye = ({
					loadCardsAgain: e
				}) => n.a.createElement(n.a.Fragment, null, We(), n.a.createElement("div", {
					className: Pe.a.errorWrapper
				}, n.a.createElement(P.a, {
					className: Pe.a.errorLogo
				}), n.a.createElement("h1", {
					className: Pe.a.errorTitle
				}, De._("Let’s try that again", null, {
					hk: "MQC5A"
				})), n.a.createElement("h2", {
					className: Pe.a.errorSubTitle
				}, De._("Uh oh, something went wrong but we’re not sure what. Try that again.", null, {
					hk: "2bnXlB"
				})), n.a.createElement(N.k, {
					className: Pe.a.retryButton,
					priority: N.c.Primary,
					onClick: e
				}, De._("Retry", null, {
					hk: "39xJSt"
				})))),
				Me = t("./src/reddit/selectors/activeModalId.ts");
			const {
				fbt: Ge
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var qe = () => {
				const e = Object(s.d)(),
					a = Object(s.e)(e => e.wrappedReddit.isCardsLoading),
					c = Object(s.e)(e => e.wrappedReddit.cards),
					l = Object(s.e)(e => e.wrappedReddit.cardsLoadingError),
					d = Object(s.e)(e => Object(Me.b)(h.a.SNOOVATAR_MODAL)(e)),
					[o, m] = Object(r.useState)(0),
					[u, p] = Object(r.useState)(!0),
					[b, _] = Object(r.useState)(1),
					f = 6 * b >= c.length,
					k = c.length > 6,
					C = c.length > 6 && b > 1,
					S = 6 * (b - 1),
					O = S + 6,
					j = S + o,
					L = S + o + 1 === c.length,
					y = k || !L,
					I = n.a.useCallback(() => {
						e(g()), e(E())
					}, [e]);
				n.a.useEffect(() => {
					I()
				}, [I]), n.a.useEffect(() => {
					d || e(E())
				}, [d, e]), n.a.useEffect(() => {
					let e = null;
					return c[j] && R(c[j]) && (p(!1), e = setTimeout(() => p(!0), 100)), () => {
						e && clearTimeout(e)
					}
				}, [c, j]);
				const w = e => () => {
						m(e)
					},
					x = e => () => {
						_(e ? b - 1 : f ? 1 : b + 1), m(e ? 5 : 0)
					},
					P = n.a.useCallback(async () => {
						var e;
						const a = (null === (e = c[j]) || void 0 === e ? void 0 : e.id) || "",
							r = document.getElementById(a);
						if (r) {
							const e = await (() => t.e(2).then(t.bind(null, "./node_modules/html-to-image/es/index.js")))(),
								n = await e.toPng(r);
							if (n) {
								const e = document.createElement("a");
								e.download = `card_${a}.png`, e.href = n, e.click()
							}
						}
					}, [j, c]);
				return n.a.createElement(n.a.Fragment, null, a && (() => n.a.createElement(n.a.Fragment, null, We(), n.a.createElement(A.a, null)))(), l && n.a.createElement(Ye, {
					loadCardsAgain: I
				}), c.length ? n.a.createElement(n.a.Fragment, null, u ? n.a.createElement(Te, {
					card: c[j]
				}) : We(), n.a.createElement("div", {
					className: Pe.a.carousel
				}, n.a.createElement("div", {
					className: Pe.a.buttonsWrapper
				}, n.a.createElement(N.k, {
					className: Pe.a.ctaButton,
					priority: N.c.Primary,
					onClick: P
				}, Ge._("Share", null, {
					hk: "2JaG4S"
				}), n.a.createElement(v.a, {
					className: Pe.a.downloadIcon
				})), y && n.a.createElement(N.k, {
					className: Pe.a.ctaButton,
					priority: N.c.Primary,
					onClick: () => {
						const e = o + 1 === 6 || L;
						e && _(L ? 1 : b + 1), m(e ? 0 : o + 1)
					}
				}, Ge._("Next", null, {
					hk: "2tKyCG"
				}))), n.a.createElement("div", {
					className: Pe.a.pager
				}, C && n.a.createElement("button", {
					onClick: x(!0)
				}, n.a.createElement("div", {
					className: Pe.a.nextDot
				})), c.slice(S, O).map((e, a) => n.a.createElement("button", {
					key: a,
					onClick: w(a)
				}, n.a.createElement("div", {
					className: Object(i.a)(Pe.a.progressDot, {
						[Pe.a.active]: a === o
					})
				}))), k && n.a.createElement("button", {
					onClick: x()
				}, n.a.createElement("div", {
					className: Pe.a.nextDot
				}))))) : n.a.createElement(n.a.Fragment, null))
			};
			const {
				fbt: Ke
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			a.default = () => n.a.createElement(qe, null)
		},
		"./src/redditGQL/operations/PersonalizedYearInReview.json": function(e) {
			e.exports = JSON.parse('{"id":"3a93daf526ed"}')
		},
		"./src/redditGQL/operations/RegisterWebPushToken.json": function(e) {
			e.exports = JSON.parse('{"id":"197650c1946c"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/WrappedReddit.269349d8de2b899d6a88.js.map