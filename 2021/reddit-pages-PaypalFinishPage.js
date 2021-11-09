// https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.defd31b2186336eb9e42.js
// Retrieved at 11/9/2021, 12:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-pages-PaypalFinishPage"], {
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return w
			})), r.d(t, "k", (function() {
				return k
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "g", (function() {
				return A
			})), r.d(t, "d", (function() {
				return I
			})), r.d(t, "c", (function() {
				return N
			})), r.d(t, "a", (function() {
				return R
			})), r.d(t, "i", (function() {
				return M
			})), r.d(t, "e", (function() {
				return U
			})), r.d(t, "j", (function() {
				return J
			})), r.d(t, "f", (function() {
				return B
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/omit.js"),
				o = r.n(a),
				d = r("./node_modules/uuid/v4.js"),
				s = r.n(d),
				i = r("./src/config.ts"),
				c = r("./src/reddit/constants/modals.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/lib/addQueryParams/index.ts"),
				p = r("./src/lib/makeActionCreator/index.ts"),
				f = r("./src/lib/sentry/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				m = r("./src/reddit/actions/gold/constants.ts"),
				y = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				O = r("./src/reddit/selectors/gold/productOffers.ts"),
				j = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				P = r("./src/reddit/models/Gold/ProductOffer.ts"),
				v = r("./src/reddit/actions/gold/powerups.ts"),
				h = r("./src/reddit/actions/modal.ts"),
				E = r("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				C = r("./src/reddit/models/Payments/index.ts");
			const x = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				S = e => e.map(e => e.message).join(" : "),
				w = (e, t, r) => async (a, o, {
					gqlContext: d
				}) => {
					const i = s()(),
						c = await Object(E.f)(d(), i, e, t, r);
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
				}, k = (e, t, r, a, o, d) => async (i, c, {
					gqlContext: u
				}) => {
					var l;
					const p = c(),
						b = () => i(Object(y.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						}))),
						m = o === P.c.Premium,
						v = o === P.c.Powerups,
						h = {};
					if (v && d) h.powerUps = {
						subredditId: d,
						isAnonymous: r
					};
					else if (m) {
						const e = Object(O.d)(p, {
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
					const A = Object(j.y)(p);
					if (A || (x = await i(Object(y.validateAndCreateStripeToken)(e)), k = Object(j.v)(p), x)) try {
						const t = s()(),
							n = A || k ? x && k ? Object(E.h)(u(), t, _, x.id) : A ? Object(E.j)(u(), t, _, A) : null : Object(E.i)(u(), t, _, x.id),
							o = await n;
						if (!(null == o ? void 0 : o.ok)) return void b();
						const p = o.body.data.createEconPayment;
						if (null === (l = null == p ? void 0 : p.errors) || void 0 === l ? void 0 : l.length) return void i(Object(y.stripeApiError)(S(p.errors)));
						const {
							ok: f,
							payment: O,
							providerExecution: {
								paymentIntentClientSecret: j
							}
						} = p;
						if (f && O.status === E.a.ActionRequired) {
							const t = await e.confirmCardPayment(j),
								{
									error: r
								} = t;
							if (r) return void(r.message ? i(Object(y.stripeApiError)(r.message)) : b());
							let n;
							if (!(n = A ? await Object(E.e)(u(), s()(), O.id, A) : await Object(E.d)(u(), s()(), O.id, x.id, k)).ok) return void b();
							const a = n.body;
							if (!a.data.confirmEconPayment.ok || a.data.confirmEconPayment.payment.status !== E.a.Paid) return void b()
						} else if (f && O.status !== E.a.Paid) return void b();
						const P = Object(g.k)(c());
						P && (v && d ? i(M({
							subredditId: d,
							powerupsCount: a,
							user: P,
							isAnonymous: r
						})) : m && i(U({
							user: P
						})))
					} catch (I) {
						f.c.captureException(I), b()
					}
				}, _ = (e, t, r, n, a) => async (o, d, {
					gqlContext: c
				}) => {
					var u;
					const p = d(),
						b = n === P.c.Premium,
						m = n === P.c.Powerups,
						j = {};
					if (m && a) j.powerUps = {
						subredditId: a,
						isAnonymous: t
					};
					else if (b) {
						const e = Object(O.d)(p, {
							provider: C.b.PayPal
						});
						if (!e) return null;
						j.premium = {
							pricePackage: e
						}
					}
					let v = "";
					try {
						v = await o(w(e, r, j))
					} catch (_) {
						return f.c.captureException(_), _.message && o(Object(y.paypalApiError)(_.message)), null
					}
					const h = i.a.redditUrl;
					let k = {
						_o: h,
						o: v,
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
							i = s()(),
							p = await Object(E.g)(c(), i, v, e, n);
						if (p && p.ok) {
							const e = p.body.data.createEconPayment;
							if (null === (u = null == e ? void 0 : e.errors) || void 0 === u ? void 0 : u.length) return o(Object(y.paypalApiError)(S(e.errors))), null;
							const n = Object(g.k)(d());
							if (e.ok) {
								const {
									status: d
								} = e.payment;
								if (d === E.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === d && n) return a ? o(M({
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
						const n = s()(),
							d = await Object(E.c)(a(), n, e, t);
						if (d && d.ok) {
							const e = d.body.data.confirmEconPayment;
							if (null === (o = null == e ? void 0 : e.errors) || void 0 === o ? void 0 : o.length) return r(Object(y.paypalApiError)(S(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (d) {
						f.c.captureException(d)
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
				}, N = e => async (t, r, {
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
				}, L = Object(p.a)(m.O), G = Object(p.a)(m.P), Q = Object(p.a)(m.Q), D = e => async (t, r) => {
					await t(L(e)), t(Object(u.f)({
						kind: b.b.Error,
						duration: u.a,
						text: e
					}))
				}, R = (e, t, r) => async (a, o, {
					gqlContext: d
				}) => {
					a(G({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const o = await Object(E.b)(d(), e);
						if (o.ok) {
							const e = o.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void a(D(n[0].message));
							a(Q({
								subredditId: t,
								allocatedAt: r
							}))
						} else a(D(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (s) {
						f.c.captureException(s), a(D(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, q = Object(p.a)(m.S), M = e => async (t, r) => {
					t(q(e)), t(Object(v.m)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(h.g)(c.a.ECON_POWERUPS_PURCHASE)), t(Object(h.h)(c.a.ECON_POWERUPS_SUCCESS))
				}, T = Object(p.a)(m.W), U = ({
					user: e
				}) => async t => {
					await t(Object(v.o)(!0)), t(T({
						user: e
					}))
				}, J = Object(p.a)(m.ab), B = () => async e => e(Object(h.h)(c.a.ECON_PREMIUM_FEEDBACK))
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
				return O
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return j
			})), r.d(t, "paypalApiError", (function() {
				return g
			})), r.d(t, "toggleRememberCard", (function() {
				return P
			})), r.d(t, "selectSavedCard", (function() {
				return v
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
				d = r("./src/reddit/endpoints/gold/purchase.ts"),
				s = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const c = Object(o.a)(s.B),
				u = Object(o.a)(s.w),
				l = Object(o.a)(s.b),
				p = Object(o.a)(s.y),
				f = Object(o.a)(s.a),
				b = Object(o.a)(s.E),
				m = Object(o.a)(s.G),
				y = Object(o.a)(s.F),
				O = Object(o.a)(s.D),
				j = e => async (t, r) => {
					const a = r(),
						o = Object(i.h)(a),
						d = Object(i.l)(a),
						{
							token: s,
							error: c
						} = await e.createToken({
							name: o,
							address_zip: d
						});
					if (o.trim()) {
						if (!c && s) return s;
						t(y(c || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(f({
							message: e
						}))
					}
				}, g = Object(o.a)(s.x), P = Object(o.a)(s.H), v = Object(o.a)(s.C), h = Object(o.a)(s.g), E = e => async (t, r, {
					apiContext: n
				}) => {
					t(h(e));
					try {
						const t = await Object(d.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (o) {
						a.c.captureException(o)
					}
				}, C = Object(o.a)(s.z), x = Object(o.a)(s.A), S = () => async (e, t, {
					apiContext: r
				}) => {
					e(C());
					try {
						const t = await Object(d.b)(r());
						if (t.error) throw new Error(t.error.type);
						const n = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(x(n)), n[0] && e(v(n[0].cardId))
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
				d = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				s = r.n(d);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => a.a.createElement("div", {
				className: Object(o.a)(s.a.loadingIcon, t, {
					[s.a.mCentered]: e
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
				return O
			})), r.d(t, "a", (function() {
				return j
			})), r.d(t, "i", (function() {
				return g
			})), r.d(t, "h", (function() {
				return P
			})), r.d(t, "j", (function() {
				return v
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
				d = r("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				s = r("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				i = r("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				c = r("./src/redditGQL/operations/CreateEconOrder.json"),
				u = r("./src/redditGQL/operations/CreatePaypalPayment.json"),
				l = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				p = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				f = r("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				b = r("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				m = r("./src/redditGQL/operations/UserSavedStripeCards.json"),
				y = r("./src/lib/makeGqlRequest/index.ts");
			const O = (e, t, r, n, o) => {
				const {
					premium: d,
					...s
				} = o, i = (null == d ? void 0 : d.pricePackage) || r.pricePackages[0], u = new a.a(i.price).multipliedBy(n).toFixed();
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
							...s
						}
					}
				})
			};
			var j;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(j || (j = {}));
			const g = (e, t, r, n) => Object(y.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				P = (e, t, r, n) => Object(y.a)(e, {
					...l,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				v = (e, t, r, n) => Object(y.a)(e, {
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
					...d,
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
					...s,
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
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, a, o, d;
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
				}(d || (d = {}))
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
				d = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				i = r("./src/reddit/actions/platform.ts"),
				c = r("./src/reddit/models/Gold/ProductOffer.ts"),
				u = r("./src/reddit/hooks/useThunkDispatch.ts"),
				l = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				p = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = r("./src/reddit/icons/svgs/Replay/index.tsx"),
				b = r("./src/reddit/pages/PaypalFinishPage/index.m.less"),
				m = r.n(b);
			const y = "r",
				O = "o",
				j = "p",
				g = "approval_token_id",
				P = "s",
				v = "pt",
				h = Object(d.c)({
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
				} = e, o = t[y], d = t[O], l = t[P], b = t[j], h = t[g], E = t[v], x = Object(u.a)(), S = async () => {
					k(C.Loading), await x(Object(s.g)(b, h)) ? ((() => e.postMessage({
						type: "paypal-finish.success",
						data: {
							subredditId: o,
							orderId: d
						}
					}))(), setTimeout(() => {
						window.close(), k(C.Success)
					}, 1500)) : k(C.Error)
				};
				Object(n.useEffect)(() => {
					x(Object(i.m)({
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
				return O
			})), r.d(t, "f", (function() {
				return j
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/makeProductOfferKey/index.ts"),
				o = r("./src/reddit/models/Gold/ProductOffer.ts"),
				d = r("./src/reddit/models/Payments/index.ts"),
				s = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				c = (e, {
					subredditId: t,
					type: r
				}) => {
					var n, o, d;
					return t ? e.subreddits.productOffers[Object(a.a)(r, t)] : null === (d = null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.goldPurchase) || void 0 === o ? void 0 : o.productOffers) || void 0 === d ? void 0 : d[Object(a.a)(r)]
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
				f = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === d.b.PayPal || e[0] === d.b.Stripe)(e.requiredPaymentProviders)) : null,
				b = Object(n.a)(p, s.p, (e, t) => f(e, t) || null),
				m = Object(n.a)(b, (e, {
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
				j = Object(n.a)(O, e => Boolean(null == e ? void 0 : e.isCanceled))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.defd31b2186336eb9e42.js.map