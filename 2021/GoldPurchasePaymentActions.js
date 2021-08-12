// https://www.redditstatic.com/desktop2x/GoldPurchasePaymentActions.7eff7df5176cb207828a.js
// Retrieved at 8/12/2021, 6:50:07 PM by Reddit Dataminer v1.0.0
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
				return h
			})), r.d(t, "cardElementChange", (function() {
				return b
			})), r.d(t, "stripeTokenPending", (function() {
				return m
			})), r.d(t, "stripeTokenError", (function() {
				return f
			})), r.d(t, "stripeApiError", (function() {
				return g
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return O
			})), r.d(t, "paypalApiError", (function() {
				return y
			})), r.d(t, "toggleRememberCard", (function() {
				return _
			})), r.d(t, "selectSavedCard", (function() {
				return P
			})), r.d(t, "_deleteSavedCard", (function() {
				return j
			})), r.d(t, "deleteSavedCard", (function() {
				return x
			})), r.d(t, "savedCardsPending", (function() {
				return I
			})), r.d(t, "savedCardsSuccess", (function() {
				return v
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
				h = Object(o.a)(c.a),
				b = Object(o.a)(c.E),
				m = Object(o.a)(c.G),
				f = Object(o.a)(c.F),
				g = Object(o.a)(c.D),
				O = e => async (t, r) => {
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
						t(f(s || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(h({
							message: e
						}))
					}
				}, y = Object(o.a)(c.x), _ = Object(o.a)(c.H), P = Object(o.a)(c.C), j = Object(o.a)(c.g), x = e => async (t, r, {
					apiContext: n
				}) => {
					t(j(e));
					try {
						const t = await Object(d.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (o) {
						a.c.captureException(o)
					}
				}, I = Object(o.a)(c.z), v = Object(o.a)(c.A), C = () => async (e, t, {
					apiContext: r
				}) => {
					e(I());
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
						e(v(n)), n[0] && e(P(n[0].cardId))
					} catch (n) {
						a.c.captureException(n), e(v([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "setPremiumPurchaseModalInfo", (function() {
				return g
			})), r.d(t, "clearPremiumPurchaseModalInfo", (function() {
				return O
			})), r.d(t, "openPremiumPurchaseModal", (function() {
				return y
			})), r.d(t, "closePremiumPurchaseModal", (function() {
				return _
			})), r.d(t, "stripePremiumPurchaseRequested", (function() {
				return P
			})), r.d(t, "paymentBlobCreated", (function() {
				return j
			})), r.d(t, "openWithBlob", (function() {
				return x
			}));
			var n = r("./src/config.ts"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/sentry/index.ts"),
				c = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/formatApiError/index.ts"),
				s = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				u = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/constants/modals.ts"),
				p = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				h = r("./src/reddit/endpoints/gold/purchase.ts"),
				b = r("./src/reddit/helpers/correlationIdTracker.ts"),
				m = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				f = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const g = Object(o.a)(f.t),
				O = Object(o.a)(f.e),
				y = (e, t) => async r => {
					r(g(e)), r(Object(u.h)(l.a.ECON_PREMIUM_PURCHASE, t))
				}, _ = () => async e => {
					e(Object(u.g)(l.a.ECON_PREMIUM_PURCHASE)), e(O())
				}, P = e => async (t, r, {
					apiContext: n
				}) => {
					const o = Object(m.a)(r()),
						d = (null == o ? void 0 : o.pennies) || c.vb,
						u = Object(b.c)(b.a.GoldPayment);
					t(Object(s.stripeTokenPending)());
					const l = await t(Object(s.validateAndCreateStripeToken)(e));
					if (l) try {
						const e = await Object(h.h)({
							context: n(),
							correlationId: u,
							pennies: d,
							token: l
						});
						if (e.error) {
							const r = Object(i.a)(e.error);
							t(Object(s.stripeApiError)(r))
						} else t(Object(s.paymentCompleted)({
							confirmed: !1
						}))
					} catch (p) {
						const e = Object(i.a)(p);
						t(Object(s.stripeApiError)(e))
					} else {
						const e = a.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						t(Object(s.stripeApiError)(e))
					}
				}, j = Object(o.a)(f.v), x = ({
					packageId: e,
					correlationId: t
				}, r) => async (a, o, {
					apiContext: c
				}) => {
					a(y({
						packageId: e,
						correlationId: t
					}, r));
					const u = Object(m.a)(o()),
						l = (null == u ? void 0 : u.paypalButtonId) || n.a.paypal.buttons.premium;
					if (l) try {
						const e = await Object(p.f)({
							buttonId: l,
							context: c(),
							correlationId: t
						});
						if (e.error) {
							const t = Object(i.a)(e.error);
							a(Object(s.paypalApiError)(t))
						} else a(j(e))
					} catch (h) {
						const e = Object(i.a)(h);
						a(Object(s.paypalApiError)(e))
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
				return h
			})), r.d(t, "e", (function() {
				return b
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
			}, h = async ({
				awardId: e,
				context: t,
				coins: r,
				correlationId: c,
				isAnonymous: s,
				message: u,
				offerContext: l,
				orderId: p,
				pennies: h,
				thingId: b
			}) => {
				const m = {
					award_id: e,
					coins: r,
					correlation_id: c,
					is_anonymous: s,
					message: u,
					offer_context: l,
					order_id: p,
					pennies: h,
					thing_id: b
				};
				return Object(a.a)(Object(o.a)(t, [d.a]), {
					method: n.hb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: m
				}).then(i.c)
			}, b = async ({
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
				return h
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "h", (function() {
				return f
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "a", (function() {
				return y
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
				h = async ({
					coins: e,
					context: t,
					correlationId: r,
					offerContext: o,
					pennies: c,
					rememberCard: u,
					token: l,
					savedCardId: h
				}) => {
					const b = {
							token: l ? l.id : void 0,
							coins: e,
							offer_context: o,
							pennies: c,
							remember_card: u,
							card_id: h,
							correlation_id: r
						},
						m = `${t.apiUrl}/api/v2/gold/stripe/buy_coins`,
						f = Object(s.a)(m);
					return Object(a.a)(Object(d.a)(t, [i.a]), {
						method: n.hb.POST,
						endpoint: f,
						data: b
					}).then(p)
				}, b = async ({
					coins: e,
					context: t,
					correlationId: r,
					gildParams: o,
					isOldReddit: c,
					offerContext: u,
					pennies: l,
					rememberCard: h,
					thingId: b,
					token: m,
					savedCardId: f
				}) => {
					const {
						gildType: g,
						isAnonymous: O,
						message: y
					} = o, _ = {
						token: m ? m.id : void 0,
						coins: e,
						offer_context: u,
						pennies: l,
						thing_id: b,
						gild_type: g,
						message: y ? y.trim() : "",
						is_anonymous: O,
						remember_card: h,
						card_id: f,
						correlation_id: r
					}, P = `${t.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, j = c ? P : Object(s.a)(P);
					return Object(a.a)(Object(d.a)(t, [i.a]), {
						method: n.hb.POST,
						endpoint: j,
						data: _
					}).then(p)
				}, m = async ({
					context: e,
					correlationId: t,
					gildParams: r,
					isOldReddit: o,
					pennies: c,
					rememberCard: u,
					thingId: l,
					token: h,
					savedCardId: b
				}) => {
					const {
						gildType: m,
						isAnonymous: f,
						message: g
					} = r, O = {
						token: h ? h.id : void 0,
						thing_id: l,
						award_id: m,
						message: g ? g.trim() : "",
						is_anonymous: f,
						pennies: c,
						remember_card: u,
						card_id: b,
						correlation_id: t
					}, y = `${e.apiUrl}/api/v2/gold/stripe/buy_award`, _ = o ? y : Object(s.a)(y);
					return Object(a.a)(Object(d.a)(e, [i.a]), {
						method: n.hb.POST,
						endpoint: _,
						data: O
					}).then(p)
				}, f = async ({
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
				}, g = "paymentInfoUpdated", O = async e => {
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
				}, y = async (e, t) => {
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
				return h
			})), r.d(t, "n", (function() {
				return b
			})), r.d(t, "o", (function() {
				return m
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "h", (function() {
				return g
			})), r.d(t, "l", (function() {
				return O
			})), r.d(t, "w", (function() {
				return y
			})), r.d(t, "x", (function() {
				return _
			})), r.d(t, "v", (function() {
				return P
			})), r.d(t, "y", (function() {
				return j
			})), r.d(t, "f", (function() {
				return x
			})), r.d(t, "g", (function() {
				return I
			})), r.d(t, "i", (function() {
				return v
			})), r.d(t, "k", (function() {
				return C
			})), r.d(t, "j", (function() {
				return k
			})), r.d(t, "m", (function() {
				return w
			})), r.d(t, "e", (function() {
				return M
			})), r.d(t, "d", (function() {
				return E
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
				h = e => {
					const t = Object(n.j)(e),
						r = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && r && t.find(e => e.mobileId === r) || null
				},
				b = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				m = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				f = e => e.features.goldPurchase.payment.paymentMethod,
				g = e => e.features.goldPurchase.payment.cardName,
				O = e => e.features.goldPurchase.payment.postalCode,
				y = e => e.features.goldPurchase.payment.savedCardsPending,
				_ = e => e.features.goldPurchase.payment.savedCards,
				P = e => e.features.goldPurchase.payment.rememberCard,
				j = e => e.features.goldPurchase.payment.useSavedCard,
				x = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				I = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				v = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				C = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				k = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				w = e => e.features.goldPurchase.payment.stripeToken.pending,
				M = e => e.features.goldPurchase.payment.paypal.passthrough,
				E = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/redditGQL/operations/ChangeStripePaymentMethod.json": function(e) {
			e.exports = JSON.parse('{"id":"ce700fb9b230"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GoldPurchasePaymentActions.7eff7df5176cb207828a.js.map