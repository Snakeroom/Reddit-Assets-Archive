// https://www.redditstatic.com/desktop2x/Premium.c0d2ccb7c6060e8d96ce.js
// Retrieved at 5/24/2021, 1:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Premium", "GoldPurchasePaymentActions"], {
		"./src/graphql/operations/CancelEconRecurringPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"ac36f7489268"}')
		},
		"./src/graphql/operations/ConfirmPaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"6ad51fec38be"}')
		},
		"./src/graphql/operations/ConfirmStripePaymentNewCard.json": function(e) {
			e.exports = JSON.parse('{"id":"e4d2b27d6d30"}')
		},
		"./src/graphql/operations/ConfirmStripePaymentSavedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"0095edf93db4"}')
		},
		"./src/graphql/operations/CreateEconOrder.json": function(e) {
			e.exports = JSON.parse('{"id":"1bf318d40021"}')
		},
		"./src/graphql/operations/CreatePaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"8bca171d6bb4"}')
		},
		"./src/graphql/operations/CreateStripePaymentWithProvidedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"179702814d8f"}')
		},
		"./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json": function(e) {
			e.exports = JSON.parse('{"id":"6d178a1662ba"}')
		},
		"./src/graphql/operations/CreateStripePaymentWithSavedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"9fc54f6de447"}')
		},
		"./src/graphql/operations/DeleteSavedStripeCard.json": function(e) {
			e.exports = JSON.parse('{"id":"87230cb9dec2"}')
		},
		"./src/graphql/operations/GlobalProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"5b1dd85fe475"}')
		},
		"./src/graphql/operations/PremiumProductOfferSubscriptions.json": function(e) {
			e.exports = JSON.parse('{"id":"93a82be72b63"}')
		},
		"./src/graphql/operations/ProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"ddb1f9f5717c"}')
		},
		"./src/graphql/operations/UserSavedStripeCards.json": function(e) {
			e.exports = JSON.parse('{"id":"d29c51cfbfe6"}')
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, r) {
			"use strict";

			function n(e, t, r, n) {
				const a = new Date(1e3 * e);
				return new Intl.DateTimeFormat("default", {
					month: n ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: r ? "UTC" : void 0
				}).format(a)
			}
			r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/lib/loadRedditAdsPixel.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
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
			const o = () => {
				try {
					rdt("track", "Purchase")
				} catch (e) {
					n.c.captureMessage('Attempted to fire RedditAds "Purchase" pixel, but global "rdt" object was unavailable')
				}
			}
		},
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return x
			})), r.d(t, "j", (function() {
				return C
			})), r.d(t, "f", (function() {
				return I
			})), r.d(t, "e", (function() {
				return N
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "c", (function() {
				return M
			})), r.d(t, "a", (function() {
				return R
			})), r.d(t, "g", (function() {
				return L
			})), r.d(t, "h", (function() {
				return F
			})), r.d(t, "i", (function() {
				return D
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/omit.js"),
				o = r.n(a),
				s = r("./node_modules/uuid/v4.js"),
				c = r.n(s),
				i = r("./src/config.ts"),
				d = r("./src/reddit/constants/modals.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/lib/addQueryParams/index.ts"),
				m = r("./src/lib/makeActionCreator/index.ts"),
				p = r("./src/lib/sentry/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				f = r("./src/reddit/actions/gold/constants.ts"),
				h = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				g = r("./src/reddit/selectors/gold/productOffers.ts"),
				v = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				y = r("./src/reddit/selectors/user.ts"),
				P = r("./src/reddit/models/Gold/ProductOffer.ts"),
				k = r("./src/reddit/actions/gold/powerups.ts"),
				O = r("./src/reddit/actions/modal.ts"),
				j = r("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				w = r("./src/reddit/models/Payments/index.ts");
			const E = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				_ = e => e.map(e => e.message).join(" : "),
				x = (e, t, r) => async (a, o, {
					gqlContext: s
				}) => {
					const i = c()(),
						d = await Object(j.f)(s(), i, e, t, r);
					if (d.ok) {
						const e = d.body,
							{
								errors: t,
								order: r
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(_(t));
						if (r) return r.id
					}
					throw new Error((() => n.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, C = (e, t, r, a, o, s) => async (i, d, {
					gqlContext: l
				}) => {
					var u;
					const m = d(),
						b = () => i(Object(h.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						}))),
						f = o === P.c.Premium,
						k = o === P.c.Powerups,
						O = {};
					if (k && s) O.powerUps = {
						subredditId: s,
						isAnonymous: r
					};
					else if (f) {
						const e = Object(g.c)(m, {
							provider: w.b.Stripe
						});
						if (!e) return;
						O.premium = {
							pricePackage: e
						}
					}
					let E, C, I = "";
					try {
						I = await i(x(t, a, O))
					} catch (S) {
						return p.c.captureException(S), void(S.message && i(Object(h.stripeApiError)(S.message)))
					}
					i(Object(h.stripeTokenPending)());
					const N = Object(v.y)(m);
					if (N || (E = await i(Object(h.validateAndCreateStripeToken)(e)), C = Object(v.v)(m), E)) try {
						const t = c()(),
							n = N || C ? E && C ? Object(j.h)(l(), t, I, E.id) : N ? Object(j.j)(l(), t, I, N) : null : Object(j.i)(l(), t, I, E.id),
							o = await n;
						if (!(null == o ? void 0 : o.ok)) return void b();
						const m = o.body.data.createEconPayment;
						if (null === (u = null == m ? void 0 : m.errors) || void 0 === u ? void 0 : u.length) return void i(Object(h.stripeApiError)(_(m.errors)));
						const {
							ok: p,
							payment: g,
							providerExecution: {
								paymentIntentClientSecret: v
							}
						} = m;
						if (p && g.status === j.a.ActionRequired) {
							const t = await e.confirmCardPayment(v),
								{
									error: r
								} = t;
							if (r) return void(r.message ? i(Object(h.stripeApiError)(r.message)) : b());
							let n;
							if (!(n = N ? await Object(j.e)(l(), c()(), g.id, N) : await Object(j.d)(l(), c()(), g.id, E.id, C)).ok) return void b();
							const a = n.body;
							if (!a.data.confirmEconPayment.ok || a.data.confirmEconPayment.payment.status !== j.a.Paid) return void b()
						} else if (p && g.status !== j.a.Paid) return void b();
						const P = Object(y.i)(d());
						P && (k && s ? i(L({
							subredditId: s,
							powerupsCount: a,
							user: P,
							isAnonymous: r
						})) : f && i(F({
							user: P
						})))
					} catch (S) {
						p.c.captureException(S), b()
					}
				}, I = (e, t, r, n, a) => async (o, s, {
					gqlContext: d
				}) => {
					var l;
					const m = s(),
						b = n === P.c.Premium,
						f = n === P.c.Powerups,
						v = {};
					if (f && a) v.powerUps = {
						subredditId: a,
						isAnonymous: t
					};
					else if (b) {
						const e = Object(g.c)(m, {
							provider: w.b.PayPal
						});
						if (!e) return null;
						v.premium = {
							pricePackage: e
						}
					}
					let k = "";
					try {
						k = await o(x(e, r, v))
					} catch (I) {
						return p.c.captureException(I), I.message && o(Object(h.paypalApiError)(I.message)), null
					}
					const O = i.a.redditUrl;
					let C = {
						_o: O,
						o: k,
						pt: n
					};
					f && a && (C = {
						...C,
						r: a
					});
					try {
						const e = Object(u.a)(`${O}/framedModal/paypal-finish`, {
								...C,
								s: !0
							}),
							n = Object(u.a)(`${O}/framedModal/paypal-finish`, C),
							i = c()(),
							m = await Object(j.g)(d(), i, k, e, n);
						if (m && m.ok) {
							const e = m.body.data.createEconPayment;
							if (null === (l = null == e ? void 0 : e.errors) || void 0 === l ? void 0 : l.length) return o(Object(h.paypalApiError)(_(e.errors))), null;
							const n = Object(y.i)(s());
							if (e.ok) {
								const {
									status: s
								} = e.payment;
								if (s === j.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === s && n) return a ? o(L({
									subredditId: a,
									powerupsCount: r,
									user: n,
									isAnonymous: t
								})) : b && o(F({
									user: n
								})), null
							}
						}
					} catch (I) {
						p.c.captureException(I)
					}
					return o(Object(h.paypalApiError)(E())), null
				}, N = (e, t) => async (r, n, {
					gqlContext: a
				}) => {
					var o;
					try {
						const n = c()(),
							s = await Object(j.c)(a(), n, e, t);
						if (s && s.ok) {
							const e = s.body.data.confirmEconPayment;
							if (null === (o = null == e ? void 0 : e.errors) || void 0 === o ? void 0 : o.length) return r(Object(h.paypalApiError)(_(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (s) {
						p.c.captureException(s)
					}
					return r(Object(h.paypalApiError)(E())), !1
				}, S = () => async (e, t, {
					gqlContext: r
				}) => {
					e(Object(h.savedCardsPending)());
					try {
						const t = await Object(j.l)(r());
						if (t.ok) {
							const r = t.body;
							r.errors && r.errors.length && e(Object(h.stripeApiError)(r.errors[0].message));
							const {
								savedStripeCards: n
							} = r.data.identity, a = n.map(e => o()({
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
						const t = await Object(j.k)(n(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: a
							} = r.data.deleteEconPaymentMethod;
						if (a && a.length) throw new Error(_(a))
					} catch (a) {
						p.c.captureException(a)
					}
				}, A = Object(m.a)(f.N), q = Object(m.a)(f.O), T = Object(m.a)(f.P), B = e => async (t, r) => {
					await t(A(e)), t(Object(l.f)({
						kind: b.b.Error,
						duration: l.a,
						text: e
					}))
				}, R = (e, t, r) => async (a, o, {
					gqlContext: s
				}) => {
					a(q({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const o = await Object(j.b)(s(), e);
						if (o.ok) {
							const e = o.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void a(B(n[0].message));
							a(T({
								subredditId: t,
								allocatedAt: r
							}))
						} else a(B(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (c) {
						p.c.captureException(c), a(B(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, U = Object(m.a)(f.R), L = e => async (t, r) => {
					t(U(e)), t(Object(k.i)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(O.g)(d.a.ECON_POWERUPS_PURCHASE)), t(Object(O.h)(d.a.ECON_POWERUPS_SUCCESS))
				}, F = Object(m.a)(f.V), D = Object(m.a)(f.Z)
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
				a = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				s = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/models/Gold/ProductOffer.ts"),
				i = r("./src/reddit/models/Toast/index.ts"),
				d = r("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				l = r("./src/graphql/operations/GlobalProductOffers.json"),
				u = r("./src/graphql/operations/PremiumProductOfferSubscriptions.json"),
				m = r("./src/graphql/operations/ProductOffers.json"),
				p = r("./src/lib/makeGqlRequest/index.ts");
			var b = r("./src/reddit/selectors/gold/productOffers.ts"),
				f = r("./src/reddit/actions/gold/constants.ts");
			const h = Object(a.a)(f.cb),
				g = Object(a.a)(f.bb),
				v = Object(a.a)(f.ab),
				y = Object(a.a)(f.Y),
				P = Object(a.a)(f.X),
				k = Object(a.a)(f.W),
				O = Object(a.a)(f.Cb),
				j = Object(a.a)(f.Ab),
				w = Object(a.a)(f.Bb),
				E = Object(a.a)(f.Fb),
				_ = Object(a.a)(f.Eb),
				x = Object(a.a)(f.Db),
				C = e => async t => {
					t(Object(s.f)({
						kind: i.b.Error,
						duration: s.a,
						text: e
					}))
				}, I = (e, t) => async r => {
					e === c.c.Premium ? r(S()) : t && r(N(e, t))
				}, N = (e, t) => async (r, a, {
					gqlContext: o
				}) => {
					const s = a();
					if (!Object(b.h)(s, {
							subredditId: t,
							type: e
						})) {
						r(h());
						try {
							const n = await ((e, t, r, n) => Object(p.a)(e, {
								...m,
								variables: {
									subredditId: t,
									types: r,
									includeGlobal: n
								}
							}))(o(), t, [e], !0);
							if (n.ok) {
								const e = n.body;
								if (e.errors && e.errors.length) throw new Error(e.errors[0].message);
								const a = e.data.subredditInfoById.productOffers ? e.data.subredditInfoById.productOffers.offers : [];
								return void(await r(g({
									productOffers: a || [],
									subredditId: t
								})))
							}
						} catch (c) {
							const e = n.fbt._("Something went wrong", null, {
								hk: "1IJNeH"
							});
							r(v(e)), r(C(e))
						}
					}
				}, S = () => async (e, t, {
					gqlContext: r
				}) => {
					var a, s;
					const i = c.c.Premium;
					e(y());
					try {
						const t = await ((e, t) => Object(p.a)(e, {
							...l,
							variables: {
								productTypes: t
							}
						}))(r(), [i]);
						if (t.ok) {
							const r = t.body;
							if (null === (a = r.errors) || void 0 === a ? void 0 : a.length) throw new Error(r.errors[0].message);
							return void e(P({
								productOffers: null !== (s = r.data.globalProductOffers.offers) && void 0 !== s ? s : []
							}))
						}
					} catch (d) {
						const t = d.message ? d.message : n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						o.c.captureMessage(t), e(k(t)), e(C(t))
					}
				}, M = () => async (e, t, {
					gqlContext: r
				}) => {
					var a, s, c;
					e(O());
					try {
						const t = await (e => Object(p.a)(e, u))(r());
						if (t.error) throw new Error(t.error.type);
						if (t.ok) {
							const r = t.body;
							if (null === (a = r.errors) || void 0 === a ? void 0 : a.length) throw new Error(r.errors[0].message);
							return void e(w({
								subscriptions: null !== (c = null === (s = r.data.identity) || void 0 === s ? void 0 : s.subscriptions) && void 0 !== c ? c : []
							}))
						}
					} catch (i) {
						o.c.captureException(i);
						const t = i.message ? i.message : n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						e(j(t)), e(C(t))
					}
				}, A = e => async (t, r, {
					gqlContext: a
				}) => {
					var o;
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
							t(x({
								orderId: e
							}))
						}
						return !0
					} catch (s) {
						const e = null !== (o = s.message) && void 0 !== o ? o : n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						});
						return t(_(e)), t(C(e)), !1
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
				return v
			})), r.d(t, "paypalApiError", (function() {
				return y
			})), r.d(t, "toggleRememberCard", (function() {
				return P
			})), r.d(t, "selectSavedCard", (function() {
				return k
			})), r.d(t, "_deleteSavedCard", (function() {
				return O
			})), r.d(t, "deleteSavedCard", (function() {
				return j
			})), r.d(t, "savedCardsPending", (function() {
				return w
			})), r.d(t, "savedCardsSuccess", (function() {
				return E
			})), r.d(t, "loadSavedCards", (function() {
				return _
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/sentry/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/endpoints/gold/purchase.ts"),
				c = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = Object(o.a)(c.B),
				l = Object(o.a)(c.w),
				u = Object(o.a)(c.b),
				m = Object(o.a)(c.y),
				p = Object(o.a)(c.a),
				b = Object(o.a)(c.E),
				f = Object(o.a)(c.G),
				h = Object(o.a)(c.F),
				g = Object(o.a)(c.D),
				v = e => async (t, r) => {
					const a = r(),
						o = Object(i.h)(a),
						s = Object(i.l)(a),
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
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(p({
							message: e
						}))
					}
				}, y = Object(o.a)(c.x), P = Object(o.a)(c.H), k = Object(o.a)(c.C), O = Object(o.a)(c.g), j = e => async (t, r, {
					apiContext: n
				}) => {
					t(O(e));
					try {
						const t = await Object(s.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (o) {
						a.c.captureException(o)
					}
				}, w = Object(o.a)(c.z), E = Object(o.a)(c.A), _ = () => async (e, t, {
					apiContext: r
				}) => {
					e(w());
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
			r.r(t), r.d(t, "openPremiumPurchaseModal", (function() {
				return f
			})), r.d(t, "closePremiumPurchaseModal", (function() {
				return h
			})), r.d(t, "stripePremiumPurchaseRequested", (function() {
				return g
			})), r.d(t, "paymentBlobCreated", (function() {
				return v
			})), r.d(t, "openWithBlob", (function() {
				return y
			}));
			var n = r("./src/config.ts"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				c = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/formatApiError/index.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				u = r("./src/reddit/endpoints/gold/purchase.ts"),
				m = r("./src/reddit/helpers/correlationIdTracker.ts"),
				p = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				b = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const f = Object(o.a)(b.t),
				h = Object(o.a)(b.e),
				g = e => async (t, r, {
					apiContext: n
				}) => {
					const o = Object(p.a)(r()),
						s = (null == o ? void 0 : o.pennies) || c.sb,
						l = Object(m.c)(m.a.GoldPayment);
					t(Object(d.stripeTokenPending)());
					const b = await t(Object(d.validateAndCreateStripeToken)(e));
					if (b) try {
						const e = await Object(u.g)({
							context: n(),
							correlationId: l,
							pennies: s,
							token: b
						});
						if (e.error) {
							const r = Object(i.a)(e.error);
							t(Object(d.stripeApiError)(r))
						} else t(Object(d.paymentCompleted)({
							confirmed: !1
						}))
					} catch (f) {
						const e = Object(i.a)(f);
						t(Object(d.stripeApiError)(e))
					} else {
						const e = a.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						t(Object(d.stripeApiError)(e))
					}
				}, v = Object(o.a)(b.v), y = ({
					packageId: e,
					correlationId: t
				}) => async (r, a, {
					apiContext: o
				}) => {
					r(f({
						packageId: e,
						correlationId: t
					}));
					const c = Object(p.a)(a()),
						u = (null == c ? void 0 : c.paypalButtonId) || n.a.paypal.buttons.premium;
					if (u) try {
						const e = await Object(l.f)({
							buttonId: u,
							context: o(),
							correlationId: t
						});
						if (e.error) {
							const t = Object(i.a)(e.error);
							r(Object(d.paypalApiError)(t))
						} else r(v(e))
					} catch (m) {
						const e = Object(i.a)(m);
						r(Object(d.paypalApiError)(e))
					} else s.c.captureMessage("No Premium packages available on Premium purchase modal")
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return h
			})), r.d(t, "c", (function() {
				return P
			})), r.d(t, "a", (function() {
				return O
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/env/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				c = r("./src/reddit/endpoints/gold/productCatalog.ts"),
				i = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/actions/post.ts"),
				m = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const p = Object(o.a)(m.j),
				b = Object(o.a)(m.k),
				f = Object(o.a)(m.i),
				h = e => async (t, r, {
					apiContext: o
				}) => {
					t(p());
					const d = r(),
						l = Object(i.J)(d);
					try {
						const r = !l,
							n = await Object(c.b)({
								context: o(),
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
				}, g = Object(o.a)(m.m), v = Object(o.a)(m.n), y = Object(o.a)(m.l), P = (e, t) => async (r, o, {
					apiContext: i
				}) => {
					r(g());
					try {
						const n = await Object(c.c)({
							awardId: e,
							context: i(),
							correlationId: t
						});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const a = n.body;
						if (!a.coinPackages || !a.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						r(v(a))
					} catch (d) {
						Object(a.b)() || console.error(d), s.c.captureException(d);
						const e = n.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						r(y(e))
					}
				}, k = Object(o.a)(m.h), O = () => async (e, t, {
					gqlContext: r
				}) => {
					var o, i;
					try {
						const t = await Object(c.a)(r());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (o = r.errors) || void 0 === o ? void 0 : o.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (i = r.awards) || void 0 === i ? void 0 : i.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(k({
								awards: r.awards
							})), e(Object(u.z)())
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
				a = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/components/Econ/Common/NewIcon/index.tsx"),
				c = r("./src/reddit/components/Econ/Common/BenefitTile/index.m.less"),
				i = r.n(c);
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				className: e,
				description: t,
				iconUrl: r,
				onClick: n,
				title: c,
				isNew: d
			}) => a.a.createElement("div", {
				className: Object(o.a)(e, i.a.container),
				onClick: n
			}, d && a.a.createElement(s.a, {
				className: i.a.new
			}), a.a.createElement("div", {
				className: i.a.icon,
				style: {
					backgroundImage: `url('${r}')`
				}
			}), c && a.a.createElement("h3", {
				className: i.a.title
			}, c), t && a.a.createElement("p", {
				className: i.a.description
			}, t))
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
				o = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/components/Econ/Common/NewIcon/index.m.less"),
				c = r.n(s);
			const {
				fbt: i
			} = r("./node_modules/fbt/lib/FbtPublic.js"), d = ({
				className: e
			}) => a.a.createElement("span", {
				className: Object(o.a)(c.a.new, e)
			}, i._("NEW", null, {
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
				o = r("./src/reddit/components/MarketingPageFooter/index.m.less"),
				s = r.n(o),
				c = r("./src/lib/classNames/index.ts");
			const {
				fbt: i
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => a.a.createElement("div", {
				className: Object(c.a)(e.className, s.a.marketingPageFooter)
			}, a.a.createElement("div", {
				className: Object(c.a)(e.className, s.a.marketingPageFooterInner)
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
			}, i._("about", null, {
				hk: "3IO4c7"
			}))), a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://about.reddit.com/careers/"
			}, i._("careers", null, {
				hk: "2GATRU"
			}))), a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://about.reddit.com/press/"
			}, i._("press", null, {
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
			}, i._("advertise", null, {
				hk: "RYuIn"
			}))), a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "http://www.redditblog.com/"
			}, i._("blog", null, {
				hk: "4xzWuA"
			}))), a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://www.reddithelp.com"
			}, i._("help", null, {
				hk: "36XyzA"
			}))))), a.a.createElement("div", {
				className: Object(c.a)(s.a.linkCol, s.a.linkBoldCol)
			}, a.a.createElement("ul", {
				className: s.a.linkColInner
			}, a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://www.reddit.com/mobile/download"
			}, i._("the reddit app", null, {
				hk: "OcJ1f"
			}))), a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://www.reddit.com/coins"
			}, i._("reddit coins", null, {
				hk: "3Ts6tu"
			}))), a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://www.reddit.com/premium"
			}, i._("reddit premium", null, {
				hk: "3vPbLO"
			}))), a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://redditgifts.com/"
			}, i._("reddit gifts", null, {
				hk: "3WNNEy"
			}))))), a.a.createElement("div", {
				className: Object(c.a)(s.a.linkCol, s.a.linkBoldCol)
			}, a.a.createElement("ul", {
				className: s.a.linkColInner
			}, a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://www.facebook.com/reddit/"
			}, i._("Facebook", null, {
				hk: "47DT2F"
			}))), a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://twitter.com/reddit"
			}, i._("Twitter", null, {
				hk: "3aUv7u"
			}))), a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://www.instagram.com/reddit/"
			}, i._("Instagram", null, {
				hk: "dVIRX"
			})))))), a.a.createElement("ul", {
				className: s.a.legal
			}, a.a.createElement("li", {
				className: s.a.legalItem
			}, a.a.createElement("a", {
				className: s.a.legalLink,
				href: "https://www.redditinc.com/policies/content-policy"
			}, i._("content policy", null, {
				hk: "4ptiaZ"
			}))), a.a.createElement("li", {
				className: s.a.legalItem
			}, a.a.createElement("a", {
				className: s.a.legalLink,
				href: "https://www.reddit.com/help/privacypolicy"
			}, i._("privacy policy", null, {
				hk: "1ybjnz"
			}))), a.a.createElement("li", {
				className: s.a.legalItem
			}, a.a.createElement("a", {
				className: s.a.legalLink,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, i._("user agreement", null, {
				hk: "4puRxC"
			}))), a.a.createElement("li", {
				className: s.a.legalItem
			}, a.a.createElement("a", {
				className: s.a.legalLink,
				href: "https://www.reddit.com/help/healthycommunities/"
			}, i._("mod policy", null, {
				hk: "1VvAdM"
			}))), a.a.createElement("li", {
				className: s.a.legalItem
			}, i._("© {year} Reddit, Inc. All rights reserved", [i._param("year", (new Date).getFullYear().toString())], {
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
				o = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = r.n(s);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => a.a.createElement("div", {
				className: Object(o.a)(c.a.loadingIcon, t, {
					[c.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				}
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
				o = r("./src/lib/omitHeaders/index.ts"),
				s = r("./src/reddit/constants/headers.ts"),
				c = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
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
					u = Object(c.a)(l);
				return Object(a.a)(Object(o.a)(t, [s.a]), {
					method: n.eb.POST,
					endpoint: u,
					data: d
				}).then(i.c)
			}, l = async ({
				context: e,
				coins: t,
				pennies: r,
				correlationId: c
			}) => {
				const d = {
					coins: t,
					pennies: r,
					correlation_id: c
				};
				return Object(a.a)(Object(o.a)(e, [s.a]), {
					method: n.eb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(i.c)
			}, u = async ({
				context: e,
				awardId: t,
				pennies: r,
				thingId: c,
				correlationId: d
			}) => {
				const l = {
					award_id: t,
					correlation_id: d,
					pennies: r,
					thing_id: c
				};
				return Object(a.a)(Object(o.a)(e, [s.a]), {
					method: n.eb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(i.c)
			}, m = async ({
				context: e,
				offerContext: t,
				orderId: r,
				coins: c,
				pennies: d,
				correlationId: l
			}) => {
				const u = {
					offer_context: t,
					order_id: r,
					coins: c,
					pennies: d,
					correlation_id: l
				};
				return Object(a.a)(Object(o.a)(e, [s.a]), {
					method: n.eb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: u
				}).then(i.c)
			}, p = async ({
				awardId: e,
				context: t,
				coins: r,
				correlationId: c,
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
					correlation_id: c,
					is_anonymous: d,
					message: l,
					offer_context: u,
					order_id: m,
					pennies: p,
					thing_id: b
				};
				return Object(a.a)(Object(o.a)(t, [s.a]), {
					method: n.eb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: f
				}).then(i.c)
			}, b = async ({
				awardId: e,
				context: t,
				correlationId: r,
				isAnonymous: c,
				message: d,
				orderId: l,
				thingId: u
			}) => {
				const m = {
					award_id: e,
					correlation_id: r,
					is_anonymous: c,
					message: d,
					order_id: l,
					thing_id: u
				};
				return Object(a.a)(Object(o.a)(t, [s.a]), {
					method: n.eb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: m
				}).then(i.c)
			}
		},
		"./src/reddit/endpoints/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return g
			})), r.d(t, "a", (function() {
				return v
			})), r.d(t, "i", (function() {
				return y
			})), r.d(t, "h", (function() {
				return P
			})), r.d(t, "j", (function() {
				return k
			})), r.d(t, "g", (function() {
				return O
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "e", (function() {
				return w
			})), r.d(t, "d", (function() {
				return E
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "l", (function() {
				return x
			})), r.d(t, "k", (function() {
				return C
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				a = r.n(n),
				o = r("./src/graphql/operations/CancelEconRecurringPayment.json"),
				s = r("./src/graphql/operations/ConfirmPaypalPayment.json"),
				c = r("./src/graphql/operations/ConfirmStripePaymentNewCard.json"),
				i = r("./src/graphql/operations/ConfirmStripePaymentSavedCard.json"),
				d = r("./src/graphql/operations/CreateEconOrder.json"),
				l = r("./src/graphql/operations/CreatePaypalPayment.json"),
				u = r("./src/graphql/operations/CreateStripePaymentWithProvidedCard.json"),
				m = r("./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				p = r("./src/graphql/operations/CreateStripePaymentWithSavedCard.json"),
				b = r("./src/graphql/operations/DeleteSavedStripeCard.json"),
				f = r("./src/graphql/operations/UserSavedStripeCards.json"),
				h = r("./src/lib/makeGqlRequest/index.ts");
			const g = (e, t, r, n, o) => {
				const {
					premium: s,
					...c
				} = o, i = (null == s ? void 0 : s.pricePackage) || r.pricePackages[0], l = new a.a(i.price).multipliedBy(n).toFixed();
				return Object(h.a)(e, {
					...d,
					variables: {
						input: {
							nonce: t,
							productId: r.id,
							productVersion: r.version,
							pricePackageId: i.id,
							currency: i.currency,
							price: l,
							productsCount: n.toString(),
							...c
						}
					}
				})
			};
			var v;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(v || (v = {}));
			const y = (e, t, r, n) => Object(h.a)(e, {
					...m,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				P = (e, t, r, n) => Object(h.a)(e, {
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
				O = (e, t, r, n, a) => Object(h.a)(e, {
					...l,
					variables: {
						nonce: t,
						orderId: r,
						successUrl: n,
						cancelUrl: a
					}
				}),
				j = (e, t, r, n) => Object(h.a)(e, {
					...s,
					variables: {
						nonce: t,
						paymentId: r,
						token: n
					}
				}),
				w = (e, t, r, n) => Object(h.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: r,
						cardId: n
					}
				}),
				E = (e, t, r, n, a) => Object(h.a)(e, {
					...c,
					variables: {
						nonce: t,
						paymentId: r,
						token: n,
						saveCard: a
					}
				}),
				_ = (e, t) => Object(h.a)(e, {
					...o,
					variables: {
						orderId: t
					}
				}),
				x = e => Object(h.a)(e, {
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
				return o
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n);

			function o(e, t) {
				const r = e.toString().split(":");
				return r.length % 2 == 0 ? e : r.reduce((e, r, n) => (n % 2 == 0 ? e.push(r) : "" === r ? e.push(":") : `:${r}:` in t ? e.push(t[`:${r}:`]) : e.push(`:${r}:`), e), []).map((e, t) => a.a.createElement(a.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/icons/svgs/PremiumLogo/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 558 98",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M355.8812 43.427c0 1.075-.265 2.029-.791 2.863-.527.833-1.34.25-2.437.25-1.181 0-1.083.694-1.705.082-.623-.611-.933-1.287-.933-2.025 0-.463-.964-.886-.89-1.266.074-.379.143-.759.206-1.138-.992 0-2.151.4-3.48 1.202-1.329.802-2.458 1.94-3.386 3.417v18.162c0 .738.143 1.34.428 1.803.284.464.732.812 1.344 1.045.527.21 1.207.369 2.04.474.833.106 1.556.18 2.168.221v2.089h-16.453v-2.089c.485-.041.986-.084 1.503-.126.517-.042.965-.126 1.345-.253.59-.19 1.028-.522 1.312-.995.286-.474.428-1.091.428-1.849V46.048c0-.653-.153-1.297-.459-1.928-.305-.632-.733-1.137-1.281-1.517-.401-.252-.876-.438-1.424-.553-.549-.115-1.139-.195-1.772-.237v-2.089l10.379-.695.442.443v4.397h.158c1.308-1.708 2.764-3.005 4.366-3.891 1.604-.887 3.07-1.329 4.399-1.329 1.329 0 2.409.432 3.243 1.298.833.865 1.25 2.024 1.25 3.48M380.264 51.3684c0-1.178-.101-2.439-.301-3.785-.201-1.346-.522-2.471-.965-3.375-.485-.968-1.15-1.756-1.993-2.366-.845-.611-1.93-.915-3.26-.915-2.214 0-4.054.92-5.52 2.759-1.467 1.84-2.263 4.401-2.39 7.682h14.429zm6.992 11.896c-1.307 2.49-3.058 4.473-5.252 5.95-2.194 1.475-4.715 2.215-7.562 2.215-2.511 0-4.709-.444-6.597-1.331-1.889-.884-3.444-2.087-4.667-3.606-1.224-1.519-2.136-3.29-2.737-5.315-.601-2.026-.902-4.166-.902-6.424 0-2.025.322-4.012.965-5.964.644-1.95 1.587-3.706 2.832-5.269 1.202-1.497 2.695-2.705 4.477-3.622 1.782-.918 3.781-1.376 5.996-1.376 2.278 0 4.229.359 5.853 1.075 1.624.718 2.943 1.699 3.956 2.943.969 1.182 1.693 2.574 2.167 4.177.475 1.603.712 3.343.712 5.22v2.089h-20.662c0 2.051.196 3.911.586 5.581.39 1.67 1.007 3.14 1.851 4.407.823 1.227 1.898 2.195 3.227 2.903 1.329.709 2.911 1.062 4.746 1.062 1.877 0 3.497-.44 4.857-1.32 1.361-.88 2.674-2.465 3.939-4.755l2.215 1.36zM444.2415 70.6057h-15.188v-2.089c.485-.041.975-.084 1.471-.126.495-.042.934-.126 1.314-.253.59-.189 1.028-.522 1.312-.997.285-.474.428-1.091.428-1.85v-16.106c0-2.193-.502-3.887-1.503-5.078-1.002-1.191-2.252-1.787-3.75-1.787-1.033 0-2.004.158-2.91.474-.907.317-1.74.759-2.5 1.329-.612.464-1.123.964-1.534 1.503-.412.538-.724.986-.934 1.344v18.004c0 .738.126 1.345.38 1.819.253.475.685.839 1.297 1.091.485.191.923.333 1.313.428.39.095.902.164 1.534.205v2.089h-14.871v-2.089c.486-.041.954-.084 1.409-.126.453-.042.87-.126 1.25-.253.589-.189 1.028-.522 1.312-.997.285-.474.428-1.091.428-1.85v-16.106c0-2.193-.503-3.887-1.507-5.078-1.005-1.191-2.258-1.787-3.759-1.787-1.036 0-2.009.163-2.918.49-.909.326-1.744.775-2.506 1.344-.612.465-1.131.986-1.553 1.566-.423.58-.741 1.019-.952 1.314v17.877c0 .717.148 1.318.443 1.803.296.486.738.854 1.329 1.108.443.211.896.369 1.36.474.464.106.982.18 1.551.221v2.089h-15.156v-2.089c.485-.041.986-.084 1.503-.126.516-.042.966-.126 1.344-.253.591-.189 1.029-.521 1.314-.995.285-.474.427-1.091.427-1.849v-19.373c0-.673-.154-1.279-.458-1.816-.307-.538-.734-.996-1.283-1.375-.4-.253-.896-.458-1.486-.616a9.5368 9.5368 0 0 0-1.836-.301v-2.089l10.442-.695.443.443v4.461h.222c.526-.527 1.171-1.149 1.929-1.867.76-.717 1.466-1.297 2.12-1.74.739-.506 1.662-.928 2.769-1.266 1.107-.337 2.305-.506 3.591-.506 2.025 0 3.765.543 5.221 1.629 1.456 1.087 2.5 2.401 3.132 3.94.758-.739 1.427-1.387 2.006-1.946.579-.558 1.342-1.155 2.29-1.788.8-.548 1.742-.991 2.827-1.329 1.085-.337 2.29-.506 3.618-.506 2.631 0 4.716.865 6.254 2.594 1.538 1.73 2.306 4.389 2.306 7.975v15.851c0 .738.127 1.345.38 1.819.253.475.685.839 1.297 1.091.485.191.965.333 1.439.428.475.095 1.008.164 1.599.205v2.089zM461.5892 68.2805c-.439-.116-.89-.27-1.351-.459-.607-.232-1.052-.59-1.336-1.076-.282-.485-.423-1.096-.423-1.835v-23.439l-.444-.443-11.01.695v2.089c.632.042 1.329.154 2.088.332.759.179 1.339.396 1.741.648.547.379.974.847 1.281 1.406.306.559.459 1.175.459 1.85v17.246c0 .757-.143 1.375-.428 1.848-.284.474-.723.806-1.312.995-.38.127-.828.211-1.345.253-.518.042-1.019.085-1.503.126v2.089h15.061v-2.089c-.545-.041-1.038-.121-1.478-.236M500.3714 70.0364l-10.188.695-.475-.442v-3.955h-.19c-.505.527-1.074 1.092-1.706 1.692-.631.602-1.358 1.145-2.179 1.63-.949.569-1.865 1.001-2.748 1.298-.885.295-2.138.442-3.759.442-2.759 0-4.859-.901-6.303-2.702-1.442-1.802-2.163-4.42-2.163-7.854v-14.919c0-.758-.143-1.395-.43-1.911-.287-.517-.706-.964-1.257-1.344-.383-.253-.861-.437-1.434-.553-.573-.116-1.178-.194-1.814-.237v-2.088l10.409-.76.474.444v21.673c0 2.257.507 3.955 1.519 5.094 1.013 1.139 2.225 1.709 3.639 1.709 1.16 0 2.194-.18 3.101-.537.906-.358 1.666-.779 2.277-1.266.571-.441 1.071-.91 1.503-1.405.433-.495.765-.953.997-1.375v-17.665c0-.695-.147-1.312-.443-1.85-.295-.537-.707-.995-1.233-1.374-.38-.252-.945-.405-1.694-.458-.749-.052-1.587-.099-2.514-.142v-2.088l11.357-.76.476.443v24.747c0 .716.147 1.328.443 1.834.295.505.706.937 1.233 1.295.38.232.833.384 1.362.459.526.074 1.107.121 1.74.142v2.088zM557.5775 70.6057h-15.188v-2.089c.485-.041.975-.084 1.471-.126.495-.042.934-.126 1.314-.253.59-.189 1.028-.522 1.312-.997.285-.474.428-1.091.428-1.85v-16.106c0-2.193-.502-3.887-1.503-5.078-1.002-1.191-2.252-1.787-3.75-1.787-1.033 0-2.004.158-2.91.474-.907.317-1.74.759-2.5 1.329-.612.464-1.123.964-1.534 1.503-.412.538-.724.986-.934 1.344v18.004c0 .738.126 1.345.38 1.819.253.475.685.839 1.297 1.091.485.191.923.333 1.313.428.39.095.902.164 1.534.205v2.089h-14.871v-2.089c.486-.041.954-.084 1.409-.126.453-.042.87-.126 1.25-.253.589-.189 1.028-.522 1.312-.997.285-.474.428-1.091.428-1.85v-16.106c0-2.193-.503-3.887-1.507-5.078-1.005-1.191-2.258-1.787-3.759-1.787-1.036 0-2.009.163-2.918.49-.909.326-1.744.775-2.506 1.344-.612.465-1.131.986-1.553 1.566-.423.58-.741 1.019-.952 1.314v17.877c0 .717.148 1.318.443 1.803.296.486.738.854 1.329 1.108.443.211.896.369 1.36.474.464.106.982.18 1.551.221v2.089h-15.156v-2.089c.485-.041.986-.084 1.503-.126.516-.042.966-.126 1.345-.253.59-.189 1.028-.521 1.313-.995.285-.474.427-1.091.427-1.849v-19.373c0-.673-.154-1.279-.458-1.816-.307-.538-.734-.996-1.282-1.375-.401-.253-.897-.458-1.487-.616a9.5368 9.5368 0 0 0-1.836-.301v-2.089l10.442-.695.443.443v4.461h.222c.526-.527 1.171-1.149 1.929-1.867.76-.717 1.466-1.297 2.12-1.74.739-.506 1.662-.928 2.769-1.266 1.107-.337 2.305-.506 3.591-.506 2.025 0 3.765.543 5.221 1.629 1.456 1.087 2.5 2.401 3.132 3.94.758-.739 1.427-1.387 2.006-1.946.579-.558 1.342-1.155 2.29-1.788.8-.548 1.742-.991 2.827-1.329 1.085-.337 2.29-.506 3.618-.506 2.631 0 4.716.865 6.254 2.594 1.538 1.73 2.306 4.389 2.306 7.975v15.851c0 .738.127 1.345.38 1.819.253.475.685.839 1.297 1.091.485.191.965.333 1.439.428.475.095 1.008.164 1.599.205v2.089zM260.3783 29.8567c0 3.366-2.729 6.096-6.096 6.096-3.366 0-6.095-2.73-6.095-6.096 0-3.367 2.729-6.096 6.095-6.096 3.367 0 6.096 2.729 6.096 6.096",
				fill: "#FF4500"
			}), a.a.createElement("path", {
				className: e.redditLogoClassName,
				d: "M275.1322 67.5725v-25.525h3.048c1.623 0 3.041-1.225 3.145-2.845.116-1.775-1.291-3.25-3.041-3.25h-3.152v-4.836c0-1.826-1.378-3.421-3.2-3.538-1.997-.13-3.657 1.452-3.657 3.421v4.953h-2.839c-1.624 0-3.041 1.224-3.146 2.845-.115 1.774 1.29 3.25 3.041 3.25h2.944v25.525c0 1.895 1.535 3.43 3.428 3.43 1.894 0 3.429-1.535 3.429-3.43M155.9915 42.0471c4.146 0 7.672 3.182 8.979 7.62h-17.959c1.307-4.438 4.833-7.62 8.98-7.62zm11.604 13.716c2.968 0 4.696-2.219 4.567-4.403-.068-1.154-.171-1.871-.306-2.457-1.819-7.886-8.232-13.713-15.865-13.713-9.048 0-16.382 8.187-16.382 18.287 0 10.099 7.334 18.287 16.382 18.287 5.667 0 9.715-2.064 12.661-5.299 1.436-1.577 1.171-4.054-.58-5.271-1.422-.988-3.223-.655-4.547.462-1.263 1.067-3.677 3.25-7.534 3.25-4.608 0-8.451-3.926-9.334-9.143h20.938zM139.9906 38.7346c0-1.701-1.24-3.109-2.865-3.379-4.993-.753-9.66 1.111-12.374 4.486v-.461c0-2.095-1.715-3.428-3.429-3.428-1.894 0-3.429 1.535-3.429 3.428v28.058c0 1.836 1.385 3.446 3.217 3.557 1.989.119 3.641-1.459 3.641-3.423v-14.474c0-6.405 4.817-11.664 11.426-10.95.239.025.463.024.677 0 1.756-.149 3.136-1.62 3.136-3.414M257.7113 42.429c0-1.895-1.534-3.429-3.429-3.429-1.893 0-3.428 1.534-3.428 3.429v25.144c0 1.894 1.535 3.429 3.428 3.429 1.895 0 3.429-1.535 3.429-3.429V42.429zM191.0413 64.9065c-5.261 0-9.524-5.117-9.524-11.43 0-6.312 4.263-11.429 9.524-11.429 5.26 0 9.524 5.117 9.524 11.429 0 6.313-4.264 11.43-9.524 11.43zm15.62-41.526c0-1.894-1.535-3.429-3.43-3.429-1.893 0-3.428 1.535-3.428 3.429v15.311c-2.323-2.322-5.283-3.502-8.762-3.502-9.048 0-16.383 8.188-16.383 18.287 0 10.1 7.335 18.287 16.383 18.287 3.51 0 6.452-1.208 8.825-3.545.302 1.584 1.693 2.784 3.365 2.784 1.895 0 3.43-1.535 3.43-3.43v-44.192zM226.8529 64.9065c-5.261 0-9.524-5.117-9.524-11.43 0-6.312 4.263-11.429 9.524-11.429 5.26 0 9.524 5.117 9.524 11.429 0 6.313-4.264 11.43-9.524 11.43zm15.62-41.526c0-1.894-1.535-3.429-3.429-3.429-1.893 0-3.428 1.535-3.428 3.429v15.311c-2.323-2.322-5.284-3.502-8.763-3.502-9.048 0-16.382 8.188-16.382 18.287 0 10.1 7.334 18.287 16.382 18.287 3.51 0 6.452-1.208 8.825-3.545.302 1.584 1.694 2.784 3.366 2.784 1.894 0 3.429-1.535 3.429-3.43v-44.192z",
				fill: "#FFF"
			}), a.a.createElement("path", {
				d: "M460.3783 29.8567c0 3.366-2.729 6.096-6.096 6.096-3.366 0-6.095-2.73-6.095-6.096 0-3.367 2.729-6.096 6.095-6.096 3.367 0 6.096 2.729 6.096 6.096M358.0775 43.3284c0 2.584-2.095 4.679-4.68 4.679-2.584 0-4.679-2.095-4.679-4.679 0-2.585 1.095-4.68 3.679-4.68 3.404 0 5.68 2.095 5.68 4.68M319.3236 65.5432c.844-1.308 1.466-2.826 1.867-4.556.401-1.729.601-3.66.601-5.791 0-1.56-.169-3.152-.506-4.777-.338-1.624-.865-3.037-1.582-4.24-.718-1.223-1.656-2.215-2.817-2.974-1.16-.76-2.552-1.14-4.176-1.14-1.561 0-2.89.344-3.987 1.029-1.096.686-2.046 1.503-2.847 2.452v18.447c.189.57.501 1.16.933 1.772.432.612.912 1.138 1.44 1.582.653.527 1.36.955 2.12 1.281.759.327 1.687.49 2.784.49 1.181 0 2.32-.31 3.417-.932 1.097-.622 2.015-1.503 2.753-2.643m5.157-22.433c1.244 1.477 2.21 3.191 2.896 5.142.684 1.951 1.028 4.182 1.028 6.691 0 2.468-.411 4.72-1.234 6.756-.823 2.035-1.91 3.771-3.259 5.204-1.413 1.456-2.985 2.575-4.715 3.355-1.729.78-3.564 1.171-5.505 1.171-1.878 0-3.417-.212-4.62-.633-1.202-.422-2.183-.918-2.942-1.487h-.253v12.387c0 2.504 1.06 3.37 1.787 3.599.911.288.458.153 1.51.27v2.089h-14.435v-2.089c.653-.042 1.286-.094 1.898-.158.612-.062 1.161-.169 1.646-.316.633-.211 1.076-.58 1.329-1.108.253-.527.38-1.149.38-1.866v-36.191c0-.633-.158-1.244-.475-1.835-.316-.59-.728-1.065-1.234-1.424-.38-.253-.907-.448-1.582-.585-.676-.138-1.329-.226-1.962-.269v-2.088l10.632-.697.442.38v3.512l.253.063c1.097-1.265 2.457-2.32 4.082-3.164 1.624-.843 3.238-1.265 4.841-1.265 1.94 0 3.718.411 5.332 1.234 1.613.822 3 1.93 4.16 3.322M94.9525 13.8157l-12.222-12.219a5.4455 5.4455 0 0 0-3.853-1.596h-61.204c-1.449 0-2.832.574-3.854 1.596l-12.222 12.219c-1.975 1.973-2.14 5.118-.377 7.287.047.062 5.045 6.539 5.045 17.667 0 7.109-.788 12.208-1.485 16.706-.58 3.727-1.123 7.248-1.123 11.179 0 10.568 8.171 22.452 23.783 24.717 11.37 1.653 17.741 5.784 17.779 5.804.916.62 1.98.927 3.045.927a5.55 5.55 0 0 0 3.04-.907c.063-.04 6.435-4.171 17.804-5.824 15.613-2.265 23.783-14.149 23.783-24.717 0-3.931-.543-7.452-1.123-11.179-.697-4.498-1.485-9.597-1.485-16.706 0-11.08 4.871-17.437 5.047-17.667 1.762-2.169 1.597-5.314-.378-7.287",
				fill: "#FF4500"
			}), a.a.createElement("path", {
				d: "M59.4115 56.5569c-2.757 0-5-2.243-5-5 0-2.758 2.243-5.001 5-5.001s5 2.243 5 5.001c0 2.757-2.243 5-5 5m.88 8.212c-3.412 3.407-9.951 3.672-11.874 3.672-1.924 0-8.464-.265-11.872-3.673-.506-.506-.506-1.326.001-1.833.505-.505 1.326-.506 1.832.001 2.15 2.15 6.752 2.914 10.039 2.914 3.286 0 7.889-.764 10.043-2.915.507-.506 1.327-.505 1.832.001.506.507.506 1.327-.001 1.833m-27.88-13.212c0-2.758 2.244-5.001 5.002-5.001 2.756 0 4.998 2.243 4.998 5.001 0 2.756-2.242 4.999-4.998 4.999-2.758 0-5.002-2.243-5.002-4.999m47.992-5.001c0-3.866-3.135-7-7-7-1.887 0-3.596.75-4.855 1.964-4.784-3.452-11.377-5.683-18.72-5.939l3.188-15.003 10.418 2.215c.127 2.649 2.296 4.763 4.977 4.763 2.761 0 5-2.238 5-5s-2.239-5-5-5c-1.965 0-3.646 1.143-4.465 2.791l-11.633-2.474c-.323-.07-.662-.006-.94.175-.278.181-.473.464-.542.788l-3.561 16.741c-7.451.207-14.149 2.439-18.995 5.93-1.258-1.206-2.961-1.951-4.841-1.951-3.866 0-7 3.134-7 7 0 2.845 1.7 5.287 4.136 6.383-.108.695-.167 1.401-.167 2.117 0 10.77 12.536 19.5 28 19.5s28-8.73 28-19.5c0-.711-.058-1.412-.165-2.103 2.452-1.089 4.165-3.542 4.165-6.397",
				fill: "#FFF"
			}))
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "e", (function() {
				return s
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return i
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
				o = (e, t = !1) => {
					const r = [];
					for (const n in a) {
						const o = a[n];
						(o.priceInCoins <= e || t) && r.push(o)
					}
					return r
				},
				s = e => n.fbt._({
					"*": "{number of months} months {number of coins} Coins",
					_1: "1 month {number of coins} Coins"
				}, [n.fbt._plural(e.monthsOfPremium, "number of months"), n.fbt._param("number of coins", e.priceInCoins.toLocaleString())], {
					hk: "2bar0C"
				}),
				c = "com.reddit.premium_1";
			var i;
			! function(e) {
				e.Monthly = "monthly", e.Yearly = "yearly"
			}(i || (i = {}))
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, a, o, s;
			r.d(t, "b", (function() {
					return a
				})), r.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(a || (a = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(o || (o = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(s || (s = {}))
		},
		"./src/reddit/pages/Premium/BenefitsSection/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_21g0kYfKRCqWnHX6Hs4EVJ",
				benefit: "_2ZtkpgcwK6dFNvjfEHZZT4"
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
			r.r(t);
			var n = r("./src/config.ts"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				c = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/react-router-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				l = r("./src/lib/constants/index.ts"),
				u = r("./src/lib/humanizeDate/index.ts"),
				m = r("./src/lib/loadRedditAdsPixel.ts"),
				p = r("./src/reddit/components/TrackingHelper/index.tsx"),
				b = r("./src/reddit/helpers/correlationIdTracker.ts"),
				f = r("./src/reddit/helpers/createEmojiText/index.tsx"),
				h = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				g = r("./src/reddit/selectors/telemetry.ts");
			const v = (e, t) => {
					const {
						packageId: r,
						renewInterval: n
					} = t;
					let a = "";
					if (r) {
						const t = Object(h.h)(e, r);
						if (!t) return null;
						a = t.frequency
					} else n && (a = n);
					return a ? {
						goldPurchase: {
							subscriptionType: a
						}
					} : null
				},
				y = "premium_marketing",
				P = e => t => ({
					source: y,
					action: "click",
					noun: "price",
					correlationId: Object(b.c)(b.a.GoldPayment),
					...g.defaults(t),
					...v(t, e)
				}),
				k = () => e => ({
					source: y,
					action: "click",
					noun: "manage",
					correlationId: Object(b.c)(b.a.GoldPayment),
					...g.defaults(e)
				});
			var O = r("./src/reddit/helpers/trackers/screenview.ts"),
				j = r("./src/telemetry/index.ts"),
				w = r("./src/telemetry/models/Timer.ts"),
				E = r("./src/reddit/pages/Premium/index.m.less"),
				_ = r.n(E),
				x = r("./src/reddit/actions/login.ts"),
				C = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				I = r("./src/reddit/actions/gold/productOffers.ts"),
				N = r("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				S = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				M = r("./src/reddit/components/MarketingPageFooter/index.tsx"),
				A = r("./src/reddit/components/PremiumPurchaseModal/Loader.tsx"),
				q = r("./src/reddit/models/Gold/ProductOffer.ts"),
				T = r("./src/reddit/selectors/experiments/econ/premiumMigration.ts"),
				B = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				R = r("./src/reddit/selectors/user.ts"),
				U = r("./src/reddit/icons/svgs/PremiumLogo/index.tsx"),
				L = r("./src/reddit/controls/Button/index.tsx"),
				F = r("./src/lib/classNames/index.ts"),
				D = r("./src/reddit/components/Econ/Common/BenefitTile/index.tsx"),
				G = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				J = r("./src/reddit/hooks/useTracking.ts"),
				z = r("./src/reddit/pages/Premium/BenefitsSection/index.m.less"),
				W = r.n(z);
			const H = {
					avatar: () => a.fbt._("Exclusive Avatar Gear", null, {
						hk: "1f1QJb"
					}),
					powerup: () => a.fbt._("Monthly Powerup*", null, {
						hk: "jpNRe"
					}),
					appIcons: () => a.fbt._("Custom App Icons*", null, {
						hk: "3nVSRo"
					}),
					adFree: () => a.fbt._("Ad-free Browsing", null, {
						hk: "2rgG59"
					}),
					monthlyCoins: ({
						periodicalCoins: e
					}) => a.fbt._("{amount} Monthly Coins", [a.fbt._param("amount", e)], {
						hk: "2mYzqc"
					}),
					lounge: () => a.fbt._("Members Lounge", null, {
						hk: "3iqx0z"
					}),
					awards: () => a.fbt._("Premium Awards", null, {
						hk: "3cn0Pf"
					}),
					more: () => a.fbt._("More to come...", null, {
						hk: "oz7E8"
					}),
					welcomeGift: ({
						bonusCoins: e
					}) => a.fbt._("{amount} Coin Bonus!*", [a.fbt._param("amount", e)], {
						hk: "2R1mSy"
					})
				},
				Y = {
					avatar: () => a.fbt._("Outfit your avatar with the best gear and accessories", null, {
						hk: "2HjLMS"
					}),
					powerup: () => a.fbt._("Help select communities unlock perks", null, {
						hk: "4tX97Z"
					}),
					appIcons: () => a.fbt._("Change your app icon to something more your style", null, {
						hk: "1WobLA"
					}),
					adFree: () => a.fbt._("Enjoy redditing without interruptions from ads", null, {
						hk: "2aDI9B"
					}),
					monthlyCoins: ({
						periodicalCoins: e
					}) => a.fbt._("Get {amount} coins a month and make it rain awards", [a.fbt._param("amount", e)], {
						hk: "228nfD"
					}),
					lounge: () => a.fbt._("Discover all the illuminati secrets in r/lounge", null, {
						hk: "nlK6D"
					}),
					awards: () => a.fbt._("Give exclusive awards that get more attention", null, {
						hk: "2Dzf3P"
					}),
					more: () => void 0,
					welcomeGift: () => a.fbt._("Claim this one-time-only welcome gift", null, {
						hk: "1x9RYJ"
					})
				},
				V = ({
					className: e
				}) => {
					const t = Object(c.e)(h.i),
						r = Object(J.a)();
					if (!(null == t ? void 0 : t.length)) return s.a.createElement("div", null, s.a.createElement(G.a, {
						sizePx: 80
					}));
					const {
						periodicalCoins: a,
						signupBonusCoins: o
					} = t[0], i = o && o > 0 ? o.toLocaleString() : void 0, d = a.toLocaleString(), l = [{
						key: "adFree",
						telemetryTag: "ad_free"
					}, {
						key: "avatar",
						isNew: !0,
						telemetryTag: "avatar"
					}, {
						key: "monthlyCoins",
						telemetryTag: "monthly_coins"
					}, {
						key: "lounge",
						telemetryTag: "premium_subreddits"
					}, {
						key: "appIcons",
						isNew: !0,
						telemetryTag: "app_icons"
					}, {
						key: "powerup",
						isNew: !0,
						telemetryTag: "powerups"
					}, {
						key: "awards",
						telemetryTag: "premium_awards"
					}];
					i ? l.push({
						key: "welcomeGift",
						telemetryTag: "coin_bonus"
					}) : l.push({
						key: "more",
						telemetryTag: "more_benefits"
					});
					const u = {
						periodicalCoins: d,
						bonusCoins: i
					};
					return s.a.createElement("div", {
						className: Object(F.a)(W.a.container, e)
					}, l.map(e => {
						const {
							key: t,
							isNew: a,
							telemetryTag: o
						} = e;
						return s.a.createElement(D.a, {
							className: W.a.benefit,
							description: Y[t](u),
							iconUrl: `${n.a.assetPath}/img/gold/premium-marketing/benefits-icons/${t}.png`,
							key: t,
							title: H[t](u),
							isNew: a,
							onClick: () => o && r((e => t => ({
								source: "premium_marketing",
								action: "click",
								noun: "premium_benefit",
								...g.defaults(t),
								goldPurchase: {
									premiumMarketingBenefit: e
								}
							}))(o))
						})
					}))
				};
			var Q = r("./src/reddit/models/Gold/Premium/index.ts"),
				$ = r("./src/reddit/selectors/gold/productOffers.ts"),
				K = r("./src/reddit/pages/Premium/PremiumButtons/index.m.less"),
				Z = r.n(K);
			var X = ({
					className: e,
					isHeroStyles: t,
					onClickPackage: r,
					onClickManagePremium: n
				}) => {
					var o, i;
					const d = Object(c.e)(T.a),
						l = Object(c.e)(h.i),
						u = Object(c.e)(R.s),
						m = Object(c.e)($.d);
					let p, b;
					const f = l.find(e => e.frequency === Q.c.Monthly),
						g = l.find(e => e.frequency === Q.c.Yearly);
					if (d && g && f) {
						const e = null === (o = Object($.i)(m, q.b.Month)) || void 0 === o ? void 0 : o[0],
							t = null === (i = Object($.i)(m, q.b.Year)) || void 0 === i ? void 0 : i[0];
						if (!e || !t) return null;
						p = {
							price: e.price,
							packageId: f.mobileId
						}, b = {
							price: t.price,
							packageId: g.mobileId,
							bonusPct: g.bonusPct
						}
					} else {
						if (!(null == l ? void 0 : l.length) || !f || !g) return null;
						p = {
							price: f.pennies,
							packageId: f.mobileId
						}, b = {
							price: g.pennies,
							packageId: g.mobileId,
							bonusPct: g.bonusPct
						}
					}
					const v = s.a.createElement(L.h, {
							className: Z.a.button,
							onClick: n
						}, a.fbt._("Manage Premium", null, {
							hk: "13LAq1"
						})),
						y = b && (b.price / 100).toLocaleString(),
						P = b && a.fbt._("{annual price}/Year", [a.fbt._param("annual price", "$" + y)], {
							hk: "4ohAoM"
						}),
						k = p && (p.price / 100).toLocaleString(),
						O = p && a.fbt._("{monthly price}/Month", [a.fbt._param("monthly price", "$" + k)], {
							hk: "3xMnhy"
						}),
						j = s.a.createElement(s.a.Fragment, null, b && s.a.createElement(L.h, {
							className: Z.a.premiumAnnualButton,
							onClick: () => r(b.packageId, q.b.Year)
						}, P, !!b.bonusPct && s.a.createElement("span", {
							className: Z.a.premiumDiscountBadge
						}, a.fbt._("Save {annual-month-discount}", [a.fbt._param("annual-month-discount", `${b.bonusPct}%`)], {
							hk: "TgjzN"
						}))), p && s.a.createElement(L.q, {
							className: Z.a.premiumMonthlyButton,
							onClick: () => {
								r(p.packageId, q.b.Month)
							},
							priority: L.b.Secondary
						}, O), s.a.createElement("div", {
							className: Z.a.renewalSubtext
						}, a.fbt._("Subscriptions automatically renew", null, {
							hk: "v8BCD"
						})));
					return s.a.createElement("div", {
						className: Object(F.a)(Z.a.buttons, e, {
							[Z.a.hero]: !!t
						})
					}, u ? v : j)
				},
				ee = r("./src/reddit/actions/claimgold.ts"),
				te = r("./src/reddit/selectors/claimgold.ts"),
				re = r("./src/reddit/pages/Premium/RedeemGiftCode/index.m.less"),
				ne = r.n(re);
			const ae = () => {
					const e = Object(J.a)(),
						t = Object(c.d)(),
						r = Object(c.e)(te.a),
						n = Object(c.e)(te.b);
					return s.a.createElement("div", {
						className: ne.a.container
					}, s.a.createElement(L.q, {
						className: ne.a.redeemCodeLink,
						onClick: () => {
							e((() => e => ({
								source: y,
								action: "click",
								noun: "redeem_code",
								correlationId: Object(b.c)(b.a.GoldPayment),
								...g.defaults(e)
							}))()), t(Object(ee.i)())
						},
						priority: L.b.Plain
					}, a.fbt._("Redeem a Gift Code", null, {
						hk: "10i0AM"
					})), s.a.createElement("form", {
						className: Object(F.a)(ne.a.giftCodeInputContainer, {
							[ne.a.giftCodeHidden]: !n
						}),
						onSubmit: e => {
							e.preventDefault(), t(Object(ee.h)())
						}
					}, s.a.createElement("input", {
						className: ne.a.giftCodeInput,
						type: "text",
						maxLength: 30,
						placeholder: a.fbt._("Gift Code", null, {
							hk: "1UDPjt"
						}),
						onChange: e => {
							e.stopPropagation(), t(Object(ee.j)(e.target.value))
						},
						value: r
					}), s.a.createElement(L.q, {
						className: ne.a.redeemButton,
						priority: L.b.Plain
					}, a.fbt._("Redeem", null, {
						hk: "1d2cH2"
					}))))
				},
				oe = Object(d.c)({
					goldExpiration: e => e.user.account && e.user.account.goldExpiration || 0,
					isGold: R.r,
					isPremiumSubscriber: R.s,
					isLoggedIn: R.J,
					premiumPackages: h.i,
					purchaseCatalogPending: h.k,
					shouldShowPremiumPurchaseModal: B.o,
					isPremiumMigrationEnabled: T.a
				}),
				se = Object(c.b)(oe, (e, t) => ({
					onManagePremium: () => e(Object(i.b)("/settings/premium")),
					onOpenLoginModal: () => e(Object(x.h)()),
					onPurchasePremium: (t, r) => e(Object(N.openWithBlob)({
						correlationId: r,
						packageId: t
					})),
					onSetPremiumRenewalInterval: t => e(Object(C.i)({
						renewInterval: t
					})),
					requestPurchaseCatalog: t => e(Object(S.b)(t)),
					premiumProductOffersRequested: () => e(Object(I.c)(q.c.Premium))
				}));
			class ce extends s.a.Component {
				constructor() {
					super(...arguments), this.correlationId = Object(b.d)(b.a.GoldPayment, !1), this.onClickPrice = (e, t) => {
						this.onPurchase(e, P, t)
					}, this.onClickManagePremium = () => {
						const {
							onManagePremium: e,
							sendEvent: t
						} = this.props;
						t(k()), e()
					}
				}
				componentDidMount() {
					const {
						premiumPackages: e,
						purchaseCatalogPending: t,
						requestPurchaseCatalog: r,
						premiumProductOffersRequested: n,
						isPremiumMigrationEnabled: a,
						sendEvent: o
					} = this.props;
					e.length || t || r(this.correlationId), a && n(), document.documentElement.scrollTop = document.body.scrollTop = 0;
					const s = l.Gb.PREMIUM;
					j.c.has(s) && (o(Object(O.n)(w.TimerType.InApp, j.c.end(s))), o(Object(O.m)())), Object(m.a)()
				}
				render() {
					const {
						className: e
					} = this.props;
					return s.a.createElement("div", {
						className: e
					}, this.renderHero(), s.a.createElement("div", {
						className: _.a.body
					}, s.a.createElement("h2", {
						className: _.a.title
					}, a.fbt._("Join Reddit Premium Today", null, {
						hk: "2sm8Pz"
					})), s.a.createElement(V, {
						className: _.a.benefits
					}), s.a.createElement(X, {
						onClickPackage: this.onClickPrice,
						onClickManagePremium: this.onClickManagePremium
					}), s.a.createElement("div", {
						className: _.a.paidPremiumSubtext
					}, a.fbt._("* Monthly Powerups, custom app icons, and welcome gifts are only available through a paid Reddit Premium subscription.", null, {
						hk: "2JAJTp"
					})), s.a.createElement(ae, null), this.renderFAQSection()), this.renderModal(), s.a.createElement(M.a, {
						className: _.a.footer
					}))
				}
				renderHero() {
					const {
						goldExpiration: e,
						isGold: t,
						isPremiumSubscriber: r
					} = this.props;
					return s.a.createElement("div", {
						className: _.a.hero,
						style: {
							backgroundImage: `linear-gradient(\n          to right,\n          rgba(0, 0, 0, 0.6) 0%,\n          rgba(0, 0, 0, 0) 50%\n        ), url("${n.a.assetPath}/img/gold/premium-marketing/premiumHero.jpg")`
						}
					}, s.a.createElement("div", {
						className: _.a.heroInner
					}, s.a.createElement("h1", {
						className: _.a.heroTitle
					}, s.a.createElement(U.a, {
						className: _.a.heroLogo
					})), s.a.createElement("p", {
						className: _.a.heroDescription
					}, a.fbt._("Help support Reddit and get VIP treatment, exclusive access, and monthly coins.", null, {
						hk: "19iqSJ"
					})), s.a.createElement(X, {
						className: _.a.heroButtons,
						isHeroStyles: !0,
						onClickPackage: this.onClickPrice,
						onClickManagePremium: this.onClickManagePremium
					}), !r && t && s.a.createElement("div", {
						className: _.a.heroPremiumExpiration
					}, Object(f.a)(a.fbt._("Your Premium membership is valid until {Premium expiration date}. Manage it :here:.", [a.fbt._param("Premium expiration date", Object(u.a)(e, !0))], {
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
						onOpenLoginModal: o,
						onPurchasePremium: s,
						onSetPremiumRenewalInterval: c,
						sendEvent: i,
						isPremiumMigrationEnabled: d
					} = this.props;
					n ? this.onClickManagePremium() : a ? (s(e, this.correlationId), d ? (c(r), i(t({
						renewInterval: r
					}))) : i(t({
						packageId: e
					}))) : o()
				}
				renderFAQSection() {
					return s.a.createElement(L.q, {
						className: _.a.faqButton,
						href: "https://reddit.zendesk.com/hc/en-us/articles/360043034412-What-is-a-Reddit-premium-membership-",
						kind: L.a.ExternalLink,
						priority: L.b.Plain,
						target: "_blank"
					}, a.fbt._("Visit the Reddit Premium FAQs", null, {
						hk: "22gM46"
					}))
				}
				renderModal() {
					return this.props.shouldShowPremiumPurchaseModal && s.a.createElement(A.a, null)
				}
				componentWillUnmount() {
					Object(b.b)(b.a.GoldPayment)
				}
			}
			t.default = se(Object(p.c)(ce))
		},
		"./src/reddit/selectors/experiments/econ/premiumMigration.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				a = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(a.a)(n.Jb)
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return i
			})), r.d(t, "h", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "i", (function() {
				return m
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "f", (function() {
				return h
			})), r.d(t, "e", (function() {
				return g
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/makeProductOfferKey/index.ts"),
				o = r("./src/reddit/models/Gold/ProductOffer.ts"),
				s = r("./src/reddit/models/Payments/index.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				d = (e, {
					subredditId: t,
					type: r
				}) => {
					var n, o, s;
					return t ? e.subreddits.productOffers[Object(a.a)(r, t)] : null === (s = null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.goldPurchase) || void 0 === o ? void 0 : o.productOffers) || void 0 === s ? void 0 : s[Object(a.a)(r)]
				},
				l = (e, {
					subredditId: t
				}) => {
					const r = d(e, {
						subredditId: t,
						type: o.c.Powerups
					});
					return r && r[0]
				},
				u = e => {
					const t = d(e, {
						type: o.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				m = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === s.b.PayPal || e[0] === s.b.Stripe)(e.requiredPaymentProviders)) : null,
				p = Object(n.a)(u, c.p, (e, t) => m(e, t) || null),
				b = Object(n.a)(p, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				f = Object(n.a)(p, e => (null == e ? void 0 : e[0].price) || null),
				h = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				g = Object(n.a)(h, e => Boolean(null == e ? void 0 : e.isCanceled))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Premium.c0d2ccb7c6060e8d96ce.js.map