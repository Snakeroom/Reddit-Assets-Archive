// https://www.redditstatic.com/desktop2x/Premium.5dd13c6d052b510db39b.js
// Retrieved at 5/9/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Premium"], {
		"./src/reddit/endpoints/gold/productCatalog/old.index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return i
			}));
			r("./src/lib/constants/index.ts"), r("./src/lib/makeApiRequest/index.ts");
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				d = (r("./src/lib/omitHeaders/index.ts"), r("./src/redditGQL/operations/ClaimAwardOffer.json")),
				a = r("./src/redditGQL/operations/FetchSpecialEvents.json");
			r("./src/reddit/constants/headers.ts"), r("./src/reddit/helpers/addRedesignIdentifier/index.ts"), r("./src/reddit/endpoints/gold/purchase.ts");
			const s = e => Object(n.a)(e, {
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
				s = r("./src/lib/omitHeaders/index.ts"),
				i = r("./src/redditGQL/operations/ChangeStripePaymentMethod.json"),
				c = r("./src/reddit/constants/headers.ts"),
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
						g = `${r.apiUrl}/api/v2/gold/stripe/buy_coins`,
						h = Object(o.a)(g);
					return Object(d.a)(Object(s.a)(r, [c.a]), {
						method: n.jb.POST,
						endpoint: h,
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
						token: g,
						savedCardId: h
					} = e;
					const {
						gildType: O,
						isAnonymous: j,
						message: P
					} = i, y = {
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
					return Object(d.a)(Object(s.a)(r, [c.a]), {
						method: n.jb.POST,
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
					}, P = `${t.apiUrl}/api/v2/gold/stripe/buy_award`, y = i ? P : Object(o.a)(P);
					return Object(d.a)(Object(s.a)(t, [c.a]), {
						method: n.jb.POST,
						endpoint: y,
						data: j
					}).then(f)
				}, g = async e => {
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
						p = Object(o.a)(l);
					return Object(d.a)(Object(s.a)(t, [c.a]), {
						method: n.jb.POST,
						endpoint: p,
						data: u
					}).then(f)
				}, h = "paymentInfoUpdated", O = async e => {
					const {
						origin: t
					} = window.location, r = `${t}/settings/premium`, n = new URLSearchParams({
						[h]: "true"
					}), d = await Object(a.a)(e, {
						...i,
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
				type: d.I.SERVER_ERROR,
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
			})), r.d(t, "n", (function() {
				return s
			})), r.d(t, "p", (function() {
				return i
			})), r.d(t, "m", (function() {
				return c
			})), r.d(t, "l", (function() {
				return o
			})), r.d(t, "s", (function() {
				return u
			})), r.d(t, "q", (function() {
				return l
			})), r.d(t, "r", (function() {
				return f
			})), r.d(t, "i", (function() {
				return p
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "f", (function() {
				return j
			})), r.d(t, "a", (function() {
				return P
			})), r.d(t, "j", (function() {
				return y
			})), r.d(t, "k", (function() {
				return _
			})), r.d(t, "o", (function() {
				return x
			})), r.d(t, "t", (function() {
				return v
			})), r.d(t, "u", (function() {
				return k
			})), r.d(t, "x", (function() {
				return C
			})), r.d(t, "v", (function() {
				return I
			})), r.d(t, "w", (function() {
				return w
			})), r.d(t, "y", (function() {
				return M
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				d = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const a = Object(d.a)(n.fd),
				s = Object(d.a)(n.dd),
				i = Object(d.a)(n.gd),
				c = Object(d.a)(n.cd),
				o = Object(d.a)(n.bd),
				u = Object(d.a)(n.jd),
				l = Object(d.a)(n.hd),
				f = Object(d.a)(n.id),
				p = Object(d.a)(n.Yc),
				b = Object(d.a)(n.Wc),
				m = Object(d.a)(n.Oc),
				g = Object(d.a)(n.Pc),
				h = Object(d.a)(n.Mc),
				O = Object(d.a)(n.Nc),
				j = Object(d.a)(n.Rc),
				P = Object(d.a)(n.Lc),
				y = Object(d.a)(n.Zc),
				_ = Object(d.a)(n.ad),
				x = Object(d.a)(n.ed),
				v = Object(d.a)(n.kd),
				k = Object(d.a)(n.qd),
				C = Object(d.a)(n.pd),
				I = Object(d.a)(n.md),
				w = Object(d.a)(n.od),
				M = Object(d.a)(n.nd)
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "q", (function() {
				return s
			})), r.d(t, "s", (function() {
				return i
			})), r.d(t, "r", (function() {
				return c
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
				return I
			})), r.d(t, "m", (function() {
				return w
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
			const s = e => e.features.goldPurchase.purchaseModal.activePage,
				i = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				c = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
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
				I = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				w = e => e.features.goldPurchase.payment.stripeToken.pending,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Premium.5dd13c6d052b510db39b.js.map