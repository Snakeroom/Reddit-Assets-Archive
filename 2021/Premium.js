// https://www.redditstatic.com/desktop2x/Premium.d82f46df3456dee9a6a0.js
// Retrieved at 9/15/2021, 5:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Premium"], {
		"./src/reddit/controls/Button/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "_2iuoyPiKHN3kfOoeIQalDT",
				button: "_2iuoyPiKHN3kfOoeIQalDT",
				isFullWidth: "_34mIRHpFtnJ0Sk97S2Z3D9",
				xxsmallButtonStyles: "_1h6qKGhVsgNfytYFlo8m3f",
				Icon: "_1mvTX6krm3Q2d1CSyUm28s",
				icon: "_1mvTX6krm3Q2d1CSyUm28s",
				isLeft: "_1HHR_ND8U6x6YrIqKFeXZy",
				isRight: "_3tKmDp5VAtgWvabEmFkJ7T",
				xsmallButtonStyles: "_3uJP0daPEH2plzVEYyTdaH",
				smallButtonStyles: "HNozj_dKjQZ59ZsfEegz8",
				mediumButtonStyles: "_3ukcnQySDskQwK_wB2iXYl",
				largeButtonStyles: "_1J4mN6_wNfCtSyMDUNGQqN",
				xlargeButtonStyles: "XpD6n11mOiKNg8ZKtvgVR",
				primary: "_10BQ7pjWbeYP63SAPNS8Ts",
				active: "_39a0Mt5b1i2joAqIaEHOWJ",
				redditStyle: "_2nelDm85zKKmuD94NequP0",
				DangerButtonColors: "_1t63zWyh9UUgsyQc6acROM",
				dangerButtonColors: "_1t63zWyh9UUgsyQc6acROM",
				GoldButtonColors: "_10UWrWSil1Xu6pdSaa_3-K",
				goldButtonColors: "_10UWrWSil1Xu6pdSaa_3-K",
				PremiumButtonColors: "q_unSaY23rpdd3lDvGZ-",
				premiumButtonColors: "q_unSaY23rpdd3lDvGZ-",
				secondary: "_2tU8R9NTqhvBrhoNAXWWcP",
				tertiary: "_4Glnzr5LA7bNBGMWGW4pU",
				plain: "_3zbhtNO0bdck0oYbYRhjMC",
				isIconOnly: "_1tPpYVD73ugqp4k-VMFRki",
				isSquare: "_3ojSE1JW7jxNzUzZK8kt7m",
				ExtraSmallBaseButton: "_2v8rCfSRT4mr5y4pwEhX41",
				extraSmallBaseButton: "_2v8rCfSRT4mr5y4pwEhX41",
				InlineTextButton: "_3kfXQpuyMJIMeWQCwjZKfw",
				inlineTextButton: "_3kfXQpuyMJIMeWQCwjZKfw",
				ChatButton: "_13twe55MPRo1LqypxB-LJx",
				chatButton: "_13twe55MPRo1LqypxB-LJx",
				PlainLinkButton: "_2UhHcZFBOYxMULbf2p-skl",
				plainLinkButton: "_2UhHcZFBOYxMULbf2p-skl"
			}
		},
		"./src/reddit/controls/Button/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "m", (function() {
				return P
			})), n.d(t, "k", (function() {
				return k
			})), n.d(t, "o", (function() {
				return x
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "n", (function() {
				return S
			})), n.d(t, "r", (function() {
				return B
			})), n.d(t, "q", (function() {
				return j
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "j", (function() {
				return I
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "i", (function() {
				return E
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				s = n("./src/reddit/controls/Button/index.m.less"),
				d = n.n(s);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const u = {
				role: "button",
				tabIndex: 0
			};
			var l, p, m, f;
			! function(e) {
				e.XXS = "xxsmallButtonStyles", e.XS = "xsmallButtonStyles", e.S = "smallButtonStyles", e.M = "mediumButtonStyles", e.L = "largeButtonStyles", e.XL = "xlargeButtonStyles"
			}(l || (l = {})),
			function(e) {
				e.Primary = "primary", e.Secondary = "secondary", e.Tertiary = "tertiary", e.Plain = "plain"
			}(p || (p = {})),
			function(e) {
				e.L = "left", e.R = "right", e.C = "center"
			}(m || (m = {})),
			function(e) {
				e.Button = "button", e.ExternalLink = "external-link", e.InternalLink = "internal-link"
			}(f || (f = {}));
			const y = e => {
					const {
						"data-redditstyle": t,
						Icon: n,
						iconClassName: r,
						iconPosition: o = m.C,
						isFullWidth: s = !1,
						isSquare: y = !1,
						children: h,
						className: P,
						kind: k = f.Button,
						priority: x = p.Primary,
						redditStyle: O,
						size: S = l.S,
						text: B,
						textClassName: j,
						...C
					} = e, w = (({
						baseClassName: e,
						redditStyle: t,
						dataRedditStyle: n,
						Icon: r,
						isFullWidth: a,
						isSquare: o,
						priority: s,
						size: c,
						text: u
					}) => Object(i.a)(e, d.a.Button, s && d.a[s], c && d.a[c], {
						[d.a.isFullWidth]: a,
						[d.a.isIconOnly]: !!r && !u,
						[d.a.isSquare]: o,
						[d.a.redditStyle]: !(!t && !n)
					}))({
						baseClassName: P,
						children: h,
						dataRedditStyle: t,
						Icon: n,
						isFullWidth: s,
						isSquare: y,
						priority: x,
						redditStyle: O,
						size: S,
						text: B
					}), I = (({
						children: e,
						text: t,
						Icon: n,
						iconClassName: r,
						iconPosition: o,
						priority: s,
						textClassName: c
					}) => !n && t ? a.a.createElement("span", {
						className: c
					}, t) : a.a.createElement(a.a.Fragment, null, n && (o === m.C || o === m.L) && a.a.createElement(n, {
						className: Object(i.a)(d.a.Icon, r, {
							[d.a.isLeft]: o === m.L
						}),
						isFilled: s === p.Primary
					}), t && a.a.createElement("span", {
						className: Object(i.a)(d.a.Text, c)
					}, t), e && e, n && o === m.R && a.a.createElement(n, {
						className: Object(i.a)(d.a.Icon, r, d.a.isRight),
						isFilled: s === p.Primary
					})))({
						children: h,
						text: B,
						Icon: n,
						iconClassName: r,
						iconPosition: o,
						priority: x,
						textClassName: j
					});
					return k === f.InternalLink && (e => "to" in e)(C) ? a.a.createElement(_, c({}, u, C, {
						className: w
					}), I) : k === f.ExternalLink && (e => "href" in e)(C) ? a.a.createElement(b, c({}, u, C, {
						className: w
					}), I) : a.a.createElement(g, c({}, u, C, {
						className: w
					}), I)
				},
				_ = e => a.a.createElement(o.a, e),
				b = e => a.a.createElement("a", e),
				g = e => a.a.createElement("button", e),
				h = e => a.a.createElement(y, c({
					kind: f.ExternalLink,
					priority: p.Primary
				}, e)),
				P = e => a.a.createElement(y, c({
					kind: f.InternalLink,
					priority: p.Primary
				}, e)),
				k = e => a.a.createElement(y, c({
					kind: f.Button,
					priority: p.Primary
				}, e)),
				x = e => a.a.createElement(y, c({
					kind: f.ExternalLink,
					priority: p.Secondary
				}, e)),
				O = e => a.a.createElement(y, c({
					kind: f.InternalLink,
					priority: p.Secondary
				}, e)),
				S = e => a.a.createElement(y, c({
					kind: f.Button,
					priority: p.Secondary
				}, e)),
				B = e => a.a.createElement(y, c({
					kind: f.InternalLink,
					priority: p.Plain
				}, e)),
				j = e => a.a.createElement(y, c({
					kind: f.Button,
					priority: p.Plain
				}, e)),
				C = ({
					className: e,
					...t
				}) => a.a.createElement(y, c({
					kind: f.Button,
					priority: p.Primary,
					className: Object(i.a)(e, d.a.DangerButtonColors)
				}, t)),
				w = ({
					className: e,
					...t
				}) => a.a.createElement(y, c({
					kind: f.Button,
					className: Object(i.a)(e, d.a.GoldButtonColors)
				}, t)),
				I = ({
					className: e,
					...t
				}) => a.a.createElement(y, c({
					kind: f.Button,
					className: Object(i.a)(e, d.a.PremiumButtonColors)
				}, t)),
				N = ({
					className: e,
					...t
				}) => a.a.createElement(y, c({
					kind: f.Button,
					className: Object(i.a)(e, d.a.ChatButton)
				}, t)),
				v = ({
					className: e,
					...t
				}) => a.a.createElement(y, c({
					kind: f.Button,
					className: Object(i.a)(e, d.a.InlineTextButton)
				}, t)),
				E = ({
					className: e,
					...t
				}) => a.a.createElement(y, c({
					kind: f.Button,
					className: Object(i.a)(e, d.a.PlainLinkButton)
				}, t));
			t.s = y
		},
		"./src/reddit/endpoints/gold/productCatalog/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "a", (function() {
				return x
			}));
			var r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				s = n("./src/redditGQL/operations/ClaimAwardOffer.json"),
				d = n("./src/redditGQL/operations/FetchSpecialEvents.json"),
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
				m = e => e.map(p),
				f = e => e.map(e => {
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
				y = e => e.map(e => ({
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
				_ = e => e ? {
					ctaText: e.cta_text,
					dropdownHeaderText: e.dropdown_banner_text,
					dropdownHeaderBackgroundAsset: e.dropdown_banner_image_url,
					endsAt: e.ends_at,
					heroImageUrl: e.hero_image_url,
					heroSubtext: e.hero_subtext,
					heroText: e.hero_text
				} : null,
				b = async ({
					context: e,
					correlationId: t,
					shouldUseCurrentOrigin: n
				}) => {
					const i = "/api/v2/gold/purchase_package_details",
						s = n && "undefined" != typeof window ? `${window.location.origin}${i}` : `${e.apiUrl}${i}`,
						d = Object(u.a)(s);
					return Object(a.a)(Object(o.a)(e, [c.a]), {
						method: r.ib.GET,
						endpoint: d,
						data: {
							correlation_id: t
						}
					}).then(l.c).then(g)
				};

			function g(e) {
				if (!e.ok) return e;
				const {
					active_sale: t,
					coin_packages: n,
					deals: r,
					premium_packages: a
				} = e.body, i = {
					activeSaleConfig: _(t),
					coinPackages: m(n),
					dealCoinPackages: f(r),
					premiumPackages: y(a)
				};
				return {
					...e,
					body: i
				}
			}
			const h = async ({
				context: e,
				awardId: t,
				correlationId: n
			}) => {
				const i = `${e.apiUrl}/api/v2/gold/recommended_coin_package_details`,
					s = Object(u.a)(i);
				return Object(a.a)(Object(o.a)(e, [c.a]), {
					method: r.ib.GET,
					endpoint: s,
					data: {
						correlation_id: n,
						intended_award: t
					}
				}).then(l.c).then(P)
			};

			function P(e) {
				if (!e.ok) return e;
				const t = e.body,
					n = {
						coinPackages: m([t])
					};
				return {
					...e,
					body: n
				}
			}
			const k = e => Object(i.a)(e, {
					...d
				}),
				x = e => Object(i.a)(e, {
					...s,
					variables: {
						input: {
							offerId: "free_awards"
						}
					}
				})
		},
		"./src/reddit/endpoints/gold/purchase.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return p
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "b", (function() {
				return P
			}));
			var r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				s = n("./src/redditGQL/operations/ChangeStripePaymentMethod.json"),
				d = n("./src/reddit/constants/headers.ts"),
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
				m = async ({
					coins: e,
					context: t,
					correlationId: n,
					offerContext: i,
					pennies: s,
					rememberCard: u,
					token: l,
					savedCardId: m
				}) => {
					const f = {
							token: l ? l.id : void 0,
							coins: e,
							offer_context: i,
							pennies: s,
							remember_card: u,
							card_id: m,
							correlation_id: n
						},
						y = `${t.apiUrl}/api/v2/gold/stripe/buy_coins`,
						_ = Object(c.a)(y);
					return Object(a.a)(Object(o.a)(t, [d.a]), {
						method: r.ib.POST,
						endpoint: _,
						data: f
					}).then(p)
				}, f = async ({
					coins: e,
					context: t,
					correlationId: n,
					gildParams: i,
					isOldReddit: s,
					offerContext: u,
					pennies: l,
					rememberCard: m,
					thingId: f,
					token: y,
					savedCardId: _
				}) => {
					const {
						gildType: b,
						isAnonymous: g,
						message: h
					} = i, P = {
						token: y ? y.id : void 0,
						coins: e,
						offer_context: u,
						pennies: l,
						thing_id: f,
						gild_type: b,
						message: h ? h.trim() : "",
						is_anonymous: g,
						remember_card: m,
						card_id: _,
						correlation_id: n
					}, k = `${t.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, x = s ? k : Object(c.a)(k);
					return Object(a.a)(Object(o.a)(t, [d.a]), {
						method: r.ib.POST,
						endpoint: x,
						data: P
					}).then(p)
				}, y = async ({
					context: e,
					correlationId: t,
					gildParams: n,
					isOldReddit: i,
					pennies: s,
					rememberCard: u,
					thingId: l,
					token: m,
					savedCardId: f
				}) => {
					const {
						gildType: y,
						isAnonymous: _,
						message: b
					} = n, g = {
						token: m ? m.id : void 0,
						thing_id: l,
						award_id: y,
						message: b ? b.trim() : "",
						is_anonymous: _,
						pennies: s,
						remember_card: u,
						card_id: f,
						correlation_id: t
					}, h = `${e.apiUrl}/api/v2/gold/stripe/buy_award`, P = i ? h : Object(c.a)(h);
					return Object(a.a)(Object(o.a)(e, [d.a]), {
						method: r.ib.POST,
						endpoint: P,
						data: g
					}).then(p)
				}, _ = async ({
					context: e,
					correlationId: t,
					pennies: n,
					token: i
				}) => {
					const s = {
							token: i.id,
							pennies: n,
							correlation_id: t
						},
						u = `${e.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						l = Object(c.a)(u);
					return Object(a.a)(Object(o.a)(e, [d.a]), {
						method: r.ib.POST,
						endpoint: l,
						data: s
					}).then(p)
				}, b = "paymentInfoUpdated", g = async e => {
					const {
						origin: t
					} = window.location, n = `${t}/settings/premium`, r = new URLSearchParams({
						[b]: "true"
					}), a = await Object(i.a)(e, {
						...s,
						variables: {
							successUrl: `${n}?${r}`,
							cancelUrl: `${n}`
						}
					});
					if (!a.ok) throw new Error("Unable to update payment information");
					return a.body.data.changeStripePaymentMethod.sessionId
				}, h = async (e, t) => {
					const n = {
						card_id: t
					};
					return Object(a.a)(Object(o.a)(e, [d.a]), {
						method: r.ib.POST,
						endpoint: `${e.apiUrl}/api/v2/gold/stripe/delete_creditcard`,
						data: n
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(l.a)(e)
					})
				}, P = async e => Object(a.a)(Object(o.a)(e, [d.a]), {
					method: r.ib.GET,
					endpoint: `${e.apiUrl}/api/v2/gold/stripe/creditcards`
				}).then(e => e.ok ? {
					...e
				} : {
					...e,
					error: Object(l.a)(e)
				})
		},
		"./src/reddit/hooks/useTracking.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = r.b
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "d", (function() {
				return d
			}));
			var r, a = n("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups", e.Premium = "premium"
			}(r || (r = {}));
			const i = {
				[r.Powerups]: () => a.fbt._("Reddit - Buy Powerups", null, {
					hk: "4sEI31"
				}),
				[r.Premium]: () => a.fbt._("Reddit - Buy Premium", null, {
					hk: "19EtMU"
				})
			};
			var o, s;
			! function(e) {
				e.Month = "MONTH", e.Year = "YEAR"
			}(o || (o = {})),
			function(e) {
				e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
			}(s || (s = {}));
			const d = (e, t) => {
				const n = e && e.dealInfo && e.dealInfo.type,
					r = "low_coin_upsell" === n,
					a = "new_purchaser" === n,
					i = "repeat_purchaser" === n;
				return t ? s.GildFlow : r ? s.LowCoinBalance : a ? s.NewUserTargetedOffer : i ? s.RepeatUserTargetedOffer : void 0
			}
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "q", (function() {
				return o
			})), n.d(t, "s", (function() {
				return s
			})), n.d(t, "r", (function() {
				return d
			})), n.d(t, "u", (function() {
				return c
			})), n.d(t, "t", (function() {
				return u
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "p", (function() {
				return p
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "o", (function() {
				return y
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "l", (function() {
				return g
			})), n.d(t, "w", (function() {
				return h
			})), n.d(t, "x", (function() {
				return P
			})), n.d(t, "v", (function() {
				return k
			})), n.d(t, "y", (function() {
				return x
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "g", (function() {
				return S
			})), n.d(t, "i", (function() {
				return B
			})), n.d(t, "k", (function() {
				return j
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "m", (function() {
				return w
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "d", (function() {
				return N
			}));
			var r = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				a = n("./src/lib/initializeClient/installReducer.ts"),
				i = n("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(a.a)({
				features: {
					goldPurchase: i.a
				}
			});
			const o = e => e.features.goldPurchase.purchaseModal.activePage,
				s = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				c = e => e.features.goldPurchase.purchaseModal.showModal,
				u = e => e.features.goldPurchase.purchaseModal.packageId,
				l = e => e.features.goldPurchase.packageOfferModal.packageId,
				p = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				m = e => {
					const t = Object(r.j)(e),
						n = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && n && t.find(e => e.mobileId === n) || null
				},
				f = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				y = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				_ = e => e.features.goldPurchase.payment.paymentMethod,
				b = e => e.features.goldPurchase.payment.cardName,
				g = e => e.features.goldPurchase.payment.postalCode,
				h = e => e.features.goldPurchase.payment.savedCardsPending,
				P = e => e.features.goldPurchase.payment.savedCards,
				k = e => e.features.goldPurchase.payment.rememberCard,
				x = e => e.features.goldPurchase.payment.useSavedCard,
				O = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				S = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				B = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				j = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				C = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				w = e => e.features.goldPurchase.payment.stripeToken.pending,
				I = e => e.features.goldPurchase.payment.paypal.passthrough,
				N = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/redditGQL/operations/ChangeStripePaymentMethod.json": function(e) {
			e.exports = JSON.parse('{"id":"ce700fb9b230"}')
		},
		"./src/redditGQL/operations/ClaimAwardOffer.json": function(e) {
			e.exports = JSON.parse('{"id":"7264b2ee2ded"}')
		},
		"./src/redditGQL/operations/FetchSpecialEvents.json": function(e) {
			e.exports = JSON.parse('{"id":"7537a71b4f14"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Premium.d82f46df3456dee9a6a0.js.map