// https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.9b47ccc3091da365e6b6.js
// Retrieved at 11/14/2022, 7:00:06 PM by Reddit Dataminer v1.0.0
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
						function e(e, t, n, o, a, s) {
							if (s !== r) {
								var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
								throw c.name = "Invariant Violation", c
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

				function s(e) {
					return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					})(e)
				}

				function c(e, t, r) {
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
							c(e, t, r[t])
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
								for (var s, c = e[Symbol.iterator](); !(n = (s = c.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
							} catch (i) {
								o = !0, a = i
							} finally {
								try {
									n || null == c.return || c.return()
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
						return null !== e && "object" === s(e)
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
									s = Object.keys(r);
								if (a.length !== s.length) return !1;
								for (var c = {}, i = 0; i < a.length; i += 1) c[a[i]] = !0;
								for (var d = 0; d < s.length; d += 1) c[s[d]] = !0;
								var u = Object.keys(c);
								if (u.length !== a.length) return !1;
								var l = t,
									p = r;
								return u.every((function(t) {
									return e(l[t], p[t])
								}))
							}(e[o], t[o]);
							return r.includes(o) ? (a && console.warn("Unsupported prop change: options.".concat(o, " is not a mutable property.")), n) : a ? d(d({}, n || {}), {}, c({}, o, e[o])) : n
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
						s = t.useRef(!0),
						c = t.useMemo((function() {
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
					null !== f && f !== r && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."), a.current || ("sync" === c.tag && (a.current = !0, l({
						stripe: c.stripe,
						elements: c.stripe.elements(n)
					})), "async" === c.tag && (a.current = !0, c.stripePromise.then((function(e) {
						e && s.current && l({
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
							s.current = !1
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
							s = r ? function(e) {
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
									s = r.options,
									c = void 0 === s ? {} : s,
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
									S = t.useRef(null),
									w = t.useRef(null),
									k = h(y),
									A = h(d),
									_ = h(l),
									I = h(C),
									N = h(g),
									L = h(O);
								t.useLayoutEffect((function() {
									if (null == S.current && x && null != w.current) {
										var t = x.create(e, c);
										S.current = t, t.mount(w.current), t.on("ready", (function() {
											return k(t)
										})), t.on("change", N), t.on("blur", A), t.on("focus", _), t.on("escape", L), t.on("click", I)
									}
								}));
								var R = p(c);
								return t.useEffect((function() {
									if (S.current) {
										var e = m(c, R, ["paymentRequest"]);
										e && S.current.update(e)
									}
								}), [c, R]), t.useLayoutEffect((function() {
									return function() {
										S.current && S.current.destroy()
									}
								}), []), t.createElement("div", {
									id: n,
									className: a,
									ref: w
								})
							};
						return s.propTypes = {
							id: a.string,
							className: a.string,
							onChange: a.func,
							onBlur: a.func,
							onFocus: a.func,
							onReady: a.func,
							onClick: a.func,
							options: a.object
						}, s.displayName = o, s.__elementType = e, s
					},
					C = "undefined" == typeof window,
					x = P("auBankAccount", C),
					S = P("card", C),
					w = P("cardNumber", C),
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
				e.AfterpayClearpayMessageElement = Q, e.AuBankAccountElement = x, e.CardCvcElement = A, e.CardElement = S, e.CardExpiryElement = k, e.CardNumberElement = w, e.Elements = j, e.ElementsConsumer = O, e.EpsBankElement = R, e.FpxBankElement = _, e.IbanElement = I, e.IdealBankElement = N, e.LinkAuthenticationElement = D, e.P24BankElement = L, e.PaymentElement = T, e.PaymentRequestButtonElement = G, e.ShippingAddressElement = B, e.useElements = function() {
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
			r.d(t, "a", (function() {
				return v
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "i", (function() {
				return E
			})), r.d(t, "g", (function() {
				return P
			})), r.d(t, "f", (function() {
				return C
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "b", (function() {
				return S
			})), r.d(t, "e", (function() {
				return k
			})), r.d(t, "h", (function() {
				return A
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/lodash/omit.js"),
				a = r.n(o),
				s = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				c = r("./src/config.ts"),
				i = (r("./src/reddit/actions/toaster.ts"), r("./src/lib/addQueryParams/index.ts")),
				d = r("./src/lib/makeActionCreator/index.ts"),
				u = r("./src/lib/sentry/index.ts"),
				l = (r("./src/reddit/models/Toast/index.ts"), r("./src/reddit/actions/gold/constants.ts")),
				p = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				f = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				m = r("./src/reddit/selectors/user.ts"),
				y = r("./src/reddit/actions/gold/powerups.ts"),
				b = r("./src/reddit/endpoints/gold/productOfferPurchase/index.ts");
			const g = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				j = e => e.map(e => e.message).join(" : "),
				v = (e, t, r, o) => async (a, c, i) => {
					let {
						gqlContext: d
					} = i;
					const u = Object(s.a)(),
						l = await Object(b.f)(d(), u, e, t, r, o);
					if (l.ok) {
						const e = l.body,
							{
								errors: t,
								order: r
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(j(t));
						if (r) return r.id
					}
					throw new Error((() => n.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, O = Object(p.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
					hk: "2LgB2E"
				})), h = e => !!e && e.hasOwnProperty("success"), E = e => {
					let {
						stripe: t,
						stripeElements: r,
						productOffer: n,
						pricePackage: o,
						productsCount: a,
						extraParams: c
					} = e;
					return async (e, i, d) => {
						let {
							gqlContext: l
						} = d;
						var m;
						const y = i();
						let g, h, E = "";
						try {
							E = await e(v(n, o, a, c))
						} catch (C) {
							return u.c.captureException(C), void(C.message && e(Object(p.stripeApiError)(C.message)))
						}
						e(Object(p.stripeTokenPending)());
						const P = Object(f.z)(y);
						if (P || (g = await e(Object(p.validateAndCreateStripeToken)(t, r)), h = Object(f.w)(y), g)) try {
							const r = Object(s.a)(),
								n = P || h ? g && h ? Object(b.h)(l(), r, E, g.id) : P ? Object(b.j)(l(), r, E, P) : null : Object(b.i)(l(), r, E, g.id),
								o = await n;
							if (!(null == o ? void 0 : o.ok)) return void e(O);
							const a = o.body.data.createEconPayment;
							if (null === (m = null == a ? void 0 : a.errors) || void 0 === m ? void 0 : m.length) return void e(Object(p.stripeApiError)(j(a.errors)));
							const {
								ok: c,
								payment: i,
								providerExecution: {
									paymentIntentClientSecret: d
								}
							} = a;
							if (c && i.status === b.a.ActionRequired) {
								const r = await t.confirmCardPayment(d),
									{
										error: n
									} = r;
								if (n) return ((e, t) => {
									var r, n;
									(null === (n = null === (r = e.payment_intent) || void 0 === r ? void 0 : r.last_payment_error) || void 0 === n ? void 0 : n.message) ? t(Object(p.stripeApiError)(e.payment_intent.last_payment_error.message)): e.message ? t(Object(p.stripeApiError)(e.message)) : t(O)
								})(n, e);
								let o;
								if (!(o = P ? await Object(b.e)(l(), Object(s.a)(), i.id, P) : await Object(b.d)(l(), Object(s.a)(), i.id, g.id, h)).ok) return void e(O);
								const a = o.body;
								if (!a.data.confirmEconPayment.ok || a.data.confirmEconPayment.payment.status !== b.a.Paid) return void e(O)
							} else if (c && i.status !== b.a.Paid) return void e(O);
							return {
								success: !0
							}
						} catch (C) {
							u.c.captureException(C), e(O)
						}
					}
				}, P = e => {
					let {
						productOffer: t,
						pricePackage: r,
						productsCount: n,
						extraParams: o,
						overrideModalParams: a
					} = e;
					return async (e, d, l) => {
						let {
							gqlContext: f
						} = l;
						var y;
						let O = "";
						try {
							O = await e(v(t, r, n, o))
						} catch (P) {
							return u.c.captureException(P), P.message && e(Object(p.paypalApiError)(P.message)), null
						}
						const h = c.a.redditUrl,
							E = {
								_o: h,
								o: O,
								pt: t.type,
								...a
							};
						try {
							const t = Object(i.a)(`${h}/framedModal/paypal-finish`, {
									...E,
									s: !0
								}),
								r = Object(i.a)(`${h}/framedModal/paypal-finish`, E),
								n = Object(s.a)(),
								o = await Object(b.g)(f(), n, O, t, r);
							if (o && o.ok) {
								const t = o.body.data.createEconPayment;
								if (null === (y = null == t ? void 0 : t.errors) || void 0 === y ? void 0 : y.length) return e(Object(p.paypalApiError)(j(t.errors))), null;
								const r = Object(m.l)(d());
								if (t.ok) {
									const {
										status: e
									} = t.payment;
									if (e === b.a.ActionRequired) {
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
							u.c.captureException(P)
						}
						return e(Object(p.paypalApiError)(g())), null
					}
				}, C = (e, t) => async (r, n, o) => {
					let {
						gqlContext: a
					} = o;
					var c;
					try {
						const n = Object(s.a)(),
							o = await Object(b.c)(a(), n, e, t);
						if (o && o.ok) {
							const e = o.body.data.confirmEconPayment;
							if (null === (c = null == e ? void 0 : e.errors) || void 0 === c ? void 0 : c.length) return r(Object(p.paypalApiError)(j(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (i) {
						u.c.captureException(i)
					}
					return r(Object(p.paypalApiError)(g())), !1
				}, x = () => async (e, t, r) => {
					let {
						gqlContext: o
					} = r;
					var s;
					e(Object(p.savedCardsPending)());
					try {
						const t = await Object(b.l)(o());
						if (t.error) throw e(Object(p.stripeApiError)(n.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						}))), new Error(t.error.type);
						const r = t.body;
						(null === (s = r.errors) || void 0 === s ? void 0 : s.length) && e(Object(p.stripeApiError)(r.errors[0].message));
						const {
							savedStripeCards: c
						} = r.data.identity, i = c.map(e => a()({
							...e,
							cardId: e.id
						}, "id"));
						e(Object(p.savedCardsSuccess)(i)), i[0] && e(Object(p.selectSavedCard)(i[0].cardId))
					} catch (c) {
						u.c.captureException(c), e(Object(p.savedCardsSuccess)([]))
					}
				}, S = e => async (t, r, n) => {
					let {
						gqlContext: o
					} = n;
					t(Object(p.deleteSavedCard)(e));
					try {
						const t = await Object(b.k)(o(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: n
							} = r.data.deleteEconPaymentMethod;
						if (n && n.length) throw new Error(j(n))
					} catch (a) {
						u.c.captureException(a)
					}
				}, w = (Object(d.a)(l.M), Object(d.a)(l.N), Object(d.a)(l.O), Object(d.a)(l.P)), k = e => {
					let {
						user: t
					} = e;
					return async e => {
						await e(Object(y.g)(!0)), e(w({
							user: t
						}))
					}
				}, A = Object(d.a)(l.T)
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
			})), r.d(t, "postalCodeEmpty", (function() {
				return f
			})), r.d(t, "cardNumberChange", (function() {
				return m
			})), r.d(t, "cardExpiryChange", (function() {
				return y
			})), r.d(t, "cardCvcChange", (function() {
				return b
			})), r.d(t, "stripeTokenPending", (function() {
				return g
			})), r.d(t, "stripeTokenError", (function() {
				return j
			})), r.d(t, "stripeApiError", (function() {
				return v
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return O
			})), r.d(t, "paypalApiError", (function() {
				return h
			})), r.d(t, "toggleRememberCard", (function() {
				return E
			})), r.d(t, "selectSavedCard", (function() {
				return P
			})), r.d(t, "deleteSavedCard", (function() {
				return C
			})), r.d(t, "savedCardsPending", (function() {
				return x
			})), r.d(t, "savedCardsSuccess", (function() {
				return S
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				o = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const i = Object(a.a)(c.G),
				d = Object(a.a)(c.A),
				u = Object(a.a)(c.b),
				l = Object(a.a)(c.D),
				p = Object(a.a)(c.a),
				f = Object(a.a)(c.C),
				m = Object(a.a)(c.L),
				y = Object(a.a)(c.K),
				b = Object(a.a)(c.J),
				g = Object(a.a)(c.N),
				j = Object(a.a)(c.M),
				v = Object(a.a)(c.I),
				O = (e, t) => async (r, a) => {
					const c = a(),
						i = Object(s.h)(c),
						d = Object(s.l)(c),
						u = t.getElement(n.CardNumberElement);
					if (!u) return;
					const {
						token: l,
						error: m
					} = await e.createToken(u, {
						name: i,
						address_zip: d
					}), y = !d.trim();
					if (y) {
						const e = o.fbt._("Your ZIP code is incomplete", null, {
							hk: "4bttPr"
						});
						r(f({
							message: e
						}))
					}
					m && r(j(m));
					const b = !i.trim();
					if (b) {
						const e = o.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						r(p({
							message: e
						}))
					}
					return y || m || b ? void 0 : l
				}, h = Object(a.a)(c.B), E = Object(a.a)(c.O), P = Object(a.a)(c.H), C = Object(a.a)(c.g), x = Object(a.a)(c.E), S = Object(a.a)(c.F)
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
				s = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = r.n(s);
			t.a = e => {
				let {
					center: t,
					className: r,
					sizePx: n = 10
				} = e;
				return o.a.createElement("div", {
					className: Object(a.a)(c.a.loadingIcon, r, {
						[c.a.mCentered]: t
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
				return S
			})), r.d(t, "l", (function() {
				return w
			})), r.d(t, "k", (function() {
				return k
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				o = r.n(n),
				a = r("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				s = r("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				c = r("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				i = r("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				d = r("./src/redditGQL/operations/CreateEconOrder.json"),
				u = r("./src/redditGQL/operations/CreatePaypalPayment.json"),
				l = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				p = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				f = r("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				m = r("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				y = r("./src/redditGQL/operations/UserSavedStripeCards.json"),
				b = r("./src/lib/makeGqlRequest/index.ts");
			const g = (e, t, r, n, a, s) => {
				const c = new o.a(n.price).multipliedBy(a).toFixed();
				return Object(b.a)(e, {
					...d,
					variables: {
						input: {
							nonce: t,
							productId: r.id,
							productVersion: r.version,
							pricePackageId: n.id,
							currency: n.currency,
							price: c,
							productsCount: a.toString(),
							...s
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
					...s,
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
					...c,
					variables: {
						nonce: t,
						paymentId: r,
						token: n,
						saveCard: o
					}
				}),
				S = (e, t) => Object(b.a)(e, {
					...a,
					variables: {
						orderId: t
					}
				}),
				w = e => Object(b.a)(e, {
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
				s = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
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
			} = r("./node_modules/fbt/lib/FbtPublic.js"), g = "r", j = "o", v = "p", O = "approval_token_id", h = "s", E = "pt", P = Object(s.c)({
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
				} = e, a = t[g], s = t[j], l = t[h], m = t[v], P = t[O], C = t[E], S = Object(u.a)(), w = async () => {
					A(x.Loading), await S(Object(c.f)(m, P)) ? ((() => e.postMessage({
						type: "paypal-finish.success",
						data: {
							subredditId: a,
							orderId: s
						}
					}))(), setTimeout(() => {
						window.close(), A(x.Success)
					}, 1500)) : A(x.Error)
				};
				Object(n.useEffect)(() => {
					S(Object(i.m)({
						title: d.e[C]()
					})), l ? w() : ((() => e.postMessage({
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
					onClick: w,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.9b47ccc3091da365e6b6.js.map