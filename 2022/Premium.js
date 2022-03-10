// https://www.redditstatic.com/desktop2x/Premium.f02717d042f612fd4a63.js
// Retrieved at 3/10/2022, 11:20:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Premium"], {
		"./src/reddit/endpoints/gold/productCatalog/old.index.ts": function(e, r, t) {
			"use strict";
			t.d(r, "b", (function() {
				return h
			})), t.d(r, "c", (function() {
				return y
			})), t.d(r, "d", (function() {
				return O
			})), t.d(r, "a", (function() {
				return j
			}));
			var n = t("./src/lib/constants/index.ts"),
				a = t("./src/lib/makeApiRequest/index.ts"),
				d = t("./src/lib/makeGqlRequest/index.ts"),
				i = t("./src/lib/omitHeaders/index.ts"),
				o = t("./src/redditGQL/operations/ClaimAwardOffer.json"),
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
				h = async ({
					context: e,
					correlationId: r,
					shouldUseCurrentOrigin: t
				}) => {
					const d = "/api/v2/gold/purchase_package_details",
						o = t && "undefined" != typeof window ? `${window.location.origin}${d}` : `${e.apiUrl}${d}`,
						s = Object(u.a)(o);
					return Object(a.a)(Object(i.a)(e, [c.a]), {
						method: n.jb.GET,
						endpoint: s,
						data: {
							correlation_id: r
						}
					}).then(l.c).then(_)
				};

			function _(e) {
				if (!e.ok) return e;
				const {
					active_sale: r,
					coin_packages: t,
					deals: n,
					premium_packages: a
				} = e.body, d = {
					activeSaleConfig: b(r),
					coinPackages: f(t),
					dealCoinPackages: g(n),
					premiumPackages: m(a)
				};
				return {
					...e,
					body: d
				}
			}
			const y = async ({
				context: e,
				awardId: r,
				correlationId: t
			}) => {
				const d = `${e.apiUrl}/api/v2/gold/recommended_coin_package_details`,
					o = Object(u.a)(d);
				return Object(a.a)(Object(i.a)(e, [c.a]), {
					method: n.jb.GET,
					endpoint: o,
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
			const O = e => Object(d.a)(e, {
					...s
				}),
				j = e => Object(d.a)(e, {
					...o,
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
				return g
			})), t.d(r, "g", (function() {
				return m
			})), t.d(r, "h", (function() {
				return b
			})), t.d(r, "d", (function() {
				return h
			})), t.d(r, "i", (function() {
				return _
			})), t.d(r, "a", (function() {
				return y
			})), t.d(r, "b", (function() {
				return P
			}));
			var n = t("./src/lib/constants/index.ts"),
				a = t("./src/lib/makeApiRequest/index.ts"),
				d = t("./src/lib/makeGqlRequest/index.ts"),
				i = t("./src/lib/omitHeaders/index.ts"),
				o = t("./src/redditGQL/operations/ChangeStripePaymentMethod.json"),
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
					offerContext: d,
					pennies: o,
					rememberCard: u,
					token: l,
					savedCardId: f
				}) => {
					const g = {
							token: l ? l.id : void 0,
							coins: e,
							offer_context: d,
							pennies: o,
							remember_card: u,
							card_id: f,
							correlation_id: t
						},
						m = `${r.apiUrl}/api/v2/gold/stripe/buy_coins`,
						b = Object(c.a)(m);
					return Object(a.a)(Object(i.a)(r, [s.a]), {
						method: n.jb.POST,
						endpoint: b,
						data: g
					}).then(p)
				}, g = async ({
					coins: e,
					context: r,
					correlationId: t,
					gildParams: d,
					isOldReddit: o,
					offerContext: u,
					pennies: l,
					rememberCard: f,
					thingId: g,
					token: m,
					savedCardId: b
				}) => {
					const {
						gildType: h,
						isAnonymous: _,
						message: y
					} = d, P = {
						token: m ? m.id : void 0,
						coins: e,
						offer_context: u,
						pennies: l,
						thing_id: g,
						gild_type: h,
						message: y ? y.trim() : "",
						is_anonymous: _,
						remember_card: f,
						card_id: b,
						correlation_id: t
					}, O = `${r.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, j = o ? O : Object(c.a)(O);
					return Object(a.a)(Object(i.a)(r, [s.a]), {
						method: n.jb.POST,
						endpoint: j,
						data: P
					}).then(p)
				}, m = async ({
					context: e,
					correlationId: r,
					gildParams: t,
					isOldReddit: d,
					pennies: o,
					rememberCard: u,
					thingId: l,
					token: f,
					savedCardId: g
				}) => {
					const {
						gildType: m,
						isAnonymous: b,
						message: h
					} = t, _ = {
						token: f ? f.id : void 0,
						thing_id: l,
						award_id: m,
						message: h ? h.trim() : "",
						is_anonymous: b,
						pennies: o,
						remember_card: u,
						card_id: g,
						correlation_id: r
					}, y = `${e.apiUrl}/api/v2/gold/stripe/buy_award`, P = d ? y : Object(c.a)(y);
					return Object(a.a)(Object(i.a)(e, [s.a]), {
						method: n.jb.POST,
						endpoint: P,
						data: _
					}).then(p)
				}, b = async ({
					context: e,
					correlationId: r,
					pennies: t,
					token: d
				}) => {
					const o = {
							token: d.id,
							pennies: t,
							correlation_id: r
						},
						u = `${e.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						l = Object(c.a)(u);
					return Object(a.a)(Object(i.a)(e, [s.a]), {
						method: n.jb.POST,
						endpoint: l,
						data: o
					}).then(p)
				}, h = "paymentInfoUpdated", _ = async e => {
					const {
						origin: r
					} = window.location, t = `${r}/settings/premium`, n = new URLSearchParams({
						[h]: "true"
					}), a = await Object(d.a)(e, {
						...o,
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
					return Object(a.a)(Object(i.a)(e, [s.a]), {
						method: n.jb.POST,
						endpoint: `${e.apiUrl}/api/v2/gold/stripe/delete_creditcard`,
						data: t
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(l.a)(e)
					})
				}, P = async e => Object(a.a)(Object(i.a)(e, [s.a]), {
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
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, r, t) {
			"use strict";
			t.d(r, "q", (function() {
				return i
			})), t.d(r, "s", (function() {
				return o
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
				return g
			})), t.d(r, "o", (function() {
				return m
			})), t.d(r, "c", (function() {
				return b
			})), t.d(r, "h", (function() {
				return h
			})), t.d(r, "l", (function() {
				return _
			})), t.d(r, "w", (function() {
				return y
			})), t.d(r, "x", (function() {
				return P
			})), t.d(r, "v", (function() {
				return O
			})), t.d(r, "y", (function() {
				return j
			})), t.d(r, "f", (function() {
				return x
			})), t.d(r, "g", (function() {
				return k
			})), t.d(r, "i", (function() {
				return v
			})), t.d(r, "k", (function() {
				return w
			})), t.d(r, "j", (function() {
				return C
			})), t.d(r, "m", (function() {
				return I
			})), t.d(r, "e", (function() {
				return S
			})), t.d(r, "d", (function() {
				return M
			}));
			var n = t("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				a = t("./src/lib/initializeClient/installReducer.ts"),
				d = t("./src/reddit/reducers/features/goldPurchase/index.ts");
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
					const r = Object(n.l)(e),
						t = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return r.length && t && r.find(e => e.mobileId === t) || null
				},
				g = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				m = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				b = e => e.features.goldPurchase.payment.paymentMethod,
				h = e => e.features.goldPurchase.payment.cardName,
				_ = e => e.features.goldPurchase.payment.postalCode,
				y = e => e.features.goldPurchase.payment.savedCardsPending,
				P = e => e.features.goldPurchase.payment.savedCards,
				O = e => e.features.goldPurchase.payment.rememberCard,
				j = e => e.features.goldPurchase.payment.useSavedCard,
				x = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				k = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Premium.f02717d042f612fd4a63.js.map