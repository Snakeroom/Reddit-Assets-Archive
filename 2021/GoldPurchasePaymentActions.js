// https://www.redditstatic.com/desktop2x/GoldPurchasePaymentActions.a06e53c84d0f919ce8db.js
// Retrieved at 3/30/2021, 4:20:06 PM by Reddit Dataminer v1.0.0
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
			})), r.d(t, "cardNameEmpty", (function() {
				return l
			})), r.d(t, "cardElementChange", (function() {
				return b
			})), r.d(t, "stripeTokenPending", (function() {
				return m
			})), r.d(t, "stripeTokenError", (function() {
				return O
			})), r.d(t, "stripeApiError", (function() {
				return h
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return f
			})), r.d(t, "paypalApiError", (function() {
				return _
			})), r.d(t, "toggleRememberCard", (function() {
				return j
			})), r.d(t, "selectSavedCard", (function() {
				return y
			})), r.d(t, "_deleteSavedCard", (function() {
				return g
			})), r.d(t, "deleteSavedCard", (function() {
				return x
			})), r.d(t, "savedCardsPending", (function() {
				return P
			})), r.d(t, "savedCardsSuccess", (function() {
				return I
			})), r.d(t, "loadSavedCards", (function() {
				return w
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/sentry/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/endpoints/gold/purchase.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				d = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const s = Object(o.a)(i.A),
				u = Object(o.a)(i.w),
				p = Object(o.a)(i.b),
				l = Object(o.a)(i.a),
				b = Object(o.a)(i.D),
				m = Object(o.a)(i.F),
				O = Object(o.a)(i.E),
				h = Object(o.a)(i.C),
				f = e => async (t, r) => {
					const a = r(),
						o = Object(d.h)(a),
						{
							token: c,
							error: i
						} = await e.createToken({
							name: o
						});
					if (o.trim()) {
						if (!i && c) return c;
						t(O(i || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(l({
							message: e
						}))
					}
				}, _ = Object(o.a)(i.x), j = Object(o.a)(i.G), y = Object(o.a)(i.B), g = Object(o.a)(i.g), x = e => async (t, r, {
					apiContext: n
				}) => {
					t(g(e));
					try {
						const t = await Object(c.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (o) {
						a.c.captureException(o)
					}
				}, P = Object(o.a)(i.y), I = Object(o.a)(i.z), w = () => async (e, t, {
					apiContext: r
				}) => {
					e(P());
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
						e(I(n)), n[0] && e(y(n[0].cardId))
					} catch (n) {
						a.c.captureException(n), e(I([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "openPremiumPurchaseModal", (function() {
				return O
			})), r.d(t, "closePremiumPurchaseModal", (function() {
				return h
			})), r.d(t, "stripePremiumPurchaseRequested", (function() {
				return f
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
				h = Object(o.a)(m.e),
				f = e => async (t, r, {
					apiContext: n
				}) => {
					const o = Object(b.a)(r()),
						c = (null == o ? void 0 : o.pennies) || i.qb,
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
					method: n.cb.POST,
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
					method: n.cb.POST,
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
					method: n.cb.POST,
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
					method: n.cb.POST,
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
					method: n.cb.POST,
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
					method: n.cb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: l
				}).then(d.c)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GoldPurchasePaymentActions.a06e53c84d0f919ce8db.js.map