// https://www.redditstatic.com/desktop2x/GoldTargetedOfferModal.ec5d107d86720ca7809d.js
// Retrieved at 9/1/2021, 1:20:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GoldTargetedOfferModal"], {
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./src/lib/currency/cleanNumber/index.ts");

			function c(e, t) {
				const r = Object(n.a)(e),
					c = parseInt(r) / 100;
				return Math.floor(c) !== c || t ? c.toFixed(2) : String(c)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, r) {
			"use strict";

			function n(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/lib/currency/currencies.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "a", (function() {
				return s
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "e", (function() {
				return l
			}));
			var n, c = r("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(n || (n = {}));
			const a = "USD",
				o = "ETH",
				s = "COINS",
				i = [o, "BTC"],
				d = [s, "SUBREDDIT_POINTS", "GAME_TOKENS"],
				l = {
					COINS: () => c.fbt._("Coins", null, {
						hk: "1T2Y4p"
					}),
					SUBREDDIT_POINTS: () => c.fbt._("Subreddit points", null, {
						hk: "1ytOO3"
					}),
					GAME_TOKENS: () => c.fbt._("Game tokens", null, {
						hk: "16BUrU"
					})
				}
		},
		"./src/lib/localizeCurrency/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			}));
			var n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				c = r("./src/lib/currency/centsToDollars/index.ts"),
				a = r("./src/lib/currency/currencies.ts"),
				o = r("./src/lib/prettyPrintNumber/index.ts"),
				s = r("./src/reddit/helpers/governance/tokens.ts");
			const i = (() => {
					try {
						return "1E4 bits" === new Intl.NumberFormat("en", {
							style: "unit",
							unit: "bit",
							unitDisplay: "long",
							notation: "scientific"
						}).format(1e4)
					} catch (e) {
						return !1
					}
				})(),
				d = () => i,
				l = (e, {
					locale: t = n.DEFAULT_LOCALE,
					pretty: r,
					formatOptions: c
				} = {}) => {
					const a = Number(e);
					return d() ? r ? Object(o.b)(a) : new Intl.NumberFormat(t, c).format(a) : b(a, r, t)
				},
				u = (e, t = {}) => {
					const {
						locale: r = n.DEFAULT_LOCALE,
						pretty: o,
						formatOptions: i,
						displayConversion: l,
						forceDecimals: u,
						currency: f = t.currency || (t.type ? m(t.type) : a.c),
						type: O = t.type || (t.currency ? p(t.currency) : a.b.Real)
					} = t, g = Number(e), y = String(e);
					switch (O) {
						case a.b.Reddit: {
							const e = a.e[f],
								t = e ? e() : f;
							return d() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...i
							}).format(g) + " " + t : b(g, o, r, t)
						}
						case a.b.Crypto: {
							if (o) {
								return Object(s.c)(y, l) + " " + f
							}
							const e = Number(Object(s.b)(y, l));
							return d() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...i
							}).format(e) : b(e, o, r, f)
						}
						case a.b.Real:
						default: {
							const e = Number(Object(c.a)(y, u));
							return d() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								notation: o ? "compact" : "standard",
								...i
							}).format(e) : b(e, o, r, f)
						}
					}
				},
				b = (e, t, r, n) => {
					return (t ? Object(o.b)(e) : e.toLocaleString(r)) + (n ? " " + n : "")
				},
				p = e => a.g.includes(e.toUpperCase()) ? a.b.Reddit : a.f.includes(e.toUpperCase()) ? a.b.Crypto : a.b.Real,
				m = e => {
					switch (e) {
						case a.b.Crypto:
							return a.d;
						case a.b.Reddit:
							return a.a;
						case a.b.Real:
						default:
							return a.c
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return E
			})), r.d(t, "a", (function() {
				return x
			})), r.d(t, "e", (function() {
				return I
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "j", (function() {
				return T
			})), r.d(t, "i", (function() {
				return S
			})), r.d(t, "f", (function() {
				return N
			})), r.d(t, "g", (function() {
				return R
			})), r.d(t, "h", (function() {
				return M
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				c = r("./src/lib/formatApiError/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				s = r("./src/reddit/constants/modals.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				b = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = r("./src/reddit/endpoints/gold/purchase.ts"),
				m = r("./src/reddit/helpers/correlationIdTracker.ts"),
				f = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				O = r("./src/reddit/models/Gold/Award.ts"),
				g = r("./src/reddit/models/Gold/ProductOffer.ts"),
				y = r("./src/reddit/models/Toast/index.ts"),
				j = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				h = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				_ = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const k = Object(a.a)(_.q),
				w = Object(a.a)(_.c),
				E = e => async (t, r) => {
					t(k(e)), t(Object(l.h)(s.a.ECON_COIN_PURCHASE))
				}, x = () => async (e, t) => {
					e(w()), e(Object(l.g)(s.a.ECON_COIN_PURCHASE))
				}, C = Object(a.a)(_.u), I = ({
					correlationId: e,
					packageId: t
				}) => async (r, n) => {
					const c = n();
					Object(j.e)(c, t) ? (r(C({
						correlationId: e,
						packageId: t
					})), r(Object(l.i)(s.a.GOLD_TARGETED_OFFER_MODAL))) : o.c.captureMessage(`Tried to show targeted offer, but could not find package id: ${t}`)
				}, P = Object(a.a)(_.p), v = ({
					correlationId: e,
					packageId: t
				}) => async (r, n) => {
					Object(j.c)(n(), t) ? (r(P({
						correlationId: e,
						packageId: t
					})), r(Object(l.i)(s.a.ECON_COIN_PACKAGE_OFFER))) : o.c.captureMessage(`Tried to show coin package offer, but could not find package id: ${t}`)
				}, A = (e, t, r) => async (c, a) => {
					await c(Object(d.c)(e, r));
					const o = a(),
						s = Object(j.n)(o);
					if (0 !== s.length) c(E({
						correlationId: r,
						packageId: s[0].mobileId,
						thingId: t
					}));
					else {
						const e = Object(j.k)(o),
							t = n.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						c(Object(u.f)({
							kind: y.b.Error,
							duration: u.a,
							text: e || t
						}))
					}
				}, T = (e, t) => async (r, a, {
					apiContext: o
				}) => {
					const s = a(),
						{
							coins: d,
							pennies: l
						} = t,
						u = Object(h.r)(s) || Object(m.d)(m.a.GoldPayment, !1);
					let b, f;
					r(Object(i.stripeTokenPending)());
					const O = Object(h.y)(s);
					if (O || (b = await r(Object(i.validateAndCreateStripeToken)(e)), f = Object(h.v)(s), b)) try {
						const e = await Object(p.f)({
							coins: d,
							context: o(),
							correlationId: u,
							offerContext: Object(g.d)(t, !1),
							pennies: l,
							rememberCard: f,
							savedCardId: O || void 0,
							token: b
						});
						if (e.error) {
							const t = Object(c.a)(e.error, e.status);
							return void r(Object(i.stripeApiError)(t))
						}
						return r(Object(i.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(m.b)(m.a.GoldPayment)
					} catch (y) {
						const e = Object(c.a)(y);
						r(Object(i.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						r(Object(i.stripeApiError)(e))
					}
				}, S = (e, t, a) => async (o, s, {
					apiContext: d
				}) => {
					const l = s(),
						{
							coins: u,
							pennies: b
						} = t,
						y = Object(h.r)(l) || Object(m.d)(m.a.GoldPayment, !1);
					let j, _;
					o(Object(i.stripeTokenPending)());
					const k = Object(h.y)(l);
					if (k || (j = await o(Object(i.validateAndCreateStripeToken)(e)), _ = Object(h.v)(l), j)) try {
						const {
							gildModalThingId: e,
							isAnonymous: s,
							message: h,
							selectedAward: w
						} = l.gild;
						if (!e || !w.id) {
							const e = n.fbt._("Gilding unknown thing", null, {
								hk: "2Jiujp"
							});
							return void o(Object(i.stripeApiError)(e))
						}
						const E = w.id,
							C = {
								gildType: E,
								isAnonymous: s,
								message: h
							},
							I = await Object(p.e)({
								coins: u,
								context: d(),
								correlationId: y,
								gildParams: C,
								isOldReddit: a,
								offerContext: Object(g.d)(t, !0),
								pennies: b,
								rememberCard: _,
								savedCardId: k || void 0,
								thingId: e,
								token: j
							});
						if (I.error) {
							const e = Object(c.a)(I.error, I.status);
							return void o(Object(i.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							o(x()), o(Object(i.paymentCompleted)({
								confirmed: !1
							}));
							const {
								awarder_karma_received: n,
								all_awardings: c,
								coins: a,
								treatment_tags: s
							} = I.body;
							return o(t({
								awardKarmaReceived: n || 0,
								awardId: E,
								awardings: c && c.length ? Object(f.a)(c).map(e => ({
									award: Object(O.h)(e),
									total: e.count
								})) : [],
								coins: a,
								id: e,
								treatmentTags: s
							})), void Object(m.b)(m.a.GoldPayment)
						}
					} catch (w) {
						const e = Object(c.a)(w);
						o(Object(i.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						o(Object(i.stripeApiError)(e))
					}
				}, N = e => async (t, r, {
					apiContext: n
				}) => {
					const a = Object(m.c)(m.a.GoldPayment),
						{
							coins: s,
							pennies: d
						} = e;
					try {
						const e = await Object(b.a)({
							context: n(),
							coins: s,
							pennies: d,
							correlationId: a
						});
						if (e.error) {
							const r = Object(c.a)(e.error);
							return void t(Object(i.paypalApiError)(r))
						} {
							const {
								order_id: t
							} = e.body;
							return t
						}
					} catch (l) {
						o.c.captureException(l);
						const e = Object(c.a)(l);
						t(Object(i.paypalApiError)(e))
					}
				}, R = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					const s = n(),
						d = Object(h.r)(s) || Object(m.d)(m.a.GoldPayment, !1),
						{
							coins: l,
							pennies: u
						} = t;
					try {
						const n = await Object(b.c)({
							context: a(),
							offerContext: Object(g.d)(t, !1),
							orderId: e,
							coins: l,
							pennies: u,
							correlationId: d
						});
						if (n.error) {
							const e = Object(c.a)(n.error);
							return void r(Object(i.paypalApiError)(e))
						} {
							const {
								coins: e
							} = n.body;
							r(Object(i.paymentCompleted)({
								coins: e,
								confirmed: !0
							})), Object(m.b)(m.a.GoldPayment)
						}
					} catch (p) {
						o.c.captureException(p);
						const e = Object(c.a)(p);
						r(Object(i.paypalApiError)(e))
					}
				}, M = (e, t) => async (a, s, {
					apiContext: d
				}) => {
					const l = s(),
						u = Object(h.r)(l) || Object(m.d)(m.a.GoldPayment, !1),
						{
							coins: p,
							pennies: y
						} = t;
					try {
						const {
							gildModalThingId: o,
							isAnonymous: s,
							message: j,
							selectedAward: h
						} = l.gild;
						if (!o || !h) return void a(Object(i.paypalApiError)(n.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const _ = h.id,
							k = await Object(b.d)({
								context: d(),
								offerContext: Object(g.d)(t, !0),
								orderId: e,
								coins: p,
								pennies: y,
								thingId: o,
								awardId: _,
								message: j || "",
								isAnonymous: s,
								correlationId: u
							});
						if (k.error) {
							const e = Object(c.a)(k.error);
							a(Object(i.paypalApiError)(e))
						} else {
							a(x());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: n,
								subreddit_coins: c,
								treatment_tags: s
							} = k.body;
							a(Object(i.paymentCompleted)({
								coins: n,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							a(d({
								awardId: _,
								awardKarmaReceived: t || 0,
								awardings: Object(f.a)(e).map(e => ({
									award: Object(O.h)(e),
									total: e.count
								})),
								coins: n,
								id: o,
								subredditCoins: c,
								treatmentTags: s
							})), Object(m.b)(m.a.GoldPayment)
						}
					} catch (j) {
						o.c.captureException(j);
						const e = Object(c.a)(j);
						a(Object(i.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return d
			})), r.d(t, "paymentCompleted", (function() {
				return l
			})), r.d(t, "cardNameInput", (function() {
				return u
			})), r.d(t, "postalCodeInput", (function() {
				return b
			})), r.d(t, "cardNameEmpty", (function() {
				return p
			})), r.d(t, "cardElementChange", (function() {
				return m
			})), r.d(t, "stripeTokenPending", (function() {
				return f
			})), r.d(t, "stripeTokenError", (function() {
				return O
			})), r.d(t, "stripeApiError", (function() {
				return g
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return y
			})), r.d(t, "paypalApiError", (function() {
				return j
			})), r.d(t, "toggleRememberCard", (function() {
				return h
			})), r.d(t, "selectSavedCard", (function() {
				return _
			})), r.d(t, "_deleteSavedCard", (function() {
				return k
			})), r.d(t, "deleteSavedCard", (function() {
				return w
			})), r.d(t, "savedCardsPending", (function() {
				return E
			})), r.d(t, "savedCardsSuccess", (function() {
				return x
			})), r.d(t, "loadSavedCards", (function() {
				return C
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				c = r("./src/lib/sentry/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/endpoints/gold/purchase.ts"),
				s = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = Object(a.a)(s.B),
				l = Object(a.a)(s.w),
				u = Object(a.a)(s.b),
				b = Object(a.a)(s.y),
				p = Object(a.a)(s.a),
				m = Object(a.a)(s.E),
				f = Object(a.a)(s.G),
				O = Object(a.a)(s.F),
				g = Object(a.a)(s.D),
				y = e => async (t, r) => {
					const c = r(),
						a = Object(i.h)(c),
						o = Object(i.l)(c),
						{
							token: s,
							error: d
						} = await e.createToken({
							name: a,
							address_zip: o
						});
					if (a.trim()) {
						if (!d && s) return s;
						t(O(d || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(p({
							message: e
						}))
					}
				}, j = Object(a.a)(s.x), h = Object(a.a)(s.H), _ = Object(a.a)(s.C), k = Object(a.a)(s.g), w = e => async (t, r, {
					apiContext: n
				}) => {
					t(k(e));
					try {
						const t = await Object(o.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (a) {
						c.c.captureException(a)
					}
				}, E = Object(a.a)(s.z), x = Object(a.a)(s.A), C = () => async (e, t, {
					apiContext: r
				}) => {
					e(E());
					try {
						const t = await Object(o.b)(r());
						if (t.error) throw new Error(t.error.type);
						const n = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(x(n)), n[0] && e(_(n[0].cardId))
					} catch (n) {
						c.c.captureException(n), e(x([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return O
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "a", (function() {
				return k
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				c = r("./src/lib/env/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				s = r("./src/reddit/endpoints/gold/productCatalog/index.ts"),
				i = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/actions/post.ts"),
				b = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const p = Object(a.a)(b.j),
				m = Object(a.a)(b.k),
				f = Object(a.a)(b.i),
				O = e => async (t, r, {
					apiContext: a
				}) => {
					t(p());
					const d = r(),
						l = Object(i.K)(d);
					try {
						const r = !l,
							n = await Object(s.b)({
								context: a(),
								correlationId: e,
								shouldUseCurrentOrigin: r
							});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const c = n.body;
						t(m(c))
					} catch (u) {
						Object(c.b)() || console.error(u), o.c.captureException(u);
						const e = n.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(f(e))
					}
				}, g = Object(a.a)(b.m), y = Object(a.a)(b.n), j = Object(a.a)(b.l), h = (e, t) => async (r, a, {
					apiContext: i
				}) => {
					r(g());
					try {
						const n = await Object(s.c)({
							awardId: e,
							context: i(),
							correlationId: t
						});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const c = n.body;
						if (!c.coinPackages || !c.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						r(y(c))
					} catch (d) {
						Object(c.b)() || console.error(d), o.c.captureException(d);
						const e = n.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						r(j(e))
					}
				}, _ = Object(a.a)(b.h), k = () => async (e, t, {
					gqlContext: r
				}) => {
					var a, i;
					try {
						const t = await Object(s.a)(r());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (a = r.errors) || void 0 === a ? void 0 : a.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (i = r.awards) || void 0 === i ? void 0 : i.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(_({
								awards: r.awards
							})), e(Object(u.B)())
						}
					} catch (b) {
						Object(c.b)() || console.error(b), e(Object(d.f)({
							kind: l.b.Error,
							text: n.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), o.c.captureException(b)
					}
				}
		},
		"./src/reddit/components/Econ/CoinPackageOfferModal/index.m.less": function(e, t, r) {
			e.exports = {
				body: "_2lEPMg5N0x__b_D4ji0QJU",
				closeButton: "_2Zp6M5zjdSaSF4ZXB19uKv",
				closeIcon: "ZJOEoVpmjNhmNnSnoekp9",
				container: "_3Uo22aCgT6VvU3nOe-yYYj",
				image: "_3zxOPuyt8RD3yfvfjSexwG",
				title: "GmqwvnWH-4Scmcg_LAAq9",
				description: "_3lGo2G9LVVWU_7lEkZKy5s",
				agreementLink: "_1fs_kLGowvWWEDLJi84Kue",
				buttonContainer: "_1bzBUturR9rsKSEL3VGNfW",
				button: "_3Pnw83HApEfLFKPqFSeYis"
			}
		},
		"./src/reddit/components/Econ/CoinPackageOfferModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/lodash/isNil.js"),
				c = r.n(n),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				s = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/config.ts"),
				d = r("./src/higherOrderComponents/asModal/index.tsx"),
				l = r("./src/lib/currency/currencies.ts"),
				u = r("./src/lib/localizeCurrency/index.ts"),
				b = r("./src/reddit/helpers/correlationIdTracker.ts"),
				p = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				m = r("./src/reddit/hooks/useLocale.ts"),
				f = r("./src/reddit/hooks/useTracking.ts"),
				O = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				g = r("./src/reddit/actions/modal.ts"),
				y = r("./src/reddit/models/Gold/ProductOffer.ts"),
				j = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				h = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				_ = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				k = r("./src/reddit/components/Econ/CoinPackageOfferModal/index.m.less"),
				w = r.n(k);
			const {
				fbt: E
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var x;
			! function(e) {
				e.NEW_PURCHASER = "new_purchaser", e.REPEAT_PURCHASER = "repeat_purchaser"
			}(x || (x = {}));
			const C = [x.NEW_PURCHASER, x.REPEAT_PURCHASER];
			t.default = Object(d.a)((function() {
				const e = Object(m.a)(),
					t = Object(f.a)(),
					r = Object(s.d)(),
					n = Object(s.e)(e => Object(h.r)(e) || Object(b.d)(b.a.GoldPayment, !1)),
					d = Object(s.e)(h.b),
					k = Object(s.e)(e => d && Object(j.c)(e, d)),
					x = Object(s.e)(j.f),
					I = () => {
						r(Object(g.f)())
					};
				if (Object(a.useEffect)(() => {
						k && t(Object(p.h)(void 0, k.mobileId, y.a.StorefrontFreeAward))
					}, []), !k) return I(), null;
				const P = x.find(({
						dealInfo: {
							type: e
						}
					}) => C.includes(e)),
					v = x.length && !c()(P),
					{
						baselineCoins: A,
						baselinePennies: T,
						coins: S,
						pennies: N,
						mobileId: R
					} = v ? P : k,
					M = S - A,
					U = !v && M > 0,
					D = T - N,
					F = N !== T;
				return o.a.createElement(_.e, {
					className: w.a.body
				}, o.a.createElement("button", {
					onClick: () => {
						t(Object(p.b)(void 0, R, y.a.StorefrontFreeAward)), I()
					},
					className: w.a.closeButton
				}, o.a.createElement(_.b, {
					className: w.a.closeIcon
				})), o.a.createElement("div", {
					className: w.a.container
				}, o.a.createElement("div", {
					className: w.a.image,
					style: {
						backgroundImage: `url("${i.a.assetPath}/img/gold/coins-to-award-2x.png")`
					}
				}), o.a.createElement("h4", {
					className: w.a.title
				}, E._("Thanks kind stranger! To keep awarding, get some coins.", null, {
					hk: "2rIhaz"
				})), o.a.createElement("p", {
					className: w.a.description
				}, !F && E._("Buy {coin amount} for {price}", [E._param("coin amount", Object(u.b)(A, {
					locale: e,
					type: l.b.Reddit,
					currency: l.a
				})), E._param("price", Object(u.b)(N, {
					locale: e
				}))], {
					hk: "15hnfi"
				}), v && E._("and get {coin amount} BONUS coins", [E._param("coin amount", Object(u.a)(M, {
					locale: e
				}))], {
					hk: "26UFcD"
				}), !F && U && E._("and get {bonus coins} FREE", [E._param("bonus coins", Object(u.b)(A, {
					locale: e,
					type: l.b.Reddit,
					currency: l.a
				}))], {
					hk: "1E3ZU8"
				}), F && E._("Save {baseline price} off normal price!", [E._param("baseline price", Object(u.b)(D, {
					locale: e
				}))], {
					hk: "3DkBgK"
				})), o.a.createElement("p", {
					className: w.a.agreementLink
				}, E._("By purchasing coins, you agree to our {user agreement} and {privacy policy}", [E._param("user agreement", o.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank",
					rel: "noopener noreferrer"
				}, E._("User Agreement", null, {
					hk: "n6txc"
				}))), E._param("privacy policy", o.a.createElement("a", {
					href: "https://www.redditinc.com/policies/privacy-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, E._("Privacy Policy", null, {
					hk: "11oBec"
				})))], {
					hk: "jKCQS"
				}))), o.a.createElement("div", {
					className: w.a.buttonContainer
				}, o.a.createElement(_.r, {
					className: w.a.button,
					"data-redditstyle": !0,
					onClick: () => {
						t(Object(p.a)(R, y.a.StorefrontFreeAward)), ((e, t) => {
							r(Object(g.f)()), r(Object(O.c)({
								correlationId: t,
								packageId: e.mobileId
							}))
						})(k, n)
					}
				}, E._("Purchase Coins", null, {
					hk: "3ODyrr"
				}))))
			}))
		},
		"./src/reddit/components/Gold/TargetedOfferModal/index.m.less": function(e, t, r) {
			e.exports = {
				body: "_1UQtkWFUPZx3cvg89p_QO-",
				closeButton: "_2PHvXDbMSTznZwRDUomrbs",
				image: "_2kZDQ62kUfGTcHIrRuMfQI",
				dealTitle: "_3UuGw0seEAMRVnenFXhF5",
				dealDescription: "_2iIqESuZUyMyVKAfMHKOMn",
				deal: "_2FRbR5saJqIMTktiX1pmBx",
				agreementLink: "_1fN_jRgyxLT_P3uWQ3CKY",
				button: "_1hhH7WyB7ddA4S4ouD2FbK"
			}
		},
		"./src/reddit/components/Gold/TargetedOfferModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				c = r("./node_modules/react/index.js"),
				a = r.n(c),
				o = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				i = r("./src/higherOrderComponents/asModal/index.tsx"),
				d = r("./src/lib/currency/currencies.ts"),
				l = r("./src/lib/localizeCurrency/index.ts"),
				u = r("./src/reddit/helpers/correlationIdTracker.ts"),
				b = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				p = r("./src/reddit/hooks/useLocale.ts"),
				m = r("./src/reddit/hooks/useTracking.ts"),
				f = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				O = r("./src/reddit/actions/modal.ts"),
				g = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				y = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				j = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				h = r("./src/reddit/components/Gold/TargetedOfferModal/index.m.less"),
				_ = r.n(h);
			const k = Object(s.c)({
				correlationId: e => Object(y.r)(e) || Object(u.d)(u.a.GoldPayment, !1),
				dealCoinPackages: g.f,
				purchasePackageId: y.b
			});
			const w = Object(o.b)(k, e => ({
				onClose: () => {
					e(Object(O.f)())
				},
				onPurchaseClick: (t, r) => {
					e(Object(O.f)()), e(Object(f.c)({
						correlationId: r,
						packageId: t.mobileId
					}))
				}
			}));
			t.default = Object(i.a)(w((function(e) {
				const t = Object(p.a)(),
					r = Object(m.a)(),
					{
						correlationId: o,
						dealCoinPackages: s,
						onClose: i,
						onPurchaseClick: u,
						purchasePackageId: f
					} = e,
					O = s.filter(e => e.mobileId === f)[0];
				if (Object(c.useEffect)(() => {
						O && r(Object(b.h)(void 0, O.mobileId))
					}, []), !O) return i(), null;
				const {
					baselineCoins: g,
					baselinePennies: y,
					coins: h,
					dealInfo: k,
					pennies: w,
					mobileId: E
				} = O, x = h - g, C = x > 0, I = y - w, P = w !== y, {
					title: v,
					subtitle: A,
					type: T
				} = k, S = v || ("low_coin_upsell" === T ? n.fbt._("You’re low on coins", null, {
					hk: "2fHrPn"
				}) : n.fbt._("Special Offer!", null, {
					hk: "2wnTrq"
				})), N = A || n.fbt._("Stock up and save with this limited-time offer", null, {
					hk: "2eml5T"
				}), R = C ? n.fbt._("Buy {coin amount} for {price} and get {bonus coins} bonus coins", [n.fbt._param("coin amount", Object(l.b)(g, {
					locale: t,
					type: d.b.Reddit,
					currency: d.a
				})), n.fbt._param("price", Object(l.b)(O.pennies, {
					locale: t
				})), n.fbt._param("bonus coins", Object(l.a)(x, {
					locale: t
				}))], {
					hk: "2ZBhdF"
				}) : P ? n.fbt._("Save {baseline price} off normal price!", [n.fbt._param("baseline price", Object(l.b)(I, {
					locale: t
				}))], {
					hk: "CRTYf"
				}) : O.description;
				return a.a.createElement(j.e, {
					className: _.a.body
				}, a.a.createElement("button", {
					onClick: () => {
						r(Object(b.b)(void 0, E)), i()
					},
					className: _.a.closeButton
				}, a.a.createElement(j.b, null)), a.a.createElement("img", {
					className: _.a.image,
					src: O.images.marketing["2x"].url
				}), a.a.createElement("h4", {
					className: _.a.dealTitle
				}, S), a.a.createElement("p", {
					className: _.a.dealDescription
				}, N), a.a.createElement("h4", {
					className: _.a.deal
				}, R), a.a.createElement("p", {
					className: _.a.agreementLink
				}, n.fbt._("By purchasing coins, you agree to our {user agreement} and {privacy plicy}", [n.fbt._param("user agreement", a.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank",
					rel: "noopener noreferrer"
				}, n.fbt._("User Agreement", null, {
					hk: "n6txc"
				}))), n.fbt._param("privacy plicy", a.a.createElement("a", {
					href: "https://www.redditinc.com/policies/privacy-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, n.fbt._("Privacy Policy", null, {
					hk: "11oBec"
				})))], {
					hk: "1yjkQh"
				})), a.a.createElement(j.r, {
					className: _.a.button,
					"data-redditstyle": !0,
					onClick: () => {
						r(Object(b.a)(E)), u(O, o)
					}
				}, n.fbt._("Purchase", null, {
					hk: "l3q4W"
				})))
			})))
		},
		"./src/reddit/endpoints/gold/paypalPurchases.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "e", (function() {
				return m
			}));
			var n = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts"),
				s = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				i = r("./src/reddit/endpoints/gold/purchase.ts");
			const d = async ({
				buttonId: e,
				context: t,
				correlationId: r
			}) => {
				const d = {
						button_id: e,
						correlation_id: r
					},
					l = `${t.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					u = Object(s.a)(l);
				return Object(c.a)(Object(a.a)(t, [o.a]), {
					method: n.ib.POST,
					endpoint: u,
					data: d
				}).then(i.c)
			}, l = async ({
				context: e,
				coins: t,
				pennies: r,
				correlationId: s
			}) => {
				const d = {
					coins: t,
					pennies: r,
					correlation_id: s
				};
				return Object(c.a)(Object(a.a)(e, [o.a]), {
					method: n.ib.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(i.c)
			}, u = async ({
				context: e,
				awardId: t,
				pennies: r,
				thingId: s,
				correlationId: d
			}) => {
				const l = {
					award_id: t,
					correlation_id: d,
					pennies: r,
					thing_id: s
				};
				return Object(c.a)(Object(a.a)(e, [o.a]), {
					method: n.ib.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(i.c)
			}, b = async ({
				context: e,
				offerContext: t,
				orderId: r,
				coins: s,
				pennies: d,
				correlationId: l
			}) => {
				const u = {
					offer_context: t,
					order_id: r,
					coins: s,
					pennies: d,
					correlation_id: l
				};
				return Object(c.a)(Object(a.a)(e, [o.a]), {
					method: n.ib.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: u
				}).then(i.c)
			}, p = async ({
				awardId: e,
				context: t,
				coins: r,
				correlationId: s,
				isAnonymous: d,
				message: l,
				offerContext: u,
				orderId: b,
				pennies: p,
				thingId: m
			}) => {
				const f = {
					award_id: e,
					coins: r,
					correlation_id: s,
					is_anonymous: d,
					message: l,
					offer_context: u,
					order_id: b,
					pennies: p,
					thing_id: m
				};
				return Object(c.a)(Object(a.a)(t, [o.a]), {
					method: n.ib.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: f
				}).then(i.c)
			}, m = async ({
				awardId: e,
				context: t,
				correlationId: r,
				isAnonymous: s,
				message: d,
				orderId: l,
				thingId: u
			}) => {
				const b = {
					award_id: e,
					correlation_id: r,
					is_anonymous: s,
					message: d,
					order_id: l,
					thing_id: u
				};
				return Object(c.a)(Object(a.a)(t, [o.a]), {
					method: n.ib.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: b
				}).then(i.c)
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				c = r("./src/lib/prettyPrintNumber/index.ts");

			function a(e, t) {
				const r = new n.BigNumber(e),
					c = new n.BigNumber(t || 1);
				return r.dividedToIntegerBy(c).toString()
			}

			function o(e, t) {
				return Object(c.b)(parseInt(a(e, t), 10))
			}

			function s(e, t) {
				const r = new n.BigNumber(e),
					c = new n.BigNumber(t || 1);
				return r.multipliedBy(c).toFixed(0)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GoldTargetedOfferModal.ec5d107d86720ca7809d.js.map