// https://www.redditstatic.com/desktop2x/CoinPurchaseModal.ac392016aa7729460e29.js
// Retrieved at 11/4/2021, 4:00:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CoinPurchaseModal"], {
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			}));
			var r = a("./src/lib/currency/cleanNumber/index.ts");

			function n(e, t) {
				const a = Object(r.a)(e),
					n = parseInt(a) / 100;
				return Math.floor(n) !== n || t ? n.toFixed(2) : String(n)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, a) {
			"use strict";

			function r(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			a.d(t, "a", (function() {
				return r
			}))
		},
		"./src/lib/currency/currencies.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return r
			})), a.d(t, "c", (function() {
				return c
			})), a.d(t, "d", (function() {
				return s
			})), a.d(t, "a", (function() {
				return o
			})), a.d(t, "f", (function() {
				return i
			})), a.d(t, "g", (function() {
				return d
			})), a.d(t, "e", (function() {
				return l
			}));
			var r, n = a("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(r || (r = {}));
			const c = "USD",
				s = "ETH",
				o = "COINS",
				i = [s, "BTC"],
				d = [o, "SUBREDDIT_POINTS", "GAME_TOKENS"],
				l = {
					COINS: () => n.fbt._("Coins", null, {
						hk: "1T2Y4p"
					}),
					SUBREDDIT_POINTS: () => n.fbt._("Subreddit points", null, {
						hk: "1ytOO3"
					}),
					GAME_TOKENS: () => n.fbt._("Game tokens", null, {
						hk: "16BUrU"
					})
				}
		},
		"./src/lib/loadRedditAdsPixel.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			})), a.d(t, "b", (function() {
				return c
			}));
			var r = a("./src/lib/sentry/index.ts");

			function n() {
				! function(e, t) {
					if (!e.rdt) {
						var a = e.rdt = function() {
							a.sendEvent ? a.sendEvent.apply(a, arguments) : a.callQueue.push(arguments)
						};
						a.callQueue = [];
						var r = t.createElement("script");
						r.src = "https://www.redditstatic.com/ads/pixel.js", r.async = !0;
						var n = t.getElementsByTagName("script")[0];
						n.parentNode.insertBefore(r, n)
					}
				}(window, document), rdt("init", "t2_2q2gwo2t"), rdt("track", "PageVisit")
			}
			const c = () => {
				try {
					rdt("track", "Purchase")
				} catch (e) {
					r.c.captureMessage('Attempted to fire RedditAds "Purchase" pixel, but global "rdt" object was unavailable')
				}
			}
		},
		"./src/lib/localizeCurrency/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return d
			})), a.d(t, "b", (function() {
				return l
			}));
			var r = a("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				n = a("./src/lib/currency/centsToDollars/index.ts"),
				c = a("./src/lib/currency/currencies.ts"),
				s = a("./src/lib/prettyPrintNumber/index.ts"),
				o = a("./src/reddit/helpers/governance/tokens.ts"),
				i = a("./src/reddit/constants/intlSupport.ts");
			const d = (e, {
					locale: t = r.DEFAULT_LOCALE,
					pretty: a,
					formatOptions: n
				} = {}) => {
					const c = Number(e);
					return Object(i.c)() ? a ? Object(s.b)(c) : new Intl.NumberFormat(t, n).format(c) : u(c, a, t)
				},
				l = (e, t = {}) => {
					const {
						locale: a = r.DEFAULT_LOCALE,
						pretty: s,
						formatOptions: d,
						displayConversion: l,
						forceDecimals: b,
						currency: g = t.currency || (t.type ? m(t.type) : c.c),
						type: h = t.type || (t.currency ? p(t.currency) : c.b.Real)
					} = t, y = Number(e), f = String(e);
					switch (h) {
						case c.b.Reddit: {
							const e = c.e[g],
								t = e ? e() : g;
							return Object(i.c)() ? new Intl.NumberFormat(a, {
								currencyDisplay: "symbol",
								...d
							}).format(y) + " " + t : u(y, s, a, t)
						}
						case c.b.Crypto: {
							if (s) {
								return Object(o.c)(f, l) + " " + g
							}
							const e = Number(Object(o.b)(f, l));
							return Object(i.c)() ? new Intl.NumberFormat(a, {
								style: "currency",
								currency: g,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...d
							}).format(e) : u(e, s, a, g)
						}
						case c.b.Real:
						default: {
							const e = Number(Object(n.a)(f, b));
							return Object(i.c)() ? new Intl.NumberFormat(a, {
								style: "currency",
								currency: g,
								currencyDisplay: "symbol",
								notation: s ? "compact" : "standard",
								...d
							}).format(e) : u(e, s, a, g)
						}
					}
				},
				u = (e, t, a, r) => {
					return (t ? Object(s.b)(e) : e.toLocaleString(a)) + (r ? " " + r : "")
				},
				p = e => c.g.includes(e.toUpperCase()) ? c.b.Reddit : c.f.includes(e.toUpperCase()) ? c.b.Crypto : c.b.Real,
				m = e => {
					switch (e) {
						case c.b.Crypto:
							return c.d;
						case c.b.Reddit:
							return c.a;
						case c.b.Real:
						default:
							return c.c
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts": function(e, t, a) {
			"use strict";
			a.d(t, "c", (function() {
				return w
			})), a.d(t, "a", (function() {
				return x
			})), a.d(t, "e", (function() {
				return E
			})), a.d(t, "b", (function() {
				return I
			})), a.d(t, "d", (function() {
				return N
			})), a.d(t, "j", (function() {
				return T
			})), a.d(t, "i", (function() {
				return A
			})), a.d(t, "f", (function() {
				return M
			})), a.d(t, "g", (function() {
				return S
			})), a.d(t, "h", (function() {
				return B
			}));
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./src/lib/formatApiError/index.ts"),
				c = a("./src/lib/makeActionCreator/index.ts"),
				s = a("./src/lib/sentry/index.ts"),
				o = a("./src/reddit/constants/modals.ts"),
				i = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				d = a("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				l = a("./src/reddit/actions/modal.ts"),
				u = a("./src/reddit/actions/toaster.ts"),
				p = a("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				m = a("./src/reddit/endpoints/gold/purchase.ts"),
				b = a("./src/reddit/helpers/correlationIdTracker.ts"),
				g = a("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				h = a("./src/reddit/models/Gold/Award.ts"),
				y = a("./src/reddit/models/Gold/ProductOffer.ts"),
				f = a("./src/reddit/models/Toast/index.ts"),
				O = a("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				j = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				C = a("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const P = Object(c.a)(C.q),
				k = Object(c.a)(C.c),
				w = e => async (t, a) => {
					t(P(e)), t(Object(l.h)(o.a.ECON_COIN_PURCHASE))
				}, x = () => async (e, t) => {
					e(k()), e(Object(l.g)(o.a.ECON_COIN_PURCHASE))
				}, _ = Object(c.a)(C.u), E = ({
					correlationId: e,
					packageId: t
				}) => async (a, r) => {
					const n = r();
					Object(O.e)(n, t) ? (a(_({
						correlationId: e,
						packageId: t
					})), a(Object(l.i)(o.a.GOLD_TARGETED_OFFER_MODAL))) : s.c.captureMessage(`Tried to show targeted offer, but could not find package id: ${t}`)
				}, v = Object(c.a)(C.p), I = ({
					correlationId: e,
					packageId: t
				}) => async (a, r) => {
					Object(O.c)(r(), t) ? (a(v({
						correlationId: e,
						packageId: t
					})), a(Object(l.i)(o.a.ECON_COIN_PACKAGE_OFFER))) : s.c.captureMessage(`Tried to show coin package offer, but could not find package id: ${t}`)
				}, N = (e, t, a) => async (n, c) => {
					await n(Object(d.c)(e, a));
					const s = c(),
						o = Object(O.q)(s);
					if (0 !== o.length) n(w({
						correlationId: a,
						packageId: o[0].mobileId,
						thingId: t
					}));
					else {
						const e = Object(O.n)(s),
							t = r.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						n(Object(u.f)({
							kind: f.b.Error,
							duration: u.a,
							text: e || t
						}))
					}
				}, T = (e, t) => async (a, c, {
					apiContext: s
				}) => {
					const o = c(),
						{
							coins: d,
							pennies: l
						} = t,
						u = Object(j.r)(o) || Object(b.d)(b.a.GoldPayment, !1);
					let p, g;
					a(Object(i.stripeTokenPending)());
					const h = Object(j.y)(o);
					if (h || (p = await a(Object(i.validateAndCreateStripeToken)(e)), g = Object(j.v)(o), p)) try {
						const e = await Object(m.f)({
							coins: d,
							context: s(),
							correlationId: u,
							offerContext: Object(y.d)(t, !1),
							pennies: l,
							rememberCard: g,
							savedCardId: h || void 0,
							token: p
						});
						if (e.error) {
							const t = Object(n.a)(e.error, e.status);
							return void a(Object(i.stripeApiError)(t))
						}
						return a(Object(i.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(b.b)(b.a.GoldPayment)
					} catch (f) {
						const e = Object(n.a)(f);
						a(Object(i.stripeApiError)(e))
					} else {
						const e = r.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						a(Object(i.stripeApiError)(e))
					}
				}, A = (e, t, c) => async (s, o, {
					apiContext: d
				}) => {
					const l = o(),
						{
							coins: u,
							pennies: p
						} = t,
						f = Object(j.r)(l) || Object(b.d)(b.a.GoldPayment, !1);
					let O, C;
					s(Object(i.stripeTokenPending)());
					const P = Object(j.y)(l);
					if (P || (O = await s(Object(i.validateAndCreateStripeToken)(e)), C = Object(j.v)(l), O)) try {
						const {
							gildModalThingId: e,
							isAnonymous: o,
							message: j,
							selectedAward: k
						} = l.gild;
						if (!e || !k.id) {
							const e = r.fbt._("Gilding unknown thing", null, {
								hk: "2Jiujp"
							});
							return void s(Object(i.stripeApiError)(e))
						}
						const w = k.id,
							_ = {
								gildType: w,
								isAnonymous: o,
								message: j
							},
							E = await Object(m.e)({
								coins: u,
								context: d(),
								correlationId: f,
								gildParams: _,
								isOldReddit: c,
								offerContext: Object(y.d)(t, !0),
								pennies: p,
								rememberCard: C,
								savedCardId: P || void 0,
								thingId: e,
								token: O
							});
						if (E.error) {
							const e = Object(n.a)(E.error, E.status);
							return void s(Object(i.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await a.e("gildActions").then(a.bind(null, "./src/reddit/actions/gold/gild.ts"));
							s(x()), s(Object(i.paymentCompleted)({
								confirmed: !1
							}));
							const {
								awarder_karma_received: r,
								all_awardings: n,
								coins: c,
								treatment_tags: o
							} = E.body;
							return s(t({
								awardKarmaReceived: r || 0,
								awardId: w,
								awardings: n && n.length ? Object(g.a)(n).map(e => ({
									award: Object(h.h)(e),
									total: e.count
								})) : [],
								coins: c,
								id: e,
								treatmentTags: o
							})), void Object(b.b)(b.a.GoldPayment)
						}
					} catch (k) {
						const e = Object(n.a)(k);
						s(Object(i.stripeApiError)(e))
					} else {
						const e = r.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						s(Object(i.stripeApiError)(e))
					}
				}, M = e => async (t, a, {
					apiContext: r
				}) => {
					const c = Object(b.c)(b.a.GoldPayment),
						{
							coins: o,
							pennies: d
						} = e;
					try {
						const e = await Object(p.a)({
							context: r(),
							coins: o,
							pennies: d,
							correlationId: c
						});
						if (e.error) {
							const a = Object(n.a)(e.error);
							return void t(Object(i.paypalApiError)(a))
						} {
							const {
								order_id: t
							} = e.body;
							return t
						}
					} catch (l) {
						s.c.captureException(l);
						const e = Object(n.a)(l);
						t(Object(i.paypalApiError)(e))
					}
				}, S = (e, t) => async (a, r, {
					apiContext: c
				}) => {
					const o = r(),
						d = Object(j.r)(o) || Object(b.d)(b.a.GoldPayment, !1),
						{
							coins: l,
							pennies: u
						} = t;
					try {
						const r = await Object(p.c)({
							context: c(),
							offerContext: Object(y.d)(t, !1),
							orderId: e,
							coins: l,
							pennies: u,
							correlationId: d
						});
						if (r.error) {
							const e = Object(n.a)(r.error);
							return void a(Object(i.paypalApiError)(e))
						} {
							const {
								coins: e
							} = r.body;
							a(Object(i.paymentCompleted)({
								coins: e,
								confirmed: !0
							})), Object(b.b)(b.a.GoldPayment)
						}
					} catch (m) {
						s.c.captureException(m);
						const e = Object(n.a)(m);
						a(Object(i.paypalApiError)(e))
					}
				}, B = (e, t) => async (c, o, {
					apiContext: d
				}) => {
					const l = o(),
						u = Object(j.r)(l) || Object(b.d)(b.a.GoldPayment, !1),
						{
							coins: m,
							pennies: f
						} = t;
					try {
						const {
							gildModalThingId: s,
							isAnonymous: o,
							message: O,
							selectedAward: j
						} = l.gild;
						if (!s || !j) return void c(Object(i.paypalApiError)(r.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const C = j.id,
							P = await Object(p.d)({
								context: d(),
								offerContext: Object(y.d)(t, !0),
								orderId: e,
								coins: m,
								pennies: f,
								thingId: s,
								awardId: C,
								message: O || "",
								isAnonymous: o,
								correlationId: u
							});
						if (P.error) {
							const e = Object(n.a)(P.error);
							c(Object(i.paypalApiError)(e))
						} else {
							c(x());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: r,
								subreddit_coins: n,
								treatment_tags: o
							} = P.body;
							c(Object(i.paymentCompleted)({
								coins: r,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await a.e("gildActions").then(a.bind(null, "./src/reddit/actions/gold/gild.ts"));
							c(d({
								awardId: C,
								awardKarmaReceived: t || 0,
								awardings: Object(g.a)(e).map(e => ({
									award: Object(h.h)(e),
									total: e.count
								})),
								coins: r,
								id: s,
								subredditCoins: n,
								treatmentTags: o
							})), Object(b.b)(b.a.GoldPayment)
						}
					} catch (O) {
						s.c.captureException(O);
						const e = Object(n.a)(O);
						c(Object(i.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "selectPaymentMethod", (function() {
				return d
			})), a.d(t, "paymentCompleted", (function() {
				return l
			})), a.d(t, "cardNameInput", (function() {
				return u
			})), a.d(t, "postalCodeInput", (function() {
				return p
			})), a.d(t, "cardNameEmpty", (function() {
				return m
			})), a.d(t, "cardElementChange", (function() {
				return b
			})), a.d(t, "stripeTokenPending", (function() {
				return g
			})), a.d(t, "stripeTokenError", (function() {
				return h
			})), a.d(t, "stripeApiError", (function() {
				return y
			})), a.d(t, "validateAndCreateStripeToken", (function() {
				return f
			})), a.d(t, "paypalApiError", (function() {
				return O
			})), a.d(t, "toggleRememberCard", (function() {
				return j
			})), a.d(t, "selectSavedCard", (function() {
				return C
			})), a.d(t, "_deleteSavedCard", (function() {
				return P
			})), a.d(t, "deleteSavedCard", (function() {
				return k
			})), a.d(t, "savedCardsPending", (function() {
				return w
			})), a.d(t, "savedCardsSuccess", (function() {
				return x
			})), a.d(t, "loadSavedCards", (function() {
				return _
			}));
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./src/lib/sentry/index.ts"),
				c = a("./src/lib/makeActionCreator/index.ts"),
				s = a("./src/reddit/endpoints/gold/purchase.ts"),
				o = a("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				i = a("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = Object(c.a)(o.B),
				l = Object(c.a)(o.w),
				u = Object(c.a)(o.b),
				p = Object(c.a)(o.y),
				m = Object(c.a)(o.a),
				b = Object(c.a)(o.E),
				g = Object(c.a)(o.G),
				h = Object(c.a)(o.F),
				y = Object(c.a)(o.D),
				f = e => async (t, a) => {
					const n = a(),
						c = Object(i.h)(n),
						s = Object(i.l)(n),
						{
							token: o,
							error: d
						} = await e.createToken({
							name: c,
							address_zip: s
						});
					if (c.trim()) {
						if (!d && o) return o;
						t(h(d || void 0))
					} else {
						const e = r.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(m({
							message: e
						}))
					}
				}, O = Object(c.a)(o.x), j = Object(c.a)(o.H), C = Object(c.a)(o.C), P = Object(c.a)(o.g), k = e => async (t, a, {
					apiContext: r
				}) => {
					t(P(e));
					try {
						const t = await Object(s.a)(r(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (c) {
						n.c.captureException(c)
					}
				}, w = Object(c.a)(o.z), x = Object(c.a)(o.A), _ = () => async (e, t, {
					apiContext: a
				}) => {
					e(w());
					try {
						const t = await Object(s.b)(a());
						if (t.error) throw new Error(t.error.type);
						const r = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(x(r)), r[0] && e(C(r[0].cardId))
					} catch (r) {
						n.c.captureException(r), e(x([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return h
			})), a.d(t, "b", (function() {
				return f
			})), a.d(t, "e", (function() {
				return O
			})), a.d(t, "d", (function() {
				return j
			})), a.d(t, "c", (function() {
				return C
			}));
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./src/lib/formatApiError/index.ts"),
				c = a("./src/lib/makeActionCreator/index.ts"),
				s = a("./src/lib/sentry/index.ts"),
				o = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				i = a("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				d = a("./src/reddit/endpoints/gold/purchase.ts"),
				l = a("./src/reddit/helpers/correlationIdTracker.ts"),
				u = a("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				p = a("./src/reddit/models/Gold/Award.ts"),
				m = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				b = a("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const g = Object(c.a)(b.r),
				h = Object(c.a)(b.d),
				y = Object(c.a)(b.s),
				f = (e, t, a) => async e => {
					e(y({
						thingId: t
					})), e(g({
						correlationId: a
					}))
				}, O = (e, t) => async (c, s, {
					apiContext: i
				}) => {
					const b = s(),
						g = Object(l.c)(l.a.GoldPayment);
					let y, f;
					c(Object(o.stripeTokenPending)());
					const O = Object(m.y)(b);
					if (O || (y = await c(Object(o.validateAndCreateStripeToken)(e)), f = Object(m.v)(b), y)) try {
						const {
							gildModalThingId: e,
							isAnonymous: s,
							message: l,
							selectedAward: m
						} = b.gild;
						if (!e || !m.id) return void c(Object(o.stripeApiError)(r.fbt._("Gilding unknown thing", null, {
							hk: "Qd6mo"
						})));
						const j = m.id,
							C = m.pennyPrice;
						if (!C) return void c(Object(o.stripeApiError)(r.fbt._("Trying to purchase award with zero price", null, {
							hk: "3FhAjz"
						})));
						const P = {
								gildType: j,
								isAnonymous: s,
								message: l
							},
							k = await Object(d.g)({
								context: i(),
								correlationId: g,
								gildParams: P,
								isOldReddit: t,
								pennies: C,
								rememberCard: f,
								savedCardId: O || void 0,
								thingId: e,
								token: y
							});
						if (k.error) {
							const e = Object(n.a)(k.error, k.status);
							return void c(Object(o.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await a.e("gildActions").then(a.bind(null, "./src/reddit/actions/gold/gild.ts"));
							c(h()), c(Object(o.paymentCompleted)({
								confirmed: !1
							}));
							const {
								all_awardings: r,
								awarder_karma_received: n,
								coins: s,
								treatment_tags: i
							} = k.body;
							return void c(t({
								awardKarmaReceived: n || 0,
								awardId: j,
								awardings: r && r.length ? Object(u.a)(r).map(e => ({
									award: Object(p.h)(e),
									total: e.count
								})) : [],
								coins: s,
								id: e,
								treatmentTags: i
							}))
						}
					} catch (j) {
						const e = Object(n.a)(j);
						c(Object(o.stripeApiError)(e))
					} else c(Object(o.stripeApiError)(r.fbt._("Looks like something went wrong validating your credit card.", null, {
						hk: "20FruV"
					})))
				}, j = (e, t, a) => async (r, c, {
					apiContext: d
				}) => {
					const u = Object(l.c)(l.a.GoldPayment);
					try {
						const c = await Object(i.b)({
							context: d(),
							awardId: e,
							pennies: t,
							thingId: a,
							correlationId: u
						});
						if (c.error) {
							const e = Object(n.a)(c.error);
							return void r(Object(o.paypalApiError)(e))
						} {
							const {
								order_id: e
							} = c.body;
							return e
						}
					} catch (p) {
						s.c.captureException(p);
						const e = Object(n.a)(p);
						r(Object(o.paypalApiError)(e))
					}
				}, C = e => async (t, c, {
					apiContext: d
				}) => {
					const m = c(),
						b = Object(l.c)(l.a.GoldPayment);
					try {
						const {
							gildModalThingId: c,
							isAnonymous: s,
							message: l,
							selectedAward: g
						} = m.gild;
						if (!c || !g) return void t(Object(o.paypalApiError)(r.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const y = g.id,
							f = await Object(i.e)({
								awardId: y,
								context: d(),
								orderId: e,
								thingId: c,
								message: l || "",
								isAnonymous: s,
								correlationId: b
							});
						if (f.error) {
							const e = Object(n.a)(f.error);
							t(Object(o.paypalApiError)(e))
						} else {
							t(h());
							const {
								all_awardings: e,
								awarder_karma_received: r,
								coins: n,
								subreddit_coins: s,
								treatment_tags: i
							} = f.body;
							t(Object(o.paymentCompleted)({
								coins: n,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await a.e("gildActions").then(a.bind(null, "./src/reddit/actions/gold/gild.ts"));
							t(d({
								awardKarmaReceived: r || 0,
								awardId: y,
								awardings: Object(u.a)(e).map(e => ({
									award: Object(p.h)(e),
									total: e.count
								})),
								coins: n,
								id: c,
								subredditCoins: s,
								treatmentTags: i
							}))
						}
					} catch (g) {
						s.c.captureException(g);
						const e = Object(n.a)(g);
						t(Object(o.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return h
			})), a.d(t, "c", (function() {
				return j
			})), a.d(t, "a", (function() {
				return P
			}));
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./src/lib/env/index.ts"),
				c = a("./src/lib/makeActionCreator/index.ts"),
				s = a("./src/lib/sentry/index.ts"),
				o = a("./src/reddit/endpoints/gold/productCatalog/index.ts"),
				i = a("./src/reddit/selectors/user.ts"),
				d = a("./src/reddit/actions/toaster.ts"),
				l = a("./src/reddit/models/Toast/index.ts"),
				u = a("./src/reddit/actions/post.ts"),
				p = a("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const m = Object(c.a)(p.j),
				b = Object(c.a)(p.k),
				g = Object(c.a)(p.i),
				h = e => async (t, a, {
					apiContext: c
				}) => {
					t(m());
					const d = a(),
						l = Object(i.K)(d);
					try {
						const a = !l,
							r = await Object(o.b)({
								context: c(),
								correlationId: e,
								shouldUseCurrentOrigin: a
							});
						if (!r.ok) throw new Error(r.error && r.error.type || "Unknown error");
						const n = r.body;
						t(b(n))
					} catch (u) {
						Object(n.b)() || console.error(u), s.c.captureException(u);
						const e = r.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(g(e))
					}
				}, y = Object(c.a)(p.m), f = Object(c.a)(p.n), O = Object(c.a)(p.l), j = (e, t) => async (a, c, {
					apiContext: i
				}) => {
					a(y());
					try {
						const r = await Object(o.c)({
							awardId: e,
							context: i(),
							correlationId: t
						});
						if (!r.ok) throw new Error(r.error && r.error.type || "Unknown error");
						const n = r.body;
						if (!n.coinPackages || !n.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						a(f(n))
					} catch (d) {
						Object(n.b)() || console.error(d), s.c.captureException(d);
						const e = r.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						a(O(e))
					}
				}, C = Object(c.a)(p.h), P = () => async (e, t, {
					gqlContext: a
				}) => {
					var c, i;
					try {
						const t = await Object(o.a)(a());
						if (t.ok) {
							const a = t.body.data.claimAwardOffer;
							if (null === (c = a.errors) || void 0 === c ? void 0 : c.length) throw new Error(a.errors.map(e => e.message).join(" | "));
							if (!(null === (i = a.awards) || void 0 === i ? void 0 : i.length)) throw new Error("Got empty award list on free award offer claim");
							if (!a.ok) throw new Error("Got not ok response on free award offer claim");
							await e(C({
								awards: a.awards
							})), e(Object(u.B)())
						}
					} catch (p) {
						Object(n.b)() || console.error(p), e(Object(d.f)({
							kind: l.b.Error,
							text: r.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), s.c.captureException(p)
					}
				}
		},
		"./src/reddit/components/CoinBalance/index.m.less": function(e, t, a) {
			e.exports = {
				coinBalance: "_1B-dVN_8RcEpQbDNGHy3Ds"
			}
		},
		"./src/reddit/components/CoinBalance/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				c = a.n(n),
				s = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				i = a("./src/reddit/icons/fonts/Coin/index.tsx"),
				d = a("./src/reddit/components/CoinBalance/index.m.less"),
				l = a.n(d);
			t.a = e => c.a.createElement("div", {
				className: Object(s.a)(l.a.coinBalance, e.className),
				"data-redditstyle": !0
			}, Object(o.a)(r.fbt._("Coin balance:: {Coin icon placeholder}{coinBalance}", [r.fbt._param("Coin icon placeholder", ":coin:"), r.fbt._param("coinBalance", e.coinBalance.toLocaleString())], {
				hk: "2x0upn"
			}), {
				":coin:": c.a.createElement(i.a, null)
			}), " ", c.a.createElement("a", {
				href: "/coins",
				onClick: e.onWhatAreCoinsLinkClick,
				target: "_blank"
			}, r.fbt._("What are Coins?", null, {
				hk: "3fC6PF"
			})))
		},
		"./src/reddit/components/CoinPurchaseModal/PaymentCompletePage.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				c = a.n(n),
				s = a("./src/config.ts"),
				o = a("./src/lib/loadRedditAdsPixel.ts"),
				i = a("./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx"),
				d = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = a("./src/reddit/components/TrackingHelper/index.tsx"),
				u = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				p = a("./src/reddit/icons/fonts/Coin/index.tsx"),
				m = a("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				b = a.n(m);
			class g extends c.a.PureComponent {
				componentDidMount() {
					const {
						gildThingId: e,
						sendEvent: t
					} = this.props;
					t(Object(u.i)(e)), Object(o.b)()
				}
				render() {
					const e = this.props,
						t = e.isGild && r.fbt._("The transaction is processing and we will let you know when it's done.", null, {
							hk: "JMSWS"
						});
					return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
						className: b.a.paymentCompleteHeader,
						style: {
							backgroundImage: `url("${s.a.assetPath}/img/gold/coins-hero.jpg")`
						}
					}, c.a.createElement(p.a, {
						className: b.a.coinIcon
					}), c.a.createElement("div", {
						className: b.a.paymentCompleteTitleMain
					}, e.isGild ? r.fbt._("Thanks for purchasing an Award, {username}", [r.fbt._param("username", e.userName)], {
						hk: "1VcYkx"
					}) : r.fbt._("Thanks for purchasing Coins, {username}", [r.fbt._param("username", e.userName)], {
						hk: "3m40W1"
					})), c.a.createElement("div", {
						className: b.a.paymentCompleteTitleDescription
					}, t), c.a.createElement("button", {
						className: b.a.closeButton,
						onClick: e.onCloseClick
					}, c.a.createElement(d.b, {
						className: b.a.closeIcon,
						"data-redditstyle": !0
					}))), c.a.createElement(i.a, {
						onCloseClick: e.onCloseClick
					}))
				}
			}
			t.a = Object(l.c)(g)
		},
		"./src/reddit/components/CoinPurchaseModal/SelectPaymentPage.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				c = a.n(n),
				s = a("./node_modules/react-stripe-elements/es/index.js"),
				o = a("./src/lib/constants/index.ts"),
				i = a("./src/lib/currency/currencies.ts"),
				d = a("./src/lib/localizeCurrency/index.ts"),
				l = a("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				u = a("./src/reddit/components/StripePaymentForm/index.tsx"),
				p = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				m = a("./src/reddit/hooks/useLocale.ts"),
				b = a("./src/lib/classNames/index.ts"),
				g = a("./src/reddit/components/CoinBalance/index.tsx"),
				h = a("./src/reddit/components/TrackingHelper/index.tsx"),
				y = a("./src/reddit/controls/Button/index.tsx"),
				f = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				O = a("./src/config.ts"),
				j = a("./node_modules/react-dom/index.js"),
				C = a.n(j),
				P = a("./node_modules/react-redux/es/index.js"),
				k = a("./node_modules/reselect/es/index.js"),
				w = a("./src/higherOrderComponents/makeAsync.tsx"),
				x = a("./src/reddit/helpers/loadThirdPartyScript.ts"),
				_ = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				E = a("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				v = a("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts");
			const I = Object(k.c)({
				isGild: e => !!Object(_.s)(e)
			});
			class N extends c.a.Component {
				constructor() {
					super(...arguments), this.onPayment = () => this.props.createPayment(), this.onAuthorize = e => {
						const {
							orderID: t
						} = e, {
							isGild: a
						} = this.props;
						return this.props.executePayment(a, t)
					}
				}
				render() {
					const {
						className: e
					} = this.props, t = paypalCheckout.Button.driver("react", {
						React: c.a,
						ReactDOM: C.a
					}), a = {
						sandbox: O.a.paypal.apiKey,
						production: O.a.paypal.apiKey
					};
					return c.a.createElement("div", {
						className: e
					}, c.a.createElement(t, {
						env: O.a.paypal.env,
						client: a,
						style: {
							size: "responsive",
							color: "blue",
							shape: "pill",
							label: "paypal",
							tagline: !1
						},
						payment: this.onPayment,
						commit: !0,
						onAuthorize: this.onAuthorize
					}))
				}
			}
			const T = Object(P.b)(I, (e, t) => ({
				createPayment: () => "coinPackage" in t ? e(Object(E.f)(t.coinPackage)) : "awardId" in t ? e(Object(v.d)(t.awardId, t.pennies, t.thingId)) : void 0,
				executePayment: (a, r) => {
					if ("coinPackage" in t) {
						if (a) return void e(Object(E.h)(r, t.coinPackage));
						e(Object(E.g)(r, t.coinPackage))
					} else "awardId" in t && e(Object(v.c)(r))
				}
			}))(N);
			var A = Object(w.a)({
					getComponent: () => Object(x.c)().then(() => T),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				M = a("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				S = a.n(M);
			const {
				fbt: B
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class F extends c.a.Component {
				constructor() {
					super(...arguments), this.onCompletePurchaseClick = () => {
						const {
							gildThingId: e,
							onCompletePurchaseClick: t,
							purchasePackage: a,
							sendEvent: r,
							stripe: n
						} = this.props;
						n && (r(Object(f.c)(e)), t(n, a))
					}
				}
				render() {
					const {
						award: e,
						coinBalance: t,
						gildThingId: a,
						purchasePackage: r,
						savedCardsPending: n,
						selectedPayment: s,
						stripeTokenPending: i
					} = this.props;
					return c.a.createElement("div", {
						className: S.a.purchaseSelectPaymentFooter
					}, c.a.createElement(g.a, {
						className: S.a.balance,
						coinBalance: t
					}), s === o.Gb ? e && e.pennyPrice && a ? c.a.createElement(A, {
						awardId: e.id,
						className: Object(b.a)(S.a.purchaseButton, S.a.paypalCheckoutButton),
						pennies: e.pennyPrice,
						thingId: a
					}) : r && c.a.createElement(A, {
						className: Object(b.a)(S.a.purchaseButton, S.a.paypalCheckoutButton),
						coinPackage: r
					}) : null, s === o.Fb && c.a.createElement(y.l, {
						className: S.a.purchaseButton,
						"data-redditstyle": !0,
						disabled: i || n,
						onClick: this.onCompletePurchaseClick
					}, B._("Complete purchase", null, {
						hk: "3d1QJR"
					})))
				}
			}
			var R = Object(s.injectStripe)(Object(h.c)(F)),
				G = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				D = a("./src/reddit/icons/fonts/Coin/index.tsx");
			const {
				fbt: L
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var U = e => {
				const t = Object(m.a)();
				return c.a.createElement("div", {
					className: S.a.purchaseHeader,
					style: {
						backgroundImage: `url("${O.a.assetPath}/img/gold/coins-hero.jpg")`
					}
				}, c.a.createElement(D.a, {
					className: S.a.coinIcon
				}), c.a.createElement("div", {
					className: S.a.titleMain
				}, L._("Buy {amount}!", [L._param("amount", Object(d.b)(e.purchasePackage.coins, {
					locale: t,
					type: i.b.Reddit,
					currency: i.a
				}))], {
					hk: "3VNw69"
				})), c.a.createElement("div", {
					className: S.a.titleDescription
				}, L._("You're purchasing Coins for yourself, {userName}!", [L._param("userName", e.userName)], {
					hk: "ZGCBt"
				})), c.a.createElement("img", {
					className: S.a.goldPackage,
					src: e.purchasePackage.images.purchaseSuccess["3x"].url
				}), c.a.createElement("button", {
					className: S.a.closeButton,
					onClick: e.onCloseClick
				}, c.a.createElement(G.b, {
					className: S.a.closeIcon,
					"data-redditstyle": !0
				})))
			};
			var H = e => {
					const t = Object(m.a)(),
						a = [];
					if (e.purchasePackage && a.push(r.fbt._("{coinCount} will automatically be spent on this {awardName} Award.", [r.fbt._param("coinCount", Object(d.b)(e.award.coinPrice, {
							locale: t,
							type: i.b.Reddit,
							currency: i.a
						})), r.fbt._param("awardName", e.award.name)], {
							hk: "2ImQA8"
						})), e.award.pennyDonate && a.push(r.fbt._("{dollarsDonate} will be donated.", [r.fbt._param("dollarsDonate", Object(d.b)(e.award.pennyDonate, {
							locale: t
						}))], {
							hk: "3jOvCI"
						})), e.award.giverCoinReward) {
						a.push(r.fbt._("As a thank you, you will receive {giverCoinReward}.", [r.fbt._param("giverCoinReward", Object(d.b)(e.award.giverCoinReward, {
							locale: t,
							type: i.b.Reddit,
							currency: i.a
						}))], {
							hk: "20S8v2"
						}));
						const n = e.coinBalance + (e.purchasePackage ? e.purchasePackage.coins : 0) + e.award.giverCoinReward - (e.award.pennyPrice ? 0 : e.award.coinPrice);
						n > 0 && n !== e.coinBalance && r.fbt._("You’ll have {remainingCoins} remaining.", [r.fbt._param("remainingCoins", Object(d.b)(n, {
							locale: t,
							type: i.b.Reddit,
							currency: i.a
						}))], {
							hk: "DrEWG"
						})
					}
					return c.a.createElement("div", {
						className: S.a.purchaseGildHeader
					}, c.a.createElement("div", {
						className: S.a.awardTitle
					}, r.fbt._("Give the {awardName} Award", [r.fbt._param("awardName", e.award.name)], {
						hk: "28iR3j"
					})), c.a.createElement("div", {
						className: S.a.awardTitleDescription
					}, a.join(" ")), c.a.createElement("img", {
						className: S.a.awardIcon,
						src: e.award.icon.url
					}), c.a.createElement("button", {
						className: S.a.closeButton,
						onClick: e.onCloseClick
					}, c.a.createElement(G.b, {
						className: Object(b.a)(S.a.closeIcon, S.a.awardPurchase),
						"data-redditstyle": !0
					})))
				},
				z = a("./src/reddit/hooks/useStripe.ts");
			t.a = e => {
				const t = Object(m.a)(),
					a = Object(z.a)(),
					n = e.purchasePackage ? e.purchasePackage.pennies : e.selectedAward.pennyPrice || 0;
				return c.a.createElement(s.StripeProvider, {
					stripe: a
				}, c.a.createElement(s.Elements, null, c.a.createElement(c.a.Fragment, null, e.gildThingId ? c.a.createElement(H, {
					coinBalance: e.coinBalance,
					award: e.selectedAward,
					purchasePackage: e.purchasePackage,
					userName: e.userName,
					onCloseClick: e.onCloseModal
				}) : e.purchasePackage && c.a.createElement(U, {
					coinBalance: e.coinBalance,
					purchasePackage: e.purchasePackage,
					userName: e.userName,
					onCloseClick: e.onCloseModal
				}), c.a.createElement("div", {
					className: S.a.purchaseBody
				}, c.a.createElement(l.a, {
					className: S.a.selectPayment,
					gildThingId: e.gildThingId,
					nightmode: e.nightmode,
					selectedPayment: e.selectedPayment,
					onPaymentSelected: e.onPaymentSelected
				}), e.selectedPayment === o.Fb && c.a.createElement(u.a, {
					nightmode: e.nightmode
				}), c.a.createElement("div", {
					className: S.a.checkoutFooter
				}, c.a.createElement("div", {
					className: S.a.purchaseTotal
				}, r.fbt._("Total: {totalAmount}", [r.fbt._param("totalAmount", Object(d.b)(n, {
					locale: t
				}))], {
					hk: "3dx6W8"
				}))), e.selectedPayment === o.Gb && e.paypalErrorMessage && c.a.createElement("div", {
					className: S.a.errorMessage
				}, e.paypalErrorMessage), e.selectedPayment === o.Fb && e.stripeErrorMessage && c.a.createElement("div", {
					className: S.a.errorMessage
				}, e.stripeErrorMessage), c.a.createElement("div", {
					className: S.a.agreementLink
				}, e.purchasePackage && (e => {
					if (!e.gildThingId || !e.purchasePackage) return null;
					return e.coinBalance + e.purchasePackage.coins - e.selectedAward.coinPrice > 0 ? c.a.createElement(c.a.Fragment, null, r.fbt._("The minimum Coins purchase is {coins}.", [r.fbt._param("coins", Object(d.b)(e.purchasePackage.coins, {
						locale: e.locale,
						type: i.b.Reddit,
						currency: i.a
					}))], {
						hk: "1y9FMB"
					}), c.a.createElement("br", null)) : null
				})({
					...e,
					locale: t
				}), Object(p.a)(r.fbt._("By purchasing Coins and Awards, you agree to the :agreement:.", null, {
					hk: "1eCqza"
				}), {
					":agreement:": c.a.createElement("a", {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.fbt._("Reddit User Agreement", null, {
						hk: "11z9fY"
					}))
				}))), c.a.createElement(R, {
					award: e.selectedAward,
					coinBalance: e.coinBalance,
					gildThingId: e.gildThingId,
					onCompletePurchaseClick: e.onCompletePurchaseClick,
					purchasePackage: e.purchasePackage,
					savedCardsPending: e.savedCardsPending,
					selectedPayment: e.selectedPayment,
					stripeTokenPending: e.stripeTokenPending
				}))))
			}
		},
		"./src/reddit/components/CoinPurchaseModal/index.m.less": function(e, t, a) {
			e.exports = {
				coinPurchaseModal: "_3PdRn_CekW51ny0uOVaHCK",
				purchaseHeader: "g2a3Zv8q9QUPKkvmhD9dL",
				purchaseGildHeader: "QMHZeOFhvSdgNkN2CTp18",
				coinIcon: "_3alReP5WKjkboxwGTN8Lpb",
				titleMain: "_3jPcOJNUfeN7OdCWA1d5VZ",
				titleDescription: "_1Q6p4vuIwLOxdw0XbHUT8w",
				goldPackage: "_1Zs4anwKjSFfYdqzSlkAcM",
				awardTitle: "_1Xjj9WldJRB-1ed1DXvre4",
				awardTitleDescription: "_2vpRJS-JeaGdKGeNQ2Ol8V",
				awardIcon: "_2zDbtSCEwDNAL2vdRkM5a_",
				closeButton: "_19tq6XZNubN99tY6SeeVQS",
				closeIcon: "_39qPvGtn6v2srEyecX-Q4y",
				awardPurchase: "whOANGCvUvMZjOdtnV1bZ",
				purchaseBody: "_3EtBcIxrPxM_DvmbfXFyCX",
				loaderContainer: "_2uPzorlzh0nEEymC1BvQBX",
				selectPayment: "_1kvmUEmQHiHPMWKNupYHMc",
				checkoutFooter: "HJGClx25Yjtzsp_aYfn0t",
				purchaseTotal: "_1Wq99elhkrt-_gxygdKIRE",
				agreementLink: "_4bWCoUTra_tfj3pkGR8fX",
				purchaseSelectPaymentFooter: "PDhzgUep2V87LcZ5msw2j",
				balance: "_3Yby__H8ckQTVIBMfVRI9L",
				purchaseButton: "_1C6JQFckaXQ2JzWIgJKnwA",
				paypalCheckoutButton: "_1Kbe0XzWlb6SJwe3jCy1R3",
				paymentCompleteHeader: "_3Pz3ZE0Flyeud2EZ_rhxs",
				paymentCompleteTitleMain: "OTAmbKrqsrvoZxHWtSAXO",
				paymentCompleteTitleDescription: "_3vjo7IoOcQ9Hv1YmhvnodL",
				errorMessage: "_2ZSesrmixZQhOH6L7Yce5m"
			}
		},
		"./src/reddit/components/CoinPurchaseModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				c = a("./node_modules/react-redux/es/index.js"),
				s = a("./node_modules/reselect/es/index.js"),
				o = a("./src/higherOrderComponents/asModal/index.tsx"),
				i = a("./src/reddit/constants/zIndex.ts"),
				d = a("./src/reddit/actions/gold/modals.ts"),
				l = a("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				u = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				p = a("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				m = a("./src/reddit/actions/toaster.ts"),
				b = a("./src/reddit/components/TrackingHelper/index.tsx"),
				g = a("./src/reddit/constants/colors.ts"),
				h = a("./src/reddit/helpers/correlationIdTracker.ts"),
				y = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				f = a("./src/reddit/models/Toast/index.ts"),
				O = a("./src/reddit/models/User/index.ts"),
				j = a("./src/reddit/selectors/gild.ts"),
				C = a("./src/reddit/selectors/gold/giveAwards.ts"),
				P = a("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				k = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				w = a("./src/reddit/selectors/platform.ts"),
				x = a("./src/reddit/selectors/user.ts"),
				_ = a("./src/lib/classNames/index.ts"),
				E = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				v = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				I = a("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				N = a.n(I);
			const {
				fbt: T
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var A = e => {
					const {
						award: t,
						onClickClose: a
					} = e;
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: N.a.purchaseGildHeader
					}, n.a.createElement("div", {
						className: N.a.awardTitle
					}, T._("Give the {award name} Award", [T._param("award name", t.name)], {
						hk: "1nWqWe"
					})), n.a.createElement("img", {
						className: N.a.awardIcon,
						src: t.icon.url
					}), n.a.createElement("button", {
						className: N.a.closeButton,
						onClick: a
					}, n.a.createElement(E.b, {
						className: Object(_.a)(N.a.closeIcon, N.a.awardPurchase),
						"data-redditstyle": !0
					}))), n.a.createElement("div", {
						className: Object(_.a)(N.a.purchaseBody, N.a.loaderContainer)
					}, n.a.createElement(v.a, {
						sizePx: 100
					})))
				},
				M = a("./src/reddit/components/CoinPurchaseModal/PaymentCompletePage.tsx"),
				S = a("./src/reddit/components/CoinPurchaseModal/SelectPaymentPage.tsx");

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
					}
					return e
				}).apply(this, arguments)
			}
			const F = Object(s.c)({
					activePage: k.q,
					allowNavigationCallback: e => {
						const t = Object(w.a)(e);
						return null === t ? void 0 : t
					},
					coinBalance: x.e,
					coinPackages: P.d,
					correlationId: e => Object(k.r)(e) || Object(h.d)(h.a.GoldPayment, !1),
					dealCoinPackages: P.f,
					gildThingId: k.s,
					isIframed: j.g,
					nightmode: x.X,
					savedCardsPending: k.w,
					selectedAward: C.b,
					selectedPayment: k.c,
					stripeErrorMessage: k.j,
					stripeTokenPending: k.m,
					paypalErrorMessage: k.d,
					purchaseCatalogError: P.n,
					purchaseCatalogPending: P.o,
					purchasePackageId: k.t,
					recommendedPackages: P.q,
					userName: e => {
						const t = Object(x.k)(e);
						return `u/${Object(O.e)(t)}`
					}
				}),
				R = Object(c.b)(F, (e, t) => ({
					closeModal: () => {
						e(Object(l.a)()), e(Object(d.a)())
					},
					loadSavedCards: () => e(Object(u.loadSavedCards)()),
					onFailedToLoadCatalog: t => {
						const a = {
							kind: f.b.Error,
							text: t
						};
						return e(Object(m.f)(a))
					},
					onPaymentSelected: t => e(Object(u.selectPaymentMethod)(t)),
					requestPurchaseCatalog: t => e(Object(p.b)(t)),
					dispatchCompletePurchase: (t, a, r, n) => {
						e(r ? Object(l.i)(t, a, n) : Object(l.j)(t, a))
					}
				}), (e, t, a) => ({
					...e,
					...t,
					...a,
					onCompletePurchaseClick: (a, r) => t.dispatchCompletePurchase(a, r, !!e.gildThingId, e.isIframed)
				}));
			class G extends n.a.Component {
				constructor(e) {
					super(e), this.handleEscapeKey = e => {
						const {
							onTryCloseModal: t
						} = this.props;
						if (27 === e.keyCode) return t()
					};
					const {
						coinPackages: t,
						correlationId: a,
						loadSavedCards: r,
						purchaseCatalogPending: n,
						requestPurchaseCatalog: c
					} = this.props;
					t.length || n || c(a), r()
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						gildThingId: e,
						sendEvent: t
					} = this.props;
					Object(h.d)(h.a.GoldPayment, !1), t(Object(y.h)(e))
				}
				componentDidUpdate(e) {
					if (this.props.stripeErrorMessage && !e.stripeErrorMessage) {
						const {
							gildThingId: e,
							sendEvent: t
						} = this.props;
						t(Object(y.f)(e))
					}
				}
				render() {
					const {
						activePage: e,
						coinBalance: t,
						coinPackages: a,
						dealCoinPackages: r,
						gildThingId: c,
						nightmode: s,
						onCompletePurchaseClick: o,
						onFailedToLoadCatalog: i,
						onPaymentSelected: d,
						onTryCloseModal: l,
						paypalErrorMessage: u,
						purchaseCatalogError: p,
						purchaseCatalogPending: m,
						purchasePackageId: b,
						recommendedPackages: g,
						savedCardsPending: h,
						selectedAward: y,
						selectedPayment: f,
						stripeErrorMessage: O,
						stripeTokenPending: j,
						userName: C
					} = this.props;
					if (p) return i(p), l(), null;
					const P = !!c,
						k = [...a, ...r, ...g].filter(e => e.mobileId === b)[0];
					return "paymentCompleted" === e ? n.a.createElement("div", null, n.a.createElement(M.a, {
						isGild: P,
						onCloseClick: l,
						userName: C
					})) : m || !k ? n.a.createElement("div", null, n.a.createElement(A, {
						award: y,
						onClickClose: l
					})) : n.a.createElement("div", null, "selectPayment" === e && n.a.createElement(S.a, {
						coinBalance: t,
						gildThingId: c,
						nightmode: s,
						onCloseModal: l,
						onCompletePurchaseClick: o,
						onPaymentSelected: d,
						paypalErrorMessage: u,
						purchasePackage: k,
						savedCardsPending: h,
						selectedAward: y,
						selectedPayment: f,
						stripeErrorMessage: O,
						stripeTokenPending: j,
						userName: C
					}))
				}
			}
			const D = Object(o.a)(G);
			t.default = R(Object(b.c)(class extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.onTryCloseModal = () => {
						const {
							gildThingId: e,
							sendEvent: t
						} = this.props;
						t(Object(y.b)(e)), this.onCloseModal()
					}, this.onCloseModal = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}
				}
				render() {
					const e = {
						backgroundColor: g.b.overlayReportFlow,
						...this.props.isIframed ? {
							zIndex: i.a,
							paddingTop: 12,
							paddingBottom: 12
						} : {}
					};
					return n.a.createElement(D, B({}, this.props, {
						className: N.a.coinPurchaseModal,
						onCloseModal: this.onCloseModal,
						onOverlayClick: this.onTryCloseModal,
						onTryCloseModal: this.onTryCloseModal,
						overlayCustomStyles: e,
						withOverlay: !0
					}))
				}
			}))
		},
		"./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less": function(e, t, a) {
			e.exports = {
				purchaseFooter: "_2siiafYfV9NgkupSIDgaht",
				purchaseButton: "_18yTyMH2TYOdGSb9UumZq-"
			}
		},
		"./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				c = a("./src/reddit/controls/Button/index.tsx"),
				s = a("./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less"),
				o = a.n(s);
			const {
				fbt: i
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				buttonText: e,
				onCloseClick: t
			}) => n.a.createElement("div", {
				className: o.a.purchaseFooter
			}, n.a.createElement(c.l, {
				className: o.a.purchaseButton,
				"data-redditstyle": !0,
				onClick: t
			}, e || i._("Done", null, {
				hk: "3s1bT9"
			})))
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, a) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				c = a("./src/lib/classNames/index.ts"),
				s = a("./src/reddit/controls/LoadingIcon/index.m.less"),
				o = a.n(s);
			t.a = ({
				center: e,
				className: t,
				sizePx: a = 10
			}) => n.a.createElement("div", {
				className: Object(c.a)(o.a.loadingIcon, t, {
					[o.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${a}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/endpoints/gold/paypalPurchases.ts": function(e, t, a) {
			"use strict";
			a.d(t, "f", (function() {
				return d
			})), a.d(t, "a", (function() {
				return l
			})), a.d(t, "b", (function() {
				return u
			})), a.d(t, "c", (function() {
				return p
			})), a.d(t, "d", (function() {
				return m
			})), a.d(t, "e", (function() {
				return b
			}));
			var r = a("./src/lib/constants/index.ts"),
				n = a("./src/lib/makeApiRequest/index.ts"),
				c = a("./src/lib/omitHeaders/index.ts"),
				s = a("./src/reddit/constants/headers.ts"),
				o = a("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				i = a("./src/reddit/endpoints/gold/purchase.ts");
			const d = async ({
				buttonId: e,
				context: t,
				correlationId: a
			}) => {
				const d = {
						button_id: e,
						correlation_id: a
					},
					l = `${t.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					u = Object(o.a)(l);
				return Object(n.a)(Object(c.a)(t, [s.a]), {
					method: r.ib.POST,
					endpoint: u,
					data: d
				}).then(i.c)
			}, l = async ({
				context: e,
				coins: t,
				pennies: a,
				correlationId: o
			}) => {
				const d = {
					coins: t,
					pennies: a,
					correlation_id: o
				};
				return Object(n.a)(Object(c.a)(e, [s.a]), {
					method: r.ib.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(i.c)
			}, u = async ({
				context: e,
				awardId: t,
				pennies: a,
				thingId: o,
				correlationId: d
			}) => {
				const l = {
					award_id: t,
					correlation_id: d,
					pennies: a,
					thing_id: o
				};
				return Object(n.a)(Object(c.a)(e, [s.a]), {
					method: r.ib.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(i.c)
			}, p = async ({
				context: e,
				offerContext: t,
				orderId: a,
				coins: o,
				pennies: d,
				correlationId: l
			}) => {
				const u = {
					offer_context: t,
					order_id: a,
					coins: o,
					pennies: d,
					correlation_id: l
				};
				return Object(n.a)(Object(c.a)(e, [s.a]), {
					method: r.ib.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: u
				}).then(i.c)
			}, m = async ({
				awardId: e,
				context: t,
				coins: a,
				correlationId: o,
				isAnonymous: d,
				message: l,
				offerContext: u,
				orderId: p,
				pennies: m,
				thingId: b
			}) => {
				const g = {
					award_id: e,
					coins: a,
					correlation_id: o,
					is_anonymous: d,
					message: l,
					offer_context: u,
					order_id: p,
					pennies: m,
					thing_id: b
				};
				return Object(n.a)(Object(c.a)(t, [s.a]), {
					method: r.ib.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: g
				}).then(i.c)
			}, b = async ({
				awardId: e,
				context: t,
				correlationId: a,
				isAnonymous: o,
				message: d,
				orderId: l,
				thingId: u
			}) => {
				const p = {
					award_id: e,
					correlation_id: a,
					is_anonymous: o,
					message: d,
					order_id: l,
					thing_id: u
				};
				return Object(n.a)(Object(c.a)(t, [s.a]), {
					method: r.ib.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: p
				}).then(i.c)
			}
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			}));
			var r = a("./node_modules/react/index.js"),
				n = a.n(r);

			function c(e, t) {
				const a = e.toString().split(":");
				return a.length % 2 == 0 ? e : a.reduce((e, a, r) => (r % 2 == 0 ? e.push(a) : "" === a ? e.push(":") : `:${a}:` in t ? e.push(t[`:${a}:`]) : e.push(`:${a}:`), e), []).map((e, t) => n.a.createElement(n.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return c
			})), a.d(t, "c", (function() {
				return s
			})), a.d(t, "a", (function() {
				return o
			}));
			var r = a("./node_modules/bignumber.js/bignumber.js"),
				n = a("./src/lib/prettyPrintNumber/index.ts");

			function c(e, t) {
				const a = new r.BigNumber(e),
					n = new r.BigNumber(t || 1);
				return a.dividedToIntegerBy(n).toString()
			}

			function s(e, t) {
				return Object(n.b)(parseInt(c(e, t), 10))
			}

			function o(e, t) {
				const a = new r.BigNumber(e),
					n = new r.BigNumber(t || 1);
				return a.multipliedBy(n).toFixed(0)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CoinPurchaseModal.ac392016aa7729460e29.js.map