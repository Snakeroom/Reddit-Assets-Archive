// https://www.redditstatic.com/desktop2x/PremiumPurchaseModal.b263d4fef5a8a611d38c.js
// Retrieved at 12/7/2021, 10:20:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PremiumPurchaseModal"], {
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./src/lib/currency/cleanNumber/index.ts");

			function a(e, t) {
				const r = Object(n.a)(e),
					a = parseInt(r) / 100;
				return Math.floor(a) !== a || t ? a.toFixed(2) : String(a)
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
				return s
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "e", (function() {
				return l
			}));
			var n, a = r("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(n || (n = {}));
			const s = "USD",
				c = "ETH",
				o = "COINS",
				i = [c, "BTC"],
				d = [o, "SUBREDDIT_POINTS", "GAME_TOKENS"],
				l = {
					COINS: () => a.fbt._("Coins", null, {
						hk: "1T2Y4p"
					}),
					SUBREDDIT_POINTS: () => a.fbt._("Subreddit points", null, {
						hk: "1ytOO3"
					}),
					GAME_TOKENS: () => a.fbt._("Game tokens", null, {
						hk: "16BUrU"
					})
				}
		},
		"./src/lib/loadRedditAdsPixel.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return s
			}));
			var n = r("./src/lib/sentry/index.ts");

			function a() {
				! function(e, t) {
					if (!e.rdt) {
						var r = e.rdt = function() {
							r.sendEvent ? r.sendEvent.apply(r, arguments) : r.callQueue.push(arguments)
						};
						r.callQueue = [];
						var n = t.createElement("script");
						n.src = "https://www.redditstatic.com/ads/pixel.js", n.async = !0;
						var a = t.getElementsByTagName("script")[0];
						a.parentNode.insertBefore(n, a)
					}
				}(window, document), rdt("init", "t2_2q2gwo2t"), rdt("track", "PageVisit")
			}
			const s = () => {
				try {
					rdt("track", "Purchase")
				} catch (e) {
					n.c.captureMessage('Attempted to fire RedditAds "Purchase" pixel, but global "rdt" object was unavailable')
				}
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
				a = r("./src/lib/currency/centsToDollars/index.ts"),
				s = r("./src/lib/currency/currencies.ts"),
				c = r("./src/lib/prettyPrintNumber/index.ts"),
				o = r("./src/reddit/helpers/governance/tokens.ts"),
				i = r("./src/reddit/constants/intlSupport.ts");
			const d = (e, {
					locale: t = n.DEFAULT_LOCALE,
					pretty: r,
					formatOptions: a
				} = {}) => {
					const s = Number(e);
					return Object(i.c)() ? r ? Object(c.b)(s) : new Intl.NumberFormat(t, a).format(s) : u(s, r, t)
				},
				l = (e, t = {}) => {
					const {
						locale: r = n.DEFAULT_LOCALE,
						pretty: c,
						formatOptions: d,
						displayConversion: l,
						forceDecimals: b,
						currency: f = t.currency || (t.type ? p(t.type) : s.c),
						type: h = t.type || (t.currency ? m(t.currency) : s.b.Real)
					} = t, y = Number(e), P = String(e);
					switch (h) {
						case s.b.Reddit: {
							const e = s.e[f],
								t = e ? e() : f;
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(y) + " " + t : u(y, c, r, t)
						}
						case s.b.Crypto: {
							if (c) {
								return Object(o.c)(P, l) + " " + f
							}
							const e = Number(Object(o.b)(P, l));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...d
							}).format(e) : u(e, c, r, f)
						}
						case s.b.Real:
						default: {
							const e = Number(Object(a.a)(P, b));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								notation: c ? "compact" : "standard",
								...d
							}).format(e) : u(e, c, r, f)
						}
					}
				},
				u = (e, t, r, n) => {
					return (t ? Object(c.b)(e) : e.toLocaleString(r)) + (n ? " " + n : "")
				},
				m = e => s.g.includes(e.toUpperCase()) ? s.b.Reddit : s.f.includes(e.toUpperCase()) ? s.b.Crypto : s.b.Real,
				p = e => {
					switch (e) {
						case s.b.Crypto:
							return s.d;
						case s.b.Reddit:
							return s.a;
						case s.b.Real:
						default:
							return s.c
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
				return y
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return P
			})), r.d(t, "paypalApiError", (function() {
				return g
			})), r.d(t, "toggleRememberCard", (function() {
				return O
			})), r.d(t, "selectSavedCard", (function() {
				return _
			})), r.d(t, "_deleteSavedCard", (function() {
				return j
			})), r.d(t, "deleteSavedCard", (function() {
				return C
			})), r.d(t, "savedCardsPending", (function() {
				return x
			})), r.d(t, "savedCardsSuccess", (function() {
				return E
			})), r.d(t, "loadSavedCards", (function() {
				return v
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/sentry/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/endpoints/gold/purchase.ts"),
				o = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = Object(s.a)(o.B),
				l = Object(s.a)(o.w),
				u = Object(s.a)(o.b),
				m = Object(s.a)(o.y),
				p = Object(s.a)(o.a),
				b = Object(s.a)(o.E),
				f = Object(s.a)(o.G),
				h = Object(s.a)(o.F),
				y = Object(s.a)(o.D),
				P = e => async (t, r) => {
					const a = r(),
						s = Object(i.h)(a),
						c = Object(i.l)(a),
						{
							token: o,
							error: d
						} = await e.createToken({
							name: s,
							address_zip: c
						});
					if (s.trim()) {
						if (!d && o) return o;
						t(h(d || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(p({
							message: e
						}))
					}
				}, g = Object(s.a)(o.x), O = Object(s.a)(o.H), _ = Object(s.a)(o.C), j = Object(s.a)(o.g), C = e => async (t, r, {
					apiContext: n
				}) => {
					t(j(e));
					try {
						const t = await Object(c.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (s) {
						a.c.captureException(s)
					}
				}, x = Object(s.a)(o.z), E = Object(s.a)(o.A), v = () => async (e, t, {
					apiContext: r
				}) => {
					e(x());
					try {
						const t = await Object(c.b)(r());
						if (t.error) throw new Error(t.error.type);
						const n = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(E(n)), n[0] && e(_(n[0].cardId))
					} catch (n) {
						a.c.captureException(n), e(E([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "setPremiumPurchaseModalInfo", (function() {
				return y
			})), r.d(t, "clearPremiumPurchaseModalInfo", (function() {
				return P
			})), r.d(t, "openPremiumPurchaseModal", (function() {
				return g
			})), r.d(t, "closePremiumPurchaseModal", (function() {
				return O
			})), r.d(t, "stripePremiumPurchaseRequested", (function() {
				return _
			})), r.d(t, "paymentBlobCreated", (function() {
				return j
			})), r.d(t, "openWithBlob", (function() {
				return C
			}));
			var n = r("./src/config.ts"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/sentry/index.ts"),
				o = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/formatApiError/index.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/constants/modals.ts"),
				m = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = r("./src/reddit/endpoints/gold/purchase.ts"),
				b = r("./src/reddit/helpers/correlationIdTracker.ts"),
				f = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				h = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const y = Object(s.a)(h.t),
				P = Object(s.a)(h.e),
				g = (e, t) => async r => {
					r(y(e)), r(Object(l.h)(u.a.ECON_PREMIUM_PURCHASE, t))
				}, O = () => async e => {
					e(Object(l.g)(u.a.ECON_PREMIUM_PURCHASE)), e(P())
				}, _ = e => async (t, r, {
					apiContext: n
				}) => {
					const s = Object(f.a)(r()),
						c = (null == s ? void 0 : s.pennies) || o.yb,
						l = Object(b.c)(b.a.GoldPayment);
					t(Object(d.stripeTokenPending)());
					const u = await t(Object(d.validateAndCreateStripeToken)(e));
					if (u) try {
						const e = await Object(p.h)({
							context: n(),
							correlationId: l,
							pennies: c,
							token: u
						});
						if (e.error) {
							const r = Object(i.a)(e.error);
							t(Object(d.stripeApiError)(r))
						} else t(Object(d.paymentCompleted)({
							confirmed: !1
						}))
					} catch (m) {
						const e = Object(i.a)(m);
						t(Object(d.stripeApiError)(e))
					} else {
						const e = a.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						t(Object(d.stripeApiError)(e))
					}
				}, j = Object(s.a)(h.v), C = ({
					packageId: e,
					correlationId: t
				}, r) => async (a, s, {
					apiContext: o
				}) => {
					a(g({
						packageId: e,
						correlationId: t
					}, r));
					const l = Object(f.a)(s()),
						u = (null == l ? void 0 : l.paypalButtonId) || n.a.paypal.buttons.premium;
					if (u) try {
						const e = await Object(m.f)({
							buttonId: u,
							context: o(),
							correlationId: t
						});
						if (e.error) {
							const t = Object(i.a)(e.error);
							a(Object(d.paypalApiError)(t))
						} else a(j(e))
					} catch (p) {
						const e = Object(i.a)(p);
						a(Object(d.paypalApiError)(e))
					} else c.c.captureMessage("No Premium packages available on Premium purchase modal")
				}
		},
		"./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less": function(e, t, r) {
			e.exports = {
				purchaseFooter: "_2siiafYfV9NgkupSIDgaht",
				purchaseButton: "_18yTyMH2TYOdGSb9UumZq-"
			}
		},
		"./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./src/reddit/controls/Button/index.tsx"),
				c = r("./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less"),
				o = r.n(c);
			const {
				fbt: i
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				buttonText: e,
				onCloseClick: t
			}) => a.a.createElement("div", {
				className: o.a.purchaseFooter
			}, a.a.createElement(s.l, {
				className: o.a.purchaseButton,
				"data-redditstyle": !0,
				onClick: t
			}, e || i._("Done", null, {
				hk: "3s1bT9"
			})))
		},
		"./src/reddit/components/PremiumPurchaseModal/index.m.less": function(e, t, r) {
			e.exports = {
				premiumPurchaseModal: "_23HrteRgGDZ91SGL5oYWAp",
				premiumPurchaseHeader: "_1vNPpspCrQ3W3_z4l8WXD2",
				premiumIcon: "_2IUxk7I3wGLF67ECxWJaKF",
				titleMain: "_23AsioP9LFdnWNWvf2JxuY",
				titleDescription: "UZLxEtKcYjKnAtMic2BtE",
				closeButton: "W3hCwevNo10JOueQq9XCa",
				closeIcon: "_2Y-ZxM1D66jXobSnwtF5zy",
				premiumPurchaseBody: "_1f5Hj-YmiFvUddjOo3BXUn",
				creditCard: "_1mWVaEygz0IbIgt4I7nhA6",
				selectPayment: "_1W5FK94KCTY0oE-NFNp155",
				checkoutFooter: "_1GdfJOpcU3r4Y3Bj3aURo9",
				premiumPurchaseTotal: "_2DF2iuoYj11YJxwHtRl6k2",
				membershipDescription: "_2bHvYuy1c3aeL3OpvcSrzV",
				premiumPurchaseSelectPaymentFooter: "BKDWqNtFTGRZSXrRVdDzB",
				coinBalance: "_3VRMoYSGnuSeMurnm9AnE",
				premiumPurchaseButton: "_1VvnA3djGhzHigTOUn58Dj",
				paymentCompleteHeader: "_1LcmOk7SUoKQdR-v7knn89",
				paymentCompleteTitleMain: "_1UtE2Rjc4QGWjNU3F7ObST",
				paymentCompleteTitleDescription: "Og7AfSzv9RffDd4Ck06B5",
				paymentCompleteTitleItem: "_3SMYmC6QG8OyE_fULA-V0R",
				paymentCompleteTitleItemLast: "_3idbK2oKeR-XNpK_Q-QgIh",
				poweredByStripeIcon: "_3t8d-2wwATteV4UXKFhSb1",
				errorMessage: "_1625HJ3ZMN4xwl3cV7g2E2",
				stripeForm: "Qe2dMlpz4gcQu7Pb44kZ"
			}
		},
		"./src/reddit/components/PremiumPurchaseModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				o = r("./src/config.ts"),
				i = r("./src/higherOrderComponents/asModal/index.tsx"),
				d = r("./src/lib/classNames/index.ts"),
				l = r("./src/lib/constants/index.ts"),
				u = r("./src/reddit/models/Gold/Premium/index.ts"),
				m = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				p = r("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				b = r("./src/reddit/components/TrackingHelper/index.tsx"),
				f = r("./src/reddit/helpers/correlationIdTracker.ts"),
				h = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				y = r("./src/reddit/models/User/index.ts"),
				P = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				g = r("./src/reddit/selectors/platform.ts"),
				O = r("./src/reddit/selectors/user.ts"),
				_ = r("./src/reddit/models/Gold/ProductOffer.ts"),
				j = r("./src/reddit/selectors/gold/productOffers.ts"),
				C = r("./node_modules/fbt/lib/FbtPublic.js"),
				x = r("./src/lib/loadRedditAdsPixel.ts"),
				E = r("./src/reddit/actions/modal.ts"),
				v = r("./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx"),
				k = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				N = r("./src/reddit/constants/modals.ts"),
				w = r("./src/reddit/helpers/createEmojiText/index.tsx"),
				M = r("./src/reddit/hooks/useTracking.ts"),
				I = r("./src/reddit/icons/fonts/Premium/index.tsx"),
				T = r("./src/reddit/selectors/activeModal.ts"),
				S = r("./src/reddit/components/PremiumPurchaseModal/index.m.less"),
				R = r.n(S);
			var A = ({
					onCloseClick: e
				}) => {
					const t = Object(M.a)(),
						r = Object(s.d)(),
						c = Object(s.e)(e => {
							var t, r;
							return null !== (r = null === (t = Object(T.a)(e)) || void 0 === t ? void 0 : t.isPowerupsPremiumPurchase) && void 0 !== r && r
						});
					Object(n.useEffect)(() => {
						t(Object(h.i)()), Object(x.b)()
					}, [t]);
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: R.a.paymentCompleteHeader,
						style: {
							backgroundImage: `url("${o.a.assetPath}/img/gold/premium-hero-g.jpg")`
						}
					}, a.a.createElement(I.a, {
						className: R.a.premiumIcon,
						title: C.fbt._("Reddit Premium", null, {
							hk: "34acNx"
						})
					}), a.a.createElement("div", {
						className: R.a.paymentCompleteTitleMain
					}, C.fbt._("Thanks for purchasing Reddit Premium!", null, {
						hk: "27KGKp"
					})), a.a.createElement("div", {
						className: R.a.paymentCompleteTitleDescription
					}, a.a.createElement("div", {
						className: R.a.paymentCompleteTitleItem
					}, C.fbt._("You will receive a message in your inbox once your purchase is confirmed.", null, {
						hk: "27tvU4"
					})), a.a.createElement("div", {
						className: R.a.paymentCompleteTitleItem
					}, a.a.createElement("a", {
						href: "/settings/premium",
						target: "_blank"
					}, C.fbt._("Manage your ads-free experience.", null, {
						hk: "1RxPah"
					}))), a.a.createElement("div", {
						className: R.a.paymentCompleteTitleItemLast
					}, Object(w.a)(C.fbt._("Find more about {anchor text} on Reddit.", [C.fbt._param("anchor text", ":loungeLink:")], {
						hk: "2RGr1F"
					}), {
						":loungeLink:": a.a.createElement("a", {
							href: "/r/lounge",
							target: "_blank"
						}, "r/lounge")
					}))), a.a.createElement("button", {
						className: R.a.closeButton,
						onClick: e
					}, a.a.createElement(k.b, {
						className: R.a.closeIcon,
						"data-redditstyle": !0
					}))), a.a.createElement(v.a, {
						onCloseClick: () => {
							c ? r(Object(E.h)(N.a.ECON_POWERUPS_PURCHASE)) : e()
						},
						buttonText: c ? C.fbt._("Use Your Premium Powerup", null, {
							hk: "1r0NDt"
						}) : null
					}))
				},
				U = r("./node_modules/react-stripe-elements/es/index.js"),
				F = r("./src/lib/currency/currencies.ts"),
				B = r("./src/lib/localizeCurrency/index.ts"),
				D = r("./src/reddit/actions/gold/productOfferPurchase.ts");
			var L = ({
					paypalUrl: e,
					finishPaymentCallback: t
				}) => {
					let r = window;
					const a = Object(n.useCallback)(e => {
						const n = s(e);
						"paypal-finish.success.framedmodal" === (null == n ? void 0 : n.type) ? (t(), null == r || r.close()) : "paypal-finish.cancel.framedmodal" === (null == n ? void 0 : n.type) && (null == r || r.close())
					}, [t, r]);
					if (Object(n.useEffect)(() => (window.addEventListener("message", a, !1), () => window.removeEventListener("message", a)), [a]), e) {
						const t = 580,
							n = 740,
							a = Math.max(window.screenX + Math.round((window.outerWidth - t) / 2), 0),
							s = Math.max(window.screenY + Math.round((window.outerHeight - n) / 2), 0);
						r = window.open(`${e}&rnd=${Math.random()}`, "RedditPaypalPayment", `height=${n},width=${t},top=${s},left=${a},modal=yes,alwaysRaised=yes`)
					}
					const s = e => {
						try {
							return "string" == typeof e.data ? JSON.parse(e.data) : e.data
						} catch (t) {
							return
						}
					}
				},
				G = r("./src/reddit/hooks/useThunkDispatch.ts"),
				H = r("./src/reddit/controls/Button/index.tsx");
			const {
				fbt: Y
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var K = ({
					className: e,
					productsCount: t,
					productOffer: r,
					productOfferType: c
				}) => {
					const o = Object(G.a)(),
						i = Object(s.e)(O.k),
						[d, l] = Object(n.useState)(!1),
						[u, m] = Object(n.useState)(""),
						p = Object(n.useCallback)(() => {
							c === _.c.Premium && i && o(Object(D.e)({
								user: i
							}))
						}, [o, c, i]);
					L({
						paypalUrl: u,
						finishPaymentCallback: p
					});
					return a.a.createElement(H.t, {
						onClick: async () => {
							if (!r) return;
							l(!0);
							const e = await o(Object(D.h)(r, !1, t, c));
							(null == e ? void 0 : e.url) && m(e.url), l(!1)
						},
						className: e,
						disabled: d
					}, Y._("Continue to PayPal", null, {
						hk: "1T4BEy"
					}))
				},
				$ = r("./src/reddit/selectors/gold/powerups/index.ts");
			const {
				fbt: W
			} = r("./node_modules/fbt/lib/FbtPublic.js"), q = Object(c.c)({
				isAnonymous: $.d,
				savedCardsPending: P.w,
				stripeTokenPending: P.m
			}), z = Object(s.b)(q);
			var Q = Object(U.injectStripe)(z(({
					className: e,
					isAnonymous: t,
					productOffer: r,
					productsCount: n,
					savedCardsPending: c,
					stripe: o,
					stripeTokenPending: i,
					productOfferType: d
				}) => {
					const l = Object(s.d)(),
						u = i || c;
					return a.a.createElement(H.t, {
						onClick: () => {
							o && r && l(Object(D.k)(o, r, t, n, d))
						},
						className: e,
						disabled: u || !o
					}, W._("Complete purchase", null, {
						hk: "KaR26"
					}))
				})),
				V = r("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				X = r("./src/reddit/components/StripePaymentForm/index.tsx"),
				J = r("./src/reddit/hooks/useLocale.ts"),
				Z = r("./src/reddit/hooks/useStripe.ts");
			var ee = e => a.a.createElement("div", {
				className: R.a.premiumPurchaseHeader,
				style: {
					backgroundImage: `url("${o.a.assetPath}/img/gold/premium-hero-g.jpg")`
				}
			}, a.a.createElement(I.a, {
				className: R.a.premiumIcon,
				title: C.fbt._("Reddit Premium", null, {
					hk: "34acNx"
				}),
				isFilled: !0
			}), a.a.createElement("div", {
				className: R.a.titleMain
			}, C.fbt._("Buy Reddit Premium!", null, {
				hk: "3XxwQZ"
			})), a.a.createElement("div", {
				className: R.a.titleDescription
			}, C.fbt._("You're purchasing Reddit Premium for yourself, {username}!", [C.fbt._param("username", e.userName)], {
				hk: "bCrwe"
			})), a.a.createElement("button", {
				className: R.a.closeButton,
				onClick: e.onCloseClick
			}, a.a.createElement(k.b, {
				className: R.a.closeIcon,
				"data-redditstyle": !0
			})));
			var te = e => {
				const t = Object(Z.a)(),
					r = Object(J.b)(),
					n = Object(B.b)(e.total, {
						locale: r,
						type: F.b.Real
					}),
					s = e.isAnnualPremium ? C.fbt._("yearly", null, {
						hk: "10Ao7X"
					}) : C.fbt._("monthly", null, {
						hk: "2X3LdO"
					}),
					c = e.isAnnualPremium ? C.fbt._("year", null, {
						hk: "4hYQdN"
					}) : C.fbt._("month", null, {
						hk: "1l20Gw"
					}),
					o = e.selectedPayment === l.Hb,
					i = e.selectedPayment === l.Gb,
					d = o ? K : Q;
				return a.a.createElement(U.StripeProvider, {
					stripe: t
				}, a.a.createElement(U.Elements, null, a.a.createElement(a.a.Fragment, null, a.a.createElement(ee, {
					onCloseClick: e.onCloseModal,
					userName: e.userName
				}), a.a.createElement("div", {
					className: R.a.premiumPurchaseBody
				}, a.a.createElement(V.a, {
					className: R.a.selectPayment,
					nightmode: e.nightmode,
					selectedPayment: e.selectedPayment,
					onPaymentSelected: e.onPaymentSelected
				}), i && a.a.createElement("div", {
					className: R.a.creditCard
				}, a.a.createElement(X.a, {
					nightmode: e.nightmode,
					className: R.a.stripeForm,
					shouldDeleteCardWithGql: !0
				})), a.a.createElement("div", {
					className: R.a.checkoutFooter
				}, a.a.createElement("div", {
					className: R.a.premiumPurchaseTotal
				}, C.fbt._("Total: {Price}/{Membership Term}", [C.fbt._param("Price", n), C.fbt._param("Membership Term", s)], {
					hk: "1islUR"
				}))), o && e.paypalErrorMessage && a.a.createElement("div", {
					className: R.a.errorMessage
				}, e.paypalErrorMessage), i && e.stripeErrorMessage && a.a.createElement("div", {
					className: R.a.errorMessage
				}, e.stripeErrorMessage), a.a.createElement("div", {
					className: R.a.membershipDescription
				}, C.fbt._("By completing your purchase, you are agreeing to automatic payments for Reddit Premium and Reddit’s {=User Agreement} and {=Privacy Policy}. Your Premium subscription will auto-renew {Renewal Term} for {Price} (plus tax where applicable). Cancel anytime in User Settings. Cancel at least 24 hours before your subscription ends to avoid getting charged for the next {Length of term}. No partial refunds.", [C.fbt._param("=User Agreement", a.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank",
					rel: "noopener noreferrer"
				}, C.fbt._("User Agreement", null, {
					hk: "4qnrFW"
				}))), C.fbt._param("=Privacy Policy", a.a.createElement("a", {
					href: "https://www.redditinc.com/policies/privacy-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, C.fbt._("Privacy Policy", null, {
					hk: "2PtUaD"
				}))), C.fbt._param("Renewal Term", s), C.fbt._param("Price", n), C.fbt._param("Length of term", c)], {
					hk: "2gscIO"
				}))), a.a.createElement("div", {
					className: R.a.premiumPurchaseSelectPaymentFooter
				}, e.premiumProductOffer && a.a.createElement(d, {
					productsCount: 1,
					className: R.a.premiumPurchaseButton,
					productOffer: e.premiumProductOffer,
					productOfferType: _.c.Premium
				})))))
			};

			function re() {
				return (re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ne = Object(c.c)({
					activePremiumPackage: P.a,
					activePage: P.n,
					allowNavigationCallback: e => {
						const t = Object(g.a)(e);
						return null === t ? void 0 : t
					},
					nightmode: O.X,
					passthrough: P.e,
					selectedPayment: P.c,
					stripeErrorMessage: P.j,
					stripeTokenPending: P.m,
					paypalErrorMessage: P.d,
					userName: e => {
						const t = Object(O.k)(e);
						return `u/${Object(y.e)(t)}`
					},
					renewInterval: P.p,
					premiumProductOffer: j.e,
					premiumPrice: j.c
				}),
				ae = Object(s.b)(ne, (e, t) => ({
					closeModal: () => e(Object(p.closePremiumPurchaseModal)()),
					onCloseModalClick: () => e(Object(p.closePremiumPurchaseModal)()),
					onCompletePurchaseClick: t => e(Object(p.stripePremiumPurchaseRequested)(t)),
					onPaymentSelected: t => e(Object(m.selectPaymentMethod)(t))
				})),
				se = Object(i.a)(({
					sendEvent: e,
					activePage: t,
					activePremiumPackage: r,
					className: s,
					nightmode: c,
					selectedPayment: i,
					onCompletePurchaseClick: d,
					onPaymentSelected: m,
					onTryCloseModal: p,
					passthrough: b,
					stripeErrorMessage: y,
					stripeTokenPending: P,
					paypalErrorMessage: g,
					userName: O,
					renewInterval: j,
					premiumProductOffer: C,
					premiumPrice: x
				}) => {
					let E = l.yb,
						v = !1;
					C && x ? (E = x, v = j === _.b.Year) : r && (E = r ? r.pennies : l.yb, v = !!r && r.frequency === u.c.Yearly);
					const k = Object(n.useCallback)(e => {
						if (27 === e.keyCode) return p()
					}, [p]);
					return Object(n.useEffect)(() => (document.addEventListener("keydown", k), Object(f.e)(f.a.GoldPayment, !1), e(Object(h.h)()), () => document.removeEventListener("keydown", k)), [k, e]), Object(n.useEffect)(() => {
						y && e(Object(h.f)())
					}, [e, y]), a.a.createElement("div", {
						className: s
					}, "selectPayment" === t && a.a.createElement(te, {
						nightmode: c,
						onCloseModal: p,
						onCompletePurchaseClick: d,
						onPaymentSelected: m,
						isAnnualPremium: v,
						passthrough: b,
						paypalButtonId: (null == r ? void 0 : r.paypalButtonId) || o.a.paypal.buttons.premium,
						selectedPayment: i,
						stripeErrorMessage: y,
						stripeTokenPending: P,
						paypalErrorMessage: g,
						premiumProductOffer: C,
						total: E,
						userName: O
					}), "paymentCompleted" === t && a.a.createElement(A, {
						onCloseClick: p
					}))
				});
			t.default = ae(Object(b.c)(class extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onTryCloseModal = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(h.b)()), this.onCloseModal()
					}, this.onCloseModal = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}
				}
				render() {
					return a.a.createElement(se, re({}, this.props, {
						className: Object(d.a)(this.props.className, R.a.premiumPurchaseModal),
						onCloseModal: this.onCloseModal,
						onOverlayClick: this.onTryCloseModal,
						onTryCloseModal: this.onTryCloseModal,
						withOverlay: !0
					}))
				}
			}))
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
				a = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				o = r.n(c);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => a.a.createElement("div", {
				className: Object(s.a)(o.a.loadingIcon, t, {
					[o.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/endpoints/gold/paypalPurchases.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "e", (function() {
				return b
			}));
			var n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				s = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				o = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				i = r("./src/reddit/endpoints/gold/purchase.ts");
			const d = async ({
				buttonId: e,
				context: t,
				correlationId: r
			}) => {
				const d = {
						button_id: e,
						correlation_id: r
					},
					l = `${t.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					u = Object(o.a)(l);
				return Object(a.a)(Object(s.a)(t, [c.a]), {
					method: n.jb.POST,
					endpoint: u,
					data: d
				}).then(i.c)
			}, l = async ({
				context: e,
				coins: t,
				pennies: r,
				correlationId: o
			}) => {
				const d = {
					coins: t,
					pennies: r,
					correlation_id: o
				};
				return Object(a.a)(Object(s.a)(e, [c.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(i.c)
			}, u = async ({
				context: e,
				awardId: t,
				pennies: r,
				thingId: o,
				correlationId: d
			}) => {
				const l = {
					award_id: t,
					correlation_id: d,
					pennies: r,
					thing_id: o
				};
				return Object(a.a)(Object(s.a)(e, [c.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(i.c)
			}, m = async ({
				context: e,
				offerContext: t,
				orderId: r,
				coins: o,
				pennies: d,
				correlationId: l
			}) => {
				const u = {
					offer_context: t,
					order_id: r,
					coins: o,
					pennies: d,
					correlation_id: l
				};
				return Object(a.a)(Object(s.a)(e, [c.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: u
				}).then(i.c)
			}, p = async ({
				awardId: e,
				context: t,
				coins: r,
				correlationId: o,
				isAnonymous: d,
				message: l,
				offerContext: u,
				orderId: m,
				pennies: p,
				thingId: b
			}) => {
				const f = {
					award_id: e,
					coins: r,
					correlation_id: o,
					is_anonymous: d,
					message: l,
					offer_context: u,
					order_id: m,
					pennies: p,
					thing_id: b
				};
				return Object(a.a)(Object(s.a)(t, [c.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: f
				}).then(i.c)
			}, b = async ({
				awardId: e,
				context: t,
				correlationId: r,
				isAnonymous: o,
				message: d,
				orderId: l,
				thingId: u
			}) => {
				const m = {
					award_id: e,
					correlation_id: r,
					is_anonymous: o,
					message: d,
					order_id: l,
					thing_id: u
				};
				return Object(a.a)(Object(s.a)(t, [c.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: m
				}).then(i.c)
			}
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n);

			function s(e, t) {
				const r = e.toString().split(":");
				return r.length % 2 == 0 ? e : r.reduce((e, r, n) => (n % 2 == 0 ? e.push(r) : "" === r ? e.push(":") : `:${r}:` in t ? e.push(t[`:${r}:`]) : e.push(`:${r}:`), e), []).map((e, t) => a.a.createElement(a.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				a = r("./src/lib/prettyPrintNumber/index.ts");

			function s(e, t) {
				const r = new n.BigNumber(e),
					a = new n.BigNumber(t || 1);
				return r.dividedToIntegerBy(a).toString()
			}

			function c(e, t) {
				return Object(a.b)(parseInt(s(e, t), 10))
			}

			function o(e, t) {
				const r = new n.BigNumber(e),
					a = new n.BigNumber(t || 1);
				return r.multipliedBy(a).toFixed(0)
			}
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/react-redux/es/index.js");

			function a() {
				return Object(n.d)()
			}
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "d", (function() {
				return s
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return i
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			const a = {
					PREMIUM_1_MONTH: {
						priceInCoins: 1800,
						monthsOfPremium: 1
					},
					PREMIUM_3_MONTHS: {
						priceInCoins: 5400,
						monthsOfPremium: 3
					},
					PREMIUM_6_MONTHS: {
						priceInCoins: 10800,
						monthsOfPremium: 6
					},
					PREMIUM_12_MONTHS: {
						priceInCoins: 21600,
						monthsOfPremium: 12
					}
				},
				s = (e, t = !1) => {
					const r = [];
					for (const n in a) {
						const s = a[n];
						(s.priceInCoins <= e || t) && r.push(s)
					}
					return r
				},
				c = e => n.fbt._({
					"*": "{number of months} months {number of coins} Coins",
					_1: "1 month {number of coins} Coins"
				}, [n.fbt._plural(e.monthsOfPremium, "number of months"), n.fbt._param("number of coins", e.priceInCoins.toLocaleString())], {
					hk: "2bar0C"
				}),
				o = "com.reddit.premium_1";
			var i;
			! function(e) {
				e.Monthly = "monthly", e.Yearly = "yearly"
			}(i || (i = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PremiumPurchaseModal.b263d4fef5a8a611d38c.js.map