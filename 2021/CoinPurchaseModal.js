// https://www.redditstatic.com/desktop2x/CoinPurchaseModal.aebda952d35885a99d79.js
// Retrieved at 7/15/2021, 10:30:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CoinPurchaseModal"], {
		"./src/lib/loadRedditAdsPixel.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			})), a.d(t, "b", (function() {
				return o
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
			const o = () => {
				try {
					rdt("track", "Purchase")
				} catch (e) {
					r.c.captureMessage('Attempted to fire RedditAds "Purchase" pixel, but global "rdt" object was unavailable')
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
				return A
			})), a.d(t, "j", (function() {
				return T
			})), a.d(t, "i", (function() {
				return M
			})), a.d(t, "f", (function() {
				return N
			})), a.d(t, "g", (function() {
				return S
			})), a.d(t, "h", (function() {
				return B
			}));
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./src/lib/formatApiError/index.ts"),
				o = a("./src/lib/makeActionCreator/index.ts"),
				s = a("./src/lib/sentry/index.ts"),
				c = a("./src/reddit/constants/modals.ts"),
				i = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				d = a("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				l = a("./src/reddit/actions/modal.ts"),
				p = a("./src/reddit/actions/toaster.ts"),
				u = a("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				m = a("./src/reddit/endpoints/gold/purchase.ts"),
				b = a("./src/reddit/helpers/correlationIdTracker.ts"),
				g = a("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				h = a("./src/reddit/models/Gold/Award.ts"),
				y = a("./src/reddit/models/Gold/ProductOffer.ts"),
				j = a("./src/reddit/models/Toast/index.ts"),
				O = a("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				C = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				f = a("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const P = Object(o.a)(f.q),
				k = Object(o.a)(f.c),
				w = e => async (t, a) => {
					t(P(e)), t(Object(l.h)(c.a.ECON_COIN_PURCHASE))
				}, x = () => async (e, t) => {
					e(k()), e(Object(l.g)(c.a.ECON_COIN_PURCHASE))
				}, _ = Object(o.a)(f.u), E = ({
					correlationId: e,
					packageId: t
				}) => async (a, r) => {
					const n = r();
					Object(O.e)(n, t) ? (a(_({
						correlationId: e,
						packageId: t
					})), a(Object(l.i)(c.a.GOLD_TARGETED_OFFER_MODAL))) : s.c.captureMessage(`Tried to show targeted offer, but could not find package id: ${t}`)
				}, v = Object(o.a)(f.p), I = ({
					correlationId: e,
					packageId: t
				}) => async (a, r) => {
					Object(O.c)(r(), t) ? (a(v({
						correlationId: e,
						packageId: t
					})), a(Object(l.i)(c.a.ECON_COIN_PACKAGE_OFFER))) : s.c.captureMessage(`Tried to show coin package offer, but could not find package id: ${t}`)
				}, A = (e, t, a) => async (n, o) => {
					await n(Object(d.c)(e, a));
					const s = o(),
						c = Object(O.m)(s);
					if (0 !== c.length) n(w({
						correlationId: a,
						packageId: c[0].mobileId,
						thingId: t
					}));
					else {
						const e = Object(O.j)(s),
							t = r.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						n(Object(p.f)({
							kind: j.b.Error,
							duration: p.a,
							text: e || t
						}))
					}
				}, T = (e, t) => async (a, o, {
					apiContext: s
				}) => {
					const c = o(),
						{
							coins: d,
							pennies: l
						} = t,
						p = Object(C.r)(c) || Object(b.d)(b.a.GoldPayment, !1);
					let u, g;
					a(Object(i.stripeTokenPending)());
					const h = Object(C.y)(c);
					if (h || (u = await a(Object(i.validateAndCreateStripeToken)(e)), g = Object(C.v)(c), u)) try {
						const e = await Object(m.f)({
							coins: d,
							context: s(),
							correlationId: p,
							offerContext: Object(y.d)(t, !1),
							pennies: l,
							rememberCard: g,
							savedCardId: h || void 0,
							token: u
						});
						if (e.error) {
							const t = Object(n.a)(e.error, e.status);
							return void a(Object(i.stripeApiError)(t))
						}
						return a(Object(i.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(b.b)(b.a.GoldPayment)
					} catch (j) {
						const e = Object(n.a)(j);
						a(Object(i.stripeApiError)(e))
					} else {
						const e = r.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						a(Object(i.stripeApiError)(e))
					}
				}, M = (e, t, o) => async (s, c, {
					apiContext: d
				}) => {
					const l = c(),
						{
							coins: p,
							pennies: u
						} = t,
						j = Object(C.r)(l) || Object(b.d)(b.a.GoldPayment, !1);
					let O, f;
					s(Object(i.stripeTokenPending)());
					const P = Object(C.y)(l);
					if (P || (O = await s(Object(i.validateAndCreateStripeToken)(e)), f = Object(C.v)(l), O)) try {
						const {
							gildModalThingId: e,
							isAnonymous: c,
							message: C,
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
								isAnonymous: c,
								message: C
							},
							E = await Object(m.e)({
								coins: p,
								context: d(),
								correlationId: j,
								gildParams: _,
								isOldReddit: o,
								offerContext: Object(y.d)(t, !0),
								pennies: u,
								rememberCard: f,
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
								coins: o,
								treatment_tags: c
							} = E.body;
							return s(t({
								awardKarmaReceived: r || 0,
								awardId: w,
								awardings: n && n.length ? Object(g.a)(n).map(e => ({
									award: Object(h.h)(e),
									total: e.count
								})) : [],
								coins: o,
								id: e,
								treatmentTags: c
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
				}, N = e => async (t, a, {
					apiContext: r
				}) => {
					const o = Object(b.c)(b.a.GoldPayment),
						{
							coins: c,
							pennies: d
						} = e;
					try {
						const e = await Object(u.a)({
							context: r(),
							coins: c,
							pennies: d,
							correlationId: o
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
					apiContext: o
				}) => {
					const c = r(),
						d = Object(C.r)(c) || Object(b.d)(b.a.GoldPayment, !1),
						{
							coins: l,
							pennies: p
						} = t;
					try {
						const r = await Object(u.c)({
							context: o(),
							offerContext: Object(y.d)(t, !1),
							orderId: e,
							coins: l,
							pennies: p,
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
				}, B = (e, t) => async (o, c, {
					apiContext: d
				}) => {
					const l = c(),
						p = Object(C.r)(l) || Object(b.d)(b.a.GoldPayment, !1),
						{
							coins: m,
							pennies: j
						} = t;
					try {
						const {
							gildModalThingId: s,
							isAnonymous: c,
							message: O,
							selectedAward: C
						} = l.gild;
						if (!s || !C) return void o(Object(i.paypalApiError)(r.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const f = C.id,
							P = await Object(u.d)({
								context: d(),
								offerContext: Object(y.d)(t, !0),
								orderId: e,
								coins: m,
								pennies: j,
								thingId: s,
								awardId: f,
								message: O || "",
								isAnonymous: c,
								correlationId: p
							});
						if (P.error) {
							const e = Object(n.a)(P.error);
							o(Object(i.paypalApiError)(e))
						} else {
							o(x());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: r,
								subreddit_coins: n,
								treatment_tags: c
							} = P.body;
							o(Object(i.paymentCompleted)({
								coins: r,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await a.e("gildActions").then(a.bind(null, "./src/reddit/actions/gold/gild.ts"));
							o(d({
								awardId: f,
								awardKarmaReceived: t || 0,
								awardings: Object(g.a)(e).map(e => ({
									award: Object(h.h)(e),
									total: e.count
								})),
								coins: r,
								id: s,
								subredditCoins: n,
								treatmentTags: c
							})), Object(b.b)(b.a.GoldPayment)
						}
					} catch (O) {
						s.c.captureException(O);
						const e = Object(n.a)(O);
						o(Object(i.paypalApiError)(e))
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
				return p
			})), a.d(t, "postalCodeInput", (function() {
				return u
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
				return j
			})), a.d(t, "paypalApiError", (function() {
				return O
			})), a.d(t, "toggleRememberCard", (function() {
				return C
			})), a.d(t, "selectSavedCard", (function() {
				return f
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
				o = a("./src/lib/makeActionCreator/index.ts"),
				s = a("./src/reddit/endpoints/gold/purchase.ts"),
				c = a("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				i = a("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = Object(o.a)(c.B),
				l = Object(o.a)(c.w),
				p = Object(o.a)(c.b),
				u = Object(o.a)(c.y),
				m = Object(o.a)(c.a),
				b = Object(o.a)(c.E),
				g = Object(o.a)(c.G),
				h = Object(o.a)(c.F),
				y = Object(o.a)(c.D),
				j = e => async (t, a) => {
					const n = a(),
						o = Object(i.h)(n),
						s = Object(i.l)(n),
						{
							token: c,
							error: d
						} = await e.createToken({
							name: o,
							address_zip: s
						});
					if (o.trim()) {
						if (!d && c) return c;
						t(h(d || void 0))
					} else {
						const e = r.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(m({
							message: e
						}))
					}
				}, O = Object(o.a)(c.x), C = Object(o.a)(c.H), f = Object(o.a)(c.C), P = Object(o.a)(c.g), k = e => async (t, a, {
					apiContext: r
				}) => {
					t(P(e));
					try {
						const t = await Object(s.a)(r(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (o) {
						n.c.captureException(o)
					}
				}, w = Object(o.a)(c.z), x = Object(o.a)(c.A), _ = () => async (e, t, {
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
						e(x(r)), r[0] && e(f(r[0].cardId))
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
				return j
			})), a.d(t, "e", (function() {
				return O
			})), a.d(t, "d", (function() {
				return C
			})), a.d(t, "c", (function() {
				return f
			}));
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./src/lib/formatApiError/index.ts"),
				o = a("./src/lib/makeActionCreator/index.ts"),
				s = a("./src/lib/sentry/index.ts"),
				c = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				i = a("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				d = a("./src/reddit/endpoints/gold/purchase.ts"),
				l = a("./src/reddit/helpers/correlationIdTracker.ts"),
				p = a("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				u = a("./src/reddit/models/Gold/Award.ts"),
				m = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				b = a("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const g = Object(o.a)(b.r),
				h = Object(o.a)(b.d),
				y = Object(o.a)(b.s),
				j = (e, t, a) => async e => {
					e(y({
						thingId: t
					})), e(g({
						correlationId: a
					}))
				}, O = (e, t) => async (o, s, {
					apiContext: i
				}) => {
					const b = s(),
						g = Object(l.c)(l.a.GoldPayment);
					let y, j;
					o(Object(c.stripeTokenPending)());
					const O = Object(m.y)(b);
					if (O || (y = await o(Object(c.validateAndCreateStripeToken)(e)), j = Object(m.v)(b), y)) try {
						const {
							gildModalThingId: e,
							isAnonymous: s,
							message: l,
							selectedAward: m
						} = b.gild;
						if (!e || !m.id) return void o(Object(c.stripeApiError)(r.fbt._("Gilding unknown thing", null, {
							hk: "Qd6mo"
						})));
						const C = m.id,
							f = m.pennyPrice;
						if (!f) return void o(Object(c.stripeApiError)(r.fbt._("Trying to purchase award with zero price", null, {
							hk: "3FhAjz"
						})));
						const P = {
								gildType: C,
								isAnonymous: s,
								message: l
							},
							k = await Object(d.g)({
								context: i(),
								correlationId: g,
								gildParams: P,
								isOldReddit: t,
								pennies: f,
								rememberCard: j,
								savedCardId: O || void 0,
								thingId: e,
								token: y
							});
						if (k.error) {
							const e = Object(n.a)(k.error, k.status);
							return void o(Object(c.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await a.e("gildActions").then(a.bind(null, "./src/reddit/actions/gold/gild.ts"));
							o(h()), o(Object(c.paymentCompleted)({
								confirmed: !1
							}));
							const {
								all_awardings: r,
								awarder_karma_received: n,
								coins: s,
								treatment_tags: i
							} = k.body;
							return void o(t({
								awardKarmaReceived: n || 0,
								awardId: C,
								awardings: r && r.length ? Object(p.a)(r).map(e => ({
									award: Object(u.h)(e),
									total: e.count
								})) : [],
								coins: s,
								id: e,
								treatmentTags: i
							}))
						}
					} catch (C) {
						const e = Object(n.a)(C);
						o(Object(c.stripeApiError)(e))
					} else o(Object(c.stripeApiError)(r.fbt._("Looks like something went wrong validating your credit card.", null, {
						hk: "20FruV"
					})))
				}, C = (e, t, a) => async (r, o, {
					apiContext: d
				}) => {
					const p = Object(l.c)(l.a.GoldPayment);
					try {
						const o = await Object(i.b)({
							context: d(),
							awardId: e,
							pennies: t,
							thingId: a,
							correlationId: p
						});
						if (o.error) {
							const e = Object(n.a)(o.error);
							return void r(Object(c.paypalApiError)(e))
						} {
							const {
								order_id: e
							} = o.body;
							return e
						}
					} catch (u) {
						s.c.captureException(u);
						const e = Object(n.a)(u);
						r(Object(c.paypalApiError)(e))
					}
				}, f = e => async (t, o, {
					apiContext: d
				}) => {
					const m = o(),
						b = Object(l.c)(l.a.GoldPayment);
					try {
						const {
							gildModalThingId: o,
							isAnonymous: s,
							message: l,
							selectedAward: g
						} = m.gild;
						if (!o || !g) return void t(Object(c.paypalApiError)(r.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const y = g.id,
							j = await Object(i.e)({
								awardId: y,
								context: d(),
								orderId: e,
								thingId: o,
								message: l || "",
								isAnonymous: s,
								correlationId: b
							});
						if (j.error) {
							const e = Object(n.a)(j.error);
							t(Object(c.paypalApiError)(e))
						} else {
							t(h());
							const {
								all_awardings: e,
								awarder_karma_received: r,
								coins: n,
								subreddit_coins: s,
								treatment_tags: i
							} = j.body;
							t(Object(c.paymentCompleted)({
								coins: n,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await a.e("gildActions").then(a.bind(null, "./src/reddit/actions/gold/gild.ts"));
							t(d({
								awardKarmaReceived: r || 0,
								awardId: y,
								awardings: Object(p.a)(e).map(e => ({
									award: Object(u.h)(e),
									total: e.count
								})),
								coins: n,
								id: o,
								subredditCoins: s,
								treatmentTags: i
							}))
						}
					} catch (g) {
						s.c.captureException(g);
						const e = Object(n.a)(g);
						t(Object(c.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return h
			})), a.d(t, "c", (function() {
				return C
			})), a.d(t, "a", (function() {
				return P
			}));
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./src/lib/env/index.ts"),
				o = a("./src/lib/makeActionCreator/index.ts"),
				s = a("./src/lib/sentry/index.ts"),
				c = a("./src/reddit/endpoints/gold/productCatalog.ts"),
				i = a("./src/reddit/selectors/user.ts"),
				d = a("./src/reddit/actions/toaster.ts"),
				l = a("./src/reddit/models/Toast/index.ts"),
				p = a("./src/reddit/actions/post.ts"),
				u = a("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const m = Object(o.a)(u.j),
				b = Object(o.a)(u.k),
				g = Object(o.a)(u.i),
				h = e => async (t, a, {
					apiContext: o
				}) => {
					t(m());
					const d = a(),
						l = Object(i.J)(d);
					try {
						const a = !l,
							r = await Object(c.b)({
								context: o(),
								correlationId: e,
								shouldUseCurrentOrigin: a
							});
						if (!r.ok) throw new Error(r.error && r.error.type || "Unknown error");
						const n = r.body;
						t(b(n))
					} catch (p) {
						Object(n.b)() || console.error(p), s.c.captureException(p);
						const e = r.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(g(e))
					}
				}, y = Object(o.a)(u.m), j = Object(o.a)(u.n), O = Object(o.a)(u.l), C = (e, t) => async (a, o, {
					apiContext: i
				}) => {
					a(y());
					try {
						const r = await Object(c.c)({
							awardId: e,
							context: i(),
							correlationId: t
						});
						if (!r.ok) throw new Error(r.error && r.error.type || "Unknown error");
						const n = r.body;
						if (!n.coinPackages || !n.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						a(j(n))
					} catch (d) {
						Object(n.b)() || console.error(d), s.c.captureException(d);
						const e = r.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						a(O(e))
					}
				}, f = Object(o.a)(u.h), P = () => async (e, t, {
					gqlContext: a
				}) => {
					var o, i;
					try {
						const t = await Object(c.a)(a());
						if (t.ok) {
							const a = t.body.data.claimAwardOffer;
							if (null === (o = a.errors) || void 0 === o ? void 0 : o.length) throw new Error(a.errors.map(e => e.message).join(" | "));
							if (!(null === (i = a.awards) || void 0 === i ? void 0 : i.length)) throw new Error("Got empty award list on free award offer claim");
							if (!a.ok) throw new Error("Got not ok response on free award offer claim");
							await e(f({
								awards: a.awards
							})), e(Object(p.B)())
						}
					} catch (u) {
						Object(n.b)() || console.error(u), e(Object(d.f)({
							kind: l.b.Error,
							text: r.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), s.c.captureException(u)
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
				o = a.n(n),
				s = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				i = a("./src/reddit/icons/fonts/Coin/index.tsx"),
				d = a("./src/reddit/components/CoinBalance/index.m.less"),
				l = a.n(d);
			t.a = e => o.a.createElement("div", {
				className: Object(s.a)(l.a.coinBalance, e.className),
				"data-redditstyle": !0
			}, Object(c.a)(r.fbt._("Coin balance:: {Coin icon placeholder}{coinBalance}", [r.fbt._param("Coin icon placeholder", ":coin:"), r.fbt._param("coinBalance", e.coinBalance.toLocaleString())], {
				hk: "2x0upn"
			}), {
				":coin:": o.a.createElement(i.a, null)
			}), " ", o.a.createElement("a", {
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
				o = a.n(n),
				s = a("./src/config.ts"),
				c = a("./src/lib/loadRedditAdsPixel.ts"),
				i = a("./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx"),
				d = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = a("./src/reddit/components/TrackingHelper/index.tsx"),
				p = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				u = a("./src/reddit/icons/fonts/Coin/index.tsx"),
				m = a("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				b = a.n(m);
			class g extends o.a.PureComponent {
				componentDidMount() {
					const {
						gildThingId: e,
						sendEvent: t
					} = this.props;
					t(Object(p.i)(e)), Object(c.b)()
				}
				render() {
					const e = this.props,
						t = e.isGild && r.fbt._("The transaction is processing and we will let you know when it's done.", null, {
							hk: "JMSWS"
						});
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: b.a.paymentCompleteHeader,
						style: {
							backgroundImage: `url("${s.a.assetPath}/img/gold/coins-hero.jpg")`
						}
					}, o.a.createElement(u.a, {
						className: b.a.coinIcon
					}), o.a.createElement("div", {
						className: b.a.paymentCompleteTitleMain
					}, e.isGild ? r.fbt._("Thanks for purchasing an Award, {username}", [r.fbt._param("username", e.userName)], {
						hk: "1VcYkx"
					}) : r.fbt._("Thanks for purchasing Coins, {username}", [r.fbt._param("username", e.userName)], {
						hk: "3m40W1"
					})), o.a.createElement("div", {
						className: b.a.paymentCompleteTitleDescription
					}, t), o.a.createElement("button", {
						className: b.a.closeButton,
						onClick: e.onCloseClick
					}, o.a.createElement(d.b, {
						className: b.a.closeIcon,
						"data-redditstyle": !0
					}))), o.a.createElement(i.a, {
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
				o = a.n(n),
				s = a("./node_modules/react-stripe-elements/es/index.js"),
				c = a("./src/lib/constants/index.ts"),
				i = a("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				d = a("./src/reddit/components/StripePaymentForm/index.tsx"),
				l = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				p = a("./src/lib/classNames/index.ts"),
				u = a("./src/reddit/components/CoinBalance/index.tsx"),
				m = a("./src/reddit/components/TrackingHelper/index.tsx"),
				b = a("./src/reddit/controls/Button/index.tsx"),
				g = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				h = a("./src/config.ts"),
				y = a("./node_modules/react-dom/index.js"),
				j = a.n(y),
				O = a("./node_modules/react-redux/es/index.js"),
				C = a("./node_modules/reselect/es/index.js"),
				f = a("./src/higherOrderComponents/makeAsync.tsx"),
				P = a("./src/reddit/helpers/loadThirdPartyScript.ts"),
				k = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				w = a("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				x = a("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts");
			const _ = Object(C.c)({
				isGild: e => !!Object(k.s)(e)
			});
			class E extends o.a.Component {
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
						React: o.a,
						ReactDOM: j.a
					}), a = {
						sandbox: h.a.paypal.apiKey,
						production: h.a.paypal.apiKey
					};
					return o.a.createElement("div", {
						className: e
					}, o.a.createElement(t, {
						env: h.a.paypal.env,
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
			const v = Object(O.b)(_, (e, t) => ({
				createPayment: () => "coinPackage" in t ? e(Object(w.f)(t.coinPackage)) : "awardId" in t ? e(Object(x.d)(t.awardId, t.pennies, t.thingId)) : void 0,
				executePayment: (a, r) => {
					if ("coinPackage" in t) {
						if (a) return void e(Object(w.h)(r, t.coinPackage));
						e(Object(w.g)(r, t.coinPackage))
					} else "awardId" in t && e(Object(x.c)(r))
				}
			}))(E);
			var I = Object(f.a)({
					getComponent: () => Object(P.c)().then(() => v),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				A = a("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				T = a.n(A);
			const {
				fbt: M
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class N extends o.a.Component {
				constructor() {
					super(...arguments), this.onCompletePurchaseClick = () => {
						const {
							gildThingId: e,
							onCompletePurchaseClick: t,
							purchasePackage: a,
							sendEvent: r,
							stripe: n
						} = this.props;
						n && (r(Object(g.c)(e)), t(n, a))
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
					return o.a.createElement("div", {
						className: T.a.purchaseSelectPaymentFooter
					}, o.a.createElement(u.a, {
						className: T.a.balance,
						coinBalance: t
					}), s === c.Eb ? e && e.pennyPrice && a ? o.a.createElement(I, {
						awardId: e.id,
						className: Object(p.a)(T.a.purchaseButton, T.a.paypalCheckoutButton),
						pennies: e.pennyPrice,
						thingId: a
					}) : r && o.a.createElement(I, {
						className: Object(p.a)(T.a.purchaseButton, T.a.paypalCheckoutButton),
						coinPackage: r
					}) : null, s === c.Db && o.a.createElement(b.i, {
						className: T.a.purchaseButton,
						"data-redditstyle": !0,
						disabled: i || n,
						onClick: this.onCompletePurchaseClick
					}, M._("Complete purchase", null, {
						hk: "3d1QJR"
					})))
				}
			}
			var S = Object(s.injectStripe)(Object(m.c)(N)),
				B = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				G = a("./src/reddit/icons/fonts/Coin/index.tsx");
			const {
				fbt: F
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var R = e => o.a.createElement("div", {
				className: T.a.purchaseHeader,
				style: {
					backgroundImage: `url("${h.a.assetPath}/img/gold/coins-hero.jpg")`
				}
			}, o.a.createElement(G.a, {
				className: T.a.coinIcon
			}), o.a.createElement("div", {
				className: T.a.titleMain
			}, F._("Buy {amount} Coins!", [F._param("amount", e.purchasePackage.coins.toLocaleString())], {
				hk: "3E2DWq"
			})), o.a.createElement("div", {
				className: T.a.titleDescription
			}, F._("You're purchasing Coins for yourself, {userName}!", [F._param("userName", e.userName)], {
				hk: "ZGCBt"
			})), o.a.createElement("img", {
				className: T.a.goldPackage,
				src: e.purchasePackage.images.purchaseSuccess["3x"].url
			}), o.a.createElement("button", {
				className: T.a.closeButton,
				onClick: e.onCloseClick
			}, o.a.createElement(B.b, {
				className: T.a.closeIcon,
				"data-redditstyle": !0
			})));
			var D = e => {
					const t = [];
					if (e.purchasePackage && t.push(r.fbt._("{coinCount} Coins will automatically be spent on this {awardName} Award.", [r.fbt._param("coinCount", e.award.coinPrice.toLocaleString()), r.fbt._param("awardName", e.award.name)], {
							hk: "1JRQG2"
						})), e.award.pennyDonate && t.push(r.fbt._("${dollarsDonate} will be donated.", [r.fbt._param("dollarsDonate", (e.award.pennyDonate / 100).toLocaleString())], {
							hk: "QgGWi"
						})), e.award.giverCoinReward) {
						t.push(r.fbt._("As a thank you, you will receive {giverCoinReward} Coins.", [r.fbt._param("giverCoinReward", e.award.giverCoinReward.toLocaleString())], {
							hk: "1TsLW1"
						}));
						const a = e.coinBalance + (e.purchasePackage ? e.purchasePackage.coins : 0) + e.award.giverCoinReward - (e.award.pennyPrice ? 0 : e.award.coinPrice);
						a > 0 && a !== e.coinBalance && r.fbt._("You’ll have {remainingCoins} Coins remaining.", [r.fbt._param("remainingCoins", a.toLocaleString())], {
							hk: "4rGJC0"
						})
					}
					return o.a.createElement("div", {
						className: T.a.purchaseGildHeader
					}, o.a.createElement("div", {
						className: T.a.awardTitle
					}, r.fbt._("Give the {awardName} Award", [r.fbt._param("awardName", e.award.name)], {
						hk: "28iR3j"
					})), o.a.createElement("div", {
						className: T.a.awardTitleDescription
					}, t.join(" ")), o.a.createElement("img", {
						className: T.a.awardIcon,
						src: e.award.icon.url
					}), o.a.createElement("button", {
						className: T.a.closeButton,
						onClick: e.onCloseClick
					}, o.a.createElement(B.b, {
						className: Object(p.a)(T.a.closeIcon, T.a.awardPurchase),
						"data-redditstyle": !0
					})))
				},
				L = a("./src/reddit/hooks/useStripe.ts");
			t.a = e => {
				const t = Object(L.a)();
				return o.a.createElement(s.StripeProvider, {
					stripe: t
				}, o.a.createElement(s.Elements, null, o.a.createElement(o.a.Fragment, null, e.gildThingId ? o.a.createElement(D, {
					coinBalance: e.coinBalance,
					award: e.selectedAward,
					purchasePackage: e.purchasePackage,
					userName: e.userName,
					onCloseClick: e.onCloseModal
				}) : e.purchasePackage && o.a.createElement(R, {
					coinBalance: e.coinBalance,
					purchasePackage: e.purchasePackage,
					userName: e.userName,
					onCloseClick: e.onCloseModal
				}), o.a.createElement("div", {
					className: T.a.purchaseBody
				}, o.a.createElement(i.a, {
					className: T.a.selectPayment,
					gildThingId: e.gildThingId,
					nightmode: e.nightmode,
					selectedPayment: e.selectedPayment,
					onPaymentSelected: e.onPaymentSelected
				}), e.selectedPayment === c.Db && o.a.createElement(d.a, {
					nightmode: e.nightmode
				}), o.a.createElement("div", {
					className: T.a.checkoutFooter
				}, o.a.createElement("div", {
					className: T.a.purchaseTotal
				}, r.fbt._("Total: {totalAmount}", [r.fbt._param("totalAmount", "$" + ((e.purchasePackage ? e.purchasePackage.pennies : e.selectedAward.pennyPrice || 0) / 100).toLocaleString())], {
					hk: "3dx6W8"
				}))), e.selectedPayment === c.Eb && e.paypalErrorMessage && o.a.createElement("div", {
					className: T.a.errorMessage
				}, e.paypalErrorMessage), e.selectedPayment === c.Db && e.stripeErrorMessage && o.a.createElement("div", {
					className: T.a.errorMessage
				}, e.stripeErrorMessage), o.a.createElement("div", {
					className: T.a.agreementLink
				}, e.purchasePackage && (e => {
					if (!e.gildThingId || !e.purchasePackage) return null;
					return e.coinBalance + e.purchasePackage.coins - e.selectedAward.coinPrice > 0 ? o.a.createElement(o.a.Fragment, null, r.fbt._("The minimum Coins purchase is {coins} Coins.", [r.fbt._param("coins", e.purchasePackage.coins.toLocaleString())], {
						hk: "3J52WH"
					}), o.a.createElement("br", null)) : null
				})(e), Object(l.a)(r.fbt._("By purchasing Coins and Awards, you agree to the :agreement:.", null, {
					hk: "1eCqza"
				}), {
					":agreement:": o.a.createElement("a", {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.fbt._("Reddit User Agreement", null, {
						hk: "11z9fY"
					}))
				}))), o.a.createElement(S, {
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
				o = a("./node_modules/react-redux/es/index.js"),
				s = a("./node_modules/reselect/es/index.js"),
				c = a("./src/higherOrderComponents/asModal/index.tsx"),
				i = a("./src/reddit/constants/zIndex.ts"),
				d = a("./src/reddit/actions/gold/modals.ts"),
				l = a("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				p = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				u = a("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				m = a("./src/reddit/actions/toaster.ts"),
				b = a("./src/reddit/components/TrackingHelper/index.tsx"),
				g = a("./src/reddit/constants/colors.ts"),
				h = a("./src/reddit/helpers/correlationIdTracker.ts"),
				y = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				j = a("./src/reddit/models/Toast/index.ts"),
				O = a("./src/reddit/models/User/index.ts"),
				C = a("./src/reddit/selectors/gild.ts"),
				f = a("./src/reddit/selectors/gold/giveAwards.ts"),
				P = a("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				k = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				w = a("./src/reddit/selectors/platform.ts"),
				x = a("./src/reddit/selectors/user.ts"),
				_ = a("./src/lib/classNames/index.ts"),
				E = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				v = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				I = a("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				A = a.n(I);
			const {
				fbt: T
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var M = e => {
					const {
						award: t,
						onClickClose: a
					} = e;
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: A.a.purchaseGildHeader
					}, n.a.createElement("div", {
						className: A.a.awardTitle
					}, T._("Give the {award name} Award", [T._param("award name", t.name)], {
						hk: "1nWqWe"
					})), n.a.createElement("img", {
						className: A.a.awardIcon,
						src: t.icon.url
					}), n.a.createElement("button", {
						className: A.a.closeButton,
						onClick: a
					}, n.a.createElement(E.b, {
						className: Object(_.a)(A.a.closeIcon, A.a.awardPurchase),
						"data-redditstyle": !0
					}))), n.a.createElement("div", {
						className: Object(_.a)(A.a.purchaseBody, A.a.loaderContainer)
					}, n.a.createElement(v.a, {
						sizePx: 100
					})))
				},
				N = a("./src/reddit/components/CoinPurchaseModal/PaymentCompletePage.tsx"),
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
			const G = Object(s.c)({
					activePage: k.q,
					allowNavigationCallback: e => {
						const t = Object(w.a)(e);
						return null === t ? void 0 : t
					},
					coinBalance: x.d,
					coinPackages: P.d,
					correlationId: e => Object(k.r)(e) || Object(h.d)(h.a.GoldPayment, !1),
					dealCoinPackages: P.f,
					gildThingId: k.s,
					isIframed: C.g,
					nightmode: x.V,
					savedCardsPending: k.w,
					selectedAward: f.b,
					selectedPayment: k.c,
					stripeErrorMessage: k.j,
					stripeTokenPending: k.m,
					paypalErrorMessage: k.d,
					purchaseCatalogError: P.j,
					purchaseCatalogPending: P.k,
					purchasePackageId: k.t,
					recommendedPackages: P.m,
					userName: e => {
						const t = Object(x.j)(e);
						return `u/${Object(O.e)(t)}`
					}
				}),
				F = Object(o.b)(G, (e, t) => ({
					closeModal: () => {
						e(Object(l.a)()), e(Object(d.a)())
					},
					loadSavedCards: () => e(Object(p.loadSavedCards)()),
					onFailedToLoadCatalog: t => {
						const a = {
							kind: j.b.Error,
							text: t
						};
						return e(Object(m.f)(a))
					},
					onPaymentSelected: t => e(Object(p.selectPaymentMethod)(t)),
					requestPurchaseCatalog: t => e(Object(u.b)(t)),
					dispatchCompletePurchase: (t, a, r, n) => {
						e(r ? Object(l.i)(t, a, n) : Object(l.j)(t, a))
					}
				}), (e, t, a) => ({
					...e,
					...t,
					...a,
					onCompletePurchaseClick: (a, r) => t.dispatchCompletePurchase(a, r, !!e.gildThingId, e.isIframed)
				}));
			class R extends n.a.Component {
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
						requestPurchaseCatalog: o
					} = this.props;
					t.length || n || o(a), r()
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
						gildThingId: o,
						nightmode: s,
						onCompletePurchaseClick: c,
						onFailedToLoadCatalog: i,
						onPaymentSelected: d,
						onTryCloseModal: l,
						paypalErrorMessage: p,
						purchaseCatalogError: u,
						purchaseCatalogPending: m,
						purchasePackageId: b,
						recommendedPackages: g,
						savedCardsPending: h,
						selectedAward: y,
						selectedPayment: j,
						stripeErrorMessage: O,
						stripeTokenPending: C,
						userName: f
					} = this.props;
					if (u) return i(u), l(), null;
					const P = !!o,
						k = [...a, ...r, ...g].filter(e => e.mobileId === b)[0];
					return "paymentCompleted" === e ? n.a.createElement("div", null, n.a.createElement(N.a, {
						isGild: P,
						onCloseClick: l,
						userName: f
					})) : m || !k ? n.a.createElement("div", null, n.a.createElement(M, {
						award: y,
						onClickClose: l
					})) : n.a.createElement("div", null, "selectPayment" === e && n.a.createElement(S.a, {
						coinBalance: t,
						gildThingId: o,
						nightmode: s,
						onCloseModal: l,
						onCompletePurchaseClick: c,
						onPaymentSelected: d,
						paypalErrorMessage: p,
						purchasePackage: k,
						savedCardsPending: h,
						selectedAward: y,
						selectedPayment: j,
						stripeErrorMessage: O,
						stripeTokenPending: C,
						userName: f
					}))
				}
			}
			const D = Object(c.a)(R);
			t.default = F(Object(b.c)(class extends n.a.PureComponent {
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
						className: A.a.coinPurchaseModal,
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
				o = a("./src/reddit/controls/Button/index.tsx"),
				s = a("./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less"),
				c = a.n(s);
			const {
				fbt: i
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => n.a.createElement("div", {
				className: c.a.purchaseFooter
			}, n.a.createElement(o.i, {
				className: c.a.purchaseButton,
				"data-redditstyle": !0,
				onClick: e.onCloseClick
			}, i._("Done", null, {
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
				o = a("./src/lib/classNames/index.ts"),
				s = a("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = a.n(s);
			t.a = ({
				center: e,
				className: t,
				sizePx: a = 10
			}) => n.a.createElement("div", {
				className: Object(o.a)(c.a.loadingIcon, t, {
					[c.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${a}px`
				}
			})
		},
		"./src/reddit/endpoints/gold/paypalPurchases.ts": function(e, t, a) {
			"use strict";
			a.d(t, "f", (function() {
				return d
			})), a.d(t, "a", (function() {
				return l
			})), a.d(t, "b", (function() {
				return p
			})), a.d(t, "c", (function() {
				return u
			})), a.d(t, "d", (function() {
				return m
			})), a.d(t, "e", (function() {
				return b
			}));
			var r = a("./src/lib/constants/index.ts"),
				n = a("./src/lib/makeApiRequest/index.ts"),
				o = a("./src/lib/omitHeaders/index.ts"),
				s = a("./src/reddit/constants/headers.ts"),
				c = a("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
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
					p = Object(c.a)(l);
				return Object(n.a)(Object(o.a)(t, [s.a]), {
					method: r.hb.POST,
					endpoint: p,
					data: d
				}).then(i.c)
			}, l = async ({
				context: e,
				coins: t,
				pennies: a,
				correlationId: c
			}) => {
				const d = {
					coins: t,
					pennies: a,
					correlation_id: c
				};
				return Object(n.a)(Object(o.a)(e, [s.a]), {
					method: r.hb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(i.c)
			}, p = async ({
				context: e,
				awardId: t,
				pennies: a,
				thingId: c,
				correlationId: d
			}) => {
				const l = {
					award_id: t,
					correlation_id: d,
					pennies: a,
					thing_id: c
				};
				return Object(n.a)(Object(o.a)(e, [s.a]), {
					method: r.hb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(i.c)
			}, u = async ({
				context: e,
				offerContext: t,
				orderId: a,
				coins: c,
				pennies: d,
				correlationId: l
			}) => {
				const p = {
					offer_context: t,
					order_id: a,
					coins: c,
					pennies: d,
					correlation_id: l
				};
				return Object(n.a)(Object(o.a)(e, [s.a]), {
					method: r.hb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: p
				}).then(i.c)
			}, m = async ({
				awardId: e,
				context: t,
				coins: a,
				correlationId: c,
				isAnonymous: d,
				message: l,
				offerContext: p,
				orderId: u,
				pennies: m,
				thingId: b
			}) => {
				const g = {
					award_id: e,
					coins: a,
					correlation_id: c,
					is_anonymous: d,
					message: l,
					offer_context: p,
					order_id: u,
					pennies: m,
					thing_id: b
				};
				return Object(n.a)(Object(o.a)(t, [s.a]), {
					method: r.hb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: g
				}).then(i.c)
			}, b = async ({
				awardId: e,
				context: t,
				correlationId: a,
				isAnonymous: c,
				message: d,
				orderId: l,
				thingId: p
			}) => {
				const u = {
					award_id: e,
					correlation_id: a,
					is_anonymous: c,
					message: d,
					order_id: l,
					thing_id: p
				};
				return Object(n.a)(Object(o.a)(t, [s.a]), {
					method: r.hb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: u
				}).then(i.c)
			}
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			}));
			var r = a("./node_modules/react/index.js"),
				n = a.n(r);

			function o(e, t) {
				const a = e.toString().split(":");
				return a.length % 2 == 0 ? e : a.reduce((e, a, r) => (r % 2 == 0 ? e.push(a) : "" === a ? e.push(":") : `:${a}:` in t ? e.push(t[`:${a}:`]) : e.push(`:${a}:`), e), []).map((e, t) => n.a.createElement(n.a.Fragment, {
					key: t
				}, e))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CoinPurchaseModal.aebda952d35885a99d79.js.map