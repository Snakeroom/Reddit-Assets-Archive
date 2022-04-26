// https://www.redditstatic.com/desktop2x/Premium.652c0b8f472f12f59ccb.js
// Retrieved at 4/26/2022, 2:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Premium"], {
		"./src/reddit/endpoints/gold/productCatalog/old.index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return i
			}));
			r("./src/lib/constants/index.ts"), r("./src/lib/makeApiRequest/index.ts");
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				d = (r("./src/lib/omitHeaders/index.ts"), r("./src/redditGQL/operations/ClaimAwardOffer.json")),
				a = r("./src/redditGQL/operations/FetchSpecialEvents.json");
			r("./src/reddit/constants/headers.ts"), r("./src/reddit/helpers/addRedesignIdentifier/index.ts"), r("./src/reddit/endpoints/gold/purchase.ts");
			const c = e => Object(n.a)(e, {
					...a
				}),
				i = e => Object(n.a)(e, {
					...d,
					variables: {
						input: {
							offerId: "free_awards"
						}
					}
				})
		},
		"./src/reddit/endpoints/gold/purchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return f
			})), r.d(t, "f", (function() {
				return p
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "a", (function() {
				return j
			})), r.d(t, "b", (function() {
				return P
			}));
			var n = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/lib/omitHeaders/index.ts"),
				i = r("./src/redditGQL/operations/ChangeStripePaymentMethod.json"),
				o = r("./src/reddit/constants/headers.ts"),
				s = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = r("./src/reddit/helpers/genericServerError/index.ts"),
				l = r("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const f = e => e.ok ? e.body.json && e.body.json.errors.length ? {
					...e,
					ok: !1,
					error: Object(l.a)(e)
				} : {
					...e
				} : {
					...e,
					error: e.error || Object(u.a)()
				},
				p = async e => {
					let {
						coins: t,
						context: r,
						correlationId: a,
						offerContext: i,
						pennies: u,
						rememberCard: l,
						token: p,
						savedCardId: b
					} = e;
					const m = {
							token: p ? p.id : void 0,
							coins: t,
							offer_context: i,
							pennies: u,
							remember_card: l,
							card_id: b,
							correlation_id: a
						},
						h = `${r.apiUrl}/api/v2/gold/stripe/buy_coins`,
						g = Object(s.a)(h);
					return Object(d.a)(Object(c.a)(r, [o.a]), {
						method: n.kb.POST,
						endpoint: g,
						data: m
					}).then(f)
				}, b = async e => {
					let {
						coins: t,
						context: r,
						correlationId: a,
						gildParams: i,
						isOldReddit: u,
						offerContext: l,
						pennies: p,
						rememberCard: b,
						thingId: m,
						token: h,
						savedCardId: g
					} = e;
					const {
						gildType: O,
						isAnonymous: j,
						message: P
					} = i, y = {
						token: h ? h.id : void 0,
						coins: t,
						offer_context: l,
						pennies: p,
						thing_id: m,
						gild_type: O,
						message: P ? P.trim() : "",
						is_anonymous: j,
						remember_card: b,
						card_id: g,
						correlation_id: a
					}, _ = `${r.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, x = u ? _ : Object(s.a)(_);
					return Object(d.a)(Object(c.a)(r, [o.a]), {
						method: n.kb.POST,
						endpoint: x,
						data: y
					}).then(f)
				}, m = async e => {
					let {
						context: t,
						correlationId: r,
						gildParams: a,
						isOldReddit: i,
						pennies: u,
						rememberCard: l,
						thingId: p,
						token: b,
						savedCardId: m
					} = e;
					const {
						gildType: h,
						isAnonymous: g,
						message: O
					} = a, j = {
						token: b ? b.id : void 0,
						thing_id: p,
						award_id: h,
						message: O ? O.trim() : "",
						is_anonymous: g,
						pennies: u,
						remember_card: l,
						card_id: m,
						correlation_id: r
					}, P = `${t.apiUrl}/api/v2/gold/stripe/buy_award`, y = i ? P : Object(s.a)(P);
					return Object(d.a)(Object(c.a)(t, [o.a]), {
						method: n.kb.POST,
						endpoint: y,
						data: j
					}).then(f)
				}, h = async e => {
					let {
						context: t,
						correlationId: r,
						pennies: a,
						token: i
					} = e;
					const u = {
							token: i.id,
							pennies: a,
							correlation_id: r
						},
						l = `${t.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						p = Object(s.a)(l);
					return Object(d.a)(Object(c.a)(t, [o.a]), {
						method: n.kb.POST,
						endpoint: p,
						data: u
					}).then(f)
				}, g = "paymentInfoUpdated", O = async e => {
					const {
						origin: t
					} = window.location, r = `${t}/settings/premium`, n = new URLSearchParams({
						[g]: "true"
					}), d = await Object(a.a)(e, {
						...i,
						variables: {
							successUrl: `${r}?${n}`,
							cancelUrl: `${r}`
						}
					});
					if (!d.ok) throw new Error("Unable to update payment information");
					return d.body.data.changeStripePaymentMethod.sessionId
				}, j = async (e, t) => {
					const r = {
						card_id: t
					};
					return Object(d.a)(Object(c.a)(e, [o.a]), {
						method: n.kb.POST,
						endpoint: `${e.apiUrl}/api/v2/gold/stripe/delete_creditcard`,
						data: r
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(l.a)(e)
					})
				}, P = async e => Object(d.a)(Object(c.a)(e, [o.a]), {
					method: n.kb.GET,
					endpoint: `${e.apiUrl}/api/v2/gold/stripe/creditcards`
				}).then(e => e.ok ? {
					...e
				} : {
					...e,
					error: Object(l.a)(e)
				})
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				d = r("./src/lib/constants/index.ts");
			t.a = () => ({
				type: d.J.SERVER_ERROR,
				fields: [{
					field: "",
					msg: n.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/selectors/experiments/econ/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return a
			})), r.d(t, "s", (function() {
				return c
			})), r.d(t, "u", (function() {
				return i
			})), r.d(t, "o", (function() {
				return o
			})), r.d(t, "n", (function() {
				return s
			})), r.d(t, "q", (function() {
				return u
			})), r.d(t, "r", (function() {
				return l
			})), r.d(t, "x", (function() {
				return f
			})), r.d(t, "v", (function() {
				return p
			})), r.d(t, "w", (function() {
				return b
			})), r.d(t, "p", (function() {
				return m
			})), r.d(t, "j", (function() {
				return h
			})), r.d(t, "i", (function() {
				return g
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "b", (function() {
				return j
			})), r.d(t, "d", (function() {
				return P
			})), r.d(t, "e", (function() {
				return y
			})), r.d(t, "g", (function() {
				return _
			})), r.d(t, "c", (function() {
				return x
			})), r.d(t, "k", (function() {
				return v
			})), r.d(t, "l", (function() {
				return k
			})), r.d(t, "m", (function() {
				return C
			})), r.d(t, "t", (function() {
				return w
			})), r.d(t, "y", (function() {
				return I
			})), r.d(t, "z", (function() {
				return S
			})), r.d(t, "B", (function() {
				return M
			})), r.d(t, "a", (function() {
				return R
			})), r.d(t, "A", (function() {
				return E
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				d = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const a = Object(d.a)(n.ld),
				c = Object(d.a)(n.jd),
				i = Object(d.a)(n.md),
				o = Object(d.a)(n.ed),
				s = (Object(d.a)(n.fd), Object(d.a)(n.dd)),
				u = Object(d.a)(n.hd),
				l = Object(d.a)(n.id),
				f = Object(d.a)(n.pd),
				p = Object(d.a)(n.nd),
				b = Object(d.a)(n.od),
				m = Object(d.a)(n.gd),
				h = Object(d.a)(n.Zc),
				g = Object(d.a)(n.Xc),
				O = Object(d.a)(n.Qc),
				j = Object(d.a)(n.Mc),
				P = Object(d.a)(n.Oc),
				y = Object(d.a)(n.Pc),
				_ = Object(d.a)(n.Sc),
				x = Object(d.a)(n.Nc),
				v = Object(d.a)(n.ad),
				k = Object(d.a)(n.bd),
				C = Object(d.a)(n.cd),
				w = Object(d.a)(n.kd),
				I = Object(d.a)(n.qd),
				S = Object(d.a)(n.ud),
				M = Object(d.a)(n.td),
				R = Object(d.a)(n.Mf),
				E = Object(d.a)(n.sd)
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "q", (function() {
				return c
			})), r.d(t, "s", (function() {
				return i
			})), r.d(t, "r", (function() {
				return o
			})), r.d(t, "u", (function() {
				return s
			})), r.d(t, "t", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "p", (function() {
				return f
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "n", (function() {
				return b
			})), r.d(t, "o", (function() {
				return m
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "h", (function() {
				return g
			})), r.d(t, "l", (function() {
				return O
			})), r.d(t, "w", (function() {
				return j
			})), r.d(t, "x", (function() {
				return P
			})), r.d(t, "v", (function() {
				return y
			})), r.d(t, "y", (function() {
				return _
			})), r.d(t, "f", (function() {
				return x
			})), r.d(t, "g", (function() {
				return v
			})), r.d(t, "i", (function() {
				return k
			})), r.d(t, "k", (function() {
				return C
			})), r.d(t, "j", (function() {
				return w
			})), r.d(t, "m", (function() {
				return I
			})), r.d(t, "e", (function() {
				return S
			})), r.d(t, "d", (function() {
				return M
			}));
			var n = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				d = r("./src/lib/initializeClient/installReducer.ts"),
				a = r("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(d.a)({
				features: {
					goldPurchase: a.a
				}
			});
			const c = e => e.features.goldPurchase.purchaseModal.activePage,
				i = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				o = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				s = e => e.features.goldPurchase.purchaseModal.showModal,
				u = e => e.features.goldPurchase.purchaseModal.packageId,
				l = e => e.features.goldPurchase.packageOfferModal.packageId,
				f = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				p = e => {
					const t = Object(n.l)(e),
						r = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && r && t.find(e => e.mobileId === r) || null
				},
				b = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				m = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				h = e => e.features.goldPurchase.payment.paymentMethod,
				g = e => e.features.goldPurchase.payment.cardName,
				O = e => e.features.goldPurchase.payment.postalCode,
				j = e => e.features.goldPurchase.payment.savedCardsPending,
				P = e => e.features.goldPurchase.payment.savedCards,
				y = e => e.features.goldPurchase.payment.rememberCard,
				_ = e => e.features.goldPurchase.payment.useSavedCard,
				x = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				v = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				k = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				C = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				w = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				I = e => e.features.goldPurchase.payment.stripeToken.pending,
				S = e => e.features.goldPurchase.payment.paypal.passthrough,
				M = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/redditGQL/operations/ChangeStripePaymentMethod.json": function(e) {
			e.exports = JSON.parse('{"id":"ce700fb9b230"}')
		},
		"./src/redditGQL/operations/ClaimAwardOffer.json": function(e) {
			e.exports = JSON.parse('{"id":"7264b2ee2ded"}')
		},
		"./src/redditGQL/operations/FetchSpecialEvents.json": function(e) {
			e.exports = JSON.parse('{"id":"6c73f2f0b64f"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Premium.652c0b8f472f12f59ccb.js.map