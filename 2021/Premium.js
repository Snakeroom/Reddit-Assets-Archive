// https://www.redditstatic.com/desktop2x/Premium.9d82567bf479da214acc.js
// Retrieved at 11/3/2021, 12:30:07 PM by Reddit Dataminer v1.0.0
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
				xsmallBigPaddingButtonStyles: "UEPNkU0rd1-nvbkOcBatc",
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
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "l", (function() {
				return b
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
				return v
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "j", (function() {
				return j
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "h", (function() {
				return N
			})), n.d(t, "i", (function() {
				return I
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				s = n("./src/reddit/controls/Button/index.m.less"),
				d = n.n(s);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const l = {
				role: "button",
				tabIndex: 0
			};
			var u, m, f, p;
			! function(e) {
				e.XXS = "xxsmallButtonStyles", e.XS = "xsmallButtonStyles", e.XSP = "xsmallBigPaddingButtonStyles", e.S = "smallButtonStyles", e.M = "mediumButtonStyles", e.L = "largeButtonStyles", e.XL = "xlargeButtonStyles"
			}(u || (u = {})),
			function(e) {
				e.Primary = "primary", e.Secondary = "secondary", e.Tertiary = "tertiary", e.Plain = "plain", e.PlainLink = "plainLink"
			}(m || (m = {})),
			function(e) {
				e.L = "left", e.R = "right", e.C = "center"
			}(f || (f = {})),
			function(e) {
				e.Button = "button", e.ExternalLink = "external-link", e.InternalLink = "internal-link"
			}(p || (p = {}));
			const h = e => {
					const {
						"data-redditstyle": t,
						Icon: n,
						iconClassName: a,
						iconPosition: o = f.C,
						isFullWidth: s = !1,
						isSquare: h = !1,
						children: b,
						className: P,
						kind: k = p.Button,
						priority: x = m.Primary,
						redditStyle: O,
						size: S = u.S,
						text: B,
						textClassName: v,
						...E
					} = e, C = (({
						baseClassName: e,
						redditStyle: t,
						dataRedditStyle: n,
						Icon: a,
						isFullWidth: r,
						isSquare: o,
						priority: s,
						size: c,
						text: l
					}) => Object(i.a)(e, d.a.Button, s && d.a[s], c && d.a[c], {
						[d.a.isFullWidth]: r,
						[d.a.isIconOnly]: !!a && !l,
						[d.a.isSquare]: o,
						[d.a.redditStyle]: !(!t && !n)
					}))({
						baseClassName: P,
						children: b,
						dataRedditStyle: t,
						Icon: n,
						isFullWidth: s,
						isSquare: h,
						priority: x,
						redditStyle: O,
						size: S,
						text: B
					}), j = (({
						children: e,
						text: t,
						Icon: n,
						iconClassName: a,
						iconPosition: o,
						priority: s,
						textClassName: c
					}) => !n && t ? r.a.createElement("span", {
						className: c
					}, t) : r.a.createElement(r.a.Fragment, null, n && (o === f.C || o === f.L) && r.a.createElement(n, {
						className: Object(i.a)(d.a.Icon, a, {
							[d.a.isLeft]: o === f.L
						}),
						isFilled: s === m.Primary
					}), t && r.a.createElement("span", {
						className: Object(i.a)(d.a.Text, c)
					}, t), e && e, n && o === f.R && r.a.createElement(n, {
						className: Object(i.a)(d.a.Icon, a, d.a.isRight),
						isFilled: s === m.Primary
					})))({
						children: b,
						text: B,
						Icon: n,
						iconClassName: a,
						iconPosition: o,
						priority: x,
						textClassName: v
					});
					return k === p.InternalLink && (e => "to" in e)(E) ? r.a.createElement(g, c({}, l, E, {
						className: C
					}), j) : k === p.ExternalLink && (e => "href" in e)(E) ? r.a.createElement(y, c({}, l, E, {
						className: C
					}), j) : r.a.createElement(_, c({}, l, E, {
						className: C
					}), j)
				},
				g = e => r.a.createElement(o.a, e),
				y = e => r.a.createElement("a", e),
				_ = e => r.a.createElement("button", e),
				b = e => r.a.createElement(h, c({
					kind: p.ExternalLink,
					priority: m.Primary
				}, e)),
				P = e => r.a.createElement(h, c({
					kind: p.InternalLink,
					priority: m.Primary
				}, e)),
				k = e => r.a.createElement(h, c({
					kind: p.Button,
					priority: m.Primary
				}, e)),
				x = e => r.a.createElement(h, c({
					kind: p.ExternalLink,
					priority: m.Secondary
				}, e)),
				O = e => r.a.createElement(h, c({
					kind: p.InternalLink,
					priority: m.Secondary
				}, e)),
				S = e => r.a.createElement(h, c({
					kind: p.Button,
					priority: m.Secondary
				}, e)),
				B = e => r.a.createElement(h, c({
					kind: p.InternalLink,
					priority: m.Plain
				}, e)),
				v = e => r.a.createElement(h, c({
					kind: p.Button,
					priority: m.Plain
				}, e)),
				E = ({
					className: e,
					...t
				}) => r.a.createElement(h, c({
					kind: p.Button,
					priority: m.Primary,
					className: Object(i.a)(e, d.a.DangerButtonColors)
				}, t)),
				C = ({
					className: e,
					...t
				}) => r.a.createElement(h, c({
					kind: p.Button,
					className: Object(i.a)(e, d.a.GoldButtonColors)
				}, t)),
				j = ({
					className: e,
					...t
				}) => r.a.createElement(h, c({
					kind: p.Button,
					className: Object(i.a)(e, d.a.PremiumButtonColors)
				}, t)),
				w = ({
					className: e,
					...t
				}) => r.a.createElement(h, c({
					kind: p.Button,
					className: Object(i.a)(e, d.a.ChatButton)
				}, t)),
				N = ({
					className: e,
					...t
				}) => r.a.createElement(h, c({
					kind: p.Button,
					className: Object(i.a)(e, d.a.InlineTextButton)
				}, t)),
				I = ({
					className: e,
					...t
				}) => r.a.createElement(h, c({
					kind: p.Button,
					className: Object(i.a)(e, d.a.PlainLinkButton),
					priority: m.PlainLink
				}, t));
			t.s = h
		},
		"./src/reddit/endpoints/gold/productCatalog/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "a", (function() {
				return x
			}));
			var a = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				s = n("./src/redditGQL/operations/ClaimAwardOffer.json"),
				d = n("./src/redditGQL/operations/FetchSpecialEvents.json"),
				c = n("./src/reddit/constants/headers.ts"),
				l = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = n("./src/reddit/endpoints/gold/purchase.ts");
			const m = e => ({
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
				f = e => e.map(m),
				p = e => e.map(e => {
					return {
						...m(e),
						dealInfo: {
							type: e.deal_info.type,
							title: e.deal_info.title,
							subtitle: e.deal_info.subtitle,
							displayDelay: e.deal_info.display_delay
						}
					}
				}),
				h = e => e.map(e => ({
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
				y = async ({
					context: e,
					correlationId: t,
					shouldUseCurrentOrigin: n
				}) => {
					const i = "/api/v2/gold/purchase_package_details",
						s = n && "undefined" != typeof window ? `${window.location.origin}${i}` : `${e.apiUrl}${i}`,
						d = Object(l.a)(s);
					return Object(r.a)(Object(o.a)(e, [c.a]), {
						method: a.ib.GET,
						endpoint: d,
						data: {
							correlation_id: t
						}
					}).then(u.c).then(_)
				};

			function _(e) {
				if (!e.ok) return e;
				const {
					active_sale: t,
					coin_packages: n,
					deals: a,
					premium_packages: r
				} = e.body, i = {
					activeSaleConfig: g(t),
					coinPackages: f(n),
					dealCoinPackages: p(a),
					premiumPackages: h(r)
				};
				return {
					...e,
					body: i
				}
			}
			const b = async ({
				context: e,
				awardId: t,
				correlationId: n
			}) => {
				const i = `${e.apiUrl}/api/v2/gold/recommended_coin_package_details`,
					s = Object(l.a)(i);
				return Object(r.a)(Object(o.a)(e, [c.a]), {
					method: a.ib.GET,
					endpoint: s,
					data: {
						correlation_id: n,
						intended_award: t
					}
				}).then(u.c).then(P)
			};

			function P(e) {
				if (!e.ok) return e;
				const t = e.body,
					n = {
						coinPackages: f([t])
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
				return m
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "i", (function() {
				return _
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return P
			}));
			var a = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				s = n("./src/redditGQL/operations/ChangeStripePaymentMethod.json"),
				d = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				l = n("./src/reddit/helpers/genericServerError/index.ts"),
				u = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const m = e => e.ok ? e.body.json && e.body.json.errors.length ? {
					...e,
					ok: !1,
					error: Object(u.a)(e)
				} : {
					...e
				} : {
					...e,
					error: e.error || Object(l.a)()
				},
				f = async ({
					coins: e,
					context: t,
					correlationId: n,
					offerContext: i,
					pennies: s,
					rememberCard: l,
					token: u,
					savedCardId: f
				}) => {
					const p = {
							token: u ? u.id : void 0,
							coins: e,
							offer_context: i,
							pennies: s,
							remember_card: l,
							card_id: f,
							correlation_id: n
						},
						h = `${t.apiUrl}/api/v2/gold/stripe/buy_coins`,
						g = Object(c.a)(h);
					return Object(r.a)(Object(o.a)(t, [d.a]), {
						method: a.ib.POST,
						endpoint: g,
						data: p
					}).then(m)
				}, p = async ({
					coins: e,
					context: t,
					correlationId: n,
					gildParams: i,
					isOldReddit: s,
					offerContext: l,
					pennies: u,
					rememberCard: f,
					thingId: p,
					token: h,
					savedCardId: g
				}) => {
					const {
						gildType: y,
						isAnonymous: _,
						message: b
					} = i, P = {
						token: h ? h.id : void 0,
						coins: e,
						offer_context: l,
						pennies: u,
						thing_id: p,
						gild_type: y,
						message: b ? b.trim() : "",
						is_anonymous: _,
						remember_card: f,
						card_id: g,
						correlation_id: n
					}, k = `${t.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, x = s ? k : Object(c.a)(k);
					return Object(r.a)(Object(o.a)(t, [d.a]), {
						method: a.ib.POST,
						endpoint: x,
						data: P
					}).then(m)
				}, h = async ({
					context: e,
					correlationId: t,
					gildParams: n,
					isOldReddit: i,
					pennies: s,
					rememberCard: l,
					thingId: u,
					token: f,
					savedCardId: p
				}) => {
					const {
						gildType: h,
						isAnonymous: g,
						message: y
					} = n, _ = {
						token: f ? f.id : void 0,
						thing_id: u,
						award_id: h,
						message: y ? y.trim() : "",
						is_anonymous: g,
						pennies: s,
						remember_card: l,
						card_id: p,
						correlation_id: t
					}, b = `${e.apiUrl}/api/v2/gold/stripe/buy_award`, P = i ? b : Object(c.a)(b);
					return Object(r.a)(Object(o.a)(e, [d.a]), {
						method: a.ib.POST,
						endpoint: P,
						data: _
					}).then(m)
				}, g = async ({
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
						l = `${e.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						u = Object(c.a)(l);
					return Object(r.a)(Object(o.a)(e, [d.a]), {
						method: a.ib.POST,
						endpoint: u,
						data: s
					}).then(m)
				}, y = "paymentInfoUpdated", _ = async e => {
					const {
						origin: t
					} = window.location, n = `${t}/settings/premium`, a = new URLSearchParams({
						[y]: "true"
					}), r = await Object(i.a)(e, {
						...s,
						variables: {
							successUrl: `${n}?${a}`,
							cancelUrl: `${n}`
						}
					});
					if (!r.ok) throw new Error("Unable to update payment information");
					return r.body.data.changeStripePaymentMethod.sessionId
				}, b = async (e, t) => {
					const n = {
						card_id: t
					};
					return Object(r.a)(Object(o.a)(e, [d.a]), {
						method: a.ib.POST,
						endpoint: `${e.apiUrl}/api/v2/gold/stripe/delete_creditcard`,
						data: n
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(u.a)(e)
					})
				}, P = async e => Object(r.a)(Object(o.a)(e, [d.a]), {
					method: a.ib.GET,
					endpoint: `${e.apiUrl}/api/v2/gold/stripe/creditcards`
				}).then(e => e.ok ? {
					...e
				} : {
					...e,
					error: Object(u.a)(e)
				})
		},
		"./src/reddit/icons/svgs/PremiumLogo/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 630 96",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "#ff4500",
				d: "M95.349,6.185a3.136,3.136,0,0,0-2.458-1.2H88.517A164.2,164.2,0,0,1,48.761.1a2.962,2.962,0,0,0-1.5,0A164.2,164.2,0,0,1,7.509,4.988H3.125A3.111,3.111,0,0,0,.1,8.858,164.1,164.1,0,0,1,5,48.614V67.819A20.392,20.392,0,0,0,25.362,88.186a33.738,33.738,0,0,1,20.721,7.151,3.126,3.126,0,0,0,3.85,0,33.734,33.734,0,0,1,20.721-7.151A20.391,20.391,0,0,0,91.02,67.819V48.614A164.147,164.147,0,0,1,95.913,8.858,3.119,3.119,0,0,0,95.349,6.185Z"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M79.992,48a7,7,0,0,0-11.855-5.036,34.261,34.261,0,0,0-18.72-5.939l3.189-15,10.418,2.215a5.008,5.008,0,1,0,.512-2.447L51.9,19.318a1.25,1.25,0,0,0-1.483.963l-3.561,16.74a34.368,34.368,0,0,0-18.994,5.93,7,7,0,1,0-7.706,11.432,13.771,13.771,0,0,0-.167,2.117c0,10.77,12.536,19.5,28,19.5s28-8.73,28-19.5a13.851,13.851,0,0,0-.164-2.1A7,7,0,0,0,79.992,48ZM32,53a5,5,0,1,1,5,5A5.007,5.007,0,0,1,32,53ZM59.88,66.212c-3.412,3.408-9.951,3.673-11.874,3.673s-8.463-.265-11.872-3.673a1.3,1.3,0,1,1,1.833-1.832c2.151,2.151,6.752,2.914,10.039,2.914s7.889-.764,10.043-2.915a1.3,1.3,0,1,1,1.831,1.833ZM59,58a5,5,0,1,1,5-5A5.006,5.006,0,0,1,59,58Z"
			}), r.a.createElement("path", {
				fill: "#ff4500",
				d: "M157.1,75.454H144.637l-9.8-17.217q-1.416.069-2.157.068h-4.11V75.454H117.515V25.793h17.924a20.921,20.921,0,0,1,8.861,1.8,14.209,14.209,0,0,1,6.132,5.238,14.742,14.742,0,0,1,2.223,8.187,16.721,16.721,0,0,1-1.971,8.07,15.976,15.976,0,0,1-5.643,5.979ZM128.566,49.31h5.559a9.153,9.153,0,0,0,4.009-.843,6.444,6.444,0,0,0,2.729-2.392,6.61,6.61,0,0,0,.977-3.605,6.53,6.53,0,0,0-.994-3.6,6.46,6.46,0,0,0-2.83-2.392,10.222,10.222,0,0,0-4.295-.842h-5.155Z"
			}), r.a.createElement("path", {
				fill: "#ff4500",
				d: "M190.659,60.765H166.267a9.356,9.356,0,0,0,3.453,4.969,9.772,9.772,0,0,0,5.913,1.8,16.426,16.426,0,0,0,4.885-.774,12.255,12.255,0,0,0,3.841-1.82l3.3,7.952a17.24,17.24,0,0,1-5.223,2.256,25.442,25.442,0,0,1-6.637.843,20.944,20.944,0,0,1-10.141-2.358,16.56,16.56,0,0,1-6.7-6.571,19.369,19.369,0,0,1-2.359-9.635,19.506,19.506,0,0,1,2.426-9.821,17.172,17.172,0,0,1,6.519-6.587,17.812,17.812,0,0,1,8.945-2.325,17.062,17.062,0,0,1,8.474,2.14,15.607,15.607,0,0,1,6.03,6.014,17.519,17.519,0,0,1,2.207,8.827A24.352,24.352,0,0,1,190.659,60.765Zm-9.265-6.671a6.819,6.819,0,0,0-1.937-5.121,7.005,7.005,0,0,0-5.1-1.887,7.868,7.868,0,0,0-5.374,1.9,9.209,9.209,0,0,0-2.881,5.105Z"
			}), r.a.createElement("path", {
				fill: "#ff4500",
				d: "M222.464,23.569H233.11V75.454H222.969V71.107H222.8a14.246,14.246,0,0,1-10.984,4.886,16.227,16.227,0,0,1-14.453-8.676,20.341,20.341,0,0,1-2.325-9.956,20.057,20.057,0,0,1,2.409-10.09,16.53,16.53,0,0,1,6.317-6.418,16.889,16.889,0,0,1,8.389-2.19,14.771,14.771,0,0,1,5.576,1.027,13.657,13.657,0,0,1,4.5,2.949h.236Zm-3.892,42.08a8.72,8.72,0,0,0,3.184-3.385,10.184,10.184,0,0,0,1.18-4.936,10.386,10.386,0,0,0-1.129-4.886,8.422,8.422,0,0,0-3.133-3.369,8.588,8.588,0,0,0-4.532-1.213,8.682,8.682,0,0,0-4.532,1.2,8.429,8.429,0,0,0-3.15,3.336,10.152,10.152,0,0,0-1.145,4.868,10.585,10.585,0,0,0,1.128,4.919,8.55,8.55,0,0,0,3.151,3.436,8.81,8.81,0,0,0,8.978.033Z"
			}), r.a.createElement("path", {
				fill: "#ff4500",
				d: "M264.848,23.569h10.646V75.454H265.353V71.107h-.168A14.246,14.246,0,0,1,254.2,75.993a16.227,16.227,0,0,1-14.453-8.676,20.341,20.341,0,0,1-2.325-9.956,20.057,20.057,0,0,1,2.409-10.09,16.523,16.523,0,0,1,6.317-6.418,16.886,16.886,0,0,1,8.389-2.19,14.771,14.771,0,0,1,5.576,1.027,13.657,13.657,0,0,1,4.5,2.949h.236Zm-3.892,42.08a8.728,8.728,0,0,0,3.184-3.385,10.183,10.183,0,0,0,1.179-4.936,10.374,10.374,0,0,0-1.129-4.886,8.412,8.412,0,0,0-3.132-3.369,8.591,8.591,0,0,0-4.532-1.213,8.679,8.679,0,0,0-4.532,1.2,8.422,8.422,0,0,0-3.15,3.336,10.152,10.152,0,0,0-1.145,4.868,10.585,10.585,0,0,0,1.128,4.919,8.55,8.55,0,0,0,3.151,3.436,8.81,8.81,0,0,0,8.978.033Z"
			}), r.a.createElement("path", {
				fill: "#ff4500",
				d: "M284.456,34.148a6.617,6.617,0,0,1-2.342-8.928,6.192,6.192,0,0,1,2.342-2.324,6.561,6.561,0,0,1,3.3-.843,6.493,6.493,0,0,1,3.268,12.1,6.6,6.6,0,0,1-6.57,0Zm8.591,41.306H282.4V39.2h10.646Z"
			}), r.a.createElement("path", {
				fill: "#ff4500",
				d: "M315.418,39.2H323.2v9.063h-7.783V75.454H304.772V48.265h-7.749V39.2h7.749V28.825h10.646Z"
			}), r.a.createElement("path", {
				fill: "#ff4500",
				d: "M367.428,27.8a14.469,14.469,0,0,1,6.317,5.71,16.7,16.7,0,0,1,2.19,8.659A17.514,17.514,0,0,1,373.7,51.1a15.51,15.51,0,0,1-6.318,6.031,19.809,19.809,0,0,1-9.4,2.156h-6.166V75.454H340.761V25.793h16.913A22.1,22.1,0,0,1,367.428,27.8ZM357.405,49.545a8.728,8.728,0,0,0,4.076-.909,6.562,6.562,0,0,0,2.7-2.51,7.005,7.005,0,0,0,.943-3.622,6.126,6.126,0,0,0-2.173-5.021A8.958,8.958,0,0,0,357,35.631h-5.188V49.545Z"
			}), r.a.createElement("path", {
				fill: "#ff4500",
				d: "M404.775,38.882a5.377,5.377,0,0,1,1.651.522l-4.279,10.175a5.732,5.732,0,0,0-1.263-.388,8.251,8.251,0,0,0-1.736-.185,8.08,8.08,0,0,0-3.622.876,7.359,7.359,0,0,0-2.914,2.628,7.721,7.721,0,0,0-1.145,4.312V75.454H380.82V39.2h10.344v5.087h.2a15.107,15.107,0,0,1,4.582-4.025,12.458,12.458,0,0,1,6.367-1.6A13.1,13.1,0,0,1,404.775,38.882Z"
			}), r.a.createElement("path", {
				fill: "#ff4500",
				d: "M440.151,60.765H415.758a9.367,9.367,0,0,0,3.453,4.969,9.776,9.776,0,0,0,5.914,1.8,16.431,16.431,0,0,0,4.885-.774,12.255,12.255,0,0,0,3.841-1.82l3.3,7.952a17.234,17.234,0,0,1-5.222,2.256,25.447,25.447,0,0,1-6.637.843,20.941,20.941,0,0,1-10.141-2.358,16.562,16.562,0,0,1-6.7-6.571,19.379,19.379,0,0,1-2.358-9.635,19.5,19.5,0,0,1,2.426-9.821,17.172,17.172,0,0,1,6.519-6.587,17.812,17.812,0,0,1,8.945-2.325,17.062,17.062,0,0,1,8.474,2.14,15.613,15.613,0,0,1,6.03,6.014,17.519,17.519,0,0,1,2.207,8.827A24.352,24.352,0,0,1,440.151,60.765Zm-9.265-6.671a6.819,6.819,0,0,0-1.937-5.121,7.006,7.006,0,0,0-5.105-1.887,7.869,7.869,0,0,0-5.374,1.9,9.213,9.213,0,0,0-2.88,5.105Z"
			}), r.a.createElement("path", {
				fill: "#ff4500",
				d: "M493.282,40.7a10.863,10.863,0,0,1,3.74,5.121,19.607,19.607,0,0,1,1.078,6.52V75.454H487.386v-21.8a7.294,7.294,0,0,0-1.246-4.564,4.257,4.257,0,0,0-3.572-1.6,4.976,4.976,0,0,0-3.857,1.6,6.515,6.515,0,0,0-1.466,4.564v21.8H466.6v-21.8a7.288,7.288,0,0,0-1.247-4.564,4.294,4.294,0,0,0-3.6-1.6,4.955,4.955,0,0,0-3.857,1.617,6.637,6.637,0,0,0-1.466,4.616V75.454H445.777V39.2h10.141v4.615h.169a12.481,12.481,0,0,1,4.312-3.84,11.742,11.742,0,0,1,5.559-1.314,10.357,10.357,0,0,1,5.256,1.28,9.366,9.366,0,0,1,3.572,3.774h.2a12.728,12.728,0,0,1,4.868-3.757,15.291,15.291,0,0,1,6.284-1.3A11.461,11.461,0,0,1,493.282,40.7Z"
			}), r.a.createElement("path", {
				fill: "#ff4500",
				d: "M506.826,34.148a6.617,6.617,0,0,1-2.342-8.928,6.2,6.2,0,0,1,2.342-2.324,6.561,6.561,0,0,1,3.3-.843,6.493,6.493,0,0,1,3.268,12.1,6.6,6.6,0,0,1-6.57,0Zm8.591,41.306H504.771V39.2h10.646Z"
			}), r.a.createElement("path", {
				fill: "#ff4500",
				d: "M544.763,39.2h10.646V75.487H545.133V70.7h-.269a11.143,11.143,0,0,1-4.549,3.892,14.315,14.315,0,0,1-6.367,1.431,11.771,11.771,0,0,1-6.351-1.667,10.928,10.928,0,0,1-4.111-4.632,15.394,15.394,0,0,1-1.431-6.773V39.2H532.7V60.6a7.073,7.073,0,0,0,1.516,4.885,5.337,5.337,0,0,0,4.178,1.685,6.3,6.3,0,0,0,4.582-1.735,6.524,6.524,0,0,0,1.786-4.9Z"
			}), r.a.createElement("path", {
				fill: "#ff4500",
				d: "M609.652,40.7a10.863,10.863,0,0,1,3.74,5.121,19.607,19.607,0,0,1,1.078,6.52V75.454H603.756v-21.8a7.294,7.294,0,0,0-1.246-4.564,4.257,4.257,0,0,0-3.572-1.6,4.978,4.978,0,0,0-3.857,1.6,6.52,6.52,0,0,0-1.466,4.564v21.8H582.969v-21.8a7.288,7.288,0,0,0-1.247-4.564,4.294,4.294,0,0,0-3.605-1.6,4.955,4.955,0,0,0-3.857,1.617,6.637,6.637,0,0,0-1.466,4.616V75.454H562.147V39.2h10.142v4.615h.168a12.475,12.475,0,0,1,4.313-3.84,11.737,11.737,0,0,1,5.559-1.314,10.356,10.356,0,0,1,5.255,1.28,9.366,9.366,0,0,1,3.572,3.774h.2a12.723,12.723,0,0,1,4.869-3.757,15.283,15.283,0,0,1,6.283-1.3A11.459,11.459,0,0,1,609.652,40.7Z"
			}))
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "d", (function() {
				return d
			}));
			var a, r = n("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups", e.Premium = "premium"
			}(a || (a = {}));
			const i = {
				[a.Powerups]: () => r.fbt._("Reddit - Buy Powerups", null, {
					hk: "4sEI31"
				}),
				[a.Premium]: () => r.fbt._("Reddit - Buy Premium", null, {
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
					a = "low_coin_upsell" === n,
					r = "new_purchaser" === n,
					i = "repeat_purchaser" === n;
				return t ? s.GildFlow : a ? s.LowCoinBalance : r ? s.NewUserTargetedOffer : i ? s.RepeatUserTargetedOffer : void 0
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
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "p", (function() {
				return m
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "l", (function() {
				return _
			})), n.d(t, "w", (function() {
				return b
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
				return v
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "m", (function() {
				return C
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "d", (function() {
				return w
			}));
			var a = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				r = n("./src/lib/initializeClient/installReducer.ts"),
				i = n("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(r.a)({
				features: {
					goldPurchase: i.a
				}
			});
			const o = e => e.features.goldPurchase.purchaseModal.activePage,
				s = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				c = e => e.features.goldPurchase.purchaseModal.showModal,
				l = e => e.features.goldPurchase.purchaseModal.packageId,
				u = e => e.features.goldPurchase.packageOfferModal.packageId,
				m = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				f = e => {
					const t = Object(a.k)(e),
						n = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && n && t.find(e => e.mobileId === n) || null
				},
				p = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				h = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				g = e => e.features.goldPurchase.payment.paymentMethod,
				y = e => e.features.goldPurchase.payment.cardName,
				_ = e => e.features.goldPurchase.payment.postalCode,
				b = e => e.features.goldPurchase.payment.savedCardsPending,
				P = e => e.features.goldPurchase.payment.savedCards,
				k = e => e.features.goldPurchase.payment.rememberCard,
				x = e => e.features.goldPurchase.payment.useSavedCard,
				O = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				S = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				B = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				v = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				E = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				C = e => e.features.goldPurchase.payment.stripeToken.pending,
				j = e => e.features.goldPurchase.payment.paypal.passthrough,
				w = e => e.features.goldPurchase.payment.paypal.errorMessage
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Premium.9d82567bf479da214acc.js.map