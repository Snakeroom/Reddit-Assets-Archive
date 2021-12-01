// https://www.redditstatic.com/desktop2x/reddit-components-CoinPurchaseDropdown.12529f1b459ac503c4d7.js
// Retrieved at 12/1/2021, 12:30:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-CoinPurchaseDropdown"], {
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/lib/currency/cleanNumber/index.ts");

			function o(e, t) {
				const r = Object(n.a)(e),
					o = parseInt(r) / 100;
				return Math.floor(o) !== o || t ? o.toFixed(2) : String(o)
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
				return c
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "a", (function() {
				return s
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "e", (function() {
				return l
			}));
			var n, o = r("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(n || (n = {}));
			const c = "USD",
				a = "ETH",
				s = "COINS",
				i = [a, "BTC"],
				d = [s, "SUBREDDIT_POINTS", "GAME_TOKENS"],
				l = {
					COINS: () => o.fbt._("Coins", null, {
						hk: "1T2Y4p"
					}),
					SUBREDDIT_POINTS: () => o.fbt._("Subreddit points", null, {
						hk: "1ytOO3"
					}),
					GAME_TOKENS: () => o.fbt._("Game tokens", null, {
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
				o = r("./src/lib/currency/centsToDollars/index.ts"),
				c = r("./src/lib/currency/currencies.ts"),
				a = r("./src/lib/prettyPrintNumber/index.ts"),
				s = r("./src/reddit/helpers/governance/tokens.ts"),
				i = r("./src/reddit/constants/intlSupport.ts");
			const d = (e, {
					locale: t = n.DEFAULT_LOCALE,
					pretty: r,
					formatOptions: o
				} = {}) => {
					const c = Number(e);
					return Object(i.c)() ? r ? Object(a.b)(c) : new Intl.NumberFormat(t, o).format(c) : u(c, r, t)
				},
				l = (e, t = {}) => {
					const {
						locale: r = n.DEFAULT_LOCALE,
						pretty: a,
						formatOptions: d,
						displayConversion: l,
						forceDecimals: m,
						currency: h = t.currency || (t.type ? p(t.type) : c.c),
						type: f = t.type || (t.currency ? b(t.currency) : c.b.Real)
					} = t, O = Number(e), g = String(e);
					switch (f) {
						case c.b.Reddit: {
							const e = c.e[h],
								t = e ? e() : h;
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(O) + " " + t : u(O, a, r, t)
						}
						case c.b.Crypto: {
							if (a) {
								return Object(s.c)(g, l) + " " + h
							}
							const e = Number(Object(s.b)(g, l));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: h,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...d
							}).format(e) : u(e, a, r, h)
						}
						case c.b.Real:
						default: {
							const e = Number(Object(o.a)(g, m));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: h,
								currencyDisplay: "symbol",
								notation: a ? "compact" : "standard",
								...d
							}).format(e) : u(e, a, r, h)
						}
					}
				},
				u = (e, t, r, n) => {
					return (t ? Object(a.b)(e) : e.toLocaleString(r)) + (n ? " " + n : "")
				},
				b = e => c.g.includes(e.toUpperCase()) ? c.b.Reddit : c.f.includes(e.toUpperCase()) ? c.b.Crypto : c.b.Real,
				p = e => {
					switch (e) {
						case c.b.Crypto:
							return c.d;
						case c.b.Reddit:
							return c.a;
						case c.b.Real:
						default:
							return c.c
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return P
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "b", (function() {
				return I
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "j", (function() {
				return T
			})), r.d(t, "i", (function() {
				return N
			})), r.d(t, "f", (function() {
				return S
			})), r.d(t, "g", (function() {
				return M
			})), r.d(t, "h", (function() {
				return D
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/formatApiError/index.ts"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/sentry/index.ts"),
				s = r("./src/reddit/constants/modals.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				b = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = r("./src/reddit/endpoints/gold/purchase.ts"),
				m = r("./src/reddit/helpers/correlationIdTracker.ts"),
				h = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				f = r("./src/reddit/models/Gold/Award.ts"),
				O = r("./src/reddit/models/Gold/ProductOffer.ts"),
				g = r("./src/reddit/models/Toast/index.ts"),
				j = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				C = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				y = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const x = Object(c.a)(y.q),
				_ = Object(c.a)(y.c),
				P = e => async (t, r) => {
					t(x(e)), t(Object(l.h)(s.a.ECON_COIN_PURCHASE))
				}, w = () => async (e, t) => {
					e(_()), e(Object(l.g)(s.a.ECON_COIN_PURCHASE))
				}, k = Object(c.a)(y.u), E = ({
					correlationId: e,
					packageId: t
				}) => async (r, n) => {
					const o = n();
					Object(j.e)(o, t) ? (r(k({
						correlationId: e,
						packageId: t
					})), r(Object(l.i)(s.a.GOLD_TARGETED_OFFER_MODAL))) : a.c.captureMessage(`Tried to show targeted offer, but could not find package id: ${t}`)
				}, v = Object(c.a)(y.p), I = ({
					correlationId: e,
					packageId: t
				}) => async (r, n) => {
					Object(j.c)(n(), t) ? (r(v({
						correlationId: e,
						packageId: t
					})), r(Object(l.i)(s.a.ECON_COIN_PACKAGE_OFFER))) : a.c.captureMessage(`Tried to show coin package offer, but could not find package id: ${t}`)
				}, A = (e, t, r) => async (o, c) => {
					await o(Object(d.c)(e, r));
					const a = c(),
						s = Object(j.q)(a);
					if (0 !== s.length) o(P({
						correlationId: r,
						packageId: s[0].mobileId,
						thingId: t
					}));
					else {
						const e = Object(j.n)(a),
							t = n.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						o(Object(u.f)({
							kind: g.b.Error,
							duration: u.a,
							text: e || t
						}))
					}
				}, T = (e, t) => async (r, c, {
					apiContext: a
				}) => {
					const s = c(),
						{
							coins: d,
							pennies: l
						} = t,
						u = Object(C.r)(s) || Object(m.d)(m.a.GoldPayment, !1);
					let b, h;
					r(Object(i.stripeTokenPending)());
					const f = Object(C.y)(s);
					if (f || (b = await r(Object(i.validateAndCreateStripeToken)(e)), h = Object(C.v)(s), b)) try {
						const e = await Object(p.f)({
							coins: d,
							context: a(),
							correlationId: u,
							offerContext: Object(O.d)(t, !1),
							pennies: l,
							rememberCard: h,
							savedCardId: f || void 0,
							token: b
						});
						if (e.error) {
							const t = Object(o.a)(e.error, e.status);
							return void r(Object(i.stripeApiError)(t))
						}
						return r(Object(i.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(m.b)(m.a.GoldPayment)
					} catch (g) {
						const e = Object(o.a)(g);
						r(Object(i.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						r(Object(i.stripeApiError)(e))
					}
				}, N = (e, t, c) => async (a, s, {
					apiContext: d
				}) => {
					const l = s(),
						{
							coins: u,
							pennies: b
						} = t,
						g = Object(C.r)(l) || Object(m.d)(m.a.GoldPayment, !1);
					let j, y;
					a(Object(i.stripeTokenPending)());
					const x = Object(C.y)(l);
					if (x || (j = await a(Object(i.validateAndCreateStripeToken)(e)), y = Object(C.v)(l), j)) try {
						const {
							gildModalThingId: e,
							isAnonymous: s,
							message: C,
							selectedAward: _
						} = l.gild;
						if (!e || !_.id) {
							const e = n.fbt._("Gilding unknown thing", null, {
								hk: "2Jiujp"
							});
							return void a(Object(i.stripeApiError)(e))
						}
						const P = _.id,
							k = {
								gildType: P,
								isAnonymous: s,
								message: C
							},
							E = await Object(p.e)({
								coins: u,
								context: d(),
								correlationId: g,
								gildParams: k,
								isOldReddit: c,
								offerContext: Object(O.d)(t, !0),
								pennies: b,
								rememberCard: y,
								savedCardId: x || void 0,
								thingId: e,
								token: j
							});
						if (E.error) {
							const e = Object(o.a)(E.error, E.status);
							return void a(Object(i.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							a(w()), a(Object(i.paymentCompleted)({
								confirmed: !1
							}));
							const {
								awarder_karma_received: n,
								all_awardings: o,
								coins: c,
								treatment_tags: s
							} = E.body;
							return a(t({
								awardKarmaReceived: n || 0,
								awardId: P,
								awardings: o && o.length ? Object(h.a)(o).map(e => ({
									award: Object(f.h)(e),
									total: e.count
								})) : [],
								coins: c,
								id: e,
								treatmentTags: s
							})), void Object(m.b)(m.a.GoldPayment)
						}
					} catch (_) {
						const e = Object(o.a)(_);
						a(Object(i.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						a(Object(i.stripeApiError)(e))
					}
				}, S = e => async (t, r, {
					apiContext: n
				}) => {
					const c = Object(m.c)(m.a.GoldPayment),
						{
							coins: s,
							pennies: d
						} = e;
					try {
						const e = await Object(b.a)({
							context: n(),
							coins: s,
							pennies: d,
							correlationId: c
						});
						if (e.error) {
							const r = Object(o.a)(e.error);
							return void t(Object(i.paypalApiError)(r))
						} {
							const {
								order_id: t
							} = e.body;
							return t
						}
					} catch (l) {
						a.c.captureException(l);
						const e = Object(o.a)(l);
						t(Object(i.paypalApiError)(e))
					}
				}, M = (e, t) => async (r, n, {
					apiContext: c
				}) => {
					const s = n(),
						d = Object(C.r)(s) || Object(m.d)(m.a.GoldPayment, !1),
						{
							coins: l,
							pennies: u
						} = t;
					try {
						const n = await Object(b.c)({
							context: c(),
							offerContext: Object(O.d)(t, !1),
							orderId: e,
							coins: l,
							pennies: u,
							correlationId: d
						});
						if (n.error) {
							const e = Object(o.a)(n.error);
							return void r(Object(i.paypalApiError)(e))
						} {
							const {
								coins: e
							} = n.body;
							r(Object(i.paymentCompleted)({
								coins: e,
								confirmed: !0
							})), Object(m.b)(m.a.GoldPayment)
						}
					} catch (p) {
						a.c.captureException(p);
						const e = Object(o.a)(p);
						r(Object(i.paypalApiError)(e))
					}
				}, D = (e, t) => async (c, s, {
					apiContext: d
				}) => {
					const l = s(),
						u = Object(C.r)(l) || Object(m.d)(m.a.GoldPayment, !1),
						{
							coins: p,
							pennies: g
						} = t;
					try {
						const {
							gildModalThingId: a,
							isAnonymous: s,
							message: j,
							selectedAward: C
						} = l.gild;
						if (!a || !C) return void c(Object(i.paypalApiError)(n.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const y = C.id,
							x = await Object(b.d)({
								context: d(),
								offerContext: Object(O.d)(t, !0),
								orderId: e,
								coins: p,
								pennies: g,
								thingId: a,
								awardId: y,
								message: j || "",
								isAnonymous: s,
								correlationId: u
							});
						if (x.error) {
							const e = Object(o.a)(x.error);
							c(Object(i.paypalApiError)(e))
						} else {
							c(w());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: n,
								subreddit_coins: o,
								treatment_tags: s
							} = x.body;
							c(Object(i.paymentCompleted)({
								coins: n,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							c(d({
								awardId: y,
								awardKarmaReceived: t || 0,
								awardings: Object(h.a)(e).map(e => ({
									award: Object(f.h)(e),
									total: e.count
								})),
								coins: n,
								id: a,
								subredditCoins: o,
								treatmentTags: s
							})), Object(m.b)(m.a.GoldPayment)
						}
					} catch (j) {
						a.c.captureException(j);
						const e = Object(o.a)(j);
						c(Object(i.paypalApiError)(e))
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
				return b
			})), r.d(t, "cardNameEmpty", (function() {
				return p
			})), r.d(t, "cardElementChange", (function() {
				return m
			})), r.d(t, "stripeTokenPending", (function() {
				return h
			})), r.d(t, "stripeTokenError", (function() {
				return f
			})), r.d(t, "stripeApiError", (function() {
				return O
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return g
			})), r.d(t, "paypalApiError", (function() {
				return j
			})), r.d(t, "toggleRememberCard", (function() {
				return C
			})), r.d(t, "selectSavedCard", (function() {
				return y
			})), r.d(t, "_deleteSavedCard", (function() {
				return x
			})), r.d(t, "deleteSavedCard", (function() {
				return _
			})), r.d(t, "savedCardsPending", (function() {
				return P
			})), r.d(t, "savedCardsSuccess", (function() {
				return w
			})), r.d(t, "loadSavedCards", (function() {
				return k
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/sentry/index.ts"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/endpoints/gold/purchase.ts"),
				s = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = Object(c.a)(s.B),
				l = Object(c.a)(s.w),
				u = Object(c.a)(s.b),
				b = Object(c.a)(s.y),
				p = Object(c.a)(s.a),
				m = Object(c.a)(s.E),
				h = Object(c.a)(s.G),
				f = Object(c.a)(s.F),
				O = Object(c.a)(s.D),
				g = e => async (t, r) => {
					const o = r(),
						c = Object(i.h)(o),
						a = Object(i.l)(o),
						{
							token: s,
							error: d
						} = await e.createToken({
							name: c,
							address_zip: a
						});
					if (c.trim()) {
						if (!d && s) return s;
						t(f(d || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(p({
							message: e
						}))
					}
				}, j = Object(c.a)(s.x), C = Object(c.a)(s.H), y = Object(c.a)(s.C), x = Object(c.a)(s.g), _ = e => async (t, r, {
					apiContext: n
				}) => {
					t(x(e));
					try {
						const t = await Object(a.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (c) {
						o.c.captureException(c)
					}
				}, P = Object(c.a)(s.z), w = Object(c.a)(s.A), k = () => async (e, t, {
					apiContext: r
				}) => {
					e(P());
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
						e(w(n)), n[0] && e(y(n[0].cardId))
					} catch (n) {
						o.c.captureException(n), e(w([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "setPremiumPurchaseModalInfo", (function() {
				return O
			})), r.d(t, "clearPremiumPurchaseModalInfo", (function() {
				return g
			})), r.d(t, "openPremiumPurchaseModal", (function() {
				return j
			})), r.d(t, "closePremiumPurchaseModal", (function() {
				return C
			})), r.d(t, "stripePremiumPurchaseRequested", (function() {
				return y
			})), r.d(t, "paymentBlobCreated", (function() {
				return x
			})), r.d(t, "openWithBlob", (function() {
				return _
			}));
			var n = r("./src/config.ts"),
				o = r("./node_modules/fbt/lib/FbtPublic.js"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/sentry/index.ts"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/formatApiError/index.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/constants/modals.ts"),
				b = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = r("./src/reddit/endpoints/gold/purchase.ts"),
				m = r("./src/reddit/helpers/correlationIdTracker.ts"),
				h = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				f = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const O = Object(c.a)(f.t),
				g = Object(c.a)(f.e),
				j = (e, t) => async r => {
					r(O(e)), r(Object(l.h)(u.a.ECON_PREMIUM_PURCHASE, t))
				}, C = () => async e => {
					e(Object(l.g)(u.a.ECON_PREMIUM_PURCHASE)), e(g())
				}, y = e => async (t, r, {
					apiContext: n
				}) => {
					const c = Object(h.a)(r()),
						a = (null == c ? void 0 : c.pennies) || s.yb,
						l = Object(m.c)(m.a.GoldPayment);
					t(Object(d.stripeTokenPending)());
					const u = await t(Object(d.validateAndCreateStripeToken)(e));
					if (u) try {
						const e = await Object(p.h)({
							context: n(),
							correlationId: l,
							pennies: a,
							token: u
						});
						if (e.error) {
							const r = Object(i.a)(e.error);
							t(Object(d.stripeApiError)(r))
						} else t(Object(d.paymentCompleted)({
							confirmed: !1
						}))
					} catch (b) {
						const e = Object(i.a)(b);
						t(Object(d.stripeApiError)(e))
					} else {
						const e = o.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						t(Object(d.stripeApiError)(e))
					}
				}, x = Object(c.a)(f.v), _ = ({
					packageId: e,
					correlationId: t
				}, r) => async (o, c, {
					apiContext: s
				}) => {
					o(j({
						packageId: e,
						correlationId: t
					}, r));
					const l = Object(h.a)(c()),
						u = (null == l ? void 0 : l.paypalButtonId) || n.a.paypal.buttons.premium;
					if (u) try {
						const e = await Object(b.f)({
							buttonId: u,
							context: s(),
							correlationId: t
						});
						if (e.error) {
							const t = Object(i.a)(e.error);
							o(Object(d.paypalApiError)(t))
						} else o(x(e))
					} catch (p) {
						const e = Object(i.a)(p);
						o(Object(d.paypalApiError)(e))
					} else a.c.captureMessage("No Premium packages available on Premium purchase modal")
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return f
			})), r.d(t, "c", (function() {
				return C
			})), r.d(t, "a", (function() {
				return x
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/env/index.ts"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/sentry/index.ts"),
				s = r("./src/reddit/endpoints/gold/productCatalog/index.ts"),
				i = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/actions/post.ts"),
				b = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const p = Object(c.a)(b.j),
				m = Object(c.a)(b.k),
				h = Object(c.a)(b.i),
				f = e => async (t, r, {
					apiContext: c
				}) => {
					t(p());
					const d = r(),
						l = Object(i.K)(d);
					try {
						const r = !l,
							n = await Object(s.b)({
								context: c(),
								correlationId: e,
								shouldUseCurrentOrigin: r
							});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const o = n.body;
						t(m(o))
					} catch (u) {
						Object(o.b)() || console.error(u), a.c.captureException(u);
						const e = n.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(h(e))
					}
				}, O = Object(c.a)(b.m), g = Object(c.a)(b.n), j = Object(c.a)(b.l), C = (e, t) => async (r, c, {
					apiContext: i
				}) => {
					r(O());
					try {
						const n = await Object(s.c)({
							awardId: e,
							context: i(),
							correlationId: t
						});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const o = n.body;
						if (!o.coinPackages || !o.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						r(g(o))
					} catch (d) {
						Object(o.b)() || console.error(d), a.c.captureException(d);
						const e = n.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						r(j(e))
					}
				}, y = Object(c.a)(b.h), x = () => async (e, t, {
					gqlContext: r
				}) => {
					var c, i;
					try {
						const t = await Object(s.a)(r());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (c = r.errors) || void 0 === c ? void 0 : c.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (i = r.awards) || void 0 === i ? void 0 : i.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(y({
								awards: r.awards
							})), e(Object(u.B)())
						}
					} catch (b) {
						Object(o.b)() || console.error(b), e(Object(d.f)({
							kind: l.b.Error,
							text: n.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), a.c.captureException(b)
					}
				}
		},
		"./src/reddit/components/CoinPurchaseDropdown/index.m.less": function(e, t, r) {
			e.exports = {
				CoinPurchaseDropdown: "_3MLZbmCsSK5yh_UYD3717s",
				coinPurchaseDropdown: "_3MLZbmCsSK5yh_UYD3717s",
				activeSale: "_2MCszvETQ_Z6kv8AZ0mhCe",
				purchaseList: "_310fLrnWkOCPEaTfEufxkJ"
			}
		},
		"./src/reddit/components/CoinPurchaseDropdown/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "CoinPurchaseDropdown", (function() {
				return ae
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				c = r("./src/higherOrderComponents/asTooltip.tsx"),
				a = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/models/Gold/ProductOffer.ts"),
				i = r("./src/reddit/components/TrackingHelper/index.tsx"),
				d = r("./src/reddit/controls/Dropdown/index.tsx"),
				l = r("./src/reddit/helpers/trackers/goldTopNav.ts"),
				u = r("./src/reddit/components/CoinPurchaseDropdownHeader/index.m.less"),
				b = r.n(u),
				p = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				m = r("./src/reddit/components/CoinPurchaseDropdownHeader/DefaultHeader/index.m.less"),
				h = r.n(m);
			const {
				fbt: f
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var O = e => {
					const {
						className: t
					} = e;
					return o.a.createElement("div", {
						className: Object(a.a)(t, h.a.header)
					}, o.a.createElement("span", {
						className: h.a.headerText
					}, f._("Give Gold, Silver, Platinum, and more with Coins", null, {
						hk: "3MfKV4"
					})), o.a.createElement(p.a, {
						className: h.a.headerLink,
						to: "/coins"
					}, f._("What are Coins?", null, {
						hk: "DNBPx"
					})))
				},
				g = r("./src/reddit/components/CoinPurchaseDropdownHeader/SalesHeader/index.m.less"),
				j = r.n(g);
			var C = e => {
				const {
					className: t,
					salesConfig: r
				} = e, {
					dropdownHeaderText: n,
					dropdownHeaderBackgroundAsset: c
				} = r;
				return o.a.createElement("div", {
					className: Object(a.a)(t, j.a.header)
				}, c && o.a.createElement("img", {
					className: j.a.saleHeaderImage,
					src: c
				}), o.a.createElement("span", {
					className: j.a.headerText
				}, n))
			};
			const {
				fbt: y
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var x = e => {
					const {
						activeSaleConfig: t
					} = e;
					return t ? o.a.createElement(C, {
						className: b.a.header,
						salesConfig: t
					}) : o.a.createElement(O, {
						className: b.a.header
					})
				},
				_ = r("./node_modules/fbt/lib/FbtPublic.js"),
				P = r("./node_modules/react-redux/es/index.js"),
				w = r("./node_modules/reselect/es/index.js"),
				k = r("./src/lib/constants/index.ts"),
				E = r("./src/lib/currency/currencies.ts"),
				v = r("./src/lib/localizeCurrency/index.ts"),
				I = r("./src/lib/opener/index.ts"),
				A = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				T = r("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				N = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				S = r("./src/reddit/actions/modal.ts"),
				M = r("./src/reddit/constants/modals.ts"),
				D = r("./src/reddit/contexts/PageLayer/index.tsx"),
				L = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				F = r("./src/reddit/featureFlags/index.ts"),
				R = r("./src/reddit/helpers/correlationIdTracker.ts"),
				U = r("./src/reddit/hooks/useLocale.ts"),
				B = r("./src/reddit/models/Gold/Premium/index.ts"),
				H = r("./src/reddit/selectors/crypto/points.ts"),
				G = r("./src/reddit/selectors/experiments/econStorefrontClaim.ts"),
				K = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				z = r("./src/reddit/selectors/user.ts"),
				q = r("./src/reddit/components/LottieAnimation/index.tsx"),
				V = r("./src/reddit/controls/Button/index.tsx"),
				W = r("./src/reddit/components/CompactCoinPurchaseList/ListItem/index.m.less"),
				Z = r.n(W);
			var Y = e => {
					const {
						className: t,
						buttonClass: r,
						buttonSubtext: n,
						buttonSubtextCrossout: c,
						buttonText: s,
						icon: i,
						onClick: d,
						primaryText: l,
						subtext: u,
						subtextCrossout: b
					} = e, p = r ? V.g : V.l;
					return o.a.createElement("div", {
						className: Object(a.a)(t, Z.a.CompactCoinPurchaseListItem)
					}, o.a.createElement("div", {
						className: Z.a.productSection
					}, i, o.a.createElement("div", null, o.a.createElement("span", {
						className: Z.a.primaryText
					}, l), u && o.a.createElement("span", {
						className: Object(a.a)(Z.a.subtext, {
							[Z.a.crossout]: b
						})
					}, Array.isArray(u) ? u.map((e, t) => o.a.createElement("p", {
						key: t
					}, e)) : u))), o.a.createElement("div", {
						className: Z.a.priceSection
					}, o.a.createElement(p, {
						className: Object(a.a)(Z.a.button, r),
						redditStyle: !0,
						onClick: d
					}, s), o.a.createElement("span", {
						className: Object(a.a)(Z.a.buttonSubtext, {
							[Z.a.crossout]: c
						})
					}, n)))
				},
				$ = r("./src/reddit/components/CompactCoinPurchaseList/index.m.less"),
				Q = r.n($);
			const X = Object(w.c)({
					coinPackages: K.d,
					communityPointsConversionEnabled: F.d.spPointsCoinConversion,
					communityPointsName: (e, t) => {
						var r;
						const n = Object(D.r)(e, t);
						return null === (r = Object(H.b)(e, null == n ? void 0 : n.id)) || void 0 === r ? void 0 : r.name
					},
					isFreeAwardEventEnabled: e => Object(G.a)(e) && Object(K.g)(e),
					isPremiumSubscriber: z.t,
					premiumPackages: K.l,
					purchaseCatalogError: K.n,
					purchaseCatalogPending: K.o
				}),
				J = Object(P.b)(X, e => ({
					onClickClaimFreeAward: () => e(Object(S.h)(M.a.ECON_CLAIM_FREE_AWARD_MODAL)),
					onClickCoinPackage: (t, r) => e(Object(A.c)({
						correlationId: r,
						packageId: t.mobileId
					})),
					onClickConvert: () => e(Object(S.h)(M.a.CONVERT_TO_COINS)),
					onClickPremiumPackage: (t, r) => r ? e(Object(T.openWithBlob)({
						packageId: B.b,
						correlationId: t
					})) : Object(I.e)("/premium", I.d.BLANK),
					requestPurchaseCatalog: t => e(Object(N.b)(t))
				}));
			class ee extends o.a.Component {
				constructor(e) {
					super(e), this.handleClickBuyCoins = e => {
						const {
							onClick: t,
							onClickCoinPackage: r,
							sendEvent: n
						} = this.props;
						t && t(), n(l.a(e.mobileId)), r(e, this.correlationId)
					}, this.handleClickBuyPremium = () => {
						var e;
						const {
							onClick: t,
							onClickPremiumPackage: r,
							pageLayer: n,
							sendEvent: o
						} = this.props;
						t && t(), o(l.c());
						const c = (null === (e = null == n ? void 0 : n.meta) || void 0 === e ? void 0 : e.name) === k.Mb.PREMIUM;
						r(this.correlationId, c)
					}, this.handleClickFreeAward = () => {
						const {
							onClickClaimFreeAward: e,
							sendEvent: t
						} = this.props;
						t(l.b()), e()
					}, this.correlationId = Object(R.d)(R.a.GoldPayment, !1), e.coinPackages.length || e.purchaseCatalogPending || e.requestPurchaseCatalog(this.correlationId)
				}
				getListItemData() {
					const {
						coinPackages: e,
						isPremiumSubscriber: t,
						premiumPackages: r,
						sorted: n
					} = this.props, o = Object(U.a)(), c = e.map(e => {
						const {
							baselineCoins: t,
							baselinePennies: r,
							coins: n,
							pennies: c,
							bonusPct: a
						} = e, s = Object(v.b)(n, {
							locale: o,
							type: E.b.Reddit,
							currency: E.a
						}), i = Object(v.b)(c, {
							locale: o
						});
						let d, l;
						return n !== t && (d = Object(v.b)(t, {
							locale: o,
							type: E.b.Reddit,
							currency: E.a
						})), {
							buttonSubtext: l = c !== r ? Object(v.b)(r, {
								locale: o
							}) : a ? _.fbt._("{percent bonus}% Bonus", [_.fbt._param("percent bonus", Object(v.a)(a, {
								locale: o
							}))], {
								hk: "2zgjZ1"
							}) : void 0,
							buttonText: i,
							coinPackage: e,
							primaryText: s,
							subtext: d
						}
					});
					n && c.sort((e, t) => {
						return (e.coinPackage ? e.coinPackage.coins : 0) - (t.coinPackage ? t.coinPackage.coins : 0)
					});
					const a = r.length ? r[0] : void 0;
					if (t || !a) return c;
					const {
						periodicalCoins: s,
						signupBonusCoins: i
					} = a, d = i ? Object(v.a)(i) : void 0, l = Object(v.b)(s, {
						locale: o,
						type: E.b.Reddit,
						currency: E.a
					}), u = {
						buttonClass: Q.a.premiumButtonStyle,
						buttonSubtext: d ? _.fbt._("{number of bonus coins} bonus coins", [_.fbt._param("number of bonus coins", d)], {
							hk: "YgHAT"
						}) : void 0,
						buttonText: _.fbt._("Upgrade", null, {
							hk: "1tsWOd"
						}),
						primaryText: _.fbt._("Premium", null, {
							hk: "45A9gK"
						}),
						subtext: [_.fbt._("{monthly coins}/mo", [_.fbt._param("monthly coins", l)], {
							hk: "Ki7xN"
						}), _.fbt._("Ads free & more", null, {
							hk: "wO4Wc"
						})]
					};
					return c.concat(u)
				}
				render() {
					const {
						className: e,
						coinPackages: t,
						communityPointsConversionEnabled: r,
						communityPointsName: n,
						isFreeAwardEventEnabled: c,
						onClickConvert: a,
						purchaseCatalogError: s,
						purchaseCatalogPending: i
					} = this.props;
					return i ? o.a.createElement("div", {
						className: e
					}, o.a.createElement("div", {
						className: Q.a.loaderContainer
					}, o.a.createElement(L.a, {
						sizePx: 80
					}))) : s || !t.length ? o.a.createElement("div", {
						className: e
					}, o.a.createElement("div", {
						className: Q.a.errorContainer
					}, _.fbt._("Oops, something went wrong", null, {
						hk: "4EQRS8"
					}))) : o.a.createElement("div", {
						className: e
					}, c && o.a.createElement(Y, {
						buttonClass: Q.a.freeAwardButton,
						buttonText: _.fbt._("Claim", null, {
							hk: "OUYUl"
						}),
						icon: o.a.createElement(q.a, {
							assetUrl: "https://www.redditstatic.com/gold/awards/animations/free_award/flying.json",
							className: Q.a.presentAnimation,
							loop: !0,
							onClick: this.handleClickFreeAward
						}),
						onClick: this.handleClickFreeAward,
						primaryText: _.fbt._("Free Award to give out", null, {
							hk: "2NBLhF"
						})
					}), this.getListItemData().map(e => {
						const {
							buttonClass: t,
							buttonSubtext: r,
							buttonText: n,
							coinPackage: c,
							primaryText: a,
							subtext: s
						} = e, i = c && c.coins !== c.baselineCoins, d = c && c.pennies !== c.baselinePennies;
						return o.a.createElement(Y, {
							buttonClass: t,
							buttonSubtext: r,
							buttonSubtextCrossout: d,
							buttonText: n,
							key: a,
							onClick: c ? () => this.handleClickBuyCoins(c) : this.handleClickBuyPremium,
							primaryText: a,
							subtext: s,
							subtextCrossout: i
						})
					}), r && n && o.a.createElement(Y, {
						buttonText: _.fbt._("Convert", null, {
							hk: "zVTTU"
						}),
						onClick: a,
						primaryText: _.fbt._("Convert {community points name}", [_.fbt._param("community points name", n)], {
							hk: "e7BeU"
						}),
						subtext: _.fbt._("into Coins", null, {
							hk: "1XFIa6"
						})
					}))
				}
			}
			var te = Object(D.u)()(J(Object(i.c)(ee))),
				re = r("./src/reddit/components/CoinPurchaseDropdown/index.m.less"),
				ne = r.n(re);
			const {
				fbt: oe
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ce = Object(c.a)(d.a);
			class ae extends o.a.Component {
				constructor() {
					super(...arguments), this.timer = void 0, this.getOfferContext = () => this.props.activeSaleConfig ? s.a.CoinSale : this.props.isFreeAwardEventEnabled ? s.a.StorefrontFreeAward : void 0, this.handleMouseEnter = () => {
						this.timer && clearTimeout(this.timer)
					}, this.handleMouseLeave = () => {
						const {
							onCloseTooltip: e
						} = this.props;
						this.timer = setTimeout(e, 700)
					}
				}
				componentDidMount() {
					const {
						isOpen: e,
						sendEvent: t
					} = this.props;
					e && t(l.e(this.getOfferContext()))
				}
				componentDidUpdate(e) {
					!e.isOpen && this.props.isOpen && this.props.sendEvent(l.e(this.getOfferContext()))
				}
				render() {
					const {
						activeSaleConfig: e,
						className: t,
						isOpen: r,
						onCloseTooltip: n,
						tooltipId: c
					} = this.props;
					return o.a.createElement(ce, {
						className: Object(a.a)(t, ne.a.CoinPurchaseDropdown, {
							[ne.a.activeSale]: !!e
						}),
						isFixed: !0,
						isOpen: r,
						targetPosition: ["center", "bottom"],
						tooltipPosition: ["right", "top"],
						tooltipId: c
					}, o.a.createElement(x, {
						activeSaleConfig: e
					}), o.a.createElement(te, {
						className: ne.a.purchaseList,
						onClick: n,
						sorted: !0
					}))
				}
			}
			t.default = Object(i.c)(ae)
		},
		"./src/reddit/components/CoinPurchaseDropdownHeader/DefaultHeader/index.m.less": function(e, t, r) {
			e.exports = {
				header: "_2lgyQv1Xe7SzrqkbUeaEFL",
				headerText: "_1CH25li1ODdO2KEOCMjWEj",
				headerLink: "_1lmsw-IaCDAsy3RT_4s5s9"
			}
		},
		"./src/reddit/components/CoinPurchaseDropdownHeader/SalesHeader/index.m.less": function(e, t, r) {
			e.exports = {
				header: "_1mxOXTqB-MrirvDiecjz4Z",
				headerText: "_1eNKe31O3AOBXQgWsPIL4P",
				saleHeaderImage: "_1Vf1tHvNme79A6GR8te6F-"
			}
		},
		"./src/reddit/components/CoinPurchaseDropdownHeader/index.m.less": function(e, t, r) {
			e.exports = {
				header: "_2HB5cXf0bpHe1piH74nOIQ"
			}
		},
		"./src/reddit/components/CompactCoinPurchaseList/ListItem/index.m.less": function(e, t, r) {
			e.exports = {
				CompactCoinPurchaseListItem: "_3lHAZGc0ML7wczmPcwezOF",
				compactCoinPurchaseListItem: "_3lHAZGc0ML7wczmPcwezOF",
				productSection: "_2VkRnsOobI-4VlOs4ID5Vy",
				primaryText: "_4cdfLigUWzeeVcPzzbe78",
				buttonSubtext: "_2Mm_ve0iAKMLDXgbbvVmSD",
				subtext: "_1K7tfdKlu_H-Eljz3TrNc8",
				priceSection: "_49wuP84YuCbFBmZg2KI5s",
				button: "_2s6F0RDk744nqzZtEK_6Og",
				crossout: "_3LPal_LVAaPThYFSl8Vav3"
			}
		},
		"./src/reddit/components/CompactCoinPurchaseList/index.m.less": function(e, t, r) {
			e.exports = {
				errorContainer: "_3dCfx1TJ9381ixSTRcnyT-",
				loaderContainer: "xqaZPpbD8_8ATMQOxTIB_",
				premiumButtonStyle: "_3271lFh79mcpLNBH_vvl7r",
				freeAwardButton: "_3HU8lJbd8VJ3ixX_QvZ6jF",
				presentAnimation: "_2pcjA77qS9COMCWrQ4OK9c"
			}
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
				o = r.n(n),
				c = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				s = r.n(a);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => o.a.createElement("div", {
				className: Object(c.a)(s.a.loadingIcon, t, {
					[s.a.mCentered]: e
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
				return b
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "e", (function() {
				return m
			}));
			var n = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				c = r("./src/lib/omitHeaders/index.ts"),
				a = r("./src/reddit/constants/headers.ts"),
				s = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
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
					u = Object(s.a)(l);
				return Object(o.a)(Object(c.a)(t, [a.a]), {
					method: n.jb.POST,
					endpoint: u,
					data: d
				}).then(i.c)
			}, l = async ({
				context: e,
				coins: t,
				pennies: r,
				correlationId: s
			}) => {
				const d = {
					coins: t,
					pennies: r,
					correlation_id: s
				};
				return Object(o.a)(Object(c.a)(e, [a.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(i.c)
			}, u = async ({
				context: e,
				awardId: t,
				pennies: r,
				thingId: s,
				correlationId: d
			}) => {
				const l = {
					award_id: t,
					correlation_id: d,
					pennies: r,
					thing_id: s
				};
				return Object(o.a)(Object(c.a)(e, [a.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(i.c)
			}, b = async ({
				context: e,
				offerContext: t,
				orderId: r,
				coins: s,
				pennies: d,
				correlationId: l
			}) => {
				const u = {
					offer_context: t,
					order_id: r,
					coins: s,
					pennies: d,
					correlation_id: l
				};
				return Object(o.a)(Object(c.a)(e, [a.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: u
				}).then(i.c)
			}, p = async ({
				awardId: e,
				context: t,
				coins: r,
				correlationId: s,
				isAnonymous: d,
				message: l,
				offerContext: u,
				orderId: b,
				pennies: p,
				thingId: m
			}) => {
				const h = {
					award_id: e,
					coins: r,
					correlation_id: s,
					is_anonymous: d,
					message: l,
					offer_context: u,
					order_id: b,
					pennies: p,
					thing_id: m
				};
				return Object(o.a)(Object(c.a)(t, [a.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: h
				}).then(i.c)
			}, m = async ({
				awardId: e,
				context: t,
				correlationId: r,
				isAnonymous: s,
				message: d,
				orderId: l,
				thingId: u
			}) => {
				const b = {
					award_id: e,
					correlation_id: r,
					is_anonymous: s,
					message: d,
					order_id: l,
					thing_id: u
				};
				return Object(o.a)(Object(c.a)(t, [a.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: b
				}).then(i.c)
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				o = r("./src/lib/prettyPrintNumber/index.ts");

			function c(e, t) {
				const r = new n.BigNumber(e),
					o = new n.BigNumber(t || 1);
				return r.dividedToIntegerBy(o).toString()
			}

			function a(e, t) {
				return Object(o.b)(parseInt(c(e, t), 10))
			}

			function s(e, t) {
				const r = new n.BigNumber(e),
					o = new n.BigNumber(t || 1);
				return r.multipliedBy(o).toFixed(0)
			}
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return i
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			const o = {
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
				c = (e, t = !1) => {
					const r = [];
					for (const n in o) {
						const c = o[n];
						(c.priceInCoins <= e || t) && r.push(c)
					}
					return r
				},
				a = e => n.fbt._({
					"*": "{number of months} months {number of coins} Coins",
					_1: "1 month {number of coins} Coins"
				}, [n.fbt._plural(e.monthsOfPremium, "number of months"), n.fbt._param("number of coins", e.priceInCoins.toLocaleString())], {
					hk: "2bar0C"
				}),
				s = "com.reddit.premium_1";
			var i;
			! function(e) {
				e.Monthly = "monthly", e.Yearly = "yearly"
			}(i || (i = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-CoinPurchaseDropdown.12529f1b459ac503c4d7.js.map