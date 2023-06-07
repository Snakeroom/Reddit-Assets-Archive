// https://www.redditstatic.com/desktop2x/Premium.9bd784477216d97793d1.js
// Retrieved at 6/6/2023, 10:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Premium"], {
		"./src/reddit/endpoints/gold/productCatalog/old.index.ts": function(e, r, t) {
			"use strict";
			t.d(r, "b", (function() {
				return s
			})), t.d(r, "a", (function() {
				return o
			}));
			t("./src/lib/constants/index.ts"), t("./src/lib/makeApiRequest/index.ts");
			var n = t("./src/lib/makeGqlRequest/index.ts"),
				a = (t("./src/lib/omitHeaders/index.ts"), t("./src/redditGQL/operations/ClaimAwardOffer.json")),
				d = t("./src/redditGQL/operations/FetchSpecialEvents.json");
			t("./src/reddit/constants/headers.ts"), t("./src/reddit/helpers/addRedesignIdentifier/index.ts"), t("./src/reddit/endpoints/gold/purchase.ts");
			const s = e => Object(n.a)(e, {
					...d
				}),
				o = e => Object(n.a)(e, {
					...a,
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
				return p
			})), t.d(r, "d", (function() {
				return f
			})), t.d(r, "c", (function() {
				return m
			})), t.d(r, "e", (function() {
				return g
			})), t.d(r, "f", (function() {
				return h
			})), t.d(r, "b", (function() {
				return b
			})), t.d(r, "g", (function() {
				return P
			}));
			var n = t("./src/lib/constants/index.ts"),
				a = t("./src/lib/makeApiRequest/index.ts"),
				d = t("./src/lib/makeGqlRequest/index.ts"),
				s = t("./src/lib/omitHeaders/index.ts"),
				o = t("./src/redditGQL/operations/ChangeStripePaymentMethod.json"),
				i = t("./src/reddit/constants/headers.ts"),
				c = t("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = t("./src/reddit/helpers/genericServerError/index.ts"),
				l = t("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
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
				f = async e => {
					let {
						coins: r,
						context: t,
						correlationId: d,
						offerContext: o,
						pennies: u,
						rememberCard: l,
						token: f,
						savedCardId: m
					} = e;
					const g = {
							token: f ? f.id : void 0,
							coins: r,
							offer_context: o,
							pennies: u,
							remember_card: l,
							card_id: m,
							correlation_id: d
						},
						h = `${t.apiUrl}/api/v2/gold/stripe/buy_coins`,
						b = Object(c.a)(h);
					return Object(a.a)(Object(s.a)(t, [i.a]), {
						method: n.pb.POST,
						endpoint: b,
						data: g
					}).then(p)
				}, m = async e => {
					let {
						coins: r,
						context: t,
						correlationId: d,
						gildParams: o,
						isOldReddit: u,
						offerContext: l,
						pennies: f,
						rememberCard: m,
						thingId: g,
						token: h,
						savedCardId: b
					} = e;
					const {
						gildType: P,
						isAnonymous: y,
						message: _
					} = o, O = {
						token: h ? h.id : void 0,
						coins: r,
						offer_context: l,
						pennies: f,
						thing_id: g,
						gild_type: P,
						message: _ ? _.trim() : "",
						is_anonymous: y,
						remember_card: m,
						card_id: b,
						correlation_id: d
					}, v = `${t.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, j = u ? v : Object(c.a)(v);
					return Object(a.a)(Object(s.a)(t, [i.a]), {
						method: n.pb.POST,
						endpoint: j,
						data: O
					}).then(p)
				}, g = async e => {
					let {
						context: r,
						correlationId: t,
						gildParams: d,
						isOldReddit: o,
						pennies: u,
						rememberCard: l,
						thingId: f,
						token: m,
						savedCardId: g
					} = e;
					const {
						gildType: h,
						isAnonymous: b,
						message: P
					} = d, y = {
						token: m ? m.id : void 0,
						thing_id: f,
						award_id: h,
						message: P ? P.trim() : "",
						is_anonymous: b,
						pennies: u,
						remember_card: l,
						card_id: g,
						correlation_id: t
					}, _ = `${r.apiUrl}/api/v2/gold/stripe/buy_award`, O = o ? _ : Object(c.a)(_);
					return Object(a.a)(Object(s.a)(r, [i.a]), {
						method: n.pb.POST,
						endpoint: O,
						data: y
					}).then(p)
				}, h = async e => {
					let {
						context: r,
						correlationId: t,
						pennies: d,
						token: o
					} = e;
					const u = {
							token: o.id,
							pennies: d,
							correlation_id: t
						},
						l = `${r.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						f = Object(c.a)(l);
					return Object(a.a)(Object(s.a)(r, [i.a]), {
						method: n.pb.POST,
						endpoint: f,
						data: u
					}).then(p)
				}, b = "paymentInfoUpdated", P = async e => {
					const {
						origin: r
					} = window.location, t = `${r}/settings/premium`, n = new URLSearchParams({
						[b]: "true"
					}), a = await Object(d.a)(e, {
						...o,
						variables: {
							successUrl: `${t}?${n}`,
							cancelUrl: `${t}`
						}
					});
					if (!a.ok) throw new Error("Unable to update payment information");
					return a.body.data.changeStripePaymentMethod.sessionId
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, r, t) {
			"use strict";
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				a = t("./src/lib/constants/index.ts");
			r.a = () => ({
				type: a.L.SERVER_ERROR,
				fields: [{
					field: "",
					msg: n.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, r, t) {
			"use strict";
			t.d(r, "r", (function() {
				return s
			})), t.d(r, "t", (function() {
				return o
			})), t.d(r, "s", (function() {
				return i
			})), t.d(r, "v", (function() {
				return c
			})), t.d(r, "u", (function() {
				return u
			})), t.d(r, "b", (function() {
				return l
			})), t.d(r, "q", (function() {
				return p
			})), t.d(r, "a", (function() {
				return f
			})), t.d(r, "o", (function() {
				return m
			})), t.d(r, "p", (function() {
				return g
			})), t.d(r, "c", (function() {
				return h
			})), t.d(r, "h", (function() {
				return b
			})), t.d(r, "l", (function() {
				return P
			})), t.d(r, "x", (function() {
				return y
			})), t.d(r, "y", (function() {
				return _
			})), t.d(r, "w", (function() {
				return O
			})), t.d(r, "z", (function() {
				return v
			})), t.d(r, "f", (function() {
				return j
			})), t.d(r, "g", (function() {
				return x
			})), t.d(r, "i", (function() {
				return C
			})), t.d(r, "k", (function() {
				return k
			})), t.d(r, "m", (function() {
				return I
			})), t.d(r, "j", (function() {
				return w
			})), t.d(r, "n", (function() {
				return S
			})), t.d(r, "e", (function() {
				return M
			})), t.d(r, "d", (function() {
				return R
			}));
			var n = t("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				a = t("./src/lib/initializeClient/installReducer.ts"),
				d = t("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(a.a)({
				features: {
					goldPurchase: d.a
				}
			});
			const s = e => e.features.goldPurchase.purchaseModal.activePage,
				o = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				i = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				c = e => e.features.goldPurchase.purchaseModal.showModal,
				u = e => e.features.goldPurchase.purchaseModal.packageId,
				l = e => e.features.goldPurchase.packageOfferModal.packageId,
				p = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				f = e => {
					const r = Object(n.i)(e),
						t = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return r.length && t && r.find(e => e.mobileId === t) || null
				},
				m = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				g = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				h = e => e.features.goldPurchase.payment.paymentMethod,
				b = e => e.features.goldPurchase.payment.cardName,
				P = e => e.features.goldPurchase.payment.postalCode,
				y = e => e.features.goldPurchase.payment.savedCardsPending,
				_ = e => e.features.goldPurchase.payment.savedCards,
				O = e => e.features.goldPurchase.payment.rememberCard,
				v = e => e.features.goldPurchase.payment.useSavedCard,
				j = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				x = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				C = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				k = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				I = e => e.features.goldPurchase.payment.cardValidation.postalCode,
				w = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				S = e => e.features.goldPurchase.payment.stripeToken.pending,
				M = e => e.features.goldPurchase.payment.paypal.passthrough,
				R = e => e.features.goldPurchase.payment.paypal.errorMessage
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Premium.9bd784477216d97793d1.js.map