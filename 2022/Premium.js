// https://www.redditstatic.com/desktop2x/Premium.935d10cb0e2a45a2a82e.js
// Retrieved at 4/13/2022, 8:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Premium"], {
		"./src/reddit/endpoints/gold/productCatalog/old.index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return h
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "d", (function() {
				return O
			})), r.d(t, "a", (function() {
				return k
			}));
			var n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/redditGQL/operations/ClaimAwardOffer.json"),
				s = r("./src/redditGQL/operations/FetchSpecialEvents.json"),
				c = r("./src/reddit/constants/headers.ts"),
				u = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				l = r("./src/reddit/endpoints/gold/purchase.ts");
			const p = e => ({
					baselineCoins: e.baseline_coins || e.coins,
					baselinePennies: e.baseline_pennies || e.pennies,
					bonusPct: e.bonus_pct,
					coins: e.coins,
					description: e.description,
					featured: e.featured,
					featuredLabel: e.featured_label,
					images: {
						marketing: e.images.marketing,
						purchaseSuccess: e.images.purchase_success
					},
					mobileId: e.mobile_id,
					pennies: e.pennies
				}),
				f = e => e.map(p),
				g = e => e.map(e => {
					return {
						...p(e),
						dealInfo: {
							type: e.deal_info.type,
							title: e.deal_info.title,
							subtitle: e.deal_info.subtitle,
							displayDelay: e.deal_info.display_delay
						}
					}
				}),
				m = e => e.map(e => ({
					defaultSignupBonusCoins: e.default_signup_bonus_coins,
					bonusPct: e.bonus_pct,
					frequency: e.frequency,
					mobileId: e.mobile_id,
					paypalButtonId: e.paypal_button_id,
					pennies: e.pennies,
					periodicalCoins: e.periodical_coins,
					signupBonusCoins: e.signup_bonus_coins
				})),
				b = e => e ? {
					ctaText: e.cta_text,
					dropdownHeaderText: e.dropdown_banner_text,
					dropdownHeaderBackgroundAsset: e.dropdown_banner_image_url,
					endsAt: e.ends_at,
					heroImageUrl: e.hero_image_url,
					heroSubtext: e.hero_subtext,
					heroText: e.hero_text
				} : null,
				h = async e => {
					let {
						context: t,
						correlationId: r,
						shouldUseCurrentOrigin: d
					} = e;
					const o = "/api/v2/gold/purchase_package_details",
						s = d && "undefined" != typeof window ? `${window.location.origin}${o}` : `${t.apiUrl}${o}`,
						p = Object(u.a)(s);
					return Object(a.a)(Object(i.a)(t, [c.a]), {
						method: n.kb.GET,
						endpoint: p,
						data: {
							correlation_id: r
						}
					}).then(l.c).then(_)
				};

			function _(e) {
				if (!e.ok) return e;
				const {
					active_sale: t,
					coin_packages: r,
					deals: n,
					premium_packages: a
				} = e.body, d = {
					activeSaleConfig: b(t),
					coinPackages: f(r),
					dealCoinPackages: g(n),
					premiumPackages: m(a)
				};
				return {
					...e,
					body: d
				}
			}
			const y = async e => {
				let {
					context: t,
					awardId: r,
					correlationId: d
				} = e;
				const o = `${t.apiUrl}/api/v2/gold/recommended_coin_package_details`,
					s = Object(u.a)(o);
				return Object(a.a)(Object(i.a)(t, [c.a]), {
					method: n.kb.GET,
					endpoint: s,
					data: {
						correlation_id: d,
						intended_award: r
					}
				}).then(l.c).then(P)
			};

			function P(e) {
				if (!e.ok) return e;
				const t = e.body,
					r = {
						coinPackages: f([t])
					};
				return {
					...e,
					body: r
				}
			}
			const O = e => Object(d.a)(e, {
					...s
				}),
				k = e => Object(d.a)(e, {
					...o,
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
				return p
			})), r.d(t, "f", (function() {
				return f
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "i", (function() {
				return _
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "b", (function() {
				return P
			}));
			var n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/redditGQL/operations/ChangeStripePaymentMethod.json"),
				s = r("./src/reddit/constants/headers.ts"),
				c = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
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
				f = async e => {
					let {
						coins: t,
						context: r,
						correlationId: d,
						offerContext: o,
						pennies: u,
						rememberCard: l,
						token: f,
						savedCardId: g
					} = e;
					const m = {
							token: f ? f.id : void 0,
							coins: t,
							offer_context: o,
							pennies: u,
							remember_card: l,
							card_id: g,
							correlation_id: d
						},
						b = `${r.apiUrl}/api/v2/gold/stripe/buy_coins`,
						h = Object(c.a)(b);
					return Object(a.a)(Object(i.a)(r, [s.a]), {
						method: n.kb.POST,
						endpoint: h,
						data: m
					}).then(p)
				}, g = async e => {
					let {
						coins: t,
						context: r,
						correlationId: d,
						gildParams: o,
						isOldReddit: u,
						offerContext: l,
						pennies: f,
						rememberCard: g,
						thingId: m,
						token: b,
						savedCardId: h
					} = e;
					const {
						gildType: _,
						isAnonymous: y,
						message: P
					} = o, O = {
						token: b ? b.id : void 0,
						coins: t,
						offer_context: l,
						pennies: f,
						thing_id: m,
						gild_type: _,
						message: P ? P.trim() : "",
						is_anonymous: y,
						remember_card: g,
						card_id: h,
						correlation_id: d
					}, k = `${r.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, j = u ? k : Object(c.a)(k);
					return Object(a.a)(Object(i.a)(r, [s.a]), {
						method: n.kb.POST,
						endpoint: j,
						data: O
					}).then(p)
				}, m = async e => {
					let {
						context: t,
						correlationId: r,
						gildParams: d,
						isOldReddit: o,
						pennies: u,
						rememberCard: l,
						thingId: f,
						token: g,
						savedCardId: m
					} = e;
					const {
						gildType: b,
						isAnonymous: h,
						message: _
					} = d, y = {
						token: g ? g.id : void 0,
						thing_id: f,
						award_id: b,
						message: _ ? _.trim() : "",
						is_anonymous: h,
						pennies: u,
						remember_card: l,
						card_id: m,
						correlation_id: r
					}, P = `${t.apiUrl}/api/v2/gold/stripe/buy_award`, O = o ? P : Object(c.a)(P);
					return Object(a.a)(Object(i.a)(t, [s.a]), {
						method: n.kb.POST,
						endpoint: O,
						data: y
					}).then(p)
				}, b = async e => {
					let {
						context: t,
						correlationId: r,
						pennies: d,
						token: o
					} = e;
					const u = {
							token: o.id,
							pennies: d,
							correlation_id: r
						},
						l = `${t.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						f = Object(c.a)(l);
					return Object(a.a)(Object(i.a)(t, [s.a]), {
						method: n.kb.POST,
						endpoint: f,
						data: u
					}).then(p)
				}, h = "paymentInfoUpdated", _ = async e => {
					const {
						origin: t
					} = window.location, r = `${t}/settings/premium`, n = new URLSearchParams({
						[h]: "true"
					}), a = await Object(d.a)(e, {
						...o,
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
					return Object(a.a)(Object(i.a)(e, [s.a]), {
						method: n.kb.POST,
						endpoint: `${e.apiUrl}/api/v2/gold/stripe/delete_creditcard`,
						data: r
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(l.a)(e)
					})
				}, P = async e => Object(a.a)(Object(i.a)(e, [s.a]), {
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
				a = r("./src/lib/constants/index.ts");
			t.a = () => ({
				type: a.J.SERVER_ERROR,
				fields: [{
					field: "",
					msg: n.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "q", (function() {
				return i
			})), r.d(t, "s", (function() {
				return o
			})), r.d(t, "r", (function() {
				return s
			})), r.d(t, "u", (function() {
				return c
			})), r.d(t, "t", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "p", (function() {
				return p
			})), r.d(t, "a", (function() {
				return f
			})), r.d(t, "n", (function() {
				return g
			})), r.d(t, "o", (function() {
				return m
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "l", (function() {
				return _
			})), r.d(t, "w", (function() {
				return y
			})), r.d(t, "x", (function() {
				return P
			})), r.d(t, "v", (function() {
				return O
			})), r.d(t, "y", (function() {
				return k
			})), r.d(t, "f", (function() {
				return j
			})), r.d(t, "g", (function() {
				return x
			})), r.d(t, "i", (function() {
				return v
			})), r.d(t, "k", (function() {
				return w
			})), r.d(t, "j", (function() {
				return C
			})), r.d(t, "m", (function() {
				return I
			})), r.d(t, "e", (function() {
				return S
			})), r.d(t, "d", (function() {
				return M
			}));
			var n = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				a = r("./src/lib/initializeClient/installReducer.ts"),
				d = r("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(a.a)({
				features: {
					goldPurchase: d.a
				}
			});
			const i = e => e.features.goldPurchase.purchaseModal.activePage,
				o = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				s = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				c = e => e.features.goldPurchase.purchaseModal.showModal,
				u = e => e.features.goldPurchase.purchaseModal.packageId,
				l = e => e.features.goldPurchase.packageOfferModal.packageId,
				p = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				f = e => {
					const t = Object(n.l)(e),
						r = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && r && t.find(e => e.mobileId === r) || null
				},
				g = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				m = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				b = e => e.features.goldPurchase.payment.paymentMethod,
				h = e => e.features.goldPurchase.payment.cardName,
				_ = e => e.features.goldPurchase.payment.postalCode,
				y = e => e.features.goldPurchase.payment.savedCardsPending,
				P = e => e.features.goldPurchase.payment.savedCards,
				O = e => e.features.goldPurchase.payment.rememberCard,
				k = e => e.features.goldPurchase.payment.useSavedCard,
				j = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				x = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				v = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				w = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				C = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Premium.935d10cb0e2a45a2a82e.js.map