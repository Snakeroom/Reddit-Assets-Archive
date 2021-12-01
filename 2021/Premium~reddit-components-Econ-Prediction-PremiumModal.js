// https://www.redditstatic.com/desktop2x/Premium~reddit-components-Econ-Prediction-PremiumModal.c530583b607e2ff31c32.js
// Retrieved at 12/1/2021, 12:30:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Premium~reddit-components-Econ-Prediction-PremiumModal"], {
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./src/lib/currency/cleanNumber/index.ts");

			function a(e, t) {
				const r = Object(n.a)(e),
					a = parseInt(r) / 100;
				return Math.floor(a) !== a || t ? a.toFixed(2) : String(a)
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
				return i
			})), r.d(t, "d", (function() {
				return s
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "e", (function() {
				return l
			}));
			var n, a = r("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(n || (n = {}));
			const i = "USD",
				s = "ETH",
				o = "COINS",
				c = [s, "BTC"],
				d = [o, "SUBREDDIT_POINTS", "GAME_TOKENS"],
				l = {
					COINS: () => a.fbt._("Coins", null, {
						hk: "1T2Y4p"
					}),
					SUBREDDIT_POINTS: () => a.fbt._("Subreddit points", null, {
						hk: "1ytOO3"
					}),
					GAME_TOKENS: () => a.fbt._("Game tokens", null, {
						hk: "16BUrU"
					})
				}
		},
		"./src/lib/loadRedditAdsPixel.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/lib/sentry/index.ts");

			function a() {
				! function(e, t) {
					if (!e.rdt) {
						var r = e.rdt = function() {
							r.sendEvent ? r.sendEvent.apply(r, arguments) : r.callQueue.push(arguments)
						};
						r.callQueue = [];
						var n = t.createElement("script");
						n.src = "https://www.redditstatic.com/ads/pixel.js", n.async = !0;
						var a = t.getElementsByTagName("script")[0];
						a.parentNode.insertBefore(n, a)
					}
				}(window, document), rdt("init", "t2_2q2gwo2t"), rdt("track", "PageVisit")
			}
			const i = () => {
				try {
					rdt("track", "Purchase")
				} catch (e) {
					n.c.captureMessage('Attempted to fire RedditAds "Purchase" pixel, but global "rdt" object was unavailable')
				}
			}
		},
		"./src/lib/localizeCurrency/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			}));
			var n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				a = r("./src/lib/currency/centsToDollars/index.ts"),
				i = r("./src/lib/currency/currencies.ts"),
				s = r("./src/lib/prettyPrintNumber/index.ts"),
				o = r("./src/reddit/helpers/governance/tokens.ts"),
				c = r("./src/reddit/constants/intlSupport.ts");
			const d = (e, {
					locale: t = n.DEFAULT_LOCALE,
					pretty: r,
					formatOptions: a
				} = {}) => {
					const i = Number(e);
					return Object(c.c)() ? r ? Object(s.b)(i) : new Intl.NumberFormat(t, a).format(i) : u(i, r, t)
				},
				l = (e, t = {}) => {
					const {
						locale: r = n.DEFAULT_LOCALE,
						pretty: s,
						formatOptions: d,
						displayConversion: l,
						forceDecimals: b,
						currency: f = t.currency || (t.type ? p(t.type) : i.c),
						type: h = t.type || (t.currency ? m(t.currency) : i.b.Real)
					} = t, g = Number(e), y = String(e);
					switch (h) {
						case i.b.Reddit: {
							const e = i.e[f],
								t = e ? e() : f;
							return Object(c.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(g) + " " + t : u(g, s, r, t)
						}
						case i.b.Crypto: {
							if (s) {
								return Object(o.c)(y, l) + " " + f
							}
							const e = Number(Object(o.b)(y, l));
							return Object(c.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...d
							}).format(e) : u(e, s, r, f)
						}
						case i.b.Real:
						default: {
							const e = Number(Object(a.a)(y, b));
							return Object(c.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								notation: s ? "compact" : "standard",
								...d
							}).format(e) : u(e, s, r, f)
						}
					}
				},
				u = (e, t, r, n) => {
					return (t ? Object(s.b)(e) : e.toLocaleString(r)) + (n ? " " + n : "")
				},
				m = e => i.g.includes(e.toUpperCase()) ? i.b.Reddit : i.f.includes(e.toUpperCase()) ? i.b.Crypto : i.b.Real,
				p = e => {
					switch (e) {
						case i.b.Crypto:
							return i.d;
						case i.b.Reddit:
							return i.a;
						case i.b.Real:
						default:
							return i.c
					}
				}
		},
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return w
			})), r.d(t, "k", (function() {
				return I
			})), r.d(t, "h", (function() {
				return N
			})), r.d(t, "g", (function() {
				return S
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "c", (function() {
				return M
			})), r.d(t, "a", (function() {
				return R
			})), r.d(t, "i", (function() {
				return D
			})), r.d(t, "e", (function() {
				return q
			})), r.d(t, "j", (function() {
				return Q
			})), r.d(t, "f", (function() {
				return H
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/omit.js"),
				i = r.n(a),
				s = r("./node_modules/uuid/v4.js"),
				o = r.n(s),
				c = r("./src/config.ts"),
				d = r("./src/reddit/constants/modals.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/lib/addQueryParams/index.ts"),
				m = r("./src/lib/makeActionCreator/index.ts"),
				p = r("./src/lib/sentry/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				f = r("./src/reddit/actions/gold/constants.ts"),
				h = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				g = r("./src/reddit/selectors/gold/productOffers.ts"),
				y = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				j = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/models/Gold/ProductOffer.ts"),
				k = r("./src/reddit/actions/gold/powerups.ts"),
				P = r("./src/reddit/actions/modal.ts"),
				v = r("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				_ = r("./src/reddit/models/Payments/index.ts");
			const E = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				x = e => e.map(e => e.message).join(" : "),
				w = (e, t, r) => async (a, i, {
					gqlContext: s
				}) => {
					const c = o()(),
						d = await Object(v.f)(s(), c, e, t, r);
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
				}, C = Object(h.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
					hk: "2LgB2E"
				})), I = (e, t, r, n, a, i) => async (s, c, {
					gqlContext: d
				}) => {
					var l;
					const u = c(),
						m = a === O.c.Premium,
						b = a === O.c.Powerups,
						f = {};
					if (b && i) f.powerUps = {
						subredditId: i,
						isAnonymous: r
					};
					else if (m) {
						const e = Object(g.d)(u, {
							provider: _.b.Stripe
						});
						if (!e) return;
						f.premium = {
							pricePackage: e
						}
					}
					let k, P, E = "";
					try {
						E = await s(w(t, n, f))
					} catch (N) {
						return p.c.captureException(N), void(N.message && s(Object(h.stripeApiError)(N.message)))
					}
					s(Object(h.stripeTokenPending)());
					const I = Object(y.y)(u);
					if (I || (k = await s(Object(h.validateAndCreateStripeToken)(e)), P = Object(y.v)(u), k)) try {
						const t = o()(),
							a = I || P ? k && P ? Object(v.h)(d(), t, E, k.id) : I ? Object(v.j)(d(), t, E, I) : null : Object(v.i)(d(), t, E, k.id),
							u = await a;
						if (!(null == u ? void 0 : u.ok)) return void s(C);
						const p = u.body.data.createEconPayment;
						if (null === (l = null == p ? void 0 : p.errors) || void 0 === l ? void 0 : l.length) return void s(Object(h.stripeApiError)(x(p.errors)));
						const {
							ok: f,
							payment: g,
							providerExecution: {
								paymentIntentClientSecret: y
							}
						} = p;
						if (f && g.status === v.a.ActionRequired) {
							const t = await e.confirmCardPayment(y),
								{
									error: r
								} = t;
							if (r) return ((e, t) => {
								var r, n;
								(null === (n = null === (r = e.payment_intent) || void 0 === r ? void 0 : r.last_payment_error) || void 0 === n ? void 0 : n.message) ? t(Object(h.stripeApiError)(e.payment_intent.last_payment_error.message)): e.message ? t(Object(h.stripeApiError)(e.message)) : t(C)
							})(r, s);
							let n;
							if (!(n = I ? await Object(v.e)(d(), o()(), g.id, I) : await Object(v.d)(d(), o()(), g.id, k.id, P)).ok) return void s(C);
							const a = n.body;
							if (!a.data.confirmEconPayment.ok || a.data.confirmEconPayment.payment.status !== v.a.Paid) return void s(C)
						} else if (f && g.status !== v.a.Paid) return void s(C);
						const O = Object(j.k)(c());
						O && (b && i ? s(D({
							subredditId: i,
							powerupsCount: n,
							user: O,
							isAnonymous: r
						})) : m && s(q({
							user: O
						})))
					} catch (N) {
						p.c.captureException(N), s(C)
					}
				}, N = (e, t, r, n, a) => async (i, s, {
					gqlContext: d
				}) => {
					var l;
					const m = s(),
						b = n === O.c.Premium,
						f = n === O.c.Powerups,
						y = {};
					if (f && a) y.powerUps = {
						subredditId: a,
						isAnonymous: t
					};
					else if (b) {
						const e = Object(g.d)(m, {
							provider: _.b.PayPal
						});
						if (!e) return null;
						y.premium = {
							pricePackage: e
						}
					}
					let k = "";
					try {
						k = await i(w(e, r, y))
					} catch (I) {
						return p.c.captureException(I), I.message && i(Object(h.paypalApiError)(I.message)), null
					}
					const P = c.a.redditUrl;
					let C = {
						_o: P,
						o: k,
						pt: n
					};
					f && a && (C = {
						...C,
						r: a
					});
					try {
						const e = Object(u.a)(`${P}/framedModal/paypal-finish`, {
								...C,
								s: !0
							}),
							n = Object(u.a)(`${P}/framedModal/paypal-finish`, C),
							c = o()(),
							m = await Object(v.g)(d(), c, k, e, n);
						if (m && m.ok) {
							const e = m.body.data.createEconPayment;
							if (null === (l = null == e ? void 0 : e.errors) || void 0 === l ? void 0 : l.length) return i(Object(h.paypalApiError)(x(e.errors))), null;
							const n = Object(j.k)(s());
							if (e.ok) {
								const {
									status: s
								} = e.payment;
								if (s === v.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === s && n) return a ? i(D({
									subredditId: a,
									powerupsCount: r,
									user: n,
									isAnonymous: t
								})) : b && i(q({
									user: n
								})), null
							}
						}
					} catch (I) {
						p.c.captureException(I)
					}
					return i(Object(h.paypalApiError)(E())), null
				}, S = (e, t) => async (r, n, {
					gqlContext: a
				}) => {
					var i;
					try {
						const n = o()(),
							s = await Object(v.c)(a(), n, e, t);
						if (s && s.ok) {
							const e = s.body.data.confirmEconPayment;
							if (null === (i = null == e ? void 0 : e.errors) || void 0 === i ? void 0 : i.length) return r(Object(h.paypalApiError)(x(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (s) {
						p.c.captureException(s)
					}
					return r(Object(h.paypalApiError)(E())), !1
				}, A = () => async (e, t, {
					gqlContext: r
				}) => {
					e(Object(h.savedCardsPending)());
					try {
						const t = await Object(v.l)(r());
						if (t.ok) {
							const r = t.body;
							r.errors && r.errors.length && e(Object(h.stripeApiError)(r.errors[0].message));
							const {
								savedStripeCards: n
							} = r.data.identity, a = n.map(e => i()({
								...e,
								cardId: e.id
							}, "id"));
							e(Object(h.savedCardsSuccess)(a)), a[0] && e(Object(h.selectSavedCard)(a[0].cardId))
						} else e(Object(h.stripeApiError)(n.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (a) {
						p.c.captureException(a), e(Object(h.savedCardsSuccess)([]))
					}
				}, M = e => async (t, r, {
					gqlContext: n
				}) => {
					t(Object(h._deleteSavedCard)(e));
					try {
						const t = await Object(v.k)(n(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: a
							} = r.data.deleteEconPaymentMethod;
						if (a && a.length) throw new Error(x(a))
					} catch (a) {
						p.c.captureException(a)
					}
				}, T = Object(m.a)(f.O), B = Object(m.a)(f.P), L = Object(m.a)(f.Q), G = e => async (t, r) => {
					await t(T(e)), t(Object(l.f)({
						kind: b.b.Error,
						duration: l.a,
						text: e
					}))
				}, R = (e, t, r) => async (a, i, {
					gqlContext: s
				}) => {
					a(B({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const i = await Object(v.b)(s(), e);
						if (i.ok) {
							const e = i.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void a(G(n[0].message));
							a(L({
								subredditId: t,
								allocatedAt: r
							}))
						} else a(G(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (o) {
						p.c.captureException(o), a(G(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, U = Object(m.a)(f.S), D = e => async (t, r) => {
					t(U(e)), t(Object(k.m)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(P.g)(d.a.ECON_POWERUPS_PURCHASE)), t(Object(P.h)(d.a.ECON_POWERUPS_SUCCESS))
				}, F = Object(m.a)(f.W), q = ({
					user: e
				}) => async t => {
					await t(Object(k.o)(!0)), t(F({
						user: e
					}))
				}, Q = Object(m.a)(f.ab), H = () => async e => e(Object(P.h)(d.a.ECON_PREMIUM_FEEDBACK))
		},
		"./src/reddit/actions/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return I
			})), r.d(t, "c", (function() {
				return A
			})), r.d(t, "b", (function() {
				return M
			})), r.d(t, "a", (function() {
				return T
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				s = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/reddit/models/Gold/ProductOffer.ts"),
				c = r("./src/reddit/models/Toast/index.ts"),
				d = r("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				l = r("./src/lib/makeGqlRequest/index.ts"),
				u = r("./src/redditGQL/operations/GlobalProductOffers.json"),
				m = r("./src/redditGQL/operations/PremiumProductOfferSubscriptions.json"),
				p = r("./src/redditGQL/operations/ProductOffers.json");
			var b = r("./src/reddit/selectors/gold/productOffers.ts"),
				f = r("./src/reddit/actions/gold/constants.ts");
			const h = Object(a.a)(f.db),
				g = Object(a.a)(f.cb),
				y = Object(a.a)(f.bb),
				j = Object(a.a)(f.Z),
				O = Object(a.a)(f.Y),
				k = Object(a.a)(f.X),
				P = Object(a.a)(f.Eb),
				v = Object(a.a)(f.Cb),
				_ = Object(a.a)(f.Db),
				E = Object(a.a)(f.Hb),
				x = Object(a.a)(f.Gb),
				w = Object(a.a)(f.Fb),
				C = e => async t => {
					t(Object(s.f)({
						kind: c.b.Error,
						duration: s.a,
						text: e
					}))
				}, I = (e, t) => async r => {
					e === o.c.Premium ? r(S()) : t && r(N(e, t))
				}, N = (e, t) => async (r, a, {
					gqlContext: i
				}) => {
					const s = a();
					if (!Object(b.i)(s, {
							subredditId: t,
							type: e
						})) {
						r(h());
						try {
							const n = await ((e, t, r, n) => Object(l.a)(e, {
								...p,
								variables: {
									subredditId: t,
									types: r,
									includeGlobal: n
								}
							}))(i(), t, [e], !0);
							if (n.ok) {
								const e = n.body;
								if (e.errors && e.errors.length) throw new Error(e.errors[0].message);
								const a = e.data.subredditInfoById.productOffers ? e.data.subredditInfoById.productOffers.offers : [];
								return void(await r(g({
									productOffers: a || [],
									subredditId: t
								})))
							}
						} catch (o) {
							const e = n.fbt._("Something went wrong", null, {
								hk: "1IJNeH"
							});
							r(y(e)), r(C(e))
						}
					}
				}, S = () => async (e, t, {
					gqlContext: r
				}) => {
					var a, s;
					const c = o.c.Premium;
					e(j());
					try {
						const t = await ((e, t) => Object(l.a)(e, {
							...u,
							variables: {
								productTypes: t
							}
						}))(r(), [c]);
						if (t.ok) {
							const r = t.body;
							if (null === (a = r.errors) || void 0 === a ? void 0 : a.length) throw new Error(r.errors[0].message);
							return void e(O({
								productOffers: null !== (s = r.data.globalProductOffers.offers) && void 0 !== s ? s : []
							}))
						}
					} catch (d) {
						const t = d.message ? d.message : n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						i.c.captureMessage(t), e(k(t)), e(C(t))
					}
				}, A = () => async (e, t, {
					gqlContext: r
				}) => {
					var a, s, o;
					e(P());
					try {
						const t = await (e => Object(l.a)(e, m))(r());
						if (t.error) throw new Error(t.error.type);
						if (t.ok) {
							const r = t.body;
							if (null === (a = r.errors) || void 0 === a ? void 0 : a.length) throw new Error(r.errors[0].message);
							return void e(_({
								subscriptions: null !== (o = null === (s = r.data.identity) || void 0 === s ? void 0 : s.econSubscriptions) && void 0 !== o ? o : []
							}))
						}
					} catch (c) {
						i.c.captureException(c);
						const t = c.message ? c.message : n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						e(v(t)), e(C(t))
					}
				}, M = e => async (t, r, {
					gqlContext: a
				}) => {
					var i;
					t(E(e));
					try {
						const r = await Object(d.b)(a(), e);
						if (r.error) throw new Error(r.error.type);
						if (r.ok) {
							const n = r.body,
								{
									errors: a
								} = n.data.cancelEconRecurringPayment;
							if (null == a ? void 0 : a.length) throw new Error(a[0].message);
							t(w({
								orderId: e
							}))
						}
						return !0
					} catch (s) {
						const e = null !== (i = s.message) && void 0 !== i ? i : n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						});
						return t(x(e)), t(C(e)), !1
					}
				}, T = e => async t => {
					const r = await t(M(e));
					return r ? (t(Object(s.f)({
						duration: s.a,
						kind: c.b.SuccessCommunity,
						text: n.fbt._("Changes saved", null, {
							hk: "2GeuMT"
						})
					})), t(A())) : t(Object(s.f)({
						duration: s.a,
						kind: c.b.Error,
						text: n.fbt._("Something went wrong!", null, {
							hk: "1k6gx9"
						})
					})), r
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
				return m
			})), r.d(t, "cardNameEmpty", (function() {
				return p
			})), r.d(t, "cardElementChange", (function() {
				return b
			})), r.d(t, "stripeTokenPending", (function() {
				return f
			})), r.d(t, "stripeTokenError", (function() {
				return h
			})), r.d(t, "stripeApiError", (function() {
				return g
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return y
			})), r.d(t, "paypalApiError", (function() {
				return j
			})), r.d(t, "toggleRememberCard", (function() {
				return O
			})), r.d(t, "selectSavedCard", (function() {
				return k
			})), r.d(t, "_deleteSavedCard", (function() {
				return P
			})), r.d(t, "deleteSavedCard", (function() {
				return v
			})), r.d(t, "savedCardsPending", (function() {
				return _
			})), r.d(t, "savedCardsSuccess", (function() {
				return E
			})), r.d(t, "loadSavedCards", (function() {
				return x
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/sentry/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/endpoints/gold/purchase.ts"),
				o = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = Object(i.a)(o.B),
				l = Object(i.a)(o.w),
				u = Object(i.a)(o.b),
				m = Object(i.a)(o.y),
				p = Object(i.a)(o.a),
				b = Object(i.a)(o.E),
				f = Object(i.a)(o.G),
				h = Object(i.a)(o.F),
				g = Object(i.a)(o.D),
				y = e => async (t, r) => {
					const a = r(),
						i = Object(c.h)(a),
						s = Object(c.l)(a),
						{
							token: o,
							error: d
						} = await e.createToken({
							name: i,
							address_zip: s
						});
					if (i.trim()) {
						if (!d && o) return o;
						t(h(d || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(p({
							message: e
						}))
					}
				}, j = Object(i.a)(o.x), O = Object(i.a)(o.H), k = Object(i.a)(o.C), P = Object(i.a)(o.g), v = e => async (t, r, {
					apiContext: n
				}) => {
					t(P(e));
					try {
						const t = await Object(s.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (i) {
						a.c.captureException(i)
					}
				}, _ = Object(i.a)(o.z), E = Object(i.a)(o.A), x = () => async (e, t, {
					apiContext: r
				}) => {
					e(_());
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
						e(E(n)), n[0] && e(k(n[0].cardId))
					} catch (n) {
						a.c.captureException(n), e(E([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "setPremiumPurchaseModalInfo", (function() {
				return g
			})), r.d(t, "clearPremiumPurchaseModalInfo", (function() {
				return y
			})), r.d(t, "openPremiumPurchaseModal", (function() {
				return j
			})), r.d(t, "closePremiumPurchaseModal", (function() {
				return O
			})), r.d(t, "stripePremiumPurchaseRequested", (function() {
				return k
			})), r.d(t, "paymentBlobCreated", (function() {
				return P
			})), r.d(t, "openWithBlob", (function() {
				return v
			}));
			var n = r("./src/config.ts"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				o = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/formatApiError/index.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/constants/modals.ts"),
				m = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = r("./src/reddit/endpoints/gold/purchase.ts"),
				b = r("./src/reddit/helpers/correlationIdTracker.ts"),
				f = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				h = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const g = Object(i.a)(h.t),
				y = Object(i.a)(h.e),
				j = (e, t) => async r => {
					r(g(e)), r(Object(l.h)(u.a.ECON_PREMIUM_PURCHASE, t))
				}, O = () => async e => {
					e(Object(l.g)(u.a.ECON_PREMIUM_PURCHASE)), e(y())
				}, k = e => async (t, r, {
					apiContext: n
				}) => {
					const i = Object(f.a)(r()),
						s = (null == i ? void 0 : i.pennies) || o.yb,
						l = Object(b.c)(b.a.GoldPayment);
					t(Object(d.stripeTokenPending)());
					const u = await t(Object(d.validateAndCreateStripeToken)(e));
					if (u) try {
						const e = await Object(p.h)({
							context: n(),
							correlationId: l,
							pennies: s,
							token: u
						});
						if (e.error) {
							const r = Object(c.a)(e.error);
							t(Object(d.stripeApiError)(r))
						} else t(Object(d.paymentCompleted)({
							confirmed: !1
						}))
					} catch (m) {
						const e = Object(c.a)(m);
						t(Object(d.stripeApiError)(e))
					} else {
						const e = a.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						t(Object(d.stripeApiError)(e))
					}
				}, P = Object(i.a)(h.v), v = ({
					packageId: e,
					correlationId: t
				}, r) => async (a, i, {
					apiContext: o
				}) => {
					a(j({
						packageId: e,
						correlationId: t
					}, r));
					const l = Object(f.a)(i()),
						u = (null == l ? void 0 : l.paypalButtonId) || n.a.paypal.buttons.premium;
					if (u) try {
						const e = await Object(m.f)({
							buttonId: u,
							context: o(),
							correlationId: t
						});
						if (e.error) {
							const t = Object(c.a)(e.error);
							a(Object(d.paypalApiError)(t))
						} else a(P(e))
					} catch (p) {
						const e = Object(c.a)(p);
						a(Object(d.paypalApiError)(e))
					} else s.c.captureMessage("No Premium packages available on Premium purchase modal")
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return h
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "a", (function() {
				return P
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/env/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				o = r("./src/reddit/endpoints/gold/productCatalog/index.ts"),
				c = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/actions/post.ts"),
				m = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const p = Object(i.a)(m.j),
				b = Object(i.a)(m.k),
				f = Object(i.a)(m.i),
				h = e => async (t, r, {
					apiContext: i
				}) => {
					t(p());
					const d = r(),
						l = Object(c.K)(d);
					try {
						const r = !l,
							n = await Object(o.b)({
								context: i(),
								correlationId: e,
								shouldUseCurrentOrigin: r
							});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const a = n.body;
						t(b(a))
					} catch (u) {
						Object(a.b)() || console.error(u), s.c.captureException(u);
						const e = n.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(f(e))
					}
				}, g = Object(i.a)(m.m), y = Object(i.a)(m.n), j = Object(i.a)(m.l), O = (e, t) => async (r, i, {
					apiContext: c
				}) => {
					r(g());
					try {
						const n = await Object(o.c)({
							awardId: e,
							context: c(),
							correlationId: t
						});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const a = n.body;
						if (!a.coinPackages || !a.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						r(y(a))
					} catch (d) {
						Object(a.b)() || console.error(d), s.c.captureException(d);
						const e = n.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						r(j(e))
					}
				}, k = Object(i.a)(m.h), P = () => async (e, t, {
					gqlContext: r
				}) => {
					var i, c;
					try {
						const t = await Object(o.a)(r());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (i = r.errors) || void 0 === i ? void 0 : i.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (c = r.awards) || void 0 === c ? void 0 : c.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(k({
								awards: r.awards
							})), e(Object(u.B)())
						}
					} catch (m) {
						Object(a.b)() || console.error(m), e(Object(d.f)({
							kind: l.b.Error,
							text: n.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), s.c.captureException(m)
					}
				}
		},
		"./src/reddit/components/Econ/Common/BenefitBanner/index.m.less": function(e, t, r) {
			e.exports = {
				container: "vtH7lR6K1AFXnG_A-CgbZ",
				icon: "_33jJS2Cnk-KLHu2d5hhHIK",
				title: "_3XAeK0OG7-kkjL1PCftkZ_",
				description: "Xjm8hXBdnZqL7TYfhTXSp"
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
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/lib/classNames/index.ts"),
				a = r("./node_modules/react/index.js"),
				i = r.n(a),
				s = r("./src/reddit/components/Econ/Common/NewIcon/index.tsx"),
				o = r("./src/reddit/components/Econ/Common/BenefitTile/index.m.less"),
				c = r.n(o);
			const d = ({
				className: e,
				onClick: t,
				benefit: r
			}) => i.a.createElement("div", {
				className: Object(n.a)(e, c.a.container),
				onClick: () => null == t ? void 0 : t(r),
				"data-testid": "benefit-tile"
			}, r.isNew && i.a.createElement(s.a, {
				className: c.a.new
			}), i.a.createElement("div", {
				className: c.a.icon,
				style: {
					backgroundImage: `url('${r.iconUrl}')`
				}
			}), r.title && i.a.createElement("h3", {
				className: c.a.title,
				"data-testid": "benefit-title"
			}, r.title), r.description && i.a.createElement("p", {
				className: c.a.description
			}, r.description))
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
				a = r.n(n),
				i = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/components/Econ/Common/NewIcon/index.m.less"),
				o = r.n(s);
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js"), d = ({
				className: e
			}) => a.a.createElement("span", {
				className: Object(i.a)(o.a.new, e)
			}, c._("NEW", null, {
				hk: "2P5bsM"
			}))
		},
		"./src/reddit/components/MarketingPageFooter/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/MarketingPageFooter/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				i = r("./src/reddit/components/MarketingPageFooter/index.m.less"),
				s = r.n(i),
				o = r("./src/lib/classNames/index.ts");
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => a.a.createElement("div", {
				className: Object(o.a)(e.className, s.a.marketingPageFooter)
			}, a.a.createElement("div", {
				className: Object(o.a)(e.className, s.a.marketingPageFooterInner)
			}, a.a.createElement("div", {
				className: s.a.linkContainer
			}, a.a.createElement("div", {
				className: s.a.linkCol
			}, a.a.createElement("ul", {
				className: s.a.linkColInner
			}, a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://about.reddit.com"
			}, c._("about", null, {
				hk: "3IO4c7"
			}))), a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://about.reddit.com/careers/"
			}, c._("careers", null, {
				hk: "2GATRU"
			}))), a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://about.reddit.com/press/"
			}, c._("press", null, {
				hk: "iUiGg"
			}))))), a.a.createElement("div", {
				className: s.a.linkCol
			}, a.a.createElement("ul", {
				className: s.a.linkColInner
			}, a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://www.redditinc.com/advertising"
			}, c._("advertise", null, {
				hk: "RYuIn"
			}))), a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "http://www.redditblog.com/"
			}, c._("blog", null, {
				hk: "4xzWuA"
			}))), a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://www.reddithelp.com"
			}, c._("help", null, {
				hk: "36XyzA"
			}))))), a.a.createElement("div", {
				className: Object(o.a)(s.a.linkCol, s.a.linkBoldCol)
			}, a.a.createElement("ul", {
				className: s.a.linkColInner
			}, a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://www.reddit.com/coins"
			}, c._("reddit coins", null, {
				hk: "3Ts6tu"
			}))), a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://www.reddit.com/premium"
			}, c._("reddit premium", null, {
				hk: "3vPbLO"
			}))), a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://redditgifts.com/"
			}, c._("reddit gifts", null, {
				hk: "3WNNEy"
			}))))), a.a.createElement("div", {
				className: Object(o.a)(s.a.linkCol, s.a.linkBoldCol)
			}, a.a.createElement("ul", {
				className: s.a.linkColInner
			}, a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://www.facebook.com/reddit/"
			}, c._("Facebook", null, {
				hk: "47DT2F"
			}))), a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://twitter.com/reddit"
			}, c._("Twitter", null, {
				hk: "3aUv7u"
			}))), a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://www.instagram.com/reddit/"
			}, c._("Instagram", null, {
				hk: "dVIRX"
			})))))), a.a.createElement("ul", {
				className: s.a.legal
			}, a.a.createElement("li", {
				className: s.a.legalItem
			}, a.a.createElement("a", {
				className: s.a.legalLink,
				href: "https://www.redditinc.com/policies/content-policy"
			}, c._("content policy", null, {
				hk: "4ptiaZ"
			}))), a.a.createElement("li", {
				className: s.a.legalItem
			}, a.a.createElement("a", {
				className: s.a.legalLink,
				href: "https://www.reddit.com/help/privacypolicy"
			}, c._("privacy policy", null, {
				hk: "1ybjnz"
			}))), a.a.createElement("li", {
				className: s.a.legalItem
			}, a.a.createElement("a", {
				className: s.a.legalLink,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, c._("user agreement", null, {
				hk: "4puRxC"
			}))), a.a.createElement("li", {
				className: s.a.legalItem
			}, a.a.createElement("a", {
				className: s.a.legalLink,
				href: "https://www.reddit.com/help/healthycommunities/"
			}, c._("mod policy", null, {
				hk: "1VvAdM"
			}))), a.a.createElement("li", {
				className: s.a.legalItem
			}, c._("© {year} Reddit, Inc. All rights reserved", [c._param("year", (new Date).getFullYear().toString())], {
				hk: "23FUx6"
			})))))
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
				a = r.n(n),
				i = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				o = r.n(s);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => a.a.createElement("div", {
				className: Object(i.a)(o.a.loadingIcon, t, {
					[o.a.mCentered]: e
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
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "e", (function() {
				return b
			}));
			var n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				s = r("./src/reddit/constants/headers.ts"),
				o = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = r("./src/reddit/endpoints/gold/purchase.ts");
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
					u = Object(o.a)(l);
				return Object(a.a)(Object(i.a)(t, [s.a]), {
					method: n.jb.POST,
					endpoint: u,
					data: d
				}).then(c.c)
			}, l = async ({
				context: e,
				coins: t,
				pennies: r,
				correlationId: o
			}) => {
				const d = {
					coins: t,
					pennies: r,
					correlation_id: o
				};
				return Object(a.a)(Object(i.a)(e, [s.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(c.c)
			}, u = async ({
				context: e,
				awardId: t,
				pennies: r,
				thingId: o,
				correlationId: d
			}) => {
				const l = {
					award_id: t,
					correlation_id: d,
					pennies: r,
					thing_id: o
				};
				return Object(a.a)(Object(i.a)(e, [s.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(c.c)
			}, m = async ({
				context: e,
				offerContext: t,
				orderId: r,
				coins: o,
				pennies: d,
				correlationId: l
			}) => {
				const u = {
					offer_context: t,
					order_id: r,
					coins: o,
					pennies: d,
					correlation_id: l
				};
				return Object(a.a)(Object(i.a)(e, [s.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: u
				}).then(c.c)
			}, p = async ({
				awardId: e,
				context: t,
				coins: r,
				correlationId: o,
				isAnonymous: d,
				message: l,
				offerContext: u,
				orderId: m,
				pennies: p,
				thingId: b
			}) => {
				const f = {
					award_id: e,
					coins: r,
					correlation_id: o,
					is_anonymous: d,
					message: l,
					offer_context: u,
					order_id: m,
					pennies: p,
					thing_id: b
				};
				return Object(a.a)(Object(i.a)(t, [s.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: f
				}).then(c.c)
			}, b = async ({
				awardId: e,
				context: t,
				correlationId: r,
				isAnonymous: o,
				message: d,
				orderId: l,
				thingId: u
			}) => {
				const m = {
					award_id: e,
					correlation_id: r,
					is_anonymous: o,
					message: d,
					order_id: l,
					thing_id: u
				};
				return Object(a.a)(Object(i.a)(t, [s.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: m
				}).then(c.c)
			}
		},
		"./src/reddit/endpoints/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return g
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "i", (function() {
				return j
			})), r.d(t, "h", (function() {
				return O
			})), r.d(t, "j", (function() {
				return k
			})), r.d(t, "g", (function() {
				return P
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "e", (function() {
				return _
			})), r.d(t, "d", (function() {
				return E
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "l", (function() {
				return w
			})), r.d(t, "k", (function() {
				return C
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				a = r.n(n),
				i = r("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				s = r("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				o = r("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				c = r("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				d = r("./src/redditGQL/operations/CreateEconOrder.json"),
				l = r("./src/redditGQL/operations/CreatePaypalPayment.json"),
				u = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				m = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				p = r("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				b = r("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				f = r("./src/redditGQL/operations/UserSavedStripeCards.json"),
				h = r("./src/lib/makeGqlRequest/index.ts");
			const g = (e, t, r, n, i) => {
				const {
					premium: s,
					...o
				} = i, c = (null == s ? void 0 : s.pricePackage) || r.pricePackages[0], l = new a.a(c.price).multipliedBy(n).toFixed();
				return Object(h.a)(e, {
					...d,
					variables: {
						input: {
							nonce: t,
							productId: r.id,
							productVersion: r.version,
							pricePackageId: c.id,
							currency: c.currency,
							price: l,
							productsCount: n.toString(),
							...o
						}
					}
				})
			};
			var y;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(y || (y = {}));
			const j = (e, t, r, n) => Object(h.a)(e, {
					...m,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				O = (e, t, r, n) => Object(h.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				k = (e, t, r, n) => Object(h.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: r,
						cardId: n
					}
				}),
				P = (e, t, r, n, a) => Object(h.a)(e, {
					...l,
					variables: {
						nonce: t,
						orderId: r,
						successUrl: n,
						cancelUrl: a
					}
				}),
				v = (e, t, r, n) => Object(h.a)(e, {
					...s,
					variables: {
						nonce: t,
						paymentId: r,
						token: n
					}
				}),
				_ = (e, t, r, n) => Object(h.a)(e, {
					...c,
					variables: {
						nonce: t,
						paymentId: r,
						cardId: n
					}
				}),
				E = (e, t, r, n, a) => Object(h.a)(e, {
					...o,
					variables: {
						nonce: t,
						paymentId: r,
						token: n,
						saveCard: a
					}
				}),
				x = (e, t) => Object(h.a)(e, {
					...i,
					variables: {
						orderId: t
					}
				}),
				w = e => Object(h.a)(e, {
					...f,
					variables: {}
				}),
				C = (e, t) => Object(h.a)(e, {
					...b,
					variables: {
						cardId: t
					}
				})
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n);

			function i(e, t) {
				const r = e.toString().split(":");
				return r.length % 2 == 0 ? e : r.reduce((e, r, n) => (n % 2 == 0 ? e.push(r) : "" === r ? e.push(":") : `:${r}:` in t ? e.push(t[`:${r}:`]) : e.push(`:${r}:`), e), []).map((e, t) => a.a.createElement(a.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				a = r("./src/lib/prettyPrintNumber/index.ts");

			function i(e, t) {
				const r = new n.BigNumber(e),
					a = new n.BigNumber(t || 1);
				return r.dividedToIntegerBy(a).toString()
			}

			function s(e, t) {
				return Object(a.b)(parseInt(i(e, t), 10))
			}

			function o(e, t) {
				const r = new n.BigNumber(e),
					a = new n.BigNumber(t || 1);
				return r.multipliedBy(a).toFixed(0)
			}
		},
		"./src/reddit/helpers/trackers/premium.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			}));
			var n = r("./src/reddit/helpers/correlationIdTracker.ts"),
				a = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				i = r("./src/reddit/selectors/telemetry.ts");
			const s = (e, t) => {
					const {
						packageId: r,
						renewInterval: n
					} = t;
					let i = "";
					if (r) {
						const t = Object(a.k)(e, r);
						if (!t) return null;
						i = t.frequency
					} else n && (i = n);
					return i ? {
						goldPurchase: {
							subscriptionType: i
						}
					} : null
				},
				o = "premium_marketing",
				c = e => t => ({
					source: o,
					action: "click",
					noun: "price",
					correlationId: Object(n.c)(n.a.GoldPayment),
					...i.defaults(t),
					...s(t, e)
				}),
				d = () => e => ({
					source: o,
					action: "click",
					noun: "redeem_code",
					correlationId: Object(n.c)(n.a.GoldPayment),
					...i.defaults(e)
				}),
				l = () => e => ({
					source: o,
					action: "click",
					noun: "manage",
					correlationId: Object(n.c)(n.a.GoldPayment),
					...i.defaults(e)
				}),
				u = e => t => ({
					source: "premium_marketing",
					action: "click",
					noun: "premium_benefit",
					...i.defaults(t),
					goldPurchase: {
						premiumMarketingBenefit: e
					}
				})
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "e", (function() {
				return s
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return c
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			const a = {
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
				i = (e, t = !1) => {
					const r = [];
					for (const n in a) {
						const i = a[n];
						(i.priceInCoins <= e || t) && r.push(i)
					}
					return r
				},
				s = e => n.fbt._({
					"*": "{number of months} months {number of coins} Coins",
					_1: "1 month {number of coins} Coins"
				}, [n.fbt._plural(e.monthsOfPremium, "number of months"), n.fbt._param("number of coins", e.priceInCoins.toLocaleString())], {
					hk: "2bar0C"
				}),
				o = "com.reddit.premium_1";
			var c;
			! function(e) {
				e.Monthly = "monthly", e.Yearly = "yearly"
			}(c || (c = {}))
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, a, i, s;
			r.d(t, "b", (function() {
					return a
				})), r.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(a || (a = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(i || (i = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(s || (s = {}))
		},
		"./src/reddit/pages/Premium/BenefitsSection/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return a
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "c", (function() {
				return c
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			const a = [{
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
				i = {
					key: "premium-more",
					telemetryTag: "more_benefits"
				},
				s = {
					key: "premium-bonus",
					asterisk: !0,
					telemetryTag: "coin_bonus"
				},
				o = {
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
				c = {
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
		"./src/reddit/pages/Premium/BenefitsSection/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_21g0kYfKRCqWnHX6Hs4EVJ",
				signupBonusBanner: "_19jXhv_oNEbM4YkFLajvJi",
				isNightMode: "_1wuH3ONzjSSsfNfnhfaPWF",
				benefitsContainer: "LpDOx_HYwL2maHntPrY3k",
				benefit: "_2ZtkpgcwK6dFNvjfEHZZT4"
			}
		},
		"./src/reddit/pages/Premium/BenefitsSection/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return P
			}));
			var n = r("./src/lib/classNames/index.ts"),
				a = r("./node_modules/react/index.js"),
				i = r.n(a),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/components/Econ/Common/BenefitBanner/index.m.less"),
				c = r.n(o);
			const d = ({
				className: e,
				onClick: t,
				benefit: r
			}) => i.a.createElement("div", {
				className: Object(n.a)(e, c.a.container),
				onClick: () => null == t ? void 0 : t(r),
				"data-testid": "benefit-banner"
			}, i.a.createElement("div", {
				className: c.a.icon,
				style: {
					backgroundImage: `url('${r.iconUrl}')`
				}
			}), i.a.createElement("div", null, r.title && i.a.createElement("h3", {
				className: c.a.title,
				"data-testid": "benefit-banner-title"
			}, r.title), r.description && i.a.createElement("p", {
				className: c.a.description
			}, r.description)));
			var l = r("./src/reddit/components/Econ/Common/BenefitTile/index.tsx"),
				u = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = r("./src/reddit/helpers/trackers/premium.ts"),
				p = r("./src/reddit/hooks/useTracking.ts"),
				b = r("./src/reddit/pages/Premium/BenefitsSection/constants.ts"),
				f = r("./src/config.ts");
			const h = ({
				key: e,
				asterisk: t,
				isNew: r,
				telemetryTag: n
			}, a) => ({
				telemetryTag: n,
				isNew: r,
				key: e,
				description: b.c[e](a),
				iconUrl: `${f.a.assetPath}/img/gold/premium-marketing/benefits-icons/${e}.png`,
				title: `${b.d[e](a)}${t?"*":""}`
			});
			var g = r("./src/reddit/selectors/experiments/econ/index.ts"),
				y = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				j = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/pages/Premium/BenefitsSection/index.m.less"),
				k = r.n(O);
			const P = ({
				className: e,
				isCompactMode: t = !1
			}) => {
				const r = Object(s.e)(j.X),
					a = Object(p.a)(),
					o = Object(s.e)(y.m),
					c = !!o,
					f = Object(s.e)(e => !t && c && Object(g.B)(e)),
					O = Object(s.e)(y.j),
					P = Object(s.e)(y.l);
				if (!(null == P ? void 0 : P.length)) return i.a.createElement("div", null, i.a.createElement(u.a, {
					sizePx: 80
				}));
				const v = {
						periodicalCoins: O,
						bonusCoins: o
					},
					_ = ((e, t) => t ? [...e, b.b] : [...e, b.a])(b.e, c && !f).map(e => h(e, v)),
					E = h(b.b, v),
					x = e => {
						a(Object(m.b)(e.telemetryTag))
					};
				return i.a.createElement("div", {
					className: Object(n.a)(k.a.container, e, {
						[k.a.isNightMode]: r
					})
				}, f && i.a.createElement(d, {
					className: k.a.signupBonusBanner,
					benefit: E,
					onClick: x
				}), i.a.createElement("div", {
					className: k.a.benefitsContainer
				}, _.map(e => i.a.createElement(l.a, {
					className: k.a.benefit,
					benefit: e,
					key: e.key,
					onClick: x
				}))))
			}
		},
		"./src/reddit/pages/Premium/PremiumButtons/index.m.less": function(e, t, r) {
			e.exports = {
				button: "_2WCbLB03wJFwv7fN2Dk2qt",
				premiumAnnualButton: "_2570j5dKW6IeBhxlQzl5WL",
				premiumMonthlyButton: "_7__SJMdC4NiDvJ9BVKQrm",
				premiumDiscountBadge: "_1AJGAPTnSSY4HwOKw5300M",
				renewalSubtext: "mNwLF2M-GWWkKuxa83xBQ",
				hero: "_47LcjeuJicuk5sAs6MQM5"
			}
		},
		"./src/reddit/pages/Premium/PremiumButtons/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/react/index.js"),
				i = r.n(a),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/currency/currencies.ts"),
				c = r("./src/lib/localizeCurrency/index.ts"),
				d = r("./node_modules/react-redux/es/index.js"),
				l = r("./src/reddit/controls/Button/index.tsx"),
				u = r("./src/reddit/hooks/useLocale.ts"),
				m = r("./src/reddit/models/Gold/Premium/index.ts"),
				p = r("./src/reddit/models/Gold/ProductOffer.ts"),
				b = r("./src/reddit/selectors/gold/productOffers.ts"),
				f = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				g = r("./src/reddit/pages/Premium/PremiumButtons/index.m.less"),
				y = r.n(g);
			t.a = ({
				className: e,
				isHeroStyles: t,
				onClickPackage: r,
				onClickManagePremium: a
			}) => {
				var g, j;
				const O = Object(u.b)(),
					k = Object(d.e)(f.l),
					P = Object(d.e)(b.e);
				if (Object(d.e)(h.t)) return i.a.createElement("div", {
					className: Object(s.a)(y.a.buttons, e, {
						[y.a.hero]: !!t
					})
				}, i.a.createElement(l.k, {
					className: y.a.button,
					onClick: a
				}, n.fbt._("Manage Premium", null, {
					hk: "13LAq1"
				})));
				const v = k.find(e => e.frequency === m.c.Monthly),
					_ = k.find(e => e.frequency === m.c.Yearly);
				if (!v || !_) return null;
				const E = null === (g = Object(b.j)(P, p.b.Month)) || void 0 === g ? void 0 : g[0],
					x = null === (j = Object(b.j)(P, p.b.Year)) || void 0 === j ? void 0 : j[0];
				if (!E || !x) return null;
				const w = {
						price: E.price,
						packageId: v.mobileId,
						currency: E.currency
					},
					C = {
						price: x.price,
						packageId: _.mobileId,
						bonusPct: _.bonusPct,
						currency: x.currency
					},
					I = Object(c.b)(w.price, {
						type: o.b.Real,
						currency: w.currency,
						locale: O
					}),
					N = Object(c.b)(C.price, {
						type: o.b.Real,
						currency: C.currency,
						locale: O
					});
				return i.a.createElement("div", {
					className: Object(s.a)(y.a.buttons, e, {
						[y.a.hero]: !!t
					})
				}, i.a.createElement(l.t, {
					className: y.a.premiumMonthlyButton,
					onClick: () => {
						r(w.packageId, p.b.Month)
					},
					priority: l.c.Secondary
				}, w && n.fbt._("{monthly price}/Month", [n.fbt._param("monthly price", I)], {
					hk: "3xMnhy"
				})), i.a.createElement(l.k, {
					className: y.a.premiumAnnualButton,
					onClick: () => r(C.packageId, p.b.Year)
				}, !!C && n.fbt._("{annual price}/Year", [n.fbt._param("annual price", N)], {
					hk: "4ohAoM"
				}), !!C.bonusPct && i.a.createElement("span", {
					className: y.a.premiumDiscountBadge
				}, n.fbt._("Save {annual-month-discount}", [n.fbt._param("annual-month-discount", `${C.bonusPct}%`)], {
					hk: "TgjzN"
				}))), i.a.createElement("div", {
					className: y.a.renewalSubtext
				}, n.fbt._("Subscriptions automatically renew", null, {
					hk: "v8BCD"
				})))
			}
		},
		"./src/reddit/pages/Premium/RedeemGiftCode/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_5LWowBThFq85kJtr32lGv",
				redeemCodeLink: "_1p-1WwfjcgeP5ujyA10PDi",
				giftCodeInputContainer: "kVy_f9PYYpGrwTE_Mh6vp",
				giftCodeHidden: "j1exZ_-cynvmQEF34ZwVS",
				giftCodeInput: "_1Unf0eBwbvzVa_cFT4YlaP",
				redeemButton: "n9l-oUPT1d1EFyY3z2MbA"
			}
		},
		"./src/reddit/pages/Premium/index.m.less": function(e, t, r) {
			e.exports = {
				body: "_1H1BEIdB-vMmFIhl__GcP-",
				benefits: "_2F-2JuCnBDGUkhnXOrig5y",
				hero: "_3KzmnADgrpURkhkiSnEL8O",
				heroInner: "_2oUlTJc4IuiAjkfQeGQ6j7",
				heroTitle: "GZKGDIHeqtU51PlPpyUL_",
				heroLogo: "_2QdbMXAwLpWVLJfDJ275mD",
				heroDescription: "hUEA0jAwHPAvz7Q_ME6CQ",
				heroButtons: "_267SU8HUh3akX44wSBowkV",
				heroPremiumExpiration: "_3mePsES_o4kEB7LYhNam7d",
				title: "_3xymUbUvqvfnMM2w1bDVpo",
				paidPremiumSubtext: "_2Of3GWhg1qZ5DUuQVMX80C",
				faqButton: "_3GTrbRyT1wOPfZZhY4r1Qg",
				footer: "_27BspvKVY7nh2AfDk1xv0S"
			}
		},
		"./src/reddit/pages/Premium/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PAID_PREMIUM_SUBTEXT", (function() {
				return q
			}));
			var n = r("./src/config.ts"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./node_modules/react/index.js"),
				s = r.n(i),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/react-router-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				l = r("./src/lib/constants/index.ts"),
				u = r("./src/lib/humanizeDate/index.ts"),
				m = r("./src/lib/loadRedditAdsPixel.ts"),
				p = r("./src/reddit/components/TrackingHelper/index.tsx"),
				b = r("./src/reddit/helpers/correlationIdTracker.ts"),
				f = r("./src/reddit/helpers/createEmojiText/index.tsx"),
				h = r("./src/reddit/helpers/trackers/premium.ts"),
				g = r("./src/reddit/helpers/trackers/screenview.ts"),
				y = r("./src/telemetry/index.ts"),
				j = r("./src/telemetry/models/Timer.ts"),
				O = r("./src/reddit/pages/Premium/index.m.less"),
				k = r.n(O),
				P = r("./src/reddit/actions/login.ts"),
				v = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				_ = r("./src/reddit/actions/gold/productOffers.ts"),
				E = r("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				x = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				w = r("./src/reddit/components/MarketingPageFooter/index.tsx"),
				C = r("./src/reddit/models/Gold/ProductOffer.ts"),
				I = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				N = r("./src/reddit/selectors/user.ts"),
				S = r("./src/reddit/icons/svgs/PremiumLogo/index.tsx"),
				A = r("./src/reddit/controls/Button/index.tsx"),
				M = r("./src/reddit/pages/Premium/BenefitsSection/index.tsx"),
				T = r("./src/reddit/pages/Premium/PremiumButtons/index.tsx"),
				B = r("./src/lib/classNames/index.ts"),
				L = r("./src/reddit/actions/claimgold.ts"),
				G = r("./src/reddit/hooks/useTracking.ts"),
				R = r("./src/reddit/selectors/claimgold.ts"),
				U = r("./src/reddit/pages/Premium/RedeemGiftCode/index.m.less"),
				D = r.n(U);
			const F = () => {
					const e = Object(G.a)(),
						t = Object(o.d)(),
						r = Object(o.e)(R.a),
						n = Object(o.e)(R.b);
					return s.a.createElement("div", {
						className: D.a.container
					}, s.a.createElement(A.t, {
						className: D.a.redeemCodeLink,
						onClick: () => {
							e(h.d()), t(Object(L.i)())
						},
						priority: A.c.Plain
					}, a.fbt._("Redeem a Gift Code", null, {
						hk: "10i0AM"
					})), s.a.createElement("form", {
						className: Object(B.a)(D.a.giftCodeInputContainer, {
							[D.a.giftCodeHidden]: !n
						}),
						onSubmit: e => {
							e.preventDefault(), t(Object(L.h)())
						}
					}, s.a.createElement("input", {
						className: D.a.giftCodeInput,
						type: "text",
						maxLength: 30,
						placeholder: a.fbt._("Gift Code", null, {
							hk: "1UDPjt"
						}),
						onChange: e => {
							e.stopPropagation(), t(Object(L.j)(e.target.value))
						},
						value: r
					}), s.a.createElement(A.t, {
						className: D.a.redeemButton,
						priority: A.c.Plain
					}, a.fbt._("Redeem", null, {
						hk: "1d2cH2"
					}))))
				},
				q = a.fbt._("* Powerup, custom app icons, and welcome gifts are only available through a paid Reddit Premium subscription.", null, {
					hk: "23BUsR"
				}),
				Q = Object(d.c)({
					goldExpiration: e => e.user.account && e.user.account.goldExpiration || 0,
					isGold: N.s,
					isPremiumSubscriber: N.t,
					isLoggedIn: N.K,
					premiumPackages: I.l,
					purchaseCatalogPending: I.o
				}),
				H = Object(o.b)(Q, (e, t) => ({
					onManagePremium: () => e(Object(c.b)("/settings/premium")),
					onOpenLoginModal: () => e(Object(P.i)()),
					onPurchasePremium: (t, r) => e(Object(E.openWithBlob)({
						correlationId: r,
						packageId: t
					})),
					onSetPremiumRenewalInterval: t => e(Object(v.j)({
						renewInterval: t
					})),
					requestPurchaseCatalog: t => e(Object(x.b)(t)),
					premiumProductOffersRequested: () => e(Object(_.d)(C.c.Premium))
				}));
			class W extends s.a.Component {
				constructor() {
					super(...arguments), this.correlationId = Object(b.d)(b.a.GoldPayment, !1), this.onClickPrice = (e, t) => {
						this.onPurchase(e, h.c, t)
					}, this.onClickManagePremium = () => {
						const {
							onManagePremium: e,
							sendEvent: t
						} = this.props;
						t(h.a()), e()
					}
				}
				componentDidMount() {
					const {
						premiumPackages: e,
						purchaseCatalogPending: t,
						requestPurchaseCatalog: r,
						premiumProductOffersRequested: n,
						sendEvent: a
					} = this.props;
					e.length || t || r(this.correlationId), n(), document.documentElement.scrollTop = document.body.scrollTop = 0;
					const i = l.Mb.PREMIUM;
					y.c.has(i) && (a(Object(g.n)(j.TimerType.InApp, y.c.end(i))), a(Object(g.m)())), Object(m.a)()
				}
				render() {
					const {
						className: e
					} = this.props;
					return s.a.createElement("div", {
						className: e
					}, this.renderHero(), s.a.createElement("div", {
						className: k.a.body
					}, s.a.createElement("h2", {
						className: k.a.title
					}, a.fbt._("Join Reddit Premium Today", null, {
						hk: "2sm8Pz"
					})), s.a.createElement(M.a, {
						className: k.a.benefits
					}), s.a.createElement(T.a, {
						onClickPackage: this.onClickPrice,
						onClickManagePremium: this.onClickManagePremium
					}), s.a.createElement("div", {
						className: k.a.paidPremiumSubtext
					}, q), s.a.createElement(F, null), this.renderFAQSection()), s.a.createElement(w.a, {
						className: k.a.footer
					}))
				}
				renderHero() {
					const {
						goldExpiration: e,
						isGold: t,
						isPremiumSubscriber: r
					} = this.props;
					return s.a.createElement("div", {
						className: k.a.hero,
						style: {
							backgroundImage: `linear-gradient(\n          to right,\n          rgba(0, 0, 0, 0.6) 0%,\n          rgba(0, 0, 0, 0) 50%\n        ), url("${n.a.assetPath}/img/gold/premium-marketing/premiumHero.jpg")`
						}
					}, s.a.createElement("div", {
						className: k.a.heroInner
					}, s.a.createElement("h1", {
						className: k.a.heroTitle
					}, s.a.createElement(S.a, {
						className: k.a.heroLogo
					})), s.a.createElement("p", {
						className: k.a.heroDescription
					}, a.fbt._("Help support Reddit and get VIP treatment, exclusive access, and monthly coins.", null, {
						hk: "19iqSJ"
					})), s.a.createElement(T.a, {
						className: k.a.heroButtons,
						isHeroStyles: !0,
						onClickPackage: this.onClickPrice,
						onClickManagePremium: this.onClickManagePremium
					}), !r && t && s.a.createElement("div", {
						className: k.a.heroPremiumExpiration
					}, Object(f.a)(a.fbt._("Your Premium membership is valid until {Premium expiration date}. Manage it :here:.", [a.fbt._param("Premium expiration date", Object(u.a)(e, {
						showDay: !0
					}))], {
						hk: "yMI3j"
					}).toString(), {
						":here:": s.a.createElement("a", {
							href: "/settings/premium",
							target: "_blank"
						}, a.fbt._("here", null, {
							hk: "d7Mhm"
						}))
					}))))
				}
				onPurchase(e, t, r) {
					const {
						isPremiumSubscriber: n,
						isLoggedIn: a,
						onOpenLoginModal: i,
						onPurchasePremium: s,
						onSetPremiumRenewalInterval: o,
						sendEvent: c
					} = this.props;
					n ? this.onClickManagePremium() : a ? (s(e, this.correlationId), o(r), c(t({
						renewInterval: r
					}))) : i()
				}
				renderFAQSection() {
					return s.a.createElement(A.t, {
						className: k.a.faqButton,
						href: "https://reddit.zendesk.com/hc/en-us/articles/360043034412-What-is-a-Reddit-premium-membership-",
						kind: A.b.ExternalLink,
						priority: A.c.Plain,
						target: "_blank"
					}, a.fbt._("Visit the Reddit Premium FAQs", null, {
						hk: "22gM46"
					}))
				}
				componentWillUnmount() {
					Object(b.b)(b.a.GoldPayment)
				}
			}
			t.default = H(Object(p.c)(W))
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return c
			})), r.d(t, "i", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "j", (function() {
				return p
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "g", (function() {
				return g
			})), r.d(t, "f", (function() {
				return y
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/makeProductOfferKey/index.ts"),
				i = r("./src/reddit/models/Gold/ProductOffer.ts"),
				s = r("./src/reddit/models/Payments/index.ts"),
				o = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const c = e => e.subreddits.api.productOffers.pending,
				d = (e, {
					subredditId: t,
					type: r
				}) => {
					var n, i, s;
					return t ? e.subreddits.productOffers[Object(a.a)(r, t)] : null === (s = null === (i = null === (n = e.features) || void 0 === n ? void 0 : n.goldPurchase) || void 0 === i ? void 0 : i.productOffers) || void 0 === s ? void 0 : s[Object(a.a)(r)]
				},
				l = (e, {
					subredditId: t
				}) => {
					const r = d(e, {
						subredditId: t,
						type: i.c.Powerups
					});
					return r && r[0]
				},
				u = (e, t) => {
					var r;
					const n = l(e, t);
					return null === (r = null == n ? void 0 : n.pricePackages) || void 0 === r ? void 0 : r[0].price
				},
				m = e => {
					const t = d(e, {
						type: i.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				p = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === s.b.PayPal || e[0] === s.b.Stripe)(e.requiredPaymentProviders)) : null,
				b = Object(n.a)(m, o.p, (e, t) => p(e, t) || null),
				f = Object(n.a)(b, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				h = Object(n.a)(b, e => (null == e ? void 0 : e[0].price) || null),
				g = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				y = Object(n.a)(g, e => Boolean(null == e ? void 0 : e.isCanceled))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Premium~reddit-components-Econ-Prediction-PremiumModal.c530583b607e2ff31c32.js.map