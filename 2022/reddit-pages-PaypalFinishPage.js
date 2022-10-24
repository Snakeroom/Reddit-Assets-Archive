// https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.aa4c61e36d2be55aee86.js
// Retrieved at 10/24/2022, 9:50:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-pages-PaypalFinishPage"], {
		"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js": function(e, t, r) {
			! function(e, t) {
				"use strict";
				t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
				var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

				function n() {}

				function o() {}
				o.resetWarningCache = n;
				var a = function(e, t) {
					return e(t = {
						exports: {}
					}, t.exports), t.exports
				}((function(e) {
					e.exports = function() {
						function e(e, t, n, o, a, c) {
							if (c !== r) {
								var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
								throw s.name = "Invariant Violation", s
							}
						}

						function t() {
							return e
						}
						e.isRequired = e;
						var a = {
							array: e,
							bool: e,
							func: e,
							number: e,
							object: e,
							string: e,
							symbol: e,
							any: e,
							arrayOf: t,
							element: e,
							elementType: e,
							instanceOf: t,
							node: e,
							objectOf: t,
							oneOf: t,
							oneOfType: t,
							shape: t,
							exact: t,
							checkPropTypes: o,
							resetWarningCache: n
						};
						return a.PropTypes = a, a
					}()
				}));

				function c(e) {
					return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					})(e)
				}

				function s(e, t, r) {
					return t in e ? Object.defineProperty(e, t, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = r, e
				}

				function i(e, t) {
					var r = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var n = Object.getOwnPropertySymbols(e);
						t && (n = n.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), r.push.apply(r, n)
					}
					return r
				}

				function d(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = null != arguments[t] ? arguments[t] : {};
						t % 2 ? i(Object(r), !0).forEach((function(t) {
							s(e, t, r[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
						}))
					}
					return e
				}

				function u(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
							var r = [],
								n = !0,
								o = !1,
								a = void 0;
							try {
								for (var c, s = e[Symbol.iterator](); !(n = (c = s.next()).done) && (r.push(c.value), !t || r.length !== t); n = !0);
							} catch (i) {
								o = !0, a = i
							} finally {
								try {
									n || null == s.return || s.return()
								} finally {
									if (o) throw a
								}
							}
							return r
						}
					}(e, t) || function(e, t) {
						if (e) {
							if ("string" == typeof e) return l(e, t);
							var r = Object.prototype.toString.call(e).slice(8, -1);
							return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? l(e, t) : void 0
						}
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function l(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
					return n
				}
				var p = function(e) {
						var r = t.useRef(e);
						return t.useEffect((function() {
							r.current = e
						}), [e]), r.current
					},
					f = function(e) {
						return null !== e && "object" === c(e)
					},
					m = function(e, t, r) {
						return f(e) ? Object.keys(e).reduce((function(n, o) {
							var a = !f(t) || ! function e(t, r) {
								if (!f(t) || !f(r)) return t === r;
								var n = Array.isArray(t);
								if (n !== Array.isArray(r)) return !1;
								var o = "[object Object]" === Object.prototype.toString.call(t);
								if (o !== ("[object Object]" === Object.prototype.toString.call(r))) return !1;
								if (!o && !n) return !1;
								var a = Object.keys(t),
									c = Object.keys(r);
								if (a.length !== c.length) return !1;
								for (var s = {}, i = 0; i < a.length; i += 1) s[a[i]] = !0;
								for (var d = 0; d < c.length; d += 1) s[c[d]] = !0;
								var u = Object.keys(s);
								if (u.length !== a.length) return !1;
								var l = t,
									p = r;
								return u.every((function(t) {
									return e(l[t], p[t])
								}))
							}(e[o], t[o]);
							return r.includes(o) ? (a && console.warn("Unsupported prop change: options.".concat(o, " is not a mutable property.")), n) : a ? d(d({}, n || {}), {}, s({}, o, e[o])) : n
						}), null) : null
					},
					y = function(e) {
						if (null === e || f(t = e) && "function" == typeof t.elements && "function" == typeof t.createToken && "function" == typeof t.createPaymentMethod && "function" == typeof t.confirmCardPayment) return e;
						var t;
						throw new Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
					},
					b = function(e) {
						if (function(e) {
								return f(e) && "function" == typeof e.then
							}(e)) return {
							tag: "async",
							stripePromise: Promise.resolve(e).then(y)
						};
						var t = y(e);
						return null === t ? {
							tag: "empty"
						} : {
							tag: "sync",
							stripe: t
						}
					},
					g = t.createContext(null);
				g.displayName = "ElementsContext";
				var j = function(e) {
					var r = e.stripe,
						n = e.options,
						o = e.children,
						a = t.useRef(!1),
						c = t.useRef(!0),
						s = t.useMemo((function() {
							return b(r)
						}), [r]),
						i = u(t.useState((function() {
							return {
								stripe: null,
								elements: null
							}
						})), 2),
						d = i[0],
						l = i[1],
						f = p(r);
					null !== f && f !== r && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."), a.current || ("sync" === s.tag && (a.current = !0, l({
						stripe: s.stripe,
						elements: s.stripe.elements(n)
					})), "async" === s.tag && (a.current = !0, s.stripePromise.then((function(e) {
						e && c.current && l({
							stripe: e,
							elements: e.elements(n)
						})
					}))));
					var y = p(n);
					return t.useEffect((function() {
						if (d.elements) {
							var e = m(n, y, ["clientSecret", "fonts"]);
							e && d.elements.update(e)
						}
					}), [n, y, d.elements]), t.useEffect((function() {
						return function() {
							c.current = !1
						}
					}), []), t.useEffect((function() {
						var e = d.stripe;
						e && e._registerWrapper && e.registerAppInfo && (e._registerWrapper({
							name: "react-stripe-js",
							version: "1.6.0"
						}), e.registerAppInfo({
							name: "react-stripe-js",
							version: "1.6.0",
							url: "https://stripe.com/docs/stripe-js/react"
						}))
					}), [d.stripe]), t.createElement(g.Provider, {
						value: d
					}, o)
				};
				j.propTypes = {
					stripe: a.any,
					options: a.object
				};
				var v = function(e) {
						return function(e, t) {
							if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
							return e
						}(t.useContext(g), e)
					},
					O = function(e) {
						return (0, e.children)(v("mounts <ElementsConsumer>"))
					};
				O.propTypes = {
					children: a.func.isRequired
				};
				var h = function(e) {
						var r = t.useRef(e);
						return t.useEffect((function() {
								r.current = e
							}), [e]),
							function() {
								r.current && r.current.apply(r, arguments)
							}
					},
					E = function() {},
					P = function(e, r) {
						var n, o = "".concat((n = e).charAt(0).toUpperCase() + n.slice(1), "Element"),
							c = r ? function(e) {
								v("mounts <".concat(o, ">"));
								var r = e.id,
									n = e.className;
								return t.createElement("div", {
									id: r,
									className: n
								})
							} : function(r) {
								var n = r.id,
									a = r.className,
									c = r.options,
									s = void 0 === c ? {} : c,
									i = r.onBlur,
									d = void 0 === i ? E : i,
									u = r.onFocus,
									l = void 0 === u ? E : u,
									f = r.onReady,
									y = void 0 === f ? E : f,
									b = r.onChange,
									g = void 0 === b ? E : b,
									j = r.onEscape,
									O = void 0 === j ? E : j,
									P = r.onClick,
									C = void 0 === P ? E : P,
									x = v("mounts <".concat(o, ">")).elements,
									w = t.useRef(null),
									S = t.useRef(null),
									k = h(y),
									A = h(d),
									_ = h(l),
									I = h(C),
									N = h(g),
									L = h(O);
								t.useLayoutEffect((function() {
									if (null == w.current && x && null != S.current) {
										var t = x.create(e, s);
										w.current = t, t.mount(S.current), t.on("ready", (function() {
											return k(t)
										})), t.on("change", N), t.on("blur", A), t.on("focus", _), t.on("escape", L), t.on("click", I)
									}
								}));
								var R = p(s);
								return t.useEffect((function() {
									if (w.current) {
										var e = m(s, R, ["paymentRequest"]);
										e && w.current.update(e)
									}
								}), [s, R]), t.useLayoutEffect((function() {
									return function() {
										w.current && w.current.destroy()
									}
								}), []), t.createElement("div", {
									id: n,
									className: a,
									ref: S
								})
							};
						return c.propTypes = {
							id: a.string,
							className: a.string,
							onChange: a.func,
							onBlur: a.func,
							onFocus: a.func,
							onReady: a.func,
							onClick: a.func,
							options: a.object
						}, c.displayName = o, c.__elementType = e, c
					},
					C = "undefined" == typeof window,
					x = P("auBankAccount", C),
					w = P("card", C),
					S = P("cardNumber", C),
					k = P("cardExpiry", C),
					A = P("cardCvc", C),
					_ = P("fpxBank", C),
					I = P("iban", C),
					N = P("idealBank", C),
					L = P("p24Bank", C),
					R = P("epsBank", C),
					T = P("payment", C),
					G = P("paymentRequestButton", C),
					D = P("linkAuthentication", C),
					B = P("shippingAddress", C),
					Q = P("afterpayClearpayMessage", C);
				e.AfterpayClearpayMessageElement = Q, e.AuBankAccountElement = x, e.CardCvcElement = A, e.CardElement = w, e.CardExpiryElement = k, e.CardNumberElement = S, e.Elements = j, e.ElementsConsumer = O, e.EpsBankElement = R, e.FpxBankElement = _, e.IbanElement = I, e.IdealBankElement = N, e.LinkAuthenticationElement = D, e.P24BankElement = L, e.PaymentElement = T, e.PaymentRequestButtonElement = G, e.ShippingAddressElement = B, e.useElements = function() {
					return v("calls useElements()").elements
				}, e.useStripe = function() {
					return v("calls useStripe()").stripe
				}, Object.defineProperty(e, "__esModule", {
					value: !0
				})
			}(t, r("./node_modules/react/index.js"))
		},
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return h
			})), r.d(t, "d", (function() {
				return P
			})), r.d(t, "j", (function() {
				return C
			})), r.d(t, "h", (function() {
				return x
			})), r.d(t, "g", (function() {
				return w
			})), r.d(t, "e", (function() {
				return S
			})), r.d(t, "c", (function() {
				return k
			})), r.d(t, "a", (function() {
				return L
			})), r.d(t, "f", (function() {
				return T
			})), r.d(t, "i", (function() {
				return G
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/lodash/omit.js"),
				a = r.n(o),
				c = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				s = r("./src/config.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/lib/addQueryParams/index.ts"),
				u = r("./src/lib/makeActionCreator/index.ts"),
				l = r("./src/lib/sentry/index.ts"),
				p = r("./src/reddit/models/Toast/index.ts"),
				f = r("./src/reddit/actions/gold/constants.ts"),
				m = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				y = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				b = r("./src/reddit/selectors/user.ts"),
				g = r("./src/reddit/actions/gold/powerups.ts"),
				j = r("./src/reddit/endpoints/gold/productOfferPurchase/index.ts");
			const v = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				O = e => e.map(e => e.message).join(" : "),
				h = (e, t, r, o) => async (a, s, i) => {
					let {
						gqlContext: d
					} = i;
					const u = Object(c.a)(),
						l = await Object(j.f)(d(), u, e, t, r, o);
					if (l.ok) {
						const e = l.body,
							{
								errors: t,
								order: r
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(O(t));
						if (r) return r.id
					}
					throw new Error((() => n.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, E = Object(m.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
					hk: "2LgB2E"
				})), P = e => !!e && e.hasOwnProperty("success"), C = e => {
					let {
						stripe: t,
						stripeElements: r,
						productOffer: n,
						pricePackage: o,
						productsCount: a,
						extraParams: s
					} = e;
					return async (e, i, d) => {
						let {
							gqlContext: u
						} = d;
						var p;
						const f = i();
						let b, g, v = "";
						try {
							v = await e(h(n, o, a, s))
						} catch (C) {
							return l.c.captureException(C), void(C.message && e(Object(m.stripeApiError)(C.message)))
						}
						e(Object(m.stripeTokenPending)());
						const P = Object(y.y)(f);
						if (P || (b = await e(Object(m.validateAndCreateStripeToken)(t, r)), g = Object(y.v)(f), b)) try {
							const r = Object(c.a)(),
								n = P || g ? b && g ? Object(j.h)(u(), r, v, b.id) : P ? Object(j.j)(u(), r, v, P) : null : Object(j.i)(u(), r, v, b.id),
								o = await n;
							if (!(null == o ? void 0 : o.ok)) return void e(E);
							const a = o.body.data.createEconPayment;
							if (null === (p = null == a ? void 0 : a.errors) || void 0 === p ? void 0 : p.length) return void e(Object(m.stripeApiError)(O(a.errors)));
							const {
								ok: s,
								payment: i,
								providerExecution: {
									paymentIntentClientSecret: d
								}
							} = a;
							if (s && i.status === j.a.ActionRequired) {
								const r = await t.confirmCardPayment(d),
									{
										error: n
									} = r;
								if (n) return ((e, t) => {
									var r, n;
									(null === (n = null === (r = e.payment_intent) || void 0 === r ? void 0 : r.last_payment_error) || void 0 === n ? void 0 : n.message) ? t(Object(m.stripeApiError)(e.payment_intent.last_payment_error.message)): e.message ? t(Object(m.stripeApiError)(e.message)) : t(E)
								})(n, e);
								let o;
								if (!(o = P ? await Object(j.e)(u(), Object(c.a)(), i.id, P) : await Object(j.d)(u(), Object(c.a)(), i.id, b.id, g)).ok) return void e(E);
								const a = o.body;
								if (!a.data.confirmEconPayment.ok || a.data.confirmEconPayment.payment.status !== j.a.Paid) return void e(E)
							} else if (s && i.status !== j.a.Paid) return void e(E);
							return {
								success: !0
							}
						} catch (C) {
							l.c.captureException(C), e(E)
						}
					}
				}, x = e => {
					let {
						productOffer: t,
						pricePackage: r,
						productsCount: n,
						extraParams: o,
						overrideModalParams: a
					} = e;
					return async (e, i, u) => {
						let {
							gqlContext: p
						} = u;
						var f;
						let y = "";
						try {
							y = await e(h(t, r, n, o))
						} catch (P) {
							return l.c.captureException(P), P.message && e(Object(m.paypalApiError)(P.message)), null
						}
						const g = s.a.redditUrl,
							E = {
								_o: g,
								o: y,
								pt: t.type,
								...a
							};
						try {
							const t = Object(d.a)(`${g}/framedModal/paypal-finish`, {
									...E,
									s: !0
								}),
								r = Object(d.a)(`${g}/framedModal/paypal-finish`, E),
								n = Object(c.a)(),
								o = await Object(j.g)(p(), n, y, t, r);
							if (o && o.ok) {
								const t = o.body.data.createEconPayment;
								if (null === (f = null == t ? void 0 : t.errors) || void 0 === f ? void 0 : f.length) return e(Object(m.paypalApiError)(O(t.errors))), null;
								const r = Object(b.l)(i());
								if (t.ok) {
									const {
										status: e
									} = t.payment;
									if (e === j.a.ActionRequired) {
										const e = t.providerExecution;
										if (e.orderApprovalUrl) return {
											paymentId: t.payment.id,
											url: e.orderApprovalUrl
										};
										if (e.billingAgreementToken && e.billingAgreementApprovalUrl) return {
											paymentId: t.payment.id,
											token: e.billingAgreementToken,
											url: e.billingAgreementApprovalUrl
										}
									}
									if ("PAID" === e && r) return {
										success: !0
									}
								}
							}
						} catch (P) {
							l.c.captureException(P)
						}
						return e(Object(m.paypalApiError)(v())), null
					}
				}, w = (e, t) => async (r, n, o) => {
					let {
						gqlContext: a
					} = o;
					var s;
					try {
						const n = Object(c.a)(),
							o = await Object(j.c)(a(), n, e, t);
						if (o && o.ok) {
							const e = o.body.data.confirmEconPayment;
							if (null === (s = null == e ? void 0 : e.errors) || void 0 === s ? void 0 : s.length) return r(Object(m.paypalApiError)(O(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (i) {
						l.c.captureException(i)
					}
					return r(Object(m.paypalApiError)(v())), !1
				}, S = () => async (e, t, r) => {
					let {
						gqlContext: o
					} = r;
					var c;
					e(Object(m.savedCardsPending)());
					try {
						const t = await Object(j.l)(o());
						if (t.error) throw e(Object(m.stripeApiError)(n.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						}))), new Error(t.error.type);
						const r = t.body;
						(null === (c = r.errors) || void 0 === c ? void 0 : c.length) && e(Object(m.stripeApiError)(r.errors[0].message));
						const {
							savedStripeCards: s
						} = r.data.identity, i = s.map(e => a()({
							...e,
							cardId: e.id
						}, "id"));
						e(Object(m.savedCardsSuccess)(i)), i[0] && e(Object(m.selectSavedCard)(i[0].cardId))
					} catch (s) {
						l.c.captureException(s), e(Object(m.savedCardsSuccess)([]))
					}
				}, k = e => async (t, r, n) => {
					let {
						gqlContext: o
					} = n;
					t(Object(m.deleteSavedCard)(e));
					try {
						const t = await Object(j.k)(o(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: n
							} = r.data.deleteEconPaymentMethod;
						if (n && n.length) throw new Error(O(n))
					} catch (a) {
						l.c.captureException(a)
					}
				}, A = Object(u.a)(f.N), _ = Object(u.a)(f.O), I = Object(u.a)(f.P), N = e => async (t, r) => {
					await t(A(e)), t(Object(i.f)({
						kind: p.b.Error,
						duration: i.a,
						text: e
					}))
				}, L = (e, t, r) => async (o, a, c) => {
					let {
						gqlContext: s
					} = c;
					o(_({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const a = await Object(j.b)(s(), e);
						if (a.ok) {
							const e = a.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void o(N(n[0].message));
							o(I({
								subredditId: t,
								allocatedAt: r
							}))
						} else o(N(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (i) {
						l.c.captureException(i), o(N(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, R = Object(u.a)(f.U), T = e => {
					let {
						user: t
					} = e;
					return async e => {
						await e(Object(g.l)(!0)), e(R({
							user: t
						}))
					}
				}, G = Object(u.a)(f.Y)
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return i
			})), r.d(t, "paymentCompleted", (function() {
				return d
			})), r.d(t, "cardNameInput", (function() {
				return u
			})), r.d(t, "postalCodeInput", (function() {
				return l
			})), r.d(t, "cardNameEmpty", (function() {
				return p
			})), r.d(t, "cardNumberChange", (function() {
				return f
			})), r.d(t, "cardExpiryChange", (function() {
				return m
			})), r.d(t, "cardCvcChange", (function() {
				return y
			})), r.d(t, "stripeTokenPending", (function() {
				return b
			})), r.d(t, "stripeTokenError", (function() {
				return g
			})), r.d(t, "stripeApiError", (function() {
				return j
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return v
			})), r.d(t, "paypalApiError", (function() {
				return O
			})), r.d(t, "toggleRememberCard", (function() {
				return h
			})), r.d(t, "selectSavedCard", (function() {
				return E
			})), r.d(t, "deleteSavedCard", (function() {
				return P
			})), r.d(t, "savedCardsPending", (function() {
				return C
			})), r.d(t, "savedCardsSuccess", (function() {
				return x
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				o = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				s = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const i = Object(a.a)(s.F),
				d = Object(a.a)(s.A),
				u = Object(a.a)(s.b),
				l = Object(a.a)(s.C),
				p = Object(a.a)(s.a),
				f = Object(a.a)(s.K),
				m = Object(a.a)(s.J),
				y = Object(a.a)(s.I),
				b = Object(a.a)(s.M),
				g = Object(a.a)(s.L),
				j = Object(a.a)(s.H),
				v = (e, t) => async (r, a) => {
					const s = a(),
						i = Object(c.h)(s),
						d = Object(c.l)(s),
						u = t.getElement(n.CardNumberElement);
					if (!u) return;
					const {
						token: l,
						error: f
					} = await e.createToken(u, {
						name: i,
						address_zip: d
					});
					if (i.trim()) {
						if (!f && l) return l;
						r(g(f || void 0))
					} else {
						const e = o.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						r(p({
							message: e
						}))
					}
				}, O = Object(a.a)(s.B), h = Object(a.a)(s.N), E = Object(a.a)(s.G), P = Object(a.a)(s.g), C = Object(a.a)(s.D), x = Object(a.a)(s.E)
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
				a = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				s = r.n(c);
			t.a = e => {
				let {
					center: t,
					className: r,
					sizePx: n = 10
				} = e;
				return o.a.createElement("div", {
					className: Object(a.a)(s.a.loadingIcon, r, {
						[s.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${n}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/endpoints/gold/productOfferPurchase/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return g
			})), r.d(t, "a", (function() {
				return j
			})), r.d(t, "i", (function() {
				return v
			})), r.d(t, "h", (function() {
				return O
			})), r.d(t, "j", (function() {
				return h
			})), r.d(t, "g", (function() {
				return E
			})), r.d(t, "c", (function() {
				return P
			})), r.d(t, "e", (function() {
				return C
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "b", (function() {
				return w
			})), r.d(t, "l", (function() {
				return S
			})), r.d(t, "k", (function() {
				return k
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				o = r.n(n),
				a = r("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				c = r("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				s = r("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				i = r("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				d = r("./src/redditGQL/operations/CreateEconOrder.json"),
				u = r("./src/redditGQL/operations/CreatePaypalPayment.json"),
				l = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				p = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				f = r("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				m = r("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				y = r("./src/redditGQL/operations/UserSavedStripeCards.json"),
				b = r("./src/lib/makeGqlRequest/index.ts");
			const g = (e, t, r, n, a, c) => {
				const s = new o.a(n.price).multipliedBy(a).toFixed();
				return Object(b.a)(e, {
					...d,
					variables: {
						input: {
							nonce: t,
							productId: r.id,
							productVersion: r.version,
							pricePackageId: n.id,
							currency: n.currency,
							price: s,
							productsCount: a.toString(),
							...c
						}
					}
				})
			};
			var j;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(j || (j = {}));
			const v = (e, t, r, n) => Object(b.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				O = (e, t, r, n) => Object(b.a)(e, {
					...l,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				h = (e, t, r, n) => Object(b.a)(e, {
					...f,
					variables: {
						nonce: t,
						orderId: r,
						cardId: n
					}
				}),
				E = (e, t, r, n, o) => Object(b.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: r,
						successUrl: n,
						cancelUrl: o
					}
				}),
				P = (e, t, r, n) => Object(b.a)(e, {
					...c,
					variables: {
						nonce: t,
						paymentId: r,
						token: n
					}
				}),
				C = (e, t, r, n) => Object(b.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: r,
						cardId: n
					}
				}),
				x = (e, t, r, n, o) => Object(b.a)(e, {
					...s,
					variables: {
						nonce: t,
						paymentId: r,
						token: n,
						saveCard: o
					}
				}),
				w = (e, t) => Object(b.a)(e, {
					...a,
					variables: {
						orderId: t
					}
				}),
				S = e => Object(b.a)(e, {
					...y,
					variables: {}
				}),
				k = (e, t) => Object(b.a)(e, {
					...m,
					variables: {
						cardId: t
					}
				})
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/react-redux/es/index.js");

			function o() {
				return Object(n.d)()
			}
		},
		"./src/reddit/icons/svgs/Replay/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", a({}, e, {
				viewBox: "13 12 23 23",
				xmlns: "http://www.w3.org/2000/svg"
			}), o.a.createElement("g", null, o.a.createElement("path", {
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2",
				fill: "inherit"
			})))
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
				o = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				i = r("./src/reddit/actions/platform.ts"),
				d = r("./src/reddit/models/Gold/ProductOffer.ts"),
				u = r("./src/reddit/hooks/useThunkDispatch.ts"),
				l = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				p = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = r("./src/reddit/icons/svgs/Replay/index.tsx"),
				m = r("./src/reddit/pages/PaypalFinishPage/index.m.less"),
				y = r.n(m);
			const {
				fbt: b
			} = r("./node_modules/fbt/lib/FbtPublic.js"), g = "r", j = "o", v = "p", O = "approval_token_id", h = "s", E = "pt", P = Object(c.c)({
				paypalErrorMessage: l.d
			}), C = Object(a.b)(P);
			var x;
			! function(e) {
				e.Loading = "loading", e.Error = "error", e.Success = "success", e.Cancel = "cancel"
			}(x || (x = {}));
			t.default = C(e => {
				const {
					params: t,
					paypalErrorMessage: r
				} = e, a = t[g], c = t[j], l = t[h], m = t[v], P = t[O], C = t[E], w = Object(u.a)(), S = async () => {
					A(x.Loading), await w(Object(s.g)(m, P)) ? ((() => e.postMessage({
						type: "paypal-finish.success",
						data: {
							subredditId: a,
							orderId: c
						}
					}))(), setTimeout(() => {
						window.close(), A(x.Success)
					}, 1500)) : A(x.Error)
				};
				Object(n.useEffect)(() => {
					w(Object(i.m)({
						title: d.e[C]()
					})), l ? S() : ((() => e.postMessage({
						type: "paypal-finish.cancel"
					}))(), setTimeout(() => {
						window.close(), A(x.Cancel)
					}, 1500))
				}, []);
				const [k, A] = Object(n.useState)(x.Loading);
				return o.a.createElement(o.a.Fragment, null, k === x.Loading && o.a.createElement(p.a, {
					className: y.a.loader,
					sizePx: 60
				}), k === x.Error && o.a.createElement("div", {
					className: y.a.details
				}, r && o.a.createElement("div", {
					className: y.a.error
				}, r), o.a.createElement("button", {
					onClick: S,
					className: y.a.repeatButton
				}, o.a.createElement(f.a, {
					className: y.a.repeatIcon
				}))), k === x.Success && o.a.createElement("div", {
					className: y.a.details
				}, b._("Thanks for the purchase. It is safe to close this page now.", null, {
					hk: "1cdx2b"
				})), k === x.Cancel && o.a.createElement("div", {
					className: y.a.details
				}, b._("It is safe to close this page.", null, {
					hk: "Zh0mx"
				})))
			})
		},
		"./src/redditGQL/operations/CancelEconRecurringPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"ac36f7489268"}')
		},
		"./src/redditGQL/operations/ConfirmPaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"4a9f7376235b"}')
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
			e.exports = JSON.parse('{"id":"91f215ec5196"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.aa4c61e36d2be55aee86.js.map