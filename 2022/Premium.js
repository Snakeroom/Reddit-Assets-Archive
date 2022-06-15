// https://www.redditstatic.com/desktop2x/Premium.c0f792cdaf53c1e75190.js
// Retrieved at 6/15/2022, 1:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Premium"], {
		"./src/reddit/endpoints/gold/productCatalog/old.index.ts": function(e, r, t) {
			"use strict";
			t.d(r, "b", (function() {
				return s
			})), t.d(r, "a", (function() {
				return i
			}));
			t("./src/lib/constants/index.ts"), t("./src/lib/makeApiRequest/index.ts");
			var n = t("./src/lib/makeGqlRequest/index.ts"),
				d = (t("./src/lib/omitHeaders/index.ts"), t("./src/redditGQL/operations/ClaimAwardOffer.json")),
				a = t("./src/redditGQL/operations/FetchSpecialEvents.json");
			t("./src/reddit/constants/headers.ts"), t("./src/reddit/helpers/addRedesignIdentifier/index.ts"), t("./src/reddit/endpoints/gold/purchase.ts");
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
		"./src/reddit/endpoints/gold/purchase.ts": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return f
			})), t.d(r, "d", (function() {
				return p
			})), t.d(r, "c", (function() {
				return m
			})), t.d(r, "e", (function() {
				return b
			})), t.d(r, "f", (function() {
				return g
			})), t.d(r, "b", (function() {
				return h
			})), t.d(r, "g", (function() {
				return O
			}));
			var n = t("./src/lib/constants/index.ts"),
				d = t("./src/lib/makeApiRequest/index.ts"),
				a = t("./src/lib/makeGqlRequest/index.ts"),
				s = t("./src/lib/omitHeaders/index.ts"),
				i = t("./src/redditGQL/operations/ChangeStripePaymentMethod.json"),
				o = t("./src/reddit/constants/headers.ts"),
				c = t("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = t("./src/reddit/helpers/genericServerError/index.ts"),
				l = t("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
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
						coins: r,
						context: t,
						correlationId: a,
						offerContext: i,
						pennies: u,
						rememberCard: l,
						token: p,
						savedCardId: m
					} = e;
					const b = {
							token: p ? p.id : void 0,
							coins: r,
							offer_context: i,
							pennies: u,
							remember_card: l,
							card_id: m,
							correlation_id: a
						},
						g = `${t.apiUrl}/api/v2/gold/stripe/buy_coins`,
						h = Object(c.a)(g);
					return Object(d.a)(Object(s.a)(t, [o.a]), {
						method: n.jb.POST,
						endpoint: h,
						data: b
					}).then(f)
				}, m = async e => {
					let {
						coins: r,
						context: t,
						correlationId: a,
						gildParams: i,
						isOldReddit: u,
						offerContext: l,
						pennies: p,
						rememberCard: m,
						thingId: b,
						token: g,
						savedCardId: h
					} = e;
					const {
						gildType: O,
						isAnonymous: j,
						message: P
					} = i, y = {
						token: g ? g.id : void 0,
						coins: r,
						offer_context: l,
						pennies: p,
						thing_id: b,
						gild_type: O,
						message: P ? P.trim() : "",
						is_anonymous: j,
						remember_card: m,
						card_id: h,
						correlation_id: a
					}, _ = `${t.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, x = u ? _ : Object(c.a)(_);
					return Object(d.a)(Object(s.a)(t, [o.a]), {
						method: n.jb.POST,
						endpoint: x,
						data: y
					}).then(f)
				}, b = async e => {
					let {
						context: r,
						correlationId: t,
						gildParams: a,
						isOldReddit: i,
						pennies: u,
						rememberCard: l,
						thingId: p,
						token: m,
						savedCardId: b
					} = e;
					const {
						gildType: g,
						isAnonymous: h,
						message: O
					} = a, j = {
						token: m ? m.id : void 0,
						thing_id: p,
						award_id: g,
						message: O ? O.trim() : "",
						is_anonymous: h,
						pennies: u,
						remember_card: l,
						card_id: b,
						correlation_id: t
					}, P = `${r.apiUrl}/api/v2/gold/stripe/buy_award`, y = i ? P : Object(c.a)(P);
					return Object(d.a)(Object(s.a)(r, [o.a]), {
						method: n.jb.POST,
						endpoint: y,
						data: j
					}).then(f)
				}, g = async e => {
					let {
						context: r,
						correlationId: t,
						pennies: a,
						token: i
					} = e;
					const u = {
							token: i.id,
							pennies: a,
							correlation_id: t
						},
						l = `${r.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						p = Object(c.a)(l);
					return Object(d.a)(Object(s.a)(r, [o.a]), {
						method: n.jb.POST,
						endpoint: p,
						data: u
					}).then(f)
				}, h = "paymentInfoUpdated", O = async e => {
					const {
						origin: r
					} = window.location, t = `${r}/settings/premium`, n = new URLSearchParams({
						[h]: "true"
					}), d = await Object(a.a)(e, {
						...i,
						variables: {
							successUrl: `${t}?${n}`,
							cancelUrl: `${t}`
						}
					});
					if (!d.ok) throw new Error("Unable to update payment information");
					return d.body.data.changeStripePaymentMethod.sessionId
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, r, t) {
			"use strict";
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				d = t("./src/lib/constants/index.ts");
			r.a = () => ({
				type: d.I.SERVER_ERROR,
				fields: [{
					field: "",
					msg: n.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/selectors/experiments/econ/index.ts": function(e, r, t) {
			"use strict";
			t.d(r, "g", (function() {
				return a
			})), t.d(r, "m", (function() {
				return s
			})), t.d(r, "o", (function() {
				return i
			})), t.d(r, "l", (function() {
				return o
			})), t.d(r, "k", (function() {
				return c
			})), t.d(r, "q", (function() {
				return u
			})), t.d(r, "p", (function() {
				return l
			})), t.d(r, "h", (function() {
				return f
			})), t.d(r, "e", (function() {
				return p
			})), t.d(r, "d", (function() {
				return m
			})), t.d(r, "b", (function() {
				return b
			})), t.d(r, "c", (function() {
				return g
			})), t.d(r, "f", (function() {
				return h
			})), t.d(r, "a", (function() {
				return O
			})), t.d(r, "i", (function() {
				return j
			})), t.d(r, "j", (function() {
				return P
			})), t.d(r, "n", (function() {
				return y
			})), t.d(r, "r", (function() {
				return _
			})), t.d(r, "s", (function() {
				return x
			})), t.d(r, "u", (function() {
				return v
			})), t.d(r, "t", (function() {
				return k
			})), t.d(r, "v", (function() {
				return C
			}));
			var n = t("./src/reddit/constants/experiments.ts"),
				d = t("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const a = Object(d.a)(n.jd),
				s = Object(d.a)(n.hd),
				i = Object(d.a)(n.kd),
				o = Object(d.a)(n.gd),
				c = Object(d.a)(n.fd),
				u = Object(d.a)(n.md),
				l = Object(d.a)(n.ld),
				f = Object(d.a)(n.cd),
				p = Object(d.a)(n.Vc),
				m = Object(d.a)(n.Wc),
				b = Object(d.a)(n.Tc),
				g = Object(d.a)(n.Uc),
				h = Object(d.a)(n.Yc),
				O = Object(d.a)(n.Sc),
				j = Object(d.a)(n.dd),
				P = Object(d.a)(n.ed),
				y = Object(d.a)(n.id),
				_ = Object(d.a)(n.nd),
				x = Object(d.a)(n.od),
				v = Object(d.a)(n.rd),
				k = Object(d.a)(n.qd),
				C = Object(d.a)(n.pd)
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, r, t) {
			"use strict";
			t.d(r, "q", (function() {
				return s
			})), t.d(r, "s", (function() {
				return i
			})), t.d(r, "r", (function() {
				return o
			})), t.d(r, "u", (function() {
				return c
			})), t.d(r, "t", (function() {
				return u
			})), t.d(r, "b", (function() {
				return l
			})), t.d(r, "p", (function() {
				return f
			})), t.d(r, "a", (function() {
				return p
			})), t.d(r, "n", (function() {
				return m
			})), t.d(r, "o", (function() {
				return b
			})), t.d(r, "c", (function() {
				return g
			})), t.d(r, "h", (function() {
				return h
			})), t.d(r, "l", (function() {
				return O
			})), t.d(r, "w", (function() {
				return j
			})), t.d(r, "x", (function() {
				return P
			})), t.d(r, "v", (function() {
				return y
			})), t.d(r, "y", (function() {
				return _
			})), t.d(r, "f", (function() {
				return x
			})), t.d(r, "g", (function() {
				return v
			})), t.d(r, "i", (function() {
				return k
			})), t.d(r, "k", (function() {
				return C
			})), t.d(r, "j", (function() {
				return I
			})), t.d(r, "m", (function() {
				return w
			})), t.d(r, "e", (function() {
				return S
			})), t.d(r, "d", (function() {
				return M
			}));
			var n = t("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				d = t("./src/lib/initializeClient/installReducer.ts"),
				a = t("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(d.a)({
				features: {
					goldPurchase: a.a
				}
			});
			const s = e => e.features.goldPurchase.purchaseModal.activePage,
				i = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				o = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				c = e => e.features.goldPurchase.purchaseModal.showModal,
				u = e => e.features.goldPurchase.purchaseModal.packageId,
				l = e => e.features.goldPurchase.packageOfferModal.packageId,
				f = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				p = e => {
					const r = Object(n.l)(e),
						t = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return r.length && t && r.find(e => e.mobileId === t) || null
				},
				m = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				b = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Premium.c0f792cdaf53c1e75190.js.map