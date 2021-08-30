// https://www.redditstatic.com/desktop2x/PowerupsPremiumUpsellModal.314332ce45aaa5195780.js
// Retrieved at 8/30/2021, 12:20:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PowerupsPremiumUpsellModal"], {
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
				return W
			})), r.d(t, "i", (function() {
				return D
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/lodash/omit.js"),
				s = r.n(o),
				a = r("./node_modules/uuid/v4.js"),
				i = r.n(a),
				c = r("./src/config.ts"),
				d = r("./src/reddit/constants/modals.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/lib/addQueryParams/index.ts"),
				m = r("./src/lib/makeActionCreator/index.ts"),
				p = r("./src/lib/sentry/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				f = r("./src/reddit/actions/gold/constants.ts"),
				g = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				y = r("./src/reddit/selectors/gold/productOffers.ts"),
				h = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				O = r("./src/reddit/selectors/user.ts"),
				j = r("./src/reddit/models/Gold/ProductOffer.ts"),
				P = r("./src/reddit/actions/gold/powerups.ts"),
				v = r("./src/reddit/actions/modal.ts"),
				w = r("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				k = r("./src/reddit/models/Payments/index.ts");
			const x = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				_ = e => e.map(e => e.message).join(" : "),
				E = (e, t, r) => async (o, s, {
					gqlContext: a
				}) => {
					const c = i()(),
						d = await Object(w.f)(a(), c, e, t, r);
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
				}, C = (e, t, r, o, s, a) => async (c, d, {
					gqlContext: l
				}) => {
					var u;
					const m = d(),
						b = () => c(Object(g.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						}))),
						f = s === j.c.Premium,
						P = s === j.c.Powerups,
						v = {};
					if (P && a) v.powerUps = {
						subredditId: a,
						isAnonymous: r
					};
					else if (f) {
						const e = Object(y.d)(m, {
							provider: k.b.Stripe
						});
						if (!e) return;
						v.premium = {
							pricePackage: e
						}
					}
					let x, C, I = "";
					try {
						I = await c(E(t, o, v))
					} catch (N) {
						return p.c.captureException(N), void(N.message && c(Object(g.stripeApiError)(N.message)))
					}
					c(Object(g.stripeTokenPending)());
					const S = Object(h.y)(m);
					if (S || (x = await c(Object(g.validateAndCreateStripeToken)(e)), C = Object(h.v)(m), x)) try {
						const t = i()(),
							n = S || C ? x && C ? Object(w.h)(l(), t, I, x.id) : S ? Object(w.j)(l(), t, I, S) : null : Object(w.i)(l(), t, I, x.id),
							s = await n;
						if (!(null == s ? void 0 : s.ok)) return void b();
						const m = s.body.data.createEconPayment;
						if (null === (u = null == m ? void 0 : m.errors) || void 0 === u ? void 0 : u.length) return void c(Object(g.stripeApiError)(_(m.errors)));
						const {
							ok: p,
							payment: y,
							providerExecution: {
								paymentIntentClientSecret: h
							}
						} = m;
						if (p && y.status === w.a.ActionRequired) {
							const t = await e.confirmCardPayment(h),
								{
									error: r
								} = t;
							if (r) return void(r.message ? c(Object(g.stripeApiError)(r.message)) : b());
							let n;
							if (!(n = S ? await Object(w.e)(l(), i()(), y.id, S) : await Object(w.d)(l(), i()(), y.id, x.id, C)).ok) return void b();
							const o = n.body;
							if (!o.data.confirmEconPayment.ok || o.data.confirmEconPayment.payment.status !== w.a.Paid) return void b()
						} else if (p && y.status !== w.a.Paid) return void b();
						const j = Object(O.k)(d());
						j && (P && a ? c(R({
							subredditId: a,
							powerupsCount: o,
							user: j,
							isAnonymous: r
						})) : f && c(W({
							user: j
						})))
					} catch (N) {
						p.c.captureException(N), b()
					}
				}, I = (e, t, r, n, o) => async (s, a, {
					gqlContext: d
				}) => {
					var l;
					const m = a(),
						b = n === j.c.Premium,
						f = n === j.c.Powerups,
						h = {};
					if (f && o) h.powerUps = {
						subredditId: o,
						isAnonymous: t
					};
					else if (b) {
						const e = Object(y.d)(m, {
							provider: k.b.PayPal
						});
						if (!e) return null;
						h.premium = {
							pricePackage: e
						}
					}
					let P = "";
					try {
						P = await s(E(e, r, h))
					} catch (I) {
						return p.c.captureException(I), I.message && s(Object(g.paypalApiError)(I.message)), null
					}
					const v = c.a.redditUrl;
					let C = {
						_o: v,
						o: P,
						pt: n
					};
					f && o && (C = {
						...C,
						r: o
					});
					try {
						const e = Object(u.a)(`${v}/framedModal/paypal-finish`, {
								...C,
								s: !0
							}),
							n = Object(u.a)(`${v}/framedModal/paypal-finish`, C),
							c = i()(),
							m = await Object(w.g)(d(), c, P, e, n);
						if (m && m.ok) {
							const e = m.body.data.createEconPayment;
							if (null === (l = null == e ? void 0 : e.errors) || void 0 === l ? void 0 : l.length) return s(Object(g.paypalApiError)(_(e.errors))), null;
							const n = Object(O.k)(a());
							if (e.ok) {
								const {
									status: a
								} = e.payment;
								if (a === w.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === a && n) return o ? s(R({
									subredditId: o,
									powerupsCount: r,
									user: n,
									isAnonymous: t
								})) : b && s(W({
									user: n
								})), null
							}
						}
					} catch (I) {
						p.c.captureException(I)
					}
					return s(Object(g.paypalApiError)(x())), null
				}, S = (e, t) => async (r, n, {
					gqlContext: o
				}) => {
					var s;
					try {
						const n = i()(),
							a = await Object(w.c)(o(), n, e, t);
						if (a && a.ok) {
							const e = a.body.data.confirmEconPayment;
							if (null === (s = null == e ? void 0 : e.errors) || void 0 === s ? void 0 : s.length) return r(Object(g.paypalApiError)(_(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (a) {
						p.c.captureException(a)
					}
					return r(Object(g.paypalApiError)(x())), !1
				}, N = () => async (e, t, {
					gqlContext: r
				}) => {
					e(Object(g.savedCardsPending)());
					try {
						const t = await Object(w.l)(r());
						if (t.ok) {
							const r = t.body;
							r.errors && r.errors.length && e(Object(g.stripeApiError)(r.errors[0].message));
							const {
								savedStripeCards: n
							} = r.data.identity, o = n.map(e => s()({
								...e,
								cardId: e.id
							}, "id"));
							e(Object(g.savedCardsSuccess)(o)), o[0] && e(Object(g.selectSavedCard)(o[0].cardId))
						} else e(Object(g.stripeApiError)(n.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (o) {
						p.c.captureException(o), e(Object(g.savedCardsSuccess)([]))
					}
				}, M = e => async (t, r, {
					gqlContext: n
				}) => {
					t(Object(g._deleteSavedCard)(e));
					try {
						const t = await Object(w.k)(n(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: o
							} = r.data.deleteEconPaymentMethod;
						if (o && o.length) throw new Error(_(o))
					} catch (o) {
						p.c.captureException(o)
					}
				}, A = Object(m.a)(f.O), T = Object(m.a)(f.P), U = Object(m.a)(f.Q), L = e => async (t, r) => {
					await t(A(e)), t(Object(l.f)({
						kind: b.b.Error,
						duration: l.a,
						text: e
					}))
				}, G = (e, t, r) => async (o, s, {
					gqlContext: a
				}) => {
					o(T({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const s = await Object(w.b)(a(), e);
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
					})), t(Object(v.g)(d.a.ECON_POWERUPS_PURCHASE)), t(Object(v.h)(d.a.ECON_POWERUPS_SUCCESS))
				}, q = Object(m.a)(f.W), W = ({
					user: e
				}) => async t => {
					await t(Object(P.n)(!0)), t(q({
						user: e
					}))
				}, D = Object(m.a)(f.ab)
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
				a = r("./src/reddit/actions/toaster.ts"),
				i = r("./src/reddit/models/Gold/ProductOffer.ts"),
				c = r("./src/reddit/models/Toast/index.ts"),
				d = r("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				l = r("./src/lib/makeGqlRequest/index.ts"),
				u = r("./src/redditGQL/operations/GlobalProductOffers.json"),
				m = r("./src/redditGQL/operations/PremiumProductOfferSubscriptions.json"),
				p = r("./src/redditGQL/operations/ProductOffers.json");
			var b = r("./src/reddit/selectors/gold/productOffers.ts"),
				f = r("./src/reddit/actions/gold/constants.ts");
			const g = Object(o.a)(f.db),
				y = Object(o.a)(f.cb),
				h = Object(o.a)(f.bb),
				O = Object(o.a)(f.Z),
				j = Object(o.a)(f.Y),
				P = Object(o.a)(f.X),
				v = Object(o.a)(f.Eb),
				w = Object(o.a)(f.Cb),
				k = Object(o.a)(f.Db),
				x = Object(o.a)(f.Hb),
				_ = Object(o.a)(f.Gb),
				E = Object(o.a)(f.Fb),
				C = e => async t => {
					t(Object(a.f)({
						kind: c.b.Error,
						duration: a.a,
						text: e
					}))
				}, I = (e, t) => async r => {
					e === i.c.Premium ? r(N()) : t && r(S(e, t))
				}, S = (e, t) => async (r, o, {
					gqlContext: s
				}) => {
					const a = o();
					if (!Object(b.i)(a, {
							subredditId: t,
							type: e
						})) {
						r(g());
						try {
							const n = await ((e, t, r, n) => Object(l.a)(e, {
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
								return void(await r(y({
									productOffers: o || [],
									subredditId: t
								})))
							}
						} catch (i) {
							const e = n.fbt._("Something went wrong", null, {
								hk: "1IJNeH"
							});
							r(h(e)), r(C(e))
						}
					}
				}, N = () => async (e, t, {
					gqlContext: r
				}) => {
					var o, a;
					const c = i.c.Premium;
					e(O());
					try {
						const t = await ((e, t) => Object(l.a)(e, {
							...u,
							variables: {
								productTypes: t
							}
						}))(r(), [c]);
						if (t.ok) {
							const r = t.body;
							if (null === (o = r.errors) || void 0 === o ? void 0 : o.length) throw new Error(r.errors[0].message);
							return void e(j({
								productOffers: null !== (a = r.data.globalProductOffers.offers) && void 0 !== a ? a : []
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
					var o, a, i;
					e(v());
					try {
						const t = await (e => Object(l.a)(e, m))(r());
						if (t.error) throw new Error(t.error.type);
						if (t.ok) {
							const r = t.body;
							if (null === (o = r.errors) || void 0 === o ? void 0 : o.length) throw new Error(r.errors[0].message);
							return void e(k({
								subscriptions: null !== (i = null === (a = r.data.identity) || void 0 === a ? void 0 : a.econSubscriptions) && void 0 !== i ? i : []
							}))
						}
					} catch (c) {
						s.c.captureException(c);
						const t = c.message ? c.message : n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						e(w(t)), e(C(t))
					}
				}, A = e => async (t, r, {
					gqlContext: o
				}) => {
					var s;
					t(x(e));
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
					} catch (a) {
						const e = null !== (s = a.message) && void 0 !== s ? s : n.fbt._("Something went wrong", null, {
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
				return g
			})), r.d(t, "stripeApiError", (function() {
				return y
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return h
			})), r.d(t, "paypalApiError", (function() {
				return O
			})), r.d(t, "toggleRememberCard", (function() {
				return j
			})), r.d(t, "selectSavedCard", (function() {
				return P
			})), r.d(t, "_deleteSavedCard", (function() {
				return v
			})), r.d(t, "deleteSavedCard", (function() {
				return w
			})), r.d(t, "savedCardsPending", (function() {
				return k
			})), r.d(t, "savedCardsSuccess", (function() {
				return x
			})), r.d(t, "loadSavedCards", (function() {
				return _
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/sentry/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/endpoints/gold/purchase.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = Object(s.a)(i.B),
				l = Object(s.a)(i.w),
				u = Object(s.a)(i.b),
				m = Object(s.a)(i.y),
				p = Object(s.a)(i.a),
				b = Object(s.a)(i.E),
				f = Object(s.a)(i.G),
				g = Object(s.a)(i.F),
				y = Object(s.a)(i.D),
				h = e => async (t, r) => {
					const o = r(),
						s = Object(c.h)(o),
						a = Object(c.l)(o),
						{
							token: i,
							error: d
						} = await e.createToken({
							name: s,
							address_zip: a
						});
					if (s.trim()) {
						if (!d && i) return i;
						t(g(d || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(p({
							message: e
						}))
					}
				}, O = Object(s.a)(i.x), j = Object(s.a)(i.H), P = Object(s.a)(i.C), v = Object(s.a)(i.g), w = e => async (t, r, {
					apiContext: n
				}) => {
					t(v(e));
					try {
						const t = await Object(a.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (s) {
						o.c.captureException(s)
					}
				}, k = Object(s.a)(i.z), x = Object(s.a)(i.A), _ = () => async (e, t, {
					apiContext: r
				}) => {
					e(k());
					try {
						const t = await Object(a.b)(r());
						if (t.error) throw new Error(t.error.type);
						const n = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(x(n)), n[0] && e(P(n[0].cardId))
					} catch (n) {
						o.c.captureException(n), e(x([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "setPremiumPurchaseModalInfo", (function() {
				return y
			})), r.d(t, "clearPremiumPurchaseModalInfo", (function() {
				return h
			})), r.d(t, "openPremiumPurchaseModal", (function() {
				return O
			})), r.d(t, "closePremiumPurchaseModal", (function() {
				return j
			})), r.d(t, "stripePremiumPurchaseRequested", (function() {
				return P
			})), r.d(t, "paymentBlobCreated", (function() {
				return v
			})), r.d(t, "openWithBlob", (function() {
				return w
			}));
			var n = r("./src/config.ts"),
				o = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/sentry/index.ts"),
				i = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/formatApiError/index.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/constants/modals.ts"),
				m = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = r("./src/reddit/endpoints/gold/purchase.ts"),
				b = r("./src/reddit/helpers/correlationIdTracker.ts"),
				f = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				g = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const y = Object(s.a)(g.t),
				h = Object(s.a)(g.e),
				O = (e, t) => async r => {
					r(y(e)), r(Object(l.h)(u.a.ECON_PREMIUM_PURCHASE, t))
				}, j = () => async e => {
					e(Object(l.g)(u.a.ECON_PREMIUM_PURCHASE)), e(h())
				}, P = e => async (t, r, {
					apiContext: n
				}) => {
					const s = Object(f.a)(r()),
						a = (null == s ? void 0 : s.pennies) || i.wb,
						l = Object(b.c)(b.a.GoldPayment);
					t(Object(d.stripeTokenPending)());
					const u = await t(Object(d.validateAndCreateStripeToken)(e));
					if (u) try {
						const e = await Object(p.h)({
							context: n(),
							correlationId: l,
							pennies: a,
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
						const e = o.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						t(Object(d.stripeApiError)(e))
					}
				}, v = Object(s.a)(g.v), w = ({
					packageId: e,
					correlationId: t
				}, r) => async (o, s, {
					apiContext: i
				}) => {
					o(O({
						packageId: e,
						correlationId: t
					}, r));
					const l = Object(f.a)(s()),
						u = (null == l ? void 0 : l.paypalButtonId) || n.a.paypal.buttons.premium;
					if (u) try {
						const e = await Object(m.f)({
							buttonId: u,
							context: i(),
							correlationId: t
						});
						if (e.error) {
							const t = Object(c.a)(e.error);
							o(Object(d.paypalApiError)(t))
						} else o(v(e))
					} catch (p) {
						const e = Object(c.a)(p);
						o(Object(d.paypalApiError)(e))
					} else a.c.captureMessage("No Premium packages available on Premium purchase modal")
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return g
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "a", (function() {
				return v
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/env/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/endpoints/gold/productCatalog/index.ts"),
				c = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/actions/post.ts"),
				m = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const p = Object(s.a)(m.j),
				b = Object(s.a)(m.k),
				f = Object(s.a)(m.i),
				g = e => async (t, r, {
					apiContext: s
				}) => {
					t(p());
					const d = r(),
						l = Object(c.K)(d);
					try {
						const r = !l,
							n = await Object(i.b)({
								context: s(),
								correlationId: e,
								shouldUseCurrentOrigin: r
							});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const o = n.body;
						t(b(o))
					} catch (u) {
						Object(o.b)() || console.error(u), a.c.captureException(u);
						const e = n.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(f(e))
					}
				}, y = Object(s.a)(m.m), h = Object(s.a)(m.n), O = Object(s.a)(m.l), j = (e, t) => async (r, s, {
					apiContext: c
				}) => {
					r(y());
					try {
						const n = await Object(i.c)({
							awardId: e,
							context: c(),
							correlationId: t
						});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const o = n.body;
						if (!o.coinPackages || !o.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						r(h(o))
					} catch (d) {
						Object(o.b)() || console.error(d), a.c.captureException(d);
						const e = n.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						r(O(e))
					}
				}, P = Object(s.a)(m.h), v = () => async (e, t, {
					gqlContext: r
				}) => {
					var s, c;
					try {
						const t = await Object(i.a)(r());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (s = r.errors) || void 0 === s ? void 0 : s.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (c = r.awards) || void 0 === c ? void 0 : c.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(P({
								awards: r.awards
							})), e(Object(u.B)())
						}
					} catch (m) {
						Object(o.b)() || console.error(m), e(Object(d.f)({
							kind: l.b.Error,
							text: n.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), a.c.captureException(m)
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
				a = r("./src/reddit/components/Econ/Common/NewIcon/index.tsx"),
				i = r("./src/reddit/components/Econ/Common/BenefitTile/index.m.less"),
				c = r.n(i);
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
				className: Object(s.a)(e, c.a.container),
				onClick: n
			}, d && o.a.createElement(a.a, {
				className: c.a.new
			}), o.a.createElement("div", {
				className: c.a.icon,
				style: {
					backgroundImage: `url('${r}')`
				}
			}), i && o.a.createElement("h3", {
				className: c.a.title
			}, i), t && o.a.createElement("p", {
				className: c.a.description
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
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/svgs/Close/index.tsx"),
				i = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				c = r.n(i);
			const d = ({
				className: e,
				onClick: t
			}) => o.a.createElement("button", {
				className: Object(s.a)(c.a.closeButton, e),
				onClick: t
			}, o.a.createElement(a.a, {
				className: c.a.closeIcon
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
				a = r("./src/reddit/components/Econ/Common/NewIcon/index.m.less"),
				i = r.n(a);
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js"), d = ({
				className: e
			}) => o.a.createElement("span", {
				className: Object(s.a)(i.a.new, e)
			}, c._("NEW", null, {
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
				return Y
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/higherOrderComponents/asModal/index.tsx"),
				i = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				d = r("./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx"),
				l = r("./src/reddit/components/PremiumPurchaseModal/Loader.tsx"),
				u = r("./src/reddit/constants/modals.ts"),
				m = r("./src/reddit/helpers/trackers/powerups.ts"),
				p = r("./src/reddit/hooks/useTracking.ts"),
				b = r("./src/reddit/selectors/platform.ts"),
				f = r("./src/config.ts"),
				g = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				y = r("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				h = r("./src/reddit/controls/Button/index.tsx"),
				O = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				j = r("./src/reddit/actions/gold/productOffers.ts"),
				P = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				v = r("./src/reddit/helpers/correlationIdTracker.ts"),
				w = r("./src/reddit/models/Gold/Premium/index.ts"),
				k = r("./src/reddit/models/Gold/ProductOffer.ts"),
				x = r("./src/reddit/selectors/gold/productOffers.ts"),
				_ = r("./src/reddit/selectors/gold/purchaseCatalog.ts");
			var E = r("./src/reddit/pages/Premium/BenefitsSection/index.tsx"),
				C = r("./src/lib/classNames/index.ts"),
				I = r("./src/reddit/icons/fonts/index.tsx"),
				S = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/checklist.m.less"),
				N = r.n(S);
			const M = ({
					className: e,
					items: t
				}) => o.a.createElement("div", {
					className: e
				}, t.map(e => o.a.createElement(A, {
					key: e,
					className: N.a.checklistItem,
					item: e
				}))),
				A = ({
					className: e,
					item: t
				}) => o.a.createElement("div", {
					className: Object(C.a)(N.a.checklistItemRow, e)
				}, o.a.createElement("div", {
					className: N.a.iconBackground
				}, o.a.createElement(I.a, {
					className: N.a.icon,
					name: "checkmark_fill"
				})), o.a.createElement("span", {
					className: N.a.checklistItemText
				}, t));
			var T = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/offerCard.m.less"),
				U = r.n(T);
			const L = ({
				className: e,
				body: t,
				buttons: r,
				iconUrl: n,
				title: s
			}) => o.a.createElement("div", {
				className: Object(C.a)(e, U.a.container)
			}, o.a.createElement("div", {
				className: U.a.icon,
				style: {
					backgroundImage: `url('${n}')`
				}
			}), o.a.createElement("h3", {
				className: U.a.title
			}, s), t, o.a.createElement("div", {
				className: U.a.buttons
			}, r));
			var G = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/offers.m.less"),
				B = r.n(G);
			const {
				fbt: R
			} = r("./node_modules/fbt/lib/FbtPublic.js"), q = ["premium-powerups"], W = ["premium-powerups", "premium-ad-free", "premium-avatars", "premium-monthly-coins"], D = ({
				subredditId: e
			}) => {
				const t = Object(s.d)(),
					r = Object(p.a)(),
					a = function() {
						var e, t;
						const r = Object(s.d)(),
							o = Object(s.e)(_.j),
							a = Object(s.e)(x.e),
							i = Object(s.e)(_.l);
						Object(n.useEffect)(() => {
							o.length || i || r(Object(P.b)()), a || r(Object(j.c)(k.c.Premium))
						});
						const c = o.find(e => e.frequency === w.c.Monthly),
							d = o.find(e => e.frequency === w.c.Yearly);
						if (!c || !d) return null;
						const l = null === (e = Object(x.j)(a, k.b.Month)) || void 0 === e ? void 0 : e[0],
							u = null === (t = Object(x.j)(a, k.b.Year)) || void 0 === t ? void 0 : t[0];
						return l && u ? {
							correlationId: Object(v.d)(v.a.GoldPayment, !1),
							premiumMonthly: {
								price: l.price,
								packageId: c.mobileId
							},
							premiumAnnual: {
								price: u.price,
								packageId: d.mobileId,
								bonusPct: d.bonusPct
							}
						} : null
					}(),
					c = Object(s.e)(t => Object(x.a)(t, {
						subredditId: e
					})),
					d = Object(s.e)(_.h),
					l = q.map(e => E.b[e]());
				return o.a.createElement("div", {
					className: B.a.container
				}, a && c ? o.a.createElement(o.a.Fragment, null, o.a.createElement(L, {
					title: R._("Powerups Subscription", null, {
						hk: "4zbTSR"
					}),
					iconUrl: `${f.a.assetPath}/img/gold/premium-marketing/benefits-icons/premium-powerups.png`,
					body: o.a.createElement(M, {
						items: l
					}),
					buttons: c && o.a.createElement(h.q, {
						className: B.a.powerupsButton,
						priority: h.b.Secondary,
						onClick: () => {
							r(Object(m.o)()), t(Object(i.h)(u.a.ECON_POWERUPS_PURCHASE))
						},
						isFullWidth: !0
					}, R._("{powerupPrice}/mo", [R._param("powerupPrice", `$${Q(c)}`)], {
						hk: "1ApJir"
					}))
				}), o.a.createElement(L, {
					title: R._("Reddit Premium", null, {
						hk: "S3DXw"
					}),
					iconUrl: `${f.a.assetPath}/img/gold/premium-marketing/benefits-icons/premium-crest.png`,
					body: o.a.createElement(F, {
						premiumMonthlyCoins: d
					}),
					buttons: a && o.a.createElement(J, {
						premiumMonthly: a.premiumMonthly,
						premiumAnnual: a.premiumAnnual,
						onClickPrice: (e, n) => {
							r(Object(m.p)(n)), t(Object(y.openWithBlob)({
								correlationId: a.correlationId,
								packageId: e
							}, {
								isPowerupsPremiumPurchase: !0
							})), t(Object(g.i)({
								renewInterval: n
							}))
						}
					})
				})) : o.a.createElement(O.a, {
					className: B.a.loadingIcon,
					sizePx: 40
				}))
			};

			function Q(e) {
				return (e / 100).toFixed(2).toLocaleString()
			}
			const F = ({
					premiumMonthlyCoins: e
				}) => {
					const t = W.map(t => E.b[t]({
						periodicalCoins: e
					}));
					return o.a.createElement("div", null, o.a.createElement(M, {
						items: t
					}), o.a.createElement("div", {
						className: B.a.andSoMuchMore
					}, R._("And so much more!", null, {
						hk: "oMd"
					})))
				},
				J = ({
					premiumMonthly: e,
					premiumAnnual: t,
					onClickPrice: r
				}) => o.a.createElement("div", {
					className: B.a.premiumButtons
				}, o.a.createElement(h.q, {
					className: B.a.powerupsButton,
					priority: h.b.Secondary,
					onClick: () => r(e.packageId, k.b.Month),
					isFullWidth: !0
				}, R._("{premiumMonthlyPrice}/mo", [R._param("premiumMonthlyPrice", `$${Q(e.price)}`)], {
					hk: "4i6SO9"
				})), o.a.createElement(h.h, {
					className: B.a.powerupsButton,
					onClick: () => r(t.packageId, k.b.Year),
					isFullWidth: !0
				}, R._("{premiumAnnualPrice}/yr", [R._param("premiumAnnualPrice", `$${Q(t.price)}`)], {
					hk: "2YAbPf"
				})));
			var H = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.m.less"),
				$ = r.n(H);
			const {
				fbt: Z
			} = r("./node_modules/fbt/lib/FbtPublic.js"), Y = () => {
				const e = Object(s.e)(b.q),
					t = Object(s.d)(),
					r = Object(p.a)();
				Object(n.useEffect)(() => {
					e && (r(Object(m.q)()), Object(l.a)(), Object(d.a)())
				}, []);
				const a = () => t(Object(i.g)(u.a.ECON_POWERUPS_PREMIUM_UPSELL));
				return e ? o.a.createElement(o.a.Fragment, null, o.a.createElement(c.a, {
					onClick: a
				}), o.a.createElement("div", {
					className: $.a.container
				}, o.a.createElement("h1", {
					className: $.a.title
				}, Z._("Get more with Premium!", null, {
					hk: "YXIbY"
				})), o.a.createElement(D, {
					subredditId: e
				}), o.a.createElement("div", {
					className: $.a.footer
				}, Z._("Subscriptions automatically renew.", null, {
					hk: "133vve"
				})))) : (a(), null)
			};
			t.default = Object(a.a)(Y)
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
				a = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = r.n(a);
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
				o = r("./src/lib/makeApiRequest/index.ts"),
				s = r("./src/lib/omitHeaders/index.ts"),
				a = r("./src/reddit/constants/headers.ts"),
				i = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
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
					u = Object(i.a)(l);
				return Object(o.a)(Object(s.a)(t, [a.a]), {
					method: n.ib.POST,
					endpoint: u,
					data: d
				}).then(c.c)
			}, l = async ({
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
				return Object(o.a)(Object(s.a)(e, [a.a]), {
					method: n.ib.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(c.c)
			}, u = async ({
				context: e,
				awardId: t,
				pennies: r,
				thingId: i,
				correlationId: d
			}) => {
				const l = {
					award_id: t,
					correlation_id: d,
					pennies: r,
					thing_id: i
				};
				return Object(o.a)(Object(s.a)(e, [a.a]), {
					method: n.ib.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(c.c)
			}, m = async ({
				context: e,
				offerContext: t,
				orderId: r,
				coins: i,
				pennies: d,
				correlationId: l
			}) => {
				const u = {
					offer_context: t,
					order_id: r,
					coins: i,
					pennies: d,
					correlation_id: l
				};
				return Object(o.a)(Object(s.a)(e, [a.a]), {
					method: n.ib.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: u
				}).then(c.c)
			}, p = async ({
				awardId: e,
				context: t,
				coins: r,
				correlationId: i,
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
					correlation_id: i,
					is_anonymous: d,
					message: l,
					offer_context: u,
					order_id: m,
					pennies: p,
					thing_id: b
				};
				return Object(o.a)(Object(s.a)(t, [a.a]), {
					method: n.ib.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: f
				}).then(c.c)
			}, b = async ({
				awardId: e,
				context: t,
				correlationId: r,
				isAnonymous: i,
				message: d,
				orderId: l,
				thingId: u
			}) => {
				const m = {
					award_id: e,
					correlation_id: r,
					is_anonymous: i,
					message: d,
					order_id: l,
					thing_id: u
				};
				return Object(o.a)(Object(s.a)(t, [a.a]), {
					method: n.ib.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: m
				}).then(c.c)
			}
		},
		"./src/reddit/endpoints/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return y
			})), r.d(t, "a", (function() {
				return h
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "j", (function() {
				return P
			})), r.d(t, "g", (function() {
				return v
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "e", (function() {
				return k
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "l", (function() {
				return E
			})), r.d(t, "k", (function() {
				return C
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				o = r.n(n),
				s = r("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				a = r("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				i = r("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				c = r("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				d = r("./src/redditGQL/operations/CreateEconOrder.json"),
				l = r("./src/redditGQL/operations/CreatePaypalPayment.json"),
				u = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				m = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				p = r("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				b = r("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				f = r("./src/redditGQL/operations/UserSavedStripeCards.json"),
				g = r("./src/lib/makeGqlRequest/index.ts");
			const y = (e, t, r, n, s) => {
				const {
					premium: a,
					...i
				} = s, c = (null == a ? void 0 : a.pricePackage) || r.pricePackages[0], l = new o.a(c.price).multipliedBy(n).toFixed();
				return Object(g.a)(e, {
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
							...i
						}
					}
				})
			};
			var h;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(h || (h = {}));
			const O = (e, t, r, n) => Object(g.a)(e, {
					...m,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				j = (e, t, r, n) => Object(g.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				P = (e, t, r, n) => Object(g.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: r,
						cardId: n
					}
				}),
				v = (e, t, r, n, o) => Object(g.a)(e, {
					...l,
					variables: {
						nonce: t,
						orderId: r,
						successUrl: n,
						cancelUrl: o
					}
				}),
				w = (e, t, r, n) => Object(g.a)(e, {
					...a,
					variables: {
						nonce: t,
						paymentId: r,
						token: n
					}
				}),
				k = (e, t, r, n) => Object(g.a)(e, {
					...c,
					variables: {
						nonce: t,
						paymentId: r,
						cardId: n
					}
				}),
				x = (e, t, r, n, o) => Object(g.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: r,
						token: n,
						saveCard: o
					}
				}),
				_ = (e, t) => Object(g.a)(e, {
					...s,
					variables: {
						orderId: t
					}
				}),
				E = e => Object(g.a)(e, {
					...f,
					variables: {}
				}),
				C = (e, t) => Object(g.a)(e, {
					...b,
					variables: {
						cardId: t
					}
				})
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
				o = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const a = (e, t) => {
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
				c = e => t => ({
					source: i,
					action: "click",
					noun: "price",
					correlationId: Object(n.c)(n.a.GoldPayment),
					...s.defaults(t),
					...a(t, e)
				}),
				d = () => e => ({
					source: i,
					action: "click",
					noun: "redeem_code",
					correlationId: Object(n.c)(n.a.GoldPayment),
					...s.defaults(e)
				}),
				l = () => e => ({
					source: i,
					action: "click",
					noun: "manage",
					correlationId: Object(n.c)(n.a.GoldPayment),
					...s.defaults(e)
				}),
				u = e => t => ({
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
				return a
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return c
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
				a = e => n.fbt._({
					"*": "{number of months} months {number of coins} Coins",
					_1: "1 month {number of coins} Coins"
				}, [n.fbt._plural(e.monthsOfPremium, "number of months"), n.fbt._param("number of coins", e.priceInCoins.toLocaleString())], {
					hk: "2bar0C"
				}),
				i = "com.reddit.premium_1";
			var c;
			! function(e) {
				e.Monthly = "monthly", e.Yearly = "yearly"
			}(c || (c = {}))
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, o, s, a;
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
				}(a || (a = {}))
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
				return y
			})), r.d(t, "a", (function() {
				return O
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/config.ts"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/components/Econ/Common/BenefitTile/index.tsx"),
				l = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = r("./src/reddit/helpers/trackers/premium.ts"),
				m = r("./src/reddit/hooks/useTracking.ts"),
				p = r("./src/reddit/selectors/experiments/econ/index.ts"),
				b = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				f = r("./src/reddit/pages/Premium/BenefitsSection/index.m.less"),
				g = r.n(f);
			const y = {
					"premium-avatars": () => n.fbt._("Exclusive Avatar Gear", null, {
						hk: "1f1QJb"
					}),
					"premium-powerups": () => n.fbt._("Monthly Powerup", null, {
						hk: "343Zbm"
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
				h = {
					"premium-avatars": () => n.fbt._("Outfit your avatar with the best gear and accessories", null, {
						hk: "2HjLMS"
					}),
					"premium-powerups": ({
						isAltruismMessagingEnabled: e
					}) => e ? n.fbt._("Give back to your community", null, {
						hk: "4tHRq3"
					}) : n.fbt._("Help select communities unlock perks", null, {
						hk: "4tX97Z"
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
				O = ({
					className: e
				}) => {
					const t = Object(a.e)(b.j),
						r = Object(a.e)(b.h),
						n = Object(a.e)(p.g),
						o = Object(m.a)();
					if (!(null == t ? void 0 : t.length)) return s.a.createElement("div", null, s.a.createElement(l.a, {
						sizePx: 80
					}));
					const {
						signupBonusCoins: f
					} = t[0], O = f && f > 0 ? f.toLocaleString() : void 0, j = n ? [{
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
					O ? j.push({
						key: "premium-bonus",
						asterisk: !0,
						telemetryTag: "coin_bonus"
					}) : j.push({
						key: "premium-more",
						telemetryTag: "more_benefits"
					});
					const P = {
						periodicalCoins: r,
						bonusCoins: O,
						isAltruismMessagingEnabled: n
					};
					return s.a.createElement("div", {
						className: Object(c.a)(g.a.container, e)
					}, j.map(e => {
						const {
							key: t,
							isNew: r,
							asterisk: n,
							telemetryTag: a
						} = e;
						return s.a.createElement(d.a, {
							className: g.a.benefit,
							description: h[t](P),
							iconUrl: `${i.a.assetPath}/img/gold/premium-marketing/benefits-icons/${t}.png`,
							key: t,
							title: `${y[t](P)}${n?"*":""}`,
							isNew: r,
							onClick: () => a && o(Object(u.b)(a))
						})
					}))
				}
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
				return g
			})), r.d(t, "g", (function() {
				return y
			})), r.d(t, "f", (function() {
				return h
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/makeProductOfferKey/index.ts"),
				s = r("./src/reddit/models/Gold/ProductOffer.ts"),
				a = r("./src/reddit/models/Payments/index.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const c = e => e.subreddits.api.productOffers.pending,
				d = (e, {
					subredditId: t,
					type: r
				}) => {
					var n, s, a;
					return t ? e.subreddits.productOffers[Object(o.a)(r, t)] : null === (a = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.goldPurchase) || void 0 === s ? void 0 : s.productOffers) || void 0 === a ? void 0 : a[Object(o.a)(r)]
				},
				l = (e, {
					subredditId: t
				}) => {
					const r = d(e, {
						subredditId: t,
						type: s.c.Powerups
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
						type: s.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				p = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === a.b.PayPal || e[0] === a.b.Stripe)(e.requiredPaymentProviders)) : null,
				b = Object(n.a)(m, i.p, (e, t) => p(e, t) || null),
				f = Object(n.a)(b, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				g = Object(n.a)(b, e => (null == e ? void 0 : e[0].price) || null),
				y = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				h = Object(n.a)(y, e => Boolean(null == e ? void 0 : e.isCanceled))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PowerupsPremiumUpsellModal.314332ce45aaa5195780.js.map