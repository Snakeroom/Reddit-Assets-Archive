// https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.08bbd4d21a6b02f2be7a.js
// Retrieved at 5/10/2021, 7:20:05 PM by Reddit Dataminer v1.0.0
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
			})), t.d(r, "i", (function() {
				return S
			})), t.d(r, "f", (function() {
				return _
			})), t.d(r, "e", (function() {
				return k
			})), t.d(r, "d", (function() {
				return I
			})), t.d(r, "c", (function() {
				return A
			})), t.d(r, "a", (function() {
				return L
			})), t.d(r, "g", (function() {
				return T
			})), t.d(r, "h", (function() {
				return J
			}));
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				a = t("./node_modules/lodash/omit.js"),
				s = t.n(a),
				o = t("./node_modules/uuid/v4.js"),
				c = t.n(o),
				i = t("./src/config.ts"),
				d = t("./src/reddit/constants/modals.ts"),
				u = t("./src/reddit/actions/toaster.ts"),
				l = t("./src/lib/addQueryParams/index.ts"),
				p = t("./src/lib/makeActionCreator/index.ts"),
				f = t("./src/lib/sentry/index.ts"),
				b = t("./src/reddit/models/Toast/index.ts"),
				m = t("./src/reddit/actions/gold/constants.ts"),
				g = t("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				j = t("./src/reddit/selectors/gold/productOffers.ts"),
				O = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				y = t("./src/reddit/selectors/user.ts"),
				h = t("./src/reddit/models/Gold/ProductOffer.ts"),
				v = t("./src/reddit/actions/gold/powerups.ts"),
				P = t("./src/reddit/actions/modal.ts"),
				E = t("./src/reddit/endpoints/gold/productOfferPurchase.ts");
			const C = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				x = e => e.map(e => e.message).join(" : "),
				w = (e, r, t) => async (a, s, {
					gqlContext: o
				}) => {
					const i = c()(),
						d = await Object(E.f)(o(), i, e, r, t);
					if (d.ok) {
						const e = d.body,
							{
								errors: r,
								order: t
							} = e.data.createEconOrder;
						if (r && r.length) throw new Error(x(r));
						if (t) return t.id
					}
					throw new Error((() => n.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, S = (e, r, t, a, s, o) => async (i, d, {
					gqlContext: u
				}) => {
					const l = d(),
						p = () => i(Object(g.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						}))),
						b = s === h.c.Premium,
						m = s === h.c.Powerups,
						v = {};
					if (m && o) v.powerUps = {
						subredditId: o,
						isAnonymous: t
					};
					else if (b) {
						const e = Object(j.b)(l);
						v.premium = {
							pricePackage: e
						}
					}
					let P, C, S = "";
					try {
						S = await i(w(r, a, v))
					} catch (k) {
						return f.c.captureException(k), void(k.message && i(Object(g.stripeApiError)(k.message)))
					}
					i(Object(g.stripeTokenPending)());
					const _ = Object(O.y)(l);
					if (_ || (P = await i(Object(g.validateAndCreateStripeToken)(e)), C = Object(O.v)(l), P)) try {
						const r = c()(),
							n = _ || C ? P && C ? Object(E.h)(u(), r, S, P.id) : _ ? Object(E.j)(u(), r, S, _) : null : Object(E.i)(u(), r, S, P.id),
							s = await n;
						if (!(null == s ? void 0 : s.ok)) return void p();
						const l = s.body.data.createEconPayment;
						if (l && l.errors && l.errors.length) return void i(Object(g.stripeApiError)(x(l.errors)));
						const {
							ok: f,
							payment: j,
							providerExecution: {
								paymentIntentClientSecret: O
							}
						} = l;
						if (f && j.status === E.a.ActionRequired) {
							const r = await e.confirmCardPayment(O),
								{
									error: t
								} = r;
							if (t) return void(t.message ? i(Object(g.stripeApiError)(t.message)) : p());
							let n;
							if (!(n = _ ? await Object(E.e)(u(), c()(), j.id, _) : await Object(E.d)(u(), c()(), j.id, P.id, C)).ok) return void p();
							const a = n.body;
							if (!a.data.confirmEconPayment.ok || a.data.confirmEconPayment.payment.status !== E.a.Paid) return void p()
						} else if (f && j.status !== E.a.Paid) return void p();
						const h = Object(y.i)(d());
						h && (m && o ? i(T({
							subredditId: o,
							powerupsCount: a,
							user: h,
							isAnonymous: t
						})) : b && i(U({
							user: h
						})))
					} catch (k) {
						f.c.captureException(k), p()
					}
				}, _ = (e, r, t, n) => async (a, s, {
					gqlContext: o
				}) => {
					let d = "";
					try {
						d = await a(w(e, n, {
							powerUps: {
								subredditId: r,
								isAnonymous: t
							}
						}))
					} catch (p) {
						return f.c.captureException(p), p.message && a(Object(g.paypalApiError)(p.message)), null
					}
					const u = i.a.redditUrl;
					try {
						const e = Object(l.a)(`${u}/framedModal/paypal-finish`, {
								_o: u,
								r,
								o: d,
								s: !0
							}),
							i = Object(l.a)(`${u}/framedModal/paypal-finish`, {
								_o: u,
								r,
								o: d
							}),
							p = c()(),
							f = await Object(E.g)(o(), p, d, e, i);
						if (f && f.ok) {
							const e = f.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return a(Object(g.paypalApiError)(x(e.errors))), null;
							const o = Object(y.i)(s());
							if (e.ok) {
								const {
									status: s
								} = e.payment;
								if (s === E.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === s && o) return r && a(T({
									subredditId: r,
									powerupsCount: n,
									user: o,
									isAnonymous: t
								})), null
							}
						}
					} catch (p) {
						f.c.captureException(p)
					}
					return a(Object(g.paypalApiError)(C())), null
				}, k = (e, r) => async (t, n, {
					gqlContext: a
				}) => {
					try {
						const n = c()(),
							s = await Object(E.c)(a(), n, e, r);
						if (s && s.ok) {
							const e = s.body.data.confirmEconPayment;
							if (e && e.errors && e.errors.length) return t(Object(g.paypalApiError)(x(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (s) {
						f.c.captureException(s)
					}
					return t(Object(g.paypalApiError)(C())), !1
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
							} = t.data.identity, a = n.map(e => s()({
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
				}, A = e => async (r, t, {
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
						if (a && a.length) throw new Error(x(a))
					} catch (a) {
						f.c.captureException(a)
					}
				}, N = Object(p.a)(m.N), q = Object(p.a)(m.O), R = Object(p.a)(m.P), D = e => async (r, t) => {
					await r(N(e)), r(Object(u.f)({
						kind: b.b.Error,
						duration: u.a,
						text: e
					}))
				}, L = (e, r, t) => async (a, s, {
					gqlContext: o
				}) => {
					a(q({
						subredditId: r,
						allocatedAt: t
					}));
					try {
						const s = await Object(E.b)(o(), e);
						if (s.ok) {
							const e = s.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void a(D(n[0].message));
							a(R({
								subredditId: r,
								allocatedAt: t
							}))
						} else a(D(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (c) {
						f.c.captureException(c), a(D(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, M = Object(p.a)(m.R), T = e => async (r, t) => {
					r(M(e)), r(Object(v.h)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), r(Object(P.g)(d.a.ECON_POWERUPS_PURCHASE)), r(Object(P.h)(d.a.ECON_POWERUPS_SUCCESS))
				}, U = Object(p.a)(m.V), J = Object(p.a)(m.Z)
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
				return j
			})), t.d(r, "validateAndCreateStripeToken", (function() {
				return O
			})), t.d(r, "paypalApiError", (function() {
				return y
			})), t.d(r, "toggleRememberCard", (function() {
				return h
			})), t.d(r, "selectSavedCard", (function() {
				return v
			})), t.d(r, "_deleteSavedCard", (function() {
				return P
			})), t.d(r, "deleteSavedCard", (function() {
				return E
			})), t.d(r, "savedCardsPending", (function() {
				return C
			})), t.d(r, "savedCardsSuccess", (function() {
				return x
			})), t.d(r, "loadSavedCards", (function() {
				return w
			}));
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				a = t("./src/lib/sentry/index.ts"),
				s = t("./src/lib/makeActionCreator/index.ts"),
				o = t("./src/reddit/endpoints/gold/purchase.ts"),
				c = t("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				i = t("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = Object(s.a)(c.B),
				u = Object(s.a)(c.w),
				l = Object(s.a)(c.b),
				p = Object(s.a)(c.y),
				f = Object(s.a)(c.a),
				b = Object(s.a)(c.E),
				m = Object(s.a)(c.G),
				g = Object(s.a)(c.F),
				j = Object(s.a)(c.D),
				O = e => async (r, t) => {
					const a = t(),
						s = Object(i.h)(a),
						o = Object(i.l)(a),
						{
							token: c,
							error: d
						} = await e.createToken({
							name: s,
							address_zip: o
						});
					if (s.trim()) {
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
				}, y = Object(s.a)(c.x), h = Object(s.a)(c.H), v = Object(s.a)(c.C), P = Object(s.a)(c.g), E = e => async (r, t, {
					apiContext: n
				}) => {
					r(P(e));
					try {
						const r = await Object(o.a)(n(), e);
						if (r.error) throw new Error(r.error.type)
					} catch (s) {
						a.c.captureException(s)
					}
				}, C = Object(s.a)(c.z), x = Object(s.a)(c.A), w = () => async (e, r, {
					apiContext: t
				}) => {
					e(C());
					try {
						const r = await Object(o.b)(t());
						if (r.error) throw new Error(r.error.type);
						const n = r.body.map(e => ({
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
				s = t("./src/lib/classNames/index.ts"),
				o = t("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = t.n(o);
			r.a = ({
				center: e,
				className: r,
				sizePx: t = 10
			}) => a.a.createElement("div", {
				className: Object(s.a)(c.a.loadingIcon, r, {
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
				return j
			})), t.d(r, "a", (function() {
				return O
			})), t.d(r, "i", (function() {
				return y
			})), t.d(r, "h", (function() {
				return h
			})), t.d(r, "j", (function() {
				return v
			})), t.d(r, "g", (function() {
				return P
			})), t.d(r, "c", (function() {
				return E
			})), t.d(r, "e", (function() {
				return C
			})), t.d(r, "d", (function() {
				return x
			})), t.d(r, "b", (function() {
				return w
			})), t.d(r, "l", (function() {
				return S
			})), t.d(r, "k", (function() {
				return _
			}));
			var n = t("./node_modules/bignumber.js/bignumber.js"),
				a = t.n(n),
				s = t("./src/graphql/operations/CancelEconRecurringPayment.json"),
				o = t("./src/graphql/operations/ConfirmPaypalPayment.json"),
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
			const j = (e, r, t, n, s) => {
				const {
					premium: o,
					...c
				} = s, i = (null == o ? void 0 : o.pricePackage) || t.pricePackages[0], u = new a.a(i.price).multipliedBy(n).toFixed();
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
			const y = (e, r, t, n) => Object(g.a)(e, {
					...p,
					variables: {
						nonce: r,
						orderId: t,
						token: n
					}
				}),
				h = (e, r, t, n) => Object(g.a)(e, {
					...l,
					variables: {
						nonce: r,
						orderId: t,
						token: n
					}
				}),
				v = (e, r, t, n) => Object(g.a)(e, {
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
					...o,
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
				w = (e, r) => Object(g.a)(e, {
					...s,
					variables: {
						orderId: r
					}
				}),
				S = e => Object(g.a)(e, {
					...m,
					variables: {}
				}),
				_ = (e, r) => Object(g.a)(e, {
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

			function s() {
				return (s = Object.assign || function(e) {
					for (var r = 1; r < arguments.length; r++) {
						var t = arguments[r];
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					}
					return e
				}).apply(this, arguments)
			}
			r.a = e => a.a.createElement("svg", s({}, e, {
				viewBox: "13 12 23 23",
				xmlns: "http://www.w3.org/2000/svg"
			}), a.a.createElement("g", null, a.a.createElement("path", {
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2",
				fill: "inherit"
			})))
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
				s = t("./node_modules/react-redux/es/index.js"),
				o = t("./node_modules/reselect/es/index.js"),
				c = t("./src/reddit/actions/gold/productOfferPurchase.ts"),
				i = t("./src/reddit/actions/platform.ts"),
				d = t("./src/reddit/hooks/useThunkDispatch.ts"),
				u = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				l = t("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = t("./src/reddit/icons/svgs/Replay/index.tsx"),
				f = t("./src/reddit/pages/PaypalFinishPage/index.m.less"),
				b = t.n(f);
			const {
				fbt: m
			} = t("./node_modules/fbt/lib/FbtPublic.js"), g = "r", j = "o", O = "p", y = "approval_token_id", h = "s", v = Object(o.c)({
				paypalErrorMessage: u.d
			}), P = Object(s.b)(v);
			var E;
			! function(e) {
				e.Loading = "loading", e.Error = "error", e.Success = "success", e.Cancel = "cancel"
			}(E || (E = {}));
			r.default = P(e => {
				const {
					params: r,
					paypalErrorMessage: t
				} = e, s = r[g], o = r[j], u = r[h], f = r[O], v = r[y], P = Object(d.a)(), C = async () => {
					w(E.Loading), await P(Object(c.e)(f, v)) ? ((() => e.postMessage({
						type: "paypal-finish.success",
						data: {
							subredditId: s,
							orderId: o
						}
					}))(), setTimeout(() => {
						window.close(), w(E.Success)
					}, 1500)) : w(E.Error)
				};
				Object(n.useEffect)(() => {
					P(Object(i.l)({
						title: m._("Reddit - Buy Powerups", null, {
							hk: "4sEI31"
						})
					})), u ? C() : ((() => e.postMessage({
						type: "paypal-finish.cancel"
					}))(), setTimeout(() => {
						window.close(), w(E.Cancel)
					}, 1500))
				}, []);
				const [x, w] = Object(n.useState)(E.Loading);
				return a.a.createElement(a.a.Fragment, null, x === E.Loading && a.a.createElement(l.a, {
					className: b.a.loader,
					sizePx: 60
				}), x === E.Error && a.a.createElement("div", {
					className: b.a.details
				}, t && a.a.createElement("div", {
					className: b.a.error
				}, t), a.a.createElement("button", {
					onClick: C,
					className: b.a.repeatButton
				}, a.a.createElement(p.a, {
					className: b.a.repeatIcon
				}))), x === E.Success && a.a.createElement("div", {
					className: b.a.details
				}, m._("Thanks for the purchase. It is safe to close this page now.", null, {
					hk: "1cdx2b"
				})), x === E.Cancel && a.a.createElement("div", {
					className: b.a.details
				}, m._("It is safe to close this page.", null, {
					hk: "Zh0mx"
				})))
			})
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, r, t) {
			"use strict";
			t.d(r, "f", (function() {
				return c
			})), t.d(r, "g", (function() {
				return i
			})), t.d(r, "a", (function() {
				return d
			})), t.d(r, "c", (function() {
				return u
			})), t.d(r, "h", (function() {
				return l
			})), t.d(r, "b", (function() {
				return p
			})), t.d(r, "e", (function() {
				return f
			})), t.d(r, "d", (function() {
				return b
			}));
			var n = t("./node_modules/reselect/es/index.js"),
				a = t("./src/lib/makeProductOfferKey/index.ts"),
				s = t("./src/reddit/models/Gold/ProductOffer.ts"),
				o = t("./src/reddit/selectors/goldPurchaseModals.ts");
			const c = e => e.subreddits.api.productOffers.pending,
				i = (e, {
					subredditId: r,
					type: t
				}) => {
					var n, s, o;
					return r ? e.subreddits.productOffers[Object(a.a)(t, r)] : null === (o = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.goldPurchase) || void 0 === s ? void 0 : s.productOffers) || void 0 === o ? void 0 : o[Object(a.a)(t)]
				},
				d = (e, {
					subredditId: r
				}) => {
					const t = i(e, {
						subredditId: r,
						type: s.c.Powerups
					});
					return t && t[0]
				},
				u = e => {
					const r = i(e, {
						type: s.c.Premium
					});
					return null == r ? void 0 : r[0]
				},
				l = (e, r) => null == e ? void 0 : e.pricePackages.find(e => e.renewInterval === r),
				p = Object(n.a)(u, o.p, (e, r) => l(e, r)),
				f = Object(n.a)(e => {
					var r;
					return null === (r = e.user.productOfferSubscriptions) || void 0 === r ? void 0 : r.subscriptions
				}, e => null == e ? void 0 : e[0]),
				b = Object(n.a)(f, e => Boolean(null == e ? void 0 : e.isCanceled))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.08bbd4d21a6b02f2be7a.js.map