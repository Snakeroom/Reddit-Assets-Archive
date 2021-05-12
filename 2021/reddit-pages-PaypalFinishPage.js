// https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.b18810c96ae347f15142.js
// Retrieved at 5/12/2021, 12:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-pages-PaypalFinishPage"], {
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
		"./src/graphql/operations/UserSavedStripeCards.json": function(e) {
			e.exports = JSON.parse('{"id":"d29c51cfbfe6"}')
		},
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, r, t) {
			"use strict";
			t.d(r, "b", (function() {
				return w
			})), t.d(r, "j", (function() {
				return k
			})), t.d(r, "f", (function() {
				return _
			})), t.d(r, "e", (function() {
				return A
			})), t.d(r, "d", (function() {
				return I
			})), t.d(r, "c", (function() {
				return q
			})), t.d(r, "a", (function() {
				return T
			})), t.d(r, "g", (function() {
				return U
			})), t.d(r, "h", (function() {
				return J
			})), t.d(r, "i", (function() {
				return B
			}));
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				a = t("./node_modules/lodash/omit.js"),
				o = t.n(a),
				s = t("./node_modules/uuid/v4.js"),
				c = t.n(s),
				i = t("./src/config.ts"),
				d = t("./src/reddit/constants/modals.ts"),
				u = t("./src/reddit/actions/toaster.ts"),
				l = t("./src/lib/addQueryParams/index.ts"),
				p = t("./src/lib/makeActionCreator/index.ts"),
				f = t("./src/lib/sentry/index.ts"),
				b = t("./src/reddit/models/Toast/index.ts"),
				m = t("./src/reddit/actions/gold/constants.ts"),
				g = t("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				y = t("./src/reddit/selectors/gold/productOffers.ts"),
				O = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				j = t("./src/reddit/selectors/user.ts"),
				v = t("./src/reddit/models/Gold/ProductOffer.ts"),
				h = t("./src/reddit/actions/gold/powerups.ts"),
				P = t("./src/reddit/actions/modal.ts"),
				E = t("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				C = t("./src/reddit/models/Payments/index.ts");
			const x = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				S = e => e.map(e => e.message).join(" : "),
				w = (e, r, t) => async (a, o, {
					gqlContext: s
				}) => {
					const i = c()(),
						d = await Object(E.f)(s(), i, e, r, t);
					if (d.ok) {
						const e = d.body,
							{
								errors: r,
								order: t
							} = e.data.createEconOrder;
						if (r && r.length) throw new Error(S(r));
						if (t) return t.id
					}
					throw new Error((() => n.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, k = (e, r, t, a, o, s) => async (i, d, {
					gqlContext: u
				}) => {
					var l;
					const p = d(),
						b = () => i(Object(g.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						}))),
						m = o === v.c.Premium,
						h = o === v.c.Powerups,
						P = {};
					if (h && s) P.powerUps = {
						subredditId: s,
						isAnonymous: t
					};
					else if (m) {
						const e = Object(y.c)(p, {
							provider: C.b.Stripe
						});
						if (!e) return;
						P.premium = {
							pricePackage: e
						}
					}
					let x, k, _ = "";
					try {
						_ = await i(w(r, a, P))
					} catch (I) {
						return f.c.captureException(I), void(I.message && i(Object(g.stripeApiError)(I.message)))
					}
					i(Object(g.stripeTokenPending)());
					const A = Object(O.y)(p);
					if (A || (x = await i(Object(g.validateAndCreateStripeToken)(e)), k = Object(O.v)(p), x)) try {
						const r = c()(),
							n = A || k ? x && k ? Object(E.h)(u(), r, _, x.id) : A ? Object(E.j)(u(), r, _, A) : null : Object(E.i)(u(), r, _, x.id),
							o = await n;
						if (!(null == o ? void 0 : o.ok)) return void b();
						const p = o.body.data.createEconPayment;
						if (null === (l = null == p ? void 0 : p.errors) || void 0 === l ? void 0 : l.length) return void i(Object(g.stripeApiError)(S(p.errors)));
						const {
							ok: f,
							payment: y,
							providerExecution: {
								paymentIntentClientSecret: O
							}
						} = p;
						if (f && y.status === E.a.ActionRequired) {
							const r = await e.confirmCardPayment(O),
								{
									error: t
								} = r;
							if (t) return void(t.message ? i(Object(g.stripeApiError)(t.message)) : b());
							let n;
							if (!(n = A ? await Object(E.e)(u(), c()(), y.id, A) : await Object(E.d)(u(), c()(), y.id, x.id, k)).ok) return void b();
							const a = n.body;
							if (!a.data.confirmEconPayment.ok || a.data.confirmEconPayment.payment.status !== E.a.Paid) return void b()
						} else if (f && y.status !== E.a.Paid) return void b();
						const v = Object(j.i)(d());
						v && (h && s ? i(U({
							subredditId: s,
							powerupsCount: a,
							user: v,
							isAnonymous: t
						})) : m && i(J({
							user: v
						})))
					} catch (I) {
						f.c.captureException(I), b()
					}
				}, _ = (e, r, t, n, a) => async (o, s, {
					gqlContext: d
				}) => {
					var u;
					const p = s(),
						b = n === v.c.Premium,
						m = n === v.c.Powerups,
						O = {};
					if (m && a) O.powerUps = {
						subredditId: a,
						isAnonymous: r
					};
					else if (b) {
						const e = Object(y.c)(p, {
							provider: C.b.PayPal
						});
						if (!e) return null;
						O.premium = {
							pricePackage: e
						}
					}
					let h = "";
					try {
						h = await o(w(e, t, O))
					} catch (_) {
						return f.c.captureException(_), _.message && o(Object(g.paypalApiError)(_.message)), null
					}
					const P = i.a.redditUrl;
					let k = {
						_o: P,
						o: h,
						pt: n
					};
					m && a && (k = {
						...k,
						r: a
					});
					try {
						const e = Object(l.a)(`${P}/framedModal/paypal-finish`, {
								...k,
								s: !0
							}),
							n = Object(l.a)(`${P}/framedModal/paypal-finish`, k),
							i = c()(),
							p = await Object(E.g)(d(), i, h, e, n);
						if (p && p.ok) {
							const e = p.body.data.createEconPayment;
							if (null === (u = null == e ? void 0 : e.errors) || void 0 === u ? void 0 : u.length) return o(Object(g.paypalApiError)(S(e.errors))), null;
							const n = Object(j.i)(s());
							if (e.ok) {
								const {
									status: s
								} = e.payment;
								if (s === E.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === s && n) return a ? o(U({
									subredditId: a,
									powerupsCount: t,
									user: n,
									isAnonymous: r
								})) : b && o(J({
									user: n
								})), null
							}
						}
					} catch (_) {
						f.c.captureException(_)
					}
					return o(Object(g.paypalApiError)(x())), null
				}, A = (e, r) => async (t, n, {
					gqlContext: a
				}) => {
					var o;
					try {
						const n = c()(),
							s = await Object(E.c)(a(), n, e, r);
						if (s && s.ok) {
							const e = s.body.data.confirmEconPayment;
							if (null === (o = null == e ? void 0 : e.errors) || void 0 === o ? void 0 : o.length) return t(Object(g.paypalApiError)(S(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (s) {
						f.c.captureException(s)
					}
					return t(Object(g.paypalApiError)(x())), !1
				}, I = () => async (e, r, {
					gqlContext: t
				}) => {
					e(Object(g.savedCardsPending)());
					try {
						const r = await Object(E.l)(t());
						if (r.ok) {
							const t = r.body;
							t.errors && t.errors.length && e(Object(g.stripeApiError)(t.errors[0].message));
							const {
								savedStripeCards: n
							} = t.data.identity, a = n.map(e => o()({
								...e,
								cardId: e.id
							}, "id"));
							e(Object(g.savedCardsSuccess)(a)), a[0] && e(Object(g.selectSavedCard)(a[0].cardId))
						} else e(Object(g.stripeApiError)(n.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (a) {
						f.c.captureException(a), e(Object(g.savedCardsSuccess)([]))
					}
				}, q = e => async (r, t, {
					gqlContext: n
				}) => {
					r(Object(g._deleteSavedCard)(e));
					try {
						const r = await Object(E.k)(n(), e);
						if (r.error) throw new Error(r.error.type);
						const t = r.body,
							{
								errors: a
							} = t.data.deleteEconPaymentMethod;
						if (a && a.length) throw new Error(S(a))
					} catch (a) {
						f.c.captureException(a)
					}
				}, N = Object(p.a)(m.N), R = Object(p.a)(m.O), D = Object(p.a)(m.P), L = e => async (r, t) => {
					await r(N(e)), r(Object(u.f)({
						kind: b.b.Error,
						duration: u.a,
						text: e
					}))
				}, T = (e, r, t) => async (a, o, {
					gqlContext: s
				}) => {
					a(R({
						subredditId: r,
						allocatedAt: t
					}));
					try {
						const o = await Object(E.b)(s(), e);
						if (o.ok) {
							const e = o.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void a(L(n[0].message));
							a(D({
								subredditId: r,
								allocatedAt: t
							}))
						} else a(L(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (c) {
						f.c.captureException(c), a(L(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, M = Object(p.a)(m.R), U = e => async (r, t) => {
					r(M(e)), r(Object(h.h)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), r(Object(P.g)(d.a.ECON_POWERUPS_PURCHASE)), r(Object(P.h)(d.a.ECON_POWERUPS_SUCCESS))
				}, J = Object(p.a)(m.V), B = Object(p.a)(m.Z)
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "selectPaymentMethod", (function() {
				return d
			})), t.d(r, "paymentCompleted", (function() {
				return u
			})), t.d(r, "cardNameInput", (function() {
				return l
			})), t.d(r, "postalCodeInput", (function() {
				return p
			})), t.d(r, "cardNameEmpty", (function() {
				return f
			})), t.d(r, "cardElementChange", (function() {
				return b
			})), t.d(r, "stripeTokenPending", (function() {
				return m
			})), t.d(r, "stripeTokenError", (function() {
				return g
			})), t.d(r, "stripeApiError", (function() {
				return y
			})), t.d(r, "validateAndCreateStripeToken", (function() {
				return O
			})), t.d(r, "paypalApiError", (function() {
				return j
			})), t.d(r, "toggleRememberCard", (function() {
				return v
			})), t.d(r, "selectSavedCard", (function() {
				return h
			})), t.d(r, "_deleteSavedCard", (function() {
				return P
			})), t.d(r, "deleteSavedCard", (function() {
				return E
			})), t.d(r, "savedCardsPending", (function() {
				return C
			})), t.d(r, "savedCardsSuccess", (function() {
				return x
			})), t.d(r, "loadSavedCards", (function() {
				return S
			}));
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				a = t("./src/lib/sentry/index.ts"),
				o = t("./src/lib/makeActionCreator/index.ts"),
				s = t("./src/reddit/endpoints/gold/purchase.ts"),
				c = t("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				i = t("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = Object(o.a)(c.B),
				u = Object(o.a)(c.w),
				l = Object(o.a)(c.b),
				p = Object(o.a)(c.y),
				f = Object(o.a)(c.a),
				b = Object(o.a)(c.E),
				m = Object(o.a)(c.G),
				g = Object(o.a)(c.F),
				y = Object(o.a)(c.D),
				O = e => async (r, t) => {
					const a = t(),
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
						r(g(d || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						r(f({
							message: e
						}))
					}
				}, j = Object(o.a)(c.x), v = Object(o.a)(c.H), h = Object(o.a)(c.C), P = Object(o.a)(c.g), E = e => async (r, t, {
					apiContext: n
				}) => {
					r(P(e));
					try {
						const r = await Object(s.a)(n(), e);
						if (r.error) throw new Error(r.error.type)
					} catch (o) {
						a.c.captureException(o)
					}
				}, C = Object(o.a)(c.z), x = Object(o.a)(c.A), S = () => async (e, r, {
					apiContext: t
				}) => {
					e(C());
					try {
						const r = await Object(s.b)(t());
						if (r.error) throw new Error(r.error.type);
						const n = r.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(x(n)), n[0] && e(h(n[0].cardId))
					} catch (n) {
						a.c.captureException(n), e(x([]))
					}
				}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, r, t) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, r, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				a = t.n(n),
				o = t("./src/lib/classNames/index.ts"),
				s = t("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = t.n(s);
			r.a = ({
				center: e,
				className: r,
				sizePx: t = 10
			}) => a.a.createElement("div", {
				className: Object(o.a)(c.a.loadingIcon, r, {
					[c.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${t}px`
				}
			})
		},
		"./src/reddit/endpoints/gold/productOfferPurchase.ts": function(e, r, t) {
			"use strict";
			t.d(r, "f", (function() {
				return y
			})), t.d(r, "a", (function() {
				return O
			})), t.d(r, "i", (function() {
				return j
			})), t.d(r, "h", (function() {
				return v
			})), t.d(r, "j", (function() {
				return h
			})), t.d(r, "g", (function() {
				return P
			})), t.d(r, "c", (function() {
				return E
			})), t.d(r, "e", (function() {
				return C
			})), t.d(r, "d", (function() {
				return x
			})), t.d(r, "b", (function() {
				return S
			})), t.d(r, "l", (function() {
				return w
			})), t.d(r, "k", (function() {
				return k
			}));
			var n = t("./node_modules/bignumber.js/bignumber.js"),
				a = t.n(n),
				o = t("./src/graphql/operations/CancelEconRecurringPayment.json"),
				s = t("./src/graphql/operations/ConfirmPaypalPayment.json"),
				c = t("./src/graphql/operations/ConfirmStripePaymentNewCard.json"),
				i = t("./src/graphql/operations/ConfirmStripePaymentSavedCard.json"),
				d = t("./src/graphql/operations/CreateEconOrder.json"),
				u = t("./src/graphql/operations/CreatePaypalPayment.json"),
				l = t("./src/graphql/operations/CreateStripePaymentWithProvidedCard.json"),
				p = t("./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				f = t("./src/graphql/operations/CreateStripePaymentWithSavedCard.json"),
				b = t("./src/graphql/operations/DeleteSavedStripeCard.json"),
				m = t("./src/graphql/operations/UserSavedStripeCards.json"),
				g = t("./src/lib/makeGqlRequest/index.ts");
			const y = (e, r, t, n, o) => {
				const {
					premium: s,
					...c
				} = o, i = (null == s ? void 0 : s.pricePackage) || t.pricePackages[0], u = new a.a(i.price).multipliedBy(n).toFixed();
				return Object(g.a)(e, {
					...d,
					variables: {
						input: {
							nonce: r,
							productId: t.id,
							productVersion: t.version,
							pricePackageId: i.id,
							currency: i.currency,
							price: u,
							productsCount: n.toString(),
							...c
						}
					}
				})
			};
			var O;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(O || (O = {}));
			const j = (e, r, t, n) => Object(g.a)(e, {
					...p,
					variables: {
						nonce: r,
						orderId: t,
						token: n
					}
				}),
				v = (e, r, t, n) => Object(g.a)(e, {
					...l,
					variables: {
						nonce: r,
						orderId: t,
						token: n
					}
				}),
				h = (e, r, t, n) => Object(g.a)(e, {
					...f,
					variables: {
						nonce: r,
						orderId: t,
						cardId: n
					}
				}),
				P = (e, r, t, n, a) => Object(g.a)(e, {
					...u,
					variables: {
						nonce: r,
						orderId: t,
						successUrl: n,
						cancelUrl: a
					}
				}),
				E = (e, r, t, n) => Object(g.a)(e, {
					...s,
					variables: {
						nonce: r,
						paymentId: t,
						token: n
					}
				}),
				C = (e, r, t, n) => Object(g.a)(e, {
					...i,
					variables: {
						nonce: r,
						paymentId: t,
						cardId: n
					}
				}),
				x = (e, r, t, n, a) => Object(g.a)(e, {
					...c,
					variables: {
						nonce: r,
						paymentId: t,
						token: n,
						saveCard: a
					}
				}),
				S = (e, r) => Object(g.a)(e, {
					...o,
					variables: {
						orderId: r
					}
				}),
				w = e => Object(g.a)(e, {
					...m,
					variables: {}
				}),
				k = (e, r) => Object(g.a)(e, {
					...b,
					variables: {
						cardId: r
					}
				})
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return a
			}));
			var n = t("./node_modules/react-redux/es/index.js");

			function a() {
				return Object(n.d)()
			}
		},
		"./src/reddit/icons/svgs/Replay/index.tsx": function(e, r, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				a = t.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var r = 1; r < arguments.length; r++) {
						var t = arguments[r];
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					}
					return e
				}).apply(this, arguments)
			}
			r.a = e => a.a.createElement("svg", o({}, e, {
				viewBox: "13 12 23 23",
				xmlns: "http://www.w3.org/2000/svg"
			}), a.a.createElement("g", null, a.a.createElement("path", {
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2",
				fill: "inherit"
			})))
		},
		"./src/reddit/models/Payments/index.ts": function(e, r, t) {
			"use strict";
			var n, a, o, s;
			t.d(r, "b", (function() {
					return a
				})), t.d(r, "a", (function() {
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
		"./src/reddit/pages/PaypalFinishPage/index.m.less": function(e, r, t) {
			e.exports = {
				loader: "_1ia9yqGevQ-g_70nwfxEm0",
				details: "_3dSBBqfRzgAPNfPqKwl8yR",
				error: "_1qAMyiuz3fo5Au5Cgu3W83",
				repeatButton: "_1hNJdrneOevh1kG25_vuXx",
				repeatIcon: "_39gyI00r3uS5ZeIndcJghA"
			}
		},
		"./src/reddit/pages/PaypalFinishPage/index.tsx": function(e, r, t) {
			"use strict";
			t.r(r);
			var n = t("./node_modules/react/index.js"),
				a = t.n(n),
				o = t("./node_modules/react-redux/es/index.js"),
				s = t("./node_modules/reselect/es/index.js"),
				c = t("./src/reddit/actions/gold/productOfferPurchase.ts"),
				i = t("./src/reddit/actions/platform.ts"),
				d = t("./src/reddit/models/Gold/ProductOffer.ts"),
				u = t("./src/reddit/hooks/useThunkDispatch.ts"),
				l = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				p = t("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = t("./src/reddit/icons/svgs/Replay/index.tsx"),
				b = t("./src/reddit/pages/PaypalFinishPage/index.m.less"),
				m = t.n(b);
			const g = "r",
				y = "o",
				O = "p",
				j = "approval_token_id",
				v = "s",
				h = "pt",
				P = Object(s.c)({
					paypalErrorMessage: l.d
				}),
				E = Object(o.b)(P);
			var C;
			! function(e) {
				e.Loading = "loading", e.Error = "error", e.Success = "success", e.Cancel = "cancel"
			}(C || (C = {}));
			r.default = E(e => {
				const {
					params: r,
					paypalErrorMessage: t
				} = e, o = r[g], s = r[y], l = r[v], b = r[O], P = r[j], E = r[h], x = Object(u.a)(), S = async () => {
					k(C.Loading), await x(Object(c.e)(b, P)) ? ((() => e.postMessage({
						type: "paypal-finish.success",
						data: {
							subredditId: o,
							orderId: s
						}
					}))(), setTimeout(() => {
						window.close(), k(C.Success)
					}, 1500)) : k(C.Error)
				};
				Object(n.useEffect)(() => {
					x(Object(i.l)({
						title: d.e[E]()
					})), l ? S() : ((() => e.postMessage({
						type: "paypal-finish.cancel"
					}))(), setTimeout(() => {
						window.close(), k(C.Cancel)
					}, 1500))
				}, []);
				const [w, k] = Object(n.useState)(C.Loading);
				return a.a.createElement(a.a.Fragment, null, w === C.Loading && a.a.createElement(p.a, {
					className: m.a.loader,
					sizePx: 60
				}), w === C.Error && a.a.createElement("div", {
					className: m.a.details
				}, t && a.a.createElement("div", {
					className: m.a.error
				}, t), a.a.createElement("button", {
					onClick: S,
					className: m.a.repeatButton
				}, a.a.createElement(f.a, {
					className: m.a.repeatIcon
				}))), w === C.Success && a.a.createElement("div", {
					className: m.a.details
				}, fbt._("Thanks for the purchase. It is safe to close this page now.", null, {
					hk: "1cdx2b"
				})), w === C.Cancel && a.a.createElement("div", {
					className: m.a.details
				}, fbt._("It is safe to close this page.", null, {
					hk: "Zh0mx"
				})))
			})
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, r, t) {
			"use strict";
			t.d(r, "g", (function() {
				return i
			})), t.d(r, "h", (function() {
				return d
			})), t.d(r, "a", (function() {
				return u
			})), t.d(r, "d", (function() {
				return l
			})), t.d(r, "i", (function() {
				return p
			})), t.d(r, "c", (function() {
				return b
			})), t.d(r, "b", (function() {
				return m
			})), t.d(r, "f", (function() {
				return g
			})), t.d(r, "e", (function() {
				return y
			}));
			var n = t("./node_modules/reselect/es/index.js"),
				a = t("./src/lib/makeProductOfferKey/index.ts"),
				o = t("./src/reddit/models/Gold/ProductOffer.ts"),
				s = t("./src/reddit/models/Payments/index.ts"),
				c = t("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				d = (e, {
					subredditId: r,
					type: t
				}) => {
					var n, o, s;
					return r ? e.subreddits.productOffers[Object(a.a)(t, r)] : null === (s = null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.goldPurchase) || void 0 === o ? void 0 : o.productOffers) || void 0 === s ? void 0 : s[Object(a.a)(t)]
				},
				u = (e, {
					subredditId: r
				}) => {
					const t = d(e, {
						subredditId: r,
						type: o.c.Powerups
					});
					return t && t[0]
				},
				l = e => {
					const r = d(e, {
						type: o.c.Premium
					});
					return (null == r ? void 0 : r[0]) || null
				},
				p = (e, r) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === r && e.requiredPaymentProviders && (e => e[0] === s.b.PayPal || e[0] === s.b.Stripe)(e.requiredPaymentProviders)) : null,
				f = Object(n.a)(l, c.p, (e, r) => p(e, r) || null),
				b = Object(n.a)(f, (e, {
					provider: r
				}) => r, (e, r) => null == e ? void 0 : e.find(e => {
					var t;
					return (null === (t = e.requiredPaymentProviders) || void 0 === t ? void 0 : t[0]) === r
				})),
				m = Object(n.a)(f, e => (null == e ? void 0 : e[0].price) || null),
				g = Object(n.a)(e => {
					var r;
					return null === (r = e.user.productOfferSubscriptions) || void 0 === r ? void 0 : r.subscriptions
				}, e => null == e ? void 0 : e[0]),
				y = Object(n.a)(g, e => Boolean(null == e ? void 0 : e.isCanceled))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.b18810c96ae347f15142.js.map