// https://www.redditstatic.com/desktop2x/Premium.4ff86238fb939b3c6a8c.js
// Retrieved at 1/18/2022, 10:40:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Premium"], {
		"./src/reddit/endpoints/gold/productCatalog/index.ts": function(e, r, t) {
			"use strict";
			t.d(r, "b", (function() {
				return _
			})), t.d(r, "c", (function() {
				return y
			})), t.d(r, "d", (function() {
				return O
			})), t.d(r, "a", (function() {
				return w
			}));
			var n = t("./src/lib/constants/index.ts"),
				a = t("./src/lib/makeApiRequest/index.ts"),
				i = t("./src/lib/makeGqlRequest/index.ts"),
				o = t("./src/lib/omitHeaders/index.ts"),
				d = t("./src/redditGQL/operations/ClaimAwardOffer.json"),
				s = t("./src/redditGQL/operations/FetchSpecialEvents.json"),
				c = t("./src/reddit/constants/headers.ts"),
				u = t("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				l = t("./src/reddit/endpoints/gold/purchase.ts");
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
				m = e => e.map(e => {
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
				b = e => e.map(e => ({
					defaultSignupBonusCoins: e.default_signup_bonus_coins,
					bonusPct: e.bonus_pct,
					description: e.description,
					frequency: e.frequency,
					frequencyDays: e.frequency_days,
					images: {
						marketing: e.images.marketing,
						purchaseSuccess: e.images.purchase_success
					},
					mobileId: e.mobile_id,
					mobilePennies: e.mobile_pennies,
					paypalButtonId: e.paypal_button_id,
					pennies: e.pennies,
					periodicalCoins: e.periodical_coins,
					signupBonusCoins: e.signup_bonus_coins
				})),
				g = e => e ? {
					ctaText: e.cta_text,
					dropdownHeaderText: e.dropdown_banner_text,
					dropdownHeaderBackgroundAsset: e.dropdown_banner_image_url,
					endsAt: e.ends_at,
					heroImageUrl: e.hero_image_url,
					heroSubtext: e.hero_subtext,
					heroText: e.hero_text
				} : null,
				_ = async ({
					context: e,
					correlationId: r,
					shouldUseCurrentOrigin: t
				}) => {
					const i = "/api/v2/gold/purchase_package_details",
						d = t && "undefined" != typeof window ? `${window.location.origin}${i}` : `${e.apiUrl}${i}`,
						s = Object(u.a)(d);
					return Object(a.a)(Object(o.a)(e, [c.a]), {
						method: n.jb.GET,
						endpoint: s,
						data: {
							correlation_id: r
						}
					}).then(l.c).then(h)
				};

			function h(e) {
				if (!e.ok) return e;
				const {
					active_sale: r,
					coin_packages: t,
					deals: n,
					premium_packages: a
				} = e.body, i = {
					activeSaleConfig: g(r),
					coinPackages: f(t),
					dealCoinPackages: m(n),
					premiumPackages: b(a)
				};
				return {
					...e,
					body: i
				}
			}
			const y = async ({
				context: e,
				awardId: r,
				correlationId: t
			}) => {
				const i = `${e.apiUrl}/api/v2/gold/recommended_coin_package_details`,
					d = Object(u.a)(i);
				return Object(a.a)(Object(o.a)(e, [c.a]), {
					method: n.jb.GET,
					endpoint: d,
					data: {
						correlation_id: t,
						intended_award: r
					}
				}).then(l.c).then(P)
			};

			function P(e) {
				if (!e.ok) return e;
				const r = e.body,
					t = {
						coinPackages: f([r])
					};
				return {
					...e,
					body: t
				}
			}
			const O = e => Object(i.a)(e, {
					...s
				}),
				w = e => Object(i.a)(e, {
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
			t.d(r, "c", (function() {
				return p
			})), t.d(r, "f", (function() {
				return f
			})), t.d(r, "e", (function() {
				return m
			})), t.d(r, "g", (function() {
				return b
			})), t.d(r, "h", (function() {
				return g
			})), t.d(r, "d", (function() {
				return _
			})), t.d(r, "i", (function() {
				return h
			})), t.d(r, "a", (function() {
				return y
			})), t.d(r, "b", (function() {
				return P
			}));
			var n = t("./src/lib/constants/index.ts"),
				a = t("./src/lib/makeApiRequest/index.ts"),
				i = t("./src/lib/makeGqlRequest/index.ts"),
				o = t("./src/lib/omitHeaders/index.ts"),
				d = t("./src/redditGQL/operations/ChangeStripePaymentMethod.json"),
				s = t("./src/reddit/constants/headers.ts"),
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
				f = async ({
					coins: e,
					context: r,
					correlationId: t,
					offerContext: i,
					pennies: d,
					rememberCard: u,
					token: l,
					savedCardId: f
				}) => {
					const m = {
							token: l ? l.id : void 0,
							coins: e,
							offer_context: i,
							pennies: d,
							remember_card: u,
							card_id: f,
							correlation_id: t
						},
						b = `${r.apiUrl}/api/v2/gold/stripe/buy_coins`,
						g = Object(c.a)(b);
					return Object(a.a)(Object(o.a)(r, [s.a]), {
						method: n.jb.POST,
						endpoint: g,
						data: m
					}).then(p)
				}, m = async ({
					coins: e,
					context: r,
					correlationId: t,
					gildParams: i,
					isOldReddit: d,
					offerContext: u,
					pennies: l,
					rememberCard: f,
					thingId: m,
					token: b,
					savedCardId: g
				}) => {
					const {
						gildType: _,
						isAnonymous: h,
						message: y
					} = i, P = {
						token: b ? b.id : void 0,
						coins: e,
						offer_context: u,
						pennies: l,
						thing_id: m,
						gild_type: _,
						message: y ? y.trim() : "",
						is_anonymous: h,
						remember_card: f,
						card_id: g,
						correlation_id: t
					}, O = `${r.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, w = d ? O : Object(c.a)(O);
					return Object(a.a)(Object(o.a)(r, [s.a]), {
						method: n.jb.POST,
						endpoint: w,
						data: P
					}).then(p)
				}, b = async ({
					context: e,
					correlationId: r,
					gildParams: t,
					isOldReddit: i,
					pennies: d,
					rememberCard: u,
					thingId: l,
					token: f,
					savedCardId: m
				}) => {
					const {
						gildType: b,
						isAnonymous: g,
						message: _
					} = t, h = {
						token: f ? f.id : void 0,
						thing_id: l,
						award_id: b,
						message: _ ? _.trim() : "",
						is_anonymous: g,
						pennies: d,
						remember_card: u,
						card_id: m,
						correlation_id: r
					}, y = `${e.apiUrl}/api/v2/gold/stripe/buy_award`, P = i ? y : Object(c.a)(y);
					return Object(a.a)(Object(o.a)(e, [s.a]), {
						method: n.jb.POST,
						endpoint: P,
						data: h
					}).then(p)
				}, g = async ({
					context: e,
					correlationId: r,
					pennies: t,
					token: i
				}) => {
					const d = {
							token: i.id,
							pennies: t,
							correlation_id: r
						},
						u = `${e.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						l = Object(c.a)(u);
					return Object(a.a)(Object(o.a)(e, [s.a]), {
						method: n.jb.POST,
						endpoint: l,
						data: d
					}).then(p)
				}, _ = "paymentInfoUpdated", h = async e => {
					const {
						origin: r
					} = window.location, t = `${r}/settings/premium`, n = new URLSearchParams({
						[_]: "true"
					}), a = await Object(i.a)(e, {
						...d,
						variables: {
							successUrl: `${t}?${n}`,
							cancelUrl: `${t}`
						}
					});
					if (!a.ok) throw new Error("Unable to update payment information");
					return a.body.data.changeStripePaymentMethod.sessionId
				}, y = async (e, r) => {
					const t = {
						card_id: r
					};
					return Object(a.a)(Object(o.a)(e, [s.a]), {
						method: n.jb.POST,
						endpoint: `${e.apiUrl}/api/v2/gold/stripe/delete_creditcard`,
						data: t
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(l.a)(e)
					})
				}, P = async e => Object(a.a)(Object(o.a)(e, [s.a]), {
					method: n.jb.GET,
					endpoint: `${e.apiUrl}/api/v2/gold/stripe/creditcards`
				}).then(e => e.ok ? {
					...e
				} : {
					...e,
					error: Object(l.a)(e)
				})
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, r, t) {
			"use strict";
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				a = t("./src/lib/constants/index.ts");
			r.a = () => ({
				type: a.I.SERVER_ERROR,
				fields: [{
					field: "",
					msg: n.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, r, t) {
			"use strict";
			t.d(r, "c", (function() {
				return n
			})), t.d(r, "e", (function() {
				return i
			})), t.d(r, "b", (function() {
				return o
			})), t.d(r, "a", (function() {
				return d
			})), t.d(r, "d", (function() {
				return s
			}));
			var n, a = t("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups", e.Premium = "premium"
			}(n || (n = {}));
			const i = {
				[n.Powerups]: () => a.fbt._("Reddit - Buy Powerups", null, {
					hk: "4sEI31"
				}),
				[n.Premium]: () => a.fbt._("Reddit - Buy Premium", null, {
					hk: "19EtMU"
				})
			};
			var o, d;
			! function(e) {
				e.Month = "MONTH", e.Year = "YEAR"
			}(o || (o = {})),
			function(e) {
				e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
			}(d || (d = {}));
			const s = (e, r) => {
				const t = e && e.dealInfo && e.dealInfo.type,
					n = "low_coin_upsell" === t,
					a = "new_purchaser" === t,
					i = "repeat_purchaser" === t;
				return r ? d.GildFlow : n ? d.LowCoinBalance : a ? d.NewUserTargetedOffer : i ? d.RepeatUserTargetedOffer : void 0
			}
		},
		"./src/reddit/models/Payments/index.ts": function(e, r, t) {
			"use strict";
			var n, a, i, o;
			t.d(r, "b", (function() {
					return a
				})), t.d(r, "a", (function() {
					return i
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(a || (a = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(i || (i = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(o || (o = {}))
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, r, t) {
			"use strict";
			t.d(r, "q", (function() {
				return o
			})), t.d(r, "s", (function() {
				return d
			})), t.d(r, "r", (function() {
				return s
			})), t.d(r, "u", (function() {
				return c
			})), t.d(r, "t", (function() {
				return u
			})), t.d(r, "b", (function() {
				return l
			})), t.d(r, "p", (function() {
				return p
			})), t.d(r, "a", (function() {
				return f
			})), t.d(r, "n", (function() {
				return m
			})), t.d(r, "o", (function() {
				return b
			})), t.d(r, "c", (function() {
				return g
			})), t.d(r, "h", (function() {
				return _
			})), t.d(r, "l", (function() {
				return h
			})), t.d(r, "w", (function() {
				return y
			})), t.d(r, "x", (function() {
				return P
			})), t.d(r, "v", (function() {
				return O
			})), t.d(r, "y", (function() {
				return w
			})), t.d(r, "f", (function() {
				return j
			})), t.d(r, "g", (function() {
				return v
			})), t.d(r, "i", (function() {
				return k
			})), t.d(r, "k", (function() {
				return x
			})), t.d(r, "j", (function() {
				return C
			})), t.d(r, "m", (function() {
				return S
			})), t.d(r, "e", (function() {
				return I
			})), t.d(r, "d", (function() {
				return R
			}));
			var n = t("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				a = t("./src/lib/initializeClient/installReducer.ts"),
				i = t("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(a.a)({
				features: {
					goldPurchase: i.a
				}
			});
			const o = e => e.features.goldPurchase.purchaseModal.activePage,
				d = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				s = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				c = e => e.features.goldPurchase.purchaseModal.showModal,
				u = e => e.features.goldPurchase.purchaseModal.packageId,
				l = e => e.features.goldPurchase.packageOfferModal.packageId,
				p = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				f = e => {
					const r = Object(n.l)(e),
						t = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return r.length && t && r.find(e => e.mobileId === t) || null
				},
				m = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				b = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				g = e => e.features.goldPurchase.payment.paymentMethod,
				_ = e => e.features.goldPurchase.payment.cardName,
				h = e => e.features.goldPurchase.payment.postalCode,
				y = e => e.features.goldPurchase.payment.savedCardsPending,
				P = e => e.features.goldPurchase.payment.savedCards,
				O = e => e.features.goldPurchase.payment.rememberCard,
				w = e => e.features.goldPurchase.payment.useSavedCard,
				j = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				v = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				k = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				x = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				C = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				S = e => e.features.goldPurchase.payment.stripeToken.pending,
				I = e => e.features.goldPurchase.payment.paypal.passthrough,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Premium.4ff86238fb939b3c6a8c.js.map