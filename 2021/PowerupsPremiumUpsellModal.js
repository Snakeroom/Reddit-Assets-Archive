// https://www.redditstatic.com/desktop2x/PowerupsPremiumUpsellModal.abe179b597f903ee30c7.js
// Retrieved at 10/12/2021, 7:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PowerupsPremiumUpsellModal"], {
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/lib/currency/cleanNumber/index.ts");

			function o(e, t) {
				const r = Object(n.a)(e),
					o = parseInt(r) / 100;
				return Math.floor(o) !== o || t ? o.toFixed(2) : String(o)
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
				return s
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "f", (function() {
				return a
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "e", (function() {
				return u
			}));
			var n, o = r("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(n || (n = {}));
			const s = "USD",
				c = "ETH",
				i = "COINS",
				a = [c, "BTC"],
				d = [i, "SUBREDDIT_POINTS", "GAME_TOKENS"],
				u = {
					COINS: () => o.fbt._("Coins", null, {
						hk: "1T2Y4p"
					}),
					SUBREDDIT_POINTS: () => o.fbt._("Subreddit points", null, {
						hk: "1ytOO3"
					}),
					GAME_TOKENS: () => o.fbt._("Game tokens", null, {
						hk: "16BUrU"
					})
				}
		},
		"./src/lib/localizeCurrency/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return u
			}));
			var n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				o = r("./src/lib/currency/centsToDollars/index.ts"),
				s = r("./src/lib/currency/currencies.ts"),
				c = r("./src/lib/prettyPrintNumber/index.ts"),
				i = r("./src/reddit/helpers/governance/tokens.ts"),
				a = r("./src/reddit/constants/intlSupport.ts");
			const d = (e, {
					locale: t = n.DEFAULT_LOCALE,
					pretty: r,
					formatOptions: o
				} = {}) => {
					const s = Number(e);
					return Object(a.c)() ? r ? Object(c.b)(s) : new Intl.NumberFormat(t, o).format(s) : l(s, r, t)
				},
				u = (e, t = {}) => {
					const {
						locale: r = n.DEFAULT_LOCALE,
						pretty: c,
						formatOptions: d,
						displayConversion: u,
						forceDecimals: b,
						currency: f = t.currency || (t.type ? p(t.type) : s.c),
						type: y = t.type || (t.currency ? m(t.currency) : s.b.Real)
					} = t, O = Number(e), g = String(e);
					switch (y) {
						case s.b.Reddit: {
							const e = s.e[f],
								t = e ? e() : f;
							return Object(a.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(O) + " " + t : l(O, c, r, t)
						}
						case s.b.Crypto: {
							if (c) {
								return Object(i.c)(g, u) + " " + f
							}
							const e = Number(Object(i.b)(g, u));
							return Object(a.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...d
							}).format(e) : l(e, c, r, f)
						}
						case s.b.Real:
						default: {
							const e = Number(Object(o.a)(g, b));
							return Object(a.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								notation: c ? "compact" : "standard",
								...d
							}).format(e) : l(e, c, r, f)
						}
					}
				},
				l = (e, t, r, n) => {
					return (t ? Object(c.b)(e) : e.toLocaleString(r)) + (n ? " " + n : "")
				},
				m = e => s.g.includes(e.toUpperCase()) ? s.b.Reddit : s.f.includes(e.toUpperCase()) ? s.b.Crypto : s.b.Real,
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
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return E
			})), r.d(t, "j", (function() {
				return C
			})), r.d(t, "g", (function() {
				return I
			})), r.d(t, "f", (function() {
				return S
			})), r.d(t, "d", (function() {
				return N
			})), r.d(t, "c", (function() {
				return M
			})), r.d(t, "a", (function() {
				return G
			})), r.d(t, "h", (function() {
				return R
			})), r.d(t, "e", (function() {
				return F
			})), r.d(t, "i", (function() {
				return q
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/lodash/omit.js"),
				s = r.n(o),
				c = r("./node_modules/uuid/v4.js"),
				i = r.n(c),
				a = r("./src/config.ts"),
				d = r("./src/reddit/constants/modals.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/lib/addQueryParams/index.ts"),
				m = r("./src/lib/makeActionCreator/index.ts"),
				p = r("./src/lib/sentry/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				f = r("./src/reddit/actions/gold/constants.ts"),
				y = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				O = r("./src/reddit/selectors/gold/productOffers.ts"),
				g = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				j = r("./src/reddit/models/Gold/ProductOffer.ts"),
				P = r("./src/reddit/actions/gold/powerups.ts"),
				w = r("./src/reddit/actions/modal.ts"),
				v = r("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				k = r("./src/reddit/models/Payments/index.ts");
			const _ = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				x = e => e.map(e => e.message).join(" : "),
				E = (e, t, r) => async (o, s, {
					gqlContext: c
				}) => {
					const a = i()(),
						d = await Object(v.f)(c(), a, e, t, r);
					if (d.ok) {
						const e = d.body,
							{
								errors: t,
								order: r
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(x(t));
						if (r) return r.id
					}
					throw new Error((() => n.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, C = (e, t, r, o, s, c) => async (a, d, {
					gqlContext: u
				}) => {
					var l;
					const m = d(),
						b = () => a(Object(y.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						}))),
						f = s === j.c.Premium,
						P = s === j.c.Powerups,
						w = {};
					if (P && c) w.powerUps = {
						subredditId: c,
						isAnonymous: r
					};
					else if (f) {
						const e = Object(O.d)(m, {
							provider: k.b.Stripe
						});
						if (!e) return;
						w.premium = {
							pricePackage: e
						}
					}
					let _, C, I = "";
					try {
						I = await a(E(t, o, w))
					} catch (N) {
						return p.c.captureException(N), void(N.message && a(Object(y.stripeApiError)(N.message)))
					}
					a(Object(y.stripeTokenPending)());
					const S = Object(g.y)(m);
					if (S || (_ = await a(Object(y.validateAndCreateStripeToken)(e)), C = Object(g.v)(m), _)) try {
						const t = i()(),
							n = S || C ? _ && C ? Object(v.h)(u(), t, I, _.id) : S ? Object(v.j)(u(), t, I, S) : null : Object(v.i)(u(), t, I, _.id),
							s = await n;
						if (!(null == s ? void 0 : s.ok)) return void b();
						const m = s.body.data.createEconPayment;
						if (null === (l = null == m ? void 0 : m.errors) || void 0 === l ? void 0 : l.length) return void a(Object(y.stripeApiError)(x(m.errors)));
						const {
							ok: p,
							payment: O,
							providerExecution: {
								paymentIntentClientSecret: g
							}
						} = m;
						if (p && O.status === v.a.ActionRequired) {
							const t = await e.confirmCardPayment(g),
								{
									error: r
								} = t;
							if (r) return void(r.message ? a(Object(y.stripeApiError)(r.message)) : b());
							let n;
							if (!(n = S ? await Object(v.e)(u(), i()(), O.id, S) : await Object(v.d)(u(), i()(), O.id, _.id, C)).ok) return void b();
							const o = n.body;
							if (!o.data.confirmEconPayment.ok || o.data.confirmEconPayment.payment.status !== v.a.Paid) return void b()
						} else if (p && O.status !== v.a.Paid) return void b();
						const j = Object(h.k)(d());
						j && (P && c ? a(R({
							subredditId: c,
							powerupsCount: o,
							user: j,
							isAnonymous: r
						})) : f && a(F({
							user: j
						})))
					} catch (N) {
						p.c.captureException(N), b()
					}
				}, I = (e, t, r, n, o) => async (s, c, {
					gqlContext: d
				}) => {
					var u;
					const m = c(),
						b = n === j.c.Premium,
						f = n === j.c.Powerups,
						g = {};
					if (f && o) g.powerUps = {
						subredditId: o,
						isAnonymous: t
					};
					else if (b) {
						const e = Object(O.d)(m, {
							provider: k.b.PayPal
						});
						if (!e) return null;
						g.premium = {
							pricePackage: e
						}
					}
					let P = "";
					try {
						P = await s(E(e, r, g))
					} catch (I) {
						return p.c.captureException(I), I.message && s(Object(y.paypalApiError)(I.message)), null
					}
					const w = a.a.redditUrl;
					let C = {
						_o: w,
						o: P,
						pt: n
					};
					f && o && (C = {
						...C,
						r: o
					});
					try {
						const e = Object(l.a)(`${w}/framedModal/paypal-finish`, {
								...C,
								s: !0
							}),
							n = Object(l.a)(`${w}/framedModal/paypal-finish`, C),
							a = i()(),
							m = await Object(v.g)(d(), a, P, e, n);
						if (m && m.ok) {
							const e = m.body.data.createEconPayment;
							if (null === (u = null == e ? void 0 : e.errors) || void 0 === u ? void 0 : u.length) return s(Object(y.paypalApiError)(x(e.errors))), null;
							const n = Object(h.k)(c());
							if (e.ok) {
								const {
									status: c
								} = e.payment;
								if (c === v.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === c && n) return o ? s(R({
									subredditId: o,
									powerupsCount: r,
									user: n,
									isAnonymous: t
								})) : b && s(F({
									user: n
								})), null
							}
						}
					} catch (I) {
						p.c.captureException(I)
					}
					return s(Object(y.paypalApiError)(_())), null
				}, S = (e, t) => async (r, n, {
					gqlContext: o
				}) => {
					var s;
					try {
						const n = i()(),
							c = await Object(v.c)(o(), n, e, t);
						if (c && c.ok) {
							const e = c.body.data.confirmEconPayment;
							if (null === (s = null == e ? void 0 : e.errors) || void 0 === s ? void 0 : s.length) return r(Object(y.paypalApiError)(x(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (c) {
						p.c.captureException(c)
					}
					return r(Object(y.paypalApiError)(_())), !1
				}, N = () => async (e, t, {
					gqlContext: r
				}) => {
					e(Object(y.savedCardsPending)());
					try {
						const t = await Object(v.l)(r());
						if (t.ok) {
							const r = t.body;
							r.errors && r.errors.length && e(Object(y.stripeApiError)(r.errors[0].message));
							const {
								savedStripeCards: n
							} = r.data.identity, o = n.map(e => s()({
								...e,
								cardId: e.id
							}, "id"));
							e(Object(y.savedCardsSuccess)(o)), o[0] && e(Object(y.selectSavedCard)(o[0].cardId))
						} else e(Object(y.stripeApiError)(n.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (o) {
						p.c.captureException(o), e(Object(y.savedCardsSuccess)([]))
					}
				}, M = e => async (t, r, {
					gqlContext: n
				}) => {
					t(Object(y._deleteSavedCard)(e));
					try {
						const t = await Object(v.k)(n(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: o
							} = r.data.deleteEconPaymentMethod;
						if (o && o.length) throw new Error(x(o))
					} catch (o) {
						p.c.captureException(o)
					}
				}, A = Object(m.a)(f.O), T = Object(m.a)(f.P), U = Object(m.a)(f.Q), L = e => async (t, r) => {
					await t(A(e)), t(Object(u.f)({
						kind: b.b.Error,
						duration: u.a,
						text: e
					}))
				}, G = (e, t, r) => async (o, s, {
					gqlContext: c
				}) => {
					o(T({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const s = await Object(v.b)(c(), e);
						if (s.ok) {
							const e = s.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void o(L(n[0].message));
							o(U({
								subredditId: t,
								allocatedAt: r
							}))
						} else o(L(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (i) {
						p.c.captureException(i), o(L(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, B = Object(m.a)(f.S), R = e => async (t, r) => {
					t(B(e)), t(Object(P.l)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(w.g)(d.a.ECON_POWERUPS_PURCHASE)), t(Object(w.h)(d.a.ECON_POWERUPS_SUCCESS))
				}, D = Object(m.a)(f.W), F = ({
					user: e
				}) => async t => {
					await t(Object(P.n)(!0)), t(D({
						user: e
					}))
				}, q = Object(m.a)(f.ab)
		},
		"./src/reddit/actions/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return I
			})), r.d(t, "b", (function() {
				return M
			})), r.d(t, "a", (function() {
				return A
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				i = r("./src/reddit/models/Gold/ProductOffer.ts"),
				a = r("./src/reddit/models/Toast/index.ts"),
				d = r("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				l = r("./src/redditGQL/operations/GlobalProductOffers.json"),
				m = r("./src/redditGQL/operations/PremiumProductOfferSubscriptions.json"),
				p = r("./src/redditGQL/operations/ProductOffers.json");
			var b = r("./src/reddit/selectors/gold/productOffers.ts"),
				f = r("./src/reddit/actions/gold/constants.ts");
			const y = Object(o.a)(f.db),
				O = Object(o.a)(f.cb),
				g = Object(o.a)(f.bb),
				h = Object(o.a)(f.Z),
				j = Object(o.a)(f.Y),
				P = Object(o.a)(f.X),
				w = Object(o.a)(f.Eb),
				v = Object(o.a)(f.Cb),
				k = Object(o.a)(f.Db),
				_ = Object(o.a)(f.Hb),
				x = Object(o.a)(f.Gb),
				E = Object(o.a)(f.Fb),
				C = e => async t => {
					t(Object(c.f)({
						kind: a.b.Error,
						duration: c.a,
						text: e
					}))
				}, I = (e, t) => async r => {
					e === i.c.Premium ? r(N()) : t && r(S(e, t))
				}, S = (e, t) => async (r, o, {
					gqlContext: s
				}) => {
					const c = o();
					if (!Object(b.i)(c, {
							subredditId: t,
							type: e
						})) {
						r(y());
						try {
							const n = await ((e, t, r, n) => Object(u.a)(e, {
								...p,
								variables: {
									subredditId: t,
									types: r,
									includeGlobal: n
								}
							}))(s(), t, [e], !0);
							if (n.ok) {
								const e = n.body;
								if (e.errors && e.errors.length) throw new Error(e.errors[0].message);
								const o = e.data.subredditInfoById.productOffers ? e.data.subredditInfoById.productOffers.offers : [];
								return void(await r(O({
									productOffers: o || [],
									subredditId: t
								})))
							}
						} catch (i) {
							const e = n.fbt._("Something went wrong", null, {
								hk: "1IJNeH"
							});
							r(g(e)), r(C(e))
						}
					}
				}, N = () => async (e, t, {
					gqlContext: r
				}) => {
					var o, c;
					const a = i.c.Premium;
					e(h());
					try {
						const t = await ((e, t) => Object(u.a)(e, {
							...l,
							variables: {
								productTypes: t
							}
						}))(r(), [a]);
						if (t.ok) {
							const r = t.body;
							if (null === (o = r.errors) || void 0 === o ? void 0 : o.length) throw new Error(r.errors[0].message);
							return void e(j({
								productOffers: null !== (c = r.data.globalProductOffers.offers) && void 0 !== c ? c : []
							}))
						}
					} catch (d) {
						const t = d.message ? d.message : n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						s.c.captureMessage(t), e(P(t)), e(C(t))
					}
				}, M = () => async (e, t, {
					gqlContext: r
				}) => {
					var o, c, i;
					e(w());
					try {
						const t = await (e => Object(u.a)(e, m))(r());
						if (t.error) throw new Error(t.error.type);
						if (t.ok) {
							const r = t.body;
							if (null === (o = r.errors) || void 0 === o ? void 0 : o.length) throw new Error(r.errors[0].message);
							return void e(k({
								subscriptions: null !== (i = null === (c = r.data.identity) || void 0 === c ? void 0 : c.econSubscriptions) && void 0 !== i ? i : []
							}))
						}
					} catch (a) {
						s.c.captureException(a);
						const t = a.message ? a.message : n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						e(v(t)), e(C(t))
					}
				}, A = e => async (t, r, {
					gqlContext: o
				}) => {
					var s;
					t(_(e));
					try {
						const r = await Object(d.b)(o(), e);
						if (r.error) throw new Error(r.error.type);
						if (r.ok) {
							const n = r.body,
								{
									errors: o
								} = n.data.cancelEconRecurringPayment;
							if (null == o ? void 0 : o.length) throw new Error(o[0].message);
							t(E({
								orderId: e
							}))
						}
						return !0
					} catch (c) {
						const e = null !== (s = c.message) && void 0 !== s ? s : n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						});
						return t(x(e)), t(C(e)), !1
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return d
			})), r.d(t, "paymentCompleted", (function() {
				return u
			})), r.d(t, "cardNameInput", (function() {
				return l
			})), r.d(t, "postalCodeInput", (function() {
				return m
			})), r.d(t, "cardNameEmpty", (function() {
				return p
			})), r.d(t, "cardElementChange", (function() {
				return b
			})), r.d(t, "stripeTokenPending", (function() {
				return f
			})), r.d(t, "stripeTokenError", (function() {
				return y
			})), r.d(t, "stripeApiError", (function() {
				return O
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return g
			})), r.d(t, "paypalApiError", (function() {
				return h
			})), r.d(t, "toggleRememberCard", (function() {
				return j
			})), r.d(t, "selectSavedCard", (function() {
				return P
			})), r.d(t, "_deleteSavedCard", (function() {
				return w
			})), r.d(t, "deleteSavedCard", (function() {
				return v
			})), r.d(t, "savedCardsPending", (function() {
				return k
			})), r.d(t, "savedCardsSuccess", (function() {
				return _
			})), r.d(t, "loadSavedCards", (function() {
				return x
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/sentry/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/endpoints/gold/purchase.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				a = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = Object(s.a)(i.B),
				u = Object(s.a)(i.w),
				l = Object(s.a)(i.b),
				m = Object(s.a)(i.y),
				p = Object(s.a)(i.a),
				b = Object(s.a)(i.E),
				f = Object(s.a)(i.G),
				y = Object(s.a)(i.F),
				O = Object(s.a)(i.D),
				g = e => async (t, r) => {
					const o = r(),
						s = Object(a.h)(o),
						c = Object(a.l)(o),
						{
							token: i,
							error: d
						} = await e.createToken({
							name: s,
							address_zip: c
						});
					if (s.trim()) {
						if (!d && i) return i;
						t(y(d || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(p({
							message: e
						}))
					}
				}, h = Object(s.a)(i.x), j = Object(s.a)(i.H), P = Object(s.a)(i.C), w = Object(s.a)(i.g), v = e => async (t, r, {
					apiContext: n
				}) => {
					t(w(e));
					try {
						const t = await Object(c.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (s) {
						o.c.captureException(s)
					}
				}, k = Object(s.a)(i.z), _ = Object(s.a)(i.A), x = () => async (e, t, {
					apiContext: r
				}) => {
					e(k());
					try {
						const t = await Object(c.b)(r());
						if (t.error) throw new Error(t.error.type);
						const n = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(_(n)), n[0] && e(P(n[0].cardId))
					} catch (n) {
						o.c.captureException(n), e(_([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "setPremiumPurchaseModalInfo", (function() {
				return O
			})), r.d(t, "clearPremiumPurchaseModalInfo", (function() {
				return g
			})), r.d(t, "openPremiumPurchaseModal", (function() {
				return h
			})), r.d(t, "closePremiumPurchaseModal", (function() {
				return j
			})), r.d(t, "stripePremiumPurchaseRequested", (function() {
				return P
			})), r.d(t, "paymentBlobCreated", (function() {
				return w
			})), r.d(t, "openWithBlob", (function() {
				return v
			}));
			var n = r("./src/config.ts"),
				o = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/sentry/index.ts"),
				i = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/formatApiError/index.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				u = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/constants/modals.ts"),
				m = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = r("./src/reddit/endpoints/gold/purchase.ts"),
				b = r("./src/reddit/helpers/correlationIdTracker.ts"),
				f = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				y = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const O = Object(s.a)(y.t),
				g = Object(s.a)(y.e),
				h = (e, t) => async r => {
					r(O(e)), r(Object(u.h)(l.a.ECON_PREMIUM_PURCHASE, t))
				}, j = () => async e => {
					e(Object(u.g)(l.a.ECON_PREMIUM_PURCHASE)), e(g())
				}, P = e => async (t, r, {
					apiContext: n
				}) => {
					const s = Object(f.a)(r()),
						c = (null == s ? void 0 : s.pennies) || i.wb,
						u = Object(b.c)(b.a.GoldPayment);
					t(Object(d.stripeTokenPending)());
					const l = await t(Object(d.validateAndCreateStripeToken)(e));
					if (l) try {
						const e = await Object(p.h)({
							context: n(),
							correlationId: u,
							pennies: c,
							token: l
						});
						if (e.error) {
							const r = Object(a.a)(e.error);
							t(Object(d.stripeApiError)(r))
						} else t(Object(d.paymentCompleted)({
							confirmed: !1
						}))
					} catch (m) {
						const e = Object(a.a)(m);
						t(Object(d.stripeApiError)(e))
					} else {
						const e = o.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						t(Object(d.stripeApiError)(e))
					}
				}, w = Object(s.a)(y.v), v = ({
					packageId: e,
					correlationId: t
				}, r) => async (o, s, {
					apiContext: i
				}) => {
					o(h({
						packageId: e,
						correlationId: t
					}, r));
					const u = Object(f.a)(s()),
						l = (null == u ? void 0 : u.paypalButtonId) || n.a.paypal.buttons.premium;
					if (l) try {
						const e = await Object(m.f)({
							buttonId: l,
							context: i(),
							correlationId: t
						});
						if (e.error) {
							const t = Object(a.a)(e.error);
							o(Object(d.paypalApiError)(t))
						} else o(w(e))
					} catch (p) {
						const e = Object(a.a)(p);
						o(Object(d.paypalApiError)(e))
					} else c.c.captureMessage("No Premium packages available on Premium purchase modal")
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return y
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "a", (function() {
				return w
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/env/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/endpoints/gold/productCatalog/index.ts"),
				a = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/models/Toast/index.ts"),
				l = r("./src/reddit/actions/post.ts"),
				m = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const p = Object(s.a)(m.j),
				b = Object(s.a)(m.k),
				f = Object(s.a)(m.i),
				y = e => async (t, r, {
					apiContext: s
				}) => {
					t(p());
					const d = r(),
						u = Object(a.K)(d);
					try {
						const r = !u,
							n = await Object(i.b)({
								context: s(),
								correlationId: e,
								shouldUseCurrentOrigin: r
							});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const o = n.body;
						t(b(o))
					} catch (l) {
						Object(o.b)() || console.error(l), c.c.captureException(l);
						const e = n.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(f(e))
					}
				}, O = Object(s.a)(m.m), g = Object(s.a)(m.n), h = Object(s.a)(m.l), j = (e, t) => async (r, s, {
					apiContext: a
				}) => {
					r(O());
					try {
						const n = await Object(i.c)({
							awardId: e,
							context: a(),
							correlationId: t
						});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const o = n.body;
						if (!o.coinPackages || !o.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						r(g(o))
					} catch (d) {
						Object(o.b)() || console.error(d), c.c.captureException(d);
						const e = n.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						r(h(e))
					}
				}, P = Object(s.a)(m.h), w = () => async (e, t, {
					gqlContext: r
				}) => {
					var s, a;
					try {
						const t = await Object(i.a)(r());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (s = r.errors) || void 0 === s ? void 0 : s.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (a = r.awards) || void 0 === a ? void 0 : a.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(P({
								awards: r.awards
							})), e(Object(l.B)())
						}
					} catch (m) {
						Object(o.b)() || console.error(m), e(Object(d.f)({
							kind: u.b.Error,
							text: n.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), c.c.captureException(m)
					}
				}
		},
		"./src/reddit/components/Econ/Common/BenefitTile/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_3WUWb7Sw86xRHJJhjUgdZ9",
				icon: "_4UcAT87VyI5VbP6S7bhhK",
				title: "_7IEgYd0otS-qkC7jLZMRc",
				description: "_1Lmps3yUL3wlUeYBq8e1NW",
				new: "_2xYObLxCbdZPVZMoClN8r0"
			}
		},
		"./src/reddit/components/Econ/Common/BenefitTile/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/Econ/Common/NewIcon/index.tsx"),
				i = r("./src/reddit/components/Econ/Common/BenefitTile/index.m.less"),
				a = r.n(i);
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				className: e,
				description: t,
				iconUrl: r,
				onClick: n,
				title: i,
				isNew: d
			}) => o.a.createElement("div", {
				className: Object(s.a)(e, a.a.container),
				onClick: n
			}, d && o.a.createElement(c.a, {
				className: a.a.new
			}), o.a.createElement("div", {
				className: a.a.icon,
				style: {
					backgroundImage: `url('${r}')`
				}
			}), i && o.a.createElement("h3", {
				className: a.a.title
			}, i), t && o.a.createElement("p", {
				className: a.a.description
			}, t))
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less": function(e, t, r) {
			e.exports = {
				closeButton: "zV6beQLWIuWX5Q9SvWfDR",
				closeIcon: "_17EZNlAorafFssuT6Gw_Zg"
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			}));
			var n = r("./src/lib/classNames/index.ts"),
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				c = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				a = r.n(i);
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js"), u = ({
				className: e,
				onClick: t
			}) => s.a.createElement("button", {
				onClick: t,
				className: Object(n.a)(e, a.a.closeButton),
				"aria-label": d._("Close", null, {
					hk: "3Qarlp"
				})
			}, s.a.createElement(c.b, {
				className: a.a.closeIcon
			}))
		},
		"./src/reddit/components/Econ/Common/NewIcon/index.m.less": function(e, t, r) {
			e.exports = {
				new: "_2u3fkh0zbVoixCjyXrW0_e"
			}
		},
		"./src/reddit/components/Econ/Common/NewIcon/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/Econ/Common/NewIcon/index.m.less"),
				i = r.n(c);
			const {
				fbt: a
			} = r("./node_modules/fbt/lib/FbtPublic.js"), d = ({
				className: e
			}) => o.a.createElement("span", {
				className: Object(s.a)(i.a.new, e)
			}, a._("NEW", null, {
				hk: "2P5bsM"
			}))
		},
		"./src/reddit/components/Econ/PowerupsPremiumUpsellModal/checklist.m.less": function(e, t, r) {
			e.exports = {
				checklistItem: "_28J0Q9alOlPf6wQ0eAT47-",
				checklistItemRow: "_1gr7rVleJ6gB2KPuzmT-Xm",
				icon: "_1ZuetslcZ1EjZBs4aPm3j9",
				iconBackground: "_2pVyW8hm-BiFSsbeUtwRtU",
				checklistItemText: "_3lVxjVONYDJMBYgDkRtKW2"
			}
		},
		"./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PowerupsPremiumUpsellModal", (function() {
				return $
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/higherOrderComponents/asModal/index.tsx"),
				i = r("./src/reddit/actions/modal.ts"),
				a = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				d = r("./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx"),
				u = r("./src/reddit/components/PremiumPurchaseModal/Loader.tsx"),
				l = r("./src/reddit/constants/modals.ts"),
				m = r("./src/reddit/helpers/trackers/powerups.ts"),
				p = r("./src/reddit/hooks/useTracking.ts"),
				b = r("./src/reddit/selectors/platform.ts"),
				f = r("./src/config.ts"),
				y = r("./src/lib/localizeCurrency/index.ts"),
				O = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				g = r("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				h = r("./src/reddit/controls/Button/index.tsx"),
				j = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				P = r("./src/reddit/hooks/useLocale.ts"),
				w = r("./src/reddit/actions/gold/productOffers.ts"),
				v = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				k = r("./src/reddit/helpers/correlationIdTracker.ts"),
				_ = r("./src/reddit/models/Gold/Premium/index.ts"),
				x = r("./src/reddit/models/Gold/ProductOffer.ts"),
				E = r("./src/reddit/selectors/gold/productOffers.ts"),
				C = r("./src/reddit/selectors/gold/purchaseCatalog.ts");
			var I = r("./src/reddit/pages/Premium/BenefitsSection/index.tsx"),
				S = r("./src/lib/classNames/index.ts"),
				N = r("./src/reddit/icons/fonts/index.tsx"),
				M = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/checklist.m.less"),
				A = r.n(M);
			const T = ({
					className: e,
					items: t
				}) => o.a.createElement("div", {
					className: e
				}, t.map(e => o.a.createElement(U, {
					key: e,
					className: A.a.checklistItem,
					item: e
				}))),
				U = ({
					className: e,
					item: t
				}) => o.a.createElement("div", {
					className: Object(S.a)(A.a.checklistItemRow, e)
				}, o.a.createElement("div", {
					className: A.a.iconBackground
				}, o.a.createElement(N.a, {
					className: A.a.icon,
					name: "checkmark_fill"
				})), o.a.createElement("span", {
					className: A.a.checklistItemText
				}, t));
			var L = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/offerCard.m.less"),
				G = r.n(L);
			const B = ({
				className: e,
				body: t,
				buttons: r,
				iconUrl: n,
				title: s
			}) => o.a.createElement("div", {
				className: Object(S.a)(e, G.a.container)
			}, o.a.createElement("div", {
				className: G.a.icon,
				style: {
					backgroundImage: `url('${n}')`
				}
			}), o.a.createElement("h3", {
				className: G.a.title
			}, s), t, o.a.createElement("div", {
				className: G.a.buttons
			}, r));
			var R = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/offers.m.less"),
				D = r.n(R);
			const {
				fbt: F
			} = r("./node_modules/fbt/lib/FbtPublic.js"), q = ["premium-powerups"], Q = ["premium-powerups", "premium-ad-free", "premium-avatars", "premium-monthly-coins"], W = ({
				subredditId: e
			}) => {
				const t = Object(s.d)(),
					r = Object(P.a)(),
					c = Object(p.a)(),
					a = function() {
						var e, t;
						const r = Object(s.d)(),
							o = Object(s.e)(C.j),
							c = Object(s.e)(E.e),
							i = Object(s.e)(C.l);
						Object(n.useEffect)(() => {
							o.length || i || r(Object(v.b)()), c || r(Object(w.c)(x.c.Premium))
						});
						const a = o.find(e => e.frequency === _.c.Monthly),
							d = o.find(e => e.frequency === _.c.Yearly);
						if (!a || !d) return null;
						const u = null === (e = Object(E.j)(c, x.b.Month)) || void 0 === e ? void 0 : e[0],
							l = null === (t = Object(E.j)(c, x.b.Year)) || void 0 === t ? void 0 : t[0];
						return u && l ? {
							correlationId: Object(k.d)(k.a.GoldPayment, !1),
							premiumMonthly: {
								price: u.price,
								packageId: a.mobileId
							},
							premiumAnnual: {
								price: l.price,
								packageId: d.mobileId,
								bonusPct: d.bonusPct
							}
						} : null
					}(),
					d = Object(s.e)(t => Object(E.a)(t, {
						subredditId: e
					})),
					u = Object(s.e)(C.h),
					b = q.map(e => I.b[e]());
				return o.a.createElement("div", {
					className: D.a.container
				}, a && d ? o.a.createElement(o.a.Fragment, null, o.a.createElement(B, {
					title: F._("Powerups Subscription", null, {
						hk: "4zbTSR"
					}),
					iconUrl: `${f.a.assetPath}/img/gold/premium-marketing/benefits-icons/premium-powerups.png`,
					body: o.a.createElement(T, {
						items: b
					}),
					buttons: d && o.a.createElement(h.s, {
						className: D.a.powerupsButton,
						priority: h.b.Secondary,
						onClick: () => {
							c(Object(m.u)()), t(Object(i.h)(l.a.ECON_POWERUPS_PURCHASE))
						},
						isFullWidth: !0
					}, F._("{powerupPrice}/mo", [F._param("powerupPrice", Object(y.b)(d, {
						locale: r
					}))], {
						hk: "1ApJir"
					}))
				}), o.a.createElement(B, {
					title: F._("Reddit Premium", null, {
						hk: "S3DXw"
					}),
					iconUrl: `${f.a.assetPath}/img/gold/premium-marketing/benefits-icons/premium-crest.png`,
					body: o.a.createElement(J, {
						premiumMonthlyCoins: u
					}),
					buttons: a && o.a.createElement(H, {
						premiumMonthly: a.premiumMonthly,
						premiumAnnual: a.premiumAnnual,
						onClickPrice: (e, r) => {
							c(Object(m.v)(r)), t(Object(g.openWithBlob)({
								correlationId: a.correlationId,
								packageId: e
							}, {
								isPowerupsPremiumPurchase: !0
							})), t(Object(O.i)({
								renewInterval: r
							}))
						},
						locale: r
					})
				})) : o.a.createElement(j.a, {
					className: D.a.loadingIcon,
					sizePx: 40
				}))
			}, J = ({
				premiumMonthlyCoins: e
			}) => {
				const t = Q.map(t => I.b[t]({
					periodicalCoins: e
				}));
				return o.a.createElement("div", null, o.a.createElement(T, {
					items: t
				}), o.a.createElement("div", {
					className: D.a.andSoMuchMore
				}, F._("And so much more!", null, {
					hk: "oMd"
				})))
			}, H = ({
				premiumMonthly: e,
				premiumAnnual: t,
				locale: r,
				onClickPrice: n
			}) => o.a.createElement("div", {
				className: D.a.premiumButtons
			}, o.a.createElement(h.s, {
				className: D.a.powerupsButton,
				priority: h.b.Secondary,
				onClick: () => n(e.packageId, x.b.Month),
				isFullWidth: !0
			}, F._("{premiumMonthlyPrice}/mo", [F._param("premiumMonthlyPrice", Object(y.b)(e.price, {
				locale: r
			}))], {
				hk: "4i6SO9"
			})), o.a.createElement(h.j, {
				className: D.a.powerupsButton,
				onClick: () => n(t.packageId, x.b.Year),
				isFullWidth: !0
			}, F._("{premiumAnnualPrice}/yr", [F._param("premiumAnnualPrice", Object(y.b)(t.price, {
				locale: r
			}))], {
				hk: "2YAbPf"
			})));
			var Y = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.m.less"),
				z = r.n(Y);
			const {
				fbt: Z
			} = r("./node_modules/fbt/lib/FbtPublic.js"), $ = () => {
				const e = Object(s.e)(b.r),
					t = Object(s.d)(),
					r = Object(p.a)();
				Object(n.useEffect)(() => {
					e && (r(Object(m.w)()), Object(u.a)(), Object(d.a)())
				}, []);
				const c = () => t(Object(i.g)(l.a.ECON_POWERUPS_PREMIUM_UPSELL));
				return e ? o.a.createElement(o.a.Fragment, null, o.a.createElement(a.a, {
					onClick: c
				}), o.a.createElement("div", {
					className: z.a.container
				}, o.a.createElement("h1", {
					className: z.a.title
				}, Z._("Get more with Premium!", null, {
					hk: "YXIbY"
				})), o.a.createElement(W, {
					subredditId: e
				}), o.a.createElement("div", {
					className: z.a.footer
				}, Z._("Subscriptions automatically renew.", null, {
					hk: "133vve"
				})))) : (c(), null)
			};
			t.default = Object(c.a)($)
		},
		"./src/reddit/components/Econ/PowerupsPremiumUpsellModal/offerCard.m.less": function(e, t, r) {
			e.exports = {
				container: "wVUik45NC_6GZ2-YNl-4m",
				icon: "_23WcjD2f0yk7_mAauuHGyM",
				title: "_1rnwdL1d5VJf51jtrrFhtA",
				buttons: "_3Xxv2jtWdhLowDMNMy-dix"
			}
		},
		"./src/reddit/components/Econ/PowerupsPremiumUpsellModal/offers.m.less": function(e, t, r) {
			e.exports = {
				container: "tTwzUUjm2AZxFT6PW6zIn",
				loadingIcon: "RZ6sIZ-yYTsoZqX0sqJjV",
				powerupsButton: "_1sFaWX-iP2XZkZhfp1SwCj",
				active: "_1BUw0D9ZFurv1iOhxJvzun",
				andSoMuchMore: "_2GpOB8zl8aUSpbjYHqSiIa",
				premiumButtons: "nWzTbqIOtd6NF2PUlD9w-"
			}
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
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = r.n(c);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => o.a.createElement("div", {
				className: Object(s.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/endpoints/gold/paypalPurchases.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return d
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "e", (function() {
				return b
			}));
			var n = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				s = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				i = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				a = r("./src/reddit/endpoints/gold/purchase.ts");
			const d = async ({
				buttonId: e,
				context: t,
				correlationId: r
			}) => {
				const d = {
						button_id: e,
						correlation_id: r
					},
					u = `${t.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					l = Object(i.a)(u);
				return Object(o.a)(Object(s.a)(t, [c.a]), {
					method: n.ib.POST,
					endpoint: l,
					data: d
				}).then(a.c)
			}, u = async ({
				context: e,
				coins: t,
				pennies: r,
				correlationId: i
			}) => {
				const d = {
					coins: t,
					pennies: r,
					correlation_id: i
				};
				return Object(o.a)(Object(s.a)(e, [c.a]), {
					method: n.ib.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(a.c)
			}, l = async ({
				context: e,
				awardId: t,
				pennies: r,
				thingId: i,
				correlationId: d
			}) => {
				const u = {
					award_id: t,
					correlation_id: d,
					pennies: r,
					thing_id: i
				};
				return Object(o.a)(Object(s.a)(e, [c.a]), {
					method: n.ib.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: u
				}).then(a.c)
			}, m = async ({
				context: e,
				offerContext: t,
				orderId: r,
				coins: i,
				pennies: d,
				correlationId: u
			}) => {
				const l = {
					offer_context: t,
					order_id: r,
					coins: i,
					pennies: d,
					correlation_id: u
				};
				return Object(o.a)(Object(s.a)(e, [c.a]), {
					method: n.ib.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: l
				}).then(a.c)
			}, p = async ({
				awardId: e,
				context: t,
				coins: r,
				correlationId: i,
				isAnonymous: d,
				message: u,
				offerContext: l,
				orderId: m,
				pennies: p,
				thingId: b
			}) => {
				const f = {
					award_id: e,
					coins: r,
					correlation_id: i,
					is_anonymous: d,
					message: u,
					offer_context: l,
					order_id: m,
					pennies: p,
					thing_id: b
				};
				return Object(o.a)(Object(s.a)(t, [c.a]), {
					method: n.ib.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: f
				}).then(a.c)
			}, b = async ({
				awardId: e,
				context: t,
				correlationId: r,
				isAnonymous: i,
				message: d,
				orderId: u,
				thingId: l
			}) => {
				const m = {
					award_id: e,
					correlation_id: r,
					is_anonymous: i,
					message: d,
					order_id: u,
					thing_id: l
				};
				return Object(o.a)(Object(s.a)(t, [c.a]), {
					method: n.ib.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: m
				}).then(a.c)
			}
		},
		"./src/reddit/endpoints/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return O
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "i", (function() {
				return h
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "j", (function() {
				return P
			})), r.d(t, "g", (function() {
				return w
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "e", (function() {
				return k
			})), r.d(t, "d", (function() {
				return _
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "l", (function() {
				return E
			})), r.d(t, "k", (function() {
				return C
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				o = r.n(n),
				s = r("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				c = r("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				i = r("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				a = r("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				d = r("./src/redditGQL/operations/CreateEconOrder.json"),
				u = r("./src/redditGQL/operations/CreatePaypalPayment.json"),
				l = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				m = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				p = r("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				b = r("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				f = r("./src/redditGQL/operations/UserSavedStripeCards.json"),
				y = r("./src/lib/makeGqlRequest/index.ts");
			const O = (e, t, r, n, s) => {
				const {
					premium: c,
					...i
				} = s, a = (null == c ? void 0 : c.pricePackage) || r.pricePackages[0], u = new o.a(a.price).multipliedBy(n).toFixed();
				return Object(y.a)(e, {
					...d,
					variables: {
						input: {
							nonce: t,
							productId: r.id,
							productVersion: r.version,
							pricePackageId: a.id,
							currency: a.currency,
							price: u,
							productsCount: n.toString(),
							...i
						}
					}
				})
			};
			var g;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(g || (g = {}));
			const h = (e, t, r, n) => Object(y.a)(e, {
					...m,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				j = (e, t, r, n) => Object(y.a)(e, {
					...l,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				P = (e, t, r, n) => Object(y.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: r,
						cardId: n
					}
				}),
				w = (e, t, r, n, o) => Object(y.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: r,
						successUrl: n,
						cancelUrl: o
					}
				}),
				v = (e, t, r, n) => Object(y.a)(e, {
					...c,
					variables: {
						nonce: t,
						paymentId: r,
						token: n
					}
				}),
				k = (e, t, r, n) => Object(y.a)(e, {
					...a,
					variables: {
						nonce: t,
						paymentId: r,
						cardId: n
					}
				}),
				_ = (e, t, r, n, o) => Object(y.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: r,
						token: n,
						saveCard: o
					}
				}),
				x = (e, t) => Object(y.a)(e, {
					...s,
					variables: {
						orderId: t
					}
				}),
				E = e => Object(y.a)(e, {
					...f,
					variables: {}
				}),
				C = (e, t) => Object(y.a)(e, {
					...b,
					variables: {
						cardId: t
					}
				})
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				o = r("./src/lib/prettyPrintNumber/index.ts");

			function s(e, t) {
				const r = new n.BigNumber(e),
					o = new n.BigNumber(t || 1);
				return r.dividedToIntegerBy(o).toString()
			}

			function c(e, t) {
				return Object(o.b)(parseInt(s(e, t), 10))
			}

			function i(e, t) {
				const r = new n.BigNumber(e),
					o = new n.BigNumber(t || 1);
				return r.multipliedBy(o).toFixed(0)
			}
		},
		"./src/reddit/helpers/trackers/premium.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			}));
			var n = r("./src/reddit/helpers/correlationIdTracker.ts"),
				o = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const c = (e, t) => {
					const {
						packageId: r,
						renewInterval: n
					} = t;
					let s = "";
					if (r) {
						const t = Object(o.i)(e, r);
						if (!t) return null;
						s = t.frequency
					} else n && (s = n);
					return s ? {
						goldPurchase: {
							subscriptionType: s
						}
					} : null
				},
				i = "premium_marketing",
				a = e => t => ({
					source: i,
					action: "click",
					noun: "price",
					correlationId: Object(n.c)(n.a.GoldPayment),
					...s.defaults(t),
					...c(t, e)
				}),
				d = () => e => ({
					source: i,
					action: "click",
					noun: "redeem_code",
					correlationId: Object(n.c)(n.a.GoldPayment),
					...s.defaults(e)
				}),
				u = () => e => ({
					source: i,
					action: "click",
					noun: "manage",
					correlationId: Object(n.c)(n.a.GoldPayment),
					...s.defaults(e)
				}),
				l = e => t => ({
					source: "premium_marketing",
					action: "click",
					noun: "premium_benefit",
					...s.defaults(t),
					goldPurchase: {
						premiumMarketingBenefit: e
					}
				})
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "d", (function() {
				return s
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return a
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			const o = {
					PREMIUM_1_MONTH: {
						priceInCoins: 1800,
						monthsOfPremium: 1
					},
					PREMIUM_3_MONTHS: {
						priceInCoins: 5400,
						monthsOfPremium: 3
					},
					PREMIUM_6_MONTHS: {
						priceInCoins: 10800,
						monthsOfPremium: 6
					},
					PREMIUM_12_MONTHS: {
						priceInCoins: 21600,
						monthsOfPremium: 12
					}
				},
				s = (e, t = !1) => {
					const r = [];
					for (const n in o) {
						const s = o[n];
						(s.priceInCoins <= e || t) && r.push(s)
					}
					return r
				},
				c = e => n.fbt._({
					"*": "{number of months} months {number of coins} Coins",
					_1: "1 month {number of coins} Coins"
				}, [n.fbt._plural(e.monthsOfPremium, "number of months"), n.fbt._param("number of coins", e.priceInCoins.toLocaleString())], {
					hk: "2bar0C"
				}),
				i = "com.reddit.premium_1";
			var a;
			! function(e) {
				e.Monthly = "monthly", e.Yearly = "yearly"
			}(a || (a = {}))
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, o, s, c;
			r.d(t, "b", (function() {
					return o
				})), r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(o || (o = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(s || (s = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(c || (c = {}))
		},
		"./src/reddit/pages/Premium/BenefitsSection/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_21g0kYfKRCqWnHX6Hs4EVJ",
				benefit: "_2ZtkpgcwK6dFNvjfEHZZT4"
			}
		},
		"./src/reddit/pages/Premium/BenefitsSection/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return O
			})), r.d(t, "a", (function() {
				return h
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				c = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/config.ts"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/components/Econ/Common/BenefitTile/index.tsx"),
				u = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = r("./src/reddit/helpers/trackers/premium.ts"),
				m = r("./src/reddit/hooks/useTracking.ts"),
				p = r("./src/reddit/selectors/experiments/econ/index.ts"),
				b = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				f = r("./src/reddit/pages/Premium/BenefitsSection/index.m.less"),
				y = r.n(f);
			const O = {
					"premium-avatars": () => n.fbt._("Exclusive Avatar Gear", null, {
						hk: "1f1QJb"
					}),
					"premium-powerups": () => n.fbt._("Powerup", null, {
						hk: "2TMd6"
					}),
					"premium-app-icons": () => n.fbt._("Custom App Icons", null, {
						hk: "2uGpiC"
					}),
					"premium-ad-free": () => n.fbt._("Ad-free Browsing", null, {
						hk: "2rgG59"
					}),
					"premium-monthly-coins": ({
						periodicalCoins: e
					}) => n.fbt._("{amount}Monthly Coins", [n.fbt._param("amount", e ? e + " " : "")], {
						hk: "3rUDgA"
					}),
					"premium-lounge": () => n.fbt._("Members Lounge", null, {
						hk: "3iqx0z"
					}),
					"premium-awards": () => n.fbt._("Premium Awards", null, {
						hk: "3cn0Pf"
					}),
					"premium-more": () => n.fbt._("More to come...", null, {
						hk: "oz7E8"
					}),
					"premium-bonus": ({
						bonusCoins: e
					}) => n.fbt._("{amount} Coin Bonus!", [n.fbt._param("amount", e)], {
						hk: "2W5D7B"
					})
				},
				g = {
					"premium-avatars": () => n.fbt._("Outfit your avatar with the best gear and accessories", null, {
						hk: "2HjLMS"
					}),
					"premium-powerups": ({
						isAltruismMessagingEnabled: e
					}) => e ? n.fbt._("Give back to your community", null, {
						hk: "2jSmid"
					}) : n.fbt._("Help select communities unlock perks", null, {
						hk: "3vbuX2"
					}),
					"premium-app-icons": () => n.fbt._("Change your app icon to something more your style", null, {
						hk: "1WobLA"
					}),
					"premium-ad-free": () => n.fbt._("Enjoy redditing without interruptions from ads", null, {
						hk: "2aDI9B"
					}),
					"premium-monthly-coins": ({
						periodicalCoins: e
					}) => n.fbt._("Get {amount} coins a month and make it rain awards", [n.fbt._param("amount", e)], {
						hk: "228nfD"
					}),
					"premium-lounge": () => n.fbt._("Discover all the illuminati secrets in r/lounge", null, {
						hk: "nlK6D"
					}),
					"premium-awards": () => n.fbt._("Give exclusive awards that get more attention", null, {
						hk: "2Dzf3P"
					}),
					"premium-more": () => void 0,
					"premium-bonus": () => n.fbt._("Claim this one-time-only welcome gift", null, {
						hk: "1x9RYJ"
					})
				},
				h = ({
					className: e
				}) => {
					const t = Object(c.e)(b.j),
						r = Object(c.e)(b.h),
						n = Object(c.e)(p.j),
						o = Object(m.a)();
					if (!(null == t ? void 0 : t.length)) return s.a.createElement("div", null, s.a.createElement(u.a, {
						sizePx: 80
					}));
					const {
						signupBonusCoins: f
					} = t[0], h = f && f > 0 ? f.toLocaleString() : void 0, j = n ? [{
						key: "premium-ad-free",
						telemetryTag: "ad_free"
					}, {
						key: "premium-avatars",
						isNew: !0,
						telemetryTag: "avatar"
					}, {
						key: "premium-monthly-coins",
						telemetryTag: "monthly_coins"
					}, {
						key: "premium-powerups",
						isNew: !0,
						asterisk: !0,
						telemetryTag: "powerups"
					}, {
						key: "premium-app-icons",
						isNew: !0,
						asterisk: !0,
						telemetryTag: "app_icons"
					}, {
						key: "premium-lounge",
						telemetryTag: "premium_subreddits"
					}, {
						key: "premium-awards",
						telemetryTag: "premium_awards"
					}] : [{
						key: "premium-ad-free",
						telemetryTag: "ad_free"
					}, {
						key: "premium-avatars",
						isNew: !0,
						telemetryTag: "avatar"
					}, {
						key: "premium-monthly-coins",
						telemetryTag: "monthly_coins"
					}, {
						key: "premium-lounge",
						telemetryTag: "premium_subreddits"
					}, {
						key: "premium-app-icons",
						isNew: !0,
						asterisk: !0,
						telemetryTag: "app_icons"
					}, {
						key: "premium-powerups",
						isNew: !0,
						asterisk: !0,
						telemetryTag: "powerups"
					}, {
						key: "premium-awards",
						telemetryTag: "premium_awards"
					}];
					h ? j.push({
						key: "premium-bonus",
						asterisk: !0,
						telemetryTag: "coin_bonus"
					}) : j.push({
						key: "premium-more",
						telemetryTag: "more_benefits"
					});
					const P = {
						periodicalCoins: r,
						bonusCoins: h,
						isAltruismMessagingEnabled: n
					};
					return s.a.createElement("div", {
						className: Object(a.a)(y.a.container, e)
					}, j.map(e => {
						const {
							key: t,
							isNew: r,
							asterisk: n,
							telemetryTag: c
						} = e;
						return s.a.createElement(d.a, {
							className: y.a.benefit,
							description: g[t](P),
							iconUrl: `${i.a.assetPath}/img/gold/premium-marketing/benefits-icons/${t}.png`,
							key: t,
							title: `${O[t](P)}${n?"*":""}`,
							isNew: r,
							onClick: () => c && o(Object(l.b)(c))
						})
					}))
				}
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return a
			})), r.d(t, "i", (function() {
				return d
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "j", (function() {
				return p
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "g", (function() {
				return O
			})), r.d(t, "f", (function() {
				return g
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/makeProductOfferKey/index.ts"),
				s = r("./src/reddit/models/Gold/ProductOffer.ts"),
				c = r("./src/reddit/models/Payments/index.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const a = e => e.subreddits.api.productOffers.pending,
				d = (e, {
					subredditId: t,
					type: r
				}) => {
					var n, s, c;
					return t ? e.subreddits.productOffers[Object(o.a)(r, t)] : null === (c = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.goldPurchase) || void 0 === s ? void 0 : s.productOffers) || void 0 === c ? void 0 : c[Object(o.a)(r)]
				},
				u = (e, {
					subredditId: t
				}) => {
					const r = d(e, {
						subredditId: t,
						type: s.c.Powerups
					});
					return r && r[0]
				},
				l = (e, t) => {
					var r;
					const n = u(e, t);
					return null === (r = null == n ? void 0 : n.pricePackages) || void 0 === r ? void 0 : r[0].price
				},
				m = e => {
					const t = d(e, {
						type: s.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				p = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === c.b.PayPal || e[0] === c.b.Stripe)(e.requiredPaymentProviders)) : null,
				b = Object(n.a)(m, i.p, (e, t) => p(e, t) || null),
				f = Object(n.a)(b, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				y = Object(n.a)(b, e => (null == e ? void 0 : e[0].price) || null),
				O = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				g = Object(n.a)(O, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/redditGQL/operations/CancelEconRecurringPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"ac36f7489268"}')
		},
		"./src/redditGQL/operations/ConfirmPaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"6ad51fec38be"}')
		},
		"./src/redditGQL/operations/ConfirmStripePaymentNewCard.json": function(e) {
			e.exports = JSON.parse('{"id":"e4d2b27d6d30"}')
		},
		"./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"0095edf93db4"}')
		},
		"./src/redditGQL/operations/CreateEconOrder.json": function(e) {
			e.exports = JSON.parse('{"id":"1bf318d40021"}')
		},
		"./src/redditGQL/operations/CreatePaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"8bca171d6bb4"}')
		},
		"./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"179702814d8f"}')
		},
		"./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json": function(e) {
			e.exports = JSON.parse('{"id":"6d178a1662ba"}')
		},
		"./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"9fc54f6de447"}')
		},
		"./src/redditGQL/operations/DeleteSavedStripeCard.json": function(e) {
			e.exports = JSON.parse('{"id":"87230cb9dec2"}')
		},
		"./src/redditGQL/operations/GlobalProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"5b1dd85fe475"}')
		},
		"./src/redditGQL/operations/PremiumProductOfferSubscriptions.json": function(e) {
			e.exports = JSON.parse('{"id":"d0a53057e3e8"}')
		},
		"./src/redditGQL/operations/ProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"ddb1f9f5717c"}')
		},
		"./src/redditGQL/operations/UserSavedStripeCards.json": function(e) {
			e.exports = JSON.parse('{"id":"d29c51cfbfe6"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PowerupsPremiumUpsellModal.abe179b597f903ee30c7.js.map