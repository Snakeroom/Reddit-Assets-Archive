// https://www.redditstatic.com/desktop2x/Premium.524a2b7490cc9a874cb5.js
// Retrieved at 5/3/2022, 3:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Premium"], {
		"./src/reddit/endpoints/gold/productCatalog/old.index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return s
			}));
			r("./src/lib/constants/index.ts"), r("./src/lib/makeApiRequest/index.ts");
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				d = (r("./src/lib/omitHeaders/index.ts"), r("./src/redditGQL/operations/ClaimAwardOffer.json")),
				a = r("./src/redditGQL/operations/FetchSpecialEvents.json");
			r("./src/reddit/constants/headers.ts"), r("./src/reddit/helpers/addRedesignIdentifier/index.ts"), r("./src/reddit/endpoints/gold/purchase.ts");
			const c = e => Object(n.a)(e, {
					...a
				}),
				s = e => Object(n.a)(e, {
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
			r.d(t, "a", (function() {
				return f
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "g", (function() {
				return O
			}));
			var n = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/lib/omitHeaders/index.ts"),
				s = r("./src/redditGQL/operations/ChangeStripePaymentMethod.json"),
				i = r("./src/reddit/constants/headers.ts"),
				o = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
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
						offerContext: s,
						pennies: u,
						rememberCard: l,
						token: p,
						savedCardId: b
					} = e;
					const m = {
							token: p ? p.id : void 0,
							coins: t,
							offer_context: s,
							pennies: u,
							remember_card: l,
							card_id: b,
							correlation_id: a
						},
						g = `${r.apiUrl}/api/v2/gold/stripe/buy_coins`,
						h = Object(o.a)(g);
					return Object(d.a)(Object(c.a)(r, [i.a]), {
						method: n.kb.POST,
						endpoint: h,
						data: m
					}).then(f)
				}, b = async e => {
					let {
						coins: t,
						context: r,
						correlationId: a,
						gildParams: s,
						isOldReddit: u,
						offerContext: l,
						pennies: p,
						rememberCard: b,
						thingId: m,
						token: g,
						savedCardId: h
					} = e;
					const {
						gildType: O,
						isAnonymous: j,
						message: P
					} = s, y = {
						token: g ? g.id : void 0,
						coins: t,
						offer_context: l,
						pennies: p,
						thing_id: m,
						gild_type: O,
						message: P ? P.trim() : "",
						is_anonymous: j,
						remember_card: b,
						card_id: h,
						correlation_id: a
					}, _ = `${r.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, x = u ? _ : Object(o.a)(_);
					return Object(d.a)(Object(c.a)(r, [i.a]), {
						method: n.kb.POST,
						endpoint: x,
						data: y
					}).then(f)
				}, m = async e => {
					let {
						context: t,
						correlationId: r,
						gildParams: a,
						isOldReddit: s,
						pennies: u,
						rememberCard: l,
						thingId: p,
						token: b,
						savedCardId: m
					} = e;
					const {
						gildType: g,
						isAnonymous: h,
						message: O
					} = a, j = {
						token: b ? b.id : void 0,
						thing_id: p,
						award_id: g,
						message: O ? O.trim() : "",
						is_anonymous: h,
						pennies: u,
						remember_card: l,
						card_id: m,
						correlation_id: r
					}, P = `${t.apiUrl}/api/v2/gold/stripe/buy_award`, y = s ? P : Object(o.a)(P);
					return Object(d.a)(Object(c.a)(t, [i.a]), {
						method: n.kb.POST,
						endpoint: y,
						data: j
					}).then(f)
				}, g = async e => {
					let {
						context: t,
						correlationId: r,
						pennies: a,
						token: s
					} = e;
					const u = {
							token: s.id,
							pennies: a,
							correlation_id: r
						},
						l = `${t.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						p = Object(o.a)(l);
					return Object(d.a)(Object(c.a)(t, [i.a]), {
						method: n.kb.POST,
						endpoint: p,
						data: u
					}).then(f)
				}, h = "paymentInfoUpdated", O = async e => {
					const {
						origin: t
					} = window.location, r = `${t}/settings/premium`, n = new URLSearchParams({
						[h]: "true"
					}), d = await Object(a.a)(e, {
						...s,
						variables: {
							successUrl: `${r}?${n}`,
							cancelUrl: `${r}`
						}
					});
					if (!d.ok) throw new Error("Unable to update payment information");
					return d.body.data.changeStripePaymentMethod.sessionId
				}
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
				return s
			})), r.d(t, "n", (function() {
				return i
			})), r.d(t, "m", (function() {
				return o
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
				return g
			})), r.d(t, "h", (function() {
				return h
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
			})), r.d(t, "B", (function() {
				return M
			})), r.d(t, "a", (function() {
				return S
			})), r.d(t, "z", (function() {
				return R
			})), r.d(t, "A", (function() {
				return A
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				d = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const a = Object(d.a)(n.id),
				c = Object(d.a)(n.gd),
				s = Object(d.a)(n.jd),
				i = Object(d.a)(n.bd),
				o = (Object(d.a)(n.cd), Object(d.a)(n.ad)),
				u = Object(d.a)(n.ed),
				l = Object(d.a)(n.fd),
				f = Object(d.a)(n.md),
				p = Object(d.a)(n.kd),
				b = Object(d.a)(n.ld),
				m = Object(d.a)(n.dd),
				g = Object(d.a)(n.Wc),
				h = Object(d.a)(n.Uc),
				O = Object(d.a)(n.Nc),
				j = Object(d.a)(n.Lc),
				P = Object(d.a)(n.Mc),
				y = Object(d.a)(n.Pc),
				_ = Object(d.a)(n.Kc),
				x = Object(d.a)(n.Xc),
				v = Object(d.a)(n.Yc),
				k = Object(d.a)(n.Zc),
				C = Object(d.a)(n.hd),
				w = Object(d.a)(n.nd),
				I = Object(d.a)(n.sd),
				M = Object(d.a)(n.rd),
				S = Object(d.a)(n.Jf),
				R = Object(d.a)(n.pd),
				A = Object(d.a)(n.qd)
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "q", (function() {
				return c
			})), r.d(t, "s", (function() {
				return s
			})), r.d(t, "r", (function() {
				return i
			})), r.d(t, "u", (function() {
				return o
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
				return g
			})), r.d(t, "h", (function() {
				return h
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
				return M
			})), r.d(t, "d", (function() {
				return S
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
				s = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				i = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				o = e => e.features.goldPurchase.purchaseModal.showModal,
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
				g = e => e.features.goldPurchase.payment.paymentMethod,
				h = e => e.features.goldPurchase.payment.cardName,
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
				M = e => e.features.goldPurchase.payment.paypal.passthrough,
				S = e => e.features.goldPurchase.payment.paypal.errorMessage
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Premium.524a2b7490cc9a874cb5.js.map