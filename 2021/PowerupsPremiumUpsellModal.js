// https://www.redditstatic.com/desktop2x/PowerupsPremiumUpsellModal.598c92fb5ee34b8c601f.js
// Retrieved at 11/8/2021, 10:50:15 AM by Reddit Dataminer v1.0.0
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
				return c
			})), r.d(t, "d", (function() {
				return s
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "e", (function() {
				return u
			}));
			var n, o = r("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(n || (n = {}));
			const c = "USD",
				s = "ETH",
				a = "COINS",
				i = [s, "BTC"],
				d = [a, "SUBREDDIT_POINTS", "GAME_TOKENS"],
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
				c = r("./src/lib/currency/currencies.ts"),
				s = r("./src/lib/prettyPrintNumber/index.ts"),
				a = r("./src/reddit/helpers/governance/tokens.ts"),
				i = r("./src/reddit/constants/intlSupport.ts");
			const d = (e, {
					locale: t = n.DEFAULT_LOCALE,
					pretty: r,
					formatOptions: o
				} = {}) => {
					const c = Number(e);
					return Object(i.c)() ? r ? Object(s.b)(c) : new Intl.NumberFormat(t, o).format(c) : l(c, r, t)
				},
				u = (e, t = {}) => {
					const {
						locale: r = n.DEFAULT_LOCALE,
						pretty: s,
						formatOptions: d,
						displayConversion: u,
						forceDecimals: b,
						currency: f = t.currency || (t.type ? p(t.type) : c.c),
						type: y = t.type || (t.currency ? m(t.currency) : c.b.Real)
					} = t, O = Number(e), h = String(e);
					switch (y) {
						case c.b.Reddit: {
							const e = c.e[f],
								t = e ? e() : f;
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(O) + " " + t : l(O, s, r, t)
						}
						case c.b.Crypto: {
							if (s) {
								return Object(a.c)(h, u) + " " + f
							}
							const e = Number(Object(a.b)(h, u));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...d
							}).format(e) : l(e, s, r, f)
						}
						case c.b.Real:
						default: {
							const e = Number(Object(o.a)(h, b));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								notation: s ? "compact" : "standard",
								...d
							}).format(e) : l(e, s, r, f)
						}
					}
				},
				l = (e, t, r, n) => {
					return (t ? Object(s.b)(e) : e.toLocaleString(r)) + (n ? " " + n : "")
				},
				m = e => c.g.includes(e.toUpperCase()) ? c.b.Reddit : c.f.includes(e.toUpperCase()) ? c.b.Crypto : c.b.Real,
				p = e => {
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
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return x
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
				return D
			})), r.d(t, "e", (function() {
				return F
			})), r.d(t, "i", (function() {
				return q
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/lodash/omit.js"),
				c = r.n(o),
				s = r("./node_modules/uuid/v4.js"),
				a = r.n(s),
				i = r("./src/config.ts"),
				d = r("./src/reddit/constants/modals.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/lib/addQueryParams/index.ts"),
				m = r("./src/lib/makeActionCreator/index.ts"),
				p = r("./src/lib/sentry/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				f = r("./src/reddit/actions/gold/constants.ts"),
				y = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				O = r("./src/reddit/selectors/gold/productOffers.ts"),
				h = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				j = r("./src/reddit/models/Gold/ProductOffer.ts"),
				P = r("./src/reddit/actions/gold/powerups.ts"),
				w = r("./src/reddit/actions/modal.ts"),
				v = r("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				E = r("./src/reddit/models/Payments/index.ts");
			const _ = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				k = e => e.map(e => e.message).join(" : "),
				x = (e, t, r) => async (o, c, {
					gqlContext: s
				}) => {
					const i = a()(),
						d = await Object(v.f)(s(), i, e, t, r);
					if (d.ok) {
						const e = d.body,
							{
								errors: t,
								order: r
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(k(t));
						if (r) return r.id
					}
					throw new Error((() => n.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, C = (e, t, r, o, c, s) => async (i, d, {
					gqlContext: u
				}) => {
					var l;
					const m = d(),
						b = () => i(Object(y.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						}))),
						f = c === j.c.Premium,
						P = c === j.c.Powerups,
						w = {};
					if (P && s) w.powerUps = {
						subredditId: s,
						isAnonymous: r
					};
					else if (f) {
						const e = Object(O.d)(m, {
							provider: E.b.Stripe
						});
						if (!e) return;
						w.premium = {
							pricePackage: e
						}
					}
					let _, C, I = "";
					try {
						I = await i(x(t, o, w))
					} catch (N) {
						return p.c.captureException(N), void(N.message && i(Object(y.stripeApiError)(N.message)))
					}
					i(Object(y.stripeTokenPending)());
					const S = Object(h.y)(m);
					if (S || (_ = await i(Object(y.validateAndCreateStripeToken)(e)), C = Object(h.v)(m), _)) try {
						const t = a()(),
							n = S || C ? _ && C ? Object(v.h)(u(), t, I, _.id) : S ? Object(v.j)(u(), t, I, S) : null : Object(v.i)(u(), t, I, _.id),
							c = await n;
						if (!(null == c ? void 0 : c.ok)) return void b();
						const m = c.body.data.createEconPayment;
						if (null === (l = null == m ? void 0 : m.errors) || void 0 === l ? void 0 : l.length) return void i(Object(y.stripeApiError)(k(m.errors)));
						const {
							ok: p,
							payment: O,
							providerExecution: {
								paymentIntentClientSecret: h
							}
						} = m;
						if (p && O.status === v.a.ActionRequired) {
							const t = await e.confirmCardPayment(h),
								{
									error: r
								} = t;
							if (r) return void(r.message ? i(Object(y.stripeApiError)(r.message)) : b());
							let n;
							if (!(n = S ? await Object(v.e)(u(), a()(), O.id, S) : await Object(v.d)(u(), a()(), O.id, _.id, C)).ok) return void b();
							const o = n.body;
							if (!o.data.confirmEconPayment.ok || o.data.confirmEconPayment.payment.status !== v.a.Paid) return void b()
						} else if (p && O.status !== v.a.Paid) return void b();
						const j = Object(g.k)(d());
						j && (P && s ? i(D({
							subredditId: s,
							powerupsCount: o,
							user: j,
							isAnonymous: r
						})) : f && i(F({
							user: j
						})))
					} catch (N) {
						p.c.captureException(N), b()
					}
				}, I = (e, t, r, n, o) => async (c, s, {
					gqlContext: d
				}) => {
					var u;
					const m = s(),
						b = n === j.c.Premium,
						f = n === j.c.Powerups,
						h = {};
					if (f && o) h.powerUps = {
						subredditId: o,
						isAnonymous: t
					};
					else if (b) {
						const e = Object(O.d)(m, {
							provider: E.b.PayPal
						});
						if (!e) return null;
						h.premium = {
							pricePackage: e
						}
					}
					let P = "";
					try {
						P = await c(x(e, r, h))
					} catch (I) {
						return p.c.captureException(I), I.message && c(Object(y.paypalApiError)(I.message)), null
					}
					const w = i.a.redditUrl;
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
							i = a()(),
							m = await Object(v.g)(d(), i, P, e, n);
						if (m && m.ok) {
							const e = m.body.data.createEconPayment;
							if (null === (u = null == e ? void 0 : e.errors) || void 0 === u ? void 0 : u.length) return c(Object(y.paypalApiError)(k(e.errors))), null;
							const n = Object(g.k)(s());
							if (e.ok) {
								const {
									status: s
								} = e.payment;
								if (s === v.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === s && n) return o ? c(D({
									subredditId: o,
									powerupsCount: r,
									user: n,
									isAnonymous: t
								})) : b && c(F({
									user: n
								})), null
							}
						}
					} catch (I) {
						p.c.captureException(I)
					}
					return c(Object(y.paypalApiError)(_())), null
				}, S = (e, t) => async (r, n, {
					gqlContext: o
				}) => {
					var c;
					try {
						const n = a()(),
							s = await Object(v.c)(o(), n, e, t);
						if (s && s.ok) {
							const e = s.body.data.confirmEconPayment;
							if (null === (c = null == e ? void 0 : e.errors) || void 0 === c ? void 0 : c.length) return r(Object(y.paypalApiError)(k(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (s) {
						p.c.captureException(s)
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
							} = r.data.identity, o = n.map(e => c()({
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
						if (o && o.length) throw new Error(k(o))
					} catch (o) {
						p.c.captureException(o)
					}
				}, A = Object(m.a)(f.O), T = Object(m.a)(f.P), U = Object(m.a)(f.Q), L = e => async (t, r) => {
					await t(A(e)), t(Object(u.f)({
						kind: b.b.Error,
						duration: u.a,
						text: e
					}))
				}, G = (e, t, r) => async (o, c, {
					gqlContext: s
				}) => {
					o(T({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const c = await Object(v.b)(s(), e);
						if (c.ok) {
							const e = c.body,
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
					} catch (a) {
						p.c.captureException(a), o(L(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, B = Object(m.a)(f.S), D = e => async (t, r) => {
					t(B(e)), t(Object(P.m)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(w.g)(d.a.ECON_POWERUPS_PURCHASE)), t(Object(w.h)(d.a.ECON_POWERUPS_SUCCESS))
				}, R = Object(m.a)(f.W), F = ({
					user: e
				}) => async t => {
					await t(Object(P.o)(!0)), t(R({
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
				c = r("./src/lib/sentry/index.ts"),
				s = r("./src/reddit/actions/toaster.ts"),
				a = r("./src/reddit/models/Gold/ProductOffer.ts"),
				i = r("./src/reddit/models/Toast/index.ts"),
				d = r("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				l = r("./src/redditGQL/operations/GlobalProductOffers.json"),
				m = r("./src/redditGQL/operations/PremiumProductOfferSubscriptions.json"),
				p = r("./src/redditGQL/operations/ProductOffers.json");
			var b = r("./src/reddit/selectors/gold/productOffers.ts"),
				f = r("./src/reddit/actions/gold/constants.ts");
			const y = Object(o.a)(f.db),
				O = Object(o.a)(f.cb),
				h = Object(o.a)(f.bb),
				g = Object(o.a)(f.Z),
				j = Object(o.a)(f.Y),
				P = Object(o.a)(f.X),
				w = Object(o.a)(f.Eb),
				v = Object(o.a)(f.Cb),
				E = Object(o.a)(f.Db),
				_ = Object(o.a)(f.Hb),
				k = Object(o.a)(f.Gb),
				x = Object(o.a)(f.Fb),
				C = e => async t => {
					t(Object(s.f)({
						kind: i.b.Error,
						duration: s.a,
						text: e
					}))
				}, I = (e, t) => async r => {
					e === a.c.Premium ? r(N()) : t && r(S(e, t))
				}, S = (e, t) => async (r, o, {
					gqlContext: c
				}) => {
					const s = o();
					if (!Object(b.i)(s, {
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
							}))(c(), t, [e], !0);
							if (n.ok) {
								const e = n.body;
								if (e.errors && e.errors.length) throw new Error(e.errors[0].message);
								const o = e.data.subredditInfoById.productOffers ? e.data.subredditInfoById.productOffers.offers : [];
								return void(await r(O({
									productOffers: o || [],
									subredditId: t
								})))
							}
						} catch (a) {
							const e = n.fbt._("Something went wrong", null, {
								hk: "1IJNeH"
							});
							r(h(e)), r(C(e))
						}
					}
				}, N = () => async (e, t, {
					gqlContext: r
				}) => {
					var o, s;
					const i = a.c.Premium;
					e(g());
					try {
						const t = await ((e, t) => Object(u.a)(e, {
							...l,
							variables: {
								productTypes: t
							}
						}))(r(), [i]);
						if (t.ok) {
							const r = t.body;
							if (null === (o = r.errors) || void 0 === o ? void 0 : o.length) throw new Error(r.errors[0].message);
							return void e(j({
								productOffers: null !== (s = r.data.globalProductOffers.offers) && void 0 !== s ? s : []
							}))
						}
					} catch (d) {
						const t = d.message ? d.message : n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						c.c.captureMessage(t), e(P(t)), e(C(t))
					}
				}, M = () => async (e, t, {
					gqlContext: r
				}) => {
					var o, s, a;
					e(w());
					try {
						const t = await (e => Object(u.a)(e, m))(r());
						if (t.error) throw new Error(t.error.type);
						if (t.ok) {
							const r = t.body;
							if (null === (o = r.errors) || void 0 === o ? void 0 : o.length) throw new Error(r.errors[0].message);
							return void e(E({
								subscriptions: null !== (a = null === (s = r.data.identity) || void 0 === s ? void 0 : s.econSubscriptions) && void 0 !== a ? a : []
							}))
						}
					} catch (i) {
						c.c.captureException(i);
						const t = i.message ? i.message : n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						e(v(t)), e(C(t))
					}
				}, A = e => async (t, r, {
					gqlContext: o
				}) => {
					var c;
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
							t(x({
								orderId: e
							}))
						}
						return !0
					} catch (s) {
						const e = null !== (c = s.message) && void 0 !== c ? c : n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						});
						return t(k(e)), t(C(e)), !1
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
				return h
			})), r.d(t, "paypalApiError", (function() {
				return g
			})), r.d(t, "toggleRememberCard", (function() {
				return j
			})), r.d(t, "selectSavedCard", (function() {
				return P
			})), r.d(t, "_deleteSavedCard", (function() {
				return w
			})), r.d(t, "deleteSavedCard", (function() {
				return v
			})), r.d(t, "savedCardsPending", (function() {
				return E
			})), r.d(t, "savedCardsSuccess", (function() {
				return _
			})), r.d(t, "loadSavedCards", (function() {
				return k
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/sentry/index.ts"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/endpoints/gold/purchase.ts"),
				a = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = Object(c.a)(a.B),
				u = Object(c.a)(a.w),
				l = Object(c.a)(a.b),
				m = Object(c.a)(a.y),
				p = Object(c.a)(a.a),
				b = Object(c.a)(a.E),
				f = Object(c.a)(a.G),
				y = Object(c.a)(a.F),
				O = Object(c.a)(a.D),
				h = e => async (t, r) => {
					const o = r(),
						c = Object(i.h)(o),
						s = Object(i.l)(o),
						{
							token: a,
							error: d
						} = await e.createToken({
							name: c,
							address_zip: s
						});
					if (c.trim()) {
						if (!d && a) return a;
						t(y(d || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(p({
							message: e
						}))
					}
				}, g = Object(c.a)(a.x), j = Object(c.a)(a.H), P = Object(c.a)(a.C), w = Object(c.a)(a.g), v = e => async (t, r, {
					apiContext: n
				}) => {
					t(w(e));
					try {
						const t = await Object(s.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (c) {
						o.c.captureException(c)
					}
				}, E = Object(c.a)(a.z), _ = Object(c.a)(a.A), k = () => async (e, t, {
					apiContext: r
				}) => {
					e(E());
					try {
						const t = await Object(s.b)(r());
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
				return h
			})), r.d(t, "openPremiumPurchaseModal", (function() {
				return g
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
				c = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				a = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/formatApiError/index.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				u = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/constants/modals.ts"),
				m = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = r("./src/reddit/endpoints/gold/purchase.ts"),
				b = r("./src/reddit/helpers/correlationIdTracker.ts"),
				f = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				y = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const O = Object(c.a)(y.t),
				h = Object(c.a)(y.e),
				g = (e, t) => async r => {
					r(O(e)), r(Object(u.h)(l.a.ECON_PREMIUM_PURCHASE, t))
				}, j = () => async e => {
					e(Object(u.g)(l.a.ECON_PREMIUM_PURCHASE)), e(h())
				}, P = e => async (t, r, {
					apiContext: n
				}) => {
					const c = Object(f.a)(r()),
						s = (null == c ? void 0 : c.pennies) || a.xb,
						u = Object(b.c)(b.a.GoldPayment);
					t(Object(d.stripeTokenPending)());
					const l = await t(Object(d.validateAndCreateStripeToken)(e));
					if (l) try {
						const e = await Object(p.h)({
							context: n(),
							correlationId: u,
							pennies: s,
							token: l
						});
						if (e.error) {
							const r = Object(i.a)(e.error);
							t(Object(d.stripeApiError)(r))
						} else t(Object(d.paymentCompleted)({
							confirmed: !1
						}))
					} catch (m) {
						const e = Object(i.a)(m);
						t(Object(d.stripeApiError)(e))
					} else {
						const e = o.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						t(Object(d.stripeApiError)(e))
					}
				}, w = Object(c.a)(y.v), v = ({
					packageId: e,
					correlationId: t
				}, r) => async (o, c, {
					apiContext: a
				}) => {
					o(g({
						packageId: e,
						correlationId: t
					}, r));
					const u = Object(f.a)(c()),
						l = (null == u ? void 0 : u.paypalButtonId) || n.a.paypal.buttons.premium;
					if (l) try {
						const e = await Object(m.f)({
							buttonId: l,
							context: a(),
							correlationId: t
						});
						if (e.error) {
							const t = Object(i.a)(e.error);
							o(Object(d.paypalApiError)(t))
						} else o(w(e))
					} catch (p) {
						const e = Object(i.a)(p);
						o(Object(d.paypalApiError)(e))
					} else s.c.captureMessage("No Premium packages available on Premium purchase modal")
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
				c = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				a = r("./src/reddit/endpoints/gold/productCatalog/index.ts"),
				i = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/models/Toast/index.ts"),
				l = r("./src/reddit/actions/post.ts"),
				m = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const p = Object(c.a)(m.j),
				b = Object(c.a)(m.k),
				f = Object(c.a)(m.i),
				y = e => async (t, r, {
					apiContext: c
				}) => {
					t(p());
					const d = r(),
						u = Object(i.K)(d);
					try {
						const r = !u,
							n = await Object(a.b)({
								context: c(),
								correlationId: e,
								shouldUseCurrentOrigin: r
							});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const o = n.body;
						t(b(o))
					} catch (l) {
						Object(o.b)() || console.error(l), s.c.captureException(l);
						const e = n.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(f(e))
					}
				}, O = Object(c.a)(m.m), h = Object(c.a)(m.n), g = Object(c.a)(m.l), j = (e, t) => async (r, c, {
					apiContext: i
				}) => {
					r(O());
					try {
						const n = await Object(a.c)({
							awardId: e,
							context: i(),
							correlationId: t
						});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const o = n.body;
						if (!o.coinPackages || !o.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						r(h(o))
					} catch (d) {
						Object(o.b)() || console.error(d), s.c.captureException(d);
						const e = n.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						r(g(e))
					}
				}, P = Object(c.a)(m.h), w = () => async (e, t, {
					gqlContext: r
				}) => {
					var c, i;
					try {
						const t = await Object(a.a)(r());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (c = r.errors) || void 0 === c ? void 0 : c.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (i = r.awards) || void 0 === i ? void 0 : i.length)) throw new Error("Got empty award list on free award offer claim");
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
						})), s.c.captureException(m)
					}
				}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less": function(e, t, r) {
			e.exports = {
				closeButton: "zV6beQLWIuWX5Q9SvWfDR",
				highContrast: "_19iGSTvU7FOqhpDpMWKtDr",
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
				c = r.n(o),
				s = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				i = r.n(a);
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js"), u = ({
				className: e,
				highContrast: t,
				onClick: r
			}) => c.a.createElement("button", {
				onClick: r,
				className: Object(n.a)(i.a.closeButton, {
					[i.a.highContrast]: t
				}, e),
				"aria-label": d._("Close", null, {
					hk: "3Qarlp"
				})
			}, c.a.createElement(s.b, {
				className: i.a.closeIcon
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
				return V
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				c = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/higherOrderComponents/asModal/index.tsx"),
				a = r("./src/reddit/actions/modal.ts"),
				i = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				d = r("./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx"),
				u = r("./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx"),
				l = r("./src/reddit/components/PremiumPurchaseModal/Loader.tsx"),
				m = r("./src/reddit/constants/modals.ts"),
				p = r("./src/reddit/helpers/trackers/powerups.ts"),
				b = r("./src/reddit/hooks/useTracking.ts"),
				f = r("./src/reddit/selectors/platform.ts"),
				y = r("./src/config.ts"),
				O = r("./src/lib/localizeCurrency/index.ts"),
				h = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				g = r("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				j = r("./src/reddit/controls/Button/index.tsx"),
				P = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				w = r("./src/reddit/hooks/useLocale.ts"),
				v = r("./src/reddit/actions/gold/productOffers.ts"),
				E = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				_ = r("./src/reddit/helpers/correlationIdTracker.ts"),
				k = r("./src/reddit/models/Gold/Premium/index.ts"),
				x = r("./src/reddit/models/Gold/ProductOffer.ts"),
				C = r("./src/reddit/selectors/gold/productOffers.ts"),
				I = r("./src/reddit/selectors/gold/purchaseCatalog.ts");
			var S = r("./src/reddit/pages/Premium/BenefitsSection/constants.ts"),
				N = r("./src/lib/classNames/index.ts"),
				M = r("./src/reddit/icons/fonts/index.tsx"),
				A = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/checklist.m.less"),
				T = r.n(A);
			const U = ({
					className: e,
					items: t
				}) => o.a.createElement("div", {
					className: e
				}, t.map(e => o.a.createElement(L, {
					key: e,
					className: T.a.checklistItem,
					item: e
				}))),
				L = ({
					className: e,
					item: t
				}) => o.a.createElement("div", {
					className: Object(N.a)(T.a.checklistItemRow, e)
				}, o.a.createElement("div", {
					className: T.a.iconBackground
				}, o.a.createElement(M.a, {
					className: T.a.icon,
					name: "checkmark_fill"
				})), o.a.createElement("span", {
					className: T.a.checklistItemText
				}, t));
			var G = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/offerCard.m.less"),
				B = r.n(G);
			const D = ({
				className: e,
				body: t,
				buttons: r,
				iconUrl: n,
				title: c
			}) => o.a.createElement("div", {
				className: Object(N.a)(e, B.a.container)
			}, o.a.createElement("div", {
				className: B.a.icon,
				style: {
					backgroundImage: `url('${n}')`
				}
			}), o.a.createElement("h3", {
				className: B.a.title
			}, c), t, o.a.createElement("div", {
				className: B.a.buttons
			}, r));
			var R = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/offers.m.less"),
				F = r.n(R);
			const {
				fbt: q
			} = r("./node_modules/fbt/lib/FbtPublic.js"), Q = ["premium-powerups"], W = ["premium-powerups", "premium-ad-free", "premium-avatars", "premium-monthly-coins"], H = ({
				subredditId: e
			}) => {
				const t = Object(c.d)(),
					r = Object(w.a)(),
					s = Object(b.a)(),
					i = function() {
						var e, t;
						const r = Object(c.d)(),
							o = Object(c.e)(I.l),
							s = Object(c.e)(C.e),
							a = Object(c.e)(I.o);
						Object(n.useEffect)(() => {
							o.length || a || r(Object(E.b)()), s || r(Object(v.c)(x.c.Premium))
						});
						const i = o.find(e => e.frequency === k.c.Monthly),
							d = o.find(e => e.frequency === k.c.Yearly);
						if (!i || !d) return null;
						const u = null === (e = Object(C.j)(s, x.b.Month)) || void 0 === e ? void 0 : e[0],
							l = null === (t = Object(C.j)(s, x.b.Year)) || void 0 === t ? void 0 : t[0];
						return u && l ? {
							correlationId: Object(_.d)(_.a.GoldPayment, !1),
							premiumMonthly: {
								price: u.price,
								packageId: i.mobileId
							},
							premiumAnnual: {
								price: l.price,
								packageId: d.mobileId,
								bonusPct: d.bonusPct
							}
						} : null
					}(),
					d = Object(c.e)(t => Object(C.a)(t, {
						subredditId: e
					})),
					u = Object(c.e)(I.j),
					l = Q.map(e => S.d[e]());
				return o.a.createElement("div", {
					className: F.a.container
				}, i && d ? o.a.createElement(o.a.Fragment, null, o.a.createElement(D, {
					title: q._("Powerups Subscription", null, {
						hk: "4zbTSR"
					}),
					iconUrl: `${y.a.assetPath}/img/gold/premium-marketing/benefits-icons/premium-powerups.png`,
					body: o.a.createElement(U, {
						items: l
					}),
					buttons: d && o.a.createElement(j.t, {
						className: F.a.powerupsButton,
						priority: j.c.Secondary,
						onClick: () => {
							s(Object(p.w)()), t(Object(a.h)(m.a.ECON_POWERUPS_PURCHASE))
						},
						isFullWidth: !0
					}, q._("{powerupPrice}/mo", [q._param("powerupPrice", Object(O.b)(d, {
						locale: r
					}))], {
						hk: "1ApJir"
					}))
				}), o.a.createElement(D, {
					title: q._("Reddit Premium", null, {
						hk: "S3DXw"
					}),
					iconUrl: `${y.a.assetPath}/img/gold/premium-marketing/benefits-icons/premium-crest.png`,
					body: o.a.createElement(J, {
						premiumMonthlyCoins: u
					}),
					buttons: i && o.a.createElement(Y, {
						premiumMonthly: i.premiumMonthly,
						premiumAnnual: i.premiumAnnual,
						onClickPrice: (e, r) => {
							s(Object(p.x)(r)), t(Object(g.openWithBlob)({
								correlationId: i.correlationId,
								packageId: e
							}, {
								isPowerupsPremiumPurchase: !0
							})), t(Object(h.i)({
								renewInterval: r
							}))
						},
						locale: r
					})
				})) : o.a.createElement(P.a, {
					className: F.a.loadingIcon,
					sizePx: 40
				}))
			}, J = ({
				premiumMonthlyCoins: e
			}) => {
				const t = W.map(t => S.d[t]({
					periodicalCoins: e
				}));
				return o.a.createElement("div", null, o.a.createElement(U, {
					items: t
				}), o.a.createElement("div", {
					className: F.a.andSoMuchMore
				}, q._("And so much more!", null, {
					hk: "oMd"
				})))
			}, Y = ({
				premiumMonthly: e,
				premiumAnnual: t,
				locale: r,
				onClickPrice: n
			}) => o.a.createElement("div", {
				className: F.a.premiumButtons
			}, o.a.createElement(j.t, {
				className: F.a.powerupsButton,
				priority: j.c.Secondary,
				onClick: () => n(e.packageId, x.b.Month),
				isFullWidth: !0
			}, q._("{premiumMonthlyPrice}/mo", [q._param("premiumMonthlyPrice", Object(O.b)(e.price, {
				locale: r
			}))], {
				hk: "4i6SO9"
			})), o.a.createElement(j.k, {
				className: F.a.powerupsButton,
				onClick: () => n(t.packageId, x.b.Year),
				isFullWidth: !0
			}, q._("{premiumAnnualPrice}/yr", [q._param("premiumAnnualPrice", Object(O.b)(t.price, {
				locale: r
			}))], {
				hk: "2YAbPf"
			})));
			var z = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.m.less"),
				Z = r.n(z);
			const {
				fbt: K
			} = r("./node_modules/fbt/lib/FbtPublic.js"), V = () => {
				const e = Object(c.e)(f.s),
					t = Object(c.d)(),
					r = Object(b.a)();
				Object(n.useEffect)(() => {
					e && (r(Object(p.y)()), Object(l.a)(), Object(d.a)())
				}, []);
				const s = () => t(Object(a.g)(m.a.ECON_POWERUPS_PREMIUM_UPSELL));
				return e ? o.a.createElement(o.a.Fragment, null, o.a.createElement(i.a, {
					onClick: s,
					highContrast: !0
				}), o.a.createElement("div", {
					className: Z.a.container
				}, o.a.createElement("h1", {
					className: Z.a.title
				}, K._("Get more with Premium!", null, {
					hk: "YXIbY"
				})), o.a.createElement(H, {
					subredditId: e
				}), o.a.createElement("div", {
					className: Z.a.footer
				}, K._("Subscriptions automatically renew.", null, {
					hk: "133vve"
				})), o.a.createElement(u.a, {
					space: u.b.MODAL
				}))) : (s(), null)
			};
			t.default = Object(s.a)(V)
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
		"./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less": function(e, t, r) {
			e.exports = {
				background: "XVwx9Y9K0HdxTdtF2BPW0",
				isModal: "UtfYccpr1yXmbqvp5V4xO",
				isInFeedUnit: "_2hif8-1kZa1knghBW2qHUl",
				colorBlockCorner: "_3cb-_dMe8EWVymoglw4OyK",
				isNightmodeOn: "_2aTpeK-XP6gqT5wf5i532u",
				colorBlockThrough: "_1oWuVmyyrm-f2cYxR7EV9F",
				circle: "NsyhNpI3rn1O5dhzAooci",
				circleStriped: "_3wLmFEQT-lNFxQtTZSBM-A",
				circleDotted: "_2Y6YoeMfdGRReebFzEkb1a",
				circleOrangeHollow: "_2MNXM_uf6rOUZgaO42Wnl0",
				circleGreenHollow: "_1ThCjjX1kI9WTSqGhdfbEY",
				circleYellowHollow: "_2tVCe8UCeeIcsfKn_uIZKT"
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return m
			}));
			var n, o = r("./src/config.ts"),
				c = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/reddit/selectors/user.ts"),
				u = r("./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less"),
				l = r.n(u);
			! function(e) {
				e[e.SIDEBAR = 0] = "SIDEBAR", e[e.MODAL = 1] = "MODAL", e[e.INFEED_UNIT = 2] = "INFEED_UNIT"
			}(n || (n = {}));
			const m = ({
				space: e
			}) => {
				const t = Object(i.e)(d.X),
					r = e === n.MODAL,
					s = e === n.INFEED_UNIT;
				return a.a.createElement("div", {
					className: Object(c.a)(l.a.background, {
						[l.a.isNightmodeOn]: t,
						[l.a.isModal]: r,
						[l.a.isInFeedUnit]: s
					})
				}, a.a.createElement("div", {
					className: l.a.colorBlockCorner
				}), a.a.createElement("div", {
					className: l.a.colorBlockThrough
				}), a.a.createElement("div", {
					className: l.a.circleStriped,
					style: {
						backgroundImage: t ? `url(${o.a.assetPath}/img/powerups/linecircle-lightblue.png)` : `url(${o.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), a.a.createElement("div", {
					className: l.a.circleOrangeHollow
				}), a.a.createElement("div", {
					className: l.a.circleDotted,
					style: {
						backgroundImage: `url(${o.a.assetPath}/img/powerups/dotcircle.png)`
					}
				}), a.a.createElement("div", {
					className: l.a.circleGreenHollow
				}), a.a.createElement("div", {
					className: l.a.circleYellowHollow
				}))
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
				c = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = r.n(s);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => o.a.createElement("div", {
				className: Object(c.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
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
				c = r("./src/lib/omitHeaders/index.ts"),
				s = r("./src/reddit/constants/headers.ts"),
				a = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
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
					u = `${t.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					l = Object(a.a)(u);
				return Object(o.a)(Object(c.a)(t, [s.a]), {
					method: n.ib.POST,
					endpoint: l,
					data: d
				}).then(i.c)
			}, u = async ({
				context: e,
				coins: t,
				pennies: r,
				correlationId: a
			}) => {
				const d = {
					coins: t,
					pennies: r,
					correlation_id: a
				};
				return Object(o.a)(Object(c.a)(e, [s.a]), {
					method: n.ib.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(i.c)
			}, l = async ({
				context: e,
				awardId: t,
				pennies: r,
				thingId: a,
				correlationId: d
			}) => {
				const u = {
					award_id: t,
					correlation_id: d,
					pennies: r,
					thing_id: a
				};
				return Object(o.a)(Object(c.a)(e, [s.a]), {
					method: n.ib.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: u
				}).then(i.c)
			}, m = async ({
				context: e,
				offerContext: t,
				orderId: r,
				coins: a,
				pennies: d,
				correlationId: u
			}) => {
				const l = {
					offer_context: t,
					order_id: r,
					coins: a,
					pennies: d,
					correlation_id: u
				};
				return Object(o.a)(Object(c.a)(e, [s.a]), {
					method: n.ib.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: l
				}).then(i.c)
			}, p = async ({
				awardId: e,
				context: t,
				coins: r,
				correlationId: a,
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
					correlation_id: a,
					is_anonymous: d,
					message: u,
					offer_context: l,
					order_id: m,
					pennies: p,
					thing_id: b
				};
				return Object(o.a)(Object(c.a)(t, [s.a]), {
					method: n.ib.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: f
				}).then(i.c)
			}, b = async ({
				awardId: e,
				context: t,
				correlationId: r,
				isAnonymous: a,
				message: d,
				orderId: u,
				thingId: l
			}) => {
				const m = {
					award_id: e,
					correlation_id: r,
					is_anonymous: a,
					message: d,
					order_id: u,
					thing_id: l
				};
				return Object(o.a)(Object(c.a)(t, [s.a]), {
					method: n.ib.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: m
				}).then(i.c)
			}
		},
		"./src/reddit/endpoints/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return O
			})), r.d(t, "a", (function() {
				return h
			})), r.d(t, "i", (function() {
				return g
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "j", (function() {
				return P
			})), r.d(t, "g", (function() {
				return w
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "d", (function() {
				return _
			})), r.d(t, "b", (function() {
				return k
			})), r.d(t, "l", (function() {
				return x
			})), r.d(t, "k", (function() {
				return C
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				o = r.n(n),
				c = r("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				s = r("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				a = r("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				i = r("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				d = r("./src/redditGQL/operations/CreateEconOrder.json"),
				u = r("./src/redditGQL/operations/CreatePaypalPayment.json"),
				l = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				m = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				p = r("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				b = r("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				f = r("./src/redditGQL/operations/UserSavedStripeCards.json"),
				y = r("./src/lib/makeGqlRequest/index.ts");
			const O = (e, t, r, n, c) => {
				const {
					premium: s,
					...a
				} = c, i = (null == s ? void 0 : s.pricePackage) || r.pricePackages[0], u = new o.a(i.price).multipliedBy(n).toFixed();
				return Object(y.a)(e, {
					...d,
					variables: {
						input: {
							nonce: t,
							productId: r.id,
							productVersion: r.version,
							pricePackageId: i.id,
							currency: i.currency,
							price: u,
							productsCount: n.toString(),
							...a
						}
					}
				})
			};
			var h;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(h || (h = {}));
			const g = (e, t, r, n) => Object(y.a)(e, {
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
					...s,
					variables: {
						nonce: t,
						paymentId: r,
						token: n
					}
				}),
				E = (e, t, r, n) => Object(y.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: r,
						cardId: n
					}
				}),
				_ = (e, t, r, n, o) => Object(y.a)(e, {
					...a,
					variables: {
						nonce: t,
						paymentId: r,
						token: n,
						saveCard: o
					}
				}),
				k = (e, t) => Object(y.a)(e, {
					...c,
					variables: {
						orderId: t
					}
				}),
				x = e => Object(y.a)(e, {
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
				return c
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				o = r("./src/lib/prettyPrintNumber/index.ts");

			function c(e, t) {
				const r = new n.BigNumber(e),
					o = new n.BigNumber(t || 1);
				return r.dividedToIntegerBy(o).toString()
			}

			function s(e, t) {
				return Object(o.b)(parseInt(c(e, t), 10))
			}

			function a(e, t) {
				const r = new n.BigNumber(e),
					o = new n.BigNumber(t || 1);
				return r.multipliedBy(o).toFixed(0)
			}
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "e", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return i
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
				c = (e, t = !1) => {
					const r = [];
					for (const n in o) {
						const c = o[n];
						(c.priceInCoins <= e || t) && r.push(c)
					}
					return r
				},
				s = e => n.fbt._({
					"*": "{number of months} months {number of coins} Coins",
					_1: "1 month {number of coins} Coins"
				}, [n.fbt._plural(e.monthsOfPremium, "number of months"), n.fbt._param("number of coins", e.priceInCoins.toLocaleString())], {
					hk: "2bar0C"
				}),
				a = "com.reddit.premium_1";
			var i;
			! function(e) {
				e.Monthly = "monthly", e.Yearly = "yearly"
			}(i || (i = {}))
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, o, c, s;
			r.d(t, "b", (function() {
					return o
				})), r.d(t, "a", (function() {
					return c
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(o || (o = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(c || (c = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(s || (s = {}))
		},
		"./src/reddit/pages/Premium/BenefitsSection/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return o
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "c", (function() {
				return i
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			const o = [{
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
				}],
				c = {
					key: "premium-more",
					telemetryTag: "more_benefits"
				},
				s = {
					key: "premium-bonus",
					asterisk: !0,
					telemetryTag: "coin_bonus"
				},
				a = {
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
				i = {
					"premium-avatars": () => n.fbt._("Outfit your avatar with the best gear and accessories", null, {
						hk: "2HjLMS"
					}),
					"premium-powerups": () => n.fbt._("Help select communities unlock perks", null, {
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
				}
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return i
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
				return h
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/makeProductOfferKey/index.ts"),
				c = r("./src/reddit/models/Gold/ProductOffer.ts"),
				s = r("./src/reddit/models/Payments/index.ts"),
				a = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				d = (e, {
					subredditId: t,
					type: r
				}) => {
					var n, c, s;
					return t ? e.subreddits.productOffers[Object(o.a)(r, t)] : null === (s = null === (c = null === (n = e.features) || void 0 === n ? void 0 : n.goldPurchase) || void 0 === c ? void 0 : c.productOffers) || void 0 === s ? void 0 : s[Object(o.a)(r)]
				},
				u = (e, {
					subredditId: t
				}) => {
					const r = d(e, {
						subredditId: t,
						type: c.c.Powerups
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
						type: c.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				p = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === s.b.PayPal || e[0] === s.b.Stripe)(e.requiredPaymentProviders)) : null,
				b = Object(n.a)(m, a.p, (e, t) => p(e, t) || null),
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
				h = Object(n.a)(O, e => Boolean(null == e ? void 0 : e.isCanceled))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PowerupsPremiumUpsellModal.598c92fb5ee34b8c601f.js.map