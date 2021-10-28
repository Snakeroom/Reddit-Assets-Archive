// https://www.redditstatic.com/desktop2x/EconPowerupsPurchaseModal.33f1dd316ec4901d8275.js
// Retrieved at 10/28/2021, 5:10:10 PM by Reddit Dataminer v1.0.0
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
				return o
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "e", (function() {
				return l
			}));
			var n, s = r("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(n || (n = {}));
			const o = "USD",
				a = "ETH",
				c = "COINS",
				i = [a, "BTC"],
				d = [c, "SUBREDDIT_POINTS", "GAME_TOKENS"],
				l = {
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
				return d
			})), r.d(t, "b", (function() {
				return l
			}));
			var n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				s = r("./src/lib/currency/centsToDollars/index.ts"),
				o = r("./src/lib/currency/currencies.ts"),
				a = r("./src/lib/prettyPrintNumber/index.ts"),
				c = r("./src/reddit/helpers/governance/tokens.ts"),
				i = r("./src/reddit/constants/intlSupport.ts");
			const d = (e, {
					locale: t = n.DEFAULT_LOCALE,
					pretty: r,
					formatOptions: s
				} = {}) => {
					const o = Number(e);
					return Object(i.c)() ? r ? Object(a.b)(o) : new Intl.NumberFormat(t, s).format(o) : u(o, r, t)
				},
				l = (e, t = {}) => {
					const {
						locale: r = n.DEFAULT_LOCALE,
						pretty: a,
						formatOptions: d,
						displayConversion: l,
						forceDecimals: b,
						currency: f = t.currency || (t.type ? p(t.type) : o.c),
						type: h = t.type || (t.currency ? m(t.currency) : o.b.Real)
					} = t, P = Number(e), w = String(e);
					switch (h) {
						case o.b.Reddit: {
							const e = o.e[f],
								t = e ? e() : f;
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(P) + " " + t : u(P, a, r, t)
						}
						case o.b.Crypto: {
							if (a) {
								return Object(c.c)(w, l) + " " + f
							}
							const e = Number(Object(c.b)(w, l));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...d
							}).format(e) : u(e, a, r, f)
						}
						case o.b.Real:
						default: {
							const e = Number(Object(s.a)(w, b));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								notation: a ? "compact" : "standard",
								...d
							}).format(e) : u(e, a, r, f)
						}
					}
				},
				u = (e, t, r, n) => {
					return (t ? Object(a.b)(e) : e.toLocaleString(r)) + (n ? " " + n : "")
				},
				m = e => o.g.includes(e.toUpperCase()) ? o.b.Reddit : o.f.includes(e.toUpperCase()) ? o.b.Crypto : o.b.Real,
				p = e => {
					switch (e) {
						case o.b.Crypto:
							return o.d;
						case o.b.Reddit:
							return o.a;
						case o.b.Real:
						default:
							return o.c
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return d
			})), r.d(t, "paymentCompleted", (function() {
				return l
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
				return P
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return w
			})), r.d(t, "paypalApiError", (function() {
				return g
			})), r.d(t, "toggleRememberCard", (function() {
				return y
			})), r.d(t, "selectSavedCard", (function() {
				return E
			})), r.d(t, "_deleteSavedCard", (function() {
				return _
			})), r.d(t, "deleteSavedCard", (function() {
				return x
			})), r.d(t, "savedCardsPending", (function() {
				return O
			})), r.d(t, "savedCardsSuccess", (function() {
				return N
			})), r.d(t, "loadSavedCards", (function() {
				return j
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/sentry/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/endpoints/gold/purchase.ts"),
				c = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = Object(o.a)(c.B),
				l = Object(o.a)(c.w),
				u = Object(o.a)(c.b),
				m = Object(o.a)(c.y),
				p = Object(o.a)(c.a),
				b = Object(o.a)(c.E),
				f = Object(o.a)(c.G),
				h = Object(o.a)(c.F),
				P = Object(o.a)(c.D),
				w = e => async (t, r) => {
					const s = r(),
						o = Object(i.h)(s),
						a = Object(i.l)(s),
						{
							token: c,
							error: d
						} = await e.createToken({
							name: o,
							address_zip: a
						});
					if (o.trim()) {
						if (!d && c) return c;
						t(h(d || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(p({
							message: e
						}))
					}
				}, g = Object(o.a)(c.x), y = Object(o.a)(c.H), E = Object(o.a)(c.C), _ = Object(o.a)(c.g), x = e => async (t, r, {
					apiContext: n
				}) => {
					t(_(e));
					try {
						const t = await Object(a.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (o) {
						s.c.captureException(o)
					}
				}, O = Object(o.a)(c.z), N = Object(o.a)(c.A), j = () => async (e, t, {
					apiContext: r
				}) => {
					e(O());
					try {
						const t = await Object(a.b)(r());
						if (t.error) throw new Error(t.error.type);
						const n = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(N(n)), n[0] && e(E(n[0].cardId))
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
				return l
			}));
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				i = r.n(c);
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e,
				highContrast: t,
				onClick: r
			}) => o.a.createElement("button", {
				onClick: r,
				className: Object(n.a)(i.a.closeButton, {
					[i.a.highContrast]: t
				}, e),
				"aria-label": d._("Close", null, {
					hk: "3Qarlp"
				})
			}, o.a.createElement(a.b, {
				className: i.a.closeIcon
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
				o = r.n(s),
				a = r("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less"),
				c = r.n(a);
			t.a = e => o.a.createElement("header", {
				className: Object(n.a)(c.a.container, e.className)
			}, o.a.createElement("h2", {
				className: c.a.title
			}, e.title), o.a.createElement("h3", {
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
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx"),
				c = r("./node_modules/reselect/es/index.js"),
				i = r("./src/higherOrderComponents/asModal/index.tsx"),
				d = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				m = r("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx"),
				p = r("./src/reddit/constants/modals.ts"),
				b = r("./src/reddit/contexts/PageLayer/index.tsx"),
				f = r("./node_modules/react-stripe-elements/es/index.js"),
				h = r("./src/reddit/hooks/useLocale.ts"),
				P = r("./src/reddit/hooks/useTracking.ts"),
				w = r("./src/lib/constants/index.ts"),
				g = r("./src/lib/localizeCurrency/index.ts"),
				y = r("./src/reddit/helpers/trackers/powerups.ts"),
				E = r("./src/reddit/actions/gold/powerups.ts"),
				_ = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				x = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				O = r("./src/reddit/selectors/gold/powerups/index.ts"),
				N = r("./src/reddit/selectors/gold/productOffers.ts"),
				j = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				C = r("./src/reddit/selectors/user.ts"),
				v = r("./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx"),
				k = r("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				M = r("./src/reddit/components/StripePaymentForm/index.tsx"),
				S = r("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				I = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				T = r("./src/reddit/hooks/useStripe.ts"),
				D = r("./src/reddit/hooks/useThunkDispatch.ts"),
				B = r("./src/reddit/models/Gold/ProductOffer.ts"),
				A = r("./src/reddit/controls/Button/index.tsx"),
				U = r("./src/reddit/controls/LoadingIcon/index.tsx");
			const {
				fbt: F
			} = r("./node_modules/fbt/lib/FbtPublic.js"), L = Object(c.c)({
				currentUser: C.k,
				isAnonymous: O.d,
				powerupsCount: O.e,
				productOffer: N.b
			});
			var R = Object(o.b)(L)(s.a.memo((function(e) {
					const {
						className: t,
						currentUser: r,
						isAnonymous: o,
						powerupsCount: a,
						productOffer: c,
						subredditId: i
					} = e, d = Object(D.a)();
					Object(n.useEffect)(() => (window.addEventListener("message", p, !1), () => window.removeEventListener("message", p)), []);
					const [l, u] = Object(n.useState)(!1);
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
							d(Object(_.h)({
								subredditId: i,
								powerupsCount: a,
								user: r,
								isAnonymous: o
							}))
						};
					return s.a.createElement(A.k, {
						onClick: async () => {
							if (!c) return;
							u(!0);
							const e = await d(Object(_.g)(c, o, a, B.c.Powerups, i));
							if (e) {
								const {
									url: t
								} = e, r = 580, n = 740, s = Math.max(window.screenX + Math.round((window.outerWidth - r) / 2), 0), o = Math.max(window.screenY + Math.round((window.outerHeight - n) / 2), 0);
								m = window.open(`${t}&rnd=${Math.random()}`, "RedditPaypalPayment", `height=${n},width=${r},top=${o},left=${s},modal=yes,alwaysRaised=yes`)
							}
							u(!1)
						},
						className: t,
						disabled: l
					}, l ? s.a.createElement(U.a, {
						sizePx: 12,
						center: !0
					}) : F._("Continue to PayPal", null, {
						hk: "1T4BEy"
					}))
				}))),
				W = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsPremiumButton/index.m.less"),
				H = r.n(W);
			const {
				fbt: z
			} = r("./node_modules/fbt/lib/FbtPublic.js"), K = ({
				className: e,
				subredditId: t
			}) => {
				const r = Object(o.e)(O.d),
					n = Object(o.e)(O.c),
					a = Object(o.e)(O.e),
					c = Object(o.d)();
				return s.a.createElement(A.s, {
					priority: A.b.Primary,
					onClick: () => {
						c(Object(E.j)(t, a, r))
					},
					className: Object(d.a)(e, H.a.button),
					disabled: n
				}, n ? s.a.createElement(U.a, {
					className: H.a.loadingIcon,
					sizePx: 12
				}) : z._({
					"*": "Apply Your Powerups",
					_1: "Apply Your Powerup"
				}, [z._plural(a)], {
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
						value: o,
						min: a,
						max: c
					} = e, i = e => r(Math.max(Math.min(o + e, c || Number.POSITIVE_INFINITY), a || 0)), l = c === a, u = Object(X.a)(o);
					return s.a.createElement("div", {
						className: Object(d.a)(t, V.a.container),
						style: n
					}, s.a.createElement("div", {
						className: Object(d.a)(V.a.control, {
							[V.a.locked]: l
						})
					}, !l && s.a.createElement("button", {
						className: Object(d.a)(V.a.button, V.a.decrementButton),
						onClick: () => i(-1)
					}), s.a.createElement("div", {
						className: V.a.value
					}, s.a.createElement(u, {
						className: V.a.icon
					}), s.a.createElement("span", null, o)), !l && s.a.createElement("button", {
						className: Object(d.a)(V.a.button, V.a.incrementButton),
						onClick: () => i(1)
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
						maxCount: o
					} = e;
					if (!o) return null;
					const a = Math.min(o, n) / o,
						c = Math.min(o, n + (t || 0)) / o;
					return s.a.createElement("div", {
						className: r
					}, s.a.createElement("div", {
						className: Z.a.titleRow
					}, s.a.createElement("span", null, Q._("Powerups", null, {
						hk: "DrcXp"
					})), s.a.createElement("span", null, n < o ? `${n}/${o}` : n)), s.a.createElement("div", {
						className: Z.a.barRow
					}, s.a.createElement("div", {
						className: Z.a.track
					}), s.a.createElement("div", {
						className: Z.a.progress,
						style: {
							width: `${100*a}%`
						}
					}), t && s.a.createElement("div", {
						className: Z.a.additionalProgress,
						style: {
							width: `${100*(c-a)}%`,
							left: `${100*a}%`
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
					onChange: o,
					powerups: a
				} = e, {
					tier: c,
					tiersInfo: i
				} = a, l = (i[c] || i[c - 1]).powerupsCost;
				if (!l) return null;
				const u = Math.min(l, l / 2 + a.count / 2, a.count + (r || 0) / 2) / l;
				return s.a.createElement("div", {
					className: Object(d.a)(t, ee.a.container)
				}, s.a.createElement($, {
					additionalCount: r,
					className: ee.a.bar,
					count: a.count,
					maxCount: l
				}), s.a.createElement(Y, {
					className: ee.a.count,
					style: {
						left: `${100*u}%`
					},
					value: r,
					min: 1,
					max: n,
					onChange: o
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
			}), se = Object(o.b)(ne);
			var oe = Object(f.injectStripe)(se((function(e) {
					const {
						className: t,
						isAnonymous: r,
						powerupsCount: a,
						productOffer: c,
						savedCardsPending: i,
						stripe: d,
						stripeTokenPending: l,
						subredditId: u
					} = e, m = Object(o.d)(), [p, b] = Object(n.useState)(!1), f = l || i;
					return s.a.createElement(A.k, {
						onClick: async () => {
							d && c && (b(!0), await m(Object(_.j)(d, c, r, a, B.c.Powerups, u)), b(!1))
						},
						className: t,
						disabled: f || !d || p
					}, p ? s.a.createElement(U.a, {
						sizePx: 12,
						center: !0
					}) : re._("Complete purchase", null, {
						hk: "KaR26"
					}))
				}))),
				ae = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/index.m.less"),
				ce = r.n(ae);
			const {
				fbt: ie
			} = r("./node_modules/fbt/lib/FbtPublic.js"), de = 100, le = Object(c.c)({
				isAnonymous: O.d,
				isNightMode: C.X,
				paypalErrorMessage: j.d,
				powerups: O.k,
				powerupsCount: O.e,
				powerupPrice: N.a,
				stripeErrorMessage: j.j,
				userPowerupsData: O.y
			});
			var ue = Object(o.b)(le)((function(e) {
					const {
						isAnonymous: t,
						isNightMode: r,
						onCloseModal: a,
						paypalErrorMessage: c,
						powerups: i,
						powerupsCount: d,
						powerupPrice: l,
						stripeErrorMessage: u,
						subredditId: m,
						userPowerupsData: p
					} = e, b = Object(o.d)(), [O, N] = Object(n.useState)(w.Gb);
					Object(n.useEffect)(() => {
						b(Object(_.d)()), b(Object(x.selectPaymentMethod)(O))
					}, []);
					const j = Object(h.a)(),
						C = Object(P.a)();
					Object(n.useEffect)(() => {
						C(Object(y.i)())
					}, []);
					const D = Object(T.a)();
					if (!l || !i) return a(), null;
					const B = Object(g.b)(d * l, {
							locale: j
						}),
						A = !!(null == p ? void 0 : p.freeCount);
					return s.a.createElement(f.StripeProvider, {
						stripe: D
					}, s.a.createElement(f.Elements, null, s.a.createElement(s.a.Fragment, null, s.a.createElement(te, {
						className: ce.a.progressControl,
						count: d,
						maxCount: A && p ? p.freeCount : de,
						onChange: e => b(Object(E.i)(e)),
						powerups: i
					}), s.a.createElement("div", {
						className: ce.a.details
					}, s.a.createElement(S.a, {
						className: ce.a.anonymousCheckbox,
						isSelected: t,
						onClick: () => (e => b(Object(E.c)(e)))(!t),
						text: ie._("Powerup anonymously", null, {
							hk: "YXX31"
						})
					}), !A && s.a.createElement("div", {
						className: ce.a.purchaseDetails
					}, ie._({
						"*": "{powerups} Powerups {powerup price} /mo",
						_1: "1 Powerup {powerup price} /mo"
					}, [ie._plural(d, "powerups"), ie._param("powerup price", B)], {
						hk: "3cOqa5"
					}))), !A && s.a.createElement(s.a.Fragment, null, s.a.createElement("h3", {
						className: ce.a.paymentMethodTitle
					}, ie._("Payment Method", null, {
						hk: "3EbT3q"
					})), s.a.createElement(k.a, {
						className: ce.a.paymentMethodSelector,
						nightmode: r,
						selectedPayment: O,
						onPaymentSelected: e => {
							N(e), b(Object(x.selectPaymentMethod)(e))
						}
					}), O === w.Fb && u && s.a.createElement("div", {
						className: ce.a.errorMessage
					}, u), O === w.Gb && c && s.a.createElement("div", {
						className: ce.a.errorMessage
					}, c), O === w.Fb && s.a.createElement(M.a, {
						nightmode: r,
						className: ce.a.stripeForm,
						shouldDeleteCardWithGql: !0
					}), O === w.Gb && s.a.createElement(R, {
						className: ce.a.button,
						subredditId: m
					}), O === w.Fb && s.a.createElement(oe, {
						className: ce.a.button,
						subredditId: m
					}), s.a.createElement("p", {
						className: ce.a.description
					}, ie._("By completing your purchase, you are agreeing to automatic payments for Powerups and Reddit's {=User Agreement}, {=Privacy Policy}, and {previews terms of use}. Your Powerups subscription will auto-renew monthly for {powerup price} (plus tax where applicable). Cancel anytime in {=User Settings}. Cancel at least 24 hours before your subscription ends to avoid getting charged for the next month. No partial refunds.", [ie._param("=User Agreement", s.a.createElement("a", {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, ie._("User Agreement", null, {
						hk: "xEA2W"
					}))), ie._param("=Privacy Policy", s.a.createElement("a", {
						href: "https://www.redditinc.com/policies/privacy-policy",
						target: "_blank",
						rel: "noopener noreferrer"
					}, ie._("Privacy Policy", null, {
						hk: "48zcty"
					}))), ie._param("previews terms of use", s.a.createElement(v.a, null)), ie._param("powerup price", B), ie._param("=User Settings", s.a.createElement("a", {
						href: "/settings/premium",
						target: "_blank"
					}, ie._("User Settings", null, {
						hk: "1u8CTh"
					})))], {
						hk: "NLnVj"
					}))), A && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: ce.a.premiumDescription
					}, s.a.createElement("div", {
						className: ce.a.premiumIconWrapper
					}, s.a.createElement(I.a, {
						className: ce.a.premiumIcon
					})), s.a.createElement("span", null, ie._("Premium gives you one monthly Powerup", null, {
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
			} = r("./node_modules/fbt/lib/FbtPublic.js"), he = Object(b.u)(), Pe = Object(c.c)({
				currentSubreddit: b.r
			}), we = Object(o.b)(Pe);
			const ge = Object(i.a)(he(we((function(e) {
				const {
					currentSubreddit: t
				} = e, r = Object(o.d)(), n = () => r(Object(l.g)(p.a.ECON_POWERUPS_PURCHASE));
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
				}), s.a.createElement(a.a, {
					space: a.b.MODAL
				})) : (n(), null)
			}))));
			t.default = e => s.a.createElement(ge, be({}, e, {
				className: Object(d.a)(e.className, pe.a.modal)
			}))
		},
		"./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			const {
				fbt: o
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function a({
				className: e
			}) {
				return s.a.createElement("a", {
					href: "https://www.redditinc.com/policies/previews-terms",
					target: "_blank",
					rel: "noopener noreferrer",
					className: e
				}, o._("Previews Terms of Use", null, {
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
				o = r("./src/lib/classNames/index.ts"),
				a = r("./node_modules/react/index.js"),
				c = r.n(a),
				i = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/reddit/selectors/user.ts"),
				l = r("./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less"),
				u = r.n(l);
			! function(e) {
				e[e.SIDEBAR = 0] = "SIDEBAR", e[e.MODAL = 1] = "MODAL", e[e.INFEED_UNIT = 2] = "INFEED_UNIT"
			}(n || (n = {}));
			const m = ({
				space: e
			}) => {
				const t = Object(i.e)(d.X),
					r = e === n.MODAL,
					a = e === n.INFEED_UNIT;
				return c.a.createElement("div", {
					className: Object(o.a)(u.a.background, {
						[u.a.isNightmodeOn]: t,
						[u.a.isModal]: r,
						[u.a.isInFeedUnit]: a
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
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			}));
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				a = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				c = r("./src/reddit/icons/svgs/PowerupTier3/index.tsx");
			const i = 2,
				d = 3;

			function l(e) {
				return e >= d ? c.a : e >= i ? a.a : o.a
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
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = r.n(a);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => s.a.createElement("div", {
				className: Object(o.a)(c.a.loadingIcon, t, {
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
				return o
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				s = r("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t || 1);
				return r.dividedToIntegerBy(s).toString()
			}

			function a(e, t) {
				return Object(s.b)(parseInt(o(e, t), 10))
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsPurchaseModal.33f1dd316ec4901d8275.js.map