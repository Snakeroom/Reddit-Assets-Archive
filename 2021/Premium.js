// https://www.redditstatic.com/desktop2x/Premium.fa586f4ee4135f52a3b3.js
// Retrieved at 4/27/2021, 7:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Premium", "GoldPurchasePaymentActions"], {
		"./src/graphql/operations/CancelEconRecurringPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"ac36f7489268"}')
		},
		"./src/graphql/operations/ConfirmPaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"6ad51fec38be"}')
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
			e.exports = JSON.parse('{"id":"bcfac9a73323"}')
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
				return s
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
			const s = () => {
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
				return U
			})), r.d(t, "i", (function() {
				return L
			})), r.d(t, "f", (function() {
				return R
			})), r.d(t, "e", (function() {
				return F
			})), r.d(t, "d", (function() {
				return G
			})), r.d(t, "c", (function() {
				return D
			})), r.d(t, "a", (function() {
				return Y
			})), r.d(t, "g", (function() {
				return Q
			})), r.d(t, "h", (function() {
				return K
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/omit.js"),
				s = r.n(a),
				o = r("./node_modules/uuid/v4.js"),
				c = r.n(o),
				i = r("./src/config.ts"),
				d = r("./src/reddit/constants/modals.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				m = r("./src/lib/addQueryParams/index.ts"),
				u = r("./src/lib/makeActionCreator/index.ts"),
				p = r("./src/lib/sentry/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				h = r("./src/reddit/actions/gold/constants.ts"),
				f = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				g = r("./src/reddit/selectors/gold/productOffers.ts"),
				k = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				y = r("./src/reddit/selectors/user.ts"),
				v = r("./src/reddit/models/Gold/ProductOffer.ts"),
				P = r("./src/reddit/actions/gold/powerups.ts"),
				O = r("./src/reddit/actions/modal.ts"),
				j = r("./node_modules/bignumber.js/bignumber.js"),
				_ = r.n(j),
				w = r("./src/graphql/operations/CancelEconRecurringPayment.json"),
				x = r("./src/graphql/operations/ConfirmPaypalPayment.json"),
				E = r("./src/graphql/operations/CreateEconOrder.json"),
				C = r("./src/graphql/operations/CreatePaypalPayment.json"),
				I = r("./src/graphql/operations/CreateStripePaymentWithProvidedCard.json"),
				N = r("./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				M = r("./src/graphql/operations/CreateStripePaymentWithSavedCard.json"),
				S = r("./src/graphql/operations/DeleteSavedStripeCard.json"),
				A = r("./src/graphql/operations/UserSavedStripeCards.json"),
				T = r("./src/lib/makeGqlRequest/index.ts");
			const q = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				B = e => e.map(e => e.message).join(" : "),
				U = (e, t, r) => async (a, s, {
					gqlContext: o
				}) => {
					const i = c()(),
						d = await ((e, t, r, n, a) => {
							const {
								premium: s,
								...o
							} = a, c = (null == s ? void 0 : s.pricePackage) || r.pricePackages[0], i = new _.a(c.price).multipliedBy(n).toFixed();
							return Object(T.a)(e, {
								...E,
								variables: {
									input: {
										nonce: t,
										productId: r.id,
										productVersion: r.version,
										pricePackageId: c.id,
										currency: c.currency,
										price: i,
										productsCount: n.toString(),
										...o
									}
								}
							})
						})(o(), i, e, t, r);
					if (d.ok) {
						const e = d.body,
							{
								errors: t,
								order: r
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(B(t));
						if (r) return r.id
					}
					throw new Error((() => n.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, L = (e, t, r, a, s, o) => async (i, d, {
					gqlContext: l
				}) => {
					const m = d(),
						u = () => i(Object(f.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						}))),
						b = s === v.c.Premium,
						h = s === v.c.Powerups,
						P = {};
					if (h && o) P.powerUps = {
						subredditId: o,
						isAnonymous: r
					};
					else if (b) {
						const e = Object(g.b)(m);
						P.premium = {
							pricePackage: e
						}
					}
					let O, j, _ = "";
					try {
						_ = await i(U(t, a, P))
					} catch (x) {
						return p.c.captureException(x), void(x.message && i(Object(f.stripeApiError)(x.message)))
					}
					i(Object(f.stripeTokenPending)());
					const w = Object(k.y)(m);
					if (w || (O = await i(Object(f.validateAndCreateStripeToken)(e)), j = Object(k.v)(m), O)) try {
						const e = c()(),
							t = w || j ? O && j ? ((e, t, r, n) => Object(T.a)(e, {
								...I,
								variables: {
									nonce: t,
									orderId: r,
									token: n
								}
							}))(l(), e, _, O.id) : w ? ((e, t, r, n) => Object(T.a)(e, {
								...M,
								variables: {
									nonce: t,
									orderId: r,
									cardId: n
								}
							}))(l(), e, _, w) : null : ((e, t, r, n) => Object(T.a)(e, {
								...N,
								variables: {
									nonce: t,
									orderId: r,
									token: n
								}
							}))(l(), e, _, O.id),
							n = await t;
						if (!n || !n.ok) return void u(); {
							const e = n.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return void i(Object(f.stripeApiError)(B(e.errors)));
							if (e.ok && "PAID" !== e.payment.status) return void u();
							const t = Object(y.i)(d());
							t && (h && o ? i(Q({
								subredditId: o,
								powerupsCount: a,
								user: t,
								isAnonymous: r
							})) : b && i($({
								user: t
							})))
						}
					} catch (x) {
						p.c.captureException(x), u()
					}
				}, R = (e, t, r, n) => async (a, s, {
					gqlContext: o
				}) => {
					let d = "";
					try {
						d = await a(U(e, n, {
							powerUps: {
								subredditId: t,
								isAnonymous: r
							}
						}))
					} catch (u) {
						return p.c.captureException(u), u.message && a(Object(f.paypalApiError)(u.message)), null
					}
					const l = i.a.redditUrl;
					try {
						const e = Object(m.a)(`${l}/framedModal/paypal-finish`, {
								_o: l,
								r: t,
								o: d,
								s: !0
							}),
							i = Object(m.a)(`${l}/framedModal/paypal-finish`, {
								_o: l,
								r: t,
								o: d
							}),
							u = c()(),
							p = await ((e, t, r, n, a) => Object(T.a)(e, {
								...C,
								variables: {
									nonce: t,
									orderId: r,
									successUrl: n,
									cancelUrl: a
								}
							}))(o(), u, d, e, i);
						if (p && p.ok) {
							const e = p.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return a(Object(f.paypalApiError)(B(e.errors))), null;
							const o = Object(y.i)(s());
							if (e.ok) {
								const {
									status: s
								} = e.payment;
								if ("ACTION_REQUIRED" === s) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === s && o) return t && a(Q({
									subredditId: t,
									powerupsCount: n,
									user: o,
									isAnonymous: r
								})), null
							}
						}
					} catch (u) {
						p.c.captureException(u)
					}
					return a(Object(f.paypalApiError)(q())), null
				}, F = (e, t) => async (r, n, {
					gqlContext: a
				}) => {
					try {
						const n = c()(),
							s = await ((e, t, r, n) => Object(T.a)(e, {
								...x,
								variables: {
									nonce: t,
									paymentId: r,
									token: n
								}
							}))(a(), n, e, t);
						if (s && s.ok) {
							const e = s.body.data.confirmEconPayment;
							if (e && e.errors && e.errors.length) return r(Object(f.paypalApiError)(B(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (s) {
						p.c.captureException(s)
					}
					return r(Object(f.paypalApiError)(q())), !1
				}, G = () => async (e, t, {
					gqlContext: r
				}) => {
					e(Object(f.savedCardsPending)());
					try {
						const t = await (e => Object(T.a)(e, {
							...A,
							variables: {}
						}))(r());
						if (t.ok) {
							const r = t.body;
							r.errors && r.errors.length && e(Object(f.stripeApiError)(r.errors[0].message));
							const {
								savedStripeCards: n
							} = r.data.identity, a = n.map(e => s()({
								...e,
								cardId: e.id
							}, "id"));
							e(Object(f.savedCardsSuccess)(a)), a[0] && e(Object(f.selectSavedCard)(a[0].cardId))
						} else e(Object(f.stripeApiError)(n.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (a) {
						p.c.captureException(a), e(Object(f.savedCardsSuccess)([]))
					}
				}, D = e => async (t, r, {
					gqlContext: n
				}) => {
					t(Object(f._deleteSavedCard)(e));
					try {
						const t = await ((e, t) => Object(T.a)(e, {
							...S,
							variables: {
								cardId: t
							}
						}))(n(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: a
							} = r.data.deleteEconPaymentMethod;
						if (a && a.length) throw new Error(B(a))
					} catch (a) {
						p.c.captureException(a)
					}
				}, z = Object(u.a)(h.N), J = Object(u.a)(h.O), W = Object(u.a)(h.P), H = e => async (t, r) => {
					await t(z(e)), t(Object(l.f)({
						kind: b.b.Error,
						duration: l.a,
						text: e
					}))
				}, Y = (e, t, r) => async (a, s, {
					gqlContext: o
				}) => {
					a(J({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const s = await ((e, t) => Object(T.a)(e, {
							...w,
							variables: {
								orderId: t
							}
						}))(o(), e);
						if (s.ok) {
							const e = s.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void a(H(n[0].message));
							a(W({
								subredditId: t,
								allocatedAt: r
							}))
						} else a(H(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (c) {
						p.c.captureException(c), a(H(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, V = Object(u.a)(h.R), Q = e => async (t, r) => {
					t(V(e)), t(Object(P.g)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(O.g)(d.a.ECON_POWERUPS_PURCHASE)), t(Object(O.h)(d.a.ECON_POWERUPS_SUCCESS))
				}, $ = Object(u.a)(h.V), K = Object(u.a)(h.Z)
		},
		"./src/reddit/actions/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return P
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/models/Gold/ProductOffer.ts"),
				i = r("./src/reddit/models/Toast/index.ts"),
				d = r("./src/graphql/operations/GlobalProductOffers.json"),
				l = r("./src/graphql/operations/ProductOffers.json"),
				m = r("./src/lib/makeGqlRequest/index.ts");
			var u = r("./src/reddit/selectors/gold/productOffers.ts"),
				p = r("./src/reddit/actions/gold/constants.ts");
			const b = Object(a.a)(p.cb),
				h = Object(a.a)(p.bb),
				f = Object(a.a)(p.ab),
				g = Object(a.a)(p.Y),
				k = Object(a.a)(p.X),
				y = Object(a.a)(p.W),
				v = e => async t => {
					t(Object(o.f)({
						kind: i.b.Error,
						duration: o.a,
						text: e
					}))
				}, P = (e, t) => async r => {
					e === c.c.Premium ? r(j()) : t && r(O(e, t))
				}, O = (e, t) => async (r, a, {
					gqlContext: s
				}) => {
					const o = a();
					if (!Object(u.e)(o, {
							subredditId: t,
							type: e
						})) {
						r(b());
						try {
							const n = await ((e, t, r, n) => Object(m.a)(e, {
								...l,
								variables: {
									subredditId: t,
									types: r,
									includeGlobal: n
								}
							}))(s(), t, [e], !0);
							if (n.ok) {
								const e = n.body;
								if (e.errors && e.errors.length) throw new Error(e.errors[0].message);
								const a = e.data.subredditInfoById.productOffers ? e.data.subredditInfoById.productOffers.offers : [];
								return void(await r(h({
									productOffers: a || [],
									subredditId: t
								})))
							}
						} catch (c) {
							const e = n.fbt._("Something went wrong", null, {
								hk: "1IJNeH"
							});
							r(f(e)), r(v(e))
						}
					}
				}, j = () => async (e, t, {
					gqlContext: r
				}) => {
					var a, o;
					const i = c.c.Premium;
					e(g());
					try {
						const t = await ((e, t) => Object(m.a)(e, {
							...d,
							variables: {
								productTypes: t
							}
						}))(r(), [i]);
						if (t.ok) {
							const r = t.body;
							if (null === (a = r.errors) || void 0 === a ? void 0 : a.length) throw new Error(r.errors[0].message);
							return void e(k({
								productOffers: null !== (o = r.data.globalProductOffers.offers) && void 0 !== o ? o : []
							}))
						}
					} catch (l) {
						const t = l.message ? l.message : n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						s.c.captureMessage(t), e(y(t)), e(v(t))
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
				return m
			})), r.d(t, "cardNameEmpty", (function() {
				return u
			})), r.d(t, "cardElementChange", (function() {
				return p
			})), r.d(t, "stripeTokenPending", (function() {
				return b
			})), r.d(t, "stripeTokenError", (function() {
				return h
			})), r.d(t, "stripeApiError", (function() {
				return f
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return g
			})), r.d(t, "paypalApiError", (function() {
				return k
			})), r.d(t, "toggleRememberCard", (function() {
				return y
			})), r.d(t, "selectSavedCard", (function() {
				return v
			})), r.d(t, "_deleteSavedCard", (function() {
				return P
			})), r.d(t, "deleteSavedCard", (function() {
				return O
			})), r.d(t, "savedCardsPending", (function() {
				return j
			})), r.d(t, "savedCardsSuccess", (function() {
				return _
			})), r.d(t, "loadSavedCards", (function() {
				return w
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/sentry/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/endpoints/gold/purchase.ts"),
				c = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = Object(s.a)(c.A),
				l = Object(s.a)(c.w),
				m = Object(s.a)(c.b),
				u = Object(s.a)(c.a),
				p = Object(s.a)(c.D),
				b = Object(s.a)(c.F),
				h = Object(s.a)(c.E),
				f = Object(s.a)(c.C),
				g = e => async (t, r) => {
					const a = r(),
						s = Object(i.h)(a),
						{
							token: o,
							error: c
						} = await e.createToken({
							name: s
						});
					if (s.trim()) {
						if (!c && o) return o;
						t(h(c || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(u({
							message: e
						}))
					}
				}, k = Object(s.a)(c.x), y = Object(s.a)(c.G), v = Object(s.a)(c.B), P = Object(s.a)(c.g), O = e => async (t, r, {
					apiContext: n
				}) => {
					t(P(e));
					try {
						const t = await Object(o.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (s) {
						a.c.captureException(s)
					}
				}, j = Object(s.a)(c.y), _ = Object(s.a)(c.z), w = () => async (e, t, {
					apiContext: r
				}) => {
					e(j());
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
						e(_(n)), n[0] && e(v(n[0].cardId))
					} catch (n) {
						a.c.captureException(n), e(_([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "openPremiumPurchaseModal", (function() {
				return h
			})), r.d(t, "closePremiumPurchaseModal", (function() {
				return f
			})), r.d(t, "stripePremiumPurchaseRequested", (function() {
				return g
			})), r.d(t, "paymentBlobCreated", (function() {
				return k
			})), r.d(t, "openWithBlob", (function() {
				return y
			}));
			var n = r("./src/config.ts"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				c = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/formatApiError/index.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				m = r("./src/reddit/endpoints/gold/purchase.ts"),
				u = r("./src/reddit/helpers/correlationIdTracker.ts"),
				p = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				b = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const h = Object(s.a)(b.t),
				f = Object(s.a)(b.e),
				g = e => async (t, r, {
					apiContext: n
				}) => {
					const s = Object(p.a)(r()),
						o = (null == s ? void 0 : s.pennies) || c.qb,
						l = Object(u.c)(u.a.GoldPayment);
					t(Object(d.stripeTokenPending)());
					const b = await t(Object(d.validateAndCreateStripeToken)(e));
					if (b) try {
						const e = await Object(m.g)({
							context: n(),
							correlationId: l,
							pennies: o,
							token: b
						});
						if (e.error) {
							const r = Object(i.a)(e.error);
							t(Object(d.stripeApiError)(r))
						} else t(Object(d.paymentCompleted)({
							confirmed: !1
						}))
					} catch (h) {
						const e = Object(i.a)(h);
						t(Object(d.stripeApiError)(e))
					} else {
						const e = a.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						t(Object(d.stripeApiError)(e))
					}
				}, k = Object(s.a)(b.v), y = ({
					packageId: e,
					correlationId: t
				}) => async (r, a, {
					apiContext: s
				}) => {
					r(h({
						packageId: e,
						correlationId: t
					}));
					const c = Object(p.a)(a()),
						m = (null == c ? void 0 : c.paypalButtonId) || n.a.paypal.buttons.premium;
					if (m) try {
						const e = await Object(l.f)({
							buttonId: m,
							context: s(),
							correlationId: t
						});
						if (e.error) {
							const t = Object(i.a)(e.error);
							r(Object(d.paypalApiError)(t))
						} else r(k(e))
					} catch (u) {
						const e = Object(i.a)(u);
						r(Object(d.paypalApiError)(e))
					} else o.c.captureMessage("No Premium packages available on Premium purchase modal")
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return f
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "a", (function() {
				return O
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/env/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				c = r("./src/reddit/endpoints/gold/productCatalog.ts"),
				i = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/models/Toast/index.ts"),
				m = r("./src/reddit/actions/post.ts"),
				u = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const p = Object(s.a)(u.j),
				b = Object(s.a)(u.k),
				h = Object(s.a)(u.i),
				f = e => async (t, r, {
					apiContext: s
				}) => {
					t(p());
					const d = r(),
						l = Object(i.J)(d);
					try {
						const r = !l,
							n = await Object(c.b)({
								context: s(),
								correlationId: e,
								shouldUseCurrentOrigin: r
							});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const a = n.body;
						t(b(a))
					} catch (m) {
						Object(a.b)() || console.error(m), o.c.captureException(m);
						const e = n.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(h(e))
					}
				}, g = Object(s.a)(u.m), k = Object(s.a)(u.n), y = Object(s.a)(u.l), v = (e, t) => async (r, s, {
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
						r(k(a))
					} catch (d) {
						Object(a.b)() || console.error(d), o.c.captureException(d);
						const e = n.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						r(y(e))
					}
				}, P = Object(s.a)(u.h), O = () => async (e, t, {
					gqlContext: r
				}) => {
					var s, i;
					try {
						const t = await Object(c.a)(r());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (s = r.errors) || void 0 === s ? void 0 : s.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (i = r.awards) || void 0 === i ? void 0 : i.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(P({
								awards: r.awards
							})), e(Object(m.z)())
						}
					} catch (u) {
						Object(a.b)() || console.error(u), e(Object(d.f)({
							kind: l.b.Error,
							text: n.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), o.c.captureException(u)
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
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/components/Econ/Common/NewIcon/index.tsx"),
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
				className: Object(s.a)(e, i.a.container),
				onClick: n
			}, d && a.a.createElement(o.a, {
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
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/components/Econ/Common/NewIcon/index.m.less"),
				c = r.n(o);
			const {
				fbt: i
			} = r("./node_modules/fbt/lib/FbtPublic.js"), d = ({
				className: e
			}) => a.a.createElement("span", {
				className: Object(s.a)(c.a.new, e)
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
				s = r("./src/reddit/components/MarketingPageFooter/index.m.less"),
				o = r.n(s),
				c = r("./src/lib/classNames/index.ts");
			const {
				fbt: i
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => a.a.createElement("div", {
				className: Object(c.a)(e.className, o.a.marketingPageFooter)
			}, a.a.createElement("div", {
				className: Object(c.a)(e.className, o.a.marketingPageFooterInner)
			}, a.a.createElement("div", {
				className: o.a.linkContainer
			}, a.a.createElement("div", {
				className: o.a.linkCol
			}, a.a.createElement("ul", {
				className: o.a.linkColInner
			}, a.a.createElement("li", {
				className: o.a.linkItem
			}, a.a.createElement("a", {
				className: o.a.link,
				href: "https://about.reddit.com"
			}, i._("about", null, {
				hk: "3IO4c7"
			}))), a.a.createElement("li", {
				className: o.a.linkItem
			}, a.a.createElement("a", {
				className: o.a.link,
				href: "https://about.reddit.com/careers/"
			}, i._("careers", null, {
				hk: "2GATRU"
			}))), a.a.createElement("li", {
				className: o.a.linkItem
			}, a.a.createElement("a", {
				className: o.a.link,
				href: "https://about.reddit.com/press/"
			}, i._("press", null, {
				hk: "iUiGg"
			}))))), a.a.createElement("div", {
				className: o.a.linkCol
			}, a.a.createElement("ul", {
				className: o.a.linkColInner
			}, a.a.createElement("li", {
				className: o.a.linkItem
			}, a.a.createElement("a", {
				className: o.a.link,
				href: "https://www.redditinc.com/advertising"
			}, i._("advertise", null, {
				hk: "RYuIn"
			}))), a.a.createElement("li", {
				className: o.a.linkItem
			}, a.a.createElement("a", {
				className: o.a.link,
				href: "http://www.redditblog.com/"
			}, i._("blog", null, {
				hk: "4xzWuA"
			}))), a.a.createElement("li", {
				className: o.a.linkItem
			}, a.a.createElement("a", {
				className: o.a.link,
				href: "https://www.reddithelp.com"
			}, i._("help", null, {
				hk: "36XyzA"
			}))))), a.a.createElement("div", {
				className: Object(c.a)(o.a.linkCol, o.a.linkBoldCol)
			}, a.a.createElement("ul", {
				className: o.a.linkColInner
			}, a.a.createElement("li", {
				className: o.a.linkItem
			}, a.a.createElement("a", {
				className: o.a.link,
				href: "https://www.reddit.com/mobile/download"
			}, i._("the reddit app", null, {
				hk: "OcJ1f"
			}))), a.a.createElement("li", {
				className: o.a.linkItem
			}, a.a.createElement("a", {
				className: o.a.link,
				href: "https://www.reddit.com/coins"
			}, i._("reddit coins", null, {
				hk: "3Ts6tu"
			}))), a.a.createElement("li", {
				className: o.a.linkItem
			}, a.a.createElement("a", {
				className: o.a.link,
				href: "https://www.reddit.com/premium"
			}, i._("reddit premium", null, {
				hk: "3vPbLO"
			}))), a.a.createElement("li", {
				className: o.a.linkItem
			}, a.a.createElement("a", {
				className: o.a.link,
				href: "https://redditgifts.com/"
			}, i._("reddit gifts", null, {
				hk: "3WNNEy"
			}))))), a.a.createElement("div", {
				className: Object(c.a)(o.a.linkCol, o.a.linkBoldCol)
			}, a.a.createElement("ul", {
				className: o.a.linkColInner
			}, a.a.createElement("li", {
				className: o.a.linkItem
			}, a.a.createElement("a", {
				className: o.a.link,
				href: "https://www.facebook.com/reddit/"
			}, i._("Facebook", null, {
				hk: "47DT2F"
			}))), a.a.createElement("li", {
				className: o.a.linkItem
			}, a.a.createElement("a", {
				className: o.a.link,
				href: "https://twitter.com/reddit"
			}, i._("Twitter", null, {
				hk: "3aUv7u"
			}))), a.a.createElement("li", {
				className: o.a.linkItem
			}, a.a.createElement("a", {
				className: o.a.link,
				href: "https://www.instagram.com/reddit/"
			}, i._("Instagram", null, {
				hk: "dVIRX"
			})))))), a.a.createElement("ul", {
				className: o.a.legal
			}, a.a.createElement("li", {
				className: o.a.legalItem
			}, a.a.createElement("a", {
				className: o.a.legalLink,
				href: "https://www.redditinc.com/policies/content-policy"
			}, i._("content policy", null, {
				hk: "4ptiaZ"
			}))), a.a.createElement("li", {
				className: o.a.legalItem
			}, a.a.createElement("a", {
				className: o.a.legalLink,
				href: "https://www.reddit.com/help/privacypolicy"
			}, i._("privacy policy", null, {
				hk: "1ybjnz"
			}))), a.a.createElement("li", {
				className: o.a.legalItem
			}, a.a.createElement("a", {
				className: o.a.legalLink,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, i._("user agreement", null, {
				hk: "4puRxC"
			}))), a.a.createElement("li", {
				className: o.a.legalItem
			}, a.a.createElement("a", {
				className: o.a.legalLink,
				href: "https://www.reddit.com/help/healthycommunities/"
			}, i._("mod policy", null, {
				hk: "1VvAdM"
			}))), a.a.createElement("li", {
				className: o.a.legalItem
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
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = r.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => a.a.createElement("div", {
				className: Object(s.a)(c.a.loadingIcon, t, {
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
				return m
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "e", (function() {
				return b
			}));
			var n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				s = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts"),
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
					m = Object(c.a)(l);
				return Object(a.a)(Object(s.a)(t, [o.a]), {
					method: n.cb.POST,
					endpoint: m,
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
				return Object(a.a)(Object(s.a)(e, [o.a]), {
					method: n.cb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(i.c)
			}, m = async ({
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
				return Object(a.a)(Object(s.a)(e, [o.a]), {
					method: n.cb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(i.c)
			}, u = async ({
				context: e,
				offerContext: t,
				orderId: r,
				coins: c,
				pennies: d,
				correlationId: l
			}) => {
				const m = {
					offer_context: t,
					order_id: r,
					coins: c,
					pennies: d,
					correlation_id: l
				};
				return Object(a.a)(Object(s.a)(e, [o.a]), {
					method: n.cb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: m
				}).then(i.c)
			}, p = async ({
				awardId: e,
				context: t,
				coins: r,
				correlationId: c,
				isAnonymous: d,
				message: l,
				offerContext: m,
				orderId: u,
				pennies: p,
				thingId: b
			}) => {
				const h = {
					award_id: e,
					coins: r,
					correlation_id: c,
					is_anonymous: d,
					message: l,
					offer_context: m,
					order_id: u,
					pennies: p,
					thing_id: b
				};
				return Object(a.a)(Object(s.a)(t, [o.a]), {
					method: n.cb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: h
				}).then(i.c)
			}, b = async ({
				awardId: e,
				context: t,
				correlationId: r,
				isAnonymous: c,
				message: d,
				orderId: l,
				thingId: m
			}) => {
				const u = {
					award_id: e,
					correlation_id: r,
					is_anonymous: c,
					message: d,
					order_id: l,
					thing_id: m
				};
				return Object(a.a)(Object(s.a)(t, [o.a]), {
					method: n.cb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: u
				}).then(i.c)
			}
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n);

			function s(e, t) {
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
				return s
			})), r.d(t, "e", (function() {
				return o
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
				s = (e, t = !1) => {
					const r = [];
					for (const n in a) {
						const s = a[n];
						(s.priceInCoins <= e || t) && r.push(s)
					}
					return r
				},
				o = e => n.fbt._({
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
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				c = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/react-router-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				l = r("./src/lib/constants/index.ts"),
				m = r("./src/lib/humanizeDate/index.ts"),
				u = r("./src/lib/loadRedditAdsPixel.ts"),
				p = r("./src/reddit/components/TrackingHelper/index.tsx"),
				b = r("./src/reddit/helpers/correlationIdTracker.ts"),
				h = r("./src/reddit/helpers/createEmojiText/index.tsx"),
				f = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				g = r("./src/reddit/selectors/telemetry.ts");
			const k = (e, t) => {
					const {
						packageId: r
					} = t;
					if (!r) return null;
					const n = Object(f.h)(e, r);
					return n ? {
						goldPurchase: {
							subscriptionType: n.frequency
						}
					} : null
				},
				y = "premium_marketing",
				v = e => t => ({
					source: y,
					action: "click",
					noun: "price",
					correlationId: Object(b.c)(b.a.GoldPayment),
					...g.defaults(t),
					...k(t, {
						packageId: e
					})
				}),
				P = () => e => ({
					source: y,
					action: "click",
					noun: "manage",
					correlationId: Object(b.c)(b.a.GoldPayment),
					...g.defaults(e)
				});
			var O = r("./src/reddit/helpers/trackers/screenview.ts"),
				j = r("./src/telemetry/index.ts"),
				_ = r("./src/telemetry/models/Timer.ts"),
				w = r("./src/reddit/pages/Premium/index.m.less"),
				x = r.n(w),
				E = r("./src/reddit/actions/login.ts"),
				C = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				I = r("./src/reddit/actions/gold/productOffers.ts"),
				N = r("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				M = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				S = r("./src/reddit/components/MarketingPageFooter/index.tsx"),
				A = r("./src/reddit/components/PremiumPurchaseModal/Loader.tsx"),
				T = r("./src/reddit/models/Gold/ProductOffer.ts"),
				q = r("./src/reddit/selectors/experiments/econ/premiumMigration.ts"),
				B = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				U = r("./src/reddit/selectors/user.ts"),
				L = r("./src/reddit/icons/svgs/PremiumLogo/index.tsx"),
				R = r("./src/reddit/controls/Button/index.tsx"),
				F = r("./src/lib/classNames/index.ts"),
				G = r("./src/reddit/components/Econ/Common/BenefitTile/index.tsx"),
				D = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				z = r("./src/reddit/hooks/useTracking.ts"),
				J = r("./src/reddit/pages/Premium/BenefitsSection/index.m.less"),
				W = r.n(J);
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
					const t = Object(c.e)(f.i),
						r = Object(z.a)();
					if (!(null == t ? void 0 : t.length)) return o.a.createElement("div", null, o.a.createElement(D.a, {
						sizePx: 80
					}));
					const {
						periodicalCoins: a,
						signupBonusCoins: s
					} = t[0], i = s && s > 0 ? s.toLocaleString() : void 0, d = a.toLocaleString(), l = [{
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
					const m = {
						periodicalCoins: d,
						bonusCoins: i
					};
					return o.a.createElement("div", {
						className: Object(F.a)(W.a.container, e)
					}, l.map(e => {
						const {
							key: t,
							isNew: a,
							telemetryTag: s
						} = e;
						return o.a.createElement(G.a, {
							className: W.a.benefit,
							description: Y[t](m),
							iconUrl: `${n.a.assetPath}/img/gold/premium-marketing/benefits-icons/${t}.png`,
							key: t,
							title: H[t](m),
							isNew: a,
							onClick: () => s && r((e => t => ({
								source: "premium_marketing",
								action: "click",
								noun: "premium_benefit",
								...g.defaults(t),
								goldPurchase: {
									premiumMarketingBenefit: e
								}
							}))(s))
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
					const s = Object(c.e)(q.a),
						i = Object(c.e)(f.i),
						d = Object(c.e)(U.s),
						l = Object(c.e)($.c);
					let m, u;
					const p = i.find(e => e.frequency === Q.c.Monthly),
						b = i.find(e => e.frequency === Q.c.Yearly);
					if (s) {
						if (!(null == l ? void 0 : l.pricePackages)) return null;
						const e = Object($.f)(l, T.b.Month),
							t = Object($.f)(l, T.b.Year);
						m = {
							price: null == e ? void 0 : e.price,
							packageId: null == e ? void 0 : e.id
						}, u = {
							price: null == t ? void 0 : t.price,
							packageId: null == t ? void 0 : t.id,
							bonusPct: null == b ? void 0 : b.bonusPct
						}
					} else {
						if (!(null == i ? void 0 : i.length)) return null;
						m = {
							price: null == p ? void 0 : p.pennies,
							packageId: null == p ? void 0 : p.mobileId
						}, u = {
							price: null == b ? void 0 : b.pennies,
							packageId: null == b ? void 0 : b.mobileId,
							bonusPct: null == b ? void 0 : b.bonusPct
						}
					}
					const h = o.a.createElement(R.h, {
							className: Z.a.button,
							onClick: n
						}, a.fbt._("Manage Premium", null, {
							hk: "13LAq1"
						})),
						g = u && (u.price / 100).toLocaleString(),
						k = u && a.fbt._("{annual price}/Year", [a.fbt._param("annual price", "$" + g)], {
							hk: "4ohAoM"
						}),
						y = m && (m.price / 100).toLocaleString(),
						v = m && a.fbt._("{monthly price}/Month", [a.fbt._param("monthly price", "$" + y)], {
							hk: "3xMnhy"
						}),
						P = o.a.createElement(o.a.Fragment, null, u && o.a.createElement(R.h, {
							className: Z.a.premiumAnnualButton,
							onClick: () => r(u.packageId, T.b.Year)
						}, k, !!u.bonusPct && o.a.createElement("span", {
							className: Z.a.premiumDiscountBadge
						}, a.fbt._("Save {annual-month-discount}", [a.fbt._param("annual-month-discount", `${u.bonusPct}%`)], {
							hk: "TgjzN"
						}))), m && o.a.createElement(R.q, {
							className: Z.a.premiumMonthlyButton,
							onClick: () => {
								r(m.packageId, T.b.Month)
							},
							priority: R.b.Secondary
						}, v), o.a.createElement("div", {
							className: Z.a.renewalSubtext
						}, a.fbt._("Subscriptions automatically renew", null, {
							hk: "v8BCD"
						})));
					return o.a.createElement("div", {
						className: Object(F.a)(Z.a.buttons, e, {
							[Z.a.hero]: !!t
						})
					}, d ? h : P)
				},
				ee = r("./src/reddit/actions/claimgold.ts"),
				te = r("./src/reddit/selectors/claimgold.ts"),
				re = r("./src/reddit/pages/Premium/RedeemGiftCode/index.m.less"),
				ne = r.n(re);
			const ae = () => {
					const e = Object(z.a)(),
						t = Object(c.d)(),
						r = Object(c.e)(te.a),
						n = Object(c.e)(te.b);
					return o.a.createElement("div", {
						className: ne.a.container
					}, o.a.createElement(R.q, {
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
						priority: R.b.Plain
					}, a.fbt._("Redeem a Gift Code", null, {
						hk: "10i0AM"
					})), o.a.createElement("form", {
						className: Object(F.a)(ne.a.giftCodeInputContainer, {
							[ne.a.giftCodeHidden]: !n
						}),
						onSubmit: e => {
							e.preventDefault(), t(Object(ee.h)())
						}
					}, o.a.createElement("input", {
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
					}), o.a.createElement(R.q, {
						className: ne.a.redeemButton,
						priority: R.b.Plain
					}, a.fbt._("Redeem", null, {
						hk: "1d2cH2"
					}))))
				},
				se = Object(d.c)({
					goldExpiration: e => e.user.account && e.user.account.goldExpiration || 0,
					isGold: U.r,
					isPremiumSubscriber: U.s,
					isLoggedIn: U.J,
					premiumPackages: f.i,
					purchaseCatalogPending: f.k,
					shouldShowPremiumPurchaseModal: B.o,
					isPremiumMigrationEnabled: q.a
				}),
				oe = Object(c.b)(se, (e, t) => ({
					onManagePremium: () => e(Object(i.b)("/settings/premium")),
					onOpenLoginModal: () => e(Object(E.h)()),
					onPurchasePremium: (t, r) => e(Object(N.openWithBlob)({
						correlationId: r,
						packageId: t
					})),
					onSetPremiumRenewalInterval: t => e(Object(C.h)({
						renewInterval: t
					})),
					requestPurchaseCatalog: t => e(Object(M.b)(t)),
					premiumProductOffersRequested: () => e(Object(I.a)(T.c.Premium))
				}));
			class ce extends o.a.Component {
				constructor() {
					super(...arguments), this.correlationId = Object(b.d)(b.a.GoldPayment, !1), this.onClickPrice = (e, t) => {
						this.onPurchase(e, v, t)
					}, this.onClickManagePremium = () => {
						const {
							onManagePremium: e,
							sendEvent: t
						} = this.props;
						t(P()), e()
					}
				}
				componentDidMount() {
					const {
						premiumPackages: e,
						purchaseCatalogPending: t,
						requestPurchaseCatalog: r,
						premiumProductOffersRequested: n,
						isPremiumMigrationEnabled: a,
						sendEvent: s
					} = this.props;
					e.length || t || r(this.correlationId), a && n(), document.documentElement.scrollTop = document.body.scrollTop = 0;
					const o = l.Eb.PREMIUM;
					j.c.has(o) && (s(Object(O.n)(_.TimerType.InApp, j.c.end(o))), s(Object(O.m)())), Object(u.a)()
				}
				render() {
					const {
						className: e
					} = this.props;
					return o.a.createElement("div", {
						className: e
					}, this.renderHero(), o.a.createElement("div", {
						className: x.a.body
					}, o.a.createElement("h2", {
						className: x.a.title
					}, a.fbt._("Join Reddit Premium Today", null, {
						hk: "2sm8Pz"
					})), o.a.createElement(V, {
						className: x.a.benefits
					}), o.a.createElement(X, {
						onClickPackage: this.onClickPrice,
						onClickManagePremium: this.onClickManagePremium
					}), o.a.createElement("div", {
						className: x.a.paidPremiumSubtext
					}, a.fbt._("* Monthly Powerups, custom app icons, and welcome gifts are only available through a paid Reddit Premium subscription.", null, {
						hk: "2JAJTp"
					})), o.a.createElement(ae, null), this.renderFAQSection()), this.renderModal(), o.a.createElement(S.a, {
						className: x.a.footer
					}))
				}
				renderHero() {
					const {
						goldExpiration: e,
						isGold: t,
						isPremiumSubscriber: r
					} = this.props;
					return o.a.createElement("div", {
						className: x.a.hero,
						style: {
							backgroundImage: `linear-gradient(\n          to right,\n          rgba(0, 0, 0, 0.6) 0%,\n          rgba(0, 0, 0, 0) 50%\n        ), url("${n.a.assetPath}/img/gold/premium-marketing/premiumHero.jpg")`
						}
					}, o.a.createElement("div", {
						className: x.a.heroInner
					}, o.a.createElement("h1", {
						className: x.a.heroTitle
					}, o.a.createElement(L.a, {
						className: x.a.heroLogo
					})), o.a.createElement("p", {
						className: x.a.heroDescription
					}, a.fbt._("Help support Reddit and get VIP treatment, exclusive access, and monthly coins.", null, {
						hk: "19iqSJ"
					})), o.a.createElement(X, {
						className: x.a.heroButtons,
						isHeroStyles: !0,
						onClickPackage: this.onClickPrice,
						onClickManagePremium: this.onClickManagePremium
					}), !r && t && o.a.createElement("div", {
						className: x.a.heroPremiumExpiration
					}, Object(h.a)(a.fbt._("Your Premium membership is valid until {Premium expiration date}. Manage it :here:.", [a.fbt._param("Premium expiration date", Object(m.a)(e, !0))], {
						hk: "yMI3j"
					}).toString(), {
						":here:": o.a.createElement("a", {
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
						onOpenLoginModal: s,
						onPurchasePremium: o,
						onSetPremiumRenewalInterval: c,
						sendEvent: i,
						isPremiumMigrationEnabled: d
					} = this.props;
					n ? this.onClickManagePremium() : a ? (i(t(e)), o(e, this.correlationId), d && c(r)) : s()
				}
				renderFAQSection() {
					return o.a.createElement(R.q, {
						className: x.a.faqButton,
						href: "https://reddit.zendesk.com/hc/en-us/articles/360043034412-What-is-a-Reddit-premium-membership-",
						kind: R.a.ExternalLink,
						priority: R.b.Plain,
						target: "_blank"
					}, a.fbt._("Visit the Reddit Premium FAQs", null, {
						hk: "22gM46"
					}))
				}
				renderModal() {
					return this.props.shouldShowPremiumPurchaseModal && o.a.createElement(A.a, null)
				}
				componentWillUnmount() {
					Object(b.b)(b.a.GoldPayment)
				}
			}
			t.default = oe(Object(p.c)(ce))
		},
		"./src/reddit/selectors/experiments/econ/premiumMigration.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				a = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const s = Object(a.a)(n.Mb)
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return c
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "b", (function() {
				return u
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/makeProductOfferKey/index.ts"),
				s = r("./src/reddit/models/Gold/ProductOffer.ts"),
				o = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const c = e => e.subreddits.api.productOffers.pending,
				i = (e, {
					subredditId: t,
					type: r
				}) => {
					var n, s, o;
					return t ? e.subreddits.productOffers[Object(a.a)(r, t)] : null === (o = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.goldPurchase) || void 0 === s ? void 0 : s.productOffers) || void 0 === o ? void 0 : o[Object(a.a)(r)]
				},
				d = (e, {
					subredditId: t
				}) => {
					const r = i(e, {
						subredditId: t,
						type: s.c.Powerups
					});
					return r && r[0]
				},
				l = e => {
					const t = i(e, {
						type: s.c.Premium
					});
					return null == t ? void 0 : t[0]
				},
				m = (e, t) => null == e ? void 0 : e.pricePackages.find(e => e.renewInterval === t),
				u = Object(n.a)(l, o.p, (e, t) => m(e, t))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Premium.fa586f4ee4135f52a3b3.js.map