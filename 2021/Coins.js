// https://www.redditstatic.com/desktop2x/Coins.623de8f926b69d429013.js
// Retrieved at 11/4/2021, 4:00:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Coins"], {
		"./node_modules/lodash/times.js": function(e, t, a) {
			var n = a("./node_modules/lodash/_baseTimes.js"),
				r = a("./node_modules/lodash/_castFunction.js"),
				s = a("./node_modules/lodash/toInteger.js"),
				c = 9007199254740991,
				i = 4294967295,
				o = Math.min;
			e.exports = function(e, t) {
				if ((e = s(e)) < 1 || e > c) return [];
				var a = i,
					l = o(e, i);
				t = r(t), e -= i;
				for (var d = n(l, t); ++a < e;) t(a);
				return d
			}
		},
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var n = a("./src/lib/currency/cleanNumber/index.ts");

			function r(e, t) {
				const a = Object(n.a)(e),
					r = parseInt(a) / 100;
				return Math.floor(r) !== r || t ? r.toFixed(2) : String(r)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, a) {
			"use strict";

			function n(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			a.d(t, "a", (function() {
				return n
			}))
		},
		"./src/lib/currency/currencies.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return n
			})), a.d(t, "c", (function() {
				return s
			})), a.d(t, "d", (function() {
				return c
			})), a.d(t, "a", (function() {
				return i
			})), a.d(t, "f", (function() {
				return o
			})), a.d(t, "g", (function() {
				return l
			})), a.d(t, "e", (function() {
				return d
			}));
			var n, r = a("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(n || (n = {}));
			const s = "USD",
				c = "ETH",
				i = "COINS",
				o = [c, "BTC"],
				l = [i, "SUBREDDIT_POINTS", "GAME_TOKENS"],
				d = {
					COINS: () => r.fbt._("Coins", null, {
						hk: "1T2Y4p"
					}),
					SUBREDDIT_POINTS: () => r.fbt._("Subreddit points", null, {
						hk: "1ytOO3"
					}),
					GAME_TOKENS: () => r.fbt._("Game tokens", null, {
						hk: "16BUrU"
					})
				}
		},
		"./src/lib/loadRedditAdsPixel.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			})), a.d(t, "b", (function() {
				return s
			}));
			var n = a("./src/lib/sentry/index.ts");

			function r() {
				! function(e, t) {
					if (!e.rdt) {
						var a = e.rdt = function() {
							a.sendEvent ? a.sendEvent.apply(a, arguments) : a.callQueue.push(arguments)
						};
						a.callQueue = [];
						var n = t.createElement("script");
						n.src = "https://www.redditstatic.com/ads/pixel.js", n.async = !0;
						var r = t.getElementsByTagName("script")[0];
						r.parentNode.insertBefore(n, r)
					}
				}(window, document), rdt("init", "t2_2q2gwo2t"), rdt("track", "PageVisit")
			}
			const s = () => {
				try {
					rdt("track", "Purchase")
				} catch (e) {
					n.c.captureMessage('Attempted to fire RedditAds "Purchase" pixel, but global "rdt" object was unavailable')
				}
			}
		},
		"./src/lib/localizeCurrency/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return l
			})), a.d(t, "b", (function() {
				return d
			}));
			var n = a("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				r = a("./src/lib/currency/centsToDollars/index.ts"),
				s = a("./src/lib/currency/currencies.ts"),
				c = a("./src/lib/prettyPrintNumber/index.ts"),
				i = a("./src/reddit/helpers/governance/tokens.ts"),
				o = a("./src/reddit/constants/intlSupport.ts");
			const l = (e, {
					locale: t = n.DEFAULT_LOCALE,
					pretty: a,
					formatOptions: r
				} = {}) => {
					const s = Number(e);
					return Object(o.c)() ? a ? Object(c.b)(s) : new Intl.NumberFormat(t, r).format(s) : m(s, a, t)
				},
				d = (e, t = {}) => {
					const {
						locale: a = n.DEFAULT_LOCALE,
						pretty: c,
						formatOptions: l,
						displayConversion: d,
						forceDecimals: b,
						currency: h = t.currency || (t.type ? p(t.type) : s.c),
						type: g = t.type || (t.currency ? u(t.currency) : s.b.Real)
					} = t, f = Number(e), k = String(e);
					switch (g) {
						case s.b.Reddit: {
							const e = s.e[h],
								t = e ? e() : h;
							return Object(o.c)() ? new Intl.NumberFormat(a, {
								currencyDisplay: "symbol",
								...l
							}).format(f) + " " + t : m(f, c, a, t)
						}
						case s.b.Crypto: {
							if (c) {
								return Object(i.c)(k, d) + " " + h
							}
							const e = Number(Object(i.b)(k, d));
							return Object(o.c)() ? new Intl.NumberFormat(a, {
								style: "currency",
								currency: h,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...l
							}).format(e) : m(e, c, a, h)
						}
						case s.b.Real:
						default: {
							const e = Number(Object(r.a)(k, b));
							return Object(o.c)() ? new Intl.NumberFormat(a, {
								style: "currency",
								currency: h,
								currencyDisplay: "symbol",
								notation: c ? "compact" : "standard",
								...l
							}).format(e) : m(e, c, a, h)
						}
					}
				},
				m = (e, t, a, n) => {
					return (t ? Object(c.b)(e) : e.toLocaleString(a)) + (n ? " " + n : "")
				},
				u = e => s.g.includes(e.toUpperCase()) ? s.b.Reddit : s.f.includes(e.toUpperCase()) ? s.b.Crypto : s.b.Real,
				p = e => {
					switch (e) {
						case s.b.Crypto:
							return s.d;
						case s.b.Reddit:
							return s.a;
						case s.b.Real:
						default:
							return s.c
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts": function(e, t, a) {
			"use strict";
			a.d(t, "c", (function() {
				return E
			})), a.d(t, "a", (function() {
				return x
			})), a.d(t, "e", (function() {
				return v
			})), a.d(t, "b", (function() {
				return P
			})), a.d(t, "d", (function() {
				return I
			})), a.d(t, "j", (function() {
				return T
			})), a.d(t, "i", (function() {
				return A
			})), a.d(t, "f", (function() {
				return S
			})), a.d(t, "g", (function() {
				return G
			})), a.d(t, "h", (function() {
				return M
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./src/lib/formatApiError/index.ts"),
				s = a("./src/lib/makeActionCreator/index.ts"),
				c = a("./src/lib/sentry/index.ts"),
				i = a("./src/reddit/constants/modals.ts"),
				o = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = a("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				d = a("./src/reddit/actions/modal.ts"),
				m = a("./src/reddit/actions/toaster.ts"),
				u = a("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = a("./src/reddit/endpoints/gold/purchase.ts"),
				b = a("./src/reddit/helpers/correlationIdTracker.ts"),
				h = a("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				g = a("./src/reddit/models/Gold/Award.ts"),
				f = a("./src/reddit/models/Gold/ProductOffer.ts"),
				k = a("./src/reddit/models/Toast/index.ts"),
				O = a("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				_ = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				y = a("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const w = Object(s.a)(y.q),
				j = Object(s.a)(y.c),
				E = e => async (t, a) => {
					t(w(e)), t(Object(d.h)(i.a.ECON_COIN_PURCHASE))
				}, x = () => async (e, t) => {
					e(j()), e(Object(d.g)(i.a.ECON_COIN_PURCHASE))
				}, C = Object(s.a)(y.u), v = ({
					correlationId: e,
					packageId: t
				}) => async (a, n) => {
					const r = n();
					Object(O.e)(r, t) ? (a(C({
						correlationId: e,
						packageId: t
					})), a(Object(d.i)(i.a.GOLD_TARGETED_OFFER_MODAL))) : c.c.captureMessage(`Tried to show targeted offer, but could not find package id: ${t}`)
				}, N = Object(s.a)(y.p), P = ({
					correlationId: e,
					packageId: t
				}) => async (a, n) => {
					Object(O.c)(n(), t) ? (a(N({
						correlationId: e,
						packageId: t
					})), a(Object(d.i)(i.a.ECON_COIN_PACKAGE_OFFER))) : c.c.captureMessage(`Tried to show coin package offer, but could not find package id: ${t}`)
				}, I = (e, t, a) => async (r, s) => {
					await r(Object(l.c)(e, a));
					const c = s(),
						i = Object(O.q)(c);
					if (0 !== i.length) r(E({
						correlationId: a,
						packageId: i[0].mobileId,
						thingId: t
					}));
					else {
						const e = Object(O.n)(c),
							t = n.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						r(Object(m.f)({
							kind: k.b.Error,
							duration: m.a,
							text: e || t
						}))
					}
				}, T = (e, t) => async (a, s, {
					apiContext: c
				}) => {
					const i = s(),
						{
							coins: l,
							pennies: d
						} = t,
						m = Object(_.r)(i) || Object(b.d)(b.a.GoldPayment, !1);
					let u, h;
					a(Object(o.stripeTokenPending)());
					const g = Object(_.y)(i);
					if (g || (u = await a(Object(o.validateAndCreateStripeToken)(e)), h = Object(_.v)(i), u)) try {
						const e = await Object(p.f)({
							coins: l,
							context: c(),
							correlationId: m,
							offerContext: Object(f.d)(t, !1),
							pennies: d,
							rememberCard: h,
							savedCardId: g || void 0,
							token: u
						});
						if (e.error) {
							const t = Object(r.a)(e.error, e.status);
							return void a(Object(o.stripeApiError)(t))
						}
						return a(Object(o.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(b.b)(b.a.GoldPayment)
					} catch (k) {
						const e = Object(r.a)(k);
						a(Object(o.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						a(Object(o.stripeApiError)(e))
					}
				}, A = (e, t, s) => async (c, i, {
					apiContext: l
				}) => {
					const d = i(),
						{
							coins: m,
							pennies: u
						} = t,
						k = Object(_.r)(d) || Object(b.d)(b.a.GoldPayment, !1);
					let O, y;
					c(Object(o.stripeTokenPending)());
					const w = Object(_.y)(d);
					if (w || (O = await c(Object(o.validateAndCreateStripeToken)(e)), y = Object(_.v)(d), O)) try {
						const {
							gildModalThingId: e,
							isAnonymous: i,
							message: _,
							selectedAward: j
						} = d.gild;
						if (!e || !j.id) {
							const e = n.fbt._("Gilding unknown thing", null, {
								hk: "2Jiujp"
							});
							return void c(Object(o.stripeApiError)(e))
						}
						const E = j.id,
							C = {
								gildType: E,
								isAnonymous: i,
								message: _
							},
							v = await Object(p.e)({
								coins: m,
								context: l(),
								correlationId: k,
								gildParams: C,
								isOldReddit: s,
								offerContext: Object(f.d)(t, !0),
								pennies: u,
								rememberCard: y,
								savedCardId: w || void 0,
								thingId: e,
								token: O
							});
						if (v.error) {
							const e = Object(r.a)(v.error, v.status);
							return void c(Object(o.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await a.e("gildActions").then(a.bind(null, "./src/reddit/actions/gold/gild.ts"));
							c(x()), c(Object(o.paymentCompleted)({
								confirmed: !1
							}));
							const {
								awarder_karma_received: n,
								all_awardings: r,
								coins: s,
								treatment_tags: i
							} = v.body;
							return c(t({
								awardKarmaReceived: n || 0,
								awardId: E,
								awardings: r && r.length ? Object(h.a)(r).map(e => ({
									award: Object(g.h)(e),
									total: e.count
								})) : [],
								coins: s,
								id: e,
								treatmentTags: i
							})), void Object(b.b)(b.a.GoldPayment)
						}
					} catch (j) {
						const e = Object(r.a)(j);
						c(Object(o.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						c(Object(o.stripeApiError)(e))
					}
				}, S = e => async (t, a, {
					apiContext: n
				}) => {
					const s = Object(b.c)(b.a.GoldPayment),
						{
							coins: i,
							pennies: l
						} = e;
					try {
						const e = await Object(u.a)({
							context: n(),
							coins: i,
							pennies: l,
							correlationId: s
						});
						if (e.error) {
							const a = Object(r.a)(e.error);
							return void t(Object(o.paypalApiError)(a))
						} {
							const {
								order_id: t
							} = e.body;
							return t
						}
					} catch (d) {
						c.c.captureException(d);
						const e = Object(r.a)(d);
						t(Object(o.paypalApiError)(e))
					}
				}, G = (e, t) => async (a, n, {
					apiContext: s
				}) => {
					const i = n(),
						l = Object(_.r)(i) || Object(b.d)(b.a.GoldPayment, !1),
						{
							coins: d,
							pennies: m
						} = t;
					try {
						const n = await Object(u.c)({
							context: s(),
							offerContext: Object(f.d)(t, !1),
							orderId: e,
							coins: d,
							pennies: m,
							correlationId: l
						});
						if (n.error) {
							const e = Object(r.a)(n.error);
							return void a(Object(o.paypalApiError)(e))
						} {
							const {
								coins: e
							} = n.body;
							a(Object(o.paymentCompleted)({
								coins: e,
								confirmed: !0
							})), Object(b.b)(b.a.GoldPayment)
						}
					} catch (p) {
						c.c.captureException(p);
						const e = Object(r.a)(p);
						a(Object(o.paypalApiError)(e))
					}
				}, M = (e, t) => async (s, i, {
					apiContext: l
				}) => {
					const d = i(),
						m = Object(_.r)(d) || Object(b.d)(b.a.GoldPayment, !1),
						{
							coins: p,
							pennies: k
						} = t;
					try {
						const {
							gildModalThingId: c,
							isAnonymous: i,
							message: O,
							selectedAward: _
						} = d.gild;
						if (!c || !_) return void s(Object(o.paypalApiError)(n.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const y = _.id,
							w = await Object(u.d)({
								context: l(),
								offerContext: Object(f.d)(t, !0),
								orderId: e,
								coins: p,
								pennies: k,
								thingId: c,
								awardId: y,
								message: O || "",
								isAnonymous: i,
								correlationId: m
							});
						if (w.error) {
							const e = Object(r.a)(w.error);
							s(Object(o.paypalApiError)(e))
						} else {
							s(x());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: n,
								subreddit_coins: r,
								treatment_tags: i
							} = w.body;
							s(Object(o.paymentCompleted)({
								coins: n,
								confirmed: !0
							}));
							const {
								gildSuccessful: l
							} = await a.e("gildActions").then(a.bind(null, "./src/reddit/actions/gold/gild.ts"));
							s(l({
								awardId: y,
								awardKarmaReceived: t || 0,
								awardings: Object(h.a)(e).map(e => ({
									award: Object(g.h)(e),
									total: e.count
								})),
								coins: n,
								id: c,
								subredditCoins: r,
								treatmentTags: i
							})), Object(b.b)(b.a.GoldPayment)
						}
					} catch (O) {
						c.c.captureException(O);
						const e = Object(r.a)(O);
						s(Object(o.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "selectPaymentMethod", (function() {
				return l
			})), a.d(t, "paymentCompleted", (function() {
				return d
			})), a.d(t, "cardNameInput", (function() {
				return m
			})), a.d(t, "postalCodeInput", (function() {
				return u
			})), a.d(t, "cardNameEmpty", (function() {
				return p
			})), a.d(t, "cardElementChange", (function() {
				return b
			})), a.d(t, "stripeTokenPending", (function() {
				return h
			})), a.d(t, "stripeTokenError", (function() {
				return g
			})), a.d(t, "stripeApiError", (function() {
				return f
			})), a.d(t, "validateAndCreateStripeToken", (function() {
				return k
			})), a.d(t, "paypalApiError", (function() {
				return O
			})), a.d(t, "toggleRememberCard", (function() {
				return _
			})), a.d(t, "selectSavedCard", (function() {
				return y
			})), a.d(t, "_deleteSavedCard", (function() {
				return w
			})), a.d(t, "deleteSavedCard", (function() {
				return j
			})), a.d(t, "savedCardsPending", (function() {
				return E
			})), a.d(t, "savedCardsSuccess", (function() {
				return x
			})), a.d(t, "loadSavedCards", (function() {
				return C
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./src/lib/sentry/index.ts"),
				s = a("./src/lib/makeActionCreator/index.ts"),
				c = a("./src/reddit/endpoints/gold/purchase.ts"),
				i = a("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				o = a("./src/reddit/selectors/goldPurchaseModals.ts");
			const l = Object(s.a)(i.B),
				d = Object(s.a)(i.w),
				m = Object(s.a)(i.b),
				u = Object(s.a)(i.y),
				p = Object(s.a)(i.a),
				b = Object(s.a)(i.E),
				h = Object(s.a)(i.G),
				g = Object(s.a)(i.F),
				f = Object(s.a)(i.D),
				k = e => async (t, a) => {
					const r = a(),
						s = Object(o.h)(r),
						c = Object(o.l)(r),
						{
							token: i,
							error: l
						} = await e.createToken({
							name: s,
							address_zip: c
						});
					if (s.trim()) {
						if (!l && i) return i;
						t(g(l || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(p({
							message: e
						}))
					}
				}, O = Object(s.a)(i.x), _ = Object(s.a)(i.H), y = Object(s.a)(i.C), w = Object(s.a)(i.g), j = e => async (t, a, {
					apiContext: n
				}) => {
					t(w(e));
					try {
						const t = await Object(c.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (s) {
						r.c.captureException(s)
					}
				}, E = Object(s.a)(i.z), x = Object(s.a)(i.A), C = () => async (e, t, {
					apiContext: a
				}) => {
					e(E());
					try {
						const t = await Object(c.b)(a());
						if (t.error) throw new Error(t.error.type);
						const n = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(x(n)), n[0] && e(y(n[0].cardId))
					} catch (n) {
						r.c.captureException(n), e(x([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return g
			})), a.d(t, "c", (function() {
				return _
			})), a.d(t, "a", (function() {
				return w
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./src/lib/env/index.ts"),
				s = a("./src/lib/makeActionCreator/index.ts"),
				c = a("./src/lib/sentry/index.ts"),
				i = a("./src/reddit/endpoints/gold/productCatalog/index.ts"),
				o = a("./src/reddit/selectors/user.ts"),
				l = a("./src/reddit/actions/toaster.ts"),
				d = a("./src/reddit/models/Toast/index.ts"),
				m = a("./src/reddit/actions/post.ts"),
				u = a("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const p = Object(s.a)(u.j),
				b = Object(s.a)(u.k),
				h = Object(s.a)(u.i),
				g = e => async (t, a, {
					apiContext: s
				}) => {
					t(p());
					const l = a(),
						d = Object(o.K)(l);
					try {
						const a = !d,
							n = await Object(i.b)({
								context: s(),
								correlationId: e,
								shouldUseCurrentOrigin: a
							});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const r = n.body;
						t(b(r))
					} catch (m) {
						Object(r.b)() || console.error(m), c.c.captureException(m);
						const e = n.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(h(e))
					}
				}, f = Object(s.a)(u.m), k = Object(s.a)(u.n), O = Object(s.a)(u.l), _ = (e, t) => async (a, s, {
					apiContext: o
				}) => {
					a(f());
					try {
						const n = await Object(i.c)({
							awardId: e,
							context: o(),
							correlationId: t
						});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const r = n.body;
						if (!r.coinPackages || !r.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						a(k(r))
					} catch (l) {
						Object(r.b)() || console.error(l), c.c.captureException(l);
						const e = n.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						a(O(e))
					}
				}, y = Object(s.a)(u.h), w = () => async (e, t, {
					gqlContext: a
				}) => {
					var s, o;
					try {
						const t = await Object(i.a)(a());
						if (t.ok) {
							const a = t.body.data.claimAwardOffer;
							if (null === (s = a.errors) || void 0 === s ? void 0 : s.length) throw new Error(a.errors.map(e => e.message).join(" | "));
							if (!(null === (o = a.awards) || void 0 === o ? void 0 : o.length)) throw new Error("Got empty award list on free award offer claim");
							if (!a.ok) throw new Error("Got not ok response on free award offer claim");
							await e(y({
								awards: a.awards
							})), e(Object(m.B)())
						}
					} catch (u) {
						Object(r.b)() || console.error(u), e(Object(l.f)({
							kind: d.b.Error,
							text: n.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), c.c.captureException(u)
					}
				}
		},
		"./src/reddit/components/CoinPurchasePackage/index.m.less": function(e, t, a) {
			e.exports = {
				coinPurchasePackage: "_2EIXBaqbDzjEAL7-FJSYrP",
				large: "_2bLqgYtdh1iwHZvymepMHY",
				imageContainer: "_3UcT0NNsA2y6trB2G7Qk3T",
				badge: "_2q1pllb_vmiNtpjLMUbL3E",
				stamp: "dh-QO7AdDu0vFy7aoCaVt",
				stampIcon: "ei1DxPM2zy9FNW2ulDBOn",
				stampValue: "lVRFLCbqG6b523UFMdEj3",
				stampText: "_3UmM4fIFVtu49_z-3UMgZL",
				contentContainer: "_3YFnrc2p9Tl-6EMp1fAqpG",
				price: "_3eYcjtmYoyVXxiONpaL-dl",
				priceCoinIcon: "_3Cwg9Vp-uedO-_VTBrJInh",
				priceValue: "_5vvqF-Ums1umqkRQRQgxc",
				priceCurrency: "GAlR-4atoPo_42Ies2wM4",
				crossout: "dIoLyZbXoDJefsplq4m_j",
				description: "_36_v0R5TTjmgVJ4q6NSB-6",
				ctaContainer: "_34OTQdJgV4WKGff3WUOMAj",
				cta: "_2VikcGTdLgHpqRMo203jak",
				priceCrossout: "_1ZviI-xoPLg6gwP7AQrMUb"
			}
		},
		"./src/reddit/components/CoinPurchasePackage/placeholder.m.less": function(e, t, a) {
			e.exports = {
				packagePlaceholder: "_2qznWNxYQ2Sp1T5Gx9Ya2r",
				large: "_21Ve23nfMGEg24nP4w5bKj"
			}
		},
		"./src/reddit/components/CollapsibleFAQ/index.m.less": function(e, t, a) {
			e.exports = {
				collapsibleFAQ: "PGMuR8fr8VizHP4fajECO",
				collapsibleFaq: "PGMuR8fr8VizHP4fajECO",
				questionButton: "AE_-OfcuQcVv1sMNAnYez",
				buttonContent: "_3GpGGAjkKUtSIydzuhDgjk",
				collapseIcon: "GcBEian3rJp0dqdStxeaG",
				collapsibleAnswer: "_2aCJykcYH0l0L0J29lNN6X",
				isOpen: "_1epMyDuMGgpwMk-QoPqYMi"
			}
		},
		"./src/reddit/components/CollapsibleFAQ/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./src/reddit/components/CollapsibleFAQ/index.m.less"),
				c = a.n(s),
				i = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				l = a("./src/reddit/icons/svgs/ChevronUp/index.tsx");
			class d extends r.a.Component {
				constructor(e) {
					super(e), this.toggleOpen = () => {
						this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.state = {
						isOpen: !e.defaultClosed
					}
				}
				render() {
					const {
						className: e,
						question: t,
						children: a
					} = this.props, {
						isOpen: n
					} = this.state, s = n ? c.a.isOpen : "";
					return r.a.createElement("div", {
						className: Object(i.a)(e, c.a.collapsibleFAQ)
					}, r.a.createElement("button", {
						className: c.a.questionButton,
						type: "button",
						onClick: this.toggleOpen
					}, r.a.createElement("span", {
						className: c.a.buttonContent,
						tabIndex: -1
					}, t, n ? r.a.createElement(l.a, {
						className: c.a.collapseIcon
					}) : r.a.createElement(o.a, {
						className: c.a.collapseIcon
					}))), r.a.createElement("div", {
						className: Object(i.a)(c.a.collapsibleAnswer, s)
					}, a))
				}
			}
			t.a = d
		},
		"./src/reddit/components/GildMarketingDescription/index.m.less": function(e, t, a) {
			e.exports = {
				iconContainer: "_3aLGwXXgtLTRBL_s4zGzpA",
				textContainer: "L1uF-uIVgiGprHTgSe6Pa",
				title: "_1RHFAL2gq_LNUOW3yaREdJ",
				content: "_3iKxdZxO2uDcDfP0M_uXXu",
				isMobileStyled: "hhQ0bLehrQAD95bHHfIHL"
			}
		},
		"./src/reddit/components/GildMarketingDescription/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/components/GildMarketingDescription/index.m.less"),
				i = a.n(c);
			t.a = e => {
				const {
					children: t,
					className: a,
					icon: n,
					isMobileStyled: c,
					title: o
				} = e;
				return r.a.createElement("div", {
					className: Object(s.a)(a, {
						[i.a.isMobileStyled]: c
					})
				}, r.a.createElement("div", {
					className: i.a.iconContainer
				}, n), r.a.createElement("div", {
					className: i.a.textContainer
				}, r.a.createElement("h3", {
					className: i.a.title
				}, o), r.a.createElement("p", {
					className: i.a.content
				}, t)))
			}
		},
		"./src/reddit/components/MarketingPageFooter/index.m.less": function(e, t, a) {
			e.exports = {
				marketingPageFooter: "_3BwBOzWryMj3__GUbbUsfT",
				marketingPageFooterInner: "_30YqpAvDOv6bhMsdX4RBmh",
				linkContainer: "_3k49tjCFDJWYNMxa7F_Vcz",
				linkCol: "Kc3eh30cKiJsqGyYdTomf",
				linkBoldCol: "NdUUYBbykS5XarNMBnwW8",
				link: "_2__-I0A5TrnEaHBIKzBzWG",
				linkColInner: "Qeqi5He8ogV_wEJHq4JuY",
				linkItem: "_2faDmx1pVndPEOOWcvmbzy",
				legal: "_37R5bPLs9vyWkel2akHN9v",
				legalItem: "_3sfkqPfhkeoURTGRzBv1TP",
				legalLink: "_38avtjw3edhexhYWmJx1Rw"
			}
		},
		"./src/reddit/components/MarketingPageFooter/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./src/reddit/components/MarketingPageFooter/index.m.less"),
				c = a.n(s),
				i = a("./src/lib/classNames/index.ts");
			const {
				fbt: o
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => r.a.createElement("div", {
				className: Object(i.a)(e.className, c.a.marketingPageFooter)
			}, r.a.createElement("div", {
				className: Object(i.a)(e.className, c.a.marketingPageFooterInner)
			}, r.a.createElement("div", {
				className: c.a.linkContainer
			}, r.a.createElement("div", {
				className: c.a.linkCol
			}, r.a.createElement("ul", {
				className: c.a.linkColInner
			}, r.a.createElement("li", {
				className: c.a.linkItem
			}, r.a.createElement("a", {
				className: c.a.link,
				href: "https://about.reddit.com"
			}, o._("about", null, {
				hk: "3IO4c7"
			}))), r.a.createElement("li", {
				className: c.a.linkItem
			}, r.a.createElement("a", {
				className: c.a.link,
				href: "https://about.reddit.com/careers/"
			}, o._("careers", null, {
				hk: "2GATRU"
			}))), r.a.createElement("li", {
				className: c.a.linkItem
			}, r.a.createElement("a", {
				className: c.a.link,
				href: "https://about.reddit.com/press/"
			}, o._("press", null, {
				hk: "iUiGg"
			}))))), r.a.createElement("div", {
				className: c.a.linkCol
			}, r.a.createElement("ul", {
				className: c.a.linkColInner
			}, r.a.createElement("li", {
				className: c.a.linkItem
			}, r.a.createElement("a", {
				className: c.a.link,
				href: "https://www.redditinc.com/advertising"
			}, o._("advertise", null, {
				hk: "RYuIn"
			}))), r.a.createElement("li", {
				className: c.a.linkItem
			}, r.a.createElement("a", {
				className: c.a.link,
				href: "http://www.redditblog.com/"
			}, o._("blog", null, {
				hk: "4xzWuA"
			}))), r.a.createElement("li", {
				className: c.a.linkItem
			}, r.a.createElement("a", {
				className: c.a.link,
				href: "https://www.reddithelp.com"
			}, o._("help", null, {
				hk: "36XyzA"
			}))))), r.a.createElement("div", {
				className: Object(i.a)(c.a.linkCol, c.a.linkBoldCol)
			}, r.a.createElement("ul", {
				className: c.a.linkColInner
			}, r.a.createElement("li", {
				className: c.a.linkItem
			}, r.a.createElement("a", {
				className: c.a.link,
				href: "https://www.reddit.com/coins"
			}, o._("reddit coins", null, {
				hk: "3Ts6tu"
			}))), r.a.createElement("li", {
				className: c.a.linkItem
			}, r.a.createElement("a", {
				className: c.a.link,
				href: "https://www.reddit.com/premium"
			}, o._("reddit premium", null, {
				hk: "3vPbLO"
			}))), r.a.createElement("li", {
				className: c.a.linkItem
			}, r.a.createElement("a", {
				className: c.a.link,
				href: "https://redditgifts.com/"
			}, o._("reddit gifts", null, {
				hk: "3WNNEy"
			}))))), r.a.createElement("div", {
				className: Object(i.a)(c.a.linkCol, c.a.linkBoldCol)
			}, r.a.createElement("ul", {
				className: c.a.linkColInner
			}, r.a.createElement("li", {
				className: c.a.linkItem
			}, r.a.createElement("a", {
				className: c.a.link,
				href: "https://www.facebook.com/reddit/"
			}, o._("Facebook", null, {
				hk: "47DT2F"
			}))), r.a.createElement("li", {
				className: c.a.linkItem
			}, r.a.createElement("a", {
				className: c.a.link,
				href: "https://twitter.com/reddit"
			}, o._("Twitter", null, {
				hk: "3aUv7u"
			}))), r.a.createElement("li", {
				className: c.a.linkItem
			}, r.a.createElement("a", {
				className: c.a.link,
				href: "https://www.instagram.com/reddit/"
			}, o._("Instagram", null, {
				hk: "dVIRX"
			})))))), r.a.createElement("ul", {
				className: c.a.legal
			}, r.a.createElement("li", {
				className: c.a.legalItem
			}, r.a.createElement("a", {
				className: c.a.legalLink,
				href: "https://www.redditinc.com/policies/content-policy"
			}, o._("content policy", null, {
				hk: "4ptiaZ"
			}))), r.a.createElement("li", {
				className: c.a.legalItem
			}, r.a.createElement("a", {
				className: c.a.legalLink,
				href: "https://www.reddit.com/help/privacypolicy"
			}, o._("privacy policy", null, {
				hk: "1ybjnz"
			}))), r.a.createElement("li", {
				className: c.a.legalItem
			}, r.a.createElement("a", {
				className: c.a.legalLink,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, o._("user agreement", null, {
				hk: "4puRxC"
			}))), r.a.createElement("li", {
				className: c.a.legalItem
			}, r.a.createElement("a", {
				className: c.a.legalLink,
				href: "https://www.reddit.com/help/healthycommunities/"
			}, o._("mod policy", null, {
				hk: "1VvAdM"
			}))), r.a.createElement("li", {
				className: c.a.legalItem
			}, o._("© {year} Reddit, Inc. All rights reserved", [o._param("year", (new Date).getFullYear().toString())], {
				hk: "23FUx6"
			})))))
		},
		"./src/reddit/components/PremiumMarketingBanner/index.m.less": function(e, t, a) {
			e.exports = {
				premiumBanner: "_2tsT1sLHLYXqHUGNYQsm6-",
				premiumCrest: "_1ExqjoNTE2nif0e3QVdLwy",
				premiumDescription: "S8jGzZVfR9ZPB9DIOUB7f",
				premiumCTA: "svs_XC_fBjFtyJDODBqnd",
				premiumCta: "svs_XC_fBjFtyJDODBqnd"
			}
		},
		"./src/reddit/components/TimeLeft/TimeLeft.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./src/reddit/components/TimeLeft/index.m.less"),
				c = a.n(s),
				i = a("./src/lib/classNames/index.ts"),
				o = a("./src/lib/timeAgo/index.ts"),
				l = a("./src/reddit/icons/svgs/Clock/index.tsx");
			t.a = e => {
				const {
					className: t,
					expirationDate: a
				} = e, n = Math.floor(a.getTime() / 1e3), s = Object(o.b)(n);
				return r.a.createElement("div", {
					className: Object(i.a)(t)
				}, r.a.createElement(l.a, {
					className: c.a.clockIcon
				}), r.a.createElement("span", {
					className: c.a.timeLeft
				}, s))
			}
		},
		"./src/reddit/components/TimeLeft/index.m.less": function(e, t, a) {
			e.exports = {
				clockIcon: "_1DDlcC1o7n-afkLICCzCK9",
				timeLeft: "UN0qnXla79aOGiH-PaULH"
			}
		},
		"./src/reddit/endpoints/gold/paypalPurchases.ts": function(e, t, a) {
			"use strict";
			a.d(t, "f", (function() {
				return l
			})), a.d(t, "a", (function() {
				return d
			})), a.d(t, "b", (function() {
				return m
			})), a.d(t, "c", (function() {
				return u
			})), a.d(t, "d", (function() {
				return p
			})), a.d(t, "e", (function() {
				return b
			}));
			var n = a("./src/lib/constants/index.ts"),
				r = a("./src/lib/makeApiRequest/index.ts"),
				s = a("./src/lib/omitHeaders/index.ts"),
				c = a("./src/reddit/constants/headers.ts"),
				i = a("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				o = a("./src/reddit/endpoints/gold/purchase.ts");
			const l = async ({
				buttonId: e,
				context: t,
				correlationId: a
			}) => {
				const l = {
						button_id: e,
						correlation_id: a
					},
					d = `${t.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					m = Object(i.a)(d);
				return Object(r.a)(Object(s.a)(t, [c.a]), {
					method: n.ib.POST,
					endpoint: m,
					data: l
				}).then(o.c)
			}, d = async ({
				context: e,
				coins: t,
				pennies: a,
				correlationId: i
			}) => {
				const l = {
					coins: t,
					pennies: a,
					correlation_id: i
				};
				return Object(r.a)(Object(s.a)(e, [c.a]), {
					method: n.ib.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: l
				}).then(o.c)
			}, m = async ({
				context: e,
				awardId: t,
				pennies: a,
				thingId: i,
				correlationId: l
			}) => {
				const d = {
					award_id: t,
					correlation_id: l,
					pennies: a,
					thing_id: i
				};
				return Object(r.a)(Object(s.a)(e, [c.a]), {
					method: n.ib.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: d
				}).then(o.c)
			}, u = async ({
				context: e,
				offerContext: t,
				orderId: a,
				coins: i,
				pennies: l,
				correlationId: d
			}) => {
				const m = {
					offer_context: t,
					order_id: a,
					coins: i,
					pennies: l,
					correlation_id: d
				};
				return Object(r.a)(Object(s.a)(e, [c.a]), {
					method: n.ib.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: m
				}).then(o.c)
			}, p = async ({
				awardId: e,
				context: t,
				coins: a,
				correlationId: i,
				isAnonymous: l,
				message: d,
				offerContext: m,
				orderId: u,
				pennies: p,
				thingId: b
			}) => {
				const h = {
					award_id: e,
					coins: a,
					correlation_id: i,
					is_anonymous: l,
					message: d,
					offer_context: m,
					order_id: u,
					pennies: p,
					thing_id: b
				};
				return Object(r.a)(Object(s.a)(t, [c.a]), {
					method: n.ib.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: h
				}).then(o.c)
			}, b = async ({
				awardId: e,
				context: t,
				correlationId: a,
				isAnonymous: i,
				message: l,
				orderId: d,
				thingId: m
			}) => {
				const u = {
					award_id: e,
					correlation_id: a,
					is_anonymous: i,
					message: l,
					order_id: d,
					thing_id: m
				};
				return Object(r.a)(Object(s.a)(t, [c.a]), {
					method: n.ib.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: u
				}).then(o.c)
			}
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			var n = a("./node_modules/react/index.js"),
				r = a.n(n);

			function s(e, t) {
				const a = e.toString().split(":");
				return a.length % 2 == 0 ? e : a.reduce((e, a, n) => (n % 2 == 0 ? e.push(a) : "" === a ? e.push(":") : `:${a}:` in t ? e.push(t[`:${a}:`]) : e.push(`:${a}:`), e), []).map((e, t) => r.a.createElement(r.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return s
			})), a.d(t, "c", (function() {
				return c
			})), a.d(t, "a", (function() {
				return i
			}));
			var n = a("./node_modules/bignumber.js/bignumber.js"),
				r = a("./src/lib/prettyPrintNumber/index.ts");

			function s(e, t) {
				const a = new n.BigNumber(e),
					r = new n.BigNumber(t || 1);
				return a.dividedToIntegerBy(r).toString()
			}

			function c(e, t) {
				return Object(r.b)(parseInt(s(e, t), 10))
			}

			function i(e, t) {
				const a = new n.BigNumber(e),
					r = new n.BigNumber(t || 1);
				return a.multipliedBy(r).toFixed(0)
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, a) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			})), a.d(t, "b", (function() {
				return i
			}));
			var n = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/helpers/styles/mixins/loading.m.less"),
				s = a.n(r);
			const c = ({
					isLoading: e
				}) => Object(n.a)(s.a.loadingBackground, {
					[s.a["m-loading"]]: e
				}),
				i = e => Object(n.a)(s.a.loadingBar, c(e))
		},
		"./src/reddit/models/Gold/Coins/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			})), a.d(t, "c", (function() {
				return s
			})), a.d(t, "b", (function() {
				return c
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = a("./node_modules/fbt/lib/FbtPublic.js");
			const r = new Set(["low_coin_upsell"]),
				s = new Set(["new_purchaser", "repeat_purchaser"]),
				c = [{
					prompt: () => n.fbt._("What are coins?", null, {
						hk: "bD2cQ"
					}),
					answer: () => n.fbt._("Coins are our virtual good, and you can use them to award exceptional posts or comments, giving them Silver, Gold, or Platinum. We'll be adding cool new ways to spend your coins in the future.", null, {
						hk: "2RS7Fb"
					})
				}, {
					prompt: () => n.fbt._('What is "Give Award"?', null, {
						hk: "Q08fJ"
					}),
					answer: () => n.fbt._('Giving an Award, or "gilding", is a way to show appreciation for an exceptional contribution to Reddit. You can award someone by clicking on "Give Award" below their post or comment. This distinguishes it with an Award for all to see, and some even grant the honoree special bonus benefits.', null, {
						hk: "4fZWQ3"
					})
				}, {
					prompt: () => n.fbt._("What are these new Award types?", null, {
						hk: "2ysK1l"
					}),
					answer: () => n.fbt._("There are now several ways to Give Awards. A Silver Award requires 100 coins, which simply marks a post or comment with a Silver Award icon. A classic Gold Award requires 500 coins and gives the recipient a week of Reddit Premium membership and 100 coins. Finally, the ultra rare Platinum Award costs 1800 coins, and gives the recipient with one month of Reddit Premium membership, which includes 700 coins for that month.", null, {
						hk: "Mvg07"
					})
				}, {
					prompt: () => n.fbt._("I bought coins, how can I tell how many I have?", null, {
						hk: "4a4pGf"
					}),
					answer: () => n.fbt._("If you buy coins you will always have a balance associated with your Reddit account. You can view your balance on the top navigation bar by your username.", null, {
						hk: "2VWZ2s"
					})
				}, {
					prompt: () => n.fbt._("Can I transfer coins between Reddit accounts?", null, {
						hk: "1jLVez"
					}),
					answer: () => n.fbt._("You cannot transfer your Reddit coin balance across usernames, sorry. You can offer a Gold Award to other users which will grant them 100 coins.", null, {
						hk: "435l4g"
					})
				}, {
					prompt: () => n.fbt._("Can I get coins for free?", null, {
						hk: "1fhxmd"
					}),
					answer: () => n.fbt._("We may give away coins on special occasions. Stay tuned!", null, {
						hk: "3qKa11"
					})
				}, {
					prompt: () => n.fbt._("What happened to Creddits? Do those still exist?", null, {
						hk: "qTu5W"
					}),
					answer: () => n.fbt._("Yes, Creddits are simply called \"coins\" now, and we've converted any existing balance at a generous exchange rate of one Creddit to 2000 coins. That's double their original monetary value as a thank you for supporting us early. Use them to award exceptional posts and comments you come across. Thanks again for your contribution to the Reddit community.", null, {
						hk: "3bz9Wy"
					})
				}, {
					prompt: () => n.fbt._("I thought Gold was the name of Reddit's subscription membership?", null, {
						hk: "26YDse"
					}),
					answer: () => n.fbt._('You\'re correct, it used to also be the name of the subscription membership. However, many people confused the subscription "Reddit Gold" membership with a virtual good or coin. To make things easier to understand, we\'ve renamed the membership to "Reddit Premium", while our virtual good is called "coins".', null, {
						hk: "aFpGc"
					})
				}]
		},
		"./src/reddit/pages/CoinsPage/HeroSection/index.m.less": function(e, t, a) {
			e.exports = {
				hero: "_2vhTQIsosoVQbr9wMiHNrq",
				heroInner: "_3f0XAmNuHoBs42vtlADhEZ",
				heroTitle: "_38WAbDkPGmF05b2rqHBXXE",
				heroLogo: "_3BOSpM8sVMfSVkrXVDpy8U",
				heroDescription: "_2MJQ9yBdNmkVOto9wlBcPt",
				activeSale: "_30mt9pkecX8JHD1wCMZBlX",
				heroCTA: "P6EaaWWVjL1ioBEprcj2k",
				heroCta: "P6EaaWWVjL1ioBEprcj2k",
				expiresText: "_2-NkszuRneQ6RCssOZlbWn"
			}
		},
		"./src/reddit/pages/CoinsPage/index.m.less": function(e, t, a) {
			e.exports = {
				detailGridSection: "_2pjmwu1Qey7ysALWYQIebR",
				detailTitle: "_1elsw4Hvj-wf_HngDYpCuU",
				detailDesription: "_2_Cebwoi5iZt1xC8t8Y87s",
				gridContainer: "_2VbuOyshVldGz4mZms1Qx8",
				gridItem: "_15wx7-Dy6OaPRg2oX97-cs",
				nowrap: "_1zlKaIoI_cWBNJLQYlCy4I",
				purchasePackagesSection: "_3O_T0NX7IDWLLIgZLWxJwk",
				purchaseTitle: "_3DeyHQ9gje-pf93nH48lKk",
				purchaseLogo: "_1Sj2-jzRwDnOmmzci0pMR5",
				purchasePackages: "_2m0gSo1z8uMcoEWC1T3pqG",
				purchasePackage: "_1l-HVUi8gitTQc_tDQWwgj",
				packageText: "_2HIbtTkiH8vmpbPEV2ATpJ",
				faqsSection: "_10UXwtZ8SpUvVCXzOVk2q0",
				faqsTitle: "_2DJp3NAVskfI_0YVI0RBFY",
				faqs: "KNbwqvczVayMcPxh6VdZc"
			}
		},
		"./src/reddit/pages/CoinsPage/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./src/config.ts"),
				r = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/lodash/times.js"),
				c = a.n(s),
				i = a("./node_modules/react/index.js"),
				o = a.n(i),
				l = a("./node_modules/react-redux/es/index.js"),
				d = a("./node_modules/react-router-redux/es/index.js"),
				m = a("./node_modules/reselect/es/index.js"),
				u = a("./src/lib/constants/index.ts"),
				p = a("./src/lib/loadRedditAdsPixel.ts"),
				b = a("./src/reddit/components/TrackingHelper/index.tsx"),
				h = a("./src/reddit/helpers/correlationIdTracker.ts"),
				g = a("./src/reddit/helpers/trackers/goldPayment.ts");
			const f = "coins_marketing",
				k = (e, t = {}) => ({
					...Object(g.g)(e, t),
					correlationId: Object(h.d)(h.a.GoldPayment, !1)
				}),
				O = () => e => ({
					...k(e),
					source: f,
					action: "click",
					noun: "get_coins"
				}),
				_ = e => t => ({
					...k(t, {
						packageId: e
					}),
					source: f,
					action: "click",
					noun: "coins_package"
				}),
				y = () => e => ({
					...k(e),
					source: f,
					action: "click",
					noun: "get_premium"
				});
			var w = a("./src/reddit/helpers/trackers/screenview.ts"),
				j = a("./src/telemetry/index.ts"),
				E = a("./src/telemetry/models/Timer.ts"),
				x = a("./src/reddit/pages/CoinsPage/index.m.less"),
				C = a.n(x),
				v = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				N = a("./src/reddit/models/Gold/Award.ts"),
				P = a("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				I = a("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				T = a("./src/reddit/actions/login.ts"),
				A = a("./src/reddit/contexts/PageLayer/index.tsx"),
				S = a("./src/reddit/models/Gold/Coins/index.ts"),
				G = a("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				M = a("./src/reddit/selectors/user.ts"),
				L = a("./src/reddit/components/CoinPurchasePackage/index.m.less"),
				R = a.n(L),
				D = a("./src/lib/classNames/index.ts"),
				F = a("./src/lib/currency/currencies.ts"),
				B = a("./src/lib/localizeCurrency/index.ts"),
				U = a("./src/reddit/controls/Button/index.tsx"),
				q = a("./src/reddit/hooks/useLocale.ts"),
				V = a("./src/reddit/icons/svgs/Coin/index.tsx"),
				Y = a("./src/reddit/icons/svgs/Stamp/index.tsx");
			var H = e => {
					const {
						className: t,
						coinPackage: a,
						isLargeView: n,
						onClick: s
					} = e, c = Object(q.a)(), {
						baselineCoins: i,
						baselinePennies: l,
						bonusPct: d,
						coins: m,
						description: u,
						featuredLabel: p,
						images: b,
						pennies: h
					} = a, g = Object(B.b)(h, {
						locale: c
					}), f = Object(B.b)(m, {
						locale: c,
						type: F.b.Reddit,
						currency: F.a
					}), k = n ? b.marketing["4x"].url : b.marketing["2x"].url, O = d > 0 && `${Object(B.a)(d,{locale:c})}%`, _ = r.fbt._("bonus", null, {
						hk: "L8mcp"
					}), y = n ? R.a.large : "", w = i !== m, j = l !== h;
					return o.a.createElement("div", {
						className: Object(D.a)(t, R.a.coinPurchasePackage, y)
					}, o.a.createElement("div", {
						className: Object(D.a)(y, R.a.imageContainer)
					}, o.a.createElement("img", {
						src: k
					}), p && o.a.createElement("div", {
						className: R.a.badge
					}, p), O && o.a.createElement("div", {
						className: Object(D.a)(R.a.stamp, y)
					}, o.a.createElement(Y.a, {
						className: R.a.stampIcon
					}), o.a.createElement("div", {
						className: Object(D.a)(R.a.stampValue, y)
					}, O), o.a.createElement("div", {
						className: Object(D.a)(R.a.stampText, y)
					}, _))), o.a.createElement("div", {
						className: Object(D.a)(R.a.contentContainer, y)
					}, o.a.createElement("div", {
						className: Object(D.a)(R.a.price, y)
					}, o.a.createElement(V.a, {
						className: R.a.priceCoinIcon
					}), o.a.createElement("div", null, o.a.createElement("div", {
						className: R.a.priceValue
					}, f), w && o.a.createElement("div", {
						className: Object(D.a)(R.a.priceCurrency, R.a.crossout)
					}, Object(B.b)(i, {
						locale: c,
						type: F.b.Reddit,
						currency: F.a
					})))), o.a.createElement("div", {
						className: Object(D.a)(R.a.description, y)
					}, u), o.a.createElement("div", {
						className: R.a.ctaContainer
					}, o.a.createElement(U.t, {
						kind: U.b.Button,
						priority: U.c.Primary,
						className: Object(D.a)(R.a.cta, y),
						onClick: s
					}, g), j && o.a.createElement("div", {
						className: R.a.priceCrossout
					}, Object(B.b)(l, {
						locale: c
					})))))
				},
				z = a("./src/reddit/helpers/styles/mixins/loading.ts"),
				Q = a("./src/reddit/components/CoinPurchasePackage/placeholder.m.less"),
				W = a.n(Q);
			var X = ({
					className: e,
					isLargeView: t,
					...a
				}) => {
					const n = t ? W.a.large : "",
						r = Object(z.b)(a);
					return o.a.createElement("div", {
						className: Object(D.a)(r, W.a.packagePlaceholder, n, e)
					})
				},
				J = a("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				K = a("./src/reddit/components/GildMarketingDescription/index.tsx"),
				$ = a("./src/reddit/components/MarketingPageFooter/index.tsx"),
				Z = a("./src/reddit/components/PremiumMarketingBanner/index.m.less"),
				ee = a.n(Z);
			const {
				fbt: te
			} = a("./node_modules/fbt/lib/FbtPublic.js"), ae = e => {
				const {
					className: t,
					isPremiumSubscriber: a,
					onGetPremium: r,
					onManagePremium: s,
					premiumPackage: c
				} = e, {
					periodicalCoins: i
				} = c, l = i.toLocaleString(), d = `${n.a.assetPath}/img/gold/coins-premium-g.png`;
				return o.a.createElement("div", {
					className: Object(D.a)(ee.a.premiumBanner, t)
				}, o.a.createElement("img", {
					className: ee.a.premiumCrest,
					src: d
				}), o.a.createElement("h2", {
					className: ee.a.premiumDescription
				}, te._("Get {Number of monthly coins} coins every month with Reddit Premium and browse ads-free", [te._param("Number of monthly coins", l)], {
					hk: "42dB3q"
				})), a ? o.a.createElement(U.l, {
					className: ee.a.premiumCTA,
					onClick: s
				}, te._("Manage", null, {
					hk: "4BQsAp"
				})) : o.a.createElement(U.l, {
					className: ee.a.premiumCTA,
					onClick: r
				}, te._("Upgrade", null, {
					hk: "1Zf2Sh"
				})))
			};
			var ne = a("./src/reddit/icons/fonts/Coin/index.tsx"),
				re = a("./src/reddit/icons/svgs/RedditCoinsLogo/index.tsx"),
				se = a("./src/reddit/components/TimeLeft/TimeLeft.tsx"),
				ce = a("./src/reddit/pages/CoinsPage/HeroSection/index.m.less"),
				ie = a.n(ce);
			const {
				fbt: oe
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var le = o.a.memo(e => {
				Object(i.useEffect)(() => {
					(new Image).src = `${n.a.assetPath}/img/gold/coins-hero.jpg`
				}, []);
				const {
					activeSaleConfig: t,
					isLoading: a,
					onClickGetCoins: r
				} = e;
				if (a) return o.a.createElement("div", {
					className: ie.a.hero
				});
				if (t) {
					const {
						endsAt: e,
						heroImageUrl: a,
						heroSubtext: n,
						heroText: r
					} = t;
					return o.a.createElement("div", {
						className: ie.a.hero,
						style: {
							backgroundImage: `url("${a}")`
						}
					}, o.a.createElement("div", {
						className: ie.a.heroInner
					}, o.a.createElement("h1", {
						className: Object(D.a)(ie.a.heroTitle, ie.a.activeSale)
					}, r), o.a.createElement("p", {
						className: Object(D.a)(ie.a.heroDescription, ie.a.activeSale)
					}, n), e && o.a.createElement(se.a, {
						className: ie.a.expiresText,
						expirationDate: new Date(1e3 * e)
					})))
				}
				return o.a.createElement("div", {
					className: ie.a.hero,
					style: {
						backgroundImage: `url("${n.a.assetPath}/img/gold/coins-hero.jpg")`
					}
				}, o.a.createElement("div", {
					className: ie.a.heroInner
				}, o.a.createElement("h1", {
					className: ie.a.heroTitle
				}, o.a.createElement(re.a, {
					className: ie.a.heroLogo
				})), o.a.createElement("p", {
					className: ie.a.heroDescription
				}, oe._("Coins are a virtual good you can use to award exemplary posts or comments. Support Reddit and encourage your favorite contributors to keep making Reddit better.", null, {
					hk: "3rPVMo"
				})), o.a.createElement(U.g, {
					className: ie.a.heroCTA,
					onClick: r
				}, oe._("Get Coins", null, {
					hk: "2YmtPc"
				}))))
			});
			const de = 3e3,
				me = Object(A.u)(),
				ue = Object(m.c)({
					activeSaleConfig: G.a,
					coinPackages: G.d,
					dealCoinPackages: G.f,
					isPremiumSubscriber: M.t,
					isLoggedIn: M.K,
					premiumPackages: G.l,
					purchaseCatalogPending: G.o
				}),
				pe = Object(l.b)(ue, (e, t) => ({
					onRouteToManagePremium: () => e(Object(d.b)("/settings/gold")),
					onRouteToPremium: () => e(Object(d.b)("/premium")),
					onOpenLoginModal: () => e(Object(T.i)()),
					onOpenTargetedOfferModal: (t, a) => e(Object(P.e)({
						correlationId: a,
						packageId: t.mobileId
					})),
					onPurchasePackage: (t, a) => e(Object(P.c)({
						correlationId: a,
						packageId: t.mobileId
					})),
					requestPurchaseCatalog: t => e(Object(I.b)(t))
				}));
			class be extends o.a.Component {
				constructor() {
					super(...arguments), this.correlationId = Object(h.d)(h.a.GoldPayment, !1), this.purchaseSection = o.a.createRef(), this.perksSection = o.a.createRef(), this.onClickGetCoins = () => {
						this.props.sendEvent(O()), this.purchaseSection.current && window.scrollTo({
							behavior: "smooth",
							top: this.purchaseSection.current.offsetTop - 50
						})
					}, this.onClickPurchase = e => {
						const {
							isLoggedIn: t,
							onPurchasePackage: a,
							onOpenLoginModal: n,
							sendEvent: r
						} = this.props;
						t && r(_(e.mobileId)), t ? a(e, this.correlationId) : n(), this.targetedOfferTimerId && clearTimeout(this.targetedOfferTimerId)
					}, this.onClickGetPremium = () => {
						const {
							onRouteToPremium: e,
							sendEvent: t
						} = this.props;
						t(y()), e()
					}
				}
				componentDidMount() {
					const {
						coinPackages: e,
						purchaseCatalogPending: t,
						requestPurchaseCatalog: a
					} = this.props;
					e.length || t || a(this.correlationId), document.documentElement.scrollTop = document.body.scrollTop = 0;
					const n = u.Lb.COINS;
					j.c.has(n) && (this.props.sendEvent(Object(w.b)(E.TimerType.InApp, j.c.end(n))), this.props.sendEvent(Object(w.a)())), Object(p.a)(), this.setTargetedOfferTimeout()
				}
				componentDidUpdate() {
					!this.targetedOfferTimerId && this.props.dealCoinPackages.length && this.setTargetedOfferTimeout()
				}
				setTargetedOfferTimeout() {
					if (this.targetedOfferTimerId) return;
					const {
						dealCoinPackages: e,
						onOpenTargetedOfferModal: t
					} = this.props, a = e.filter(e => S.c.has(e.dealInfo.type))[0];
					a && (this.targetedOfferTimerId = setTimeout(() => {
						t(a, this.correlationId)
					}, a.dealInfo.displayDelay || de))
				}
				render() {
					const {
						activeSaleConfig: e,
						className: t,
						coinPackages: a,
						purchaseCatalogPending: n
					} = this.props;
					return o.a.createElement("div", {
						className: t
					}, o.a.createElement(le, {
						activeSaleConfig: e,
						isLoading: n || !a.length,
						onClickGetCoins: this.onClickGetCoins
					}), this.renderGildBreakdown(), this.renderPurchase(), this.renderFAQSection(), o.a.createElement($.a, null))
				}
				renderGildBreakdown() {
					return o.a.createElement("div", {
						className: C.a.detailGridSection,
						ref: this.perksSection
					}, o.a.createElement("h2", {
						className: C.a.detailTitle
					}, r.fbt._("Here’s what you can buy with coins", null, {
						hk: "4kIMr0"
					})), o.a.createElement("p", {
						className: C.a.detailDesription
					}, r.fbt._("Spend your coins on these Awards reserved exclusively for the finest Reddit contributors. Awarding a post or comment highlights it for all to see, and some Awards also grant the honoree special bonuses.", null, {
						hk: "3eScNB"
					})), o.a.createElement("div", {
						className: C.a.gridContainer
					}, o.a.createElement(K.a, {
						className: C.a.gridItem,
						icon: o.a.createElement("img", {
							src: `${n.a.assetPath}/img/gold/badges/award-silver-large.png`
						}),
						title: r.fbt._("Silver Award", null, {
							hk: "2h79np"
						})
					}, Object(v.a)(r.fbt._("Shows a Silver Award on the post or comment and ... that’s it. You’ll need {Coin price placeholder} Coins.", [r.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "zbXx9"
					}), {
						":coin_price:": o.a.createElement("span", {
							className: C.a.nowrap
						}, o.a.createElement(ne.a, null), N.q.coinPrice)
					})), o.a.createElement(K.a, {
						className: C.a.gridItem,
						icon: o.a.createElement("img", {
							src: `${n.a.assetPath}/img/gold/badges/award-gold-large.png`
						}),
						title: r.fbt._("Gold Award", null, {
							hk: "1oYdz0"
						})
					}, Object(v.a)(r.fbt._("Gives {Coin benefit placeholder} Reddit Coins and a week of r/lounge access and ad-free browsing. You’ll need {Coin price placeholder} coins.", [r.fbt._param("Coin benefit placeholder", ":coin_benefit:"), r.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "rxGC9"
					}), {
						":coin_benefit:": o.a.createElement("span", {
							className: C.a.nowrap
						}, o.a.createElement(ne.a, null), "100"),
						":coin_price:": o.a.createElement("span", {
							className: C.a.nowrap
						}, o.a.createElement(ne.a, null), N.n.coinPrice)
					})), o.a.createElement(K.a, {
						className: C.a.gridItem,
						icon: o.a.createElement("img", {
							src: `${n.a.assetPath}/img/gold/badges/award-platinum-large.png`
						}),
						title: r.fbt._("Platinum Award", null, {
							hk: "3nCEqM"
						})
					}, Object(v.a)(r.fbt._("Gives a month of r/lounge access and ad-free browsing, and {Coin benefit placeholder} Reddit Coins for that month. You’ll need {Coin price placeholder} coins.", [r.fbt._param("Coin benefit placeholder", ":coin_benefit:"), r.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "375Nna"
					}), {
						":coin_benefit:": o.a.createElement("span", {
							className: C.a.nowrap
						}, o.a.createElement(ne.a, null), "700"),
						":coin_price:": o.a.createElement("span", {
							className: C.a.nowrap
						}, o.a.createElement(ne.a, null), N.p.coinPrice)
					}))))
				}
				renderPurchase() {
					const {
						coinPackages: e,
						isPremiumSubscriber: t,
						onRouteToManagePremium: a,
						premiumPackages: r,
						purchaseCatalogPending: s
					} = this.props, i = r.length ? r[0] : void 0;
					return o.a.createElement("div", {
						className: C.a.purchasePackagesSection,
						ref: this.purchaseSection,
						style: {
							backgroundImage: `url("${n.a.assetPath}/img/gold/coins-premium-bg.jpg")`
						}
					}, o.a.createElement("h2", {
						className: C.a.purchaseTitle
					}, o.a.createElement(re.a, {
						className: C.a.purchaseLogo
					})), o.a.createElement("div", {
						className: C.a.purchasePackages
					}, s || !e.length ? c()(5, e => o.a.createElement(X, {
						className: C.a.purchasePackage,
						isLargeView: 0 === e,
						isLoading: !0,
						key: e
					})) : e.map(e => o.a.createElement(H, {
						className: C.a.purchasePackage,
						coinPackage: e,
						isLargeView: e.featured,
						key: e.mobileId,
						onClick: () => this.onClickPurchase(e)
					})), i && o.a.createElement(ae, {
						isPremiumSubscriber: t,
						onGetPremium: this.onClickGetPremium,
						onManagePremium: a,
						premiumPackage: i
					})))
				}
				renderFAQSection() {
					return o.a.createElement("div", {
						className: C.a.faqsSection
					}, o.a.createElement("h2", {
						className: C.a.faqsTitle
					}, r.fbt._("Coins FAQ", null, {
						hk: "21x0aE"
					})), o.a.createElement("div", {
						className: C.a.faqs
					}, S.b.map((e, t) => o.a.createElement(J.a, {
						defaultClosed: !0,
						question: e.prompt(),
						key: t
					}, e.answer()))))
				}
				componentWillUnmount() {
					Object(h.b)(h.a.GoldPayment), this.targetedOfferTimerId && clearTimeout(this.targetedOfferTimerId)
				}
			}
			t.default = me(pe(Object(b.c)(be)))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Coins.623de8f926b69d429013.js.map