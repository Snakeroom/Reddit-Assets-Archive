// https://www.redditstatic.com/desktop2x/Premium.83911e3fba706c36fe3c.js
// Retrieved at 12/13/2021, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Premium"], {
		"./src/reddit/endpoints/gold/productCatalog/index.ts": function(e, r, n) {
			"use strict";
			n.d(r, "b", (function() {
				return _
			})), n.d(r, "c", (function() {
				return y
			})), n.d(r, "d", (function() {
				return O
			})), n.d(r, "a", (function() {
				return j
			}));
			var t = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/redditGQL/operations/ClaimAwardOffer.json"),
				s = n("./src/redditGQL/operations/FetchSpecialEvents.json"),
				c = n("./src/reddit/constants/headers.ts"),
				u = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				l = n("./src/reddit/endpoints/gold/purchase.ts");
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
				g = e => e.map(e => ({
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
				b = e => e ? {
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
					shouldUseCurrentOrigin: n
				}) => {
					const o = "/api/v2/gold/purchase_package_details",
						i = n && "undefined" != typeof window ? `${window.location.origin}${o}` : `${e.apiUrl}${o}`,
						s = Object(u.a)(i);
					return Object(a.a)(Object(d.a)(e, [c.a]), {
						method: t.jb.GET,
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
					coin_packages: n,
					deals: t,
					premium_packages: a
				} = e.body, o = {
					activeSaleConfig: b(r),
					coinPackages: f(n),
					dealCoinPackages: m(t),
					premiumPackages: g(a)
				};
				return {
					...e,
					body: o
				}
			}
			const y = async ({
				context: e,
				awardId: r,
				correlationId: n
			}) => {
				const o = `${e.apiUrl}/api/v2/gold/recommended_coin_package_details`,
					i = Object(u.a)(o);
				return Object(a.a)(Object(d.a)(e, [c.a]), {
					method: t.jb.GET,
					endpoint: i,
					data: {
						correlation_id: n,
						intended_award: r
					}
				}).then(l.c).then(P)
			};

			function P(e) {
				if (!e.ok) return e;
				const r = e.body,
					n = {
						coinPackages: f([r])
					};
				return {
					...e,
					body: n
				}
			}
			const O = e => Object(o.a)(e, {
					...s
				}),
				j = e => Object(o.a)(e, {
					...i,
					variables: {
						input: {
							offerId: "free_awards"
						}
					}
				})
		},
		"./src/reddit/endpoints/gold/purchase.ts": function(e, r, n) {
			"use strict";
			n.d(r, "c", (function() {
				return p
			})), n.d(r, "f", (function() {
				return f
			})), n.d(r, "e", (function() {
				return m
			})), n.d(r, "g", (function() {
				return g
			})), n.d(r, "h", (function() {
				return b
			})), n.d(r, "d", (function() {
				return _
			})), n.d(r, "i", (function() {
				return h
			})), n.d(r, "a", (function() {
				return y
			})), n.d(r, "b", (function() {
				return P
			}));
			var t = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/redditGQL/operations/ChangeStripePaymentMethod.json"),
				s = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = n("./src/reddit/helpers/genericServerError/index.ts"),
				l = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
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
					correlationId: n,
					offerContext: o,
					pennies: i,
					rememberCard: u,
					token: l,
					savedCardId: f
				}) => {
					const m = {
							token: l ? l.id : void 0,
							coins: e,
							offer_context: o,
							pennies: i,
							remember_card: u,
							card_id: f,
							correlation_id: n
						},
						g = `${r.apiUrl}/api/v2/gold/stripe/buy_coins`,
						b = Object(c.a)(g);
					return Object(a.a)(Object(d.a)(r, [s.a]), {
						method: t.jb.POST,
						endpoint: b,
						data: m
					}).then(p)
				}, m = async ({
					coins: e,
					context: r,
					correlationId: n,
					gildParams: o,
					isOldReddit: i,
					offerContext: u,
					pennies: l,
					rememberCard: f,
					thingId: m,
					token: g,
					savedCardId: b
				}) => {
					const {
						gildType: _,
						isAnonymous: h,
						message: y
					} = o, P = {
						token: g ? g.id : void 0,
						coins: e,
						offer_context: u,
						pennies: l,
						thing_id: m,
						gild_type: _,
						message: y ? y.trim() : "",
						is_anonymous: h,
						remember_card: f,
						card_id: b,
						correlation_id: n
					}, O = `${r.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, j = i ? O : Object(c.a)(O);
					return Object(a.a)(Object(d.a)(r, [s.a]), {
						method: t.jb.POST,
						endpoint: j,
						data: P
					}).then(p)
				}, g = async ({
					context: e,
					correlationId: r,
					gildParams: n,
					isOldReddit: o,
					pennies: i,
					rememberCard: u,
					thingId: l,
					token: f,
					savedCardId: m
				}) => {
					const {
						gildType: g,
						isAnonymous: b,
						message: _
					} = n, h = {
						token: f ? f.id : void 0,
						thing_id: l,
						award_id: g,
						message: _ ? _.trim() : "",
						is_anonymous: b,
						pennies: i,
						remember_card: u,
						card_id: m,
						correlation_id: r
					}, y = `${e.apiUrl}/api/v2/gold/stripe/buy_award`, P = o ? y : Object(c.a)(y);
					return Object(a.a)(Object(d.a)(e, [s.a]), {
						method: t.jb.POST,
						endpoint: P,
						data: h
					}).then(p)
				}, b = async ({
					context: e,
					correlationId: r,
					pennies: n,
					token: o
				}) => {
					const i = {
							token: o.id,
							pennies: n,
							correlation_id: r
						},
						u = `${e.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						l = Object(c.a)(u);
					return Object(a.a)(Object(d.a)(e, [s.a]), {
						method: t.jb.POST,
						endpoint: l,
						data: i
					}).then(p)
				}, _ = "paymentInfoUpdated", h = async e => {
					const {
						origin: r
					} = window.location, n = `${r}/settings/premium`, t = new URLSearchParams({
						[_]: "true"
					}), a = await Object(o.a)(e, {
						...i,
						variables: {
							successUrl: `${n}?${t}`,
							cancelUrl: `${n}`
						}
					});
					if (!a.ok) throw new Error("Unable to update payment information");
					return a.body.data.changeStripePaymentMethod.sessionId
				}, y = async (e, r) => {
					const n = {
						card_id: r
					};
					return Object(a.a)(Object(d.a)(e, [s.a]), {
						method: t.jb.POST,
						endpoint: `${e.apiUrl}/api/v2/gold/stripe/delete_creditcard`,
						data: n
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(l.a)(e)
					})
				}, P = async e => Object(a.a)(Object(d.a)(e, [s.a]), {
					method: t.jb.GET,
					endpoint: `${e.apiUrl}/api/v2/gold/stripe/creditcards`
				}).then(e => e.ok ? {
					...e
				} : {
					...e,
					error: Object(l.a)(e)
				})
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, r, n) {
			"use strict";
			n.d(r, "c", (function() {
				return t
			})), n.d(r, "e", (function() {
				return o
			})), n.d(r, "b", (function() {
				return d
			})), n.d(r, "a", (function() {
				return i
			})), n.d(r, "d", (function() {
				return s
			}));
			var t, a = n("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups", e.Premium = "premium"
			}(t || (t = {}));
			const o = {
				[t.Powerups]: () => a.fbt._("Reddit - Buy Powerups", null, {
					hk: "4sEI31"
				}),
				[t.Premium]: () => a.fbt._("Reddit - Buy Premium", null, {
					hk: "19EtMU"
				})
			};
			var d, i;
			! function(e) {
				e.Month = "MONTH", e.Year = "YEAR"
			}(d || (d = {})),
			function(e) {
				e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
			}(i || (i = {}));
			const s = (e, r) => {
				const n = e && e.dealInfo && e.dealInfo.type,
					t = "low_coin_upsell" === n,
					a = "new_purchaser" === n,
					o = "repeat_purchaser" === n;
				return r ? i.GildFlow : t ? i.LowCoinBalance : a ? i.NewUserTargetedOffer : o ? i.RepeatUserTargetedOffer : void 0
			}
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, r, n) {
			"use strict";
			n.d(r, "q", (function() {
				return d
			})), n.d(r, "s", (function() {
				return i
			})), n.d(r, "r", (function() {
				return s
			})), n.d(r, "u", (function() {
				return c
			})), n.d(r, "t", (function() {
				return u
			})), n.d(r, "b", (function() {
				return l
			})), n.d(r, "p", (function() {
				return p
			})), n.d(r, "a", (function() {
				return f
			})), n.d(r, "n", (function() {
				return m
			})), n.d(r, "o", (function() {
				return g
			})), n.d(r, "c", (function() {
				return b
			})), n.d(r, "h", (function() {
				return _
			})), n.d(r, "l", (function() {
				return h
			})), n.d(r, "w", (function() {
				return y
			})), n.d(r, "x", (function() {
				return P
			})), n.d(r, "v", (function() {
				return O
			})), n.d(r, "y", (function() {
				return j
			})), n.d(r, "f", (function() {
				return w
			})), n.d(r, "g", (function() {
				return k
			})), n.d(r, "i", (function() {
				return v
			})), n.d(r, "k", (function() {
				return x
			})), n.d(r, "j", (function() {
				return C
			})), n.d(r, "m", (function() {
				return I
			})), n.d(r, "e", (function() {
				return S
			})), n.d(r, "d", (function() {
				return M
			}));
			var t = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				a = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(a.a)({
				features: {
					goldPurchase: o.a
				}
			});
			const d = e => e.features.goldPurchase.purchaseModal.activePage,
				i = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				s = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				c = e => e.features.goldPurchase.purchaseModal.showModal,
				u = e => e.features.goldPurchase.purchaseModal.packageId,
				l = e => e.features.goldPurchase.packageOfferModal.packageId,
				p = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				f = e => {
					const r = Object(t.l)(e),
						n = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return r.length && n && r.find(e => e.mobileId === n) || null
				},
				m = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				g = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				b = e => e.features.goldPurchase.payment.paymentMethod,
				_ = e => e.features.goldPurchase.payment.cardName,
				h = e => e.features.goldPurchase.payment.postalCode,
				y = e => e.features.goldPurchase.payment.savedCardsPending,
				P = e => e.features.goldPurchase.payment.savedCards,
				O = e => e.features.goldPurchase.payment.rememberCard,
				j = e => e.features.goldPurchase.payment.useSavedCard,
				w = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				k = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				v = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				x = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Premium.83911e3fba706c36fe3c.js.map