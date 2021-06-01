// https://www.redditstatic.com/desktop2x/CoinPurchaseModal.ea2d4b5c03a07e851854.js
// Retrieved at 6/1/2021, 3:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CoinPurchaseModal"], {
		"./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return x
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "b", (function() {
				return I
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "j", (function() {
				return T
			})), r.d(t, "i", (function() {
				return M
			})), r.d(t, "f", (function() {
				return S
			})), r.d(t, "g", (function() {
				return G
			})), r.d(t, "h", (function() {
				return N
			}));
			var a = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/formatApiError/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/sentry/index.ts"),
				s = r("./src/reddit/constants/modals.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				p = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				b = r("./src/reddit/endpoints/gold/purchase.ts"),
				g = r("./src/reddit/helpers/correlationIdTracker.ts"),
				m = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				h = r("./src/reddit/models/Gold/Award.ts"),
				O = r("./src/reddit/models/Gold/ProductOffer.ts"),
				j = r("./src/reddit/models/Toast/index.ts"),
				y = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				f = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				w = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const C = Object(o.a)(w.q),
				P = Object(o.a)(w.c),
				x = e => async (t, r) => {
					t(C(e)), t(Object(l.h)(s.a.ECON_COIN_PURCHASE))
				}, _ = () => async (e, t) => {
					e(P()), e(Object(l.g)(s.a.ECON_COIN_PURCHASE))
				}, k = Object(o.a)(w.u), v = ({
					correlationId: e,
					packageId: t
				}) => async (r, a) => {
					const n = a();
					Object(y.e)(n, t) ? (r(k({
						correlationId: e,
						packageId: t
					})), r(Object(l.i)(s.a.GOLD_TARGETED_OFFER_MODAL))) : c.c.captureMessage(`Tried to show targeted offer, but could not find package id: ${t}`)
				}, E = Object(o.a)(w.p), I = ({
					correlationId: e,
					packageId: t
				}) => async (r, a) => {
					Object(y.c)(a(), t) ? (r(E({
						correlationId: e,
						packageId: t
					})), r(Object(l.i)(s.a.ECON_COIN_PACKAGE_OFFER))) : c.c.captureMessage(`Tried to show coin package offer, but could not find package id: ${t}`)
				}, A = (e, t, r) => async (n, o) => {
					await n(Object(i.c)(e, r));
					const c = o(),
						s = Object(y.m)(c);
					if (0 !== s.length) n(x({
						correlationId: r,
						packageId: s[0].mobileId,
						thingId: t
					}));
					else {
						const e = Object(y.j)(c),
							t = a.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						n(Object(p.f)({
							kind: j.b.Error,
							duration: p.a,
							text: e || t
						}))
					}
				}, T = (e, t) => async (r, o, {
					apiContext: c
				}) => {
					const s = o(),
						{
							coins: i,
							pennies: l
						} = t,
						p = Object(f.r)(s) || Object(g.d)(g.a.GoldPayment, !1);
					let u, m;
					r(Object(d.stripeTokenPending)());
					const h = Object(f.y)(s);
					if (h || (u = await r(Object(d.validateAndCreateStripeToken)(e)), m = Object(f.v)(s), u)) try {
						const e = await Object(b.e)({
							coins: i,
							context: c(),
							correlationId: p,
							offerContext: Object(O.d)(t, !1),
							pennies: l,
							rememberCard: m,
							savedCardId: h || void 0,
							token: u
						});
						if (e.error) {
							const t = Object(n.a)(e.error, e.status);
							return void r(Object(d.stripeApiError)(t))
						}
						return r(Object(d.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(g.b)(g.a.GoldPayment)
					} catch (j) {
						const e = Object(n.a)(j);
						r(Object(d.stripeApiError)(e))
					} else {
						const e = a.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						r(Object(d.stripeApiError)(e))
					}
				}, M = (e, t, o) => async (c, s, {
					apiContext: i
				}) => {
					const l = s(),
						{
							coins: p,
							pennies: u
						} = t,
						j = Object(f.r)(l) || Object(g.d)(g.a.GoldPayment, !1);
					let y, w;
					c(Object(d.stripeTokenPending)());
					const C = Object(f.y)(l);
					if (C || (y = await c(Object(d.validateAndCreateStripeToken)(e)), w = Object(f.v)(l), y)) try {
						const {
							gildModalThingId: e,
							isAnonymous: s,
							message: f,
							selectedAward: P
						} = l.gild;
						if (!e || !P.id) {
							const e = a.fbt._("Gilding unknown thing", null, {
								hk: "2Jiujp"
							});
							return void c(Object(d.stripeApiError)(e))
						}
						const x = P.id,
							k = {
								gildType: x,
								isAnonymous: s,
								message: f
							},
							v = await Object(b.d)({
								coins: p,
								context: i(),
								correlationId: j,
								gildParams: k,
								isOldReddit: o,
								offerContext: Object(O.d)(t, !0),
								pennies: u,
								rememberCard: w,
								savedCardId: C || void 0,
								thingId: e,
								token: y
							});
						if (v.error) {
							const e = Object(n.a)(v.error, v.status);
							return void c(Object(d.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							c(_()), c(Object(d.paymentCompleted)({
								confirmed: !1
							}));
							const {
								awarder_karma_received: a,
								all_awardings: n,
								coins: o,
								treatment_tags: s
							} = v.body;
							return c(t({
								awardKarmaReceived: a || 0,
								awardId: x,
								awardings: n && n.length ? Object(m.a)(n).map(e => ({
									award: Object(h.h)(e),
									total: e.count
								})) : [],
								coins: o,
								id: e,
								treatmentTags: s
							})), void Object(g.b)(g.a.GoldPayment)
						}
					} catch (P) {
						const e = Object(n.a)(P);
						c(Object(d.stripeApiError)(e))
					} else {
						const e = a.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						c(Object(d.stripeApiError)(e))
					}
				}, S = e => async (t, r, {
					apiContext: a
				}) => {
					const o = Object(g.c)(g.a.GoldPayment),
						{
							coins: s,
							pennies: i
						} = e;
					try {
						const e = await Object(u.a)({
							context: a(),
							coins: s,
							pennies: i,
							correlationId: o
						});
						if (e.error) {
							const r = Object(n.a)(e.error);
							return void t(Object(d.paypalApiError)(r))
						} {
							const {
								order_id: t
							} = e.body;
							return t
						}
					} catch (l) {
						c.c.captureException(l);
						const e = Object(n.a)(l);
						t(Object(d.paypalApiError)(e))
					}
				}, G = (e, t) => async (r, a, {
					apiContext: o
				}) => {
					const s = a(),
						i = Object(f.r)(s) || Object(g.d)(g.a.GoldPayment, !1),
						{
							coins: l,
							pennies: p
						} = t;
					try {
						const a = await Object(u.c)({
							context: o(),
							offerContext: Object(O.d)(t, !1),
							orderId: e,
							coins: l,
							pennies: p,
							correlationId: i
						});
						if (a.error) {
							const e = Object(n.a)(a.error);
							return void r(Object(d.paypalApiError)(e))
						} {
							const {
								coins: e
							} = a.body;
							r(Object(d.paymentCompleted)({
								coins: e,
								confirmed: !0
							})), Object(g.b)(g.a.GoldPayment)
						}
					} catch (b) {
						c.c.captureException(b);
						const e = Object(n.a)(b);
						r(Object(d.paypalApiError)(e))
					}
				}, N = (e, t) => async (o, s, {
					apiContext: i
				}) => {
					const l = s(),
						p = Object(f.r)(l) || Object(g.d)(g.a.GoldPayment, !1),
						{
							coins: b,
							pennies: j
						} = t;
					try {
						const {
							gildModalThingId: c,
							isAnonymous: s,
							message: y,
							selectedAward: f
						} = l.gild;
						if (!c || !f) return void o(Object(d.paypalApiError)(a.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const w = f.id,
							C = await Object(u.d)({
								context: i(),
								offerContext: Object(O.d)(t, !0),
								orderId: e,
								coins: b,
								pennies: j,
								thingId: c,
								awardId: w,
								message: y || "",
								isAnonymous: s,
								correlationId: p
							});
						if (C.error) {
							const e = Object(n.a)(C.error);
							o(Object(d.paypalApiError)(e))
						} else {
							o(_());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: a,
								subreddit_coins: n,
								treatment_tags: s
							} = C.body;
							o(Object(d.paymentCompleted)({
								coins: a,
								confirmed: !0
							}));
							const {
								gildSuccessful: i
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							o(i({
								awardId: w,
								awardKarmaReceived: t || 0,
								awardings: Object(m.a)(e).map(e => ({
									award: Object(h.h)(e),
									total: e.count
								})),
								coins: a,
								id: c,
								subredditCoins: n,
								treatmentTags: s
							})), Object(g.b)(g.a.GoldPayment)
						}
					} catch (y) {
						c.c.captureException(y);
						const e = Object(n.a)(y);
						o(Object(d.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return i
			})), r.d(t, "paymentCompleted", (function() {
				return l
			})), r.d(t, "cardNameInput", (function() {
				return p
			})), r.d(t, "postalCodeInput", (function() {
				return u
			})), r.d(t, "cardNameEmpty", (function() {
				return b
			})), r.d(t, "cardElementChange", (function() {
				return g
			})), r.d(t, "stripeTokenPending", (function() {
				return m
			})), r.d(t, "stripeTokenError", (function() {
				return h
			})), r.d(t, "stripeApiError", (function() {
				return O
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return j
			})), r.d(t, "paypalApiError", (function() {
				return y
			})), r.d(t, "toggleRememberCard", (function() {
				return f
			})), r.d(t, "selectSavedCard", (function() {
				return w
			})), r.d(t, "_deleteSavedCard", (function() {
				return C
			})), r.d(t, "deleteSavedCard", (function() {
				return P
			})), r.d(t, "savedCardsPending", (function() {
				return x
			})), r.d(t, "savedCardsSuccess", (function() {
				return _
			})), r.d(t, "loadSavedCards", (function() {
				return k
			}));
			var a = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/sentry/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/endpoints/gold/purchase.ts"),
				s = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				d = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = Object(o.a)(s.B),
				l = Object(o.a)(s.w),
				p = Object(o.a)(s.b),
				u = Object(o.a)(s.y),
				b = Object(o.a)(s.a),
				g = Object(o.a)(s.E),
				m = Object(o.a)(s.G),
				h = Object(o.a)(s.F),
				O = Object(o.a)(s.D),
				j = e => async (t, r) => {
					const n = r(),
						o = Object(d.h)(n),
						c = Object(d.l)(n),
						{
							token: s,
							error: i
						} = await e.createToken({
							name: o,
							address_zip: c
						});
					if (o.trim()) {
						if (!i && s) return s;
						t(h(i || void 0))
					} else {
						const e = a.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(b({
							message: e
						}))
					}
				}, y = Object(o.a)(s.x), f = Object(o.a)(s.H), w = Object(o.a)(s.C), C = Object(o.a)(s.g), P = e => async (t, r, {
					apiContext: a
				}) => {
					t(C(e));
					try {
						const t = await Object(c.a)(a(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (o) {
						n.c.captureException(o)
					}
				}, x = Object(o.a)(s.z), _ = Object(o.a)(s.A), k = () => async (e, t, {
					apiContext: r
				}) => {
					e(x());
					try {
						const t = await Object(c.b)(r());
						if (t.error) throw new Error(t.error.type);
						const a = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(_(a)), a[0] && e(w(a[0].cardId))
					} catch (a) {
						n.c.captureException(a), e(_([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			})), r.d(t, "b", (function() {
				return j
			})), r.d(t, "e", (function() {
				return y
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "c", (function() {
				return w
			}));
			var a = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/formatApiError/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/sentry/index.ts"),
				s = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				d = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				i = r("./src/reddit/endpoints/gold/purchase.ts"),
				l = r("./src/reddit/helpers/correlationIdTracker.ts"),
				p = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				u = r("./src/reddit/models/Gold/Award.ts"),
				b = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				g = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const m = Object(o.a)(g.r),
				h = Object(o.a)(g.d),
				O = Object(o.a)(g.s),
				j = (e, t, r) => async e => {
					e(O({
						thingId: t
					})), e(m({
						correlationId: r
					}))
				}, y = (e, t) => async (o, c, {
					apiContext: d
				}) => {
					const g = c(),
						m = Object(l.c)(l.a.GoldPayment);
					let O, j;
					o(Object(s.stripeTokenPending)());
					const y = Object(b.y)(g);
					if (y || (O = await o(Object(s.validateAndCreateStripeToken)(e)), j = Object(b.v)(g), O)) try {
						const {
							gildModalThingId: e,
							isAnonymous: c,
							message: l,
							selectedAward: b
						} = g.gild;
						if (!e || !b.id) return void o(Object(s.stripeApiError)(a.fbt._("Gilding unknown thing", null, {
							hk: "Qd6mo"
						})));
						const f = b.id,
							w = b.pennyPrice;
						if (!w) return void o(Object(s.stripeApiError)(a.fbt._("Trying to purchase award with zero price", null, {
							hk: "3FhAjz"
						})));
						const C = {
								gildType: f,
								isAnonymous: c,
								message: l
							},
							P = await Object(i.f)({
								context: d(),
								correlationId: m,
								gildParams: C,
								isOldReddit: t,
								pennies: w,
								rememberCard: j,
								savedCardId: y || void 0,
								thingId: e,
								token: O
							});
						if (P.error) {
							const e = Object(n.a)(P.error, P.status);
							return void o(Object(s.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							o(h()), o(Object(s.paymentCompleted)({
								confirmed: !1
							}));
							const {
								all_awardings: a,
								awarder_karma_received: n,
								coins: c,
								treatment_tags: d
							} = P.body;
							return void o(t({
								awardKarmaReceived: n || 0,
								awardId: f,
								awardings: a && a.length ? Object(p.a)(a).map(e => ({
									award: Object(u.h)(e),
									total: e.count
								})) : [],
								coins: c,
								id: e,
								treatmentTags: d
							}))
						}
					} catch (f) {
						const e = Object(n.a)(f);
						o(Object(s.stripeApiError)(e))
					} else o(Object(s.stripeApiError)(a.fbt._("Looks like something went wrong validating your credit card.", null, {
						hk: "20FruV"
					})))
				}, f = (e, t, r) => async (a, o, {
					apiContext: i
				}) => {
					const p = Object(l.c)(l.a.GoldPayment);
					try {
						const o = await Object(d.b)({
							context: i(),
							awardId: e,
							pennies: t,
							thingId: r,
							correlationId: p
						});
						if (o.error) {
							const e = Object(n.a)(o.error);
							return void a(Object(s.paypalApiError)(e))
						} {
							const {
								order_id: e
							} = o.body;
							return e
						}
					} catch (u) {
						c.c.captureException(u);
						const e = Object(n.a)(u);
						a(Object(s.paypalApiError)(e))
					}
				}, w = e => async (t, o, {
					apiContext: i
				}) => {
					const b = o(),
						g = Object(l.c)(l.a.GoldPayment);
					try {
						const {
							gildModalThingId: o,
							isAnonymous: c,
							message: l,
							selectedAward: m
						} = b.gild;
						if (!o || !m) return void t(Object(s.paypalApiError)(a.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const O = m.id,
							j = await Object(d.e)({
								awardId: O,
								context: i(),
								orderId: e,
								thingId: o,
								message: l || "",
								isAnonymous: c,
								correlationId: g
							});
						if (j.error) {
							const e = Object(n.a)(j.error);
							t(Object(s.paypalApiError)(e))
						} else {
							t(h());
							const {
								all_awardings: e,
								awarder_karma_received: a,
								coins: n,
								subreddit_coins: c,
								treatment_tags: d
							} = j.body;
							t(Object(s.paymentCompleted)({
								coins: n,
								confirmed: !0
							}));
							const {
								gildSuccessful: i
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							t(i({
								awardKarmaReceived: a || 0,
								awardId: O,
								awardings: Object(p.a)(e).map(e => ({
									award: Object(u.h)(e),
									total: e.count
								})),
								coins: n,
								id: o,
								subredditCoins: c,
								treatmentTags: d
							}))
						}
					} catch (m) {
						c.c.captureException(m);
						const e = Object(n.a)(m);
						t(Object(s.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return h
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "a", (function() {
				return C
			}));
			var a = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/env/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/sentry/index.ts"),
				s = r("./src/reddit/endpoints/gold/productCatalog.ts"),
				d = r("./src/reddit/selectors/user.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/actions/post.ts"),
				u = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const b = Object(o.a)(u.j),
				g = Object(o.a)(u.k),
				m = Object(o.a)(u.i),
				h = e => async (t, r, {
					apiContext: o
				}) => {
					t(b());
					const i = r(),
						l = Object(d.K)(i);
					try {
						const r = !l,
							a = await Object(s.b)({
								context: o(),
								correlationId: e,
								shouldUseCurrentOrigin: r
							});
						if (!a.ok) throw new Error(a.error && a.error.type || "Unknown error");
						const n = a.body;
						t(g(n))
					} catch (p) {
						Object(n.b)() || console.error(p), c.c.captureException(p);
						const e = a.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(m(e))
					}
				}, O = Object(o.a)(u.m), j = Object(o.a)(u.n), y = Object(o.a)(u.l), f = (e, t) => async (r, o, {
					apiContext: d
				}) => {
					r(O());
					try {
						const a = await Object(s.c)({
							awardId: e,
							context: d(),
							correlationId: t
						});
						if (!a.ok) throw new Error(a.error && a.error.type || "Unknown error");
						const n = a.body;
						if (!n.coinPackages || !n.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						r(j(n))
					} catch (i) {
						Object(n.b)() || console.error(i), c.c.captureException(i);
						const e = a.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						r(y(e))
					}
				}, w = Object(o.a)(u.h), C = () => async (e, t, {
					gqlContext: r
				}) => {
					var o, d;
					try {
						const t = await Object(s.a)(r());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (o = r.errors) || void 0 === o ? void 0 : o.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (d = r.awards) || void 0 === d ? void 0 : d.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(w({
								awards: r.awards
							})), e(Object(p.z)())
						}
					} catch (u) {
						Object(n.b)() || console.error(u), e(Object(i.f)({
							kind: l.b.Error,
							text: a.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), c.c.captureException(u)
					}
				}
		},
		"./src/reddit/components/CoinPurchaseModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				s = r("./src/higherOrderComponents/asModal/index.tsx"),
				d = r("./src/reddit/constants/zIndex.ts"),
				i = r("./src/reddit/actions/gold/modals.ts"),
				l = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				p = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				u = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				b = r("./src/reddit/actions/toaster.ts"),
				g = r("./src/reddit/components/TrackingHelper/index.tsx"),
				m = r("./src/reddit/constants/colors.ts"),
				h = r("./src/reddit/helpers/correlationIdTracker.ts"),
				O = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				j = r("./src/reddit/models/Toast/index.ts"),
				y = r("./src/reddit/models/User/index.ts"),
				f = r("./src/reddit/selectors/gild.ts"),
				w = r("./src/reddit/selectors/gold/giveAwards.ts"),
				C = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				P = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				x = r("./src/reddit/selectors/platform.ts"),
				_ = r("./src/reddit/selectors/user.ts"),
				k = r("./src/lib/classNames/index.ts"),
				v = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				E = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				I = r("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				A = r.n(I);
			const {
				fbt: T
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var M = e => {
					const {
						award: t,
						onClickClose: r
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
						onClick: r
					}, n.a.createElement(v.b, {
						className: Object(k.a)(A.a.closeIcon, A.a.awardPurchase),
						"data-redditstyle": !0
					}))), n.a.createElement("div", {
						className: Object(k.a)(A.a.purchaseBody, A.a.loaderContainer)
					}, n.a.createElement(E.a, {
						sizePx: 100
					})))
				},
				S = r("./src/reddit/components/CoinPurchaseModal/PaymentCompletePage.tsx"),
				G = r("./src/reddit/components/CoinPurchaseModal/SelectPaymentPage.tsx");

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
					}
					return e
				}).apply(this, arguments)
			}
			const F = Object(c.c)({
					activePage: P.q,
					allowNavigationCallback: e => {
						const t = Object(x.a)(e);
						return null === t ? void 0 : t
					},
					coinBalance: _.d,
					coinPackages: C.d,
					correlationId: e => Object(P.r)(e) || Object(h.d)(h.a.GoldPayment, !1),
					dealCoinPackages: C.f,
					gildThingId: P.s,
					isIframed: f.g,
					nightmode: _.W,
					savedCardsPending: P.w,
					selectedAward: w.b,
					selectedPayment: P.c,
					stripeErrorMessage: P.j,
					stripeTokenPending: P.m,
					paypalErrorMessage: P.d,
					purchaseCatalogError: C.j,
					purchaseCatalogPending: C.k,
					purchasePackageId: P.t,
					recommendedPackages: C.m,
					userName: e => {
						const t = Object(_.j)(e);
						return `u/${Object(y.e)(t)}`
					}
				}),
				L = Object(o.b)(F, (e, t) => ({
					closeModal: () => {
						e(Object(l.a)()), e(Object(i.a)())
					},
					loadSavedCards: () => e(Object(p.loadSavedCards)()),
					onFailedToLoadCatalog: t => {
						const r = {
							kind: j.b.Error,
							text: t
						};
						return e(Object(b.f)(r))
					},
					onPaymentSelected: t => e(Object(p.selectPaymentMethod)(t)),
					requestPurchaseCatalog: t => e(Object(u.b)(t)),
					dispatchCompletePurchase: (t, r, a, n) => {
						e(a ? Object(l.i)(t, r, n) : Object(l.j)(t, r))
					}
				}), (e, t, r) => ({
					...e,
					...t,
					...r,
					onCompletePurchaseClick: (r, a) => t.dispatchCompletePurchase(r, a, !!e.gildThingId, e.isIframed)
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
						correlationId: r,
						loadSavedCards: a,
						purchaseCatalogPending: n,
						requestPurchaseCatalog: o
					} = this.props;
					t.length || n || o(r), a()
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
					Object(h.d)(h.a.GoldPayment, !1), t(Object(O.i)(e))
				}
				componentDidUpdate(e) {
					if (this.props.stripeErrorMessage && !e.stripeErrorMessage) {
						const {
							gildThingId: e,
							sendEvent: t
						} = this.props;
						t(Object(O.g)(e))
					}
				}
				render() {
					const {
						activePage: e,
						coinBalance: t,
						coinPackages: r,
						dealCoinPackages: a,
						gildThingId: o,
						nightmode: c,
						onCompletePurchaseClick: s,
						onFailedToLoadCatalog: d,
						onPaymentSelected: i,
						onTryCloseModal: l,
						paypalErrorMessage: p,
						purchaseCatalogError: u,
						purchaseCatalogPending: b,
						purchasePackageId: g,
						recommendedPackages: m,
						savedCardsPending: h,
						selectedAward: O,
						selectedPayment: j,
						stripe: y,
						stripeErrorMessage: f,
						stripeTokenPending: w,
						userName: C
					} = this.props;
					if (u) return d(u), l(), null;
					const P = !!o,
						x = [...r, ...a, ...m].filter(e => e.mobileId === g)[0];
					return "paymentCompleted" === e ? n.a.createElement("div", null, n.a.createElement(S.a, {
						isGild: P,
						onCloseClick: l,
						userName: C
					})) : b || !x ? n.a.createElement("div", null, n.a.createElement(M, {
						award: O,
						onClickClose: l
					})) : n.a.createElement("div", null, "selectPayment" === e && n.a.createElement(G.a, {
						coinBalance: t,
						gildThingId: o,
						nightmode: c,
						onCloseModal: l,
						onCompletePurchaseClick: s,
						onPaymentSelected: i,
						paypalErrorMessage: p,
						purchasePackage: x,
						savedCardsPending: h,
						selectedAward: O,
						selectedPayment: j,
						stripe: y,
						stripeErrorMessage: f,
						stripeTokenPending: w,
						userName: C
					}))
				}
			}
			const U = Object(s.a)(R);
			t.default = L(Object(g.c)(class extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.onTryCloseModal = () => {
						const {
							gildThingId: e,
							sendEvent: t
						} = this.props;
						t(Object(O.b)(e)), this.onCloseModal()
					}, this.onCloseModal = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}
				}
				render() {
					const e = {
						backgroundColor: m.b.overlayReportFlow,
						...this.props.isIframed ? {
							zIndex: d.a,
							paddingTop: 12,
							paddingBottom: 12
						} : {}
					};
					return n.a.createElement(U, N({}, this.props, {
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
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				s = r.n(c);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => n.a.createElement("div", {
				className: Object(o.a)(s.a.loadingIcon, t, {
					[s.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				}
			})
		},
		"./src/reddit/endpoints/gold/paypalPurchases.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return i
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "e", (function() {
				return g
			}));
			var a = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				s = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = r("./src/reddit/endpoints/gold/purchase.ts");
			const i = async ({
				buttonId: e,
				context: t,
				correlationId: r
			}) => {
				const i = {
						button_id: e,
						correlation_id: r
					},
					l = `${t.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					p = Object(s.a)(l);
				return Object(n.a)(Object(o.a)(t, [c.a]), {
					method: a.fb.POST,
					endpoint: p,
					data: i
				}).then(d.c)
			}, l = async ({
				context: e,
				coins: t,
				pennies: r,
				correlationId: s
			}) => {
				const i = {
					coins: t,
					pennies: r,
					correlation_id: s
				};
				return Object(n.a)(Object(o.a)(e, [c.a]), {
					method: a.fb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: i
				}).then(d.c)
			}, p = async ({
				context: e,
				awardId: t,
				pennies: r,
				thingId: s,
				correlationId: i
			}) => {
				const l = {
					award_id: t,
					correlation_id: i,
					pennies: r,
					thing_id: s
				};
				return Object(n.a)(Object(o.a)(e, [c.a]), {
					method: a.fb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(d.c)
			}, u = async ({
				context: e,
				offerContext: t,
				orderId: r,
				coins: s,
				pennies: i,
				correlationId: l
			}) => {
				const p = {
					offer_context: t,
					order_id: r,
					coins: s,
					pennies: i,
					correlation_id: l
				};
				return Object(n.a)(Object(o.a)(e, [c.a]), {
					method: a.fb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: p
				}).then(d.c)
			}, b = async ({
				awardId: e,
				context: t,
				coins: r,
				correlationId: s,
				isAnonymous: i,
				message: l,
				offerContext: p,
				orderId: u,
				pennies: b,
				thingId: g
			}) => {
				const m = {
					award_id: e,
					coins: r,
					correlation_id: s,
					is_anonymous: i,
					message: l,
					offer_context: p,
					order_id: u,
					pennies: b,
					thing_id: g
				};
				return Object(n.a)(Object(o.a)(t, [c.a]), {
					method: a.fb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: m
				}).then(d.c)
			}, g = async ({
				awardId: e,
				context: t,
				correlationId: r,
				isAnonymous: s,
				message: i,
				orderId: l,
				thingId: p
			}) => {
				const u = {
					award_id: e,
					correlation_id: r,
					is_anonymous: s,
					message: i,
					order_id: l,
					thing_id: p
				};
				return Object(n.a)(Object(o.a)(t, [c.a]), {
					method: a.fb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: u
				}).then(d.c)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CoinPurchaseModal.ea2d4b5c03a07e851854.js.map