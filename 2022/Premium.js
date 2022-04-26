// https://www.redditstatic.com/desktop2x/Premium.af7b9822e73c53b2d78c.js
// Retrieved at 4/26/2022, 5:10:04 PM by Reddit Dataminer v1.0.0
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
			r.d(t, "g", (function() {
				return a
			})), r.d(t, "r", (function() {
				return c
			})), r.d(t, "t", (function() {
				return i
			})), r.d(t, "n", (function() {
				return o
			})), r.d(t, "m", (function() {
				return s
			})), r.d(t, "p", (function() {
				return u
			})), r.d(t, "q", (function() {
				return l
			})), r.d(t, "w", (function() {
				return f
			})), r.d(t, "u", (function() {
				return p
			})), r.d(t, "v", (function() {
				return b
			})), r.d(t, "o", (function() {
				return m
			})), r.d(t, "i", (function() {
				return h
			})), r.d(t, "h", (function() {
				return g
			})), r.d(t, "e", (function() {
				return O
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "d", (function() {
				return P
			})), r.d(t, "f", (function() {
				return y
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "j", (function() {
				return x
			})), r.d(t, "k", (function() {
				return v
			})), r.d(t, "l", (function() {
				return k
			})), r.d(t, "s", (function() {
				return C
			})), r.d(t, "x", (function() {
				return w
			})), r.d(t, "y", (function() {
				return I
			})), r.d(t, "A", (function() {
				return S
			})), r.d(t, "a", (function() {
				return M
			})), r.d(t, "z", (function() {
				return R
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				d = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const a = Object(d.a)(n.kd),
				c = Object(d.a)(n.id),
				i = Object(d.a)(n.ld),
				o = Object(d.a)(n.dd),
				s = (Object(d.a)(n.ed), Object(d.a)(n.cd)),
				u = Object(d.a)(n.gd),
				l = Object(d.a)(n.hd),
				f = Object(d.a)(n.od),
				p = Object(d.a)(n.md),
				b = Object(d.a)(n.nd),
				m = Object(d.a)(n.fd),
				h = Object(d.a)(n.Yc),
				g = Object(d.a)(n.Wc),
				O = Object(d.a)(n.Pc),
				j = Object(d.a)(n.Nc),
				P = Object(d.a)(n.Oc),
				y = Object(d.a)(n.Rc),
				_ = Object(d.a)(n.Mc),
				x = Object(d.a)(n.Zc),
				v = Object(d.a)(n.ad),
				k = Object(d.a)(n.bd),
				C = Object(d.a)(n.jd),
				w = Object(d.a)(n.pd),
				I = Object(d.a)(n.td),
				S = Object(d.a)(n.sd),
				M = Object(d.a)(n.Lf),
				R = Object(d.a)(n.rd)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Premium.af7b9822e73c53b2d78c.js.map