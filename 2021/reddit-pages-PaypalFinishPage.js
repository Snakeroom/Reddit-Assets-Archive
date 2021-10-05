// https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.60c27370c222e2b479c8.js
// Retrieved at 10/5/2021, 7:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-pages-PaypalFinishPage"], {
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return w
			})), r.d(t, "j", (function() {
				return k
			})), r.d(t, "g", (function() {
				return _
			})), r.d(t, "f", (function() {
				return A
			})), r.d(t, "d", (function() {
				return I
			})), r.d(t, "c", (function() {
				return L
			})), r.d(t, "a", (function() {
				return D
			})), r.d(t, "h", (function() {
				return T
			})), r.d(t, "e", (function() {
				return U
			})), r.d(t, "i", (function() {
				return J
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/omit.js"),
				o = r.n(a),
				s = r("./node_modules/uuid/v4.js"),
				d = r.n(s),
				i = r("./src/config.ts"),
				c = r("./src/reddit/constants/modals.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/lib/addQueryParams/index.ts"),
				p = r("./src/lib/makeActionCreator/index.ts"),
				f = r("./src/lib/sentry/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				m = r("./src/reddit/actions/gold/constants.ts"),
				y = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				j = r("./src/reddit/selectors/gold/productOffers.ts"),
				O = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				v = r("./src/reddit/models/Gold/ProductOffer.ts"),
				P = r("./src/reddit/actions/gold/powerups.ts"),
				h = r("./src/reddit/actions/modal.ts"),
				E = r("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				C = r("./src/reddit/models/Payments/index.ts");
			const x = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				S = e => e.map(e => e.message).join(" : "),
				w = (e, t, r) => async (a, o, {
					gqlContext: s
				}) => {
					const i = d()(),
						c = await Object(E.f)(s(), i, e, t, r);
					if (c.ok) {
						const e = c.body,
							{
								errors: t,
								order: r
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(S(t));
						if (r) return r.id
					}
					throw new Error((() => n.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, k = (e, t, r, a, o, s) => async (i, c, {
					gqlContext: u
				}) => {
					var l;
					const p = c(),
						b = () => i(Object(y.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						}))),
						m = o === v.c.Premium,
						P = o === v.c.Powerups,
						h = {};
					if (P && s) h.powerUps = {
						subredditId: s,
						isAnonymous: r
					};
					else if (m) {
						const e = Object(j.d)(p, {
							provider: C.b.Stripe
						});
						if (!e) return;
						h.premium = {
							pricePackage: e
						}
					}
					let x, k, _ = "";
					try {
						_ = await i(w(t, a, h))
					} catch (I) {
						return f.c.captureException(I), void(I.message && i(Object(y.stripeApiError)(I.message)))
					}
					i(Object(y.stripeTokenPending)());
					const A = Object(O.y)(p);
					if (A || (x = await i(Object(y.validateAndCreateStripeToken)(e)), k = Object(O.v)(p), x)) try {
						const t = d()(),
							n = A || k ? x && k ? Object(E.h)(u(), t, _, x.id) : A ? Object(E.j)(u(), t, _, A) : null : Object(E.i)(u(), t, _, x.id),
							o = await n;
						if (!(null == o ? void 0 : o.ok)) return void b();
						const p = o.body.data.createEconPayment;
						if (null === (l = null == p ? void 0 : p.errors) || void 0 === l ? void 0 : l.length) return void i(Object(y.stripeApiError)(S(p.errors)));
						const {
							ok: f,
							payment: j,
							providerExecution: {
								paymentIntentClientSecret: O
							}
						} = p;
						if (f && j.status === E.a.ActionRequired) {
							const t = await e.confirmCardPayment(O),
								{
									error: r
								} = t;
							if (r) return void(r.message ? i(Object(y.stripeApiError)(r.message)) : b());
							let n;
							if (!(n = A ? await Object(E.e)(u(), d()(), j.id, A) : await Object(E.d)(u(), d()(), j.id, x.id, k)).ok) return void b();
							const a = n.body;
							if (!a.data.confirmEconPayment.ok || a.data.confirmEconPayment.payment.status !== E.a.Paid) return void b()
						} else if (f && j.status !== E.a.Paid) return void b();
						const v = Object(g.k)(c());
						v && (P && s ? i(T({
							subredditId: s,
							powerupsCount: a,
							user: v,
							isAnonymous: r
						})) : m && i(U({
							user: v
						})))
					} catch (I) {
						f.c.captureException(I), b()
					}
				}, _ = (e, t, r, n, a) => async (o, s, {
					gqlContext: c
				}) => {
					var u;
					const p = s(),
						b = n === v.c.Premium,
						m = n === v.c.Powerups,
						O = {};
					if (m && a) O.powerUps = {
						subredditId: a,
						isAnonymous: t
					};
					else if (b) {
						const e = Object(j.d)(p, {
							provider: C.b.PayPal
						});
						if (!e) return null;
						O.premium = {
							pricePackage: e
						}
					}
					let P = "";
					try {
						P = await o(w(e, r, O))
					} catch (_) {
						return f.c.captureException(_), _.message && o(Object(y.paypalApiError)(_.message)), null
					}
					const h = i.a.redditUrl;
					let k = {
						_o: h,
						o: P,
						pt: n
					};
					m && a && (k = {
						...k,
						r: a
					});
					try {
						const e = Object(l.a)(`${h}/framedModal/paypal-finish`, {
								...k,
								s: !0
							}),
							n = Object(l.a)(`${h}/framedModal/paypal-finish`, k),
							i = d()(),
							p = await Object(E.g)(c(), i, P, e, n);
						if (p && p.ok) {
							const e = p.body.data.createEconPayment;
							if (null === (u = null == e ? void 0 : e.errors) || void 0 === u ? void 0 : u.length) return o(Object(y.paypalApiError)(S(e.errors))), null;
							const n = Object(g.k)(s());
							if (e.ok) {
								const {
									status: s
								} = e.payment;
								if (s === E.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === s && n) return a ? o(T({
									subredditId: a,
									powerupsCount: r,
									user: n,
									isAnonymous: t
								})) : b && o(U({
									user: n
								})), null
							}
						}
					} catch (_) {
						f.c.captureException(_)
					}
					return o(Object(y.paypalApiError)(x())), null
				}, A = (e, t) => async (r, n, {
					gqlContext: a
				}) => {
					var o;
					try {
						const n = d()(),
							s = await Object(E.c)(a(), n, e, t);
						if (s && s.ok) {
							const e = s.body.data.confirmEconPayment;
							if (null === (o = null == e ? void 0 : e.errors) || void 0 === o ? void 0 : o.length) return r(Object(y.paypalApiError)(S(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (s) {
						f.c.captureException(s)
					}
					return r(Object(y.paypalApiError)(x())), !1
				}, I = () => async (e, t, {
					gqlContext: r
				}) => {
					e(Object(y.savedCardsPending)());
					try {
						const t = await Object(E.l)(r());
						if (t.ok) {
							const r = t.body;
							r.errors && r.errors.length && e(Object(y.stripeApiError)(r.errors[0].message));
							const {
								savedStripeCards: n
							} = r.data.identity, a = n.map(e => o()({
								...e,
								cardId: e.id
							}, "id"));
							e(Object(y.savedCardsSuccess)(a)), a[0] && e(Object(y.selectSavedCard)(a[0].cardId))
						} else e(Object(y.stripeApiError)(n.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (a) {
						f.c.captureException(a), e(Object(y.savedCardsSuccess)([]))
					}
				}, L = e => async (t, r, {
					gqlContext: n
				}) => {
					t(Object(y._deleteSavedCard)(e));
					try {
						const t = await Object(E.k)(n(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: a
							} = r.data.deleteEconPaymentMethod;
						if (a && a.length) throw new Error(S(a))
					} catch (a) {
						f.c.captureException(a)
					}
				}, N = Object(p.a)(m.O), G = Object(p.a)(m.P), Q = Object(p.a)(m.Q), R = e => async (t, r) => {
					await t(N(e)), t(Object(u.f)({
						kind: b.b.Error,
						duration: u.a,
						text: e
					}))
				}, D = (e, t, r) => async (a, o, {
					gqlContext: s
				}) => {
					a(G({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const o = await Object(E.b)(s(), e);
						if (o.ok) {
							const e = o.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void a(R(n[0].message));
							a(Q({
								subredditId: t,
								allocatedAt: r
							}))
						} else a(R(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (d) {
						f.c.captureException(d), a(R(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, q = Object(p.a)(m.S), T = e => async (t, r) => {
					t(q(e)), t(Object(P.l)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(h.g)(c.a.ECON_POWERUPS_PURCHASE)), t(Object(h.h)(c.a.ECON_POWERUPS_SUCCESS))
				}, M = Object(p.a)(m.W), U = ({
					user: e
				}) => async t => {
					await t(Object(P.n)(!0)), t(M({
						user: e
					}))
				}, J = Object(p.a)(m.ab)
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return c
			})), r.d(t, "paymentCompleted", (function() {
				return u
			})), r.d(t, "cardNameInput", (function() {
				return l
			})), r.d(t, "postalCodeInput", (function() {
				return p
			})), r.d(t, "cardNameEmpty", (function() {
				return f
			})), r.d(t, "cardElementChange", (function() {
				return b
			})), r.d(t, "stripeTokenPending", (function() {
				return m
			})), r.d(t, "stripeTokenError", (function() {
				return y
			})), r.d(t, "stripeApiError", (function() {
				return j
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return O
			})), r.d(t, "paypalApiError", (function() {
				return g
			})), r.d(t, "toggleRememberCard", (function() {
				return v
			})), r.d(t, "selectSavedCard", (function() {
				return P
			})), r.d(t, "_deleteSavedCard", (function() {
				return h
			})), r.d(t, "deleteSavedCard", (function() {
				return E
			})), r.d(t, "savedCardsPending", (function() {
				return C
			})), r.d(t, "savedCardsSuccess", (function() {
				return x
			})), r.d(t, "loadSavedCards", (function() {
				return S
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/sentry/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/endpoints/gold/purchase.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const c = Object(o.a)(d.B),
				u = Object(o.a)(d.w),
				l = Object(o.a)(d.b),
				p = Object(o.a)(d.y),
				f = Object(o.a)(d.a),
				b = Object(o.a)(d.E),
				m = Object(o.a)(d.G),
				y = Object(o.a)(d.F),
				j = Object(o.a)(d.D),
				O = e => async (t, r) => {
					const a = r(),
						o = Object(i.h)(a),
						s = Object(i.l)(a),
						{
							token: d,
							error: c
						} = await e.createToken({
							name: o,
							address_zip: s
						});
					if (o.trim()) {
						if (!c && d) return d;
						t(y(c || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(f({
							message: e
						}))
					}
				}, g = Object(o.a)(d.x), v = Object(o.a)(d.H), P = Object(o.a)(d.C), h = Object(o.a)(d.g), E = e => async (t, r, {
					apiContext: n
				}) => {
					t(h(e));
					try {
						const t = await Object(s.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (o) {
						a.c.captureException(o)
					}
				}, C = Object(o.a)(d.z), x = Object(o.a)(d.A), S = () => async (e, t, {
					apiContext: r
				}) => {
					e(C());
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
						e(x(n)), n[0] && e(P(n[0].cardId))
					} catch (n) {
						a.c.captureException(n), e(x([]))
					}
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
				a = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				d = r.n(s);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => a.a.createElement("div", {
				className: Object(o.a)(d.a.loadingIcon, t, {
					[d.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/endpoints/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return j
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "i", (function() {
				return g
			})), r.d(t, "h", (function() {
				return v
			})), r.d(t, "j", (function() {
				return P
			})), r.d(t, "g", (function() {
				return h
			})), r.d(t, "c", (function() {
				return E
			})), r.d(t, "e", (function() {
				return C
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "b", (function() {
				return S
			})), r.d(t, "l", (function() {
				return w
			})), r.d(t, "k", (function() {
				return k
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				a = r.n(n),
				o = r("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				s = r("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				d = r("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				i = r("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				c = r("./src/redditGQL/operations/CreateEconOrder.json"),
				u = r("./src/redditGQL/operations/CreatePaypalPayment.json"),
				l = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				p = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				f = r("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				b = r("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				m = r("./src/redditGQL/operations/UserSavedStripeCards.json"),
				y = r("./src/lib/makeGqlRequest/index.ts");
			const j = (e, t, r, n, o) => {
				const {
					premium: s,
					...d
				} = o, i = (null == s ? void 0 : s.pricePackage) || r.pricePackages[0], u = new a.a(i.price).multipliedBy(n).toFixed();
				return Object(y.a)(e, {
					...c,
					variables: {
						input: {
							nonce: t,
							productId: r.id,
							productVersion: r.version,
							pricePackageId: i.id,
							currency: i.currency,
							price: u,
							productsCount: n.toString(),
							...d
						}
					}
				})
			};
			var O;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(O || (O = {}));
			const g = (e, t, r, n) => Object(y.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				v = (e, t, r, n) => Object(y.a)(e, {
					...l,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				P = (e, t, r, n) => Object(y.a)(e, {
					...f,
					variables: {
						nonce: t,
						orderId: r,
						cardId: n
					}
				}),
				h = (e, t, r, n, a) => Object(y.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: r,
						successUrl: n,
						cancelUrl: a
					}
				}),
				E = (e, t, r, n) => Object(y.a)(e, {
					...s,
					variables: {
						nonce: t,
						paymentId: r,
						token: n
					}
				}),
				C = (e, t, r, n) => Object(y.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: r,
						cardId: n
					}
				}),
				x = (e, t, r, n, a) => Object(y.a)(e, {
					...d,
					variables: {
						nonce: t,
						paymentId: r,
						token: n,
						saveCard: a
					}
				}),
				S = (e, t) => Object(y.a)(e, {
					...o,
					variables: {
						orderId: t
					}
				}),
				w = e => Object(y.a)(e, {
					...m,
					variables: {}
				}),
				k = (e, t) => Object(y.a)(e, {
					...b,
					variables: {
						cardId: t
					}
				})
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/react-redux/es/index.js");

			function a() {
				return Object(n.d)()
			}
		},
		"./src/reddit/icons/svgs/Replay/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", o({}, e, {
				viewBox: "13 12 23 23",
				xmlns: "http://www.w3.org/2000/svg"
			}), a.a.createElement("g", null, a.a.createElement("path", {
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2",
				fill: "inherit"
			})))
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
		"./src/reddit/pages/PaypalFinishPage/index.m.less": function(e, t, r) {
			e.exports = {
				loader: "_1ia9yqGevQ-g_70nwfxEm0",
				details: "_3dSBBqfRzgAPNfPqKwl8yR",
				error: "_1qAMyiuz3fo5Au5Cgu3W83",
				repeatButton: "_1hNJdrneOevh1kG25_vuXx",
				repeatIcon: "_39gyI00r3uS5ZeIndcJghA"
			}
		},
		"./src/reddit/pages/PaypalFinishPage/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				i = r("./src/reddit/actions/platform.ts"),
				c = r("./src/reddit/models/Gold/ProductOffer.ts"),
				u = r("./src/reddit/hooks/useThunkDispatch.ts"),
				l = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				p = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = r("./src/reddit/icons/svgs/Replay/index.tsx"),
				b = r("./src/reddit/pages/PaypalFinishPage/index.m.less"),
				m = r.n(b);
			const y = "r",
				j = "o",
				O = "p",
				g = "approval_token_id",
				v = "s",
				P = "pt",
				h = Object(s.c)({
					paypalErrorMessage: l.d
				}),
				E = Object(o.b)(h);
			var C;
			! function(e) {
				e.Loading = "loading", e.Error = "error", e.Success = "success", e.Cancel = "cancel"
			}(C || (C = {}));
			t.default = E(e => {
				const {
					params: t,
					paypalErrorMessage: r
				} = e, o = t[y], s = t[j], l = t[v], b = t[O], h = t[g], E = t[P], x = Object(u.a)(), S = async () => {
					k(C.Loading), await x(Object(d.f)(b, h)) ? ((() => e.postMessage({
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
						title: c.e[E]()
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
				}, r && a.a.createElement("div", {
					className: m.a.error
				}, r), a.a.createElement("button", {
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
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return i
			})), r.d(t, "i", (function() {
				return c
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "j", (function() {
				return f
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "g", (function() {
				return j
			})), r.d(t, "f", (function() {
				return O
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/makeProductOfferKey/index.ts"),
				o = r("./src/reddit/models/Gold/ProductOffer.ts"),
				s = r("./src/reddit/models/Payments/index.ts"),
				d = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				c = (e, {
					subredditId: t,
					type: r
				}) => {
					var n, o, s;
					return t ? e.subreddits.productOffers[Object(a.a)(r, t)] : null === (s = null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.goldPurchase) || void 0 === o ? void 0 : o.productOffers) || void 0 === s ? void 0 : s[Object(a.a)(r)]
				},
				u = (e, {
					subredditId: t
				}) => {
					const r = c(e, {
						subredditId: t,
						type: o.c.Powerups
					});
					return r && r[0]
				},
				l = (e, t) => {
					var r;
					const n = u(e, t);
					return null === (r = null == n ? void 0 : n.pricePackages) || void 0 === r ? void 0 : r[0].price
				},
				p = e => {
					const t = c(e, {
						type: o.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				f = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === s.b.PayPal || e[0] === s.b.Stripe)(e.requiredPaymentProviders)) : null,
				b = Object(n.a)(p, d.p, (e, t) => f(e, t) || null),
				m = Object(n.a)(b, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				y = Object(n.a)(b, e => (null == e ? void 0 : e[0].price) || null),
				j = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				O = Object(n.a)(j, e => Boolean(null == e ? void 0 : e.isCanceled))
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
		"./src/redditGQL/operations/UserSavedStripeCards.json": function(e) {
			e.exports = JSON.parse('{"id":"d29c51cfbfe6"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.60c27370c222e2b479c8.js.map