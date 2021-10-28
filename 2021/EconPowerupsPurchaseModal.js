// https://www.redditstatic.com/desktop2x/EconPowerupsPurchaseModal.3fb53910656f386a8c33.js
// Retrieved at 10/28/2021, 2:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconPowerupsPurchaseModal"], {
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/lib/currency/cleanNumber/index.ts");

			function s(e, t) {
				const r = Object(n.a)(e),
					s = parseInt(r) / 100;
				return Math.floor(s) !== s || t ? s.toFixed(2) : String(s)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, r) {
			"use strict";

			function n(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/lib/currency/currencies.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "f", (function() {
				return l
			})), r.d(t, "g", (function() {
				return i
			})), r.d(t, "e", (function() {
				return d
			}));
			var n, s = r("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(n || (n = {}));
			const a = "USD",
				o = "ETH",
				c = "COINS",
				l = [o, "BTC"],
				i = [c, "SUBREDDIT_POINTS", "GAME_TOKENS"],
				d = {
					COINS: () => s.fbt._("Coins", null, {
						hk: "1T2Y4p"
					}),
					SUBREDDIT_POINTS: () => s.fbt._("Subreddit points", null, {
						hk: "1ytOO3"
					}),
					GAME_TOKENS: () => s.fbt._("Game tokens", null, {
						hk: "16BUrU"
					})
				}
		},
		"./src/lib/localizeCurrency/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				s = r("./src/lib/currency/centsToDollars/index.ts"),
				a = r("./src/lib/currency/currencies.ts"),
				o = r("./src/lib/prettyPrintNumber/index.ts"),
				c = r("./src/reddit/helpers/governance/tokens.ts"),
				l = r("./src/reddit/constants/intlSupport.ts");
			const i = (e, {
					locale: t = n.DEFAULT_LOCALE,
					pretty: r,
					formatOptions: s
				} = {}) => {
					const a = Number(e);
					return Object(l.c)() ? r ? Object(o.b)(a) : new Intl.NumberFormat(t, s).format(a) : u(a, r, t)
				},
				d = (e, t = {}) => {
					const {
						locale: r = n.DEFAULT_LOCALE,
						pretty: o,
						formatOptions: i,
						displayConversion: d,
						forceDecimals: b,
						currency: f = t.currency || (t.type ? p(t.type) : a.c),
						type: h = t.type || (t.currency ? m(t.currency) : a.b.Real)
					} = t, w = Number(e), E = String(e);
					switch (h) {
						case a.b.Reddit: {
							const e = a.e[f],
								t = e ? e() : f;
							return Object(l.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...i
							}).format(w) + " " + t : u(w, o, r, t)
						}
						case a.b.Crypto: {
							if (o) {
								return Object(c.c)(E, d) + " " + f
							}
							const e = Number(Object(c.b)(E, d));
							return Object(l.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...i
							}).format(e) : u(e, o, r, f)
						}
						case a.b.Real:
						default: {
							const e = Number(Object(s.a)(E, b));
							return Object(l.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								notation: o ? "compact" : "standard",
								...i
							}).format(e) : u(e, o, r, f)
						}
					}
				},
				u = (e, t, r, n) => {
					return (t ? Object(o.b)(e) : e.toLocaleString(r)) + (n ? " " + n : "")
				},
				m = e => a.g.includes(e.toUpperCase()) ? a.b.Reddit : a.f.includes(e.toUpperCase()) ? a.b.Crypto : a.b.Real,
				p = e => {
					switch (e) {
						case a.b.Crypto:
							return a.d;
						case a.b.Reddit:
							return a.a;
						case a.b.Real:
						default:
							return a.c
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return i
			})), r.d(t, "paymentCompleted", (function() {
				return d
			})), r.d(t, "cardNameInput", (function() {
				return u
			})), r.d(t, "postalCodeInput", (function() {
				return m
			})), r.d(t, "cardNameEmpty", (function() {
				return p
			})), r.d(t, "cardElementChange", (function() {
				return b
			})), r.d(t, "stripeTokenPending", (function() {
				return f
			})), r.d(t, "stripeTokenError", (function() {
				return h
			})), r.d(t, "stripeApiError", (function() {
				return w
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return E
			})), r.d(t, "paypalApiError", (function() {
				return g
			})), r.d(t, "toggleRememberCard", (function() {
				return P
			})), r.d(t, "selectSavedCard", (function() {
				return x
			})), r.d(t, "_deleteSavedCard", (function() {
				return y
			})), r.d(t, "deleteSavedCard", (function() {
				return _
			})), r.d(t, "savedCardsPending", (function() {
				return O
			})), r.d(t, "savedCardsSuccess", (function() {
				return N
			})), r.d(t, "loadSavedCards", (function() {
				return j
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/sentry/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/endpoints/gold/purchase.ts"),
				c = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				l = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = Object(a.a)(c.B),
				d = Object(a.a)(c.w),
				u = Object(a.a)(c.b),
				m = Object(a.a)(c.y),
				p = Object(a.a)(c.a),
				b = Object(a.a)(c.E),
				f = Object(a.a)(c.G),
				h = Object(a.a)(c.F),
				w = Object(a.a)(c.D),
				E = e => async (t, r) => {
					const s = r(),
						a = Object(l.h)(s),
						o = Object(l.l)(s),
						{
							token: c,
							error: i
						} = await e.createToken({
							name: a,
							address_zip: o
						});
					if (a.trim()) {
						if (!i && c) return c;
						t(h(i || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(p({
							message: e
						}))
					}
				}, g = Object(a.a)(c.x), P = Object(a.a)(c.H), x = Object(a.a)(c.C), y = Object(a.a)(c.g), _ = e => async (t, r, {
					apiContext: n
				}) => {
					t(y(e));
					try {
						const t = await Object(o.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (a) {
						s.c.captureException(a)
					}
				}, O = Object(a.a)(c.z), N = Object(a.a)(c.A), j = () => async (e, t, {
					apiContext: r
				}) => {
					e(O());
					try {
						const t = await Object(o.b)(r());
						if (t.error) throw new Error(t.error.type);
						const n = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(N(n)), n[0] && e(x(n[0].cardId))
					} catch (n) {
						s.c.captureException(n), e(N([]))
					}
				}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less": function(e, t, r) {
			e.exports = {
				closeButton: "zV6beQLWIuWX5Q9SvWfDR",
				highContrast: "_19iGSTvU7FOqhpDpMWKtDr",
				closeIcon: "_17EZNlAorafFssuT6Gw_Zg"
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				l = r.n(c);
			const {
				fbt: i
			} = r("./node_modules/fbt/lib/FbtPublic.js"), d = ({
				className: e,
				highContrast: t,
				onClick: r
			}) => a.a.createElement("button", {
				onClick: r,
				className: Object(n.a)(l.a.closeButton, {
					[l.a.highContrast]: t
				}, e),
				"aria-label": i._("Close", null, {
					hk: "3Qarlp"
				})
			}, a.a.createElement(o.b, {
				className: l.a.closeIcon
			}))
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_3-wzlsd2L9K9BE7yms9IhJ",
				title: "_258n2TylpikH2fhZLhlAgr",
				subtitle: "_1AYSLhpiU1fIwgPPxu2Xuy"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less"),
				c = r.n(o);
			t.a = e => a.a.createElement("header", {
				className: Object(n.a)(c.a.container, e.className)
			}, a.a.createElement("h2", {
				className: c.a.title
			}, e.title), a.a.createElement("h3", {
				className: c.a.subtitle
			}, e.subtitle))
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsPremiumButton/index.m.less": function(e, t, r) {
			e.exports = {
				button: "_1mc-IVNBsfKUugqkP3rda7",
				loadingIcon: "_15g-u6pLWEgyq-W1q8zSji"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/PowerupsCount/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_2BuBEDqT7lkg3pO2WKDev7",
				control: "_1favHXSOScXwn1RBgoTcQR",
				locked: "_1zr44sXfpGbr_0IvOKMhUe",
				button: "_3paafvflLXs20pV91RRAB0",
				buttonIconElement: "_1SxKXgyGKQ5q6hRVXs8exA",
				decrementButton: "_2ZZ4y8uLTNayuVN_S-2Nf5",
				incrementButton: "_190moU3v0ZouK_rrsulWXf",
				value: "_2kUt45BOMdEQHtdaCmdozL",
				icon: "_5d5MTurdJPq_vddOMX6pc"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/ProgressBar/index.m.less": function(e, t, r) {
			e.exports = {
				titleRow: "_1i5gFES8rHCUngNfydAuWr",
				barRow: "_2C7hWoSd6z9a-xV6Z3dnje",
				track: "No3J_0QnbZSfXaewR0dYK",
				progress: "_3oU4QH4ZKf2Ju86PxWmVvt",
				additionalProgress: "_31fdHeoPmiYpMGtd2vSSdL",
				opacityBlink: "_1eAQSptthEkyF-iGElcw0A"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_2iu3jX5bVR5jy7OP6neJ4W",
				count: "_2AMO2XnYhlJu67x263BGll"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/index.m.less": function(e, t, r) {
			e.exports = {
				progressControl: "_2SIcayqih-ki47E6ubsDLN",
				details: "_20wZ73zqa9DS0namcCJdoA",
				purchaseDetails: "SW6YZoTb2xUeU8o-3IQOF",
				anonymousCheckbox: "_2TwVYjhqi8rCciDTHrMPTc",
				paymentMethodTitle: "_3ZkB3JIS9oGV5ZNPEoYrOm",
				paymentMethodSelector: "_2zJhl9SVW67lTeXQgaeNiV",
				errorMessage: "_2Jj9FQM628kGz4Zsu-DATD",
				stripeForm: "_27fBu-SIMK3yPRcZeNUi-",
				button: "_2zABc383welm4OSB9jgeQG",
				Icon: "_20ZTInSCuk9gGcfQ6D7pel",
				icon: "_20ZTInSCuk9gGcfQ6D7pel",
				isLeft: "ivqRDi80dfqnzNnU7r1Bp",
				isRight: "_3l-suZErGWJnDlAcWKjk15",
				premiumDescription: "_1TlVluSbXOqttjoOmuZD2Q",
				premiumIconWrapper: "_3NK13DzzCxYXpEyi7Z1D-P",
				premiumIcon: "_13HsDRX-CPOf5B1mORjNbn",
				description: "_2kdlUzSaYOfKTKm4IaA-by"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/index.m.less": function(e, t, r) {
			e.exports = {
				modal: "_2f9jiTDa9UHMVSyfqhg9zd"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx"),
				c = r("./node_modules/reselect/es/index.js"),
				l = r("./src/higherOrderComponents/asModal/index.tsx"),
				i = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				m = r("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx"),
				p = r("./src/reddit/constants/modals.ts"),
				b = r("./src/reddit/contexts/PageLayer/index.tsx"),
				f = r("./node_modules/react-stripe-elements/es/index.js"),
				h = r("./src/reddit/hooks/useLocale.ts"),
				w = r("./src/reddit/hooks/useTracking.ts"),
				E = r("./src/lib/constants/index.ts"),
				g = r("./src/lib/localizeCurrency/index.ts"),
				P = r("./src/reddit/helpers/trackers/powerups.ts"),
				x = r("./src/reddit/actions/gold/powerups.ts"),
				y = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				_ = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				O = r("./src/reddit/selectors/gold/powerups/index.ts"),
				N = r("./src/reddit/selectors/gold/productOffers.ts"),
				j = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				v = r("./src/reddit/selectors/user.ts"),
				C = r("./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx"),
				M = r("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				k = r("./src/reddit/components/StripePaymentForm/index.tsx"),
				L = r("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				S = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				I = r("./src/reddit/hooks/useStripe.ts"),
				T = r("./src/reddit/hooks/useThunkDispatch.ts"),
				D = r("./src/reddit/models/Gold/ProductOffer.ts"),
				F = r("./src/reddit/controls/Button/index.tsx"),
				B = r("./src/reddit/controls/LoadingIcon/index.tsx");
			const {
				fbt: A
			} = r("./node_modules/fbt/lib/FbtPublic.js"), z = Object(c.c)({
				currentUser: v.k,
				isAnonymous: O.d,
				powerupsCount: O.e,
				productOffer: N.b
			});
			var U = Object(a.b)(z)(s.a.memo((function(e) {
					const {
						className: t,
						currentUser: r,
						isAnonymous: a,
						powerupsCount: o,
						productOffer: c,
						subredditId: l
					} = e, i = Object(T.a)();
					Object(n.useEffect)(() => (window.addEventListener("message", p, !1), () => window.removeEventListener("message", p)), []);
					const [d, u] = Object(n.useState)(!1);
					let m = null;
					if (!r) return null;
					const p = e => {
							const t = (e => {
								try {
									return "string" == typeof e.data ? JSON.parse(e.data) : e.data
								} catch (t) {
									return
								}
							})(e);
							t && t.type && ("paypal-finish.success.framedmodal" === t.type ? (b(), m && m.close()) : "paypal-finish.cancel.framedmodal" === t.type && m && m.close())
						},
						b = () => {
							i(Object(y.h)({
								subredditId: l,
								powerupsCount: o,
								user: r,
								isAnonymous: a
							}))
						};
					return s.a.createElement(F.k, {
						onClick: async () => {
							if (!c) return;
							u(!0);
							const e = await i(Object(y.g)(c, a, o, D.c.Powerups, l));
							if (e) {
								const {
									url: t
								} = e, r = 580, n = 740, s = Math.max(window.screenX + Math.round((window.outerWidth - r) / 2), 0), a = Math.max(window.screenY + Math.round((window.outerHeight - n) / 2), 0);
								m = window.open(`${t}&rnd=${Math.random()}`, "RedditPaypalPayment", `height=${n},width=${r},top=${a},left=${s},modal=yes,alwaysRaised=yes`)
							}
							u(!1)
						},
						className: t,
						disabled: d
					}, d ? s.a.createElement(B.a, {
						sizePx: 12,
						center: !0
					}) : A._("Continue to PayPal", null, {
						hk: "1T4BEy"
					}))
				}))),
				R = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsPremiumButton/index.m.less"),
				H = r.n(R);
			const {
				fbt: W
			} = r("./node_modules/fbt/lib/FbtPublic.js"), K = ({
				className: e,
				subredditId: t
			}) => {
				const r = Object(a.e)(O.d),
					n = Object(a.e)(O.c),
					o = Object(a.e)(O.e),
					c = Object(a.d)();
				return s.a.createElement(F.s, {
					priority: F.b.Primary,
					onClick: () => {
						c(Object(x.j)(t, o, r))
					},
					className: Object(i.a)(e, H.a.button),
					disabled: n
				}, n ? s.a.createElement(B.a, {
					className: H.a.loadingIcon,
					sizePx: 12
				}) : W._({
					"*": "Apply Your Powerups",
					_1: "Apply Your Powerup"
				}, [W._plural(o)], {
					hk: "4zdKUc"
				}))
			};
			var X = r("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				G = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/PowerupsCount/index.m.less"),
				V = r.n(G);
			var Y = function(e) {
					const {
						className: t,
						onChange: r,
						style: n,
						value: a,
						min: o,
						max: c
					} = e, l = e => r(Math.max(Math.min(a + e, c || Number.POSITIVE_INFINITY), o || 0)), d = c === o, u = Object(X.a)(a);
					return s.a.createElement("div", {
						className: Object(i.a)(t, V.a.container),
						style: n
					}, s.a.createElement("div", {
						className: Object(i.a)(V.a.control, {
							[V.a.locked]: d
						})
					}, !d && s.a.createElement("button", {
						className: Object(i.a)(V.a.button, V.a.decrementButton),
						onClick: () => l(-1)
					}), s.a.createElement("div", {
						className: V.a.value
					}, s.a.createElement(u, {
						className: V.a.icon
					}), s.a.createElement("span", null, a)), !d && s.a.createElement("button", {
						className: Object(i.a)(V.a.button, V.a.incrementButton),
						onClick: () => l(1)
					})))
				},
				q = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/ProgressBar/index.m.less"),
				Z = r.n(q);
			const {
				fbt: Q
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var $ = e => {
					const {
						additionalCount: t,
						className: r,
						count: n,
						maxCount: a
					} = e;
					if (!a) return null;
					const o = Math.min(a, n) / a,
						c = Math.min(a, n + (t || 0)) / a;
					return s.a.createElement("div", {
						className: r
					}, s.a.createElement("div", {
						className: Z.a.titleRow
					}, s.a.createElement("span", null, Q._("Powerups", null, {
						hk: "DrcXp"
					})), s.a.createElement("span", null, n < a ? `${n}/${a}` : n)), s.a.createElement("div", {
						className: Z.a.barRow
					}, s.a.createElement("div", {
						className: Z.a.track
					}), s.a.createElement("div", {
						className: Z.a.progress,
						style: {
							width: `${100*o}%`
						}
					}), t && s.a.createElement("div", {
						className: Z.a.additionalProgress,
						style: {
							width: `${100*(c-o)}%`,
							left: `${100*o}%`
						}
					})))
				},
				J = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/index.m.less"),
				ee = r.n(J);
			var te = function(e) {
				const {
					className: t,
					count: r,
					maxCount: n,
					onChange: a,
					powerups: o
				} = e, {
					tier: c,
					tiersInfo: l
				} = o, d = (l[c] || l[c - 1]).powerupsCost;
				if (!d) return null;
				const u = Math.min(d, d / 2 + o.count / 2, o.count + (r || 0) / 2) / d;
				return s.a.createElement("div", {
					className: Object(i.a)(t, ee.a.container)
				}, s.a.createElement($, {
					additionalCount: r,
					className: ee.a.bar,
					count: o.count,
					maxCount: d
				}), s.a.createElement(Y, {
					className: ee.a.count,
					style: {
						left: `${100*u}%`
					},
					value: r,
					min: 1,
					max: n,
					onChange: a
				}))
			};
			const {
				fbt: re
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ne = Object(c.c)({
				isAnonymous: O.d,
				powerupsCount: O.e,
				productOffer: N.b,
				savedCardsPending: j.w,
				stripeTokenPending: j.m
			}), se = Object(a.b)(ne);
			var ae = Object(f.injectStripe)(se((function(e) {
					const {
						className: t,
						isAnonymous: r,
						powerupsCount: o,
						productOffer: c,
						savedCardsPending: l,
						stripe: i,
						stripeTokenPending: d,
						subredditId: u
					} = e, m = Object(a.d)(), [p, b] = Object(n.useState)(!1), f = d || l;
					return s.a.createElement(F.k, {
						onClick: async () => {
							i && c && (b(!0), await m(Object(y.j)(i, c, r, o, D.c.Powerups, u)), b(!1))
						},
						className: t,
						disabled: f || !i || p
					}, p ? s.a.createElement(B.a, {
						sizePx: 12,
						center: !0
					}) : re._("Complete purchase", null, {
						hk: "KaR26"
					}))
				}))),
				oe = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/index.m.less"),
				ce = r.n(oe);
			const {
				fbt: le
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ie = 100, de = Object(c.c)({
				isAnonymous: O.d,
				isNightMode: v.X,
				paypalErrorMessage: j.d,
				powerups: O.k,
				powerupsCount: O.e,
				powerupPrice: N.a,
				stripeErrorMessage: j.j,
				userPowerupsData: O.y
			});
			var ue = Object(a.b)(de)((function(e) {
					const {
						isAnonymous: t,
						isNightMode: r,
						onCloseModal: o,
						paypalErrorMessage: c,
						powerups: l,
						powerupsCount: i,
						powerupPrice: d,
						stripeErrorMessage: u,
						subredditId: m,
						userPowerupsData: p
					} = e, b = Object(a.d)(), [O, N] = Object(n.useState)(E.Gb);
					Object(n.useEffect)(() => {
						b(Object(y.d)()), b(Object(_.selectPaymentMethod)(O))
					}, []);
					const j = Object(h.a)(),
						v = Object(w.a)();
					Object(n.useEffect)(() => {
						v(Object(P.i)())
					}, []);
					const T = Object(I.a)();
					if (!d || !l) return o(), null;
					const D = Object(g.b)(i * d, {
							locale: j
						}),
						F = !!(null == p ? void 0 : p.freeCount);
					return s.a.createElement(f.StripeProvider, {
						stripe: T
					}, s.a.createElement(f.Elements, null, s.a.createElement(s.a.Fragment, null, s.a.createElement(te, {
						className: ce.a.progressControl,
						count: i,
						maxCount: F && p ? p.freeCount : ie,
						onChange: e => b(Object(x.i)(e)),
						powerups: l
					}), s.a.createElement("div", {
						className: ce.a.details
					}, s.a.createElement(L.a, {
						className: ce.a.anonymousCheckbox,
						isSelected: t,
						onClick: () => (e => b(Object(x.c)(e)))(!t),
						text: le._("Powerup anonymously", null, {
							hk: "YXX31"
						})
					}), !F && s.a.createElement("div", {
						className: ce.a.purchaseDetails
					}, le._({
						"*": "{powerups} Powerups {powerup price} /mo",
						_1: "1 Powerup {powerup price} /mo"
					}, [le._plural(i, "powerups"), le._param("powerup price", D)], {
						hk: "3cOqa5"
					}))), !F && s.a.createElement(s.a.Fragment, null, s.a.createElement("h3", {
						className: ce.a.paymentMethodTitle
					}, le._("Payment Method", null, {
						hk: "3EbT3q"
					})), s.a.createElement(M.a, {
						className: ce.a.paymentMethodSelector,
						nightmode: r,
						selectedPayment: O,
						onPaymentSelected: e => {
							N(e), b(Object(_.selectPaymentMethod)(e))
						}
					}), O === E.Fb && u && s.a.createElement("div", {
						className: ce.a.errorMessage
					}, u), O === E.Gb && c && s.a.createElement("div", {
						className: ce.a.errorMessage
					}, c), O === E.Fb && s.a.createElement(k.a, {
						nightmode: r,
						className: ce.a.stripeForm,
						shouldDeleteCardWithGql: !0
					}), O === E.Gb && s.a.createElement(U, {
						className: ce.a.button,
						subredditId: m
					}), O === E.Fb && s.a.createElement(ae, {
						className: ce.a.button,
						subredditId: m
					}), s.a.createElement("p", {
						className: ce.a.description
					}, le._("By completing your purchase, you are agreeing to automatic payments for Powerups and Reddit's {=User Agreement}, {=Privacy Policy}, and {previews terms of use}. Your Powerups subscription will auto-renew monthly for {powerup price} (plus tax where applicable). Cancel anytime in {=User Settings}. Cancel at least 24 hours before your subscription ends to avoid getting charged for the next month. No partial refunds.", [le._param("=User Agreement", s.a.createElement("a", {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, le._("User Agreement", null, {
						hk: "xEA2W"
					}))), le._param("=Privacy Policy", s.a.createElement("a", {
						href: "https://www.redditinc.com/policies/privacy-policy",
						target: "_blank",
						rel: "noopener noreferrer"
					}, le._("Privacy Policy", null, {
						hk: "48zcty"
					}))), le._param("previews terms of use", s.a.createElement(C.a, null)), le._param("powerup price", D), le._param("=User Settings", s.a.createElement("a", {
						href: "/settings/premium",
						target: "_blank"
					}, le._("User Settings", null, {
						hk: "1u8CTh"
					})))], {
						hk: "NLnVj"
					}))), F && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: ce.a.premiumDescription
					}, s.a.createElement("div", {
						className: ce.a.premiumIconWrapper
					}, s.a.createElement(S.a, {
						className: ce.a.premiumIcon
					})), s.a.createElement("span", null, le._("Premium gives you one monthly Powerup", null, {
						hk: "2cKV1a"
					}))), s.a.createElement(K, {
						className: ce.a.button,
						subredditId: m
					})))))
				})),
				me = r("./src/reddit/components/Econ/PowerupsPurchaseModal/index.m.less"),
				pe = r.n(me);

			function be() {
				return (be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: fe
			} = r("./node_modules/fbt/lib/FbtPublic.js"), he = Object(b.u)(), we = Object(c.c)({
				currentSubreddit: b.r
			}), Ee = Object(a.b)(we);
			const ge = Object(l.a)(he(Ee((function(e) {
				const {
					currentSubreddit: t
				} = e, r = Object(a.d)(), n = () => r(Object(d.g)(p.a.ECON_POWERUPS_PURCHASE));
				return t ? s.a.createElement(s.a.Fragment, null, s.a.createElement(m.a, {
					className: pe.a.header,
					title: fe._("Powerup {r/community}", [fe._param("r/community", t.displayText)], {
						hk: "2HkBNV"
					}),
					subtitle: fe._("Unlock perks for the whole community", null, {
						hk: "faCTq"
					})
				}), s.a.createElement(ue, {
					subredditId: t.id,
					onCloseModal: n
				}), s.a.createElement(u.a, {
					onClick: n,
					highContrast: !0
				}), s.a.createElement(o.a, {
					space: o.b.MODAL
				})) : (n(), null)
			}))));
			t.default = e => s.a.createElement(ge, be({}, e, {
				className: Object(i.a)(e.className, pe.a.modal)
			}))
		},
		"./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			const {
				fbt: a
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function o({
				className: e
			}) {
				return s.a.createElement("a", {
					href: "https://www.redditinc.com/policies/previews-terms",
					target: "_blank",
					rel: "noopener noreferrer",
					className: e
				}, a._("Previews Terms of Use", null, {
					hk: "2eTczn"
				}))
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less": function(e, t, r) {
			e.exports = {
				background: "XVwx9Y9K0HdxTdtF2BPW0",
				isModal: "UtfYccpr1yXmbqvp5V4xO",
				isInFeedUnit: "_2hif8-1kZa1knghBW2qHUl",
				colorBlockCorner: "_3cb-_dMe8EWVymoglw4OyK",
				isNightmodeOn: "_2aTpeK-XP6gqT5wf5i532u",
				colorBlockThrough: "_1oWuVmyyrm-f2cYxR7EV9F",
				circle: "NsyhNpI3rn1O5dhzAooci",
				circleStriped: "_3wLmFEQT-lNFxQtTZSBM-A",
				circleDotted: "_2Y6YoeMfdGRReebFzEkb1a",
				circleOrangeHollow: "_2MNXM_uf6rOUZgaO42Wnl0",
				circleGreenHollow: "_1ThCjjX1kI9WTSqGhdfbEY",
				circleYellowHollow: "_2tVCe8UCeeIcsfKn_uIZKT"
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return m
			}));
			var n, s = r("./src/config.ts"),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./node_modules/react/index.js"),
				c = r.n(o),
				l = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less"),
				u = r.n(d);
			! function(e) {
				e[e.SIDEBAR = 0] = "SIDEBAR", e[e.MODAL = 1] = "MODAL", e[e.INFEED_UNIT = 2] = "INFEED_UNIT"
			}(n || (n = {}));
			const m = ({
				space: e
			}) => {
				const t = Object(l.e)(i.X),
					r = e === n.MODAL,
					o = e === n.INFEED_UNIT;
				return c.a.createElement("div", {
					className: Object(a.a)(u.a.background, {
						[u.a.isNightmodeOn]: t,
						[u.a.isModal]: r,
						[u.a.isInFeedUnit]: o
					})
				}, c.a.createElement("div", {
					className: u.a.colorBlockCorner
				}), c.a.createElement("div", {
					className: u.a.colorBlockThrough
				}), c.a.createElement("div", {
					className: u.a.circleStriped,
					style: {
						backgroundImage: t ? `url(${s.a.assetPath}/img/powerups/linecircle-lightblue.png)` : `url(${s.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), c.a.createElement("div", {
					className: u.a.circleOrangeHollow
				}), c.a.createElement("div", {
					className: u.a.circleDotted,
					style: {
						backgroundImage: `url(${s.a.assetPath}/img/powerups/dotcircle.png)`
					}
				}), c.a.createElement("div", {
					className: u.a.circleGreenHollow
				}), c.a.createElement("div", {
					className: u.a.circleYellowHollow
				}))
			}
		},
		"./src/reddit/components/PowerupsSidebar/common/utils.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			}));
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				o = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				c = r("./src/reddit/icons/svgs/PowerupTier3/index.tsx");
			const l = 2,
				i = 3;

			function d(e) {
				return e >= i ? c.a : e >= l ? o.a : a.a
			}

			function u(e) {
				var t;
				const r = !e,
					s = `${n.a.assetPath}/img/powerups/snoovatar_anonymous.svg`;
				return r ? s : null === (t = null == e ? void 0 : e.icon) || void 0 === t ? void 0 : t.url
			}
			const m = ({
				displayName: e,
				score: t
			}) => e || s.fbt._({
				"*": "Anonymous Heroes",
				_1: "Anonymous Hero"
			}, [s.fbt._plural(t)], {
				hk: "8kyEI"
			}).toString()
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = r.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => s.a.createElement("div", {
				className: Object(a.a)(c.a.loadingIcon, t, {
					[c.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				s = r("./src/lib/prettyPrintNumber/index.ts");

			function a(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t || 1);
				return r.dividedToIntegerBy(s).toString()
			}

			function o(e, t) {
				return Object(s.b)(parseInt(a(e, t), 10))
			}

			function c(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t || 1);
				return r.multipliedBy(s).toFixed(0)
			}
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/react-redux/es/index.js");

			function s() {
				return Object(n.d)()
			}
		},
		"./src/reddit/icons/svgs/PowerupTier1/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("path", {
				d: "M28.36 73.65a3.47 3.47 0 01-2.55-1.15l-6.94-7.59a3.47 3.47 0 01-.7-3.63l4.5-10.73h-2.73a3.47 3.47 0 01-2.57-1.15l-6.96-7.57a3.47 3.47 0 01-.65-3.67L25.19 2.62A3.47 3.47 0 0128.35.54l26.28-.2a3.47 3.47 0 012.58 1.16l6.94 7.59a3.47 3.47 0 01.16 4.5l-7.48 9.54c.27.16.52.36.73.6l6.93 7.58a3.47 3.47 0 010 4.7L30.91 72.53a3.47 3.47 0 01-2.55 1.12zM25.44 61.9l2.92 3.17 28.9-31.45-3.77-4.11h-3.47a3.47 3.47 0 01-2.61-5.62l9.67-12.32-3.9-4.26-22.48.16L17.02 38.8l4.42 4.8h6.45a3.47 3.47 0 013.2 4.81L25.44 61.9z",
				fill: "#000"
			}), s.a.createElement("path", {
				d: "M34.43 11.6l19.3-7.78 6.98 7.58-17.57 22.21 10.94-7.58 6.98 7.58-33.62 36.57-6.99-7.58L29.1 47l-10.1.06L12 39.5l22.42-27.9z",
				fill: "#FFD635"
			}), s.a.createElement("path", {
				d: "M27.45 4.01l26.28-.2-17.57 22.22h17.92L20.45 62.6l9.68-23.1-18.12-.01L27.45 4z",
				fill: "#fff"
			}), s.a.createElement("path", {
				d: "M36.12 35.25H18.1l11.74-27 15.34-.13-17.53 22.16h16.28L30.39 48.03l5.73-12.78z",
				fill: "#fff"
			}), s.a.createElement("path", {
				d: "M51.17 26.03H33.62l20-3.03-2.45 3.03zM26.44 48.32l4.34-10.37-7.98 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id,
				"data-testid": "bolt-tier2"
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), s.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), s.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), s.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), s.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier3/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("path", {
				d: "M27.75 73.66a3.4 3.4 0 01-1.78-.5l-8.53-5.14a3.47 3.47 0 01-1.16-4.7l3.56-6.18h-.1l-8.54-5.18a3.47 3.47 0 01-1.15-4.8l5.78-9.32-7.74-4.68a3.47 3.47 0 01-1.3-4.57L20.15 2.8A3.47 3.47 0 0123.23.94h34.12c.8 0 1.58.27 2.2.78L67.4 8.1a3.47 3.47 0 01.25 5.15L57.52 23.3l5.29 4.5a3.47 3.47 0 010 5.26l-11.15 9.72 4.29 3.66a3.47 3.47 0 010 5.33L29.98 72.84c-.62.53-1.41.82-2.23.82zm-3.82-9.82l3.47 2.12 20.81-16.95-4.18-3.56a3.47 3.47 0 01-1.16-2.67 3.47 3.47 0 011.16-2.63l11.17-9.7-3.33-2.84h-.17a3.47 3.47 0 01-2.44-5.92L60 11.03 56.1 7.86H25.33L14.41 28.91l4.94 2.98h2.1a3.47 3.47 0 012.83 5.33l-6.54 10.6 4.7 2.84h3.11a3.47 3.47 0 013 5.2l-4.62 7.98z",
				fill: "#000"
			}), s.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43-18.67 18.54 6.65-5.17 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#FF4500"
			}), s.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43L53.11 21.7l-1.09 2.5 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#D01427"
			}), s.a.createElement("path", {
				d: "M22.07 4.4h34.8L36.86 24.21l15.17-.03-20.4 18.6h13.55L18.11 65.04 27.36 49 11.84 49l11.4-18.47-14.57-.33 13.4-25.8z",
				fill: "#FF4500"
			}), s.a.createElement("path", {
				d: "M49.56 7.39l-25.65-.1L13.46 27.4l15 .34-11.87 18.88h15.33l-4.22 7.24 10.53-8.74H24.6L44.4 27.09l-14.72.04L49.56 7.39z",
				fill: "#FF8717"
			}), s.a.createElement("path", {
				d: "M30.62 30.06h6.08L22.82 42.71l7.8-12.65zM18.3 24.64l7.5-14.45 16.55.07-14.7 14.59-9.35-.21z",
				fill: "#FFD635"
			}), s.a.createElement("path", {
				d: "M53.18 24.19l-17.55.03 19.7-2.88-2.15 2.85zM47.48 42.82l-17.42-.04 20-3-2.58 3.04zM20.6 54.78l7.01-6.22-4.52 7.84-2.49-1.62zM16.46 36.11l7.1-6.1-4.8 7.75-2.3-1.65z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsPurchaseModal.3fb53910656f386a8c33.js.map