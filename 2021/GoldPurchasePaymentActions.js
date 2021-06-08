// https://www.redditstatic.com/desktop2x/GoldPurchasePaymentActions.6998aa79f8892b788f5d.js
// Retrieved at 6/8/2021, 4:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GoldPurchasePaymentActions"], {
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return s
			})), r.d(t, "paymentCompleted", (function() {
				return u
			})), r.d(t, "cardNameInput", (function() {
				return p
			})), r.d(t, "postalCodeInput", (function() {
				return l
			})), r.d(t, "cardNameEmpty", (function() {
				return b
			})), r.d(t, "cardElementChange", (function() {
				return m
			})), r.d(t, "stripeTokenPending", (function() {
				return O
			})), r.d(t, "stripeTokenError", (function() {
				return f
			})), r.d(t, "stripeApiError", (function() {
				return h
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return _
			})), r.d(t, "paypalApiError", (function() {
				return j
			})), r.d(t, "toggleRememberCard", (function() {
				return g
			})), r.d(t, "selectSavedCard", (function() {
				return y
			})), r.d(t, "_deleteSavedCard", (function() {
				return x
			})), r.d(t, "deleteSavedCard", (function() {
				return P
			})), r.d(t, "savedCardsPending", (function() {
				return I
			})), r.d(t, "savedCardsSuccess", (function() {
				return w
			})), r.d(t, "loadSavedCards", (function() {
				return C
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/sentry/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/endpoints/gold/purchase.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				d = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const s = Object(o.a)(i.B),
				u = Object(o.a)(i.w),
				p = Object(o.a)(i.b),
				l = Object(o.a)(i.y),
				b = Object(o.a)(i.a),
				m = Object(o.a)(i.E),
				O = Object(o.a)(i.G),
				f = Object(o.a)(i.F),
				h = Object(o.a)(i.D),
				_ = e => async (t, r) => {
					const a = r(),
						o = Object(d.h)(a),
						c = Object(d.l)(a),
						{
							token: i,
							error: s
						} = await e.createToken({
							name: o,
							address_zip: c
						});
					if (o.trim()) {
						if (!s && i) return i;
						t(f(s || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(b({
							message: e
						}))
					}
				}, j = Object(o.a)(i.x), g = Object(o.a)(i.H), y = Object(o.a)(i.C), x = Object(o.a)(i.g), P = e => async (t, r, {
					apiContext: n
				}) => {
					t(x(e));
					try {
						const t = await Object(c.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (o) {
						a.c.captureException(o)
					}
				}, I = Object(o.a)(i.z), w = Object(o.a)(i.A), C = () => async (e, t, {
					apiContext: r
				}) => {
					e(I());
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
						e(w(n)), n[0] && e(y(n[0].cardId))
					} catch (n) {
						a.c.captureException(n), e(w([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "openPremiumPurchaseModal", (function() {
				return O
			})), r.d(t, "closePremiumPurchaseModal", (function() {
				return f
			})), r.d(t, "stripePremiumPurchaseRequested", (function() {
				return h
			})), r.d(t, "paymentBlobCreated", (function() {
				return _
			})), r.d(t, "openWithBlob", (function() {
				return j
			}));
			var n = r("./src/config.ts"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/sentry/index.ts"),
				i = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/formatApiError/index.ts"),
				s = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				u = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = r("./src/reddit/endpoints/gold/purchase.ts"),
				l = r("./src/reddit/helpers/correlationIdTracker.ts"),
				b = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				m = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const O = Object(o.a)(m.t),
				f = Object(o.a)(m.e),
				h = e => async (t, r, {
					apiContext: n
				}) => {
					const o = Object(b.a)(r()),
						c = (null == o ? void 0 : o.pennies) || i.ub,
						u = Object(l.c)(l.a.GoldPayment);
					t(Object(s.stripeTokenPending)());
					const m = await t(Object(s.validateAndCreateStripeToken)(e));
					if (m) try {
						const e = await Object(p.g)({
							context: n(),
							correlationId: u,
							pennies: c,
							token: m
						});
						if (e.error) {
							const r = Object(d.a)(e.error);
							t(Object(s.stripeApiError)(r))
						} else t(Object(s.paymentCompleted)({
							confirmed: !1
						}))
					} catch (O) {
						const e = Object(d.a)(O);
						t(Object(s.stripeApiError)(e))
					} else {
						const e = a.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						t(Object(s.stripeApiError)(e))
					}
				}, _ = Object(o.a)(m.v), j = ({
					packageId: e,
					correlationId: t
				}) => async (r, a, {
					apiContext: o
				}) => {
					r(O({
						packageId: e,
						correlationId: t
					}));
					const i = Object(b.a)(a()),
						p = (null == i ? void 0 : i.paypalButtonId) || n.a.paypal.buttons.premium;
					if (p) try {
						const e = await Object(u.f)({
							buttonId: p,
							context: o(),
							correlationId: t
						});
						if (e.error) {
							const t = Object(d.a)(e.error);
							r(Object(s.paypalApiError)(t))
						} else r(_(e))
					} catch (l) {
						const e = Object(d.a)(l);
						r(Object(s.paypalApiError)(e))
					} else c.c.captureMessage("No Premium packages available on Premium purchase modal")
				}
		},
		"./src/reddit/endpoints/gold/paypalPurchases.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return s
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "e", (function() {
				return m
			}));
			var n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				i = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = r("./src/reddit/endpoints/gold/purchase.ts");
			const s = async ({
				buttonId: e,
				context: t,
				correlationId: r
			}) => {
				const s = {
						button_id: e,
						correlation_id: r
					},
					u = `${t.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					p = Object(i.a)(u);
				return Object(a.a)(Object(o.a)(t, [c.a]), {
					method: n.gb.POST,
					endpoint: p,
					data: s
				}).then(d.c)
			}, u = async ({
				context: e,
				coins: t,
				pennies: r,
				correlationId: i
			}) => {
				const s = {
					coins: t,
					pennies: r,
					correlation_id: i
				};
				return Object(a.a)(Object(o.a)(e, [c.a]), {
					method: n.gb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: s
				}).then(d.c)
			}, p = async ({
				context: e,
				awardId: t,
				pennies: r,
				thingId: i,
				correlationId: s
			}) => {
				const u = {
					award_id: t,
					correlation_id: s,
					pennies: r,
					thing_id: i
				};
				return Object(a.a)(Object(o.a)(e, [c.a]), {
					method: n.gb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: u
				}).then(d.c)
			}, l = async ({
				context: e,
				offerContext: t,
				orderId: r,
				coins: i,
				pennies: s,
				correlationId: u
			}) => {
				const p = {
					offer_context: t,
					order_id: r,
					coins: i,
					pennies: s,
					correlation_id: u
				};
				return Object(a.a)(Object(o.a)(e, [c.a]), {
					method: n.gb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: p
				}).then(d.c)
			}, b = async ({
				awardId: e,
				context: t,
				coins: r,
				correlationId: i,
				isAnonymous: s,
				message: u,
				offerContext: p,
				orderId: l,
				pennies: b,
				thingId: m
			}) => {
				const O = {
					award_id: e,
					coins: r,
					correlation_id: i,
					is_anonymous: s,
					message: u,
					offer_context: p,
					order_id: l,
					pennies: b,
					thing_id: m
				};
				return Object(a.a)(Object(o.a)(t, [c.a]), {
					method: n.gb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: O
				}).then(d.c)
			}, m = async ({
				awardId: e,
				context: t,
				correlationId: r,
				isAnonymous: i,
				message: s,
				orderId: u,
				thingId: p
			}) => {
				const l = {
					award_id: e,
					correlation_id: r,
					is_anonymous: i,
					message: s,
					order_id: u,
					thing_id: p
				};
				return Object(a.a)(Object(o.a)(t, [c.a]), {
					method: n.gb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: l
				}).then(d.c)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GoldPurchasePaymentActions.6998aa79f8892b788f5d.js.map