// https://www.redditstatic.com/desktop2x/GoldPurchasePaymentActions.4010f5020489b3cd63f8.js
// Retrieved at 8/3/2021, 12:40:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GoldPurchasePaymentActions"], {
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return s
			})), r.d(t, "paymentCompleted", (function() {
				return u
			})), r.d(t, "cardNameInput", (function() {
				return l
			})), r.d(t, "postalCodeInput", (function() {
				return p
			})), r.d(t, "cardNameEmpty", (function() {
				return b
			})), r.d(t, "cardElementChange", (function() {
				return h
			})), r.d(t, "stripeTokenPending", (function() {
				return f
			})), r.d(t, "stripeTokenError", (function() {
				return m
			})), r.d(t, "stripeApiError", (function() {
				return g
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return y
			})), r.d(t, "paypalApiError", (function() {
				return O
			})), r.d(t, "toggleRememberCard", (function() {
				return _
			})), r.d(t, "selectSavedCard", (function() {
				return j
			})), r.d(t, "_deleteSavedCard", (function() {
				return P
			})), r.d(t, "deleteSavedCard", (function() {
				return x
			})), r.d(t, "savedCardsPending", (function() {
				return v
			})), r.d(t, "savedCardsSuccess", (function() {
				return I
			})), r.d(t, "loadSavedCards", (function() {
				return C
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/sentry/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/reddit/endpoints/gold/purchase.ts"),
				c = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const s = Object(o.a)(c.B),
				u = Object(o.a)(c.w),
				l = Object(o.a)(c.b),
				p = Object(o.a)(c.y),
				b = Object(o.a)(c.a),
				h = Object(o.a)(c.E),
				f = Object(o.a)(c.G),
				m = Object(o.a)(c.F),
				g = Object(o.a)(c.D),
				y = e => async (t, r) => {
					const a = r(),
						o = Object(i.h)(a),
						d = Object(i.l)(a),
						{
							token: c,
							error: s
						} = await e.createToken({
							name: o,
							address_zip: d
						});
					if (o.trim()) {
						if (!s && c) return c;
						t(m(s || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(b({
							message: e
						}))
					}
				}, O = Object(o.a)(c.x), _ = Object(o.a)(c.H), j = Object(o.a)(c.C), P = Object(o.a)(c.g), x = e => async (t, r, {
					apiContext: n
				}) => {
					t(P(e));
					try {
						const t = await Object(d.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (o) {
						a.c.captureException(o)
					}
				}, v = Object(o.a)(c.z), I = Object(o.a)(c.A), C = () => async (e, t, {
					apiContext: r
				}) => {
					e(v());
					try {
						const t = await Object(d.b)(r());
						if (t.error) throw new Error(t.error.type);
						const n = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(I(n)), n[0] && e(j(n[0].cardId))
					} catch (n) {
						a.c.captureException(n), e(I([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "openPremiumPurchaseModal", (function() {
				return f
			})), r.d(t, "closePremiumPurchaseModal", (function() {
				return m
			})), r.d(t, "stripePremiumPurchaseRequested", (function() {
				return g
			})), r.d(t, "paymentBlobCreated", (function() {
				return y
			})), r.d(t, "openWithBlob", (function() {
				return O
			}));
			var n = r("./src/config.ts"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/sentry/index.ts"),
				c = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/formatApiError/index.ts"),
				s = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				u = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				l = r("./src/reddit/endpoints/gold/purchase.ts"),
				p = r("./src/reddit/helpers/correlationIdTracker.ts"),
				b = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				h = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const f = Object(o.a)(h.t),
				m = Object(o.a)(h.e),
				g = e => async (t, r, {
					apiContext: n
				}) => {
					const o = Object(b.a)(r()),
						d = (null == o ? void 0 : o.pennies) || c.vb,
						u = Object(p.c)(p.a.GoldPayment);
					t(Object(s.stripeTokenPending)());
					const h = await t(Object(s.validateAndCreateStripeToken)(e));
					if (h) try {
						const e = await Object(l.h)({
							context: n(),
							correlationId: u,
							pennies: d,
							token: h
						});
						if (e.error) {
							const r = Object(i.a)(e.error);
							t(Object(s.stripeApiError)(r))
						} else t(Object(s.paymentCompleted)({
							confirmed: !1
						}))
					} catch (f) {
						const e = Object(i.a)(f);
						t(Object(s.stripeApiError)(e))
					} else {
						const e = a.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						t(Object(s.stripeApiError)(e))
					}
				}, y = Object(o.a)(h.v), O = ({
					packageId: e,
					correlationId: t
				}) => async (r, a, {
					apiContext: o
				}) => {
					r(f({
						packageId: e,
						correlationId: t
					}));
					const c = Object(b.a)(a()),
						l = (null == c ? void 0 : c.paypalButtonId) || n.a.paypal.buttons.premium;
					if (l) try {
						const e = await Object(u.f)({
							buttonId: l,
							context: o(),
							correlationId: t
						});
						if (e.error) {
							const t = Object(i.a)(e.error);
							r(Object(s.paypalApiError)(t))
						} else r(y(e))
					} catch (p) {
						const e = Object(i.a)(p);
						r(Object(s.paypalApiError)(e))
					} else d.c.captureMessage("No Premium packages available on Premium purchase modal")
				}
		},
		"./src/reddit/endpoints/gold/paypalPurchases.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return s
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "e", (function() {
				return h
			}));
			var n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				d = r("./src/reddit/constants/headers.ts"),
				c = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				i = r("./src/reddit/endpoints/gold/purchase.ts");
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
					l = Object(c.a)(u);
				return Object(a.a)(Object(o.a)(t, [d.a]), {
					method: n.hb.POST,
					endpoint: l,
					data: s
				}).then(i.c)
			}, u = async ({
				context: e,
				coins: t,
				pennies: r,
				correlationId: c
			}) => {
				const s = {
					coins: t,
					pennies: r,
					correlation_id: c
				};
				return Object(a.a)(Object(o.a)(e, [d.a]), {
					method: n.hb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: s
				}).then(i.c)
			}, l = async ({
				context: e,
				awardId: t,
				pennies: r,
				thingId: c,
				correlationId: s
			}) => {
				const u = {
					award_id: t,
					correlation_id: s,
					pennies: r,
					thing_id: c
				};
				return Object(a.a)(Object(o.a)(e, [d.a]), {
					method: n.hb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: u
				}).then(i.c)
			}, p = async ({
				context: e,
				offerContext: t,
				orderId: r,
				coins: c,
				pennies: s,
				correlationId: u
			}) => {
				const l = {
					offer_context: t,
					order_id: r,
					coins: c,
					pennies: s,
					correlation_id: u
				};
				return Object(a.a)(Object(o.a)(e, [d.a]), {
					method: n.hb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: l
				}).then(i.c)
			}, b = async ({
				awardId: e,
				context: t,
				coins: r,
				correlationId: c,
				isAnonymous: s,
				message: u,
				offerContext: l,
				orderId: p,
				pennies: b,
				thingId: h
			}) => {
				const f = {
					award_id: e,
					coins: r,
					correlation_id: c,
					is_anonymous: s,
					message: u,
					offer_context: l,
					order_id: p,
					pennies: b,
					thing_id: h
				};
				return Object(a.a)(Object(o.a)(t, [d.a]), {
					method: n.hb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: f
				}).then(i.c)
			}, h = async ({
				awardId: e,
				context: t,
				correlationId: r,
				isAnonymous: c,
				message: s,
				orderId: u,
				thingId: l
			}) => {
				const p = {
					award_id: e,
					correlation_id: r,
					is_anonymous: c,
					message: s,
					order_id: u,
					thing_id: l
				};
				return Object(a.a)(Object(o.a)(t, [d.a]), {
					method: n.hb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: p
				}).then(i.c)
			}
		},
		"./src/reddit/endpoints/gold/purchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return p
			})), r.d(t, "f", (function() {
				return b
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "g", (function() {
				return f
			})), r.d(t, "h", (function() {
				return m
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "i", (function() {
				return y
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "b", (function() {
				return _
			}));
			var n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/redditGQL/operations/ChangeStripePaymentMethod.json"),
				i = r("./src/reddit/constants/headers.ts"),
				s = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = r("./src/reddit/helpers/genericServerError/index.ts"),
				l = r("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const p = e => e.ok ? e.body.json && e.body.json.errors.length ? {
					...e,
					ok: !1,
					error: Object(l.a)(e)
				} : {
					...e
				} : {
					...e,
					error: e.error || Object(u.a)()
				},
				b = async ({
					coins: e,
					context: t,
					correlationId: r,
					offerContext: o,
					pennies: c,
					rememberCard: u,
					token: l,
					savedCardId: b
				}) => {
					const h = {
							token: l ? l.id : void 0,
							coins: e,
							offer_context: o,
							pennies: c,
							remember_card: u,
							card_id: b,
							correlation_id: r
						},
						f = `${t.apiUrl}/api/v2/gold/stripe/buy_coins`,
						m = Object(s.a)(f);
					return Object(a.a)(Object(d.a)(t, [i.a]), {
						method: n.hb.POST,
						endpoint: m,
						data: h
					}).then(p)
				}, h = async ({
					coins: e,
					context: t,
					correlationId: r,
					gildParams: o,
					isOldReddit: c,
					offerContext: u,
					pennies: l,
					rememberCard: b,
					thingId: h,
					token: f,
					savedCardId: m
				}) => {
					const {
						gildType: g,
						isAnonymous: y,
						message: O
					} = o, _ = {
						token: f ? f.id : void 0,
						coins: e,
						offer_context: u,
						pennies: l,
						thing_id: h,
						gild_type: g,
						message: O ? O.trim() : "",
						is_anonymous: y,
						remember_card: b,
						card_id: m,
						correlation_id: r
					}, j = `${t.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, P = c ? j : Object(s.a)(j);
					return Object(a.a)(Object(d.a)(t, [i.a]), {
						method: n.hb.POST,
						endpoint: P,
						data: _
					}).then(p)
				}, f = async ({
					context: e,
					correlationId: t,
					gildParams: r,
					isOldReddit: o,
					pennies: c,
					rememberCard: u,
					thingId: l,
					token: b,
					savedCardId: h
				}) => {
					const {
						gildType: f,
						isAnonymous: m,
						message: g
					} = r, y = {
						token: b ? b.id : void 0,
						thing_id: l,
						award_id: f,
						message: g ? g.trim() : "",
						is_anonymous: m,
						pennies: c,
						remember_card: u,
						card_id: h,
						correlation_id: t
					}, O = `${e.apiUrl}/api/v2/gold/stripe/buy_award`, _ = o ? O : Object(s.a)(O);
					return Object(a.a)(Object(d.a)(e, [i.a]), {
						method: n.hb.POST,
						endpoint: _,
						data: y
					}).then(p)
				}, m = async ({
					context: e,
					correlationId: t,
					pennies: r,
					token: o
				}) => {
					const c = {
							token: o.id,
							pennies: r,
							correlation_id: t
						},
						u = `${e.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						l = Object(s.a)(u);
					return Object(a.a)(Object(d.a)(e, [i.a]), {
						method: n.hb.POST,
						endpoint: l,
						data: c
					}).then(p)
				}, g = "paymentInfoUpdated", y = async e => {
					const {
						origin: t
					} = window.location, r = `${t}/settings/premium`, n = new URLSearchParams({
						[g]: "true"
					}), a = await Object(o.a)(e, {
						...c,
						variables: {
							successUrl: `${r}?${n}`,
							cancelUrl: `${r}`
						}
					});
					if (!a.ok) throw new Error("Unable to update payment information");
					return a.body.data.changeStripePaymentMethod.sessionId
				}, O = async (e, t) => {
					const r = {
						card_id: t
					};
					return Object(a.a)(Object(d.a)(e, [i.a]), {
						method: n.hb.POST,
						endpoint: `${e.apiUrl}/api/v2/gold/stripe/delete_creditcard`,
						data: r
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(l.a)(e)
					})
				}, _ = async e => Object(a.a)(Object(d.a)(e, [i.a]), {
					method: n.hb.GET,
					endpoint: `${e.apiUrl}/api/v2/gold/stripe/creditcards`
				}).then(e => e.ok ? {
					...e
				} : {
					...e,
					error: Object(l.a)(e)
				})
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "q", (function() {
				return d
			})), r.d(t, "s", (function() {
				return c
			})), r.d(t, "r", (function() {
				return i
			})), r.d(t, "u", (function() {
				return s
			})), r.d(t, "t", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "p", (function() {
				return p
			})), r.d(t, "a", (function() {
				return b
			})), r.d(t, "n", (function() {
				return h
			})), r.d(t, "o", (function() {
				return f
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "h", (function() {
				return g
			})), r.d(t, "l", (function() {
				return y
			})), r.d(t, "w", (function() {
				return O
			})), r.d(t, "x", (function() {
				return _
			})), r.d(t, "v", (function() {
				return j
			})), r.d(t, "y", (function() {
				return P
			})), r.d(t, "f", (function() {
				return x
			})), r.d(t, "g", (function() {
				return v
			})), r.d(t, "i", (function() {
				return I
			})), r.d(t, "k", (function() {
				return C
			})), r.d(t, "j", (function() {
				return k
			})), r.d(t, "m", (function() {
				return w
			})), r.d(t, "e", (function() {
				return M
			})), r.d(t, "d", (function() {
				return A
			}));
			var n = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				a = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(a.a)({
				features: {
					goldPurchase: o.a
				}
			});
			const d = e => e.features.goldPurchase.purchaseModal.activePage,
				c = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				i = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				s = e => e.features.goldPurchase.purchaseModal.showModal,
				u = e => e.features.goldPurchase.purchaseModal.packageId,
				l = e => e.features.goldPurchase.packageOfferModal.packageId,
				p = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				b = e => {
					const t = Object(n.i)(e),
						r = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && r && t.find(e => e.mobileId === r) || null
				},
				h = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				f = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				m = e => e.features.goldPurchase.payment.paymentMethod,
				g = e => e.features.goldPurchase.payment.cardName,
				y = e => e.features.goldPurchase.payment.postalCode,
				O = e => e.features.goldPurchase.payment.savedCardsPending,
				_ = e => e.features.goldPurchase.payment.savedCards,
				j = e => e.features.goldPurchase.payment.rememberCard,
				P = e => e.features.goldPurchase.payment.useSavedCard,
				x = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				v = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				I = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				C = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				k = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				w = e => e.features.goldPurchase.payment.stripeToken.pending,
				M = e => e.features.goldPurchase.payment.paypal.passthrough,
				A = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/redditGQL/operations/ChangeStripePaymentMethod.json": function(e) {
			e.exports = JSON.parse('{"id":"ce700fb9b230"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GoldPurchasePaymentActions.4010f5020489b3cd63f8.js.map