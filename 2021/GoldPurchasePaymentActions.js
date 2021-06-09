// https://www.redditstatic.com/desktop2x/GoldPurchasePaymentActions.10f99f977ed322c8f462.js
// Retrieved at 6/9/2021, 2:50:05 PM by Reddit Dataminer v1.0.0
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
				return O
			})), r.d(t, "paypalApiError", (function() {
				return y
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
				d = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/endpoints/gold/purchase.ts"),
				c = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const s = Object(d.a)(c.B),
				u = Object(d.a)(c.w),
				l = Object(d.a)(c.b),
				p = Object(d.a)(c.y),
				b = Object(d.a)(c.a),
				h = Object(d.a)(c.E),
				f = Object(d.a)(c.G),
				m = Object(d.a)(c.F),
				g = Object(d.a)(c.D),
				O = e => async (t, r) => {
					const a = r(),
						d = Object(i.h)(a),
						o = Object(i.l)(a),
						{
							token: c,
							error: s
						} = await e.createToken({
							name: d,
							address_zip: o
						});
					if (d.trim()) {
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
				}, y = Object(d.a)(c.x), _ = Object(d.a)(c.H), j = Object(d.a)(c.C), P = Object(d.a)(c.g), x = e => async (t, r, {
					apiContext: n
				}) => {
					t(P(e));
					try {
						const t = await Object(o.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (d) {
						a.c.captureException(d)
					}
				}, v = Object(d.a)(c.z), I = Object(d.a)(c.A), C = () => async (e, t, {
					apiContext: r
				}) => {
					e(v());
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
				return O
			})), r.d(t, "openWithBlob", (function() {
				return y
			}));
			var n = r("./src/config.ts"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				c = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/formatApiError/index.ts"),
				s = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				u = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				l = r("./src/reddit/endpoints/gold/purchase.ts"),
				p = r("./src/reddit/helpers/correlationIdTracker.ts"),
				b = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				h = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const f = Object(d.a)(h.t),
				m = Object(d.a)(h.e),
				g = e => async (t, r, {
					apiContext: n
				}) => {
					const d = Object(b.a)(r()),
						o = (null == d ? void 0 : d.pennies) || c.vb,
						u = Object(p.c)(p.a.GoldPayment);
					t(Object(s.stripeTokenPending)());
					const h = await t(Object(s.validateAndCreateStripeToken)(e));
					if (h) try {
						const e = await Object(l.g)({
							context: n(),
							correlationId: u,
							pennies: o,
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
				}, O = Object(d.a)(h.v), y = ({
					packageId: e,
					correlationId: t
				}) => async (r, a, {
					apiContext: d
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
							context: d(),
							correlationId: t
						});
						if (e.error) {
							const t = Object(i.a)(e.error);
							r(Object(s.paypalApiError)(t))
						} else r(O(e))
					} catch (p) {
						const e = Object(i.a)(p);
						r(Object(s.paypalApiError)(e))
					} else o.c.captureMessage("No Premium packages available on Premium purchase modal")
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
				d = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts"),
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
				return Object(a.a)(Object(d.a)(t, [o.a]), {
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
				return Object(a.a)(Object(d.a)(e, [o.a]), {
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
				return Object(a.a)(Object(d.a)(e, [o.a]), {
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
				return Object(a.a)(Object(d.a)(e, [o.a]), {
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
				return Object(a.a)(Object(d.a)(t, [o.a]), {
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
				return Object(a.a)(Object(d.a)(t, [o.a]), {
					method: n.hb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: p
				}).then(i.c)
			}
		},
		"./src/reddit/endpoints/gold/purchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "f", (function() {
				return b
			})), r.d(t, "g", (function() {
				return h
			})), r.d(t, "h", (function() {
				return f
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "b", (function() {
				return g
			}));
			var n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts"),
				c = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				i = r("./src/reddit/helpers/genericServerError/index.ts"),
				s = r("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const u = e => e.ok ? e.body.json && e.body.json.errors.length ? {
					...e,
					ok: !1,
					error: Object(s.a)(e)
				} : {
					...e
				} : {
					...e,
					error: e.error || Object(i.a)()
				},
				l = async ({
					coins: e,
					context: t,
					correlationId: r,
					offerContext: i,
					pennies: s,
					rememberCard: l,
					token: p,
					savedCardId: b
				}) => {
					const h = {
							token: p ? p.id : void 0,
							coins: e,
							offer_context: i,
							pennies: s,
							remember_card: l,
							card_id: b,
							correlation_id: r
						},
						f = `${t.apiUrl}/api/v2/gold/stripe/buy_coins`,
						m = Object(c.a)(f);
					return Object(a.a)(Object(d.a)(t, [o.a]), {
						method: n.hb.POST,
						endpoint: m,
						data: h
					}).then(u)
				}, p = async ({
					coins: e,
					context: t,
					correlationId: r,
					gildParams: i,
					isOldReddit: s,
					offerContext: l,
					pennies: p,
					rememberCard: b,
					thingId: h,
					token: f,
					savedCardId: m
				}) => {
					const {
						gildType: g,
						isAnonymous: O,
						message: y
					} = i, _ = {
						token: f ? f.id : void 0,
						coins: e,
						offer_context: l,
						pennies: p,
						thing_id: h,
						gild_type: g,
						message: y ? y.trim() : "",
						is_anonymous: O,
						remember_card: b,
						card_id: m,
						correlation_id: r
					}, j = `${t.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, P = s ? j : Object(c.a)(j);
					return Object(a.a)(Object(d.a)(t, [o.a]), {
						method: n.hb.POST,
						endpoint: P,
						data: _
					}).then(u)
				}, b = async ({
					context: e,
					correlationId: t,
					gildParams: r,
					isOldReddit: i,
					pennies: s,
					rememberCard: l,
					thingId: p,
					token: b,
					savedCardId: h
				}) => {
					const {
						gildType: f,
						isAnonymous: m,
						message: g
					} = r, O = {
						token: b ? b.id : void 0,
						thing_id: p,
						award_id: f,
						message: g ? g.trim() : "",
						is_anonymous: m,
						pennies: s,
						remember_card: l,
						card_id: h,
						correlation_id: t
					}, y = `${e.apiUrl}/api/v2/gold/stripe/buy_award`, _ = i ? y : Object(c.a)(y);
					return Object(a.a)(Object(d.a)(e, [o.a]), {
						method: n.hb.POST,
						endpoint: _,
						data: O
					}).then(u)
				}, h = async ({
					context: e,
					correlationId: t,
					pennies: r,
					token: i
				}) => {
					const s = {
							token: i.id,
							pennies: r,
							correlation_id: t
						},
						l = `${e.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						p = Object(c.a)(l);
					return Object(a.a)(Object(d.a)(e, [o.a]), {
						method: n.hb.POST,
						endpoint: p,
						data: s
					}).then(u)
				}, f = async (e, t) => {
					const r = {
						token: t.id
					};
					return Object(a.a)(Object(d.a)(e, [o.a]), {
						method: n.hb.POST,
						endpoint: `${e.apiUrl}/api/v2/gold/stripe/update_creditcard`,
						data: r
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(s.a)(e)
					})
				}, m = async (e, t) => {
					const r = {
						card_id: t
					};
					return Object(a.a)(Object(d.a)(e, [o.a]), {
						method: n.hb.POST,
						endpoint: `${e.apiUrl}/api/v2/gold/stripe/delete_creditcard`,
						data: r
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(s.a)(e)
					})
				}, g = async e => Object(a.a)(Object(d.a)(e, [o.a]), {
					method: n.hb.GET,
					endpoint: `${e.apiUrl}/api/v2/gold/stripe/creditcards`
				}).then(e => e.ok ? {
					...e
				} : {
					...e,
					error: Object(s.a)(e)
				})
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "q", (function() {
				return o
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
			})), r.d(t, "z", (function() {
				return m
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "h", (function() {
				return O
			})), r.d(t, "l", (function() {
				return y
			})), r.d(t, "w", (function() {
				return _
			})), r.d(t, "x", (function() {
				return j
			})), r.d(t, "v", (function() {
				return P
			})), r.d(t, "y", (function() {
				return x
			})), r.d(t, "f", (function() {
				return v
			})), r.d(t, "g", (function() {
				return I
			})), r.d(t, "i", (function() {
				return C
			})), r.d(t, "k", (function() {
				return k
			})), r.d(t, "j", (function() {
				return w
			})), r.d(t, "m", (function() {
				return M
			})), r.d(t, "e", (function() {
				return A
			})), r.d(t, "d", (function() {
				return T
			}));
			var n = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				a = r("./src/lib/initializeClient/installReducer.ts"),
				d = r("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(a.a)({
				features: {
					goldPurchase: d.a
				}
			});
			const o = e => e.features.goldPurchase.purchaseModal.activePage,
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
				m = e => e.features.goldPurchase.updateCardModal.pending,
				g = e => e.features.goldPurchase.payment.paymentMethod,
				O = e => e.features.goldPurchase.payment.cardName,
				y = e => e.features.goldPurchase.payment.postalCode,
				_ = e => e.features.goldPurchase.payment.savedCardsPending,
				j = e => e.features.goldPurchase.payment.savedCards,
				P = e => e.features.goldPurchase.payment.rememberCard,
				x = e => e.features.goldPurchase.payment.useSavedCard,
				v = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				I = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				C = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				k = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				w = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				M = e => e.features.goldPurchase.payment.stripeToken.pending,
				A = e => e.features.goldPurchase.payment.paypal.passthrough,
				T = e => e.features.goldPurchase.payment.paypal.errorMessage
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GoldPurchasePaymentActions.10f99f977ed322c8f462.js.map